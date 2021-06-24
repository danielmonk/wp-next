<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$UDtHbPecFcPmev23Met = get_transient( 'zoom_wp_extension_license_UDtHbPecFcPmev23Met' );
$zoom_wp_extensions_details['Zoom WP Recurring Meetings Addon']['description'] = 'Enables you to create recurring Zoom meetings right from your WP dashboard';
$zoom_wp_extensions_details['Zoom WP Recurring Meetings Addon']['link']        = 'https://elearningevolve.com/products/zoom-wp-recurring-meetings/';
$zoom_wp_extensions_details['Zoom WP Recurring Meetings Addon']['image']       = '<img width="300" height="180" src="' . ZOOM_VIDEO_CONFERENCE_PLUGIN_ADMIN_IMAGES_PATH . '/recurring_meeting.png" title="Recurring Meetings Addon" alt="Recurring Meetings Addon"/>';
if ( defined( 'ZOOM_WP_RM_ITEM_ID' ) ) {
	$zoom_wp_extensions_details['Zoom WP Recurring Meetings Addon']['item_id'] = ZOOM_WP_RM_ITEM_ID;
	$zoom_wp_extensions_details['Zoom WP Recurring Meetings Addon']['name']    = ZOOM_WP_RM_ITEM_NAME;
}

$zoom_wp_extensions_details['Zoom WP Instructor Role Addon']['description'] = 'Enables you to allow instructors on your site to manage their own Zoom meetings';
$zoom_wp_extensions_details['Zoom WP Instructor Role Addon']['link']        = 'https://elearningevolve.com/products/zoom-wp-instructor-role/';
$zoom_wp_extensions_details['Zoom WP Instructor Role Addon']['image']       = '<img width="300" height="180" src="' . ZOOM_VIDEO_CONFERENCE_PLUGIN_ADMIN_IMAGES_PATH . '/zoom-wp-instructor-role-addon.png" title="Instructor Role Addon" alt="Instructor Role Addon"/>';

if ( defined( 'ZOOM_WP_IR_ITEM_ID' ) ) {
	$zoom_wp_extensions_details['Zoom WP Instructor Role Addon']['item_id'] = ZOOM_WP_IR_ITEM_ID;
	$zoom_wp_extensions_details['Zoom WP Instructor Role Addon']['name']    = ZOOM_WP_IR_ITEM_NAME;
}

$zoom_wp_extensions_details['Vimeo Videos Addon']['description'] = 'Zoom WordPress Plugin v4.12.0 adds the support for Vimeo as an alternate option to display Zoom cloud recording videos';
$zoom_wp_extensions_details['Vimeo Videos Addon']['link']        = 'https://elearningevolve.com/products/zoom-wp-vimeo-addon/';
$zoom_wp_extensions_details['Vimeo Videos Addon']['image']       = '<img width="300" height="180" src="' . ZOOM_VIDEO_CONFERENCE_PLUGIN_ADMIN_IMAGES_PATH . '/vimeo-addon-for-zoom-wp.png" title="Vimeo Videos Addon" alt="Vimeo Videos Addon"/>';
$zoom_wp_extensions_details['Vimeo Videos Addon']['name']        = 'Vimeo Videos Addon';

?>
<div class="wrap">
	<?php
	if ( isset( $_POST['zoom_wp_extension_license_activate'] ) && $UDtHbPecFcPmev23Met ) {
		$class = 'notice notice-error';
		printf( '<div class="%1$s"><p>%2$s</p></div>', esc_attr( $class ), $UDtHbPecFcPmev23Met );
	}
	?>
	<h1><?php _e( 'Extensions', 'video-conferencing-with-zoom-api' ); ?></h1>
	<h2><?php _e( 'Enhance the Zoom Plugin with these powerful extensions', 'video-conferencing-with-zoom-api' ); ?></h2>
	
	<div class="zvc-row">
		<div class="zvc-position-floater-left addon-wrap">
			<?php foreach ( $zoom_wp_extensions_details as $display_name => $addons ) : ?>
			<div class="zvc-addons">
				<form method="POST">
					<table class="form-table">
						<thead>
							<?php
							echo '<a target="_blank" href="' . esc_attr( $addons['link'] ) . '"><span class="addon-image">' . $addons['image'] . '</span></a>';
							echo '<p>' . esc_html( $addons['description'] ) . '</p>';

							if ( isset( $addons['item_id'] ) ) {
								echo '<input type="hidden" name="zoom_wp_extension_item_id" value="' . intval( $addons['item_id'] ) . '"/>';
								$license = get_option( 'zoom_wp_extension_license_key_' . intval( $addons['item_id'] ) );
								$status  = get_option( 'zoom_wp_extension_license_' . intval( $addons['item_id'] ) );
							} else {
								echo '<a target="_blank" href="' . esc_attr( $addons['link'] ) . '" class="button button-primary button-large">' . __( 'Get this extension', 'video-conferencing-with-zoom-api' ) . '</a>';
							}
							?>
						</thead>
						<tbody>
							<?php if ( isset( $addons['item_id'] ) ) : ?>
							<tr>
								<th>
									<label>
										<?php _e( 'License Key', 'video-conferencing-with-zoom-api' ); ?>
									</label>
								</th>
								<td>
									<input id="zoom_wp_extension_license_key" name="zoom_wp_extension_license_key" type="text" class="" placeholder="<?php _e( 'Enter your license key' ); ?>" value="<?php esc_attr_e( $license ); ?>" />
									<label class="description" for="zoom_wp_extension_license_key"></label>
								</td>
							</tr>
							<tr>
								<th>
									<label>
										<?php _e( 'Activate License', 'video-conferencing-with-zoom-api' ); ?>
									</label>
								</th>
								<td>
									<?php
									wp_nonce_field( 'zoom_wp_extension_nonce', 'zoom_wp_extension_nonce' );
									if ( $status !== false && 'valid' == $status ) {
										?>
										<span style="color:green; padding: 5px 10px; border-radius: 8px; background: #fff;"><?php _e( 'active', 'video-conferencing-with-zoom-api' ); ?></span>
										<input type="submit" class="button-secondary" name="zoom_wp_extension_license_deactivate" value="<?php _e( 'Deactivate License', 'video-conferencing-with-zoom-api' ); ?>"/>
										<?php
									} else {
										?>
										<input type="submit" class="button-secondary" name="zoom_wp_extension_license_activate" value="<?php _e( 'Activate License', 'video-conferencing-with-zoom-api' ); ?>"/>
									<?php } ?>
								</td>
							</tr>
							<?php endif; ?>
						</tbody>
					</table>
				</form>
			</div>
			<?php endforeach; ?>
		</div>
		
		<div class="zvc-position-floater-right">
			<ul class="zvc-information-sec">
				
				<li><strong><?php _e( 'IMPORTANT', 'video-conferencing-with-zoom-api' ); ?>: </strong><br /> <?php _e( 'Please note that we do not guarantee to provide dedicated support for the addons. The support is limited to bug fixes in the addon which are not specific to your site and occur for all users', 'video-conferencing-with-zoom-api' ); ?>
				<?php if ( defined( 'ZOOM_WP_IR_ITEM_ID' ) ) : ?>
					<li><a target="_blank" href="https://elearningevolve.com/products/zoom-wp-instructor-role"><?php _e( 'Plugin guide', 'video-conferencing-with-zoom-api' ); ?></a></li>
				<?php endif; ?>
				<li><a target="_blank" href="http://elearningevolve.com/contact"><?php _e( 'Report a bug in addons', 'video-conferencing-with-zoom-api' ); ?></a></li>
				Please add subject line "[Addon name here] Bug Report"
			</ul>
		</div>
	</div>
	<div class="zvc-position-clear"></div>
</div>
