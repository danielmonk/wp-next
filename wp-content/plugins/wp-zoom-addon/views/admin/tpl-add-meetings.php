<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

//Check if any transient by name is available
$users              = video_conferencing_zoom_get_possible_hosts();
$api_users          = video_conferencing_zoom_api_get_users();
$wordpress_timezone = get_option( 'timezone_string' );
$meeting_info       = array();
$current_user       = wp_get_current_user();
?>
<div class="wrap">
	<h1><?php _e( 'Add a Meeting', 'video-conferencing-with-zoom-api' ); ?></h1>
	<div class="message">
		<?php
		if ( isset( $_GET['zoom_meeting_error'] ) ) {
			self::set_message( 'error', urldecode( $_GET['zoom_meeting_error'] ) );
		} elseif ( get_transient( 'zoom_wp_api_error_logged' ) ) {
			self::set_message( 'notice notice-error is-dismissible', '<strong>ZOOM API ERROR: </strong>' . esc_html( get_transient( 'zoom_wp_api_error_logged' ) ) );
		}

		$message = self::get_message();

		if ( isset( $message ) && ! empty( $message ) ) {
			echo $message;
		}
		?>
		<div class="notice notice-info is-dismissible"><p>As per Zoom meeting <a target="_blank" href="https://marketplace.zoom.us/docs/guides/stay-up-to-date/announcements#meeting-security">security enhancement</a> either a Meeting Password or Enable Waiting Room or Enable Zoom login <strong>is now required</strong> for meetings.</p></div>
	</div>
	<form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="POST" class="zvc-meetings-form">
		<?php wp_nonce_field( '_zoom_add_meeting_nonce_action', '_zoom_add_meeting_nonce' ); ?>
		<table class="form-table">
			<tbody>
			<tr>
				<th scope="row"><label for="meetingTopic"><?php _e( 'Meeting Topic *', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<input type="text" name="meetingTopic" size="100" required class="regular-text">
					<p class="description" id="meetingTopic-description"><?php _e( 'Meeting topic. (Required).', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="meetingAgenda"><?php _e( 'Meeting Agenda', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<input type="text" name="agenda" class="regular-text">
					<p class="description" id="meetingTopic-description"><?php _e( 'Meeting Description.', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="userId"><?php _e( 'Meeting Host *', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select class="zvc-hacking-select" name="userId" required class="zvc-hacking-selectdate">
						<?php
						if ( $users ) :
							foreach ( $users as $user_id => $user ) :
								$selected = '';
								if ( $current_user->user_email == $user['email'] ) {
									$selected = 'selected';
								}
								?>
							<option <?php echo $selected; ?> value="<?php echo esc_attr( $user['host_id'] . '__' . $user_id ); ?>"><?php echo esc_html( $user['display_name'] ); ?></option>
								<?php
							endforeach;
						endif;
						?>
					</select>
					<p class="description" id="userId-description">
						<strong>Missing your Zoom host(s) on the list above? Make sure you have taken these 2 actions.</strong>
					</p>
					<ol>
						<li>Created a WP user with the same email as your Zoom user</li>
						<li>The WP user must have a non subscriber/customer <a target="_blank" href="https://themegrill.com/blog/wordpress-user-roles/">user role</a></li>
					</ol>
				</td>
			</tr>
			<?php do_action( 'zoom_wp_admin_meeting_fields', $meeting_info, array() ); ?>
			<tr>
				<th scope="row"><label for="start_date"><?php _e( 'Start Date/Time *', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<input type="text" name="start_date" required class="datetimepicker regular-text"> <?php _e( 'Setup a <a href="?page=zoom-video-conferencing-extensions">Recurring Meeting</a>? ', 'video-conferencing-with-zoom-api' ); ?>
					<p class="description" id="start_date-description"><?php _e( 'Starting Date and Time of the Meeting (Required).', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="timezone"><?php _e( 'Timezone', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<?php
					$tzlists = zvc_get_timezone_options();
					?>
					<select id="timezone" name="timezone" class="zvc-hacking-select">
						<?php foreach ( $tzlists as $k => $tzlist ) { ?>
							<option <?php echo ( $wordpress_timezone == $tzlist ? ' selected="selected" ' : '' ); ?> value="<?php echo $k; ?>"><?php echo $tzlist; ?></option>
						<?php } ?>
					</select>
					<p class="description" id="timezone-description"><?php _e( 'Meeting Timezone', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="duration"><?php _e( 'Duration', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<input type="number" name="duration" class="regular-text">
					<p class="description" id="duration-description"><?php _e( 'Meeting duration (minutes). (optional)', 'video-conferencing-with-zoom-api' ); ?></p>
					<?php do_action( 'zoom_wp_admin_duration_field' ); ?>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="password"><?php _e( 'Meeting Password', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<input type="text" name="password" class="regular-text" maxlength="10" data-maxlength="9">
					<p class="description" id="email-description"><?php _e( 'Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9]. Max of 10 characters.( Leave blank for no Password )', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="option_meeting_authentication"><?php _e( 'Enable Zoom login', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<p class="description" id="option_meeting_authentication-description"><input type="checkbox" name="option_meeting_authentication" value="1" class="regular-text"><?php _e( 'Restrict users to <a href="https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-meetings-and-webinars" target="_blank">login to their own Zoom account</a> prior to joining the meeting.', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="option_waiting_room"><?php _e( 'Enable Waiting Room', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<p class="description" id="option_waiting_room-description"><input type="checkbox" name="option_waiting_room" value="1" class="regular-text"><?php _e( 'Enables <a href="https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room" target="_blank">waiting rooms</a> for meeting participants.', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="join_before_host"><?php _e( 'Join Before Host', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<p class="description" id="join_before_host-description"><input type="checkbox" name="join_before_host" value="1" class="regular-text"><?php _e( 'Join meeting before host start the meeting. Only for scheduled or recurring meetings.', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="option_host_video"><?php _e( 'Host join start', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<p class="description" id="option_host_video-description"><input type="checkbox" name="option_host_video" value="1" class="regular-text"><?php _e( 'Start video when host join meeting.', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="option_participants_video"><?php _e( 'Start After Participants', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<p class="description" id="option_participants_video-description"><input type="checkbox" name="option_participants_video" value="1" class="regular-text"><?php _e( 'Start video when participants join meeting.', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="option_mute_participants_upon_entry"><?php _e( 'Mute Participants upon entry', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<p class="description" id="option_mute_participants_upon_entry"><input type="checkbox" name="option_mute_participants" value="1" class="regular-text"><?php _e( 'Mutes Participants when entering the meeting.', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="option_enforce_login"><?php _e( 'Enforce Login', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<p class="description" id="option_enforce_login-description"><input type="checkbox" name="option_enforce_login" value="1" class="regular-text"><?php _e( 'Only signed-in WordPress users can join this meeting.', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="option_auto_recording"><?php _e( 'Auto Recording', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select id="option_auto_recording" name="option_auto_recording">
						<option value="none">No Recordings</option>
						<option value="local">Local</option>
						<option value="cloud">Cloud</option>
					</select>
					<p>Hosting the meeting via WEB only allows Cloud recording feature incase you have a Pro or higher level Zoom account.</p>
					<p class="description" id="option_auto_recording_description"><?php _e( 'Make sure <a href="https://support.zoom.us/hc/en-us/articles/202921119-Automatic-Recording" target="_blank">auto recording is turned on</a> in your Zoom account.', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<tr>
				<th scope="row"><label for="settings_alternative_hosts"><?php _e( 'Alternative Hosts', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select name="alternative_host_ids[]" multiple class="zvc-hacking-select">
						<?php
						if ( $api_users ) :
							foreach ( $api_users as $api_user ) :
								?>
							<option value="<?php echo $api_user->id; ?>"><?php echo $api_user->first_name . ' ( ' . $api_user->email . ' )'; ?></option>
								<?php
							endforeach;
						endif;
						?>
					</select>
					<p class="description" id="settings_alternative_hosts"><?php _e( 'Alternative hosts IDs. Multiple value separated by comma.', 'video-conferencing-with-zoom-api' ); ?></p>
					<p class="description" id="settings_alternative_hosts"><strong><?php _e( 'This option is only available for a Licensed level Zoom account user. Check the Prerequisites for this feature <a target="_blank" href="https://support.zoom.us/hc/en-us/articles/208220166-Alternative-host">here</a>', 'video-conferencing-with-zoom-api' ); ?></strong></p>
				</td>
			</tr>
			</tbody>
		</table>
		<p class="submit"><input type="submit" name="create_meeting" class="button button-primary" value="Create Meeting"></p>
		<input type="hidden" name="action" value="zoom_add_meeting">
	</form>
</div>
