(function (e) {
  function t(t) {
    for (
      var o, n, a = t[0], c = t[1], l = t[2], u = 0, d = [];
      u < a.length;
      u++
    )
      (n = a[u]), i[n] && d.push(i[n][0]), (i[n] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (e[o] = c[o]);
    p && p(t);
    while (d.length) d.shift()();
    return s.push.apply(s, l || []), r();
  }
  function r() {
    for (var e, t = 0; t < s.length; t++) {
      for (var r = s[t], o = !0, a = 1; a < r.length; a++) {
        var c = r[a];
        0 !== i[c] && (o = !1);
      }
      o && (s.splice(t--, 1), (e = n((n.s = r[0]))));
    }
    return e;
  }
  var o = {},
    i = { widget: 0 },
    s = [];
  function n(t) {
    if (o[t]) return o[t].exports;
    var r = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
  }
  (n.m = e),
    (n.c = o),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
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
              return e["default"];
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = "https://monsterinsights.test/");
  var a = (window["monsterinsightsjsonp"] =
      window["monsterinsightsjsonp"] || []),
    c = a.push.bind(a);
  (a.push = t), (a = a.slice());
  for (var l = 0; l < a.length; l++) t(a[l]);
  var p = c;
  s.push([3, "chunk-vendors", "chunk-common"]), r();
})({
  3: function (e, t, r) {
    e.exports = r("f70f");
  },
  "33ea": function (e, t, r) {},
  "3b3a": function (e, t, r) {},
  f70f: function (e, t, r) {
    "use strict";
    r.r(t);
    r("e260"), r("e6cf"), r("cca6"), r("a79d");
    var o = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { class: e.mainClass },
          [
            r("widget-settings", { ref: "settings" }),
            e.reauth ? r("report-re-auth") : r("widget-accordion"),
            e.fullWidth
              ? r("div", { staticClass: "monsterinsights-fullwidth-mascot" })
              : e._e(),
            e.fullWidth
              ? r("div", {
                  staticClass: "monsterinsights-fullwidth-report-title",
                  domProps: { textContent: e._s(e.text_overview_report) },
                })
              : e._e(),
            e.fullWidth ? e._e() : r("widget-footer"),
          ],
          1
        );
      },
      i = [],
      s =
        (r("a4d3"),
        r("4de4"),
        r("4160"),
        r("b0c0"),
        r("e439"),
        r("dbb4"),
        r("b64b"),
        r("159b"),
        r("fc11")),
      n = r("561c"),
      a = r("2f62"),
      c = r("f284"),
      l = (r("d3b7"), r("2b0e")),
      p = r("bc3a"),
      u = r.n(p),
      d = function (e, t, r, o, i) {
        return new Promise(function (s) {
          var n = new FormData();
          (r = JSON.stringify(r)),
            n.append("action", "monsterinsights_save_widget_state"),
            n.append("nonce", l["a"].prototype.$mi.nonce),
            n.append("width", t),
            n.append("reports", r),
            n.append("interval", o),
            n.append("notice", i),
            n.append("compact", e.state.compact),
            u.a
              .post(l["a"].prototype.$mi.ajax, n)
              .then(function (e) {
                l["a"].prototype.$swal.close(), s(e.data);
              })
              .catch(function (e) {
                console.log(e);
              });
        });
      },
      m = function () {
        return new Promise(function () {
          var e = new FormData();
          e.append("action", "monsterinsights_mark_notice_closed"),
            e.append("nonce", l["a"].prototype.$mi.nonce),
            u.a.post(l["a"].prototype.$mi.ajax, e);
        });
      },
      h = { saveWidgetState: d, markNoticeClosed: m },
      g = function (e) {
        return new Promise(function (t) {
          if (
            l["a"].prototype.$mi.widget_state &&
            l["a"].prototype.$mi.widget_state.reports
          )
            for (var r in l["a"].prototype.$mi.widget_state.reports)
              if (l["a"].prototype.$mi.widget_state.reports.hasOwnProperty(r))
                for (var o in l["a"].prototype.$mi.widget_state.reports[r])
                  l["a"].prototype.$mi.widget_state.reports[r].hasOwnProperty(
                    o
                  ) &&
                    (e.state.reports[o].enabled =
                      l["a"].prototype.$mi.widget_state.reports[r][o]);
          (e.state.width = l["a"].prototype.$mi.widget_state.width),
            (e.state.interval = l["a"].prototype.$mi.widget_state.interval),
            (e.state.notice30day =
              l["a"].prototype.$mi.widget_state.notice30day),
            (e.state.compact =
              "undefined" !==
                typeof l["a"].prototype.$mi.widget_state.compact &&
              l["a"].prototype.$mi.widget_state.compact),
            t(!0);
        });
      },
      b = function (e) {
        var t = { overview: {}, publisher: {}, ecommerce: {} },
          r = e.rootGetters.hasOwnProperty("$_reports/date")
            ? e.rootGetters["$_reports/date"]["interval"]
            : "";
        for (var o in e.state.reports)
          if (
            e.state.reports.hasOwnProperty(o) &&
            e.state.reports[o].hasOwnProperty("type")
          ) {
            var i = e.state.reports[o].type;
            t[i][o] = e.state.reports[o]["enabled"];
          }
        h.saveWidgetState(e, e.state.width, t, r);
      },
      f = function () {
        h.markNoticeClosed();
      },
      v = { processDefaults: g, saveWidgetState: b, markNoticeClosed: f },
      w = function (e) {
        return e.reports;
      },
      _ = function (e) {
        return e.width;
      },
      O = function (e) {
        return "regular" === e.width && e.compact;
      },
      y = function (e) {
        return e.loaded;
      },
      j = function (e) {
        return e.error;
      },
      x = function (e) {
        return e.notice30day;
      },
      k = {
        reports: w,
        width: _,
        loaded: y,
        error: j,
        notice30day: x,
        compact: O,
      },
      P = function (e, t) {
        e.reports[t] && l["a"].set(e.reports[t], "enabled", !0);
      },
      D = function (e, t) {
        e.reports[t] && l["a"].set(e.reports[t], "enabled", !1);
      },
      $ = function (e, t) {
        e.loaded = t;
      },
      R = function (e, t) {
        e.width = t;
      },
      C = function (e, t) {
        e.compact = t;
      },
      T = function (e, t) {
        "undefined" !== typeof t.title ||
        "undefined" !== typeof t.content ||
        "undefined" !== typeof t.footer
          ? l["a"].set(e.error, t.report, t)
          : l["a"].set(e.error, t.report, !1);
      },
      E = {
        ENABLE_REPORT: P,
        DISABLE_REPORT: D,
        UPDATE_LOADED: $,
        UPDATE_WIDTH: R,
        SET_ERROR: T,
        UPDATE_COMPACT: C,
      },
      L = {
        width: "regular",
        interval: 30,
        loaded: !1,
        compact: !0,
        reports: {
          overview: {
            type: "overview",
            name: Object(n["a"])("Overview Report", "ga-premium"),
            enabled: !0,
            component: "WidgetReportOverview",
          },
          toppages: {
            type: "overview",
            name: Object(n["a"])("Top Posts/Pages", "ga-premium"),
            tooltip: Object(n["a"])(
              "This list shows the most viewed posts and pages on your website.",
              "ga-premium"
            ),
            enabled: !1,
            component: "WidgetReportTopPosts",
          },
          newvsreturn: {
            type: "overview",
            name: Object(n["a"])("New vs. Returning Visitors", "ga-premium"),
            tooltip: Object(n["a"])(
              "This graph shows what percent of your user sessions come from new versus repeat visitors.",
              "ga-premium"
            ),
            enabled: !1,
            component: "WidgetReportNewVsReturning",
          },
          devices: {
            type: "overview",
            name: Object(n["a"])("Device Breakdown", "ga-premium"),
            tooltip: Object(n["a"])(
              "This graph shows what percent of your visitor sessions are done using a traditional computer or laptop, tablet or mobile device to view your site.",
              "ga-premium"
            ),
            enabled: !1,
            component: "WidgetReportDevices",
          },
          landingpages: {
            type: "publisher",
            name: Object(n["a"])("Top Landing Pages", "ga-premium"),
            tooltip: Object(n["a"])(
              "This list shows the top pages users first land on when visiting your website.",
              "ga-premium"
            ),
            enabled: !1,
            component: "WidgetReportLandingPages",
          },
          exitpages: {
            type: "publisher",
            name: Object(n["a"])("Top Exit Pages", "ga-premium"),
            tooltip: Object(n["a"])(
              "This list shows the top pages users exit your website from.",
              "ga-premium"
            ),
            enabled: !1,
            component: "WidgetReportExitPages",
          },
          outboundlinks: {
            type: "publisher",
            name: Object(n["a"])("Top Outbound Links", "ga-premium"),
            tooltip: Object(n["a"])(
              "This list shows the top links clicked on your website that go to another website.",
              "ga-premium"
            ),
            enabled: !1,
            component: "WidgetReportOutboundLinks",
          },
          affiliatelinks: {
            type: "publisher",
            name: Object(n["a"])("Top Affiliate Links", "ga-premium"),
            tooltip: Object(n["a"])(
              "This list shows the top affiliate links your visitors clicked on.",
              "ga-premium"
            ),
            enabled: !1,
            component: "WidgetReportAffiliateLinks",
          },
          downloadlinks: {
            type: "publisher",
            name: Object(n["a"])("Top Download Links", "ga-premium"),
            tooltip: Object(n["a"])(
              "This list shows the download links your visitors clicked the most.",
              "ga-premium"
            ),
            enabled: !1,
            component: "WidgetReportDownloadLinks",
          },
          infobox: {
            type: "ecommerce",
            name: Object(n["a"])("Overview", "ga-premium"),
            enabled: !1,
            component: "WidgetReportEcommerceOverview",
          },
          products: {
            type: "ecommerce",
            name: Object(n["a"])("Top Products", "ga-premium"),
            tooltip: Object(n["a"])(
              "This list shows the top selling products on your website.",
              "ga-premium"
            ),
            enabled: !1,
            component: "WidgetReportTopProducts",
          },
          conversions: {
            type: "ecommerce",
            name: Object(n["a"])("Top Conversion Sources", "ga-premium"),
            tooltip: Object(n["a"])(
              "This list shows the top referral websites in terms of product revenue.",
              "ga-premium"
            ),
            enabled: !1,
            component: "WidgetReportTopConversions",
          },
          addremove: {
            type: "ecommerce",
            name: Object(n["a"])("Total Add/Remove", "ga-premium"),
            enabled: !1,
            component: "WidgetReportAddRemove",
          },
          days: {
            type: "ecommerce",
            name: Object(n["a"])("Time to Purchase", "ga-premium"),
            tooltip: Object(n["a"])(
              "This list shows how many days from first visit it took users to purchase products from your site.",
              "ga-premium"
            ),
            enabled: !1,
            component: "WidgetReportDays",
          },
          sessions: {
            type: "ecommerce",
            name: Object(n["a"])("Sessions to Purchase", "ga-premium"),
            tooltip: Object(n["a"])(
              "This list shows the number of sessions it took users before they purchased a product from your website.",
              "ga-premium"
            ),
            enabled: !1,
            component: "WidgetReportSessions",
          },
        },
        error: {},
        notice30day: !1,
      },
      S = { namespaced: !0, state: L, actions: v, getters: k, mutations: E },
      W = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-widget-accordion" },
          e._l(e.widgetReports, function (t, o) {
            return r("div", { key: o, class: e.reportClass(o, t) }, [
              e.showReportTitle(t.enabled)
                ? r(
                    "div",
                    {
                      class: e.toggleClass(o),
                      attrs: { tabindex: "0" },
                      on: {
                        click: function (t) {
                          return t.preventDefault(), e.toggle(t, o);
                        },
                        keyup: [
                          function (t) {
                            return !t.type.indexOf("key") &&
                              e._k(t.keyCode, "space", 32, t.key, [
                                " ",
                                "Spacebar",
                              ])
                              ? null
                              : e.toggle(t, o);
                          },
                          function (t) {
                            return !t.type.indexOf("key") &&
                              e._k(t.keyCode, "enter", 13, t.key, "Enter")
                              ? null
                              : e.toggle(t, o);
                          },
                        ],
                      },
                    },
                    [
                      r(
                        "h2",
                        { staticClass: "monsterinsights-widget-report-title" },
                        [
                          r("span", {
                            domProps: { textContent: e._s(t.name) },
                          }),
                          t.tooltip
                            ? r("settings-info-tooltip", {
                                attrs: { content: t.tooltip },
                              })
                            : e._e(),
                        ],
                        1
                      ),
                    ]
                  )
                : e._e(),
              e.showReport(o, t)
                ? r(
                    "div",
                    { staticClass: "monsterinsights-widget-content" },
                    [
                      e.error[t.type]
                        ? r("widget-report-error", {
                            attrs: { error: e.error[t.type] },
                          })
                        : e.loaded
                        ? r(t.component, {
                            tag: "component",
                            on: {
                              upsellshown: function (t) {
                                return e.maybeHideUpsell(o);
                              },
                            },
                          })
                        : r("div", {
                            staticClass: "monsterinsights-widget-loading",
                          }),
                    ],
                    1
                  )
                : e._e(),
            ]);
          }),
          0
        );
      },
      A = [],
      U =
        (r("a9e3"),
        r("4795"),
        function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "div",
            [
              e.showChart()
                ? r(
                    "div",
                    {
                      key: e.chartKey,
                      staticClass:
                        "monsterinsights-report-tabs monsterinsights-report-row",
                    },
                    [
                      r(
                        "div",
                        {
                          staticClass: "monsterinsights-report-tabs-navigation",
                        },
                        [
                          r(
                            "button",
                            {
                              class: e.activeTabButtonClass("sessions"),
                              on: {
                                click: function (t) {
                                  return e.switchTab("sessions");
                                },
                              },
                            },
                            [
                              r("i", { staticClass: "monstericon-user" }),
                              r("span", {
                                domProps: {
                                  textContent: e._s(e.text_sessions),
                                },
                              }),
                            ]
                          ),
                          r(
                            "button",
                            {
                              class: e.activeTabButtonClass("pageviews"),
                              on: {
                                click: function (t) {
                                  return e.switchTab("pageviews");
                                },
                              },
                            },
                            [
                              r("i", { staticClass: "monstericon-eye" }),
                              r("span", {
                                domProps: {
                                  textContent: e._s(e.text_pageviews),
                                },
                              }),
                            ]
                          ),
                        ]
                      ),
                      "sessions" === e.current_tab
                        ? r(
                            "div",
                            {
                              staticClass:
                                "monsterinsights-report-tabs-content",
                            },
                            [
                              r("report-overview-line-chart", {
                                attrs: {
                                  id: "overview",
                                  "chart-data": e.sessionsData(),
                                  tooltip: e.text_sessions_tooltip,
                                },
                              }),
                            ],
                            1
                          )
                        : e._e(),
                      "pageviews" === e.current_tab
                        ? r(
                            "div",
                            {
                              staticClass:
                                "monsterinsights-report-tabs-content",
                            },
                            [
                              r("report-overview-line-chart", {
                                attrs: {
                                  id: "overview",
                                  "chart-data": e.pageviewsData(),
                                  tooltip: e.text_pageviews_tooltip,
                                },
                              }),
                            ],
                            1
                          )
                        : e._e(),
                    ]
                  )
                : e._e(),
              r(
                "div",
                {
                  staticClass:
                    "monsterinsights-report-row monsterinsights-report-infobox-row",
                },
                [
                  r("report-infobox", {
                    attrs: {
                      title: e.text_sessions,
                      value: e.$formatNumber(e.infoboxSessionsData.value),
                      change: e.infoboxSessionsData.change,
                      color: e.infoboxSessionsData.color,
                      direction: e.infoboxSessionsData.direction,
                      days: e.infoboxRange,
                      tooltip: e.text_infobox_tooltip_sessions,
                    },
                  }),
                  r("report-infobox", {
                    attrs: {
                      title: e.text_pageviews,
                      value: e.$formatNumber(e.infoboxPageviewsData.value),
                      change: e.infoboxPageviewsData.change,
                      color: e.infoboxPageviewsData.color,
                      direction: e.infoboxPageviewsData.direction,
                      days: e.infoboxRange,
                      tooltip: e.text_infobox_tooltip_pageviews,
                    },
                  }),
                  r("report-infobox", {
                    attrs: {
                      title: e.text_duration,
                      value: e.infoboxDurationData.value,
                      change: e.infoboxDurationData.change,
                      color: e.infoboxDurationData.color,
                      direction: e.infoboxDurationData.direction,
                      days: e.infoboxRange,
                      tooltip: e.text_infobox_tooltip_average,
                    },
                  }),
                  r("report-infobox", {
                    attrs: {
                      title: e.text_bounce,
                      value: e.infoboxBounceData.value,
                      change: e.infoboxBounceData.change,
                      color: e.infoboxBounceData.color,
                      direction: e.infoboxBounceData.direction,
                      days: e.infoboxRange,
                      tooltip: e.text_infobox_tooltip_bounce,
                    },
                  }),
                ],
                1
              ),
              r("WidgetTips"),
            ],
            1
          );
        }),
      N = [],
      B = (r("25f0"), r("8d58")),
      F = r("bd74"),
      I = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return e.tip
          ? r("div", { staticClass: "monsterinsights-tips" }, [
              r("span", { staticClass: "monstericon-star" }),
              r("div", { staticClass: "monsterinsights-tip-text" }, [
                r("strong", {
                  domProps: { textContent: e._s(e.text_pro_tip) },
                }),
                e._v(" " + e._s(e.tip.text) + " "),
                r("a", {
                  attrs: { href: e.upgradeUrl("pro-tips", e.tip.utm) },
                  domProps: { textContent: e._s(e.text_upgrade_link) },
                }),
              ]),
            ])
          : e._e();
      },
      M = [];
    function V(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function Y(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? V(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : V(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var H = {
        name: "WidgetTips",
        data: function () {
          return {
            tips: [
              {
                text: Object(n["a"])(
                  "Forms Tracking help you see who’s viewing your forms, so you can increase conversions.",
                  "ga-premium"
                ),
                utm: "forms",
                level: "pro",
              },
              {
                text: Object(n["a"])(
                  "Custom Dimensions show you popular categories, best time to publish, focus keywords, etc.",
                  "ga-premium"
                ),
                utm: "custom-dimensions",
                level: "pro",
              },
              {
                text: Object(n["a"])(
                  "Make Google Analytics GDPR compliant with our EU Compliance addon.",
                  "ga-premium"
                ),
                utm: "gdpr",
                level: "plus",
              },
              {
                text: Object(n["a"])(
                  "Get real-time Google Analytics report right inside your WordPress dashboard.",
                  "ga-premium"
                ),
                utm: "real-time",
                level: "plus",
              },
              {
                text: Object(n["a"])(
                  "Use Google Optimize to easily perform A/B split tests on your site.",
                  "ga-premium"
                ),
                utm: "optimize",
                level: "pro",
              },
              {
                text: Object(n["a"])(
                  "See all your important store metrics in one place with Enhanced Ecommerce Tracking.",
                  "ga-premium"
                ),
                utm: "ecommerce",
                level: "pro",
              },
              {
                text: Object(n["a"])(
                  "Unlock search console report to see your top performing keywords in Google.",
                  "ga-premium"
                ),
                utm: "search-console",
                level: "plus",
              },
              {
                text: Object(n["a"])(
                  "Get Page Insights to see important metrics for individual posts / pages in WordPress.",
                  "ga-premium"
                ),
                utm: "page-insights",
                level: "plus",
              },
              {
                text: Object(n["a"])(
                  "Publishers Report shows your top performing pages, audience demographics, and more.",
                  "ga-premium"
                ),
                utm: "publishers",
                level: "plus",
              },
              {
                text: Object(n["a"])(
                  "Get Scroll-Depth tracking to see how far users scroll on your pages before leaving.",
                  "ga-premium"
                ),
                utm: "scroll",
                level: "plus",
              },
            ],
            text_upgrade_link: Object(n["a"])("Upgrade to Pro »", "ga-premium"),
            text_pro_tip: Object(n["a"])("Pro Tip:", "ga-premium"),
          };
        },
        computed: Y(
          {},
          Object(a["b"])({
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            licenseLevel: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            tip: function () {
              return this.getTip();
            },
          }
        ),
        methods: {
          getRandomTip: function () {
            return this.tips[Math.floor(Math.random() * this.tips.length)];
          },
          getPlusTip: function () {
            var e = this.getRandomTip();
            return "pro" !== e.level ? this.getPlusTip() : e;
          },
          getTip: function () {
            return "" === this.licenseLevel
              ? this.getRandomTip()
              : ("plus" === this.licenseLevel ||
                  "basic" === this.licenseLevel) &&
                  this.getPlusTip();
          },
          upgradeUrl: function (e, t) {
            return this.$getUpgradeUrl(e, t);
          },
        },
      },
      z = H,
      K = r("2877"),
      G = Object(K["a"])(z, I, M, !1, null, null, null),
      q = G.exports;
    function Q(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function J(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Q(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Q(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var X = {
        name: "WidgetReportOverview",
        components: {
          WidgetTips: q,
          ReportInfobox: F["a"],
          ReportOverviewLineChart: B["a"],
        },
        computed: J(
          {},
          Object(a["b"])({
            overview: "$_reports/overview",
            widget_width: "$_widget/width",
          }),
          {
            infoboxRange: function () {
              return this.overview.infobox && this.overview.infobox.range
                ? this.overview.infobox.range
                : 0;
            },
            infoboxSessionsData: function () {
              return this.infoboxData("sessions");
            },
            infoboxPageviewsData: function () {
              return this.infoboxData("pageviews");
            },
            infoboxDurationData: function () {
              return this.infoboxData("duration");
            },
            infoboxBounceData: function () {
              return this.infoboxData("bounce", !0);
            },
          }
        ),
        data: function () {
          return {
            chartKey: 0,
            current_tab: "sessions",
            text_sessions: Object(n["a"])("Sessions", "ga-premium"),
            text_sessions_tooltip: Object(n["d"])(
              Object(n["a"])("Unique %s Sessions", "ga-premium"),
              "<br />"
            ),
            text_pageviews: Object(n["a"])("Pageviews", "ga-premium"),
            text_pageviews_tooltip: Object(n["d"])(
              Object(n["a"])("Unique %s Pageviews", "ga-premium"),
              "<br />"
            ),
            text_infobox_tooltip_sessions: Object(n["a"])(
              "A session is the browsing session of a single user to your site.",
              "ga-premium"
            ),
            text_infobox_tooltip_pageviews: Object(n["a"])(
              "A pageview is defined as a view of a page on your site that is being tracked by the Analytics tracking code. Each refresh of a page is also a new pageview.",
              "ga-premium"
            ),
            text_infobox_tooltip_average: Object(n["a"])(
              "Total duration of all sessions (in seconds) / number of sessions.",
              "ga-premium"
            ),
            text_infobox_tooltip_bounce: Object(n["a"])(
              "Percentage of single page visits (or web sessions). It is the number of visits in which a person leaves your website from the landing page without browsing any further.",
              "ga-premium"
            ),
            text_duration: Object(n["a"])(
              "Avg. Session Duration",
              "ga-premium"
            ),
            text_bounce: Object(n["a"])("Bounce Rate", "ga-premium"),
          };
        },
        methods: {
          switchTab: function (e) {
            this.current_tab = e;
          },
          activeTabButtonClass: function (e) {
            return e === this.current_tab
              ? "monsterinsights-active-tab-button"
              : "";
          },
          sessionsData: function () {
            return this.overview.overviewgraph
              ? {
                  labels: this.overview.overviewgraph.labels,
                  datasets: [
                    {
                      lineTension: 0,
                      borderColor: "#5fa6e7",
                      backgroundColor: "rgba(\t109, 176, 233, 0.2)",
                      fillOpacity: 0.2,
                      fillColor: "rgba(\t109, 176, 233, 0.2)",
                      pointRadius: 4,
                      pointBorderColor: "#3783c4",
                      pointBackgroundColor: "#FFF",
                      hoverRadius: 1,
                      pointHoverBackgroundColor: "#FFF",
                      pointHoverBorderColor: "#3783c4",
                      pointHoverBorderWidth: 4,
                      pointHoverRadius: 6,
                      labels: this.overview.overviewgraph.labels,
                      data: this.overview.overviewgraph.sessions.datapoints,
                      trend: this.overview.overviewgraph.sessions.trendpoints,
                    },
                  ],
                }
              : {};
          },
          pageviewsData: function () {
            return this.overview.overviewgraph
              ? {
                  labels: this.overview.overviewgraph.labels,
                  datasets: [
                    {
                      lineTension: 0,
                      borderColor: "#5fa6e7",
                      backgroundColor: "rgba(\t109, 176, 233, 0.2)",
                      fillOpacity: 0.2,
                      fillColor: "rgba(\t109, 176, 233, 0.2)",
                      pointRadius: 4,
                      pointBorderColor: "#3783c4",
                      pointBackgroundColor: "#FFF",
                      hoverRadius: 1,
                      pointHoverBackgroundColor: "#FFF",
                      pointHoverBorderColor: "#3783c4",
                      pointHoverBorderWidth: 4,
                      pointHoverRadius: 6,
                      labels: this.overview.overviewgraph.labels,
                      data: this.overview.overviewgraph.pageviews.datapoints,
                      trend: this.overview.overviewgraph.pageviews.trendpoints,
                    },
                  ],
                }
              : {};
          },
          showChart: function () {
            var e = !0;
            return (
              this.overview.overviewgraph &&
                0 === this.overview.overviewgraph.count &&
                (e = !1),
              e
            );
          },
          infoboxData: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = {};
            return (
              this.overview.infobox &&
                this.overview.infobox[e] &&
                ((r.change = this.overview.infobox[e]["prev"]),
                (r.value = this.overview.infobox[e]["value"].toString()),
                0 === this.overview.infobox[e]["prev"]
                  ? (r.direction = "")
                  : this.overview.infobox[e]["prev"] > 0
                  ? ((r.direction = "up"), (r.color = "green"))
                  : ((r.direction = "down"), (r.color = "red"))),
              t &&
                ("down" === r.direction
                  ? (r.color = "green")
                  : (r.color = "red")),
              r
            );
          },
          forceRerender: function () {
            this.chartKey += 1;
          },
        },
        created: function () {
          var e = this,
            t = document.getElementById("dashboard-widgets");
          jQuery &&
            jQuery(t).on("sortstop", function () {
              e.forceRerender();
            });
        },
        watch: {
          widget_width: function () {
            this.forceRerender();
          },
        },
      },
      Z = X,
      ee = Object(K["a"])(Z, U, N, !1, null, null, null),
      te = ee.exports,
      re = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "report-list-box",
          {
            attrs: {
              title: e.text_top_posts,
              rows: e.topPostsData,
              tooltip: e.text_top_posts_tooltip,
            },
          },
          [
            e.gaLinks
              ? r("a", {
                  staticClass: "monsterinsights-button",
                  attrs: {
                    slot: "button",
                    href: e.overview.galinks.topposts,
                    target: "_blank",
                  },
                  domProps: { textContent: e._s(e.text_top_posts_button) },
                  slot: "button",
                })
              : e._e(),
          ]
        );
      },
      oe = [],
      ie = r("d71e");
    function se(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function ne(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? se(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : se(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var ae = {
        name: "WidgetReportTopPosts",
        components: { ReportListBox: ie["a"] },
        data: function () {
          return {
            text_top_posts_button: Object(n["a"])(
              "View Full Posts/Pages Report",
              "ga-premium"
            ),
            text_top_posts: Object(n["a"])("Top Posts/Pages", "ga-premium"),
            text_top_posts_tooltip: Object(n["a"])(
              "This list shows the most viewed posts and pages on your website.",
              "ga-premium"
            ),
          };
        },
        computed: ne({}, Object(a["b"])({ overview: "$_reports/overview" }), {
          gaLinks: function () {
            return !!this.overview.galinks;
          },
          topPostsData: function () {
            var e = [],
              t = 0;
            return (
              this.overview.toppages &&
                this.overview.toppages.forEach(function (r) {
                  t++;
                  var o = r.hostname
                      ? '<a href="' +
                        r.hostname +
                        r.url +
                        '" target="_blank" rel="noreferrer noopener">' +
                        r.title +
                        "</a>"
                      : r.title,
                    i = r.sessions;
                  e.push({ number: t + ".", text: o, right: i });
                }),
              e
            );
          },
        }),
      },
      ce = ae,
      le = Object(K["a"])(ce, re, oe, !1, null, null, null),
      pe = le.exports,
      ue = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("report-overview-pie-chart", {
          attrs: {
            id: "newvsreturning",
            title: e.text_new_vs_returning,
            chartData: e.newVsReturningData,
            tooltip: e.text_pie_tooltip_newvsreturning,
          },
        });
      },
      de = [],
      me = r("91f2");
    function he(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function ge(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? he(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : he(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var be = {
        name: "WidgetReportNewVsReturning",
        components: { ReportOverviewPieChart: me["a"] },
        data: function () {
          return {
            text_new_vs_returning: Object(n["a"])(
              "New vs. Returning Visitors",
              "ga-premium"
            ),
            text_pie_tooltip_newvsreturning: Object(n["a"])(
              "This graph shows what percent of your user sessions come from new versus repeat visitors.",
              "ga-premium"
            ),
          };
        },
        computed: ge({}, Object(a["b"])({ overview: "$_reports/overview" }), {
          newVsReturningData: function () {
            return (
              !!this.overview.newvsreturn && {
                datasets: [
                  {
                    data: [
                      this.overview.newvsreturn.new,
                      this.overview.newvsreturn.returning,
                    ],
                    backgroundColor: ["#2679c1", "#57a9f1"],
                  },
                ],
                values: [
                  this.overview.newvsreturn.new,
                  this.overview.newvsreturn.returning,
                ],
                labels: [
                  Object(n["a"])("New", "ga-premium"),
                  Object(n["a"])("Returning", "ga-premium"),
                ],
              }
            );
          },
        }),
      },
      fe = be,
      ve = Object(K["a"])(fe, ue, de, !1, null, null, null),
      we = ve.exports,
      _e = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("report-overview-pie-chart", {
          attrs: {
            id: "devices",
            chartData: e.devicesData,
            title: e.text_device_breakdown,
            tooltip: e.text_pie_tooltip_devices,
          },
        });
      },
      Oe = [];
    function ye(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function je(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ye(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : ye(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var xe = {
        name: "WidgetReportDevices",
        components: { ReportOverviewPieChart: me["a"] },
        data: function () {
          return {
            text_device_breakdown: Object(n["a"])(
              "Device Breakdown",
              "ga-premium"
            ),
            text_pie_tooltip_devices: Object(n["a"])(
              "This graph shows what percent of your visitor sessions are done using a traditional computer or laptop, tablet or mobile device to view your site.",
              "ga-premium"
            ),
          };
        },
        computed: je({}, Object(a["b"])({ overview: "$_reports/overview" }), {
          devicesData: function () {
            return (
              !!this.overview.devices && {
                datasets: [
                  {
                    data: [
                      this.overview.devices.desktop,
                      this.overview.devices.tablet,
                      this.overview.devices.mobile,
                    ],
                    backgroundColor: ["#2679c1", "#57a9f1", "#b1dafd"],
                  },
                ],
                values: [
                  this.overview.devices.desktop,
                  this.overview.devices.tablet,
                  this.overview.devices.mobile,
                ],
                labels: [
                  Object(n["a"])("Desktop", "ga-premium"),
                  Object(n["a"])("Tablet", "ga-premium"),
                  Object(n["a"])("Mobile", "ga-premium"),
                ],
              }
            );
          },
        }),
      },
      ke = xe,
      Pe = Object(K["a"])(ke, _e, Oe, !1, null, null, null),
      De = Pe.exports,
      $e = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-flex monsterinsights-height100" },
          [
            e.showUpsell()
              ? r("report-upsell-overlay", { attrs: { report: "publisher" } })
              : r(
                  "report-table-box",
                  {
                    attrs: {
                      title: e.text_landing_pages,
                      headers: e.landing_pages_headers,
                      rows: e.landing_pages_rows,
                      emptytext: e.text_landing_pages_empty,
                      tooltip: e.text_landing_pages_tooltip,
                      "mobile-width": 1630,
                    },
                  },
                  [
                    e.gaLinks("landingpages")
                      ? r("a", {
                          staticClass: "monsterinsights-button",
                          attrs: {
                            slot: "button",
                            href: e.gaLinks("landingpages"),
                            target: "_blank",
                          },
                          domProps: {
                            textContent: e._s(e.text_landing_pages_button),
                          },
                          slot: "button",
                        })
                      : e._e(),
                  ]
                ),
          ],
          1
        );
      },
      Re = [],
      Ce = r("cad8"),
      Te = r("48c7");
    function Ee(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function Le(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ee(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Ee(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var Se = {
        name: "WidgetReportLandingPages",
        components: { ReportUpsellOverlay: Te["a"], ReportTableBox: Ce["a"] },
        data: function () {
          return {
            text_landing_pages: Object(n["a"])(
              "Top Landing Pages",
              "ga-premium"
            ),
            text_landing_pages_button: Object(n["a"])(
              "View Full Top Landing Pages Report",
              "ga-premium"
            ),
            text_landing_pages_empty: Object(n["a"])(
              "No landing pages tracked during this time period.",
              "ga-premium"
            ),
            text_landing_pages_tooltip: Object(n["a"])(
              "This list shows the top pages users first land on when visiting your website.",
              "ga-premium"
            ),
            landing_pages_headers: [
              Object(n["a"])("Page Titles", "ga-premium"),
              Object(n["a"])("Visits", "ga-premium"),
              Object(n["a"])("Avg. Duration", "ga-premium"),
              Object(n["a"])("Bounce Rate", "ga-premium"),
            ],
          };
        },
        computed: Le(
          {},
          Object(a["b"])({
            publisher: "$_reports/publisher",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            licenseLevel: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            landing_pages_rows: function () {
              var e = this,
                t = [];
              return (
                this.publisher.landingpages &&
                  this.publisher.landingpages.forEach(function (r) {
                    var o = e.$formatNumber(r.bounce),
                      i = e.$formatNumber(r.visits);
                    (o += "%"), t.push([r.title, i, r.duration, o]);
                  }),
                t
              );
            },
          }
        ),
        methods: {
          showUpsell: function () {
            var e = "basic" === this.licenseLevel;
            return e && this.$emit("upsellshown"), e;
          },
          gaLinks: function (e) {
            return (
              !(
                "undefined" === typeof this.publisher.galinks ||
                !this.publisher.galinks[e]
              ) && this.publisher.galinks[e]
            );
          },
        },
      },
      We = Se,
      Ae = Object(K["a"])(We, $e, Re, !1, null, null, null),
      Ue = Ae.exports,
      Ne = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-flex monsterinsights-height100" },
          [
            e.showUpsell()
              ? r("report-upsell-overlay", { attrs: { report: "publisher" } })
              : r(
                  "report-table-box",
                  {
                    attrs: {
                      title: e.text_exit_pages,
                      headers: e.exit_pages_headers,
                      rows: e.exit_pages_rows,
                      emptytext: e.text_exit_pages_empty,
                      tooltip: e.text_exit_pages_tooltip,
                      "mobile-width": 1630,
                    },
                  },
                  [
                    e.gaLinks("exitpages")
                      ? r("a", {
                          staticClass: "monsterinsights-button",
                          attrs: {
                            slot: "button",
                            href: e.gaLinks("exitpages"),
                            target: "_blank",
                          },
                          domProps: {
                            textContent: e._s(e.text_exit_pages_button),
                          },
                          slot: "button",
                        })
                      : e._e(),
                  ]
                ),
          ],
          1
        );
      },
      Be = [];
    function Fe(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function Ie(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Fe(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Fe(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var Me = {
        name: "WidgetReportExitPages",
        components: { ReportUpsellOverlay: Te["a"], ReportTableBox: Ce["a"] },
        data: function () {
          return {
            text_exit_pages: Object(n["a"])("Top Exit Pages", "ga-premium"),
            text_exit_pages_button: Object(n["a"])(
              "View Full Top Exit Pages Report",
              "ga-premium"
            ),
            text_exit_pages_empty: Object(n["a"])(
              "No exit pages tracked during this time period.",
              "ga-premium"
            ),
            text_exit_pages_tooltip: Object(n["a"])(
              "This list shows the top pages users exit your website from.",
              "ga-premium"
            ),
            exit_pages_headers: [
              Object(n["a"])("Page Titles", "ga-premium"),
              Object(n["a"])("Exits", "ga-premium"),
              Object(n["a"])("Page Views", "ga-premium"),
              Object(n["a"])("% of Exits", "ga-premium"),
            ],
          };
        },
        computed: Ie(
          {},
          Object(a["b"])({
            publisher: "$_reports/publisher",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            licenseLevel: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            exit_pages_rows: function () {
              var e = this,
                t = [];
              return (
                this.publisher.exitpages &&
                  this.publisher.exitpages.forEach(function (r) {
                    var o = e.$formatNumber(r.exitrate),
                      i = e.$formatNumber(r.exits),
                      s = e.$formatNumber(r.pageviews);
                    (o += "%"), t.push([r.title, i, s, o]);
                  }),
                t
              );
            },
          }
        ),
        methods: {
          showUpsell: function () {
            var e = "basic" === this.licenseLevel;
            return e && this.$emit("upsellshown"), e;
          },
          gaLinks: function (e) {
            return (
              !(
                "undefined" === typeof this.publisher.galinks ||
                !this.publisher.galinks[e]
              ) && this.publisher.galinks[e]
            );
          },
        },
      },
      Ve = Me,
      Ye = Object(K["a"])(Ve, Ne, Be, !1, null, null, null),
      He = Ye.exports,
      ze = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-flex monsterinsights-height100" },
          [
            e.showUpsell()
              ? r("report-upsell-overlay", { attrs: { report: "publisher" } })
              : r(
                  "report-table-box",
                  {
                    attrs: {
                      title: e.text_outbound_links,
                      headers: e.outbound_links_headers,
                      rows: e.outbound_links_rows,
                      emptytext: e.text_outbound_links_empty,
                      tooltip: e.text_outbound_links_tooltip,
                      "mobile-width": 1630,
                    },
                  },
                  [
                    e.gaLinks("outboundlinks")
                      ? r("a", {
                          staticClass: "monsterinsights-button",
                          attrs: {
                            slot: "button",
                            href: e.gaLinks("outboundlinks"),
                            target: "_blank",
                          },
                          domProps: {
                            textContent: e._s(e.text_outbound_links_button),
                          },
                          slot: "button",
                        })
                      : e._e(),
                  ]
                ),
          ],
          1
        );
      },
      Ke = [];
    function Ge(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function qe(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Ge(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Ge(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var Qe = {
        name: "WidgetReportOutboundLinks",
        components: { ReportUpsellOverlay: Te["a"], ReportTableBox: Ce["a"] },
        data: function () {
          return {
            text_outbound_links_button: Object(n["a"])(
              "View All Outbound Links Report",
              "ga-premium"
            ),
            text_outbound_links: Object(n["a"])(
              "Top Outbound Links",
              "ga-premium"
            ),
            text_outbound_links_empty: Object(n["a"])(
              "No outbound link clicks detected for this time period.",
              "ga-premium"
            ),
            text_outbound_links_tooltip: Object(n["a"])(
              "This list shows the top links clicked on your website that go to another website.",
              "ga-premium"
            ),
            outbound_links_headers: [
              Object(n["a"])("Links", "ga-premium"),
              Object(n["a"])("Total Clicks", "ga-premium"),
            ],
          };
        },
        computed: qe(
          {},
          Object(a["b"])({
            publisher: "$_reports/publisher",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            licenseLevel: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            outbound_links_rows: function () {
              var e = this,
                t = [];
              return (
                this.publisher.outboundlinks &&
                  this.publisher.outboundlinks.forEach(function (r) {
                    var o = e.$formatNumber(r.clicks);
                    t.push([r.title, o]);
                  }),
                t
              );
            },
          }
        ),
        methods: {
          showUpsell: function () {
            var e = "basic" === this.licenseLevel;
            return e && this.$emit("upsellshown"), e;
          },
          gaLinks: function (e) {
            return (
              !(
                "undefined" === typeof this.publisher.galinks ||
                !this.publisher.galinks[e]
              ) && this.publisher.galinks[e]
            );
          },
        },
      },
      Je = Qe,
      Xe = Object(K["a"])(Je, ze, Ke, !1, null, null, null),
      Ze = Xe.exports,
      et = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-flex monsterinsights-height100" },
          [
            e.showUpsell()
              ? r("report-upsell-overlay", {
                  attrs: {
                    report: e.text_upsell_title,
                    license: e.licenseLevel,
                    level: "plus",
                  },
                })
              : r(
                  "report-table-box",
                  {
                    attrs: {
                      title: e.text_affiliate_links,
                      headers: e.affiliate_links_headers,
                      rows: e.affiliate_links_rows,
                      emptytext: e.text_affiliate_links_empty,
                      tooltip: e.text_affiliate_links_tooltip,
                      "mobile-width": 1330,
                    },
                  },
                  [
                    e.gaLinks("affiliatelinks")
                      ? r("a", {
                          staticClass: "monsterinsights-button",
                          attrs: {
                            slot: "button",
                            href: e.gaLinks("affiliatelinks"),
                            target: "_blank",
                          },
                          domProps: {
                            textContent: e._s(e.text_affiliate_links_button),
                          },
                          slot: "button",
                        })
                      : e._e(),
                  ]
                ),
          ],
          1
        );
      },
      tt = [];
    function rt(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function ot(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? rt(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : rt(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var it = {
        name: "WidgetReportAffiliateLinks",
        components: { ReportUpsellOverlay: Te["a"], ReportTableBox: Ce["a"] },
        data: function () {
          return {
            text_upsell_title: Object(n["a"])("Publisher", "ga-premium"),
            text_affiliate_links_button: Object(n["a"])(
              "View All Affiliate Links Report",
              "ga-premium"
            ),
            text_affiliate_links: Object(n["a"])(
              "Top Affiliate Links",
              "ga-premium"
            ),
            text_affiliate_links_empty: Object(n["a"])(
              "No affiliate link clicks detected for this time period.",
              "ga-premium"
            ),
            text_affiliate_links_tooltip: Object(n["a"])(
              "This list shows the top affiliate links your visitors clicked on.",
              "ga-premium"
            ),
            affiliate_links_headers: [
              Object(n["a"])("Links", "ga-premium"),
              Object(n["a"])("Total Clicks", "ga-premium"),
            ],
          };
        },
        computed: ot(
          {},
          Object(a["b"])({
            publisher: "$_reports/publisher",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            licenseLevel: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            affiliate_links_rows: function () {
              var e = this,
                t = [];
              return (
                this.publisher.affiliatelinks &&
                  this.publisher.affiliatelinks.forEach(function (r) {
                    var o = e.$formatNumber(r.clicks);
                    t.push([r.title, o]);
                  }),
                t
              );
            },
          }
        ),
        methods: {
          showUpsell: function () {
            var e = "basic" === this.licenseLevel;
            return e && this.$emit("upsellshown"), e;
          },
          gaLinks: function (e) {
            return (
              !(
                "undefined" === typeof this.publisher.galinks ||
                !this.publisher.galinks[e]
              ) && this.publisher.galinks[e]
            );
          },
        },
      },
      st = it,
      nt = Object(K["a"])(st, et, tt, !1, null, null, null),
      at = nt.exports,
      ct = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-flex monsterinsights-height100" },
          [
            e.showUpsell()
              ? r("report-upsell-overlay", { attrs: { report: "publisher" } })
              : r(
                  "report-table-box",
                  {
                    attrs: {
                      title: e.text_downloads,
                      headers: e.downloads_headers,
                      rows: e.downloads_rows,
                      emptytext: e.text_downloads_empty,
                      tooltip: e.text_download_links_tooltip,
                      "mobile-width": 1330,
                    },
                  },
                  [
                    e.gaLinks("downloadlinks")
                      ? r("a", {
                          staticClass: "monsterinsights-button",
                          attrs: {
                            slot: "button",
                            href: e.gaLinks("downloadlinks"),
                            target: "_blank",
                          },
                          domProps: {
                            textContent: e._s(e.text_download_links_button),
                          },
                          slot: "button",
                        })
                      : e._e(),
                  ]
                ),
          ],
          1
        );
      },
      lt = [];
    function pt(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function ut(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? pt(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : pt(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var dt = {
        name: "WidgetReportDownloadLinks",
        components: { ReportUpsellOverlay: Te["a"], ReportTableBox: Ce["a"] },
        data: function () {
          return {
            text_download_links_button: Object(n["a"])(
              "View All Download Links Report",
              "ga-premium"
            ),
            text_downloads: Object(n["a"])("Top Download Links", "ga-premium"),
            text_downloads_empty: Object(n["a"])(
              "No download link clicks detected for this time period.",
              "ga-premium"
            ),
            text_download_links_tooltip: Object(n["a"])(
              "This list shows the download links your visitors clicked the most.",
              "ga-premium"
            ),
            downloads_headers: [
              Object(n["a"])("Link Label", "ga-premium"),
              Object(n["a"])("Clicks", "ga-premium"),
            ],
          };
        },
        computed: ut(
          {},
          Object(a["b"])({
            publisher: "$_reports/publisher",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            licenseLevel: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            downloads_rows: function () {
              var e = this,
                t = [];
              return (
                this.publisher.downloadlinks &&
                  this.publisher.downloadlinks.forEach(function (r) {
                    var o = e.$formatNumber(r.clicks);
                    t.push([r.title, o]);
                  }),
                t
              );
            },
          }
        ),
        methods: {
          showUpsell: function () {
            var e = "basic" === this.licenseLevel;
            return e && this.$emit("upsellshown"), e;
          },
          gaLinks: function (e) {
            return (
              !(
                "undefined" === typeof this.publisher.galinks ||
                !this.publisher.galinks[e]
              ) && this.publisher.galinks[e]
            );
          },
        },
      },
      mt = dt,
      ht = Object(K["a"])(mt, ct, lt, !1, null, null, null),
      gt = ht.exports,
      bt = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-ecommerce-overview" },
          [
            e.showUpsell()
              ? r("report-upsell-overlay", { attrs: { report: "ecommerce" } })
              : r(
                  "div",
                  {
                    staticClass:
                      "monsterinsights-report-row monsterinsights-report-infobox-row",
                  },
                  [
                    r("report-infobox", {
                      attrs: {
                        title: e.text_conversion_rate,
                        value: e.infoboxConversionRateData.value,
                        change: e.infoboxConversionRateData.change,
                        color: e.infoboxConversionRateData.color,
                        direction: e.infoboxConversionRateData.direction,
                        days: e.infoboxRange,
                        tooltip: e.text_conversion_rate_tooltip,
                      },
                    }),
                    r("report-infobox", {
                      attrs: {
                        title: e.text_transactions,
                        value: e.$formatNumber(e.infoboxTransactionsData.value),
                        change: e.infoboxTransactionsData.change,
                        color: e.infoboxTransactionsData.color,
                        direction: e.infoboxTransactionsData.direction,
                        days: e.infoboxRange,
                        tooltip: e.text_transactions_tooltip,
                      },
                    }),
                    r("report-infobox", {
                      attrs: {
                        title: e.text_revenue,
                        value: e.$formatNumber(e.infoboxRevenueData.value),
                        change: e.infoboxRevenueData.change,
                        color: e.infoboxRevenueData.color,
                        direction: e.infoboxRevenueData.direction,
                        days: e.infoboxRange,
                        tooltip: e.text_revenue_tooltip,
                      },
                    }),
                    r("report-infobox", {
                      attrs: {
                        title: e.text_average_order_value,
                        value: e.$formatNumber(e.infoboxOrderValueData.value),
                        change: e.infoboxOrderValueData.change,
                        color: e.infoboxOrderValueData.color,
                        direction: e.infoboxOrderValueData.direction,
                        days: e.infoboxRange,
                        tooltip: e.text_average_order_value_tooltip,
                      },
                    }),
                  ],
                  1
                ),
          ],
          1
        );
      },
      ft = [];
    function vt(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function wt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? vt(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : vt(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var _t = {
        name: "WidgetReportEcommerceOverview",
        components: { ReportUpsellOverlay: Te["a"], ReportInfobox: F["a"] },
        data: function () {
          return {
            text_conversion_rate: Object(n["a"])(
              "Conversion Rate",
              "ga-premium"
            ),
            text_transactions: Object(n["a"])("Transactions", "ga-premium"),
            text_revenue: Object(n["a"])("Revenue", "ga-premium"),
            text_average_order_value: Object(n["a"])(
              "Avg. Order Value",
              "ga-premium"
            ),
            text_conversion_rate_tooltip: Object(n["a"])(
              "The percentage of website sessions resulting in a transaction.",
              "ga-premium"
            ),
            text_transactions_tooltip: Object(n["a"])(
              "The number of orders on your website.",
              "ga-premium"
            ),
            text_revenue_tooltip: Object(n["a"])(
              "The total of the orders placed.",
              "ga-premium"
            ),
            text_average_order_value_tooltip: Object(n["a"])(
              "The average amount of the orders placed on your website.",
              "ga-premium"
            ),
          };
        },
        computed: wt(
          {},
          Object(a["b"])({
            ecommerce: "$_reports/ecommerce",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            infoboxConversionRateData: function () {
              var e = this.infoboxData("conversionrate");
              return (
                e.value &&
                  ((e.value = this.$formatNumber(e.value)), (e.value += "%")),
                e
              );
            },
            infoboxTransactionsData: function () {
              return this.infoboxData("transactions");
            },
            infoboxRevenueData: function () {
              return this.infoboxData("revenue");
            },
            infoboxOrderValueData: function () {
              return this.infoboxData("ordervalue");
            },
            licenseLevel: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            infoboxRange: function () {
              return this.ecommerce.infobox && this.ecommerce.infobox.range
                ? this.ecommerce.infobox.range
                : 0;
            },
          }
        ),
        methods: {
          infoboxData: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = {};
            return (
              this.ecommerce.infobox &&
                this.ecommerce.infobox[e] &&
                ((r.change = this.ecommerce.infobox[e]["prev"]),
                (r.value = this.ecommerce.infobox[e]["value"].toString()),
                0 === this.ecommerce.infobox[e]["prev"]
                  ? (r.direction = "")
                  : this.ecommerce.infobox[e]["prev"] > 0
                  ? ((r.direction = "up"), (r.color = "green"))
                  : ((r.direction = "down"), (r.color = "red"))),
              t &&
                ("down" === r.direction
                  ? (r.color = "green")
                  : (r.color = "red")),
              r
            );
          },
          showUpsell: function () {
            var e =
              "plus" === this.licenseLevel || "basic" === this.licenseLevel;
            return e && this.$emit("upsellshown"), e;
          },
        },
      },
      Ot = _t,
      yt = Object(K["a"])(Ot, bt, ft, !1, null, null, null),
      jt = yt.exports,
      xt = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-flex monsterinsights-height100" },
          [
            r(
              "report-table-box",
              {
                attrs: {
                  title: e.text_top_products,
                  emptytext: e.text_empty_top_products,
                  headers: e.top_products_headers,
                  rows: e.topProductsrows,
                  tooltip: e.text_top_products_tooltip,
                  "mobile-width": 1330,
                },
              },
              [
                e.gaLinks("products")
                  ? r("a", {
                      staticClass: "monsterinsights-button",
                      attrs: {
                        slot: "button",
                        href: e.gaLinks("products"),
                        target: "_blank",
                      },
                      domProps: {
                        textContent: e._s(e.text_top_products_button),
                      },
                      slot: "button",
                    })
                  : e._e(),
              ]
            ),
            e.showUpsell()
              ? r("report-upsell-overlay", { attrs: { report: "ecommerce" } })
              : e._e(),
          ],
          1
        );
      },
      kt = [];
    function Pt(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function Dt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Pt(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Pt(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var $t = {
        name: "WidgetReportTopProducts",
        components: { ReportTableBox: Ce["a"], ReportUpsellOverlay: Te["a"] },
        data: function () {
          return {
            text_top_products: Object(n["a"])("Top Products", "ga-premium"),
            text_empty_top_products: Object(n["a"])(
              "No product sales tracked during this time period.",
              "ga-premium"
            ),
            text_top_products_tooltip: Object(n["a"])(
              "This list shows the top selling products on your website.",
              "ga-premium"
            ),
            text_top_products_button: Object(n["a"])(
              "View Full Top Products Report",
              "ga-premium"
            ),
            top_products_headers: [
              Object(n["a"])("Product Name", "ga-premium"),
              Object(n["a"])("Quantity", "ga-premium"),
              Object(n["a"])("% of Sales", "ga-premium"),
              Object(n["a"])("Total Revenue", "ga-premium"),
            ],
          };
        },
        computed: Dt(
          {},
          Object(a["b"])({
            ecommerce: "$_reports/ecommerce",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            licenseLevel: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            topProductsrows: function () {
              var e = this,
                t = [];
              return (
                this.ecommerce.products &&
                  this.ecommerce.products.forEach(function (r) {
                    var o = e.$formatNumber(r.quantity),
                      i = e.$formatNumber(r.percent),
                      s = e.$formatNumber(r.revenue);
                    (i += "%"), t.push([r.name, o, i, s]);
                  }),
                t
              );
            },
          }
        ),
        methods: {
          showUpsell: function () {
            var e =
              "plus" === this.licenseLevel || "basic" === this.licenseLevel;
            return e && this.$emit("upsellshown"), e;
          },
          gaLinks: function (e) {
            return (
              !(
                "undefined" === typeof this.ecommerce.galinks ||
                !this.ecommerce.galinks[e]
              ) && this.ecommerce.galinks[e]
            );
          },
        },
      },
      Rt = $t,
      Ct = Object(K["a"])(Rt, xt, kt, !1, null, null, null),
      Tt = Ct.exports,
      Et = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-flex monsterinsights-height100" },
          [
            e.showUpsell()
              ? r("report-upsell-overlay", { attrs: { report: "ecommerce" } })
              : r(
                  "report-table-box",
                  {
                    attrs: {
                      title: e.text_top_conversions,
                      emptytext: e.text_empty_top_conversions,
                      headers: e.top_conversions_headers,
                      rows: e.topConversionsrows,
                      tooltip: e.text_top_conversions_tooltip,
                      "mobile-width": 1330,
                    },
                  },
                  [
                    e.gaLinks("conversions")
                      ? r("a", {
                          staticClass: "monsterinsights-button",
                          attrs: {
                            slot: "button",
                            href: e.gaLinks("conversions"),
                            target: "_blank",
                          },
                          domProps: {
                            textContent: e._s(e.text_conversions_button),
                          },
                          slot: "button",
                        })
                      : e._e(),
                  ]
                ),
          ],
          1
        );
      },
      Lt = [];
    function St(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function Wt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? St(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : St(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var At = {
        name: "WidgetReportTopConversions",
        components: { ReportTableBox: Ce["a"], ReportUpsellOverlay: Te["a"] },
        data: function () {
          return {
            text_top_conversions: Object(n["a"])(
              "Top Conversion Sources",
              "ga-premium"
            ),
            text_empty_top_conversions: Object(n["a"])(
              "No conversion sources tracked during this time period.",
              "ga-premium"
            ),
            text_conversions_button: Object(n["a"])(
              "View Top Conversions Sources Report",
              "ga-premium"
            ),
            text_top_conversions_tooltip: Object(n["a"])(
              "This list shows the top referral websites in terms of product revenue.",
              "ga-premium"
            ),
            top_conversions_headers: [
              Object(n["a"])("Sources", "ga-premium"),
              Object(n["a"])("Visits", "ga-premium"),
              Object(n["a"])("% of Visits", "ga-premium"),
              Object(n["a"])("Revenue", "ga-premium"),
            ],
          };
        },
        computed: Wt(
          {},
          Object(a["b"])({
            ecommerce: "$_reports/ecommerce",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            licenseLevel: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            topConversionsrows: function () {
              var e = this,
                t = [];
              return (
                this.ecommerce.conversions &&
                  this.ecommerce.conversions.forEach(function (r) {
                    var o = e.$formatNumber(r.sessions),
                      i = e.$formatNumber(r.percent),
                      s = e.$formatNumber(r.revenue);
                    (i += "%"),
                      t.push([
                        '<img class="monsterinsights-reports-referral-icon"  src="https://www.google.com/s2/favicons?domain=' +
                          r.url +
                          '" /> ' +
                          r.url,
                        o,
                        i,
                        s,
                      ]);
                  }),
                t
              );
            },
          }
        ),
        methods: {
          showUpsell: function () {
            var e =
              "plus" === this.licenseLevel || "basic" === this.licenseLevel;
            return e && this.$emit("upsellshown"), e;
          },
          gaLinks: function (e) {
            return (
              !(
                "undefined" === typeof this.ecommerce.galinks ||
                !this.ecommerce.galinks[e]
              ) && this.ecommerce.galinks[e]
            );
          },
        },
      },
      Ut = At,
      Nt = Object(K["a"])(Ut, Et, Lt, !1, null, null, null),
      Bt = Nt.exports,
      Ft = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-ecommerce-overview" },
          [
            r(
              "div",
              {
                staticClass:
                  "monsterinsights-report-row monsterinsights-report-infobox-row monsterinsights-report-2-columns",
              },
              [
                r("report-infobox", {
                  attrs: {
                    title: e.text_add_to_cart,
                    value: e.$formatNumber(e.infoboxAddToCartData.value),
                    change: e.infoboxAddToCartData.change,
                    color: e.infoboxAddToCartData.color,
                    direction: e.infoboxAddToCartData.direction,
                    days: e.infoboxRange,
                    tooltip: e.text_add_to_cart_tooltip,
                  },
                }),
                r("report-infobox", {
                  attrs: {
                    title: e.text_removed_from_cart,
                    value: e.$formatNumber(e.infoboxRemFromCartData.value),
                    change: e.infoboxRemFromCartData.change,
                    color: e.infoboxRemFromCartData.color,
                    direction: e.infoboxRemFromCartData.direction,
                    days: e.infoboxRange,
                    tooltip: e.text_removed_from_cart_tooltip,
                  },
                }),
              ],
              1
            ),
            e.showUpsell()
              ? r("report-upsell-overlay", { attrs: { report: "ecommerce" } })
              : e._e(),
          ],
          1
        );
      },
      It = [];
    function Mt(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function Vt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Mt(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Mt(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var Yt = {
        name: "WidgetReportAddRemove",
        components: { ReportUpsellOverlay: Te["a"], ReportInfobox: F["a"] },
        data: function () {
          return {
            text_add_to_cart: Object(n["a"])(
              "Total Add to Carts",
              "ga-premium"
            ),
            text_removed_from_cart: Object(n["a"])(
              "Total Removed from Cart",
              "ga-premium"
            ),
            text_add_to_cart_tooltip: Object(n["a"])(
              "The number of times products on your site were added to the cart.",
              "ga-premium"
            ),
            text_removed_from_cart_tooltip: Object(n["a"])(
              "The number of times products on your site were removed from the cart.",
              "ga-premium"
            ),
          };
        },
        computed: Vt(
          {},
          Object(a["b"])({
            ecommerce: "$_reports/ecommerce",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            infoboxAddToCartData: function () {
              return this.infoboxData("addtocart");
            },
            infoboxRemFromCartData: function () {
              return this.infoboxData("remfromcart");
            },
            infoboxRange: function () {
              return this.ecommerce.infobox && this.ecommerce.infobox.range
                ? this.ecommerce.infobox.range
                : 0;
            },
            licenseLevel: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
          }
        ),
        methods: {
          infoboxData: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = {};
            return (
              this.ecommerce.infobox &&
                this.ecommerce.infobox[e] &&
                ((r.change = this.ecommerce.infobox[e]["prev"]),
                (r.value = this.ecommerce.infobox[e]["value"].toString()),
                0 === this.ecommerce.infobox[e]["prev"]
                  ? (r.direction = "")
                  : this.ecommerce.infobox[e]["prev"] > 0
                  ? ((r.direction = "up"), (r.color = "green"))
                  : ((r.direction = "down"), (r.color = "red"))),
              t &&
                ("down" === r.direction
                  ? (r.color = "green")
                  : (r.color = "red")),
              r
            );
          },
          showUpsell: function () {
            var e =
              "plus" === this.licenseLevel || "basic" === this.licenseLevel;
            return e && this.$emit("upsellshown"), e;
          },
        },
      },
      Ht = Yt,
      zt = Object(K["a"])(Ht, Ft, It, !1, null, null, null),
      Kt = zt.exports,
      Gt = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-flex monsterinsights-height100" },
          [
            e.showUpsell()
              ? r("report-upsell-overlay", { attrs: { report: "ecommerce" } })
              : r(
                  "report-table-box",
                  {
                    attrs: {
                      title: e.text_time_to_purchase,
                      emptytext: e.text_empty_generic,
                      headers: e.time_to_purchase_headers,
                      rows: e.timeToPurchaseRows,
                      tooltip: e.text_time_to_purchase_tooltip,
                      "mobile-width": 1330,
                    },
                  },
                  [
                    e.gaLinks("days")
                      ? r("a", {
                          staticClass: "monsterinsights-button",
                          attrs: {
                            slot: "button",
                            href: e.gaLinks("days"),
                            target: "_blank",
                          },
                          domProps: { textContent: e._s(e.text_days_button) },
                          slot: "button",
                        })
                      : e._e(),
                  ]
                ),
          ],
          1
        );
      },
      qt = [];
    function Qt(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function Jt(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Qt(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Qt(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var Xt = {
        name: "WidgetReportDays",
        components: { ReportTableBox: Ce["a"], ReportUpsellOverlay: Te["a"] },
        data: function () {
          return {
            text_time_to_purchase: Object(n["a"])(
              "Time to Purchase",
              "ga-premium"
            ),
            text_top_products: Object(n["a"])("Top Products", "ga-premium"),
            text_empty_generic: Object(n["a"])(
              "No data for this time period.",
              "ga-premium"
            ),
            text_days_button: Object(n["a"])(
              "View Time to Purchase Report",
              "ga-premium"
            ),
            text_time_to_purchase_tooltip: Object(n["a"])(
              "This list shows how many days from first visit it took users to purchase products from your site.",
              "ga-premium"
            ),
            time_to_purchase_headers: [
              Object(n["a"])("Days", "ga-premium"),
              Object(n["a"])("Transactions", "ga-premium"),
              Object(n["a"])("% of Total", "ga-premium"),
            ],
          };
        },
        computed: Jt(
          {},
          Object(a["b"])({
            ecommerce: "$_reports/ecommerce",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            licenseLevel: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            timeToPurchaseRows: function () {
              var e = [];
              if (this.ecommerce.days)
                for (var t in this.ecommerce.days)
                  if (this.ecommerce.days.hasOwnProperty(t)) {
                    var r = this.ecommerce.days[t],
                      o = this.$formatNumber(r.percent),
                      i = this.$formatNumber(r.transactions);
                    (o += "%"), e.push(["&nbsp;", i, o]);
                  }
              return e;
            },
          }
        ),
        methods: {
          showUpsell: function () {
            var e =
              "plus" === this.licenseLevel || "basic" === this.licenseLevel;
            return e && this.$emit("upsellshown"), e;
          },
          gaLinks: function (e) {
            return (
              !(
                "undefined" === typeof this.ecommerce.galinks ||
                !this.ecommerce.galinks[e]
              ) && this.ecommerce.galinks[e]
            );
          },
        },
      },
      Zt = Xt,
      er = Object(K["a"])(Zt, Gt, qt, !1, null, null, null),
      tr = er.exports,
      rr = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-flex monsterinsights-height100" },
          [
            e.showUpsell()
              ? r("report-upsell-overlay", { attrs: { report: "ecommerce" } })
              : r(
                  "report-table-box",
                  {
                    attrs: {
                      title: e.text_sessions_to_purchase,
                      emptytext: e.text_empty_generic,
                      headers: e.sessions_to_purchase_headers,
                      rows: e.sessionsToPurchaseRows,
                      tooltip: e.text_sessions_to_purchase_tooltip,
                      "mobile-width": 1330,
                    },
                  },
                  [
                    e.gaLinks("sessions")
                      ? r("a", {
                          staticClass: "monsterinsights-button",
                          attrs: {
                            slot: "button",
                            href: e.gaLinks("sessions"),
                            target: "_blank",
                          },
                          domProps: {
                            textContent: e._s(e.text_sessions_button),
                          },
                          slot: "button",
                        })
                      : e._e(),
                  ]
                ),
          ],
          1
        );
      },
      or = [];
    function ir(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function sr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ir(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : ir(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var nr = {
        name: "WidgetReportDays",
        components: { ReportTableBox: Ce["a"], ReportUpsellOverlay: Te["a"] },
        data: function () {
          return {
            text_sessions_to_purchase: Object(n["a"])(
              "Sessions to Purchase",
              "ga-premium"
            ),
            text_empty_generic: Object(n["a"])(
              "No data for this time period.",
              "ga-premium"
            ),
            text_sessions_button: Object(n["a"])(
              "View Session to Purchase Report",
              "ga-premium"
            ),
            text_sessions_to_purchase_tooltip: Object(n["a"])(
              "This list shows the number of sessions it took users before they purchased a product from your website.",
              "ga-premium"
            ),
            sessions_to_purchase_headers: [
              Object(n["a"])("Sessions", "ga-premium"),
              Object(n["a"])("Transactions", "ga-premium"),
              Object(n["a"])("% of Total", "ga-premium"),
            ],
          };
        },
        computed: sr(
          {},
          Object(a["b"])({
            ecommerce: "$_reports/ecommerce",
            license: "$_license/license",
            license_network: "$_license/license_network",
          }),
          {
            licenseLevel: function () {
              return this.$mi.network
                ? this.license_network.type
                : this.license.type;
            },
            sessionsToPurchaseRows: function () {
              var e = [];
              if (this.ecommerce.sessions)
                for (var t in this.ecommerce.sessions)
                  if (this.ecommerce.sessions.hasOwnProperty(t)) {
                    var r = this.ecommerce.sessions[t],
                      o = this.$formatNumber(r.percent),
                      i = this.$formatNumber(r.transactions);
                    (o += "%"), e.push(["&nbsp;", i, o]);
                  }
              return e;
            },
          }
        ),
        methods: {
          showUpsell: function () {
            var e =
              "plus" === this.licenseLevel || "basic" === this.licenseLevel;
            return e && this.$emit("upsellshown"), e;
          },
          gaLinks: function (e) {
            return (
              !(
                "undefined" === typeof this.ecommerce.galinks ||
                !this.ecommerce.galinks[e]
              ) && this.ecommerce.galinks[e]
            );
          },
        },
      },
      ar = nr,
      cr = Object(K["a"])(ar, rr, or, !1, null, null, null),
      lr = cr.exports,
      pr = r("93ec"),
      ur = r("d3fc");
    function dr(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function mr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? dr(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : dr(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var hr = !1,
      gr = !1,
      br = !1,
      fr = {
        name: "WidgetAccordion",
        components: {
          WidgetReportError: ur["a"],
          SettingsInfoTooltip: pr["a"],
          WidgetReportOverview: te,
          WidgetReportTopPosts: pe,
          WidgetReportNewVsReturning: we,
          WidgetReportDevices: De,
          WidgetReportLandingPages: Ue,
          WidgetReportExitPages: He,
          WidgetReportOutboundLinks: Ze,
          WidgetReportAffiliateLinks: at,
          WidgetReportDownloadLinks: gt,
          WidgetReportEcommerceOverview: jt,
          WidgetReportTopConversions: Bt,
          WidgetReportTopProducts: Tt,
          WidgetReportAddRemove: Kt,
          WidgetReportDays: tr,
          WidgetReportSessions: lr,
        },
        props: { mobileWidth: { default: 782, type: Number } },
        data: function () {
          return {
            activeReport: "overview",
            reportsWithUpsell: {},
            isMobile: !1,
          };
        },
        created: function () {
          if (this.$mi.widget_state && this.$mi.widget_state.interval) {
            var e = this.$mi_intervals();
            "undefined" === typeof e[this.$mi.widget_state.interval] &&
              (this.$mi.widget_state.interval = "last30days");
            var t = e[this.$mi.widget_state.interval].start,
              r = e[this.$mi.widget_state.interval].end;
            this.$store.commit(
              "$_reports/UPDATE_INTERVAL",
              this.$mi.widget_state.interval
            ),
              this.$store.commit("$_reports/UPDATE_DATE", {
                start: t.format("YYYY-MM-DD"),
                end: r.format("YYYY-MM-DD"),
              });
          }
        },
        computed: mr(
          {},
          Object(a["b"])({
            widget_reports: "$_widget/reports",
            widget_width: "$_widget/width",
            loaded: "$_widget/loaded",
            error: "$_widget/error",
            publisher: "$_reports/publisher",
            ecommerce: "$_reports/ecommerce",
            overview: "$_reports/overview",
          }),
          {
            widgetFullWidth: function () {
              return "regular" !== this.widget_width;
            },
            widgetReports: function () {
              var e = {},
                t = {};
              for (var r in ((hr = !1), this.widget_reports))
                if (
                  this.widget_reports.hasOwnProperty(r) &&
                  this.widget_reports[r].enabled
                ) {
                  if (this.widgetFullWidth) {
                    if ("undefined" !== typeof this.reportsWithUpsell[r]) {
                      if (!1 !== hr) continue;
                      hr = !0;
                    }
                    if (this.error[this.widget_reports[r]["type"]]) {
                      var o = this.widget_reports[r]["type"];
                      if (((t[o] = t[o] ? t[o] + 1 : 1), t[o] > 1)) continue;
                    }
                  }
                  e[r] = this.widget_reports[r];
                }
              return e;
            },
          }
        ),
        methods: {
          maybeHideUpsell: function (e) {
            this.$set(this.reportsWithUpsell, e, 1),
              this.widgetFullWidth && !br && ((br = !0), this.$forceUpdate());
          },
          toggle: function (e, t) {
            var r = this.widget_reports[t].type,
              o = this;
            o.$store.commit("$_widget/UPDATE_LOADED", !1),
              o.$store.commit("$_widget/SET_ERROR", { report: r }),
              this.$store
                .dispatch("$_reports/getReportData", r)
                .then(function () {
                  o.$store.commit("$_widget/UPDATE_LOADED", !0);
                }),
              this.$store.commit("$_reports/UPDATE_ACTIVE_REPORT", r),
              (this.activeReport = t === this.activeReport ? "" : t),
              "" !== this.activeReport && this.scrollIntoView(e.target);
          },
          toggleClass: function (e) {
            var t = "monsterinsights-widget-toggle";
            return (
              this.activeReport === e &&
                (t += " monsterinsights-widget-toggle-active"),
              t
            );
          },
          showReport: function (e, t) {
            return (
              !(!this.widgetFullWidth || !t.enabled || this.isMobile) ||
              this.activeReport === e
            );
          },
          reportClass: function (e, t) {
            var r =
              "monsterinsights-widget-report-element monsterinsights-widget-report-" +
              e;
            return (
              "undefined" !== typeof this.error[t.type] &&
                (r += " monsterinsights-widget-report-error-" + t.type),
              r
            );
          },
          scrollIntoView: function (e) {
            this.$nextTick(function () {
              var t = e.getBoundingClientRect();
              window.scrollTo({
                top: t.top - 50 + pageYOffset,
                left: 0,
                behavior: "smooth",
              });
            });
          },
          showReportTitle: function (e) {
            return !!this.widgetFullWidth || e;
          },
          handleResize: function () {
            gr ||
              ((gr = !0),
              window.requestAnimationFrame
                ? window.requestAnimationFrame(this.resizeCallback)
                : setTimeout(this.resizeCallback, 66));
          },
          resizeCallback: function () {
            (this.isMobile = window.innerWidth < this.mobileWidth), (gr = !1);
          },
        },
        mounted: function () {
          var e = this;
          this.$store
            .dispatch("$_reports/getReportData", "overview")
            .then(function () {
              e.$store.commit("$_widget/UPDATE_LOADED", !0), e.$forceUpdate();
            }),
            window.addEventListener("resize", this.handleResize),
            this.handleResize();
        },
        beforeDestroy: function () {
          window.removeEventListener("resize", this.handleResize);
        },
      },
      vr = fr,
      wr = Object(K["a"])(vr, W, A, !1, null, null, null),
      _r = wr.exports,
      Or = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-widget-settings" },
          [
            r("widget-settings-interval"),
            r("widget-settings-width", { ref: "width" }),
            r("widget-settings-reports"),
            r("br"),
            r("widget-full-report-button"),
          ],
          1
        );
      },
      yr = [],
      jr = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div", { staticClass: "monsterinsights-widget-dropdown" }, [
          r(
            "button",
            {
              staticClass: "monsterinsights-widget-cog",
              attrs: { type: "button" },
              on: {
                click: function (t) {
                  return t.stopPropagation(), e.toggleDropdown(t);
                },
              },
            },
            [r("i", { staticClass: "monstericon-cog" })]
          ),
          e.dropdownVisible
            ? r(
                "div",
                {
                  directives: [
                    {
                      name: "click-outside",
                      rawName: "v-click-outside",
                      value: e.hideDropdown,
                      expression: "hideDropdown",
                    },
                  ],
                  staticClass: "monsterinsights-widget-dropdown-content",
                },
                [
                  r("widget-settings-compact"),
                  r("span", {
                    domProps: { textContent: e._s(e.text_settings_overview) },
                  }),
                  e._l(e.getReportSettings("overview"), function (t, o) {
                    return r(
                      "div",
                      {
                        key: o,
                        staticClass: "monsterinsights-widget-setting ",
                      },
                      [
                        r(
                          "label",
                          {
                            class: t.enabled ? "monsterinsights-checked" : "",
                            attrs: { tabindex: "0" },
                            on: {
                              click: function (t) {
                                return t.preventDefault(), e.toggleReport(t, o);
                              },
                              keyup: [
                                function (t) {
                                  return !t.type.indexOf("key") &&
                                    e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                    ? null
                                    : e.toggleReport(t, o);
                                },
                                function (t) {
                                  return !t.type.indexOf("key") &&
                                    e._k(t.keyCode, "space", 32, t.key, [
                                      " ",
                                      "Spacebar",
                                    ])
                                    ? null
                                    : e.toggleReport(t, o);
                                },
                              ],
                            },
                          },
                          [
                            r("input", {
                              attrs: { type: "checkbox" },
                              domProps: { checked: t.enabled },
                            }),
                            e._v(" " + e._s(t.name) + " "),
                          ]
                        ),
                      ]
                    );
                  }),
                  r("span", {
                    domProps: { textContent: e._s(e.text_settings_publisher) },
                  }),
                  e._l(e.getReportSettings("publisher"), function (t, o) {
                    return r(
                      "div",
                      {
                        key: o,
                        staticClass: "monsterinsights-widget-setting ",
                      },
                      [
                        r(
                          "label",
                          {
                            class: t.enabled ? "monsterinsights-checked" : "",
                            attrs: { tabindex: "0" },
                            on: {
                              click: function (t) {
                                return t.preventDefault(), e.toggleReport(t, o);
                              },
                              keyup: [
                                function (t) {
                                  return !t.type.indexOf("key") &&
                                    e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                    ? null
                                    : e.toggleReport(t, o);
                                },
                                function (t) {
                                  return !t.type.indexOf("key") &&
                                    e._k(t.keyCode, "space", 32, t.key, [
                                      " ",
                                      "Spacebar",
                                    ])
                                    ? null
                                    : e.toggleReport(t, o);
                                },
                              ],
                            },
                          },
                          [
                            r("input", {
                              attrs: { type: "checkbox" },
                              domProps: { checked: t.enabled },
                            }),
                            e._v(" " + e._s(t.name) + " "),
                          ]
                        ),
                      ]
                    );
                  }),
                  r("span", {
                    domProps: { textContent: e._s(e.text_settings_ecommerce) },
                  }),
                  e._l(e.getReportSettings("ecommerce"), function (t, o) {
                    return r(
                      "div",
                      {
                        key: o,
                        staticClass: "monsterinsights-widget-setting ",
                      },
                      [
                        r(
                          "label",
                          {
                            class: t.enabled ? "monsterinsights-checked" : "",
                            attrs: { tabindex: "0" },
                            on: {
                              click: function (t) {
                                return t.preventDefault(), e.toggleReport(t, o);
                              },
                              keyup: [
                                function (t) {
                                  return !t.type.indexOf("key") &&
                                    e._k(t.keyCode, "enter", 13, t.key, "Enter")
                                    ? null
                                    : e.toggleReport(t, o);
                                },
                                function (t) {
                                  return !t.type.indexOf("key") &&
                                    e._k(t.keyCode, "space", 32, t.key, [
                                      " ",
                                      "Spacebar",
                                    ])
                                    ? null
                                    : e.toggleReport(t, o);
                                },
                              ],
                            },
                          },
                          [
                            r("input", {
                              attrs: { type: "checkbox" },
                              domProps: { checked: t.enabled },
                            }),
                            e._v(" " + e._s(t.name) + " "),
                          ]
                        ),
                      ]
                    );
                  }),
                  r("widget-settings-hide"),
                ],
                2
              )
            : e._e(),
        ]);
      },
      xr = [],
      kr = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("button", {
          staticClass: "monsterinsights-hide-button",
          domProps: { textContent: e._s(e.text_hide_widget) },
          on: {
            click: function (t) {
              return t.preventDefault(), e.hideWidget(t);
            },
          },
        });
      },
      Pr = [];
    function Dr(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function $r(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Dr(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Dr(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var Rr = {
        name: "WidgetSettingsHide",
        data: function () {
          return {
            text_hide_widget: Object(n["a"])(
              "Hide dashboard widget",
              "ga-premium"
            ),
          };
        },
        computed: $r({}, Object(a["b"])({ widget_width: "$_widget/width" }), {
          fullWidth: function () {
            return "regular" !== this.widget_width;
          },
        }),
        methods: {
          hideWidget: function () {
            var e = this;
            this.$swal({
              type: "info",
              customContainerClass: "monsterinsights-swal",
              title: Object(n["a"])(
                "Are you sure you want to hide the MonsterInsights Dashboard Widget? ",
                "ga-premium"
              ),
              showCancelButton: !0,
              confirmButtonText: Object(n["a"])("Yes, hide it!", "ga-premium"),
              cancelButtonText: Object(n["a"])("No, cancel!", "ga-premium"),
              reverseButtons: !0,
            }).then(function (t) {
              if (t.value) {
                e.$swal({
                  type: "success",
                  title: Object(n["a"])(
                    "MonsterInsights Widget Hidden",
                    "ga-premium"
                  ),
                  html: Object(n["a"])(
                    'You can re-enable the MonsterInsights widget at any time using the "Screen Options" menu on the top right of this page',
                    "ga-premium"
                  ),
                });
                var r = document.getElementById(
                  "monsterinsights_reports_widget-hide"
                );
                r && r.click();
              }
            });
          },
        },
      },
      Cr = Rr,
      Tr = Object(K["a"])(Cr, kr, Pr, !1, null, null, null),
      Er = Tr.exports,
      Lr = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("div");
      },
      Sr = [],
      Wr = { name: "WidgetSettingsCompact" },
      Ar = Wr,
      Ur = Object(K["a"])(Ar, Lr, Sr, !1, null, null, null),
      Nr = Ur.exports;
    function Br(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function Fr(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Br(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Br(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    l["a"].directive("click-outside", {
      bind: function (e, t, r) {
        (e.clickOutsideEvent = function (o) {
          e === o.target || e.contains(o.target) || r.context[t.expression](o);
        }),
          document.body.addEventListener("click", e.clickOutsideEvent);
      },
      unbind: function (e) {
        document.body.removeEventListener("click", e.clickOutsideEvent);
      },
    });
    var Ir = {
        name: "WidgetSettingsReports",
        components: { WidgetSettingsCompact: Nr, WidgetSettingsHide: Er },
        data: function () {
          return {
            dropdownVisible: !1,
            text_settings_overview: Object(n["a"])(
              "Show Overview Reports",
              "ga-premium"
            ),
            text_settings_publisher: Object(n["a"])(
              "Show Publishers Reports",
              "ga-premium"
            ),
            text_settings_ecommerce: Object(n["a"])(
              "Show eCommerce Reports",
              "ga-premium"
            ),
          };
        },
        computed: Fr(
          {},
          Object(a["b"])({
            widget_reports: "$_widget/reports",
            widget_width: "$_widget/width",
          }),
          {
            reportSettings: function () {
              var e = {};
              for (var t in this.widget_reports)
                this.widget_reports.hasOwnProperty(t) &&
                  "overview" !== t &&
                  (e[t] = this.widget_reports[t]);
              return e;
            },
            fullWidth: function () {
              return "regular" !== this.widget_width;
            },
          }
        ),
        methods: {
          toggleReport: function (e, t) {
            this.widget_reports[t].enabled
              ? this.$store.commit("$_widget/DISABLE_REPORT", t)
              : (this.$store.commit("$_widget/ENABLE_REPORT", t),
                this.fullWidth && this.getReportData(t)),
              this.saveState();
          },
          getReportSettings: function (e) {
            var t = {};
            for (var r in this.reportSettings)
              this.reportSettings.hasOwnProperty(r) &&
                "overview" !== r &&
                e === this.reportSettings[r].type &&
                (t[r] = this.reportSettings[r]);
            return t;
          },
          toggleDropdown: function () {
            this.dropdownVisible = !this.dropdownVisible;
          },
          hideDropdown: function () {
            this.dropdownVisible = !1;
          },
          saveState: function () {
            this.$store.dispatch("$_widget/saveWidgetState");
          },
          getReportData: function (e) {
            var t = this;
            t.$store.commit("$_widget/UPDATE_LOADED", !1),
              this.$store
                .dispatch(
                  "$_reports/getReportData",
                  this.widget_reports[e].type
                )
                .then(function () {
                  t.$store.commit("$_widget/UPDATE_LOADED", !0);
                });
          },
        },
      },
      Mr = Ir,
      Vr = Object(K["a"])(Mr, jr, xr, !1, null, null, null),
      Yr = Vr.exports,
      Hr = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          { staticClass: "monsterinsights-widget-datepicker" },
          [
            r("reports-date-picker", {
              on: {
                "date-changed": e.showLoader,
                "reports-updated": e.hideLoader,
              },
            }),
          ],
          1
        );
      },
      zr = [],
      Kr = r("0b20"),
      Gr = {
        name: "WidgetSettingsInterval",
        components: { ReportsDatePicker: Kr["a"] },
        data: function () {
          return { text_realtime: Object(n["a"])("Real-Time", "ga-premium") };
        },
        computed: {
          realtimeUrl: function () {
            return this.$mi.reports_url + "#/real-time";
          },
        },
        methods: {
          showLoader: function (e) {
            this.$store.commit("$_reports/UPDATE_INTERVAL", e),
              this.saveState(),
              this.$store.commit("$_widget/UPDATE_LOADED", !1);
          },
          hideLoader: function () {
            this.$store.commit("$_widget/UPDATE_LOADED", !0);
          },
          saveState: function () {
            this.$store.dispatch("$_widget/saveWidgetState");
          },
        },
      },
      qr = Gr,
      Qr = Object(K["a"])(qr, Hr, zr, !1, null, null, null),
      Jr = Qr.exports,
      Xr = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "button",
          {
            directives: [
              {
                name: "tooltip",
                rawName: "v-tooltip",
                value: e.tooltip_data,
                expression: "tooltip_data",
              },
            ],
            staticClass: "monsterinsights-width-button",
            on: { click: e.toggleFullWidth },
          },
          [
            e.fullWidth
              ? r("i", { staticClass: "monstericon-compress" })
              : r("i", { staticClass: "monstericon-expand" }),
          ]
        );
      },
      Zr = [];
    function eo(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function to(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? eo(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : eo(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var ro = {
        name: "WidgetSettingsWidth",
        data: function () {
          return {
            normal_sortables: "",
            widget_element: "",
            welcome_panel: "",
          };
        },
        computed: to(
          {},
          Object(a["b"])({
            widget_width: "$_widget/width",
            widget_reports: "$_widget/reports",
          }),
          {
            fullWidth: {
              set: function (e) {
                var t = "regular";
                e && (t = "full"),
                  this.$store.commit("$_widget/UPDATE_WIDTH", t),
                  this.saveState();
              },
              get: function () {
                return "regular" !== this.widget_width;
              },
            },
            tooltip_data: function () {
              return {
                content: this.fullWidth
                  ? Object(n["a"])("Show in widget mode", "ga-premium")
                  : Object(n["a"])("Show in full-width mode", "ga-premium"),
                autoHide: !1,
                trigger: "hover focus click",
              };
            },
          }
        ),
        methods: {
          toggleFullWidth: function (e) {
            if (
              (!0 !== e && (this.fullWidth = !this.fullWidth), this.fullWidth)
            )
              this.widget_element.classList.add(
                "monsterinsights-widget-full-width"
              ),
                this.widget_element.classList.remove(
                  "monsterinsights-widget-regular-width"
                ),
                this.welcome_panel.parentNode.insertBefore(
                  this.widget_element,
                  this.welcome_panel
                ),
                this.getActiveReportsData();
            else {
              if (
                (this.widget_element.classList.add(
                  "monsterinsights-widget-regular-width"
                ),
                !0 === e)
              )
                return;
              this.widget_element.classList.remove(
                "monsterinsights-widget-full-width"
              ),
                this.normal_sortables.insertBefore(
                  this.widget_element,
                  this.normal_sortables.firstChild
                ),
                this.normal_sortables.classList.remove("empty-container");
            }
          },
          getActiveReportsData: function () {
            var e = this,
              t = {};
            for (var r in this.widget_reports)
              this.widget_reports.hasOwnProperty(r) &&
                this.widget_reports[r].enabled &&
                (t[this.widget_reports[r].type] = 1);
            var o = Object.keys(t).length,
              i = 0;
            for (var s in t)
              t.hasOwnProperty(s) &&
                (i++,
                e.$store.commit("$_widget/UPDATE_LOADED", !1),
                this.$store
                  .dispatch("$_reports/getReportData", s)
                  .then(function () {
                    i === o && e.$store.commit("$_widget/UPDATE_LOADED", !0);
                  }));
          },
          saveState: function () {
            this.$store.dispatch("$_widget/saveWidgetState");
          },
        },
        mounted: function () {
          (this.widget_element = document.getElementById(
            "monsterinsights_reports_widget"
          )),
            (this.normal_sortables = document.getElementById(
              "normal-sortables"
            )),
            (this.welcome_panel = document.getElementById(
              "dashboard-widgets-wrap"
            ));
        },
      },
      oo = ro,
      io = Object(K["a"])(oo, Xr, Zr, !1, null, null, null),
      so = io.exports,
      no = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r("a", {
          staticClass:
            "monsterinsights-button monsterinsights-button-full-report",
          attrs: { href: e.getFullReportLink },
          domProps: { textContent: e._s(e.text_see_report) },
        });
      },
      ao = [];
    function co(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function lo(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? co(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : co(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var po = {
        name: "WidgetFullReportButton",
        props: { see_report: String },
        data: function () {
          return {
            default_see_report: Object(n["a"])("See Full Report", "ga-premium"),
          };
        },
        computed: lo(
          {},
          Object(a["b"])({ activeReport: "$_reports/activeReport" }),
          {
            getFullReportLink: function () {
              var e = this.activeReport;
              return (
                "publisher" === e && (e += "s"), this.$mi.reports_url + "#/" + e
              );
            },
            text_see_report: function () {
              return this.see_report
                ? this.see_report
                : this.default_see_report;
            },
          }
        ),
      },
      uo = po,
      mo = Object(K["a"])(uo, no, ao, !1, null, null, null),
      ho = mo.exports,
      go = {
        name: "WidgetSettings",
        components: {
          WidgetFullReportButton: ho,
          WidgetSettingsWidth: so,
          WidgetSettingsInterval: Jr,
          WidgetSettingsReports: Yr,
        },
        methods: {
          toggleFullWidth: function () {
            this.$refs.width.toggleFullWidth(!0);
          },
        },
      },
      bo = go,
      fo = Object(K["a"])(bo, Or, yr, !1, null, null, null),
      vo = fo.exports,
      wo = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return e.wpforms_enabled
          ? e._e()
          : r("div", { staticClass: "monsterinsights-widget-footer" }, [
              r("span", {
                domProps: { innerHTML: e._s(e.text_recommended_plugin) },
              }),
              r("span", [e._v(" - ")]),
              r("a", {
                attrs: { href: e.wpforms_install },
                domProps: { textContent: e._s(e.text_action) },
              }),
              r("a", {
                attrs: { href: "https://wpforms.com/", target: "_blank" },
                domProps: { textContent: e._s(e.text_learn_more) },
              }),
            ]);
      },
      _o = [],
      Oo = {
        name: "WidgetFooter",
        data: function () {
          return {
            wpforms_enabled: this.$mi.wpforms_enabled,
            wpforms_install: this.$mi.wpforms_url,
            text_recommended_plugin: Object(n["d"])(
              Object(n["a"])("Recommended Plugin: %s", "ga-premium"),
              '<span class="monsterinsights-dark">WPForms</span>'
            ),
            text_install: Object(n["a"])("Install", "ga-premium"),
            text_activate: Object(n["a"])("Activate", "ga-premium"),
            text_learn_more: Object(n["a"])("Learn More", "ga-premium"),
          };
        },
        computed: {
          text_action: function () {
            return this.$mi.wpforms_installed
              ? this.text_activate
              : this.text_install;
          },
        },
      },
      yo = Oo,
      jo = Object(K["a"])(yo, wo, _o, !1, null, null, null),
      xo = jo.exports,
      ko = r("8c1c");
    function Po(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function Do(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Po(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Po(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var $o = {
        name: "ModuleDashboardWidget",
        components: {
          ReportReAuth: ko["a"],
          WidgetFooter: xo,
          WidgetSettings: vo,
          WidgetAccordion: _r,
        },
        data: function () {
          return {
            text_overview_report: Object(n["a"])(
              "Overview Report",
              "ga-premium"
            ),
          };
        },
        computed: Do(
          {},
          Object(a["b"])({
            blocked: "$_app/blocked",
            blur: "$_reports/blur",
            widget_width: "$_widget/width",
            compact: "$_widget/compact",
            reauth: "$_reports/reauth",
          }),
          {
            route: function () {
              return this.$route.name;
            },
            mainClass: function () {
              var e = "monsterinsights-dashboard-widget-page";
              return (
                this.blur && (e += " monsterinsights-blur"),
                this.compact &&
                  (e += " monsterinsights-dashboard-widget-compact"),
                e
              );
            },
            fullWidth: function () {
              return "regular" !== this.widget_width;
            },
          }
        ),
        created: function () {
          var e = "$_reports";
          e in this.$store._modules.root._children ||
            this.$store.registerModule(e, c["a"]);
          var t = "$_widget";
          t in this.$store._modules.root._children ||
            this.$store.registerModule(t, S);
        },
        mounted: function () {
          var e = this;
          this.$store.dispatch("$_widget/processDefaults").then(function () {
            e.$nextTick(function () {
              e.$refs.settings.toggleFullWidth(!0);
            });
          });
        },
      },
      Ro = $o,
      Co = Object(K["a"])(Ro, o, i, !1, null, null, null),
      To = Co.exports,
      Eo = function () {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "transition",
          { attrs: { name: "monsterinsights-slide-up" } },
          [
            e.visitors && !e.hide
              ? r("div", { staticClass: "monsterinsights-tracking-notice" }, [
                  r(
                    "div",
                    { staticClass: "monsterinsights-tracking-notice-icon" },
                    [
                      r("div", {
                        staticClass:
                          "monsterinsights-bg-img monsterinsights-fullwidth-mascot",
                      }),
                    ]
                  ),
                  r(
                    "div",
                    { staticClass: "monsterinsights-tracking-notice-text" },
                    [
                      r("h3", { domProps: { textContent: e._s(e.title) } }),
                      r("p", [
                        r("span", { domProps: { innerHTML: e._s(e.content) } }),
                        e._v(" "),
                        r("a", {
                          attrs: { href: e.$mi.reports_url },
                          domProps: { textContent: e._s(e.text_link) },
                          on: { click: e.hideNotice },
                        }),
                      ]),
                    ]
                  ),
                  r(
                    "div",
                    {
                      staticClass: "monsterinsights-tracking-notice-close",
                      on: { click: e.hideNotice },
                    },
                    [e._v(" × ")]
                  ),
                ])
              : e._e(),
          ]
        );
      },
      Lo = [],
      So = r("d429"),
      Wo = r("c1df"),
      Ao = r.n(Wo);
    r("3b3a");
    function Uo(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t &&
          (o = o.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, o);
      }
      return r;
    }
    function No(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? Uo(Object(r), !0).forEach(function (t) {
              Object(s["a"])(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : Uo(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var Bo = {
        name: "WidgetReminder",
        data: function () {
          return {
            text_title: Object(n["a"])(
              "See how %s visitors found your site!",
              "ga-premium"
            ),
            text_content: Object(n["a"])(
              "Your website was visited by %s users in the last 30 days.",
              "ga-premium"
            ),
            text_link: Object(n["a"])(
              "See the full analytics report!",
              "ga-premium"
            ),
            visitors_number: "",
            hide: !1,
          };
        },
        computed: No(
          {},
          Object(a["b"])({
            overview: "$_reports/overview",
            date: "$_reports/date",
            widget_notice: "$_widget/notice30day",
          }),
          {
            loadNotice: function () {
              if ("undefined" === typeof this.$mi.widget_state.notice30day)
                return !1;
              if (!1 === this.$mi.widget_state.notice30day)
                return this.$store.dispatch("$_widget/markNoticeClosed"), !1;
              var e = Ao()(),
                t = Ao.a.unix(this.$mi.widget_state.notice30day);
              return e.diff(t, "days") >= 30;
            },
            visitors: {
              get: function () {
                return (
                  !!this.loadNotice &&
                  (this.visitors_number
                    ? this.visitors_number
                    : this.date.interval && 30 !== this.date.interval
                    ? this.get30daysReportData()
                    : this.overview.infobox
                    ? this.overview.infobox.sessions.value
                    : "")
                );
              },
              set: function (e) {
                this.visitors_number = e;
              },
            },
            title: function () {
              return Object(n["d"])(
                this.text_title,
                this.$formatNumber(this.visitors)
              );
            },
            content: function () {
              return Object(n["d"])(
                this.text_content,
                this.$formatNumber(this.visitors)
              );
            },
          }
        ),
        methods: {
          hideNotice: function () {
            this.$store.dispatch("$_widget/markNoticeClosed"), (this.hide = !0);
          },
          get30daysReportData: function () {
            var e = this,
              t = 30,
              r = Ao()().subtract(1, "day"),
              o = Ao()(r).subtract(t - 1, "day");
            So["a"]
              .fetchReportData(
                this.$store,
                "overview",
                o.format("YYYY-MM-DD"),
                r.format("YYYY-MM-DD")
              )
              .then(function (t) {
                t.data &&
                  t.data.infobox &&
                  (setTimeout(function () {
                    e.hide = !1;
                  }, 1500),
                  (e.visitors = t.data.infobox.sessions.value));
              });
          },
        },
      },
      Fo = Bo,
      Io = Object(K["a"])(Fo, Eo, Lo, !1, null, null, null),
      Mo = Io.exports,
      Vo = r("8c4f"),
      Yo = r("619c"),
      Ho = r("7460"),
      zo =
        (r("e25e"),
        {
          install: function (e) {
            var t = this;
            (e.prototype.$miOverviewTooltips = function (e) {
              if (!e.title) {
                var t = document.querySelectorAll(
                  ".monsterinsights-line-chart-tooltip"
                );
                return (
                  t.forEach(function (e) {
                    e.style.opacity = 0;
                  }),
                  !1
                );
              }
              var r = e.title[0],
                o = e.title[1],
                i = parseInt(e.title[2]),
                s = e.title[3],
                n = e.title[4] ? e.title[4] : e.title[2],
                a = document.getElementById(
                  "monsterinsights-chartjs-line-" + n + "-tooltip"
                );
              if (
                (null === a &&
                  ((a = document.createElement("div")),
                  document.body.appendChild(a),
                  a.setAttribute(
                    "id",
                    "monsterinsights-chartjs-line-" + n + "-tooltip"
                  ),
                  a.classList.add("monsterinsights-line-chart-tooltip")),
                e.opacity)
              ) {
                a.classList.remove("above"),
                  a.classList.remove("below"),
                  a.classList.remove("no-transform"),
                  e.yAlign
                    ? a.classList.add(e.yAlign)
                    : a.classList.add("no-transform");
                var c = "";
                i &&
                  (c +=
                    0 === i
                      ? "0%"
                      : i > 0
                      ? '<span class="monsterinsights-green"><span class="monsterinsights-arrow monsterinsights-up"></span>&nbsp;' +
                        i +
                        "%</span>"
                      : '<span class="monsterinsights-red"><span class="monsterinsights-arrow monsterinsights-down"></span>&nbsp;' +
                        Math.abs(i) +
                        "%</span>");
                var l =
                  '<div class="monsterinsights-reports-overview-datagraph-tooltip-container monsterinsights-reports-tooltip">';
                (l +=
                  '<div class="monsterinsights-reports-overview-datagraph-tooltip-number">' +
                  o +
                  "</div>"),
                  (l +=
                    '<div class="monsterinsights-reports-overview-datagraph-tooltip-trend">' +
                    c +
                    "</div>"),
                  s &&
                    (l +=
                      '<div class="monsterinsights-reports-overview-datagraph-tooltip-descriptor">' +
                      s +
                      "</div>"),
                  (l +=
                    '<div class="monsterinsights-reports-overview-datagraph-tooltip-title">' +
                    r +
                    "</div>"),
                  (l += "</div>"),
                  (a.innerHTML = l);
                var p = this._chart.canvas.getBoundingClientRect();
                (a.style.opacity = "1"),
                  (a.style.left = p.left + window.pageXOffset + e.x + "px"),
                  (a.style.top = p.top + window.pageYOffset + e.y + "px"),
                  (a.style.fontFamily =
                    "Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif;"),
                  (a.style.fontSize = e.fontSize),
                  (a.style.fontStyle = e._fontStyle),
                  (a.style.padding = e.yPadding + "px " + e.xPadding + "px"),
                  (a.style.zIndex = 99999),
                  (a.style.pointerEvents = "none");
              } else a.style.opacity = 0;
            }),
              (e.prototype.$miPieTooltips = function (e) {
                if (!e.title) {
                  var t = document.querySelectorAll(
                    ".monsterinsights-pie-chart-tooltip"
                  );
                  return (
                    t.forEach(function (e) {
                      e.style.opacity = 0;
                    }),
                    !1
                  );
                }
                var r = e.title[0],
                  o = e.title[1],
                  i = e.title[2],
                  s = document.getElementById(
                    "monsterinsights-chartjs-pie-" + i + "-tooltip"
                  );
                null === s &&
                  ((s = document.createElement("div")),
                  document.body.appendChild(s),
                  s.setAttribute(
                    "id",
                    "monsterinsights-chartjs-pie-" + i + "-tooltip"
                  )),
                  s.classList.remove("above"),
                  s.classList.remove("below"),
                  s.classList.remove("no-transform"),
                  e.yAlign
                    ? s.classList.add(e.yAlign)
                    : s.classList.add("no-transform");
                var n =
                  '<div class="monsterinsights-reports-overview-datagraph-tooltip-container monsterinsights-reports-doughnut-tooltip">';
                (n +=
                  '<div class="monsterinsights-reports-overview-datagraph-tooltip-title">' +
                  o +
                  "%</div>"),
                  (n +=
                    '<div class="monsterinsights-reports-overview-datagraph-tooltip-number">' +
                    r +
                    "</div>"),
                  (n += "</div>"),
                  (s.innerHTML = n),
                  (s.style.opacity = 1),
                  (s.style.padding = e.yPadding + "px " + e.xPadding + "px"),
                  (s.style.zIndex = "99999");
              }),
              (e.prototype.$mi_loading_toast = function (r) {
                var o = "monsterinsights-swal monsterinsights-swal-loading";
                window.scrollY > 0 &&
                  (o += " monsterinsights-swal-full-height"),
                  e.prototype.$swal({
                    customContainerClass: o,
                    type: "info",
                    title:
                      r ||
                      Object(n["a"])("Loading new report data", "ga-premium"),
                    html: Object(n["a"])("Please wait...", "ga-premium"),
                    allowOutsideClick: !1,
                    allowEscapeKey: !1,
                    allowEnterKey: !1,
                    animation: !1,
                    onOpen: function () {
                      e.prototype.$swal.showLoading(), t.addCustomLoader();
                    },
                  });
              }),
              (e.prototype.$mi_error_toast = function (t) {
                var r = Object(n["a"])("Continue %s", "ga-premium"),
                  o = t.type,
                  i = void 0 === o ? "error" : o,
                  s = t.customContainerClass,
                  a =
                    void 0 === s
                      ? "monsterinsights-swal monsterinsights-swal-succcess"
                      : s,
                  c = t.allowOutsideClick,
                  l = void 0 !== c && c,
                  p = t.allowEscapeKey,
                  u = void 0 !== p && p,
                  d = t.allowEnterKey,
                  m = void 0 !== d && d,
                  h = t.title,
                  g = void 0 === h ? Object(n["a"])("Error", "ga-premium") : h,
                  b = t.html,
                  f =
                    void 0 === b
                      ? Object(n["a"])("Please try again.", "ga-premium")
                      : b,
                  v = t.confirmButtonText,
                  w =
                    void 0 === v
                      ? Object(n["d"])(
                          r,
                          '<i class="monstericon-long-arrow-right-light"></i>'
                        )
                      : v,
                  _ = t.showCancelButton,
                  O = void 0 !== _ && _,
                  y = t.cancelButtonText,
                  j = void 0 === y ? "Cancel" : y,
                  x = t.footer,
                  k = void 0 !== x && x;
                return e.prototype.$swal({
                  type: i,
                  customContainerClass: a,
                  allowOutsideClick: l,
                  allowEscapeKey: u,
                  allowEnterKey: m,
                  title: g,
                  html:
                    '<div class="monsterinsights-swal-icons"><i class="monstericon-exclamation-em-solid"></i><i class="monstericon-exclamation-em-solid"></i><i class="monstericon-exclamation-em-solid"></i><i class="monstericon-exclamation-em-solid"></i></div><p>' +
                    f +
                    "</p>",
                  footer: k,
                  showCancelButton: O,
                  cancelButtonText: j,
                  confirmButtonText: w,
                  onOpen: function () {
                    e.prototype.$swal.hideLoading();
                  },
                });
              }),
              (e.prototype.$mi_get_upsell_content = function (e) {
                var t = {},
                  r = {
                    overview: {
                      title: Object(n["a"])(
                        "Unlock the Publishers Report and Focus on the Content that Matters",
                        "ga-premium"
                      ),
                      subtitle: Object(n["a"])(
                        "Stop guessing about what content your visitors are interested in. MonsterInsights Publisher Report shows you exactly which content gets the most visits, so you can analyze and optimize it for higher conversions.",
                        "ga-premium"
                      ),
                    },
                    publisher: {
                      title: Object(n["a"])(
                        "Unlock the Publishers Report and Focus on the Content That Matters",
                        "ga-premium"
                      ),
                      subtitle: Object(n["a"])(
                        "Stop guessing about what content your visitors are interested in. The Publisher Report shows you exactly which content gets the most traffic, so you can analyze and optimize it for higher conversions.",
                        "ga-premium"
                      ),
                    },
                    ecommerce: {
                      title: Object(n["a"])(
                        "Unlock the eCommerce Report and See Your Important Store Metrics",
                        "ga-premium"
                      ),
                      subtitle: Object(n["a"])(
                        "Increase your sales & revenue with insights. MonsterInsights answers all your top eCommerce questions using metrics like total revenue, conversion rate, average order value, top products, top referral sources and more.",
                        "ga-premium"
                      ),
                    },
                    dimensions: {
                      title: Object(n["a"])(
                        "Unlock the Dimensions Report and Track Your Own Custom Data",
                        "ga-premium"
                      ),
                      subtitle: Object(n["a"])(
                        "Decide what data is important using your own custom tracking parameters. The Dimensions report allows you to easily see what's working right inside your WordPress dashboard.",
                        "ga-premium"
                      ),
                    },
                    forms: {
                      title: Object(n["a"])(
                        "Unlock the Forms Report and Improve Conversions",
                        "ga-premium"
                      ),
                      subtitle: Object(n["a"])(
                        "Easily track your form views and conversions. The Forms Report allows you to see which forms are performing better and which forms have lower conversion rates so you can optimize using real data.",
                        "ga-premium"
                      ),
                    },
                    queries: {
                      title: Object(n["a"])(
                        "Unlock the Search Console Report and See How People Find Your Website",
                        "ga-premium"
                      ),
                      subtitle: Object(n["a"])(
                        "See exactly how people find your website, which keywords they searched for, how many times the results were viewed, and more.",
                        "ga-premium"
                      ),
                    },
                    realtime: {
                      title: Object(n["a"])(
                        "Unlock the Real-Time Report and Track the Visitors on Your Site in Real-Time",
                        "ga-premium"
                      ),
                      subtitle: Object(n["a"])(
                        "Track the results of your marketing efforts and product launches as-it-happens right from your WordPress site. The Real-Time report allows you to view your traffic sources and visitors activity when you need it.",
                        "ga-premium"
                      ),
                    },
                    sitespeed: {
                      title: Object(n["a"])(
                        "Unlock the Site Speed Report and Improve the Performance of Your Site",
                        "ga-premium"
                      ),
                      subtitle: Object(n["a"])(
                        "See How Your Homepage Performs According to Google’s Own Criteria and See How You Can Improve to Increase Your Ranking",
                        "ga-premium"
                      ),
                    },
                  };
                return r[e] && (t = r[e]), t;
              }),
              (e.prototype.$mi_intervals = function () {
                return {
                  today: {
                    text: Object(n["a"])("Today", "ga-premium"),
                    start: Ao()(),
                    end: Ao()(),
                    interval: "today",
                  },
                  yesterday: {
                    text: Object(n["a"])("Yesterday", "ga-premium"),
                    start: Ao()().subtract(1, "days"),
                    end: Ao()().subtract(1, "days"),
                    interval: "yesterday",
                  },
                  lastweek: {
                    text: Object(n["a"])("Last Week", "ga-premium"),
                    end: Ao()().startOf("week"),
                    start: Ao()().startOf("week").subtract(6, "days"),
                    interval: "lastweek",
                  },
                  lastmonth: {
                    text: Object(n["a"])("Last Month", "ga-premium"),
                    end: Ao()().startOf("month").subtract(1, "days"),
                    start: Ao()().startOf("month").subtract(1, "month"),
                    interval: "lastmonth",
                  },
                  last7days: {
                    text: Object(n["a"])("Last 7 days", "ga-premium"),
                    end: Ao()().subtract(1, "days"),
                    start: Ao()().subtract(7, "days"),
                    interval: "last7days",
                  },
                  last30days: {
                    text: Object(n["a"])("Last 30 days", "ga-premium"),
                    end: Ao()().subtract(1, "days"),
                    start: Ao()().subtract(30, "days"),
                    interval: "last30days",
                  },
                };
              });
          },
          addCustomLoader: function () {
            var e =
              '<div class="monsterinsights-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>';
            document.querySelector(
              ".swal2-actions.swal2-loading"
            ).innerHTML = e;
          },
        }),
      Ko = zo,
      Go = {
        install: function (e, t) {
          var r = t.store;
          (e.prototype.$mi_loading_toast = function () {}),
            (e.prototype.$mi_error_toast = function (e) {
              var t = e,
                o = t.type,
                i = void 0 === o ? "error" : o,
                s = t.customContainerClass,
                a = void 0 === s ? "monsterinsights-swal" : s,
                c = t.allowOutsideClick,
                l = void 0 !== c && c,
                p = t.allowEscapeKey,
                u = void 0 !== p && p,
                d = t.allowEnterKey,
                m = void 0 !== d && d,
                h = t.title,
                g = void 0 === h ? Object(n["a"])("Error", "ga-premium") : h,
                b = t.html,
                f =
                  void 0 === b
                    ? Object(n["a"])("Please try again.", "ga-premium")
                    : b,
                v = t.footer,
                w = void 0 !== v && v,
                _ = t.report,
                O = void 0 === _ ? "general" : _;
              (e = {
                type: i,
                customContainerClass: a,
                allowOutsideClick: l,
                allowEscapeKey: u,
                allowEnterKey: m,
                title: g,
                html: f,
                footer: w,
                report: O,
              }),
                r.commit("$_widget/SET_ERROR", {
                  report: O,
                  title: e.title,
                  content: e.html,
                  footer: e.footer,
                });
            }),
            (e.prototype.$mi_intervals = function () {
              return {
                today: {
                  text: Object(n["a"])("Today", "ga-premium"),
                  start: Ao()(),
                  end: Ao()(),
                  interval: "today",
                },
                yesterday: {
                  text: Object(n["a"])("Yesterday", "ga-premium"),
                  start: Ao()().subtract(1, "days"),
                  end: Ao()().subtract(1, "days"),
                  interval: "yesterday",
                },
                lastweek: {
                  text: Object(n["a"])("Last Week", "ga-premium"),
                  end: Ao()().startOf("week"),
                  start: Ao()().startOf("week").subtract(6, "days"),
                  interval: "lastweek",
                },
                lastmonth: {
                  text: Object(n["a"])("Last Month", "ga-premium"),
                  end: Ao()().startOf("month").subtract(1, "days"),
                  start: Ao()().startOf("month").subtract(1, "month"),
                  interval: "lastmonth",
                },
                last7days: {
                  text: Object(n["a"])("Last 7 days", "ga-premium"),
                  end: Ao()().subtract(1, "days"),
                  start: Ao()().subtract(7, "days"),
                  interval: "last7days",
                },
                last30days: {
                  text: Object(n["a"])("Last 30 days", "ga-premium"),
                  end: Ao()().subtract(1, "days"),
                  start: Ao()().subtract(30, "days"),
                  interval: "last30days",
                },
              };
            });
        },
      },
      qo = Go,
      Qo = r("4360"),
      Jo = r("e37d"),
      Xo = r("6c6b"),
      Zo =
        (r("33ea"),
        document.getElementById("monsterinsights-dashboard-widget")),
      ei = document.getElementById("monsterinsights-reminder-notice");
    ((l["a"].config.productionTip = !1), Zo) &&
      (Object(Xo["a"])({ ctrl: !0 }),
      l["a"].use(Vo["a"]),
      l["a"].use(Yo["a"]),
      l["a"].use(Jo["a"], {
        defaultTemplate:
          '<div class="monsterinsights-tooltip" role="tooltip"><div class="monsterinsights-tooltip-arrow"></div><div class="monsterinsights-tooltip-inner"></div></div>',
        defaultArrowSelector:
          ".monsterinsights-tooltip-arrow, .monsterinsights-tooltip__arrow",
        defaultInnerSelector:
          ".monsterinsights-tooltip-inner, .monsterinsights-tooltip__inner",
      }),
      l["a"].use(Ho["a"]),
      l["a"].use(Ko),
      l["a"].use(qo, { store: Qo["a"] }),
      Object(n["c"])(window.monsterinsights.translations, "ga-premium"),
      new l["a"]({
        store: Qo["a"],
        mounted: function () {
          Qo["a"].dispatch("$_app/init"),
            Qo["a"].dispatch("$_license/getLicense");
        },
        render: function (e) {
          return e(To);
        },
      }).$mount(Zo));
    ei &&
      (l["a"].use(Vo["a"]),
      l["a"].use(Ho["a"]),
      l["a"].use(Ko),
      l["a"].use(qo, { store: Qo["a"] }),
      Object(n["c"])(window.monsterinsights.translations, "ga-premium"),
      new l["a"]({
        store: Qo["a"],
        mounted: function () {
          Qo["a"].dispatch("$_app/init");
        },
        render: function (e) {
          return e(Mo);
        },
      }).$mount(ei));
  },
});
