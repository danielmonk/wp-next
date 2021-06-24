! function () {
    var zoom_videos = document.getElementsByClassName("zoom-recording");

    for (var i = 0; i < zoom_videos.length; i++) {
        var video = zoom_videos[i];
        if (video.currentSrc) {
            video.addEventListener("timeupdate", function () {
                var vid_time = this.currentSrc.split('#t=')[1].split(',');

                if (vid_time[0]) {
                    var st = vid_time[0].split(':');
                    vid_time[0] = (+st[0]) * 60 * 60 + (+st[1]) * 60 + (+st[2]);
                }

                if (vid_time[1]) {
                    var et = vid_time[1].split(':');
                    vid_time[1] = (+et[0]) * 60 * 60 + (+et[1]) * 60 + (+et[2]);
                }

                if (vid_time[0] && this.currentTime < vid_time[0]) {
                    this.currentTime = vid_time[0];
                }

                if (vid_time[1] && this.currentTime > vid_time[1]) {
                    this.currentTime = vid_time[1];
                    this.pause();
                }
            });
        }
    }
}();