<!-- MODAL SECTION FLEXI CONTENT --> 
<?php 
$modal_style = array_key_exists( 'modal_style', $data ) ? $data['modal_style'] : false;
$modal_content = array_key_exists( 'modal_content', $data ) ? $data['modal_content'] : false;
$button_block = array_key_exists('button_block', $data) ? $data['button_block'] : false; 
$modal_text_style = array_key_exists( 'modal_text_style', $data ) ? $data['modal_text_style'] : false;

echo '<section class="section modal-section modal-section__' . $modal_style .'">
<div class="container">';

if($modal_content):
    echo "<div class='modal-section__intro'>" . $modal_content . "</div>";
else : endif; 

// trigger section
$count1 = 0;
$count2 = 0;
if (have_rows('modal_section')):
    if($modal_text_style === 'text'): $modal_text_class = 'text'; else: $modal_text_class = ''; endif;
    echo "<div class='modal-section__triggers  " . $modal_text_class . "'>";

    while (have_rows('modal_section')):
    $count1++;
     // loop through triggers
         the_row();
         $modal_trigger = get_sub_field('modal_trigger');
         $modal_id = get_sub_field('modal_id');
         //if($count1 === 1): $count_class1 = 'selected'; else: $count_class1 = ''; endif;
         if($modal_text_style === 'text'): $modal_text_class = 'text'; else: $modal_text_class = ''; endif;

         if($modal_trigger):
            echo "<div class='modal-section__trigger' data-id='" . $modal_id . "'>" . $modal_trigger . "</div>";
         endif;
     endwhile;
     echo "</div>";
endif;


// standard button
if($button_block):
   echo "<div class='modal-section__button'>";
   $link_url = $button_block['url'];
   $link_title = $button_block['title'];
   $link_target = $button_block['target'] ? $button_block['target'] : '_self';

   echo "<a class='btn' target='" . $link_target . "' href='" . $link_url . "'> " . $link_title .  " </a>";
   echo "</div>";
endif;

// repeater
if( have_rows('button_repeater') ):
    echo "<div class='modal-section__button'>";

    // Loop through rows.
    while( have_rows('button_repeater') ) : the_row();

        // Load sub field value.
        $button_block_repeater = get_sub_field('button_block_repeater');
        $link_url = $button_block_repeater['url'];
        $link_title = $button_block_repeater['title'];
        $link_target = $button_block_repeater['target'] ? $button_block_repeater['target'] : '_self';

        echo "<a class='btn' target='" . $link_target . "' href='" . $link_url . "'> " . $link_title .  " </a>";

    // End loop.
    endwhile;

    echo "</div>";
// No value.
else :
    // Do something...
endif;

if (have_rows('modal_section')):
    // loop through content
    echo "<div class='modal-section__contents'>";
     while (have_rows('modal_section')):
     $count2++;
         the_row();
         $modal_content = get_sub_field('modal_content');
         $modal_id = get_sub_field('modal_id');
         //if($count2 === 1): $count_class2 = 'selected'; else: $count_class2 = ''; endif;

         if($modal_content):
            echo "<div class='modal-section__content' data-id='" . $modal_id . "'>" . $modal_content . "</div>";
         endif;
     endwhile;
     echo "</div>";



 endif;

 echo '</div>
 </section>';
?>
