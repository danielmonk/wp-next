<?php

if (!class_exists('GFForms')) {
    die();
}

if (!class_exists('GFResults')) {
    class GFResults
    {
        protected $_slug;
        protected $_title;
        protected $_icon;
        protected $_callbacks;
        protected $_capabilities;
        protected $_search_title;

        public function __construct($slug, $config)
        {
            $this->_slug = $slug;
            $this->_title = rgar($config, 'title');
            $this->_icon = rgar($config, 'icon');
            $this->_search_title = rgempty('search_title', $config)
                ? esc_html__('Results Filters', 'gravityforms')
                : rgar($config, 'search_title');
            $this->_callbacks = isset($config['callbacks'])
                ? $config['callbacks']
                : [];
            $this->_capabilities = isset($config['capabilities'])
                ? $config['capabilities']
                : [];
        }

        public function init()
        {
            if (!GFCommon::current_user_can_any($this->_capabilities)) {
                return;
            }

            // is any GF page
            if (GFForms::is_gravity_page()) {
                // add top toolbar menu item
                add_filter(
                    'gform_toolbar_menu',
                    [$this, 'add_toolbar_menu_item'],
                    10,
                    2
                );

                // add custom form action
                add_filter(
                    'gform_form_actions',
                    [$this, 'add_form_action'],
                    10,
                    2
                );
            }

            // is results page
            if (rgget('view') == "gf_results_{$this->_slug}") {
                // add the results view
                add_action('gform_entries_view', [$this, 'add_view'], 10, 2);
                add_action('admin_enqueue_scripts', [
                    $this,
                    'enqueue_admin_scripts',
                ]);

                // tooltips
                require_once GFCommon::get_base_path() . '/tooltips.php';
                add_filter('gform_tooltips', [$this, 'add_tooltips']);
            }
        }

        public function enqueue_admin_scripts()
        {
            wp_enqueue_script('jquery-ui-resizable');
            wp_enqueue_script('jquery-ui-datepicker');

            wp_enqueue_script('google_charts');
            wp_enqueue_style('gaddon_results_css');
            wp_enqueue_script('gaddon_results_js');
            $this->localize_results_scripts();
        }

        public static function localize_results_scripts()
        {
            // Get current page protocol
            $protocol = isset($_SERVER['HTTPS']) ? 'https://' : 'http://';
            // Output admin-ajax.php URL with same protocol as current page

            $vars = [
                'ajaxurl' => admin_url('admin-ajax.php', $protocol),
                'imagesUrl' => GFCommon::get_base_url() . '/images',
            ];

            wp_localize_script('gaddon_results_js', 'gresultsVars', $vars);

            $strings = [
                'ajaxError' => wp_strip_all_tags(
                    __(
                        'Error retrieving results. If the problem persists, please contact support.',
                        'gravityforms'
                    )
                ),
            ];

            wp_localize_script(
                'gaddon_results_js',
                'gresultsStrings',
                $strings
            );
        }

        private function get_fields($form)
        {
            return isset($this->_callbacks['fields'])
                ? call_user_func($this->_callbacks['fields'], $form)
                : $form['fields'];
        }

        public function add_form_action($actions, $form_id)
        {
            return $this->filter_menu_items($actions, $form_id, true);
        }

        public function add_toolbar_menu_item($menu_items, $form_id)
        {
            return $this->filter_menu_items($menu_items, $form_id, false);
        }

        public function filter_menu_items($menu_items, $form_id, $compact)
        {
            $form_meta = GFFormsModel::get_form_meta($form_id);
            $results_fields = $this->get_fields($form_meta);
            if (false === empty($results_fields)) {
                $form_id = $form_meta['id'];
                $link_class = '';
                if (rgget('page') == 'gf_new_form') {
                    $link_class = 'gf_toolbar_disabled';
                } elseif (
                    rgget('page') == 'gf_entries' &&
                    rgget('view') == 'gf_results_' . $this->_slug
                ) {
                    $link_class = 'gf_toolbar_active';
                }

                $id = rgget('id');
                if (empty($id)) {
                    //on the form list page, do not use icons
                    $icon = '';
                } else {
                    $icon = $this->_icon;
                    if (empty($icon)) {
                        $icon = '<i class="fa fa-bar-chart-o fa-lg"></i>';
                    }
                }

                $sub_menu_items = [];
                $sub_menu_items[] = [
                    'label' => $this->_title,
                    'icon' => $icon,
                    'title' => esc_html__(
                        'View results generated by this form',
                        'gravityforms'
                    ),
                    'link_class' => $link_class,
                    'url' => admin_url(
                        "admin.php?page=gf_entries&view=gf_results_{$this->_slug}&id={$form_id}"
                    ),
                    'capabilities' => $this->_capabilities,
                ];

                $duplicate_submenus = wp_filter_object_list(
                    rgars($menu_items, 'results/sub_menu_items'),
                    ['label' => $sub_menu_items[0]['label']]
                );
                if (count($duplicate_submenus) > 0) {
                    return $menu_items;
                }

                // If there's already a menu item with the key "results" then merge the two.
                if (isset($menu_items['results'])) {
                    $existing_link_class = $menu_items['results']['link_class'];
                    $link_class == empty($existing_link_class)
                        ? $link_class
                        : $existing_link_class;
                    $existing_capabilities =
                        $menu_items['results']['capabilities'];
                    $merged_capabilities = array_merge(
                        $existing_capabilities,
                        $this->_capabilities
                    );
                    $existing_sub_menu_items =
                        $menu_items['results']['sub_menu_items'];
                    $merged_sub_menu_items = array_merge(
                        $existing_sub_menu_items,
                        $sub_menu_items
                    );
                    $menu_items['results']['link_class'] = $link_class;
                    $menu_items['results'][
                        'capabilities'
                    ] = $merged_capabilities;
                    $menu_items['results'][
                        'sub_menu_items'
                    ] = $merged_sub_menu_items;
                    $menu_items['results']['label'] = esc_html__(
                        'Results',
                        'gravityforms'
                    );
                    $menu_items['results']['icon'] =
                        '<i class="fa fa-bar-chart-o fa-lg"></i>';
                } else {
                    // so far during the page cycle this is the only menu item for this key
                    $menu_items['results'] = [
                        'label' => $compact
                            ? esc_html__('Results', 'gravityforms')
                            : $this->_title,
                        'icon' => $icon,
                        'title' => esc_attr__(
                            'View results generated by this form',
                            'gravityforms'
                        ),
                        'url' => '',
                        'onclick' => 'return false;',
                        'onkeypress' => 'return false;',
                        'menu_class' => 'gf_form_toolbar_results',
                        'link_class' => $link_class,
                        'capabilities' => $this->_capabilities,
                        'sub_menu_items' => $sub_menu_items,
                        'priority' => 750,
                    ];
                }
            }

            return $menu_items;
        }

        public function add_view($view, $form_id)
        {
            if ($view == 'gf_results_' . $this->_slug) {
                $form_id = absint($form_id);
                GFResults::results_page(
                    $form_id,
                    $this->_title,
                    'gf_entries',
                    $view
                );
            }
        }

        public function results_page($form_id, $page_title, $gf_page, $gf_view)
        {
            $form_id = absint($form_id);
            if (empty($form_id)) {
                $forms = RGFormsModel::get_forms();
                if (!empty($forms)) {
                    $form_id = $forms[0]->id;
                }
            }
            $form = GFFormsModel::get_form_meta($form_id);
            $form = gf_apply_filters(
                ['gform_form_pre_results', $form_id],
                $form
            );

            // Set up filter vars
            $start_date = preg_replace('/[^0-9-]/', '', rgget('start'));
            $end_date = preg_replace('/[^0-9-]/', '', rgget('end'));

            $all_fields = $form['fields'];

            $filter_settings = GFCommon::get_field_filter_settings($form);
            $filter_settings = apply_filters(
                'gform_filters_pre_results',
                $filter_settings,
                $form
            );
            $filter_settings = array_values($filter_settings); // reset the numeric keys in case some filters have been unset

            $filter_fields = rgget('f');
            $filter_operators = rgget('o');
            $filter_values = rgget('v');
            $filters = [];

            $init_vars = [];
            if (!empty($filter_fields)) {
                $init_vars['mode'] = rgget('mode');
                foreach ($filter_fields as $i => $filter_field) {
                    $filters[$i]['field'] = $filter_field;
                    $filters[$i]['operator'] = $filter_operators[$i];
                    $filters[$i]['value'] = $filter_values[$i];
                }
                $init_vars['filters'] = $filters;
            }
            $min =
                (defined('SCRIPT_DEBUG') && SCRIPT_DEBUG) ||
                isset($_GET['gform_debug'])
                    ? ''
                    : '.min';
            $admin_css_url =
                GFCommon::get_base_url() .
                "/css/admin{$min}.css?ver=" .
                GFForms::$version;
            ?>
			<script type="text/javascript">
				var gresultsFields = <?php echo json_encode($all_fields); ?>;
				var gresultsFilterSettings = <?php echo json_encode($filter_settings); ?>;
				var gresultsInitVars = <?php echo json_encode($init_vars); ?>;

				<?php GFCommon::gf_global(); ?>
				<?php GFCommon::gf_vars(); ?>
			</script>

			<link rel="stylesheet"
			      href="<?php echo esc_url($admin_css_url); ?>"
			      type="text/css"/>
			<div class="wrap gforms_edit_form <?php echo GFCommon::get_browser_class(); ?>">

				<?php GFCommon::form_page_title($form); ?>
				<?php GFCommon::display_dismissible_message(); ?>
				<?php GFForms::top_toolbar(); ?>
				<?php if (false === empty($all_fields)): ?>

					<div id="poststuff" class="metabox-holder has-right-sidebar">
						<div id="side-info-column" class="inner-sidebar">
							<div id="gresults-results-filter" class="postbox">
								<h3 style="cursor: default;"><?php echo $this->_search_title; ?></h3>

								<div id="gresults-results-filter-content">
									<form id="gresults-results-filter-form" action="" method="GET">
										<?php wp_nonce_field('gf_results', '_gf_results_nonce'); ?>
										<input type="hidden" id="gresults-page-slug" name="page"
										       value="<?php echo esc_attr($gf_page); ?>">
										<input type="hidden" id="gresults-view-slug" name="view"
										       value="<?php echo esc_attr($gf_view); ?>">
										<input type="hidden" id="gresults-form-id" name="id"
										       value="<?php echo esc_attr($form_id); ?>">

										<?php
          $filter_ui = [
              'fields' => [
                  'label' => esc_attr__('Filters', 'gravityforms'),
                  'tooltip' => 'gresults_filters',
                  'markup' => '<div id="gresults-results-field-filters-container">
																<!-- placeholder populated by js -->
															 </div>',
              ],
              'date_range' => [
                  'label' => esc_attr__('Date Range', 'gravityforms'),
                  'tooltip' => 'gresults_date_range',
                  'markup' =>
                      '<div style="width:90px; float:left; ">
																	<label
																		for="gresults-results-filter-date-start">' .
                      esc_html__('Start', 'gravityforms') .
                      '</label>
																	<input type="text" id="gresults-results-filter-date-start" name="start"
																		   style="width:80px"
																		   class="gresults-datepicker"
																		   value="' .
                      esc_attr($start_date) .
                      '"/>
																</div>
																<div style="width:90px; float:left; ">
																	<label
																		for="gresults-results-filter-date-end">' .
                      esc_html__('End', 'gravityforms') .
                      '</label>
																	<input type="text" id="gresults-results-filter-date-end" name="end"
																		   style="width:80px"
																		   class="gresults-datepicker"
																		   value="' .
                      esc_attr($end_date) .
                      '"/>
																</div>',
              ],
          ];

          $filter_ui = apply_filters(
              'gform_filter_ui',
              $filter_ui,
              $form_id,
              $page_title,
              $gf_page,
              $gf_view
          );

          foreach ($filter_ui as $name => $filter) { ?>
											<div class='gresults-results-filter-section-label'>
												<?php echo $filter['label']; ?>
												&nbsp;<?php gform_tooltip(rgar($filter, 'tooltip'), 'tooltip_bottomleft'); ?>
											</div>
											<?php echo $filter['markup'];}
          ?>

										<br style="clear:both"/>

										<div id="gresults-results-filter-buttons">
											<input type="submit" id="gresults-results-filter-submit-button"
											       class="button button-primary button-large"
											       value="<?php esc_attr_e('Apply filters', 'gravityforms'); ?>">
											<input type="button" id="gresults-results-filter-clear-button"
											       class="button button-secondary button-large"
											       value="<?php esc_attr_e('Clear', 'gravityforms'); ?>"
											       onclick="gresults.clearFilterForm();"
											       onkeypress="gresults.clearFilterForm();">

											<div class="gresults-filter-loading"
											     style="display:none; float:right; margin-top:5px;">
												<i class='gficon-gravityforms-spinner-icon gficon-spin'></i>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
					<div class="gresults-filter-loading" style="display:none;margin:0 5px 10px 0;">
						<i class='gficon-gravityforms-spinner-icon gficon-spin'></i>&nbsp;
						<a href="javascript:void(0);" onclick="javascript:gresultsAjaxRequest.abort()" onkeypress="javascript:gresultsAjaxRequest.abort()"><?php esc_html_e(
          'Cancel',
          'gravityforms'
      ); ?></a>
					</div>

					<div id="gresults-results-wrapper">
						<div id="gresults-results">&nbsp;
						</div>
					</div>

				<?php else:_e(
            'This form does not have any fields that can be used for results',
            'gravityforms'
        );endif; ?>
			</div>


		<?php
        }

        public static function add_tooltips($tooltips)
        {
            $tooltips['gresults_total_score'] =
                '<h6>' .
                esc_html__('Total Score', 'gravityforms') .
                '</h6>' .
                esc_html__(
                    'Scores are weighted calculations. Items ranked higher are given a greater score than items that are ranked lower. The total score for each item is the sum of the weighted scores.',
                    'gravityforms'
                );
            $tooltips['gresults_agg_rank'] =
                '<h6>' .
                esc_html__('Aggregate Rank', 'gravityforms') .
                '</h6>' .
                esc_html__(
                    'The aggregate rank is the overall rank for all entries based on the weighted scores for each item.',
                    'gravityforms'
                );
            $tooltips['gresults_date_range'] =
                '<h6>' .
                esc_html__('Date Range', 'gravityforms') .
                '</h6>' .
                esc_html__(
                    'Date Range is optional, if no date range is specified it will be ignored.',
                    'gravityforms'
                );
            $tooltips['gresults_filters'] =
                '<h6>' .
                esc_html__('Filters', 'gravityforms') .
                '</h6>' .
                esc_html__(
                    'Narrow the results by adding filters. Note that some field types support more options than others.',
                    'gravityforms'
                );
            $tooltips['gresults_average_row_score'] =
                '<h6>' .
                esc_html__('Average Row Score', 'gravityforms') .
                '</h6>' .
                esc_html__(
                    'The average (mean) score for each row: the sum of all the scores for each row divided by the total number of entries.',
                    'gravityforms'
                );
            $tooltips['gresults_average_global_score'] =
                '<h6>' .
                esc_html__('Average Global Score', 'gravityforms') .
                '</h6>' .
                esc_html__(
                    'The average (mean) score for the whole field. The sum of the total scores divided by the number of entries.',
                    'gravityforms'
                );
            $tooltips['gresults_average_score'] =
                '<h6>' .
                esc_html__('Average Score', 'gravityforms') .
                '</h6>' .
                esc_html__(
                    'The average (mean) score: The sum of the scores divided by the number of entries.',
                    'gravityforms'
                );

            return $tooltips;
        }

        public function ajax_get_results()
        {
            check_ajax_referer('gf_results', '_gf_results_nonce');

            if (!GFAPI::current_user_can_any($this->_capabilities)) {
                wp_die('Not allowed');
            }

            // tooltips
            require_once GFCommon::get_base_path() . '/tooltips.php';
            add_filter('gform_tooltips', [$this, 'add_tooltips']);

            $output = [];
            $html = '';
            $form_id = rgpost('id');
            $form_id = absint($form_id);
            $form = GFFormsModel::get_form_meta($form_id);
            $form = gf_apply_filters(
                ['gform_form_pre_results', $form_id],
                $form
            );
            $search_criteria['status'] = 'active';
            $fields = $this->get_fields($form);
            $total_entries = GFAPI::count_entries($form_id, $search_criteria);
            if ($total_entries == 0) {
                $html = esc_html__('No results.', 'gravityforms');
            } else {
                $search_criteria = [];
                $search_criteria[
                    'field_filters'
                ] = GFCommon::get_field_filters_from_post($form);

                $start_date = preg_replace('/[^0-9-]/', '', rgpost('start'));
                $end_date = preg_replace('/[^0-9-]/', '', rgpost('end'));

                if ($start_date) {
                    $search_criteria['start_date'] = $start_date;
                }
                if ($end_date) {
                    $search_criteria['end_date'] = $end_date;
                }

                $search_criteria['status'] = 'active';
                $output['s'] = http_build_query($search_criteria);
                $state_array = null;
                if (isset($_POST['state'])) {
                    $state = $_POST['state'];
                    $posted_check_sum = rgpost('checkSum');
                    $generated_check_sum = self::generate_checksum($state);
                    $state_array = json_decode(base64_decode($state), true);
                    if ($generated_check_sum !== $posted_check_sum) {
                        $output['status'] = 'complete';
                        $output['html'] = esc_html__(
                            'There was an error while processing the entries. Please contact support.',
                            'gravityforms'
                        );
                        echo json_encode($output);
                        die();
                    }
                }

                $data = isset($this->_callbacks['data'])
                    ? call_user_func(
                        $this->_callbacks['data'],
                        $form,
                        $fields,
                        $search_criteria,
                        $state_array
                    )
                    : $this->get_results_data(
                        $form,
                        $fields,
                        $search_criteria,
                        $state_array
                    );
                $entry_count = $data['entry_count'];

                if ('incomplete' === rgar($data, 'status')) {
                    $state = base64_encode(json_encode($data));
                    $output['status'] = 'incomplete';
                    $output['stateObject'] = $state;
                    $output['checkSum'] = self::generate_checksum($state);
                    $output['html'] = sprintf(
                        esc_html__(
                            'Entries processed: %1$d of %2$d',
                            'gravityforms'
                        ),
                        rgar($data, 'offset'),
                        $entry_count
                    );
                    echo json_encode($output);
                    die();
                }

                if ($total_entries > 0) {
                    $html = isset($this->_callbacks['markup'])
                        ? call_user_func(
                            $this->_callbacks['markup'],
                            $html,
                            $data,
                            $form,
                            $fields
                        )
                        : '';
                    if (empty($html)) {
                        foreach ($fields as $field) {
                            $field_id = $field->id;
                            $html .= "<div class='gresults-results-field' id='gresults-results-field-{$field_id}'>";
                            $html .=
                                "<div class='gresults-results-field-label'>" .
                                esc_html(GFCommon::get_label($field)) .
                                '</div>';
                            $html .=
                                '<div>' .
                                self::get_field_results(
                                    $form_id,
                                    $data,
                                    $field,
                                    $search_criteria
                                ) .
                                '</div>';
                            $html .= '</div>';
                        }
                    }
                } else {
                    $html .= esc_html__('No results', 'gravityforms');
                }
            }

            $output['html'] = $html;
            $output['status'] = 'complete';
            $output['searchCriteria'] = $search_criteria;
            echo json_encode($output);
            die();
        }

        public function ajax_get_more_results()
        {
            check_ajax_referer('gf_results', '_gf_results_nonce');

            if (!GFAPI::current_user_can_any($this->_capabilities)) {
                wp_die('Not allowed');
            }

            $form_id = rgpost('form_id');
            $field_id = rgpost('field_id');
            $offset = rgpost('offset');
            $search_criteria = rgpost('search_criteria');

            if (empty($search_criteria)) {
                $search_criteria = [];
            }
            $page_size = 10;

            $form = RGFormsModel::get_form_meta($form_id);
            $form_id = $form['id'];
            $field = RGFormsModel::get_field($form, $field_id);
            $more_remaining = false;
            $html = self::get_default_field_results(
                $form_id,
                $field,
                $search_criteria,
                $offset,
                $page_size,
                $more_remaining
            );

            $response = [];
            $response['more_remaining'] = $more_remaining;
            $response['html'] = $html;
            $response['offset'] = $offset;

            echo json_encode($response);
            die();
        }

        private static function generate_checksum($data)
        {
            return wp_hash(crc32($data));
        }

        public static function get_total_entries($form)
        {
            $totals = RGFormsModel::get_form_counts($form['id']);

            return $totals['total'];
        }

        public static function get_field_results(
            $form_id,
            $data,
            $field,
            $search_criteria
        ) {
            if (empty($data['entry_count']) || empty($data['field_data'])) {
                return esc_html__('No entries for this field', 'gravityforms');
            }

            $field_data = $data['field_data'];
            $entry_count = $data['entry_count'];

            if (empty($field_data[$field->id])) {
                return esc_html__('No entries for this field', 'gravityforms');
            }

            $field_results = '';

            $field_type = GFFormsModel::get_input_type($field);
            switch ($field_type) {
                case 'radio':
                case 'checkbox':
                case 'select':
                case 'rating':
                case 'multiselect':
                    $results = $field_data[$field->id];
                    $non_zero_results = is_array($results)
                        ? array_filter($results)
                        : $results;
                    if (empty($non_zero_results)) {
                        $field_results .= esc_html__(
                            'No entries for this field',
                            'gravityforms'
                        );

                        return $field_results;
                    }
                    $choices = $field->choices;

                    $data_table = [];
                    $data_table[] = [
                        esc_html__('Choice', 'gravityforms'),
                        esc_html__('Frequency', 'gravityforms'),
                    ];

                    foreach ($choices as $choice) {
                        $text = $choice['text'];
                        $val = $results[$choice['value']];
                        $data_table[] = [$text, $val];
                    }

                    $bar_height = 40;
                    $chart_area_height = count($choices) * $bar_height;

                    $chart_options = [
                        'isStacked' => true,
                        'height' => $chart_area_height + $bar_height,
                        'chartArea' => [
                            'top' => 0,
                            'left' => 200,
                            'height' => $chart_area_height,
                            'width' => '100%',
                        ],
                        'series' => [
                            '0' => [
                                'color' => 'silver',
                                'visibleInLegend' => 'false',
                            ],
                        ],
                        'hAxis' => [
                            'viewWindowMode' => 'explicit',
                            'viewWindow' => ['min' => 0],
                            'title' => esc_html__('Frequency', 'gravityforms'),
                        ],
                    ];

                    $data_table_json = htmlentities(
                        json_encode($data_table),
                        ENT_QUOTES,
                        'UTF-8',
                        true
                    );
                    $options_json = htmlentities(
                        json_encode($chart_options),
                        ENT_QUOTES,
                        'UTF-8',
                        true
                    );
                    $div_id = 'gresults-results-chart-field-' . $field->id;
                    $height = ''; //             = sprintf("height:%dpx", (count($choices) * $bar_height));

                    $field_results .= sprintf(
                        '<div class="gresults-chart-wrapper" style="width: 100%%;%s" id=%s data-datatable=\'%s\' data-options=\'%s\' data-charttype="bar" ></div>',
                        $height,
                        $div_id,
                        $data_table_json,
                        $options_json
                    );

                    break;
                case 'likert':
                    $results = $field_data[$field->id];
                    $multiple_rows = $field->gsurveyLikertEnableMultipleRows
                        ? true
                        : false;
                    $scoring_enabled =
                        $field->gsurveyLikertEnableScoring &&
                        class_exists('GFSurvey')
                            ? true
                            : false;

                    $n = 100;

                    $xr = 255;
                    $xg = 255;
                    $xb = 255;

                    $yr = 100;
                    $yg = 250;
                    $yb = 100;

                    $field_results .=
                        "<div class='gsurvey-likert-field-results'>";
                    $field_results .= "<table class='gsurvey-likert'>";
                    $field_results .= '<tr>';
                    if ($multiple_rows) {
                        $field_results .= '<td></td>';
                    }

                    foreach ($field->choices as $choice) {
                        $field_results .=
                            "<td class='gsurvey-likert-choice-label'>" .
                            $choice['text'] .
                            '</td>';
                    }

                    if ($multiple_rows && $scoring_enabled) {
                        $field_results .= sprintf(
                            '<td>%s %s</td>',
                            esc_html__('Average Score', 'gravityforms'),
                            gform_tooltip(
                                'gresults_average_row_score',
                                null,
                                true
                            )
                        );
                    }

                    $field_results .= '</tr>';

                    foreach ($field->gsurveyLikertRows as $row) {
                        $row_text = $row['text'];
                        $row_value = $row['value'];
                        $max = 0;
                        foreach ($field->choices as $choice) {
                            if ($multiple_rows) {
                                $choice_value = rgar($choice, 'value');
                                $results_row = rgar($results, $row_value);
                                $results_for_choice = rgar(
                                    $results_row,
                                    $choice_value
                                );
                                $max = max([$max, $results_for_choice]);
                            } else {
                                $max = max([$max, $results[$choice['value']]]);
                            }
                        }

                        $field_results .= '<tr>';

                        if ($multiple_rows) {
                            $field_results .=
                                "<td class='gsurvey-likert-row-label'>" .
                                $row_text .
                                '</td>';
                        }

                        foreach ($field->choices as $choice) {
                            $val = $multiple_rows
                                ? $results[$row_value][$choice['value']]
                                : $results[$choice['value']];
                            $percent =
                                $max > 0 ? round(($val / $max) * 100, 0) : 0;
                            $red =
                                (int) ($xr +
                                    ($percent * ($yr - $xr)) / ($n - 1));
                            $green =
                                (int) ($xg +
                                    ($percent * ($yg - $xg)) / ($n - 1));
                            $blue =
                                (int) ($xb +
                                    ($percent * ($yb - $xb)) / ($n - 1));
                            $clr =
                                'rgb(' .
                                $red .
                                ',' .
                                $green .
                                ',' .
                                $blue .
                                ')';
                            $field_results .=
                                "<td class='gsurvey-likert-results' style='background-color:{$clr}'>" .
                                $val .
                                '</td>';
                        }

                        if ($multiple_rows && $scoring_enabled) {
                            $row_sum = $results[$row_value]['row_score_sum'];
                            $average_row_score =
                                $row_sum == 0
                                    ? 0
                                    : round($row_sum / $entry_count, 3);
                            $field_results .=
                                "<td class='gsurvey-likert-results'>" .
                                $average_row_score .
                                '</td>';
                        }

                        $field_results .= '</tr>';

                        if (false === $multiple_rows) {
                            break;
                        }
                    }
                    $field_results .= '</table>';
                    $field_results .= '</div>';

                    if ($scoring_enabled) {
                        $sum = $results['sum_of_scores'];
                        $average_score =
                            $sum == 0 ? 0 : round($sum / $entry_count, 3);
                        if ($multiple_rows) {
                            $average_global_score_tooltip = gform_tooltip(
                                'gresults_average_global_score',
                                null,
                                true
                            );
                            $field_results .= sprintf(
                                "<div class='gsurvey-likert-score'>%s %s: %s</div>",
                                esc_html__(
                                    'Average global score',
                                    'gravityforms'
                                ),
                                $average_global_score_tooltip,
                                $average_score
                            );
                        } else {
                            $field_results .= sprintf(
                                "<div class='gsurvey-likert-score'>%s %s: %s</div>",
                                esc_html__('Average score', 'gravityforms'),
                                gform_tooltip(
                                    'gresults_average_score',
                                    null,
                                    true
                                ),
                                $average_score
                            );
                        }
                    }

                    break;
                case 'rank':
                    $results = $field_data[$field->id];
                    arsort($results);
                    $field_results .=
                        "<div class='gsurvey-rank-field-results'>";
                    $field_results .= ' <table>';
                    $field_results .=
                        "     <tr class='gresults-results-field-table-header'>";
                    $field_results .=
                        "         <td class='gresults-rank-field-label'>";
                    $field_results .= esc_html__('Item', 'gravityforms');
                    $field_results .= '         </td>';
                    $field_results .=
                        "         <td class='gresults-rank-field-score'>";
                    $field_results .=
                        esc_html__('Total Score', 'gravityforms') .
                        '&nbsp;' .
                        gform_tooltip('gresults_total_score', null, true);
                    $field_results .= '         </td>';
                    $field_results .=
                        "         <td class='gresults-rank-field-rank'>";
                    $field_results .=
                        esc_html__('Aggregate Rank', 'gravityforms') .
                        '&nbsp;' .
                        gform_tooltip('gresults_agg_rank', null, true);
                    $field_results .= '         </td>';
                    $field_results .= '     </tr>';

                    $agg_rank = 1;
                    foreach ($results as $choice_val => $score) {
                        $field_results .= '<tr>';
                        $field_results .=
                            "      <td class='gresults-rank-field-label' style='text-align:left;'>";
                        $field_results .= RGFormsModel::get_choice_text(
                            $field,
                            $choice_val
                        );
                        $field_results .= '      </td>';
                        $field_results .=
                            "      <td class='gresults-rank-field-score'>";
                        $field_results .= $score;
                        $field_results .= '      </td>';
                        $field_results .=
                            "      <td class='gresults-rank-field-rank'>";
                        $field_results .= $agg_rank;
                        $field_results .= '      </td>';
                        $field_results .= '</tr>';
                        $agg_rank++;
                    }
                    $field_results .= '</table>';
                    $field_results .= '</div>';

                    break;
                default:
                    $page_size = 5;
                    $offset = 0;
                    $field_id = $field->id;
                    $more_remaining = false;
                    $default_field_results = self::get_default_field_results(
                        $form_id,
                        $field,
                        $search_criteria,
                        $offset,
                        $page_size,
                        $more_remaining
                    );

                    $field_results .=
                        "<div class='gresults-results-field-sub-label'>" .
                        esc_html__('Latest values:', 'gravityforms') .
                        '</div>';

                    $field_results .= "<ul id='gresults-results-field-content-{$field_id}' class='gresults-results-field-content' data-offset='{$offset}'>";

                    $field_results .= $default_field_results;
                    $field_results .= '</ul>';

                    if ($more_remaining) {
                        $field_results .=
                            "<a id='gresults-results-field-more-link-{$field_id}' class='gresults-results-field-more-link' href='javascript:void(0)' onclick='gresults.getMoreResults({$form_id},{$field_id})' onkeypress='gresults.getMoreResults({$form_id},{$field_id})'>" .
                            esc_html__('Show more', 'gravityforms') .
                            '</a>';
                    }
                    break;
            }

            return $field_results;
        }

        public function get_results_data(
            $form,
            $fields,
            $search_criteria = [],
            $state_array = [],
            $max_execution_time = 15 /* seconds */
        ) {
            // todo: add hooks to modify $max_execution_time and $page_size?

            $page_size = 150;

            $time_start = microtime(true);

            $form_id = $form['id'];
            $data = [];
            $offset = 0;
            $entry_count = 0;
            $field_data = [];

            if ($state_array) {
                //get counts from state
                $data = $state_array;
                $offset = (int) rgar($data, 'offset');

                unset($data['offset']);
                $entry_count = $offset;
                $field_data = rgar($data, 'field_data');
            } else {
                //initialize counts
                foreach ($fields as $field) {
                    $field_type = GFFormsModel::get_input_type($field);
                    if (false === isset($field->choices)) {
                        $field_data[$field->id] = 0;
                        continue;
                    }
                    $choices = $field->choices;

                    if (
                        $field_type == 'likert' &&
                        rgar($field, 'gsurveyLikertEnableMultipleRows')
                    ) {
                        foreach ($field->gsurveyLikertRows as $row) {
                            foreach ($choices as $choice) {
                                $field_data[$field->id][$row['value']][
                                    $choice['value']
                                ] = 0;
                            }
                            if (rgar($field, 'gsurveyLikertEnableScoring')) {
                                $field_data[$field->id][$row['value']][
                                    'row_score_sum'
                                ] = 0;
                            }
                        }
                    } else {
                        if (!empty($choices) && is_array($choices)) {
                            foreach ($choices as $choice) {
                                $field_data[$field->id][$choice['value']] = 0;
                            }
                        } else {
                            $field_data[$field->id] = 0;
                        }
                    }
                    if (
                        $field_type == 'likert' &&
                        rgar($field, 'gsurveyLikertEnableScoring')
                    ) {
                        $field_data[$field->id]['sum_of_scores'] = 0;
                    }
                }
            }

            $count_search_leads = GFAPI::count_entries(
                $form_id,
                $search_criteria
            );
            $data['entry_count'] = $count_search_leads;

            $entries_left = $count_search_leads - $offset;

            while ($entries_left > 0) {
                $paging = [
                    'offset' => $offset,
                    'page_size' => $page_size,
                ];

                $search_leads_time_start = microtime(true);
                $leads = GFFormsModel::search_leads(
                    $form_id,
                    $search_criteria,
                    null,
                    $paging
                );
                $search_leads_time_end = microtime(true);
                $search_leads_time =
                    $search_leads_time_end - $search_leads_time_start;

                $leads_in_search = count($leads);

                $entry_count += $leads_in_search;
                $leads_processed = 0;
                foreach ($leads as $lead) {
                    $lead_time_start = microtime(true);
                    foreach ($fields as $field) {
                        $field_type = GFFormsModel::get_input_type($field);
                        $field_id = $field->id;
                        $value = RGFormsModel::get_lead_field_value(
                            $lead,
                            $field
                        );

                        if (
                            $field_type == 'likert' &&
                            rgar($field, 'gsurveyLikertEnableMultipleRows')
                        ) {
                            if (empty($value)) {
                                continue;
                            }
                            foreach ($value as $value_vector) {
                                if (empty($value_vector)) {
                                    continue;
                                }
                                list($row_val, $col_val) = explode(
                                    ':',
                                    $value_vector,
                                    2
                                );
                                if (
                                    isset($field_data[$field->id][$row_val]) &&
                                    isset(
                                        $field_data[$field->id][$row_val][
                                            $col_val
                                        ]
                                    )
                                ) {
                                    $field_data[$field->id][$row_val][
                                        $col_val
                                    ]++;
                                    if ($field->gsurveyLikertEnableScoring) {
                                        $field_data[$field->id][$row_val][
                                            'row_score_sum'
                                        ] += $this->get_likert_row_score(
                                            $row_val,
                                            $field,
                                            $lead
                                        );
                                    }
                                }
                            }
                        } elseif ($field_type == 'rank') {
                            $score = count(rgar($field, 'choices'));
                            $values = explode(',', $value);
                            foreach ($values as $ranked_value) {
                                $field_data[$field->id][
                                    $ranked_value
                                ] += $score;
                                $score--;
                            }
                        } else {
                            if (empty($field->choices)) {
                                if (false === empty($value)) {
                                    $field_data[$field_id]++;
                                }
                                continue;
                            }
                            $choices = $field->choices;

                            foreach ($choices as $choice) {
                                $choice_is_selected = false;
                                if (is_array($value)) {
                                    $choice_value = rgar($choice, 'value');
                                    if (in_array($choice_value, $value)) {
                                        $choice_is_selected = true;
                                    }
                                } else {
                                    if (
                                        RGFormsModel::choice_value_match(
                                            $field,
                                            $choice,
                                            $value
                                        )
                                    ) {
                                        $choice_is_selected = true;
                                    }
                                }
                                if ($choice_is_selected) {
                                    $field_data[$field_id][$choice['value']]++;
                                }
                            }
                        }
                        if (
                            $field_type == 'likert' &&
                            rgar($field, 'gsurveyLikertEnableScoring')
                        ) {
                            $field_data[$field->id][
                                'sum_of_scores'
                            ] += $this->get_likert_score($field, $lead);
                        }
                    }
                    $leads_processed++;
                    $lead_time_end = microtime(true);
                    $total_execution_time =
                        $lead_time_end - $search_leads_time_start;
                    $lead_execution_time = $lead_time_end - $lead_time_start;
                    if (
                        $total_execution_time + $lead_execution_time >
                        $max_execution_time
                    ) {
                        break;
                    }
                }
                $data['field_data'] = $field_data;
                if (isset($this->_callbacks['calculation'])) {
                    $data = call_user_func(
                        $this->_callbacks['calculation'],
                        $data,
                        $form,
                        $fields,
                        $leads
                    );
                    $field_data = $data['field_data'];
                }
                $offset += $leads_processed;
                $entries_left -= $leads_processed;

                $time_end = microtime(true);
                $execution_time = $time_end - $time_start;

                if (
                    $entries_left > 0 &&
                    $execution_time + $search_leads_time > $max_execution_time
                ) {
                    $data['status'] = 'incomplete';
                    $data['offset'] = $offset;
                    $progress =
                        $data['entry_count'] > 0
                            ? round(
                                ($data['offset'] / $data['entry_count']) * 100
                            )
                            : 0;
                    $data['progress'] = $progress;
                    break;
                }

                if ($entries_left <= 0) {
                    $data['status'] = 'complete';
                }
            }

            $data['timestamp'] = time();

            return $data;
        }

        public function get_likert_row_score($row_val, $field, $entry)
        {
            return is_callable(['GFSurvey', 'get_likert_row_score'])
                ? GFSurvey::get_likert_row_score($row_val, $field, $entry)
                : 0;
        }

        public function get_likert_score($field, $entry)
        {
            return is_callable(['GFSurvey', 'get_field_score'])
                ? GFSurvey::get_field_score($field, $entry)
                : 0;
        }

        public static function get_default_field_results(
            $form_id,
            $field,
            $search_criteria,
            &$offset,
            $page_size,
            &$more_remaining = false
        ) {
            $field_results = '';

            $sorting = ['key' => 'date_created', 'direction' => 'DESC'];

            $c = 0;

            do {
                $paging = ['offset' => $offset, 'page_size' => $page_size];
                $leads = GFFormsModel::search_leads(
                    $form_id,
                    $search_criteria,
                    $sorting,
                    $paging
                );
                foreach ($leads as $lead) {
                    $value = RGFormsModel::get_lead_field_value($lead, $field);

                    $content = apply_filters(
                        'gform_entries_field_value',
                        $value,
                        $form_id,
                        $field->id,
                        $lead
                    );

                    if (is_array($content)) {
                        $content = join(' ', $content);
                    }

                    if (!empty($content)) {
                        $field_results .=
                            "<li>" . wp_kses_post($content) . "</li>";
                        $c++;
                    }
                }
                $offset += $page_size;
            } while ($c < $page_size && !empty($leads));

            if (!empty($leads)) {
                $more_remaining = true;
            }

            return $field_results;
        }
    }
}
