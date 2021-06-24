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
    atl5: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.GROUP_STATI = exports.AVATAR_SIZES = void 0);
        var e = wp,
          s = e.i18n.__,
          d = [
            { label: s("None", "buddypress"), value: "none" },
            { label: s("Thumb", "buddypress"), value: "thumb" },
            { label: s("Full", "buddypress"), value: "full" },
          ];
        exports.AVATAR_SIZES = d;
        var r = {
          public: s("Public", "buddypress"),
          private: s("Private", "buddypress"),
          hidden: s("Hidden", "buddypress"),
        };
        exports.GROUP_STATI = r;
      },
      {},
    ],
    cCC3: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("./constants"),
          t = wp,
          o = t.blockEditor,
          r = o.InspectorControls,
          n = o.BlockControls,
          s = t.components,
          a = s.Placeholder,
          i = s.Disabled,
          l = s.PanelBody,
          u = s.SelectControl,
          d = s.ToggleControl,
          p = s.Toolbar,
          c = s.ToolbarButton,
          g = t.compose.compose,
          b = t.data.withSelect,
          h = t.editor.ServerSideRender,
          y = t.element,
          m = y.Fragment,
          v = y.createElement,
          S = t.i18n.__,
          C = bp.blockComponents.AutoCompleter,
          I = function (t) {
            return t && t.status && e.GROUP_STATI[t.status]
              ? e.GROUP_STATI[t.status]
              : null;
          },
          f = function (t) {
            var o = t.attributes,
              s = t.setAttributes,
              g = t.bpSettings,
              b = g.isAvatarEnabled,
              y = g.isCoverImageEnabled,
              f = o.avatarSize,
              A = o.displayDescription,
              T = o.displayActionButton,
              k = o.displayCoverImage;
            return o.itemID
              ? v(
                  m,
                  null,
                  v(
                    n,
                    null,
                    v(
                      p,
                      null,
                      v(c, {
                        icon: "edit",
                        title: S("Select another group", "buddypress"),
                        onClick: function () {
                          s({ itemID: 0 });
                        },
                      })
                    )
                  ),
                  v(
                    r,
                    null,
                    v(
                      l,
                      { title: S("Settings", "buddypress"), initialOpen: !0 },
                      v(d, {
                        label: S("Display Group's home button", "buddypress"),
                        checked: !!T,
                        onChange: function () {
                          s({ displayActionButton: !T });
                        },
                        help: S(
                          T
                            ? "Include a link to the group's home page under their name."
                            : "Toggle to display a link to the group's home page under their name.",
                          "buddypress"
                        ),
                      }),
                      v(d, {
                        label: S("Display group's description", "buddypress"),
                        checked: !!A,
                        onChange: function () {
                          s({ displayDescription: !A });
                        },
                        help: S(
                          A
                            ? "Include the group's description under their name."
                            : "Toggle to display the group's description under their name.",
                          "buddypress"
                        ),
                      }),
                      b &&
                        v(u, {
                          label: S("Avatar size", "buddypress"),
                          value: f,
                          options: e.AVATAR_SIZES,
                          help: S(
                            'Select "None" to disable the avatar.',
                            "buddypress"
                          ),
                          onChange: function (e) {
                            s({ avatarSize: e });
                          },
                        }),
                      y &&
                        v(d, {
                          label: S("Display Cover Image", "buddypress"),
                          checked: !!k,
                          onChange: function () {
                            s({ displayCoverImage: !k });
                          },
                          help: S(
                            k
                              ? "Include the group's cover image over their name."
                              : "Toggle to display the group's cover image over their name.",
                            "buddypress"
                          ),
                        })
                    )
                  ),
                  v(i, null, v(h, { block: "bp/group", attributes: o }))
                )
              : v(
                  a,
                  {
                    icon: "buddicons-groups",
                    label: S("BuddyPress Group", "buddypress"),
                    instructions: S(
                      "Start typing the name of the group you want to feature into this post.",
                      "buddypress"
                    ),
                  },
                  v(C, {
                    component: "groups",
                    objectQueryArgs: { show_hidden: !1 },
                    slugValue: I,
                    ariaLabel: S("Group's name", "buddypress"),
                    placeholder: S("Enter Group's name here…", "buddypress"),
                    onSelectItem: s,
                    useAvatar: b,
                  })
                );
          },
          A = g([
            b(function (e) {
              return {
                bpSettings:
                  e("core/editor").getEditorSettings().bp.groups || {},
              };
            }),
          ])(f),
          T = A;
        exports.default = T;
      },
      { "./constants": "atl5" },
    ],
    pvse: [
      function (require, module, exports) {
        "use strict";
        var e = t(require("./group/edit"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = wp,
          u = r.blocks.registerBlockType,
          d = r.i18n.__;
        u("bp/group", {
          title: d("Group", "buddypress"),
          description: d("BuddyPress Group.", "buddypress"),
          icon: "buddicons-groups",
          category: "buddypress",
          attributes: {
            itemID: { type: "integer", default: 0 },
            avatarSize: { type: "string", default: "full" },
            displayDescription: { type: "boolean", default: !0 },
            displayActionButton: { type: "boolean", default: !0 },
            displayCoverImage: { type: "boolean", default: !0 },
          },
          edit: e.default,
        });
      },
      { "./group/edit": "cCC3" },
    ],
  },
  {},
  ["pvse"],
  null
);
//# sourceMappingURL=/bp-groups/js/blocks/group.js.map
