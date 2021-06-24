<?php if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$bypass_cache = false;
if ( isset( $_GET['flush'] ) ) {
	$bypass_cache = true;
}

$api_users = video_conferencing_zoom_api_get_users( false, $bypass_cache );
?>
<div class="wrap">
	<h1><?php _e( 'Map Zoom Hosts', 'video-conferencing-with-zoom-api' ); ?></h1>
	<p><strong><?php _e( 'Description:', 'video-conferencing-with-zoom-api' ); ?></strong> <?php _e( 'Here you can map Zoom hosts on your account to your site users. This will allow your site users to act as a meeting host.', 'video-conferencing-with-zoom-api' ); ?></p>
	<h4><?php _e( 'Prerequisites for using this area', 'video-conferencing-with-zoom-api' ); ?></h4>
	<ol>
		<li><?php _e( 'Owner or admin privileges of the associated Zoom account.', 'video-conferencing-with-zoom-api' ); ?></li>
		<li><?php _e( "A valid credit card added to your Zoom account If it's a Free Zoom plan. Make sure <a target='_blank' href='https://zoom.us/account/user'>this page</a> is accessible.", 'video-conferencing-with-zoom-api' ); ?></li>
		<li><strong>
		<?php
		_e(
			"The below list does not display WordPress users having a subscriber/customer <a target='_blank' href='https://themegrill.com/blog/wordpress-user-roles/'>user role</a>.",
			'video-conferencing-with-zoom-api'
		);
		?>
	</strong></li>
	</ol>
	
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
	<a href="?page=zoom-video-conferencing-host-id-assign&flush=true" class="button action" title="Sync users with Zoom API"><?php _e( 'Sync Zoom Users', 'video-conferencing-with-zoom-api' ); ?></a>
	<div class="zvc_listing_table">
		<form action="" method="POST">
			<?php wp_nonce_field( '_zoom_assign_hostid_nonce_action', '_zoom_assign_hostid_nonce' ); ?>
			<table id="zvc_users_list_table" class="display">
				<thead>
				<tr>
					<th width="5%"><?php _e( 'SN', 'video-conferencing-with-zoom-api' ); ?></th>
					<th style="text-align: left;"><?php _e( 'WordPress User Email', 'video-conferencing-with-zoom-api' ); ?></th>
					<th style="text-align: left;"><?php _e( 'WordPress User Name', 'video-conferencing-with-zoom-api' ); ?></th>
					<th width="30%" style="text-align: left;"><?php _e( 'Zoom hosts', 'video-conferencing-with-zoom-api' ); ?></th>
				</tr>
				</thead>
				<tbody>
				<?php
				if ( $api_users ) :
					$count = 1;

					$users = video_conferencing_zoom_non_sub_wp_users();

					foreach ( $users as $user ) :

						$user_id = (int) $user->data->ID;
						$skip    = 0;
						foreach ( $api_users as $api_user ) {
							if ( $api_user->email == $user->user_email ) {
								$skip = 1;
								break;
							}
						}

						if ( $skip ) {
							continue;
						}
						$user_zoom_hostid = get_user_meta( $user->ID, 'user_zoom_hostid', true );
						?>
						<tr>
							<td style="text-align: center;"><?php echo $count ++; ?></td>
							<td><?php echo $user->user_email; ?></td>
							<td><?php echo ( $user->display_name ) ? $user->display_name : $user->first_name . ' ' . $user->last_name; ?></td>
							<td>
								<select class="zvc-hacking-select" multiple style="border:1px solid #ff8a8a;padding:6px;width: 100%;" name="zoom_host_id[<?php echo $user->ID; ?>][]">
								<?php
								if ( ! empty( $users ) ) {
									foreach ( $api_users as $api_user ) {
										?>
										<option value="<?php echo $api_user->id; ?>" <?php echo ( is_array( $user_zoom_hostid ) && in_array( $api_user->id, $user_zoom_hostid ) ? ' selected="selected"' : '' ); ?>><?php echo $api_user->first_name . ' ( ' . $api_user->email . ' )'; ?></option>
										<?php
									}
								}
								?>
								</select>
							</td>
						</tr>
					<?php endforeach; ?>
				<?php endif; ?>
				</tbody>
			</table>
			<p class="submit"><input type="submit" name="saving_host_id" class="button button-primary" value="Save Mapping"></p>
		</form>
	</div>
</div>
