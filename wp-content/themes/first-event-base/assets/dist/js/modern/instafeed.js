import e from"../vendor/instafeed.min";let t=document.getElementById("instafeed"),i=document.querySelector(".glide--insta");import n from"@glidejs/glide";if(t){var a=new e({accessToken:InstagramToken,template:'<a target="_blank" class="glide__slide" href="{{link}}"><img title="{{caption}}" src="{{image}}" /><div class="insta-overlay"><p>@firsteventuk</p></div></a>',after:function(){if(i){let e=0;e=(window.innerWidth||document.documentElement.clientWidth)>=768?3:1,new n(".glide--insta",{gap:30,autoplay:4e3,perView:e,type:"carousel"}).mount()}}});a.run()}