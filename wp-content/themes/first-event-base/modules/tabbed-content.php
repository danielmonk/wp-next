<?php
echo '<section class="section tabbed-content"><div class="container">';

// create initial tabs
if (have_rows('tabbed_section')):
    $count = 0;
    echo '<div class="tabbed-content__tabs">';
    // loop through rows
    while (have_rows('tabbed_section')):
        the_row();
        $tabbed_title = get_sub_field('tabbed_title');
        $tabbed_title_data = strtolower(str_replace(' ', '_', $tabbed_title));
        if($count === 0) : $checked = 'checked'; else : $checked = ''; endif;

        echo '<a data-id="' . $tabbed_title_data . '" class="btn tabbed-content__tab ' . $checked . '">' . $tabbed_title  . '</a>';
        
    $count++;  
    endwhile;
    echo '</div>';
endif;

// check value info_boxes_repeater
if (have_rows('tabbed_section')):
    $count2 = 0;
    echo '<div class="tabbed-content__sections">';
    // loop through rows
    while (have_rows('tabbed_section')):
        the_row();
        $tabbed_title = get_sub_field('tabbed_title');
        $tabbed_title_data = strtolower(str_replace(' ', '_', $tabbed_title));
  
        // Check value exists.
        if( have_rows('tabbed_flexi') ):

            // Loop through rows.
            while ( have_rows('tabbed_flexi') ) : the_row();
            if($count2 === 0) : $checked = 'checked'; else : $checked = ''; endif;

                echo '<div class="tabbed-content__section ' . $checked . '" data-id="' . $tabbed_title_data . '">';

                echo '<h3>' . $tabbed_title  . '</h3>';

                // Case: Simple Text Block
                if( get_row_layout() == 'simple_text_block' ):
                    $simple_text_block = get_sub_field('simple_text_block_simple_text_block');

                    echo '<div class="tabbed-content__simple-text-block">' .
                    $simple_text_block .
                    '</div>';

                // Case: Accordion Section
                elseif( get_row_layout() == 'accordion_section' ): 
                    $accordion_content = get_sub_field('accordion_section_accordion_content');

                    echo '<div class="tabbed-content__accordion">' .
                        $accordion_content
                        ? '<div class="accordion__intro" data-aos="fade-right">' .
                            $accordion_content .
                            '</div>'
                        : '';

                        if (have_rows('accordion_section_accordion_repeater')):
                            echo '<div class="accordion__repeater">';
                            // loop through rows
                            while (have_rows('accordion_section_accordion_repeater')):
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
                    '</div>';
                endif;

                echo "</div>";
                
            endwhile;

        else :
        endif;
    $count2++;  
    endwhile;
    echo '</div>';
endif;

echo '</div></section>';


?>
