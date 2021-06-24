<?php
/**
 * SVG Icon helper functions
 *
 * @package Genesis\Blocks
 */

if (!function_exists('genesis_blocks_svg')) {
    /**
     * Output and Get Theme SVG.
     * Output and get the SVG markup for an icon in the genesis_blocks_SVG_Icons class.
     *
     * @param string $svg_name The name of the icon.
     * @param string $group The group the icon belongs to.
     * @param string $color Color code.
     */
    function genesis_blocks_svg($svg_name, $group = 'ui', $color = '')
    {
        echo genesis_blocks_get_svg($svg_name, $group, $color); //phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Escaped in genesis_blocks_get_svg();.
    }
}

if (!function_exists('genesis_blocks_get_svg')) {
    /**
     * Get information about the SVG icon.
     *
     * @param string $svg_name The name of the icon.
     * @param string $group The group the icon belongs to.
     * @param string $color Color code.
     */
    function genesis_blocks_get_svg($svg_name, $group = 'ui', $color = '')
    {
        // Make sure that only our allowed tags and attributes are included.
        $svg = wp_kses(
            GenesisBlocks_SVG_Icons::get_svg($svg_name, $group, $color),
            [
                'svg' => [
                    'class' => true,
                    'xmlns' => true,
                    'width' => true,
                    'height' => true,
                    'viewbox' => true,
                    'aria-hidden' => true,
                    'role' => true,
                    'focusable' => true,
                ],
                'path' => [
                    'fill' => true,
                    'fill-rule' => true,
                    'd' => true,
                    'transform' => true,
                ],
                'polygon' => [
                    'fill' => true,
                    'fill-rule' => true,
                    'points' => true,
                    'transform' => true,
                    'focusable' => true,
                ],
            ]
        );

        if (!$svg) {
            return false;
        }
        return $svg;
    }
}
