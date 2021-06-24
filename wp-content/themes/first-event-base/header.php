<!doctype html>
<html lang="en">
  <head>

  <title><?php wp_title(”); ?></title>
   <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' />
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-H5J5F0TGMG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-H5J5F0TGMG');
</script>
<link rel="stylesheet" href="https://use.typekit.net/ksf1xsu.css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> data-barba="wrapper">
<div id="wptime-plugin-preloader"></div>
<!--<div id="swup" class="transition-fade">-->
<div id="barba-wrapper">
<div class="barba-container">
<div id="header-link"></div>
<header id="header" class="header">
    <div class="container container--no-flex">
        <div class="flex col">

        <?php
        $custom_logo_id = get_theme_mod('custom_logo');
        $logo = wp_get_attachment_image_src($custom_logo_id, 'full');
        $logo_hover = get_theme_mod( 'your_theme_hover_logo' );
        echo '<div class="header__logos">';
        echo '<a class="logo-light" href="' .
            get_home_url() .
            ' "><img src="' .
            esc_url($logo[0]) .
            '" alt="' .
            get_bloginfo('name') .
            '" class="menu-logo"></a>';
          echo '</div>';
        ?>

            <div class="menu__toggle">
              <!--
              <input type="checkbox" id="menu-checkbox" />
              <span></span>
              <span></span>
              <span></span>
              -->
              <img class="menu__icon--open" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/icons-menu.svg' ?>">
              <img class="menu__icon--close" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/icons-dark-close.svg' ?>">
                <nav class="menu"  data-aos='fade-right'>
                <!--<a href="#" class="btn">Register For Next Episode</a>-->
                <?php wp_nav_menu([
                     'container' => false,
                     'menu' => __('Main Menu', 'textdomain'),
                     'menu_class' => 'dropdown menu',
                     'theme_location' => 'topbar-menu',
                 ]); ?>
                 <div class="menu__mobile-footer">
                    <?php wp_nav_menu([
                      'container' => false,
                      'menu' => __('Footer Menu', 'textdomain')
                      ]);
                    ?>
                    <?php wp_nav_menu([
                      'container' => false,
                      'menu' => __('Footer Menu External', 'textdomain')
                      ]);
                    ?>
                    <!-- login stuff -->
                    <?php if (is_user_logged_in()) {
                      echo '<li class="scroll"><a class="btn hero-section__button aos-init aos-animate logout" target="_self" href="'. wp_logout_url( home_url() ) .'" data-id="popup-logout">'. __("Log out") .'</a></li>';
                    } else {
                      echo '<li class="scroll"><a class="btn hero-section__button aos-init aos-animate login" target="_self" href="#" data-id="popup-login">'. __("Log in") .'</a></li>';
                    } ?>
                </div>
                </nav>
            </div>
        </div>
    </div>
</header>