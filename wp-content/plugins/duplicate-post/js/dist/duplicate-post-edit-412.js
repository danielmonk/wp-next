!(function (e) {
  var t = {};
  function r(i) {
    if (t[i]) return t[i].exports;
    var n = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, i) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (r.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          r.d(
            i,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return i;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 5));
})([
  function (e, t) {
    e.exports = window.wp.data;
  },
  function (e, t) {
    e.exports = window.wp.element;
  },
  function (e, t) {
    e.exports = window.wp.components;
  },
  function (e, t) {
    e.exports = window.wp.i18n;
  },
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      (t.redirectOnSaveCompletion = void 0);
    var i = r(0),
      n = function (e) {
        var t = (0, i.select)("core/editor").getCurrentPostAttribute("status"),
          r = (0, i.select)("core/editor").getEditedPostAttribute("status");
        "dp-rewrite-republish" === t &&
          "publish" === r &&
          (0, i.dispatch)("core/editor").editPost({ status: t }),
          window.location.assign(e);
      };
    t.redirectOnSaveCompletion = function (e, t) {
      var r = (0, i.select)("core/editor").isSavingPost(),
        o = (0, i.select)("core/editor").isAutosavingPost(),
        s = (0, i.select)("core/edit-post").hasMetaBoxes(),
        a = (0, i.select)("core/edit-post").isSavingMetaBoxes();
      return (
        s && !a && t.wasSavingMetaboxes && n(e),
        s || r || !t.wasSavingPost || t.wasAutoSavingPost || n(e),
        { isSavingPost: r, isSavingMetaBoxes: a, isAutosavingPost: o }
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var i = function (e, t) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e))
          return (function (e, t) {
            var r = [],
              i = !0,
              n = !1,
              o = void 0;
            try {
              for (
                var s, a = e[Symbol.iterator]();
                !(i = (s = a.next()).done) &&
                (r.push(s.value), !t || r.length !== t);
                i = !0
              );
            } catch (e) {
              (n = !0), (o = e);
            } finally {
              try {
                !i && a.return && a.return();
              } finally {
                if (n) throw o;
              }
            }
            return r;
          })(e, t);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      },
      n = (function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t;
        };
      })(),
      o = r(6),
      s = r(7),
      a = r(1),
      u = r(2),
      l = r(3),
      c = r(0),
      d = r(4);
    var p = new ((function () {
      function e() {
        !(function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        })(this, e),
          this.renderNotices(),
          this.removeSlugSidebarPanel();
      }
      return (
        n(e, [
          {
            key: "handleRedirect",
            value: function () {
              var e = this;
              if (parseInt(duplicatePost.rewriting, 10)) {
                var t = !1,
                  r = !1,
                  i = !1;
                (0, c.subscribe)(function () {
                  if (
                    e.isSafeRedirectURL(duplicatePost.originalEditURL) &&
                    e.isCopyAllowedToBeRepublished()
                  ) {
                    var n = (0,
                    d.redirectOnSaveCompletion)(duplicatePost.originalEditURL, {
                      wasSavingPost: t,
                      wasSavingMetaboxes: r,
                      wasAutoSavingPost: i,
                    });
                    (t = n.isSavingPost),
                      (r = n.isSavingMetaBoxes),
                      (i = n.isAutosavingPost);
                  }
                });
              }
            },
          },
          {
            key: "isSafeRedirectURL",
            value: function (e) {
              var t = document.createElement("a");
              return (
                (t.href = e),
                !!(
                  /^https?:$/.test(t.protocol) &&
                  /\/wp-admin\/post\.php$/.test(t.pathname) &&
                  /\?action=edit&post=[0-9]+&dprepublished=1&dpcopy=[0-9]+&dpnonce=[a-z0-9]+/i.test(
                    t.search
                  )
                )
              );
            },
          },
          {
            key: "isCopyAllowedToBeRepublished",
            value: function () {
              var e = (0, c.select)("core/editor").getCurrentPostAttribute(
                "status"
              );
              return "dp-rewrite-republish" === e || "private" === e;
            },
          },
          {
            key: "renderNotices",
            value: function () {
              if (
                duplicatePostNotices &&
                duplicatePostNotices instanceof Object
              ) {
                var e = !0,
                  t = !1,
                  r = void 0;
                try {
                  for (
                    var n,
                      o = Object.entries(duplicatePostNotices)[
                        Symbol.iterator
                      ]();
                    !(e = (n = o.next()).done);
                    e = !0
                  ) {
                    var s = n.value,
                      a = i(s, 2),
                      u = (a[0], a[1]),
                      l = JSON.parse(u);
                    l.status &&
                      l.text &&
                      (0, c.dispatch)("core/notices").createNotice(
                        l.status,
                        l.text,
                        { isDismissible: l.isDismissible || !0 }
                      );
                  }
                } catch (e) {
                  (t = !0), (r = e);
                } finally {
                  try {
                    !e && o.return && o.return();
                  } finally {
                    if (t) throw r;
                  }
                }
              }
            },
          },
          {
            key: "removeSlugSidebarPanel",
            value: function () {
              parseInt(duplicatePost.rewriting, 10) &&
                (0, c.dispatch)("core/edit-post").removeEditorPanel(
                  "post-link"
                );
            },
          },
          {
            key: "render",
            value: function () {
              var e = (0, c.select)("core/editor").getEditedPostAttribute(
                "status"
              );
              return (
                "1" === duplicatePost.showLinksIn.submitbox &&
                wp.element.createElement(
                  a.Fragment,
                  null,
                  "" !== duplicatePost.newDraftLink &&
                    "1" === duplicatePost.showLinks.new_draft &&
                    wp.element.createElement(
                      s.PluginPostStatusInfo,
                      null,
                      wp.element.createElement(
                        u.Button,
                        {
                          isTertiary: !0,
                          className: "dp-editor-post-copy-to-draft",
                          href: duplicatePost.newDraftLink,
                        },
                        (0, l.__)("Copy to a new draft", "duplicate-post")
                      )
                    ),
                  "publish" === e &&
                    "" !== duplicatePost.rewriteAndRepublishLink &&
                    "1" === duplicatePost.showLinks.rewrite_republish &&
                    wp.element.createElement(
                      s.PluginPostStatusInfo,
                      null,
                      wp.element.createElement(
                        u.Button,
                        {
                          isTertiary: !0,
                          className: "dp-editor-post-rewrite-republish",
                          href: duplicatePost.rewriteAndRepublishLink,
                        },
                        (0, l.__)("Rewrite & Republish", "duplicate-post")
                      )
                    )
                )
              );
            },
          },
        ]),
        e
      );
    })())();
    p.handleRedirect(),
      (0, o.registerPlugin)("duplicate-post", { render: p.render });
  },
  function (e, t) {
    e.exports = window.wp.plugins;
  },
  function (e, t) {
    e.exports = window.wp.editPost;
  },
]);