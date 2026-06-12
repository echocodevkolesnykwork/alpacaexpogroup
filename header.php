<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#020d1a">

  <?php
  // Favicon
  $fav = get_template_directory_uri() . '/dist/assets/favicon';
  ?>
  <link rel="icon" type="image/png" href="<?php echo esc_url( $fav ); ?>/favicon-96x96.png" sizes="96x96">
  <link rel="icon" type="image/svg+xml" href="<?php echo esc_url( $fav ); ?>/favicon.svg">
  <link rel="shortcut icon" href="<?php echo esc_url( $fav ); ?>/favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="<?php echo esc_url( $fav ); ?>/apple-touch-icon.png">
  <meta name="apple-mobile-web-app-title" content="Alpaca Gambling">
  <link rel="manifest" href="<?php echo esc_url( $fav ); ?>/site.webmanifest">

  <?php // Google Fonts — async load pattern from dist/index.html ?>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    rel="preload"
    as="style"
    href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&family=DM+Sans:wght@300;400;500&display=swap"
    onload="this.onload=null;this.rel='stylesheet'"
  >
  <noscript>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;700&family=DM+Sans:wght@300;400;500&display=swap">
  </noscript>

  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
