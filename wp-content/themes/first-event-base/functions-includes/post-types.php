<?php
/*
add_action( 'init', 'speakers' );
function speakers() {
    $labels = array(
        'name'               => _x( 'Speakers', 'post type general name' ),
        'singular_name'      => _x( 'Speakers', 'post type singular name' ),
        'menu_name'          => _x( 'Speakers', 'admin menu' ),
        'name_admin_bar'     => _x( 'Speakers', 'add new on admin bar' ),
        'add_new'            => _x( 'Add New', 'Speakers' ),
        'add_new_item'       => __( 'Add New Speakers' ),
        'new_item'           => __( 'New Speakers' ),
        'edit_item'          => __( 'Edit Speakers' ),
        'view_item'          => __( 'View Speakers' ),
        'all_items'          => __( 'All Speakers' ),
        'search_items'       => __( 'Search Speakers' ),
        'parent_item_colon'  => __( 'Parent Speakers:' ),
        'not_found'          => __( 'No Speakers found.' ),
        'not_found_in_trash' => __( 'No Speakers found in Trash.' )
    );
    $args = array(
        'labels'             => $labels,
        'description'        => __( 'Description.', 'your-plugin-textdomain' ),
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'           => array( 'slug' => 'agenda', 'with_front' => false  ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_icon'          => 'dashicons-list-view',
        'menu_position'      => null,
        'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt', 'comments' )
    );
    register_taxonomy( 'speakers', array( 'speakers' ), $args );
    register_post_type( 'speakers', $args );
}*/

?>