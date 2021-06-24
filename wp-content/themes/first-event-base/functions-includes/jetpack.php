<?php

// Make empty Search return 'no results' on search page
function my_products_pages() {
    return array('pattern_items', 'yarn_items');
  }
  add_filter('cart66_add_popup_screens', 'my_products_pages');
  
  function jptweak_remove_share() {
      remove_filter( 'the_content', 'sharing_display',19 );
      remove_filter( 'the_excerpt', 'sharing_display',19 );
      if ( class_exists( 'Jetpack_Likes' ) ) {
          remove_filter( 'the_content', array( Jetpack_Likes::init(), 'post_likes' ), 30, 1 );
      }
  }
   
  add_action( 'loop_start', 'jptweak_remove_share' );

?>