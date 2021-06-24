<?php

require ZOOM_VIDEO_CONFERENCE_PLUGIN_DIR_PATH . '/vendor/autoload.php';

use \Firebase\JWT\JWT;

/**
 * Class Connecting Zoom APi V2
 *
 * @since   2.0
 * @author  Deepen
 * @modifiedn
 */
if ( ! class_exists( 'Zoom_Video_Conferencing_Api' ) ) {

	class Zoom_Video_Conferencing_Api {

		public $zoom_api_key;

		public $zoom_api_secret;

		protected static $_instance;

		private $api_url = 'https://api.zoom.us/v2/';

		private $return_object = null;

		private $data_list = array();

		/**
		 * Create only one instance so that it may not Repeat
		 *
		 * @since 2.0.0
		 */
		public static function instance() {
			if ( ! isset( self::$_instance ) && ! ( self::$_instance instanceof Zoom_Video_Conferencing_Api ) ) {
				self::$_instance = new self();
			}

			self::$_instance->setup_vars();

			return self::$_instance;
		}

		private function setup_vars() {
			if ( isset( $_POST['zoom_api_key'] ) && isset( $_POST['zoom_api_secret'] ) ) {
				check_admin_referer( '_zoom_settings_update_nonce_action', '_zoom_settings_nonce' );

				$this->zoom_api_key    = sanitize_text_field( $_POST['zoom_api_key'] );
				$this->zoom_api_secret = sanitize_text_field( $_POST['zoom_api_secret'] );
			} else {
				$this->zoom_api_key    = esc_html( get_option( 'zoom_api_key' ) );
				$this->zoom_api_secret = esc_html( get_option( 'zoom_api_secret' ) );
			}
		}

		protected function sendRequest( $calledFunction, $data, $request = 'GET', $log = true ) {
			$request_url = $this->api_url . $calledFunction;
			$args        = array(
				'headers' => array(
					'Authorization' => 'Bearer ' . $this->generateJWTKey(),
					'Content-Type'  => 'application/json',
				),
				'timeout' => 60,
			);
			try {
				set_time_limit( 0 );
				$response = new stdClass();
				$response = $this->makeRequest( $request_url, $args, $data, $request, $log );
				// check if response contains multiple pages
				if ( $this->data_list && isset( $response->{$this->return_object} ) ) {
					$response->{$this->return_object} = $this->data_list;
				}
				$response = json_encode( $response );
			} catch ( Exception $e ) {
				video_conferencing_zoom_log_error( $e->getMessage() );
			}

			return $response;
		}

		// Send API request to Zoom
		public function makeRequest( $request_url, $args, $data, $request = 'GET', $log = true ) {
			if ( 'GET' == $request ) {
				$args['body'] = ! empty( $data ) ? $data : array();
				$response     = wp_remote_get( $request_url, $args );
			} elseif ( 'DELETE' == $request ) {
				$args['body']   = ! empty( $data ) ? json_encode( $data ) : array();
				$args['method'] = 'DELETE';
				$response       = wp_remote_request( $request_url, $args );
			} elseif ( 'PATCH' == $request ) {
				$args['body']   = ! empty( $data ) ? json_encode( $data ) : array();
				$args['method'] = 'PATCH';
				$response       = wp_remote_request( $request_url, $args );
			} elseif ( 'PUT' == $request ) {
				$args['body']   = ! empty( $data ) ? json_encode( $data ) : array();
				$args['method'] = 'PUT';
				$response       = wp_remote_post( $request_url, $args );
			} else {
				$args['body']   = ! empty( $data ) ? json_encode( $data ) : array();
				$args['method'] = 'POST';
				$response       = wp_remote_post( $request_url, $args );
			}

			if ( is_wp_error( $response ) ) {
				video_conferencing_zoom_log_error( $response->get_error_message() );
				return false;
			}

			$response = wp_remote_retrieve_body( $response );

			if ( ! $response || '' == $response ) {
				return false;
			}

			$check_response = new stdClass();
			$check_response = json_decode( $response );
			if ( isset( $check_response->code ) || isset( $check_response->error ) ) {
				if ( $log ) {
					video_conferencing_zoom_log_error( $check_response->message );
				}
			}

			// Fetch the next page of the request
			if ( isset( $check_response->next_page_token )
				&& $check_response->next_page_token
				&& $this->return_object
			) {
				$data['next_page_token'] = $check_response->next_page_token;

				// If data received then fetch other pages too
				if ( $check_response->{$this->return_object} ) {
					$this->data_list = array_merge( $this->data_list, $check_response->{$this->return_object} );
				}

				return $this->makeRequest( $request_url, $args, $data, $request, $log );
			} elseif ( $this->data_list ) {
				// Get last page data in a multi request mode
				$this->data_list = array_merge( $this->data_list, $check_response->{$this->return_object} );
			}

			return $check_response;
		}

		//function to generate JWT
		public function generateJWTKey() {

			$key    = $this->zoom_api_key;
			$secret = $this->zoom_api_secret;

			$token = array(
				'iat' => time(),
				'aud' => null,
				'iss' => $key,
				'exp' => time() + strtotime( '+60 minutes' ),
			);

			return JWT::encode( $token, $secret );
		}

		/**
		 * Creates a User
		 *
		 * @param $action
		 * @param $email
		 * @param $first_name
		 * @param $last_name
		 * @param $type
		 *
		 * @return array|bool|string
		 */
		public function createAUser( $postedData = array() ) {
			$createAUserArray              = array();
			$createAUserArray['action']    = $postedData['action'];
			$createAUserArray['user_info'] = array(
				'email'      => $postedData['email'],
				'type'       => $postedData['type'],
				'first_name' => $postedData['first_name'],
				'last_name'  => $postedData['last_name'],
			);

			return $this->sendRequest( 'users', $createAUserArray, 'POST' );
		}

		/**
		 * User Function to List
		 *
		 * @return array
		 */
		public function listUsers( $listUsersArray = array() ) {
			$listUsersArray['page_size'] = 300;

			$this->return_object = 'users';

			return $this->sendRequest( 'users', $listUsersArray, 'GET' );
		}

		/**
		 * Get A users info by user Id
		 *
		 * @param $user_id
		 *
		 * @return array|bool|string
		 */
		public function getUserInfo( $user_id ) {
			$getUserInfoArray = array();

			return $this->sendRequest( 'users/' . $user_id, $getUserInfoArray );
		}

		/**
		 * Get A user settings by user Id
		 *
		 * @param $user_id
		 *
		 * @return array|bool|string
		 */
		public function getUserSettings( $user_id ) {
			$getUserInfoArray = array();

			return $this->sendRequest( 'users/' . $user_id . '/settings', $getUserInfoArray );
		}

		/**
		 * Update A user settings by user Id
		 *
		 * @param $user_id
		 *
		 * @return array|bool|string
		 */
		public function updateUserSettings( $user_id, $updateUserInfoArray ) {
			return $this->sendRequest( 'users/' . $user_id . '/settings', $updateUserInfoArray, 'PATCH' );
		}

		/**
		 * Delete a User
		 *
		 * @param $userid
		 *
		 * @return array|bool|string
		 */
		public function deleteAUser( $userid ) {
			$deleteAUserArray       = array();
			$deleteAUserArray['id'] = $userid;

			return $this->sendRequest( 'users/' . $userid, false, 'DELETE' );
		}

		/**
		 * Get Meetings
		 *
		 * @param $host_id
		 *
		 * @return array
		 */
		public function listMeetings( $host_id ) {
			$listMeetingsArray              = array();
			$listMeetingsArray['page_size'] = 300;
			$this->return_object            = 'meetings';
			$host_id                        = sanitize_text_field( $host_id );
			$meetings_list                  = new stdClass();
			$meetings_list                  = json_decode( $this->sendRequest( 'users/' . $host_id . '/meetings', $listMeetingsArray, 'GET' ) );

			// Sort meetings by create date
			if ( isset( $meetings_list->meetings ) ) {
				usort(
					$meetings_list->meetings,
					function( $a, $b ) {
						$ad = strtotime( $a->created_at );
						$bd = strtotime( $b->created_at );

						if ( $ad == $bd ) {
							return 0;
						}

						return $ad > $bd ? -1 : 1;
					}
				);
			}

			$this->return_object = array();
			$pmi_meeting_api     = get_option( 'zoom_wp_pmi_meeting_' . $host_id );

			// Get PMI details from API
			if ( ! $pmi_meeting_api ) {
				$user = json_decode( $this->getUserInfo( $host_id ) );
				if ( isset( $user->pmi ) && $user->pmi ) {
					$this->return_object = array();
					$pmi_meeting_api     = new stdClass();
					$pmi_meeting_api     = json_decode( $this->getMeetingInfo( $user->pmi ) );
					if ( isset( $pmi_meeting_api->id ) && $pmi_meeting_api->id ) {
						// Save PMI record in user meta
						update_option( 'zoom_wp_pmi_meeting_' . $host_id, $pmi_meeting_api );
					}
				}
			}

			if ( isset( $meetings_list->meetings ) && $pmi_meeting_api ) {
				array_unshift( $meetings_list->meetings, $pmi_meeting_api );
			}

			return $meetings_list;
		}

		/**
		 * Get Past Meetings
		 *
		 * @param $meeting_id
		 *
		 * @return array
		 */
		public function listPastMeetings( $meeting_id ) {
			$listMeetingsArray = array();
			$meetings_list     = json_decode( $this->sendRequest( 'past_meetings/' . $meeting_id . '/instances', $listMeetingsArray, 'GET' ) );

			return $meetings_list;
		}

		/**
		 * Get All Recordings By User
		 *
		 * @param $meeting_id
		 *
		 * @return array
		 */
		public function listUserRecordings( $user_id ) {
			$listMeetingsArray              = array();
			$all_meetings                   = array();
			$listMeetingsArray['page_size'] = 300;

			// Fetch recordings upto 3 months
			for ( $month = 0; $month < 3; $month++ ) {
				$prev_month                = $month + 1;
				$listMeetingsArray['from'] = gmdate( 'Y-m-d', strtotime( "-$prev_month months" ) );
				$listMeetingsArray['to']   = gmdate( 'Y-m-d', strtotime( "-$month months" ) );

				$recordings_list = json_decode( $this->sendRequest( 'users/' . $user_id . '/recordings', $listMeetingsArray, 'GET' ) );
				if ( isset( $recordings_list->meetings ) && $recordings_list->meetings ) {
					$all_meetings = array_merge( $all_meetings, $recordings_list->meetings );
				}
			}

			return $all_meetings;
		}

		/**
		 * Create A meeting API
		 *
		 * @param  array $data
		 *
		 * @return object
		 */
		public function createAMeeting( $data = array() ) {

			$data['timezone'] = ( $data['timezone'] ? $data['timezone'] : 'UTC' );
			$date             = new DateTime( $data['start_date'], new DateTimeZone( $data['timezone'] ) );
			$date->setTimezone( new DateTimeZone( 'UTC' ) );
			$start_time = $date->format( 'Y-m-d\TH:i:s\Z' );

			$createAMeetingArray = array();

			if ( ! empty( $data['alternative_host_ids'] ) ) {
				if ( count( $data['alternative_host_ids'] ) > 1 ) {
					$alternative_host_ids = implode( ',', $data['alternative_host_ids'] );
				} else {
					$alternative_host_ids = $data['alternative_host_ids'][0];
				}
			}

			$createAMeetingArray['topic']      = $data['meetingTopic'];
			$createAMeetingArray['agenda']     = ! empty( $data['agenda'] ) ? $data['agenda'] : '';
			$createAMeetingArray['type']       = ! empty( $data['type'] ) ? $data['type'] : 2; //Scheduled
			$createAMeetingArray['start_time'] = $start_time;
			$createAMeetingArray['timezone']   = $data['timezone'];
			$createAMeetingArray['password']   = ! empty( $data['password'] ) ? $data['password'] : '';
			$createAMeetingArray['duration']   = ! empty( $data['duration'] ) ? $data['duration'] : 15;
			$createAMeetingArray['settings']   = array(
				'meeting_authentication' => ! empty( $data['option_meeting_authentication'] ) ? true : false,
				'waiting_room'           => ! empty( $data['option_waiting_room'] ) ? true : false,
				'join_before_host'       => ! empty( $data['join_before_host'] ) ? true : false,
				'host_video'             => ! empty( $data['option_host_video'] ) ? true : false,
				'participant_video'      => ! empty( $data['option_participants_video'] ) ? true : false,
				'mute_upon_entry'        => ! empty( $data['option_mute_participants'] ) ? true : false,
				'enforce_login'          => ! empty( $data['option_enforce_login'] ) ? true : false,
				'auto_recording'         => ! empty( $data['option_auto_recording'] ) ? $data['option_auto_recording'] : 'none',
				'alternative_hosts'      => isset( $alternative_host_ids ) ? $alternative_host_ids : '',
			);

			$createAMeetingArray = apply_filters( 'zoom_wp_before_create_meeting', $createAMeetingArray );

			return $this->sendRequest( 'users/' . $data['userId'] . '/meetings', $createAMeetingArray, 'POST' );
		}

		/**
		 * Updating Meeting Info
		 *
		 * @param $update_data
		 *
		 * @return array
		 */
		public function updateMeetingInfo( $update_data = array() ) {
			$updateMeetingInfoArray  = array();
			$update_data['timezone'] = ( $update_data['timezone'] ? $update_data['timezone'] : 'UTC' );
			$date                    = new DateTime( $update_data['start_date'], new DateTimeZone( $update_data['timezone'] ) );
			$date->setTimezone( new DateTimeZone( 'UTC' ) );

			if ( ! empty( $update_data['alternative_host_ids'] ) ) {
				if ( count( $update_data['alternative_host_ids'] ) > 1 ) {
					$alternative_host_ids = implode( ',', $update_data['alternative_host_ids'] );
				} else {
					$alternative_host_ids = $update_data['alternative_host_ids'][0];
				}
			}
			$updateMeetingInfoArray['start_time'] = $date->format( 'Y-m-d\TH:i:s\Z' );
			$updateMeetingInfoArray['timezone']   = $update_data['timezone'];
			$updateMeetingInfoArray['duration']   = ! empty( $update_data['duration'] ) ? $update_data['duration'] : 15;
			$updateMeetingInfoArray['agenda']     = ! empty( $update_data['agenda'] ) ? $update_data['agenda'] : '';
			$updateMeetingInfoArray['topic']      = $update_data['topic'];
			$updateMeetingInfoArray['type']       = ! empty( $update_data['type'] ) ? $update_data['type'] : 2; //Scheduled
			$updateMeetingInfoArray['password']   = ! empty( $update_data['password'] ) ? $update_data['password'] : '';
			$updateMeetingInfoArray['settings']   = array(
				'meeting_authentication' => ! empty( $update_data['option_meeting_authentication'] ) ? true : false,
				'waiting_room'           => ! empty( $update_data['option_waiting_room'] ) ? true : false,
				'join_before_host'       => ! empty( $update_data['option_jbh'] ) ? true : false,
				'host_video'             => ! empty( $update_data['option_host_video'] ) ? true : false,
				'participant_video'      => ! empty( $update_data['option_participants_video'] ) ? true : false,
				'mute_upon_entry'        => ! empty( $update_data['option_mute_participants'] ) ? true : false,
				'enforce_login'          => ! empty( $update_data['option_enforce_login'] ) ? true : false,
				'auto_recording'         => ! empty( $update_data['option_auto_recording'] ) ? $update_data['option_auto_recording'] : 'none',
				'alternative_hosts'      => isset( $alternative_host_ids ) ? $alternative_host_ids : '',
			);

			$updateMeetingInfoArray = apply_filters( 'zoom_wp_before_update_meeting', $updateMeetingInfoArray );

			return $this->sendRequest( 'meetings/' . $update_data['meeting_id'], $updateMeetingInfoArray, 'PATCH' );
		}

		/**
		 * Get a Meeting Info
		 *
		 * @param  [INT] $id
		 * @param  [STRING] $host_id
		 *
		 * @return array
		 */
		public function getMeetingInfo( $id ) {
			if ( ! $id ) {
				return;
			}

			$getMeetingInfoArray              = array();
			$getMeetingInfoArray['meetingId'] = $id;

			$response = $this->sendRequest( 'meetings/' . $id, $getMeetingInfoArray, 'GET' );

			return apply_filters( 'zoom_wp_after_get_meeting', $response );
		}

		/**
		 * Get a Webinar Info
		 *
		 * @param  [INT] $id
		 * @param  [STRING] $host_id
		 *
		 * @return array
		 */
		public function getWebinarInfo( $id ) {
			$getWebinarInfoArray              = array();
			$getWebinarInfoArray['webinarId'] = $id;

			$response = $this->sendRequest( 'webinars/' . $id, $getWebinarInfoArray, 'GET' );

			return apply_filters( 'zoom_wp_after_get_webinar', $response );
		}

		public function getMeetingStatus( $id ) {
			$status = array();
			return $this->sendRequest( 'meetings/' . $id, $status, 'GET' );

		}

		public function endMeetingStatus( $meeting_id ) {
			$postData           = array();
			$postData['action'] = 'end';

			return $this->sendRequest( 'meetings/' . $meeting_id . '/status', $postData, 'PUT' );
		}

		public function endWebinarStatus( $meeting_id ) {
			$postData           = array();
			$postData['action'] = 'end';

			return $this->sendRequest( 'webinars/' . $meeting_id . '/status', $postData, 'PUT' );
		}

		/**
		 * Delete A Meeting
		 *
		 * @param $meeting_id [int]
		 *
		 * @return array
		 */
		public function deleteAMeeting( $meeting_id ) {
			$deleteAMeetingArray = array();

			return $this->sendRequest( 'meetings/' . $meeting_id, $deleteAMeetingArray, 'DELETE' );
		}

		/*Functions for management of reports*/
		/**
		 * Get daily account reports by month
		 *
		 * @param $month
		 * @param $year
		 *
		 * @return bool|mixed
		 */
		public function getDailyReport( $month, $year ) {
			$getDailyReportArray          = array();
			$getDailyReportArray['year']  = $year;
			$getDailyReportArray['month'] = $month;

			return $this->sendRequest( 'report/daily', $getDailyReportArray, 'GET' );
		}


		// Generate Account Reports
		public function newReport( $user_id, $reportFrom, $reportTo ) {
			$reportParams              = array();
			$reportParams['from']      = $reportFrom;
			$reportParams['to']        = $reportTo;
			$reportParams['page_size'] = 300;
			return $this->sendRequest( 'report/users/' . $user_id . '/meetings?from=' . $reportFrom . '&page_size=500+&to=' . $reportTo . '&type=past', $reportParams, 'GET' );
		}

		// Generate Meeting Participant Report
		public function meetingParticipantReport( $meeting_id ) {
			$reportParams              = array();
			$reportParams['page_size'] = 500;

			return $this->sendRequest( 'report/meetings/' . $meeting_id . '/participants?page_size=500', $reportParams, 'GET' );
		}

		// Generate Webinar Participant Report
		public function webinarParticipantReport( $meeting_id ) {
			$reportParams              = array();
			$reportParams['page_size'] = 500;

			return $this->sendRequest( 'report/webinars/' . $meeting_id . '/participants?page_size=500', $reportParams, 'GET' );
		}

		public function registerWebinarParticipants( $webinar_id, $first_name, $last_name, $email ) {
			$postData               = array();
			$postData['first_name'] = $first_name;
			$postData['last_name']  = $last_name;
			$postData['email']      = $email;

			return $this->sendRequest( 'webinars/' . $webinar_id . '/registrants', $postData, 'POST' );
		}

		/**
		 * List webinars
		 *
		 * @param $userId
		 *
		 * @return bool|mixed
		 */
		public function listWebinar( $userId ) {
			$postData              = array();
			$postData['page_size'] = 300;
			$this->return_object   = 'webinars';

			return $this->sendRequest( 'users/' . $userId . '/webinars', $postData, 'GET' );
		}

		/**
		 * List Webinar Participants
		 *
		 * @param $webinarId
		 *
		 * @return bool|mixed
		 */
		public function listWebinarParticipants( $webinarId ) {
			$postData              = array();
			$postData['page_size'] = 300;

			return $this->sendRequest( 'webinars/' . $webinarId . '/registrants', $postData, 'GET' );
		}

		/**
		 * List Meeting Participants
		 *
		 * @param $webinarId
		 *
		 * @return bool|mixed
		 */
		public function listMeetingRegistrants( $meetingId ) {
			$postData = array();

			return $this->sendRequest( 'meetings/' . $meetingId . '/registrants', $postData, 'GET' );
		}

		/**
		 * Get recording by meeting ID
		 *
		 * @param $meetingId
		 *
		 * @return bool|mixed
		 */
		public function recordingsByMeeting( $meetingId ) {
			$recordings = json_decode( $this->sendRequest( 'meetings/' . $meetingId . '/recordings', false, 'GET', false ), true );

			return $recordings;
		}


		/**
		 * Update recording by meeting ID
		 *
		 * @param $meetingId
		 *
		 * @return bool|mixed
		 */
		public function updateRecordingsByMeeting( $meetingId, $updateRecordings ) {

			return $this->sendRequest( 'meetings/' . $meetingId . '/recordings/settings', $updateRecordings, 'PATCH', false );
		}

		/**
		 * Get all recordings by USER ID
		 *
		 * @param $host_id
		 * @param $data array
		 *
		 * @return bool|mixed
		 */
		public function listRecording( $host_id, $data = array() ) {
			$postData = array();
			$from     = date( 'Y-m-d', strtotime( '-1 year', time() ) );
			$to       = date( 'Y-m-d' );

			$postData['from'] = ! empty( $data['from'] ) ? $data['from'] : $from;
			$postData['to']   = ! empty( $data['to'] ) ? $data['to'] : $to;

			return $this->sendRequest( 'users/' . $host_id . '/recordings', $postData, 'GET' );
		}
	}

	function zoom_conference() {
		return Zoom_Video_Conferencing_Api::instance();
	}

	zoom_conference();
}
