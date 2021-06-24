<?php if (is_user_logged_in()): ?>
<!--	
  <?php 
  $notifs = get_field('notification_repeater', 'option');
  if( $notifs ) {
      foreach( $notifs as $notif ) {
      $title = $notif['notification_title'];
      $title_clean = preg_replace('/\s*/', '', $title);
      $title_clean = strtolower($title_clean);
      $content = $notif['notification_content'];
      $time = $notif['notification_time'];
      $timeUnix = strtotime($time);
      $link = $notif['notification_link'];
      $link_url = $link['url'];
      $link_title = $link['title'];
      echo '
      <div class="notice" data-id="' . $title_clean . '">
      <div class="notice__wrapper">
      <div class="container">'  . $content . '<span class="notice__close"><img src="'. get_stylesheet_directory_uri() . '/assets/dist/images/close-icon.svg"></span></div>
      </div>
      </div>
      <script> {
      let timeElapsed = Date.now();
      let today = Math.floor(timeElapsed / 1000)
      console.log("time elapsed: " + timeElapsed);
      console.log("current time: " + today);
      console.log(' . $timeUnix . ');
      console.log(' . $timeUnix . ' - today);
      let difference = ' . $timeUnix . ' - today;
      let differenceMillisecond = difference * 1000;
      let differenceTimeout = differenceMillisecond + 300000;
      console.log("difference: " + differenceMillisecond);
	  console.log(differenceTimeout);
	  let popUp = document.querySelectorAll(".notice[data-id='. $title_clean .']");
      if (differenceMillisecond > -300000) {
        setTimeout(function(){
          if(popUp[0]){
            popUp[0].classList.add("show");
            setTimeout(function(){
                popUp[0].classList.remove("show");
            }, differenceTimeout);
          }
        }, differenceMillisecond);
	  } else {}
	  let popUpClose = document.querySelectorAll(".notice__close");
	  if(popUpClose[0]){
		popUpClose[0].addEventListener("click", function() {
			console.log("test");
			popUp[0].classList.remove("show");
		});
	  }
    }</script>';
      }
  }

  ?>  
-->
<?php endif; ?>

<footer id="footer">
	<div class="container">
		<div class="col internal" data-aos='fade-right' data-aos-anchor=".footer">
			<p>Designed by <a href="https://firstevent.co.uk" target="_blank">First Event</a></p>
			<!--
			<?php wp_nav_menu([
				'container' => false,
				'menu' => __('Footer Menu', 'textdomain')
				]);
			?>
			-->
		</div>
		<div class="col external" data-aos='fade-right' data-aos-anchor=".footer">
			<!--
			<?php wp_nav_menu([
				'container' => false,
				'menu' => __('Footer Menu External', 'textdomain')
				]);
			?>
			-->
		</div>
	</div>
</footer>

<div id="popup-login" class="overlay modal-closed" data-id="popup-login">
	<div class="popup">
		<div class="popup__top">
			<img class="login-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/dist/images/login_black_24dp.svg"><p>Log in</p>
			<a class="close" href="#" data-id="popup-login"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/dist/images/icons-light-close.svg"></a>
		</div>
		<div class="content">
			<div class="flex classes-wrapper">	
				<div class="col">
				<form name="loginform" id="loginform" action="<?php echo get_home_url()?>/wp-login.php" method="post">
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
							<input type="hidden" name="redirect_to" value="<?php echo home_url() ?>">
						</p>
						<div class="login-custom-field-wrapper">
							<a class="no-button" target="_blank" href="<?php echo get_home_url()?>/wp-login.php?action=lostpassword">Forgot password?</a>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

<div id="popup-logout" class="overlay modal-closed" data-id="popup-logout">
	<div class="popup">
		<div class="popup__top">
			<img class="login-icon" src="<?php echo get_stylesheet_directory_uri(); ?>/assets/dist/images/login_black_24dp.svg"><p>Log out</p>
			<a class="close" href="#" data-id="popup-logout"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/dist/images/icons-light-close.svg"></a>
		</div>
		<div class="content">
			<div class="flex classes-wrapper">	
				<div class="col">
					<p class="confirm">Are you sure?</p>
					<div class="login-submit">
						<a type="cancel" class="button cancel close" id="cancel" data-id="popup-logout">Cancel</a>
						<a type="submit" class="button button-primary" value="Log Out" data-id="popup-logout" href="<?php echo wp_logout_url(home_url() ); ?>">Log out</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<a href="#header-link" id="back-to-top" title="Go to top"><img src="<?php echo get_template_directory_uri()?>/assets/images/arrow-up.svg"></a>

<?php wp_footer(); ?>
</div>
</div>
<script src="//code.tidio.co/1hcvvr3m1twb9hsrl1k8wga86e1f7ypt.js" async></script>
<script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
  crossorigin="anonymous"></script>
<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/8848114.js"></script>
<!-- End of HubSpot Embed Code -->
</body>
</html>