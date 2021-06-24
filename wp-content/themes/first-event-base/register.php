<?php /* Template Name: Register */ ?>

<?php get_header(); ?>

<div class="banner">
    <div class="container">
        <div class="heading-container">
            <div class="heading-wrapper">
                <h1>Register<br>Now</h1>
            </div>
        </div>
    </div>
</div>

<div class="reg-wrapper">
    <div class="container">
        <?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
        <?php the_content(); ?>
        <?php endwhile; ?>
    </div>
</div>

<?php get_footer(); ?>