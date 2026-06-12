<?php
/**
 * Alpaca Expo Group — Union theme functions.
 *
 * WordPress integration layer for the Vite-based SPA landing page.
 * The JS side reads window.AEG_DATA; this file populates it from
 * the 'project' and 'review' custom post types.
 */

if ( ! defined( '_AEG_UNION_VERSION' ) ) {
	define( '_AEG_UNION_VERSION', '1.0.0' );
}

// ─── Theme Setup ─────────────────────────────────────────────────────────────

function aeg_union_setup() {
	load_theme_textdomain( 'alpacaexpogroup-union', get_template_directory() . '/languages' );
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'aeg_union_setup' );

// ─── Admin column: review job name ───────────────────────────────────────────

function aeg_union_review_admin_columns( $columns ) {
	$result = array();
	foreach ( $columns as $key => $label ) {
		if ( $key === 'date' ) {
			$result['job_name'] = esc_html__( 'Job Name', 'alpacaexpogroup-union' );
		}
		$result[ $key ] = $label;
	}
	return $result;
}
add_filter( 'manage_review_posts_columns', 'aeg_union_review_admin_columns' );

function aeg_union_review_admin_column_content( $column, $post_id ) {
	if ( $column !== 'job_name' ) return;
	$common   = get_field( 'common', $post_id ) ?: array();
	$job_name = $common['job_name'] ?? '';
	echo $job_name ? esc_html( $job_name ) : '—';
}
add_action( 'manage_review_posts_custom_column', 'aeg_union_review_admin_column_content', 10, 2 );

// ─── Data Fetching ────────────────────────────────────────────────────────────

/**
 * Builds a single project array from a post ID and its position index.
 */
function aeg_union_build_project( $post_id, $index ) {
	$title = get_the_title( $post_id );

	// Customer (client name)
	$customers = get_the_terms( $post_id, 'customer' );
	$client    = ( ! empty( $customers ) && ! is_wp_error( $customers ) )
		? $customers[0]->name
		: '';

	// Project tags → details string
	$tag_terms = get_the_terms( $post_id, 'project-tag' );
	$tag_names = ( ! empty( $tag_terms ) && ! is_wp_error( $tag_terms ) )
		? wp_list_pluck( $tag_terms, 'name' )
		: array();
	$details   = ! empty( $tag_names ) ? implode( ' · ', $tag_names ) : '';

	// revealClass cycles: '', 'd1', 'd2'
	$reveal_map   = array( '', 'd1', 'd2' );
	$reveal_class = $reveal_map[ $index % 3 ];

	// Media list from ACF field 'common_media_list'
	$raw_media  = get_field( 'common_media_list', $post_id ) ?: array();
	$media_list = array();

	// Thumbnail as first image slide
	$thumbnail_url = get_the_post_thumbnail_url( $post_id, 'full' );
	if ( $thumbnail_url ) {
		$media_list[] = array(
			'type' => 'image',
			'src'  => $thumbnail_url,
			'alt'  => $title,
		);
	}

	foreach ( $raw_media as $item ) {
		if ( ! empty( $item['youtube_video_id'] ) ) {
			$media_list[] = array(
				'type'      => 'youtube',
				'youtubeId' => sanitize_text_field( $item['youtube_video_id'] ),
				'alt'       => $title,
			);
			continue;
		}

		$attachment_id = ! empty( $item['image'] )
			? $item['image']
			: ( $item['video'] ?? null );

		if ( ! $attachment_id ) continue;

		$mime = get_post_mime_type( $attachment_id );
		$type = ( $mime && strpos( $mime, 'video' ) === 0 ) ? 'video' : 'image';
		$src  = $type === 'video'
			? wp_get_attachment_url( $attachment_id )
			: wp_get_attachment_image_url( $attachment_id, 'full' );

		if ( ! $src ) continue;

		$media_list[] = array(
			'type' => $type,
			'src'  => $src,
			'alt'  => $title,
		);
	}

	return array(
		'id'          => 'project-' . $post_id,
		'client'      => $client,
		'title'       => $title,
		'details'     => array( $details ),
		'revealClass' => $reveal_class,
		'media'       => $media_list,
	);
}

/**
 * Fetches projects and maps them to the AEG_DATA shape.
 *
 * If the current page has an ACF field 'projects' → 'projects_list',
 * those posts are used directly (preserving admin order).
 * Otherwise falls back to all published 'project' posts ordered by date.
 *
 * JS renderers expect:
 *   { id, client, title, details, revealClass, media: [{type, src|youtubeId, alt}] }
 */
function aeg_union_get_projects() {
	$projects = array();
	$index    = 0;

	// Check current page for an explicit projects list
	$page_id       = get_queried_object_id();
	$page_settings = $page_id ? ( get_field( 'projects', $page_id ) ?: array() ) : array();
	$projects_list = $page_settings['projects_list'] ?? array();

	if ( ! empty( $projects_list ) ) {
		// Use the manually curated list — no WP_Query needed
		foreach ( $projects_list as $post_obj ) {
			$post_id    = is_object( $post_obj ) ? $post_obj->ID : (int) $post_obj;
			$projects[] = aeg_union_build_project( $post_id, $index++ );
		}
		return $projects;
	}

	// Fallback: all published projects ordered by date
	$query = new WP_Query( array(
		'post_type'      => 'project',
		'posts_per_page' => -1,
		'orderby'        => 'date',
		'order'          => 'DESC',
	) );

	if ( $query->have_posts() ) {
		while ( $query->have_posts() ) {
			$query->the_post();
			$projects[] = aeg_union_build_project( get_the_ID(), $index++ );
		}
		wp_reset_postdata();
	}

	return $projects;
}

/**
 * Fetches all published reviews and maps them to the AEG_DATA shape.
 *
 * JS renderers expect:
 *   { id, company, logo: {type, src, alt} | {type:'html', html}, text, authorName, authorPosition }
 */
/**
 * Builds a single review array from a post ID.
 */
function aeg_union_build_review( $review_id ) {
	// Company name from customer taxonomy
	$customers = get_the_terms( $review_id, 'customer' );
	$company   = ( ! empty( $customers ) && ! is_wp_error( $customers ) )
		? $customers[0]->name
		: '';

	// Logo from customer term ACF field
	$logo = array( 'type' => 'html', 'html' => '' ); // fallback: no logo
	if ( ! empty( $customers ) && ! is_wp_error( $customers ) ) {
		$customer_common    = get_field( 'common', 'customer_' . $customers[0]->term_id );
		$logo_attachment_id = $customer_common['image'] ?? null;

		if ( $logo_attachment_id ) {
			$logo_url = wp_get_attachment_image_url( $logo_attachment_id, 'full' );
			$logo_alt = get_post_meta( $logo_attachment_id, '_wp_attachment_image_alt', true )
				?: $customers[0]->name;

			if ( $logo_url ) {
				$logo = array(
					'type' => 'image',
					'src'  => $logo_url,
					'alt'  => $logo_alt,
				);
			}
		}
	}

	// Review text and author position from ACF 'common' field
	$common     = get_field( 'common', $review_id ) ?: array();
	$text       = $common['comment']  ?? '';
	$author_pos = $common['job_name'] ?? '';

	return array(
		'id'             => 'review-' . $review_id,
		'company'        => $company,
		'logo'           => $logo,
		'text'           => $text,
		'authorName'     => get_the_title( $review_id ),
		'authorPosition' => $author_pos,
	);
}

/**
 * Fetches reviews and maps them to the AEG_DATA shape.
 *
 * If the current page has an ACF field 'reviews' → 'reviews_list',
 * those posts are used directly (preserving admin order).
 * Otherwise falls back to all published 'review' posts ordered by date.
 *
 * JS renderers expect:
 *   { id, company, logo: {type, src, alt} | {type:'html', html}, text, authorName, authorPosition }
 */
function aeg_union_get_reviews() {
	$reviews = array();

	// Check current page for an explicit reviews list
	$page_id       = get_queried_object_id();
	$page_settings = $page_id ? ( get_field( 'reviews', $page_id ) ?: array() ) : array();
	$reviews_list  = $page_settings['reviews_list'] ?? array();

	if ( ! empty( $reviews_list ) ) {
		// Use the manually curated list — no WP_Query needed
		foreach ( $reviews_list as $post_obj ) {
			$review_id = is_object( $post_obj ) ? $post_obj->ID : (int) $post_obj;
			$reviews[] = aeg_union_build_review( $review_id );
		}
		return $reviews;
	}

	// Fallback: all published reviews ordered by date
	$query = new WP_Query( array(
		'post_type'      => 'review',
		'posts_per_page' => -1,
		'orderby'        => 'date',
		'order'          => 'DESC',
	) );

	if ( $query->have_posts() ) {
		while ( $query->have_posts() ) {
			$query->the_post();
			$reviews[] = aeg_union_build_review( get_the_ID() );
		}
		wp_reset_postdata();
	}

	return $reviews;
}

/**
 * Assembles the full AEG_DATA object for the JS renderer.
 */
function aeg_union_get_aeg_data() {
	return array(
		'projects' => aeg_union_get_projects(),
		'reviews'  => aeg_union_get_reviews(),
	);
}

// ─── CF7 Request Form Integration ────────────────────────────────────────────

function aeg_union_cf7_integration() {
	$js = '
document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById("aeg-cf7-form-container");
  if (!container) return;
  var popup = document.getElementById("requestPopup");
  if (!popup) return;
  var existingForm = popup.querySelector(".request-form");
  if (!existingForm) return;
  var cf7Wrapper = container.querySelector(".wpcf7");
  if (!cf7Wrapper) return;
  existingForm.replaceWith(cf7Wrapper);
});';

	wp_add_inline_script( 'aeg-union-main', $js, 'after' );
}
add_action( 'wp_enqueue_scripts', 'aeg_union_cf7_integration', 20 );

// ─── Enqueue Vite Build Assets ────────────────────────────────────────────────

function aeg_union_enqueue_scripts() {
	$dist_dir = get_template_directory() . '/dist/assets';
	$dist_uri = get_template_directory_uri() . '/dist/assets';

	if ( ! is_dir( $dist_dir ) ) {
		// dist/ not built yet — nothing to enqueue
		return;
	}

	// Enqueue all CSS files from dist/assets/
	$css_files = glob( $dist_dir . '/*.css' );
	if ( $css_files ) {
		foreach ( $css_files as $css_path ) {
			$handle = 'aeg-union-' . basename( $css_path, '.css' );
			$url    = $dist_uri . '/' . basename( $css_path );
			wp_enqueue_style( $handle, $url, array(), null );
		}
	}

	// Enqueue the main JS entry file from dist/assets/
	// Vite names the entry as index-[hash].js (based on input filename)
	$js_files = glob( $dist_dir . '/index-*.js' );
	$main_js  = ! empty( $js_files ) ? reset( $js_files ) : null;

	if ( $main_js ) {
		$handle = 'aeg-union-main';
		$url    = $dist_uri . '/' . basename( $main_js );
		wp_enqueue_script( $handle, $url, array(), null, true );

		// Vite ES module — requires type="module" and crossorigin
		add_filter( 'script_loader_tag', function ( $tag, $h ) use ( $handle ) {
			if ( $h !== $handle ) return $tag;
			return str_replace( '<script ', '<script type="module" crossorigin ', $tag );
		}, 10, 2 );

		// Inject window.AEG_DATA before the main script runs
		$aeg_data = aeg_union_get_aeg_data();
		wp_add_inline_script(
			$handle,
			'window.AEG_DATA = ' . wp_json_encode( $aeg_data ) . ';',
			'before'
		);
	}
}
add_action( 'wp_enqueue_scripts', 'aeg_union_enqueue_scripts' );
