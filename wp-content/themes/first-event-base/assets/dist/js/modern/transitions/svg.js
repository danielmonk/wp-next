const { anime: e } = window;
export default (a, t) => {
  const i = a.querySelector(".shape"),
    s = i.querySelector("path"),
    u = e({
      targets: i,
      scaleY: [
        { value: [1, 1.8], duration: 0.5 * t, easing: "easeInQuad" },
        { value: 1, duration: 0.5 * t, easing: "easeOutQuad" },
      ],
    }),
    n = e({
      targets: s,
      duration: t,
      easing: "easeOutQuad",
      d: s.getAttribute("pathdata:id"),
    });
  return Promise.all([u.finished, n.finished]);
};
