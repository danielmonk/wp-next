<div class="padding-full" id="slideout">
    <h3><?php the_field('slide_out_title'); ?></h3>
    <div class="padding-full" id="slideout_inner">
        <?php the_field('slide_out_copy'); ?>
       
        <?php if ( is_page( 'page-event-map.php' ) ) : ?>
            <p style="display: none;">TEST</p>
            <div class="tab">
                <div class="tab_menu">
                    <ul class="row">
                        <li class="col-12 col-md-6 selected">17 May 2021</li>
                        <li class="col-12 col-md-6">18 May 2021</li>
                    </ul>
                </div>

                <div class="tab_box">
                    <div class="tab_box_inner">
                        <div class="row">

                            <?php if( have_rows('agenda_monday', 26) ): ?>
                                <?php while( have_rows('agenda_monday', 26) ) : the_row(); ?>
                                    <?php $monday_times = get_sub_field('monday_times', 26); ?>
                                    <?php $monday_session = get_sub_field('monday_session', 26); ?>
                                    <?php $monday_location = get_sub_field('monday_location', 26); ?>
                                    <div class="col-md-12 text-center time-container">
    
                                        <p><?php echo $monday_session; ?></p>
                                        <p><?php echo $monday_times; ?></p>
                                        <p><?php echo $monday_location; ?></p>
                                    </div>
                                <?php endwhile; ?>
                            <?php endif; ?>
                        </div> 
                    </div>
                    <div class="tab_box_inner">
                        <div class="row">
                            <?php if( have_rows('agenda_tuesday', 26) ): ?>
                                <?php while( have_rows('agenda_tuesday', 26) ) : the_row(); ?>
                                    <?php $tuesday_times = get_sub_field('tuesday_times', 26); ?>
                                    <?php $tuesday_session = get_sub_field('tuesday_session', 26); ?>
                                    <?php $tuesday_location = get_sub_field('tuesday_location', 26); ?>
                        
                                    <div class="col-md-12 text-center">
                                        <p> <?php echo $tuesday_session; ?></p>
                                        <p><?php echo $tuesday_times; ?></p>
                                        <p><?php echo $tuesday_location; ?></p>
                                    </div>
                                <?php endwhile; ?>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        <?php endif; ?>

    </div>
</div>


