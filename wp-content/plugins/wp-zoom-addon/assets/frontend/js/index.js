function websdkready() {
    var testTool = window.testTool;
    const meetingConfig = {};
    meetingConfig.name = testTool.b64EncodeUnicode(zvc_array.display_name);
    meetingConfig.mn = zvc_array.meeting_number;
    meetingConfig.pwd = zvc_array.meeting_pwd;
    meetingConfig.email = testTool.b64EncodeUnicode(zvc_array.user_email);
    meetingConfig.signature = zvc_array.signature;
    meetingConfig.apiKey = zvc_array.zoom_api_key;
    meetingConfig.is_webinar = zvc_array.is_webinar;
    meetingConfig.zvc_security = zvc_array.zvc_security;
    meetingConfig.lang = zvc_array.lang;
    meetingConfig.ld_bind = zvc_array.is_ld_bind;
    meetingConfig.thankyou_redirect = zvc_array.thankyou_redirect;
    
    const joinUrl =
        zvc_array.meeting_path +
        testTool.serialize(meetingConfig);
    var zoomIframe = testTool.createZoomNode("websdk-iframe", joinUrl);

    var sandbox_attributes = zoomIframe.sandbox;
    sandbox_attributes += " allow-top-navigation";
    zoomIframe.sandbox = sandbox_attributes;
    zoomIframe.setAttribute('scrolling', 'yes');

    const iframe_container = document.getElementsByClassName("zoom-iframe-container");
    Array.prototype.forEach.call(iframe_container, function (el) {
        el.appendChild(zoomIframe);
    });
}

websdkready();

// Scroll to Zoom window after page load
if (1 != zvc_array.no_scroll_window) {
    window.addEventListener("load", function () {
        const iframe_container = document.getElementsByClassName("zoom-iframe-container");
        if (iframe_container[0].length != 0) {
            iframe_container[0].scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    });
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