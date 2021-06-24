<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
$wp_load_file = dirname( dirname( dirname( dirname( dirname( __DIR__ ) ) ) ) ) . '/wp-load.php';
if ( ! file_exists( $wp_load_file ) || ! isset( $_REQUEST['zvc_security'] ) || ! isset( $_REQUEST['mn'] ) ) {
	die();
}
// Load WP env
require_once( $wp_load_file );

$nonce = sanitize_text_field( $_REQUEST['zvc_security'] );
if ( ! wp_verify_nonce( $nonce, '_nonce_zvc_security' ) ) {
	die();
}

// Remove all WP styles and scripts
add_filter( 'script_loader_tag', 'remove_wp_scripts', 10, 3 );
function remove_wp_scripts( $tag, $handle, $src ) {
	return false;
}

add_filter( 'style_loader_tag', 'remove_wp_styles', 10, 3 );
function remove_wp_styles( $tag, $handle, $src ) {
	return false;
}

// Remove all WP plugin callbacks
remove_all_actions( 'init' );
remove_all_actions( 'admin_bar_menu' );
remove_all_actions( 'wp_footer' );
remove_all_actions( 'wp_head' );
remove_all_actions( 'wp_enqueue_scripts' );
remove_all_actions( 'wp_enqueue_styles' );
remove_all_actions( 'wp_print_footer_scripts' );
header_remove( 'Content-Security-Policy' );
?>
<!DOCTYPE html>
<head>
	<title>Zoom WordPress Plugin</title>
	<meta charset="utf-8" />
	<!-- Do not load assets if user is leaving or cannot join meeting-->
	<?php if ( ! isset( $_REQUEST['exit_meeting'] ) ) : ?>
		<link type="text/css" rel="stylesheet" href="https://source.zoom.us/1.9.1/css/bootstrap.css" />
		<link type="text/css" rel="stylesheet" href="https://source.zoom.us/1.9.1/css/react-select.css" />
		<meta name="format-detection" content="telephone=no">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
		<meta http-equiv="origin-trial" content="<?php echo esc_attr( get_option( 'zoom_simd_token' ) ); ?>">
		<!-- Custom Styles added by Zoom WP plugin -->
		<style>
			.meeting-tip {
				display: none;
			}
			body .ReactModalPortal .common-window {
				max-width: 100%;
			}
			@media screen and (max-width: 600px) {
				body .ReactModalPortal .common-window {
					max-width: 299px;
				}
				body.ReactModal__Content .ReactModal__Content--after-open .ReactModalPortal .common-window {
					padding: 0px -4px 30px;
				}
				.chat-message-text-content {
					padding: 14px 29px 14px;
				}
				ul.more-button__pop-menu.dropdown-menu {
					max-width: auto;
					position: absolute;
					left: auto;
					right: 10%;
				}
				body .chat-item__chat-info {
					font-size: 12px;
					padding: 14px 23px;
					max-width: 310px;
				}
				.chat-container__chat-control {
					padding: 0 38px;
				}
				.chat-box__chat-textarea {
					padding-left: 60px;
				}
				#chat-window{
					width: 80%;
				}
				.dialog-rename-container {
					max-width: 280px;
				}
				.ReactVirtualized__List.chat-virtualized-list{
					max-width: 296px;
				}
				.zm-modal-footer-default {
					max-width: 60%;
				}
				.ReactModal__Content.ReactModal__Content--after-open {
					max-width: 100%;
				}
				.ReactModalPortal .zm-modal.zm-modal-legacy .zm-modal-body-content {
					padding-left: 4px;
				}
			}
			<?php
			$meeting_window_custom_css = get_option( 'meeting_window_custom_css' );
			echo ( $meeting_window_custom_css ) ? htmlspecialchars( strip_tags( $meeting_window_custom_css ), ENT_NOQUOTES | ENT_SUBSTITUTE, 'utf-8' ) : '';
			?>
		</style>
	<?php endif; ?>
</head>
<body>
	<!-- Do not load assets if user is leaving or cannot join meeting-->
	<?php if ( ! isset( $_REQUEST['exit_meeting'] ) ) : ?>
		<script src="https://source.zoom.us/1.9.1/lib/vendor/react.min.js"></script>
		<script src="https://source.zoom.us/1.9.1/lib/vendor/react-dom.min.js"></script>
		<script src="https://source.zoom.us/1.9.1/lib/vendor/redux.min.js"></script>
		<script src="https://source.zoom.us/1.9.1/lib/vendor/redux-thunk.min.js"></script>
		<script src="https://source.zoom.us/1.9.1/lib/vendor/lodash.min.js"></script>
		<script src="https://source.zoom.us/zoom-meeting-1.9.1.min.js"></script>
	<?php endif; ?>	
	<script>
	<?php
	$vars             = array_map( 'esc_html', $_GET );
	$vars['site_url'] = esc_url( get_site_url() );
	$localize_script  = 'var zvc_array = ' . wp_json_encode( $vars ) . ';';
	echo $localize_script;
	?>
	</script>
	<script src="<?php echo esc_attr( ZOOM_VIDEO_CONFERENCE_PLUGIN_FRONTEND_JS_PATH ); ?>/tool.js?ver=<?php echo esc_attr( ZVCW_ZOOM_PLUGIN_VER ); ?>"></script>
	<script src="<?php echo esc_attr( ZOOM_VIDEO_CONFERENCE_PLUGIN_FRONTEND_JS_PATH ); ?>/meeting.js?ver=<?php echo esc_attr( ZVCW_ZOOM_PLUGIN_VER ); ?>"></script>
</body>
</html>
<?php
exit;
