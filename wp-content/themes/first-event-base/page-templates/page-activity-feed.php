<?php
/**
 * Template name: Activity feed page
 * @package UnderStrap
 */

// Exit if accessed directly.

get_header();
$container = get_theme_mod( 'understrap_container_type' ); ?>
    
    <?php // if (is_user_logged_in()): ?>
        
        <?php $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );?>
        <div class="wrapper live-stream-wrapper padding-full" id="page-wrapper" style="background-image: url('<?php echo $backgroundImg[0]; ?>');">
            <div class="container padding-full" id="content" tabindex="-1">
                <div class="row">
                    <div class="col-md-12">
                        <main class="site-main" id="main">
                        <?php while ( have_posts() ) { ?>
                            <?php the_post(); ?>
                                <?php the_content(); ?>   
                        <?php } ?>
                    </main><!-- #main -->
                </div>
            </div>
        </div><!-- #content -->

    <?php /* else: ?>
        <div class="wrapper" id="page-wrapper">
            <div class="container padding-full" id="content" tabindex="-1">
                <h3>You must be logged in to view this page</h3>
                <br>
                <?php wp_login_form(); ?>
            </div>
        </div>
    <?php endif; */ ?>

<?php get_footer();
