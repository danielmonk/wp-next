<?php $background_color = array_key_exists('background_colour', $data)
    ? $data['background_colour']
    : false;

if (have_rows('video_section')):
     echo '<section class="section video-section" style="background-color:'. $background_color .';">
                    <div class="container container--md">';

     // loop through rows
     while (have_rows('video_section')):
         the_row();

         // Case: Video Content
         if (get_row_layout() == 'video_content'):
             $video_content = get_sub_field('video_content');
             $videoID = get_sub_field('video_id');

             echo "<div id='" .
                 $videoID .
                 "' class='column' data-aos='fade-right'>" .
                 $video_content .
                 "</div>";

             // Case: Video Embed
         elseif (get_row_layout() == 'video_embed'):
             $video_embed = get_sub_field('video_embed');

             echo "<div class='column' data-aos='fade-right' style='width:100%;'><div style='position:relative;'>" .
                 $video_embed .
                 "</div></div>";
         endif;
     endwhile;

     echo '</div></section>';
 endif;
?>
