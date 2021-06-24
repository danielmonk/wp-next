<?php $slider_component_content = array_key_exists(
    'slider_component_content',
    $data
)
    ? $data['slider_component_content']
    : false; ?>

<!-- INFO BOXES REPEATER CONTENT --> 
<?php
echo '<section class="section slider-component"><div class="container container--no-flex container--md"><div class="col">';

echo $slider_component_content
    ? '<div class="slider-component__content" data-aos="fade-right">' .
        $slider_component_content .
        '</div>'
    : '';

// check value info_boxes_repeater
if (have_rows('slider_component_slides')):
    echo '<div class="glide"><div class="slider-component__slides glide__track" data-glide-el="track">
            <ul class="glide__slides">';
    // loop through rows
    while (have_rows('slider_component_slides')):
        the_row();
        $slider_image = get_sub_field('slider_image');
        $slider_title = get_sub_field('slider_title');
        $slider_content = get_sub_field('slider_content');

        echo "<li class='slider-component__slide glide__slide'  data-aos='fade-right'>";
        echo $slider_image
            ? '<img class="slider-component__image" src="' .
                $slider_image['url'] .
                '">'
            : '';
        echo $slider_title
            ? '<div class="slider-component__title"><h4>' .
                $slider_title .
                '</h4></div>'
            : '';
        echo $slider_content
            ? '<div class="slider-component__content"><p>' .
                $slider_content .
                '</p></div>'
            : '';
        echo '</li>';
    endwhile;
    echo '</ul>';
    echo '</div>
    <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><i class="fas fa-angle-left"></i></button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><i class="fas fa-angle-right"></i></button>
    </div>
    </div>';
endif;

echo '</div></div></section>';


?>
