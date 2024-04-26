(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const l of o.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var bd =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function us(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Su = { exports: {} },
  po = {},
  ku = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Yr = Symbol.for("react.element"),
  ef = Symbol.for("react.portal"),
  tf = Symbol.for("react.fragment"),
  nf = Symbol.for("react.strict_mode"),
  rf = Symbol.for("react.profiler"),
  of = Symbol.for("react.provider"),
  lf = Symbol.for("react.context"),
  sf = Symbol.for("react.forward_ref"),
  af = Symbol.for("react.suspense"),
  uf = Symbol.for("react.memo"),
  cf = Symbol.for("react.lazy"),
  la = Symbol.iterator;
function df(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (la && e[la]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Eu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Cu = Object.assign,
  Nu = {};
function Kn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nu),
    (this.updater = n || Eu);
}
Kn.prototype.isReactComponent = {};
Kn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Kn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Tu() {}
Tu.prototype = Kn.prototype;
function cs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Nu),
    (this.updater = n || Eu);
}
var ds = (cs.prototype = new Tu());
ds.constructor = cs;
Cu(ds, Kn.prototype);
ds.isPureReactComponent = !0;
var sa = Array.isArray,
  Pu = Object.prototype.hasOwnProperty,
  fs = { current: null },
  ju = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ou(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Pu.call(t, r) && !ju.hasOwnProperty(r) && (i[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) i.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r]);
  return {
    $$typeof: Yr,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: fs.current,
  };
}
function ff(e, t) {
  return {
    $$typeof: Yr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ps(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Yr;
}
function pf(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var aa = /\/+/g;
function Mo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? pf("" + e.key)
    : t.toString(36);
}
function gi(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (o) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Yr:
          case ef:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (i = i(l)),
      (e = r === "" ? "." + Mo(l, 0) : r),
      sa(i)
        ? ((n = ""),
          e != null && (n = e.replace(aa, "$&/") + "/"),
          gi(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (ps(i) &&
            (i = ff(
              i,
              n +
                (!i.key || (l && l.key === i.key)
                  ? ""
                  : ("" + i.key).replace(aa, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), sa(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s];
      var a = r + Mo(o, s);
      l += gi(o, t, n, a, i);
    }
  else if (((a = df(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Mo(o, s++)), (l += gi(o, t, n, a, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function ti(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    gi(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function hf(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ce = { current: null },
  wi = { transition: null },
  mf = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: wi,
    ReactCurrentOwner: fs,
  };
Z.Children = {
  map: ti,
  forEach: function (e, t, n) {
    ti(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ti(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ti(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ps(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Z.Component = Kn;
Z.Fragment = tf;
Z.Profiler = rf;
Z.PureComponent = cs;
Z.StrictMode = nf;
Z.Suspense = af;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = mf;
Z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Cu({}, e.props),
    i = e.key,
    o = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (l = fs.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t)
      Pu.call(t, a) &&
        !ju.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: Yr, type: e.type, key: i, ref: o, props: r, _owner: l };
};
Z.createContext = function (e) {
  return (
    (e = {
      $$typeof: lf,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: of, _context: e }),
    (e.Consumer = e)
  );
};
Z.createElement = Ou;
Z.createFactory = function (e) {
  var t = Ou.bind(null, e);
  return (t.type = e), t;
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (e) {
  return { $$typeof: sf, render: e };
};
Z.isValidElement = ps;
Z.lazy = function (e) {
  return { $$typeof: cf, _payload: { _status: -1, _result: e }, _init: hf };
};
Z.memo = function (e, t) {
  return { $$typeof: uf, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
  var t = wi.transition;
  wi.transition = {};
  try {
    e();
  } finally {
    wi.transition = t;
  }
};
Z.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Z.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
Z.useContext = function (e) {
  return Ce.current.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
Z.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
Z.useId = function () {
  return Ce.current.useId();
};
Z.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
Z.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
Z.useRef = function (e) {
  return Ce.current.useRef(e);
};
Z.useState = function (e) {
  return Ce.current.useState(e);
};
Z.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function () {
  return Ce.current.useTransition();
};
Z.version = "18.2.0";
ku.exports = Z;
var Q = ku.exports;
const pt = us(Q);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vf = Q,
  yf = Symbol.for("react.element"),
  gf = Symbol.for("react.fragment"),
  wf = Object.prototype.hasOwnProperty,
  _f = vf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  xf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Iu(e, t, n) {
  var r,
    i = {},
    o = null,
    l = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) wf.call(t, r) && !xf.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: yf,
    type: e,
    key: o,
    ref: l,
    props: i,
    _owner: _f.current,
  };
}
po.Fragment = gf;
po.jsx = Iu;
po.jsxs = Iu;
Su.exports = po;
var _ = Su.exports,
  al = {},
  Ru = { exports: {} },
  De = {},
  Mu = { exports: {} },
  zu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(j, D) {
    var $ = j.length;
    j.push(D);
    e: for (; 0 < $; ) {
      var b = ($ - 1) >>> 1,
        oe = j[b];
      if (0 < i(oe, D)) (j[b] = D), (j[$] = oe), ($ = b);
      else break e;
    }
  }
  function n(j) {
    return j.length === 0 ? null : j[0];
  }
  function r(j) {
    if (j.length === 0) return null;
    var D = j[0],
      $ = j.pop();
    if ($ !== D) {
      j[0] = $;
      e: for (var b = 0, oe = j.length, mn = oe >>> 1; b < mn; ) {
        var at = 2 * (b + 1) - 1,
          R = j[at],
          F = at + 1,
          Y = j[F];
        if (0 > i(R, $))
          F < oe && 0 > i(Y, R)
            ? ((j[b] = Y), (j[F] = $), (b = F))
            : ((j[b] = R), (j[at] = $), (b = at));
        else if (F < oe && 0 > i(Y, $)) (j[b] = Y), (j[F] = $), (b = F);
        else break e;
      }
    }
    return D;
  }
  function i(j, D) {
    var $ = j.sortIndex - D.sortIndex;
    return $ !== 0 ? $ : j.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    h = 1,
    v = null,
    p = 3,
    y = !1,
    m = !1,
    g = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(j) {
    for (var D = n(u); D !== null; ) {
      if (D.callback === null) r(u);
      else if (D.startTime <= j)
        r(u), (D.sortIndex = D.expirationTime), t(a, D);
      else break;
      D = n(u);
    }
  }
  function w(j) {
    if (((g = !1), f(j), !m))
      if (n(a) !== null) (m = !0), Jn(E);
      else {
        var D = n(u);
        D !== null && hn(w, D.startTime - j);
      }
  }
  function E(j, D) {
    (m = !1), g && ((g = !1), d(I), (I = -1)), (y = !0);
    var $ = p;
    try {
      for (
        f(D), v = n(a);
        v !== null && (!(v.expirationTime > D) || (j && !ve()));

      ) {
        var b = v.callback;
        if (typeof b == "function") {
          (v.callback = null), (p = v.priorityLevel);
          var oe = b(v.expirationTime <= D);
          (D = e.unstable_now()),
            typeof oe == "function" ? (v.callback = oe) : v === n(a) && r(a),
            f(D);
        } else r(a);
        v = n(a);
      }
      if (v !== null) var mn = !0;
      else {
        var at = n(u);
        at !== null && hn(w, at.startTime - D), (mn = !1);
      }
      return mn;
    } finally {
      (v = null), (p = $), (y = !1);
    }
  }
  var C = !1,
    x = null,
    I = -1,
    B = 5,
    U = -1;
  function ve() {
    return !(e.unstable_now() - U < B);
  }
  function St() {
    if (x !== null) {
      var j = e.unstable_now();
      U = j;
      var D = !0;
      try {
        D = x(!0, j);
      } finally {
        D ? Kt() : ((C = !1), (x = null));
      }
    } else C = !1;
  }
  var Kt;
  if (typeof c == "function")
    Kt = function () {
      c(St);
    };
  else if (typeof MessageChannel < "u") {
    var ei = new MessageChannel(),
      Io = ei.port2;
    (ei.port1.onmessage = St),
      (Kt = function () {
        Io.postMessage(null);
      });
  } else
    Kt = function () {
      P(St, 0);
    };
  function Jn(j) {
    (x = j), C || ((C = !0), Kt());
  }
  function hn(j, D) {
    I = P(function () {
      j(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (j) {
      j.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || y || ((m = !0), Jn(E));
    }),
    (e.unstable_forceFrameRate = function (j) {
      0 > j || 125 < j
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < j ? Math.floor(1e3 / j) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (j) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = p;
      }
      var $ = p;
      p = D;
      try {
        return j();
      } finally {
        p = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (j, D) {
      switch (j) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          j = 3;
      }
      var $ = p;
      p = j;
      try {
        return D();
      } finally {
        p = $;
      }
    }),
    (e.unstable_scheduleCallback = function (j, D, $) {
      var b = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? b + $ : b))
          : ($ = b),
        j)
      ) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return (
        (oe = $ + oe),
        (j = {
          id: h++,
          callback: D,
          priorityLevel: j,
          startTime: $,
          expirationTime: oe,
          sortIndex: -1,
        }),
        $ > b
          ? ((j.sortIndex = $),
            t(u, j),
            n(a) === null &&
              j === n(u) &&
              (g ? (d(I), (I = -1)) : (g = !0), hn(w, $ - b)))
          : ((j.sortIndex = oe), t(a, j), m || y || ((m = !0), Jn(E))),
        j
      );
    }),
    (e.unstable_shouldYield = ve),
    (e.unstable_wrapCallback = function (j) {
      var D = p;
      return function () {
        var $ = p;
        p = D;
        try {
          return j.apply(this, arguments);
        } finally {
          p = $;
        }
      };
    });
})(zu);
Mu.exports = zu;
var Sf = Mu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Lu = Q,
  Le = Sf;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Du = new Set(),
  wr = {};
function dn(e, t) {
  An(e, t), An(e + "Capture", t);
}
function An(e, t) {
  for (wr[e] = t, e = 0; e < t.length; e++) Du.add(t[e]);
}
var vt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ul = Object.prototype.hasOwnProperty,
  kf =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ua = {},
  ca = {};
function Ef(e) {
  return ul.call(ca, e)
    ? !0
    : ul.call(ua, e)
    ? !1
    : kf.test(e)
    ? (ca[e] = !0)
    : ((ua[e] = !0), !1);
}
function Cf(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Nf(e, t, n, r) {
  if (t === null || typeof t > "u" || Cf(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ne(e, t, n, r, i, o, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = l);
}
var me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  me[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  me[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  me[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    me[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  me[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  me[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  me[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  me[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hs = /[\-:]([a-z])/g;
function ms(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hs, ms);
    me[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(hs, ms);
    me[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(hs, ms);
  me[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  me[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
me.xlinkHref = new Ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  me[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vs(e, t, n, r) {
  var i = me.hasOwnProperty(t) ? me[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Nf(t, n, i, r) && (n = null),
    r || i === null
      ? Ef(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var xt = Lu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ni = Symbol.for("react.element"),
  gn = Symbol.for("react.portal"),
  wn = Symbol.for("react.fragment"),
  ys = Symbol.for("react.strict_mode"),
  cl = Symbol.for("react.profiler"),
  Au = Symbol.for("react.provider"),
  Uu = Symbol.for("react.context"),
  gs = Symbol.for("react.forward_ref"),
  dl = Symbol.for("react.suspense"),
  fl = Symbol.for("react.suspense_list"),
  ws = Symbol.for("react.memo"),
  Et = Symbol.for("react.lazy"),
  $u = Symbol.for("react.offscreen"),
  da = Symbol.iterator;
function qn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (da && e[da]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var re = Object.assign,
  zo;
function lr(e) {
  if (zo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zo = (t && t[1]) || "";
    }
  return (
    `
` +
    zo +
    e
  );
}
var Lo = !1;
function Do(e, t) {
  if (!e || Lo) return "";
  Lo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          l = i.length - 1,
          s = o.length - 1;
        1 <= l && 0 <= s && i[l] !== o[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (i[l] !== o[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || i[l] !== o[s])) {
                var a =
                  `
` + i[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Lo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? lr(e) : "";
}
function Tf(e) {
  switch (e.tag) {
    case 5:
      return lr(e.type);
    case 16:
      return lr("Lazy");
    case 13:
      return lr("Suspense");
    case 19:
      return lr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Do(e.type, !1)), e;
    case 11:
      return (e = Do(e.type.render, !1)), e;
    case 1:
      return (e = Do(e.type, !0)), e;
    default:
      return "";
  }
}
function pl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wn:
      return "Fragment";
    case gn:
      return "Portal";
    case cl:
      return "Profiler";
    case ys:
      return "StrictMode";
    case dl:
      return "Suspense";
    case fl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Uu:
        return (e.displayName || "Context") + ".Consumer";
      case Au:
        return (e._context.displayName || "Context") + ".Provider";
      case gs:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ws:
        return (
          (t = e.displayName || null), t !== null ? t : pl(e.type) || "Memo"
        );
      case Et:
        (t = e._payload), (e = e._init);
        try {
          return pl(e(t));
        } catch {}
    }
  return null;
}
function Pf(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return pl(t);
    case 8:
      return t === ys ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function $t(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Vu(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function jf(e) {
  var t = Vu(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (l) {
          (r = "" + l), o.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ri(e) {
  e._valueTracker || (e._valueTracker = jf(e));
}
function Fu(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Vu(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ii(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function hl(e, t) {
  var n = t.checked;
  return re({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function fa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = $t(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Zu(e, t) {
  (t = t.checked), t != null && vs(e, "checked", t, !1);
}
function ml(e, t) {
  Zu(e, t);
  var n = $t(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? vl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && vl(e, t.type, $t(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function pa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function vl(e, t, n) {
  (t !== "number" || Ii(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var sr = Array.isArray;
function On(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + $t(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function yl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return re({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ha(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (sr(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: $t(n) };
}
function Bu(e, t) {
  var n = $t(t.value),
    r = $t(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ma(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Wu(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function gl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Wu(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ii,
  Hu = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ii = ii || document.createElement("div"),
          ii.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ii.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function _r(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var cr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Of = ["Webkit", "ms", "Moz", "O"];
Object.keys(cr).forEach(function (e) {
  Of.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (cr[t] = cr[e]);
  });
});
function Qu(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (cr.hasOwnProperty(e) && cr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ku(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Qu(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var If = re(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function wl(e, t) {
  if (t) {
    if (If[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function _l(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var xl = null;
function _s(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Sl = null,
  In = null,
  Rn = null;
function va(e) {
  if ((e = Jr(e))) {
    if (typeof Sl != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = go(t)), Sl(e.stateNode, e.type, t));
  }
}
function Yu(e) {
  In ? (Rn ? Rn.push(e) : (Rn = [e])) : (In = e);
}
function Gu() {
  if (In) {
    var e = In,
      t = Rn;
    if (((Rn = In = null), va(e), t)) for (e = 0; e < t.length; e++) va(t[e]);
  }
}
function Xu(e, t) {
  return e(t);
}
function Ju() {}
var Ao = !1;
function qu(e, t, n) {
  if (Ao) return e(t, n);
  Ao = !0;
  try {
    return Xu(e, t, n);
  } finally {
    (Ao = !1), (In !== null || Rn !== null) && (Ju(), Gu());
  }
}
function xr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = go(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var kl = !1;
if (vt)
  try {
    var bn = {};
    Object.defineProperty(bn, "passive", {
      get: function () {
        kl = !0;
      },
    }),
      window.addEventListener("test", bn, bn),
      window.removeEventListener("test", bn, bn);
  } catch {
    kl = !1;
  }
function Rf(e, t, n, r, i, o, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (h) {
    this.onError(h);
  }
}
var dr = !1,
  Ri = null,
  Mi = !1,
  El = null,
  Mf = {
    onError: function (e) {
      (dr = !0), (Ri = e);
    },
  };
function zf(e, t, n, r, i, o, l, s, a) {
  (dr = !1), (Ri = null), Rf.apply(Mf, arguments);
}
function Lf(e, t, n, r, i, o, l, s, a) {
  if ((zf.apply(this, arguments), dr)) {
    if (dr) {
      var u = Ri;
      (dr = !1), (Ri = null);
    } else throw Error(S(198));
    Mi || ((Mi = !0), (El = u));
  }
}
function fn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function bu(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ya(e) {
  if (fn(e) !== e) throw Error(S(188));
}
function Df(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = fn(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return ya(i), e;
        if (o === r) return ya(i), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var l = !1, s = i.child; s; ) {
        if (s === n) {
          (l = !0), (n = i), (r = o);
          break;
        }
        if (s === r) {
          (l = !0), (r = i), (n = o);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function ec(e) {
  return (e = Df(e)), e !== null ? tc(e) : null;
}
function tc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = tc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var nc = Le.unstable_scheduleCallback,
  ga = Le.unstable_cancelCallback,
  Af = Le.unstable_shouldYield,
  Uf = Le.unstable_requestPaint,
  le = Le.unstable_now,
  $f = Le.unstable_getCurrentPriorityLevel,
  xs = Le.unstable_ImmediatePriority,
  rc = Le.unstable_UserBlockingPriority,
  zi = Le.unstable_NormalPriority,
  Vf = Le.unstable_LowPriority,
  ic = Le.unstable_IdlePriority,
  ho = null,
  it = null;
function Ff(e) {
  if (it && typeof it.onCommitFiberRoot == "function")
    try {
      it.onCommitFiberRoot(ho, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ge = Math.clz32 ? Math.clz32 : Wf,
  Zf = Math.log,
  Bf = Math.LN2;
function Wf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Zf(e) / Bf) | 0)) | 0;
}
var oi = 64,
  li = 4194304;
function ar(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Li(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~i;
    s !== 0 ? (r = ar(s)) : ((o &= l), o !== 0 && (r = ar(o)));
  } else (l = n & ~i), l !== 0 ? (r = ar(l)) : o !== 0 && (r = ar(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ge(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Hf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Qf(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var l = 31 - Ge(o),
      s = 1 << l,
      a = i[l];
    a === -1
      ? (!(s & n) || s & r) && (i[l] = Hf(s, t))
      : a <= t && (e.expiredLanes |= s),
      (o &= ~s);
  }
}
function Cl(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function oc() {
  var e = oi;
  return (oi <<= 1), !(oi & 4194240) && (oi = 64), e;
}
function Uo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Gr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ge(t)),
    (e[t] = n);
}
function Kf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ge(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Ss(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ge(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var K = 0;
function lc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var sc,
  ks,
  ac,
  uc,
  cc,
  Nl = !1,
  si = [],
  It = null,
  Rt = null,
  Mt = null,
  Sr = new Map(),
  kr = new Map(),
  Nt = [],
  Yf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function wa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      It = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      Mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Sr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      kr.delete(t.pointerId);
  }
}
function er(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Jr(t)), t !== null && ks(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Gf(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (It = er(It, e, t, n, r, i)), !0;
    case "dragenter":
      return (Rt = er(Rt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Mt = er(Mt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return Sr.set(o, er(Sr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), kr.set(o, er(kr.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function dc(e) {
  var t = Xt(e.target);
  if (t !== null) {
    var n = fn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = bu(n)), t !== null)) {
          (e.blockedOn = t),
            cc(e.priority, function () {
              ac(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function _i(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Tl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (xl = r), n.target.dispatchEvent(r), (xl = null);
    } else return (t = Jr(n)), t !== null && ks(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function _a(e, t, n) {
  _i(e) && n.delete(t);
}
function Xf() {
  (Nl = !1),
    It !== null && _i(It) && (It = null),
    Rt !== null && _i(Rt) && (Rt = null),
    Mt !== null && _i(Mt) && (Mt = null),
    Sr.forEach(_a),
    kr.forEach(_a);
}
function tr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Nl ||
      ((Nl = !0),
      Le.unstable_scheduleCallback(Le.unstable_NormalPriority, Xf)));
}
function Er(e) {
  function t(i) {
    return tr(i, e);
  }
  if (0 < si.length) {
    tr(si[0], e);
    for (var n = 1; n < si.length; n++) {
      var r = si[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    It !== null && tr(It, e),
      Rt !== null && tr(Rt, e),
      Mt !== null && tr(Mt, e),
      Sr.forEach(t),
      kr.forEach(t),
      n = 0;
    n < Nt.length;
    n++
  )
    (r = Nt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Nt.length && ((n = Nt[0]), n.blockedOn === null); )
    dc(n), n.blockedOn === null && Nt.shift();
}
var Mn = xt.ReactCurrentBatchConfig,
  Di = !0;
function Jf(e, t, n, r) {
  var i = K,
    o = Mn.transition;
  Mn.transition = null;
  try {
    (K = 1), Es(e, t, n, r);
  } finally {
    (K = i), (Mn.transition = o);
  }
}
function qf(e, t, n, r) {
  var i = K,
    o = Mn.transition;
  Mn.transition = null;
  try {
    (K = 4), Es(e, t, n, r);
  } finally {
    (K = i), (Mn.transition = o);
  }
}
function Es(e, t, n, r) {
  if (Di) {
    var i = Tl(e, t, n, r);
    if (i === null) Yo(e, t, r, Ai, n), wa(e, r);
    else if (Gf(i, e, t, n, r)) r.stopPropagation();
    else if ((wa(e, r), t & 4 && -1 < Yf.indexOf(e))) {
      for (; i !== null; ) {
        var o = Jr(i);
        if (
          (o !== null && sc(o),
          (o = Tl(e, t, n, r)),
          o === null && Yo(e, t, r, Ai, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Yo(e, t, r, null, n);
  }
}
var Ai = null;
function Tl(e, t, n, r) {
  if (((Ai = null), (e = _s(r)), (e = Xt(e)), e !== null))
    if (((t = fn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = bu(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ai = e), null;
}
function fc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($f()) {
        case xs:
          return 1;
        case rc:
          return 4;
        case zi:
        case Vf:
          return 16;
        case ic:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var jt = null,
  Cs = null,
  xi = null;
function pc() {
  if (xi) return xi;
  var e,
    t = Cs,
    n = t.length,
    r,
    i = "value" in jt ? jt.value : jt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === i[o - r]; r++);
  return (xi = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Si(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ai() {
  return !0;
}
function xa() {
  return !1;
}
function Ae(e) {
  function t(n, r, i, o, l) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ai
        : xa),
      (this.isPropagationStopped = xa),
      this
    );
  }
  return (
    re(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ai));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ai));
      },
      persist: function () {},
      isPersistent: ai,
    }),
    t
  );
}
var Yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ns = Ae(Yn),
  Xr = re({}, Yn, { view: 0, detail: 0 }),
  bf = Ae(Xr),
  $o,
  Vo,
  nr,
  mo = re({}, Xr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ts,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== nr &&
            (nr && e.type === "mousemove"
              ? (($o = e.screenX - nr.screenX), (Vo = e.screenY - nr.screenY))
              : (Vo = $o = 0),
            (nr = e)),
          $o);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Vo;
    },
  }),
  Sa = Ae(mo),
  ep = re({}, mo, { dataTransfer: 0 }),
  tp = Ae(ep),
  np = re({}, Xr, { relatedTarget: 0 }),
  Fo = Ae(np),
  rp = re({}, Yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ip = Ae(rp),
  op = re({}, Yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  lp = Ae(op),
  sp = re({}, Yn, { data: 0 }),
  ka = Ae(sp),
  ap = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  up = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  cp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function dp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cp[e]) ? !!t[e] : !1;
}
function Ts() {
  return dp;
}
var fp = re({}, Xr, {
    key: function (e) {
      if (e.key) {
        var t = ap[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Si(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? up[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ts,
    charCode: function (e) {
      return e.type === "keypress" ? Si(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Si(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  pp = Ae(fp),
  hp = re({}, mo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ea = Ae(hp),
  mp = re({}, Xr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ts,
  }),
  vp = Ae(mp),
  yp = re({}, Yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gp = Ae(yp),
  wp = re({}, mo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _p = Ae(wp),
  xp = [9, 13, 27, 32],
  Ps = vt && "CompositionEvent" in window,
  fr = null;
vt && "documentMode" in document && (fr = document.documentMode);
var Sp = vt && "TextEvent" in window && !fr,
  hc = vt && (!Ps || (fr && 8 < fr && 11 >= fr)),
  Ca = String.fromCharCode(32),
  Na = !1;
function mc(e, t) {
  switch (e) {
    case "keyup":
      return xp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function vc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var _n = !1;
function kp(e, t) {
  switch (e) {
    case "compositionend":
      return vc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Na = !0), Ca);
    case "textInput":
      return (e = t.data), e === Ca && Na ? null : e;
    default:
      return null;
  }
}
function Ep(e, t) {
  if (_n)
    return e === "compositionend" || (!Ps && mc(e, t))
      ? ((e = pc()), (xi = Cs = jt = null), (_n = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return hc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ta(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cp[e.type] : t === "textarea";
}
function yc(e, t, n, r) {
  Yu(r),
    (t = Ui(t, "onChange")),
    0 < t.length &&
      ((n = new Ns("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var pr = null,
  Cr = null;
function Np(e) {
  Pc(e, 0);
}
function vo(e) {
  var t = kn(e);
  if (Fu(t)) return e;
}
function Tp(e, t) {
  if (e === "change") return t;
}
var gc = !1;
if (vt) {
  var Zo;
  if (vt) {
    var Bo = "oninput" in document;
    if (!Bo) {
      var Pa = document.createElement("div");
      Pa.setAttribute("oninput", "return;"),
        (Bo = typeof Pa.oninput == "function");
    }
    Zo = Bo;
  } else Zo = !1;
  gc = Zo && (!document.documentMode || 9 < document.documentMode);
}
function ja() {
  pr && (pr.detachEvent("onpropertychange", wc), (Cr = pr = null));
}
function wc(e) {
  if (e.propertyName === "value" && vo(Cr)) {
    var t = [];
    yc(t, Cr, e, _s(e)), qu(Np, t);
  }
}
function Pp(e, t, n) {
  e === "focusin"
    ? (ja(), (pr = t), (Cr = n), pr.attachEvent("onpropertychange", wc))
    : e === "focusout" && ja();
}
function jp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return vo(Cr);
}
function Op(e, t) {
  if (e === "click") return vo(t);
}
function Ip(e, t) {
  if (e === "input" || e === "change") return vo(t);
}
function Rp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var be = typeof Object.is == "function" ? Object.is : Rp;
function Nr(e, t) {
  if (be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ul.call(t, i) || !be(e[i], t[i])) return !1;
  }
  return !0;
}
function Oa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ia(e, t) {
  var n = Oa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Oa(n);
  }
}
function _c(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _c(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function xc() {
  for (var e = window, t = Ii(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ii(e.document);
  }
  return t;
}
function js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Mp(e) {
  var t = xc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _c(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && js(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Ia(n, o));
        var l = Ia(n, r);
        i &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var zp = vt && "documentMode" in document && 11 >= document.documentMode,
  xn = null,
  Pl = null,
  hr = null,
  jl = !1;
function Ra(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  jl ||
    xn == null ||
    xn !== Ii(r) ||
    ((r = xn),
    "selectionStart" in r && js(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (hr && Nr(hr, r)) ||
      ((hr = r),
      (r = Ui(Pl, "onSelect")),
      0 < r.length &&
        ((t = new Ns("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = xn))));
}
function ui(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Sn = {
    animationend: ui("Animation", "AnimationEnd"),
    animationiteration: ui("Animation", "AnimationIteration"),
    animationstart: ui("Animation", "AnimationStart"),
    transitionend: ui("Transition", "TransitionEnd"),
  },
  Wo = {},
  Sc = {};
vt &&
  ((Sc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Sn.animationend.animation,
    delete Sn.animationiteration.animation,
    delete Sn.animationstart.animation),
  "TransitionEvent" in window || delete Sn.transitionend.transition);
function yo(e) {
  if (Wo[e]) return Wo[e];
  if (!Sn[e]) return e;
  var t = Sn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Sc) return (Wo[e] = t[n]);
  return e;
}
var kc = yo("animationend"),
  Ec = yo("animationiteration"),
  Cc = yo("animationstart"),
  Nc = yo("transitionend"),
  Tc = new Map(),
  Ma =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Wt(e, t) {
  Tc.set(e, t), dn(t, [e]);
}
for (var Ho = 0; Ho < Ma.length; Ho++) {
  var Qo = Ma[Ho],
    Lp = Qo.toLowerCase(),
    Dp = Qo[0].toUpperCase() + Qo.slice(1);
  Wt(Lp, "on" + Dp);
}
Wt(kc, "onAnimationEnd");
Wt(Ec, "onAnimationIteration");
Wt(Cc, "onAnimationStart");
Wt("dblclick", "onDoubleClick");
Wt("focusin", "onFocus");
Wt("focusout", "onBlur");
Wt(Nc, "onTransitionEnd");
An("onMouseEnter", ["mouseout", "mouseover"]);
An("onMouseLeave", ["mouseout", "mouseover"]);
An("onPointerEnter", ["pointerout", "pointerover"]);
An("onPointerLeave", ["pointerout", "pointerover"]);
dn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
dn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
dn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
dn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var ur =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ap = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
function za(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Lf(r, t, void 0, e), (e.currentTarget = null);
}
function Pc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== o && i.isPropagationStopped())) break e;
          za(i, s, u), (o = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (a = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          za(i, s, u), (o = a);
        }
    }
  }
  if (Mi) throw ((e = El), (Mi = !1), (El = null), e);
}
function X(e, t) {
  var n = t[zl];
  n === void 0 && (n = t[zl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (jc(t, e, 2, !1), n.add(r));
}
function Ko(e, t, n) {
  var r = 0;
  t && (r |= 4), jc(n, e, r, t);
}
var ci = "_reactListening" + Math.random().toString(36).slice(2);
function Tr(e) {
  if (!e[ci]) {
    (e[ci] = !0),
      Du.forEach(function (n) {
        n !== "selectionchange" && (Ap.has(n) || Ko(n, !1, e), Ko(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ci] || ((t[ci] = !0), Ko("selectionchange", !1, t));
  }
}
function jc(e, t, n, r) {
  switch (fc(t)) {
    case 1:
      var i = Jf;
      break;
    case 4:
      i = qf;
      break;
    default:
      i = Es;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !kl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Yo(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Xt(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = o = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  qu(function () {
    var u = o,
      h = _s(n),
      v = [];
    e: {
      var p = Tc.get(e);
      if (p !== void 0) {
        var y = Ns,
          m = e;
        switch (e) {
          case "keypress":
            if (Si(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = pp;
            break;
          case "focusin":
            (m = "focus"), (y = Fo);
            break;
          case "focusout":
            (m = "blur"), (y = Fo);
            break;
          case "beforeblur":
          case "afterblur":
            y = Fo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Sa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = tp;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = vp;
            break;
          case kc:
          case Ec:
          case Cc:
            y = ip;
            break;
          case Nc:
            y = gp;
            break;
          case "scroll":
            y = bf;
            break;
          case "wheel":
            y = _p;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = lp;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ea;
        }
        var g = (t & 4) !== 0,
          P = !g && e === "scroll",
          d = g ? (p !== null ? p + "Capture" : null) : p;
        g = [];
        for (var c = u, f; c !== null; ) {
          f = c;
          var w = f.stateNode;
          if (
            (f.tag === 5 &&
              w !== null &&
              ((f = w),
              d !== null && ((w = xr(c, d)), w != null && g.push(Pr(c, w, f)))),
            P)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((p = new y(p, m, null, n, h)), v.push({ event: p, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== xl &&
            (m = n.relatedTarget || n.fromElement) &&
            (Xt(m) || m[yt]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          y
            ? ((m = n.relatedTarget || n.toElement),
              (y = u),
              (m = m ? Xt(m) : null),
              m !== null &&
                ((P = fn(m)), m !== P || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((y = null), (m = u)),
          y !== m)
        ) {
          if (
            ((g = Sa),
            (w = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Ea),
              (w = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (P = y == null ? p : kn(y)),
            (f = m == null ? p : kn(m)),
            (p = new g(w, c + "leave", y, n, h)),
            (p.target = P),
            (p.relatedTarget = f),
            (w = null),
            Xt(h) === u &&
              ((g = new g(d, c + "enter", m, n, h)),
              (g.target = f),
              (g.relatedTarget = P),
              (w = g)),
            (P = w),
            y && m)
          )
            t: {
              for (g = y, d = m, c = 0, f = g; f; f = vn(f)) c++;
              for (f = 0, w = d; w; w = vn(w)) f++;
              for (; 0 < c - f; ) (g = vn(g)), c--;
              for (; 0 < f - c; ) (d = vn(d)), f--;
              for (; c--; ) {
                if (g === d || (d !== null && g === d.alternate)) break t;
                (g = vn(g)), (d = vn(d));
              }
              g = null;
            }
          else g = null;
          y !== null && La(v, p, y, g, !1),
            m !== null && P !== null && La(v, P, m, g, !0);
        }
      }
      e: {
        if (
          ((p = u ? kn(u) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var E = Tp;
        else if (Ta(p))
          if (gc) E = Ip;
          else {
            E = jp;
            var C = Pp;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Op);
        if (E && (E = E(e, u))) {
          yc(v, E, n, h);
          break e;
        }
        C && C(e, p, u),
          e === "focusout" &&
            (C = p._wrapperState) &&
            C.controlled &&
            p.type === "number" &&
            vl(p, "number", p.value);
      }
      switch (((C = u ? kn(u) : window), e)) {
        case "focusin":
          (Ta(C) || C.contentEditable === "true") &&
            ((xn = C), (Pl = u), (hr = null));
          break;
        case "focusout":
          hr = Pl = xn = null;
          break;
        case "mousedown":
          jl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (jl = !1), Ra(v, n, h);
          break;
        case "selectionchange":
          if (zp) break;
        case "keydown":
        case "keyup":
          Ra(v, n, h);
      }
      var x;
      if (Ps)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        _n
          ? mc(e, n) && (I = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (hc &&
          n.locale !== "ko" &&
          (_n || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && _n && (x = pc())
            : ((jt = h),
              (Cs = "value" in jt ? jt.value : jt.textContent),
              (_n = !0))),
        (C = Ui(u, I)),
        0 < C.length &&
          ((I = new ka(I, e, null, n, h)),
          v.push({ event: I, listeners: C }),
          x ? (I.data = x) : ((x = vc(n)), x !== null && (I.data = x)))),
        (x = Sp ? kp(e, n) : Ep(e, n)) &&
          ((u = Ui(u, "onBeforeInput")),
          0 < u.length &&
            ((h = new ka("onBeforeInput", "beforeinput", null, n, h)),
            v.push({ event: h, listeners: u }),
            (h.data = x)));
    }
    Pc(v, t);
  });
}
function Pr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ui(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = xr(e, n)),
      o != null && r.unshift(Pr(e, o, i)),
      (o = xr(e, t)),
      o != null && r.push(Pr(e, o, i))),
      (e = e.return);
  }
  return r;
}
function vn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function La(e, t, n, r, i) {
  for (var o = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((a = xr(n, o)), a != null && l.unshift(Pr(n, a, s)))
        : i || ((a = xr(n, o)), a != null && l.push(Pr(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Up = /\r\n?/g,
  $p = /\u0000|\uFFFD/g;
function Da(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Up,
      `
`
    )
    .replace($p, "");
}
function di(e, t, n) {
  if (((t = Da(t)), Da(e) !== t && n)) throw Error(S(425));
}
function $i() {}
var Ol = null,
  Il = null;
function Rl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ml = typeof setTimeout == "function" ? setTimeout : void 0,
  Vp = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Aa = typeof Promise == "function" ? Promise : void 0,
  Fp =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Aa < "u"
      ? function (e) {
          return Aa.resolve(null).then(e).catch(Zp);
        }
      : Ml;
function Zp(e) {
  setTimeout(function () {
    throw e;
  });
}
function Go(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Er(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Er(t);
}
function zt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ua(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Gn = Math.random().toString(36).slice(2),
  rt = "__reactFiber$" + Gn,
  jr = "__reactProps$" + Gn,
  yt = "__reactContainer$" + Gn,
  zl = "__reactEvents$" + Gn,
  Bp = "__reactListeners$" + Gn,
  Wp = "__reactHandles$" + Gn;
function Xt(e) {
  var t = e[rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[yt] || n[rt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ua(e); e !== null; ) {
          if ((n = e[rt])) return n;
          e = Ua(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Jr(e) {
  return (
    (e = e[rt] || e[yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function go(e) {
  return e[jr] || null;
}
var Ll = [],
  En = -1;
function Ht(e) {
  return { current: e };
}
function J(e) {
  0 > En || ((e.current = Ll[En]), (Ll[En] = null), En--);
}
function G(e, t) {
  En++, (Ll[En] = e.current), (e.current = t);
}
var Vt = {},
  _e = Ht(Vt),
  je = Ht(!1),
  nn = Vt;
function Un(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Vt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Oe(e) {
  return (e = e.childContextTypes), e != null;
}
function Vi() {
  J(je), J(_e);
}
function $a(e, t, n) {
  if (_e.current !== Vt) throw Error(S(168));
  G(_e, t), G(je, n);
}
function Oc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(S(108, Pf(e) || "Unknown", i));
  return re({}, n, r);
}
function Fi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vt),
    (nn = _e.current),
    G(_e, e),
    G(je, je.current),
    !0
  );
}
function Va(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = Oc(e, t, nn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      J(je),
      J(_e),
      G(_e, e))
    : J(je),
    G(je, n);
}
var ct = null,
  wo = !1,
  Xo = !1;
function Ic(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
function Hp(e) {
  (wo = !0), Ic(e);
}
function Qt() {
  if (!Xo && ct !== null) {
    Xo = !0;
    var e = 0,
      t = K;
    try {
      var n = ct;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (ct = null), (wo = !1);
    } catch (i) {
      throw (ct !== null && (ct = ct.slice(e + 1)), nc(xs, Qt), i);
    } finally {
      (K = t), (Xo = !1);
    }
  }
  return null;
}
var Cn = [],
  Nn = 0,
  Zi = null,
  Bi = 0,
  Ue = [],
  $e = 0,
  rn = null,
  dt = 1,
  ft = "";
function Yt(e, t) {
  (Cn[Nn++] = Bi), (Cn[Nn++] = Zi), (Zi = e), (Bi = t);
}
function Rc(e, t, n) {
  (Ue[$e++] = dt), (Ue[$e++] = ft), (Ue[$e++] = rn), (rn = e);
  var r = dt;
  e = ft;
  var i = 32 - Ge(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ge(t) + i;
  if (30 < o) {
    var l = i - (i % 5);
    (o = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (i -= l),
      (dt = (1 << (32 - Ge(t) + i)) | (n << i) | r),
      (ft = o + e);
  } else (dt = (1 << o) | (n << i) | r), (ft = e);
}
function Os(e) {
  e.return !== null && (Yt(e, 1), Rc(e, 1, 0));
}
function Is(e) {
  for (; e === Zi; )
    (Zi = Cn[--Nn]), (Cn[Nn] = null), (Bi = Cn[--Nn]), (Cn[Nn] = null);
  for (; e === rn; )
    (rn = Ue[--$e]),
      (Ue[$e] = null),
      (ft = Ue[--$e]),
      (Ue[$e] = null),
      (dt = Ue[--$e]),
      (Ue[$e] = null);
}
var ze = null,
  Me = null,
  q = !1,
  Ke = null;
function Mc(e, t) {
  var n = Ve(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ze = e), (Me = zt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ze = e), (Me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = rn !== null ? { id: dt, overflow: ft } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ve(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ze = e),
            (Me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Dl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Al(e) {
  if (q) {
    var t = Me;
    if (t) {
      var n = t;
      if (!Fa(e, t)) {
        if (Dl(e)) throw Error(S(418));
        t = zt(n.nextSibling);
        var r = ze;
        t && Fa(e, t)
          ? Mc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (q = !1), (ze = e));
      }
    } else {
      if (Dl(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (q = !1), (ze = e);
    }
  }
}
function Za(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ze = e;
}
function fi(e) {
  if (e !== ze) return !1;
  if (!q) return Za(e), (q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Rl(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (Dl(e)) throw (zc(), Error(S(418)));
    for (; t; ) Mc(e, t), (t = zt(t.nextSibling));
  }
  if ((Za(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = zt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = ze ? zt(e.stateNode.nextSibling) : null;
  return !0;
}
function zc() {
  for (var e = Me; e; ) e = zt(e.nextSibling);
}
function $n() {
  (Me = ze = null), (q = !1);
}
function Rs(e) {
  Ke === null ? (Ke = [e]) : Ke.push(e);
}
var Qp = xt.ReactCurrentBatchConfig;
function He(e, t) {
  if (e && e.defaultProps) {
    (t = re({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Wi = Ht(null),
  Hi = null,
  Tn = null,
  Ms = null;
function zs() {
  Ms = Tn = Hi = null;
}
function Ls(e) {
  var t = Wi.current;
  J(Wi), (e._currentValue = t);
}
function Ul(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function zn(e, t) {
  (Hi = e),
    (Ms = Tn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function Ze(e) {
  var t = e._currentValue;
  if (Ms !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Tn === null)) {
      if (Hi === null) throw Error(S(308));
      (Tn = e), (Hi.dependencies = { lanes: 0, firstContext: e });
    } else Tn = Tn.next = e;
  return t;
}
var Jt = null;
function Ds(e) {
  Jt === null ? (Jt = [e]) : Jt.push(e);
}
function Lc(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ds(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    gt(e, r)
  );
}
function gt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ct = !1;
function As(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Dc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ht(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Lt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), W & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      gt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ds(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    gt(e, n)
  );
}
function ki(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ss(e, n);
  }
}
function Ba(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = l) : (o = o.next = l), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Qi(e, t, n, r) {
  var i = e.updateQueue;
  Ct = !1;
  var o = i.firstBaseUpdate,
    l = i.lastBaseUpdate,
    s = i.shared.pending;
  if (s !== null) {
    i.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (o = u) : (l.next = u), (l = a);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (s = h.lastBaseUpdate),
      s !== l &&
        (s === null ? (h.firstBaseUpdate = u) : (s.next = u),
        (h.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var v = i.baseState;
    (l = 0), (h = u = a = null), (s = o);
    do {
      var p = s.lane,
        y = s.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: y,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var m = e,
            g = s;
          switch (((p = t), (y = n), g.tag)) {
            case 1:
              if (((m = g.payload), typeof m == "function")) {
                v = m.call(y, v, p);
                break e;
              }
              v = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = g.payload),
                (p = typeof m == "function" ? m.call(y, v, p) : m),
                p == null)
              )
                break e;
              v = re({}, v, p);
              break e;
            case 2:
              Ct = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (p = i.effects),
          p === null ? (i.effects = [s]) : p.push(s));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          h === null ? ((u = h = y), (a = v)) : (h = h.next = y),
          (l |= p);
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break;
        (p = s),
          (s = p.next),
          (p.next = null),
          (i.lastBaseUpdate = p),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (a = v),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = h),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (l |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (ln |= l), (e.lanes = l), (e.memoizedState = v);
  }
}
function Wa(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(S(191, i));
        i.call(r);
      }
    }
}
var Ac = new Lu.Component().refs;
function $l(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : re({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _o = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? fn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = At(e),
      o = ht(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Lt(e, o, i)),
      t !== null && (Xe(t, e, i, r), ki(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = At(e),
      o = ht(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Lt(e, o, i)),
      t !== null && (Xe(t, e, i, r), ki(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = At(e),
      i = ht(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Lt(e, i, r)),
      t !== null && (Xe(t, e, r, n), ki(t, e, r));
  },
};
function Ha(e, t, n, r, i, o, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Nr(n, r) || !Nr(i, o)
      : !0
  );
}
function Uc(e, t, n) {
  var r = !1,
    i = Vt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Ze(o))
      : ((i = Oe(t) ? nn : _e.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Un(e, i) : Vt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = _o),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Qa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && _o.enqueueReplaceState(t, t.state, null);
}
function Vl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Ac), As(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = Ze(o))
    : ((o = Oe(t) ? nn : _e.current), (i.context = Un(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && ($l(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && _o.enqueueReplaceState(i, i.state, null),
      Qi(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function rr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (l) {
            var s = i.refs;
            s === Ac && (s = i.refs = {}),
              l === null ? delete s[o] : (s[o] = l);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function pi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ka(e) {
  var t = e._init;
  return t(e._payload);
}
function $c(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [c]), (d.flags |= 16)) : f.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function i(d, c) {
    return (d = Ut(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((d.flags |= 2), c) : f)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, c, f, w) {
    return c === null || c.tag !== 6
      ? ((c = rl(f, d.mode, w)), (c.return = d), c)
      : ((c = i(c, f)), (c.return = d), c);
  }
  function a(d, c, f, w) {
    var E = f.type;
    return E === wn
      ? h(d, c, f.props.children, w, f.key)
      : c !== null &&
        (c.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Et &&
            Ka(E) === c.type))
      ? ((w = i(c, f.props)), (w.ref = rr(d, c, f)), (w.return = d), w)
      : ((w = ji(f.type, f.key, f.props, null, d.mode, w)),
        (w.ref = rr(d, c, f)),
        (w.return = d),
        w);
  }
  function u(d, c, f, w) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = il(f, d.mode, w)), (c.return = d), c)
      : ((c = i(c, f.children || [])), (c.return = d), c);
  }
  function h(d, c, f, w, E) {
    return c === null || c.tag !== 7
      ? ((c = en(f, d.mode, w, E)), (c.return = d), c)
      : ((c = i(c, f)), (c.return = d), c);
  }
  function v(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = rl("" + c, d.mode, f)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ni:
          return (
            (f = ji(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = rr(d, null, c)),
            (f.return = d),
            f
          );
        case gn:
          return (c = il(c, d.mode, f)), (c.return = d), c;
        case Et:
          var w = c._init;
          return v(d, w(c._payload), f);
      }
      if (sr(c) || qn(c))
        return (c = en(c, d.mode, f, null)), (c.return = d), c;
      pi(d, c);
    }
    return null;
  }
  function p(d, c, f, w) {
    var E = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return E !== null ? null : s(d, c, "" + f, w);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case ni:
          return f.key === E ? a(d, c, f, w) : null;
        case gn:
          return f.key === E ? u(d, c, f, w) : null;
        case Et:
          return (E = f._init), p(d, c, E(f._payload), w);
      }
      if (sr(f) || qn(f)) return E !== null ? null : h(d, c, f, w, null);
      pi(d, f);
    }
    return null;
  }
  function y(d, c, f, w, E) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (d = d.get(f) || null), s(c, d, "" + w, E);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case ni:
          return (d = d.get(w.key === null ? f : w.key) || null), a(c, d, w, E);
        case gn:
          return (d = d.get(w.key === null ? f : w.key) || null), u(c, d, w, E);
        case Et:
          var C = w._init;
          return y(d, c, f, C(w._payload), E);
      }
      if (sr(w) || qn(w)) return (d = d.get(f) || null), h(c, d, w, E, null);
      pi(c, w);
    }
    return null;
  }
  function m(d, c, f, w) {
    for (
      var E = null, C = null, x = c, I = (c = 0), B = null;
      x !== null && I < f.length;
      I++
    ) {
      x.index > I ? ((B = x), (x = null)) : (B = x.sibling);
      var U = p(d, x, f[I], w);
      if (U === null) {
        x === null && (x = B);
        break;
      }
      e && x && U.alternate === null && t(d, x),
        (c = o(U, c, I)),
        C === null ? (E = U) : (C.sibling = U),
        (C = U),
        (x = B);
    }
    if (I === f.length) return n(d, x), q && Yt(d, I), E;
    if (x === null) {
      for (; I < f.length; I++)
        (x = v(d, f[I], w)),
          x !== null &&
            ((c = o(x, c, I)), C === null ? (E = x) : (C.sibling = x), (C = x));
      return q && Yt(d, I), E;
    }
    for (x = r(d, x); I < f.length; I++)
      (B = y(x, d, I, f[I], w)),
        B !== null &&
          (e && B.alternate !== null && x.delete(B.key === null ? I : B.key),
          (c = o(B, c, I)),
          C === null ? (E = B) : (C.sibling = B),
          (C = B));
    return (
      e &&
        x.forEach(function (ve) {
          return t(d, ve);
        }),
      q && Yt(d, I),
      E
    );
  }
  function g(d, c, f, w) {
    var E = qn(f);
    if (typeof E != "function") throw Error(S(150));
    if (((f = E.call(f)), f == null)) throw Error(S(151));
    for (
      var C = (E = null), x = c, I = (c = 0), B = null, U = f.next();
      x !== null && !U.done;
      I++, U = f.next()
    ) {
      x.index > I ? ((B = x), (x = null)) : (B = x.sibling);
      var ve = p(d, x, U.value, w);
      if (ve === null) {
        x === null && (x = B);
        break;
      }
      e && x && ve.alternate === null && t(d, x),
        (c = o(ve, c, I)),
        C === null ? (E = ve) : (C.sibling = ve),
        (C = ve),
        (x = B);
    }
    if (U.done) return n(d, x), q && Yt(d, I), E;
    if (x === null) {
      for (; !U.done; I++, U = f.next())
        (U = v(d, U.value, w)),
          U !== null &&
            ((c = o(U, c, I)), C === null ? (E = U) : (C.sibling = U), (C = U));
      return q && Yt(d, I), E;
    }
    for (x = r(d, x); !U.done; I++, U = f.next())
      (U = y(x, d, I, U.value, w)),
        U !== null &&
          (e && U.alternate !== null && x.delete(U.key === null ? I : U.key),
          (c = o(U, c, I)),
          C === null ? (E = U) : (C.sibling = U),
          (C = U));
    return (
      e &&
        x.forEach(function (St) {
          return t(d, St);
        }),
      q && Yt(d, I),
      E
    );
  }
  function P(d, c, f, w) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === wn &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case ni:
          e: {
            for (var E = f.key, C = c; C !== null; ) {
              if (C.key === E) {
                if (((E = f.type), E === wn)) {
                  if (C.tag === 7) {
                    n(d, C.sibling),
                      (c = i(C, f.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  C.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Et &&
                    Ka(E) === C.type)
                ) {
                  n(d, C.sibling),
                    (c = i(C, f.props)),
                    (c.ref = rr(d, C, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, C);
                break;
              } else t(d, C);
              C = C.sibling;
            }
            f.type === wn
              ? ((c = en(f.props.children, d.mode, w, f.key)),
                (c.return = d),
                (d = c))
              : ((w = ji(f.type, f.key, f.props, null, d.mode, w)),
                (w.ref = rr(d, c, f)),
                (w.return = d),
                (d = w));
          }
          return l(d);
        case gn:
          e: {
            for (C = f.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling),
                    (c = i(c, f.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = il(f, d.mode, w)), (c.return = d), (d = c);
          }
          return l(d);
        case Et:
          return (C = f._init), P(d, c, C(f._payload), w);
      }
      if (sr(f)) return m(d, c, f, w);
      if (qn(f)) return g(d, c, f, w);
      pi(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = i(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = rl(f, d.mode, w)), (c.return = d), (d = c)),
        l(d))
      : n(d, c);
  }
  return P;
}
var Vn = $c(!0),
  Vc = $c(!1),
  qr = {},
  ot = Ht(qr),
  Or = Ht(qr),
  Ir = Ht(qr);
function qt(e) {
  if (e === qr) throw Error(S(174));
  return e;
}
function Us(e, t) {
  switch ((G(Ir, t), G(Or, e), G(ot, qr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : gl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = gl(t, e));
  }
  J(ot), G(ot, t);
}
function Fn() {
  J(ot), J(Or), J(Ir);
}
function Fc(e) {
  qt(Ir.current);
  var t = qt(ot.current),
    n = gl(t, e.type);
  t !== n && (G(Or, e), G(ot, n));
}
function $s(e) {
  Or.current === e && (J(ot), J(Or));
}
var te = Ht(0);
function Ki(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Jo = [];
function Vs() {
  for (var e = 0; e < Jo.length; e++)
    Jo[e]._workInProgressVersionPrimary = null;
  Jo.length = 0;
}
var Ei = xt.ReactCurrentDispatcher,
  qo = xt.ReactCurrentBatchConfig,
  on = 0,
  ne = null,
  ae = null,
  ce = null,
  Yi = !1,
  mr = !1,
  Rr = 0,
  Kp = 0;
function ye() {
  throw Error(S(321));
}
function Fs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!be(e[n], t[n])) return !1;
  return !0;
}
function Zs(e, t, n, r, i, o) {
  if (
    ((on = o),
    (ne = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ei.current = e === null || e.memoizedState === null ? Jp : qp),
    (e = n(r, i)),
    mr)
  ) {
    o = 0;
    do {
      if (((mr = !1), (Rr = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (ce = ae = null),
        (t.updateQueue = null),
        (Ei.current = bp),
        (e = n(r, i));
    } while (mr);
  }
  if (
    ((Ei.current = Gi),
    (t = ae !== null && ae.next !== null),
    (on = 0),
    (ce = ae = ne = null),
    (Yi = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function Bs() {
  var e = Rr !== 0;
  return (Rr = 0), e;
}
function nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ce === null ? (ne.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function Be() {
  if (ae === null) {
    var e = ne.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ae.next;
  var t = ce === null ? ne.memoizedState : ce.next;
  if (t !== null) (ce = t), (ae = e);
  else {
    if (e === null) throw Error(S(310));
    (ae = e),
      (e = {
        memoizedState: ae.memoizedState,
        baseState: ae.baseState,
        baseQueue: ae.baseQueue,
        queue: ae.queue,
        next: null,
      }),
      ce === null ? (ne.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function Mr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bo(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = ae,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var l = i.next;
      (i.next = o.next), (o.next = l);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = o;
    do {
      var h = u.lane;
      if ((on & h) === h)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var v = {
          lane: h,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((s = a = v), (l = r)) : (a = a.next = v),
          (ne.lanes |= h),
          (ln |= h);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (l = r) : (a.next = s),
      be(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (ne.lanes |= o), (ln |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function el(e) {
  var t = Be(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var l = (i = i.next);
    do (o = e(o, l.action)), (l = l.next);
    while (l !== i);
    be(o, t.memoizedState) || (Pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Zc() {}
function Bc(e, t) {
  var n = ne,
    r = Be(),
    i = t(),
    o = !be(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    Ws(Qc.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      zr(9, Hc.bind(null, n, r, i, t), void 0, null),
      de === null)
    )
      throw Error(S(349));
    on & 30 || Wc(n, t, i);
  }
  return i;
}
function Wc(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Hc(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Kc(t) && Yc(e);
}
function Qc(e, t, n) {
  return n(function () {
    Kc(t) && Yc(e);
  });
}
function Kc(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !be(e, n);
  } catch {
    return !0;
  }
}
function Yc(e) {
  var t = gt(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function Ya(e) {
  var t = nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Mr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xp.bind(null, ne, e)),
    [t.memoizedState, e]
  );
}
function zr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ne.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ne.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Gc() {
  return Be().memoizedState;
}
function Ci(e, t, n, r) {
  var i = nt();
  (ne.flags |= e),
    (i.memoizedState = zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function xo(e, t, n, r) {
  var i = Be();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ae !== null) {
    var l = ae.memoizedState;
    if (((o = l.destroy), r !== null && Fs(r, l.deps))) {
      i.memoizedState = zr(t, n, o, r);
      return;
    }
  }
  (ne.flags |= e), (i.memoizedState = zr(1 | t, n, o, r));
}
function Ga(e, t) {
  return Ci(8390656, 8, e, t);
}
function Ws(e, t) {
  return xo(2048, 8, e, t);
}
function Xc(e, t) {
  return xo(4, 2, e, t);
}
function Jc(e, t) {
  return xo(4, 4, e, t);
}
function qc(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function bc(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), xo(4, 4, qc.bind(null, t, e), n)
  );
}
function Hs() {}
function ed(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function td(e, t) {
  var n = Be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function nd(e, t, n) {
  return on & 21
    ? (be(n, t) || ((n = oc()), (ne.lanes |= n), (ln |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function Yp(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = qo.transition;
  qo.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (qo.transition = r);
  }
}
function rd() {
  return Be().memoizedState;
}
function Gp(e, t, n) {
  var r = At(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    id(e))
  )
    od(t, n);
  else if (((n = Lc(e, t, n, r)), n !== null)) {
    var i = ke();
    Xe(n, e, r, i), ld(n, t, r);
  }
}
function Xp(e, t, n) {
  var r = At(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (id(e)) od(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = o(l, n);
        if (((i.hasEagerState = !0), (i.eagerState = s), be(s, l))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Ds(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Lc(e, t, i, r)),
      n !== null && ((i = ke()), Xe(n, e, r, i), ld(n, t, r));
  }
}
function id(e) {
  var t = e.alternate;
  return e === ne || (t !== null && t === ne);
}
function od(e, t) {
  mr = Yi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ld(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ss(e, n);
  }
}
var Gi = {
    readContext: Ze,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  Jp = {
    readContext: Ze,
    useCallback: function (e, t) {
      return (nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Ze,
    useEffect: Ga,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ci(4194308, 4, qc.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ci(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ci(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Gp.bind(null, ne, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ya,
    useDebugValue: Hs,
    useDeferredValue: function (e) {
      return (nt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ya(!1),
        t = e[0];
      return (e = Yp.bind(null, e[1])), (nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ne,
        i = nt();
      if (q) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(S(349));
        on & 30 || Wc(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Ga(Qc.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        zr(9, Hc.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = nt(),
        t = de.identifierPrefix;
      if (q) {
        var n = ft,
          r = dt;
        (n = (r & ~(1 << (32 - Ge(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Rr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Kp++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qp = {
    readContext: Ze,
    useCallback: ed,
    useContext: Ze,
    useEffect: Ws,
    useImperativeHandle: bc,
    useInsertionEffect: Xc,
    useLayoutEffect: Jc,
    useMemo: td,
    useReducer: bo,
    useRef: Gc,
    useState: function () {
      return bo(Mr);
    },
    useDebugValue: Hs,
    useDeferredValue: function (e) {
      var t = Be();
      return nd(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = bo(Mr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Zc,
    useSyncExternalStore: Bc,
    useId: rd,
    unstable_isNewReconciler: !1,
  },
  bp = {
    readContext: Ze,
    useCallback: ed,
    useContext: Ze,
    useEffect: Ws,
    useImperativeHandle: bc,
    useInsertionEffect: Xc,
    useLayoutEffect: Jc,
    useMemo: td,
    useReducer: el,
    useRef: Gc,
    useState: function () {
      return el(Mr);
    },
    useDebugValue: Hs,
    useDeferredValue: function (e) {
      var t = Be();
      return ae === null ? (t.memoizedState = e) : nd(t, ae.memoizedState, e);
    },
    useTransition: function () {
      var e = el(Mr)[0],
        t = Be().memoizedState;
      return [e, t];
    },
    useMutableSource: Zc,
    useSyncExternalStore: Bc,
    useId: rd,
    unstable_isNewReconciler: !1,
  };
function Zn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Tf(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function tl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Fl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var eh = typeof WeakMap == "function" ? WeakMap : Map;
function sd(e, t, n) {
  (n = ht(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Ji || ((Ji = !0), (Jl = r)), Fl(e, t);
    }),
    n
  );
}
function ad(e, t, n) {
  (n = ht(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Fl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Fl(e, t),
          typeof r != "function" &&
            (Dt === null ? (Dt = new Set([this])) : Dt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function Xa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new eh();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = hh.bind(null, e, t, n)), t.then(e, e));
}
function Ja(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function qa(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = ht(-1, 1)), (t.tag = 2), Lt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var th = xt.ReactCurrentOwner,
  Pe = !1;
function Se(e, t, n, r) {
  t.child = e === null ? Vc(t, null, n, r) : Vn(t, e.child, n, r);
}
function ba(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    zn(t, i),
    (r = Zs(e, t, n, r, o, i)),
    (n = Bs()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        wt(e, t, i))
      : (q && n && Os(t), (t.flags |= 1), Se(e, t, r, i), t.child)
  );
}
function eu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !bs(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), ud(e, t, o, r, i))
      : ((e = ji(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var l = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Nr), n(l, r) && e.ref === t.ref)
    )
      return wt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ut(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ud(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Nr(o, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), wt(e, t, i);
  }
  return Zl(e, t, n, r, i);
}
function cd(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(jn, Re),
        (Re |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          G(jn, Re),
          (Re |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        G(jn, Re),
        (Re |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      G(jn, Re),
      (Re |= r);
  return Se(e, t, i, n), t.child;
}
function dd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Zl(e, t, n, r, i) {
  var o = Oe(n) ? nn : _e.current;
  return (
    (o = Un(t, o)),
    zn(t, i),
    (n = Zs(e, t, n, r, o, i)),
    (r = Bs()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        wt(e, t, i))
      : (q && r && Os(t), (t.flags |= 1), Se(e, t, n, i), t.child)
  );
}
function tu(e, t, n, r, i) {
  if (Oe(n)) {
    var o = !0;
    Fi(t);
  } else o = !1;
  if ((zn(t, i), t.stateNode === null))
    Ni(e, t), Uc(t, n, r), Vl(t, n, r, i), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = Ze(u))
      : ((u = Oe(n) ? nn : _e.current), (u = Un(t, u)));
    var h = n.getDerivedStateFromProps,
      v =
        typeof h == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Qa(t, l, r, u)),
      (Ct = !1);
    var p = t.memoizedState;
    (l.state = p),
      Qi(t, r, l, i),
      (a = t.memoizedState),
      s !== r || p !== a || je.current || Ct
        ? (typeof h == "function" && ($l(t, n, h, r), (a = t.memoizedState)),
          (s = Ct || Ha(t, n, s, r, p, a, u))
            ? (v ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Dc(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : He(t.type, s)),
      (l.props = u),
      (v = t.pendingProps),
      (p = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Ze(a))
        : ((a = Oe(n) ? nn : _e.current), (a = Un(t, a)));
    var y = n.getDerivedStateFromProps;
    (h =
      typeof y == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== v || p !== a) && Qa(t, l, r, a)),
      (Ct = !1),
      (p = t.memoizedState),
      (l.state = p),
      Qi(t, r, l, i);
    var m = t.memoizedState;
    s !== v || p !== m || je.current || Ct
      ? (typeof y == "function" && ($l(t, n, y, r), (m = t.memoizedState)),
        (u = Ct || Ha(t, n, u, r, p, m, a) || !1)
          ? (h ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, m, a),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, m, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (l.props = r),
        (l.state = m),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Bl(e, t, n, r, o, i);
}
function Bl(e, t, n, r, i, o) {
  dd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return i && Va(t, n, !1), wt(e, t, o);
  (r = t.stateNode), (th.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Vn(t, e.child, null, o)), (t.child = Vn(t, null, s, o)))
      : Se(e, t, s, o),
    (t.memoizedState = r.state),
    i && Va(t, n, !0),
    t.child
  );
}
function fd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? $a(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && $a(e, t.context, !1),
    Us(e, t.containerInfo);
}
function nu(e, t, n, r, i) {
  return $n(), Rs(i), (t.flags |= 256), Se(e, t, n, r), t.child;
}
var Wl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Hl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pd(e, t, n) {
  var r = t.pendingProps,
    i = te.current,
    o = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    G(te, i & 1),
    e === null)
  )
    return (
      Al(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = l))
                : (o = Eo(l, r, 0, null)),
              (e = en(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Hl(n)),
              (t.memoizedState = Wl),
              e)
            : Qs(t, l))
    );
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return nh(e, t, l, r, s, i, n);
  if (o) {
    (o = r.fallback), (l = t.mode), (i = e.child), (s = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ut(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = Ut(s, o)) : ((o = en(o, l, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Hl(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (o.memoizedState = l),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Wl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ut(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Qs(e, t) {
  return (
    (t = Eo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function hi(e, t, n, r) {
  return (
    r !== null && Rs(r),
    Vn(t, e.child, null, n),
    (e = Qs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function nh(e, t, n, r, i, o, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = tl(Error(S(422)))), hi(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Eo({ mode: "visible", children: r.children }, i, 0, null)),
        (o = en(o, i, l, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Vn(t, e.child, null, l),
        (t.child.memoizedState = Hl(l)),
        (t.memoizedState = Wl),
        o);
  if (!(t.mode & 1)) return hi(e, t, l, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (o = Error(S(419))), (r = tl(o, r, void 0)), hi(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Pe || s)) {
    if (((r = de), r !== null)) {
      switch (l & -l) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | l) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), gt(e, i), Xe(r, e, i, -1));
    }
    return qs(), (r = tl(Error(S(421)))), hi(e, t, l, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mh.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Me = zt(i.nextSibling)),
      (ze = t),
      (q = !0),
      (Ke = null),
      e !== null &&
        ((Ue[$e++] = dt),
        (Ue[$e++] = ft),
        (Ue[$e++] = rn),
        (dt = e.id),
        (ft = e.overflow),
        (rn = t)),
      (t = Qs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ru(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ul(e.return, t, n);
}
function nl(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function hd(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Se(e, t, r.children, n), (r = te.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ru(e, n, t);
        else if (e.tag === 19) ru(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((G(te, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ki(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          nl(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ki(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        nl(t, !0, n, null, o);
        break;
      case "together":
        nl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ni(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function wt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (ln |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ut(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function rh(e, t, n) {
  switch (t.tag) {
    case 3:
      fd(t), $n();
      break;
    case 5:
      Fc(t);
      break;
    case 1:
      Oe(t.type) && Fi(t);
      break;
    case 4:
      Us(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      G(Wi, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (G(te, te.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? pd(e, t, n)
          : (G(te, te.current & 1),
            (e = wt(e, t, n)),
            e !== null ? e.sibling : null);
      G(te, te.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return hd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        G(te, te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), cd(e, t, n);
  }
  return wt(e, t, n);
}
var md, Ql, vd, yd;
md = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ql = function () {};
vd = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), qt(ot.current);
    var o = null;
    switch (n) {
      case "input":
        (i = hl(e, i)), (r = hl(e, r)), (o = []);
        break;
      case "select":
        (i = re({}, i, { value: void 0 })),
          (r = re({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = yl(e, i)), (r = yl(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = $i);
    }
    wl(n, r);
    var l;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var s = i[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (wr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== s && (a != null || s != null))
      )
        if (u === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (a && a.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in a)
              a.hasOwnProperty(l) &&
                s[l] !== a[l] &&
                (n || (n = {}), (n[l] = a[l]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (wr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && X("scroll", e),
                  o || s === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
yd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ir(e, t) {
  if (!q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ge(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ih(e, t, n) {
  var r = t.pendingProps;
  switch ((Is(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ge(t), null;
    case 1:
      return Oe(t.type) && Vi(), ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Fn(),
        J(je),
        J(_e),
        Vs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (fi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ke !== null && (es(Ke), (Ke = null)))),
        Ql(e, t),
        ge(t),
        null
      );
    case 5:
      $s(t);
      var i = qt(Ir.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        vd(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ge(t), null;
        }
        if (((e = qt(ot.current)), fi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[rt] = t), (r[jr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              X("cancel", r), X("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              X("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < ur.length; i++) X(ur[i], r);
              break;
            case "source":
              X("error", r);
              break;
            case "img":
            case "image":
            case "link":
              X("error", r), X("load", r);
              break;
            case "details":
              X("toggle", r);
              break;
            case "input":
              fa(r, o), X("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                X("invalid", r);
              break;
            case "textarea":
              ha(r, o), X("invalid", r);
          }
          wl(n, o), (i = null);
          for (var l in o)
            if (o.hasOwnProperty(l)) {
              var s = o[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      di(r.textContent, s, e),
                    (i = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      di(r.textContent, s, e),
                    (i = ["children", "" + s]))
                : wr.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  X("scroll", r);
            }
          switch (n) {
            case "input":
              ri(r), pa(r, o, !0);
              break;
            case "textarea":
              ri(r), ma(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = $i);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Wu(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[rt] = t),
            (e[jr] = r),
            md(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = _l(n, r)), n)) {
              case "dialog":
                X("cancel", e), X("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                X("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < ur.length; i++) X(ur[i], e);
                i = r;
                break;
              case "source":
                X("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                X("error", e), X("load", e), (i = r);
                break;
              case "details":
                X("toggle", e), (i = r);
                break;
              case "input":
                fa(e, r), (i = hl(e, r)), X("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = re({}, r, { value: void 0 })),
                  X("invalid", e);
                break;
              case "textarea":
                ha(e, r), (i = yl(e, r)), X("invalid", e);
                break;
              default:
                i = r;
            }
            wl(n, i), (s = i);
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "style"
                  ? Ku(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && Hu(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && _r(e, a)
                    : typeof a == "number" && _r(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (wr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && X("scroll", e)
                      : a != null && vs(e, o, a, l));
              }
            switch (n) {
              case "input":
                ri(e), pa(e, r, !1);
                break;
              case "textarea":
                ri(e), ma(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + $t(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? On(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      On(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = $i);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ge(t), null;
    case 6:
      if (e && t.stateNode != null) yd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = qt(Ir.current)), qt(ot.current), fi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[rt] = t),
            (o = r.nodeValue !== n) && ((e = ze), e !== null))
          )
            switch (e.tag) {
              case 3:
                di(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  di(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[rt] = t),
            (t.stateNode = r);
      }
      return ge(t), null;
    case 13:
      if (
        (J(te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (q && Me !== null && t.mode & 1 && !(t.flags & 128))
          zc(), $n(), (t.flags |= 98560), (o = !1);
        else if (((o = fi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[rt] = t;
          } else
            $n(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ge(t), (o = !1);
        } else Ke !== null && (es(Ke), (Ke = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || te.current & 1 ? ue === 0 && (ue = 3) : qs())),
          t.updateQueue !== null && (t.flags |= 4),
          ge(t),
          null);
    case 4:
      return (
        Fn(), Ql(e, t), e === null && Tr(t.stateNode.containerInfo), ge(t), null
      );
    case 10:
      return Ls(t.type._context), ge(t), null;
    case 17:
      return Oe(t.type) && Vi(), ge(t), null;
    case 19:
      if ((J(te), (o = t.memoizedState), o === null)) return ge(t), null;
      if (((r = (t.flags & 128) !== 0), (l = o.rendering), l === null))
        if (r) ir(o, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Ki(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    ir(o, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (l = o.alternate),
                    l === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = l.childLanes),
                        (o.lanes = l.lanes),
                        (o.child = l.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = l.memoizedProps),
                        (o.memoizedState = l.memoizedState),
                        (o.updateQueue = l.updateQueue),
                        (o.type = l.type),
                        (e = l.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return G(te, (te.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            le() > Bn &&
            ((t.flags |= 128), (r = !0), ir(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ki(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ir(o, !0),
              o.tail === null && o.tailMode === "hidden" && !l.alternate && !q)
            )
              return ge(t), null;
          } else
            2 * le() - o.renderingStartTime > Bn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ir(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = o.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (o.last = l));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = le()),
          (t.sibling = null),
          (n = te.current),
          G(te, r ? (n & 1) | 2 : n & 1),
          t)
        : (ge(t), null);
    case 22:
    case 23:
      return (
        Js(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Re & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function oh(e, t) {
  switch ((Is(t), t.tag)) {
    case 1:
      return (
        Oe(t.type) && Vi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Fn(),
        J(je),
        J(_e),
        Vs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return $s(t), null;
    case 13:
      if ((J(te), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        $n();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return J(te), null;
    case 4:
      return Fn(), null;
    case 10:
      return Ls(t.type._context), null;
    case 22:
    case 23:
      return Js(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var mi = !1,
  we = !1,
  lh = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function Pn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ie(e, t, r);
      }
    else n.current = null;
}
function Kl(e, t, n) {
  try {
    n();
  } catch (r) {
    ie(e, t, r);
  }
}
var iu = !1;
function sh(e, t) {
  if (((Ol = Di), (e = xc()), js(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            h = 0,
            v = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              v !== n || (i !== 0 && v.nodeType !== 3) || (s = l + i),
                v !== o || (r !== 0 && v.nodeType !== 3) || (a = l + r),
                v.nodeType === 3 && (l += v.nodeValue.length),
                (y = v.firstChild) !== null;

            )
              (p = v), (v = y);
            for (;;) {
              if (v === e) break t;
              if (
                (p === n && ++u === i && (s = l),
                p === o && ++h === r && (a = l),
                (y = v.nextSibling) !== null)
              )
                break;
              (v = p), (p = v.parentNode);
            }
            v = y;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Il = { focusedElem: e, selectionRange: n }, Di = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var g = m.memoizedProps,
                    P = m.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : He(t.type, g),
                      P
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (w) {
          ie(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (m = iu), (iu = !1), m;
}
function vr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Kl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function So(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Yl(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function gd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), gd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rt], delete t[jr], delete t[zl], delete t[Bp], delete t[Wp])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function wd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ou(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || wd(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Gl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = $i));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gl(e, t, n), e = e.sibling; e !== null; ) Gl(e, t, n), (e = e.sibling);
}
function Xl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xl(e, t, n), e = e.sibling; e !== null; ) Xl(e, t, n), (e = e.sibling);
}
var pe = null,
  Qe = !1;
function kt(e, t, n) {
  for (n = n.child; n !== null; ) _d(e, t, n), (n = n.sibling);
}
function _d(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function")
    try {
      it.onCommitFiberUnmount(ho, n);
    } catch {}
  switch (n.tag) {
    case 5:
      we || Pn(n, t);
    case 6:
      var r = pe,
        i = Qe;
      (pe = null),
        kt(e, t, n),
        (pe = r),
        (Qe = i),
        pe !== null &&
          (Qe
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null &&
        (Qe
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Go(e.parentNode, n)
              : e.nodeType === 1 && Go(e, n),
            Er(e))
          : Go(pe, n.stateNode));
      break;
    case 4:
      (r = pe),
        (i = Qe),
        (pe = n.stateNode.containerInfo),
        (Qe = !0),
        kt(e, t, n),
        (pe = r),
        (Qe = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !we &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            l = o.destroy;
          (o = o.tag),
            l !== void 0 && (o & 2 || o & 4) && Kl(n, t, l),
            (i = i.next);
        } while (i !== r);
      }
      kt(e, t, n);
      break;
    case 1:
      if (
        !we &&
        (Pn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ie(n, t, s);
        }
      kt(e, t, n);
      break;
    case 21:
      kt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((we = (r = we) || n.memoizedState !== null), kt(e, t, n), (we = r))
        : kt(e, t, n);
      break;
    default:
      kt(e, t, n);
  }
}
function lu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new lh()),
      t.forEach(function (r) {
        var i = vh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function We(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (pe = s.stateNode), (Qe = !1);
              break e;
            case 3:
              (pe = s.stateNode.containerInfo), (Qe = !0);
              break e;
            case 4:
              (pe = s.stateNode.containerInfo), (Qe = !0);
              break e;
          }
          s = s.return;
        }
        if (pe === null) throw Error(S(160));
        _d(o, l, i), (pe = null), (Qe = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        ie(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) xd(t, e), (t = t.sibling);
}
function xd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((We(t, e), tt(e), r & 4)) {
        try {
          vr(3, e, e.return), So(3, e);
        } catch (g) {
          ie(e, e.return, g);
        }
        try {
          vr(5, e, e.return);
        } catch (g) {
          ie(e, e.return, g);
        }
      }
      break;
    case 1:
      We(t, e), tt(e), r & 512 && n !== null && Pn(n, n.return);
      break;
    case 5:
      if (
        (We(t, e),
        tt(e),
        r & 512 && n !== null && Pn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          _r(i, "");
        } catch (g) {
          ie(e, e.return, g);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          l = n !== null ? n.memoizedProps : o,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && o.type === "radio" && o.name != null && Zu(i, o),
              _l(s, l);
            var u = _l(s, o);
            for (l = 0; l < a.length; l += 2) {
              var h = a[l],
                v = a[l + 1];
              h === "style"
                ? Ku(i, v)
                : h === "dangerouslySetInnerHTML"
                ? Hu(i, v)
                : h === "children"
                ? _r(i, v)
                : vs(i, h, v, u);
            }
            switch (s) {
              case "input":
                ml(i, o);
                break;
              case "textarea":
                Bu(i, o);
                break;
              case "select":
                var p = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var y = o.value;
                y != null
                  ? On(i, !!o.multiple, y, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? On(i, !!o.multiple, o.defaultValue, !0)
                      : On(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[jr] = o;
          } catch (g) {
            ie(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((We(t, e), tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (g) {
          ie(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (We(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Er(t.containerInfo);
        } catch (g) {
          ie(e, e.return, g);
        }
      break;
    case 4:
      We(t, e), tt(e);
      break;
    case 13:
      We(t, e),
        tt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Gs = le())),
        r & 4 && lu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((we = (u = we) || h), We(t, e), (we = u)) : We(t, e),
        tt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !h && e.mode & 1)
        )
          for (O = e, h = e.child; h !== null; ) {
            for (v = O = h; O !== null; ) {
              switch (((p = O), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  vr(4, p, p.return);
                  break;
                case 1:
                  Pn(p, p.return);
                  var m = p.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (g) {
                      ie(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Pn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    au(v);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (O = y)) : au(v);
            }
            h = h.sibling;
          }
        e: for (h = null, v = e; ; ) {
          if (v.tag === 5) {
            if (h === null) {
              h = v;
              try {
                (i = v.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((s = v.stateNode),
                      (a = v.memoizedProps.style),
                      (l =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (s.style.display = Qu("display", l)));
              } catch (g) {
                ie(e, e.return, g);
              }
            }
          } else if (v.tag === 6) {
            if (h === null)
              try {
                v.stateNode.nodeValue = u ? "" : v.memoizedProps;
              } catch (g) {
                ie(e, e.return, g);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (v.return === null || v.return === e) break e;
            h === v && (h = null), (v = v.return);
          }
          h === v && (h = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      We(t, e), tt(e), r & 4 && lu(e);
      break;
    case 21:
      break;
    default:
      We(t, e), tt(e);
  }
}
function tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (wd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (_r(i, ""), (r.flags &= -33));
          var o = ou(e);
          Xl(e, o, i);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = ou(e);
          Gl(e, s, l);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      ie(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ah(e, t, n) {
  (O = e), Sd(e);
}
function Sd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      o = i.child;
    if (i.tag === 22 && r) {
      var l = i.memoizedState !== null || mi;
      if (!l) {
        var s = i.alternate,
          a = (s !== null && s.memoizedState !== null) || we;
        s = mi;
        var u = we;
        if (((mi = l), (we = a) && !u))
          for (O = i; O !== null; )
            (l = O),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? uu(i)
                : a !== null
                ? ((a.return = l), (O = a))
                : uu(i);
        for (; o !== null; ) (O = o), Sd(o), (o = o.sibling);
        (O = i), (mi = s), (we = u);
      }
      su(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (O = o)) : su(e);
  }
}
function su(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              we || So(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !we)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : He(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Wa(t, o, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Wa(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var h = u.memoizedState;
                  if (h !== null) {
                    var v = h.dehydrated;
                    v !== null && Er(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(S(163));
          }
        we || (t.flags & 512 && Yl(t));
      } catch (p) {
        ie(t, t.return, p);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function au(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function uu(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            So(4, t);
          } catch (a) {
            ie(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              ie(t, i, a);
            }
          }
          var o = t.return;
          try {
            Yl(t);
          } catch (a) {
            ie(t, o, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Yl(t);
          } catch (a) {
            ie(t, l, a);
          }
      }
    } catch (a) {
      ie(t, t.return, a);
    }
    if (t === e) {
      O = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (O = s);
      break;
    }
    O = t.return;
  }
}
var uh = Math.ceil,
  Xi = xt.ReactCurrentDispatcher,
  Ks = xt.ReactCurrentOwner,
  Fe = xt.ReactCurrentBatchConfig,
  W = 0,
  de = null,
  se = null,
  he = 0,
  Re = 0,
  jn = Ht(0),
  ue = 0,
  Lr = null,
  ln = 0,
  ko = 0,
  Ys = 0,
  yr = null,
  Te = null,
  Gs = 0,
  Bn = 1 / 0,
  ut = null,
  Ji = !1,
  Jl = null,
  Dt = null,
  vi = !1,
  Ot = null,
  qi = 0,
  gr = 0,
  ql = null,
  Ti = -1,
  Pi = 0;
function ke() {
  return W & 6 ? le() : Ti !== -1 ? Ti : (Ti = le());
}
function At(e) {
  return e.mode & 1
    ? W & 2 && he !== 0
      ? he & -he
      : Qp.transition !== null
      ? (Pi === 0 && (Pi = oc()), Pi)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : fc(e.type))),
        e)
    : 1;
}
function Xe(e, t, n, r) {
  if (50 < gr) throw ((gr = 0), (ql = null), Error(S(185)));
  Gr(e, n, r),
    (!(W & 2) || e !== de) &&
      (e === de && (!(W & 2) && (ko |= n), ue === 4 && Tt(e, he)),
      Ie(e, r),
      n === 1 && W === 0 && !(t.mode & 1) && ((Bn = le() + 500), wo && Qt()));
}
function Ie(e, t) {
  var n = e.callbackNode;
  Qf(e, t);
  var r = Li(e, e === de ? he : 0);
  if (r === 0)
    n !== null && ga(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ga(n), t === 1))
      e.tag === 0 ? Hp(cu.bind(null, e)) : Ic(cu.bind(null, e)),
        Fp(function () {
          !(W & 6) && Qt();
        }),
        (n = null);
    else {
      switch (lc(r)) {
        case 1:
          n = xs;
          break;
        case 4:
          n = rc;
          break;
        case 16:
          n = zi;
          break;
        case 536870912:
          n = ic;
          break;
        default:
          n = zi;
      }
      n = Od(n, kd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function kd(e, t) {
  if (((Ti = -1), (Pi = 0), W & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (Ln() && e.callbackNode !== n) return null;
  var r = Li(e, e === de ? he : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = bi(e, r);
  else {
    t = r;
    var i = W;
    W |= 2;
    var o = Cd();
    (de !== e || he !== t) && ((ut = null), (Bn = le() + 500), bt(e, t));
    do
      try {
        fh();
        break;
      } catch (s) {
        Ed(e, s);
      }
    while (1);
    zs(),
      (Xi.current = o),
      (W = i),
      se !== null ? (t = 0) : ((de = null), (he = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Cl(e)), i !== 0 && ((r = i), (t = bl(e, i)))), t === 1)
    )
      throw ((n = Lr), bt(e, 0), Tt(e, r), Ie(e, le()), n);
    if (t === 6) Tt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !ch(i) &&
          ((t = bi(e, r)),
          t === 2 && ((o = Cl(e)), o !== 0 && ((r = o), (t = bl(e, o)))),
          t === 1))
      )
        throw ((n = Lr), bt(e, 0), Tt(e, r), Ie(e, le()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          Gt(e, Te, ut);
          break;
        case 3:
          if (
            (Tt(e, r), (r & 130023424) === r && ((t = Gs + 500 - le()), 10 < t))
          ) {
            if (Li(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ke(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Ml(Gt.bind(null, e, Te, ut), t);
            break;
          }
          Gt(e, Te, ut);
          break;
        case 4:
          if ((Tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var l = 31 - Ge(r);
            (o = 1 << l), (l = t[l]), l > i && (i = l), (r &= ~o);
          }
          if (
            ((r = i),
            (r = le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * uh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ml(Gt.bind(null, e, Te, ut), r);
            break;
          }
          Gt(e, Te, ut);
          break;
        case 5:
          Gt(e, Te, ut);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Ie(e, le()), e.callbackNode === n ? kd.bind(null, e) : null;
}
function bl(e, t) {
  var n = yr;
  return (
    e.current.memoizedState.isDehydrated && (bt(e, t).flags |= 256),
    (e = bi(e, t)),
    e !== 2 && ((t = Te), (Te = n), t !== null && es(t)),
    e
  );
}
function es(e) {
  Te === null ? (Te = e) : Te.push.apply(Te, e);
}
function ch(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!be(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Tt(e, t) {
  for (
    t &= ~Ys,
      t &= ~ko,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ge(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cu(e) {
  if (W & 6) throw Error(S(327));
  Ln();
  var t = Li(e, 0);
  if (!(t & 1)) return Ie(e, le()), null;
  var n = bi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Cl(e);
    r !== 0 && ((t = r), (n = bl(e, r)));
  }
  if (n === 1) throw ((n = Lr), bt(e, 0), Tt(e, t), Ie(e, le()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Gt(e, Te, ut),
    Ie(e, le()),
    null
  );
}
function Xs(e, t) {
  var n = W;
  W |= 1;
  try {
    return e(t);
  } finally {
    (W = n), W === 0 && ((Bn = le() + 500), wo && Qt());
  }
}
function sn(e) {
  Ot !== null && Ot.tag === 0 && !(W & 6) && Ln();
  var t = W;
  W |= 1;
  var n = Fe.transition,
    r = K;
  try {
    if (((Fe.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (Fe.transition = n), (W = t), !(W & 6) && Qt();
  }
}
function Js() {
  (Re = jn.current), J(jn);
}
function bt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Vp(n)), se !== null))
    for (n = se.return; n !== null; ) {
      var r = n;
      switch ((Is(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Vi();
          break;
        case 3:
          Fn(), J(je), J(_e), Vs();
          break;
        case 5:
          $s(r);
          break;
        case 4:
          Fn();
          break;
        case 13:
          J(te);
          break;
        case 19:
          J(te);
          break;
        case 10:
          Ls(r.type._context);
          break;
        case 22:
        case 23:
          Js();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (se = e = Ut(e.current, null)),
    (he = Re = t),
    (ue = 0),
    (Lr = null),
    (Ys = ko = ln = 0),
    (Te = yr = null),
    Jt !== null)
  ) {
    for (t = 0; t < Jt.length; t++)
      if (((n = Jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var l = o.next;
          (o.next = i), (r.next = l);
        }
        n.pending = r;
      }
    Jt = null;
  }
  return e;
}
function Ed(e, t) {
  do {
    var n = se;
    try {
      if ((zs(), (Ei.current = Gi), Yi)) {
        for (var r = ne.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Yi = !1;
      }
      if (
        ((on = 0),
        (ce = ae = ne = null),
        (mr = !1),
        (Rr = 0),
        (Ks.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (Lr = t), (se = null);
        break;
      }
      e: {
        var o = e,
          l = n.return,
          s = n,
          a = t;
        if (
          ((t = he),
          (s.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            h = s,
            v = h.tag;
          if (!(h.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var y = Ja(l);
          if (y !== null) {
            (y.flags &= -257),
              qa(y, l, s, o, t),
              y.mode & 1 && Xa(o, u, t),
              (t = y),
              (a = u);
            var m = t.updateQueue;
            if (m === null) {
              var g = new Set();
              g.add(a), (t.updateQueue = g);
            } else m.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Xa(o, u, t), qs();
              break e;
            }
            a = Error(S(426));
          }
        } else if (q && s.mode & 1) {
          var P = Ja(l);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              qa(P, l, s, o, t),
              Rs(Zn(a, s));
            break e;
          }
        }
        (o = a = Zn(a, s)),
          ue !== 4 && (ue = 2),
          yr === null ? (yr = [o]) : yr.push(o),
          (o = l);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = sd(o, a, t);
              Ba(o, d);
              break e;
            case 1:
              s = a;
              var c = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (Dt === null || !Dt.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = ad(o, s, t);
                Ba(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Td(n);
    } catch (E) {
      (t = E), se === n && n !== null && (se = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Cd() {
  var e = Xi.current;
  return (Xi.current = Gi), e === null ? Gi : e;
}
function qs() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    de === null || (!(ln & 268435455) && !(ko & 268435455)) || Tt(de, he);
}
function bi(e, t) {
  var n = W;
  W |= 2;
  var r = Cd();
  (de !== e || he !== t) && ((ut = null), bt(e, t));
  do
    try {
      dh();
      break;
    } catch (i) {
      Ed(e, i);
    }
  while (1);
  if ((zs(), (W = n), (Xi.current = r), se !== null)) throw Error(S(261));
  return (de = null), (he = 0), ue;
}
function dh() {
  for (; se !== null; ) Nd(se);
}
function fh() {
  for (; se !== null && !Af(); ) Nd(se);
}
function Nd(e) {
  var t = jd(e.alternate, e, Re);
  (e.memoizedProps = e.pendingProps),
    t === null ? Td(e) : (se = t),
    (Ks.current = null);
}
function Td(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = oh(n, t)), n !== null)) {
        (n.flags &= 32767), (se = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (se = null);
        return;
      }
    } else if (((n = ih(n, t, Re)), n !== null)) {
      se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      se = t;
      return;
    }
    se = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function Gt(e, t, n) {
  var r = K,
    i = Fe.transition;
  try {
    (Fe.transition = null), (K = 1), ph(e, t, n, r);
  } finally {
    (Fe.transition = i), (K = r);
  }
  return null;
}
function ph(e, t, n, r) {
  do Ln();
  while (Ot !== null);
  if (W & 6) throw Error(S(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Kf(e, o),
    e === de && ((se = de = null), (he = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      vi ||
      ((vi = !0),
      Od(zi, function () {
        return Ln(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Fe.transition), (Fe.transition = null);
    var l = K;
    K = 1;
    var s = W;
    (W |= 4),
      (Ks.current = null),
      sh(e, n),
      xd(n, e),
      Mp(Il),
      (Di = !!Ol),
      (Il = Ol = null),
      (e.current = n),
      ah(n),
      Uf(),
      (W = s),
      (K = l),
      (Fe.transition = o);
  } else e.current = n;
  if (
    (vi && ((vi = !1), (Ot = e), (qi = i)),
    (o = e.pendingLanes),
    o === 0 && (Dt = null),
    Ff(n.stateNode),
    Ie(e, le()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ji) throw ((Ji = !1), (e = Jl), (Jl = null), e);
  return (
    qi & 1 && e.tag !== 0 && Ln(),
    (o = e.pendingLanes),
    o & 1 ? (e === ql ? gr++ : ((gr = 0), (ql = e))) : (gr = 0),
    Qt(),
    null
  );
}
function Ln() {
  if (Ot !== null) {
    var e = lc(qi),
      t = Fe.transition,
      n = K;
    try {
      if (((Fe.transition = null), (K = 16 > e ? 16 : e), Ot === null))
        var r = !1;
      else {
        if (((e = Ot), (Ot = null), (qi = 0), W & 6)) throw Error(S(331));
        var i = W;
        for (W |= 4, O = e.current; O !== null; ) {
          var o = O,
            l = o.child;
          if (O.flags & 16) {
            var s = o.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (O = u; O !== null; ) {
                  var h = O;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      vr(8, h, o);
                  }
                  var v = h.child;
                  if (v !== null) (v.return = h), (O = v);
                  else
                    for (; O !== null; ) {
                      h = O;
                      var p = h.sibling,
                        y = h.return;
                      if ((gd(h), h === u)) {
                        O = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (O = p);
                        break;
                      }
                      O = y;
                    }
                }
              }
              var m = o.alternate;
              if (m !== null) {
                var g = m.child;
                if (g !== null) {
                  m.child = null;
                  do {
                    var P = g.sibling;
                    (g.sibling = null), (g = P);
                  } while (g !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && l !== null) (l.return = o), (O = l);
          else
            e: for (; O !== null; ) {
              if (((o = O), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    vr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (O = d);
                break e;
              }
              O = o.return;
            }
        }
        var c = e.current;
        for (O = c; O !== null; ) {
          l = O;
          var f = l.child;
          if (l.subtreeFlags & 2064 && f !== null) (f.return = l), (O = f);
          else
            e: for (l = c; O !== null; ) {
              if (((s = O), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      So(9, s);
                  }
                } catch (E) {
                  ie(s, s.return, E);
                }
              if (s === l) {
                O = null;
                break e;
              }
              var w = s.sibling;
              if (w !== null) {
                (w.return = s.return), (O = w);
                break e;
              }
              O = s.return;
            }
        }
        if (
          ((W = i), Qt(), it && typeof it.onPostCommitFiberRoot == "function")
        )
          try {
            it.onPostCommitFiberRoot(ho, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (Fe.transition = t);
    }
  }
  return !1;
}
function du(e, t, n) {
  (t = Zn(n, t)),
    (t = sd(e, t, 1)),
    (e = Lt(e, t, 1)),
    (t = ke()),
    e !== null && (Gr(e, 1, t), Ie(e, t));
}
function ie(e, t, n) {
  if (e.tag === 3) du(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        du(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Dt === null || !Dt.has(r)))
        ) {
          (e = Zn(n, e)),
            (e = ad(t, e, 1)),
            (t = Lt(t, e, 1)),
            (e = ke()),
            t !== null && (Gr(t, 1, e), Ie(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (he & n) === n &&
      (ue === 4 || (ue === 3 && (he & 130023424) === he && 500 > le() - Gs)
        ? bt(e, 0)
        : (Ys |= n)),
    Ie(e, t);
}
function Pd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = li), (li <<= 1), !(li & 130023424) && (li = 4194304))
      : (t = 1));
  var n = ke();
  (e = gt(e, t)), e !== null && (Gr(e, t, n), Ie(e, n));
}
function mh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Pd(e, n);
}
function vh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(S(314));
  }
  r !== null && r.delete(t), Pd(e, n);
}
var jd;
jd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), rh(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), q && t.flags & 1048576 && Rc(t, Bi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ni(e, t), (e = t.pendingProps);
      var i = Un(t, _e.current);
      zn(t, n), (i = Zs(null, t, r, e, i, n));
      var o = Bs();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Oe(r) ? ((o = !0), Fi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            As(t),
            (i.updater = _o),
            (t.stateNode = i),
            (i._reactInternals = t),
            Vl(t, r, e, n),
            (t = Bl(null, t, r, !0, o, n)))
          : ((t.tag = 0), q && o && Os(t), Se(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ni(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = gh(r)),
          (e = He(r, e)),
          i)
        ) {
          case 0:
            t = Zl(null, t, r, e, n);
            break e;
          case 1:
            t = tu(null, t, r, e, n);
            break e;
          case 11:
            t = ba(null, t, r, e, n);
            break e;
          case 14:
            t = eu(null, t, r, He(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        Zl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        tu(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((fd(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Dc(e, t),
          Qi(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Zn(Error(S(423)), t)), (t = nu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Zn(Error(S(424)), t)), (t = nu(e, t, r, n, i));
            break e;
          } else
            for (
              Me = zt(t.stateNode.containerInfo.firstChild),
                ze = t,
                q = !0,
                Ke = null,
                n = Vc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if (($n(), r === i)) {
            t = wt(e, t, n);
            break e;
          }
          Se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Fc(t),
        e === null && Al(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (l = i.children),
        Rl(r, i) ? (l = null) : o !== null && Rl(r, o) && (t.flags |= 32),
        dd(e, t),
        Se(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Al(t), null;
    case 13:
      return pd(e, t, n);
    case 4:
      return (
        Us(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Vn(t, null, r, n)) : Se(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        ba(e, t, r, i, n)
      );
    case 7:
      return Se(e, t, t.pendingProps, n), t.child;
    case 8:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (l = i.value),
          G(Wi, r._currentValue),
          (r._currentValue = l),
          o !== null)
        )
          if (be(o.value, l)) {
            if (o.children === i.children && !je.current) {
              t = wt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies;
              if (s !== null) {
                l = o.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = ht(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var h = u.pending;
                        h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      Ul(o.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) l = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((l = o.return), l === null)) throw Error(S(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Ul(l, n, t),
                  (l = o.sibling);
              } else l = o.child;
              if (l !== null) l.return = o;
              else
                for (l = o; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((o = l.sibling), o !== null)) {
                    (o.return = l.return), (l = o);
                    break;
                  }
                  l = l.return;
                }
              o = l;
            }
        Se(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        zn(t, n),
        (i = Ze(i)),
        (r = r(i)),
        (t.flags |= 1),
        Se(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = He(r, t.pendingProps)),
        (i = He(r.type, i)),
        eu(e, t, r, i, n)
      );
    case 15:
      return ud(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : He(r, i)),
        Ni(e, t),
        (t.tag = 1),
        Oe(r) ? ((e = !0), Fi(t)) : (e = !1),
        zn(t, n),
        Uc(t, r, i),
        Vl(t, r, i, n),
        Bl(null, t, r, !0, e, n)
      );
    case 19:
      return hd(e, t, n);
    case 22:
      return cd(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Od(e, t) {
  return nc(e, t);
}
function yh(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ve(e, t, n, r) {
  return new yh(e, t, n, r);
}
function bs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function gh(e) {
  if (typeof e == "function") return bs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === gs)) return 11;
    if (e === ws) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ve(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ji(e, t, n, r, i, o) {
  var l = 2;
  if (((r = e), typeof e == "function")) bs(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case wn:
        return en(n.children, i, o, t);
      case ys:
        (l = 8), (i |= 8);
        break;
      case cl:
        return (
          (e = Ve(12, n, t, i | 2)), (e.elementType = cl), (e.lanes = o), e
        );
      case dl:
        return (e = Ve(13, n, t, i)), (e.elementType = dl), (e.lanes = o), e;
      case fl:
        return (e = Ve(19, n, t, i)), (e.elementType = fl), (e.lanes = o), e;
      case $u:
        return Eo(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Au:
              l = 10;
              break e;
            case Uu:
              l = 9;
              break e;
            case gs:
              l = 11;
              break e;
            case ws:
              l = 14;
              break e;
            case Et:
              (l = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ve(l, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function en(e, t, n, r) {
  return (e = Ve(7, e, r, t)), (e.lanes = n), e;
}
function Eo(e, t, n, r) {
  return (
    (e = Ve(22, e, r, t)),
    (e.elementType = $u),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function rl(e, t, n) {
  return (e = Ve(6, e, null, t)), (e.lanes = n), e;
}
function il(e, t, n) {
  return (
    (t = Ve(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function wh(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Uo(0)),
    (this.expirationTimes = Uo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Uo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ea(e, t, n, r, i, o, l, s, a) {
  return (
    (e = new wh(e, t, n, s, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ve(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    As(o),
    e
  );
}
function _h(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: gn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Id(e) {
  if (!e) return Vt;
  e = e._reactInternals;
  e: {
    if (fn(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Oe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Oe(n)) return Oc(e, n, t);
  }
  return t;
}
function Rd(e, t, n, r, i, o, l, s, a) {
  return (
    (e = ea(n, r, !0, e, i, o, l, s, a)),
    (e.context = Id(null)),
    (n = e.current),
    (r = ke()),
    (i = At(n)),
    (o = ht(r, i)),
    (o.callback = t ?? null),
    Lt(n, o, i),
    (e.current.lanes = i),
    Gr(e, i, r),
    Ie(e, r),
    e
  );
}
function Co(e, t, n, r) {
  var i = t.current,
    o = ke(),
    l = At(i);
  return (
    (n = Id(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = ht(o, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Lt(i, t, l)),
    e !== null && (Xe(e, i, l, o), ki(e, i, l)),
    l
  );
}
function eo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ta(e, t) {
  fu(e, t), (e = e.alternate) && fu(e, t);
}
function xh() {
  return null;
}
var Md =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function na(e) {
  this._internalRoot = e;
}
No.prototype.render = na.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Co(e, t, null, null);
};
No.prototype.unmount = na.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    sn(function () {
      Co(null, e, null, null);
    }),
      (t[yt] = null);
  }
};
function No(e) {
  this._internalRoot = e;
}
No.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = uc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Nt.length && t !== 0 && t < Nt[n].priority; n++);
    Nt.splice(n, 0, e), n === 0 && dc(e);
  }
};
function ra(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function To(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function pu() {}
function Sh(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = eo(l);
        o.call(u);
      };
    }
    var l = Rd(t, r, e, 0, null, !1, !1, "", pu);
    return (
      (e._reactRootContainer = l),
      (e[yt] = l.current),
      Tr(e.nodeType === 8 ? e.parentNode : e),
      sn(),
      l
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = eo(a);
      s.call(u);
    };
  }
  var a = ea(e, 0, !1, null, null, !1, !1, "", pu);
  return (
    (e._reactRootContainer = a),
    (e[yt] = a.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    sn(function () {
      Co(t, a, n, r);
    }),
    a
  );
}
function Po(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var l = o;
    if (typeof i == "function") {
      var s = i;
      i = function () {
        var a = eo(l);
        s.call(a);
      };
    }
    Co(t, l, e, i);
  } else l = Sh(n, t, e, i, r);
  return eo(l);
}
sc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ar(t.pendingLanes);
        n !== 0 &&
          (Ss(t, n | 1), Ie(t, le()), !(W & 6) && ((Bn = le() + 500), Qt()));
      }
      break;
    case 13:
      sn(function () {
        var r = gt(e, 1);
        if (r !== null) {
          var i = ke();
          Xe(r, e, 1, i);
        }
      }),
        ta(e, 1);
  }
};
ks = function (e) {
  if (e.tag === 13) {
    var t = gt(e, 134217728);
    if (t !== null) {
      var n = ke();
      Xe(t, e, 134217728, n);
    }
    ta(e, 134217728);
  }
};
ac = function (e) {
  if (e.tag === 13) {
    var t = At(e),
      n = gt(e, t);
    if (n !== null) {
      var r = ke();
      Xe(n, e, t, r);
    }
    ta(e, t);
  }
};
uc = function () {
  return K;
};
cc = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
Sl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ml(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = go(r);
            if (!i) throw Error(S(90));
            Fu(r), ml(r, i);
          }
        }
      }
      break;
    case "textarea":
      Bu(e, n);
      break;
    case "select":
      (t = n.value), t != null && On(e, !!n.multiple, t, !1);
  }
};
Xu = Xs;
Ju = sn;
var kh = { usingClientEntryPoint: !1, Events: [Jr, kn, go, Yu, Gu, Xs] },
  or = {
    findFiberByHostInstance: Xt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Eh = {
    bundleType: or.bundleType,
    version: or.version,
    rendererPackageName: or.rendererPackageName,
    rendererConfig: or.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = ec(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: or.findFiberByHostInstance || xh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var yi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!yi.isDisabled && yi.supportsFiber)
    try {
      (ho = yi.inject(Eh)), (it = yi);
    } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = kh;
De.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ra(t)) throw Error(S(200));
  return _h(e, t, null, n);
};
De.createRoot = function (e, t) {
  if (!ra(e)) throw Error(S(299));
  var n = !1,
    r = "",
    i = Md;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ea(e, 1, !1, null, null, n, !1, r, i)),
    (e[yt] = t.current),
    Tr(e.nodeType === 8 ? e.parentNode : e),
    new na(t)
  );
};
De.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = ec(t)), (e = e === null ? null : e.stateNode), e;
};
De.flushSync = function (e) {
  return sn(e);
};
De.hydrate = function (e, t, n) {
  if (!To(t)) throw Error(S(200));
  return Po(null, e, t, !0, n);
};
De.hydrateRoot = function (e, t, n) {
  if (!ra(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    l = Md;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Rd(t, null, e, 1, n ?? null, i, !1, o, l)),
    (e[yt] = t.current),
    Tr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new No(t);
};
De.render = function (e, t, n) {
  if (!To(t)) throw Error(S(200));
  return Po(null, e, t, !1, n);
};
De.unmountComponentAtNode = function (e) {
  if (!To(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (sn(function () {
        Po(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[yt] = null);
        });
      }),
      !0)
    : !1;
};
De.unstable_batchedUpdates = Xs;
De.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!To(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Po(e, t, n, !1, r);
};
De.version = "18.2.0-next-9e3b772b8-20220608";
function zd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zd);
    } catch (e) {
      console.error(e);
    }
}
zd(), (Ru.exports = De);
var Ch = Ru.exports,
  hu = Ch;
(al.createRoot = hu.createRoot), (al.hydrateRoot = hu.hydrateRoot);
var Ld = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  mu = pt.createContext && pt.createContext(Ld),
  Nh = ["attr", "size", "title"];
function Th(e, t) {
  if (e == null) return {};
  var n = Ph(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      (r = o[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Ph(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    o;
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function to() {
  return (
    (to = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    to.apply(this, arguments)
  );
}
function vu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function no(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? vu(Object(n), !0).forEach(function (r) {
          jh(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : vu(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function jh(e, t, n) {
  return (
    (t = Oh(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Oh(e) {
  var t = Ih(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function Ih(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dd(e) {
  return (
    e &&
    e.map((t, n) =>
      pt.createElement(t.tag, no({ key: n }, t.attr), Dd(t.child))
    )
  );
}
function pn(e) {
  return (t) =>
    pt.createElement(Rh, to({ attr: no({}, e.attr) }, t), Dd(e.child));
}
function Rh(e) {
  var t = (n) => {
    var { attr: r, size: i, title: o } = e,
      l = Th(e, Nh),
      s = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      pt.createElement(
        "svg",
        to(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          l,
          {
            className: a,
            style: no(no({ color: e.color || n.color }, n.style), e.style),
            height: s,
            width: s,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && pt.createElement("title", null, o),
        e.children
      )
    );
  };
  return mu !== void 0
    ? pt.createElement(mu.Consumer, null, (n) => t(n))
    : t(Ld);
}
function Mh(e) {
  return pn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M175 100v137.8L403.9 98.1c5.3-3.1 12.1.7 12.1 6.9v302c0 6.2-6.7 10-12.1 6.9L175 274.2V412c0 2.2-1.8 4-4 4h-71c-2.2 0-4-1.8-4-4V100c0-2.2 1.8-4 4-4h71c2.2 0 4 1.8 4 4z",
        },
        child: [],
      },
    ],
  })(e);
}
function zh(e) {
  return pn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z",
        },
        child: [],
      },
    ],
  })(e);
}
function Lh(e) {
  return pn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M160 320h12v16c0 8.84 7.16 16 16 16h40c8.84 0 16-7.16 16-16v-16h12c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32V16c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v16c-17.67 0-32 14.33-32 32v224c0 17.67 14.33 32 32 32zm304 128h-1.29C493.24 413.99 512 369.2 512 320c0-105.88-86.12-192-192-192v64c70.58 0 128 57.42 128 128s-57.42 128-128 128H48c-26.51 0-48 21.49-48 48 0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48zm-360-32h208c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z",
        },
        child: [],
      },
    ],
  })(e);
}
function Dh(e) {
  return pn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ad(e) {
  return pn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z",
        },
        child: [],
      },
    ],
  })(e);
}
function Ud(e) {
  return pn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",
        },
        child: [],
      },
    ],
  })(e);
}
function ia(e) {
  return pn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z",
        },
        child: [],
      },
    ],
  })(e);
}
const Ah = ({
    handleReturnToCam: e,
    handleSaveThumbnail: t,
    handleClearLines: n,
  }) =>
    _.jsxs("div", {
      className: "text-white text-center",
      children: [
        _.jsx("button", {
          className: "mx-2",
          title: "Back",
          onClick: e,
          children: _.jsx(Mh, {
            className:
              "bg-violet-800 p-1.5 rounded-md hover:scale-125 w-6 h-6 my-1",
          }),
        }),
        _.jsx("button", {
          className: "mx-2",
          title: "Save",
          onClick: t,
          children: _.jsx(Ad, {
            className:
              "bg-violet-800 p-1.5 rounded-md hover:scale-125 w-6 h-6 my-1",
          }),
        }),
        _.jsx("button", {
          className: "mx-2",
          title: "Trash",
          onClick: n,
          children: _.jsx(ia, {
            className:
              "bg-violet-800 p-1.5 rounded-md hover:scale-125 w-6 h-6 my-1",
          }),
        }),
      ],
    }),
  Uh = ({
    thumbnailUrl: e = [],
    capturedArrowsSet: t,
    onDelete: n,
    onRenderImage: r,
    onShowDermatoscopicWebcam: i,
  }) => {
    const o = Q.useRef(null);
    return (
      Q.useEffect(() => {
        const l = o.current,
          s = l.getContext("2d");
        s.clearRect(0, 0, l.width, l.height);
        const a = new Image();
        (a.src = e),
          (a.onload = () => {
            s.drawImage(a, 0, 0, l.width, l.height),
              t.forEach((u) => {
                const { startPoint: h, endPoint: v } = u,
                  p = Math.atan2(v.y - h.y, v.x - h.x),
                  y = 5;
                s.beginPath(),
                  s.moveTo(h.x * (l.width / 120), h.y * (l.height / 100)),
                  s.lineTo(v.x * (l.width / 120), v.y * (l.height / 100)),
                  (s.strokeStyle = "red"),
                  s.stroke(),
                  s.save(),
                  s.translate(v.x * (l.width / 120), v.y * (l.height / 100)),
                  s.rotate(p),
                  s.beginPath(),
                  s.moveTo(-y, y / 2),
                  s.lineTo(0, 0),
                  s.lineTo(-y, -y / 2),
                  (s.fillStyle = "red"),
                  s.fill(),
                  s.restore();
              });
          });
      }, [e]),
      _.jsxs("div", {
        className: "text-white",
        children: [
          _.jsxs("div", {
            className: "my-1 mx-1",
            children: [
              _.jsx("button", {
                className: "mt-1 mx-1",
                onClick: () => r(e, t),
                title: "See Image",
                children: _.jsx(Ud, {
                  title: "See Image",
                  className:
                    " bg-blue-600 p-1.5 rounded-md hover:scale-125 w-6 h-6",
                }),
              }),
              _.jsx("button", {
                className: "mt-1 mx-1",
                onClick: n,
                title: "Delete Image",
                children: _.jsx(ia, {
                  title: "Delete Image",
                  className:
                    "bg-blue-600 p-1.5 rounded-md hover:scale-125 w-6 h-6",
                }),
              }),
            ],
          }),
          _.jsx("canvas", {
            ref: o,
            width: 256,
            height: 144,
            style: { border: "2px solid #ccc" },
            className: "mx-auto",
          }),
          _.jsx("div", {
            className: "mt-2 mx-1",
            children: _.jsx("button", {
              onClick: () => {
                r(e, t), i(!0);
              },
              title: "Dermatoscopic",
              children: _.jsx(Lh, {
                className:
                  "bg-blue-600 p-1.5 rounded-md hover:scale-125 w-6 h-6",
                title: "Dermatoscopic",
              }),
            }),
          }),
        ],
      })
    );
  },
  $h = ({
    capturedImages: e,
    capturedArrowsSet: t,
    onDeleteImage: n,
    onRenderImage: r,
    onShowDermatoscopicWebcam: i,
  }) =>
    _.jsxs("div", {
      className: "row mx-2 overflow-y-auto max-h-[500px] max-w-full",
      children: [
        _.jsx("h4", {
          className: "font-bold text-white text-center mt-4",
          children: "Clinical Photos",
        }),
        " ",
        e.map((o, l) =>
          _.jsx(
            "div",
            {
              className: "col col-sm-1 mt-1 text-center",
              children: _.jsxs("div", {
                className: "bg-dark p-1",
                children: [
                  _.jsxs("p", {
                    className: "text-white",
                    children: ["Photo ", l + 1],
                  }),
                  _.jsx(Uh, {
                    title: `Image ${l + 1}`,
                    thumbnailUrl: o,
                    capturedArrowsSet: t[l],
                    onDelete: () => n(l),
                    onRenderImage: r,
                    onShowDermatoscopicWebcam: i,
                  }),
                ],
              }),
            },
            l
          )
        ),
      ],
    }),
  yu = (e) => {
    let t;
    const n = new Set(),
      r = (h, v) => {
        const p = typeof h == "function" ? h(t) : h;
        if (!Object.is(p, t)) {
          const y = t;
          (t =
            v ?? (typeof p != "object" || p === null)
              ? p
              : Object.assign({}, t, p)),
            n.forEach((m) => m(t, y));
        }
      },
      i = () => t,
      a = {
        setState: r,
        getState: i,
        getInitialState: () => u,
        subscribe: (h) => (n.add(h), () => n.delete(h)),
        destroy: () => {
          n.clear();
        },
      },
      u = (t = e(r, i, a));
    return a;
  },
  Vh = (e) => (e ? yu(e) : yu);
var $d = { exports: {} },
  Vd = {},
  Fd = { exports: {} },
  Zd = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Wn = Q;
function Fh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Zh = typeof Object.is == "function" ? Object.is : Fh,
  Bh = Wn.useState,
  Wh = Wn.useEffect,
  Hh = Wn.useLayoutEffect,
  Qh = Wn.useDebugValue;
function Kh(e, t) {
  var n = t(),
    r = Bh({ inst: { value: n, getSnapshot: t } }),
    i = r[0].inst,
    o = r[1];
  return (
    Hh(
      function () {
        (i.value = n), (i.getSnapshot = t), ol(i) && o({ inst: i });
      },
      [e, n, t]
    ),
    Wh(
      function () {
        return (
          ol(i) && o({ inst: i }),
          e(function () {
            ol(i) && o({ inst: i });
          })
        );
      },
      [e]
    ),
    Qh(n),
    n
  );
}
function ol(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Zh(e, n);
  } catch {
    return !0;
  }
}
function Yh(e, t) {
  return t();
}
var Gh =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Yh
    : Kh;
Zd.useSyncExternalStore =
  Wn.useSyncExternalStore !== void 0 ? Wn.useSyncExternalStore : Gh;
Fd.exports = Zd;
var Xh = Fd.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var jo = Q,
  Jh = Xh;
function qh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var bh = typeof Object.is == "function" ? Object.is : qh,
  em = Jh.useSyncExternalStore,
  tm = jo.useRef,
  nm = jo.useEffect,
  rm = jo.useMemo,
  im = jo.useDebugValue;
Vd.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
  var o = tm(null);
  if (o.current === null) {
    var l = { hasValue: !1, value: null };
    o.current = l;
  } else l = o.current;
  o = rm(
    function () {
      function a(y) {
        if (!u) {
          if (((u = !0), (h = y), (y = r(y)), i !== void 0 && l.hasValue)) {
            var m = l.value;
            if (i(m, y)) return (v = m);
          }
          return (v = y);
        }
        if (((m = v), bh(h, y))) return m;
        var g = r(y);
        return i !== void 0 && i(m, g) ? m : ((h = y), (v = g));
      }
      var u = !1,
        h,
        v,
        p = n === void 0 ? null : n;
      return [
        function () {
          return a(t());
        },
        p === null
          ? void 0
          : function () {
              return a(p());
            },
      ];
    },
    [t, n, r, i]
  );
  var s = em(e, o[0], o[1]);
  return (
    nm(
      function () {
        (l.hasValue = !0), (l.value = s);
      },
      [s]
    ),
    im(s),
    s
  );
};
$d.exports = Vd;
var om = $d.exports;
const lm = us(om),
  { useDebugValue: sm } = pt,
  { useSyncExternalStoreWithSelector: am } = lm;
const um = (e) => e;
function cm(e, t = um, n) {
  const r = am(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return sm(r), r;
}
const gu = (e) => {
    const t = typeof e == "function" ? Vh(e) : e,
      n = (r, i) => cm(t, r, i);
    return Object.assign(n, t), n;
  },
  Xn = (e) => (e ? gu(e) : gu),
  oa = Xn((e) => ({
    PatientData: {},
    addPatient: (t) => e((n) => ({ PatientData: { ...n.addPatient, ...t } })),
    getState: () => ({ PatientData: oa.getState().PatientData }),
  })),
  dm = () => {
    const [e, t] = Q.useState();
    return (
      Q.useEffect(() => {
        t(
          (() => {
            const { patient: r } = window;
            return r && oa.getState().addPatient({ current: r }), r;
          })()
        );
      }, [window.patient]),
      _.jsx("div", {
        children: _.jsxs("div", {
          className: "bg-userdata",
          children: [
            _.jsx("div", {
              className: "font-bold text-center mt-2 mb-2",
              children: "Patient Data",
            }),
            _.jsx("div", {
              className: "text-center mt-2 mb-2",
              children: "DEMO",
            }),
            _.jsx("div", { className: "", children: JSON.stringify(e) }),
          ],
        }),
      })
    );
  };
var Bd = { exports: {} };
(function (e, t) {
  (function (r, i) {
    e.exports = i(Q);
  })(bd, function (n) {
    return (function (r) {
      var i = {};
      function o(l) {
        if (i[l]) return i[l].exports;
        var s = (i[l] = { i: l, l: !1, exports: {} });
        return r[l].call(s.exports, s, s.exports, o), (s.l = !0), s.exports;
      }
      return (
        (o.m = r),
        (o.c = i),
        (o.d = function (l, s, a) {
          o.o(l, s) || Object.defineProperty(l, s, { enumerable: !0, get: a });
        }),
        (o.r = function (l) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(l, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(l, "__esModule", { value: !0 });
        }),
        (o.t = function (l, s) {
          if (
            (s & 1 && (l = o(l)),
            s & 8 || (s & 4 && typeof l == "object" && l && l.__esModule))
          )
            return l;
          var a = Object.create(null);
          if (
            (o.r(a),
            Object.defineProperty(a, "default", { enumerable: !0, value: l }),
            s & 2 && typeof l != "string")
          )
            for (var u in l)
              o.d(
                a,
                u,
                function (h) {
                  return l[h];
                }.bind(null, u)
              );
          return a;
        }),
        (o.n = function (l) {
          var s =
            l && l.__esModule
              ? function () {
                  return l.default;
                }
              : function () {
                  return l;
                };
          return o.d(s, "a", s), s;
        }),
        (o.o = function (l, s) {
          return Object.prototype.hasOwnProperty.call(l, s);
        }),
        (o.p = ""),
        o((o.s = "./src/react-webcam.tsx"))
      );
    })({
      "./src/react-webcam.tsx": function (r, i, o) {
        o.r(i);
        var l = o("react"),
          s = (function () {
            var p = function (y, m) {
              return (
                (p =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (g, P) {
                      g.__proto__ = P;
                    }) ||
                  function (g, P) {
                    for (var d in P) P.hasOwnProperty(d) && (g[d] = P[d]);
                  }),
                p(y, m)
              );
            };
            return function (y, m) {
              p(y, m);
              function g() {
                this.constructor = y;
              }
              y.prototype =
                m === null
                  ? Object.create(m)
                  : ((g.prototype = m.prototype), new g());
            };
          })(),
          a = function () {
            return (
              (a =
                Object.assign ||
                function (p) {
                  for (var y, m = 1, g = arguments.length; m < g; m++) {
                    y = arguments[m];
                    for (var P in y)
                      Object.prototype.hasOwnProperty.call(y, P) &&
                        (p[P] = y[P]);
                  }
                  return p;
                }),
              a.apply(this, arguments)
            );
          },
          u = function (p, y) {
            var m = {};
            for (var g in p)
              Object.prototype.hasOwnProperty.call(p, g) &&
                y.indexOf(g) < 0 &&
                (m[g] = p[g]);
            if (p != null && typeof Object.getOwnPropertySymbols == "function")
              for (
                var P = 0, g = Object.getOwnPropertySymbols(p);
                P < g.length;
                P++
              )
                y.indexOf(g[P]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(p, g[P]) &&
                  (m[g[P]] = p[g[P]]);
            return m;
          };
        (function () {
          typeof window > "u" ||
            (navigator.mediaDevices === void 0 && (navigator.mediaDevices = {}),
            navigator.mediaDevices.getUserMedia === void 0 &&
              (navigator.mediaDevices.getUserMedia = function (y) {
                var m =
                  navigator.getUserMedia ||
                  navigator.webkitGetUserMedia ||
                  navigator.mozGetUserMedia ||
                  navigator.msGetUserMedia;
                return m
                  ? new Promise(function (g, P) {
                      m.call(navigator, y, g, P);
                    })
                  : Promise.reject(
                      new Error(
                        "getUserMedia is not implemented in this browser"
                      )
                    );
              }));
        })();
        function h() {
          return !!(
            navigator.mediaDevices && navigator.mediaDevices.getUserMedia
          );
        }
        var v = (function (p) {
          s(y, p);
          function y(m) {
            var g = p.call(this, m) || this;
            return (
              (g.canvas = null),
              (g.ctx = null),
              (g.requestUserMediaId = 0),
              (g.unmounted = !1),
              (g.state = { hasUserMedia: !1 }),
              g
            );
          }
          return (
            (y.prototype.componentDidMount = function () {
              var m = this,
                g = m.state,
                P = m.props;
              if (((this.unmounted = !1), !h())) {
                P.onUserMediaError("getUserMedia not supported");
                return;
              }
              g.hasUserMedia || this.requestUserMedia(),
                P.children &&
                  typeof P.children != "function" &&
                  console.warn("children must be a function");
            }),
            (y.prototype.componentDidUpdate = function (m) {
              var g = this.props;
              if (!h()) {
                g.onUserMediaError("getUserMedia not supported");
                return;
              }
              var P =
                  JSON.stringify(m.audioConstraints) !==
                  JSON.stringify(g.audioConstraints),
                d =
                  JSON.stringify(m.videoConstraints) !==
                  JSON.stringify(g.videoConstraints),
                c = m.minScreenshotWidth !== g.minScreenshotWidth,
                f = m.minScreenshotHeight !== g.minScreenshotHeight;
              (d || c || f) && ((this.canvas = null), (this.ctx = null)),
                (P || d) && (this.stopAndCleanup(), this.requestUserMedia());
            }),
            (y.prototype.componentWillUnmount = function () {
              (this.unmounted = !0), this.stopAndCleanup();
            }),
            (y.stopMediaStream = function (m) {
              m &&
                (m.getVideoTracks && m.getAudioTracks
                  ? (m.getVideoTracks().map(function (g) {
                      m.removeTrack(g), g.stop();
                    }),
                    m.getAudioTracks().map(function (g) {
                      m.removeTrack(g), g.stop();
                    }))
                  : m.stop());
            }),
            (y.prototype.stopAndCleanup = function () {
              var m = this.state;
              m.hasUserMedia &&
                (y.stopMediaStream(this.stream),
                m.src && window.URL.revokeObjectURL(m.src));
            }),
            (y.prototype.getScreenshot = function (m) {
              var g = this,
                P = g.state,
                d = g.props;
              if (!P.hasUserMedia) return null;
              var c = this.getCanvas(m);
              return c && c.toDataURL(d.screenshotFormat, d.screenshotQuality);
            }),
            (y.prototype.getCanvas = function (m) {
              var g = this,
                P = g.state,
                d = g.props;
              if (!this.video || !P.hasUserMedia || !this.video.videoHeight)
                return null;
              if (!this.ctx) {
                var c = this.video.videoWidth,
                  f = this.video.videoHeight;
                if (!this.props.forceScreenshotSourceSize) {
                  var w = c / f;
                  (c = d.minScreenshotWidth || this.video.clientWidth),
                    (f = c / w),
                    d.minScreenshotHeight &&
                      f < d.minScreenshotHeight &&
                      ((f = d.minScreenshotHeight), (c = f * w));
                }
                (this.canvas = document.createElement("canvas")),
                  (this.canvas.width = (m == null ? void 0 : m.width) || c),
                  (this.canvas.height = (m == null ? void 0 : m.height) || f),
                  (this.ctx = this.canvas.getContext("2d"));
              }
              var E = this,
                C = E.ctx,
                x = E.canvas;
              return (
                C &&
                  x &&
                  ((x.width = (m == null ? void 0 : m.width) || x.width),
                  (x.height = (m == null ? void 0 : m.height) || x.height),
                  d.mirrored && (C.translate(x.width, 0), C.scale(-1, 1)),
                  (C.imageSmoothingEnabled = d.imageSmoothing),
                  C.drawImage(
                    this.video,
                    0,
                    0,
                    (m == null ? void 0 : m.width) || x.width,
                    (m == null ? void 0 : m.height) || x.height
                  ),
                  d.mirrored && (C.scale(-1, 1), C.translate(-x.width, 0))),
                x
              );
            }),
            (y.prototype.requestUserMedia = function () {
              var m = this,
                g = this.props,
                P = function (f, w) {
                  var E = { video: typeof w < "u" ? w : !0 };
                  g.audio && (E.audio = typeof f < "u" ? f : !0),
                    m.requestUserMediaId++;
                  var C = m.requestUserMediaId;
                  navigator.mediaDevices
                    .getUserMedia(E)
                    .then(function (x) {
                      m.unmounted || C !== m.requestUserMediaId
                        ? y.stopMediaStream(x)
                        : m.handleUserMedia(null, x);
                    })
                    .catch(function (x) {
                      m.handleUserMedia(x);
                    });
                };
              if ("mediaDevices" in navigator)
                P(g.audioConstraints, g.videoConstraints);
              else {
                var d = function (f) {
                    return { optional: [{ sourceId: f }] };
                  },
                  c = function (f) {
                    var w = f.deviceId;
                    return typeof w == "string"
                      ? w
                      : Array.isArray(w) && w.length > 0
                      ? w[0]
                      : typeof w == "object" && w.ideal
                      ? w.ideal
                      : null;
                  };
                MediaStreamTrack.getSources(function (f) {
                  var w = null,
                    E = null;
                  f.forEach(function (I) {
                    I.kind === "audio"
                      ? (w = I.id)
                      : I.kind === "video" && (E = I.id);
                  });
                  var C = c(g.audioConstraints);
                  C && (w = C);
                  var x = c(g.videoConstraints);
                  x && (E = x), P(d(w), d(E));
                });
              }
            }),
            (y.prototype.handleUserMedia = function (m, g) {
              var P = this.props;
              if (m || !g) {
                this.setState({ hasUserMedia: !1 }), P.onUserMediaError(m);
                return;
              }
              this.stream = g;
              try {
                this.video && (this.video.srcObject = g),
                  this.setState({ hasUserMedia: !0 });
              } catch {
                this.setState({
                  hasUserMedia: !0,
                  src: window.URL.createObjectURL(g),
                });
              }
              P.onUserMedia(g);
            }),
            (y.prototype.render = function () {
              var m = this,
                g = this,
                P = g.state,
                d = g.props,
                c = d.audio;
              d.forceScreenshotSourceSize;
              var f = d.disablePictureInPicture;
              d.onUserMedia,
                d.onUserMediaError,
                d.screenshotFormat,
                d.screenshotQuality,
                d.minScreenshotWidth,
                d.minScreenshotHeight,
                d.audioConstraints,
                d.videoConstraints,
                d.imageSmoothing;
              var w = d.mirrored,
                E = d.style,
                C = E === void 0 ? {} : E,
                x = d.children,
                I = u(d, [
                  "audio",
                  "forceScreenshotSourceSize",
                  "disablePictureInPicture",
                  "onUserMedia",
                  "onUserMediaError",
                  "screenshotFormat",
                  "screenshotQuality",
                  "minScreenshotWidth",
                  "minScreenshotHeight",
                  "audioConstraints",
                  "videoConstraints",
                  "imageSmoothing",
                  "mirrored",
                  "style",
                  "children",
                ]),
                B = w
                  ? a(a({}, C), {
                      transform: (C.transform || "") + " scaleX(-1)",
                    })
                  : C,
                U = { getScreenshot: this.getScreenshot.bind(this) };
              return l.createElement(
                l.Fragment,
                null,
                l.createElement(
                  "video",
                  a(
                    {
                      autoPlay: !0,
                      disablePictureInPicture: f,
                      src: P.src,
                      muted: !c,
                      playsInline: !0,
                      ref: function (ve) {
                        m.video = ve;
                      },
                      style: B,
                    },
                    I
                  )
                ),
                x && x(U)
              );
            }),
            (y.defaultProps = {
              audio: !1,
              disablePictureInPicture: !1,
              forceScreenshotSourceSize: !1,
              imageSmoothing: !0,
              mirrored: !1,
              onUserMedia: function () {},
              onUserMediaError: function () {},
              screenshotFormat: "image/webp",
              screenshotQuality: 0.92,
            }),
            y
          );
        })(l.Component);
        i.default = v;
      },
      react: function (r, i) {
        r.exports = n;
      },
    }).default;
  });
})(Bd);
var fm = Bd.exports;
const pm = us(fm),
  hm = () =>
    _.jsxs("div", {
      class: "flex flex-row gap-2 justify-center items-center",
      children: [
        _.jsx("div", {
          class: "w-4 h-4 rounded-full bg-blue-700 animate-bounce",
        }),
        _.jsx("div", {
          class:
            "w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]",
        }),
        _.jsx("div", {
          class:
            "w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]",
        }),
      ],
    }),
  mm = ({ handleCapture: e, loading: t }) =>
    _.jsx("div", {
      children: _.jsx("button", {
        className: "text-white mt-2",
        onClick: e,
        disabled: t,
        title: "Capture",
        children: _.jsx(zh, {
          className: "bg-red-900 p-2 rounded-md hover:scale-125 w-9 h-9 my-1",
          title: "Capture",
        }),
      }),
    }),
  vm = ({
    handleShowDermatoscopicWebcam: e,
    handleShowClinicalWebcam: t,
    handleCapture: n,
  }) => {
    const r = () => {
        n(), e(!1);
      },
      i = () => {
        t(!1);
      };
    return _.jsxs("div", {
      children: [
        _.jsx("button", {
          className: "text-white mt-2",
          children: _.jsx(Ad, {
            onClick: r,
            className: "bg-red-900 p-2 rounded-md hover:scale-125 w-9 h-9 my-1",
            title: "Save Image",
          }),
        }),
        _.jsx("button", {
          className: "text-white mt-2",
          children: _.jsx(Dh, {
            onClick: i,
            className:
              "bg-red-900 p-2 rounded-md hover:scale-125 w-9 h-9 my-1 mx-2",
            title: "Back",
          }),
        }),
      ],
    });
  },
  wu = ({
    onShowDermatoscopicWebcam: e,
    handleShowClinicalWebcam: t,
    handleShowDermatoscopicWebcam: n,
    title: r = "Clinical View",
    onCapture: i,
    handleClearLines: o = () => {},
  }) => {
    const l = Q.useRef(null),
      [s, a] = Q.useState(!0),
      [u, h] = Q.useState(null),
      v = async () => {
        try {
          const y = await navigator.mediaDevices.getUserMedia({
            video: { width: 2560, height: 1440 },
          });
          (l.current.srcObject = y), a(!1), h(null);
        } catch (y) {
          console.error("Error accessing webcam:", y),
            h("Error accessing webcam. Trying awaing"),
            setTimeout(() => {
              v();
            }, 3e3);
        }
      };
    Q.useEffect(
      () => (
        v(),
        () => {
          var m;
          const y = (m = l.current) == null ? void 0 : m.srcObject;
          y && y.getTracks().forEach((P) => P.stop());
        }
      ),
      []
    );
    const p = () => {
      const y = l.current.getScreenshot("image/png");
      i(y), o();
    };
    return _.jsxs("div", {
      className: "card-body mt-1",
      children: [
        _.jsx("h2", { className: "text-white my-2 font-bold", children: r }),
        u && _.jsx("p", { children: u }),
        _.jsx(pm, {
          audio: !1,
          ref: l,
          mirrored: !0,
          style: { width: "100%", height: "auto" },
          screenshotFormat: "image/png",
          videoConstraints: { width: 1920, height: 1080 },
        }),
        _.jsx("div", {
          className: "row",
          children: _.jsx("div", {
            className: "col col-md-12 text-center",
            children: s
              ? !u && _.jsx(hm, {})
              : e
              ? _.jsx(vm, {
                  handleShowDermatoscopicWebcam: n,
                  handleShowClinicalWebcam: t,
                  onShowDermatoscopicWebcam: e,
                  handleCapture: p,
                })
              : _.jsx(mm, { handleCapture: p, loading: s }),
          }),
        }),
      ],
    });
  },
  ym = ({ description: e, onDescriptionChange: t }) =>
    _.jsx("div", {
      children: _.jsx("div", {
        className: "text-black",
        children: _.jsx("input", {
          type: "text",
          className: "rounded-md px-3 py-1 w-64 text-center",
          placeholder: "Input a arrow tag",
          value: e,
          onChange: (n) => t(n.target.value),
        }),
      }),
    }),
  gm = ({
    lines: e,
    onArrowDescriptions: t,
    onDeleteArrow: n,
    onArrowHover: r,
    onArrowHoverOff: i,
  }) => {
    const [o, l] = Q.useState(new Array(e.length).fill("")),
      s = (v) => {
        n(v);
        const p = [...o];
        p.splice(v, 1), l(p), t(o);
      },
      a = (v) => {
        r(v);
      },
      u = () => {
        i();
      },
      h = (v, p) => {
        const y = [...o];
        (y[v] = p), l(y), t(y);
      };
    return _.jsx("div", {
      className: "mt-2 overflow-y-scroll max-h-[500px] max-w-screen-md",
      children: _.jsxs("div", {
        className: "text-white text-center",
        children: [
          _.jsxs("div", {
            className: "mt-2",
            children: [
              " ",
              _.jsx("h4", {
                className: "font-bold",
                children: "Descriptions List",
              }),
              " ",
            ],
          }),
          _.jsx("ul", {
            className: "list-group list-group-flush bg-dark",
            children: e.map((v, p) =>
              _.jsx(
                "li",
                {
                  className: "list-group-item mx-2 bg-dark",
                  style: { cursor: "pointer" },
                  onMouseOver: () => {
                    a(p);
                  },
                  onMouseLeave: u,
                  children: _.jsxs("div", {
                    className: "input-group mb-3",
                    children: [
                      "Arrow ",
                      p + 1,
                      _.jsxs("div", {
                        className: "my-2",
                        children: [
                          _.jsx("button", {
                            className: "mx-2",
                            children: _.jsx(Ud, {
                              className:
                                "bg-teal-800 p-1.5 rounded-md hover:scale-125 w-6 h-6 bg-",
                              title: "Search",
                            }),
                          }),
                          _.jsx("button", {
                            className: "mx-2",
                            onClick: () => s(p),
                            children: _.jsx(ia, {
                              className:
                                "bg-teal-800 p-1.5 rounded-md hover:scale-125 w-6 h-6",
                              title: "Trash",
                            }),
                          }),
                        ],
                      }),
                      _.jsx(ym, {
                        description: o[p],
                        onDescriptionChange: (y) => h(p, y),
                      }),
                    ],
                  }),
                },
                p
              )
            ),
          }),
        ],
      }),
    });
  },
  ts = Xn((e) => ({
    ArrowCoordinates: {},
    addArrowCoordinates: (t) =>
      e((n) => ({ ArrowCoordinates: { ...n.ArrowCoordinates, ...t } })),
    getState: () => ({ ArrowCoordinates: ts.getState().ArrowCoordinates }),
  })),
  ns = Xn((e) => ({
    ArrowDescriptions: {},
    addArrowDescriptions: (t) =>
      e((n) => ({ ArrowDescriptions: { ...n.addArrowDescriptions, ...t } })),
    getState: () => ({ ArrowDescriptions: ns.getState().ArrowDescriptions }),
  })),
  rs = Xn((e) => ({
    ClinicalImage: {},
    addClinicalImage: (t) =>
      e((n) => ({ ClinicalImage: { ...n.addClinicalImage, ...t } })),
    getState: () => ({ ClinicalImage: rs.getState().ClinicalImage }),
  })),
  is = Xn((e) => ({
    DermatoscopicImage: {},
    addDermatoscopicImage: (t) =>
      e((n) => ({ DermatoscopicImage: { ...n.addDermatoscopicImage, ...t } })),
    getState: () => ({ DermatoscopicImage: is.getState().DermatoscopicImage }),
  })),
  Wd = Xn((e) => ({
    StudyData: {},
    addStudy: (t) => e((n) => ({ study: { ...n.addStudy, ...t } })),
    getState: () => ({ StudyData: Wd.getState().StudyData }),
  }));
const wm = ({ arrowColor: e, resetApp: t }) => {
  const n = Q.useRef(null),
    r = Q.useRef(null),
    i = Q.useRef(null),
    o = Q.useRef(!1),
    l = Q.useRef(new Image()),
    [s, a] = Q.useState(!1),
    [u, h] = Q.useState(null),
    [v, p] = Q.useState(null),
    [y, m] = Q.useState([]),
    [g, P] = Q.useState([]),
    [d, c] = Q.useState(!1),
    [f, w] = Q.useState(null),
    [E, C] = Q.useState(!0),
    [x, I] = Q.useState([]);
  Q.useEffect(() => {
    const R = r.current;
    if (R)
      return (
        (i.current = R.getContext("2d")),
        (l.current.src = v),
        (l.current.onload = () => {
          i.current.drawImage(l.current, 0, 0, R.width, R.height);
        }),
        R.addEventListener("mousedown", U),
        R.addEventListener("mousemove", ve),
        R.addEventListener("mouseup", St),
        () => {
          R.removeEventListener("mousedown", U),
            R.removeEventListener("mousemove", ve),
            R.removeEventListener("mouseup", St);
        }
      );
  }, [v, x, d]);
  const B = () => {
      i.current.clearRect(0, 0, r.current.width, r.current.height),
        i.current.drawImage(l.current, 0, 0, r.current.width, r.current.height),
        x.forEach((R, F) => {
          const Y = Math.atan2(
            R.endPoint.y - R.startPoint.y,
            R.endPoint.x - R.startPoint.x
          );
          let fe = 10;
          i.current.beginPath(),
            i.current.moveTo(R.startPoint.x, R.startPoint.y),
            i.current.lineTo(R.endPoint.x, R.endPoint.y),
            F === u
              ? ((fe = 15), (i.current.lineWidth = 7))
              : ((fe = 10), (i.current.lineWidth = 8)),
            (i.current.strokeStyle = e || "black"),
            i.current.stroke(),
            (i.current.lineWidth = 8),
            i.current.save(),
            i.current.translate(R.endPoint.x, R.endPoint.y),
            i.current.rotate(Y),
            i.current.beginPath(),
            i.current.moveTo(-fe, fe / 2),
            i.current.lineTo(0, 0),
            i.current.lineTo(-fe, -fe / 2),
            (i.current.fillStyle = e || "black"),
            i.current.fill(),
            i.current.restore(),
            (i.current.fillStyle = e || "black"),
            (i.current.font = "50px Arial"),
            i.current.fillText(`${F + 1}`, R.endPoint.x + 5, R.endPoint.y - 5);
        });
    },
    U = (R) => {
      if (x.length === 0) {
        const F = r.current.getBoundingClientRect(),
          Y = {
            x: (R.clientX - F.left) * (r.current.width / F.width),
            y: (R.clientY - F.top) * (r.current.height / F.height),
          };
        (o.current = !0), I((fe) => [...fe, { startPoint: Y, endPoint: Y }]);
      }
    },
    ve = (R) => {
      if (!o.current) return;
      const F = r.current.getBoundingClientRect(),
        Y = {
          x: (R.clientX - F.left) * (r.current.width / F.width),
          y: (R.clientY - F.top) * (r.current.height / F.height),
        };
      I((fe) => {
        const Ro = [...fe];
        return (Ro[Ro.length - 1].endPoint = Y), Ro;
      }),
        B();
    },
    St = () => {
      (o.current = !1), B();
    },
    Kt = () => {
      p(n.current), I([]), B(), a((R) => !R);
    },
    ei = (R) => {
      I((F) => F.filter((Y, fe) => fe !== R)), B(), a((F) => !F);
    },
    Io = (R) => {
      h(R), B();
    },
    Jn = () => {
      h(null), B();
    },
    hn = (R) => {
      (n.current = R), p(R), C(!1);
    },
    j = () => {
      x.splice(0, x.length), B(), a((R) => !R), C(!0);
    },
    D = () => {
      const R = r.current.toDataURL(),
        F = x.map((Y, fe) => ({
          arrowNumber: fe + 1,
          startPoint: { ...Y.startPoint },
          endPoint: { ...Y.endPoint },
        }));
      m([...y, R]),
        P([...g, F]),
        x.splice(0, x.length),
        B(),
        p(n.current),
        a((Y) => !Y);
    },
    $ = (R) => {
      const F = [...y],
        Y = [...g];
      F.splice(R, 1), Y.splice(R, 1), m(F), P(Y);
    },
    b = (R, F) => {
      p(R), x.splice(0, x.length), x.push(...F), B(), a((Y) => !Y), C(!1);
    },
    oe = (R = !0) => {
      rs.getState().addClinicalImage({ current: l.current.src }),
        ts.getState().addArrowCoordinates({ current: x }),
        R ||
          (is.getState().addDermatoscopicImage({ current: n.current }),
          (window.currentStudy = {
            PatientData: oa.getState().PatientData.current,
            StudyData: Wd.getState().StudyData.current,
            ArrowCoordinates: ts.getState().ArrowCoordinates.current,
            ArrowDescriptions: ns.getState().ArrowDescriptions.current,
            ClinicalImage: rs.getState().ClinicalImage.current,
            DermatoscopicImage: is.getState().DermatoscopicImage.current,
            AppVisibiltyState: () => {
              const F = document.createElement("link");
              (F.rel = "stylesheet"),
                (F.type = "text/css"),
                (F.href = "${def:context}/bootstrap.css"),
                document.head.appendChild(F);
              const Y = document.createElement("link");
              (Y.rel = "stylesheet"),
                (Y.href = "${def:context}/dinamica.css"),
                document.head.appendChild(Y);
              const fe = document.querySelector(
                'link[href*="/styleDermatologyCamApp.css"]'
              );
              return (
                fe && fe.remove(),
                (document.getElementById("root").hidden = !0),
                { status: !0 }
              );
            },
          }),
          console.log(window.currentStudy)),
        c(R);
    },
    mn = (R = !0) => {
      c(R);
    },
    at = (R) => {
      w({ descriptions: R }),
        ns.getState().addArrowDescriptions({ current: R });
    };
  return _.jsx("div", {
    className: "flex flex-col mt-8",
    children: E
      ? _.jsxs("div", {
          className: "flex mx-auto justify-center",
          children: [
            _.jsx("div", {
              className:
                "text-white w-1/4 p-2 text-center bg-canvas rounded-md my-2 mx-2",
              children: _.jsx(dm, {}),
            }),
            _.jsx("div", {
              className: "w-2/3 text-center my-2 mx-2 p-2 rounded-md bg-canvas",
              children: _.jsx("div", {
                className: "card card-body text-center bg-dark",
                children: _.jsx(wu, {
                  onCapture: hn,
                  handleShowClinicalWebcam: t,
                }),
              }),
            }),
          ],
        })
      : _.jsxs("div", {
          className: "flex justify-center",
          children: [
            !!d &&
              _.jsx("div", {
                className: "flex mx-auto justify-center",
                children: _.jsx("div", {
                  className:
                    "w-2/1  text-center my-2 ml-6 p-1 rounded-md bg-canvas",
                  children: _.jsx("div", {
                    className: "card card-body text-center bg-dark",
                    children: _.jsx(wu, {
                      capturedArrowsSet: g,
                      onArrowDescriptions: f,
                      onShowDermatoscopicWebcam: d,
                      handleShowClinicalWebcam: mn,
                      handleShowDermatoscopicWebcam: oe,
                      title: "Dermatoscopic Live View",
                      onCapture: hn,
                    }),
                  }),
                }),
              }),
            _.jsxs("div", {
              className: "flex justify-center",
              children: [
                _.jsxs("div", {
                  className: `${
                    d ? "w-2/3" : "w-2/5"
                  }  my-2 mx-2 p-2 rounded-md bg-canvas`,
                  children: [
                    _.jsxs("div", {
                      className: "",
                      children: [
                        _.jsx("h2", {
                          className: "text-center text-white font-bold my-1",
                          children: "Captured Clinical Image",
                        }),
                        _.jsx("canvas", {
                          ref: r,
                          width: 2560,
                          height: 1440,
                          className: "canvas-container",
                        }),
                      ],
                    }),
                    !d &&
                      _.jsx(_.Fragment, {
                        children: _.jsx("div", {
                          className: "mt-2",
                          children: _.jsx(Ah, {
                            handleReturnToCam: j,
                            handleSaveThumbnail: D,
                            handleClearLines: Kt,
                          }),
                        }),
                      }),
                  ],
                }),
                !d &&
                  _.jsxs(_.Fragment, {
                    children: [
                      _.jsx("div", {
                        className: "w-1/6 p-2 my-2 mx-1 rounded-md bg-canvas",
                        children: _.jsx(gm, {
                          lines: x,
                          onArrowDescriptions: at,
                          onDeleteArrow: ei,
                          onArrowHover: Io,
                          onArrowHoverOff: Jn,
                        }),
                      }),
                      _.jsx("div", {
                        className: "w-1/6 p-2 my-2 mx-1 rounded-md bg-canvas",
                        children: _.jsx($h, {
                          capturedImages: y,
                          capturedArrowsSet: g,
                          onDeleteImage: $,
                          onRenderImage: b,
                          onShowDermatoscopicWebcam: oe,
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
  });
};
var H;
(function (e) {
  e.assertEqual = (i) => i;
  function t(i) {}
  e.assertIs = t;
  function n(i) {
    throw new Error();
  }
  (e.assertNever = n),
    (e.arrayToEnum = (i) => {
      const o = {};
      for (const l of i) o[l] = l;
      return o;
    }),
    (e.getValidEnumValues = (i) => {
      const o = e.objectKeys(i).filter((s) => typeof i[i[s]] != "number"),
        l = {};
      for (const s of o) l[s] = i[s];
      return e.objectValues(l);
    }),
    (e.objectValues = (i) =>
      e.objectKeys(i).map(function (o) {
        return i[o];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (i) => Object.keys(i)
        : (i) => {
            const o = [];
            for (const l in i)
              Object.prototype.hasOwnProperty.call(i, l) && o.push(l);
            return o;
          }),
    (e.find = (i, o) => {
      for (const l of i) if (o(l)) return l;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (i) => Number.isInteger(i)
        : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i);
  function r(i, o = " | ") {
    return i.map((l) => (typeof l == "string" ? `'${l}'` : l)).join(o);
  }
  (e.joinValues = r),
    (e.jsonStringifyReplacer = (i, o) =>
      typeof o == "bigint" ? o.toString() : o);
})(H || (H = {}));
var os;
(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(os || (os = {}));
const N = H.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  Pt = (e) => {
    switch (typeof e) {
      case "undefined":
        return N.undefined;
      case "string":
        return N.string;
      case "number":
        return isNaN(e) ? N.nan : N.number;
      case "boolean":
        return N.boolean;
      case "function":
        return N.function;
      case "bigint":
        return N.bigint;
      case "symbol":
        return N.symbol;
      case "object":
        return Array.isArray(e)
          ? N.array
          : e === null
          ? N.null
          : e.then &&
            typeof e.then == "function" &&
            e.catch &&
            typeof e.catch == "function"
          ? N.promise
          : typeof Map < "u" && e instanceof Map
          ? N.map
          : typeof Set < "u" && e instanceof Set
          ? N.set
          : typeof Date < "u" && e instanceof Date
          ? N.date
          : N.object;
      default:
        return N.unknown;
    }
  },
  k = H.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  _m = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Je extends Error {
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (r) => {
        this.issues = [...this.issues, r];
      }),
      (this.addIssues = (r = []) => {
        this.issues = [...this.issues, ...r];
      });
    const n = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, n)
      : (this.__proto__ = n),
      (this.name = "ZodError"),
      (this.issues = t);
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n =
        t ||
        function (o) {
          return o.message;
        },
      r = { _errors: [] },
      i = (o) => {
        for (const l of o.issues)
          if (l.code === "invalid_union") l.unionErrors.map(i);
          else if (l.code === "invalid_return_type") i(l.returnTypeError);
          else if (l.code === "invalid_arguments") i(l.argumentsError);
          else if (l.path.length === 0) r._errors.push(n(l));
          else {
            let s = r,
              a = 0;
            for (; a < l.path.length; ) {
              const u = l.path[a];
              a === l.path.length - 1
                ? ((s[u] = s[u] || { _errors: [] }), s[u]._errors.push(n(l)))
                : (s[u] = s[u] || { _errors: [] }),
                (s = s[u]),
                a++;
            }
          }
      };
    return i(this), r;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, H.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {},
      r = [];
    for (const i of this.issues)
      i.path.length > 0
        ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i)))
        : r.push(t(i));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Je.create = (e) => new Je(e);
const Dr = (e, t) => {
  let n;
  switch (e.code) {
    case k.invalid_type:
      e.received === N.undefined
        ? (n = "Required")
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case k.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(
        e.expected,
        H.jsonStringifyReplacer
      )}`;
      break;
    case k.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${H.joinValues(e.keys, ", ")}`;
      break;
    case k.invalid_union:
      n = "Invalid input";
      break;
    case k.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${H.joinValues(e.options)}`;
      break;
    case k.invalid_enum_value:
      n = `Invalid enum value. Expected ${H.joinValues(e.options)}, received '${
        e.received
      }'`;
      break;
    case k.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case k.invalid_return_type:
      n = "Invalid function return type";
      break;
    case k.invalid_date:
      n = "Invalid date";
      break;
    case k.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
          ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
          : "endsWith" in e.validation
          ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
          : H.assertNever(e.validation)
        : e.validation !== "regex"
        ? (n = `Invalid ${e.validation}`)
        : (n = "Invalid");
      break;
    case k.too_small:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "more than"
          } ${e.minimum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "over"
          } ${e.minimum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${e.minimum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${new Date(Number(e.minimum))}`)
        : (n = "Invalid input");
      break;
    case k.too_big:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "less than"
          } ${e.maximum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "under"
          } ${e.maximum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "bigint"
        ? (n = `BigInt must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "smaller than or equal to"
              : "smaller than"
          } ${new Date(Number(e.maximum))}`)
        : (n = "Invalid input");
      break;
    case k.custom:
      n = "Invalid input";
      break;
    case k.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case k.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case k.not_finite:
      n = "Number must be finite";
      break;
    default:
      (n = t.defaultError), H.assertNever(e);
  }
  return { message: n };
};
let Hd = Dr;
function xm(e) {
  Hd = e;
}
function ro() {
  return Hd;
}
const io = (e) => {
    const { data: t, path: n, errorMaps: r, issueData: i } = e,
      o = [...n, ...(i.path || [])],
      l = { ...i, path: o };
    let s = "";
    const a = r
      .filter((u) => !!u)
      .slice()
      .reverse();
    for (const u of a) s = u(l, { data: t, defaultError: s }).message;
    return { ...i, path: o, message: i.message || s };
  },
  Sm = [];
function T(e, t) {
  const n = io({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, ro(), Dr].filter(
      (r) => !!r
    ),
  });
  e.common.issues.push(n);
}
class xe {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const i of n) {
      if (i.status === "aborted") return L;
      i.status === "dirty" && t.dirty(), r.push(i.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const i of n) r.push({ key: await i.key, value: await i.value });
    return xe.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const i of n) {
      const { key: o, value: l } = i;
      if (o.status === "aborted" || l.status === "aborted") return L;
      o.status === "dirty" && t.dirty(),
        l.status === "dirty" && t.dirty(),
        o.value !== "__proto__" &&
          (typeof l.value < "u" || i.alwaysSet) &&
          (r[o.value] = l.value);
    }
    return { status: t.value, value: r };
  }
}
const L = Object.freeze({ status: "aborted" }),
  Qd = (e) => ({ status: "dirty", value: e }),
  Ee = (e) => ({ status: "valid", value: e }),
  ls = (e) => e.status === "aborted",
  ss = (e) => e.status === "dirty",
  Ar = (e) => e.status === "valid",
  oo = (e) => typeof Promise < "u" && e instanceof Promise;
var M;
(function (e) {
  (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == "string" ? t : t == null ? void 0 : t.message);
})(M || (M = {}));
class lt {
  constructor(t, n, r, i) {
    (this._cachedPath = []),
      (this.parent = t),
      (this.data = n),
      (this._path = r),
      (this._key = i);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const _u = (e, t) => {
  if (Ar(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new Je(e.common.issues);
      return (this._error = n), this._error;
    },
  };
};
function A(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: i,
  } = e;
  if (t && (n || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return t
    ? { errorMap: t, description: i }
    : {
        errorMap: (l, s) =>
          l.code !== "invalid_type"
            ? { message: s.defaultError }
            : typeof s.data > "u"
            ? { message: r ?? s.defaultError }
            : { message: n ?? s.defaultError },
        description: i,
      };
}
class V {
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this));
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Pt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: Pt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new xe(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Pt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (oo(n)) throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const i = {
        common: {
          issues: [],
          async:
            (r = n == null ? void 0 : n.async) !== null && r !== void 0
              ? r
              : !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Pt(t),
      },
      o = this._parseSync({ data: t, path: i.path, parent: i });
    return _u(i, o);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Pt(t),
      },
      i = this._parse({ data: t, path: r.path, parent: r }),
      o = await (oo(i) ? i : Promise.resolve(i));
    return _u(r, o);
  }
  refine(t, n) {
    const r = (i) =>
      typeof n == "string" || typeof n > "u"
        ? { message: n }
        : typeof n == "function"
        ? n(i)
        : n;
    return this._refinement((i, o) => {
      const l = t(i),
        s = () => o.addIssue({ code: k.custom, ...r(i) });
      return typeof Promise < "u" && l instanceof Promise
        ? l.then((a) => (a ? !0 : (s(), !1)))
        : l
        ? !0
        : (s(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, i) =>
      t(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n), !1)
    );
  }
  _refinement(t) {
    return new et({
      schema: this,
      typeName: z.ZodEffects,
      effect: { type: "refinement", refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return mt.create(this, this._def);
  }
  nullable() {
    return cn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return qe.create(this, this._def);
  }
  promise() {
    return Qn.create(this, this._def);
  }
  or(t) {
    return Fr.create([this, t], this._def);
  }
  and(t) {
    return Zr.create(this, t, this._def);
  }
  transform(t) {
    return new et({
      ...A(this._def),
      schema: this,
      typeName: z.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Kr({
      ...A(this._def),
      innerType: this,
      defaultValue: n,
      typeName: z.ZodDefault,
    });
  }
  brand() {
    return new Yd({ typeName: z.ZodBranded, type: this, ...A(this._def) });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new uo({
      ...A(this._def),
      innerType: this,
      catchValue: n,
      typeName: z.ZodCatch,
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({ ...this._def, description: t });
  }
  pipe(t) {
    return br.create(this, t);
  }
  readonly() {
    return fo.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const km = /^c[^\s-]{8,}$/i,
  Em = /^[a-z][a-z0-9]*$/,
  Cm = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  Nm =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Tm =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Pm = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ll;
const jm =
    /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
  Om =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  Im = (e) =>
    e.precision
      ? e.offset
        ? new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`
          )
        : new RegExp(
            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`
          )
      : e.precision === 0
      ? e.offset
        ? new RegExp(
            "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$"
          )
        : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$")
      : e.offset
      ? new RegExp(
          "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$"
        )
      : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Rm(e, t) {
  return !!(
    ((t === "v4" || !t) && jm.test(e)) ||
    ((t === "v6" || !t) && Om.test(e))
  );
}
class Ye extends V {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== N.string)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        T(o, {
          code: k.invalid_type,
          expected: N.string,
          received: o.parsedType,
        }),
        L
      );
    }
    const r = new xe();
    let i;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value &&
          ((i = this._getOrReturnCtx(t, i)),
          T(i, {
            code: k.too_small,
            minimum: o.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "max")
        t.data.length > o.value &&
          ((i = this._getOrReturnCtx(t, i)),
          T(i, {
            code: k.too_big,
            maximum: o.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "length") {
        const l = t.data.length > o.value,
          s = t.data.length < o.value;
        (l || s) &&
          ((i = this._getOrReturnCtx(t, i)),
          l
            ? T(i, {
                code: k.too_big,
                maximum: o.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: o.message,
              })
            : s &&
              T(i, {
                code: k.too_small,
                minimum: o.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: o.message,
              }),
          r.dirty());
      } else if (o.kind === "email")
        Tm.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          T(i, {
            validation: "email",
            code: k.invalid_string,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "emoji")
        ll || (ll = new RegExp(Pm, "u")),
          ll.test(t.data) ||
            ((i = this._getOrReturnCtx(t, i)),
            T(i, {
              validation: "emoji",
              code: k.invalid_string,
              message: o.message,
            }),
            r.dirty());
      else if (o.kind === "uuid")
        Nm.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          T(i, {
            validation: "uuid",
            code: k.invalid_string,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "cuid")
        km.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          T(i, {
            validation: "cuid",
            code: k.invalid_string,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "cuid2")
        Em.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          T(i, {
            validation: "cuid2",
            code: k.invalid_string,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "ulid")
        Cm.test(t.data) ||
          ((i = this._getOrReturnCtx(t, i)),
          T(i, {
            validation: "ulid",
            code: k.invalid_string,
            message: o.message,
          }),
          r.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          (i = this._getOrReturnCtx(t, i)),
            T(i, {
              validation: "url",
              code: k.invalid_string,
              message: o.message,
            }),
            r.dirty();
        }
      else
        o.kind === "regex"
          ? ((o.regex.lastIndex = 0),
            o.regex.test(t.data) ||
              ((i = this._getOrReturnCtx(t, i)),
              T(i, {
                validation: "regex",
                code: k.invalid_string,
                message: o.message,
              }),
              r.dirty()))
          : o.kind === "trim"
          ? (t.data = t.data.trim())
          : o.kind === "includes"
          ? t.data.includes(o.value, o.position) ||
            ((i = this._getOrReturnCtx(t, i)),
            T(i, {
              code: k.invalid_string,
              validation: { includes: o.value, position: o.position },
              message: o.message,
            }),
            r.dirty())
          : o.kind === "toLowerCase"
          ? (t.data = t.data.toLowerCase())
          : o.kind === "toUpperCase"
          ? (t.data = t.data.toUpperCase())
          : o.kind === "startsWith"
          ? t.data.startsWith(o.value) ||
            ((i = this._getOrReturnCtx(t, i)),
            T(i, {
              code: k.invalid_string,
              validation: { startsWith: o.value },
              message: o.message,
            }),
            r.dirty())
          : o.kind === "endsWith"
          ? t.data.endsWith(o.value) ||
            ((i = this._getOrReturnCtx(t, i)),
            T(i, {
              code: k.invalid_string,
              validation: { endsWith: o.value },
              message: o.message,
            }),
            r.dirty())
          : o.kind === "datetime"
          ? Im(o).test(t.data) ||
            ((i = this._getOrReturnCtx(t, i)),
            T(i, {
              code: k.invalid_string,
              validation: "datetime",
              message: o.message,
            }),
            r.dirty())
          : o.kind === "ip"
          ? Rm(t.data, o.version) ||
            ((i = this._getOrReturnCtx(t, i)),
            T(i, {
              validation: "ip",
              code: k.invalid_string,
              message: o.message,
            }),
            r.dirty())
          : H.assertNever(o);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((i) => t.test(i), {
      validation: n,
      code: k.invalid_string,
      ...M.errToObj(r),
    });
  }
  _addCheck(t) {
    return new Ye({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...M.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...M.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...M.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...M.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...M.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...M.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...M.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...M.errToObj(t) });
  }
  datetime(t) {
    var n;
    return typeof t == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: t,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
              ? void 0
              : t.precision,
          offset:
            (n = t == null ? void 0 : t.offset) !== null && n !== void 0
              ? n
              : !1,
          ...M.errToObj(t == null ? void 0 : t.message),
        });
  }
  regex(t, n) {
    return this._addCheck({ kind: "regex", regex: t, ...M.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...M.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: "startsWith", value: t, ...M.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: "endsWith", value: t, ...M.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t, ...M.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t, ...M.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: "length", value: t, ...M.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, M.errToObj(t));
  }
  trim() {
    return new Ye({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new Ye({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new Ye({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Ye.create = (e) => {
  var t;
  return new Ye({
    checks: [],
    typeName: z.ZodString,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...A(e),
  });
};
function Mm(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    i = n > r ? n : r,
    o = parseInt(e.toFixed(i).replace(".", "")),
    l = parseInt(t.toFixed(i).replace(".", ""));
  return (o % l) / Math.pow(10, i);
}
class Ft extends V {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== N.number)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        T(o, {
          code: k.invalid_type,
          expected: N.number,
          received: o.parsedType,
        }),
        L
      );
    }
    let r;
    const i = new xe();
    for (const o of this._def.checks)
      o.kind === "int"
        ? H.isInteger(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          T(r, {
            code: k.invalid_type,
            expected: "integer",
            received: "float",
            message: o.message,
          }),
          i.dirty())
        : o.kind === "min"
        ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          T(r, {
            code: k.too_small,
            minimum: o.value,
            type: "number",
            inclusive: o.inclusive,
            exact: !1,
            message: o.message,
          }),
          i.dirty())
        : o.kind === "max"
        ? (o.inclusive ? t.data > o.value : t.data >= o.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          T(r, {
            code: k.too_big,
            maximum: o.value,
            type: "number",
            inclusive: o.inclusive,
            exact: !1,
            message: o.message,
          }),
          i.dirty())
        : o.kind === "multipleOf"
        ? Mm(t.data, o.value) !== 0 &&
          ((r = this._getOrReturnCtx(t, r)),
          T(r, {
            code: k.not_multiple_of,
            multipleOf: o.value,
            message: o.message,
          }),
          i.dirty())
        : o.kind === "finite"
        ? Number.isFinite(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          T(r, { code: k.not_finite, message: o.message }),
          i.dirty())
        : H.assertNever(o);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, M.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, M.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, M.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, M.toString(n));
  }
  setLimit(t, n, r, i) {
    return new Ft({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: M.toString(i) },
      ],
    });
  }
  _addCheck(t) {
    return new Ft({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: M.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: M.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: M.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: M.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: M.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: M.toString(n),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: M.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: M.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: M.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) =>
        t.kind === "int" || (t.kind === "multipleOf" && H.isInteger(t.value))
    );
  }
  get isFinite() {
    let t = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min"
        ? (n === null || r.value > n) && (n = r.value)
        : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
Ft.create = (e) =>
  new Ft({
    checks: [],
    typeName: z.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...A(e),
  });
class Zt extends V {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = BigInt(t.data)),
      this._getType(t) !== N.bigint)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        T(o, {
          code: k.invalid_type,
          expected: N.bigint,
          received: o.parsedType,
        }),
        L
      );
    }
    let r;
    const i = new xe();
    for (const o of this._def.checks)
      o.kind === "min"
        ? (o.inclusive ? t.data < o.value : t.data <= o.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          T(r, {
            code: k.too_small,
            type: "bigint",
            minimum: o.value,
            inclusive: o.inclusive,
            message: o.message,
          }),
          i.dirty())
        : o.kind === "max"
        ? (o.inclusive ? t.data > o.value : t.data >= o.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          T(r, {
            code: k.too_big,
            type: "bigint",
            maximum: o.value,
            inclusive: o.inclusive,
            message: o.message,
          }),
          i.dirty())
        : o.kind === "multipleOf"
        ? t.data % o.value !== BigInt(0) &&
          ((r = this._getOrReturnCtx(t, r)),
          T(r, {
            code: k.not_multiple_of,
            multipleOf: o.value,
            message: o.message,
          }),
          i.dirty())
        : H.assertNever(o);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, M.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, M.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, M.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, M.toString(n));
  }
  setLimit(t, n, r, i) {
    return new Zt({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: M.toString(i) },
      ],
    });
  }
  _addCheck(t) {
    return new Zt({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: M.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: M.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: M.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: M.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: M.toString(n),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Zt.create = (e) => {
  var t;
  return new Zt({
    checks: [],
    typeName: z.ZodBigInt,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...A(e),
  });
};
class Ur extends V {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== N.boolean)
    ) {
      const r = this._getOrReturnCtx(t);
      return (
        T(r, {
          code: k.invalid_type,
          expected: N.boolean,
          received: r.parsedType,
        }),
        L
      );
    }
    return Ee(t.data);
  }
}
Ur.create = (e) =>
  new Ur({
    typeName: z.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...A(e),
  });
class an extends V {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== N.date)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        T(o, {
          code: k.invalid_type,
          expected: N.date,
          received: o.parsedType,
        }),
        L
      );
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return T(o, { code: k.invalid_date }), L;
    }
    const r = new xe();
    let i;
    for (const o of this._def.checks)
      o.kind === "min"
        ? t.data.getTime() < o.value &&
          ((i = this._getOrReturnCtx(t, i)),
          T(i, {
            code: k.too_small,
            message: o.message,
            inclusive: !0,
            exact: !1,
            minimum: o.value,
            type: "date",
          }),
          r.dirty())
        : o.kind === "max"
        ? t.data.getTime() > o.value &&
          ((i = this._getOrReturnCtx(t, i)),
          T(i, {
            code: k.too_big,
            message: o.message,
            inclusive: !0,
            exact: !1,
            maximum: o.value,
            type: "date",
          }),
          r.dirty())
        : H.assertNever(o);
    return { status: r.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new an({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: M.toString(n),
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: M.toString(n),
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
an.create = (e) =>
  new an({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: z.ZodDate,
    ...A(e),
  });
class lo extends V {
  _parse(t) {
    if (this._getType(t) !== N.symbol) {
      const r = this._getOrReturnCtx(t);
      return (
        T(r, {
          code: k.invalid_type,
          expected: N.symbol,
          received: r.parsedType,
        }),
        L
      );
    }
    return Ee(t.data);
  }
}
lo.create = (e) => new lo({ typeName: z.ZodSymbol, ...A(e) });
class $r extends V {
  _parse(t) {
    if (this._getType(t) !== N.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        T(r, {
          code: k.invalid_type,
          expected: N.undefined,
          received: r.parsedType,
        }),
        L
      );
    }
    return Ee(t.data);
  }
}
$r.create = (e) => new $r({ typeName: z.ZodUndefined, ...A(e) });
class Vr extends V {
  _parse(t) {
    if (this._getType(t) !== N.null) {
      const r = this._getOrReturnCtx(t);
      return (
        T(r, {
          code: k.invalid_type,
          expected: N.null,
          received: r.parsedType,
        }),
        L
      );
    }
    return Ee(t.data);
  }
}
Vr.create = (e) => new Vr({ typeName: z.ZodNull, ...A(e) });
class Hn extends V {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return Ee(t.data);
  }
}
Hn.create = (e) => new Hn({ typeName: z.ZodAny, ...A(e) });
class tn extends V {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return Ee(t.data);
  }
}
tn.create = (e) => new tn({ typeName: z.ZodUnknown, ...A(e) });
class _t extends V {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return (
      T(n, { code: k.invalid_type, expected: N.never, received: n.parsedType }),
      L
    );
  }
}
_t.create = (e) => new _t({ typeName: z.ZodNever, ...A(e) });
class so extends V {
  _parse(t) {
    if (this._getType(t) !== N.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        T(r, {
          code: k.invalid_type,
          expected: N.void,
          received: r.parsedType,
        }),
        L
      );
    }
    return Ee(t.data);
  }
}
so.create = (e) => new so({ typeName: z.ZodVoid, ...A(e) });
class qe extends V {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      i = this._def;
    if (n.parsedType !== N.array)
      return (
        T(n, {
          code: k.invalid_type,
          expected: N.array,
          received: n.parsedType,
        }),
        L
      );
    if (i.exactLength !== null) {
      const l = n.data.length > i.exactLength.value,
        s = n.data.length < i.exactLength.value;
      (l || s) &&
        (T(n, {
          code: l ? k.too_big : k.too_small,
          minimum: s ? i.exactLength.value : void 0,
          maximum: l ? i.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: i.exactLength.message,
        }),
        r.dirty());
    }
    if (
      (i.minLength !== null &&
        n.data.length < i.minLength.value &&
        (T(n, {
          code: k.too_small,
          minimum: i.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: i.minLength.message,
        }),
        r.dirty()),
      i.maxLength !== null &&
        n.data.length > i.maxLength.value &&
        (T(n, {
          code: k.too_big,
          maximum: i.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: i.maxLength.message,
        }),
        r.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((l, s) => i.type._parseAsync(new lt(n, l, n.path, s)))
      ).then((l) => xe.mergeArray(r, l));
    const o = [...n.data].map((l, s) =>
      i.type._parseSync(new lt(n, l, n.path, s))
    );
    return xe.mergeArray(r, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new qe({
      ...this._def,
      minLength: { value: t, message: M.toString(n) },
    });
  }
  max(t, n) {
    return new qe({
      ...this._def,
      maxLength: { value: t, message: M.toString(n) },
    });
  }
  length(t, n) {
    return new qe({
      ...this._def,
      exactLength: { value: t, message: M.toString(n) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
qe.create = (e, t) =>
  new qe({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: z.ZodArray,
    ...A(t),
  });
function yn(e) {
  if (e instanceof ee) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = mt.create(yn(r));
    }
    return new ee({ ...e._def, shape: () => t });
  } else
    return e instanceof qe
      ? new qe({ ...e._def, type: yn(e.element) })
      : e instanceof mt
      ? mt.create(yn(e.unwrap()))
      : e instanceof cn
      ? cn.create(yn(e.unwrap()))
      : e instanceof st
      ? st.create(e.items.map((t) => yn(t)))
      : e;
}
class ee extends V {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = H.objectKeys(t);
    return (this._cached = { shape: t, keys: n });
  }
  _parse(t) {
    if (this._getType(t) !== N.object) {
      const u = this._getOrReturnCtx(t);
      return (
        T(u, {
          code: k.invalid_type,
          expected: N.object,
          received: u.parsedType,
        }),
        L
      );
    }
    const { status: r, ctx: i } = this._processInputParams(t),
      { shape: o, keys: l } = this._getCached(),
      s = [];
    if (
      !(this._def.catchall instanceof _t && this._def.unknownKeys === "strip")
    )
      for (const u in i.data) l.includes(u) || s.push(u);
    const a = [];
    for (const u of l) {
      const h = o[u],
        v = i.data[u];
      a.push({
        key: { status: "valid", value: u },
        value: h._parse(new lt(i, v, i.path, u)),
        alwaysSet: u in i.data,
      });
    }
    if (this._def.catchall instanceof _t) {
      const u = this._def.unknownKeys;
      if (u === "passthrough")
        for (const h of s)
          a.push({
            key: { status: "valid", value: h },
            value: { status: "valid", value: i.data[h] },
          });
      else if (u === "strict")
        s.length > 0 &&
          (T(i, { code: k.unrecognized_keys, keys: s }), r.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const u = this._def.catchall;
      for (const h of s) {
        const v = i.data[h];
        a.push({
          key: { status: "valid", value: h },
          value: u._parse(new lt(i, v, i.path, h)),
          alwaysSet: h in i.data,
        });
      }
    }
    return i.common.async
      ? Promise.resolve()
          .then(async () => {
            const u = [];
            for (const h of a) {
              const v = await h.key;
              u.push({ key: v, value: await h.value, alwaysSet: h.alwaysSet });
            }
            return u;
          })
          .then((u) => xe.mergeObjectSync(r, u))
      : xe.mergeObjectSync(r, a);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      M.errToObj,
      new ee({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (n, r) => {
                var i, o, l, s;
                const a =
                  (l =
                    (o = (i = this._def).errorMap) === null || o === void 0
                      ? void 0
                      : o.call(i, n, r).message) !== null && l !== void 0
                    ? l
                    : r.defaultError;
                return n.code === "unrecognized_keys"
                  ? {
                      message:
                        (s = M.errToObj(t).message) !== null && s !== void 0
                          ? s
                          : a,
                    }
                  : { message: a };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new ee({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new ee({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new ee({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new ee({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: z.ZodObject,
    });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new ee({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    return (
      H.objectKeys(t).forEach((r) => {
        t[r] && this.shape[r] && (n[r] = this.shape[r]);
      }),
      new ee({ ...this._def, shape: () => n })
    );
  }
  omit(t) {
    const n = {};
    return (
      H.objectKeys(this.shape).forEach((r) => {
        t[r] || (n[r] = this.shape[r]);
      }),
      new ee({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return yn(this);
  }
  partial(t) {
    const n = {};
    return (
      H.objectKeys(this.shape).forEach((r) => {
        const i = this.shape[r];
        t && !t[r] ? (n[r] = i) : (n[r] = i.optional());
      }),
      new ee({ ...this._def, shape: () => n })
    );
  }
  required(t) {
    const n = {};
    return (
      H.objectKeys(this.shape).forEach((r) => {
        if (t && !t[r]) n[r] = this.shape[r];
        else {
          let o = this.shape[r];
          for (; o instanceof mt; ) o = o._def.innerType;
          n[r] = o;
        }
      }),
      new ee({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return Kd(H.objectKeys(this.shape));
  }
}
ee.create = (e, t) =>
  new ee({
    shape: () => e,
    unknownKeys: "strip",
    catchall: _t.create(),
    typeName: z.ZodObject,
    ...A(t),
  });
ee.strictCreate = (e, t) =>
  new ee({
    shape: () => e,
    unknownKeys: "strict",
    catchall: _t.create(),
    typeName: z.ZodObject,
    ...A(t),
  });
ee.lazycreate = (e, t) =>
  new ee({
    shape: e,
    unknownKeys: "strip",
    catchall: _t.create(),
    typeName: z.ZodObject,
    ...A(t),
  });
class Fr extends V {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options;
    function i(o) {
      for (const s of o) if (s.result.status === "valid") return s.result;
      for (const s of o)
        if (s.result.status === "dirty")
          return n.common.issues.push(...s.ctx.common.issues), s.result;
      const l = o.map((s) => new Je(s.ctx.common.issues));
      return T(n, { code: k.invalid_union, unionErrors: l }), L;
    }
    if (n.common.async)
      return Promise.all(
        r.map(async (o) => {
          const l = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return {
            result: await o._parseAsync({
              data: n.data,
              path: n.path,
              parent: l,
            }),
            ctx: l,
          };
        })
      ).then(i);
    {
      let o;
      const l = [];
      for (const a of r) {
        const u = { ...n, common: { ...n.common, issues: [] }, parent: null },
          h = a._parseSync({ data: n.data, path: n.path, parent: u });
        if (h.status === "valid") return h;
        h.status === "dirty" && !o && (o = { result: h, ctx: u }),
          u.common.issues.length && l.push(u.common.issues);
      }
      if (o) return n.common.issues.push(...o.ctx.common.issues), o.result;
      const s = l.map((a) => new Je(a));
      return T(n, { code: k.invalid_union, unionErrors: s }), L;
    }
  }
  get options() {
    return this._def.options;
  }
}
Fr.create = (e, t) => new Fr({ options: e, typeName: z.ZodUnion, ...A(t) });
const Oi = (e) =>
  e instanceof Wr
    ? Oi(e.schema)
    : e instanceof et
    ? Oi(e.innerType())
    : e instanceof Hr
    ? [e.value]
    : e instanceof Bt
    ? e.options
    : e instanceof Qr
    ? Object.keys(e.enum)
    : e instanceof Kr
    ? Oi(e._def.innerType)
    : e instanceof $r
    ? [void 0]
    : e instanceof Vr
    ? [null]
    : null;
class Oo extends V {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== N.object)
      return (
        T(n, {
          code: k.invalid_type,
          expected: N.object,
          received: n.parsedType,
        }),
        L
      );
    const r = this.discriminator,
      i = n.data[r],
      o = this.optionsMap.get(i);
    return o
      ? n.common.async
        ? o._parseAsync({ data: n.data, path: n.path, parent: n })
        : o._parseSync({ data: n.data, path: n.path, parent: n })
      : (T(n, {
          code: k.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [r],
        }),
        L);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(t, n, r) {
    const i = new Map();
    for (const o of n) {
      const l = Oi(o.shape[t]);
      if (!l)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`
        );
      for (const s of l) {
        if (i.has(s))
          throw new Error(
            `Discriminator property ${String(t)} has duplicate value ${String(
              s
            )}`
          );
        i.set(s, o);
      }
    }
    return new Oo({
      typeName: z.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: i,
      ...A(r),
    });
  }
}
function as(e, t) {
  const n = Pt(e),
    r = Pt(t);
  if (e === t) return { valid: !0, data: e };
  if (n === N.object && r === N.object) {
    const i = H.objectKeys(t),
      o = H.objectKeys(e).filter((s) => i.indexOf(s) !== -1),
      l = { ...e, ...t };
    for (const s of o) {
      const a = as(e[s], t[s]);
      if (!a.valid) return { valid: !1 };
      l[s] = a.data;
    }
    return { valid: !0, data: l };
  } else if (n === N.array && r === N.array) {
    if (e.length !== t.length) return { valid: !1 };
    const i = [];
    for (let o = 0; o < e.length; o++) {
      const l = e[o],
        s = t[o],
        a = as(l, s);
      if (!a.valid) return { valid: !1 };
      i.push(a.data);
    }
    return { valid: !0, data: i };
  } else
    return n === N.date && r === N.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class Zr extends V {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      i = (o, l) => {
        if (ls(o) || ls(l)) return L;
        const s = as(o.value, l.value);
        return s.valid
          ? ((ss(o) || ss(l)) && n.dirty(), { status: n.value, value: s.data })
          : (T(r, { code: k.invalid_intersection_types }), L);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          }),
        ]).then(([o, l]) => i(o, l))
      : i(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r })
        );
  }
}
Zr.create = (e, t, n) =>
  new Zr({ left: e, right: t, typeName: z.ZodIntersection, ...A(n) });
class st extends V {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== N.array)
      return (
        T(r, {
          code: k.invalid_type,
          expected: N.array,
          received: r.parsedType,
        }),
        L
      );
    if (r.data.length < this._def.items.length)
      return (
        T(r, {
          code: k.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        L
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (T(r, {
        code: k.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    const o = [...r.data]
      .map((l, s) => {
        const a = this._def.items[s] || this._def.rest;
        return a ? a._parse(new lt(r, l, r.path, s)) : null;
      })
      .filter((l) => !!l);
    return r.common.async
      ? Promise.all(o).then((l) => xe.mergeArray(n, l))
      : xe.mergeArray(n, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new st({ ...this._def, rest: t });
  }
}
st.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new st({ items: e, typeName: z.ZodTuple, rest: null, ...A(t) });
};
class Br extends V {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== N.object)
      return (
        T(r, {
          code: k.invalid_type,
          expected: N.object,
          received: r.parsedType,
        }),
        L
      );
    const i = [],
      o = this._def.keyType,
      l = this._def.valueType;
    for (const s in r.data)
      i.push({
        key: o._parse(new lt(r, s, r.path, s)),
        value: l._parse(new lt(r, r.data[s], r.path, s)),
      });
    return r.common.async
      ? xe.mergeObjectAsync(n, i)
      : xe.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof V
      ? new Br({ keyType: t, valueType: n, typeName: z.ZodRecord, ...A(r) })
      : new Br({
          keyType: Ye.create(),
          valueType: t,
          typeName: z.ZodRecord,
          ...A(n),
        });
  }
}
class ao extends V {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== N.map)
      return (
        T(r, { code: k.invalid_type, expected: N.map, received: r.parsedType }),
        L
      );
    const i = this._def.keyType,
      o = this._def.valueType,
      l = [...r.data.entries()].map(([s, a], u) => ({
        key: i._parse(new lt(r, s, r.path, [u, "key"])),
        value: o._parse(new lt(r, a, r.path, [u, "value"])),
      }));
    if (r.common.async) {
      const s = new Map();
      return Promise.resolve().then(async () => {
        for (const a of l) {
          const u = await a.key,
            h = await a.value;
          if (u.status === "aborted" || h.status === "aborted") return L;
          (u.status === "dirty" || h.status === "dirty") && n.dirty(),
            s.set(u.value, h.value);
        }
        return { status: n.value, value: s };
      });
    } else {
      const s = new Map();
      for (const a of l) {
        const u = a.key,
          h = a.value;
        if (u.status === "aborted" || h.status === "aborted") return L;
        (u.status === "dirty" || h.status === "dirty") && n.dirty(),
          s.set(u.value, h.value);
      }
      return { status: n.value, value: s };
    }
  }
}
ao.create = (e, t, n) =>
  new ao({ valueType: t, keyType: e, typeName: z.ZodMap, ...A(n) });
class un extends V {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== N.set)
      return (
        T(r, { code: k.invalid_type, expected: N.set, received: r.parsedType }),
        L
      );
    const i = this._def;
    i.minSize !== null &&
      r.data.size < i.minSize.value &&
      (T(r, {
        code: k.too_small,
        minimum: i.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: i.minSize.message,
      }),
      n.dirty()),
      i.maxSize !== null &&
        r.data.size > i.maxSize.value &&
        (T(r, {
          code: k.too_big,
          maximum: i.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: i.maxSize.message,
        }),
        n.dirty());
    const o = this._def.valueType;
    function l(a) {
      const u = new Set();
      for (const h of a) {
        if (h.status === "aborted") return L;
        h.status === "dirty" && n.dirty(), u.add(h.value);
      }
      return { status: n.value, value: u };
    }
    const s = [...r.data.values()].map((a, u) =>
      o._parse(new lt(r, a, r.path, u))
    );
    return r.common.async ? Promise.all(s).then((a) => l(a)) : l(s);
  }
  min(t, n) {
    return new un({
      ...this._def,
      minSize: { value: t, message: M.toString(n) },
    });
  }
  max(t, n) {
    return new un({
      ...this._def,
      maxSize: { value: t, message: M.toString(n) },
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
un.create = (e, t) =>
  new un({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: z.ZodSet,
    ...A(t),
  });
class Dn extends V {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== N.function)
      return (
        T(n, {
          code: k.invalid_type,
          expected: N.function,
          received: n.parsedType,
        }),
        L
      );
    function r(s, a) {
      return io({
        data: s,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ro(),
          Dr,
        ].filter((u) => !!u),
        issueData: { code: k.invalid_arguments, argumentsError: a },
      });
    }
    function i(s, a) {
      return io({
        data: s,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          ro(),
          Dr,
        ].filter((u) => !!u),
        issueData: { code: k.invalid_return_type, returnTypeError: a },
      });
    }
    const o = { errorMap: n.common.contextualErrorMap },
      l = n.data;
    if (this._def.returns instanceof Qn) {
      const s = this;
      return Ee(async function (...a) {
        const u = new Je([]),
          h = await s._def.args.parseAsync(a, o).catch((y) => {
            throw (u.addIssue(r(a, y)), u);
          }),
          v = await Reflect.apply(l, this, h);
        return await s._def.returns._def.type.parseAsync(v, o).catch((y) => {
          throw (u.addIssue(i(v, y)), u);
        });
      });
    } else {
      const s = this;
      return Ee(function (...a) {
        const u = s._def.args.safeParse(a, o);
        if (!u.success) throw new Je([r(a, u.error)]);
        const h = Reflect.apply(l, this, u.data),
          v = s._def.returns.safeParse(h, o);
        if (!v.success) throw new Je([i(h, v.error)]);
        return v.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Dn({ ...this._def, args: st.create(t).rest(tn.create()) });
  }
  returns(t) {
    return new Dn({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new Dn({
      args: t || st.create([]).rest(tn.create()),
      returns: n || tn.create(),
      typeName: z.ZodFunction,
      ...A(r),
    });
  }
}
class Wr extends V {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Wr.create = (e, t) => new Wr({ getter: e, typeName: z.ZodLazy, ...A(t) });
class Hr extends V {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return (
        T(n, {
          received: n.data,
          code: k.invalid_literal,
          expected: this._def.value,
        }),
        L
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Hr.create = (e, t) => new Hr({ value: e, typeName: z.ZodLiteral, ...A(t) });
function Kd(e, t) {
  return new Bt({ values: e, typeName: z.ZodEnum, ...A(t) });
}
class Bt extends V {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        T(n, {
          expected: H.joinValues(r),
          received: n.parsedType,
          code: k.invalid_type,
        }),
        L
      );
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        T(n, { received: n.data, code: k.invalid_enum_value, options: r }), L
      );
    }
    return Ee(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  extract(t) {
    return Bt.create(t);
  }
  exclude(t) {
    return Bt.create(this.options.filter((n) => !t.includes(n)));
  }
}
Bt.create = Kd;
class Qr extends V {
  _parse(t) {
    const n = H.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== N.string && r.parsedType !== N.number) {
      const i = H.objectValues(n);
      return (
        T(r, {
          expected: H.joinValues(i),
          received: r.parsedType,
          code: k.invalid_type,
        }),
        L
      );
    }
    if (n.indexOf(t.data) === -1) {
      const i = H.objectValues(n);
      return (
        T(r, { received: r.data, code: k.invalid_enum_value, options: i }), L
      );
    }
    return Ee(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Qr.create = (e, t) => new Qr({ values: e, typeName: z.ZodNativeEnum, ...A(t) });
class Qn extends V {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== N.promise && n.common.async === !1)
      return (
        T(n, {
          code: k.invalid_type,
          expected: N.promise,
          received: n.parsedType,
        }),
        L
      );
    const r = n.parsedType === N.promise ? n.data : Promise.resolve(n.data);
    return Ee(
      r.then((i) =>
        this._def.type.parseAsync(i, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        })
      )
    );
  }
}
Qn.create = (e, t) => new Qn({ type: e, typeName: z.ZodPromise, ...A(t) });
class et extends V {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === z.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      i = this._def.effect || null,
      o = {
        addIssue: (l) => {
          T(r, l), l.fatal ? n.abort() : n.dirty();
        },
        get path() {
          return r.path;
        },
      };
    if (((o.addIssue = o.addIssue.bind(o)), i.type === "preprocess")) {
      const l = i.transform(r.data, o);
      return r.common.issues.length
        ? { status: "dirty", value: r.data }
        : r.common.async
        ? Promise.resolve(l).then((s) =>
            this._def.schema._parseAsync({ data: s, path: r.path, parent: r })
          )
        : this._def.schema._parseSync({ data: l, path: r.path, parent: r });
    }
    if (i.type === "refinement") {
      const l = (s) => {
        const a = i.refinement(s, o);
        if (r.common.async) return Promise.resolve(a);
        if (a instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return s;
      };
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return s.status === "aborted"
          ? L
          : (s.status === "dirty" && n.dirty(),
            l(s.value),
            { status: n.value, value: s.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((s) =>
            s.status === "aborted"
              ? L
              : (s.status === "dirty" && n.dirty(),
                l(s.value).then(() => ({ status: n.value, value: s.value })))
          );
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const l = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        if (!Ar(l)) return l;
        const s = i.transform(l.value, o);
        if (s instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: n.value, value: s };
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((l) =>
            Ar(l)
              ? Promise.resolve(i.transform(l.value, o)).then((s) => ({
                  status: n.value,
                  value: s,
                }))
              : l
          );
    H.assertNever(i);
  }
}
et.create = (e, t, n) =>
  new et({ schema: e, typeName: z.ZodEffects, effect: t, ...A(n) });
et.createWithPreprocess = (e, t, n) =>
  new et({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: z.ZodEffects,
    ...A(n),
  });
class mt extends V {
  _parse(t) {
    return this._getType(t) === N.undefined
      ? Ee(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
mt.create = (e, t) =>
  new mt({ innerType: e, typeName: z.ZodOptional, ...A(t) });
class cn extends V {
  _parse(t) {
    return this._getType(t) === N.null
      ? Ee(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
cn.create = (e, t) =>
  new cn({ innerType: e, typeName: z.ZodNullable, ...A(t) });
class Kr extends V {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return (
      n.parsedType === N.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Kr.create = (e, t) =>
  new Kr({
    innerType: e,
    typeName: z.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...A(t),
  });
class uo extends V {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = { ...n, common: { ...n.common, issues: [] } },
      i = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return oo(i)
      ? i.then((o) => ({
          status: "valid",
          value:
            o.status === "valid"
              ? o.value
              : this._def.catchValue({
                  get error() {
                    return new Je(r.common.issues);
                  },
                  input: r.data,
                }),
        }))
      : {
          status: "valid",
          value:
            i.status === "valid"
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new Je(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
uo.create = (e, t) =>
  new uo({
    innerType: e,
    typeName: z.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...A(t),
  });
class co extends V {
  _parse(t) {
    if (this._getType(t) !== N.nan) {
      const r = this._getOrReturnCtx(t);
      return (
        T(r, { code: k.invalid_type, expected: N.nan, received: r.parsedType }),
        L
      );
    }
    return { status: "valid", value: t.data };
  }
}
co.create = (e) => new co({ typeName: z.ZodNaN, ...A(e) });
const zm = Symbol("zod_brand");
class Yd extends V {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class br extends V {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return o.status === "aborted"
          ? L
          : o.status === "dirty"
          ? (n.dirty(), Qd(o.value))
          : this._def.out._parseAsync({
              data: o.value,
              path: r.path,
              parent: r,
            });
      })();
    {
      const i = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r,
      });
      return i.status === "aborted"
        ? L
        : i.status === "dirty"
        ? (n.dirty(), { status: "dirty", value: i.value })
        : this._def.out._parseSync({ data: i.value, path: r.path, parent: r });
    }
  }
  static create(t, n) {
    return new br({ in: t, out: n, typeName: z.ZodPipeline });
  }
}
class fo extends V {
  _parse(t) {
    const n = this._def.innerType._parse(t);
    return Ar(n) && (n.value = Object.freeze(n.value)), n;
  }
}
fo.create = (e, t) =>
  new fo({ innerType: e, typeName: z.ZodReadonly, ...A(t) });
const Gd = (e, t = {}, n) =>
    e
      ? Hn.create().superRefine((r, i) => {
          var o, l;
          if (!e(r)) {
            const s =
                typeof t == "function"
                  ? t(r)
                  : typeof t == "string"
                  ? { message: t }
                  : t,
              a =
                (l = (o = s.fatal) !== null && o !== void 0 ? o : n) !== null &&
                l !== void 0
                  ? l
                  : !0,
              u = typeof s == "string" ? { message: s } : s;
            i.addIssue({ code: "custom", ...u, fatal: a });
          }
        })
      : Hn.create(),
  Lm = { object: ee.lazycreate };
var z;
(function (e) {
  (e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"),
    (e.ZodReadonly = "ZodReadonly");
})(z || (z = {}));
const Dm = (e, t = { message: `Input not instance of ${e.name}` }) =>
    Gd((n) => n instanceof e, t),
  Xd = Ye.create,
  Jd = Ft.create,
  Am = co.create,
  Um = Zt.create,
  qd = Ur.create,
  $m = an.create,
  Vm = lo.create,
  Fm = $r.create,
  Zm = Vr.create,
  Bm = Hn.create,
  Wm = tn.create,
  Hm = _t.create,
  Qm = so.create,
  Km = qe.create,
  Ym = ee.create,
  Gm = ee.strictCreate,
  Xm = Fr.create,
  Jm = Oo.create,
  qm = Zr.create,
  bm = st.create,
  ev = Br.create,
  tv = ao.create,
  nv = un.create,
  rv = Dn.create,
  iv = Wr.create,
  ov = Hr.create,
  lv = Bt.create,
  sv = Qr.create,
  av = Qn.create,
  xu = et.create,
  uv = mt.create,
  cv = cn.create,
  dv = et.createWithPreprocess,
  fv = br.create,
  pv = () => Xd().optional(),
  hv = () => Jd().optional(),
  mv = () => qd().optional(),
  vv = {
    string: (e) => Ye.create({ ...e, coerce: !0 }),
    number: (e) => Ft.create({ ...e, coerce: !0 }),
    boolean: (e) => Ur.create({ ...e, coerce: !0 }),
    bigint: (e) => Zt.create({ ...e, coerce: !0 }),
    date: (e) => an.create({ ...e, coerce: !0 }),
  },
  yv = L;
var sl = Object.freeze({
  __proto__: null,
  defaultErrorMap: Dr,
  setErrorMap: xm,
  getErrorMap: ro,
  makeIssue: io,
  EMPTY_PATH: Sm,
  addIssueToContext: T,
  ParseStatus: xe,
  INVALID: L,
  DIRTY: Qd,
  OK: Ee,
  isAborted: ls,
  isDirty: ss,
  isValid: Ar,
  isAsync: oo,
  get util() {
    return H;
  },
  get objectUtil() {
    return os;
  },
  ZodParsedType: N,
  getParsedType: Pt,
  ZodType: V,
  ZodString: Ye,
  ZodNumber: Ft,
  ZodBigInt: Zt,
  ZodBoolean: Ur,
  ZodDate: an,
  ZodSymbol: lo,
  ZodUndefined: $r,
  ZodNull: Vr,
  ZodAny: Hn,
  ZodUnknown: tn,
  ZodNever: _t,
  ZodVoid: so,
  ZodArray: qe,
  ZodObject: ee,
  ZodUnion: Fr,
  ZodDiscriminatedUnion: Oo,
  ZodIntersection: Zr,
  ZodTuple: st,
  ZodRecord: Br,
  ZodMap: ao,
  ZodSet: un,
  ZodFunction: Dn,
  ZodLazy: Wr,
  ZodLiteral: Hr,
  ZodEnum: Bt,
  ZodNativeEnum: Qr,
  ZodPromise: Qn,
  ZodEffects: et,
  ZodTransformer: et,
  ZodOptional: mt,
  ZodNullable: cn,
  ZodDefault: Kr,
  ZodCatch: uo,
  ZodNaN: co,
  BRAND: zm,
  ZodBranded: Yd,
  ZodPipeline: br,
  ZodReadonly: fo,
  custom: Gd,
  Schema: V,
  ZodSchema: V,
  late: Lm,
  get ZodFirstPartyTypeKind() {
    return z;
  },
  coerce: vv,
  any: Bm,
  array: Km,
  bigint: Um,
  boolean: qd,
  date: $m,
  discriminatedUnion: Jm,
  effect: xu,
  enum: lv,
  function: rv,
  instanceof: Dm,
  intersection: qm,
  lazy: iv,
  literal: ov,
  map: tv,
  nan: Am,
  nativeEnum: sv,
  never: Hm,
  null: Zm,
  nullable: cv,
  number: Jd,
  object: Ym,
  oboolean: mv,
  onumber: hv,
  optional: uv,
  ostring: pv,
  pipeline: fv,
  preprocess: dv,
  promise: av,
  record: ev,
  set: nv,
  strictObject: Gm,
  string: Xd,
  symbol: Vm,
  transformer: xu,
  tuple: bm,
  undefined: Fm,
  union: Xm,
  unknown: Wm,
  void: Qm,
  NEVER: yv,
  ZodIssueCode: k,
  quotelessJson: _m,
  ZodError: Je,
});
sl.object({
  username: sl
    .string()
    .min(4, { message: "Name must be at least 3 characters long" })
    .max(200, { message: "Name must be at least 200 characters long" }),
  password: sl
    .string()
    .min(4, { message: "Password must bee at least 4 characters long" }),
});
const gv = ({ resetApp: e }) =>
  _.jsx(_.Fragment, {
    children: _.jsx(wm, { arrowColor: "red", resetApp: e }),
  });
al.createRoot(document.getElementById("root")).render(
  _.jsx(pt.StrictMode, {
    children: _.jsx(gv, { resetApp: () => window.location.reload(!0) }),
  })
);
