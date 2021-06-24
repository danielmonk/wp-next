<?php
/**
 * Template name: Live Stream page
 * @package UnderStrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();
$container = get_theme_mod( 'understrap_container_type' ); ?>
    
    <?php if (is_user_logged_in()): ?>
        
        <?php $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );?>
        <div class="wrapper live-stream-wrapper" id="page-wrapper" style="background-image: url('<?php echo $backgroundImg[0]; ?>');">
            <div class="container padding-full" id="content" tabindex="-1">
                <div class="row">
                    <div class="col-md-12">
                        <h1><?php the_title(); ?></h1>
                    </div>
                    <div class="<?php if( get_field('sidebar') ): ?>col-md-9<?php else: ?> col-md-12 <?php endif; ?>">
                        <main class="site-main" id="main">
                        <?php while ( have_posts() ) { ?>
                            <?php the_post(); ?>
                                <div class="embed-container">
                                    <!-- <div id="demo"> -->
                                        <?php the_content(); ?>   
                                    <!-- </div> -->
                                </div>
                            
                        <?php } ?>
                    </main><!-- #main -->
                    </div>
                    <?php if( get_field('sidebar') ): ?>
                        <div class="col-md-3">
                            <?php the_field('sidebar'); ?>
                        </div>
                    <?php endif; ?>
                </div>
            </div><!-- #content -->
        </div><!-- #page-wrapper -->

    <?php else: ?>
        <div class="wrapper" id="page-wrapper">
            <div class="container padding-full" id="content" tabindex="-1">
                <h3>You must be logged in to view this page</h3>
                <br>
                <?php wp_login_form(); ?>
            </div>
        </div>
    <?php endif; ?>

<?php get_footer();
