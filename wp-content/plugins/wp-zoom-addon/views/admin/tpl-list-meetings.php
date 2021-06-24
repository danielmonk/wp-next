<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
video_conferencing_zoom_api_show_like_popup();

//Check if Zoom users stored in WP
$users = video_conferencing_zoom_api_get_users();
if ( ! isset( $_GET['host_id'] ) ) {
	if ( ! $users ) {
		?>
		<div class="error error-warning is-dismissible">
			<p>
				<?php
					_e( 'No Zoom user available to show Zoom Meetings', 'video-conferencing-with-zoom-api' );
				?>
			</p>
		</div>
		<?php
		return;
	}

	$host_id = $users[0]->id;
} else {
	$host_id = $_GET['host_id'];
}

$meetings = video_conferencing_zoom_api_get_meeting_list( $host_id );
?>


<div id="zvc-cover" style="display: none;"></div>
<div class="wrap">
	<h2><?php _e( 'Meetings', 'video-conferencing-with-zoom-api' ); ?></h2>
	<!--For Errors while deleteing this user-->
	<?php if ( ! empty( $error ) ) { ?>
		<div id="message" class="notice notice-error"><p><?php echo $error; ?></p></div>
		<?php
	} else {
		?>
		<div id="message" style="display:none;" class="notice notice-error show_on_meeting_delete_error"></div>
		<div class="message">
			<?php
			if ( get_transient( 'zoom_wp_api_error_logged' ) ) {
				self::set_message( 'notice notice-error is-dismissible', '<strong>ZOOM API ERROR: </strong>' . esc_html( get_transient( 'zoom_wp_api_error_logged' ) ) );
			}

			$message = self::get_message();
			if ( isset( $message ) && ! empty( $message ) ) {
				echo $message;
			}
			?>
		</div>
		<div class="select_zvc_user_listings_wrapp">
			<div class="alignleft actions bulkactions">
				<?php if ( apply_filters( 'zoom_ir_allow_edit_delete', 1 ) ) : ?>
					<label for="bulk-action-selector-top" class="screen-reader-text"><?php _e( 'Select bulk action', 'video-conferencing-with-zoom-api' ); ?></label>
					<select name="action" id="bulk-action-selector-top">
						<option value="trash"><?php _e( 'Move to Trash', 'video-conferencing-with-zoom-api' ); ?></option>
					</select>
					<input type="submit" id="bulk_delete_meeting_listings" data-hostid="<?php echo esc_attr( $host_id ); ?>" class="button action" value="Apply">
				<?php endif; ?>
				<?php if ( isset( $host_id ) ) { ?>
					<a href="?page=zoom-video-conferencing-add-meeting&host_id=<?php echo esc_attr( $host_id ); ?>" class="button action" title="Add new meeting">Add New Meeting</a>
				<?php } ?>
				<form method="post" style="display:inline;">
					<input type="hidden" name="host_id" value="<?php echo esc_attr( $host_id ); ?>"/>
					<?php wp_nonce_field( 'sync_zoom_meeting_nonce_verify', 'sync_zoom_meeting_nonce' ); ?>
					<input type="submit" name="sync_zoom_meetings" title="Sync Zoom Meetings/Webinars Options and Cloud Recordings with Zoom API" class="button action" value="<?php _e( 'Sync Meetings & Webinars', 'video-conferencing-with-zoom-api' ); ?>">
				</form>
			</div>
			<div class="alignright">
				<label><?php _e( 'Select Host', 'video-conferencing-with-zoom-api' ); ?></label>
				<select onchange="location = this.value;" class="zvc-hacking-select">
					<?php
					if ( $users ) {
						foreach ( $users as $user ) {
							?>
						<option value="?page=zoom-video-conferencing&host_id=<?php echo $user->id; ?>" <?php echo $host_id == $user->id ? 'selected' : false; ?>><?php echo $user->first_name . ' ( ' . $user->email . ' )'; ?></option>
							<?php
						}
					}
					?>
				</select>
			</div>
			<div class="clear"></div>
		</div>
		<p><?php _e( 'Note: Zoom does not allow a SINGLE HOST to conduct multiple concurrent meetings, before joining the meeting as a host make sure there is no other active meeting.', 'video-conferencing-with-zoom-api' ); ?></p>
		<div class="zvc_listing_table">
			<table id="zvc_meetings_list_table" class="display" width="100%">
				<thead>
				<tr>
					<th class="zvc-text-center"><input type="checkbox" id="checkall"/></th>
					<th><?php _e( 'Meeting ID', 'video-conferencing-with-zoom-api' ); ?></th>
					<th><?php _e( 'Topic', 'video-conferencing-with-zoom-api' ); ?></th>
					<th><?php _e( 'Start Time', 'video-conferencing-with-zoom-api' ); ?></th>
					<th><?php _e( 'Status/End', 'video-conferencing-with-zoom-api' ); ?></th>
					<th><?php _e( 'Join Meeting', 'video-conferencing-with-zoom-api' ); ?></th>
					<!-- <th><?php _e( 'Created', 'video-conferencing-with-zoom-api' ); ?></th> -->
				</tr>
				</thead>
				<tbody>
				<?php
				if ( ! empty( $meetings ) ) {
					foreach ( $meetings as $meeting ) {
						?>
						<input type="hidden" name="host_ids" value="<?php echo esc_attr( $meeting->host_id ); ?>"/>
						<tr>
							<td class="zvc-text-center"><input type="checkbox" name="meetings_id[]" class="checkthis" value="<?php echo $meeting->id; ?>"/></td>
							<td><span><?php echo $meeting->id; ?></span></td>
							<td>
								<!-- Do not show edit delete option to Wismlabs Ins if settings disabled -->
								<?php if ( apply_filters( 'zoom_ir_allow_edit_delete', 1 ) ) : ?>
									<a href="admin.php?page=zoom-video-conferencing-add-meeting&edit=<?php echo $meeting->id; ?>&host_id=<?php echo $meeting->host_id; ?>"><?php echo $meeting->topic; ?></a>
									<?php if ( 4 != $meeting->type ) : ?>
										<div class="row-actions">
											<div class="trash"><a href="javascript:void(0);" data-meetingid="<?php echo $meeting->id; ?>"  data-hostid="<?php echo $meeting->host_id; ?>" class="submitdelete delete-meeting"><?php _e( 'Trash', 'video-conferencing-with-zoom-api' ); ?></a></div>
										</div>
									<?php endif; ?>
								<?php else : ?>
									<?php echo $meeting->topic; ?>
								<?php endif; ?>
							</td>
							<td>
							<?php
							if ( 8 == $meeting->type && isset( $meeting->occurrences ) && ! $meeting->occurrences ) {
								echo '<p style="color:red;">' . __( 'No occurrence found for this recurring meeting', 'video-conferencing-with-zoom-api' ) . '</p>';
							} elseif ( isset( $meeting->start_time ) ) {
								echo video_conferencing_zoom_convert_time_to_local_readable( $meeting->start_time, $meeting->timezone );
							} elseif ( 1 == $meeting->type || 3 == $meeting->type ) {
								echo _e( 'No Fixed Time', 'video-conferencing-with-zoom-api' );
							}
							?>
							</td>
							<td>
							<?php
							$zoom_map_array = get_post_meta( $meeting->id, 'zoom_api_meeting_options', true );

							if ( isset( $zoom_map_array['started'] ) ) {
								echo '<img name="end_meeting" data-meeting-id="' . $meeting->id . '" class="started" src="' . ZOOM_VIDEO_CONFERENCE_PLUGIN_ADMIN_IMAGES_PATH . '/3.png" style="width:14px;cursor:pointer;" title="' . __( 'End Meeting', 'video-conferencing-with-zoom-api' ) . '" alt="Live">';
							} else {

								echo '<img class="ended" src="' . ZOOM_VIDEO_CONFERENCE_PLUGIN_ADMIN_IMAGES_PATH . '/2.png" style="width:14px;cursor:pointer;" title="Not Started" alt="Not Started">';

							}
							?>
							</td>
							<td>
							<form method="post">
							<?php
							echo "<input name='meeting_id' type='hidden' value='$meeting->id'/>";

							$type         = 'zoom_api_meeting_options';
							$user         = get_userdata( get_current_user_id() );
							$zoom_api_key = esc_html( get_option( 'zoom_api_key' ) );
							$display_name = trim( apply_filters( 'video_conferencing_zoom_attendee_name_display', ( isset( $user->display_name ) ? $user->display_name : ( $user->first_name ? $user->first_name . ' ' . $user->last_name : $user->display_name ) ) ) );
							$user_email   = trim( apply_filters( 'video_conferencing_zoom_attendee_email_display', $user->user_email ) );
							$signature    = video_conferencing_zoom_generate_signature( $meeting->id, 1, $zoom_api_key );
							$zvc_security = wp_create_nonce( '_nonce_zvc_security' );

							// If password not in WP DB then fetch from API and set in cache
							if ( 1 != get_option( 'zoom_join_via_web_disable' ) ) {
								if ( isset( $zoom_map_array['password'] ) ) {
									$pwd = $zoom_map_array['password'];
								} elseif ( isset( $meeting->password ) ) {
									$pwd = $meeting->password;
								} else {
									$meeting_api = new stdClass();
									$meeting_api = json_decode( zoom_conference()->getMeetingInfo( $meeting->id ) );
									if ( isset( $meeting_api->password ) ) {
										$pwd = $meeting_api->password;
										video_conferencing_zoom_set_wp_cache( $meeting_api, $type, $zoom_map_array );
									}
								}

								$zoom_host_url = apply_filters(
									'zoom_wp_join_url_host',
									esc_url(
										add_query_arg(
											array(
												'zoom_wp_action' => 'render_zoom_meeting',
												'name'   => urlencode( $display_name ),
												'email'  => urlencode( $user_email ),
												'mn'     => $meeting->id,
												'pwd'    => ( isset( $pwd ) && $pwd ? $pwd : '' ),
												'signature' => $signature,
												'apiKey' => $zoom_api_key,
												'zvc_security' => $zvc_security,
												'lang'   => esc_html( video_conferencing_zoom_get_wp_locale_for_sdk() ),
											),
											get_permalink()
										)
									)
								);
								echo '<button type="button" id="start-meeting-btn-' . $meeting->id . '" class="meeting-button button button-primary" onclick="event.preventDefault(); window.open(\'' . esc_url( $zoom_host_url ) . '\', \'_blank\');">' . __( 'Join via Web', 'video-conferencing-with-zoom-api' ) . '</button>';

							}

							// Show Join Via App Button
							if ( 1 != get_option( 'zoom_help_text_disable' ) ) {
								if ( isset( $zoom_map_array['join_url'] ) ) {
									$app_link = $zoom_map_array['join_url'];
								} elseif ( isset( $meeting->join_url ) ) {
									$app_link = $meeting->join_url;
								}
								if ( isset( $app_link ) && $app_link ) {

									// If the logged in user registered meeting join url set
									$registrant_url = get_user_meta( $user->ID, 'zoom_registrant_url_' . $meeting->id, true );
									if ( $registrant_url ) {
										$app_link = $registrant_url;
									}

									echo '<button type="button" onclick="event.preventDefault(); window.open(\'' . esc_url( $app_link ) . '\', \'_blank\');" class="meeting-button button button-primary">' . __( 'Join via App', 'video-conferencing-with-zoom-api' ) . '</button>';
								}
							}
							?>
							</form>
						</td>
						<!-- <td>
						<?php
							echo video_conferencing_zoom_convert_time_to_local_readable( $meeting->created_at, $meeting->timezone );
						?>
						</td> -->
						</tr>
						<?php
					}
				}
				?>
				</tbody>
			</table>
		</div>
	<?php } ?>
</div>
