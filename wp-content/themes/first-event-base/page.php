<?php get_header(); ?>

<?php while (have_posts()):
    the_post(); ?>

    <?php
    $standard_content = get_the_content();
    $locked_page = get_field('locked_page');

    if(has_post_thumbnail()):
        $bg_image = "style='background-image:url(" . get_the_post_thumbnail_url() . ");background-size:cover;background-position:center;background-repeat:no-repeat;'";
    else:
    endif;

    if ($locked_page):
        if (is_user_logged_in()):?>

        <main class="main" role="main" id="main-content" <?php echo $bg_image ?>>

            <?php if ($standard_content): ?>

                <section class="section">
                    <div class="main-content">
                    <div class="container">
                        <?php the_content(); ?>
                    </div>
                    </div>
                </section>
                
            <?php else: ?>

                <?php include 'page-content.php'; ?>

            <?php endif; ?>
        </main>
    
        <?php else:echo '<main class="main main--flex main--full" role="main" id="main-content" style="background-image:url(/wp-content/themes/first-event-base/assets/dist/images/LandingPageBG.svg);"><section class="login-section-new"><div class="reg-wrapper"><div class="container"><div class="overlay"><div class="popup">
		<div class="popup__top">
			<img class="login-icon" src="' . get_stylesheet_directory_uri() . '/assets/dist/images/login_black_24dp.svg"><p>Log in</p>
			<a class="close" href="#" data-id="popup-login"><img src="' .  get_stylesheet_directory_uri() . '/assets/dist/images/icons-light-close.svg"></a>
		</div>
		<div class="content">
			<div class="flex classes-wrapper">	
				<div class="col">
				<form name="loginform" id="loginform" action="' . get_home_url(). '/wp-login.php" method="post">
					<p class="login-username">
						<label for="user_login">Email</label>
						<input type="text" name="log" id="user_login" class="input" value="" size="20" placeholder="Please enter your email">
					</p>
					<p class="login-password">
						<label for="user_pass">Password</label>
						<input type="password" name="pwd" id="user_pass" class="input" value="" size="20" placeholder="Please enter your password">
					</p>

						<p class="login-submit">
							<input type="cancel" class="button button-primary close" value="Cancel" id="cancel" data-id="popup-login">
							<input type="submit" name="wp-submit" id="wp-submit" class="button button-primary" value="Log In">
							<input type="hidden" name="redirect_to" value="' . home_url() . '">
						</p>
						<div class="login-custom-field-wrapper">
							<a class="no-button" target="_blank" href="' . get_home_url() . '/wp-login.php?action=lostpassword">Forgot password?</a>
						</div>
					</form>
				</div></div>
			</div>
		</div>
	</div></div></div></section></main>';endif;
    else:
         ?>

        <main class="main" role="main" id="main-content" <?php echo $bg_image ?>>

            <?php if ($standard_content): ?>

                <div class="section">
                    <div class="main-content">
                        <div class="container">
                        <?php the_content(); ?>
                        </div>
                    </div>
                </div>
                
            <?php else: ?>

                <?php include 'page-content.php'; ?>

            <?php endif; ?>
        </main>

    <?php
    endif;
    ?>
            


<?php
endwhile; ?>

<?php get_footer();
?>
