<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/**
 * Shortcodes
 *
 * @author   Adeel
 * @modified 3.2.2
 * @since    2.0.0
 */

//Register shortcode and scripts
add_action( 'init', 'video_conferencing_zoom_register_shortcodes' );
add_action( 'init', 'video_conferencing_zoom_render_meeting_window', 0 );

// Shortcode added from main post content
add_action( 'template_redirect', 'video_conferencing_zoom_redirect_cache_on_content', 0 );

// Shortcode added from widgets
add_filter( 'widget_text', 'video_conferencing_zoom_redirect_cache_on_widget', 0 );

function video_conferencing_zoom_register_shortcodes() {
	if ( ! video_conferencing_zoom_is_valid_request() ) {
		return;
	}

	wp_register_style( 'video-conferencing-with-zoom-api-iframe', ZOOM_VIDEO_CONFERENCE_PLUGIN_FRONTEND_CSS_PATH . '/zoom-iframe.css', array(), ZVCW_ZOOM_PLUGIN_VER );

	add_shortcode( 'zoom_api_link', 'video_conferencing_zoom_render_shortcode' );
	add_shortcode( 'zoom_latest_recording', 'video_conferencing_zoom_show_latest_recording' );
	add_shortcode( 'zoom_recording', 'video_conferencing_zoom_show_latest_recording' );
}

// Shortcode added from main post content
function video_conferencing_zoom_redirect_cache_on_content() {
	if ( ! video_conferencing_zoom_is_valid_request() ) {
		return;
	}

	global $post;
	$content = ( isset( $post->post_content ) ? $post->post_content : false );

	video_conferencing_zoom_redirect_to_nocache( $content );
}

// Shortcode added from widgets
function video_conferencing_zoom_redirect_cache_on_widget( $content ) {
	if ( ! video_conferencing_zoom_is_valid_request() ) {
		return;
	}

	video_conferencing_zoom_redirect_to_nocache( $content );

	return $content;
}

/**
 * Rendering Meeting Display Shortcode Output
 * @return string
 */
function video_conferencing_zoom_render_shortcode( $atts, $content = null ) {
	if ( ! video_conferencing_zoom_is_valid_request() ) {
		return;
	}
	ob_start();

	// If styles fail to enqueue earlier then add them with the shortcode
	if ( ! wp_style_is( 'video-conferencing-with-zoom-api-iframe' ) ) {
		wp_enqueue_style( 'video-conferencing-with-zoom-api-iframe' );

		if ( is_rtl() ) {
			wp_add_inline_style( 'video-conferencing-with-zoom-api-iframe', 'body ul.zoom-meeting-countdown{ direction: ltr; }' );
		}
	}

	$args = shortcode_atts(
		array(
			'meeting_id'             => '',
			'is_webinar'             => '',
			'title'                  => '',
			'countdown_title'        => '',
			'join_via_app'           => '',
			'display_name'           => '',
			'user_email'             => '',
			'cloud_recording_button' => '',
			'recording_url'          => '',
			'display_back_btn'       => '',
			'id'                     => 'zoom-meeting-window',
			'class'                  => 'zoom-meeting-window',
			'hide_form'              => 0,
			'meeting_role'           => 0,
			'show_countdown'         => 0,
			'join_meeting'           => 0,
			'auto_join'              => 0,
			'is_meeting_view'        => 0,
			'show_join_web'          => 0,
			'show_join_app'          => 0,
		),
		$atts
	);

	$args['type_id'] = (float) str_replace( '-', '', str_replace( ' ', '', $args['meeting_id'] ) );

	if ( ! $args['type_id'] ) {
		$content = '<h4 class="no-meeting-id"><strong style="color:red;">' . __( 'ERROR: ', 'video-conferencing-with-zoom-api' ) . '</strong>' . __( 'Missing meeting or webinar id', 'video-conferencing-with-zoom-api' ) . '</h4>';
		return;
	}

	$content = '<div class="zoom-window-wrap"><div style="display:none;" class="loader"></div>';

	if ( $args['is_webinar'] ) {
		$args['option'] = 'zoom_api_webinar_options';
	} else {
		$args['option'] = 'zoom_api_meeting_options';
	}

	$args['zoom_map_array'] = get_post_meta( $args['type_id'], $args['option'], true );
	if ( ! $args['zoom_map_array'] ) {
		$args['zoom_map_array'] = array();
	}

	$args = video_conferencing_zoom_prepare_args( $args );

	if ( isset( $args['zoom_map_array']['enforce_login'] ) && ! is_user_logged_in() ) {
		$content .= video_conferencing_zoom_show_is_login();
	} elseif ( video_conferencing_zoom_is_countdown( $args ) ) {
		$content .= video_conferencing_zoom_show_countdown( $args );
	} else {
		$content .= video_conferencing_zoom_load_meeting( $args );
	}

	$content .= '</div>'; // Close zoom-window-wrap

	// Allow addon devs to perform filter before window rendering
	echo apply_filters( 'zoom_wp_before_window_content', $content );

	$display = ob_get_clean();

	return $display;
}

function video_conferencing_zoom_show_is_login() {
	return '<h3>' . esc_html__( 'Restricted access, please login to continue', 'video-conferencing-with-zoom-api' ) . '</h3>
		<a href="' . esc_url( wp_login_url( get_permalink() ) ) . '" alt="' . esc_attr__( 'Login', 'video-conferencing-with-zoom-api' ) . '">' .
		__( 'Login', 'video-conferencing-with-zoom-api' ) . '</a>';
}

function video_conferencing_zoom_load_meeting( $args ) {
	// Allow addon devs to perform action before window rendering
	do_action( 'zoom_wp_before_render_window' );

	if ( ! wp_style_is( 'wplms-style' ) && ! wp_script_is( 'bootstrap' ) && ! wp_script_is( 'bootstrap-modal' ) ) {
		wp_register_script( 'video-conferencing-with-zoom-api-modal', ZOOM_VIDEO_CONFERENCE_PLUGIN_FRONTEND_JS_PATH . '/bootstrap-modal.min.js', array( 'jquery' ), ZVCW_ZOOM_PLUGIN_VER, true );
		wp_enqueue_script( 'video-conferencing-with-zoom-api-modal' );
	}

	$content = '<div class="meeting-view ' . ( $args['zoom_window_size'] ? 'zoom-window-wrap-half' : '' ) . '">';
	if ( $args['zoom_meeting_title'] ) {
		$content .= '<h2>' . esc_html( $args['zoom_meeting_title'] ) . '</h2>';
	}

	// If join meeting not set check if recording should be played
	$args = video_conferencing_zoom_is_recoding_play( $args );

	// Show recording or render meeting
	if ( ! $args['recording_url'] ) {
		$valid = true;
		if ( 1 != $args['global_web_disable'] || 1 == $args['show_join_web'] ) {
			if ( isset( $args['zoom_map_array']['password'] ) && $args['zoom_map_array']['password'] ) {
				$is_password = esc_html( $args['zoom_map_array']['password'] );

				if ( isset( $_POST['meeting_pwd'] ) && $is_password != $_POST['meeting_pwd'] ) {
					$valid = false;
				}
			}

			if ( $args['auto_join'] || ( $args['join_meeting'] && $valid ) ) {

				do_action( 'zoom_wp_on_join_via_web', $args );

				// Load SDK
				$content .= video_conferencing_zoom_load_sdk_assets( $args );

				$args['hide_form'] = 1;
			}
		}

		// Display meeting join form
		$content .= video_conferencing_zoom_load_meeting_form( $args );
	} else {
		// Show Recordings button
		if ( 1 != $args['zoom_not_show_recordings'] ) {
			$content .= video_conferencing_zoom_show_cloud_recordings( $args );
			$content .= video_conferencing_zoom_show_recording_video( $args );
		}
	}

	$meeting_thankyou_message = str_replace( '{username}', esc_html( ucfirst( $args['display_name'] ) ), ( get_option( 'meeting_thankyou_message' ) ? get_option( 'meeting_thankyou_message' ) : '<h4><i>' . esc_html( ucfirst( $args['display_name'] ) ) . ', ' . __( 'Thank you for attending this meeting!', 'video-conferencing-with-zoom-api' ) ) . '</i></h4>' );
	$content                 .= '<div style="display:none;" class="zoom-thankyou-msg">' . do_shortcode( $meeting_thankyou_message ) . '</div>';
	$content                 .= '</div>';

	if ( ! video_conferencing_zoom_is_valid_license() && ( 1 == $args['meeting_role'] || video_conferencing_zoom_is_user_admin() ) ) {
		$content = '<p><strong>Please enter a valid license key in Zoom Meetings -> Settings -> Setup in order to activate plugin features and receive automatic updates. To check the licence status please visit your <a target="_blank" href="https://elearningevolve.com/my-account/">My Account page</a></strong>.</p>';
	}

	return $content;
}

function video_conferencing_zoom_load_sdk_assets( $args ) {
	$zoom_api_key         = esc_html( get_option( 'zoom_api_key' ) );
	$meeting_number       = $args['type_id'];
	$meeting_pwd          = esc_html( ( isset( $_POST['meeting_pwd'] ) ? $_POST['meeting_pwd'] : '' ) );
	$args['meeting_role'] = video_conferencing_zoom_is_meeting_host_email( $args );
	$args['meeting_role'] = ( $args['is_admin'] ? $args['is_admin'] : $args['meeting_role'] );

	// SDK join requires Webinar host email to start webinar
	if ( $args['is_webinar'] && $args['meeting_role'] && isset( $args['host_email'] ) ) {
		$args['user_email'] = $args['host_email'];
	}

	// Show Recordings button
	if ( 1 != $args['zoom_not_show_recordings'] ) {
		$args['cloud_recording_button'] = video_conferencing_zoom_show_cloud_recordings( $args );
	}

	wp_enqueue_script( 'video-conferencing-with-zoom-api-tool', ZOOM_VIDEO_CONFERENCE_PLUGIN_FRONTEND_JS_PATH . '/tool.js', array(), ZVCW_ZOOM_PLUGIN_VER, true );
	wp_register_script( 'video-conferencing-with-zoom-api-index', ZOOM_VIDEO_CONFERENCE_PLUGIN_FRONTEND_JS_PATH . '/index.js', array( 'video-conferencing-with-zoom-api-tool' ), ZVCW_ZOOM_PLUGIN_VER, true );
	wp_localize_script(
		'video-conferencing-with-zoom-api-index',
		'zvc_array',
		array(
			'zoom_api_key'      => esc_html( $zoom_api_key ),
			'signature'         => video_conferencing_zoom_generate_signature( $meeting_number, $args['meeting_role'], $zoom_api_key ),
			'display_name'      => esc_html( $args['display_name'] ),
			'user_email'        => esc_html( $args['user_email'] ),
			'meeting_number'    => esc_html( $meeting_number ),
			'meeting_pwd'       => esc_html( $meeting_pwd ),
			'lang'              => esc_html( video_conferencing_zoom_get_wp_locale_for_sdk() ),
			'meeting_role'      => esc_html( $args['meeting_role'] ),
			'is_webinar'        => esc_html( $args['is_webinar'] ),
			'is_ld_bind'        => isset( $args['zoom_map_array']['ld_lessons_bind'] ),
			'zvc_security'      => wp_create_nonce( '_nonce_zvc_security' ),
			'meeting_path'      => esc_url( add_query_arg( 'zoom_wp_action=render_zoom_meeting&', '', get_permalink() ) ),
			'no_scroll_window'  => $args['zoom_not_scroll_window'],
			'thankyou_redirect' => ( $args['thankyou_redirect'] ? esc_url_raw( get_permalink( $args['thankyou_redirect'] ) ) : 0 ),
		)
	);
	wp_enqueue_script( 'video-conferencing-with-zoom-api-index' );
	return $args['join_via_app'] . $args['cloud_recording_button'] .
		'<div id="' . esc_attr( $args['id'] ) . '" class="zoom-iframe-container ' . esc_attr( $args['class'] ) . '"></div>';
}

function video_conferencing_zoom_load_meeting_form( $args ) {
	$is_password = false;
	$error_msg   = false;
	if ( ! video_conferencing_zoom_is_autologin( $args ) ) {
		if ( isset( $args['zoom_map_array']['password'] ) && $args['zoom_map_array']['password'] ) {
			$is_password = esc_html( $args['zoom_map_array']['password'] );

			if ( isset( $_POST['meeting_pwd'] ) && $is_password != $_POST['meeting_pwd'] ) {
				$error_msg['password'] = __( 'Meeting password is incorrect', 'video-conferencing-with-zoom-api' );
			}
		}
	}

	// Show Recordings button
	if ( 1 != $args['zoom_not_show_recordings'] && ! $args['hide_form'] ) {
		$args['cloud_recording_button'] = video_conferencing_zoom_show_cloud_recordings( $args );
	}

	$output = '<div style="display:' . ( $args['hide_form'] ? 'none' : 'block' ) . ';">';

	if ( 1 != $args['global_web_disable'] || 1 == $args['show_join_web'] ) {
		$output .= '<form autocomplete="off" method="POST" class="meeting-form zoom-wp-form">' . wp_nonce_field( 'meeting_nonce', 'meeting_nonce_field' ) . '<div class="zoom-meeting-field"><div><input autocomplete="nope" type="' . ( isset( $args['zoom_map_array']['ld_lessons_bind'] ) && $args['display_name'] ? 'hidden' : 'text' ) . '" name="display_name" id="display_name" value="' . esc_attr( $args['display_name'] ) . '" placeholder="' . esc_html( $args['attendee_name_placeholder'] ) . '" class="input form-control" required /></div></div><div class="zoom-meeting-field"><input autocomplete="no-email" type="' . ( is_user_logged_in() || ! $args['is_webinar'] ? 'hidden' : 'email' ) . '" name="meeting_email" id="meeting_email" value="' . esc_attr( $args['user_email'] ) . '" maxLength="254" placeholder="' . __( 'Email', 'video-conferencing-with-zoom-api' ) . '" class="form-control" ' . ( $args['is_webinar'] && ! $args['user_email'] ? 'required' : '' ) . '/></div><div class="zoom-meeting-field"><span class="password-error">' . esc_html( isset( $error_msg['password'] ) ? $error_msg['password'] : '' ) . '</span><div class="zoom-meeting-field"><input autocomplete="new-password" ' . ( $is_password ? 'required' : '' ) . ' type="' . ( $is_password ? 'password' : 'hidden' ) . '" name="meeting_pwd" id="meeting_pwd" value="" placeholder="' . __( 'Meeting password', 'video-conferencing-with-zoom-api' ) . '" class="form-control ' . ( isset( $error_msg['password'] ) ? 'error ' : '' ) . '" /></div></div>' . ( $args['zoom_lang_select'] ? '<div class="zoom-meeting-field"><div><select name="meeting_lang" class="input form-control"><option value="en-US">English</option><option value="de-DE">German Deutsch</option><option value="es-ES">Spanish Español</option><option value="fr-FR">French Français</option><option value="jp-JP">Japanese 日本語</option><option value="pt-PT">Portuguese Portuguese</option><option value="ru-RU">Russian Русский</option><option value="zh-CN">Chinese 简体中文</option><option value="zh-TW">Chinese 繁体中文</option><option value="ko-KO">Korean 한국어</option><option value="vi-VN">Vietnamese Tiếng Việt</option><option value="it-IT">Italian italiano</option> </select></div></div>' : '' ) . '<button type="submit" name="join_iframe" class="zoom-link ' . esc_attr( $args['zoom_btn_css_class'] ) . '">' . ( $args['zoom_join_via_web_text'] ? __( esc_html( $args['zoom_join_via_web_text'] ), 'video-conferencing-with-zoom-api' ) : __( 'Join via Web', 'video-conferencing-with-zoom-api' ) ) . '</button></form>';
	}

	$output .= $args['join_via_app'];

	// Add to Google calendar button if enabled in settings
	if ( 1 == $args['zoom_not_show_calendar_link'] && isset( $args['zoom_map_array']['calendar_link'] ) ) {
		$output .= '<button type="submit" onclick="event.preventDefault(); window.open(\'' . esc_url( $args['zoom_map_array']['calendar_link'] ) . '\', \'_blank\');" class="zoom-link calendar-btn ' . esc_attr( $args['zoom_btn_css_class'] ) . '"><span class="dashicons dashicons-calendar-alt"></span>' . __( 'Mark', 'video-conferencing-with-zoom-api' ) . ' ' . ( $args['is_webinar'] ? __( 'Webinar', 'video-conferencing-with-zoom-api' ) : __( 'Meeting', 'video-conferencing-with-zoom-api' ) ) . '</button>';
	}

	$output .= $args['cloud_recording_button'] . '</div>';

	return $output;
}

function video_conferencing_zoom_show_countdown( $args ) {
	$nocache                    = time() + mt_rand( 0, mt_getrandmax() );
	$args['zoom_btn_css_class'] = get_option( 'zoom_btn_css_class' );
	$countdown_title            = apply_filters( 'zoom_wp_countdown_title', ( $args['countdown_title'] ? $args['countdown_title'] : get_option( 'zoom_countdown_title' ) ) );
	if ( $countdown_title ) {
		$countdown_title = '<h3 class="countdown_title">' . esc_html__( $countdown_title, 'video-conferencing-with-zoom-api' ) . '</h3>';
	}

	if ( $args['is_webinar'] ) {
		$register_text = __( 'Register', 'video-conferencing-with-zoom-api' );
	} else {
		$register_text = __( 'Register', 'video-conferencing-with-zoom-api' );
	}

	wp_register_script( 'video-conferencing-with-zoom-api-countdownjs', ZOOM_VIDEO_CONFERENCE_PLUGIN_FRONTEND_JS_PATH . '/jquery.downcount.min.js', array( 'jquery' ), ZVCW_ZOOM_PLUGIN_VER, true );
	wp_localize_script(
		'video-conferencing-with-zoom-api-countdownjs',
		'zvc_array',
		array(
			'meeting_number' => esc_html( $args['type_id'] ),
			'is_webinar'     => esc_html( $args['is_webinar'] ),
			'ajax_url'       => esc_url( admin_url( 'admin-ajax.php' ) ),
			'nonce'          => wp_create_nonce( 'ajax_nonce' ),
			'no_cache'       => $nocache,
		)
	);

	wp_enqueue_script( 'video-conferencing-with-zoom-api-countdownjs' );

	$output  = '<ul class="zoom-meeting-countdown" id="countdowns-' . esc_attr( $args['type_id'] ) . '" data-meeting-time="' . esc_attr( $args['zoom_map_array']['time'] ) . '" data-meeting-id="' . esc_attr( $args['type_id'] ) . '">';
	$output .= '<div class="register-meeting-btn">';
	if ( 1 != $args['hide_join_before_time'] ) {
		$output .= '<form class="zoom-wp-form" method="POST">' . wp_nonce_field( 'meeting_nonce', 'meeting_nonce_field' ) . '<button type="submit" name="join_early" class="zoom-link zoom-join-early' . esc_attr( $args['zoom_btn_css_class'] ) . '">' . __( 'Join Early', 'video-conferencing-with-zoom-api' ) . '</button></form>';
	}

	if ( 1 != $args['hide_register_for_meeting'] && isset( $args['zoom_map_array']['registration_url'] ) ) {
		if ( ! wp_script_is( 'bootstrap' ) && ! wp_script_is( 'bootstrap-modal' ) ) {
			wp_register_script( 'video-conferencing-with-zoom-api-modal', ZOOM_VIDEO_CONFERENCE_PLUGIN_FRONTEND_JS_PATH . '/bootstrap-modal.min.js', array( 'jquery' ), ZVCW_ZOOM_PLUGIN_VER, true );
			wp_enqueue_script( 'video-conferencing-with-zoom-api-modal' );
		}
		wp_add_inline_script(
			'video-conferencing-with-zoom-api-countdownjs',
			'jQuery(".registrationModal").on("hidden.bs.modal", function(){ location.reload(); });'
		);

		// Don't show registration button if user already registered
		if ( ! isset( $args['user_data']->ID ) || ! get_user_meta( $args['user_data']->ID, 'zoom_registrant_url_' . $args['type_id'], true ) ) {
			wp_enqueue_script( 'jquery-ui-draggable' );
			wp_add_inline_script(
				'jquery-ui-draggable',
				'
				jQuery(".zoom-window-wrap [data-target=\'#registrationModal' . esc_attr( $args['type_id'] ) . '\'").click(function() {
					try {
						jQuery(".registrationModal").draggable({cursor: "option"});
					} catch(err) {
						console.log(err);
					}
				});'
			);

			$output .= '<button  data-toggle="modal" data-target="#registrationModal' . esc_attr( $args['type_id'] ) . '" class="zoom-link ' . esc_attr( $args['zoom_btn_css_class'] ) . '">' . esc_html( $register_text ) . '</button>';
			$output .= '<div class="modal fade registrationModal" id="registrationModal' . esc_attr( $args['type_id'] ) . '" tabindex="-1" role="dialog" aria-labelledby="Zoom Registration" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
						<iframe src="' . esc_url( $args['zoom_map_array']['registration_url'] ) . '"></iframe>
					</div>
					<div class="modal-footer">
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
					</div>
					</div>
				</div>
			</div>';
		}
	}

	$output .= '</div>';

	$output .= $countdown_title .
		'<li>
            <span class="days">00</span>
            <p class="days_ref" data-translate-plural="' . esc_attr__( 'days', 'video-conferencing-with-zoom-api' ) . '" data-translate-single="' . esc_html__( 'day', 'video-conferencing-with-zoom-api' ) . '">' . esc_html__( 'days', 'video-conferencing-with-zoom-api' ) . '</p>
        </li>
        <li class="seperator">:</li>
        <li>
            <span class="hours">00</span>
            <p class="hours_ref" data-translate-plural="' . esc_attr__( 'hours', 'video-conferencing-with-zoom-api' ) . '" data-translate-single="' . esc_html__( 'hour', 'video-conferencing-with-zoom-api' ) . '">' . esc_html__( 'hours', 'video-conferencing-with-zoom-api' ) . '</p>
        </li>
        <li class="seperator">:</li>
        <li>
            <span class="minutes">00</span>
            <p class="minutes_ref" data-translate-plural="' . esc_attr__( 'minutes', 'video-conferencing-with-zoom-api' ) . '" data-translate-single="' . esc_html__( 'minute', 'video-conferencing-with-zoom-api' ) . '">' . esc_html__( 'minutes', 'video-conferencing-with-zoom-api' ) . '</p>
        </li>
        <li class="seperator">:</li>
        <li>
            <span class="seconds">00</span>
            <p class="seconds_ref" data-translate-plural="' . esc_attr__( 'seconds', 'video-conferencing-with-zoom-api' ) . '" data-translate-single="' . esc_html__( 'second', 'video-conferencing-with-zoom-api' ) . '">' . esc_html__( 'seconds', 'video-conferencing-with-zoom-api' ) . '</p>
		</li>
		<p class="redirected-text">' . __( 'Not redirected after countdown', 'video-conferencing-with-zoom-api' ) .
		', <a class="redirected-text" href="' . esc_url( add_query_arg( array( 'nocache' => $nocache ) ) ) . '">' . __( 'click here', 'video-conferencing-with-zoom-api' ) . '</a></p>
	</ul>';

	return $output;
}

/**
 * Rendering Latest Recording Display Shortcode Output
 * @return string
 */
function video_conferencing_zoom_show_latest_recording( $atts, $content = null ) {
	if ( ! video_conferencing_zoom_is_valid_request() ) {
		return;
	}

	// If styles fail to enqueue earlier then add them with the shortcode
	if ( ! wp_style_is( 'video-conferencing-with-zoom-api-iframe' ) ) {
		wp_enqueue_style( 'video-conferencing-with-zoom-api-iframe' );
	}

	$args = shortcode_atts(
		array(
			'meeting_id' => '',
			'is_webinar' => '',
			'play_url'   => '',
			'start_time' => '',
			'end_time'   => '',
		),
		$atts
	);

	$args['zoom_not_show_recordings'] = get_option( 'zoom_hide_recordings' );
	$args['zoom_window_size']         = get_option( 'zoom_window_size' );
	$args['meeting_id']               = (float) str_replace( '-', '', str_replace( ' ', '', $args['meeting_id'] ) );
	$args['is_only_recording']        = 1;
	$args['is_meeting_view']          = 0;

	if ( $args['is_webinar'] ) {
		$args['option'] = 'zoom_api_webinar_options';
	} else {
		$args['option'] = 'zoom_api_meeting_options';
	}

	if ( $args['meeting_id'] ) {
		$args['zoom_map_array'] = get_post_meta( $args['meeting_id'], $args['option'], true );
		if ( ! $args['zoom_map_array'] ) {
			$args['zoom_map_array'] = array();
		}
	}

	$content = '<div class="' . ( $args['zoom_window_size'] ? 'zoom-window-wrap-half' : '' ) . '"><div style="display:none;" class="loader"></div>';

	// If join meeting not set check if recording should be played
	$args = video_conferencing_zoom_is_recoding_play( $args );
	if ( ! isset( $args['recording_url'] ) || ! $args['recording_url'] ) {
		$content .= __( 'Recording is not available at the moment, please try again later.', 'video-conferencing-with-zoom-api' );
	} else {
		// Apply start and end time logic if exist
		if ( $args['start_time'] || $args['end_time'] ) {
			$args['recording_url'] .= '#t=' . esc_attr( $args['start_time'] );
			$args['recording_url'] .= ( $args['end_time'] ? ',' . esc_attr( $args['end_time'] ) : '' );

			wp_register_script( 'video-conferencing-with-zoom-api-recording', ZOOM_VIDEO_CONFERENCE_PLUGIN_FRONTEND_JS_PATH . '/recording.js', array(), ZVCW_ZOOM_PLUGIN_VER, true );
			wp_enqueue_script( 'video-conferencing-with-zoom-api-recording' );
		}

		$content .= video_conferencing_zoom_show_recording_video( $args );
	}

	$content .= '</div>';

	return $content;
}

/**
 * Rendering Zoom Web SDK
 * @return string
 */
function video_conferencing_zoom_render_meeting_window() {
	if ( ! video_conferencing_zoom_is_valid_request() ) {
		return;
	}

	if ( isset( $_REQUEST['zoom_wp_action'] ) && 'render_zoom_meeting' == $_REQUEST['zoom_wp_action'] ) {
		include_once( ZOOM_VIDEO_CONFERENCE_PLUGIN_FRONTEND_PATH . DIRECTORY_SEPARATOR . 'meeting.php' );
	}
}
