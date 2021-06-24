<?php

/**
 * Registering the Pages Here
 *
 * @since   2.0.0
 * @author  Deepen
 */
class Zoom_Video_Conferencing_Admin_Views {

	public static $message = '';
	public $settings;

	public function __construct() {
		add_action( 'admin_menu', array( $this, 'zoom_video_conference_menus' ), 99999 );
		add_action( 'init', array( $this, 'zoom_wp_extension_activate_license' ) );
		add_action( 'init', array( $this, 'zoom_wp_extension_deactivate_license' ) );

		add_action( 'init', array( $this, 'zoom_wp_activate_license' ) );
		add_action( 'init', array( $this, 'zoom_wp_deactivate_license' ) );
	}

	/**
	 * Register Menus
	 *
	 * @since   1.0.0
	 * @changes in CodeBase
	 */
	public function zoom_video_conference_menus() {
		$capability = apply_filters( 'zoom_wp_menu_access_cap', 'manage_options' );

		add_menu_page( 'Zoom', 'Zoom Meetings', $capability, 'zoom-video-conferencing', array( 'Zoom_Video_Conferencing_Admin_Meetings', 'list_meetings' ), 'dashicons-video-alt2', 5 );

		if ( video_conferencing_zoom_is_valid_license() && get_option( 'zoom_api_key' ) && get_option( 'zoom_api_secret' ) ) {
				add_submenu_page( 'zoom-video-conferencing', 'Meeting', __( 'Add Meeting', 'video-conferencing-with-zoom-api' ), $capability, 'zoom-video-conferencing-add-meeting', array( 'Zoom_Video_Conferencing_Admin_Meetings', 'add_meeting' ) );
				add_submenu_page( 'zoom-video-conferencing', 'Zoom Users', __( 'Zoom Users', 'video-conferencing-with-zoom-api' ), 'manage_options', 'zoom-video-conferencing-list-users', array( 'Zoom_Video_Conferencing_Admin_Users', 'list_users' ) );
				add_submenu_page( 'zoom-video-conferencing', 'Add Zoom User', __( 'Add Zoom User', 'video-conferencing-with-zoom-api' ), 'manage_options', 'zoom-video-conferencing-add-users', array( 'Zoom_Video_Conferencing_Admin_Users', 'add_zoom_users' ) );
				add_submenu_page(
					'zoom-video-conferencing',
					__( 'Map Zoom Users', 'video-conferencing-with-zoom-plank' ),
					__( 'Map Zoom Users', 'video-conferencing-with-zoom-plank' ),
					'manage_options',
					'zoom-video-conferencing-host-id-assign',
					array( 'Zoom_Video_Conferencing_Admin_Users', 'assign_host_id' )
				);
				add_submenu_page( 'zoom-video-conferencing', 'Meeting Reports', __( 'Meeting Reports', 'video-conferencing-with-zoom-api' ), 'manage_options', 'zoom-video-conferencing-reports', array( 'Zoom_Video_Conferencing_Reports', 'zoom_reports' ) );
		}
		add_submenu_page( 'zoom-video-conferencing', 'Settings', __( 'Settings', 'video-conferencing-with-zoom-api' ), 'manage_options', 'zoom-video-conferencing-settings', array( $this, 'zoom_video_conference_api_zoom_settings' ) );
		add_submenu_page( 'zoom-video-conferencing', 'Extensions', __( 'Extensions', 'video-conferencing-with-zoom-api' ), 'manage_options', 'zoom-video-conferencing-extensions', array( $this, 'zoom_video_conference_api_zoom_extensions' ) );
		add_submenu_page( 'zoom-video-conferencing', 'Error Logs', __( 'Error Logs', 'video-conferencing-with-zoom-api' ), 'manage_options', 'zoom-video-conferencing-logs', array( $this, 'zoom_video_conference_api_zoom_logs' ) );

		if ( ! is_multisite() || ( is_multisite() && is_main_site() ) ) {
			$zoom_wp_is_subscribed_to_mc = get_option( 'zoom_wp_is_subscribed_to_mc' );

			if ( ! $zoom_wp_is_subscribed_to_mc || 'not_subscribed' == $zoom_wp_is_subscribed_to_mc ) {
				add_submenu_page( 'zoom-video-conferencing', 'Subscribe', __( 'Subscribe to Updates', 'video-conferencing-with-zoom-api' ), 'manage_options', 'zoom-video-conferencing-subscribe_updates', array( $this, 'zoom_video_conference_api_zoom_subscribe_updates' ) );
			}
		}
	}

	/**
	 * Zoom Settings View File
	 *
	 * @since   1.0.0
	 * @changes in CodeBase
	 */


	public function zoom_video_conference_api_zoom_subscribe_updates() {
		echo '<!-- Begin Mailchimp Signup Form -->
		<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css">
		<style type="text/css">
			#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
			/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
			We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
		</style>
		<style type="text/css">
			#mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}
			#mergeRow-gdpr {margin-top: 20px;}
			#mergeRow-gdpr fieldset label {font-weight: normal;}
			#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}
		</style>
		<div id="mc_embed_signup">
		<form action="https://elearningevolve.us3.list-manage.com/subscribe/post?u=0b76eeb4e810cec265e082dca&amp;id=5f1f69bf5e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
		<div id="mc_embed_signup_scroll">
		<h2>Never miss an important update for this plugin</h2>
		<div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span>
		</label>
		<input id="mce-EMAIL" class="required email" name="EMAIL" type="email" value="" /></div>
		<div class="mc-field-group"><label for="mce-FNAME">First Name <span class="asterisk">*</span>
		</label>
		<input id="mce-FNAME" class="required" name="FNAME" type="text" value="" /></div>
		<div class="mc-field-group input-group">

		<strong>Subscription </strong>
		<ul>
			<li><input checked="checked" type="checkbox" value="1" name="group[26789][1]" id="mce-group[26789]-26789-0"><label for="mce-group[26789]-26789-0">Zoom WordPress Integration Updates</label></li>
			<li><input type="checkbox" value="2" name="group[26789][2]" id="mce-group[26789]-26789-1"><label for="mce-group[26789]-26789-1">Zoom WordPress Integration Beta Testers</label></li>
			<li><input type="checkbox" value="4" name="group[26789][4]" id="mce-group[26789]-26789-2"><label for="mce-group[26789]-26789-2">LearnDash Student Voice Updates</label></li>
			<li><input type="checkbox" value="8" name="group[26789][8]" id="mce-group[26789]-26789-3"><label for="mce-group[26789]-26789-3">Development Service Updates</label></li>
			<li><input type="checkbox" value="16" name="group[26789][16]" id="mce-group[26789]-26789-4"><label for="mce-group[26789]-26789-4">Published Blog Posts</label></li>
		</ul>
		</div>
		Powered by <a title="MailChimp - email marketing made easy and fun" href="http://eepurl.com/g2u3Yb">MailChimp</a>
		<div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">
		<div class="content__gdpr">

		<label>Marketing Permissions</label>

		Please select all the ways you would like to hear from eLearning evolve:
		<fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field"><label class="checkbox subfield" for="gdpr_35845"><input id="gdpr_35845" class="av-checkbox " name="gdpr[35845]" type="checkbox" value="Y" />Email </label></fieldset>
		You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.
		
		</div>
		<div class="content__gdprLegal">

		We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/" target="_blank" rel="noopener noreferrer">Learn more about Mailchimp\'s privacy practices here.</a>

		</div>
		</div>
		
		<div id="mce-responses" class="clear">
		<div id="mce-error-response" class="response" style="display: none;"></div>
		<div id="mce-success-response" class="response" style="display: none;"></div>
		</div>
		<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
		<div style="position: absolute; left: -5000px;" aria-hidden="true"><input tabindex="-1" name="b_0b76eeb4e810cec265e082dca_5f1f69bf5e" type="text" value="" /></div>
		<div class="clear"><input id="mc-embedded-subscribe" class="button" name="subscribe" type="submit" value="Subscribe" /></div>
		</div>
		</form>
		</div>
		<script src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]="EMAIL";ftypes[0]="email";fnames[1]="FNAME";ftypes[1]="text";fnames[2]="LNAME";ftypes[2]="text";fnames[3]="MMERGE3";ftypes[3]="url";}(jQuery));var $mcj = jQuery.noConflict(true);</script>
		<!--End mc_embed_signup-->';
	}

	public function zoom_video_conference_api_zoom_settings() {
		wp_enqueue_script( 'video-conferencing-with-zoom-api-js' );
		wp_enqueue_style( 'video-conferencing-with-zoom-api' );

		if ( isset( $_POST['save_zoom_settings'] ) ) {
			//Nonce
			check_admin_referer( '_zoom_settings_update_nonce_action', '_zoom_settings_nonce' );

			if ( null == $_POST['tab'] || 'setup' == $_POST['tab'] ) {
				$zoom_api_key    = filter_input( INPUT_POST, 'zoom_api_key' );
				$zoom_api_secret = filter_input( INPUT_POST, 'zoom_api_secret' );
				$zoom_simd_token = filter_input( INPUT_POST, 'zoom_simd_token' );
				$vanity_url      = esc_url( filter_input( INPUT_POST, 'vanity_url' ) );

				update_option( 'zoom_api_key', $zoom_api_key, false );
				update_option( 'zoom_api_secret', $zoom_api_secret, false );
				update_option( 'zoom_simd_token', $zoom_simd_token, false );
				update_option( 'zoom_vanity_url', $vanity_url, false );
			}

			if ( 'visual' == $_POST['tab'] ) {
				$zoom_window_size              = esc_html( filter_input( INPUT_POST, 'zoom_window_size' ) );
				$zoom_join_via_web_text        = esc_html( filter_input( INPUT_POST, 'zoom_join_via_web_text' ) );
				$zoom_join_via_app_text        = esc_html( filter_input( INPUT_POST, 'zoom_join_via_app_text' ) );
				$zoom_btn_css_class            = esc_html( filter_input( INPUT_POST, 'zoom_btn_css_class' ) );
				$zoom_meeting_title            = esc_html( filter_input( INPUT_POST, 'zoom_meeting_title' ) );
				$zoom_meeting_lang_select      = esc_html( filter_input( INPUT_POST, 'zoom_meeting_lang_select' ) );
				$zoom_meeting_calendar_link    = esc_html( filter_input( INPUT_POST, 'zoom_meeting_calendar_link' ) );
				$zoom_countdown_title          = esc_html( filter_input( INPUT_POST, 'zoom_countdown_title' ) );
				$zoom_help_text_disable        = filter_input( INPUT_POST, 'zoom_help_text_disable' );
				$zoom_join_before_time         = filter_input( INPUT_POST, 'zoom_join_before_time' );
				$zoom_register_for_meeting     = filter_input( INPUT_POST, 'zoom_register_for_meeting' );
				$meeting_thankyou_message      = filter_input( INPUT_POST, 'meeting_thankyou_message' );
				$zoom_join_via_web_disable     = filter_input( INPUT_POST, 'zoom_join_via_web_disable' );
				$zoom_hide_countdown_timer     = filter_input( INPUT_POST, 'zoom_hide_countdown_timer' );
				$zoom_disable_scroll_to_window = filter_input( INPUT_POST, 'zoom_disable_scroll_to_window' );
				$meeting_window_custom_css     = filter_input( INPUT_POST, 'meeting_window_custom_css' );

				update_option( 'zoom_window_size', $zoom_window_size, false );
				update_option( 'zoom_join_via_web_text', $zoom_join_via_web_text, false );
				update_option( 'zoom_join_via_app_text', $zoom_join_via_app_text, false );
				update_option( 'zoom_btn_css_class', $zoom_btn_css_class, false );
				update_option( 'zoom_meeting_title', $zoom_meeting_title, false );
				update_option( 'zoom_meeting_lang_select', $zoom_meeting_lang_select, false );
				update_option( 'zoom_meeting_calendar_link', $zoom_meeting_calendar_link, false );
				update_option( 'zoom_countdown_title', $zoom_countdown_title, false );
				update_option( 'zoom_help_text_disable', $zoom_help_text_disable, false );
				update_option( 'zoom_join_before_time', $zoom_join_before_time, false );
				update_option( 'zoom_register_for_meeting', $zoom_register_for_meeting, false );
				update_option( 'meeting_thankyou_message', $meeting_thankyou_message, false );
				update_option( 'zoom_join_via_web_disable', $zoom_join_via_web_disable, false );
				update_option( 'zoom_hide_countdown_timer', $zoom_hide_countdown_timer, false );
				update_option( 'zoom_disable_scroll_to_window', $zoom_disable_scroll_to_window, false );
				update_option( 'meeting_window_custom_css', $meeting_window_custom_css, false );
			}

			if ( 'config' == $_POST['tab'] ) {
				$zoom_meeting_autojoin             = filter_input( INPUT_POST, 'zoom_meeting_autojoin' );
				$zoom_meeting_autoend              = filter_input( INPUT_POST, 'zoom_meeting_autoend' );
				$zoom_join_via_app_pass            = filter_input( INPUT_POST, 'zoom_join_via_app_pass' );
				$zoom_disable_no_cache             = filter_input( INPUT_POST, 'zoom_disable_no_cache' );
				$zoom_meeting_attendee_name_format = filter_input( INPUT_POST, 'zoom_meeting_attendee_name_format' );
				$zoom_meeting_join_app_target      = filter_input( INPUT_POST, 'zoom_meeting_join_app_target' );
				$zoom_meeting_thankyou_redirect    = filter_input( INPUT_POST, 'zoom_meeting_thankyou_redirect' );
				$zoom_meeting_can_host_role        = filter_input( INPUT_POST, 'zoom_meeting_can_host_role', FILTER_SANITIZE_STRING, FILTER_FORCE_ARRAY );
				$zoom_meeting_can_host_capability  = filter_input( INPUT_POST, 'zoom_meeting_can_host_capability', FILTER_SANITIZE_STRING, FILTER_FORCE_ARRAY );

				update_option( 'zoom_meeting_can_host_role', $zoom_meeting_can_host_role, false );
				update_option( 'zoom_meeting_can_host_capability', $zoom_meeting_can_host_capability, false );
				update_option( 'zoom_meeting_thankyou_redirect', $zoom_meeting_thankyou_redirect, false );
				update_option( 'zoom_meeting_join_app_target', $zoom_meeting_join_app_target, false );
				update_option( 'zoom_meeting_attendee_name_format', $zoom_meeting_attendee_name_format, false );
				update_option( 'zoom_meeting_autojoin', $zoom_meeting_autojoin, false );
				update_option( 'zoom_meeting_autoend', $zoom_meeting_autoend, false );
				update_option( 'zoom_join_via_app_pass', $zoom_join_via_app_pass, false );
				update_option( 'zoom_disable_no_cache', $zoom_disable_no_cache, false );
			}

			if ( 'recording' == $_POST['tab'] ) {
				$zoom_recording_via          = filter_input( INPUT_POST, 'zoom_recording_via' );
				$zoom_hide_recordings        = filter_input( INPUT_POST, 'zoom_hide_recordings' );
				$zoom_auto_display_recording = filter_input( INPUT_POST, 'zoom_auto_display_recording' );
				$zoom_autoplay_recording     = filter_input( INPUT_POST, 'zoom_autoplay_recording' );

				if ( 'vimeo' == $zoom_recording_via ) {
					if ( ! is_plugin_active( 'wp-vimeo-videos/wp-vimeo-videos.php' )
						&& ! is_plugin_active( 'wp-vimeo-videos-pro/wp-vimeo-videos-pro.php' ) ) {
						$error = 'Prerequisite for Vimeo option is to setup the third party plugin <a rel="noopnerer" target="_blank" href="https://wordpress.org/plugins/wp-vimeo-videos/">WP Vimeo Videos</a>';
						video_conferencing_zoom_log_error( $error );
					} else {
						update_option( 'zoom_recording_via', $zoom_recording_via, false );
					}
				} else {
					update_option( 'zoom_recording_via', $zoom_recording_via, false );
				}

				update_option( 'zoom_hide_recordings', $zoom_hide_recordings, false );
				update_option( 'zoom_auto_display_recording', $zoom_auto_display_recording, false );
				update_option( 'zoom_autoplay_recording', $zoom_autoplay_recording, false );
			}

			// check the API connection on new keys save
			if ( ! get_option( 'zoom_api_users_list' ) ) {
				video_conferencing_zoom_api_get_users( true, true );
			}
		}

		//Get Template
		require_once ZOOM_VIDEO_CONFERENCE_PLUGIN_VIEWS_PATH . '/admin/tpl-settings.php';
	}

	public function zoom_video_conference_api_zoom_logs() {
		$pluginlog = dirname( plugin_dir_path( __FILE__ ) ) . '/logs/debug.log';

		$logs = '';
		if ( file_exists( $pluginlog ) ) {

			$file = file( $pluginlog );
			$file = array_reverse( $file );
			foreach ( $file as $f ) {
				if ( $f ) {
					$logs .= $f;
				}
			}
		}
		//Get Template
		require_once ZOOM_VIDEO_CONFERENCE_PLUGIN_VIEWS_PATH . '/admin/tpl-logs.php';
	}

	static function zoom_video_conference_api_zoom_extensions() {
		wp_enqueue_script( 'video-conferencing-with-zoom-api-js' );
		wp_enqueue_style( 'video-conferencing-with-zoom-api' );

		//Get Template
		require_once ZOOM_VIDEO_CONFERENCE_PLUGIN_VIEWS_PATH . '/admin/tpl-extensions.php';
	}

	public function zoom_wp_activate_license() {
		if ( isset( $_POST['zoom_wp_license_activate'] ) ) {
			if ( ! check_admin_referer( 'zoom_wp_license_nonce', 'zoom_wp_license_nonce' ) ) {
				return;
			}
			$NNk66RxkVMu7qzR32bNnaGwnpz = false;
			$license                    = sanitize_text_field( trim( $_POST['zoom_wp_license_key'] ) );

			if ( is_multisite() && is_main_site() ) {
				$NNk66RxkVMu7qzR32bNnaGwnpz = true;
			}

			$api_params = array(
				'edd_action'   => 'activate_license',
				'license'      => $license,
				'item_id'      => ZVCW_ZOOM_ITEM_ID,
				'url'          => home_url(),
				'is_multisite' => $NNk66RxkVMu7qzR32bNnaGwnpz,
			);

			$response = wp_remote_get(
				add_query_arg( $api_params, ZVCW_ZOOM_STORE_URL ),
				array(
					'timeout' => 30,
				)
			);

			if ( is_wp_error( $response ) ) {
				return false;
			}

			$y3ZheMh2StEwYYWG = json_decode( wp_remote_retrieve_body( $response ) );

			if ( ! isset( $y3ZheMh2StEwYYWG->license ) || $y3ZheMh2StEwYYWG->license != 'valid' ) {
				if ( isset( $y3ZheMh2StEwYYWG->error ) ) {
					$error = 'Error validating license key <strong> ' . $license . '</strong>, it is ' . $y3ZheMh2StEwYYWG->error . '.';
				} else {
					$error = 'Error validating license key <strong> ' . $license . '</strong>, it is either invalid or already used the maximum number of times.';
				}
				set_transient( 'zoom_wp_license_eu6y5Tg26PTrYCkh', $error );
			} else {
				delete_transient( 'zoom_wp_license_eu6y5Tg26PTrYCkh' );
				update_option( 'zoom_wp_license', $y3ZheMh2StEwYYWG->license, false );
				update_option( 'zoom_wp_license_key_' . ZVCW_ZOOM_ITEM_ID, $license, false );

				if ( $y3ZheMh2StEwYYWG->expires ) {
					update_option( 'zoom_wp_license_expire', $y3ZheMh2StEwYYWG->expires, false );
				}
			}
		}
	}

	public function zoom_wp_deactivate_license() {

		// listen for our activate button to be clicked
		if ( isset( $_POST['zoom_wp_license_deactivate'] ) ) {

			if ( ! check_admin_referer( 'zoom_wp_license_nonce', 'zoom_wp_license_nonce' ) ) {
				return;
			}

			$license = sanitize_text_field( trim( get_option( 'zoom_wp_license_key_' . ZVCW_ZOOM_ITEM_ID ) ) );

			$api_params = array(
				'edd_action' => 'deactivate_license',
				'license'    => $license,
				'item_id'    => ZVCW_ZOOM_ITEM_ID,
			);

			$response = wp_remote_get(
				add_query_arg( $api_params, ZVCW_ZOOM_STORE_URL ),
				array(
					'timeout' => 30,
				)
			);

			if ( is_wp_error( $response ) ) {
				return false;
			}

			delete_option( 'zoom_wp_license' );
			delete_transient( 'zoom_wp_license_eu6y5Tg26PTrYCkh' );
		}
	}

	public function zoom_wp_extension_activate_license() {
		if ( isset( $_POST['zoom_wp_extension_license_activate'] ) ) {
			if ( ! check_admin_referer( 'zoom_wp_extension_nonce', 'zoom_wp_extension_nonce' ) ) {
				return;
			}
			$NNk66RxkVMu7qzR32bNnaGwnpz = false;
			$license                    = sanitize_text_field( trim( $_POST['zoom_wp_extension_license_key'] ) );
			$item_id                    = sanitize_text_field( $_POST['zoom_wp_extension_item_id'] );

			if ( is_multisite() && is_main_site() ) {
				$NNk66RxkVMu7qzR32bNnaGwnpz = true;
			}

			$api_params = array(
				'edd_action'   => 'activate_license',
				'license'      => $license,
				'item_id'      => $item_id,
				'url'          => home_url(),
				'is_multisite' => $NNk66RxkVMu7qzR32bNnaGwnpz,
			);

			$response = wp_remote_get(
				add_query_arg( $api_params, ZVCW_ZOOM_STORE_URL ),
				array(
					'timeout' => 30,
				)
			);

			if ( is_wp_error( $response ) ) {
				return false;
			}

			$y3ZheMh2StEwYYWG = json_decode( wp_remote_retrieve_body( $response ) );

			if ( ! isset( $y3ZheMh2StEwYYWG->license ) || $y3ZheMh2StEwYYWG->license != 'valid' ) {
				if ( isset( $y3ZheMh2StEwYYWG->error ) ) {
					$error = $y3ZheMh2StEwYYWG->error;
				} else {
					$error = __( 'Error validating license key <strong> ' . $license . ' </strong> , it is either invalid or already used the maximum number of times.', 'video-conferencing-with-zoom-api' );
				}
				set_transient( 'zoom_wp_extension_license_UDtHbPecFcPmev23Met', $error );
			} else {
				delete_transient( 'zoom_wp_extension_license_UDtHbPecFcPmev23Met' );
				update_option( 'zoom_wp_extension_license_' . $item_id, $y3ZheMh2StEwYYWG->license, false );
				update_option( 'zoom_wp_extension_license_key_' . $item_id, $license, false );
			}
		}
	}

	public function zoom_wp_extension_deactivate_license() {

		// listen for our activate button to be clicked
		if ( isset( $_POST['zoom_wp_extension_license_deactivate'] ) ) {

			if ( ! check_admin_referer( 'zoom_wp_extension_nonce', 'zoom_wp_extension_nonce' ) ) {
				return;
			}

			$item_id = sanitize_text_field( $_POST['zoom_wp_extension_item_id'] );
			$license = sanitize_text_field( trim( $_POST['zoom_wp_extension_license_key'] ) );

			$api_params = array(
				'edd_action' => 'deactivate_license',
				'license'    => $license,
				'item_id'    => $item_id,
			);

			$response = wp_remote_get(
				add_query_arg( $api_params, ZVCW_ZOOM_STORE_URL ),
				array(
					'timeout' => 30,
				)
			);

			if ( is_wp_error( $response ) ) {
				return false;
			}

			delete_transient( 'zoom_wp_extension_license_UDtHbPecFcPmev23Met' );
			delete_option( 'zoom_wp_extension_license_' . $item_id );
		}
	}

	static function get_message() {
		return self::$message;
	}

	public static function set_message( $class, $message ) {
		self::$message = '<div class="' . $class . '"><p>' . $message . '</p></div>';
	}
}

new Zoom_Video_Conferencing_Admin_Views();
