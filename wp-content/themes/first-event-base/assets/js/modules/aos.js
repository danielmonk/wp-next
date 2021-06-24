import $ from "jquery";
window.jQuery = $;
window.$ = $;
global.jQuery = $;
jQuery = $;
import AOS from "aos";
AOS.init({
  duration: 800,
  once: true,
  disable: 'mobile'
});

jQuery(document).ready(function(){
  jQuery(document).on('gform_confirmation_loaded', function(event, formId){
      console.log("refreshed");
      AOS.refresh();
  });
})
// hero section custom aos
/*
let heroWrapper = document.querySelector('.hero-section__content').children;
const listArray = Array.from(heroWrapper);
let delay = 0;

listArray.forEach((item) => {
    delay = delay + 200;
    item.setAttribute('data-aos', 'fade-right');
    item.setAttribute('data-aos-delay', delay);
    AOS.refresh();
});
*/
