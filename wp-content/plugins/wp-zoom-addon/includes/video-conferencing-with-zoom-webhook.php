<?php
// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) {
	die( 'Not Allowed Here !' );
}

if ( ! class_exists( 'Video_Conferencing_With_Zoom_Web_Hook' ) ) {
	class Video_Conferencing_With_Zoom_Web_Hook {

		private static $_instance = null;
		private $meeting_object   = array();
		private $type             = null;

		/**
		 * Create only one instance so that it may not Repeat
		 *
		 * @since 4.2.0
		 */
		public static function instance() {
			if ( is_null( self::$_instance ) ) {
				self::$_instance = new self();
			}

			return self::$_instance;
		}

		public function set_meeting( $meeting_object, $event ) {
			$this->meeting_object = $meeting_object;
			$this->set_event( $event );
			$this->set_meeting_type();
			define( 'EXECUTING_ZOOM_WEBHOOK', 1 );

			delete_option( 'zoom_authorization_header_missing' );
			delete_option( 'zoom_authorization_header_incorrect' );
		}

		public function get_meeting() {
			return $this->meeting_object;
		}

		public function set_event( $event ) {
			$this->event = $event;
		}

		public function get_event() {
			return $this->event;
		}

		public function set_meeting_type() {
			$type       = $this->get_meeting_type();
			$this->type = $type;
		}

		public function get_meeting_type() {
			$meeting_type_key = 'zoom_api_meeting_options';
			$webinar_type_key = 'zoom_api_webinar_options';

			if ( ! isset( $this->meeting_object['type'] ) ) {
				if ( strpos( $this->get_event(), 'meeting' ) !== false ) {
					return $meeting_type_key;
				} elseif ( strpos( $this->get_event(), 'webinar' ) !== false ) {
					return $webinar_type_key;
				}
			}

			switch ( $this->meeting_object['type'] ) {
				case '1':
				case '2':
				case '3':
				case '4':
				case '8':
					return $meeting_type_key;
					break;
				default:
					return $webinar_type_key;
					break;
			}
		}

		/**
		 * Constructor method for loading the components
		 *
		 * @since  4.2.0
		 */
		public function __construct() {
			add_action( 'plugins_loaded', array( $this, 'set_webhooks' ), 1 );
			add_action( 'zoom_wp_auto_end_meeting_execute', array( $this, 'zoom_wp_auto_end_meeting_execute' ), 10, 2 );
		}

		/**
		 * Listen for Web Hooks from Zoom
		 *
		 *
		 * @since   4.2.0
		 *
		 * @author  Adeel
		 */
		public function set_webhooks() {
			if ( ! video_conferencing_zoom_is_valid_request() ) {
				return;
			}

			try {
				$data = file_get_contents( 'php://input' );
				if ( ! $data ) {
					return;
				}
				$event = json_decode( $data, true );
				if ( json_last_error() == JSON_ERROR_NONE && $event && is_array( $event ) && isset( $event['event'] ) && isset( $event['payload']['object']['id'] ) ) {
					/* Token check disabled in v4.8.0 */
					//$app_verification_token = $this->get_zoom_app_verification_token();
					// if ( ! $app_verification_token ) {
					// 	update_option( 'zoom_authorization_header_missing', 1, false );
					// 	die();
					// } elseif ( get_option( 'zoom_app_verification_token' ) != $app_verification_token ) {
					// 	update_option( 'zoom_authorization_header_incorrect', 1, false );
					// 	die();
					// }
					//file_put_contents( dirname(__DIR__) . '/logs/webhook.txt', print_r( $event, true ) );

					$this->set_meeting( $event['payload']['object'], $event['event'] );

					switch ( $event['event'] ) {
						case 'recording.completed':
						case 'recording.recovered':
							if ( 1 != get_option( 'zoom_hide_recordings' ) ) {
								$this->set_cloud_recording();
							}
							break;
						case 'recording.trashed':
						case 'recording.deleted':
							if ( 1 != get_option( 'zoom_hide_recordings' ) ) {
								$this->remove_cloud_recording();
							}
							break;
						case 'webinar.started':
						case 'meeting.started':
							$zoom_meeting_autoend = get_option( 'zoom_meeting_autoend' );
							if ( $zoom_meeting_autoend ) {
								$this->zoom_wp_auto_end_meeting_prepare();
							}
							$this->zoom_wp_set_meeting_status( 1 );
							break;
						case 'webinar.ended':
						case 'meeting.ended':
							$zoom_meeting_autoend = get_option( 'zoom_meeting_autoend' );
							if ( $zoom_meeting_autoend ) {
								$this->zoom_wp_auto_end_cron_remove();
							}
							$this->zoom_wp_set_meeting_status( 0 );
							break;
						case 'meeting.created':
						case 'meeting.updated':
							$this->zoom_wp_set_cache();
							break;
						case 'webinar.created':
						case 'webinar.updated':
							$this->zoom_wp_set_cache();
							break;
						case 'meeting.deleted':
						case 'webinar.deleted':
							$this->zoom_wp_clear_cache();
							break;
						// Clear user cache in any of the following conditions
						case 'user.activated':
						case 'user.updated':
						case 'user.deleted':
							$this->zoom_wp_clear_user_cache();
							break;
						case 'meeting.participant_joined':
							$this->zoom_wp_participant_joined();
							break;
						case 'meeting.participant_left':
							$this->zoom_wp_participant_left();
							break;
						case 'webinar.registration_created':
						case 'meeting.registration_created':
							$this->zoom_wp_participant_registered();
							break;
						default:
							break;
					}
					die();
				}
			} catch ( Exception $e ) {
				video_conferencing_zoom_log_error( $e->getMessage() );
			}
		}

		/**
		 * When a participant registered for a Webinar or Meeting
		 *
		 *
		 * @since   4.2.0
		 *
		 * @author  Adeel
		 */
		public function zoom_wp_participant_registered() {
			if ( ! isset( $this->meeting_object['registrant']['email'] ) ) {
				return;
			}

			$registrant = $this->meeting_object['registrant'];

			$user = get_user_by( 'email', $registrant['email'] );

			if ( ! isset( $user->ID ) || ! $user->ID ) {
				return;
			}

			update_user_meta( (int) $user->ID, 'zoom_registrant_url_' . (float) $this->meeting_object['id'], $registrant['join_url'] );
		}

		/**
		 * Execute End Meeting logic
		 *
		 *
		 * @since   4.2.0
		 *
		 * @author  Adeel
		 */
		public function zoom_wp_auto_end_meeting_execute( $meeting_id, $event ) {
			if ( 'webinar.started' == $event ) {
				zoom_conference()->endWebinarStatus( $meeting_id );
			} elseif ( 'meeting.started' == $event ) {
				zoom_conference()->endMeetingStatus( $meeting_id );
			}
		}

		/**
		 * Prepare to End Meeting Automatically after listeing to meeting start web hook
		 *
		 *
		 * @since   4.2.0
		 *
		 * @author  Adeel
		 */
		public function zoom_wp_auto_end_meeting_prepare() {
			if ( ! $this->meeting_object['duration'] ) {
				return;
			}

			$after_meeting_duration = time() + ( $this->meeting_object['duration'] * 60 );

			if ( ! wp_next_scheduled( 'zoom_wp_auto_end_meeting_execute' ) ) {
				wp_schedule_single_event( $after_meeting_duration, 'zoom_wp_auto_end_meeting_execute', array( $this->meeting_object['id'], $this->get_event() ) );
			}
		}

		/**
		 * Remove auto end cron on meeting end
		 *
		 *
		 * @since   4.2.0
		 *
		 * @author  Adeel
		 */
		public function zoom_wp_auto_end_cron_remove() {
			$scheduled_event = str_replace( 'ended', 'started', $this->get_event() );
			wp_clear_scheduled_hook( 'zoom_wp_auto_end_meeting_execute', array( $this->meeting_object['id'], $scheduled_event ) );
		}

		/**
		 * Clear Meeting and Webinar options cached in WP on delete from Zoom
		 *
		 *
		 * @since   4.2.0
		 *
		 * @author  Adeel
		 */
		public function zoom_wp_clear_cache() {
			// Reset Zoom meetings list
			video_conferencing_zoom_update_meetings_list( $this->meeting_object['id'], $this->meeting_object['host_id'], true );
		}

		/**
		 * Set Meeting and Webinar options on meeting create/update
		 *
		 *
		 * @since   4.2.0
		 *
		 * @author  Adeel
		 */
		public function zoom_wp_set_cache() {
			if ( 'zoom_api_meeting_options' == $this->type ) {
				$this->meeting_object = json_decode( zoom_conference()->getMeetingInfo( $this->meeting_object['id'] ) );
			} elseif ( 'zoom_api_webinar_options' == $this->type ) {
				$this->meeting_object = json_decode( zoom_conference()->getWebinarInfo( $this->meeting_object['id'] ) );
			}
			if ( isset( $this->meeting_object->code ) ) {
				video_conferencing_zoom_log_error( $this->meeting_object->message );
				return;
			}

			// PMI meeting record update
			if ( 4 == $this->meeting_object->type ) {
				$host_id = sanitize_text_field( $this->meeting_object->host_id );
				update_option( 'zoom_wp_pmi_meeting_' . $host_id, $this->meeting_object );
			} else {
				// If its a scheduled meeting update record in post meta
				$zoom_map_array = get_post_meta( $this->meeting_object->id, $this->type, true );

				video_conferencing_zoom_set_wp_cache( $this->meeting_object, $this->type, $zoom_map_array );
			}
			// Reset Zoom meetings list
			video_conferencing_zoom_update_meetings_list( $this->meeting_object );
		}

		/**
		 * Set Meeting or Webinar Recording in WP
		 *
		 *
		 * @since   4.10.0
		 *
		 * @author  Adeel
		 */
		public function set_cloud_recording() {
			$zoom_map_array = get_post_meta( $this->meeting_object['id'], $this->type, true );
			if ( ! $zoom_map_array ) {
				$zoom_map_array = array();
			}

			if ( ! isset( $zoom_map_array['past_recordings'] ) ) {
				$zoom_map_array['past_recordings'] = array();
			}

			if ( isset( $this->meeting_object['recording_files'] ) && $this->meeting_object['recording_files'] ) {
				$this_recording = video_conferencing_recording_get_params_by_sequence( (array) $this->meeting_object['recording_files'], array() );
				if ( isset( $this_recording['recording_url'] ) && $this_recording['recording_url'] ) {
					$updated        = 1;
					$init_cass      = Video_Conferencing_With_Zoom::instance();
					$this_recording = $init_cass->upload_recording_to_vimeo( $this_recording, $this->meeting_object['topic'] );

					array_unshift( $zoom_map_array['past_recordings'], $this_recording );
				}
			}

			if ( isset( $updated ) ) {
				update_post_meta( $this->meeting_object['id'], $this->type, $zoom_map_array );
			}
		}

		/**
		 * Remove Meeting or Webinar Recording in WP
		 *
		 *
		 * @since   4.10.0
		 *
		 * @author  Adeel
		 */
		public function remove_cloud_recording() {
			$zoom_map_array = get_post_meta( $this->meeting_object['id'], $this->type, true );
			if ( ! $zoom_map_array || ! isset( $zoom_map_array['past_recordings'] ) ) {
				return;
			}

			if ( isset( $this->meeting_object['recording_files'] ) && $this->meeting_object['recording_files'] ) {
				$this_recording = video_conferencing_recording_get_params_by_sequence( (array) $this->meeting_object['recording_files'], array() );
				foreach ( $zoom_map_array['past_recordings'] as $key => $past_meetings ) {
					if ( $this_recording['recording_id'] == $past_meetings['recording_id']
						|| $this_recording['recording_url'] == $past_meetings['recording_url'] ) {
						if ( isset( $zoom_map_array['past_recordings'][ $key ] ) ) {
							if ( ! isset( $past_meetings['vimeo_id'] ) ) {
								unset( $zoom_map_array['past_recordings'][ $key ] );
								$removed = 1;
							}
						}
						break;
					}
				}
			}

			if ( isset( $removed ) ) {
				$zoom_map_array['past_recordings'] = array_values( $zoom_map_array['past_recordings'] );
				update_post_meta( $this->meeting_object['id'], $this->type, $zoom_map_array );
			}
		}

		/**
		 * Clear user option on create/edit/update user from Zoom
		 *
		 *
		 * @since   4.3.0
		 *
		 * @author  Adeel
		 */
		public function zoom_wp_clear_user_cache() {
			video_conferencing_zoom_api_get_users( true, true );
		}

		/**
		 * Set meeting status in WP
		 *
		 *
		 * @since   4.3.0
		 *
		 * @author  Adeel
		 */
		public function zoom_wp_set_meeting_status( $status = 0 ) {
			$zoom_map_array = get_post_meta( $this->meeting_object['id'], $this->type, true );
			if ( ! is_array( $zoom_map_array ) ) {
				$zoom_map_array = array();
			}

			if ( 1 == $status ) {
				$zoom_map_array['started'] = 1;
				if ( isset( $zoom_map_array['ended'] ) ) {
					unset( $zoom_map_array['ended'] );
				}
				update_post_meta( $this->meeting_object['id'], $this->type, $zoom_map_array );

				if ( class_exists( 'Zoom_WP_LearnDash_Lesson_Bind' ) ) {
					$ld_class = new Zoom_WP_LearnDash_Lesson_Bind();
					$ld_class->meeting_started( $this->meeting_object );
				}
			} else {
				$zoom_map_array['ended'] = 1;
				if ( isset( $zoom_map_array['started'] ) ) {
					unset( $zoom_map_array['started'] );
				}
				update_post_meta( $this->meeting_object['id'], $this->type, $zoom_map_array );

				if ( class_exists( 'Zoom_WP_LearnDash_Lesson_Bind' ) ) {
					$ld_class = new Zoom_WP_LearnDash_Lesson_Bind();
					$ld_class->meeting_ended( $this->meeting_object );
				}
			}
		}

		/**
		 * Track a participant joining the meeting
		 *
		 *
		 * @since   4.3.0
		 *
		 * @author  Adeel
		 */
		public function zoom_wp_participant_joined() {
			if ( class_exists( 'Zoom_WP_LearnDash_Lesson_Bind' ) ) {
				$ld_class = new Zoom_WP_LearnDash_Lesson_Bind();
				$ld_class->participant_joined( $this->meeting_object );
			}
		}

		/**
		 * Track a participant leaving the meeting
		 *
		 *
		 * @since   4.3.0
		 *
		 * @author  Adeel
		 */
		public function zoom_wp_participant_left() {
			if ( class_exists( 'Zoom_WP_LearnDash_Lesson_Bind' ) ) {
				$ld_class = new Zoom_WP_LearnDash_Lesson_Bind();
				$ld_class->participant_left( $this->meeting_object );
			}
		}
	}
}

Video_Conferencing_With_Zoom_Web_Hook::instance();
