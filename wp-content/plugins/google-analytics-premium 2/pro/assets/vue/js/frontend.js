(function (t) {
  function e(e) {
    for (
      var r, i, a = e[0], c = e[1], l = e[2], p = 0, d = [];
      p < a.length;
      p++
    )
      (i = a[p]), s[i] && d.push(s[i][0]), (s[i] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]);
    u && u(e);
    while (d.length) d.shift()();
    return o.push.apply(o, l || []), n();
  }
  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], r = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== s[c] && (r = !1);
      }
      r && (o.splice(e--, 1), (t = i((i.s = n[0]))));
    }
    return t;
  }
  var r = {},
    s = { frontend: 0 },
    o = [];
  function i(e) {
    if (r[e]) return r[e].exports;
    var n = (r[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = t),
    (i.c = r),
    (i.d = function (t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          i.d(
            n,
            r,
            function (e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = "https://monsterinsights.test/");
  var a = (window["monsterinsightsjsonp"] =
      window["monsterinsightsjsonp"] || []),
    c = a.push.bind(a);
  (a.push = e), (a = a.slice());
  for (var l = 0; l < a.length; l++) e(a[l]);
  var u = c;
  o.push([4, "chunk-frontend-vendors", "chunk-common"]), n();
})({
  4: function (t, e, n) {
    t.exports = n("d67f");
  },
  d67f: function (t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var r = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "li",
          {
            staticClass: "monsterinsights-adminbar-menu-item",
            attrs: { id: "wp-admin-bar-monsterinsights_frontend_button" },
          },
          [
            n(
              "div",
              {
                class: t.toggleButtonClass,
                on: { click: t.toggleStatsVisibility },
              },
              [
                n("span", {
                  staticClass: "ab-icon dashicons-before dashicons-chart-bar",
                }),
                n("span", {
                  staticClass: "monsterinsights-admin-bar-handle-text",
                  domProps: { textContent: t._s(t.text_insights) },
                }),
                t.has_notifications
                  ? n("span", {
                      staticClass:
                        "monsterinsights-menu-notification-indicator",
                      domProps: { textContent: t._s(t.notifications.length) },
                    })
                  : t._e(),
              ]
            ),
            t.statsVisible
              ? n(
                  "div",
                  { staticClass: "monsterinsights-frontend-stats" },
                  [
                    t.noauth
                      ? n("frontend-no-auth")
                      : t.error
                      ? n("widget-report-error", { attrs: { error: t.error } })
                      : n("frontend-stats-content"),
                    t.loaded
                      ? t._e()
                      : n(
                          "div",
                          {
                            staticClass:
                              "monsterinsights-frontend-stats-loading",
                          },
                          [
                            n("span", {
                              staticClass: "monsterinsights-frontend-spinner",
                            }),
                          ]
                        ),
                    n("frontend-powered-by"),
                  ],
                  1
                )
              : t._e(),
          ]
        );
      },
      s = [],
      o =
        (n("a4d3"),
        n("4de4"),
        n("4160"),
        n("e439"),
        n("dbb4"),
        n("b64b"),
        n("159b"),
        n("fc11")),
      i = (n("d3b7"), n("bc3a")),
      a = n.n(i),
      c = n("2b0e"),
      l = function (t) {
        return new Promise(function (e) {
          var n = new FormData(),
            r = c["a"].prototype.$mi.page_id
              ? c["a"].prototype.$mi.page_id
              : window.location.pathname;
          n.append("action", "monsterinsights_pageinsights_refresh_report"),
            n.append("security", c["a"].prototype.$mi.nonce),
            n.append("report", "pageinsights"),
            n.append("post_id", r),
            n.append("json", 1),
            a.a
              .post(c["a"].prototype.$mi.ajax, n)
              .then(function (t) {
                e(t.data);
              })
              .catch(function (e) {
                t.dispatch("$_app/block", !1, { root: !0 }), e.response;
              });
        });
      },
      u = { fetchReportData: l },
      p = function (t) {
        return new Promise(function (e) {
          u.fetchReportData(t).then(function (n) {
            "license_level" !== n.data.message
              ? n.success
                ? (t.commit("UPDATE_REPORT_DATA", {
                    report: "pageinsights",
                    data: n.data,
                  }),
                  e(!0))
                : (c["a"].prototype.$mi_error_toast(
                    !1,
                    n.data.message,
                    n.data.footer
                  ),
                  e(!1))
              : e(!1);
          });
        });
      },
      d = { getReportData: p },
      f = function (t) {
        return t.date;
      },
      m = function (t) {
        return t.pageinsights;
      },
      g = function (t) {
        return t.loaded;
      },
      b = function (t) {
        return t.error;
      },
      h = function (t) {
        return t.noauth;
      },
      _ = { date: f, pageinsights: m, loaded: g, error: b, noauth: h },
      O = function (t, e) {
        e.report && e.data && t[e.report] && c["a"].set(t, e.report, e.data);
      },
      v = function (t, e) {
        e.start &&
          e.end &&
          (c["a"].set(t.date, "start", e.start),
          c["a"].set(t.date, "end", e.end));
      },
      y = function (t, e) {
        c["a"].set(t.date, "interval", e);
      },
      j = function (t, e) {
        t.loaded = e;
      },
      w = function (t, e) {
        t.error = e;
      },
      P = function (t) {
        (t.noauth = !0), (t.loaded = !0);
      },
      x = {
        UPDATE_REPORT_DATA: O,
        UPDATE_DATE: v,
        UPDATE_INTERVAL: y,
        UPDATE_LOADED: j,
        SET_ERROR: w,
        ENABLE_NOAUTH: P,
      },
      $ = { loaded: !1, pageinsights: {}, error: !1, noauth: !1 },
      C = { namespaced: !0, state: $, actions: d, getters: _, mutations: x },
      D = n("561c"),
      E = n("2f62"),
      S = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.loaded
          ? n(
              "div",
              { staticClass: "monsterinsights-content-pro" },
              [
                t.showPageInsights()
                  ? n("frontend-stats-page-insights")
                  : n("frontend-stats-general"),
              ],
              1
            )
          : t._e();
      },
      A = [],
      T = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "monsterinsights-frontend-stats-inner" },
          [
            n("frontend-stats-column", {
              attrs: {
                label: t.text_insights_for,
                value: t.page_title,
                "extra-class": "monsterinsights-stats-column-title",
              },
            }),
            n("frontend-stats-column", {
              attrs: {
                label: t.text_page_views,
                value: t.displayData.pageviews,
              },
            }),
            n("frontend-stats-column", {
              attrs: {
                label: t.text_time_on_page,
                value: t.displayData.timeonpage,
              },
            }),
            n("frontend-stats-column", {
              attrs: {
                label: t.text_bounce_rate,
                value: t.displayData.bouncerate,
              },
            }),
            n("frontend-stats-column", {
              attrs: {
                label: t.text_entrances,
                value: t.displayData.entrances,
              },
            }),
            n("frontend-stats-column", {
              attrs: { label: t.text_exits, value: t.displayData.exits },
            }),
            n(
              "frontend-stats-column",
              { staticClass: "monsterinsights-frontend-column-notifications" },
              [n("notifications-indicator")],
              1
            ),
          ],
          1
        );
      },
      k = [],
      R = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { class: t.columnClass },
          [
            t.label
              ? n("div", {
                  staticClass: "monsterinsights-stats-label",
                  domProps: { textContent: t._s(t.label) },
                })
              : t._e(),
            t.value
              ? n("div", {
                  staticClass: "monsterinsights-stats-value",
                  domProps: { innerHTML: t._s(t.value) },
                })
              : t._e(),
            t._t("default"),
          ],
          2
        );
      },
      U = [],
      F = {
        name: "FrontendStatsColumn",
        props: {
          extraClass: { type: String, default: "" },
          label: String,
          value: String,
        },
        computed: {
          columnClass: function () {
            return "monsterinsights-stats-column " + this.extraClass;
          },
        },
      },
      I = F,
      M = n("2877"),
      L = Object(M["a"])(I, R, U, !1, null, null, null),
      N = L.exports,
      V = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "monsterinsights-notifications-indicator" },
          [
            n(
              "a",
              {
                attrs: {
                  href: t.sidebar_url,
                  title: t.text_view_notifications,
                },
              },
              [
                n(
                  "svg",
                  {
                    attrs: {
                      width: "35",
                      height: "39",
                      viewBox: "0 0 35 39",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                    },
                  },
                  [
                    n("path", {
                      attrs: {
                        d:
                          "M17.6898 39C20.3431 39 22.4954 36.8177 22.4954 34.125H12.8841C12.8841 36.8177 15.0364 39 17.6898 39ZM33.8706 27.5963C32.4192 26.015 29.7035 23.6361 29.7035 15.8438C29.7035 9.9252 25.6108 5.18731 20.0922 4.02492V2.4375C20.0922 1.09154 19.0164 0 17.6898 0C16.3631 0 15.2873 1.09154 15.2873 2.4375V4.02492C9.76874 5.18731 5.67602 9.9252 5.67602 15.8438C5.67602 23.6361 2.96031 26.015 1.50893 27.5963C1.05818 28.0876 0.858356 28.6749 0.862112 29.25C0.870376 30.4992 1.83721 31.6875 3.27357 31.6875H32.1059C33.5423 31.6875 34.5099 30.4992 34.5174 29.25C34.5212 28.6749 34.3213 28.0869 33.8706 27.5963Z",
                        fill: "#393F4C",
                      },
                    }),
                  ]
                ),
                t.has_notifications
                  ? n("span", {
                      staticClass: "monsterinsights-notifications-unread",
                      domProps: { textContent: t._s(t.notifications.length) },
                    })
                  : t._e(),
              ]
            ),
          ]
        );
      },
      B = [];
    function H(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function W(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? H(Object(n), !0).forEach(function (e) {
              Object(o["a"])(t, e, n[e]);
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
    var z = {
        name: "NotificationsIndicator",
        data: function () {
          return {
            text_view_notifications: Object(D["a"])(
              "View notifications",
              "ga-premium"
            ),
          };
        },
        computed: W(
          {},
          Object(E["b"])({
            notifications: "$_notifications/notifications",
            view_url: "$_notifications/view_url",
            sidebar_url: "$_notifications/sidebar_url",
          }),
          {
            has_notifications: function () {
              return this.notifications && this.notifications.length > 0;
            },
          }
        ),
      },
      K = z,
      G = Object(M["a"])(K, V, B, !1, null, null, null),
      Y = G.exports;
    function Z(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function q(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? Z(Object(n), !0).forEach(function (e) {
              Object(o["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : Z(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var J = {
        name: "FrontendStatsPageInsights",
        components: { NotificationsIndicator: Y, FrontendStatsColumn: N },
        data: function () {
          return {
            text_insights_for: Object(D["a"])(
              "Last 30 Days Insights for:",
              "ga-premium"
            ),
            text_bounce_rate: Object(D["a"])("Bounce Rate", "ga-premium"),
            text_entrances: Object(D["a"])("Entrances", "ga-premium"),
            text_page_views: Object(D["a"])("Page Views", "ga-premium"),
            text_time_on_page: Object(D["a"])("Time on Page", "ga-premium"),
            text_page_load_time: Object(D["a"])("Page Load Time", "ga-premium"),
            text_exits: Object(D["a"])("Exits", "ga-premium"),
            text_30days: Object(D["a"])("Last 30 Days", "ga-premium"),
            text_yesterday: Object(D["a"])("Yesterday", "ga-premium"),
            interval: "30days",
            page_title: this.$mi.page_title,
          };
        },
        computed: q(
          {},
          Object(E["b"])({ reportdata: "$_frontend/pageinsights" }),
          {
            displayData: function () {
              var t = {
                bouncerate: "0",
                entrances: "0",
                pageviews: "0",
                timeonpage: "0",
                pageloadtime: "0",
                exits: "0",
              };
              return (
                this.reportdata[this.interval] &&
                  (t = this.reportdata[this.interval]),
                t
              );
            },
          }
        ),
        mounted: function () {
          var t = this;
          this.$mi.authed
            ? (0 !== Object.keys(this.reportdata).length &&
                this.reportdata.constructor === Object) ||
              this.$store
                .dispatch("$_frontend/getReportData")
                .then(function () {
                  t.$store.commit("$_frontend/UPDATE_LOADED", !0);
                })
            : this.$store.commit("$_frontend/ENABLE_NOAUTH");
        },
      },
      Q = J,
      X = Object(M["a"])(Q, T, k, !1, null, null, null),
      tt = X.exports,
      et = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return t.overview.infobox
          ? n(
              "div",
              { staticClass: "monsterinsights-frontend-stats-inner" },
              [
                n("frontend-stats-column", {
                  attrs: {
                    label: t.text_insights_for,
                    value: t.text_your_website,
                  },
                }),
                n("frontend-stats-column", {
                  attrs: {
                    label: t.text_sessions,
                    value: t.overview.infobox.sessions.value,
                  },
                }),
                n("frontend-stats-column", {
                  attrs: {
                    label: t.text_pageviews,
                    value: t.overview.infobox.pageviews.value,
                  },
                }),
                n("frontend-stats-column", {
                  attrs: {
                    label: t.text_session_duration,
                    value: t.overview.infobox.duration.value,
                  },
                }),
                n("frontend-stats-column", {
                  attrs: {
                    label: t.text_bounce_rate,
                    value: t.overview.infobox.bounce.value,
                  },
                }),
                n(
                  "frontend-stats-column",
                  {
                    staticClass: "monsterinsights-frontend-column-button",
                    attrs: { label: t.text_upsell_title },
                  },
                  [n("frontend-upsell")],
                  1
                ),
                n(
                  "frontend-stats-column",
                  {
                    staticClass:
                      "monsterinsights-frontend-column-notifications",
                  },
                  [n("notifications-indicator")],
                  1
                ),
              ],
              1
            )
          : t._e();
      },
      nt = [],
      rt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", [
          t.is_admin
            ? n("a", {
                staticClass: "monsterinsights-button",
                attrs: { href: t.reportsUrl },
                domProps: { textContent: t._s(t.text_view_reports) },
              })
            : "basic" === t.licenseType
            ? n("a", {
                staticClass: "monsterinsights-button",
                attrs: { href: t.upgradeUrl },
                domProps: { textContent: t._s(t.text_button) },
              })
            : n("a", {
                staticClass: "monsterinsights-button",
                attrs: { href: t.install_url },
                domProps: { textContent: t._s(t.text_install) },
              }),
        ]);
      },
      st = [];
    function ot(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function it(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ot(Object(n), !0).forEach(function (e) {
              Object(o["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : ot(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var at = {
        name: "FrontendUpsell",
        data: function () {
          return {
            is_admin: this.$mi.is_admin,
            text_button: Object(D["a"])("Upgrade to PRO", "ga-premium"),
            text_install: Object(D["a"])(
              "Activate Page Insights Addon",
              "ga-premium"
            ),
            text_view_reports: Object(D["a"])("View All Reports", "ga-premium"),
            install_url: this.$mi.addons_url,
          };
        },
        computed: it(
          {},
          Object(E["b"])({
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            upgradeUrl: function () {
              return this.$getUpgradeUrl("frontend-reports", "admin-bar");
            },
            licenseType: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            reportsUrl: function () {
              return this.$mi.reports_url;
            },
          }
        ),
      },
      ct = at,
      lt = Object(M["a"])(ct, rt, st, !1, null, null, null),
      ut = lt.exports;
    function pt(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function dt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? pt(Object(n), !0).forEach(function (e) {
              Object(o["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : pt(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var ft = {
        name: "FrontendStatsGeneral",
        components: {
          NotificationsIndicator: Y,
          FrontendUpsell: ut,
          FrontendStatsColumn: N,
        },
        data: function () {
          return {
            text_insights_for: Object(D["a"])(
              "Last 30 Days Insights for:",
              "ga-premium"
            ),
            text_your_website: Object(D["a"])("Your Website", "ga-premium"),
            text_sessions: Object(D["a"])("Sessions", "ga-premium"),
            text_pageviews: Object(D["a"])("Pageviews", "ga-premium"),
            text_session_duration: Object(D["a"])(
              "Avg. Duration",
              "ga-premium"
            ),
            text_bounce_rate: Object(D["a"])("Bounce Rate", "ga-premium"),
          };
        },
        computed: dt({}, Object(E["b"])({ overview: "$_reports/overview" }), {
          text_upsell_title: function () {
            return this.$mi.is_admin
              ? Object(D["a"])("More data is available", "ga-premium")
              : Object(D["a"])(
                  "Want to see page-specific stats?",
                  "ga-premium"
                );
          },
        }),
        mounted: function () {
          var t = this;
          this.$mi.authed
            ? this.$store
                .dispatch("$_reports/getReportData", "overview")
                .then(function () {
                  t.$store.commit("$_frontend/UPDATE_LOADED", !0);
                })
            : this.$store.commit("$_frontend/ENABLE_NOAUTH");
        },
      },
      mt = ft,
      gt = Object(M["a"])(mt, et, nt, !1, null, null, null),
      bt = gt.exports;
    function ht(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function _t(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ht(Object(n), !0).forEach(function (e) {
              Object(o["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : ht(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var Ot = {
        name: "FrontendStatsContent",
        components: { FrontendStatsGeneral: bt, FrontendStatsPageInsights: tt },
        data: function () {
          return { loaded: !1 };
        },
        computed: _t(
          {},
          Object(E["b"])({
            license: "$_license/license",
            license_network: "$_license/license_network",
            addons: "$_addons/addons",
          })
        ),
        mounted: function () {
          var t = this;
          if (
            0 !== Object.keys(this.addons).length &&
            this.addons.constructor === Object
          )
            return (this.loaded = !0);
          this.$store.dispatch("$_license/getLicense"),
            this.$store.dispatch("$_addons/getAddons").then(function () {
              t.loaded = !0;
            });
        },
        methods: {
          showPageInsights: function () {
            return (
              !(!this.addons["page-insights"] || this.$mi.is_admin) &&
              this.addons["page-insights"].active
            );
          },
        },
      },
      vt = Ot,
      yt = Object(M["a"])(vt, S, A, !1, null, null, null),
      jt = yt.exports,
      wt = n("f284"),
      Pt = n("d3fc"),
      xt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("a", {
          staticClass: "monsterinsights-powered-by",
          attrs: { href: t.upgrade_url },
          domProps: { textContent: t._s(t.text_powered_by) },
        });
      },
      $t = [],
      Ct = {
        name: "FrontendPoweredBy",
        data: function () {
          return {
            text_powered_by: Object(D["a"])(
              "Powered by MonsterInsights",
              "ga-premium"
            ),
            upgrade_url: this.$getUpgradeUrl("admin-bar", "powered-by"),
          };
        },
      },
      Dt = Ct,
      Et = Object(M["a"])(Dt, xt, $t, !1, null, null, null),
      St = Et.exports,
      At = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "monsterinsights-not-authenticated-notice" },
          [
            n("h3", { domProps: { textContent: t._s(t.text_no_auth) } }),
            n(
              "div",
              {
                staticClass:
                  "monsterinsights-settings-input monsterinsights-settings-input-authenticate",
              },
              [
                n("p", { domProps: { textContent: t._s(t.text_auth_label) } }),
                n("div", [
                  n("a", {
                    staticClass:
                      "monsterinsights-wp-button monsterinsights-wp-button-primary",
                    attrs: { href: t.wizard_url },
                    domProps: { textContent: t._s(t.text_wizard) },
                  }),
                  n("a", {
                    staticClass: "monsterinsights-wp-button",
                    attrs: { href: t.learn_link },
                    domProps: { textContent: t._s(t.text_learn) },
                  }),
                ]),
              ]
            ),
          ]
        );
      },
      Tt = [],
      kt = {
        name: "FrontendNoAuth",
        data: function () {
          return {
            text_no_auth: Object(D["a"])(
              "Please Setup Website Analytics to See Audience Insights",
              "ga-premium"
            ),
            text_auth_label: Object(D["a"])(
              "MonsterInsights, WordPress analytics plugin, helps you connect your website with Google Analytics, so you can see how people find and use your website. Over 3 million website owners use MonsterInsights to see the stats that matter and grow their business.",
              "ga-premium"
            ),
            text_wizard: Object(D["a"])(
              "Connect MonsterInsights and Setup Website Analytics",
              "ga-premium"
            ),
            text_learn: Object(D["a"])("Learn More", "ga-premium"),
            wizard_url: this.$mi.wizard_url,
            learn_link: this.$mi.getting_started_url,
          };
        },
      },
      Rt = kt,
      Ut = Object(M["a"])(Rt, At, Tt, !1, null, null, null),
      Ft = Ut.exports;
    function It(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function Mt(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? It(Object(n), !0).forEach(function (e) {
              Object(o["a"])(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : It(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var Lt = {
        name: "ModuleFrontendReports",
        components: {
          FrontendNoAuth: Ft,
          FrontendPoweredBy: St,
          WidgetReportError: Pt["a"],
          FrontendStatsContent: jt,
        },
        data: function () {
          return {
            statsVisible: !1,
            page_id: this.$mi.page_id,
            text_insights: Object(D["a"])("Insights", "ga-premium"),
          };
        },
        created: function () {
          var t = "$_reports";
          t in this.$store._modules.root._children ||
            this.$store.registerModule(t, wt["a"]);
          var e = "$_frontend";
          e in this.$store._modules.root._children ||
            this.$store.registerModule(e, C);
        },
        computed: Mt(
          {},
          Object(E["b"])({
            reportdata: "$_frontend/pageinsights",
            loaded: "$_frontend/loaded",
            error: "$_frontend/error",
            noauth: "$_frontend/noauth",
            notifications: "$_notifications/notifications",
          }),
          {
            toggleButtonClass: function () {
              var t = "ab-item ab-empty-item monsterinsights-toggle";
              return (
                this.statsVisible && (t += " monsterinsights-toggle-active"), t
              );
            },
            has_notifications: function () {
              return this.notifications && this.notifications.length > 0;
            },
          }
        ),
        methods: {
          toggleStatsVisibility: function () {
            this.statsVisible = !this.statsVisible;
          },
        },
      },
      Nt = Lt,
      Vt = Object(M["a"])(Nt, r, s, !1, null, null, null),
      Bt = Vt.exports,
      Ht = n("7460"),
      Wt = n("6c6b"),
      zt = (n("f531"), n("4360")),
      Kt = {
        install: function (t, e) {
          var n = e.store;
          (t.prototype.$mi_loading_toast = function () {}),
            (t.prototype.$mi_error_toast = function (t) {
              var e = t,
                r = e.type,
                s = void 0 === r ? "error" : r,
                o = e.customContainerClass,
                i = void 0 === o ? "monsterinsights-swal" : o,
                a = e.allowOutsideClick,
                c = void 0 !== a && a,
                l = e.allowEscapeKey,
                u = void 0 !== l && l,
                p = e.allowEnterKey,
                d = void 0 !== p && p,
                f = e.title,
                m = void 0 === f ? Object(D["a"])("Error", "ga-premium") : f,
                g = e.html,
                b =
                  void 0 === g
                    ? Object(D["a"])("Please try again.", "ga-premium")
                    : g,
                h = e.footer,
                _ = void 0 !== h && h;
              (t = {
                type: s,
                customContainerClass: i,
                allowOutsideClick: c,
                allowEscapeKey: u,
                allowEnterKey: d,
                title: m,
                html: b,
                footer: _,
              }),
                n.commit("$_frontend/SET_ERROR", {
                  title: t.title,
                  content: t.html,
                  footer: t.footer,
                });
            }),
            (t.prototype.$swal = { close: function () {} });
        },
      },
      Gt = Kt;
    window.addEventListener("load", function () {
      var t = document.getElementById(
        "wp-admin-bar-monsterinsights_frontend_button"
      );
      ((c["a"].config.productionTip = !1), t) &&
        (Object(Wt["a"])({ ctrl: !0 }),
        c["a"].use(Ht["a"]),
        c["a"].use(Gt, { store: zt["a"] }),
        Object(D["c"])(window.monsterinsights.translations, "ga-premium"),
        new c["a"]({
          store: zt["a"],
          mounted: function () {
            zt["a"].dispatch("$_notifications/getNotifications");
          },
          render: function (t) {
            return t(Bt);
          },
        }).$mount(t));
    });
  },
  f531: function (t, e, n) {},
});
