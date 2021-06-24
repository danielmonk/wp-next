jQuery(function ($) {
    // Zoom Meeting Shortcode button
    tinymce.create('tinymce.plugins.zvcShortcodes', {
        _assetsUrl: function (url) {
            var aUrl, i, l, sUrl = '';
            aUrl = url.split('/');
            for (i = 0, l = aUrl.length - 1; i < l; i++) {
                sUrl += aUrl[i] + '/';
            }

            return sUrl;
        },
        _imgUrl: function (url) {
            return this._assetsUrl(url) + 'images/zoom-icon.png';
        },
        init: function (editor, url) {
            /* Zoom Icon in tinymce editor for meeting embed */
            editor.addButton('zvc_shortcode_button', {
                title: 'Add Zoom Meetings',
                image: this._imgUrl(url),
                width: 500,
                height: 600,
                onclick: function () {
                    var send_data = { do: "listUsers", action: "zvc_get_users_tinymce" };
                    var response_arr = [];
                    var meetings_arr = [];
                    var error_message = "You do not have access to any Zoom user";
                    $.get(ajaxurl + '?' + $.param(send_data)).done(function (response) {
                        if (!response) {
                            editor.windowManager.open({
                                title: 'Choose a User to View Meetings',
                                html: '<div><h4 style="padding:15px; color:red;">' + error_message + '</h4></div>',
                                height: 50,
                                buttons: [{
                                    type: 'button',
                                    text: 'Close',
                                }],
                                onclick: function () {
                                    this.close();
                                }
                            });
                            return;
                        } else if (Array.isArray(response)) {
                            $.each(response, function (i, v) {
                                response_arr.push({
                                    text: v.first_name + ' ' + v.last_name + ' (' + v.email + ')',
                                    value: v.id
                                });
                            });
                        }
                        // Open a TinyMCE modal
                        editor.windowManager.open({
                            title: 'Choose a User to View Meetings',
                            body: [{
                                type: 'listbox',
                                name: 'zoom_users',
                                label: 'Choose a User',
                                values: response_arr,
                                tooltip: 'Select a User'
                            }],
                            onsubmit: function (e) {
                                //Store HosID
                                var host_id = e.data.zoom_users;

                                editor.windowManager.open({
                                    title: 'Embed Zoom Meeting or Webinar',
                                    body: [{
                                        type: 'listbox',
                                        name: 'zoom_meeting_type',
                                        label: 'Meeting Type',
                                        values: [{ text: 'Meeting', value: 'Meeting' }, { text: 'Webinar', value: 'Webinar' }],
                                        tooltip: 'Zoom Meeting or Webinar',
                                    }],
                                    onsubmit: function (v) {
                                        //Store Meeting Type
                                        var meeting_type = v.data.zoom_meeting_type;
                                        var error_message = "No " + meeting_type + " found for this user. Please select another user";

                                        //Now Get Meetings List
                                        var send_data = { do: "getMeetings", host_id: host_id, type: meeting_type, action: "zvc_get_users_tinymce" };
                                        $.get(ajaxurl + '?' + $.param(send_data)).done(function (meetings_response) {

                                            if (!meetings_response) {
                                                editor.windowManager.open({
                                                    title: 'Embed Zoom Meeting or Webinar',
                                                    html: '<div><h4 style="padding:15px; color:red;">' + error_message + '</h4></div>',
                                                    height: 50,
                                                    buttons: [{
                                                        type: 'button',
                                                        text: 'Close',
                                                    }],
                                                    onclick: function () {
                                                        this.close();
                                                    }
                                                });
                                                return;
                                            } else if (meetings_response && Array.isArray(meetings_response)) {
                                                $.each(meetings_response, function (i, v) {
                                                    meetings_arr.push({
                                                        text: v.topic,
                                                        value: v.id
                                                    });
                                                });
                                            }

                                            editor.windowManager.open({
                                                title: 'Select Zoom ' + meeting_type,
                                                body: [{
                                                    type: 'listbox',
                                                    name: 'zoom_meeting_list',
                                                    label: 'Select a ' + meeting_type,
                                                    values: meetings_arr,
                                                },
                                                {
                                                    type: 'textbox',
                                                    name: 'zoom_link_label',
                                                    label: meeting_type + ' Window Title',
                                                    value: '',
                                                    tooltip: 'Title above the Zoom ' + meeting_type + ' Window'
                                                },
                                                {
                                                    type: 'textbox',
                                                    name: 'zoom_link_id',
                                                    label: 'CSS ID for the ' + meeting_type + ' Window',
                                                    value: '',
                                                    tooltip: 'CSS ID for custom styling'
                                                },
                                                {
                                                    type: 'textbox',
                                                    name: 'zoom_link_class',
                                                    label: 'CSS Class for the ' + meeting_type + ' Window',
                                                    value: '',
                                                    tooltip: 'CSS Class for custom styling'
                                                }],
                                                onsubmit: function (v) {
                                                    var insert_string = '[zoom_api_link meeting_id="' + v.data.zoom_meeting_list + '"';
                                                    insert_string += 'Webinar' == meeting_type ? ' is_webinar="1"' : "";
                                                    insert_string += v.data.zoom_link_class ? ' class="' + v.data.zoom_link_class + '"' : "";
                                                    insert_string += v.data.zoom_link_id ? ' id="' + v.data.zoom_link_id + '"' : "";
                                                    insert_string += v.data.zoom_link_label ? ' title="' + v.data.zoom_link_label + '"' : "";
                                                    insert_string += ']';
                                                    editor.insertContent(insert_string);
                                                },
                                            });
                                        }).error(function (error) {
                                            editor.windowManager.open({
                                                title: 'Embed Zoom Meeting or Webinar',
                                                html: '<div><h4 style="padding:15px; color:red;">' + error_message + '</h4></div>',
                                                height: 50,
                                                buttons: [{
                                                    type: 'button',
                                                    text: 'Close',
                                                }],
                                                onclick: function () {
                                                    this.close();
                                                }
                                            });
                                            return;
                                        });
                                    }
                                })
                            }
                        })
                    });
                }
            });
        },
        createControl: function (n, cm) {
            return null;
        }
    });

    // Zoom Meeting Latest Recording
    tinymce.create('tinymce.plugins.zvcRecordingShortcodes', {
        _assetsUrl: function (url) {
            var aUrl, i, l, sUrl = '';
            aUrl = url.split('/');
            for (i = 0, l = aUrl.length - 1; i < l; i++) {
                sUrl += aUrl[i] + '/';
            }

            return sUrl;
        },
        _imgUrl: function (url) {
            return this._assetsUrl(url) + 'images/zoom-recording.png';
        },
        init: function (editor, url) {
            /* Zoom latest recording embed icon in tinymce editor */
            editor.addButton('zvc_recording_shortcode_button', {
                title: 'Zoom Meeting Latest Recording',
                image: this._imgUrl(url),
                width: 500,
                height: 600,
                onclick: function () {
                    var send_data = { do: "listUsers", action: "zvc_get_users_tinymce" };
                    var response_arr = [];
                    var meetings_arr = [];
                    var error_message = "You do not have access to any Zoom user";
                    $.get(ajaxurl + '?' + $.param(send_data)).done(function (response) {
                        if (!response) {
                            editor.windowManager.open({
                                title: 'Choose a User to View Meetings',
                                html: '<div><h4 style="padding:15px; color:red;">' + error_message + '</h4></div>',
                                height: 50,
                                buttons: [{
                                    type: 'button',
                                    text: 'Close',
                                }],
                                onclick: function () {
                                    this.close();
                                }
                            });
                            return;
                        } else if (Array.isArray(response)) {
                            $.each(response, function (i, v) {
                                response_arr.push({
                                    text: v.first_name + ' ' + v.last_name + ' (' + v.email + ')',
                                    value: v.id
                                });
                            });
                        }
                        // Open a TinyMCE modal
                        editor.windowManager.open({
                            title: 'Choose a User to View Meetings',
                            body: [{
                                type: 'listbox',
                                name: 'zoom_users',
                                label: 'Choose a User',
                                values: response_arr,
                                tooltip: 'Select a User'
                            }],
                            onsubmit: function (e) {
                                //Store HosID
                                var host_id = e.data.zoom_users;

                                editor.windowManager.open({
                                    title: 'Embed Zoom Meeting or Webinar Recording',
                                    body: [{
                                        type: 'listbox',
                                        name: 'zoom_meeting_type',
                                        label: 'Meeting Type',
                                        values: [{ text: 'Meeting', value: 'Meeting' }, { text: 'Webinar', value: 'Webinar' }],
                                        tooltip: 'Zoom Meeting or Webinar',
                                    }],
                                    onsubmit: function (v) {
                                        //Store Meeting Type
                                        var meeting_type = v.data.zoom_meeting_type;
                                        var error_message = "No " + meeting_type + " found for this user. Please select another user";

                                        //Now Get Meetings List
                                        var send_data = { do: "getMeetings", host_id: host_id, type: meeting_type, action: "zvc_get_users_tinymce" };
                                        $.get(ajaxurl + '?' + $.param(send_data)).done(function (meetings_response) {

                                            if (!meetings_response) {
                                                editor.windowManager.open({
                                                    title: 'Embed Zoom Meeting or Webinar Recording',
                                                    html: '<div><h4 style="padding:15px; color:red;">' + error_message + '</h4></div>',
                                                    height: 50,
                                                    buttons: [{
                                                        type: 'button',
                                                        text: 'Close',
                                                    }],
                                                    onclick: function () {
                                                        this.close();
                                                    }
                                                });
                                                return;
                                            } else if (meetings_response && Array.isArray(meetings_response)) {
                                                $.each(meetings_response, function (i, v) {
                                                    meetings_arr.push({
                                                        text: v.topic,
                                                        value: v.id
                                                    });
                                                });
                                            }

                                            editor.windowManager.open({
                                                title: 'Select Zoom ' + meeting_type + ' For Latest Recording',
                                                body: [{
                                                    type: 'listbox',
                                                    name: 'zoom_meeting_list',
                                                    label: 'Select a ' + meeting_type,
                                                    values: meetings_arr,
                                                },
                                                {
                                                    type: 'textbox',
                                                    name: 'rec_start_time',
                                                    label: 'Start Recording At',
                                                    value: '',
                                                    placeholder: 'in hh:mm:ss e.g 00:01:00'
                                                },
                                                {
                                                    type: 'textbox',
                                                    name: 'rec_end_time',
                                                    label: 'End Recording At',
                                                    value: '',
                                                    placeholder: 'in hh:mm:ss e.g 00:40:00',
                                                }],
                                                onsubmit: function (v) {
                                                    var insert_string = '[zoom_latest_recording meeting_id="' + v.data.zoom_meeting_list + '"';
                                                    insert_string += 'Webinar' == meeting_type ? ' is_webinar="1"' : "";
                                                    insert_string += (v.data.rec_start_time ? ' start_time="' + v.data.rec_start_time + '"' : "");
                                                    insert_string += (v.data.rec_end_time ? ' end_time="' + v.data.rec_end_time + '"' : "");
                                                    insert_string += ']';
                                                    editor.insertContent(insert_string);
                                                },
                                            });
                                        }).error(function (error) {
                                            editor.windowManager.open({
                                                title: 'Embed Zoom Meeting or Webinar Recording',
                                                html: '<div><h4 style="padding:15px; color:red;">' + error_message + '</h4></div>',
                                                height: 50,
                                                buttons: [{
                                                    type: 'button',
                                                    text: 'Close',
                                                }],
                                                onclick: function () {
                                                    this.close();
                                                }
                                            });
                                            return;
                                        });
                                    }
                                })
                            }
                        })
                    });
                }
            });
        },
        createControl: function (n, cm) {
            return null;
        }
    });
    
    // Zoom Meeting Any Recording Button
    tinymce.create('tinymce.plugins.zvcAnyRecordingShortcodes', {
        _assetsUrl: function (url) {
            var aUrl, i, l, sUrl = '';
            aUrl = url.split('/');
            for (i = 0, l = aUrl.length - 1; i < l; i++) {
                sUrl += aUrl[i] + '/';
            }

            return sUrl;
        },
        _imgUrl: function (url) {
            return this._assetsUrl(url) + 'images/zoom-recording.png';
        },
        init: function (editor, url) {
            /* Zoom latest recording embed icon in tinymce editor */
            editor.addButton('zvc_any_recording_shortcode_button', {
                title: 'Any Zoom Recording',
                image: this._imgUrl(url),
                width: 500,
                height: 600,
                onclick: function () {
                    editor.windowManager.open({
                        width: 500,
                        height: 200,
                        title: 'Zoom Recording',
                        body: [{
                            type: 'textbox',
                            name: 'rec_play_url',
                            label: 'Recording Play URL',
                            values: '',
                            placeholder: 'https://us02web.zoom.us/rec/play/xxxx'
                        },
                        {
                            type: 'container',
                            html: '(<a target="_blank" href="https://elearningevolve.com/blog/zoom-wordpress-plugin-v4-10-0/#recording-play-url">See usage instruction</a>)',
                        },
                        {
                            type: 'textbox',
                            name: 'rec_start_time',
                            label: 'Start Recording At',
                            value: '',
                            placeholder: 'in hh:mm:ss e.g 00:01:00'
                        },
                        {
                            type: 'textbox',
                            name: 'rec_end_time',
                            label: 'End Recording At',
                            value: '',
                            placeholder: 'in hh:mm:ss e.g 00:40:00',
                        }],
                        onsubmit: function (v) {
                            var insert_string = "[zoom_recording play_url='" + v.data.rec_play_url + "' ";
                            insert_string += (v.data.rec_start_time ? ' start_time="' + v.data.rec_start_time + '"' : "");
                            insert_string += (v.data.rec_end_time ? ' end_time="' + v.data.rec_end_time + '"' : "");
                            insert_string += ']';
                            editor.insertContent(insert_string);
                        },
                    });
                }
            });
        },
        createControl: function (n, cm) {
            return null;
        }
    });
    
    // Add buttons
    tinymce.PluginManager.add('zvc_shortcode_button', tinymce.plugins.zvcShortcodes);
    tinymce.PluginManager.add('zvc_recording_shortcode_button', tinymce.plugins.zvcRecordingShortcodes);
    tinymce.PluginManager.add('zvc_any_recording_shortcode_button', tinymce.plugins.zvcAnyRecordingShortcodes);
});
