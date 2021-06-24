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
    AE3e: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.AVATAR_SIZES = void 0);
        var e = wp,
          l = e.i18n.__,
          u = [
            { label: l("None", "buddypress"), value: "none" },
            { label: l("Thumb", "buddypress"), value: "thumb" },
            { label: l("Full", "buddypress"), value: "full" },
          ];
        exports.AVATAR_SIZES = u;
      },
      {},
    ],
    YNTp: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("./constants"),
          t = wp,
          n = t.blockEditor,
          o = n.InspectorControls,
          r = n.BlockControls,
          s = t.components,
          l = s.Placeholder,
          a = s.Disabled,
          i = s.PanelBody,
          d = s.SelectControl,
          u = s.ToggleControl,
          p = s.Toolbar,
          m = s.ToolbarButton,
          b = t.compose.compose,
          c = t.data.withSelect,
          y = t.editor.ServerSideRender,
          h = t.element,
          g = h.Fragment,
          v = h.createElement,
          S = t.i18n.__,
          f = bp.blockComponents.AutoCompleter,
          C = function (e) {
            return e && e.mention_name ? e.mention_name : null;
          },
          I = function (t) {
            var n = t.attributes,
              s = t.setAttributes,
              b = t.bpSettings,
              c = b.isAvatarEnabled,
              h = b.isMentionEnabled,
              I = b.isCoverImageEnabled,
              k = n.avatarSize,
              A = n.displayMentionSlug,
              E = n.displayActionButton,
              M = n.displayCoverImage;
            return n.itemID
              ? v(
                  g,
                  null,
                  v(
                    r,
                    null,
                    v(
                      p,
                      null,
                      v(m, {
                        icon: "edit",
                        title: S("Select another member", "buddypress"),
                        onClick: function () {
                          s({ itemID: 0 });
                        },
                      })
                    )
                  ),
                  v(
                    o,
                    null,
                    v(
                      i,
                      { title: S("Settings", "buddypress"), initialOpen: !0 },
                      v(u, {
                        label: S("Display Profile button", "buddypress"),
                        checked: !!E,
                        onChange: function () {
                          s({ displayActionButton: !E });
                        },
                        help: S(
                          E
                            ? "Include a link to the user's profile page under their display name."
                            : "Toggle to display a link to the user's profile page under their display name.",
                          "buddypress"
                        ),
                      }),
                      c &&
                        v(d, {
                          label: S("Avatar size", "buddypress"),
                          value: k,
                          options: e.AVATAR_SIZES,
                          help: S(
                            'Select "None" to disable the avatar.',
                            "buddypress"
                          ),
                          onChange: function (e) {
                            s({ avatarSize: e });
                          },
                        }),
                      I &&
                        v(u, {
                          label: S("Display Cover Image", "buddypress"),
                          checked: !!M,
                          onChange: function () {
                            s({ displayCoverImage: !M });
                          },
                          help: S(
                            M
                              ? "Include the user's cover image over their display name."
                              : "Toggle to display the user's cover image over their display name.",
                            "buddypress"
                          ),
                        }),
                      h &&
                        v(u, {
                          label: S("Display Mention slug", "buddypress"),
                          checked: !!A,
                          onChange: function () {
                            s({ displayMentionSlug: !A });
                          },
                          help: S(
                            A
                              ? "Include the user's mention name under their display name."
                              : "Toggle to display the user's mention name under their display name.",
                            "buddypress"
                          ),
                        })
                    )
                  ),
                  v(a, null, v(y, { block: "bp/member", attributes: n }))
                )
              : v(
                  l,
                  {
                    icon: "admin-users",
                    label: S("BuddyPress Member", "buddypress"),
                    instructions: S(
                      "Start typing the name of the member you want to feature into this post.",
                      "buddypress"
                    ),
                  },
                  v(f, {
                    component: "members",
                    slugValue: C,
                    ariaLabel: S("Member's username", "buddypress"),
                    placeholder: S(
                      "Enter Member's username here…",
                      "buddypress"
                    ),
                    onSelectItem: s,
                    useAvatar: c,
                  })
                );
          },
          k = b([
            c(function (e) {
              return {
                bpSettings:
                  e("core/editor").getEditorSettings().bp.members || {},
              };
            }),
          ])(I),
          A = k;
        exports.default = A;
      },
      { "./constants": "AE3e" },
    ],
    TmUL: [
      function (require, module, exports) {
        "use strict";
        var e = t(require("./member/edit"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = wp,
          d = r.blocks.registerBlockType,
          a = r.i18n.__;
        d("bp/member", {
          title: a("Member", "buddypress"),
          description: a("BuddyPress Member.", "buddypress"),
          icon: "admin-users",
          category: "buddypress",
          attributes: {
            itemID: { type: "integer", default: 0 },
            avatarSize: { type: "string", default: "full" },
            displayMentionSlug: { type: "boolean", default: !0 },
            displayActionButton: { type: "boolean", default: !0 },
            displayCoverImage: { type: "boolean", default: !0 },
          },
          edit: e.default,
        });
      },
      { "./member/edit": "YNTp" },
    ],
  },
  {},
  ["TmUL"],
  null
);
//# sourceMappingURL=/bp-members/js/blocks/member.js.map
