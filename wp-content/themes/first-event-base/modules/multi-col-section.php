<?php $title = array_key_exists('title', $data)
    ? $data['title']
    : false; 
    $background_image = array_key_exists('background_image', $data)
    ? $data['background_image']
    : false; 
    $background_color = array_key_exists('background_color', $data)
    ? $data['background_color']
    : false; 
    $section_style = array_key_exists('section_style', $data)
    ? $data['section_style']
    : false; 
    $title_clean = preg_replace('/\s*/', '', $title);
    $title_clean = strtolower($title_clean);
    ?>
<?php 
echo '<section class="section multi-col-section ' . $title_clean . '" style="background-color:'. $background_color .';" data-id="' . $title_clean . '"><div class="section__image" style="background-image:url(' . $background_image . ')"></div><div class="container">';

// if title echo
/*
if($title):
    echo '<h2 data-aos="fade-right">' . $title . '</h2>';
endif;
*/

if($section_style === 'text'):
    if (have_rows('text_repeater')):
        echo '<div class="text-repeater">';
        while (have_rows('text_repeater')):
            the_row();
            $text_col = get_sub_field('text_column');
            echo '<div class="text-repeater__single" data-aos="fade-right">' . $text_col . '</div>';
        endwhile;
        echo '</div>';
    endif;
elseif($section_style === 'team'):
    $team_intro = get_sub_field('team_intro');
    echo '<div style="width:100%" data-aos="fade-right">' . $team_intro . '</div>';
    if (have_rows('team_repeater')):
        echo '<div class="team-repeater">';
        while (have_rows('team_repeater')):
            the_row();
            $team_text = get_sub_field('team_text');
            $team_image = get_sub_field('team_image');
            ?><div class="team-repeater__single" data-aos="fade-right" data-id="<?php echo $team_text ?>">
                <div class="team-repeater__image">
                    <img src="<?php echo $team_image ?>">
                </div>
                <div class="team-repeater__content">
                    <?php echo $team_text ?>
                    <?php if (have_rows('social_icons')):
                            echo '<div class="team-repeater__socials">';
                            // loop through rows
                            while (have_rows('social_icons')):
                                the_row();
                                $social_link = get_sub_field('social_link');
                                $social_type = get_sub_field('social_type');
                                echo '<a class="team-repeater__social '. $social_type .'" href="' . $social_link . '" target="_blank"><div class="team-repeater__social-image"></div></a>';
                            endwhile;
                            echo '</div>';
                    endif; ?>
                </div>
            </div>
        <?php endwhile;
        echo '</div>';
    endif;
elseif($section_style === 'resource'):
    echo '<div class="resource closed">';
    $content = get_sub_field('content');
    $content_clean = preg_replace('#[ -]+#', '-', strip_tags($content));
    if($content):
        echo '<div class="resource__toggle" style="width:100%" data-aos="fade-right">' . $content . '</div>';
    endif;
    if (have_rows('resource_repeater')):
        echo '<div class="resource-repeater" data-id="' . $content_clean . '">';
        while (have_rows('resource_repeater')):
            the_row();
            $resource_style = get_sub_field('resource_style');
            $resource_title = get_sub_field('resource_title');
            $resource_time = get_sub_field('resource_time');
            $resource_content = get_sub_field('resource_content');
            $resource_capacity = get_sub_field('resource_capacity');
            $resource_image = get_sub_field('resource_image');

            if($resource_style === 'internal'):
                $resource_link_text = 'Join now';
            elseif($resource_style === 'external'):
                $resource_link_text = 'Link to resource';
            endif;

            if($resource_capacity):
                $resource_wrapper = 'capacity';
            else :
                $resource_wrapper = '';
            endif;

            echo '<div class="resource-repeater__single '. $resource_style .' ' . $resource_wrapper . '" data-aos="fade-right">';

                if($resource_title):
                    echo  '<h5 class="resource-repeater__title">' . $resource_title . '</h5>';
                endif;
                if($resource_time):
                    echo  '<p class="resource-repeater__time">' . $resource_time . '</p>';
                endif;
                if($resource_content):
                    echo  '<div class="resource-repeater__content">' . $resource_content . '</div>';
                endif;
                if($resource_image):
                    echo  '<div class="resource-repeater__image" style="background-image:url(' . $resource_image['url'] . ')"></div>';
                endif;
                /*
                if($resource_link):
                    echo  '<a class="resource-repeater__link btn" href="' . $resource_link . '" target="_blank">' . $resource_link_text . '</a>';
                endif;
                */

                if (have_rows('resource_links')):
                    echo '<div class="resource-repeater__links">';
                    while (have_rows('resource_links')):
                        the_row();
                        $resource_link = get_sub_field('resource_link');
                        $resource_title = get_sub_field('resource_title');
                        echo  '<a class="resource-repeater__link btn" href="' . $resource_link . '" target="_blank">' . $resource_title . '</a>';
                    endwhile;
                    echo '</div>';
                endif;
                
                if($resource_capacity):
                    echo  '<div class="resource-repeater__capacity">Capacity per room: ' . $resource_capacity . '</div>';
                endif;

            echo '</div>';
        endwhile;
        echo '</div>';
    endif;
    echo '</div';
elseif($section_style === 'video'):
    $content = get_sub_field('content');
    if($content):
        echo '<div style="width:100%" data-aos="fade-right">' . $content . '</div>';
    endif;
    if (have_rows('video_repeater')):
        echo '<div class="video-repeater">';
        while (have_rows('video_repeater')):
            the_row();
            $video_title = get_sub_field('video_title');
            $video_link = get_sub_field('video_link');
            $video_content = get_sub_field('video_content');
            $episode_content = get_sub_field('episode_content');
            $video_image = get_sub_field('video_image');

            echo '<div class="video-repeater__single '. $resource_style .' ' . $resource_wrapper . '" data-aos="fade-right">';

                if($video_title):
                    echo  '<h3>' . $video_title . '</h3>';
                endif;
                

                echo '<div class="video-repeater__flex" data-aos="fade-right">';

                if($episode_content):

                    // echo  '<div class="video-repeater__left"><a class="video-repeater__video" href=" ' . $video_link . '"><img src="/wp-content/themes/first-event-base/assets/dist/images/play-icon.svg"></a>';

                    echo  '<div class="video-repeater__left"><img src="' . $video_image['url'] . '">';
                    
                    if($episode_content):
                        echo $episode_content;
                    endif;

                    if (have_rows('video_links')):
                        echo '<div class="video-repeater__links">';
                        while (have_rows('video_links')):
                            the_row();
                            $video_link = get_sub_field('video_link');
                            $video_title = get_sub_field('video_title');
                            echo  '<a class="video-repeater__link btn" href="' . $video_link . '" target="_blank">' . $video_title . '</a>';
                        endwhile;
                        echo '</div>';
                    endif;

                    echo '</div>';
                endif;

                echo '<div class="video-repeater__right">';
                    if($video_content):
                        echo  $video_content;
                    endif;
                echo '</div>';

                if($resource_time):
                    echo  '<p class="video-repeater__time">' . $resource_time . '</p>';
                endif;
                if($resource_content):
                    echo  '<p class="video-repeater__content">' . $resource_content . '</p>';
                endif;
                if($resource_link):
                    echo  '<a class="video-repeater__link btn" href="' . $resource_link . '" target="_blank">' . $resource_link_text . '</a>';
                endif;

                if (have_rows('resource_links')):
                    echo '<div class="resource-repeater__links">';
                    while (have_rows('resource_links')):
                        the_row();
                        $resource_link = get_sub_field('resource_link');
                        $resource_title = get_sub_field('resource_title');
                        echo  '<a class="resource-repeater__link btn" href="' . $resource_link . '" target="_blank">' . $resource_title . '</a>';
                    endwhile;
                    echo '</div>';
                endif;

                echo '</div>';

            echo '</div>';
        endwhile;
        echo '</div>';
    endif;
elseif($section_style === 'document'):
    $content = get_sub_field('content');
    if($content):
        echo '<div style="width:100%" data-aos="fade-right">' . $content . '</div>';
    endif;
    if (have_rows('document_repeater')):
        echo '<div class="document-repeater">';
        while (have_rows('document_repeater')):
            the_row();
            $document_title = get_sub_field('document_title');
            $document_link = get_sub_field('document_link');
            $document_content = get_sub_field('document_content');

            echo '<div class="document-repeater__single '. $resource_style .' ' . $resource_wrapper . '" data-aos="fade-right">';

                if($document_title):
                    echo  '<h4 class="document-repeater__title">' . $document_title . '</h4>';
                endif;
                if($document_content):
                    echo  '<p class="document-repeater__content">' . $document_content . '</p>';
                endif;
                if($document_link):
                    echo  '<a class="document-repeater__link btn" href="' . $document_link['url'] . '" target="_blank">' . $document_link['title'] . '</a>';
                endif;

            echo '</div>';
        endwhile;
        echo '</div>';
    endif;
endif;
echo '</div></section>';