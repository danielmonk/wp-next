<?php /* Template Name: Login */ ?>

<?php get_header(); ?>

<main class="main main--flex main--full" role="main" id="main-content" style="background-image:url(/wp-content/themes/first-event-base/assets/dist/images/Welcome-Backgorund.png);">
    <section class="login-section">
        <div class="reg-wrapper">
            <div class="container">
                <div class="login__wrapper">
                    <div class="gf_browser_chrome gform_wrapper">
                        <?php do_shortcode("[wp_login_form]") ?>
                        <p>Please <a href="<?php get_home_url() ?>/registration">click here</a> if you haven't registered for this event.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>