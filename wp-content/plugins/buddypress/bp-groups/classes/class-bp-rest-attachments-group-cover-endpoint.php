<?php
/**
 * BP REST: BP_REST_Attachments_Group_Cover_Endpoint class
 *
 * @package BuddyPress
 * @since 6.0.0
 */

defined('ABSPATH') || exit();

/**
 * Group Cover endpoints.
 *
 * /groups/<group_id>/cover
 *
 * @since 6.0.0
 */
class BP_REST_Attachments_Group_Cover_Endpoint extends WP_REST_Controller
{
    use BP_REST_Attachments;

    /**
     * BP_Attachment_Cover_Image Instance.
     *
     * @since 6.0.0
     *
     * @var BP_Attachment_Cover_Image
     */
    protected $attachment_instance;

    /**
     * Reuse some parts of the BP_REST_Groups_Endpoint class.
     *
     * @since 6.0.0
     *
     * @var BP_REST_Groups_Endpoint
     */
    protected $groups_endpoint;

    /**
     * Hold the group object.
     *
     * @since 6.0.0
     *
     * @var BP_Groups_Group
     */
    protected $group;

    /**
     * Group object type.
     *
     * @since 6.0.0
     *
     * @var string
     */
    protected $object = 'group';

    /**
     * Constructor.
     *
     * @since 6.0.0
     */
    public function __construct()
    {
        $this->namespace = bp_rest_namespace() . '/' . bp_rest_version();
        $this->rest_base = buddypress()->groups->id;
        $this->groups_endpoint = new BP_REST_Groups_Endpoint();
        $this->attachment_instance = new BP_Attachment_Cover_Image();
    }

    /**
     * Register the component routes.
     *
     * @since 6.0.0
     */
    public function register_routes()
    {
        register_rest_route(
            $this->namespace,
            '/' . $this->rest_base . '/(?P<group_id>[\d]+)/cover',
            [
                'args' => [
                    'group_id' => [
                        'description' => __(
                            'A unique numeric ID for the Group.',
                            'buddypress'
                        ),
                        'type' => 'integer',
                    ],
                ],
                [
                    'methods' => WP_REST_Server::READABLE,
                    'callback' => [$this, 'get_item'],
                    'permission_callback' => [
                        $this,
                        'get_item_permissions_check',
                    ],
                ],
                [
                    'methods' => WP_REST_Server::CREATABLE,
                    'callback' => [$this, 'create_item'],
                    'permission_callback' => [
                        $this,
                        'create_item_permissions_check',
                    ],
                ],
                [
                    'methods' => WP_REST_Server::DELETABLE,
                    'callback' => [$this, 'delete_item'],
                    'permission_callback' => [
                        $this,
                        'delete_item_permissions_check',
                    ],
                ],
                'schema' => [$this, 'get_item_schema'],
            ]
        );
    }

    /**
     * Fetch an existing group cover.
     *
     * @since 6.0.0
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function get_item($request)
    {
        $cover_url = bp_get_group_cover_url($this->group);

        if (empty($cover_url)) {
            return new WP_Error(
                'bp_rest_attachments_group_cover_no_image',
                __(
                    'Sorry, there was a problem fetching this group cover.',
                    'buddypress'
                ),
                [
                    'status' => 500,
                ]
            );
        }

        $retval = [
            $this->prepare_response_for_collection(
                $this->prepare_item_for_response($cover_url, $request)
            ),
        ];

        $response = rest_ensure_response($retval);

        /**
         * Fires after a group cover is fetched via the REST API.
         *
         * @since 6.0.0
         *
         * @param string            $cover_url  The group cover url.
         * @param WP_REST_Response  $response   The response data.
         * @param WP_REST_Request   $request    The request sent to the API.
         */
        do_action(
            'bp_rest_attachments_group_cover_get_item',
            $cover_url,
            $response,
            $request
        );

        return $response;
    }

    /**
     * Checks if a given request has access to get a group cover.
     *
     * @since 6.0.0
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function get_item_permissions_check($request)
    {
        $retval = new WP_Error(
            'bp_rest_group_invalid_id',
            __('Invalid group id.', 'buddypress'),
            [
                'status' => 404,
            ]
        );
        $this->group = $this->groups_endpoint->get_group_object($request);

        if (false !== $this->group) {
            $retval = true;
        }

        /**
         * Filter the group cover `get_item` permissions check.
         *
         * @since 6.0.0
         *
         * @param true|WP_Error   $retval  Returned value.
         * @param WP_REST_Request $request The request sent to the API.
         */
        return apply_filters(
            'bp_rest_attachments_group_cover_get_item_permissions_check',
            $retval,
            $request
        );
    }

    /**
     * Upload a group cover.
     *
     * @since 6.0.0
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function create_item($request)
    {
        $request->set_param('context', 'edit');

        // Get the image file from $_FILES.
        $files = $request->get_file_params();

        if (empty($files)) {
            return new WP_Error(
                'bp_rest_attachments_group_cover_no_image_file',
                __('Sorry, you need an image file to upload.', 'buddypress'),
                [
                    'status' => 500,
                ]
            );
        }

        // Upload the group cover.
        $cover_url = $this->upload_cover_from_file($files);
        if (is_wp_error($cover_url)) {
            return $cover_url;
        }

        $retval = [
            $this->prepare_response_for_collection(
                $this->prepare_item_for_response($cover_url, $request)
            ),
        ];

        $response = rest_ensure_response($retval);

        /**
         * Fires after a group cover is uploaded via the REST API.
         *
         * @since 6.0.0
         *
         * @param string            $cover_url  The group cover url.
         * @param WP_REST_Response  $response   The response data.
         * @param WP_REST_Request   $request    The request sent to the API.
         */
        do_action(
            'bp_rest_attachments_group_cover_create_item',
            $cover_url,
            $response,
            $request
        );

        return $response;
    }

    /**
     * Checks if a given request has access to upload a group cover.
     *
     * @since 6.0.0
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function create_item_permissions_check($request)
    {
        $retval = $this->delete_item_permissions_check($request);

        if (!is_wp_error($retval) && bp_disable_group_cover_image_uploads()) {
            $retval = new WP_Error(
                'bp_rest_attachments_group_cover_disabled',
                __('Sorry, group cover upload is disabled.', 'buddypress'),
                [
                    'status' => 500,
                ]
            );
        }

        /**
         * Filter the group cover `create_item` permissions check.
         *
         * @since 6.0.0
         *
         * @param true|WP_Error   $retval  Returned value.
         * @param WP_REST_Request $request The request sent to the API.
         */
        return apply_filters(
            'bp_rest_attachments_group_cover_create_item_permissions_check',
            $retval,
            $request
        );
    }

    /**
     * Delete an existing group cover.
     *
     * @since 6.0.0
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function delete_item($request)
    {
        $request->set_param('context', 'edit');

        $cover_url = bp_get_group_cover_url($this->group);
        $deleted = bp_attachments_delete_file([
            'item_id' => (int) $this->group->id,
            'object_dir' => $this->get_cover_object_component(),
            'type' => 'cover-image',
        ]);

        if (!$deleted) {
            return new WP_Error(
                'bp_rest_attachments_group_cover_delete_failed',
                __(
                    'Sorry, there was a problem deleting this group cover.',
                    'buddypress'
                ),
                [
                    'status' => 500,
                ]
            );
        }

        // Build the response.
        $response = new WP_REST_Response();
        $response->set_data([
            'deleted' => true,
            'previous' => $cover_url,
        ]);

        /**
         * Fires after a group cover is deleted via the REST API.
         *
         * @since 6.0.0
         *
         * @param BP_Groups_Group   $group     The group object.
         * @param WP_REST_Response  $response  The response data.
         * @param WP_REST_Request   $request   The request sent to the API.
         */
        do_action(
            'bp_rest_attachments_group_cover_delete_item',
            $this->group,
            $response,
            $request
        );

        return $response;
    }

    /**
     * Checks if a given request has access to delete a group cover.
     *
     * @since 6.0.0
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function delete_item_permissions_check($request)
    {
        $retval = $this->get_item_permissions_check($request);

        if (!is_wp_error($retval)) {
            $args = [];
            $error = new WP_Error(
                'bp_rest_authorization_required',
                __(
                    'Sorry, you are not allowed to perform this action.',
                    'buddypress'
                ),
                [
                    'status' => rest_authorization_required_code(),
                ]
            );

            if (!isset($this->group->id) || !isset($this->object)) {
                $retval = $error;
            } else {
                $args = [
                    'item_id' => (int) $this->group->id,
                    'object' => $this->object,
                ];

                if (!is_user_logged_in()) {
                    $retval = new WP_Error(
                        'bp_rest_authorization_required',
                        __(
                            'Sorry, you need to be logged in to perform this action.',
                            'buddypress'
                        ),
                        [
                            'status' => rest_authorization_required_code(),
                        ]
                    );
                } elseif (
                    bp_attachments_current_user_can('edit_cover_image', $args)
                ) {
                    $retval = true;
                } else {
                    $retval = $error;
                }
            }
        }

        /**
         * Filter the group cover `delete_item` permissions check.
         *
         * @since 6.0.0
         *
         * @param true|WP_Error   $retval  Returned value.
         * @param WP_REST_Request $request The request sent to the API.
         */
        return apply_filters(
            'bp_rest_attachments_group_cover_delete_item_permissions_check',
            $retval,
            $request
        );
    }

    /**
     * Prepares group cover to return as an object.
     *
     * @since 6.0.0
     *
     * @param string          $cover_url Group cover url.
     * @param WP_REST_Request $request   Full details about the request.
     * @return WP_REST_Response
     */
    public function prepare_item_for_response($cover_url, $request)
    {
        $data = [
            'image' => $cover_url,
        ];

        $context = !empty($request['context']) ? $request['context'] : 'view';
        $data = $this->add_additional_fields_to_object($data, $request);
        $data = $this->filter_response_by_context($data, $context);
        $response = rest_ensure_response($data);

        /**
         * Filter a group cover value returned from the API.
         *
         * @since 6.0.0
         *
         * @param WP_REST_Response  $response  Response.
         * @param WP_REST_Request   $request   Request used to generate the response.
         * @param string            $cover_url Group cover url.
         */
        return apply_filters(
            'bp_rest_attachments_group_cover_prepare_value',
            $response,
            $request,
            $cover_url
        );
    }

    /**
     * Get the plugin schema, conforming to JSON Schema.
     *
     * @since 6.0.0
     *
     * @return array
     */
    public function get_item_schema()
    {
        $schema = [
            '$schema' => 'http://json-schema.org/draft-04/schema#',
            'title' => 'bp_attachments_group_cover',
            'type' => 'object',
            'properties' => [
                'image' => [
                    'context' => ['view', 'edit'],
                    'description' => __(
                        'Full size of the image file.',
                        'buddypress'
                    ),
                    'type' => 'string',
                    'format' => 'uri',
                    'readonly' => true,
                ],
            ],
        ];

        /**
         * Filters the group cover schema.
         *
         * @param string $schema The endpoint schema.
         */
        return apply_filters(
            'bp_rest_attachments_group_cover_schema',
            $this->add_additional_fields_schema($schema)
        );
    }
}