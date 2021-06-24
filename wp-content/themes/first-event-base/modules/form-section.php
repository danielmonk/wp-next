<?php $form_intro = array_key_exists('form_intro', $data)
    ? $data['form_intro']
    : false; 
    $form_content = array_key_exists('form_content', $data)
    ? $data['form_content']
    : false; 
    $sectionID = array_key_exists('section_id', $data)
    ? $data['section_id']
    : false; 
    ?>

<section class="section form-section <?php echo $sectionID ?>" data-aos="fade-right" id="<?php echo $sectionID ?>">
    <div class="container">
        <?php if ($form_intro): ?>
            <div class="form-section__intro"><?php echo $form_intro ?></div>
        <?php endif; ?>
        <?php if ($form_content): ?>
            <div class="form-section__content"><?php echo $form_content ?></div>
        <?php endif; ?>
        <?php if (have_rows('form_social_logins')):
            echo '<div class="form-section__socials">';
                while (have_rows('form_social_logins')):
                    the_row();
                    $form_social_login = get_sub_field('form_social_login');
                    ?>
                    <div class="form-section__social" data-aos="fade-right">
                        <?php if(($form_social_login) === 'facebook'):
                             if(class_exists('NextendSocialLogin', false)){
                                echo NextendSocialLogin::renderButtonsWithContainer();
                            }
                        endif;?>
                    </div>
                <?php endwhile;
            echo '</div>';
        endif; ?>
    </div>
</section>
