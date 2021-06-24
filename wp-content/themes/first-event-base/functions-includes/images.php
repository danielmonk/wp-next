<?php

////////////////////////////////////////
// IMAGE SIZES 
////////////////////////////////////////

add_image_size( 'accordion-header', 960, 144, false );
add_image_size( 'post-thumb', 600, 360, true );
add_image_size( 'headshot', 600, 600, true );





////////////////////////////////////////
// IMAGE CONTROLS 
////////////////////////////////////////

/**
 * Resized JPG Quality control
 */
add_filter( 'jpeg_quality', function() { return 100; } );


/**
* Set default to no link when inserting media into posts/pages
*/
function wpb_imagelink_setup() {
    $image_set = get_option( 'image_default_link_type' );
    if ($image_set !== 'none') {
        update_option('image_default_link_type', 'none');
    }
}
add_action('admin_init', 'wpb_imagelink_setup', 10);


/**
* Append custom image sizes to be selectable in media insert window
*/
function my_insert_custom_image_sizes( $sizes ) {
	global $_wp_additional_image_sizes;
	
	if ( empty($_wp_additional_image_sizes) )
		return $sizes;

	foreach ( $_wp_additional_image_sizes as $id => $data ) {
		if ( !isset($sizes[$id]) )
			 $sizes[$id] = ucfirst( str_replace( '-', ' ', $id ) );
	}

	return $sizes;
}
add_filter( 'image_size_names_choose', 'my_insert_custom_image_sizes' );







////////////////////////////////////////
// IMAGE MARKUP 
////////////////////////////////////////


/**
 * Customise send image to WYSIWYG markup
 *
 * @param string $html
 * @param int $id
 * @param string $caption
 * @param string $title
 * @param string $align
 * @param string $url
 * @param string $size
 * @param string $alt
 * @return $html_str Compiled HTML string
 */

function custom_send_image_to_editor( $html, $id, $caption, $title, $align, $url, $size, $alt ) {

	$url = wp_get_attachment_url($id);

	$html_str = '<div class="align-' . esc_attr($align) . '">';

  		$html_str .= "<p><img src='$url' alt='$title' /></p>";

		if($caption) $html_str .= '
		<p class="wp-caption-text">' . $caption . '</p>
		';

	$html_str .= '</div>';

    return $html_str;
}
add_filter( 'image_send_to_editor', 'custom_send_image_to_editor', 10, 8 );

// Allow SVG
add_filter( 'wp_check_filetype_and_ext', function($data, $file, $filename, $mimes) {

	global $wp_version;
	if ( $wp_version !== '4.7.1' ) {
	   return $data;
	}
  
	$filetype = wp_check_filetype( $filename, $mimes );
  
	return [
		'ext'             => $filetype['ext'],
		'type'            => $filetype['type'],
		'proper_filename' => $data['proper_filename']
	];
  
  }, 10, 4 );
  
  function cc_mime_types( $mimes ){
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
  }
  add_filter( 'upload_mimes', 'cc_mime_types' );
  
  function fix_svg() {
	echo '<style type="text/css">
		  .attachment-266x266, .thumbnail img {
			   width: 100% !important;
			   height: auto !important;
		  }
		  </style>';
  }
  add_action( 'admin_head', 'fix_svg' );