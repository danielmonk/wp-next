<?php if ( ! defined( 'ABSPATH' ) ) {
	exit;}

video_conferencing_zoom_api_show_like_popup();
$users = video_conferencing_zoom_api_get_users();
?>
<div class="wrap">
	<h1><?php _e( 'Reports', 'video-conferencing-with-zoom-api' ); ?></h1>
	
	<h4><?php _e( 'Prerequisites for Reports Section', 'video-conferencing-with-zoom-api' ); ?></h4>
	
	<ol>
		<li><?php _e( 'Pro, Business, Enterprise, Education, or API Account. Check more <a target="_blank" href="https://support.zoom.us/hc/en-us/articles/201363173-Account-Types">here</a>.', 'video-conferencing-with-zoom-api' ); ?></li>
		<li><?php _e( 'Account owner or admin permissions to access Usage Reports for all users.', 'video-conferencing-with-zoom-api' ); ?></li>
		<li><?php _e( 'Account Owner or a user is given the User activities reports <a target="_blank" href="https://support.zoom.us/hc/en-us/articles/115001078646">role</a>.', 'video-conferencing-with-zoom-api' ); ?></li>
	</ol>
		
	<h3 class="nav-tab-wrapper">
		<a href="?page=zoom-video-conferencing-reports&tab=zoom_daily_report" class="nav-tab <?php echo $active_tab == 'zoom_daily_report' ? 'nav-tab-active' : ''; ?>"><?php _e( '1. Overall Report for a month', 'video-conferencing-with-zoom-api' ); ?></a>
		<a href="?page=zoom-video-conferencing-reports&tab=zoom_acount_report" class="nav-tab <?php echo $active_tab == 'zoom_acount_report' ? 'nav-tab-active' : ''; ?>"><?php _e( '2. Detailed Meeting & Participant Report', 'video-conferencing-with-zoom-api' ); ?></a>
	</h3>
		
	<?php if ( $active_tab == 'zoom_daily_report' ) : ?>
		
		<h4>Shows daily report to access the account-wide usage of Zoom services for each day in a given month. It lists the number of new users, meetings, participants, and meeting minutes.</h4>
		<?php
		$result = zvc_reports()->get_daily_report_html();
		if ( isset( $_POST['zoom_check_month_year'] ) && empty( $_POST['zoom_month_year'] ) ) {
			?>
			<div id="message" class="notice notice-error">
				<?php if ( isset( $result->error ) ) { ?>
					<p><?php echo $result->error->message; ?></p>
				<?php } else { ?>
					<p><?php echo $result; ?></p>
				<?php } ?>
			</div>
		<?php } ?>
		<div class="zoom_dateinput_field">
			<form autocomplete="off" action="?page=zoom-video-conferencing-reports" class="zvc_daily_reports_check_form" method="POST">
				<label><?php _e( 'Enter the date to check:', 'video-conferencing-with-zoom-api' ); ?></label>
				<input autocomplete="off" name="zoom_month_year" id="reports_date" class="zoom_account_datepicker"/>
				<input type="submit" name="zoom_check_month_year" class="button button-large" value="Check">
			</form>
		</div>
		<table class="wp-list-table widefat fixed striped posts">
			<thead>
			<tr>
				<th><span><?php _e( 'Date', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Meetings', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'New Users', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Participants', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Meeting Minutes', 'video-conferencing-with-zoom-api' ); ?></span></th>
			</tr>
			</thead>
			<tbody id="the-list">
			<?php
			if ( isset( $result->dates ) ) {
				$count = count( $result->dates );
				zoom_video_conference_report_download_markup( 'daily_report' );
				foreach ( $result->dates as $date ) {
					?>
					<tr>
						<td><?php echo date( 'F j, Y', strtotime( $date->date ) ); ?></td>
						<td><?php echo ( $date->meetings > 0 ) ? '<strong style="color: #4300FF; font-size: 16px;">' . $date->meetings . '</strong>' : '-'; ?></td>
						<td><?php echo ( $date->new_users > 0 ) ? '<strong style="color:#00A1B5; font-size: 16px;">' . $date->new_users . '</strong>' : '-'; ?></td>
						<td><?php echo ( $date->participants > 0 ) ? '<strong style="color:#00AF00; font-size: 16px;">' . $date->participants . '</strong>' : '-'; ?></td>
						<td><?php echo ( $date->meeting_minutes > 0 ) ? '<strong style="color:red; font-size: 16px;">' . $date->meeting_minutes . '</strong>' : '-'; ?></td>
					</tr>
					<?php
				}
			} else {
				?>
				<tr>
					<td colspan="5"><?php _e( 'Select a Date to Check...' ); ?></td>
				</tr>
				<?php
			}
			?>
			</tbody>
		</table>
		<?php
	elseif ( $active_tab == 'zoom_acount_report' ) :
		echo '<h4>Shows your past Zoom meetings for a specified period of time. The time range for the report is limited to a month and the month should fall under the past six months.
		Meetings will only be displayed if it had two or more unique participants.</h4>';

		$meetings = zvc_reports()->get_account_report_html();
		$host_id  = 0;
		if ( isset( $_POST['host'] ) ) {
			$host_id = $_POST['host'];
		}

		if ( isset( $_POST['zoom_check_account_info'] ) ) {
			if ( empty( $_POST['zoom_account_from'] ) || empty( $_POST['zoom_account_to'] ) ) {
				?>
				<div id="message" class="notice notice-error">
					<?php if ( isset( $result->error ) ) { ?>
						<p><?php echo $result->error->message; ?></p>
					<?php } else { ?>
						<p><?php echo $result; ?></p>
					<?php } ?>
				</div>
			<?php } else { ?>
				<div id="message" class="notice notice-success">
					<ul class="zoom_acount_lists">
						<li><?php _e( 'Report Generated', 'video-conferencing-with-zoom-api' ); ?> </li>
					</ul>
				</div>
				<?php
			}
		}
		?>
		<div class="zoom_dateinput_field">
			<p><?php _e( 'Get past meetings report for a specified period.', 'video-conferencing-with-zoom-api' ); ?> <a onclick="window.print();" href="javascript:void(0);"><?php _e( 'Print', 'video-conferencing-with-zoom-api' ); ?></a></p>
			<form action="?page=zoom-video-conferencing-reports&tab=zoom_acount_report" class="zvc_accounts_reports_check_form" method="POST">
				<label><?php _e( 'From', 'video-conferencing-with-zoom-api' ); ?></label>
				<input autocomplete="off" name="zoom_account_from" class="zoom_account_datepicker"/>
				<label><?php _e( 'To', 'video-conferencing-with-zoom-api' ); ?></label>
				<input autocomplete="off" name="zoom_account_to" class="zoom_account_datepicker"/>
				<label><?php _e( 'Host', 'video-conferencing-with-zoom-api' ); ?></label>
				<select name="host">
					<?php foreach ( $users as $user ) { ?>
						<option value="<?php echo $user->id; ?>" <?php echo ( $host_id == $user->id ? ' selected="selected"' : false ); ?>><?php echo $user->first_name . ' ( ' . $user->email . ' )'; ?></option>
					<?php } ?>
				</select>
				<input type="submit" name="zoom_check_account_info" class="button button-large" value="Check">
			</form>
		</div>
		<table class="wp-list-table widefat fixed striped posts">
			<thead>
			<tr>
				<th><span><?php _e( 'Meeting ID', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Host Name', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Topic', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Total Participants', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Total Minutes', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Duration', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Start Time', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'End Time', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Participants Report', 'video-conferencing-with-zoom-api' ); ?></span></th>
			</tr>
			</thead>
			<tbody id="the-list">
				<?php
				if ( isset( $_POST['zoom_check_account_info'] ) && $meetings ) {
					zoom_video_conference_report_download_markup( 'detailed_meeting_report' );

					foreach ( $meetings as $meeting ) {
						?>
					<tr>
					<td><a title="<?php _e( 'Participants Report', 'video-conferencing-with-zoom-api' ); ?>" target="_blank" href="?page=zoom-video-conferencing-reports&tab=meeting_users&type=<?php echo intval( $meeting->type ); ?>&meeting-topic=<?php echo rawurlencode( esc_attr( $meeting->topic ) ); ?>&meeting-id=<?php echo (float) $meeting->id; ?>&meeting-uuid=<?php echo rawurlencode( $meeting->uuid ); ?>"><?php echo (float) $meeting->id; ?></a></td>
					<td><?php echo $meeting->user_name; ?></td>
					<td><?php echo $meeting->topic; ?></td>
					<td><?php echo $meeting->participants_count; ?></td>
					<td><?php echo $meeting->total_minutes; ?></td>
					<td><?php echo $meeting->duration; ?></td>
					<td><?php echo date( 'Y-m-d H:i:s T', strtotime( $meeting->start_time ) ); ?></td>
					<td><?php echo date( 'Y-m-d H:i:s T', strtotime( $meeting->end_time ) ); ?></td>
					<td><a target="_blank" href="?page=zoom-video-conferencing-reports&tab=meeting_users&type=<?php echo intval( $meeting->type ); ?>&meeting-topic=<?php echo rawurlencode( esc_attr( $meeting->topic ) ); ?>&meeting-id=<?php echo (float) $meeting->id; ?>&meeting-uuid=<?php echo rawurlencode( $meeting->uuid ); ?>"><button class="button button-primary button-large"><?php _e( 'View Report', 'video-conferencing-with-zoom-api' ); ?></button></td>
					</tr>
						<?php
					}
				} else {
					echo '<tr><td>' . __( 'Select Date to Check... ', 'video-conferencing-with-zoom-api' ) . '</td></tr>';
				}
				?>
			</tbody>
		</table>
		<?php
	elseif ( $active_tab == 'meeting_users' ) :
		$participants = zvc_reports()->get_meeting_account_report_html();
		?>
		<h3><?php _e( 'Meeting Participants Report', 'video-conferencing-with-zoom-api' ); ?></h3>
		<h4><?php _e( 'Zoom does not display user email for a meeting joined via the Web from the plugin. It will show up only if the user joins in through the Zoom App or the Zoom Web client while logged into their Zoom account', 'video-conferencing-with-zoom-api' ); ?>, <a target="_blank" href="https://devforum.zoom.us/t/blank-email-in-report-meetings-meetingid-participants/4977/23"><?php _e( 'More info', 'video-conferencing-with-zoom-api' ); ?></a></h4>
		<table class="wp-list-table widefat fixed striped posts">
			<thead>
			<tr>
				<th><span><?php _e( 'Meeting ID', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Topic', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'User Name', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Email', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Join Time', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Leave Time', 'video-conferencing-with-zoom-api' ); ?></span></th>
				<th><span><?php _e( 'Duration (mins)', 'video-conferencing-with-zoom-api' ); ?></span></th>
			</tr>
			</thead>
			<tbody id="the-list">
				<?php
				if ( ! $participants ) {
					echo '<tr><td>' . __( 'No record for this meeting instance', 'video-conferencing-with-zoom-api' ) . '</td></tr>';
				} else {
					zoom_video_conference_report_download_markup( 'meeting_participants_report' );
					foreach ( $participants as $participant ) {
						?>
					<tr>
					<td><?php esc_html_e( $_GET['meeting-id'] ); ?></td>
					<td><?php esc_html_e( urldecode( $_GET['meeting-topic'] ) ); ?></td>
					<td><?php echo $participant->name; ?></td>
					<td><?php echo $participant->user_email; ?></td>
					<td><?php echo date( 'Y-m-d H:i:s T', strtotime( $participant->join_time ) ); ?></td>
					<td><?php echo date( 'Y-m-d H:i:s T', strtotime( $participant->leave_time ) ); ?></td>
					<td><?php echo round( $participant->duration / 60, 2 ); ?></td>
					</tr>
						<?php
					}
				}
				?>
			</tbody>
		</table>
	<?php endif; ?>
</div>
<?php
function zoom_video_conference_report_download_markup( $report_type ) {
	?>
	<form method="POST">
		<input type="hidden" name="download_report_type" value='<?php echo esc_attr( $report_type ); ?>'/>
		<button name="download_report" class="button button-large report-download-btn" value="download_report">Export as CSV</button>
		<?php wp_nonce_field( 'wp_zoom_download_report_verify', 'wp_zoom_download_report' ); ?>
	</form>
	<?php
}
