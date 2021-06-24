import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;
jQuery = $;

import Barba from "barba.js";
import Glide, { Breakpoints } from "@glidejs/glide";
import Masonry from "masonry-layout/masonry";
import AOS from "aos";
import Instafeed from "../vendor/instafeed.min";
import Modal from '../modules/Modal';
import Tabbed from '../modules/Tabbed';

let barbaWrapper = document.getElementById('barba-wrapper');

if(barbaWrapper){
    Barba.Dispatcher.on(
    "newPageReady",
    function (currentStatus, oldStatus, container, newPageRawHTML) {
        var response = newPageRawHTML.replace(
        /(<\/?)body( .+?)?>/gi,
        "$1notbody$2>",
        newPageRawHTML
        );
        var bodyClasses = $(response).filter("notbody").attr("class");
        $("body").attr("class", bodyClasses);
    }
    );

    var FadeTransition = Barba.BaseTransition.extend({
    start: function () {
        /**
         * This function is automatically called as soon the Transition starts
         * this.newContainerLoading is a Promise for the loading of the new container
         * (Barba.js also comes with an handy Promise polyfill!)
         */
        // As soon the loading is finished and the old page is faded out, let's fade the new page
        Promise.all([this.newContainerLoading, this.fadeOut()]).then(
        this.fadeIn.bind(this)
        );
    },
    fadeOut: function () {
        /**
         * this.oldContainer is the HTMLElement of the old Container
         */
        return $(this.oldContainer).animate({ opacity: 0 }).promise();
    },
    fadeIn: function () {
        /**
         * this.newContainer is the HTMLElement of the new Container
         * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
         * Please note, newContainer is available just after newContainerLoading is resolved!
         */
        var _this = this;
        var $el = $(this.newContainer);
        $(this.oldContainer).hide();
        $el.css({
        visibility: "visible",
        opacity: 0,
        });
        $el.animate({ opacity: 1 }, 400, function () {
        /**
         * Do not forget to call .done() as soon your transition is finished!
         * .done() will automatically remove from the DOM the old Container
         */
        _this.done();
        });
    },
    });
    /**
     * Next step, you have to tell Barba to use the new Transition
     */
    Barba.Pjax.getTransition = function () {
    /**
     * Here you can use your own logic!
     * For example you can use different Transition based on the current page or link...
     */
    return FadeTransition;
    };

    Barba.Pjax.start();

    Barba.Dispatcher.on("transitionCompleted", function () {
        var grid = document.querySelector('.info-boxes.masonry .info-boxes__repeater');

        if(grid){
            var msnry = new Masonry( grid, {
            // options...
            itemSelector: '.info-box',
            gutter: 30,
            horizontalOrder: true,
        
            });
        } else {}

        AOS.refresh();
          
        let instaWrapper = document.getElementById('instafeed');
        let glideWrapper = document.querySelector(".glide--insta"); 
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

        //console.log("Active");
        $('.accordion__title').click(function() {	
            //console.log("clicked") ;
            if ($(this).parent().is('.open')){
                $(this).closest('.accordion__single').find('.accordion__content').slideToggle();
                $(this).closest('.accordion__single').removeClass('open');
            }
            else{
                var newHeight =$(this).closest('.accordion__single').find('.accordion__content').height() +'px';
                $(this).closest('.accordion__single').find('.accordion__content').slideToggle();
                $(this).closest('.accordion__single').addClass('open');
        }	 
        });

        new Modal();
        new Tabbed();


    });

    let noButton = document.getElementsByClassName('no-button');
    for(let i = 0; i < noButton.length; i++) {
        noButton[i].addEventListener("click", (e) => {
            e.preventDefault();
    
            var url = $(this).attr("href");

            Barba.Pjax.goTo(url);
        })
    };
}
