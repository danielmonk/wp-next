<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
//Check if any transient by name is available
$users        = video_conferencing_zoom_get_possible_hosts( $bypass_filter = true );
$api_users    = video_conferencing_zoom_api_get_users( $bypass_filter = true );
$meeting_info = json_decode( zoom_conference()->getMeetingInfo( (float) $_GET['edit'] ) );

if ( ! $_GET['edit'] && isset( $_GET['zoom_meeting_added'] ) && ! $_GET['zoom_meeting_added'] ) {
	echo '<h3>Ops! Unable to create the Meeting using Zoom API, please try creating the meeting again.</h3>';
	return;
}

if ( ! $meeting_info || ! isset( $meeting_info->id ) ) {
	echo '<h3>Ops! Unable to get the details for Meeting ' . esc_attr( $_GET['edit'] ) . ' from Zoom API, please refresh the page again.</h3>';
	return;
}

if ( ! $meeting_info || ! isset( $meeting_info->id ) ) {
	echo '<h3>Ops! Unable to get the details for Meeting ' . esc_attr( $_GET['edit'] ) . ' from Zoom API, please refresh the page again.</h3>';
	return;
}

if ( ! apply_filters( 'zoom_ir_allow_edit_delete', 1 ) ) {
	wp_safe_redirect( admin_url() . 'admin.php?page=zoom-video-conferencing' );
	exit;
}

$option_jbh                    = ! empty( $meeting_info->settings->join_before_host ) && $meeting_info->settings->join_before_host ? 'checked' : false;
$option_host_video             = ! empty( $meeting_info->settings->host_video ) && $meeting_info->settings->host_video ? 'checked' : false;
$option_participants_video     = ! empty( $meeting_info->settings->participant_video ) && $meeting_info->settings->participant_video ? 'checked' : false;
$option_mute_participants      = ! empty( $meeting_info->settings->mute_upon_entry ) && $meeting_info->settings->mute_upon_entry ? 'checked' : false;
$option_meeting_authentication = ! empty( $meeting_info->settings->meeting_authentication ) && $meeting_info->settings->meeting_authentication ? 'checked' : false;
$option_waiting_room           = ! empty( $meeting_info->settings->waiting_room ) && $meeting_info->settings->waiting_room ? 'checked' : false;

$zoom_map_array = get_post_meta( $meeting_info->id, 'zoom_api_meeting_options', true );
if ( ! $zoom_map_array ) {
	$zoom_map_array = array();
}
$option_enforce_login     = isset( $zoom_map_array['enforce_login'] ) ? 'checked' : false;
$option_alternative_hosts = $meeting_info->settings->alternative_hosts ? $meeting_info->settings->alternative_hosts : array();
if ( ! empty( $option_alternative_hosts ) ) {
	$option_alternative_hosts = explode( ', ', $option_alternative_hosts );
}
$wp_user_meeting_host = null;
foreach ( $users as $user_id => $user ) :
	// Check if host is based on WP user ID
	if ( get_user_meta( $user_id, 'zoom_meeting_id_' . esc_attr( $meeting_info->id ), true ) ) {
		$wp_user_meeting_host = $user_id;
	}
endforeach;
?>
<div class="wrap">
	<h1><?php _e( 'Edit a Meeting', 'video-conferencing-with-zoom-api' ); ?></h1> <a href="?page=zoom-video-conferencing&host_id=<?php echo $meeting_info->host_id; ?>"><?php _e( 'Back to List', 'video-conferencing-with-zoom-api' ); ?></a>
	<?php if ( $meeting_info->id ) : ?>
		<div style="display:block;" class='notice notice-success is-dismissible'>
		<h3><?php _e( 'Great! Now, add the below shortcode on any of your WordPress page/post to show the Zoom meeting window' ); ?></h3>
		<?php
			echo '<span id="zoom-wp-shortcode">[zoom_api_link meeting_id="' . esc_attr( $meeting_info->id ) . '"]</span>  <span onclick="CopyToClipboard(\'zoom-wp-shortcode\')" style="cursor:pointer;" class="dashicons dashicons-clipboard"></span>';
		$tip_text = '<ul>';
		if ( current_user_can( 'manage_options' ) ) {
			$tip_text .= '<li>-> View <a target="_blank" href="?page=zoom-video-conferencing-settings#shortcode">settings page</a> to see additional shortcode parameters.</li>';
		}
		echo $tip_text .= '<li>-> Learn how to easily embed Zoom meetings in this <a target="_blank" href="https://elearningevolve.com/blog/embed-zoom-meeting/">blog post</a>.</li>
			</ul>';
		?>
	</div>
		
	<?php endif; ?>
	<div class="message">
		<?php
		if ( isset( $_GET['zoom_meeting_added'] ) ) {
			self::set_message( 'notice notice-success is-dismissible', __( 'Meeting Added To Zoom Successfully!', 'video-conferencing-with-zoom-api' ) );
		}

		// It's a PMI meeting show error
		if ( isset( $meeting_info->settings->use_pmi ) && $meeting_info->settings->use_pmi ) {
			self::set_message( 'notice notice-error is-dismissible', '<strong>Error:</strong> Please turn off the PMI option and create a new meeting as this option converts your scheduled meeting to PMI and you only embed the PMI meeting ID on frontend with this setting.<br /> a) Either "Use (PMI) when scheduling a meeting" is enabled in your <a target="_blank" href="https://zoom.us/profile/setting">Zoom account settings</a> under Settings -> Meeting -> Schedule Meeting<br />  b) OR you have enabled PMI instead of Generate Automatically in your Zoom account under <a target="_blank" href="https://zoom.us/meeting/' . (float) $meeting_info->id . '/edit">Meetings -> Edit -> Meeting ID</a>.' );
		}

		// It's a registered meeting show error
		if ( isset( $meeting_info->settings->approval_type ) && 2 != $meeting_info->settings->approval_type ) {
			self::set_message( 'notice notice-error is-dismissible', '<strong>Error:</strong> The Zoom Web SDK does not support Join via web for <a target="_blank" href="https://devforum.zoom.us/t/registration-meeting-is-not-acceptable-by-web/7406/2">Registered Zoom Meetings</a> at the moment. You can only use Join via App for this type of meetings.' );
		}

		if ( get_transient( 'zoom_wp_api_error_logged' ) ) {
			self::set_message( 'notice notice-error is-dismissible', '<strong>ZOOM API ERROR: </strong>' . esc_html( get_transient( 'zoom_wp_api_error_logged' ) ) );
		}

		$message = self::get_message();
		if ( isset( $message ) && ! empty( $message ) ) {
			echo $message;
		}
		?>
		<div class="notice notice-info is-dismissible"><p>As per Zoom meeting <a target="_blank" href="https://marketplace.zoom.us/docs/guides/stay-up-to-date/announcements#meeting-security">security enhancement</a> either a Meeting Password or Enable Waiting Room or Enable Zoom login <strong>is now required</strong> for meetings.</p></div>
	</div>
		
	<form action="?page=zoom-video-conferencing-add-meeting&edit=<?php echo esc_attr( $_GET['edit'] ); ?>&host_id=<?php echo esc_attr( $_GET['host_id'] ); ?>" method="POST" class="zvc-meetings-form">
		<?php wp_nonce_field( '_zoom_update_meeting_nonce_action', '_zoom_update_meeting_nonce' ); ?>
		<input type="hidden" name="meeting_id" value="<?php echo $meeting_info->id; ?>">
		<input type="hidden" name="meeting_type" value="<?php echo (float) $meeting_info->type; ?>"/>
		<input type="hidden" name="host_id" value="<?php echo esc_attr( $meeting_info->host_id ); ?>"/>
		<table class="form-table">
			<tbody>
			<tr>
				<th scope="row"><label for="meetingTopic"><?php _e( 'Meeting Topic *', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<input 
					<?php
					if ( 4 == $meeting_info->type ) :
						echo 'disabled';
					endif;
					?>
					 type="text" name="meetingTopic" size="100" class="regular-text" required value="<?php echo ! empty( $meeting_info->topic ) ? $meeting_info->topic : null; ?>">
					<p class="description" id="meetingTopic-description"><?php _e( 'Meeting topic. (Required).', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<?php if ( 4 != $meeting_info->type ) : ?>
			<tr>
				<th scope="row"><label for="meetingAgenda"><?php _e( 'Meeting Agenda', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<input type="text" name="agenda" class="regular-text" value="<?php echo ! empty( $meeting_info->agenda ) ? $meeting_info->agenda : null; ?>">
					<p class="description" id="meetingTopic-description"><?php _e( 'Meeting Description.', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<?php endif; ?>
			<tr>
				<th scope="row"><label for="userId"><?php _e( 'Meeting Host *', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select name="userId" required class="zvc-hacking-selectdate" disabled>
						<?php
						foreach ( $users as $user_id => $user ) :
							$selected = null;

							if ( ! $wp_user_meeting_host ) {
								foreach ( $api_users as $api_user ) :
									if ( $api_user->email == $user['email'] && $api_user->id == $meeting_info->host_id ) {
										$selected = 'selected';
										break;
									}
								endforeach;
							} elseif ( $user_id == $wp_user_meeting_host ) {
								$selected = 'selected';
							}
							?>
							<option value="<?php echo esc_attr( $user['host_id'] . '__' . $user_id ); ?>" <?php echo $selected; ?>><?php echo esc_html( $user['display_name'] ); ?></option>
						<?php endforeach; ?>
					</select>
					<p class="description" id="userId-description"><?php _e( 'Cannot Update Host for an Existing Meeting.', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<?php if ( 4 != $meeting_info->type ) : ?>
				<?php do_action( 'zoom_wp_admin_meeting_fields', $meeting_info, $zoom_map_array ); ?>
				<tr>
					<th scope="row"><label for="start_date"><?php _e( 'Start Date/Time *', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<?php
						$timezone     = ! empty( $meeting_info->timezone ) ? $meeting_info->timezone : 'UTC';
						$tz           = new DateTimeZone( $timezone );
						$meeting_info = apply_filters( 'zoom_wp_admin_meeting_start_time', $meeting_info );

						if ( isset( $meeting_info->start_time ) ) {
							$start_time = new DateTime( $meeting_info->start_time );
							$start_time->setTimezone( $tz );
						}
						?>
						<input type="text" name="start_date" data-existingdate="<?php echo ( isset( $start_time ) ? $start_time->format( 'Y-m-d H:i:s' ) : '' ); ?>" required class="datetimepicker regular-text">
						<?php
						if ( ! defined( 'ZOOM_WP_RM_ITEM_ID' ) ) :
							_e( 'Setup a <a href="?page=zoom-video-conferencing-extensions">Recurring Meeting</a>? ', 'video-conferencing-with-zoom-api' );
						endif;
						?>
						<p class="description" id="start_date-description"><?php _e( 'Starting Date and Time of the Meeting (Required).', 'video-conferencing-with-zoom-api' ); ?></p>
						<?php do_action( 'zoom_wp_admin_after_date_field', $meeting_info ); ?>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="timezone"><?php _e( 'Timezone', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<?php $tzlists = zvc_get_timezone_options(); ?>
						<select id="timezone" name="timezone" class="zvc-hacking-select">
							<?php foreach ( $tzlists as $k => $tzlist ) { ?>
								<option value="<?php echo $k; ?>" <?php echo $meeting_info->timezone == $k ? 'selected' : null; ?>><?php echo $tzlist; ?></option>
							<?php } ?>
						</select>
						<p class="description" id="timezone-description"><?php _e( 'Meeting Timezone', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="duration"><?php _e( 'Duration', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<input type="number" name="duration" class="regular-text" value="<?php echo ( isset( $meeting_info->duration ) ? $meeting_info->duration : null ); ?>">
						<p class="description" id="duration-description"><?php _e( 'Meeting duration (minutes). (optional)', 'video-conferencing-with-zoom-api' ); ?></p>
						<?php do_action( 'zoom_wp_admin_duration_field' ); ?>
					</td>
				</tr>
			<?php endif; ?>
			<tr>
				<th scope="row"><label for="password"><?php _e( 'Meeting Password', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<input type="text" name="password" class="regular-text" maxlength="10" data-maxlength="9" value="<?php echo ! empty( $meeting_info->password ) ? $meeting_info->password : false; ?>">
					<p class="description" id="email-description"><?php _e( 'Password to join the meeting. Password may only contain the following characters: [a-z A-Z 0-9]. Max of 10 characters.( Leave blank for no Password )', 'video-conferencing-with-zoom-api' ); ?></p>
				</td>
			</tr>
			<?php if ( 4 != $meeting_info->type ) : ?>
				<tr>
					<th scope="row"><label for="option_meeting_authentication"><?php _e( 'Enable Zoom login', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<p class="description" id="option_meeting_authentication-description"><input type="checkbox" <?php echo $option_meeting_authentication; ?> name="option_meeting_authentication" value="1" class="regular-text"><?php _e( 'Restrict users to <a href="https://support.zoom.us/hc/en-us/articles/360037117472-Authentication-Profiles-for-meetings-and-webinars" target="_blank">login to their own Zoom account</a> prior to joining the meeting.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="option_waiting_room"><?php _e( 'Enable Waiting Room', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<p class="description" id="option_waiting_room-description"><input type="checkbox" <?php echo $option_waiting_room; ?> name="option_waiting_room" value="1" class="regular-text"><?php _e( 'Enables <a href="https://support.zoom.us/hc/en-us/articles/115000332726-Waiting-Room" target="_blank">waiting rooms</a> for meeting participants.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="join_before_host"><?php _e( 'Join Before Host', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<p class="description" id="join_before_host-description"><input type="checkbox" <?php echo $option_jbh; ?> name="join_before_host" value="1" class="regular-text"><?php _e( 'Join meeting before host start the meeting. Only for scheduled or recurring meetings.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="option_host_video"><?php _e( 'Host join start', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<p class="description" id="option_host_video-description"><input type="checkbox" <?php echo $option_host_video; ?> name="option_host_video" value="1" class="regular-text"><?php _e( 'Start video when host join meeting.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="option_participants_video"><?php _e( 'Start After Participants', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<p class="description" id="option_participants_video-description"><input type="checkbox" <?php echo $option_participants_video; ?> name="option_participants_video" value="1" class="regular-text"><?php _e( 'Start video when participants join meeting.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="option_mute_participants_upon_entry"><?php _e( 'Mute Participants upon entry', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<p class="description" id="option_mute_participants_upon_entry"><input type="checkbox" <?php echo $option_mute_participants; ?> value="1" name="option_mute_participants" class="regular-text"><?php _e( 'Mutes Participants when entering the meeting.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="option_enforce_login"><?php _e( 'Enforce Login', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<p class="description" id="option_enforce_login"><input type="checkbox" <?php echo $option_enforce_login; ?> name="option_enforce_login" value="1" class="regular-text"><?php _e( 'Only signed-in WordPress users can join this meeting.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr>
					<th scope="row"><label for="option_auto_recording"><?php _e( 'Auto Recording', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<select id="option_auto_recording" name="option_auto_recording">
							<option value="none" <?php echo ! empty( $meeting_info->settings->auto_recording ) && $meeting_info->settings->auto_recording == 'none' ? 'selected' : false; ?>>No Recordings</option>
							<option value="local" <?php echo ! empty( $meeting_info->settings->auto_recording ) && $meeting_info->settings->auto_recording == 'local' ? 'selected' : false; ?>>Local</option>
							<option value="cloud" <?php echo ! empty( $meeting_info->settings->auto_recording ) && $meeting_info->settings->auto_recording == 'cloud' ? 'selected' : false; ?>>Cloud</option>
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
							foreach ( $api_users as $api_user ) :
								$user_found = false;
								if ( in_array( $api_user->email, $option_alternative_hosts ) ) {
									$user_found = true;
								}
								?>
								<option value="<?php echo $api_user->id; ?>" <?php echo $user_found ? 'selected' : null; ?>><?php echo $api_user->first_name . ' ( ' . $api_user->email . ' )'; ?></option>
							<?php endforeach; ?>
						</select>
						<p class="description" id="settings_alternative_hosts"><?php _e( 'Alternative hosts IDs. Multiple value separated by comma.', 'video-conferencing-with-zoom-api' ); ?></p>
						<p class="description" id="settings_alternative_hosts"><strong><?php _e( 'This option is only available for a Licensed level Zoom account user. Check the Prerequisites for this feature <a target="_blank" href="https://support.zoom.us/hc/en-us/articles/208220166-Alternative-host">here</a>', 'video-conferencing-with-zoom-api' ); ?></strong></p>
					</td>
				</tr>
			<?php endif; ?>
			</tbody>
		</table>
		<?php do_action( 'zoom_wp_admin_meeting_fields_before_form_end', $meeting_info ); ?>
		<?php if ( 4 == $meeting_info->type ) : ?>
			<p><i>Note: Set other options for the PMI Meeting from your Zoom account by clicking the below button</i></p>
			<a target="_blank" href="https://zoom.us/meeting/<?php echo (float) $meeting_info->id; ?>/edit" class="button button-primary">Edit PMI Meeting Options</a>
		<?php endif; ?>
		<p class="submit"><input type="submit" name="update_meeting" class="button button-primary" value="Update Meeting"></p>
	</form>
</div>
