import e from"jquery";window.jQuery=e,window.$=e,global.jQuery=e,jQuery=e;import t from"barba.js";import n,{Breakpoints as o}from"@glidejs/glide";import i from"masonry-layout/masonry";import a from"aos";import r from"../vendor/instafeed.min";import s from"../modules/Modal";import l from"../modules/Tabbed";let c=document.getElementById("barba-wrapper");if(c){t.Dispatcher.on("newPageReady",(function(t,n,o,i){var a=i.replace(/(<\/?)body( .+?)?>/gi,"$1notbody$2>",i),r=e(a).filter("notbody").attr("class");e("body").attr("class",r)}));var d=t.BaseTransition.extend({start:function(){Promise.all([this.newContainerLoading,this.fadeOut()]).then(this.fadeIn.bind(this))},fadeOut:function(){return e(this.oldContainer).animate({opacity:0}).promise()},fadeIn:function(){var t=this,n=e(this.newContainer);e(this.oldContainer).hide(),n.css({visibility:"visible",opacity:0}),n.animate({opacity:1},400,(function(){t.done()}))}});t.Pjax.getTransition=function(){return d},t.Pjax.start(),t.Dispatcher.on("transitionCompleted",(function(){var t=document.querySelector(".info-boxes.masonry .info-boxes__repeater");if(t)new i(t,{itemSelector:".info-box",gutter:30,horizontalOrder:!0});a.refresh();let o=document.getElementById("instafeed"),c=document.querySelector(".glide--insta");o&&new r({accessToken:InstagramToken,template:'<a target="_blank" class="glide__slide" href="{{link}}"><img title="{{caption}}" src="{{image}}" /><div class="insta-overlay"><p>@firsteventuk</p></div></a>',after:function(){if(c){let e=0;e=(window.innerWidth||document.documentElement.clientWidth)>=768?3:1,new n(".glide--insta",{gap:30,autoplay:4e3,perView:e,type:"carousel"}).mount()}}}).run();e(".accordion__title").click((function(){if(e(this).parent().is(".open"))e(this).closest(".accordion__single").find(".accordion__content").slideToggle(),e(this).closest(".accordion__single").removeClass("open");else{e(this).closest(".accordion__single").find(".accordion__content").height();e(this).closest(".accordion__single").find(".accordion__content").slideToggle(),e(this).closest(".accordion__single").addClass("open")}})),new s,new l}));let o=document.getElementsByClassName("no-button");for(let n=0;n<o.length;n++)o[n].addEventListener("click",(n=>{n.preventDefault();var o=e(this).attr("href");t.Pjax.goTo(o)}))}