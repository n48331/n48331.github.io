!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var o = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = 137));
})([
  function (t, e) {
    var n = /^\s+|\s+$/g,
      r = /^[-+]0x[0-9a-f]+$/i,
      o = /^0b[01]+$/i,
      i = /^0o[0-7]+$/i,
      a = parseInt,
      s = Object.prototype.toString;
    function u(t) {
      var e = typeof t;
      return !!t && ("object" == e || "function" == e);
    }
    function c(t) {
      if ("number" == typeof t) return t;
      if (
        (function (t) {
          return (
            "symbol" == typeof t ||
            ((function (t) {
              return !!t && "object" == typeof t;
            })(t) &&
              "[object Symbol]" == s.call(t))
          );
        })(t)
      )
        return NaN;
      if (u(t)) {
        var e = "function" == typeof t.valueOf ? t.valueOf() : t;
        t = u(e) ? e + "" : e;
      }
      if ("string" != typeof t) return 0 === t ? t : +t;
      t = t.replace(n, "");
      var c = o.test(t);
      return c || i.test(t) ? a(t.slice(2), c ? 2 : 8) : r.test(t) ? NaN : +t;
    }
    t.exports = function (t, e, n) {
      return (
        void 0 === n && ((n = e), (e = void 0)),
        void 0 !== n && (n = (n = c(n)) == n ? n : 0),
        void 0 !== e && (e = (e = c(e)) == e ? e : 0),
        (function (t, e, n) {
          return (
            t == t &&
              (void 0 !== n && (t = t <= n ? t : n),
              void 0 !== e && (t = t >= e ? t : e)),
            t
          );
        })(c(t), e, n)
      );
    };
  },
  function (t, e, n) {
    var r = n(64),
      o = r.all;
    t.exports = r.IS_HTMLDDA
      ? function (t) {
          return "function" == typeof t || t === o;
        }
      : function (t) {
          return "function" == typeof t;
        };
  },
  function (t, e, n) {
    var r = n(13),
      o = n(60);
    t.exports = function (t) {
      if ("Function" === r(t)) return o(t);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    };
  },
  function (t, e, n) {
    var r = n(1),
      o = n(64),
      i = o.all;
    t.exports = o.IS_HTMLDDA
      ? function (t) {
          return "object" == typeof t ? null !== t : r(t) || t === i;
        }
      : function (t) {
          return "object" == typeof t ? null !== t : r(t);
        };
  },
  function (t, e, n) {
    var r = n(6),
      o = n(62),
      i = n(8),
      a = n(38),
      s = n(63),
      u = n(65),
      c = o("wks"),
      f = r.Symbol,
      l = f && f.for,
      h = u ? f : (f && f.withoutSetter) || a;
    t.exports = function (t) {
      if (!i(c, t) || (!s && "string" != typeof c[t])) {
        var e = "Symbol." + t;
        s && i(f, t) ? (c[t] = f[t]) : (c[t] = u && l ? l(e) : h(e));
      }
      return c[t];
    };
  },
  function (t, e, n) {
    (function (e) {
      var n = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        n("object" == typeof globalThis && globalThis) ||
        n("object" == typeof window && window) ||
        n("object" == typeof self && self) ||
        n("object" == typeof e && e) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }.call(this, n(61)));
  },
  function (t, e, n) {
    var r = n(3);
    t.exports = !r(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  function (t, e, n) {
    var r = n(2),
      o = n(18),
      i = r({}.hasOwnProperty);
    t.exports =
      Object.hasOwn ||
      function (t, e) {
        return i(o(t), e);
      };
  },
  function (t, e, n) {
    var r = n(7),
      o = n(67),
      i = n(66),
      a = n(10),
      s = n(39),
      u = TypeError,
      c = Object.defineProperty,
      f = Object.getOwnPropertyDescriptor;
    e.f = r
      ? i
        ? function (t, e, n) {
            if (
              (a(t),
              (e = s(e)),
              a(n),
              "function" == typeof t &&
                "prototype" === e &&
                "value" in n &&
                "writable" in n &&
                !n.writable)
            ) {
              var r = f(t, e);
              r &&
                r.writable &&
                ((t[e] = n.value),
                (n = {
                  configurable:
                    "configurable" in n ? n.configurable : r.configurable,
                  enumerable: "enumerable" in n ? n.enumerable : r.enumerable,
                  writable: !1,
                }));
            }
            return c(t, e, n);
          }
        : c
      : function (t, e, n) {
          if ((a(t), (e = s(e)), a(n), o))
            try {
              return c(t, e, n);
            } catch (t) {}
          if ("get" in n || "set" in n) throw u("Accessors not supported");
          return "value" in n && (t[e] = n.value), t;
        };
  },
  function (t, e, n) {
    var r = n(4),
      o = String,
      i = TypeError;
    t.exports = function (t) {
      if (r(t)) return t;
      throw i(o(t) + " is not an object");
    };
  },
  function (t, e, n) {
    var r = n(34),
      o = Function.prototype.call;
    t.exports = r
      ? o.bind(o)
      : function () {
          return o.apply(o, arguments);
        };
  },
  function (t, e, n) {
    var r = n(33),
      o = n(35);
    t.exports = function (t) {
      return r(o(t));
    };
  },
  function (t, e, n) {
    var r = n(60),
      o = r({}.toString),
      i = r("".slice);
    t.exports = function (t) {
      return i(o(t), 8, -1);
    };
  },
  function (t, e) {
    t.exports = function (t) {
      return null == t;
    };
  },
  function (t, e, n) {
    var r = n(6),
      o = n(1),
      i = function (t) {
        return o(t) ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2 ? i(r[t]) : r[t] && r[t][e];
    };
  },
  function (t, e, n) {
    var r,
      o,
      i,
      a = n(73),
      s = n(6),
      u = n(4),
      c = n(47),
      f = n(8),
      l = n(36),
      h = n(46),
      p = n(26),
      d = s.TypeError,
      v = s.WeakMap;
    if (a || l.state) {
      var m = l.state || (l.state = new v());
      (m.get = m.get),
        (m.has = m.has),
        (m.set = m.set),
        (r = function (t, e) {
          if (m.has(t)) throw d("Object already initialized");
          return (e.facade = t), m.set(t, e), e;
        }),
        (o = function (t) {
          return m.get(t) || {};
        }),
        (i = function (t) {
          return m.has(t);
        });
    } else {
      var g = h("state");
      (p[g] = !0),
        (r = function (t, e) {
          if (f(t, g)) throw d("Object already initialized");
          return (e.facade = t), c(t, g, e), e;
        }),
        (o = function (t) {
          return f(t, g) ? t[g] : {};
        }),
        (i = function (t) {
          return f(t, g);
        });
    }
    t.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function (t) {
        return i(t) ? o(t) : r(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var n;
          if (!u(e) || (n = o(e)).type !== t)
            throw d("Incompatible receiver, " + t + " required");
          return n;
        };
      },
    };
  },
  function (t, e, n) {
    var r = n(1),
      o = n(9),
      i = n(103),
      a = n(37);
    t.exports = function (t, e, n, s) {
      s || (s = {});
      var u = s.enumerable,
        c = void 0 !== s.name ? s.name : e;
      if ((r(n) && i(n, c, s), s.global)) u ? (t[e] = n) : a(e, n);
      else {
        try {
          s.unsafe ? t[e] && (u = !0) : delete t[e];
        } catch (t) {}
        u
          ? (t[e] = n)
          : o.f(t, e, {
              value: n,
              enumerable: !1,
              configurable: !s.nonConfigurable,
              writable: !s.nonWritable,
            });
      }
      return t;
    };
  },
  function (t, e, n) {
    var r = n(35),
      o = Object;
    t.exports = function (t) {
      return o(r(t));
    };
  },
  function (t, e, n) {
    var r = n(101);
    t.exports = function (t) {
      return r(t.length);
    };
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e, n) {
    var r = n(6),
      o = n(74).f,
      i = n(47),
      a = n(17),
      s = n(37),
      u = n(104),
      c = n(79);
    t.exports = function (t, e) {
      var n,
        f,
        l,
        h,
        p,
        d = t.target,
        v = t.global,
        m = t.stat;
      if ((n = v ? r : m ? r[d] || s(d, {}) : (r[d] || {}).prototype))
        for (f in e) {
          if (
            ((h = e[f]),
            (l = t.dontCallGetSet ? (p = o(n, f)) && p.value : n[f]),
            !c(v ? f : d + (m ? "." : "#") + f, t.forced) && void 0 !== l)
          ) {
            if (typeof h == typeof l) continue;
            u(h, l);
          }
          (t.sham || (l && l.sham)) && i(h, "sham", !0), a(n, f, h, t);
        }
    };
  },
  function (t, e, n) {
    var r = n(6);
    t.exports = r;
  },
  function (t, e, n) {
    t.exports = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var r = e[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function e(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
      }
      function n() {
        return (n =
          Object.assign ||
          function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            }
            return t;
          }).apply(this, arguments);
      }
      function r(t, e) {
        (t.prototype = Object.create(e.prototype)),
          (t.prototype.constructor = t),
          (t.__proto__ = e);
      }
      function o(t) {
        return (o = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function i(t, e) {
        return (i =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          })(t, e);
      }
      function a(t, e, n) {
        return (a = (function () {
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
          } catch (t) {
            return !1;
          }
        })()
          ? Reflect.construct
          : function (t, e, n) {
              var r = [null];
              r.push.apply(r, e);
              var o = new (Function.bind.apply(t, r))();
              return n && i(o, n.prototype), o;
            }).apply(null, arguments);
      }
      function s(t) {
        var e = "function" == typeof Map ? new Map() : void 0;
        return (s = function (t) {
          if (
            null === t ||
            -1 === Function.toString.call(t).indexOf("[native code]")
          )
            return t;
          if ("function" != typeof t)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if (void 0 !== e) {
            if (e.has(t)) return e.get(t);
            e.set(t, n);
          }
          function n() {
            return a(t, arguments, o(this).constructor);
          }
          return (
            (n.prototype = Object.create(t.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            i(n, t)
          );
        })(t);
      }
      function u(t, e) {
        try {
          var n = t();
        } catch (t) {
          return e(t);
        }
        return n && n.then ? n.then(void 0, e) : n;
      }
      var c;
      "undefined" != typeof Symbol &&
        (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        "undefined" != typeof Symbol &&
          (Symbol.asyncIterator ||
            (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))),
        (function (t) {
          (t[(t.off = 0)] = "off"),
            (t[(t.error = 1)] = "error"),
            (t[(t.warning = 2)] = "warning"),
            (t[(t.info = 3)] = "info"),
            (t[(t.debug = 4)] = "debug");
        })(c || (c = {}));
      var f = c.off,
        l = (function () {
          function t(t) {
            this.t = t;
          }
          (t.getLevel = function () {
            return f;
          }),
            (t.setLevel = function (t) {
              return (f = c[t]);
            });
          var e = t.prototype;
          return (
            (e.error = function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              this.i(console.error, c.error, e);
            }),
            (e.warn = function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              this.i(console.warn, c.warning, e);
            }),
            (e.info = function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              this.i(console.info, c.info, e);
            }),
            (e.debug = function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              this.i(console.log, c.debug, e);
            }),
            (e.i = function (e, n, r) {
              n <= t.getLevel() &&
                e.apply(console, ["[" + this.t + "] "].concat(r));
            }),
            t
          );
        })(),
        h = _,
        p = b,
        d = y,
        v = w,
        m = P,
        g = new RegExp(
          [
            "(\\\\.)",
            "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?",
          ].join("|"),
          "g"
        );
      function y(t, e) {
        for (
          var n,
            r = [],
            o = 0,
            i = 0,
            a = "",
            s = (e && e.delimiter) || "/",
            u = (e && e.whitelist) || void 0,
            c = !1;
          null !== (n = g.exec(t));

        ) {
          var f = n[0],
            l = n[1],
            h = n.index;
          if (((a += t.slice(i, h)), (i = h + f.length), l))
            (a += l[1]), (c = !0);
          else {
            var p = "",
              d = n[2],
              v = n[3],
              m = n[4],
              y = n[5];
            if (!c && a.length) {
              var b = a.length - 1,
                w = a[b];
              (!u || u.indexOf(w) > -1) && ((p = w), (a = a.slice(0, b)));
            }
            a && (r.push(a), (a = ""), (c = !1));
            var O = v || m,
              P = p || s;
            r.push({
              name: d || o++,
              prefix: p,
              delimiter: P,
              optional: "?" === y || "*" === y,
              repeat: "+" === y || "*" === y,
              pattern: O ? E(O) : "[^" + x(P === s ? P : P + s) + "]+?",
            });
          }
        }
        return (a || i < t.length) && r.push(a + t.substr(i)), r;
      }
      function b(t, e) {
        return function (n, r) {
          var o = t.exec(n);
          if (!o) return !1;
          for (
            var i = o[0],
              a = o.index,
              s = {},
              u = (r && r.decode) || decodeURIComponent,
              c = 1;
            c < o.length;
            c++
          )
            if (void 0 !== o[c]) {
              var f = e[c - 1];
              s[f.name] = f.repeat
                ? o[c].split(f.delimiter).map(function (t) {
                    return u(t, f);
                  })
                : u(o[c], f);
            }
          return { path: i, index: a, params: s };
        };
      }
      function w(t, e) {
        for (var n = new Array(t.length), r = 0; r < t.length; r++)
          "object" == typeof t[r] &&
            (n[r] = new RegExp("^(?:" + t[r].pattern + ")$", O(e)));
        return function (e, r) {
          for (
            var o = "",
              i = (r && r.encode) || encodeURIComponent,
              a = !r || !1 !== r.validate,
              s = 0;
            s < t.length;
            s++
          ) {
            var u = t[s];
            if ("string" != typeof u) {
              var c,
                f = e ? e[u.name] : void 0;
              if (Array.isArray(f)) {
                if (!u.repeat)
                  throw new TypeError(
                    'Expected "' + u.name + '" to not repeat, but got array'
                  );
                if (0 === f.length) {
                  if (u.optional) continue;
                  throw new TypeError(
                    'Expected "' + u.name + '" to not be empty'
                  );
                }
                for (var l = 0; l < f.length; l++) {
                  if (((c = i(f[l], u)), a && !n[s].test(c)))
                    throw new TypeError(
                      'Expected all "' +
                        u.name +
                        '" to match "' +
                        u.pattern +
                        '"'
                    );
                  o += (0 === l ? u.prefix : u.delimiter) + c;
                }
              } else if (
                "string" != typeof f &&
                "number" != typeof f &&
                "boolean" != typeof f
              ) {
                if (!u.optional)
                  throw new TypeError(
                    'Expected "' +
                      u.name +
                      '" to be ' +
                      (u.repeat ? "an array" : "a string")
                  );
              } else {
                if (((c = i(String(f), u)), a && !n[s].test(c)))
                  throw new TypeError(
                    'Expected "' +
                      u.name +
                      '" to match "' +
                      u.pattern +
                      '", but got "' +
                      c +
                      '"'
                  );
                o += u.prefix + c;
              }
            } else o += u;
          }
          return o;
        };
      }
      function x(t) {
        return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
      }
      function E(t) {
        return t.replace(/([=!:$/()])/g, "\\$1");
      }
      function O(t) {
        return t && t.sensitive ? "" : "i";
      }
      function P(t, e, n) {
        for (
          var r = (n = n || {}).strict,
            o = !1 !== n.start,
            i = !1 !== n.end,
            a = n.delimiter || "/",
            s = []
              .concat(n.endsWith || [])
              .map(x)
              .concat("$")
              .join("|"),
            u = o ? "^" : "",
            c = 0;
          c < t.length;
          c++
        ) {
          var f = t[c];
          if ("string" == typeof f) u += x(f);
          else {
            var l = f.repeat
              ? "(?:" +
                f.pattern +
                ")(?:" +
                x(f.delimiter) +
                "(?:" +
                f.pattern +
                "))*"
              : f.pattern;
            e && e.push(f),
              (u += f.optional
                ? f.prefix
                  ? "(?:" + x(f.prefix) + "(" + l + "))?"
                  : "(" + l + ")?"
                : x(f.prefix) + "(" + l + ")");
          }
        }
        if (i)
          r || (u += "(?:" + x(a) + ")?"),
            (u += "$" === s ? "$" : "(?=" + s + ")");
        else {
          var h = t[t.length - 1],
            p = "string" == typeof h ? h[h.length - 1] === a : void 0 === h;
          r || (u += "(?:" + x(a) + "(?=" + s + "))?"),
            p || (u += "(?=" + x(a) + "|" + s + ")");
        }
        return new RegExp(u, O(n));
      }
      function _(t, e, n) {
        return t instanceof RegExp
          ? (function (t, e) {
              if (!e) return t;
              var n = t.source.match(/\((?!\?)/g);
              if (n)
                for (var r = 0; r < n.length; r++)
                  e.push({
                    name: r,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    pattern: null,
                  });
              return t;
            })(t, e)
          : Array.isArray(t)
          ? (function (t, e, n) {
              for (var r = [], o = 0; o < t.length; o++)
                r.push(_(t[o], e, n).source);
              return new RegExp("(?:" + r.join("|") + ")", O(n));
            })(t, e, n)
          : (function (t, e, n) {
              return P(y(t, n), e, n);
            })(t, e, n);
      }
      (h.match = function (t, e) {
        var n = [];
        return b(_(t, n, e), n);
      }),
        (h.regexpToFunction = p),
        (h.parse = d),
        (h.compile = function (t, e) {
          return w(y(t, e), e);
        }),
        (h.tokensToFunction = v),
        (h.tokensToRegExp = m);
      var S = {
          container: "container",
          history: "history",
          namespace: "namespace",
          prefix: "data-barba",
          prevent: "prevent",
          wrapper: "wrapper",
        },
        A = new ((function () {
          function t() {
            (this.o = S), (this.u = new DOMParser());
          }
          var e = t.prototype;
          return (
            (e.toString = function (t) {
              return t.outerHTML;
            }),
            (e.toDocument = function (t) {
              return this.u.parseFromString(t, "text/html");
            }),
            (e.toElement = function (t) {
              var e = document.createElement("div");
              return (e.innerHTML = t), e;
            }),
            (e.getHtml = function (t) {
              return (
                void 0 === t && (t = document), this.toString(t.documentElement)
              );
            }),
            (e.getWrapper = function (t) {
              return (
                void 0 === t && (t = document),
                t.querySelector(
                  "[" + this.o.prefix + '="' + this.o.wrapper + '"]'
                )
              );
            }),
            (e.getContainer = function (t) {
              return (
                void 0 === t && (t = document),
                t.querySelector(
                  "[" + this.o.prefix + '="' + this.o.container + '"]'
                )
              );
            }),
            (e.removeContainer = function (t) {
              document.body.contains(t) && t.parentNode.removeChild(t);
            }),
            (e.addContainer = function (t, e) {
              var n = this.getContainer();
              n ? this.s(t, n) : e.appendChild(t);
            }),
            (e.getNamespace = function (t) {
              void 0 === t && (t = document);
              var e = t.querySelector(
                "[" + this.o.prefix + "-" + this.o.namespace + "]"
              );
              return e
                ? e.getAttribute(this.o.prefix + "-" + this.o.namespace)
                : null;
            }),
            (e.getHref = function (t) {
              if (t.tagName && "a" === t.tagName.toLowerCase()) {
                if ("string" == typeof t.href) return t.href;
                var e = t.getAttribute("href") || t.getAttribute("xlink:href");
                if (e) return this.resolveUrl(e.baseVal || e);
              }
              return null;
            }),
            (e.resolveUrl = function () {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                n < t;
                n++
              )
                e[n] = arguments[n];
              var r = e.length;
              if (0 === r)
                throw new Error(
                  "resolveUrl requires at least one argument; got none."
                );
              var o = document.createElement("base");
              if (((o.href = arguments[0]), 1 === r)) return o.href;
              var i = document.getElementsByTagName("head")[0];
              i.insertBefore(o, i.firstChild);
              for (var a, s = document.createElement("a"), u = 1; u < r; u++)
                (s.href = arguments[u]), (o.href = a = s.href);
              return i.removeChild(o), a;
            }),
            (e.s = function (t, e) {
              e.parentNode.insertBefore(t, e.nextSibling);
            }),
            t
          );
        })())(),
        T = new ((function () {
          function t() {
            (this.h = []), (this.v = -1);
          }
          var r = t.prototype;
          return (
            (r.init = function (t, e) {
              this.l = "barba";
              var n = {
                ns: e,
                scroll: { x: window.scrollX, y: window.scrollY },
                url: t,
              };
              this.h.push(n), (this.v = 0);
              var r = { from: this.l, index: 0, states: [].concat(this.h) };
              window.history && window.history.replaceState(r, "", t);
            }),
            (r.change = function (t, e, n) {
              if (n && n.state) {
                var r = n.state,
                  o = r.index;
                (e = this.m(this.v - o)), this.replace(r.states), (this.v = o);
              } else this.add(t, e);
              return e;
            }),
            (r.add = function (t, e) {
              var n = this.size,
                r = this.p(e),
                o = {
                  ns: "tmp",
                  scroll: { x: window.scrollX, y: window.scrollY },
                  url: t,
                };
              this.h.push(o), (this.v = n);
              var i = { from: this.l, index: n, states: [].concat(this.h) };
              switch (r) {
                case "push":
                  window.history && window.history.pushState(i, "", t);
                  break;
                case "replace":
                  window.history && window.history.replaceState(i, "", t);
              }
            }),
            (r.update = function (t, e) {
              var r = e || this.v,
                o = n({}, this.get(r), {}, t);
              this.set(r, o);
            }),
            (r.remove = function (t) {
              t ? this.h.splice(t, 1) : this.h.pop(), this.v--;
            }),
            (r.clear = function () {
              (this.h = []), (this.v = -1);
            }),
            (r.replace = function (t) {
              this.h = t;
            }),
            (r.get = function (t) {
              return this.h[t];
            }),
            (r.set = function (t, e) {
              return (this.h[t] = e);
            }),
            (r.p = function (t) {
              var e = "push",
                n = t,
                r = S.prefix + "-" + S.history;
              return (
                n.hasAttribute && n.hasAttribute(r) && (e = n.getAttribute(r)),
                e
              );
            }),
            (r.m = function (t) {
              return Math.abs(t) > 1
                ? t > 0
                  ? "forward"
                  : "back"
                : 0 === t
                ? "popstate"
                : t > 0
                ? "back"
                : "forward";
            }),
            e(t, [
              {
                key: "current",
                get: function () {
                  return this.h[this.v];
                },
              },
              {
                key: "state",
                get: function () {
                  return this.h[this.h.length - 1];
                },
              },
              {
                key: "previous",
                get: function () {
                  return this.v < 1 ? null : this.h[this.v - 1];
                },
              },
              {
                key: "size",
                get: function () {
                  return this.h.length;
                },
              },
            ]),
            t
          );
        })())(),
        j = function (t, e) {
          try {
            var n = (function () {
              if (!e.next.html)
                return Promise.resolve(t).then(function (t) {
                  var n = e.next;
                  if (t) {
                    var r = A.toElement(t);
                    (n.namespace = A.getNamespace(r)),
                      (n.container = A.getContainer(r)),
                      (n.html = t),
                      T.update({ ns: n.namespace });
                    var o = A.toDocument(t);
                    document.title = o.title;
                  }
                });
            })();
            return Promise.resolve(
              n && n.then ? n.then(function () {}) : void 0
            );
          } catch (t) {
            return Promise.reject(t);
          }
        },
        k = h,
        M = {
          __proto__: null,
          update: j,
          nextTick: function () {
            return new Promise(function (t) {
              window.requestAnimationFrame(t);
            });
          },
          pathToRegexp: k,
        },
        I = function () {
          return window.location.origin;
        },
        D = function (t) {
          return void 0 === t && (t = window.location.href), R(t).port;
        },
        R = function (t) {
          var e,
            n = t.match(/:\d+/);
          if (null === n)
            /^http/.test(t) && (e = 80), /^https/.test(t) && (e = 443);
          else {
            var r = n[0].substring(1);
            e = parseInt(r, 10);
          }
          var o,
            i = t.replace(I(), ""),
            a = {},
            s = i.indexOf("#");
          s >= 0 && ((o = i.slice(s + 1)), (i = i.slice(0, s)));
          var u = i.indexOf("?");
          return (
            u >= 0 && ((a = L(i.slice(u + 1))), (i = i.slice(0, u))),
            { hash: o, path: i, port: e, query: a }
          );
        },
        L = function (t) {
          return t.split("&").reduce(function (t, e) {
            var n = e.split("=");
            return (t[n[0]] = n[1]), t;
          }, {});
        },
        C = function (t) {
          return (
            void 0 === t && (t = window.location.href),
            t.replace(/(\/#.*|\/|#.*)$/, "")
          );
        },
        N = {
          __proto__: null,
          getHref: function () {
            return window.location.href;
          },
          getOrigin: I,
          getPort: D,
          getPath: function (t) {
            return void 0 === t && (t = window.location.href), R(t).path;
          },
          parse: R,
          parseQuery: L,
          clean: C,
        };
      function z(t, e, n) {
        return (
          void 0 === e && (e = 2e3),
          new Promise(function (r, o) {
            var i = new XMLHttpRequest();
            (i.onreadystatechange = function () {
              if (i.readyState === XMLHttpRequest.DONE)
                if (200 === i.status) r(i.responseText);
                else if (i.status) {
                  var e = { status: i.status, statusText: i.statusText };
                  n(t, e), o(e);
                }
            }),
              (i.ontimeout = function () {
                var r = new Error("Timeout error [" + e + "]");
                n(t, r), o(r);
              }),
              (i.onerror = function () {
                var e = new Error("Fetch error");
                n(t, e), o(e);
              }),
              i.open("GET", t),
              (i.timeout = e),
              i.setRequestHeader(
                "Accept",
                "text/html,application/xhtml+xml,application/xml"
              ),
              i.setRequestHeader("x-barba", "yes"),
              i.send();
          })
        );
      }
      var F = function (t) {
        return (
          !!t &&
          ("object" == typeof t || "function" == typeof t) &&
          "function" == typeof t.then
        );
      };
      function q(t, e) {
        return (
          void 0 === e && (e = {}),
          function () {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            var i = !1,
              a = new Promise(function (n, o) {
                e.async = function () {
                  return (
                    (i = !0),
                    function (t, e) {
                      t ? o(t) : n(e);
                    }
                  );
                };
                var a = t.apply(e, r);
                i || (F(a) ? a.then(n, o) : n(a));
              });
            return a;
          }
        );
      }
      var B = new ((function (t) {
          function e() {
            var e;
            return (
              ((e = t.call(this) || this).logger = new l("@barba/core")),
              (e.all = [
                "ready",
                "page",
                "reset",
                "currentAdded",
                "currentRemoved",
                "nextAdded",
                "nextRemoved",
                "beforeOnce",
                "once",
                "afterOnce",
                "before",
                "beforeLeave",
                "leave",
                "afterLeave",
                "beforeEnter",
                "enter",
                "afterEnter",
                "after",
              ]),
              (e.registered = new Map()),
              e.init(),
              e
            );
          }
          r(e, t);
          var n = e.prototype;
          return (
            (n.init = function () {
              var t = this;
              this.registered.clear(),
                this.all.forEach(function (e) {
                  t[e] ||
                    (t[e] = function (n, r) {
                      t.registered.has(e) || t.registered.set(e, new Set()),
                        t.registered.get(e).add({ ctx: r || {}, fn: n });
                    });
                });
            }),
            (n.do = function (t) {
              for (
                var e = this,
                  n = arguments.length,
                  r = new Array(n > 1 ? n - 1 : 0),
                  o = 1;
                o < n;
                o++
              )
                r[o - 1] = arguments[o];
              if (this.registered.has(t)) {
                var i = Promise.resolve();
                return (
                  this.registered.get(t).forEach(function (t) {
                    i = i.then(function () {
                      return q(t.fn, t.ctx).apply(void 0, r);
                    });
                  }),
                  i.catch(function (n) {
                    e.logger.debug("Hook error [" + t + "]"), e.logger.error(n);
                  })
                );
              }
              return Promise.resolve();
            }),
            (n.clear = function () {
              var t = this;
              this.all.forEach(function (e) {
                delete t[e];
              }),
                this.init();
            }),
            (n.help = function () {
              this.logger.info("Available hooks: " + this.all.join(","));
              var t = [];
              this.registered.forEach(function (e, n) {
                return t.push(n);
              }),
                this.logger.info("Registered hooks: " + t.join(","));
            }),
            e
          );
        })(function () {}))(),
        H = (function () {
          function t(t) {
            if (((this.P = []), "boolean" == typeof t)) this.g = t;
            else {
              var e = Array.isArray(t) ? t : [t];
              this.P = e.map(function (t) {
                return k(t);
              });
            }
          }
          return (
            (t.prototype.checkHref = function (t) {
              if ("boolean" == typeof this.g) return this.g;
              var e = R(t).path;
              return this.P.some(function (t) {
                return null !== t.exec(e);
              });
            }),
            t
          );
        })(),
        W = (function (t) {
          function e(e) {
            var n;
            return ((n = t.call(this, e) || this).k = new Map()), n;
          }
          r(e, t);
          var o = e.prototype;
          return (
            (o.set = function (t, e, n) {
              return (
                this.k.set(t, { action: n, request: e }),
                { action: n, request: e }
              );
            }),
            (o.get = function (t) {
              return this.k.get(t);
            }),
            (o.getRequest = function (t) {
              return this.k.get(t).request;
            }),
            (o.getAction = function (t) {
              return this.k.get(t).action;
            }),
            (o.has = function (t) {
              return !this.checkHref(t) && this.k.has(t);
            }),
            (o.delete = function (t) {
              return this.k.delete(t);
            }),
            (o.update = function (t, e) {
              var r = n({}, this.k.get(t), {}, e);
              return this.k.set(t, r), r;
            }),
            e
          );
        })(H),
        U = function () {
          return !window.history.pushState;
        },
        $ = function (t) {
          return !t.el || !t.href;
        },
        X = function (t) {
          var e = t.event;
          return (
            e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey
          );
        },
        Y = function (t) {
          var e = t.el;
          return e.hasAttribute("target") && "_blank" === e.target;
        },
        G = function (t) {
          var e = t.el;
          return (
            (void 0 !== e.protocol &&
              window.location.protocol !== e.protocol) ||
            (void 0 !== e.hostname && window.location.hostname !== e.hostname)
          );
        },
        V = function (t) {
          var e = t.el;
          return void 0 !== e.port && D() !== D(e.href);
        },
        K = function (t) {
          var e = t.el;
          return (
            e.getAttribute && "string" == typeof e.getAttribute("download")
          );
        },
        Q = function (t) {
          return t.el.hasAttribute(S.prefix + "-" + S.prevent);
        },
        J = function (t) {
          return Boolean(
            t.el.closest("[" + S.prefix + "-" + S.prevent + '="all"]')
          );
        },
        Z = function (t) {
          var e = t.href;
          return C(e) === C() && D(e) === D();
        },
        tt = (function (t) {
          function e(e) {
            var n;
            return (
              ((n = t.call(this, e) || this).suite = []),
              (n.tests = new Map()),
              n.init(),
              n
            );
          }
          r(e, t);
          var n = e.prototype;
          return (
            (n.init = function () {
              this.add("pushState", U),
                this.add("exists", $),
                this.add("newTab", X),
                this.add("blank", Y),
                this.add("corsDomain", G),
                this.add("corsPort", V),
                this.add("download", K),
                this.add("preventSelf", Q),
                this.add("preventAll", J),
                this.add("sameUrl", Z, !1);
            }),
            (n.add = function (t, e, n) {
              void 0 === n && (n = !0),
                this.tests.set(t, e),
                n && this.suite.push(t);
            }),
            (n.run = function (t, e, n, r) {
              return this.tests.get(t)({ el: e, event: n, href: r });
            }),
            (n.checkLink = function (t, e, n) {
              var r = this;
              return this.suite.some(function (o) {
                return r.run(o, t, e, n);
              });
            }),
            e
          );
        })(H),
        et = (function (t) {
          function e(n, r) {
            var o;
            void 0 === r && (r = "Barba error");
            for (
              var i = arguments.length, a = new Array(i > 2 ? i - 2 : 0), s = 2;
              s < i;
              s++
            )
              a[s - 2] = arguments[s];
            return (
              ((o = t.call.apply(t, [this].concat(a)) || this).error = n),
              (o.label = r),
              Error.captureStackTrace &&
                Error.captureStackTrace(
                  (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(o),
                  e
                ),
              (o.name = "BarbaError"),
              o
            );
          }
          return r(e, t), e;
        })(s(Error)),
        nt = (function () {
          function t(t) {
            void 0 === t && (t = []),
              (this.logger = new l("@barba/core")),
              (this.all = []),
              (this.page = []),
              (this.once = []),
              (this.A = [
                { name: "namespace", type: "strings" },
                { name: "custom", type: "function" },
              ]),
              t && (this.all = this.all.concat(t)),
              this.update();
          }
          var e = t.prototype;
          return (
            (e.add = function (t, e) {
              switch (t) {
                case "rule":
                  this.A.splice(e.position || 0, 0, e.value);
                  break;
                case "transition":
                default:
                  this.all.push(e);
              }
              this.update();
            }),
            (e.resolve = function (t, e) {
              var n = this;
              void 0 === e && (e = {});
              var r = e.once ? this.once : this.page;
              r = r.filter(
                e.self
                  ? function (t) {
                      return t.name && "self" === t.name;
                    }
                  : function (t) {
                      return !t.name || "self" !== t.name;
                    }
              );
              var o = new Map(),
                i = r.find(function (r) {
                  var i = !0,
                    a = {};
                  return (
                    !(!e.self || "self" !== r.name) ||
                    (n.A.reverse().forEach(function (e) {
                      i &&
                        ((i = n.R(r, e, t, a)),
                        r.from &&
                          r.to &&
                          (i =
                            n.R(r, e, t, a, "from") && n.R(r, e, t, a, "to")),
                        r.from && !r.to && (i = n.R(r, e, t, a, "from")),
                        !r.from && r.to && (i = n.R(r, e, t, a, "to")));
                    }),
                    o.set(r, a),
                    i)
                  );
                }),
                a = o.get(i),
                s = [];
              if (
                (s.push(e.once ? "once" : "page"), e.self && s.push("self"), a)
              ) {
                var u,
                  c = [i];
                Object.keys(a).length > 0 && c.push(a),
                  (u = this.logger).info.apply(
                    u,
                    ["Transition found [" + s.join(",") + "]"].concat(c)
                  );
              } else
                this.logger.info("No transition found [" + s.join(",") + "]");
              return i;
            }),
            (e.update = function () {
              var t = this;
              (this.all = this.all
                .map(function (e) {
                  return t.T(e);
                })
                .sort(function (t, e) {
                  return t.priority - e.priority;
                })
                .reverse()
                .map(function (t) {
                  return delete t.priority, t;
                })),
                (this.page = this.all.filter(function (t) {
                  return void 0 !== t.leave || void 0 !== t.enter;
                })),
                (this.once = this.all.filter(function (t) {
                  return void 0 !== t.once;
                }));
            }),
            (e.R = function (t, e, n, r, o) {
              var i = !0,
                a = !1,
                s = t,
                u = e.name,
                c = u,
                f = u,
                l = u,
                h = o ? s[o] : s,
                p = "to" === o ? n.next : n.current;
              if (o ? h && h[u] : h[u]) {
                switch (e.type) {
                  case "strings":
                  default:
                    var d = Array.isArray(h[c]) ? h[c] : [h[c]];
                    p[c] && -1 !== d.indexOf(p[c]) && (a = !0),
                      -1 === d.indexOf(p[c]) && (i = !1);
                    break;
                  case "object":
                    var v = Array.isArray(h[f]) ? h[f] : [h[f]];
                    p[f]
                      ? (p[f].name && -1 !== v.indexOf(p[f].name) && (a = !0),
                        -1 === v.indexOf(p[f].name) && (i = !1))
                      : (i = !1);
                    break;
                  case "function":
                    h[l](n) ? (a = !0) : (i = !1);
                }
                a &&
                  (o
                    ? ((r[o] = r[o] || {}), (r[o][u] = s[o][u]))
                    : (r[u] = s[u]));
              }
              return i;
            }),
            (e.O = function (t, e, n) {
              var r = 0;
              return (
                (t[e] || (t.from && t.from[e]) || (t.to && t.to[e])) &&
                  ((r += Math.pow(10, n)),
                  t.from && t.from[e] && (r += 1),
                  t.to && t.to[e] && (r += 2)),
                r
              );
            }),
            (e.T = function (t) {
              var e = this;
              t.priority = 0;
              var n = 0;
              return (
                this.A.forEach(function (r, o) {
                  n += e.O(t, r.name, o + 1);
                }),
                (t.priority = n),
                t
              );
            }),
            t
          );
        })(),
        rt = (function () {
          function t(t) {
            void 0 === t && (t = []),
              (this.logger = new l("@barba/core")),
              (this.S = !1),
              (this.store = new nt(t));
          }
          var n = t.prototype;
          return (
            (n.get = function (t, e) {
              return this.store.resolve(t, e);
            }),
            (n.doOnce = function (t) {
              var e = t.data,
                n = t.transition;
              try {
                var r = function () {
                    o.S = !1;
                  },
                  o = this,
                  i = n || {};
                o.S = !0;
                var a = u(
                  function () {
                    return Promise.resolve(o.j("beforeOnce", e, i)).then(
                      function () {
                        return Promise.resolve(o.once(e, i)).then(function () {
                          return Promise.resolve(o.j("afterOnce", e, i)).then(
                            function () {}
                          );
                        });
                      }
                    );
                  },
                  function (t) {
                    (o.S = !1),
                      o.logger.debug("Transition error [before/after/once]"),
                      o.logger.error(t);
                  }
                );
                return Promise.resolve(a && a.then ? a.then(r) : r());
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (n.doPage = function (t) {
              var e = t.data,
                n = t.transition,
                r = t.page,
                o = t.wrapper;
              try {
                var i = function (t) {
                    if (a) return t;
                    s.S = !1;
                  },
                  a = !1,
                  s = this,
                  c = n || {},
                  f = !0 === c.sync || !1;
                s.S = !0;
                var l = u(
                  function () {
                    function t() {
                      return Promise.resolve(s.j("before", e, c)).then(
                        function () {
                          function t(t) {
                            return Promise.resolve(s.remove(e)).then(
                              function () {
                                return Promise.resolve(s.j("after", e, c)).then(
                                  function () {}
                                );
                              }
                            );
                          }
                          var n = (function () {
                            if (f)
                              return u(
                                function () {
                                  return Promise.resolve(s.add(e, o)).then(
                                    function () {
                                      return Promise.resolve(
                                        s.j("beforeLeave", e, c)
                                      ).then(function () {
                                        return Promise.resolve(
                                          s.j("beforeEnter", e, c)
                                        ).then(function () {
                                          return Promise.resolve(
                                            Promise.all([
                                              s.leave(e, c),
                                              s.enter(e, c),
                                            ])
                                          ).then(function () {
                                            return Promise.resolve(
                                              s.j("afterLeave", e, c)
                                            ).then(function () {
                                              return Promise.resolve(
                                                s.j("afterEnter", e, c)
                                              ).then(function () {});
                                            });
                                          });
                                        });
                                      });
                                    }
                                  );
                                },
                                function (t) {
                                  if (s.M(t))
                                    throw new et(t, "Transition error [sync]");
                                }
                              );
                            var t = function (t) {
                                return u(
                                  function () {
                                    var t = (function () {
                                      if (!1 !== n)
                                        return Promise.resolve(
                                          s.add(e, o)
                                        ).then(function () {
                                          return Promise.resolve(
                                            s.j("beforeEnter", e, c)
                                          ).then(function () {
                                            return Promise.resolve(
                                              s.enter(e, c, n)
                                            ).then(function () {
                                              return Promise.resolve(
                                                s.j("afterEnter", e, c)
                                              ).then(function () {});
                                            });
                                          });
                                        });
                                    })();
                                    if (t && t.then)
                                      return t.then(function () {});
                                  },
                                  function (t) {
                                    if (s.M(t))
                                      throw new et(
                                        t,
                                        "Transition error [before/after/enter]"
                                      );
                                  }
                                );
                              },
                              n = !1,
                              i = u(
                                function () {
                                  return Promise.resolve(
                                    s.j("beforeLeave", e, c)
                                  ).then(function () {
                                    return Promise.resolve(
                                      Promise.all([
                                        s.leave(e, c),
                                        j(r, e),
                                      ]).then(function (t) {
                                        return t[0];
                                      })
                                    ).then(function (t) {
                                      return (
                                        (n = t),
                                        Promise.resolve(
                                          s.j("afterLeave", e, c)
                                        ).then(function () {})
                                      );
                                    });
                                  });
                                },
                                function (t) {
                                  if (s.M(t))
                                    throw new et(
                                      t,
                                      "Transition error [before/after/leave]"
                                    );
                                }
                              );
                            return i && i.then ? i.then(t) : t();
                          })();
                          return n && n.then ? n.then(t) : t();
                        }
                      );
                    }
                    var n = (function () {
                      if (f)
                        return Promise.resolve(j(r, e)).then(function () {});
                    })();
                    return n && n.then ? n.then(t) : t();
                  },
                  function (t) {
                    if (((s.S = !1), t.name && "BarbaError" === t.name))
                      throw (
                        (s.logger.debug(t.label), s.logger.error(t.error), t)
                      );
                    throw (
                      (s.logger.debug("Transition error [page]"),
                      s.logger.error(t),
                      t)
                    );
                  }
                );
                return Promise.resolve(l && l.then ? l.then(i) : i(l));
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (n.once = function (t, e) {
              try {
                return Promise.resolve(B.do("once", t, e)).then(function () {
                  return e.once ? q(e.once, e)(t) : Promise.resolve();
                });
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (n.leave = function (t, e) {
              try {
                return Promise.resolve(B.do("leave", t, e)).then(function () {
                  return e.leave ? q(e.leave, e)(t) : Promise.resolve();
                });
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (n.enter = function (t, e, n) {
              try {
                return Promise.resolve(B.do("enter", t, e)).then(function () {
                  return e.enter ? q(e.enter, e)(t, n) : Promise.resolve();
                });
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (n.add = function (t, e) {
              try {
                return (
                  A.addContainer(t.next.container, e),
                  B.do("nextAdded", t),
                  Promise.resolve()
                );
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (n.remove = function (t) {
              try {
                return (
                  A.removeContainer(t.current.container),
                  B.do("currentRemoved", t),
                  Promise.resolve()
                );
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            (n.M = function (t) {
              return t.message
                ? !/Timeout error|Fetch error/.test(t.message)
                : !t.status;
            }),
            (n.j = function (t, e, n) {
              try {
                return Promise.resolve(B.do(t, e, n)).then(function () {
                  return n[t] ? q(n[t], n)(e) : Promise.resolve();
                });
              } catch (t) {
                return Promise.reject(t);
              }
            }),
            e(t, [
              {
                key: "isRunning",
                get: function () {
                  return this.S;
                },
                set: function (t) {
                  this.S = t;
                },
              },
              {
                key: "hasOnce",
                get: function () {
                  return this.store.once.length > 0;
                },
              },
              {
                key: "hasSelf",
                get: function () {
                  return this.store.all.some(function (t) {
                    return "self" === t.name;
                  });
                },
              },
              {
                key: "shouldWait",
                get: function () {
                  return this.store.all.some(function (t) {
                    return (t.to && !t.to.route) || t.sync;
                  });
                },
              },
            ]),
            t
          );
        })(),
        ot = (function () {
          function t(t) {
            var e = this;
            (this.names = [
              "beforeLeave",
              "afterLeave",
              "beforeEnter",
              "afterEnter",
            ]),
              (this.byNamespace = new Map()),
              0 !== t.length &&
                (t.forEach(function (t) {
                  e.byNamespace.set(t.namespace, t);
                }),
                this.names.forEach(function (t) {
                  B[t](e.L(t));
                }));
          }
          return (
            (t.prototype.L = function (t) {
              var e = this;
              return function (n) {
                var r = t.match(/enter/i) ? n.next : n.current,
                  o = e.byNamespace.get(r.namespace);
                return o && o[t] ? q(o[t], o)(n) : Promise.resolve();
              };
            }),
            t
          );
        })();
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
        Element.prototype.closest ||
          (Element.prototype.closest = function (t) {
            var e = this;
            do {
              if (e.matches(t)) return e;
              e = e.parentElement || e.parentNode;
            } while (null !== e && 1 === e.nodeType);
            return null;
          });
      var it = {
        container: null,
        html: "",
        namespace: "",
        url: { hash: "", href: "", path: "", port: null, query: {} },
      };
      return new ((function () {
        function t() {
          (this.version = "2.9.7"),
            (this.schemaPage = it),
            (this.Logger = l),
            (this.logger = new l("@barba/core")),
            (this.plugins = []),
            (this.hooks = B),
            (this.dom = A),
            (this.helpers = M),
            (this.history = T),
            (this.request = z),
            (this.url = N);
        }
        var r = t.prototype;
        return (
          (r.use = function (t, e) {
            var n = this.plugins;
            n.indexOf(t) > -1
              ? this.logger.warn("Plugin [" + t.name + "] already installed.")
              : "function" == typeof t.install
              ? (t.install(this, e), n.push(t))
              : this.logger.warn(
                  "Plugin [" + t.name + '] has no "install" method.'
                );
          }),
          (r.init = function (t) {
            var e = void 0 === t ? {} : t,
              r = e.transitions,
              o = void 0 === r ? [] : r,
              i = e.views,
              a = void 0 === i ? [] : i,
              s = e.schema,
              u = void 0 === s ? S : s,
              c = e.requestError,
              f = e.timeout,
              h = void 0 === f ? 2e3 : f,
              p = e.cacheIgnore,
              d = void 0 !== p && p,
              v = e.prefetchIgnore,
              m = void 0 !== v && v,
              g = e.preventRunning,
              y = void 0 !== g && g,
              b = e.prevent,
              w = void 0 === b ? null : b,
              x = e.debug,
              E = e.logLevel;
            if (
              (l.setLevel(
                !0 === (void 0 !== x && x) ? "debug" : void 0 === E ? "off" : E
              ),
              this.logger.info(this.version),
              Object.keys(u).forEach(function (t) {
                S[t] && (S[t] = u[t]);
              }),
              (this.$ = c),
              (this.timeout = h),
              (this.cacheIgnore = d),
              (this.prefetchIgnore = m),
              (this.preventRunning = y),
              (this._ = this.dom.getWrapper()),
              !this._)
            )
              throw new Error("[@barba/core] No Barba wrapper found");
            this._.setAttribute("aria-live", "polite"), this.q();
            var O = this.data.current;
            if (!O.container)
              throw new Error("[@barba/core] No Barba container found");
            if (
              ((this.cache = new W(d)),
              (this.prevent = new tt(m)),
              (this.transitions = new rt(o)),
              (this.views = new ot(a)),
              null !== w)
            ) {
              if ("function" != typeof w)
                throw new Error("[@barba/core] Prevent should be a function");
              this.prevent.add("preventCustom", w);
            }
            this.history.init(O.url.href, O.namespace),
              (this.B = this.B.bind(this)),
              (this.U = this.U.bind(this)),
              (this.D = this.D.bind(this)),
              this.F(),
              this.plugins.forEach(function (t) {
                return t.init();
              });
            var P = this.data;
            (P.trigger = "barba"),
              (P.next = P.current),
              (P.current = n({}, this.schemaPage)),
              this.hooks.do("ready", P),
              this.once(P),
              this.q();
          }),
          (r.destroy = function () {
            this.q(),
              this.H(),
              this.history.clear(),
              this.hooks.clear(),
              (this.plugins = []);
          }),
          (r.force = function (t) {
            window.location.assign(t);
          }),
          (r.go = function (t, e, n) {
            var r;
            if ((void 0 === e && (e = "barba"), this.transitions.isRunning))
              this.force(t);
            else if (
              !(r =
                "popstate" === e
                  ? this.history.current &&
                    this.url.getPath(this.history.current.url) ===
                      this.url.getPath(t)
                  : this.prevent.run("sameUrl", null, null, t)) ||
              this.transitions.hasSelf
            )
              return (
                (e = this.history.change(t, e, n)),
                n && (n.stopPropagation(), n.preventDefault()),
                this.page(t, e, r)
              );
          }),
          (r.once = function (t) {
            try {
              var e = this;
              return Promise.resolve(e.hooks.do("beforeEnter", t)).then(
                function () {
                  function n() {
                    return Promise.resolve(e.hooks.do("afterEnter", t)).then(
                      function () {}
                    );
                  }
                  var r = (function () {
                    if (e.transitions.hasOnce) {
                      var n = e.transitions.get(t, { once: !0 });
                      return Promise.resolve(
                        e.transitions.doOnce({ transition: n, data: t })
                      ).then(function () {});
                    }
                  })();
                  return r && r.then ? r.then(n) : n();
                }
              );
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (r.page = function (t, e, r) {
            try {
              var o = function () {
                  var t = i.data;
                  return Promise.resolve(i.hooks.do("page", t)).then(
                    function () {
                      var e = u(
                        function () {
                          var e = i.transitions.get(t, { once: !1, self: r });
                          return Promise.resolve(
                            i.transitions.doPage({
                              data: t,
                              page: a,
                              transition: e,
                              wrapper: i._,
                            })
                          ).then(function () {
                            i.q();
                          });
                        },
                        function () {
                          0 === l.getLevel() && i.force(t.current.url.href);
                        }
                      );
                      if (e && e.then) return e.then(function () {});
                    }
                  );
                },
                i = this;
              (i.data.next.url = n({ href: t }, i.url.parse(t))),
                (i.data.trigger = e);
              var a = i.cache.has(t)
                  ? i.cache.update(t, { action: "click" }).request
                  : i.cache.set(
                      t,
                      i.request(t, i.timeout, i.onRequestError.bind(i, e)),
                      "click"
                    ).request,
                s = (function () {
                  if (i.transitions.shouldWait)
                    return Promise.resolve(j(a, i.data)).then(function () {});
                })();
              return Promise.resolve(s && s.then ? s.then(o) : o());
            } catch (t) {
              return Promise.reject(t);
            }
          }),
          (r.onRequestError = function (t) {
            this.transitions.isRunning = !1;
            for (
              var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            var o = n[0],
              i = n[1],
              a = this.cache.getAction(o);
            return (
              this.cache.delete(o),
              !(
                (this.$ && !1 === this.$(t, a, o, i)) ||
                ("click" === a && this.force(o), 1)
              )
            );
          }),
          (r.prefetch = function (t) {
            var e = this;
            this.cache.has(t) ||
              this.cache.set(
                t,
                this.request(
                  t,
                  this.timeout,
                  this.onRequestError.bind(this, "barba")
                ).catch(function (t) {
                  e.logger.error(t);
                }),
                "prefetch"
              );
          }),
          (r.F = function () {
            !0 !== this.prefetchIgnore &&
              (document.addEventListener("mouseover", this.B),
              document.addEventListener("touchstart", this.B)),
              document.addEventListener("click", this.U),
              window.addEventListener("popstate", this.D);
          }),
          (r.H = function () {
            !0 !== this.prefetchIgnore &&
              (document.removeEventListener("mouseover", this.B),
              document.removeEventListener("touchstart", this.B)),
              document.removeEventListener("click", this.U),
              window.removeEventListener("popstate", this.D);
          }),
          (r.B = function (t) {
            var e = this,
              n = this.I(t);
            if (n) {
              var r = this.dom.getHref(n);
              this.prevent.checkHref(r) ||
                this.cache.has(r) ||
                this.cache.set(
                  r,
                  this.request(
                    r,
                    this.timeout,
                    this.onRequestError.bind(this, n)
                  ).catch(function (t) {
                    e.logger.error(t);
                  }),
                  "enter"
                );
            }
          }),
          (r.U = function (t) {
            var e = this.I(t);
            if (e)
              return this.transitions.isRunning && this.preventRunning
                ? (t.preventDefault(), void t.stopPropagation())
                : void this.go(this.dom.getHref(e), e, t);
          }),
          (r.D = function (t) {
            this.go(this.url.getHref(), "popstate", t);
          }),
          (r.I = function (t) {
            for (var e = t.target; e && !this.dom.getHref(e); )
              e = e.parentNode;
            if (e && !this.prevent.checkLink(e, t, this.dom.getHref(e)))
              return e;
          }),
          (r.q = function () {
            var t = this.url.getHref(),
              e = {
                container: this.dom.getContainer(),
                html: this.dom.getHtml(),
                namespace: this.dom.getNamespace(),
                url: n({ href: t }, this.url.parse(t)),
              };
            (this.C = {
              current: e,
              next: n({}, this.schemaPage),
              trigger: void 0,
            }),
              this.hooks.do("reset", this.data);
          }),
          e(t, [
            {
              key: "data",
              get: function () {
                return this.C;
              },
            },
            {
              key: "wrapper",
              get: function () {
                return this._;
              },
            },
          ]),
          t
        );
      })())();
    })();
  },
  function (t, e) {
    t.exports = !1;
  },
  function (t, e, n) {
    var r,
      o = n(10),
      i = n(96),
      a = n(45),
      s = n(26),
      u = n(102),
      c = n(68),
      f = n(46),
      l = f("IE_PROTO"),
      h = function () {},
      p = function (t) {
        return "<script>" + t + "</script>";
      },
      d = function (t) {
        t.write(p("")), t.close();
        var e = t.parentWindow.Object;
        return (t = null), e;
      },
      v = function () {
        try {
          r = new ActiveXObject("htmlfile");
        } catch (t) {}
        var t, e;
        v =
          "undefined" != typeof document
            ? document.domain && r
              ? d(r)
              : (((e = c("iframe")).style.display = "none"),
                u.appendChild(e),
                (e.src = String("javascript:")),
                (t = e.contentWindow.document).open(),
                t.write(p("document.F=Object")),
                t.close(),
                t.F)
            : d(r);
        for (var n = a.length; n--; ) delete v.prototype[a[n]];
        return v();
      };
    (s[l] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var n;
          return (
            null !== t
              ? ((h.prototype = o(t)),
                (n = new h()),
                (h.prototype = null),
                (n[l] = t))
              : (n = v()),
            void 0 === e ? n : i.f(n, e)
          );
        });
  },
  function (t, e) {
    t.exports = {};
  },
  function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  function (t, e, n) {
    var r = n(21),
      o = n(2),
      i = n(26),
      a = n(4),
      s = n(8),
      u = n(9).f,
      c = n(49),
      f = n(111),
      l = n(84),
      h = n(38),
      p = n(114),
      d = !1,
      v = h("meta"),
      m = 0,
      g = function (t) {
        u(t, v, { value: { objectID: "O" + m++, weakData: {} } });
      },
      y = (t.exports = {
        enable: function () {
          (y.enable = function () {}), (d = !0);
          var t = c.f,
            e = o([].splice),
            n = {};
          (n[v] = 1),
            t(n).length &&
              ((c.f = function (n) {
                for (var r = t(n), o = 0, i = r.length; o < i; o++)
                  if (r[o] === v) {
                    e(r, o, 1);
                    break;
                  }
                return r;
              }),
              r(
                { target: "Object", stat: !0, forced: !0 },
                { getOwnPropertyNames: f.f }
              ));
        },
        fastKey: function (t, e) {
          if (!a(t))
            return "symbol" == typeof t
              ? t
              : ("string" == typeof t ? "S" : "P") + t;
          if (!s(t, v)) {
            if (!l(t)) return "F";
            if (!e) return "E";
            g(t);
          }
          return t[v].objectID;
        },
        getWeakData: function (t, e) {
          if (!s(t, v)) {
            if (!l(t)) return !0;
            if (!e) return !1;
            g(t);
          }
          return t[v].weakData;
        },
        onFreeze: function (t) {
          return p && d && l(t) && !s(t, v) && g(t), t;
        },
      });
    i[v] = !0;
  },
  function (t, e, n) {
    var r = n(2),
      o = n(42),
      i = n(34),
      a = r(r.bind);
    t.exports = function (t, e) {
      return (
        o(t),
        void 0 === e
          ? t
          : i
          ? a(t, e)
          : function () {
              return t.apply(e, arguments);
            }
      );
    };
  },
  function (t, e, n) {
    var r = n(55),
      o = n(1),
      i = n(13),
      a = n(5)("toStringTag"),
      s = Object,
      u =
        "Arguments" ==
        i(
          (function () {
            return arguments;
          })()
        );
    t.exports = r
      ? i
      : function (t) {
          var e, n, r;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" ==
              typeof (n = (function (t, e) {
                try {
                  return t[e];
                } catch (t) {}
              })((e = s(t)), a))
            ? n
            : u
            ? i(e)
            : "Object" == (r = i(e)) && o(e.callee)
            ? "Arguments"
            : r;
        };
  },
  function (t, e, n) {
    (function (e) {
      var n = /^\s+|\s+$/g,
        r = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        i = /^0o[0-7]+$/i,
        a = parseInt,
        s = "object" == typeof e && e && e.Object === Object && e,
        u = "object" == typeof self && self && self.Object === Object && self,
        c = s || u || Function("return this")(),
        f = Object.prototype.toString,
        l = Math.max,
        h = Math.min,
        p = function () {
          return c.Date.now();
        };
      function d(t) {
        var e = typeof t;
        return !!t && ("object" == e || "function" == e);
      }
      function v(t) {
        if ("number" == typeof t) return t;
        if (
          (function (t) {
            return (
              "symbol" == typeof t ||
              ((function (t) {
                return !!t && "object" == typeof t;
              })(t) &&
                "[object Symbol]" == f.call(t))
            );
          })(t)
        )
          return NaN;
        if (d(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = d(e) ? e + "" : e;
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(n, "");
        var s = o.test(t);
        return s || i.test(t) ? a(t.slice(2), s ? 2 : 8) : r.test(t) ? NaN : +t;
      }
      t.exports = function (t, e, n) {
        var r,
          o,
          i,
          a,
          s,
          u,
          c = 0,
          f = !1,
          m = !1,
          g = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");
        function y(e) {
          var n = r,
            i = o;
          return (r = o = void 0), (c = e), (a = t.apply(i, n));
        }
        function b(t) {
          return (c = t), (s = setTimeout(x, e)), f ? y(t) : a;
        }
        function w(t) {
          var n = t - u;
          return void 0 === u || n >= e || n < 0 || (m && t - c >= i);
        }
        function x() {
          var t = p();
          if (w(t)) return E(t);
          s = setTimeout(
            x,
            (function (t) {
              var n = e - (t - u);
              return m ? h(n, i - (t - c)) : n;
            })(t)
          );
        }
        function E(t) {
          return (s = void 0), g && r ? y(t) : ((r = o = void 0), a);
        }
        function O() {
          var t = p(),
            n = w(t);
          if (((r = arguments), (o = this), (u = t), n)) {
            if (void 0 === s) return b(u);
            if (m) return (s = setTimeout(x, e)), y(u);
          }
          return void 0 === s && (s = setTimeout(x, e)), a;
        }
        return (
          (e = v(e) || 0),
          d(n) &&
            ((f = !!n.leading),
            (i = (m = "maxWait" in n) ? l(v(n.maxWait) || 0, e) : i),
            (g = "trailing" in n ? !!n.trailing : g)),
          (O.cancel = function () {
            void 0 !== s && clearTimeout(s), (c = 0), (r = u = o = s = void 0);
          }),
          (O.flush = function () {
            return void 0 === s ? a : E(p());
          }),
          O
        );
      };
    }.call(this, n(61)));
  },
  function (t, e, n) {
    "use strict";
    var r = n(12),
      o = n(93),
      i = n(20),
      a = n(16),
      s = n(9).f,
      u = n(48),
      c = n(51),
      f = n(24),
      l = n(7),
      h = a.set,
      p = a.getterFor("Array Iterator");
    t.exports = u(
      Array,
      "Array",
      function (t, e) {
        h(this, { type: "Array Iterator", target: r(t), index: 0, kind: e });
      },
      function () {
        var t = p(this),
          e = t.target,
          n = t.kind,
          r = t.index++;
        return !e || r >= e.length
          ? ((t.target = void 0), c(void 0, !0))
          : c("keys" == n ? r : "values" == n ? e[r] : [r, e[r]], !1);
      },
      "values"
    );
    var d = (i.Arguments = i.Array);
    if ((o("keys"), o("values"), o("entries"), !f && l && "values" !== d.name))
      try {
        s(d, "name", { value: "values" });
      } catch (t) {}
  },
  function (t, e, n) {
    var r = n(2),
      o = n(3),
      i = n(13),
      a = Object,
      s = r("".split);
    t.exports = o(function () {
      return !a("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == i(t) ? s(t, "") : a(t);
        }
      : a;
  },
  function (t, e, n) {
    var r = n(3);
    t.exports = !r(function () {
      var t = function () {}.bind();
      return "function" != typeof t || t.hasOwnProperty("prototype");
    });
  },
  function (t, e, n) {
    var r = n(14),
      o = TypeError;
    t.exports = function (t) {
      if (r(t)) throw o("Can't call method on " + t);
      return t;
    };
  },
  function (t, e, n) {
    var r = n(6),
      o = n(37),
      i = r["__core-js_shared__"] || o("__core-js_shared__", {});
    t.exports = i;
  },
  function (t, e, n) {
    var r = n(6),
      o = Object.defineProperty;
    t.exports = function (t, e) {
      try {
        o(r, t, { value: e, configurable: !0, writable: !0 });
      } catch (n) {
        r[t] = e;
      }
      return e;
    };
  },
  function (t, e, n) {
    var r = n(2),
      o = 0,
      i = Math.random(),
      a = r((1).toString);
    t.exports = function (t) {
      return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36);
    };
  },
  function (t, e, n) {
    var r = n(97),
      o = n(69);
    t.exports = function (t) {
      var e = r(t, "string");
      return o(e) ? e : e + "";
    };
  },
  function (t, e, n) {
    var r = n(2);
    t.exports = r({}.isPrototypeOf);
  },
  function (t, e, n) {
    var r = n(42),
      o = n(14);
    t.exports = function (t, e) {
      var n = t[e];
      return o(n) ? void 0 : r(n);
    };
  },
  function (t, e, n) {
    var r = n(1),
      o = n(43),
      i = TypeError;
    t.exports = function (t) {
      if (r(t)) return t;
      throw i(o(t) + " is not a function");
    };
  },
  function (t, e) {
    var n = String;
    t.exports = function (t) {
      try {
        return n(t);
      } catch (t) {
        return "Object";
      }
    };
  },
  function (t, e, n) {
    var r = n(100);
    t.exports = function (t) {
      var e = +t;
      return e != e || 0 === e ? 0 : r(e);
    };
  },
  function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  function (t, e, n) {
    var r = n(62),
      o = n(38),
      i = r("keys");
    t.exports = function (t) {
      return i[t] || (i[t] = o(t));
    };
  },
  function (t, e, n) {
    var r = n(7),
      o = n(9),
      i = n(27);
    t.exports = r
      ? function (t, e, n) {
          return o.f(t, e, i(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        };
  },
  function (t, e, n) {
    "use strict";
    var r = n(21),
      o = n(11),
      i = n(24),
      a = n(76),
      s = n(1),
      u = n(106),
      c = n(81),
      f = n(82),
      l = n(50),
      h = n(47),
      p = n(17),
      d = n(5),
      v = n(20),
      m = n(80),
      g = a.PROPER,
      y = a.CONFIGURABLE,
      b = m.IteratorPrototype,
      w = m.BUGGY_SAFARI_ITERATORS,
      x = d("iterator"),
      E = function () {
        return this;
      };
    t.exports = function (t, e, n, a, d, m, O) {
      u(n, e, a);
      var P,
        _,
        S,
        A = function (t) {
          if (t === d && I) return I;
          if (!w && t in k) return k[t];
          switch (t) {
            case "keys":
            case "values":
            case "entries":
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        T = e + " Iterator",
        j = !1,
        k = t.prototype,
        M = k[x] || k["@@iterator"] || (d && k[d]),
        I = (!w && M) || A(d),
        D = ("Array" == e && k.entries) || M;
      if (
        (D &&
          (P = c(D.call(new t()))) !== Object.prototype &&
          P.next &&
          (i || c(P) === b || (f ? f(P, b) : s(P[x]) || p(P, x, E)),
          l(P, T, !0, !0),
          i && (v[T] = E)),
        g &&
          "values" == d &&
          M &&
          "values" !== M.name &&
          (!i && y
            ? h(k, "name", "values")
            : ((j = !0),
              (I = function () {
                return o(M, this);
              }))),
        d)
      )
        if (
          ((_ = {
            values: A("values"),
            keys: m ? I : A("keys"),
            entries: A("entries"),
          }),
          O)
        )
          for (S in _) (w || j || !(S in k)) && p(k, S, _[S]);
        else r({ target: e, proto: !0, forced: w || j }, _);
      return (i && !O) || k[x] === I || p(k, x, I, { name: d }), (v[e] = I), _;
    };
  },
  function (t, e, n) {
    var r = n(71),
      o = n(45).concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e, n) {
    var r = n(9).f,
      o = n(8),
      i = n(5)("toStringTag");
    t.exports = function (t, e, n) {
      t && !n && (t = t.prototype),
        t && !o(t, i) && r(t, i, { configurable: !0, value: e });
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      return { value: t, done: e };
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(21),
      o = n(6),
      i = n(2),
      a = n(79),
      s = n(17),
      u = n(28),
      c = n(53),
      f = n(56),
      l = n(1),
      h = n(14),
      p = n(4),
      d = n(3),
      v = n(88),
      m = n(50),
      g = n(115);
    t.exports = function (t, e, n) {
      var y = -1 !== t.indexOf("Map"),
        b = -1 !== t.indexOf("Weak"),
        w = y ? "set" : "add",
        x = o[t],
        E = x && x.prototype,
        O = x,
        P = {},
        _ = function (t) {
          var e = i(E[t]);
          s(
            E,
            t,
            "add" == t
              ? function (t) {
                  return e(this, 0 === t ? 0 : t), this;
                }
              : "delete" == t
              ? function (t) {
                  return !(b && !p(t)) && e(this, 0 === t ? 0 : t);
                }
              : "get" == t
              ? function (t) {
                  return b && !p(t) ? void 0 : e(this, 0 === t ? 0 : t);
                }
              : "has" == t
              ? function (t) {
                  return !(b && !p(t)) && e(this, 0 === t ? 0 : t);
                }
              : function (t, n) {
                  return e(this, 0 === t ? 0 : t, n), this;
                }
          );
        };
      if (
        a(
          t,
          !l(x) ||
            !(
              b ||
              (E.forEach &&
                !d(function () {
                  new x().entries().next();
                }))
            )
        )
      )
        (O = n.getConstructor(e, t, y, w)), u.enable();
      else if (a(t, !0)) {
        var S = new O(),
          A = S[w](b ? {} : -0, 1) != S,
          T = d(function () {
            S.has(1);
          }),
          j = v(function (t) {
            new x(t);
          }),
          k =
            !b &&
            d(function () {
              for (var t = new x(), e = 5; e--; ) t[w](e, e);
              return !t.has(-0);
            });
        j ||
          (((O = e(function (t, e) {
            f(t, E);
            var n = g(new x(), t, O);
            return h(e) || c(e, n[w], { that: n, AS_ENTRIES: y }), n;
          })).prototype = E),
          (E.constructor = O)),
          (T || k) && (_("delete"), _("has"), y && _("get")),
          (k || A) && _(w),
          b && E.clear && delete E.clear;
      }
      return (
        (P[t] = O),
        r({ global: !0, constructor: !0, forced: O != x }, P),
        m(O, t),
        b || n.setStrong(O, t, y),
        O
      );
    };
  },
  function (t, e, n) {
    var r = n(29),
      o = n(11),
      i = n(10),
      a = n(43),
      s = n(85),
      u = n(19),
      c = n(40),
      f = n(86),
      l = n(54),
      h = n(87),
      p = TypeError,
      d = function (t, e) {
        (this.stopped = t), (this.result = e);
      },
      v = d.prototype;
    t.exports = function (t, e, n) {
      var m,
        g,
        y,
        b,
        w,
        x,
        E,
        O = n && n.that,
        P = !(!n || !n.AS_ENTRIES),
        _ = !(!n || !n.IS_RECORD),
        S = !(!n || !n.IS_ITERATOR),
        A = !(!n || !n.INTERRUPTED),
        T = r(e, O),
        j = function (t) {
          return m && h(m, "normal", t), new d(!0, t);
        },
        k = function (t) {
          return P
            ? (i(t), A ? T(t[0], t[1], j) : T(t[0], t[1]))
            : A
            ? T(t, j)
            : T(t);
        };
      if (_) m = t.iterator;
      else if (S) m = t;
      else {
        if (!(g = l(t))) throw p(a(t) + " is not iterable");
        if (s(g)) {
          for (y = 0, b = u(t); b > y; y++)
            if ((w = k(t[y])) && c(v, w)) return w;
          return new d(!1);
        }
        m = f(t, g);
      }
      for (x = _ ? t.next : m.next; !(E = o(x, m)).done; ) {
        try {
          w = k(E.value);
        } catch (t) {
          h(m, "throw", t);
        }
        if ("object" == typeof w && w && c(v, w)) return w;
      }
      return new d(!1);
    };
  },
  function (t, e, n) {
    var r = n(30),
      o = n(41),
      i = n(14),
      a = n(20),
      s = n(5)("iterator");
    t.exports = function (t) {
      if (!i(t)) return o(t, s) || o(t, "@@iterator") || a[r(t)];
    };
  },
  function (t, e, n) {
    var r = {};
    (r[n(5)("toStringTag")] = "z"), (t.exports = "[object z]" === String(r));
  },
  function (t, e, n) {
    var r = n(40),
      o = TypeError;
    t.exports = function (t, e) {
      if (r(e, t)) return t;
      throw o("Incorrect invocation");
    };
  },
  function (t, e, n) {
    var r = n(17);
    t.exports = function (t, e, n) {
      for (var o in e) r(t, o, e[o], n);
      return t;
    };
  },
  function (t, e, n) {
    var r = n(55),
      o = n(17),
      i = n(117);
    r || o(Object.prototype, "toString", i, { unsafe: !0 });
  },
  function (t, e, n) {
    "use strict";
    var r = n(118).charAt,
      o = n(90),
      i = n(16),
      a = n(48),
      s = n(51),
      u = i.set,
      c = i.getterFor("String Iterator");
    a(
      String,
      "String",
      function (t) {
        u(this, { type: "String Iterator", string: o(t), index: 0 });
      },
      function () {
        var t,
          e = c(this),
          n = e.string,
          o = e.index;
        return o >= n.length
          ? s(void 0, !0)
          : ((t = r(n, o)), (e.index += t.length), s(t, !1));
      }
    );
  },
  function (t, e, n) {
    var r = n(34),
      o = Function.prototype,
      i = o.call,
      a = r && o.bind.bind(i, i);
    t.exports = r
      ? a
      : function (t) {
          return function () {
            return i.apply(t, arguments);
          };
        };
  },
  function (t, e) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (t) {
      "object" == typeof window && (n = window);
    }
    t.exports = n;
  },
  function (t, e, n) {
    var r = n(24),
      o = n(36);
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.26.0",
      mode: r ? "pure" : "global",
      copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",
      source: "https://github.com/zloirock/core-js",
    });
  },
  function (t, e, n) {
    var r = n(94),
      o = n(3);
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        var t = Symbol();
        return (
          !String(t) ||
          !(Object(t) instanceof Symbol) ||
          (!Symbol.sham && r && r < 41)
        );
      });
  },
  function (t, e) {
    var n = "object" == typeof document && document.all,
      r = void 0 === n && void 0 !== n;
    t.exports = { all: n, IS_HTMLDDA: r };
  },
  function (t, e, n) {
    var r = n(63);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  function (t, e, n) {
    var r = n(7),
      o = n(3);
    t.exports =
      r &&
      o(function () {
        return (
          42 !=
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1,
          }).prototype
        );
      });
  },
  function (t, e, n) {
    var r = n(7),
      o = n(3),
      i = n(68);
    t.exports =
      !r &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(i("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  function (t, e, n) {
    var r = n(6),
      o = n(4),
      i = r.document,
      a = o(i) && o(i.createElement);
    t.exports = function (t) {
      return a ? i.createElement(t) : {};
    };
  },
  function (t, e, n) {
    var r = n(15),
      o = n(1),
      i = n(40),
      a = n(65),
      s = Object;
    t.exports = a
      ? function (t) {
          return "symbol" == typeof t;
        }
      : function (t) {
          var e = r("Symbol");
          return o(e) && i(e.prototype, s(t));
        };
  },
  function (t, e, n) {
    var r = n(71),
      o = n(45);
    t.exports =
      Object.keys ||
      function (t) {
        return r(t, o);
      };
  },
  function (t, e, n) {
    var r = n(2),
      o = n(8),
      i = n(12),
      a = n(99).indexOf,
      s = n(26),
      u = r([].push);
    t.exports = function (t, e) {
      var n,
        r = i(t),
        c = 0,
        f = [];
      for (n in r) !o(s, n) && o(r, n) && u(f, n);
      for (; e.length > c; ) o(r, (n = e[c++])) && (~a(f, n) || u(f, n));
      return f;
    };
  },
  function (t, e, n) {
    var r = n(44),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      var n = r(t);
      return n < 0 ? o(n + e, 0) : i(n, e);
    };
  },
  function (t, e, n) {
    var r = n(6),
      o = n(1),
      i = r.WeakMap;
    t.exports = o(i) && /native code/.test(String(i));
  },
  function (t, e, n) {
    var r = n(7),
      o = n(11),
      i = n(75),
      a = n(27),
      s = n(12),
      u = n(39),
      c = n(8),
      f = n(67),
      l = Object.getOwnPropertyDescriptor;
    e.f = r
      ? l
      : function (t, e) {
          if (((t = s(t)), (e = u(e)), f))
            try {
              return l(t, e);
            } catch (t) {}
          if (c(t, e)) return a(!o(i.f, t, e), t[e]);
        };
  },
  function (t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({ 1: 2 }, 1);
    e.f = i
      ? function (t) {
          var e = o(this, t);
          return !!e && e.enumerable;
        }
      : r;
  },
  function (t, e, n) {
    var r = n(7),
      o = n(8),
      i = Function.prototype,
      a = r && Object.getOwnPropertyDescriptor,
      s = o(i, "name"),
      u = s && "something" === function () {}.name,
      c = s && (!r || (r && a(i, "name").configurable));
    t.exports = { EXISTS: s, PROPER: u, CONFIGURABLE: c };
  },
  function (t, e, n) {
    var r = n(2),
      o = n(1),
      i = n(36),
      a = r(Function.toString);
    o(i.inspectSource) ||
      (i.inspectSource = function (t) {
        return a(t);
      }),
      (t.exports = i.inspectSource);
  },
  function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  function (t, e, n) {
    var r = n(3),
      o = n(1),
      i = /#|\.prototype\./,
      a = function (t, e) {
        var n = u[s(t)];
        return n == f || (n != c && (o(e) ? r(e) : !!e));
      },
      s = (a.normalize = function (t) {
        return String(t).replace(i, ".").toLowerCase();
      }),
      u = (a.data = {}),
      c = (a.NATIVE = "N"),
      f = (a.POLYFILL = "P");
    t.exports = a;
  },
  function (t, e, n) {
    "use strict";
    var r,
      o,
      i,
      a = n(3),
      s = n(1),
      u = n(4),
      c = n(25),
      f = n(81),
      l = n(17),
      h = n(5),
      p = n(24),
      d = h("iterator"),
      v = !1;
    [].keys &&
      ("next" in (i = [].keys())
        ? (o = f(f(i))) !== Object.prototype && (r = o)
        : (v = !0)),
      !u(r) ||
      a(function () {
        var t = {};
        return r[d].call(t) !== t;
      })
        ? (r = {})
        : p && (r = c(r)),
      s(r[d]) ||
        l(r, d, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: v });
  },
  function (t, e, n) {
    var r = n(8),
      o = n(1),
      i = n(18),
      a = n(46),
      s = n(107),
      u = a("IE_PROTO"),
      c = Object,
      f = c.prototype;
    t.exports = s
      ? c.getPrototypeOf
      : function (t) {
          var e = i(t);
          if (r(e, u)) return e[u];
          var n = e.constructor;
          return o(n) && e instanceof n
            ? n.prototype
            : e instanceof c
            ? f
            : null;
        };
  },
  function (t, e, n) {
    var r = n(2),
      o = n(10),
      i = n(108);
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              n = {};
            try {
              (t = r(
                Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
                  .set
              ))(n, []),
                (e = n instanceof Array);
            } catch (t) {}
            return function (n, r) {
              return o(n), i(r), e ? t(n, r) : (n.__proto__ = r), n;
            };
          })()
        : void 0);
  },
  function (t, e, n) {
    "use strict";
    var r = n(39),
      o = n(9),
      i = n(27);
    t.exports = function (t, e, n) {
      var a = r(e);
      a in t ? o.f(t, a, i(0, n)) : (t[a] = n);
    };
  },
  function (t, e, n) {
    var r = n(3),
      o = n(4),
      i = n(13),
      a = n(113),
      s = Object.isExtensible,
      u = r(function () {
        s(1);
      });
    t.exports =
      u || a
        ? function (t) {
            return !!o(t) && (!a || "ArrayBuffer" != i(t)) && (!s || s(t));
          }
        : s;
  },
  function (t, e, n) {
    var r = n(5),
      o = n(20),
      i = r("iterator"),
      a = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (o.Array === t || a[i] === t);
    };
  },
  function (t, e, n) {
    var r = n(11),
      o = n(42),
      i = n(10),
      a = n(43),
      s = n(54),
      u = TypeError;
    t.exports = function (t, e) {
      var n = arguments.length < 2 ? s(t) : e;
      if (o(n)) return i(r(n, t));
      throw u(a(t) + " is not iterable");
    };
  },
  function (t, e, n) {
    var r = n(11),
      o = n(10),
      i = n(41);
    t.exports = function (t, e, n) {
      var a, s;
      o(t);
      try {
        if (!(a = i(t, "return"))) {
          if ("throw" === e) throw n;
          return n;
        }
        a = r(a, t);
      } catch (t) {
        (s = !0), (a = t);
      }
      if ("throw" === e) throw n;
      if (s) throw a;
      return o(a), n;
    };
  },
  function (t, e, n) {
    var r = n(5)("iterator"),
      o = !1;
    try {
      var i = 0,
        a = {
          next: function () {
            return { done: !!i++ };
          },
          return: function () {
            o = !0;
          },
        };
      (a[r] = function () {
        return this;
      }),
        Array.from(a, function () {
          throw 2;
        });
    } catch (t) {}
    t.exports = function (t, e) {
      if (!e && !o) return !1;
      var n = !1;
      try {
        var i = {};
        (i[r] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            },
          };
        }),
          t(i);
      } catch (t) {}
      return n;
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(9).f,
      o = n(25),
      i = n(57),
      a = n(29),
      s = n(56),
      u = n(14),
      c = n(53),
      f = n(48),
      l = n(51),
      h = n(116),
      p = n(7),
      d = n(28).fastKey,
      v = n(16),
      m = v.set,
      g = v.getterFor;
    t.exports = {
      getConstructor: function (t, e, n, f) {
        var l = t(function (t, r) {
            s(t, h),
              m(t, {
                type: e,
                index: o(null),
                first: void 0,
                last: void 0,
                size: 0,
              }),
              p || (t.size = 0),
              u(r) || c(r, t[f], { that: t, AS_ENTRIES: n });
          }),
          h = l.prototype,
          v = g(e),
          y = function (t, e, n) {
            var r,
              o,
              i = v(t),
              a = b(t, e);
            return (
              a
                ? (a.value = n)
                : ((i.last = a =
                    {
                      index: (o = d(e, !0)),
                      key: e,
                      value: n,
                      previous: (r = i.last),
                      next: void 0,
                      removed: !1,
                    }),
                  i.first || (i.first = a),
                  r && (r.next = a),
                  p ? i.size++ : t.size++,
                  "F" !== o && (i.index[o] = a)),
              t
            );
          },
          b = function (t, e) {
            var n,
              r = v(t),
              o = d(e);
            if ("F" !== o) return r.index[o];
            for (n = r.first; n; n = n.next) if (n.key == e) return n;
          };
        return (
          i(h, {
            clear: function () {
              for (var t = v(this), e = t.index, n = t.first; n; )
                (n.removed = !0),
                  n.previous && (n.previous = n.previous.next = void 0),
                  delete e[n.index],
                  (n = n.next);
              (t.first = t.last = void 0), p ? (t.size = 0) : (this.size = 0);
            },
            delete: function (t) {
              var e = v(this),
                n = b(this, t);
              if (n) {
                var r = n.next,
                  o = n.previous;
                delete e.index[n.index],
                  (n.removed = !0),
                  o && (o.next = r),
                  r && (r.previous = o),
                  e.first == n && (e.first = r),
                  e.last == n && (e.last = o),
                  p ? e.size-- : this.size--;
              }
              return !!n;
            },
            forEach: function (t) {
              for (
                var e,
                  n = v(this),
                  r = a(t, arguments.length > 1 ? arguments[1] : void 0);
                (e = e ? e.next : n.first);

              )
                for (r(e.value, e.key, this); e && e.removed; ) e = e.previous;
            },
            has: function (t) {
              return !!b(this, t);
            },
          }),
          i(
            h,
            n
              ? {
                  get: function (t) {
                    var e = b(this, t);
                    return e && e.value;
                  },
                  set: function (t, e) {
                    return y(this, 0 === t ? 0 : t, e);
                  },
                }
              : {
                  add: function (t) {
                    return y(this, (t = 0 === t ? 0 : t), t);
                  },
                }
          ),
          p &&
            r(h, "size", {
              get: function () {
                return v(this).size;
              },
            }),
          l
        );
      },
      setStrong: function (t, e, n) {
        var r = e + " Iterator",
          o = g(e),
          i = g(r);
        f(
          t,
          e,
          function (t, e) {
            m(this, { type: r, target: t, state: o(t), kind: e, last: void 0 });
          },
          function () {
            for (var t = i(this), e = t.kind, n = t.last; n && n.removed; )
              n = n.previous;
            return t.target && (t.last = n = n ? n.next : t.state.first)
              ? l(
                  "keys" == e
                    ? n.key
                    : "values" == e
                    ? n.value
                    : [n.key, n.value],
                  !1
                )
              : ((t.target = void 0), l(void 0, !0));
          },
          n ? "entries" : "values",
          !n,
          !0
        ),
          h(e);
      },
    };
  },
  function (t, e, n) {
    var r = n(30),
      o = String;
    t.exports = function (t) {
      if ("Symbol" === r(t))
        throw TypeError("Cannot convert a Symbol value to a string");
      return o(t);
    };
  },
  function (t, e, n) {
    var r = n(2),
      o = n(3),
      i = n(1),
      a = n(30),
      s = n(15),
      u = n(77),
      c = function () {},
      f = [],
      l = s("Reflect", "construct"),
      h = /^\s*(?:class|function)\b/,
      p = r(h.exec),
      d = !h.exec(c),
      v = function (t) {
        if (!i(t)) return !1;
        try {
          return l(c, f, t), !0;
        } catch (t) {
          return !1;
        }
      },
      m = function (t) {
        if (!i(t)) return !1;
        switch (a(t)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return d || !!p(h, u(t));
        } catch (t) {
          return !0;
        }
      };
    (m.sham = !0),
      (t.exports =
        !l ||
        o(function () {
          var t;
          return (
            v(v.call) ||
            !v(Object) ||
            !v(function () {
              t = !0;
            }) ||
            t
          );
        })
          ? m
          : v);
  },
  function (t, e, n) {
    n(32), n(109), n(58), n(59);
    var r = n(22);
    t.exports = r.Map;
  },
  function (t, e, n) {
    var r = n(5),
      o = n(25),
      i = n(9).f,
      a = r("unscopables"),
      s = Array.prototype;
    null == s[a] && i(s, a, { configurable: !0, value: o(null) }),
      (t.exports = function (t) {
        s[a][t] = !0;
      });
  },
  function (t, e, n) {
    var r,
      o,
      i = n(6),
      a = n(95),
      s = i.process,
      u = i.Deno,
      c = (s && s.versions) || (u && u.version),
      f = c && c.v8;
    f && (o = (r = f.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
      !o &&
        a &&
        (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = a.match(/Chrome\/(\d+)/)) &&
        (o = +r[1]),
      (t.exports = o);
  },
  function (t, e, n) {
    var r = n(15);
    t.exports = r("navigator", "userAgent") || "";
  },
  function (t, e, n) {
    var r = n(7),
      o = n(66),
      i = n(9),
      a = n(10),
      s = n(12),
      u = n(70);
    e.f =
      r && !o
        ? Object.defineProperties
        : function (t, e) {
            a(t);
            for (var n, r = s(e), o = u(e), c = o.length, f = 0; c > f; )
              i.f(t, (n = o[f++]), r[n]);
            return t;
          };
  },
  function (t, e, n) {
    var r = n(11),
      o = n(4),
      i = n(69),
      a = n(41),
      s = n(98),
      u = n(5),
      c = TypeError,
      f = u("toPrimitive");
    t.exports = function (t, e) {
      if (!o(t) || i(t)) return t;
      var n,
        u = a(t, f);
      if (u) {
        if ((void 0 === e && (e = "default"), (n = r(u, t, e)), !o(n) || i(n)))
          return n;
        throw c("Can't convert object to primitive value");
      }
      return void 0 === e && (e = "number"), s(t, e);
    };
  },
  function (t, e, n) {
    var r = n(11),
      o = n(1),
      i = n(4),
      a = TypeError;
    t.exports = function (t, e) {
      var n, s;
      if ("string" === e && o((n = t.toString)) && !i((s = r(n, t)))) return s;
      if (o((n = t.valueOf)) && !i((s = r(n, t)))) return s;
      if ("string" !== e && o((n = t.toString)) && !i((s = r(n, t)))) return s;
      throw a("Can't convert object to primitive value");
    };
  },
  function (t, e, n) {
    var r = n(12),
      o = n(72),
      i = n(19),
      a = function (t) {
        return function (e, n, a) {
          var s,
            u = r(e),
            c = i(u),
            f = o(a, c);
          if (t && n != n) {
            for (; c > f; ) if ((s = u[f++]) != s) return !0;
          } else
            for (; c > f; f++)
              if ((t || f in u) && u[f] === n) return t || f || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  function (t, e) {
    var n = Math.ceil,
      r = Math.floor;
    t.exports =
      Math.trunc ||
      function (t) {
        var e = +t;
        return (e > 0 ? r : n)(e);
      };
  },
  function (t, e, n) {
    var r = n(44),
      o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0;
    };
  },
  function (t, e, n) {
    var r = n(15);
    t.exports = r("document", "documentElement");
  },
  function (t, e, n) {
    var r = n(3),
      o = n(1),
      i = n(8),
      a = n(7),
      s = n(76).CONFIGURABLE,
      u = n(77),
      c = n(16),
      f = c.enforce,
      l = c.get,
      h = Object.defineProperty,
      p =
        a &&
        !r(function () {
          return 8 !== h(function () {}, "length", { value: 8 }).length;
        }),
      d = String(String).split("String"),
      v = (t.exports = function (t, e, n) {
        "Symbol(" === String(e).slice(0, 7) &&
          (e = "[" + String(e).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          n && n.getter && (e = "get " + e),
          n && n.setter && (e = "set " + e),
          (!i(t, "name") || (s && t.name !== e)) &&
            (a ? h(t, "name", { value: e, configurable: !0 }) : (t.name = e)),
          p &&
            n &&
            i(n, "arity") &&
            t.length !== n.arity &&
            h(t, "length", { value: n.arity });
        try {
          n && i(n, "constructor") && n.constructor
            ? a && h(t, "prototype", { writable: !1 })
            : t.prototype && (t.prototype = void 0);
        } catch (t) {}
        var r = f(t);
        return (
          i(r, "source") || (r.source = d.join("string" == typeof e ? e : "")),
          t
        );
      });
    Function.prototype.toString = v(function () {
      return (o(this) && l(this).source) || u(this);
    }, "toString");
  },
  function (t, e, n) {
    var r = n(8),
      o = n(105),
      i = n(74),
      a = n(9);
    t.exports = function (t, e, n) {
      for (var s = o(e), u = a.f, c = i.f, f = 0; f < s.length; f++) {
        var l = s[f];
        r(t, l) || (n && r(n, l)) || u(t, l, c(e, l));
      }
    };
  },
  function (t, e, n) {
    var r = n(15),
      o = n(2),
      i = n(49),
      a = n(78),
      s = n(10),
      u = o([].concat);
    t.exports =
      r("Reflect", "ownKeys") ||
      function (t) {
        var e = i.f(s(t)),
          n = a.f;
        return n ? u(e, n(t)) : e;
      };
  },
  function (t, e, n) {
    "use strict";
    var r = n(80).IteratorPrototype,
      o = n(25),
      i = n(27),
      a = n(50),
      s = n(20),
      u = function () {
        return this;
      };
    t.exports = function (t, e, n, c) {
      var f = e + " Iterator";
      return (
        (t.prototype = o(r, { next: i(+!c, n) })),
        a(t, f, !1, !0),
        (s[f] = u),
        t
      );
    };
  },
  function (t, e, n) {
    var r = n(3);
    t.exports = !r(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  function (t, e, n) {
    var r = n(1),
      o = String,
      i = TypeError;
    t.exports = function (t) {
      if ("object" == typeof t || r(t)) return t;
      throw i("Can't set " + o(t) + " as a prototype");
    };
  },
  function (t, e, n) {
    n(110);
  },
  function (t, e, n) {
    "use strict";
    n(52)(
      "Map",
      function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      n(89)
    );
  },
  function (t, e, n) {
    var r = n(13),
      o = n(12),
      i = n(49).f,
      a = n(112),
      s =
        "object" == typeof window && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
    t.exports.f = function (t) {
      return s && "Window" == r(t)
        ? (function (t) {
            try {
              return i(t);
            } catch (t) {
              return a(s);
            }
          })(t)
        : i(o(t));
    };
  },
  function (t, e, n) {
    var r = n(72),
      o = n(19),
      i = n(83),
      a = Array,
      s = Math.max;
    t.exports = function (t, e, n) {
      for (
        var u = o(t),
          c = r(e, u),
          f = r(void 0 === n ? u : n, u),
          l = a(s(f - c, 0)),
          h = 0;
        c < f;
        c++, h++
      )
        i(l, h, t[c]);
      return (l.length = h), l;
    };
  },
  function (t, e, n) {
    var r = n(3);
    t.exports = r(function () {
      if ("function" == typeof ArrayBuffer) {
        var t = new ArrayBuffer(8);
        Object.isExtensible(t) && Object.defineProperty(t, "a", { value: 8 });
      }
    });
  },
  function (t, e, n) {
    var r = n(3);
    t.exports = !r(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  },
  function (t, e, n) {
    var r = n(1),
      o = n(4),
      i = n(82);
    t.exports = function (t, e, n) {
      var a, s;
      return (
        i &&
          r((a = e.constructor)) &&
          a !== n &&
          o((s = a.prototype)) &&
          s !== n.prototype &&
          i(t, s),
        t
      );
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(15),
      o = n(9),
      i = n(5),
      a = n(7),
      s = i("species");
    t.exports = function (t) {
      var e = r(t),
        n = o.f;
      a &&
        e &&
        !e[s] &&
        n(e, s, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  function (t, e, n) {
    "use strict";
    var r = n(55),
      o = n(30);
    t.exports = r
      ? {}.toString
      : function () {
          return "[object " + o(this) + "]";
        };
  },
  function (t, e, n) {
    var r = n(2),
      o = n(44),
      i = n(90),
      a = n(35),
      s = r("".charAt),
      u = r("".charCodeAt),
      c = r("".slice),
      f = function (t) {
        return function (e, n) {
          var r,
            f,
            l = i(a(e)),
            h = o(n),
            p = l.length;
          return h < 0 || h >= p
            ? t
              ? ""
              : void 0
            : (r = u(l, h)) < 55296 ||
              r > 56319 ||
              h + 1 === p ||
              (f = u(l, h + 1)) < 56320 ||
              f > 57343
            ? t
              ? s(l, h)
              : r
            : t
            ? c(l, h, h + 2)
            : f - 56320 + ((r - 55296) << 10) + 65536;
        };
      };
    t.exports = { codeAt: f(!1), charAt: f(!0) };
  },
  function (t, e, n) {
    n(32), n(58), n(120), n(59);
    var r = n(22);
    t.exports = r.Set;
  },
  function (t, e, n) {
    n(121);
  },
  function (t, e, n) {
    "use strict";
    n(52)(
      "Set",
      function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      n(89)
    );
  },
  function (t, e, n) {
    n(32), n(58), n(123);
    var r = n(22);
    t.exports = r.WeakMap;
  },
  function (t, e, n) {
    n(124);
  },
  function (t, e, n) {
    "use strict";
    var r,
      o = n(6),
      i = n(2),
      a = n(57),
      s = n(28),
      u = n(52),
      c = n(125),
      f = n(4),
      l = n(84),
      h = n(16).enforce,
      p = n(73),
      d = !o.ActiveXObject && "ActiveXObject" in o,
      v = function (t) {
        return function () {
          return t(this, arguments.length ? arguments[0] : void 0);
        };
      },
      m = u("WeakMap", v, c);
    if (p && d) {
      (r = c.getConstructor(v, "WeakMap", !0)), s.enable();
      var g = m.prototype,
        y = i(g.delete),
        b = i(g.has),
        w = i(g.get),
        x = i(g.set);
      a(g, {
        delete: function (t) {
          if (f(t) && !l(t)) {
            var e = h(this);
            return (
              e.frozen || (e.frozen = new r()), y(this, t) || e.frozen.delete(t)
            );
          }
          return y(this, t);
        },
        has: function (t) {
          if (f(t) && !l(t)) {
            var e = h(this);
            return (
              e.frozen || (e.frozen = new r()), b(this, t) || e.frozen.has(t)
            );
          }
          return b(this, t);
        },
        get: function (t) {
          if (f(t) && !l(t)) {
            var e = h(this);
            return (
              e.frozen || (e.frozen = new r()),
              b(this, t) ? w(this, t) : e.frozen.get(t)
            );
          }
          return w(this, t);
        },
        set: function (t, e) {
          if (f(t) && !l(t)) {
            var n = h(this);
            n.frozen || (n.frozen = new r()),
              b(this, t) ? x(this, t, e) : n.frozen.set(t, e);
          } else x(this, t, e);
          return this;
        },
      });
    }
  },
  function (t, e, n) {
    "use strict";
    var r = n(2),
      o = n(57),
      i = n(28).getWeakData,
      a = n(56),
      s = n(10),
      u = n(14),
      c = n(4),
      f = n(53),
      l = n(126),
      h = n(8),
      p = n(16),
      d = p.set,
      v = p.getterFor,
      m = l.find,
      g = l.findIndex,
      y = r([].splice),
      b = 0,
      w = function (t) {
        return t.frozen || (t.frozen = new x());
      },
      x = function () {
        this.entries = [];
      },
      E = function (t, e) {
        return m(t.entries, function (t) {
          return t[0] === e;
        });
      };
    (x.prototype = {
      get: function (t) {
        var e = E(this, t);
        if (e) return e[1];
      },
      has: function (t) {
        return !!E(this, t);
      },
      set: function (t, e) {
        var n = E(this, t);
        n ? (n[1] = e) : this.entries.push([t, e]);
      },
      delete: function (t) {
        var e = g(this.entries, function (e) {
          return e[0] === t;
        });
        return ~e && y(this.entries, e, 1), !!~e;
      },
    }),
      (t.exports = {
        getConstructor: function (t, e, n, r) {
          var l = t(function (t, o) {
              a(t, p),
                d(t, { type: e, id: b++, frozen: void 0 }),
                u(o) || f(o, t[r], { that: t, AS_ENTRIES: n });
            }),
            p = l.prototype,
            m = v(e),
            g = function (t, e, n) {
              var r = m(t),
                o = i(s(e), !0);
              return !0 === o ? w(r).set(e, n) : (o[r.id] = n), t;
            };
          return (
            o(p, {
              delete: function (t) {
                var e = m(this);
                if (!c(t)) return !1;
                var n = i(t);
                return !0 === n
                  ? w(e).delete(t)
                  : n && h(n, e.id) && delete n[e.id];
              },
              has: function (t) {
                var e = m(this);
                if (!c(t)) return !1;
                var n = i(t);
                return !0 === n ? w(e).has(t) : n && h(n, e.id);
              },
            }),
            o(
              p,
              n
                ? {
                    get: function (t) {
                      var e = m(this);
                      if (c(t)) {
                        var n = i(t);
                        return !0 === n ? w(e).get(t) : n ? n[e.id] : void 0;
                      }
                    },
                    set: function (t, e) {
                      return g(this, t, e);
                    },
                  }
                : {
                    add: function (t) {
                      return g(this, t, !0);
                    },
                  }
            ),
            l
          );
        },
      });
  },
  function (t, e, n) {
    var r = n(29),
      o = n(2),
      i = n(33),
      a = n(18),
      s = n(19),
      u = n(127),
      c = o([].push),
      f = function (t) {
        var e = 1 == t,
          n = 2 == t,
          o = 3 == t,
          f = 4 == t,
          l = 6 == t,
          h = 7 == t,
          p = 5 == t || l;
        return function (d, v, m, g) {
          for (
            var y,
              b,
              w = a(d),
              x = i(w),
              E = r(v, m),
              O = s(x),
              P = 0,
              _ = g || u,
              S = e ? _(d, O) : n || h ? _(d, 0) : void 0;
            O > P;
            P++
          )
            if ((p || P in x) && ((b = E((y = x[P]), P, w)), t))
              if (e) S[P] = b;
              else if (b)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return y;
                  case 6:
                    return P;
                  case 2:
                    c(S, y);
                }
              else
                switch (t) {
                  case 4:
                    return !1;
                  case 7:
                    c(S, y);
                }
          return l ? -1 : o || f ? f : S;
        };
      };
    t.exports = {
      forEach: f(0),
      map: f(1),
      filter: f(2),
      some: f(3),
      every: f(4),
      find: f(5),
      findIndex: f(6),
      filterReject: f(7),
    };
  },
  function (t, e, n) {
    var r = n(128);
    t.exports = function (t, e) {
      return new (r(t))(0 === e ? 0 : e);
    };
  },
  function (t, e, n) {
    var r = n(129),
      o = n(91),
      i = n(4),
      a = n(5)("species"),
      s = Array;
    t.exports = function (t) {
      var e;
      return (
        r(t) &&
          ((e = t.constructor),
          ((o(e) && (e === s || r(e.prototype))) ||
            (i(e) && null === (e = e[a]))) &&
            (e = void 0)),
        void 0 === e ? s : e
      );
    };
  },
  function (t, e, n) {
    var r = n(13);
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == r(t);
      };
  },
  function (t, e, n) {
    n(59), n(131);
    var r = n(22);
    t.exports = r.Array.from;
  },
  function (t, e, n) {
    var r = n(21),
      o = n(132);
    r(
      {
        target: "Array",
        stat: !0,
        forced: !n(88)(function (t) {
          Array.from(t);
        }),
      },
      { from: o }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(29),
      o = n(11),
      i = n(18),
      a = n(133),
      s = n(85),
      u = n(91),
      c = n(19),
      f = n(83),
      l = n(86),
      h = n(54),
      p = Array;
    t.exports = function (t) {
      var e = i(t),
        n = u(this),
        d = arguments.length,
        v = d > 1 ? arguments[1] : void 0,
        m = void 0 !== v;
      m && (v = r(v, d > 2 ? arguments[2] : void 0));
      var g,
        y,
        b,
        w,
        x,
        E,
        O = h(e),
        P = 0;
      if (!O || (this === p && s(O)))
        for (g = c(e), y = n ? new this(g) : p(g); g > P; P++)
          (E = m ? v(e[P], P) : e[P]), f(y, P, E);
      else
        for (
          x = (w = l(e, O)).next, y = n ? new this() : [];
          !(b = o(x, w)).done;
          P++
        )
          (E = m ? a(w, v, [b.value, P], !0) : b.value), f(y, P, E);
      return (y.length = P), y;
    };
  },
  function (t, e, n) {
    var r = n(10),
      o = n(87);
    t.exports = function (t, e, n, i) {
      try {
        return i ? e(r(n)[0], n[1]) : e(n);
      } catch (e) {
        o(t, "throw", e);
      }
    };
  },
  function (t, e, n) {
    n(135);
    var r = n(22);
    t.exports = r.Object.assign;
  },
  function (t, e, n) {
    var r = n(21),
      o = n(136);
    r(
      { target: "Object", stat: !0, arity: 2, forced: Object.assign !== o },
      { assign: o }
    );
  },
  function (t, e, n) {
    "use strict";
    var r = n(7),
      o = n(2),
      i = n(11),
      a = n(3),
      s = n(70),
      u = n(78),
      c = n(75),
      f = n(18),
      l = n(33),
      h = Object.assign,
      p = Object.defineProperty,
      d = o([].concat);
    t.exports =
      !h ||
      a(function () {
        if (
          r &&
          1 !==
            h(
              { b: 1 },
              h(
                p({}, "a", {
                  enumerable: !0,
                  get: function () {
                    p(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          n = Symbol();
        return (
          (t[n] = 7),
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != h({}, t)[n] || "abcdefghijklmnopqrst" != s(h({}, e)).join("")
        );
      })
        ? function (t, e) {
            for (
              var n = f(t), o = arguments.length, a = 1, h = u.f, p = c.f;
              o > a;

            )
              for (
                var v,
                  m = l(arguments[a++]),
                  g = h ? d(s(m), h(m)) : s(m),
                  y = g.length,
                  b = 0;
                y > b;

              )
                (v = g[b++]), (r && !i(p, m, v)) || (n[v] = m[v]);
            return n;
          }
        : h;
  },
  function (t, e, n) {
    "use strict";
    n.r(e);
    var r = {};
    n.r(r),
      n.d(r, "keyboardHandler", function () {
        return B;
      }),
      n.d(r, "mouseHandler", function () {
        return H;
      }),
      n.d(r, "resizeHandler", function () {
        return W;
      }),
      n.d(r, "selectHandler", function () {
        return U;
      }),
      n.d(r, "touchHandler", function () {
        return X;
      }),
      n.d(r, "wheelHandler", function () {
        return Y;
      });
    var o = n(23),
      i = n.n(o),
      a = function (t, e) {
        return (a =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
    var s = function () {
      return (s =
        Object.assign ||
        function (t) {
          for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var o in (e = arguments[n]))
              Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
          return t;
        }).apply(this, arguments);
    };
    function u(t, e, n, r) {
      var o,
        i = arguments.length,
        a =
          i < 3
            ? e
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(e, n))
            : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        a = Reflect.decorate(t, e, n, r);
      else
        for (var s = t.length - 1; s >= 0; s--)
          (o = t[s]) &&
            (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
      return i > 3 && a && Object.defineProperty(e, n, a), a;
    }
    function c() {
      for (var t = 0, e = 0, n = arguments.length; e < n; e++)
        t += arguments[e].length;
      var r = Array(t),
        o = 0;
      for (e = 0; e < n; e++)
        for (var i = arguments[e], a = 0, s = i.length; a < s; a++, o++)
          r[o] = i[a];
      return r;
    }
    n(92), n(119), n(122), n(130), n(134);
    var f = n(0),
      l = n.n(f);
    function h(t, e) {
      return (
        void 0 === t && (t = -1 / 0),
        void 0 === e && (e = 1 / 0),
        function (n, r) {
          var o = "_" + r;
          Object.defineProperty(n, r, {
            get: function () {
              return this[o];
            },
            set: function (n) {
              Object.defineProperty(this, o, {
                value: l()(n, t, e),
                enumerable: !1,
                writable: !0,
                configurable: !0,
              });
            },
            enumerable: !0,
            configurable: !0,
          });
        }
      );
    }
    function p(t, e) {
      var n = "_" + e;
      Object.defineProperty(t, e, {
        get: function () {
          return this[n];
        },
        set: function (t) {
          Object.defineProperty(this, n, {
            value: !!t,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          });
        },
        enumerable: !0,
        configurable: !0,
      });
    }
    var d = n(31),
      v = n.n(d);
    function m() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return function (e, n, r) {
        var o = r.value;
        return {
          get: function () {
            return (
              this.hasOwnProperty(n) ||
                Object.defineProperty(this, n, {
                  value: v.a.apply(void 0, c([o], t)),
                }),
              this[n]
            );
          },
        };
      };
    }
    var g,
      y = (function () {
        function t(t) {
          var e = this;
          void 0 === t && (t = {}),
            (this.damping = 0.1),
            (this.thumbMinSize = 20),
            (this.renderByPixels = !0),
            (this.alwaysShowTracks = !1),
            (this.continuousScrolling = !0),
            (this.delegateTo = null),
            (this.plugins = {}),
            Object.keys(t).forEach(function (n) {
              e[n] = t[n];
            });
        }
        return (
          Object.defineProperty(t.prototype, "wheelEventTarget", {
            get: function () {
              return this.delegateTo;
            },
            set: function (t) {
              console.warn(
                "[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."
              ),
                (this.delegateTo = t);
            },
            enumerable: !0,
            configurable: !0,
          }),
          u([h(0, 1)], t.prototype, "damping", void 0),
          u([h(0, 1 / 0)], t.prototype, "thumbMinSize", void 0),
          u([p], t.prototype, "renderByPixels", void 0),
          u([p], t.prototype, "alwaysShowTracks", void 0),
          u([p], t.prototype, "continuousScrolling", void 0),
          t
        );
      })(),
      b = new WeakMap();
    function w() {
      if (void 0 !== g) return g;
      var t = !1;
      try {
        var e = function () {},
          n = Object.defineProperty({}, "passive", {
            get: function () {
              t = !0;
            },
          });
        window.addEventListener("testPassive", e, n),
          window.removeEventListener("testPassive", e, n);
      } catch (t) {}
      return (g = !!t && { passive: !1 });
    }
    function x(t) {
      var e = b.get(t) || [];
      return (
        b.set(t, e),
        function (t, n, r) {
          function o(t) {
            t.defaultPrevented || r(t);
          }
          n.split(/\s+/g).forEach(function (n) {
            e.push({ elem: t, eventName: n, handler: o }),
              t.addEventListener(n, o, w());
          });
        }
      );
    }
    function E(t) {
      var e = (function (t) {
        return t.touches ? t.touches[t.touches.length - 1] : t;
      })(t);
      return { x: e.clientX, y: e.clientY };
    }
    function O(t, e) {
      return (
        void 0 === e && (e = []),
        e.some(function (e) {
          return t === e;
        })
      );
    }
    var P = ["webkit", "moz", "ms", "o"],
      _ = new RegExp("^-(?!(?:" + P.join("|") + ")-)");
    function S(t, e) {
      (e = (function (t) {
        var e = {};
        return (
          Object.keys(t).forEach(function (n) {
            if (_.test(n)) {
              var r = t[n];
              (n = n.replace(/^-/, "")),
                (e[n] = r),
                P.forEach(function (t) {
                  e["-" + t + "-" + n] = r;
                });
            } else e[n] = t[n];
          }),
          e
        );
      })(e)),
        Object.keys(e).forEach(function (n) {
          var r = n.replace(/^-/, "").replace(/-([a-z])/g, function (t, e) {
            return e.toUpperCase();
          });
          t.style[r] = e[n];
        });
    }
    var A,
      T = (function () {
        function t(t) {
          (this.velocityMultiplier = window.devicePixelRatio),
            (this.updateTime = Date.now()),
            (this.delta = { x: 0, y: 0 }),
            (this.velocity = { x: 0, y: 0 }),
            (this.lastPosition = { x: 0, y: 0 }),
            (this.lastPosition = E(t));
        }
        return (
          (t.prototype.update = function (t) {
            var e = this.velocity,
              n = this.updateTime,
              r = this.lastPosition,
              o = Date.now(),
              i = E(t),
              a = { x: -(i.x - r.x), y: -(i.y - r.y) },
              s = o - n || 16.7,
              u = (a.x / s) * 16.7,
              c = (a.y / s) * 16.7;
            (e.x = u * this.velocityMultiplier),
              (e.y = c * this.velocityMultiplier),
              (this.delta = a),
              (this.updateTime = o),
              (this.lastPosition = i);
          }),
          t
        );
      })(),
      j = (function () {
        function t() {
          this._touchList = {};
        }
        return (
          Object.defineProperty(t.prototype, "_primitiveValue", {
            get: function () {
              return { x: 0, y: 0 };
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.isActive = function () {
            return void 0 !== this._activeTouchID;
          }),
          (t.prototype.getDelta = function () {
            var t = this._getActiveTracker();
            return t ? s({}, t.delta) : this._primitiveValue;
          }),
          (t.prototype.getVelocity = function () {
            var t = this._getActiveTracker();
            return t ? s({}, t.velocity) : this._primitiveValue;
          }),
          (t.prototype.getEasingDistance = function (t) {
            var e = 1 - t,
              n = { x: 0, y: 0 },
              r = this.getVelocity();
            return (
              Object.keys(r).forEach(function (t) {
                for (var o = Math.abs(r[t]) <= 10 ? 0 : r[t]; 0 !== o; )
                  (n[t] += o), (o = (o * e) | 0);
              }),
              n
            );
          }),
          (t.prototype.track = function (t) {
            var e = this,
              n = t.targetTouches;
            return (
              Array.from(n).forEach(function (t) {
                e._add(t);
              }),
              this._touchList
            );
          }),
          (t.prototype.update = function (t) {
            var e = this,
              n = t.touches,
              r = t.changedTouches;
            return (
              Array.from(n).forEach(function (t) {
                e._renew(t);
              }),
              this._setActiveID(r),
              this._touchList
            );
          }),
          (t.prototype.release = function (t) {
            var e = this;
            delete this._activeTouchID,
              Array.from(t.changedTouches).forEach(function (t) {
                e._delete(t);
              });
          }),
          (t.prototype._add = function (t) {
            this._has(t) && this._delete(t);
            var e = new T(t);
            this._touchList[t.identifier] = e;
          }),
          (t.prototype._renew = function (t) {
            this._has(t) && this._touchList[t.identifier].update(t);
          }),
          (t.prototype._delete = function (t) {
            delete this._touchList[t.identifier];
          }),
          (t.prototype._has = function (t) {
            return this._touchList.hasOwnProperty(t.identifier);
          }),
          (t.prototype._setActiveID = function (t) {
            this._activeTouchID = t[t.length - 1].identifier;
          }),
          (t.prototype._getActiveTracker = function () {
            return this._touchList[this._activeTouchID];
          }),
          t
        );
      })();
    !(function (t) {
      (t.X = "x"), (t.Y = "y");
    })(A || (A = {}));
    var k = (function () {
        function t(t, e) {
          void 0 === e && (e = 0),
            (this._direction = t),
            (this._minSize = e),
            (this.element = document.createElement("div")),
            (this.displaySize = 0),
            (this.realSize = 0),
            (this.offset = 0),
            (this.element.className = "scrollbar-thumb scrollbar-thumb-" + t);
        }
        return (
          (t.prototype.attachTo = function (t) {
            t.appendChild(this.element);
          }),
          (t.prototype.update = function (t, e, n) {
            (this.realSize = Math.min(e / n, 1) * e),
              (this.displaySize = Math.max(this.realSize, this._minSize)),
              (this.offset =
                (t / n) * (e + (this.realSize - this.displaySize))),
              S(this.element, this._getStyle());
          }),
          (t.prototype._getStyle = function () {
            switch (this._direction) {
              case A.X:
                return {
                  width: this.displaySize + "px",
                  "-transform": "translate3d(" + this.offset + "px, 0, 0)",
                };
              case A.Y:
                return {
                  height: this.displaySize + "px",
                  "-transform": "translate3d(0, " + this.offset + "px, 0)",
                };
              default:
                return null;
            }
          }),
          t
        );
      })(),
      M = (function () {
        function t(t, e) {
          void 0 === e && (e = 0),
            (this.element = document.createElement("div")),
            (this._isShown = !1),
            (this.element.className = "scrollbar-track scrollbar-track-" + t),
            (this.thumb = new k(t, e)),
            this.thumb.attachTo(this.element);
        }
        return (
          (t.prototype.attachTo = function (t) {
            t.appendChild(this.element);
          }),
          (t.prototype.show = function () {
            this._isShown ||
              ((this._isShown = !0), this.element.classList.add("show"));
          }),
          (t.prototype.hide = function () {
            this._isShown &&
              ((this._isShown = !1), this.element.classList.remove("show"));
          }),
          (t.prototype.update = function (t, e, n) {
            S(this.element, { display: n <= e ? "none" : "block" }),
              this.thumb.update(t, e, n);
          }),
          t
        );
      })(),
      I = (function () {
        function t(t) {
          this._scrollbar = t;
          var e = t.options.thumbMinSize;
          (this.xAxis = new M(A.X, e)),
            (this.yAxis = new M(A.Y, e)),
            this.xAxis.attachTo(t.containerEl),
            this.yAxis.attachTo(t.containerEl),
            t.options.alwaysShowTracks &&
              (this.xAxis.show(), this.yAxis.show());
        }
        return (
          (t.prototype.update = function () {
            var t = this._scrollbar,
              e = t.size,
              n = t.offset;
            this.xAxis.update(n.x, e.container.width, e.content.width),
              this.yAxis.update(n.y, e.container.height, e.content.height);
          }),
          (t.prototype.autoHideOnIdle = function () {
            this._scrollbar.options.alwaysShowTracks ||
              (this.xAxis.hide(), this.yAxis.hide());
          }),
          u([m(300)], t.prototype, "autoHideOnIdle", null),
          t
        );
      })();
    var D = new WeakMap();
    function R(t) {
      return Math.pow(t - 1, 3) + 1;
    }
    var L,
      C,
      N,
      z = (function () {
        function t(t, e) {
          var n = this.constructor;
          (this.scrollbar = t),
            (this.name = n.pluginName),
            (this.options = s(s({}, n.defaultOptions), e));
        }
        return (
          (t.prototype.onInit = function () {}),
          (t.prototype.onDestroy = function () {}),
          (t.prototype.onUpdate = function () {}),
          (t.prototype.onRender = function (t) {}),
          (t.prototype.transformDelta = function (t, e) {
            return s({}, t);
          }),
          (t.pluginName = ""),
          (t.defaultOptions = {}),
          t
        );
      })(),
      F = { order: new Set(), constructors: {} };
    function q() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      t.forEach(function (t) {
        var e = t.pluginName;
        if (!e) throw new TypeError("plugin name is required");
        F.order.add(e), (F.constructors[e] = t);
      });
    }
    function B(t) {
      var e = x(t),
        n = t.containerEl;
      e(n, "keydown", function (e) {
        var r = document.activeElement;
        if (
          (r === n || n.contains(r)) &&
          !(function (t) {
            if (
              "INPUT" === t.tagName ||
              "SELECT" === t.tagName ||
              "TEXTAREA" === t.tagName ||
              t.isContentEditable
            )
              return !t.disabled;
            return !1;
          })(r)
        ) {
          var o = (function (t, e) {
            var n = t.size,
              r = t.limit,
              o = t.offset;
            switch (e) {
              case L.TAB:
                return (function (t) {
                  requestAnimationFrame(function () {
                    t.scrollIntoView(document.activeElement, {
                      offsetTop: t.size.container.height / 2,
                      offsetLeft: t.size.container.width / 2,
                      onlyScrollIfNeeded: !0,
                    });
                  });
                })(t);
              case L.SPACE:
                return [0, 200];
              case L.PAGE_UP:
                return [0, 40 - n.container.height];
              case L.PAGE_DOWN:
                return [0, n.container.height - 40];
              case L.END:
                return [0, r.y - o.y];
              case L.HOME:
                return [0, -o.y];
              case L.LEFT:
                return [-40, 0];
              case L.UP:
                return [0, -40];
              case L.RIGHT:
                return [40, 0];
              case L.DOWN:
                return [0, 40];
              default:
                return null;
            }
          })(t, e.keyCode || e.which);
          if (o) {
            var i = o[0],
              a = o[1];
            t.addTransformableMomentum(i, a, e, function (n) {
              n
                ? e.preventDefault()
                : (t.containerEl.blur(),
                  t.parent && t.parent.containerEl.focus());
            });
          }
        }
      });
    }
    function H(t) {
      var e,
        n,
        r,
        o,
        i,
        a = x(t),
        s = t.containerEl,
        u = t.track,
        c = u.xAxis,
        f = u.yAxis;
      function h(e, n) {
        var r = t.size,
          o = t.limit,
          i = t.offset;
        if (e === C.X) {
          var a = r.container.width + (c.thumb.realSize - c.thumb.displaySize);
          return l()((n / a) * r.content.width, 0, o.x) - i.x;
        }
        if (e === C.Y) {
          var s = r.container.height + (f.thumb.realSize - f.thumb.displaySize);
          return l()((n / s) * r.content.height, 0, o.y) - i.y;
        }
        return 0;
      }
      function p(t) {
        return O(t, [c.element, c.thumb.element])
          ? C.X
          : O(t, [f.element, f.thumb.element])
          ? C.Y
          : void 0;
      }
      a(s, "click", function (e) {
        if (!n && O(e.target, [c.element, f.element])) {
          var r = e.target,
            o = p(r),
            i = r.getBoundingClientRect(),
            a = E(e);
          if (o === C.X) {
            var s = a.x - i.left - c.thumb.displaySize / 2;
            t.setMomentum(h(o, s), 0);
          }
          if (o === C.Y) {
            s = a.y - i.top - f.thumb.displaySize / 2;
            t.setMomentum(0, h(o, s));
          }
        }
      }),
        a(s, "mousedown", function (n) {
          if (O(n.target, [c.thumb.element, f.thumb.element])) {
            e = !0;
            var a = n.target,
              u = E(n),
              l = a.getBoundingClientRect();
            (o = p(a)),
              (r = { x: u.x - l.left, y: u.y - l.top }),
              (i = s.getBoundingClientRect()),
              S(t.containerEl, { "-user-select": "none" });
          }
        }),
        a(window, "mousemove", function (a) {
          if (e) {
            n = !0;
            var s = E(a);
            if (o === C.X) {
              var u = s.x - r.x - i.left;
              t.setMomentum(h(o, u), 0);
            }
            if (o === C.Y) {
              u = s.y - r.y - i.top;
              t.setMomentum(0, h(o, u));
            }
          }
        }),
        a(window, "mouseup blur", function () {
          (e = n = !1), S(t.containerEl, { "-user-select": "" });
        });
    }
    function W(t) {
      x(t)(window, "resize", v()(t.update.bind(t), 300));
    }
    function U(t) {
      var e,
        n = x(t),
        r = t.containerEl,
        o = t.contentEl,
        i = !1,
        a = !1;
      n(window, "mousemove", function (n) {
        i &&
          (cancelAnimationFrame(e),
          (function n(r) {
            var o = r.x,
              i = r.y;
            if (o || i) {
              var a = t.offset,
                s = t.limit;
              t.setMomentum(
                l()(a.x + o, 0, s.x) - a.x,
                l()(a.y + i, 0, s.y) - a.y
              ),
                (e = requestAnimationFrame(function () {
                  n({ x: o, y: i });
                }));
            }
          })(
            (function (t, e) {
              var n = t.bounding,
                r = n.top,
                o = n.right,
                i = n.bottom,
                a = n.left,
                s = E(e),
                u = s.x,
                c = s.y,
                f = { x: 0, y: 0 };
              if (0 === u && 0 === c) return f;
              u > o - 20
                ? (f.x = u - o + 20)
                : u < a + 20 && (f.x = u - a - 20);
              c > i - 20
                ? (f.y = c - i + 20)
                : c < r + 20 && (f.y = c - r - 20);
              return (f.x *= 2), (f.y *= 2), f;
            })(t, n)
          ));
      }),
        n(o, "contextmenu", function () {
          (a = !0), cancelAnimationFrame(e), (i = !1);
        }),
        n(o, "mousedown", function () {
          a = !1;
        }),
        n(o, "selectstart", function () {
          a || (cancelAnimationFrame(e), (i = !0));
        }),
        n(window, "mouseup blur", function () {
          cancelAnimationFrame(e), (i = !1), (a = !1);
        }),
        n(r, "scroll", function (t) {
          t.preventDefault(), (r.scrollTop = r.scrollLeft = 0);
        });
    }
    function X(t) {
      var e,
        n = t.options.delegateTo || t.containerEl,
        r = new j(),
        o = x(t),
        i = 0;
      o(n, "touchstart", function (n) {
        r.track(n),
          t.setMomentum(0, 0),
          0 === i &&
            ((e = t.options.damping), (t.options.damping = Math.max(e, 0.5))),
          i++;
      }),
        o(n, "touchmove", function (e) {
          if (!N || N === t) {
            r.update(e);
            var n = r.getDelta(),
              o = n.x,
              i = n.y;
            t.addTransformableMomentum(o, i, e, function (n) {
              n && e.cancelable && (e.preventDefault(), (N = t));
            });
          }
        }),
        o(n, "touchcancel touchend", function (n) {
          var o = r.getEasingDistance(e);
          t.addTransformableMomentum(o.x, o.y, n),
            0 === --i && (t.options.damping = e),
            r.release(n),
            (N = null);
        });
    }
    function Y(t) {
      x(t)(
        t.options.delegateTo || t.containerEl,
        "onwheel" in window ||
          document.implementation.hasFeature("Events.wheel", "3.0")
          ? "wheel"
          : "mousewheel",
        function (e) {
          var n = (function (t) {
              if ("deltaX" in t) {
                var e = (function (t) {
                  return K[t] || K[0];
                })(t.deltaMode);
                return { x: (t.deltaX / G) * e, y: (t.deltaY / G) * e };
              }
              if ("wheelDeltaX" in t)
                return { x: t.wheelDeltaX / V, y: t.wheelDeltaY / V };
              return { x: 0, y: t.wheelDelta / V };
            })(e),
            r = n.x,
            o = n.y;
          t.addTransformableMomentum(r, o, e, function (t) {
            t && e.preventDefault();
          });
        }
      );
    }
    !(function (t) {
      (t[(t.TAB = 9)] = "TAB"),
        (t[(t.SPACE = 32)] = "SPACE"),
        (t[(t.PAGE_UP = 33)] = "PAGE_UP"),
        (t[(t.PAGE_DOWN = 34)] = "PAGE_DOWN"),
        (t[(t.END = 35)] = "END"),
        (t[(t.HOME = 36)] = "HOME"),
        (t[(t.LEFT = 37)] = "LEFT"),
        (t[(t.UP = 38)] = "UP"),
        (t[(t.RIGHT = 39)] = "RIGHT"),
        (t[(t.DOWN = 40)] = "DOWN");
    })(L || (L = {})),
      (function (t) {
        (t[(t.X = 0)] = "X"), (t[(t.Y = 1)] = "Y");
      })(C || (C = {}));
    var G = 1,
      V = -3,
      K = [1, 28, 500];
    var Q = new Map(),
      J = (function () {
        function t(t, e) {
          var n = this;
          (this.offset = { x: 0, y: 0 }),
            (this.limit = { x: 1 / 0, y: 1 / 0 }),
            (this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }),
            (this._plugins = []),
            (this._momentum = { x: 0, y: 0 }),
            (this._listeners = new Set()),
            (this.containerEl = t);
          var r = (this.contentEl = document.createElement("div"));
          (this.options = new y(e)),
            t.setAttribute("data-scrollbar", "true"),
            t.setAttribute("tabindex", "-1"),
            S(t, { overflow: "hidden", outline: "none" }),
            window.navigator.msPointerEnabled &&
              (t.style.msTouchAction = "none"),
            (r.className = "scroll-content"),
            Array.from(t.childNodes).forEach(function (t) {
              r.appendChild(t);
            }),
            t.appendChild(r),
            (this.track = new I(this)),
            (this.size = this.getSize()),
            (this._plugins = (function (t, e) {
              return Array.from(F.order)
                .filter(function (t) {
                  return !1 !== e[t];
                })
                .map(function (n) {
                  var r = new (0, F.constructors[n])(t, e[n]);
                  return (e[n] = r.options), r;
                });
            })(this, this.options.plugins));
          var o = t.scrollLeft,
            i = t.scrollTop;
          (t.scrollLeft = t.scrollTop = 0),
            this.setPosition(o, i, { withoutCallbacks: !0 });
          var a = window.ResizeObserver;
          "function" == typeof a &&
            ((this._observer = new a(function () {
              n.update();
            })),
            this._observer.observe(r)),
            Q.set(t, this),
            requestAnimationFrame(function () {
              n._init();
            });
        }
        return (
          Object.defineProperty(t.prototype, "parent", {
            get: function () {
              for (var t = this.containerEl.parentElement; t; ) {
                var e = Q.get(t);
                if (e) return e;
                t = t.parentElement;
              }
              return null;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "scrollTop", {
            get: function () {
              return this.offset.y;
            },
            set: function (t) {
              this.setPosition(this.scrollLeft, t);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, "scrollLeft", {
            get: function () {
              return this.offset.x;
            },
            set: function (t) {
              this.setPosition(t, this.scrollTop);
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.getSize = function () {
            return (
              (e = (t = this).containerEl),
              (n = t.contentEl),
              (r = getComputedStyle(e)),
              (o = [
                "paddingTop",
                "paddingBottom",
                "paddingLeft",
                "paddingRight",
              ].map(function (t) {
                return r[t] ? parseFloat(r[t]) : 0;
              })),
              (i = o[0] + o[1]),
              (a = o[2] + o[3]),
              {
                container: { width: e.clientWidth, height: e.clientHeight },
                content: {
                  width: n.offsetWidth - n.clientWidth + n.scrollWidth + a,
                  height: n.offsetHeight - n.clientHeight + n.scrollHeight + i,
                },
              }
            );
            var t, e, n, r, o, i, a;
          }),
          (t.prototype.update = function () {
            var t, e, n, r, o;
            (e = (t = this).getSize()),
              (n = {
                x: Math.max(e.content.width - e.container.width, 0),
                y: Math.max(e.content.height - e.container.height, 0),
              }),
              (r = t.containerEl.getBoundingClientRect()),
              (o = {
                top: Math.max(r.top, 0),
                right: Math.min(r.right, window.innerWidth),
                bottom: Math.min(r.bottom, window.innerHeight),
                left: Math.max(r.left, 0),
              }),
              (t.size = e),
              (t.limit = n),
              (t.bounding = o),
              t.track.update(),
              t.setPosition(),
              this._plugins.forEach(function (t) {
                t.onUpdate();
              });
          }),
          (t.prototype.isVisible = function (t) {
            return (function (t, e) {
              var n = t.bounding,
                r = e.getBoundingClientRect(),
                o = Math.max(n.top, r.top),
                i = Math.max(n.left, r.left),
                a = Math.min(n.right, r.right);
              return o < Math.min(n.bottom, r.bottom) && i < a;
            })(this, t);
          }),
          (t.prototype.setPosition = function (t, e, n) {
            var r = this;
            void 0 === t && (t = this.offset.x),
              void 0 === e && (e = this.offset.y),
              void 0 === n && (n = {});
            var o = (function (t, e, n) {
              var r = t.options,
                o = t.offset,
                i = t.limit,
                a = t.track,
                u = t.contentEl;
              return (
                r.renderByPixels && ((e = Math.round(e)), (n = Math.round(n))),
                (e = l()(e, 0, i.x)),
                (n = l()(n, 0, i.y)),
                e !== o.x && a.xAxis.show(),
                n !== o.y && a.yAxis.show(),
                r.alwaysShowTracks || a.autoHideOnIdle(),
                e === o.x && n === o.y
                  ? null
                  : ((o.x = e),
                    (o.y = n),
                    S(u, {
                      "-transform":
                        "translate3d(" + -e + "px, " + -n + "px, 0)",
                    }),
                    a.update(),
                    { offset: s({}, o), limit: s({}, i) })
              );
            })(this, t, e);
            o &&
              !n.withoutCallbacks &&
              this._listeners.forEach(function (t) {
                t.call(r, o);
              });
          }),
          (t.prototype.scrollTo = function (t, e, n, r) {
            void 0 === t && (t = this.offset.x),
              void 0 === e && (e = this.offset.y),
              void 0 === n && (n = 0),
              void 0 === r && (r = {}),
              (function (t, e, n, r, o) {
                void 0 === r && (r = 0);
                var i = void 0 === o ? {} : o,
                  a = i.easing,
                  s = void 0 === a ? R : a,
                  u = i.callback,
                  c = t.options,
                  f = t.offset,
                  h = t.limit;
                c.renderByPixels && ((e = Math.round(e)), (n = Math.round(n)));
                var p = f.x,
                  d = f.y,
                  v = l()(e, 0, h.x) - p,
                  m = l()(n, 0, h.y) - d,
                  g = Date.now();
                cancelAnimationFrame(D.get(t)),
                  (function e() {
                    var n = Date.now() - g,
                      o = r ? s(Math.min(n / r, 1)) : 1;
                    if ((t.setPosition(p + v * o, d + m * o), n >= r))
                      "function" == typeof u && u.call(t);
                    else {
                      var i = requestAnimationFrame(e);
                      D.set(t, i);
                    }
                  })();
              })(this, t, e, n, r);
          }),
          (t.prototype.scrollIntoView = function (t, e) {
            void 0 === e && (e = {}),
              (function (t, e, n) {
                var r = void 0 === n ? {} : n,
                  o = r.alignToTop,
                  i = void 0 === o || o,
                  a = r.onlyScrollIfNeeded,
                  s = void 0 !== a && a,
                  u = r.offsetTop,
                  c = void 0 === u ? 0 : u,
                  f = r.offsetLeft,
                  h = void 0 === f ? 0 : f,
                  p = r.offsetBottom,
                  d = void 0 === p ? 0 : p,
                  v = t.containerEl,
                  m = t.bounding,
                  g = t.offset,
                  y = t.limit;
                if (e && v.contains(e)) {
                  var b = e.getBoundingClientRect();
                  if (!s || !t.isVisible(e)) {
                    var w = i ? b.top - m.top - c : b.bottom - m.bottom + d;
                    t.setMomentum(b.left - m.left - h, l()(w, -g.y, y.y - g.y));
                  }
                }
              })(this, t, e);
          }),
          (t.prototype.addListener = function (t) {
            if ("function" != typeof t)
              throw new TypeError(
                "[smooth-scrollbar] scrolling listener should be a function"
              );
            this._listeners.add(t);
          }),
          (t.prototype.removeListener = function (t) {
            this._listeners.delete(t);
          }),
          (t.prototype.addTransformableMomentum = function (t, e, n, r) {
            this._updateDebounced();
            var o = this._plugins.reduce(
                function (t, e) {
                  return e.transformDelta(t, n) || t;
                },
                { x: t, y: e }
              ),
              i = !this._shouldPropagateMomentum(o.x, o.y);
            i && this.addMomentum(o.x, o.y), r && r.call(this, i);
          }),
          (t.prototype.addMomentum = function (t, e) {
            this.setMomentum(this._momentum.x + t, this._momentum.y + e);
          }),
          (t.prototype.setMomentum = function (t, e) {
            0 === this.limit.x && (t = 0),
              0 === this.limit.y && (e = 0),
              this.options.renderByPixels &&
                ((t = Math.round(t)), (e = Math.round(e))),
              (this._momentum.x = t),
              (this._momentum.y = e);
          }),
          (t.prototype.updatePluginOptions = function (t, e) {
            this._plugins.forEach(function (n) {
              n.name === t && Object.assign(n.options, e);
            });
          }),
          (t.prototype.destroy = function () {
            var t,
              e,
              n = this.containerEl,
              r = this.contentEl;
            (t = this),
              (e = b.get(t)) &&
                (e.forEach(function (t) {
                  var e = t.elem,
                    n = t.eventName,
                    r = t.handler;
                  e.removeEventListener(n, r, w());
                }),
                b.delete(t)),
              this._listeners.clear(),
              this.setMomentum(0, 0),
              cancelAnimationFrame(this._renderID),
              this._observer && this._observer.disconnect(),
              Q.delete(this.containerEl);
            for (var o = Array.from(r.childNodes); n.firstChild; )
              n.removeChild(n.firstChild);
            o.forEach(function (t) {
              n.appendChild(t);
            }),
              S(n, { overflow: "" }),
              (n.scrollTop = this.scrollTop),
              (n.scrollLeft = this.scrollLeft),
              this._plugins.forEach(function (t) {
                t.onDestroy();
              }),
              (this._plugins.length = 0);
          }),
          (t.prototype._init = function () {
            var t = this;
            this.update(),
              Object.keys(r).forEach(function (e) {
                r[e](t);
              }),
              this._plugins.forEach(function (t) {
                t.onInit();
              }),
              this._render();
          }),
          (t.prototype._updateDebounced = function () {
            this.update();
          }),
          (t.prototype._shouldPropagateMomentum = function (t, e) {
            void 0 === t && (t = 0), void 0 === e && (e = 0);
            var n = this.options,
              r = this.offset,
              o = this.limit;
            if (!n.continuousScrolling) return !1;
            0 === o.x && 0 === o.y && this._updateDebounced();
            var i = l()(t + r.x, 0, o.x),
              a = l()(e + r.y, 0, o.y),
              s = !0;
            return (s =
              (s = (s = s && i === r.x) && a === r.y) &&
              (r.x === o.x || 0 === r.x || r.y === o.y || 0 === r.y));
          }),
          (t.prototype._render = function () {
            var t = this._momentum;
            if (t.x || t.y) {
              var e = this._nextTick("x"),
                n = this._nextTick("y");
              (t.x = e.momentum),
                (t.y = n.momentum),
                this.setPosition(e.position, n.position);
            }
            var r = s({}, this._momentum);
            this._plugins.forEach(function (t) {
              t.onRender(r);
            }),
              (this._renderID = requestAnimationFrame(this._render.bind(this)));
          }),
          (t.prototype._nextTick = function (t) {
            var e = this.options,
              n = this.offset,
              r = this._momentum,
              o = n[t],
              i = r[t];
            if (Math.abs(i) <= 0.1) return { momentum: 0, position: o + i };
            var a = i * (1 - e.damping);
            return (
              e.renderByPixels && (a |= 0), { momentum: a, position: o + i - a }
            );
          }),
          u([m(100, { leading: !0 })], t.prototype, "_updateDebounced", null),
          t
        );
      })(),
      Z = !1;
    function tt() {
      if (!Z && "undefined" != typeof window) {
        var t = document.createElement("style");
        (t.id = "smooth-scrollbar-style"),
          (t.textContent =
            "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n"),
          document.head && document.head.appendChild(t),
          (Z = !0);
      }
    }
    var et = (function (t) {
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      return (
        (function (t, e) {
          function n() {
            this.constructor = t;
          }
          a(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n()));
        })(e, t),
        (e.init = function (t, e) {
          if (!t || 1 !== t.nodeType)
            throw new TypeError(
              "expect element to be DOM Element, but got " + t
            );
          return tt(), Q.has(t) ? Q.get(t) : new J(t, e);
        }),
        (e.initAll = function (t) {
          return Array.from(
            document.querySelectorAll("[data-scrollbar]"),
            function (n) {
              return e.init(n, t);
            }
          );
        }),
        (e.has = function (t) {
          return Q.has(t);
        }),
        (e.get = function (t) {
          return Q.get(t);
        }),
        (e.getAll = function () {
          return Array.from(Q.values());
        }),
        (e.destroy = function (t) {
          var e = Q.get(t);
          e && e.destroy();
        }),
        (e.destroyAll = function () {
          Q.forEach(function (t) {
            t.destroy();
          });
        }),
        (e.use = function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return q.apply(void 0, t);
        }),
        (e.attachStyle = function () {
          return tt();
        }),
        (e.detachStyle = function () {
          return (function () {
            if (Z && "undefined" != typeof window) {
              var t = document.getElementById("smooth-scrollbar-style");
              t && t.parentNode && (t.parentNode.removeChild(t), (Z = !1));
            }
          })();
        }),
        (e.version = "8.8.1"),
        (e.ScrollbarPlugin = z),
        e
      );
    })(J);
    let nt;
    gsap.registerPlugin(ScrollTrigger);
    const rt = document.body,
      ot = (t) => document.querySelector(t);
    gsap.utils.toArray(".projects__list .project");
    let it = { x: 0, y: 0 },
      at = it,
      st = { x: at.x - it.x, y: at.y - it.y };
    function ut() {
      gsap.config({
        autoSleep: 60,
        force3D: !1,
        nullTargetWarn: !1,
        trialWarn: !1,
        units: { left: "%", top: "%", rotation: "rad" },
      });
    }
    class ct {
      constructor() {
        var t;
        ((t = ".project__item"),
        new Promise((e) => {
          const n = document.createElement("div");
          (n.style.visibility = "hidden"),
            document.body.appendChild(n),
            [...document.querySelectorAll(t)].forEach((t) => {
              const e = document.createElement("img");
              (e.style.width = 0),
                (e.src = t.dataset.img),
                (e.className = "preload"),
                n.appendChild(e);
            }),
            imagesLoaded(document.querySelectorAll(".preload"), () => {
              gsap.to(".loading__wrapper", {
                duration: 0.8,
                opacity: 0,
                pointerEvents: "none",
                onComplete: () => {
                  n.parentNode.removeChild(n),
                    document.body.classList.remove("loading"),
                    e();
                },
              });
            });
        })).then(() => {
          const t = document.querySelector(".projects");
          new ft(t),
            window.addEventListener("mousemove", (t) => {
              it = (function (t) {
                let e = 0,
                  n = 0;
                return (
                  t || (t = window.event),
                  t.pageX || t.pageY
                    ? ((e = t.pageX), (n = t.pageY))
                    : (t.clientX || t.clientY) &&
                      ((e =
                        t.clientX +
                        rt.scrollLeft +
                        document.documentElement.scrollLeft),
                      (n =
                        t.clientY +
                        rt.scrollTop +
                        document.documentElement.scrollTop)),
                  { x: e, y: n }
                );
              })(t);
            });
        });
      }
    }
    class ft {
      constructor(t) {
        (this.el = t),
          (this.menuItems = this.el.querySelectorAll(".project")),
          (this.animatableProperties = {
            tx: { previous: 0, current: 0, amt: 0.1 },
            ty: { previous: 0, current: 0, amt: 0.1 },
            rotation: { previous: 0, current: 0, amt: 0.08 },
            skewx: { previous: 0, current: 0, amt: 0.08 },
            brightness: { previous: 1, current: 1, amt: 0.08 },
            saturation: { previous: 0, current: 0, amt: 0.1 },
          }),
          (this.menuItemInstances = []),
          [...this.menuItems].forEach((t, e) =>
            this.menuItemInstances.push(new lt(t, e, this.animatableProperties))
          );
      }
      showMenuItems() {
        gsap.fromTo(
          this.menuItemInstances.map((t) => t.DOM.innerText),
          { rotation: (t) => (t % 2 == 0 ? 15 : -15) },
          {
            duration: 1.2,
            ease: "Expo.easeOut",
            transformOrigin: (t) =>
              t % 2 == 0 ? "left bottom" : "right bottom",
            y: 0,
            rotation: 0,
            delay: (t) => 0.15 + 0.06 * t,
          }
        );
      }
    }
    class lt {
      constructor(t, e, n) {
        (this.DOM = { el: t }),
          (this.DOM.innerText = this.DOM.el.querySelector(".project__title")),
          (this.menuItemIndex = e),
          (this.animatableProps = n),
          (this.imageURL = this.DOM.el.getAttribute("data-img")),
          this.layout(),
          this.initEvents();
      }
      layout() {
        (this.DOM.card = document.createElement("div")),
          (this.DOM.card.className = "project__card"),
          (this.DOM.cardInner = document.createElement("div")),
          (this.DOM.cardInner.className = "project__card__inner"),
          (this.DOM.cardImage = document.createElement("div")),
          (this.DOM.cardImage.className = "project__card__image"),
          (this.DOM.cardImage.style.backgroundImage = `url(${this.imageURL})`),
          this.DOM.cardInner.appendChild(this.DOM.cardImage),
          this.DOM.card.appendChild(this.DOM.cardInner),
          this.DOM.el.appendChild(this.DOM.card);
      }
      initEvents() {
        this.DOM.el.addEventListener("mouseenter", () => {
          this.showImage(), (this.firstRAFCycle = !0), this.renderLoop();
        }),
          this.DOM.el.addEventListener("mouseleave", () => {
            this.stopRender(), this.hideImage();
          });
      }
      calcBounds() {
        this.bounds = {
          el: this.DOM.el.getBoundingClientRect(),
          card: this.DOM.card.getBoundingClientRect(),
          cardImage: this.DOM.cardImage.getBoundingClientRect(),
        };
      }
      showImage() {
        gsap.killTweensOf(this.DOM.cardInner),
          gsap.killTweensOf(this.DOM.cardImage),
          gsap
            .timeline({
              onStart: () => {
                this.DOM.el.style.zIndex = this.DOM.el.children.length;
              },
            })
            .to(this.DOM.cardInner, {
              duration: 0.8,
              ease: "elastic.out(1, 0.75)",
              transformOrigin: "50% " + (st.y < 0 ? "-20%" : "120%"),
              startAt: { rotation: (st.x < 0 ? "+" : "-") + "25deg" },
              rotation: 0,
            })
            .to(
              this.DOM.cardImage,
              {
                duration: 0.2,
                ease: "Sine.easeOut",
                startAt: { opacity: 0, scale: 0.6 },
                opacity: 1,
                scale: 1,
              },
              0
            );
      }
      hideImage() {
        gsap.killTweensOf(this.DOM.cardInner),
          gsap.killTweensOf(this.DOM.cardImage),
          gsap
            .timeline({
              onStart: () => {
                this.DOM.el.style.zIndex = 1;
              },
            })
            .to(this.DOM.cardInner, {
              duration: 0.8,
              ease: "elastic.out(1, 0.75)",
              transformOrigin: "50% " + (st.y < 0 ? "-20%" : "120%"),
              rotation: (st.x < 0 ? "+" : "-") + "25deg",
            })
            .to(
              this.DOM.cardImage,
              { duration: 0.2, ease: "Sine.easeOut", opacity: 0, scale: 0.6 },
              0
            );
      }
      renderLoop() {
        this.requestId ||
          (this.requestId = requestAnimationFrame(() => this.render()));
      }
      stopRender() {
        this.requestId &&
          (window.cancelAnimationFrame(this.requestId),
          (this.requestId = void 0));
      }
      render() {
        (this.requestId = void 0),
          this.firstRAFCycle && this.calcBounds(),
          this.updateAnimatableProps(),
          (st = { x: at.x - it.x, y: at.y - it.y }),
          (at = it),
          gsap.set(this.DOM.card, {
            x: this.animatableProps.tx.previous,
            y: this.animatableProps.ty.previous,
            rotation: this.animatableProps.rotation.previous,
            skewX: this.animatableProps.skewx.previous,
            filter: `brightness(${this.animatableProps.brightness.previous}) saturate(${this.animatableProps.saturation.previous})`,
          }),
          (this.firstRAFCycle = !1),
          this.renderLoop();
      }
      updateAnimatableProps() {
        const t =
          ((e = Math.abs(at.x - it.x)),
          (r = 100),
          e <= (n = 0) ? n : e >= r ? r : e);
        var e, n, r, o, i, a;
        (this.animatableProps.tx.current =
          Math.abs(it.x - this.bounds.el.left) - this.bounds.card.width / 2),
          (this.animatableProps.ty.current =
            Math.abs(it.y - this.bounds.el.top) - this.bounds.card.height / 2),
          (this.animatableProps.rotation.current = this.firstRAFCycle
            ? 0
            : ht(t, 0, 100, 0, st.x < 0 ? 30 : -30)),
          (this.animatableProps.skewx.current = this.firstRAFCycle
            ? 0
            : ht(t, 0, 100, 1, st.x < 0 ? -60 : 60)),
          (this.animatableProps.brightness.current = this.firstRAFCycle
            ? 1
            : ht(t, 0, 100, 1, 10)),
          (this.animatableProps.saturation.current = this.firstRAFCycle
            ? 1
            : ht(t, 0, 100, 1, 8));
        for (const t in this.animatableProps)
          this.animatableProps[t].previous = this.firstRAFCycle
            ? this.animatableProps[t].current
            : ((o = this.animatableProps[t].previous),
              (i = this.animatableProps[t].current),
              (1 - (a = this.animatableProps[t].amt)) * o + a * i);
      }
    }
    function ht(t, e, n, r, o) {
      return ((t - e) * (o - r)) / (n - e) + r;
    }
    function pt(t) {
      return gsap.to(t, { autoAlpha: 1 });
    }
    function dt(t) {
      return gsap.to(t, { autoAlpha: 0 });
    }
    function vt() {
      (nt = et.init(ot("#viewport"), { damping: 0.07 })),
        nt.track.xAxis.element.remove(),
        ScrollTrigger.scrollerProxy(document.body, {
          scrollTop(t) {
            return arguments.length && (nt.scrollTop = t), nt.scrollTop;
          },
        }),
        nt.addListener(ScrollTrigger.update);
    }
    function mt() {
      function t() {
        return null != document.cookie.match(/theme=dark/i);
      }
      function e() {
        const t = document.getElementsByTagName("body")[0],
          e =
            (t.className,
            "dark-mode" == t.className ? "light-mode" : "dark-mode");
        (t.className = e),
          (document.cookie = "theme=" + ("light-mode" == e ? "light" : "dark")),
          t.classList.contains("dark-mode")
            ? (document.getElementById("toggleThemeText").innerText = "Dark")
            : (document.getElementById("toggleThemeText").innerText = "Light");
      }
      !(function () {
        const e = document.getElementsByTagName("body")[0];
        (e.className = t() ? "dark-mode" : "light-mode"),
          e.classList.contains("dark-mode")
            ? (document.getElementById("toggleThemeText").innerText = "Dark")
            : (document.getElementById("toggleThemeText").innerText = "Light");
      })(),
        (document.getElementById("toggleTheme").checked = t()),
        (document.getElementById("toggleTheme").onchange = e);
      var n = new MutationObserver(function (t) {
          t.forEach(function (t) {
            "light-mode" === t.target.className &&
              (t.target.style.backgroundColor = null);
          });
        }),
        r = document.getElementsByTagName("body")[0];
      n.observe(r, { attributes: !0, attributeFilter: ["style"] });
    }
    function gt() {
      $(".dropdown-section").length &&
        $(".dropdown__header").click(function () {
          var t, e, n, r;
          (t = $(this).parent()),
            (e = t.find(".dropdown__body")),
            (n = t.find(".dropdown__body__content")),
            (r = 0 === e.height()),
            e.css("height", n.outerHeight() + "px"),
            setTimeout(function () {
              $(".dropdown__body").css("height", "0px"),
                $(".dropdown").removeClass("cc-open"),
                r &&
                  (e.css("height", n.outerHeight() + "px"),
                  t.addClass("cc-open"),
                  setTimeout(function () {
                    n.outerHeight() === e.outerHeight() &&
                      e.css("height", "auto");
                  }, 600));
            }, 10);
        });
    }
    function yt() {
      gsap.utils.toArray(".js--nav-link").forEach((t) => {
        const e = t.getAttribute("href");
        t.addEventListener("click", (t) => {
          t.preventDefault(),
            console.log(ot(e)),
            nt.scrollIntoView(ot(e), { damping: 0.07, offsetTop: 100 });
        });
      });
    }
    function bt() {
      document
        .querySelector(".footer__back")
        .addEventListener("click", function () {
          nt.scrollTo(0, 0);
        });
    }
    function wt() {
      const t = gsap.utils.toArray(".projects__list .project");
      function e(e) {
        if ("mouseenter" === e.type) {
          e.target.classList.add("cc-active");
          const n = t.filter((t) => t !== e.target);
          gsap
            .timeline({})
            .to(n, { autoAlpha: 0.2 }, 0)
            .to(e.target, { autoAlpha: 1 }, 0);
        } else if ("mouseleave" === e.type) {
          e.target.classList.remove("cc-active");
          gsap.timeline({}).to(t, { autoAlpha: 1 }, 0);
        }
      }
      t.forEach((t) => {
        t.addEventListener("mouseenter", e),
          t.addEventListener("mouseleave", e);
      });
    }
    function xt() {
      const t = ot(".p-hero-image .c-image-wrapper__cover"),
        e = ot(".p-hero-image img"),
        n = ot(".p-hero h1"),
        r = ot(".p-hero__year"),
        o = ((i = ".p-hero span"), document.querySelectorAll(i));
      var i;
      const a = gsap.timeline({
        defaults: { duration: 1, ease: "power1.out" },
      });
      return (
        a
          .fromTo(
            t,
            { scaleY: 1 },
            {
              scaleY: 0,
              rotation: 0,
              transformOrigin: "top center",
              ease: "Power4.easeOut",
              duration: 2,
            },
            0
          )
          .from(e, { scale: 1.08 }, 0)
          .to([n, r], { autoAlpha: 1, y: 0, stagger: 0.3, delay: 0.3 }, 0)
          .to(o, { autoAlpha: 1, delay: 0.8, stagger: 0.2 }, 0),
        a
      );
    }
    function Et() {
      ut(),
        vt(),
        mt(),
        xt(),
        gsap.utils.toArray(".with-parallax").forEach((t) => {
          const e = t.querySelector("img");
          gsap.to(e, {
            yPercent: 20,
            ease: "none",
            scrollTrigger: { trigger: t, start: "top bottom", scrub: !0 },
          });
        }),
        bt();
    }
    i.a.hooks.enter(() => {
      window.scrollTo(0, 0), nt.scrollTo(0, 0);
    }),
      i.a.hooks.after(() => {
        nt.update(), nt.scrollTo(0, 0);
      }),
      i.a.hooks.afterEnter(({ next: t }) => {
        window.scrollTo(0, 0);
        t.container.querySelectorAll("script").forEach((s) => {
          const n = document.createElement("script");
          (n.text = s.text),
            Array.from(s.attributes).forEach((a) => n.setAttribute(a.name, a.value)),
            s.parentNode.replaceChild(n, s);
        });
      }),
      i.a.init({
        debug: !0,
        transitions: [
          {
            name: "general-transition",
            once: ({ next: t }) => {
              ut(),
                vt(),
                mt(),
                yt(),
                gt(),
                wt(),
                bt(),
                new ct(),
                gsap.from(".header .header__item", {
                  autoAlpha: 0,
                  duration: 0.4,
                  ease: "power1.out",
                }),
                pt(t.container);
            },
            leave: ({ current: t }) => dt(t.container),
            enter: ({ next: t }) => {
              pt(t.container);
            },
          },
          {
            name: "project",
            to: { namespace: ["project"] },
            once: ({ next: t }) => {
              gsap.from(".header .header__item", {
                autoAlpha: 0,
                duration: 0.4,
                ease: "power1.out",
                onStart: () => Et(),
              }),
                pt(t.container);
            },
            leave: ({ current: t }) => dt(t.container),
            enter: ({ next: t }) => {
              gsap.from(".header .header__item", {
                autoAlpha: 0,
                duration: 0.4,
                ease: "power1.out",
                onStart: () => Et(),
              }),
                pt(t.container);
            },
          },
          {
            name: "from-project",
            from: { namespace: ["project"] },
            to: { namespace: ["home"] },
            leave: ({ current: t }) => dt(t.container),
            enter: ({ next: t }) => {
              gsap.from(".header .header__item", {
                autoAlpha: 0,
                duration: 0.4,
                ease: "power1.out",
                onStart: () => (
                  ut(), vt(), mt(), yt(), wt(), gt(), bt(), void new ct()
                ),
              }),
                pt(t.container);
            },
          },
        ],
      });
  },
]);
