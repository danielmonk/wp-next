<?php
/**
 * Template name: Whereby page
 * @package UnderStrap
 */

// Exit if accessed directly.

get_header();
?>
<?php $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );?>
<div class="wrapper whereby-container padding-bottom" id="page-wrapper" style="background-image: url('<?php echo $backgroundImg[0]; ?>');">
    <div class="container-fluid">
        <div class="container">
            <iframe src="https://firstevent.whereby.com/<?php the_field('whereby_code'); ?>?leaveButton=off" allow="camera;microphone" width="1440px" height="775px"></iframe>
        </div>

    
        <a href="/the-stage-stream" class="the-stage-btn button">Leave stage</a>
        <!-- <div id="whereby"></div> -->
    </div>
</div>

<?php get_footer();
