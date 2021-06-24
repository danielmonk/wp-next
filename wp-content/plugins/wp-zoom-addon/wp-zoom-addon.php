<?php
/**
 * @link              https://elearningevolve.com
 * @since             3.0.0
 * @package           Zoom WordPress Plugin
 *
 * Plugin Name:       Zoom WordPress Plugin
 * Plugin URI:        http://elearningevolve.com/products/wordpress-zoom-addon
 * Description:       Allows you to manage and conduct Zoom meetings directly on your WordPress site
 * Version:           4.14.1
 * Author:            eLearning evolve
 * Author URI:        https://elearningevolve.com
 * Text Domain:       video-conferencing-with-zoom-api
 * Domain Path:       /languages
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 */
// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'Not Allowed Here !' );
}


include_once dirname( __FILE__ ) . '/includes/video-conferencing-with-zoom-init.php';
add_action( 'plugins_loaded', array( 'Video_Conferencing_With_Zoom', 'instance' ), 0 );

if ( ! function_exists( 'get_plugin_data' ) ) {
	include_once ABSPATH . 'wp-admin' . DIRECTORY_SEPARATOR . 'includes' . DIRECTORY_SEPARATOR . 'plugin.php';
}

if ( function_exists( 'get_plugin_data' ) ) {
	$plugin_data = get_plugin_data( __FILE__ );

	$eevolve_constants = array(
		'ZVCW_ZOOM_ITEM_ID'          => 22283,
		'ZVCW_ZOOM_STORE_URL'        => esc_html( $plugin_data['AuthorURI'] ),
		'ZVCW_ZOOM_PLUGIN_VER'       => esc_html( $plugin_data['Version'] ),
		'ZVCW_ZOOM_PLUGIN_NAME'      => esc_html( $plugin_data['Name'] ),
		'ZVCW_ZOOM_BASE_PLUGIN_NAME' => plugin_basename( __FILE__ )
	);

	foreach ( $eevolve_constants as $constant => $value ) {
		if ( ! defined( $constant ) ) {
			define( $constant, $value );
		}
	}
}

if ( is_admin() ) {
	register_activation_hook( __FILE__, array( 'Video_Conferencing_With_Zoom', 'activator' ) );

	if ( ! class_exists( 'Zoom_WP_SL_Plugin_Updater' ) ) {
		// load our custom updater
		include_once( dirname( __FILE__ ) . '/Zoom_WP_SL_Plugin_Updater.php' );
	}

	$DuqB9MQDBNJ25Xva = trim( get_option( 'zoom_wp_license_key_' . ZVCW_ZOOM_ITEM_ID ) );

	// setup the updater
	if ( class_exists( 'Zoom_WP_SL_Plugin_Updater' ) ) {
		new Zoom_WP_SL_Plugin_Updater(
			ZVCW_ZOOM_STORE_URL,
			__FILE__,
			array(
				'version' => ZVCW_ZOOM_PLUGIN_VER,
				'license' => $DuqB9MQDBNJ25Xva,
				'item_id' => ZVCW_ZOOM_ITEM_ID,
				'author'  => 'Adeel Raza',
				'url'     => home_url(),
			)
		);
	}
}
