! function (t) {
    // Redirect to No cache version of the page
    t(document).ready(function () {
        var redirect_url = new URL(window.location.href);
        if (!redirect_url.searchParams.get('nocache')) {
            t('.zoom-window-wrap .loader, .zoom-meeting-countdown .loader').show();
            redirect_url.searchParams.set('nocache', new Date().valueOf() + Math.floor(Math.random() * 1e9));
            window.location.replace(redirect_url.href);
        } else {
            t('.zoom-window-wrap .loader, .zoom-meeting-countdown .loader').hide();
        }
    });
}(jQuery);