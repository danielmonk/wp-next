!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 10));
})({
  10: function (e, t, n) {
    "use strict";
    var r = void 0,
      o = void 0,
      i = 35,
      u = 36,
      a = 37,
      c = 38,
      d = 39,
      l = 40,
      s = { 37: -1, 38: -1, 39: 1, 40: 1 };
    function f(e) {
      r[e].addEventListener("click", function (e) {
        v(e.target, !1);
      }),
        r[e].addEventListener("keydown", function (e) {
          switch (e.keyCode) {
            case i:
              e.preventDefault(), v(r[r.length - 1]);
              break;
            case u:
              e.preventDefault(), v(r[0]);
          }
        }),
        r[e].addEventListener("keyup", function (e) {
          switch (e.keyCode) {
            case a:
            case d:
              !(function (e) {
                for (var t = e.keyCode, n = 0; n < r.length; n++)
                  r[n].addEventListener("focus", p);
                if (s[t]) {
                  var o = e.target;
                  void 0 !== o.index &&
                    (r[o.index + s[t]]
                      ? r[o.index + s[t]].focus()
                      : t === a || t === c
                      ? r[r.length - 1].focus()
                      : (t !== d && t !== l) || r[0].focus());
                }
              })(e);
          }
        }),
        (r[e].index = e);
    }
    function v(e, t) {
      (t = t || !0),
        (function () {
          for (var e = 0; e < r.length; e++)
            r[e].setAttribute("tabindex", "-1"),
              r[e].setAttribute("aria-selected", "false"),
              r[e].classList.remove("nav-tab-active"),
              r[e].removeEventListener("focus", p);
          for (var t = 0; t < o.length; t++)
            o[t].setAttribute("hidden", "hidden");
        })(),
        e.removeAttribute("tabindex"),
        e.setAttribute("aria-selected", "true"),
        e.classList.add("nav-tab-active");
      var n = e.getAttribute("aria-controls");
      document.getElementById(n).removeAttribute("hidden"), t && e.focus();
    }
    function p(e) {
      !(function (e) {
        var t = document.activeElement;
        e === t && v(e, !1);
      })(e.target);
    }
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(
        '#duplicate_post_settings_form [role="tablist"]'
      )[0],
        (r = document.querySelectorAll(
          '#duplicate_post_settings_form [role="tab"]'
        )),
        (o = document.querySelectorAll(
          '#duplicate_post_settings_form [role="tabpanel"]'
        ));
      for (var e = 0; e < r.length; ++e) f(e);
    }),
      jQuery(function () {
        jQuery(".taxonomy_private").hide(),
          jQuery(".toggle-private-taxonomies").on("click", function () {
            var e = jQuery(this);
            jQuery(".taxonomy_private").toggle(300, function () {
              e.attr("aria-expanded", jQuery(this).is(":visible"));
            });
          });
      });
  },
});
