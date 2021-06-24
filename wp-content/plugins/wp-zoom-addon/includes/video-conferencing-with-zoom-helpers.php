<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Check if video still exists on Vimeo
function video_conferencing_zoom_check_vimeo_exist( $id ) {
	# Set dependent Vimeo upload classes
	$api = new WP_DGV_Api_Helper();

	$exist = $api->api->request( '/me/videos/' . $id, array(), 'GET' );
	if ( isset( $exist['body']['error'] ) ) {
		video_conferencing_zoom_log_error( 'Vimeo Error: Video ID => ' . $id . ' ' . $exist['body']['error'] );
	}

	if ( 200 === $exist['status'] ) {
		return true;
	}

	return false;
}

// Check if recording is not served via Vimeo
function video_conferencing_zoom_recording_via_vimeo() {
	$zoom_recording_via = get_option( 'zoom_recording_via' );
	if ( 'vimeo' === $zoom_recording_via ) {
		// If dependent plugin active only then serve via vimeo
		if ( is_plugin_active( 'wp-vimeo-videos/wp-vimeo-videos.php' )
			|| is_plugin_active( 'wp-vimeo-videos-pro/wp-vimeo-videos-pro.php' ) ) {
			return true;
		}
	}

	return false;
}

// Get locale from WP to set in Zoom SDK
function video_conferencing_zoom_get_wp_locale_for_sdk() {
	// Locale submitted from meeting form
	if ( isset( $_POST['meeting_lang'] ) ) {
		return sanitize_text_field( $_POST['meeting_lang'] );
	}

	$locale = str_replace( '_', '-', get_locale() );

	// Japanese is represented by jp in Zoom SDK
	if ( 'ja' == $locale ) {
		$locale = str_replace( 'ja', 'jp', $locale );
	}

	//https://marketplace.zoom.us/docs/sdk/native-sdks/web/advanced/multi-language
	$websdk_locales = array( 'de-DE', 'es-ES', 'en-US', 'fr-FR', 'jp-JP', 'pt-PT', 'ru-RU', 'zh-TW', 'zh-CN' );

	foreach ( $websdk_locales as $sdk_locale ) {
		$sdk_locale_single = explode( '-', $sdk_locale );
		if ( false !== strpos( $locale, $sdk_locale_single[0] ) ) {
			$locale = $sdk_locale;
		}
	}

	// If locale not available in Web SDK then set default
	if ( ! in_array( $locale, $websdk_locales ) ) {
		$locale = 'en-US';
	}

	return $locale;
}

// Adds style and nocache param only on the shortcode page
function video_conferencing_zoom_redirect_to_nocache( $content ) {
	if ( $content && is_singular()
		&& ( has_shortcode( $content, 'zoom_api_link' )
		|| has_shortcode( $content, 'zoom_latest_recording' ) )
		) {
		if ( ! headers_sent() && video_conferencing_zoom_redirect_nocache() ) {
			// Serve a non cached version of the shortcode page
			$nocache  = time() + mt_rand( 0, mt_getrandmax() );
			$location = add_query_arg( 'nocache', $nocache );
			nocache_headers();
			wp_safe_redirect( esc_url_raw( $location ) );
			exit;
		}

		if ( ! wp_style_is( 'video-conferencing-with-zoom-api-iframe' ) ) {
			wp_enqueue_style( 'video-conferencing-with-zoom-api-iframe' );
		}

		if ( is_rtl() ) {
			wp_add_inline_style( 'video-conferencing-with-zoom-api-iframe', 'body ul.zoom-meeting-countdown{ direction: ltr; }' );
		}
	}

}

// Get list of users that are not ONLY subscribers/customers
function video_conferencing_zoom_non_sub_wp_users() {
	$roles_not_in = array( 'subscriber', 'customer' );
	foreach ( wp_roles()->roles as $role_slug => $role ) {
		if ( ! in_array( $role_slug, $roles_not_in ) ) {
			$roles__in[] = $role_slug;
		}
	}

	$args = array(
		'role__in' => $roles__in,
		'number'   => -1,
	);

	return get_users( $args );

}

// Check if request is valid for frontend functions
function video_conferencing_zoom_is_valid_request() {
	if ( defined( 'WC_API_REQUEST' ) || defined( 'JSON_REQUEST' ) || defined( 'WP_CLI' ) || defined( 'DOING_CRON' ) || defined( 'REST_REQUEST' ) ) {
		return false;
	}

	return true;
}

// Check if no cache is required for this request
function video_conferencing_zoom_redirect_nocache() {
	$q_vars                = $_GET;
	$zoom_disable_no_cache = get_option( 'zoom_disable_no_cache' );
	if ( ! isset( $q_vars['nocache'] ) ) {
		$q_vars['nocache'] = 0;
	}

	unset( $q_vars['nocache'] );

	// Redirect only when nocache param is not set
	// AND If already other query vars are not set or
	// not in preview mode AND not on WP admin
	// AND not coming from a POST request from a potential page builder from admin
	if ( 1 != $zoom_disable_no_cache && ! is_admin() && ! ( isset( $_POST ) && $_POST ) && ! isset( $_GET['nocache'] ) && ! ( $q_vars || is_preview() || is_customize_preview() ) ) {
		return true;
	}

	return false;
}

if ( ! function_exists( 'dump' ) ) {
	function dump( $var ) {
		echo '<pre>';
		var_dump( $var );
		echo '</pre>';
		die;
	}
}

/**
 * Check if Zoom users are added as WP users on the site
 *
 * @since  4.1.0
 */
if ( ! function_exists( 'video_conferencing_zoom_check_hosts' ) ) {
	function video_conferencing_zoom_check_hosts() {
		$possible_hosts = video_conferencing_zoom_get_possible_hosts( true );
		$zoom_hosts     = video_conferencing_zoom_api_get_users( true );

		if ( $possible_hosts ) {
			foreach ( $possible_hosts as $possible_host ) {
				foreach ( $zoom_hosts as $key => $zoom_host ) {
					if ( $possible_host['email'] == $zoom_host->email ) {
						if ( isset( $zoom_hosts[ $key ] ) ) {
							unset( $zoom_hosts[ $key ] );
						}
					}
				}
			}
		}

		return $zoom_hosts;
	}
}

/**
 * Show Users dropdown for Add/Edit Meeting
 * Get all users apart from subscribers as possible host for admin
 * @since  4.1.0
 */
if ( ! function_exists( 'video_conferencing_zoom_get_possible_hosts' ) ) {
	function video_conferencing_zoom_get_possible_hosts( $bypass_filter = false ) {
		$cache_users = video_conferencing_zoom_api_get_users();
		if ( ! $cache_users ) {
			return;
		}

		$all_users = video_conferencing_zoom_non_sub_wp_users();

		if ( ! get_option( 'zoom_owner_host_id' ) ) {
			$owner_user = new stdClass();
			$owner_user = zoom_conference()->listUsers( array( 'role_id' => '0' ) );
			$owner_user = json_decode( $owner_user );

			if ( isset( $owner_user->users ) && isset( $owner_user->users[0]->id ) ) {
				update_option( 'zoom_owner_host_id', esc_html( $owner_user->users[0]->id ), false );
			}
		}
		$owner_host_id = get_option( 'zoom_owner_host_id' );

		foreach ( $all_users as $user ) {
			$user_id = (int) $user->data->ID;

			$list[ $user_id ]['host_id']      = esc_html( $owner_host_id );
			$list[ $user_id ]['display_name'] = esc_html( $user->data->user_login . '(' . $user->data->user_email . ')' );
			$list[ $user_id ]['email']        = esc_html( $user->data->user_email );

			foreach ( $cache_users as $cache_user ) {
				// If user is added to Zoom account set that host_id
				if ( $cache_user->email == $user->data->user_email ) {
					$list[ $user_id ]['host_id']      = esc_html( $cache_user->id );
					$list[ $user_id ]['display_name'] = esc_html( $user->data->user_login . '(' . $user->data->user_email . ')' );
					$list[ $user_id ]['email']        = esc_html( $user->data->user_email );
				}

				// Overrides All If host id is rewritten from WP admin then use that
				$user_zoom_hostid = get_user_meta( $user_id, 'user_zoom_hostid', true );
				if ( is_array( $user_zoom_hostid ) && in_array( $cache_user->id, $user_zoom_hostid ) ) {
					$list[ $user_id ]['host_id']      = esc_html( $cache_user->id );
					$list[ $user_id ]['display_name'] = esc_html( $user->data->user_login . '(' . $user->data->user_email . ')' );
					$list[ $user_id ]['email']        = esc_html( $user->data->user_email );
				}
			}
		}

		if ( ! isset( $list ) ) {
			$list = array();
		}

		if ( $bypass_filter ) {
			return $list;
		} else {
			// Filter user if the current user is Instructor
			return apply_filters( 'zoom_wp_host_wp_users', $list );
		}
	}
}

add_action( 'wp_ajax_video_conferencing_zoom_api_dismissed_notice_handler', 'video_conferencing_zoom_api_ajax_notice_handler' );

function video_conferencing_zoom_api_ajax_notice_handler() {
	// Pick up the notice "type" - passed via jQuery (the "data-notice" attribute on the notice)
	if ( isset( $_POST['type'] ) && 'remove-license-notice' == $_POST['type'] ) {
		update_option( 'zoom_api_dismiss_share_notice', 'disable', false );
	}
}

if ( ! function_exists( 'video_conferencing_zoom_api_show_like_popup' ) ) {
	function video_conferencing_zoom_api_show_like_popup() {
		$show_popup = apply_filters( 'zoom_wp_show_popup', true );

		if ( ! $show_popup ) {
			return;
		}

		if ( current_user_can( 'administrator' ) ) {
			// Rewrite the htaccess file with HTTP Auth headers for Zoom events
			// if ( function_exists( 'save_mod_rewrite_rules' ) ) {
			// 	save_mod_rewrite_rules();
			// }

			if ( ! is_ssl() ) {
				?>
				<div class="ssl-alert notice notice-error is-dismissible">
				<p>
					<strong><?php _e( 'ALERT! No SSL on your website: ', 'video-conferencing-with-zoom-api' ); ?></strong>
					<?php
						_e( 'Audio and Video for Zoom meeting will not work on a non HTTPS site, please install a valid SSL certificate on your site to allow participants use audio and video during Zoom meeting', 'video-conferencing-with-zoom-api' );
					?>
				</p>
				</div>
				<?php
			}

			$expires_at = get_option( 'zoom_wp_license_expire' );
			if ( $expires_at ) {
				$expires_at = strtotime( $expires_at );
				if ( time() > $expires_at ) {
					update_option( 'zoom_wp_license', 'expired', false );
				}
			}

			// Check user license status
			video_conferencing_zoom_api_check_customer_status();

			// Check mailchimp subscription status for admin
			video_conferencing_zoom_api_mc_is_user_subscribed();

			$zoom_wp_is_subscribed_to_mc = get_option( 'zoom_wp_is_subscribed_to_mc' );

			global $wp;
			$current_user = wp_get_current_user();

			if ( ! $zoom_wp_is_subscribed_to_mc || 'not_subscribed' == $zoom_wp_is_subscribed_to_mc ) :
				?>
			<div class="notice notice-error is-dismissible">
			<p>Your email <strong>(<?php echo esc_html( $current_user->user_email ); ?>)</strong> is not subscribed for the mailing list <a target="_blank" href="admin.php?page=zoom-video-conferencing-subscribe_updates">Zoom WordPress Integration Updates</a>. You will miss out on <strong>important plugin updates</strong>.</p>
			<p>
				<form method="POST">
					<button type="submit" name="zoom_wp_subscribed" class="button button-primary button-large" value="zoom_wp_subscribed">Subscribed Already</button>
					<button type="submit" name="zoom_wp_not_subscribe" class="button button-primary button-large" value="zoom_wp_not_subscribe">No, Thanks!</button>
					<?php wp_nonce_field( 'wp_zoom_subscription_verify', 'wp_zoom_subscription' ); ?>
				</form>
			</p>
			</div>
				<?php
			endif;
		}

		if ( ! video_conferencing_zoom_is_valid_license() ) :
			?>
			<div class="notice notice-error is-dismissible zoom-help-notice" data-notice="remove-license-notice">
			<p><strong><?php echo 'Please enter a valid license key in Zoom Meetings -> Settings -> Setup in order to activate plugin features and receive automatic updates. <br />Check your Licence status on the <a target="_blank" href="https://elearningevolve.com/my-account/">My Account page</a>'; ?></strong></p>
			</div>
			<?php
		endif;
	}
}

function video_conferencing_zoom_is_valid_license() {
	if ( is_multisite() && ! is_main_site() ) {
		$status = get_blog_option( get_main_site_id(), 'zoom_wp_license' );
		if ( 'valid' == $status ) {
			return true;
		}
	}

	$status = get_option( 'zoom_wp_license' );

	return 'valid' == $status;
}

/**
 * Print out option HTML elements for role selectors.
 *
 *
 * @since 4.14.0
 * @return array all user roles on the WP site
 */
function video_conferencing_zoom_wp_dropdown_roles( $selected ) {
	$r = '';

	$editable_roles = get_editable_roles();

	foreach ( $editable_roles as $role => $details ) {
		$name = translate_user_role( $details['name'] );
		// Preselect specified role.
		if ( in_array( $role, $selected, true ) ) {
			$r .= "\n\t<option selected='selected' value='" . esc_attr( $role ) . "'>$name</option>";
		} else {
			$r .= "\n\t<option value='" . esc_attr( $role ) . "'>$name</option>";
		}
	}

	echo $r;
}

/**
 * Creates the dropdown list for all capabilities in WordPress
 *
 *
 * @since 4.14.0
 * @return array all user capabilities on the WP site
 */
function video_conferencing_zoom_dropdown_user_cap( $saved_can_host ) {
	$wp_user_capabilities = array();
	$markup               = '';

	foreach ( get_editable_roles() as $role_name => $role_info ) {
		if ( 'subscriber' == $role_name || 'customer' == $role_name ) {
			continue;
		}
		foreach ( $role_info['capabilities'] as $cap_name => $cap_bool ) {
			if ( $cap_name ) {
				$wp_user_capabilities[ $cap_name ] = $cap_bool;
			}
		}
	}

	ksort( $wp_user_capabilities );

	foreach ( $wp_user_capabilities as $capability => $value ) {
		$markup .= '<option value="' . esc_attr( $capability ) . '" ' . ( in_array( $capability, $saved_can_host, true ) ? 'selected' : '' ) . '>
			' . esc_html( $capability ) . ' 
		</option>';
	}

	echo $markup;
}

/**
 * Checks whether the logged in user can be Zoom meeting host.
 *
 *
 * @since 4.14.0
 * @return bool True when logged in user can be a host
 */
function video_conferencing_zoom_can_zoom_host() {
	if ( is_user_logged_in() ) {
		$can_host_role       = (array) get_option( 'zoom_meeting_can_host_role', array() );
		$can_host_capability = (array) get_option( 'zoom_meeting_can_host_capability', array() );
		$user                = wp_get_current_user();
		$roles               = (array) $user->roles;

		if ( $can_host_capability ) {
			foreach ( $can_host_capability as $allowed_caps ) {
				if ( $user->has_cap( $allowed_caps ) ) {
					return 1;
				}
			}
		}

		if ( array_intersect( $can_host_role, $roles ) ) {
			return 1;
		}
	}

	return 0;
}

function video_conferencing_zoom_is_user_admin() {
	if ( is_user_logged_in() ) {
		$user  = wp_get_current_user();
		$roles = (array) $user->roles;
		if ( in_array( 'administrator', $roles ) ) {
			return 1;
		}
	}

	return 0;
}

function video_conferencing_zoom_is_meeting_host_email( &$args ) {
	if ( is_user_logged_in() ) {
		$host_users = video_conferencing_zoom_api_get_users();
		if ( $host_users ) {
			foreach ( $host_users as $host ) {
				if ( ! isset( $args['zoom_map_array']['host_id'] ) || $args['zoom_map_array']['host_id'] != $host->id ) {
					continue;
				}

				$args['host_email'] = $host->email;
				$user_zoom_hostid   = get_user_meta( $args['user_data']->ID, 'user_zoom_hostid', true );
				if ( isset( $args['user_data']->user_email ) && $args['user_data']->user_email == $host->email ) {
					return 1;
				} elseif ( is_array( $user_zoom_hostid ) && in_array( $host->id, $user_zoom_hostid ) ) {
					return 1;
				}
			}
		}

		if ( get_user_meta( $args['user_data']->ID, 'zoom_meeting_id_' . esc_attr( $args['meeting_id'] ), true ) ) {
			return 1;
		}
	}

	return 0;
}

function video_conferencing_zoom_show_recording_video( $args ) {
	$is_autoplay        = ' autoplay muted ';
	$zoom_recording_via = get_option( 'zoom_recording_via' );
	if ( 1 == $args['remove_zoom_autoplay_recording'] ) {
		$is_autoplay = null;
	}

	if ( 'vimeo' == $zoom_recording_via && isset( $args['recording_vimeo_id'] ) ) {
		// Call WP vimeo videos plugin
		$recording_markup = '<div class="recording-container">' . do_shortcode( '[dgv_vimeo_video id="' . esc_attr( $args['recording_vimeo_id'] ) . '"]' ) . '</div>';
	} else {
		$recording_markup = '
		<div class="recording-container">
			<video class="zoom-recording" preload ' . $is_autoplay . ' oncontextmenu="return false;" controls controlsList="nodownload">
			<source src="' . esc_url( $args['recording_url'] ) . '" type="video/mp4">
			Your browser does not support the video tag.
			</video>
		</div>';
	}

	return $recording_markup;
}

function video_conferencing_zoom_generate_signature( $meeting_number, $meeting_role, $zoom_api_key ) {

	$role            = $meeting_role;
	$meeting_number  = $meeting_number;
	$zoom_api_key    = $zoom_api_key;
	$zoom_api_secret = esc_html( get_option( 'zoom_api_secret' ) );

	//time in milliseconds (or close enough) & 20 mins buffer to prevent signature expired error
	$time = time() * 1000 - 1200000;

	$data = base64_encode( $zoom_api_key . $meeting_number . $time . $role );

	$hash = hash_hmac( 'sha256', $data, $zoom_api_secret, true );

	$_sig = $zoom_api_key . '.' . $meeting_number . '.' . $time . '.' . $role . '.' . base64_encode( $hash );

	//return signature, url safe base64 encoded
	return rtrim( strtr( base64_encode( $_sig ), '+/', '-_' ), '=' );
}

function video_conferencing_zoom_show_cloud_recordings( $args ) {
	if ( 1 == $args['zoom_not_show_recordings'] ) {
		return;
	}

	if ( $args['is_webinar'] ) {
		$type = 'zoom_api_webinar_options';
	} else {
		$type = 'zoom_api_meeting_options';
	}

	wp_register_style( 'video-conferencing-with-zoom-api-datatables-style', 'https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css', array(), ZVCW_ZOOM_PLUGIN_VER );
	wp_enqueue_style( 'video-conferencing-with-zoom-api-datatables-style' );
	wp_register_script( 'video-conferencing-with-zoom-api-datatables-script', 'https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js', array( 'jquery', 'jquery-ui-draggable' ), ZVCW_ZOOM_PLUGIN_VER, false );
	wp_enqueue_script( 'video-conferencing-with-zoom-api-datatables-script' );
	wp_add_inline_script(
		'video-conferencing-with-zoom-api-datatables-script',
		'
		jQuery(".zoom-window-wrap [name=\'select_recording\']").click(function() {
			try {
				jQuery(".recordingModal").draggable({cursor: "option"});
				jQuery.fn.dataTable.ext.errMode = "none";
				jQuery(".recordingModal .recordings-list").DataTable({
					oLanguage: {
						"sEmptyTable": "' . __( 'No recording available at the moment. Please try again later', 'video-conferencing-with-zoom-api' ) . '"
					},
					retrieve: true,
					order: [[ 0, "asc" ], [ 1, "desc" ]],
					iDisplayLength: 4,
					aLengthMenu: [[4, 8, 16, 48, -1], [4, 8, 16, 48, "All"]],
					ajax: "' . esc_url( admin_url( 'admin-ajax.php' ) ) . '?security=' . wp_create_nonce( 'show_recording' ) . '&action=zoom_wp_show_all_recordings&type=' . esc_html( $type ) . '&mn=' . esc_html( $args['type_id'] ) . '",
					columns: [
						{ data: "no", title: "#" },
						{ data: "recording_end", title: "' . __( 'Recording Date', 'video-conferencing-with-zoom-api' ) . '" },
						{ "orderable": false, data: "recording_url", title: "' . __( 'Action', 'video-conferencing-with-zoom-api' ) . '" },
					]
				});
			} catch(err) {
				console.log(err);
			}
		});'
	);

	if ( ! $args['recording_url'] ) {
		$args['display_back_btn'] = "style='display:none;'";
	}

	$back_to_meeting_btn = '<button ' . $args['display_back_btn'] . ' name="back_to_meeting" class="zoom-link back-to-zoom-meeting ' . esc_attr( $args['zoom_btn_css_class'] ) . '">' . __( 'Back to Meeting', 'video-conferencing-with-zoom-api' ) . '</button>';

	$record_button = '<form class="zoom-wp-form" method="POST">' . wp_nonce_field( 'cloud_recording_verify_nonce', 'cloud_recording_nonce' ) .
		$back_to_meeting_btn . '<button onclick="event.preventDefault();" type="submit" name="select_recording" value="1" data-toggle="modal" data-target="#recordingModal' . esc_attr( $args['type_id'] ) . '" class="play-recoding-btn zoom-link ' . esc_attr( $args['zoom_btn_css_class'] ) . '"><span class="dashicons dashicons-video-alt2"></span>' . __( 'Recordings', 'video-conferencing-with-zoom-api' ) . '</button></form>
		<div class="modal fade recordingModal" id="recordingModal' . esc_attr( $args['type_id'] ) . '" tabindex="-1" role="dialog" aria-labelledby="Zoom Cloud Recordings" aria-hidden="true">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">' . __( 'Select Recording', 'video-conferencing-with-zoom-api' ) . '</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<table class="display recordings-list" style="width:100%"></table>
				</div>
				<div class="modal-footer">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
					</button>
				</div>
				</div>
			</div>
		</div>';
	return $record_button;
}

function video_conferencing_zoom_prepare_args( $args ) {
	$args['thankyou_redirect']                  = get_option( 'zoom_meeting_thankyou_redirect' );
	$args['join_app_target']                    = get_option( 'zoom_meeting_join_app_target' );
	$args['remove_join_via_app_pass']           = get_option( 'zoom_join_via_app_pass' );
	$args['remove_zoom_auto_display_recording'] = get_option( 'zoom_auto_display_recording' );
	$args['hide_join_before_time']              = get_option( 'zoom_join_before_time' );
	$args['hide_register_for_meeting']          = get_option( 'zoom_register_for_meeting' );
	$args['global_web_disable']                 = get_option( 'zoom_join_via_web_disable' );
	$args['global_hide_join_via_app']           = get_option( 'zoom_help_text_disable' );
	$args['zoom_window_size']                   = get_option( 'zoom_window_size' );
	$args['zoom_join_via_web_text']             = get_option( 'zoom_join_via_web_text' );
	$args['zoom_join_via_app_text']             = get_option( 'zoom_join_via_app_text' );
	$args['zoom_btn_css_class']                 = get_option( 'zoom_btn_css_class' );
	$args['zoom_not_show_recordings']           = get_option( 'zoom_hide_recordings' );
	$args['zoom_not_show_countdown']            = get_option( 'zoom_hide_countdown_timer' );
	$args['zoom_not_scroll_window']             = get_option( 'zoom_disable_scroll_to_window' );
	$args['zoom_meeting_autojoin']              = get_option( 'zoom_meeting_autojoin' );
	$args['user_data']                          = get_userdata( get_current_user_id() );
	$args['is_admin']                           = video_conferencing_zoom_can_zoom_host();
	$args['zoom_meeting_title']                 = ( $args['title'] ? $args['title'] : get_option( 'zoom_meeting_title' ) );
	$args['zoom_lang_select']                   = get_option( 'zoom_meeting_lang_select' );
	$args['attendee_name_format']               = get_option( 'zoom_meeting_attendee_name_format' );
	$args['zoom_not_show_calendar_link']        = get_option( 'zoom_meeting_calendar_link' );

	switch ( $args['attendee_name_format'] ) {
		case '1':
			$args['attendee_name_placeholder'] = __( 'First Name', 'video-conferencing-with-zoom-api' );
			break;
		case '2':
			$args['attendee_name_placeholder'] = __( 'User Name', 'video-conferencing-with-zoom-api' );
			break;
		case '3':
			$args['attendee_name_placeholder'] = __( 'Email', 'video-conferencing-with-zoom-api' );
			break;
		default:
			$args['attendee_name_placeholder'] = __( 'First and Last Name', 'video-conferencing-with-zoom-api' );
	}

	// If meeting data missing from WP then pull from Zoom API
	if ( ! isset( $args['zoom_map_array'] )
		|| ! isset( $args['zoom_map_array']['time'] )
		|| ! isset( $args['zoom_map_array']['password'] )
		|| ! isset( $args['zoom_map_array']['host_id'] )
		|| ! isset( $args['zoom_map_array']['join_url'] )
		|| ( 1 == $args['zoom_not_show_calendar_link'] && ! isset( $args['zoom_map_array']['calendar_link'] ) )
		) {
		try {
			if ( $args['is_webinar'] ) {
				$meeting_data = json_decode( zoom_conference()->getWebinarInfo( $args['type_id'] ) );
				$type         = 'zoom_api_webinar_options';
			} else {
				$meeting_data = json_decode( zoom_conference()->getMeetingInfo( $args['type_id'] ) );
				$type         = 'zoom_api_meeting_options';
			}

			if ( ! $meeting_data ) {
				return $args;
			}

			if ( isset( $meeting_data->code ) ) {
				throw new Exception( $meeting_data->message );
			}

			$args['zoom_map_array'] = video_conferencing_zoom_set_wp_cache( $meeting_data, $type, $args['zoom_map_array'] );

		} catch ( Exception $e ) {
			if ( current_user_can( 'manage_options' ) ) {
				echo $e->getMessage();
			}
			video_conferencing_zoom_log_error( $e->getMessage() );
		}
	}

	// Check whether to show the meeting countdown
	if ( isset( $args['zoom_map_array']['time'] ) && $args['zoom_map_array']['time'] ) {
		try {
			$dt                            = new DateTime( $args['zoom_map_array']['time'] );
			$meeting_zone                  = $dt->getTimezone()->getName();
			$args['meeting_timezone_time'] = video_conferencing_zoom_convert_time_to_local( 'now', $meeting_zone );
			$args['meeting_time_check']    = video_conferencing_zoom_convert_time_to_local( $args['zoom_map_array']['time'], $meeting_zone );

			// Show meeting countdown
			if ( $args['meeting_time_check'] > $args['meeting_timezone_time'] ) {
				$args['show_countdown'] = 1;
			}
		} catch ( Exception $e ) {
			if ( current_user_can( 'manage_options' ) ) {
				echo $e->getMessage();
			}
			video_conferencing_zoom_log_error( $e->getMessage() );
		}
	}

	// See if user wants to join meeting
	if ( isset( $_POST['join_iframe'] ) && isset( $_POST['meeting_nonce_field'] )
		&& wp_verify_nonce( $_POST['meeting_nonce_field'], 'meeting_nonce' ) ) {
		$args['join_meeting'] = 1;
	}

	// Set auto join meeting mode if enabled
	if ( video_conferencing_zoom_is_autologin( $args ) ) {
		$args['auto_join'] = 1;

		// Auto fill name & password if set on auto join
		if ( isset( $args['zoom_map_array']['password'] ) ) {
			$_POST['meeting_pwd'] = $args['zoom_map_array']['password'];
		}
	}

	if ( ! isset( $_POST['join_iframe'] ) && isset( $_GET['leave'] ) ) {
		$args['auto_join'] = 0;
	}

	// Set username and email
	if ( isset( $args['user_data']->user_login ) ) {
		switch ( $args['attendee_name_format'] ) {
			case '1':
				$attendee_name_by_format = ( $args['user_data']->first_name ? $args['user_data']->first_name : $args['user_data']->display_name );
				break;
			case '2':
				$attendee_name_by_format = ( $args['user_data']->user_login ? $args['user_data']->user_login : $args['user_data']->display_name );
				break;
			case '3':
				$attendee_name_by_format = ( $args['user_data']->user_email ? $args['user_data']->user_email : $args['user_data']->display_name );
				break;
			default:
				$attendee_name_by_format = ( $args['user_data']->first_name ? $args['user_data']->first_name . ' ' . $args['user_data']->last_name : $args['user_data']->display_name );
		}

		$args['display_name'] = trim( apply_filters( 'video_conferencing_zoom_attendee_name_display', ( isset( $_POST['display_name'] ) ? $_POST['display_name'] : $attendee_name_by_format ) ) );
		$args['user_email']   = trim( apply_filters( 'video_conferencing_zoom_attendee_email_display', $args['user_data']->user_email ) );
	} else {
		$args['display_name'] = trim( apply_filters( 'video_conferencing_zoom_attendee_name_display', ( isset( $_POST['display_name'] ) ? $_POST['display_name'] : $args['display_name'] ) ) );
		$args['user_email']   = trim( apply_filters( 'video_conferencing_zoom_attendee_email_display', ( isset( $_POST['meeting_email'] ) ? $_POST['meeting_email'] : $args['user_email'] ) ) );
	}

	if ( ! filter_var( $args['user_email'], FILTER_VALIDATE_EMAIL ) ) {
		$args['user_email'] = '';
	}

	// Set join via app link
	if ( 1 != $args['global_hide_join_via_app'] || 1 == $args['show_join_app'] && isset( $args['zoom_map_array']['join_url'] ) ) {
		if ( isset( $args['user_data']->ID ) ) {
			// If the logged in user registered meeting join url set
			$registrant_url = get_user_meta( $args['user_data']->ID, 'zoom_registrant_url_' . $args['type_id'], true );
			if ( $registrant_url ) {
				$args['zoom_map_array']['join_url'] = esc_url( $registrant_url );
			}
		}

		if ( isset( $args['zoom_map_array']['join_url'] ) ) {
			if ( 1 == $args['remove_join_via_app_pass'] ) {
				$args['zoom_map_array']['join_url'] = remove_query_arg( 'pwd', $args['zoom_map_array']['join_url'] );
			}

			if ( 1 != $args['join_app_target'] ) {
				$args['join_app_target'] = '_self';
			} else {
				$args['join_app_target'] = '_blank';
			}

			$args['join_via_app'] = '<button type="submit" onclick="event.preventDefault(); window.open(\'' . esc_url( $args['zoom_map_array']['join_url'] ) . '\', \'' . $args['join_app_target'] . '\');" class="zoom-link join-link ' . esc_attr( $args['zoom_btn_css_class'] ) . '">' . ( $args['zoom_join_via_app_text'] ? __( esc_html( $args['zoom_join_via_app_text'] ), 'video-conferencing-with-zoom-api' ) : __( 'Join via App', 'video-conferencing-with-zoom-api' ) ) . '</button>';
		}
	}

	return $args;
}

// Check whether to display meeting countdown
function video_conferencing_zoom_is_countdown( &$args ) {
	// Do not show meeting countdown if meeting joined or started by host
	if ( ( isset( $_POST['join_early'] ) && isset( $_POST['meeting_nonce_field'] )
		&& wp_verify_nonce( $_POST['meeting_nonce_field'], 'meeting_nonce' ) )
		|| $args['join_meeting'] || isset( $args['zoom_map_array']['started'] )
		|| isset( $_GET['join'] ) || isset( $_POST['play_recording'] ) || 1 == $args['zoom_not_show_countdown'] ) {
		$args['show_countdown']  = 0;
		$args['is_meeting_view'] = 1;
	}

	return 1 == $args['show_countdown'];
}

// Check whether to play meeting recording
function video_conferencing_zoom_is_recoding_play( $args ) {
	$args['remove_zoom_autoplay_recording'] = get_option( 'zoom_autoplay_recording' );

	if ( isset( $args['zoom_map_array']['past_recordings'][0]['vimeo_id'] ) ) {
		// Zoom Meeting First Vimeo Recording ID
		$vimeo_id = $args['zoom_map_array']['past_recordings'][0]['vimeo_id'];
	}

	if ( isset( $args['zoom_map_array']['past_recordings'][0]['recording_url'] ) ) {
		// Zoom Meeting First Cloud Recording
		$zoom_recording_url = $args['zoom_map_array']['past_recordings'][0]['recording_url'];
	}

	/* If rendering the latest meeting recording shortcode */
	if ( isset( $args['is_only_recording'] ) ) {
		if ( $args['play_url'] ) {
			// If specific recording set in shortcode param
			$zoom_recording_url = str_replace( '/play/', '/download/', $args['play_url'] );

			// Check if user has inserted a link
			if ( strip_tags( $zoom_recording_url ) != $zoom_recording_url ) {
				$dom = new DOMDocument;
				$dom->loadHTML( $zoom_recording_url );
				$xpath = new DOMXPath( $dom );
				$nodes = $xpath->query( '//a/@href' );
				foreach ( $nodes as $href ) {
					$zoom_recording_url = $href->nodeValue;
				}
			}
		}

		if ( isset( $zoom_recording_url ) ) {
			$jwt                   = zoom_conference()->generateJWTKey(); // Append JWT access token for private recording
			$args['recording_url'] = $zoom_recording_url . '?access_token=' . $jwt;
		}

		if ( isset( $vimeo_id ) ) {
			$args['recording_vimeo_id'] = $vimeo_id;
		}

		return $args;
	}

	/* If rendering the recording button on the meeting page */
	if ( 1 != $args['zoom_not_show_recordings'] ) {
		if ( isset( $_POST['play_recording'] ) ) {
			// On watch recording button click from recordings popup
			if ( isset( $_POST['vimeo_rec_id'] ) && $_POST['vimeo_rec_id'] ) {
				$args['recording_vimeo_id'] = $_POST['vimeo_rec_id'];
			}

			if ( $_POST['play_recording_url'] ) {
				$args['recording_url'] = $_POST['play_recording_url'];
			}
		} elseif ( 1 != $args['remove_zoom_auto_display_recording'] && ! $args['is_meeting_view'] && isset( $args['zoom_map_array']['ended'] ) ) {
			/* If Auto load recording after meeting ended condition */
			if ( isset( $zoom_recording_url ) ) {
				$jwt                   = zoom_conference()->generateJWTKey(); // Append JWT access token for private recording
				$args['recording_url'] = $zoom_recording_url . '?access_token=' . $jwt;
			}

			if ( isset( $vimeo_id ) ) {
				$args['recording_vimeo_id'] = $vimeo_id;
			}
		}
	}

	// Back to meeting button click from recordings view
	if ( isset( $_POST['back_to_meeting'] ) ) {
		$args['recording_url'] = '';
	}

	return $args;
}

function video_conferencing_zoom_is_autologin( $args ) {
	if ( is_user_logged_in() && $args['zoom_meeting_autojoin'] ) {
		if ( $args['zoom_map_array'] && isset( $args['zoom_map_array']['ld_group_autojoin'] ) ) {
			return apply_filters( 'zoom_wp_is_ld_group_user', $args );
		}
		return true;
	}

	return false;
}

// Set cache in WP from Zoom Meeting/Webinar options
function video_conferencing_zoom_set_wp_cache( $meeting_data, $type, $args = array() ) {
	if ( ! $args ) {
		$args = array();
	}

	if ( isset( $meeting_data->start_time ) ) {
		$args['time'] = video_conferencing_zoom_convert_time_to_local( $meeting_data->start_time, $meeting_data->timezone );
	} else {
		if ( isset( $args['time'] ) ) {
			unset( $args['time'] );
		}
	}

	if ( isset( $meeting_data->type ) && ( 1 == $meeting_data->type || 4 == $meeting_data->type ) ) {
		$args['time'] = '';
	}

	if ( isset( $meeting_data->password ) ) {
		$args['password'] = esc_html( $meeting_data->password );
	} else {
		$args['password'] = '';
	}

	if ( isset( $meeting_data->host_id ) ) {
		$args['host_id'] = $meeting_data->host_id;
	}

	if ( isset( $meeting_data->topic ) ) {
		$args['topic'] = $meeting_data->topic;
	}

	if ( isset( $meeting_data->join_url ) ) {
		$args['join_url'] = $meeting_data->join_url;
	}

	if ( isset( $meeting_data->registration_url ) ) {
		$args['registration_url'] = $meeting_data->registration_url;
	} else {
		if ( isset( $args['registration_url'] ) ) {
			unset( $args['registration_url'] );
		}
	}

	// Set recurring meeting check
	if ( 8 == $meeting_data->type ) {
		$args['is_recurring_meeting'] = 'on';
	} else {
		if ( isset( $args['is_recurring_meeting'] ) ) {
			unset( $args['is_recurring_meeting'] );
		}
	}

	if ( isset( $meeting_data->status ) && 'started' == $meeting_data->status ) {
		$args['started'] = 1;
		if ( isset( $args['ended'] ) ) {
			unset( $args['ended'] );
		}
	} else {
		if ( isset( $args['started'] ) ) {
			unset( $args['started'] );
		}
	}

	// Save Add to Google Calendar Link
	$zoom_not_show_calendar_link = get_option( 'zoom_meeting_calendar_link' );
	if ( 1 == $zoom_not_show_calendar_link ) {
		$args['calendar_link'] = wp_kses( zoom_wp_make_google_calendar_link( $meeting_data ), 'br' );
	}

	// Cache meeting options
	update_post_meta( $meeting_data->id, sanitize_text_field( $type ), $args );

	return $args;
}

// Unset cache in WP of Zoom Meeting/Webinar options
function video_conferencing_zoom_unset_wp_cache( $meeting_id, $type, $zoom_map_array = array() ) {
	if ( ! $zoom_map_array ) {
		$zoom_map_array = get_post_meta( $meeting_id, $type, true );
		if ( ! $zoom_map_array ) {
			$zoom_map_array = array();
		}
	}

	if ( isset( $zoom_map_array['time'] ) ) {
		unset( $zoom_map_array['time'] );
	}
	if ( isset( $zoom_map_array['password'] ) ) {
		unset( $zoom_map_array['password'] );
	}
	if ( isset( $zoom_map_array['join_url'] ) ) {
		unset( $zoom_map_array['join_url'] );
	}
	if ( isset( $zoom_map_array['registration_url'] ) ) {
		unset( $zoom_map_array['registration_url'] );
	}
	if ( isset( $zoom_map_array['is_recurring_meeting'] ) ) {
		unset( $zoom_map_array['is_recurring_meeting'] );
	}
	if ( isset( $zoom_map_array['started'] ) ) {
		unset( $zoom_map_array['started'] );
	}
	if ( isset( $zoom_map_array['past_recordings'] ) ) {
		# Recording is being served via Vimeo
		if ( video_conferencing_zoom_recording_via_vimeo() ) {
			// Only remove past recordings that are not uploaded to Vimeo
			foreach ( $zoom_map_array['past_recordings'] as $key => $recording ) {

				$exist = 1; // Whether recording exist on Vimeo

				if ( isset( $recording['vimeo_id'] ) ) {
					$exist = video_conferencing_zoom_check_vimeo_exist( $recording['vimeo_id'] );
					// Video deleted from Vimeo so remove from WP as well
					if ( ! $exist ) {
						$zoom_map_array['past_recordings'][ $key ]['vimeo_removed'] = 1;
						unset( $zoom_map_array['past_recordings'][ $key ]['vimeo_id'] );
					}
				}
			}
		} else {
			// Using Zoom cloud method fetch new recordings list
			unset( $zoom_map_array['past_recordings'] );
		}
	}

	// Old params for a single recording removed in v4.8.0
	if ( isset( $zoom_map_array['recording_end'] ) ) {
		unset( $zoom_map_array['recording_end'] );
	}
	if ( isset( $zoom_map_array['recording_date'] ) ) {
		unset( $zoom_map_array['recording_date'] );
	}
	if ( isset( $zoom_map_array['recording_url'] ) ) {
		unset( $zoom_map_array['recording_url'] );
	}
	if ( isset( $zoom_map_array['recording_id'] ) ) {
		unset( $zoom_map_array['recording_id'] );
	}

	update_post_meta( $meeting_id, sanitize_text_field( $type ), $zoom_map_array );
}

// Update Meeting List in WP after Meeting Create/Update
function video_conferencing_zoom_update_meetings_list( $meeting_data, $host_id = false, $delete = false ) {
	global $wpdb;
	$type = null;

	if ( ! $delete ) {
		$meeting_data = (object) $meeting_data;
		$host_id      = $meeting_data->host_id;
		$meeting_id   = $meeting_data->id;
		$type         = $meeting_data->type;
	} else {
		$meeting_id = $meeting_data;

		// Remove meeting options and associated user data on meeting delete
		$wpdb->query( $wpdb->prepare( "DELETE FROM $wpdb->usermeta WHERE meta_key = 'zoom_meeting_id_%d'", array( $meeting_id ) ) );
		$wpdb->query( $wpdb->prepare( "DELETE FROM $wpdb->postmeta WHERE post_id = %d", array( $meeting_id ) ) );
	}

	$meetings = video_conferencing_zoom_api_get_meeting_list( $host_id );

	$update = 0;
	foreach ( $meetings as $key => $meeting ) {
		if ( $meeting->id == $meeting_id || ( 4 == $type && $meeting->type == $type ) ) {
			if ( $delete ) {
				if ( isset( $meetings[ $key ] ) ) {
					unset( $meetings[ $key ] );
				}
			} else {
				$meetings[ $key ] = $meeting_data;
			}

			$update = 1;
			break;
		}
	}

	if ( ! $update && ! $delete ) {
		$meetings[] = $meeting_data;
	}

	// Nothing to update so return
	if ( ! $meetings ) {
		return;
	}

	// Remove PMI meeting and then sort list
	foreach ( $meetings as $key => $meeting ) {
		if ( 4 == $meeting->type ) {
			$pmi_meeting = $meeting;
			if ( isset( $meetings[ $key ] ) ) {
				unset( $meetings[ $key ] );
			}
			break;
		}
	}

	// Sort meetings by create date
	usort(
		$meetings,
		function( $a, $b ) {
			$ad = strtotime( $a->created_at );
			$bd = strtotime( $b->created_at );

			if ( $ad == $bd ) {
				return 0;
			}

			return $ad > $bd ? -1 : 1;
		}
	);

	if ( $pmi_meeting ) {
		array_unshift( $meetings, $pmi_meeting );
	}

	update_option( 'zoom_api_meetings_list_' . esc_html( $host_id ), array_values( $meetings ), false );
}

function video_conferencing_zoom_log_error( $error ) {
	if ( ! get_transient( 'zoom_wp_api_error_logged' ) ) :
		$user_display_error = zoom_wp_translate_error_user_readable( $error );
		set_transient( 'zoom_wp_api_error_logged', $user_display_error, 15 );
		$pluginlog = dirname( plugin_dir_path( __FILE__ ) ) . '/logs/debug.log';
		$message   = '[' . date( 'Y-m-d H:i:s' ) . '] ' . esc_html( $user_display_error ) . PHP_EOL;
		error_log( $message, 3, $pluginlog );
	endif;
}

function zoom_wp_translate_error_user_readable( $error ) {
	switch ( $error ) {
		case "The Token's Signature resulted invalid when verified using the Algorithm: HmacSHA256":
			$error = __( 'Incorrect <strong>API Secret Key</strong> entered in Zoom Meetings -> Settings. Please recheck the steps mentioned <a target="_blank" href="https://elearningevolve.com/blog/zoom-api-keys">here</a>.', 'video-conferencing-with-zoom-api' );
			break;
		case 'Invalid access token.':
			$error = __( 'Incorrect <strong>API Key</strong> entered in Zoom Meetings -> Settings. Please recheck the steps mentioned <a target="_blank" href="https://elearningevolve.com/blog/zoom-api-keys">here</a>.', 'video-conferencing-with-zoom-api' );
			break;
	}

	return $error;
}

// Convert Zoom time to local
function video_conferencing_zoom_convert_time_to_local( $time, $zone ) {
	$date       = new DateTime( $time );
	$date       = $date->setTimezone( new DateTimeZone( $zone ) );
	$local_time = $date->format( 'Y-m-d\TH:i:sP' );

	return $local_time;
}

// Convert Zoom time to local in readable format
function video_conferencing_zoom_convert_time_to_local_readable( $time, $zone = false, $ref = false, $format = true ) {
	try {
		if ( ! $zone ) {
			$dt   = new DateTime( $time );
			$zone = $dt->getTimezone()->getName();
		}

		if ( $ref ) {
			$dt   = new DateTime( $ref );
			$zone = $dt->getTimezone()->getName();
		}

		$timezone = ! empty( $zone ) ? $zone : 'America/Los_Angeles';
		$tz       = new DateTimeZone( $timezone );
		if ( video_conferencing_zoom_is_valid_time_stamp( $time ) ) {
			$date = new DateTime();
			$date->setTimestamp( $time );
		} else {
			$date = new DateTime( $time );
		}

		$date->setTimezone( $tz );
		if ( $format ) {
			return $date->format( 'Y-m-d g:i:a ( P )' );
		} else {
			return $date;
		}
	} catch ( Exception $e ) {
	}
}

function video_conferencing_zoom_is_valid_time_stamp( $stamp ) {
	return ( is_numeric( $stamp ) && (int) $stamp == $stamp );
}

// Convert Zoom time to local
function video_conferencing_zoom_double_encode( $str ) {
	return rawurlencode( rawurlencode( $str ) );
}

// Get particular cloud recording based on sequence to be set in WP
function video_conferencing_recording_get_params_by_sequence( $cloud_recordings, $zoom_map_array ) {
	foreach ( $cloud_recordings as $rec ) {
		$rec = (array) $rec;
		if ( ! $rec['file_size'] || 'completed' != $rec['status'] ) {
			continue;
		}

		// Priority sequence for recording file type
		if ( 'shared_screen_with_gallery_view(CC)' == $rec['recording_type'] ) {
			$zoom_map_array['recording_id']  = esc_html( $rec['id'] );
			$zoom_map_array['recording_end'] = esc_html( $rec['recording_end'] );
			$zoom_map_array['recording_url'] = esc_url( $rec['download_url'] );
			$zoom_map_array['file_size']     = esc_html( $rec['file_size'] );
			break;
		} elseif ( 'shared_screen_with_speaker_view(CC)' == $rec['recording_type'] ) {
			$zoom_map_array['recording_id']  = esc_html( $rec['id'] );
			$zoom_map_array['recording_end'] = esc_html( $rec['recording_end'] );
			$zoom_map_array['recording_url'] = esc_url( $rec['download_url'] );
			$zoom_map_array['file_size']     = esc_html( $rec['file_size'] );
			break;
		} elseif ( 'shared_screen_with_gallery_view' == $rec['recording_type'] ) {
			$zoom_map_array['recording_id']  = esc_html( $rec['id'] );
			$zoom_map_array['recording_end'] = esc_html( $rec['recording_end'] );
			$zoom_map_array['recording_url'] = esc_url( $rec['download_url'] );
			$zoom_map_array['file_size']     = esc_html( $rec['file_size'] );
			break;
		} elseif ( 'shared_screen_with_speaker_view' == $rec['recording_type'] ) {
			$zoom_map_array['recording_id']  = esc_html( $rec['id'] );
			$zoom_map_array['recording_end'] = esc_html( $rec['recording_end'] );
			$zoom_map_array['recording_url'] = esc_url( $rec['download_url'] );
			$zoom_map_array['file_size']     = esc_html( $rec['file_size'] );
			break;
		} elseif ( 'gallery_view' == $rec['recording_type'] ) {
			$zoom_map_array['recording_id']  = esc_html( $rec['id'] );
			$zoom_map_array['recording_end'] = esc_html( $rec['recording_end'] );
			$zoom_map_array['recording_url'] = esc_url( $rec['download_url'] );
			$zoom_map_array['file_size']     = esc_html( $rec['file_size'] );
			break;
		} elseif ( 'speaker_view' == $rec['recording_type'] ) {
			$zoom_map_array['recording_id']  = esc_html( $rec['id'] );
			$zoom_map_array['recording_end'] = esc_html( $rec['recording_end'] );
			$zoom_map_array['recording_url'] = esc_url( $rec['download_url'] );
			$zoom_map_array['file_size']     = esc_html( $rec['file_size'] );
			break;
		} elseif ( 'active_speaker' == $rec['recording_type'] ) {
			$zoom_map_array['recording_id']  = esc_html( $rec['id'] );
			$zoom_map_array['recording_end'] = esc_html( $rec['recording_end'] );
			$zoom_map_array['recording_url'] = esc_url( $rec['download_url'] );
			$zoom_map_array['file_size']     = esc_html( $rec['file_size'] );
		}
	}

	return $zoom_map_array;
}

/**
 * Get Zoom users stored in WP options
 *
 */
if ( ! function_exists( 'video_conferencing_zoom_api_get_users' ) ) {
	function video_conferencing_zoom_api_get_users( $bypass_filter = false, $bypass_cache = false ) {
		//Check if any transient by name is available
		$users = get_option( 'zoom_api_users_list' );
		if ( ! $users || $bypass_cache ) {
			$encoded_users = zoom_conference()->listUsers();
			$decoded_users = json_decode( $encoded_users );

			if ( isset( $decoded_users->code ) ) {
				video_conferencing_zoom_log_error( $decoded_users->message );
				$users = false;
			} elseif ( ! $decoded_users ) {
				$users = false;
			} else {
				update_option( 'zoom_api_users_list', $decoded_users->users, false );
				$users = $decoded_users->users;
			}
		}

		if ( $bypass_filter ) {
			return $users;
		} else {
			return apply_filters( 'zoom_wp_host_users', $users );
		}
	}
}

/**
 * Get Zoom meetings list stored in WP options
 *
 */
if ( ! function_exists( 'video_conferencing_zoom_api_get_meeting_list' ) ) {
	function video_conferencing_zoom_api_get_meeting_list( $host_id, $bypass_cache = false ) {
		//Check if any transient by name is available
		$meetings = get_option( 'zoom_api_meetings_list_' . esc_html( $host_id ) );

		// Clear meeting cache if Sync meeting is true
		if ( ! $meetings || $bypass_cache ) {
			$list_meetings = zoom_conference()->listMeetings( $host_id );

			if ( isset( $list_meetings->code ) ) {
				video_conferencing_zoom_log_error( $list_meetings->message );
				$meetings = false;
			} elseif ( ! $list_meetings ) {
				$meetings = false;
			} else {
				foreach ( $list_meetings->meetings as $key => $meeting ) {
					try {
						// // Bug in Zoom API shows last occurrence start time for recurring
						if ( 8 == $meeting->type ) {
							$meeting_detail = json_decode( zoom_conference()->getMeetingInfo( $meeting->id ) );
							if ( isset( $meeting_detail->code ) ) {
								throw new Exception( $meeting_detail->message );
							}

							$list_meetings->meetings[ $key ] = $meeting_detail;
						}
					} catch ( Exception $e ) {
						video_conferencing_zoom_log_error( $e->getMessage() );
					}
				}

				update_option( 'zoom_api_meetings_list_' . esc_html( $host_id ), $list_meetings->meetings, false );
				$meetings = $list_meetings->meetings;
			}
		}

		return $meetings;
	}
}

if ( ! function_exists( 'zvc_get_timezone_options' ) ) {
	function zvc_get_timezone_options() {
		return array(
			'UTC'                            => 'UTC',
			'Pacific/Midway'                 => 'Pacific/Midway',
			'Pacific/Pago_Pago'              => 'Pacific/Pago_Pago',
			'Pacific/Honolulu'               => 'Pacific/Honolulu',
			'America/Anchorage'              => 'America/Anchorage',
			'America/Vancouver'              => 'America/Vancouver',
			'America/Los_Angeles'            => 'America/Los_Angeles',
			'America/Tijuana'                => 'America/Tijuana',
			'America/Phoenix'                => 'America/Phoenix',
			'America/Edmonton'               => 'America/Edmonton',
			'America/Denver'                 => 'America/Denver',
			'America/Mazatlan'               => 'America/Mazatlan',
			'America/Regina'                 => 'America/Regina',
			'America/Guatemala'              => 'America/Guatemala',
			'America/El_Salvador'            => 'America/El_Salvador',
			'America/Managua'                => 'America/Managua',
			'America/Costa_Rica'             => 'America/Costa_Rica',
			'America/Tegucigalpa'            => 'America/Tegucigalpa',
			'America/Winnipeg'               => 'America/Winnipeg',
			'America/Chicago'                => 'America/Chicago',
			'America/Mexico_City'            => 'America/Mexico_City',
			'America/Panama'                 => 'America/Panama',
			'America/Bogota'                 => 'America/Bogota',
			'America/Lima'                   => 'America/Lima',
			'America/Caracas'                => 'America/Caracas',
			'America/Montreal'               => 'America/Montreal',
			'America/New_York'               => 'America/New_York',
			'America/Indianapolis'           => 'America/Indianapolis',
			'America/Puerto_Rico'            => 'America/Puerto_Rico',
			'America/Santiago'               => 'America/Santiago',
			'America/Halifax'                => 'America/Halifax',
			'America/Montevideo'             => 'America/Montevideo',
			'America/Araguaina'              => 'America/Araguaina',
			'America/Argentina/Buenos_Aires' => 'America/Argentina/Buenos_Aires',
			'America/Sao_Paulo'              => 'America/Sao_Paulo',
			'Canada/Atlantic'                => 'Canada/Atlantic',
			'America/St_Johns'               => 'America/St_Johns',
			'America/Godthab'                => 'America/Godthab',
			'Atlantic/Cape_Verde'            => 'Atlantic/Cape_Verde',
			'Atlantic/Azores'                => 'Atlantic/Azores',
			'Etc/Greenwich'                  => 'Etc/Greenwich',
			'Atlantic/Reykjavik'             => 'Atlantic/Reykjavik',
			'Africa/Nouakchott'              => 'Africa/Nouakchott',
			'Europe/Dublin'                  => 'Europe/Dublin',
			'Europe/London'                  => 'Europe/London',
			'Europe/Lisbon'                  => 'Europe/Lisbon',
			'Africa/Casablanca'              => 'Africa/Casablanca',
			'Africa/Bangui'                  => 'Africa/Bangui',
			'Africa/Algiers'                 => 'Africa/Algiers',
			'Africa/Tunis'                   => 'Africa/Tunis',
			'Europe/Belgrade'                => 'Europe/Belgrade',
			'CET'                            => 'CET',
			'Europe/Oslo'                    => 'Europe/Oslo',
			'Europe/Copenhagen'              => 'Europe/Copenhagen',
			'Europe/Brussels'                => 'Europe/Brussels',
			'Europe/Berlin'                  => 'Europe/Berlin',
			'Europe/Amsterdam'               => 'Europe/Amsterdam',
			'Europe/Rome'                    => 'Europe/Rome',
			'Europe/Stockholm'               => 'Europe/Stockholm',
			'Europe/Vienna'                  => 'Europe/Vienna',
			'Europe/Luxembourg'              => 'Europe/Luxembourg',
			'Europe/Paris'                   => 'Europe/Paris',
			'Europe/Zurich'                  => 'Europe/Zurich',
			'Europe/Madrid'                  => 'Europe/Madrid',
			'Africa/Harare'                  => 'Africa/Harare',
			'Europe/Warsaw'                  => 'Europe/Warsaw',
			'Europe/Prague'                  => 'Europe/Prague',
			'Europe/Budapest'                => 'Europe/Budapest',
			'Africa/Tripoli'                 => 'Africa/Tripoli',
			'Africa/Cairo'                   => 'Africa/Cairo',
			'Africa/Johannesburg'            => 'Africa/Johannesburg',
			'Europe/Helsinki'                => 'Europe/Helsinki',
			'Africa/Nairobi'                 => 'Africa/Nairobi',
			'Europe/Sofia'                   => 'Europe/Sofia',
			'Europe/Istanbul'                => 'Europe/Istanbul',
			'Europe/Athens'                  => 'Europe/Athens',
			'Europe/Bucharest'               => 'Europe/Bucharest',
			'Asia/Nicosia'                   => 'Asia/Nicosia',
			'Asia/Beirut'                    => 'Asia/Beirut',
			'Asia/Damascus'                  => 'Asia/Damascus',
			'Asia/Jerusalem'                 => 'Asia/Jerusalem',
			'Asia/Amman'                     => 'Asia/Amman',
			'Europe/Moscow'                  => 'Europe/Moscow',
			'Asia/Baghdad'                   => 'Asia/Baghdad',
			'Asia/Kuwait'                    => 'Asia/Kuwait',
			'Asia/Riyadh'                    => 'Asia/Riyadh',
			'Asia/Bahrain'                   => 'Asia/Bahrain',
			'Asia/Qatar'                     => 'Asia/Qatar',
			'Asia/Aden'                      => 'Asia/Aden',
			'Africa/Khartoum'                => 'Africa/Khartoum',
			'Africa/Djibouti'                => 'Africa/Djibouti',
			'Africa/Mogadishu'               => 'Africa/Mogadishu',
			'Europe/Kiev'                    => 'Europe/Kiev',
			'Asia/Dubai'                     => 'Asia/Dubai',
			'Asia/Muscat'                    => 'Asia/Muscat',
			'Asia/Tehran'                    => 'Asia/Tehran',
			'Asia/Kabul'                     => 'Asia/Kabul',
			'Asia/Baku'                      => 'Asia/Baku',
			'Asia/Yekaterinburg'             => 'Asia/Yekaterinburg',
			'Asia/Tashkent'                  => 'Asia/Tashkent',
			'Asia/Calcutta'                  => 'Asia/Calcutta',
			'Asia/Kolkata'                   => 'Asia/Kolkata',
			'Asia/Kathmandu'                 => 'Asia/Kathmandu',
			'Asia/Novosibirsk'               => 'Asia/Novosibirsk',
			'Asia/Almaty'                    => 'Asia/Almaty',
			'Asia/Dacca'                     => 'Asia/Dacca',
			'Asia/Dhaka'                     => 'Asia/Dhaka',
			'Asia/Krasnoyarsk'               => 'Asia/Krasnoyarsk',
			'Asia/Bangkok'                   => 'Asia/Bangkok',
			'Asia/Saigon'                    => 'Asia/Saigon',
			'Asia/Jakarta'                   => 'Asia/Jakarta',
			'Asia/Irkutsk'                   => 'Asia/Irkutsk',
			'Asia/Shanghai'                  => 'Asia/Shanghai',
			'Asia/Hong_Kong'                 => 'Asia/Hong_Kong',
			'Asia/Taipei'                    => 'Asia/Taipei',
			'Asia/Kuala_Lumpur'              => 'Asia/Kuala_Lumpur',
			'Asia/Singapore'                 => 'Asia/Singapore',
			'Australia/Perth'                => 'Australia/Perth',
			'Asia/Yakutsk'                   => 'Asia/Yakutsk',
			'Asia/Seoul'                     => 'Asia/Seoul',
			'Asia/Tokyo'                     => 'Asia/Tokyo',
			'Australia/Darwin'               => 'Australia/Darwin',
			'Australia/Adelaide'             => 'Australia/Adelaide',
			'Asia/Vladivostok'               => 'Asia/Vladivostok',
			'Pacific/Port_Moresby'           => 'Pacific/Port_Moresby',
			'Australia/Brisbane'             => 'Australia/Brisbane',
			'Australia/Sydney'               => 'Australia/Sydney',
			'Australia/Hobart'               => 'Australia/Hobart',
			'Asia/Magadan'                   => 'Asia/Magadan',
			'SST'                            => 'SST',
			'Pacific/Noumea'                 => 'Pacific/Noumea',
			'Asia/Kamchatka'                 => 'Asia/Kamchatka',
			'Pacific/Fiji'                   => 'Pacific/Fiji',
			'Pacific/Auckland'               => 'Pacific/Auckland',
		);
	}
}

function video_conferencing_is_json( $string ) {
	json_decode( $string );
	return ( json_last_error() == JSON_ERROR_NONE );
}

function video_conferencing_zoom_api_mc_is_user_subscribed() {
	if ( isset( $_POST['wp_zoom_subscription'] )
		&& wp_verify_nonce( $_POST['wp_zoom_subscription'], 'wp_zoom_subscription_verify' ) ) {
		update_option( 'zoom_wp_is_subscribed_to_mc', 'user_action_performed', false );
		return;
	}

	$zoom_wp_is_subscribed_to_mc = get_option( 'zoom_wp_is_subscribed_to_mc' );
	if ( $zoom_wp_is_subscribed_to_mc ) {
		return;
	}

	// Remove unused options
	delete_option( 'zoom_subscribe_link' );
	delete_option( 'zoom_compatiblity_text_disable' );
	delete_option( 'zoom_alternative_join' );
	delete_option( 'zoom_width_meeting_window' );
	delete_option( 'zoom_height_meeting_window' );

	$current_user     = wp_get_current_user();
	$apikey           = 'af1c3c0631ce1f68425f3deee732d9c0-us3';
	$zoom_wp_group_id = 'aff5cefdb7';
	$dc               = substr( $apikey, strpos( $apikey, '-' ) + 1 ); // datacenter, it is the part of your api key - us5, us8 etc
	$userid           = md5( strtolower( $current_user->user_email ) );
	$auth             = base64_encode( 'user:' . $apikey );

	$data      = array(
		'apikey'        => $apikey,
		'email_address' => $current_user->user_email,
	);
	$json_data = json_encode( $data );

	if ( function_exists( 'curl_init' ) ) {
		$ch = curl_init();
		curl_setopt( $ch, CURLOPT_URL, 'https://' . $dc . '.api.mailchimp.com/3.0/lists/5f1f69bf5e/members/' . $userid );
		curl_setopt(
			$ch,
			CURLOPT_HTTPHEADER,
			array(
				'Content-Type: application/json',
				'Authorization: Basic ' . $auth,
			)
		);
		curl_setopt( $ch, CURLOPT_USERAGENT, 'PHP-MCAPI/2.0' );
		curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
		curl_setopt( $ch, CURLOPT_TIMEOUT, 10 );
		curl_setopt( $ch, CURLOPT_POST, true );
		curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, 'GET' );
		curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false );
		curl_setopt( $ch, CURLOPT_POSTFIELDS, $json_data );

		$result = curl_exec( $ch );

		if ( $result && video_conferencing_is_json( $result ) ) {
			$response = json_decode( $result );
			if ( isset( $response->interests ) ) {
				foreach ( $response->interests as $group_id => $subscribed ) {
					if ( ! $subscribed || $zoom_wp_group_id != $group_id ) {
						continue;
					}

					update_option( 'zoom_wp_is_subscribed_to_mc', esc_html( $group_id ), false );
					return;
				}
			}
		}
	}

	update_option( 'zoom_wp_is_subscribed_to_mc', 'not_subscribed', false );
}


function video_conferencing_zoom_api_check_customer_status() {
	$NNk66RxkVMu7qzR32bNnaGwnpz = false;
	$license                    = sanitize_text_field( get_option( 'zoom_wp_license_key_' . ZVCW_ZOOM_ITEM_ID ) );

	if ( 'valid' != get_option( 'zoom_wp_license' ) || get_transient( 'zoom_wp_license_eu6y5Tg26PTrYCkh' ) || get_option( 'zoom_wp_license_expire' ) || ! $license ) {
		return;
	}

	if ( is_multisite() && is_main_site() ) {
		$NNk66RxkVMu7qzR32bNnaGwnpz = true;
	}

	$api_params = array(
		'edd_action'   => 'check_license',
		'license'      => $license,
		'item_id'      => ZVCW_ZOOM_ITEM_ID,
		'url'          => home_url(),
		'is_multisite' => $NNk66RxkVMu7qzR32bNnaGwnpz,
	);

	$response = wp_remote_get(
		add_query_arg( $api_params, ZVCW_ZOOM_STORE_URL ),
		array(
			'timeout' => 30,
		)
	);

	if ( is_wp_error( $response ) ) {
		return false;
	}

	$y3ZheMh2StEwYYWG = json_decode( wp_remote_retrieve_body( $response ) );

	if ( ! isset( $y3ZheMh2StEwYYWG->license ) || $y3ZheMh2StEwYYWG->license != 'valid' ) {
		if ( isset( $y3ZheMh2StEwYYWG->error ) ) {
			$error = 'Error validating license key <strong> ' . $license . '</strong>, it is ' . $y3ZheMh2StEwYYWG->error . '.';
		} else {
			$error = 'Error validating license key <strong> ' . $license . '</strong>, it is either invalid or already used the maximum number of times.';
		}
		set_transient( 'zoom_wp_license_eu6y5Tg26PTrYCkh', $error );
	} else {
		delete_transient( 'zoom_wp_license_eu6y5Tg26PTrYCkh' );
	}

	if ( isset( $y3ZheMh2StEwYYWG->license ) ) {
		update_option( 'zoom_wp_license', $y3ZheMh2StEwYYWG->license, false );
	}

	if ( $y3ZheMh2StEwYYWG->expires ) {
		update_option( 'zoom_wp_license_expire', $y3ZheMh2StEwYYWG->expires, false );
	}
}

function video_conferencing_zoom_api_settings_link( $links ) {
	$settings_link  = '<a href="admin.php?page=zoom-video-conferencing-settings">' . __( 'Settings' ) . '</a>';
	$changelog_link = '<a target="_blank" class="thickbox" href="' . esc_url( self_admin_url( 'plugin-install.php?tab=plugin-information&plugin=wp-zoom-addon&section=changelog&TB_iframe=true&width=772&height=342' ) ) . '">'
		. __( 'Changelog' ) .
		'</a>';

	$f_request_link = '<a target="_blank" rel="noopener" href="https://elearningevolve.com/zoom-wp-plugin-feature-requests/">' . __( 'Feature Request' ) . '</a>';
	array_push( $links, $settings_link, $changelog_link, $f_request_link );
	return $links;
}

// Credits: https://gist.github.com/chrisknepper/cba89754a222695c37e9
// Get a link that will open a new event in Google Calendar with those details pre-filled
function zoom_wp_make_google_calendar_link( $meeting_data ) {
	try {
		$meeting_data->start_time = ( isset( $meeting_data->start_time ) ? $meeting_data->start_time : time() );
		$host_contact             = ( isset( $meeting_data->settings->contact_name ) ? $meeting_data->settings->contact_name : $meeting_data->host_email );
		$invitation               = $host_contact . ' ' . __( 'is inviting you to a scheduled Zoom meeting.', 'video-conferencing-with-zoom-api' ) . '<br /><br />';
		$invitation              .= __( 'Topic:', 'video-conferencing-with-zoom-api' ) . ' ' . $meeting_data->topic . '<br /><br />';
		$invitation              .= __( 'Time:', 'video-conferencing-with-zoom-api' ) . ' ' . video_conferencing_zoom_convert_time_to_local_readable( $meeting_data->start_time, 'UTC' ) . ' Universal Time UTC<br /><br />';
		$invitation              .= __( 'Join Zoom Meeting:', 'video-conferencing-with-zoom-api' ) . ' ' . $meeting_data->join_url . '<br /><br />';
		$invitation              .= __( 'Meeting ID:', 'video-conferencing-with-zoom-api' ) . ' ' . $meeting_data->id . '<br /><br />';
		if ( isset( $meeting_data->password ) ) {
			$invitation .= __( 'Passcode:', 'video-conferencing-with-zoom-api' ) . ' ' . $meeting_data->password . '<br /><br />';
		}
		$invitation .= __( 'Find your local number:', 'video-conferencing-with-zoom-api' ) . 'https://us02web.zoom.us/u/kWYh33q9k';

		$start_time = video_conferencing_zoom_convert_time_to_local_readable( $meeting_data->start_time, $meeting_data->timezone, false, false );
		if ( ! $start_time ) {
			$start_time = new DateTime( 'now' );
		}

		$arg_list[] = $meeting_data->topic;
		$arg_list[] = $start_time->format( 'U' );

		$end_time   = $start_time->add( new DateInterval( 'PT' . ( isset( $meeting_data->duration ) ? $meeting_data->duration : '15' ) . 'M' ) );
		$arg_list[] = $end_time->format( 'U' );

		$arg_list[] = $invitation;
		$arg_list[] = $meeting_data->join_url;

		$params = array( '&dates=', '/', '&details=', '&location=', '&sf=true&output=xml' );
		$url    = 'https://www.google.com/calendar/render?action=TEMPLATE&text=';
		for ( $i = 0; $i < count( $arg_list ); $i++ ) {
			$current = $arg_list[ $i ];
			if ( $i === 1 || $i === 2 ) {
				$t       = new DateTime( '@' . $current, new DateTimeZone( 'UTC' ) );
				$current = $t->format( 'Ymd\THis\Z' );
				unset( $t );
			} else {
				$current = urlencode( $current );
			}
			$url .= (string) $current . $params[ $i ];
		}

		return esc_url_raw( $url );
	} catch ( Exception $e ) {
	}
}
