gsap.registerPlugin(gsap,DrawSVGPlugin);let e=function(){"use strict";var e=new TimelineMax;gsap.from(".social-line",{duration:5,drawSVG:0,ease:"none"}),e.fromTo(".social-line",3,{fill:"none"},{delay:4,fill:"#263448"})};e();