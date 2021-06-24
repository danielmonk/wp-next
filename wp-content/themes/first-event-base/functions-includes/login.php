<?php

// add in login/logout to menu
//add_filter( 'wp_nav_menu_items', 'wti_loginout_menu_link', 10, 2 );

function wti_loginout_menu_link( $items, $args ) {
   if ($args->theme_location == 'topbar-menu') {
      if (is_user_logged_in()) {
         $items .= '<li class="scroll"><a class="no-button logout" href="#" data-id="popup-logout">'. __("Log out") .'</a></li>';
      } else {
         $items .= '<li class="scroll"><a class="no-button login" href="#" data-id="popup-login">'. __("Log in") .'</a></li>';
      }
   }
   return $items;
}

// custom login logo
function wpb_login_logo() { ?>
    <style type="text/css">
        #login h1 a, .login h1 a {
        background-image: url('wp-content/themes/first-event-base/assets/dist/images/vm-prouder-logo.svg');
        height: 42px;
    width: 155px;
    background-size: 155px 42px;
        background-repeat: no-repeat;
        padding-bottom: 10px;
        }
    </style>
<?php }
add_action( 'login_enqueue_scripts', 'wpb_login_logo' );

/*
// custom login url
function wpb_login_logo_url() {
    return home_url();
}
add_filter( 'login_headerurl', 'wpb_login_logo_url' );
*/
/*
function wpb_login_logo_url_title() {
    return 'Marlowe';
}
add_filter( 'login_headertitle', 'wpb_login_logo_url_title' );
*/
/*
add_filter( 'login_url', 'my_login_linkchanger');
function my_login_linkchanger( $link ) {
  return home_url( '/map');
}
*/
?>
