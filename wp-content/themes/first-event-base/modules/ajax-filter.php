<?php $ajax_filter_content = array_key_exists('ajax_filter_content', $data)
    ? $data['ajax_filter_content']
    : false;
    $ajax_filter_name = array_key_exists('ajax_filter_name', $data)
    ? $data['ajax_filter_name']
    : false;
    $ajax_download_link = array_key_exists('ajax_download_link', $data)
    ? $data['ajax_download_link']
    : false; 
    ?>

<section class="section ajax-filter">
  <div class="container">
     <?php
     // standard button
     if($ajax_filter_content):
        echo '<div class="ajax-filter__content">' . $ajax_filter_content . '</div>';
     endif;

     echo '<div class="ajax-filter__wrapper">';

     // filter name and drop down
     if($ajax_filter_name):
        echo '<div class="ajax-filter__single">
            <h6>' . $ajax_filter_name . '</h6>
            <select id="ajax-filter">
                <option value="all" selected>View all resources</option>';
                if( have_rows('ajax_filter_options') ):
                    while (have_rows('ajax_filter_options')):
                        the_row();
                        $ajax_filter_option = get_sub_field('ajax_filter_option');
                        $ajax_filter_formatted = preg_replace('#[ -]+#', '-', $ajax_filter_option);
                        $ajax_filter_formatted = strtolower($ajax_filter_formatted);
                        echo '<option value="' . $ajax_filter_formatted . '">' . $ajax_filter_option . '</option>';
                    endwhile;
                endif;    
        echo '</select>
        </div>';
     endif;

     // search box
     echo '<div class="ajax-filter__single">
           <h6>Search</h6>
           <div class="ajax-filter__search">
                <input autocomplete="off" type="search" id="search" placeholder="Search resources" />
                <a class="btn" id="search-btn">Search</a>
            </div>
          </div>';

    // clear filter
    echo '<div class="ajax-filter__single small clear-filter"><a id="clear-filter">Clear Filters</a></div>';

    // download link
    if($ajax_download_link):
        echo '<div class="ajax-filter__single small resources"><a target="blank"  class="no-button" href="' . $ajax_download_link['url'] . '">' . $ajax_download_link['title'] . '</a></div>';
    endif;

    ?>
  </div>
</section>