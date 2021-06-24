var el = wp.element.createElement;

/* Zoom Meeting Shortcode */
wp.blocks.registerBlockType('wp-zoom-addon/zoom-wp-meeting-block', {

    title: 'Add Zoom Meeting',

    icon: 'video-alt2',

    category: 'embed',

    attributes: { // The data this block will be storing

        id: { type: 'string' }, // Notice box id in h4 tag

        type: { type: 'string', default: 'Meeting' }, // Notice box type for loading the appropriate CSS class. Default class is 'default'.

        content: { type: 'array', source: 'children', selector: 'p' } /// Notice box content in p tag

    },

    /* block.js */
    edit: function (props) {
        // How our block renders in the editor in edit mode

        function updateId(event) {
            props.setAttributes({ id: event.target.value.replace(/\s/g, '') });
        }

        function updateType(event) {
            props.setAttributes({ type: event.target.value });
        }

        return el('div',
            {
                className: 'zoom-wp-gutenberg-block'
            },
            el(
                'img',
                {
                    className: "zoom-block-icon",
                    src: '/wp-content/plugins/wp-zoom-addon/assets/admin/images/zoom-icon.png'
                }
            ),

            el(
                'label',
                { className: "zoom-block-heading" },
                'Zoom ' + props.attributes.type
            ),
            el(
                'span',
                { className: "zoom-block-desc" },
                'Select meeting type and paste your ' + props.attributes.type + ' ID ' + ('Meeting' == props.attributes.type ? 'from Zoom Meetings -> Meeting ID' : '')
            ),
            el(
                'select',
                {
                    onChange: updateType,
                    value: props.attributes.type,
                    className: "zoom-block-select",
                    style: { width: '30%', 'margin-right': '5px' }
                },
                el("option", { value: "Meeting" }, "Meeting"),
                el("option", { value: "Webinar" }, "Webinar"),
            ),
            el(
                'input',
                {
                    type: 'text',
                    placeholder: 'Your Zoom ' + props.attributes.type + ' ID',
                    value: props.attributes.id,
                    className: "zoom-block-input",
                    onChange: updateId,
                }
            ),
            el(
                'a',
                {
                    href: 'https://elearningevolve.com/blog/zoom-webinar-on-wordpress/',
                    target: '_blank',
                    className: "zoom-block-link",
                    icon: 'link'
                },
                ('Webinar' == props.attributes.type ? 'See how to setup Zoom Webinar' : '')
            ),


        ); // End return

    },  // End edit()

    save: function (props) {
        // How our block renders on the frontend
        return el(wp.editor.RichText.Content, {
            value: '[zoom_api_link meeting_id="' + props.attributes.id + '" ' + ('Webinar' == props.attributes.type ? ' is_webinar=1 ' : '') + ']'
        });
    } // End save()
});

/* Zoom Meeting Latest Recording Shortcode */
wp.blocks.registerBlockType('wp-zoom-addon/zoom-wp-latest-recording-block', {

    title: 'Zoom Meeting Latest Recording',

    icon: 'embed-video',

    category: 'embed',

    attributes: { // The data this block will be storing

        id: { type: 'string' }, // Notice box id in h4 tag

        start_time: { type: 'string' }, // Recording Start At

        end_time: { type: 'string' }, // Recording End At

        type: { type: 'string', default: 'Meeting' }, // Notice box type for loading the appropriate CSS class. Default class is 'default'.

        content: { type: 'array', source: 'children', selector: 'p' } /// Notice box content in p tag

    },

    /* block.js */
    edit: function (props) {
        // How our block renders in the editor in edit mode

        function updateId(event) {
            props.setAttributes({ id: event.target.value.replace(/\s/g, '') });
        }

        function updateStartTime(event) {
            props.setAttributes({ start_time: event.target.value });
        }

        function updateEndTime(event) {
            props.setAttributes({ end_time: event.target.value });
        }

        function updateType(event) {
            props.setAttributes({ type: event.target.value });
        }

        return el('div',
            {
                className: 'zoom-wp-gutenberg-block'
            },
            el(
                'img',
                {
                    className: "zoom-block-icon",
                    src: '/wp-content/plugins/wp-zoom-addon/assets/admin/images/zoom-icon.png'
                }
            ),

            el(
                'label',
                { className: "zoom-block-heading" },
                'Zoom Meeting Latest Recording'
            ),
            el(
                'span',
                { className: "zoom-block-desc" },
                'Select meeting type and paste your ' + props.attributes.type + ' ID ' + ('Meeting' == props.attributes.type ? 'from Zoom Meetings -> Meeting ID' : '')
            ),
            el(
                'select',
                {
                    onChange: updateType,
                    value: props.attributes.type,
                    className: "zoom-block-select",
                    style: { width: '30%', 'margin-right': '5px' }
                },
                el("option", { value: "Meeting" }, "Meeting"),
                el("option", { value: "Webinar" }, "Webinar"),
            ),
            el(
                'input',
                {
                    type: 'text',
                    placeholder: 'Your Zoom ' + props.attributes.type + ' ID',
                    value: props.attributes.id,
                    className: "zoom-block-input",
                    onChange: updateId,
                }
            ),
            el(
                'br',
                {
                }
            ),
            el(
                'div',
                { className: "zoom-block-container"},
                'Start Recording At',
            ),
            el(
                'input',
                {
                    type: 'text',
                    placeholder: 'in hh:mm:ss e.g 00:01:00',
                    value: props.attributes.start_time,
                    className: "zoom-block-input",
                    onChange: updateStartTime,
                }
            ),
            el(
                'br',
                {
                }
            ),
            el(
                'div',
                { className: "zoom-block-container" },
                'End Recording At',
            ),
            el(
                'input',
                {
                    type: 'text',
                    placeholder: 'in hh:mm:ss e.g 00:40:00',
                    value: props.attributes.end_time,
                    className: "zoom-block-input",
                    onChange: updateEndTime,
                }
            ),
        ); // End return

    },  // End edit()

    save: function (props) {
        // How our block renders on the frontend
        return el(wp.editor.RichText.Content, {
            value: '[zoom_latest_recording meeting_id="' + props.attributes.id + '" '
            + ('Webinar' == props.attributes.type ? ' is_webinar="1" ' : '')
            + ( props.attributes.start_time ? ' start_time="' + props.attributes.start_time + '"' : '')
            + ( props.attributes.end_time ? ' end_time="' + props.attributes.end_time + '"' : '') + ']'
        });
    } // End save()
});

/* Zoom Recording Shortcode */
wp.blocks.registerBlockType('wp-zoom-addon/zoom-wp-recording-block', {

    title: 'Zoom Recording',

    icon: 'embed-video',

    category: 'embed',

    attributes: { // The data this block will be storing

        play_url: { type: 'string' }, // Notice box id in h4 tag

        start_time: { type: 'string' }, // Recording Start At

        end_time: { type: 'string' }, // Recording End At

        content: { type: 'array', source: 'children', selector: 'p' } /// Notice box content in p tag

    },

    /* block.js */
    edit: function (props) {
        // How our block renders in the editor in edit mode

        function updatePlayUrl(event) {
            props.setAttributes({ play_url: event.target.value });
        }

        function updateStartTime(event) {
            props.setAttributes({ start_time: event.target.value });
        }

        function updateEndTime(event) {
            props.setAttributes({ end_time: event.target.value });
        }

        return el('div',
            {
                className: 'zoom-wp-gutenberg-block'
            },
            el(
                'img',
                {
                    className: "zoom-block-icon",
                    src: '/wp-content/plugins/wp-zoom-addon/assets/admin/images/zoom-icon.png'
                }
            ),
            el(
                'label',
                { className: "zoom-block-heading" },
                'Zoom Recording'
            ),
            el(
                'br',
                {
                }
            ),
            el(
                'div',
                { className: "zoom-block-container" },
                'Recording Play URL',
            ),
            el(
                'input',
                {
                    type: 'text',
                    placeholder: 'https://us02web.zoom.us/rec/play/xxxx',
                    value: props.attributes.play_url,
                    className: "zoom-block-input zoom-block-url",
                    onChange: updatePlayUrl,
                }
            ),
            el(
                'br',
                {
                }
            ),
            el(
                'a',
                { target: '_blank', href: 'https://elearningevolve.com/blog/zoom-wordpress-plugin-v4-10-0/#recording-play-url', className: "zoom-block-link" },
                '(See usage instruction)',
            ),
            el(
                'div',
                { className: "zoom-block-container" },
                'Start Recording At',
            ),
            el(
                'input',
                {
                    type: 'text',
                    placeholder: 'in hh:mm:ss e.g 00:01:00',
                    value: props.attributes.start_time,
                    className: "zoom-block-input",
                    onChange: updateStartTime,
                }
            ),
            el(
                'br',
                {
                }
            ),
            el(
                'div',
                { className: "zoom-block-container" },
                'End Recording At',
            ),
            el(
                'input',
                {
                    type: 'text',
                    placeholder: 'in hh:mm:ss e.g 00:40:00',
                    value: props.attributes.end_time,
                    className: "zoom-block-input",
                    onChange: updateEndTime,
                }
            ),
        ); // End return

    },  // End edit()

    save: function (props) {
        // How our block renders on the frontend
        return el(wp.editor.RichText.Content, {
            value: "[zoom_recording play_url='" + props.attributes.play_url + "' "
                + (props.attributes.start_time ? ' start_time="' + props.attributes.start_time + '"' : '')
                + (props.attributes.end_time ? ' end_time="' + props.attributes.end_time + '"' : '') + ']'
        });
    } // End save()
});