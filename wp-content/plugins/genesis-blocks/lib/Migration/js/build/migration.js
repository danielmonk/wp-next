!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var c = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(c.exports, c, c.exports, n), (c.l = !0), c.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var c in e)
          n.d(
            r,
            c,
            function (t) {
              return e[t];
            }.bind(null, c)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 16));
})([
  function (e, t) {
    !(function () {
      e.exports = this.wp.element;
    })();
  },
  function (e, t) {
    !(function () {
      e.exports = this.wp.i18n;
    })();
  },
  function (e, t) {
    !(function () {
      e.exports = this.regeneratorRuntime;
    })();
  },
  function (e, t) {
    !(function () {
      e.exports = this.React;
    })();
  },
  function (e, t) {
    function n(e, t, n, r, c, s, a) {
      try {
        var o = e[s](a),
          i = o.value;
      } catch (e) {
        return void n(e);
      }
      o.done ? t(i) : Promise.resolve(i).then(r, c);
    }
    e.exports = function (e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (c, s) {
          var a = e.apply(t, r);
          function o(e) {
            n(a, c, s, o, i, "next", e);
          }
          function i(e) {
            n(a, c, s, o, i, "throw", e);
          }
          o(void 0);
        });
      };
    };
  },
  function (e, t, n) {
    var r = n(11),
      c = n(12),
      s = n(13),
      a = n(15);
    e.exports = function (e, t) {
      return r(e) || c(e, t) || s(e, t) || a();
    };
  },
  function (e, t) {
    !(function () {
      e.exports = this.wp.a11y;
    })();
  },
  function (e, t) {
    !(function () {
      e.exports = this.wp.apiFetch;
    })();
  },
  function (e, t) {
    !(function () {
      e.exports = this.wp.domReady;
    })();
  },
  function (e, t) {
    function n() {
      return (
        (e.exports = n =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
        n.apply(this, arguments)
      );
    }
    e.exports = n;
  },
  function (e, t, n) {
    var r;
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
      "use strict";
      var n = {}.hasOwnProperty;
      function c() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var r = arguments[t];
          if (r) {
            var s = typeof r;
            if ("string" === s || "number" === s) e.push(r);
            else if (Array.isArray(r) && r.length) {
              var a = c.apply(null, r);
              a && e.push(a);
            } else if ("object" === s)
              for (var o in r) n.call(r, o) && r[o] && e.push(o);
          }
        }
        return e.join(" ");
      }
      e.exports
        ? ((c.default = c), (e.exports = c))
        : void 0 ===
            (r = function () {
              return c;
            }.apply(t, [])) || (e.exports = r);
    })();
  },
  function (e, t) {
    e.exports = function (e) {
      if (Array.isArray(e)) return e;
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
        var n = [],
          r = !0,
          c = !1,
          s = void 0;
        try {
          for (
            var a, o = e[Symbol.iterator]();
            !(r = (a = o.next()).done) &&
            (n.push(a.value), !t || n.length !== t);
            r = !0
          );
        } catch (e) {
          (c = !0), (s = e);
        } finally {
          try {
            r || null == o.return || o.return();
          } finally {
            if (c) throw s;
          }
        }
        return n;
      }
    };
  },
  function (e, t, n) {
    var r = n(14);
    e.exports = function (e, t) {
      if (e) {
        if ("string" == typeof e) return r(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === n && e.constructor && (n = e.constructor.name),
          "Map" === n || "Set" === n
            ? Array.from(e)
            : "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? r(e, t)
            : void 0
        );
      }
    };
  },
  function (e, t) {
    e.exports = function (e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    };
  },
  function (e, t) {
    e.exports = function () {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      c = n(8),
      s = n.n(c),
      a = n(9),
      o = n.n(a),
      i = n(5),
      l = n.n(i),
      u = (n(3), n(1)),
      b = function (e) {
        var t = e.isStepActive,
          n = e.isStepComplete,
          c = e.goToNext,
          s = e.goToPrevious,
          a = e.stepIndex,
          o = 1 === a,
          i = Object(u.__)(
            "Migrating from Atomic Blocks to Genesis Blocks is a one-way action. It can’t be undone. Please back up your site before you begin.",
            "genesis-blocks"
          );
        return (
          genesisBlocksMigration.isPro &&
            (i = Object(u.__)(
              "Migrating your Genesis Blocks content is a one-way action. It can’t be undone. Please back up your site before you begin.",
              "genesis-blocks"
            )),
          Object(r.createElement)(
            S,
            { isActive: t, isComplete: n },
            Object(r.createElement)(T, { index: a, isComplete: n }),
            Object(r.createElement)(
              P,
              {
                heading: Object(u.__)("Back Up Your Site", "genesis-blocks"),
                isStepActive: t,
              },
              Object(r.createElement)("p", null, i),
              Object(r.createElement)(
                C,
                null,
                !o && Object(r.createElement)(y, { onClick: s }),
                Object(r.createElement)(_, {
                  checkboxLabel: Object(u.__)(
                    "I have backed up my site.",
                    "genesis-blocks"
                  ),
                  onClick: c,
                  stepIndex: a,
                })
              )
            )
          )
        );
      },
      p = n(2),
      m = n.n(p),
      f = n(4),
      g = n.n(f),
      O = n(6),
      j = n(7),
      d = n.n(j),
      h = function (e) {
        var t = e.isStepActive,
          n = e.isStepComplete,
          c = e.stepIndex,
          s = e.goToNext,
          a = Object(r.useState)(0),
          o = l()(a, 2),
          i = o[0],
          b = o[1],
          p = Object(r.useState)(!1),
          f = l()(p, 2),
          j = f[0],
          h = f[1],
          v = Object(r.useState)(!1),
          k = l()(v, 2),
          _ = k[0],
          y = k[1],
          E = Object(r.useState)(""),
          x = l()(E, 2),
          w = x[0],
          A = x[1],
          M = Object(r.useState)(!1),
          B = l()(M, 2),
          I = B[0],
          F = B[1],
          L = Object(r.useState)(0),
          R = l()(L, 2),
          U = R[0],
          H = R[1],
          z = [
            Object(u.__)("Migrate block settings.", "genesis-blocks"),
            Object(u.__)(
              "Migrate block content. Migrated: ",
              "genesis-blocks"
            ) + " ".concat(U, "."),
            Object(u.__)("Migrate favorite blocks.", "genesis-blocks"),
            genesisBlocksMigration.isPro
              ? Object(u.__)("Clean up.", "genesis-blocks")
              : Object(u.__)("Deactivate Atomic Blocks.", "genesis-blocks"),
          ],
          G = (function () {
            var e = g()(
              m.a.mark(function e() {
                return m.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          d()({
                            path: "/genesis-blocks/migrate-settings",
                            method: "POST",
                          })
                            .then(
                              g()(
                                m.a.mark(function e() {
                                  return m.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return b(1), (e.next = 3), V();
                                        case 3:
                                          return (e.next = 5), Y();
                                        case 5:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              )
                            )
                            .catch(function (e) {
                              e.hasOwnProperty("message") && A(e.message),
                                Object(O.speak)(
                                  Object(u.__)(
                                    "The migration failed during settings migration.",
                                    "genesis-blocks"
                                  )
                                ),
                                y(!0),
                                h(!1);
                            })
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          V = (function () {
            var e = g()(
              m.a.mark(function e() {
                return m.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          d()({
                            path: "/genesis-blocks/migrate-pro-settings",
                            method: "POST",
                          }).catch(function (e) {
                            e.hasOwnProperty("message") && A(e.message),
                              Object(O.speak)(
                                Object(u.__)(
                                  "The pro settings migration failed.",
                                  "genesis-blocks"
                                )
                              ),
                              y(!0);
                          })
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          Y = (function () {
            var e = g()(
              m.a.mark(function e() {
                return m.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          "invalid_json",
                          (e.next = 3),
                          d()({
                            path: "/genesis-blocks/migrate-content",
                            method: "POST",
                          })
                            .then(
                              (function () {
                                var e = g()(
                                  m.a.mark(function e(t) {
                                    return m.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (
                                              !(
                                                t.results &&
                                                t.results.postsFound > 0
                                              )
                                            ) {
                                              e.next = 5;
                                              break;
                                            }
                                            return (
                                              H(function (e) {
                                                return e + t.results.postsFound;
                                              }),
                                              (e.next = 4),
                                              Y()
                                            );
                                          case 4:
                                            return e.abrupt("return");
                                          case 5:
                                            return b(2), (e.next = 8), D();
                                          case 8:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                            .catch(
                              (function () {
                                var e = g()(
                                  m.a.mark(function e(t) {
                                    return m.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (
                                              !t.hasOwnProperty("code") ||
                                              "invalid_json" !== t.code
                                            ) {
                                              e.next = 6;
                                              break;
                                            }
                                            return (e.next = 3), Y();
                                          case 3:
                                            return e.abrupt("return");
                                          case 6:
                                            t.hasOwnProperty("message") &&
                                              A(t.message);
                                          case 7:
                                            Object(O.speak)(
                                              Object(u.__)(
                                                "The migration failed during post content migration",
                                                "genesis-blocks"
                                              )
                                            ),
                                              y(!0);
                                          case 9:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          D = (function () {
            var e = g()(
              m.a.mark(function e() {
                return m.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          "invalid_json",
                          (e.next = 3),
                          d()({
                            path: "/genesis-blocks/migrate-user-meta",
                            method: "POST",
                          })
                            .then(
                              g()(
                                m.a.mark(function e() {
                                  return m.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return b(3), (e.next = 3), W();
                                        case 3:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              )
                            )
                            .catch(
                              (function () {
                                var e = g()(
                                  m.a.mark(function e(t) {
                                    return m.a.wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            if (
                                              !t.hasOwnProperty("code") ||
                                              "invalid_json" !== t.code
                                            ) {
                                              e.next = 6;
                                              break;
                                            }
                                            return (e.next = 3), D();
                                          case 3:
                                            return e.abrupt("return");
                                          case 6:
                                            t.hasOwnProperty("message") &&
                                              A(t.message);
                                          case 7:
                                            Object(O.speak)(
                                              Object(u.__)(
                                                "The migration failed while migrating favorite blocks.",
                                                "genesis-blocks"
                                              )
                                            ),
                                              y(!0);
                                          case 9:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                );
                                return function (t) {
                                  return e.apply(this, arguments);
                                };
                              })()
                            )
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          W = (function () {
            var e = g()(
              m.a.mark(function e() {
                return m.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          d()({
                            path: "/genesis-blocks/migrate-cleanup",
                            method: "POST",
                          }).then(function () {
                            Object(O.speak)(
                              Object(u.__)(
                                "The migration was successful!",
                                "genesis-blocks"
                              )
                            ),
                              F(!0),
                              s();
                          })
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          q = (function () {
            var e = g()(
              m.a.mark(function e() {
                return m.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          Object(O.speak)(
                            Object(u.__)(
                              "The migration is now in progress",
                              "genesis-blocks"
                            )
                          ),
                          A(""),
                          h(!0),
                          (e.next = 5),
                          G()
                        );
                      case 5:
                        h(!1);
                      case 6:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return Object(r.createElement)(
          S,
          { isActive: t, isComplete: n },
          Object(r.createElement)(T, { index: c, isComplete: n }),
          Object(r.createElement)(
            P,
            {
              heading: Object(u.__)("Migrate Your Content", "genesis-blocks"),
              isStepActive: t,
              isLastStep: !0,
            },
            !I &&
              Object(r.createElement)(
                "p",
                null,
                Object(u.__)(
                  "Okay! Everything is ready. Let’s do this. While the migration is underway, don’t leave this page.",
                  "genesis-blocks"
                )
              ),
            !!w &&
              Object(r.createElement)(
                "div",
                { className: "gb-migration__error" },
                Object(r.createElement)(
                  "p",
                  null,
                  Object(u.__)(
                    "The following error occurred:",
                    "genesis-blocks"
                  )
                ),
                Object(r.createElement)("p", null, w)
              ),
            (j || I) &&
              Object(r.createElement)(
                r.Fragment,
                null,
                Object(r.createElement)(N, {
                  steps: z,
                  currentStep: i,
                  complete: !j,
                })
              ),
            !j &&
              !I &&
              Object(r.createElement)(
                "button",
                { className: "btn", onClick: q },
                _
                  ? Object(u.__)("Try Again", "genesis-blocks")
                  : Object(u.__)("Migrate Now", "genesis-blocks")
              ),
            I &&
              Object(r.createElement)(
                r.Fragment,
                null,
                !genesisBlocksMigration.isPro &&
                  Object(r.createElement)(
                    "p",
                    null,
                    Object(r.createElement)(
                      "span",
                      {
                        role: "img",
                        "aria-label": Object(u.__)(
                          "party emoji",
                          "genesis-blocks"
                        ),
                      },
                      "🎉"
                    ),
                    " ",
                    Object(u.__)(
                      "The migration completed successfully! Time to say goodbye to Atomic Blocks (it’s been fun!) and step into the FUTURE",
                      "genesis-blocks"
                    ),
                    " ",
                    Object(r.createElement)(
                      "span",
                      { className: "message-future" },
                      Object(u.__)("FUTURE", "genesis-blocks")
                    ),
                    " ",
                    Object(r.createElement)(
                      "sub",
                      null,
                      Object(u.__)("FUTURE", "genesis-blocks")
                    ),
                    "."
                  ),
                genesisBlocksMigration.isPro &&
                  Object(r.createElement)(
                    "p",
                    null,
                    Object(r.createElement)(
                      "span",
                      {
                        role: "img",
                        "aria-label": Object(u.__)(
                          "party emoji",
                          "genesis-blocks"
                        ),
                      },
                      "🎉"
                    ),
                    " ",
                    Object(u.__)(
                      "The migration completed successfully!",
                      "genesis-blocks"
                    )
                  ),
                Object(r.createElement)(
                  C,
                  null,
                  Object(r.createElement)(
                    "a",
                    { href: genesisBlocksMigration.gbUrl, className: "btn" },
                    Object(u.__)(
                      "Get started with Genesis Blocks",
                      "genesis-blocks"
                    )
                  )
                )
              )
          )
        );
      },
      v = function (e) {
        var t = e.isStepActive,
          n = e.isStepComplete,
          c = e.stepIndex,
          s = e.goToNext,
          a = e.goToPrevious;
        return Object(r.createElement)(
          S,
          { isActive: t, isComplete: n },
          Object(r.createElement)(T, { index: c, isComplete: n }),
          Object(r.createElement)(
            P,
            {
              heading: Object(u.__)(
                "Update CSS and PHP code",
                "genesis-blocks"
              ),
              isStepActive: t,
            },
            Object(r.createElement)(
              "p",
              null,
              Object(r.createElement)(
                "b",
                null,
                Object(u.__)(
                  "You will need to make manual changes if your theme, plugins or customizations include Atomic Blocks CSS or PHP:",
                  "genesis-blocks"
                )
              )
            ),
            Object(r.createElement)(
              "ul",
              { className: "list-disc list-inside mt-2" },
              Object(r.createElement)(
                "li",
                null,
                Object(r.createElement)(
                  "b",
                  null,
                  Object(u.__)("CSS", "genesis-blocks")
                ),
                " - ",
                Object(u.__)(
                  "CSS classes and HTML markup have changed.",
                  "genesis-blocks"
                ),
                " ",
                Object(r.createElement)(
                  "a",
                  {
                    href: "https://wpeng.in/ab-gb-css/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  Object(u.__)(
                    "Check if you need to make CSS changes.",
                    "genesis-blocks"
                  )
                )
              ),
              Object(r.createElement)(
                "li",
                null,
                Object(r.createElement)(
                  "b",
                  null,
                  Object(u.__)("PHP", "genesis-blocks")
                ),
                " - ",
                Object(u.__)(
                  "Filter, function and block names have changed.",
                  "genesis-blocks"
                ),
                " ",
                Object(r.createElement)(
                  "a",
                  {
                    href: "https://wpeng.in/ab-gb-php/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                  },
                  Object(u.__)(
                    "Check if you need to make PHP changes.",
                    "genesis-blocks"
                  )
                )
              )
            ),
            Object(r.createElement)(
              C,
              null,
              Object(r.createElement)(y, { onClick: a }),
              Object(r.createElement)(_, {
                checkboxLabel: Object(u.__)(
                  "I have made necessary changes to PHP and CSS.",
                  "genesis-blocks"
                ),
                onClick: s,
                stepIndex: c,
              })
            )
          )
        );
      },
      k = function () {
        var e = Object(r.useState)(1),
          t = l()(e, 2),
          n = t[0],
          c = t[1],
          s = function () {
            c(n - 1);
          },
          a = function () {
            c(n + 1);
          },
          i = [b, v, h];
        return Object(r.createElement)(
          "div",
          { className: "gb-migration__content-wrapper" },
          Object(r.createElement)(
            "div",
            { className: "container gb-migration__content-container" },
            Object(r.createElement)(E, null),
            i.map(function (e, t) {
              var c = 1 + t,
                i = n === c,
                l = n > c;
              return Object(r.createElement)(
                e,
                o()(
                  { key: "gb-migration-step-".concat(c) },
                  {
                    currentStepIndex: n,
                    goToNext: a,
                    goToPrevious: s,
                    isStepActive: i,
                    isStepComplete: l,
                    stepIndex: c,
                  }
                )
              );
            })
          )
        );
      },
      _ = function (e) {
        var t = e.onClick,
          n = e.checkboxLabel,
          c = e.stepIndex,
          s = Object(r.useState)(!1),
          a = l()(s, 2),
          o = a[0],
          i = a[1];
        if (!n)
          return Object(r.createElement)(
            "button",
            { className: "btn", onClick: t },
            Object(u.__)("Next Step", "genesis-blocks")
          );
        var b = "gb-migration-check-".concat(c);
        return Object(r.createElement)(
          r.Fragment,
          null,
          Object(r.createElement)(
            "form",
            null,
            Object(r.createElement)("input", {
              id: b,
              type: "checkbox",
              onClick: function () {
                i(!o);
              },
            }),
            Object(r.createElement)(
              "label",
              { htmlFor: b, className: "ml-2 font-medium" },
              n
            )
          ),
          Object(r.createElement)(
            "button",
            { className: "btn", onClick: t, disabled: !o },
            Object(u.__)("Next Step", "genesis-blocks")
          )
        );
      },
      y = function (e) {
        var t = e.onClick;
        return Object(r.createElement)(
          "button",
          { className: "btn btn-secondary", onClick: t },
          Object(u.__)("Previous", "genesis-blocks")
        );
      },
      E = function () {
        var e = Object(u.__)(
          "Atomic Blocks has been renamed to Genesis Blocks",
          "genesis-blocks"
        );
        return (
          genesisBlocksMigration.isPro &&
            (e = Object(u.__)(
              "We need to update your blocks to give you the latest features!",
              "genesis-blocks"
            )),
          Object(r.createElement)(
            r.Fragment,
            null,
            Object(r.createElement)(
              "div",
              null,
              Object(r.createElement)("h2", null, e),
              Object(r.createElement)(
                "p",
                null,
                Object(u.__)(
                  "Same powerful blocks, same beautiful designs, same innovative team.",
                  "genesis-blocks"
                )
              ),
              Object(r.createElement)(
                "p",
                null,
                Object(u.__)(
                  "To continue receiving the best of what our team is building, we encourage you to migrate. Our migration tool makes this nice and easy, and for the majority of use cases, completely automated.",
                  "genesis-blocks"
                )
              ),
              Object(r.createElement)(
                "div",
                { className: "dev-notice" },
                Object(r.createElement)(
                  "svg",
                  { fill: "currentColor", viewBox: "0 0 20 20" },
                  Object(r.createElement)("path", {
                    fillRule: "evenodd",
                    d:
                      "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                    clipRule: "evenodd",
                  })
                ),
                Object(r.createElement)(
                  "span",
                  null,
                  Object(u.__)(
                    "Need to let the developer for this site know about this? Send them this link.",
                    "genesis-blocks"
                  )
                ),
                Object(r.createElement)(
                  "a",
                  {
                    href: "https://wpeng.in/ab-gb-dev/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "btn",
                  },
                  Object(r.createElement)(
                    "span",
                    null,
                    Object(u.__)("Developer Notice", "genesis-blocks")
                  ),
                  Object(r.createElement)(
                    "svg",
                    { fill: "currentColor", viewBox: "0 0 20 20" },
                    Object(r.createElement)("path", {
                      d:
                        "M11 3a1 1 0 100 2h3.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z",
                    }),
                    Object(r.createElement)("path", {
                      d:
                        "M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z",
                    })
                  )
                )
              )
            ),
            Object(r.createElement)(
              "h2",
              null,
              Object(u.__)("Let’s Migrate", "genesis-blocks")
            )
          )
        );
      },
      x = n(10),
      w = n.n(x),
      S = function (e) {
        var t = e.isActive,
          n = e.isComplete,
          c = e.children;
        return Object(r.createElement)(
          "div",
          {
            className: w()("step", { "step--active": t, "step--complete": n }),
          },
          c
        );
      },
      P = function (e) {
        var t = e.children,
          n = e.heading,
          c = e.isStepActive,
          s = e.isLastStep;
        return Object(r.createElement)(
          "div",
          { className: "step-content" },
          Object(r.createElement)("h3", null, n),
          (c || s) && t
        );
      },
      C = function (e) {
        var t = e.children;
        return Object(r.createElement)("div", { className: "step-footer" }, t);
      },
      T = function (e) {
        var t = e.index,
          n = e.isComplete,
          c = "gb-migration-icon-".concat(t),
          s = Object(r.createElement)(
            "svg",
            {
              fill: "currentColor",
              viewBox: "0 0 20 20",
              "aria-labelledby": c,
            },
            Object(r.createElement)("path", {
              fillRule: "evenodd",
              d:
                "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
              clipRule: "evenodd",
            }),
            Object(r.createElement)(
              "title",
              { id: c },
              Object(u.__)("Step completed", "genesis-blocks")
            )
          );
        return Object(r.createElement)(
          "div",
          { className: "step-icon" },
          n ? s : t
        );
      },
      N = function (e) {
        var t = e.steps,
          n = e.currentStep,
          c = e.complete,
          s = t.map(function (e, s) {
            var a = "";
            return (
              n === s && (a = "active"),
              (n > s || (c && n === t.length - 1)) && (a = "done"),
              Object(r.createElement)(
                "li",
                { key: s, className: a },
                e,
                n === s && !c && Object(r.createElement)("progress", null)
              )
            );
          });
        return Object(r.createElement)("ul", { className: "substeps" }, s);
      };
    s()(function () {
      Object(r.render)(
        Object(r.createElement)(k, null),
        document.querySelector(".gb-migration__content")
      );
    });
  },
]);
