<?php $accordion_content = array_key_exists('accordion_content', $data)
    ? $data['accordion_content']
    : false;
?>

<!-- INFO BOXES REPEATER CONTENT --> 
<?php
echo '<section class="section section--accordion accordion"><div class="container container--md">';

echo $accordion_content
    ? '<div class="accordion__intro" data-aos="fade-right">' .
        $accordion_content .
        '</div>'
    : '';

// check value info_boxes_repeater
if (have_rows('accordion_repeater')):
    echo '<div class="accordion__repeater">';
    // loop through rows
    while (have_rows('accordion_repeater')):
        the_row();
        $accordion_title = get_sub_field('accordion_title');
        $accordion_content = get_sub_field('accordion_content');
        $accordion_title_accent = get_sub_field('accordion_title_accent');
        $accordion_width = get_sub_field('accordion_width');

        // accordion accent html
        if($accordion_title_accent) : 
            $accordion_title_accent_html = '<span class="accordion__accent">' . $accordion_title_accent . '</span>';
        else : $accordion_title_accent_html = ''; endif;

        // check width
        if( $accordion_width === 'half-width') :
            $accordion_width_html = 'accordion__half-width';
        else : $accordion_width_html = ''; endif; 

        echo '<div class="accordion__single ' . $accordion_width_html . '">';

        echo $accordion_title
            ? '<div class="accordion__title">
                ' . $accordion_title_accent_html . '
                <span class="accordion__title--html"> ' . $accordion_title . '</span>
                </div>'
            : '';
        echo $accordion_content
            ? '<div class="accordion__content">' . $accordion_content . '</div>'
            : '';

        echo '</div>'; 
    endwhile;
    echo '</div>';
endif;

echo '</div></section>';


?>
