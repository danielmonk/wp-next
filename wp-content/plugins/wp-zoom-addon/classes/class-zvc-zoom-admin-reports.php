<?php

/**
 * Class Reports
 *
 * @author  Deepen
 * @since   2.0.0
 */
class Zoom_Video_Conferencing_Reports {

	private static $instance;

	public function __construct() {
		add_action( 'init', array( $this, 'json_to_csv' ) );
	}

	static function getInstance() {
		if ( null === static::$instance ) {
			static::$instance = new static();
		}

		return static::$instance;
	}

	/**
	 * Zoom Rerports View
	 *
	 * @since   1.0.0
	 * @changes in CodeBase
	 * @author  Deepen Bajracharya <dpen.connectify@gmail.com>
	 */
	public static function zoom_reports() {
		wp_enqueue_script( 'video-conferencing-with-zoom-api-js' );
		wp_enqueue_script( 'jquery-ui-datepicker' );

		wp_enqueue_style( 'video-conferencing-with-zoom-api' );
		wp_enqueue_style( 'jquery-ui-datepicker-zvc' );

		$active_tab = isset( $_GET['tab'] ) ? $_GET['tab'] : 'zoom_daily_report';

		//Get Template
		require_once ZOOM_VIDEO_CONFERENCE_PLUGIN_VIEWS_PATH . '/admin/tpl-reports.php';
	}

	/**
	 * Generate daily report
	 *
	 * @author Deepen
	 * @return array|bool|mixed|null|object|string
	 */
	public function get_daily_report_html() {
		$return_result = false;
		$months        = array(
			1  => 'January',
			2  => 'February',
			3  => 'March',
			4  => 'April',
			5  => 'May',
			6  => 'June',
			7  => 'July',
			8  => 'August',
			9  => 'September',
			10 => 'October',
			11 => 'November',
			12 => 'December',
		);
		if ( isset( $_POST['zoom_check_month_year'] ) ) {
			$zoom_monthyear = $_POST['zoom_month_year'];
			if ( $zoom_monthyear == null || $zoom_monthyear == '' ) {
				$return_result = __( 'Date field cannot be Empty !!', 'zoom-video-conference' );
			} else {
				$exploded_data = explode( ' ', $zoom_monthyear );
				foreach ( $months as $key => $month ) {
					if ( $exploded_data[0] == $month ) {
						$month_int = $key;
					}
				}
				$year   = $exploded_data[1];
				$result = zoom_conference()->getDailyReport( $month_int, $year );
				update_option( 'zoom_wp_daily_account_report', $result, false );
				$return_result = json_decode( $result );
			}
		}

		return $return_result;
	}

	/**
	 * Generate Account Report
	 *
	 * @author Deepen
	 * @return array|mixed|null|object|string
	 */
	public function get_account_report_html() {
		$return_result = false;

		if ( isset( $_POST['zoom_account_from'] ) && isset( $_POST['zoom_account_to'] ) ) {
			$zoom_account_from = $_POST['zoom_account_from'];
			$zoom_account_to   = $_POST['zoom_account_to'];
			$host_id           = $_POST['host'];
			if ( $zoom_account_from == null || $zoom_account_to == null ) {
				$return_result = __( 'The fields cannot be Empty !!', 'zoom-video-conference' );
			} else {

				$result = zoom_conference()->newReport( $host_id, $zoom_account_from, $zoom_account_to );
				update_option( 'zoom_wp_detailed_meeting_report', $result, false );
				$return_result = ( isset( json_decode( $result )->meetings ) ? json_decode( $result )->meetings : false );
			}
		}

		return $return_result;
	}

	/**
	 * Generate Detail Meeting Participant Account Report
	 *
	 * @author Deepen
	 * @return array|mixed|null|object|string
	 */
	public function get_meeting_account_report_html() {
		$return_result = false;
		$type          = $_GET['type'];
		if ( ! isset( $_GET['meeting-uuid'] ) ) {
			$return_result = __( 'The meeting id is missing', 'zoom-video-conference' );
		} else {
			if ( 5 == $type || 6 == $type || 9 == $type ) {
				$result = zoom_conference()->webinarParticipantReport( $_GET['meeting-uuid'] );
			} else {
				$result = zoom_conference()->meetingParticipantReport( $_GET['meeting-uuid'] );
			}
			update_option( 'zoom_wp_participant_report', $result, false );
			$return_result = json_decode( $result );

			if ( isset( $return_result->participants ) ) {
				$return_result = $return_result->participants;
			} else {
				$return_result = $return_result->total_records;
			}
		}
		return $return_result;
	}

	public function json_to_csv() {

		if ( ! isset( $_POST['download_report'] ) || ! isset( $_POST['wp_zoom_download_report'] )
			|| ! wp_verify_nonce( $_POST['wp_zoom_download_report'], 'wp_zoom_download_report_verify' ) ) {
			return;
		}

		if ( 'daily_report' == $_POST['download_report_type'] ) {
			$response = json_decode( get_option( 'zoom_wp_daily_account_report' ), true );
			if ( isset( $response['dates'] ) ) {
				$response = $response['dates'];
			}

			$csv_headers = array(
				__( 'Date', 'video-conferencing-with-zoom-api' ),
				__( 'Meetings', 'video-conferencing-with-zoom-api' ),
				__( 'New Users', 'video-conferencing-with-zoom-api' ),
				__( 'Participants', 'video-conferencing-with-zoom-api' ),
				__( 'Meeting Minutes', 'video-conferencing-with-zoom-api' ),
			);
		} elseif ( 'detailed_meeting_report' == $_POST['download_report_type'] ) {
			$response = json_decode( get_option( 'zoom_wp_detailed_meeting_report' ), true );
			if ( isset( $response['meetings'] ) ) {
				$response = $response['meetings'];
			}
			$csv_headers = array(
				__( 'Meeting ID', 'video-conferencing-with-zoom-api' ),
				__( 'Topic', 'video-conferencing-with-zoom-api' ),
				__( 'Host Name', 'video-conferencing-with-zoom-api' ),
				__( 'Start Time', 'video-conferencing-with-zoom-api' ),
				__( 'End Time', 'video-conferencing-with-zoom-api' ),
				__( 'Duration', 'video-conferencing-with-zoom-api' ),
				__( 'Total Meeting Minutes', 'video-conferencing-with-zoom-api' ),
				__( 'Total Participants', 'video-conferencing-with-zoom-api' ),
			);
		} elseif ( 'meeting_participants_report' == $_POST['download_report_type'] ) {
			$response = json_decode( get_option( 'zoom_wp_participant_report' ), true );
			if ( isset( $response['participants'] ) ) {
				$response = $response['participants'];
			}
			$csv_headers = array(
				__( 'Meeting ID', 'video-conferencing-with-zoom-api' ),
				__( 'Topic', 'video-conferencing-with-zoom-api' ),
				__( 'User Name', 'video-conferencing-with-zoom-api' ),
				__( 'Email', 'video-conferencing-with-zoom-api' ),
				__( 'Join Time', 'video-conferencing-with-zoom-api' ),
				__( 'Leave Time', 'video-conferencing-with-zoom-api' ),
				__( 'Duration', 'video-conferencing-with-zoom-api' ),
			);
		}

		if ( ! isset( $response ) || ! $response ) {
			return;
		}
		ignore_user_abort( true );
		@set_time_limit( 0 );
		error_reporting( 0 );
		$file_name = esc_html( $_POST['download_report_type'] ) . '_' . date( 'm/d/Y' ) . '.csv';
		$file_path = sanitize_file_name( ZOOM_VIDEO_CONFERENCE_PLUGIN_LOG_PATH . $file_name );
		$f         = fopen( $file_path, 'w+' );

		fputcsv( $f, $csv_headers );
		foreach ( $response as $records ) {
			if ( isset( $_GET['meeting-id'] ) && 'meeting_participants_report' == $_POST['download_report_type'] ) {
				array_splice( $records, 0, 2, array( esc_html( $_GET['meeting-id'] ), esc_html( $_GET['meeting-topic'] ) ) );
			}
			unset( $records['uuid'] );
			unset( $records['host_id'] );
			unset( $records['type'] );
			if ( 'detailed_meeting_report' == $_POST['download_report_type'] ) {
				unset( $records['user_email'] );
			}
			unset( $records['user_id'] );

			fputcsv( $f, $records );
		}
		fclose( $f );

		if ( file_exists( $file_path ) ) {
			nocache_headers();
			header( 'Content-Type: text/csv' );
			header( 'Content-Disposition: attachment; filename=' . $file_name . '' );
			header( 'Content-Length: ' . filesize( $file_path ) );
			readfile( $file_path );
		}
		die();
	}
}

function zvc_reports() {
	return Zoom_Video_Conferencing_Reports::getInstance();
}

zvc_reports();
