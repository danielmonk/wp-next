<?php $team_section_content = array_key_exists('team_section_content', $data)
    ? $data['team_section_content']
    : false; ?>

<!-- INFO BOXES REPEATER CONTENT --> 
<?php
echo '<section class="section team-section"><div class="container container--no-flex container--md"><div class="col">';

echo $team_section_content
    ? '<div class="team-section__content" data-aos="fade-right">' .
        $team_section_content .
        '</div>'
    : '';

// check value info_boxes_repeater
if (have_rows('team_section_repeater')):
    echo '<div class="team-section__repeater">';
    // loop through rows
    while (have_rows('team_section_repeater')):
        the_row();
        $team_member_name = get_sub_field('team_member_name');
        $team_member_job_role = get_sub_field('team_member_job_role');
        $team_member_content = get_sub_field('team_member_content');
        $team_member_image = get_sub_field('team_member_image');

        echo "<div class='team-section__single'  data-aos='fade-right'>";
        echo $team_member_image
            ? '<div class="team-section__left"><img class="team-section__image" src="' .
                $team_member_image['url'] .
                '"></div>'
            : '';
        echo $team_member_name
            ? '<div class="team-section__right"><div class="team-section__title"><h4>' .
                $team_member_name .
                '</h4></div>'
            : '<div class="team-section__right">';
        echo $team_member_job_role
            ? '<div class="team-section__job"><p>' .
                $team_member_job_role .
                '</p></div>'
            : '';
        echo $team_member_content
            ? '<div class="team-section__content">' .
                $team_member_content .
                '</div></div>'
            : '</div>';
        echo '</div>';
    endwhile;
    echo '</div>';
endif;

echo '</div></div></section>';


?>
