module.exports = (function(a) {
  function b(d) {
    if (c[d]) return c[d].exports;
    var e = (c[d] = { i: d, l: !1, exports: {} });
    return a[d].call(e.exports, e, e.exports, b), (e.l = !0), e.exports;
  }
  var c = {};
  return (
    (b.m = a),
    (b.c = c),
    (b.d = function(a, c, d) {
      b.o(a, c) || Object.defineProperty(a, c, { enumerable: !0, get: d });
    }),
    (b.r = function(a) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(a, "__esModule", { value: !0 });
    }),
    (b.t = function(a, c) {
      if ((1 & c && (a = b(a)), 8 & c)) return a;
      if (4 & c && "object" == typeof a && a && a.__esModule) return a;
      var d = Object.create(null);
      if (
        (b.r(d),
        Object.defineProperty(d, "default", { enumerable: !0, value: a }),
        2 & c && "string" != typeof a)
      )
        for (var e in a)
          b.d(
            d,
            e,
            function(b) {
              return a[b];
            }.bind(null, e)
          );
      return d;
    }),
    (b.n = function(a) {
      var c =
        a && a.__esModule
          ? function() {
              return a["default"];
            }
          : function() {
              return a;
            };
      return b.d(c, "a", c), c;
    }),
    (b.o = function(a, b) {
      return Object.prototype.hasOwnProperty.call(a, b);
    }),
    (b.p = ""),
    b((b.s = 0))
  );
})([
  function(a, b, c) {
    "use strict";
    function d(a) {
      return (
        (d =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function(a) {
                return typeof a;
              }
            : function(a) {
                return a &&
                  "function" == typeof Symbol &&
                  a.constructor === Symbol &&
                  a !== Symbol.prototype
                  ? "symbol"
                  : typeof a;
              }),
        d(a)
      );
    }
    function e(a, b) {
      if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function");
    }
    function f(a, b) {
      for (var c, d = 0; d < b.length; d++)
        (c = b[d]),
          (c.enumerable = c.enumerable || !1),
          (c.configurable = !0),
          "value" in c && (c.writable = !0),
          Object.defineProperty(a, c.key, c);
    }
    function g(a, b, c) {
      return b && f(a.prototype, b), c && f(a, c), a;
    }
    function h(a, b) {
      return b && ("object" === d(b) || "function" == typeof b) ? b : i(a);
    }
    function i(a) {
      if (void 0 === a)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return a;
    }
    function j(a) {
      return (
        (j = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(a) {
              return a.__proto__ || Object.getPrototypeOf(a);
            }),
        j(a)
      );
    }
    function k(a, b) {
      if ("function" != typeof b && null !== b)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (a.prototype = Object.create(b && b.prototype, {
        constructor: { value: a, writable: !0, configurable: !0 }
      })),
        b && l(a, b);
    }
    function l(a, b) {
      return (
        (l =
          Object.setPrototypeOf ||
          function(a, b) {
            return (a.__proto__ = b), a;
          }),
        l(a, b)
      );
    }
    Object.defineProperty(b, "__esModule", { value: !0 }), (b.default = void 0);
    var m = (function(a) {
        return a && a.__esModule ? a : { default: a };
      })(c(1)),
      n = (function(a) {
        function b() {
          return e(this, b), h(this, j(b).apply(this, arguments));
        }
        return (
          k(b, a),
          g(b, [
            {
              key: "render",
              value: function(a) {
                var b = a.children;
                return m.default.createElement("span", null, b);
              }
            }
          ]),
          b
        );
      })(m.default.Component);
    b.default = n;
  },
  function(a) {
    a.exports = require("react");
  }
]);
