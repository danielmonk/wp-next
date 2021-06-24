<!-- VIDEO SECTION FLEXI CONTENT --> 
<?php // check value exists
if (have_rows('social_media_link_repeater')):
    echo '<section class="section social-media-links">
            <div class="container container--md">
                <div class="col">
                    <div class="social-media-links__wrapper">';

    // loop through rows
    while (have_rows('social_media_link_repeater')):
        the_row();
        $link = get_sub_field('social_media_link');
        $type = get_sub_field('social_media_type');

        echo "<a target='_blank' data-aos='fade-right' class='social-media-links__single social-media-links__single--" .
            $type .
            "' href='" .
            $link .
            "'><i class='fab fa-" .
            $type .
            "'></i></a>";
    endwhile;

    echo '      </div>
            </div>
        </div>
    </section>';
endif; ?>
