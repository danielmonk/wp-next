<?php
if (!class_exists('GFForms')) {
    die();
}

class GF_REST_Notes_Controller extends GF_REST_Entry_Notes_Controller
{
    /**
     * @var string
     */
    public $rest_base = 'notes';

    /**
     * Register the routes for the objects of the controller.
     */
    public function register_routes()
    {
        $namespace = $this->namespace;

        $base = $this->rest_base;

        register_rest_route($namespace, '/' . $base, [
            [
                'methods' => WP_REST_Server::READABLE,
                'callback' => [$this, 'get_items'],
                'permission_callback' => [$this, 'get_items_permissions_check'],
                'args' => $this->get_collection_params(),
            ],
        ]);

        register_rest_route($namespace, '/' . $base . '/(?P<note_id>[\d]+)', [
            [
                'methods' => WP_REST_Server::READABLE,
                'callback' => [$this, 'get_item'],
                'permission_callback' => [$this, 'get_item_permissions_check'],
                'args' => $this->get_collection_params(),
            ],
            [
                'methods' => 'PUT',
                'callback' => [$this, 'update_item'],
                'permission_callback' => [
                    $this,
                    'update_item_permissions_check',
                ],
                'args' => $this->get_endpoint_args_for_item_schema(false),
            ],
            [
                'methods' => WP_REST_Server::DELETABLE,
                'callback' => [$this, 'delete_item'],
                'permission_callback' => [
                    $this,
                    'delete_item_permissions_check',
                ],
                'args' => $this->get_collection_params(),
            ],
        ]);
    }

    /**
     * Get one note.
     *
     * @since 2.4.18
     *
     * @param WP_REST_Request $request Full data about the request.
     *
     * @return WP_Error|WP_REST_Response
     */
    public function get_item($request)
    {
        $note_id = $request->get_param('note_id');

        $note = GFAPI::get_note($note_id);

        if (is_wp_error($note)) {
            return new WP_Error(
                'gf_note_invalid_id',
                __('Invalid note id.', 'gravityforms'),
                ['status' => 404]
            );
        }

        $data = $this->prepare_item_for_response($note, $request);

        return $data;
    }

    /**
     * Get multiple notes.
     *
     * @since 2.4.18
     *
     * @param WP_REST_Request $request Full data about the request.
     *
     * @return WP_Error|WP_REST_Response
     */
    public function get_items($request)
    {
        $criteria = $request->get_params();

        $allowed_criteria = [
            'entry_id',
            'user_id',
            'note_type',
            'sub_type',
            'user_name',
        ];

        $search_criteria = [];

        foreach ($criteria as $key => $value) {
            if (in_array($key, $allowed_criteria)) {
                $search_criteria[$key] = $value;
            }
        }

        $sorting = '';
        if (isset($criteria['sorting'])) {
            $sorting = $criteria['sorting'];
        }

        $notes = GFAPI::get_notes($search_criteria, $sorting);

        if (is_wp_error($notes)) {
            return new WP_Error(
                'gf_entry_invalid_notes',
                __('Error retrieving notes.', 'gravityforms'),
                ['status' => 404]
            );
        }

        if (!is_array($notes) || empty($notes)) {
            return [];
        }

        $data = [];

        foreach ($notes as $note) {
            $data[$note->id] = $note;
        }

        $response = new WP_REST_Response($data, 200);

        return $response;
    }

    /**
     * Create one note.
     *
     * @since 2.4.18
     *
     * @param WP_REST_Request $request Full data about the request.
     *
     * @return WP_Error|WP_REST_Request
     */
    public function create_item($request)
    {
        $note = $this->prepare_item_for_database($request);
        $entry_id = $request->get_param('entry_id');

        if (is_wp_error($note)) {
            return $note;
        }

        $note_id = GFAPI::add_note(
            $entry_id,
            $note['user_id'],
            $note['user_name'],
            $note['note']
        );

        if (is_wp_error($note_id)) {
            $status = $this->get_error_status($note_id);
            return new WP_Error(
                $note_id->get_error_code(),
                $note_id->get_error_message(),
                ['status' => $status]
            );
        }

        $note['id'] = $note_id;

        $note = $this->prepare_note_for_response($note_id);
        $response = rest_ensure_response($note);
        $response->set_status(201);
        $base = sprintf('entries/%d/notes/', $note_id);
        $response->header(
            'Location',
            rest_url(sprintf('%s/%s/%d', $this->namespace, $base, $note_id))
        );

        return $response;
    }

    /**
     * Update one note.
     *
     * @since 2.4.18
     *
     * @param WP_REST_Request $request Full data about the request.
     *
     * @return WP_Error|WP_REST_Response
     */
    public function update_item($request)
    {
        $note = $this->prepare_item_for_database($request);
        $note['id'] = $request['note_id'];

        if (is_wp_error($note)) {
            return $note;
        }

        $result = GFAPI::update_note($note, $request->get_param('note_id'));

        if (is_wp_error($result)) {
            $status = $this->get_error_status($result);
            return new WP_Error(
                $result->get_error_code(),
                $result->get_error_message(),
                ['status' => $status]
            );
        }

        $updated_note = GFAPI::get_note($note['id']);

        $response = $this->prepare_item_for_response($updated_note, $request);
        $response->set_status(201);
        $base = sprintf('entries/%d/notes/', $note['id']);
        $response->header(
            'Location',
            rest_url(sprintf('%s/%s/%d', $this->namespace, $base, $note['id']))
        );

        return rest_ensure_response($response);
    }

    /**
     * Delete one note.
     *
     * @since 2.4.18
     *
     * @param WP_REST_Request $request Full data about the request.
     *
     * @return WP_Error|WP_REST_Response
     */
    public function delete_item($request)
    {
        $note_id = $request['note_id'];

        $note = GFAPI::get_note($note_id);
        if (is_wp_error($note)) {
            return new WP_Error(
                'gf_entry_invalid_id',
                __('Invalid note id.', 'gravityforms'),
                ['status' => 404]
            );
        }

        $result = GFAPI::delete_note($note_id);

        if (is_wp_error($result)) {
            $message = $result->get_error_message();
            return new WP_Error('gf_cannot_delete', $message, [
                'status' => 500,
            ]);
        }

        $previous = $this->prepare_item_for_response($note, $request);
        $response = new WP_REST_Response();
        $response->set_data([
            'deleted' => true,
            'previous' => $previous->get_data(),
        ]);

        return $response;
    }

    /**
     * Check if a given request has access to get items.
     *
     * @since 2.4.18
     *
     * @param WP_REST_Request $request Full data about the request.
     *
     * @return WP_Error|bool
     */
    public function get_items_permissions_check($request)
    {
        return parent::get_items_permissions_check($request);
    }

    /**
     * Check if a given request has access to get a specific item.
     *
     * @since 2.4.18
     *
     * @param WP_REST_Request $request Full data about the request.
     *
     * @return WP_Error|bool
     */
    public function get_item_permissions_check($request)
    {
        return parent::get_item_permissions_check($request);
    }

    /**
     * Check if a given request has access to create items.
     *
     * @since 2.4-.18
     *
     * @param WP_REST_Request $request Full data about the request.
     *
     * @return WP_Error|bool
     */
    public function create_item_permissions_check($request)
    {
        /**
         * Filters the capability required to create entries via the REST API.
         *
         * @since 2.4.18
         *
         * @param string|array    $capability The capability required for this endpoint.
         * @param WP_REST_Request $request    Full data about the request.
         */
        $capability = apply_filters(
            'gform_rest_api_capability_post_notes',
            'gravityforms_edit_entry_notes',
            $request
        );

        return $this->current_user_can_any($capability, $request);
    }

    /**
     * Check if a given request has access to update a specific item.
     *
     * @since 2.4.18
     *
     * @param WP_REST_Request $request Full data about the request.
     *
     * @return WP_Error|bool
     */
    public function update_item_permissions_check($request)
    {
        return parent::update_item_permissions_check($request);
    }

    /**
     * Check if a given request has access to delete a specific item.
     *
     * @since 2.4.18
     *
     * @param WP_REST_Request $request Full data about the request.
     *
     * @return WP_Error|bool
     */
    public function delete_item_permissions_check($request)
    {
        return parent::delete_item_permissions_check($request);
    }

    /**
     * Prepare the item for create or update operation.
     *
     * @since 2.4.18
     *
     * @param WP_REST_Request $request Request object.
     *
     * @return WP_Error|array $prepared_item.
     */
    protected function prepare_item_for_database($request)
    {
        $note = $request->get_json_params();

        if (empty($note)) {
            return new WP_Error(
                'missing_entry',
                __('Missing entry JSON', 'gravityforms')
            );
        }

        $note['user_id'] = intval($note['user_id']);
        $note['note'] = wp_kses_post($note['value']);

        return $note;
    }

    /**
     * Prepare the item for the REST response.
     *
     * @since 2.4.18
     *
     * @param mixed           $item    WordPress representation of the item.
     * @param WP_REST_Request $request Request object.
     *
     * @return WP_REST_Response Returns the item wrapped in a WP_REST_Response object
     */
    public function prepare_item_for_response($item, $request)
    {
        $item = $this->prepare_note_for_response($item->id);

        $response = new WP_REST_Response($item, 200);
        return $response;
    }

    /***
     * Prepares note for REST API response, decoding or unserializing appropriate fields.
     *
     * @since 2.4.18
     *
     * @param int $note_id The note id.
     *
     * @return bool|array Returns the entry array ready to be send in the REST API response.
     */
    public function prepare_note_for_response($note_id)
    {
        $note = GFAPI::get_note($note_id);

        if (is_wp_error($note) || !isset($note->ID)) {
            return $note;
        }

        return $note;
    }
}
