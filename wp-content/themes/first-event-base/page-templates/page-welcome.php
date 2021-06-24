<?php
/**
 * Template Name: Welcome page
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();

$container = get_theme_mod( 'understrap_container_type' );

?>

<div class="wrapper" id="page-wrapper">
    <div class="wrapper live-stream-wrapper" id="page-wrapper">
        <?php $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );?>
        <div class="container-fluid home-section" style="height: 100vh; background-image: url('<?php echo $backgroundImg[0]; ?>');">
            <div class="container">
                <div class="row h-100">
                                    
                </div>
            </div>
        </div>
    </div> 

</div><!-- #page-wrapper -->

<?php
get_footer();
