!(function (t) {
  var e = {};
  function n(i) {
    if (e[i]) return e[i].exports;
    var o = (e[i] = { i: i, l: !1, exports: {} });
    return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, i) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            i,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return i;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 9));
})({
  9: function (t, e, n) {
    "use strict";
    var i =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          };
    !(function (t) {
      var e = inlineEditPost.edit;
      inlineEditPost.edit = function (n) {
        e.apply(this, arguments);
        var o = 0;
        if (
          ("object" == (void 0 === n ? "undefined" : i(n)) &&
            (o = parseInt(this.getId(n))),
          o > 0)
        ) {
          var r = t("#edit-" + o),
            u = t("#post-" + o),
            l =
              1 !==
              t(".duplicate_post_original_item span", u).data("noOriginal"),
            a = t(".duplicate_post_original_item span", u).html(),
            p =
              1 ===
              t(".duplicate_post_original_item span", u).data(
                "copyIsForRewriteAndRepublish"
              );
          l && !p
            ? (t(".duplicate_post_original_item_title_span", r).html(a),
              t("#duplicate_post_quick_edit_fieldset", r).show())
            : (t("#duplicate_post_quick_edit_fieldset", r).hide(),
              t(".duplicate_post_original_item_title_span", r).html(""));
        }
      };
    })(jQuery);
  },
});
