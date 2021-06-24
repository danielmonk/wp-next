<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
video_conferencing_zoom_api_show_like_popup();

$bypass_cache = false;
if ( isset( $_GET['flush'] ) ) {
	$bypass_cache = true;
}

$users = video_conferencing_zoom_api_get_users( false, $bypass_cache );
?>
<div id="zvc-cover" style="display: none;"></div>
<div class="wrap">
	<h1><?php _e( 'Zoom Account Users', 'video-conferencing-with-zoom-api' ); ?></h1>
	<h4><?php _e( 'Prerequisites for managing Zoom users on your account', 'video-conferencing-with-zoom-api' ); ?></h4>
	<ol>
		<li><?php _e( 'Owner or admin privileges of the associated Zoom account.', 'video-conferencing-with-zoom-api' ); ?></li>
		<li><?php _e( "A valid credit card added to your Zoom account If it's a Free Zoom plan. Make sure <a target='_blank' href='https://zoom.us/account/user'>this page</a> is accessible.", 'video-conferencing-with-zoom-api' ); ?></li>
	</ol>
	
	<div id="message" style="display:none;" class="notice notice-success show_on_user_delete_success"></div>
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
	<a href="?page=zoom-video-conferencing-list-users&flush=true" class="button action" title="Sync users with Zoom API"><?php _e( 'Sync Zoom Users', 'video-conferencing-with-zoom-api' ); ?></a>
	<div class="zvc_listing_table">
		<table id="zvc_users_list_table" class="display" width="100%">
			<thead>
			<tr>
				<th class="zvc-text-left"><?php _e( 'SN', 'video-conferencing-with-zoom-api' ); ?></th>
				<th class="zvc-text-left"><?php _e( 'Host ID', 'video-conferencing-with-zoom-api' ); ?></th>
				<th class="zvc-text-left"><?php _e( 'Email', 'video-conferencing-with-zoom-api' ); ?></th>
				<th class="zvc-text-left"><?php _e( 'Name', 'video-conferencing-with-zoom-api' ); ?></th>
				<th class="zvc-text-left"><?php _e( 'Created On', 'video-conferencing-with-zoom-api' ); ?></th>
				<th class="zvc-text-left"><?php _e( 'Last Login', 'video-conferencing-with-zoom-api' ); ?></th>
				<th class="zvc-text-left"><?php _e( 'Last Client', 'video-conferencing-with-zoom-api' ); ?></th>
			</tr>
			</thead>
			<tbody>
			<?php
			$count = 1;
			if ( ! empty( $users ) ) {
				foreach ( $users as $user ) {
					?>
					<tr>
						<td><?php echo $count ++; ?></td>
						<td><?php echo $user->id; ?></td>
						<td><?php echo $user->email; ?></td>
						<td><?php echo $user->first_name . ' ' . $user->last_name; ?></td>
						<td><?php echo ! empty( $user->created_at ) ? date( 'F j, Y, g:i a', strtotime( $user->created_at ) ) : 'N/A'; ?></td>
						<div id="zvc_getting_user_info" style="display:none;">
							<div class="zvc_getting_user_info_content"></div>
						</div>
						<td><?php echo ! empty( $user->last_login_time ) ? date( 'F j, Y, g:i a', strtotime( $user->last_login_time ) ) : 'N/A'; ?></td>
						<td><?php echo ! empty( $user->last_client_version ) ? $user->last_client_version : 'N/A'; ?></td>
					</tr>
					<?php
				}
			}
			?>
			</tbody>
		</table>
	</div>
</div>
