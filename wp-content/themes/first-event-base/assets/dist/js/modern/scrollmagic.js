new ScrollMagic.Scene({
  triggerElement: ".fade",
  triggerHook: 0.9,
  offset: 50,
  reverse: !1,
})
  .setClassToggle(".fade", "visible")
  .addIndicators()
  .addTo(controller);
