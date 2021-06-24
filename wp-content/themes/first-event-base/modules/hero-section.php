<?php
$section_id = array_key_exists('section_id', $data)
? $data['section_id']
: false;
$hero_image = array_key_exists('hero_image', $data)
    ? $data['hero_image']
    : false;
$hero_image_mobile = array_key_exists('hero_image_mobile', $data)
? $data['hero_image_mobile']
: false;
$hero_content = array_key_exists('hero_content', $data)
    ? $data['hero_content']
    : false;
$show_login_form = array_key_exists('show_login_form', $data)
    ? $data['show_login_form']
    : false;
$hero_image_url = $hero_image["url"];
$hero_image_mobile_url = $hero_image_mobile["url"];
$full_height = array_key_exists('full_height', $data)
    ? $data['full_height']
    : false;
$hero_style = array_key_exists('hero_style', $data)
? $data['hero_style']
: false;
$button_block = array_key_exists('button_block', $data)
? $data['button_block']
: false;
$block_count = array_key_exists('block_count', $data)
? $data['block_count']
: false;
$live_stream_time = array_key_exists('live_stream_time', $data)
? $data['live_stream_time']
: false; 
date_default_timezone_set('Europe/London');
$now = new DateTime();
$future_date = new DateTime($live_stream_time);
$interval = $future_date->diff($now);
$hours = $interval->h;
$hours = $hours + ($interval->days*24);


// check for full height
if ($full_height):
    $full = "hero-section--full-height";
else:
    $full = '';
endif;

//check hero style
if ($hero_style === 'multiple'):
    $style = "hero-section--multiple";
else:
    $style = '';
endif;


$parallax_class = 'js-parallax-section';
$parallax_data = "data-from='0px' data-to='100px'";
?>


<?php
    //if hero style is normal load normal tags
    if($hero_style === 'normal'):
        if ($hero_image):?>
            <section class='section hero-section hero-section--image <?php echo $full ?>' id='<?php echo $section_id ?> section-<?php echo $block_count ?>'>
                <div class='hero-section__image'  style='background-image:url("<?php echo $hero_image_url ?>");'></div>
                <?php if($hero_image_mobile): ?>
                    <div class='hero-section__image--mobile'  style='background-image:url("<?php echo $hero_image_mobile_url ?>");'></div>
                <?php endif; ?>
        <?php else:
            echo "<section class='hero-section " . $full . "'>";
        endif; 
    //if hero style is 
    elseif($hero_style === 'multiple'):
        echo "<section class='hero-section " . $full . " " . $style ." " . $parallax_class . "' " . $parallax_data . " id='" . $section_id .  " section-" . $block_count . "'>";
    endif;
    echo "<div class='container'>";
?>

    <!--<div class="container">-->
        <?php
        // add button block if exists
        if($button_block):
            $button_url = $button_block['url'];
            $button_title = $button_block['title'];
            $button_target = $button_block['target'] ? $button_block['target'] : '_self';
            $button_block_html = "<a class='btn hero-section__button' target='" .  $button_target . "' href='" . $button_url . "' data-id='popup-login'>" . $button_title . "</a>"; else : $button_block_html = '';
        endif;

        if($live_stream_time){
            $live_stream_html = '<div class="hero-section__time">Bring Pride home, wherever you are in <strong>' . $interval->format("%d day, %h hr, %i min") .'</strong></div>';
        }

        if ($live_stream_html):
            echo "<div class='hero-section__content'>
            <h1>Pride 2021</h1>
            " .
                $live_stream_html . " " . $hero_content . " " . $button_block_html . "
                </div>";
        endif;
        if ($show_login_form):
            //if (is_user_logged_in()):
            // nothing
            //else:
            echo "<div class='col transition-fade' id='swup'><div class='hero-section__login' data-aos='fade-left'>" .
                do_shortcode("[wp_login_form]") .
                "</div></div>";
            //endif;
        endif;
        ?>
    <!--</div>-->

    <?php
        // multiple images
        if (have_rows('hero_image_repeater')):
            $delay = 200;
            echo '<div class="hero-section__multiple-images">';
            // loop through rows
            while (have_rows('hero_image_repeater')):
                the_row();
                $hero_image = get_sub_field('hero_image')['url'];
                echo '<img class="hero-section__multiple-image image-'. $count .' o-anim-ty" src="' . $hero_image .'"  data-aos="fade-up" data-aos-delay="' . $delay . '">';
                $delay = $delay + 200;
            endwhile;
            echo '</div>';
        endif;
    ?>

    <?php
        // parrallax icons section
        if (have_rows('parallax_icons')):
            $count = 1;
            echo '<div class="c-trigger"></div>';
            echo '<div class="c-spacer"></div>';
            echo '<div class="hero-section__parallax-icons">';
            // loop through parallax rows
            while (have_rows('parallax_icons')):
                the_row();
                $parallax_icon = get_sub_field('parallax_icon')['url'];
                echo '<img class="hero-section__parallax-icon icon-'. $count .' o-anim-ty star-animation star-animation--'. $count  .'" src="' . $parallax_icon .'">';
                $count++;
            endwhile;
            echo '</div>';
        endif;
    ?>
  
<?php echo "</div>"; ?>
</section>