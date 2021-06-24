<?php $insta_feed_content = array_key_exists('insta_feed_content', $data)
    ? $data['insta_feed_content']
    : false; ?>

<section class="section insta-feed">
  <div class="container container--no-flex container--md">
    <?php if ($insta_feed_content): echo '<div class="col" data-aos="fade-right">' . $insta_feed_content . '</div>';endif;?>
    <div class="glide--insta">
      <div class="slider-component__slides glide__track" data-glide-el="track">
          <ul class="glide__slides" id="instafeed">
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/dist/images/next.svg"></button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/dist/images/next.svg"></button>
    </div>
      </div>
  </div>
</section>