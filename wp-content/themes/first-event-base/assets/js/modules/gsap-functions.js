
    
    gsap.registerPlugin(gsap, DrawSVGPlugin);

    let moduleFunction = function() {
        
        'use strict';

        var tl = new TimelineMax();

        // gsap.from(".line", { duration: 3, drawSVG: 0, ease: "none" });
        // gsap.from(".icon path", { duration: 3, drawSVG: 100, ease: "none" });

        // tl.fromTo(".line", 3, { fill:"none" }, { delay: 3.5,  fill:"#fff" });
        // tl.fromTo(".icon path", 3, { fill:"none" }, {  fill:"#fff" });
        
        gsap.from(".social-line", { duration: 5, drawSVG: 0, ease: "none" });
        tl.fromTo(".social-line", 3, { fill:"none" }, {delay: 4,  fill:"#263448" });
        // gsap.from(".social-line", { duration: 3, drawSVG: 100, ease: "none" });
    }

    moduleFunction();