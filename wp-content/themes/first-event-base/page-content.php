<?php if (have_rows('page_content')): ?>
  <?php
  $block_count = 0;
  echo '<section class="section page-title"><div class="container"><h1>' . get_the_title() .  '</h1></div></section>';
  while (have_rows('page_content')):

      $block_count++;
      the_row();
      ?>

    <?php if (get_row_layout() == 'event_map'): ?>

        <?php load_module('event-map', []); ?>

    <?php elseif (get_row_layout() == 'video_section'): ?>

      <?php load_module('video-section', [
        'background_colour' => get_sub_field('background_colour')
      ]); ?>

    <?php elseif (get_row_layout() == 'hero_section'): ?>

      <?php load_module('hero-section', [
         'section_id' => get_sub_field('section_id'),
         'hero_image' => get_sub_field('hero_image'),
         'hero_image_mobile' => get_sub_field('hero_image_mobile'),
         'hero_content' => get_sub_field('hero_content'),
         'show_login_form' => get_sub_field('show_login_form'),
         'full_height' => get_sub_field('full_height'),
         'hero_style' => get_sub_field('hero_style'),
         'button_block' => get_sub_field('button_block'),
         'live_stream_time' => get_sub_field(
          'live_stream_time'
        ),
         'block_count' => $block_count,

      ]); ?>

    <?php elseif (get_row_layout() == 'noonah_section'): ?>

      <?php load_module('noonah-section', [
          'noonah_event_name' => get_sub_field('noonah_event_name'),
          'noonah_event_type' => get_sub_field('noonah_event_type'),
          'noonah_game_code' => get_sub_field('noonah_game_code'),
      ]); ?>

    <?php elseif (get_row_layout() == 'scrolling_list_element'): ?>

      <?php load_module('scrolling-list-element', [
          'scrolling_list_title' => get_sub_field('scrolling_list_title'),
      ]); ?>

    <?php elseif (get_row_layout() == 'social_media_links'): ?>

      <?php load_module('social-media-links', []); ?>

    <?php elseif (get_row_layout() == 'simple_text_block'): ?>

      <?php load_module('simple-text-block', [
          'section_id' => get_sub_field('section_id'),
          'simple_text_block' => get_sub_field('simple_text_block'),
          'background_colour' => get_sub_field('background_colour')
      ]); ?>

    <?php elseif (get_row_layout() == 'info_boxes'): ?>

      <?php load_module('info-boxes', [
          'info_boxes_content' => get_sub_field('info_boxes_content'),
          'info_box_style' => get_sub_field('info_box_style'),
          'pull_up' => get_sub_field('pull_up'),
          'background_colour' => get_sub_field('background_colour')
      ]); ?>

    <?php elseif (get_row_layout() == 'team_section'): ?>

      <?php load_module('team-section', [
          'team_section_content' => get_sub_field('team_section_content'),
      ]); ?>

    <?php elseif (get_row_layout() == 'slider_component'): ?>

      <?php load_module('slider-component', [
          'slider_component_content' => get_sub_field(
              'slider_component_content'
          ),
      ]); ?>

    <?php elseif (get_row_layout() == 'insta_feed'): ?>

      <?php load_module('insta-feed', [
          'insta_feed_content' => get_sub_field(
              'insta_feed_content'
          ),
      ]); ?>

    <?php elseif (get_row_layout() == 'accordion_section'): ?>

      <?php load_module('accordion-section', [
          'accordion_content' => get_sub_field(
              'accordion_content'
          ),
      ]); ?>

    
    <?php elseif (get_row_layout() == 'old_live_stream_section'): ?>

      <?php load_module('old-live-stream-section', [
          'live_stream_content' => get_sub_field(
              'live_stream_content'
          ),
            'live_stream_embed' => get_sub_field(
              'live_stream_embed'
          ),
          'chat_embed' => get_sub_field(
            'chat_embed'
          ),
          'question_embed' => get_sub_field(
            'question_embed'
          ),
          'live_stream_time' => get_sub_field(
            'live_stream_time'
          ),
          'background_color' => get_sub_field(
            'background_color'
          ),
          'background_text_color' => get_sub_field(
            'background_text_color'
          ),
          'background_image' => get_sub_field(
            'background_image'
          ),
          'background_image_top' => get_sub_field(
            'background_image_top'
          ),
          'background_image_left' => get_sub_field(
            'background_image_left'
          )
      ]); ?>

    <?php elseif (get_row_layout() == 'button_block_section'): ?>

      <?php load_module('button-block-section', [
          'button_block' => get_sub_field(
              'button_block'
          ),
      ]); ?>

    
    <?php elseif (get_row_layout() == 'tabbed_content'): ?>

      <?php load_module('tabbed-content', [
      ]); ?>

        
    <?php elseif (get_row_layout() == 'modal_section'): ?>

      <?php load_module('modal-section', [
        'modal_style' => get_sub_field(
          'modal_style'
        ),
        'modal_content' => get_sub_field(
          'modal_content'
        ),
        'button_block' => get_sub_field(
          'button_block'
        ),
        'modal_text_style' => get_sub_field(
          'modal_text_style'
        )
      ]); ?>

    <?php elseif (get_row_layout() == 'table_section'): ?>

      <?php load_module('table-section', [
        'table_title' => get_sub_field(
          'table_title'
        ),
        'table_intro' => get_sub_field(
          'table_intro'
        ),
        'table_field' => get_sub_field(
          'table_field'
        ),
        'background_image' => get_sub_field(
          'background_image'
        )
      ]); ?>
    

    <?php elseif (get_row_layout() == 'multi_col_section'): ?>

      <?php load_module('multi-col-section', [
        'title' => get_sub_field(
          'title'
        ),
        'background_image' => get_sub_field(
          'background_image'
        ),
        'background_color' => get_sub_field(
          'background_color'
        ),
        'section_style' => get_sub_field(
          'section_style'
        )
      ]); ?>

    <?php elseif (get_row_layout() == 'form_section'): ?>

      <?php load_module('form-section', [
        'form_intro' => get_sub_field(
          'form_intro'
        ),
        'form_content' => get_sub_field(
          'form_content'
        ),
        'section_id' => get_sub_field(
          'section_id'
        )
      ]); ?>

    <?php elseif (get_row_layout() == 'ajax_filter'): ?>

      <?php load_module('ajax-filter', [
        'ajax_filter_content' => get_sub_field(
          'ajax_filter_content'
        ),
        'ajax_filter_name' => get_sub_field(
          'ajax_filter_name'
        ),
        'ajax_download_link' => get_sub_field(
          'ajax_download_link'
        )
      ]); ?>

	<?php endif; ?>

  <?php
  endwhile;
  ?>


<?php endif;
?>
