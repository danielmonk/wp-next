<?php

if (!class_exists('acf_field_taxonomy')):
    class acf_field_taxonomy extends acf_field
    {
        // vars
        var $save_post_terms = [];

        /*
         *  __construct
         *
         *  This function will setup the field type data
         *
         *  @type	function
         *  @date	5/03/2014
         *  @since	5.0.0
         *
         *  @param	n/a
         *  @return	n/a
         */

        function initialize()
        {
            // vars
            $this->name = 'taxonomy';
            $this->label = __("Taxonomy", 'acf');
            $this->category = 'relational';
            $this->defaults = [
                'taxonomy' => 'category',
                'field_type' => 'checkbox',
                'multiple' => 0,
                'allow_null' => 0,
                'return_format' => 'id',
                'add_term' => 1, // 5.2.3
                'load_terms' => 0, // 5.2.7
                'save_terms' => 0, // 5.2.7
            ];

            // Register filter variations.
            acf_add_filter_variations(
                'acf/fields/taxonomy/query',
                ['name', 'key'],
                1
            );
            acf_add_filter_variations(
                'acf/fields/taxonomy/result',
                ['name', 'key'],
                2
            );

            // ajax
            add_action('wp_ajax_acf/fields/taxonomy/query', [
                $this,
                'ajax_query',
            ]);
            add_action('wp_ajax_nopriv_acf/fields/taxonomy/query', [
                $this,
                'ajax_query',
            ]);
            add_action('wp_ajax_acf/fields/taxonomy/add_term', [
                $this,
                'ajax_add_term',
            ]);

            // actions
            add_action('acf/save_post', [$this, 'save_post'], 15, 1);
        }

        /*
         *  ajax_query
         *
         *  description
         *
         *  @type	function
         *  @date	24/10/13
         *  @since	5.0.0
         *
         *  @param	$post_id (int)
         *  @return	$post_id (int)
         */

        function ajax_query()
        {
            // validate
            if (!acf_verify_ajax()) {
                die();
            }

            // get choices
            $response = $this->get_ajax_query($_POST);

            // return
            acf_send_ajax_results($response);
        }

        /*
         *  get_ajax_query
         *
         *  This function will return an array of data formatted for use in a select2 AJAX response
         *
         *  @type	function
         *  @date	15/10/2014
         *  @since	5.0.9
         *
         *  @param	$options (array)
         *  @return	(array)
         */

        function get_ajax_query($options = [])
        {
            // defaults
            $options = acf_parse_args($options, [
                'post_id' => 0,
                's' => '',
                'field_key' => '',
                'paged' => 0,
            ]);

            // load field
            $field = acf_get_field($options['field_key']);
            if (!$field) {
                return false;
            }

            // bail early if taxonomy does not exist
            if (!taxonomy_exists($field['taxonomy'])) {
                return false;
            }

            // vars
            $results = [];
            $is_hierarchical = is_taxonomy_hierarchical($field['taxonomy']);
            $is_pagination = $options['paged'] > 0;
            $is_search = false;
            $limit = 20;
            $offset = 20 * ($options['paged'] - 1);

            // args
            $args = [
                'taxonomy' => $field['taxonomy'],
                'hide_empty' => false,
            ];

            // pagination
            // - don't bother for hierarchial terms, we will need to load all terms anyway
            if ($is_pagination && !$is_hierarchical) {
                $args['number'] = $limit;
                $args['offset'] = $offset;
            }

            // search
            if ($options['s'] !== '') {
                // strip slashes (search may be integer)
                $s = wp_unslash(strval($options['s']));

                // update vars
                $args['search'] = $s;
                $is_search = true;
            }

            // filters
            $args = apply_filters(
                'acf/fields/taxonomy/query',
                $args,
                $field,
                $options['post_id']
            );

            // get terms
            $terms = acf_get_terms($args);

            // sort into hierachial order!
            if ($is_hierarchical) {
                // update vars
                $limit = acf_maybe_get($args, 'number', $limit);
                $offset = acf_maybe_get($args, 'offset', $offset);

                // get parent
                $parent = acf_maybe_get($args, 'parent', 0);
                $parent = acf_maybe_get($args, 'child_of', $parent);

                // this will fail if a search has taken place because parents wont exist
                if (!$is_search) {
                    // order terms
                    $ordered_terms = _get_term_children(
                        $parent,
                        $terms,
                        $field['taxonomy']
                    );

                    // check for empty array (possible if parent did not exist within original data)
                    if (!empty($ordered_terms)) {
                        $terms = $ordered_terms;
                    }
                }

                // fake pagination
                if ($is_pagination) {
                    $terms = array_slice($terms, $offset, $limit);
                }
            }

            /// append to r
            foreach ($terms as $term) {
                // add to json
                $results[] = [
                    'id' => $term->term_id,
                    'text' => $this->get_term_title(
                        $term,
                        $field,
                        $options['post_id']
                    ),
                ];
            }

            // vars
            $response = [
                'results' => $results,
                'limit' => $limit,
            ];

            // return
            return $response;
        }

        /**
         * Returns the Term's title displayed in the field UI.
         *
         * @date	1/11/2013
         * @since	5.0.0
         *
         * @param	WP_Term $term The term object.
         * @param	array $field The field settings.
         * @param	mixed $post_id The post_id being edited.
         * @return	string
         */
        function get_term_title($term, $field, $post_id = 0)
        {
            $title = acf_get_term_title($term);

            // Default $post_id to current post being edited.
            $post_id = $post_id ? $post_id : acf_get_form_data('post_id');

            /**
             * Filters the term title.
             *
             * @date	1/11/2013
             * @since	5.0.0
             *
             * @param	string $title The term title.
             * @param	WP_Term $term The term object.
             * @param	array $field The field settings.
             * @param	(int|string) $post_id The post_id being edited.
             */
            return apply_filters(
                'acf/fields/taxonomy/result',
                $title,
                $term,
                $field,
                $post_id
            );
        }

        /*
         *  get_terms
         *
         *  This function will return an array of terms for a given field value
         *
         *  @type	function
         *  @date	13/06/2014
         *  @since	5.0.0
         *
         *  @param	$value (array)
         *  @return	$value
         */

        function get_terms($value, $taxonomy = 'category')
        {
            // load terms in 1 query to save multiple DB calls from following code
            if (count($value) > 1) {
                $terms = acf_get_terms([
                    'taxonomy' => $taxonomy,
                    'include' => $value,
                    'hide_empty' => false,
                ]);
            }

            // update value to include $post
            foreach (array_keys($value) as $i) {
                $value[$i] = get_term($value[$i], $taxonomy);
            }

            // filter out null values
            $value = array_filter($value);

            // return
            return $value;
        }

        /*
         *  load_value()
         *
         *  This filter is appied to the $value after it is loaded from the db
         *
         *  @type	filter
         *  @since	3.6
         *  @date	23/01/13
         *
         *  @param	$value - the value found in the database
         *  @param	$post_id - the $post_id from which the value was loaded from
         *  @param	$field - the field array holding all the field options
         *
         *  @return	$value - the value to be saved in te database
         */

        function load_value($value, $post_id, $field)
        {
            // get valid terms
            $value = acf_get_valid_terms($value, $field['taxonomy']);

            // load_terms
            if ($field['load_terms']) {
                // Decode $post_id for $type and $id.
                extract(acf_decode_post_id($post_id));
                if ($type === 'block') {
                    // Get parent block...
                }

                // get terms
                $term_ids = wp_get_object_terms($id, $field['taxonomy'], [
                    'fields' => 'ids',
                    'orderby' => 'none',
                ]);

                // bail early if no terms
                if (empty($term_ids) || is_wp_error($term_ids)) {
                    return false;
                }

                // sort
                if (!empty($value)) {
                    $order = [];

                    foreach ($term_ids as $i => $v) {
                        $order[$i] = array_search($v, $value);
                    }

                    array_multisort($order, $term_ids);
                }

                // update value
                $value = $term_ids;
            }

            // convert back from array if neccessary
            if (
                $field['field_type'] == 'select' ||
                $field['field_type'] == 'radio'
            ) {
                $value = array_shift($value);
            }

            // return
            return $value;
        }

        /*
         *  update_value()
         *
         *  This filter is appied to the $value before it is updated in the db
         *
         *  @type	filter
         *  @since	3.6
         *  @date	23/01/13
         *
         *  @param	$value - the value which will be saved in the database
         *  @param	$field - the field array holding all the field options
         *  @param	$post_id - the $post_id of which the value will be saved
         *
         *  @return	$value - the modified value
         */

        function update_value($value, $post_id, $field)
        {
            // vars
            if (is_array($value)) {
                $value = array_filter($value);
            }

            // save_terms
            if ($field['save_terms']) {
                // vars
                $taxonomy = $field['taxonomy'];

                // force value to array
                $term_ids = acf_get_array($value);

                // convert to int
                $term_ids = array_map('intval', $term_ids);

                // get existing term id's (from a previously saved field)
                $old_term_ids = isset($this->save_post_terms[$taxonomy])
                    ? $this->save_post_terms[$taxonomy]
                    : [];

                // append
                $this->save_post_terms[$taxonomy] = array_merge(
                    $old_term_ids,
                    $term_ids
                );

                // if called directly from frontend update_field()
                if (!did_action('acf/save_post')) {
                    $this->save_post($post_id);

                    return $value;
                }
            }

            // return
            return $value;
        }

        /*
         *  save_post
         *
         *  This function will save any terms in the save_post_terms array
         *
         *  @type	function
         *  @date	26/11/2014
         *  @since	5.0.9
         *
         *  @param	$post_id (int)
         *  @return	n/a
         */

        function save_post($post_id)
        {
            // Check for saved terms.
            if (!empty($this->save_post_terms)) {
                // Determine object ID allowing for non "post" $post_id (user, taxonomy, etc).
                // Although not fully supported by WordPress, non "post" objects may use the term relationships table.
                // Sharing taxonomies across object types is discoraged, but unique taxonomies work well.
                // Note: Do not attempt to restrict to "post" only. This has been attempted in 5.8.9 and later reverted.
                extract(acf_decode_post_id($post_id));
                if ($type === 'block') {
                    // Get parent block...
                }

                // Loop over taxonomies and save terms.
                foreach ($this->save_post_terms as $taxonomy => $term_ids) {
                    wp_set_object_terms($id, $term_ids, $taxonomy, false);
                }

                // Reset storage.
                $this->save_post_terms = [];
            }
        }

        /*
         *  format_value()
         *
         *  This filter is appied to the $value after it is loaded from the db and before it is returned to the template
         *
         *  @type	filter
         *  @since	3.6
         *  @date	23/01/13
         *
         *  @param	$value (mixed) the value which was loaded from the database
         *  @param	$post_id (mixed) the $post_id from which the value was loaded
         *  @param	$field (array) the field array holding all the field options
         *
         *  @return	$value (mixed) the modified value
         */

        function format_value($value, $post_id, $field)
        {
            // bail early if no value
            if (empty($value)) {
                return false;
            }

            // force value to array
            $value = acf_get_array($value);

            // load posts if needed
            if ($field['return_format'] == 'object') {
                // get posts
                $value = $this->get_terms($value, $field["taxonomy"]);
            }

            // convert back from array if neccessary
            if (
                $field['field_type'] == 'select' ||
                $field['field_type'] == 'radio'
            ) {
                $value = array_shift($value);
            }

            // return
            return $value;
        }

        /*
         *  render_field()
         *
         *  Create the HTML interface for your field
         *
         *  @type	action
         *  @since	3.6
         *  @date	23/01/13
         *
         *  @param	$field - an array holding all the field's data
         */

        function render_field($field)
        {
            // force value to array
            $field['value'] = acf_get_array($field['value']);

            // vars
            $div = [
                'class' => 'acf-taxonomy-field',
                'data-save' => $field['save_terms'],
                'data-ftype' => $field['field_type'],
                'data-taxonomy' => $field['taxonomy'],
                'data-allow_null' => $field['allow_null'],
            ];

            // get taxonomy
            $taxonomy = get_taxonomy($field['taxonomy']);

            // bail early if taxonomy does not exist
            if (!$taxonomy) {
                return;
            }
            ?>
<div <?php acf_esc_attr_e($div); ?>>
	<?php
 if ($field['add_term'] && current_user_can($taxonomy->cap->manage_terms)): ?>
	<div class="acf-actions -hover">
		<a href="#" class="acf-icon -plus acf-js-tooltip small" data-name="add" title="<?php echo esc_attr(
      $taxonomy->labels->add_new_item
  ); ?>"></a>
	</div>
	<?php endif;

 if ($field['field_type'] == 'select') {
     $field['multiple'] = 0;

     $this->render_field_select($field);
 } elseif ($field['field_type'] == 'multi_select') {
     $field['multiple'] = 1;

     $this->render_field_select($field);
 } elseif ($field['field_type'] == 'radio') {
     $this->render_field_checkbox($field);
 } elseif ($field['field_type'] == 'checkbox') {
     $this->render_field_checkbox($field);
 }?>
</div><?php
        }

        /*
         *  render_field_select()
         *
         *  Create the HTML interface for your field
         *
         *  @type	action
         *  @since	3.6
         *  @date	23/01/13
         *
         *  @param	$field - an array holding all the field's data
         */

        function render_field_select($field)
        {
            // Change Field into a select
            $field['type'] = 'select';
            $field['ui'] = 1;
            $field['ajax'] = 1;
            $field['choices'] = [];

            // value
            if (!empty($field['value'])) {
                // get terms
                $terms = $this->get_terms($field['value'], $field['taxonomy']);

                // set choices
                if (!empty($terms)) {
                    foreach (array_keys($terms) as $i) {
                        // vars
                        $term = acf_extract_var($terms, $i);

                        // append to choices
                        $field['choices'][
                            $term->term_id
                        ] = $this->get_term_title($term, $field);
                    }
                }
            }

            // render select
            acf_render_field($field);
        }

        /*
         *  render_field_checkbox()
         *
         *  Create the HTML interface for your field
         *
         *  @type	action
         *  @since	3.6
         *  @date	23/01/13
         *
         *  @param	$field - an array holding all the field's data
         */

        function render_field_checkbox($field)
        {
            // hidden input
            acf_hidden_input([
                'type' => 'hidden',
                'name' => $field['name'],
            ]);

            // checkbox saves an array
            if ($field['field_type'] == 'checkbox') {
                $field['name'] .= '[]';
            }

            // taxonomy
            $taxonomy_obj = get_taxonomy($field['taxonomy']);

            // include walker
            acf_include('includes/walkers/class-acf-walker-taxonomy-field.php');

            // vars
            $args = [
                'taxonomy' => $field['taxonomy'],
                'show_option_none' => sprintf(
                    _x('No %s', 'No terms', 'acf'),
                    strtolower($taxonomy_obj->labels->name)
                ),
                'hide_empty' => false,
                'style' => 'none',
                'walker' => new ACF_Taxonomy_Field_Walker($field),
            ];

            // filter for 3rd party customization
            $args = apply_filters(
                'acf/fields/taxonomy/wp_list_categories',
                $args,
                $field
            );
            $args = apply_filters(
                'acf/fields/taxonomy/wp_list_categories/name=' .
                    $field['_name'],
                $args,
                $field
            );
            $args = apply_filters(
                'acf/fields/taxonomy/wp_list_categories/key=' . $field['key'],
                $args,
                $field
            );
            ?>
<div class="categorychecklist-holder">
	<ul class="acf-checkbox-list acf-bl">
		<?php wp_list_categories($args); ?>
	</ul>
</div>
		<?php
        }

        /*
         *  render_field_settings()
         *
         *  Create extra options for your field. This is rendered when editing a field.
         *  The value of $field['name'] can be used (like bellow) to save extra data to the $field
         *
         *  @type	action
         *  @since	3.6
         *  @date	23/01/13
         *
         *  @param	$field	- an array holding all the field's data
         */

        function render_field_settings($field)
        {
            // default_value
            acf_render_field_setting($field, [
                'label' => __('Taxonomy', 'acf'),
                'instructions' => __(
                    'Select the taxonomy to be displayed',
                    'acf'
                ),
                'type' => 'select',
                'name' => 'taxonomy',
                'choices' => acf_get_taxonomy_labels(),
            ]);

            // field_type
            acf_render_field_setting($field, [
                'label' => __('Appearance', 'acf'),
                'instructions' => __(
                    'Select the appearance of this field',
                    'acf'
                ),
                'type' => 'select',
                'name' => 'field_type',
                'optgroup' => true,
                'choices' => [
                    __("Multiple Values", 'acf') => [
                        'checkbox' => __('Checkbox', 'acf'),
                        'multi_select' => __('Multi Select', 'acf'),
                    ],
                    __("Single Value", 'acf') => [
                        'radio' => __('Radio Buttons', 'acf'),
                        'select' => _x('Select', 'noun', 'acf'),
                    ],
                ],
            ]);

            // allow_null
            acf_render_field_setting($field, [
                'label' => __('Allow Null?', 'acf'),
                'instructions' => '',
                'name' => 'allow_null',
                'type' => 'true_false',
                'ui' => 1,
                'conditions' => [
                    'field' => 'field_type',
                    'operator' => '!=',
                    'value' => 'checkbox',
                ],
            ]);

            // add_term
            acf_render_field_setting($field, [
                'label' => __('Create Terms', 'acf'),
                'instructions' => __(
                    'Allow new terms to be created whilst editing',
                    'acf'
                ),
                'name' => 'add_term',
                'type' => 'true_false',
                'ui' => 1,
            ]);

            // save_terms
            acf_render_field_setting($field, [
                'label' => __('Save Terms', 'acf'),
                'instructions' => __(
                    'Connect selected terms to the post',
                    'acf'
                ),
                'name' => 'save_terms',
                'type' => 'true_false',
                'ui' => 1,
            ]);

            // load_terms
            acf_render_field_setting($field, [
                'label' => __('Load Terms', 'acf'),
                'instructions' => __('Load value from posts terms', 'acf'),
                'name' => 'load_terms',
                'type' => 'true_false',
                'ui' => 1,
            ]);

            // return_format
            acf_render_field_setting($field, [
                'label' => __('Return Value', 'acf'),
                'instructions' => '',
                'type' => 'radio',
                'name' => 'return_format',
                'choices' => [
                    'object' => __("Term Object", 'acf'),
                    'id' => __("Term ID", 'acf'),
                ],
                'layout' => 'horizontal',
            ]);
        }

        /*
         *  ajax_add_term
         *
         *  description
         *
         *  @type	function
         *  @date	17/04/2015
         *  @since	5.2.3
         *
         *  @param	$post_id (int)
         *  @return	$post_id (int)
         */

        function ajax_add_term()
        {
            // vars
            $args = wp_parse_args($_POST, [
                'nonce' => '',
                'field_key' => '',
                'term_name' => '',
                'term_parent' => '',
            ]);

            // verify nonce
            if (!acf_verify_ajax()) {
                die();
            }

            // load field
            $field = acf_get_field($args['field_key']);
            if (!$field) {
                die();
            }

            // vars
            $taxonomy_obj = get_taxonomy($field['taxonomy']);
            $taxonomy_label = $taxonomy_obj->labels->singular_name;

            // validate cap
            // note: this situation should never occur due to condition of the add new button
            if (!current_user_can($taxonomy_obj->cap->manage_terms)) {
                wp_send_json_error([
                    'error' => sprintf(
                        __('User unable to add new %s', 'acf'),
                        $taxonomy_label
                    ),
                ]);
            }

            // save?
            if ($args['term_name']) {
                // exists
                if (
                    term_exists(
                        $args['term_name'],
                        $field['taxonomy'],
                        $args['term_parent']
                    )
                ) {
                    wp_send_json_error([
                        'error' => sprintf(
                            __('%s already exists', 'acf'),
                            $taxonomy_label
                        ),
                    ]);
                }

                // vars
                $extra = [];
                if ($args['term_parent']) {
                    $extra['parent'] = (int) $args['term_parent'];
                }

                // insert
                $data = wp_insert_term(
                    $args['term_name'],
                    $field['taxonomy'],
                    $extra
                );

                // error
                if (is_wp_error($data)) {
                    wp_send_json_error([
                        'error' => $data->get_error_message(),
                    ]);
                }

                // load term
                $term = get_term($data['term_id']);

                // prepend ancenstors count to term name
                $prefix = '';
                $ancestors = get_ancestors($term->term_id, $term->taxonomy);
                if (!empty($ancestors)) {
                    $prefix = str_repeat('- ', count($ancestors));
                }

                // success
                wp_send_json_success([
                    'message' => sprintf(
                        __('%s added', 'acf'),
                        $taxonomy_label
                    ),
                    'term_id' => $term->term_id,
                    'term_name' => $term->name,
                    'term_label' => $prefix . $term->name,
                    'term_parent' => $term->parent,
                ]);
            }
            ?><form method="post"><?php
acf_render_field_wrap([
    'label' => __('Name', 'acf'),
    'name' => 'term_name',
    'type' => 'text',
]);

if (is_taxonomy_hierarchical($field['taxonomy'])) {
    $choices = [];
    $response = $this->get_ajax_query($args);

    if ($response) {
        foreach ($response['results'] as $v) {
            $choices[$v['id']] = $v['text'];
        }
    }

    acf_render_field_wrap([
        'label' => __('Parent', 'acf'),
        'name' => 'term_parent',
        'type' => 'select',
        'allow_null' => 1,
        'ui' => 0,
        'choices' => $choices,
    ]);
}
?><p class="acf-submit">
			<button class="acf-submit-button button button-primary" type="submit"><?php _e(
       "Add",
       'acf'
   ); ?></button>
		</p>
		</form><?php // die
  die();
        }
    }

    // initialize
    acf_register_field_type('acf_field_taxonomy');
endif; // class_exists check

?>
