<?php if ( ! defined( 'ABSPATH' ) ) {
	exit;} ?>
<div class="wrap">
	<h1><?php _e( 'Error Logs', 'video-conferencing-with-zoom-api' ); ?></h1>
	<div class="message">
		<?php
		$message = self::get_message();
		if ( isset( $message ) && ! empty( $message ) ) {
			echo $message;
		}
		?>
	</div>
	
	<textarea placeholder="<?php echo ( ! $logs ? 'No errors logged yet' : '' ); ?>" disabled rows="20" cols="100"><?php echo ( $logs ? esc_html( $logs ) : '' ); ?></textarea>
</div>
