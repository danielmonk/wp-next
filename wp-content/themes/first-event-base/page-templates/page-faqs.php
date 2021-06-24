<?php
/**
 * Template name: FAQs page
 * @package UnderStrap
 */

// Exit if accessed directly.

get_header();
?>
<?php $backgroundImg = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' );?>
<div class="wrapper whereby-container padding-bottom" id="page-wrapper" style="background-image: url('<?php echo $backgroundImg[0]; ?>');">
    <div class="container-fluid">
        <div class="container">
            <?php while (have_posts()): the_post(); ?>
                <?php the_content(); ?>
            <?php endwhile; ?>

            <?php if( have_rows('faqs') ):
                    while( have_rows('faqs') ) : the_row(); ?>
                        <?php
                            $faqs_question = get_sub_field('faqs_question');
                            $faqs_answer = get_sub_field('faqs_answer');
                        ?>

                        <div class="set">
                            <a href="#">
                                <?php echo $faqs_question; ?>
                                <i class="fa fa-plus"></i>
                            </a>
                        
                            <div class="content">
                                <?php echo $faqs_answer; ?>
                            </div>
                        </div>
                <?php endwhile;
            endif; ?>
            
            <!-- <div class="test-div" style="width: 50%; height: 50%; background: lime; height: 300px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">

            </div> -->
        </div>
    </div>
</div>

<?php get_footer();
