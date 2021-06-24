<?php $scrolling_list_title = array_key_exists('scrolling_list_title', $data)
    ? $data['scrolling_list_title']
    : false; ?>
<?php
echo '<div class="container container--no-flex container--md"><div class="col"><section class="scrolling-list-element section"><div>';

// check value exists
if (have_rows('scrolling_list_repeater')):
    // loop through rows
    while (have_rows('scrolling_list_repeater')):
        the_row();
        $item_title = get_sub_field('item_title');
        $item_title_link = strtolower(
            str_replace([' ', '&'], ['-', ''], $item_title)
        );

        $item_content = get_sub_field('item_content');

        echo '<div class="scrolling-section" data-aos="fade-right" id="' .
            $item_title_link .
            '"><h3>' .
            $item_title .
            '</h3> ' .
            $item_content .
            '</div>';
    endwhile;
endif;

echo "</div>";

// check value exists
if (have_rows('scrolling_list_repeater')):
    echo '<nav class="section-nav" data-aos="fade-left"><ol>';

    // loop through rows again for nav
    while (have_rows('scrolling_list_repeater')):
        the_row();
        $item_title = get_sub_field('item_title');
        $item_title_link = strtolower(
            str_replace([' ', '&'], ['-', ''], $item_title)
        );
        $item_content = get_sub_field('item_content');

        echo '<li><a href="#' .
            $item_title_link .
            '" data-no-swup>' .
            $item_title .
            '</a></li>';
    endwhile;

    echo '</ol></nav>';
endif;

echo '</div></div></section>';
?>
