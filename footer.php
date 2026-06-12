<?php
$_aeg_page_id   = get_queried_object_id();
$_aeg_concept   = $_aeg_page_id ? ( get_field( 'request_concept', $_aeg_page_id ) ?: [] ) : [];
$_aeg_shortcode = $_aeg_concept['form_shortcode'] ?? '';
if ( $_aeg_shortcode ) :
?>
<div id="aeg-cf7-form-container"
     style="position:absolute;width:0;height:0;overflow:hidden;pointer-events:none;"
     aria-hidden="true">
  <?php echo do_shortcode( $_aeg_shortcode ); ?>
</div>
<?php endif; ?>
<?php wp_footer(); ?>
</body>
</html>
