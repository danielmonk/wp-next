const { anime: e } = window;
export default (a) => {
  const t = a.querySelectorAll("h1, h2, a"),
    r = e({
      autoplay: !1,
      targets: t,
      translateY: { value: [100, 0], duration: 750 },
      opacity: { value: [0, 1], duration: 562.5 },
      easing: "easeOutQuart",
      delay: e.stagger(100),
    });
  return setTimeout(r.play, 1e3), r.finished;
};
