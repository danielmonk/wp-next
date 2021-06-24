<?php

////////////////////////////////////////
// SETUP FUNCTIONS
////////////////////////////////////////
	// Support
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'automatic-feed-links' );
	remove_action( 'wp_head', 'rsd_link' );
	remove_action( 'wp_head', 'index_rel_link' );
	remove_action( 'wp_head', 'wlwmanifest_link' );
	remove_action( 'wp_head', 'feed_links_extra', 3 );
	add_filter( 'the_excerpt_rss', 'theme_post_thumbnail_feeds' );
	add_filter( 'the_content_feed', 'theme_post_thumbnail_feeds' );

/**
 * Remove generated version number from Wordpress - security flag
 *
 * @return string Blank version number
 */
remove_action( 'wp_head', 'wp_generator' );


/**
 * Remove adjacent posts tag
 */
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );


/**
 * Remove the display of flagged Wordpress login errors
 *
 * @return void
 */
function no_wordpress_errors(){
  return 'Something is wrong!';
}
add_filter( 'login_errors', 'no_wordpress_errors' );


/**
 * Remove Welcome Panel from Wordpress dashboard
 */
remove_action('welcome_panel', 'wp_welcome_panel');


add_filter( 'body_class', 'theme_body_classes' );

function theme_body_classes( $classes ) {
	if ( is_singular() && !is_home() )
		$classes[] = 'singular';
	return $classes;
}

add_theme_support( 'title-tag' );
add_theme_support( 'custom-logo' );

// body class
function add_slug_body_class( $classes ) {
global $post;
if ( isset( $post ) ) {
$classes[] = $post->post_type . '-' . $post->post_name;
}
return $classes;
}
add_filter( 'body_class', 'add_slug_body_class' );

function mv_browser_body_class($classes) {
    global $is_lynx, $is_gecko, $is_IE, $is_opera, $is_NS4, $is_safari, $is_chrome, $is_iphone;
 
    if($is_lynx) $classes[] = 'lynx';
    elseif($is_gecko) $classes[] = 'gecko';
    elseif($is_opera) $classes[] = 'opera';
    elseif($is_NS4) $classes[] = 'ns4';
    elseif($is_safari) $classes[] = 'safari';
    elseif($is_chrome) $classes[] = 'chrome';
    elseif($is_IE) {
        $classes[] = 'ie';
        if(preg_match('/MSIE ([0-9]+)([a-zA-Z0-9.]+)/', $_SERVER['HTTP_USER_AGENT'], $browser_version))
        $classes[] = 'ie'.$browser_version[1];
 
    } else $classes[] = 'unknown';
 
    if($is_iphone) $classes[] = 'iphone';
 
    if ( stristr( $_SERVER['HTTP_USER_AGENT'],"mac") ) {
         $classes[] = 'osx';
       } elseif ( stristr( $_SERVER['HTTP_USER_AGENT'],"linux") ) {
         $classes[] = 'linux';
       } elseif ( stristr( $_SERVER['HTTP_USER_AGENT'],"windows") ) {
         $classes[] = 'windows';
       }
    return $classes;
}
add_filter('body_class','mv_browser_body_class');