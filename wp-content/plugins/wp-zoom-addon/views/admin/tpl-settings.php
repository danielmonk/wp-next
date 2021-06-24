<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$eu6y5Tg26PTrYCkh = get_transient( 'zoom_wp_license_eu6y5Tg26PTrYCkh' );
$tab              = esc_html( isset( $_GET['tab'] ) ? $_GET['tab'] : ( isset( $_POST['tab'] ) ? $_POST['tab'] : null ) );

?>
<div class="wrap">
	<?php
	if ( isset( $_POST['zoom_wp_license_activate'] ) && $eu6y5Tg26PTrYCkh ) {
		printf( '<div class="%1$s"><p>%2$s</p></div>', 'notice notice-error', $eu6y5Tg26PTrYCkh );
	}
	?>
	<div class="message">
		<?php
		if ( get_transient( 'zoom_wp_api_error_logged' ) ) {
			self::set_message( 'notice notice-error is-dismissible', '<strong>ERROR: </strong>' . get_transient( 'zoom_wp_api_error_logged' ) );
		}

		$message = self::get_message();
		if ( isset( $message ) && ! empty( $message ) ) {
			echo $message;
		}
		?>
	</div>
	<h1><?php _e( 'Settings', 'video-conferencing-with-zoom-api' ); ?></h1>

	<?php video_conferencing_zoom_api_show_like_popup(); ?>
	<div class="zvc-row">
		<div class="zvc-position-floater-left">
			<!-- Here are our tabs -->
			<nav class="nav-tab-wrapper">
				<a href="?page=zoom-video-conferencing-settings"
					class="nav-tab <?php echo ( null == $tab ? 'nav-tab-active' : '' ); ?>"><?php _e( 'Setup', 'video-conferencing-with-zoom-api' ); ?></a>
				<a href='?page=zoom-video-conferencing-settings&tab=visual'
					class="nav-tab <?php echo ( 'visual' == $tab ? 'nav-tab-active' : '' ); ?>"><?php _e( 'Visual', 'video-conferencing-with-zoom-api' ); ?></a>
				<a href="?page=zoom-video-conferencing-settings&tab=config"
					class="nav-tab <?php echo ( 'config' == $tab ? 'nav-tab-active' : '' ); ?>"><?php _e( 'Configuration', 'video-conferencing-with-zoom-api' ); ?></a>
				<a href="?page=zoom-video-conferencing-settings&tab=recording"
					class="nav-tab <?php echo ( 'recording' == $tab ? 'nav-tab-active' : '' ); ?>"><?php _e( 'Recording', 'video-conferencing-with-zoom-api' ); ?></a>
				<?php do_action( 'zoom_wp_setting_tabs', $tab ); ?>
			</nav>
			<div class="tab-content">
				<?php zoom_video_conference_load_markup( $tab ); ?>
			</div>
			<?php if ( null == $tab ) : ?>
			<hr>
			<section id="shortcodes" class="zoom-api-example-section">
				<h3>Using Shortcodes</h3>
				<p>Below are the shortcode parameters that you can use with each shortcode.</p>

				<div id="shortcode" class="zoom-api-basic-usage">
					<ol>
						<li>
							<p>Display zoom meeting window for the specified meeting id</p>
							<code>[zoom_api_link meeting_id='123456789']</code>
							<div class="zoom-api-basic-usage-description">
								<label>Additional Parameters:</label>
								<ol>
									<li><strong>class (overrides global CSS class)</strong> : Sets th CSS class for this zoom meeting window</li>
									<li><strong>id (overrides global CSS ID)</strong> : Sets the CSS ID for this zoom meeting window</li>
									<li><strong>title (overrides global title)</strong> : Sets the title for a specific meeting page.</li>
									<li><strong>countdown_title (overrides global text)</strong> : Sets the text above meeting countdown timer for this meeting</li>
									<li><strong>show_join_web (overrides the global setting)</strong> : Set the value to "1" to show join via Web option for this meeting</li>
									<li><strong>show_join_app (overrides the global setting)</strong> : Set the value to "1" to show join via App option for this meeting</li>
									<li><strong>is_webinar <span style="color:black;">(required if embedding webinar)</span></strong> : Set the value to "1" if this is a zoom webinar instead of zoom meeting</li>
								</ol>
							</div>
						</li>
						<li>
							<p>Display the latest cloud recording video for the meeting</p>
							<code>[zoom_latest_recording meeting_id='123456789']</code>
							<div class="zoom-api-basic-usage-description">
								<label>Additional Parameters:</label>
								<ol>
									<li><strong>is_webinar <span style="color:black;">(required if embedding webinar)</span></strong> : Set the value to "1" if this is a zoom webinar instead of a zoom meeting</li>
									<li><strong>start_time</strong> : Start video at (in hh:mm:ss e.g 00:01:00)</li>
									<li><strong>end_time</strong> : End video at (in hh:mm:ss e.g 00:40:00)</li>
								</ol>
							</div>
						</li>
						<li>
							<p>Display any cloud recording video with the recording play url</p>
							<code>[zoom_recording play_url='https://us02web.zoom.us/rec/play/xxxx']</code>
							<div class="zoom-api-basic-usage-description">
								<ol>
									<li><strong>play_url <span style="color:black;">(required)</span></strong> : Set any cloud recording play url to show a specific recording video (<a target="_blank" href="https://elearningevolve.com/blog/zoom-wordpress-plugin-v4-10-0/#recording-play-url">See usage instruction</a>)</li>
									<li><strong>start_time</strong> : Start video at (in hh:mm:ss e.g 00:01:00)</li>
									<li><strong>end_time</strong> : End video at (in hh:mm:ss e.g 00:40:00)</li>
								</ol>
							</div>
						</li>
				</div>
			</section>
			<hr>
			<?php endif; ?>
		</div>

		<div class="zvc-position-floater-right">
			<div class="zvc-information-sec">
				<h3>Go To Links</h3>
				<ol>
					<li><a target="_blank" href="https://elearningevolve.com/my-account/">Manage Purchase and License</a></li>
					<li><a target="_blank" href="https://elearningevolve.com/products/zoom-wordpress-plugin#faq">FAQ</a></li>
					<li><a target="_blank" href="https://elearningevolve.com/zoom-wp-feature-request/">Feature Request</a></li>
					<li><a target="_blank" class="thickbox" href="<?php echo esc_url( self_admin_url( 'plugin-install.php?tab=plugin-information&plugin=wp-zoom-addon&section=changelog&TB_iframe=true&width=772&height=642' ) ); ?>"><?php _e( 'Changelog', 'video-conferencing-with-zoom-api' ); ?></a></li>
					<li><a target="_blank" href="https://elearningevolve.com/blog/category/wodpress/zoom/">Blog Posts</a></li>
					<li><a target="_blank" href="https://elearningevolve.com/products/zoom-wordpress-plugin#reviews">Write a Review</a></li>
					<li><a target="_blank" href="https://elearningevolve.com/contact/">Contact</a></li>
				</ol>
			</div>
			<div class="zvc-information-sec">
				<h3 id="tutorials">Tutorials</h3>
				<ol>
					<li>Generate Zoom Meeting from <a target="_blank" href="https://elearningevolve.com/blog/generate-zoom-meeting-shortcode/">WP Editor</a></li>
					<li>Setup <a target="_blank" href="https://elearningevolve.com/blog/zoom-webinar-on-wordpress/">Zoom Webinar</a></li>
					<li>Setup <a target="_blank" href="https://elearningevolve.com/blog/multiple-hosts-with-zoom/">Multiple Meeting Hosts</a></li>
					<li>Setup <a target="_blank" href="https://elearningevolve.com/blog/zoom-cloud-recordings-in-wordpress/">Meeting Cloud Recordings</a></li>
				</ol>
			</div>
			<div class="zvc-information-sec">
				<h3>Additional offerings</h3>
				<ol>
					<li><p>Extend the functionality of the Zoom WordPress Plugin with these <a target="_blank" href="<?php echo admin_url( 'admin.php?page=zoom-video-conferencing-extensions' ); ?>">Extensions</a></p></li>
					<li><p>You can improve your <a target="_blank" href="https://learndash.idevaffiliate.com/544.html">LearnDash</a> course by encouraging your students to become active contributors on your courses via <a target="_blank" href="https://elearningevolve.com/products/learndash-student-voice/">LearnDash Student Voice</a></p></li>
				</ol>
			</div>
		</div>
	</div>
	<div class="zvc-position-clear"></div>
</div>

<?php
function zoom_video_conference_load_markup( $tab ) {
	$zoom_api_key                      = get_option( 'zoom_api_key' );
	$zoom_api_secret                   = get_option( 'zoom_api_secret' );
	$zoom_simd_token                   = get_option( 'zoom_simd_token' );
	$zoom_vanity_url                   = get_option( 'zoom_vanity_url' );
	$zoom_help_text_disable            = get_option( 'zoom_help_text_disable' );
	$zoom_join_before_time             = get_option( 'zoom_join_before_time' );
	$zoom_join_via_app_pass            = get_option( 'zoom_join_via_app_pass' );
	$zoom_recording_via                = get_option( 'zoom_recording_via' );
	$zoom_auto_display_recording       = get_option( 'zoom_auto_display_recording' );
	$zoom_autoplay_recording           = get_option( 'zoom_autoplay_recording' );
	$zoom_disable_no_cache             = get_option( 'zoom_disable_no_cache' );
	$zoom_register_for_meeting         = get_option( 'zoom_register_for_meeting' );
	$meeting_thankyou_message          = get_option( 'meeting_thankyou_message', __( 'Thank you for attending this meeting!', 'video-conferencing-with-zoom-api' ) );
	$meeting_window_custom_css         = get_option( 'meeting_window_custom_css' );
	$zoom_join_via_web_disable         = get_option( 'zoom_join_via_web_disable' );
	$zoom_join_via_web_text            = get_option( 'zoom_join_via_web_text' );
	$zoom_join_via_app_text            = get_option( 'zoom_join_via_app_text' );
	$zoom_btn_css_class                = get_option( 'zoom_btn_css_class' );
	$zoom_window_size                  = get_option( 'zoom_window_size' );
	$zoom_meeting_title                = get_option( 'zoom_meeting_title' );
	$zoom_meeting_lang_select          = get_option( 'zoom_meeting_lang_select' );
	$zoom_meeting_calendar_link        = get_option( 'zoom_meeting_calendar_link' );
	$zoom_countdown_title              = get_option( 'zoom_countdown_title' );
	$zoom_hide_recordings              = get_option( 'zoom_hide_recordings' );
	$zoom_hide_countdown_timer         = get_option( 'zoom_hide_countdown_timer' );
	$zoom_disable_scroll_to_window     = get_option( 'zoom_disable_scroll_to_window' );
	$zoom_meeting_autojoin             = get_option( 'zoom_meeting_autojoin' );
	$zoom_meeting_autoend              = get_option( 'zoom_meeting_autoend' );
	$zoom_meeting_attendee_name_format = get_option( 'zoom_meeting_attendee_name_format' );
	$zoom_meeting_can_host_role        = (array) get_option( 'zoom_meeting_can_host_role', array('administrator') );
	$zoom_meeting_can_host_capability  = (array) get_option( 'zoom_meeting_can_host_capability', array() );
	$zoom_meeting_join_app_target      = get_option( 'zoom_meeting_join_app_target' );
	$zoom_meeting_thankyou_redirect    = (int) get_option( 'zoom_meeting_thankyou_redirect' );
	$license                           = get_option( 'zoom_wp_license_key_' . ZVCW_ZOOM_ITEM_ID );
	$status                            = get_option( 'zoom_wp_license' );
	$expires_at                        = get_option( 'zoom_wp_license_expire' );
	?>
	<form autocomplete="off" action="?page=zoom-video-conferencing-settings" method="POST">
	<?php wp_nonce_field( '_zoom_settings_update_nonce_action', '_zoom_settings_nonce' ); ?>
	<table class="form-table">
		<tbody>
			<?php if ( 'setup' == $tab || null == $tab ) : ?>
				<h2>Required: Please follow these <strong><a target="_blank" href="https://elearningevolve.com/blog/zoom-api-keys/"> steps</a></strong> to get your API Keys</h2>
				<tr>
					<th>
						<label>
							<?php _e( 'License Key', 'video-conferencing-with-zoom-api' ); ?>
						</label>
					</th>
					<td>
						<input autocomplete="off" id="zoom_wp_license_key" name="zoom_wp_license_key" type="text" class="regular-text" placeholder="<?php _e( 'Your license key' ); ?>" value="<?php echo esc_attr( $license ); ?>" />
						<?php
						if ( $expires_at ) :
							echo '<p><i>Your license key expires on ' . date( 'F jS, Y', strtotime( $expires_at ) ) . '</i></p>';
						endif;
						?>
					</td>
				</tr>
				<tr>
					<th>
						<label>
							<?php
							if ( $status !== false && 'valid' == $status ) :
								_e( 'Deactivate License', 'video-conferencing-with-zoom-api' );
							else :
								_e( 'Activate License', 'video-conferencing-with-zoom-api' );
							endif;
							?>
						</label>
					</th>
					<td>
						<?php
						wp_nonce_field( 'zoom_wp_license_nonce', 'zoom_wp_license_nonce' );
						if ( $status !== false && 'valid' == $status ) {
							?>
							<span style="color:green; padding: 5px 10px; border-radius: 8px; background: #fff;"><?php _e( 'active', 'video-conferencing-with-zoom-api' ); ?></span>
							<input type="submit" class="button-secondary" name="zoom_wp_license_deactivate" value="<?php _e( 'Deactivate', 'video-conferencing-with-zoom-api' ); ?>"/>
							<?php
						} else {
							?>
							<input type="submit" class="button-secondary" name="zoom_wp_license_activate" value="<?php _e( 'Activate', 'video-conferencing-with-zoom-api' ); ?>"/>
						<?php } ?>
						<?php if ( ! video_conferencing_zoom_is_valid_license() ) : ?>
							<p class="description" for="zoom_wp_license_key"><?php _e( 'Add your license key & activate license to unlock plugin features and automatic updates.', 'video-conferencing-with-zoom-api' ); ?></p>
						<?php endif; ?>
					</td>
				</tr>
				<tr>
					<th><label><?php _e( 'API Key', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td><input autocomplete="new-password" type="password" style="width: 400px;" name="zoom_api_key" id="zoom_api_key" value="<?php echo ! empty( $zoom_api_key ) ? esc_html( $zoom_api_key ) : ''; ?>"> <a href="javascript:void(0);" class="toggle-api">Show</a></td>
				</tr>
				<tr>
					<th><label><?php _e( 'API Secret Key', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td><input autocomplete="new-password-2" type="password" style="width: 400px;" name="zoom_api_secret" id="zoom_api_secret" value="<?php echo ! empty( $zoom_api_secret ) ? esc_html( $zoom_api_secret ) : ''; ?>"> <a href="javascript:void(0);" class="toggle-secret">Show</a></td>
				</tr>
				<tr>
					<th><label><?php _e( 'Chrome WebAssembly SIMD Token (Optional)', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td><input autocomplete="zoom_simd_token" type="text" style="width: 400px;" name="zoom_simd_token" id="zoom_simd_token" value="<?php echo ! empty( $zoom_simd_token ) ? esc_html( $zoom_simd_token ) : ''; ?>">
						<p class="description">Zoom Web SDK is currently experimenting with new technology to improve the performance particularly the quality of Audio/Video & usage for meetings by supporting SIMD for Chrome 84+. Currently, this is in <strong>Trial mode</strong> <a target="_blank" href="https://medium.com/zoom-developer-blog/new-webinar-features-for-websdk-84be8dd3b685#2240">Follow the steps here under SIMD Support to enter your trial token above</a>. <i>Please note that this field is not necessary for plugin setup</i>.</p>
					</td>
				</tr>
				<tr>
					<th><label><?php _e( 'Vanity URL (Optional)', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<input type="url" name="vanity_url" class="regular-text" value="<?php echo ( $zoom_vanity_url ) ? esc_attr( $zoom_vanity_url ) : ''; ?>">
						<p class="description">If you are using Zoom Vanity URL then please insert it here else leave it empty.</p>
						<a href="https://support.zoom.us/hc/en-us/articles/215062646-Guidelines-for-Vanity-URL-Requests">Read more about Vanity URLs</a>
					</td>
				</tr>
				<?php
			endif;
			if ( 'visual' == $tab ) :
				?>
				<tr class="alternative-btn-text">
					<th><label><?php _e( 'Title for Zoom Meeting Page', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<input type="text" name="zoom_meeting_title" class="regular-text" value="<?php echo ( $zoom_meeting_title ) ? esc_html( $zoom_meeting_title ) : ''; ?>" placeholder="Meeting Title">
						<p class="description"><?php _e( 'Set meeting title globally for all meetings.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr class="alternative-btn-text">
					<th><label><?php _e( 'Title for Meeting Countdown', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<input type="text" name="zoom_countdown_title" class="regular-text" value="<?php echo ( $zoom_countdown_title ) ? esc_html( $zoom_countdown_title ) : ''; ?>" placeholder="Meeting starts in">
						<p class="description"><?php _e( 'Set countdown title globally for all meetings.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr class="zoom-btn-class">
					<th><label><?php _e( 'CSS classes to add on buttons', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<input type="text" name="zoom_btn_css_class" class="regular-text" value="<?php echo ( $zoom_btn_css_class ? esc_html( $zoom_btn_css_class ) : '' ); ?>" placeholder="btn-class btn-class2">
						<p class="description"><?php _e( 'You can add CSS classes separated by a SINGLE SPACE used in your theme for button styling here.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr class="zoom-join-via-web-text">
					<th><label><?php _e( 'Join via Web Button Text', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<input type="text" name="zoom_join_via_web_text" class="regular-text" value="<?php echo ( $zoom_join_via_web_text ? esc_html( $zoom_join_via_web_text ) : '' ); ?>" placeholder="Join via Web button text">
						<p class="description"><?php _e( 'Add your preferred text to be used for the Join via Web button or leave empty for default.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr class="zoom-join-via-app-text">
					<th><label><?php _e( 'Join via Zoom Button Text', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<input type="text" name="zoom_join_via_app_text" class="regular-text" value="<?php echo ( $zoom_join_via_app_text ? esc_html( $zoom_join_via_app_text ) : '' ); ?>" placeholder="Join via App button text">
						<p class="description"><?php _e( 'Add your preferred text to be used for the Join via App button or leave empty for default.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php _e( 'Zoom Window Size', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<select name="zoom_window_size">
							<option <?php echo ( $zoom_window_size == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'Full width', 'video-conferencing-with-zoom-api' ); ?></option>
							<option <?php echo ( $zoom_window_size == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Half width', 'video-conferencing-with-zoom-api' ); ?></option>
						</select>
						<p class="description"><?php _e( 'Choose default Full width or Half width size of the container for the Zoom meeting window.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr>
					<th><label><?php _e( 'Show Language Field ', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<select name="zoom_meeting_lang_select">
							<option <?php echo ( $zoom_meeting_lang_select == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
							<option <?php echo ( $zoom_meeting_lang_select == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
						</select>
						<p class="description">Show/Hide language select field on frontend for user to choose the Zoom window language or keep the default value to use the current WP site language. See the <a target="_blank" href="https://marketplace.zoom.us/docs/sdk/native-sdks/web/advanced/multi-language#multi-language-support">supported languages</a> for Web SDK</p>
					</td>
				</tr>
				<tr>
					<th><label><?php _e( 'Show Save Button', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<select name="zoom_meeting_calendar_link">
							<option <?php echo ( $zoom_meeting_calendar_link == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
							<option <?php echo ( $zoom_meeting_calendar_link == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
						</select>
						<p class="description">Show/Hide Save button on Zoom meeting join form.</p>
					</td>
				</tr>
				<tr>
					<th><label><?php _e( 'Hide Join via App', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<select name="zoom_help_text_disable">
							<option <?php echo ( $zoom_help_text_disable == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
							<option <?php echo ( $zoom_help_text_disable == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
						</select>
						<p class="description">Show/Hide Join via App above the Zoom Window on the page where you place Zoom meeting shortcode.</p>
					</td>
				</tr>
				<tr>
					<th><label><?php _e( 'Hide Join via Web', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<select name="zoom_join_via_web_disable">
							<option <?php echo ( $zoom_join_via_web_disable == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
							<option <?php echo ( $zoom_join_via_web_disable == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
						</select>
						<p class="description">Show/Hide Join via Web on the page where you place Zoom meeting shortcode.</p>
					</td>
				</tr>
				<tr>
					<th><label><?php _e( 'Hide Join Early', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<select name="zoom_join_before_time">
							<option <?php echo ( $zoom_join_before_time == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
							<option <?php echo ( $zoom_join_before_time == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
						</select>
						<p class="description">Show/Hide Join Early button. This button enable your users to join from the countdown page before the event starts.</p>
					</td>
				</tr>
				<tr>
					<th><label><?php _e( 'Hide Register', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<select name="zoom_register_for_meeting">
							<option <?php echo ( $zoom_register_for_meeting == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
							<option <?php echo ( $zoom_register_for_meeting == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
						</select>
						<p class="description">Show/Hide Register button. This button enable your users to Register via Zoom on the countdown page before the event starts.</p>
					</td>
				</tr>
				<tr>
					<th><label><?php _e( 'Hide Countdown timer', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<select name="zoom_hide_countdown_timer">
							<option <?php echo ( $zoom_hide_countdown_timer == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
							<option <?php echo ( $zoom_hide_countdown_timer == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
						</select>
						<p class="description">Show/Hide countdown timer for a scheduled Zoom Meeting/Webinar.</p>
					</td>
				</tr>
				<tr>
					<th><label><?php _e( 'Disable Scroll to Zoom Window', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<select name="zoom_disable_scroll_to_window">
							<option <?php echo ( $zoom_disable_scroll_to_window == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
							<option <?php echo ( $zoom_disable_scroll_to_window == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
						</select>
						<p class="description">Enable/Disable auto scroll to Zoom window on the meeting page.</p>
					</td>
				</tr>
				<tr class="meeting-thankyou-msg">
					<th><label><?php _e( 'Thankyou Message on Meeting End', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<?php
							$settings = array(
								'textarea_rows' => 15,
								'tabindex'      => 1,
							);
							wp_editor( $meeting_thankyou_message, 'meeting_thankyou_message', $settings );
							?>
						<p class="description"><?php _e( 'Show this message on frontend when the meeting or webinar is ended or left by the user. Use {username} where you want to display the name of user', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<tr class="meeting-player-custom-css">
					<th><label><?php _e( 'Custom CSS in Zoom Window', 'video-conferencing-with-zoom-api' ); ?></label></th>
					<td>
						<textarea placeholder="/* e.g. This rule hides chat button in Zoom window */ button[aria-label='open the chat pane'] {
display:none;
}	" rows="10" cols="50" name="meeting_window_custom_css" class="regular-text"><?php echo ( $meeting_window_custom_css ? esc_html( $meeting_window_custom_css ) : '' ); ?></textarea>
						<p class="description"><strong>IMPORTANT: </strong><?php _e( 'This option is for developers/designers as It will apply custom CSS styles inside the Zoom Window. Please note that this is not the recommended solution to modify the elements of Zoom window and you might have to add !important in your CSS styles.', 'video-conferencing-with-zoom-api' ); ?></p>
					</td>
				</tr>
				<?php
			endif;
			if ( 'config' == $tab ) :
				?>
			<tr>
				<th><label><?php _e( 'Meeting Host By Role', 'video-conferencing-with-zoom-api' ); ?></label><br /><small>Press Ctrl for multiple selections</small></th>
				<td>
					<select class="zvc-multi-select" multiple name="zoom_meeting_can_host_role[]">
						<option value="none" <?php echo ( isset( $zoom_meeting_can_host_role[0] ) && 'none' === $zoom_meeting_can_host_role[0] ? 'selected' : '' ); ?>>
							<?php _e( '-- None --', 'video-conferencing-with-zoom-api' ); ?>
						</option>
						<?php video_conferencing_zoom_wp_dropdown_roles( $zoom_meeting_can_host_role ); ?>
					</select>
					<p class="description">By default users with Administrator Role are set as Zoom Meeting hosts.</p>
				</td>
			</tr>
			<tr>
				<th><label><?php _e( 'Meeting Host By Capability', 'video-conferencing-with-zoom-api' ); ?></label><br /><small>Press Ctrl for multiple selections</small></th>
				<td>
					<select class="zvc-multi-select" multiple name="zoom_meeting_can_host_capability[]">
						<option value="none" <?php echo ( isset( $zoom_meeting_can_host_capability[0] ) && 'none' === $zoom_meeting_can_host_capability[0] ? 'selected' : '' ); ?>>
							<?php _e( '-- None --', 'video-conferencing-with-zoom-api' ); ?>
						</option>
						<?php video_conferencing_zoom_dropdown_user_cap( $zoom_meeting_can_host_capability ); ?>
					</select>
					<p class="description">Set Zoom Meeting host access by WordPress user <a target="_blank" href="https://wordpress.org/support/article/roles-and-capabilities/">capabilities</a>. <br/>(Technical knowledge required, please use this option with caution)</p>
				</td>
			</tr>
			<tr>
				<th><label><?php _e( 'Attendee WordPress Name Format', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select name="zoom_meeting_attendee_name_format">
						<option <?php echo ( $zoom_meeting_attendee_name_format == 0 ) ? 'selected="selected"' : ''; ?> name="attendee_join_display_name" value="0"><?php _e( 'First & Last Name (default)', 'video-conferencing-with-zoom-api' ); ?></option>
						<option <?php echo ( $zoom_meeting_attendee_name_format == 1 ) ? 'selected="selected"' : ''; ?> name="attendee_join_user_name" value="1"><?php _e( 'Only First Name', 'video-conferencing-with-zoom-api' ); ?></option>
						<option <?php echo ( $zoom_meeting_attendee_name_format == 2 ) ? 'selected="selected"' : ''; ?> name="attendee_join_user_name" value="2"><?php _e( 'User Name', 'video-conferencing-with-zoom-api' ); ?></option>
						<option <?php echo ( $zoom_meeting_attendee_name_format == 3 ) ? 'selected="selected"' : ''; ?> name="attendee_join_email" value="3"><?php _e( 'Email', 'video-conferencing-with-zoom-api' ); ?></option>
					</select>
					<p class="description">Choose logged in meeting participant name format used on meeting join.</p>
				</td>
			</tr>
			<tr>
				<th><label><?php _e( 'Zoom App Target Window', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select name="zoom_meeting_join_app_target">
						<option <?php echo ( $zoom_meeting_join_app_target == 0 ) ? 'selected="selected"' : ''; ?> value="0"><?php _e( 'Same Window (default)', 'video-conferencing-with-zoom-api' ); ?></option>
						<option <?php echo ( $zoom_meeting_join_app_target == 1 ) ? 'selected="selected"' : ''; ?> value="1"><?php _e( 'New Window', 'video-conferencing-with-zoom-api' ); ?></option>
					</select>
					<p class="description">Choose whether the Join via App button opens in new or the same window.</p>
				</td>
			</tr>
			<tr>
				<th><label><?php _e( 'Meeting Thank you Page', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<?php
						$args['selected']         = $zoom_meeting_thankyou_redirect;
						$args['name']             = 'zoom_meeting_thankyou_redirect';
						$args['show_option_none'] = __( 'No Redirect', 'video-conferencing-with-zoom-api' );

						wp_dropdown_pages( $args );
					?>
					<p class="description">Thank you page where the user will be redirected at the end of the meeting.</p>
				</td>
			</tr>
			<tr>
				<th><label><?php _e( 'Meeting Auto Join', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select name="zoom_meeting_autojoin">
						<option <?php echo ( $zoom_meeting_autojoin == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
						<option <?php echo ( $zoom_meeting_autojoin == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
					</select>
					<p class="description">If Enabled all logged in WP users will be able to skip the meeting password and join meeting automatically.</p>
				</td>
			</tr>
			<tr>
				<th><label><?php _e( 'Meeting Auto End', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select name="zoom_meeting_autoend">
						<option <?php echo ( $zoom_meeting_autoend == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
						<option <?php echo ( $zoom_meeting_autoend == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
					</select>
					<p class="description">If Enabled the meeting will end automatically after the set meeting Duration(defined on the meeting create/edit page.</p>
				</td>
			</tr>
			<tr>
				<th><label><?php _e( 'Remove Password on Join via App', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select name="zoom_join_via_app_pass">
						<option <?php echo ( $zoom_join_via_app_pass == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
						<option <?php echo ( $zoom_join_via_app_pass == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
					</select>
					<p class="description">If Enabled the meeting password will be removed from the Join via App link and users will have to enter correct password before joining via the App</p>
				</td>
			</tr>
			<tr>
				<th><label><?php _e( 'Disable Nocache Mode', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select name="zoom_disable_no_cache">
						<option <?php echo ( $zoom_disable_no_cache == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
						<option <?php echo ( $zoom_disable_no_cache == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
					</select>
					<p class="description">If Disabled the nocache query string will not be added to the meeting page URL. Note that the query string is added to prevent the display of a cached version of the meeting page</p>
				</td>
			</tr>
			<?php endif; ?>
			<?php if ( 'recording' == $tab ) : ?>
			<tr>
				<th><label><?php _e( 'Display Recording Via', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select name="zoom_recording_via">
						<option <?php echo ( $zoom_recording_via == 'zoom_cloud' ) ? 'selected="selected"' : ''; ?> name="zoom_cloud" value="zoom_cloud"><?php _e( 'Zoom Cloud', 'video-conferencing-with-zoom-api' ); ?></option>
						<option <?php echo ( $zoom_recording_via == 'vimeo' ) ? 'selected="selected"' : ''; ?> name="vimeo" value="vimeo"><?php _e( 'Vimeo', 'video-conferencing-with-zoom-api' ); ?></option>
					</select>
					<p class="description">Select the default Zoom Cloud or Vimeo for meeting recordings</p>
					<strong>Prerequisite for Vimeo is to setup third party plugin <a rel="noopnerer" target="_blank" href="https://wordpress.org/plugins/wp-vimeo-videos/">WP Vimeo Videos</a></strong>
				</td>
			</tr>
			<tr>
				<th><label><?php _e( 'Hide Cloud Recordings', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select name="zoom_hide_recordings">
						<option <?php echo ( $zoom_hide_recordings == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
						<option <?php echo ( $zoom_hide_recordings == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
					</select>
					<p class="description">Show/Hide button to let users play <a rel="noopnerer" target="_blank" href="https://support.zoom.us/hc/en-us/articles/203741855-Cloud-recording">cloud recordings</a> after meeting(<strong>requires Pro level Zoom account</strong>)</p>
				</td>
			</tr>
			<tr>
				<th><label><?php _e( 'Disable Recording on Meeting Page', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select name="zoom_auto_display_recording">
						<option <?php echo ( $zoom_auto_display_recording == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
						<option <?php echo ( $zoom_auto_display_recording == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
					</select>
					<p class="description">If Disabled the recording will not show up automatically on the meeting page after the meeting ends</p>
				</td>
			</tr>
			<tr>
				<th><label><?php _e( 'Disable Autoplay for Recording', 'video-conferencing-with-zoom-api' ); ?></label></th>
				<td>
					<select name="zoom_autoplay_recording">
						<option <?php echo ( $zoom_autoplay_recording == 0 ) ? 'selected="selected"' : ''; ?> name="no" value="0"><?php _e( 'No', 'video-conferencing-with-zoom-api' ); ?></option>
						<option <?php echo ( $zoom_autoplay_recording == 1 ) ? 'selected="selected"' : ''; ?> name="yes" value="1"><?php _e( 'Yes', 'video-conferencing-with-zoom-api' ); ?></option>
					</select>
					<p class="description">If Disabled the recording video will not play automatically on page load</p>
				</td>
			</tr>
			<?php endif; ?>
			<?php do_action( 'zoom_wp_setting_tab_content', $tab ); ?>
		</tbody>
	</table>
	<input type="hidden" name="tab" value="<?php echo esc_attr( $tab ); ?>"/>
	<p class="submit"><input type="submit" name="save_zoom_settings" id="submit" class="button button-primary" value="<?php esc_html_e( 'Save Changes', 'inactive-logout' ); ?>"></p>
	<h4><strong>Note:</strong> After saving the changes please <a target="_blank" href="https://www.wpbeginner.com/beginners-guide/how-to-clear-your-cache-in-wordpress">clear the cache on your site</a></h4>
	</form>
	<?php
}
