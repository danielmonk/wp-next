(function (t) {
  function e(e) {
    for (
      var s, o, r = e[0], l = e[1], c = e[2], d = 0, m = [];
      d < r.length;
      d++
    )
      (o = r[d]), i[o] && m.push(i[o][0]), (i[o] = 0);
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
    u && u(e);
    while (m.length) m.shift()();
    return a.push.apply(a, c || []), n();
  }
  function n() {
    for (var t, e = 0; e < a.length; e++) {
      for (var n = a[e], s = !0, r = 1; r < n.length; r++) {
        var l = n[r];
        0 !== i[l] && (s = !1);
      }
      s && (a.splice(e--, 1), (t = o((o.s = n[0]))));
    }
    return t;
  }
  var s = {},
    i = { wizard: 0 },
    a = [];
  function o(e) {
    if (s[e]) return s[e].exports;
    var n = (s[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = t),
    (o.c = s),
    (o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          o.d(
            n,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return n;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "https://monsterinsights.test/");
  var r = (window["monsterinsightsjsonp"] =
      window["monsterinsightsjsonp"] || []),
    l = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var c = 0; c < r.length; c++) e(r[c]);
  var u = l;
  a.push([1, "chunk-vendors", "chunk-common"]), n();
})({
  "0951": function (t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var s = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "monsterinsights-admin-page onboarding-wizard" },
          [
            n("the-wizard-header"),
            n("the-wizard-timeline"),
            n(
              "div",
              { staticClass: "monsterinsights-onboarding-wizard-container" },
              [
                n(
                  "div",
                  { staticClass: "monsterinsights-onboarding-wizard-content" },
                  [
                    n("onboarding-above-content"),
                    n("router-view"),
                    n("onboarding-below-content"),
                  ],
                  1
                ),
              ]
            ),
            "success" === t.route ? n("OnboardingBottomUpsell") : t._e(),
            t.blocked
              ? n("div", { staticClass: "monsterinsights-blocked" })
              : t._e(),
          ],
          1
        );
      },
      i = [],
      a =
        (n("a4d3"),
        n("4de4"),
        n("4160"),
        n("b0c0"),
        n("e439"),
        n("dbb4"),
        n("b64b"),
        n("159b"),
        n("fc11")),
      o = n("8c4f"),
      r = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "monsterinsights-onboarding-step-welcome" },
          [
            n("onboarding-content-header", {
              attrs: {
                title: t.text_header_title,
                subtitle: t.text_header_subtitle,
              },
            }),
            n(
              "div",
              { staticClass: "monsterinsights-onboarding-wizard-form" },
              [
                n("div", { staticClass: "monsterinsights-separator" }),
                n(
                  "form",
                  {
                    on: {
                      submit: function (e) {
                        return e.preventDefault(), t.handleSubmit(e);
                      },
                    },
                  },
                  [
                    n(
                      "div",
                      { staticClass: "monsterinsights-form-row" },
                      [
                        n(
                          "div",
                          { staticClass: "monsterinsights-form-label" },
                          [
                            n("label", {
                              domProps: {
                                textContent: t._s(t.text_category_label),
                              },
                            }),
                            n("p", {
                              staticClass: "monsterinsights-description",
                              domProps: {
                                textContent: t._s(t.text_category_sublabel),
                              },
                            }),
                          ]
                        ),
                        n("settings-input-radio", {
                          attrs: {
                            name: "site_type",
                            options: t.options,
                            auth_disabled: !1,
                          },
                        }),
                      ],
                      1
                    ),
                    n("div", { staticClass: "monsterinsights-separator" }),
                    n(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-form-row monsterinsights-form-buttons",
                      },
                      [
                        n("button", {
                          staticClass:
                            "monsterinsights-onboarding-button monsterinsights-onboarding-button-large",
                          attrs: { type: "submit", name: "next_step" },
                          domProps: { textContent: t._s(t.text_save) },
                        }),
                      ]
                    ),
                  ]
                ),
              ]
            ),
          ],
          1
        );
      },
      l = [],
      c = n("561c"),
      u = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("header", [
          n("h2", { domProps: { innerHTML: t._s(t.title) } }),
          t.subtitle
            ? n("p", {
                staticClass: "subtitle",
                domProps: { innerHTML: t._s(t.subtitle) },
              })
            : t._e(),
        ]);
      },
      d = [],
      m = {
        name: "OnboardingContentHeader",
        props: { title: String, subtitle: String },
      },
      p = m,
      h = n("2877"),
      g = Object(h["a"])(p, u, d, !1, null, null, null),
      b = g.exports,
      _ = n("6d70"),
      f = {
        name: "OnboardingStepWelcome",
        components: { SettingsInputRadio: _["a"], OnboardingContentHeader: b },
        data: function () {
          return {
            text_header_title: Object(c["a"])(
              "Welcome to MonsterInsights!",
              "ga-premium"
            ),
            text_header_subtitle: Object(c["a"])(
              "Let's get you set up.",
              "ga-premium"
            ),
            text_save: Object(c["a"])("Save and Continue", "ga-premium"),
            text_category_label: Object(c["a"])(
              "Which category best describes your website?",
              "ga-premium"
            ),
            text_category_sublabel: Object(c["a"])(
              "We will recommend the optimal settings for MonsterInsights based on your choice.",
              "ga-premium"
            ),
            options: [
              {
                value: "business",
                label: Object(c["a"])("Business Website", "ga-premium"),
              },
              {
                value: "publisher",
                label: Object(c["d"])(
                  Object(c["a"])("Publisher %1$s(Blog)%2$s", "ga-premium"),
                  "<small>",
                  "</small>"
                ),
              },
              {
                value: "ecommerce",
                label: Object(c["a"])("Ecommerce", "ga-premium"),
              },
            ],
          };
        },
        methods: {
          handleSubmit: function () {
            this.$router.push(this.$wizard_steps[1]);
          },
        },
      },
      w = f,
      v = Object(h["a"])(w, r, l, !1, null, null, null),
      A = v.exports,
      x = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "monsterinsights-onboarding-step-authenticate" },
          [
            n("onboarding-content-header", {
              attrs: {
                title: t.text_header_title,
                subtitle: t.text_header_subtitle,
              },
            }),
            n(
              "div",
              { staticClass: "monsterinsights-onboarding-wizard-form" },
              [
                n(
                  "form",
                  [
                    n(
                      "div",
                      { staticClass: "monsterinsights-form-row" },
                      [n("onboarding-license")],
                      1
                    ),
                    n("div", { staticClass: "monsterinsights-separator" }),
                    t.auth_error
                      ? [
                          n(
                            "div",
                            {
                              staticClass:
                                "monsterinsights-notice monsterinsights-notice-error",
                            },
                            [
                              n(
                                "div",
                                { staticClass: "monsterinsights-notice-inner" },
                                [
                                  n("span", {
                                    domProps: {
                                      textContent: t._s(t.text_error_auth),
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                          n("div", {
                            staticClass: "monsterinsights-separator",
                          }),
                          n("label", {
                            domProps: {
                              textContent: t._s(t.text_manual_label),
                            },
                          }),
                          n("p", {
                            domProps: {
                              innerHTML: t._s(t.text_manual_description),
                            },
                          }),
                          n("input", {
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
                            on: {
                              change: t.updateManualUa,
                              input: t.fieldInput,
                            },
                          }),
                          t.has_error
                            ? n(
                                "label",
                                { staticClass: "monsterinsights-error" },
                                [
                                  n("i", {
                                    staticClass: "monstericon-warning-triangle",
                                  }),
                                  n("span", {
                                    domProps: { innerHTML: t._s(t.has_error) },
                                  }),
                                ]
                              )
                            : t._e(),
                          n("div", {
                            staticClass: "monsterinsights-separator",
                          }),
                          n(
                            "div",
                            {
                              staticClass:
                                "monsterinsights-form-row monsterinsights-form-buttons",
                            },
                            [
                              n("button", {
                                class: t.manual_button_class,
                                attrs: { type: "submit", name: "next_step" },
                                domProps: { textContent: t._s(t.text_save) },
                                on: {
                                  click: function (e) {
                                    return (
                                      e.preventDefault(), t.handleSubmit(e)
                                    );
                                  },
                                },
                              }),
                            ]
                          ),
                        ]
                      : [
                          n("onboarding-authenticate", {
                            attrs: {
                              label: t.text_authenticate_label,
                              description: t.text_authenticate_description,
                            },
                            on: { nextstep: t.handleSubmit },
                          }),
                        ],
                  ],
                  2
                ),
              ]
            ),
          ],
          1
        );
      },
      O = [],
      y =
        (n("d3b7"),
        n("e25e"),
        n("ac1f"),
        n("3ca3"),
        n("841c"),
        n("ddb0"),
        n("2b3d"),
        n("2f62")),
      C = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          [
            t.license.type
              ? t.license.type && !t.auth.ua
                ? [
                    n("div", { staticClass: "monsterinsights-separator" }),
                    n("label", {
                      domProps: { textContent: t._s(t.text_license_label) },
                    }),
                    n("div", { staticClass: "settings-input-license" }, [
                      n("label", {
                        domProps: {
                          innerHTML: t._s(t.text_license_label_site),
                        },
                      }),
                      n(
                        "div",
                        { staticClass: "monsterinsights-form-input valid" },
                        [
                          n("input", {
                            attrs: {
                              id: "monsterinsights-license-key",
                              readonly: "readonly",
                              type: "text",
                            },
                            domProps: { value: t.license.key },
                          }),
                        ]
                      ),
                    ]),
                  ]
                : t._e()
              : [
                  n("div", { staticClass: "monsterinsights-separator" }),
                  n("label", {
                    domProps: { textContent: t._s(t.text_license_label) },
                  }),
                  n("settings-input-license", {
                    on: { "verify-license-start": t.showLoading },
                  }),
                ],
          ],
          2
        );
      },
      j = [],
      k = n("2ddd");
    function P(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s);
      }
      return n;
    }
    function E(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? P(Object(n), !0).forEach(function (e) {
              Object(a["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : P(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var $ = {
        name: "OnboardingLicense",
        components: { SettingsInputLicense: k["a"] },
        computed: E(
          {},
          Object(y["b"])({
            license: "$_license/license",
            license_network: "$_license/license_network",
            auth: "$_auth/auth",
          })
        ),
        data: function () {
          return {
            text_license_label: Object(c["a"])("License Key", "ga-premium"),
            text_license_label_site: Object(c["d"])(
              Object(c["a"])(
                "Add your MonsterInsights license key from the email receipt or account area. %1$sRetrieve your license key%2$s.",
                "ga-premium"
              ),
              '<a href="' +
                this.$getUrl(
                  "license",
                  "settings_panel",
                  "https://www.monsterinsights.com/my-account/"
                ) +
                '" target="_blank">',
              "</a>"
            ),
          };
        },
        methods: {
          showLoading: function () {
            var t = this;
            t.$swal({
              type: "info",
              title: Object(c["a"])("Verifying License...", "ga-premium"),
              allowOutsideClick: !1,
              allowEscapeKey: !1,
              allowEnterKey: !1,
              onOpen: function () {
                t.$swal.showLoading();
              },
            });
          },
        },
      },
      S = $,
      M = Object(h["a"])(S, C, j, !1, null, null, null),
      L = M.exports,
      z = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass:
              "settings-input monsterinsights-settings-input-authenticate",
          },
          [
            !t.auth.network_ua || t.is_network || t.auth.ua
              ? t._e()
              : n("settings-network-notice", [
                  n("strong", {
                    domProps: { textContent: t._s(t.text_auth_network) },
                  }),
                  n("span", {
                    domProps: { textContent: t._s(t.text_auth_network_2) },
                  }),
                ]),
            (
              t.is_network
                ? "" !== t.license_network.type && t.auth.network_ua
                : "" !== t.license.type && t.auth.ua
            )
              ? t._e()
              : n("div", [
                  n("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.label) },
                  }),
                  n("p", { domProps: { innerHTML: t._s(t.description) } }),
                  n("button", {
                    directives: [
                      {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: t.tooltip_data,
                        expression: "tooltip_data",
                      },
                    ],
                    staticClass:
                      "monsterinsights-onboarding-button monsterinsights-onboarding-button-large",
                    class: {
                      "monsterinsights-button-disabled": t.is_network
                        ? !t.license_network.type
                        : !t.license.type,
                    },
                    domProps: { textContent: t._s(t.text_button_connect) },
                    on: { click: t.doAuth },
                  }),
                ]),
            (
              t.is_network
                ? t.license_network.type && t.auth.network_ua
                : t.license.type && t.auth.ua
            )
              ? n("div", { staticClass: "monsterinsights-auth-info" }, [
                  n("span", {
                    staticClass: "monsterinsights-dark",
                    domProps: { textContent: t._s(t.text_website_profile) },
                  }),
                  n("p", [
                    n("span", {
                      domProps: { textContent: t._s(t.text_active_profile) },
                    }),
                    t._v(": "),
                    n("span", {
                      domProps: {
                        textContent: t._s(
                          t.is_network
                            ? t.auth.network_viewname
                            : t.auth.viewname
                        ),
                      },
                    }),
                  ]),
                  n("div", [
                    n("div", { staticClass: "monsterinsights-auth-actions" }, [
                      n("button", {
                        staticClass:
                          "monsterinsights-onboarding-button monsterinsights-onboarding-button-large",
                        domProps: {
                          textContent: t._s(t.text_button_reconnect),
                        },
                        on: { click: t.doReAuth },
                      }),
                      n(
                        "button",
                        {
                          staticClass:
                            "monsterinsights-text-button monsterinsights-pull-right",
                          attrs: { type: "submit" },
                          on: {
                            click: function (e) {
                              return e.preventDefault(), t.submitForm(e);
                            },
                          },
                        },
                        [
                          n("span", {
                            domProps: { textContent: t._s(t.text_skip) },
                          }),
                          n("i", { staticClass: "monstericon-arrow-right" }),
                        ]
                      ),
                    ]),
                  ]),
                ])
              : t._e(),
          ],
          1
        );
      },
      I = [],
      B = n("b333");
    function H(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s);
      }
      return n;
    }
    function U(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? H(Object(n), !0).forEach(function (e) {
              Object(a["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : H(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var D = {
        name: "OnboardingAuthenticate",
        components: { SettingsNetworkNotice: B["a"] },
        props: { label: String, description: String },
        data: function () {
          return {
            is_network: this.$mi.network,
            text_button_connect: Object(c["a"])(
              "Connect MonsterInsights",
              "ga-premium"
            ),
            text_button_reconnect: Object(c["a"])(
              "Reconnect MonsterInsights",
              "ga-premium"
            ),
            text_website_profile: Object(c["a"])(
              "Website profile",
              "ga-premium"
            ),
            text_active_profile: Object(c["a"])("Active profile", "ga-premium"),
            text_auth_network: Object(c["a"])(
              "Your website profile has been set at the network level of your WordPress Multisite.",
              "ga-premium"
            ),
            text_auth_network_2: Object(c["a"])(
              "If you would like to use a different profile for this subsite, you can authenticate below.",
              "ga-premium"
            ),
            text_skip: Object(c["a"])("Skip and Keep Connection", "ga-premium"),
          };
        },
        computed: U(
          {},
          Object(y["b"])({
            license: "$_license/license",
            license_network: "$_license/license_network",
            auth: "$_auth/auth",
          }),
          {
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
          }
        ),
        methods: {
          submitForm: function () {
            this.$emit("nextstep", !0);
          },
          doAuth: function (t) {
            if (
              (t.preventDefault(),
              (!this.license.type && !this.is_network) ||
                (this.is_network && !this.license_network.type))
            )
              return !1;
            var e = this;
            this.$swal({
              customContainerClass:
                "monsterinsights-swal monsterinsights-swal-loading",
              type: "info",
              title: Object(c["a"])("Authenticating", "ga-premium"),
              allowOutsideClick: !1,
              allowEscapeKey: !1,
              allowEnterKey: !1,
              onOpen: function () {
                e.$swal.showLoading(), e.$addCustomLoader();
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
              customContainerClass:
                "monsterinsights-swal monsterinsights-swal-loading",
              type: "info",
              title: Object(c["a"])("Re-Authenticating", "ga-premium"),
              allowOutsideClick: !1,
              allowEscapeKey: !1,
              allowEnterKey: !1,
              onOpen: function () {
                e.$swal.showLoading(), e.$addCustomLoader();
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
        },
      },
      T = D,
      R = Object(h["a"])(T, z, I, !1, null, null, null),
      V = R.exports,
      Z = n("f7fe"),
      W = n.n(Z);
    function Q(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s);
      }
      return n;
    }
    function F(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Q(Object(n), !0).forEach(function (e) {
              Object(a["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Q(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var N = {
        name: "OnboardingStepWelcome",
        components: {
          OnboardingAuthenticate: V,
          OnboardingLicense: L,
          OnboardingContentHeader: b,
        },
        data: function () {
          return {
            text_header_title: Object(c["a"])(
              "Connect MonsterInsights to Your Website",
              "ga-premium"
            ),
            text_header_subtitle: Object(c["a"])(
              "MonsterInsights connects Google Analytics to WordPress and shows you stats that matter.",
              "ga-premium"
            ),
            text_authenticate_label: Object(c["a"])(
              "Connect Google Analytics + WordPress",
              "ga-premium"
            ),
            text_authenticate_description: Object(c["a"])(
              "You will be taken to the MonsterInsights website where you'll need to connect your Analytics account.",
              "ga-premium"
            ),
            text_error_auth: Object(c["a"])(
              "Whoops, something went wrong and we weren't able to connect to MonsterInsights. Please enter your Google UA code manually.",
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
            text_save: Object(c["a"])("Save and Continue", "ga-premium"),
            is_network: this.$mi.network,
            has_error: !1,
            auth_error: !1,
            manual_valid: !0,
          };
        },
        computed: F({}, Object(y["b"])({ auth: "$_auth/auth" }), {
          manual_button_class: function () {
            var t =
              "monsterinsights-onboarding-button monsterinsights-onboarding-button-large";
            return (
              this.manual_valid || (t += " monsterinsights-button-disabled"), t
            );
          },
        }),
        methods: {
          fieldInput: W()(function (t) {
            this.updateManualUa(t);
          }, 500),
          handleSubmit: function () {
            if (this.auth_error && "" === this.auth.manual_ua)
              return (
                (this.manual_valid = !1),
                void (this.has_error = Object(c["a"])(
                  "UA code can't be empty",
                  "ga-premium"
                ))
              );
            (this.auth_error && !this.manual_valid) ||
              this.$router.push(this.$wizard_steps[2]);
          },
          updateManualUa: function (t) {
            var e = this;
            e.$swal({
              type: "info",
              title: Object(c["a"])("Saving UA code...", "ga-premium"),
              allowOutsideClick: !1,
              allowEscapeKey: !1,
              allowEnterKey: !1,
              onOpen: function () {
                e.$swal.showLoading();
              },
            }),
              (e.has_error = !1),
              (e.manual_valid = !1),
              this.$store
                .dispatch("$_auth/updateManualUa", {
                  ua: t.target.value,
                  network: this.is_network,
                })
                .then(function (t) {
                  !1 === t.success
                    ? ((e.has_error = t.data.error), e.$swal.close())
                    : ((e.has_error = !1),
                      (e.manual_valid = !0),
                      e.$swal.close());
                });
          },
        },
        mounted: function () {
          if ("undefined" !== typeof URLSearchParams) {
            var t = new URLSearchParams(window.location.search);
            if (t) {
              var e = t.get("mi-auth-error");
              ("1" !== e && "2" !== e) ||
                ((this.auth_error = parseInt(e)),
                this.auth.manual_ua && (this.manual_valid = !0));
            }
          }
        },
      },
      X = N,
      G = Object(h["a"])(X, x, O, !1, null, null, null),
      K = G.exports,
      Y = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            staticClass: "monsterinsights-onboarding-step-recommended-settings",
          },
          [
            n("onboarding-content-header", {
              attrs: {
                title: t.text_header_title,
                subtitle: t.text_header_subtitle,
              },
            }),
            n(
              "div",
              { staticClass: "monsterinsights-onboarding-wizard-form" },
              [
                n(
                  "form",
                  {
                    attrs: { action: "", method: "post" },
                    on: {
                      submit: function (e) {
                        return e.preventDefault(), t.handleSubmit(e);
                      },
                    },
                  },
                  [
                    n("div", { staticClass: "monsterinsights-separator" }),
                    n("settings-input-checkbox", {
                      attrs: {
                        label: t.text_events_label,
                        description: t.text_events_description,
                        tooltip: t.text_events_tooltip,
                        faux: !0,
                        faux_tooltip: t.text_events_faux_tooltip,
                      },
                    }),
                    n("div", { staticClass: "monsterinsights-separator" }),
                    n("settings-input-checkbox", {
                      attrs: {
                        label: t.text_link_attribution_label,
                        description: t.text_link_attribution_description,
                        tooltip: t.text_link_attribution_tooltip,
                        faux: !0,
                        faux_tooltip: t.text_link_attribution_faux_tooltip,
                      },
                    }),
                    n("div", { staticClass: "monsterinsights-separator" }),
                    n("settings-input-text", {
                      attrs: {
                        default_value: "doc,pdf,ppt,zip,xls,docx,pptx,xlsx",
                        name: "extensions_of_files",
                        label: t.text_extensions_of_files_label,
                        description: t.text_extensions_of_files_description,
                        tooltip: t.text_extensions_of_files_tooltip,
                      },
                    }),
                    n("div", { staticClass: "monsterinsights-separator" }),
                    n(
                      "p",
                      [
                        n("label", {
                          domProps: {
                            textContent: t._s(t.text_affiliate_label),
                          },
                        }),
                        n("span", {
                          staticClass: "monsterinsights-sublabel",
                          domProps: {
                            innerHTML: t._s(
                              t.text_affiliate_repeater_description
                            ),
                          },
                        }),
                        n("settings-info-tooltip", {
                          attrs: { content: t.text_affiliate_tooltip_content },
                        }),
                      ],
                      1
                    ),
                    n("settings-input-repeater", {
                      attrs: {
                        structure: t.repeater_structure,
                        name: "affiliate_links",
                        data: t.settings["affiliate_links"],
                      },
                    }),
                    n("div", { staticClass: "monsterinsights-separator" }),
                    n("settings-input-select", {
                      attrs: {
                        options: t.user_roles,
                        forced: t.user_roles_manage_options,
                        multiple: !0,
                        name: "view_reports",
                        label: t.text_permissions_view_label,
                        description: t.text_permissions_view_description,
                        tooltip: t.text_permissions_view_tooltip,
                        addtext: t.text_add_role,
                      },
                    }),
                    n("div", { staticClass: "monsterinsights-separator" }),
                    n("settings-input-checkbox", {
                      attrs: {
                        "value-on": "all",
                        "value-off": "none",
                        name: "automatic_updates",
                        label: t.text_updates_label,
                        description: t.text_updates_description,
                        tooltip: t.text_updates_tooltip,
                      },
                    }),
                    n("div", { staticClass: "monsterinsights-separator" }),
                    n("onboarding-improve"),
                    n(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-form-row monsterinsights-form-buttons",
                      },
                      [
                        n("button", {
                          staticClass:
                            "monsterinsights-onboarding-button monsterinsights-onboarding-button-large",
                          attrs: { type: "submit", name: "next_step" },
                          domProps: { textContent: t._s(t.text_save) },
                        }),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
          ],
          1
        );
      },
      J = [],
      q = n("088d"),
      tt = n("c472"),
      et = n("6ffa"),
      nt = n("93ec"),
      st = n("aa9f"),
      it = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div");
      },
      at = [],
      ot = { name: "OnboardingImprove" },
      rt = ot,
      lt = Object(h["a"])(rt, it, at, !1, null, null, null),
      ct = lt.exports;
    function ut(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s);
      }
      return n;
    }
    function dt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ut(Object(n), !0).forEach(function (e) {
              Object(a["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : ut(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var mt = {
        name: "OnboardingStepRecommendedSettings",
        components: {
          OnboardingImprove: ct,
          SettingsInputSelect: st["a"],
          SettingsInfoTooltip: nt["a"],
          SettingsInputRepeater: et["a"],
          SettingsInputText: tt["a"],
          SettingsInputCheckbox: q["a"],
          OnboardingContentHeader: b,
        },
        data: function () {
          return {
            text_header_title: Object(c["a"])(
              "Recommended Settings",
              "ga-premium"
            ),
            text_header_subtitle: Object(c["a"])(
              "MonsterInsights recommends the following settings based on your configuration.",
              "ga-premium"
            ),
            text_events_label: Object(c["a"])("Events Tracking", "ga-premium"),
            text_events_description: Object(c["a"])(
              "Must have for all click tracking on site.",
              "ga-premium"
            ),
            text_events_tooltip: Object(c["a"])(
              "MonsterInsights uses an advanced system to automatically detect all outbound links, download links, affiliate links, telephone links, mail links, and more automatically. We do all the work for you so you don't have to write any code.",
              "ga-premium"
            ),
            text_link_attribution_label: Object(c["a"])(
              "Enhanced Link Attribution",
              "ga-premium"
            ),
            text_link_attribution_description: Object(c["a"])(
              "Improves the accuracy of your In-Page Analytics.",
              "ga-premium"
            ),
            text_link_attribution_tooltip: Object(c["a"])(
              "MonsterInsights will automatically help Google determine which links are unique and where they are on your site so that your In-Page Analytics reporting will be more accurate.",
              "ga-premium"
            ),
            text_updates_label: Object(c["a"])(
              "Install Updates Automatically",
              "ga-premium"
            ),
            text_updates_description: Object(c["a"])(
              "Get the latest features, bug fixes, and security updates as they are released.",
              "ga-premium"
            ),
            text_updates_tooltip: Object(c["a"])(
              "To ensure you get the latest bugfixes and security updates and avoid needing to spend time logging into your WordPress site to update MonsterInsights, we offer the ability to automatically have MonsterInsights update itself.",
              "ga-premium"
            ),
            text_extensions_of_files_label: Object(c["a"])(
              "File Download Tracking",
              "ga-premium"
            ),
            text_extensions_of_files_description: Object(c["a"])(
              "Helps you see file downloads data.",
              "ga-premium"
            ),
            text_extensions_of_files_tooltip: Object(c["a"])(
              "MonsterInsights will automatically track downloads of common file types from links you have inserted onto your website. For example: want to know how many of your site's visitors have downloaded a PDF or other file you offer your visitors to download on your site? MonsterInsights makes this both easy, and code-free! You can customize the file types to track at any time from our settings panel.",
              "ga-premium"
            ),
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
            text_affiliate_repeater_description: Object(c["a"])(
              "Helps you increase affiliate revenue.",
              "ga-premium"
            ),
            text_affiliate_tooltip_content: Object(c["a"])(
              "MonsterInsights will automatically help you track affiliate links that use internal looking urls like example.com/go/ or example.com/refer/. You can add custom affiliate patterns on our settings panel when you finish the onboarding wizard.",
              "ga-premium"
            ),
            text_affiliate_label: Object(c["a"])(
              "Affiliate Link Tracking",
              "ga-premium"
            ),
            text_permissions_view_label: Object(c["a"])(
              "Who Can See Reports",
              "ga-premium"
            ),
            text_permissions_view_description: Object(c["a"])(
              "These user roles will be able to access MonsterInsights's reports in the WordPress admin area.",
              "ga-premium"
            ),
            text_permissions_view_tooltip: Object(c["a"])(
              "Users that have at least one of these roles will be able to view the reports, along with any user with the manage_options capability.",
              "ga-premium"
            ),
            text_save: Object(c["a"])("Save and continue", "ga-premium"),
            text_events_faux_tooltip: Object(c["a"])(
              "Events Tracking is enabled the moment you set up MonsterInsights",
              "ga-premium"
            ),
            text_link_attribution_faux_tooltip: Object(c["a"])(
              "Enhanced Link Attribution is enabled the moment you set up MonsterInsights",
              "ga-premium"
            ),
            text_add_role: Object(c["a"])("+ Add Role", "ga-premium"),
          };
        },
        methods: {
          handleSubmit: function () {
            this.$router.push(this.$wizard_steps[3]);
          },
        },
        computed: dt({}, Object(y["b"])({ settings: "$_settings/settings" }), {
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
        }),
      },
      pt = mt,
      ht = Object(h["a"])(pt, Y, J, !1, null, null, null),
      gt = ht.exports,
      bt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "monsterinsights-onboarding-step-recommended-addons" },
          [
            n("onboarding-content-header", {
              attrs: {
                title: t.text_header_title,
                subtitle: t.text_header_subtitle,
              },
            }),
            n(
              "div",
              { staticClass: "monsterinsights-onboarding-wizard-form" },
              [
                n(
                  "form",
                  {
                    attrs: { action: "", method: "post" },
                    on: {
                      submit: function (e) {
                        return e.preventDefault(), t.handleSubmit(e);
                      },
                    },
                  },
                  [
                    n("div", { staticClass: "monsterinsights-separator" }),
                    t._l(t.recommendedAddons(), function (e, s) {
                      return [
                        t.addons[e]
                          ? n("onboarding-addon", {
                              key: s,
                              attrs: { addon: t.addons[e] },
                            })
                          : t._e(),
                        n("div", {
                          key: s + "separator",
                          staticClass: "monsterinsights-separator",
                        }),
                      ];
                    }),
                    n("slide-down-up", { attrs: { done: t.hideButton } }, [
                      t.view_all
                        ? n(
                            "div",
                            [
                              t._l(t.other_addons, function (t, e) {
                                return [
                                  n("onboarding-addon", {
                                    key: e,
                                    attrs: { addon: t },
                                  }),
                                  n("div", {
                                    key: e + "separator",
                                    staticClass: "monsterinsights-separator",
                                  }),
                                ];
                              }),
                            ],
                            2
                          )
                        : t._e(),
                    ]),
                    t.view_button
                      ? [
                          n(
                            "div",
                            { staticClass: "monsterinsights-form-row" },
                            [
                              n("h2", {
                                domProps: {
                                  textContent: t._s(t.text_other_addons),
                                },
                              }),
                              n("button", {
                                staticClass:
                                  "monsterinsights-text-button monsterinsights-green-link",
                                attrs: { type: "button" },
                                domProps: {
                                  textContent: t._s(t.text_other_addons_button),
                                },
                                on: {
                                  click: function (e) {
                                    return e.preventDefault(), t.viewAll();
                                  },
                                },
                              }),
                            ]
                          ),
                          n("div", {
                            staticClass: "monsterinsights-separator",
                          }),
                        ]
                      : t._e(),
                    n(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-form-row monsterinsights-form-buttons",
                      },
                      [
                        n("button", {
                          staticClass:
                            "monsterinsights-onboarding-button monsterinsights-onboarding-button-large",
                          attrs: { type: "submit", name: "next_step" },
                          domProps: { textContent: t._s(t.text_save) },
                        }),
                      ]
                    ),
                  ],
                  2
                ),
              ]
            ),
          ],
          1
        );
      },
      _t = [],
      ft =
        (n("c975"),
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "monsterinsights-addon-row" }, [
            n("div", { staticClass: "monsterinsights-addon-icon" }, [
              n("div", { class: t.icon_class }),
            ]),
            n("div", { staticClass: "monsterinsights-addon-text" }, [
              n("label", { domProps: { textContent: t._s(t.addon.title) } }),
              n("p", { domProps: { innerHTML: t._s(t.addon.excerpt) } }),
              n("a", {
                attrs: { href: t.href, target: "_blank" },
                domProps: { textContent: t._s(t.text_learn_more) },
              }),
            ]),
            n("div", { staticClass: "monsterinsights-addon-button" }, [
              "licensed" !== t.addon.type
                ? n("a", {
                    staticClass:
                      "monsterinsights-onboarding-button monsterinsights-onboarding-button-regular",
                    attrs: { href: t.upgrade_url },
                    domProps: { textContent: t._s(t.text_upgrade) },
                  })
                : t.addon.active
                ? n("button", {
                    staticClass:
                      "monsterinsights-onboarding-button monsterinsights-onboarding-button-regular monsterinsights-button-activated",
                    attrs: {
                      type: "button",
                      "data-addon": "",
                      "data-basename": "",
                    },
                    domProps: { textContent: t._s(t.text_activated) },
                  })
                : t.addon.installed
                ? n("button", {
                    staticClass:
                      "monsterinsights-onboarding-button monsterinsights-onboarding-button-regular",
                    attrs: { type: "button" },
                    domProps: { textContent: t._s(t.text_activate) },
                    on: {
                      click: function (e) {
                        return e.preventDefault(), t.activateAddon(e);
                      },
                    },
                  })
                : n("button", {
                    staticClass:
                      "monsterinsights-onboarding-button monsterinsights-onboarding-button-regular",
                    attrs: { type: "button" },
                    domProps: { textContent: t._s(t.text_install) },
                    on: {
                      click: function (e) {
                        return e.preventDefault(), t.installAddon(e);
                      },
                    },
                  }),
            ]),
          ]);
        }),
      wt = [],
      vt = {
        name: "OnboardingAddon",
        props: { addon: Object },
        data: function () {
          return {
            text_learn_more: Object(c["a"])("Learn More", "ga-premium"),
            text_activated: Object(c["a"])("Activated", "ga-premium"),
            text_install: Object(c["a"])("Install Addon", "ga-premium"),
            text_activate: Object(c["a"])("Activate", "ga-premium"),
            text_upgrade: Object(c["a"])("Upgrade to Pro", "ga-premium"),
            href: "https://www.monsterinsights.com/addons/" + this.addon.slug,
            icon_class: "monsterinsights-addon-icon-" + this.addon.slug,
            upgrade_url: this.$getUpgradeUrl("onboarding-wizard", "addons"),
          };
        },
        methods: {
          installAddon: function (t) {
            t.target.classList.add("monsterinsights-button-disabled"),
              this.$store
                .dispatch("$_addons/installAddon", this.addon)
                .then(function () {
                  t.target.classList.remove("monsterinsights-button-disabled");
                });
          },
          activateAddon: function (t) {
            t.target.classList.add("monsterinsights-button-disabled"),
              this.$store
                .dispatch("$_addons/activateAddon", this.addon)
                .then(function () {
                  t.target.classList.remove("monsterinsights-button-disabled");
                });
          },
        },
      },
      At = vt,
      xt = Object(h["a"])(At, ft, wt, !1, null, null, null),
      Ot = xt.exports,
      yt = n("d98d");
    function Ct(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s);
      }
      return n;
    }
    function jt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Ct(Object(n), !0).forEach(function (e) {
              Object(a["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Ct(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var kt = {
        name: "OnboardingStepRecommendedAddons",
        components: {
          SlideDownUp: yt["a"],
          OnboardingAddon: Ot,
          OnboardingContentHeader: b,
        },
        data: function () {
          return {
            text_header_title: Object(c["a"])(
              "Recommended Addons",
              "ga-premium"
            ),
            text_header_subtitle: Object(c["a"])(
              "MonsterInsights recommends the following addons based on your configuration.",
              "ga-premium"
            ),
            text_other_addons: Object(c["a"])("Other Addons", "ga-premium"),
            text_other_addons_button: Object(c["a"])(
              "View all MonsterInsights addons",
              "ga-premium"
            ),
            text_save: Object(c["a"])("Save and continue", "ga-premium"),
            view_all: !1,
            view_button: !0,
          };
        },
        computed: jt(
          {},
          Object(y["b"])({
            settings: "$_settings/settings",
            addons: "$_addons/addons",
          }),
          {
            other_addons: function () {
              var t = [];
              for (var e in this.addons)
                this.addons[e].type &&
                  this.recommendedAddons().indexOf(this.addons[e].slug) < 0 &&
                  t.push(this.addons[e]);
              return t;
            },
          }
        ),
        methods: {
          handleSubmit: function () {
            var t = this.$mi.network,
              e = t ? 3 : 4;
            this.addons["wpforms-lite"].active && e++,
              this.$router.push(this.$wizard_steps[e]);
          },
          recommendedAddons: function () {
            var t = this.settings["site_type"],
              e = ["forms", "page-insights"];
            "publisher" === t &&
              (e = [
                "dimensions",
                "page-insights",
                "facebook-instant-articles",
                "amp",
              ]),
              "ecommerce" === t &&
                (e = ["ecommerce", "dimensions", "forms", "google-optimize"]),
              this.$mi.is_eu && e.push("eu-compliance");
            var n = [];
            for (var s in e) this.addons[e[s]] && n.push(e[s]);
            return n;
          },
          viewAll: function () {
            this.view_all = !0;
          },
          hideButton: function () {
            this.view_button = !1;
          },
        },
      },
      Pt = kt,
      Et = Object(h["a"])(Pt, bt, _t, !1, null, null, null),
      $t = Et.exports,
      St = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "monsterinsights-onboarding-step-wpforms" },
          [
            n("onboarding-content-header", {
              attrs: {
                title: t.text_header_title,
                subtitle: t.text_header_subtitle,
              },
            }),
            n(
              "div",
              { staticClass: "monsterinsights-onboarding-wizard-form" },
              [
                n(
                  "form",
                  {
                    attrs: { action: "", method: "post" },
                    on: {
                      submit: function (e) {
                        return e.preventDefault(), t.handleSubmit(e);
                      },
                    },
                  },
                  [
                    n("div", { staticClass: "monsterinsights-separator" }),
                    n(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-addon-row monsterinsights-wpforms-row",
                      },
                      [
                        t._m(0),
                        n(
                          "div",
                          { staticClass: "monsterinsights-addon-text" },
                          [
                            n("label", {
                              domProps: {
                                textContent: t._s(t.text_wpforms_label),
                              },
                            }),
                            n("p", {
                              domProps: {
                                textContent: t._s(t.text_wpforms_description),
                              },
                            }),
                          ]
                        ),
                      ]
                    ),
                    n("div", { staticClass: "monsterinsights-separator" }),
                    n(
                      "div",
                      {
                        staticClass:
                          "monsterinsights-form-row monsterinsights-form-buttons",
                      },
                      [
                        n(
                          "div",
                          { staticClass: "monsterinsights-form-input" },
                          [
                            n("button", {
                              class: t.buttonClass(),
                              attrs: { type: "button" },
                              domProps: { textContent: t._s(t.button_text) },
                              on: {
                                click: function (e) {
                                  return e.preventDefault(), t.installPlugin(e);
                                },
                              },
                            }),
                            t.loading
                              ? t._e()
                              : n(
                                  "button",
                                  {
                                    staticClass:
                                      "monsterinsights-text-button monsterinsights-pull-right",
                                    attrs: {
                                      type: "submit",
                                      name: "next_step",
                                    },
                                  },
                                  [
                                    n("span", {
                                      domProps: {
                                        textContent: t._s(t.text_skip_step),
                                      },
                                    }),
                                    n("i", {
                                      staticClass: "monstericon-arrow-right",
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
            ),
          ],
          1
        );
      },
      Mt = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "monsterinsights-addon-icon" }, [
            n("div", { staticClass: "monsterinsights-addon-wpforms" }),
          ]);
        },
      ],
      Lt = {
        name: "OnboardingStepWpforms",
        components: { OnboardingContentHeader: b },
        data: function () {
          return {
            text_header_title: Object(c["a"])(
              "MonsterInsights Recommends WPForms",
              "ga-premium"
            ),
            text_header_subtitle: Object(c["a"])(
              "Built by the folks behind MonsterInsights, WPForms is the most beginner friendly form plugin in the market.",
              "ga-premium"
            ),
            text_wpforms_label: Object(c["a"])(
              "Used on over 4,000,000 websites!",
              "ga-premium"
            ),
            text_wpforms_description: Object(c["a"])(
              "WPForms allow you to create beautiful contact forms, subscription forms, payment forms, and other types of forms for your site in minutes, not hours!",
              "ga-premium"
            ),
            text_skip_step: Object(c["a"])("Skip this Step", "ga-premium"),
            text_install_wpforms: Object(c["a"])(
              "Continue & Install WPForms",
              "ga-premium"
            ),
            text_installing_wpforms: Object(c["a"])(
              "Installing...",
              "ga-premium"
            ),
            button_text: "",
            loading: !1,
          };
        },
        mounted: function () {
          this.button_text = this.text_install_wpforms;
        },
        methods: {
          handleSubmit: function () {
            this.$router.push(this.$wizard_steps[5]);
          },
          buttonClass: function () {
            var t =
              "monsterinsights-onboarding-button monsterinsights-onboarding-button-large monsterinsights-install-wpforms";
            return this.loading && (t += " monsterinsights-button-disabled"), t;
          },
          installPlugin: function () {
            var t = this;
            (this.loading = !0),
              (this.button_text = this.text_installing_wpforms),
              this.$store.dispatch("$_addons/installWPForms").then(function () {
                (t.loading = !1),
                  (t.button_text = t.text_install_wpforms),
                  t.handleSubmit();
              });
          },
        },
      },
      zt = Lt,
      It = Object(h["a"])(zt, St, Mt, !1, null, null, null),
      Bt = It.exports,
      Ht = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "monsterinsights-onboarding-step-success" },
          [
            n("onboarding-content-header", {
              attrs: {
                title: t.text_header_title,
                subtitle: t.text_header_subtitle,
              },
            }),
            n(
              "div",
              { staticClass: "monsterinsights-onboarding-wizard-form" },
              [
                n(
                  "ol",
                  [
                    n("li", { domProps: { innerHTML: t._s(t.text_notice) } }),
                    t._l(t.install_errors, function (e, s) {
                      return [
                        n("li", { key: s, domProps: { innerHTML: t._s(e) } }),
                      ];
                    }),
                    n("li", {
                      domProps: { innerHTML: t._s(t.text_newsletter) },
                    }),
                  ],
                  2
                ),
                n("div", { staticClass: "monsterinsights-separator" }),
                n(
                  "div",
                  {
                    staticClass:
                      "monsterinsights-form-row monsterinsights-form-buttons",
                  },
                  [
                    n("div", { staticClass: "monsterinsights-form-input" }, [
                      n("a", {
                        staticClass:
                          "monsterinsights-onboarding-button monsterinsights-onboarding-button-large",
                        attrs: { href: t.exit_url },
                        domProps: { textContent: t._s(t.text_exit) },
                      }),
                    ]),
                  ]
                ),
              ]
            ),
          ],
          1
        );
      },
      Ut = [];
    function Dt(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s);
      }
      return n;
    }
    function Tt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Dt(Object(n), !0).forEach(function (e) {
              Object(a["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Dt(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var Rt,
      Vt,
      Zt,
      Wt,
      Qt = {
        name: "OnboardingStepSuccess",
        components: { OnboardingContentHeader: b },
        data: function () {
          return {
            text_header_title: Object(c["a"])(
              "Awesome, You're All Set!",
              "ga-premium"
            ),
            text_header_subtitle: Object(c["a"])(
              "MonsterInsights is all set up and ready to use. We've verified that the tracking code is deployed properly and collecting data.",
              "ga-premium"
            ),
            text_notice: Object(c["d"])(
              Object(c["a"])(
                "%1$sPlease Note:%2$s While Google Analytics is properly setup and tracking everything, it does not send the data back to WordPress immediately. Depending on the size of your website, it can take between a few hours to 24 hours for reports to populate.",
                "ga-premium"
              ),
              "<strong>",
              "</strong>"
            ),
            text_newsletter: Object(c["d"])(
              Object(c["a"])(
                "%1$sSubscribe to the MonsterInsights blog%2$s for tips on how to get more traffic and grow your business.",
                "ga-premium"
              ),
              '<a target="_blank" href="https://www.monsterinsights.com/blog/">',
              "</a>"
            ),
            text_exit: Object(c["a"])(
              "Finish Setup & Exit Wizard",
              "ga-premium"
            ),
            exit_url: this.$mi.exit_url,
          };
        },
        computed: Tt(
          {},
          Object(y["b"])({ install_errors: "$_onboarding/install_errors" })
        ),
        mounted: function () {
          var t = this;
          t.$swal({
            type: "info",
            title: Object(c["a"])("Checking your website...", "ga-premium"),
            allowOutsideClick: !1,
            allowEscapeKey: !1,
            allowEnterKey: !1,
            onOpen: function () {
              t.$swal.showLoading();
            },
          }),
            this.$store.dispatch("$_onboarding/getErrors").then(function () {
              t.$swal.close();
            });
        },
      },
      Ft = Qt,
      Nt = Object(h["a"])(Ft, Ht, Ut, !1, null, null, null),
      Xt = Nt.exports,
      Gt = new o["a"]({
        routes: [
          { path: "*", redirect: "/" },
          { path: "/", name: "welcome", component: A },
          { path: "/authenticate", name: "authenticate", component: K },
          {
            path: "/recommended_settings",
            name: "recommended_settings",
            component: gt,
          },
          {
            path: "/recommended_addons",
            name: "recommended_addons",
            component: $t,
          },
          { path: "/wpforms", name: "wpforms", component: Bt },
          { path: "/success", name: "success", component: Xt },
        ],
        scrollBehavior: function () {
          return { x: 0, y: 0 };
        },
      }),
      Kt = n("7220"),
      Yt = n("bc3a"),
      Jt = n.n(Yt),
      qt = n("2b0e"),
      te = function (t) {
        return new Promise(function (e) {
          var n = new FormData(),
            s = qt["a"].prototype.$addQueryArg(
              qt["a"].prototype.$mi.ajax,
              "page",
              "monsterinsights-onboarding"
            );
          n.append("action", "monsterinsights_onboarding_get_errors"),
            Jt.a
              .post(s, n)
              .then(function (t) {
                e(t.data);
              })
              .catch(function (e) {
                if ((t.dispatch("$_app/block", !1, { root: !0 }), e.response)) {
                  var n = e.response;
                  return qt["a"].prototype.$mi_error_toast({
                    title: Object(c["d"])(
                      Object(c["a"])(
                        "Can't load errors. Error: %1$s, %2$s",
                        "ga-premium"
                      ),
                      n.status,
                      n.statusText
                    ),
                  });
                }
                qt["a"].prototype.$mi_error_toast({
                  title: Object(c["a"])(
                    "You appear to be offline.",
                    "ga-premium"
                  ),
                });
              });
        });
      },
      ee = { fetchErrors: te },
      ne = function (t) {
        var e = ee.fetchErrors(t);
        return (
          e
            .then(function (e) {
              t.commit("ERRORS_UPDATED", e);
            })
            .catch(function (t) {
              console.error(t);
            }),
          e
        );
      },
      se = { getErrors: ne },
      ie = function (t) {
        return t.install_errors;
      },
      ae = { install_errors: ie },
      oe = function (t, e) {
        t.install_errors = e;
      },
      re = { ERRORS_UPDATED: oe },
      le = { install_errors: [] },
      ce = {
        namespaced: !0,
        state: le,
        actions: se,
        getters: ae,
        mutations: re,
      },
      ue =
        (n("7795"),
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "header",
            { staticClass: "monsterinsights-onboarding-header" },
            [
              n("nav", { staticClass: "monsterinsights-header-navigation" }, [
                n(
                  "a",
                  {
                    staticClass: "monsterinsights-exit-button",
                    attrs: { href: t.href },
                  },
                  [
                    n("i", { staticClass: "monstericon-times-circle" }),
                    n("span", { domProps: { textContent: t._s(t.text_exit) } }),
                  ]
                ),
              ]),
              t._m(0),
            ]
          );
        }),
      de = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "h1",
            { staticClass: "monsterinsights-onboarding-wizard-logo" },
            [
              n("div", { staticClass: "monsterinsights-logo" }, [
                n("div", { staticClass: "monsterinsights-bg-img" }),
              ]),
            ]
          );
        },
      ],
      me = {
        name: "TheWizardHeader",
        data: function () {
          return {
            text_exit: Object(c["a"])("Exit Setup", "ga-premium"),
            href: this.$mi.exit_url,
          };
        },
      },
      pe = me,
      he = Object(h["a"])(pe, ue, de, !1, null, null, null),
      ge = he.exports,
      be = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "monsterinsights-onboarding-wizard-container" },
          [
            n(
              "div",
              { staticClass: "monsterinsights-onboarding-wizard-steps" },
              [
                t._l(t.steps, function (e, s) {
                  return [
                    s > 0
                      ? n("div", { key: s + "line", class: t.lineClass(s) })
                      : t._e(),
                    n("div", { key: s, class: t.stepClass(s) }),
                  ];
                }),
              ],
              2
            ),
          ]
        );
      },
      _e = [],
      fe = {
        name: "TheWizardTimeline",
        data: function () {
          return { steps: this.$wizard_steps };
        },
        methods: {
          stepClass: function (t) {
            var e = "monsterinsights-onboarding-wizard-step",
              n = 0;
            for (var s in this.steps)
              this.$route.name === this.steps[s] && (n = s);
            return (
              t < n &&
                (e += " monsterinsights-onboarding-wizard-step-completed"),
              parseInt(t) === parseInt(n) &&
                (e += " monsterinsights-onboarding-wizard-step-active"),
              e
            );
          },
          lineClass: function (t) {
            var e = "monsterinsights-onboarding-wizard-step-line",
              n = 0;
            for (var s in this.steps)
              this.$route.name === this.steps[s] && (n = s);
            return (
              t <= n && (e += " monsterinsights-onboarding-wizard-line-active"),
              e
            );
          },
        },
      },
      we = fe,
      ve = Object(h["a"])(we, be, _e, !1, null, null, null),
      Ae = ve.exports,
      xe = { name: "OnboardingAboveContent" },
      Oe = xe,
      ye = Object(h["a"])(Oe, Rt, Vt, !1, null, null, null),
      Ce = ye.exports,
      je = { name: "OnboardingBelowContent" },
      ke = je,
      Pe = Object(h["a"])(ke, Zt, Wt, !1, null, null, null),
      Ee = Pe.exports,
      $e = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div");
      },
      Se = [],
      Me = { name: "OnboardingBottomUpsell" },
      Le = Me,
      ze = Object(h["a"])(Le, $e, Se, !1, null, null, null),
      Ie = ze.exports;
    function Be(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(t);
        e &&
          (s = s.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, s);
      }
      return n;
    }
    function He(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Be(Object(n), !0).forEach(function (e) {
              Object(a["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Be(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var Ue = {
        name: "WizardModuleOnboarding",
        components: {
          OnboardingBottomUpsell: Ie,
          OnboardingBelowContent: Ee,
          OnboardingAboveContent: Ce,
          TheWizardTimeline: Ae,
          TheWizardHeader: ge,
        },
        router: Gt,
        created: function () {
          var t = "$_settings";
          t in this.$store._modules.root._children ||
            this.$store.registerModule(t, Kt["a"]);
          var e = "$_onboarding";
          e in this.$store._modules.root._children ||
            this.$store.registerModule(e, ce);
        },
        computed: He({}, Object(y["b"])({ blocked: "$_app/blocked" }), {
          route: function () {
            return this.$route.name;
          },
        }),
        mounted: function () {
          this.$mi_loading_toast(),
            this.$store.dispatch("$_settings/getSettings");
        },
      },
      De = Ue,
      Te = (n("ac0d"), Object(h["a"])(De, s, i, !1, null, "09b2f69e", null)),
      Re = Te.exports,
      Ve = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "monsterinsights-admin-page monsterinsights-welcome" },
          [
            n("div", { staticClass: "monsterinsights-welcome-container" }, [
              n(
                "div",
                {
                  staticClass:
                    "monsterinsights-welcome-block monsterinsights-welcome-block-first",
                },
                [
                  t._m(0),
                  n(
                    "div",
                    { staticClass: "monsterinsights-welcome-block-inner" },
                    [
                      n("h3", {
                        domProps: { textContent: t._s(t.welcome_title) },
                      }),
                      n("p", {
                        staticClass: "monsterinsights-subtitle",
                        domProps: {
                          textContent: t._s(t.text_welcome_subtitle),
                        },
                      }),
                    ]
                  ),
                  n(
                    "div",
                    { staticClass: "monsterinsights-welcome-video" },
                    [
                      n("div", {
                        staticClass:
                          "monsterinsights-welcome-video-image monsterinsights-bg-img",
                        on: {
                          click: function (e) {
                            t.welcome_video = !0;
                          },
                        },
                      }),
                      t.welcome_video
                        ? n(
                            "welcome-overlay",
                            {
                              attrs: { id: "welcome-video" },
                              on: {
                                close: function (e) {
                                  t.welcome_video = !1;
                                },
                              },
                            },
                            [
                              n("iframe", {
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
                  ),
                  n(
                    "div",
                    { staticClass: "monsterinsights-welcome-block-inner" },
                    [
                      n("p", {
                        domProps: { textContent: t._s(t.text_above_buttons) },
                      }),
                      n("div", { staticClass: "monsterinsights-button-wrap" }, [
                        n(
                          "div",
                          { staticClass: "monsterinsights-welcome-left" },
                          [
                            n("a", {
                              staticClass:
                                "monsterinsights-button monsterinsights-button-large",
                              attrs: { href: t.wizard_url },
                              domProps: {
                                textContent: t._s(t.text_wizard_button),
                              },
                            }),
                          ]
                        ),
                        n(
                          "div",
                          { staticClass: "monsterinsights-welcome-right" },
                          [
                            n("a", {
                              staticClass:
                                "monsterinsights-button monsterinsights-button-alt monsterinsights-button-large",
                              attrs: {
                                href: t.$getUrl(
                                  "welcome-screen",
                                  "guide",
                                  "https://www.monsterinsights.com/docs/connect-google-analytics/"
                                ),
                                rel: "noopener noreferrer",
                              },
                              domProps: {
                                textContent: t._s(t.text_read_more_button),
                              },
                            }),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
              n("div", { staticClass: "monsterinsights-welcome-block" }, [
                n(
                  "div",
                  { staticClass: "monsterinsights-welcome-block-inner" },
                  [
                    n("h3", {
                      domProps: { textContent: t._s(t.text_features_title) },
                    }),
                    n("p", {
                      staticClass: "monsterinsights-subtitle",
                      domProps: { textContent: t._s(t.text_features_subtitle) },
                    }),
                  ]
                ),
                n(
                  "div",
                  {
                    staticClass:
                      "monsterinsights-welcome-block-inner monsterinsights-welcome-features",
                  },
                  t._l(t.features, function (e, s) {
                    return n(
                      "div",
                      {
                        key: s,
                        staticClass: "monsterinsights-welcome-feature",
                      },
                      [
                        n("div", {
                          staticClass: "monsterinsights-welcome-feature-img",
                          domProps: { innerHTML: t._s(e.icon) },
                        }),
                        n(
                          "div",
                          {
                            staticClass: "monsterinsights-welcome-feature-text",
                          },
                          [
                            n("h4", {
                              domProps: { textContent: t._s(e.name) },
                            }),
                            n("p", {
                              domProps: { textContent: t._s(e.description) },
                            }),
                          ]
                        ),
                      ]
                    );
                  }),
                  0
                ),
                n(
                  "div",
                  {
                    staticClass:
                      "monsterinsights-welcome-block-inner monsterinsights-welcome-block-footer",
                  },
                  [
                    n("a", {
                      staticClass: "monsterinsights-button",
                      attrs: {
                        href: t.$getUrl(
                          "welcome-screen",
                          "features-button",
                          "https://monsterinsights.com/features"
                        ),
                        target: "_blank",
                      },
                      domProps: { textContent: t._s(t.text_view_all_features) },
                    }),
                  ]
                ),
              ]),
            ]),
          ]
        );
      },
      Ze = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "monsterinsights-welcome-logo-container" },
            [
              n("div", {
                staticClass:
                  "monsterinsights-welcome-logo monsterinsights-bg-img",
              }),
            ]
          );
        },
      ],
      We = (n("8c6a"), n("a4cc")),
      Qe = {
        name: "WizardModuleWelcome",
        components: { WelcomeOverlay: We["a"] },
        data: function () {
          return {
            text_welcome_title: Object(c["a"])(
              "Welcome to MonsterInsights",
              "ga-premium"
            ),
            text_welcome_subtitle: Object(c["a"])(
              "Thank you for choosing MonsterInsights - The Most Powerful WordPress Analytics Plugin",
              "ga-premium"
            ),
            text_above_buttons: Object(c["a"])(
              "MonsterInsights makes it “effortless” to setup Google Analytics in WordPress, the RIGHT Way. You can watch the video tutorial or use our 3 minute setup wizard.",
              "ga-premium"
            ),
            text_wizard_button: Object(c["a"])(
              "Launch the Wizard!",
              "ga-premium"
            ),
            text_read_more_button: Object(c["a"])(
              "Read the Full Guide",
              "ga-premium"
            ),
            text_features_title: Object(c["a"])(
              "MonsterInsights Features & Addons",
              "ga-premium"
            ),
            text_features_subtitle: Object(c["a"])(
              "Here are the features that make MonsterInsights the most powerful and user-friendly WordPress analytics plugin in the market.",
              "ga-premium"
            ),
            text_view_all_features: Object(c["a"])(
              "See All Features",
              "ga-premium"
            ),
            text_upgrade_to_pro: Object(c["a"])("Upgrade to PRO", "ga-premium"),
            text_per_year: Object(c["a"])("per year", "ga-premium"),
            text_upgrade_now: Object(c["a"])("Upgrade Now", "ga-premium"),
            text_testimonials: Object(c["a"])("Testimonials", "ga-premium"),
            wizard_url: this.$mi.wizard_url,
            features: [
              {
                name: Object(c["a"])("Universal Tracking", "ga-premium"),
                description: Object(c["a"])(
                  "Setup universal website tracking across devices and campaigns with just a few clicks (without any code).",
                  "ga-premium"
                ),
                icon:
                  '<svg class="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 192 192" enable-background="new 0 0 192 192" xml:space="preserve"><rect fill="none" width="192" height="192"></rect><g><g><path fill="#509FE2" d="M130,29v132c0,14.77,10.189,23,21,23c10,0,21-7,21-23V30c0-13.54-10-22-21-22S130,17.33,130,29z"></path></g><g><path fill="#ACBDC9" d="M75,96v65c0,14.77,10.19,23,21,23c10,0,21-7,21-23V97c0-13.54-10-22-21-22S75,84.33,75,96z"></path></g><g><circle fill="#D6E2EA" cx="41" cy="163" r="21"></circle></g></g></svg>',
              },
              {
                name: Object(c["a"])(
                  "Google Analytics Dashboard",
                  "ga-premium"
                ),
                description: Object(c["a"])(
                  "See your website analytics report right inside your WordPress dashboard with actionable insights.",
                  "ga-premium"
                ),
                icon:
                  '<svg class="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75 76"><image width="69" height="56" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAAA4CAMAAACc78UEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAANlBMVEUAAADU4OrU4OrU4OrU4OrU4OrU4OrU4OrU4OrU4OrU4OrU4OrU4OrU4OrU4OrU4OrU4OoAAACAdzTSAAAAEHRSTlMAEHCvv2CPMECA35/vz1Agb16hXgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfjBgcLLAR8mk7DAAAAlklEQVRIx+3XvQ7CMAwE4GuduM0f5P2fFoewICGk2ghl8C23fUpO6VBg2ymYQhFA6OYwDjvSO86/KyHlZxPPLlyvKywrkrSsuTXpQ7peVgQZM+bRNznZ6KRV2kshnbJ/uFHWrDsfV5krV9as++Wu6ylN+ym+rXtCmeSKK6644oorrrjiykqKMUsp958oKHZk/H7FZEzEA/X+Y6vtpvg9AAAAAElFTkSuQmCC"></image>    <image id="Vector_Smart_Object-2" data-name="Vector Smart Object" x="15" y="19" width="40" height="25" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAZCAMAAAB0BpxXAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAANlBMVEUAAABQn+BQn+BQn+BQn+BQn+BQn+BQn+BQn+BQn+BQn+BQn+BQn+BQn+BQn+BQn+BQn+AAAAD+uSRLAAAAEHRSTlMAEGCAUO/fMCCfz3Cvv0CP0Y9aNgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfjBgcLLAR8mk7DAAABC0lEQVQ4y4VS0QKEIAgrTU+tcP//tQd6npAP8dYcMca27aV25717I3EdAVzx88ZLjcfM/YWYgbynApym/QJCThoKiKITuBX46WOC1vNjREOMQPHRNvNQ7nMsYGIEXDyFn9RwpoTKQkETO/vXYUDXl0bVjgFirNdEkc1ionE88RTaXED4eyY69L/M0lBEFlfWmxaMGo+ySVqIbPZN3nsqwwsZcSw8/7+nnNdR77ACJUhVXYQWDXaJacE5iEbgCJKSzctedBTdy1UlSHvWemKLTGonnXUjPPPxy4WNBxNLj8lES/OcTGSafzSio6zyNZh0tCwgS5Cmt+NI5odtxycquyH451HcEiRxnR7AF4SxERp7xl7rAAAAAElFTkSuQmCC"></image>    <image id="wordpress" x="35" y="35" width="39" height="39" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAnCAMAAAC7faEHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACo1BMVEX////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9/v75+/vu8vTT3OLI09vH09vI1NvN197J1NzZ4Ob19/ji6OzF0dnW3uTy9ff+/v7t8fTR2uHt8fPd5On7/Pzj6O3L1t28ydOzw86ywc24xtHAzdbT3OPs8PP+/v/6+/zQ2uH8/P3r7/LG0tr29/n7/P3V3uSsvcm6yNLk6u3F0dr2+Pnn7O/M1t62xdDBztf4+frE0Nnw8/XH0tuuv8rk6e3E0Nj8/f2tvsqyws34+vvv8/Xq7vHCz9fCz9i3xtC/zNXH0trK1dzS3OLh5+yuvsq7ydPa4ufq7/L5+vvz9ffl6+7O2N/o7fDk6u7P2eDz9ve8ytTp7vHc4+jh5+vM1962xc/Y4OXj6e319/ne5enDz9i1xM/L1d3p7fGzws2vv8v9/f7S2+L3+Pm0w86xwczY4Obx9Pbg5uvm6+/N19+9y9Tm6+7u8fTb4ufU3eOvwMvf5erQ2eDc5OnK1d33+fry9PbZ4eawwMzV3ePf5urX3+Wtvsng5+vb4+jl6u709vjp7fDv8vTe5eoAAABRfI6RAAAAW3RSTlMABRICD0uIq8jEqHc6O4734nkxW5EY6mQBmHYNpHiJaGL1IwfZmms21DX6F3JT0JAOPlkbaSthTxQm1qlsXDAg0jPdCwrcoF0Jam9FX+W4IROXjC0uKEBtf3tmY0JV1QAAAAFiS0dE4CgP/zAAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAHdElNRQfjBgcLLAR8mk7DAAADY0lEQVQ4y4VU91/TMRANTtziwr33QNx7i3tvPUaRCtaKVMVRSqlwQquIRYoIigNlFFHrFmSIuFDcG+e/4l2+tkBx3A/Ju7v3yUsuyQlRzzwaNBT/sUaNmzT1BIBmzVu0/DurVes2UGNtvdr9kdW+Gbhbh471aV6urH+AC3bydmN17qIkAoNUwZtDVCr1llAl0LUOrVt3GQzbqtmmpLXbw1U7JOpRmydpocERWt3OXbsj9+zdt18fZQiPNnLYq4bWk/0Y04HYuD3otIPxoE8wc6KXk9abPcshf/1hrG2J5iNJTOzTV6H160/OUat2Z3IdGh48BuYUA+UGKLyBBG1JBktqXdrxNIqfCGGtQZI3mJAm3abKOKk6hZnWDLIEE+Jpedy4dK4304YQCDjDsTRLCp5N9+cynsvC8xyy6Uw0Dh1GvOEELmTn0Jgr9fII2RnkE7ho03AZRxDPh+ZgKLhE02VOWwlcYXA+CsBxNTSa/JFC+NKkuwbX42i+welkOqI2ktFNgCArqCnhKcQoLrHjFp5yCd92CmcA3CmEIt6whxjN95p3F1HvFN7nFC6G2BIsLbtH/hgxlsaI7HhEu1O4nN9BMYH7EIaYU/GA/HFiPI0P8x9RXUt/C9tp//CYwBNIQIzVKLwJNFaGPaXwxd/C6c8I0EawKiAZn4OdSzZRTOL9V9myEE2KcHlpcaAivOMFYiYkUHiyEA1B1i+TCpIjhQss+JJCIRgZlUFrlm4mZwrVmb+PPe0V6URI4ZjXGKll4Wtv6GW8fcRlmkq8aVzAd8ZC1iDhcuN7RAsLVzp4L8H8sqYTb4YU1p2jBenucl8eI8BaBbZMLMnVVxGcKd8Vf7XAaDiDyHdnthKvhBYxhCI6tCZebqzkzeIFP+QZE+XdGUq4hh8JbcECKONHM3uO8qBb8wWo9UYV391V5W/wkT6BowJcywkx148co9UCDzUASZL3+RYYskHzgWnzXP9yvmwXZVU2LQRkSV5qNe1UVc3xmQtqPvBC+Rditr6ygTnvS8XtfB28CVLL1uHXqnZDWKS0i6/qIkfM229Hv1ec3vVDRvwW121ES5YqTF22QxP06afeX3GXLXfvaytWQn3zEn8w90Y5dNXqvzTeNQt9XCxP77X/aOTCd936DT03bmrp4Rb/BQ/D/XRsuY9vAAAAAElFTkSuQmCC"></image></svg>',
              },
              {
                name: Object(c["a"])("Real-time Stats", "ga-premium"),
                description: Object(c["a"])(
                  "Get real-time stats right inside WordPress to see who is online, what are they doing, and more.",
                  "ga-premium"
                ),
                icon:
                  '<svg class="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="14 14 32 32"><g>\t<path fill="#ACBCC8" d="M31,20.5v-1c0-0.276-0.224-0.5-0.5-0.5S30,19.224,30,19.5v1c0,0.276,0.224,0.5,0.5,0.5S31,20.776,31,20.5z"></path> <path fill="#ACBCC8" d="M30,39.5v1c0,0.276,0.224,0.5,0.5,0.5s0.5-0.224,0.5-0.5v-1c0-0.276-0.224-0.5-0.5-0.5S30,39.224,30,39.5z"></path> <path fill="#ACBCC8" d="M39.5,30c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h1c0.276,0,0.5-0.224,0.5-0.5S40.776,30,40.5,30 H39.5z"></path> <path fill="#ACBCC8" d="M19.5,30c-0.276,0-0.5,0.224-0.5,0.5s0.224,0.5,0.5,0.5h1c0.276,0,0.5-0.224,0.5-0.5S20.776,30,20.5,30 H19.5z"></path> <path fill="#D6E2EA" d="M41.284,25.958C41.739,27.223,42,28.58,42,30c0,6.617-5.383,12-12,12c-6.617,0-12-5.383-12-12 s5.383-12,12-12c2.993,0,5.727,1.108,7.831,2.927l2.826-2.827C37.824,15.56,34.096,14,30,14c-8.822,0-16,7.178-16,16 s7.178,16,16,16s16-7.178,16-16c0-2.545-0.613-4.944-1.675-7.083L41.284,25.958z"></path> <path fill="#509FE1" d="M24.975,25.146C24.877,25.049,24.749,25,24.621,25s-0.256,0.049-0.354,0.146l-2.121,2.121 c-0.195,0.195-0.195,0.512,0,0.707l6.439,6.439C28.964,34.792,29.466,35,30,35s1.036-0.208,1.414-0.586l14.5-14.5 c0.195-0.195,0.195-0.512,0-0.707l-2.121-2.121c-0.098-0.098-0.226-0.146-0.354-0.146s-0.256,0.049-0.354,0.146L30,30.172 L24.975,25.146z"></path></g></svg>',
              },
              {
                name: Object(c["a"])(
                  "Enhanced Ecommerce Tracking",
                  "ga-premium"
                ),
                description: Object(c["a"])(
                  "1-click Google Analytics Enhanced Ecommerce tracking for WooCommerce, Easy Digital Downloads & MemberPress.",
                  "ga-premium"
                ),
                icon:
                  '<svg class="" xmlns="http://www.w3.org/2000/svg" width="96" viewBox="0 0 96 102"><path id="package" fill="#509fe1" d="M76.513,14.5a3.346,3.346,0,0,1,2.479,1.039,3.465,3.465,0,0,1,1.021,2.523V39.431a3.466,3.466,0,0,1-1.021,2.523,3.346,3.346,0,0,1-2.479,1.039h-35a3.346,3.346,0,0,1-2.479-1.039,3.466,3.466,0,0,1-1.021-2.523V18.06a3.466,3.466,0,0,1,1.021-2.523A3.346,3.346,0,0,1,41.513,14.5h4.375a6.68,6.68,0,0,1-.729-2.968,6.337,6.337,0,0,1,1.9-4.6A6.119,6.119,0,0,1,51.575,5a6.571,6.571,0,0,1,3.938,1.261,16.639,16.639,0,0,1,3.573,3.784,16.639,16.639,0,0,1,3.573-3.784A6.571,6.571,0,0,1,66.6,5a6.119,6.119,0,0,1,4.521,1.929,6.336,6.336,0,0,1,1.9,4.6,6.68,6.68,0,0,1-.729,2.968h4.229ZM66.6,8.562a3.2,3.2,0,0,0-1.458.3,5.947,5.947,0,0,0-1.823,1.558,41.215,41.215,0,0,0-2.99,4.081H66.6a2.8,2.8,0,0,0,2.078-.853,2.9,2.9,0,0,0,.839-2.115,2.9,2.9,0,0,0-.839-2.115A2.8,2.8,0,0,0,66.6,8.562ZM48.659,11.53a2.9,2.9,0,0,0,.839,2.115,2.8,2.8,0,0,0,2.078.853h6.271a41.215,41.215,0,0,0-2.99-4.081,5.947,5.947,0,0,0-1.823-1.558,3.2,3.2,0,0,0-1.458-.3,2.8,2.8,0,0,0-2.078.853A2.9,2.9,0,0,0,48.659,11.53Zm4.375,7.717H42.679v9.5H75.346v-9.5H64.992l2.625,2.671a1.288,1.288,0,0,1,0,1.632l-0.875.891a1.232,1.232,0,0,1-1.6,0l-5.1-5.194H57.992l-5.1,5.194a1.232,1.232,0,0,1-1.6,0l-0.875-.891a1.288,1.288,0,0,1,0-1.632Zm-10.354,19H75.346V33.494H42.679v4.749Z"></path><path id="cart" fill="#d5e2ea" d="M35.868,69.2l0.958,5.132H79.791a3.479,3.479,0,0,1,2.875,1.443,3.894,3.894,0,0,1,.8,3.207l-0.958,4.009A8.924,8.924,0,1,1,72.364,97.344a8.753,8.753,0,0,1-2.635-6.415,8.369,8.369,0,0,1,2.715-6.335H38.9a8.369,8.369,0,0,1,2.715,6.335,8.753,8.753,0,0,1-2.636,6.415,8.844,8.844,0,0,1-12.618,0,8.66,8.66,0,0,1-2.635-6.335,8.864,8.864,0,0,1,1.2-4.49A9.428,9.428,0,0,1,28.2,83.151L17.021,28.145H5.84A3.825,3.825,0,0,1,2.007,24.3V21.73A3.825,3.825,0,0,1,5.84,17.881H22.291a3.489,3.489,0,0,1,2.316.882,4.075,4.075,0,0,1,1.358,2.165L27.4,28.145"></path><path id="cart-2" data-name="cart" fill="#acbdc9" d="M27.4,28.145H90.173a3.634,3.634,0,0,1,3.035,1.443,3.486,3.486,0,0,1,.639,3.207L86.34,66.152A3.749,3.749,0,0,1,84.982,68.4a3.7,3.7,0,0,1-2.316.8h-46.8"></path></svg>',
              },
              {
                name: Object(c["a"])("Page Level Analytics", "ga-premium"),
                description: Object(c["a"])(
                  "Get detailed stats for each post and page, so you can see the most popular posts, pages, and sections of your site.",
                  "ga-premium"
                ),
                icon:
                  '<svg class="" xmlns="http://www.w3.org/2000/svg" width="156" viewBox="0 0 156 156">    <rect fill="#d5e2e9" y="12" width="126" height="144" rx="8" ry="8"></rect>    <rect fill="#acbdc9" x="16" y="132" width="94" height="6" rx="3" ry="3"></rect>    <rect fill="#acbdc9" x="16" y="79" width="26" height="47" rx="3" ry="3"></rect>    <rect fill="#acbdc9" x="48" y="119" width="62" height="6" rx="3" ry="3"></rect>    <rect fill="#acbdc9" x="48" y="106" width="62" height="6" rx="3" ry="3"></rect>    <rect fill="#acbdc9" x="48" y="92" width="62" height="6" rx="3" ry="3"></rect>    <rect fill="#acbdc9" x="48" y="79" width="62" height="6" rx="3" ry="3"></rect>    <rect fill="#acbdc9" x="16" y="56" width="62" height="6" rx="3" ry="3"></rect>    <rect fill="#acbdc9" x="16" y="43" width="62" height="6" rx="3" ry="3"></rect>    <rect fill="#acbdc9" x="16" y="30" width="62" height="6" rx="3" ry="3"></rect> <circle fill="#ffffff" cx="94.5" cy="42.5" r="35.5"></circle> <path fill="#54a0de" d="M155.386,96.172A2.214,2.214,0,0,1,156,97.813a3,3,0,0,1-.616,1.846l-4.716,4.512a2.551,2.551,0,0,1-1.846.82,1.948,1.948,0,0,1-1.641-.82L122.164,79.356a2.729,2.729,0,0,1-.616-1.641V74.844a44.053,44.053,0,0,1-12.919,7.69,42.454,42.454,0,0,1-36.4-2.974A43.1,43.1,0,0,1,56.744,64.077,41.43,41.43,0,0,1,51,42.647a41.43,41.43,0,0,1,5.742-21.431A43.1,43.1,0,0,1,72.227,5.733a42.863,42.863,0,0,1,42.862,0,43.1,43.1,0,0,1,15.483,15.483,41.43,41.43,0,0,1,5.742,21.431,41.258,41.258,0,0,1-2.768,14.971,44.07,44.07,0,0,1-7.691,12.92h2.871a2.217,2.217,0,0,1,1.641.615ZM93.658,75.459a32.1,32.1,0,0,0,16.406-4.409,32.573,32.573,0,0,0,12-12,32.729,32.729,0,0,0,0-32.812,32.573,32.573,0,0,0-12-12,32.728,32.728,0,0,0-32.812,0,32.58,32.58,0,0,0-12,12,32.728,32.728,0,0,0,0,32.813,32.58,32.58,0,0,0,12,12A32.1,32.1,0,0,0,93.658,75.459Z"></path><path fill="#d4e2e8" d="M112.786,52.128H78.724V28.066a0.934,0.934,0,0,0-.937-0.937H74.661a0.934,0.934,0,0,0-.937.938V56.191a0.933,0.933,0,0,0,.938.938h38.125a0.933,0.933,0,0,0,.937-0.937V53.066A0.933,0.933,0,0,0,112.786,52.128Z"></path>    <path fill="#acbdc9" d="M102.864,34.55v0.078a0.717,0.717,0,0,1,.742-0.2,0.826,0.826,0,0,1,.586.508l7.031,14.688h-30V41.5l6.8-11.328a0.888,0.888,0,0,1,.742-0.43,0.9,0.9,0,0,1,.82.352L96.224,39Z"></path></svg>',
              },
              {
                name: Object(c["a"])(
                  "Affiliate Link & Ads Tracking",
                  "ga-premium"
                ),
                description: Object(c["a"])(
                  "Automatically track clicks on your affiliate links, banner ads, and other outbound links with our link tracking.",
                  "ga-premium"
                ),
                icon:
                  '<svg class="" xmlns="http://www.w3.org/2000/svg" width="96" viewBox="0 0 96 102"><rect fill="#8ba4b7" x="41" y="60" width="14" height="42"></rect><path fill="#acbdc9" d="M14,71H82a0,0,0,0,1,0,0v3a2,2,0,0,1-2,2H16a2,2,0,0,1-2-2V71A0,0,0,0,1,14,71Z"></path><rect fill="#509fe2" y="5" width="96" height="66" rx="4.129" ry="4.129"></rect><path fill="#ffffff" d="M40.866,38.665l1.266-3.727L43.4,38.665H40.866ZM54.506,37.54a1.681,1.681,0,1,1-1.2.492A1.627,1.627,0,0,1,54.506,37.54Zm7.875-13.5a3.361,3.361,0,0,1,3.375,3.375v20.25a3.361,3.361,0,0,1-3.375,3.375H33.131a3.361,3.361,0,0,1-3.375-3.375V27.415a3.361,3.361,0,0,1,3.375-3.375h29.25ZM47.4,44.29a1.01,1.01,0,0,0,.879-0.457,1.2,1.2,0,0,0,.176-1.02l-3.8-10.9a1.957,1.957,0,0,0-.633-0.809,1.6,1.6,0,0,0-.984-0.316H41.217a1.6,1.6,0,0,0-.984.316,1.955,1.955,0,0,0-.633.809l-3.8,10.9a1.2,1.2,0,0,0,.176,1.02,1.01,1.01,0,0,0,.879.457h1.2a1.185,1.185,0,0,0,.668-0.211,0.86,0.86,0,0,0,.387-0.562L39.67,42.04h4.922l0.563,1.477a0.86,0.86,0,0,0,.387.563,1.185,1.185,0,0,0,.668.211h1.2Zm12.164-1.125V31.915a1.083,1.083,0,0,0-1.125-1.125H57.319a1.083,1.083,0,0,0-1.125,1.125v2.531a5.309,5.309,0,0,0-1.687-.281,5.063,5.063,0,1,0,0,10.125,4.64,4.64,0,0,0,1.969-.422,1.064,1.064,0,0,0,.844.422h1.125A1.083,1.083,0,0,0,59.569,43.165Z"></path><path fill="#2e7fbe" d="M73,0h1a2,2,0,0,1,2,2v8H71V2A2,2,0,0,1,73,0ZM70.5,10h6a2.5,2.5,0,0,1,0,5h-6A2.5,2.5,0,0,1,70.5,10Z"></path><path fill="#2e7fbe" d="M48,0h1a2,2,0,0,1,2,2v8H46V2A2,2,0,0,1,48,0ZM45.5,10h6a2.5,2.5,0,0,1,0,5h-6A2.5,2.5,0,0,1,45.5,10Z"></path><path fill="#2e7fbe" d="M23,0h1a2,2,0,0,1,2,2v8H21V2A2,2,0,0,1,23,0ZM20.5,10h6a2.5,2.5,0,0,1,0,5h-6A2.5,2.5,0,0,1,20.5,10Z"></path></svg>',
              },
              {
                name: Object(c["a"])(
                  "EU Compliance (GDPR Friendly)",
                  "ga-premium"
                ),
                description: Object(c["a"])(
                  "Make Google Analytics compliant with GDPR and other privacy regulations automatically.",
                  "ga-premium"
                ),
                icon:
                  '<svg class="" xmlns="http://www.w3.org/2000/svg" width="96" viewBox="0 0 96 102"><path fill="#adbdc7" d="M28.884,78.139a0.832,0.832,0,0,0-.479-0.437,0.932,0.932,0,0,0-.629,0,0.832,0.832,0,0,0-.479.438l-1.777,3.609-3.992.574a0.83,0.83,0,0,0-.561.328,0.914,0.914,0,0,0-.191.6,0.839,0.839,0,0,0,.26.574l2.9,2.816-0.684,3.992a0.864,0.864,0,0,0,.123.615,0.8,0.8,0,0,0,.506.369,0.843,0.843,0,0,0,.629-0.082l3.582-1.859,3.582,1.859a0.843,0.843,0,0,0,.629.082,0.8,0.8,0,0,0,.506-0.369,0.863,0.863,0,0,0,.123-0.615l-0.684-3.992,2.9-2.816a0.839,0.839,0,0,0,.26-0.574,0.912,0.912,0,0,0-.191-0.6,0.83,0.83,0,0,0-.56-0.328l-3.992-.574Zm-14-14a0.832,0.832,0,0,0-.479-0.438,0.932,0.932,0,0,0-.629,0,0.832,0.832,0,0,0-.479.438l-1.777,3.609-3.992.574a0.83,0.83,0,0,0-.561.328,0.913,0.913,0,0,0-.191.6,0.839,0.839,0,0,0,.26.574l2.9,2.816L9.251,76.635a0.864,0.864,0,0,0,.123.615,0.8,0.8,0,0,0,.506.369,0.843,0.843,0,0,0,.629-0.082l3.582-1.859,3.582,1.859a0.843,0.843,0,0,0,.629.082,0.8,0.8,0,0,0,.506-0.369,0.863,0.863,0,0,0,.123-0.615l-0.684-3.992,2.9-2.816a0.839,0.839,0,0,0,.26-0.574,0.912,0.912,0,0,0-.191-0.6,0.83,0.83,0,0,0-.561-0.328l-3.992-.574Zm-5-19A0.832,0.832,0,0,0,9.406,44.7a0.932,0.932,0,0,0-.629,0,0.832,0.832,0,0,0-.479.438L6.521,48.749l-3.992.574a0.83,0.83,0,0,0-.561.328,0.913,0.913,0,0,0-.191.6,0.839,0.839,0,0,0,.26.574l2.9,2.817L4.251,57.635a0.864,0.864,0,0,0,.123.615,0.8,0.8,0,0,0,.506.369,0.843,0.843,0,0,0,.629-0.082l3.582-1.859,3.582,1.859a0.843,0.843,0,0,0,.629.082,0.8,0.8,0,0,0,.506-0.369,0.863,0.863,0,0,0,.123-0.615l-0.684-3.992,2.9-2.817a0.839,0.839,0,0,0,.26-0.574,0.912,0.912,0,0,0-.191-0.6,0.83,0.83,0,0,0-.561-0.328l-3.992-.574Zm5-20a0.832,0.832,0,0,0-.479-0.437,0.932,0.932,0,0,0-.629,0,0.832,0.832,0,0,0-.479.438l-1.777,3.609-3.992.574a0.83,0.83,0,0,0-.561.328,0.913,0.913,0,0,0-.191.6,0.839,0.839,0,0,0,.26.574l2.9,2.817L9.251,37.635a0.864,0.864,0,0,0,.123.615,0.8,0.8,0,0,0,.506.369,0.843,0.843,0,0,0,.629-0.082l3.582-1.859,3.582,1.859a0.843,0.843,0,0,0,.629.082,0.8,0.8,0,0,0,.506-0.369,0.863,0.863,0,0,0,.123-0.615l-0.684-3.992,2.9-2.817a0.839,0.839,0,0,0,.26-0.574,0.912,0.912,0,0,0-.191-0.6,0.83,0.83,0,0,0-.561-0.328l-3.992-.574Zm14-15A0.832,0.832,0,0,0,28.406,9.7a0.931,0.931,0,0,0-.629,0,0.832,0.832,0,0,0-.479.437l-1.777,3.609-3.992.574a0.83,0.83,0,0,0-.561.328,0.914,0.914,0,0,0-.191.6,0.839,0.839,0,0,0,.26.574l2.9,2.816-0.684,3.992a0.864,0.864,0,0,0,.123.615,0.8,0.8,0,0,0,.506.369,0.843,0.843,0,0,0,.629-0.082l3.582-1.859,3.582,1.859a0.843,0.843,0,0,0,.629.082,0.8,0.8,0,0,0,.506-0.369,0.863,0.863,0,0,0,.123-0.615l-0.684-3.992,2.9-2.816a0.839,0.839,0,0,0,.26-0.574,0.912,0.912,0,0,0-.191-0.6,0.83,0.83,0,0,0-.56-0.328l-3.992-.574Zm19.232,74a0.832,0.832,0,0,1,.479-0.437,0.932,0.932,0,0,1,.629,0,0.832,0.832,0,0,1,.478.438l1.777,3.609,3.992,0.574a0.83,0.83,0,0,1,.561.328,0.914,0.914,0,0,1,.191.6,0.839,0.839,0,0,1-.26.574l-2.9,2.816,0.684,3.992a0.864,0.864,0,0,1-.123.615,0.8,0.8,0,0,1-.506.369,0.843,0.843,0,0,1-.629-0.082l-3.582-1.859-3.582,1.859a0.843,0.843,0,0,1-.629.082,0.8,0.8,0,0,1-.506-0.369,0.863,0.863,0,0,1-.123-0.615l0.684-3.992-2.9-2.816a0.839,0.839,0,0,1-.26-0.574,0.912,0.912,0,0,1,.191-0.6,0.83,0.83,0,0,1,.56-0.328l3.992-.574Zm20-6a0.832,0.832,0,0,1,.479-0.437,0.932,0.932,0,0,1,.629,0,0.832,0.832,0,0,1,.479.438l1.777,3.609,3.992,0.574a0.83,0.83,0,0,1,.561.328,0.914,0.914,0,0,1,.191.6,0.839,0.839,0,0,1-.26.574l-2.9,2.816,0.684,3.992a0.864,0.864,0,0,1-.123.615,0.8,0.8,0,0,1-.506.369,0.843,0.843,0,0,1-.629-0.082l-3.582-1.859-3.582,1.859a0.843,0.843,0,0,1-.629.082,0.8,0.8,0,0,1-.506-0.369,0.863,0.863,0,0,1-.123-0.615l0.684-3.992-2.9-2.816a0.839,0.839,0,0,1-.26-0.574,0.912,0.912,0,0,1,.191-0.6,0.83,0.83,0,0,1,.56-0.328l3.992-.574Zm14-14a0.832,0.832,0,0,1,.479-0.438,0.932,0.932,0,0,1,.629,0,0.832,0.832,0,0,1,.479.438l1.777,3.609,3.992,0.574a0.83,0.83,0,0,1,.561.328,0.914,0.914,0,0,1,.191.6,0.839,0.839,0,0,1-.26.574l-2.9,2.816,0.684,3.992a0.864,0.864,0,0,1-.123.615,0.8,0.8,0,0,1-.506.369,0.843,0.843,0,0,1-.629-0.082l-3.582-1.859-3.582,1.859a0.843,0.843,0,0,1-.629.082,0.8,0.8,0,0,1-.506-0.369,0.863,0.863,0,0,1-.123-0.615l0.684-3.992-2.9-2.816a0.839,0.839,0,0,1-.26-0.574,0.912,0.912,0,0,1,.191-0.6,0.83,0.83,0,0,1,.561-0.328l3.992-.574Zm5-19a0.832,0.832,0,0,1,.479-0.437,0.932,0.932,0,0,1,.629,0,0.832,0.832,0,0,1,.479.438l1.777,3.609,3.992,0.574a0.83,0.83,0,0,1,.561.328,0.914,0.914,0,0,1,.191.6,0.839,0.839,0,0,1-.26.574l-2.9,2.817,0.684,3.992a0.864,0.864,0,0,1-.123.615,0.8,0.8,0,0,1-.506.369,0.843,0.843,0,0,1-.629-0.082l-3.582-1.859-3.582,1.859a0.843,0.843,0,0,1-.629.082,0.8,0.8,0,0,1-.506-0.369,0.863,0.863,0,0,1-.123-0.615l0.684-3.992-2.9-2.817a0.839,0.839,0,0,1-.26-0.574,0.912,0.912,0,0,1,.191-0.6,0.83,0.83,0,0,1,.561-0.328l3.992-.574Zm-5-20a0.832,0.832,0,0,1,.479-0.437,0.932,0.932,0,0,1,.629,0,0.832,0.832,0,0,1,.479.438l1.777,3.609,3.992,0.574a0.83,0.83,0,0,1,.561.328,0.914,0.914,0,0,1,.191.6,0.839,0.839,0,0,1-.26.574l-2.9,2.817,0.684,3.992a0.864,0.864,0,0,1-.123.615,0.8,0.8,0,0,1-.506.369,0.843,0.843,0,0,1-.629-0.082l-3.582-1.859-3.582,1.859a0.843,0.843,0,0,1-.629.082,0.8,0.8,0,0,1-.506-0.369,0.863,0.863,0,0,1-.123-0.615l0.684-3.992-2.9-2.817a0.839,0.839,0,0,1-.26-0.574,0.912,0.912,0,0,1,.191-0.6,0.83,0.83,0,0,1,.561-0.328l3.992-.574Zm-14-15A0.832,0.832,0,0,1,68.594,9.7a0.931,0.931,0,0,1,.629,0,0.832,0.832,0,0,1,.479.437l1.777,3.609,3.992,0.574a0.83,0.83,0,0,1,.561.328,0.914,0.914,0,0,1,.191.6,0.839,0.839,0,0,1-.26.574l-2.9,2.816,0.684,3.992a0.864,0.864,0,0,1-.123.615,0.8,0.8,0,0,1-.506.369,0.843,0.843,0,0,1-.629-0.082l-3.582-1.859-3.582,1.859a0.843,0.843,0,0,1-.629.082,0.8,0.8,0,0,1-.506-0.369,0.863,0.863,0,0,1-.123-0.615l0.684-3.992-2.9-2.816a0.839,0.839,0,0,1-.26-0.574,0.912,0.912,0,0,1,.191-0.6,0.83,0.83,0,0,1,.56-0.328l3.992-.574Zm-20-6A0.832,0.832,0,0,1,48.594,3.7a0.931,0.931,0,0,1,.629,0,0.832,0.832,0,0,1,.478.438l1.777,3.609,3.992,0.574a0.83,0.83,0,0,1,.561.328,0.914,0.914,0,0,1,.191.6,0.839,0.839,0,0,1-.26.574l-2.9,2.816,0.684,3.992a0.864,0.864,0,0,1-.123.615,0.8,0.8,0,0,1-.506.369,0.843,0.843,0,0,1-.629-0.082l-3.582-1.859-3.582,1.859a0.843,0.843,0,0,1-.629.082,0.8,0.8,0,0,1-.506-0.369,0.863,0.863,0,0,1-.123-0.615l0.684-3.992-2.9-2.816a0.839,0.839,0,0,1-.26-0.574,0.913,0.913,0,0,1,.191-0.6,0.829,0.829,0,0,1,.56-0.328l3.992-.574Z"></path><path fill="#509fe2" d="M65.147,42.845a3.346,3.346,0,0,0-.562-1.9,3.032,3.032,0,0,0-1.547-1.2l-13.5-5.625a2.988,2.988,0,0,0-2.531,0l-13.5,5.625a3.032,3.032,0,0,0-1.547,1.2,3.346,3.346,0,0,0-.562,1.9,32.51,32.51,0,0,0,2.391,12.445,28.183,28.183,0,0,0,5.836,9.07,20.888,20.888,0,0,0,7.383,5.2,2.988,2.988,0,0,0,2.531,0,20.754,20.754,0,0,0,6.75-4.57,29.547,29.547,0,0,0,6.188-8.859A32.516,32.516,0,0,0,65.147,42.845ZM46.8,60.7a1.026,1.026,0,0,1-1.547,0l-7.312-7.312a1.106,1.106,0,0,1,0-1.617l1.547-1.547a1.106,1.106,0,0,1,1.617,0l4.922,4.922L56.569,44.6a1.106,1.106,0,0,1,1.617,0l1.547,1.547a1.106,1.106,0,0,1,0,1.617Z"></path></svg>',
              },
              {
                name: Object(c["a"])("Custom Dimensions", "ga-premium"),
                description: Object(c["a"])(
                  "Setup tracking for authors, categories, tags, searches, custom post types, users, and other events with 1-click.",
                  "ga-premium"
                ),
                icon:
                  '<svg class="" xmlns="http://www.w3.org/2000/svg" width="96" viewBox="0 0 96 102"><path fill="#509fe2" d="M93.623,52.744A9.542,9.542,0,0,1,91.9,64.718a8.43,8.43,0,0,1-5.919,2.29H47.033a8.569,8.569,0,0,1-5.919-2.225,9.134,9.134,0,0,1-2.991-5.627A9.485,9.485,0,0,1,39.4,52.744l14.894-24.6V8.383H53.27a2.906,2.906,0,0,1-2.164-.916,3.072,3.072,0,0,1-.891-2.225V3.149A3.072,3.072,0,0,1,51.106.924,2.906,2.906,0,0,1,53.27.008H79.748a2.906,2.906,0,0,1,2.164.916A3.072,3.072,0,0,1,82.8,3.149V5.242a3.072,3.072,0,0,1-.891,2.225,2.906,2.906,0,0,1-2.164.916H78.729v19.76ZM55.562,41.883H77.456l-6.11-10.207a3.9,3.9,0,0,1-.764-2.355V8.383H62.436V29.32a3.9,3.9,0,0,1-.764,2.355Z"></path><path fill="#d6e2ea" d="M68,99.334a11.55,11.55,0,0,0,4.246,0l1.061,1.837a1.418,1.418,0,0,0,.863.722,2.006,2.006,0,0,0,1.128.065,14.624,14.624,0,0,0,4.246-2.492,1.388,1.388,0,0,0,.6-0.984,1.94,1.94,0,0,0-.2-1.115l-1.061-1.837A13.05,13.05,0,0,0,81,91.987h2.123a1.686,1.686,0,0,0,1.128-.394,1.307,1.307,0,0,0,.464-1.05,11.23,11.23,0,0,0,0-4.855,1.175,1.175,0,0,0-.464-0.919,1.686,1.686,0,0,0-1.128-.394H81A15.309,15.309,0,0,0,78.879,80.7l1.061-1.837a1.94,1.94,0,0,0,.2-1.115,1.388,1.388,0,0,0-.6-0.984A12.6,12.6,0,0,0,75.3,74.4a1.437,1.437,0,0,0-1.128-.066,1.419,1.419,0,0,0-.863.722l-1.061,1.968A13.838,13.838,0,0,0,68,76.9l-1.062-1.837a1.419,1.419,0,0,0-.862-0.722,1.438,1.438,0,0,0-1.128.066A12.6,12.6,0,0,0,60.7,76.766a1.389,1.389,0,0,0-.6.984,1.941,1.941,0,0,0,.2,1.115L61.363,80.7a15.312,15.312,0,0,0-2.123,3.674H57.117a1.686,1.686,0,0,0-1.128.394,1.759,1.759,0,0,0-.6.919,12.766,12.766,0,0,0,.133,4.855,1.307,1.307,0,0,0,.464,1.05,1.686,1.686,0,0,0,1.128.394H59.24a13.053,13.053,0,0,0,2.123,3.543L60.3,97.366a1.941,1.941,0,0,0-.2,1.115,1.389,1.389,0,0,0,.6.984,14.624,14.624,0,0,0,4.246,2.492,2.007,2.007,0,0,0,1.128-.065,1.419,1.419,0,0,0,.862-0.722Zm-1.327-7.741A5.082,5.082,0,0,1,65.543,86.8a4.6,4.6,0,0,1,3.185-3.215,5.074,5.074,0,0,1,4.843,1.05A5.276,5.276,0,0,1,74.7,89.494a4.591,4.591,0,0,1-3.184,3.149A5.074,5.074,0,0,1,66.671,91.593Z"></path><path fill="#acbdc9" d="M51.279,72.568a21.653,21.653,0,0,0,0-8.266l4.511-2.231a3.077,3.077,0,0,0,1.393-1.706,3.115,3.115,0,0,0-.066-2.1,30.1,30.1,0,0,0-5.573-8.66,3.226,3.226,0,0,0-1.924-1.115,2.645,2.645,0,0,0-2.057.459l-3.848,2.1a25.939,25.939,0,0,0-7.3-4.068V42.521a2.878,2.878,0,0,0-.8-2.034,3.731,3.731,0,0,0-1.858-1.115,30.03,30.03,0,0,0-10.085.131,2.84,2.84,0,0,0-1.924.984,3.026,3.026,0,0,0-.73,2.034v4.461a22.237,22.237,0,0,0-7.3,4.068L9.88,48.95a3.054,3.054,0,0,0-2.189-.459A2.7,2.7,0,0,0,5.9,49.606a32.637,32.637,0,0,0-5.573,8.66,2.5,2.5,0,0,0-.133,2.1,3.408,3.408,0,0,0,1.46,1.706L6.032,64.3a21.654,21.654,0,0,0,0,8.266L1.653,74.8a2.825,2.825,0,0,0-1.46,1.64A2.643,2.643,0,0,0,.326,78.6,32.636,32.636,0,0,0,5.9,87.263a2.909,2.909,0,0,0,1.791.984,3.477,3.477,0,0,0,2.189-.328l3.848-2.23a22.345,22.345,0,0,0,7.3,4.2v4.461a3.107,3.107,0,0,0,.73,1.968,2.744,2.744,0,0,0,1.924,1.05,27.911,27.911,0,0,0,10.085,0,2.889,2.889,0,0,0,1.858-1.05,2.957,2.957,0,0,0,.8-1.968V89.887a24.326,24.326,0,0,0,7.3-4.2l3.848,2.23a3.007,3.007,0,0,0,2.057.328,3.535,3.535,0,0,0,1.924-.984q4.379-5.248,5.573-8.66a2.643,2.643,0,0,0,.133-2.165,2.825,2.825,0,0,0-1.46-1.64ZM35.754,75.323a11.432,11.432,0,0,1-7.7,2.493,8.964,8.964,0,0,1-6.17-2.69,8.772,8.772,0,0,1-2.72-6.1,10.684,10.684,0,0,1,2.521-7.479,10.691,10.691,0,0,1,7.563-2.624,9.649,9.649,0,0,1,9.023,8.922A10.684,10.684,0,0,1,35.754,75.323Z"></path></svg>',
              },
            ],
            welcome_video: !1,
          };
        },
        computed: {
          welcome_title: function () {
            return this.$mi.first_name && this.$mi.first_name.length < 28
              ? this.text_welcome_title + " " + this.$mi.first_name
              : this.text_welcome_title;
          },
        },
        methods: {
          feature_class: function (t) {
            return "monsterinsights-bg-img " + t;
          },
        },
      },
      Fe = Qe,
      Ne = Object(h["a"])(Fe, Ve, Ze, !1, null, null, null),
      Xe = Ne.exports,
      Ge = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div");
      },
      Ke = [],
      Ye = { name: "WizardModuleMigration" },
      Je = Ye,
      qe = Object(h["a"])(Je, Ge, Ke, !1, null, null, null),
      tn = qe.exports,
      en = n("619c"),
      nn = n("7460"),
      sn = {
        install: function (t) {
          t.prototype.$swal &&
            ((t.prototype.$mi_saving_toast = function () {}),
            (t.prototype.$mi_success_toast = function () {}),
            (t.prototype.$mi_error_toast = function () {}),
            (t.prototype.$mi_loading_toast = function () {
              t.prototype.$swal({
                type: "info",
                title: Object(c["a"])("Loading settings", "ga-premium"),
                allowOutsideClick: !1,
                allowEscapeKey: !1,
                allowEnterKey: !1,
                onOpen: function () {
                  t.prototype.$swal.showLoading();
                },
              });
            }));
        },
      },
      an = sn,
      on = n("4360"),
      rn = n("e37d"),
      ln = n("6c6b"),
      cn = document.getElementById("monsterinsights-vue-onboarding-wizard"),
      un = document.getElementById("monsterinsights-welcome"),
      dn = document.getElementById("monsterinsights-migration-wizard");
    if (((qt["a"].config.productionTip = !1), cn || un || dn))
      if (
        (Object(ln["a"])({ ctrl: !0 }),
        qt["a"].use(o["a"]),
        qt["a"].use(en["a"]),
        qt["a"].use(rn["a"], {
          defaultTemplate:
            '<div class="monsterinsights-tooltip" role="tooltip"><div class="monsterinsights-tooltip-arrow"></div><div class="monsterinsights-tooltip-inner"></div></div>',
          defaultArrowSelector:
            ".monsterinsights-tooltip-arrow, .monsterinsights-tooltip__arrow",
          defaultInnerSelector:
            ".monsterinsights-tooltip-inner, .monsterinsights-tooltip__inner",
        }),
        qt["a"].use(nn["a"]),
        Object(c["c"])(window.monsterinsights.translations, "ga-premium"),
        un)
      )
        new qt["a"]({
          store: on["a"],
          mounted: function () {
            on["a"].dispatch("$_app/init");
          },
          render: function (t) {
            return t(Xe);
          },
        }).$mount(un);
      else if (dn) {
        var mn = {
          install: function (t) {
            (t.prototype.$wizard_steps = [
              "welcome",
              "authenticate",
              "recommended_settings",
            ]),
              t.prototype.$mi &&
                t.prototype.$mi.had_ecommerce &&
                t.prototype.$wizard_steps.push("pro"),
              t.prototype.$wizard_steps.push("success");
          },
        };
        qt["a"].use(mn),
          qt["a"].use(an),
          new qt["a"]({
            store: on["a"],
            mounted: function () {
              on["a"].dispatch("$_app/init"),
                on["a"].dispatch("$_license/getLicense"),
                on["a"].dispatch("$_auth/getAuth"),
                on["a"].dispatch("$_addons/getAddons");
            },
            render: function (t) {
              return t(tn);
            },
          }).$mount(dn);
      } else {
        var pn = {
          install: function (t) {
            (t.prototype.$wizard_steps = ["welcome", "authenticate"]),
              t.prototype.$mi &&
                !t.prototype.$mi.network &&
                t.prototype.$wizard_steps.push("recommended_settings"),
              t.prototype.$mi &&
                !t.prototype.$mi.migrated &&
                (t.prototype.$wizard_steps.push("recommended_addons"),
                t.prototype.$wizard_steps.push("wpforms")),
              t.prototype.$wizard_steps.push("success");
          },
        };
        qt["a"].use(pn),
          qt["a"].use(an),
          new qt["a"]({
            store: on["a"],
            mounted: function () {
              on["a"].dispatch("$_app/init"),
                on["a"].dispatch("$_license/getLicense"),
                on["a"].dispatch("$_auth/getAuth"),
                on["a"].dispatch("$_addons/getAddons");
            },
            render: function (t) {
              return t(Re);
            },
          }).$mount(cn);
      }
  },
  1: function (t, e, n) {
    t.exports = n("0951");
  },
  7795: function (t, e, n) {},
  "8c6a": function (t, e, n) {},
  ac0d: function (t, e, n) {
    "use strict";
    var s = n("f4be"),
      i = n.n(s);
    i.a;
  },
  f4be: function (t, e, n) {},
});
