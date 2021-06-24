<?php

/**
 *
 * @link       http://www.deepenbajracharya.com.np
 * @since      1.0.0
 *
 * @package    Video Conferencing with Zoom API
 */

// If uninstall not called from WordPress, then exit.
if ( ! defined( 'WP_UNINSTALL_PLUGIN' ) ) {
	exit;
}

// Remove saved options
$plugin_options = array(
	'zoom_api_key',
	'zoom_api_secret',
	'zoom_app_verification_token',
	'zoom_api_meeting_options',
	'zoom_api_webinar_options',
	'zoom_vanity_url',
	'zoom_simd_token',
	'zoom_help_text_disable',
	'zoom_join_before_time',
	'zoom_join_via_app_pass',
	'zoom_disable_no_cache',
	'zoom_auto_display_recording',
	'zoom_recording_via',
	'zoom_autoplay_recording',
	'zoom_register_for_meeting',
	'zoom_window_size',
	'zoom_join_via_web_disable',
	'zoom_compatiblity_text_disable',
	'zoom_api_dismiss_share_notice',
	'zoom_alternative_join',
	'zoom_btn_css_class',
	'zoom_join_via_web_text',
	'zoom_join_via_app_text',
	'zoom_width_meeting_window',
	'zoom_height_meeting_window',
	'zoom_ssl_message',
	'zoom_subscribe_link',
	'zoom_wp_is_subscribed_to_mc',
	'zoom_hide_recordings',
	'zoom_hide_countdown_timer',
	'zoom_disable_scroll_to_window',
	'zoom_wp_license_key_22283',
	'zoom_wp_license',
	'zoom_countdown_title',
	'meeting_thankyou_message',
	'meeting_window_custom_css',
	'zoom_meeting_title',
	'zoom_meeting_lang_select',
	'zoom_meeting_autojoin',
	'zoom_meeting_autoend',
	'zoom_meeting_attendee_name_format',
	'zoom_meeting_can_host_role',
	'zoom_meeting_can_host_capability',
	'zoom_meeting_calendar_link',
	'zoom_meeting_join_app_target',
	'zoom_meeting_thankyou_redirect',
	'zoom_authorization_header_missing',
	'zoom_authorization_header_incorrect',
	'zoom_api_users_list',
	'zoom_wp_license_expire',
	'zoom_owner_host_id',
);
foreach ( $plugin_options as $option ) {
	delete_option( $option );
}

// Remove meta data
global $wpdb;
$wpdb->query( "DELETE FROM $wpdb->usermeta WHERE meta_key LIKE 'zoom_meeting_id_%'" );
$wpdb->query( "DELETE FROM $wpdb->usermeta WHERE meta_key = 'user_zoom_hostid'" );
$wpdb->query( "DELETE FROM $wpdb->postmeta WHERE meta_key = 'zoom_api_meeting_options' OR meta_key = 'zoom_api_webinar_options'" );
$wpdb->query( "DELETE FROM $wpdb->options WHERE option_name LIKE 'zoom_api_meetings_list_%' OR option_name LIKE 'zoom_password_meeting_%'" );

// Remove cronjob
$timestamp = wp_next_scheduled( 'zoom_wp_main_cron_sync_data_hook' );
wp_unschedule_event( $timestamp, 'zoom_wp_main_cron_sync_data_hook' );
