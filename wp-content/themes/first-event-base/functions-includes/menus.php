<?php

//Registers Menus
add_action( 'init', 'register_my_menus' );

function register_my_menus() {
register_nav_menus(
array(
	register_nav_menu( 'main-menu', __( 'Main Menu','textdomain' ) )
));
}

//Show  admin bar for admin
show_admin_bar( true );

// Disable Admin bar for all users except Admin
add_action('after_setup_theme', 'remove_admin_bar');

function remove_admin_bar() {
if (!current_user_can('administrator') && !is_admin()) {
  show_admin_bar(false);
}
}


////////////////////////////////////////
// MENU CUSTOMISATIONS 
////////////////////////////////////////

/**
 * Append manual items to menus
 */

add_filter( 'wp_nav_menu_items', 'add_manual_menu_items', 10, 2 );

function add_manual_menu_items( $items, $args ) {

	$search_link = '/?s=';

    if ($args->theme_location == 'header') {
		$items .= '
			<li class="menu-item-search">
				<a href="'.$search_link.'" class="search-icon">Search</a>
			</li>';
    }
    return $items;
}




add_filter( 'nav_menu_css_class', 'add_parent_url_menu_class', 10, 2 );

function add_parent_url_menu_class( $classes = array(), $item = false ) {
	// Get current URL
	$current_url = current_url();

	// Get homepage URL
	$homepage_url = trailingslashit( get_bloginfo( 'url' ) );

	// Exclude 404 and homepage
	if( is_404() or $item->url == $homepage_url ) return $classes;

	if ( strstr( $current_url, $item->url) ) {
		// Add the 'parent_url' class
		$classes[] = 'current-menu-item';
	}

	return $classes;
}

function your_theme_customizer_setting($wp_customize) {
	// add a setting 
		$wp_customize->add_setting('your_theme_hover_logo');
	// Add a control to upload the hover logo
		$wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'your_theme_hover_logo', array(
			'label' => 'Upload Hover Logo',
			'section' => 'title_tagline', //this is the section where the custom-logo from WordPress is
			'settings' => 'your_theme_hover_logo',
			'priority' => 8 // show it just below the custom-logo
		)));
	}
	
	add_action('customize_register', 'your_theme_customizer_setting');

// menu item data ids
add_filter( 'nav_menu_link_attributes', 'wpse121123_contact_menu_atts', 10, 3 );
function wpse121123_contact_menu_atts( $atts, $item, $args )
{
  // The ID of the target menu item
  $menu_target = 471;

  // inspect $item
  if ($item->ID == $menu_target) {
    $atts['data-id'] = 'popup-login';
  }
  return $atts;
}

?>
