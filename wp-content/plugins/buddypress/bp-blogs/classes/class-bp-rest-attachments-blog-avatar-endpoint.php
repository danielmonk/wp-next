<?php
/**
 * BP REST: BP_REST_Attachments_Blog_Avatar_Endpoint class
 *
 * @package BuddyPress
 * @since 6.0.0
 */

defined('ABSPATH') || exit();

/**
 * Blog avatar endpoints.
 *
 * @since 6.0.0
 */
class BP_REST_Attachments_Blog_Avatar_Endpoint extends WP_REST_Controller
{
    use BP_REST_Attachments;

    /**
     * Reuse some parts of the BP_REST_Blogs_Endpoint class.
     *
     * @since 6.0.0
     *
     * @var BP_REST_Blogs_Endpoint
     */
    protected $blogs_endpoint;

    /**
     * This variable is used to query for the requested blog only once.
     * It is set during the permission check methods.
     *
     * @since 6.0.0
     *
     * @var BP_Blogs_Blog
     */
    protected $blog;

    /**
     * Constructor.
     *
     * @since 6.0.0
     */
    public function __construct()
    {
        $this->namespace = bp_rest_namespace() . '/' . bp_rest_version();
        $this->rest_base = buddypress()->blogs->id;
        $this->blogs_endpoint = new BP_REST_Blogs_Endpoint();
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
            '/' . $this->rest_base . '/(?P<id>[\d]+)/avatar',
            [
                'args' => [
                    'id' => [
                        'description' => __(
                            'A unique numeric ID for the blog.',
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
                    'args' => $this->get_item_collection_params(),
                ],
                'schema' => [$this, 'get_item_schema'],
            ]
        );
    }

    /**
     * Fetch an existing blog avatar.
     *
     * @since 6.0.0
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response|WP_Error
     */
    public function get_item($request)
    {
        $no_user_grav = (bool) $request->get_param('no_user_gravatar');

        if (empty($this->blog->admin_user_id) && !$no_user_grav) {
            return new WP_Error(
                'bp_rest_blog_avatar_get_item_user_failed',
                __(
                    'There was a problem confirming the blog\'s user admin is valid.',
                    'buddypress'
                ),
                [
                    'status' => 500,
                ]
            );
        }

        // Set the requested args.
        $requested_args = [
            'blog_id' => $request['id'],
            'no_grav' => $no_user_grav,
            'html' => (bool) $request['html'],
        ];

        if ($request['alt']) {
            $requested_args['alt'] = $request['alt'];
        }

        if (!$no_user_grav) {
            $requested_args['admin_user_id'] = (int) $this->blog->admin_user_id;

            if (!isset($requested_args['alt'])) {
                $requested_args['alt'] = '';
            }
        }

        $args = [];
        foreach (['full', 'thumb'] as $type) {
            $requested_args['type'] = $type;
            $args[$type] = bp_get_blog_avatar($requested_args);
        }

        // Get the avatar object.
        $avatar = $this->get_avatar_object($args);

        if (!$avatar->full && !$avatar->thumb) {
            return new WP_Error(
                'bp_rest_attachments_blog_avatar_no_image',
                __(
                    'Sorry, there was a problem fetching the blog avatar.',
                    'buddypress'
                ),
                [
                    'status' => 500,
                ]
            );
        }

        $retval = [
            $this->prepare_response_for_collection(
                $this->prepare_item_for_response($avatar, $request)
            ),
        ];

        $response = rest_ensure_response($retval);

        /**
         * Fires after a blog avatar is fetched via the REST API.
         *
         * @since 6.0.0
         *
         * @param stdClass          $avatar   The avatar object.
         * @param WP_REST_Response  $response The response data.
         * @param WP_REST_Request   $request  The request sent to the API.
         */
        do_action(
            'bp_rest_attachments_blog_avatar_get_item',
            $avatar,
            $response,
            $request
        );

        return $response;
    }

    /**
     * Checks if a given request has access to get a blog avatar.
     *
     * @since 6.0.0
     *
     * @param WP_REST_Request $request Full details about the request.
     * @return true|WP_Error
     */
    public function get_item_permissions_check($request)
    {
        $retval = new WP_Error(
            'bp_rest_authorization_required',
            __(
                'Sorry, you are not allowed to perform this action.',
                'buddypress'
            ),
            [
                'status' => rest_authorization_required_code(),
            ]
        );

        $this->blog = $this->blogs_endpoint->get_blog_object($request['id']);

        if (!is_object($this->blog)) {
            $retval = new WP_Error(
                'bp_rest_blog_invalid_id',
                __('Invalid group ID.', 'buddypress'),
                [
                    'status' => 404,
                ]
            );
        } elseif (buddypress()->avatar->show_avatars) {
            $retval = true;
        } else {
            $retval = new WP_Error(
                'bp_rest_attachments_blog_avatar_disabled',
                __('Sorry, blog avatar is disabled.', 'buddypress'),
                [
                    'status' => 500,
                ]
            );
        }

        /**
         * Filter the blog avatar `get_item` permissions check.
         *
         * @since 6.0.0
         *
         * @param true|WP_Error   $retval  Returned value.
         * @param WP_REST_Request $request The request sent to the API.
         */
        return apply_filters(
            'bp_rest_attachments_blog_avatar_get_item_permissions_check',
            $retval,
            $request
        );
    }

    /**
     * Prepares avatar data to return as an object.
     *
     * @since 6.0.0
     *
     * @param stdClass        $avatar  Avatar object.
     * @param WP_REST_Request $request Full details about the request.
     * @return WP_REST_Response
     */
    public function prepare_item_for_response($avatar, $request)
    {
        $data = [
            'full' => $avatar->full,
            'thumb' => $avatar->thumb,
        ];

        $context = !empty($request['context']) ? $request['context'] : 'view';
        $data = $this->add_additional_fields_to_object($data, $request);
        $data = $this->filter_response_by_context($data, $context);
        $response = rest_ensure_response($data);

        /**
         * Filter a blog avatar value returned from the API.
         *
         * @since 6.0.0
         *
         * @param WP_REST_Response  $response Response.
         * @param WP_REST_Request   $request  Request used to generate the response.
         * @param object            $avatar   Avatar object.
         */
        return apply_filters(
            'bp_rest_attachments_blog_avatar_prepare_value',
            $response,
            $request,
            $avatar
        );
    }

    /**
     * Get the blog avatar schema, conforming to JSON Schema.
     *
     * @since 6.0.0
     *
     * @return array
     */
    public function get_item_schema()
    {
        $schema = [
            '$schema' => 'http://json-schema.org/draft-04/schema#',
            'title' => 'bp_attachments_blog_avatar',
            'type' => 'object',
            'properties' => [
                'full' => [
                    'context' => ['view', 'edit'],
                    'description' => __(
                        'Full size of the image file.',
                        'buddypress'
                    ),
                    'type' => 'string',
                    'format' => 'uri',
                    'readonly' => true,
                ],
                'thumb' => [
                    'context' => ['view', 'edit'],
                    'description' => __(
                        'Thumb size of the image file.',
                        'buddypress'
                    ),
                    'type' => 'string',
                    'format' => 'uri',
                    'readonly' => true,
                ],
            ],
        ];

        /**
         * Filters the blog avatar schema.
         *
         * @param string $schema The endpoint schema.
         */
        return apply_filters(
            'bp_rest_attachments_blog_avatar_schema',
            $this->add_additional_fields_schema($schema)
        );
    }

    /**
     * Get the query params for the `get_item`.
     *
     * @since 6.0.0
     *
     * @return array
     */
    public function get_item_collection_params()
    {
        $params = parent::get_collection_params();
        $params['context']['default'] = 'view';

        // Removing unused params.
        unset($params['search'], $params['page'], $params['per_page']);

        $params['html'] = [
            'description' => __(
                'Whether to return an <img> HTML element, vs a raw URL to an avatar.',
                'buddypress'
            ),
            'default' => false,
            'type' => 'boolean',
            'sanitize_callback' => 'rest_sanitize_boolean',
            'validate_callback' => 'rest_validate_request_arg',
        ];

        $params['alt'] = [
            'description' => __(
                'The alt attribute for the <img> element.',
                'buddypress'
            ),
            'default' => '',
            'type' => 'string',
            'sanitize_callback' => 'sanitize_text_field',
            'validate_callback' => 'rest_validate_request_arg',
        ];

        $params['no_user_gravatar'] = [
            'description' => __(
                'Whether to disable the default Gravatar Admin user fallback.',
                'buddypress'
            ),
            'default' => false,
            'type' => 'boolean',
            'sanitize_callback' => 'rest_sanitize_boolean',
            'validate_callback' => 'rest_validate_request_arg',
        ];

        /**
         * Filters the item collection query params.
         *
         * @param array $params Query params.
         */
        return apply_filters(
            'bp_rest_attachments_blog_avatar_collection_params',
            $params
        );
    }
}
