<?php

@ini_set('upload_max_size', '640M');
@ini_set('post_max_size', '640M');
@ini_set('max_execution_time', '3000');

add_filter(‘wp_image_editors’, function () {
    return [‘WP_Image_Editor_GD’];
});

//Sets all POSTS to be Ordered ALPHABETICALLY
function foo_modify_query_order($query)
{
    if ($query->is_main_query()) {
        $query->set('orderby', 'title');
        $query->set('order', 'ASC');
    }
}
add_action('pre_get_posts', 'foo_modify_query_order');

add_action('admin_head', 'my_website_admin_head');
function my_website_admin_head()
{
    wp_dequeue_script('custom-post-type-onomies-admin-options-validate');
}

////////////////////////////////////////
// ADMIN CUSTOMISATION FUNCTIONS
////////////////////////////////////////

/**
 * Add custom CSS styles to all admin pages
 */
add_action('admin_head', 'custom_admin_styles');
function custom_admin_styles()
{
    ?>

	<style>

		/* overwrite max-width styling of yoast block on post pages */
		#snippet_preview {
		max-width: 500px;
		}

		/* make menu items 100% width on admin pages */
		.menu-item-settings,
		.menu-item-bar .menu-item-handle {
			box-sizing: border-box !important;
			width: 100% !important;
		}

	</style>

<?php
}

/**
 * Add custom JS script to all admin pages
 */
add_action('admin_head', 'custom_admin_scripts');
function custom_admin_scripts()
{
    ?>
	<script>
	</script>
<?php
}

/**
 * Remove admin pages from side menu for non-admins
 */

add_action('admin_menu', 'se_remove_menu_items');
function se_remove_menu_items()
{
    $current_user = wp_get_current_user();

    remove_menu_page('edit-comments.php'); // Pages

    if (!current_user_can('administrator')) {
        remove_menu_page('users.php'); // Users
        remove_menu_page('profile.php'); // Users
        remove_menu_page('edit.php?post_type=page'); // Pages
        remove_menu_page('tools.php'); // Pages
    }
}

// /**
// * Remove dashboard widgets for non-admins
// */
// add_action('admin_menu', 'se_remove_dashboard_widgets');
// function se_remove_dashboard_widgets() {
//   if( !current_user_can( 'administrator' ) ):
//     remove_meta_box('dashboard_activity', 'dashboard', 'normal');   // right now
//     remove_meta_box('dashboard_right_now', 'dashboard', 'normal');   // right now
//     remove_meta_box('dashboard_quick_press', 'dashboard', 'normal');   // right now
//     remove_meta_box('dashboard_primary', 'dashboard', 'normal');   // right now
//   endif;
// }

/**
 * Remove textarea WYSIWYG from page admin
 */
// function remove_textarea() {
// 	remove_post_type_support( 'page', 'editor' );
// }
// add_action('admin_init', 'remove_textarea');

if (!current_user_can(‘manage_options’)) {
    add_filter(‘show_admin_bar’, ‘__return_false’);
}

?>
