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
    IC7x: [
      function (require, module, exports) {
        function n(n, o) {
          if (!(n instanceof o))
            throw new TypeError("Cannot call a class as a function");
        }
        module.exports = n;
      },
      {},
    ],
    WiqS: [
      function (require, module, exports) {
        function e(e, r) {
          for (var n = 0; n < r.length; n++) {
            var t = r[n];
            (t.enumerable = t.enumerable || !1),
              (t.configurable = !0),
              "value" in t && (t.writable = !0),
              Object.defineProperty(e, t.key, t);
          }
        }
        function r(r, n, t) {
          return n && e(r.prototype, n), t && e(r, t), r;
        }
        module.exports = r;
      },
      {},
    ],
    NS7G: [
      function (require, module, exports) {
        function e(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        module.exports = e;
      },
      {},
    ],
    xOn8: [
      function (require, module, exports) {
        function o(t) {
          return (
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? (module.exports = o = function (o) {
                  return typeof o;
                })
              : (module.exports = o = function (o) {
                  return o &&
                    "function" == typeof Symbol &&
                    o.constructor === Symbol &&
                    o !== Symbol.prototype
                    ? "symbol"
                    : typeof o;
                }),
            o(t)
          );
        }
        module.exports = o;
      },
      {},
    ],
    oXYo: [
      function (require, module, exports) {
        var e = require("../helpers/typeof"),
          r = require("./assertThisInitialized");
        function t(t, i) {
          return !i || ("object" !== e(i) && "function" != typeof i) ? r(t) : i;
        }
        module.exports = t;
      },
      { "../helpers/typeof": "xOn8", "./assertThisInitialized": "NS7G" },
    ],
    goD2: [
      function (require, module, exports) {
        function t(e) {
          return (
            (module.exports = t = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            t(e)
          );
        }
        module.exports = t;
      },
      {},
    ],
    zqo5: [
      function (require, module, exports) {
        function t(o, e) {
          return (
            (module.exports = t =
              Object.setPrototypeOf ||
              function (t, o) {
                return (t.__proto__ = o), t;
              }),
            t(o, e)
          );
        }
        module.exports = t;
      },
      {},
    ],
    RISo: [
      function (require, module, exports) {
        var e = require("./setPrototypeOf");
        function r(r, t) {
          if ("function" != typeof t && null !== t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          (r.prototype = Object.create(t && t.prototype, {
            constructor: { value: r, writable: !0, configurable: !0 },
          })),
            t && e(r, t);
        }
        module.exports = r;
      },
      { "./setPrototypeOf": "zqo5" },
    ],
    W80x: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = o(require("@babel/runtime/helpers/classCallCheck")),
          t = o(require("@babel/runtime/helpers/createClass")),
          r = o(require("@babel/runtime/helpers/assertThisInitialized")),
          a = o(require("@babel/runtime/helpers/possibleConstructorReturn")),
          s = o(require("@babel/runtime/helpers/getPrototypeOf")),
          n = o(require("@babel/runtime/helpers/inherits"));
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function u(e) {
          var t = l();
          return function () {
            var r,
              n = (0, s.default)(e);
            if (t) {
              var o = (0, s.default)(this).constructor;
              r = Reflect.construct(n, arguments, o);
            } else r = n.apply(this, arguments);
            return (0, a.default)(this, r);
          };
        }
        function l() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Date.prototype.toString.call(
                Reflect.construct(Date, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        }
        var i = wp,
          c = i.apiFetch,
          m = i.components.Popover,
          p = i.element,
          h = p.Component,
          f = p.Fragment,
          d = p.createElement,
          b = i.i18n.__,
          v = i.url.addQueryArgs,
          _ = (function (a) {
            (0, n.default)(o, a);
            var s = u(o);
            function o() {
              var t;
              return (
                (0, e.default)(this, o),
                ((t = s.apply(this, arguments)).state = {
                  search: "",
                  items: [],
                  error: "",
                }),
                (t.searchItemName = t.searchItemName.bind((0, r.default)(t))),
                (t.selectItemName = t.selectItemName.bind((0, r.default)(t))),
                t
              );
            }
            return (
              (0, t.default)(o, [
                {
                  key: "searchItemName",
                  value: function (e) {
                    var t = this,
                      r = this.state.search,
                      a = this.props,
                      s = a.component,
                      n = a.objectQueryArgs;
                    this.setState({ search: e }),
                      e.length < r.length && this.setState({ items: [] });
                    var o = "/buddypress/v1/" + s,
                      u = {};
                    e && (u.search = encodeURIComponent(e)),
                      n && (u = Object.assign(u, n)),
                      c({ path: v(o, u) }).then(
                        function (e) {
                          t.setState({ items: e });
                        },
                        function (e) {
                          t.setState({ error: e.message });
                        }
                      );
                  },
                },
                {
                  key: "selectItemName",
                  value: function (e, t) {
                    var r = this.props.onSelectItem;
                    return (
                      e.preventDefault(),
                      this.setState({ search: "", items: [], error: "" }),
                      r({ itemID: t })
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var e,
                      t = this,
                      r = this.state,
                      a = r.search,
                      s = r.items,
                      n = this.props,
                      o = n.ariaLabel,
                      u = n.placeholder,
                      l = n.useAvatar,
                      i = n.slugValue;
                    return (
                      o || (o = b("Item's name", "buddypress")),
                      u || (u = b("Enter Item's name here…", "buddypress")),
                      s.length &&
                        (e = s.map(function (e) {
                          return d(
                            "button",
                            {
                              type: "button",
                              key: "editor-autocompleters__item-item-" + e.id,
                              role: "option",
                              "aria-selected": "true",
                              className:
                                "components-button components-autocomplete__result editor-autocompleters__user",
                              onClick: function (r) {
                                return t.selectItemName(r, e.id);
                              },
                            },
                            l &&
                              d("img", {
                                key: "avatar",
                                className: "editor-autocompleters__user-avatar",
                                alt: "",
                                src: e.avatar_urls.thumb,
                              }),
                            d(
                              "span",
                              {
                                key: "name",
                                className: "editor-autocompleters__user-name",
                              },
                              e.name
                            ),
                            i &&
                              null !== i(e) &&
                              d(
                                "span",
                                {
                                  key: "slug",
                                  className: "editor-autocompleters__user-slug",
                                },
                                i(e)
                              )
                          );
                        })),
                      d(
                        f,
                        null,
                        d("input", {
                          type: "text",
                          value: a,
                          className: "components-placeholder__input",
                          "aria-label": o,
                          placeholder: u,
                          onChange: function (e) {
                            return t.searchItemName(e.target.value);
                          },
                        }),
                        0 !== s.length &&
                          d(
                            m,
                            {
                              className: "components-autocomplete__popover",
                              focusOnMount: !1,
                              position: "bottom left",
                            },
                            d(
                              "div",
                              { className: "components-autocomplete__results" },
                              e
                            )
                          )
                      )
                    );
                  },
                },
              ]),
              o
            );
          })(h),
          y = _;
        exports.default = y;
      },
      {
        "@babel/runtime/helpers/classCallCheck": "IC7x",
        "@babel/runtime/helpers/createClass": "WiqS",
        "@babel/runtime/helpers/assertThisInitialized": "NS7G",
        "@babel/runtime/helpers/possibleConstructorReturn": "oXYo",
        "@babel/runtime/helpers/getPrototypeOf": "goD2",
        "@babel/runtime/helpers/inherits": "RISo",
      },
    ],
    iA92: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = t(require("./autocompleter"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = { AutoCompleter: e.default };
        exports.default = r;
      },
      { "./autocompleter": "W80x" },
    ],
    Ee8M: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "blockComponents", {
            enumerable: !0,
            get: function () {
              return e.default;
            },
          });
        var e = t(require("./components"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
      },
      { "./components": "iA92" },
    ],
  },
  {},
  ["Ee8M"],
  "bp"
);
//# sourceMappingURL=/block-components.js.map
