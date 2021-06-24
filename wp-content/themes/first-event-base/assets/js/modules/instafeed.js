import Instafeed from "../vendor/instafeed.min";
let instaWrapper = document.getElementById('instafeed');
let glideWrapper = document.querySelector(".glide--insta");
import Glide from "@glidejs/glide";

// run insta feed if div exists
if(instaWrapper){
    var feed = new Instafeed({
        accessToken: InstagramToken,
        //limit: 8,
        template: '<a target="_blank" class="glide__slide" href="{{link}}"><img title="{{caption}}" src="{{image}}" /><div class="insta-overlay"><p>@firsteventuk</p></div></a>',
        after: function() {
            if (glideWrapper) {

            let itemCount = 0;
            var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
            if (viewportWidth >= 768) {
                itemCount = 3;
            } else {
                itemCount = 1;
            }

            var glide = new Glide(".glide--insta", {
                gap: 30,
                autoplay: 4000,
                perView: itemCount,
                type: 'carousel'
            });
            glide.mount();
            } else {}
        }
    });
    feed.run();
}


