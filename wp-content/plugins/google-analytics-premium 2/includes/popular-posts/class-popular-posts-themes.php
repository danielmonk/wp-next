<?php
/**
 * Popular posts theme-specific functionality.
 *
 * @package MonsterInsights
 */

/**
 * Class MonsterInsights_Popular_Posts_Themes
 */
class MonsterInsights_Popular_Posts_Themes
{
    /**
     * The type of widget to load themes for (inline, widget, products).
     *
     * @var string
     */
    public $type;

    /**
     * Holds the array of themes specific to the current type loaded.
     *
     * @var array
     */
    public $themes = [];

    /**
     * Holds the data for the currently selected theme (if indicated in the constructor).
     *
     * @var array
     */
    public $theme = [];

    /**
     * The current theme instance with styles from settings applied.
     *
     * @var array
     */
    public $styled_theme;

    /**
     * The theme options key used to store specific theme styles.
     *
     * @var string
     */
    private $themes_styles_key = 'monsterinsights_popular_posts_theme_settings';

    /**
     * Variable for the theme settings.
     *
     * @var array
     */
    private $themes_styles;

    /**
     * MonsterInsights_Popular_Posts_Themes constructor.
     *
     * @param string $type The type of widget: inline/widget/products.
     * @param string $theme The current theme to load details for.
     */
    public function __construct($type = 'inline', $theme = '')
    {
        $this->type = $type;
        if (method_exists($this, 'get_themes_' . $type)) {
            $this->themes = call_user_func([$this, 'get_themes_' . $type]);
            if (!empty($theme)) {
                $this->theme = isset($this->themes[$theme])
                    ? $this->themes[$theme]
                    : [];

                return $this->theme;
            } else {
                return $this->themes;
            }
        }

        return false;
    }

    /**
     * Get the current theme details with the option to load properties already styled.
     *
     * @return array|mixed
     */
    public function get_theme()
    {
        return $this->theme;
    }

    /**
     * Get the currently loaded themes for the widget type.
     *
     * @return array|mixed
     */
    public function get_themes()
    {
        return $this->themes;
    }

    public function get_theme_stored_styles()
    {
        if (!isset($this->themes_styles)) {
            $this->themes_styles = get_option($this->themes_styles_key, []);
        }

        return $this->themes_styles;
    }

    /**
     * Go through the themes and apply styles from the stored settings.
     *
     * @var string $type The instance type: inline/widget/products.
     * @var array  $themes The themes to process/apply styles for.
     */
    public function process_themes_styles($type, $themes)
    {
        $settings = $this->get_theme_stored_styles();

        if (!empty($settings[$type])) {
            foreach ($themes as $theme_key => $theme_values) {
                if (!empty($settings[$type][$theme_key])) {
                    foreach (
                        $themes[$theme_key]['styles']
                        as $object => $props
                    ) {
                        if (!empty($settings[$type][$theme_key][$object])) {
                            foreach ($props as $style_key => $style_value) {
                                if (
                                    !empty(
                                        $settings[$type][$theme_key][$object][
                                            $style_key
                                        ]
                                    )
                                ) {
                                    $themes[$theme_key]['styles'][$object][
                                        $style_key
                                    ] =
                                        $settings[$type][$theme_key][$object][
                                            $style_key
                                        ];
                                }
                            }
                        }
                    }
                }
            }
        }

        return $themes;
    }

    /**
     * Get the themes for the inline widget type.
     *
     * @return array
     */
    public function get_themes_inline()
    {
        $themes = [
            'alpha' => [
                'label' => 'Alpha',
                'styles' => [
                    'title' => [
                        'color' => '#393F4C',
                        'size' => 18,
                        'text' =>
                            '15 Proven Ways to Repurpose Content on Your WordPress Site',
                    ],
                    'label' => [
                        'color' => '#EB5757',
                        'text' => 'Trending',
                    ],
                    'background' => [
                        'color' => '#F0F2F4',
                    ],
                ],
                'level' => 'lite',
            ],
            'beta' => [
                'label' => 'Beta',
                'styles' => [
                    'title' => [
                        'color' => '#393F4C',
                        'size' => 18,
                        'text' =>
                            'How to Use Google Trends to Boost Traffic and Sales (9 Simple Ways)',
                    ],
                    'label' => [
                        'color' => '#EB5757',
                        'text' => 'Trending',
                    ],
                    'background' => [
                        'border' => '#F0F2F4',
                    ],
                    'image' => 'theme-preview-beta.png',
                ],
                'image' => true,
                'level' => 'lite',
            ],
            'charlie' => [
                'label' => 'Charlie',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 16,
                    ],
                    'label' => [
                        'color' => '#393f4c',
                        'text' => 'Popular Stories Right now',
                    ],
                    'border' => [
                        'color' => '#D3D7DE',
                    ],
                ],
                'list' => [
                    '15 Proven Ways to Repurpose Content on Your WordPress Site',
                    'How to Use Google Trends to Boost Traffic and Sales (9 Simple Ways)',
                    'How to Set Up Online Ordering for Your Restaurant Website',
                ],
                'posts' => 3,
                'level' => 'lite',
            ],
            'delta' => [
                'label' => 'Delta',
                'styles' => [
                    'icon' => [
                        'color' => '#EB5757',
                    ],
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 16,
                        'text' =>
                            'How to Use Google Trends to Boost Traffic and Sales (9 Simple Ways)',
                    ],
                    'label' => [
                        'color' => '#EB5757',
                        'text' => 'Trending',
                    ],
                    'background' => [
                        'border' => '#F0F2F4',
                    ],
                ],
                'level' => 'plus',
            ],
            'echo' => [
                'label' => 'Echo',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 18,
                        'text' =>
                            '15 Proven Ways to Repurpose Content on Your WordPress Site',
                    ],
                    'label' => [
                        'color' => '#EB5757',
                        'text' => 'Trending:',
                    ],
                    'background' => [
                        'color' => '#F0F2F4',
                    ],
                ],
                'level' => 'plus',
            ],
            'foxtrot' => [
                'label' => 'Foxtrot',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 18,
                        'text' =>
                            'How to Build an Email List in WordPress – Email Marketing 101',
                    ],
                    'label' => [
                        'color' => '#EB5757',
                        'text' => 'Trending',
                    ],
                    'image' => 'theme-preview-image.jpg',
                ],
                'image' => true,
                'level' => 'plus',
            ],
            'golf' => [
                'label' => 'Golf',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 16,
                        'text' =>
                            '15 Proven Ways to Repurpose Content on Your WordPress Site',
                    ],
                    'label' => [
                        'color' => '#EB5757',
                        'text' => 'Popular now',
                    ],
                    'border' => [
                        'color' => '#EB5757',
                        'color2' => '#E2E4E9',
                    ],
                ],
                'level' => 'plus',
            ],
            'hotel' => [
                'label' => 'Hotel',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 18,
                        'text' =>
                            'How to Use Google Trends to Boost Traffic and Sales (9 Simple Ways)',
                    ],
                    'icon' => [
                        'color' => '#EB5757',
                    ],
                ],
                'level' => 'plus',
            ],
            'india' => [
                'label' => 'India',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 14,
                        'text' =>
                            'How to Use Google Trends to Boost Traffic and Sales (9 Simple Ways)',
                    ],
                    'label' => [
                        'color' => '#EB5757',
                        'text' => 'Trending:',
                    ],
                    'border' => [
                        'color' => '#EB5757',
                    ],
                    'background' => [
                        'color' => '#f0f2f4',
                    ],
                ],
                'level' => 'plus',
            ],
            'juliett' => [
                'label' => 'Juliett',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 18,
                        'text' =>
                            'How to Build an Email List in WordPress – Email Marketing 101',
                    ],
                    'label' => [
                        'color' => '#393f4c',
                        'background' => '#e2e4e9',
                        'text' => 'Trending',
                    ],
                    'border' => [
                        'color' => '#e2e4e9',
                    ],
                ],
                'image' => true,
                'level' => 'plus',
            ],
            'kilo' => [
                'label' => 'Kilo',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 18,
                        'text' =>
                            'How to Use Google Trends to Boost Traffic and Sales (9 Simple Ways)',
                    ],
                    'label' => [
                        'color' => '#EB5757',
                        'text' => 'Popular now',
                    ],
                    'border' => [
                        'color' => '#e2e4e9',
                        'color2' => '#e2e4e9',
                    ],
                ],
                'level' => 'plus',
            ],
            'lima' => [
                'label' => 'Lima',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 18,
                        'text' =>
                            '15 Proven Ways to Repurpose Content on Your WordPress Site',
                    ],
                    'label' => [
                        'color' => '#EB5757',
                        'text' => 'Trending',
                    ],
                    'background' => [
                        'color' => '#f0f2f4',
                    ],
                    'image' => 'theme-preview-image-2.jpg',
                ],
                'image' => true,
                'level' => 'plus',
            ],
            'mike' => [
                'label' => 'Mike',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 18,
                        'text' =>
                            'How to Build an Email List in WordPress – Email Marketing 101',
                    ],
                    'label' => [
                        'color' => '#fff',
                        'background' => '#f2994a',
                        'text' => 'Trending',
                    ],
                    'background' => [
                        'color' => '#f0f2f4',
                    ],
                    'image' => 'theme-preview-image.jpg',
                ],
                'image' => true,
                'level' => 'plus',
            ],
            'november' => [
                'label' => 'November',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 16,
                        'text' =>
                            'How to Use Google Trends to Boost Traffic and Sales (9 Simple Ways)',
                    ],
                    'label' => [
                        'color' => '#eb5757',
                        'text' => 'Trending',
                    ],
                    'background' => [
                        'border' => '#f0f2f4',
                    ],
                    'icon' => [
                        'background' => '#eb5757',
                        'color' => '#fff',
                    ],
                ],
                'level' => 'plus',
            ],
        ];

        return $this->process_themes_styles('inline', $themes);
    }

    /**
     * Get the themese for the widget instance.
     *
     * @return array
     */
    public function get_themes_widget()
    {
        $themes = [
            'alpha' => [
                'label' => 'Alpha',
                'styles' => [
                    'title' => [
                        'color' => '#393F4C',
                        'size' => 16,
                    ],
                    'background' => [
                        'color' => '#F0F2F4',
                    ],
                ],
                'list' => [
                    'items' => [
                        'How to Set Up WordPress User Activity Tracking in 3 Easy Steps',
                        'How to Share Your Google Analytics Reports with Others (5 Easy Ways)',
                        '12 Best Social Media Analytics Tools for Marketers (Tried & Tested)',
                        '9 Proven Ways to Get Google to Index Your Website Right Away',
                    ],
                ],
                'level' => 'lite',
            ],
            'beta' => [
                'label' => 'Beta',
                'styles' => [
                    'title' => [
                        'color' => '#393F4C',
                        'size' => 16,
                    ],
                    'background' => [
                        'border' => '#1EC185',
                    ],
                ],
                'list' => [
                    'items' => [
                        '9 Proven Ways to Get Google to Index Your Website Right Away',
                        'How to Share Your Google Analytics Reports with Others (5 Easy Ways)',
                        '12 Best Social Media Analytics Tools for Marketers (Tried & Tested)',
                        'Uncover How Much Traffic Does a Website Get (5 Effortless Ways)',
                    ],
                ],
                'level' => 'lite',
            ],
            'charlie' => [
                'label' => 'Charlie',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 16,
                    ],
                    'background' => [
                        'color' => '#F0F2F4',
                        'border' => '#338EEF',
                    ],
                ],
                'list' => [
                    'items' => [
                        'Uncover How Much Traffic Does a Website Get (5 Effortless Ways)',
                        'How to Share Your Google Analytics Reports with Others (5 Easy Ways)',
                        '12 Best Social Media Analytics Tools for Marketers (Tried & Tested)',
                        '9 Proven Ways to Get Google to Index Your Website Right Away',
                    ],
                ],
                'level' => 'lite',
            ],
            'delta' => [
                'label' => 'Delta',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 18,
                    ],
                    'background' => [
                        'border' => '#D3D7DE',
                    ],
                    'meta' => [
                        'color' => '#99A1B3',
                        'author' => 'on',
                        'date' => 'on',
                        'separator' => '&#9679;',
                    ],
                ],
                'list' => [
                    'items' => [
                        '9 Proven Ways to Get Google to Index Your Website Right Away',
                        'How to Share Your Google Analytics Reports with Others (5 Easy Ways)',
                        '12 Best Social Media Analytics Tools for Marketers (Tried & Tested)',
                        'Uncover How Much Traffic Does a Website Get (5 Effortless Ways)',
                    ],
                    'images' => [
                        'theme-widget-1.jpg',
                        'theme-widget-2.jpg',
                        'theme-widget-3.jpg',
                        'theme-widget-4.jpg',
                    ],
                ],
                'image' => true,
                'level' => 'pro',
            ],
            'echo' => [
                'label' => 'Echo',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 16,
                    ],
                    'meta' => [
                        'color' => '#99A1B3',
                        'size' => 12,
                        'author' => 'on',
                        'date' => 'on',
                        'comments' => 'on',
                        'separator' => 'on',
                    ],
                    'comments' => [
                        'color' => '#393F4C',
                    ],
                ],
                'list' => [
                    'items' => [
                        '9 Proven Ways to Get Google to Index Your Website Right Away',
                        'How to Share Your Google Analytics Reports with Others (5 Easy Ways)',
                        '12 Best Social Media Analytics Tools for Marketers (Tried & Tested)',
                        'Uncover How Much Traffic Does a Website Get (5 Effortless Ways)',
                    ],
                    'images' => [
                        'theme-widget-5.jpg',
                        'theme-widget-5.jpg',
                        'theme-widget-5.jpg',
                        'theme-widget-5.jpg',
                    ],
                ],
                'image' => true,
                'level' => 'pro',
            ],
            'foxtrot' => [
                'label' => 'Foxtrot',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 16,
                    ],
                    'meta' => [
                        'color' => '#99A1B3',
                        'size' => 12,
                        'author' => 'on',
                        'date' => 'on',
                        'comments' => 'on',
                        'separator' => '|',
                    ],
                    'comments' => [
                        'color' => '#393F4C',
                    ],
                ],
                'list' => [
                    'items' => [
                        '9 Proven Ways to Get Google to Index Your Website Right Away',
                        '12 Best Social Media Analytics Tools for Marketers (Tried & Tested) ',
                        'Uncover How Much Traffic Does a Website Get (5 Effortless Ways)',
                        'How to Share Your Google Analytics Reports with Others (5 Easy Ways)',
                    ],
                ],
                'level' => 'pro',
            ],
            'golf' => [
                'label' => 'Golf',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 16,
                    ],
                    'label' => [
                        'color' => '#fff',
                        'background' => '#EB5757',
                        'text' => 'Trending:',
                        'editable' => true,
                    ],
                    'meta' => [
                        'color' => '#99A1B3',
                        'size' => 12,
                        'author' => 'on',
                        'date' => 'on',
                        'comments' => 'on',
                        'separator' => '|',
                    ],
                    'comments' => [
                        'color' => '#393F4C',
                    ],
                ],
                'list' => [
                    'items' => [
                        '9 Proven Ways to Get Google to Index Your Website Right Away',
                        '12 Best Social Media Analytics Tools for Marketers (Tried & Tested) ',
                        'Uncover How Much Traffic Does a Website Get (5 Effortless Ways)',
                        'How to Share Your Google Analytics Reports with Others (5 Easy Ways)',
                    ],
                ],
                'level' => 'pro',
            ],
            'hotel' => [
                'label' => 'Hotel',
                'styles' => [
                    'title' => [
                        'color' => '#fff',
                        'size' => 16,
                    ],
                    'meta' => [
                        'color' => '#fff',
                        'size' => 12,
                        'author' => 'on',
                        'date' => 'on',
                    ],
                ],
                'list' => [
                    'items' => [
                        'How to Allow WordPress to Upload All File Types (The Easy Way)',
                        '14 Handy Google Search Operators for SEO (A Complete List)',
                        'How to Write Irresistible Meta Descriptions for SEO & More Clicks?',
                        'Uncover How Much Traffic Does a Website Get (5 Effortless Ways)',
                    ],
                    'images' => [
                        'theme-widget-5.jpg',
                        'theme-widget-6.jpg',
                        'theme-widget-7.jpg',
                        'theme-widget-8.jpg',
                    ],
                ],
                'image' => true,
                'level' => 'pro',
            ],
        ];

        return $this->process_themes_styles('widget', $themes);
    }

    /**
     * Get the themes for the products widget.
     *
     * @return array
     */
    public function get_themes_products()
    {
        $themes = [
            'alpha' => [
                'label' => 'Alpha',
                'styles' => [
                    'title' => [
                        'color' => '#393F4C',
                        'size' => 16,
                    ],
                    'background' => [
                        'border' => '#d3d7de',
                    ],
                    'price' => [
                        'color' => '#393F4C',
                        'size' => 12,
                    ],
                    'rating' => [
                        'color' => '#EB5757',
                    ],
                    'meta' => [
                        'price' => 'on',
                        'rating' => 'on',
                        'image' => 'on',
                    ],
                ],
                'list' => [
                    'items' => [
                        'WPBeginner 10-Year Anniversary Gray T-Shirt',
                        'WPForms Small White Logo T-Shirt',
                        'OptinMonster White Text Color Mascot T-Shirt',
                        'WPForms Make Things Simple Gray T-Shirt',
                    ],
                    'images' => [
                        'theme-products-1.jpg',
                        'theme-products-2.jpg',
                        'theme-products-3.jpg',
                        'theme-products-4.jpg',
                    ],
                    'prices' => ['$59.99', '$28.00', '$65.00', '$59.50'],
                ],
            ],
            'beta' => [
                'label' => 'Beta',
                'styles' => [
                    'title' => [
                        'color' => '#393F4C',
                        'size' => 16,
                    ],
                    'background' => [
                        'color' => '#F0F2F4',
                    ],
                    'price' => [
                        'color' => '#4C5566',
                        'size' => 12,
                    ],
                    'rating' => [
                        'color' => '#F2D74A',
                    ],
                    'meta' => [
                        'price' => 'on',
                        'rating' => 'on',
                        'image' => 'on',
                    ],
                ],
                'list' => [
                    'items' => [
                        'Admin WPBeginner Black T-Shirt',
                        'Black WP Beginner logo T-Shirt',
                        'Technically Awesome Groovy White T-Shirt',
                        'Technically Awesome Code Comment Black T-Shirt',
                    ],
                    'images' => [
                        'theme-products-5.jpg',
                        'theme-products-7.jpg',
                        'theme-products-6.jpg',
                        'theme-products-8.jpg',
                    ],
                    'prices' => ['$29.50', '$28.00', '$65.00', '$59.50'],
                ],
            ],
            'charlie' => [
                'label' => 'Charlie',
                'styles' => [
                    'title' => [
                        'color' => '#fff',
                        'size' => 16,
                    ],
                    'rating' => [
                        'color' => '#F2D74A',
                    ],
                    'price' => [
                        'color' => '#fff',
                        'size' => 12,
                    ],
                    'meta' => [
                        'price' => 'on',
                        'rating' => 'on',
                    ],
                ],
                'list' => [
                    'items' => [
                        'Admin WPBeginner Black T-Shirt',
                        'Black WP Beginner logo T-Shirt',
                        'Technically Awesome Groovy White T-Shirt',
                        'Technically Awesome Code Comment Black T-Shirt',
                    ],
                    'images' => [
                        'theme-products-5.jpg',
                        'theme-products-7.jpg',
                        'theme-products-6.jpg',
                        'theme-products-8.jpg',
                    ],
                    'prices' => ['$29.50', '$28.00', '$65.00', '$59.50'],
                ],
                'image' => true,
            ],
            'delta' => [
                'label' => 'Delta',
                'styles' => [
                    'title' => [
                        'color' => '#393f4c',
                        'size' => 14,
                    ],
                    'rating' => [
                        'color' => '#F2D74A',
                    ],
                    'price' => [
                        'color' => '#4C5566',
                        'size' => 12,
                    ],
                    'meta' => [
                        'price' => 'on',
                        'rating' => 'on',
                        'image' => 'on',
                    ],
                ],
                'list' => [
                    'items' => [
                        'Admin WPBeginner Black T-Shirt',
                        'Black WP Beginner logo T-Shirt',
                        'Technically Awesome Groovy White T-Shirt',
                        'Technically Awesome Code Comment Black T-Shirt',
                    ],
                    'images' => [
                        'theme-products-5.jpg',
                        'theme-products-7.jpg',
                        'theme-products-6.jpg',
                        'theme-products-8.jpg',
                    ],
                    'prices' => ['$29.50', '$28.00', '$65.00', '$59.50'],
                ],
            ],
        ];

        return $this->process_themes_styles('products', $themes);
    }
}
