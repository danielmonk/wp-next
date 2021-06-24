<?php /* Template Name: Live Stream */ ?>

<?php get_header(); ?>

<?php if (is_user_logged_in()): ?>

<div class="banner-two">
    <div class="container">
        <div class="heading-container">
            <div class="heading-wrapper">
                <h1>Live Stream</h1>
                <h2>Thursday 11th February 2021<br>10.00 - 16.00</h2>
            </div>
        </div>
    </div>
</div>

<div class="live-stream-wrapper">
    <div class="container-lg">
        <div class="flex">
            <div class="live-stream">
                <?php the_field('live_stream');?>
            </div>

            <div class="chat">
                <?php the_field('chat');?>
            </div>
        </div>

        <button class="accordion button">Submit a question</button>
                <div class="panel">
                    <?php the_field('question');?>
                </div>
    </div>
</div>

<?php else:
    echo '<section class="login-section"><div class="reg-wrapper"><div class="container"><div class="gf_browser_chrome gform_wrapper">' . do_shortcode("[wp_login_form]") . '</div></div></div></section>';
endif; ?>

<?php get_footer(); ?>