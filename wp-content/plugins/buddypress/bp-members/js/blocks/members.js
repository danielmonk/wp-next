parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    LGpM: [
      function (require, module, exports) {
        function n(n, r) {
          (null == r || r > n.length) && (r = n.length);
          for (var e = 0, l = new Array(r); e < r; e++) l[e] = n[e];
          return l;
        }
        module.exports = n;
      },
      {},
    ],
    o3SL: [
      function (require, module, exports) {
        var r = require("./arrayLikeToArray");
        function a(a) {
          if (Array.isArray(a)) return r(a);
        }
        module.exports = a;
      },
      { "./arrayLikeToArray": "LGpM" },
    ],
    lZpU: [
      function (require, module, exports) {
        function e(e) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
            return Array.from(e);
        }
        module.exports = e;
      },
      {},
    ],
    Vzqv: [
      function (require, module, exports) {
        var r = require("./arrayLikeToArray");
        function t(t, e) {
          if (t) {
            if ("string" == typeof t) return r(t, e);
            var o = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === o && t.constructor && (o = t.constructor.name),
              "Map" === o || "Set" === o
                ? Array.from(o)
                : "Arguments" === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                ? r(t, e)
                : void 0
            );
          }
        }
        module.exports = t;
      },
      { "./arrayLikeToArray": "LGpM" },
    ],
    NCaH: [
      function (require, module, exports) {
        function e() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        module.exports = e;
      },
      {},
    ],
    I9dH: [
      function (require, module, exports) {
        var r = require("./arrayWithoutHoles"),
          e = require("./iterableToArray"),
          u = require("./unsupportedIterableToArray"),
          a = require("./nonIterableSpread");
        function o(o) {
          return r(o) || e(o) || u(o) || a();
        }
        module.exports = o;
      },
      {
        "./arrayWithoutHoles": "o3SL",
        "./iterableToArray": "lZpU",
        "./unsupportedIterableToArray": "Vzqv",
        "./nonIterableSpread": "NCaH",
      },
    ],
    dEOc: [
      function (require, module, exports) {
        function r(r) {
          if (Array.isArray(r)) return r;
        }
        module.exports = r;
      },
      {},
    ],
    RonT: [
      function (require, module, exports) {
        function r(r, t) {
          if ("undefined" != typeof Symbol && Symbol.iterator in Object(r)) {
            var e = [],
              n = !0,
              o = !1,
              l = void 0;
            try {
              for (
                var i, u = r[Symbol.iterator]();
                !(n = (i = u.next()).done) &&
                (e.push(i.value), !t || e.length !== t);
                n = !0
              );
            } catch (a) {
              (o = !0), (l = a);
            } finally {
              try {
                n || null == u.return || u.return();
              } finally {
                if (o) throw l;
              }
            }
            return e;
          }
        }
        module.exports = r;
      },
      {},
    ],
    sa4T: [
      function (require, module, exports) {
        function e() {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        module.exports = e;
      },
      {},
    ],
    xkYc: [
      function (require, module, exports) {
        var r = require("./arrayWithHoles"),
          e = require("./iterableToArrayLimit"),
          t = require("./unsupportedIterableToArray"),
          i = require("./nonIterableRest");
        function u(u, a) {
          return r(u) || e(u, a) || t(u, a) || i();
        }
        module.exports = u;
      },
      {
        "./arrayWithHoles": "dEOc",
        "./iterableToArrayLimit": "RonT",
        "./unsupportedIterableToArray": "Vzqv",
        "./nonIterableRest": "sa4T",
      },
    ],
    gr8I: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.EXTRA_DATA = exports.AVATAR_SIZES = void 0);
        var e = wp,
          s = e.i18n.__,
          l = [
            { label: s("None", "buddypress"), value: "none" },
            { label: s("Thumb", "buddypress"), value: "thumb" },
            { label: s("Full", "buddypress"), value: "full" },
          ];
        exports.AVATAR_SIZES = l;
        var t = [
          { label: s("None", "buddypress"), value: "none" },
          {
            label: s("Last time the user was active", "buddypress"),
            value: "last_activity",
          },
          {
            label: s("Latest activity the user posted", "buddypress"),
            value: "latest_update",
          },
        ];
        exports.EXTRA_DATA = t;
      },
      {},
    ],
    PZSE: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = a(require("@babel/runtime/helpers/toConsumableArray")),
          t = a(require("@babel/runtime/helpers/slicedToArray")),
          n = require("./constants");
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = wp,
          s = r.blockEditor,
          i = s.InspectorControls,
          l = s.BlockControls,
          o = r.components,
          u = o.Placeholder,
          d = o.PanelBody,
          c = o.SelectControl,
          m = o.ToggleControl,
          p = o.Button,
          b = o.Dashicon,
          y = o.Tooltip,
          h = o.ToolbarGroup,
          g = o.RangeControl,
          v = r.compose.compose,
          f = r.data.withSelect,
          _ = r.element,
          A = _.createElement,
          k = _.Fragment,
          S = _.useState,
          C = r.i18n,
          x = C.__,
          N = C.sprintf,
          T = r.apiFetch,
          D = r.url.addQueryArgs,
          I = bp.blockComponents.AutoCompleter,
          M = lodash,
          E = M.reject,
          P = M.remove,
          w = M.sortBy,
          q = function (e) {
            return e && e.mention_name ? e.mention_name : null;
          },
          B = function (a) {
            var r,
              s = a.attributes,
              o = a.setAttributes,
              v = a.isSelected,
              f = a.bpSettings,
              _ = f.isAvatarEnabled,
              C = f.isMentionEnabled,
              M = s.itemIDs,
              B = s.avatarSize,
              R = s.displayMentionSlug,
              O = s.displayUserName,
              j = s.extraData,
              z = s.layoutPreference,
              L = s.columns,
              F = 0 !== M.length,
              G = S([]),
              Q = (0, t.default)(G, 2),
              U = Q[0],
              V = Q[1],
              X = [
                {
                  icon: "text",
                  title: x("List view", "buddypress"),
                  onClick: function () {
                    return o({ layoutPreference: "list" });
                  },
                  isActive: "list" === z,
                },
                {
                  icon: "screenoptions",
                  title: x("Grid view", "buddypress"),
                  onClick: function () {
                    return o({ layoutPreference: "grid" });
                  },
                  isActive: "grid" === z,
                },
              ],
              H = "bp-block-members avatar-" + B,
              Z = n.EXTRA_DATA;
            "grid" === z &&
              ((H += " is-grid columns-" + L),
              (Z = n.EXTRA_DATA.filter(function (e) {
                return "latest_update" !== e.value;
              })));
            return (
              F &&
                M.length !== U.length &&
                T({
                  path: D("/buddypress/v1/members", {
                    populate_extras: !0,
                    include: M,
                  }),
                }).then(function (e) {
                  V(
                    w(e, [
                      function (e) {
                        return M.indexOf(e.id);
                      },
                    ])
                  );
                }),
              U.length &&
                (r = U.map(function (e) {
                  var t = !1,
                    n = "member-content";
                  return (
                    "list" === z &&
                      "latest_update" === j &&
                      e.latest_update &&
                      e.latest_update.rendered &&
                      ((t = !0), (n = "member-content has-activity")),
                    A(
                      "div",
                      { key: "bp-member-" + e.id, className: n },
                      v &&
                        A(
                          y,
                          { text: x("Remove member", "buddypress") },
                          A(
                            p,
                            {
                              className: "is-right",
                              onClick: function () {
                                var t;
                                (t = e.id) &&
                                  -1 !== M.indexOf(t) &&
                                  (V(E(U, ["id", t])),
                                  o({
                                    itemIDs: P(M, function (e) {
                                      return e !== t;
                                    }),
                                  }));
                              },
                              label: x("Remove member", "buddypress"),
                            },
                            A(b, { icon: "no" })
                          )
                        ),
                      _ &&
                        "none" !== B &&
                        A(
                          "div",
                          { className: "item-header-avatar" },
                          A(
                            "a",
                            { href: e.link, target: "_blank" },
                            A("img", {
                              key: "avatar-" + e.id,
                              className: "avatar",
                              alt: N(
                                x("Profile photo of %s", "buddypress"),
                                e.name
                              ),
                              src: e.avatar_urls[B],
                            })
                          )
                        ),
                      A(
                        "div",
                        { className: "member-description" },
                        t &&
                          A(
                            "blockquote",
                            { className: "wp-block-quote" },
                            A("div", {
                              dangerouslySetInnerHTML: {
                                __html: e.latest_update.rendered,
                              },
                            }),
                            A(
                              "cite",
                              null,
                              O && A("span", null, e.name),
                              " ",
                              C &&
                                R &&
                                A(
                                  "a",
                                  { href: e.link, target: "_blank" },
                                  "(@",
                                  e.mention_name,
                                  ")"
                                )
                            )
                          ),
                        !t &&
                          O &&
                          A(
                            "strong",
                            null,
                            A("a", { href: e.link, target: "_blank" }, e.name)
                          ),
                        !t &&
                          C &&
                          R &&
                          A(
                            "span",
                            { className: "user-nicename" },
                            "@",
                            e.mention_name
                          ),
                        "last_activity" === j &&
                          e.last_activity &&
                          e.last_activity.date &&
                          A(
                            "time",
                            { dateTime: e.last_activity.date },
                            N(
                              x("Active %s", "buddypress"),
                              e.last_activity.timediff
                            )
                          )
                      )
                    )
                  );
                })),
              A(
                k,
                null,
                A(
                  i,
                  null,
                  A(
                    d,
                    { title: x("Settings", "buddypress"), initialOpen: !0 },
                    A(m, {
                      label: x("Display the user name", "buddypress"),
                      checked: !!O,
                      onChange: function () {
                        o({ displayUserName: !O });
                      },
                      help: x(
                        O
                          ? "Include the user's display name."
                          : "Toggle to include user's display name.",
                        "buddypress"
                      ),
                    }),
                    C &&
                      A(m, {
                        label: x("Display Mention slug", "buddypress"),
                        checked: !!R,
                        onChange: function () {
                          o({ displayMentionSlug: !R });
                        },
                        help: x(
                          R
                            ? "Include the user's mention name under their display name."
                            : "Toggle to display the user's mention name under their display name.",
                          "buddypress"
                        ),
                      }),
                    _ &&
                      A(c, {
                        label: x("Avatar size", "buddypress"),
                        value: B,
                        options: n.AVATAR_SIZES,
                        help: x(
                          'Select "None" to disable the avatar.',
                          "buddypress"
                        ),
                        onChange: function (e) {
                          o({ avatarSize: e });
                        },
                      }),
                    A(c, {
                      label: x("BuddyPress extra information", "buddypress"),
                      value: j,
                      options: Z,
                      help: x(
                        'Select "None" to show no extra information.',
                        "buddypress"
                      ),
                      onChange: function (e) {
                        o({ extraData: e });
                      },
                    }),
                    "grid" === z &&
                      A(g, {
                        label: x("Columns", "buddypress"),
                        value: L,
                        onChange: function (e) {
                          return o({ columns: e });
                        },
                        min: 2,
                        max: 4,
                        required: !0,
                      })
                  )
                ),
                A(l, null, A(h, { controls: X })),
                F && A("div", { className: H }, r),
                (v || 0 === M.length) &&
                  A(
                    u,
                    {
                      icon: F ? "" : "groups",
                      label: F ? "" : x("BuddyPress Members", "buddypress"),
                      instructions: x(
                        "Start typing the name of the member you want to add to the members list.",
                        "buddypress"
                      ),
                      className: 0 !== M.length ? "is-appender" : "is-large",
                    },
                    A(I, {
                      component: "members",
                      objectQueryArgs: { exclude: M },
                      slugValue: q,
                      ariaLabel: x("Member's username", "buddypress"),
                      placeholder: x(
                        "Enter Member's username here…",
                        "buddypress"
                      ),
                      onSelectItem: function (t) {
                        var n = t.itemID;
                        n &&
                          -1 === M.indexOf(n) &&
                          o({
                            itemIDs: [].concat((0, e.default)(M), [
                              parseInt(n, 10),
                            ]),
                          });
                      },
                      useAvatar: _,
                    })
                  )
              )
            );
          },
          R = v([
            f(function (e) {
              return {
                bpSettings:
                  e("core/editor").getEditorSettings().bp.members || {},
              };
            }),
          ])(B),
          O = R;
        exports.default = O;
      },
      {
        "@babel/runtime/helpers/toConsumableArray": "I9dH",
        "@babel/runtime/helpers/slicedToArray": "xkYc",
        "./constants": "gr8I",
      },
    ],
    XEHU: [
      function (require, module, exports) {
        "use strict";
        var e = t(require("./members/edit"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = wp,
          s = r.blocks.registerBlockType,
          a = r.i18n.__;
        s("bp/members", {
          title: a("Members", "buddypress"),
          description: a("BuddyPress Members.", "buddypress"),
          icon: "groups",
          category: "buddypress",
          attributes: {
            itemIDs: { type: "array", items: { type: "integer" }, default: [] },
            avatarSize: { type: "string", default: "full" },
            displayMentionSlug: { type: "boolean", default: !0 },
            displayUserName: { type: "boolean", default: !0 },
            extraData: { type: "string", default: "none" },
            layoutPreference: { type: "string", default: "list" },
            columns: { type: "number", default: 2 },
          },
          edit: e.default,
        });
      },
      { "./members/edit": "PZSE" },
    ],
  },
  {},
  ["XEHU"],
  null
);
//# sourceMappingURL=/bp-members/js/blocks/members.js.map
