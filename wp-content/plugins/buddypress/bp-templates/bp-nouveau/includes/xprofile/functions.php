<?php
/**
 * xProfile functions
 *
 * @since 3.0.0
 * @version 3.0.0
 */

// Exit if accessed directly.
defined('ABSPATH') || exit();

/**
 * Register Scripts for the xProfile component
 *
 * @since 3.0.0
 *
 * @param array $scripts The array of scripts to register
 *
 * @return array The same array with the specific groups scripts.
 */
function bp_nouveau_xprofile_register_scripts($scripts = [])
{
    if (!isset($scripts['bp-nouveau'])) {
        return $scripts;
    }

    return array_merge($scripts, [
        'bp-nouveau-xprofile' => [
            'file' => 'js/buddypress-xprofile%s.js',
            'dependencies' => ['bp-nouveau'],
            'footer' => true,
        ],
    ]);
}

/**
 * Enqueue the xprofile scripts
 *
 * @since 3.0.0
 */
function bp_nouveau_xprofile_enqueue_scripts()
{
    if (!bp_is_user_profile_edit() && !bp_is_register_page()) {
        return;
    }

    wp_enqueue_script('bp-nouveau-xprofile');
}
