<?php

/**
 * Meetings Controller
 *
 * @since   2.1.0
 * @author  Deepen
 */
class Zoom_Video_Conferencing_Admin_Meetings {

	public static $message = '';
	public $settings;

	public function __construct() {
		add_action( 'admin_post_zoom_add_meeting', array( $this, 'create_meeting' ) );
		add_action( 'init', array( $this, 'check_sync_meeting' ) );
	}

	/**
	 * View list meetings page
	 *
	 * @since   1.0.0
	 * @changes in CodeBase
	 * @author  Deepen Bajracharya <dpen.connectify@gmail.com>
	 */
	public static function list_meetings() {
		wp_enqueue_script( 'video-conferencing-with-zoom-api-js' );
		wp_enqueue_script( 'video-conferencing-with-zoom-api-select2-js' );
		wp_enqueue_script( 'video-conferencing-with-zoom-api-datable-js' );

		wp_enqueue_style( 'video-conferencing-with-zoom-api' );
		wp_enqueue_style( 'video-conferencing-with-zoom-api-select2' );
		wp_enqueue_style( 'video-conferencing-with-zoom-api-datable' );

		//Get Template
		require_once ZOOM_VIDEO_CONFERENCE_PLUGIN_VIEWS_PATH . '/admin/tpl-list-meetings.php';
	}

	/**
	 * Add Meetings Page
	 *
	 * @since    1.0.0
	 * @modified 2.1.0
	 * @author   Deepen Bajracharya <dpen.connectify@gmail.com>
	 */
	public static function add_meeting() {
		wp_enqueue_script( 'video-conferencing-with-zoom-api-js' );
		wp_enqueue_script( 'video-conferencing-with-zoom-api-select2-js' );
		wp_enqueue_script( 'video-conferencing-with-zoom-api-timepicker-js' );

		wp_enqueue_style( 'video-conferencing-with-zoom-api-timepick' );
		wp_enqueue_style( 'video-conferencing-with-zoom-api' );
		wp_enqueue_style( 'video-conferencing-with-zoom-api-select2' );

		//Edit a Meeting
		if ( isset( $_GET['edit'] ) && isset( $_GET['host_id'] ) ) {
			if ( isset( $_POST['update_meeting'] ) ) {
				self::update_meeting();
			}

			//Get Editin Template
			require_once ZOOM_VIDEO_CONFERENCE_PLUGIN_VIEWS_PATH . '/admin/tpl-edit-meeting.php';
		} else {
			//Get Template
			require_once ZOOM_VIDEO_CONFERENCE_PLUGIN_VIEWS_PATH . '/admin/tpl-add-meetings.php';
		}
	}

	/**
	 * Update Meeting
	 *
	 * @since  2.1.0
	 * @author Deepen
	 */
	private static function update_meeting() {
		check_admin_referer( '_zoom_update_meeting_nonce_action', '_zoom_update_meeting_nonce' );
		$meeting_id = filter_input( INPUT_POST, 'meeting_id' );

		if ( 4 == filter_input( INPUT_POST, 'meeting_type' ) ) {
			$update_user_arr = array(
				'schedule_meeting' => array(
					'pmi_password' => filter_input( INPUT_POST, 'password' ),
				),
			);
			$is_error        = json_decode( zoom_conference()->updateUserSettings( filter_input( INPUT_POST, 'host_id' ), $update_user_arr ) );
		} else {
			$update_meeting_arr = array(
				'meeting_id'                    => $meeting_id,
				'topic'                         => filter_input( INPUT_POST, 'meetingTopic' ),
				'agenda'                        => filter_input( INPUT_POST, 'agenda' ),
				'type'                          => filter_input( INPUT_POST, 'meeting_type' ),
				'start_date'                    => filter_input( INPUT_POST, 'start_date' ),
				'timezone'                      => filter_input( INPUT_POST, 'timezone' ),
				'duration'                      => filter_input( INPUT_POST, 'duration' ),
				'password'                      => filter_input( INPUT_POST, 'password' ),
				'option_jbh'                    => filter_input( INPUT_POST, 'join_before_host' ),
				'option_host_video'             => filter_input( INPUT_POST, 'option_host_video' ),
				'option_meeting_authentication' => filter_input( INPUT_POST, 'option_meeting_authentication' ),
				'option_waiting_room'           => filter_input( INPUT_POST, 'option_waiting_room' ),
				'option_participants_video'     => filter_input( INPUT_POST, 'option_participants_video' ),
				'option_mute_participants'      => filter_input( INPUT_POST, 'option_mute_participants' ),
				'option_enforce_login'          => filter_input( INPUT_POST, 'option_enforce_login' ),
				'option_auto_recording'         => filter_input( INPUT_POST, 'option_auto_recording' ),
				'alternative_host_ids'          => filter_input( INPUT_POST, 'alternative_host_ids', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY ),
			);

			$is_error = json_decode( zoom_conference()->updateMeetingInfo( $update_meeting_arr ) );
		}

		if ( ! isset( $is_error->code ) ) {
			self::set_message( 'updated', __( 'Updated meeting.', 'video-conferencing-with-zoom-api' ) );
			$meeting_data = json_decode( zoom_conference()->getMeetingInfo( $meeting_id ) );
			$meeting_time = '';
			try {
				if ( isset( $meeting_data->start_time ) ) {
					$meeting_time = video_conferencing_zoom_convert_time_to_local( $meeting_data->start_time, $meeting_data->timezone );
				}
				if ( isset( $meeting_data->host_id ) ) {
					video_conferencing_zoom_update_meetings_list( $meeting_data );
					do_action( 'zoom_wp_after_update_meeting', $meeting_data, $meeting_time );
				}
			} catch ( Exception $e ) {
				video_conferencing_zoom_log_error( $e->getMessage() );
			}
		}
	}

	/**
	 * Create a new Meeting
	 *
	 * @since  2.1.0
	 * @author Deepen
	 */
	public function create_meeting() {
		check_admin_referer( '_zoom_add_meeting_nonce_action', '_zoom_add_meeting_nonce' );
		$host = explode( '__', filter_input( INPUT_POST, 'userId' ) );

		$create_meeting_arr = array(
			'userId'                        => $host[0],
			'meetingTopic'                  => filter_input( INPUT_POST, 'meetingTopic' ),
			'agenda'                        => filter_input( INPUT_POST, 'agenda' ),
			'start_date'                    => filter_input( INPUT_POST, 'start_date' ),
			'timezone'                      => filter_input( INPUT_POST, 'timezone' ),
			'password'                      => filter_input( INPUT_POST, 'password' ),
			'duration'                      => filter_input( INPUT_POST, 'duration' ),
			'join_before_host'              => filter_input( INPUT_POST, 'join_before_host' ),
			'option_host_video'             => filter_input( INPUT_POST, 'option_host_video' ),
			'option_meeting_authentication' => filter_input( INPUT_POST, 'option_meeting_authentication' ),
			'option_waiting_room'           => filter_input( INPUT_POST, 'option_waiting_room' ),
			'option_participants_video'     => filter_input( INPUT_POST, 'option_participants_video' ),
			'option_mute_participants'      => filter_input( INPUT_POST, 'option_mute_participants' ),
			'option_enforce_login'          => filter_input( INPUT_POST, 'option_enforce_login' ),
			'option_auto_recording'         => filter_input( INPUT_POST, 'option_auto_recording' ),
			'alternative_host_ids'          => filter_input( INPUT_POST, 'alternative_host_ids', FILTER_DEFAULT, FILTER_REQUIRE_ARRAY ),
		);

		$meeting_created = json_decode( zoom_conference()->createAMeeting( $create_meeting_arr ) );

		if ( ! empty( $meeting_created->code ) ) {
			wp_safe_redirect( admin_url() . 'admin.php?page=zoom-video-conferencing-add-meeting&zoom_meeting_error=' . urlencode( $meeting_created->message ) );
			exit;
		} else {
			/**
			 * Fires after meeting has been Created
			 *
			 * @since  2.0.1
			 *
			 * @param meeting_id , Host_id
			 */
			$meeting_time = '';
			try {
				if ( isset( $meeting_created->start_time ) ) {
					$meeting_time = video_conferencing_zoom_convert_time_to_local( $meeting_created->start_time, $meeting_created->timezone );
				}

				if ( isset( $meeting_created->id ) ) {
					update_user_meta( $host[1], 'zoom_meeting_id_' . (float) $meeting_created->id, $meeting_created->host_id );

					video_conferencing_zoom_update_meetings_list( $meeting_created );

					do_action( 'zoom_wp_after_create_meeting', $meeting_created, $meeting_time );

					wp_safe_redirect( admin_url() . 'admin.php?page=zoom-video-conferencing-add-meeting&edit=' . $meeting_created->id . '&host_id=' . $meeting_created->host_id . '&zoom_meeting_added=1' );
					exit;
				}
			} catch ( Exception $e ) {
				video_conferencing_zoom_log_error( $e->getMessage() );
			}

			wp_safe_redirect( admin_url() . 'admin.php?page=zoom-video-conferencing-add-meeting&edit=&host_id=&zoom_meeting_added=0' );
			exit;
		}
	}

	/**
	 * Sync Meetings List
	 *
	 * @since   4.7.2
	 * @changes in CodeBase
	 * @author  Adeel
	 */
	public static function check_sync_meeting() {
		if ( isset( $_POST['sync_zoom_meeting_nonce'] ) ) {
			$nonce = sanitize_text_field( $_POST['sync_zoom_meeting_nonce'] );
			if ( ! wp_verify_nonce( $nonce, 'sync_zoom_meeting_nonce_verify' ) ) {
				return;
			}
		}

		if ( isset( $_POST['sync_zoom_meetings'] ) && isset( $_POST['host_id'] ) && $_POST['host_id'] ) {
			global $wpdb;
			$results = $wpdb->get_results(
				"SELECT post_id, meta_key, meta_value FROM {$wpdb->prefix}postmeta WHERE meta_key = 'zoom_api_meeting_options' OR meta_key = 'zoom_api_webinar_options'",
				ARRAY_A
			);

			// Clear Meetings Listing
			$meetings = video_conferencing_zoom_api_get_meeting_list( $_POST['host_id'], true );

			// Clear Meeting and Webinar cached post meta values
			foreach ( $results as $result ) {
				$result['meta_value'] = unserialize( $result['meta_value'] );
				video_conferencing_zoom_unset_wp_cache( $result['post_id'], $result['meta_key'], $result['meta_value'] );
			}
		}
	}

	public static function get_message() {
		return self::$message;
	}

	public static function set_message( $class, $message ) {
		self::$message = '<div class="' . $class . '"><p>' . $message . '</p></div>';
	}
}

new Zoom_Video_Conferencing_Admin_Meetings();
