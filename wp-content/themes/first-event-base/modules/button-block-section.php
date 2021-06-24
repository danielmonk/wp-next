<?php $button_block = array_key_exists('button_block', $data)
    ? $data['button_block']
    : false; ?>

<section class="section button-block">
  <div class="container">
     <?php
     // standard button
     if($button_block):
        $link_url = $button_block['url'];
        $link_title = $button_block['title'];
        $link_target = $button_block['target'] ? $button_block['target'] : '_self';

        echo "<a class='btn' target='" . $link_target . "' href='" . $link_url . "'> " . $link_title .  " </a>";
     endif;


     // repeater
        if( have_rows('button_repeater') ):

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

        // No value.
        else :
            // Do something...
        endif;

    ?>
  </div>
</section>