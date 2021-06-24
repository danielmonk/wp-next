<?php
/**
 * Ready Main Class
 *
 * @since 2.1.0
 */

// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'Not Allowed Here !' );
}

if ( ! class_exists( 'Video_Conferencing_With_Zoom' ) ) {
	class Video_Conferencing_With_Zoom {

		private static $_instance = null;

		private $api_url = 'https://api.zoom.us/v2/';

		/**
		 * Create only one instance so that it may not Repeat
		 *
		 * @since 2.0.0
		 */
		public static function instance() {
			if ( is_null( self::$_instance ) ) {
				self::$_instance = new self();
			}

			return self::$_instance;
		}

		/**
		 * Constructor method for loading the components
		 *
		 * @since  2.0.0
		 */
		public function __construct() {

			$this->define_them_constants();
			if ( ! is_admin() ) {
				$this->load_frontend_dependencies();
			} else {
				$this->load_admin_dependencies();
			}
			add_action( 'http_api_curl', array( $this, 'http_api_curl' ), 10, 3 );
			add_action( 'init', array( $this, 'load_plugin_textdomain' ) );
			add_action( 'wp_ajax_zoom_wp_countdown_check_meeting_started', array( $this, 'zoom_wp_countdown_check_meeting_started' ) );
			add_action( 'wp_ajax_nopriv_zoom_wp_countdown_check_meeting_started', array( $this, 'zoom_wp_countdown_check_meeting_started' ) );
			add_action( 'wp_ajax_zoom_wp_show_all_recordings', array( $this, 'zoom_wp_show_all_recordings' ) );
			add_action( 'wp_ajax_nopriv_zoom_wp_show_all_recordings', array( $this, 'zoom_wp_show_all_recordings' ) );

			$this->check_api();

			// Schedule the Cron for Syncing data periodically
			if ( ! wp_next_scheduled( 'zoom_wp_main_cron_sync_data_hook' ) ) {
				wp_schedule_event( time() + ( MINUTE_IN_SECONDS * 2 ), 'daily', 'zoom_wp_main_cron_sync_data_hook' );
			}
			add_action( 'zoom_wp_main_cron_sync_data_hook', array( $this, 'zoom_wp_main_cron_sync_data_execute' ) );

			if ( is_admin() ) {
				add_filter( 'plugin_action_links_' . ZVCW_ZOOM_BASE_PLUGIN_NAME, 'video_conferencing_zoom_api_settings_link' );
				add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts_backend' ) );
				add_action( 'zoom_wp_after_create_meeting', array( $this, 'zvc_after_create_meeting' ), 10, 2 );
				add_action( 'zoom_wp_after_update_meeting', array( $this, 'zvc_after_update_meeting' ), 10, 2 );
				add_action( 'enqueue_block_editor_assets', array( $this, 'video_conferencing_zoom_api_editors_block' ) );
				add_action( 'zoom_wp_host_users', array( $this, 'zoom_wp_host_users' ) );

				//Add a callback to register our tinymce plugin
				add_filter( 'mce_external_plugins', array( $this, 'video_conferencing_zoom_register_tinymce_scripts' ), 20 );

				// Add a callback to add our button to the TinyMCE toolbar
				add_filter( 'mce_buttons', array( $this, 'video_conferencing_zoom_add_btn_tinmyce' ), 20 );

			}
		}

		/**
		 * Define constant if not already set.
		 *
		 * @param  string      $name
		 * @param  string|bool $value
		 *
		 * @since   2.0.0
		 *
		 * @author  Deepen Bajracharya
		 */
		protected function define( $name, $value ) {
			if ( ! defined( $name ) ) {
				define( $name, $value );
			}
		}

		/**
		 * INitialize the hooks
		 *
		 * @since    2.0.0
		 * @modified 2.1.0
		 * @author   Deepen Bajracharya
		 */
		protected function check_api() {
			if ( isset( $_POST['zoom_api_key'] ) && isset( $_POST['zoom_api_secret'] ) ) {
				check_admin_referer( '_zoom_settings_update_nonce_action', '_zoom_settings_nonce' );

				// check the API connection on new keys save
				if ( get_option( 'zoom_api_key' ) != $_POST['zoom_api_key']
					|| get_option( 'zoom_api_secret' ) != $_POST['zoom_api_secret'] ) {
					video_conferencing_zoom_api_get_users( true, true );
				}
			}
		}

		/**
		 * Defining the Constants Here
		 *
		 * @since   2.0.0
		 * @author  Deepen Bajracharya
		 */
		public function define_them_constants() {
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_SLUG', 'video-conferencing-with-zoom-api' );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_DIR_PATH', plugin_dir_path( __DIR__ ) );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_CLASSES_PATH', plugin_dir_path( __DIR__ ) . 'classes' );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_LOG_PATH', plugin_dir_path( __DIR__ ) . 'logs' );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_VIEWS_PATH', plugin_dir_path( __DIR__ ) . 'views' );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_LANGUAGE_PATH', trailingslashit( basename( plugin_dir_path( __DIR__ ) ) ) . 'languages/' );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_INCLUDES_PATH', plugin_dir_path( __DIR__ ) . 'includes' );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_CSS_PATH', plugin_dir_url( __DIR__ ) . 'assets/admin/css' );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_FRONTEND_CSS_PATH', plugin_dir_url( __DIR__ ) . 'assets/frontend/css' );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_FRONTEND_JS_PATH', plugin_dir_url( __DIR__ ) . 'assets/frontend/js' );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_FRONTEND_PATH', plugin_dir_path( __DIR__ ) . '/assets/frontend/' );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_JS_PATH', plugin_dir_url( __DIR__ ) . 'assets/admin/js' );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_ADMIN_IMAGES_PATH', plugin_dir_url( __DIR__ ) . 'assets/admin/images' );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_PLUGIN_URL_PATH', plugin_dir_url( __DIR__ ) );
			$this->define( 'ZOOM_VIDEO_CONFERENCE_APIVERSION', 2 );
		}

		/**
		 * Load the other class dependencies
		 *
		 * @since    2.0.0
		 * @modified 2.1.0
		 * @author   Deepen Bajracharya
		 */
		protected function load_admin_dependencies() {
			include_once ZOOM_VIDEO_CONFERENCE_PLUGIN_INCLUDES_PATH . '/video-conferencing-with-zoom-helpers.php';

			//Include the Main Class
			include_once ZOOM_VIDEO_CONFERENCE_PLUGIN_CLASSES_PATH . '/class-zvc-zoom-api-v2.php';

			//Loading Includes
			include_once ZOOM_VIDEO_CONFERENCE_PLUGIN_INCLUDES_PATH . '/video-conferencing-with-zoom-shortcodes.php';

			//AJAX CALLS SCRIPTS
			include_once ZOOM_VIDEO_CONFERENCE_PLUGIN_CLASSES_PATH . '/class-zvc-zoom-ajax-calls.php';

			//Admin Classes
			include_once ZOOM_VIDEO_CONFERENCE_PLUGIN_CLASSES_PATH . '/class-zvc-zoom-admin-users.php';
			include_once ZOOM_VIDEO_CONFERENCE_PLUGIN_CLASSES_PATH . '/class-zvc-zoom-admin-meetings.php';
			include_once ZOOM_VIDEO_CONFERENCE_PLUGIN_CLASSES_PATH . '/class-zvc-zoom-admin-reports.php';
			include_once ZOOM_VIDEO_CONFERENCE_PLUGIN_CLASSES_PATH . '/class-zvc-zoom-admin-settings.php';
		}

		/**
		 * Load only the frontend class dependencies
		 *
		 * @since    2.0.0
		 * @modified 2.1.0
		 * @author   Deepen Bajracharya
		 */
		protected function load_frontend_dependencies() {
			include_once ZOOM_VIDEO_CONFERENCE_PLUGIN_INCLUDES_PATH . '/video-conferencing-with-zoom-helpers.php';

			//Include the Main Class
			include_once ZOOM_VIDEO_CONFERENCE_PLUGIN_CLASSES_PATH . '/class-zvc-zoom-api-v2.php';

			//Loading Includes
			include_once ZOOM_VIDEO_CONFERENCE_PLUGIN_INCLUDES_PATH . '/video-conferencing-with-zoom-webhook.php';
			include_once ZOOM_VIDEO_CONFERENCE_PLUGIN_INCLUDES_PATH . '/video-conferencing-with-zoom-shortcodes.php';
		}

		/**
		 * Enqueuing Scripts and Styles for Admin
		 *
		 * @since    2.0.0
		 * @modified 2.1.0
		 * @author   Deepen Bajracharya
		 */
		public function enqueue_scripts_backend() {
			wp_register_style( 'video-conferencing-with-zoom-api-timepick', ZOOM_VIDEO_CONFERENCE_PLUGIN_CSS_PATH . '/jquery.datetimepicker.css', false, ZVCW_ZOOM_PLUGIN_VER );
			wp_register_style( 'video-conferencing-with-zoom-api-select2', ZOOM_VIDEO_CONFERENCE_PLUGIN_CSS_PATH . '/select2.min.css', false, ZVCW_ZOOM_PLUGIN_VER );
			wp_register_style( 'video-conferencing-with-zoom-api-datable', ZOOM_VIDEO_CONFERENCE_PLUGIN_CSS_PATH . '/jquery.dataTables.min.css', false, ZVCW_ZOOM_PLUGIN_VER );
			wp_register_style( 'jquery-ui-datepicker-zvc', 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/themes/smoothness/jquery-ui.css' );
			wp_register_style( 'video-conferencing-with-zoom-api', ZOOM_VIDEO_CONFERENCE_PLUGIN_CSS_PATH . '/video-conferencing-with-zoom-api.css', false, ZVCW_ZOOM_PLUGIN_VER );

			wp_register_script( 'video-conferencing-with-zoom-api-select2-js', ZOOM_VIDEO_CONFERENCE_PLUGIN_JS_PATH . '/select2.min.js', array( 'jquery' ), ZVCW_ZOOM_PLUGIN_VER, true );
			wp_register_script( 'video-conferencing-with-zoom-api-timepicker-js', ZOOM_VIDEO_CONFERENCE_PLUGIN_JS_PATH . '/jquery.datetimepicker.full.min.js', array( 'jquery' ), ZVCW_ZOOM_PLUGIN_VER, true );
			wp_register_script( 'video-conferencing-with-zoom-api-datable-js', ZOOM_VIDEO_CONFERENCE_PLUGIN_JS_PATH . '/jquery.dataTables.min.js', array( 'jquery' ), ZVCW_ZOOM_PLUGIN_VER, true );
			wp_register_script( 'video-conferencing-with-zoom-api-js', ZOOM_VIDEO_CONFERENCE_PLUGIN_JS_PATH . '/video-conferencing-with-zoom-api.js', array( 'jquery' ), ZVCW_ZOOM_PLUGIN_VER, true );

			wp_localize_script(
				'video-conferencing-with-zoom-api-js',
				'zvc_ajax',
				array(
					'ajaxurl'      => admin_url( 'admin-ajax.php' ),
					'zvc_security' => wp_create_nonce( '_nonce_zvc_security' ),
				)
			);
		}

		/**
		 * Add blocks for Gutenberg and TinyMice
		 */
		public function video_conferencing_zoom_api_editors_block() {
			//Gutenberg block
			wp_enqueue_script(
				'zoom-wp-meeting-block',
				ZOOM_VIDEO_CONFERENCE_PLUGIN_JS_PATH . '/zoom-wp-meeting-block.js',
				array( 'wp-blocks', 'wp-editor' ),
				ZVCW_ZOOM_PLUGIN_VER,
				true
			);

			wp_enqueue_style(
				'zoom-wp-add-meeting-block-css',
				ZOOM_VIDEO_CONFERENCE_PLUGIN_CSS_PATH . '/zoom-wp-meeting-block.css',
				array(),
				ZVCW_ZOOM_PLUGIN_VER
			);
		}

		//This callback registers our plug-in
		public function video_conferencing_zoom_register_tinymce_scripts( $plugin_array ) {
			$plugin_array['zvc_shortcode_button']               = ZOOM_VIDEO_CONFERENCE_PLUGIN_JS_PATH . '/video-conferencing-with-zoom-api-shortcode.js';
			$plugin_array['zvc_recording_shortcode_button']     = $plugin_array['zvc_shortcode_button'];
			$plugin_array['zvc_any_recording_shortcode_button'] = $plugin_array['zvc_shortcode_button'];

			return $plugin_array;
		}

		//This callback adds our button to the toolbar
		public function video_conferencing_zoom_add_btn_tinmyce( $buttons ) {
			//Add the button ID to the $button array
			$buttons[] = 'zvc_shortcode_button';
			$buttons[] = 'zvc_recording_shortcode_button';
			$buttons[] = 'zvc_any_recording_shortcode_button';

			return $buttons;
		}

		public function load_plugin_textdomain() {
			$domain = 'video-conferencing-with-zoom-api';
			apply_filters( 'plugin_locale', get_locale(), $domain );
			load_plugin_textdomain( $domain, false, ZOOM_VIDEO_CONFERENCE_PLUGIN_LANGUAGE_PATH );
		}

		/**
		 * Fire on Activation
		 */
		public static function activator() {
			if ( ! current_user_can( 'activate_plugins' ) ) {
				return;
			}

			global $wp_version;

			$min_wp_version = 4.8;
			$exit_msg       = sprintf( __( '%1$s requires %2$s or newer.' ), 'Zoom WordPress Plugin', $min_wp_version );
			if ( version_compare( $wp_version, $min_wp_version, '<' ) ) {
				exit( $exit_msg );
			}

			//Comparing Version
			if ( version_compare( PHP_VERSION, 5.6, '<' ) ) {
				$exit_msg = '<div class="error"><h3>' . __( 'Warning! It is not possible to activate this plugin as it requires above PHP 5.4 and on this server the PHP version installed is: ' ) . '<b>' . PHP_VERSION . '</b></h3><p>' . __( 'For security reasons we <b>suggest</b> that you contact your hosting provider and ask to update your PHP to latest stable version.' ) . '</p><p>' . __( 'If they refuse for whatever reason we suggest you to <b>change provider as soon as possible</b>.' ) . '</p></div>';
				exit( $exit_msg );
			}

		}

		/**
		 * Runs after meeting added from WP admin
		 */
		public function zvc_after_create_meeting( $meeting, $meeting_time ) {
			$meeting_id = $meeting->id;

			$zoom_map_array = get_post_meta( $meeting_id, 'zoom_api_meeting_options', true );
			if ( ! $zoom_map_array ) {
				$zoom_map_array = array();
			}
			$zoom_map_array['time'] = $meeting_time;

			if ( isset( $meeting->join_url ) ) {
				$zoom_map_array['join_url'] = $meeting->join_url;
			}

			if ( isset( $_POST['option_enforce_login'] ) ) {
				$zoom_map_array['enforce_login'] = sanitize_text_field( $_POST['option_enforce_login'] );
			}

			if ( isset( $meeting->password ) && $meeting->password ) {
				$zoom_map_array['password'] = $meeting->password;
			} else {
				$zoom_map_array['password'] = '';
			}

			if ( isset( $_POST['ld_group_autojoin'] ) ) {
				$zoom_map_array['ld_group_autojoin'] = array_map( 'intval', $_POST['ld_group_autojoin'] );
			}

			if ( isset( $_POST['userId'] ) ) {
				$zoom_map_array['host_id'] = sanitize_text_field( explode( '__', $_POST['userId'] )[0] );
			}

			$zoom_map_array = apply_filters( 'zoom_wp_before_create_meeting_cache', $zoom_map_array, $meeting_id );

			update_post_meta( $meeting_id, 'zoom_api_meeting_options', $zoom_map_array );
		}

		/**
		 * Runs after meeting updated from WP admin
		 */
		public function zvc_after_update_meeting( $meeting, $meeting_time ) {
			$meeting_id = $meeting->id;

			$zoom_map_array = get_post_meta( $meeting_id, 'zoom_api_meeting_options', true );
			if ( ! $zoom_map_array ) {
				$zoom_map_array = array();
			}

			$zoom_map_array['time'] = $meeting_time;

			if ( isset( $meeting->join_url ) ) {
				$zoom_map_array['join_url'] = $meeting->join_url;
			}

			if ( isset( $_POST['option_enforce_login'] ) ) {
				$zoom_map_array['enforce_login'] = sanitize_text_field( $_POST['option_enforce_login'] );
			} else {
				if ( isset( $zoom_map_array['enforce_login'] ) ) {
					unset( $zoom_map_array['enforce_login'] );
				}
			}

			if ( isset( $meeting->password ) && $meeting->password ) {
				$zoom_map_array['password'] = $meeting->password;
			} else {
				$zoom_map_array['password'] = '';
			}

			if ( isset( $_POST['ld_group_autojoin'] ) ) {
				$zoom_map_array['ld_group_autojoin'] = array_map( 'intval', $_POST['ld_group_autojoin'] );
			} else {
				if ( isset( $zoom_map_array['ld_group_autojoin'] ) ) {
					unset( $zoom_map_array['ld_group_autojoin'] );
				}
			}

			if ( isset( $_POST['userId'] ) ) {
				$zoom_map_array['host_id'] = sanitize_text_field( explode( '__', $_POST['userId'] )[0] );
			}

			$zoom_map_array = apply_filters( 'zoom_wp_before_update_meeting_cache', $zoom_map_array, $meeting_id );

			update_post_meta( $meeting_id, 'zoom_api_meeting_options', $zoom_map_array );
		}

		/**
		 * If host is non admin show them only their own Zoom meetings
		 *
		 * @since    4.1.1
		 */
		function zoom_wp_host_users( $api_users ) {
			if ( ! get_current_user_id() || current_user_can( 'administrator' ) ) {
				return $api_users;
			}

			$user_data        = get_userdata( get_current_user_id() );
			$user_zoom_hostid = get_user_meta( $user_data->data->ID, 'user_zoom_hostid', true );
			if ( ! is_array( $user_zoom_hostid ) ) {
				$user_zoom_hostid = array();
			}

			foreach ( $api_users as $key => $api_user ) {
				if ( $user_data->data->user_email != $api_user->email &&
					! in_array( $api_user->id, $user_zoom_hostid ) ) {
					if ( isset( $api_users[ $key ] ) ) {
						unset( $api_users[ $key ] );
					}
				}
			}

			return array_values( $api_users );
		}

		// Check if meeting has started and end the countdown
		function zoom_wp_countdown_check_meeting_started() {
			check_ajax_referer( 'ajax_nonce', 'nonce' );
			if ( ! isset( $_GET['meeting_id'] ) ) {
				exit();
			}
			if ( $_GET['is_webinar'] ) {
				$type = 'zoom_api_webinar_options';
			} else {
				$type = 'zoom_api_meeting_options';
			}

			$zoom_map_array = get_post_meta( (float) $_GET['meeting_id'], $type, true );
			if ( isset( $zoom_map_array['started'] ) ) {
				echo 1;
			}
			exit();
		}

		// Refresh All recordings for all the meetings once a day
		function zoom_wp_refresh_all_recordings() {
			$users = video_conferencing_zoom_api_get_users();
			if ( ! $users ) {
				return;
			}

			// Get recordings for all users in the account
			foreach ( $users as $user ) {
				$past_meetings = zoom_conference()->listUserRecordings( $user->id );
				if ( $past_meetings ) {
					foreach ( $past_meetings as $past_meeting ) {
						// If recording exist for a meeting
						if ( isset( $past_meeting->recording_files ) && $past_meeting->recording_files ) {
							if ( in_array( $past_meeting->type, array( 5, 6, 9 ) ) ) {
								$type = 'zoom_api_webinar_options';
							} else {
								$type = 'zoom_api_meeting_options';
							}

							$zoom_map_array[ $past_meeting->id ] = get_post_meta( $past_meeting->id, $type, true );
							// No record found for meeting or webinar in WP so skip it
							if ( ! $zoom_map_array[ $past_meeting->id ] ) {
								continue;
							}

							$zoom_map_array[ $past_meeting->id ]['type'] = $type;

							$this_recording = video_conferencing_recording_get_params_by_sequence( (array) $past_meeting->recording_files, array() );
							if ( isset( $this_recording['recording_url'] ) && $this_recording['recording_url'] ) {
								if ( video_conferencing_zoom_recording_via_vimeo() ) {
									// Associate Vimeo ID if video exists
									$recording_key = array_search( $this_recording['recording_id'], array_column( $zoom_map_array[ $past_meeting->id ]['past_recordings'], 'recording_id' ) );
									if ( false !== $recording_key ) {
										$vimeo_record = $zoom_map_array[ $past_meeting->id ]['past_recordings'][ $recording_key ];
										if ( isset( $vimeo_record['vimeo_id'] ) ) {
											$exist = video_conferencing_zoom_check_vimeo_exist( $vimeo_record['vimeo_id'] );
											// Video deleted from Vimeo so remove from WP as well
											if ( ! $exist ) {
												$this_recording['vimeo_removed'] = 1;
											} else {
												$this_recording['vimeo_id'] = $vimeo_record['vimeo_id'];
											}
										}
									}
								}

								$this_recording                             = $this->upload_recording_to_vimeo( $this_recording, $past_meeting->topic );
								$past_recordings_all[ $past_meeting->id ][] = $this_recording;
							}
						}
					}

					// Update DB will all past recordings for a meeting
					if ( $zoom_map_array ) {
						foreach ( $zoom_map_array as $meeting_id => $options ) {
							$type = $options['type'];
							if ( $past_recordings_all ) {
								$options['past_recordings'] = $past_recordings_all[ $meeting_id ];
							}
							if ( isset( $options['type'] ) ) {
								unset( $options['type'] );
							}
							update_post_meta( $meeting_id, $type, $options );
						}
					}
				}
			}
		}

		// Render All recordings for a meeting on frontend
		function zoom_wp_show_all_recordings( $meeting_id = false, $type = false ) {
			check_ajax_referer( 'show_recording', 'security' );
			if ( ! isset( $_GET['mn'] ) ) {
				exit();
			}
			$meeting_id = (float) $_GET['mn'];
			$type       = (string) $_GET['type'];

			$zoom_map_array = get_post_meta( $meeting_id, $type, true );
			if ( ! $zoom_map_array ) {
				$zoom_map_array = array();
			}

			$recordings = new StdClass();

			// Append JWT access token for private recording
			$jwt = zoom_conference()->generateJWTKey();

			if ( ! isset( $zoom_map_array['past_recordings'] ) && $zoom_map_array['host_id'] ) {
				$past_meetings = zoom_conference()->listUserRecordings( $zoom_map_array['host_id'] );
				if ( $past_meetings ) {
					foreach ( $past_meetings as $past_meeting ) {
						// Recording not for this meeting
						if ( $meeting_id != $past_meeting->id ) {
							continue;
						}

						if ( isset( $past_meeting->recording_files ) && $past_meeting->recording_files ) {
							$this_recording = video_conferencing_recording_get_params_by_sequence( (array) $past_meeting->recording_files, array() );
							if ( isset( $this_recording['recording_url'] ) && $this_recording['recording_url'] ) {
								$this_recording                      = $this->upload_recording_to_vimeo( $this_recording, $past_meeting->topic, $jwt );
								$zoom_map_array['past_recordings'][] = $this_recording;
							}
						}
					}

					update_post_meta( $meeting_id, $type, $zoom_map_array );
				}
			}

			if ( isset( $zoom_map_array['past_recordings'] ) && $zoom_map_array['past_recordings'] ) {
				$recordings->data = $zoom_map_array['past_recordings'];
			}

			// Convert into Datatable format
			foreach ( $recordings->data as $key => $recording ) {
				$vimeo_rec_id = '';
				if ( isset( $recording['vimeo_id'] ) ) {
					$vimeo_rec_id = $recording['vimeo_id'];
				}

				if ( $recording['recording_url'] ) {
					$recording_url = $recording['recording_url'] . '?access_token=' . $jwt;
				}

				$recordings->data[ $key ]['no']            = $key + 1;
				$recordings->data[ $key ]['recording_end'] = video_conferencing_zoom_convert_time_to_local_readable( esc_attr( $recording['recording_end'] ), false, $zoom_map_array['time'] );
				$recordings->data[ $key ]['recording_url'] = '<form method="post"><input type="hidden" name="vimeo_rec_id" value="' . esc_attr( $vimeo_rec_id ) . '"/><input type="hidden" name="play_recording_url" value="' . esc_attr( $recording_url ) . '"/><button class="zoom-link play-recoding-btn" name="play_recording" type="submit">' . __( 'Watch Recording', 'video-conferencing-with-zoom-api' ) . '</button></form>';
			}

			if ( ! isset( $recordings->data ) ) {
				$recordings->data = array();
			}

			echo json_encode( $recordings );
			wp_die();
		}

		public function zoom_wp_main_cron_sync_data_execute() {
			if ( ! defined( 'DOING_CRON' ) || 'valid' != get_option( 'zoom_wp_license' ) ) {
				return;
			}

			// If Recordings enabled then refresh cached past recordings
			if ( 1 != get_option( 'zoom_hide_recordings' ) ) {
				$this->zoom_wp_refresh_all_recordings();
			}

			delete_transient( 'zoom_wp_license_eu6y5Tg26PTrYCkh' );
			delete_option( 'zoom_wp_license_expire' );
			video_conferencing_zoom_api_check_customer_status();
		}

		// Prevent curl timeout error for Zoom API requests by plugin
		public function http_api_curl( $handle, $parsed_args, $url ) {
			if ( ! isset( $parsed_args['timeout'] ) || ! $url ) {
				return;
			}

			// Verify if its Zoom API request by the plugin
			if ( 60 != $parsed_args['timeout'] && strpos( $url, $this->api_url ) === false ) {
				return;
			}

			@curl_setopt( $handle, CURLOPT_CONNECTTIMEOUT, $parsed_args['timeout'] );
			@curl_setopt( $handle, CURLOPT_TIMEOUT, $parsed_args['timeout'] );
			@curl_setopt( $handle, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4 );
			@curl_setopt( $handle, CURLOPT_ENCODING, '' );
			@curl_setopt( $handle, CURLOPT_TCP_FASTOPEN, 1 );
		}

		public function upload_recording_to_vimeo( $this_recording, $meeting_topic, $jwt = false ) {
			// Param only needed for Vimeo API
			if ( isset( $this_recording['file_size'] ) ) {
				$recording_size = $this_recording['file_size'];
				unset( $this_recording['file_size'] );
			}

			# Recording is not served via Vimeo
			if ( ! video_conferencing_zoom_recording_via_vimeo() ) {
				return $this_recording;
			}

			# If already uploaded or deleted from vimeo then don't upload
			if ( isset( $this_recording['vimeo_id'] ) || isset( $this_recording['vimeo_removed'] ) ) {
				return $this_recording;
			}

			// Append JWT access token for private recording
			if ( ! $jwt ) {
				$jwt = zoom_conference()->generateJWTKey();
			}

			# Set dependent Vimeo upload classes
			$api = new WP_DGV_Api_Helper();
			$db  = new WP_DGV_Db_Helper();

			# Upload remote cloud recording to Vimeo if not uploaded already
			$url    = $this_recording['recording_url'] . '?access_token=' . $jwt;
			$params = array(
				'name'        => $meeting_topic,
				'description' => $meeting_topic,
				'size'        => $recording_size,
			);

			// If plus or above vimeo plan then set video privacy
			if ( 'basic' != $api->user_type ) {
				$params['privacy'] = array(
					'add'      => 0, // prevent adding add the video to a showcase, channel, or group
					'view'     => 'disable', // make video unavailable from vimeo
					'download' => false, // prevent downloads
					'embed'    => 'whitelist', // Only allow embed to this site
				);

				$params['embed'] = array(
					'buttons' => array(
						'share'      => 0,
						'embed'      => 0,
						'watchlater' => 0,
						'fullscreen' => 1,
						'hd'         => 1,

					),
					'logos'   => array(
						'vimeo' => 0,
					),
				);
			} else {
				$params['privacy'] = array(
					'add'      => 0, //prevent adding add the video to a showcase, channel, or group
					'comments' => 'nobody',
				);
			}

			$vimeo_upload = $api->upload_pull( $url, $params );

			if ( isset( $vimeo_upload['response']['body']['uri'] )
				&& $vimeo_upload['response']['body']['uri'] ) {
				// If plus or above vimeo plan then set domain whitelist
				if ( 'basic' != $api->user_type ) {
					// Whitelist all domains on this WP install
					if ( function_exists( 'get_sites' ) ) {
						$sites = get_sites( array( 'number' => 0 ) );
						foreach ( $sites as $key => $site ) {
							$sites[ $key ] = $site->domain;
						}
						$sites = array_unique( $sites );
					} else {
						$sites[0] = get_site_url();
					}

					foreach ( $sites as $domain ) {
						$domain = str_replace( array( 'http://', 'https://' ), '', $domain );
						$api->whitelist_domain_add( $vimeo_upload['response']['body']['uri'], $domain );
					}
				}

				$vimeo_id = str_replace( '/videos/', '', $vimeo_upload['response']['body']['uri'] );

				// Add video to Media -> Vimeo
				$db->create_local_video( $params['name'], $params['description'], $vimeo_id );
				$this_recording['vimeo_id'] = $vimeo_id;
			} elseif ( isset( $vimeo_upload['response']['body']['error'] ) ) {
				$dev_error = ( isset( $vimeo_upload['response']['body']['developer_message'] ) ? $vimeo_upload['response']['body']['developer_message'] : '' );
				video_conferencing_zoom_log_error( 'Vimeo Error: ' . $vimeo_upload['response']['body']['error'] . ' ' . $dev_error );
			}

			return $this_recording;
		}
	}
} else {
	if ( is_admin() ) {
		add_action(
			'admin_notices',
			function() {
				if ( is_plugin_active( 'video-conferencing-with-zoom-api/video-conferencing-with-zoom-api.php' ) ) {
					echo "<div class='notice notice-error is-dismissible'>
			<p>
				<a target='_blank' href='https://elearningevolve.com/products/wordpress-zoom-integration/'>Zoom WordPress Integration</a> is an extended version of the plugin already installed on your site <span style='color:red;'>Video Conferencing with Zoom</span> and cannot be activated along with this plugin.
			</p>
		</div>";
					deactivate_plugins( 'video-conferencing-with-zoom-api/video-conferencing-with-zoom-api.php' );
				}
			}
		);
	}
}
