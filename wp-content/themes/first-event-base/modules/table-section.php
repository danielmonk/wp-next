<?php $table_title = array_key_exists('table_title', $data)
    ? $data['table_title']
    : false; 
    $table_intro = array_key_exists('table_intro', $data)
    ? $data['table_intro']
    : false; 
    $table_field = array_key_exists('table_field', $data)
    ? $data['table_field']
    : false; 
    $background_image = array_key_exists('background_image', $data)
    ? $data['background_image']
    : false; 
    $table_title_clean = preg_replace('/\s*/', '', $table_title);
    $table_title_clean = strtolower($table_title_clean);
    ?>

<?php 

echo '<section class="section table-section ' . $table_title_clean . '" id="' . $table_title_clean . '"><div class="section__image" style="background-image:url(' . $background_image . ')"></div><div class="container">';

// if title echo
if($table_title):
    echo '<h2 data-aos="fade-right">' . $table_title . '</h2>';
endif;

// if intro echo
if($table_intro):
    echo '<div data-aos="fade-right">'. $table_intro . '</div>';
endif;

// if table fields
if ( ! empty ( $table_field ) ) {

    echo '<table border="0">';

        if ( ! empty( $table_field['caption'] ) ) {

            echo '<caption>' . $table_field['caption'] . '</caption>';
        }

        if ( ! empty( $table_field['header'] ) ) {

            echo '<thead data-aos="fade-right">';

                echo '<tr>';

                    foreach ( $table_field['header'] as $th ) {

                        echo '<th>';
                            echo $th['c'];
                        echo '</th>';
                    }

                echo '</tr>';

            echo '</thead>';
        }

        echo '<tbody data-aos="fade-right">';

            foreach ( $table_field['body'] as $tr ) {

                echo '<tr>';

                    foreach ( $tr as $td ) {

                        echo '<td>';
                            echo $td['c'];
                        echo '</td>';
                    }

                echo '</tr>';
            }

        echo '</tbody>';

    echo '</table>';
}

echo '</div></section>';