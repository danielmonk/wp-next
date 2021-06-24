<?php $info_boxes_content = array_key_exists('info_boxes_content', $data)
    ? $data['info_boxes_content']
    : false;
    $info_box_style = array_key_exists('info_box_style', $data)
    ? $data['info_box_style']
    : false;
    $pull_up = array_key_exists('pull_up', $data)
    ? $data['pull_up']
    : false;
    $background_color = array_key_exists('background_colour', $data)
    ? $data['background_colour']
    : false;

    // check if pull up if so add class
    if ($pull_up): $pull_up = "pull-up"; else:$pull_up = ''; endif;

    ?>

<!-- INFO BOXES REPEATER CONTENT --> 
<?php
echo '<section class="section info-boxes ' . $info_box_style . ' ' . $pull_up .' section--' . $background_color .'"><div class="container container--md">';

echo $info_boxes_content
    ? '<div class="info-box__intro" data-aos="fade-right">' .
        $info_boxes_content .
        '</div>'
    : '';

// check value info_boxes_repeater
if (have_rows('info_boxes_repeater')):
    echo '<div class="info-boxes__repeater">';
    // loop through rows
    while (have_rows('info_boxes_repeater')):
        the_row();
        $info_box_title = get_sub_field('info_box_title');
        $info_box_content = get_sub_field('info_box_content');
        $info_box_image = get_sub_field('info_box_image');
        $info_box_link = get_sub_field('info_box_link');
        $info_box_bg = get_sub_field('background_colour');
        $info_box_padded = get_sub_field('padded');

        // check if padded if so add class
        if ($info_box_padded): $padded_class = "padded"; else:$padded_class = ''; endif;

        echo $info_box_image
            ? '<div class="info-box ' . $padded_class .' color-' . $info_box_str . '" data-aos="fade-right" style="background-image:url(' .
                $info_box_image['url'] .
                ');background-color:' . $info_box_bg .'"><div class="info-box__inner">'
            : '<div class="info-box ' . $padded_class .' color-' . $info_box_str . '" data-aos="fade-right" style="background-color:' . $info_box_bg .'"><div class="info-box__inner">';
        echo $info_box_title
            ? '<div class="info-box__title"><p>' .
                $info_box_title .
                '</p></div>'
            : '';
        echo $info_box_content
            ? '<div class="info-box__content">' . $info_box_content . '</div>'
            : '';
        echo $info_box_link
            ? '<a target="_blank" href="' .
                $info_box_link['url'] .
                '" class="info-box__link helvetica-neue">' .
                $info_box_link['title'] .
                '</a>'
            : '';
        echo '</div></div>';
    endwhile;
    echo '</div>';
endif;

echo '</div></section>';


?>
