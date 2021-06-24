<?php
$noonah_event_name = array_key_exists('noonah_event_name', $data)
    ? $data['noonah_event_name']
    : false;
$noonah_event_type = array_key_exists('noonah_event_type', $data)
    ? $data['noonah_event_type']
    : false;
$noonah_game_code = array_key_exists('noonah_game_code', $data)
    ? $data['noonah_game_code']
    : false;
?>

<section class="section noonah-section">
    <div class="container container--md"><div class="col">
        <div class='column padding-top'><div style='position:relative;padding-top:56.25%;'>
            <?php if ($noonah_event_type === 'photobooth'):
                echo '<iframe src="https://photos.virtualeventsbooth.com/' .
                    $noonah_event_name .
                    '" allow="microphone; camera"></iframe>';
            elseif ($noonah_event_type === 'live-mosaic'):
                echo '<iframe src="https://photos.virtualeventsbooth.com/mosaic/' .
                    $noonah_event_name .
                    '" allow="microphone; camera"></iframe>';
            elseif ($noonah_event_type === 'game'):
                echo $noonah_game_code;
            endif; ?>
        </div>
    </div></div>
    </section>