export default (e, t, a, n) => {
  e.style.transform = `translateY(${a}%)`;
  const r = `${n}%`,
    s = anime.timeline({ easing: "easeInOutSine", duration: t });
  return s.add({ targets: e, translateY: r }), s.finished;
};
