function websdkready() { 
    function zoom_wp_redirect_to_meeting_page() {
        var redirect_url = new URL(window.top.location.href);
        redirect_url.searchParams.set('leave', 1);
        window.top.location.href = encodeURI(redirect_url.href);
    }

    /*!
     * Sanitize and encode all HTML in a user-submitted string
     * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
     * @param  {String} str  The user-submitted string
     * @return {String} str  The sanitized string
     */
    var sanitizeHTML = function (str) {
        var temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    };
    
    if (!zvc_array.apiKey) {
        // user is unable to join the meeting take them back to meeting form or countdown
        if (sessionStorage.getItem('join_error')) {
            var redirect_url = new URL(window.top.location.href);
            window.top.location.href = encodeURI(redirect_url.href);
        } else {
            if (zvc_array.ld_bind) {
                setTimeout(function () {
                    zoom_wp_redirect_to_meeting_page();
                }, 3000);
            } else {
                // user has left or meeting ended and opted for page redirect
                if ( 0 != zvc_array.thankyou_redirect ) {
                    window.top.location.href = zvc_array.thankyou_redirect;
                    return;
                }
                
                // user has left or meeting ended so show thank you message
                var thankyou_msg = window.parent.document.getElementsByClassName('zoom-thankyou-msg');
                if (thankyou_msg.length != 0) {
                    var back_meeting = window.parent.document.getElementsByClassName('back-to-zoom-meeting');
                    if (back_meeting.length != 0) {
                        back_meeting[0].style.display = 'inline-block';
                    }
                    var iframe = window.parent.document.getElementsByClassName('zoom-iframe-container');
                    if (iframe.length != 0) {
                        iframe[0].parentNode.replaceChild(thankyou_msg[0], iframe[0]);
                        thankyou_msg[0].style.display = 'block';
                    }
                }
            }
        }
        return;
    }
    
    var testTool = window.testTool;

    var meetingConfig = {
        apiKey: zvc_array.apiKey,
        meetingNumber: parseInt(zvc_array.mn),
        userEmail: (function () {
            if (zvc_array.email) {
                try {
                    return testTool.b64DecodeUnicode(zvc_array.email);
                } catch (e) {
                    return zvc_array.email;
                }
            }
        })(),
        userName: (function () {
            if (zvc_array.name) {
                try {
                    return testTool.b64DecodeUnicode(zvc_array.name);
                } catch (e) {
                    return zvc_array.name;
                }
            }
        })(),
        passWord: zvc_array.pwd,
        leaveUrl: zvc_array.site_url + '?zoom_wp_action=render_zoom_meeting&exit_meeting=1&zvc_security=' + sanitizeHTML(zvc_array.zvc_security) + '&mn=' + sanitizeHTML(zvc_array.mn) + '&ld_bind=' + sanitizeHTML(zvc_array.ld_bind) + '&thankyou_redirect=' + sanitizeHTML(zvc_array.thankyou_redirect),
        userEmail: (function () {
            try {
                return testTool.b64DecodeUnicode(zvc_array.email);
            } catch (e) {
                return zvc_array.email;
            }
        })(),
        lang: zvc_array.lang,
        signature: zvc_array.signature || "",
        china: zvc_array.china === "1",
        isWebinar: zvc_array.is_webinar == 1,
    };

    ZoomMtg.preLoadWasm();
    ZoomMtg.prepareWebSDK();
    
    function beginJoin(signature) {
        ZoomMtg.init({
            leaveUrl: meetingConfig.leaveUrl,
            disableInvite: true,
            meetingInfo: [
                'topic',
                'host',
                'participant',
                'dc'
            ],
            success: function () {
                if (meetingConfig.apiKey) {
                    ZoomMtg.i18n.load(meetingConfig.lang);
                    ZoomMtg.i18n.reload(meetingConfig.lang);
                
                    ZoomMtg.join({
                        meetingNumber: meetingConfig.meetingNumber,
                        userName: meetingConfig.userName,
                        signature: signature,
                        apiKey: meetingConfig.apiKey,
                        userEmail: meetingConfig.userEmail,
                        passWord: meetingConfig.passWord,
                        success: function (res) {
                            sessionStorage.removeItem('join_error');
                            ZoomMtg.showInviteFunction({
                                show: false
                            });
                            ZoomMtg.getAttendeeslist({
                            });
                            ZoomMtg.getCurrentUser({
                                success: function (res) {
                                },
                            });
                        },
                        error: function (res) {
                            console.table(res);
                            // Set session storage in browser to signal user not able to join meeting
                            sessionStorage.setItem('join_error', '1');
                        },
                    });
                }
            },
            error: function (res) {
                console.table(res);
            },
        });

        ZoomMtg.inMeetingServiceListener('onUserJoin', function (data) {
        });

        ZoomMtg.inMeetingServiceListener('onUserLeave', function (data) {
        });

        ZoomMtg.inMeetingServiceListener('onUserIsInWaitingRoom', function (data) {
        });

        ZoomMtg.inMeetingServiceListener('onMeetingStatus', function (data) {
        });
    }
   
    beginJoin(meetingConfig.signature);
}

websdkready();