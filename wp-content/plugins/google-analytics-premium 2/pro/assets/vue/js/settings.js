(function (t) {
  function e(e) {
    for (
      var i, a, r = e[0], l = e[1], c = e[2], u = 0, m = [];
      u < r.length;
      u++
    )
      (a = r[u]), n[a] && m.push(n[a][0]), (n[a] = 0);
    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (t[i] = l[i]);
    p && p(e);
    while (m.length) m.shift()();
    return o.push.apply(o, c || []), s();
  }
  function s() {
    for (var t, e = 0; e < o.length; e++) {
      for (var s = o[e], i = !0, r = 1; r < s.length; r++) {
        var l = s[r];
        0 !== n[l] && (i = !1);
      }
      i && (o.splice(e--, 1), (t = a((a.s = s[0]))));
    }
    return t;
  }
  var i = {},
    n = { settings: 0 },
    o = [];
  function a(e) {
    if (i[e]) return i[e].exports;
    var s = (i[e] = { i: e, l: !1, exports: {} });
    return t[e].call(s.exports, s, s.exports, a), (s.l = !0), s.exports;
  }
  (a.m = t),
    (a.c = i),
    (a.d = function (t, e, s) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: s });
    }),
    (a.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (a.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          a.d(
            s,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return s;
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return a.d(e, "a", e), e;
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = "https://monsterinsights.test/");
  var r = (window["monsterinsightsjsonp"] =
      window["monsterinsightsjsonp"] || []),
    l = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var c = 0; c < r.length; c++) e(r[c]);
  var p = l;
  o.push([0, "chunk-vendors", "chunk-common"]), s();
})({
  0: function (t, e, s) {
    t.exports = s("2884");
  },
  "00f4": function (t, e, s) {},
  "055a": function (t, e, s) {},
  "07ac": function (t, e, s) {
    var i = s("23e7"),
      n = s("6f53").values;
    i(
      { target: "Object", stat: !0 },
      {
        values: function (t) {
          return n(t);
        },
      }
    );
  },
  "0af3": function (t, e, s) {},
  1035: function (t, e, s) {
    "use strict";
    var i = s("feb9"),
      n = s.n(i);
    n.a;
  },
  1148: function (t, e, s) {
    "use strict";
    var i = s("a691"),
      n = s("1d80");
    t.exports =
      "".repeat ||
      function (t) {
        var e = String(n(this)),
          s = "",
          o = i(t);
        if (o < 0 || o == 1 / 0)
          throw RangeError("Wrong number of repetitions");
        for (; o > 0; (o >>>= 1) && (e += e)) 1 & o && (s += e);
        return s;
      };
  },
  "1f29": function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAlBJREFUOBGNkk2IUlEUx+99vufXQvCjEA11YWgk7TTLZhwVLTfSRmY1QbOoTdMqad0iiGB20cpVUAt3SVHCJDJG40IXBVGLIIOB8hM/QPy+/a/xYqK38MJ99757zu9/zj3nUrLmiEajdkEQni6Xy6hKpfqB/eNCofCMrsOHQiEPgPfwtdhsNkYpJe12m0LolkpJIJFI7DkcDm+9Xv/o9/vPw+dwsVhYnE4nc7lc1G63016vx8bj8TlRSWA6nd6cz+cXAoHAGYD3sDdarVam1+vpaDRaITgjjLHTigKArkK9ifXhbDYjBoOBSZL0F261Wqzb7VKtVvtBUQCwi4N88kjD4ZAg+ioyT53DGo3mJwLs/VcD3PkyrnAwmUwks9n8YDAYuPBvxGQASL/fp8imiwJeKZVK3/4R4DAicliLIt4pFosvsH9Vq9Wu4b5GCHC4j+hb5XL5C09JWOWFTzAY3MJyAAHJ7XbfRo9fclsmk2maTKY8IhJRFAna+QTwJ27jYyUQDofj6O1bPBLJ6/Xu5vP5N3/MhMC2gxrcReTvEGio1er7eFRR2S7EYrE40nsNWPB4PLu5XO6dbIxEIjuo+COkfAyfTZ1OF4dIHyJnZR8RkZ/zH5/PdyObzR7KhmQyud3pdFYw2rVRqVSOYePTIvvwVYDyKThUT8KpVGq70WjsI/Iv+HC4zp2VhoiiEP625ZFOp683m819iLZxtlGtVuuyTWmlePcM9x9A6DNWikd0EYJtdGPz6OjoqxJ08ox3oQzYgKtcwgwi7Q5athbMhX4DL0sglf8ys78AAAAASUVORK5CYII=";
  },
  "21ab": function (t, e, s) {
    "use strict";
    var i = s("afcb"),
      n = s.n(i);
    n.a;
  },
  2532: function (t, e, s) {
    "use strict";
    var i = s("23e7"),
      n = s("5a34"),
      o = s("1d80"),
      a = s("ab13");
    i(
      { target: "String", proto: !0, forced: !a("includes") },
      {
        includes: function (t) {
          return !!~String(o(this)).indexOf(
            n(t),
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
      }
    );
  },
  2884: function (t, e, s) {
    "use strict";
    s.r(e);
    s("e260"), s("e6cf"), s("cca6"), s("a79d");
    var i = s("2b0e"),
      n = s("8c4f"),
      o = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { class: t.routeClass },
          [
            s(
              "the-app-header",
              [s("Notifications"), s("settings-button-save")],
              1
            ),
            s("the-app-navigation", [s("settings-tabs-navigation")], 1),
            s("the-app-notices"),
            s("settings-first-time-notice"),
            s("router-view"),
            t.blocked
              ? s("div", { staticClass: "monsterinsights-blocked" })
              : t._e(),
            s("the-quick-links"),
          ],
          1
        );
      },
      a = [],
      r =
        (s("a4d3"),
        s("4de4"),
        s("4160"),
        s("b0c0"),
        s("e439"),
        s("dbb4"),
        s("b64b"),
        s("159b"),
        s("fc11")),
      l = s("2f62"),
      c = s("561c"),
      p = s("7220"),
      u = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "main",
          { staticClass: "monsterinsights-settings-content settings-general" },
          [
            s(
              "settings-block",
              { attrs: { title: t.text_license_title } },
              [s("settings-input-license")],
              1
            ),
            s(
              "settings-block",
              { attrs: { title: t.text_auth_title } },
              [
                s("settings-input-authenticate", {
                  attrs: {
                    label: t.text_auth_label,
                    description: t.text_auth_description,
                  },
                }),
              ],
              1
            ),
            "minor" === t.settings.automatic_updates ||
            "none" === t.settings.automatic_updates
              ? s(
                  "settings-block",
                  { attrs: { title: t.text_automatic_updates } },
                  [
                    s("settings-input-radio", {
                      attrs: {
                        options: t.automatic_updates,
                        name: "automatic_updates",
                      },
                    }),
                  ],
                  1
                )
              : t._e(),
            s("settings-input-usage-tracking"),
            s(
              "settings-block",
              { attrs: { title: t.text_setup_wizard_title } },
              [
                s("label", {
                  domProps: { textContent: t._s(t.text_setup_wizard_label) },
                }),
                s("a", {
                  staticClass: "monsterinsights-button",
                  attrs: { href: t.wizard_url },
                  domProps: { textContent: t._s(t.text_setup_wizard_button) },
                }),
              ]
            ),
          ],
          1
        );
      },
      m = [],
      d = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { class: t.blockClass },
          [
            s(
              "div",
              {
                class: t.titleClass,
                on: {
                  click: t.toggleCollapsible,
                  keyup: [
                    function (e) {
                      return !e.type.indexOf("key") &&
                        t._k(e.keyCode, "enter", 13, e.key, "Enter")
                        ? null
                        : t.toggleCollapsible(e);
                    },
                    function (e) {
                      return !e.type.indexOf("key") &&
                        t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"])
                        ? null
                        : t.toggleCollapsible(e);
                    },
                  ],
                },
              },
              [
                t._v(" " + t._s(t.title) + " "),
                t.collapsible
                  ? s(
                      "span",
                      {
                        staticClass:
                          "monsterinsights-settings-input-toggle-collapsible",
                        attrs: { role: "button" },
                      },
                      [
                        s("i", {
                          class: t.iconClass,
                          attrs: {
                            tabindex: "0",
                            onkeypress:
                              "if(event.keyCode==32||event.keyCode==13){return false;};",
                          },
                        }),
                      ]
                    )
                  : t._e(),
              ]
            ),
            t.collapsible
              ? [
                  s("slide-down-up", [
                    t.collapsed
                      ? t._e()
                      : s(
                          "div",
                          {
                            staticClass:
                              "monsterinsights-settings-block-content",
                          },
                          [t._t("default")],
                          2
                        ),
                  ]),
                ]
              : [
                  s(
                    "div",
                    { staticClass: "monsterinsights-settings-block-content" },
                    [t._t("default")],
                    2
                  ),
                ],
          ],
          2
        );
      },
      g = [],
      h = s("d98d"),
      _ = {
        name: "SettingsBlock",
        components: { SlideDownUp: h["a"] },
        props: {
          title: String,
          icon: { default: "", type: String },
          collapsible: { default: !1, type: Boolean },
          defaultCollapse: { default: !0, type: Boolean },
        },
        data: function () {
          return { collapsed: this.defaultCollapse };
        },
        computed: {
          titleClass: function () {
            return "monsterinsights-settings-block-title " + this.icon;
          },
          blockClass: function () {
            var t = "monsterinsights-settings-block";
            return (
              this.collapsible &&
                (t += " monsterinsights-settings-block-collapsible"),
              t
            );
          },
          iconClass: function () {
            var t = "monstericon-arrow";
            return this.collapsed || (t += " monstericon-down"), t;
          },
        },
        methods: {
          toggleCollapsible: function (t) {
            t.preventDefault(), (this.collapsed = !this.collapsed);
          },
        },
      },
      C = _,
      b = s("2877"),
      f = Object(b["a"])(C, d, g, !1, null, null, null),
      v = f.exports,
      x = s("6d70"),
      O = s("2ddd"),
      y = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", {
          staticClass: "settings-input settings-input-usage-tracking",
        });
      },
      w = [],
      j = { name: "SettingsInputUsageTracking" },
      k = j,
      P = Object(b["a"])(k, y, w, !1, null, null, null),
      S = P.exports,
      $ = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "monsterinsights-settings-input monsterinsights-settings-input-authenticate",
          },
          [
            !t.auth.network_ua || t.is_network || t.auth.ua
              ? t._e()
              : s("settings-network-notice", [
                  s("strong", {
                    domProps: { textContent: t._s(t.text_auth_network) },
                  }),
                  s("span", {
                    domProps: { textContent: t._s(t.text_auth_network_2) },
                  }),
                ]),
            (
              t.is_network
                ? "" !== t.license_network.type && t.auth.network_ua
                : "" !== t.license.type && t.auth.ua
            )
              ? t._e()
              : s(
                  "div",
                  [
                    s("span", {
                      staticClass: "monsterinsights-dark",
                      domProps: { textContent: t._s(t.label) },
                    }),
                    s("p", { domProps: { innerHTML: t._s(t.description) } }),
                    t._t("before_connect"),
                    s("button", {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip",
                          value: t.tooltip_data,
                          expression: "tooltip_data",
                        },
                      ],
                      staticClass: "monsterinsights-button",
                      class: {
                        "monsterinsights-button-disabled": t.is_network
                          ? !t.license_network.type
                          : !t.license.type,
                      },
                      domProps: { textContent: t._s(t.text_button_connect) },
                      on: { click: t.doAuth },
                    }),
                    t.show_manual_ua_normal ||
                    t.showManualOnClick ||
                    !t.is_licensed
                      ? t._e()
                      : s(
                          "p",
                          {
                            staticClass:
                              "monsterinsights-auth-manual-connect-paragraph",
                          },
                          [
                            s("a", {
                              staticClass:
                                "monsterinsights-auth-manual-connect-text",
                              attrs: {
                                href: "#monsterinsights-auth-manual-ua-input",
                              },
                              domProps: {
                                innerHTML: t._s(t.text_manual_connect),
                              },
                              on: { click: t.showManualClick },
                            }),
                          ]
                        ),
                  ],
                  2
                ),
            t.showManualOnClick || t.show_manual_ua_normal
              ? s("div", [
                  s("div", { staticClass: "monsterinsights-separator" }),
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_manual_label) },
                  }),
                  s("p", {
                    domProps: { innerHTML: t._s(t.text_manual_description) },
                  }),
                  s("input", {
                    staticClass: "monsterinsights-manual-ua",
                    attrs: {
                      id: "monsterinsights-auth-manual-ua-input",
                      type: "text",
                    },
                    domProps: {
                      value: t.is_network
                        ? t.auth.network_manual_ua
                        : t.auth.manual_ua,
                    },
                    on: { change: t.updateManualUa },
                  }),
                  t.has_error
                    ? s("label", { staticClass: "monsterinsights-error" }, [
                        s("i", { staticClass: "monstericon-warning-triangle" }),
                        s("span", {
                          domProps: { innerHTML: t._s(t.has_error) },
                        }),
                      ])
                    : t._e(),
                ])
              : t._e(),
            (
              t.is_network
                ? t.license_network.type && t.auth.network_ua
                : t.license.type && t.auth.ua
            )
              ? s(
                  "div",
                  { staticClass: "monsterinsights-auth-info" },
                  [
                    s(
                      "span",
                      {
                        staticClass:
                          "monsterinsights-settings-input-toggle-collapsible",
                        attrs: { role: "button" },
                        on: {
                          click: t.toggleButtons,
                          keyup: [
                            function (e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                ? null
                                : t.toggleButtons(e);
                            },
                            function (e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "space", 32, e.key, [
                                  " ",
                                  "Spacebar",
                                ])
                                ? null
                                : t.toggleButtons(e);
                            },
                          ],
                        },
                      },
                      [
                        s("i", {
                          class: t.iconClass,
                          attrs: {
                            tabindex: "0",
                            onkeypress:
                              "if(event.keyCode==32||event.keyCode==13){return false;};",
                          },
                        }),
                      ]
                    ),
                    s("span", {
                      staticClass: "monsterinsights-dark",
                      domProps: { textContent: t._s(t.text_website_profile) },
                    }),
                    s("p", [
                      s("span", {
                        domProps: { textContent: t._s(t.text_active_profile) },
                      }),
                      t._v(": "),
                      s("span", {
                        domProps: {
                          textContent: t._s(
                            t.is_network
                              ? t.auth.network_viewname
                              : t.auth.viewname
                          ),
                        },
                      }),
                    ]),
                    s("slide-down-up", [
                      t.showButtons
                        ? s("div", [
                            s(
                              "div",
                              { staticClass: "monsterinsights-auth-actions" },
                              [
                                s("button", {
                                  staticClass: "monsterinsights-button",
                                  domProps: {
                                    textContent: t._s(t.text_button_reconnect),
                                  },
                                  on: { click: t.doReAuth },
                                }),
                                s("button", {
                                  staticClass:
                                    "monsterinsights-button monsterinsights-button-secondary",
                                  domProps: {
                                    textContent: t._s(t.text_button_verify),
                                  },
                                  on: { click: t.verifyAuth },
                                }),
                                s("button", {
                                  staticClass:
                                    "monsterinsights-button monsterinsights-button-secondary",
                                  domProps: {
                                    textContent: t._s(t.text_button_disconnect),
                                  },
                                  on: { click: t.deleteAuth },
                                }),
                              ]
                            ),
                          ])
                        : t._e(),
                    ]),
                  ],
                  1
                )
              : t._e(),
          ],
          1
        );
      },
      H = [],
      A = s("b333");
    function L(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function T(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? L(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : L(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var M = {
        name: "SettingsInputAuthenticate",
        components: { SettingsNetworkNotice: A["a"], SlideDownUp: h["a"] },
        props: { label: String, description: String },
        data: function () {
          return {
            force_deauth: !1,
            showButtons: !1,
            showManualOnClick: !1,
            has_error: !1,
            is_network: this.$mi.network,
            text_button_connect: Object(c["a"])(
              "Connect MonsterInsights",
              "ga-premium"
            ),
            text_button_verify: Object(c["a"])(
              "Verify Credentials",
              "ga-premium"
            ),
            text_button_reconnect: Object(c["a"])(
              "Reconnect MonsterInsights",
              "ga-premium"
            ),
            text_website_profile: Object(c["a"])(
              "Website Profile",
              "ga-premium"
            ),
            text_active_profile: Object(c["a"])("Active Profile", "ga-premium"),
            text_auth_network: Object(c["a"])(
              "Your website profile has been set at the network level of your WordPress Multisite.",
              "ga-premium"
            ),
            text_auth_network_2: Object(c["a"])(
              "If you would like to use a different profile for this subsite, you can authenticate below.",
              "ga-premium"
            ),
            text_manual_label: Object(c["a"])(
              "Manually enter your UA code",
              "ga-premium"
            ),
            text_manual_description: Object(c["a"])(
              "Warning: If you use a manual UA code, you won't be able to use any of the reporting and some of the tracking features. Your UA code should look like UA-XXXXXX-XX where the X's are numbers.",
              "ga-premium"
            ),
            text_manual_connect: Object(c["a"])(
              "Or manually enter UA code (limited functionality)",
              "ga-premium"
            ),
          };
        },
        computed: T(
          {},
          Object(l["b"])({
            license: "$_license/license",
            license_network: "$_license/license_network",
            auth: "$_auth/auth",
            addons: "$_addons/addons",
          }),
          {
            text_button_disconnect: function () {
              return this.force_deauth
                ? Object(c["a"])("Force Deauthenticate", "ga-premium")
                : Object(c["a"])("Disconnect MonsterInsights", "ga-premium");
            },
            iconClass: function () {
              var t = "monstericon-arrow";
              return this.showButtons && (t += " monstericon-down"), t;
            },
            tooltip_data: function () {
              return (
                !(
                  (this.is_network && this.license_network.type) ||
                  (!this.is_network && this.license.type)
                ) && {
                  content: Object(c["a"])(
                    "A license key is needed before connecting to MonsterInsights.",
                    "ga-premium"
                  ),
                  autoHide: !1,
                }
              );
            },
            is_authed: function () {
              return this.is_network ? this.auth.network_ua : this.auth.ua;
            },
            show_manual_ua_normal: function () {
              return (
                !(
                  !this.addons["manual_ua"] ||
                  !this.addons["manual_ua"].active ||
                  "" !== this.is_authed
                ) ||
                (this.is_network
                  ? this.auth.network_manual_ua
                  : this.auth.manual_ua)
              );
            },
            is_licensed: function () {
              return this.license_network.type || this.license.type;
            },
          }
        ),
        methods: {
          doAuth: function (t) {
            if (
              (t.preventDefault(),
              (!this.license.type && !this.is_network) ||
                (this.is_network && !this.license_network.type))
            )
              return !1;
            var e = this;
            this.$swal({
              type: "info",
              title: Object(c["a"])("Authenticating", "ga-premium"),
              allowOutsideClick: !1,
              allowEscapeKey: !1,
              allowEnterKey: !1,
              onOpen: function () {
                e.$swal.showLoading();
              },
            }),
              this.$store
                .dispatch("$_auth/doAuth", this.is_network)
                .then(function (t) {
                  t.data.redirect
                    ? (window.location = t.data.redirect)
                    : e.$swal({
                        type: "error",
                        title: Object(c["a"])("Error", "ga-premium"),
                        html: t.data.message,
                        confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                      });
                });
          },
          doReAuth: function (t) {
            if (
              (t.preventDefault(),
              (this.is_network && !this.license_network.type) ||
                (!this.is_network && !this.license.type))
            )
              return !1;
            var e = this;
            this.$swal({
              type: "info",
              title: Object(c["a"])("Re-Authenticating", "ga-premium"),
              allowOutsideClick: !1,
              allowEscapeKey: !1,
              allowEnterKey: !1,
              onOpen: function () {
                e.$swal.showLoading();
              },
            }),
              this.$store
                .dispatch("$_auth/doReAuth", this.is_network)
                .then(function (t) {
                  t.data.redirect
                    ? (window.location = t.data.redirect)
                    : e.$swal({
                        type: "error",
                        title: Object(c["a"])("Error", "ga-premium"),
                        html: t.data.message,
                        confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                      });
                });
          },
          verifyAuth: function (t) {
            if (
              (t.preventDefault(),
              (this.is_network && !this.license_network.type) ||
                (!this.is_network && !this.license.type))
            )
              return !1;
            var e = this;
            this.$swal({
              type: "info",
              title: Object(c["a"])("Verifying Credentials", "ga-premium"),
              allowOutsideClick: !1,
              allowEscapeKey: !1,
              allowEnterKey: !1,
              onOpen: function () {
                e.$swal.showLoading();
              },
            }),
              this.$store
                .dispatch("$_auth/verifyAuth", this.is_network)
                .then(function (t) {
                  e.$swal.close(),
                    t.success
                      ? e.$swal({
                          type: "success",
                          title: t.data.message,
                          text: Object(c["a"])(
                            "Your site is connected to MonsterInsights!",
                            "ga-premium"
                          ),
                          confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                        })
                      : e.$swal({
                          type: "error",
                          title: Object(c["a"])("Error", "ga-premium"),
                          html: t.data.message,
                          confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                        });
                });
          },
          deleteAuth: function (t) {
            if (
              (t.preventDefault(),
              (this.is_network && !this.license_network.type) ||
                (!this.is_network && !this.license.type))
            )
              return !1;
            var e = this;
            this.$swal({
              type: "info",
              title: Object(c["a"])("Deauthenticating", "ga-premium"),
              allowOutsideClick: !1,
              allowEscapeKey: !1,
              allowEnterKey: !1,
              onOpen: function () {
                e.$swal.showLoading();
              },
            }),
              this.$store
                .dispatch("$_auth/deleteAuth", {
                  network: this.is_network,
                  force: this.force_deauth,
                })
                .then(function (t) {
                  e.$swal.close(),
                    t.success
                      ? e.$swal({
                          type: "success",
                          title: t.data.message,
                          text: Object(c["a"])(
                            "You've disconnected your site from MonsterInsights. Your site is no longer being tracked by Google Analytics and you won't see reports anymore.",
                            "ga-premium"
                          ),
                          confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                        })
                      : (e.$swal({
                          type: "error",
                          title: Object(c["a"])("Error", "ga-premium"),
                          html: t.data.message,
                          confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                        }),
                        (e.force_deauth = !0));
                });
          },
          toggleButtons: function (t) {
            t.preventDefault(), (this.showButtons = !this.showButtons);
          },
          updateManualUa: function (t) {
            var e = this;
            this.$mi_saving_toast({}),
              (e.has_error = !1),
              this.$store
                .dispatch("$_auth/updateManualUa", {
                  ua: t.target.value,
                  network: this.is_network,
                })
                .then(function (t) {
                  !1 === t.success
                    ? ((e.has_error = t.data.error), e.$mi_error_toast({}))
                    : ((e.has_error = !1), e.$mi_success_toast({}));
                });
          },
          showManualClick: function () {
            this.showManualOnClick = !0;
          },
        },
      },
      E = M,
      V = Object(b["a"])(E, $, H, !1, null, null, null),
      D = V.exports;
    function I(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function B(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? I(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : I(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var z = {
        name: "SettingsTabGeneral",
        components: {
          SettingsInputUsageTracking: S,
          SettingsInputAuthenticate: D,
          SettingsInputLicense: O["a"],
          SettingsInputRadio: x["a"],
          SettingsBlock: v,
        },
        computed: B({}, Object(l["b"])({ settings: "$_settings/settings" })),
        data: function () {
          return {
            is_loading: !1,
            has_error: !1,
            automatic_updates: [
              {
                value: "all",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Yes (recommended) %1$s- Get the latest features, bugfixes, and security updates as they are released.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "minor",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Minor only %1$s- Get bugfixes and security updates, but not major features.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "none",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "None %1$s- Manually update everything.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
            ],
            text_license_title: Object(c["a"])("License Key", "ga-premium"),
            text_auth_title: Object(c["a"])(
              "Google Authentication",
              "ga-premium"
            ),
            text_auth_label: Object(c["a"])(
              "Connect Google Analytics + WordPress",
              "ga-premium"
            ),
            text_auth_description: Object(c["a"])(
              "You will be taken to the MonsterInsights website where you'll need to connect your Analytics account.",
              "ga-premium"
            ),
            text_automatic_updates: Object(c["a"])(
              "Automatic Updates",
              "ga-premium"
            ),
            text_setup_wizard_title: Object(c["a"])(
              "Setup Wizard",
              "ga-premium"
            ),
            text_setup_wizard_label: Object(c["a"])(
              "Use our configuration wizard to properly setup Google Analytics with WordPress (with just a few clicks).",
              "ga-premium"
            ),
            text_setup_wizard_button: Object(c["a"])(
              "Launch Setup Wizard",
              "ga-premium"
            ),
            wizard_url: this.$mi.wizard_url,
          };
        },
        methods: { __: c["a"] },
      },
      Z = z,
      U = Object(b["a"])(Z, u, m, !1, null, null, null),
      F = U.exports,
      N = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "main",
          {
            staticClass: "monsterinsights-settings-content settings-engagement",
          },
          [
            t.isAddonActive
              ? t._e()
              : s(
                  "settings-block",
                  { attrs: { title: t.text_title_demographics } },
                  [
                    s("settings-input-checkbox", {
                      attrs: {
                        name: "demographics",
                        label: t.text_label_demographics,
                        tooltip: t.text_tooltip_demographics,
                      },
                    }),
                    s("div", { staticClass: "monsterinsights-separator" }),
                    s("settings-input-checkbox", {
                      attrs: {
                        name: "anonymize_ips",
                        label: t.text_label_anonymize_ip,
                        tooltip: t.text_tooltip_anonymize,
                      },
                    }),
                  ],
                  1
                ),
            s("settings-input-e-u-compliance"),
            s(
              "settings-block",
              { attrs: { title: t.text_title_link_attribution } },
              [
                s(
                  "settings-input-checkbox",
                  {
                    attrs: {
                      name: "link_attribution",
                      label: t.text_label_enhanced_link,
                      tooltip: t.text_tooltip_link_attribution,
                    },
                  },
                  [
                    s(
                      "template",
                      { slot: "collapsible" },
                      [
                        s("settings-input-checkbox", {
                          attrs: {
                            name: "hash_tracking",
                            label: t.text_label_anchor_tracking,
                            tooltip: t.text_tooltip_anchor_tracking,
                          },
                        }),
                        s("div", { staticClass: "monsterinsights-separator" }),
                        s("settings-input-checkbox", {
                          attrs: {
                            name: "allow_anchor",
                            label: t.text_label_allow_anchor,
                            tooltip: t.text_tooltip_allow_anchor,
                          },
                        }),
                        s("div", { staticClass: "monsterinsights-separator" }),
                        s("settings-input-checkbox", {
                          attrs: {
                            name: "tag_links_in_rss",
                            label: t.text_label_tag_links_in_rss,
                            tooltip: t.text_tooltip_tag_links_in_rss,
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  2
                ),
              ],
              1
            ),
            s("settings-input-scroll"),
            s(
              "settings-block",
              { attrs: { title: t.text_cross_domain } },
              [
                s("label", [
                  s("span", {
                    domProps: {
                      innerHTML: t._s(t.text_cross_domain_description),
                    },
                  }),
                ]),
                s("settings-input-repeater", {
                  attrs: {
                    text_add: t.text_add_domain,
                    structure: t.domain_repeater_structure,
                    name: "cross_domains",
                  },
                }),
              ],
              1
            ),
            s(
              "settings-block",
              {
                attrs: {
                  id: "monsterinsights-settings-block-file-downloads",
                  title: t.text_title_file_downloads,
                },
              },
              [
                s("settings-input-text", {
                  attrs: {
                    default_value: "doc,pdf,ppt,zip,xls,docx,pptx,xlsx",
                    name: "extensions_of_files",
                    label: t.text_label_extensions_of_files,
                    description: t.text_description_extensions_of_files,
                  },
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      W = [],
      R = (s("4d63"), s("ac1f"), s("25f0"), s("5319"), s("088d")),
      G = s("c472"),
      q = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "settings-input settings-input-eu-compliance" },
          [
            t.isAddonActive
              ? t._e()
              : s(
                  "settings-block",
                  { attrs: { title: t.text_compatibility_mode } },
                  [
                    t.isGtag
                      ? s("settings-input-checkbox", {
                          attrs: {
                            name: "gtagtracker_compatibility_mode",
                            label: t.text_compatibility_label,
                            tooltip: t.text_compatibility_tooltip_text,
                          },
                        })
                      : s("settings-input-checkbox", {
                          attrs: {
                            name: "gatracker_compatibility_mode",
                            label: t.text_compatibility_label,
                            tooltip: t.text_compatibility_tooltip_text,
                          },
                        }),
                  ],
                  1
                ),
            s(
              "settings-block",
              { attrs: { title: t.text_title_eu_compliance_title } },
              [
                t.isAddonActive
                  ? s(
                      "div",
                      [
                        s("p", {
                          staticClass: "settings-input-description",
                          domProps: {
                            innerHTML: t._s(t.text_addon_description),
                          },
                        }),
                        s(
                          "settings-input-checkbox",
                          {
                            attrs: {
                              name: "eu_compliance",
                              label: t.text_label_eu_compliance,
                              faux: !0,
                              default: !0,
                            },
                          },
                          [
                            s(
                              "template",
                              { slot: "collapsible" },
                              [
                                s("settings-input-checkbox", {
                                  attrs: {
                                    faux: !0,
                                    label: t.text_label_anonymize_ip,
                                    tooltip: t.text_tooltip_anonymize_ip,
                                    faux_tooltip:
                                      t.text_faux_tooltip_anonymize_ip,
                                  },
                                }),
                                s("div", {
                                  staticClass: "monsterinsights-separator",
                                }),
                                s("settings-input-checkbox", {
                                  attrs: {
                                    faux: !0,
                                    label: t.text_label_disable_demographics,
                                    tooltip:
                                      t.text_tooltip_disable_demographics,
                                    faux_tooltip:
                                      t.text_faux_tooltip_demographics,
                                  },
                                }),
                                s("div", {
                                  staticClass: "monsterinsights-separator",
                                }),
                                s("settings-input-checkbox", {
                                  attrs: {
                                    faux: !0,
                                    label: t.text_label_user_id,
                                    tooltip: t.text_tooltip_user_id,
                                    faux_tooltip: t.text_faux_tooltip_user_id,
                                  },
                                }),
                                s("div", {
                                  staticClass: "monsterinsights-separator",
                                }),
                                s("settings-input-checkbox", {
                                  attrs: {
                                    faux: !0,
                                    label: t.text_label_author,
                                    tooltip: t.text_tooltip_author,
                                    faux_tooltip: t.text_faux_tooltip_author,
                                  },
                                }),
                                s("div", {
                                  staticClass: "monsterinsights-separator",
                                }),
                                s("settings-input-checkbox", {
                                  attrs: {
                                    faux: !0,
                                    label: t.text_label_ga_compatibility,
                                    tooltip: t.text_tooltip_ga_compatibility,
                                    faux_tooltip:
                                      t.text_faux_tooltip_ga_compatibility,
                                  },
                                }),
                                s("div", {
                                  staticClass: "monsterinsights-separator",
                                }),
                                s("settings-input-checkbox", {
                                  attrs: {
                                    label: t.text_amp_consent_label,
                                    tooltip: t.text_amp_consent_tooltip,
                                    name: "require_amp_consent",
                                    faux_tooltip: t.text_amp_addon_faux_tooltip,
                                  },
                                }),
                                s("div", {
                                  staticClass: "monsterinsights-separator",
                                }),
                                s("settings-input-checkbox", {
                                  attrs: {
                                    faux: !0,
                                    default: t.isCookiePluginEnabled,
                                    name: "cookiebot",
                                    label: t.text_label_integrate,
                                    tooltip: t.text_tooltip_integrate,
                                    faux_tooltip: t.text_faux_tooltip_integrate,
                                    faux_tooltip_off:
                                      t.text_faux_tooltip_integrate_off,
                                  },
                                }),
                                s("div", {
                                  staticClass: "monsterinsights-separator",
                                }),
                                s("p", [
                                  s("span", {
                                    staticClass: "monsterinsights-dark",
                                    domProps: {
                                      innerHTML: t._s(t.text_changes_title),
                                    },
                                  }),
                                  s("span", {
                                    domProps: {
                                      innerHTML: t._s(
                                        t.text_changes_description
                                      ),
                                    },
                                  }),
                                ]),
                                s("p", [
                                  s("span", {
                                    staticClass: "monsterinsights-dark",
                                    domProps: {
                                      innerHTML: t._s(t.text_disclaimer_title),
                                    },
                                  }),
                                  s("span", {
                                    domProps: {
                                      innerHTML: t._s(
                                        t.text_disclaimer_description
                                      ),
                                    },
                                  }),
                                ]),
                              ],
                              1
                            ),
                          ],
                          2
                        ),
                      ],
                      1
                    )
                  : s(
                      "div",
                      [
                        s("settings-addon-disabled", [
                          s("span", {
                            domProps: {
                              innerHTML: t._s(t.text_addon_inactive),
                            },
                          }),
                        ]),
                      ],
                      1
                    ),
              ]
            ),
          ],
          1
        );
      },
      Y = [],
      K = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "monsterinsights-settings-addon-upgrade monsterinsights-settings-addon-disabled",
          },
          [
            t._m(0),
            s(
              "div",
              { staticClass: "monsterinsights-settings-addon-message" },
              [
                t.install_plugins
                  ? t._t("default")
                  : s("span", {
                      domProps: { textContent: t._s(t.text_cant_install) },
                    }),
              ],
              2
            ),
          ]
        );
      },
      X = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", [
            s("div", {
              staticClass: "monsterinsights-bg-img monsterinsights-icon-alert",
            }),
          ]);
        },
      ],
      J = {
        name: "SettingsAddonDisabled",
        data: function () {
          return {
            install_plugins: this.$mi.install_plugins,
            text_cant_install: Object(c["a"])(
              "In order to use these features, please ask your webmaster to install the necessary addon.",
              "ga-premium"
            ),
          };
        },
      },
      Q = J,
      tt = Object(b["a"])(Q, K, X, !1, null, null, null),
      et = tt.exports;
    function st(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function it(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? st(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : st(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var nt = {
        name: "SettingsInputEUCompliance",
        components: {
          SettingsBlock: v,
          SettingsAddonDisabled: et,
          SettingsInputCheckbox: R["a"],
        },
        data: function () {
          return {
            text_addon_inactive: Object(c["d"])(
              Object(c["a"])(
                "In order to use the EU compliance features, please %1$sinstall and activate%2$s the EU Compliance addon.",
                "ga-premium"
              ),
              '<a href="' + this.$mi.addons_url + '">',
              "</a>"
            ),
            text_addon_description: Object(c["d"])(
              Object(c["a"])(
                "MonsterInsights's EU Compliance addon can help you comply with the latest EU regulations like GDPR by automatically performing configuration changes and integrating with compatible plugins and services. For the latest recommendations, we recommend reading the EU Compliance addon %1$sGetting Started Guide%2$s for step by step directions on any needed configuration changes.",
                "ga-premium"
              ),
              '<a href="https://www.monsterinsights.com/docs/getting-started-with-the-eu-compliance-addon">',
              "</a>"
            ),
            text_label_eu_compliance: Object(c["a"])(
              "Enable EU Compliance",
              "ga-premium"
            ),
            text_label_anonymize_ip: Object(c["a"])(
              "Anonymize IP addresses for Google Analytics hits.",
              "ga-premium"
            ),
            text_label_disable_demographics: Object(c["a"])(
              "Disable Demographics and Interests Reports for Remarketing and Advertising.",
              "ga-premium"
            ),
            text_label_user_id: Object(c["a"])(
              "Disable UserID tracking.",
              "ga-premium"
            ),
            text_label_author: Object(c["a"])(
              "Disable Author tracking.",
              "ga-premium"
            ),
            text_label_ga_compatibility: Object(c["a"])(
              "Enable ga() Compatibility Mode.",
              "ga-premium"
            ),
            text_label_integrate: Object(c["a"])(
              "Integrate with the CookieBot or Cookie Notice plugin.",
              "ga-premium"
            ),
            text_changes_title: Object(c["a"])(
              "Manual Google Analytics Account Changes Required",
              "ga-premium"
            ),
            text_changes_description: Object(c["a"])(
              "This addon automates a lot of the needed changes for EU compliance, however it cannot alter your Google Analytics account, and some configuration changes might be needed.",
              "ga-premium"
            ),
            text_disclaimer_title: Object(c["a"])(
              "Legal Disclaimer",
              "ga-premium"
            ),
            text_disclaimer_description: Object(c["a"])(
              "This addon is designed to automate some of the settings change required to be in compliance with various EU laws however due to the dynamic nature of websites, no plugin can offer 100 percent legal compliance. Please consult a specialist internet law attorney to determine if you are in compliance with all applicable laws for your jurisdictions and your use cases.\n As a website operator, it is solely your responsibility to ensure that you are in compliance with all applicable laws and regulations governing your use of our plugin.\n MonsterInsights, its employees/contractors, and other affiliated parties are not lawyers. Any advice given in our support, documentation, website, other mediums or through our services/products should not be considered legal advice and is for informational and/or educational purposes only and are not guaranteed to be correct, complete or up-to-date, and do not constitute creating/entering an Attorney-Client relationship.",
              "ga-premium"
            ),
            text_tooltip_anonymize_ip: Object(c["a"])(
              "The EU Compliance Addon is automatically anonymizing all IP addresses for Google Analytics hits, eCommerce hits, and form tracking hits.",
              "ga-premium"
            ),
            text_tooltip_disable_demographics: Object(c["d"])(
              Object(c["a"])(
                "The EU Compliance Addon has automatically disabled Demographics and Interests Reports for Remarketing and Advertising tracking on Google Analytics hits. You will want to make sure you have also disabled data sharing in your Google Analytics account.",
                "ga-premium"
              ),
              '<a href="https://www.monsterinsights.com/docs/getting-started-with-the-eu-compliance-addon" target="_blank">',
              "</a>"
            ),
            text_tooltip_user_id: Object(c["a"])(
              "The EU Compliance Addon has automatically disabled UserID tracking on Google Analytics hits, eCommerce hits, form tracking hits, and the UserID dimension in the Custom Dimensions addon.",
              "ga-premium"
            ),
            text_tooltip_author: Object(c["a"])(
              "The EU Compliance Addon has automatically disabled the author dimension in the Custom Dimensions addon.",
              "ga-premium"
            ),
            text_tooltip_ga_compatibility: Object(c["a"])(
              "The EU Compliance Addon has automatically enabled the ga() compatibility feature so plugins integrating for cookie consent can use GA to store consent as a GA event.",
              "ga-premium"
            ),
            text_tooltip_integrate: Object(c["d"])(
              Object(c["a"])(
                "The EU Compliance Addon allows for integration with either the %1$sCookieBot plugin%2$s or the %3$sCookie Notice plugin%4$s to have MonsterInsights wait to track a user into Google Analytics until consent is given. If you install either %5$sCookieBot%6$s or %7$sCookie Notice by dFactory%8$s, and activate it, the EU Compliance addon will automatically perform all required tasks to make our tracking code compatible with it for you. No code changes are required to the MonsterInsights plugin code. Note: having MonsterInsights wait until consent is given to load Google Analytics might alter your Google Analytics data completeness and accuracy.",
                "ga-premium"
              ),
              '<a href="https://wordpress.org/plugins/cookiebot/" target="_blank" rel="noopener noreferrer">',
              "</a>",
              '<a href="https://wordpress.org/plugins/cookie-notice/" target="_blank">',
              "</a>",
              '<a href="https://wordpress.org/plugins/cookiebot/" target="_blank" rel="noopener noreferrer">',
              "</a>",
              '<a href="https://wordpress.org/plugins/cookie-notice/" target="_blank" rel="noopener noreferrer">',
              "</a>"
            ),
            text_title_eu_compliance_title: Object(c["a"])(
              "EU Compliance",
              "ga-premium"
            ),
            text_compatibility_mode: Object(c["a"])(
              "Compatibility mode",
              "ga-premium"
            ),
            text_compatibility_tooltip: Object(c["a"])(
              "This enables MonsterInsights to work with plugins that use %1$s and don't support %2$s",
              "ga-premium"
            ),
            text_faux_tooltip_anonymize_ip: Object(c["a"])(
              "Anonymize IP is automatically enabled by the EU Compliance addon",
              "ga-premium"
            ),
            text_faux_tooltip_demographics: Object(c["a"])(
              "Demographics and Interests Reports are automatically disabled by the EU Compliance addon",
              "ga-premium"
            ),
            text_faux_tooltip_user_id: Object(c["a"])(
              "UserID is automatically disabled by the EU Compliance addon",
              "ga-premium"
            ),
            text_faux_tooltip_author: Object(c["a"])(
              "Author tracking is automatically disabled by the EU Compliance addon",
              "ga-premium"
            ),
            text_faux_tooltip_ga_compatibility: Object(c["a"])(
              "ga() Compatibility Mode is automatically enabled by the EU Compliance addon",
              "ga-premium"
            ),
            text_faux_tooltip_integrate: Object(c["a"])(
              "Deactivate the Cookie Notice plugin to disable",
              "ga-premium"
            ),
            text_faux_tooltip_integrate_off: Object(c["a"])(
              "Activate the Cookie Notice plugin to enable",
              "ga-premium"
            ),
            text_amp_consent_label: Object(c["a"])(
              "Wait for AMP consent box?",
              "ga-premium"
            ),
            text_amp_consent_tooltip: Object(c["a"])(
              "If you have implemented an AMP Consent Box, enabling this option will tell MonsterInsights to not track on AMP pages until consent is given via that box (or if you have the fallback configured to true, on fallback as well). Important: If you do not have an AMP Consent Box implemented (requires custom code), enabling this option will prevent MonsterInsights from tracking all AMP users.",
              "ga-premium"
            ),
            text_amp_addon_faux_tooltip: Object(c["a"])(
              "Deactivate the Google AMP Addon to disable",
              "ga-premium"
            ),
          };
        },
        computed: it(
          {},
          Object(l["b"])({
            addons: "$_addons/addons",
            settings: "$_settings/settings",
          }),
          {
            isAddonActive: function () {
              return (
                !!this.addons["eu-compliance"] &&
                this.addons["eu-compliance"].active
              );
            },
            isCookiePluginEnabled: function () {
              return !(
                (!this.addons["cookie_notice"] && !this.addons["cookiebot"]) ||
                (!this.addons["cookie_notice"].active &&
                  !this.addons["cookiebot"].active)
              );
            },
            isGtag: function () {
              return (
                !!this.settings["tracking_mode"] &&
                "gtag" === this.settings["tracking_mode"]
              );
            },
            text_compatibility_label: function () {
              return this.isGtag
                ? Object(c["a"])(
                    "Enable _gtagTracker Compatibility",
                    "ga-premium"
                  )
                : Object(c["a"])(
                    "Enable _gaTracker Compatibility",
                    "ga-premium"
                  );
            },
            text_compatibility_tooltip_text: function () {
              var t = this.isGtag ? "gtag()" : "ga()",
                e = this.isGtag ? "__gtagTracker()" : "__gaTracker()";
              return this.sprintf(
                this.text_compatibility_tooltip,
                "<code>" + t + "</code>",
                "<code>" + e + "</code>"
              );
            },
          }
        ),
        methods: { sprintf: c["d"] },
      },
      ot = nt,
      at = (s("dbde"), Object(b["a"])(ot, q, Y, !1, null, "499683dc", null)),
      rt = at.exports,
      lt = s("6ffa"),
      ct = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "settings-block",
          { attrs: { title: t.text_title_scrolling } },
          [
            s("settings-input-checkbox", {
              attrs: {
                faux: !0,
                label: t.text_label_scrolling,
                tooltip: t.text_tooltip_scrolling,
              },
            }),
          ],
          1
        );
      },
      pt = [],
      ut = {
        name: "SettingsInputScroll",
        components: { SettingsInputCheckbox: R["a"], SettingsBlock: v },
        data: function () {
          return {
            text_title_scrolling: Object(c["a"])(
              "Scroll Tracking",
              "ga-premium"
            ),
            text_label_scrolling: Object(c["a"])(
              "Track Scrolling Depth",
              "ga-premium"
            ),
            text_tooltip_scrolling: Object(c["a"])(
              "Using Scrolling Depth you can see how far, on average, visitors scroll down your website's pages",
              "ga-premium"
            ),
          };
        },
      },
      mt = ut,
      dt = Object(b["a"])(mt, ct, pt, !1, null, null, null),
      gt = dt.exports;
    function ht(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function _t(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ht(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : ht(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Ct = {
        name: "SettingsTabEngagement",
        components: {
          SettingsInputScroll: gt,
          SettingsInputRepeater: lt["a"],
          SettingsInputEUCompliance: rt,
          SettingsInputText: G["a"],
          SettingsInputCheckbox: R["a"],
          SettingsBlock: v,
        },
        data: function () {
          var t = window.location.origin.replace(/(^\w+:|^)\/\//, "");
          return (
            (t = t.replace(/\./, "\\.")),
            {
              text_title_demographics: Object(c["a"])(
                "Demographics",
                "ga-premium"
              ),
              text_label_demographics: Object(c["a"])(
                "Enable Demographics and Interests Reports for Remarketing and Advertising",
                "ga-premium"
              ),
              text_label_anonymize_ip: Object(c["a"])(
                "Anonymize IP Addresses",
                "ga-premium"
              ),
              text_title_link_attribution: Object(c["a"])(
                "Link Attribution",
                "ga-premium"
              ),
              text_label_enhanced_link: Object(c["a"])(
                "Enable Enhanced Link Attribution",
                "ga-premium"
              ),
              text_label_anchor_tracking: Object(c["a"])(
                "Enable Anchor Tracking",
                "ga-premium"
              ),
              text_label_allow_anchor: Object(c["a"])(
                "Enable allowAnchor",
                "ga-premium"
              ),
              text_label_allow_linker: Object(c["a"])(
                "Enable allowLinker",
                "ga-premium"
              ),
              text_label_tag_links_in_rss: Object(c["a"])(
                "Enable Tag Links in RSS",
                "ga-premium"
              ),
              text_title_file_downloads: Object(c["a"])(
                "File Downloads",
                "ga-premium"
              ),
              text_label_extensions_of_files: Object(c["a"])(
                "Extensions of Files to Track as Downloads",
                "ga-premium"
              ),
              text_description_extensions_of_files: Object(c["a"])(
                "MonsterInsights will send an event to Google Analytics if a link to a file has one of the above extensions.",
                "ga-premium"
              ),
              text_tooltip_demographics: Object(c["d"])(
                Object(c["a"])(
                  "Enable this setting to add the Demographics and Remarketing features to your Google Analytics tracking code. Make sure to enable Demographics and Remarketing in your Google Analytics account. We have a guide for how to do that in our %1$sknowledge base%2$s. For more information about Remarketing, we refer you to %3$sGoogle's documentation%4$s. Note that usage of this function is affected by privacy and cookie laws around the world. Be sure to follow the laws that affect your target audience.",
                  "ga-premium"
                ),
                '<a href="' +
                  this.$getUrl(
                    "settings-panel",
                    "demographics",
                    "https://www.monsterinsights.com/docs/enable-demographics-and-interests-report-in-google-analytics/"
                  ) +
                  '" target="_blank">',
                "</a>",
                '<a href="https://support.google.com/analytics/answer/2444872?hl=en_US" target="_blank" rel="noopener noreferrer">',
                "</a>"
              ),
              text_tooltip_anonymize: Object(c["d"])(
                Object(c["a"])(
                  "This adds %1$sanonymizeIp%2$s, telling Google Analytics to anonymize the information sent by the tracker objects by removing the last octet of the IP address prior to its storage.",
                  "ga-premium"
                ),
                '<a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/ip-anonymization" target="_blank" rel="noopener noreferrer">',
                "</a>"
              ),
              text_tooltip_link_attribution: Object(c["a"])(
                "Adds the Enhanced Link Attribution (retain link) code to improve the accuracy of your In-Page Analytics report by automatically differentiating between multiple links to the same URL on a single page by using link element IDs.",
                "ga-premium"
              ),
              text_tooltip_anchor_tracking: Object(c["a"])(
                'Many WordPress "1-page" style themes rely on anchor tags for navigation to show virtual pages. The problem is that to Google Analytics, these are all just a single page, and it makes it hard to get meaningful statistics about pages viewed. This feature allows proper tracking in those themes.',
                "ga-premium"
              ),
              text_tooltip_allow_anchor: Object(c["d"])(
                Object(c["a"])(
                  "This adds %1$sallowAnchor%2$s to the create command of the pageview hit tracking code, and makes RSS link tagging use a # as well.",
                  "ga-premium"
                ),
                '<a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#allowAnchor" target="_blank" rel="noopener noreferrer">',
                "</a>"
              ),
              text_tooltip_allow_linker: Object(c["d"])(
                Object(c["a"])(
                  "Enabling %1$scross-domain tracking (additional setup required)%2$s allows you to track users across multiple properties you own (such as example-1.com and example-2.com as a single session. It also allows you fix an issue so that when a user has to go to an off-site hosted payment gateway to finish a purchase it doesn't count it as referral traffic from that gateway but maintains the visit as part of the same session.) It is required that the other site includes a Google Analytics tracker with the same UA Code.",
                  "ga-premium"
                ),
                '<a href="https://www.monsterinsights.com/docs/setup-cross-domain-tracking/" target="_blank">',
                "</a>"
              ),
              text_tooltip_tag_links_in_rss: Object(c["d"])(
                Object(c["a"])(
                  "Do not use this feature if you use FeedBurner, as FeedBurner can do this automatically and better than this plugin can. Check this %1$shelp page%2$s for info on how to enable this feature in FeedBurner.",
                  "ga-premium"
                ),
                '<a href="https://support.google.com/feedburner/answer/165769?hl=en&ref_topic=13075" target="_blank" rel="noopener noreferrer">',
                "</a>"
              ),
              text_add_domain: Object(c["a"])("Add domain", "ga-premium"),
              domain_repeater_structure: [
                {
                  name: "domain",
                  label: Object(c["d"])(
                    Object(c["a"])("Domain (example: %s)", "ga-premium"),
                    "monsterinsights.com"
                  ),
                  pattern: new RegExp(
                    "^(?!(?:.+)\\." +
                      t +
                      "$|" +
                      t +
                      "$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]$"
                  ),
                  error: Object(c["d"])(
                    Object(c["a"])(
                      "Please enter domain names only ( example: example.com not http://example.com ) and not current site domain ( %s ).",
                      "ga-premium"
                    ),
                    t.replace("\\", "")
                  ),
                  prevent_duplicates: !0,
                },
              ],
              text_cross_domain: Object(c["a"])(
                "Cross Domain Tracking",
                "ga-premium"
              ),
              text_cross_domain_description: Object(c["d"])(
                Object(c["a"])(
                  "Cross domain tracking makes it possible for Analytics to see sessions on two related sites as a single session. More info on specific setup steps can be found in our %1$sknowledge base%2$s.",
                  "ga-premium"
                ),
                '<a href="' +
                  this.$getUrl(
                    "settings",
                    "cross-domain",
                    "https://www.monsterinsights.com/docs/setup-cross-domain-tracking/"
                  ) +
                  '" target="_blank" rel="noopener noreferrer">',
                "</a>"
              ),
            }
          );
        },
        computed: _t({}, Object(l["b"])({ addons: "$_addons/addons" }), {
          isAddonActive: function () {
            return (
              !!this.addons["eu-compliance"] &&
              this.addons["eu-compliance"].active
            );
          },
        }),
      },
      bt = Ct,
      ft = Object(b["a"])(bt, N, W, !1, null, null, null),
      vt = ft.exports,
      xt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "main",
          {
            staticClass:
              "monsterinsights-settings-content monsterinsights-settings-ecommerce",
          },
          [
            s("settings-block", { attrs: { title: t.text_ecommerce_title } }, [
              t.isAddonActive("ecommerce")
                ? s(
                    "div",
                    [
                      s("p", [
                        s("span", {
                          staticClass: "monsterinsights-dark",
                          domProps: { textContent: t._s(t.text_setup_title) },
                        }),
                        s("br"),
                        s("span", {
                          domProps: {
                            innerHTML: t._s(t.text_setup_description),
                          },
                        }),
                      ]),
                      s("div", { staticClass: "monsterinsights-separator" }),
                      s("settings-input-checkbox", {
                        attrs: {
                          name: "enhanced_ecommerce",
                          label: t.text_label_enhanced_ecommerce,
                          tooltip: t.text_tooltip_enhanced_ecommerce,
                        },
                      }),
                      s("div", { staticClass: "monsterinsights-separator" }),
                      s("settings-input-checkbox", {
                        attrs: {
                          faux: !0,
                          default: t.isAddonActive("woocommerce"),
                          label: t.isAddonActive("woocommerce")
                            ? t.text_label_woocommerce
                            : t.text_label_woocommerce_disabled,
                          faux_tooltip: t.text_ecommerce_faux_tooltip,
                          faux_tooltip_off: t.text_woocommerce_faux_tooltip,
                        },
                      }),
                      s("div", { staticClass: "monsterinsights-separator" }),
                      s("settings-input-checkbox", {
                        attrs: {
                          faux: !0,
                          default: t.isAddonActive("easy_digital_downloads"),
                          label: t.isAddonActive("easy_digital_downloads")
                            ? t.text_label_edd
                            : t.text_label_edd_disabled,
                          faux_tooltip: t.text_ecommerce_faux_tooltip,
                          faux_tooltip_off: t.text_edd_faux_tooltip,
                        },
                      }),
                      s("div", { staticClass: "monsterinsights-separator" }),
                      s("settings-input-checkbox", {
                        attrs: {
                          faux: !0,
                          default: t.isAddonActive("memberpress"),
                          label: t.isAddonActive("memberpress")
                            ? t.text_label_memberpress
                            : t.text_label_memberpress_disabled,
                          faux_tooltip: t.text_ecommerce_faux_tooltip,
                          faux_tooltip_off: t.text_memberpress_faux_tooltip,
                        },
                      }),
                      s("div", { staticClass: "monsterinsights-separator" }),
                      s("settings-input-checkbox", {
                        attrs: {
                          faux: !0,
                          default: t.isAddonActive("lifterlms"),
                          label: t.isAddonActive("lifterlms")
                            ? t.text_label_lifterlms
                            : t.text_label_lifterlms_disabled,
                          faux_tooltip: t.text_ecommerce_faux_tooltip,
                          faux_tooltip_off: t.text_lifterlms_faux_tooltip,
                        },
                      }),
                      s("div", { staticClass: "monsterinsights-separator" }),
                      s("settings-input-checkbox", {
                        attrs: {
                          faux: !0,
                          default: t.isAddonActive("givewp"),
                          label: t.isAddonActive("givewp")
                            ? t.text_label_givewp
                            : t.text_label_givewp_disabled,
                          faux_tooltip: t.text_ecommerce_faux_tooltip,
                          faux_tooltip_off: t.text_givewp_faux_tooltip,
                        },
                      }),
                      t.isAddonActive("givewp_google_analytics")
                        ? s("span", {
                            staticClass: "monsterinsights-alert",
                            domProps: {
                              innerHTML: t._s(
                                t.text_alert_givewp_analytics_active
                              ),
                            },
                          })
                        : t._e(),
                      s("div", { staticClass: "monsterinsights-separator" }),
                      s("settings-input-checkbox", {
                        attrs: {
                          faux: !0,
                          default: t.isAddonActive("rcp"),
                          label: t.isAddonActive("rcp")
                            ? t.text_label_rcp
                            : t.text_label_rcp_disabled,
                          faux_tooltip: t.text_ecommerce_faux_tooltip,
                          faux_tooltip_off: t.text_rcp_faux_tooltip,
                        },
                      }),
                    ],
                    1
                  )
                : s(
                    "div",
                    [
                      s("settings-addon-disabled", [
                        s("span", {
                          domProps: { innerHTML: t._s(t.text_addon_inactive) },
                        }),
                      ]),
                    ],
                    1
                  ),
            ]),
            t.isAddonActive("ecommerce")
              ? s(
                  "settings-block",
                  { attrs: { title: t.text_user_id_title } },
                  [
                    s("p", {
                      staticClass: "monsterinsights-settings-block-description",
                      domProps: { innerHTML: t._s(t.getUserIdDescription()) },
                    }),
                    s("div", { staticClass: "monsterinsights-separator" }),
                    s("settings-input-checkbox", {
                      attrs: {
                        name: "userid",
                        faux: t.getUserIdFaux(),
                        default: !1,
                        label: t.text_label_user_id,
                      },
                    }),
                  ],
                  1
                )
              : t._e(),
          ],
          1
        );
      },
      Ot = [];
    function yt(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function wt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? yt(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : yt(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var jt = {
        name: "SettingsTabEcommerce",
        components: {
          SettingsInputCheckbox: R["a"],
          SettingsAddonDisabled: et,
          SettingsBlock: v,
        },
        data: function () {
          return {
            text_ecommerce_title: Object(c["a"])(
              "eCommerce Tracking",
              "ga-premium"
            ),
            text_addon_inactive: Object(c["d"])(
              Object(c["a"])(
                "In order to use the eCommerce tracking features, please %1$sinstall and activate%2$s the eCommerce addon.",
                "ga-premium"
              ),
              '<a href="' + this.$mi.addons_url + '">',
              "</a>"
            ),
            text_setup_title: Object(c["a"])(
              "Setup Instructions",
              "ga-premium"
            ),
            text_setup_description: Object(c["d"])(
              Object(c["a"])(
                "In order to enable eCommerce tracking, please make sure you have followed %1$sthese steps%2$s. Once this has been completed, tracking will occur automatically. There are no settings required.",
                "ga-premium"
              ),
              '<a href="https://www.monsterinsights.com/docs/installation-guide-for-google-analytics-ecommerce-tracking/" target="_blank">',
              "</a>"
            ),
            text_label_enhanced_ecommerce: Object(c["a"])(
              "Use Enhanced eCommerce.",
              "ga-premium"
            ),
            text_tooltip_enhanced_ecommerce: Object(c["d"])(
              Object(c["a"])(
                "Enhanced eCommerce allows you to have even more detailed eCommerce reports in Google Analytics. See the %1$ssetup guide for enhanced eCommerce%2$s and make any needed changes.",
                "ga-premium"
              ),
              '<a href="https://www.monsterinsights.com/docs/installation-guide-for-google-analytics-ecommerce-tracking/" target="_blank">',
              "</a>"
            ),
            text_label_woocommerce: Object(c["d"])(
              Object(c["a"])(
                "%1$sWooCommerce%2$s has been detected and eCommerce data is being tracked.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_label_woocommerce_disabled: Object(c["d"])(
              Object(c["a"])(
                "%1$sWooCommerce%2$s has not been detected and eCommerce data is not being tracked.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_label_edd: Object(c["d"])(
              Object(c["a"])(
                "%1$sEasy Digital Downloads%2$s has been detected and eCommerce data is being tracked.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_label_edd_disabled: Object(c["d"])(
              Object(c["a"])(
                "%1$sEasy Digital Downloads%2$s has not been detected and eCommerce data is not being tracked.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_label_memberpress: Object(c["d"])(
              Object(c["a"])(
                "%1$sMemberPress%2$s has been detected and eCommerce data is being tracked.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_label_memberpress_disabled: Object(c["d"])(
              Object(c["a"])(
                "%1$sMemberPress%2$s has not been detected and eCommerce data is not being tracked.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_label_lifterlms: Object(c["d"])(
              Object(c["a"])(
                "%1$sLifterLMS%2$s has been detected and eCommerce data is being tracked.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_label_givewp: Object(c["d"])(
              Object(c["a"])(
                "%1$sGiveWP%2$s has been detected and eCommerce data is being tracked.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_label_rcp: Object(c["d"])(
              Object(c["a"])(
                "%1$sRestrict Content Pro%2$s has been detected and eCommerce data is being tracked.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_label_lifterlms_disabled: Object(c["d"])(
              Object(c["a"])(
                "%1$sLifterLMS%2$s has not been detected and eCommerce data is not being tracked.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_label_givewp_disabled: Object(c["d"])(
              Object(c["a"])(
                "%1$sGiveWP%2$s has not been detected and eCommerce data is not being tracked.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_label_rcp_disabled: Object(c["d"])(
              Object(c["a"])(
                "%1$sRestrict Content Pro%2$s has not been detected and eCommerce data is not being tracked.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_user_id_title: Object(c["a"])(
              "User ID Tracking",
              "ga-premium"
            ),
            text_user_id_description: Object(c["d"])(
              Object(c["a"])(
                "To the extent that Google allows webmasters to discern single users, this setting allows you to identify users by their WordPress user ID if logged-in. To use this feature, you will need to turn this feature on in Google Analytics. %1$sRead our step by step directions%2$s.",
                "ga-premium"
              ),
              '<a href="https://www.monsterinsights.com/docs/how-to-setup-user-tracking/" target="_blank">',
              "</a>"
            ),
            text_user_id_description_eu_enabled: Object(c["a"])(
              "Because you have the EU Compliance addon installed, MonsterInsights has disabled the User ID tracking feature.",
              "ga-premium"
            ),
            text_label_user_id: Object(c["a"])(
              "Enable User ID tracking.",
              "ga-premium"
            ),
            text_woocommerce_faux_tooltip: Object(c["a"])(
              "When WooCommerce is activated, MonsterInsights will detect it and automatically turn on tracking for it.",
              "ga-premium"
            ),
            text_edd_faux_tooltip: Object(c["a"])(
              "When Easy Digital Downloads is activated, MonsterInsights will detect it and automatically turn on tracking for it.",
              "ga-premium"
            ),
            text_memberpress_faux_tooltip: Object(c["a"])(
              "When MemberPress is activated, MonsterInsights will detect it and automatically turn on tracking for it.",
              "ga-premium"
            ),
            text_lifterlms_faux_tooltip: Object(c["a"])(
              "When LifterLMS is activated, MonsterInsights will detect it and automatically turn on tracking for it.",
              "ga-premium"
            ),
            text_lifterlms_rcp_tooltip: Object(c["a"])(
              "When Restrict Content Pro is activated, MonsterInsights will detect it and automatically turn on tracking for it.",
              "ga-premium"
            ),
            text_givewp_faux_tooltip: Object(c["a"])(
              "When LifterLMS is activated, MonsterInsights will detect it and automatically turn on tracking for it.",
              "ga-premium"
            ),
            text_ecommerce_faux_tooltip: Object(c["a"])(
              "Deactivate the eCommerce addon to disable eCommerce tracking.",
              "ga-premium"
            ),
            text_alert_givewp_analytics_active: Object(c["d"])(
              Object(c["a"])(
                "Attention: It is advised to disable %1$sGive - Google Analytics Donation Tracking%2$s plugin. Which may interfere with the tracking done by MonsterInsights.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
          };
        },
        computed: wt({}, Object(l["b"])({ addons: "$_addons/addons" })),
        methods: {
          isAddonActive: function (t) {
            return !!this.addons[t] && this.addons[t].active;
          },
          getUserIdDescription: function () {
            return this.isAddonActive("eu-compliance")
              ? this.text_user_id_description_eu_enabled
              : this.text_user_id_description;
          },
          getUserIdFaux: function () {
            return this.isAddonActive("eu-compliance");
          },
        },
      },
      kt = jt,
      Pt = Object(b["a"])(kt, xt, Ot, !1, null, null, null),
      St = Pt.exports,
      $t = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "main",
          {
            staticClass: "monsterinsights-settings-content settings-publisher",
          },
          [
            s(
              "settings-block",
              { attrs: { title: t.text_affiliate_title } },
              [
                s(
                  "p",
                  [
                    s("span", {
                      domProps: {
                        innerHTML: t._s(t.text_affiliate_repeater_description),
                      },
                    }),
                    s("settings-info-tooltip", {
                      attrs: { content: t.text_affiliate_description_tooltip },
                    }),
                  ],
                  1
                ),
                s("settings-input-repeater", {
                  attrs: {
                    structure: t.repeater_structure,
                    name: "affiliate_links",
                    data: t.settings["affiliate_links"],
                  },
                }),
              ],
              1
            ),
            s("settings-input-ads"),
            s("settings-input-amp"),
            s("settings-input-fbia"),
            t.isLoadHeadlineAnalyzerSettings
              ? s(
                  "settings-block",
                  { attrs: { title: t.text_headline_analyzer } },
                  [
                    s("p", [
                      s("span", {
                        domProps: {
                          innerHTML: t._s(t.text_headline_analyzer_description),
                        },
                      }),
                    ]),
                    s("settings-input-checkbox", {
                      attrs: {
                        name: "disable_headline_analyzer",
                        label: t.text_disable_headline_analyzer,
                      },
                    }),
                  ],
                  1
                )
              : t._e(),
          ],
          1
        );
      },
      Ht = [],
      At = s("93ec"),
      Lt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "settings-block",
          { attrs: { title: t.text_ads_title } },
          [
            t.isAddonActive("ads")
              ? [
                  s("p", [
                    s("span", {
                      staticClass: "monsterinsights-dark",
                      domProps: { textContent: t._s(t.text_ads_adsense_title) },
                    }),
                    s("br"),
                    s("span", {
                      domProps: {
                        innerHTML: t._s(t.text_ads_adsense_description),
                      },
                    }),
                  ]),
                  s("settings-input-checkbox", {
                    attrs: {
                      name: "track_adsense",
                      faux: !0,
                      label: t.text_ads_adsense_label,
                      faux_tooltip: t.text_ads_addon_faux_tooltip,
                    },
                  }),
                  s("br"),
                  s("br"),
                  s("p", [
                    s("span", {
                      staticClass: "monsterinsights-dark",
                      domProps: {
                        textContent: t._s(t.text_title_ads_conversion_id),
                      },
                    }),
                    s("br"),
                    s("span", {
                      domProps: {
                        innerHTML: t._s(t.text_ads_conversion_id_description),
                      },
                    }),
                  ]),
                  s("settings-input-text", {
                    attrs: {
                      default_value: "",
                      name: "gtag_ads_conversion_id",
                      format: t.conversionIdFormat,
                    },
                  }),
                ]
              : s("settings-addon-disabled", [
                  s("span", {
                    domProps: { innerHTML: t._s(t.text_ads_addon_disabled) },
                  }),
                ]),
          ],
          2
        );
      },
      Tt = [];
    function Mt(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Et(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Mt(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Mt(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Vt = {
        name: "SettingsInputAds",
        components: {
          SettingsAddonDisabled: et,
          SettingsInputCheckbox: R["a"],
          SettingsBlock: v,
          SettingsInputText: G["a"],
        },
        data: function () {
          return {
            text_ads_title: Object(c["a"])("Ads Tracking", "ga-premium"),
            text_ads_adsense_title: Object(c["a"])(
              "Google AdSense Tracking",
              "ga-premium"
            ),
            text_ads_adsense_description: Object(c["d"])(
              Object(c["a"])(
                "Requires integration of your Analytics and AdSense account. For how to do this, %1$ssee this help page%2$s.",
                "ga-premium"
              ),
              '<a href="' +
                this.$getUrl(
                  "settings-panel",
                  "ads-input",
                  "https://www.monsterinsights.com/how-to-add-google-adsense-to-your-wordpress-site/"
                ) +
                '" target="_blank">',
              "</a>"
            ),
            text_ads_adsense_label: Object(c["a"])(
              "Enable Google AdSense Tracking",
              "ga-premium"
            ),
            text_ads_addon_disabled: Object(c["d"])(
              Object(c["a"])(
                "In order to use the ads tracking features, please %1$sinstall and activate%2$s the ads addon.",
                "ga-premium"
              ),
              '<a href="' + this.$mi.addons_url + '">',
              "</a>"
            ),
            text_ads_addon_faux_tooltip: Object(c["a"])(
              "Deactivate the Ads Addon to disable",
              "ga-premium"
            ),
            text_title_ads_conversion_id: Object(c["a"])(
              "Conversion ID",
              "ga-premium"
            ),
            text_ads_conversion_id_description: Object(c["d"])(
              Object(c["a"])(
                "Add your Google Ads Conversion ID. Format eg: %1$sAW-123456789%2$s",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            conversionIdFormat: new RegExp("^$|^AW-[0-9]+$"),
          };
        },
        computed: Et({}, Object(l["b"])({ addons: "$_addons/addons" })),
        methods: {
          isAddonActive: function (t) {
            return !!this.addons[t] && this.addons[t].active;
          },
        },
      },
      Dt = Vt,
      It = Object(b["a"])(Dt, Lt, Tt, !1, null, null, null),
      Bt = It.exports,
      zt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "settings-block",
          { attrs: { title: t.text_amp_title } },
          [
            t.isAddonActive("amp") && t.isAddonActive("google_amp")
              ? [
                  s("settings-input-checkbox", {
                    attrs: { faux: !0, label: t.text_amp_label },
                  }),
                ]
              : t.isAddonActive("amp")
              ? s("settings-addon-disabled", [
                  s("span", {
                    domProps: { innerHTML: t._s(t.text_amp_disabled) },
                  }),
                ])
              : s("settings-addon-disabled", [
                  s("span", {
                    domProps: { innerHTML: t._s(t.text_amp_addon_disabled) },
                  }),
                ]),
          ],
          2
        );
      },
      Zt = [];
    function Ut(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Ft(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ut(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Ut(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Nt = {
        name: "SettingsInputAmp",
        components: {
          SettingsAddonDisabled: et,
          SettingsInputCheckbox: R["a"],
          SettingsBlock: v,
        },
        data: function () {
          return {
            text_amp_title: Object(c["a"])("Google AMP", "ga-premium"),
            text_amp_label: Object(c["a"])(
              "AMP setup has been detected and tracking is occurring automatically. No setup required.",
              "ga-premium"
            ),
            text_amp_upsell: Object(c["a"])(
              "Want to use track users visiting your AMP pages? By upgrading to MonsterInsights Pro, you can enable AMP page tracking.",
              "ga-premium"
            ),
            text_amp_disabled: Object(c["d"])(
              Object(c["a"])(
                "In order to use this feature you need to %1$sinstall the official Google-developed AMP plugin for WordPress.%2$s",
                "ga-premium"
              ),
              '<a href="' + this.$mi.install_amp_url + '">',
              "</a>"
            ),
            text_amp_addon_disabled: Object(c["d"])(
              Object(c["a"])(
                "In order to use this feature you need to %1$sinstall & activate the MonsterInsights AMP Addon.%2$s",
                "ga-premium"
              ),
              '<a href="' + this.$mi.addons_url + '">',
              "</a>"
            ),
          };
        },
        computed: Ft({}, Object(l["b"])({ addons: "$_addons/addons" })),
        methods: {
          isAddonActive: function (t) {
            return !!this.addons[t] && this.addons[t].active;
          },
        },
      },
      Wt = Nt,
      Rt = Object(b["a"])(Wt, zt, Zt, !1, null, null, null),
      Gt = Rt.exports,
      qt = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "settings-block",
          { attrs: { title: t.text_fbia_title } },
          [
            t.isAddonActive("facebook-instant-articles") &&
            t.isAddonActive("instant_articles")
              ? s("settings-input-checkbox", {
                  attrs: {
                    faux: !0,
                    label: t.text_fbia_label,
                    faux_tooltip: t.text_fbia_addon_faux_tooltip,
                  },
                })
              : t.isAddonActive("facebook-instant-articles")
              ? s("settings-addon-disabled", [
                  s("span", {
                    domProps: { innerHTML: t._s(t.text_fbia_disabled) },
                  }),
                ])
              : s("settings-addon-disabled", [
                  s("span", {
                    domProps: { innerHTML: t._s(t.text_fbia_addon_disabled) },
                  }),
                ]),
          ],
          1
        );
      },
      Yt = [];
    function Kt(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Xt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Kt(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Kt(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Jt = {
        name: "SettingsInputAmp",
        components: {
          SettingsAddonDisabled: et,
          SettingsInputCheckbox: R["a"],
          SettingsBlock: v,
        },
        data: function () {
          return {
            text_fbia_title: Object(c["a"])(
              "Facebook Instant Articles",
              "ga-premium"
            ),
            text_fbia_label: Object(c["a"])(
              "Instant Articles setup has been detected and tracking is occurring automatically. No setup required.",
              "ga-premium"
            ),
            text_fbia_disabled: Object(c["d"])(
              Object(c["a"])(
                "In order to use this feature you need to %1$sinstall the Instant Articles for WP plugin by Automattic.%2$s",
                "ga-premium"
              ),
              '<a href="' + this.$mi.install_fbia_url + '">',
              "</a>"
            ),
            text_fbia_addon_disabled: Object(c["d"])(
              Object(c["a"])(
                "In order to use the Facebook Instant Articles integration features, please %1$sinstall and activate%2$s the Facebook Instant Articles addon.",
                "ga-premium"
              ),
              '<a href="' + this.$mi.addons_url + '">',
              "</a>"
            ),
            text_fbia_addon_faux_tooltip: Object(c["a"])(
              "Deactivate the Facebook Instant Articles Addon to disable",
              "ga-premium"
            ),
          };
        },
        computed: Xt({}, Object(l["b"])({ addons: "$_addons/addons" })),
        methods: {
          isAddonActive: function (t) {
            return !!this.addons[t] && this.addons[t].active;
          },
        },
      },
      Qt = Jt,
      te = Object(b["a"])(Qt, qt, Yt, !1, null, null, null),
      ee = te.exports;
    function se(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function ie(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? se(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : se(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var ne = {
        name: "SettingsTabPublisher",
        components: {
          SettingsInputCheckbox: R["a"],
          SettingsInfoTooltip: At["a"],
          SettingsInputRepeater: lt["a"],
          SettingsBlock: v,
          SettingsInputAds: Bt,
          SettingsInputAmp: Gt,
          SettingsInputFbia: ee,
        },
        data: function () {
          return {
            repeater_structure: [
              {
                name: "path",
                label: Object(c["d"])(
                  Object(c["a"])("Path (example: %s)", "ga-premium"),
                  "/go/"
                ),
                pattern: /^\/\S+$/,
                error: Object(c["a"])(
                  "Path has to start with a / and have no spaces",
                  "ga-premium"
                ),
              },
              {
                name: "label",
                label: Object(c["d"])(
                  Object(c["a"])("Label (example: %s)", "ga-premium"),
                  "aff"
                ),
                pattern: /^\S+$/,
                error: Object(c["a"])(
                  "Label can't contain any spaces",
                  "ga-premium"
                ),
              },
            ],
            text_affiliate_title: Object(c["a"])(
              "Affiliate Links",
              "ga-premium"
            ),
            text_affiliate_description_tooltip: Object(c["d"])(
              Object(c["a"])(
                'This allows you to track custom affiliate links. A path of /go/ would match urls that start with that. The label is appended onto the end of the string "outbound-link-", to provide unique labels for these links in Google Analytics. Complete documentation on affiliate links is available %1$shere%2$s.',
                "ga-premium"
              ),
              '<a href="' +
                this.$getUrl(
                  "settings-panel",
                  "publisher-tab",
                  "https://www.monsterinsights.com/how-to-set-up-affiliate-link-tracking-in-wordpress/"
                ) +
                '" target="_blank">',
              "</a>"
            ),
            text_affiliate_repeater_description: Object(c["a"])(
              "Our affiliate link tracking works by setting path for internal links to track as outbound links.",
              "ga-premium"
            ),
            default_affiliate_value: !1,
            text_headline_analyzer: Object(c["a"])(
              "Headline Analyzer",
              "ga-premium"
            ),
            text_headline_analyzer_description: Object(c["a"])(
              "The MonsterInsights Headline Analyzer tool in the Gutenberg editor enables you to write irresistible SEO-friendly headlines that drive traffic, social media shares, and rank better in search results.",
              "ga-premium"
            ),
            text_disable_headline_analyzer: Object(c["a"])(
              "Disable the Headline Analyzer",
              "ga-premium"
            ),
          };
        },
        computed: ie({}, Object(l["b"])({ settings: "$_settings/settings" }), {
          isLoadHeadlineAnalyzerSettings: function () {
            return "false" !== this.$mi.load_headline_analyzer_settings;
          },
        }),
      },
      oe = ne,
      ae = Object(b["a"])(oe, $t, Ht, !1, null, null, null),
      re = ae.exports,
      le = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "main",
          {
            staticClass:
              "monsterinsights-settings-content monsterinsights-settings-conversions",
          },
          [
            s(
              "settings-block",
              {
                attrs: {
                  title: t.text_forms_title,
                  icon: "monstericon-eye-far",
                },
              },
              [
                t.isAddonActive("forms")
                  ? [
                      s("p", [
                        s("span", {
                          staticClass: "monsterinsights-dark",
                          domProps: {
                            textContent: t._s(t.text_forms_input_title),
                          },
                        }),
                        s("br"),
                        s("span", {
                          domProps: {
                            innerHTML: t._s(t.text_forms_input_description),
                          },
                        }),
                      ]),
                      s(
                        "settings-input-checkbox",
                        {
                          attrs: {
                            label: t.text_forms_input_label,
                            faux: !0,
                            faux_tooltip: t.text_forms_faux_tooltip,
                            faux_tooltip_off: t.text_forms_faux_tooltip_off,
                          },
                        },
                        [
                          s(
                            "template",
                            { slot: "collapsible" },
                            [
                              s("settings-input-checkbox", {
                                attrs: {
                                  faux: !0,
                                  default: t.isAddonActive("wpforms-lite"),
                                  label: t.getWPFormsLabel(),
                                  faux_tooltip: t.text_wpforms_faux_tooltip,
                                  faux_tooltip_off:
                                    t.text_wpforms_faux_tooltip_off,
                                },
                              }),
                              s("div", {
                                staticClass: "monsterinsights-separator",
                              }),
                              s("settings-input-checkbox", {
                                attrs: {
                                  faux: !0,
                                  default: t.isAddonActive("gravity_forms"),
                                  label: t.getGravityFormsLabel(),
                                  faux_tooltip:
                                    t.text_gravity_forms_faux_tooltip,
                                  faux_tooltip_off:
                                    t.text_gravity_forms_faux_tooltip_off,
                                },
                              }),
                              s("div", {
                                staticClass: "monsterinsights-separator",
                              }),
                              s("settings-input-checkbox", {
                                attrs: {
                                  faux: !0,
                                  default: t.isAddonActive("formidable_forms"),
                                  label: t.getFormidableFormsLabel(),
                                  faux_tooltip:
                                    t.text_formidable_forms_faux_tooltip,
                                  faux_tooltip_off:
                                    t.text_formidable_forms_faux_tooltip_off,
                                },
                              }),
                              s("div", {
                                staticClass: "monsterinsights-separator",
                              }),
                              s("settings-input-checkbox", {
                                attrs: {
                                  faux: !0,
                                  label: t.text_forms_misc_label,
                                  faux_tooltip: t.text_forms_misc_faux_tooltip,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      ),
                    ]
                  : s("settings-addon-disabled", [
                      s("span", {
                        domProps: { innerHTML: t._s(t.text_forms_disabled) },
                      }),
                    ]),
              ],
              2
            ),
            s(
              "settings-block",
              {
                attrs: {
                  id: "monsterinsights-settings-block-google-optimize",
                  title: t.text_optimize_title,
                  icon: "monstericon-clone",
                },
              },
              [
                t.isAddonActive("google-optimize")
                  ? [
                      s("settings-input-text", {
                        attrs: {
                          name: "goptimize_container",
                          format: /GTM-|OPT-\w+/gm,
                          label: t.text_optimize_input_title,
                          description: t.text_optimize_input_description,
                          tooltip: t.text_optimize_input_tooltip,
                        },
                      }),
                      s("div", { staticClass: "monsterinsights-separator" }),
                      s(
                        "p",
                        [
                          s("span", {
                            staticClass: "monsterinsights-dark",
                            domProps: {
                              textContent: t._s(t.text_optimize_async_title),
                            },
                          }),
                          s("br"),
                          s("span", {
                            domProps: {
                              innerHTML: t._s(
                                t.text_optimize_async_description
                              ),
                            },
                          }),
                          s("settings-info-tooltip", {
                            attrs: { content: t.text_optimize_async_tooltip },
                          }),
                        ],
                        1
                      ),
                      s(
                        "settings-input-checkbox",
                        {
                          attrs: {
                            name: "goptimize_pagehide",
                            label: t.text_optimize_async_label,
                          },
                        },
                        [
                          s(
                            "template",
                            { slot: "collapsible" },
                            [
                              s("settings-input-text", {
                                attrs: {
                                  type: "number",
                                  name: "goptimize_pagehide_speed",
                                  label: t.text_optimize_async_time_title,
                                  description:
                                    t.text_optimize_async_time_description,
                                  tooltip: t.text_optimize_async_time_tooltip,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      ),
                      s("div", { staticClass: "monsterinsights-separator" }),
                      s(
                        "p",
                        [
                          s("span", {
                            staticClass: "monsterinsights-dark",
                            domProps: {
                              textContent: t._s(
                                t.text_optimize_load_conditionally_title
                              ),
                            },
                          }),
                          s("br"),
                          s("span", {
                            domProps: {
                              innerHTML: t._s(
                                t.text_optimize_load_conditionally_description
                              ),
                            },
                          }),
                          s("settings-info-tooltip", {
                            attrs: {
                              content: t.text_optimize_condition_tooltip,
                            },
                          }),
                        ],
                        1
                      ),
                      s(
                        "settings-input-checkbox",
                        {
                          attrs: {
                            name: "goptimize_load_conditionally",
                            label: t.text_optimize_enable_condition_label,
                          },
                          on: { checkboxChange: t.maybeDeleteConditions },
                        },
                        [
                          s(
                            "template",
                            { slot: "collapsible" },
                            [
                              s("settings-input-conditional-logic", {
                                attrs: {
                                  name: "goptimize_container_conditions",
                                  label: t.text_goptimize_conditions_area_title,
                                  new_rule_set_button_label:
                                    t.text_goptimize_conditions_rule_set_button_label,
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        2
                      ),
                    ]
                  : s("settings-addon-disabled", [
                      s("span", {
                        domProps: { innerHTML: t._s(t.text_optimize_disabled) },
                      }),
                    ]),
              ],
              2
            ),
            s(
              "settings-block",
              {
                attrs: {
                  title: t.text_dimesions_title,
                  icon: "monstericon-cog",
                },
              },
              [
                t.isAddonActive("dimensions")
                  ? [
                      s("p", {
                        domProps: {
                          innerHTML: t._s(t.text_dimesions_description_1),
                        },
                      }),
                      s("p", {
                        domProps: {
                          innerHTML: t._s(t.text_dimesions_description_2),
                        },
                      }),
                      t.isAddonActive("eu-compliance")
                        ? s("p", [
                            s("strong", {
                              domProps: {
                                innerHTML: t._s(
                                  t.text_dimensions_eu_compliance
                                ),
                              },
                            }),
                          ])
                        : t._e(),
                      t.showYoastNotice
                        ? s("p", [
                            s("strong", {
                              domProps: {
                                innerHTML: t._s(t.text_yoast_disabled),
                              },
                            }),
                          ])
                        : t._e(),
                      s("settings-input-dimensions", {
                        attrs: { name: "custom_dimensions" },
                        on: {
                          showYoastNotice: function (e) {
                            t.showYoastNotice = !0;
                          },
                        },
                      }),
                    ]
                  : s("settings-addon-disabled", [
                      s("span", {
                        domProps: {
                          innerHTML: t._s(t.text_dimensions_disabled),
                        },
                      }),
                    ]),
              ],
              2
            ),
          ],
          1
        );
      },
      ce = [],
      pe = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-conditional-logic-container" },
          [
            s(
              "div",
              { staticClass: "monsterinsights-conditional-logic-header" },
              [
                s("p", [
                  s("span", { staticClass: "monsterinsights-dark" }, [
                    t._v(t._s(t.label)),
                  ]),
                  t.show_rules_number
                    ? s(
                        "span",
                        {
                          staticClass:
                            "monsterinsights-conditional-rule-sets-number",
                        },
                        [
                          s("strong", [
                            t._v(
                              t._s(t.conditions.length) +
                                " " +
                                t._s(
                                  1 != t.conditions.length
                                    ? t.text_rules
                                    : t.text_rule
                                ) +
                                " "
                            ),
                          ]),
                        ]
                      )
                    : t._e(),
                  s("br"),
                  s("span", [t._v(t._s(t.description))]),
                ]),
              ]
            ),
            t._l(t.conditions, function (e, i) {
              return s(
                "div",
                {
                  key: i,
                  staticClass: "monsterinsights-conditional-logic-rule",
                },
                [
                  0 != i
                    ? s("div", {
                        staticClass: "monsterinsights-condition-rule-separator",
                        domProps: { textContent: t._s(t.text_or) },
                      })
                    : t._e(),
                  t._l(e.rule_conditions, function (e, n) {
                    return s(
                      "div",
                      {
                        key: n,
                        staticClass:
                          "monsterinsights-conditional-logic-repeater-row",
                      },
                      [
                        s(
                          "div",
                          {
                            staticClass:
                              "monsterinsights-settings-conditional-column",
                          },
                          [
                            s(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      t.conditions[i].rule_conditions[n]
                                        .based_on,
                                    expression:
                                      "conditions[ruleIndex].rule_conditions[condIndex].based_on",
                                  },
                                ],
                                staticClass:
                                  "monsterinsights-settings-conditional-input-field",
                                on: {
                                  change: [
                                    function (e) {
                                      var s = Array.prototype.filter
                                        .call(e.target.options, function (t) {
                                          return t.selected;
                                        })
                                        .map(function (t) {
                                          var e =
                                            "_value" in t ? t._value : t.value;
                                          return e;
                                        });
                                      t.$set(
                                        t.conditions[i].rule_conditions[n],
                                        "based_on",
                                        e.target.multiple ? s : s[0]
                                      );
                                    },
                                    function (e) {
                                      return t.resetOperatorDropdown(i, n);
                                    },
                                  ],
                                },
                              },
                              t._l(t.baseOptions, function (e) {
                                return s("option", {
                                  key: e.value,
                                  domProps: {
                                    value: e.value,
                                    textContent: t._s(e.label),
                                  },
                                });
                              }),
                              0
                            ),
                          ]
                        ),
                        s(
                          "div",
                          {
                            staticClass:
                              "monsterinsights-settings-conditional-column",
                          },
                          [
                            s(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value:
                                      t.conditions[i].rule_conditions[n]
                                        .operator,
                                    expression:
                                      "conditions[ruleIndex].rule_conditions[condIndex].operator",
                                  },
                                ],
                                staticClass:
                                  "monsterinsights-settings-conditional-input-field",
                                on: {
                                  change: [
                                    function (e) {
                                      var s = Array.prototype.filter
                                        .call(e.target.options, function (t) {
                                          return t.selected;
                                        })
                                        .map(function (t) {
                                          var e =
                                            "_value" in t ? t._value : t.value;
                                          return e;
                                        });
                                      t.$set(
                                        t.conditions[i].rule_conditions[n],
                                        "operator",
                                        e.target.multiple ? s : s[0]
                                      );
                                    },
                                    function (s) {
                                      return t.resetValueDropdown(
                                        e.value,
                                        i,
                                        n
                                      );
                                    },
                                  ],
                                },
                              },
                              t._l(t.operators[e.based_on], function (e, i) {
                                return s("option", {
                                  key: i,
                                  domProps: { value: i, textContent: t._s(e) },
                                });
                              }),
                              0
                            ),
                          ]
                        ),
                        "page" === e.based_on && t.isOperatorPage(e.operator)
                          ? s(
                              "div",
                              {
                                staticClass:
                                  "monsterinsights-settings-conditional-column",
                              },
                              [
                                s(
                                  "multiselect",
                                  {
                                    staticClass:
                                      "monsterinsights-settings-conditional-input-field",
                                    attrs: {
                                      "clear-on-select": !1,
                                      "close-on-select": !0,
                                      "internal-search": !1,
                                      loading: t.isLoading,
                                      "max-height": 600,
                                      options: t.pages,
                                      placeholder:
                                        t.text_search_pages_placeholder,
                                      searchable: !0,
                                      "show-no-results": !0,
                                      showLabels: !1,
                                      label: "title",
                                      "track-by": "id",
                                    },
                                    on: {
                                      close: t.updateSetting,
                                      "search-change": t.findPages,
                                    },
                                    model: {
                                      value:
                                        t.conditions[i].rule_conditions[n]
                                          .value,
                                      callback: function (e) {
                                        t.$set(
                                          t.conditions[i].rule_conditions[n],
                                          "value",
                                          e
                                        );
                                      },
                                      expression:
                                        "conditions[ruleIndex].rule_conditions[condIndex].value",
                                    },
                                  },
                                  [
                                    s("span", {
                                      attrs: { slot: "noResult" },
                                      domProps: {
                                        textContent: t._s(
                                          t.text_search_pages_not_found
                                        ),
                                      },
                                      slot: "noResult",
                                    }),
                                    s("span", {
                                      attrs: { slot: "noOptions" },
                                      domProps: {
                                        textContent: t._s(
                                          t.text_search_no_options
                                        ),
                                      },
                                      slot: "noOptions",
                                    }),
                                  ]
                                ),
                              ],
                              1
                            )
                          : "page" === e.based_on &&
                            t.isOperatorSlug(e.operator)
                          ? s(
                              "div",
                              {
                                staticClass:
                                  "monsterinsights-settings-conditional-column",
                              },
                              [
                                s("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value:
                                        t.conditions[i].rule_conditions[n]
                                          .value,
                                      expression:
                                        "conditions[ruleIndex].rule_conditions[condIndex].value",
                                    },
                                  ],
                                  staticClass:
                                    "monsterinsights-settings-conditional-input-field text-input",
                                  attrs: {
                                    type: "text",
                                    placeholder: "example-page",
                                  },
                                  domProps: {
                                    value:
                                      t.conditions[i].rule_conditions[n].value,
                                  },
                                  on: {
                                    change: t.updateSetting,
                                    input: function (e) {
                                      e.target.composing ||
                                        t.$set(
                                          t.conditions[i].rule_conditions[n],
                                          "value",
                                          e.target.value
                                        );
                                    },
                                  },
                                }),
                              ]
                            )
                          : s("div", {
                              staticClass:
                                "monsterinsights-settings-conditional-column",
                            }),
                        s("button", {
                          staticClass:
                            "monsterinsights-button add-new-condition",
                          domProps: { textContent: t._s(t.text_and) },
                          on: {
                            click: function (e) {
                              return t.addConditionRow(i);
                            },
                          },
                        }),
                        s(
                          "button",
                          {
                            staticClass: "remove-condition",
                            on: {
                              click: function (e) {
                                return t.removeConditionRow(i, n);
                              },
                            },
                          },
                          [s("i", { staticClass: "monstericon-times-circle" })]
                        ),
                      ]
                    );
                  }),
                ],
                2
              );
            }),
            s(
              "div",
              { staticClass: "monsterinsights-conditional-logic-footer" },
              [
                s("button", {
                  class: t.button_class,
                  domProps: { textContent: t._s(t.new_rule_set_button_label) },
                  on: { click: t.addRuleSet },
                }),
                t.error_notice.length
                  ? s("label", { staticClass: "monsterinsights-error" }, [
                      s("i", { staticClass: "monstericon-warning-triangle" }),
                      s("span", {
                        domProps: { innerHTML: t._s(t.error_notice) },
                      }),
                    ])
                  : t._e(),
              ]
            ),
          ],
          2
        );
      },
      ue = [];
    s("caad"),
      s("a434"),
      s("a9e3"),
      s("2532"),
      s("e01a"),
      s("d28b"),
      s("d3b7"),
      s("3ca3"),
      s("ddb0");
    function me(t) {
      return (
        (me =
          "function" === typeof Symbol && "symbol" === typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        me(t)
      );
    }
    function de(t) {
      return (
        (de =
          "function" === typeof Symbol && "symbol" === me(Symbol.iterator)
            ? function (t) {
                return me(t);
              }
            : function (t) {
                return t &&
                  "function" === typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : me(t);
              }),
        de(t)
      );
    }
    var ge = s("8e5f"),
      he = s.n(ge),
      _e = s("bc3a"),
      Ce = s.n(_e),
      be = s("f7fe"),
      fe = s.n(be);
    function ve(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function xe(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ve(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : ve(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Oe = {
        name: "SettingsInputConditionalLogic",
        components: { Multiselect: he.a },
        props: {
          name: String,
          label: String,
          description: String,
          based_on: {
            type: Array,
            default: function () {
              return ["page", "user"];
            },
          },
          max_rules: { type: Number, default: -1 },
          show_rules_number: { type: Boolean, default: !0 },
          new_rule_set_button_label: {
            type: String,
            default: Object(c["a"])("Add Rule", "ga-premium"),
          },
        },
        data: function () {
          return {
            pages: [],
            isLoading: !1,
            error_notice: "",
            operators: {
              page: {
                page_is: Object(c["a"])("Is", "ga-premium"),
                page_is_not: Object(c["a"])("Is Not", "ga-premium"),
                slug_contains: Object(c["a"])("Slug Contains", "ga-premium"),
                slug_not_contains: Object(c["a"])(
                  "Slug Does Not Contain",
                  "ga-premium"
                ),
                slug_starts_with: Object(c["a"])(
                  "Slug Starts With",
                  "ga-premium"
                ),
                slug_ends_with: Object(c["a"])("Slug Ends With", "ga-premium"),
              },
              user: {
                logged_in: Object(c["a"])("Logged In", "ga-premium"),
                not_logged_in: Object(c["a"])("Not Logged In", "ga-premium"),
              },
            },
            text_and: Object(c["a"])("AND", "ga-premium"),
            text_or: Object(c["a"])("OR", "ga-premium"),
            text_rule: Object(c["a"])("Rule", "ga-premium"),
            text_rules: Object(c["a"])("Rules", "ga-premium"),
            text_search_pages_placeholder: Object(c["a"])(
              "Select page/search",
              "ga-premium"
            ),
            text_search_pages_not_found: Object(c["a"])(
              "Oops! No page found.",
              "ga-premium"
            ),
            text_search_no_options: Object(c["a"])(
              "Search by page title",
              "ga-premium"
            ),
          };
        },
        computed: xe(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            auth: "$_auth/auth",
          }),
          {
            conditions: {
              get: function () {
                return (
                  this.settings[this.name] ||
                    i["a"].set(this.settings, this.name, []),
                  JSON.parse(JSON.stringify(this.settings[this.name]))
                );
              },
              set: function () {
                this.updateSetting();
              },
            },
            baseOptions: function () {
              var t = [];
              for (var e in this.based_on)
                t.push({ label: this.based_on[e], value: this.based_on[e] });
              return t;
            },
            userRoles: function () {
              var t = [
                {
                  label: Object(c["a"])("All Roles", "ga-premium"),
                  value: "all_roles",
                },
              ];
              for (var e in this.$mi.roles)
                t.push({ label: this.$mi.roles[e], value: e });
              return t;
            },
            has_ua: function () {
              var t = this.auth.network_ua
                ? this.auth.network_ua
                : this.auth.ua;
              return (
                t ||
                  (t = this.auth.network_manual_ua
                    ? this.auth.network_manual_ua
                    : this.auth.manual_ua),
                "" !== t
              );
            },
            disabled: function () {
              return !this.has_ua;
            },
            button_class: function () {
              var t = "monsterinsights-button";
              return (
                this.disabled && (t += " monsterinsights-button-disabled"), t
              );
            },
          }
        ),
        methods: {
          getDefaultRuleSet: function () {
            return {
              rule_logic: "or",
              rule_conditions: [this.getDefaultCondition()],
            };
          },
          getDefaultCondition: function () {
            return {
              based_on: this.based_on.includes("user") ? "user" : "page",
              operator: this.based_on.includes("user")
                ? "logged_in"
                : "page_is",
              value: this.based_on.includes("user") ? "all_roles" : "",
              logic: "and",
            };
          },
          addRuleSet: function () {
            ("undefined" !== typeof this.conditions &&
              this.conditions.length) ||
              (this.conditions = []),
              this.conditions.length !== this.max_rules
                ? (this.conditions.push(this.getDefaultRuleSet()),
                  this.updateSetting())
                : (this.error_notice = Object(c["d"])(
                    Object(c["a"])(
                      "You can add maximum %s rule set(s).",
                      "ga-premium"
                    ),
                    this.max_rules
                  ));
          },
          addConditionRow: function (t) {
            this.conditions[t].rule_conditions.push(this.getDefaultCondition()),
              this.updateSetting();
          },
          removeConditionRow: function (t, e) {
            this.conditions[t].rule_conditions.splice(e, 1),
              this.updateSetting();
          },
          resetOperatorDropdown: function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "",
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
            if (t >= 0 && e >= 0) {
              var s = this.conditions[t].rule_conditions[e].based_on;
              switch (s) {
                case "user":
                  (this.conditions[t].rule_conditions[e].operator =
                    "logged_in"),
                    (this.conditions[t].rule_conditions[e].value = "all_roles");
                  break;
                case "page":
                  (this.conditions[t].rule_conditions[e].operator = "page_is"),
                    (this.conditions[t].rule_conditions[e].value = "");
                  break;
              }
            }
            this.updateSetting();
          },
          resetValueDropdown: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "",
              s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : "";
            if (e >= 0 && s >= 0) {
              var i = this.conditions[e].rule_conditions[s].operator,
                n = !1;
              switch ((t && "object" === de(t) && (n = !0), i)) {
                case "logged_in":
                  this.conditions[e].rule_conditions[s].value = "all_roles";
                  break;
                case "not_logged_in":
                  this.conditions[e].rule_conditions[s].value = "";
                  break;
                case "page_is":
                case "page_is_not":
                  n || (this.conditions[e].rule_conditions[s].value = "");
                  break;
                case "slug_contains":
                case "slug_not_contains":
                case "slug_starts_with":
                case "slug_ends_with":
                  n && (this.conditions[e].rule_conditions[s].value = "");
                  break;
              }
            }
            this.updateSetting();
          },
          updateSetting: function () {
            var t = this;
            if (((this.isLoading = !1), this.disabled)) return !1;
            this.validateSettings(),
              this.$mi_saving_toast({}),
              this.$store
                .dispatch("$_settings/updateSettings", {
                  name: this.name,
                  value: this.conditions,
                })
                .then(function (e) {
                  e.success ? t.$mi_success_toast({}) : t.$mi_error_toast({});
                }),
              (this.error_notice = "");
          },
          validateSettings: function () {
            for (var t in this.conditions)
              this.isEmptyRuleSet(t) && this.conditions.splice(t, 1);
          },
          findPages: fe()(function (t) {
            var e = this;
            e.isLoading = !0;
            var s = new FormData();
            s.append("nonce", i["a"].prototype.$mi.nonce),
              s.append("action", "monsterinsights_get_posts"),
              s.append("keyword", t),
              Ce.a
                .post(this.$mi.ajax, s)
                .then(function (t) {
                  (e.pages = t.data.data), (e.isLoading = !1);
                })
                .catch(function () {
                  (e.isLoading = !1),
                    i["a"].prototype.$mi_error_toast({
                      title: Object(c["a"])("Can't load pages.", "ga-premium"),
                    });
                });
          }, 300),
          isEmptyRuleSet: function (t) {
            return !this.conditions[t].rule_conditions.length;
          },
          isOperatorPage: function (t) {
            return "page_is" === t || "page_is_not" === t;
          },
          isOperatorSlug: function (t) {
            return (
              "slug_contains" === t ||
              "slug_not_contains" === t ||
              "slug_starts_with" === t ||
              "slug_ends_with" === t
            );
          },
        },
      },
      ye = Oe,
      we = Object(b["a"])(ye, pe, ue, !1, null, null, null),
      je = we.exports,
      ke = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "monsterinsights-settings-input-repeater monsterinsights-settings-input-dimensions",
          },
          [
            s(
              "div",
              {
                staticClass:
                  "monsterinsights-settings-input-repeater-labels settings-input-repeater-row",
              },
              [
                s("label", { domProps: { textContent: t._s(t.text_type) } }),
                s("label", { domProps: { textContent: t._s(t.text_id) } }),
              ]
            ),
            s("div", { staticClass: "monsterinsights-separator" }),
            t._l(t.rows, function (e, i) {
              return [
                s("div", { key: i, class: t.rowClass(e.type) }, [
                  s(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.type,
                          expression: "row.type",
                        },
                      ],
                      attrs: { disabled: t.disabled },
                      on: {
                        change: [
                          function (s) {
                            var i = Array.prototype.filter
                              .call(s.target.options, function (t) {
                                return t.selected;
                              })
                              .map(function (t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e;
                              });
                            t.$set(e, "type", s.target.multiple ? i : i[0]);
                          },
                          t.updateSetting,
                        ],
                      },
                    },
                    t._l(t.getDimensions(e.type), function (e) {
                      return s("option", {
                        key: e.type,
                        attrs: { disabled: !e.enabled },
                        domProps: { value: e.type, textContent: t._s(e.title) },
                      });
                    }),
                    0
                  ),
                  s("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: e.id,
                        expression: "row.id",
                      },
                      {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: t.tooltip_data,
                        expression: "tooltip_data",
                      },
                    ],
                    attrs: {
                      type: "number",
                      max: t.getDimensionsCount(),
                      readonly: t.disabled,
                    },
                    domProps: { value: e.id },
                    on: {
                      change: t.updateSetting,
                      input: function (s) {
                        s.target.composing || t.$set(e, "id", s.target.value);
                      },
                    },
                  }),
                  s(
                    "button",
                    {
                      attrs: { title: t.text_remove_row },
                      on: {
                        click: function (e) {
                          return t.removeRow(i);
                        },
                      },
                    },
                    [s("i", { staticClass: "monstericon-times-circle" })]
                  ),
                ]),
                s("div", {
                  key: "separator-" + i,
                  staticClass: "monsterinsights-separator",
                }),
              ];
            }),
            t.has_errors
              ? s("label", { staticClass: "monsterinsights-error" }, [
                  s("i", { staticClass: "monstericon-warning-triangle" }),
                  s("span", { domProps: { innerHTML: t._s(t.has_errors) } }),
                ])
              : t._e(),
            t.rows.length < t.getDimensionsCount()
              ? s("button", {
                  directives: [
                    {
                      name: "tooltip",
                      rawName: "v-tooltip",
                      value: t.tooltip_data,
                      expression: "tooltip_data",
                    },
                  ],
                  class: t.button_class,
                  domProps: { textContent: t._s(t.text_add) },
                  on: { click: t.addRow },
                })
              : t._e(),
            s("span", {
              staticClass: "monsterinsights-dimensions-count",
              domProps: {
                textContent: t._s(
                  t.sprintf(t.text_using, t.rows.length, t.getDimensionsCount())
                ),
              },
            }),
          ],
          2
        );
      },
      Pe = [];
    s("c975"), s("4e82"), s("07ac"), s("e25e");
    function Se(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function $e(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Se(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Se(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var He = {
        name: "SettingsInputDimensions",
        props: { name: String },
        data: function () {
          return {
            has_errors: !1,
            current_index: 0,
            text_add: Object(c["a"])("Add New Custom Dimension", "ga-premium"),
            text_remove_row: Object(c["a"])("Remove row", "ga-premium"),
            text_type: Object(c["a"])("Type", "ga-premium"),
            text_id: Object(c["a"])("ID", "ga-premium"),
            text_using: Object(c["a"])(
              "You are using %1$d out of %2$d custom dimensions",
              "ga-premium"
            ),
            dimensions: JSON.parse(JSON.stringify(this.$mi.dimensions)),
          };
        },
        computed: $e(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            auth: "$_auth/auth",
          }),
          {
            has_ua: function () {
              var t = this.auth.network_ua
                ? this.auth.network_ua
                : this.auth.ua;
              return (
                t ||
                  (t = this.auth.network_manual_ua
                    ? this.auth.network_manual_ua
                    : this.auth.manual_ua),
                "" !== t
              );
            },
            rows: {
              get: function () {
                this.settings[this.name] ||
                  i["a"].set(this.settings, this.name, []),
                  Object === this.settings[this.name].constructor &&
                    i["a"].set(
                      this.settings,
                      this.name,
                      Object.values(this.settings[this.name])
                    );
                var t = JSON.parse(JSON.stringify(this.settings[this.name]));
                return (
                  this.updateAvailableDimensions(t),
                  this.maybeShowYoastNotice(t),
                  t
                );
              },
              set: function () {
                this.updateSetting();
              },
            },
            tooltip_data: function () {
              return {
                content: this.has_ua ? "" : this.$mi_need_to_auth,
                autoHide: !1,
                trigger: "hover focus click",
              };
            },
            disabled: function () {
              return !this.has_ua;
            },
            button_class: function () {
              var t = "monsterinsights-button";
              return (
                this.disabled && (t += " monsterinsights-button-disabled"), t
              );
            },
          }
        ),
        methods: {
          sprintf: c["d"],
          updateSetting: function () {
            var t = this;
            return (
              !this.disabled &&
              ((this.has_errors = this.validateSettings()),
              !this.has_errors &&
                (this.$mi_saving_toast({}),
                this.updateAvailableDimensions(),
                void this.$store
                  .dispatch("$_settings/updateSettings", {
                    name: this.name,
                    value: this.rows,
                  })
                  .then(function (e) {
                    e.success ? t.$mi_success_toast({}) : t.$mi_error_toast({});
                  })))
            );
          },
          addRow: function () {
            if (this.disabled) return !1;
            this.updateAvailableDimensions();
            var t = "";
            for (var e in this.dimensions)
              this.dimensions[e].enabled && (t = this.dimensions[e].type);
            var s = { id: this.getCurrentIndex(), type: t };
            this.rows.push(s),
              this.updateAvailableDimensions(),
              this.updateSetting();
          },
          removeRow: function (t) {
            this.rows.splice(t, 1), this.updateSetting();
          },
          updateAvailableDimensions: function (t) {
            var e = t || this.rows;
            if (e)
              for (var s in this.dimensions) {
                var i = this.$mi.dimensions[s].enabled;
                for (var n in e)
                  if (this.dimensions[s]["type"] === e[n]["type"]) {
                    i = !1;
                    break;
                  }
                this.dimensions[s]["enabled"] = i;
              }
          },
          validateSettings: function () {
            var t = [],
              e = !1;
            for (var s in this.rows)
              t.push(parseInt(this.rows[s].id)),
                "" === this.rows[s].id && (e = !0);
            if (e)
              return Object(c["a"])(
                "Each dimension needs to have an id set.",
                "ga-premium"
              );
            var i = t.filter(function (t, e, s) {
              return s.indexOf(t) === e;
            });
            return (
              i.length !== t.length &&
              Object(c["a"])(
                "The custom dimension IDs must be unique for each dimension.",
                "ga-premium"
              )
            );
          },
          getDimensionsCount: function () {
            var t = 0;
            for (var e in this.$mi.dimensions)
              this.$mi.dimensions[e]["enabled"] && t++;
            return t;
          },
          rowClass: function (t) {
            var e = "monsterinsights-settings-input-repeater-row";
            return (
              this.defaultDisabled(t) && (e += " monsterinsights-disabled-row"),
              e
            );
          },
          defaultDisabled: function (t) {
            for (var e in this.$mi.dimensions)
              if (
                this.$mi.dimensions[e].type === t &&
                !this.$mi.dimensions[e].enabled
              )
                return !0;
            return !1;
          },
          getCurrentIndex: function () {
            var t = [];
            for (var e in this.rows) t.push(this.rows[e]["id"]);
            if (
              (t.sort(function (t, e) {
                return t - e;
              }),
              0 === t.length)
            )
              return (this.current_index = 1), 1;
            for (var s = 1, i = 0; i < t.length; i++)
              if (t[i] - 1 !== i) {
                s = i + 1;
                break;
              }
            return (
              1 === s && (s = parseInt(t[t.length - 1], 10) + 1),
              (this.current_index = s),
              this.current_index
            );
          },
          getDimensions: function (t) {
            var e = [];
            for (var s in this.dimensions)
              (this.dimensions[s].enabled || t === this.dimensions[s].type) &&
                e.push(this.dimensions[s]);
            return e;
          },
          maybeShowYoastNotice: function (t) {
            if (t)
              for (var e in t)
                if (
                  ("seo_score" === t[e].type &&
                    this.defaultDisabled("seo_score")) ||
                  ("focus_keyword" === t[e].type &&
                    this.defaultDisabled("focus_keyword"))
                ) {
                  this.$emit("showYoastNotice");
                  break;
                }
          },
        },
      },
      Ae = He,
      Le = (s("b62a"), Object(b["a"])(Ae, ke, Pe, !1, null, "7e3cbe38", null)),
      Te = Le.exports;
    function Me(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Ee(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Me(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Me(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Ve = {
        name: "SettingsTabConversions",
        components: {
          SettingsInfoTooltip: At["a"],
          SettingsInputDimensions: Te,
          SettingsInputText: G["a"],
          SettingsInputCheckbox: R["a"],
          SettingsAddonDisabled: et,
          SettingsBlock: v,
          SettingsInputConditionalLogic: je,
        },
        data: function () {
          return {
            showYoastNotice: !1,
            text_forms_title: Object(c["a"])("Forms Tracking", "ga-premium"),
            text_optimize_title: Object(c["a"])(
              "Google Optimize",
              "ga-premium"
            ),
            text_dimesions_title: Object(c["a"])(
              "Custom Dimensions",
              "ga-premium"
            ),
            text_forms_disabled: Object(c["d"])(
              Object(c["a"])(
                "In order to use the forms tracking features, please %1$sinstall and activate%2$s the forms addon.",
                "ga-premium"
              ),
              '<a href="' + this.$mi.addons_url + '">',
              "</a>"
            ),
            text_optimize_disabled: Object(c["d"])(
              Object(c["a"])(
                "In order to use the Google Optimize features, please %1$sinstall and activate%2$s the Google Optimize addon.",
                "ga-premium"
              ),
              '<a href="' + this.$mi.addons_url + '">',
              "</a>"
            ),
            text_dimensions_disabled: Object(c["d"])(
              Object(c["a"])(
                "In order to use the Custom Dimensions features, please %1$sinstall and activate%2$s the dimensions addon.",
                "ga-premium"
              ),
              '<a href="' + this.$mi.addons_url + '">',
              "</a>"
            ),
            text_forms_input_title: Object(c["a"])(
              "Track Form Conversion in Google Analytics",
              "ga-premium"
            ),
            text_forms_input_description: Object(c["a"])(
              "Form impressions and conversions are being logged for visitors to your site. No configuration is required.",
              "ga-premium"
            ),
            text_forms_input_label: Object(c["a"])(
              "Enable Form Conversion Tracking",
              "ga-premium"
            ),
            text_forms_wp_forms: Object(c["a"])("WPForms", "ga-premium"),
            text_forms_gravity_forms: Object(c["a"])(
              "Gravity Forms",
              "ga-premium"
            ),
            text_forms_formidable_forms: Object(c["a"])(
              "Formidable Forms",
              "ga-premium"
            ),
            text_forms_not_available: Object(c["a"])(
              "%s is not available",
              "ga-premium"
            ),
            text_forms_misc_label: Object(c["a"])(
              "Miscellaneous WordPress Forms",
              "ga-premium"
            ),
            text_optimize_input_title: Object(c["a"])(
              "Google Optimize Container ID",
              "ga-premium"
            ),
            text_optimize_input_description: Object(c["a"])(
              "This should be in the format GTM-XXXXXX or OPT-XXXXXXX",
              "ga-premium"
            ),
            text_optimize_input_tooltip: Object(c["d"])(
              Object(c["a"])(
                "Visit our knowledge base to learn how to %1$sset up Google Optimize%2$s in Google Analytics. %3$s You'll need to have set up a Google Optimize account. If you run into any issues, please see our %4$stroubleshooting guide%5$s on the most common errors.",
                "ga-premium"
              ),
              '<a href="' +
                this.$getUrl(
                  "settings-panel",
                  "conversions-tab",
                  "https://www.monsterinsights.com/docs/how-to-set-up-google-optimize/"
                ) +
                '" target="_blank">',
              "</a>",
              "<br/>",
              '<a href="' +
                this.$getUrl(
                  "settings-panel",
                  "conversions-tab",
                  "https://www.monsterinsights.com/docs/google-optimize-troubleshooting"
                ) +
                '" target="_blank">',
              "</a>"
            ),
            text_optimize_async_title: Object(c["a"])(
              "Google Optimize Async Page Hide",
              "ga-premium"
            ),
            text_optimize_async_description: Object(c["a"])(
              "Automatically output the page-hiding snippet which reduces the risk of page flicker.",
              "ga-premium"
            ),
            text_optimize_async_label: Object(c["a"])(
              "Enable Google Optimize Async Page Hide",
              "ga-premium"
            ),
            text_optimize_async_tooltip: Object(c["a"])(
              "We recommend that you also use this feature to automatically output the page-hiding snippet which reduces the risk of page flicker. This feature also helps ensure that users on slow connections have a better experience by only showing experiment variants when the Optimize container loads within the set timeout (which you can configure below).",
              "ga-premium"
            ),
            text_optimize_async_time_title: Object(c["a"])(
              "Maximum Time to Hide Page",
              "ga-premium"
            ),
            text_optimize_async_time_description: Object(c["a"])(
              "The maximum time (in milliseconds) the page will be hidden.",
              "ga-premium"
            ),
            text_optimize_async_time_tooltip: Object(c["a"])(
              "The maximum time (in milliseconds) the page will be hidden if using the Google Optimize Async Page Hide feature directly above. Once Optimize is ready or this maximum time is reached (whichever comes first) the page will become visible again. Default: 4000.",
              "ga-premium"
            ),
            text_optimize_load_conditionally_title: Object(c["a"])(
              "Conditionally Load Google Optimize Container Id",
              "ga-premium"
            ),
            text_optimize_load_conditionally_description: Object(c["a"])(
              "By default loaded on all pages",
              "ga-premium"
            ),
            text_optimize_condition_tooltip: Object(c["a"])(
              "By default google optimize container ID load in all pages on the frontend. If you enable & configure conditions then the container ID will load conditionally on the frontend.",
              "ga-premium"
            ),
            text_optimize_enable_condition_label: Object(c["a"])(
              "Load Container Conditionally",
              "ga-premium"
            ),
            text_goptimize_conditions_area_title: Object(c["a"])(
              "Container Loading Rules",
              "ga-premium"
            ),
            text_goptimize_conditions_rule_set_button_label: Object(c["a"])(
              "Add Rule Set",
              "ga-premium"
            ),
            text_dimesions_description_1: Object(c["d"])(
              Object(c["a"])(
                "Visit our knowledge base to learn %1$show to setup%2$s and %3$show to use%4$s custom dimensions in Google Analytics.",
                "ga-premium"
              ),
              '<a href="' +
                this.$getUrl(
                  "settings-panel",
                  "custom-dimensions",
                  "https://www.monsterinsights.com/docs/how-do-i-set-up-custom-dimensions"
                ) +
                '" target="_blank">',
              "</a>",
              '<a href="' +
                this.$getUrl(
                  "settings-panel",
                  "custom-dimensions",
                  "https://www.monsterinsights.com/docs/can-find-custom-dimension-reports/"
                ) +
                '" target="_blank">',
              "</a>"
            ),
            text_dimesions_description_2: Object(c["d"])(
              Object(c["a"])(
                "You need to install %1$sWordPress SEO by Yoast%2$s to be able to use the %3$sSEO Score%4$s and %5$sFocus Keyword%6$s custom dimensions. If you're already running another SEO plugin, WordPress SEO can import its meta data.",
                "ga-premium"
              ),
              '<a href="http://www.wpbeginner.com/refer/yoast-premium/" target="_blank">',
              "</a>",
              "<strong>",
              "</strong>",
              "<strong>",
              "</strong>"
            ),
            text_dimensions_eu_compliance: Object(c["a"])(
              "Author Tracking and User ID tracking have been disabled because the EU Compliance addon is active.",
              "ga-premium"
            ),
            text_yoast_disabled: Object(c["a"])(
              "SEO Score and Focus Keyword dimensions have been disabled because WordPress SEO by Yoast is not active.",
              "ga-premium"
            ),
            text_forms_faux_tooltip: Object(c["a"])(
              "Deactivate Forms addon to disable",
              "ga-premium"
            ),
            text_wpforms_faux_tooltip: Object(c["a"])(
              "Deactivate WPForms to disable",
              "ga-premium"
            ),
            text_gravity_forms_faux_tooltip: Object(c["a"])(
              "Deactivate Gravity Forms to disable",
              "ga-premium"
            ),
            text_formidable_forms_faux_tooltip: Object(c["a"])(
              "Deactivate Formidable Forms to disable",
              "ga-premium"
            ),
            text_forms_misc_faux_tooltip: Object(c["a"])(
              "Forms are tracked by default with the Forms addon.",
              "ga-premium"
            ),
            text_forms_faux_tooltip_off: Object(c["a"])(
              "Activate Forms addon to enable forms tracking.",
              "ga-premium"
            ),
            text_wpforms_faux_tooltip_off: Object(c["a"])(
              "Activate WPForms to enable",
              "ga-premium"
            ),
            text_gravity_forms_faux_tooltip_off: Object(c["a"])(
              "Activate Gravity Forms to enable",
              "ga-premium"
            ),
            text_formidable_forms_faux_tooltip_off: Object(c["a"])(
              "Activate Formidable Forms to enable",
              "ga-premium"
            ),
          };
        },
        computed: Ee(
          {},
          Object(l["b"])({
            addons: "$_addons/addons",
            settings: "$_settings/settings",
          })
        ),
        methods: {
          isAddonActive: function (t) {
            return !!this.addons[t] && this.addons[t].active;
          },
          getWPFormsLabel: function () {
            return this.isAddonActive("wpforms-lite")
              ? this.text_forms_wp_forms
              : Object(c["d"])(
                  this.text_forms_not_available,
                  this.text_forms_wp_forms
                );
          },
          getGravityFormsLabel: function () {
            return this.isAddonActive("gravity_forms")
              ? this.text_forms_gravity_forms
              : Object(c["d"])(
                  this.text_forms_not_available,
                  this.text_forms_gravity_forms
                );
          },
          getFormidableFormsLabel: function () {
            return this.isAddonActive("formidable_forms")
              ? this.text_forms_formidable_forms
              : Object(c["d"])(
                  this.text_forms_not_available,
                  this.text_forms_formidable_forms
                );
          },
          maybeDeleteConditions: function (t) {
            !1 === t &&
              i["a"].set(this.settings, "goptimize_container_conditions", []);
          },
        },
      },
      De = Ve,
      Ie = Object(b["a"])(De, le, ce, !1, null, null, null),
      Be = Ie.exports,
      ze = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "main",
          { staticClass: "monsterinsights-settings-content settings-advanced" },
          [
            s(
              "settings-block",
              {
                attrs: {
                  id: "monsterinsights-settings-block-email-summaries",
                  title: t.text_email_summaries_title,
                },
              },
              [s("settings-input-email-summaries")],
              1
            ),
            s(
              "settings-block",
              { attrs: { title: t.text_export_pdf_reports_title } },
              [s("settings-input-pdf-reports")],
              1
            ),
            s(
              "settings-block",
              { attrs: { title: t.text_permissions_title } },
              [
                s("settings-input-select", {
                  attrs: {
                    options: t.user_roles,
                    forced: t.user_roles_manage_options,
                    multiple: !0,
                    name: "view_reports",
                    label: t.text_permissions_view_label,
                    description: t.text_permissions_view_description,
                    tooltip: t.text_permissions_view_tooltip,
                    disabled: t.disabled,
                  },
                }),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("settings-input-select", {
                  attrs: {
                    options: t.user_roles,
                    forced: t.user_roles_manage_options,
                    multiple: !0,
                    name: "save_settings",
                    label: t.text_permissions_save_label,
                    description: t.text_permissions_save_description,
                    tooltip: t.text_permissions_save_tooltip,
                  },
                }),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("settings-input-select", {
                  attrs: {
                    options: t.user_roles,
                    multiple: !0,
                    name: "ignore_users",
                    label: t.text_permissions_ignore_label,
                    description: t.text_permissions_ignore_description,
                    tooltip: t.text_permissions_ignore_tooltip,
                    disabled: t.disabled,
                  },
                }),
              ],
              1
            ),
            s(
              "settings-block",
              { attrs: { title: t.text_performance_title } },
              [s("settings-input-performance")],
              1
            ),
            t.settings["tracking_mode"] &&
            "analytics" === t.settings["tracking_mode"]
              ? s(
                  "settings-block",
                  { attrs: { title: t.text_custom_code_title } },
                  [
                    s("label", {
                      attrs: { for: "input-custom_code" },
                      domProps: {
                        innerHTML: t._s(t.text_custom_code_description),
                      },
                    }),
                    t.can_edit_code
                      ? s("settings-input-textarea", {
                          attrs: {
                            name: "custom_code",
                            validate: t.validateCode,
                          },
                        })
                      : s("p", {
                          domProps: { textContent: t._s(t.text_cant_edit) },
                        }),
                  ],
                  1
                )
              : t._e(),
            s(
              "settings-block",
              { attrs: { title: t.text_reports_title } },
              [
                s("settings-input-radio", {
                  attrs: {
                    options: t.reports_options,
                    name: "dashboards_disabled",
                  },
                }),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("settings-input-checkbox", {
                  attrs: {
                    name: "hide_admin_bar_reports",
                    label: t.text_hide_admin_bar,
                  },
                }),
              ],
              1
            ),
            s(
              "settings-block",
              { attrs: { title: t.text_automatic_updates_title } },
              [
                s("settings-input-radio", {
                  attrs: {
                    options: t.automatic_updates,
                    name: "automatic_updates",
                  },
                }),
              ],
              1
            ),
            s("settings-input-misc"),
          ],
          1
        );
      },
      Ze = [],
      Ue = s("aa9f"),
      Fe = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "settings-input settings-input-performance" },
          [
            t.isAddonActive("performance")
              ? [
                  s("settings-input-number", {
                    attrs: {
                      type: "number",
                      min: 1,
                      max: 100,
                      name: "samplerate",
                      label: t.text_sample_rate_label,
                      description: t.text_sample_rate_description,
                      tooltip: t.text_sample_rate_tooltip,
                    },
                  }),
                  s("div", { staticClass: "monsterinsights-separator" }),
                  s("settings-input-number", {
                    attrs: {
                      type: "number",
                      min: 1,
                      max: 100,
                      name: "speedsamplerate",
                      label: t.text_sample_rate_speed_label,
                      description: t.text_sample_rate_speed_description,
                      round: !0,
                    },
                  }),
                ]
              : s("settings-addon-disabled", [
                  s("span", {
                    domProps: {
                      innerHTML: t._s(t.text_performance_addon_disabled),
                    },
                  }),
                ]),
          ],
          2
        );
      },
      Ne = [],
      We = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "settings-input-text" }, [
          t.label
            ? s(
                "label",
                { attrs: { for: t.id } },
                [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { innerHTML: t._s(t.label) },
                  }),
                  t.description
                    ? s("span", {
                        domProps: { innerHTML: t._s(t.description) },
                      })
                    : t._e(),
                  t.showReset()
                    ? s("a", {
                        staticClass: "monsterinsights-reset-default",
                        attrs: { href: "#" },
                        domProps: { textContent: t._s(t.text_reset) },
                        on: {
                          click: function (e) {
                            return e.preventDefault(), t.resetValue(e);
                          },
                        },
                      })
                    : t._e(),
                  t.tooltip
                    ? s("settings-info-tooltip", {
                        attrs: { content: t.tooltip },
                      })
                    : t._e(),
                ],
                1
              )
            : t._e(),
          s("div", { staticClass: "settings-input-text-input" }, [
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.number_value,
                  expression: "number_value",
                },
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: t.tooltip_data,
                  expression: "tooltip_data",
                },
              ],
              attrs: {
                id: t.id,
                type: "number",
                name: t.name,
                placeholder: t.placeholder,
                min: t.min,
                max: t.max,
                step: t.step,
                readonly: t.disabled,
              },
              domProps: { value: t.number_value },
              on: {
                change: t.inputUpdate,
                input: function (e) {
                  e.target.composing || (t.number_value = e.target.value);
                },
              },
            }),
            t.inline_desc
              ? s("span", {
                  staticClass: "monsterinsights-inline-desc",
                  domProps: { innerHTML: t._s(t.inline_desc) },
                })
              : t._e(),
          ]),
          t.has_error
            ? s("label", { staticClass: "monsterinsights-error" }, [
                s("i", { staticClass: "monstericon-warning-triangle" }),
                s("span", { domProps: { innerHTML: t._s(t.has_error) } }),
              ])
            : t._e(),
        ]);
      },
      Re = [];
    s("acd8");
    function Ge(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function qe(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ge(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Ge(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Ye = {
        name: "SettingsInputNumber",
        components: { SettingsInfoTooltip: At["a"] },
        props: {
          name: String,
          label: String,
          description: String,
          placeholder: String,
          type: { type: String, default: "text" },
          tooltip: String,
          default_value: String,
          min: Number,
          max: Number,
          step: { type: Number, default: 1 },
          round: { type: Boolean, default: !1 },
          inline_desc: String,
          auth_disabled: { type: Boolean, default: !0 },
        },
        data: function () {
          return {
            has_error: !1,
            id: "input-" + this.name,
            text_reset: Object(c["a"])("Reset to default", "ga-premium"),
            text_error_value: Object(c["d"])(
              Object(c["a"])(
                "Please enter a value between %1$s and %2$s",
                "ga-premium"
              ),
              "<strong>" + this.min + "</strong>",
              "<strong>" + this.max + "</strong>"
            ),
            text_error_has_min: Object(c["d"])(
              Object(c["a"])(
                "Please enter a value higher than %s",
                "ga-premium"
              ),
              "<strong>" + this.min + "</strong>"
            ),
            text_error_has_max: Object(c["d"])(
              Object(c["a"])(
                "Please enter a value lower than %s",
                "ga-premium"
              ),
              "<strong>" + this.max + "</strong>"
            ),
            text_error_generic: Object(c["a"])(
              "Please enter a number",
              "ga-premium"
            ),
            text_error_round: Object(c["a"])(
              "Value has to be a round number",
              "ga-premium"
            ),
            updated_number_value: !1,
          };
        },
        computed: qe(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            auth: "$_auth/auth",
          }),
          {
            has_ua: function () {
              var t = this.auth.network_ua
                ? this.auth.network_ua
                : this.auth.ua;
              return (
                t ||
                  (t = this.auth.network_manual_ua
                    ? this.auth.network_manual_ua
                    : this.auth.manual_ua),
                "" !== t
              );
            },
            number_value: {
              get: function () {
                return !1 !== this.updated_number_value
                  ? this.updated_number_value
                  : this.settings[this.name];
              },
              set: function (t) {
                return (this.updated_number_value = t);
              },
            },
            tooltip_data: function () {
              return {
                content: this.disabled ? this.$mi_need_to_auth : "",
                autoHide: !1,
                trigger: "hover focus click",
              };
            },
            disabled: function () {
              return !!this.auth_disabled && !this.has_ua;
            },
            error_text: function () {
              return "undefined" !== typeof this.min &&
                "undefined" !== typeof this.max
                ? this.text_error_value
                : "undefined" !== typeof this.min
                ? this.text_error_has_min
                : "undefined" !== typeof this.max
                ? this.text_error_has_max
                : this.text_error_generic;
            },
          }
        ),
        methods: {
          inputUpdate: function (t) {
            this.updateSetting(t.target.name, t.target.value);
          },
          updateSetting: function (t, e) {
            var s = this;
            return (
              !this.disabled &&
              ((this.has_error = !1),
              (e = parseFloat(e)),
              this.round && e % 1 !== 0
                ? ((this.has_error = this.text_error_round), !1)
                : isNaN(e) ||
                  ("undefined" !== typeof this.max && e > this.max) ||
                  ("undefined" !== typeof this.min && e < this.min)
                ? ((this.has_error = this.error_text), !1)
                : (this.$mi_saving_toast({}),
                  void this.$store
                    .dispatch("$_settings/updateSettings", {
                      name: t,
                      value: e,
                    })
                    .then(function (t) {
                      t.success
                        ? s.$mi_success_toast({})
                        : s.$mi_error_toast({});
                    })))
            );
          },
          showReset: function () {
            return (
              this.default_value &&
              this.settings[this.name] !== this.default_value
            );
          },
          resetValue: function () {
            return this.updateSetting(this.name, this.default_value);
          },
        },
      },
      Ke = Ye,
      Xe = (s("d4ec"), Object(b["a"])(Ke, We, Re, !1, null, "0fc0f471", null)),
      Je = Xe.exports;
    function Qe(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function ts(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Qe(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Qe(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var es = {
        name: "SettingsInputPerformance",
        components: { SettingsInputNumber: Je, SettingsAddonDisabled: et },
        data: function () {
          return {
            text_sample_rate_label: Object(c["a"])("Sample Rate", "ga-premium"),
            text_sample_rate_description: Object(c["a"])(
              "Specifies what percentage of users should be tracked",
              "ga-premium"
            ),
            text_sample_rate_tooltip: Object(c["a"])(
              "Specifies what percentage of users should be tracked. This defaults to 100 when field is blank (no users are sampled out) but large sites may need to use a lower sample rate to stay within Google Analytics processing limits. Note, setting this setting to a number lower than 100 means not all of your users will be tracked into Google Analytics.",
              "ga-premium"
            ),
            text_sample_rate_speed_label: Object(c["a"])(
              "Site Speed Sample Rate",
              "ga-premium"
            ),
            text_sample_rate_speed_description: Object(c["a"])(
              "Determines how often site speed tracking beacons will be sent. By default, 1% of users will be tracked.",
              "ga-premium"
            ),
            text_performance_addon_disabled: Object(c["d"])(
              Object(c["a"])(
                "In order to use the performance tracking features, please %1$sinstall and activate%2$s the performance addon.",
                "ga-premium"
              ),
              '<a href="' + this.$mi.addons_url + '">',
              "</a>"
            ),
          };
        },
        computed: ts({}, Object(l["b"])({ addons: "$_addons/addons" })),
        methods: {
          isAddonActive: function (t) {
            return !!this.addons[t] && this.addons[t].active;
          },
        },
      },
      ss = es,
      is = Object(b["a"])(ss, Fe, Ne, !1, null, null, null),
      ns = is.exports,
      os = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "settings-input-text" }, [
          t.label || t.description
            ? s("label", { attrs: { for: t.id } }, [
                s("span", {
                  staticClass: "monsterinsights-dark",
                  domProps: { innerHTML: t._s(t.label) },
                }),
                t.description
                  ? s("span", { domProps: { innerHTML: t._s(t.description) } })
                  : t._e(),
              ])
            : t._e(),
          s("div", { staticClass: "settings-input-text-input" }, [
            s("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.value,
                  expression: "value",
                },
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: t.tooltip_data,
                  expression: "tooltip_data",
                },
              ],
              attrs: {
                id: t.id,
                readonly: t.disabled,
                name: t.name,
                placeholder: t.placeholder,
              },
              domProps: { value: t.value },
              on: {
                change: t.updateSetting,
                input: function (e) {
                  e.target.composing || (t.value = e.target.value);
                },
              },
            }),
          ]),
          t.error
            ? s("label", { staticClass: "monsterinsights-error" }, [
                s("i", { staticClass: "monstericon-warning-triangle" }),
                s("span", { domProps: { innerHTML: t._s(t.error) } }),
              ])
            : t._e(),
        ]);
      },
      as = [];
    function rs(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function ls(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? rs(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : rs(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var cs = {
        name: "SettingsInputTextarea",
        props: {
          name: String,
          label: String,
          description: String,
          placeholder: String,
          validate: Function,
        },
        data: function () {
          return {
            is_loading: !1,
            has_error: !1,
            id: "input-" + this.name,
            error: !1,
            updated_value: !1,
          };
        },
        computed: ls(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            auth: "$_auth/auth",
          }),
          {
            has_ua: function () {
              var t = this.auth.network_ua
                ? this.auth.network_ua
                : this.auth.ua;
              return (
                t ||
                  (t = this.auth.network_manual_ua
                    ? this.auth.network_manual_ua
                    : this.auth.manual_ua),
                "" !== t
              );
            },
            value: {
              get: function () {
                return !1 !== this.updated_value
                  ? this.updated_value
                  : this.settings[this.name];
              },
              set: function (t) {
                return (this.updated_value = t);
              },
            },
            tooltip_data: function () {
              return {
                content: this.has_ua ? "" : this.$mi_need_to_auth,
                autoHide: !1,
                trigger: "hover focus click",
              };
            },
            disabled: function () {
              return !this.has_ua;
            },
          }
        ),
        methods: {
          updateSetting: function (t) {
            var e = this;
            if (this.disabled) return !1;
            if (((this.error = !1), this.validate)) {
              var s = this.validate(t.target.value);
              if (!0 !== s) return (this.error = s), !1;
            }
            this.$mi_saving_toast({}),
              this.$store
                .dispatch("$_settings/updateSettings", {
                  name: this.name,
                  value: t.target.value,
                })
                .then(function (t) {
                  t.success ? e.$mi_success_toast({}) : e.$mi_error_toast({});
                });
          },
        },
      },
      ps = cs,
      us = (s("b227"), Object(b["a"])(ps, os, as, !1, null, "4619bc56", null)),
      ms = us.exports,
      ds = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "settings-block",
          { attrs: { title: t.text_misc_title } },
          [
            s("p", [
              s("span", {
                staticClass: "monsterinsights-dark",
                domProps: { innerHTML: t._s(t.text_announcements_title) },
              }),
              s("span", {
                domProps: { innerHTML: t._s(t.text_announcements_description) },
              }),
            ]),
            s("settings-input-checkbox", {
              attrs: {
                name: "hide_am_notices",
                label: t.text_announcements_label,
              },
            }),
          ],
          1
        );
      },
      gs = [],
      hs = {
        name: "SettingsInputMisc",
        components: { SettingsInputCheckbox: R["a"], SettingsBlock: v },
        data: function () {
          return {
            text_misc_title: Object(c["a"])("Miscellaneous", "ga-premium"),
            text_announcements_title: Object(c["a"])(
              "Hide Announcements",
              "ga-premium"
            ),
            text_announcements_description: Object(c["a"])(
              "Hides plugin announcements and update details. This includes critical notices we use to inform about deprecations and important required configuration changes.",
              "ga-premium"
            ),
            text_announcements_label: Object(c["a"])(
              "Hide Announcements",
              "ga-premium"
            ),
          };
        },
      },
      _s = hs,
      Cs = (s("f604"), Object(b["a"])(_s, ds, gs, !1, null, "56747a70", null)),
      bs = Cs.exports,
      fs = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "monsterinsights-email-summaries-settings monsterinsights-collapsible",
          },
          [
            s("p", [
              s("span", {
                staticClass: "monsterinsights-dark",
                domProps: { innerHTML: t._s(t.text_email_summaries_title) },
              }),
              s("span", {
                domProps: { innerHTML: t._s(t.textSummariesDescription) },
              }),
            ]),
            s("settings-input-checkbox", {
              attrs: {
                name: "email_summaries",
                label: t.text_email_summaries_label,
                "value-on": "on",
                "value-off": "off",
              },
              on: { checkbox_option_updated: t.resetOtherOptions },
            }),
            "on" === t.settings["email_summaries"]
              ? s(
                  "div",
                  { staticClass: "monsterinsights-collapsible-content" },
                  [
                    s("div", { staticClass: "monsterinsights-separator" }),
                    s("label", [
                      s("span", {
                        staticClass: "monsterinsights-dark",
                        domProps: { innerHTML: t._s(t.text_email_addresses) },
                      }),
                      s("span", {
                        domProps: { innerHTML: t._s(t.email_addresses_label) },
                      }),
                    ]),
                    s("settings-input-repeater", {
                      attrs: {
                        text_add: t.text_add_email,
                        structure: t.emailStructure,
                        name: "summaries_email_addresses",
                        max_items: 5,
                        min_items: 1,
                        max_item_error_notice: t.max_emails_error_text,
                        min_item_error_notice: t.min_emails_error_text,
                      },
                    }),
                    t.showMailSMTPNotice
                      ? [
                          s("p", {
                            staticClass: "monsterinsights-install-plugin-text",
                            domProps: {
                              innerHTML: t._s(t.text_install_wp_mail_smtp),
                            },
                          }),
                          s(
                            "div",
                            { staticClass: "inline-field" },
                            [
                              s("addon-button", {
                                attrs: {
                                  "install-text": t.text_wp_mail_smtp_button,
                                  addon: t.addons["wp-mail-smtp"],
                                  "is-addon": !1,
                                  "auto-activate": !0,
                                  "activate-text":
                                    t.text_wp_mail_smtp_button_activate,
                                },
                                on: {
                                  "addon-activated": t.redirectToSettings,
                                  "addon-activate-start": function (e) {
                                    t.SMTPpluginActive = !1;
                                  },
                                },
                              }),
                              s("button", {
                                class: [
                                  t.sendingEmail
                                    ? "monsterinsights-button-disabled"
                                    : "",
                                  t.send_test_email_btn_class,
                                ],
                                attrs: { disabled: t.is_disabled },
                                domProps: {
                                  innerHTML: t._s(t.send_test_email_btn_text),
                                },
                                on: {
                                  click: function (e) {
                                    return (
                                      e.preventDefault(), t.sendTestEmail(e)
                                    );
                                  },
                                },
                              }),
                            ],
                            1
                          ),
                        ]
                      : [
                          s("p", {
                            staticClass: "monsterinsights-install-plugin-text",
                            domProps: {
                              innerHTML: t._s(t.text_installed_wp_mail_smtp),
                            },
                          }),
                          s("button", {
                            class: [
                              t.sendingEmail
                                ? "monsterinsights-button-disabled"
                                : "",
                              t.send_test_email_btn_class,
                            ],
                            attrs: { disabled: t.is_disabled },
                            domProps: {
                              innerHTML: t._s(t.send_test_email_btn_text),
                            },
                            on: {
                              click: function (e) {
                                return e.preventDefault(), t.sendTestEmail(e);
                              },
                            },
                          }),
                        ],
                    s("div", { staticClass: "monsterinsights-separator" }),
                    s("settings-input-checkbox", {
                      attrs: {
                        name: "summaries_html_template",
                        "value-on": "yes",
                        "value-off": "no",
                        label: t.text_html_template_label,
                        tooltip: t.text_html_template_tooltip_text,
                      },
                    }),
                    "yes" === t.settings["summaries_html_template"]
                      ? [
                          s("div", {
                            staticClass: "monsterinsights-separator",
                          }),
                          s("settings-input-upload-media", {
                            attrs: {
                              name: "summaries_header_image",
                              label: t.text_header_image_label,
                              description: t.text_header_image_description,
                              uploadButtonText: t.text_upload_image_button,
                              clearMediaButtonText: t.clear_image_button_text,
                              uploadDifferentMediaButtonText:
                                t.choose_different_media_button_text,
                            },
                          }),
                        ]
                      : t._e(),
                  ],
                  2
                )
              : t._e(),
          ],
          1
        );
      },
      vs = [],
      xs =
        (s("4795"),
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "monsterinsights-upload-media-wrapper" },
            [
              s("p", { staticClass: "monsterinsights-upload-media-label" }, [
                s("span", {
                  staticClass: "monsterinsights-dark",
                  domProps: { innerHTML: t._s(t.label) },
                }),
                t.description
                  ? s("span", { domProps: { innerHTML: t._s(t.description) } })
                  : t._e(),
              ]),
              t.value
                ? s("div", { staticClass: "monsterinsights-uploaded-media" }, [
                    s("img", { attrs: { src: t.value } }),
                  ])
                : t._e(),
              s("div", { staticClass: "monsterinsights-upload-media" }, [
                s(
                  "div",
                  {
                    staticClass:
                      "settings-input-text-input monsterinsights-upload-media-input",
                  },
                  [
                    "checkbox" === t.type
                      ? s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.value,
                              expression: "value",
                            },
                          ],
                          attrs: {
                            id: t.id,
                            name: t.name,
                            readonly: "",
                            type: "checkbox",
                          },
                          domProps: {
                            checked: Array.isArray(t.value)
                              ? t._i(t.value, null) > -1
                              : t.value,
                          },
                          on: {
                            change: function (e) {
                              var s = t.value,
                                i = e.target,
                                n = !!i.checked;
                              if (Array.isArray(s)) {
                                var o = null,
                                  a = t._i(s, o);
                                i.checked
                                  ? a < 0 && (t.value = s.concat([o]))
                                  : a > -1 &&
                                    (t.value = s
                                      .slice(0, a)
                                      .concat(s.slice(a + 1)));
                              } else t.value = n;
                            },
                          },
                        })
                      : "radio" === t.type
                      ? s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.value,
                              expression: "value",
                            },
                          ],
                          attrs: {
                            id: t.id,
                            name: t.name,
                            readonly: "",
                            type: "radio",
                          },
                          domProps: { checked: t._q(t.value, null) },
                          on: {
                            change: function (e) {
                              t.value = null;
                            },
                          },
                        })
                      : s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.value,
                              expression: "value",
                            },
                          ],
                          attrs: {
                            id: t.id,
                            name: t.name,
                            readonly: "",
                            type: t.type,
                          },
                          domProps: { value: t.value },
                          on: {
                            input: function (e) {
                              e.target.composing || (t.value = e.target.value);
                            },
                          },
                        }),
                  ]
                ),
              ]),
              s(
                "div",
                { staticClass: "inline-field" },
                [
                  t.value
                    ? [
                        s("button", {
                          staticClass: "monsterinsights-button",
                          domProps: {
                            textContent: t._s(t.uploadDifferentMediaButtonText),
                          },
                          on: {
                            click: function (e) {
                              return e.preventDefault(), t.uploadImage(e);
                            },
                          },
                        }),
                        s("button", {
                          staticClass:
                            "monsterinsights-button monsterinsights-button-green",
                          domProps: {
                            textContent: t._s(t.clearMediaButtonText),
                          },
                          on: {
                            click: function (e) {
                              return e.preventDefault(), t.clearImage(e);
                            },
                          },
                        }),
                      ]
                    : [
                        s("button", {
                          staticClass: "monsterinsights-button",
                          domProps: { textContent: t._s(t.uploadButtonText) },
                          on: {
                            click: function (e) {
                              return e.preventDefault(), t.uploadImage(e);
                            },
                          },
                        }),
                      ],
                ],
                2
              ),
            ]
          );
        }),
      Os = [];
    s("bf19");
    function ys(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function ws(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ys(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : ys(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var js = {
        name: "SettingsInputUploadMedia",
        components: {},
        props: {
          name: String,
          label: String,
          description: String,
          type: { type: String, default: "hidden" },
          uploadButtonText: String,
          clearMediaButtonText: String,
          uploadDifferentMediaButtonText: String,
        },
        data: function () {
          return { id: "input-" + this.name, updated_value: !1 };
        },
        computed: ws({}, Object(l["b"])({ settings: "$_settings/settings" }), {
          value: {
            get: function () {
              return !1 !== this.updated_value
                ? this.updated_value
                : this.settings[this.name];
            },
            set: function (t) {
              return (this.updated_value = t);
            },
          },
        }),
        methods: {
          inputUpdate: function (t) {
            this.updateSetting(t.target.name, t.target.value);
          },
          updateSetting: function (t, e) {
            var s = this;
            if (this.disabled) return !1;
            this.$mi_saving_toast({}),
              this.$store
                .dispatch("$_settings/updateSettings", { name: t, value: e })
                .then(function (t) {
                  t.success ? s.$mi_success_toast({}) : s.$mi_error_toast({});
                });
          },
          uploadImage: function () {
            var t = this,
              e = {
                uploaderTitle: Object(c["a"])(
                  "Select or upload image",
                  "ga-premium"
                ),
                uploaderButton: Object(c["a"])("Set Image", "ga-premium"),
                multiple: !1,
              },
              s = (wp.media.frames.file_frame = wp
                .media({
                  title: e.uploaderTitle,
                  button: { text: e.uploaderButton },
                  multiple: e.multiple,
                })
                .on("select", function () {
                  var e = s.state().get("selection").first().toJSON();
                  t.updateSetting(t.name, e.url);
                })
                .open());
          },
          clearImage: function () {
            this.updateSetting(this.name, "");
          },
        },
      },
      ks = js,
      Ps = Object(b["a"])(ks, xs, Os, !1, null, null, null),
      Ss = Ps.exports,
      $s = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.addon
          ? s(
              "button",
              {
                staticClass: "monsterinsights-button",
                on: {
                  click: function (e) {
                    return e.preventDefault(), t.clickAction(e);
                  },
                },
              },
              [
                s("span", {
                  domProps: { innerHTML: t._s(t.textButtonAction()) },
                }),
              ]
            )
          : t._e();
      },
      Hs = [],
      As = {
        name: "AddonButton",
        props: {
          addon: Object,
          isAddon: { type: Boolean, default: !0 },
          autoActivate: { type: Boolean, default: !1 },
          customAction: { type: [Boolean, String], default: !1 },
          upgradeText: {
            type: String,
            default: Object(c["a"])("Upgrade Now", "ga-premium"),
          },
          activatingText: {
            type: String,
            default: Object(c["a"])("Activating...", "ga-premium"),
          },
          deactivatingText: {
            type: String,
            default: Object(c["a"])("Deactivating...", "ga-premium"),
          },
          installingText: {
            type: String,
            default: Object(c["a"])("Installing...", "ga-premium"),
          },
          deactivateText: {
            type: String,
            default: Object(c["a"])("Deactivate", "ga-premium"),
          },
          activateText: {
            type: String,
            default: Object(c["a"])("Activate", "ga-premium"),
          },
          installText: {
            type: String,
            default: Object(c["a"])("Install", "ga-premium"),
          },
        },
        data: function () {
          return { activating: !1, deactivating: !1, installing: !1 };
        },
        methods: {
          textButtonAction: function () {
            return "undefined" !== typeof this.addon.type &&
              "licensed" !== this.addon.type
              ? this.upgradeText
              : this.activating
              ? this.activatingText
              : this.deactivating
              ? this.deactivatingText
              : this.installing
              ? this.installingText
              : this.addon.active
              ? this.deactivateText
              : this.addon.installed
              ? this.activateText
              : this.installText;
          },
          clickAction: function () {
            if (this.activating || this.deactivating || this.installing)
              return !1;
            this.addon.installed
              ? this.addon.active
                ? this.deactivateAddon()
                : this.activateAddon()
              : this.installAddon();
          },
          installAddon: function () {
            var t = this,
              e = this.isAddon
                ? "$_addons/installAddon"
                : "$_addons/installPlugin";
            this.customAction && (e = this.customAction),
              (this.installing = !0),
              this.$store
                .dispatch(e, this.addon)
                .then(function () {
                  (t.installing = !1),
                    t.$emit("addon-installed"),
                    t.autoActivate && t.activateAddon();
                })
                .catch(function () {
                  t.installing = !1;
                });
          },
          activateAddon: function () {
            var t = this;
            t.$emit("addon-activate-start"),
              (this.activating = !0),
              this.$store
                .dispatch("$_addons/activateAddon", t.addon)
                .then(function () {
                  (t.activating = !1), t.$emit("addon-activated");
                })
                .catch(function () {
                  t.activating = !1;
                });
          },
          deactivateAddon: function () {
            var t = this;
            (this.deactivating = !0),
              this.$store
                .dispatch("$_addons/deactivateAddon", t.addon)
                .then(function () {
                  t.deactivating = !1;
                })
                .catch(function () {
                  t.deactivating = !1;
                });
          },
        },
      },
      Ls = As,
      Ts = Object(b["a"])(Ls, $s, Hs, !1, null, null, null),
      Ms = Ts.exports;
    function Es(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Vs(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Es(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Es(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Ds = {
        name: "SettingsInputEmailSummaries",
        components: {
          AddonButton: Ms,
          SettingsInputUploadMedia: Ss,
          SettingsInputCheckbox: R["a"],
          SettingsInputRepeater: lt["a"],
        },
        data: function () {
          return {
            text_emails_section_title: Object(c["a"])("Emails", "ga-premium"),
            text_email_summaries_title: Object(c["a"])(
              "Email Summaries",
              "ga-premium"
            ),
            text_email_summaries_label: Object(c["a"])(
              "Enable Email Summaries",
              "ga-premium"
            ),
            text_html_template_label: Object(c["a"])(
              "Enable HTML email templates for the best experience (recommended)",
              "ga-premium"
            ),
            text_html_template_tooltip_text: Object(c["a"])(
              "HTML formatted emails provide the best experience by combining insightful analytics with an easy to read format. If your email provider does not support HTML emails (uncommon), you can disable the use of HTML templates.",
              "ga-premium"
            ),
            text_header_image_label: Object(c["a"])(
              "Header Image",
              "ga-premium"
            ),
            text_header_image_description: Object(c["a"])(
              "To use a custom logo on the Email summaries feature, upload or select from the WordPress Media Library, a PNG format image with a recommended dimension of 300 pixels in width by 100 pixels in height or smaller using the button below.",
              "ga-premium"
            ),
            text_upload_image_button: Object(c["a"])(
              "Use Custom Header",
              "ga-premium"
            ),
            clear_image_button_text: Object(c["a"])(
              "Use The Default Header Image",
              "ga-premium"
            ),
            choose_different_media_button_text: Object(c["a"])(
              "Choose A Different Header Image",
              "ga-premium"
            ),
            text_add_email: Object(c["a"])("Add Email", "ga-premium"),
            text_email_addresses: Object(c["a"])(
              "Email addresses",
              "ga-premium"
            ),
            send_test_email_btn_text: Object(c["a"])(
              "Send Test Email",
              "ga-premium"
            ),
            email_addresses_label: Object(c["a"])(
              "Add email addresses to send notifications.",
              "ga-premium"
            ),
            text_wp_mail_smtp_button: Object(c["a"])(
              "Install and Activate WP Mail SMTP",
              "ga-premium"
            ),
            text_wp_mail_smtp_button_activate: Object(c["a"])(
              "Activate WP Mail SMTP",
              "ga-premium"
            ),
            text_install_wp_mail_smtp: Object(c["d"])(
              Object(c["a"])(
                "%1$sNot receiving the emails?%2$s Some hosting providers aren't able to send out emails reliably. To ensure your users get emails from your WordPress site, we recommend %3$sWP Mail SMTP%4$s",
                "ga-premium"
              ),
              "<strong>",
              "</strong>",
              '<strong><a href="' +
                i["a"].prototype.$getUrl(
                  "monsterinsights-settings-tab",
                  "email-summaries",
                  "https://wpmailsmtp.com/"
                ) +
                '" target="_blank">',
              "</a></strong>"
            ),
            text_installed_wp_mail_smtp: Object(c["a"])(
              "To send an example email summary to the email addresses configured above, use the button below",
              "ga-premium"
            ),
            emailStructure: [
              {
                name: "email",
                label: Object(c["d"])(
                  Object(c["a"])("Example: %s", "ga-premium"),
                  "abc@example.com"
                ),
                pattern: new RegExp(
                  "[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}",
                  "i"
                ),
                error: Object(c["a"])(
                  "Please enter a valid email address (example someone@yoursite.com).",
                  "ga-premium"
                ),
                prevent_duplicates: !0,
              },
            ],
            max_emails_error_text: Object(c["a"])(
              "You can add up to 5 emails.",
              "ga-premium"
            ),
            min_emails_error_text: Object(c["a"])(
              "At least 1 email required.",
              "ga-premium"
            ),
            sendingEmail: !1,
            is_disabled: !1,
            send_test_email_btn_class:
              "monsterinsights-button monsterinsights-button-green",
            SMTPpluginActive: !0,
          };
        },
        computed: Vs(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            addons: "$_addons/addons",
          }),
          {
            textSummariesDescription: function () {
              if ("undefined" !== typeof this.settings["email_summaries"]) {
                var t = Object(c["a"])(
                  "Our email summaries feature sends a weekly summary of the most important site analytics information.",
                  "ga-premium"
                );
                return (
                  "on" === this.settings["email_summaries"] &&
                    (t += Object(c["d"])(
                      Object(c["a"])(
                        " %1$sView Example Email Summary%2$s",
                        "ga-premium"
                      ),
                      '<a href="' +
                        this.$mi.email_summary_url +
                        '" target="_blank" style="color:#509fe2;">',
                      "</a>"
                    )),
                  t
                );
              }
            },
            showMailSMTPNotice: function () {
              return !(
                this.addons["wp-mail-smtp"] &&
                this.addons["wp-mail-smtp"].active &&
                this.SMTPpluginActive
              );
            },
          }
        ),
        methods: {
          sendTestEmail: function () {
            var t = this;
            (t.sendingEmail = !0),
              (t.is_disabled = !0),
              (t.send_test_email_btn_text = Object(c["a"])(
                "Sending Email...",
                "ga-premium"
              )),
              this.$mi_saving_toast({
                title: Object(c["a"])("Sending Email...", "ga-premium"),
              });
            var e = new FormData();
            e.append("nonce", i["a"].prototype.$mi.nonce),
              e.append("action", "monsterinsights_send_test_email"),
              Ce.a
                .post(this.$mi.ajax, e)
                .then(function (e) {
                  (t.sendingEmail = !1),
                    e.data.success
                      ? ((t.send_test_email_btn_class =
                          "monsterinsights-button-disabled monsterinsights-button monsterinsights-button-green"),
                        (t.send_test_email_btn_text = Object(c["a"])(
                          "Email Sent!",
                          "ga-premium"
                        )),
                        t.$mi_success_toast({
                          title: Object(c["a"])("Email Sent!", "ga-premium"),
                        }),
                        setTimeout(function () {
                          (t.send_test_email_btn_text = Object(c["a"])(
                            "Send Test Email",
                            "ga-premium"
                          )),
                            (t.send_test_email_btn_class =
                              "monsterinsights-button monsterinsights-button-green"),
                            (t.is_disabled = !1);
                        }, 3e3))
                      : ((t.is_disabled = !1),
                        (t.send_test_email_btn_text = Object(c["a"])(
                          "Send Test Email",
                          "ga-premium"
                        )),
                        (t.send_test_email_btn_class =
                          "monsterinsights-button monsterinsights-button-green"),
                        i["a"].prototype.$mi_error_toast({
                          title: Object(c["a"])(
                            "Can't send email",
                            "ga-premium"
                          ),
                        }));
                })
                .catch(function (e) {
                  (t.sendingEmail = !1),
                    (t.is_disabled = !1),
                    (t.send_test_email_btn_text = Object(c["a"])(
                      "Send Test Email",
                      "ga-premium"
                    )),
                    (t.send_test_email_btn_class =
                      "monsterinsights-button monsterinsights-button-green"),
                    t.$mi_error_toast({
                      title: Object(c["d"])(
                        Object(c["a"])("Can't send email. %1$s", "ga-premium"),
                        e
                      ),
                    });
                });
          },
          resetOtherOptions: function () {
            "undefined" !== typeof this.settings["email_summaries"] &&
              "off" === this.settings["email_summaries"] &&
              ((this.settings["summaries_email_addresses"] = [
                { email: this.$mi.admin_email },
              ]),
              (this.settings["summaries_header_image"] = ""));
          },
          redirectToSettings: function () {
            (this.SMTPpluginActive = !0),
              this.$mi_saving_toast({
                title: Object(c["a"])(
                  "Redirecting to WP Mail SMTP settings",
                  "ga-premium"
                ),
              }),
              (window.location = this.$mi.wpmailsmtp_admin_url);
          },
        },
      },
      Is = Ds,
      Bs = Object(b["a"])(Is, fs, vs, !1, null, null, null),
      zs = Bs.exports,
      Zs = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-pdf-exports-settings" },
          [
            s("settings-input-upload-media", {
              attrs: {
                name: "pdf_reports_header_image",
                label: t.text_pdf_reports_header_image_label,
                description: t.text_pdf_reports_header_image_description,
                uploadButtonText: t.text_upload_image_button,
                clearMediaButtonText: t.clear_image_button_text,
                uploadDifferentMediaButtonText:
                  t.choose_different_media_button_text,
              },
            }),
          ],
          1
        );
      },
      Us = [],
      Fs = {
        name: "SettingsInputPdfReports",
        components: { SettingsInputUploadMedia: Ss },
        data: function () {
          return {
            text_pdf_reports_header_image_label: Object(c["a"])(
              "Header Image",
              "ga-premium"
            ),
            text_pdf_reports_header_image_description: Object(c["a"])(
              "To use a custom logo on the PDF export feature, upload or select from the WordPress Media Library, a PNG format image with a recommended dimension of 300 pixels in width by 45 pixels in height or smaller using the button below.",
              "ga-premium"
            ),
            text_upload_image_button: Object(c["a"])(
              "Use Custom Header Image",
              "ga-premium"
            ),
            clear_image_button_text: Object(c["a"])(
              "Use The Default Header Image",
              "ga-premium"
            ),
            choose_different_media_button_text: Object(c["a"])(
              "Choose A Different Header Image",
              "ga-premium"
            ),
          };
        },
      },
      Ns = Fs,
      Ws = Object(b["a"])(Ns, Zs, Us, !1, null, null, null),
      Rs = Ws.exports;
    function Gs(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function qs(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Gs(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Gs(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Ys = {
        name: "SettingsTabAdvanced",
        components: {
          SettingsInputCheckbox: R["a"],
          SettingsInputRadio: x["a"],
          SettingsInputTextarea: ms,
          SettingsInputSelect: Ue["a"],
          SettingsBlock: v,
          SettingsInputEmailSummaries: zs,
          SettingsInputPdfReports: Rs,
          SettingsInputPerformance: ns,
          SettingsInputMisc: bs,
        },
        data: function () {
          return {
            text_email_summaries_title: Object(c["a"])(
              "Email Summaries",
              "ga-premium"
            ),
            text_export_pdf_reports_title: Object(c["a"])(
              "Export PDF Reports",
              "ga-premium"
            ),
            text_permissions_title: Object(c["a"])("Permissions", "ga-premium"),
            text_permissions_view_label: Object(c["a"])(
              "Allow These User Roles to See Reports",
              "ga-premium"
            ),
            text_permissions_view_description: Object(c["a"])(
              "Users that have at least one of these roles will be able to view the reports.",
              "ga-premium"
            ),
            text_permissions_view_tooltip: Object(c["a"])(
              "Users that have at least one of these roles will be able to view the reports, along with any user with the manage_options capability.",
              "ga-premium"
            ),
            text_permissions_save_label: Object(c["a"])(
              "Allow These User Roles to Save Settings",
              "ga-premium"
            ),
            text_permissions_save_description: Object(c["a"])(
              "Users that have at least one of these roles will be able to view and save the settings panel.",
              "ga-premium"
            ),
            text_permissions_save_tooltip: Object(c["a"])(
              "Users that have at least one of these roles will be able to view and save the settings panel, along with any user with the manage_options capability.",
              "ga-premium"
            ),
            text_permissions_ignore_label: Object(c["a"])(
              "Exclude These User Roles From Tracking",
              "ga-premium"
            ),
            text_permissions_ignore_description: Object(c["a"])(
              "Users that have at least one of these roles will not be tracked into Google Analytics.",
              "ga-premium"
            ),
            text_permissions_ignore_tooltip: Object(c["a"])(
              "Users that have at least one of these roles will not be tracked into Google Analytics.",
              "ga-premium"
            ),
            text_performance_title: Object(c["a"])("Performance", "ga-premium"),
            text_custom_code_title: Object(c["a"])("Custom code", "ga-premium"),
            text_custom_code_description: Object(c["d"])(
              Object(c["a"])(
                "Not for the average user: this allows you to add a line of code, to be added before the %1$spageview is sent%2$s.",
                "ga-premium"
              ),
              '<a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/pages#implementation" target="_blank">',
              "</a>"
            ),
            text_reports_title: Object(c["a"])("Reports", "ga-premium"),
            text_automatic_updates_title: Object(c["a"])(
              "Automatic Updates",
              "ga-premium"
            ),
            text_cant_edit: Object(c["a"])(
              'You must have the "unfiltered_html" capability to view/edit this setting.',
              "ga-premium"
            ),
            text_hide_admin_bar: Object(c["a"])(
              "Hide Admin Bar Reports",
              "ga-premium"
            ),
            reports_options: [
              {
                value: "0",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Enabled %1$s- Show reports and dashboard widget.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "dashboard_widget",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Dashboard Widget Only %1$s- Disable reports, but show dashboard widget.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "disabled",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Disabled %1$s- Hide reports and dashboard widget.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
            ],
            automatic_updates: [
              {
                value: "all",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Yes (recommended) %1$s- Get the latest features, bugfixes, and security updates as they are released.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "minor",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Minor only %1$s- Get bugfixes and security updates, but not major features.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "none",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "None %1$s- Manually update everything.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
            ],
            can_edit_code: this.$mi.unfiltered_html,
          };
        },
        computed: qs(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            addons: "$_addons/addons",
            auth: "$_auth/auth",
          }),
          {
            user_roles: function () {
              var t = [];
              for (var e in this.$mi.roles)
                t.push({ label: this.$mi.roles[e], value: e });
              return t;
            },
            user_roles_manage_options: function () {
              var t = [];
              for (var e in this.$mi.roles_manage_options)
                t.push({ label: this.$mi.roles_manage_options[e], value: e });
              return t;
            },
            has_ua: function () {
              var t = this.auth.network_ua
                ? this.auth.network_ua
                : this.auth.ua;
              return (
                t ||
                  (t = this.auth.network_manual_ua
                    ? this.auth.network_manual_ua
                    : this.auth.manual_ua),
                "" !== t
              );
            },
            disabled: function () {
              return !this.has_ua;
            },
          }
        ),
        methods: {
          validateCode: function (t) {
            return (
              !(
                t.indexOf("analytics.js") > -1 ||
                t.indexOf("gtag.js") > -1 ||
                t.indexOf("gtm.js") > -1 ||
                t.indexOf("ga.js") > -1
              ) ||
              Object(c["d"])(
                Object(c["a"])(
                  "It looks like you added a Google Analytics tracking code in the custom code area, this can potentially prevent proper tracking. If you want to use a manual UA please use the setting in the %1$sGeneral%2$s tab.",
                  "ga-premium"
                ),
                '<a href="#/general">',
                "</a>"
              )
            );
          },
        },
      },
      Ks = Ys,
      Xs = (s("a403"), Object(b["a"])(Ks, ze, Ze, !1, null, "109ce749", null)),
      Js = Xs.exports,
      Qs = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "main",
          {
            staticClass: "monsterinsights-addons monsterinsights-container",
            attrs: {
              id: "monsterinsights-addons",
              "data-license": t.licenseType,
            },
          },
          [
            s("div", { staticClass: "monsterinsights-addons-area" }, [
              t.addonsList().length > 0
                ? s(
                    "div",
                    { staticClass: "monsterinsights-addons-list" },
                    t._l(t.addonsList(), function (t, e) {
                      return s("addon-block", { key: e, attrs: { addon: t } });
                    }),
                    1
                  )
                : t._e(),
            ]),
            t.showNoText
              ? s("div", { staticClass: "monsterinsights-addons-no-results" }, [
                  "" !== t.search
                    ? s("p", {
                        domProps: { textContent: t._s(t.text_no_addons_found) },
                      })
                    : s("div", [
                        s("p", {
                          domProps: { textContent: t._s(t.text_no_addons) },
                        }),
                        s("button", {
                          staticClass: "monsterinsights-button",
                          domProps: {
                            textContent: t._s(t.text_refresh_addons),
                          },
                          on: { click: t.refreshAddons },
                        }),
                      ]),
                ])
              : t._e(),
            s("TheAppFTPForm"),
          ],
          1
        );
      },
      ti = [],
      ei = (s("841c"), s("9024"), s("7f78")),
      si = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.ftp_form.visible
          ? s(
              "div",
              {
                staticClass:
                  "notification-dialog-wrap request-filesystem-credentials-dialog",
                attrs: { id: "request-filesystem-credentials-dialog" },
              },
              [
                s("div", { staticClass: "notification-dialog-background" }),
                s(
                  "div",
                  {
                    staticClass: "notification-dialog",
                    attrs: {
                      role: "dialog",
                      "aria-labelledby": "request-filesystem-credentials-title",
                      tabindex: "0",
                    },
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "request-filesystem-credentials-dialog-content",
                      },
                      [
                        s(
                          "div",
                          {
                            staticClass: "request-filesystem-credentials-form",
                            attrs: {
                              id: "request-filesystem-credentials-form",
                            },
                          },
                          [
                            s("h1", {
                              attrs: {
                                id: "request-filesystem-credentials-title",
                              },
                              domProps: {
                                textContent: t._s(t.text_form_title),
                              },
                            }),
                            s("p", {
                              attrs: {
                                id: "request-filesystem-credentials-desc",
                              },
                              domProps: {
                                textContent: t._s(t.text_form_description),
                              },
                            }),
                            s("label", { attrs: { for: "hostname" } }, [
                              s("span", {
                                staticClass: "field-title",
                                domProps: {
                                  textContent: t._s(t.text_hostname_label),
                                },
                              }),
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.localHostname,
                                    expression: "localHostname",
                                  },
                                ],
                                staticClass: "code",
                                attrs: {
                                  id: "hostname",
                                  name: "hostname",
                                  type: "text",
                                  "aria-describedby":
                                    "request-filesystem-credentials-desc",
                                  placeholder: "example: www.wordpress.org",
                                  value: "",
                                  autocomplete: "off",
                                },
                                domProps: { value: t.localHostname },
                                on: {
                                  input: function (e) {
                                    e.target.composing ||
                                      (t.localHostname = e.target.value);
                                  },
                                },
                              }),
                            ]),
                            s("div", { staticClass: "ftp-username" }, [
                              s("label", { attrs: { for: "username" } }, [
                                s("span", {
                                  staticClass: "field-title",
                                  domProps: {
                                    textContent: t._s(t.text_username_label),
                                  },
                                }),
                                s("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.localUsername,
                                      expression: "localUsername",
                                    },
                                  ],
                                  attrs: {
                                    id: "username",
                                    name: "username",
                                    type: "text",
                                    value: "",
                                    autocomplete: "off",
                                  },
                                  domProps: { value: t.localUsername },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        (t.localUsername = e.target.value);
                                    },
                                  },
                                }),
                              ]),
                            ]),
                            s("div", { staticClass: "ftp-password" }, [
                              s("label", { attrs: { for: "password" } }, [
                                s("span", {
                                  staticClass: "field-title",
                                  domProps: {
                                    textContent: t._s(t.text_password_label),
                                  },
                                }),
                                s("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.localPassword,
                                      expression: "localPassword",
                                    },
                                  ],
                                  attrs: {
                                    id: "password",
                                    name: "password",
                                    type: "password",
                                    value: "",
                                    autocomplete: "off",
                                  },
                                  domProps: { value: t.localPassword },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        (t.localPassword = e.target.value);
                                    },
                                  },
                                }),
                                s("em", {
                                  domProps: {
                                    textContent: t._s(
                                      t.text_password_description
                                    ),
                                  },
                                }),
                              ]),
                            ]),
                            s("fieldset", [
                              s("legend", {
                                domProps: {
                                  textContent: t._s(
                                    t.text_connection_type_label
                                  ),
                                },
                              }),
                              s("label", { attrs: { for: "ftp" } }, [
                                s("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.localConnectionType,
                                      expression: "localConnectionType",
                                    },
                                  ],
                                  attrs: {
                                    id: "ftp",
                                    type: "radio",
                                    name: "connection_type",
                                    value: "ftp",
                                  },
                                  domProps: {
                                    checked: t._q(t.localConnectionType, "ftp"),
                                  },
                                  on: {
                                    change: function (e) {
                                      t.localConnectionType = "ftp";
                                    },
                                  },
                                }),
                                t._v(" FTP "),
                              ]),
                              s("label", { attrs: { for: "ftps" } }, [
                                s("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.localConnectionType,
                                      expression: "localConnectionType",
                                    },
                                  ],
                                  attrs: {
                                    id: "ftps",
                                    type: "radio",
                                    name: "connection_type",
                                    value: "ftps",
                                  },
                                  domProps: {
                                    checked: t._q(
                                      t.localConnectionType,
                                      "ftps"
                                    ),
                                  },
                                  on: {
                                    change: function (e) {
                                      t.localConnectionType = "ftps";
                                    },
                                  },
                                }),
                                t._v(" FTPS (SSL) "),
                              ]),
                            ]),
                            s(
                              "p",
                              {
                                staticClass:
                                  "request-filesystem-credentials-action-buttons",
                              },
                              [
                                s("input", {
                                  attrs: {
                                    id: "_fs_nonce",
                                    type: "hidden",
                                    name: "_fs_nonce",
                                    value: "830ef6f43c",
                                  },
                                }),
                                s("button", {
                                  staticClass: "button cancel-button",
                                  attrs: {
                                    "data-js-action": "close",
                                    type: "button",
                                  },
                                  domProps: {
                                    textContent: t._s(t.text_button_cancel),
                                  },
                                  on: { click: t.hideForm },
                                }),
                                s("button", {
                                  staticClass: "button",
                                  attrs: { id: "upgrade" },
                                  domProps: {
                                    textContent: t._s(t.text_button_proceed),
                                  },
                                  on: { click: t.retryAction },
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            )
          : t._e();
      },
      ii = [];
    function ni(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function oi(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ni(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : ni(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var ai = {
        name: "TheAppFTPForm",
        computed: oi({}, Object(l["b"])({ ftp_form: "$_app/ftp_form" }), {
          localHostname: {
            get: function () {
              return this.ftp_form.hostname;
            },
            set: function (t) {
              this.$store.commit("$_app/UPDATE_HOSTNAME", t);
            },
          },
          localUsername: {
            get: function () {
              return this.ftp_form.username;
            },
            set: function (t) {
              this.$store.commit("$_app/UPDATE_USERNAME", t);
            },
          },
          localPassword: {
            get: function () {
              return this.ftp_form.password;
            },
            set: function (t) {
              this.$store.commit("$_app/UPDATE_PASSWORD", t);
            },
          },
          localConnectionType: {
            get: function () {
              return this.ftp_form.connection_type;
            },
            set: function (t) {
              this.$store.commit("$_app/UPDATE_CONNECTION_TYPE", t);
            },
          },
        }),
        data: function () {
          return {
            text_form_title: Object(c["a"])(
              "Connection Information",
              "ga-premium"
            ),
            text_form_description: Object(c["a"])(
              "To perform the requested action, WordPress needs to access your web server. Please enter your FTP credentials to proceed. If you do not remember your credentials, you should contact your web host.",
              "ga-premium"
            ),
            text_hostname_label: Object(c["a"])("Hostname", "ga-premium"),
            text_username_label: Object(c["a"])("FTP Username", "ga-premium"),
            text_password_label: Object(c["a"])("FTP Password", "ga-premium"),
            text_password_description: Object(c["a"])(
              "This password will not be stored on the server.",
              "ga-premium"
            ),
            text_connection_type_label: Object(c["a"])(
              "Connection Type",
              "ga-premium"
            ),
            text_button_cancel: Object(c["a"])("Cancel", "ga-premium"),
            text_button_proceed: Object(c["a"])("Proceed", "ga-premium"),
          };
        },
        methods: {
          hideForm: function () {
            this.$store.commit("$_app/HIDE_FTP_FORM");
          },
          retryAction: function () {
            var t = this;
            this.$store.commit("$_app/HIDE_FTP_FORM"),
              this.$mi_loading_toast(
                Object(c["a"])("Please wait...", "ga-premium")
              ),
              this.$store
                .dispatch(this.ftp_form.action, this.ftp_form.data)
                .then(function () {
                  t.$swal.close();
                });
          },
        },
      },
      ri = ai,
      li = (s("961a"), Object(b["a"])(ri, si, ii, !1, null, "496d2653", null)),
      ci = li.exports;
    function pi(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function ui(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? pi(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : pi(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var mi = {
        name: "AddonsModuleSite",
        components: { TheAppFTPForm: ci, AddonBlock: ei["a"] },
        computed: ui(
          {},
          Object(l["b"])({
            addons: "$_addons/addons",
            search: "$_addons/search",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            showNoText: function () {
              return 0 === this.addonsList().length;
            },
            licenseType: function () {
              var t = this,
                e = this.$mi.network
                  ? this.license_network.type
                  : this.license.type;
              return (
                ("plus" !== e && "basic" !== e) ||
                  t.$store.dispatch("$_app/addNotice", {
                    id: "addons_upgrade",
                    content: Object(c["a"])(
                      "Upgrade to Pro to unlock all addons and other great features.",
                      "ga-premium"
                    ),
                    type: "success",
                    button: {
                      enabled: !0,
                      text: Object(c["a"])("Upgrade Now", "ga-premium"),
                      link: t.$getUpgradeUrl("addons-page", "notice"),
                    },
                  }),
                e
              );
            },
          }
        ),
        data: function () {
          return {
            text_no_addons: Object(c["a"])(
              "There was an issue retrieving the addons for this site. Please click on the button below the refresh the addons data.",
              "ga-premium"
            ),
            text_no_addons_found: Object(c["a"])(
              "No addons found.",
              "ga-premium"
            ),
            text_refresh_addons: Object(c["a"])("Refresh Addons", "ga-premium"),
          };
        },
        methods: {
          addonsList: function () {
            var t = [];
            for (var e in this.addons)
              if (this.addons[e].type) {
                if (
                  this.search &&
                  this.addons[e].title.search(new RegExp(this.search, "i")) < 0
                )
                  continue;
                t.push(this.addons[e]);
              }
            return "DESC" === this.sort && (t = t.reverse()), t;
          },
          refreshAddons: function () {
            var t = this;
            this.$mi_loading_toast(
              Object(c["a"])("Refreshing Addons", "ga-premium")
            ),
              this.$store.dispatch("$_addons/getAddons").then(function () {
                t.$swal.close();
              });
          },
        },
        beforeDestroy: function () {
          this.$store.dispatch("$_app/removeNotice", "addons_upgrade");
        },
      },
      di = mi,
      gi = Object(b["a"])(di, Qs, ti, !1, null, null, null),
      hi = gi.exports,
      _i = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "main",
          {
            staticClass: "monsterinsights-tools",
            attrs: { id: "monsterinsights-tools" },
          },
          [s("router-view")],
          1
        );
      },
      Ci = [],
      bi =
        (s("8028"),
        {
          name: "ToolsModuleSite",
          components: {},
          computed: {},
          data: function () {
            return {};
          },
          methods: {},
        }),
      fi = bi,
      vi = Object(b["a"])(fi, _i, Ci, !1, null, null, null),
      xi = vi.exports,
      Oi = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "main",
          {
            staticClass: "monsterinsights-about",
            attrs: { id: "monsterinsights-about" },
          },
          [s("router-view")],
          1
        );
      },
      yi = [],
      wi =
        (s("d533"),
        {
          name: "AboutModuleSite",
          components: {},
          computed: {},
          data: function () {
            return {};
          },
          methods: {},
        }),
      ji = wi,
      ki = Object(b["a"])(ji, Oi, yi, !1, null, null, null),
      Pi = ki.exports,
      Si = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-container" },
          [
            s(
              "settings-block",
              { attrs: { title: t.text_title_export_import } },
              [
                s(
                  "form",
                  {
                    attrs: { action: "" },
                    on: {
                      submit: function (e) {
                        return e.preventDefault(), t.submitForm(e);
                      },
                    },
                  },
                  [
                    s(
                      "label",
                      [
                        s("span", {
                          staticClass: "monsterinsights-dark",
                          domProps: { textContent: t._s(t.text_import) },
                        }),
                        s("span", {
                          domProps: {
                            textContent: t._s(t.text_import_description),
                          },
                        }),
                        s("settings-info-tooltip", {
                          attrs: { content: t.text_import_tooltip },
                        }),
                      ],
                      1
                    ),
                    s("div", { staticClass: "monsterinsights-file-input" }, [
                      s("input", {
                        attrs: { type: "file" },
                        on: { change: t.handleFileUpload },
                      }),
                    ]),
                    s("button", {
                      staticClass: "monsterinsights-button",
                      attrs: { type: "submit" },
                      domProps: { textContent: t._s(t.text_import_button) },
                    }),
                    t.has_error
                      ? s("label", { staticClass: "monsterinsights-error" }, [
                          s("i", {
                            staticClass: "monstericon-warning-triangle",
                          }),
                          s("span", {
                            domProps: { innerHTML: t._s(t.text_has_error) },
                          }),
                        ])
                      : t._e(),
                  ]
                ),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("form", { attrs: { action: "", method: "post" } }, [
                  s(
                    "label",
                    [
                      s("span", {
                        staticClass: "monsterinsights-dark",
                        domProps: { textContent: t._s(t.text_export) },
                      }),
                      s("span", {
                        domProps: {
                          textContent: t._s(t.text_export_description),
                        },
                      }),
                      s("settings-info-tooltip", {
                        attrs: { content: t.text_export_tooltip },
                      }),
                    ],
                    1
                  ),
                  s("input", {
                    attrs: {
                      type: "hidden",
                      name: "monsterinsights_export_settings",
                    },
                    domProps: { value: t.nonce },
                  }),
                  s("input", {
                    attrs: {
                      type: "hidden",
                      value: "monsterinsights_export_settings",
                      name: "monsterinsights_action",
                    },
                  }),
                  s("button", {
                    staticClass: "monsterinsights-button",
                    domProps: { textContent: t._s(t.text_export_button) },
                  }),
                ]),
              ]
            ),
          ],
          1
        );
      },
      $i = [],
      Hi = {
        name: "ToolsTabImportExport",
        components: { SettingsInfoTooltip: At["a"], SettingsBlock: v },
        data: function () {
          return {
            nonce: this.$mi.nonce,
            text_title_export_import: Object(c["a"])(
              "Import/Export",
              "ga-premium"
            ),
            text_import: Object(c["a"])("Import", "ga-premium"),
            text_import_description: Object(c["a"])(
              "Import settings from another MonsterInsights website.",
              "ga-premium"
            ),
            text_export: Object(c["a"])("Export", "ga-premium"),
            text_export_description: Object(c["a"])(
              "Export settings to import into another MonsterInsights install.",
              "ga-premium"
            ),
            text_import_button: Object(c["a"])("Import Settings", "ga-premium"),
            text_export_button: Object(c["a"])("Export Settings", "ga-premium"),
            text_has_error: Object(c["a"])(
              "Please choose a file to import",
              "ga-premium"
            ),
            text_import_tooltip: Object(c["a"])(
              "Use the filepicker below to select the settings export file from another site.",
              "ga-premium"
            ),
            text_export_tooltip: Object(c["a"])(
              "Use the button below to export a file with your MonsterInsights settings.",
              "ga-premium"
            ),
            has_error: !1,
            selectedFile: !1,
          };
        },
        methods: {
          handleFileUpload: function (t) {
            (this.has_error = !1), (this.selectedFile = t.target.files[0]);
          },
          submitForm: function () {
            var t = this;
            if (this.selectedFile) {
              this.$mi_loading_toast(
                Object(c["a"])("Uploading file...", "ga-premium")
              );
              var e = new FormData();
              e.append("import_file", this.selectedFile),
                e.append("action", "monsterinsights_handle_settings_import"),
                e.append("nonce", this.$mi.nonce),
                Ce.a
                  .post(this.$mi.ajax, e, {
                    headers: { "Content-Type": "multipart/form-data" },
                  })
                  .then(function (e) {
                    e.data.success && e.data.data
                      ? (t.$store.commit(
                          "$_settings/SETTINGS_UPDATED",
                          e.data.data
                        ),
                        t.$swal({
                          type: "success",
                          title: Object(c["a"])("File imported", "ga-premium"),
                          text: Object(c["a"])(
                            "Settings successfully updated!",
                            "ga-premium"
                          ),
                          confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                        }))
                      : t.$swal({
                          type: "error",
                          title: Object(c["a"])(
                            "Error importing settings",
                            "ga-premium"
                          ),
                          text: Object(c["a"])(
                            "Please choose a .json file generated by a MonsterInsights settings export.",
                            "ga-premium"
                          ),
                          confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                        });
                  });
            } else this.has_error = !0;
          },
        },
      },
      Ai = Hi,
      Li = (s("aca8"), Object(b["a"])(Ai, Si, $i, !1, null, "62e7e943", null)),
      Ti = Li.exports,
      Mi = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "monsterinsights-settings-content monsterinsights-tools-url-builder",
          },
          [
            s("settings-block", { attrs: { title: t.text_block_label } }, [
              s(
                "p",
                [
                  s("span", {
                    domProps: {
                      textContent: t._s(t.text_url_builder_description),
                    },
                  }),
                  t._v(" "),
                  s("settings-info-tooltip", {
                    attrs: { content: t.text_url_builder_tooltip },
                  }),
                ],
                1
              ),
              s("div", { staticClass: "monsterinsights-separator" }),
              s("div", { staticClass: "monsterinsights-input-text" }, [
                s(
                  "label",
                  { attrs: { for: "monsterinsights-tools-website-url" } },
                  [
                    s("span", {
                      staticClass: "monsterinsights-dark",
                      domProps: { innerHTML: t._s(t.text_website_url_label) },
                    }),
                    s("span", {
                      domProps: {
                        innerHTML: t._s(t.text_website_url_description),
                      },
                    }),
                  ]
                ),
                s("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.website_url,
                      expression: "website_url",
                    },
                  ],
                  attrs: {
                    id: "monsterinsights-tools-website-url",
                    type: "text",
                  },
                  domProps: { value: t.website_url },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.website_url = e.target.value);
                    },
                  },
                }),
              ]),
              s("div", { staticClass: "monsterinsights-input-text" }, [
                s(
                  "label",
                  { attrs: { for: "monsterinsights-tools-campaign-source" } },
                  [
                    s("span", {
                      staticClass: "monsterinsights-dark",
                      domProps: {
                        innerHTML: t._s(t.text_campaign_source_label),
                      },
                    }),
                    s("span", {
                      domProps: {
                        innerHTML: t._s(t.text_campaign_source_description),
                      },
                    }),
                  ]
                ),
                s("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.campaign_source,
                      expression: "campaign_source",
                    },
                  ],
                  attrs: {
                    id: "monsterinsights-tools-campaign-source",
                    type: "text",
                  },
                  domProps: { value: t.campaign_source },
                  on: {
                    input: function (e) {
                      e.target.composing ||
                        (t.campaign_source = e.target.value);
                    },
                  },
                }),
              ]),
              s("div", { staticClass: "monsterinsights-input-text" }, [
                s(
                  "label",
                  { attrs: { for: "monsterinsights-tools-campaign-medium" } },
                  [
                    s("span", {
                      staticClass: "monsterinsights-dark",
                      domProps: {
                        innerHTML: t._s(t.text_campaign_medium_label),
                      },
                    }),
                    s("span", {
                      domProps: {
                        innerHTML: t._s(t.text_campaign_medium_description),
                      },
                    }),
                  ]
                ),
                s("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.campaign_medium,
                      expression: "campaign_medium",
                    },
                  ],
                  attrs: {
                    id: "monsterinsights-tools-campaign-medium",
                    type: "text",
                  },
                  domProps: { value: t.campaign_medium },
                  on: {
                    input: function (e) {
                      e.target.composing ||
                        (t.campaign_medium = e.target.value);
                    },
                  },
                }),
              ]),
              s("div", { staticClass: "monsterinsights-input-text" }, [
                s(
                  "label",
                  { attrs: { for: "monsterinsights-tools-campaign-name" } },
                  [
                    s("span", {
                      staticClass: "monsterinsights-dark",
                      domProps: { innerHTML: t._s(t.text_campaign_name_label) },
                    }),
                    s("span", {
                      domProps: {
                        innerHTML: t._s(t.text_campaign_name_description),
                      },
                    }),
                  ]
                ),
                s("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.campaign_name,
                      expression: "campaign_name",
                    },
                  ],
                  attrs: {
                    id: "monsterinsights-tools-campaign-name",
                    type: "text",
                  },
                  domProps: { value: t.campaign_name },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.campaign_name = e.target.value);
                    },
                  },
                }),
              ]),
              s("div", { staticClass: "monsterinsights-input-text" }, [
                s(
                  "label",
                  { attrs: { for: "monsterinsights-tools-campaign-term" } },
                  [
                    s("span", {
                      staticClass: "monsterinsights-dark",
                      domProps: { innerHTML: t._s(t.text_campaign_term_label) },
                    }),
                    s("span", {
                      domProps: {
                        innerHTML: t._s(t.text_campaign_term_description),
                      },
                    }),
                  ]
                ),
                s("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.campaign_term,
                      expression: "campaign_term",
                    },
                  ],
                  attrs: {
                    id: "monsterinsights-tools-campaign-term",
                    type: "text",
                  },
                  domProps: { value: t.campaign_term },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.campaign_term = e.target.value);
                    },
                  },
                }),
              ]),
              s("div", { staticClass: "monsterinsights-input-text" }, [
                s(
                  "label",
                  { attrs: { for: "monsterinsights-tools-campaign-content" } },
                  [
                    s("span", {
                      staticClass: "monsterinsights-dark",
                      domProps: {
                        innerHTML: t._s(t.text_campaign_content_label),
                      },
                    }),
                    s("span", {
                      domProps: {
                        innerHTML: t._s(t.text_campaign_content_description),
                      },
                    }),
                  ]
                ),
                s("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.campaign_content,
                      expression: "campaign_content",
                    },
                  ],
                  attrs: {
                    id: "monsterinsights-tools-campaign-content",
                    type: "text",
                  },
                  domProps: { value: t.campaign_content },
                  on: {
                    input: function (e) {
                      e.target.composing ||
                        (t.campaign_content = e.target.value);
                    },
                  },
                }),
              ]),
              s("div", { staticClass: "monsterinsights-input-text" }, [
                s(
                  "label",
                  { attrs: { for: "monsterinsights-tools-use-fragment" } },
                  [
                    s("span", {
                      staticClass: "monsterinsights-dark",
                      domProps: { innerHTML: t._s(t.text_use_fragment_label) },
                    }),
                    s("span", {
                      domProps: {
                        innerHTML: t._s(t.text_use_fragment_description),
                      },
                    }),
                  ]
                ),
                s(
                  "div",
                  { staticClass: "monsterinsights-settings-input-checkbox" },
                  [
                    s(
                      "label",
                      {
                        on: {
                          click: function (e) {
                            return e.preventDefault(), t.stopClick(e);
                          },
                          keyup: [
                            function (e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                ? null
                                : t.stopClick(e);
                            },
                            function (e) {
                              return !e.type.indexOf("key") &&
                                t._k(e.keyCode, "space", 32, e.key, [
                                  " ",
                                  "Spacebar",
                                ])
                                ? null
                                : t.stopClick(e);
                            },
                          ],
                        },
                      },
                      [
                        s("span", {
                          class: t.checkboxClass,
                          attrs: { tabindex: "0" },
                        }),
                        s("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.use_fragment,
                              expression: "use_fragment",
                            },
                          ],
                          attrs: {
                            id: "monsterinsights-tools-use-fragment",
                            type: "checkbox",
                          },
                          domProps: {
                            checked: Array.isArray(t.use_fragment)
                              ? t._i(t.use_fragment, null) > -1
                              : t.use_fragment,
                          },
                          on: {
                            change: function (e) {
                              var s = t.use_fragment,
                                i = e.target,
                                n = !!i.checked;
                              if (Array.isArray(s)) {
                                var o = null,
                                  a = t._i(s, o);
                                i.checked
                                  ? a < 0 && (t.use_fragment = s.concat([o]))
                                  : a > -1 &&
                                    (t.use_fragment = s
                                      .slice(0, a)
                                      .concat(s.slice(a + 1)));
                              } else t.use_fragment = n;
                            },
                          },
                        }),
                        s("span", {
                          staticClass: "monsterinsights-checkbox-label",
                          domProps: {
                            innerHTML: t._s(t.text_use_fragment_label),
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]),
              s("div", { staticClass: "monsterinsights-separator" }),
              s("div", { staticClass: "monsterinsights-input-text" }, [
                s(
                  "label",
                  { attrs: { for: "monsterinsights-tools-url-to-use" } },
                  [
                    s("span", {
                      staticClass: "monsterinsights-dark",
                      domProps: { innerHTML: t._s(t.text_url_to_use_label) },
                    }),
                    s("span", {
                      domProps: {
                        innerHTML: t._s(t.text_url_to_use_description),
                      },
                    }),
                  ]
                ),
                s("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.url_to_use,
                      expression: "url_to_use",
                    },
                  ],
                  attrs: {
                    id: "monsterinsights-tools-url-to-use",
                    readonly: "",
                  },
                  domProps: { value: t.url_to_use },
                  on: {
                    input: function (e) {
                      e.target.composing || (t.url_to_use = e.target.value);
                    },
                  },
                }),
              ]),
              s("div", [
                s("button", {
                  staticClass: "monsterinsights-button",
                  domProps: { textContent: t._s(t.text_copy) },
                  on: { click: t.copyToClipboard },
                }),
                t.isAddonActive("pretty-link")
                  ? s("button", {
                      staticClass:
                        "monsterinsights-button monsterinsights-button-copy-to-prettylinks",
                      domProps: {
                        textContent: t._s(t.text_copy_to_prettylinks),
                      },
                      on: { click: t.copyToPrettyLinks },
                    })
                  : t._e(),
              ]),
              t.isAddonInstalled("pretty-link") &&
              t.isAddonActive("pretty-link")
                ? t._e()
                : s(
                    "div",
                    { staticClass: "monsterinsights-prettylinks-flow-ad" },
                    [
                      s("h2", {
                        staticClass:
                          "monsterinsights-prettylinks-flow-ad-title",
                        domProps: {
                          textContent: t._s(t.text_prettylinks_flow_ad_title),
                        },
                      }),
                      s("p", {
                        staticClass:
                          "monsterinsights-prettylinks-flow-ad-description",
                        domProps: {
                          textContent: t._s(
                            t.text_prettylinks_flow_ad_description
                          ),
                        },
                      }),
                      s("router-link", {
                        staticClass: "monsterinsights-button",
                        attrs: { tag: "button", to: "/tools/prettylinks-flow" },
                        domProps: {
                          textContent: t._s(t.text_prettylinks_flow_ad_button),
                        },
                        nativeOn: {
                          click: function (e) {
                            return t.copyToPrettyLinks(e);
                          },
                        },
                      }),
                      s("div", {
                        staticClass: "monsterinsights-prettylinks-flow-ad-logo",
                      }),
                    ],
                    1
                  ),
            ]),
            s("tools-tab-footer"),
            s(
              "settings-block",
              { attrs: { title: t.text_block_info_label } },
              [
                s("p", {
                  domProps: {
                    textContent: t._s(t.text_block_info_description),
                  },
                }),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("div", { staticClass: "monsterinsights-tools-info-row" }, [
                  s(
                    "div",
                    { staticClass: "monsterinsights-tools-info-label" },
                    [
                      s("span", {
                        staticClass: "monsterinsights-dark",
                        domProps: { innerHTML: t._s(t.text_row_1_label) },
                      }),
                      s("p", [t._v("utm_source")]),
                    ]
                  ),
                  s(
                    "div",
                    { staticClass: "monsterinsights-tools-info-description" },
                    [
                      s("p", {
                        domProps: {
                          textContent: t._s(t.text_row_1_description),
                        },
                      }),
                      s("p", {
                        domProps: {
                          textContent: t._s(
                            t.sprintf(t.text_example, "google")
                          ),
                        },
                      }),
                    ]
                  ),
                ]),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("div", { staticClass: "monsterinsights-tools-info-row" }, [
                  s(
                    "div",
                    { staticClass: "monsterinsights-tools-info-label" },
                    [
                      s("span", {
                        staticClass: "monsterinsights-dark",
                        domProps: { innerHTML: t._s(t.text_row_2_label) },
                      }),
                      s("p", [t._v("utm_medium")]),
                    ]
                  ),
                  s(
                    "div",
                    { staticClass: "monsterinsights-tools-info-description" },
                    [
                      s("p", {
                        domProps: {
                          textContent: t._s(t.text_row_2_description),
                        },
                      }),
                      s("p", {
                        domProps: {
                          textContent: t._s(t.sprintf(t.text_example, "cpc")),
                        },
                      }),
                    ]
                  ),
                ]),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("div", { staticClass: "monsterinsights-tools-info-row" }, [
                  s(
                    "div",
                    { staticClass: "monsterinsights-tools-info-label" },
                    [
                      s("span", {
                        staticClass: "monsterinsights-dark",
                        domProps: { innerHTML: t._s(t.text_row_3_label) },
                      }),
                      s("p", [t._v("utm_name")]),
                    ]
                  ),
                  s(
                    "div",
                    { staticClass: "monsterinsights-tools-info-description" },
                    [
                      s("p", {
                        domProps: {
                          textContent: t._s(t.text_row_3_description),
                        },
                      }),
                      s("p", {
                        domProps: {
                          textContent: t._s(
                            t.sprintf(
                              t.text_example,
                              "utm_campaign=spring_sale"
                            )
                          ),
                        },
                      }),
                    ]
                  ),
                ]),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("div", { staticClass: "monsterinsights-tools-info-row" }, [
                  s(
                    "div",
                    { staticClass: "monsterinsights-tools-info-label" },
                    [
                      s("span", {
                        staticClass: "monsterinsights-dark",
                        domProps: { innerHTML: t._s(t.text_row_4_label) },
                      }),
                      s("p", [t._v("utm_term")]),
                    ]
                  ),
                  s(
                    "div",
                    { staticClass: "monsterinsights-tools-info-description" },
                    [
                      s("p", {
                        domProps: {
                          textContent: t._s(t.text_row_4_description),
                        },
                      }),
                      s("p", {
                        domProps: {
                          textContent: t._s(
                            t.sprintf(t.text_example, "running+shoes")
                          ),
                        },
                      }),
                    ]
                  ),
                ]),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("div", { staticClass: "monsterinsights-tools-info-row" }, [
                  s(
                    "div",
                    { staticClass: "monsterinsights-tools-info-label" },
                    [
                      s("span", {
                        staticClass: "monsterinsights-dark",
                        domProps: { innerHTML: t._s(t.text_row_5_label) },
                      }),
                      s("p", [t._v("utm_content")]),
                    ]
                  ),
                  s(
                    "div",
                    { staticClass: "monsterinsights-tools-info-description" },
                    [
                      s("p", {
                        domProps: {
                          textContent: t._s(t.text_row_5_description),
                        },
                      }),
                      s("p", {
                        domProps: {
                          textContent: t._s(
                            t.sprintf(t.text_examples, "logolink or textlink")
                          ),
                        },
                      }),
                    ]
                  ),
                ]),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_additional_title) },
                  }),
                ]),
                t._l(t.additional_information, function (e, i) {
                  return s(
                    "p",
                    {
                      key: i,
                      staticClass: "monsterinsights-toolsadditional-info",
                    },
                    [
                      s("i", { staticClass: "monstericon-files" }),
                      t._v(" "),
                      s("a", {
                        attrs: { href: e.url, target: "_blank" },
                        domProps: { textContent: t._s(e.text) },
                      }),
                    ]
                  );
                }),
              ],
              2
            ),
          ],
          1
        );
      },
      Ei = [],
      Vi =
        (s("1276"),
        s("2b3d"),
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("span");
        }),
      Di = [],
      Ii = { name: "ToolsTabFooter" },
      Bi = Ii,
      zi = Object(b["a"])(Bi, Vi, Di, !1, null, null, null),
      Zi = zi.exports;
    function Ui(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Fi(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ui(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Ui(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Ni = {
        name: "ToolsTabUrlBuilder",
        components: {
          ToolsTabFooter: Zi,
          SettingsInfoTooltip: At["a"],
          SettingsBlock: v,
        },
        data: function () {
          return {
            text_block_label: Object(c["a"])(
              "Custom Campaign Parameters",
              "ga-premium"
            ),
            text_url_builder_description: Object(c["a"])(
              "The URL builder helps you add parameters to your URLs you use in custom web or email ad campaigns.",
              "ga-premium"
            ),
            text_url_builder_tooltip: Object(c["a"])(
              "A custom campaign is any ad campaign not using the AdWords auto-tagging feature. When users click one of the custom links, the unique parameters are sent to your Analytics account, so you can identify the URLs that are the most effective in attracting users to your content.",
              "ga-premium"
            ),
            text_website_url_label: Object(c["d"])(
              Object(c["a"])("Website URL %s", "ga-premium"),
              '<span class="monsterinsights-required">*</span>'
            ),
            text_website_url_description: Object(c["d"])(
              Object(c["a"])(
                "The full website URL (e.g. %1$s %2$s%3$s)",
                "ga-premium"
              ),
              "<em>",
              window.location.origin,
              "</em>"
            ),
            text_campaign_source_label: Object(c["d"])(
              Object(c["a"])("Campaign Source %s", "ga-premium"),
              '<span class="monsterinsights-required">*</span>'
            ),
            text_campaign_source_description: Object(c["d"])(
              Object(c["a"])(
                "Enter a referrer (e.g. %1$sfacebook, newsletter, google%2$s)",
                "ga-premium"
              ),
              "<em>",
              "</em>"
            ),
            text_campaign_medium_label: Object(c["a"])(
              "Campaign Medium",
              "ga-premium"
            ),
            text_campaign_medium_description: Object(c["d"])(
              Object(c["a"])(
                "Enter a marketing medium (e.g. %1$scpc, banner, email%2$s)",
                "ga-premium"
              ),
              "<em>",
              "</em>"
            ),
            text_campaign_name_label: Object(c["a"])(
              "Campaign Name",
              "ga-premium"
            ),
            text_campaign_name_description: Object(c["d"])(
              Object(c["a"])(
                "Enter a name to easily identify (e.g. %1$sspring_sale%2$s)",
                "ga-premium"
              ),
              "<em>",
              "</em>"
            ),
            text_campaign_term_label: Object(c["a"])(
              "Campaign Term",
              "ga-premium"
            ),
            text_campaign_term_description: Object(c["a"])(
              "Enter the paid keyword",
              "ga-premium"
            ),
            text_campaign_content_label: Object(c["a"])(
              "Campaign Content",
              "ga-premium"
            ),
            text_campaign_content_description: Object(c["a"])(
              "Enter something to differentiate ads",
              "ga-premium"
            ),
            text_use_fragment_label: Object(c["a"])(
              "Use Fragment",
              "ga-premium"
            ),
            text_use_fragment_description: Object(c["d"])(
              Object(c["a"])(
                "Set the parameters in the fragment portion of the URL %1$s(not recommended)%2$s",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_url_to_use_label: Object(c["a"])("URL to use", "ga-premium"),
            text_url_to_use_description: Object(c["a"])(
              "(Updates automatically)",
              "ga-premium"
            ),
            text_copy: Object(c["a"])("Copy to Clipboard", "ga-premium"),
            text_copy_to_prettylinks: Object(c["a"])(
              "Copy to Pretty Links",
              "ga-premium"
            ),
            text_prettylinks_flow_ad_title: Object(c["a"])(
              "Make your campaign links prettier!",
              "ga-premium"
            ),
            text_prettylinks_flow_ad_description: Object(c["a"])(
              "Pretty Links turns those ugly, long campaign links into clean, memorable, speakable and totally shareable links.",
              "ga-premium"
            ),
            text_prettylinks_flow_ad_button: Object(c["a"])(
              "Download Pretty Links",
              "ga-premium"
            ),
            text_block_info_label: Object(c["a"])(
              "More Information & Examples",
              "ga-premium"
            ),
            text_block_info_description: Object(c["a"])(
              "The following table gives a detailed explanation and example of each of the campaign parameters.",
              "ga-premium"
            ),
            website_url: window.location.origin,
            campaign_source: "",
            campaign_medium: "",
            campaign_name: "",
            campaign_term: "",
            campaign_content: "",
            use_fragment: !1,
            text_row_1_label: Object(c["a"])("Campaign Source", "ga-premium"),
            text_row_1_description: Object(c["a"])(
              "Required. Use utm_source to identify a search engine, newsletter name, or other source.",
              "ga-premium"
            ),
            text_row_2_label: Object(c["a"])("Campaign Medium", "ga-premium"),
            text_row_2_description: Object(c["a"])(
              "Use utm_medium to identify a medium such as email or cost-per-click.",
              "ga-premium"
            ),
            text_row_3_label: Object(c["a"])("Campaign Name", "ga-premium"),
            text_row_3_description: Object(c["a"])(
              "Used for keyword analysis. Use utm_campaign to identify a specific product promotion or strategic campaign.",
              "ga-premium"
            ),
            text_row_4_label: Object(c["a"])("Campaign Term", "ga-premium"),
            text_row_4_description: Object(c["a"])(
              "Used for paid search. Use utm_term to note the keywords for this ad.",
              "ga-premium"
            ),
            text_row_5_label: Object(c["a"])("Campaign Content", "ga-premium"),
            text_row_5_description: Object(c["a"])(
              "Used for A/B testing and content-targeted ads. Use utm_content to differentiate ads or links that point to the same URL.",
              "ga-premium"
            ),
            text_example: Object(c["a"])("Example: %s", "ga-premium"),
            text_examples: Object(c["a"])("Examples: %s", "ga-premium"),
            additional_information: [
              {
                text: Object(c["a"])("About Campaigns", "ga-premium"),
                url: "https://support.google.com/analytics/answer/1247851",
              },
              {
                text: Object(c["a"])("About Custom Campaigns", "ga-premium"),
                url: "https://support.google.com/analytics/answer/1033863",
              },
              {
                text: Object(c["a"])(
                  "Best Practices for Creating Custom Campaigns",
                  "ga-premium"
                ),
                url: "https://support.google.com/analytics/answer/1037445",
              },
              {
                text: Object(c["a"])(
                  "About the Referral Traffic Report",
                  "ga-premium"
                ),
                url: "https://support.google.com/analytics/answer/1247839",
              },
              {
                text: Object(c["a"])(
                  "About Traffic Source Dimensions",
                  "ga-premium"
                ),
                url: "https://support.google.com/analytics/answer/1033173",
              },
              {
                text: Object(c["a"])("AdWords Auto-Tagging", "ga-premium"),
                url: "https://support.google.com/adwords/answer/1752125",
              },
            ],
            text_additional_title: Object(c["a"])(
              "Additional Information",
              "ga-premium"
            ),
            local_storage_key: "MonsterInsightsURL",
          };
        },
        created: function () {
          this.getWithExpiry();
        },
        computed: Fi({}, Object(l["b"])({ addons: "$_addons/addons" }), {
          url_to_use: function () {
            var t = "";
            return (
              this.website_url &&
                this.campaign_source &&
                ((t = this.website_url),
                (t = this.$addQueryArg(t, "utm_source", this.campaign_source)),
                this.campaign_medium &&
                  (t = this.$addQueryArg(
                    t,
                    "utm_medium",
                    this.campaign_medium
                  )),
                this.campaign_name &&
                  (t = this.$addQueryArg(
                    t,
                    "utm_campaign",
                    this.campaign_name
                  )),
                this.campaign_term &&
                  (t = this.$addQueryArg(t, "utm_term", this.campaign_term)),
                this.campaign_content &&
                  (t = this.$addQueryArg(
                    t,
                    "utm_content",
                    this.campaign_content
                  )),
                this.use_fragment && (t = t.replace("?", "#"))),
              encodeURI(t)
            );
          },
          checkboxClass: function () {
            var t = "monsterinsights-styled-checkbox";
            return (
              this.use_fragment &&
                (t += " monsterinsights-styled-checkbox-checked"),
              t
            );
          },
        }),
        methods: {
          copyToClipboard: function () {
            document
              .querySelector("#monsterinsights-tools-url-to-use")
              .select(),
              document.execCommand("copy");
          },
          copyToPrettyLinks: function () {
            if (this.url_to_use && this.$mi.new_pretty_link_url) {
              var t = Math.round(new Date().getTime() / 1e3),
                e = 600,
                s = { value: this.url_to_use, expiry: t + e };
              localStorage.setItem(this.local_storage_key, JSON.stringify(s));
              var i = this.$addQueryArg(
                this.$mi.new_pretty_link_url,
                "monsterinsights_reference",
                "url_builder"
              );
              i &&
                this.isAddonActive("pretty-link") &&
                (window.location.href = i);
            }
          },
          getWithExpiry: function () {
            var t = localStorage.getItem(this.local_storage_key);
            if (t) {
              var e = JSON.parse(t),
                s = Math.round(new Date().getTime() / 1e3);
              if (s > e.expiry) localStorage.removeItem(this.local_storage_key);
              else {
                var i = e.value,
                  n = i.split("?");
                n.length <= 1 && ((n = i.split("#")), (this.use_fragment = !0)),
                  (this.website_url = n[0]);
                var o = new URLSearchParams(n[1]);
                o.has("utm_source") &&
                  (this.campaign_source = o.get("utm_source")),
                  o.has("utm_medium") &&
                    (this.campaign_medium = o.get("utm_medium")),
                  o.has("utm_campaign") &&
                    (this.campaign_name = o.get("utm_campaign")),
                  o.has("utm_term") && (this.campaign_term = o.get("utm_term")),
                  o.has("utm_content") &&
                    (this.campaign_content = o.get("utm_content"));
              }
            }
          },
          stopClick: function () {
            this.use_fragment = !this.use_fragment;
          },
          isAddonActive: function (t) {
            return !!this.addons[t] && this.addons[t].active;
          },
          isAddonInstalled: function (t) {
            return !!this.addons[t] && this.addons[t].installed;
          },
          sprintf: c["d"],
        },
      },
      Wi = Ni,
      Ri = Object(b["a"])(Wi, Mi, Ei, !1, null, null, null),
      Gi = Ri.exports,
      qi = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "monsterinsights-settings-content monsterinsights-tools-prettylinks-flow",
          },
          [
            s(
              "header",
              { staticClass: "monsterinsights-tools-prettylinks-flow-header" },
              [
                s("div", {
                  staticClass:
                    "monsterinsights-tools-prettylinks-flow-header-logo",
                }),
                s("h1", {
                  staticClass: "monsterinsights-prettylinks-flow-title",
                  domProps: {
                    textContent: t._s(t.text_prettylinks_flow_title),
                  },
                }),
                s("p", {
                  staticClass: "monsterinsights-prettylinks-flow-description",
                  domProps: {
                    textContent: t._s(t.text_prettylinks_flow_description),
                  },
                }),
              ]
            ),
            s(
              "main",
              { staticClass: "monsterinsights-tools-prettylinks-flow-content" },
              [
                s("div", { staticClass: "monsterinsights-tools-info-row" }, [
                  s(
                    "div",
                    {
                      staticClass:
                        "monsterinsights-tools-prettylinks-row-image",
                    },
                    [
                      s(
                        "svg",
                        {
                          attrs: {
                            width: "430",
                            height: "316",
                            viewBox: "0 0 430 316",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                        },
                        [
                          s("g", { attrs: { filter: "url(#filter0_dd)" } }, [
                            s("rect", {
                              attrs: {
                                x: "35",
                                y: "37",
                                width: "360",
                                height: "229",
                                rx: "5",
                                fill: "white",
                              },
                            }),
                            s("path", {
                              attrs: {
                                d:
                                  "M35 25C35 22.2386 37.2386 20 40 20H390C392.761 20 395 22.2386 395 25V46H35V25Z",
                                fill: "#E2E4E9",
                              },
                            }),
                            s("path", {
                              attrs: {
                                d:
                                  "M66.5684 66.0469L69.125 73.2656L71.668 66.0469H74.3613V76H72.3037V73.2793L72.5088 68.583L69.8223 76H68.4141L65.7344 68.5898L65.9395 73.2793V76H63.8887V66.0469H66.5684ZM75.7148 72.2334C75.7148 71.4997 75.8561 70.8457 76.1387 70.2715C76.4212 69.6973 76.8268 69.2529 77.3555 68.9385C77.8887 68.624 78.5062 68.4668 79.208 68.4668C80.2061 68.4668 81.0195 68.7721 81.6484 69.3828C82.2819 69.9935 82.6351 70.8229 82.708 71.8711L82.7217 72.377C82.7217 73.5117 82.4049 74.4232 81.7715 75.1113C81.138 75.7949 80.2881 76.1367 79.2217 76.1367C78.1553 76.1367 77.3031 75.7949 76.665 75.1113C76.0316 74.4277 75.7148 73.498 75.7148 72.3223V72.2334ZM77.6904 72.377C77.6904 73.0788 77.8226 73.6165 78.0869 73.9902C78.3512 74.3594 78.7295 74.5439 79.2217 74.5439C79.7002 74.5439 80.0739 74.3617 80.3428 73.9971C80.6117 73.6279 80.7461 73.04 80.7461 72.2334C80.7461 71.5452 80.6117 71.012 80.3428 70.6338C80.0739 70.2555 79.6956 70.0664 79.208 70.0664C78.7249 70.0664 78.3512 70.2555 78.0869 70.6338C77.8226 71.0075 77.6904 71.5885 77.6904 72.377ZM85.7568 68.6035L85.8184 69.458C86.347 68.7972 87.0557 68.4668 87.9443 68.4668C88.7282 68.4668 89.3115 68.6969 89.6943 69.1572C90.0771 69.6175 90.2731 70.3057 90.2822 71.2217V76H88.3066V71.2695C88.3066 70.8503 88.2155 70.5472 88.0332 70.3604C87.8509 70.1689 87.5479 70.0732 87.124 70.0732C86.568 70.0732 86.151 70.3102 85.873 70.7842V76H83.8975V68.6035H85.7568ZM95.792 73.9561C95.792 73.7145 95.6712 73.5254 95.4297 73.3887C95.1927 73.2474 94.8099 73.1221 94.2812 73.0127C92.5221 72.6436 91.6426 71.8962 91.6426 70.7705C91.6426 70.1143 91.9137 69.5674 92.4561 69.1299C93.0029 68.6878 93.7161 68.4668 94.5957 68.4668C95.5345 68.4668 96.2842 68.6878 96.8447 69.1299C97.4098 69.5719 97.6924 70.1462 97.6924 70.8525H95.7168C95.7168 70.57 95.6257 70.3376 95.4434 70.1553C95.2611 69.9684 94.9762 69.875 94.5889 69.875C94.2562 69.875 93.9987 69.9502 93.8164 70.1006C93.6341 70.251 93.543 70.4424 93.543 70.6748C93.543 70.8936 93.6455 71.0713 93.8506 71.208C94.0602 71.3402 94.4111 71.4564 94.9033 71.5566C95.3955 71.6523 95.8102 71.7617 96.1475 71.8848C97.1911 72.2676 97.7129 72.9307 97.7129 73.874C97.7129 74.5485 97.4235 75.0954 96.8447 75.5146C96.266 75.9294 95.5186 76.1367 94.6025 76.1367C93.9827 76.1367 93.4313 76.0273 92.9482 75.8086C92.4697 75.5853 92.0938 75.2822 91.8203 74.8994C91.5469 74.512 91.4102 74.0951 91.4102 73.6484H93.2832C93.3014 73.9993 93.4313 74.2682 93.6729 74.4551C93.9144 74.6419 94.238 74.7354 94.6436 74.7354C95.0218 74.7354 95.3066 74.6647 95.498 74.5234C95.694 74.3776 95.792 74.1885 95.792 73.9561ZM101.356 66.7852V68.6035H102.621V70.0527H101.356V73.7441C101.356 74.0176 101.409 74.2135 101.514 74.332C101.618 74.4505 101.819 74.5098 102.115 74.5098C102.334 74.5098 102.528 74.4938 102.696 74.4619V75.959C102.309 76.0775 101.91 76.1367 101.5 76.1367C100.115 76.1367 99.4082 75.4372 99.3809 74.0381V70.0527H98.3008V68.6035H99.3809V66.7852H101.356ZM107.126 76.1367C106.041 76.1367 105.157 75.804 104.474 75.1387C103.795 74.4733 103.455 73.5869 103.455 72.4795V72.2881C103.455 71.5452 103.599 70.8822 103.886 70.2988C104.173 69.7109 104.578 69.2598 105.103 68.9453C105.631 68.6263 106.233 68.4668 106.907 68.4668C107.919 68.4668 108.714 68.7858 109.293 69.4238C109.876 70.0618 110.168 70.9665 110.168 72.1377V72.9443H105.458C105.522 73.4274 105.713 73.8148 106.032 74.1064C106.356 74.3981 106.764 74.5439 107.256 74.5439C108.017 74.5439 108.612 74.2682 109.04 73.7168L110.011 74.8037C109.715 75.223 109.313 75.5511 108.808 75.7881C108.302 76.0205 107.741 76.1367 107.126 76.1367ZM106.9 70.0664C106.508 70.0664 106.189 70.1986 105.943 70.4629C105.702 70.7272 105.547 71.1055 105.479 71.5977H108.227V71.4404C108.217 71.0029 108.099 70.6657 107.871 70.4287C107.643 70.1872 107.32 70.0664 106.9 70.0664ZM115.452 70.4561C115.183 70.4196 114.946 70.4014 114.741 70.4014C113.994 70.4014 113.504 70.6543 113.271 71.1602V76H111.296V68.6035H113.162L113.217 69.4854C113.613 68.8063 114.162 68.4668 114.864 68.4668C115.083 68.4668 115.288 68.4964 115.479 68.5557L115.452 70.4561ZM118.72 76H116.669V66.0469H118.72V76ZM122.315 68.6035L122.377 69.458C122.906 68.7972 123.614 68.4668 124.503 68.4668C125.287 68.4668 125.87 68.6969 126.253 69.1572C126.636 69.6175 126.832 70.3057 126.841 71.2217V76H124.865V71.2695C124.865 70.8503 124.774 70.5472 124.592 70.3604C124.41 70.1689 124.106 70.0732 123.683 70.0732C123.127 70.0732 122.71 70.3102 122.432 70.7842V76H120.456V68.6035H122.315ZM132.351 73.9561C132.351 73.7145 132.23 73.5254 131.988 73.3887C131.751 73.2474 131.368 73.1221 130.84 73.0127C129.081 72.6436 128.201 71.8962 128.201 70.7705C128.201 70.1143 128.472 69.5674 129.015 69.1299C129.562 68.6878 130.275 68.4668 131.154 68.4668C132.093 68.4668 132.843 68.6878 133.403 69.1299C133.968 69.5719 134.251 70.1462 134.251 70.8525H132.275C132.275 70.57 132.184 70.3376 132.002 70.1553C131.82 69.9684 131.535 69.875 131.147 69.875C130.815 69.875 130.557 69.9502 130.375 70.1006C130.193 70.251 130.102 70.4424 130.102 70.6748C130.102 70.8936 130.204 71.0713 130.409 71.208C130.619 71.3402 130.97 71.4564 131.462 71.5566C131.954 71.6523 132.369 71.7617 132.706 71.8848C133.75 72.2676 134.271 72.9307 134.271 73.874C134.271 74.5485 133.982 75.0954 133.403 75.5146C132.825 75.9294 132.077 76.1367 131.161 76.1367C130.541 76.1367 129.99 76.0273 129.507 75.8086C129.028 75.5853 128.652 75.2822 128.379 74.8994C128.105 74.512 127.969 74.0951 127.969 73.6484H129.842C129.86 73.9993 129.99 74.2682 130.231 74.4551C130.473 74.6419 130.797 74.7354 131.202 74.7354C131.58 74.7354 131.865 74.6647 132.057 74.5234C132.253 74.3776 132.351 74.1885 132.351 73.9561ZM137.635 76H135.652V68.6035H137.635V76ZM135.536 66.6895C135.536 66.3932 135.634 66.1494 135.83 65.958C136.031 65.7666 136.302 65.6709 136.644 65.6709C136.981 65.6709 137.25 65.7666 137.45 65.958C137.651 66.1494 137.751 66.3932 137.751 66.6895C137.751 66.9902 137.648 67.2363 137.443 67.4277C137.243 67.6191 136.976 67.7148 136.644 67.7148C136.311 67.7148 136.042 67.6191 135.837 67.4277C135.636 67.2363 135.536 66.9902 135.536 66.6895ZM138.981 72.2471C138.981 71.1123 139.25 70.1986 139.788 69.5059C140.33 68.8132 141.06 68.4668 141.976 68.4668C142.787 68.4668 143.418 68.7448 143.869 69.3008L143.951 68.6035H145.742V75.7539C145.742 76.401 145.594 76.9639 145.298 77.4424C145.006 77.9209 144.594 78.2855 144.061 78.5361C143.527 78.7868 142.903 78.9121 142.188 78.9121C141.645 78.9121 141.117 78.8027 140.602 78.584C140.087 78.3698 139.697 78.0918 139.433 77.75L140.308 76.5469C140.8 77.0983 141.397 77.374 142.099 77.374C142.623 77.374 143.031 77.2327 143.322 76.9502C143.614 76.6722 143.76 76.2757 143.76 75.7607V75.3643C143.304 75.8792 142.705 76.1367 141.962 76.1367C141.073 76.1367 140.353 75.7904 139.802 75.0977C139.255 74.4004 138.981 73.4775 138.981 72.3291V72.2471ZM140.957 72.3906C140.957 73.0605 141.091 73.5869 141.36 73.9697C141.629 74.348 141.998 74.5371 142.468 74.5371C143.069 74.5371 143.5 74.3115 143.76 73.8604V70.75C143.495 70.2988 143.069 70.0732 142.481 70.0732C142.007 70.0732 141.634 70.2669 141.36 70.6543C141.091 71.0417 140.957 71.6204 140.957 72.3906ZM149.194 69.4102C149.718 68.7812 150.377 68.4668 151.17 68.4668C152.774 68.4668 153.588 69.3988 153.61 71.2627V76H151.635V71.3174C151.635 70.8936 151.544 70.5814 151.361 70.3809C151.179 70.1758 150.876 70.0732 150.452 70.0732C149.873 70.0732 149.454 70.2965 149.194 70.7432V76H147.219V65.5H149.194V69.4102ZM157.466 66.7852V68.6035H158.73V70.0527H157.466V73.7441C157.466 74.0176 157.518 74.2135 157.623 74.332C157.728 74.4505 157.928 74.5098 158.225 74.5098C158.443 74.5098 158.637 74.4938 158.806 74.4619V75.959C158.418 76.0775 158.02 76.1367 157.609 76.1367C156.224 76.1367 155.518 75.4372 155.49 74.0381V70.0527H154.41V68.6035H155.49V66.7852H157.466ZM163.837 73.9561C163.837 73.7145 163.716 73.5254 163.475 73.3887C163.238 73.2474 162.855 73.1221 162.326 73.0127C160.567 72.6436 159.688 71.8962 159.688 70.7705C159.688 70.1143 159.959 69.5674 160.501 69.1299C161.048 68.6878 161.761 68.4668 162.641 68.4668C163.579 68.4668 164.329 68.6878 164.89 69.1299C165.455 69.5719 165.737 70.1462 165.737 70.8525H163.762C163.762 70.57 163.671 70.3376 163.488 70.1553C163.306 69.9684 163.021 69.875 162.634 69.875C162.301 69.875 162.044 69.9502 161.861 70.1006C161.679 70.251 161.588 70.4424 161.588 70.6748C161.588 70.8936 161.69 71.0713 161.896 71.208C162.105 71.3402 162.456 71.4564 162.948 71.5566C163.44 71.6523 163.855 71.7617 164.192 71.8848C165.236 72.2676 165.758 72.9307 165.758 73.874C165.758 74.5485 165.468 75.0954 164.89 75.5146C164.311 75.9294 163.563 76.1367 162.647 76.1367C162.028 76.1367 161.476 76.0273 160.993 75.8086C160.515 75.5853 160.139 75.2822 159.865 74.8994C159.592 74.512 159.455 74.0951 159.455 73.6484H161.328C161.346 73.9993 161.476 74.2682 161.718 74.4551C161.959 74.6419 162.283 74.7354 162.688 74.7354C163.067 74.7354 163.352 74.6647 163.543 74.5234C163.739 74.3776 163.837 74.1885 163.837 73.9561ZM172.703 74.3525H177.058V76H170.652V66.0469H172.703V74.3525ZM180.195 76H178.213V68.6035H180.195V76ZM178.097 66.6895C178.097 66.3932 178.195 66.1494 178.391 65.958C178.591 65.7666 178.862 65.6709 179.204 65.6709C179.541 65.6709 179.81 65.7666 180.011 65.958C180.211 66.1494 180.312 66.3932 180.312 66.6895C180.312 66.9902 180.209 67.2363 180.004 67.4277C179.803 67.6191 179.537 67.7148 179.204 67.7148C178.871 67.7148 178.603 67.6191 178.397 67.4277C178.197 67.2363 178.097 66.9902 178.097 66.6895ZM183.647 68.6035L183.709 69.458C184.238 68.7972 184.946 68.4668 185.835 68.4668C186.619 68.4668 187.202 68.6969 187.585 69.1572C187.968 69.6175 188.164 70.3057 188.173 71.2217V76H186.197V71.2695C186.197 70.8503 186.106 70.5472 185.924 70.3604C185.742 70.1689 185.438 70.0732 185.015 70.0732C184.459 70.0732 184.042 70.3102 183.764 70.7842V76H181.788V68.6035H183.647ZM192.363 73.0332L191.652 73.7441V76H189.677V65.5H191.652V71.3174L192.035 70.8252L193.929 68.6035H196.301L193.628 71.6865L196.533 76H194.264L192.363 73.0332Z",
                                fill: "#4C5566",
                              },
                            }),
                            s("rect", {
                              attrs: {
                                x: "61",
                                y: "91",
                                width: "309",
                                height: "44",
                                rx: "5",
                                fill: "#F0F2F4",
                              },
                            }),
                            s("path", {
                              attrs: {
                                d:
                                  "M79.1582 109.5H79.4102C79.6953 109.5 79.8887 109.529 79.9902 109.588C80.0918 109.65 80.1426 109.762 80.1426 109.922C80.1426 110.059 80.1016 110.162 80.0195 110.232C79.9414 110.303 79.8262 110.338 79.6738 110.338H76.9727C76.7891 110.338 76.6602 110.307 76.5859 110.244C76.5156 110.182 76.4805 110.074 76.4805 109.922C76.4805 109.781 76.5176 109.676 76.5918 109.605C76.6699 109.535 76.7852 109.5 76.9375 109.5H78.209L79.1582 107.631L77.0078 103.418C76.75 103.418 76.5723 103.387 76.4746 103.324C76.3809 103.262 76.334 103.152 76.334 102.996C76.334 102.859 76.373 102.758 76.4512 102.691C76.5293 102.621 76.6465 102.586 76.8027 102.586H78.4375C78.6562 102.586 78.8027 102.617 78.877 102.68C78.9512 102.738 78.9883 102.844 78.9883 102.996C78.9883 103.152 78.9395 103.262 78.8418 103.324C78.7441 103.387 78.5645 103.418 78.3027 103.418H78.0859L79.6738 106.646L81.291 103.418H81.0625C80.793 103.418 80.6074 103.387 80.5059 103.324C80.4043 103.262 80.3535 103.152 80.3535 102.996C80.3535 102.844 80.3906 102.738 80.4648 102.68C80.5391 102.617 80.6875 102.586 80.9102 102.586H82.3574C82.5176 102.586 82.6348 102.621 82.709 102.691C82.7871 102.758 82.8262 102.859 82.8262 102.996C82.8262 103.145 82.7832 103.25 82.6973 103.312C82.6113 103.375 82.459 103.41 82.2402 103.418L79.1582 109.5ZM86.8047 107.326C87.4062 107.326 87.8984 107.137 88.2812 106.758C88.668 106.375 88.8613 105.889 88.8613 105.299C88.8613 104.709 88.668 104.223 88.2812 103.84C87.8945 103.453 87.4023 103.26 86.8047 103.26C86.207 103.26 85.7148 103.453 85.3281 103.84C84.9453 104.223 84.7539 104.709 84.7539 105.299C84.7539 105.893 84.9453 106.379 85.3281 106.758C85.7109 107.137 86.2031 107.326 86.8047 107.326ZM89.8809 105.299C89.8809 106.135 89.5957 106.818 89.0254 107.35C88.4551 107.881 87.7148 108.146 86.8047 108.146C85.8984 108.146 85.1602 107.881 84.5898 107.35C84.0195 106.818 83.7344 106.135 83.7344 105.299C83.7344 104.463 84.0195 103.781 84.5898 103.254C85.1602 102.723 85.8984 102.457 86.8047 102.457C87.7109 102.457 88.4492 102.723 89.0195 103.254C89.5938 103.785 89.8809 104.467 89.8809 105.299ZM92.5527 105.838C92.5527 106.33 92.6562 106.689 92.8633 106.916C93.0703 107.143 93.3984 107.256 93.8477 107.256C94.2734 107.256 94.6367 107.121 94.9375 106.852C95.2422 106.582 95.3945 106.244 95.3945 105.838V103.418H94.5918C94.4395 103.418 94.3281 103.387 94.2578 103.324C94.1914 103.258 94.1582 103.156 94.1582 103.02C94.1582 102.871 94.1953 102.762 94.2695 102.691C94.3438 102.621 94.4629 102.586 94.627 102.586H95.875C96.0234 102.586 96.127 102.619 96.1855 102.686C96.248 102.748 96.2793 102.904 96.2793 103.154V107.174H96.5488C96.7402 107.174 96.877 107.205 96.959 107.268C97.0449 107.33 97.0879 107.434 97.0879 107.578C97.0879 107.719 97.0469 107.824 96.9648 107.895C96.8867 107.965 96.7715 108 96.6191 108H95.7285C95.623 108 95.541 107.979 95.4824 107.936C95.4238 107.893 95.3945 107.834 95.3945 107.76V107.361C95.0195 107.65 94.6973 107.85 94.4277 107.959C94.1621 108.064 93.8809 108.117 93.584 108.117C92.9395 108.117 92.4551 107.947 92.1309 107.607C91.8105 107.264 91.6504 106.746 91.6504 106.055V103.418H91.5273C91.2617 103.418 91.0801 103.387 90.9824 103.324C90.8848 103.262 90.8359 103.152 90.8359 102.996C90.8359 102.859 90.873 102.758 90.9473 102.691C91.0254 102.621 91.1445 102.586 91.3047 102.586H92.1895C92.3262 102.586 92.4199 102.613 92.4707 102.668C92.5254 102.723 92.5527 102.844 92.5527 103.031V105.838ZM100.645 107.174H102.59C102.742 107.174 102.854 107.207 102.924 107.273C102.998 107.336 103.035 107.438 103.035 107.578C103.035 107.738 103 107.85 102.93 107.912C102.863 107.971 102.738 108 102.555 108H98.7227C98.5703 108 98.4551 107.965 98.377 107.895C98.2988 107.824 98.2598 107.719 98.2598 107.578C98.2598 107.441 98.2988 107.34 98.377 107.273C98.459 107.207 98.584 107.174 98.752 107.174H99.7715V103.418H99.373C98.9941 103.418 98.7578 103.389 98.6641 103.33C98.5703 103.268 98.5234 103.156 98.5234 102.996C98.5234 102.859 98.5605 102.758 98.6348 102.691C98.7129 102.621 98.8301 102.586 98.9863 102.586H100.322C100.428 102.586 100.508 102.607 100.562 102.65C100.617 102.689 100.645 102.748 100.645 102.826V103.822C101.016 103.357 101.402 103.012 101.805 102.785C102.207 102.559 102.641 102.445 103.105 102.445C103.453 102.445 103.734 102.516 103.949 102.656C104.164 102.797 104.271 102.979 104.271 103.201C104.271 103.346 104.217 103.475 104.107 103.588C104.002 103.697 103.885 103.752 103.756 103.752C103.666 103.752 103.514 103.693 103.299 103.576C103.088 103.455 102.898 103.395 102.73 103.395C102.426 103.395 102.104 103.504 101.764 103.723C101.428 103.938 101.055 104.279 100.645 104.748V107.174ZM105.871 107.578V106.535C105.871 106.363 105.902 106.24 105.965 106.166C106.031 106.092 106.137 106.055 106.281 106.055C106.441 106.055 106.568 106.164 106.662 106.383C106.725 106.516 106.781 106.615 106.832 106.682C106.996 106.893 107.238 107.062 107.559 107.191C107.879 107.316 108.232 107.379 108.619 107.379C109.033 107.379 109.365 107.295 109.615 107.127C109.865 106.959 109.99 106.738 109.99 106.465C109.99 106.188 109.889 105.99 109.686 105.873C109.486 105.756 109.143 105.697 108.654 105.697H108.332C107.535 105.697 106.928 105.559 106.51 105.281C106.092 105.004 105.883 104.602 105.883 104.074C105.883 103.559 106.086 103.158 106.492 102.873C106.902 102.588 107.477 102.445 108.215 102.445C108.516 102.445 108.822 102.488 109.135 102.574C109.447 102.656 109.611 102.697 109.627 102.697C109.67 102.697 109.752 102.66 109.873 102.586C109.994 102.508 110.113 102.469 110.23 102.469C110.363 102.469 110.461 102.518 110.523 102.615C110.59 102.713 110.623 102.859 110.623 103.055V103.74C110.623 103.947 110.592 104.098 110.529 104.191C110.467 104.281 110.367 104.326 110.23 104.326C110.113 104.326 109.969 104.227 109.797 104.027C109.676 103.891 109.576 103.787 109.498 103.717C109.291 103.525 109.07 103.389 108.836 103.307C108.602 103.221 108.326 103.178 108.01 103.178C107.643 103.178 107.346 103.26 107.119 103.424C106.896 103.584 106.785 103.789 106.785 104.039C106.785 104.285 106.9 104.461 107.131 104.566C107.361 104.672 107.857 104.732 108.619 104.748C109.432 104.768 110.025 104.91 110.4 105.176C110.775 105.438 110.963 105.844 110.963 106.395C110.963 106.922 110.756 107.344 110.342 107.66C109.928 107.977 109.369 108.135 108.666 108.135C108.443 108.135 108.195 108.113 107.922 108.07C107.648 108.031 107.305 107.963 106.891 107.865C106.754 107.955 106.637 108.021 106.539 108.064C106.441 108.111 106.359 108.135 106.293 108.135C106.156 108.135 106.051 108.088 105.977 107.994C105.906 107.896 105.871 107.758 105.871 107.578ZM115.094 100.898C115.094 100.477 115.131 100.211 115.205 100.102C115.283 99.9922 115.447 99.9375 115.697 99.9375C115.939 99.9375 116.1 99.9844 116.178 100.078C116.256 100.168 116.295 100.385 116.295 100.729C116.295 101.064 116.258 101.273 116.184 101.355C116.113 101.434 115.951 101.473 115.697 101.473C115.447 101.473 115.283 101.436 115.205 101.361C115.131 101.287 115.094 101.133 115.094 100.898ZM116.178 107.174H118.059C118.211 107.174 118.322 107.207 118.393 107.273C118.467 107.336 118.504 107.438 118.504 107.578C118.504 107.738 118.469 107.85 118.398 107.912C118.332 107.971 118.207 108 118.023 108H113.477C113.32 108 113.203 107.965 113.125 107.895C113.047 107.824 113.008 107.719 113.008 107.578C113.008 107.441 113.049 107.34 113.131 107.273C113.213 107.207 113.336 107.174 113.5 107.174H115.287V103.418H114.145C113.984 103.418 113.861 103.383 113.775 103.312C113.693 103.238 113.652 103.133 113.652 102.996C113.652 102.859 113.691 102.758 113.77 102.691C113.848 102.621 113.965 102.586 114.121 102.586H115.838C115.943 102.586 116.025 102.607 116.084 102.65C116.146 102.693 116.178 102.752 116.178 102.826V107.174ZM124.439 102.914C124.631 102.914 124.77 102.947 124.855 103.014C124.945 103.08 124.99 103.186 124.99 103.33C124.99 103.467 124.949 103.57 124.867 103.641C124.785 103.707 124.662 103.74 124.498 103.74H122.125V105.697C122.125 106.338 122.207 106.76 122.371 106.963C122.539 107.166 122.824 107.268 123.227 107.268C123.582 107.268 124.008 107.164 124.504 106.957C125 106.75 125.307 106.646 125.424 106.646C125.533 106.646 125.625 106.686 125.699 106.764C125.777 106.842 125.816 106.938 125.816 107.051C125.816 107.18 125.768 107.293 125.67 107.391C125.576 107.484 125.414 107.576 125.184 107.666C124.801 107.818 124.455 107.93 124.146 108C123.842 108.07 123.555 108.105 123.285 108.105C122.828 108.105 122.443 108.033 122.131 107.889C121.822 107.74 121.592 107.521 121.439 107.232C121.361 107.096 121.305 106.934 121.27 106.746C121.238 106.559 121.223 106.27 121.223 105.879V105.697V103.74H120.227C120.062 103.74 119.943 103.709 119.869 103.646C119.795 103.58 119.758 103.475 119.758 103.33C119.758 103.17 119.809 103.061 119.91 103.002C120.012 102.943 120.229 102.914 120.561 102.914H121.223V101.713V101.402C121.223 101.234 121.258 101.111 121.328 101.033C121.402 100.951 121.516 100.91 121.668 100.91C121.84 100.91 121.959 100.959 122.025 101.057C122.092 101.154 122.125 101.377 122.125 101.725V102.914H124.439ZM128.066 105.551C128.098 106.113 128.287 106.549 128.635 106.857C128.986 107.162 129.465 107.314 130.07 107.314C130.527 107.314 131.025 107.193 131.564 106.951C132.104 106.705 132.43 106.582 132.543 106.582C132.66 106.582 132.758 106.619 132.836 106.693C132.914 106.768 132.953 106.859 132.953 106.969C132.953 107.082 132.912 107.186 132.83 107.279C132.748 107.373 132.617 107.465 132.438 107.555C132.047 107.746 131.643 107.893 131.225 107.994C130.811 108.096 130.398 108.146 129.988 108.146C129.098 108.146 128.385 107.891 127.85 107.379C127.314 106.863 127.047 106.182 127.047 105.334C127.047 104.471 127.33 103.771 127.896 103.236C128.463 102.701 129.201 102.434 130.111 102.434C130.936 102.434 131.619 102.684 132.162 103.184C132.705 103.684 132.977 104.289 132.977 105C132.977 105.219 132.93 105.365 132.836 105.439C132.746 105.514 132.498 105.551 132.092 105.551H132.004H128.066ZM128.096 104.783H131.91C131.852 104.318 131.656 103.945 131.324 103.664C130.996 103.379 130.592 103.236 130.111 103.236C129.592 103.236 129.154 103.373 128.799 103.646C128.443 103.92 128.209 104.299 128.096 104.783ZM136.105 107.039C136.105 106.734 136.211 106.484 136.422 106.289C136.637 106.094 136.914 105.996 137.254 105.996C137.602 105.996 137.881 106.092 138.092 106.283C138.303 106.475 138.408 106.727 138.408 107.039C138.408 107.352 138.301 107.604 138.086 107.795C137.875 107.986 137.598 108.082 137.254 108.082C136.91 108.082 136.633 107.986 136.422 107.795C136.211 107.604 136.105 107.352 136.105 107.039ZM146.225 102.938V102.914C146.225 102.785 146.262 102.691 146.336 102.633C146.41 102.57 146.525 102.539 146.682 102.539C146.842 102.539 146.951 102.586 147.01 102.68C147.072 102.773 147.104 102.967 147.104 103.26V104.35C147.104 104.494 147.066 104.604 146.992 104.678C146.918 104.748 146.807 104.783 146.658 104.783C146.553 104.783 146.461 104.754 146.383 104.695C146.309 104.633 146.217 104.506 146.107 104.314C145.92 103.998 145.691 103.76 145.422 103.6C145.156 103.436 144.85 103.354 144.502 103.354C143.893 103.354 143.396 103.533 143.014 103.893C142.635 104.252 142.445 104.717 142.445 105.287C142.445 105.869 142.627 106.346 142.99 106.717C143.357 107.084 143.828 107.268 144.402 107.268C144.664 107.268 144.912 107.232 145.146 107.162C145.385 107.088 145.609 106.979 145.82 106.834C145.895 106.787 145.994 106.715 146.119 106.617C146.373 106.41 146.572 106.307 146.717 106.307C146.838 106.307 146.936 106.346 147.01 106.424C147.088 106.498 147.127 106.596 147.127 106.717C147.127 107.025 146.834 107.342 146.248 107.666C145.666 107.986 145.047 108.146 144.391 108.146C143.543 108.146 142.836 107.875 142.27 107.332C141.707 106.789 141.426 106.111 141.426 105.299C141.426 104.486 141.707 103.809 142.27 103.266C142.832 102.719 143.535 102.445 144.379 102.445C144.676 102.445 144.973 102.486 145.27 102.568C145.57 102.646 145.889 102.77 146.225 102.938ZM151.668 107.326C152.27 107.326 152.762 107.137 153.145 106.758C153.531 106.375 153.725 105.889 153.725 105.299C153.725 104.709 153.531 104.223 153.145 103.84C152.758 103.453 152.266 103.26 151.668 103.26C151.07 103.26 150.578 103.453 150.191 103.84C149.809 104.223 149.617 104.709 149.617 105.299C149.617 105.893 149.809 106.379 150.191 106.758C150.574 107.137 151.066 107.326 151.668 107.326ZM154.744 105.299C154.744 106.135 154.459 106.818 153.889 107.35C153.318 107.881 152.578 108.146 151.668 108.146C150.762 108.146 150.023 107.881 149.453 107.35C148.883 106.818 148.598 106.135 148.598 105.299C148.598 104.463 148.883 103.781 149.453 103.254C150.023 102.723 150.762 102.457 151.668 102.457C152.574 102.457 153.312 102.723 153.883 103.254C154.457 103.785 154.744 104.467 154.744 105.299ZM161.049 104.736C161.049 104.186 160.998 103.814 160.896 103.623C160.799 103.428 160.629 103.33 160.387 103.33C160.098 103.33 159.867 103.455 159.695 103.705C159.527 103.955 159.443 104.299 159.443 104.736V107.174H159.549C159.787 107.174 159.945 107.203 160.023 107.262C160.105 107.316 160.146 107.422 160.146 107.578C160.146 107.719 160.113 107.824 160.047 107.895C159.98 107.965 159.879 108 159.742 108H158.998C158.83 108 158.715 107.961 158.652 107.883C158.594 107.805 158.564 107.637 158.564 107.379V107.209V104.736V104.279C158.564 103.986 158.498 103.756 158.365 103.588C158.232 103.416 158.051 103.33 157.82 103.33C157.645 103.33 157.482 103.383 157.334 103.488C157.189 103.59 157.064 103.742 156.959 103.945V107.174H157.176C157.41 107.174 157.568 107.203 157.65 107.262C157.732 107.32 157.773 107.426 157.773 107.578C157.773 107.738 157.74 107.85 157.674 107.912C157.607 107.971 157.48 108 157.293 108H155.734C155.582 108 155.469 107.967 155.395 107.9C155.324 107.83 155.289 107.723 155.289 107.578C155.289 107.422 155.334 107.316 155.424 107.262C155.518 107.203 155.697 107.174 155.963 107.174H156.08V103.418H155.975C155.701 103.418 155.514 103.387 155.412 103.324C155.314 103.262 155.266 103.152 155.266 102.996C155.266 102.859 155.305 102.758 155.383 102.691C155.461 102.621 155.578 102.586 155.734 102.586H156.631C156.76 102.586 156.844 102.609 156.883 102.656C156.926 102.699 156.951 102.793 156.959 102.938C157.119 102.766 157.291 102.639 157.475 102.557C157.658 102.475 157.865 102.434 158.096 102.434C158.369 102.434 158.594 102.494 158.77 102.615C158.949 102.732 159.082 102.912 159.168 103.154C159.332 102.908 159.521 102.727 159.736 102.609C159.951 102.492 160.197 102.434 160.475 102.434C160.979 102.434 161.346 102.598 161.576 102.926C161.811 103.254 161.928 103.785 161.928 104.52V107.174H162.021C162.264 107.174 162.426 107.203 162.508 107.262C162.59 107.32 162.631 107.426 162.631 107.578C162.631 107.719 162.596 107.824 162.525 107.895C162.455 107.965 162.352 108 162.215 108H161.506C161.35 108 161.234 107.953 161.16 107.859C161.086 107.766 161.049 107.617 161.049 107.414V104.736ZM164.635 107.197C164.635 106.939 164.732 106.729 164.928 106.564C165.127 106.4 165.389 106.318 165.713 106.318C166.041 106.318 166.305 106.4 166.504 106.564C166.703 106.725 166.803 106.936 166.803 107.197C166.803 107.459 166.701 107.672 166.498 107.836C166.299 108 166.037 108.082 165.713 108.082C165.393 108.082 165.133 108 164.934 107.836C164.734 107.668 164.635 107.455 164.635 107.197ZM165.279 104.977C165.279 104.766 165.314 104.6 165.385 104.479C165.459 104.357 165.584 104.252 165.76 104.162C165.865 104.107 166.021 104.031 166.229 103.934C166.998 103.578 167.383 103.162 167.383 102.686C167.383 102.326 167.256 102.035 167.002 101.812C166.748 101.586 166.414 101.473 166 101.473C165.727 101.473 165.475 101.51 165.244 101.584C165.014 101.654 164.873 101.732 164.822 101.818C164.811 101.842 164.799 101.898 164.787 101.988C164.756 102.34 164.617 102.516 164.371 102.516C164.242 102.516 164.139 102.469 164.061 102.375C163.986 102.281 163.949 102.156 163.949 102V101.426C163.949 101.211 164.16 101.029 164.582 100.881C165.004 100.732 165.518 100.658 166.123 100.658C166.775 100.658 167.305 100.848 167.711 101.227C168.121 101.605 168.326 102.096 168.326 102.697C168.326 103.178 168.16 103.584 167.828 103.916C167.496 104.244 166.939 104.553 166.158 104.842V105.311C166.158 105.439 166.117 105.545 166.035 105.627C165.953 105.705 165.846 105.744 165.713 105.744C165.576 105.744 165.469 105.707 165.391 105.633C165.316 105.559 165.279 105.455 165.279 105.322V104.977ZM171.83 105.838C171.83 106.33 171.934 106.689 172.141 106.916C172.348 107.143 172.676 107.256 173.125 107.256C173.551 107.256 173.914 107.121 174.215 106.852C174.52 106.582 174.672 106.244 174.672 105.838V103.418H173.869C173.717 103.418 173.605 103.387 173.535 103.324C173.469 103.258 173.436 103.156 173.436 103.02C173.436 102.871 173.473 102.762 173.547 102.691C173.621 102.621 173.74 102.586 173.904 102.586H175.152C175.301 102.586 175.404 102.619 175.463 102.686C175.525 102.748 175.557 102.904 175.557 103.154V107.174H175.826C176.018 107.174 176.154 107.205 176.236 107.268C176.322 107.33 176.365 107.434 176.365 107.578C176.365 107.719 176.324 107.824 176.242 107.895C176.164 107.965 176.049 108 175.896 108H175.006C174.9 108 174.818 107.979 174.76 107.936C174.701 107.893 174.672 107.834 174.672 107.76V107.361C174.297 107.65 173.975 107.85 173.705 107.959C173.439 108.064 173.158 108.117 172.861 108.117C172.217 108.117 171.732 107.947 171.408 107.607C171.088 107.264 170.928 106.746 170.928 106.055V103.418H170.805C170.539 103.418 170.357 103.387 170.26 103.324C170.162 103.262 170.113 103.152 170.113 102.996C170.113 102.859 170.15 102.758 170.225 102.691C170.303 102.621 170.422 102.586 170.582 102.586H171.467C171.604 102.586 171.697 102.613 171.748 102.668C171.803 102.723 171.83 102.844 171.83 103.031V105.838ZM182.096 102.914C182.287 102.914 182.426 102.947 182.512 103.014C182.602 103.08 182.646 103.186 182.646 103.33C182.646 103.467 182.605 103.57 182.523 103.641C182.441 103.707 182.318 103.74 182.154 103.74H179.781V105.697C179.781 106.338 179.863 106.76 180.027 106.963C180.195 107.166 180.48 107.268 180.883 107.268C181.238 107.268 181.664 107.164 182.16 106.957C182.656 106.75 182.963 106.646 183.08 106.646C183.189 106.646 183.281 106.686 183.355 106.764C183.434 106.842 183.473 106.938 183.473 107.051C183.473 107.18 183.424 107.293 183.326 107.391C183.232 107.484 183.07 107.576 182.84 107.666C182.457 107.818 182.111 107.93 181.803 108C181.498 108.07 181.211 108.105 180.941 108.105C180.484 108.105 180.1 108.033 179.787 107.889C179.479 107.74 179.248 107.521 179.096 107.232C179.018 107.096 178.961 106.934 178.926 106.746C178.895 106.559 178.879 106.27 178.879 105.879V105.697V103.74H177.883C177.719 103.74 177.6 103.709 177.525 103.646C177.451 103.58 177.414 103.475 177.414 103.33C177.414 103.17 177.465 103.061 177.566 103.002C177.668 102.943 177.885 102.914 178.217 102.914H178.879V101.713V101.402C178.879 101.234 178.914 101.111 178.984 101.033C179.059 100.951 179.172 100.91 179.324 100.91C179.496 100.91 179.615 100.959 179.682 101.057C179.748 101.154 179.781 101.377 179.781 101.725V102.914H182.096ZM189.877 104.736C189.877 104.186 189.826 103.814 189.725 103.623C189.627 103.428 189.457 103.33 189.215 103.33C188.926 103.33 188.695 103.455 188.523 103.705C188.355 103.955 188.271 104.299 188.271 104.736V107.174H188.377C188.615 107.174 188.773 107.203 188.852 107.262C188.934 107.316 188.975 107.422 188.975 107.578C188.975 107.719 188.941 107.824 188.875 107.895C188.809 107.965 188.707 108 188.57 108H187.826C187.658 108 187.543 107.961 187.48 107.883C187.422 107.805 187.393 107.637 187.393 107.379V107.209V104.736V104.279C187.393 103.986 187.326 103.756 187.193 103.588C187.061 103.416 186.879 103.33 186.648 103.33C186.473 103.33 186.311 103.383 186.162 103.488C186.018 103.59 185.893 103.742 185.787 103.945V107.174H186.004C186.238 107.174 186.396 107.203 186.479 107.262C186.561 107.32 186.602 107.426 186.602 107.578C186.602 107.738 186.568 107.85 186.502 107.912C186.436 107.971 186.309 108 186.121 108H184.562C184.41 108 184.297 107.967 184.223 107.9C184.152 107.83 184.117 107.723 184.117 107.578C184.117 107.422 184.162 107.316 184.252 107.262C184.346 107.203 184.525 107.174 184.791 107.174H184.908V103.418H184.803C184.529 103.418 184.342 103.387 184.24 103.324C184.143 103.262 184.094 103.152 184.094 102.996C184.094 102.859 184.133 102.758 184.211 102.691C184.289 102.621 184.406 102.586 184.562 102.586H185.459C185.588 102.586 185.672 102.609 185.711 102.656C185.754 102.699 185.779 102.793 185.787 102.938C185.947 102.766 186.119 102.639 186.303 102.557C186.486 102.475 186.693 102.434 186.924 102.434C187.197 102.434 187.422 102.494 187.598 102.615C187.777 102.732 187.91 102.912 187.996 103.154C188.16 102.908 188.35 102.727 188.564 102.609C188.779 102.492 189.025 102.434 189.303 102.434C189.807 102.434 190.174 102.598 190.404 102.926C190.639 103.254 190.756 103.785 190.756 104.52V107.174H190.85C191.092 107.174 191.254 107.203 191.336 107.262C191.418 107.32 191.459 107.426 191.459 107.578C191.459 107.719 191.424 107.824 191.354 107.895C191.283 107.965 191.18 108 191.043 108H190.334C190.178 108 190.062 107.953 189.988 107.859C189.914 107.766 189.877 107.617 189.877 107.414V104.736ZM198.619 110.139V110.83H191.207V110.139H198.619ZM199.562 107.578V106.535C199.562 106.363 199.594 106.24 199.656 106.166C199.723 106.092 199.828 106.055 199.973 106.055C200.133 106.055 200.26 106.164 200.354 106.383C200.416 106.516 200.473 106.615 200.523 106.682C200.688 106.893 200.93 107.062 201.25 107.191C201.57 107.316 201.924 107.379 202.311 107.379C202.725 107.379 203.057 107.295 203.307 107.127C203.557 106.959 203.682 106.738 203.682 106.465C203.682 106.188 203.58 105.99 203.377 105.873C203.178 105.756 202.834 105.697 202.346 105.697H202.023C201.227 105.697 200.619 105.559 200.201 105.281C199.783 105.004 199.574 104.602 199.574 104.074C199.574 103.559 199.777 103.158 200.184 102.873C200.594 102.588 201.168 102.445 201.906 102.445C202.207 102.445 202.514 102.488 202.826 102.574C203.139 102.656 203.303 102.697 203.318 102.697C203.361 102.697 203.443 102.66 203.564 102.586C203.686 102.508 203.805 102.469 203.922 102.469C204.055 102.469 204.152 102.518 204.215 102.615C204.281 102.713 204.314 102.859 204.314 103.055V103.74C204.314 103.947 204.283 104.098 204.221 104.191C204.158 104.281 204.059 104.326 203.922 104.326C203.805 104.326 203.66 104.227 203.488 104.027C203.367 103.891 203.268 103.787 203.189 103.717C202.982 103.525 202.762 103.389 202.527 103.307C202.293 103.221 202.018 103.178 201.701 103.178C201.334 103.178 201.037 103.26 200.811 103.424C200.588 103.584 200.477 103.789 200.477 104.039C200.477 104.285 200.592 104.461 200.822 104.566C201.053 104.672 201.549 104.732 202.311 104.748C203.123 104.768 203.717 104.91 204.092 105.176C204.467 105.438 204.654 105.844 204.654 106.395C204.654 106.922 204.447 107.344 204.033 107.66C203.619 107.977 203.061 108.135 202.357 108.135C202.135 108.135 201.887 108.113 201.613 108.07C201.34 108.031 200.996 107.963 200.582 107.865C200.445 107.955 200.328 108.021 200.23 108.064C200.133 108.111 200.051 108.135 199.984 108.135C199.848 108.135 199.742 108.088 199.668 107.994C199.598 107.896 199.562 107.758 199.562 107.578ZM209.324 107.326C209.926 107.326 210.418 107.137 210.801 106.758C211.188 106.375 211.381 105.889 211.381 105.299C211.381 104.709 211.188 104.223 210.801 103.84C210.414 103.453 209.922 103.26 209.324 103.26C208.727 103.26 208.234 103.453 207.848 103.84C207.465 104.223 207.273 104.709 207.273 105.299C207.273 105.893 207.465 106.379 207.848 106.758C208.23 107.137 208.723 107.326 209.324 107.326ZM212.4 105.299C212.4 106.135 212.115 106.818 211.545 107.35C210.975 107.881 210.234 108.146 209.324 108.146C208.418 108.146 207.68 107.881 207.109 107.35C206.539 106.818 206.254 106.135 206.254 105.299C206.254 104.463 206.539 103.781 207.109 103.254C207.68 102.723 208.418 102.457 209.324 102.457C210.23 102.457 210.969 102.723 211.539 103.254C212.113 103.785 212.4 104.467 212.4 105.299ZM215.072 105.838C215.072 106.33 215.176 106.689 215.383 106.916C215.59 107.143 215.918 107.256 216.367 107.256C216.793 107.256 217.156 107.121 217.457 106.852C217.762 106.582 217.914 106.244 217.914 105.838V103.418H217.111C216.959 103.418 216.848 103.387 216.777 103.324C216.711 103.258 216.678 103.156 216.678 103.02C216.678 102.871 216.715 102.762 216.789 102.691C216.863 102.621 216.982 102.586 217.146 102.586H218.395C218.543 102.586 218.646 102.619 218.705 102.686C218.768 102.748 218.799 102.904 218.799 103.154V107.174H219.068C219.26 107.174 219.396 107.205 219.479 107.268C219.564 107.33 219.607 107.434 219.607 107.578C219.607 107.719 219.566 107.824 219.484 107.895C219.406 107.965 219.291 108 219.139 108H218.248C218.143 108 218.061 107.979 218.002 107.936C217.943 107.893 217.914 107.834 217.914 107.76V107.361C217.539 107.65 217.217 107.85 216.947 107.959C216.682 108.064 216.4 108.117 216.104 108.117C215.459 108.117 214.975 107.947 214.65 107.607C214.33 107.264 214.17 106.746 214.17 106.055V103.418H214.047C213.781 103.418 213.6 103.387 213.502 103.324C213.404 103.262 213.355 103.152 213.355 102.996C213.355 102.859 213.393 102.758 213.467 102.691C213.545 102.621 213.664 102.586 213.824 102.586H214.709C214.846 102.586 214.939 102.613 214.99 102.668C215.045 102.723 215.072 102.844 215.072 103.031V105.838ZM223.164 107.174H225.109C225.262 107.174 225.373 107.207 225.443 107.273C225.518 107.336 225.555 107.438 225.555 107.578C225.555 107.738 225.52 107.85 225.449 107.912C225.383 107.971 225.258 108 225.074 108H221.242C221.09 108 220.975 107.965 220.896 107.895C220.818 107.824 220.779 107.719 220.779 107.578C220.779 107.441 220.818 107.34 220.896 107.273C220.979 107.207 221.104 107.174 221.271 107.174H222.291V103.418H221.893C221.514 103.418 221.277 103.389 221.184 103.33C221.09 103.268 221.043 103.156 221.043 102.996C221.043 102.859 221.08 102.758 221.154 102.691C221.232 102.621 221.35 102.586 221.506 102.586H222.842C222.947 102.586 223.027 102.607 223.082 102.65C223.137 102.689 223.164 102.748 223.164 102.826V103.822C223.535 103.357 223.922 103.012 224.324 102.785C224.727 102.559 225.16 102.445 225.625 102.445C225.973 102.445 226.254 102.516 226.469 102.656C226.684 102.797 226.791 102.979 226.791 103.201C226.791 103.346 226.736 103.475 226.627 103.588C226.521 103.697 226.404 103.752 226.275 103.752C226.186 103.752 226.033 103.693 225.818 103.576C225.607 103.455 225.418 103.395 225.25 103.395C224.945 103.395 224.623 103.504 224.283 103.723C223.947 103.938 223.574 104.279 223.164 104.748V107.174ZM232.709 102.938V102.914C232.709 102.785 232.746 102.691 232.82 102.633C232.895 102.57 233.01 102.539 233.166 102.539C233.326 102.539 233.436 102.586 233.494 102.68C233.557 102.773 233.588 102.967 233.588 103.26V104.35C233.588 104.494 233.551 104.604 233.477 104.678C233.402 104.748 233.291 104.783 233.143 104.783C233.037 104.783 232.945 104.754 232.867 104.695C232.793 104.633 232.701 104.506 232.592 104.314C232.404 103.998 232.176 103.76 231.906 103.6C231.641 103.436 231.334 103.354 230.986 103.354C230.377 103.354 229.881 103.533 229.498 103.893C229.119 104.252 228.93 104.717 228.93 105.287C228.93 105.869 229.111 106.346 229.475 106.717C229.842 107.084 230.312 107.268 230.887 107.268C231.148 107.268 231.396 107.232 231.631 107.162C231.869 107.088 232.094 106.979 232.305 106.834C232.379 106.787 232.479 106.715 232.604 106.617C232.857 106.41 233.057 106.307 233.201 106.307C233.322 106.307 233.42 106.346 233.494 106.424C233.572 106.498 233.611 106.596 233.611 106.717C233.611 107.025 233.318 107.342 232.732 107.666C232.15 107.986 231.531 108.146 230.875 108.146C230.027 108.146 229.32 107.875 228.754 107.332C228.191 106.789 227.91 106.111 227.91 105.299C227.91 104.486 228.191 103.809 228.754 103.266C229.316 102.719 230.02 102.445 230.863 102.445C231.16 102.445 231.457 102.486 231.754 102.568C232.055 102.646 232.373 102.77 232.709 102.938ZM236.172 105.551C236.203 106.113 236.393 106.549 236.74 106.857C237.092 107.162 237.57 107.314 238.176 107.314C238.633 107.314 239.131 107.193 239.67 106.951C240.209 106.705 240.535 106.582 240.648 106.582C240.766 106.582 240.863 106.619 240.941 106.693C241.02 106.768 241.059 106.859 241.059 106.969C241.059 107.082 241.018 107.186 240.936 107.279C240.854 107.373 240.723 107.465 240.543 107.555C240.152 107.746 239.748 107.893 239.33 107.994C238.916 108.096 238.504 108.146 238.094 108.146C237.203 108.146 236.49 107.891 235.955 107.379C235.42 106.863 235.152 106.182 235.152 105.334C235.152 104.471 235.436 103.771 236.002 103.236C236.568 102.701 237.307 102.434 238.217 102.434C239.041 102.434 239.725 102.684 240.268 103.184C240.811 103.684 241.082 104.289 241.082 105C241.082 105.219 241.035 105.365 240.941 105.439C240.852 105.514 240.604 105.551 240.197 105.551H240.109H236.172ZM236.201 104.783H240.016C239.957 104.318 239.762 103.945 239.43 103.664C239.102 103.379 238.697 103.236 238.217 103.236C237.697 103.236 237.26 103.373 236.904 103.646C236.549 103.92 236.314 104.299 236.201 104.783ZM242.734 104.854H247.99C248.107 104.854 248.197 104.893 248.26 104.971C248.326 105.045 248.359 105.15 248.359 105.287C248.359 105.428 248.326 105.535 248.26 105.609C248.197 105.684 248.107 105.721 247.99 105.721H242.734C242.613 105.721 242.52 105.684 242.453 105.609C242.391 105.535 242.359 105.428 242.359 105.287C242.359 105.146 242.391 105.039 242.453 104.965C242.52 104.891 242.613 104.854 242.734 104.854ZM242.734 102.891H247.99C248.107 102.891 248.197 102.928 248.26 103.002C248.326 103.076 248.359 103.182 248.359 103.318C248.359 103.459 248.326 103.566 248.26 103.641C248.197 103.715 248.107 103.752 247.99 103.752H242.734C242.613 103.752 242.52 103.717 242.453 103.646C242.391 103.572 242.359 103.463 242.359 103.318C242.359 103.178 242.391 103.072 242.453 103.002C242.52 102.928 242.613 102.891 242.734 102.891ZM250.387 107.174V103.418H250.275C250.01 103.418 249.826 103.387 249.725 103.324C249.627 103.262 249.578 103.152 249.578 102.996C249.578 102.852 249.619 102.748 249.701 102.686C249.783 102.619 249.916 102.586 250.1 102.586H250.375H250.938C251.043 102.586 251.125 102.607 251.184 102.65C251.242 102.693 251.271 102.752 251.271 102.826V103.225C251.557 102.959 251.838 102.764 252.115 102.639C252.396 102.51 252.688 102.445 252.988 102.445C253.578 102.445 254.041 102.629 254.377 102.996C254.717 103.363 254.887 103.871 254.887 104.52V107.174H255.162C255.357 107.174 255.498 107.207 255.584 107.273C255.67 107.336 255.713 107.438 255.713 107.578C255.713 107.73 255.666 107.84 255.572 107.906C255.482 107.969 255.32 108 255.086 108H253.791C253.541 108 253.381 107.971 253.311 107.912C253.24 107.854 253.205 107.742 253.205 107.578C253.205 107.426 253.246 107.32 253.328 107.262C253.41 107.203 253.564 107.174 253.791 107.174H253.996V104.736C253.996 104.279 253.893 103.932 253.686 103.693C253.479 103.451 253.178 103.33 252.783 103.33C252.385 103.33 252.033 103.465 251.729 103.734C251.424 104.004 251.271 104.338 251.271 104.736V107.174H251.477C251.711 107.174 251.869 107.203 251.951 107.262C252.033 107.32 252.074 107.426 252.074 107.578C252.074 107.742 252.039 107.854 251.969 107.912C251.898 107.971 251.727 108 251.453 108H250.387H250.07C249.91 108 249.789 107.967 249.707 107.9C249.629 107.83 249.59 107.723 249.59 107.578C249.59 107.422 249.635 107.316 249.725 107.262C249.818 107.203 249.998 107.174 250.264 107.174H250.387ZM257.793 105.551C257.824 106.113 258.014 106.549 258.361 106.857C258.713 107.162 259.191 107.314 259.797 107.314C260.254 107.314 260.752 107.193 261.291 106.951C261.83 106.705 262.156 106.582 262.27 106.582C262.387 106.582 262.484 106.619 262.562 106.693C262.641 106.768 262.68 106.859 262.68 106.969C262.68 107.082 262.639 107.186 262.557 107.279C262.475 107.373 262.344 107.465 262.164 107.555C261.773 107.746 261.369 107.893 260.951 107.994C260.537 108.096 260.125 108.146 259.715 108.146C258.824 108.146 258.111 107.891 257.576 107.379C257.041 106.863 256.773 106.182 256.773 105.334C256.773 104.471 257.057 103.771 257.623 103.236C258.189 102.701 258.928 102.434 259.838 102.434C260.662 102.434 261.346 102.684 261.889 103.184C262.432 103.684 262.703 104.289 262.703 105C262.703 105.219 262.656 105.365 262.562 105.439C262.473 105.514 262.225 105.551 261.818 105.551H261.73H257.793ZM257.822 104.783H261.637C261.578 104.318 261.383 103.945 261.051 103.664C260.723 103.379 260.318 103.236 259.838 103.236C259.318 103.236 258.881 103.373 258.525 103.646C258.17 103.92 257.936 104.299 257.822 104.783ZM266.945 105.023L266.189 107.807C266.15 107.955 266.092 108.059 266.014 108.117C265.936 108.176 265.818 108.205 265.662 108.205C265.521 108.205 265.412 108.168 265.334 108.094C265.256 108.02 265.186 107.885 265.123 107.689L263.781 103.418H263.729C263.564 103.418 263.447 103.387 263.377 103.324C263.303 103.258 263.266 103.148 263.266 102.996C263.266 102.863 263.305 102.762 263.383 102.691C263.457 102.621 263.568 102.586 263.717 102.586H265.281C265.492 102.586 265.635 102.617 265.709 102.68C265.783 102.738 265.82 102.844 265.82 102.996C265.82 103.09 265.799 103.172 265.756 103.242C265.713 103.309 265.658 103.35 265.592 103.365C265.525 103.385 265.447 103.398 265.357 103.406C265.271 103.414 265.166 103.418 265.041 103.418H264.701L265.709 106.934L266.465 104.379C266.508 104.23 266.568 104.127 266.646 104.068C266.725 104.01 266.84 103.98 266.992 103.98C267.133 103.98 267.242 104.02 267.32 104.098C267.402 104.172 267.475 104.305 267.537 104.496L268.27 106.934L269.236 103.418H269.096H268.844C268.574 103.418 268.393 103.389 268.299 103.33C268.205 103.268 268.158 103.156 268.158 102.996C268.158 102.84 268.193 102.732 268.264 102.674C268.334 102.615 268.471 102.586 268.674 102.586H270.244C270.365 102.586 270.455 102.621 270.514 102.691C270.576 102.762 270.607 102.863 270.607 102.996C270.607 103.145 270.572 103.25 270.502 103.312C270.432 103.375 270.299 103.41 270.104 103.418L268.785 107.807C268.734 107.955 268.67 108.059 268.592 108.117C268.518 108.176 268.404 108.205 268.252 108.205C268.111 108.205 268 108.166 267.918 108.088C267.836 108.014 267.768 107.881 267.713 107.689L266.945 105.023ZM271.633 107.578V106.535C271.633 106.363 271.664 106.24 271.727 106.166C271.793 106.092 271.898 106.055 272.043 106.055C272.203 106.055 272.33 106.164 272.424 106.383C272.486 106.516 272.543 106.615 272.594 106.682C272.758 106.893 273 107.062 273.32 107.191C273.641 107.316 273.994 107.379 274.381 107.379C274.795 107.379 275.127 107.295 275.377 107.127C275.627 106.959 275.752 106.738 275.752 106.465C275.752 106.188 275.65 105.99 275.447 105.873C275.248 105.756 274.904 105.697 274.416 105.697H274.094C273.297 105.697 272.689 105.559 272.271 105.281C271.854 105.004 271.645 104.602 271.645 104.074C271.645 103.559 271.848 103.158 272.254 102.873C272.664 102.588 273.238 102.445 273.977 102.445C274.277 102.445 274.584 102.488 274.896 102.574C275.209 102.656 275.373 102.697 275.389 102.697C275.432 102.697 275.514 102.66 275.635 102.586C275.756 102.508 275.875 102.469 275.992 102.469C276.125 102.469 276.223 102.518 276.285 102.615C276.352 102.713 276.385 102.859 276.385 103.055V103.74C276.385 103.947 276.354 104.098 276.291 104.191C276.229 104.281 276.129 104.326 275.992 104.326C275.875 104.326 275.73 104.227 275.559 104.027C275.438 103.891 275.338 103.787 275.26 103.717C275.053 103.525 274.832 103.389 274.598 103.307C274.363 103.221 274.088 103.178 273.771 103.178C273.404 103.178 273.107 103.26 272.881 103.424C272.658 103.584 272.547 103.789 272.547 104.039C272.547 104.285 272.662 104.461 272.893 104.566C273.123 104.672 273.619 104.732 274.381 104.748C275.193 104.768 275.787 104.91 276.162 105.176C276.537 105.438 276.725 105.844 276.725 106.395C276.725 106.922 276.518 107.344 276.104 107.66C275.689 107.977 275.131 108.135 274.428 108.135C274.205 108.135 273.957 108.113 273.684 108.07C273.41 108.031 273.066 107.963 272.652 107.865C272.516 107.955 272.398 108.021 272.301 108.064C272.203 108.111 272.121 108.135 272.055 108.135C271.918 108.135 271.812 108.088 271.738 107.994C271.668 107.896 271.633 107.758 271.633 107.578ZM281.002 101.174H280.006C279.627 101.174 279.389 101.145 279.291 101.086C279.197 101.023 279.15 100.912 279.15 100.752C279.15 100.611 279.189 100.506 279.268 100.436C279.35 100.365 279.467 100.33 279.619 100.33H281.553C281.658 100.33 281.74 100.352 281.799 100.395C281.857 100.438 281.887 100.496 281.887 100.57V107.174H283.727C283.875 107.174 283.982 107.207 284.049 107.273C284.119 107.336 284.154 107.438 284.154 107.578C284.154 107.738 284.121 107.85 284.055 107.912C283.988 107.971 283.863 108 283.68 108H279.355C279.203 108 279.086 107.965 279.004 107.895C278.926 107.824 278.887 107.719 278.887 107.578C278.887 107.441 278.928 107.34 279.01 107.273C279.092 107.207 279.215 107.174 279.379 107.174H281.002V101.174ZM286.621 105.551C286.652 106.113 286.842 106.549 287.189 106.857C287.541 107.162 288.02 107.314 288.625 107.314C289.082 107.314 289.58 107.193 290.119 106.951C290.658 106.705 290.984 106.582 291.098 106.582C291.215 106.582 291.312 106.619 291.391 106.693C291.469 106.768 291.508 106.859 291.508 106.969C291.508 107.082 291.467 107.186 291.385 107.279C291.303 107.373 291.172 107.465 290.992 107.555C290.602 107.746 290.197 107.893 289.779 107.994C289.365 108.096 288.953 108.146 288.543 108.146C287.652 108.146 286.939 107.891 286.404 107.379C285.869 106.863 285.602 106.182 285.602 105.334C285.602 104.471 285.885 103.771 286.451 103.236C287.018 102.701 287.756 102.434 288.666 102.434C289.49 102.434 290.174 102.684 290.717 103.184C291.26 103.684 291.531 104.289 291.531 105C291.531 105.219 291.484 105.365 291.391 105.439C291.301 105.514 291.053 105.551 290.646 105.551H290.559H286.621ZM286.65 104.783H290.465C290.406 104.318 290.211 103.945 289.879 103.664C289.551 103.379 289.146 103.236 288.666 103.236C288.146 103.236 287.709 103.373 287.354 103.646C286.998 103.92 286.764 104.299 286.65 104.783ZM297.408 102.914C297.6 102.914 297.738 102.947 297.824 103.014C297.914 103.08 297.959 103.186 297.959 103.33C297.959 103.467 297.918 103.57 297.836 103.641C297.754 103.707 297.631 103.74 297.467 103.74H295.094V105.697C295.094 106.338 295.176 106.76 295.34 106.963C295.508 107.166 295.793 107.268 296.195 107.268C296.551 107.268 296.977 107.164 297.473 106.957C297.969 106.75 298.275 106.646 298.393 106.646C298.502 106.646 298.594 106.686 298.668 106.764C298.746 106.842 298.785 106.938 298.785 107.051C298.785 107.18 298.736 107.293 298.639 107.391C298.545 107.484 298.383 107.576 298.152 107.666C297.77 107.818 297.424 107.93 297.115 108C296.811 108.07 296.523 108.105 296.254 108.105C295.797 108.105 295.412 108.033 295.1 107.889C294.791 107.74 294.561 107.521 294.408 107.232C294.33 107.096 294.273 106.934 294.238 106.746C294.207 106.559 294.191 106.27 294.191 105.879V105.697V103.74H293.195C293.031 103.74 292.912 103.709 292.838 103.646C292.764 103.58 292.727 103.475 292.727 103.33C292.727 103.17 292.777 103.061 292.879 103.002C292.98 102.943 293.197 102.914 293.529 102.914H294.191V101.713V101.402C294.191 101.234 294.227 101.111 294.297 101.033C294.371 100.951 294.484 100.91 294.637 100.91C294.809 100.91 294.928 100.959 294.994 101.057C295.061 101.154 295.094 101.377 295.094 101.725V102.914H297.408ZM304.615 102.914C304.807 102.914 304.945 102.947 305.031 103.014C305.121 103.08 305.166 103.186 305.166 103.33C305.166 103.467 305.125 103.57 305.043 103.641C304.961 103.707 304.838 103.74 304.674 103.74H302.301V105.697C302.301 106.338 302.383 106.76 302.547 106.963C302.715 107.166 303 107.268 303.402 107.268C303.758 107.268 304.184 107.164 304.68 106.957C305.176 106.75 305.482 106.646 305.6 106.646C305.709 106.646 305.801 106.686 305.875 106.764C305.953 106.842 305.992 106.938 305.992 107.051C305.992 107.18 305.943 107.293 305.846 107.391C305.752 107.484 305.59 107.576 305.359 107.666C304.977 107.818 304.631 107.93 304.322 108C304.018 108.07 303.73 108.105 303.461 108.105C303.004 108.105 302.619 108.033 302.307 107.889C301.998 107.74 301.768 107.521 301.615 107.232C301.537 107.096 301.48 106.934 301.445 106.746C301.414 106.559 301.398 106.27 301.398 105.879V105.697V103.74H300.402C300.238 103.74 300.119 103.709 300.045 103.646C299.971 103.58 299.934 103.475 299.934 103.33C299.934 103.17 299.984 103.061 300.086 103.002C300.188 102.943 300.404 102.914 300.736 102.914H301.398V101.713V101.402C301.398 101.234 301.434 101.111 301.504 101.033C301.578 100.951 301.691 100.91 301.844 100.91C302.016 100.91 302.135 100.959 302.201 101.057C302.268 101.154 302.301 101.377 302.301 101.725V102.914H304.615ZM308.242 105.551C308.273 106.113 308.463 106.549 308.811 106.857C309.162 107.162 309.641 107.314 310.246 107.314C310.703 107.314 311.201 107.193 311.74 106.951C312.279 106.705 312.605 106.582 312.719 106.582C312.836 106.582 312.934 106.619 313.012 106.693C313.09 106.768 313.129 106.859 313.129 106.969C313.129 107.082 313.088 107.186 313.006 107.279C312.924 107.373 312.793 107.465 312.613 107.555C312.223 107.746 311.818 107.893 311.4 107.994C310.986 108.096 310.574 108.146 310.164 108.146C309.273 108.146 308.561 107.891 308.025 107.379C307.49 106.863 307.223 106.182 307.223 105.334C307.223 104.471 307.506 103.771 308.072 103.236C308.639 102.701 309.377 102.434 310.287 102.434C311.111 102.434 311.795 102.684 312.338 103.184C312.881 103.684 313.152 104.289 313.152 105C313.152 105.219 313.105 105.365 313.012 105.439C312.922 105.514 312.674 105.551 312.268 105.551H312.18H308.242ZM308.271 104.783H312.086C312.027 104.318 311.832 103.945 311.5 103.664C311.172 103.379 310.768 103.236 310.287 103.236C309.768 103.236 309.33 103.373 308.975 103.646C308.619 103.92 308.385 104.299 308.271 104.783ZM316.855 107.174H318.801C318.953 107.174 319.064 107.207 319.135 107.273C319.209 107.336 319.246 107.438 319.246 107.578C319.246 107.738 319.211 107.85 319.141 107.912C319.074 107.971 318.949 108 318.766 108H314.934C314.781 108 314.666 107.965 314.588 107.895C314.51 107.824 314.471 107.719 314.471 107.578C314.471 107.441 314.51 107.34 314.588 107.273C314.67 107.207 314.795 107.174 314.963 107.174H315.982V103.418H315.584C315.205 103.418 314.969 103.389 314.875 103.33C314.781 103.268 314.734 103.156 314.734 102.996C314.734 102.859 314.771 102.758 314.846 102.691C314.924 102.621 315.041 102.586 315.197 102.586H316.533C316.639 102.586 316.719 102.607 316.773 102.65C316.828 102.689 316.855 102.748 316.855 102.826V103.822C317.227 103.357 317.613 103.012 318.016 102.785C318.418 102.559 318.852 102.445 319.316 102.445C319.664 102.445 319.945 102.516 320.16 102.656C320.375 102.797 320.482 102.979 320.482 103.201C320.482 103.346 320.428 103.475 320.318 103.588C320.213 103.697 320.096 103.752 319.967 103.752C319.877 103.752 319.725 103.693 319.51 103.576C319.299 103.455 319.109 103.395 318.941 103.395C318.637 103.395 318.314 103.504 317.975 103.723C317.639 103.938 317.266 104.279 316.855 104.748V107.174ZM325.633 107.449C325.367 107.68 325.092 107.852 324.807 107.965C324.525 108.078 324.23 108.135 323.922 108.135C323.395 108.135 322.957 107.957 322.609 107.602C322.266 107.242 322.094 106.791 322.094 106.248C322.094 105.873 322.188 105.531 322.375 105.223C322.562 104.914 322.869 104.6 323.295 104.279C323.1 104.002 322.959 103.756 322.873 103.541C322.787 103.322 322.744 103.113 322.744 102.914C322.744 102.5 322.895 102.15 323.195 101.865C323.5 101.58 323.873 101.438 324.314 101.438C324.463 101.438 324.617 101.463 324.777 101.514C324.941 101.564 325.139 101.65 325.369 101.771C325.389 101.768 325.408 101.766 325.428 101.766C325.447 101.762 325.477 101.76 325.516 101.76C325.641 101.76 325.736 101.791 325.803 101.854C325.873 101.912 325.908 101.996 325.908 102.105C325.908 102.242 325.859 102.367 325.762 102.48C325.664 102.594 325.562 102.65 325.457 102.65C325.387 102.65 325.23 102.578 324.988 102.434C324.75 102.289 324.541 102.217 324.361 102.217C324.166 102.217 324.004 102.277 323.875 102.398C323.746 102.52 323.682 102.67 323.682 102.85C323.682 102.975 323.715 103.109 323.781 103.254C323.848 103.398 323.99 103.617 324.209 103.91L325.656 105.902C325.73 105.719 325.807 105.479 325.885 105.182C325.994 104.74 326.15 104.52 326.354 104.52H326.717C326.803 104.52 326.877 104.562 326.939 104.648C327.006 104.734 327.039 104.84 327.039 104.965C327.039 105.113 327.014 105.217 326.963 105.275C326.912 105.334 326.814 105.379 326.67 105.41C326.623 105.605 326.562 105.805 326.488 106.008C326.414 106.211 326.326 106.42 326.225 106.635L326.582 107.139H326.729C326.803 107.139 326.863 107.174 326.91 107.244C326.957 107.314 326.98 107.41 326.98 107.531C326.98 107.676 326.953 107.791 326.898 107.877C326.844 107.959 326.771 108 326.682 108H326.189C326.096 108 325.986 107.912 325.861 107.736C325.842 107.709 325.826 107.689 325.814 107.678L325.633 107.449ZM325.129 106.764L323.811 104.988C323.58 105.148 323.408 105.322 323.295 105.51C323.182 105.697 323.125 105.904 323.125 106.131C323.125 106.436 323.225 106.693 323.424 106.904C323.627 107.115 323.871 107.221 324.156 107.221C324.328 107.221 324.492 107.184 324.648 107.109C324.809 107.035 324.969 106.92 325.129 106.764ZM330.385 105.838C330.385 106.33 330.488 106.689 330.695 106.916C330.902 107.143 331.23 107.256 331.68 107.256C332.105 107.256 332.469 107.121 332.77 106.852C333.074 106.582 333.227 106.244 333.227 105.838V103.418H332.424C332.271 103.418 332.16 103.387 332.09 103.324C332.023 103.258 331.99 103.156 331.99 103.02C331.99 102.871 332.027 102.762 332.102 102.691C332.176 102.621 332.295 102.586 332.459 102.586H333.707C333.855 102.586 333.959 102.619 334.018 102.686C334.08 102.748 334.111 102.904 334.111 103.154V107.174H334.381C334.572 107.174 334.709 107.205 334.791 107.268C334.877 107.33 334.92 107.434 334.92 107.578C334.92 107.719 334.879 107.824 334.797 107.895C334.719 107.965 334.604 108 334.451 108H333.561C333.455 108 333.373 107.979 333.314 107.936C333.256 107.893 333.227 107.834 333.227 107.76V107.361C332.852 107.65 332.529 107.85 332.26 107.959C331.994 108.064 331.713 108.117 331.416 108.117C330.771 108.117 330.287 107.947 329.963 107.607C329.643 107.264 329.482 106.746 329.482 106.055V103.418H329.359C329.094 103.418 328.912 103.387 328.814 103.324C328.717 103.262 328.668 103.152 328.668 102.996C328.668 102.859 328.705 102.758 328.779 102.691C328.857 102.621 328.977 102.586 329.137 102.586H330.021C330.158 102.586 330.252 102.613 330.303 102.668C330.357 102.723 330.385 102.844 330.385 103.031V105.838ZM340.65 102.914C340.842 102.914 340.98 102.947 341.066 103.014C341.156 103.08 341.201 103.186 341.201 103.33C341.201 103.467 341.16 103.57 341.078 103.641C340.996 103.707 340.873 103.74 340.709 103.74H338.336V105.697C338.336 106.338 338.418 106.76 338.582 106.963C338.75 107.166 339.035 107.268 339.438 107.268C339.793 107.268 340.219 107.164 340.715 106.957C341.211 106.75 341.518 106.646 341.635 106.646C341.744 106.646 341.836 106.686 341.91 106.764C341.988 106.842 342.027 106.938 342.027 107.051C342.027 107.18 341.979 107.293 341.881 107.391C341.787 107.484 341.625 107.576 341.395 107.666C341.012 107.818 340.666 107.93 340.357 108C340.053 108.07 339.766 108.105 339.496 108.105C339.039 108.105 338.654 108.033 338.342 107.889C338.033 107.74 337.803 107.521 337.65 107.232C337.572 107.096 337.516 106.934 337.48 106.746C337.449 106.559 337.434 106.27 337.434 105.879V105.697V103.74H336.438C336.273 103.74 336.154 103.709 336.08 103.646C336.006 103.58 335.969 103.475 335.969 103.33C335.969 103.17 336.02 103.061 336.121 103.002C336.223 102.943 336.439 102.914 336.771 102.914H337.434V101.713V101.402C337.434 101.234 337.469 101.111 337.539 101.033C337.613 100.951 337.727 100.91 337.879 100.91C338.051 100.91 338.17 100.959 338.236 101.057C338.303 101.154 338.336 101.377 338.336 101.725V102.914H340.65ZM348.432 104.736C348.432 104.186 348.381 103.814 348.279 103.623C348.182 103.428 348.012 103.33 347.77 103.33C347.48 103.33 347.25 103.455 347.078 103.705C346.91 103.955 346.826 104.299 346.826 104.736V107.174H346.932C347.17 107.174 347.328 107.203 347.406 107.262C347.488 107.316 347.529 107.422 347.529 107.578C347.529 107.719 347.496 107.824 347.43 107.895C347.363 107.965 347.262 108 347.125 108H346.381C346.213 108 346.098 107.961 346.035 107.883C345.977 107.805 345.947 107.637 345.947 107.379V107.209V104.736V104.279C345.947 103.986 345.881 103.756 345.748 103.588C345.615 103.416 345.434 103.33 345.203 103.33C345.027 103.33 344.865 103.383 344.717 103.488C344.572 103.59 344.447 103.742 344.342 103.945V107.174H344.559C344.793 107.174 344.951 107.203 345.033 107.262C345.115 107.32 345.156 107.426 345.156 107.578C345.156 107.738 345.123 107.85 345.057 107.912C344.99 107.971 344.863 108 344.676 108H343.117C342.965 108 342.852 107.967 342.777 107.9C342.707 107.83 342.672 107.723 342.672 107.578C342.672 107.422 342.717 107.316 342.807 107.262C342.9 107.203 343.08 107.174 343.346 107.174H343.463V103.418H343.357C343.084 103.418 342.896 103.387 342.795 103.324C342.697 103.262 342.648 103.152 342.648 102.996C342.648 102.859 342.688 102.758 342.766 102.691C342.844 102.621 342.961 102.586 343.117 102.586H344.014C344.143 102.586 344.227 102.609 344.266 102.656C344.309 102.699 344.334 102.793 344.342 102.938C344.502 102.766 344.674 102.639 344.857 102.557C345.041 102.475 345.248 102.434 345.479 102.434C345.752 102.434 345.977 102.494 346.152 102.615C346.332 102.732 346.465 102.912 346.551 103.154C346.715 102.908 346.904 102.727 347.119 102.609C347.334 102.492 347.58 102.434 347.857 102.434C348.361 102.434 348.729 102.598 348.959 102.926C349.193 103.254 349.311 103.785 349.311 104.52V107.174H349.404C349.646 107.174 349.809 107.203 349.891 107.262C349.973 107.32 350.014 107.426 350.014 107.578C350.014 107.719 349.979 107.824 349.908 107.895C349.838 107.965 349.734 108 349.598 108H348.889C348.732 108 348.617 107.953 348.543 107.859C348.469 107.766 348.432 107.617 348.432 107.414V104.736ZM83.3066 128.139V128.83H75.8945V128.139H83.3066ZM88.9785 122.736C88.9785 122.186 88.9277 121.814 88.8262 121.623C88.7285 121.428 88.5586 121.33 88.3164 121.33C88.0273 121.33 87.7969 121.455 87.625 121.705C87.457 121.955 87.373 122.299 87.373 122.736V125.174H87.4785C87.7168 125.174 87.875 125.203 87.9531 125.262C88.0352 125.316 88.0762 125.422 88.0762 125.578C88.0762 125.719 88.043 125.824 87.9766 125.895C87.9102 125.965 87.8086 126 87.6719 126H86.9277C86.7598 126 86.6445 125.961 86.582 125.883C86.5234 125.805 86.4941 125.637 86.4941 125.379V125.209V122.736V122.279C86.4941 121.986 86.4277 121.756 86.2949 121.588C86.1621 121.416 85.9805 121.33 85.75 121.33C85.5742 121.33 85.4121 121.383 85.2637 121.488C85.1191 121.59 84.9941 121.742 84.8887 121.945V125.174H85.1055C85.3398 125.174 85.498 125.203 85.5801 125.262C85.6621 125.32 85.7031 125.426 85.7031 125.578C85.7031 125.738 85.6699 125.85 85.6035 125.912C85.5371 125.971 85.4102 126 85.2227 126H83.6641C83.5117 126 83.3984 125.967 83.3242 125.9C83.2539 125.83 83.2188 125.723 83.2188 125.578C83.2188 125.422 83.2637 125.316 83.3535 125.262C83.4473 125.203 83.627 125.174 83.8926 125.174H84.0098V121.418H83.9043C83.6309 121.418 83.4434 121.387 83.3418 121.324C83.2441 121.262 83.1953 121.152 83.1953 120.996C83.1953 120.859 83.2344 120.758 83.3125 120.691C83.3906 120.621 83.5078 120.586 83.6641 120.586H84.5605C84.6895 120.586 84.7734 120.609 84.8125 120.656C84.8555 120.699 84.8809 120.793 84.8887 120.938C85.0488 120.766 85.2207 120.639 85.4043 120.557C85.5879 120.475 85.7949 120.434 86.0254 120.434C86.2988 120.434 86.5234 120.494 86.6992 120.615C86.8789 120.732 87.0117 120.912 87.0977 121.154C87.2617 120.908 87.4512 120.727 87.666 120.609C87.8809 120.492 88.127 120.434 88.4043 120.434C88.9082 120.434 89.2754 120.598 89.5059 120.926C89.7402 121.254 89.8574 121.785 89.8574 122.52V125.174H89.9512C90.1934 125.174 90.3555 125.203 90.4375 125.262C90.5195 125.32 90.5605 125.426 90.5605 125.578C90.5605 125.719 90.5254 125.824 90.4551 125.895C90.3848 125.965 90.2812 126 90.1445 126H89.4355C89.2793 126 89.1641 125.953 89.0898 125.859C89.0156 125.766 88.9785 125.617 88.9785 125.414V122.736ZM92.0312 123.551C92.0625 124.113 92.252 124.549 92.5996 124.857C92.9512 125.162 93.4297 125.314 94.0352 125.314C94.4922 125.314 94.9902 125.193 95.5293 124.951C96.0684 124.705 96.3945 124.582 96.5078 124.582C96.625 124.582 96.7227 124.619 96.8008 124.693C96.8789 124.768 96.918 124.859 96.918 124.969C96.918 125.082 96.877 125.186 96.7949 125.279C96.7129 125.373 96.582 125.465 96.4023 125.555C96.0117 125.746 95.6074 125.893 95.1895 125.994C94.7754 126.096 94.3633 126.146 93.9531 126.146C93.0625 126.146 92.3496 125.891 91.8145 125.379C91.2793 124.863 91.0117 124.182 91.0117 123.334C91.0117 122.471 91.2949 121.771 91.8613 121.236C92.4277 120.701 93.166 120.434 94.0762 120.434C94.9004 120.434 95.584 120.684 96.127 121.184C96.6699 121.684 96.9414 122.289 96.9414 123C96.9414 123.219 96.8945 123.365 96.8008 123.439C96.7109 123.514 96.4629 123.551 96.0566 123.551H95.9688H92.0312ZM92.0605 122.783H95.875C95.8164 122.318 95.6211 121.945 95.2891 121.664C94.9609 121.379 94.5566 121.236 94.0762 121.236C93.5566 121.236 93.1191 121.373 92.7637 121.646C92.4082 121.92 92.1738 122.299 92.0605 122.783ZM102.982 126C102.9 126 102.842 125.98 102.807 125.941C102.775 125.898 102.76 125.818 102.76 125.701V125.221C102.525 125.514 102.232 125.742 101.881 125.906C101.529 126.066 101.148 126.146 100.738 126.146C100 126.146 99.3809 125.885 98.8809 125.361C98.3848 124.834 98.1367 124.18 98.1367 123.398C98.1367 122.59 98.4023 121.918 98.9336 121.383C99.4648 120.844 100.127 120.574 100.92 120.574C101.322 120.574 101.684 120.646 102.004 120.791C102.324 120.932 102.6 121.141 102.83 121.418V119.174H102.52C102.18 119.174 101.959 119.145 101.857 119.086C101.76 119.023 101.711 118.912 101.711 118.752C101.711 118.611 101.75 118.506 101.828 118.436C101.91 118.365 102.027 118.33 102.18 118.33H103.381C103.498 118.33 103.582 118.35 103.633 118.389C103.688 118.428 103.715 118.488 103.715 118.57V125.174H103.979C104.17 125.174 104.309 125.207 104.395 125.273C104.48 125.336 104.523 125.438 104.523 125.578C104.523 125.711 104.486 125.814 104.412 125.889C104.338 125.963 104.238 126 104.113 126H102.982ZM99.1445 123.369C99.1445 123.908 99.3184 124.35 99.666 124.693C100.014 125.037 100.455 125.209 100.99 125.209C101.529 125.209 101.973 125.031 102.32 124.676C102.668 124.316 102.842 123.861 102.842 123.311C102.842 122.768 102.668 122.32 102.32 121.969C101.977 121.617 101.533 121.441 100.99 121.441C100.439 121.441 99.9941 121.619 99.6543 121.975C99.3145 122.33 99.1445 122.795 99.1445 123.369ZM107.887 118.898C107.887 118.477 107.924 118.211 107.998 118.102C108.076 117.992 108.24 117.938 108.49 117.938C108.732 117.938 108.893 117.984 108.971 118.078C109.049 118.168 109.088 118.385 109.088 118.729C109.088 119.064 109.051 119.273 108.977 119.355C108.906 119.434 108.744 119.473 108.49 119.473C108.24 119.473 108.076 119.436 107.998 119.361C107.924 119.287 107.887 119.133 107.887 118.898ZM108.971 125.174H110.852C111.004 125.174 111.115 125.207 111.186 125.273C111.26 125.336 111.297 125.438 111.297 125.578C111.297 125.738 111.262 125.85 111.191 125.912C111.125 125.971 111 126 110.816 126H106.27C106.113 126 105.996 125.965 105.918 125.895C105.84 125.824 105.801 125.719 105.801 125.578C105.801 125.441 105.842 125.34 105.924 125.273C106.006 125.207 106.129 125.174 106.293 125.174H108.08V121.418H106.938C106.777 121.418 106.654 121.383 106.568 121.312C106.486 121.238 106.445 121.133 106.445 120.996C106.445 120.859 106.484 120.758 106.562 120.691C106.641 120.621 106.758 120.586 106.914 120.586H108.631C108.736 120.586 108.818 120.607 108.877 120.65C108.939 120.693 108.971 120.752 108.971 120.826V125.174ZM114.174 123.838C114.174 124.33 114.277 124.689 114.484 124.916C114.691 125.143 115.02 125.256 115.469 125.256C115.895 125.256 116.258 125.121 116.559 124.852C116.863 124.582 117.016 124.244 117.016 123.838V121.418H116.213C116.061 121.418 115.949 121.387 115.879 121.324C115.812 121.258 115.779 121.156 115.779 121.02C115.779 120.871 115.816 120.762 115.891 120.691C115.965 120.621 116.084 120.586 116.248 120.586H117.496C117.645 120.586 117.748 120.619 117.807 120.686C117.869 120.748 117.9 120.904 117.9 121.154V125.174H118.17C118.361 125.174 118.498 125.205 118.58 125.268C118.666 125.33 118.709 125.434 118.709 125.578C118.709 125.719 118.668 125.824 118.586 125.895C118.508 125.965 118.393 126 118.24 126H117.35C117.244 126 117.162 125.979 117.104 125.936C117.045 125.893 117.016 125.834 117.016 125.76V125.361C116.641 125.65 116.318 125.85 116.049 125.959C115.783 126.064 115.502 126.117 115.205 126.117C114.561 126.117 114.076 125.947 113.752 125.607C113.432 125.264 113.271 124.746 113.271 124.055V121.418H113.148C112.883 121.418 112.701 121.387 112.604 121.324C112.506 121.262 112.457 121.152 112.457 120.996C112.457 120.859 112.494 120.758 112.568 120.691C112.646 120.621 112.766 120.586 112.926 120.586H113.811C113.947 120.586 114.041 120.613 114.092 120.668C114.146 120.723 114.174 120.844 114.174 121.031V123.838ZM125.014 122.736C125.014 122.186 124.963 121.814 124.861 121.623C124.764 121.428 124.594 121.33 124.352 121.33C124.062 121.33 123.832 121.455 123.66 121.705C123.492 121.955 123.408 122.299 123.408 122.736V125.174H123.514C123.752 125.174 123.91 125.203 123.988 125.262C124.07 125.316 124.111 125.422 124.111 125.578C124.111 125.719 124.078 125.824 124.012 125.895C123.945 125.965 123.844 126 123.707 126H122.963C122.795 126 122.68 125.961 122.617 125.883C122.559 125.805 122.529 125.637 122.529 125.379V125.209V122.736V122.279C122.529 121.986 122.463 121.756 122.33 121.588C122.197 121.416 122.016 121.33 121.785 121.33C121.609 121.33 121.447 121.383 121.299 121.488C121.154 121.59 121.029 121.742 120.924 121.945V125.174H121.141C121.375 125.174 121.533 125.203 121.615 125.262C121.697 125.32 121.738 125.426 121.738 125.578C121.738 125.738 121.705 125.85 121.639 125.912C121.572 125.971 121.445 126 121.258 126H119.699C119.547 126 119.434 125.967 119.359 125.9C119.289 125.83 119.254 125.723 119.254 125.578C119.254 125.422 119.299 125.316 119.389 125.262C119.482 125.203 119.662 125.174 119.928 125.174H120.045V121.418H119.939C119.666 121.418 119.479 121.387 119.377 121.324C119.279 121.262 119.23 121.152 119.23 120.996C119.23 120.859 119.27 120.758 119.348 120.691C119.426 120.621 119.543 120.586 119.699 120.586H120.596C120.725 120.586 120.809 120.609 120.848 120.656C120.891 120.699 120.916 120.793 120.924 120.938C121.084 120.766 121.256 120.639 121.439 120.557C121.623 120.475 121.83 120.434 122.061 120.434C122.334 120.434 122.559 120.494 122.734 120.615C122.914 120.732 123.047 120.912 123.133 121.154C123.297 120.908 123.486 120.727 123.701 120.609C123.916 120.492 124.162 120.434 124.439 120.434C124.943 120.434 125.311 120.598 125.541 120.926C125.775 121.254 125.893 121.785 125.893 122.52V125.174H125.986C126.229 125.174 126.391 125.203 126.473 125.262C126.555 125.32 126.596 125.426 126.596 125.578C126.596 125.719 126.561 125.824 126.49 125.895C126.42 125.965 126.316 126 126.18 126H125.471C125.314 126 125.199 125.953 125.125 125.859C125.051 125.766 125.014 125.617 125.014 125.414V122.736ZM127.422 122.854H132.678C132.795 122.854 132.885 122.893 132.947 122.971C133.014 123.045 133.047 123.15 133.047 123.287C133.047 123.428 133.014 123.535 132.947 123.609C132.885 123.684 132.795 123.721 132.678 123.721H127.422C127.301 123.721 127.207 123.684 127.141 123.609C127.078 123.535 127.047 123.428 127.047 123.287C127.047 123.146 127.078 123.039 127.141 122.965C127.207 122.891 127.301 122.854 127.422 122.854ZM127.422 120.891H132.678C132.795 120.891 132.885 120.928 132.947 121.002C133.014 121.076 133.047 121.182 133.047 121.318C133.047 121.459 133.014 121.566 132.947 121.641C132.885 121.715 132.795 121.752 132.678 121.752H127.422C127.301 121.752 127.207 121.717 127.141 121.646C127.078 121.572 127.047 121.463 127.047 121.318C127.047 121.178 127.078 121.072 127.141 121.002C127.207 120.928 127.301 120.891 127.422 120.891ZM137.57 125.186C138.121 125.186 138.568 125.012 138.912 124.664C139.256 124.316 139.428 123.865 139.428 123.311C139.428 122.768 139.252 122.32 138.9 121.969C138.553 121.617 138.109 121.441 137.57 121.441C137.027 121.441 136.582 121.617 136.234 121.969C135.891 122.316 135.719 122.764 135.719 123.311C135.719 123.857 135.891 124.307 136.234 124.658C136.582 125.01 137.027 125.186 137.57 125.186ZM135.742 121.43C135.961 121.156 136.234 120.947 136.562 120.803C136.891 120.658 137.262 120.586 137.676 120.586C138.461 120.586 139.115 120.852 139.639 121.383C140.162 121.91 140.424 122.564 140.424 123.346C140.424 124.115 140.154 124.768 139.615 125.303C139.08 125.838 138.426 126.105 137.652 126.105C137.242 126.105 136.885 126.033 136.58 125.889C136.275 125.744 136.025 125.525 135.83 125.232V125.701C135.83 125.807 135.811 125.883 135.771 125.93C135.736 125.977 135.676 126 135.59 126H134.518C134.365 126 134.252 125.965 134.178 125.895C134.104 125.824 134.066 125.719 134.066 125.578C134.066 125.422 134.111 125.316 134.201 125.262C134.291 125.203 134.469 125.174 134.734 125.174H134.857V119.174H134.746C134.48 119.174 134.299 119.143 134.201 119.08C134.104 119.018 134.055 118.908 134.055 118.752C134.055 118.611 134.094 118.506 134.172 118.436C134.25 118.365 134.365 118.33 134.518 118.33H135.408C135.525 118.33 135.609 118.35 135.66 118.389C135.715 118.428 135.742 118.488 135.742 118.57V121.43ZM143.002 123.838C143.002 124.33 143.105 124.689 143.312 124.916C143.52 125.143 143.848 125.256 144.297 125.256C144.723 125.256 145.086 125.121 145.387 124.852C145.691 124.582 145.844 124.244 145.844 123.838V121.418H145.041C144.889 121.418 144.777 121.387 144.707 121.324C144.641 121.258 144.607 121.156 144.607 121.02C144.607 120.871 144.645 120.762 144.719 120.691C144.793 120.621 144.912 120.586 145.076 120.586H146.324C146.473 120.586 146.576 120.619 146.635 120.686C146.697 120.748 146.729 120.904 146.729 121.154V125.174H146.998C147.189 125.174 147.326 125.205 147.408 125.268C147.494 125.33 147.537 125.434 147.537 125.578C147.537 125.719 147.496 125.824 147.414 125.895C147.336 125.965 147.221 126 147.068 126H146.178C146.072 126 145.99 125.979 145.932 125.936C145.873 125.893 145.844 125.834 145.844 125.76V125.361C145.469 125.65 145.146 125.85 144.877 125.959C144.611 126.064 144.33 126.117 144.033 126.117C143.389 126.117 142.904 125.947 142.58 125.607C142.26 125.264 142.1 124.746 142.1 124.055V121.418H141.977C141.711 121.418 141.529 121.387 141.432 121.324C141.334 121.262 141.285 121.152 141.285 120.996C141.285 120.859 141.322 120.758 141.396 120.691C141.475 120.621 141.594 120.586 141.754 120.586H142.639C142.775 120.586 142.869 120.613 142.92 120.668C142.975 120.723 143.002 120.844 143.002 121.031V123.838ZM153.268 120.914C153.459 120.914 153.598 120.947 153.684 121.014C153.773 121.08 153.818 121.186 153.818 121.33C153.818 121.467 153.777 121.57 153.695 121.641C153.613 121.707 153.49 121.74 153.326 121.74H150.953V123.697C150.953 124.338 151.035 124.76 151.199 124.963C151.367 125.166 151.652 125.268 152.055 125.268C152.41 125.268 152.836 125.164 153.332 124.957C153.828 124.75 154.135 124.646 154.252 124.646C154.361 124.646 154.453 124.686 154.527 124.764C154.605 124.842 154.645 124.938 154.645 125.051C154.645 125.18 154.596 125.293 154.498 125.391C154.404 125.484 154.242 125.576 154.012 125.666C153.629 125.818 153.283 125.93 152.975 126C152.67 126.07 152.383 126.105 152.113 126.105C151.656 126.105 151.271 126.033 150.959 125.889C150.65 125.74 150.42 125.521 150.268 125.232C150.189 125.096 150.133 124.934 150.098 124.746C150.066 124.559 150.051 124.27 150.051 123.879V123.697V121.74H149.055C148.891 121.74 148.771 121.709 148.697 121.646C148.623 121.58 148.586 121.475 148.586 121.33C148.586 121.17 148.637 121.061 148.738 121.002C148.84 120.943 149.057 120.914 149.389 120.914H150.051V119.713V119.402C150.051 119.234 150.086 119.111 150.156 119.033C150.23 118.951 150.344 118.91 150.496 118.91C150.668 118.91 150.787 118.959 150.854 119.057C150.92 119.154 150.953 119.377 150.953 119.725V120.914H153.268ZM160.475 120.914C160.666 120.914 160.805 120.947 160.891 121.014C160.98 121.08 161.025 121.186 161.025 121.33C161.025 121.467 160.984 121.57 160.902 121.641C160.82 121.707 160.697 121.74 160.533 121.74H158.16V123.697C158.16 124.338 158.242 124.76 158.406 124.963C158.574 125.166 158.859 125.268 159.262 125.268C159.617 125.268 160.043 125.164 160.539 124.957C161.035 124.75 161.342 124.646 161.459 124.646C161.568 124.646 161.66 124.686 161.734 124.764C161.812 124.842 161.852 124.938 161.852 125.051C161.852 125.18 161.803 125.293 161.705 125.391C161.611 125.484 161.449 125.576 161.219 125.666C160.836 125.818 160.49 125.93 160.182 126C159.877 126.07 159.59 126.105 159.32 126.105C158.863 126.105 158.479 126.033 158.166 125.889C157.857 125.74 157.627 125.521 157.475 125.232C157.396 125.096 157.34 124.934 157.305 124.746C157.273 124.559 157.258 124.27 157.258 123.879V123.697V121.74H156.262C156.098 121.74 155.979 121.709 155.904 121.646C155.83 121.58 155.793 121.475 155.793 121.33C155.793 121.17 155.844 121.061 155.945 121.002C156.047 120.943 156.264 120.914 156.596 120.914H157.258V119.713V119.402C157.258 119.234 157.293 119.111 157.363 119.033C157.438 118.951 157.551 118.91 157.703 118.91C157.875 118.91 157.994 118.959 158.061 119.057C158.127 119.154 158.16 119.377 158.16 119.725V120.914H160.475ZM166.082 125.326C166.684 125.326 167.176 125.137 167.559 124.758C167.945 124.375 168.139 123.889 168.139 123.299C168.139 122.709 167.945 122.223 167.559 121.84C167.172 121.453 166.68 121.26 166.082 121.26C165.484 121.26 164.992 121.453 164.605 121.84C164.223 122.223 164.031 122.709 164.031 123.299C164.031 123.893 164.223 124.379 164.605 124.758C164.988 125.137 165.48 125.326 166.082 125.326ZM169.158 123.299C169.158 124.135 168.873 124.818 168.303 125.35C167.732 125.881 166.992 126.146 166.082 126.146C165.176 126.146 164.438 125.881 163.867 125.35C163.297 124.818 163.012 124.135 163.012 123.299C163.012 122.463 163.297 121.781 163.867 121.254C164.438 120.723 165.176 120.457 166.082 120.457C166.988 120.457 167.727 120.723 168.297 121.254C168.871 121.785 169.158 122.467 169.158 123.299ZM171.109 125.174V121.418H170.998C170.732 121.418 170.549 121.387 170.447 121.324C170.35 121.262 170.301 121.152 170.301 120.996C170.301 120.852 170.342 120.748 170.424 120.686C170.506 120.619 170.639 120.586 170.822 120.586H171.098H171.66C171.766 120.586 171.848 120.607 171.906 120.65C171.965 120.693 171.994 120.752 171.994 120.826V121.225C172.279 120.959 172.561 120.764 172.838 120.639C173.119 120.51 173.41 120.445 173.711 120.445C174.301 120.445 174.764 120.629 175.1 120.996C175.439 121.363 175.609 121.871 175.609 122.52V125.174H175.885C176.08 125.174 176.221 125.207 176.307 125.273C176.393 125.336 176.436 125.438 176.436 125.578C176.436 125.73 176.389 125.84 176.295 125.906C176.205 125.969 176.043 126 175.809 126H174.514C174.264 126 174.104 125.971 174.033 125.912C173.963 125.854 173.928 125.742 173.928 125.578C173.928 125.426 173.969 125.32 174.051 125.262C174.133 125.203 174.287 125.174 174.514 125.174H174.719V122.736C174.719 122.279 174.615 121.932 174.408 121.693C174.201 121.451 173.9 121.33 173.506 121.33C173.107 121.33 172.756 121.465 172.451 121.734C172.146 122.004 171.994 122.338 171.994 122.736V125.174H172.199C172.434 125.174 172.592 125.203 172.674 125.262C172.756 125.32 172.797 125.426 172.797 125.578C172.797 125.742 172.762 125.854 172.691 125.912C172.621 125.971 172.449 126 172.176 126H171.109H170.793C170.633 126 170.512 125.967 170.43 125.9C170.352 125.83 170.312 125.723 170.312 125.578C170.312 125.422 170.357 125.316 170.447 125.262C170.541 125.203 170.721 125.174 170.986 125.174H171.109ZM181.492 125.449C181.227 125.68 180.951 125.852 180.666 125.965C180.385 126.078 180.09 126.135 179.781 126.135C179.254 126.135 178.816 125.957 178.469 125.602C178.125 125.242 177.953 124.791 177.953 124.248C177.953 123.873 178.047 123.531 178.234 123.223C178.422 122.914 178.729 122.6 179.154 122.279C178.959 122.002 178.818 121.756 178.732 121.541C178.646 121.322 178.604 121.113 178.604 120.914C178.604 120.5 178.754 120.15 179.055 119.865C179.359 119.58 179.732 119.438 180.174 119.438C180.322 119.438 180.477 119.463 180.637 119.514C180.801 119.564 180.998 119.65 181.229 119.771C181.248 119.768 181.268 119.766 181.287 119.766C181.307 119.762 181.336 119.76 181.375 119.76C181.5 119.76 181.596 119.791 181.662 119.854C181.732 119.912 181.768 119.996 181.768 120.105C181.768 120.242 181.719 120.367 181.621 120.48C181.523 120.594 181.422 120.65 181.316 120.65C181.246 120.65 181.09 120.578 180.848 120.434C180.609 120.289 180.4 120.217 180.221 120.217C180.025 120.217 179.863 120.277 179.734 120.398C179.605 120.52 179.541 120.67 179.541 120.85C179.541 120.975 179.574 121.109 179.641 121.254C179.707 121.398 179.85 121.617 180.068 121.91L181.516 123.902C181.59 123.719 181.666 123.479 181.744 123.182C181.854 122.74 182.01 122.52 182.213 122.52H182.576C182.662 122.52 182.736 122.562 182.799 122.648C182.865 122.734 182.898 122.84 182.898 122.965C182.898 123.113 182.873 123.217 182.822 123.275C182.771 123.334 182.674 123.379 182.529 123.41C182.482 123.605 182.422 123.805 182.348 124.008C182.273 124.211 182.186 124.42 182.084 124.635L182.441 125.139H182.588C182.662 125.139 182.723 125.174 182.77 125.244C182.816 125.314 182.84 125.41 182.84 125.531C182.84 125.676 182.812 125.791 182.758 125.877C182.703 125.959 182.631 126 182.541 126H182.049C181.955 126 181.846 125.912 181.721 125.736C181.701 125.709 181.686 125.689 181.674 125.678L181.492 125.449ZM180.988 124.764L179.67 122.988C179.439 123.148 179.268 123.322 179.154 123.51C179.041 123.697 178.984 123.904 178.984 124.131C178.984 124.436 179.084 124.693 179.283 124.904C179.486 125.115 179.73 125.221 180.016 125.221C180.188 125.221 180.352 125.184 180.508 125.109C180.668 125.035 180.828 124.92 180.988 124.764ZM186.244 123.838C186.244 124.33 186.348 124.689 186.555 124.916C186.762 125.143 187.09 125.256 187.539 125.256C187.965 125.256 188.328 125.121 188.629 124.852C188.934 124.582 189.086 124.244 189.086 123.838V121.418H188.283C188.131 121.418 188.02 121.387 187.949 121.324C187.883 121.258 187.85 121.156 187.85 121.02C187.85 120.871 187.887 120.762 187.961 120.691C188.035 120.621 188.154 120.586 188.318 120.586H189.566C189.715 120.586 189.818 120.619 189.877 120.686C189.939 120.748 189.971 120.904 189.971 121.154V125.174H190.24C190.432 125.174 190.568 125.205 190.65 125.268C190.736 125.33 190.779 125.434 190.779 125.578C190.779 125.719 190.738 125.824 190.656 125.895C190.578 125.965 190.463 126 190.311 126H189.42C189.314 126 189.232 125.979 189.174 125.936C189.115 125.893 189.086 125.834 189.086 125.76V125.361C188.711 125.65 188.389 125.85 188.119 125.959C187.854 126.064 187.572 126.117 187.275 126.117C186.631 126.117 186.146 125.947 185.822 125.607C185.502 125.264 185.342 124.746 185.342 124.055V121.418H185.219C184.953 121.418 184.771 121.387 184.674 121.324C184.576 121.262 184.527 121.152 184.527 120.996C184.527 120.859 184.564 120.758 184.639 120.691C184.717 120.621 184.836 120.586 184.996 120.586H185.881C186.018 120.586 186.111 120.613 186.162 120.668C186.217 120.723 186.244 120.844 186.244 121.031V123.838ZM196.51 120.914C196.701 120.914 196.84 120.947 196.926 121.014C197.016 121.08 197.061 121.186 197.061 121.33C197.061 121.467 197.02 121.57 196.938 121.641C196.855 121.707 196.732 121.74 196.568 121.74H194.195V123.697C194.195 124.338 194.277 124.76 194.441 124.963C194.609 125.166 194.895 125.268 195.297 125.268C195.652 125.268 196.078 125.164 196.574 124.957C197.07 124.75 197.377 124.646 197.494 124.646C197.604 124.646 197.695 124.686 197.77 124.764C197.848 124.842 197.887 124.938 197.887 125.051C197.887 125.18 197.838 125.293 197.74 125.391C197.646 125.484 197.484 125.576 197.254 125.666C196.871 125.818 196.525 125.93 196.217 126C195.912 126.07 195.625 126.105 195.355 126.105C194.898 126.105 194.514 126.033 194.201 125.889C193.893 125.74 193.662 125.521 193.51 125.232C193.432 125.096 193.375 124.934 193.34 124.746C193.309 124.559 193.293 124.27 193.293 123.879V123.697V121.74H192.297C192.133 121.74 192.014 121.709 191.939 121.646C191.865 121.58 191.828 121.475 191.828 121.33C191.828 121.17 191.879 121.061 191.98 121.002C192.082 120.943 192.299 120.914 192.631 120.914H193.293V119.713V119.402C193.293 119.234 193.328 119.111 193.398 119.033C193.473 118.951 193.586 118.91 193.738 118.91C193.91 118.91 194.029 118.959 194.096 119.057C194.162 119.154 194.195 119.377 194.195 119.725V120.914H196.51ZM204.291 122.736C204.291 122.186 204.24 121.814 204.139 121.623C204.041 121.428 203.871 121.33 203.629 121.33C203.34 121.33 203.109 121.455 202.938 121.705C202.77 121.955 202.686 122.299 202.686 122.736V125.174H202.791C203.029 125.174 203.188 125.203 203.266 125.262C203.348 125.316 203.389 125.422 203.389 125.578C203.389 125.719 203.355 125.824 203.289 125.895C203.223 125.965 203.121 126 202.984 126H202.24C202.072 126 201.957 125.961 201.895 125.883C201.836 125.805 201.807 125.637 201.807 125.379V125.209V122.736V122.279C201.807 121.986 201.74 121.756 201.607 121.588C201.475 121.416 201.293 121.33 201.062 121.33C200.887 121.33 200.725 121.383 200.576 121.488C200.432 121.59 200.307 121.742 200.201 121.945V125.174H200.418C200.652 125.174 200.811 125.203 200.893 125.262C200.975 125.32 201.016 125.426 201.016 125.578C201.016 125.738 200.982 125.85 200.916 125.912C200.85 125.971 200.723 126 200.535 126H198.977C198.824 126 198.711 125.967 198.637 125.9C198.566 125.83 198.531 125.723 198.531 125.578C198.531 125.422 198.576 125.316 198.666 125.262C198.76 125.203 198.939 125.174 199.205 125.174H199.322V121.418H199.217C198.943 121.418 198.756 121.387 198.654 121.324C198.557 121.262 198.508 121.152 198.508 120.996C198.508 120.859 198.547 120.758 198.625 120.691C198.703 120.621 198.82 120.586 198.977 120.586H199.873C200.002 120.586 200.086 120.609 200.125 120.656C200.168 120.699 200.193 120.793 200.201 120.938C200.361 120.766 200.533 120.639 200.717 120.557C200.9 120.475 201.107 120.434 201.338 120.434C201.611 120.434 201.836 120.494 202.012 120.615C202.191 120.732 202.324 120.912 202.41 121.154C202.574 120.908 202.764 120.727 202.979 120.609C203.193 120.492 203.439 120.434 203.717 120.434C204.221 120.434 204.588 120.598 204.818 120.926C205.053 121.254 205.17 121.785 205.17 122.52V125.174H205.264C205.506 125.174 205.668 125.203 205.75 125.262C205.832 125.32 205.873 125.426 205.873 125.578C205.873 125.719 205.838 125.824 205.768 125.895C205.697 125.965 205.594 126 205.457 126H204.748C204.592 126 204.477 125.953 204.402 125.859C204.328 125.766 204.291 125.617 204.291 125.414V122.736ZM213.033 128.139V128.83H205.621V128.139H213.033ZM218.295 120.938V120.914C218.295 120.785 218.332 120.691 218.406 120.633C218.48 120.57 218.596 120.539 218.752 120.539C218.912 120.539 219.021 120.586 219.08 120.68C219.143 120.773 219.174 120.967 219.174 121.26V122.35C219.174 122.494 219.137 122.604 219.062 122.678C218.988 122.748 218.877 122.783 218.729 122.783C218.623 122.783 218.531 122.754 218.453 122.695C218.379 122.633 218.287 122.506 218.178 122.314C217.99 121.998 217.762 121.76 217.492 121.6C217.227 121.436 216.92 121.354 216.572 121.354C215.963 121.354 215.467 121.533 215.084 121.893C214.705 122.252 214.516 122.717 214.516 123.287C214.516 123.869 214.697 124.346 215.061 124.717C215.428 125.084 215.898 125.268 216.473 125.268C216.734 125.268 216.982 125.232 217.217 125.162C217.455 125.088 217.68 124.979 217.891 124.834C217.965 124.787 218.064 124.715 218.189 124.617C218.443 124.41 218.643 124.307 218.787 124.307C218.908 124.307 219.006 124.346 219.08 124.424C219.158 124.498 219.197 124.596 219.197 124.717C219.197 125.025 218.904 125.342 218.318 125.666C217.736 125.986 217.117 126.146 216.461 126.146C215.613 126.146 214.906 125.875 214.34 125.332C213.777 124.789 213.496 124.111 213.496 123.299C213.496 122.486 213.777 121.809 214.34 121.266C214.902 120.719 215.605 120.445 216.449 120.445C216.746 120.445 217.043 120.486 217.34 120.568C217.641 120.646 217.959 120.77 218.295 120.938ZM225.039 123.41C224.824 123.34 224.615 123.289 224.412 123.258C224.213 123.223 224.014 123.205 223.814 123.205C223.213 123.205 222.738 123.307 222.391 123.51C222.043 123.713 221.869 123.986 221.869 124.33C221.869 124.596 221.977 124.814 222.191 124.986C222.41 125.158 222.688 125.244 223.023 125.244C223.52 125.244 223.979 125.115 224.4 124.857C224.826 124.596 225.039 124.324 225.039 124.043V123.41ZM225.086 125.256C224.766 125.545 224.416 125.766 224.037 125.918C223.662 126.07 223.275 126.146 222.877 126.146C222.295 126.146 221.824 125.984 221.465 125.66C221.109 125.336 220.932 124.914 220.932 124.395C220.932 123.777 221.168 123.299 221.641 122.959C222.117 122.619 222.785 122.449 223.645 122.449C223.871 122.449 224.1 122.465 224.33 122.496C224.561 122.523 224.797 122.568 225.039 122.631V122.59C225.039 122.141 224.932 121.809 224.717 121.594C224.502 121.379 224.168 121.271 223.715 121.271C223.41 121.271 223.07 121.354 222.695 121.518C222.32 121.682 222.072 121.764 221.951 121.764C221.838 121.764 221.744 121.719 221.67 121.629C221.596 121.535 221.559 121.416 221.559 121.271C221.559 121.041 221.773 120.846 222.203 120.686C222.637 120.525 223.189 120.445 223.861 120.445C224.549 120.445 225.068 120.621 225.42 120.973C225.771 121.32 225.947 121.836 225.947 122.52V125.174H226.234C226.512 125.174 226.697 125.203 226.791 125.262C226.885 125.32 226.932 125.426 226.932 125.578C226.932 125.719 226.893 125.824 226.814 125.895C226.736 125.965 226.619 126 226.463 126H225.543C225.434 126 225.344 125.967 225.273 125.9C225.203 125.834 225.156 125.738 225.133 125.613L225.086 125.256ZM233.119 122.736C233.119 122.186 233.068 121.814 232.967 121.623C232.869 121.428 232.699 121.33 232.457 121.33C232.168 121.33 231.938 121.455 231.766 121.705C231.598 121.955 231.514 122.299 231.514 122.736V125.174H231.619C231.857 125.174 232.016 125.203 232.094 125.262C232.176 125.316 232.217 125.422 232.217 125.578C232.217 125.719 232.184 125.824 232.117 125.895C232.051 125.965 231.949 126 231.812 126H231.068C230.9 126 230.785 125.961 230.723 125.883C230.664 125.805 230.635 125.637 230.635 125.379V125.209V122.736V122.279C230.635 121.986 230.568 121.756 230.436 121.588C230.303 121.416 230.121 121.33 229.891 121.33C229.715 121.33 229.553 121.383 229.404 121.488C229.26 121.59 229.135 121.742 229.029 121.945V125.174H229.246C229.48 125.174 229.639 125.203 229.721 125.262C229.803 125.32 229.844 125.426 229.844 125.578C229.844 125.738 229.811 125.85 229.744 125.912C229.678 125.971 229.551 126 229.363 126H227.805C227.652 126 227.539 125.967 227.465 125.9C227.395 125.83 227.359 125.723 227.359 125.578C227.359 125.422 227.404 125.316 227.494 125.262C227.588 125.203 227.768 125.174 228.033 125.174H228.15V121.418H228.045C227.771 121.418 227.584 121.387 227.482 121.324C227.385 121.262 227.336 121.152 227.336 120.996C227.336 120.859 227.375 120.758 227.453 120.691C227.531 120.621 227.648 120.586 227.805 120.586H228.701C228.83 120.586 228.914 120.609 228.953 120.656C228.996 120.699 229.021 120.793 229.029 120.938C229.189 120.766 229.361 120.639 229.545 120.557C229.729 120.475 229.936 120.434 230.166 120.434C230.439 120.434 230.664 120.494 230.84 120.615C231.02 120.732 231.152 120.912 231.238 121.154C231.402 120.908 231.592 120.727 231.807 120.609C232.021 120.492 232.268 120.434 232.545 120.434C233.049 120.434 233.416 120.598 233.646 120.926C233.881 121.254 233.998 121.785 233.998 122.52V125.174H234.092C234.334 125.174 234.496 125.203 234.578 125.262C234.66 125.32 234.701 125.426 234.701 125.578C234.701 125.719 234.666 125.824 234.596 125.895C234.525 125.965 234.422 126 234.285 126H233.576C233.42 126 233.305 125.953 233.23 125.859C233.156 125.766 233.119 125.617 233.119 125.414V122.736ZM236.641 127.5H238.047C238.195 127.5 238.307 127.535 238.381 127.605C238.455 127.676 238.492 127.781 238.492 127.922C238.492 128.074 238.455 128.182 238.381 128.244C238.311 128.307 238.184 128.338 238 128.338H235.416C235.26 128.338 235.141 128.303 235.059 128.232C234.98 128.162 234.941 128.059 234.941 127.922C234.941 127.766 234.99 127.656 235.088 127.594C235.189 127.531 235.375 127.5 235.645 127.5H235.756V121.418H235.645C235.375 121.418 235.189 121.387 235.088 121.324C234.99 121.262 234.941 121.152 234.941 120.996C234.941 120.859 234.98 120.758 235.059 120.691C235.141 120.621 235.26 120.586 235.416 120.586H236.307C236.424 120.586 236.508 120.605 236.559 120.645C236.613 120.684 236.641 120.744 236.641 120.826V121.395C236.906 121.121 237.199 120.916 237.52 120.779C237.844 120.643 238.191 120.574 238.562 120.574C239.348 120.574 240.004 120.84 240.531 121.371C241.059 121.902 241.322 122.568 241.322 123.369C241.322 124.139 241.072 124.771 240.572 125.268C240.072 125.764 239.434 126.012 238.656 126.012C238.242 126.012 237.861 125.939 237.514 125.795C237.166 125.646 236.875 125.436 236.641 125.162V127.5ZM238.457 125.15C239 125.15 239.445 124.98 239.793 124.641C240.141 124.297 240.314 123.854 240.314 123.311C240.314 122.779 240.139 122.342 239.787 121.998C239.439 121.65 238.996 121.477 238.457 121.477C237.918 121.477 237.477 121.648 237.133 121.992C236.789 122.336 236.617 122.775 236.617 123.311C236.617 123.85 236.787 124.291 237.127 124.635C237.471 124.979 237.914 125.15 238.457 125.15ZM246.66 123.41C246.445 123.34 246.236 123.289 246.033 123.258C245.834 123.223 245.635 123.205 245.436 123.205C244.834 123.205 244.359 123.307 244.012 123.51C243.664 123.713 243.49 123.986 243.49 124.33C243.49 124.596 243.598 124.814 243.812 124.986C244.031 125.158 244.309 125.244 244.645 125.244C245.141 125.244 245.6 125.115 246.021 124.857C246.447 124.596 246.66 124.324 246.66 124.043V123.41ZM246.707 125.256C246.387 125.545 246.037 125.766 245.658 125.918C245.283 126.07 244.896 126.146 244.498 126.146C243.916 126.146 243.445 125.984 243.086 125.66C242.73 125.336 242.553 124.914 242.553 124.395C242.553 123.777 242.789 123.299 243.262 122.959C243.738 122.619 244.406 122.449 245.266 122.449C245.492 122.449 245.721 122.465 245.951 122.496C246.182 122.523 246.418 122.568 246.66 122.631V122.59C246.66 122.141 246.553 121.809 246.338 121.594C246.123 121.379 245.789 121.271 245.336 121.271C245.031 121.271 244.691 121.354 244.316 121.518C243.941 121.682 243.693 121.764 243.572 121.764C243.459 121.764 243.365 121.719 243.291 121.629C243.217 121.535 243.18 121.416 243.18 121.271C243.18 121.041 243.395 120.846 243.824 120.686C244.258 120.525 244.811 120.445 245.482 120.445C246.17 120.445 246.689 120.621 247.041 120.973C247.393 121.32 247.568 121.836 247.568 122.52V125.174H247.855C248.133 125.174 248.318 125.203 248.412 125.262C248.506 125.32 248.553 125.426 248.553 125.578C248.553 125.719 248.514 125.824 248.436 125.895C248.357 125.965 248.24 126 248.084 126H247.164C247.055 126 246.965 125.967 246.895 125.9C246.824 125.834 246.777 125.738 246.754 125.613L246.707 125.256ZM252.027 118.898C252.027 118.477 252.064 118.211 252.139 118.102C252.217 117.992 252.381 117.938 252.631 117.938C252.873 117.938 253.033 117.984 253.111 118.078C253.189 118.168 253.229 118.385 253.229 118.729C253.229 119.064 253.191 119.273 253.117 119.355C253.047 119.434 252.885 119.473 252.631 119.473C252.381 119.473 252.217 119.436 252.139 119.361C252.064 119.287 252.027 119.133 252.027 118.898ZM253.111 125.174H254.992C255.145 125.174 255.256 125.207 255.326 125.273C255.4 125.336 255.438 125.438 255.438 125.578C255.438 125.738 255.402 125.85 255.332 125.912C255.266 125.971 255.141 126 254.957 126H250.41C250.254 126 250.137 125.965 250.059 125.895C249.98 125.824 249.941 125.719 249.941 125.578C249.941 125.441 249.982 125.34 250.064 125.273C250.146 125.207 250.27 125.174 250.434 125.174H252.221V121.418H251.078C250.918 121.418 250.795 121.383 250.709 121.312C250.627 121.238 250.586 121.133 250.586 120.996C250.586 120.859 250.625 120.758 250.703 120.691C250.781 120.621 250.898 120.586 251.055 120.586H252.771C252.877 120.586 252.959 120.607 253.018 120.65C253.08 120.693 253.111 120.752 253.111 120.826V125.174ZM259.609 121.453C259.098 121.453 258.68 121.611 258.355 121.928C258.031 122.244 257.869 122.654 257.869 123.158C257.869 123.654 258.031 124.062 258.355 124.383C258.68 124.699 259.098 124.857 259.609 124.857C260.117 124.857 260.533 124.699 260.857 124.383C261.186 124.062 261.35 123.654 261.35 123.158C261.35 122.662 261.186 122.254 260.857 121.934C260.533 121.613 260.117 121.453 259.609 121.453ZM262.152 125.689C262.152 126.236 262.125 126.623 262.07 126.85C262.016 127.08 261.922 127.281 261.789 127.453C261.57 127.742 261.264 127.961 260.869 128.109C260.475 128.262 260.01 128.338 259.475 128.338C259.029 128.338 258.703 128.295 258.496 128.209C258.293 128.123 258.191 127.986 258.191 127.799C258.191 127.678 258.24 127.57 258.338 127.477C258.439 127.387 258.559 127.342 258.695 127.342C258.801 127.342 258.963 127.355 259.182 127.383C259.4 127.414 259.566 127.43 259.68 127.43C260.258 127.43 260.668 127.297 260.91 127.031C261.152 126.766 261.273 126.311 261.273 125.666V124.957C261.035 125.234 260.771 125.438 260.482 125.566C260.193 125.695 259.861 125.76 259.486 125.76C258.756 125.76 258.15 125.518 257.67 125.033C257.193 124.545 256.955 123.928 256.955 123.182C256.955 122.432 257.201 121.811 257.693 121.318C258.186 120.822 258.795 120.574 259.521 120.574C259.822 120.574 260.115 120.631 260.4 120.744C260.689 120.854 260.98 121.021 261.273 121.248V120.826C261.273 120.744 261.299 120.684 261.35 120.645C261.404 120.605 261.488 120.586 261.602 120.586H262.486C262.643 120.586 262.76 120.621 262.838 120.691C262.916 120.758 262.955 120.859 262.955 120.996C262.955 121.152 262.906 121.262 262.809 121.324C262.711 121.387 262.527 121.418 262.258 121.418H262.152V125.689ZM264.801 125.174V121.418H264.689C264.424 121.418 264.24 121.387 264.139 121.324C264.041 121.262 263.992 121.152 263.992 120.996C263.992 120.852 264.033 120.748 264.115 120.686C264.197 120.619 264.33 120.586 264.514 120.586H264.789H265.352C265.457 120.586 265.539 120.607 265.598 120.65C265.656 120.693 265.686 120.752 265.686 120.826V121.225C265.971 120.959 266.252 120.764 266.529 120.639C266.811 120.51 267.102 120.445 267.402 120.445C267.992 120.445 268.455 120.629 268.791 120.996C269.131 121.363 269.301 121.871 269.301 122.52V125.174H269.576C269.771 125.174 269.912 125.207 269.998 125.273C270.084 125.336 270.127 125.438 270.127 125.578C270.127 125.73 270.08 125.84 269.986 125.906C269.896 125.969 269.734 126 269.5 126H268.205C267.955 126 267.795 125.971 267.725 125.912C267.654 125.854 267.619 125.742 267.619 125.578C267.619 125.426 267.66 125.32 267.742 125.262C267.824 125.203 267.979 125.174 268.205 125.174H268.41V122.736C268.41 122.279 268.307 121.932 268.1 121.693C267.893 121.451 267.592 121.33 267.197 121.33C266.799 121.33 266.447 121.465 266.143 121.734C265.838 122.004 265.686 122.338 265.686 122.736V125.174H265.891C266.125 125.174 266.283 125.203 266.365 125.262C266.447 125.32 266.488 125.426 266.488 125.578C266.488 125.742 266.453 125.854 266.383 125.912C266.312 125.971 266.141 126 265.867 126H264.801H264.484C264.324 126 264.203 125.967 264.121 125.9C264.043 125.83 264.004 125.723 264.004 125.578C264.004 125.422 264.049 125.316 264.139 125.262C264.232 125.203 264.412 125.174 264.678 125.174H264.801ZM271.562 122.854H276.818C276.936 122.854 277.025 122.893 277.088 122.971C277.154 123.045 277.188 123.15 277.188 123.287C277.188 123.428 277.154 123.535 277.088 123.609C277.025 123.684 276.936 123.721 276.818 123.721H271.562C271.441 123.721 271.348 123.684 271.281 123.609C271.219 123.535 271.188 123.428 271.188 123.287C271.188 123.146 271.219 123.039 271.281 122.965C271.348 122.891 271.441 122.854 271.562 122.854ZM271.562 120.891H276.818C276.936 120.891 277.025 120.928 277.088 121.002C277.154 121.076 277.188 121.182 277.188 121.318C277.188 121.459 277.154 121.566 277.088 121.641C277.025 121.715 276.936 121.752 276.818 121.752H271.562C271.441 121.752 271.348 121.717 271.281 121.646C271.219 121.572 271.188 121.463 271.188 121.318C271.188 121.178 271.219 121.072 271.281 121.002C271.348 120.928 271.441 120.891 271.562 120.891ZM278.84 125.578V124.535C278.84 124.363 278.871 124.24 278.934 124.166C279 124.092 279.105 124.055 279.25 124.055C279.41 124.055 279.537 124.164 279.631 124.383C279.693 124.516 279.75 124.615 279.801 124.682C279.965 124.893 280.207 125.062 280.527 125.191C280.848 125.316 281.201 125.379 281.588 125.379C282.002 125.379 282.334 125.295 282.584 125.127C282.834 124.959 282.959 124.738 282.959 124.465C282.959 124.188 282.857 123.99 282.654 123.873C282.455 123.756 282.111 123.697 281.623 123.697H281.301C280.504 123.697 279.896 123.559 279.479 123.281C279.061 123.004 278.852 122.602 278.852 122.074C278.852 121.559 279.055 121.158 279.461 120.873C279.871 120.588 280.445 120.445 281.184 120.445C281.484 120.445 281.791 120.488 282.104 120.574C282.416 120.656 282.58 120.697 282.596 120.697C282.639 120.697 282.721 120.66 282.842 120.586C282.963 120.508 283.082 120.469 283.199 120.469C283.332 120.469 283.43 120.518 283.492 120.615C283.559 120.713 283.592 120.859 283.592 121.055V121.74C283.592 121.947 283.561 122.098 283.498 122.191C283.436 122.281 283.336 122.326 283.199 122.326C283.082 122.326 282.938 122.227 282.766 122.027C282.645 121.891 282.545 121.787 282.467 121.717C282.26 121.525 282.039 121.389 281.805 121.307C281.57 121.221 281.295 121.178 280.979 121.178C280.611 121.178 280.314 121.26 280.088 121.424C279.865 121.584 279.754 121.789 279.754 122.039C279.754 122.285 279.869 122.461 280.1 122.566C280.33 122.672 280.826 122.732 281.588 122.748C282.4 122.768 282.994 122.91 283.369 123.176C283.744 123.438 283.932 123.844 283.932 124.395C283.932 124.922 283.725 125.344 283.311 125.66C282.896 125.977 282.338 126.135 281.635 126.135C281.412 126.135 281.164 126.113 280.891 126.07C280.617 126.031 280.273 125.963 279.859 125.865C279.723 125.955 279.605 126.021 279.508 126.064C279.41 126.111 279.328 126.135 279.262 126.135C279.125 126.135 279.02 126.088 278.945 125.994C278.875 125.896 278.84 125.758 278.84 125.578ZM289.902 123.41C289.688 123.34 289.479 123.289 289.275 123.258C289.076 123.223 288.877 123.205 288.678 123.205C288.076 123.205 287.602 123.307 287.254 123.51C286.906 123.713 286.732 123.986 286.732 124.33C286.732 124.596 286.84 124.814 287.055 124.986C287.273 125.158 287.551 125.244 287.887 125.244C288.383 125.244 288.842 125.115 289.264 124.857C289.689 124.596 289.902 124.324 289.902 124.043V123.41ZM289.949 125.256C289.629 125.545 289.279 125.766 288.9 125.918C288.525 126.07 288.139 126.146 287.74 126.146C287.158 126.146 286.688 125.984 286.328 125.66C285.973 125.336 285.795 124.914 285.795 124.395C285.795 123.777 286.031 123.299 286.504 122.959C286.98 122.619 287.648 122.449 288.508 122.449C288.734 122.449 288.963 122.465 289.193 122.496C289.424 122.523 289.66 122.568 289.902 122.631V122.59C289.902 122.141 289.795 121.809 289.58 121.594C289.365 121.379 289.031 121.271 288.578 121.271C288.273 121.271 287.934 121.354 287.559 121.518C287.184 121.682 286.936 121.764 286.814 121.764C286.701 121.764 286.607 121.719 286.533 121.629C286.459 121.535 286.422 121.416 286.422 121.271C286.422 121.041 286.637 120.846 287.066 120.686C287.5 120.525 288.053 120.445 288.725 120.445C289.412 120.445 289.932 120.621 290.283 120.973C290.635 121.32 290.811 121.836 290.811 122.52V125.174H291.098C291.375 125.174 291.561 125.203 291.654 125.262C291.748 125.32 291.795 125.426 291.795 125.578C291.795 125.719 291.756 125.824 291.678 125.895C291.6 125.965 291.482 126 291.326 126H290.406C290.297 126 290.207 125.967 290.137 125.9C290.066 125.834 290.02 125.738 289.996 125.613L289.949 125.256ZM295.416 119.174H294.42C294.041 119.174 293.803 119.145 293.705 119.086C293.611 119.023 293.564 118.912 293.564 118.752C293.564 118.611 293.604 118.506 293.682 118.436C293.764 118.365 293.881 118.33 294.033 118.33H295.967C296.072 118.33 296.154 118.352 296.213 118.395C296.271 118.438 296.301 118.496 296.301 118.57V125.174H298.141C298.289 125.174 298.396 125.207 298.463 125.273C298.533 125.336 298.568 125.438 298.568 125.578C298.568 125.738 298.535 125.85 298.469 125.912C298.402 125.971 298.277 126 298.094 126H293.77C293.617 126 293.5 125.965 293.418 125.895C293.34 125.824 293.301 125.719 293.301 125.578C293.301 125.441 293.342 125.34 293.424 125.273C293.506 125.207 293.629 125.174 293.793 125.174H295.416V119.174ZM301.035 123.551C301.066 124.113 301.256 124.549 301.604 124.857C301.955 125.162 302.434 125.314 303.039 125.314C303.496 125.314 303.994 125.193 304.533 124.951C305.072 124.705 305.398 124.582 305.512 124.582C305.629 124.582 305.727 124.619 305.805 124.693C305.883 124.768 305.922 124.859 305.922 124.969C305.922 125.082 305.881 125.186 305.799 125.279C305.717 125.373 305.586 125.465 305.406 125.555C305.016 125.746 304.611 125.893 304.193 125.994C303.779 126.096 303.367 126.146 302.957 126.146C302.066 126.146 301.354 125.891 300.818 125.379C300.283 124.863 300.016 124.182 300.016 123.334C300.016 122.471 300.299 121.771 300.865 121.236C301.432 120.701 302.17 120.434 303.08 120.434C303.904 120.434 304.588 120.684 305.131 121.184C305.674 121.684 305.945 122.289 305.945 123C305.945 123.219 305.898 123.365 305.805 123.439C305.715 123.514 305.467 123.551 305.061 123.551H304.973H301.035ZM301.064 122.783H304.879C304.82 122.318 304.625 121.945 304.293 121.664C303.965 121.379 303.561 121.236 303.08 121.236C302.561 121.236 302.123 121.373 301.768 121.646C301.412 121.92 301.178 122.299 301.064 122.783Z",
                                fill: "#4C5566",
                              },
                            }),
                            s("path", {
                              attrs: {
                                d:
                                  "M65.9395 187.493V191H63.8887V181.047H67.7715C68.5189 181.047 69.1751 181.184 69.7402 181.457C70.3099 181.73 70.7474 182.12 71.0527 182.626C71.3581 183.127 71.5107 183.699 71.5107 184.342C71.5107 185.317 71.1758 186.087 70.5059 186.652C69.8405 187.213 68.9176 187.493 67.7373 187.493H65.9395ZM65.9395 185.832H67.7715C68.3138 185.832 68.7262 185.704 69.0088 185.449C69.2959 185.194 69.4395 184.829 69.4395 184.355C69.4395 183.868 69.2959 183.474 69.0088 183.173C68.7217 182.872 68.3252 182.717 67.8193 182.708H65.9395V185.832ZM76.9521 185.456C76.6833 185.42 76.4463 185.401 76.2412 185.401C75.4938 185.401 75.0039 185.654 74.7715 186.16V191H72.7959V183.604H74.6621L74.7168 184.485C75.1133 183.806 75.6624 183.467 76.3643 183.467C76.583 183.467 76.7881 183.496 76.9795 183.556L76.9521 185.456ZM81.1768 191.137C80.0921 191.137 79.208 190.804 78.5244 190.139C77.8454 189.473 77.5059 188.587 77.5059 187.479V187.288C77.5059 186.545 77.6494 185.882 77.9365 185.299C78.2236 184.711 78.6292 184.26 79.1533 183.945C79.682 183.626 80.2835 183.467 80.958 183.467C81.9697 183.467 82.765 183.786 83.3438 184.424C83.9271 185.062 84.2188 185.966 84.2188 187.138V187.944H79.5088C79.5726 188.427 79.764 188.815 80.083 189.106C80.4066 189.398 80.8145 189.544 81.3066 189.544C82.0677 189.544 82.6624 189.268 83.0908 188.717L84.0615 189.804C83.7653 190.223 83.3643 190.551 82.8584 190.788C82.3525 191.021 81.792 191.137 81.1768 191.137ZM80.9512 185.066C80.5592 185.066 80.2402 185.199 79.9941 185.463C79.7526 185.727 79.5977 186.105 79.5293 186.598H82.2773V186.44C82.2682 186.003 82.1497 185.666 81.9219 185.429C81.694 185.187 81.3704 185.066 80.9512 185.066ZM87.7119 181.785V183.604H88.9766V185.053H87.7119V188.744C87.7119 189.018 87.7643 189.214 87.8691 189.332C87.974 189.451 88.1745 189.51 88.4707 189.51C88.6895 189.51 88.8831 189.494 89.0518 189.462V190.959C88.6644 191.077 88.2656 191.137 87.8555 191.137C86.4701 191.137 85.7637 190.437 85.7363 189.038V185.053H84.6562V183.604H85.7363V181.785H87.7119ZM92.4424 181.785V183.604H93.707V185.053H92.4424V188.744C92.4424 189.018 92.4948 189.214 92.5996 189.332C92.7044 189.451 92.9049 189.51 93.2012 189.51C93.4199 189.51 93.6136 189.494 93.7822 189.462V190.959C93.3949 191.077 92.9961 191.137 92.5859 191.137C91.2005 191.137 90.4941 190.437 90.4668 189.038V185.053H89.3867V183.604H90.4668V181.785H92.4424ZM97.5693 188.204L98.9365 183.604H101.056L98.082 192.148L97.918 192.538C97.4759 193.504 96.7467 193.987 95.7305 193.987C95.4434 193.987 95.1517 193.944 94.8555 193.857V192.36L95.1562 192.367C95.5299 192.367 95.8079 192.31 95.9902 192.196C96.1771 192.082 96.3229 191.893 96.4277 191.629L96.6602 191.021L94.0693 183.604H96.1953L97.5693 188.204ZM107.502 189.353H111.856V191H105.451V181.047H107.502V189.353ZM114.994 191H113.012V183.604H114.994V191ZM112.896 181.689C112.896 181.393 112.993 181.149 113.189 180.958C113.39 180.767 113.661 180.671 114.003 180.671C114.34 180.671 114.609 180.767 114.81 180.958C115.01 181.149 115.11 181.393 115.11 181.689C115.11 181.99 115.008 182.236 114.803 182.428C114.602 182.619 114.336 182.715 114.003 182.715C113.67 182.715 113.401 182.619 113.196 182.428C112.996 182.236 112.896 181.99 112.896 181.689ZM118.446 183.604L118.508 184.458C119.036 183.797 119.745 183.467 120.634 183.467C121.418 183.467 122.001 183.697 122.384 184.157C122.767 184.618 122.963 185.306 122.972 186.222V191H120.996V186.27C120.996 185.85 120.905 185.547 120.723 185.36C120.54 185.169 120.237 185.073 119.813 185.073C119.257 185.073 118.84 185.31 118.562 185.784V191H116.587V183.604H118.446ZM127.162 188.033L126.451 188.744V191H124.476V180.5H126.451V186.317L126.834 185.825L128.728 183.604H131.1L128.427 186.687L131.332 191H129.062L127.162 188.033ZM135.96 188.956C135.96 188.715 135.839 188.525 135.598 188.389C135.361 188.247 134.978 188.122 134.449 188.013C132.69 187.644 131.811 186.896 131.811 185.771C131.811 185.114 132.082 184.567 132.624 184.13C133.171 183.688 133.884 183.467 134.764 183.467C135.702 183.467 136.452 183.688 137.013 184.13C137.578 184.572 137.86 185.146 137.86 185.853H135.885C135.885 185.57 135.794 185.338 135.611 185.155C135.429 184.968 135.144 184.875 134.757 184.875C134.424 184.875 134.167 184.95 133.984 185.101C133.802 185.251 133.711 185.442 133.711 185.675C133.711 185.894 133.813 186.071 134.019 186.208C134.228 186.34 134.579 186.456 135.071 186.557C135.563 186.652 135.978 186.762 136.315 186.885C137.359 187.268 137.881 187.931 137.881 188.874C137.881 189.549 137.591 190.095 137.013 190.515C136.434 190.929 135.687 191.137 134.771 191.137C134.151 191.137 133.599 191.027 133.116 190.809C132.638 190.585 132.262 190.282 131.988 189.899C131.715 189.512 131.578 189.095 131.578 188.648H133.451C133.469 188.999 133.599 189.268 133.841 189.455C134.082 189.642 134.406 189.735 134.812 189.735C135.19 189.735 135.475 189.665 135.666 189.523C135.862 189.378 135.96 189.188 135.96 188.956ZM144.826 189.353H149.181V191H142.775V181.047H144.826V189.353ZM152.318 191H150.336V183.604H152.318V191ZM150.22 181.689C150.22 181.393 150.318 181.149 150.514 180.958C150.714 180.767 150.985 180.671 151.327 180.671C151.664 180.671 151.933 180.767 152.134 180.958C152.334 181.149 152.435 181.393 152.435 181.689C152.435 181.99 152.332 182.236 152.127 182.428C151.926 182.619 151.66 182.715 151.327 182.715C150.994 182.715 150.726 182.619 150.521 182.428C150.32 182.236 150.22 181.99 150.22 181.689ZM155.771 183.604L155.832 184.458C156.361 183.797 157.069 183.467 157.958 183.467C158.742 183.467 159.325 183.697 159.708 184.157C160.091 184.618 160.287 185.306 160.296 186.222V191H158.32V186.27C158.32 185.85 158.229 185.547 158.047 185.36C157.865 185.169 157.562 185.073 157.138 185.073C156.582 185.073 156.165 185.31 155.887 185.784V191H153.911V183.604H155.771ZM164.486 188.033L163.775 188.744V191H161.8V180.5H163.775V186.317L164.158 185.825L166.052 183.604H168.424L165.751 186.687L168.656 191H166.387L164.486 188.033Z",
                                fill: "#4C5566",
                              },
                            }),
                            s("rect", {
                              attrs: {
                                x: "61",
                                y: "206",
                                width: "309",
                                height: "26",
                                rx: "5",
                                fill: "#F0F2F4",
                              },
                            }),
                            s("path", {
                              attrs: {
                                d:
                                  "M79.1582 224.5H79.4102C79.6953 224.5 79.8887 224.529 79.9902 224.588C80.0918 224.65 80.1426 224.762 80.1426 224.922C80.1426 225.059 80.1016 225.162 80.0195 225.232C79.9414 225.303 79.8262 225.338 79.6738 225.338H76.9727C76.7891 225.338 76.6602 225.307 76.5859 225.244C76.5156 225.182 76.4805 225.074 76.4805 224.922C76.4805 224.781 76.5176 224.676 76.5918 224.605C76.6699 224.535 76.7852 224.5 76.9375 224.5H78.209L79.1582 222.631L77.0078 218.418C76.75 218.418 76.5723 218.387 76.4746 218.324C76.3809 218.262 76.334 218.152 76.334 217.996C76.334 217.859 76.373 217.758 76.4512 217.691C76.5293 217.621 76.6465 217.586 76.8027 217.586H78.4375C78.6562 217.586 78.8027 217.617 78.877 217.68C78.9512 217.738 78.9883 217.844 78.9883 217.996C78.9883 218.152 78.9395 218.262 78.8418 218.324C78.7441 218.387 78.5645 218.418 78.3027 218.418H78.0859L79.6738 221.646L81.291 218.418H81.0625C80.793 218.418 80.6074 218.387 80.5059 218.324C80.4043 218.262 80.3535 218.152 80.3535 217.996C80.3535 217.844 80.3906 217.738 80.4648 217.68C80.5391 217.617 80.6875 217.586 80.9102 217.586H82.3574C82.5176 217.586 82.6348 217.621 82.709 217.691C82.7871 217.758 82.8262 217.859 82.8262 217.996C82.8262 218.145 82.7832 218.25 82.6973 218.312C82.6113 218.375 82.459 218.41 82.2402 218.418L79.1582 224.5ZM86.8047 222.326C87.4062 222.326 87.8984 222.137 88.2812 221.758C88.668 221.375 88.8613 220.889 88.8613 220.299C88.8613 219.709 88.668 219.223 88.2812 218.84C87.8945 218.453 87.4023 218.26 86.8047 218.26C86.207 218.26 85.7148 218.453 85.3281 218.84C84.9453 219.223 84.7539 219.709 84.7539 220.299C84.7539 220.893 84.9453 221.379 85.3281 221.758C85.7109 222.137 86.2031 222.326 86.8047 222.326ZM89.8809 220.299C89.8809 221.135 89.5957 221.818 89.0254 222.35C88.4551 222.881 87.7148 223.146 86.8047 223.146C85.8984 223.146 85.1602 222.881 84.5898 222.35C84.0195 221.818 83.7344 221.135 83.7344 220.299C83.7344 219.463 84.0195 218.781 84.5898 218.254C85.1602 217.723 85.8984 217.457 86.8047 217.457C87.7109 217.457 88.4492 217.723 89.0195 218.254C89.5938 218.785 89.8809 219.467 89.8809 220.299ZM92.5527 220.838C92.5527 221.33 92.6562 221.689 92.8633 221.916C93.0703 222.143 93.3984 222.256 93.8477 222.256C94.2734 222.256 94.6367 222.121 94.9375 221.852C95.2422 221.582 95.3945 221.244 95.3945 220.838V218.418H94.5918C94.4395 218.418 94.3281 218.387 94.2578 218.324C94.1914 218.258 94.1582 218.156 94.1582 218.02C94.1582 217.871 94.1953 217.762 94.2695 217.691C94.3438 217.621 94.4629 217.586 94.627 217.586H95.875C96.0234 217.586 96.127 217.619 96.1855 217.686C96.248 217.748 96.2793 217.904 96.2793 218.154V222.174H96.5488C96.7402 222.174 96.877 222.205 96.959 222.268C97.0449 222.33 97.0879 222.434 97.0879 222.578C97.0879 222.719 97.0469 222.824 96.9648 222.895C96.8867 222.965 96.7715 223 96.6191 223H95.7285C95.623 223 95.541 222.979 95.4824 222.936C95.4238 222.893 95.3945 222.834 95.3945 222.76V222.361C95.0195 222.65 94.6973 222.85 94.4277 222.959C94.1621 223.064 93.8809 223.117 93.584 223.117C92.9395 223.117 92.4551 222.947 92.1309 222.607C91.8105 222.264 91.6504 221.746 91.6504 221.055V218.418H91.5273C91.2617 218.418 91.0801 218.387 90.9824 218.324C90.8848 218.262 90.8359 218.152 90.8359 217.996C90.8359 217.859 90.873 217.758 90.9473 217.691C91.0254 217.621 91.1445 217.586 91.3047 217.586H92.1895C92.3262 217.586 92.4199 217.613 92.4707 217.668C92.5254 217.723 92.5527 217.844 92.5527 218.031V220.838ZM100.645 222.174H102.59C102.742 222.174 102.854 222.207 102.924 222.273C102.998 222.336 103.035 222.438 103.035 222.578C103.035 222.738 103 222.85 102.93 222.912C102.863 222.971 102.738 223 102.555 223H98.7227C98.5703 223 98.4551 222.965 98.377 222.895C98.2988 222.824 98.2598 222.719 98.2598 222.578C98.2598 222.441 98.2988 222.34 98.377 222.273C98.459 222.207 98.584 222.174 98.752 222.174H99.7715V218.418H99.373C98.9941 218.418 98.7578 218.389 98.6641 218.33C98.5703 218.268 98.5234 218.156 98.5234 217.996C98.5234 217.859 98.5605 217.758 98.6348 217.691C98.7129 217.621 98.8301 217.586 98.9863 217.586H100.322C100.428 217.586 100.508 217.607 100.562 217.65C100.617 217.689 100.645 217.748 100.645 217.826V218.822C101.016 218.357 101.402 218.012 101.805 217.785C102.207 217.559 102.641 217.445 103.105 217.445C103.453 217.445 103.734 217.516 103.949 217.656C104.164 217.797 104.271 217.979 104.271 218.201C104.271 218.346 104.217 218.475 104.107 218.588C104.002 218.697 103.885 218.752 103.756 218.752C103.666 218.752 103.514 218.693 103.299 218.576C103.088 218.455 102.898 218.395 102.73 218.395C102.426 218.395 102.104 218.504 101.764 218.723C101.428 218.938 101.055 219.279 100.645 219.748V222.174ZM105.871 222.578V221.535C105.871 221.363 105.902 221.24 105.965 221.166C106.031 221.092 106.137 221.055 106.281 221.055C106.441 221.055 106.568 221.164 106.662 221.383C106.725 221.516 106.781 221.615 106.832 221.682C106.996 221.893 107.238 222.062 107.559 222.191C107.879 222.316 108.232 222.379 108.619 222.379C109.033 222.379 109.365 222.295 109.615 222.127C109.865 221.959 109.99 221.738 109.99 221.465C109.99 221.188 109.889 220.99 109.686 220.873C109.486 220.756 109.143 220.697 108.654 220.697H108.332C107.535 220.697 106.928 220.559 106.51 220.281C106.092 220.004 105.883 219.602 105.883 219.074C105.883 218.559 106.086 218.158 106.492 217.873C106.902 217.588 107.477 217.445 108.215 217.445C108.516 217.445 108.822 217.488 109.135 217.574C109.447 217.656 109.611 217.697 109.627 217.697C109.67 217.697 109.752 217.66 109.873 217.586C109.994 217.508 110.113 217.469 110.23 217.469C110.363 217.469 110.461 217.518 110.523 217.615C110.59 217.713 110.623 217.859 110.623 218.055V218.74C110.623 218.947 110.592 219.098 110.529 219.191C110.467 219.281 110.367 219.326 110.23 219.326C110.113 219.326 109.969 219.227 109.797 219.027C109.676 218.891 109.576 218.787 109.498 218.717C109.291 218.525 109.07 218.389 108.836 218.307C108.602 218.221 108.326 218.178 108.01 218.178C107.643 218.178 107.346 218.26 107.119 218.424C106.896 218.584 106.785 218.789 106.785 219.039C106.785 219.285 106.9 219.461 107.131 219.566C107.361 219.672 107.857 219.732 108.619 219.748C109.432 219.768 110.025 219.91 110.4 220.176C110.775 220.438 110.963 220.844 110.963 221.395C110.963 221.922 110.756 222.344 110.342 222.66C109.928 222.977 109.369 223.135 108.666 223.135C108.443 223.135 108.195 223.113 107.922 223.07C107.648 223.031 107.305 222.963 106.891 222.865C106.754 222.955 106.637 223.021 106.539 223.064C106.441 223.111 106.359 223.135 106.293 223.135C106.156 223.135 106.051 223.088 105.977 222.994C105.906 222.896 105.871 222.758 105.871 222.578ZM115.094 215.898C115.094 215.477 115.131 215.211 115.205 215.102C115.283 214.992 115.447 214.938 115.697 214.938C115.939 214.938 116.1 214.984 116.178 215.078C116.256 215.168 116.295 215.385 116.295 215.729C116.295 216.064 116.258 216.273 116.184 216.355C116.113 216.434 115.951 216.473 115.697 216.473C115.447 216.473 115.283 216.436 115.205 216.361C115.131 216.287 115.094 216.133 115.094 215.898ZM116.178 222.174H118.059C118.211 222.174 118.322 222.207 118.393 222.273C118.467 222.336 118.504 222.438 118.504 222.578C118.504 222.738 118.469 222.85 118.398 222.912C118.332 222.971 118.207 223 118.023 223H113.477C113.32 223 113.203 222.965 113.125 222.895C113.047 222.824 113.008 222.719 113.008 222.578C113.008 222.441 113.049 222.34 113.131 222.273C113.213 222.207 113.336 222.174 113.5 222.174H115.287V218.418H114.145C113.984 218.418 113.861 218.383 113.775 218.312C113.693 218.238 113.652 218.133 113.652 217.996C113.652 217.859 113.691 217.758 113.77 217.691C113.848 217.621 113.965 217.586 114.121 217.586H115.838C115.943 217.586 116.025 217.607 116.084 217.65C116.146 217.693 116.178 217.752 116.178 217.826V222.174ZM124.439 217.914C124.631 217.914 124.77 217.947 124.855 218.014C124.945 218.08 124.99 218.186 124.99 218.33C124.99 218.467 124.949 218.57 124.867 218.641C124.785 218.707 124.662 218.74 124.498 218.74H122.125V220.697C122.125 221.338 122.207 221.76 122.371 221.963C122.539 222.166 122.824 222.268 123.227 222.268C123.582 222.268 124.008 222.164 124.504 221.957C125 221.75 125.307 221.646 125.424 221.646C125.533 221.646 125.625 221.686 125.699 221.764C125.777 221.842 125.816 221.938 125.816 222.051C125.816 222.18 125.768 222.293 125.67 222.391C125.576 222.484 125.414 222.576 125.184 222.666C124.801 222.818 124.455 222.93 124.146 223C123.842 223.07 123.555 223.105 123.285 223.105C122.828 223.105 122.443 223.033 122.131 222.889C121.822 222.74 121.592 222.521 121.439 222.232C121.361 222.096 121.305 221.934 121.27 221.746C121.238 221.559 121.223 221.27 121.223 220.879V220.697V218.74H120.227C120.062 218.74 119.943 218.709 119.869 218.646C119.795 218.58 119.758 218.475 119.758 218.33C119.758 218.17 119.809 218.061 119.91 218.002C120.012 217.943 120.229 217.914 120.561 217.914H121.223V216.713V216.402C121.223 216.234 121.258 216.111 121.328 216.033C121.402 215.951 121.516 215.91 121.668 215.91C121.84 215.91 121.959 215.959 122.025 216.057C122.092 216.154 122.125 216.377 122.125 216.725V217.914H124.439ZM128.066 220.551C128.098 221.113 128.287 221.549 128.635 221.857C128.986 222.162 129.465 222.314 130.07 222.314C130.527 222.314 131.025 222.193 131.564 221.951C132.104 221.705 132.43 221.582 132.543 221.582C132.66 221.582 132.758 221.619 132.836 221.693C132.914 221.768 132.953 221.859 132.953 221.969C132.953 222.082 132.912 222.186 132.83 222.279C132.748 222.373 132.617 222.465 132.438 222.555C132.047 222.746 131.643 222.893 131.225 222.994C130.811 223.096 130.398 223.146 129.988 223.146C129.098 223.146 128.385 222.891 127.85 222.379C127.314 221.863 127.047 221.182 127.047 220.334C127.047 219.471 127.33 218.771 127.896 218.236C128.463 217.701 129.201 217.434 130.111 217.434C130.936 217.434 131.619 217.684 132.162 218.184C132.705 218.684 132.977 219.289 132.977 220C132.977 220.219 132.93 220.365 132.836 220.439C132.746 220.514 132.498 220.551 132.092 220.551H132.004H128.066ZM128.096 219.783H131.91C131.852 219.318 131.656 218.945 131.324 218.664C130.996 218.379 130.592 218.236 130.111 218.236C129.592 218.236 129.154 218.373 128.799 218.646C128.443 218.92 128.209 219.299 128.096 219.783ZM136.105 222.039C136.105 221.734 136.211 221.484 136.422 221.289C136.637 221.094 136.914 220.996 137.254 220.996C137.602 220.996 137.881 221.092 138.092 221.283C138.303 221.475 138.408 221.727 138.408 222.039C138.408 222.352 138.301 222.604 138.086 222.795C137.875 222.986 137.598 223.082 137.254 223.082C136.91 223.082 136.633 222.986 136.422 222.795C136.211 222.604 136.105 222.352 136.105 222.039ZM146.225 217.938V217.914C146.225 217.785 146.262 217.691 146.336 217.633C146.41 217.57 146.525 217.539 146.682 217.539C146.842 217.539 146.951 217.586 147.01 217.68C147.072 217.773 147.104 217.967 147.104 218.26V219.35C147.104 219.494 147.066 219.604 146.992 219.678C146.918 219.748 146.807 219.783 146.658 219.783C146.553 219.783 146.461 219.754 146.383 219.695C146.309 219.633 146.217 219.506 146.107 219.314C145.92 218.998 145.691 218.76 145.422 218.6C145.156 218.436 144.85 218.354 144.502 218.354C143.893 218.354 143.396 218.533 143.014 218.893C142.635 219.252 142.445 219.717 142.445 220.287C142.445 220.869 142.627 221.346 142.99 221.717C143.357 222.084 143.828 222.268 144.402 222.268C144.664 222.268 144.912 222.232 145.146 222.162C145.385 222.088 145.609 221.979 145.82 221.834C145.895 221.787 145.994 221.715 146.119 221.617C146.373 221.41 146.572 221.307 146.717 221.307C146.838 221.307 146.936 221.346 147.01 221.424C147.088 221.498 147.127 221.596 147.127 221.717C147.127 222.025 146.834 222.342 146.248 222.666C145.666 222.986 145.047 223.146 144.391 223.146C143.543 223.146 142.836 222.875 142.27 222.332C141.707 221.789 141.426 221.111 141.426 220.299C141.426 219.486 141.707 218.809 142.27 218.266C142.832 217.719 143.535 217.445 144.379 217.445C144.676 217.445 144.973 217.486 145.27 217.568C145.57 217.646 145.889 217.77 146.225 217.938ZM151.668 222.326C152.27 222.326 152.762 222.137 153.145 221.758C153.531 221.375 153.725 220.889 153.725 220.299C153.725 219.709 153.531 219.223 153.145 218.84C152.758 218.453 152.266 218.26 151.668 218.26C151.07 218.26 150.578 218.453 150.191 218.84C149.809 219.223 149.617 219.709 149.617 220.299C149.617 220.893 149.809 221.379 150.191 221.758C150.574 222.137 151.066 222.326 151.668 222.326ZM154.744 220.299C154.744 221.135 154.459 221.818 153.889 222.35C153.318 222.881 152.578 223.146 151.668 223.146C150.762 223.146 150.023 222.881 149.453 222.35C148.883 221.818 148.598 221.135 148.598 220.299C148.598 219.463 148.883 218.781 149.453 218.254C150.023 217.723 150.762 217.457 151.668 217.457C152.574 217.457 153.312 217.723 153.883 218.254C154.457 218.785 154.744 219.467 154.744 220.299ZM161.049 219.736C161.049 219.186 160.998 218.814 160.896 218.623C160.799 218.428 160.629 218.33 160.387 218.33C160.098 218.33 159.867 218.455 159.695 218.705C159.527 218.955 159.443 219.299 159.443 219.736V222.174H159.549C159.787 222.174 159.945 222.203 160.023 222.262C160.105 222.316 160.146 222.422 160.146 222.578C160.146 222.719 160.113 222.824 160.047 222.895C159.98 222.965 159.879 223 159.742 223H158.998C158.83 223 158.715 222.961 158.652 222.883C158.594 222.805 158.564 222.637 158.564 222.379V222.209V219.736V219.279C158.564 218.986 158.498 218.756 158.365 218.588C158.232 218.416 158.051 218.33 157.82 218.33C157.645 218.33 157.482 218.383 157.334 218.488C157.189 218.59 157.064 218.742 156.959 218.945V222.174H157.176C157.41 222.174 157.568 222.203 157.65 222.262C157.732 222.32 157.773 222.426 157.773 222.578C157.773 222.738 157.74 222.85 157.674 222.912C157.607 222.971 157.48 223 157.293 223H155.734C155.582 223 155.469 222.967 155.395 222.9C155.324 222.83 155.289 222.723 155.289 222.578C155.289 222.422 155.334 222.316 155.424 222.262C155.518 222.203 155.697 222.174 155.963 222.174H156.08V218.418H155.975C155.701 218.418 155.514 218.387 155.412 218.324C155.314 218.262 155.266 218.152 155.266 217.996C155.266 217.859 155.305 217.758 155.383 217.691C155.461 217.621 155.578 217.586 155.734 217.586H156.631C156.76 217.586 156.844 217.609 156.883 217.656C156.926 217.699 156.951 217.793 156.959 217.938C157.119 217.766 157.291 217.639 157.475 217.557C157.658 217.475 157.865 217.434 158.096 217.434C158.369 217.434 158.594 217.494 158.77 217.615C158.949 217.732 159.082 217.912 159.168 218.154C159.332 217.908 159.521 217.727 159.736 217.609C159.951 217.492 160.197 217.434 160.475 217.434C160.979 217.434 161.346 217.598 161.576 217.926C161.811 218.254 161.928 218.785 161.928 219.52V222.174H162.021C162.264 222.174 162.426 222.203 162.508 222.262C162.59 222.32 162.631 222.426 162.631 222.578C162.631 222.719 162.596 222.824 162.525 222.895C162.455 222.965 162.352 223 162.215 223H161.506C161.35 223 161.234 222.953 161.16 222.859C161.086 222.766 161.049 222.617 161.049 222.414V219.736ZM164.764 223.158C164.678 223.354 164.596 223.486 164.518 223.557C164.443 223.627 164.354 223.662 164.248 223.662C164.139 223.662 164.043 223.621 163.961 223.539C163.879 223.461 163.838 223.365 163.838 223.252C163.838 223.221 163.844 223.184 163.855 223.141C163.867 223.102 163.883 223.059 163.902 223.012L167.559 215.131C167.656 214.928 167.742 214.791 167.816 214.721C167.891 214.646 167.98 214.609 168.086 214.609C168.203 214.609 168.303 214.648 168.385 214.727C168.467 214.805 168.508 214.898 168.508 215.008C168.508 215.039 168.502 215.074 168.49 215.113C168.482 215.152 168.469 215.189 168.449 215.225L164.764 223.158ZM173.254 220.023L172.498 222.807C172.459 222.955 172.4 223.059 172.322 223.117C172.244 223.176 172.127 223.205 171.971 223.205C171.83 223.205 171.721 223.168 171.643 223.094C171.564 223.02 171.494 222.885 171.432 222.689L170.09 218.418H170.037C169.873 218.418 169.756 218.387 169.686 218.324C169.611 218.258 169.574 218.148 169.574 217.996C169.574 217.863 169.613 217.762 169.691 217.691C169.766 217.621 169.877 217.586 170.025 217.586H171.59C171.801 217.586 171.943 217.617 172.018 217.68C172.092 217.738 172.129 217.844 172.129 217.996C172.129 218.09 172.107 218.172 172.064 218.242C172.021 218.309 171.967 218.35 171.9 218.365C171.834 218.385 171.756 218.398 171.666 218.406C171.58 218.414 171.475 218.418 171.35 218.418H171.01L172.018 221.934L172.773 219.379C172.816 219.23 172.877 219.127 172.955 219.068C173.033 219.01 173.148 218.98 173.301 218.98C173.441 218.98 173.551 219.02 173.629 219.098C173.711 219.172 173.783 219.305 173.846 219.496L174.578 221.934L175.545 218.418H175.404H175.152C174.883 218.418 174.701 218.389 174.607 218.33C174.514 218.268 174.467 218.156 174.467 217.996C174.467 217.84 174.502 217.732 174.572 217.674C174.643 217.615 174.779 217.586 174.982 217.586H176.553C176.674 217.586 176.764 217.621 176.822 217.691C176.885 217.762 176.916 217.863 176.916 217.996C176.916 218.145 176.881 218.25 176.811 218.312C176.74 218.375 176.607 218.41 176.412 218.418L175.094 222.807C175.043 222.955 174.979 223.059 174.9 223.117C174.826 223.176 174.713 223.205 174.561 223.205C174.42 223.205 174.309 223.166 174.227 223.088C174.145 223.014 174.076 222.881 174.021 222.689L173.254 220.023ZM178.984 224.5H180.391C180.539 224.5 180.65 224.535 180.725 224.605C180.799 224.676 180.836 224.781 180.836 224.922C180.836 225.074 180.799 225.182 180.725 225.244C180.654 225.307 180.527 225.338 180.344 225.338H177.76C177.604 225.338 177.484 225.303 177.402 225.232C177.324 225.162 177.285 225.059 177.285 224.922C177.285 224.766 177.334 224.656 177.432 224.594C177.533 224.531 177.719 224.5 177.988 224.5H178.1V218.418H177.988C177.719 218.418 177.533 218.387 177.432 218.324C177.334 218.262 177.285 218.152 177.285 217.996C177.285 217.859 177.324 217.758 177.402 217.691C177.484 217.621 177.604 217.586 177.76 217.586H178.65C178.768 217.586 178.852 217.605 178.902 217.645C178.957 217.684 178.984 217.744 178.984 217.826V218.395C179.25 218.121 179.543 217.916 179.863 217.779C180.188 217.643 180.535 217.574 180.906 217.574C181.691 217.574 182.348 217.84 182.875 218.371C183.402 218.902 183.666 219.568 183.666 220.369C183.666 221.139 183.416 221.771 182.916 222.268C182.416 222.764 181.777 223.012 181 223.012C180.586 223.012 180.205 222.939 179.857 222.795C179.51 222.646 179.219 222.436 178.984 222.162V224.5ZM180.801 222.15C181.344 222.15 181.789 221.98 182.137 221.641C182.484 221.297 182.658 220.854 182.658 220.311C182.658 219.779 182.482 219.342 182.131 218.998C181.783 218.65 181.34 218.477 180.801 218.477C180.262 218.477 179.82 218.648 179.477 218.992C179.133 219.336 178.961 219.775 178.961 220.311C178.961 220.85 179.131 221.291 179.471 221.635C179.814 221.979 180.258 222.15 180.801 222.15ZM187.703 216.256C187.254 216.256 186.904 216.521 186.654 217.053C186.404 217.584 186.279 218.334 186.279 219.303C186.279 220.275 186.404 221.029 186.654 221.564C186.904 222.096 187.254 222.361 187.703 222.361C188.156 222.361 188.508 222.096 188.758 221.564C189.008 221.029 189.133 220.275 189.133 219.303C189.133 218.334 189.008 217.584 188.758 217.053C188.508 216.521 188.156 216.256 187.703 216.256ZM187.703 223.193C186.969 223.193 186.385 222.848 185.951 222.156C185.521 221.461 185.307 220.51 185.307 219.303C185.307 218.1 185.521 217.152 185.951 216.461C186.385 215.766 186.969 215.418 187.703 215.418C188.438 215.418 189.021 215.766 189.455 216.461C189.889 217.156 190.105 218.104 190.105 219.303C190.105 220.502 189.889 221.451 189.455 222.15C189.021 222.846 188.438 223.193 187.703 223.193ZM197.084 219.736C197.084 219.186 197.033 218.814 196.932 218.623C196.834 218.428 196.664 218.33 196.422 218.33C196.133 218.33 195.902 218.455 195.73 218.705C195.562 218.955 195.479 219.299 195.479 219.736V222.174H195.584C195.822 222.174 195.98 222.203 196.059 222.262C196.141 222.316 196.182 222.422 196.182 222.578C196.182 222.719 196.148 222.824 196.082 222.895C196.016 222.965 195.914 223 195.777 223H195.033C194.865 223 194.75 222.961 194.688 222.883C194.629 222.805 194.6 222.637 194.6 222.379V222.209V219.736V219.279C194.6 218.986 194.533 218.756 194.4 218.588C194.268 218.416 194.086 218.33 193.855 218.33C193.68 218.33 193.518 218.383 193.369 218.488C193.225 218.59 193.1 218.742 192.994 218.945V222.174H193.211C193.445 222.174 193.604 222.203 193.686 222.262C193.768 222.32 193.809 222.426 193.809 222.578C193.809 222.738 193.775 222.85 193.709 222.912C193.643 222.971 193.516 223 193.328 223H191.77C191.617 223 191.504 222.967 191.43 222.9C191.359 222.83 191.324 222.723 191.324 222.578C191.324 222.422 191.369 222.316 191.459 222.262C191.553 222.203 191.732 222.174 191.998 222.174H192.115V218.418H192.01C191.736 218.418 191.549 218.387 191.447 218.324C191.35 218.262 191.301 218.152 191.301 217.996C191.301 217.859 191.34 217.758 191.418 217.691C191.496 217.621 191.613 217.586 191.77 217.586H192.666C192.795 217.586 192.879 217.609 192.918 217.656C192.961 217.699 192.986 217.793 192.994 217.938C193.154 217.766 193.326 217.639 193.51 217.557C193.693 217.475 193.9 217.434 194.131 217.434C194.404 217.434 194.629 217.494 194.805 217.615C194.984 217.732 195.117 217.912 195.203 218.154C195.367 217.908 195.557 217.727 195.771 217.609C195.986 217.492 196.232 217.434 196.51 217.434C197.014 217.434 197.381 217.598 197.611 217.926C197.846 218.254 197.963 218.785 197.963 219.52V222.174H198.057C198.299 222.174 198.461 222.203 198.543 222.262C198.625 222.32 198.666 222.426 198.666 222.578C198.666 222.719 198.631 222.824 198.561 222.895C198.49 222.965 198.387 223 198.25 223H197.541C197.385 223 197.27 222.953 197.195 222.859C197.121 222.766 197.084 222.617 197.084 222.414V219.736Z",
                                fill: "#4C5566",
                              },
                            }),
                            s("circle", {
                              attrs: {
                                cx: "50",
                                cy: "33",
                                r: "4",
                                fill: "#B6BCC8",
                              },
                            }),
                            s("circle", {
                              attrs: {
                                cx: "62",
                                cy: "33",
                                r: "4",
                                fill: "#B6BCC8",
                              },
                            }),
                            s("circle", {
                              attrs: {
                                cx: "74",
                                cy: "33",
                                r: "4",
                                fill: "#B6BCC8",
                              },
                            }),
                          ]),
                          s("defs", [
                            s(
                              "filter",
                              {
                                attrs: {
                                  id: "filter0_dd",
                                  x: "0",
                                  y: "0",
                                  width: "430",
                                  height: "316",
                                  filterUnits: "userSpaceOnUse",
                                  "color-interpolation-filters": "sRGB",
                                },
                              },
                              [
                                s("feFlood", {
                                  attrs: {
                                    "flood-opacity": "0",
                                    result: "BackgroundImageFix",
                                  },
                                }),
                                s("feColorMatrix", {
                                  attrs: {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values:
                                      "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                  },
                                }),
                                s("feOffset", { attrs: { dy: "15" } }),
                                s("feGaussianBlur", {
                                  attrs: { stdDeviation: "17.5" },
                                }),
                                s("feColorMatrix", {
                                  attrs: {
                                    type: "matrix",
                                    values:
                                      "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",
                                  },
                                }),
                                s("feBlend", {
                                  attrs: {
                                    mode: "normal",
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow",
                                  },
                                }),
                                s("feColorMatrix", {
                                  attrs: {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values:
                                      "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                  },
                                }),
                                s("feOffset", { attrs: { dy: "5" } }),
                                s("feGaussianBlur", {
                                  attrs: { stdDeviation: "7.5" },
                                }),
                                s("feColorMatrix", {
                                  attrs: {
                                    type: "matrix",
                                    values:
                                      "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0",
                                  },
                                }),
                                s("feBlend", {
                                  attrs: {
                                    mode: "normal",
                                    in2: "effect1_dropShadow",
                                    result: "effect2_dropShadow",
                                  },
                                }),
                                s("feBlend", {
                                  attrs: {
                                    mode: "normal",
                                    in: "SourceGraphic",
                                    in2: "effect2_dropShadow",
                                    result: "shape",
                                  },
                                }),
                              ],
                              1
                            ),
                          ]),
                        ]
                      ),
                    ]
                  ),
                  s(
                    "div",
                    {
                      staticClass:
                        "monsterinsights-tools-prettylinks-row-description",
                    },
                    [
                      s("h3", {
                        domProps: {
                          textContent: t._s(t.text_use_prettylinks_user),
                        },
                      }),
                      s("p", {
                        domProps: {
                          textContent: t._s(t.text_prettylinks_flow_process),
                        },
                      }),
                    ]
                  ),
                ]),
                s(
                  "div",
                  {
                    class: [
                      t.isAddonActive("pretty-link")
                        ? "prettylinks-status-active"
                        : "prettylinks-not-activated",
                      "monsterinsights-tools-info-row monsterinsights-prettylinks-flow-install-wizard",
                    ],
                  },
                  [
                    t.isAddonActive("pretty-link")
                      ? s(
                          "div",
                          {
                            staticClass:
                              "monsterinsights-prettylinks-flow-counter",
                          },
                          [
                            s(
                              "svg",
                              {
                                attrs: {
                                  width: "25",
                                  height: "18",
                                  viewBox: "0 0 25 18",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                              },
                              [
                                s("path", {
                                  attrs: {
                                    d:
                                      "M8.90625 17.5781L1.07812 9.79688C0.859375 9.57812 0.75 9.29688 0.75 8.95312C0.75 8.60938 0.859375 8.32812 1.07812 8.10938L2.8125 6.42188C3.03125 6.17188 3.29688 6.04688 3.60938 6.04688C3.95312 6.04688 4.25 6.17188 4.5 6.42188L9.75 11.6719L21 0.421875C21.25 0.171875 21.5312 0.046875 21.8438 0.046875C22.1875 0.046875 22.4688 0.171875 22.6875 0.421875L24.4219 2.10938C24.6406 2.32813 24.75 2.60938 24.75 2.95312C24.75 3.29688 24.6406 3.57812 24.4219 3.79688L10.5938 17.5781C10.375 17.8281 10.0938 17.9531 9.75 17.9531C9.40625 17.9531 9.125 17.8281 8.90625 17.5781Z",
                                    fill: "white",
                                  },
                                }),
                              ]
                            ),
                          ]
                        )
                      : s("div", {
                          staticClass:
                            "monsterinsights-prettylinks-flow-counter",
                          domProps: { textContent: t._s(t.text_counter_one) },
                        }),
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-tools-prettylinks-action monsterinsights-tools-install-prettylinks",
                      },
                      [
                        s("h3", {
                          domProps: {
                            textContent: t._s(t.text_download_prettylinks),
                          },
                        }),
                        s("p", {
                          domProps: {
                            textContent: t._s(
                              t.text_install_prettylinks_from_wp
                            ),
                          },
                        }),
                        t.isAddonActive("pretty-link")
                          ? s("button", {
                              staticClass: "monsterinsights-button",
                              domProps: {
                                textContent: t._s(t.text_prettylinks_activated),
                              },
                            })
                          : s("addon-button", {
                              attrs: {
                                "install-text":
                                  t.text_prettylinks_install_button,
                                "activate-text":
                                  t.text_prettylinks_activate_button,
                                "activating-text":
                                  t.text_prettylinks_activating_button,
                                addon: t.addons["pretty-link"],
                                "is-addon": !1,
                                "auto-activate": !0,
                              },
                            }),
                      ],
                      1
                    ),
                  ]
                ),
                s(
                  "div",
                  {
                    class: [
                      t.isAddonActive("pretty-link")
                        ? "prettylinks-activated"
                        : "",
                      "monsterinsights-tools-info-row monsterinsights-prettylinks-flow-install-wizard",
                    ],
                  },
                  [
                    s("div", {
                      staticClass: "monsterinsights-prettylinks-flow-counter",
                      domProps: { textContent: t._s(t.text_counter_two) },
                    }),
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-tools-prettylinks-action monsterinsights-tools-create-prettylinks",
                      },
                      [
                        s("h3", {
                          domProps: {
                            textContent: t._s(t.text_create_new_prettylink),
                          },
                        }),
                        s("p", {
                          domProps: {
                            textContent: t._s(t.text_create_prettylink_process),
                          },
                        }),
                        s("a", {
                          staticClass: "monsterinsights-button",
                          attrs: { href: t.addNewPrettyLinkPageUrl },
                          domProps: {
                            textContent: t._s(t.text_create_prettylinks),
                          },
                        }),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      Yi = [];
    function Ki(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Xi(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ki(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Ki(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Ji = {
        name: "ToolsPrettyLinksFlow",
        components: { AddonButton: Ms },
        data: function () {
          return {
            text_prettylinks_flow_title: Object(c["a"])(
              "Make your MonsterInsights campaign links prettier with Pretty Links!",
              "ga-premium"
            ),
            text_prettylinks_flow_description: Object(c["a"])(
              "Pretty Links turns those ugly, long campaign links into clean, memorable, speakable, totally shareable links.",
              "ga-premium"
            ),
            text_prettylinks_flow_process: Object(c["a"])(
              "Take your MonsterInsights campaign links from our URL Builder and shorten them with Pretty Links!",
              "ga-premium"
            ),
            text_use_prettylinks_user: Object(c["a"])(
              "Over 200,000 websites use Pretty Links!",
              "ga-premium"
            ),
            text_prettylinks_install_button: Object(c["a"])(
              "Install Pretty Links",
              "ga-premium"
            ),
            text_prettylinks_activated: Object(c["a"])(
              "Pretty Links Installed & Activated",
              "ga-premium"
            ),
            text_download_prettylinks: Object(c["a"])(
              "Download Pretty Links",
              "ga-premium"
            ),
            text_install_prettylinks_from_wp: Object(c["a"])(
              "Install Pretty Links from the WordPress.org plugin repository.",
              "ga-premium"
            ),
            text_prettylinks_activate_button: Object(c["a"])(
              "Activate Pretty Links",
              "ga-premium"
            ),
            text_prettylinks_activating_button: Object(c["a"])(
              "Activating Pretty Links...",
              "ga-premium"
            ),
            text_create_prettylinks: Object(c["a"])(
              "Create New Pretty Link",
              "ga-premium"
            ),
            text_create_new_prettylink: Object(c["a"])(
              "Create a New Pretty Link",
              "ga-premium"
            ),
            text_create_prettylink_process: Object(c["a"])(
              "Grab your campaign link and paste it into the Target URL field.",
              "ga-premium"
            ),
            text_counter_one: Object(c["a"])("1", "ga-premium"),
            text_counter_two: Object(c["a"])("2", "ga-premium"),
            bodyClass: "monsterinsights-prettylinks-flow-page",
          };
        },
        created: function () {
          document.body.classList.add(this.bodyClass);
        },
        mounted: function () {
          window.scrollTo(0, 0);
        },
        computed: Xi({}, Object(l["b"])({ addons: "$_addons/addons" }), {
          addNewPrettyLinkPageUrl: function () {
            return this.$addQueryArg(
              this.$mi.new_pretty_link_url,
              "monsterinsights_reference",
              "url_builder"
            );
          },
        }),
        methods: {
          isAddonActive: function (t) {
            return !!this.addons[t] && this.addons[t].active;
          },
        },
        beforeDestroy: function () {
          document.body.classList.remove(this.bodyClass);
        },
      },
      Qi = Ji,
      tn = Object(b["a"])(Qi, qi, Yi, !1, null, null, null),
      en = tn.exports,
      sn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-container" },
          [
            s("about-block", [
              s(
                "figure",
                { staticClass: "monsterinsights-about-page-right-image" },
                [
                  s("div", {
                    staticClass:
                      "monsterinsights-bg-img monsterinsights-about-team",
                  }),
                  s("figcaption", {
                    domProps: { innerHTML: t._s(t.text_team_members) },
                  }),
                ]
              ),
              s("h3", { domProps: { textContent: t._s(t.text_about_title) } }),
              s("p", { domProps: { innerHTML: t._s(t.text_about_p1) } }),
              s("p", { domProps: { innerHTML: t._s(t.text_about_p2) } }),
              s("p", { domProps: { innerHTML: t._s(t.text_about_p3) } }),
              s("p", { domProps: { innerHTML: t._s(t.text_about_p4) } }),
            ]),
            s(
              "div",
              { staticClass: "monsterinsights-addons-list" },
              t._l(t.addonsList(), function (t, e) {
                return s("addon-block", {
                  key: e,
                  attrs: { addon: t, "is-addon": !1 },
                });
              }),
              1
            ),
          ],
          1
        );
      },
      nn = [],
      on = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-about-block" },
          [t._t("default")],
          2
        );
      },
      an = [],
      rn = { name: "AboutBlock" },
      ln = rn,
      cn = Object(b["a"])(ln, on, an, !1, null, null, null),
      pn = cn.exports;
    function un(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function mn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? un(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : un(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var dn = {
        name: "AboutTabAboutUs",
        components: { AddonBlock: ei["a"], AboutBlock: pn },
        data: function () {
          return {
            text_about_title: Object(c["a"])(
              "Hello and welcome to MonsterInsights, the best Google Analytics plugin for WordPress. MonsterInsights shows you exactly which content gets the most visit, so you can analyze and optimize it for higher conversions.",
              "ga-premium"
            ),
            text_about_p1: Object(c["a"])(
              "Over the years, we found that in order to get the most out of Google Analytics, you needed a full time developer who could implement custom tracking, so that Google Analytics would integrate with things like WooCommerce, and track things which Google doesn't by default, like outbound links.",
              "ga-premium"
            ),
            text_about_p2: Object(c["a"])(
              'Our goal is to take the pain out of analytics, making it simple and easy, by eliminating the need to have to worry about code, putting the best reports directly into the area you already go to (your WordPress dashboard), and adding the most advanced insights and features without complicating our plugin with tons of settings. Quite simply, it should "just work".',
              "ga-premium"
            ),
            text_about_p3: Object(c["a"])(
              "MonsterInsights is brought to you by the same team that's behind the largest WordPress resource site, WPBeginner, the most popular lead-generation software, OptinMonster, and the best WordPress forms plugin, WPForms.",
              "ga-premium"
            ),
            text_about_p4: Object(c["a"])(
              "Yup, we know a thing or two about building awesome products that customers love.",
              "ga-premium"
            ),
            text_team_members: Object(c["a"])(
              "The MonsterInsights Team",
              "ga-premium"
            ),
          };
        },
        computed: mn({}, Object(l["b"])({ addons: "$_addons/addons" })),
        methods: {
          addonsList: function () {
            var t = this,
              e = [
                "wpforms-lite",
                "aioseo",
                "optinmonster",
                "wp-mail-smtp",
                "coming-soon",
                "rafflepress",
                "trustpulse-api",
                "smash-balloon-instagram",
                "pushengage",
              ],
              s = [];
            return (
              e.forEach(function (e) {
                if (t.addons[e]) {
                  var i = Object.create(t.addons[e]);
                  (i.type = "licensed"), s.push(i);
                }
              }),
              s
            );
          },
        },
      },
      gn = dn,
      hn = Object(b["a"])(gn, sn, nn, !1, null, null, null),
      _n = hn.exports,
      Cn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-container" },
          [
            s("about-block", [
              s(
                "div",
                { staticClass: "monsterinsights-about-page-right-image" },
                [
                  s("iframe", {
                    attrs: {
                      width: "560",
                      height: "315",
                      src:
                        "https://www.youtube.com/embed/IbdKpSygp2U&modestbranding=1&showinfo=0&rel=0&fs=1",
                      frameborder: "0",
                      allow:
                        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                      allowfullscreen: "",
                    },
                  }),
                ]
              ),
              s("h3", {
                domProps: { textContent: t._s(t.text_getting_started_title) },
              }),
              s("p", {
                domProps: { innerHTML: t._s(t.text_getting_started_p1) },
              }),
              s("p", {
                domProps: { innerHTML: t._s(t.text_getting_started_p2) },
              }),
              s("p", {
                domProps: { innerHTML: t._s(t.text_getting_started_p3) },
              }),
              s("p", [
                s("a", {
                  staticClass: "monsterinsights-button",
                  attrs: { href: t.wizard_url },
                  domProps: { textContent: t._s(t.text_getting_started_link1) },
                }),
              ]),
            ]),
            t.showLitePro
              ? s("about-block", [
                  s("h3", { domProps: { textContent: t._s(t.text_get_pro) } }),
                  s("p", {
                    domProps: { innerHTML: t._s(t.text_get_pro_text) },
                  }),
                  s("div", { staticClass: "monsterinsights-separator" }),
                  s("div", { staticClass: "monsterinsights-two-column" }, [
                    s("div", { staticClass: "monsterinsights-list-check" }, [
                      s(
                        "ul",
                        t._l(t.check_list, function (e, i) {
                          return s("li", {
                            key: i,
                            domProps: { innerHTML: t._s(e) },
                          });
                        }),
                        0
                      ),
                    ]),
                    s("div", { staticClass: "monsterinsights-list-check" }, [
                      s(
                        "ul",
                        t._l(t.check_list_2, function (e, i) {
                          return s("li", {
                            key: i,
                            domProps: { innerHTML: t._s(e) },
                          });
                        }),
                        0
                      ),
                    ]),
                  ]),
                  s("div", { staticClass: "monsterinsights-separator" }),
                  s(
                    "div",
                    {
                      staticClass:
                        "monsterinsights-lite-vs-pro-footer monsterinsights-small",
                    },
                    [
                      s("h3", [
                        s("a", {
                          attrs: {
                            href: t.$getUpgradeUrl("about-page", "lite-vs-pro"),
                          },
                          domProps: { textContent: t._s(t.text_get_upgrade) },
                        }),
                      ]),
                      s("p", {
                        domProps: { innerHTML: t._s(t.text_upgrade_subtitle) },
                      }),
                    ]
                  ),
                ])
              : t._e(),
            s(
              "about-block",
              t._l(t.docs_rows, function (e, i) {
                return s(
                  "div",
                  { key: i, staticClass: "monsterinsights-about-docs-row" },
                  [
                    i > 0
                      ? s("div", { staticClass: "monsterinsights-separator" })
                      : t._e(),
                    s(
                      "div",
                      { staticClass: "monsterinsights-about-docs-image" },
                      [s("div", { class: e.image })]
                    ),
                    s(
                      "div",
                      { staticClass: "monsterinsights-about-docs-text" },
                      [
                        s("h3", { domProps: { innerHTML: t._s(e.title) } }),
                        s("p", { domProps: { innerHTML: t._s(e.text) } }),
                        s("a", {
                          staticClass:
                            "monsterinsights-button monsterinsights-button-green",
                          attrs: { href: e.link, target: "_blank" },
                          domProps: { textContent: t._s(t.text_documentation) },
                        }),
                      ]
                    ),
                  ]
                );
              }),
              0
            ),
          ],
          1
        );
      },
      bn = [];
    function fn(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function vn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? fn(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : fn(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var xn = {
        name: "AboutTabGettingStarted",
        components: { AboutBlock: pn },
        data: function () {
          return {
            text_getting_started_title: Object(c["a"])(
              "Getting Started with MonsterInsights",
              "ga-premium"
            ),
            text_getting_started_p1: Object(c["a"])(
              "MonsterInsights is the easiest analytics solution on the market to get started with, as we walk you through exactly what you need to do, in plain english, using our 3 minute setup wizard.",
              "ga-premium"
            ),
            text_getting_started_p2: Object(c["a"])(
              "To begin with, we’ll get your site authorized with Google Analytics, so we can start tracking and generating reports for you right away.",
              "ga-premium"
            ),
            text_getting_started_p3: Object(c["a"])(
              "In no time at all, and after just a few clicks, you'll have setup the most powerful Google Analytics tracking available for WordPress. It's easy to double your traffic and sales when you know exactly how people find and use your website. Let's get started!.",
              "ga-premium"
            ),
            text_getting_started_link1: Object(c["a"])(
              "Launch the wizard!",
              "ga-premium"
            ),
            text_get_pro: Object(c["a"])(
              "Get MonsterInsights Pro and Unlock all the Powerful Features",
              "ga-premium"
            ),
            text_get_pro_text: Object(c["d"])(
              Object(c["a"])(
                "Thanks for being a loyal MonsterInsights Lite user. %1$sUpgrade to MonsterInsights Pro%2$s to unlock all the awesome features and experience why MonsterInsights is consistently rated the best Google Analytics solution for WordPress.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            check_list: [
              Object(c["a"])(
                "Universal Tracking across devices and campaigns with just a few clicks.",
                "ga-premium"
              ),
              Object(c["a"])(
                "See your website analytics reports inside the WordPress dashboard",
                "ga-premium"
              ),
              Object(c["a"])(
                "Get real-time stats right inside WordPress",
                "ga-premium"
              ),
              Object(c["a"])(
                "1-click Google Analytics Enhanced eCommerce tracking",
                "ga-premium"
              ),
              Object(c["a"])(
                "Get detailed stats for each post and page.",
                "ga-premium"
              ),
            ],
            check_list_2: [
              Object(c["a"])(
                "Automatically track clicks on your affiliate links and ads.",
                "ga-premium"
              ),
              Object(c["a"])(
                "Make Google Analytics GDPR compliant automatically",
                "ga-premium"
              ),
              Object(c["a"])(
                "Setup tracking for authors, categories, tags, custom post types, users and more",
                "ga-premium"
              ),
              Object(c["a"])(
                "Enable Google Optimize for A/B testing, adjust sample speed & sample rate.",
                "ga-premium"
              ),
              Object(c["a"])("More advanced features", "ga-premium"),
            ],
            text_get_upgrade: Object(c["a"])(
              "Get MonsterInsights Pro Today and Unlock all the Powerful Features",
              "ga-premium"
            ),
            text_upgrade_subtitle: Object(c["d"])(
              Object(c["a"])(
                "Bonus: MonsterInsights Lite users get %1$s50%% off regular price%2$s, automatically applied at checkout.",
                "ga-premium"
              ),
              '<span class="monsterinsights-green-text">',
              "</span>"
            ),
            docs_rows: [
              {
                image: "monsterinsights-bg-img monsterinsights-about-docs-1",
                title: Object(c["a"])(
                  "How to Connect to Google Analytics",
                  "ga-premium"
                ),
                text: Object(c["a"])(
                  "After you install MonsterInsights, you’ll need to connect your WordPress site with your Google Analytics account. MonsterInsights makes the process easy, with no coding required.",
                  "ga-premium"
                ),
                link: this.$getUrl(
                  "about-page",
                  "documentation",
                  "https://www.monsterinsights.com/docs/connect-google-analytics/"
                ),
              },
              {
                image: "monsterinsights-bg-img monsterinsights-about-docs-2",
                title: Object(c["a"])(
                  "Guide and Checklist for Advanced Insights",
                  "ga-premium"
                ),
                text: Object(c["a"])(
                  "Our goal is to make it as easy as possible for you to measure and track your stats so you can grow your business. This easy-to-follow guide and checklist will get you set up with MonsterInsights’ advanced tracking.",
                  "ga-premium"
                ),
                link: this.$getUrl(
                  "about-page",
                  "documentation",
                  "https://www.monsterinsights.com/docs/getting-started-guide-checklist/"
                ),
              },
              {
                image: "monsterinsights-bg-img monsterinsights-about-docs-3",
                title: Object(c["a"])("GDPR Guide", "ga-premium"),
                text: Object(c["a"])(
                  "Compliance with European data laws including GDPR can be confusing and time-consuming. In order to help MonsterInsights users comply with these laws, we’ve created an addon that automates a lot of the necessary configuration changes for you. ",
                  "ga-premium"
                ),
                link: this.$getUrl(
                  "about-page",
                  "documentation",
                  "https://www.monsterinsights.com/docs/getting-started-with-the-eu-compliance-addon/"
                ),
              },
              {
                image: "monsterinsights-bg-img monsterinsights-about-docs-4",
                title: Object(c["a"])(
                  "How to Install and Activate MonsterInsights Addons",
                  "ga-premium"
                ),
                text: Object(c["a"])(
                  "The process for installing and activating addons is quick and easy after you install the MonsterInsights plugin. In this guide we’ll walk you through the process, step by step.",
                  "ga-premium"
                ),
                link: this.$getUrl(
                  "about-page",
                  "documentation",
                  "https://www.monsterinsights.com/docs/how-to-install-monsterinsights-addon/"
                ),
              },
              {
                image: "monsterinsights-bg-img monsterinsights-about-docs-5",
                title: Object(c["a"])(
                  "Enabling eCommerce Tracking and Reports",
                  "ga-premium"
                ),
                text: Object(c["a"])(
                  "Want to track your eCommerce sales data for your WooCommerce, MemberPress, or Easy Digital Downloads store with MonsterInsights? In this guide, we’ll show you how to enable eCommerce tracking in Google Analytics in just a few clicks.",
                  "ga-premium"
                ),
                link: this.$getUrl(
                  "about-page",
                  "documentation",
                  "https://www.monsterinsights.com/docs/enable-ecommerce-tracking/"
                ),
              },
            ],
            text_documentation: Object(c["a"])(
              "Read Documentation",
              "ga-premium"
            ),
            wizard_url: this.$mi.wizard_url,
          };
        },
        computed: vn(
          {},
          Object(l["b"])({
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            showLitePro: function () {
              var t = this.$mi.network
                ? this.license_network.type
                : this.license.type;
              return !(this.$isPro() && "" !== t);
            },
          }
        ),
      },
      On = xn,
      yn = Object(b["a"])(On, Cn, bn, !1, null, null, null),
      wn = yn.exports,
      jn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-container" },
          [
            s(
              "about-block",
              { staticClass: "monsterinsights-lite-vs-pro-table" },
              [
                s(
                  "div",
                  { staticClass: "monsterinsights-lite-vs-pro-header" },
                  [
                    s("h1", {
                      domProps: { textContent: t._s(t.text_lite_vs_pro) },
                    }),
                    s("p", {
                      domProps: { textContent: t._s(t.text_subtitle) },
                    }),
                  ]
                ),
                s("table", { staticClass: "monsterinsights-features-table" }, [
                  s("thead", [
                    s("tr", [
                      s("th", [
                        s("p", {
                          domProps: { textContent: t._s(t.text_feature) },
                        }),
                      ]),
                      s("th", [
                        s("p", {
                          domProps: { textContent: t._s(t.text_lite) },
                        }),
                      ]),
                      s("th", [
                        s("p", { domProps: { textContent: t._s(t.text_pro) } }),
                      ]),
                    ]),
                  ]),
                  s(
                    "tbody",
                    t._l(t.features, function (e, i) {
                      return s("tr", { key: i }, [
                        s("td", [
                          s("p", { domProps: { textContent: t._s(e.title) } }),
                        ]),
                        s("td", [
                          s("p", { class: t.check_class(e.lite) }, [
                            e.lite_text
                              ? s("strong", {
                                  domProps: { textContent: t._s(e.lite_text) },
                                })
                              : t._e(),
                            e.lite_subtitle
                              ? s("span", {
                                  domProps: {
                                    textContent: t._s(e.lite_subtitle),
                                  },
                                })
                              : t._e(),
                          ]),
                        ]),
                        s("td", [
                          s("p", { class: t.check_class(e.pro) }, [
                            e.pro_text
                              ? s("strong", {
                                  domProps: { textContent: t._s(e.pro_text) },
                                })
                              : t._e(),
                            e.pro_subtitle
                              ? s("span", {
                                  domProps: {
                                    textContent: t._s(e.pro_subtitle),
                                  },
                                })
                              : t._e(),
                          ]),
                        ]),
                      ]);
                    }),
                    0
                  ),
                ]),
                s(
                  "div",
                  { staticClass: "monsterinsights-lite-vs-pro-footer" },
                  [
                    s("h3", [
                      s("a", {
                        attrs: {
                          href: t.$getUpgradeUrl("about-page", "lite-vs-pro"),
                        },
                        domProps: { textContent: t._s(t.text_get_upgrade) },
                      }),
                    ]),
                    s("p", {
                      domProps: { innerHTML: t._s(t.text_upgrade_subtitle) },
                    }),
                  ]
                ),
              ]
            ),
          ],
          1
        );
      },
      kn = [],
      Pn = {
        name: "AboutTabLiteVsPro",
        components: { AboutBlock: pn },
        data: function () {
          return {
            text_lite_vs_pro: Object(c["a"])("Lite vs Pro", "ga-premium"),
            text_subtitle: Object(c["a"])(
              "Get the most out of MonsterInsights by upgrading to Pro and unlocking all of the powerful features.",
              "ga-premium"
            ),
            text_feature: Object(c["a"])("Feature", "ga-premium"),
            text_lite: Object(c["a"])("Lite", "ga-premium"),
            text_pro: Object(c["a"])("Pro", "ga-premium"),
            text_get_upgrade: Object(c["a"])(
              "Get MonsterInsights Pro Today and Unlock all the Powerful Features",
              "ga-premium"
            ),
            text_upgrade_subtitle: Object(c["d"])(
              Object(c["a"])(
                "Bonus: MonsterInsights Lite users get %1$s50%% off regular price%2$s, automatically applied at checkout.",
                "ga-premium"
              ),
              '<span class="monsterinsights-green-text">',
              "</span>"
            ),
            features: [
              {
                title: Object(c["a"])("Universal Tracking", "ga-premium"),
                lite_text: Object(c["a"])("Included", "ga-premium"),
                pro_text: Object(c["a"])("Included", "ga-premium"),
                lite: !0,
                pro: !0,
              },
              {
                title: Object(c["a"])(
                  "Custom Google Analytics Link Tracking",
                  "ga-premium"
                ),
                lite: "partial",
                pro: !0,
                lite_text: Object(c["a"])("Standard Tracking", "ga-premium"),
                pro_text: Object(c["a"])("Advanced Tracking", "ga-premium"),
                lite_subtitle: Object(c["a"])(
                  "Automatic tracking of outbound/external, file download, affiliate, email and telephone links and our simple Custom Link Attribution markup for custom link tracking",
                  "ga-premium"
                ),
                pro_subtitle: Object(c["a"])(
                  "Scroll tracking as well as tracking on Google Accelerated Mobile Pages (AMP) and Facebook Instant Articles for Publishers",
                  "ga-premium"
                ),
              },
              {
                title: Object(c["a"])(
                  "No-Code-Needed Tracking Features",
                  "ga-premium"
                ),
                lite: "partial",
                pro: !0,
                lite_text: Object(c["a"])(
                  "Basic Tracking Options",
                  "ga-premium"
                ),
                lite_subtitle: Object(c["a"])(
                  "Cross-domain tracking, anonymization of IP addresses, and automatic exclusion of administrators from tracking",
                  "ga-premium"
                ),
                pro_text: Object(c["a"])(
                  "Advanced Tracking Options",
                  "ga-premium"
                ),
                pro_subtitle: Object(c["a"])(
                  "Easily integrate Google Optimize as well as adjust recordings of site speed and the sample rate of visitors",
                  "ga-premium"
                ),
              },
              {
                title: Object(c["a"])("eCommerce Tracking", "ga-premium"),
                lite: !1,
                pro: !0,
                lite_text: Object(c["a"])("Not Available", "ga-premium"),
                pro_text: Object(c["a"])(
                  "One-click Complete eCommerce tracking",
                  "ga-premium"
                ),
                pro_subtitle: Object(c["a"])(
                  "Complete eCommerce tracking for WooCommerce, Easy Digital Downloads and MemberPress stores with no code or settings required",
                  "ga-premium"
                ),
              },
              {
                title: Object(c["a"])("Forms Tracking", "ga-premium"),
                lite: !1,
                pro: !0,
                lite_text: Object(c["a"])("Not Available", "ga-premium"),
                pro_text: Object(c["a"])(
                  "One-click Form Events Tracking",
                  "ga-premium"
                ),
                pro_subtitle: Object(c["a"])(
                  "WPForms, Ninja Forms, Contact Form 7, Gravity Forms and any other WordPress form plugin",
                  "ga-premium"
                ),
              },
              {
                title: Object(c["a"])(
                  "WordPress Admin Area Reports",
                  "ga-premium"
                ),
                lite: "partial",
                pro: !0,
                lite_text: Object(c["a"])("Standard Reports", "ga-premium"),
                lite_subtitle: Object(c["a"])(
                  "Overview Reports for the last 30 days.",
                  "ga-premium"
                ),
                pro_text: Object(c["a"])("Advanced Reports", "ga-premium"),
                pro_subtitle: Object(c["a"])(
                  "Publisher, eCommerce, Search Console, Custom Dimensions, Forms and Real-Time with custom date period selection",
                  "ga-premium"
                ),
              },
              {
                title: Object(c["a"])("Dashboard Widget", "ga-premium"),
                lite: "partial",
                pro: !0,
                lite_text: Object(c["a"])("Basic Widget", "ga-premium"),
                lite_subtitle: Object(c["a"])(
                  "Overview Report Synopsis",
                  "ga-premium"
                ),
                pro_text: Object(c["a"])(
                  "Advanced Dashboard Widget",
                  "ga-premium"
                ),
                pro_subtitle: Object(c["a"])(
                  "Includes the complete Overview report, Publisher reports and 6 different eCommerce reports",
                  "ga-premium"
                ),
              },
              {
                title: Object(c["a"])("Headline Analyzer", "ga-premium"),
                lite_text: Object(c["a"])("Included", "ga-premium"),
                pro_text: Object(c["a"])("Included", "ga-premium"),
                lite: !0,
                pro: !0,
              },
              {
                title: Object(c["a"])("Email Summaries", "ga-premium"),
                lite_text: Object(c["a"])("Not Available", "ga-premium"),
                pro_text: Object(c["a"])("Included", "ga-premium"),
                pro_subtitle: Object(c["a"])(
                  "Get weekly traffic reports directly in your inbox.",
                  "ga-premium"
                ),
                lite: !1,
                pro: !0,
              },
              {
                title: Object(c["a"])("Publisher Reports", "ga-premium"),
                lite: !1,
                pro: !0,
                lite_text: Object(c["a"])("Not Available", "ga-premium"),
                pro_text: Object(c["a"])(
                  "Advanced Publisher Reports & Tracking",
                  "ga-premium"
                ),
                pro_subtitle: Object(c["a"])(
                  "View Top Landing/Exit Pages, Top Links, Demographics & Interests data and more",
                  "ga-premium"
                ),
              },
              {
                title: Object(c["a"])("Popular Posts", "ga-premium"),
                lite: "partial",
                pro: !0,
                lite_text: Object(c["a"])("Basic Options", "ga-premium"),
                lite_subtitle: Object(c["a"])(
                  "Order Popular Posts by comments or shares with 3 simple theme choices.",
                  "ga-premium"
                ),
                pro_text: Object(c["a"])(
                  "Dynamic Popular Posts & Popular Products",
                  "ga-premium"
                ),
                pro_subtitle: Object(c["a"])(
                  "Display Popular Posts based on your actual traffic data from Google Analytics and choose from over 20 advanced themes. Display Popular WooCommerce products using widgets or Gutenberg blocks.",
                  "ga-premium"
                ),
              },
              {
                title: Object(c["a"])("Custom Dimensions", "ga-premium"),
                lite: !1,
                pro: !0,
                lite_text: Object(c["a"])("Not Available", "ga-premium"),
                pro_text: Object(c["a"])(
                  "Complete Custom Dimensions Tracking",
                  "ga-premium"
                ),
                pro_subtitle: Object(c["a"])(
                  "Track and measure by the Author, Post Type, Category, Tag, SEO Score, Focus Keyword, Logged-in User, User ID and Published Time of each post and page",
                  "ga-premium"
                ),
              },
              {
                title: Object(c["a"])("Support", "ga-premium"),
                lite: "partial",
                pro: !0,
                lite_text: Object(c["a"])("Limited Support", "ga-premium"),
                pro_text: Object(c["a"])("Priority Support", "ga-premium"),
              },
            ],
          };
        },
        methods: {
          check_class: function (t) {
            var e = "monsterinsights-features-none";
            return (
              !0 === t && (e = "monsterinsights-features-full"),
              "partial" === t && (e = "monsterinsights-features-partial"),
              e
            );
          },
        },
      },
      Sn = Pn,
      $n = Object(b["a"])(Sn, jn, kn, !1, null, null, null),
      Hn = $n.exports,
      An = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "main",
          {
            staticClass: "monsterinsights-popular-posts",
            attrs: { id: "monsterinsights-popular-posts" },
          },
          [s("router-view")],
          1
        );
      },
      Ln = [],
      Tn =
        (s("f9ec"),
        {
          name: "PopularPosts",
          components: {},
          computed: {},
          data: function () {
            return {};
          },
          methods: {},
        }),
      Mn = Tn,
      En = Object(b["a"])(Mn, An, Ln, !1, null, null, null),
      Vn = En.exports,
      Dn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "monsterinsights-settings-content monsterinsights-settings-content-pp-inline",
          },
          [
            s(
              "settings-block",
              {
                attrs: {
                  title: t.text_choose_theme,
                  icon: "monstericon-search",
                },
              },
              [
                t.theme_options.hasOwnProperty("alpha")
                  ? s("popular-posts-theme-picker", {
                      attrs: {
                        options: t.theme_options,
                        name: "popular_posts_inline_theme",
                        type: "inline",
                      },
                    })
                  : s("loading-spinner-inline", {
                      attrs: { text: t.text_loading_themes },
                    }),
                t.theme_options.hasOwnProperty("alpha")
                  ? s("popular-posts-theme-preview", {
                      attrs: {
                        themes: t.theme_options,
                        name: "popular_posts_inline_theme",
                      },
                    })
                  : t._e(),
              ],
              1
            ),
            t.theme_options.hasOwnProperty("alpha")
              ? s(
                  "settings-block",
                  {
                    attrs: {
                      title: t.text_customize_design,
                      icon: "monstericon-eye-far",
                    },
                  },
                  [
                    s("popular-posts-theme-customize-controls", {
                      attrs: {
                        name: "popular_posts_inline_theme",
                        themes: t.theme_options,
                      },
                    }),
                  ],
                  1
                )
              : t._e(),
            s(
              "settings-block",
              {
                attrs: {
                  title: t.text_behavior,
                  icon: "monstericon-mouse-pointer",
                },
              },
              [
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_widget_styling) },
                  }),
                  s("br"),
                  s("span", {
                    domProps: { textContent: t._s(t.text_widget_styling_desc) },
                  }),
                ]),
                s("settings-input-radio", {
                  attrs: {
                    auth_disabled: !1,
                    options: t.styling_options,
                    name: "popular_posts_inline_styling",
                  },
                }),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_sort_by) },
                  }),
                  s("br"),
                  s("span", {
                    domProps: { textContent: t._s(t.text_sort_by_description) },
                  }),
                ]),
                s(
                  "settings-input-radio",
                  {
                    attrs: {
                      auth_disabled: !1,
                      options: t.sort_options,
                      name: "popular_posts_inline_sort",
                    },
                  },
                  [
                    s(
                      "template",
                      { slot: "sharedcount" },
                      [s("popular-posts-shared-count")],
                      1
                    ),
                    s(
                      "template",
                      { slot: "curated" },
                      [
                        s("popular-posts-posts-picker", {
                          attrs: { name: "popular_posts_inline_curated" },
                        }),
                        t.no_posts_selected
                          ? s(
                              "label",
                              {
                                staticClass: "monsterinsights-notice-no-posts",
                              },
                              [
                                s("span", {
                                  domProps: {
                                    innerHTML: t._s(t.text_select_one_post),
                                  },
                                }),
                              ]
                            )
                          : t._e(),
                      ],
                      1
                    ),
                  ],
                  2
                ),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("PopularPostsGaInput", {
                  attrs: { name: "popular_posts_inline_ga" },
                }),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_placement) },
                  }),
                  s("br"),
                  s("span", {
                    domProps: {
                      textContent: t._s(t.text_placement_description),
                    },
                  }),
                ]),
                s("settings-input-radio", {
                  attrs: {
                    auth_disabled: !1,
                    options: t.placement_options,
                    name: "popular_posts_inline_placement",
                  },
                }),
                "automatic" === t.placement_option
                  ? [
                      s("div", { staticClass: "monsterinsights-separator" }),
                      s("p", [
                        s("span", {
                          staticClass: "monsterinsights-dark",
                          domProps: { textContent: t._s(t.text_insert_after) },
                        }),
                        s("br"),
                        s("span", {
                          domProps: {
                            textContent: t._s(t.text_insert_after_description),
                          },
                        }),
                      ]),
                      s("settings-input-number", {
                        attrs: {
                          auth_disabled: !1,
                          name: "popular_posts_inline_after_count",
                          min: 0,
                          inline_desc: t.text_words,
                        },
                      }),
                      s("div", { staticClass: "monsterinsights-separator" }),
                      s("PopularPostsMultipleEntries"),
                      s("div", { staticClass: "monsterinsights-separator" }),
                      s("popular-posts-post-type-picker", {
                        attrs: {
                          name: "popular_posts_inline_post_types",
                          label: t.text_post_type,
                          description: t.text_post_type_description,
                        },
                      }),
                      s("p", [
                        s("span", {
                          staticClass: "monsterinsights-dark",
                          domProps: { textContent: t._s(t.text_exclude_posts) },
                        }),
                        s("br"),
                        s("span", {
                          domProps: {
                            innerHTML: t._s(t.text_exclude_posts_description),
                          },
                        }),
                      ]),
                      s("popular-posts-posts-picker", {
                        attrs: { name: "popular_posts_inline_exclude_posts" },
                      }),
                    ]
                  : t._e(),
                "manual" === t.placement_option
                  ? [s("inline-placement")]
                  : t._e(),
              ],
              2
            ),
          ],
          1
        );
      },
      In = [],
      Bn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-pp-theme-picker-container" },
          [
            s("div", { ref: "sliderContainer", class: t.picker_class }, [
              s(
                "div",
                {
                  ref: "slider",
                  staticClass: "monsterinsights-pp-themes-carousel",
                },
                t._l(t.slides, function (e, i) {
                  return s(
                    "div",
                    {
                      key: i,
                      ref: "slides",
                      refInFor: !0,
                      staticClass: "monsterinsights-pp-themes-slide",
                    },
                    t._l(e, function (e, i) {
                      return s(
                        "button",
                        {
                          key: i,
                          class: t.option_class(i),
                          on: {
                            click: function (e) {
                              return t.updateSetting(e, i);
                            },
                          },
                        },
                        [
                          s("span", {
                            staticClass: "monsterinsights-pp-theme-icon",
                          }),
                          s("span", {
                            staticClass: "monsterinsights-pp-theme-name",
                            domProps: { textContent: t._s(e.label) },
                          }),
                          t.active === i
                            ? s(
                                "span",
                                {
                                  staticClass:
                                    "monsterinsights-pp-theme-active-icon",
                                },
                                [
                                  s(
                                    "svg",
                                    {
                                      attrs: {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                      },
                                    },
                                    [
                                      s("path", {
                                        attrs: {
                                          d:
                                            "M20.3322 3.44051C22.6714 5.70276 23.8411 8.45203 23.8411 11.6883C23.8411 14.9246 22.6714 17.6896 20.3322 19.9832C18.025 22.2455 15.2211 23.3766 11.9205 23.3766C8.61995 23.3766 5.80004 22.2455 3.4608 19.9832C1.1536 17.6896 0 14.9246 0 11.6883C0 8.45203 1.1536 5.70276 3.4608 3.44051C5.80004 1.14684 8.61995 0 11.9205 0C15.2211 0 18.025 1.14684 20.3322 3.44051ZM10.5266 17.8624L19.3709 9.19041C19.7554 8.84478 19.7554 8.49916 19.3709 8.15354L18.3134 7.06954C17.9289 6.72392 17.5604 6.72392 17.2079 7.06954L9.99786 14.1391L6.6332 10.84C6.28071 10.4943 5.9122 10.4943 5.52767 10.84L4.4702 11.924C4.08567 12.2696 4.08567 12.6152 4.4702 12.9608L9.46913 17.8624C9.82162 18.2394 10.1741 18.2394 10.5266 17.8624Z",
                                          fill: "#338EEF",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              )
                            : t._e(),
                        ]
                      );
                    }),
                    0
                  );
                }),
                0
              ),
              t.slidesCount > 1
                ? s(
                    "div",
                    {
                      staticClass: "monsterinsights-pp-themes-slider-controls",
                    },
                    [
                      s(
                        "button",
                        {
                          staticClass:
                            "monsterinsights-pp-themes-slider-button-prev",
                          attrs: { disabled: t.prevButtonDisabled },
                          on: { click: t.prevSlide },
                        },
                        [s("i", { staticClass: "monstericon-arrow" })]
                      ),
                      s("span", { domProps: { innerHTML: t._s(t.pageText) } }),
                      s(
                        "button",
                        {
                          staticClass:
                            "monsterinsights-pp-themes-slider-button-next",
                          attrs: { disabled: t.nextButtonDisabled },
                          on: { click: t.nextSlide },
                        },
                        [s("i", { staticClass: "monstericon-arrow" })]
                      ),
                    ]
                  )
                : t._e(),
            ]),
          ]
        );
      },
      zn = [],
      Zn = s("efb1");
    function Un(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Fn(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Un(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Un(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Nn = {
        name: "PopularPostsThemePicker",
        props: {
          name: String,
          options: Object,
          type: { type: String, default: "inline" },
        },
        data: function () {
          return { sliderWidth: 0, slidesCount: 0, slidePage: 0, slides: [] };
        },
        computed: Fn({}, Object(l["b"])({ settings: "$_settings/settings" }), {
          preview: function () {
            return this.$store.getters[
              "$_popularposts/theme_preview_" + this.type
            ];
          },
          picker_class: function () {
            return (
              "monsterinsights-pp-theme-picker monsterinsights-pp-theme-picker-" +
              this.name
            );
          },
          active: function () {
            return this.preview ? this.preview : this.settings[this.name];
          },
          pageText: function () {
            var t = this.slidePage + 1;
            return Object(c["d"])(
              Object(c["a"])("%1$sPage %3$s%2$s of %4$s", "ga-premium"),
              "<b>",
              "</b>",
              t,
              this.slidesCount
            );
          },
          prevButtonDisabled: function () {
            return 0 === this.slidePage;
          },
          nextButtonDisabled: function () {
            return this.slidePage === this.slidesCount - 1;
          },
        }),
        methods: {
          option_class: function (t) {
            var e =
              "monsterinsights-pp-theme-option monsterinsights-pp-theme-" + t;
            return (
              this.active === t &&
                (e += " monsterinsights-pp-theme-option-selected"),
              this.themeAvailable(this.options[t].level) ||
                (e += " monsterinsights-pp-theme-not-available"),
              e
            );
          },
          themeAvailable: function (t) {
            return Zn["a"].isThemeAvailable(t);
          },
          updatePreview: function (t) {
            this.$store.dispatch("$_popularposts/updatePreview", {
              type: this.type,
              key: t,
            });
          },
          updateSetting: function (t, e) {
            var s = this;
            if (!this.themeAvailable(this.options[e].level))
              return this.updatePreview(e), !1;
            this.updatePreview(""),
              this.$mi_saving_toast({}),
              this.$store
                .dispatch("$_settings/updateSettings", {
                  name: this.name,
                  value: e,
                })
                .then(function (t) {
                  t.success ? s.$mi_success_toast({}) : s.$mi_error_toast({});
                });
          },
          calculatePages: function () {
            if ("undefined" !== typeof this.$refs.sliderContainer) {
              this.sliderWidth = this.$refs.sliderContainer.clientWidth;
              var t = 150,
                e = Object.keys(this.options).length,
                s = Math.floor(this.sliderWidth / t);
              this.slidesCount = Math.ceil(e / 2 / s);
              var i,
                n = 2 * s,
                o = [],
                a = 0,
                r = 0;
              for (i in this.options)
                "undefined" === typeof o[a] && (o[a] = {}),
                  this.options.hasOwnProperty(i) &&
                    ((o[a][i] = this.options[i]), r++),
                  r === n && (a++, (r = 0));
              (this.$refs.slider.style.width =
                this.sliderWidth * this.slidesCount + "px"),
                (this.slides = o),
                this.slidePage > this.slides.length - 1 &&
                  (this.slidePage = this.slides.length - 1);
            }
          },
          setSlidesWidth: function () {
            var t;
            for (t = 0; t < this.slides.length; t++)
              this.$refs.slides[t].style.width = this.sliderWidth + "px";
          },
          nextSlide: function () {
            this.slidePage + 1 < this.slidesCount &&
              (this.slidePage++, this.setSlidePage());
          },
          prevSlide: function () {
            this.slidePage > 0 && (this.slidePage--, this.setSlidePage());
          },
          setSlidePage: function () {
            var t = this.slidePage * this.sliderWidth;
            this.$refs.slider.style.marginLeft = "-" + t + "px";
          },
        },
        mounted: function () {
          this.calculatePages(),
            window.addEventListener("resize", this.calculatePages);
        },
        updated: function () {
          this.setSlidesWidth(), this.setSlidePage();
        },
        watch: {
          active: function (t) {
            var e;
            for (e = 0; e < this.slides.length; e++) {
              var s = void 0;
              for (s in this.slides[e]) s === t && (this.slidePage = e);
            }
          },
        },
      },
      Wn = Nn,
      Rn = Object(b["a"])(Wn, Bn, zn, !1, null, null, null),
      Gn = Rn.exports,
      qn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-pp-inline-theme-preview" },
          [
            s("h3", { domProps: { textContent: t._s(t.text_theme_preview) } }),
            t.themeOptions
              ? s("div", { class: t.renderCssClass }, [
                  s("p", { domProps: { textContent: t._s(t.text_dummy_p_1) } }),
                  s(
                    "div",
                    {
                      class: t.themeClass,
                      style: t.objectStyle(
                        "background",
                        ["color", "border"],
                        ["background", "borderColor"]
                      ),
                    },
                    [
                      t.themeOptions.image
                        ? s(
                            "div",
                            {
                              staticClass:
                                "monsterinsights-inline-popular-posts-image",
                            },
                            [
                              s("div", {
                                class: t.getImageClass(t.themeOptions.image),
                              }),
                            ]
                          )
                        : t._e(),
                      s(
                        "div",
                        {
                          staticClass:
                            "monsterinsights-inline-popular-posts-text",
                        },
                        [
                          t.themeOptions.icon
                            ? s(
                                "span",
                                {
                                  staticClass:
                                    "monsterinsights-inline-popular-posts-icon",
                                  style: t.objectStyle(
                                    "icon",
                                    ["background"],
                                    ["backgroundColor"]
                                  ),
                                },
                                [
                                  s(
                                    "svg",
                                    {
                                      attrs: {
                                        width: "14",
                                        height: "19",
                                        viewBox: "0 0 14 19",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                      },
                                    },
                                    [
                                      s("path", {
                                        attrs: {
                                          d:
                                            "M7.875 0.899463C7.875 1.59183 8.0816 2.24711 8.49479 2.8653C8.93229 3.48349 9.44271 4.06458 10.026 4.60859C10.6337 5.15259 11.2292 5.73369 11.8125 6.35188C12.4201 6.97007 12.9306 7.76135 13.3438 8.72572C13.7812 9.66537 14 10.7163 14 11.8785C14 13.832 13.3073 15.5011 11.9219 16.8858C10.5608 18.2953 8.92014 19 7 19C5.07986 19 3.42708 18.2953 2.04167 16.8858C0.680556 15.5011 0 13.832 0 11.8785C0 9.94973 0.668403 8.28062 2.00521 6.87116C2.27257 6.57443 2.58854 6.50024 2.95312 6.64861C3.31771 6.79697 3.5 7.08134 3.5 7.50171V10.6545C3.5 11.3221 3.71875 11.8908 4.15625 12.3607C4.61806 12.8305 5.16493 13.0654 5.79688 13.0654C6.45312 13.0654 7.01215 12.8428 7.47396 12.3978C7.93576 11.9279 8.16667 11.3592 8.16667 10.6916C8.16667 10.2712 8.04514 9.86318 7.80208 9.46754C7.58333 9.0719 7.31597 8.71336 7 8.3919C6.68403 8.07044 6.34375 7.73662 5.97917 7.39043C5.63889 7.04425 5.34722 6.66097 5.10417 6.2406C4.88542 5.82024 4.73958 5.35041 4.66667 4.83114C4.59375 4.31186 4.67882 3.68131 4.92188 2.93948C5.18924 2.17293 5.63889 1.33219 6.27083 0.417277C6.51389 0.0463641 6.84201 -0.0772735 7.25521 0.0463641C7.6684 0.170002 7.875 0.454368 7.875 0.899463Z",
                                          fill: t.getThemeOption(
                                            "icon",
                                            "color"
                                          ),
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              )
                            : t._e(),
                          t.themeOptions.label
                            ? s("span", {
                                staticClass:
                                  "monsterinsights-inline-popular-posts-label",
                                style: t.objectStyle(
                                  "label",
                                  ["color", "background"],
                                  ["color", "background"]
                                ),
                                domProps: {
                                  textContent: t._s(
                                    t.getThemeOption("label", "text")
                                  ),
                                },
                              })
                            : t._e(),
                          t.themeOptions.border
                            ? s("span", {
                                staticClass:
                                  "monsterinsights-inline-popular-posts-border",
                                style: t.objectStyle(
                                  "border",
                                  ["color"],
                                  ["borderColor"]
                                ),
                              })
                            : t._e(),
                          t.themeOptions.title && !t.themeOptions.list
                            ? s("a", {
                                staticClass:
                                  "monsterinsights-inline-popular-posts-title",
                                style: t.objectStyle(
                                  "title",
                                  ["color", "size"],
                                  ["color", "fontSize"]
                                ),
                                attrs: { href: "#" },
                                domProps: {
                                  textContent: t._s(
                                    t.getThemeOption("title", "text")
                                  ),
                                },
                              })
                            : t._e(),
                          t.themeList
                            ? s(
                                "ul",
                                {
                                  staticClass:
                                    "monsterinsights-inline-popular-posts-list",
                                },
                                t._l(t.themeList, function (e, i) {
                                  return s("li", {
                                    key: i,
                                    style: t.objectStyle(
                                      "title",
                                      ["color", "size"],
                                      ["color", "fontSize"]
                                    ),
                                    domProps: { textContent: t._s(e) },
                                  });
                                }),
                                0
                              )
                            : t._e(),
                          t.themeOptions.border && t.themeOptions.border.color2
                            ? s("span", {
                                staticClass:
                                  "monsterinsights-inline-popular-posts-border-2",
                                style: t.objectStyle(
                                  "border",
                                  ["color2"],
                                  ["borderColor"]
                                ),
                              })
                            : t._e(),
                        ]
                      ),
                    ]
                  ),
                  s("p", { domProps: { textContent: t._s(t.text_dummy_p_2) } }),
                ])
              : t._e(),
            t.themeAvailable ? t._e() : s("popular-posts-upgrade-overlay"),
          ],
          1
        );
      },
      Yn = [],
      Kn = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "monsterinsights-pp-upgrade-overlay" }, [
          s(
            "svg",
            {
              attrs: {
                width: "14",
                height: "17",
                viewBox: "0 0 14 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
            },
            [
              s("path", {
                attrs: {
                  d:
                    "M12.5 7.05859C12.9167 7.05859 13.2708 7.20443 13.5625 7.49609C13.8542 7.78776 14 8.14193 14 8.55859V14.5586C14 14.9753 13.8542 15.3294 13.5625 15.6211C13.2708 15.9128 12.9167 16.0586 12.5 16.0586H1.5C1.08333 16.0586 0.729167 15.9128 0.4375 15.6211C0.145833 15.3294 0 14.9753 0 14.5586V8.55859C0 8.14193 0.145833 7.78776 0.4375 7.49609C0.729167 7.20443 1.08333 7.05859 1.5 7.05859H2.25V4.80859C2.25 3.49609 2.70833 2.38151 3.625 1.46484C4.5625 0.527344 5.6875 0.0585938 7 0.0585938C8.3125 0.0585938 9.42708 0.527344 10.3438 1.46484C11.2812 2.38151 11.75 3.49609 11.75 4.80859V7.05859H12.5ZM9.25 7.05859V4.80859C9.25 4.18359 9.03125 3.65234 8.59375 3.21484C8.15625 2.77734 7.625 2.55859 7 2.55859C6.375 2.55859 5.84375 2.77734 5.40625 3.21484C4.96875 3.65234 4.75 4.18359 4.75 4.80859V7.05859H9.25Z",
                  fill: "#338EEF",
                },
              }),
            ]
          ),
          s("span", { domProps: { textContent: t._s(t.text_unlock) } }),
          s("a", {
            staticClass: "monsterinsights-button monsterinsights-button-small",
            attrs: { href: t.form_upgrade_button_url },
            domProps: { textContent: t._s(t.text_upgrade) },
          }),
        ]);
      },
      Xn = [],
      Jn = {
        name: "PopularPostsUpgradeOverlay",
        props: { campaign: { type: String, default: "overlay" } },
        data: function () {
          return {
            text_unlock: Object(c["d"])(
              Object(c["a"])("Unlock with %s", "ga-premium"),
              "MonsterInsights Pro"
            ),
            text_upgrade: Object(c["a"])("Upgrade", "ga-premium"),
            form_upgrade_button_url: this.$getUpgradeUrl(
              "settings-panel",
              "conversions-forms"
            ),
          };
        },
      },
      Qn = Jn,
      to = Object(b["a"])(Qn, Kn, Xn, !1, null, null, null),
      eo = to.exports;
    function so(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function io(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? so(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : so(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var no = {
        name: "PopularPostsThemePreview",
        components: { PopularPostsUpgradeOverlay: eo },
        props: { name: String, themes: Object },
        data: function () {
          return {
            optionsName: this.name + "_options",
            text_theme_preview: Object(c["a"])("Theme Preview", "ga-premium"),
            text_dummy_p_1: Object(c["a"])(
              "Sartorial taxidermy venmo you probably haven't heard of them, tofu fingerstache ethical pickled hella ramps vice snackwave seitan typewriter tofu.",
              "ga-premium"
            ),
            text_dummy_p_2: Object(c["a"])(
              "Austin typewriter heirloom distillery twee migas wayfarers. Fingerstache master cleanse quinoa humblebrag, iPhone taxidermy snackwave seitan typewriter tofu organic affogato kitsch. Artisan",
              "ga-premium"
            ),
            text_color: Object(c["a"])("Color", "ga-premium"),
            text_size: Object(c["a"])("Size", "ga-premium"),
            text_title: Object(c["a"])("Title", "ga-premium"),
            text_label: Object(c["a"])("Label", "ga-premium"),
            text_background: Object(c["a"])("Background", "ga-premium"),
            text_border: Object(c["a"])("Border", "ga-premium"),
            text_icon: Object(c["a"])("Icon", "ga-premium"),
          };
        },
        computed: io(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            preview: "$_popularposts/theme_preview_inline",
          }),
          {
            active: function () {
              return this.preview ? this.preview : this.settings[this.name];
            },
            themeOptions: function () {
              return !!this.active && this.themes[this.active].styles;
            },
            themeList: function () {
              return !!this.active && this.themes[this.active].list;
            },
            themeClass: function () {
              return (
                "monsterinsights-inline-popular-posts-widget monsterinsights-inline-popular-posts-" +
                this.active
              );
            },
            renderCssClass: function () {
              var t = "monsterinsights-pp-inline-theme-preview-render";
              return (
                this.themeAvailable || (t += " monsterinsights-pp-blurred"), t
              );
            },
            themeAvailable: function () {
              return (
                !!this.themes[this.active] &&
                Zn["a"].isThemeAvailable(this.themes[this.active].level)
              );
            },
          }
        ),
        methods: {
          getThemeOption: function (t, e) {
            var s = this.name + "_" + t + "_" + e;
            return "undefined" === typeof this.themeOptions[t][e]
              ? ""
              : this.settings[s] && "" !== this.settings[s]
              ? this.settings[s]
              : this.themeOptions[t][e] && this.themeOptions[t][e].default
              ? this.themeOptions[t][e].default
              : this.themeOptions[t][e];
          },
          objectStyle: function (t, e, s) {
            var i,
              n = {};
            if ("undefined" === typeof this.themeOptions[t]) return n;
            for (i = 0; i < e.length; i++) {
              var o = this.getThemeOption(t, e[i]);
              if ("" !== o) {
                var a = s[i];
                "fontSize" === a && (o += "px"), (n[a] = o);
              }
            }
            return n;
          },
          getImageClass: function (t) {
            return (
              (t = t.replace(".jpg", "").replace(".png", "")),
              "monsterinsights-bg-img monsterinsights-pp-" + t
            );
          },
        },
      },
      oo = no,
      ao = Object(b["a"])(oo, qn, Yn, !1, null, null, null),
      ro = ao.exports,
      lo = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-pp-sharedcount-controls" },
          [
            s("p", [
              s("span", {
                staticClass: "monsterinsights-dark",
                domProps: { textContent: t._s(t.text_sharedcount_api) },
              }),
              s("br"),
              s("span", {
                domProps: {
                  innerHTML: t._s(t.text_sharedcount_api_description),
                },
              }),
            ]),
            s(
              "div",
              { staticClass: "inline-field" },
              [
                s("settings-input-text", {
                  attrs: { name: "sharedcount_key", auth_disabled: !1 },
                }),
                s(
                  "button",
                  {
                    class: t.sharedcount_button_class,
                    attrs: { disabled: t.indexing_button_disabled },
                    on: { click: t.start_sharedcount_indexing },
                  },
                  [
                    s("span", {
                      domProps: { textContent: t._s(t.text_indexing_button) },
                    }),
                  ]
                ),
              ],
              1
            ),
            t.sharedcount_status
              ? s(
                  "div",
                  { staticClass: "monsterinsights-sharedcount-status" },
                  [
                    s("span", {
                      domProps: { innerHTML: t._s(t.sharedcount_status) },
                    }),
                  ]
                )
              : t._e(),
          ]
        );
      },
      co = [],
      po = {
        name: "PopularPostsSharedCount",
        components: { SettingsInputText: G["a"] },
        data: function () {
          return {
            text_sharedcount_api: Object(c["a"])(
              "SharedCount API Key",
              "ga-premium"
            ),
            text_sharedcount_api_description: Object(c["d"])(
              Object(c["a"])(
                "Insert your sharedcount API key found in your %1$sSettings%2$s panel. After, click Start Indexing.",
                "ga-premium"
              ),
              '<a href="https://www.sharedcount.com/app/account-info" target="_blank" rel="noreferrer noopener">',
              "</a>"
            ),
            text_start_indexing: Object(c["a"])("Start Indexing", "ga-premium"),
            indexing_button_disabled: !1,
            sharedcount_status: !1,
            text_indexing_button: "",
            text_indexing_progress: Object(c["a"])(
              "%1$sIndex Progress: %2$s%%.%3$s You may leave this page during indexing.",
              "ga-premium"
            ),
            text_indexing_complete: Object(c["a"])(
              "Indexing completed, counts will update automatically every day.",
              "ga-premium"
            ),
          };
        },
        mounted: function () {
          (this.text_indexing_button = this.text_start_indexing),
            this.get_sharedcount_index_progress();
        },
        computed: {
          sharedcount_button_class: function () {
            var t = "monsterinsights-button monsterinsights-button-gray";
            return (
              this.indexing_button_disabled &&
                (t += " monsterinsights-button-disabled"),
              t
            );
          },
        },
        methods: {
          start_sharedcount_indexing: function () {
            var t = this;
            if (!t.indexing_button_disabled) {
              (t.indexing_button_disabled = !0),
                (t.text_indexing_button = "Please wait");
              var e = new FormData();
              e.append("action", "monsterinsights_sharedcount_start_indexing"),
                e.append("nonce", i["a"].prototype.$mi.nonce),
                Ce.a.post(i["a"].prototype.$mi.ajax, e).then(function (e) {
                  if (e.data.success) {
                    if (
                      ((t.text_indexing_button = "Indexing started"),
                      e.data.data.max_pages)
                    ) {
                      var s = Math.floor(100 / e.data.data.max_pages);
                      t.update_progress_text(s);
                    }
                  } else (t.indexing_button_disabled = !1), (t.text_indexing_button = t.text_start_indexing), e.data.data.message && t.$mi_error_toast({ title: e.data.data.message });
                });
            }
          },
          get_sharedcount_index_progress: function () {
            var t = this;
            t.indexing_button_disabled = !0;
            var e = new FormData();
            e.append(
              "action",
              "monsterinsights_sharedcount_get_index_progress"
            ),
              e.append("nonce", i["a"].prototype.$mi.nonce),
              Ce.a
                .post(i["a"].prototype.$mi.ajax, e)
                .then(function (e) {
                  e.data.progress
                    ? ((t.indexing_button_disabled = !0),
                      (t.text_indexing_button = "Indexing started"),
                      t.update_progress_text(e.data.progress))
                    : (t.indexing_button_disabled = !1);
                })
                .catch(function () {
                  t.indexing_button_disabled = !1;
                });
          },
          update_progress_text: function (t) {
            this.sharedcount_status =
              100 === t
                ? this.text_indexing_complete
                : Object(c["d"])(this.text_indexing_progress, "<b>", t, "</b>");
          },
        },
      },
      uo = po,
      mo = Object(b["a"])(uo, lo, co, !1, null, null, null),
      go = mo.exports,
      ho = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-pp-posts-picker" },
          [
            s(
              "multiselect",
              {
                attrs: {
                  "clear-on-select": !1,
                  "close-on-select": !0,
                  "internal-search": !1,
                  loading: t.isLoading,
                  "max-height": 600,
                  options: t.pages,
                  placeholder: t.text_search_pages_placeholder,
                  searchable: !0,
                  "show-no-results": !0,
                  showLabels: !1,
                  label: "title",
                  "track-by": "id",
                  multiple: !0,
                },
                on: { "search-change": t.findPages },
                model: {
                  value: t.posts,
                  callback: function (e) {
                    t.posts = e;
                  },
                  expression: "posts",
                },
              },
              [
                s("span", {
                  attrs: { slot: "noResult" },
                  domProps: {
                    textContent: t._s(t.text_search_pages_not_found),
                  },
                  slot: "noResult",
                }),
                s("span", {
                  attrs: { slot: "noOptions" },
                  domProps: { textContent: t._s(t.text_search_no_options) },
                  slot: "noOptions",
                }),
              ]
            ),
          ],
          1
        );
      },
      _o = [];
    function Co(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function bo(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Co(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Co(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var fo = {
        name: "PopularPostsPostsPicker",
        components: { Multiselect: he.a },
        props: {
          name: String,
          post_type: { default: "post", type: String },
          placeholder: {
            default: Object(c["a"])("Select posts/search", "ga-premium"),
            type: String,
          },
        },
        data: function () {
          return {
            pages: [],
            isLoading: !1,
            error_notice: "",
            text_search_pages_placeholder: this.placeholder,
            text_search_pages_not_found: Object(c["a"])(
              "Oops! No posts found.",
              "ga-premium"
            ),
            text_search_no_options: Object(c["a"])(
              "Search by post title",
              "ga-premium"
            ),
          };
        },
        computed: bo({}, Object(l["b"])({ settings: "$_settings/settings" }), {
          posts: {
            get: function () {
              return (
                this.settings[this.name] ||
                  i["a"].set(this.settings, this.name, []),
                JSON.parse(JSON.stringify(this.settings[this.name]))
              );
            },
            set: function (t) {
              return (
                i["a"].set(this.settings, this.name, t), this.updateSetting(), t
              );
            },
          },
        }),
        methods: {
          findPages: fe()(function (t) {
            var e = this;
            e.isLoading = !0;
            var s = new FormData();
            s.append("nonce", i["a"].prototype.$mi.nonce),
              s.append("action", "monsterinsights_get_posts"),
              s.append("post_type", this.post_type),
              s.append("keyword", t),
              Ce.a
                .post(this.$mi.ajax, s)
                .then(function (t) {
                  (e.pages = t.data.data), (e.isLoading = !1);
                })
                .catch(function () {
                  (e.isLoading = !1),
                    i["a"].prototype.$mi_error_toast({
                      title: Object(c["a"])("Can't load posts.", "ga-premium"),
                    });
                });
          }, 300),
          updateSetting: function () {
            var t = this;
            if (((this.isLoading = !1), this.disabled)) return !1;
            this.$mi_saving_toast({}),
              this.$store
                .dispatch("$_settings/updateSettings", {
                  name: this.name,
                  value: this.posts,
                })
                .then(function (e) {
                  e.success ? t.$mi_success_toast({}) : t.$mi_error_toast({});
                }),
              (this.error_notice = "");
          },
        },
      },
      vo = fo,
      xo = Object(b["a"])(vo, ho, _o, !1, null, null, null),
      Oo = xo.exports,
      yo = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("settings-input-select", {
          attrs: {
            options: t.post_types,
            multiple: !0,
            name: t.name,
            label: t.label,
            description: t.description,
          },
        });
      },
      wo = [],
      jo = {
        name: "PopularPostsPostTypePicker",
        components: { SettingsInputSelect: Ue["a"] },
        props: { name: String, label: String, description: String },
        data: function () {
          return { post_types: [] };
        },
        mounted: function () {
          this.getPostTypes();
        },
        methods: {
          getPostTypes: function () {
            var t = this,
              e = new FormData();
            e.append("action", "monsterinsights_get_post_types"),
              e.append("nonce", i["a"].prototype.$mi.nonce),
              Ce.a.post(i["a"].prototype.$mi.ajax, e).then(function (e) {
                e.data && e.data && t.setPostTypes(e.data);
              });
          },
          setPostTypes: function (t) {
            for (var e in t)
              t.hasOwnProperty(e) &&
                this.post_types.push({ label: t[e], value: e });
          },
        },
      },
      ko = jo,
      Po = Object(b["a"])(ko, yo, wo, !1, null, null, null),
      So = Po.exports,
      $o = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-pp-theme-controls-holder" },
          [
            s("div", { class: t.renderCssClass }, [
              t.themeOptions.title
                ? s(
                    "div",
                    {
                      staticClass:
                        "monsterinsights-pp-controls monsterinsights-pp-controls-title",
                    },
                    [
                      s("label", {
                        staticClass: "monsterinsights-pp-controls-description",
                        domProps: { textContent: t._s(t.text_title) },
                      }),
                      s(
                        "div",
                        { staticClass: "monsterinsights-pp-controls-inputs" },
                        [
                          t.themeOptions.title.color
                            ? s(
                                "label",
                                [
                                  s("span", {
                                    staticClass:
                                      "monsterinsights-pp-control-label",
                                    domProps: {
                                      textContent: t._s(t.text_color),
                                    },
                                  }),
                                  s("color-picker", {
                                    attrs: {
                                      color: t.getThemeOption("title", "color"),
                                    },
                                    on: {
                                      changeColor: function (e) {
                                        var s = arguments.length,
                                          i = Array(s);
                                        while (s--) i[s] = arguments[s];
                                        return t.updateColor.apply(
                                          void 0,
                                          ["title", "color"].concat(i)
                                        );
                                      },
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          t.themeOptions.title.size
                            ? s(
                                "label",
                                [
                                  s("span", {
                                    staticClass:
                                      "monsterinsights-pp-control-label",
                                    domProps: {
                                      textContent: t._s(t.text_size),
                                    },
                                  }),
                                  s("popular-posts-size-input", {
                                    attrs: {
                                      value: t.getThemeOption("title", "size"),
                                      min: 1,
                                    },
                                    on: {
                                      change: function (e) {
                                        var s = arguments.length,
                                          i = Array(s);
                                        while (s--) i[s] = arguments[s];
                                        return t.updateOption.apply(
                                          void 0,
                                          ["title", "size"].concat(i)
                                        );
                                      },
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                        ]
                      ),
                    ]
                  )
                : t._e(),
              t.themeOptions.label
                ? s(
                    "div",
                    {
                      staticClass:
                        "monsterinsights-pp-controls monsterinsights-pp-controls-label",
                    },
                    [
                      s("label", {
                        staticClass: "monsterinsights-pp-controls-description",
                        domProps: { textContent: t._s(t.text_label) },
                      }),
                      s(
                        "div",
                        { staticClass: "monsterinsights-pp-controls-inputs" },
                        [
                          t.themeOptions.label.color
                            ? s("label", [
                                s("span", {
                                  staticClass:
                                    "monsterinsights-pp-control-label",
                                  domProps: { textContent: t._s(t.text_color) },
                                }),
                                s(
                                  "span",
                                  {
                                    staticClass:
                                      "monsterinsights-pp-color-input-inline",
                                  },
                                  [
                                    s("color-picker", {
                                      attrs: {
                                        color: t.getThemeOption(
                                          "label",
                                          "color"
                                        ),
                                      },
                                      on: {
                                        changeColor: function (e) {
                                          var s = arguments.length,
                                            i = Array(s);
                                          while (s--) i[s] = arguments[s];
                                          return t.updateColor.apply(
                                            void 0,
                                            ["label", "color"].concat(i)
                                          );
                                        },
                                      },
                                    }),
                                    s("input", {
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: t.getThemeOption(
                                          "label",
                                          "text"
                                        ),
                                      },
                                      on: {
                                        change: function (e) {
                                          var s = arguments.length,
                                            i = Array(s);
                                          while (s--) i[s] = arguments[s];
                                          return t.updateOption.apply(
                                            void 0,
                                            ["label", "text"].concat(i)
                                          );
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ])
                            : t._e(),
                          t.themeOptions.label.background
                            ? s(
                                "label",
                                [
                                  s("span", {
                                    staticClass:
                                      "monsterinsights-pp-control-label",
                                    domProps: {
                                      textContent: t._s(t.text_background),
                                    },
                                  }),
                                  s("color-picker", {
                                    attrs: {
                                      color: t.getThemeOption(
                                        "label",
                                        "background"
                                      ),
                                    },
                                    on: {
                                      changeColor: function (e) {
                                        var s = arguments.length,
                                          i = Array(s);
                                        while (s--) i[s] = arguments[s];
                                        return t.updateColor.apply(
                                          void 0,
                                          ["label", "background"].concat(i)
                                        );
                                      },
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                        ]
                      ),
                    ]
                  )
                : t._e(),
              t.themeOptions.icon
                ? s(
                    "div",
                    {
                      staticClass:
                        "monsterinsights-pp-controls monsterinsights-pp-controls-icon",
                    },
                    [
                      s("label", {
                        staticClass: "monsterinsights-pp-controls-description",
                        domProps: { textContent: t._s(t.text_icon) },
                      }),
                      s(
                        "div",
                        { staticClass: "monsterinsights-pp-controls-inputs" },
                        [
                          t.themeOptions.icon.color
                            ? s(
                                "label",
                                [
                                  s("span", {
                                    staticClass:
                                      "monsterinsights-pp-control-label",
                                    domProps: {
                                      textContent: t._s(t.text_color),
                                    },
                                  }),
                                  s("color-picker", {
                                    attrs: {
                                      color: t.getThemeOption("icon", "color"),
                                    },
                                    on: {
                                      changeColor: function (e) {
                                        var s = arguments.length,
                                          i = Array(s);
                                        while (s--) i[s] = arguments[s];
                                        return t.updateColor.apply(
                                          void 0,
                                          ["icon", "color"].concat(i)
                                        );
                                      },
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          t.themeOptions.icon.background
                            ? s(
                                "label",
                                [
                                  s("span", {
                                    staticClass:
                                      "monsterinsights-pp-control-label",
                                    domProps: {
                                      textContent: t._s(t.text_background),
                                    },
                                  }),
                                  s("color-picker", {
                                    attrs: {
                                      color: t.getThemeOption(
                                        "icon",
                                        "background"
                                      ),
                                    },
                                    on: {
                                      changeColor: function (e) {
                                        var s = arguments.length,
                                          i = Array(s);
                                        while (s--) i[s] = arguments[s];
                                        return t.updateColor.apply(
                                          void 0,
                                          ["icon", "background"].concat(i)
                                        );
                                      },
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                        ]
                      ),
                    ]
                  )
                : t._e(),
              t.themeOptions.background
                ? s(
                    "div",
                    {
                      staticClass:
                        "monsterinsights-pp-controls monsterinsights-pp-controls-background",
                    },
                    [
                      s("label", {
                        staticClass: "monsterinsights-pp-controls-description",
                        domProps: { textContent: t._s(t.text_background) },
                      }),
                      s(
                        "div",
                        { staticClass: "monsterinsights-pp-controls-inputs" },
                        [
                          t.themeOptions.background.color
                            ? s(
                                "label",
                                [
                                  s("span", {
                                    staticClass:
                                      "monsterinsights-pp-control-label",
                                    domProps: {
                                      textContent: t._s(t.text_color),
                                    },
                                  }),
                                  s("color-picker", {
                                    attrs: {
                                      color: t.getThemeOption(
                                        "background",
                                        "color"
                                      ),
                                    },
                                    on: {
                                      changeColor: function (e) {
                                        var s = arguments.length,
                                          i = Array(s);
                                        while (s--) i[s] = arguments[s];
                                        return t.updateColor.apply(
                                          void 0,
                                          ["background", "color"].concat(i)
                                        );
                                      },
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          t.themeOptions.background.border
                            ? s(
                                "label",
                                [
                                  s("span", {
                                    staticClass:
                                      "monsterinsights-pp-control-label",
                                    domProps: {
                                      textContent: t._s(t.text_border),
                                    },
                                  }),
                                  s("color-picker", {
                                    attrs: {
                                      color: t.getThemeOption(
                                        "background",
                                        "border"
                                      ),
                                    },
                                    on: {
                                      changeColor: function (e) {
                                        var s = arguments.length,
                                          i = Array(s);
                                        while (s--) i[s] = arguments[s];
                                        return t.updateColor.apply(
                                          void 0,
                                          ["background", "border"].concat(i)
                                        );
                                      },
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                        ]
                      ),
                    ]
                  )
                : t._e(),
              t.themeOptions.border
                ? s(
                    "div",
                    {
                      staticClass:
                        "monsterinsights-pp-controls monsterinsights-pp-controls-border",
                    },
                    [
                      s("label", {
                        staticClass: "monsterinsights-pp-controls-description",
                        domProps: { textContent: t._s(t.text_border) },
                      }),
                      s(
                        "div",
                        { staticClass: "monsterinsights-pp-controls-inputs" },
                        [
                          t.themeOptions.border.color
                            ? s(
                                "label",
                                [
                                  s("span", {
                                    staticClass:
                                      "monsterinsights-pp-control-label",
                                    domProps: {
                                      textContent: t._s(
                                        t.themeOptions.border.color.label
                                          ? t.themeOptions.border.color.label
                                          : t.text_color
                                      ),
                                    },
                                  }),
                                  s("color-picker", {
                                    attrs: {
                                      color: t.getThemeOption(
                                        "border",
                                        "color"
                                      ),
                                    },
                                    on: {
                                      changeColor: function (e) {
                                        var s = arguments.length,
                                          i = Array(s);
                                        while (s--) i[s] = arguments[s];
                                        return t.updateColor.apply(
                                          void 0,
                                          ["border", "color"].concat(i)
                                        );
                                      },
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          t.themeOptions.border.color2
                            ? s(
                                "label",
                                [
                                  s("span", {
                                    staticClass:
                                      "monsterinsights-pp-control-label",
                                    domProps: {
                                      textContent: t._s(
                                        t.themeOptions.border.color2.label
                                          ? t.themeOptions.border.color2.label
                                          : t.text_color
                                      ),
                                    },
                                  }),
                                  s("color-picker", {
                                    attrs: {
                                      color: t.getThemeOption(
                                        "border",
                                        "color2"
                                      ),
                                    },
                                    on: {
                                      changeColor: function (e) {
                                        var s = arguments.length,
                                          i = Array(s);
                                        while (s--) i[s] = arguments[s];
                                        return t.updateColor.apply(
                                          void 0,
                                          ["border", "color2"].concat(i)
                                        );
                                      },
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                        ]
                      ),
                    ]
                  )
                : t._e(),
            ]),
            t.themeAvailable ? t._e() : s("popular-posts-upgrade-overlay"),
          ],
          1
        );
      },
      Ho = [],
      Ao = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "monsterinsights-color-picker" }, [
          s(
            "div",
            {
              staticClass: "monsterinsights-colorpicker-preview",
              on: {
                click: function (e) {
                  e.stopPropagation(), (t.showColorPicker = !t.showColorPicker);
                },
              },
            },
            [s("span", { style: t.colorStyle })]
          ),
          t.showColorPicker
            ? s(
                "div",
                {
                  directives: [
                    {
                      name: "click-outside",
                      rawName: "v-click-outside",
                      value: t.maybeHideColorpicker,
                      expression: "maybeHideColorpicker",
                    },
                  ],
                  staticClass: "monsterinsights-colorpicker-picker",
                },
                [
                  s("color-picker", {
                    attrs: { color: t.color },
                    on: { changeColor: t.changeColor },
                  }),
                ],
                1
              )
            : t._e(),
        ]);
      },
      Lo = [],
      To =
        (s("99af"),
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            {
              staticClass: "hu-color-picker",
              class: { light: t.isLightTheme },
              style: { width: t.totalWidth + "px" },
            },
            [
              s(
                "div",
                { staticClass: "color-set" },
                [
                  s("Saturation", {
                    ref: "saturation",
                    attrs: {
                      color: t.rgbString,
                      hsv: t.hsv,
                      size: t.hueHeight,
                    },
                    on: { selectSaturation: t.selectSaturation },
                  }),
                  s("Hue", {
                    ref: "hue",
                    attrs: {
                      hsv: t.hsv,
                      width: t.hueWidth,
                      height: t.hueHeight,
                    },
                    on: { selectHue: t.selectHue },
                  }),
                  s("Alpha", {
                    ref: "alpha",
                    attrs: {
                      color: t.rgbString,
                      rgba: t.rgba,
                      width: t.hueWidth,
                      height: t.hueHeight,
                    },
                    on: { selectAlpha: t.selectAlpha },
                  }),
                ],
                1
              ),
              s(
                "div",
                {
                  staticClass: "color-show",
                  style: { height: t.previewHeight + "px" },
                },
                [
                  s("Preview", {
                    attrs: {
                      color: t.rgbaString,
                      width: t.previewWidth,
                      height: t.previewHeight,
                    },
                  }),
                  t.suckerHide
                    ? t._e()
                    : s("Sucker", {
                        attrs: {
                          "sucker-canvas": t.suckerCanvas,
                          "sucker-area": t.suckerArea,
                        },
                        on: {
                          openSucker: t.openSucker,
                          selectSucker: t.selectSucker,
                        },
                      }),
                ],
                1
              ),
              s("Box", {
                attrs: { name: "HEX", color: t.modelHex },
                on: { inputColor: t.inputHex },
              }),
              s("Box", {
                attrs: { name: "RGBA", color: t.modelRgba },
                on: { inputColor: t.inputRgba },
              }),
              s("Colors", {
                attrs: {
                  color: t.rgbaString,
                  "colors-default": t.colorsDefault,
                  "colors-history-key": t.colorsHistoryKey,
                },
                on: { selectColor: t.selectColor },
              }),
            ],
            1
          );
        }),
      Mo = [],
      Eo = {
        methods: {
          setColorValue(t) {
            let e = { r: 0, g: 0, b: 0, a: 1 };
            /#/.test(t)
              ? (e = this.hex2rgb(t))
              : /rgb/.test(t)
              ? (e = this.rgb2rgba(t))
              : "string" === typeof t
              ? (e = this.rgb2rgba(`rgba(${t})`))
              : "[object Object]" === Object.prototype.toString.call(t) &&
                (e = t);
            const { r: s, g: i, b: n, a: o } = e,
              { h: a, s: r, v: l } = this.rgb2hsv(e);
            return {
              r: s,
              g: i,
              b: n,
              a: void 0 === o ? 1 : o,
              h: a,
              s: r,
              v: l,
            };
          },
          createAlphaSquare(t) {
            const e = document.createElement("canvas"),
              s = e.getContext("2d"),
              i = 2 * t;
            return (
              (e.width = i),
              (e.height = i),
              (s.fillStyle = "#ffffff"),
              s.fillRect(0, 0, i, i),
              (s.fillStyle = "#ccd5db"),
              s.fillRect(0, 0, t, t),
              s.fillRect(t, t, t, t),
              e
            );
          },
          createLinearGradient(t, e, s, i, n, o) {
            const a = "l" === t,
              r = e.createLinearGradient(0, 0, a ? s : 0, a ? 0 : i);
            r.addColorStop(0.01, n),
              r.addColorStop(0.99, o),
              (e.fillStyle = r),
              e.fillRect(0, 0, s, i);
          },
          rgb2hex({ r: t, g: e, b: s }, i) {
            const n = (t) => ("0" + Number(t).toString(16)).slice(-2),
              o = `#${n(t)}${n(e)}${n(s)}`;
            return i ? o.toUpperCase() : o;
          },
          hex2rgb(t) {
            t = t.slice(1);
            const e = (t) => parseInt(t, 16) || 0;
            return {
              r: e(t.slice(0, 2)),
              g: e(t.slice(2, 4)),
              b: e(t.slice(4, 6)),
            };
          },
          rgb2rgba(t) {
            return "string" === typeof t
              ? ((t = (/rgba?\((.*?)\)/.exec(t) || ["", "0,0,0,1"])[1].split(
                  ","
                )),
                {
                  r: Number(t[0]) || 0,
                  g: Number(t[1]) || 0,
                  b: Number(t[2]) || 0,
                  a: Number(t[3] ? t[3] : 1),
                })
              : t;
          },
          rgb2hsv({ r: t, g: e, b: s }) {
            (t /= 255), (e /= 255), (s /= 255);
            const i = Math.max(t, e, s),
              n = Math.min(t, e, s),
              o = i - n;
            let a = 0;
            i === n
              ? (a = 0)
              : i === t
              ? (a = e >= s ? (60 * (e - s)) / o : (60 * (e - s)) / o + 360)
              : i === e
              ? (a = (60 * (s - t)) / o + 120)
              : i === s && (a = (60 * (t - e)) / o + 240),
              (a = Math.floor(a));
            let r = parseFloat((0 === i ? 0 : 1 - n / i).toFixed(2)),
              l = parseFloat(i.toFixed(2));
            return { h: a, s: r, v: l };
          },
        },
      },
      Vo = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "saturation",
            on: {
              mousedown: function (e) {
                return (
                  e.preventDefault(), e.stopPropagation(), t.selectSaturation(e)
                );
              },
            },
          },
          [
            s("canvas", { ref: "canvasSaturation" }),
            s("div", { staticClass: "slide", style: t.slideSaturationStyle }),
          ]
        );
      },
      Do = [];
    function Io(t) {
      if (Array.isArray(t)) return t;
    }
    function Bo(t, e) {
      if (
        Symbol.iterator in Object(t) ||
        "[object Arguments]" === Object.prototype.toString.call(t)
      ) {
        var s = [],
          i = !0,
          n = !1,
          o = void 0;
        try {
          for (
            var a, r = t[Symbol.iterator]();
            !(i = (a = r.next()).done);
            i = !0
          )
            if ((s.push(a.value), e && s.length === e)) break;
        } catch (l) {
          (n = !0), (o = l);
        } finally {
          try {
            i || null == r["return"] || r["return"]();
          } finally {
            if (n) throw o;
          }
        }
        return s;
      }
    }
    function zo() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }
    function Zo(t, e) {
      return Io(t) || Bo(t, e) || zo();
    }
    var Uo = {
        mixins: [Eo],
        props: {
          color: { type: String, default: "#000000" },
          hsv: { type: Object, default: null },
          size: { type: Number, default: 152 },
        },
        data: function () {
          return { slideSaturationStyle: {} };
        },
        mounted: function () {
          this.renderColor(), this.renderSlide();
        },
        methods: {
          renderColor: function () {
            var t = this.$refs.canvasSaturation,
              e = this.size,
              s = t.getContext("2d");
            (t.width = e),
              (t.height = e),
              (s.fillStyle = this.color),
              s.fillRect(0, 0, e, e),
              this.createLinearGradient(
                "l",
                s,
                e,
                e,
                "#FFFFFF",
                "rgba(255,255,255,0)"
              ),
              this.createLinearGradient(
                "p",
                s,
                e,
                e,
                "rgba(0,0,0,0)",
                "#000000"
              );
          },
          renderSlide: function () {
            this.slideSaturationStyle = {
              left: this.hsv.s * this.size - 5 + "px",
              top: (1 - this.hsv.v) * this.size - 5 + "px",
            };
          },
          selectSaturation: function (t) {
            var e = this,
              s = this.$el.getBoundingClientRect(),
              i = s.top,
              n = s.left,
              o = t.target.getContext("2d"),
              a = function (t) {
                var s = t.clientX - n,
                  a = t.clientY - i;
                s < 0 && (s = 0),
                  a < 0 && (a = 0),
                  s > e.size && (s = e.size),
                  a > e.size && (a = e.size),
                  (e.slideSaturationStyle = {
                    left: s - 5 + "px",
                    top: a - 5 + "px",
                  });
                var r = o.getImageData(
                    Math.min(s, e.size - 1),
                    Math.min(a, e.size - 1),
                    1,
                    1
                  ),
                  l = Zo(r.data, 3),
                  c = l[0],
                  p = l[1],
                  u = l[2];
                e.$emit("selectSaturation", { r: c, g: p, b: u });
              };
            a(t);
            var r = function t() {
              document.removeEventListener("mousemove", a),
                document.removeEventListener("mouseup", t);
            };
            document.addEventListener("mousemove", a),
              document.addEventListener("mouseup", r);
          },
        },
      },
      Fo = Uo,
      No = (s("2950"), Object(b["a"])(Fo, Vo, Do, !1, null, null, null)),
      Wo = No.exports,
      Ro = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "hue",
            on: {
              mousedown: function (e) {
                return e.preventDefault(), e.stopPropagation(), t.selectHue(e);
              },
            },
          },
          [
            s("canvas", { ref: "canvasHue" }),
            s("div", { staticClass: "slide", style: t.slideHueStyle }),
          ]
        );
      },
      Go = [],
      qo = {
        props: {
          hsv: { type: Object, default: null },
          width: { type: Number, default: 15 },
          height: { type: Number, default: 152 },
        },
        data: function () {
          return { slideHueStyle: {} };
        },
        mounted: function () {
          this.renderColor(), this.renderSlide();
        },
        methods: {
          renderColor: function () {
            var t = this.$refs.canvasHue,
              e = this.width,
              s = this.height,
              i = t.getContext("2d");
            (t.width = e), (t.height = s);
            var n = i.createLinearGradient(0, 0, 0, s);
            n.addColorStop(0, "#FF0000"),
              n.addColorStop(0.17, "#FF00FF"),
              n.addColorStop(0.34, "#0000FF"),
              n.addColorStop(0.51, "#00FFFF"),
              n.addColorStop(0.68, "#00FF00"),
              n.addColorStop(0.17 * 5, "#FFFF00"),
              n.addColorStop(1, "#FF0000"),
              (i.fillStyle = n),
              i.fillRect(0, 0, e, s);
          },
          renderSlide: function () {
            this.slideHueStyle = {
              top: (1 - this.hsv.h / 360) * this.height - 2 + "px",
            };
          },
          selectHue: function (t) {
            var e = this,
              s = this.$el.getBoundingClientRect(),
              i = s.top,
              n = t.target.getContext("2d"),
              o = function (t) {
                var s = t.clientY - i;
                s < 0 && (s = 0),
                  s > e.height && (s = e.height),
                  (e.slideHueStyle = { top: s - 2 + "px" });
                var o = n.getImageData(0, Math.min(s, e.height - 1), 1, 1),
                  a = Zo(o.data, 3),
                  r = a[0],
                  l = a[1],
                  c = a[2];
                e.$emit("selectHue", { r: r, g: l, b: c });
              };
            o(t);
            var a = function t() {
              document.removeEventListener("mousemove", o),
                document.removeEventListener("mouseup", t);
            };
            document.addEventListener("mousemove", o),
              document.addEventListener("mouseup", a);
          },
        },
      },
      Yo = qo,
      Ko = (s("8f8a"), Object(b["a"])(Yo, Ro, Go, !1, null, null, null)),
      Xo = Ko.exports,
      Jo = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "color-alpha",
            on: {
              mousedown: function (e) {
                return (
                  e.preventDefault(), e.stopPropagation(), t.selectAlpha(e)
                );
              },
            },
          },
          [
            s("canvas", { ref: "canvasAlpha" }),
            s("div", { staticClass: "slide", style: t.slideAlphaStyle }),
          ]
        );
      },
      Qo = [],
      ta =
        (s("b680"),
        {
          mixins: [Eo],
          props: {
            color: { type: String, default: "#000000" },
            rgba: { type: Object, default: null },
            width: { type: Number, default: 15 },
            height: { type: Number, default: 152 },
          },
          data: function () {
            return { slideAlphaStyle: {}, alphaSize: 5 };
          },
          watch: {
            color: function () {
              this.renderColor();
            },
            "rgba.a": function () {
              this.renderSlide();
            },
          },
          mounted: function () {
            this.renderColor(), this.renderSlide();
          },
          methods: {
            renderColor: function () {
              var t = this.$refs.canvasAlpha,
                e = this.width,
                s = this.height,
                i = this.alphaSize,
                n = this.createAlphaSquare(i),
                o = t.getContext("2d");
              (t.width = e),
                (t.height = s),
                (o.fillStyle = o.createPattern(n, "repeat")),
                o.fillRect(0, 0, e, s),
                this.createLinearGradient(
                  "p",
                  o,
                  e,
                  s,
                  "rgba(255,255,255,0)",
                  this.color
                );
            },
            renderSlide: function () {
              this.slideAlphaStyle = {
                top: this.rgba.a * this.height - 2 + "px",
              };
            },
            selectAlpha: function (t) {
              var e = this,
                s = this.$el.getBoundingClientRect(),
                i = s.top,
                n = function (t) {
                  var s = t.clientY - i;
                  s < 0 && (s = 0), s > e.height && (s = e.height);
                  var n = parseFloat((s / e.height).toFixed(2));
                  e.$emit("selectAlpha", n);
                };
              n(t);
              var o = function t() {
                document.removeEventListener("mousemove", n),
                  document.removeEventListener("mouseup", t);
              };
              document.addEventListener("mousemove", n),
                document.addEventListener("mouseup", o);
            },
          },
        }),
      ea = ta,
      sa = (s("ab3a"), Object(b["a"])(ea, Jo, Qo, !1, null, null, null)),
      ia = sa.exports,
      na = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("canvas");
      },
      oa = [],
      aa = {
        mixins: [Eo],
        props: {
          color: { type: String, default: "#000000" },
          width: { type: Number, default: 100 },
          height: { type: Number, default: 30 },
        },
        data: function () {
          return { alphaSize: 5 };
        },
        watch: {
          color: function () {
            this.renderColor();
          },
        },
        mounted: function () {
          this.renderColor();
        },
        methods: {
          renderColor: function () {
            var t = this.$el,
              e = this.width,
              s = this.height,
              i = this.alphaSize,
              n = this.createAlphaSquare(i),
              o = t.getContext("2d");
            (t.width = e),
              (t.height = s),
              (o.fillStyle = o.createPattern(n, "repeat")),
              o.fillRect(0, 0, e, s),
              (o.fillStyle = this.color),
              o.fillRect(0, 0, e, s);
          },
        },
      },
      ra = aa,
      la = Object(b["a"])(ra, na, oa, !1, null, null, null),
      ca = la.exports,
      pa = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          t.isSucking
            ? t._e()
            : s(
                "svg",
                {
                  staticClass: "sucker",
                  class: { active: t.isOpenSucker },
                  attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "-12 -12 48 48",
                  },
                  on: { click: t.openSucker },
                },
                [
                  s("path", {
                    attrs: {
                      d:
                        "M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1",
                    },
                  }),
                ]
              ),
          t.isSucking
            ? s(
                "svg",
                {
                  staticClass: "sucker",
                  attrs: {
                    viewBox: "-16 -16 68 68",
                    xmlns: "http://www.w3.org/2000/svg",
                    stroke: "#9099a4",
                  },
                },
                [
                  s("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
                    s(
                      "g",
                      {
                        attrs: {
                          transform: "translate(1 1)",
                          "stroke-width": "4",
                        },
                      },
                      [
                        s("circle", {
                          attrs: {
                            "stroke-opacity": ".5",
                            cx: "18",
                            cy: "18",
                            r: "18",
                          },
                        }),
                        s(
                          "path",
                          { attrs: { d: "M36 18c0-9.94-8.06-18-18-18" } },
                          [
                            s("animateTransform", {
                              attrs: {
                                attributeName: "transform",
                                type: "rotate",
                                from: "0 18 18",
                                to: "360 18 18",
                                dur: "1s",
                                repeatCount: "indefinite",
                              },
                            }),
                          ],
                          1
                        ),
                      ]
                    ),
                  ]),
                ]
              )
            : t._e(),
        ]);
      },
      ua = [],
      ma = s("1f29"),
      da = s.n(ma),
      ga = {
        props: {
          suckerCanvas: { type: null, default: null },
          suckerArea: {
            type: Array,
            default: function () {
              return [];
            },
          },
        },
        data: function () {
          return { isOpenSucker: !1, suckerPreview: null, isSucking: !1 };
        },
        watch: {
          suckerCanvas: function (t) {
            (this.isSucking = !1),
              this.suckColor(t),
              (t.style.cursor = "url(".concat(da.a, ") 0 32, default"));
          },
        },
        methods: {
          openSucker: function () {
            this.isOpenSucker
              ? this.keydownHandler({ keyCode: 27 })
              : ((this.isOpenSucker = !0),
                (this.isSucking = !0),
                this.$emit("openSucker", !0),
                document.addEventListener("keydown", this.keydownHandler));
          },
          keydownHandler: function (t) {
            27 === t.keyCode &&
              ((this.isOpenSucker = !1),
              (this.isSucking = !1),
              this.$emit("openSucker", !1),
              document.removeEventListener("keydown", this.keydownHandler),
              document.removeEventListener("mousemove", this.mousemoveHandler),
              document.removeEventListener("mouseup", this.mousemoveHandler),
              this.suckerPreview &&
                (document.body.removeChild(this.suckerPreview),
                (this.suckerPreview = null)));
          },
          mousemoveHandler: function (t) {
            var e = t.clientX,
              s = t.clientY,
              i = this.suckerCanvas.getBoundingClientRect(),
              n = i.top,
              o = i.left,
              a = i.width,
              r = i.height,
              l = e - o,
              c = s - n,
              p = this.suckerCanvas.getContext("2d"),
              u = p.getImageData(Math.min(l, a - 1), Math.min(c, r - 1), 1, 1),
              m = Zo(u.data, 4),
              d = m[0],
              g = m[1],
              h = m[2],
              _ = m[3];
            _ = parseFloat((_ / 255).toFixed(2));
            var C = this.suckerPreview.style;
            Object.assign(C, {
              position: "absolute",
              left: e + 20 + "px",
              top: s - 36 + "px",
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              border: "2px solid #fff",
              boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.16)",
              background: "rgba("
                .concat(d, ", ")
                .concat(g, ", ")
                .concat(h, ", ")
                .concat(_, ")"),
              zIndex: 95,
            }),
              e >= this.suckerArea[0] &&
              s >= this.suckerArea[1] &&
              e <= this.suckerArea[2] &&
              s <= this.suckerArea[3]
                ? (C.display = "")
                : (C.display = "none");
          },
          suckColor: function (t) {
            var e = this;
            (t && "CANVAS" !== t.tagName) ||
              ((this.suckerPreview = document.createElement("div")),
              document.body.appendChild(this.suckerPreview),
              document.addEventListener("mousemove", this.mousemoveHandler),
              document.addEventListener("mouseup", this.mousemoveHandler),
              t.addEventListener("click", function (s) {
                var i = s.clientX,
                  n = s.clientY,
                  o = t.getBoundingClientRect(),
                  a = o.top,
                  r = o.left,
                  l = o.width,
                  c = o.height,
                  p = i - r,
                  u = n - a,
                  m = t.getContext("2d"),
                  d = m.getImageData(
                    Math.min(p, l - 1),
                    Math.min(u, c - 1),
                    1,
                    1
                  ),
                  g = Zo(d.data, 4),
                  h = g[0],
                  _ = g[1],
                  C = g[2],
                  b = g[3];
                (b = parseFloat((b / 255).toFixed(2))),
                  e.$emit("selectSucker", { r: h, g: _, b: C, a: b });
              }));
          },
        },
      },
      ha = ga,
      _a = (s("21ab"), Object(b["a"])(ha, pa, ua, !1, null, null, null)),
      Ca = _a.exports,
      ba = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "color-type" }, [
          s("span", { staticClass: "name" }, [t._v(" " + t._s(t.name) + " ")]),
          s("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: t.modelColor,
                expression: "modelColor",
              },
            ],
            staticClass: "value",
            domProps: { value: t.modelColor },
            on: {
              input: function (e) {
                e.target.composing || (t.modelColor = e.target.value);
              },
            },
          }),
        ]);
      },
      fa = [],
      va = {
        props: {
          name: { type: String, default: "" },
          color: { type: String, default: "" },
        },
        computed: {
          modelColor: {
            get: function () {
              return this.color;
            },
            set: function (t) {
              this.$emit("inputColor", t);
            },
          },
        },
      },
      xa = va,
      Oa = (s("2e60"), Object(b["a"])(xa, ba, fa, !1, null, null, null)),
      ya = Oa.exports,
      wa = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          s(
            "ul",
            { staticClass: "colors" },
            t._l(t.colorsDefault, function (e) {
              return s(
                "li",
                {
                  key: e,
                  staticClass: "item",
                  on: {
                    click: function (s) {
                      return t.selectColor(e);
                    },
                  },
                },
                [
                  s("div", {
                    staticClass: "alpha",
                    style: { background: "url(" + t.imgAlphaBase64 + ")" },
                  }),
                  s("div", { staticClass: "color", style: { background: e } }),
                ]
              );
            }),
            0
          ),
          t.colorsHistory.length
            ? s(
                "ul",
                { staticClass: "colors history" },
                t._l(t.colorsHistory, function (e) {
                  return s(
                    "li",
                    {
                      key: e,
                      staticClass: "item",
                      on: {
                        click: function (s) {
                          return t.selectColor(e);
                        },
                      },
                    },
                    [
                      s("div", {
                        staticClass: "alpha",
                        style: { background: "url(" + t.imgAlphaBase64 + ")" },
                      }),
                      s("div", {
                        staticClass: "color",
                        style: { background: e },
                      }),
                    ]
                  );
                }),
                0
              )
            : t._e(),
        ]);
      },
      ja = [],
      ka = {
        mixins: [Eo],
        props: {
          color: { type: String, default: "#000000" },
          colorsDefault: {
            type: Array,
            default: function () {
              return [];
            },
          },
          colorsHistoryKey: { type: String, default: "" },
        },
        data: function () {
          return {
            imgAlphaBase64: "",
            colorsHistory:
              JSON.parse(localStorage.getItem(this.colorsHistoryKey)) || [],
          };
        },
        created: function () {
          this.imgAlphaBase64 = this.createAlphaSquare(4).toDataURL();
        },
        destroyed: function () {
          this.setColorsHistory(this.color);
        },
        methods: {
          selectColor: function (t) {
            this.$emit("selectColor", t);
          },
          setColorsHistory: function (t) {
            if (t) {
              var e = this.colorsHistory,
                s = e.indexOf(t);
              s >= 0 && e.splice(s, 1),
                e.length >= 8 && (e.length = 7),
                e.unshift(t),
                (this.colorsHistory = e),
                localStorage.setItem(this.colorsHistoryKey, JSON.stringify(e));
            }
          },
        },
      },
      Pa = ka,
      Sa = (s("9907"), Object(b["a"])(Pa, wa, ja, !1, null, null, null)),
      $a = Sa.exports,
      Ha = {
        components: {
          Saturation: Wo,
          Hue: Xo,
          Alpha: ia,
          Preview: ca,
          Sucker: Ca,
          Box: ya,
          Colors: $a,
        },
        mixins: [Eo],
        props: {
          color: { type: String, default: "#000000" },
          theme: { type: String, default: "dark" },
          suckerHide: { type: Boolean, default: !0 },
          suckerCanvas: { type: null, default: null },
          suckerArea: {
            type: Array,
            default: function () {
              return [];
            },
          },
          colorsDefault: {
            type: Array,
            default: function () {
              return [
                "#000000",
                "#FFFFFF",
                "#FF1900",
                "#F47365",
                "#FFB243",
                "#FFE623",
                "#6EFF2A",
                "#1BC7B1",
                "#00BEFF",
                "#2E81FF",
                "#5D61FF",
                "#FF89CF",
                "#FC3CAD",
                "#BF3DCE",
                "#8E00A7",
                "rgba(0,0,0,0)",
              ];
            },
          },
          colorsHistoryKey: {
            type: String,
            default: "vue-colorpicker-history",
          },
        },
        data: function () {
          return {
            hueWidth: 15,
            hueHeight: 152,
            previewHeight: 30,
            modelRgba: "",
            modelHex: "",
            r: 0,
            g: 0,
            b: 0,
            a: 1,
            h: 0,
            s: 0,
            v: 0,
          };
        },
        computed: {
          isLightTheme: function () {
            return "light" === this.theme;
          },
          totalWidth: function () {
            return this.hueHeight + 2 * (this.hueWidth + 8);
          },
          previewWidth: function () {
            return this.totalWidth - (this.suckerHide ? 0 : this.previewHeight);
          },
          rgba: function () {
            return { r: this.r, g: this.g, b: this.b, a: this.a };
          },
          hsv: function () {
            return { h: this.h, s: this.s, v: this.v };
          },
          rgbString: function () {
            return "rgb("
              .concat(this.r, ", ")
              .concat(this.g, ", ")
              .concat(this.b, ")");
          },
          rgbaStringShort: function () {
            return ""
              .concat(this.r, ", ")
              .concat(this.g, ", ")
              .concat(this.b, ", ")
              .concat(this.a);
          },
          rgbaString: function () {
            return "rgba(".concat(this.rgbaStringShort, ")");
          },
          hexString: function () {
            return this.rgb2hex(this.rgba, !0);
          },
        },
        created: function () {
          var t = this;
          Object.assign(this, this.setColorValue(this.color)),
            this.setText(),
            this.$watch("rgba", function () {
              t.$emit("changeColor", {
                rgba: t.rgba,
                hsv: t.hsv,
                hex: t.modelHex,
              });
            });
        },
        methods: {
          selectSaturation: function (t) {
            var e = this.setColorValue(t),
              s = e.r,
              i = e.g,
              n = e.b,
              o = e.h,
              a = e.s,
              r = e.v;
            Object.assign(this, { r: s, g: i, b: n, h: o, s: a, v: r }),
              this.setText();
          },
          selectHue: function (t) {
            var e = this,
              s = this.setColorValue(t),
              i = s.r,
              n = s.g,
              o = s.b,
              a = s.h,
              r = s.s,
              l = s.v;
            Object.assign(this, { r: i, g: n, b: o, h: a, s: r, v: l }),
              this.setText(),
              this.$nextTick(function () {
                e.$refs.saturation.renderColor(),
                  e.$refs.saturation.renderSlide();
              });
          },
          selectAlpha: function (t) {
            (this.a = t), this.setText();
          },
          inputHex: function (t) {
            var e = this,
              s = this.setColorValue(t),
              i = s.r,
              n = s.g,
              o = s.b,
              a = s.a,
              r = s.h,
              l = s.s,
              c = s.v;
            Object.assign(this, { r: i, g: n, b: o, a: a, h: r, s: l, v: c }),
              (this.modelHex = t),
              (this.modelRgba = this.rgbaStringShort),
              this.$nextTick(function () {
                e.$refs.saturation.renderColor(),
                  e.$refs.saturation.renderSlide(),
                  e.$refs.hue.renderSlide();
              });
          },
          inputRgba: function (t) {
            var e = this,
              s = this.setColorValue(t),
              i = s.r,
              n = s.g,
              o = s.b,
              a = s.a,
              r = s.h,
              l = s.s,
              c = s.v;
            Object.assign(this, { r: i, g: n, b: o, a: a, h: r, s: l, v: c }),
              (this.modelHex = this.hexString),
              (this.modelRgba = t),
              this.$nextTick(function () {
                e.$refs.saturation.renderColor(),
                  e.$refs.saturation.renderSlide(),
                  e.$refs.hue.renderSlide();
              });
          },
          setText: function () {
            (this.modelHex = this.hexString),
              (this.modelRgba = this.rgbaStringShort);
          },
          openSucker: function (t) {
            this.$emit("openSucker", t);
          },
          selectSucker: function (t) {
            var e = this,
              s = this.setColorValue(t),
              i = s.r,
              n = s.g,
              o = s.b,
              a = s.a,
              r = s.h,
              l = s.s,
              c = s.v;
            Object.assign(this, { r: i, g: n, b: o, a: a, h: r, s: l, v: c }),
              this.setText(),
              this.$nextTick(function () {
                e.$refs.saturation.renderColor(),
                  e.$refs.saturation.renderSlide(),
                  e.$refs.hue.renderSlide();
              });
          },
          selectColor: function (t) {
            var e = this,
              s = this.setColorValue(t),
              i = s.r,
              n = s.g,
              o = s.b,
              a = s.a,
              r = s.h,
              l = s.s,
              c = s.v;
            Object.assign(this, { r: i, g: n, b: o, a: a, h: r, s: l, v: c }),
              this.setText(),
              this.$nextTick(function () {
                e.$refs.saturation.renderColor(),
                  e.$refs.saturation.renderSlide(),
                  e.$refs.hue.renderSlide();
              });
          },
        },
      },
      Aa = Ha,
      La = (s("dde8"), Object(b["a"])(Aa, To, Mo, !1, null, null, null)),
      Ta = La.exports,
      Ma = Ta;
    i["a"].directive("click-outside", {
      bind: function (t, e, s) {
        (t.clickOutsideEvent = function (i) {
          t === i.target || t.contains(i.target) || s.context[e.expression](i);
        }),
          document.body.addEventListener("click", t.clickOutsideEvent);
      },
      unbind: function (t) {
        document.body.removeEventListener("click", t.clickOutsideEvent);
      },
    });
    var Ea = {
        components: { colorPicker: Ma },
        props: { color: String },
        data: function () {
          return { showColorPicker: !1, selectedColor: this.color };
        },
        computed: {
          colorStyle: function () {
            return { backgroundColor: this.selectedColor };
          },
        },
        methods: {
          changeColor: function (t) {
            var e = t.rgba,
              s = e.r,
              i = e.g,
              n = e.b,
              o = e.a;
            (this.selectedColor = "rgba("
              .concat(s, ", ")
              .concat(i, ", ")
              .concat(n, ", ")
              .concat(o, ")")),
              this.$emit("changeColor", this.selectedColor);
          },
          maybeHideColorpicker: function () {
            this.showColorPicker && (this.showColorPicker = !1);
          },
        },
        watch: {
          color: function (t) {
            this.selectedColor = t;
          },
        },
      },
      Va = Ea,
      Da = Object(b["a"])(Va, Ao, Lo, !1, null, null, null),
      Ia = Da.exports,
      Ba = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "span",
          { staticClass: "monsterinsights-number-input-no-arrows" },
          [
            s("input", {
              attrs: { type: "number", name: t.name },
              domProps: { value: t.displayValue },
              on: { change: t.emitChange },
            }),
            s("span", { staticClass: "monsterinsights-number-input-arrows" }, [
              s(
                "button",
                {
                  staticClass:
                    "monsterinsights-number-input-arrow monsterinsights-number-input-arrow-up",
                  on: { click: t.increment },
                },
                [s("i", { staticClass: "monstericon-arrow" })]
              ),
              s(
                "button",
                {
                  staticClass:
                    "monsterinsights-number-input-arrow monsterinsights-number-input-arrow-down",
                  on: { click: t.decrement },
                },
                [s("i", { staticClass: "monstericon-arrow" })]
              ),
            ]),
            t.unit
              ? s("span", {
                  staticClass: "monsterinsights-number-input-unit",
                  domProps: { textContent: t._s(t.unit) },
                })
              : t._e(),
          ]
        );
      },
      za = [],
      Za = {
        name: "PopularPostsSizeInput",
        props: {
          name: String,
          value: { type: [String, Number] },
          min: Number,
          max: { type: Number, default: 100 },
          unit: { type: String, default: "px" },
        },
        data: function () {
          return { displayValue: this.value };
        },
        methods: {
          emitChange: function (t) {
            if (t.target.value > this.max)
              return (this.displayValue = this.max), this.emitFakeChange();
            (this.displayValue = t.target.value), this.$emit("change", t);
          },
          emitFakeChange: function () {
            this.$emit("change", { target: { value: this.displayValue } });
          },
          increment: function () {
            if (this.max) {
              if (!(this.displayValue < this.max)) return;
              this.displayValue++;
            } else this.displayValue++;
            this.emitFakeChange();
          },
          decrement: function () {
            if (this.min) {
              if (!(this.displayValue > this.min)) return;
              this.displayValue--;
            } else this.displayValue--;
            this.emitFakeChange();
          },
        },
        watch: {
          value: function () {
            this.displayValue = this.value;
          },
        },
      },
      Ua = Za,
      Fa = Object(b["a"])(Ua, Ba, za, !1, null, null, null),
      Na = Fa.exports;
    function Wa(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Ra(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Wa(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Wa(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Ga = {
        name: "PopularPostsThemeCustomizeControls",
        components: {
          PopularPostsSizeInput: Na,
          PopularPostsUpgradeOverlay: eo,
          colorPicker: Ia,
        },
        props: { name: String, themes: Object },
        data: function () {
          return {
            optionsName: this.name + "_options",
            text_theme_preview: Object(c["a"])("Theme Preview", "ga-premium"),
            text_dummy_p_1: Object(c["a"])(
              "Sartorial taxidermy venmo you probably haven't heard of them, tofu fingerstache ethical pickled hella ramps vice snackwave seitan typewriter tofu.",
              "ga-premium"
            ),
            text_dummy_p_2: Object(c["a"])(
              "Austin typewriter heirloom distillery twee migas wayfarers. Fingerstache master cleanse quinoa humblebrag, iPhone taxidermy snackwave seitan typewriter tofu organic affogato kitsch. Artisan",
              "ga-premium"
            ),
            text_color: Object(c["a"])("Color", "ga-premium"),
            text_size: Object(c["a"])("Size", "ga-premium"),
            text_title: Object(c["a"])("Title", "ga-premium"),
            text_label: Object(c["a"])("Label", "ga-premium"),
            text_background: Object(c["a"])("Background", "ga-premium"),
            text_border: Object(c["a"])("Border", "ga-premium"),
            text_icon: Object(c["a"])("Icon", "ga-premium"),
            text_customize_design: Object(c["a"])(
              "Customize Design",
              "ga-premium"
            ),
          };
        },
        computed: Ra(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            preview: "$_popularposts/theme_preview_inline",
          }),
          {
            active: function () {
              return this.preview ? this.preview : this.settings[this.name];
            },
            themeOptions: function () {
              return !!this.active && this.themes[this.active].styles;
            },
            themeClass: function () {
              return (
                "monsterinsights-inline-popular-posts-widget monsterinsights-inline-popular-posts-" +
                this.active
              );
            },
            renderCssClass: function () {
              var t = "monsterinsights-pp-inline-theme-controls";
              return (
                this.themeAvailable || (t += " monsterinsights-pp-blurred"), t
              );
            },
            themeAvailable: function () {
              return (
                !!this.themes[this.active] &&
                Zn["a"].isThemeAvailable(this.themes[this.active].level)
              );
            },
          }
        ),
        methods: {
          getThemeOption: function (t, e) {
            return this.themeOptions[t][e] && this.themeOptions[t][e].default
              ? this.themeOptions[t][e].default
              : this.themeOptions[t][e];
          },
          updateColor: fe()(function (t, e, s) {
            this.saveSetting(t, e, s);
          }, 100),
          updateOption: function (t, e, s) {
            this.saveSetting(t, e, s.target.value);
          },
          saveSetting: function (t, e, s) {
            var i = this,
              n = {
                type: "inline",
                theme: this.active,
                object: t,
                key: e,
                value: s,
              };
            this.$mi_saving_toast({}),
              this.$store
                .dispatch("$_popularposts/updateThemeSetting", n)
                .then(function (t) {
                  t.success ? i.$mi_success_toast({}) : i.$mi_error_toast({});
                });
          },
          objectStyle: function (t, e, s) {
            var i,
              n = {};
            if ("undefined" === typeof this.themeOptions[t]) return n;
            for (i = 0; i < e.length; i++) {
              var o = this.getThemeOption(t, e[i]),
                a = s[i];
              "fontSize" === a && (o += "px"), (n[a] = o);
            }
            return n;
          },
          getImageClass: function (t) {
            return "monsterinsights-bg-img " + t;
          },
        },
      },
      qa = Ga,
      Ya = Object(b["a"])(qa, $o, Ho, !1, null, null, null),
      Ka = Ya.exports,
      Xa = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-popular-posts-ga-settings" },
          [
            s("p", [
              s(
                "span",
                { staticClass: "monsterinsights-dark" },
                [
                  s("span", {
                    domProps: { textContent: t._s(t.text_automated) },
                  }),
                  s("popular-posts-pro-pill", { attrs: { level: "pro" } }),
                ],
                1
              ),
              s("br"),
              s("span", {
                domProps: { innerHTML: t._s(t.text_automated_description) },
              }),
            ]),
            t.canaccess
              ? [
                  s("settings-input-checkbox", {
                    attrs: {
                      auth_disabled: !1,
                      name: t.name,
                      label: t.text_add_top_5_ga,
                      tooltip: t.text_add_top_5_ga_tooltip,
                    },
                  }),
                  t.ga_enabled
                    ? [
                        s("p"),
                        s(
                          "p",
                          [
                            s("button", {
                              class: t.ga_check_button_class,
                              domProps: {
                                textContent: t._s(t.text_check_data),
                              },
                              on: { click: t.start_tracking },
                            }),
                            s("settings-info-tooltip", {
                              attrs: { content: t.text_check_ga_data },
                            }),
                          ],
                          1
                        ),
                      ]
                    : t._e(),
                ]
              : [
                  s("settings-input-checkbox", {
                    attrs: {
                      faux: !0,
                      default: !1,
                      faux_tooltip_off: t.text_needs_pro,
                      label: t.text_add_top_5_ga,
                      tooltip: t.text_add_top_5_ga_tooltip,
                    },
                  }),
                ],
          ],
          2
        );
      },
      Ja = [],
      Qa = (s("fb6a"), s("4925"));
    function tr(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function er(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? tr(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : tr(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var sr = {
        name: "PopularPostsGaInput",
        props: { name: String },
        components: {
          SettingsInfoTooltip: At["a"],
          SettingsInputCheckbox: R["a"],
          PopularPostsProPill: Qa["a"],
        },
        data: function () {
          return {
            checking_ga_data: !1,
            text_add_top_5_ga: Object(c["a"])(
              "Add Top 5 Posts from Google Analytics",
              "ga-premium"
            ),
            text_add_top_5_ga_tooltip: Object(c["a"])(
              "In order to load the top posts from Google Analytics you will need to enable the Custom Dimensions addon and set up the Post Type custom dimension in both MonsterInsights and Google Analytics settings. Please use the button below to confirm your configuration is correct.",
              "ga-premium"
            ),
            text_check_data: Object(c["a"])(
              "Test Automated Posts",
              "ga-premium"
            ),
            text_check_ga_data: Object(c["a"])(
              "Click this button to run a series of checks that will confirm your setup is completed to load Popular Posts from Google Analytics.",
              "ga-premium"
            ),
            text_automated: Object(c["a"])("Automated + Curated", "ga-premium"),
            text_automated_description: Object(c["d"])(
              Object(c["a"])(
                "Automatically add the top 5 Posts from the past 30 days to your Curated list of Posts using %1$sCustom Dimensions%2$s. Also requires Sort By - Curated to be selected. Setup steps can be found in our %3$sknowledge base%4$s.",
                "ga-premium"
              ),
              '<a href="#/conversions">',
              "</a>",
              '<a target="_blank" href="' +
                this.$getUrl(
                  "popular-posts",
                  "automated-ga",
                  "https://monsterinsights.com/docs/how-to-include-your-popular-posts-from-google-analytics/"
                ) +
                '">',
              "</a>"
            ),
            text_needs_pro_placeholder: Object(c["a"])(
              "Pro version is required. Your current license level is: %s",
              "ga-premium"
            ),
          };
        },
        computed: er(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            addons: "$_addons/addons",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            ga_enabled: function () {
              return !!this.settings[this.name] && this.settings[this.name];
            },
            ga_check_button_class: function () {
              var t = "monsterinsights-button monsterinsights-button-secondary";
              return (
                this.checking_ga_data &&
                  (t += " monsterinsights-button-disabled"),
                t
              );
            },
            licenseType: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            canaccess: function () {
              return Zn["a"].canaccess(this.licenseType);
            },
            text_needs_pro: function () {
              return this.sprintf(
                this.text_needs_pro_placeholder,
                this.ucfirst(this.licenseType)
              );
            },
          }
        ),
        methods: {
          sprintf: c["d"],
          ucfirst: function (t) {
            return t.charAt(0).toUpperCase() + t.slice(1);
          },
          start_tracking: function () {
            var t = this;
            (this.checking_ga_data = !0),
              this.$mi_loading_toast(
                Object(c["a"])("Verifying Popular Posts data", "ga-premium")
              );
            var e = new FormData();
            e.append("action", "monsterinsights_vue_grab_popular_posts_report"),
              e.append("nonce", i["a"].prototype.$mi.nonce),
              Ce.a.post(i["a"].prototype.$mi.ajax, e).then(function (e) {
                t.checking_ga_data = !1;
                var s = "",
                  i = t;
                if (e.data) {
                  if (e.data.success)
                    return t.$mi_success_toast({
                      toast: !1,
                      title: Object(c["a"])(
                        "Popular Posts data can be fetched correctly",
                        "ga-premium"
                      ),
                      text: Object(c["a"])(
                        "Please note: depending on when you set up the Custom Dimensions settings, it may take up to 7 days to see relevant Popular Posts data loading from Google Analytics.",
                        "ga-premium"
                      ),
                      position: "center",
                      timer: 0,
                      showConfirmButton: !0,
                      confirmButtonText: Object(c["a"])("Close", "ga-premium"),
                    });
                  if (
                    (e.data.data.message && (s = e.data.data.message),
                    e.data.data.footer &&
                      "install_addon" === e.data.data.footer)
                  ) {
                    var n = i.isAddonInstalled("dimensions")
                      ? Object(c["a"])("activate", "ga-premium")
                      : Object(c["a"])("install", "ga-premium");
                    return (
                      (s = Object(c["d"])(s, n)),
                      i
                        .$mi_error_toast({
                          toast: !1,
                          title: Object(c["a"])("Error", "ga-premium"),
                          text: s,
                          position: "center",
                          showConfirmButton: !0,
                          confirmButtonText: Object(c["a"])(
                            "Visit addons page",
                            "ga-premium"
                          ),
                        })
                        .then(function (t) {
                          t.value && (window.location = i.$mi.addons_url);
                        })
                    );
                  }
                  var o = e.data.data.footer ? e.data.data.footer : "";
                  if (o) {
                    var a = document.createElement("div");
                    (a.innerHTML = o),
                      t
                        .$mi_error_toast({
                          toast: !1,
                          title: Object(c["a"])("Error", "ga-premium"),
                          text: s,
                          position: "center",
                          showConfirmButton: !0,
                          confirmButtonText: a.firstChild.innerText,
                        })
                        .then(function (t) {
                          t.value && (window.location = a.firstChild.href);
                        });
                  } else
                    t.$mi_error_toast({
                      toast: !1,
                      title: Object(c["a"])("Error", "ga-premium"),
                      text: s,
                      position: "center",
                    });
                }
              });
          },
          isAddonInstalled: function (t) {
            return !!this.addons[t] && this.addons[t].installed;
          },
        },
      },
      ir = sr,
      nr = Object(b["a"])(ir, Xa, Ja, !1, null, null, null),
      or = nr.exports,
      ar = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "settings-input-checkbox",
          {
            attrs: {
              auth_disabled: !1,
              name: "popular_posts_inline_multiple_entries",
              label: t.text_multiple_entries,
            },
          },
          [
            s(
              "template",
              { slot: "collapsible" },
              [
                s("settings-input-number", {
                  attrs: {
                    auth_disabled: !1,
                    min: 1,
                    name: "popular_posts_inline_multiple_number",
                    description: t.text_total_number_desc,
                    label: t.text_total_number,
                    inline_desc: t.text_widgets,
                  },
                }),
                s("settings-input-number", {
                  attrs: {
                    auth_disabled: !1,
                    min: 1,
                    name: "popular_posts_inline_multiple_distance",
                    label: t.text_minimum_distance,
                    description: t.text_minimum_distance_desc,
                    inline_desc: t.text_words,
                  },
                }),
                s("settings-input-number", {
                  attrs: {
                    auth_disabled: !1,
                    min: 0,
                    name: "popular_posts_inline_multiple_min_words",
                    label: t.text_word_count,
                    description: t.text_word_count_desc,
                    inline_desc: t.text_words,
                  },
                }),
              ],
              1
            ),
          ],
          2
        );
      },
      rr = [],
      lr = {
        name: "PopularPostsMultipleEntries",
        components: { SettingsInputNumber: Je, SettingsInputCheckbox: R["a"] },
        data: function () {
          return {
            text_multiple_entries: Object(c["a"])(
              "Multiple Entries",
              "ga-premium"
            ),
            text_total_number: Object(c["a"])(
              "Total Number of Widgets to Show",
              "ga-premium"
            ),
            text_total_number_desc: Object(c["a"])(
              "Choose how many widgets will be placed in a single Post.",
              "ga-premium"
            ),
            text_minimum_distance: Object(c["a"])(
              "Minimum Distance Between Widgets",
              "ga-premium"
            ),
            text_minimum_distance_desc: Object(c["a"])(
              "Choose the distance between widgets.",
              "ga-premium"
            ),
            text_word_count: Object(c["a"])(
              "Minimum Word Count to Display Multiple Widgets",
              "ga-premium"
            ),
            text_word_count_desc: Object(c["a"])(
              "Choose the minimum word count for a Post to have multiple entries.",
              "ga-premium"
            ),
            text_widgets: Object(c["a"])("widgets", "ga-premium"),
            text_words: Object(c["a"])("words", "ga-premium"),
          };
        },
      },
      cr = lr,
      pr = Object(b["a"])(cr, ar, rr, !1, null, null, null),
      ur = pr.exports,
      mr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-loading-spinner-inline" },
          [
            t._m(0),
            t.text
              ? s("h3", { domProps: { innerHTML: t._s(t.text) } })
              : t._e(),
          ]
        );
      },
      dr = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            {
              staticClass:
                "monsterinsights-loading-spinner-inline-loader-holder",
            },
            [s("div", { staticClass: "monsterinsights-rotate-loader" })]
          );
        },
      ],
      gr = { name: "LoadingSpinnerInline", props: { text: String } },
      hr = gr,
      _r = (s("fdc0"), Object(b["a"])(hr, mr, dr, !1, null, null, null)),
      Cr = _r.exports,
      br = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("popular-posts-inline-placement", {
          attrs: {
            video_gutenberg: t.video_gutenberg,
            video_shortcode: t.video_shortcode,
          },
        });
      },
      fr = [],
      vr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-pp-manual-placement" },
          [
            s("div", { staticClass: "monsterinsights-separator" }),
            s("p", [
              s("span", {
                staticClass: "monsterinsights-dark",
                domProps: { textContent: t._s(t.text_display_method) },
              }),
              s("br"),
              s("span", {
                domProps: { textContent: t._s(t.text_display_method_desc) },
              }),
            ]),
            s(
              "div",
              { staticClass: "monsterinsights-pp-manual-placement-options" },
              t._l(t.options, function (e, i) {
                return s(
                  "div",
                  {
                    key: i,
                    class: t.selectorClass(i),
                    on: {
                      click: function (e) {
                        t.selected = i;
                      },
                    },
                  },
                  [
                    s("span", {
                      staticClass:
                        "monsterinsights-pp-manual-placement-options-icon",
                      domProps: { innerHTML: t._s(e.icon) },
                    }),
                    s("span", { domProps: { textContent: t._s(e.name) } }),
                  ]
                );
              }),
              0
            ),
            s("div", { staticClass: "monsterinsights-separator" }),
            "gutenberg" === t.selected
              ? s(
                  "div",
                  {
                    staticClass: "monsterinsights-pp-manual-placement-content",
                  },
                  [
                    s("p", [
                      s("span", {
                        staticClass: "monsterinsights-dark",
                        domProps: { textContent: t._s(t.text_gutenberg_title) },
                      }),
                      s("br"),
                      s("span", {
                        domProps: { textContent: t._s(t.text_gutenberg_desc) },
                      }),
                    ]),
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-manual-placement-content-columns",
                      },
                      [
                        s("popular-posts-video", {
                          attrs: {
                            video: t.video_gutenberg,
                            title: t.text_gutenberg_video,
                          },
                        }),
                        s(
                          "ul",
                          {
                            staticClass:
                              "monsterinsights-pp-manual-placement-content-steps",
                          },
                          t._l(t.text_gutenberg_steps, function (e, i) {
                            return s("li", {
                              key: i,
                              domProps: { innerHTML: t._s(e) },
                            });
                          }),
                          0
                        ),
                      ],
                      1
                    ),
                  ]
                )
              : t._e(),
            "shortcode" === t.selected
              ? s(
                  "div",
                  {
                    staticClass: "monsterinsights-pp-manual-placement-content",
                  },
                  [
                    s("p", [
                      s("span", {
                        staticClass: "monsterinsights-dark",
                        domProps: { textContent: t._s(t.text_shortcode_title) },
                      }),
                      s("br"),
                      s("span", {
                        domProps: { textContent: t._s(t.text_shortcode_desc) },
                      }),
                    ]),
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-manual-placement-content-columns",
                      },
                      [
                        s("popular-posts-video", {
                          attrs: {
                            video: t.video_shortcode,
                            title: t.text_shortcode_video,
                          },
                        }),
                        s(
                          "ul",
                          {
                            staticClass:
                              "monsterinsights-pp-manual-placement-content-steps",
                          },
                          [
                            s("li", [
                              s("p", [
                                s("span", {
                                  staticClass: "monsterinsights-dark",
                                  domProps: {
                                    textContent: t._s(t.text_shortcode),
                                  },
                                }),
                                s("br"),
                                s("span", {
                                  domProps: {
                                    textContent: t._s(t.text_shortcode_copy),
                                  },
                                }),
                              ]),
                              s("input", {
                                attrs: {
                                  id: "monsterinsights-shortcode-copy",
                                  type: "text",
                                  readonly: !0,
                                  value:
                                    "[monsterinsights_popular_posts_inline]",
                                },
                              }),
                              s("button", {
                                staticClass:
                                  "monsterinsights-button monsterinsights-button-secondary",
                                domProps: { textContent: t._s(t.text_copy) },
                                on: { click: t.copyToClipboard },
                              }),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                )
              : t._e(),
          ]
        );
      },
      xr = [],
      Or = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-pp-video-block" },
          [
            s(
              "div",
              {
                on: {
                  click: function (e) {
                    t.video_visible = !0;
                  },
                },
              },
              [
                t.icon
                  ? s(
                      "span",
                      { staticClass: "monsterinsights-pp-video-block-icon" },
                      [
                        s(
                          "svg",
                          {
                            attrs: {
                              width: "32",
                              height: "32",
                              viewBox: "0 0 32 32",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            s("path", {
                              attrs: {
                                d:
                                  "M4.64516 4.70968C7.78495 1.56989 11.5699 0 16 0C20.4301 0 24.1935 1.56989 27.2903 4.70968C30.4301 7.80645 32 11.5699 32 16C32 20.4301 30.4301 24.2151 27.2903 27.3548C24.1935 30.4516 20.4301 32 16 32C11.5699 32 7.78495 30.4516 4.64516 27.3548C1.54839 24.2151 0 20.4301 0 16C0 11.5699 1.54839 7.80645 4.64516 4.70968ZM23.4839 17.5484C23.7419 17.4194 23.9355 17.2258 24.0645 16.9677C24.1935 16.7097 24.2581 16.4516 24.2581 16.1935C24.2581 15.9355 24.1935 15.6774 24.0645 15.4194C23.9355 15.1613 23.7419 14.9677 23.4839 14.8387L12.129 7.93548C11.6129 7.63441 11.0968 7.63441 10.5806 7.93548C10.0645 8.23656 9.80645 8.68817 9.80645 9.29032V22.7097C9.80645 23.3118 10.0645 23.7634 10.5806 24.0645C11.0968 24.3656 11.6129 24.3656 12.129 24.0645L23.4839 17.5484Z",
                                fill: "white",
                              },
                            }),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
                t.image ? s("div", { class: t.imgClass }) : t._e(),
                t.title
                  ? s("p", { domProps: { innerHTML: t._s(t.title) } })
                  : t._e(),
              ]
            ),
            t.video_visible
              ? s(
                  "welcome-overlay",
                  {
                    on: {
                      close: function (e) {
                        t.video_visible = !1;
                      },
                    },
                  },
                  [
                    s("iframe", {
                      attrs: {
                        width: "1280",
                        height: "720",
                        src: t.videoSrc,
                        frameborder: "0",
                        allow:
                          "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                        allowfullscreen: "",
                      },
                    }),
                  ]
                )
              : t._e(),
          ],
          1
        );
      },
      yr = [],
      wr = s("a4cc"),
      jr = {
        name: "PopularPostsVideo",
        components: { WelcomeOverlay: wr["a"] },
        props: {
          video: String,
          image: String,
          title: String,
          icon: { type: Boolean, default: !0 },
        },
        data: function () {
          return {
            video_visible: !1,
            imgClass: "monsterinsights-bg-img" + this.image,
            videoSrc:
              this.video + "?autoplay=1&modestbranding=1&showinfo=0&rel=0&fs=1",
          };
        },
      },
      kr = jr,
      Pr = Object(b["a"])(kr, Or, yr, !1, null, null, null),
      Sr = Pr.exports,
      $r = {
        name: "PopularPostsInlinePlacement",
        components: { PopularPostsVideo: Sr },
        props: { video_gutenberg: String, video_shortcode: String },
        data: function () {
          return {
            selected: "gutenberg",
            options: {
              gutenberg: {
                icon:
                  '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 36.0001C28.8366 36.0001 36 28.8367 36 20.0001C36 11.1636 28.8366 4.00012 20 4.00012C11.1634 4.00012 4 11.1636 4 20.0001C4 28.8367 11.1634 36.0001 20 36.0001ZM20 40.0001C31.0457 40.0001 40 31.0458 40 20.0001C40 8.95443 31.0457 0.00012207 20 0.00012207C8.9543 0.00012207 0 8.95443 0 20.0001C0 31.0458 8.9543 40.0001 20 40.0001ZM19.9997 11.6669C19.0793 11.6669 18.3331 12.4131 18.3331 13.3336V18.3336H13.334C12.4135 18.3336 11.6673 19.0798 11.6673 20.0002C11.6673 20.9207 12.4135 21.6669 13.334 21.6669H18.3331V26.6669C18.3331 27.5874 19.0793 28.3336 19.9997 28.3336C20.9202 28.3336 21.6664 27.5874 21.6664 26.6669V21.6669H26.6673C27.5878 21.6669 28.334 20.9207 28.334 20.0002C28.334 19.0798 27.5878 18.3336 26.6673 18.3336H21.6664V13.3336C21.6664 12.4131 20.9202 11.6669 19.9997 11.6669Z" fill="#338EEF"/></svg>',
                name: "Gutenberg",
              },
              shortcode: {
                icon:
                  '<svg width="41" height="24" viewBox="0 0 41 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.63001 23.0821C10.8947 24.3062 12.9451 24.3062 14.2097 23.0821C15.4744 21.858 15.4744 19.8733 14.2097 18.6492L7.34018 11.9999L14.2094 5.35106C15.474 4.12696 15.474 2.1423 14.2094 0.918198C12.9447 -0.305904 10.8943 -0.305903 9.62962 0.918198L2.76045 7.56708L2.76041 7.56705L1.28645 8.99374C-0.428818 10.654 -0.428816 13.3458 1.28645 15.0061L9.63001 23.0821ZM30.4005 23.0821C29.1359 24.3062 27.0855 24.3062 25.8208 23.0821C24.5561 21.858 24.5561 19.8733 25.8208 18.6492L32.6904 11.9999L25.8212 5.35106C24.5565 4.12696 24.5565 2.1423 25.8212 0.918198C27.0858 -0.305904 29.1363 -0.305903 30.4009 0.918198L37.2701 7.56708L37.2701 7.56705L38.7441 8.99374C40.4594 10.654 40.4594 13.3458 38.7441 15.0061L30.4005 23.0821Z" fill="#338EEF"/></svg>',
                name: "Shortcode",
              },
            },
            text_display_method: Object(c["a"])("Display Method", "ga-premium"),
            text_display_method_desc: Object(c["a"])(
              "There are two ways to manual include the widget in your posts.",
              "ga-premium"
            ),
            text_gutenberg_title: Object(c["a"])(
              "Using the Gutenberg Block",
              "ga-premium"
            ),
            text_shortcode_title: Object(c["a"])(
              "Using the Shortcode",
              "ga-premium"
            ),
            text_gutenberg_desc: Object(c["a"])(
              "Learn how to insert the widget using Gutenberg blocks.",
              "ga-premium"
            ),
            text_shortcode_desc: Object(c["a"])(
              "Learn how to insert the widget using out Shortcode.",
              "ga-premium"
            ),
            text_gutenberg_video: Object(c["d"])(
              Object(c["a"])(
                "%1$sWatch Video%2$s - How to Add the Inline Popular Post widget using Gutenberg",
                "ga-premium"
              ),
              "<b>",
              "</b>"
            ),
            text_gutenberg_steps: [
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 1%2$s - Click the “Add Block” icon while editing a Post or Page.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 2%2$s - Search for “Inline Popular Posts by MonsterInsights”.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 3%2$s - Style the widget using the Block Settings sidebar.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
            ],
            text_shortcode: Object(c["a"])("Shortcode", "ga-premium"),
            text_shortcode_copy: Object(c["a"])(
              "Copy the shortcode and paste it into your Page and/or Post templates or using a shortcode plugin.",
              "ga-premium"
            ),
            text_copy: Object(c["a"])("Copy Shortcode", "ga-premium"),
            text_shortcode_video: Object(c["d"])(
              Object(c["a"])(
                "%1$sWatch Video%2$s - How to Add the Inline Popular Post widget using our Shortcode",
                "ga-premium"
              ),
              "<b>",
              "</b>"
            ),
          };
        },
        methods: {
          selectorClass: function (t) {
            var e = "monsterinsights-pp-manual-placement-option";
            return (
              (e += " monsterinsights-pp-manual-placement-option-" + t),
              t === this.selected &&
                (e += " monsterinsights-pp-manual-placement-option-active"),
              e
            );
          },
          copyToClipboard: function () {
            document.querySelector("#monsterinsights-shortcode-copy").select(),
              document.execCommand("copy");
          },
        },
      },
      Hr = $r,
      Ar = Object(b["a"])(Hr, vr, xr, !1, null, null, null),
      Lr = Ar.exports,
      Tr = {
        name: "InlinePlacement",
        components: { PopularPostsInlinePlacement: Lr },
        data: function () {
          return {
            video_gutenberg: "https://www.youtube.com/embed/E1nS0j2S9n4",
            video_shortcode: "https://www.youtube.com/embed/C_uq7hU_NRc",
          };
        },
      },
      Mr = Tr,
      Er = Object(b["a"])(Mr, br, fr, !1, null, null, null),
      Vr = Er.exports;
    function Dr(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Ir(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Dr(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Dr(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Br = {
        name: "PopularPostsInline",
        components: {
          InlinePlacement: Vr,
          LoadingSpinnerInline: Cr,
          PopularPostsMultipleEntries: ur,
          PopularPostsGaInput: or,
          PopularPostsThemeCustomizeControls: Ka,
          PopularPostsPostTypePicker: So,
          PopularPostsPostsPicker: Oo,
          PopularPostsSharedCount: go,
          SettingsInputNumber: Je,
          SettingsInputRadio: x["a"],
          PopularPostsThemePreview: ro,
          SettingsBlock: v,
          PopularPostsThemePicker: Gn,
        },
        data: function () {
          return {
            text_choose_theme: Object(c["a"])("Choose Theme", "ga-premium"),
            text_behavior: Object(c["a"])("Behavior", "ga-premium"),
            text_widget_styling: Object(c["a"])("Widget Styling", "ga-premium"),
            text_widget_styling_desc: Object(c["a"])(
              "Choose how you want to determine the colors, font sizes and spacing of the widget.",
              "ga-premium"
            ),
            text_sort_by: Object(c["a"])("Sort By", "ga-premium"),
            text_sort_by_description: Object(c["a"])(
              "Choose how you'd like the widget to determine your popular posts.",
              "ga-premium"
            ),
            text_placement: Object(c["a"])("Placement", "ga-premium"),
            text_placement_description: Object(c["a"])(
              "Choose how you'd like to place the widget.",
              "ga-premium"
            ),
            text_insert_after: Object(c["a"])("Insert After", "ga-premium"),
            text_insert_after_description: Object(c["a"])(
              "Choose where in the post body the widget will be placed.",
              "ga-premium"
            ),
            text_post_type: Object(c["a"])(
              "Include in Post Types",
              "ga-premium"
            ),
            text_exclude_posts: Object(c["a"])(
              "Exclude from specific posts",
              "ga-premium"
            ),
            text_post_type_description: Object(c["d"])(
              Object(c["a"])(
                "Choose which Post Types the widget %1$sWILL%2$s be placed.",
                "ga-premium"
              ),
              "<b>",
              "</b>"
            ),
            text_exclude_posts_description: Object(c["d"])(
              Object(c["a"])(
                "Choose from which Posts the widget %1$sWILL NOT%2$s be placed.",
                "ga-premium"
              ),
              "<b>",
              "</b>"
            ),
            text_customize_design: Object(c["a"])(
              "Customize Design",
              "ga-premium"
            ),
            text_loading_themes: Object(c["a"])("Loading Themes", "ga-premium"),
            text_words: Object(c["a"])("words", "ga-premium"),
            text_select_one_post: Object(c["a"])(
              "Please select at least one post to display.",
              "ga-premium"
            ),
            styling_options: [
              {
                value: "0",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Default Styles %1$s- As seen above.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "no_styles",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "No Styles %1$s- Use your own CSS.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
            ],
            sort_options: [
              {
                value: "comments",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Comments %1$s- Randomly rotate your most commented on posts from the past 30 days.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "sharedcount",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "SharedCount %1$s- Connect with your SharedCount account to determine popular posts by share count.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "curated",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Curated %1$s- Choose the posts which will randomly rotate in the widget.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
            ],
            placement_options: [
              {
                value: "automatic",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Automatic %1$s- The widget is automatically placed inside the post body.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "manual",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Manual %1$s- Manually place the widget using Gutenberg blocks or using our shortcode.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
            ],
          };
        },
        computed: Ir(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            addons: "$_addons/addons",
            theme_options: "$_popularposts/themes_inline",
          }),
          {
            placement_option: function () {
              return this.settings["popular_posts_inline_placement"]
                ? this.settings["popular_posts_inline_placement"]
                : "";
            },
            ga_enabled: function () {
              return (
                !!this.settings["popular_posts_inline_ga"] &&
                this.settings["popular_posts_inline_ga"]
              );
            },
            no_posts_selected: function () {
              return (
                !this.ga_enabled &&
                "curated" === this.settings["popular_posts_inline_sort"] &&
                "undefined" !==
                  typeof this.settings["popular_posts_inline_curated"] &&
                0 === this.settings["popular_posts_inline_curated"].length
              );
            },
          }
        ),
        mounted: function () {
          this.theme_options.hasOwnProperty("alpha") ||
            this.$store.dispatch("$_popularposts/getThemes", "inline");
        },
      },
      zr = Br,
      Zr = Object(b["a"])(zr, Dn, In, !1, null, null, null),
      Ur = Zr.exports,
      Fr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "monsterinsights-settings-content monsterinsights-settings-content-pp-widget",
          },
          [
            s(
              "settings-block",
              {
                attrs: {
                  title: t.text_choose_theme,
                  icon: "monstericon-search",
                },
              },
              [
                t.theme_options.hasOwnProperty("alpha")
                  ? s("popular-posts-theme-picker", {
                      attrs: {
                        options: t.theme_options,
                        name: "popular_posts_widget_theme",
                        type: "widget",
                      },
                    })
                  : s("loading-spinner-inline", {
                      attrs: { text: t.text_loading_themes },
                    }),
                t.theme_options.hasOwnProperty("alpha")
                  ? s("div", { staticClass: "monsterinsights-separator" })
                  : t._e(),
                t.theme_options.hasOwnProperty("alpha")
                  ? s("popular-posts-widget-theme-preview", {
                      attrs: {
                        name: "popular_posts_widget_theme",
                        themes: t.theme_options,
                      },
                    })
                  : t._e(),
              ],
              1
            ),
            t.theme_options.hasOwnProperty("alpha")
              ? s("popular-posts-widget-theme-customize", {
                  attrs: {
                    themes: t.theme_options,
                    name: "popular_posts_widget_theme",
                  },
                })
              : t._e(),
            s(
              "settings-block",
              {
                attrs: {
                  title: t.text_behavior,
                  icon: "monstericon-mouse-pointer",
                },
              },
              [
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_widget_styling) },
                  }),
                  s("br"),
                  s("span", {
                    domProps: { textContent: t._s(t.text_widget_styling_desc) },
                  }),
                ]),
                s("settings-input-radio", {
                  attrs: {
                    auth_disabled: !1,
                    options: t.styling_options,
                    name: "popular_posts_widget_styling",
                  },
                }),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_sort_by) },
                  }),
                  s("br"),
                  s("span", {
                    domProps: { textContent: t._s(t.text_sort_by_description) },
                  }),
                ]),
                s(
                  "settings-input-radio",
                  {
                    attrs: {
                      auth_disabled: !1,
                      options: t.sort_options,
                      name: "popular_posts_widget_sort",
                    },
                  },
                  [
                    s(
                      "template",
                      { slot: "sharedcount" },
                      [s("popular-posts-shared-count")],
                      1
                    ),
                    s(
                      "template",
                      { slot: "curated" },
                      [
                        s("popular-posts-posts-picker", {
                          attrs: { name: "popular_posts_widget_curated" },
                        }),
                      ],
                      1
                    ),
                  ],
                  2
                ),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("PopularPostsGaInput", {
                  attrs: { name: "popular_posts_widget_ga" },
                }),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_widget_title) },
                  }),
                  s("br"),
                  s("span", {
                    domProps: { textContent: t._s(t.text_widget_title_desc) },
                  }),
                ]),
                s("settings-input-checkbox", {
                  attrs: {
                    auth_disabled: !1,
                    name: "popular_posts_widget_title",
                    label: t.text_display_title,
                  },
                }),
                t.settings["popular_posts_widget_title"]
                  ? s(
                      "div",
                      { staticClass: "monsterinsights-input-text-small" },
                      [
                        s("settings-input-text", {
                          attrs: {
                            auth_disabled: !1,
                            name: "popular_posts_widget_title_text",
                          },
                        }),
                      ],
                      1
                    )
                  : t._e(),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("popular-posts-post-type-picker", {
                  attrs: {
                    name: "popular_posts_widget_post_types",
                    label: t.text_post_type,
                    description: t.text_post_type_description,
                  },
                }),
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_exclude_posts) },
                  }),
                  s("br"),
                  s("span", {
                    domProps: {
                      innerHTML: t._s(t.text_exclude_posts_description),
                    },
                  }),
                ]),
                s("popular-posts-posts-picker", {
                  attrs: { name: "popular_posts_widget_exclude_posts" },
                }),
                s("popular-posts-widget-category"),
                s("widget-placement"),
              ],
              1
            ),
          ],
          1
        );
      },
      Nr = [],
      Wr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-pp-widget-theme-preview" },
          [
            s("h3", { domProps: { textContent: t._s(t.text_theme_preview) } }),
            t.themeOptions
              ? s("div", { class: t.renderCssClass }, [
                  s(
                    "div",
                    {
                      staticClass:
                        "monsterinsights-pp-widget-theme-preview-width",
                    },
                    [
                      s(
                        "div",
                        { staticClass: "monsterinsights-buttons-toggle" },
                        [
                          s("button", {
                            class: t.themeWidthButtonClass("wide"),
                            domProps: { textContent: t._s(t.text_wide) },
                            on: {
                              click: function (e) {
                                e.stopPropagation(), (t.preview_width = "wide");
                              },
                            },
                          }),
                          s("button", {
                            class: t.themeWidthButtonClass("narrow"),
                            domProps: { textContent: t._s(t.text_narrow) },
                            on: {
                              click: function (e) {
                                e.stopPropagation(),
                                  (t.preview_width = "narrow");
                              },
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                  s("div", { class: t.outputClass }, [
                    s("div", { staticClass: "monsterinsights-dummy-text" }, [
                      "wide" === t.preview_width
                        ? s("p", {
                            domProps: { textContent: t._s(t.text_dummy_p_1) },
                          })
                        : t._e(),
                      "narrow" === t.preview_width
                        ? s("p", {
                            domProps: { textContent: t._s(t.text_dummy_p_2) },
                          })
                        : t._e(),
                      "narrow" === t.preview_width
                        ? s("p", {
                            domProps: { textContent: t._s(t.text_dummy_p_3) },
                          })
                        : t._e(),
                    ]),
                    s("div", { class: t.themeClass }, [
                      t.themeList
                        ? s(
                            "ul",
                            {
                              staticClass:
                                "monsterinsights-widget-popular-posts-list",
                            },
                            t._l(t.getItems, function (e, i) {
                              return s(
                                "li",
                                {
                                  key: i,
                                  style: t.objectStyle(
                                    "background",
                                    ["color", "border"],
                                    ["background", "borderColor"]
                                  ),
                                },
                                [
                                  t.themeList.images && t.themeList.images[i]
                                    ? s("div", {
                                        class: t.imgClass(
                                          t.themeList.images[i]
                                        ),
                                      })
                                    : t._e(),
                                  s(
                                    "div",
                                    {
                                      staticClass:
                                        "monsterinsights-widget-popular-posts-text",
                                    },
                                    [
                                      t.themeOptions.label
                                        ? s("span", {
                                            staticClass:
                                              "monsterinsights-widget-popular-posts-label",
                                            style: t.objectStyle(
                                              "label",
                                              ["color", "background"],
                                              ["color", "background"]
                                            ),
                                            domProps: {
                                              textContent: t._s(
                                                t.getThemeOption(
                                                  "label",
                                                  "text"
                                                )
                                              ),
                                            },
                                          })
                                        : t._e(),
                                      s("a", {
                                        staticClass:
                                          "monsterinsights-widget-popular-posts-title",
                                        style: t.objectStyle(
                                          "title",
                                          ["color", "size"],
                                          ["color", "fontSize"]
                                        ),
                                        domProps: { textContent: t._s(e) },
                                      }),
                                      t.themeOptions.meta
                                        ? s(
                                            "div",
                                            {
                                              staticClass:
                                                "monsterinsights-widget-popular-posts-meta",
                                              style: t.objectStyle(
                                                "meta",
                                                ["color", "size"],
                                                ["color", "fontSize"]
                                              ),
                                            },
                                            [
                                              t.themeOptions.meta.author &&
                                              "off" !==
                                                t.getThemeOption(
                                                  "meta",
                                                  "author"
                                                )
                                                ? s(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "monsterinsights-widget-popular-posts-author",
                                                    },
                                                    [t._v("by Aazim Akhtar")]
                                                  )
                                                : t._e(),
                                              "off" !==
                                                t.getThemeOption(
                                                  "meta",
                                                  "author"
                                                ) &&
                                              "off" !==
                                                t.getThemeOption("meta", "date")
                                                ? s("span", {
                                                    domProps: {
                                                      innerHTML: t._s(
                                                        t.themeOptions.meta
                                                          .separator
                                                      ),
                                                    },
                                                  })
                                                : t._e(),
                                              t.themeOptions.meta.date &&
                                              "off" !==
                                                t.getThemeOption("meta", "date")
                                                ? s("span", {
                                                    staticClass:
                                                      "monsterinsights-widget-popular-posts-date",
                                                    domProps: {
                                                      textContent: t._s(
                                                        t.text_yesterday
                                                      ),
                                                    },
                                                  })
                                                : t._e(),
                                            ]
                                          )
                                        : t._e(),
                                      t.themeOptions.meta &&
                                      t.themeOptions.meta.comments &&
                                      "off" !==
                                        t.getThemeOption("meta", "comments")
                                        ? s(
                                            "span",
                                            {
                                              staticClass:
                                                "monsterinsights-widget-popular-posts-comments",
                                              style: t.objectStyle(
                                                "comments",
                                                ["color"],
                                                ["color"]
                                              ),
                                            },
                                            [
                                              s(
                                                "svg",
                                                {
                                                  attrs: {
                                                    width: "13",
                                                    height: "12",
                                                    viewBox: "0 0 13 12",
                                                    fill: "none",
                                                    xmlns:
                                                      "http://www.w3.org/2000/svg",
                                                  },
                                                },
                                                [
                                                  s("path", {
                                                    style: t.objectStyle(
                                                      "comments",
                                                      ["color"],
                                                      ["fill"]
                                                    ),
                                                    attrs: {
                                                      d:
                                                        "M7.8251 1.25893C8.70332 2.09821 9.14243 3.10714 9.14243 4.28571C9.14243 5.46429 8.70332 6.47321 7.8251 7.3125C6.94689 8.15179 5.8887 8.57143 4.65056 8.57143C3.78674 8.57143 2.98771 8.34821 2.25346 7.90179C1.63439 8.34821 0.993719 8.57143 0.331456 8.57143C0.302662 8.57143 0.273868 8.5625 0.245074 8.54464C0.216279 8.50893 0.194684 8.47321 0.180287 8.4375C0.151493 8.34821 0.158691 8.26786 0.201882 8.19643C0.50422 7.83929 0.763366 7.35714 0.979321 6.75C0.432235 6.01786 0.158691 5.19643 0.158691 4.28571C0.158691 3.10714 0.5978 2.09821 1.47602 1.25893C2.35424 0.419643 3.41242 0 4.65056 0C5.8887 0 6.94689 0.419643 7.8251 1.25893ZM11.7771 10.1786C11.993 10.7857 12.2522 11.2679 12.5545 11.625C12.5977 11.6964 12.6049 11.7768 12.5761 11.8661C12.5473 11.9554 12.4969 12 12.425 12C11.7627 12 11.122 11.7768 10.5029 11.3304C9.7687 11.7768 8.96967 12 8.10585 12C7.18444 12 6.34941 11.7589 5.60076 11.2768C4.85212 10.7946 4.30503 10.1607 3.9595 9.375C4.21865 9.41071 4.449 9.42857 4.65056 9.42857C6.07587 9.42857 7.29241 8.92857 8.30021 7.92857C9.32239 6.91071 9.83349 5.69643 9.83349 4.28571C9.83349 4.08929 9.82629 3.91071 9.81189 3.75C10.6325 4.07143 11.302 4.59821 11.8203 5.33036C12.3386 6.04464 12.5977 6.83929 12.5977 7.71429C12.5977 8.625 12.3242 9.44643 11.7771 10.1786Z",
                                                    },
                                                  }),
                                                ]
                                              ),
                                              t._v(" 24 "),
                                            ]
                                          )
                                        : t._e(),
                                    ]
                                  ),
                                ]
                              );
                            }),
                            0
                          )
                        : t._e(),
                    ]),
                  ]),
                ])
              : t._e(),
            t.themeAvailable ? t._e() : s("popular-posts-upgrade-overlay"),
          ],
          1
        );
      },
      Rr = [];
    function Gr(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function qr(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Gr(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Gr(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Yr = {
        name: "PopularPostsWidgetThemePreview",
        components: { PopularPostsUpgradeOverlay: eo },
        props: { name: String, themes: Object },
        data: function () {
          return {
            optionsName: this.name + "_options",
            text_theme_preview: Object(c["a"])("Theme Preview", "ga-premium"),
            text_wide: Object(c["a"])("Wide", "ga-premium"),
            text_narrow: Object(c["a"])("Narrow", "ga-premium"),
            preview_width: "wide",
            text_dummy_p_1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a libero ante. Donec ac ligula a arcu facilisis consequat. Nam rhoncus vehicula erat. Mauris sed auctor nisi, sed facilisis elit. Vestibulum ultrices risus vitae euismod convallis. Mauris elementum vitae est quis ornare.",
            text_dummy_p_2:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a libero ante. Donec ac ligula a arcu facilisis consequat. Nam rhoncus vehicula erat. Mauris sed auctor nisi, sed facilisis elit. Vestibulum ultrices risus vitae euismod convallis. Mauris elementum vitae est quis ornare. In efficitur luctus lorem non porttitor. Pellentesque iaculis sapien non imperdiet cursus. Curabitur venenatis purus sed diam pulvinar accumsan. Suspendisse sapien justo, sollicitudin ut dignissim at, ultricies sed arcu.",
            text_dummy_p_3:
              "Pellentesque pharetra molestie felis, at vehicula enim consectetur sed. Vestibulum ut dolor non nunc tincidunt elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque elit elit, maximus vel pharetra sit amet, gravida eget enim.",
            text_yesterday: Object(c["a"])("Yesterday", "ga-premium"),
          };
        },
        computed: qr(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            preview: "$_popularposts/theme_preview_widget",
          }),
          {
            active: function () {
              return this.preview ? this.preview : this.settings[this.name];
            },
            columns: function () {
              return this.settings["popular_posts_widget_theme_columns"];
            },
            themeOptions: function () {
              return !!this.active && this.themes[this.active].styles;
            },
            themeList: function () {
              return !!this.active && this.themes[this.active].list;
            },
            themeClass: function () {
              return (
                "monsterinsights-widget-popular-posts-widget monsterinsights-widget-popular-posts-" +
                this.active +
                " monsterinsights-widget-popular-posts-columns-" +
                this.columns
              );
            },
            outputClass: function () {
              return (
                "monsterinsights-pp-widget-theme-preview-output monsterinsights-pp-widget-theme-preview-output-" +
                this.preview_width
              );
            },
            getItems: function () {
              return "wide" === this.preview_width
                ? this.themeList.items
                : this.themeList.items.slice(0, 3);
            },
            renderCssClass: function () {
              var t = "monsterinsights-pp-widget-theme-preview-render";
              return (
                this.themeAvailable || (t += " monsterinsights-pp-blurred"), t
              );
            },
            themeAvailable: function () {
              return (
                !!this.themes[this.active] &&
                Zn["a"].isThemeAvailable(this.themes[this.active].level)
              );
            },
          }
        ),
        methods: {
          getThemeOption: function (t, e) {
            var s = this.name + "_" + t + "_" + e;
            return "undefined" !== typeof this.settings[s] &&
              "" !== this.settings[s] &&
              !1 !== this.settings[s]
              ? this.settings[s]
              : this.themeOptions[t][e] && this.themeOptions[t][e].default
              ? this.themeOptions[t][e].default
              : this.themeOptions[t][e];
          },
          objectStyle: function (t, e, s) {
            var i,
              n = {};
            if ("undefined" === typeof this.themeOptions[t]) return n;
            for (i = 0; i < e.length; i++) {
              var o = this.getThemeOption(t, e[i]),
                a = s[i];
              "fontSize" === a && (o += "px"), (n[a] = o);
            }
            return n;
          },
          themeWidthButtonClass: function (t) {
            var e = "monsterinsights-button";
            return (
              t === this.preview_width &&
                (e += " monsterinsights-selected-interval"),
              e
            );
          },
          imgClass: function (t) {
            return (
              (t = t.replace(".jpg", "").replace(".png", "")),
              "monsterinsights-bg-img monsterinsights-pp-" + t
            );
          },
        },
      },
      Kr = Yr,
      Xr = Object(b["a"])(Kr, Wr, Rr, !1, null, null, null),
      Jr = Xr.exports,
      Qr = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "settings-block",
          {
            staticClass: "monsterinsights-pp-widget-controls",
            attrs: {
              title: t.text_customize_design,
              icon: "monstericon-eye-far",
            },
          },
          [
            s(
              "div",
              { class: t.renderCssClass },
              [
                s(
                  "div",
                  { staticClass: "monsterinsights-pp-inline-theme-controls" },
                  [
                    t.themeOptions.title
                      ? s(
                          "div",
                          {
                            staticClass:
                              "monsterinsights-pp-controls monsterinsights-pp-controls-title",
                          },
                          [
                            s("label", {
                              staticClass:
                                "monsterinsights-pp-controls-description",
                              domProps: { textContent: t._s(t.text_title) },
                            }),
                            s(
                              "div",
                              {
                                staticClass:
                                  "monsterinsights-pp-controls-inputs",
                              },
                              [
                                t.themeOptions.title.color
                                  ? s(
                                      "label",
                                      [
                                        s("span", {
                                          staticClass:
                                            "monsterinsights-pp-control-label",
                                          domProps: {
                                            textContent: t._s(t.text_color),
                                          },
                                        }),
                                        s("color-picker", {
                                          attrs: {
                                            color: t.getThemeOption(
                                              "title",
                                              "color"
                                            ),
                                          },
                                          on: {
                                            changeColor: function (e) {
                                              var s = arguments.length,
                                                i = Array(s);
                                              while (s--) i[s] = arguments[s];
                                              return t.updateColor.apply(
                                                void 0,
                                                ["title", "color"].concat(i)
                                              );
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : t._e(),
                                t.themeOptions.title.size
                                  ? s(
                                      "label",
                                      [
                                        s("span", {
                                          staticClass:
                                            "monsterinsights-pp-control-label",
                                          domProps: {
                                            textContent: t._s(t.text_size),
                                          },
                                        }),
                                        s("popular-posts-size-input", {
                                          attrs: {
                                            value: t.getThemeOption(
                                              "title",
                                              "size"
                                            ),
                                            min: 1,
                                          },
                                          on: {
                                            change: function (e) {
                                              var s = arguments.length,
                                                i = Array(s);
                                              while (s--) i[s] = arguments[s];
                                              return t.updateOption.apply(
                                                void 0,
                                                ["title", "size"].concat(i)
                                              );
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : t._e(),
                              ]
                            ),
                          ]
                        )
                      : t._e(),
                    t.themeOptions.label
                      ? s(
                          "div",
                          {
                            staticClass:
                              "monsterinsights-pp-controls monsterinsights-pp-controls-label",
                          },
                          [
                            s("label", {
                              staticClass:
                                "monsterinsights-pp-controls-description",
                              domProps: { textContent: t._s(t.text_label) },
                            }),
                            s(
                              "div",
                              {
                                staticClass:
                                  "monsterinsights-pp-controls-inputs",
                              },
                              [
                                t.themeOptions.label.color
                                  ? s("label", [
                                      s("span", {
                                        staticClass:
                                          "monsterinsights-pp-control-label",
                                        domProps: {
                                          textContent: t._s(t.text_color),
                                        },
                                      }),
                                      s(
                                        "span",
                                        {
                                          staticClass:
                                            "monsterinsights-pp-color-input-inline",
                                        },
                                        [
                                          s("color-picker", {
                                            attrs: {
                                              color: t.getThemeOption(
                                                "label",
                                                "color"
                                              ),
                                            },
                                            on: {
                                              changeColor: function (e) {
                                                var s = arguments.length,
                                                  i = Array(s);
                                                while (s--) i[s] = arguments[s];
                                                return t.updateColor.apply(
                                                  void 0,
                                                  ["label", "color"].concat(i)
                                                );
                                              },
                                            },
                                          }),
                                          s("input", {
                                            attrs: { type: "text" },
                                            domProps: {
                                              value: t.getThemeOption(
                                                "label",
                                                "text"
                                              ),
                                            },
                                            on: {
                                              change: function (e) {
                                                var s = arguments.length,
                                                  i = Array(s);
                                                while (s--) i[s] = arguments[s];
                                                return t.updateOption.apply(
                                                  void 0,
                                                  ["label", "text"].concat(i)
                                                );
                                              },
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ])
                                  : t._e(),
                                t.themeOptions.label.background
                                  ? s(
                                      "label",
                                      [
                                        s("span", {
                                          staticClass:
                                            "monsterinsights-pp-control-label",
                                          domProps: {
                                            textContent: t._s(
                                              t.text_background
                                            ),
                                          },
                                        }),
                                        s("color-picker", {
                                          attrs: {
                                            color: t.getThemeOption(
                                              "label",
                                              "background"
                                            ),
                                          },
                                          on: {
                                            changeColor: function (e) {
                                              var s = arguments.length,
                                                i = Array(s);
                                              while (s--) i[s] = arguments[s];
                                              return t.updateColor.apply(
                                                void 0,
                                                ["label", "background"].concat(
                                                  i
                                                )
                                              );
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : t._e(),
                              ]
                            ),
                          ]
                        )
                      : t._e(),
                    t.themeOptions.background
                      ? s(
                          "div",
                          {
                            staticClass:
                              "monsterinsights-pp-controls monsterinsights-pp-controls-background",
                          },
                          [
                            s("label", {
                              staticClass:
                                "monsterinsights-pp-controls-description",
                              domProps: {
                                textContent: t._s(t.text_background),
                              },
                            }),
                            s(
                              "div",
                              {
                                staticClass:
                                  "monsterinsights-pp-controls-inputs",
                              },
                              [
                                t.themeOptions.background.color
                                  ? s(
                                      "label",
                                      [
                                        s("span", {
                                          staticClass:
                                            "monsterinsights-pp-control-label",
                                          domProps: {
                                            textContent: t._s(t.text_color),
                                          },
                                        }),
                                        s("color-picker", {
                                          attrs: {
                                            color: t.getThemeOption(
                                              "background",
                                              "color"
                                            ),
                                          },
                                          on: {
                                            changeColor: function (e) {
                                              var s = arguments.length,
                                                i = Array(s);
                                              while (s--) i[s] = arguments[s];
                                              return t.updateColor.apply(
                                                void 0,
                                                ["background", "color"].concat(
                                                  i
                                                )
                                              );
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : t._e(),
                                t.themeOptions.background.border
                                  ? s(
                                      "label",
                                      [
                                        s("span", {
                                          staticClass:
                                            "monsterinsights-pp-control-label",
                                          domProps: {
                                            textContent: t._s(t.text_border),
                                          },
                                        }),
                                        s("color-picker", {
                                          attrs: {
                                            color: t.getThemeOption(
                                              "background",
                                              "border"
                                            ),
                                          },
                                          on: {
                                            changeColor: function (e) {
                                              var s = arguments.length,
                                                i = Array(s);
                                              while (s--) i[s] = arguments[s];
                                              return t.updateColor.apply(
                                                void 0,
                                                ["background", "border"].concat(
                                                  i
                                                )
                                              );
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : t._e(),
                              ]
                            ),
                          ]
                        )
                      : t._e(),
                    t.themeOptions.border
                      ? s(
                          "div",
                          {
                            staticClass:
                              "monsterinsights-pp-controls monsterinsights-pp-controls-border",
                          },
                          [
                            s("label", {
                              staticClass:
                                "monsterinsights-pp-controls-description",
                              domProps: { textContent: t._s(t.text_border) },
                            }),
                            s(
                              "div",
                              {
                                staticClass:
                                  "monsterinsights-pp-controls-inputs",
                              },
                              [
                                t.themeOptions.border.color
                                  ? s(
                                      "label",
                                      [
                                        s("span", {
                                          staticClass:
                                            "monsterinsights-pp-control-label",
                                          domProps: {
                                            textContent: t._s(
                                              t.themeOptions.border.color.label
                                                ? t.themeOptions.border.color
                                                    .label
                                                : t.text_color
                                            ),
                                          },
                                        }),
                                        s("color-picker", {
                                          attrs: {
                                            color: t.getThemeOption(
                                              "border",
                                              "color"
                                            ),
                                          },
                                          on: {
                                            changeColor: function (e) {
                                              var s = arguments.length,
                                                i = Array(s);
                                              while (s--) i[s] = arguments[s];
                                              return t.updateColor.apply(
                                                void 0,
                                                ["border", "color"].concat(i)
                                              );
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : t._e(),
                              ]
                            ),
                          ]
                        )
                      : t._e(),
                    t.themeOptions.meta
                      ? s(
                          "div",
                          {
                            staticClass:
                              "monsterinsights-pp-controls monsterinsights-pp-controls-border",
                          },
                          [
                            s("label", {
                              staticClass:
                                "monsterinsights-pp-controls-description",
                              domProps: { textContent: t._s(t.text_meta) },
                            }),
                            s(
                              "div",
                              {
                                staticClass:
                                  "monsterinsights-pp-controls-inputs",
                              },
                              [
                                t.themeOptions.meta.color
                                  ? s(
                                      "label",
                                      [
                                        s("span", {
                                          staticClass:
                                            "monsterinsights-pp-control-label",
                                          domProps: {
                                            textContent: t._s(t.text_color),
                                          },
                                        }),
                                        s("color-picker", {
                                          attrs: {
                                            color: t.getThemeOption(
                                              "meta",
                                              "color"
                                            ),
                                          },
                                          on: {
                                            changeColor: function (e) {
                                              var s = arguments.length,
                                                i = Array(s);
                                              while (s--) i[s] = arguments[s];
                                              return t.updateColor.apply(
                                                void 0,
                                                ["meta", "color"].concat(i)
                                              );
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : t._e(),
                                t.themeOptions.meta.size
                                  ? s(
                                      "label",
                                      [
                                        s("span", {
                                          staticClass:
                                            "monsterinsights-pp-control-label",
                                          domProps: {
                                            textContent: t._s(t.text_size),
                                          },
                                        }),
                                        s("popular-posts-size-input", {
                                          attrs: {
                                            value: t.getThemeOption(
                                              "meta",
                                              "size"
                                            ),
                                            min: 1,
                                          },
                                          on: {
                                            change: function (e) {
                                              var s = arguments.length,
                                                i = Array(s);
                                              while (s--) i[s] = arguments[s];
                                              return t.updateOption.apply(
                                                void 0,
                                                ["meta", "size"].concat(i)
                                              );
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : t._e(),
                              ]
                            ),
                          ]
                        )
                      : t._e(),
                    t.themeOptions.comments
                      ? s(
                          "div",
                          {
                            staticClass:
                              "monsterinsights-pp-controls monsterinsights-pp-controls-border",
                          },
                          [
                            s("label", {
                              staticClass:
                                "monsterinsights-pp-controls-description",
                              domProps: { textContent: t._s(t.text_comments) },
                            }),
                            s(
                              "div",
                              {
                                staticClass:
                                  "monsterinsights-pp-controls-inputs",
                              },
                              [
                                t.themeOptions.comments.color
                                  ? s(
                                      "label",
                                      [
                                        s("span", {
                                          staticClass:
                                            "monsterinsights-pp-control-label",
                                          domProps: {
                                            textContent: t._s(t.text_color),
                                          },
                                        }),
                                        s("color-picker", {
                                          attrs: {
                                            color: t.getThemeOption(
                                              "comments",
                                              "color"
                                            ),
                                          },
                                          on: {
                                            changeColor: function (e) {
                                              var s = arguments.length,
                                                i = Array(s);
                                              while (s--) i[s] = arguments[s];
                                              return t.updateColor.apply(
                                                void 0,
                                                ["comments", "color"].concat(i)
                                              );
                                            },
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : t._e(),
                              ]
                            ),
                          ]
                        )
                      : t._e(),
                  ]
                ),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_wide_label) },
                  }),
                  s("br"),
                  s("span", {
                    domProps: { textContent: t._s(t.text_wide_desc) },
                  }),
                ]),
                s("settings-input-radio", {
                  staticClass: "monsterinsights-wide-column-options",
                  attrs: {
                    auth_disabled: !1,
                    options: t.wide_columns,
                    name: "popular_posts_widget_theme_columns",
                  },
                  on: { updated: t.updateCount },
                }),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_post_count) },
                  }),
                  s("br"),
                  s("span", {
                    domProps: { textContent: t._s(t.text_post_count_desc) },
                  }),
                ]),
                s("settings-input-select-simple", {
                  ref: "post_count",
                  attrs: {
                    auth_disabled: !1,
                    name: "popular_posts_widget_count",
                    options: t.options_count,
                  },
                }),
                t.themeOptions.meta
                  ? s("div", { staticClass: "monsterinsights-separator" })
                  : t._e(),
                t.themeOptions.meta
                  ? s("p", [
                      s("span", {
                        staticClass: "monsterinsights-dark",
                        domProps: { textContent: t._s(t.text_display_options) },
                      }),
                      s("br"),
                      s("span", {
                        domProps: {
                          textContent: t._s(t.text_display_options_desc),
                        },
                      }),
                    ])
                  : t._e(),
                t.themeOptions.meta
                  ? s(
                      "div",
                      { staticClass: "monsterinsights-inline-checkboxes" },
                      [
                        t.themeOptions.meta && t.themeOptions.meta.author
                          ? s("settings-input-checkbox", {
                              attrs: {
                                auth_disabled: !1,
                                valueOff: "off",
                                valueOn: "on",
                                label: t.text_display_author,
                                name: "popular_posts_widget_theme_meta_author",
                              },
                            })
                          : t._e(),
                        t.themeOptions.meta && t.themeOptions.meta.date
                          ? s("settings-input-checkbox", {
                              attrs: {
                                auth_disabled: !1,
                                valueOff: "off",
                                valueOn: "on",
                                label: t.text_display_date,
                                name: "popular_posts_widget_theme_meta_date",
                              },
                            })
                          : t._e(),
                        t.themeOptions.meta && t.themeOptions.meta.comments
                          ? s("settings-input-checkbox", {
                              attrs: {
                                auth_disabled: !1,
                                valueOff: "off",
                                valueOn: "on",
                                label: t.text_display_comments,
                                name:
                                  "popular_posts_widget_theme_meta_comments",
                              },
                            })
                          : t._e(),
                      ],
                      1
                    )
                  : t._e(),
              ],
              1
            ),
            t.themeAvailable ? t._e() : s("popular-posts-upgrade-overlay"),
          ],
          1
        );
      },
      tl = [],
      el =
        (s("d81d"),
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "div",
            { staticClass: "monsterinsights-settings-input-select-simple" },
            [
              s(
                "select",
                {
                  staticClass: "monsterinsights-settings-select",
                  attrs: { name: t.name, autocomplete: "off" },
                  on: { change: t.updateSetting },
                },
                t._l(t.options, function (e) {
                  return s("option", {
                    key: e.value,
                    domProps: {
                      value: e.value,
                      selected: t.isChecked(e.value),
                      textContent: t._s(e.label),
                    },
                  });
                }),
                0
              ),
            ]
          );
        }),
      sl = [];
    function il(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function nl(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? il(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : il(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var ol = {
        name: "SettingsInputSelectSimple",
        props: {
          options: Array,
          name: String,
          auth_disabled: { type: Boolean, default: !0 },
        },
        data: function () {
          return { is_loading: !1, has_error: !1 };
        },
        computed: nl(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            auth: "$_auth/auth",
          }),
          {
            has_ua: function () {
              var t = this.auth.network_ua
                ? this.auth.network_ua
                : this.auth.ua;
              return (
                t ||
                  (t = this.auth.network_manual_ua
                    ? this.auth.network_manual_ua
                    : this.auth.manual_ua),
                "" !== t
              );
            },
            disabled: function () {
              return !!this.auth_disabled && !this.has_ua;
            },
          }
        ),
        methods: {
          updateSetting: function (t) {
            var e = this;
            if (this.disabled) return !1;
            this.$mi_saving_toast({}),
              this.$store
                .dispatch("$_settings/updateSettings", {
                  name: this.name,
                  value: t.target.value,
                })
                .then(function (t) {
                  t.success ? e.$mi_success_toast({}) : e.$mi_error_toast({});
                });
          },
          isChecked: function (t) {
            return this.settings[this.name]
              ? t == this.settings[this.name]
              : t === this.options[0].value;
          },
        },
      },
      al = ol,
      rl = Object(b["a"])(al, el, sl, !1, null, null, null),
      ll = rl.exports;
    function cl(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function pl(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? cl(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : cl(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var ul = {
        name: "PopularPostsWidgetThemeCustomize",
        components: {
          PopularPostsSizeInput: Na,
          PopularPostsUpgradeOverlay: eo,
          SettingsInputSelectSimple: ll,
          SettingsInputCheckbox: R["a"],
          SettingsInputRadio: x["a"],
          SettingsBlock: v,
          colorPicker: Ia,
        },
        props: { name: String, themes: Object },
        data: function () {
          return {
            text_customize_design: Object(c["a"])(
              "Customize Design",
              "ga-premium"
            ),
            text_title: Object(c["a"])("Title", "ga-premium"),
            text_color: Object(c["a"])("Color", "ga-premium"),
            text_size: Object(c["a"])("Size", "ga-premium"),
            text_border: Object(c["a"])("Border", "ga-premium"),
            text_meta: Object(c["a"])("Author/Date", "ga-premium"),
            text_label: Object(c["a"])("Label", "ga-premium"),
            text_background: Object(c["a"])("Background", "ga-premium"),
            text_wide_label: Object(c["a"])(
              "Wide-Layout Options",
              "ga-premium"
            ),
            text_wide_desc: Object(c["a"])(
              "Adjust the number of columns displayed when the widget is placed in a wide container.",
              "ga-premium"
            ),
            text_display_options: Object(c["a"])(
              "Display Options",
              "ga-premium"
            ),
            text_display_options_desc: Object(c["a"])(
              "Choose which content you would like displayed in the widget.",
              "ga-premium"
            ),
            text_display_author: Object(c["a"])("Display Author", "ga-premium"),
            text_display_date: Object(c["a"])("Display Date", "ga-premium"),
            text_display_comments: Object(c["a"])(
              "Display Comments",
              "ga-premium"
            ),
            text_comments: Object(c["a"])("Comments", "ga-premium"),
            text_post_count: Object(c["a"])("Post Count", "ga-premium"),
            text_post_count_desc: Object(c["a"])(
              "Choose how many posts you’d like displayed in the widget.",
              "ga-premium"
            ),
            wide_columns: [
              {
                label:
                  '<span class="monsterinsights-wide-column monsterinsights-wide-column-three"><span></span><span></span><span></span><span></span><span></span><span></span></span>',
                value: "3",
              },
              {
                label:
                  '<span class="monsterinsights-wide-column monsterinsights-wide-column-two"><span></span><span></span><span></span><span></span></span>',
                value: "2",
              },
              {
                label:
                  '<span class="monsterinsights-wide-column monsterinsights-wide-column-one"><span></span><span></span></span>',
                value: "1",
              },
            ],
          };
        },
        computed: pl(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            preview: "$_popularposts/theme_preview_widget",
          }),
          {
            active: function () {
              return this.preview ? this.preview : this.settings[this.name];
            },
            themeOptions: function () {
              return !!this.active && this.themes[this.active].styles;
            },
            options_count: function () {
              var t = this.settings["popular_posts_widget_theme_columns"],
                e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
              return (
                2 === parseInt(t, 10) && (e = [2, 4, 6, 8, 10]),
                3 === parseInt(t, 10) && (e = [3, 6, 9]),
                (e = e.map(function (t) {
                  return { value: t, label: t };
                })),
                e
              );
            },
            renderCssClass: function () {
              var t = "";
              return (
                this.themeAvailable || (t += " monsterinsights-pp-blurred"), t
              );
            },
            themeAvailable: function () {
              return (
                !!this.themes[this.active] &&
                Zn["a"].isThemeAvailable(this.themes[this.active].level)
              );
            },
          }
        ),
        methods: {
          getThemeOption: function (t, e) {
            return this.themeOptions[t][e] && this.themeOptions[t][e].default
              ? this.themeOptions[t][e].default
              : this.themeOptions[t][e];
          },
          updateColor: fe()(function (t, e, s) {
            this.saveSetting(t, e, s);
          }, 100),
          updateOption: function (t, e, s) {
            this.saveSetting(t, e, s.target.value);
          },
          updateCount: function (t) {
            this.dispatchSave("popular_posts_widget_count", t);
          },
          saveSetting: function (t, e, s) {
            var i = this,
              n = {
                type: "widget",
                theme: this.active,
                object: t,
                key: e,
                value: s,
              };
            this.$mi_saving_toast({}),
              this.$store
                .dispatch("$_popularposts/updateThemeSetting", n)
                .then(function (t) {
                  t.success ? i.$mi_success_toast({}) : i.$mi_error_toast({});
                });
          },
          dispatchSave: function (t, e) {
            var s = this;
            this.$mi_saving_toast({}),
              this.$store
                .dispatch("$_settings/updateSettings", { name: t, value: e })
                .then(function (t) {
                  t.success ? s.$mi_success_toast({}) : s.$mi_error_toast({});
                });
          },
        },
      },
      ml = ul,
      dl = Object(b["a"])(ml, Qr, tl, !1, null, null, null),
      gl = dl.exports,
      hl = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-popular-posts-widget-category" },
          [
            s("p", [
              s("span", {
                staticClass: "monsterinsights-dark",
                domProps: { textContent: t._s(t.text_exclude_categories) },
              }),
              s("br"),
              s("span", {
                domProps: { innerHTML: t._s(t.text_only_show_posts_desc) },
              }),
            ]),
            s("popular-posts-taxonomy-picker", {
              attrs: {
                taxonomy: "category",
                name: "popular_posts_widget_categories",
              },
            }),
          ],
          1
        );
      },
      _l = [],
      Cl = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-pp-posts-picker" },
          [
            s(
              "multiselect",
              {
                attrs: {
                  "clear-on-select": !1,
                  "close-on-select": !0,
                  "internal-search": !1,
                  loading: t.isLoading,
                  "max-height": 600,
                  options: t.pages,
                  placeholder: t.text_search_pages_placeholder,
                  searchable: !0,
                  "show-no-results": !0,
                  showLabels: !1,
                  label: "text",
                  "track-by": "id",
                  multiple: !0,
                },
                on: { "search-change": t.findPages },
                model: {
                  value: t.posts,
                  callback: function (e) {
                    t.posts = e;
                  },
                  expression: "posts",
                },
              },
              [
                s("span", {
                  attrs: { slot: "noResult" },
                  domProps: {
                    textContent: t._s(t.text_search_pages_not_found),
                  },
                  slot: "noResult",
                }),
                s("span", {
                  attrs: { slot: "noOptions" },
                  domProps: { textContent: t._s(t.text_search_no_options) },
                  slot: "noOptions",
                }),
              ]
            ),
          ],
          1
        );
      },
      bl = [];
    function fl(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function vl(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? fl(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : fl(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var xl = {
        name: "PopularPostsTaxonomyPicker",
        components: { Multiselect: he.a },
        props: {
          name: String,
          taxonomy: { default: "category", type: String },
          placeholder: {
            default: Object(c["a"])("Select categories/search", "ga-premium"),
            type: String,
          },
        },
        data: function () {
          return {
            pages: [],
            isLoading: !1,
            error_notice: "",
            text_search_pages_placeholder: this.placeholder,
            text_search_pages_not_found: Object(c["a"])(
              "Oops! No categories found.",
              "ga-premium"
            ),
            text_search_no_options: Object(c["a"])(
              "Search by category name",
              "ga-premium"
            ),
          };
        },
        computed: vl({}, Object(l["b"])({ settings: "$_settings/settings" }), {
          posts: {
            get: function () {
              return (
                this.settings[this.name] ||
                  i["a"].set(this.settings, this.name, []),
                JSON.parse(JSON.stringify(this.settings[this.name]))
              );
            },
            set: function (t) {
              return (
                i["a"].set(this.settings, this.name, t), this.updateSetting(), t
              );
            },
          },
        }),
        methods: {
          findPages: fe()(function (t) {
            var e = this;
            e.isLoading = !0;
            var s = new FormData();
            s.append("nonce", i["a"].prototype.$mi.nonce),
              s.append("action", "monsterinsights_get_terms"),
              s.append("taxonomy", this.taxonomy),
              s.append("keyword", t),
              Ce.a
                .post(this.$mi.ajax, s)
                .then(function (t) {
                  (e.pages = t.data.data), (e.isLoading = !1);
                })
                .catch(function () {
                  (e.isLoading = !1),
                    i["a"].prototype.$mi_error_toast({
                      title: Object(c["a"])(
                        "Can't load categories.",
                        "ga-premium"
                      ),
                    });
                });
          }, 300),
          updateSetting: function () {
            var t = this;
            if (((this.isLoading = !1), this.disabled)) return !1;
            this.$mi_saving_toast({}),
              this.$store
                .dispatch("$_settings/updateSettings", {
                  name: this.name,
                  value: this.posts,
                })
                .then(function (e) {
                  e.success ? t.$mi_success_toast({}) : t.$mi_error_toast({});
                }),
              (this.error_notice = "");
          },
        },
      },
      Ol = xl,
      yl = Object(b["a"])(Ol, Cl, bl, !1, null, null, null),
      wl = yl.exports,
      jl = {
        components: { PopularPostsTaxonomyPicker: wl },
        data: function () {
          return {
            text_exclude_categories: Object(c["a"])(
              "Only Show Posts from These Categories",
              "ga-premium"
            ),
            text_only_show_posts_desc: Object(c["a"])(
              "Choose from which categories posts will be displayed in the widget. All categories will be used if left empty.",
              "ga-premium"
            ),
          };
        },
      },
      kl = jl,
      Pl = Object(b["a"])(kl, hl, _l, !1, null, null, null),
      Sl = Pl.exports,
      $l = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("popular-posts-widget-placement", {
          attrs: {
            video_gutenberg: t.video_gutenberg,
            video_shortcode: t.video_shortcode,
            video_sidebar: t.video_sidebar,
          },
        });
      },
      Hl = [],
      Al = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-pp-manual-placement" },
          [
            s("div", { staticClass: "monsterinsights-separator" }),
            s("p", [
              s("span", {
                staticClass: "monsterinsights-dark",
                domProps: { textContent: t._s(t.text_embed_options) },
              }),
              s("br"),
              s("span", {
                domProps: { textContent: t._s(t.text_embed_options_desc) },
              }),
            ]),
            s(
              "div",
              { staticClass: "monsterinsights-pp-placement-options-accordion" },
              [
                s(
                  "div",
                  { staticClass: "monsterinsights-pp-accordion-item-title" },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-accordion-item-title-top",
                      },
                      [
                        s(
                          "svg",
                          {
                            attrs: {
                              width: "16",
                              height: "14",
                              viewBox: "0 0 16 14",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            s("path", {
                              attrs: {
                                d:
                                  "M12.8023 5.32388L12.6024 5.6892C12.5192 5.84576 12.3943 5.89794 12.2277 5.84576C11.9279 5.72399 11.6615 5.55873 11.4283 5.34998C11.2951 5.22821 11.2701 5.08904 11.3534 4.93248L11.5532 4.56717C11.3867 4.35842 11.2534 4.12358 11.1535 3.86264H10.7538C10.5706 3.86264 10.4707 3.76697 10.454 3.57561C10.3874 3.26249 10.3874 2.94067 10.454 2.61015C10.4707 2.43619 10.5706 2.34921 10.7538 2.34921H11.1535C11.2534 2.08828 11.3867 1.85344 11.5532 1.64469L11.3534 1.25328C11.2701 1.09672 11.2951 0.966253 11.4283 0.861878C11.6615 0.653129 11.9279 0.48787 12.2277 0.3661C12.3943 0.296517 12.5192 0.340006 12.6024 0.496568L12.8023 0.887972C13.0688 0.835785 13.3353 0.835785 13.6017 0.887972L13.8016 0.496568C13.8849 0.340006 14.0098 0.296517 14.1763 0.3661C14.4761 0.470474 14.7426 0.635734 14.9757 0.861878C15.109 0.966253 15.134 1.09672 15.0507 1.25328L14.8508 1.64469C15.0174 1.85344 15.1506 2.08828 15.2505 2.34921H15.6503C15.8335 2.34921 15.9334 2.43619 15.95 2.61015C16.0167 2.94067 16.0167 3.26249 15.95 3.57561C15.9334 3.76697 15.8335 3.86264 15.6503 3.86264H15.2505C15.1506 4.12358 15.0174 4.35842 14.8508 4.56717L15.0507 4.93248C15.134 5.10644 15.109 5.2456 14.9757 5.34998C14.7426 5.55873 14.4761 5.72399 14.1763 5.84576C14.0098 5.89794 13.8849 5.84576 13.8016 5.6892L13.6017 5.32388C13.3353 5.37607 13.0688 5.37607 12.8023 5.32388ZM12.5525 3.78436C12.8523 4.0279 13.1604 4.09749 13.4768 3.99311C13.7933 3.88874 13.9848 3.68869 14.0514 3.39296C14.1347 3.07983 14.0681 2.74932 13.8515 2.4014C13.5518 2.15786 13.2437 2.08828 12.9272 2.19265C12.6108 2.29703 12.4109 2.50578 12.3276 2.8189C12.261 3.11463 12.336 3.43645 12.5525 3.78436ZM9.65458 7.80278L10.504 8.24637C10.7871 8.42033 10.8704 8.67256 10.7538 9.00308C10.6039 9.45537 10.2541 10.0294 9.70454 10.7253C9.48803 10.9862 9.23821 11.0297 8.95508 10.8557L8.20562 10.4121C7.80591 10.7774 7.35623 11.0558 6.85659 11.2471V12.1343C6.85659 12.2735 6.80663 12.404 6.7067 12.5257C6.60677 12.6475 6.49019 12.7171 6.35695 12.7345C5.72408 12.8562 5.0912 12.8562 4.45832 12.7345C4.30843 12.7171 4.18352 12.6475 4.08359 12.5257C4.00032 12.404 3.95868 12.2735 3.95868 12.1343V11.2471C3.44239 11.0558 2.98439 10.7774 2.58467 10.4121L1.8602 10.8557C1.57707 11.0297 1.32725 10.9862 1.11074 10.7253C0.577788 10.0468 0.228041 9.47277 0.0614941 9.00308C-0.0550885 8.67256 0.0281848 8.42033 0.311314 8.24637L1.13572 7.80278C1.03579 7.24611 1.03579 6.69815 1.13572 6.15888L0.311314 5.71529C0.0115301 5.54133 -0.0717431 5.28909 0.0614941 4.95857C0.228041 4.48889 0.577788 3.91483 1.11074 3.2364C1.31059 2.97546 1.56041 2.93197 1.8602 3.10593L2.58467 3.52343C3.00104 3.15812 3.45904 2.88848 3.95868 2.71452V1.82734C3.95868 1.67078 4.00032 1.54031 4.08359 1.43594C4.18352 1.31417 4.30843 1.24458 4.45832 1.22719C5.0912 1.10542 5.72408 1.10542 6.35695 1.22719C6.42357 1.22719 6.48186 1.25328 6.53183 1.30547C6.59845 1.34026 6.65674 1.38375 6.7067 1.43594C6.75667 1.48812 6.78998 1.54901 6.80663 1.61859C6.83994 1.68818 6.85659 1.75776 6.85659 1.82734V2.71452C7.35623 2.90588 7.80591 3.17551 8.20562 3.52343L8.95508 3.10593C9.23821 2.91458 9.48803 2.95806 9.70454 3.2364C10.2375 3.89743 10.5872 4.47149 10.7538 4.95857C10.8704 5.28909 10.7871 5.54133 10.504 5.71529L9.65458 6.15888C9.7545 6.69815 9.7545 7.24611 9.65458 7.80278ZM6.73168 8.35074C7.01481 7.96804 7.17303 7.56794 7.20634 7.15044C7.23965 6.73294 7.1647 6.37633 6.9815 6.0806C6.7983 5.76748 6.55681 5.51524 6.25703 5.32388C5.9739 5.13253 5.63248 5.06295 5.23276 5.11514C4.83305 5.14993 4.45 5.31519 4.08359 5.61091C3.80046 5.99362 3.64225 6.39372 3.60894 6.81122C3.57563 7.22872 3.65057 7.59403 3.83377 7.90715C4.01697 8.20288 4.25014 8.44642 4.53327 8.63777C4.83305 8.82913 5.1828 8.90741 5.58251 8.87262C5.98222 8.82043 6.36528 8.64647 6.73168 8.35074ZM12.8023 13.1259L12.6024 13.4912C12.5192 13.6477 12.3943 13.6999 12.2277 13.6477C11.9279 13.526 11.6615 13.3607 11.4283 13.152C11.2951 13.0302 11.2701 12.891 11.3534 12.7345L11.5532 12.3692C11.3867 12.1604 11.2534 11.9256 11.1535 11.6646H10.7538C10.5706 11.6646 10.4707 11.569 10.454 11.3776C10.3874 11.0645 10.3874 10.7427 10.454 10.4121C10.4707 10.2382 10.5706 10.1512 10.7538 10.1512H11.1535C11.2534 9.89027 11.3867 9.64673 11.5532 9.42058L11.3534 9.05527C11.2701 8.89871 11.2951 8.75954 11.4283 8.63777C11.6615 8.42902 11.9279 8.27246 12.2277 8.16809C12.3943 8.09851 12.5192 8.14199 12.6024 8.29856L12.8023 8.68996C13.0688 8.63777 13.3353 8.63777 13.6017 8.68996L13.8016 8.29856C13.8849 8.14199 14.0098 8.09851 14.1763 8.16809C14.4761 8.27246 14.7426 8.42902 14.9757 8.63777C15.109 8.75954 15.134 8.89871 15.0507 9.05527L14.8508 9.42058C15.0174 9.64673 15.1506 9.89027 15.2505 10.1512H15.6503C15.8335 10.1512 15.9334 10.2382 15.95 10.4121C16.0167 10.7427 16.0167 11.0645 15.95 11.3776C15.9334 11.569 15.8335 11.6646 15.6503 11.6646H15.2505C15.1506 11.9256 15.0174 12.1604 14.8508 12.3692L15.0507 12.7345C15.134 12.891 15.109 13.0302 14.9757 13.152C14.7426 13.3607 14.4761 13.526 14.1763 13.6477C14.0098 13.6999 13.8849 13.6477 13.8016 13.4912L13.6017 13.1259C13.3353 13.1781 13.0688 13.1781 12.8023 13.1259ZM12.5525 11.5864C12.8523 11.8299 13.1604 11.8995 13.4768 11.7951C13.7933 11.6907 13.9848 11.4907 14.0514 11.1949C14.1347 10.8818 14.0681 10.5513 13.8515 10.2034C13.5518 9.95985 13.2437 9.89027 12.9272 9.99464C12.6108 10.099 12.4109 10.3078 12.3276 10.6209C12.261 10.9166 12.336 11.2384 12.5525 11.5864Z",
                                fill: "#338EEF",
                              },
                            }),
                          ]
                        ),
                        s("span", {
                          domProps: {
                            textContent: t._s(t.text_automatic_placement),
                          },
                        }),
                        s("settings-input-checkbox", {
                          attrs: {
                            auth_disabled: !1,
                            name: "popular_posts_widget_automatic",
                          },
                        }),
                      ],
                      1
                    ),
                    s("div", {
                      staticClass:
                        "monsterinsights-pp-accordion-item-title-bottom",
                      domProps: { textContent: t._s(t.text_automatic_desc) },
                    }),
                  ]
                ),
                s(
                  "div",
                  {
                    class: t.accordionTitleClass("gutenberg"),
                    on: {
                      click: function (e) {
                        return t.switchSelected("gutenberg");
                      },
                    },
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-accordion-item-title-top",
                      },
                      [
                        s(
                          "svg",
                          {
                            attrs: {
                              width: "16",
                              height: "16",
                              viewBox: "0 0 16 16",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            s("path", {
                              attrs: {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d:
                                  "M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.00008 5.00078C7.4478 5.00078 7.00008 5.4485 7.00008 6.00078V7.00078H6.00008C5.4478 7.00078 5.00008 7.4485 5.00008 8.00078C5.00008 8.55307 5.4478 9.00078 6.00008 9.00078H7.00008V10.0008C7.00008 10.5531 7.4478 11.0008 8.00008 11.0008C8.55237 11.0008 9.00008 10.5531 9.00008 10.0008V9.00078H10.0001C10.5524 9.00078 11.0001 8.55307 11.0001 8.00078C11.0001 7.4485 10.5524 7.00078 10.0001 7.00078H9.00008V6.00078C9.00008 5.4485 8.55237 5.00078 8.00008 5.00078Z",
                                fill: "#338EEF",
                              },
                            }),
                          ]
                        ),
                        s("span", {
                          domProps: {
                            textContent: t._s(t.text_gutenberg_block),
                          },
                        }),
                      ]
                    ),
                    s("div", {
                      staticClass:
                        "monsterinsights-pp-accordion-item-title-bottom",
                      domProps: { textContent: t._s(t.text_gutenberg_desc) },
                    }),
                    t._m(0),
                  ]
                ),
                s(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: "gutenberg" === t.selected,
                        expression: "'gutenberg'===selected",
                      },
                    ],
                    staticClass: "monsterinsights-pp-accordion-item-content",
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-manual-placement-content-columns",
                      },
                      [
                        s("popular-posts-video", {
                          attrs: {
                            video: t.video_gutenberg,
                            title: t.text_gutenberg_video,
                          },
                        }),
                        s(
                          "ul",
                          {
                            staticClass:
                              "monsterinsights-pp-manual-placement-content-steps",
                          },
                          t._l(t.text_gutenberg_steps, function (e, i) {
                            return s("li", {
                              key: i,
                              domProps: { innerHTML: t._s(e) },
                            });
                          }),
                          0
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                s(
                  "div",
                  {
                    class: t.accordionTitleClass("shortcode"),
                    on: {
                      click: function (e) {
                        return t.switchSelected("shortcode");
                      },
                    },
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-accordion-item-title-top",
                      },
                      [
                        s(
                          "svg",
                          {
                            attrs: {
                              width: "16",
                              height: "10",
                              viewBox: "0 0 16 10",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            s("path", {
                              attrs: {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d:
                                  "M11.8058 9.42845C11.3003 9.91772 10.4808 9.91772 9.97528 9.42845C9.46981 8.93919 9.46981 8.14593 9.97528 7.65666L12.7208 4.99916L9.9755 2.34187C9.47002 1.8526 9.47002 1.05934 9.9755 0.570075C10.481 0.0808083 11.3005 0.0808083 11.806 0.570075L14.5513 3.22737L14.5515 3.22718C15.5625 4.20572 15.5625 5.79223 14.5515 6.77077L11.8058 9.42845ZM3.50396 9.42845C4.00943 9.91772 4.82897 9.91772 5.33445 9.42845C5.83993 8.93919 5.83993 8.14593 5.33445 7.65666L2.5889 4.99915L5.33423 2.34187C5.8397 1.8526 5.8397 1.05934 5.33422 0.570075C4.82875 0.0808083 4.00921 0.0808083 3.50373 0.570075L0.758402 3.22736L0.758215 3.22718C-0.252739 4.20572 -0.252738 5.79223 0.758215 6.77077L3.50396 9.42845Z",
                                fill: "#338EEF",
                              },
                            }),
                          ]
                        ),
                        s("span", {
                          domProps: {
                            textContent: t._s(t.text_shortcode_title),
                          },
                        }),
                      ]
                    ),
                    s("div", {
                      staticClass:
                        "monsterinsights-pp-accordion-item-title-bottom",
                      domProps: { textContent: t._s(t.text_shortcode_desc) },
                    }),
                    t._m(1),
                  ]
                ),
                s(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: "shortcode" === t.selected,
                        expression: "'shortcode'===selected",
                      },
                    ],
                    staticClass: "monsterinsights-pp-accordion-item-content",
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-manual-placement-content-columns",
                      },
                      [
                        s("popular-posts-video", {
                          attrs: {
                            video: t.video_shortcode,
                            title: t.text_shortcode_video,
                          },
                        }),
                        s(
                          "ul",
                          {
                            staticClass:
                              "monsterinsights-pp-manual-placement-content-steps",
                          },
                          [
                            s("li", [
                              s("p", [
                                s("span", {
                                  staticClass: "monsterinsights-dark",
                                  domProps: {
                                    textContent: t._s(t.text_shortcode),
                                  },
                                }),
                                s("br"),
                                s("span", {
                                  domProps: {
                                    textContent: t._s(t.text_shortcode_copy),
                                  },
                                }),
                              ]),
                              s("input", {
                                attrs: {
                                  id: "monsterinsights-shortcode-widget-copy",
                                  type: "text",
                                  readonly: !0,
                                  value:
                                    "[monsterinsights_popular_posts_widget]",
                                },
                              }),
                              s("button", {
                                staticClass:
                                  "monsterinsights-button monsterinsights-button-secondary",
                                domProps: { textContent: t._s(t.text_copy) },
                                on: { click: t.copyToClipboard },
                              }),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                s(
                  "div",
                  {
                    class: t.accordionTitleClass("sidebar"),
                    on: {
                      click: function (e) {
                        return t.switchSelected("sidebar");
                      },
                    },
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-accordion-item-title-top",
                      },
                      [
                        s(
                          "svg",
                          {
                            attrs: {
                              width: "16",
                              height: "10",
                              viewBox: "0 0 16 10",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            s("path", {
                              attrs: {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d:
                                  "M13 2H3C2.44772 2 2 2.44772 2 3V7C2 7.55228 2.44772 8 3 8H13C13.5523 8 14 7.55228 14 7V3C14 2.44772 13.5523 2 13 2ZM3 0C1.34315 0 0 1.34315 0 3V7C0 8.65685 1.34315 10 3 10H13C14.6569 10 16 8.65685 16 7V3C16 1.34315 14.6569 0 13 0H3ZM3 5C3 4.44772 3.44772 4 4 4H8C8.55228 4 9 4.44772 9 5C9 5.55228 8.55228 6 8 6H4C3.44772 6 3 5.55228 3 5ZM12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z",
                                fill: "#338EEF",
                              },
                            }),
                          ]
                        ),
                        s("span", {
                          domProps: { textContent: t._s(t.text_sidebar_title) },
                        }),
                      ]
                    ),
                    s("div", {
                      staticClass:
                        "monsterinsights-pp-accordion-item-title-bottom",
                      domProps: { textContent: t._s(t.text_sidebar_desc) },
                    }),
                    t._m(2),
                  ]
                ),
                s(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: "sidebar" === t.selected,
                        expression: "'sidebar'===selected",
                      },
                    ],
                    staticClass: "monsterinsights-pp-accordion-item-content",
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-manual-placement-content-columns",
                      },
                      [
                        s("popular-posts-video", {
                          attrs: {
                            video: t.video_sidebar,
                            title: t.text_sidebar_video,
                          },
                        }),
                        s(
                          "ul",
                          {
                            staticClass:
                              "monsterinsights-pp-manual-placement-content-steps",
                          },
                          t._l(t.text_sidebar_steps, function (e, i) {
                            return s("li", {
                              key: i,
                              domProps: { innerHTML: t._s(e) },
                            });
                          }),
                          0
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      Ll = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "span",
            {
              staticClass: "monsterinsights-settings-input-toggle-collapsible",
              attrs: { role: "button" },
            },
            [s("i", { staticClass: "monstericon-arrow" })]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "span",
            {
              staticClass: "monsterinsights-settings-input-toggle-collapsible",
              attrs: { role: "button" },
            },
            [s("i", { staticClass: "monstericon-arrow" })]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "span",
            {
              staticClass: "monsterinsights-settings-input-toggle-collapsible",
              attrs: { role: "button" },
            },
            [s("i", { staticClass: "monstericon-arrow" })]
          );
        },
      ],
      Tl = {
        name: "PopularPostsWidgetPlacement",
        components: { SettingsInputCheckbox: R["a"], PopularPostsVideo: Sr },
        props: {
          video_gutenberg: String,
          video_shortcode: String,
          video_sidebar: String,
        },
        data: function () {
          return {
            selected: "automatic",
            text_automatic_placement: Object(c["a"])(
              "Automatic Placement",
              "ga-premium"
            ),
            text_gutenberg_block: Object(c["a"])(
              "Display using Gutenberg Blocks",
              "ga-premium"
            ),
            text_embed_options: Object(c["a"])("Embed Options", "ga-premium"),
            text_embed_options_desc: Object(c["a"])(
              "All Embed Options can be used in conjunction with one another.",
              "ga-premium"
            ),
            text_gutenberg_title: Object(c["a"])(
              "Using the Gutenberg Block",
              "ga-premium"
            ),
            text_automatic_title: Object(c["a"])(
              "Using Automatic Embed",
              "ga-premium"
            ),
            text_shortcode_title: Object(c["a"])(
              "Display using a Shortcode",
              "ga-premium"
            ),
            text_gutenberg_desc: Object(c["a"])(
              "Learn how to insert the Popular Posts Widget into your posts and pages using Gutenberg Blocks. To style this widget, use the Gutenberg Block settings.",
              "ga-premium"
            ),
            text_automatic_desc: Object(c["a"])(
              "Enabling Automatic Placement will include the Popular Posts Widget after the last paragraph of any and all posts that match your Behavior settings. To style this widget use the Customize Design panel above.",
              "ga-premium"
            ),
            text_shortcode_desc: Object(c["a"])(
              "Learn how to insert the Popular Posts Widget using a shortcode. To style this widget use the Customize Design panel above.",
              "ga-premium"
            ),
            text_gutenberg_video: Object(c["d"])(
              Object(c["a"])(
                "%1$sWatch Video%2$s - How to Add the Popular Posts widget using Gutenberg",
                "ga-premium"
              ),
              "<b>",
              "</b>"
            ),
            text_gutenberg_steps: [
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 1%2$s - Click the “Add Block” icon while editing a Post or Page.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 2%2$s - Search for “Popular Posts”.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 3%2$s - Style the widget using the Block Settings sidebar.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
            ],
            text_sidebar_steps: [
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 1%2$s - Navigate to your Appearance > Widgets page using the menu on the left side your screen. Must be logged in as Admin.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 2%2$s - On the left, under Available Widgets, look for the Popular Posts - MonsterInsights widget and drag it into the desired Sidebar on the right.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 3%2$s - The widget options should automatically expand allowing you to customize the design.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
            ],
            text_shortcode: Object(c["a"])(
              "Display using a Shortcode",
              "ga-premium"
            ),
            text_shortcode_copy: Object(c["a"])(
              "Copy the shortcode and paste it into your Page and/or Post templates or using a shortcode plugin.",
              "ga-premium"
            ),
            text_copy: Object(c["a"])("Copy Shortcode", "ga-premium"),
            text_shortcode_video: Object(c["d"])(
              Object(c["a"])(
                "%1$sWatch Video%2$s - How to Add the Popular Posts widget using our Shortcode",
                "ga-premium"
              ),
              "<b>",
              "</b>"
            ),
            text_enable_automatic: Object(c["a"])(
              "Enable Automatic Placement",
              "ga-premium"
            ),
            text_sidebar_title: Object(c["a"])(
              "Display in a Sidebar",
              "ga-premium"
            ),
            text_sidebar_desc: Object(c["a"])(
              "Learn how to insert the Popular Posts Widget into a Sidebar. To style this widget use the Customize Design panel above.",
              "ga-premium"
            ),
            text_sidebar_video: Object(c["a"])(
              "Watch Video - How to Add the Popular Posts widget using Widgets",
              "ga-premium"
            ),
          };
        },
        methods: {
          selectorClass: function (t) {
            var e = "monsterinsights-pp-manual-placement-option";
            return (
              (e += " monsterinsights-pp-manual-placement-option-" + t),
              t === this.selected &&
                (e += " monsterinsights-pp-manual-placement-option-active"),
              e
            );
          },
          copyToClipboard: function () {
            document
              .querySelector("#monsterinsights-shortcode-widget-copy")
              .select(),
              document.execCommand("copy");
          },
          switchSelected: function (t) {
            this.selected = this.selected === t ? "" : t;
          },
          accordionTitleClass: function (t) {
            var e =
              "monsterinsights-pp-accordion-item-title monsterinsights-pp-accordion-item-title-toggle ";
            return (
              this.selected === t &&
                (e += "monsterinsights-pp-accordion-item-title-active"),
              e
            );
          },
        },
      },
      Ml = Tl,
      El = Object(b["a"])(Ml, Al, Ll, !1, null, null, null),
      Vl = El.exports,
      Dl = {
        name: "WidgetPlacement",
        components: { PopularPostsWidgetPlacement: Vl },
        data: function () {
          return {
            video_gutenberg: "https://www.youtube.com/embed/98d-5VBPLsw",
            video_shortcode: "https://www.youtube.com/embed/SHnx6GjPsr8",
            video_sidebar: "https://www.youtube.com/embed/UIIFOK9QhR4",
          };
        },
      },
      Il = Dl,
      Bl = Object(b["a"])(Il, $l, Hl, !1, null, null, null),
      zl = Bl.exports;
    function Zl(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Ul(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Zl(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Zl(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Fl = {
        name: "PopularPostsWidget",
        components: {
          PopularPostsGaInput: or,
          WidgetPlacement: zl,
          LoadingSpinnerInline: Cr,
          PopularPostsWidgetCategory: Sl,
          PopularPostsPostTypePicker: So,
          SettingsInputText: G["a"],
          SettingsInputCheckbox: R["a"],
          PopularPostsPostsPicker: Oo,
          PopularPostsSharedCount: go,
          SettingsInputRadio: x["a"],
          PopularPostsWidgetThemeCustomize: gl,
          PopularPostsWidgetThemePreview: Jr,
          PopularPostsThemePicker: Gn,
          SettingsBlock: v,
        },
        computed: Ul(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            theme_options: "$_popularposts/themes_widget",
          })
        ),
        data: function () {
          return {
            text_choose_theme: Object(c["a"])("Choose Theme", "ga-premium"),
            text_behavior: Object(c["a"])("Behavior", "ga-premium"),
            text_widget_styling: Object(c["a"])("Widget Styling", "ga-premium"),
            text_widget_styling_desc: Object(c["a"])(
              "Choose how you want to determine the colors, font sizes and spacing of the widget.",
              "ga-premium"
            ),
            text_sort_by: Object(c["a"])("Sort By", "ga-premium"),
            text_sort_by_description: Object(c["a"])(
              "Choose how you'd like the widget to determine your popular posts.",
              "ga-premium"
            ),
            text_display_title: Object(c["a"])("Display Title", "ga-premium"),
            text_widget_title: Object(c["a"])("Widget Title", "ga-premium"),
            text_widget_title_desc: Object(c["a"])(
              "Title your widget and set it’s display preferences.",
              "ga-premium"
            ),
            text_post_type: Object(c["a"])(
              "Include in Post Types",
              "ga-premium"
            ),
            text_exclude_posts: Object(c["a"])(
              "Exclude from specific posts",
              "ga-premium"
            ),
            text_post_type_description: Object(c["d"])(
              Object(c["a"])(
                "Choose which Post Types the widget %1$sWILL%2$s be placed.",
                "ga-premium"
              ),
              "<b>",
              "</b>"
            ),
            text_exclude_posts_description: Object(c["d"])(
              Object(c["a"])(
                "Choose from which Posts the widget %1$sWILL NOT%2$s be placed.",
                "ga-premium"
              ),
              "<b>",
              "</b>"
            ),
            text_loading_themes: Object(c["a"])("Loading Themes", "ga-premium"),
            styling_options: [
              {
                value: "0",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Default Styles %1$s- As seen above.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "no_styles",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "No Styles %1$s- Use your own CSS.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
            ],
            sort_options: [
              {
                value: "comments",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Comments %1$s- Randomly rotate your most commented on posts from the past 30 days.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "sharedcount",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "SharedCount %1$s- Connect with your SharedCount account to determine popular posts by share count.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "curated",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Curated %1$s- Choose the posts which will randomly rotate in the widget.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
            ],
          };
        },
        mounted: function () {
          this.theme_options.hasOwnProperty("alpha") ||
            this.$store.dispatch("$_popularposts/getThemes", "widget");
        },
      },
      Nl = Fl,
      Wl = Object(b["a"])(Nl, Fr, Nr, !1, null, null, null),
      Rl = Wl.exports,
      Gl = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-popular-posts-products-top" },
          [
            s(
              "div",
              { class: t.containerClass },
              [
                t.canaccess
                  ? [
                      s(
                        "settings-block",
                        {
                          attrs: {
                            title: t.text_choose_theme,
                            icon: "monstericon-search",
                          },
                        },
                        [
                          t.theme_options.hasOwnProperty("alpha")
                            ? s("popular-posts-theme-picker", {
                                attrs: {
                                  options: t.theme_options,
                                  name: "popular_posts_products_theme",
                                  type: "products",
                                },
                              })
                            : s("loading-spinner-inline", {
                                attrs: { text: t.text_loading_themes },
                              }),
                          t.theme_options.hasOwnProperty("alpha")
                            ? s("div", {
                                staticClass: "monsterinsights-separator",
                              })
                            : t._e(),
                          t.theme_options.hasOwnProperty("alpha")
                            ? s("popular-posts-products-theme-preview", {
                                attrs: {
                                  name: "popular_posts_products_theme",
                                  themes: t.theme_options,
                                },
                              })
                            : t._e(),
                        ],
                        1
                      ),
                      t.theme_options.hasOwnProperty("alpha")
                        ? s("popular-posts-products-theme-customize", {
                            attrs: {
                              themes: t.theme_options,
                              name: "popular_posts_products_theme",
                            },
                          })
                        : t._e(),
                      s(
                        "settings-block",
                        {
                          attrs: {
                            title: t.text_behavior,
                            icon: "monstericon-mouse-pointer",
                          },
                        },
                        [
                          s("p", [
                            s("span", {
                              staticClass: "monsterinsights-dark",
                              domProps: {
                                textContent: t._s(t.text_widget_styling),
                              },
                            }),
                            s("br"),
                            s("span", {
                              domProps: {
                                textContent: t._s(t.text_widget_styling_desc),
                              },
                            }),
                          ]),
                          s("settings-input-radio", {
                            attrs: {
                              auth_disabled: !1,
                              options: t.styling_options,
                              name: "popular_posts_products_styling",
                            },
                          }),
                          s("div", {
                            staticClass: "monsterinsights-separator",
                          }),
                          s("p", [
                            s("span", {
                              staticClass: "monsterinsights-dark",
                              domProps: {
                                textContent: t._s(t.text_widget_title),
                              },
                            }),
                            s("br"),
                            s("span", {
                              domProps: {
                                textContent: t._s(t.text_widget_title_desc),
                              },
                            }),
                          ]),
                          s("settings-input-checkbox", {
                            attrs: {
                              auth_disabled: !1,
                              name: "popular_posts_products_title",
                              label: t.text_display_title,
                            },
                          }),
                          t.settings["popular_posts_products_title"]
                            ? s(
                                "div",
                                {
                                  staticClass:
                                    "monsterinsights-input-text-small",
                                },
                                [
                                  s("settings-input-text", {
                                    attrs: {
                                      auth_disabled: !1,
                                      name: "popular_posts_products_title_text",
                                    },
                                  }),
                                ],
                                1
                              )
                            : t._e(),
                          s("div", {
                            staticClass: "monsterinsights-separator",
                          }),
                          s("p", [
                            s("span", {
                              staticClass: "monsterinsights-dark",
                              domProps: {
                                textContent: t._s(t.text_exclude_categories),
                              },
                            }),
                            s("br"),
                            s("span", {
                              domProps: {
                                innerHTML: t._s(
                                  t.text_exclude_posts_description
                                ),
                              },
                            }),
                          ]),
                          s("popular-posts-taxonomy-picker", {
                            attrs: {
                              taxonomy: "product_cat",
                              name: "popular_posts_products_categories",
                            },
                          }),
                          s("div", {
                            staticClass: "monsterinsights-separator",
                          }),
                          s("p", [
                            s("span", {
                              staticClass: "monsterinsights-dark",
                              domProps: {
                                textContent: t._s(t.text_exclude_posts),
                              },
                            }),
                            s("br"),
                            s("span", {
                              domProps: {
                                innerHTML: t._s(
                                  t.text_exclude_posts_description
                                ),
                              },
                            }),
                          ]),
                          s("popular-posts-posts-picker", {
                            attrs: {
                              post_type: "product",
                              name: "popular_posts_products_exclude_posts",
                              placeholder: t.text_products_search_placeholder,
                            },
                          }),
                          s("products-placement"),
                        ],
                        1
                      ),
                    ]
                  : s("popular-posts-products-upsell"),
              ],
              2
            ),
            t.showWooCommerceNotice
              ? s(
                  "div",
                  {
                    staticClass:
                      "monsterinsights-popular-products-woocommerce-notice",
                  },
                  [
                    s(
                      "svg",
                      {
                        attrs: {
                          width: "12",
                          height: "12",
                          viewBox: "0 0 12 12",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                        },
                      },
                      [
                        s(
                          "g",
                          { staticStyle: { "mix-blend-mode": "multiply" } },
                          [
                            s("path", {
                              attrs: {
                                d:
                                  "M10.2339 1.76613C11.4113 2.92742 12 4.33871 12 6C12 7.66129 11.4113 9.08064 10.2339 10.2581C9.07258 11.4194 7.66129 12 6 12C4.33871 12 2.91935 11.4194 1.74194 10.2581C0.580645 9.08064 0 7.66129 0 6C0 4.33871 0.580645 2.92742 1.74194 1.76613C2.91935 0.58871 4.33871 0 6 0C7.66129 0 9.07258 0.58871 10.2339 1.76613ZM6.77419 7.54839C6.56452 7.32258 6.30645 7.20968 6 7.20968C5.69355 7.20968 5.42742 7.32258 5.20161 7.54839C4.99194 7.75806 4.8871 8.01613 4.8871 8.32258C4.8871 8.62903 4.99194 8.89516 5.20161 9.12097C5.42742 9.33064 5.69355 9.43548 6 9.43548C6.30645 9.43548 6.56452 9.33064 6.77419 9.12097C7 8.89516 7.1129 8.62903 7.1129 8.32258C7.1129 8.01613 7 7.75806 6.77419 7.54839ZM4.93548 3.21774L5.12903 6.50806C5.12903 6.68548 5.22581 6.77419 5.41935 6.77419H6.58065C6.77419 6.77419 6.87097 6.68548 6.87097 6.50806L7.06452 3.21774C7.06452 3.12097 7.03226 3.04839 6.96774 3C6.91935 2.93548 6.85484 2.90323 6.77419 2.90323H5.22581C5.14516 2.90323 5.07258 2.93548 5.00806 3C4.95968 3.04839 4.93548 3.12097 4.93548 3.21774Z",
                                fill: "#D7930F",
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                    s("span", {
                      domProps: { innerHTML: t._s(t.text_woocommerce_missing) },
                    }),
                  ]
                )
              : t._e(),
          ]
        );
      },
      ql = [],
      Yl = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-pp-products-theme-preview" },
          [
            s("h3", { domProps: { textContent: t._s(t.text_theme_preview) } }),
            t.themeOptions
              ? s(
                  "div",
                  {
                    staticClass:
                      "monsterinsights-pp-products-theme-preview-render",
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-products-theme-preview-width",
                      },
                      [
                        s(
                          "div",
                          { staticClass: "monsterinsights-buttons-toggle" },
                          [
                            s("button", {
                              class: t.themeWidthButtonClass("wide"),
                              domProps: { textContent: t._s(t.text_wide) },
                              on: {
                                click: function (e) {
                                  e.stopPropagation(),
                                    (t.preview_width = "wide");
                                },
                              },
                            }),
                            s("button", {
                              class: t.themeWidthButtonClass("narrow"),
                              domProps: { textContent: t._s(t.text_narrow) },
                              on: {
                                click: function (e) {
                                  e.stopPropagation(),
                                    (t.preview_width = "narrow");
                                },
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                    s("div", { class: t.outputClass }, [
                      s("div", { staticClass: "monsterinsights-dummy-text" }, [
                        "wide" === t.preview_width
                          ? s("p", {
                              domProps: { textContent: t._s(t.text_dummy_p_1) },
                            })
                          : t._e(),
                        "narrow" === t.preview_width
                          ? s("p", {
                              domProps: { textContent: t._s(t.text_dummy_p_2) },
                            })
                          : t._e(),
                        "narrow" === t.preview_width
                          ? s("p", {
                              domProps: { textContent: t._s(t.text_dummy_p_3) },
                            })
                          : t._e(),
                      ]),
                      s("div", { class: t.themeClass }, [
                        t.themeList
                          ? s(
                              "ul",
                              {
                                staticClass:
                                  "monsterinsights-products-popular-posts-list",
                              },
                              t._l(t.getItems, function (e, i) {
                                return s(
                                  "li",
                                  {
                                    key: i,
                                    style: t.objectStyle(
                                      "background",
                                      ["color", "border"],
                                      ["background", "borderColor"]
                                    ),
                                  },
                                  [
                                    t.metaEnabled("image") &&
                                    t.themeList.images &&
                                    t.themeList.images[i]
                                      ? s("div", {
                                          class: t.imgClass(
                                            t.themeList.images[i]
                                          ),
                                        })
                                      : t._e(),
                                    s(
                                      "div",
                                      {
                                        staticClass:
                                          "monsterinsights-products-popular-posts-text",
                                      },
                                      [
                                        t.themeOptions.label
                                          ? s("span", {
                                              staticClass:
                                                "monsterinsights-products-popular-posts-label",
                                              style: t.objectStyle(
                                                "label",
                                                ["color", "background"],
                                                ["color", "background"]
                                              ),
                                              domProps: {
                                                textContent: t._s(
                                                  t.getThemeOption(
                                                    "label",
                                                    "text"
                                                  )
                                                ),
                                              },
                                            })
                                          : t._e(),
                                        s("a", {
                                          staticClass:
                                            "monsterinsights-products-popular-posts-title",
                                          style: t.objectStyle(
                                            "title",
                                            ["color", "size"],
                                            ["color", "fontSize"]
                                          ),
                                          domProps: { textContent: t._s(e) },
                                        }),
                                        t.metaEnabled("price")
                                          ? s("span", {
                                              staticClass:
                                                "monsterinsights-products-popular-posts-price",
                                              style: t.objectStyle(
                                                "price",
                                                ["color", "size"],
                                                ["color", "fontSize"]
                                              ),
                                              domProps: {
                                                textContent: t._s(
                                                  t.themeList.prices[i]
                                                ),
                                              },
                                            })
                                          : t._e(),
                                        t.metaEnabled("rating")
                                          ? s(
                                              "span",
                                              {
                                                staticClass:
                                                  "monsterinsights-products-popular-posts-rating",
                                              },
                                              [
                                                s(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "14",
                                                      height: "13",
                                                      viewBox: "0 0 14 13",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                    },
                                                  },
                                                  [
                                                    s("path", {
                                                      style: t.objectStyle(
                                                        "rating",
                                                        ["color"],
                                                        ["fill"]
                                                      ),
                                                      attrs: {
                                                        d:
                                                          "M6.07031 0.921875C6.21094 0.640625 6.4375 0.5 6.75 0.5C7.0625 0.5 7.28906 0.640625 7.42969 0.921875L8.95312 4.01562L12.375 4.53125C12.6875 4.5625 12.8906 4.72656 12.9844 5.02344C13.0781 5.32031 13.0156 5.57812 12.7969 5.79688L10.3125 8.21094L10.8984 11.6328C10.9453 11.9297 10.8438 12.1641 10.5938 12.3359C10.3438 12.5234 10.0859 12.5469 9.82031 12.4062L6.75 10.8125L3.67969 12.4062C3.41406 12.5625 3.15625 12.5469 2.90625 12.3594C2.65625 12.1719 2.55469 11.9297 2.60156 11.6328L3.1875 8.21094L0.703125 5.79688C0.484375 5.57812 0.421875 5.32031 0.515625 5.02344C0.609375 4.72656 0.8125 4.5625 1.125 4.53125L4.54688 4.01562L6.07031 0.921875Z",
                                                      },
                                                    }),
                                                  ]
                                                ),
                                                s(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "14",
                                                      height: "13",
                                                      viewBox: "0 0 14 13",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                    },
                                                  },
                                                  [
                                                    s("path", {
                                                      style: t.objectStyle(
                                                        "rating",
                                                        ["color"],
                                                        ["fill"]
                                                      ),
                                                      attrs: {
                                                        d:
                                                          "M6.07031 0.921875C6.21094 0.640625 6.4375 0.5 6.75 0.5C7.0625 0.5 7.28906 0.640625 7.42969 0.921875L8.95312 4.01562L12.375 4.53125C12.6875 4.5625 12.8906 4.72656 12.9844 5.02344C13.0781 5.32031 13.0156 5.57812 12.7969 5.79688L10.3125 8.21094L10.8984 11.6328C10.9453 11.9297 10.8438 12.1641 10.5938 12.3359C10.3438 12.5234 10.0859 12.5469 9.82031 12.4062L6.75 10.8125L3.67969 12.4062C3.41406 12.5625 3.15625 12.5469 2.90625 12.3594C2.65625 12.1719 2.55469 11.9297 2.60156 11.6328L3.1875 8.21094L0.703125 5.79688C0.484375 5.57812 0.421875 5.32031 0.515625 5.02344C0.609375 4.72656 0.8125 4.5625 1.125 4.53125L4.54688 4.01562L6.07031 0.921875Z",
                                                      },
                                                    }),
                                                  ]
                                                ),
                                                s(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "14",
                                                      height: "13",
                                                      viewBox: "0 0 14 13",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                    },
                                                  },
                                                  [
                                                    s("path", {
                                                      style: t.objectStyle(
                                                        "rating",
                                                        ["color"],
                                                        ["fill"]
                                                      ),
                                                      attrs: {
                                                        d:
                                                          "M6.07031 0.921875C6.21094 0.640625 6.4375 0.5 6.75 0.5C7.0625 0.5 7.28906 0.640625 7.42969 0.921875L8.95312 4.01562L12.375 4.53125C12.6875 4.5625 12.8906 4.72656 12.9844 5.02344C13.0781 5.32031 13.0156 5.57812 12.7969 5.79688L10.3125 8.21094L10.8984 11.6328C10.9453 11.9297 10.8438 12.1641 10.5938 12.3359C10.3438 12.5234 10.0859 12.5469 9.82031 12.4062L6.75 10.8125L3.67969 12.4062C3.41406 12.5625 3.15625 12.5469 2.90625 12.3594C2.65625 12.1719 2.55469 11.9297 2.60156 11.6328L3.1875 8.21094L0.703125 5.79688C0.484375 5.57812 0.421875 5.32031 0.515625 5.02344C0.609375 4.72656 0.8125 4.5625 1.125 4.53125L4.54688 4.01562L6.07031 0.921875Z",
                                                      },
                                                    }),
                                                  ]
                                                ),
                                                s(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "14",
                                                      height: "13",
                                                      viewBox: "0 0 14 13",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                    },
                                                  },
                                                  [
                                                    s("path", {
                                                      style: t.objectStyle(
                                                        "rating",
                                                        ["color"],
                                                        ["fill"]
                                                      ),
                                                      attrs: {
                                                        d:
                                                          "M6.07031 0.921875C6.21094 0.640625 6.4375 0.5 6.75 0.5C7.0625 0.5 7.28906 0.640625 7.42969 0.921875L8.95312 4.01562L12.375 4.53125C12.6875 4.5625 12.8906 4.72656 12.9844 5.02344C13.0781 5.32031 13.0156 5.57812 12.7969 5.79688L10.3125 8.21094L10.8984 11.6328C10.9453 11.9297 10.8438 12.1641 10.5938 12.3359C10.3438 12.5234 10.0859 12.5469 9.82031 12.4062L6.75 10.8125L3.67969 12.4062C3.41406 12.5625 3.15625 12.5469 2.90625 12.3594C2.65625 12.1719 2.55469 11.9297 2.60156 11.6328L3.1875 8.21094L0.703125 5.79688C0.484375 5.57812 0.421875 5.32031 0.515625 5.02344C0.609375 4.72656 0.8125 4.5625 1.125 4.53125L4.54688 4.01562L6.07031 0.921875Z",
                                                      },
                                                    }),
                                                  ]
                                                ),
                                                s(
                                                  "svg",
                                                  {
                                                    attrs: {
                                                      width: "14",
                                                      height: "13",
                                                      viewBox: "0 0 14 13",
                                                      fill: "none",
                                                      xmlns:
                                                        "http://www.w3.org/2000/svg",
                                                    },
                                                  },
                                                  [
                                                    s("path", {
                                                      style: t.objectStyle(
                                                        "rating",
                                                        ["color"],
                                                        ["fill"]
                                                      ),
                                                      attrs: {
                                                        d:
                                                          "M12.375 4.53125C12.6875 4.5625 12.8906 4.72656 12.9844 5.02344C13.0781 5.32031 13.0156 5.57812 12.7969 5.79688L10.3125 8.21094L10.8984 11.6328C10.9453 11.9297 10.8438 12.1641 10.5938 12.3359C10.3438 12.5234 10.0859 12.5469 9.82031 12.4062L6.75 10.8125L3.67969 12.4062C3.41406 12.5625 3.15625 12.5469 2.90625 12.3594C2.65625 12.1719 2.55469 11.9297 2.60156 11.6328L3.1875 8.21094L0.703125 5.79688C0.484375 5.57812 0.421875 5.32031 0.515625 5.02344C0.609375 4.72656 0.8125 4.5625 1.125 4.53125L4.54688 4.01562L6.07031 0.921875C6.21094 0.640625 6.4375 0.5 6.75 0.5C7.0625 0.5 7.28906 0.640625 7.42969 0.921875L8.95312 4.01562L12.375 4.53125ZM9.11719 7.8125L11.4609 5.51562L8.20312 5.04688L6.75 2.09375L5.29688 5.04688L2.03906 5.51562L4.38281 7.8125L3.84375 11.0703L6.75 9.52344L9.65625 11.0703L9.11719 7.8125Z",
                                                      },
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                  ]
                                );
                              }),
                              0
                            )
                          : t._e(),
                      ]),
                    ]),
                  ]
                )
              : t._e(),
          ]
        );
      },
      Kl = [];
    function Xl(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Jl(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Xl(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Xl(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Ql = {
        name: "PopularPostsProductsThemePreview",
        props: { name: String, themes: Object },
        data: function () {
          return {
            optionsName: this.name + "_options",
            text_theme_preview: Object(c["a"])("Theme Preview", "ga-premium"),
            text_wide: Object(c["a"])("Wide", "ga-premium"),
            text_narrow: Object(c["a"])("Narrow", "ga-premium"),
            preview_width: "wide",
            text_dummy_p_1:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a libero ante. Donec ac ligula a arcu facilisis consequat. Nam rhoncus vehicula erat. Mauris sed auctor nisi, sed facilisis elit. Vestibulum ultrices risus vitae euismod convallis. Mauris elementum vitae est quis ornare.",
            text_dummy_p_2:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a libero ante. Donec ac ligula a arcu facilisis consequat. Nam rhoncus vehicula erat. Mauris sed auctor nisi, sed facilisis elit. Vestibulum ultrices risus vitae euismod convallis. Mauris elementum vitae est quis ornare. In efficitur luctus lorem non porttitor. Pellentesque iaculis sapien non imperdiet cursus. Curabitur venenatis purus sed diam pulvinar accumsan. Suspendisse sapien justo, sollicitudin ut dignissim at, ultricies sed arcu.",
            text_dummy_p_3:
              "Pellentesque pharetra molestie felis, at vehicula enim consectetur sed. Vestibulum ut dolor non nunc tincidunt elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque elit elit, maximus vel pharetra sit amet, gravida eget enim.",
            text_yesterday: Object(c["a"])("Yesterday", "ga-premium"),
          };
        },
        computed: Jl({}, Object(l["b"])({ settings: "$_settings/settings" }), {
          active: function () {
            return this.settings[this.name];
          },
          columns: function () {
            return this.settings["popular_posts_products_theme_columns"];
          },
          themeOptions: function () {
            return !!this.active && this.themes[this.active].styles;
          },
          themeClass: function () {
            return (
              "monsterinsights-widget-popular-posts-products monsterinsights-products-popular-posts-" +
              this.active +
              " monsterinsights-products-popular-posts-columns-" +
              this.columns
            );
          },
          outputClass: function () {
            return (
              "monsterinsights-pp-products-theme-preview-output monsterinsights-pp-products-theme-preview-output-" +
              this.preview_width
            );
          },
          themeList: function () {
            return !!this.active && this.themes[this.active].list;
          },
          getItems: function () {
            return "wide" === this.preview_width
              ? this.themeList.items
              : this.themeList.items.slice(0, 3);
          },
        }),
        methods: {
          getThemeOption: function (t, e) {
            var s = this.name + "_" + t + "_" + e;
            return "undefined" !== typeof this.settings[s] &&
              "" !== this.settings[s] &&
              !1 !== this.settings[s]
              ? this.settings[s]
              : this.themeOptions[t][e] && this.themeOptions[t][e].default
              ? this.themeOptions[t][e].default
              : this.themeOptions[t][e];
          },
          objectStyle: function (t, e, s) {
            var i,
              n = {};
            if ("undefined" === typeof this.themeOptions[t]) return n;
            for (i = 0; i < e.length; i++)
              if ("undefined" !== typeof this.themeOptions[t][e[i]]) {
                var o = this.getThemeOption(t, e[i]),
                  a = s[i];
                "fontSize" === a && (o += "px"), (n[a] = o);
              }
            return n;
          },
          themeWidthButtonClass: function (t) {
            var e = "monsterinsights-button";
            return (
              t === this.preview_width &&
                (e += " monsterinsights-selected-interval"),
              e
            );
          },
          imgClass: function (t) {
            return (
              (t = t.replace(".jpg", "").replace(".png", "")),
              "monsterinsights-bg-img monsterinsights-pp-" + t
            );
          },
          metaEnabled: function (t) {
            return (
              !this.themeOptions.meta ||
              !this.themeOptions.meta[t] ||
              "off" !== this.getThemeOption("meta", t)
            );
          },
        },
      },
      tc = Ql,
      ec = Object(b["a"])(tc, Yl, Kl, !1, null, null, null),
      sc = ec.exports,
      ic = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "settings-block",
          {
            attrs: {
              title: t.text_customize_design,
              icon: "monstericon-eye-far",
            },
          },
          [
            s(
              "div",
              { staticClass: "monsterinsights-pp-inline-theme-controls" },
              [
                t.themeOptions.title
                  ? s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-controls monsterinsights-pp-controls-title",
                      },
                      [
                        s("label", {
                          staticClass:
                            "monsterinsights-pp-controls-description",
                          domProps: { textContent: t._s(t.text_title) },
                        }),
                        s(
                          "div",
                          { staticClass: "monsterinsights-pp-controls-inputs" },
                          [
                            t.themeOptions.title.color
                              ? s(
                                  "label",
                                  [
                                    s("span", {
                                      staticClass:
                                        "monsterinsights-pp-control-label",
                                      domProps: {
                                        textContent: t._s(t.text_color),
                                      },
                                    }),
                                    s("color-picker", {
                                      attrs: {
                                        color: t.getThemeOption(
                                          "title",
                                          "color"
                                        ),
                                      },
                                      on: {
                                        changeColor: function (e) {
                                          var s = arguments.length,
                                            i = Array(s);
                                          while (s--) i[s] = arguments[s];
                                          return t.updateColor.apply(
                                            void 0,
                                            ["title", "color"].concat(i)
                                          );
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                            t.themeOptions.title.size
                              ? s(
                                  "label",
                                  [
                                    s("span", {
                                      staticClass:
                                        "monsterinsights-pp-control-label",
                                      domProps: {
                                        textContent: t._s(t.text_size),
                                      },
                                    }),
                                    s("popular-posts-size-input", {
                                      attrs: {
                                        value: t.getThemeOption(
                                          "title",
                                          "size"
                                        ),
                                        min: 1,
                                      },
                                      on: {
                                        change: function (e) {
                                          var s = arguments.length,
                                            i = Array(s);
                                          while (s--) i[s] = arguments[s];
                                          return t.updateOption.apply(
                                            void 0,
                                            ["title", "size"].concat(i)
                                          );
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
                t.themeOptions.label
                  ? s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-controls monsterinsights-pp-controls-label",
                      },
                      [
                        s("label", {
                          staticClass:
                            "monsterinsights-pp-controls-description",
                          domProps: { textContent: t._s(t.text_label) },
                        }),
                        s(
                          "div",
                          { staticClass: "monsterinsights-pp-controls-inputs" },
                          [
                            t.themeOptions.label.color
                              ? s("label", [
                                  s("span", {
                                    staticClass:
                                      "monsterinsights-pp-control-label",
                                    domProps: {
                                      textContent: t._s(t.text_color),
                                    },
                                  }),
                                  s(
                                    "span",
                                    {
                                      staticClass:
                                        "monsterinsights-pp-color-input-inline",
                                    },
                                    [
                                      s("color-picker", {
                                        attrs: {
                                          color: t.getThemeOption(
                                            "label",
                                            "color"
                                          ),
                                        },
                                        on: {
                                          changeColor: function (e) {
                                            var s = arguments.length,
                                              i = Array(s);
                                            while (s--) i[s] = arguments[s];
                                            return t.updateColor.apply(
                                              void 0,
                                              ["label", "color"].concat(i)
                                            );
                                          },
                                        },
                                      }),
                                      s("input", {
                                        attrs: { type: "text" },
                                        domProps: {
                                          value: t.getThemeOption(
                                            "label",
                                            "text"
                                          ),
                                        },
                                        on: {
                                          change: function (e) {
                                            var s = arguments.length,
                                              i = Array(s);
                                            while (s--) i[s] = arguments[s];
                                            return t.updateOption.apply(
                                              void 0,
                                              ["label", "text"].concat(i)
                                            );
                                          },
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                ])
                              : t._e(),
                            t.themeOptions.label.background
                              ? s(
                                  "label",
                                  [
                                    s("span", {
                                      staticClass:
                                        "monsterinsights-pp-control-label",
                                      domProps: {
                                        textContent: t._s(t.text_background),
                                      },
                                    }),
                                    s("color-picker", {
                                      attrs: {
                                        color: t.getThemeOption(
                                          "label",
                                          "background"
                                        ),
                                      },
                                      on: {
                                        changeColor: function (e) {
                                          var s = arguments.length,
                                            i = Array(s);
                                          while (s--) i[s] = arguments[s];
                                          return t.updateColor.apply(
                                            void 0,
                                            ["label", "background"].concat(i)
                                          );
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
                t.themeOptions.background
                  ? s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-controls monsterinsights-pp-controls-background",
                      },
                      [
                        s("label", {
                          staticClass:
                            "monsterinsights-pp-controls-description",
                          domProps: { textContent: t._s(t.text_background) },
                        }),
                        s(
                          "div",
                          { staticClass: "monsterinsights-pp-controls-inputs" },
                          [
                            t.themeOptions.background.color
                              ? s(
                                  "label",
                                  [
                                    s("span", {
                                      staticClass:
                                        "monsterinsights-pp-control-label",
                                      domProps: {
                                        textContent: t._s(t.text_color),
                                      },
                                    }),
                                    s("color-picker", {
                                      attrs: {
                                        color: t.getThemeOption(
                                          "background",
                                          "color"
                                        ),
                                      },
                                      on: {
                                        changeColor: function (e) {
                                          var s = arguments.length,
                                            i = Array(s);
                                          while (s--) i[s] = arguments[s];
                                          return t.updateColor.apply(
                                            void 0,
                                            ["background", "color"].concat(i)
                                          );
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                            t.themeOptions.background.border
                              ? s(
                                  "label",
                                  [
                                    s("span", {
                                      staticClass:
                                        "monsterinsights-pp-control-label",
                                      domProps: {
                                        textContent: t._s(t.text_border),
                                      },
                                    }),
                                    s("color-picker", {
                                      attrs: {
                                        color: t.getThemeOption(
                                          "background",
                                          "border"
                                        ),
                                      },
                                      on: {
                                        changeColor: function (e) {
                                          var s = arguments.length,
                                            i = Array(s);
                                          while (s--) i[s] = arguments[s];
                                          return t.updateColor.apply(
                                            void 0,
                                            ["background", "border"].concat(i)
                                          );
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
                t.themeOptions.border
                  ? s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-controls monsterinsights-pp-controls-border",
                      },
                      [
                        s("label", {
                          staticClass:
                            "monsterinsights-pp-controls-description",
                          domProps: { textContent: t._s(t.text_border) },
                        }),
                        s(
                          "div",
                          { staticClass: "monsterinsights-pp-controls-inputs" },
                          [
                            t.themeOptions.border.color
                              ? s(
                                  "label",
                                  [
                                    s("span", {
                                      staticClass:
                                        "monsterinsights-pp-control-label",
                                      domProps: {
                                        textContent: t._s(
                                          t.themeOptions.border.color.label
                                            ? t.themeOptions.border.color.label
                                            : t.text_color
                                        ),
                                      },
                                    }),
                                    s("color-picker", {
                                      attrs: {
                                        color: t.getThemeOption(
                                          "border",
                                          "color"
                                        ),
                                      },
                                      on: {
                                        changeColor: function (e) {
                                          var s = arguments.length,
                                            i = Array(s);
                                          while (s--) i[s] = arguments[s];
                                          return t.updateColor.apply(
                                            void 0,
                                            ["border", "color"].concat(i)
                                          );
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
                t.themeOptions.price
                  ? s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-controls monsterinsights-pp-controls-price",
                      },
                      [
                        s("label", {
                          staticClass:
                            "monsterinsights-pp-controls-description",
                          domProps: { textContent: t._s(t.text_price) },
                        }),
                        s(
                          "div",
                          { staticClass: "monsterinsights-pp-controls-inputs" },
                          [
                            t.themeOptions.price.color
                              ? s(
                                  "label",
                                  [
                                    s("span", {
                                      staticClass:
                                        "monsterinsights-pp-control-label",
                                      domProps: {
                                        textContent: t._s(t.text_color),
                                      },
                                    }),
                                    s("color-picker", {
                                      attrs: {
                                        color: t.getThemeOption(
                                          "price",
                                          "color"
                                        ),
                                      },
                                      on: {
                                        changeColor: function (e) {
                                          var s = arguments.length,
                                            i = Array(s);
                                          while (s--) i[s] = arguments[s];
                                          return t.updateColor.apply(
                                            void 0,
                                            ["price", "color"].concat(i)
                                          );
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                            t.themeOptions.price.size
                              ? s(
                                  "label",
                                  [
                                    s("span", {
                                      staticClass:
                                        "monsterinsights-pp-control-label",
                                      domProps: {
                                        textContent: t._s(t.text_size),
                                      },
                                    }),
                                    s("popular-posts-size-input", {
                                      attrs: {
                                        value: t.getThemeOption(
                                          "price",
                                          "size"
                                        ),
                                        min: 1,
                                      },
                                      on: {
                                        change: function (e) {
                                          var s = arguments.length,
                                            i = Array(s);
                                          while (s--) i[s] = arguments[s];
                                          return t.updateOption.apply(
                                            void 0,
                                            ["price", "size"].concat(i)
                                          );
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
                t.themeOptions.rating
                  ? s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-controls monsterinsights-pp-controls-rating",
                      },
                      [
                        s("label", {
                          staticClass:
                            "monsterinsights-pp-controls-description",
                          domProps: { textContent: t._s(t.text_rating) },
                        }),
                        s(
                          "div",
                          { staticClass: "monsterinsights-pp-controls-inputs" },
                          [
                            t.themeOptions.rating.color
                              ? s(
                                  "label",
                                  [
                                    s("span", {
                                      staticClass:
                                        "monsterinsights-pp-control-label",
                                      domProps: {
                                        textContent: t._s(t.text_color),
                                      },
                                    }),
                                    s("color-picker", {
                                      attrs: {
                                        color: t.getThemeOption(
                                          "rating",
                                          "color"
                                        ),
                                      },
                                      on: {
                                        changeColor: function (e) {
                                          var s = arguments.length,
                                            i = Array(s);
                                          while (s--) i[s] = arguments[s];
                                          return t.updateColor.apply(
                                            void 0,
                                            ["rating", "color"].concat(i)
                                          );
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                )
                              : t._e(),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
              ]
            ),
            s("div", { staticClass: "monsterinsights-separator" }),
            s("p", [
              s("span", {
                staticClass: "monsterinsights-dark",
                domProps: { textContent: t._s(t.text_wide_label) },
              }),
              s("br"),
              s("span", { domProps: { textContent: t._s(t.text_wide_desc) } }),
            ]),
            s("settings-input-radio", {
              staticClass: "monsterinsights-wide-column-options",
              attrs: {
                auth_disabled: !1,
                options: t.wide_columns,
                name: "popular_posts_products_theme_columns",
              },
              on: { updated: t.updateCount },
            }),
            s("div", { staticClass: "monsterinsights-separator" }),
            s("p", [
              s("span", {
                staticClass: "monsterinsights-dark",
                domProps: { textContent: t._s(t.text_post_count) },
              }),
              s("br"),
              s("span", {
                domProps: { textContent: t._s(t.text_post_count_desc) },
              }),
            ]),
            s("settings-input-select-simple", {
              ref: "post_count",
              attrs: {
                auth_disabled: !1,
                name: "popular_posts_products_count",
                options: t.options_count,
              },
            }),
            s("div", { staticClass: "monsterinsights-separator" }),
            t.themeOptions.meta
              ? s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_display_options) },
                  }),
                  s("br"),
                  s("span", {
                    domProps: {
                      textContent: t._s(t.text_display_options_desc),
                    },
                  }),
                ])
              : t._e(),
            t.themeOptions.meta
              ? s(
                  "div",
                  { staticClass: "monsterinsights-inline-checkboxes" },
                  [
                    t.themeOptions.meta && t.themeOptions.meta.price
                      ? s("settings-input-checkbox", {
                          attrs: {
                            auth_disabled: !1,
                            valueOff: "off",
                            valueOn: "on",
                            label: t.text_display_price,
                            name: "popular_posts_products_theme_meta_price",
                          },
                        })
                      : t._e(),
                    t.themeOptions.meta && t.themeOptions.meta.rating
                      ? s("settings-input-checkbox", {
                          attrs: {
                            auth_disabled: !1,
                            valueOff: "off",
                            valueOn: "on",
                            label: t.text_display_rating,
                            name: "popular_posts_products_theme_meta_rating",
                          },
                        })
                      : t._e(),
                    t.themeOptions.meta && t.themeOptions.meta.image
                      ? s("settings-input-checkbox", {
                          attrs: {
                            auth_disabled: !1,
                            valueOff: "off",
                            valueOn: "on",
                            label: t.text_display_thumbnail,
                            name: "popular_posts_products_theme_meta_image",
                          },
                        })
                      : t._e(),
                  ],
                  1
                )
              : t._e(),
          ],
          1
        );
      },
      nc = [];
    function oc(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function ac(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? oc(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : oc(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var rc = {
        name: "PopularPostsProductsThemeCustomize",
        components: {
          PopularPostsSizeInput: Na,
          SettingsInputSelectSimple: ll,
          SettingsInputCheckbox: R["a"],
          SettingsInputRadio: x["a"],
          SettingsBlock: v,
          colorPicker: Ia,
        },
        props: { name: String, themes: Object },
        data: function () {
          return {
            text_customize_design: Object(c["a"])(
              "Customize Design",
              "ga-premium"
            ),
            text_title: Object(c["a"])("Title", "ga-premium"),
            text_price: Object(c["a"])("Price", "ga-premium"),
            text_color: Object(c["a"])("Color", "ga-premium"),
            text_size: Object(c["a"])("Size", "ga-premium"),
            text_border: Object(c["a"])("Border", "ga-premium"),
            text_rating: Object(c["a"])("Rating", "ga-premium"),
            text_meta: Object(c["a"])("Meta", "ga-premium"),
            text_label: Object(c["a"])("Label", "ga-premium"),
            text_background: Object(c["a"])("Background", "ga-premium"),
            text_wide_label: Object(c["a"])(
              "Wide-Layout Options",
              "ga-premium"
            ),
            text_wide_desc: Object(c["a"])(
              "Adjust the number of columns displayed when the widget is placed in a wide container.",
              "ga-premium"
            ),
            text_display_options: Object(c["a"])(
              "Display Options",
              "ga-premium"
            ),
            text_display_options_desc: Object(c["a"])(
              "Choose which content you would like displayed in the widget.",
              "ga-premium"
            ),
            text_display_price: Object(c["a"])("Display Price", "ga-premium"),
            text_display_rating: Object(c["a"])("Display Rating", "ga-premium"),
            text_display_thumbnail: Object(c["a"])(
              "Display Thumbnail",
              "ga-premium"
            ),
            text_comments: Object(c["a"])("Comments", "ga-premium"),
            text_post_count: Object(c["a"])("Product Count", "ga-premium"),
            text_post_count_desc: Object(c["a"])(
              "Choose how many Products will be displayed in the widget.",
              "ga-premium"
            ),
            wide_columns: [
              {
                label:
                  '<span class="monsterinsights-wide-column monsterinsights-wide-column-three"><span></span><span></span><span></span><span></span><span></span><span></span></span>',
                value: "3",
              },
              {
                label:
                  '<span class="monsterinsights-wide-column monsterinsights-wide-column-two"><span></span><span></span><span></span><span></span></span>',
                value: "2",
              },
              {
                label:
                  '<span class="monsterinsights-wide-column monsterinsights-wide-column-one"><span></span><span></span></span>',
                value: "1",
              },
            ],
          };
        },
        computed: ac({}, Object(l["b"])({ settings: "$_settings/settings" }), {
          active: function () {
            return this.settings[this.name];
          },
          themeOptions: function () {
            return !!this.active && this.themes[this.active].styles;
          },
          options_count: function () {
            var t = this.settings["popular_posts_products_theme_columns"],
              e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            return (
              2 === parseInt(t, 10) && (e = [2, 4, 6, 8, 10]),
              3 === parseInt(t, 10) && (e = [3, 6, 9]),
              (e = e.map(function (t) {
                return { value: t, label: t };
              })),
              e
            );
          },
        }),
        methods: {
          getThemeOption: function (t, e) {
            return this.themeOptions[t][e] && this.themeOptions[t][e].default
              ? this.themeOptions[t][e].default
              : this.themeOptions[t][e];
          },
          updateColor: fe()(function (t, e, s) {
            this.saveSetting(t, e, s);
          }, 100),
          updateOption: function (t, e, s) {
            this.saveSetting(t, e, s.target.value);
          },
          updateCount: function (t) {
            this.dispatchSave("popular_posts_products_count", t);
          },
          saveSetting: function (t, e, s) {
            var i = this,
              n = {
                type: "products",
                theme: this.active,
                object: t,
                key: e,
                value: s,
              };
            this.$mi_saving_toast({}),
              this.$store
                .dispatch("$_popularposts/updateThemeSetting", n)
                .then(function (t) {
                  t.success ? i.$mi_success_toast({}) : i.$mi_error_toast({});
                });
          },
          dispatchSave: function (t, e) {
            var s = this;
            this.$mi_saving_toast({}),
              this.$store
                .dispatch("$_settings/updateSettings", { name: t, value: e })
                .then(function (t) {
                  t.success ? s.$mi_success_toast({}) : s.$mi_error_toast({});
                });
          },
        },
      },
      lc = rc,
      cc = Object(b["a"])(lc, ic, nc, !1, null, null, null),
      pc = cc.exports,
      uc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("popular-posts-products-placement", {
          attrs: {
            video_gutenberg: t.video_gutenberg,
            video_shortcode: t.video_shortcode,
            video_sidebar: t.video_sidebar,
          },
        });
      },
      mc = [],
      dc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-pp-manual-placement" },
          [
            s("div", { staticClass: "monsterinsights-separator" }),
            s("p", [
              s("span", {
                staticClass: "monsterinsights-dark",
                domProps: { textContent: t._s(t.text_embed_options) },
              }),
              s("br"),
              s("span", {
                domProps: { textContent: t._s(t.text_embed_options_desc) },
              }),
            ]),
            s(
              "div",
              { staticClass: "monsterinsights-pp-placement-options-accordion" },
              [
                s(
                  "div",
                  { staticClass: "monsterinsights-pp-accordion-item-title" },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-accordion-item-title-top",
                      },
                      [
                        s(
                          "svg",
                          {
                            attrs: {
                              width: "16",
                              height: "14",
                              viewBox: "0 0 16 14",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            s("path", {
                              attrs: {
                                d:
                                  "M12.8023 5.32388L12.6024 5.6892C12.5192 5.84576 12.3943 5.89794 12.2277 5.84576C11.9279 5.72399 11.6615 5.55873 11.4283 5.34998C11.2951 5.22821 11.2701 5.08904 11.3534 4.93248L11.5532 4.56717C11.3867 4.35842 11.2534 4.12358 11.1535 3.86264H10.7538C10.5706 3.86264 10.4707 3.76697 10.454 3.57561C10.3874 3.26249 10.3874 2.94067 10.454 2.61015C10.4707 2.43619 10.5706 2.34921 10.7538 2.34921H11.1535C11.2534 2.08828 11.3867 1.85344 11.5532 1.64469L11.3534 1.25328C11.2701 1.09672 11.2951 0.966253 11.4283 0.861878C11.6615 0.653129 11.9279 0.48787 12.2277 0.3661C12.3943 0.296517 12.5192 0.340006 12.6024 0.496568L12.8023 0.887972C13.0688 0.835785 13.3353 0.835785 13.6017 0.887972L13.8016 0.496568C13.8849 0.340006 14.0098 0.296517 14.1763 0.3661C14.4761 0.470474 14.7426 0.635734 14.9757 0.861878C15.109 0.966253 15.134 1.09672 15.0507 1.25328L14.8508 1.64469C15.0174 1.85344 15.1506 2.08828 15.2505 2.34921H15.6503C15.8335 2.34921 15.9334 2.43619 15.95 2.61015C16.0167 2.94067 16.0167 3.26249 15.95 3.57561C15.9334 3.76697 15.8335 3.86264 15.6503 3.86264H15.2505C15.1506 4.12358 15.0174 4.35842 14.8508 4.56717L15.0507 4.93248C15.134 5.10644 15.109 5.2456 14.9757 5.34998C14.7426 5.55873 14.4761 5.72399 14.1763 5.84576C14.0098 5.89794 13.8849 5.84576 13.8016 5.6892L13.6017 5.32388C13.3353 5.37607 13.0688 5.37607 12.8023 5.32388ZM12.5525 3.78436C12.8523 4.0279 13.1604 4.09749 13.4768 3.99311C13.7933 3.88874 13.9848 3.68869 14.0514 3.39296C14.1347 3.07983 14.0681 2.74932 13.8515 2.4014C13.5518 2.15786 13.2437 2.08828 12.9272 2.19265C12.6108 2.29703 12.4109 2.50578 12.3276 2.8189C12.261 3.11463 12.336 3.43645 12.5525 3.78436ZM9.65458 7.80278L10.504 8.24637C10.7871 8.42033 10.8704 8.67256 10.7538 9.00308C10.6039 9.45537 10.2541 10.0294 9.70454 10.7253C9.48803 10.9862 9.23821 11.0297 8.95508 10.8557L8.20562 10.4121C7.80591 10.7774 7.35623 11.0558 6.85659 11.2471V12.1343C6.85659 12.2735 6.80663 12.404 6.7067 12.5257C6.60677 12.6475 6.49019 12.7171 6.35695 12.7345C5.72408 12.8562 5.0912 12.8562 4.45832 12.7345C4.30843 12.7171 4.18352 12.6475 4.08359 12.5257C4.00032 12.404 3.95868 12.2735 3.95868 12.1343V11.2471C3.44239 11.0558 2.98439 10.7774 2.58467 10.4121L1.8602 10.8557C1.57707 11.0297 1.32725 10.9862 1.11074 10.7253C0.577788 10.0468 0.228041 9.47277 0.0614941 9.00308C-0.0550885 8.67256 0.0281848 8.42033 0.311314 8.24637L1.13572 7.80278C1.03579 7.24611 1.03579 6.69815 1.13572 6.15888L0.311314 5.71529C0.0115301 5.54133 -0.0717431 5.28909 0.0614941 4.95857C0.228041 4.48889 0.577788 3.91483 1.11074 3.2364C1.31059 2.97546 1.56041 2.93197 1.8602 3.10593L2.58467 3.52343C3.00104 3.15812 3.45904 2.88848 3.95868 2.71452V1.82734C3.95868 1.67078 4.00032 1.54031 4.08359 1.43594C4.18352 1.31417 4.30843 1.24458 4.45832 1.22719C5.0912 1.10542 5.72408 1.10542 6.35695 1.22719C6.42357 1.22719 6.48186 1.25328 6.53183 1.30547C6.59845 1.34026 6.65674 1.38375 6.7067 1.43594C6.75667 1.48812 6.78998 1.54901 6.80663 1.61859C6.83994 1.68818 6.85659 1.75776 6.85659 1.82734V2.71452C7.35623 2.90588 7.80591 3.17551 8.20562 3.52343L8.95508 3.10593C9.23821 2.91458 9.48803 2.95806 9.70454 3.2364C10.2375 3.89743 10.5872 4.47149 10.7538 4.95857C10.8704 5.28909 10.7871 5.54133 10.504 5.71529L9.65458 6.15888C9.7545 6.69815 9.7545 7.24611 9.65458 7.80278ZM6.73168 8.35074C7.01481 7.96804 7.17303 7.56794 7.20634 7.15044C7.23965 6.73294 7.1647 6.37633 6.9815 6.0806C6.7983 5.76748 6.55681 5.51524 6.25703 5.32388C5.9739 5.13253 5.63248 5.06295 5.23276 5.11514C4.83305 5.14993 4.45 5.31519 4.08359 5.61091C3.80046 5.99362 3.64225 6.39372 3.60894 6.81122C3.57563 7.22872 3.65057 7.59403 3.83377 7.90715C4.01697 8.20288 4.25014 8.44642 4.53327 8.63777C4.83305 8.82913 5.1828 8.90741 5.58251 8.87262C5.98222 8.82043 6.36528 8.64647 6.73168 8.35074ZM12.8023 13.1259L12.6024 13.4912C12.5192 13.6477 12.3943 13.6999 12.2277 13.6477C11.9279 13.526 11.6615 13.3607 11.4283 13.152C11.2951 13.0302 11.2701 12.891 11.3534 12.7345L11.5532 12.3692C11.3867 12.1604 11.2534 11.9256 11.1535 11.6646H10.7538C10.5706 11.6646 10.4707 11.569 10.454 11.3776C10.3874 11.0645 10.3874 10.7427 10.454 10.4121C10.4707 10.2382 10.5706 10.1512 10.7538 10.1512H11.1535C11.2534 9.89027 11.3867 9.64673 11.5532 9.42058L11.3534 9.05527C11.2701 8.89871 11.2951 8.75954 11.4283 8.63777C11.6615 8.42902 11.9279 8.27246 12.2277 8.16809C12.3943 8.09851 12.5192 8.14199 12.6024 8.29856L12.8023 8.68996C13.0688 8.63777 13.3353 8.63777 13.6017 8.68996L13.8016 8.29856C13.8849 8.14199 14.0098 8.09851 14.1763 8.16809C14.4761 8.27246 14.7426 8.42902 14.9757 8.63777C15.109 8.75954 15.134 8.89871 15.0507 9.05527L14.8508 9.42058C15.0174 9.64673 15.1506 9.89027 15.2505 10.1512H15.6503C15.8335 10.1512 15.9334 10.2382 15.95 10.4121C16.0167 10.7427 16.0167 11.0645 15.95 11.3776C15.9334 11.569 15.8335 11.6646 15.6503 11.6646H15.2505C15.1506 11.9256 15.0174 12.1604 14.8508 12.3692L15.0507 12.7345C15.134 12.891 15.109 13.0302 14.9757 13.152C14.7426 13.3607 14.4761 13.526 14.1763 13.6477C14.0098 13.6999 13.8849 13.6477 13.8016 13.4912L13.6017 13.1259C13.3353 13.1781 13.0688 13.1781 12.8023 13.1259ZM12.5525 11.5864C12.8523 11.8299 13.1604 11.8995 13.4768 11.7951C13.7933 11.6907 13.9848 11.4907 14.0514 11.1949C14.1347 10.8818 14.0681 10.5513 13.8515 10.2034C13.5518 9.95985 13.2437 9.89027 12.9272 9.99464C12.6108 10.099 12.4109 10.3078 12.3276 10.6209C12.261 10.9166 12.336 11.2384 12.5525 11.5864Z",
                                fill: "#338EEF",
                              },
                            }),
                          ]
                        ),
                        s("span", {
                          domProps: {
                            textContent: t._s(t.text_automatic_placement),
                          },
                        }),
                        s("settings-input-checkbox", {
                          attrs: {
                            auth_disabled: !1,
                            name: "popular_posts_products_automatic",
                          },
                        }),
                      ],
                      1
                    ),
                    s("div", {
                      staticClass:
                        "monsterinsights-pp-accordion-item-title-bottom",
                      domProps: { textContent: t._s(t.text_automatic_desc) },
                    }),
                  ]
                ),
                s(
                  "div",
                  {
                    class: t.accordionTitleClass("gutenberg"),
                    on: {
                      click: function (e) {
                        return t.switchSelected("gutenberg");
                      },
                    },
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-accordion-item-title-top",
                      },
                      [
                        s(
                          "svg",
                          {
                            attrs: {
                              width: "16",
                              height: "16",
                              viewBox: "0 0 16 16",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            s("path", {
                              attrs: {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d:
                                  "M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.00008 5.00078C7.4478 5.00078 7.00008 5.4485 7.00008 6.00078V7.00078H6.00008C5.4478 7.00078 5.00008 7.4485 5.00008 8.00078C5.00008 8.55307 5.4478 9.00078 6.00008 9.00078H7.00008V10.0008C7.00008 10.5531 7.4478 11.0008 8.00008 11.0008C8.55237 11.0008 9.00008 10.5531 9.00008 10.0008V9.00078H10.0001C10.5524 9.00078 11.0001 8.55307 11.0001 8.00078C11.0001 7.4485 10.5524 7.00078 10.0001 7.00078H9.00008V6.00078C9.00008 5.4485 8.55237 5.00078 8.00008 5.00078Z",
                                fill: "#338EEF",
                              },
                            }),
                          ]
                        ),
                        s("span", {
                          domProps: {
                            textContent: t._s(t.text_gutenberg_block),
                          },
                        }),
                      ]
                    ),
                    s("div", {
                      staticClass:
                        "monsterinsights-pp-accordion-item-title-bottom",
                      domProps: { textContent: t._s(t.text_gutenberg_desc) },
                    }),
                    t._m(0),
                  ]
                ),
                s(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: "gutenberg" === t.selected,
                        expression: "'gutenberg'===selected",
                      },
                    ],
                    staticClass: "monsterinsights-pp-accordion-item-content",
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-manual-placement-content-columns",
                      },
                      [
                        s("popular-posts-video", {
                          attrs: {
                            video: t.video_gutenberg,
                            title: t.text_gutenberg_video,
                          },
                        }),
                        s(
                          "ul",
                          {
                            staticClass:
                              "monsterinsights-pp-manual-placement-content-steps",
                          },
                          t._l(t.text_gutenberg_steps, function (e, i) {
                            return s("li", {
                              key: i,
                              domProps: { innerHTML: t._s(e) },
                            });
                          }),
                          0
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                s(
                  "div",
                  {
                    class: t.accordionTitleClass("shortcode"),
                    on: {
                      click: function (e) {
                        return t.switchSelected("shortcode");
                      },
                    },
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-accordion-item-title-top",
                      },
                      [
                        s(
                          "svg",
                          {
                            attrs: {
                              width: "16",
                              height: "10",
                              viewBox: "0 0 16 10",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            s("path", {
                              attrs: {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d:
                                  "M11.8058 9.42845C11.3003 9.91772 10.4808 9.91772 9.97528 9.42845C9.46981 8.93919 9.46981 8.14593 9.97528 7.65666L12.7208 4.99916L9.9755 2.34187C9.47002 1.8526 9.47002 1.05934 9.9755 0.570075C10.481 0.0808083 11.3005 0.0808083 11.806 0.570075L14.5513 3.22737L14.5515 3.22718C15.5625 4.20572 15.5625 5.79223 14.5515 6.77077L11.8058 9.42845ZM3.50396 9.42845C4.00943 9.91772 4.82897 9.91772 5.33445 9.42845C5.83993 8.93919 5.83993 8.14593 5.33445 7.65666L2.5889 4.99915L5.33423 2.34187C5.8397 1.8526 5.8397 1.05934 5.33422 0.570075C4.82875 0.0808083 4.00921 0.0808083 3.50373 0.570075L0.758402 3.22736L0.758215 3.22718C-0.252739 4.20572 -0.252738 5.79223 0.758215 6.77077L3.50396 9.42845Z",
                                fill: "#338EEF",
                              },
                            }),
                          ]
                        ),
                        s("span", {
                          domProps: {
                            textContent: t._s(t.text_shortcode_title),
                          },
                        }),
                      ]
                    ),
                    s("div", {
                      staticClass:
                        "monsterinsights-pp-accordion-item-title-bottom",
                      domProps: { textContent: t._s(t.text_shortcode_desc) },
                    }),
                    t._m(1),
                  ]
                ),
                s(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: "shortcode" === t.selected,
                        expression: "'shortcode'===selected",
                      },
                    ],
                    staticClass: "monsterinsights-pp-accordion-item-content",
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-manual-placement-content-columns",
                      },
                      [
                        s("popular-posts-video", {
                          attrs: {
                            video: t.video_shortcode,
                            title: t.text_shortcode_video,
                          },
                        }),
                        s(
                          "ul",
                          {
                            staticClass:
                              "monsterinsights-pp-manual-placement-content-steps",
                          },
                          [
                            s("li", [
                              s("p", [
                                s("span", {
                                  staticClass: "monsterinsights-dark",
                                  domProps: {
                                    textContent: t._s(t.text_shortcode),
                                  },
                                }),
                                s("br"),
                                s("span", {
                                  domProps: {
                                    textContent: t._s(t.text_shortcode_copy),
                                  },
                                }),
                              ]),
                              s("input", {
                                attrs: {
                                  id: "monsterinsights-shortcode-products-copy",
                                  type: "text",
                                  readonly: !0,
                                  value:
                                    "[monsterinsights_popular_posts_products]",
                                },
                              }),
                              s("button", {
                                staticClass:
                                  "monsterinsights-button monsterinsights-button-secondary",
                                domProps: { textContent: t._s(t.text_copy) },
                                on: { click: t.copyToClipboard },
                              }),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
                s(
                  "div",
                  {
                    class: t.accordionTitleClass("sidebar"),
                    on: {
                      click: function (e) {
                        return t.switchSelected("sidebar");
                      },
                    },
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-accordion-item-title-top",
                      },
                      [
                        s(
                          "svg",
                          {
                            attrs: {
                              width: "16",
                              height: "10",
                              viewBox: "0 0 16 10",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            s("path", {
                              attrs: {
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd",
                                d:
                                  "M13 2H3C2.44772 2 2 2.44772 2 3V7C2 7.55228 2.44772 8 3 8H13C13.5523 8 14 7.55228 14 7V3C14 2.44772 13.5523 2 13 2ZM3 0C1.34315 0 0 1.34315 0 3V7C0 8.65685 1.34315 10 3 10H13C14.6569 10 16 8.65685 16 7V3C16 1.34315 14.6569 0 13 0H3ZM3 5C3 4.44772 3.44772 4 4 4H8C8.55228 4 9 4.44772 9 5C9 5.55228 8.55228 6 8 6H4C3.44772 6 3 5.55228 3 5ZM12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z",
                                fill: "#338EEF",
                              },
                            }),
                          ]
                        ),
                        s("span", {
                          domProps: { textContent: t._s(t.text_sidebar_title) },
                        }),
                      ]
                    ),
                    s("div", {
                      staticClass:
                        "monsterinsights-pp-accordion-item-title-bottom",
                      domProps: { textContent: t._s(t.text_sidebar_desc) },
                    }),
                    t._m(2),
                  ]
                ),
                s(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: "sidebar" === t.selected,
                        expression: "'sidebar'===selected",
                      },
                    ],
                    staticClass: "monsterinsights-pp-accordion-item-content",
                  },
                  [
                    s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-pp-manual-placement-content-columns",
                      },
                      [
                        s("popular-posts-video", {
                          attrs: {
                            video: t.video_sidebar,
                            title: t.text_sidebar_video,
                          },
                        }),
                        s(
                          "ul",
                          {
                            staticClass:
                              "monsterinsights-pp-manual-placement-content-steps",
                          },
                          t._l(t.text_sidebar_steps, function (e, i) {
                            return s("li", {
                              key: i,
                              domProps: { innerHTML: t._s(e) },
                            });
                          }),
                          0
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ]
            ),
          ]
        );
      },
      gc = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "span",
            {
              staticClass: "monsterinsights-settings-input-toggle-collapsible",
              attrs: { role: "button" },
            },
            [s("i", { staticClass: "monstericon-arrow" })]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "span",
            {
              staticClass: "monsterinsights-settings-input-toggle-collapsible",
              attrs: { role: "button" },
            },
            [s("i", { staticClass: "monstericon-arrow" })]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "span",
            {
              staticClass: "monsterinsights-settings-input-toggle-collapsible",
              attrs: { role: "button" },
            },
            [s("i", { staticClass: "monstericon-arrow" })]
          );
        },
      ],
      hc = {
        name: "PopularPostsProductsPlacement",
        components: { SettingsInputCheckbox: R["a"], PopularPostsVideo: Sr },
        props: {
          video_gutenberg: String,
          video_shortcode: String,
          video_sidebar: String,
        },
        data: function () {
          return {
            selected: "automatic",
            text_automatic_placement: Object(c["a"])(
              "Automatic Placement",
              "ga-premium"
            ),
            text_gutenberg_block: Object(c["a"])(
              "Display using Gutenberg Blocks",
              "ga-premium"
            ),
            text_embed_options: Object(c["a"])("Embed Options", "ga-premium"),
            text_embed_options_desc: Object(c["a"])(
              "All Embed Options can be used in conjunction with one another.",
              "ga-premium"
            ),
            text_gutenberg_title: Object(c["a"])(
              "Using the Gutenberg Block",
              "ga-premium"
            ),
            text_automatic_title: Object(c["a"])(
              "Using Automatic Embed",
              "ga-premium"
            ),
            text_shortcode_title: Object(c["a"])(
              "Display using a Shortcode",
              "ga-premium"
            ),
            text_gutenberg_desc: Object(c["a"])(
              "Learn how to insert the Popular Products Widget into your posts and pages using Gutenberg Blocks. To style this widget, use the Gutenberg Block settings.",
              "ga-premium"
            ),
            text_automatic_desc: Object(c["a"])(
              "Enabling Automatic Placement will include the Popular Product Widget at the end of Single Product pages. To style this widget use the Customize Design panel above.",
              "ga-premium"
            ),
            text_shortcode_desc: Object(c["a"])(
              "Learn how to insert the Popular Products Widget using a shortcode. To style this widget use the Customize Design panel above.",
              "ga-premium"
            ),
            text_gutenberg_video: Object(c["d"])(
              Object(c["a"])(
                "%1$sWatch Video%2$s - How to Add the Popular Products widget using Gutenberg",
                "ga-premium"
              ),
              "<b>",
              "</b>"
            ),
            text_gutenberg_steps: [
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 1%2$s - Click the “Add Block” icon while editing a Post or Page.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 2%2$s - Search for “Popular Products”.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 3%2$s - Style the widget using the Block Settings sidebar.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
            ],
            text_sidebar_steps: [
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 1%2$s - Navigate to your Appearance > Widgets page using the menu on the left side your screen. Must be logged in as Admin.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 2%2$s - On the left, under Available Widgets, look for the Popular Products - MonsterInsights widget and drag it into the desired Sidebar on the right.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
              Object(c["d"])(
                Object(c["a"])(
                  "%1$sStep 3%2$s - The widget options should automatically expand allowing you to customize the design.",
                  "ga-premium"
                ),
                "<b>",
                "</b>"
              ),
            ],
            text_shortcode: Object(c["a"])("Shortcode", "ga-premium"),
            text_shortcode_copy: Object(c["a"])(
              "Copy the shortcode and paste it into your Page and/or Post templates or using a shortcode plugin.",
              "ga-premium"
            ),
            text_copy: Object(c["a"])("Copy Shortcode", "ga-premium"),
            text_shortcode_video: Object(c["d"])(
              Object(c["a"])(
                "%1$sWatch Video%2$s - How to Add the Popular Products widget using our Shortcode",
                "ga-premium"
              ),
              "<b>",
              "</b>"
            ),
            text_enable_automatic: Object(c["a"])(
              "Enable Automatic Placement",
              "ga-premium"
            ),
            text_sidebar_title: Object(c["a"])(
              "Display in a Sidebar",
              "ga-premium"
            ),
            text_sidebar_desc: Object(c["a"])(
              "Learn how to insert the Popular Products Widget into a Sidebar. To style this widget use the Customize Design panel above.",
              "ga-premium"
            ),
            text_sidebar_video: Object(c["a"])(
              "Watch Video - How to Add the Popular Products widget using Widgets",
              "ga-premium"
            ),
          };
        },
        methods: {
          selectorClass: function (t) {
            var e = "monsterinsights-pp-manual-placement-option";
            return (
              (e += " monsterinsights-pp-manual-placement-option-" + t),
              t === this.selected &&
                (e += " monsterinsights-pp-manual-placement-option-active"),
              e
            );
          },
          copyToClipboard: function () {
            document
              .querySelector("#monsterinsights-shortcode-products-copy")
              .select(),
              document.execCommand("copy");
          },
          switchSelected: function (t) {
            this.selected = this.selected === t ? "" : t;
          },
          accordionTitleClass: function (t) {
            var e =
              "monsterinsights-pp-accordion-item-title monsterinsights-pp-accordion-item-title-toggle ";
            return (
              this.selected === t &&
                (e += "monsterinsights-pp-accordion-item-title-active"),
              e
            );
          },
        },
      },
      _c = hc,
      Cc = Object(b["a"])(_c, dc, gc, !1, null, null, null),
      bc = Cc.exports,
      fc = {
        name: "ProductsPlacement",
        components: { PopularPostsProductsPlacement: bc },
        data: function () {
          return {
            video_gutenberg: "https://www.youtube.com/embed/Z_QvQYBN9aU",
            video_shortcode: "https://www.youtube.com/embed/K8kNG2QwMQs",
            video_sidebar: "https://www.youtube.com/embed/FKVOCKZPr54",
          };
        },
      },
      vc = fc,
      xc = Object(b["a"])(vc, uc, mc, !1, null, null, null),
      Oc = xc.exports,
      yc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "monsterinsights-popular-posts-products-upsell monsterinsights-bg-img",
          },
          [
            s(
              "div",
              { staticClass: "monsterinsights-popular-products-upsell-window" },
              [
                s("h2", { domProps: { textContent: t._s(t.text_title) } }),
                s("p", { domProps: { innerHTML: t._s(t.text_subtitle) } }),
                s("a", {
                  staticClass:
                    "monsterinsights-button monsterinsights-button-large",
                  attrs: {
                    href: t.$getUpgradeUrl(
                      "popular-posts",
                      "products-overlay-button"
                    ),
                  },
                  domProps: { textContent: t._s(t.text_unlock) },
                }),
                s("br"),
                s("a", {
                  staticClass: "monsterinsights-button-text",
                  attrs: {
                    href: t.$getUpgradeUrl(
                      "popular-posts",
                      "products-overlay-link"
                    ),
                  },
                  domProps: { textContent: t._s(t.text_view_all) },
                }),
                s("div", {
                  staticClass:
                    "monsterinsights-bg-img monsterinsights-popular-products-upsell-browser",
                }),
              ]
            ),
          ]
        );
      },
      wc = [],
      jc = {
        name: "PopularPostsProductsUpsell",
        data: function () {
          return {
            text_title: Object(c["a"])(
              "This feature requires MonsterInsights Pro",
              "ga-premium"
            ),
            text_subtitle: Object(c["a"])(
              "By upgrading you will also get access to advanced eCommerce tracking, Custom Dimensions and more.",
              "ga-premium"
            ),
            text_unlock: Object(c["a"])(
              "Upgrade to Pro and Unlock Popular Products",
              "ga-premium"
            ),
            text_view_all: Object(c["a"])(
              "View all Pro features",
              "ga-premium"
            ),
          };
        },
      },
      kc = jc,
      Pc = Object(b["a"])(kc, yc, wc, !1, null, null, null),
      Sc = Pc.exports;
    function $c(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Hc(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? $c(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : $c(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Ac = {
        name: "PopularPostsProducts",
        components: {
          PopularPostsProductsUpsell: Sc,
          ProductsPlacement: Oc,
          LoadingSpinnerInline: Cr,
          PopularPostsTaxonomyPicker: wl,
          PopularPostsPostsPicker: Oo,
          SettingsInputText: G["a"],
          SettingsInputCheckbox: R["a"],
          SettingsInputRadio: x["a"],
          PopularPostsProductsThemeCustomize: pc,
          PopularPostsProductsThemePreview: sc,
          PopularPostsThemePicker: Gn,
          SettingsBlock: v,
        },
        data: function () {
          return {
            text_choose_theme: Object(c["a"])("Choose Theme", "ga-premium"),
            text_products_search_placeholder: Object(c["a"])(
              "Select Products",
              "ga-premium"
            ),
            text_behavior: Object(c["a"])("Behavior", "ga-premium"),
            text_widget_styling: Object(c["a"])("Widget Styling", "ga-premium"),
            text_widget_styling_desc: Object(c["a"])(
              "Choose how you want to determine the colors, font sizes and spacing of the widget.",
              "ga-premium"
            ),
            text_display_title: Object(c["a"])("Display Title", "ga-premium"),
            text_widget_title: Object(c["a"])("Widget Title", "ga-premium"),
            text_widget_title_desc: Object(c["a"])(
              "Title your widget and set it’s display preferences.",
              "ga-premium"
            ),
            text_exclude_posts: Object(c["a"])(
              "Exclude These Products",
              "ga-premium"
            ),
            text_exclude_posts_desc: Object(c["a"])(
              "These specific Products WILL NOT be included in the widget.",
              "ga-premium"
            ),
            text_exclude_categories: Object(c["a"])(
              "Exclude These Product Categories",
              "ga-premium"
            ),
            text_exclude_categories_desc: Object(c["a"])(
              "Products from these categories WILL NOT be included in the widget.",
              "ga-premium"
            ),
            text_exclude_posts_description: Object(c["d"])(
              Object(c["a"])(
                "Choose which Products %1$sWILL NOT%2$s be included.",
                "ga-premium"
              ),
              "<b>",
              "</b>"
            ),
            text_loading_themes: Object(c["a"])("Loading Themes", "ga-premium"),
            text_activate: Object(c["a"])("Activate", "ga-premium"),
            text_install: Object(c["a"])("Install", "ga-premium"),
            install_woo_url: this.$mi.install_woo_url,
            text_woo_needed: Object(c["a"])(
              "Popular Products widget requires that you have WooCommerce installed. %1$sClick here to %2$s WooCommerce%3$s.",
              "ga-premium"
            ),
            styling_options: [
              {
                value: "0",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "Default Styles %1$s- As seen above.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "no_styles",
                label: Object(c["d"])(
                  Object(c["a"])(
                    "No Styles %1$s- Use your own CSS.%2$s",
                    "ga-premium"
                  ),
                  "<small>",
                  "</small>"
                ),
              },
            ],
          };
        },
        computed: Hc(
          {},
          Object(l["b"])({
            addons: "$_addons/addons",
            settings: "$_settings/settings",
            theme_options: "$_popularposts/themes_products",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            installActivate: function () {
              return this.install_woo_url.indexOf("activate") > 0
                ? this.text_activate
                : this.text_install;
            },
            text_woocommerce_missing: function () {
              return this.sprintf(
                this.text_woo_needed,
                '<a href="' + this.install_woo_url + '">',
                this.installActivate,
                "</a>"
              );
            },
            licenseType: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            isWooCommerceActive: function () {
              return (
                !!this.addons["woocommerce"] &&
                this.addons["woocommerce"].active
              );
            },
            showWooCommerceNotice: function () {
              return !this.isWooCommerceActive;
            },
            containerClass: function () {
              var t =
                "monsterinsights-settings-content monsterinsights-settings-content-pp-products";
              return (
                this.showWooCommerceNotice &&
                  (t +=
                    " monsterinsights-popular-posts-products-no-woocommerce"),
                t
              );
            },
            canaccess: function () {
              return Zn["a"].canaccess(this.licenseType, this.level);
            },
          }
        ),
        methods: { sprintf: c["d"] },
        mounted: function () {
          this.theme_options.hasOwnProperty("alpha") ||
            this.$store.dispatch("$_popularposts/getThemes", "products");
        },
      },
      Lc = Ac,
      Tc = Object(b["a"])(Lc, Gl, ql, !1, null, null, null),
      Mc = Tc.exports,
      Ec = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass:
              "monsterinsights-settings-content monsterinsights-settings-content-pp-settings",
          },
          [
            s(
              "settings-block",
              {
                attrs: { title: t.text_caching, icon: "monstericon-lightbulb" },
              },
              [
                s("settings-input-checkbox", {
                  attrs: {
                    auth_disabled: !1,
                    faux: !0,
                    label: t.text_enable_caching,
                  },
                }),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_refresh) },
                  }),
                  s("br"),
                  s("span", {
                    domProps: { textContent: t._s(t.text_refresh_desc) },
                  }),
                ]),
                s("PopularPostsCacheInterval"),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_ajaxify) },
                  }),
                  s("br"),
                  s("span", {
                    domProps: { textContent: t._s(t.text_ajaxify_desc) },
                  }),
                ]),
                s("settings-input-checkbox", {
                  attrs: {
                    auth_disabled: !1,
                    name: "popular_posts_ajaxify",
                    label: t.text_enable_ajax,
                  },
                }),
                s("div", { staticClass: "monsterinsights-separator" }),
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_empty_cache) },
                  }),
                  s("br"),
                  s("span", {
                    domProps: { textContent: t._s(t.text_empty_cache_desc) },
                  }),
                ]),
                s("button", {
                  class: t.empty_cache_button_class,
                  domProps: { textContent: t._s(t.empty_cache_button_text) },
                  on: {
                    click: function (e) {
                      return e.preventDefault(), t.empty_cache(e);
                    },
                  },
                }),
              ],
              1
            ),
          ],
          1
        );
      },
      Vc = [],
      Dc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "settings-input-radio",
          {
            attrs: {
              auth_disabled: !1,
              options: t.caching_options,
              name: "popular_posts_caching_refresh",
            },
          },
          [
            s("template", { slot: "custom" }, [
              s(
                "div",
                { staticClass: "monsterinsights-input-text-extra-small" },
                [
                  s("settings-input-number", {
                    attrs: {
                      min: 1,
                      max: 365,
                      auth_disabled: !1,
                      name: "popular_posts_caching_days",
                    },
                  }),
                  s("span", { domProps: { textContent: t._s(t.text_days) } }),
                ],
                1
              ),
            ]),
          ],
          2
        );
      },
      Ic = [],
      Bc = {
        name: "PopularPostsCacheInterval",
        components: { SettingsInputNumber: Je, SettingsInputRadio: x["a"] },
        data: function () {
          return {
            text_days: Object(c["a"])("Days", "ga-premium"),
            caching_options: [
              {
                value: "7",
                label: "<b>" + Object(c["a"])("7 days", "ga-premium") + "</b>",
              },
              {
                value: "30",
                label: "<b>" + Object(c["a"])("30 days", "ga-premium") + "</b>",
              },
              {
                value: "custom",
                label: "<b>" + Object(c["a"])("Custom", "ga-premium") + "</b>",
                level: "basic",
              },
            ],
          };
        },
      },
      zc = Bc,
      Zc = Object(b["a"])(zc, Dc, Ic, !1, null, null, null),
      Uc = Zc.exports,
      Fc = {
        name: "PopularPostsSettings",
        components: {
          PopularPostsCacheInterval: Uc,
          SettingsInputCheckbox: R["a"],
          SettingsBlock: v,
        },
        data: function () {
          return {
            text_caching: Object(c["a"])("Caching", "ga-premium"),
            text_enable_caching: Object(c["a"])(
              "Enable Data Caching",
              "ga-premium"
            ),
            text_refresh: Object(c["a"])("Refresh Cache Every", "ga-premium"),
            text_refresh_desc: Object(c["a"])(
              "Choose how often to refresh the cache.",
              "ga-premium"
            ),
            text_enable_ajax: Object(c["a"])("Enable Ajaxify", "ga-premium"),
            text_ajaxify: Object(c["a"])("Ajaxify Widget", "ga-premium"),
            text_ajaxify_desc: Object(c["a"])(
              "Use to bypass page caching.",
              "ga-premium"
            ),
            text_empty_cache: Object(c["a"])("Empty Cache", "ga-premium"),
            text_please_wait: Object(c["a"])("Please wait...", "ga-premium"),
            text_empty_cache_desc: Object(c["a"])(
              "Click to manually wipe the cache right now.",
              "ga-premium"
            ),
            emptying_cache: !1,
          };
        },
        computed: {
          empty_cache_button_class: function () {
            var t = "monsterinsights-button";
            return (
              this.emptying_cache
                ? (t += " monsterinsights-button-disabled")
                : (t += " monsterinsights-button-secondary"),
              t
            );
          },
          empty_cache_button_text: function () {
            return this.emptying_cache
              ? this.text_please_wait
              : this.text_empty_cache;
          },
        },
        methods: {
          empty_cache: function () {
            var t = this;
            this.emptying_cache = !0;
            var e = new FormData();
            e.append("action", "monsterinsights_popular_posts_empty_cache"),
              e.append("nonce", i["a"].prototype.$mi.nonce),
              Ce.a.post(i["a"].prototype.$mi.ajax, e).then(function (e) {
                return (
                  (t.emptying_cache = !1),
                  e.data && e.data.success
                    ? t.$mi_success_toast({
                        title: Object(c["a"])(
                          "Popular posts cache emptied",
                          "ga-premium"
                        ),
                      })
                    : t.$mi_error_toast({
                        title: Object(c["a"])(
                          "Error emptying the popular posts cache. Please try again.",
                          "ga-premium"
                        ),
                      })
                );
              });
          },
        },
      },
      Nc = Fc,
      Wc = Object(b["a"])(Nc, Ec, Vc, !1, null, null, null),
      Rc = Wc.exports,
      Gc = new n["a"]({
        routes: [
          { path: "*", redirect: "/" },
          {
            path: "/",
            name: "general",
            component: F,
            meta: { title: Object(c["a"])("General", "ga-premium") },
          },
          {
            path: "/engagement",
            name: "engagement",
            component: vt,
            meta: { title: Object(c["a"])("Engagement", "ga-premium") },
          },
          {
            path: "/ecommerce",
            name: "ecommerce",
            component: St,
            meta: { title: Object(c["a"])("eCommerce", "ga-premium") },
          },
          {
            path: "/publisher",
            name: "publisher",
            component: re,
            meta: { title: Object(c["a"])("Publisher", "ga-premium") },
          },
          {
            path: "/conversions",
            name: "conversions",
            component: Be,
            meta: { title: Object(c["a"])("Conversions", "ga-premium") },
          },
          {
            path: "/advanced",
            name: "advanced",
            component: Js,
            meta: { title: Object(c["a"])("Advanced", "ga-premium") },
          },
          { path: "/addons", name: "addons", component: hi },
          {
            path: "/tools",
            component: xi,
            children: [
              {
                name: "tools-url-builder",
                path: "",
                component: Gi,
                meta: { title: Object(c["a"])("URL Builder", "ga-premium") },
              },
              {
                name: "tools-import-export",
                path: "import-export",
                component: Ti,
                meta: { title: Object(c["a"])("Import Export", "ga-premium") },
              },
              {
                name: "tools-prettylinks-flow",
                path: "prettylinks-flow",
                component: en,
                meta: {
                  title: Object(c["a"])(
                    "PrettyLinks Integration",
                    "ga-premium"
                  ),
                },
              },
            ],
          },
          {
            path: "/about",
            component: Pi,
            children: [
              {
                name: "about-us",
                path: "",
                component: _n,
                meta: { title: Object(c["a"])("About Us", "ga-premium") },
              },
              {
                name: "about-getting-started",
                path: "getting-started",
                component: wn,
                meta: {
                  title: Object(c["a"])("Getting Started", "ga-premium"),
                },
              },
              {
                name: "about-lite-vs-pro",
                path: "lite-vs-pro",
                component: Hn,
                meta: { title: Object(c["a"])("Lite vs Pro", "ga-premium") },
              },
            ],
          },
          {
            path: "/popular-posts",
            component: Vn,
            children: [
              {
                name: "popular-posts-inline",
                path: "",
                component: Ur,
                meta: {
                  title: Object(c["a"])("Inline Popular Posts", "ga-premium"),
                },
              },
              {
                name: "popular-posts-widget",
                path: "widget",
                component: Rl,
                meta: {
                  title: Object(c["a"])("Popular Posts Widget", "ga-premium"),
                },
              },
              {
                name: "popular-posts-products",
                path: "products",
                component: Mc,
                meta: {
                  title: Object(c["a"])("Popular Products", "ga-premium"),
                },
              },
              {
                name: "popular-posts-settings",
                path: "settings",
                component: Rc,
                meta: { title: Object(c["a"])("Settings", "ga-premium") },
              },
            ],
          },
        ],
      }),
      qc = s("a158"),
      Yc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", [
          "addons" !== t.route
            ? s(
                "button",
                {
                  class: t.triggerClass,
                  on: {
                    click: function (e) {
                      t.nav_open = !t.nav_open;
                    },
                  },
                },
                [
                  s("span", { domProps: { textContent: t._s(t.routeTitle) } }),
                  s("i", { class: t.buttonIconClass }),
                ]
              )
            : t._e(),
          s(
            "nav",
            { class: t.navClass },
            [
              "addons" === t.route
                ? [s("addons-navigation")]
                : "tools-import-export" === t.route ||
                  "tools-url-builder" === t.route
                ? [s("tools-navigation")]
                : "tools-prettylinks-flow" === t.route
                ? void 0
                : 0 === t.route.indexOf("about")
                ? [s("about-navigation")]
                : 0 === t.route.indexOf("popular")
                ? [s("popular-posts-navigation")]
                : [
                    s("router-link", {
                      staticClass: "monsterinsights-navigation-tab-link",
                      attrs: { to: "/" },
                      domProps: { textContent: t._s(t.text_settings) },
                    }),
                    s("router-link", {
                      staticClass: "monsterinsights-navigation-tab-link",
                      attrs: { to: "engagement" },
                      domProps: { textContent: t._s(t.text_engagement) },
                    }),
                    s("router-link", {
                      staticClass: "monsterinsights-navigation-tab-link",
                      attrs: { to: "ecommerce" },
                      domProps: { textContent: t._s(t.text_ecommerce) },
                    }),
                    s("router-link", {
                      staticClass: "monsterinsights-navigation-tab-link",
                      attrs: { to: "publisher" },
                      domProps: { textContent: t._s(t.text_publisher) },
                    }),
                    s("router-link", {
                      staticClass: "monsterinsights-navigation-tab-link",
                      attrs: { to: "conversions" },
                      domProps: { textContent: t._s(t.text_conversions) },
                    }),
                    s("router-link", {
                      staticClass: "monsterinsights-navigation-tab-link",
                      attrs: { to: "advanced" },
                      domProps: { textContent: t._s(t.text_advanced) },
                    }),
                  ],
            ],
            2
          ),
        ]);
      },
      Kc = [],
      Xc = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s("div", { staticClass: "monsterinsights-addons-navbar" }, [
          s("h1", { domProps: { textContent: t._s(t.text_addons_title) } }),
          s("div", { staticClass: "monsterinsights-addons-filters" }, [
            s("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: t.localSearch,
                  expression: "localSearch",
                },
              ],
              attrs: { type: "text", placeholder: t.text_addons_search },
              domProps: { value: t.localSearch },
              on: {
                input: function (e) {
                  e.target.composing || (t.localSearch = e.target.value);
                },
              },
            }),
            s("i", { staticClass: "monstericon-search" }),
          ]),
        ]);
      },
      Jc = [];
    function Qc(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function tp(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Qc(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Qc(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var ep = {
        name: "AddonsNavigation",
        data: function () {
          return {
            text_addons_title: Object(c["a"])(
              "MonsterInsights Addons",
              "ga-premium"
            ),
            text_addons_search: Object(c["a"])("Search Addons", "ga-premium"),
          };
        },
        computed: tp({}, Object(l["b"])({ search: "$_addons/search" }), {
          localSearch: {
            get: function () {
              return this.search;
            },
            set: function (t) {
              this.$store.commit("$_addons/UPDATE_SEARCH", t);
            },
          },
        }),
      },
      sp = ep,
      ip = Object(b["a"])(sp, Xc, Jc, !1, null, null, null),
      np = ip.exports,
      op = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-tools-navbar" },
          [
            s("router-link", {
              staticClass: "monsterinsights-navigation-tab-link",
              attrs: { to: "/tools" },
              domProps: { textContent: t._s(t.text_url_builder) },
            }),
            s("router-link", {
              staticClass: "monsterinsights-navigation-tab-link",
              attrs: { to: "/tools/import-export" },
              domProps: { textContent: t._s(t.text_import) },
            }),
          ],
          1
        );
      },
      ap = [],
      rp = {
        name: "ToolsNavigation",
        data: function () {
          return {
            text_import: Object(c["a"])("Import Export", "ga-premium"),
            text_url_builder: Object(c["a"])("URL Builder", "ga-premium"),
          };
        },
      },
      lp = rp,
      cp = Object(b["a"])(lp, op, ap, !1, null, null, null),
      pp = cp.exports,
      up = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-about-navbar" },
          [
            s("router-link", {
              staticClass: "monsterinsights-navigation-tab-link",
              attrs: { to: "/about" },
              domProps: { textContent: t._s(t.text_about_us) },
            }),
            s("router-link", {
              staticClass: "monsterinsights-navigation-tab-link",
              attrs: { to: "/about/getting-started" },
              domProps: { textContent: t._s(t.text_getting_started) },
            }),
            t.showLitePro
              ? s("router-link", {
                  staticClass: "monsterinsights-navigation-tab-link",
                  attrs: { to: "/about/lite-vs-pro" },
                  domProps: { textContent: t._s(t.text_lite_vs_pro) },
                })
              : t._e(),
          ],
          1
        );
      },
      mp = [];
    function dp(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function gp(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? dp(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : dp(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var hp = {
        name: "AboutNavigation",
        data: function () {
          return {
            text_about_us: Object(c["a"])("About Us", "ga-premium"),
            text_getting_started: Object(c["a"])(
              "Getting Started",
              "ga-premium"
            ),
            text_lite_vs_pro: Object(c["a"])("Lite vs Pro", "ga-premium"),
          };
        },
        computed: gp(
          {},
          Object(l["b"])({
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            showLitePro: function () {
              var t = this.$mi.network
                ? this.license_network.type
                : this.license.type;
              return !(this.$isPro && "" !== t);
            },
          }
        ),
      },
      _p = hp,
      Cp = Object(b["a"])(_p, up, mp, !1, null, null, null),
      bp = Cp.exports,
      fp = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-popular-posts-navbar" },
          [
            s("router-link", {
              staticClass: "monsterinsights-navigation-tab-link",
              attrs: { to: "/popular-posts" },
              domProps: { textContent: t._s(t.text_inline_popular_posts) },
            }),
            s("router-link", {
              staticClass: "monsterinsights-navigation-tab-link",
              attrs: { to: "/popular-posts/widget" },
              domProps: { textContent: t._s(t.text_popular_posts_widget) },
            }),
            s(
              "router-link",
              {
                staticClass: "monsterinsights-navigation-tab-link",
                attrs: { to: "/popular-posts/products" },
              },
              [
                s("span", {
                  domProps: {
                    textContent: t._s(t.text_popular_posts_products),
                  },
                }),
                s("PopularPostsProPill"),
              ],
              1
            ),
          ],
          1
        );
      },
      vp = [],
      xp = {
        name: "PopularPostsNavigation",
        components: { PopularPostsProPill: Qa["a"] },
        data: function () {
          return {
            text_inline_popular_posts: Object(c["a"])(
              "Inline Popular Posts",
              "ga-premium"
            ),
            text_popular_posts_widget: Object(c["a"])(
              "Popular Posts Widget",
              "ga-premium"
            ),
            text_popular_posts_products: Object(c["a"])(
              "Popular Products",
              "ga-premium"
            ),
          };
        },
      },
      Op = xp,
      yp = Object(b["a"])(Op, fp, vp, !1, null, null, null),
      jp = yp.exports,
      kp = document.querySelectorAll(
        '[href="admin.php?page=monsterinsights_settings"]'
      ),
      Pp = document.querySelector('[href*="monsterinsights_settings#/addons"]'),
      Sp = document.querySelector('[href*="monsterinsights_settings#/tools"]'),
      $p = document.querySelector('[href*="monsterinsights_settings#/about"]'),
      Hp = document.querySelector(
        '[href*="monsterinsights_settings#/popular-posts"]'
      ),
      Ap = {
        name: "SettingsTabsNavigation",
        components: {
          PopularPostsNavigation: jp,
          AboutNavigation: bp,
          ToolsNavigation: pp,
          AddonsNavigation: np,
        },
        data: function () {
          return {
            text_settings: Object(c["a"])("General", "ga-premium"),
            text_engagement: Object(c["a"])("Engagement", "ga-premium"),
            text_ecommerce: Object(c["a"])("eCommerce", "ga-premium"),
            text_publisher: Object(c["a"])("Publisher", "ga-premium"),
            text_conversions: Object(c["a"])("Conversions", "ga-premium"),
            text_advanced: Object(c["a"])("Advanced", "ga-premium"),
            nav_open: !1,
          };
        },
        computed: {
          route: function () {
            return this.$route.name;
          },
          routeTitle: function () {
            return !!this.$route.meta.title && this.$route.meta.title;
          },
          buttonIconClass: function () {
            var t = "monstericon-arrow";
            return this.nav_open && (t += " monstericon-down"), t;
          },
          navClass: function () {
            var t = "monsterinsights-main-navigation";
            return (
              (this.nav_open || "addons" === this.route) &&
                (t += " monsterinsights-main-navigation-open"),
              t
            );
          },
          triggerClass: function () {
            var t = "monsterinsights-mobile-nav-trigger";
            return (
              this.nav_open &&
                (t += " monsterinsights-mobile-nav-trigger-open"),
              t
            );
          },
        },
        methods: {
          handleChange: function (t) {
            var e = 0;
            kp.length > 1 && (e = 1),
              "addons" === t
                ? (this.removeClasses(),
                  Pp && Pp.parentElement.classList.add("current"))
                : t.indexOf("tools") >= 0
                ? (this.removeClasses(),
                  Sp && Sp.parentElement.classList.add("current"))
                : t.indexOf("about") >= 0
                ? (this.removeClasses(),
                  $p && $p.parentElement.classList.add("current"))
                : t.indexOf("popular-posts") >= 0
                ? (this.removeClasses(),
                  Hp && Hp.parentElement.classList.add("current"))
                : (this.removeClasses(),
                  kp[e].parentElement.classList.add("current"));
          },
          removeClasses: function () {
            var t = 0;
            kp.length > 1 && (t = 1),
              Sp && Sp.parentElement.classList.remove("current"),
              Pp && Pp.parentElement.classList.remove("current"),
              $p && $p.parentElement.classList.remove("current"),
              Hp && Hp.parentElement.classList.remove("current"),
              kp[t].parentElement.classList.remove("current");
          },
          maybeCloseMenu: function () {
            var t = document.getElementById("wpwrap");
            if (t.classList.contains("wp-responsive-open")) {
              var e = document.getElementById("wp-admin-bar-menu-toggle");
              e && e.click();
            }
          },
        },
        watch: {
          $route: function (t) {
            this.handleChange(t.name),
              (this.nav_open = !1),
              this.maybeCloseMenu();
          },
        },
        created: function () {
          this.handleChange(this.route),
            kp.forEach(function (t) {
              t.href = t.href + "#/";
            });
        },
      },
      Lp = Ap,
      Tp = Object(b["a"])(Lp, Yc, Kc, !1, null, null, null),
      Mp = Tp.exports,
      Ep = s("4bdc"),
      Vp = s("9d59"),
      Dp = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.isRouteSettings
          ? s("button", {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: t.tooltip,
                  expression: "tooltip",
                },
              ],
              class: t.buttonClass(),
              domProps: { textContent: t._s(t.text_save_changes) },
              on: { click: t.simulateSave },
            })
          : t._e();
      },
      Ip = [];
    function Bp(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function zp(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Bp(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Bp(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Zp = {
        name: "SettingsButtonSave",
        computed: zp(
          {},
          Object(l["b"])({
            settings: "$_settings/settings",
            auth: "$_auth/auth",
          }),
          {
            route: function () {
              return this.$route.name;
            },
            isRouteSettings: function () {
              return (
                "addons" !== this.route &&
                "tools-url-builder" !== this.route &&
                "tools-import-export" !== this.route &&
                "tools-prettylinks-flow" !== this.route &&
                0 !== this.route.indexOf("about")
              );
            },
            is_authed: function () {
              var t = this.auth.network_ua
                ? this.auth.network_ua
                : this.auth.ua;
              return (
                t ||
                  (t = this.auth.network_manual_ua
                    ? this.auth.network_manual_ua
                    : this.auth.manual_ua),
                "" !== t
              );
            },
            tooltip: function () {
              return !this.is_authed && this.tooltip_data;
            },
          }
        ),
        data: function () {
          return {
            text_save_changes: Object(c["a"])("Save Changes", "ga-premium"),
            tooltip_data: {
              content: this.$mi_need_to_auth,
              autoHide: !1,
              trigger: "hover focus click",
            },
          };
        },
        methods: {
          buttonClass: function () {
            var t = "monsterinsights-button";
            return (
              (!this.settings.is_saving && this.is_authed) ||
                (t += " monsterinsights-button-disabled"),
              t
            );
          },
          simulateSave: function (t) {
            if (
              this.buttonClass().indexOf("monsterinsights-button-disabled") > -1
            )
              return !1;
            this.$store.dispatch("$_settings/simulateSave");
          },
        },
      },
      Up = Zp,
      Fp = Object(b["a"])(Up, Dp, Ip, !1, null, null, null),
      Np = Fp.exports,
      Wp = s("1915"),
      Rp = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return t.show_notice
          ? s(
              "div",
              {
                staticClass:
                  "monsterinsights-first-time-notice monsterinsights-container",
              },
              [
                t.show_notice
                  ? s(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-notice monsterinsights-notice-success",
                      },
                      [
                        s(
                          "div",
                          { staticClass: "monsterinsights-notice-inner" },
                          [
                            t.is_authed
                              ? s(
                                  "button",
                                  {
                                    staticClass: "dismiss-notice",
                                    on: {
                                      click: function (e) {
                                        return t.removeNotice();
                                      },
                                    },
                                  },
                                  [s("i", { staticClass: "monstericon-times" })]
                                )
                              : t._e(),
                            s("h2", {
                              staticClass: "notice-title",
                              domProps: { innerHTML: t._s(t.notice_title) },
                            }),
                            s("div", { staticClass: "notice-content" }, [
                              s("span", {
                                domProps: { innerHTML: t._s(t.notice_content) },
                                on: { click: t.maybe_open_video },
                              }),
                            ]),
                            t.is_authed
                              ? s(
                                  "div",
                                  {
                                    staticClass:
                                      "monsterinsights-notice-button",
                                  },
                                  [
                                    s("a", {
                                      staticClass: "monsterinsights-button",
                                      attrs: { href: t.reports_url },
                                      domProps: {
                                        textContent: t._s(t.notice_button),
                                      },
                                      on: {
                                        click: function (e) {
                                          return t.removeNotice();
                                        },
                                      },
                                    }),
                                  ]
                                )
                              : t._e(),
                          ]
                        ),
                      ]
                    )
                  : t._e(),
                t.show_video
                  ? s(
                      "welcome-overlay",
                      {
                        on: {
                          close: function (e) {
                            t.show_video = !1;
                          },
                        },
                      },
                      [
                        s("iframe", {
                          attrs: {
                            width: "1280",
                            height: "720",
                            src:
                              "https://www.youtube.com/embed/IbdKpSygp2U?autoplay=1&modestbranding=1&showinfo=0&rel=0&fs=1",
                            frameborder: "0",
                            allow:
                              "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                            allowfullscreen: "",
                          },
                        }),
                      ]
                    )
                  : t._e(),
              ],
              1
            )
          : t._e();
      },
      Gp = [];
    function qp(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Yp(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? qp(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : qp(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Kp = {
        name: "SettingsFirstTimeNotice",
        components: { WelcomeOverlay: wr["a"] },
        data: function () {
          return {
            notice_button: Object(c["a"])("View Reports", "ga-premium"),
            text_notice_title: Object(c["a"])(
              "Welcome to MonsterInsights",
              "ga-premium"
            ),
            text_notice_title_auth: Object(c["a"])(
              "Congratulations!",
              "ga-premium"
            ),
            notice_content_noauth: Object(c["d"])(
              Object(c["a"])(
                "MonsterInsights makes it easy to connect your website with Google Analytics and see all important website stats right inside your WordPress dashboard. In order to setup website analytics, please take a look at our %1$sGetting started video%2$s or use our %3$s to get you quickly set up.",
                "ga-premium"
              ),
              '<a href="https://www.youtube.com/watch?v=IbdKpSygp2U" target="_blank" id="monsterinsights-view-video">',
              "</a>",
              '<a href="' +
                this.$mi.wizard_url +
                '">' +
                Object(c["a"])("Onboarding Wizard", "ga-premium") +
                "</a>"
            ),
            notice_content_auth: Object(c["a"])(
              "You are now connected with MonsterInsights. We make it effortless for you to implement Google Analytics tracking and see the stats that matter, right inside the WordPress dashboard.",
              "ga-premium"
            ),
            reports_url: this.$mi.reports_url,
            is_network: this.$mi.network,
            show_video: !1,
          };
        },
        computed: Yp({}, Object(l["b"])({ auth: "$_auth/auth" }), {
          is_authed: function () {
            return this.auth.network_ua ? this.auth.network_ua : this.auth.ua;
          },
          has_ua: function () {
            var t = this.auth.network_ua ? this.auth.network_ua : this.auth.ua;
            return (
              t ||
                (t = this.auth.network_manual_ua
                  ? this.auth.network_manual_ua
                  : this.auth.manual_ua),
              "" !== t
            );
          },
          notice_content: function () {
            return this.is_authed
              ? this.notice_content_auth
              : this.notice_content_noauth;
          },
          notice_title: function () {
            return this.is_authed
              ? this.text_notice_title_auth
              : this.text_notice_title;
          },
          show_notice: function () {
            var t = [
                "general",
                "engagement",
                "ecommerce",
                "publisher",
                "conversions",
                "advanced",
              ],
              e = this.$route.name;
            return (
              !(t.indexOf(e) < 0) &&
              (!this.is_authed || !this.$mi.first_run_notice)
            );
          },
        }),
        methods: {
          removeNotice: function () {
            this.$mi.first_run_notice = !0;
            var t = new FormData();
            t.append("action", "monsterinsights_vue_dismiss_first_time_notice"),
              t.append("nonce", this.$mi.nonce),
              Ce.a.post(this.$mi.ajax, t);
          },
          maybe_open_video: function (t) {
            "monsterinsights-view-video" === t.target.id &&
              (t.preventDefault(), (this.show_video = !0));
          },
        },
      },
      Xp = Kp,
      Jp = Object(b["a"])(Xp, Rp, Gp, !1, null, null, null),
      Qp = Jp.exports,
      tu = s("b52e");
    function eu(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function su(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? eu(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : eu(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var iu = {
        name: "SettingsModuleSite",
        components: {
          TheQuickLinks: tu["a"],
          SettingsFirstTimeNotice: Qp,
          SettingsButtonSave: Np,
          TheAppNotices: Vp["a"],
          TheAppNavigation: Ep["a"],
          SettingsTabsNavigation: Mp,
          TheAppHeader: qc["a"],
          Notifications: Wp["a"],
        },
        router: Gc,
        created: function () {
          var t = "$_settings";
          t in this.$store._modules.root._children ||
            this.$store.registerModule(t, p["a"]);
        },
        computed: su(
          {},
          Object(l["b"])({
            blocked: "$_app/blocked",
            addons: "$_addons/addons",
            auth: "$_auth/auth",
          }),
          {
            routeClass: function () {
              return (
                "monsterinsights-admin-page monsterinsights-settings-panel monsterinsights-path-" +
                this.$route.name
              );
            },
            is_authed: function () {
              var t = this.auth.network_ua
                ? this.auth.network_ua
                : this.auth.ua;
              return (
                t ||
                  (t = this.auth.network_manual_ua
                    ? this.auth.network_manual_ua
                    : this.auth.manual_ua),
                "" !== t
              );
            },
          }
        ),
        mounted: function () {
          this.$store.dispatch("$_settings/getSettings"),
            this.$mi_loading_toast();
        },
        watch: {
          addons: function () {
            var t = this;
            Object.keys(this.addons).length > 0 &&
              "/oneclickupgrade" === this.$route.redirectedFrom &&
              this.$nextTick().then(function () {
                t.$swal({
                  type: "success",
                  customContainerClass: "monsterinsights-swal",
                  title: Object(c["a"])("Congratulations! ", "ga-premium"),
                  html: Object(c["a"])(
                    "You Successfully Unlocked the most powerful Analytics plugin",
                    "ga-premium"
                  ),
                });
              });
          },
        },
      },
      nu = iu,
      ou = (s("bb21"), Object(b["a"])(nu, o, a, !1, null, "7b5d62d6", null)),
      au = ou.exports,
      ru = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { class: t.routeClass },
          [
            s("the-app-header", [s("settings-button-save")], 1),
            "addons" === t.route
              ? s("the-app-navigation", [s("addons-navigation")], 1)
              : t._e(),
            s("the-app-notices"),
            s("router-view"),
            t.blocked
              ? s("div", { staticClass: "monsterinsights-blocked" })
              : t._e(),
            s("the-quick-links"),
          ],
          1
        );
      },
      lu = [],
      cu = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-settings-content settings-network" },
          [
            s(
              "settings-block",
              { attrs: { title: t.text_license_title } },
              [
                s("settings-input-license-network", {
                  attrs: { label: t.text_license_label },
                }),
              ],
              1
            ),
            s(
              "settings-block",
              { attrs: { title: t.text_auth_title } },
              [
                s("settings-input-authenticate", {
                  attrs: {
                    label: t.text_auth_label,
                    description: t.text_auth_description,
                  },
                }),
              ],
              1
            ),
            s(
              "settings-block",
              { attrs: { title: t.text_setup_wizard_title } },
              [
                s("label", {
                  domProps: { textContent: t._s(t.text_setup_wizard_label) },
                }),
                s("a", {
                  staticClass: "monsterinsights-button",
                  attrs: { href: t.wizard_url },
                  domProps: { textContent: t._s(t.text_setup_wizard_button) },
                }),
              ]
            ),
            s(
              "settings-block",
              { attrs: { title: t.text_misc_title } },
              [
                s("p", [
                  s("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { innerHTML: t._s(t.text_announcements_title) },
                  }),
                  s("span", {
                    domProps: {
                      innerHTML: t._s(t.text_announcements_description),
                    },
                  }),
                ]),
                s("settings-input-checkbox", {
                  attrs: {
                    name: "hide_am_notices",
                    label: t.text_announcements_label,
                  },
                }),
              ],
              1
            ),
            t.$isPro() ? t._e() : s("settings-lite-upsell-large"),
          ],
          1
        );
      },
      pu = [],
      uu = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "monsterinsights-settings-license-network" },
          [
            s("label", {
              attrs: { for: "monsterinsights-license-network-key" },
              domProps: { innerHTML: t._s(t.label) },
            }),
            t.license_network.is_invalid || "" === t.license_network.type
              ? s("div", [
                  s("input", {
                    class: { "monsterinsights-has-error": t.has_error },
                    attrs: {
                      id: "monsterinsights-license-network-key",
                      readonly: t.is_loading,
                      type: "text",
                      autocomplete: "off",
                      placeholder: t.text_license_placeholder,
                    },
                    domProps: { value: t.license_network.key },
                    on: { input: t.updateLicense },
                  }),
                ])
              : t._e(),
            !t.license_network.is_invalid && t.license_network.type
              ? s("div", { staticClass: "inline-field" }, [
                  s("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.license_key,
                        expression: "license_key",
                      },
                    ],
                    class: { "monsterinsights-has-error": t.has_error },
                    attrs: {
                      id: "monsterinsights-license-key-valid",
                      type: "text",
                      autocomplete: "off",
                      placeholder: t.text_license_placeholder,
                    },
                    domProps: { value: t.license_key },
                    on: {
                      input: [
                        function (e) {
                          e.target.composing ||
                            (t.license_key = e.target.value);
                        },
                        t.fieldInput,
                      ],
                    },
                  }),
                  s("button", {
                    staticClass: "monsterinsights-button",
                    domProps: { textContent: t._s(t.text_license_verify) },
                    on: { click: t.verifyLicense },
                  }),
                  s("button", {
                    staticClass:
                      "monsterinsights-button monsterinsights-button-secondary",
                    domProps: { textContent: t._s(t.text_license_deactivate) },
                    on: { click: t.deactivateLicense },
                  }),
                ])
              : t._e(),
            t.has_error
              ? s(
                  "label",
                  { staticClass: "monsterinsights-error license-key-error" },
                  [
                    s("i", { staticClass: "monstericon-warning-triangle" }),
                    s("span", { domProps: { innerHTML: t._s(t.has_error) } }),
                  ]
                )
              : t._e(),
            t.license_network.type && t.license_network.key
              ? s("div", { staticClass: "monsterinsights-license-type-text" }, [
                  s("span", {
                    domProps: {
                      innerHTML: t._s(
                        t.sprintf(t.text_license_type, t.license_network.type)
                      ),
                    },
                  }),
                  s(
                    "a",
                    {
                      attrs: { href: "#" },
                      on: {
                        click: function (e) {
                          return e.preventDefault(), t.refreshLicense(e);
                        },
                      },
                    },
                    [
                      s("span", {
                        domProps: { textContent: t._s(t.text_license_refresh) },
                      }),
                      s("settings-info-tooltip", {
                        attrs: { content: t.text_license_refresh_tooltip },
                      }),
                    ],
                    1
                  ),
                ])
              : t._e(),
          ]
        );
      },
      mu = [];
    function du(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function gu(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? du(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : du(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var hu = {
        name: "SettingsInputLicenseNetwork",
        components: { SettingsInfoTooltip: At["a"] },
        props: { label: String },
        data: function () {
          return {
            is_loading: !1,
            has_error: !1,
            text_license_type: Object(c["d"])(
              Object(c["a"])(
                "Your license key type for this site is %s. ",
                "ga-premium"
              ),
              '<span class="monsterinsights-dark">%s</span>'
            ),
            text_license_refresh: Object(c["a"])("Refresh Key.", "ga-premium"),
            text_license_verify: Object(c["a"])("Verify", "ga-premium"),
            text_license_deactivate: Object(c["a"])("Deactivate", "ga-premium"),
            text_license_placeholder: Object(c["a"])(
              "Paste your license key here",
              "ga-premium"
            ),
            text_license_refresh_tooltip: Object(c["a"])(
              "Click refresh if your license has been upgraded or the type is incorrect.",
              "ga-premium"
            ),
          };
        },
        computed: gu(
          {},
          Object(l["b"])({ license_network: "$_license/license_network" }),
          {
            license_key: {
              get: function () {
                return this.updated_license
                  ? this.updated_license
                  : this.license_network.key;
              },
              set: function (t) {
                this.updated_license = t;
              },
            },
          }
        ),
        methods: {
          sprintf: c["d"],
          fieldInput: fe()(function (t) {
            this.updateLicense(t);
          }, 500),
          updateLicense: function (t) {
            if ("" === t.target.value) return !1;
            this.is_loading = !0;
            var e = this;
            this.$mi_saving_toast({
              title: Object(c["a"])("Verifying License", "ga-premium"),
            }),
              (e.has_error = !1),
              this.$store
                .dispatch("$_license/updateNetworkLicense", t.target.value)
                .then(function (t) {
                  (e.is_loading = !1),
                    !1 === t.data.success
                      ? ((e.has_error = t.data.data.error),
                        e.$mi_error_toast({}))
                      : ((e.has_error = !1), e.$mi_success_toast({}));
                });
          },
          verifyLicense: function () {
            var t = this;
            this.$swal({
              type: "info",
              title: Object(c["a"])("Verifying License", "ga-premium"),
              allowOutsideClick: !1,
              allowEscapeKey: !1,
              allowEnterKey: !1,
              onOpen: function () {
                t.$swal.showLoading();
              },
            }),
              this.$store
                .dispatch("$_license/verifyLicense", t.license_key)
                .then(function (e) {
                  t.$swal.close(),
                    e.data.success
                      ? t.$swal({
                          type: "info",
                          title: Object(c["a"])("Success", "ga-premium"),
                          text: e.data.data.message,
                          confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                        })
                      : t.$swal({
                          type: "error",
                          title: Object(c["a"])(
                            "There was an error verifying your license",
                            "ga-premium"
                          ),
                          text: e.data.data.error,
                          confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                        });
                });
          },
          refreshLicense: function (t) {
            t.preventDefault();
            var e = this;
            this.$swal({
              type: "info",
              title: Object(c["a"])("Refreshing License", "ga-premium"),
              allowOutsideClick: !1,
              allowEscapeKey: !1,
              allowEnterKey: !1,
              onOpen: function () {
                e.$swal.showLoading();
              },
            }),
              this.$store
                .dispatch("$_license/validateLicense", !0)
                .then(function (t) {
                  e.$swal.close(),
                    t.data.success
                      ? e.$swal({
                          type: "info",
                          title: Object(c["a"])("Success", "ga-premium"),
                          text: t.data.data.message,
                          confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                        })
                      : e.$swal({
                          type: "error",
                          title: Object(c["a"])(
                            "There was an error refreshing your license",
                            "ga-premium"
                          ),
                          text: t.data.data.error,
                          confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                        });
                });
          },
          deactivateLicense: function (t) {
            t.preventDefault();
            var e = this;
            this.$swal({
              type: "info",
              title: Object(c["a"])("Deactivating License", "ga-premium"),
              allowOutsideClick: !1,
              allowEscapeKey: !1,
              allowEnterKey: !1,
              onOpen: function () {
                e.$swal.showLoading();
              },
            }),
              this.$store
                .dispatch("$_license/deactivateLicense", !0)
                .then(function (t) {
                  e.$swal.close(),
                    t.data.success
                      ? e.$swal({
                          type: "info",
                          title: Object(c["a"])("Success", "ga-premium"),
                          text: t.data.data.message,
                          confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                        })
                      : e.$swal({
                          type: "error",
                          title: Object(c["a"])(
                            "There was an error deactivating your license",
                            "ga-premium"
                          ),
                          text: t.data.data.error,
                          confirmButtonText: Object(c["a"])("Ok", "ga-premium"),
                        });
                });
          },
        },
      },
      _u = hu,
      Cu = Object(b["a"])(_u, uu, mu, !1, null, null, null),
      bu = Cu.exports,
      fu = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          {
            staticClass: "monsterinsights-upsell monsterinsights-upsell-large",
          },
          [
            s("h3", { domProps: { textContent: t._s(t.text_upsell_title) } }),
            s("h2", {
              domProps: { textContent: t._s(t.text_upsell_subtitle) },
            }),
            s("h4", {
              domProps: {
                innerHTML: t._s(
                  t.sprintf(
                    t.text_upsell_coupon,
                    "<span class='monsterinsights-coupon'>LITEUPGRADE</span>"
                  )
                ),
              },
              on: { click: t.selectText },
            }),
            s(
              "div",
              { staticClass: "monsterinsights-features" },
              t._l(t.text_features, function (e, i) {
                return s("span", {
                  key: i,
                  domProps: { textContent: t._s(e) },
                });
              }),
              0
            ),
            s("a", {
              staticClass:
                "monsterinsights-button monsterinsights-button-green monsterinsights-button-large",
              attrs: { target: "_blank", href: t.upgrade_button_url },
              domProps: { textContent: t._s(t.text_button_upgrade) },
            }),
          ]
        );
      },
      vu = [],
      xu = {
        name: "SettingsLiteUpsellLarge",
        data: function () {
          return {
            text_upsell_title: Object(c["a"])(
              "Thank you for being a loyal MonsterInsights Lite user.",
              "ga-premium"
            ),
            text_upsell_subtitle: Object(c["a"])(
              "Upgrade to MonsterInsights Pro and unlock all the awesome features.",
              "ga-premium"
            ),
            text_upsell_coupon: Object(c["a"])(
              "Use coupon code %s to get 50%% off.",
              "ga-premium"
            ),
            text_features: [
              Object(c["a"])("Dashboard widget", "ga-premium"),
              Object(c["a"])("Affiliate Links", "ga-premium"),
              Object(c["a"])("Custom Dimensions", "ga-premium"),
              Object(c["a"])("Enhanced Ecommerce", "ga-premium"),
              Object(c["a"])("Banner Ads", "ga-premium"),
              Object(c["a"])("Author Tracking", "ga-premium"),
              Object(c["a"])("Form Conversions", "ga-premium"),
              Object(c["a"])("Google AMP", "ga-premium"),
              Object(c["a"])("SEO Score Tracking", "ga-premium"),
            ],
            text_button_upgrade: Object(c["a"])(
              "Upgrade to MonsterInsights Pro",
              "ga-premium"
            ),
            upgrade_button_url: this.$getUpgradeUrl(
              "settings-panel",
              "ecommerce-tab"
            ),
          };
        },
        methods: {
          sprintf: c["d"],
          selectText: function (t) {
            var e,
              s,
              i = document.querySelector(".monsterinsights-coupon");
            window.getSelection &&
              ((s = window.getSelection()),
              (e = document.createRange()),
              e.selectNodeContents(i),
              s.removeAllRanges(),
              s.addRange(e));
          },
        },
      },
      Ou = xu,
      yu = Object(b["a"])(Ou, fu, vu, !1, null, null, null),
      wu = yu.exports,
      ju = {
        name: "SettingsNetwork",
        components: {
          SettingsLiteUpsellLarge: wu,
          SettingsInputCheckbox: R["a"],
          SettingsInputAuthenticate: D,
          SettingsInputLicenseNetwork: bu,
          SettingsBlock: v,
        },
        data: function () {
          return {
            text_license_title: Object(c["a"])("License Key", "ga-premium"),
            text_license_label: Object(c["d"])(
              Object(c["a"])(
                "Add your MonsterInsights license key from the email receipt or account area. %1$sRetrieve your license key%2$s.",
                "ga-premium"
              ),
              '<a href="#">',
              "</a>"
            ),
            text_auth_title: Object(c["a"])(
              "Google Authentication",
              "ga-premium"
            ),
            text_auth_label: Object(c["a"])(
              "Connect Google Analytics + WordPress",
              "ga-premium"
            ),
            text_auth_description: Object(c["a"])(
              "You will be taken to the MonsterInsights website where you'll need to connect your Analytics account.",
              "ga-premium"
            ),
            text_misc_title: Object(c["a"])("Miscellaneous", "ga-premium"),
            text_announcements_title: Object(c["a"])(
              "Hide Announcements",
              "ga-premium"
            ),
            text_announcements_description: Object(c["a"])(
              "Hides plugin announcements and update details. This includes critical notices we use to inform about deprecations and important required configuration changes.",
              "ga-premium"
            ),
            text_announcements_label: Object(c["a"])(
              "Hide Announcements",
              "ga-premium"
            ),
            text_setup_wizard_title: Object(c["a"])(
              "Setup Wizard",
              "ga-premium"
            ),
            text_setup_wizard_label: Object(c["a"])(
              "Use our configuration wizard to properly setup Google Analytics with WordPress (with just a few clicks).",
              "ga-premium"
            ),
            text_setup_wizard_button: Object(c["a"])(
              "Launch Setup Wizard",
              "ga-premium"
            ),
            wizard_url: this.$mi.wizard_url,
          };
        },
      },
      ku = ju,
      Pu = (s("1035"), Object(b["a"])(ku, cu, pu, !1, null, "3f0b0409", null)),
      Su = Pu.exports,
      $u = new n["a"]({
        routes: [
          { path: "*", redirect: "/" },
          { path: "/", name: "general", component: Su },
          { path: "/addons", name: "addons", component: hi },
          {
            path: "/about",
            component: Pi,
            children: [
              {
                name: "about-us",
                path: "",
                component: _n,
                meta: { title: Object(c["a"])("About Us", "ga-premium") },
              },
              {
                name: "about-getting-started",
                path: "getting-started",
                component: wn,
                meta: {
                  title: Object(c["a"])("Getting Started", "ga-premium"),
                },
              },
              {
                name: "about-lite-vs-pro",
                path: "lite-vs-pro",
                component: Hn,
                meta: { title: Object(c["a"])("Lite vs Pro", "ga-premium") },
              },
            ],
          },
        ],
      });
    function Hu(t, e) {
      var s = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(t);
        e &&
          (i = i.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          s.push.apply(s, i);
      }
      return s;
    }
    function Au(t) {
      for (var e = 1; e < arguments.length; e++) {
        var s = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Hu(Object(s), !0).forEach(function (e) {
              Object(r["a"])(t, e, s[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
          : Hu(Object(s)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(s, e)
              );
            });
      }
      return t;
    }
    var Lu = document.querySelectorAll(
        '[href="admin.php?page=monsterinsights_network"]'
      ),
      Tu = document.querySelector('[href*="monsterinsights_network#/addons"]'),
      Mu = document.querySelector('[href*="monsterinsights_network#/about"]'),
      Eu = {
        name: "SettingsModuleSite",
        components: {
          TheQuickLinks: tu["a"],
          AddonsNavigation: np,
          TheAppNavigation: Ep["a"],
          TheAppNotices: Vp["a"],
          SettingsButtonSave: Np,
          TheAppHeader: qc["a"],
        },
        router: $u,
        created: function () {
          var t = "$_settings";
          t in this.$store._modules.root._children ||
            this.$store.registerModule(t, p["a"]),
            this.handleChange(this.route),
            Lu.forEach(function (t) {
              t.href = t.href + "#/";
            });
        },
        mounted: function () {
          this.$store.dispatch("$_settings/getSettings"),
            this.$mi_loading_toast();
        },
        computed: Au({}, Object(l["b"])({ blocked: "$_app/blocked" }), {
          route: function () {
            return this.$route.name;
          },
          routeClass: function () {
            return (
              "monsterinsights-admin-page monsterinsights-settings-panel monsterinsights-settings-panel-network monsterinsights-path-" +
              this.$route.name
            );
          },
        }),
        watch: {
          $route: function (t) {
            this.handleChange(t.name);
          },
        },
        methods: {
          handleChange: function (t) {
            var e = 0;
            Lu.length > 1 && (e = 1),
              "addons" === t
                ? (Lu[e].parentElement.classList.remove("current"),
                  Tu && Tu.parentElement.classList.add("current"))
                : t.indexOf("about") >= 0
                ? (Lu[e].parentElement.classList.remove("current"),
                  Mu && Mu.parentElement.classList.add("current"),
                  Tu && Tu.parentElement.classList.remove("current"))
                : (Lu[e].parentElement.classList.add("current"),
                  Tu && Tu.parentElement.classList.remove("current"),
                  Mu && Mu.parentElement.classList.remove("current"));
          },
        },
      },
      Vu = Eu,
      Du = Object(b["a"])(Vu, ru, lu, !1, null, null, null),
      Iu = Du.exports,
      Bu = s("4360"),
      zu = s("619c"),
      Zu = s("e37d"),
      Uu = s("7460"),
      Fu = {
        install: function (t) {
          if (
            ((t.prototype.$mi_need_to_auth = Object(c["d"])(
              Object(c["a"])(
                "You need to %1$sconnect MonsterInsights%2$s first",
                "ga-premium"
              ),
              '<a href="' +
                t.prototype.$mi.wizard_url +
                '" class="monsterinsights-connect-inline">',
              "</a>"
            )),
            t.prototype.$swal)
          ) {
            var e = 0;
            (t.prototype.$mi_saving_toast = function (s) {
              e++;
              var i = s.animation,
                n = void 0 !== i && i,
                o = s.toast,
                a = void 0 === o || o,
                r = s.position,
                l = void 0 === r ? "top-end" : r,
                p = s.showConfirmButton,
                u = void 0 !== p && p,
                m = s.type,
                d = void 0 === m ? "info" : m,
                g = s.customClass,
                h = void 0 === g ? "mi-info" : g,
                _ = s.showCloseButton,
                C = void 0 === _ || _,
                b = s.title,
                f =
                  void 0 === b
                    ? Object(c["a"])("Saving Changes...", "ga-premium")
                    : b;
              return t.prototype.$swal({
                customContainerClass: "monsterinsights-swal",
                animation: n,
                toast: a,
                position: l,
                showConfirmButton: u,
                type: d,
                customClass: h,
                showCloseButton: C,
                title: f,
              });
            }),
              (t.prototype.$mi_success_toast = function (s) {
                if ((e--, e > 0)) return !1;
                var i = s.animation,
                  n = void 0 !== i && i,
                  o = s.toast,
                  a = void 0 === o || o,
                  r = s.position,
                  l = void 0 === r ? "top-end" : r,
                  p = s.showConfirmButton,
                  u = void 0 !== p && p,
                  m = s.type,
                  d = void 0 === m ? "success" : m,
                  g = s.timer,
                  h = void 0 === g ? 3e3 : g,
                  _ = s.customClass,
                  C = void 0 === _ ? "mi-success" : _,
                  b = s.showCloseButton,
                  f = void 0 === b || b,
                  v = s.title,
                  x =
                    void 0 === v
                      ? Object(c["a"])("Settings Updated", "ga-premium")
                      : v,
                  O = s.showCancelButton,
                  y = void 0 !== O && O,
                  w = s.confirmButtonText,
                  j = void 0 === w ? "" : w,
                  k = s.cancelButtonText,
                  P = void 0 === k ? "" : k,
                  S = s.text,
                  $ = void 0 === S ? "" : S;
                return t.prototype.$swal({
                  customContainerClass: "monsterinsights-swal",
                  animation: n,
                  toast: a,
                  position: l,
                  showConfirmButton: u,
                  type: d,
                  customClass: C,
                  showCloseButton: f,
                  title: x,
                  timer: h,
                  showCancelButton: y,
                  confirmButtonText: j,
                  cancelButtonText: P,
                  text: $,
                });
              }),
              (t.prototype.$mi_error_toast = function (s) {
                e--;
                var i = s.animation,
                  n = void 0 !== i && i,
                  o = s.toast,
                  a = void 0 === o || o,
                  r = s.position,
                  l = void 0 === r ? "top-end" : r,
                  p = s.showConfirmButton,
                  u = void 0 !== p && p,
                  m = s.type,
                  d = void 0 === m ? "error" : m,
                  g = s.customClass,
                  h = void 0 === g ? "mi-error" : g,
                  _ = s.showCloseButton,
                  C = void 0 === _ || _,
                  b = s.title,
                  f =
                    void 0 === b
                      ? Object(c["a"])("Could Not Save Changes", "ga-premium")
                      : b,
                  v = s.text,
                  x = void 0 === v ? "" : v,
                  O = s.footer,
                  y = void 0 === O ? "" : O,
                  w = s.confirmButtonText,
                  j = void 0 === w ? "" : w;
                return t.prototype.$swal({
                  customContainerClass: "monsterinsights-swal",
                  animation: n,
                  toast: a,
                  position: l,
                  showConfirmButton: u,
                  type: d,
                  customClass: h,
                  showCloseButton: C,
                  title: f,
                  text: x,
                  footer: y,
                  confirmButtonText: j,
                  onOpen: function () {
                    t.prototype.$swal.hideLoading();
                  },
                });
              }),
              (t.prototype.$mi_loading_toast = function (e) {
                t.prototype.$swal({
                  customContainerClass:
                    "monsterinsights-swal monsterinsights-swal-loading",
                  type: "info",
                  title: e || Object(c["a"])("Loading Settings", "ga-premium"),
                  allowOutsideClick: !1,
                  allowEscapeKey: !1,
                  allowEnterKey: !1,
                  onOpen: function () {
                    t.prototype.$swal.showLoading();
                  },
                });
              });
          }
        },
      },
      Nu = Fu,
      Wu = s("6c6b");
    s("5eda"), s("ec61"), s("9efe");
    (i["a"].config.productionTip = !1),
      i["a"].use(n["a"]),
      i["a"].use(zu["a"]),
      i["a"].use(Zu["a"], {
        defaultTemplate:
          '<div class="monsterinsights-tooltip" role="tooltip"><div class="monsterinsights-tooltip-arrow"></div><div class="monsterinsights-tooltip-inner"></div></div>',
        defaultArrowSelector:
          ".monsterinsights-tooltip-arrow, .monsterinsights-tooltip__arrow",
        defaultInnerSelector:
          ".monsterinsights-tooltip-inner, .monsterinsights-tooltip__inner",
      }),
      i["a"].use(Uu["a"]),
      Object(c["c"])(window.monsterinsights.translations, "ga-premium");
    var Ru = document.getElementById("monsterinsights-vue-site-settings");
    Object(Wu["a"])({ ctrl: !0 }),
      Ru &&
        (i["a"].use(Nu),
        new i["a"]({
          store: Bu["a"],
          mounted: function () {
            Bu["a"].dispatch("$_app/init"),
              Bu["a"].dispatch("$_auth/getAuth"),
              Bu["a"].dispatch("$_addons/getAddons"),
              Bu["a"].dispatch("$_notifications/getNotifications"),
              i["a"].prototype.$isPro() &&
                Bu["a"].dispatch("$_license/getLicense");
          },
          render: function (t) {
            return t(au);
          },
        }).$mount(Ru));
    var Gu = document.getElementById("monsterinsights-vue-network-settings");
    Gu &&
      (i["a"].use(Nu),
      new i["a"]({
        store: Bu["a"],
        mounted: function () {
          Bu["a"].dispatch("$_app/init"),
            Bu["a"].dispatch("$_auth/getAuth"),
            Bu["a"].dispatch("$_addons/getAddons"),
            Bu["a"].dispatch("$_notifications/getNotifications"),
            i["a"].prototype.$isPro() &&
              Bu["a"].dispatch("$_license/getLicense");
        },
        render: function (t) {
          return t(Iu);
        },
      }).$mount(Gu));
  },
  2950: function (t, e, s) {
    "use strict";
    var i = s("0af3"),
      n = s.n(i);
    n.a;
  },
  "2e60": function (t, e, s) {
    "use strict";
    var i = s("6c85"),
      n = s.n(i);
    n.a;
  },
  "2fdd": function (t, e, s) {},
  "408a": function (t, e, s) {
    var i = s("c6b6");
    t.exports = function (t) {
      if ("number" != typeof t && "Number" != i(t))
        throw TypeError("Incorrect invocation");
      return +t;
    };
  },
  "6c85": function (t, e, s) {},
  "6f53": function (t, e, s) {
    var i = s("83ab"),
      n = s("df75"),
      o = s("fc6a"),
      a = s("d1e7").f,
      r = function (t) {
        return function (e) {
          var s,
            r = o(e),
            l = n(r),
            c = l.length,
            p = 0,
            u = [];
          while (c > p)
            (s = l[p++]), (i && !a.call(r, s)) || u.push(t ? [s, r[s]] : r[s]);
          return u;
        };
      };
    t.exports = { entries: r(!0), values: r(!1) };
  },
  8028: function (t, e, s) {},
  "8a52": function (t, e, s) {},
  "8f8a": function (t, e, s) {
    "use strict";
    var i = s("00f4"),
      n = s.n(i);
    n.a;
  },
  9024: function (t, e, s) {},
  "95eb": function (t, e, s) {},
  "961a": function (t, e, s) {
    "use strict";
    var i = s("c7b5"),
      n = s.n(i);
    n.a;
  },
  9907: function (t, e, s) {
    "use strict";
    var i = s("055a"),
      n = s.n(i);
    n.a;
  },
  "9efe": function (t, e, s) {},
  a403: function (t, e, s) {
    "use strict";
    var i = s("cce7"),
      n = s.n(i);
    n.a;
  },
  a719: function (t, e, s) {},
  a987: function (t, e, s) {},
  ab3a: function (t, e, s) {
    "use strict";
    var i = s("cb72"),
      n = s.n(i);
    n.a;
  },
  aca8: function (t, e, s) {
    "use strict";
    var i = s("ad3f"),
      n = s.n(i);
    n.a;
  },
  ad3f: function (t, e, s) {},
  afcb: function (t, e, s) {},
  b227: function (t, e, s) {
    "use strict";
    var i = s("8a52"),
      n = s.n(i);
    n.a;
  },
  b62a: function (t, e, s) {
    "use strict";
    var i = s("95eb"),
      n = s.n(i);
    n.a;
  },
  b680: function (t, e, s) {
    "use strict";
    var i = s("23e7"),
      n = s("a691"),
      o = s("408a"),
      a = s("1148"),
      r = s("d039"),
      l = (1).toFixed,
      c = Math.floor,
      p = function (t, e, s) {
        return 0 === e
          ? s
          : e % 2 === 1
          ? p(t, e - 1, s * t)
          : p(t * t, e / 2, s);
      },
      u = function (t) {
        var e = 0,
          s = t;
        while (s >= 4096) (e += 12), (s /= 4096);
        while (s >= 2) (e += 1), (s /= 2);
        return e;
      },
      m =
        (l &&
          ("0.000" !== (8e-5).toFixed(3) ||
            "1" !== (0.9).toFixed(0) ||
            "1.25" !== (1.255).toFixed(2) ||
            "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
        !r(function () {
          l.call({});
        });
    i(
      { target: "Number", proto: !0, forced: m },
      {
        toFixed: function (t) {
          var e,
            s,
            i,
            r,
            l = o(this),
            m = n(t),
            d = [0, 0, 0, 0, 0, 0],
            g = "",
            h = "0",
            _ = function (t, e) {
              var s = -1,
                i = e;
              while (++s < 6)
                (i += t * d[s]), (d[s] = i % 1e7), (i = c(i / 1e7));
            },
            C = function (t) {
              var e = 6,
                s = 0;
              while (--e >= 0)
                (s += d[e]), (d[e] = c(s / t)), (s = (s % t) * 1e7);
            },
            b = function () {
              var t = 6,
                e = "";
              while (--t >= 0)
                if ("" !== e || 0 === t || 0 !== d[t]) {
                  var s = String(d[t]);
                  e = "" === e ? s : e + a.call("0", 7 - s.length) + s;
                }
              return e;
            };
          if (m < 0 || m > 20) throw RangeError("Incorrect fraction digits");
          if (l != l) return "NaN";
          if (l <= -1e21 || l >= 1e21) return String(l);
          if ((l < 0 && ((g = "-"), (l = -l)), l > 1e-21))
            if (
              ((e = u(l * p(2, 69, 1)) - 69),
              (s = e < 0 ? l * p(2, -e, 1) : l / p(2, e, 1)),
              (s *= 4503599627370496),
              (e = 52 - e),
              e > 0)
            ) {
              _(0, s), (i = m);
              while (i >= 7) _(1e7, 0), (i -= 7);
              _(p(10, i, 1), 0), (i = e - 1);
              while (i >= 23) C(1 << 23), (i -= 23);
              C(1 << i), _(1, 1), C(2), (h = b());
            } else _(0, s), _(1 << -e, 0), (h = b() + a.call("0", m));
          return (
            m > 0
              ? ((r = h.length),
                (h =
                  g +
                  (r <= m
                    ? "0." + a.call("0", m - r) + h
                    : h.slice(0, r - m) + "." + h.slice(r - m))))
              : (h = g + h),
            h
          );
        },
      }
    );
  },
  bb21: function (t, e, s) {
    "use strict";
    var i = s("cbc6"),
      n = s.n(i);
    n.a;
  },
  bcff: function (t, e, s) {},
  bf19: function (t, e, s) {
    "use strict";
    var i = s("23e7");
    i(
      { target: "URL", proto: !0, enumerable: !0 },
      {
        toJSON: function () {
          return URL.prototype.toString.call(this);
        },
      }
    );
  },
  c7b5: function (t, e, s) {},
  caad: function (t, e, s) {
    "use strict";
    var i = s("23e7"),
      n = s("4d64").includes,
      o = s("44d2"),
      a = s("ae40"),
      r = a("indexOf", { ACCESSORS: !0, 1: 0 });
    i(
      { target: "Array", proto: !0, forced: !r },
      {
        includes: function (t) {
          return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    ),
      o("includes");
  },
  cb72: function (t, e, s) {},
  cbc6: function (t, e, s) {},
  cce7: function (t, e, s) {},
  d28b: function (t, e, s) {
    var i = s("746f");
    i("iterator");
  },
  d4ec: function (t, e, s) {
    "use strict";
    var i = s("a719"),
      n = s.n(i);
    n.a;
  },
  d533: function (t, e, s) {},
  dbde: function (t, e, s) {
    "use strict";
    var i = s("fd2b"),
      n = s.n(i);
    n.a;
  },
  dde8: function (t, e, s) {
    "use strict";
    var i = s("bcff"),
      n = s.n(i);
    n.a;
  },
  e01a: function (t, e, s) {
    "use strict";
    var i = s("23e7"),
      n = s("83ab"),
      o = s("da84"),
      a = s("5135"),
      r = s("861d"),
      l = s("9bf2").f,
      c = s("e893"),
      p = o.Symbol;
    if (
      n &&
      "function" == typeof p &&
      (!("description" in p.prototype) || void 0 !== p().description)
    ) {
      var u = {},
        m = function () {
          var t =
              arguments.length < 1 || void 0 === arguments[0]
                ? void 0
                : String(arguments[0]),
            e = this instanceof m ? new p(t) : void 0 === t ? p() : p(t);
          return "" === t && (u[e] = !0), e;
        };
      c(m, p);
      var d = (m.prototype = p.prototype);
      d.constructor = m;
      var g = d.toString,
        h = "Symbol(test)" == String(p("test")),
        _ = /^Symbol\((.*)\)[^)]+$/;
      l(d, "description", {
        configurable: !0,
        get: function () {
          var t = r(this) ? this.valueOf() : this,
            e = g.call(t);
          if (a(u, t)) return "";
          var s = h ? e.slice(7, -1) : e.replace(_, "$1");
          return "" === s ? void 0 : s;
        },
      }),
        i({ global: !0, forced: !0 }, { Symbol: m });
    }
  },
  ec61: function (t, e, s) {},
  f604: function (t, e, s) {
    "use strict";
    var i = s("a987"),
      n = s.n(i);
    n.a;
  },
  f9ec: function (t, e, s) {},
  fd2b: function (t, e, s) {},
  fdc0: function (t, e, s) {
    "use strict";
    var i = s("2fdd"),
      n = s.n(i);
    n.a;
  },
  feb9: function (t, e, s) {},
});
