(window["monsterinsightsjsonp"] = window["monsterinsightsjsonp"] || []).push([
  ["chunk-common"],
  {
    "0044": function (t, e, n) {
      "use strict";
      var i = n("9cc2"),
        s = n.n(i);
      s.a;
    },
    "088d": function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { class: t.componentClass },
            [
              n(
                "label",
                {
                  class: t.disabled
                    ? "monsterinsights-styled-checkbox-faux"
                    : "",
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
                          t._k(e.keyCode, "space", 32, e.key, [" ", "Spacebar"])
                          ? null
                          : t.stopClick(e);
                      },
                    ],
                  },
                },
                [
                  n("span", {
                    directives: [
                      {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: t.tooltip_data,
                        expression: "tooltip_data",
                      },
                    ],
                    class: t.labelClass(),
                    attrs: { tabindex: t.faux ? "" : 0 },
                  }),
                  n("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: t.checked,
                        expression: "checked",
                      },
                    ],
                    attrs: {
                      type: "checkbox",
                      name: t.name,
                      disabled: t.disabled,
                    },
                    domProps: {
                      checked: Array.isArray(t.checked)
                        ? t._i(t.checked, null) > -1
                        : t.checked,
                    },
                    on: {
                      change: function (e) {
                        var n = t.checked,
                          i = e.target,
                          s = !!i.checked;
                        if (Array.isArray(n)) {
                          var o = null,
                            a = t._i(n, o);
                          i.checked
                            ? a < 0 && (t.checked = n.concat([o]))
                            : a > -1 &&
                              (t.checked = n
                                .slice(0, a)
                                .concat(n.slice(a + 1)));
                        } else t.checked = s;
                      },
                    },
                  }),
                  t.label
                    ? n("span", {
                        staticClass: "monsterinsights-checkbox-label",
                        domProps: { innerHTML: t._s(t.label) },
                      })
                    : t._e(),
                  t.hasLabelSlot
                    ? n(
                        "span",
                        { staticClass: "monsterinsights-checkbox-label" },
                        [t._t("label")],
                        2
                      )
                    : t._e(),
                  t.description
                    ? n("span", {
                        staticClass: "monsterinsights-checkbox-description",
                        domProps: { innerHTML: t._s(t.description) },
                      })
                    : t._e(),
                  t.tooltip
                    ? n("settings-info-tooltip", {
                        attrs: { content: t.tooltip },
                      })
                    : t._e(),
                  t.hasCollapsibleSlot
                    ? n(
                        "span",
                        {
                          staticClass:
                            "monsterinsights-settings-input-toggle-collapsible",
                          attrs: { role: "button" },
                          on: {
                            keyup: [
                              function (e) {
                                return !e.type.indexOf("key") &&
                                  t._k(e.keyCode, "enter", 13, e.key, "Enter")
                                  ? null
                                  : t.toggleCollapsible(e);
                              },
                              function (e) {
                                return !e.type.indexOf("key") &&
                                  t._k(e.keyCode, "space", 32, e.key, [
                                    " ",
                                    "Spacebar",
                                  ])
                                  ? null
                                  : t.toggleCollapsible(e);
                              },
                            ],
                          },
                        },
                        [
                          n("i", {
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
                ],
                1
              ),
              n("slide-down-up", [
                t.slotCollapsibleVisible && t.hasCollapsibleSlot
                  ? n("div", { staticClass: "monsterinsights-collapsible" }, [
                      t.hasCollapsibleSlot
                        ? n("div", { staticClass: "monsterinsights-separator" })
                        : t._e(),
                      n(
                        "div",
                        { staticClass: "monsterinsights-collapsible-content" },
                        [t._t("collapsible")],
                        2
                      ),
                    ])
                  : t._e(),
              ]),
            ],
            1
          );
        },
        s = [],
        o =
          (n("a4d3"),
          n("4de4"),
          n("4160"),
          n("b0c0"),
          n("e439"),
          n("dbb4"),
          n("b64b"),
          n("159b"),
          n("fc11")),
        a = n("2f62"),
        r = n("93ec"),
        c = n("d98d");
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                Object(o["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var p = {
          name: "SettingsInputCheckbox",
          components: { SlideDownUp: c["a"], SettingsInfoTooltip: r["a"] },
          props: {
            name: String,
            label: String,
            description: String,
            tooltip: String,
            faux: Boolean,
            faux_tooltip: String,
            faux_tooltip_off: String,
            valueOn: String,
            valueOff: String,
            default: { type: Boolean, default: !0 },
            auth_disabled: { type: Boolean, default: !0 },
          },
          data: function () {
            return {
              is_loading: !1,
              has_error: !1,
              slotCollapsibleVisible: !1,
            };
          },
          computed: u(
            {},
            Object(a["b"])({
              settings: "$_settings/settings",
              auth: "$_auth/auth",
            }),
            {
              has_ua: function () {
                if (!this.auth_disabled) return !0;
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
              hasCollapsibleSlot: function () {
                return this.$slots["collapsible"];
              },
              hasLabelSlot: function () {
                return this.$slots["label"];
              },
              iconClass: function () {
                var t = "monstericon-arrow";
                return (
                  this.slotCollapsibleVisible && (t += " monstericon-down"), t
                );
              },
              componentClass: function () {
                var t = "monsterinsights-settings-input-checkbox";
                return (
                  this.$slots["collapsible"] && (t += " has-collapsible"), t
                );
              },
              checked: {
                get: function () {
                  var t = this.valueOn
                    ? this.valueOn === this.settings[this.name]
                    : this.settings[this.name];
                  return this.faux ? this.default : t;
                },
                set: function (t) {
                  var e = !!this.valueOff && this.valueOff;
                  t && (e = !this.valueOn || this.valueOn),
                    this.updateSetting(e);
                },
              },
              tooltip_data: function () {
                return {
                  content: this.faux_tooltip_text,
                  autoHide: !1,
                  trigger: "hover focus click",
                };
              },
              faux_tooltip_text: function () {
                return this.has_ua
                  ? this.checked
                    ? this.faux_tooltip
                    : this.faux_tooltip_off
                  : this.$mi_need_to_auth;
              },
              disabled: function () {
                return !this.has_ua || this.faux;
              },
            }
          ),
          watch: {
            checked: function (t) {
              this.$emit("checkboxChange", t),
                (this.slotCollapsibleVisible = t);
            },
          },
          methods: {
            stopClick: function (t) {
              t.target.classList.contains("monsterinsights-styled-checkbox") ||
              t.target.classList.contains("monsterinsights-checkbox-label")
                ? (this.checked = !this.checked)
                : (this.toggleCollapsible(t), t.stopPropagation());
            },
            updateSetting: function (t) {
              var e = this;
              if (this.disabled) return !1;
              this.$mi_saving_toast({}),
                this.$store
                  .dispatch("$_settings/updateSettings", {
                    name: this.name,
                    value: t,
                  })
                  .then(function (t) {
                    t.success
                      ? (e.$emit("checkbox_option_updated"),
                        e.$mi_success_toast({}))
                      : e.$mi_error_toast({});
                  });
            },
            toggleCollapsible: function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                (this.slotCollapsibleVisible = !this.slotCollapsibleVisible);
            },
            labelClass: function () {
              var t = "monsterinsights-styled-checkbox";
              return (
                this.checked &&
                  (t += " monsterinsights-styled-checkbox-checked"),
                t
              );
            },
            mounted: function () {
              this.slotCollapsibleVisible = this.checked;
            },
          },
        },
        d = p,
        m = n("2877"),
        h = Object(m["a"])(d, i, s, !1, null, null, null);
      e["a"] = h.exports;
    },
    "0b20": function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "monsterinsights-reports-datepicker" },
            [
              n(
                "div",
                {
                  staticClass:
                    "monsterinsights-reports-interval-dropdown-container",
                },
                [
                  n(
                    "button",
                    {
                      staticClass: "monsterinsights-reports-interval-date-info",
                      on: {
                        click: function (e) {
                          return e.stopPropagation(), t.toggleDropdown(e);
                        },
                      },
                    },
                    [
                      n("span", {
                        domProps: { innerHTML: t._s(t.selectedIntervalText) },
                      }),
                      n("i", { staticClass: "monstericon-calendar-alt" }),
                    ]
                  ),
                  n(
                    "div",
                    {
                      directives: [
                        {
                          name: "click-outside",
                          rawName: "v-click-outside",
                          value: t.maybeHideDropdown,
                          expression: "maybeHideDropdown",
                        },
                      ],
                      class: t.dropdownClass,
                    },
                    [
                      n(
                        "div",
                        { class: t.showIfFlatpickr() },
                        [
                          n("flat-pickr", {
                            ref: "datePicker",
                            staticClass: "monsterinsights-datepicker",
                            attrs: { config: t.config },
                            on: { "on-close": t.updateDates },
                            model: {
                              value: t.local_date,
                              callback: function (e) {
                                t.local_date = e;
                              },
                              expression: "local_date",
                            },
                          }),
                        ],
                        1
                      ),
                      n(
                        "div",
                        { class: t.hideIfFlatpickr() },
                        [
                          t._l(t.intervals, function (e, i) {
                            return n("div", { key: i }, [
                              n("button", {
                                class: t.intervalButtonClass(e.interval),
                                domProps: {
                                  innerHTML: t._s(
                                    t.getIntervalFormatted(
                                      e.text,
                                      e.start,
                                      e.end
                                    )
                                  ),
                                },
                                on: {
                                  click: function (n) {
                                    return t.getInterval(
                                      e.start,
                                      e.end,
                                      e.text,
                                      e.interval
                                    );
                                  },
                                },
                              }),
                            ]);
                          }),
                          t._t("beforeinterval"),
                          n("div", [
                            n(
                              "button",
                              {
                                class: t.intervalButtonClass(!1),
                                on: { click: t.openFlatPickr },
                              },
                              [
                                n("i", {
                                  staticClass: "monstericon-calendar-alt",
                                }),
                                t._v(" "),
                                n("span", {
                                  domProps: {
                                    textContent: t._s(
                                      t.text_datepicker_placeholder
                                    ),
                                  },
                                }),
                              ]
                            ),
                          ]),
                        ],
                        2
                      ),
                    ]
                  ),
                ]
              ),
              n("button", {
                staticClass:
                  "monsterinsights-button monsterinsights-mobile-details-toggle",
                domProps: { textContent: t._s(t.text_mobile_details) },
                on: { click: t.toggleMobileTables },
              }),
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
          n("d3b7"),
          n("25f0"),
          n("159b"),
          n("4795"),
          n("fc11")),
        a = n("2b0e"),
        r = n("561c"),
        c = n("2f62"),
        l = n("c38f"),
        u = n.n(l),
        p = (n("0952"), n("c1df")),
        d = n.n(p);
      n("7f45");
      function m(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function h(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? m(Object(n), !0).forEach(function (e) {
                Object(o["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      a["a"].directive("click-outside", {
        bind: function (t, e, n) {
          (t.clickOutsideEvent = function (i) {
            t === i.target ||
              t.contains(i.target) ||
              n.context[e.expression](i);
          }),
            document.body.addEventListener("click", t.clickOutsideEvent);
        },
        unbind: function (t) {
          document.body.removeEventListener("click", t.clickOutsideEvent);
        },
      });
      var f = 783,
        g = !1,
        _ = {
          name: "ReportsDatePicker",
          data: function () {
            var t = this;
            return {
              config: {
                mode: "range",
                disableMobile: "true",
                dateFormat: "Y-m-d",
                disable: [
                  function (e) {
                    var n = e,
                      i = d()(d()().tz(t.$mi.timezone).format("YYYY-MM-DD")),
                      s = d.a.duration(i.diff(n)),
                      o = s.asDays();
                    o += 1;
                    var a = d()(e).tz(t.$mi.timezone),
                      r = a.subtract(o, "d").tz(t.$mi.timezone),
                      c = d()(),
                      l = r.isBetween(
                        d()("01-01-2005", "MM-DD-YYYY").tz(t.$mi.timezone),
                        c
                      ),
                      u = d()(e).isBetween(
                        d()("01-01-2005", "MM-DD-YYYY").tz(t.$mi.timezone),
                        c
                      );
                    return !l || !u;
                  },
                ],
                static: !0,
                inline: !0,
              },
              isMobile: window.innerWidth < f,
              intervals: this.$mi_intervals(),
              dropdownVisible: !1,
              isCalendarOpen: !1,
            };
          },
          computed: h(
            {},
            Object(c["b"])({
              date: "$_reports/date",
              activeReport: "$_reports/activeReport",
              mobileTableExpanded: "$_reports/mobileTableExpanded",
            }),
            {
              selectedIntervalText: function () {
                if (this.interval) {
                  var t = this.intervals[this.interval];
                  return this.getIntervalFormatted(t.text, t.start, t.end);
                }
                var e = d()(this.date.start),
                  n = d()(this.date.end);
                return Object(r["d"])(
                  Object(r["a"])(
                    "%1$sCustom dates:%2$s %3$s - %4$s",
                    "ga-premium"
                  ),
                  "<b>",
                  "</b>",
                  e.format("MMMM D"),
                  n.format("MMMM D, YYYY")
                );
              },
              text_datepicker_placeholder: function () {
                return this.isMobile
                  ? Object(r["a"])("Custom Date Range", "ga-premium")
                  : Object(r["a"])("Set Custom Date Range", "ga-premium");
              },
              text_mobile_details: function () {
                return this.mobileTableExpanded
                  ? Object(r["a"])("Hide Details", "ga-premium")
                  : Object(r["a"])("Show Details", "ga-premium");
              },
              interval: {
                set: function (t) {
                  this.$store.commit("$_reports/UPDATE_INTERVAL", t);
                },
                get: function () {
                  var t = this.date.interval;
                  return (
                    (30 !== t && "false" !== t) || (t = "last30days"),
                    7 === t && (t = "last7days"),
                    t
                  );
                },
              },
              local_date: {
                set: function (t) {
                  this.$store.commit("$_reports/UPDATE_DATE_TEXT", t);
                },
                get: function () {
                  return this.date.text;
                },
              },
              dropdownClass: function () {
                var t = "monsterinsights-reports-intervals-dropdown";
                return (
                  this.isCalendarOpen && (t += " monsterinsights-p-0"),
                  this.dropdownVisible || (t += " monsterinsights-hide"),
                  t
                );
              },
            }
          ),
          components: { flatPickr: u.a },
          methods: {
            updateDates: function (t) {
              var e = this;
              this.dropdownVisible = !1;
              var n = {};
              t[0] &&
                t[1] &&
                ((n.start = this.getFormattedDate(t[0])),
                (n.end = this.getFormattedDate(t[1])),
                e.$emit("date-changed"),
                (this.interval = !1),
                document.activeElement.blur(),
                this.$store.commit("$_reports/UPDATE_DATE", n),
                this.$store
                  .dispatch("$_reports/getReportData", this.activeReport)
                  .then(function () {
                    e.$emit("reports-updated");
                  }));
            },
            getFormattedDate: function (t) {
              if (t instanceof Date) {
                var e = this.addLeadingZero(t.getMonth() + 1),
                  n = this.addLeadingZero(t.getDate());
                t = t.getFullYear() + "-" + e + "-" + n;
              }
              return t;
            },
            addLeadingZero: function (t) {
              return t < 10 && t > 0 ? 0 + t.toString() : t;
            },
            getInterval: function (t, e, n, i) {
              var s = this;
              (this.dropdownVisible = !1),
                (this.interval = i),
                s.$emit("date-changed", i),
                this.$store.commit("$_reports/UPDATE_DATE", {
                  start: t.format("YYYY-MM-DD"),
                  end: e.format("YYYY-MM-DD"),
                }),
                window.blur(),
                this.$store
                  .dispatch("$_reports/getReportData", this.activeReport)
                  .then(function () {
                    s.$emit("reports-updated");
                  }),
                (this.local_date = "");
            },
            getIntervalText: function (t, e) {
              return t.format("YYYYMMDD") === e.format("YYYYMMDD")
                ? t.format("MMMM D, YYYY")
                : t.format("MMMM D") + " - " + e.format("MMMM D, YYYY");
            },
            getIntervalFormatted: function (t, e, n) {
              return (
                "<b>" +
                t +
                '<span class="monsterinsights-datepicker-colon">:</span></b> <span class="monsterinsights-datepicker-interval-dates">' +
                this.getIntervalText(e, n) +
                "</span>"
              );
            },
            getButtonClass: function (t) {
              var e = "monsterinsights-button";
              return (
                t === this.interval &&
                  (e += " monsterinsights-selected-interval"),
                e
              );
            },
            hideMobileTables: function () {
              this.mobileTableExpanded &&
                this.$store.commit("$_reports/CONTRACT_TABLES");
            },
            showMobileTables: function () {
              this.mobileTableExpanded ||
                this.$store.commit("$_reports/EXPAND_TABLES");
            },
            toggleMobileTables: function () {
              this.mobileTableExpanded
                ? this.hideMobileTables()
                : this.showMobileTables();
            },
            handleResize: function () {
              g ||
                ((g = !0),
                window.requestAnimationFrame
                  ? window.requestAnimationFrame(this.resizeCallback)
                  : setTimeout(this.resizeCallback, 66));
            },
            resizeCallback: function () {
              (this.isMobile = window.innerWidth < f), (g = !1);
            },
            openFlatPickr: function () {
              this.$refs.datePicker.fp.open(), (this.isCalendarOpen = !0);
            },
            showIfFlatpickr: function () {
              return this.$refs.datePicker && this.isCalendarOpen
                ? ""
                : "monsterinsights-hide";
            },
            hideIfFlatpickr: function () {
              return this.$refs.datePicker && this.isCalendarOpen
                ? "monsterinsights-hide"
                : "";
            },
            maybeHideDropdown: function () {
              (this.isCalendarOpen = !1),
                this.dropdownVisible && (this.dropdownVisible = !1);
            },
            intervalButtonClass: function (t) {
              var e = "monsterinsights-button ";
              return (
                this.interval === t &&
                  (e += " monsterinsights-interval-active"),
                e
              );
            },
            toggleDropdown: function () {
              (this.dropdownVisible = !this.dropdownVisible),
                (this.isCalendarOpen = !1);
            },
          },
          mounted: function () {
            window.addEventListener("resize", this.handleResize);
          },
          beforeDestroy: function () {
            window.removeEventListener("resize", this.handleResize);
          },
        },
        b = _,
        v = n("2877"),
        y = Object(v["a"])(b, i, s, !1, null, null, null);
      e["a"] = y.exports;
    },
    "0e23": function (t, e, n) {
      "use strict";
      var i = n("86b5"),
        s = n.n(i);
      s.a;
    },
    "0f8f": function (t, e, n) {},
    1915: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "monsterinsights-notificationsv3-container" },
            [
              n(
                "div",
                { staticClass: "monsterinsights-notificationsv3-inbox-button" },
                [
                  n(
                    "button",
                    {
                      staticClass: "monsterinsights-button",
                      on: {
                        click: function (e) {
                          t.isShowSidebar = !0;
                        },
                      },
                    },
                    [
                      n(
                        "svg",
                        {
                          attrs: {
                            width: "22",
                            height: "14",
                            viewBox: "0 0 22 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                          },
                        },
                        [
                          n("path", {
                            attrs: {
                              d:
                                "M21.6944 6.5625C21.8981 6.85417 22 7.18229 22 7.54687V12.25C22 12.7361 21.8218 13.1493 21.4653 13.4896C21.1088 13.8299 20.6759 14 20.1667 14H1.83333C1.32407 14 0.891204 13.8299 0.534722 13.4896C0.178241 13.1493 0 12.7361 0 12.25V7.54687C0 7.18229 0.101852 6.85417 0.305556 6.5625L4.35417 0.765625C4.45602 0.644097 4.58333 0.522569 4.73611 0.401042C4.91435 0.279514 5.10532 0.182292 5.30903 0.109375C5.51273 0.0364583 5.7037 0 5.88194 0H16.1181C16.3981 0 16.6782 0.0850694 16.9583 0.255208C17.2639 0.401042 17.4931 0.571181 17.6458 0.765625L21.6944 6.5625ZM6.1875 2.33333L2.94097 7H7.63889L8.86111 9.33333H13.1389L14.3611 7H19.059L15.8125 2.33333H6.1875Z",
                              fill: "#2679C1",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                  n("span", {
                    class: [
                      "monsterinsights-notificationsv3-inbox-number",
                      t.activeNotificationsNumber > 9
                        ? "number-greater-than-10"
                        : "number-less-than-10",
                    ],
                    domProps: {
                      textContent: t._s(t.activeNotificationsNumber),
                    },
                    on: {
                      click: function (e) {
                        t.isShowSidebar = !0;
                      },
                    },
                  }),
                ]
              ),
              t.isShowSidebar
                ? n(
                    "div",
                    {
                      class: [
                        "monsterinsights-notificationsv3-sidebar",
                        t.isShowSidebar
                          ? "monsterinsights-notificationsv3-sidebar-in"
                          : "monsterinsights-notificationsv3-sidebar-out",
                      ],
                    },
                    [
                      n(
                        "div",
                        {
                          staticClass:
                            "monsterinsights-notificationsv3-sidebar-header-top",
                        },
                        [
                          n(
                            "div",
                            {
                              staticClass:
                                "monsterinsights-notificationsv3-sidebar-header-top-title",
                            },
                            [
                              n(
                                "svg",
                                {
                                  attrs: {
                                    width: "24",
                                    height: "15",
                                    viewBox: "0 0 24 15",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                },
                                [
                                  n("path", {
                                    attrs: {
                                      d:
                                        "M23.6667 7.03125C23.8889 7.34375 24 7.69531 24 8.08594V13.125C24 13.6458 23.8056 14.0885 23.4167 14.4531C23.0278 14.8177 22.5556 15 22 15H2C1.44444 15 0.972222 14.8177 0.583333 14.4531C0.194444 14.0885 0 13.6458 0 13.125V8.08594C0 7.69531 0.111111 7.34375 0.333333 7.03125L4.75 0.820312C4.86111 0.690104 5 0.559896 5.16667 0.429688C5.36111 0.299479 5.56944 0.195312 5.79167 0.117188C6.01389 0.0390625 6.22222 0 6.41667 0H17.5833C17.8889 0 18.1944 0.0911458 18.5 0.273438C18.8333 0.429688 19.0833 0.611979 19.25 0.820312L23.6667 7.03125ZM6.75 2.5L3.20833 7.5H8.33333L9.66667 10H14.3333L15.6667 7.5H20.7917L17.25 2.5H6.75Z",
                                      fill: "white",
                                    },
                                  }),
                                ]
                              ),
                              t.isShowDismissed
                                ? t._e()
                                : n("h3", {
                                    domProps: {
                                      textContent: t._s(t.text_inbox),
                                    },
                                  }),
                              t.isShowDismissed
                                ? n("h3", {
                                    domProps: {
                                      textContent: t._s(t.text_dismissed),
                                    },
                                  })
                                : t._e(),
                            ]
                          ),
                          n(
                            "div",
                            {
                              staticClass:
                                "monsterinsights-notificationsv3-sidebar-header-top-actions",
                            },
                            [
                              t.isShowDismissed
                                ? t._e()
                                : n("button", {
                                    staticClass: "monsterinsights-button",
                                    domProps: {
                                      textContent: t._s(t.text_view_dismissed),
                                    },
                                    on: {
                                      click: function (e) {
                                        t.isShowDismissed = !0;
                                      },
                                    },
                                  }),
                              t.isShowDismissed
                                ? n("button", {
                                    staticClass: "monsterinsights-button",
                                    domProps: {
                                      textContent: t._s(t.text_back_to_inbox),
                                    },
                                    on: {
                                      click: function (e) {
                                        t.isShowDismissed = !1;
                                      },
                                    },
                                  })
                                : t._e(),
                              n(
                                "button",
                                {
                                  staticClass:
                                    "monsterinsights-button monsterinsights-notificationsv3-sidebar-close",
                                  on: { click: t.closeSidebar },
                                },
                                [
                                  n(
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
                                      n("path", {
                                        attrs: {
                                          d:
                                            "M8.28409 6L11.6932 9.40909C11.8977 9.61364 12 9.86364 12 10.1591C12 10.4545 11.8977 10.7159 11.6932 10.9432L10.9432 11.6932C10.7159 11.8977 10.4545 12 10.1591 12C9.86364 12 9.61364 11.8977 9.40909 11.6932L6 8.28409L2.59091 11.6932C2.38636 11.8977 2.13636 12 1.84091 12C1.54545 12 1.28409 11.8977 1.05682 11.6932L0.306818 10.9432C0.102273 10.7159 0 10.4545 0 10.1591C0 9.86364 0.102273 9.61364 0.306818 9.40909L3.71591 6L0.306818 2.59091C0.102273 2.38636 0 2.13636 0 1.84091C0 1.54545 0.102273 1.28409 0.306818 1.05682L1.05682 0.306818C1.28409 0.102273 1.54545 0 1.84091 0C2.13636 0 2.38636 0.102273 2.59091 0.306818L6 3.71591L9.40909 0.306818C9.61364 0.102273 9.86364 0 10.1591 0C10.4545 0 10.7159 0.102273 10.9432 0.306818L11.6932 1.05682C11.8977 1.28409 12 1.54545 12 1.84091C12 2.13636 11.8977 2.38636 11.6932 2.59091L8.28409 6Z",
                                          fill: "white",
                                        },
                                      }),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      n(
                        "div",
                        {
                          staticClass:
                            "monsterinsights-notificationsv3-sidebar-header-bottom",
                        },
                        [
                          n(
                            "div",
                            {
                              staticClass:
                                "monsterinsights-notificationsv3-sidebar-header-bottom-notifications-count",
                            },
                            [
                              t.isShowDismissed
                                ? t._e()
                                : n("span", {
                                    staticClass:
                                      "monsterinsights-notificationsv3-inbox-number",
                                    domProps: {
                                      textContent: t._s(
                                        t.activeNotificationsNumber
                                      ),
                                    },
                                  }),
                              t.isShowDismissed
                                ? n("span", {
                                    staticClass:
                                      "monsterinsights-notificationsv3-dismissed-number",
                                    domProps: {
                                      textContent: t._s(
                                        t.dismissedNotificationsNumber
                                      ),
                                    },
                                  })
                                : t._e(),
                              n("h4", {
                                domProps: {
                                  textContent: t._s(t.text_notifications),
                                },
                              }),
                            ]
                          ),
                          !t.isShowDismissed && t.activeNotificationsNumber > 0
                            ? n(
                                "div",
                                {
                                  staticClass:
                                    "monsterinsights-notificationsv3-sidebar-header-bottom-actions",
                                },
                                [
                                  n("span", {
                                    domProps: {
                                      textContent: t._s(t.text_dismiss_all),
                                    },
                                    on: {
                                      click: function (e) {
                                        return t.dismiss("all");
                                      },
                                    },
                                  }),
                                ]
                              )
                            : t._e(),
                        ]
                      ),
                      t.isShowDismissed
                        ? t._e()
                        : n(
                            "div",
                            {
                              staticClass:
                                "monsterinsights-notificationsv3-sidebar-notifications monsterinsights-notificationsv3-notifications-active",
                            },
                            [
                              t.activeNotificationsNumber < 1
                                ? n(
                                    "div",
                                    {
                                      staticClass:
                                        "monsterinsights-notificationsv3-no-notifications",
                                    },
                                    [
                                      n(
                                        "svg",
                                        {
                                          attrs: {
                                            width: "91",
                                            height: "74",
                                            viewBox: "0 0 91 74",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                          },
                                        },
                                        [
                                          n("path", {
                                            attrs: {
                                              d:
                                                "M89.2969 65.4062C90.4219 66.3438 90.5625 67.4219 89.7188 68.6406L86.9062 72.1562C85.9688 73.2812 84.9375 73.4219 83.8125 72.5781L0.984375 8.59375C-0.140625 7.65625 -0.28125 6.57813 0.5625 5.35938L3.375 1.84375C4.3125 0.71875 5.34375 0.578125 6.46875 1.42188L26.8594 17.1719C30.3281 12.5781 34.9219 9.67188 40.6406 8.45312V5.5C40.6406 4.28125 41.0625 3.25 41.9062 2.40625C42.8438 1.46875 43.9219 1 45.1406 1C46.3594 1 47.3906 1.46875 48.2344 2.40625C49.1719 3.25 49.6406 4.28125 49.6406 5.5V8.45312C54.8906 9.48437 59.2031 12.0156 62.5781 16.0469C65.9531 20.0781 67.6406 24.8125 67.6406 30.25C67.6406 34.375 68.1094 38.0312 69.0469 41.2188C69.9844 44.3125 70.8281 46.4219 71.5781 47.5469C72.4219 48.6719 73.5469 49.9375 74.9531 51.3438C75.1406 51.625 75.2812 51.8125 75.375 51.9062C76.2188 52.8438 76.6406 53.875 76.6406 55C76.6406 55.0938 76.5938 55.2344 76.5 55.4219C76.5 55.5156 76.5 55.5625 76.5 55.5625L89.2969 65.4062ZM22.2188 36.4375L52.1719 59.5H18.1406C17.2969 59.5 16.5 59.3125 15.75 58.9375C15.0938 58.4688 14.5781 57.9062 14.2031 57.25C13.8281 56.5 13.6406 55.75 13.6406 55C13.6406 53.875 14.0625 52.8438 14.9062 51.9062C16.2188 50.5 17.1562 49.4688 17.7188 48.8125C18.2812 48.1562 19.0781 46.6562 20.1094 44.3125C21.1406 41.9688 21.8438 39.3438 22.2188 36.4375ZM45.1406 73C42.7031 73 40.5938 72.1094 38.8125 70.3281C37.0312 68.6406 36.1406 66.5312 36.1406 64H54.1406C54.1406 65.5938 53.7188 67.0938 52.875 68.5C52.125 69.9062 51.0469 70.9844 49.6406 71.7344C48.2344 72.5781 46.7344 73 45.1406 73Z",
                                              fill: "#E2E4E9",
                                            },
                                          }),
                                        ]
                                      ),
                                      n("h4", {
                                        domProps: {
                                          textContent: t._s(
                                            t.text_no_notifications
                                          ),
                                        },
                                      }),
                                    ]
                                  )
                                : t._e(),
                              t._l(t.notifications, function (t, e) {
                                return n("notification", {
                                  key: e,
                                  attrs: { notification: t },
                                });
                              }),
                            ],
                            2
                          ),
                      t.isShowDismissed
                        ? n(
                            "div",
                            {
                              staticClass:
                                "monsterinsights-notificationsv3-sidebar-notifications monsterinsights-notificationsv3-notifications-dismissed",
                            },
                            [
                              t.dismissedNotificationsNumber < 1
                                ? n(
                                    "div",
                                    {
                                      staticClass:
                                        "monsterinsights-notificationsv3-no-notifications",
                                    },
                                    [
                                      n(
                                        "svg",
                                        {
                                          attrs: {
                                            width: "91",
                                            height: "74",
                                            viewBox: "0 0 91 74",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                          },
                                        },
                                        [
                                          n("path", {
                                            attrs: {
                                              d:
                                                "M89.2969 65.4062C90.4219 66.3438 90.5625 67.4219 89.7188 68.6406L86.9062 72.1562C85.9688 73.2812 84.9375 73.4219 83.8125 72.5781L0.984375 8.59375C-0.140625 7.65625 -0.28125 6.57813 0.5625 5.35938L3.375 1.84375C4.3125 0.71875 5.34375 0.578125 6.46875 1.42188L26.8594 17.1719C30.3281 12.5781 34.9219 9.67188 40.6406 8.45312V5.5C40.6406 4.28125 41.0625 3.25 41.9062 2.40625C42.8438 1.46875 43.9219 1 45.1406 1C46.3594 1 47.3906 1.46875 48.2344 2.40625C49.1719 3.25 49.6406 4.28125 49.6406 5.5V8.45312C54.8906 9.48437 59.2031 12.0156 62.5781 16.0469C65.9531 20.0781 67.6406 24.8125 67.6406 30.25C67.6406 34.375 68.1094 38.0312 69.0469 41.2188C69.9844 44.3125 70.8281 46.4219 71.5781 47.5469C72.4219 48.6719 73.5469 49.9375 74.9531 51.3438C75.1406 51.625 75.2812 51.8125 75.375 51.9062C76.2188 52.8438 76.6406 53.875 76.6406 55C76.6406 55.0938 76.5938 55.2344 76.5 55.4219C76.5 55.5156 76.5 55.5625 76.5 55.5625L89.2969 65.4062ZM22.2188 36.4375L52.1719 59.5H18.1406C17.2969 59.5 16.5 59.3125 15.75 58.9375C15.0938 58.4688 14.5781 57.9062 14.2031 57.25C13.8281 56.5 13.6406 55.75 13.6406 55C13.6406 53.875 14.0625 52.8438 14.9062 51.9062C16.2188 50.5 17.1562 49.4688 17.7188 48.8125C18.2812 48.1562 19.0781 46.6562 20.1094 44.3125C21.1406 41.9688 21.8438 39.3438 22.2188 36.4375ZM45.1406 73C42.7031 73 40.5938 72.1094 38.8125 70.3281C37.0312 68.6406 36.1406 66.5312 36.1406 64H54.1406C54.1406 65.5938 53.7188 67.0938 52.875 68.5C52.125 69.9062 51.0469 70.9844 49.6406 71.7344C48.2344 72.5781 46.7344 73 45.1406 73Z",
                                              fill: "#E2E4E9",
                                            },
                                          }),
                                        ]
                                      ),
                                      n("h4", {
                                        domProps: {
                                          textContent: t._s(
                                            t.text_no_notifications
                                          ),
                                        },
                                      }),
                                    ]
                                  )
                                : t._e(),
                              t._l(t.dismissed, function (t, e) {
                                return n("notification", {
                                  key: e,
                                  attrs: { notification: t, dismissable: !1 },
                                });
                              }),
                            ],
                            2
                          )
                        : t._e(),
                    ]
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
          n("d3b7"),
          n("ac1f"),
          n("3ca3"),
          n("841c"),
          n("159b"),
          n("ddb0"),
          n("2b3d"),
          n("fc11")),
        a = n("561c"),
        r = n("2f62"),
        c = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass:
                "monsterinsights-notificationsv3-single-notification",
            },
            [
              n("div", {
                staticClass:
                  "monsterinsights-notificationsv3-notification-icon",
                domProps: { innerHTML: t._s(t.notification.icon) },
              }),
              n(
                "div",
                {
                  staticClass:
                    "monsterinsights-notificationsv3-notification-details",
                },
                [
                  n(
                    "div",
                    {
                      staticClass:
                        "monsterinsights-notificationsv3-notification-title",
                    },
                    [
                      n("h5", {
                        domProps: { innerHTML: t._s(t.notification.title) },
                      }),
                      t.notification.start
                        ? n("span", {
                            domProps: { innerHTML: t._s(t.notification.start) },
                          })
                        : t._e(),
                    ]
                  ),
                  n(
                    "div",
                    {
                      staticClass:
                        "monsterinsights-notificationsv3-notification-content",
                    },
                    [
                      n("div", {
                        domProps: { innerHTML: t._s(t.notification.content) },
                      }),
                    ]
                  ),
                  n(
                    "div",
                    {
                      staticClass:
                        "monsterinsights-notificationsv3-notification-actions",
                    },
                    [
                      t._l(t.notification.btns, function (e, i) {
                        return n("a", {
                          key: i,
                          class: ["monsterinsights-button", t.buttonClass(i)],
                          attrs: {
                            href: e.url,
                            target: e.is_external ? "_blank" : "_self",
                          },
                          domProps: { textContent: t._s(e.text) },
                        });
                      }),
                      t.dismissable
                        ? n("span", {
                            domProps: { innerHTML: t._s(t.text_dismiss) },
                            on: {
                              click: function (e) {
                                return t.dismiss(t.notification.id);
                              },
                            },
                          })
                        : t._e(),
                    ],
                    2
                  ),
                ]
              ),
            ]
          );
        },
        l = [];
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                Object(o["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var d = {
          name: "Notification",
          props: {
            notification: Object,
            dismissable: { type: Boolean, default: !0 },
          },
          data: function () {
            return { text_dismiss: Object(a["a"])("Dismiss", "ga-premium") };
          },
          computed: p(
            {},
            Object(r["b"])({ notifications: "$_notifications/notifications" }),
            {
              has_notifications: function () {
                return this.notifications && this.notifications.length > 0;
              },
            }
          ),
          methods: {
            buttonClass: function (t) {
              return "monsterinsights-button monsterinsights-button-" + t;
            },
            dismiss: function (t) {
              var e = this;
              this.$store
                .dispatch("$_notifications/dismissNotification", t)
                .then(function () {
                  var t = document.querySelector(
                    ".monsterinsights-menu-notification-indicator"
                  );
                  t && !e.has_notifications
                    ? (t.style.display = "none")
                    : (t.innerText = e.notifications.length);
                });
            },
          },
        },
        m = d,
        h = n("2877"),
        f = Object(h["a"])(m, c, l, !1, null, null, null),
        g = f.exports;
      function _(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function b(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? _(Object(n), !0).forEach(function (e) {
                Object(o["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : _(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var v = {
          name: "Notifications",
          components: { Notification: g },
          data: function () {
            return {
              isShowSidebar: !1,
              isShowDismissed: !1,
              text_inbox: Object(a["a"])("Inbox", "ga-premium"),
              text_back_to_inbox: Object(a["a"])("Back to Inbox", "ga-premium"),
              text_view_dismissed: Object(a["a"])(
                "View Dismissed",
                "ga-premium"
              ),
              text_notifications: Object(a["a"])("Notifications", "ga-premium"),
              text_dismiss_all: Object(a["a"])("Dismiss All", "ga-premium"),
              text_dismissed: Object(a["a"])("Dismissed", "ga-premium"),
              text_no_notifications: Object(a["a"])(
                "No Notifications",
                "ga-premium"
              ),
            };
          },
          computed: b(
            {},
            Object(r["b"])({
              notifications: "$_notifications/notifications",
              dismissed: "$_notifications/dismissed",
            }),
            {
              activeNotificationsNumber: function () {
                return this.notifications.length;
              },
              dismissedNotificationsNumber: function () {
                return this.dismissed.length;
              },
            }
          ),
          created: function () {
            var t = window.location.search;
            if ("undefined" !== typeof t) {
              var e = new URLSearchParams(t),
                n = e.get("open");
              "undefined" !== typeof n &&
                "monsterinsights_notification_sidebar" === n &&
                (this.isShowSidebar = !0);
            }
          },
          methods: {
            closeSidebar: function () {
              (this.isShowSidebar = !1), (this.isShowDismissed = !1);
            },
            buttonClass: function (t) {
              return "monsterinsights-button monsterinsights-button-" + t;
            },
            dismiss: function (t) {
              var e = this;
              this.$store
                .dispatch("$_notifications/dismissNotification", t)
                .then(function () {
                  var t = document.querySelector(
                    ".monsterinsights-menu-notification-indicator"
                  );
                  t && !e.notifications.length > 0
                    ? (t.style.display = "none")
                    : (t.innerText = e.notifications.length);
                });
            },
          },
        },
        y = v,
        w = Object(h["a"])(y, i, s, !1, null, null, null);
      e["a"] = w.exports;
    },
    "2ddd": function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "settings-input settings-input-license" },
            [
              n("settings-input-license-site", {
                on: {
                  "verify-license-start": t.forwardStart,
                  "verify-license-end": t.forwardEnd,
                },
              }),
            ],
            1
          );
        },
        s = [],
        o = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "monsterinsights-settings-license-site" },
            [
              t.license_network.key
                ? n("settings-network-notice", [
                    n("strong", {
                      domProps: {
                        textContent: t._s(t.text_license_key_network),
                      },
                    }),
                    n("span", {
                      domProps: {
                        textContent: t._s(t.text_license_key_network_2),
                      },
                    }),
                  ])
                : t._e(),
              n("label", {
                attrs: { for: "monsterinsights-license-key" },
                domProps: { innerHTML: t._s(t.getLabel()) },
              }),
              t.license.is_invalid || "" === t.license.type
                ? n("div", [
                    n("input", {
                      class: { "monsterinsights-has-error": t.has_error },
                      attrs: {
                        id: "monsterinsights-license-key",
                        readonly: t.is_loading,
                        type: "text",
                        autocomplete: "off",
                        placeholder: t.text_license_placeholder,
                      },
                      domProps: { value: t.license.key },
                      on: { input: t.fieldInput },
                    }),
                  ])
                : t._e(),
              !t.license.is_invalid && t.license.type
                ? n("div", { staticClass: "inline-field" }, [
                    n("input", {
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
                          function (e) {
                            t.license_changed = !0;
                          },
                        ],
                      },
                    }),
                    n("button", {
                      staticClass: "monsterinsights-button",
                      domProps: {
                        textContent: t._s(t.text_license_verify_button),
                      },
                      on: { click: t.verifyLicense },
                    }),
                    n("button", {
                      staticClass:
                        "monsterinsights-button monsterinsights-button-secondary",
                      domProps: {
                        textContent: t._s(t.text_license_deactivate),
                      },
                      on: { click: t.deactivateLicense },
                    }),
                  ])
                : t._e(),
              t.has_error
                ? n(
                    "label",
                    { staticClass: "monsterinsights-error license-key-error" },
                    [
                      n("i", { staticClass: "monstericon-warning-triangle" }),
                      n("span", { domProps: { innerHTML: t._s(t.has_error) } }),
                    ]
                  )
                : t._e(),
              (t.license.type && t.license.key) ||
              (t.license_network.type && t.license_network.key)
                ? n(
                    "div",
                    { staticClass: "monsterinsights-license-type-text" },
                    [
                      n("span", {
                        domProps: { innerHTML: t._s(t.getLicenseType()) },
                      }),
                      !t.license.is_invalid && t.license.type
                        ? n(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function (e) {
                                  return (
                                    e.preventDefault(), t.refreshLicense(e)
                                  );
                                },
                              },
                            },
                            [
                              n("span", {
                                domProps: {
                                  textContent: t._s(t.text_license_refresh),
                                },
                              }),
                            ]
                          )
                        : t._e(),
                      n("settings-info-tooltip", {
                        attrs: { content: t.text_license_refresh_tooltip },
                      }),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        a = [],
        r =
          (n("a4d3"),
          n("4de4"),
          n("4160"),
          n("e439"),
          n("dbb4"),
          n("b64b"),
          n("159b"),
          n("fc11")),
        c = n("2f62"),
        l = n("561c"),
        u = n("b333"),
        p = n("93ec"),
        d = n("f7fe"),
        m = n.n(d);
      function h(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function f(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? h(Object(n), !0).forEach(function (e) {
                Object(r["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var g = {
          name: "SettingsInputLicenseSite",
          components: {
            SettingsInfoTooltip: p["a"],
            SettingsNetworkNotice: u["a"],
          },
          data: function () {
            return {
              is_loading: !1,
              has_error: !1,
              text_license_key_network: Object(l["a"])(
                "Your license key has been set at the network level of your WordPress Multisite.",
                "ga-premium"
              ),
              text_license_key_network_2: Object(l["a"])(
                "If you would like to use a different license for this subsite, you can enter it below.",
                "ga-premium"
              ),
              text_license_no_key_subsite: Object(l["a"])(
                "No license key activated on this subsite",
                "ga-premium"
              ),
              text_license_type: Object(l["d"])(
                Object(l["a"])(
                  "Your license key type for this site is %s. ",
                  "ga-premium"
                ),
                '<span class="monsterinsights-dark">%s</span>'
              ),
              text_license_refresh: Object(l["a"])("Refresh Key", "ga-premium"),
              text_license_refresh_tooltip: Object(l["a"])(
                "Click refresh if your license has been upgraded or the type is incorrect.",
                "ga-premium"
              ),
              text_license_verify: Object(l["a"])("Verify", "ga-premium"),
              text_license_update: Object(l["a"])("Change Key", "ga-premium"),
              text_license_deactivate: Object(l["a"])(
                "Deactivate",
                "ga-premium"
              ),
              text_license_placeholder: Object(l["a"])(
                "Paste your license key here",
                "ga-premium"
              ),
              text_license_label_site: Object(l["d"])(
                Object(l["a"])(
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
              text_license_label_network: Object(l["a"])(
                "The license key is used to enable updates for MonsterInsights Pro and addons, as well enable the ability to view reports. Deactivate your license if you want to use it on another WordPress site.",
                "ga-premium"
              ),
              updated_license: !1,
              license_changed: !1,
            };
          },
          computed: f(
            {},
            Object(c["b"])({
              license: "$_license/license",
              license_network: "$_license/license_network",
            }),
            {
              license_key: {
                get: function () {
                  return !1 !== this.updated_license
                    ? this.updated_license
                    : this.license.key;
                },
                set: function (t) {
                  this.updated_license = t;
                },
              },
              text_license_verify_button: function () {
                return this.license_changed
                  ? this.text_license_update
                  : this.text_license_verify;
              },
            }
          ),
          methods: {
            sprintf: l["d"],
            getLabel: function () {
              return this.license_network.type
                ? this.text_license_label_network
                : this.text_license_label_site;
            },
            getLicenseType: function () {
              return this.license_network.type && !this.license.type
                ? this.text_license_no_key_subsite
                : Object(l["d"])(this.text_license_type, this.license.type);
            },
            fieldInput: m()(function (t) {
              this.updateLicense(t);
            }, 500),
            updateLicense: function (t) {
              if ("" === t.target.value) return !1;
              var e = this;
              (this.is_loading = !0),
                this.$mi_saving_toast({
                  title: Object(l["a"])("Verifying License", "ga-premium"),
                }),
                this.$emit("verify-license-start"),
                (e.has_error = !1),
                this.$store
                  .dispatch("$_license/updateLicense", t.target.value)
                  .then(function (t) {
                    (e.is_loading = !1),
                      e.$swal.close(),
                      e.$emit("verify-license-end"),
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
                title: Object(l["a"])("Verifying License", "ga-premium"),
                allowOutsideClick: !1,
                allowEscapeKey: !1,
                allowEnterKey: !1,
                customContainerClass: "monsterinsights-swal",
                onOpen: function () {
                  t.$swal.showLoading();
                },
              }),
                this.$store
                  .dispatch("$_license/verifyLicense", t.license_key)
                  .then(function (e) {
                    t.$swal.close(),
                      e.data.success
                        ? (t.$store.dispatch("$_license/removeLicenseNotices"),
                          t.$swal({
                            type: "info",
                            title: Object(l["a"])("Success", "ga-premium"),
                            html: e.data.data.message,
                            confirmButtonText: Object(l["a"])(
                              "Ok",
                              "ga-premium"
                            ),
                            customContainerClass: "monsterinsights-swal",
                          }))
                        : (t.$store.dispatch("$_license/addLicenseNotices"),
                          t.$swal({
                            type: "error",
                            title: Object(l["a"])(
                              "There was an error verifying your license",
                              "ga-premium"
                            ),
                            html: e.data.data.error,
                            confirmButtonText: Object(l["a"])(
                              "Ok",
                              "ga-premium"
                            ),
                            customContainerClass: "monsterinsights-swal",
                          }));
                  });
            },
            refreshLicense: function (t) {
              t.preventDefault();
              var e = this;
              this.$swal({
                type: "info",
                title: Object(l["a"])("Refreshing License", "ga-premium"),
                allowOutsideClick: !1,
                allowEscapeKey: !1,
                allowEnterKey: !1,
                customContainerClass: "monsterinsights-swal",
                onOpen: function () {
                  e.$swal.showLoading();
                },
              }),
                this.$store
                  .dispatch("$_license/validateLicense")
                  .then(function (t) {
                    e.$swal.close(),
                      t.data.success
                        ? (e.$store.dispatch("$_license/removeLicenseNotices"),
                          e.$swal({
                            type: "info",
                            title: Object(l["a"])("Success", "ga-premium"),
                            html: t.data.data.message,
                            confirmButtonText: Object(l["a"])(
                              "Ok",
                              "ga-premium"
                            ),
                            customContainerClass: "monsterinsights-swal",
                          }))
                        : (e.$store.dispatch("$_license/addLicenseNotices"),
                          e.$swal({
                            type: "error",
                            title: Object(l["a"])(
                              "There was an error refreshing your license",
                              "ga-premium"
                            ),
                            html: t.data.data.error,
                            confirmButtonText: Object(l["a"])(
                              "Ok",
                              "ga-premium"
                            ),
                            customContainerClass: "monsterinsights-swal",
                          }));
                  });
            },
            deactivateLicense: function (t) {
              t.preventDefault();
              var e = this;
              this.$swal({
                type: "info",
                title: Object(l["a"])("Deactivating License", "ga-premium"),
                allowOutsideClick: !1,
                allowEscapeKey: !1,
                allowEnterKey: !1,
                customContainerClass: "monsterinsights-swal",
                onOpen: function () {
                  e.$swal.showLoading();
                },
              }),
                this.$store
                  .dispatch("$_license/deactivateLicense")
                  .then(function (t) {
                    e.$swal.close(),
                      t.data.success
                        ? e.$swal({
                            type: "info",
                            title: Object(l["a"])("Success", "ga-premium"),
                            html: t.data.data.message,
                            confirmButtonText: Object(l["a"])(
                              "Ok",
                              "ga-premium"
                            ),
                            customContainerClass: "monsterinsights-swal",
                          })
                        : e.$swal({
                            type: "error",
                            title: Object(l["a"])(
                              "There was an error deactivating your license",
                              "ga-premium"
                            ),
                            html: t.data.data.error,
                            confirmButtonText: Object(l["a"])(
                              "Ok",
                              "ga-premium"
                            ),
                            customContainerClass: "monsterinsights-swal",
                          });
                  });
            },
          },
        },
        _ = g,
        b = n("2877"),
        v = Object(b["a"])(_, o, a, !1, null, null, null),
        y = v.exports,
        w = {
          name: "SettingsInputLicense",
          components: { SettingsInputLicenseSite: y },
          data: function () {
            return { is_network: this.$mi.network };
          },
          methods: {
            forwardStart: function () {
              this.$emit("verify-license-start");
            },
            forwardEnd: function () {
              this.$emit("verify-license-end");
            },
          },
        },
        O = w,
        C = Object(b["a"])(O, i, s, !1, null, null, null);
      e["a"] = C.exports;
    },
    4360: function (t, e, n) {
      "use strict";
      var i = n("2b0e"),
        s = n("2f62"),
        o = (n("d3b7"), n("bc3a")),
        a = n.n(o),
        r = n("561c"),
        c = function () {
          return new Promise(function (t) {
            var e = i["a"].prototype.$mi.ajax,
              n = new FormData();
            n.append("action", "monsterinsights_vue_get_license"),
              n.append("nonce", i["a"].prototype.$mi.nonce),
              a.a
                .post(e, n)
                .then(function (e) {
                  t(e.data);
                })
                .catch(function (t) {
                  if (t.response) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't load license details. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    allowOutsideClick: !0,
                    allowEscapeKey: !0,
                    title: Object(r["a"])(
                      "Error loading license details",
                      "ga-premium"
                    ),
                    html: t.message,
                  });
                });
          });
        },
        l = function (t, e) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return new Promise(function (s) {
            var o = new FormData();
            o.append("action", "monsterinsights_verify_license"),
              o.append("nonce", i["a"].prototype.$mi.nonce),
              o.append("license", t),
              n && o.append("network", !0),
              a.a
                .post(i["a"].prototype.$mi.ajax, o)
                .then(function (t) {
                  t.data.success &&
                    (n
                      ? e.commit(
                          "LICENSE_NETWORK_TYPE_UPDATED",
                          t.data.data.license_type
                        )
                      : e.commit(
                          "LICENSE_TYPE_UPDATED",
                          t.data.data.license_type
                        ),
                    e.dispatch("$_addons/getAddons", "", { root: !0 })),
                    s(t);
                })
                .catch(function (t) {
                  if (t.response) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't verify the license. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        u = function (t) {
          return new Promise(function (e) {
            var n = new FormData();
            n.append("action", "monsterinsights_validate_license"),
              n.append("nonce", i["a"].prototype.$mi.nonce),
              t && n.append("network", !0),
              a.a
                .post(i["a"].prototype.$mi.ajax, n)
                .then(function (t) {
                  e(t);
                })
                .catch(function (t) {
                  if (t.response) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't validate the license. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        p = function (t, e) {
          return new Promise(function (n) {
            var s = new FormData(),
              o = e ? t.state.license_network.key : t.state.license.key;
            s.append("action", "monsterinsights_deactivate_license"),
              s.append("nonce", i["a"].prototype.$mi.nonce),
              s.append("license", o),
              e && s.append("network", !0),
              a.a
                .post(i["a"].prototype.$mi.ajax, s)
                .then(function (i) {
                  i.data.success &&
                    (e
                      ? (t.commit("LICENSE_NETWORK_KEY_UPDATED", ""),
                        t.commit("LICENSE_NETWORK_TYPE_UPDATED", ""))
                      : (t.commit("LICENSE_KEY_UPDATED", ""),
                        t.commit("LICENSE_TYPE_UPDATED", ""))),
                    n(i);
                })
                .catch(function (t) {
                  if (t.response) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't deactivate the license. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        d = function (t) {
          return new Promise(function (e) {
            var n = new FormData();
            n.append("action", "monsterinsights_connect_url"),
              n.append("nonce", i["a"].prototype.$mi.nonce),
              n.append("network", i["a"].prototype.$mi.network),
              n.append("key", t),
              a.a
                .post(i["a"].prototype.$mi.ajax, n)
                .then(function (t) {
                  t.data && e(t.data);
                })
                .catch(function (t) {
                  if ((e(!1), t.response)) {
                    var n = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't upgrade to PRO please try again. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        n.status,
                        n.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        m = {
          fetchLicense: c,
          verifyLicense: l,
          validateLicense: u,
          deactivateLicense: p,
          getUpgradeLink: d,
        },
        h = n("f7fe"),
        f = n.n(h),
        g = function (t) {
          var e = m.fetchLicense();
          e.then(function (e) {
            e.network && t.commit("LICENSE_NETWORK_UPDATED", e.network),
              e.site && t.commit("LICENSE_UPDATED", e.site),
              k(t);
          }).catch(function (t) {
            console.error(t);
          });
        },
        _ = function (t, e) {
          return m.verifyLicense(e, t);
        },
        b = function (t, e) {
          return t.commit("LICENSE_KEY_UPDATED", e), y(e, t);
        },
        v = function (t, e) {
          return t.commit("LICENSE_NETWORK_KEY_UPDATED", e), y(e, t, !0);
        },
        y = f()(m.verifyLicense, 500, { leading: !0 }),
        w = function (t, e) {
          return m.validateLicense(e);
        },
        O = function (t) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return m.deactivateLicense(t, e);
        },
        C = function (t) {
          t.dispatch("$_app/removeNotice", "license_expired", { root: !0 }),
            t.dispatch("$_app/removeNotice", "license_disabled", { root: !0 }),
            t.dispatch("$_app/removeNotice", "license_invalid", { root: !0 });
        },
        k = function (t) {
          t.state.license.is_expired || t.state.license_network.is_expired
            ? t.dispatch(
                "$_app/addNotice",
                {
                  id: "license_expired",
                  content: Object(r["d"])(
                    Object(r["a"])(
                      "Your license key for MonsterInsights has expired. %1$sPlease click here to renew your license key.%2$s",
                      "ga-premium"
                    ),
                    '<a target="blank" href="' +
                      i["a"].prototype.$getUrl(
                        "admin-notices",
                        "expired-license",
                        "https://www.monsterinsights.com/login/"
                      ) +
                      '">',
                    "</a>"
                  ),
                  type: "error",
                },
                { root: !0 }
              )
            : t.state.license.is_disabled || t.state.license_network.is_disabled
            ? t.dispatch(
                "$_app/addNotice",
                {
                  id: "license_disabled",
                  content: Object(r["a"])(
                    "Your license key for MonsterInsights has been disabled. Please use a different key.",
                    "ga-premium"
                  ),
                  type: "error",
                },
                { root: !0 }
              )
            : (t.state.license.is_invalid ||
                t.state.license_network.is_invalid) &&
              t.dispatch(
                "$_app/addNotice",
                {
                  id: "license_invalid",
                  content: Object(r["a"])(
                    "Your license key for MonsterInsights is invalid. The key no longer exists or the user associated with the key has been deleted. Please use a different key.",
                    "ga-premium"
                  ),
                  type: "error",
                },
                { root: !0 }
              );
        },
        $ = {
          getLicense: g,
          updateLicense: b,
          verifyLicense: _,
          updateNetworkLicense: v,
          validateLicense: w,
          deactivateLicense: O,
          removeLicenseNotices: C,
          addLicenseNotices: k,
        },
        j = function (t) {
          return t.license;
        },
        x = function (t) {
          return t.license_network;
        },
        P = { license: j, license_network: x },
        E = function (t, e) {
          t.license = e;
        },
        T = function (t, e) {
          t.license_network = e;
        },
        S = function (t, e) {
          t.license.key = e;
        },
        D = function (t, e) {
          t.license.type = e;
        },
        A = function (t, e) {
          t.license_network.key = e;
        },
        L = function (t, e) {
          t.license_network.type = e;
        },
        N = {
          LICENSE_UPDATED: E,
          LICENSE_NETWORK_UPDATED: T,
          LICENSE_KEY_UPDATED: S,
          LICENSE_TYPE_UPDATED: D,
          LICENSE_NETWORK_KEY_UPDATED: A,
          LICENSE_NETWORK_TYPE_UPDATED: L,
        },
        I = {
          license: {
            key: "",
            type: "",
            is_expired: !1,
            is_disabled: !1,
            is_invalid: !0,
          },
          license_network: {
            key: "",
            type: "",
            is_expired: !1,
            is_disabled: !1,
            is_invalid: !0,
          },
        },
        M = { namespaced: !0, state: I, actions: $, getters: P, mutations: N },
        R = function () {
          return new Promise(function (t) {
            var e = new FormData();
            e.append("action", "monsterinsights_vue_get_profile"),
              e.append("nonce", i["a"].prototype.$mi.nonce),
              a.a
                .post(i["a"].prototype.$mi.ajax, e)
                .then(function (e) {
                  t(e.data);
                })
                .catch(function (t) {
                  if (t.response) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't load authentication details. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        U = function (t) {
          return new Promise(function (e) {
            var n = new FormData();
            n.append("action", "monsterinsights_maybe_authenticate"),
              n.append("nonce", i["a"].prototype.$mi.nonce),
              t && n.append("isnetwork", !0),
              a.a
                .post(i["a"].prototype.$mi.ajax, n)
                .then(function (t) {
                  e(t.data);
                })
                .catch(function (t) {
                  if (t.response) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't authenticate. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        B = function (t) {
          return new Promise(function (e) {
            var n = new FormData();
            n.append("action", "monsterinsights_maybe_reauthenticate"),
              n.append("nonce", i["a"].prototype.$mi.nonce),
              t && n.append("isnetwork", !0),
              a.a
                .post(i["a"].prototype.$mi.ajax, n)
                .then(function (t) {
                  e(t.data);
                })
                .catch(function (t) {
                  if (t.response) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't reauthenticate. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        H = function (t) {
          return new Promise(function (e) {
            var n = new FormData();
            n.append("action", "monsterinsights_maybe_verify"),
              n.append("nonce", i["a"].prototype.$mi.nonce),
              n.append("isnetwork", t),
              a.a
                .post(i["a"].prototype.$mi.ajax, n)
                .then(function (t) {
                  e(t.data);
                })
                .catch(function (t) {
                  if (t.response) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't verify credentials. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        Y = function (t, e, n) {
          return new Promise(function (s) {
            var o = new FormData();
            o.append("action", "monsterinsights_maybe_delete"),
              o.append("nonce", i["a"].prototype.$mi.nonce),
              o.append("isnetwork", e),
              n && o.append("forcedelete", !0),
              a.a
                .post(i["a"].prototype.$mi.ajax, o)
                .then(function (n) {
                  n.data.success && t.commit("AUTH_DELETED", e), s(n.data);
                })
                .catch(function (t) {
                  if (t.response) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't deauthenticate. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        F = function (t, e, n) {
          return new Promise(function (s) {
            var o = new FormData();
            o.append("action", "monsterinsights_update_manual_ua"),
              o.append("manual_ua_code", e),
              o.append("nonce", i["a"].prototype.$mi.nonce),
              n && o.append("isnetwork", n),
              a.a
                .post(i["a"].prototype.$mi.ajax, o)
                .then(function (i) {
                  t.commit("MANUAL_UA_UPDATE", e, n), s(i.data);
                })
                .catch(function (t) {
                  if (t.response) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't save settings. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline. Settings not saved.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        V = {
          fetchAuth: R,
          getAuthRedirect: U,
          getReAuthRedirect: B,
          verifyAuth: H,
          deleteAuth: Y,
          updateManualUa: F,
        },
        W = function (t) {
          var e = V.fetchAuth();
          e.then(function (e) {
            e && t.commit("AUTH_UPDATED", e);
          }).catch(function (t) {
            console.error(t);
          });
        },
        K = function (t, e) {
          return V.getAuthRedirect(e);
        },
        q = function (t, e) {
          return V.getReAuthRedirect(e);
        },
        z = function (t, e) {
          return V.verifyAuth(e);
        },
        G = function (t, e) {
          return V.deleteAuth(t, e.network, e.force);
        },
        Z = function (t, e) {
          return V.updateManualUa(t, e.ua, e.network);
        },
        J = {
          getAuth: W,
          doAuth: K,
          doReAuth: q,
          verifyAuth: z,
          deleteAuth: G,
          updateManualUa: Z,
        },
        X = function (t) {
          return t.auth;
        },
        Q = { auth: X },
        tt = function (t, e) {
          t.auth = e;
        },
        et = function (t, e) {
          e
            ? ((t.auth.network_manual_ua = t.auth.network_ua),
              (t.auth.network_ua = !1),
              (t.auth.network_viewname = !1))
            : ((t.auth.manual_ua = t.auth.ua),
              (t.auth.ua = !1),
              (t.auth.viewname = !1));
        },
        nt = function (t, e, n) {
          n ? (t.auth.network_manual_ua = e) : (t.auth.manual_ua = e);
        },
        it = { AUTH_UPDATED: tt, AUTH_DELETED: et, MANUAL_UA_UPDATE: nt },
        st = {
          auth: { ua: "", viewname: "", network_ua: "", network_viewname: "" },
        },
        ot = {
          namespaced: !0,
          state: st,
          actions: J,
          getters: Q,
          mutations: it,
        },
        at =
          (n("c975"),
          function () {
            return new Promise(function (t) {
              var e = new FormData();
              e.append("action", "monsterinsights_vue_get_addons"),
                e.append("network", i["a"].prototype.$mi.network),
                e.append("nonce", i["a"].prototype.$mi.nonce),
                a.a.post(i["a"].prototype.$mi.ajax, e).then(function (e) {
                  t(e.data);
                });
            });
          }),
        rt = function (t, e) {
          return new Promise(function (n, s) {
            var o = new FormData();
            o.append("action", "monsterinsights_install_addon"),
              o.append("nonce", i["a"].prototype.$mi.install_nonce),
              o.append("plugin", e.url),
              t.rootState.$_app.ftp_form.hostname &&
                o.append("hostname", t.rootState.$_app.ftp_form.hostname),
              t.rootState.$_app.ftp_form.username &&
                o.append("username", t.rootState.$_app.ftp_form.username),
              t.rootState.$_app.ftp_form.password &&
                o.append("password", t.rootState.$_app.ftp_form.password),
              t.rootState.$_app.ftp_form.connection_type &&
                o.append(
                  "connection_type",
                  t.rootState.$_app.ftp_form.connection_type
                ),
              a.a
                .post(i["a"].prototype.$mi.ajax, o)
                .then(function (s) {
                  s.data.form
                    ? t.commit(
                        "$_app/SHOW_FTP_FORM",
                        { action: "$_addons/installAddon", data: e },
                        { root: !0 }
                      )
                    : s.data.error
                    ? i["a"].prototype.$mi_error_toast({ title: s.data.error })
                    : (t.commit("ADDON_INSTALLED", {
                        slug: e.slug,
                        basename: s.data.plugin,
                      }),
                      lt(t, e)),
                    n(s.data);
                })
                .catch(function (t) {
                  if ((s(t), t.response)) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't install addon. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline. Addon not installed.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        ct = function (t) {
          return new Promise(function (e, n) {
            var s = new FormData(),
              o = i["a"].prototype.$addQueryArg(
                i["a"].prototype.$mi.ajax,
                "page",
                "monsterinsights-onboarding"
              );
            s.append("action", "monsterinsights_onboarding_wpforms_install"),
              s.append("nonce", i["a"].prototype.$mi.install_nonce),
              a.a
                .post(o, s)
                .then(function (n) {
                  n.data.error
                    ? i["a"].prototype.$mi_error_toast({ title: n.data.error })
                    : t.commit("ADDON_INSTALLED", {
                        slug: "wpforms-lite",
                        basename: "",
                      }),
                    e(n.data);
                })
                .catch(function (t) {
                  if ((n(t), t.response)) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't install WPForms. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline. WPForms not installed.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        lt = function (t, e) {
          return new Promise(function (n, s) {
            var o = new FormData();
            o.append("action", "monsterinsights_activate_addon"),
              o.append("nonce", i["a"].prototype.$mi.activate_nonce),
              o.append("isnetwork", i["a"].prototype.$mi.network),
              o.append("plugin", e.basename),
              a.a
                .post(i["a"].prototype.$mi.ajax, o)
                .then(function (s) {
                  s.data.error
                    ? i["a"].prototype.$mi_error_toast({ title: s.data.error })
                    : t.commit("ADDON_ACTIVATED", e.slug),
                    n(s.data);
                })
                .catch(function (t) {
                  if ((s(t), t.response)) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't activate addon. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline. Addon not activated.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        ut = function (t, e) {
          return new Promise(function (n, s) {
            var o = new FormData();
            o.append("action", "monsterinsights_deactivate_addon"),
              o.append("nonce", i["a"].prototype.$mi.deactivate_nonce),
              o.append("isnetwork", i["a"].prototype.$mi.network),
              o.append("plugin", e.basename),
              a.a
                .post(i["a"].prototype.$mi.ajax, o)
                .then(function (s) {
                  s.data.error
                    ? i["a"].prototype.$mi_error_toast({ title: s.data.error })
                    : t.commit("ADDON_DEACTIVATED", e.slug),
                    n(s.data);
                })
                .catch(function (t) {
                  if ((s(t), t.response)) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't deactivate addon. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline. Addon not deactivated.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        pt = function (t, e) {
          return new Promise(function (n, s) {
            var o = new FormData();
            o.append("action", "monsterinsights_vue_install_plugin"),
              o.append("slug", e),
              o.append("nonce", i["a"].prototype.$mi.nonce),
              a.a
                .post(i["a"].prototype.$mi.ajax, o)
                .then(function (s) {
                  s.data.error
                    ? i["a"].prototype.$mi_error_toast({ title: s.data.error })
                    : t.commit("ADDON_INSTALLED", { slug: e }),
                    n(s.data);
                })
                .catch(function (t) {
                  if ((s(t), t.response)) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't install plugin. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "You appear to be offline. Plugin not installed.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        dt = {
          fetchAddons: at,
          installAddon: rt,
          activateAddon: lt,
          deactivateAddon: ut,
          installWPForms: ct,
          installPlugin: pt,
        },
        mt = function (t) {
          return new Promise(function (e) {
            var n = dt.fetchAddons();
            n.then(function (n) {
              n && (t.commit("ADDONS_UPDATED", n), ht(t)), e(!0);
            }).catch(function (t) {
              console.error(t), e(!1);
            });
          });
        },
        ht = function (t) {
          if (
            (t.dispatch("$_app/removeNotice", "google_amp_addon", { root: !0 }),
            t.dispatch("$_app/removeNotice", "instant_articles_addon", {
              root: !0,
            }),
            ft(t, "amp") && !ft(t, "google_amp"))
          ) {
            var e = t.rootGetters["$_app/mi"].install_amp_url,
              n =
                e.indexOf("activate") > 0
                  ? Object(r["a"])("Activate", "ga-premium")
                  : Object(r["a"])("Install", "ga-premium"),
              s = Object(r["d"])(
                Object(r["a"])(
                  "In order for the MonsterInsights Google AMP addon to work properly, please ask your webmaster to install the WordPress AMP plugin by Automattic. %1$sLearn More%2$s",
                  "ga-premium"
                ),
                '<a target="_blank" href="' +
                  i["a"].prototype.$getUrl(
                    "settings-panel",
                    "amp-plugin-notice",
                    "https://www.monsterinsights.com/docs/how-to-get-started-with-the-google-amp-addon/"
                  ) +
                  '">',
                "</a>"
              );
            i["a"].prototype.$mi.install_plugins &&
              (s = Object(r["d"])(
                Object(r["a"])(
                  "In order for the MonsterInsights Google AMP addon to work properly, you need to install the WordPress AMP plugin by Automattic. %1$s%2$s Plugin%3$s | %4$sLearn More%5$s",
                  "ga-premium"
                ),
                '<a href="' + e + '">',
                n,
                "</a>",
                '<a target="_blank" href="' +
                  i["a"].prototype.$getUrl(
                    "settings-panel",
                    "amp-plugin-notice",
                    "https://www.monsterinsights.com/docs/how-to-get-started-with-the-google-amp-addon/"
                  ) +
                  '">',
                "</a>"
              )),
              t.dispatch(
                "$_app/addNotice",
                { id: "google_amp_addon", content: s, type: "error" },
                { root: !0 }
              );
          }
          if (
            ft(t, "facebook-instant-articles") &&
            !ft(t, "instant_articles")
          ) {
            var o = t.rootGetters["$_app/mi"].install_fbia_url,
              a =
                o.indexOf("activate") > 0
                  ? Object(r["a"])("Activate", "ga-premium")
                  : Object(r["a"])("Install", "ga-premium"),
              c = Object(r["d"])(
                Object(r["a"])(
                  "In order for the MonsterInsights Instant Articles addon to work properly, please ask your webmaster to install the Instant Articles for WP plugin by Automattic version 3.3.5 or newer. %1$sLearn More%2$s",
                  "ga-premium"
                ),
                '<a target="_blank" href="' +
                  i["a"].prototype.$getUrl(
                    "settings-panel",
                    "fbia-plugin-notice",
                    "https://www.monsterinsights.com/docs/how-to-get-started-with-the-facebook-instant-articles-addon/"
                  ) +
                  '">',
                "</a>"
              );
            i["a"].prototype.$mi.install_plugins &&
              (c = Object(r["d"])(
                Object(r["a"])(
                  "In order for the MonsterInsights Instant Articles addon to work properly, you need to install the Instant Articles for WP plugin by Automattic version 3.3.5 or newer. %1$s%2$s Plugin%3$s | %4$sLearn More%5$s",
                  "ga-premium"
                ),
                '<a href="' + o + '">',
                a,
                "</a>",
                '<a target="_blank" href="' +
                  i["a"].prototype.$getUrl(
                    "settings-panel",
                    "fbia-plugin-notice",
                    "https://www.monsterinsights.com/docs/how-to-get-started-with-the-facebook-instant-articles-addon/"
                  ) +
                  '">',
                "</a>"
              )),
              t.dispatch(
                "$_app/addNotice",
                { id: "instant_articles_addon", content: c, type: "error" },
                { root: !0 }
              );
          }
        },
        ft = function (t, e) {
          return !!t.state.addons[e] && t.state.addons[e].active;
        },
        gt = function (t, e) {
          return dt.installAddon(t, e);
        },
        _t = function (t, e) {
          return dt.installPlugin(t, e.slug);
        },
        bt = function (t, e) {
          return dt.activateAddon(t, e).then(function () {
            ht(t);
          });
        },
        vt = function (t, e) {
          return dt.deactivateAddon(t, e).then(function () {
            ht(t);
          });
        },
        yt = function (t) {
          return dt.installWPForms(t);
        },
        wt = {
          getAddons: mt,
          installAddon: gt,
          activateAddon: bt,
          deactivateAddon: vt,
          installWPForms: yt,
          installPlugin: _t,
        },
        Ot =
          (n("4e82"),
          n("ac1f"),
          n("841c"),
          function (t) {
            return t.addons;
          }),
        Ct = function (t) {
          return t.sort;
        },
        kt = function (t) {
          return t.search;
        },
        $t = { addons: Ot, sort: Ct, search: kt },
        jt = function (t, e) {
          i["a"].set(t, "addons", e);
        },
        xt = function (t, e) {
          t.addons[e].active = !0;
        },
        Pt = function (t, e) {
          t.addons[e].active = !1;
        },
        Et = function (t, e) {
          (t.addons[e.slug].installed = !0),
            e.basename && (t.addons[e.slug].basename = e.basename);
        },
        Tt = function (t, e) {
          t.sort = e;
        },
        St = function (t, e) {
          t.search = e;
        },
        Dt = {
          ADDONS_UPDATED: jt,
          ADDON_ACTIVATED: xt,
          ADDON_DEACTIVATED: Pt,
          ADDON_INSTALLED: Et,
          UPDATE_SORT: Tt,
          UPDATE_SEARCH: St,
        },
        At = { addons: {}, search: "" },
        Lt = {
          namespaced: !0,
          state: At,
          actions: wt,
          getters: $t,
          mutations: Dt,
        },
        Nt = n("7220"),
        It = function () {
          return new Promise(function (t) {
            var e = i["a"].prototype.$mi.ajax,
              n = new FormData();
            n.append("action", "monsterinsights_vue_get_notifications"),
              n.append("nonce", i["a"].prototype.$mi.nonce),
              a.a
                .post(e, n)
                .then(function (e) {
                  if (!e.data.success) return !1;
                  t(e.data.data);
                })
                .catch(function () {
                  return !1;
                });
          });
        },
        Mt = function (t) {
          return new Promise(function (e) {
            var n = i["a"].prototype.$mi.ajax,
              s = new FormData();
            s.append("action", "monsterinsights_notification_dismiss"),
              s.append("nonce", i["a"].prototype.$mi.nonce),
              s.append("id", t),
              a.a
                .post(n, s)
                .then(function (t) {
                  e(t.data);
                })
                .catch(function () {
                  return !1;
                });
          });
        },
        Rt = { fetchNotifications: It, dismissNotification: Mt },
        Ut = function (t) {
          Rt.fetchNotifications()
            .then(function (e) {
              e.notifications &&
                e.dismissed &&
                t.commit("NOTIFICATIONS_UPDATED", e),
                e.view_url && t.commit("NOTIFICATIONS_URL_UPDATED", e.view_url),
                e.sidebar_url &&
                  t.commit("NOTIFICATIONS_SIDEBAR_URL_UPDATED", e.sidebar_url);
            })
            .catch(function (t) {
              console.error(t);
            });
        },
        Bt = function (t, e) {
          return new Promise(function (n, i) {
            Rt.dismissNotification(e)
              .then(function (i) {
                i && (t.commit("NOTIFICATION_DISMISSED", e), n(!0));
              })
              .catch(function (t) {
                console.error(t), i(t);
              });
          });
        },
        Ht = { getNotifications: Ut, dismissNotification: Bt },
        Yt = function (t) {
          return t.notifications;
        },
        Ft = function (t) {
          return t.dismissed;
        },
        Vt = function (t) {
          return t.view_url;
        },
        Wt = function (t) {
          return t.sidebar_url;
        },
        Kt = {
          notifications: Yt,
          dismissed: Ft,
          view_url: Vt,
          sidebar_url: Wt,
        },
        qt =
          (n("4160"),
          n("a434"),
          n("159b"),
          function (t, e) {
            (t.notifications = e.notifications), (t.dismissed = e.dismissed);
          }),
        zt = function (t, e) {
          t.view_url = e;
        },
        Gt = function (t, e) {
          t.sidebar_url = e;
        },
        Zt = function (t, e) {
          t.notifications.forEach(function (n, i) {
            n.id === e &&
              (t.notifications.splice(i, 1), t.dismissed.splice(0, 0, n)),
              "all" === e && t.dismissed.splice(0, 0, n);
          }),
            "all" === e && (t.notifications = []);
        },
        Jt = {
          NOTIFICATIONS_UPDATED: qt,
          NOTIFICATIONS_URL_UPDATED: zt,
          NOTIFICATIONS_SIDEBAR_URL_UPDATED: Gt,
          NOTIFICATION_DISMISSED: Zt,
        },
        Xt = {
          notifications: [],
          dismissed: [],
          view_url: "",
          sidebar_url: "",
        },
        Qt = {
          namespaced: !0,
          state: Xt,
          actions: Ht,
          getters: Kt,
          mutations: Jt,
        },
        te = function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "inline";
          return new Promise(function (e) {
            var n = i["a"].prototype.$mi.ajax,
              s = new FormData();
            s.append("action", "monsterinsights_get_popular_posts_themes"),
              s.append("nonce", i["a"].prototype.$mi.nonce),
              s.append("type", t),
              a.a
                .post(n, s)
                .then(function (t) {
                  if (!t.data.success) return !1;
                  e(t.data.data);
                })
                .catch(function () {
                  return !1;
                });
          });
        },
        ee = function (t, e) {
          return new Promise(function (t) {
            var n = i["a"].prototype.$mi.ajax,
              s = new FormData();
            s.append(
              "action",
              "monsterinsights_vue_popular_posts_update_theme_setting"
            ),
              s.append("nonce", i["a"].prototype.$mi.nonce),
              s.append("type", e.type),
              s.append("theme", e.theme),
              s.append("object", e.object),
              s.append("key", e.key),
              s.append("value", e.value),
              a.a
                .post(n, s)
                .then(function (e) {
                  t(e.data);
                })
                .catch(function (t) {
                  if (t.response) {
                    var e = t.response;
                    return i["a"].prototype.$mi_error_toast({
                      title: Object(r["d"])(
                        Object(r["a"])(
                          "Can't save settings. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  i["a"].prototype.$mi_error_toast({
                    title: Object(r["a"])(
                      "Network error encountered. Settings not saved.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        ne = { fetchThemes: te, updateThemeSetting: ee },
        ie = function (t, e) {
          ne.fetchThemes(e)
            .then(function (n) {
              n.themes &&
                t.commit("THEMES_UPDATED", { themes: n.themes, type: e });
            })
            .catch(function (t) {
              console.error(t);
            });
        },
        se = function (t, e) {
          t.commit("THEME_STYLE_UPDATE", e),
            t.commit("$_settings/SETTINGS_SAVE_START", !0, { root: !0 });
          var n = ne.updateThemeSetting(t, e);
          return (
            n.then(function () {
              t.commit("$_settings/SETTINGS_SAVE_END", !0, { root: !0 });
            }),
            n
          );
        },
        oe = function (t, e) {
          e.type &&
            "undefined" !== typeof e.key &&
            t.commit("PREVIEW_UPDATED", e);
        },
        ae = { getThemes: ie, updatePreview: oe, updateThemeSetting: se },
        re = function (t) {
          return t.themes_inline;
        },
        ce = function (t) {
          return t.themes_widget;
        },
        le = function (t) {
          return t.themes_products;
        },
        ue = function (t) {
          return t.theme_preview_inline;
        },
        pe = function (t) {
          return t.theme_preview_widget;
        },
        de = function (t) {
          return t.theme_preview_products;
        },
        me = {
          themes_inline: re,
          themes_widget: ce,
          themes_products: le,
          theme_preview_inline: ue,
          theme_preview_widget: pe,
          theme_preview_products: de,
        },
        he = function (t, e) {
          e.type &&
            "undefined" !== typeof t["themes_" + e.type] &&
            (t["themes_" + e.type] = e.themes);
        },
        fe = function (t, e) {
          e.type &&
            "undefined" !== typeof t["theme_preview_" + e.type] &&
            (t["theme_preview_" + e.type] = e.key);
        },
        ge = function (t, e) {
          e.type &&
            e.theme &&
            e.object &&
            e.key &&
            e.value &&
            "undefined" !== typeof t["themes_" + e.type] &&
            (t["themes_" + e.type][e.theme]["styles"][e.object][e.key] =
              e.value);
        },
        _e = {
          THEMES_UPDATED: he,
          PREVIEW_UPDATED: fe,
          THEME_STYLE_UPDATE: ge,
        },
        be = {
          themes_inline: {},
          themes_widget: {},
          themes_products: {},
          theme_preview_inline: "",
          theme_preview_widget: "",
          theme_preview_products: "",
        },
        ve = {
          namespaced: !0,
          state: be,
          actions: ae,
          getters: me,
          mutations: _e,
        },
        ye = function (t) {
          t.commit("INIT");
        },
        we = function (t) {
          t.commit("BLOCK_APP");
        },
        Oe = function (t) {
          t.commit("UNBLOCK_APP");
        },
        Ce = function (t, e) {
          t.commit("ADD_NOTICE", e);
        },
        ke = function (t, e) {
          t.commit("REMOVE_NOTICE", e);
        },
        $e = function (t) {
          t.commit("RESET_NOTICES");
        },
        je = {
          init: ye,
          block: we,
          unblock: Oe,
          addNotice: Ce,
          removeNotice: ke,
          resetNotices: $e,
        },
        xe = function (t) {
          return t.blocked;
        },
        Pe = function (t) {
          return t.notices;
        },
        Ee = function (t) {
          return t.mi;
        },
        Te = function (t) {
          return t.ftp_form;
        },
        Se = { blocked: xe, notices: Pe, mi: Ee, ftp_form: Te },
        De = function () {},
        Ae = function (t) {
          t.blocked = !0;
        },
        Le = function (t) {
          t.blocked = !1;
        },
        Ne = function (t, e) {
          e.id && i["a"].set(t.notices, e.id, e);
        },
        Ie = function (t, e) {
          t.notices[e] && i["a"].delete(t.notices, e);
        },
        Me = function (t) {
          t.notices = {};
        },
        Re = function (t, e) {
          t.ftp_form.hostname = e;
        },
        Ue = function (t, e) {
          t.ftp_form.username = e;
        },
        Be = function (t, e) {
          t.ftp_form.password = e;
        },
        He = function (t, e) {
          t.ftp_form.connection_type = e;
        },
        Ye = function (t, e) {
          (t.ftp_form.visible = !0),
            (t.ftp_form.action = e.action),
            (t.ftp_form.data = e.data);
        },
        Fe = function (t) {
          t.ftp_form.visible = !1;
        },
        Ve = {
          INIT: De,
          BLOCK_APP: Ae,
          UNBLOCK_APP: Le,
          ADD_NOTICE: Ne,
          REMOVE_NOTICE: Ie,
          RESET_NOTICES: Me,
          UPDATE_HOSTNAME: Re,
          UPDATE_USERNAME: Ue,
          UPDATE_PASSWORD: Be,
          UPDATE_CONNECTION_TYPE: He,
          SHOW_FTP_FORM: Ye,
          HIDE_FTP_FORM: Fe,
        },
        We = {
          blocked: !1,
          notices: {},
          mi: window.monsterinsights ? window.monsterinsights : {},
          ftp_form: {
            hostname: "",
            username: "",
            password: "",
            connection_type: "ftp",
            visible: !1,
            action: "",
            data: {},
          },
        },
        Ke = {
          namespaced: !0,
          state: We,
          actions: je,
          getters: Se,
          mutations: Ve,
        },
        qe = function (t) {
          t.subscribe(function (e, n) {
            if ("$_app/INIT" === e.type) {
              var i = n["$_app"].mi.versions;
              i.php_version_below_54
                ? t.commit("$_app/ADD_NOTICE", {
                    title: Object(r["a"])(
                      "Yikes! PHP Update Required",
                      "ga-premium"
                    ),
                    content: Object(r["d"])(
                      Object(r["a"])(
                        "MonsterInsights has detected that your site is running an outdated, insecure version of PHP (%1$s), which could be putting your site at risk for being hacked. WordPress stopped supporting your PHP version in April, 2019. Updating to the recommended version (PHP %2$s) only takes a few minutes and will make your website significantly faster and more secure.",
                        "ga-premium"
                      ),
                      i.php_version,
                      "7.4"
                    ),
                    type: "error",
                    button: {
                      enabled: !0,
                      text: Object(r["a"])(
                        "Learn more about updating PHP",
                        "ga-premium"
                      ),
                      link: i.php_update_link,
                    },
                    dismissable: !0,
                    id: "php_update_54",
                  })
                : i.wp_version_below_46
                ? t.commit("$_app/ADD_NOTICE", {
                    title: Object(r["a"])(
                      "Yikes! WordPress Update Required",
                      "ga-premium"
                    ),
                    content: Object(r["d"])(
                      Object(r["a"])(
                        "MonsterInsights has detected that your site is running an outdated version of WordPress (%s). MonsterInsights will stop supporting WordPress versions lower than 4.9 in 2020.  Updating WordPress takes just a few minutes and will also solve many bugs that exist in your WordPress install.",
                        "ga-premium"
                      ),
                      i.wp_version
                    ),
                    type: "error",
                    button: {
                      enabled: !0,
                      text: Object(r["a"])(
                        "Learn more about updating WordPress",
                        "ga-premium"
                      ),
                      link: i.wp_update_link,
                    },
                    dismissable: !0,
                    id: "wp_update_46",
                  })
                : i.php_version_below_56
                ? t.commit("$_app/ADD_NOTICE", {
                    title: Object(r["a"])(
                      "Yikes! PHP Update Required",
                      "ga-premium"
                    ),
                    content: Object(r["d"])(
                      Object(r["a"])(
                        "MonsterInsights has detected that your site is running an outdated, insecure version of PHP (%1$s), which could be putting your site at risk for being hacked. Updating to the recommended version (PHP %2$s) only takes a few minutes and will make your website significantly faster and more secure.",
                        "ga-premium"
                      ),
                      i.php_version,
                      "7.4"
                    ),
                    type: "error",
                    button: {
                      enabled: !0,
                      text: Object(r["a"])(
                        "Learn more about updating PHP",
                        "ga-premium"
                      ),
                      link: i.php_update_link,
                    },
                    dismissable: !0,
                    id: "php_update_56",
                  })
                : i.wp_version_below_49 &&
                  t.commit("$_app/ADD_NOTICE", {
                    title: Object(r["a"])(
                      "Yikes! WordPress Update Required",
                      "ga-premium"
                    ),
                    content: Object(r["d"])(
                      Object(r["a"])(
                        "MonsterInsights has detected that your site is running an outdated version of WordPress (%s). Updating WordPress takes just a few minutes and will also solve many bugs that exist in your WordPress install.",
                        "ga-premium"
                      ),
                      i.wp_version
                    ),
                    type: "error",
                    button: {
                      enabled: !0,
                      text: Object(r["a"])(
                        "Learn more about updating WordPress",
                        "ga-premium"
                      ),
                      link: i.wp_update_link,
                    },
                    dismissable: !0,
                    id: "wp_update_49",
                  });
            }
          });
        },
        ze = qe;
      i["a"].use(s["a"]);
      var Ge = [ze];
      e["a"] = new s["a"].Store({
        modules: {
          $_app: Ke,
          $_license: M,
          $_auth: ot,
          $_addons: Lt,
          $_settings: Nt["a"],
          $_notifications: Qt,
          $_popularposts: ve,
        },
        plugins: Ge,
      });
    },
    "470e": function (t, e, n) {
      "use strict";
      var i = n("a1d2"),
        s = n.n(i);
      s.a;
    },
    "48c7": function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return t.noauth
            ? t._e()
            : n("div", { staticClass: "monsterinsights-upsell-overlay" }, [
                n("div", { staticClass: "monsterinsights-upsell-top" }, [
                  t.upsellData.title
                    ? n("h3", {
                        domProps: { textContent: t._s(t.upsellData.title) },
                      })
                    : t._e(),
                  t.upsellData.subtitle
                    ? n("p", {
                        staticClass: "monsterinsights-upsell-subtitle",
                        domProps: { textContent: t._s(t.upsellData.subtitle) },
                      })
                    : t._e(),
                ]),
                n("div", { staticClass: "monsterinsights-upsell-content" }, [
                  t.upsellData.features
                    ? n(
                        "ul",
                        t._l(t.upsellData.features, function (e, i) {
                          return n("li", {
                            key: i,
                            domProps: { textContent: t._s(e) },
                          });
                        }),
                        0
                      )
                    : t._e(),
                  n("div", { staticClass: "monsterinsights-center" }, [
                    n("a", {
                      staticClass: "monsterinsights-button",
                      attrs: { href: t.upgrade_link, target: "_blank" },
                      domProps: { textContent: t._s(t.text_upsell_button) },
                    }),
                  ]),
                ]),
              ]);
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
        a = n("2f62"),
        r = n("561c");
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                Object(o["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var u = {
          name: "ReportUpsellOverlay",
          props: { report: String },
          data: function () {
            return {
              upgrade_link: this.$getUpgradeUrl("report", this.report),
              text_upsell_button: Object(r["a"])(
                "Upgrade to MonsterInsights Pro",
                "ga-premium"
              ),
            };
          },
          computed: l({}, Object(a["b"])({ noauth: "$_reports/noauth" }), {
            upsellData: function () {
              return this.$mi_get_upsell_content(this.report);
            },
          }),
        },
        p = u,
        d = n("2877"),
        m = Object(d["a"])(p, i, s, !1, null, null, null);
      e["a"] = m.exports;
    },
    4925: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("span", [
            t.canaccess
              ? t._e()
              : n("span", { staticClass: "monsterinsights-pro-pill" }, [
                  t._v("PRO"),
                ]),
          ]);
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
        a = n("2f62"),
        r = n("efb1");
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                Object(o["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var u = {
          name: "PopularPostsProPill",
          props: { level: { type: String, default: "pro" } },
          computed: l(
            {},
            Object(a["b"])({
              license: "$_license/license",
              license_network: "$_license/license_network",
            }),
            {
              licenseType: function () {
                return this.$mi.network
                  ? this.license_network.type
                  : this.license.type;
              },
              canaccess: function () {
                return r["a"].canaccess(this.licenseType, this.level);
              },
            }
          ),
        },
        p = u,
        d = n("2877"),
        m = Object(d["a"])(p, i, s, !1, null, null, null);
      e["a"] = m.exports;
    },
    "4bdc": function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "monsterinsights-navigation-bar" }, [
            n(
              "div",
              { staticClass: "monsterinsights-container" },
              [t._t("default")],
              2
            ),
          ]);
        },
        s = [],
        o = { name: "TheAppNavigation" },
        a = o,
        r = n("2877"),
        c = Object(r["a"])(a, i, s, !1, null, null, null);
      e["a"] = c.exports;
    },
    5443: function (t, e, n) {
      "use strict";
      var i = n("0f8f"),
        s = n.n(i);
      s.a;
    },
    "5eda": function (t, e, n) {},
    "6d70": function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("fieldset", [
            n(
              "div",
              { staticClass: "monsterinsights-settings-input-radio" },
              t._l(t.options, function (e) {
                return n("span", { key: e.value }, [
                  n(
                    "label",
                    {
                      class: t.labelClass(e),
                      attrs: {
                        for:
                          "monsterinsights-settings-radio-" +
                          t.name +
                          "[" +
                          e.value +
                          "]",
                      },
                    },
                    [
                      n("span", {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: t.tooltip_data,
                            expression: "tooltip_data",
                          },
                        ],
                        class: t.titleClass(e.value),
                      }),
                      n("input", {
                        attrs: {
                          id:
                            "monsterinsights-settings-radio-" +
                            t.name +
                            "[" +
                            e.value +
                            "]",
                          type: "radio",
                          name: t.name,
                          autocomplete: "off",
                          readonly:
                            t.disabled ||
                            (e.level && !t.optionAvailable(e.level)),
                        },
                        domProps: {
                          value: e.value,
                          checked: t.isChecked(e.value),
                        },
                        on: { change: t.updateSetting },
                      }),
                      n("span", {
                        staticClass: "monsterinsights-settings-radio-text",
                        domProps: { innerHTML: t._s(e.label) },
                      }),
                      e.level
                        ? n("PopularPostsProPill", {
                            attrs: { level: e.level },
                          })
                        : t._e(),
                    ],
                    1
                  ),
                  t.$slots[e.value] && t.isChecked(e.value)
                    ? n(
                        "span",
                        { staticClass: "monsterinsights-radio-sub-panel" },
                        [t.isChecked(e.value) ? t._t(e.value) : t._e()],
                        2
                      )
                    : t._e(),
                ]);
              }),
              0
            ),
          ]);
        },
        s = [],
        o =
          (n("a4d3"),
          n("4de4"),
          n("4160"),
          n("b0c0"),
          n("e439"),
          n("dbb4"),
          n("b64b"),
          n("159b"),
          n("fc11")),
        a = n("2f62"),
        r = n("4925"),
        c = n("efb1");
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                Object(o["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var p = {
          name: "SettingsInputRadio",
          components: { PopularPostsProPill: r["a"] },
          props: {
            options: Array,
            name: String,
            auth_disabled: { type: Boolean, default: !0 },
          },
          data: function () {
            return { is_loading: !1, has_error: !1 };
          },
          computed: u(
            {},
            Object(a["b"])({
              settings: "$_settings/settings",
              auth: "$_auth/auth",
              license: "$_license/license",
              license_network: "$_license/license_network",
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
              licenseType: function () {
                return this.$mi.network
                  ? this.license_network.type
                  : this.license.type;
              },
            }
          ),
          methods: {
            optionAvailable: function (t) {
              return c["a"].canaccess(this.licenseType, t);
            },
            updateSetting: function (t) {
              var e = this;
              if (this.disabled) return !1;
              this.$emit("change", t.target.value),
                this.$mi_saving_toast({}),
                this.$store
                  .dispatch("$_settings/updateSettings", {
                    name: this.name,
                    value: t.target.value,
                  })
                  .then(function (n) {
                    n.success
                      ? (e.$emit("updated", t.target.value),
                        e.$mi_success_toast({}))
                      : e.$mi_error_toast({});
                  });
            },
            titleClass: function (t) {
              var e = "monsterinsights-styled-radio";
              return (
                this.isChecked(t) &&
                  (e += " monsterinsights-styled-radio-checked"),
                e
              );
            },
            labelClass: function (t) {
              var e = "";
              return (
                this.isChecked(t.value) &&
                  (e += " monsterinsights-styled-radio-label-checked"),
                t.level &&
                  !this.optionAvailable(t.level) &&
                  (e += " monsterinsights-styled-radio-label-disabled"),
                e
              );
            },
            isChecked: function (t) {
              return this.settings[this.name]
                ? t === this.settings[this.name]
                : t === this.options[0].value;
            },
          },
        },
        d = p,
        m = n("2877"),
        h = Object(m["a"])(d, i, s, !1, null, null, null);
      e["a"] = h.exports;
    },
    "6ffa": function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "monsterinsights-settings-input-repeater" },
            [
              t.rows.length
                ? n(
                    "div",
                    {
                      staticClass:
                        "monsterinsights-settings-input-repeater-labels monsterinsights-settings-input-repeater-row",
                    },
                    t._l(t.structure, function (e, i) {
                      return n("label", {
                        key: i,
                        domProps: { textContent: t._s(e.label) },
                      });
                    }),
                    0
                  )
                : t._e(),
              t._l(t.rows, function (e, i) {
                return [
                  n(
                    "div",
                    {
                      key: i,
                      staticClass:
                        "monsterinsights-settings-input-repeater-row",
                    },
                    [
                      t._l(t.structure, function (e, s) {
                        return n(
                          "span",
                          { key: s, class: t.errorClass(i, e.name) },
                          [
                            n("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.rows[i][e.name],
                                  expression: "rows[index][input.name]",
                                },
                              ],
                              attrs: { type: "text", readonly: t.disabled },
                              domProps: { value: t.rows[i][e.name] },
                              on: {
                                change: function (n) {
                                  return t.updateSetting(!1, e.pattern);
                                },
                                input: function (n) {
                                  n.target.composing ||
                                    t.$set(t.rows[i], e.name, n.target.value);
                                },
                              },
                            }),
                          ]
                        );
                      }),
                      n(
                        "button",
                        {
                          attrs: { title: t.text_remove_row },
                          on: {
                            click: function (e) {
                              return e.preventDefault(), t.removeRow(i);
                            },
                          },
                        },
                        [n("i", { class: t.delete_icon })]
                      ),
                    ],
                    2
                  ),
                  t.has_errors[i]
                    ? n(
                        "label",
                        {
                          key: i + "error",
                          staticClass: "monsterinsights-error",
                        },
                        [
                          n("i", {
                            staticClass: "monstericon-warning-triangle",
                          }),
                          n("span", {
                            domProps: { innerHTML: t._s(t.has_errors[i]) },
                          }),
                        ]
                      )
                    : t._e(),
                ];
              }),
              t.show_max_item_error
                ? n("label", { staticClass: "monsterinsights-error" }, [
                    n("i", { staticClass: "monstericon-warning-triangle" }),
                    n("span", {
                      domProps: { innerHTML: t._s(t.max_item_error_notice) },
                    }),
                  ])
                : t._e(),
              t.show_min_item_error
                ? n("label", { staticClass: "monsterinsights-error" }, [
                    n("i", { staticClass: "monstericon-warning-triangle" }),
                    n("span", {
                      domProps: { innerHTML: t._s(t.min_item_error_notice) },
                    }),
                  ])
                : t._e(),
              n("button", {
                directives: [
                  {
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: t.tooltip_data,
                    expression: "tooltip_data",
                  },
                ],
                class: t.button_class,
                domProps: { textContent: t._s(t.text_add_path) },
                on: {
                  click: function (e) {
                    return e.preventDefault(), t.addRow(e);
                  },
                },
              }),
            ],
            2
          );
        },
        s = [],
        o =
          (n("a4d3"),
          n("4de4"),
          n("4160"),
          n("c975"),
          n("a434"),
          n("b0c0"),
          n("a9e3"),
          n("e439"),
          n("dbb4"),
          n("b64b"),
          n("159b"),
          n("fc11")),
        a = n("2b0e"),
        r = n("561c"),
        c = n("2f62");
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                Object(o["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var p = {
          name: "SettingsInputRepeater",
          props: {
            structure: Array,
            name: String,
            text_add: String,
            delete_icon: { type: String, default: "monstericon-times-circle" },
            max_items: { type: Number, default: -1 },
            min_items: { type: Number, default: -1 },
            max_item_error_notice: {
              type: String,
              default: Object(r["a"])(
                "You can add maximum 5 items.",
                "ga-premium"
              ),
            },
            min_item_error_notice: {
              type: String,
              default: Object(r["a"])(
                "At least 0 item required.",
                "ga-premium"
              ),
            },
          },
          data: function () {
            return {
              text_add_path: this.text_add
                ? this.text_add
                : Object(r["a"])("Add Another Link Path", "ga-premium"),
              text_remove_row: Object(r["a"])("Remove row", "ga-premium"),
              has_errors: [],
              show_max_item_error: !1,
              show_min_item_error: !1,
            };
          },
          computed: u(
            {},
            Object(c["b"])({
              settings: "$_settings/settings",
              auth: "$_auth/auth",
            }),
            {
              rows: {
                get: function () {
                  return (
                    this.settings[this.name] ||
                      a["a"].set(this.settings, this.name, []),
                    JSON.parse(JSON.stringify(this.settings[this.name]))
                  );
                },
                set: function () {
                  this.updateSetting(!1);
                },
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
              tooltip_data: function () {
                return {
                  content: this.has_ua ? "" : this.$mi_need_to_auth,
                  autoHide: !1,
                  trigger: "hover focus click",
                };
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
            updateSetting: function (t) {
              var e = this;
              return (
                !this.disabled &&
                !(!t && !this.validateSettings()) &&
                (this.$mi_saving_toast({}),
                void this.$store
                  .dispatch("$_settings/updateSettings", {
                    name: this.name,
                    value: this.rows,
                  })
                  .then(function (t) {
                    t.success ? e.$mi_success_toast({}) : e.$mi_error_toast({});
                  }))
              );
            },
            addRow: function () {
              var t = {};
              if (this.rows.length !== this.max_items) {
                for (var e in this.structure) t[this.structure[e]["name"]] = "";
                this.rows.push(t),
                  this.rows.length !== this.min_items &&
                    (this.show_min_item_error = !1),
                  this.updateSetting(!0);
              } else this.show_max_item_error = !0;
            },
            removeRow: function (t) {
              this.rows.length !== this.min_items
                ? (this.rows && this.rows instanceof Array
                    ? this.rows.splice(t, 1)
                    : (this.rows = ""),
                  this.rows.length !== this.max_items &&
                    (this.show_max_item_error = !1),
                  this.updateSetting())
                : (this.show_min_item_error = !0);
            },
            validateSettings: function () {
              var t = this;
              this.has_errors = [];
              var e = {};
              for (var n in this.rows)
                for (var i in this.structure) {
                  if ("" === this.rows[n][this.structure[i]["name"]]) {
                    this.has_errors[n] = Object(r["d"])(
                      Object(r["a"])("%s can't be empty.", "ga-premium"),
                      "<strong>" + this.structure[i]["label"] + "</strong>"
                    );
                    break;
                  }
                  if (this.structure[i]["pattern"]) {
                    var s = this.structure[i]["pattern"].test(
                      this.rows[n][this.structure[i]["name"]]
                    );
                    if (!1 === s) {
                      this.has_errors[n] = this.structure[i]["error"];
                      break;
                    }
                  }
                  this.structure[i]["prevent_duplicates"] &&
                    (function () {
                      "undefined" === typeof e[t.structure[i]["name"]] &&
                        (e[t.structure[i]["name"]] = []),
                        e[t.structure[i]["name"]].push(
                          t.rows[n][t.structure[i]["name"]]
                        );
                      var s = e[t.structure[i]["name"]],
                        o = function () {
                          return s.filter(function (t, e) {
                            return s.indexOf(t) === e;
                          });
                        };
                      s.length !== o(s).length &&
                        (t.has_errors[n] = Object(r["a"])(
                          "Duplicate values are not allowed.",
                          "ga-premium"
                        ));
                    })();
                }
              return 0 === this.has_errors.length;
            },
            errorClass: function (t, e) {
              return "" === this.rows[t][e]
                ? ""
                : this.has_errors[t]
                ? "monsterinsights-input-error"
                : "monsterinsights-input-valid";
            },
          },
        },
        d = p,
        m = n("2877"),
        h = Object(m["a"])(d, i, s, !1, null, null, null);
      e["a"] = h.exports;
    },
    7220: function (t, e, n) {
      "use strict";
      n("4795"),
        n("b0c0"),
        n("d3b7"),
        n("ac1f"),
        n("3ca3"),
        n("841c"),
        n("ddb0"),
        n("2b3d");
      var i = n("bc3a"),
        s = n.n(i),
        o = n("2b0e"),
        a = n("561c"),
        r = function (t) {
          return new Promise(function (e) {
            var n = new FormData();
            n.append("action", "monsterinsights_vue_get_settings"),
              n.append("nonce", o["a"].prototype.$mi.nonce),
              s.a
                .post(o["a"].prototype.$mi.ajax, n)
                .then(function (t) {
                  var n = new URLSearchParams(window.location.search),
                    i = n.get("page");
                  i &&
                    "monsterinsights_reports" !== i &&
                    o["a"].prototype.$swal.close(),
                    e(t.data);
                })
                .catch(function (e) {
                  if (
                    (t.dispatch("$_app/block", !1, { root: !0 }), e.response)
                  ) {
                    var n = e.response;
                    return o["a"].prototype.$mi_error_toast({
                      title: Object(a["d"])(
                        Object(a["a"])(
                          "Can't load settings. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        n.status,
                        n.statusText
                      ),
                    });
                  }
                  o["a"].prototype.$mi_error_toast({
                    title: Object(a["a"])(
                      "You appear to be offline.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        c = function (t, e) {
          return new Promise(function (t) {
            var n = new FormData();
            n.append("action", "monsterinsights_vue_update_settings"),
              n.append("nonce", o["a"].prototype.$mi.nonce),
              n.append("setting", e.name),
              !1 !== e.value &&
                (Array === e.value.constructor
                  ? n.append("value", JSON.stringify(e.value))
                  : n.append("value", e.value)),
              s.a
                .post(o["a"].prototype.$mi.ajax, n)
                .then(function (e) {
                  t(e.data);
                })
                .catch(function (t) {
                  if (t.response) {
                    var e = t.response;
                    return o["a"].prototype.$mi_error_toast({
                      title: Object(a["d"])(
                        Object(a["a"])(
                          "Can't save settings. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  o["a"].prototype.$mi_error_toast({
                    title: Object(a["a"])(
                      "Network error encountered. Settings not saved.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        l = function (t, e) {
          return new Promise(function (t) {
            var n = new FormData();
            n.append("action", "monsterinsights_vue_update_settings_bulk"),
              n.append("nonce", o["a"].prototype.$mi.nonce),
              n.append("settings", JSON.stringify(e)),
              s.a
                .post(o["a"].prototype.$mi.ajax, n)
                .then(function (e) {
                  t(e.data);
                })
                .catch(function (t) {
                  if (t.response) {
                    var e = t.response;
                    return o["a"].prototype.$mi_error_toast({
                      title: Object(a["d"])(
                        Object(a["a"])(
                          "Can't save settings. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        e.status,
                        e.statusText
                      ),
                    });
                  }
                  o["a"].prototype.$mi_error_toast({
                    title: Object(a["a"])(
                      "Network error encountered. Settings not saved.",
                      "ga-premium"
                    ),
                  });
                });
          });
        },
        u = { fetchSettings: r, saveSettings: c, saveBulkSettings: l },
        p = function (t) {
          u.fetchSettings(t)
            .then(function (e) {
              t.commit("SETTINGS_UPDATED", e);
            })
            .catch(function (t) {
              console.error(t);
            });
        },
        d = function (t, e) {
          t.commit("SETTING_UPDATE", e), t.commit("SETTINGS_SAVE_START");
          var n = u.saveSettings(t, e);
          return (
            n.then(function () {
              t.commit("SETTINGS_SAVE_END");
            }),
            n
          );
        },
        m = function (t, e) {
          t.commit("SETTINGS_BULK_UPDATE", e), t.commit("SETTINGS_SAVE_START");
          var n = u.saveBulkSettings(t, e);
          return (
            n.then(function () {
              t.commit("SETTINGS_SAVE_END");
            }),
            n
          );
        },
        h = function (t, e) {
          t.commit("SETTING_UPDATE_UNDO", e), t.commit("SETTINGS_SAVE_START");
          var n = u.saveSettings(t, e);
          return (
            n.then(function () {
              t.commit("SETTINGS_SAVE_END");
            }),
            n
          );
        },
        f = function (t, e) {
          t.commit("SETTING_UPDATE_REDO", e), t.commit("SETTINGS_SAVE_START");
          var n = u.saveSettings(t, e);
          return (
            n.then(function () {
              t.commit("SETTINGS_SAVE_END");
            }),
            n
          );
        },
        g = function (t) {
          t.commit("SETTINGS_SAVE_START"),
            o["a"].prototype.$mi_saving_toast({}),
            setTimeout(function () {
              t.commit("SETTINGS_SAVE_END"),
                o["a"].prototype.$mi_success_toast({});
            }, 1e3);
        },
        _ = function (t) {
          t.dispatch(
            "updateSettingsUndo",
            t.state.history[t.state.historyIndex - 1]
          );
        },
        b = function (t) {
          t.dispatch(
            "updateSettingsRedo",
            t.state.history[t.state.historyIndex + 1]
          );
        },
        v = {
          getSettings: p,
          updateSettings: d,
          simulateSave: g,
          undo: _,
          redo: b,
          updateSettingsUndo: h,
          updateSettingsRedo: f,
          updateSettingsBulk: m,
        },
        y = function (t) {
          return t.settings;
        },
        w = function (t) {
          return t.history;
        },
        O = function (t) {
          return t.historyIndex;
        },
        C = { settings: y, history: w, historyIndex: O },
        k =
          (n("a434"),
          function (t, e) {
            (e.is_saving = !1), (t.settings = e);
          }),
        $ = function (t, e) {
          (t.settings.is_saving = !0),
            (t.history[t.historyIndex] &&
              t.history[t.historyIndex].name === e.name) ||
              (t.history.push({
                name: e.name,
                value: !!t.settings[e.name] && t.settings[e.name],
              }),
              t.historyIndex++),
            t.historyIndex < t.history.length - 1 &&
              t.history.splice(t.historyIndex + 1),
            t.history.push({ name: e.name, value: e.value }),
            t.historyIndex++,
            o["a"].set(t.settings, e.name, e.value);
        },
        j = function (t, e) {
          for (var n in ((t.settings.is_saving = !0), e))
            e.hasOwnProperty(n) && o["a"].set(t.settings, n, e[n]);
        },
        x = function (t, e) {
          (t.settings.is_saving = !0),
            t.historyIndex--,
            o["a"].set(t.settings, e.name, e.value);
        },
        P = function (t, e) {
          (t.settings.is_saving = !0),
            t.historyIndex++,
            o["a"].set(t.settings, e.name, e.value);
        },
        E = function (t) {
          t.settings.is_saving = !0;
        },
        T = function (t) {
          t.settings.is_saving = !1;
        },
        S = {
          SETTINGS_UPDATED: k,
          SETTING_UPDATE: $,
          SETTINGS_SAVE_START: E,
          SETTINGS_SAVE_END: T,
          SETTING_UPDATE_UNDO: x,
          SETTING_UPDATE_REDO: P,
          SETTINGS_BULK_UPDATE: j,
        },
        D = {
          settings: { automatic_updates: "all" },
          history: [],
          historyIndex: -1,
        };
      e["a"] = {
        namespaced: !0,
        state: D,
        actions: v,
        getters: C,
        mutations: S,
      };
    },
    7460: function (t, e, n) {
      "use strict";
      n("c975"),
        n("a9e3"),
        n("4d63"),
        n("ac1f"),
        n("25f0"),
        n("466d"),
        n("5319");
      var i = n("2b0e"),
        s = {
          install: function (t) {
            window.monsterinsights &&
              (t.prototype.$mi = window.monsterinsights),
              (t.prototype.$isPro = r),
              (t.prototype.$addQueryArg = c),
              (t.prototype.$getUrl = a),
              (t.prototype.$getUpgradeUrl = o),
              (t.prototype.$formatNumber = l);
          },
        };
      function o(t, e, n) {
        var i = a(t, e, n);
        return r()
          ? i
          : "0" !== window.monsterinsights.shareasale_id
          ? c(window.monsterinsights.shareasale_url, "urllink", i)
          : i;
      }
      function a(t, e, n) {
        var s = r() ? "proplugin" : "liteplugin",
          o = r() ? "my-account/" : "lite/",
          a = i["a"].prototype.$mi.plugin_version;
        return (
          (t = t || "defaultmedium"),
          (e = e || "defaultcampaign"),
          (n = n || "https://www.monsterinsights.com/" + o),
          (n = c(n, "utm_source", s)),
          (n = c(n, "utm_medium", t)),
          (n = c(n, "utm_campaign", e)),
          (n = c(n, "utm_content", a)),
          n
        );
      }
      function r() {
        return !0;
      }
      function c(t, e, n) {
        var i = new RegExp("([?&])" + e + "=.*?(&|#|$)", "i");
        if (t.match(i)) return t.replace(i, "$1" + e + "=" + n + "$2");
        var s = "";
        -1 !== t.indexOf("#") &&
          ((s = t.replace(/.*#/, "#")), (t = t.replace(/#.*/, "")));
        var o = -1 !== t.indexOf("?") ? "&" : "?";
        return t + o + e + "=" + n + s;
      }
      function l(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
        return (
          "number" !== typeof t && (t = Number(t || 0)),
          t.toLocaleString("en-US", { maximumFractionDigits: e })
        );
      }
      e["a"] = s;
    },
    "7f78": function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "monsterinsights-addon" }, [
            n("div", { staticClass: "monsterinsights-addon-top" }, [
              t.addon.icon
                ? n("div", { staticClass: "monsterinsights-addon-image" }, [
                    n("img", {
                      staticClass: "monsterinsights-addon-thumb",
                      attrs: { src: t.addon.icon, alt: t.addon.title },
                    }),
                  ])
                : t._e(),
              n("div", { staticClass: "monsterinsights-addon-text" }, [
                n("h3", {
                  staticClass: "monsterinsights-addon-title",
                  domProps: { textContent: t._s(t.addonTitle) },
                }),
                t.addon.excerpt
                  ? n("p", {
                      staticClass: "monsterinsights-addon-excerpt",
                      domProps: { textContent: t._s(t.addon.excerpt) },
                    })
                  : t._e(),
              ]),
            ]),
            n("div", { class: t.actionsClass() }, [
              n("div", { staticClass: "monsterinsights-interior" }, [
                n("span", {
                  staticClass: "monsterinsights-addon-status",
                  domProps: { innerHTML: t._s(t.statusText()) },
                }),
                n("div", { staticClass: "monsterinsights-addon-action" }, [
                  "licensed" === t.addon.type
                    ? n(
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
                          n("span", {
                            domProps: { innerHTML: t._s(t.textButtonAction()) },
                          }),
                        ]
                      )
                    : n("a", {
                        staticClass: "monsterinsights-button",
                        attrs: { href: t.upgrade_url, target: "_blank" },
                        domProps: { textContent: t._s(t.textButtonAction()) },
                      }),
                ]),
              ]),
            ]),
          ]);
        },
        s = [],
        o = (n("c975"), n("ac1f"), n("5319"), n("561c")),
        a = {
          name: "AddonBlock",
          props: { addon: Object, isAddon: { type: Boolean, default: !0 } },
          data: function () {
            return {
              text_status: Object(o["a"])("Status: %s", "ga-premium"),
              text_upgrade: Object(o["a"])("Upgrade Now", "ga-premium"),
              upgrade_url: this.$getUpgradeUrl(),
              activating: !1,
              deactivating: !1,
              installing: !1,
            };
          },
          computed: {
            addonTitle: function () {
              var t = this.addon.title;
              return (
                0 === t.indexOf("MonsterInsights") &&
                  (t = t.replace("MonsterInsights ", "")),
                t
              );
            },
          },
          methods: {
            actionsClass: function () {
              var t = "monsterinsights-addon-message ";
              return (
                "licensed" === this.addon.type
                  ? this.addon.active
                    ? (t += "monsterinsights-addon-active")
                    : !1 === this.addon.installed
                    ? (t += "monsterinsights-addon-not-installed")
                    : (t += "monsterinsights-addon-inactive")
                  : (t += "monsterinsights-addon-not-available"),
                t
              );
            },
            statusText: function () {
              var t = Object(o["a"])("Not Installed", "ga-premium");
              return (
                "licensed" !== this.addon.type
                  ? (t = Object(o["a"])("Not Available", "ga-premium"))
                  : this.addon.active
                  ? (t = this.$mi.network
                      ? Object(o["a"])("Network Active", "ga-premium")
                      : Object(o["a"])("Active", "ga-premium"))
                  : this.addon.installed &&
                    (t = Object(o["a"])("Inactive", "ga-premium")),
                Object(o["d"])(this.text_status, "<span>" + t + "</span>")
              );
            },
            textButtonAction: function () {
              return "licensed" !== this.addon.type
                ? Object(o["a"])("Upgrade Now", "ga-premium")
                : this.activating
                ? Object(o["a"])("Activating...", "ga-premium")
                : this.deactivating
                ? Object(o["a"])("Deactivating...", "ga-premium")
                : this.installing
                ? Object(o["a"])("Installing...", "ga-premium")
                : this.addon.active
                ? Object(o["a"])("Deactivate", "ga-premium")
                : this.addon.installed
                ? Object(o["a"])("Activate", "ga-premium")
                : Object(o["a"])("Install", "ga-premium");
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
              (this.installing = !0),
                this.$store
                  .dispatch(e, this.addon)
                  .then(function () {
                    t.installing = !1;
                  })
                  .catch(function () {
                    t.installing = !1;
                  });
            },
            activateAddon: function () {
              var t = this;
              (this.activating = !0),
                this.$store
                  .dispatch("$_addons/activateAddon", this.addon)
                  .then(function () {
                    t.activating = !1;
                  })
                  .catch(function () {
                    t.activating = !1;
                  });
            },
            deactivateAddon: function () {
              var t = this;
              (this.deactivating = !0),
                this.$store
                  .dispatch("$_addons/deactivateAddon", this.addon)
                  .then(function () {
                    t.deactivating = !1;
                  })
                  .catch(function () {
                    t.deactivating = !1;
                  });
            },
          },
        },
        r = a,
        c = n("2877"),
        l = Object(c["a"])(r, i, s, !1, null, null, null);
      e["a"] = l.exports;
    },
    "86b5": function (t, e, n) {},
    "8c1c": function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "monsterinsights-not-authenticated-notice" },
            [
              n("h3", { domProps: { textContent: t._s(t.text_no_auth) } }),
              n("p", { domProps: { textContent: t._s(t.text_auth_label) } }),
              n("p", [
                n("button", {
                  staticClass: "monsterinsights-button",
                  domProps: { textContent: t._s(t.text_button_reconnect) },
                  on: { click: t.doReAuth },
                }),
              ]),
            ]
          );
        },
        s = [],
        o = n("561c"),
        a = {
          name: "ReportReAuth",
          data: function () {
            return {
              text_no_auth: Object(o["a"])(
                "MonsterInsights encountered an error loading your report data",
                "ga-premium"
              ),
              text_auth_label: Object(o["a"])(
                "There is an issue with your Google Account authentication. Please use the button below to fix it by re-authenticating.",
                "ga-premium"
              ),
              text_button_reconnect: Object(o["a"])(
                "Reconnect MonsterInsights",
                "ga-premium"
              ),
            };
          },
          methods: {
            doReAuth: function (t) {
              t.preventDefault();
              var e = this;
              this.$swal({
                type: "info",
                title: Object(o["a"])("Re-Authenticating", "ga-premium"),
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
                          title: Object(o["a"])("Error", "ga-premium"),
                          text: t.data.message,
                          confirmButtonText: Object(o["a"])("Ok", "ga-premium"),
                        });
                  });
            },
          },
        },
        r = a,
        c = n("2877"),
        l = Object(c["a"])(r, i, s, !1, null, null, null);
      e["a"] = l.exports;
    },
    "8d58": function (t, e, n) {
      "use strict";
      var i,
        s,
        o = n("30ef"),
        a = n.n(o),
        r = n("1fca"),
        c = Object(r["c"])("mi-custom-line", "LineWithLine"),
        l = r["d"].reactiveProp,
        u = {
          name: "ReportOverviewLineChart",
          extends: c,
          mixins: [l],
          props: {
            tooltip: String,
            customOptions: Object,
            id: String,
            strokeColor: { type: String, default: "#6db0e9" },
            strokeX: { type: Boolean, default: !0 },
            strokeY: { type: Boolean, default: !1 },
            labelColor: { type: String, default: "#7f8591" },
            gridColor: { type: String, default: "#f2f6fa" },
          },
          computed: {
            options: function () {
              var t = this,
                e = this;
              (a.a.defaults.LineWithLine = a.a.defaults.line),
                (e.strokeY || e.strokeX) &&
                  (a.a.controllers.LineWithLine = a.a.controllers.line.extend({
                    draw: function (t) {
                      if (
                        (a.a.controllers.line.prototype.draw.call(this, t),
                        this.chart.tooltip._active &&
                          this.chart.tooltip._active.length)
                      ) {
                        var n = this.chart.tooltip._active[0],
                          i = this.chart.ctx,
                          s = n.tooltipPosition().x,
                          o = n.tooltipPosition().y,
                          r = this.chart.scales["y-axis-0"].top,
                          c = this.chart.scales["x-axis-0"].left,
                          l = this.chart.scales["y-axis-0"].bottom,
                          u = this.chart.scales["x-axis-0"].right;
                        i.save(),
                          e.strokeX &&
                            (i.beginPath(),
                            i.moveTo(s, r),
                            i.lineTo(s, l),
                            (i.lineWidth = 1),
                            (i.strokeStyle = e.strokeColor),
                            i.setLineDash([4, 8]),
                            i.stroke()),
                          e.strokeY &&
                            (i.beginPath(),
                            i.moveTo(c, o),
                            i.lineTo(u, o),
                            (i.lineWidth = 1),
                            (i.strokeStyle = e.strokeColor),
                            i.setLineDash([4, 8]),
                            i.stroke()),
                          i.restore();
                      }
                    },
                  }));
              var n = {
                legend: { display: !1 },
                hover: { intersect: !0 },
                tooltips: {
                  enabled: !1,
                  yAlign: "top",
                  xAlign: "top",
                  intersect: !1,
                  custom: this.$miOverviewTooltips,
                  callbacks: {
                    title: function (n, i) {
                      n = n[0];
                      var s = i.datasets[0].labels[n.index],
                        o = t.$formatNumber(i.datasets[0].data[n.index]),
                        a = i.datasets[0].trend[n.index];
                      return [s, o, a, e.tooltip, e.id];
                    },
                    label: function () {
                      return "";
                    },
                  },
                },
                scales: {
                  xAxes: [
                    {
                      spanGaps: !0,
                      position: "bottom",
                      gridLines: { show: !0, color: e.gridColor },
                      ticks: { fontColor: e.labelColor },
                    },
                  ],
                  yAxes: [
                    {
                      gridLines: { show: !0, color: e.gridColor },
                      ticks: {
                        fontColor: e.labelColor,
                        callback: function (e) {
                          if (e % 1 === 0) return t.$formatNumber(e);
                        },
                      },
                    },
                  ],
                },
                animation: !1,
                responsive: !0,
                maintainAspectRatio: !1,
                borderWidth: 1,
              };
              for (var i in this.customOptions)
                this.customOptions.hasOwnProperty(i) &&
                  (n[i] = this.customOptions[i]);
              return n;
            },
            tooltipId: function () {
              return "monsterinsights-chartjs-line-" + this.id + "-tooltip";
            },
          },
          mounted: function () {
            this.renderChart(this.chartData, this.options);
          },
        },
        p = u,
        d = n("2877"),
        m = Object(d["a"])(p, i, s, !1, null, null, null);
      e["a"] = m.exports;
    },
    "91f2": function (t, e, n) {
      "use strict";
      var i,
        s,
        o = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return t.chartData
            ? n(
                "div",
                {
                  staticClass: "monsterinsights-reports-pie-chart",
                  attrs: { id: t.id },
                },
                [
                  t.title
                    ? n("h3", {
                        class: t.titleClass,
                        domProps: { textContent: t._s(t.title) },
                      })
                    : t._e(),
                  t.tooltip
                    ? n("settings-info-tooltip", {
                        attrs: { content: t.tooltip },
                      })
                    : t._e(),
                  n(
                    "div",
                    { staticClass: "monsterinsights-reports-pie-chart-holder" },
                    [
                      n("report-pie-chart", {
                        staticClass: "monsterinsights-pie-chart",
                        style: t.style,
                        attrs: {
                          "chart-data": t.chartData,
                          tooltipid: t.id,
                          tooltips: t.enableTooltips,
                          cutoutPercentage: t.cutoutPercentage,
                        },
                      }),
                      t.legend
                        ? n(
                            "ul",
                            { staticClass: "monsterinsights-pie-chart-legend" },
                            t._l(t.chartData.values, function (e, i) {
                              return n("li", { key: i }, [
                                n("span", {
                                  staticClass:
                                    "monsterinsights-pie-chart-legend-color",
                                  style: t.labelBackground(
                                    t.chartData.datasets[0].backgroundColor[i]
                                  ),
                                }),
                                n("span", {
                                  staticClass:
                                    "monsterinsights-pie-chart-legend-text",
                                  domProps: {
                                    textContent: t._s(t.chartData.labels[i]),
                                  },
                                }),
                                n(
                                  "span",
                                  {
                                    staticClass:
                                      "monsterinsights-pie-chart-legend-value",
                                  },
                                  [t._v(" " + t._s(e) + "% ")]
                                ),
                              ]);
                            }),
                            0
                          )
                        : t._e(),
                      n("div", {
                        staticClass: "monsterinsights-pie-chart-tooltip",
                        attrs: { id: t.tooltipId },
                      }),
                    ],
                    1
                  ),
                ],
                1
              )
            : t._e();
        },
        a = [],
        r = (n("a9e3"), n("1fca")),
        c = r["d"].reactiveProp,
        l = {
          name: "ReportPieChart",
          extends: r["b"],
          mixins: [c],
          props: {
            tooltipid: String,
            tooltips: { default: !0, type: Boolean },
            cutoutPercentage: Number,
          },
          data: function () {
            var t = this,
              e = this,
              n = {
                options: {
                  responsive: !0,
                  maintainAspectRatio: !1,
                  tooltips: {
                    enabled: !1,
                    yAlign: "top",
                    xAlign: "top",
                    intersect: !0,
                    callbacks: {
                      title: function (n, i) {
                        n = n[0];
                        var s = i.labels[n.index],
                          o = t.$formatNumber(i.datasets[0].data[n.index]);
                        return [s, o, e.tooltipid];
                      },
                      label: function () {
                        return "";
                      },
                    },
                  },
                  animation: !1,
                  legend: { display: !1 },
                },
              };
            return (
              e.cutoutPercentage &&
                (n.options.cutoutPercentage = e.cutoutPercentage),
              e.tooltips && (n.options.tooltips.custom = e.$miPieTooltips),
              n
            );
          },
          mounted: function () {
            this.renderChart(this.chartData, this.options);
          },
        },
        u = l,
        p = n("2877"),
        d = Object(p["a"])(u, i, s, !1, null, null, null),
        m = d.exports,
        h = n("93ec"),
        f = {
          name: "ReportOverviewPieChart",
          components: { SettingsInfoTooltip: h["a"], ReportPieChart: m },
          props: {
            chartData: [Object, Boolean],
            title: String,
            tooltip: String,
            legend: { type: Boolean, default: !0 },
            id: String,
            enableTooltips: { type: Boolean, default: !0 },
            cutoutPercentage: Number,
            width: { type: Number, default: 200 },
            icon: { default: "", type: String },
          },
          computed: {
            titleClass: function () {
              return "monsterinsights-report-title " + this.icon;
            },
            tooltipId: function () {
              return "monsterinsights-chartjs-pie-" + this.id + "-tooltip";
            },
            style: function () {
              return (
                "max-width: " +
                this.width +
                "px; max-height: " +
                this.width +
                "px;"
              );
            },
          },
          methods: {
            labelBackground: function (t) {
              return "background-color: " + t + ";";
            },
          },
        },
        g = f,
        _ = Object(p["a"])(g, o, a, !1, null, null, null);
      e["a"] = _.exports;
    },
    "93ec": function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "span",
            {
              directives: [
                {
                  name: "tooltip",
                  rawName: "v-tooltip",
                  value: t.tooltip_data,
                  expression: "tooltip_data",
                },
              ],
              staticClass: "monsterinsights-info",
              attrs: { tabindex: "0" },
            },
            [
              n("i", {
                staticClass: "monstericon monstericon-info-circle-regular",
              }),
            ]
          );
        },
        s = [],
        o = {
          name: "SettingsInfoTooltip",
          props: { content: String },
          computed: {
            tooltip_data: function () {
              return {
                content: this.content,
                autoHide: !1,
                trigger: "hover focus click",
              };
            },
          },
        },
        a = o,
        r = n("2877"),
        c = Object(r["a"])(a, i, s, !1, null, null, null);
      e["a"] = c.exports;
    },
    "9cc2": function (t, e, n) {},
    "9d59": function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "monsterinsights-notices-area" }, [
            n(
              "div",
              { staticClass: "monsterinsights-container" },
              [
                n(
                  "slide-down-up",
                  { attrs: { group: !0 } },
                  t._l(t.notices, function (e, i) {
                    return n(
                      "div",
                      { key: i, class: t.getNoticeClass(e.type) },
                      [
                        n(
                          "div",
                          { staticClass: "monsterinsights-notice-inner" },
                          [
                            e.dismissable
                              ? n(
                                  "button",
                                  {
                                    staticClass: "dismiss-notice",
                                    on: {
                                      click: function (e) {
                                        return t.removeNotice(i);
                                      },
                                    },
                                  },
                                  [n("i", { staticClass: "monstericon-times" })]
                                )
                              : t._e(),
                            n("div", { staticClass: "notice-content" }, [
                              e.title
                                ? n("h2", {
                                    staticClass: "notice-title",
                                    domProps: { innerHTML: t._s(e.title) },
                                  })
                                : t._e(),
                              n("span", {
                                domProps: { innerHTML: t._s(e.content) },
                              }),
                              e.button && e.button.enabled
                                ? n(
                                    "div",
                                    {
                                      staticClass:
                                        "monsterinsights-notice-button",
                                    },
                                    [
                                      n("a", {
                                        class: t.buttonClass(e.type),
                                        attrs: {
                                          target: "_blank",
                                          href: e.button.link,
                                        },
                                        domProps: {
                                          textContent: t._s(e.button.text),
                                        },
                                      }),
                                    ]
                                  )
                                : t._e(),
                            ]),
                          ]
                        ),
                      ]
                    );
                  }),
                  0
                ),
              ],
              1
            ),
          ]);
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
        a = n("2f62"),
        r = n("d98d");
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                Object(o["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var u = {
          name: "TheAppNotices",
          components: { SlideDownUp: r["a"] },
          computed: l({}, Object(a["b"])({ notices: "$_app/notices" })),
          methods: {
            removeNotice: function (t) {
              this.$store.dispatch("$_app/removeNotice", t);
            },
            getNoticeClass: function (t) {
              return "monsterinsights-notice monsterinsights-notice-" + t;
            },
            buttonClass: function (t) {
              var e = "monsterinsights-button";
              return (
                "success" === t && (e += " monsterinsights-button-green"), e
              );
            },
          },
        },
        p = u,
        d = n("2877"),
        m = Object(d["a"])(p, i, s, !1, null, null, null);
      e["a"] = m.exports;
    },
    a158: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return "tools-prettylinks-flow" !== t.route
            ? n(
                "header",
                { staticClass: "monsterinsights-header" },
                [
                  n("the-floating-bar"),
                  n("div", { staticClass: "monsterinsights-container" }, [
                    n("div", { staticClass: "monsterinsights-logo-area" }, [
                      n("img", { attrs: { src: t.logo, srcset: t.logo2x } }),
                    ]),
                    n(
                      "div",
                      { staticClass: "monsterinsights-float-right" },
                      [t._t("default")],
                      2
                    ),
                  ]),
                ],
                1
              )
            : t._e();
        },
        s = [],
        o = (n("b0c0"), n("4795"), n("2b0e")),
        a = n("f13c"),
        r = n.n(a),
        c =
          (n("c975"),
          n("a15b"),
          n("baa5"),
          n("d81d"),
          n("a434"),
          n("4d63"),
          n("ac1f"),
          n("25f0"),
          n("466d"),
          n("5319"),
          n("841c"),
          n("1276"),
          function (t) {
            return (t || document.location.search)
              .replace(/(^\?)/, "")
              .split("&")
              .map(
                function (t) {
                  return (t = t.split("=")), (this[t[0]] = t[1]), this;
                }.bind({})
              )[0];
          }),
        l = function (t, e) {
          e = e || document.location.href;
          var n = e.split("?");
          if (2 > n.length) return e;
          for (
            var i = encodeURIComponent(t) + "=",
              s = n[1].split(/[&;]/g),
              o = s.length;
            0 < o--;

          )
            -1 !== s[o].lastIndexOf(i, 0) && s.splice(o, 1);
          var a = n[0] + (0 < s.length ? "?" + s.join("&") : "");
          window.history.replaceState(null, null, a);
        };
      o["a"].use(r.a, {
        container: "body",
        duration: 1e3,
        easing: "ease-in-out",
        offset: 0,
        force: !0,
        cancelable: !0,
        onStart: !1,
        onDone: !1,
        onCancel: !1,
        x: !1,
        y: !0,
      });
      var u = {
          mounted: function () {
            var t = this;
            if (
              (c()["monsterinsights-scroll"] &&
                setTimeout(function () {
                  t.$scrollTo("#".concat(c()["monsterinsights-scroll"]), {
                    offset: -130,
                  }),
                    l("monsterinsights-scroll");
                }, 1500),
              c()["monsterinsights-highlight"])
            ) {
              var e = c()["monsterinsights-scroll"] ? 2500 : 1500;
              setTimeout(function () {
                var t = document.querySelector(
                  "#".concat(c()["monsterinsights-highlight"])
                );
                t &&
                  (t.classList.add("monsterinsights-row-highlight"),
                  setTimeout(function () {
                    t.classList.remove("monsterinsights-row-highlight");
                  }, 2500)),
                  l("monsterinsights-highlight");
              }, e);
            }
          },
        },
        p = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("span");
        },
        d = [],
        m = { name: "TheFloatingBar" },
        h = m,
        f = n("2877"),
        g = Object(f["a"])(h, p, d, !1, null, null, null),
        _ = g.exports,
        b = {
          mixins: [u],
          name: "TheAppHeader",
          components: { TheFloatingBar: _ },
          data: function () {
            return {
              logo: this.$mi.assets + "/img/logo-MonsterInsights.png",
              logo2x: this.$mi.assets + "/img/logo-MonsterInsights@2x.png 2x",
            };
          },
          computed: {
            route: function () {
              return this.$route.name;
            },
          },
        },
        v = b,
        y = (n("0e23"), Object(f["a"])(v, i, s, !1, null, "49792b74", null));
      e["a"] = y.exports;
    },
    a1d2: function (t, e, n) {},
    a4cc: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass: "monsterinsights-welcome-overlay",
              attrs: { id: t.id },
              on: { click: t.maybeClose },
            },
            [
              n(
                "div",
                { staticClass: "monsterinsights-welcome-overlay-inner" },
                [
                  n(
                    "button",
                    {
                      staticClass: "monsterinsights-overlay-close",
                      on: { click: t.close },
                    },
                    [n("span", { staticClass: "monstericon-times" })]
                  ),
                  n(
                    "div",
                    { staticClass: "monsterinsights-welcome-overlay-content" },
                    [t._t("default")],
                    2
                  ),
                ]
              ),
            ]
          );
        },
        s = [],
        o = {
          name: "WelcomeOverlay",
          props: { id: String },
          methods: {
            close: function () {
              this.$emit("close", this.id);
            },
            maybeClose: function (t) {
              t.target.classList.contains("monsterinsights-welcome-overlay") &&
                this.close();
            },
          },
        },
        a = o,
        r = n("2877"),
        c = Object(r["a"])(a, i, s, !1, null, null, null);
      e["a"] = c.exports;
    },
    aa9f: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "monsterinsights-settings-input-select" },
            [
              t.label
                ? n(
                    "label",
                    { attrs: { for: t.id } },
                    [
                      n("span", {
                        staticClass: "monsterinsights-dark",
                        domProps: { innerHTML: t._s(t.label) },
                      }),
                      t.description
                        ? n("span", {
                            domProps: { innerHTML: t._s(t.description) },
                          })
                        : t._e(),
                      t.tooltip
                        ? n("settings-info-tooltip", {
                            attrs: { content: t.tooltip },
                          })
                        : t._e(),
                    ],
                    1
                  )
                : t._e(),
              n(
                "div",
                { staticClass: "monsterinsights-settings-input-select-input" },
                [
                  n("multiselect", {
                    directives: [
                      {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: t.disabled_tooltip,
                        expression: "disabled_tooltip",
                      },
                    ],
                    attrs: {
                      options: t.options,
                      multiple: t.multiple,
                      "track-by": "value",
                      label: "label",
                      searchable: !1,
                      selectLabel: "",
                      selectedLabel: "",
                      deselectLabel: "",
                      readonly: t.disabled,
                    },
                    on: { input: t.updateSetting },
                    scopedSlots: t._u([
                      {
                        key: "selection",
                        fn: function (e) {
                          e.search;
                          var i = e.remove,
                            s = e.values;
                          return [
                            n(
                              "div",
                              {
                                staticClass: "multiselect__tags-wrap",
                                attrs: { "data-text": t.addtext },
                              },
                              [
                                t._l(s, function (e, s) {
                                  return [
                                    n(
                                      "span",
                                      { key: s, class: t.tagClass(e) },
                                      [
                                        n("span", {
                                          domProps: {
                                            textContent: t._s(e.label),
                                          },
                                        }),
                                        n("i", {
                                          staticClass: "multiselect__tag-icon",
                                          attrs: {
                                            "aria-hidden": "true",
                                            tabindex: "0",
                                          },
                                          on: {
                                            keypress: function (n) {
                                              return !n.type.indexOf("key") &&
                                                t._k(
                                                  n.keyCode,
                                                  "enter",
                                                  13,
                                                  n.key,
                                                  "Enter"
                                                )
                                                ? null
                                                : (n.preventDefault(), i(e));
                                            },
                                            mousedown: function (t) {
                                              return t.preventDefault(), i(e);
                                            },
                                          },
                                        }),
                                      ]
                                    ),
                                  ];
                                }),
                              ],
                              2
                            ),
                          ];
                        },
                      },
                    ]),
                    model: {
                      value: t.selected,
                      callback: function (e) {
                        t.selected = e;
                      },
                      expression: "selected",
                    },
                  }),
                ],
                1
              ),
            ]
          );
        },
        s = [],
        o =
          (n("a4d3"),
          n("4de4"),
          n("4160"),
          n("c975"),
          n("b0c0"),
          n("e439"),
          n("dbb4"),
          n("b64b"),
          n("159b"),
          n("fc11")),
        a = n("561c"),
        r = n("2f62"),
        c = n("8e5f"),
        l = n.n(c),
        u = n("93ec");
      function p(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function d(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(n), !0).forEach(function (e) {
                Object(o["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var m = {
          name: "SettingsInputSelect",
          components: { SettingsInfoTooltip: u["a"], Multiselect: l.a },
          props: {
            options: Array,
            forced: {
              type: Array,
              default: function () {
                return [];
              },
            },
            name: String,
            label: String,
            description: String,
            multiple: { type: Boolean, default: !1 },
            tooltip: String,
            disabled: { type: Boolean, default: !1 },
            addtext: String,
          },
          data: function () {
            return {
              is_loading: !1,
              has_error: !1,
              id: "input-" + this.name,
              text_no_options: Object(a["a"])(
                "No options available",
                "ga-premium"
              ),
            };
          },
          computed: d({}, Object(r["b"])({ settings: "$_settings/settings" }), {
            selected: {
              get: function () {
                var t = JSON.parse(JSON.stringify(this.forced));
                if (this.settings[this.name])
                  for (var e in this.options)
                    this.settings[this.name].indexOf(this.options[e].value) >=
                      0 &&
                      this.notForced(this.options[e]) &&
                      t.push(this.options[e]);
                return t;
              },
              set: function () {},
            },
            disabled_tooltip: function () {
              return {
                content: this.disabled ? this.$mi_need_to_auth : "",
                autoHide: !1,
                trigger: "hover focus click",
              };
            },
          }),
          methods: {
            updateSetting: function (t) {
              var e = this;
              if (this.disabled) return !1;
              this.$mi_saving_toast({});
              var n = [];
              for (var i in t) n.push(t[i].value);
              this.$store
                .dispatch("$_settings/updateSettings", {
                  name: this.name,
                  value: n,
                })
                .then(function (t) {
                  t.success ? e.$mi_success_toast({}) : e.$mi_error_toast({});
                });
            },
            notForced: function (t) {
              for (var e in this.forced)
                if (this.forced[e].value === t.value) return !1;
              return !0;
            },
            tagClass: function (t) {
              var e = "multiselect__tag";
              return (
                this.notForced(t) || (e += " monsterinsights-tag-forced"), e
              );
            },
          },
        },
        h = m,
        f = (n("470e"), n("2877")),
        g = Object(f["a"])(h, i, s, !1, null, "7262cc05", null);
      e["a"] = g.exports;
    },
    ac39: function (t, e, n) {},
    b333: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "monsterinsights-settings-network-notice" },
            [
              t._m(0),
              n(
                "div",
                { staticClass: "monsterinsights-network-message" },
                [t._t("default")],
                2
              ),
            ]
          );
        },
        s = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n("div", [
              n("div", {
                staticClass:
                  "monsterinsights-bg-img monsterinsights-icon-warning",
              }),
            ]);
          },
        ],
        o = { name: "SettingsNetworkNotice" },
        a = o,
        r = (n("5443"), n("2877")),
        c = Object(r["a"])(a, i, s, !1, null, "a9c27d52", null);
      e["a"] = c.exports;
    },
    b52e: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { class: t.boxClass },
            [
              n(
                "button",
                {
                  staticClass: "monsterinsights-quick-links-label",
                  on: {
                    click: function (e) {
                      e.stopPropagation(), (t.showMenu = !t.showMenu);
                    },
                  },
                },
                [
                  n("span", {
                    staticClass:
                      "monsterinsights-bg-img monsterinsights-quick-links-mascot",
                  }),
                  n("span", {
                    staticClass: "monsterinsights-quick-link-title",
                    domProps: { textContent: t._s(t.text_see_quick) },
                  }),
                ]
              ),
              n(
                "transition-group",
                {
                  staticClass: "monsterinsights-quick-links-menu",
                  attrs: { tag: "div", name: "monsterinsights-staggered-fade" },
                  on: { enter: t.enter, leave: t.leave },
                },
                [
                  t.showMenu
                    ? t._l(t.menuItems, function (e, i) {
                        return n(
                          "a",
                          {
                            key: e.key,
                            class: t.linksClass(e.key),
                            attrs: {
                              href: e.link,
                              "data-index": i,
                              target: "_blank",
                            },
                          },
                          [
                            n("span", { class: e.icon }),
                            n("span", {
                              staticClass: "monsterinsights-quick-link-title",
                              domProps: { innerHTML: t._s(e.tooltip) },
                            }),
                          ]
                        );
                      })
                    : t._e(),
                ],
                2
              ),
            ],
            1
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
          n("4795"),
          n("fc11")),
        a = (n("ac39"), n("561c")),
        r = n("2f62");
      function c(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function l(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? c(Object(n), !0).forEach(function (e) {
                Object(o["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : c(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var u = {
          name: "TheQuickLinks",
          data: function () {
            return {
              showMenu: !1,
              text_see_quick: Object(a["a"])("See Quick Links", "ga-premium"),
            };
          },
          computed: l(
            {},
            Object(r["b"])({
              license: "$_license/license",
              license_network: "$_license/license_network",
            }),
            {
              boxClass: function () {
                var t = "monsterinsights-quick-links";
                return (
                  this.showMenu && (t += " monsterinsights-quick-links-open"), t
                );
              },
              licenseLevel: function () {
                return this.$mi.network
                  ? this.license_network.type
                  : this.license.type;
              },
              showUpsell: function () {
                return (
                  "plus" === this.licenseLevel ||
                  "basic" === this.licenseLevel ||
                  "" === this.licenseLevel
                );
              },
              menuItems: function () {
                var t = [
                  {
                    icon: "monstericon-lightbulb",
                    tooltip: Object(a["a"])("Suggest a Feature", "ga-premium"),
                    link: this.$getUrl(
                      "quick-links",
                      "suggest-feature",
                      "https://www.monsterinsights.com/customer-feedback/"
                    ),
                    key: "suggest",
                  },
                  {
                    icon: "monstericon-wpbeginner",
                    tooltip: Object(a["a"])("Join Our Community", "ga-premium"),
                    link: "https://www.facebook.com/groups/wpbeginner/",
                    key: "community",
                  },
                  {
                    icon: "monstericon-life-ring",
                    tooltip: Object(a["a"])("Support & Docs", "ga-premium"),
                    link: this.$getUrl(
                      "quick-links",
                      "support",
                      "https://www.monsterinsights.com/docs/"
                    ),
                    key: "support",
                  },
                ];
                return (
                  this.showUpsell &&
                    t.push({
                      icon: "monstericon-star",
                      tooltip: Object(a["a"])(
                        "Upgrade to Pro &#187;",
                        "ga-premium"
                      ),
                      link: this.$getUpgradeUrl("quick-links", "upgrade"),
                      key: "upgrade",
                    }),
                  t
                );
              },
            }
          ),
          methods: {
            enter: function (t, e) {
              var n = 50 * t.dataset.index;
              setTimeout(function () {
                t.classList.add("monsterinsights-show"), e();
              }, n);
            },
            leave: function (t, e) {
              t.classList.remove("monsterinsights-show"),
                setTimeout(function () {
                  e();
                }, 200);
            },
            linksClass: function (t) {
              return (
                "monsterinsights-quick-links-menu-item monsterinsights-quick-links-item-" +
                t
              );
            },
          },
        },
        p = u,
        d = n("2877"),
        m = Object(d["a"])(p, i, s, !1, null, null, null);
      e["a"] = m.exports;
    },
    bbd6: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "monsterinsights-table-box-pagination" },
            [
              n("span", { domProps: { textContent: t._s(t.text_show) } }),
              n("div", { staticClass: "monsterinsights-buttons-toggle" }, [
                n(
                  "button",
                  {
                    class: t.getButtonClass(10),
                    on: {
                      click: function (e) {
                        return t.sendUpdate(10);
                      },
                    },
                  },
                  [t._v(" 10 ")]
                ),
                t.length > 10
                  ? n(
                      "button",
                      {
                        class: t.getButtonClass(25),
                        on: {
                          click: function (e) {
                            return t.sendUpdate(25);
                          },
                        },
                      },
                      [t._v(" 25 ")]
                    )
                  : t._e(),
                t.length > 25
                  ? n(
                      "button",
                      {
                        class: t.getButtonClass(50),
                        on: {
                          click: function (e) {
                            return t.sendUpdate(50);
                          },
                        },
                      },
                      [t._v(" 50 ")]
                    )
                  : t._e(),
              ]),
            ]
          );
        },
        s = [],
        o = (n("a9e3"), n("561c")),
        a = {
          name: "ReportsPagination",
          props: { limit: Number, length: Number },
          data: function () {
            return {
              currentLimit: this.limit,
              text_show: Object(o["a"])("Show", "ga-premium"),
            };
          },
          methods: {
            sendUpdate: function (t) {
              (this.currentLimit = t), this.$emit("updated", t);
            },
            getButtonClass: function (t) {
              var e = "monsterinsights-button";
              return (
                t === this.currentLimit &&
                  (e += " monsterinsights-selected-interval"),
                e
              );
            },
          },
        },
        r = a,
        c = n("2877"),
        l = Object(c["a"])(r, i, s, !1, null, null, null);
      e["a"] = l.exports;
    },
    bd74: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass: "monsterinsights-reports-infobox",
              attrs: { id: t.id },
            },
            [
              t.title
                ? n("div", {
                    staticClass: "monsterinsights-report-title",
                    domProps: { textContent: t._s(t.title) },
                  })
                : t._e(),
              t.tooltip
                ? n("settings-info-tooltip", { attrs: { content: t.tooltip } })
                : t._e(),
              n("div", {
                staticClass: "monsterinsights-reports-infobox-number",
                attrs: { title: t.value },
                domProps: { textContent: t._s(t.value) },
              }),
              n("div", {
                class: t.changeClass,
                domProps: { innerHTML: t._s(t.changeText) },
              }),
              t.days
                ? n("div", {
                    staticClass: "monsterinsights-reports-infobox-compare",
                    domProps: { textContent: t._s(t.compare) },
                  })
                : t._e(),
            ],
            1
          );
        },
        s = [],
        o = (n("a9e3"), n("561c")),
        a = n("93ec"),
        r = {
          name: "ReportInfobox",
          components: { SettingsInfoTooltip: a["a"] },
          props: {
            title: String,
            value: { default: "0", type: String },
            id: String,
            days: Number,
            tooltip: String,
            change: Number,
            color: { default: "green", type: String },
            direction: { default: "up", type: String },
          },
          computed: {
            compare: function () {
              return Object(o["b"])(
                "vs. Previous Day",
                Object(o["d"])("vs. Previous %s Days", this.days),
                this.days,
                "ga-premium"
              );
            },
            changeClass: function () {
              var t = "monsterinsights-reports-infobox-prev ";
              return "undefined" === typeof this.change
                ? t + " monsterinsights-prev-nochange"
                : t + " monsterinsights-" + this.color;
            },
            changeText: function () {
              return this.change
                ? "" === this.direction
                  ? this.change + "%"
                  : '<span class="monsterinsights-arrow monsterinsights-' +
                    this.direction +
                    " monsterinsights-" +
                    this.color +
                    '"></span> ' +
                    this.change +
                    "%"
                : Object(o["a"])("No change", "ga-premium");
            },
          },
        },
        c = r,
        l = n("2877"),
        u = Object(l["a"])(c, i, s, !1, null, null, null);
      e["a"] = u.exports;
    },
    bef0: function (t, e, n) {},
    c472: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "settings-input-text" }, [
            t.label || t.description || t.tooltip
              ? n(
                  "label",
                  { attrs: { for: t.id } },
                  [
                    n("span", {
                      staticClass: "monsterinsights-dark",
                      domProps: { innerHTML: t._s(t.label) },
                    }),
                    t.description
                      ? n("span", {
                          domProps: { innerHTML: t._s(t.description) },
                        })
                      : t._e(),
                    t.showReset()
                      ? n("a", {
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
                      ? n("settings-info-tooltip", {
                          attrs: { content: t.tooltip },
                        })
                      : t._e(),
                  ],
                  1
                )
              : t._e(),
            n("div", { staticClass: "settings-input-text-input" }, [
              "checkbox" === t.type
                ? n("input", {
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
                      name: t.name,
                      placeholder: t.placeholder,
                      readonly: t.disabled,
                      type: "checkbox",
                    },
                    domProps: {
                      checked: Array.isArray(t.value)
                        ? t._i(t.value, null) > -1
                        : t.value,
                    },
                    on: {
                      change: [
                        function (e) {
                          var n = t.value,
                            i = e.target,
                            s = !!i.checked;
                          if (Array.isArray(n)) {
                            var o = null,
                              a = t._i(n, o);
                            i.checked
                              ? a < 0 && (t.value = n.concat([o]))
                              : a > -1 &&
                                (t.value = n
                                  .slice(0, a)
                                  .concat(n.slice(a + 1)));
                          } else t.value = s;
                        },
                        t.inputUpdate,
                      ],
                    },
                  })
                : "radio" === t.type
                ? n("input", {
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
                      name: t.name,
                      placeholder: t.placeholder,
                      readonly: t.disabled,
                      type: "radio",
                    },
                    domProps: { checked: t._q(t.value, null) },
                    on: {
                      change: [
                        function (e) {
                          t.value = null;
                        },
                        t.inputUpdate,
                      ],
                    },
                  })
                : n("input", {
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
                      name: t.name,
                      placeholder: t.placeholder,
                      readonly: t.disabled,
                      type: t.type,
                    },
                    domProps: { value: t.value },
                    on: {
                      change: t.inputUpdate,
                      input: function (e) {
                        e.target.composing || (t.value = e.target.value);
                      },
                    },
                  }),
            ]),
            t.has_error
              ? n("label", { staticClass: "monsterinsights-error" }, [
                  n("i", { staticClass: "monstericon-warning-triangle" }),
                  n("span", { domProps: { innerHTML: t._s(t.text_error) } }),
                ])
              : t._e(),
          ]);
        },
        s = [],
        o =
          (n("a4d3"),
          n("4de4"),
          n("4160"),
          n("b0c0"),
          n("e439"),
          n("dbb4"),
          n("b64b"),
          n("4d63"),
          n("ac1f"),
          n("25f0"),
          n("159b"),
          n("fc11")),
        a = n("561c"),
        r = n("2f62"),
        c = n("93ec");
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function u(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                Object(o["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var p = {
          name: "SettingsInputText",
          components: { SettingsInfoTooltip: c["a"] },
          props: {
            name: String,
            label: String,
            description: String,
            placeholder: String,
            type: { type: String, default: "text" },
            tooltip: String,
            default_value: String,
            format: RegExp,
            auth_disabled: { type: Boolean, default: !0 },
          },
          data: function () {
            return {
              is_loading: !1,
              has_error: !1,
              id: "input-" + this.name,
              text_reset: Object(a["a"])("Reset to default", "ga-premium"),
              text_error: Object(a["a"])(
                "The value entered does not match the required format",
                "ga-premium"
              ),
              updated_value: !1,
            };
          },
          computed: u(
            {},
            Object(r["b"])({
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
                  content: this.disabled ? this.$mi_need_to_auth : "",
                  autoHide: !1,
                  trigger: "hover focus click",
                };
              },
              disabled: function () {
                return !!this.auth_disabled && !this.has_ua;
              },
            }
          ),
          methods: {
            inputUpdate: function (t) {
              this.updateSetting(t.target.name, t.target.value);
            },
            updateSetting: function (t, e) {
              var n = this;
              return (
                !this.disabled &&
                ((this.has_error = !1),
                this.format && !this.format.test(e)
                  ? ((this.has_error = !0), !1)
                  : (this.$mi_saving_toast({}),
                    void this.$store
                      .dispatch("$_settings/updateSettings", {
                        name: t,
                        value: e,
                      })
                      .then(function (t) {
                        t.success
                          ? n.$mi_success_toast({})
                          : n.$mi_error_toast({});
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
        d = p,
        m = (n("0044"), n("2877")),
        h = Object(m["a"])(d, i, s, !1, null, "e815e6e4", null);
      e["a"] = h.exports;
    },
    cad8: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { class: t.componentClass },
            [
              t.title
                ? n("h3", {
                    class: t.titleClass,
                    domProps: { textContent: t._s(t.title) },
                  })
                : t._e(),
              t.tooltip
                ? n("settings-info-tooltip", { attrs: { content: t.tooltip } })
                : t._e(),
              n(
                "div",
                {
                  staticClass:
                    "monsterinsights-table-box-list monsterinsights-table-box-table",
                },
                [
                  t.rows.length > 0
                    ? n("table", [
                        t.headers.length > 0
                          ? n("thead", [
                              n(
                                "tr",
                                t._l(t.headers, function (e, i) {
                                  return n("th", {
                                    key: i,
                                    domProps: { textContent: t._s(e) },
                                  });
                                }),
                                0
                              ),
                            ])
                          : t._e(),
                        n(
                          "tbody",
                          t._l(t.tableRows, function (e, i) {
                            return n(
                              "tr",
                              {
                                key: i,
                                class: t.rowClass(i),
                                on: {
                                  click: function (e) {
                                    return t.toggleMobileTables(i);
                                  },
                                },
                              },
                              t._l(e, function (e, s) {
                                return n(
                                  "td",
                                  { key: s, class: t.cellClass(s) },
                                  [
                                    t.showMobileRow(i, s)
                                      ? n("div", {
                                          staticClass:
                                            "monsterinsights-table-mobile-heading",
                                          domProps: {
                                            textContent: t._s(t.headers[s]),
                                          },
                                        })
                                      : t._e(),
                                    n("div", {
                                      staticClass:
                                        "monsterinsights-table-item-content",
                                      domProps: {
                                        innerHTML: t._s(t.cellText(e, s, i)),
                                      },
                                    }),
                                  ]
                                );
                              }),
                              0
                            );
                          }),
                          0
                        ),
                      ])
                    : n(
                        "div",
                        { staticClass: "monsterinsights-table-no-data" },
                        [
                          n("h3", {
                            domProps: { textContent: t._s(t.emptytext) },
                          }),
                        ]
                      ),
                ]
              ),
              t.hasButtonSlot() || t.paginate
                ? n(
                    "div",
                    { staticClass: "monsterinsights-table-box-footer" },
                    [
                      t._t("button"),
                      t.paginate
                        ? n("reports-pagination", {
                            attrs: { limit: t.limit, length: t.rows.length },
                            on: { updated: t.changeLimit },
                          })
                        : t._e(),
                    ],
                    2
                  )
                : t._e(),
            ],
            1
          );
        },
        s = [],
        o =
          (n("a4d3"),
          n("4de4"),
          n("4160"),
          n("fb6a"),
          n("a9e3"),
          n("e439"),
          n("dbb4"),
          n("b64b"),
          n("159b"),
          n("4795"),
          n("fc11")),
        a = n("561c"),
        r = n("2f62"),
        c = n("93ec"),
        l = n("bbd6");
      function u(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          e &&
            (i = i.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function p(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? u(Object(n), !0).forEach(function (e) {
                Object(o["a"])(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : u(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var d = {
          name: "ReportTableBox",
          components: {
            ReportsPagination: l["a"],
            SettingsInfoTooltip: c["a"],
          },
          props: {
            title: String,
            tooltip: String,
            rows: Array,
            headers: Array,
            button: Object,
            emptytext: String,
            mobileWidth: { default: 783, type: Number },
            icon: { default: "", type: String },
          },
          data: function () {
            return {
              paginate: !1,
              limit: 10,
              text_show: Object(a["a"])("Show", "ga-premium"),
              activeRow: "",
              isMobile: !1,
              resizing: !1,
            };
          },
          computed: p(
            {},
            Object(r["b"])({
              mobileTableExpanded: "$_reports/mobileTableExpanded",
            }),
            {
              mobileHeaders: function () {
                var t = [];
                return (
                  this.headers.forEach(function (e, n) {
                    n > 0 && t.push(e);
                  }),
                  t
                );
              },
              emptyTable: function () {
                var t = [[this.emptytext]];
                while (t.length < 10) t.push(["&nbsp;"]);
                return t;
              },
              componentClass: function () {
                var t = "monsterinsights-table-box";
                return (
                  this.isMobile && (t += " monsterinsights-table-box-mobile"), t
                );
              },
              tableRows: function () {
                var t = this.rows;
                if (t.length < 10) {
                  var e = [],
                    n = 0;
                  while (n < this.headers.length) e.push(""), n++;
                  while (t.length < 10) t.push(e);
                }
                return (t = t.slice(0, this.limit)), t;
              },
              titleClass: function () {
                var t = "monsterinsights-report-title ";
                return (
                  this.icon && (t += this.icon),
                  this.paginate && (t += " monsterinsights-has-pagination"),
                  t
                );
              },
            }
          ),
          methods: {
            hasButtonSlot: function () {
              return (
                this.rows.length > 10 && (this.paginate = !0),
                this.$slots["button"]
              );
            },
            getButtonClass: function (t) {
              var e = "monsterinsights-button";
              return (
                t === this.limit && (e += " monsterinsights-selected-interval"),
                e
              );
            },
            cellText: function (t, e, n) {
              if ("" === t) return "&nbsp;";
              if (0 === e) {
                var i = n + 1;
                return (
                  '<span class="monsterinsights-reports-list-count">' +
                  i +
                  '.</span><span class="monsterinsights-reports-list-title">' +
                  t +
                  "</span>"
                );
              }
              return t;
            },
            rowClass: function (t) {
              var e = "monsterinsights-table-list-item";
              return (
                (this.mobileTableExpanded || this.activeRow === t) &&
                  window.innerWidth < this.mobileWidth &&
                  (e += " monsterinsights-table-list-item-active"),
                "" === this.tableRows[t][0] &&
                  (e += " monsterinsights-table-list-item-empty"),
                e
              );
            },
            showMobileRow: function (t, e) {
              return (
                window.innerWidth < this.mobileWidth &&
                e > 0 &&
                (this.mobileTableExpanded || t === this.activeRow)
              );
            },
            handleResize: function () {
              this.resizing ||
                ((this.resizing = !0),
                window.requestAnimationFrame
                  ? window.requestAnimationFrame(this.resizeCallback)
                  : setTimeout(this.resizeCallback, 66));
            },
            resizeCallback: function () {
              (this.isMobile = window.innerWidth < this.mobileWidth),
                (this.resizing = !1);
            },
            cellClass: function (t) {
              return t++, "monsterinsights-table-cell-" + t;
            },
            toggleMobileTables: function (t) {
              if (this.mobileTableExpanded) return !1;
              this.activeRow = this.activeRow === t ? "" : t;
            },
            changeLimit: function (t) {
              this.limit = t;
            },
          },
          mounted: function () {
            window.addEventListener("resize", this.handleResize),
              this.handleResize();
          },
          beforeDestroy: function () {
            window.removeEventListener("resize", this.handleResize);
          },
        },
        m = d,
        h = n("2877"),
        f = Object(h["a"])(m, i, s, !1, null, null, null);
      e["a"] = f.exports;
    },
    d3fc: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "monsterinsights-widget-error" }, [
            n("div", { staticClass: "swal2-header" }, [
              t._m(0),
              n("h2", {
                staticClass: "swal2-title",
                attrs: { id: "monsterinsights-error-title" },
                domProps: { textContent: t._s(t.title) },
              }),
            ]),
            t.error.content
              ? n("div", {
                  staticClass: "monsterinsights-error-content",
                  domProps: { innerHTML: t._s(t.error.content) },
                })
              : t._e(),
            t.error.footer
              ? n("div", {
                  staticClass: "monsterinsights-error-footer",
                  domProps: { innerHTML: t._s(t.error.footer) },
                })
              : t._e(),
          ]);
        },
        s = [
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                staticClass: "swal2-icon swal2-error swal2-animate-error-icon",
                staticStyle: { display: "flex" },
              },
              [
                n("span", { staticClass: "swal2-x-mark" }, [
                  n("span", { staticClass: "swal2-x-mark-line-left" }),
                  n("span", { staticClass: "swal2-x-mark-line-right" }),
                ]),
              ]
            );
          },
        ],
        o = n("561c"),
        a = {
          props: { error: [Object, Boolean] },
          computed: {
            title: function () {
              return this.error.title.title
                ? this.error.title.title
                : Object(o["a"])("Error", "ga-premium");
            },
          },
          name: "WidgetReportError",
        },
        r = a,
        c = n("2877"),
        l = Object(c["a"])(r, i, s, !1, null, null, null);
      e["a"] = l.exports;
    },
    d429: function (t, e, n) {
      "use strict";
      n("4160"),
        n("a15b"),
        n("b64b"),
        n("d3b7"),
        n("e25e"),
        n("ac1f"),
        n("25f0"),
        n("5319"),
        n("1276"),
        n("159b");
      var i = n("bc3a"),
        s = n.n(i),
        o = n("2b0e"),
        a = n("561c"),
        r = function (t, e, n, i) {
          return new Promise(function (r) {
            var c = new FormData();
            c.append("action", "monsterinsights_vue_get_report_data"),
              c.append("nonce", o["a"].prototype.$mi.nonce),
              c.append("report", e),
              c.append("start", n),
              c.append("end", i),
              s.a
                .post(o["a"].prototype.$mi.ajax, c)
                .then(function (t) {
                  r(t.data);
                })
                .catch(function (e) {
                  if (
                    (t.dispatch("$_app/block", !1, { root: !0 }), e.response)
                  ) {
                    var n = e.response;
                    return o["a"].prototype.$mi_error_toast({
                      title: Object(a["d"])(
                        Object(a["a"])(
                          "Can't load report data. Error: %1$s, %2$s",
                          "ga-premium"
                        ),
                        n.status,
                        n.statusText
                      ),
                    });
                  }
                  o["a"].prototype.$swal.hideLoading(),
                    o["a"].prototype.$mi_error_toast({
                      allowOutsideClick: !0,
                      allowEscapeKey: !0,
                      title: Object(a["a"])(
                        "Error loading report data",
                        "ga-premium"
                      ),
                      html: e.message,
                    });
                });
          });
        },
        c = function (t) {
          if ("undefined" !== typeof t) {
            var e = parseInt(t.toString().replace(".", ""), 10),
              n = e.toString().length;
            return 1 === n
              ? 1 === e
                ? parseInt(e + "00")
                : parseInt(e + "0")
              : e;
          }
        },
        l = function (t) {
          if ("undefined" !== typeof t) {
            var e = {};
            return (
              Object.keys(t).forEach(function (n) {
                var i = n.toString().split("-").join("_");
                e[i] = t[n];
              }),
              e
            );
          }
        };
      e["a"] = {
        fetchReportData: r,
        getFormattedScore: c,
        keysReplaceHyphensWithUnderscores: l,
      };
    },
    d71e: function (t, e, n) {
      "use strict";
      var i = function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            { staticClass: "monsterinsights-table-box", attrs: { id: t.id } },
            [
              t.title
                ? n("h3", {
                    class: t.titleClass,
                    domProps: { textContent: t._s(t.title) },
                  })
                : t._e(),
              t.tooltip
                ? n("settings-info-tooltip", { attrs: { content: t.tooltip } })
                : t._e(),
              n(
                "div",
                { staticClass: "monsterinsights-table-box-list" },
                t._l(t.tableRows(), function (e, i) {
                  return n(
                    "div",
                    { key: i, staticClass: "monsterinsights-table-list-item" },
                    [
                      n("span", {
                        staticClass: "monsterinsights-reports-list-count",
                        domProps: { textContent: t._s(e.number) },
                      }),
                      n("span", {
                        staticClass: "monsterinsights-reports-list-text",
                        domProps: { innerHTML: t._s(e.text) },
                      }),
                      n("span", {
                        staticClass: "monsterinsights-reports-list-number",
                        domProps: { innerHTML: t._s(t.$formatNumber(e.right)) },
                      }),
                    ]
                  );
                }),
                0
              ),
              t.hasButtonSlot() || t.paginate
                ? n(
                    "div",
                    { staticClass: "monsterinsights-table-box-footer" },
                    [
                      t._t("button"),
                      t.paginate
                        ? n("reports-pagination", {
                            attrs: { limit: t.limit, length: t.rows.length },
                            on: { updated: t.changeLimit },
                          })
                        : t._e(),
                    ],
                    2
                  )
                : t._e(),
            ],
            1
          );
        },
        s = [],
        o = (n("fb6a"), n("93ec")),
        a = n("bbd6"),
        r = {
          name: "ReportListBox",
          components: {
            ReportsPagination: a["a"],
            SettingsInfoTooltip: o["a"],
          },
          props: {
            title: String,
            id: String,
            tooltip: String,
            rows: Array,
            icon: { default: "", type: String },
          },
          data: function () {
            return { paginate: !1, limit: 10 };
          },
          computed: {
            titleClass: function () {
              var t = "monsterinsights-report-title ";
              return (
                this.icon && (t += this.icon),
                this.paginate && (t += " monsterinsights-has-pagination"),
                t
              );
            },
          },
          methods: {
            tableRows: function () {
              var t = this.rows;
              if (t.length < 10)
                while (t.length < 10)
                  t.push({ number: "", text: "", right: "" });
              return (
                t.length > 10 && (this.paginate = !0),
                (t = t.slice(0, this.limit)),
                t
              );
            },
            hasButtonSlot: function () {
              return this.$slots["button"];
            },
            changeLimit: function (t) {
              this.limit = t;
            },
          },
        },
        c = r,
        l = n("2877"),
        u = Object(l["a"])(c, i, s, !1, null, null, null);
      e["a"] = u.exports;
    },
    d98d: function (t, e, n) {
      "use strict";
      n("4795");
      var i,
        s,
        o = {
          name: "SlideDownUp",
          functional: !0,
          props: { group: { type: Boolean, default: !1 }, done: Function },
          render: function (t, e) {
            var n = {
                props: { name: "expand" },
                on: {
                  afterEnter: function (t) {
                    t.style.height = "auto";
                  },
                  enter: function (t) {
                    var n = getComputedStyle(t),
                      i = n.width;
                    (t.style.width = i),
                      (t.style.position = "absolute"),
                      (t.style.visibility = "hidden"),
                      (t.style.height = "auto");
                    var s = getComputedStyle(t),
                      o = s.height;
                    (t.style.width = "auto"),
                      (t.style.position = "relative"),
                      (t.style.visibility = "visible"),
                      (t.style.height = 0),
                      setTimeout(function () {
                        t.style.height = o;
                      }),
                      e.props.done &&
                        setTimeout(function () {
                          e.props.done();
                        }, 500);
                  },
                  leave: function (t) {
                    var e = getComputedStyle(t),
                      n = e.height;
                    (t.style.height = n),
                      setTimeout(function () {
                        t.style.height = 0;
                      });
                  },
                },
              },
              i = "transition";
            return (
              e.props.group && (i = "transition-group"), t(i, n, e.children)
            );
          },
        },
        a = o,
        r = (n("dffc"), n("e8ca"), n("2877")),
        c = Object(r["a"])(a, i, s, !1, null, "6038a3d0", null);
      e["a"] = c.exports;
    },
    dffc: function (t, e, n) {
      "use strict";
      var i = n("f6e1"),
        s = n.n(i);
      s.a;
    },
    e8ca: function (t, e, n) {
      "use strict";
      var i = n("bef0"),
        s = n.n(i);
      s.a;
    },
    efb1: function (t, e, n) {
      "use strict";
      var i = {
        isThemeAvailable: function () {
          return !0;
        },
        canaccess: function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "pro",
            n = !1;
          switch (e) {
            case "master":
              n = "master" === t;
              break;
            case "pro":
              n = "master" === t || "pro" === t;
              break;
            case "plus":
              n = "master" === t || "pro" === t || "plus" === t;
              break;
            case "basic":
              n =
                "master" === t || "pro" === t || "plus" === t || "basic" === t;
              break;
            case "lite":
            default:
              n = !0;
              break;
          }
          return n;
        },
      };
      e["a"] = i;
    },
    f284: function (t, e, n) {
      "use strict";
      n("c975"), n("fb6a"), n("d3b7"), n("4795");
      var i = n("d429"),
        s = n("2b0e"),
        o = n("561c"),
        a = function (t, e) {
          return new Promise(function (n) {
            return s["a"].prototype.$mi.authed
              ? t.state[e] &&
                t.state[e].reportcurrentrange &&
                t.state[e].reportcurrentrange.startDate ===
                  t.state.date.start &&
                t.state[e].reportcurrentrange.endDate === t.state.date.end
                ? (n(!1), t.commit("DISABLE_BLUR"), !1)
                : (s["a"].prototype.$mi_loading_toast(),
                  t.commit("ENABLE_BLUR"),
                  void i["a"]
                    .fetchReportData(t, e, t.state.date.start, t.state.date.end)
                    .then(function (i) {
                      if ("license_level" === i.data.message)
                        return p(t), void n(!1);
                      if (i.success)
                        p(t),
                          t.commit("DISABLE_BLUR"),
                          t.commit("UPDATE_REPORT_DATA", {
                            report: e,
                            data: i.data,
                          }),
                          n(!0);
                      else {
                        if ("invalid_grant" === i.data.message)
                          return p(t), n(!1), void t.commit("ENABLE_REAUTH");
                        i.data.footer && "install_addon" === i.data.footer
                          ? r(t, e).then(function (n) {
                              t.rootState.$_widget &&
                                (t.commit("DISABLE_BLUR"),
                                t.commit("$_widget/UPDATE_LOADED", !0, {
                                  root: !0,
                                }));
                              var a = n
                                ? Object(o["a"])("activate", "ga-premium")
                                : Object(o["a"])("install", "ga-premium");
                              s["a"].prototype.$mi_error_toast({
                                title: !1,
                                html: Object(o["d"])(i.data.message, a),
                                footer:
                                  '<a href="' +
                                  s["a"].prototype.$mi.addons_url +
                                  '">' +
                                  Object(o["a"])(
                                    "Visit addons page",
                                    "ga-premium"
                                  ) +
                                  "</a>",
                                report: e,
                              }),
                                s["a"].prototype
                                  .$swal({
                                    type: "error",
                                    animation: !1,
                                    customContainerClass:
                                      "monsterinsights-swal",
                                    title: Object(o["a"])(
                                      "Report Unavailable",
                                      "ga-premium"
                                    ),
                                    html: Object(o["d"])(i.data.message, a),
                                    allowOutsideClick: !0,
                                    allowEscapeKey: !0,
                                    allowEnterKey: !1,
                                    showCancelButton: !0,
                                    confirmButtonText: Object(o["d"])(
                                      Object(o["a"])("%s Addon", "ga-premium"),
                                      a.charAt(0).toUpperCase() + a.slice(1)
                                    ),
                                    cancelButtonText: Object(o["a"])(
                                      "Dismiss",
                                      "ga-premium"
                                    ),
                                  })
                                  .then(function (i) {
                                    i.value &&
                                      (n
                                        ? l(t, t.rootState.$_addons.addons[e])
                                        : c(t, e));
                                  });
                            })
                          : i.data.footer &&
                            i.data.footer.indexOf("#/ecommerce") > 0
                          ? (n(!1),
                            s["a"].prototype
                              .$mi_error_toast({
                                title: !1,
                                html: i.data.message,
                                report: e,
                                showCancelButton: !0,
                                cancelButtonText: Object(o["a"])(
                                  "Go Back To Reports",
                                  "ga-premium"
                                ),
                                confirmButtonText: Object(o["a"])(
                                  "Enable Enhanced eCommerce",
                                  "ga-premium"
                                ),
                              })
                              .then(function (t) {
                                t.value && (window.location = i.data.footer);
                              }))
                          : (n(!1),
                            s["a"].prototype.$mi_error_toast({
                              title: !1,
                              html: i.data.message,
                              footer: i.data.footer,
                              report: e,
                            }));
                      }
                    }))
              : (n(!1), t.commit("ENABLE_BLUR"), t.commit("ENABLE_NOAUTH"), !1);
          });
        };
      function r(t, e) {
        return new Promise(function (n) {
          t.dispatch("$_addons/getAddons", "", { root: !0 })
            .then(function () {
              t.rootState.$_addons.addons[e] &&
              t.rootState.$_addons.addons[e].installed
                ? n(!0)
                : n(!1);
            })
            .catch(function () {
              n(!1), u();
            });
        });
      }
      function c(t, e) {
        s["a"].prototype.$swal({
          type: "info",
          customContainerClass: "monsterinsights-swal",
          title: Object(o["a"])("Installing Addon", "ga-premium"),
          html: Object(o["a"])("Please wait", "ga-premium"),
          allowOutsideClick: !1,
          allowEscapeKey: !1,
          allowEnterKey: !1,
          onOpen: function () {
            s["a"].prototype.$swal.showLoading(),
              t
                .dispatch(
                  "$_addons/installAddon",
                  t.rootState.$_addons.addons[e],
                  { root: !0 }
                )
                .then(function () {
                  l(t, t.rootState.$_addons.addons[e]);
                })
                .catch(function () {
                  u();
                });
          },
        });
      }
      function l(t, e) {
        s["a"].prototype.$swal({
          type: "info",
          customContainerClass: "monsterinsights-swal",
          title: Object(o["a"])("Activating Addon", "ga-premium"),
          html: Object(o["a"])("Please wait", "ga-premium"),
          allowOutsideClick: !1,
          allowEscapeKey: !1,
          allowEnterKey: !1,
          onOpen: function () {
            s["a"].prototype.$swal.showLoading();
          },
        }),
          t
            .dispatch("$_addons/activateAddon", e, { root: !0 })
            .then(function () {
              s["a"].prototype.$swal({
                type: "info",
                customContainerClass: "monsterinsights-swal",
                title: Object(o["a"])("Addon Activated", "ga-premium"),
                html: Object(o["a"])("Loading report data", "ga-premium"),
                allowOutsideClick: !1,
                allowEscapeKey: !1,
                allowEnterKey: !1,
                onOpen: function () {
                  s["a"].prototype.$swal.showLoading(),
                    setTimeout(function () {
                      window.location.reload();
                    }, 1e3);
                },
              });
            })
            .catch(function (t) {
              u(t);
            });
      }
      function u(t) {
        var e = Object(o["a"])("Please activate manually", "ga-premium");
        t.response &&
          (e = Object(o["d"])(
            Object(o["a"])("Error: %1$s, %2$s", "ga-premium"),
            t.response.status,
            t.response.statusText
          )),
          s["a"].prototype
            .$swal({
              type: "error",
              customContainerClass: "monsterinsights-swal",
              title: Object(o["a"])("Error Activating Addon", "ga-premium"),
              html: e,
              allowOutsideClick: !1,
              allowEscapeKey: !1,
              allowEnterKey: !1,
              showCancelButton: !0,
              confirmButtonText: Object(o["a"])("View Addons", "ga-premium"),
              cancelButtonText: Object(o["a"])("Dismiss", "ga-premium"),
            })
            .then(function (t) {
              t.value &&
                ((window.location = s["a"].prototype.$mi.addons_url),
                s["a"].prototype.$swal({
                  type: "info",
                  customContainerClass: "monsterinsights-swal",
                  title: Object(o["a"])("Redirecting", "ga-premium"),
                  html: Object(o["a"])("Please wait", "ga-premium"),
                  allowOutsideClick: !1,
                  allowEscapeKey: !1,
                  allowEnterKey: !1,
                  onOpen: function () {
                    s["a"].prototype.$swal.showLoading();
                  },
                }));
            });
      }
      function p(t) {
        t.rootState.$_widget || s["a"].prototype.$swal.close();
      }
      var d = { getReportData: a },
        m = function (t) {
          return t.date;
        },
        h = function (t) {
          return t.activeReport;
        },
        f = function (t) {
          return t.blur;
        },
        g = function (t) {
          return t.mobileTableExpanded;
        },
        _ = function (t) {
          return t.overview;
        },
        b = function (t) {
          return t.publisher;
        },
        v = function (t) {
          return t.ecommerce;
        },
        y = function (t) {
          return t.queries;
        },
        w = function (t) {
          return t.dimensions;
        },
        O = function (t) {
          return t.forms;
        },
        C = function (t) {
          return t.realtime;
        },
        k = function (t) {
          return t.yearinreview;
        },
        $ = function (t) {
          return t.sitespeed;
        },
        j = function (t) {
          return t.sitespeedmobile;
        },
        x = function (t) {
          return t.noauth;
        },
        P = function (t) {
          return t.reauth;
        },
        E = {
          date: m,
          activeReport: h,
          blur: f,
          mobileTableExpanded: g,
          overview: _,
          publisher: b,
          ecommerce: v,
          queries: y,
          dimensions: w,
          forms: O,
          realtime: C,
          noauth: x,
          yearinreview: k,
          reauth: P,
          sitespeed: $,
          sitespeedmobile: j,
        },
        T = function (t, e) {
          e.report && e.data && t[e.report] && s["a"].set(t, e.report, e.data);
        },
        S = function (t, e) {
          e.start &&
            e.end &&
            (s["a"].set(t.date, "start", e.start),
            s["a"].set(t.date, "end", e.end));
        },
        D = function (t, e) {
          s["a"].set(t.date, "interval", e);
        },
        A = function (t, e) {
          s["a"].set(t.date, "text", e);
        },
        L = function (t, e) {
          t.activeReport = e;
        },
        N = function (t) {
          t.blur = !0;
        },
        I = function (t) {
          t.blur = !1;
        },
        M = function (t) {
          t.mobileTableExpanded = !0;
        },
        R = function (t) {
          t.mobileTableExpanded = !1;
        },
        U = function (t) {
          t.noauth = !0;
        },
        B = function (t) {
          t.reauth = !0;
        },
        H = {
          UPDATE_REPORT_DATA: T,
          UPDATE_DATE: S,
          UPDATE_ACTIVE_REPORT: L,
          UPDATE_INTERVAL: D,
          UPDATE_DATE_TEXT: A,
          ENABLE_BLUR: N,
          DISABLE_BLUR: I,
          EXPAND_TABLES: M,
          CONTRACT_TABLES: R,
          ENABLE_NOAUTH: U,
          ENABLE_REAUTH: B,
        },
        Y = {
          date: { start: "", end: "", interval: "last30days", text: "" },
          blur: !1,
          activeReport: "overview",
          mobileTableExpanded: !1,
          overview: {},
          publisher: {},
          ecommerce: {},
          queries: {},
          dimensions: {},
          forms: {},
          realtime: {},
          yearinreview: {},
          sitespeed: {},
          sitespeedmobile: {},
          noauth: !1,
          reauth: !1,
        };
      e["a"] = {
        namespaced: !0,
        state: Y,
        actions: d,
        getters: E,
        mutations: H,
      };
    },
    f6e1: function (t, e, n) {},
  },
]);
