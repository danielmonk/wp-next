<?php $live_stream_content = array_key_exists('live_stream_content', $data)
    ? $data['live_stream_content']
    : false; 
    $live_stream_embed = array_key_exists('live_stream_embed', $data)
    ? $data['live_stream_embed']
    : false; 
    $chat_embed = array_key_exists('chat_embed', $data)
    ? $data['chat_embed']
    : false; 
    $question_embed = array_key_exists('question_embed', $data)
    ? $data['question_embed']
    : false; 
    $sectionID = array_key_exists('section_id', $data)
    ? $data['section_id']
    : false; 
    $background_text_color = array_key_exists('background_text_color', $data)
    ? $data['background_text_color']
    : false; 
    $background_color = array_key_exists('background_color', $data)
    ? $data['background_color']
    : false; 
    $background_image = array_key_exists('background_image', $data)
    ? $data['background_image']
    : false; 
    $background_image_top = array_key_exists('background_image_top', $data)
    ? $data['background_image_top']
    : false; 
    $background_image_left = array_key_exists('background_image_left', $data)
    ? $data['background_image_left']
    : false; 
    $live_stream_time = array_key_exists('live_stream_time', $data)
    ? $data['live_stream_time']
    : false; 
    date_default_timezone_set('Europe/London');
    $now = new DateTime();
    $future_date = new DateTime($live_stream_time);
    $interval = $future_date->diff($now);

    //check for bg image
    if($background_image):
        $background_image_html = '<div class="section__background" style="background-image:url(' . $background_image .');left:' . $background_image_left . '%;top:' . $background_image_top . '%;background-size:cover;width:100%;height:100%;position:absolute;z-index:-1;"></div>';
    else :
        $background_image_html = '';
    endif;
?>

<?php 
    echo '<section class="section old-live-stream-section"  id="' . $sectionID . '" style="background-color:' . $background_color . ';color:' .  $background_text_color . '">
    ' . $background_image_html . '
    <div class="container">';

    if($live_stream_time){
        echo '<div class="old-live-stream-section__time">The live stream will begin in <span class="green">' . $interval->format("%h hr, %i min") .'</span></div>';
    }
    
    //echo '</div>';
    
    //echo '<div class="container container--md">';

    if($live_stream_embed){
        echo '<div class="old-live-stream-section__embed">' . $live_stream_embed .'</div>';
    }

    if($chat_embed){
        echo '<div class="old-live-stream-section__chat closed"><div class="old-live-stream-section__toggle">Chat</div><div class="old-live-stream-section__iframe">' . $chat_embed .'</div></div>';
    }

    if($question_embed){
        echo '<div class="old-live-stream-section__question">' . $question_embed .'</div>';
    }

    if($live_stream_content){
        echo '<div class="old-live-stream-section__content">' . $live_stream_content .'</div>';
    }

    //echo '</div>';

    echo '</div></section>';
?>