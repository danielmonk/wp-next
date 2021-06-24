<?php
/*
    * Template Name: Social Parent
*/

get_header(); ?>
    <?php // get_template_part('partials/slideout'); ?>
    <?php $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );?>
    <div class="wrapper" id="page-wrapper" style="background-image: url('<?php echo $backgroundImg[0]; ?>');">
        <div class="container-fluid padding-full" id="content" tabindex="-1">    
            <main class="container site-main padding-full social-zone" id="main">
                <div class="row">
                    <?php if( have_rows('social_zone') ):
                        while( have_rows('social_zone') ) : the_row();
                            $social_image = get_sub_field('social_image');
                            $social_link = get_sub_field('social_link'); ?>

                            <div class="col-sm-6 social-zone__outer text-center" data-aos="zoom-in">
                                <div class="social-zone__inner padding-full">
                                    <div class="svg-container" data-mh="svg-height">
                                        <?php echo $social_image; ?>    
                                    </div>
                                    
                                    <?php if( $social_link ): 
                                        $social_link_url = $social_link['url'];
                                        $social_link_title = $social_link['title'];
                                        $social_link_target = $social_link['target'] ? $social_link['target'] : '_self';
                                        ?>
                                        <a class="button" href="<?php echo esc_url( $social_link_url ); ?>" target="<?php echo esc_attr( $social_link_target ); ?>">
                                            <?php echo esc_html( $social_link_title ); ?>
                                        </a>
                                    <?php endif; ?>
                                </div>
                            </div>
                        <?php endwhile;
                    endif; ?>
                </div>
                    <?php /*while ( have_posts() ) { ?>
                        <?php the_post(); ?>
                        <h1><?php the_title(); ?></h1>
                        <?php the_content();  ?>
                    <?php } */?>
            </main>
        </div>            
    </div>

<?php get_footer();
?>
