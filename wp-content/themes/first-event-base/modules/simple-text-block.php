<?php $simple_text_block = array_key_exists('simple_text_block', $data)
    ? $data['simple_text_block']
    : false; 
    $sectionID = array_key_exists('section_id', $data)
    ? $data['section_id']
    : false; 
    $background_color = array_key_exists('background_colour', $data)
    ? $data['background_colour']
    : false;
    ?>

<!--SIMPLE TEXT BLOCK --> 
<?php // check value exists
if ($simple_text_block):
    echo '<section class="section simple-text-block ' . $sectionID . '" data-aos="fade-right"  id="' . $sectionID . '" style="background-color:'. $background_color .';"><div class="container container--no-flex"><div class="col">' .
        $simple_text_block .
        '</div></div></section>';
endif;
?>
