import Glide from "@glidejs/glide";

let glideWrapper = document.querySelector(".glide");

if (glideWrapper) {
  var glide = new Glide(".glide", {
    gap: 50,
    autoplay: 4000,
    type: 'carousel'
  });

  glide.mount();
} else {
}
