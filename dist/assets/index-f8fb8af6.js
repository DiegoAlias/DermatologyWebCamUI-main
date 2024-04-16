(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
var Fc =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function li(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var hs = { exports: {} },
  vl = {},
  vs = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr = Symbol.for("react.element"),
  Ac = Symbol.for("react.portal"),
  $c = Symbol.for("react.fragment"),
  Vc = Symbol.for("react.strict_mode"),
  Wc = Symbol.for("react.profiler"),
  Bc = Symbol.for("react.provider"),
  Hc = Symbol.for("react.context"),
  Qc = Symbol.for("react.forward_ref"),
  Kc = Symbol.for("react.suspense"),
  Yc = Symbol.for("react.memo"),
  Gc = Symbol.for("react.lazy"),
  eu = Symbol.iterator;
function Xc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (eu && e[eu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var gs = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  ys = Object.assign,
  ws = {};
function gn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ws),
    (this.updater = n || gs);
}
gn.prototype.isReactComponent = {};
gn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
gn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ss() {}
Ss.prototype = gn.prototype;
function oi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = ws),
    (this.updater = n || gs);
}
var ii = (oi.prototype = new Ss());
ii.constructor = oi;
ys(ii, gn.prototype);
ii.isPureReactComponent = !0;
var tu = Array.isArray,
  ks = Object.prototype.hasOwnProperty,
  ui = { current: null },
  xs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Es(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      ks.call(t, r) && !xs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), d = 0; d < u; d++) s[d] = arguments[d + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: sr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ui.current,
  };
}
function Zc(e, t) {
  return {
    $$typeof: sr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function si(e) {
  return typeof e == "object" && e !== null && e.$$typeof === sr;
}
function Jc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var nu = /\/+/g;
function Dl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Jc("" + e.key)
    : t.toString(36);
}
function Or(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case sr:
          case Ac:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Dl(i, 0) : r),
      tu(l)
        ? ((n = ""),
          e != null && (n = e.replace(nu, "$&/") + "/"),
          Or(l, t, n, "", function (d) {
            return d;
          }))
        : l != null &&
          (si(l) &&
            (l = Zc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(nu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), tu(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + Dl(o, u);
      i += Or(o, t, n, s, l);
    }
  else if (((s = Xc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + Dl(o, u++)), (i += Or(o, t, n, s, l));
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
  return i;
}
function mr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Or(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function qc(e) {
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
var fe = { current: null },
  Lr = { transition: null },
  bc = {
    ReactCurrentDispatcher: fe,
    ReactCurrentBatchConfig: Lr,
    ReactCurrentOwner: ui,
  };
D.Children = {
  map: mr,
  forEach: function (e, t, n) {
    mr(
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
      mr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      mr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!si(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
D.Component = gn;
D.Fragment = $c;
D.Profiler = Wc;
D.PureComponent = oi;
D.StrictMode = Vc;
D.Suspense = Kc;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bc;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = ys({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = ui.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      ks.call(t, s) &&
        !xs.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var d = 0; d < s; d++) u[d] = arguments[d + 2];
    r.children = u;
  }
  return { $$typeof: sr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: Hc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Bc, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = Es;
D.createFactory = function (e) {
  var t = Es.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: Qc, render: e };
};
D.isValidElement = si;
D.lazy = function (e) {
  return { $$typeof: Gc, _payload: { _status: -1, _result: e }, _init: qc };
};
D.memo = function (e, t) {
  return { $$typeof: Yc, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = Lr.transition;
  Lr.transition = {};
  try {
    e();
  } finally {
    Lr.transition = t;
  }
};
D.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
D.useCallback = function (e, t) {
  return fe.current.useCallback(e, t);
};
D.useContext = function (e) {
  return fe.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return fe.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return fe.current.useEffect(e, t);
};
D.useId = function () {
  return fe.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return fe.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return fe.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return fe.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return fe.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return fe.current.useRef(e);
};
D.useState = function (e) {
  return fe.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return fe.current.useTransition();
};
D.version = "18.2.0";
vs.exports = D;
var M = vs.exports;
const dt = li(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed = M,
  td = Symbol.for("react.element"),
  nd = Symbol.for("react.fragment"),
  rd = Object.prototype.hasOwnProperty,
  ld = ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  od = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) rd.call(t, r) && !od.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: td,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: ld.current,
  };
}
vl.Fragment = nd;
vl.jsx = Cs;
vl.jsxs = Cs;
hs.exports = vl;
var S = hs.exports,
  io = {},
  _s = { exports: {} },
  Ce = {},
  Ps = { exports: {} },
  Ns = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, T) {
    var O = _.length;
    _.push(T);
    e: for (; 0 < O; ) {
      var W = (O - 1) >>> 1,
        X = _[W];
      if (0 < l(X, T)) (_[W] = T), (_[O] = X), (O = W);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var T = _[0],
      O = _.pop();
    if (O !== T) {
      _[0] = O;
      e: for (var W = 0, X = _.length, $t = X >>> 1; W < $t; ) {
        var He = 2 * (W + 1) - 1,
          Vt = _[He],
          Qe = He + 1,
          Wt = _[Qe];
        if (0 > l(Vt, O))
          Qe < X && 0 > l(Wt, Vt)
            ? ((_[W] = Wt), (_[Qe] = O), (W = Qe))
            : ((_[W] = Vt), (_[He] = O), (W = He));
        else if (Qe < X && 0 > l(Wt, O)) (_[W] = Wt), (_[Qe] = O), (W = Qe);
        else break e;
      }
    }
    return T;
  }
  function l(_, T) {
    var O = _.sortIndex - T.sortIndex;
    return O !== 0 ? O : _.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    d = [],
    y = 1,
    v = null,
    p = 3,
    g = !1,
    m = !1,
    h = !1,
    N = typeof setTimeout == "function" ? setTimeout : null,
    c = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(_) {
    for (var T = n(d); T !== null; ) {
      if (T.callback === null) r(d);
      else if (T.startTime <= _)
        r(d), (T.sortIndex = T.expirationTime), t(s, T);
      else break;
      T = n(d);
    }
  }
  function w(_) {
    if (((h = !1), f(_), !m))
      if (n(s) !== null) (m = !0), xn(C);
      else {
        var T = n(d);
        T !== null && En(w, T.startTime - _);
      }
  }
  function C(_, T) {
    (m = !1), h && ((h = !1), c(j), (j = -1)), (g = !0);
    var O = p;
    try {
      for (
        f(T), v = n(s);
        v !== null && (!(v.expirationTime > T) || (_ && !te()));

      ) {
        var W = v.callback;
        if (typeof W == "function") {
          (v.callback = null), (p = v.priorityLevel);
          var X = W(v.expirationTime <= T);
          (T = e.unstable_now()),
            typeof X == "function" ? (v.callback = X) : v === n(s) && r(s),
            f(T);
        } else r(s);
        v = n(s);
      }
      if (v !== null) var $t = !0;
      else {
        var He = n(d);
        He !== null && En(w, He.startTime - T), ($t = !1);
      }
      return $t;
    } finally {
      (v = null), (p = O), (g = !1);
    }
  }
  var E = !1,
    x = null,
    j = -1,
    F = 5,
    L = -1;
  function te() {
    return !(e.unstable_now() - L < F);
  }
  function me() {
    if (x !== null) {
      var _ = e.unstable_now();
      L = _;
      var T = !0;
      try {
        T = x(!0, _);
      } finally {
        T ? nt() : ((E = !1), (x = null));
      }
    } else E = !1;
  }
  var nt;
  if (typeof a == "function")
    nt = function () {
      a(me);
    };
  else if (typeof MessageChannel < "u") {
    var kn = new MessageChannel(),
      pr = kn.port2;
    (kn.port1.onmessage = me),
      (nt = function () {
        pr.postMessage(null);
      });
  } else
    nt = function () {
      N(me, 0);
    };
  function xn(_) {
    (x = _), E || ((E = !0), nt());
  }
  function En(_, T) {
    j = N(function () {
      _(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || g || ((m = !0), xn(C));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (F = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = p;
      }
      var O = p;
      p = T;
      try {
        return _();
      } finally {
        p = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, T) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var O = p;
      p = _;
      try {
        return T();
      } finally {
        p = O;
      }
    }),
    (e.unstable_scheduleCallback = function (_, T, O) {
      var W = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? W + O : W))
          : (O = W),
        _)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = O + X),
        (_ = {
          id: y++,
          callback: T,
          priorityLevel: _,
          startTime: O,
          expirationTime: X,
          sortIndex: -1,
        }),
        O > W
          ? ((_.sortIndex = O),
            t(d, _),
            n(s) === null &&
              _ === n(d) &&
              (h ? (c(j), (j = -1)) : (h = !0), En(w, O - W)))
          : ((_.sortIndex = X), t(s, _), m || g || ((m = !0), xn(C))),
        _
      );
    }),
    (e.unstable_shouldYield = te),
    (e.unstable_wrapCallback = function (_) {
      var T = p;
      return function () {
        var O = p;
        p = T;
        try {
          return _.apply(this, arguments);
        } finally {
          p = O;
        }
      };
    });
})(Ns);
Ps.exports = Ns;
var id = Ps.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var js = M,
  Ee = id;
function k(e) {
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
var zs = new Set(),
  Qn = {};
function Ut(e, t) {
  an(e, t), an(e + "Capture", t);
}
function an(e, t) {
  for (Qn[e] = t, e = 0; e < t.length; e++) zs.add(t[e]);
}
var Je = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  uo = Object.prototype.hasOwnProperty,
  ud =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ru = {},
  lu = {};
function sd(e) {
  return uo.call(lu, e)
    ? !0
    : uo.call(ru, e)
    ? !1
    : ud.test(e)
    ? (lu[e] = !0)
    : ((ru[e] = !0), !1);
}
function ad(e, t, n, r) {
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
function cd(e, t, n, r) {
  if (t === null || typeof t > "u" || ad(e, t, n, r)) return !0;
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
function pe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  le[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  le[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    le[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  le[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  le[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  le[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  le[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ai = /[\-:]([a-z])/g;
function ci(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ai, ci);
    le[t] = new pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ai, ci);
    le[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ai, ci);
  le[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  le[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function di(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (cd(t, n, l, r) && (n = null),
    r || l === null
      ? sd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tt = js.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  hr = Symbol.for("react.element"),
  Ht = Symbol.for("react.portal"),
  Qt = Symbol.for("react.fragment"),
  fi = Symbol.for("react.strict_mode"),
  so = Symbol.for("react.profiler"),
  Ts = Symbol.for("react.provider"),
  Os = Symbol.for("react.context"),
  pi = Symbol.for("react.forward_ref"),
  ao = Symbol.for("react.suspense"),
  co = Symbol.for("react.suspense_list"),
  mi = Symbol.for("react.memo"),
  ot = Symbol.for("react.lazy"),
  Ls = Symbol.for("react.offscreen"),
  ou = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ou && e[ou]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Q = Object.assign,
  Ml;
function Ln(e) {
  if (Ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ml = (t && t[1]) || "";
    }
  return (
    `
` +
    Ml +
    e
  );
}
var Il = !1;
function Rl(e, t) {
  if (!e || Il) return "";
  Il = !0;
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
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var l = d.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (Il = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ln(e) : "";
}
function dd(e) {
  switch (e.tag) {
    case 5:
      return Ln(e.type);
    case 16:
      return Ln("Lazy");
    case 13:
      return Ln("Suspense");
    case 19:
      return Ln("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Rl(e.type, !1)), e;
    case 11:
      return (e = Rl(e.type.render, !1)), e;
    case 1:
      return (e = Rl(e.type, !0)), e;
    default:
      return "";
  }
}
function fo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Qt:
      return "Fragment";
    case Ht:
      return "Portal";
    case so:
      return "Profiler";
    case fi:
      return "StrictMode";
    case ao:
      return "Suspense";
    case co:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Os:
        return (e.displayName || "Context") + ".Consumer";
      case Ts:
        return (e._context.displayName || "Context") + ".Provider";
      case pi:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case mi:
        return (
          (t = e.displayName || null), t !== null ? t : fo(e.type) || "Memo"
        );
      case ot:
        (t = e._payload), (e = e._init);
        try {
          return fo(e(t));
        } catch {}
    }
  return null;
}
function fd(e) {
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
      return fo(t);
    case 8:
      return t === fi ? "StrictMode" : "Mode";
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
function St(e) {
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
function Ds(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function pd(e) {
  var t = Ds(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function vr(e) {
  e._valueTracker || (e._valueTracker = pd(e));
}
function Ms(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ds(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Br(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function po(e, t) {
  var n = t.checked;
  return Q({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function iu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = St(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Is(e, t) {
  (t = t.checked), t != null && di(e, "checked", t, !1);
}
function mo(e, t) {
  Is(e, t);
  var n = St(t.value),
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
    ? ho(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ho(e, t.type, St(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function uu(e, t, n) {
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
function ho(e, t, n) {
  (t !== "number" || Br(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Dn = Array.isArray;
function nn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + St(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function vo(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return Q({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function su(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Dn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: St(n) };
}
function Rs(e, t) {
  var n = St(t.value),
    r = St(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Us(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function go(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Us(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var gr,
  Fs = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        gr = gr || document.createElement("div"),
          gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = gr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Kn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Rn = {
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
  md = ["Webkit", "ms", "Moz", "O"];
Object.keys(Rn).forEach(function (e) {
  md.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Rn[t] = Rn[e]);
  });
});
function As(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Rn.hasOwnProperty(e) && Rn[e])
    ? ("" + t).trim()
    : t + "px";
}
function $s(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = As(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var hd = Q(
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
function yo(e, t) {
  if (t) {
    if (hd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function wo(e, t) {
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
var So = null;
function hi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ko = null,
  rn = null,
  ln = null;
function cu(e) {
  if ((e = dr(e))) {
    if (typeof ko != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = kl(t)), ko(e.stateNode, e.type, t));
  }
}
function Vs(e) {
  rn ? (ln ? ln.push(e) : (ln = [e])) : (rn = e);
}
function Ws() {
  if (rn) {
    var e = rn,
      t = ln;
    if (((ln = rn = null), cu(e), t)) for (e = 0; e < t.length; e++) cu(t[e]);
  }
}
function Bs(e, t) {
  return e(t);
}
function Hs() {}
var Ul = !1;
function Qs(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return Bs(e, t, n);
  } finally {
    (Ul = !1), (rn !== null || ln !== null) && (Hs(), Ws());
  }
}
function Yn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = kl(n);
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
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var xo = !1;
if (Je)
  try {
    var _n = {};
    Object.defineProperty(_n, "passive", {
      get: function () {
        xo = !0;
      },
    }),
      window.addEventListener("test", _n, _n),
      window.removeEventListener("test", _n, _n);
  } catch {
    xo = !1;
  }
function vd(e, t, n, r, l, o, i, u, s) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (y) {
    this.onError(y);
  }
}
var Un = !1,
  Hr = null,
  Qr = !1,
  Eo = null,
  gd = {
    onError: function (e) {
      (Un = !0), (Hr = e);
    },
  };
function yd(e, t, n, r, l, o, i, u, s) {
  (Un = !1), (Hr = null), vd.apply(gd, arguments);
}
function wd(e, t, n, r, l, o, i, u, s) {
  if ((yd.apply(this, arguments), Un)) {
    if (Un) {
      var d = Hr;
      (Un = !1), (Hr = null);
    } else throw Error(k(198));
    Qr || ((Qr = !0), (Eo = d));
  }
}
function Ft(e) {
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
function Ks(e) {
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
function du(e) {
  if (Ft(e) !== e) throw Error(k(188));
}
function Sd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ft(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return du(l), e;
        if (o === r) return du(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Ys(e) {
  return (e = Sd(e)), e !== null ? Gs(e) : null;
}
function Gs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xs = Ee.unstable_scheduleCallback,
  fu = Ee.unstable_cancelCallback,
  kd = Ee.unstable_shouldYield,
  xd = Ee.unstable_requestPaint,
  G = Ee.unstable_now,
  Ed = Ee.unstable_getCurrentPriorityLevel,
  vi = Ee.unstable_ImmediatePriority,
  Zs = Ee.unstable_UserBlockingPriority,
  Kr = Ee.unstable_NormalPriority,
  Cd = Ee.unstable_LowPriority,
  Js = Ee.unstable_IdlePriority,
  gl = null,
  We = null;
function _d(e) {
  if (We && typeof We.onCommitFiberRoot == "function")
    try {
      We.onCommitFiberRoot(gl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Re = Math.clz32 ? Math.clz32 : jd,
  Pd = Math.log,
  Nd = Math.LN2;
function jd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Pd(e) / Nd) | 0)) | 0;
}
var yr = 64,
  wr = 4194304;
function Mn(e) {
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
function Yr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Mn(u)) : ((o &= i), o !== 0 && (r = Mn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Mn(i)) : o !== 0 && (r = Mn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Re(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function zd(e, t) {
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
function Td(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Re(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = zd(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Co(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function qs() {
  var e = yr;
  return (yr <<= 1), !(yr & 4194240) && (yr = 64), e;
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ar(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Re(t)),
    (e[t] = n);
}
function Od(e, t) {
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
    var l = 31 - Re(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function gi(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Re(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function bs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ea,
  yi,
  ta,
  na,
  ra,
  _o = !1,
  Sr = [],
  ft = null,
  pt = null,
  mt = null,
  Gn = new Map(),
  Xn = new Map(),
  ut = [],
  Ld =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      pt = null;
      break;
    case "mouseover":
    case "mouseout":
      mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Gn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Xn.delete(t.pointerId);
  }
}
function Pn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = dr(t)), t !== null && yi(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Dd(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (ft = Pn(ft, e, t, n, r, l)), !0;
    case "dragenter":
      return (pt = Pn(pt, e, t, n, r, l)), !0;
    case "mouseover":
      return (mt = Pn(mt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Gn.set(o, Pn(Gn.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Xn.set(o, Pn(Xn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function la(e) {
  var t = Nt(e.target);
  if (t !== null) {
    var n = Ft(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ks(n)), t !== null)) {
          (e.blockedOn = t),
            ra(e.priority, function () {
              ta(n);
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
function Dr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Po(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (So = r), n.target.dispatchEvent(r), (So = null);
    } else return (t = dr(n)), t !== null && yi(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function mu(e, t, n) {
  Dr(e) && n.delete(t);
}
function Md() {
  (_o = !1),
    ft !== null && Dr(ft) && (ft = null),
    pt !== null && Dr(pt) && (pt = null),
    mt !== null && Dr(mt) && (mt = null),
    Gn.forEach(mu),
    Xn.forEach(mu);
}
function Nn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    _o ||
      ((_o = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Md)));
}
function Zn(e) {
  function t(l) {
    return Nn(l, e);
  }
  if (0 < Sr.length) {
    Nn(Sr[0], e);
    for (var n = 1; n < Sr.length; n++) {
      var r = Sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    ft !== null && Nn(ft, e),
      pt !== null && Nn(pt, e),
      mt !== null && Nn(mt, e),
      Gn.forEach(t),
      Xn.forEach(t),
      n = 0;
    n < ut.length;
    n++
  )
    (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
    la(n), n.blockedOn === null && ut.shift();
}
var on = tt.ReactCurrentBatchConfig,
  Gr = !0;
function Id(e, t, n, r) {
  var l = R,
    o = on.transition;
  on.transition = null;
  try {
    (R = 1), wi(e, t, n, r);
  } finally {
    (R = l), (on.transition = o);
  }
}
function Rd(e, t, n, r) {
  var l = R,
    o = on.transition;
  on.transition = null;
  try {
    (R = 4), wi(e, t, n, r);
  } finally {
    (R = l), (on.transition = o);
  }
}
function wi(e, t, n, r) {
  if (Gr) {
    var l = Po(e, t, n, r);
    if (l === null) Gl(e, t, r, Xr, n), pu(e, r);
    else if (Dd(l, e, t, n, r)) r.stopPropagation();
    else if ((pu(e, r), t & 4 && -1 < Ld.indexOf(e))) {
      for (; l !== null; ) {
        var o = dr(l);
        if (
          (o !== null && ea(o),
          (o = Po(e, t, n, r)),
          o === null && Gl(e, t, r, Xr, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var Xr = null;
function Po(e, t, n, r) {
  if (((Xr = null), (e = hi(r)), (e = Nt(e)), e !== null))
    if (((t = Ft(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ks(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Xr = e), null;
}
function oa(e) {
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
      switch (Ed()) {
        case vi:
          return 1;
        case Zs:
          return 4;
        case Kr:
        case Cd:
          return 16;
        case Js:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null,
  Si = null,
  Mr = null;
function ia() {
  if (Mr) return Mr;
  var e,
    t = Si,
    n = t.length,
    r,
    l = "value" in at ? at.value : at.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Mr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ir(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function kr() {
  return !0;
}
function hu() {
  return !1;
}
function _e(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? kr
        : hu),
      (this.isPropagationStopped = hu),
      this
    );
  }
  return (
    Q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = kr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = kr));
      },
      persist: function () {},
      isPersistent: kr,
    }),
    t
  );
}
var yn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ki = _e(yn),
  cr = Q({}, yn, { view: 0, detail: 0 }),
  Ud = _e(cr),
  Al,
  $l,
  jn,
  yl = Q({}, cr, {
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
    getModifierState: xi,
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
        : (e !== jn &&
            (jn && e.type === "mousemove"
              ? ((Al = e.screenX - jn.screenX), ($l = e.screenY - jn.screenY))
              : ($l = Al = 0),
            (jn = e)),
          Al);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : $l;
    },
  }),
  vu = _e(yl),
  Fd = Q({}, yl, { dataTransfer: 0 }),
  Ad = _e(Fd),
  $d = Q({}, cr, { relatedTarget: 0 }),
  Vl = _e($d),
  Vd = Q({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wd = _e(Vd),
  Bd = Q({}, yn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Hd = _e(Bd),
  Qd = Q({}, yn, { data: 0 }),
  gu = _e(Qd),
  Kd = {
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
  Yd = {
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
  Gd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Xd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gd[e]) ? !!t[e] : !1;
}
function xi() {
  return Xd;
}
var Zd = Q({}, cr, {
    key: function (e) {
      if (e.key) {
        var t = Kd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Yd[e.keyCode] || "Unidentified"
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
    getModifierState: xi,
    charCode: function (e) {
      return e.type === "keypress" ? Ir(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ir(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Jd = _e(Zd),
  qd = Q({}, yl, {
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
  yu = _e(qd),
  bd = Q({}, cr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xi,
  }),
  ef = _e(bd),
  tf = Q({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  nf = _e(tf),
  rf = Q({}, yl, {
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
  lf = _e(rf),
  of = [9, 13, 27, 32],
  Ei = Je && "CompositionEvent" in window,
  Fn = null;
Je && "documentMode" in document && (Fn = document.documentMode);
var uf = Je && "TextEvent" in window && !Fn,
  ua = Je && (!Ei || (Fn && 8 < Fn && 11 >= Fn)),
  wu = String.fromCharCode(32),
  Su = !1;
function sa(e, t) {
  switch (e) {
    case "keyup":
      return of.indexOf(t.keyCode) !== -1;
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
function aa(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Kt = !1;
function sf(e, t) {
  switch (e) {
    case "compositionend":
      return aa(t);
    case "keypress":
      return t.which !== 32 ? null : ((Su = !0), wu);
    case "textInput":
      return (e = t.data), e === wu && Su ? null : e;
    default:
      return null;
  }
}
function af(e, t) {
  if (Kt)
    return e === "compositionend" || (!Ei && sa(e, t))
      ? ((e = ia()), (Mr = Si = at = null), (Kt = !1), e)
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
      return ua && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var cf = {
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
function ku(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!cf[e.type] : t === "textarea";
}
function ca(e, t, n, r) {
  Vs(r),
    (t = Zr(t, "onChange")),
    0 < t.length &&
      ((n = new ki("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var An = null,
  Jn = null;
function df(e) {
  ka(e, 0);
}
function wl(e) {
  var t = Xt(e);
  if (Ms(t)) return e;
}
function ff(e, t) {
  if (e === "change") return t;
}
var da = !1;
if (Je) {
  var Wl;
  if (Je) {
    var Bl = "oninput" in document;
    if (!Bl) {
      var xu = document.createElement("div");
      xu.setAttribute("oninput", "return;"),
        (Bl = typeof xu.oninput == "function");
    }
    Wl = Bl;
  } else Wl = !1;
  da = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Eu() {
  An && (An.detachEvent("onpropertychange", fa), (Jn = An = null));
}
function fa(e) {
  if (e.propertyName === "value" && wl(Jn)) {
    var t = [];
    ca(t, Jn, e, hi(e)), Qs(df, t);
  }
}
function pf(e, t, n) {
  e === "focusin"
    ? (Eu(), (An = t), (Jn = n), An.attachEvent("onpropertychange", fa))
    : e === "focusout" && Eu();
}
function mf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return wl(Jn);
}
function hf(e, t) {
  if (e === "click") return wl(t);
}
function vf(e, t) {
  if (e === "input" || e === "change") return wl(t);
}
function gf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fe = typeof Object.is == "function" ? Object.is : gf;
function qn(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!uo.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function Cu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _u(e, t) {
  var n = Cu(e);
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
    n = Cu(n);
  }
}
function pa(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? pa(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function ma() {
  for (var e = window, t = Br(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Br(e.document);
  }
  return t;
}
function Ci(e) {
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
function yf(e) {
  var t = ma(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pa(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ci(n)) {
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
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = _u(n, o));
        var i = _u(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
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
var wf = Je && "documentMode" in document && 11 >= document.documentMode,
  Yt = null,
  No = null,
  $n = null,
  jo = !1;
function Pu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  jo ||
    Yt == null ||
    Yt !== Br(r) ||
    ((r = Yt),
    "selectionStart" in r && Ci(r)
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
    ($n && qn($n, r)) ||
      (($n = r),
      (r = Zr(No, "onSelect")),
      0 < r.length &&
        ((t = new ki("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Yt))));
}
function xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Gt = {
    animationend: xr("Animation", "AnimationEnd"),
    animationiteration: xr("Animation", "AnimationIteration"),
    animationstart: xr("Animation", "AnimationStart"),
    transitionend: xr("Transition", "TransitionEnd"),
  },
  Hl = {},
  ha = {};
Je &&
  ((ha = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Gt.animationend.animation,
    delete Gt.animationiteration.animation,
    delete Gt.animationstart.animation),
  "TransitionEvent" in window || delete Gt.transitionend.transition);
function Sl(e) {
  if (Hl[e]) return Hl[e];
  if (!Gt[e]) return e;
  var t = Gt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in ha) return (Hl[e] = t[n]);
  return e;
}
var va = Sl("animationend"),
  ga = Sl("animationiteration"),
  ya = Sl("animationstart"),
  wa = Sl("transitionend"),
  Sa = new Map(),
  Nu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function xt(e, t) {
  Sa.set(e, t), Ut(t, [e]);
}
for (var Ql = 0; Ql < Nu.length; Ql++) {
  var Kl = Nu[Ql],
    Sf = Kl.toLowerCase(),
    kf = Kl[0].toUpperCase() + Kl.slice(1);
  xt(Sf, "on" + kf);
}
xt(va, "onAnimationEnd");
xt(ga, "onAnimationIteration");
xt(ya, "onAnimationStart");
xt("dblclick", "onDoubleClick");
xt("focusin", "onFocus");
xt("focusout", "onBlur");
xt(wa, "onTransitionEnd");
an("onMouseEnter", ["mouseout", "mouseover"]);
an("onMouseLeave", ["mouseout", "mouseover"]);
an("onPointerEnter", ["pointerout", "pointerover"]);
an("onPointerLeave", ["pointerout", "pointerover"]);
Ut(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ut(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ut(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ut(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var In =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  xf = new Set("cancel close invalid load scroll toggle".split(" ").concat(In));
function ju(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), wd(r, t, void 0, e), (e.currentTarget = null);
}
function ka(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            d = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          ju(l, u, d), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (d = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          ju(l, u, d), (o = s);
        }
    }
  }
  if (Qr) throw ((e = Eo), (Qr = !1), (Eo = null), e);
}
function A(e, t) {
  var n = t[Do];
  n === void 0 && (n = t[Do] = new Set());
  var r = e + "__bubble";
  n.has(r) || (xa(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), xa(n, e, r, t);
}
var Er = "_reactListening" + Math.random().toString(36).slice(2);
function bn(e) {
  if (!e[Er]) {
    (e[Er] = !0),
      zs.forEach(function (n) {
        n !== "selectionchange" && (xf.has(n) || Yl(n, !1, e), Yl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Er] || ((t[Er] = !0), Yl("selectionchange", !1, t));
  }
}
function xa(e, t, n, r) {
  switch (oa(t)) {
    case 1:
      var l = Id;
      break;
    case 4:
      l = Rd;
      break;
    default:
      l = wi;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !xo ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Gl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Nt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Qs(function () {
    var d = o,
      y = hi(n),
      v = [];
    e: {
      var p = Sa.get(e);
      if (p !== void 0) {
        var g = ki,
          m = e;
        switch (e) {
          case "keypress":
            if (Ir(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Jd;
            break;
          case "focusin":
            (m = "focus"), (g = Vl);
            break;
          case "focusout":
            (m = "blur"), (g = Vl);
            break;
          case "beforeblur":
          case "afterblur":
            g = Vl;
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
            g = vu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = Ad;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = ef;
            break;
          case va:
          case ga:
          case ya:
            g = Wd;
            break;
          case wa:
            g = nf;
            break;
          case "scroll":
            g = Ud;
            break;
          case "wheel":
            g = lf;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = Hd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = yu;
        }
        var h = (t & 4) !== 0,
          N = !h && e === "scroll",
          c = h ? (p !== null ? p + "Capture" : null) : p;
        h = [];
        for (var a = d, f; a !== null; ) {
          f = a;
          var w = f.stateNode;
          if (
            (f.tag === 5 &&
              w !== null &&
              ((f = w),
              c !== null && ((w = Yn(a, c)), w != null && h.push(er(a, w, f)))),
            N)
          )
            break;
          a = a.return;
        }
        0 < h.length &&
          ((p = new g(p, m, null, n, y)), v.push({ event: p, listeners: h }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== So &&
            (m = n.relatedTarget || n.fromElement) &&
            (Nt(m) || m[qe]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            y.window === y
              ? y
              : (p = y.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((m = n.relatedTarget || n.toElement),
              (g = d),
              (m = m ? Nt(m) : null),
              m !== null &&
                ((N = Ft(m)), m !== N || (m.tag !== 5 && m.tag !== 6)) &&
                (m = null))
            : ((g = null), (m = d)),
          g !== m)
        ) {
          if (
            ((h = vu),
            (w = "onMouseLeave"),
            (c = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((h = yu),
              (w = "onPointerLeave"),
              (c = "onPointerEnter"),
              (a = "pointer")),
            (N = g == null ? p : Xt(g)),
            (f = m == null ? p : Xt(m)),
            (p = new h(w, a + "leave", g, n, y)),
            (p.target = N),
            (p.relatedTarget = f),
            (w = null),
            Nt(y) === d &&
              ((h = new h(c, a + "enter", m, n, y)),
              (h.target = f),
              (h.relatedTarget = N),
              (w = h)),
            (N = w),
            g && m)
          )
            t: {
              for (h = g, c = m, a = 0, f = h; f; f = Bt(f)) a++;
              for (f = 0, w = c; w; w = Bt(w)) f++;
              for (; 0 < a - f; ) (h = Bt(h)), a--;
              for (; 0 < f - a; ) (c = Bt(c)), f--;
              for (; a--; ) {
                if (h === c || (c !== null && h === c.alternate)) break t;
                (h = Bt(h)), (c = Bt(c));
              }
              h = null;
            }
          else h = null;
          g !== null && zu(v, p, g, h, !1),
            m !== null && N !== null && zu(v, N, m, h, !0);
        }
      }
      e: {
        if (
          ((p = d ? Xt(d) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var C = ff;
        else if (ku(p))
          if (da) C = vf;
          else {
            C = mf;
            var E = pf;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (C = hf);
        if (C && (C = C(e, d))) {
          ca(v, C, n, y);
          break e;
        }
        E && E(e, p, d),
          e === "focusout" &&
            (E = p._wrapperState) &&
            E.controlled &&
            p.type === "number" &&
            ho(p, "number", p.value);
      }
      switch (((E = d ? Xt(d) : window), e)) {
        case "focusin":
          (ku(E) || E.contentEditable === "true") &&
            ((Yt = E), (No = d), ($n = null));
          break;
        case "focusout":
          $n = No = Yt = null;
          break;
        case "mousedown":
          jo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (jo = !1), Pu(v, n, y);
          break;
        case "selectionchange":
          if (wf) break;
        case "keydown":
        case "keyup":
          Pu(v, n, y);
      }
      var x;
      if (Ei)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Kt
          ? sa(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (ua &&
          n.locale !== "ko" &&
          (Kt || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Kt && (x = ia())
            : ((at = y),
              (Si = "value" in at ? at.value : at.textContent),
              (Kt = !0))),
        (E = Zr(d, j)),
        0 < E.length &&
          ((j = new gu(j, e, null, n, y)),
          v.push({ event: j, listeners: E }),
          x ? (j.data = x) : ((x = aa(n)), x !== null && (j.data = x)))),
        (x = uf ? sf(e, n) : af(e, n)) &&
          ((d = Zr(d, "onBeforeInput")),
          0 < d.length &&
            ((y = new gu("onBeforeInput", "beforeinput", null, n, y)),
            v.push({ event: y, listeners: d }),
            (y.data = x)));
    }
    ka(v, t);
  });
}
function er(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Yn(e, n)),
      o != null && r.unshift(er(e, o, l)),
      (o = Yn(e, t)),
      o != null && r.push(er(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Bt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function zu(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      d = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      d !== null &&
      ((u = d),
      l
        ? ((s = Yn(n, o)), s != null && i.unshift(er(n, s, u)))
        : l || ((s = Yn(n, o)), s != null && i.push(er(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Ef = /\r\n?/g,
  Cf = /\u0000|\uFFFD/g;
function Tu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ef,
      `
`
    )
    .replace(Cf, "");
}
function Cr(e, t, n) {
  if (((t = Tu(t)), Tu(e) !== t && n)) throw Error(k(425));
}
function Jr() {}
var zo = null,
  To = null;
function Oo(e, t) {
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
var Lo = typeof setTimeout == "function" ? setTimeout : void 0,
  _f = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ou = typeof Promise == "function" ? Promise : void 0,
  Pf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ou < "u"
      ? function (e) {
          return Ou.resolve(null).then(e).catch(Nf);
        }
      : Lo;
function Nf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Zn(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Zn(t);
}
function ht(e) {
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
function Lu(e) {
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
var wn = Math.random().toString(36).slice(2),
  Ve = "__reactFiber$" + wn,
  tr = "__reactProps$" + wn,
  qe = "__reactContainer$" + wn,
  Do = "__reactEvents$" + wn,
  jf = "__reactListeners$" + wn,
  zf = "__reactHandles$" + wn;
function Nt(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qe] || n[Ve])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Lu(e); e !== null; ) {
          if ((n = e[Ve])) return n;
          e = Lu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function dr(e) {
  return (
    (e = e[Ve] || e[qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function kl(e) {
  return e[tr] || null;
}
var Mo = [],
  Zt = -1;
function Et(e) {
  return { current: e };
}
function $(e) {
  0 > Zt || ((e.current = Mo[Zt]), (Mo[Zt] = null), Zt--);
}
function U(e, t) {
  Zt++, (Mo[Zt] = e.current), (e.current = t);
}
var kt = {},
  ae = Et(kt),
  ge = Et(!1),
  Lt = kt;
function cn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function ye(e) {
  return (e = e.childContextTypes), e != null;
}
function qr() {
  $(ge), $(ae);
}
function Du(e, t, n) {
  if (ae.current !== kt) throw Error(k(168));
  U(ae, t), U(ge, n);
}
function Ea(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, fd(e) || "Unknown", l));
  return Q({}, n, r);
}
function br(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || kt),
    (Lt = ae.current),
    U(ae, e),
    U(ge, ge.current),
    !0
  );
}
function Mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Ea(e, t, Lt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(ge),
      $(ae),
      U(ae, e))
    : $(ge),
    U(ge, n);
}
var Ye = null,
  xl = !1,
  Zl = !1;
function Ca(e) {
  Ye === null ? (Ye = [e]) : Ye.push(e);
}
function Tf(e) {
  (xl = !0), Ca(e);
}
function Ct() {
  if (!Zl && Ye !== null) {
    Zl = !0;
    var e = 0,
      t = R;
    try {
      var n = Ye;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ye = null), (xl = !1);
    } catch (l) {
      throw (Ye !== null && (Ye = Ye.slice(e + 1)), Xs(vi, Ct), l);
    } finally {
      (R = t), (Zl = !1);
    }
  }
  return null;
}
var Jt = [],
  qt = 0,
  el = null,
  tl = 0,
  Pe = [],
  Ne = 0,
  Dt = null,
  Ge = 1,
  Xe = "";
function _t(e, t) {
  (Jt[qt++] = tl), (Jt[qt++] = el), (el = e), (tl = t);
}
function _a(e, t, n) {
  (Pe[Ne++] = Ge), (Pe[Ne++] = Xe), (Pe[Ne++] = Dt), (Dt = e);
  var r = Ge;
  e = Xe;
  var l = 32 - Re(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Re(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ge = (1 << (32 - Re(t) + l)) | (n << l) | r),
      (Xe = o + e);
  } else (Ge = (1 << o) | (n << l) | r), (Xe = e);
}
function _i(e) {
  e.return !== null && (_t(e, 1), _a(e, 1, 0));
}
function Pi(e) {
  for (; e === el; )
    (el = Jt[--qt]), (Jt[qt] = null), (tl = Jt[--qt]), (Jt[qt] = null);
  for (; e === Dt; )
    (Dt = Pe[--Ne]),
      (Pe[Ne] = null),
      (Xe = Pe[--Ne]),
      (Pe[Ne] = null),
      (Ge = Pe[--Ne]),
      (Pe[Ne] = null);
}
var xe = null,
  ke = null,
  V = !1,
  Ie = null;
function Pa(e, t) {
  var n = je(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Iu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xe = e), (ke = ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xe = e), (ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Dt !== null ? { id: Ge, overflow: Xe } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xe = e),
            (ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Io(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ro(e) {
  if (V) {
    var t = ke;
    if (t) {
      var n = t;
      if (!Iu(e, t)) {
        if (Io(e)) throw Error(k(418));
        t = ht(n.nextSibling);
        var r = xe;
        t && Iu(e, t)
          ? Pa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (V = !1), (xe = e));
      }
    } else {
      if (Io(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (V = !1), (xe = e);
    }
  }
}
function Ru(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xe = e;
}
function _r(e) {
  if (e !== xe) return !1;
  if (!V) return Ru(e), (V = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Oo(e.type, e.memoizedProps))),
    t && (t = ke))
  ) {
    if (Io(e)) throw (Na(), Error(k(418)));
    for (; t; ) Pa(e, t), (t = ht(t.nextSibling));
  }
  if ((Ru(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ke = ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ke = null;
    }
  } else ke = xe ? ht(e.stateNode.nextSibling) : null;
  return !0;
}
function Na() {
  for (var e = ke; e; ) e = ht(e.nextSibling);
}
function dn() {
  (ke = xe = null), (V = !1);
}
function Ni(e) {
  Ie === null ? (Ie = [e]) : Ie.push(e);
}
var Of = tt.ReactCurrentBatchConfig;
function De(e, t) {
  if (e && e.defaultProps) {
    (t = Q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var nl = Et(null),
  rl = null,
  bt = null,
  ji = null;
function zi() {
  ji = bt = rl = null;
}
function Ti(e) {
  var t = nl.current;
  $(nl), (e._currentValue = t);
}
function Uo(e, t, n) {
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
function un(e, t) {
  (rl = e),
    (ji = bt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ve = !0), (e.firstContext = null));
}
function Te(e) {
  var t = e._currentValue;
  if (ji !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), bt === null)) {
      if (rl === null) throw Error(k(308));
      (bt = e), (rl.dependencies = { lanes: 0, firstContext: e });
    } else bt = bt.next = e;
  return t;
}
var jt = null;
function Oi(e) {
  jt === null ? (jt = [e]) : jt.push(e);
}
function ja(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Oi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    be(e, r)
  );
}
function be(e, t) {
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
var it = !1;
function Li(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function za(e, t) {
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
function Ze(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function vt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), I & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      be(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Oi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    be(e, n)
  );
}
function Rr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gi(e, n);
  }
}
function Uu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
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
function ll(e, t, n, r) {
  var l = e.updateQueue;
  it = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      d = s.next;
    (s.next = null), i === null ? (o = d) : (i.next = d), (i = s);
    var y = e.alternate;
    y !== null &&
      ((y = y.updateQueue),
      (u = y.lastBaseUpdate),
      u !== i &&
        (u === null ? (y.firstBaseUpdate = d) : (u.next = d),
        (y.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var v = l.baseState;
    (i = 0), (y = d = s = null), (u = o);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        y !== null &&
          (y = y.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var m = e,
            h = u;
          switch (((p = t), (g = n), h.tag)) {
            case 1:
              if (((m = h.payload), typeof m == "function")) {
                v = m.call(g, v, p);
                break e;
              }
              v = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (
                ((m = h.payload),
                (p = typeof m == "function" ? m.call(g, v, p) : m),
                p == null)
              )
                break e;
              v = Q({}, v, p);
              break e;
            case 2:
              it = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          y === null ? ((d = y = g), (s = v)) : (y = y.next = g),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (y === null && (s = v),
      (l.baseState = s),
      (l.firstBaseUpdate = d),
      (l.lastBaseUpdate = y),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (It |= i), (e.lanes = i), (e.memoizedState = v);
  }
}
function Fu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var Ta = new js.Component().refs;
function Fo(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var El = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Ft(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = yt(e),
      o = Ze(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = vt(e, o, l)),
      t !== null && (Ue(t, e, l, r), Rr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = de(),
      l = yt(e),
      o = Ze(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = vt(e, o, l)),
      t !== null && (Ue(t, e, l, r), Rr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = de(),
      r = yt(e),
      l = Ze(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = vt(e, l, r)),
      t !== null && (Ue(t, e, r, n), Rr(t, e, r));
  },
};
function Au(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !qn(n, r) || !qn(l, o)
      : !0
  );
}
function Oa(e, t, n) {
  var r = !1,
    l = kt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Te(o))
      : ((l = ye(t) ? Lt : ae.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? cn(e, l) : kt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = El),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function $u(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && El.enqueueReplaceState(t, t.state, null);
}
function Ao(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Ta), Li(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Te(o))
    : ((o = ye(t) ? Lt : ae.current), (l.context = cn(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Fo(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && El.enqueueReplaceState(l, l.state, null),
      ll(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function zn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Ta && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Pr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Vu(e) {
  var t = e._init;
  return t(e._payload);
}
function La(e) {
  function t(c, a) {
    if (e) {
      var f = c.deletions;
      f === null ? ((c.deletions = [a]), (c.flags |= 16)) : f.push(a);
    }
  }
  function n(c, a) {
    if (!e) return null;
    for (; a !== null; ) t(c, a), (a = a.sibling);
    return null;
  }
  function r(c, a) {
    for (c = new Map(); a !== null; )
      a.key !== null ? c.set(a.key, a) : c.set(a.index, a), (a = a.sibling);
    return c;
  }
  function l(c, a) {
    return (c = wt(c, a)), (c.index = 0), (c.sibling = null), c;
  }
  function o(c, a, f) {
    return (
      (c.index = f),
      e
        ? ((f = c.alternate),
          f !== null
            ? ((f = f.index), f < a ? ((c.flags |= 2), a) : f)
            : ((c.flags |= 2), a))
        : ((c.flags |= 1048576), a)
    );
  }
  function i(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, a, f, w) {
    return a === null || a.tag !== 6
      ? ((a = ro(f, c.mode, w)), (a.return = c), a)
      : ((a = l(a, f)), (a.return = c), a);
  }
  function s(c, a, f, w) {
    var C = f.type;
    return C === Qt
      ? y(c, a, f.props.children, w, f.key)
      : a !== null &&
        (a.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === ot &&
            Vu(C) === a.type))
      ? ((w = l(a, f.props)), (w.ref = zn(c, a, f)), (w.return = c), w)
      : ((w = Wr(f.type, f.key, f.props, null, c.mode, w)),
        (w.ref = zn(c, a, f)),
        (w.return = c),
        w);
  }
  function d(c, a, f, w) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== f.containerInfo ||
      a.stateNode.implementation !== f.implementation
      ? ((a = lo(f, c.mode, w)), (a.return = c), a)
      : ((a = l(a, f.children || [])), (a.return = c), a);
  }
  function y(c, a, f, w, C) {
    return a === null || a.tag !== 7
      ? ((a = Ot(f, c.mode, w, C)), (a.return = c), a)
      : ((a = l(a, f)), (a.return = c), a);
  }
  function v(c, a, f) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = ro("" + a, c.mode, f)), (a.return = c), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case hr:
          return (
            (f = Wr(a.type, a.key, a.props, null, c.mode, f)),
            (f.ref = zn(c, null, a)),
            (f.return = c),
            f
          );
        case Ht:
          return (a = lo(a, c.mode, f)), (a.return = c), a;
        case ot:
          var w = a._init;
          return v(c, w(a._payload), f);
      }
      if (Dn(a) || Cn(a))
        return (a = Ot(a, c.mode, f, null)), (a.return = c), a;
      Pr(c, a);
    }
    return null;
  }
  function p(c, a, f, w) {
    var C = a !== null ? a.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return C !== null ? null : u(c, a, "" + f, w);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case hr:
          return f.key === C ? s(c, a, f, w) : null;
        case Ht:
          return f.key === C ? d(c, a, f, w) : null;
        case ot:
          return (C = f._init), p(c, a, C(f._payload), w);
      }
      if (Dn(f) || Cn(f)) return C !== null ? null : y(c, a, f, w, null);
      Pr(c, f);
    }
    return null;
  }
  function g(c, a, f, w, C) {
    if ((typeof w == "string" && w !== "") || typeof w == "number")
      return (c = c.get(f) || null), u(a, c, "" + w, C);
    if (typeof w == "object" && w !== null) {
      switch (w.$$typeof) {
        case hr:
          return (c = c.get(w.key === null ? f : w.key) || null), s(a, c, w, C);
        case Ht:
          return (c = c.get(w.key === null ? f : w.key) || null), d(a, c, w, C);
        case ot:
          var E = w._init;
          return g(c, a, f, E(w._payload), C);
      }
      if (Dn(w) || Cn(w)) return (c = c.get(f) || null), y(a, c, w, C, null);
      Pr(a, w);
    }
    return null;
  }
  function m(c, a, f, w) {
    for (
      var C = null, E = null, x = a, j = (a = 0), F = null;
      x !== null && j < f.length;
      j++
    ) {
      x.index > j ? ((F = x), (x = null)) : (F = x.sibling);
      var L = p(c, x, f[j], w);
      if (L === null) {
        x === null && (x = F);
        break;
      }
      e && x && L.alternate === null && t(c, x),
        (a = o(L, a, j)),
        E === null ? (C = L) : (E.sibling = L),
        (E = L),
        (x = F);
    }
    if (j === f.length) return n(c, x), V && _t(c, j), C;
    if (x === null) {
      for (; j < f.length; j++)
        (x = v(c, f[j], w)),
          x !== null &&
            ((a = o(x, a, j)), E === null ? (C = x) : (E.sibling = x), (E = x));
      return V && _t(c, j), C;
    }
    for (x = r(c, x); j < f.length; j++)
      (F = g(x, c, j, f[j], w)),
        F !== null &&
          (e && F.alternate !== null && x.delete(F.key === null ? j : F.key),
          (a = o(F, a, j)),
          E === null ? (C = F) : (E.sibling = F),
          (E = F));
    return (
      e &&
        x.forEach(function (te) {
          return t(c, te);
        }),
      V && _t(c, j),
      C
    );
  }
  function h(c, a, f, w) {
    var C = Cn(f);
    if (typeof C != "function") throw Error(k(150));
    if (((f = C.call(f)), f == null)) throw Error(k(151));
    for (
      var E = (C = null), x = a, j = (a = 0), F = null, L = f.next();
      x !== null && !L.done;
      j++, L = f.next()
    ) {
      x.index > j ? ((F = x), (x = null)) : (F = x.sibling);
      var te = p(c, x, L.value, w);
      if (te === null) {
        x === null && (x = F);
        break;
      }
      e && x && te.alternate === null && t(c, x),
        (a = o(te, a, j)),
        E === null ? (C = te) : (E.sibling = te),
        (E = te),
        (x = F);
    }
    if (L.done) return n(c, x), V && _t(c, j), C;
    if (x === null) {
      for (; !L.done; j++, L = f.next())
        (L = v(c, L.value, w)),
          L !== null &&
            ((a = o(L, a, j)), E === null ? (C = L) : (E.sibling = L), (E = L));
      return V && _t(c, j), C;
    }
    for (x = r(c, x); !L.done; j++, L = f.next())
      (L = g(x, c, j, L.value, w)),
        L !== null &&
          (e && L.alternate !== null && x.delete(L.key === null ? j : L.key),
          (a = o(L, a, j)),
          E === null ? (C = L) : (E.sibling = L),
          (E = L));
    return (
      e &&
        x.forEach(function (me) {
          return t(c, me);
        }),
      V && _t(c, j),
      C
    );
  }
  function N(c, a, f, w) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Qt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case hr:
          e: {
            for (var C = f.key, E = a; E !== null; ) {
              if (E.key === C) {
                if (((C = f.type), C === Qt)) {
                  if (E.tag === 7) {
                    n(c, E.sibling),
                      (a = l(E, f.props.children)),
                      (a.return = c),
                      (c = a);
                    break e;
                  }
                } else if (
                  E.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === ot &&
                    Vu(C) === E.type)
                ) {
                  n(c, E.sibling),
                    (a = l(E, f.props)),
                    (a.ref = zn(c, E, f)),
                    (a.return = c),
                    (c = a);
                  break e;
                }
                n(c, E);
                break;
              } else t(c, E);
              E = E.sibling;
            }
            f.type === Qt
              ? ((a = Ot(f.props.children, c.mode, w, f.key)),
                (a.return = c),
                (c = a))
              : ((w = Wr(f.type, f.key, f.props, null, c.mode, w)),
                (w.ref = zn(c, a, f)),
                (w.return = c),
                (c = w));
          }
          return i(c);
        case Ht:
          e: {
            for (E = f.key; a !== null; ) {
              if (a.key === E)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === f.containerInfo &&
                  a.stateNode.implementation === f.implementation
                ) {
                  n(c, a.sibling),
                    (a = l(a, f.children || [])),
                    (a.return = c),
                    (c = a);
                  break e;
                } else {
                  n(c, a);
                  break;
                }
              else t(c, a);
              a = a.sibling;
            }
            (a = lo(f, c.mode, w)), (a.return = c), (c = a);
          }
          return i(c);
        case ot:
          return (E = f._init), N(c, a, E(f._payload), w);
      }
      if (Dn(f)) return m(c, a, f, w);
      if (Cn(f)) return h(c, a, f, w);
      Pr(c, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        a !== null && a.tag === 6
          ? (n(c, a.sibling), (a = l(a, f)), (a.return = c), (c = a))
          : (n(c, a), (a = ro(f, c.mode, w)), (a.return = c), (c = a)),
        i(c))
      : n(c, a);
  }
  return N;
}
var fn = La(!0),
  Da = La(!1),
  fr = {},
  Be = Et(fr),
  nr = Et(fr),
  rr = Et(fr);
function zt(e) {
  if (e === fr) throw Error(k(174));
  return e;
}
function Di(e, t) {
  switch ((U(rr, t), U(nr, e), U(Be, fr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : go(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = go(t, e));
  }
  $(Be), U(Be, t);
}
function pn() {
  $(Be), $(nr), $(rr);
}
function Ma(e) {
  zt(rr.current);
  var t = zt(Be.current),
    n = go(t, e.type);
  t !== n && (U(nr, e), U(Be, n));
}
function Mi(e) {
  nr.current === e && ($(Be), $(nr));
}
var B = Et(0);
function ol(e) {
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
var Jl = [];
function Ii() {
  for (var e = 0; e < Jl.length; e++)
    Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var Ur = tt.ReactCurrentDispatcher,
  ql = tt.ReactCurrentBatchConfig,
  Mt = 0,
  H = null,
  J = null,
  b = null,
  il = !1,
  Vn = !1,
  lr = 0,
  Lf = 0;
function ie() {
  throw Error(k(321));
}
function Ri(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function Ui(e, t, n, r, l, o) {
  if (
    ((Mt = o),
    (H = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ur.current = e === null || e.memoizedState === null ? Rf : Uf),
    (e = n(r, l)),
    Vn)
  ) {
    o = 0;
    do {
      if (((Vn = !1), (lr = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (b = J = null),
        (t.updateQueue = null),
        (Ur.current = Ff),
        (e = n(r, l));
    } while (Vn);
  }
  if (
    ((Ur.current = ul),
    (t = J !== null && J.next !== null),
    (Mt = 0),
    (b = J = H = null),
    (il = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Fi() {
  var e = lr !== 0;
  return (lr = 0), e;
}
function $e() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return b === null ? (H.memoizedState = b = e) : (b = b.next = e), b;
}
function Oe() {
  if (J === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = b === null ? H.memoizedState : b.next;
  if (t !== null) (b = t), (J = e);
  else {
    if (e === null) throw Error(k(310));
    (J = e),
      (e = {
        memoizedState: J.memoizedState,
        baseState: J.baseState,
        baseQueue: J.baseQueue,
        queue: J.queue,
        next: null,
      }),
      b === null ? (H.memoizedState = b = e) : (b = b.next = e);
  }
  return b;
}
function or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = J,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      d = o;
    do {
      var y = d.lane;
      if ((Mt & y) === y)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var v = {
          lane: y,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        s === null ? ((u = s = v), (i = r)) : (s = s.next = v),
          (H.lanes |= y),
          (It |= y);
      }
      d = d.next;
    } while (d !== null && d !== o);
    s === null ? (i = r) : (s.next = u),
      Fe(r, t.memoizedState) || (ve = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (H.lanes |= o), (It |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function eo(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Fe(o, t.memoizedState) || (ve = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Ia() {}
function Ra(e, t) {
  var n = H,
    r = Oe(),
    l = t(),
    o = !Fe(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (ve = !0)),
    (r = r.queue),
    Ai(Aa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ir(9, Fa.bind(null, n, r, l, t), void 0, null),
      ee === null)
    )
      throw Error(k(349));
    Mt & 30 || Ua(n, t, l);
  }
  return l;
}
function Ua(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Fa(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), $a(t) && Va(e);
}
function Aa(e, t, n) {
  return n(function () {
    $a(t) && Va(e);
  });
}
function $a(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function Va(e) {
  var t = be(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function Wu(e) {
  var t = $e();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: or,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = If.bind(null, H, e)),
    [t.memoizedState, e]
  );
}
function ir(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = H.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (H.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Wa() {
  return Oe().memoizedState;
}
function Fr(e, t, n, r) {
  var l = $e();
  (H.flags |= e),
    (l.memoizedState = ir(1 | t, n, void 0, r === void 0 ? null : r));
}
function Cl(e, t, n, r) {
  var l = Oe();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (J !== null) {
    var i = J.memoizedState;
    if (((o = i.destroy), r !== null && Ri(r, i.deps))) {
      l.memoizedState = ir(t, n, o, r);
      return;
    }
  }
  (H.flags |= e), (l.memoizedState = ir(1 | t, n, o, r));
}
function Bu(e, t) {
  return Fr(8390656, 8, e, t);
}
function Ai(e, t) {
  return Cl(2048, 8, e, t);
}
function Ba(e, t) {
  return Cl(4, 2, e, t);
}
function Ha(e, t) {
  return Cl(4, 4, e, t);
}
function Qa(e, t) {
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
function Ka(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Cl(4, 4, Qa.bind(null, t, e), n)
  );
}
function $i() {}
function Ya(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ri(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ga(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ri(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Xa(e, t, n) {
  return Mt & 21
    ? (Fe(n, t) || ((n = qs()), (H.lanes |= n), (It |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ve = !0)), (e.memoizedState = n));
}
function Df(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), (ql.transition = r);
  }
}
function Za() {
  return Oe().memoizedState;
}
function Mf(e, t, n) {
  var r = yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ja(e))
  )
    qa(t, n);
  else if (((n = ja(e, t, n, r)), n !== null)) {
    var l = de();
    Ue(n, e, r, l), ba(n, t, r);
  }
}
function If(e, t, n) {
  var r = yt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ja(e)) qa(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), Fe(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Oi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = ja(e, t, l, r)),
      n !== null && ((l = de()), Ue(n, e, r, l), ba(n, t, r));
  }
}
function Ja(e) {
  var t = e.alternate;
  return e === H || (t !== null && t === H);
}
function qa(e, t) {
  Vn = il = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ba(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gi(e, n);
  }
}
var ul = {
    readContext: Te,
    useCallback: ie,
    useContext: ie,
    useEffect: ie,
    useImperativeHandle: ie,
    useInsertionEffect: ie,
    useLayoutEffect: ie,
    useMemo: ie,
    useReducer: ie,
    useRef: ie,
    useState: ie,
    useDebugValue: ie,
    useDeferredValue: ie,
    useTransition: ie,
    useMutableSource: ie,
    useSyncExternalStore: ie,
    useId: ie,
    unstable_isNewReconciler: !1,
  },
  Rf = {
    readContext: Te,
    useCallback: function (e, t) {
      return ($e().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Te,
    useEffect: Bu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Fr(4194308, 4, Qa.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Fr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Fr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = $e();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = $e();
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
        (e = e.dispatch = Mf.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = $e();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Wu,
    useDebugValue: $i,
    useDeferredValue: function (e) {
      return ($e().memoizedState = e);
    },
    useTransition: function () {
      var e = Wu(!1),
        t = e[0];
      return (e = Df.bind(null, e[1])), ($e().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = H,
        l = $e();
      if (V) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), ee === null)) throw Error(k(349));
        Mt & 30 || Ua(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Bu(Aa.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ir(9, Fa.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = $e(),
        t = ee.identifierPrefix;
      if (V) {
        var n = Xe,
          r = Ge;
        (n = (r & ~(1 << (32 - Re(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = lr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Lf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Uf = {
    readContext: Te,
    useCallback: Ya,
    useContext: Te,
    useEffect: Ai,
    useImperativeHandle: Ka,
    useInsertionEffect: Ba,
    useLayoutEffect: Ha,
    useMemo: Ga,
    useReducer: bl,
    useRef: Wa,
    useState: function () {
      return bl(or);
    },
    useDebugValue: $i,
    useDeferredValue: function (e) {
      var t = Oe();
      return Xa(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = bl(or)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: Ia,
    useSyncExternalStore: Ra,
    useId: Za,
    unstable_isNewReconciler: !1,
  },
  Ff = {
    readContext: Te,
    useCallback: Ya,
    useContext: Te,
    useEffect: Ai,
    useImperativeHandle: Ka,
    useInsertionEffect: Ba,
    useLayoutEffect: Ha,
    useMemo: Ga,
    useReducer: eo,
    useRef: Wa,
    useState: function () {
      return eo(or);
    },
    useDebugValue: $i,
    useDeferredValue: function (e) {
      var t = Oe();
      return J === null ? (t.memoizedState = e) : Xa(t, J.memoizedState, e);
    },
    useTransition: function () {
      var e = eo(or)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: Ia,
    useSyncExternalStore: Ra,
    useId: Za,
    unstable_isNewReconciler: !1,
  };
function mn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += dd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function to(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $o(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Af = typeof WeakMap == "function" ? WeakMap : Map;
function ec(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      al || ((al = !0), (Zo = r)), $o(e, t);
    }),
    n
  );
}
function tc(e, t, n) {
  (n = Ze(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        $o(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        $o(e, t),
          typeof r != "function" &&
            (gt === null ? (gt = new Set([this])) : gt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Hu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Af();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = bf.bind(null, e, t, n)), t.then(e, e));
}
function Qu(e) {
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
function Ku(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ze(-1, 1)), (t.tag = 2), vt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var $f = tt.ReactCurrentOwner,
  ve = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Da(t, null, n, r) : fn(t, e.child, n, r);
}
function Yu(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    un(t, l),
    (r = Ui(e, t, n, r, o, l)),
    (n = Fi()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : (V && n && _i(t), (t.flags |= 1), ce(e, t, r, l), t.child)
  );
}
function Gu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Gi(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), nc(e, t, o, r, l))
      : ((e = Wr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qn), n(i, r) && e.ref === t.ref)
    )
      return et(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = wt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function nc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (qn(o, r) && e.ref === t.ref)
      if (((ve = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (ve = !0);
      else return (t.lanes = e.lanes), et(e, t, l);
  }
  return Vo(e, t, n, r, l);
}
function rc(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        U(tn, Se),
        (Se |= n);
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
          U(tn, Se),
          (Se |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        U(tn, Se),
        (Se |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      U(tn, Se),
      (Se |= r);
  return ce(e, t, l, n), t.child;
}
function lc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Vo(e, t, n, r, l) {
  var o = ye(n) ? Lt : ae.current;
  return (
    (o = cn(t, o)),
    un(t, l),
    (n = Ui(e, t, n, r, o, l)),
    (r = Fi()),
    e !== null && !ve
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        et(e, t, l))
      : (V && r && _i(t), (t.flags |= 1), ce(e, t, n, l), t.child)
  );
}
function Xu(e, t, n, r, l) {
  if (ye(n)) {
    var o = !0;
    br(t);
  } else o = !1;
  if ((un(t, l), t.stateNode === null))
    Ar(e, t), Oa(t, n, r), Ao(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = Te(d))
      : ((d = ye(n) ? Lt : ae.current), (d = cn(t, d)));
    var y = n.getDerivedStateFromProps,
      v =
        typeof y == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    v ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== d) && $u(t, i, r, d)),
      (it = !1);
    var p = t.memoizedState;
    (i.state = p),
      ll(t, r, i, l),
      (s = t.memoizedState),
      u !== r || p !== s || ge.current || it
        ? (typeof y == "function" && (Fo(t, n, y, r), (s = t.memoizedState)),
          (u = it || Au(t, n, u, r, p, s, d))
            ? (v ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = d),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      za(e, t),
      (u = t.memoizedProps),
      (d = t.type === t.elementType ? u : De(t.type, u)),
      (i.props = d),
      (v = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = Te(s))
        : ((s = ye(n) ? Lt : ae.current), (s = cn(t, s)));
    var g = n.getDerivedStateFromProps;
    (y =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== v || p !== s) && $u(t, i, r, s)),
      (it = !1),
      (p = t.memoizedState),
      (i.state = p),
      ll(t, r, i, l);
    var m = t.memoizedState;
    u !== v || p !== m || ge.current || it
      ? (typeof g == "function" && (Fo(t, n, g, r), (m = t.memoizedState)),
        (d = it || Au(t, n, d, r, p, m, s) || !1)
          ? (y ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, m, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, m, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (i.props = r),
        (i.state = m),
        (i.context = s),
        (r = d))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Wo(e, t, n, r, o, l);
}
function Wo(e, t, n, r, l, o) {
  lc(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Mu(t, n, !1), et(e, t, o);
  (r = t.stateNode), ($f.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = fn(t, e.child, null, o)), (t.child = fn(t, null, u, o)))
      : ce(e, t, u, o),
    (t.memoizedState = r.state),
    l && Mu(t, n, !0),
    t.child
  );
}
function oc(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Du(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Du(e, t.context, !1),
    Di(e, t.containerInfo);
}
function Zu(e, t, n, r, l) {
  return dn(), Ni(l), (t.flags |= 256), ce(e, t, n, r), t.child;
}
var Bo = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ho(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ic(e, t, n) {
  var r = t.pendingProps,
    l = B.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    U(B, l & 1),
    e === null)
  )
    return (
      Ro(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = Nl(i, r, 0, null)),
              (e = Ot(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Ho(n)),
              (t.memoizedState = Bo),
              e)
            : Vi(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return Vf(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = wt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = wt(u, o)) : ((o = Ot(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Ho(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = wt(o, { mode: "visible", children: r.children })),
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
function Vi(e, t) {
  return (
    (t = Nl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nr(e, t, n, r) {
  return (
    r !== null && Ni(r),
    fn(t, e.child, null, n),
    (e = Vi(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Vf(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = to(Error(k(422)))), Nr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = Nl({ mode: "visible", children: r.children }, l, 0, null)),
        (o = Ot(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && fn(t, e.child, null, i),
        (t.child.memoizedState = Ho(i)),
        (t.memoizedState = Bo),
        o);
  if (!(t.mode & 1)) return Nr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(k(419))), (r = to(o, r, void 0)), Nr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), ve || u)) {
    if (((r = ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), be(e, l), Ue(r, e, l, -1));
    }
    return Yi(), (r = to(Error(k(421)))), Nr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ep.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ke = ht(l.nextSibling)),
      (xe = t),
      (V = !0),
      (Ie = null),
      e !== null &&
        ((Pe[Ne++] = Ge),
        (Pe[Ne++] = Xe),
        (Pe[Ne++] = Dt),
        (Ge = e.id),
        (Xe = e.overflow),
        (Dt = t)),
      (t = Vi(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Uo(e.return, t, n);
}
function no(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function uc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ce(e, t, r.children, n), (r = B.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ju(e, n, t);
        else if (e.tag === 19) Ju(e, n, t);
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
  if ((U(B, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && ol(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          no(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && ol(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        no(t, !0, n, null, o);
        break;
      case "together":
        no(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ar(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function et(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (It |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = wt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Wf(e, t, n) {
  switch (t.tag) {
    case 3:
      oc(t), dn();
      break;
    case 5:
      Ma(t);
      break;
    case 1:
      ye(t.type) && br(t);
      break;
    case 4:
      Di(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      U(nl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (U(B, B.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ic(e, t, n)
          : (U(B, B.current & 1),
            (e = et(e, t, n)),
            e !== null ? e.sibling : null);
      U(B, B.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return uc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        U(B, B.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), rc(e, t, n);
  }
  return et(e, t, n);
}
var sc, Qo, ac, cc;
sc = function (e, t) {
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
Qo = function () {};
ac = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), zt(Be.current);
    var o = null;
    switch (n) {
      case "input":
        (l = po(e, l)), (r = po(e, r)), (o = []);
        break;
      case "select":
        (l = Q({}, l, { value: void 0 })),
          (r = Q({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = vo(e, l)), (r = vo(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Jr);
    }
    yo(n, r);
    var i;
    n = null;
    for (d in l)
      if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
        if (d === "style") {
          var u = l[d];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Qn.hasOwnProperty(d)
              ? o || (o = [])
              : (o = o || []).push(d, null));
    for (d in r) {
      var s = r[d];
      if (
        ((u = l != null ? l[d] : void 0),
        r.hasOwnProperty(d) && s !== u && (s != null || u != null))
      )
        if (d === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(d, n)), (n = s);
        else
          d === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(d, s))
            : d === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(d, "" + s)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Qn.hasOwnProperty(d)
                ? (s != null && d === "onScroll" && A("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(d, s));
    }
    n && (o = o || []).push("style", n);
    var d = o;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
cc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Tn(e, t) {
  if (!V)
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
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Bf(e, t, n) {
  var r = t.pendingProps;
  switch ((Pi(t), t.tag)) {
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
      return ue(t), null;
    case 1:
      return ye(t.type) && qr(), ue(t), null;
    case 3:
      return (
        (r = t.stateNode),
        pn(),
        $(ge),
        $(ae),
        Ii(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_r(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ie !== null && (bo(Ie), (Ie = null)))),
        Qo(e, t),
        ue(t),
        null
      );
    case 5:
      Mi(t);
      var l = zt(rr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ac(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ue(t), null;
        }
        if (((e = zt(Be.current)), _r(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ve] = t), (r[tr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              A("cancel", r), A("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              A("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < In.length; l++) A(In[l], r);
              break;
            case "source":
              A("error", r);
              break;
            case "img":
            case "image":
            case "link":
              A("error", r), A("load", r);
              break;
            case "details":
              A("toggle", r);
              break;
            case "input":
              iu(r, o), A("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                A("invalid", r);
              break;
            case "textarea":
              su(r, o), A("invalid", r);
          }
          yo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      Cr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Qn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  A("scroll", r);
            }
          switch (n) {
            case "input":
              vr(r), uu(r, o, !0);
              break;
            case "textarea":
              vr(r), au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Jr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Us(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ve] = t),
            (e[tr] = r),
            sc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = wo(n, r)), n)) {
              case "dialog":
                A("cancel", e), A("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                A("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < In.length; l++) A(In[l], e);
                l = r;
                break;
              case "source":
                A("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                A("error", e), A("load", e), (l = r);
                break;
              case "details":
                A("toggle", e), (l = r);
                break;
              case "input":
                iu(e, r), (l = po(e, r)), A("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = Q({}, r, { value: void 0 })),
                  A("invalid", e);
                break;
              case "textarea":
                su(e, r), (l = vo(e, r)), A("invalid", e);
                break;
              default:
                l = r;
            }
            yo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? $s(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Fs(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Kn(e, s)
                    : typeof s == "number" && Kn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Qn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && A("scroll", e)
                      : s != null && di(e, o, s, i));
              }
            switch (n) {
              case "input":
                vr(e), uu(e, r, !1);
                break;
              case "textarea":
                vr(e), au(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + St(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? nn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      nn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Jr);
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
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) cc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = zt(rr.current)), zt(Be.current), _r(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ve] = t),
            (o = r.nodeValue !== n) && ((e = xe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Cr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Cr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ve] = t),
            (t.stateNode = r);
      }
      return ue(t), null;
    case 13:
      if (
        ($(B),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (V && ke !== null && t.mode & 1 && !(t.flags & 128))
          Na(), dn(), (t.flags |= 98560), (o = !1);
        else if (((o = _r(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[Ve] = t;
          } else
            dn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ue(t), (o = !1);
        } else Ie !== null && (bo(Ie), (Ie = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || B.current & 1 ? q === 0 && (q = 3) : Yi())),
          t.updateQueue !== null && (t.flags |= 4),
          ue(t),
          null);
    case 4:
      return (
        pn(), Qo(e, t), e === null && bn(t.stateNode.containerInfo), ue(t), null
      );
    case 10:
      return Ti(t.type._context), ue(t), null;
    case 17:
      return ye(t.type) && qr(), ue(t), null;
    case 19:
      if (($(B), (o = t.memoizedState), o === null)) return ue(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Tn(o, !1);
        else {
          if (q !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = ol(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Tn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return U(B, (B.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            G() > hn &&
            ((t.flags |= 128), (r = !0), Tn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ol(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Tn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !V)
            )
              return ue(t), null;
          } else
            2 * G() - o.renderingStartTime > hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Tn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = G()),
          (t.sibling = null),
          (n = B.current),
          U(B, r ? (n & 1) | 2 : n & 1),
          t)
        : (ue(t), null);
    case 22:
    case 23:
      return (
        Ki(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Se & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ue(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Hf(e, t) {
  switch ((Pi(t), t.tag)) {
    case 1:
      return (
        ye(t.type) && qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        pn(),
        $(ge),
        $(ae),
        Ii(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Mi(t), null;
    case 13:
      if (($(B), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        dn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(B), null;
    case 4:
      return pn(), null;
    case 10:
      return Ti(t.type._context), null;
    case 22:
    case 23:
      return Ki(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var jr = !1,
  se = !1,
  Qf = typeof WeakSet == "function" ? WeakSet : Set,
  P = null;
function en(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Y(e, t, r);
      }
    else n.current = null;
}
function Ko(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var qu = !1;
function Kf(e, t) {
  if (((zo = Gr), (e = ma()), Ci(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            d = 0,
            y = 0,
            v = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              v !== n || (l !== 0 && v.nodeType !== 3) || (u = i + l),
                v !== o || (r !== 0 && v.nodeType !== 3) || (s = i + r),
                v.nodeType === 3 && (i += v.nodeValue.length),
                (g = v.firstChild) !== null;

            )
              (p = v), (v = g);
            for (;;) {
              if (v === e) break t;
              if (
                (p === n && ++d === l && (u = i),
                p === o && ++y === r && (s = i),
                (g = v.nextSibling) !== null)
              )
                break;
              (v = p), (p = v.parentNode);
            }
            v = g;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (To = { focusedElem: e, selectionRange: n }, Gr = !1, P = t; P !== null; )
    if (((t = P), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (P = e);
    else
      for (; P !== null; ) {
        t = P;
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
                  var h = m.memoizedProps,
                    N = m.memoizedState,
                    c = t.stateNode,
                    a = c.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? h : De(t.type, h),
                      N
                    );
                  c.__reactInternalSnapshotBeforeUpdate = a;
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
                throw Error(k(163));
            }
        } catch (w) {
          Y(t, t.return, w);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (P = e);
          break;
        }
        P = t.return;
      }
  return (m = qu), (qu = !1), m;
}
function Wn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ko(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function _l(e, t) {
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
function Yo(e) {
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
function dc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), dc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ve], delete t[tr], delete t[Do], delete t[jf], delete t[zf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function fc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || fc(e.return)) return null;
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
function Go(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Jr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Go(e, t, n), e = e.sibling; e !== null; ) Go(e, t, n), (e = e.sibling);
}
function Xo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xo(e, t, n), e = e.sibling; e !== null; ) Xo(e, t, n), (e = e.sibling);
}
var ne = null,
  Me = !1;
function lt(e, t, n) {
  for (n = n.child; n !== null; ) pc(e, t, n), (n = n.sibling);
}
function pc(e, t, n) {
  if (We && typeof We.onCommitFiberUnmount == "function")
    try {
      We.onCommitFiberUnmount(gl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      se || en(n, t);
    case 6:
      var r = ne,
        l = Me;
      (ne = null),
        lt(e, t, n),
        (ne = r),
        (Me = l),
        ne !== null &&
          (Me
            ? ((e = ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null &&
        (Me
          ? ((e = ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Xl(e.parentNode, n)
              : e.nodeType === 1 && Xl(e, n),
            Zn(e))
          : Xl(ne, n.stateNode));
      break;
    case 4:
      (r = ne),
        (l = Me),
        (ne = n.stateNode.containerInfo),
        (Me = !0),
        lt(e, t, n),
        (ne = r),
        (Me = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Ko(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      lt(e, t, n);
      break;
    case 1:
      if (
        !se &&
        (en(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          Y(n, t, u);
        }
      lt(e, t, n);
      break;
    case 21:
      lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((se = (r = se) || n.memoizedState !== null), lt(e, t, n), (se = r))
        : lt(e, t, n);
      break;
    default:
      lt(e, t, n);
  }
}
function es(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Qf()),
      t.forEach(function (r) {
        var l = tp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ne = u.stateNode), (Me = !1);
              break e;
            case 3:
              (ne = u.stateNode.containerInfo), (Me = !0);
              break e;
            case 4:
              (ne = u.stateNode.containerInfo), (Me = !0);
              break e;
          }
          u = u.return;
        }
        if (ne === null) throw Error(k(160));
        pc(o, i, l), (ne = null), (Me = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (d) {
        Y(l, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) mc(t, e), (t = t.sibling);
}
function mc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Le(t, e), Ae(e), r & 4)) {
        try {
          Wn(3, e, e.return), _l(3, e);
        } catch (h) {
          Y(e, e.return, h);
        }
        try {
          Wn(5, e, e.return);
        } catch (h) {
          Y(e, e.return, h);
        }
      }
      break;
    case 1:
      Le(t, e), Ae(e), r & 512 && n !== null && en(n, n.return);
      break;
    case 5:
      if (
        (Le(t, e),
        Ae(e),
        r & 512 && n !== null && en(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Kn(l, "");
        } catch (h) {
          Y(e, e.return, h);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && Is(l, o),
              wo(u, i);
            var d = wo(u, o);
            for (i = 0; i < s.length; i += 2) {
              var y = s[i],
                v = s[i + 1];
              y === "style"
                ? $s(l, v)
                : y === "dangerouslySetInnerHTML"
                ? Fs(l, v)
                : y === "children"
                ? Kn(l, v)
                : di(l, y, v, d);
            }
            switch (u) {
              case "input":
                mo(l, o);
                break;
              case "textarea":
                Rs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? nn(l, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? nn(l, !!o.multiple, o.defaultValue, !0)
                      : nn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[tr] = o;
          } catch (h) {
            Y(e, e.return, h);
          }
      }
      break;
    case 6:
      if ((Le(t, e), Ae(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (h) {
          Y(e, e.return, h);
        }
      }
      break;
    case 3:
      if (
        (Le(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Zn(t.containerInfo);
        } catch (h) {
          Y(e, e.return, h);
        }
      break;
    case 4:
      Le(t, e), Ae(e);
      break;
    case 13:
      Le(t, e),
        Ae(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Hi = G())),
        r & 4 && es(e);
      break;
    case 22:
      if (
        ((y = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((se = (d = se) || y), Le(t, e), (se = d)) : Le(t, e),
        Ae(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !y && e.mode & 1)
        )
          for (P = e, y = e.child; y !== null; ) {
            for (v = P = y; P !== null; ) {
              switch (((p = P), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Wn(4, p, p.return);
                  break;
                case 1:
                  en(p, p.return);
                  var m = p.stateNode;
                  if (typeof m.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (m.props = t.memoizedProps),
                        (m.state = t.memoizedState),
                        m.componentWillUnmount();
                    } catch (h) {
                      Y(r, n, h);
                    }
                  }
                  break;
                case 5:
                  en(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    ns(v);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (P = g)) : ns(v);
            }
            y = y.sibling;
          }
        e: for (y = null, v = e; ; ) {
          if (v.tag === 5) {
            if (y === null) {
              y = v;
              try {
                (l = v.stateNode),
                  d
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = v.stateNode),
                      (s = v.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = As("display", i)));
              } catch (h) {
                Y(e, e.return, h);
              }
            }
          } else if (v.tag === 6) {
            if (y === null)
              try {
                v.stateNode.nodeValue = d ? "" : v.memoizedProps;
              } catch (h) {
                Y(e, e.return, h);
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
            y === v && (y = null), (v = v.return);
          }
          y === v && (y = null), (v.sibling.return = v.return), (v = v.sibling);
        }
      }
      break;
    case 19:
      Le(t, e), Ae(e), r & 4 && es(e);
      break;
    case 21:
      break;
    default:
      Le(t, e), Ae(e);
  }
}
function Ae(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (fc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Kn(l, ""), (r.flags &= -33));
          var o = bu(e);
          Xo(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = bu(e);
          Go(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      Y(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Yf(e, t, n) {
  (P = e), hc(e);
}
function hc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || jr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || se;
        u = jr;
        var d = se;
        if (((jr = i), (se = s) && !d))
          for (P = l; P !== null; )
            (i = P),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? rs(l)
                : s !== null
                ? ((s.return = i), (P = s))
                : rs(l);
        for (; o !== null; ) (P = o), hc(o), (o = o.sibling);
        (P = l), (jr = u), (se = d);
      }
      ts(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (P = o)) : ts(e);
  }
}
function ts(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              se || _l(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !se)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : De(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Fu(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Fu(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                var d = t.alternate;
                if (d !== null) {
                  var y = d.memoizedState;
                  if (y !== null) {
                    var v = y.dehydrated;
                    v !== null && Zn(v);
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
              throw Error(k(163));
          }
        se || (t.flags & 512 && Yo(t));
      } catch (p) {
        Y(t, t.return, p);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function ns(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (P = n);
      break;
    }
    P = t.return;
  }
}
function rs(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _l(4, t);
          } catch (s) {
            Y(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Y(t, l, s);
            }
          }
          var o = t.return;
          try {
            Yo(t);
          } catch (s) {
            Y(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Yo(t);
          } catch (s) {
            Y(t, i, s);
          }
      }
    } catch (s) {
      Y(t, t.return, s);
    }
    if (t === e) {
      P = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (P = u);
      break;
    }
    P = t.return;
  }
}
var Gf = Math.ceil,
  sl = tt.ReactCurrentDispatcher,
  Wi = tt.ReactCurrentOwner,
  ze = tt.ReactCurrentBatchConfig,
  I = 0,
  ee = null,
  Z = null,
  re = 0,
  Se = 0,
  tn = Et(0),
  q = 0,
  ur = null,
  It = 0,
  Pl = 0,
  Bi = 0,
  Bn = null,
  he = null,
  Hi = 0,
  hn = 1 / 0,
  Ke = null,
  al = !1,
  Zo = null,
  gt = null,
  zr = !1,
  ct = null,
  cl = 0,
  Hn = 0,
  Jo = null,
  $r = -1,
  Vr = 0;
function de() {
  return I & 6 ? G() : $r !== -1 ? $r : ($r = G());
}
function yt(e) {
  return e.mode & 1
    ? I & 2 && re !== 0
      ? re & -re
      : Of.transition !== null
      ? (Vr === 0 && (Vr = qs()), Vr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : oa(e.type))),
        e)
    : 1;
}
function Ue(e, t, n, r) {
  if (50 < Hn) throw ((Hn = 0), (Jo = null), Error(k(185)));
  ar(e, n, r),
    (!(I & 2) || e !== ee) &&
      (e === ee && (!(I & 2) && (Pl |= n), q === 4 && st(e, re)),
      we(e, r),
      n === 1 && I === 0 && !(t.mode & 1) && ((hn = G() + 500), xl && Ct()));
}
function we(e, t) {
  var n = e.callbackNode;
  Td(e, t);
  var r = Yr(e, e === ee ? re : 0);
  if (r === 0)
    n !== null && fu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && fu(n), t === 1))
      e.tag === 0 ? Tf(ls.bind(null, e)) : Ca(ls.bind(null, e)),
        Pf(function () {
          !(I & 6) && Ct();
        }),
        (n = null);
    else {
      switch (bs(r)) {
        case 1:
          n = vi;
          break;
        case 4:
          n = Zs;
          break;
        case 16:
          n = Kr;
          break;
        case 536870912:
          n = Js;
          break;
        default:
          n = Kr;
      }
      n = Ec(n, vc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function vc(e, t) {
  if ((($r = -1), (Vr = 0), I & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (sn() && e.callbackNode !== n) return null;
  var r = Yr(e, e === ee ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = dl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var o = yc();
    (ee !== e || re !== t) && ((Ke = null), (hn = G() + 500), Tt(e, t));
    do
      try {
        Jf();
        break;
      } catch (u) {
        gc(e, u);
      }
    while (1);
    zi(),
      (sl.current = o),
      (I = l),
      Z !== null ? (t = 0) : ((ee = null), (re = 0), (t = q));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Co(e)), l !== 0 && ((r = l), (t = qo(e, l)))), t === 1)
    )
      throw ((n = ur), Tt(e, 0), st(e, r), we(e, G()), n);
    if (t === 6) st(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Xf(l) &&
          ((t = dl(e, r)),
          t === 2 && ((o = Co(e)), o !== 0 && ((r = o), (t = qo(e, o)))),
          t === 1))
      )
        throw ((n = ur), Tt(e, 0), st(e, r), we(e, G()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Pt(e, he, Ke);
          break;
        case 3:
          if (
            (st(e, r), (r & 130023424) === r && ((t = Hi + 500 - G()), 10 < t))
          ) {
            if (Yr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              de(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Lo(Pt.bind(null, e, he, Ke), t);
            break;
          }
          Pt(e, he, Ke);
          break;
        case 4:
          if ((st(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Re(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = G() - r),
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
                : 1960 * Gf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Lo(Pt.bind(null, e, he, Ke), r);
            break;
          }
          Pt(e, he, Ke);
          break;
        case 5:
          Pt(e, he, Ke);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return we(e, G()), e.callbackNode === n ? vc.bind(null, e) : null;
}
function qo(e, t) {
  var n = Bn;
  return (
    e.current.memoizedState.isDehydrated && (Tt(e, t).flags |= 256),
    (e = dl(e, t)),
    e !== 2 && ((t = he), (he = n), t !== null && bo(t)),
    e
  );
}
function bo(e) {
  he === null ? (he = e) : he.push.apply(he, e);
}
function Xf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Fe(o(), l)) return !1;
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
function st(e, t) {
  for (
    t &= ~Bi,
      t &= ~Pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Re(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ls(e) {
  if (I & 6) throw Error(k(327));
  sn();
  var t = Yr(e, 0);
  if (!(t & 1)) return we(e, G()), null;
  var n = dl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Co(e);
    r !== 0 && ((t = r), (n = qo(e, r)));
  }
  if (n === 1) throw ((n = ur), Tt(e, 0), st(e, t), we(e, G()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Pt(e, he, Ke),
    we(e, G()),
    null
  );
}
function Qi(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    (I = n), I === 0 && ((hn = G() + 500), xl && Ct());
  }
}
function Rt(e) {
  ct !== null && ct.tag === 0 && !(I & 6) && sn();
  var t = I;
  I |= 1;
  var n = ze.transition,
    r = R;
  try {
    if (((ze.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (ze.transition = n), (I = t), !(I & 6) && Ct();
  }
}
function Ki() {
  (Se = tn.current), $(tn);
}
function Tt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), _f(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((Pi(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && qr();
          break;
        case 3:
          pn(), $(ge), $(ae), Ii();
          break;
        case 5:
          Mi(r);
          break;
        case 4:
          pn();
          break;
        case 13:
          $(B);
          break;
        case 19:
          $(B);
          break;
        case 10:
          Ti(r.type._context);
          break;
        case 22:
        case 23:
          Ki();
      }
      n = n.return;
    }
  if (
    ((ee = e),
    (Z = e = wt(e.current, null)),
    (re = Se = t),
    (q = 0),
    (ur = null),
    (Bi = Pl = It = 0),
    (he = Bn = null),
    jt !== null)
  ) {
    for (t = 0; t < jt.length; t++)
      if (((n = jt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    jt = null;
  }
  return e;
}
function gc(e, t) {
  do {
    var n = Z;
    try {
      if ((zi(), (Ur.current = ul), il)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        il = !1;
      }
      if (
        ((Mt = 0),
        (b = J = H = null),
        (Vn = !1),
        (lr = 0),
        (Wi.current = null),
        n === null || n.return === null)
      ) {
        (q = 1), (ur = t), (Z = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = re),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var d = s,
            y = u,
            v = y.tag;
          if (!(y.mode & 1) && (v === 0 || v === 11 || v === 15)) {
            var p = y.alternate;
            p
              ? ((y.updateQueue = p.updateQueue),
                (y.memoizedState = p.memoizedState),
                (y.lanes = p.lanes))
              : ((y.updateQueue = null), (y.memoizedState = null));
          }
          var g = Qu(i);
          if (g !== null) {
            (g.flags &= -257),
              Ku(g, i, u, o, t),
              g.mode & 1 && Hu(o, d, t),
              (t = g),
              (s = d);
            var m = t.updateQueue;
            if (m === null) {
              var h = new Set();
              h.add(s), (t.updateQueue = h);
            } else m.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Hu(o, d, t), Yi();
              break e;
            }
            s = Error(k(426));
          }
        } else if (V && u.mode & 1) {
          var N = Qu(i);
          if (N !== null) {
            !(N.flags & 65536) && (N.flags |= 256),
              Ku(N, i, u, o, t),
              Ni(mn(s, u));
            break e;
          }
        }
        (o = s = mn(s, u)),
          q !== 4 && (q = 2),
          Bn === null ? (Bn = [o]) : Bn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var c = ec(o, s, t);
              Uu(o, c);
              break e;
            case 1:
              u = s;
              var a = o.type,
                f = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (gt === null || !gt.has(f))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var w = tc(o, u, t);
                Uu(o, w);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Sc(n);
    } catch (C) {
      (t = C), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function yc() {
  var e = sl.current;
  return (sl.current = ul), e === null ? ul : e;
}
function Yi() {
  (q === 0 || q === 3 || q === 2) && (q = 4),
    ee === null || (!(It & 268435455) && !(Pl & 268435455)) || st(ee, re);
}
function dl(e, t) {
  var n = I;
  I |= 2;
  var r = yc();
  (ee !== e || re !== t) && ((Ke = null), Tt(e, t));
  do
    try {
      Zf();
      break;
    } catch (l) {
      gc(e, l);
    }
  while (1);
  if ((zi(), (I = n), (sl.current = r), Z !== null)) throw Error(k(261));
  return (ee = null), (re = 0), q;
}
function Zf() {
  for (; Z !== null; ) wc(Z);
}
function Jf() {
  for (; Z !== null && !kd(); ) wc(Z);
}
function wc(e) {
  var t = xc(e.alternate, e, Se);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sc(e) : (Z = t),
    (Wi.current = null);
}
function Sc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Hf(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (q = 6), (Z = null);
        return;
      }
    } else if (((n = Bf(n, t, Se)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function Pt(e, t, n) {
  var r = R,
    l = ze.transition;
  try {
    (ze.transition = null), (R = 1), qf(e, t, n, r);
  } finally {
    (ze.transition = l), (R = r);
  }
  return null;
}
function qf(e, t, n, r) {
  do sn();
  while (ct !== null);
  if (I & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Od(e, o),
    e === ee && ((Z = ee = null), (re = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zr ||
      ((zr = !0),
      Ec(Kr, function () {
        return sn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ze.transition), (ze.transition = null);
    var i = R;
    R = 1;
    var u = I;
    (I |= 4),
      (Wi.current = null),
      Kf(e, n),
      mc(n, e),
      yf(To),
      (Gr = !!zo),
      (To = zo = null),
      (e.current = n),
      Yf(n),
      xd(),
      (I = u),
      (R = i),
      (ze.transition = o);
  } else e.current = n;
  if (
    (zr && ((zr = !1), (ct = e), (cl = l)),
    (o = e.pendingLanes),
    o === 0 && (gt = null),
    _d(n.stateNode),
    we(e, G()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (al) throw ((al = !1), (e = Zo), (Zo = null), e);
  return (
    cl & 1 && e.tag !== 0 && sn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Jo ? Hn++ : ((Hn = 0), (Jo = e))) : (Hn = 0),
    Ct(),
    null
  );
}
function sn() {
  if (ct !== null) {
    var e = bs(cl),
      t = ze.transition,
      n = R;
    try {
      if (((ze.transition = null), (R = 16 > e ? 16 : e), ct === null))
        var r = !1;
      else {
        if (((e = ct), (ct = null), (cl = 0), I & 6)) throw Error(k(331));
        var l = I;
        for (I |= 4, P = e.current; P !== null; ) {
          var o = P,
            i = o.child;
          if (P.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var d = u[s];
                for (P = d; P !== null; ) {
                  var y = P;
                  switch (y.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wn(8, y, o);
                  }
                  var v = y.child;
                  if (v !== null) (v.return = y), (P = v);
                  else
                    for (; P !== null; ) {
                      y = P;
                      var p = y.sibling,
                        g = y.return;
                      if ((dc(y), y === d)) {
                        P = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (P = p);
                        break;
                      }
                      P = g;
                    }
                }
              }
              var m = o.alternate;
              if (m !== null) {
                var h = m.child;
                if (h !== null) {
                  m.child = null;
                  do {
                    var N = h.sibling;
                    (h.sibling = null), (h = N);
                  } while (h !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (P = i);
          else
            e: for (; P !== null; ) {
              if (((o = P), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Wn(9, o, o.return);
                }
              var c = o.sibling;
              if (c !== null) {
                (c.return = o.return), (P = c);
                break e;
              }
              P = o.return;
            }
        }
        var a = e.current;
        for (P = a; P !== null; ) {
          i = P;
          var f = i.child;
          if (i.subtreeFlags & 2064 && f !== null) (f.return = i), (P = f);
          else
            e: for (i = a; P !== null; ) {
              if (((u = P), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _l(9, u);
                  }
                } catch (C) {
                  Y(u, u.return, C);
                }
              if (u === i) {
                P = null;
                break e;
              }
              var w = u.sibling;
              if (w !== null) {
                (w.return = u.return), (P = w);
                break e;
              }
              P = u.return;
            }
        }
        if (
          ((I = l), Ct(), We && typeof We.onPostCommitFiberRoot == "function")
        )
          try {
            We.onPostCommitFiberRoot(gl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (ze.transition = t);
    }
  }
  return !1;
}
function os(e, t, n) {
  (t = mn(n, t)),
    (t = ec(e, t, 1)),
    (e = vt(e, t, 1)),
    (t = de()),
    e !== null && (ar(e, 1, t), we(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) os(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        os(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (gt === null || !gt.has(r)))
        ) {
          (e = mn(n, e)),
            (e = tc(t, e, 1)),
            (t = vt(t, e, 1)),
            (e = de()),
            t !== null && (ar(t, 1, e), we(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function bf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = de()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ee === e &&
      (re & n) === n &&
      (q === 4 || (q === 3 && (re & 130023424) === re && 500 > G() - Hi)
        ? Tt(e, 0)
        : (Bi |= n)),
    we(e, t);
}
function kc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wr), (wr <<= 1), !(wr & 130023424) && (wr = 4194304))
      : (t = 1));
  var n = de();
  (e = be(e, t)), e !== null && (ar(e, t, n), we(e, n));
}
function ep(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), kc(e, n);
}
function tp(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), kc(e, n);
}
var xc;
xc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ge.current) ve = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ve = !1), Wf(e, t, n);
      ve = !!(e.flags & 131072);
    }
  else (ve = !1), V && t.flags & 1048576 && _a(t, tl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ar(e, t), (e = t.pendingProps);
      var l = cn(t, ae.current);
      un(t, n), (l = Ui(null, t, r, e, l, n));
      var o = Fi();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            ye(r) ? ((o = !0), br(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Li(t),
            (l.updater = El),
            (t.stateNode = l),
            (l._reactInternals = t),
            Ao(t, r, e, n),
            (t = Wo(null, t, r, !0, o, n)))
          : ((t.tag = 0), V && o && _i(t), ce(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ar(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = rp(r)),
          (e = De(r, e)),
          l)
        ) {
          case 0:
            t = Vo(null, t, r, e, n);
            break e;
          case 1:
            t = Xu(null, t, r, e, n);
            break e;
          case 11:
            t = Yu(null, t, r, e, n);
            break e;
          case 14:
            t = Gu(null, t, r, De(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Vo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Xu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((oc(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          za(e, t),
          ll(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = mn(Error(k(423)), t)), (t = Zu(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = mn(Error(k(424)), t)), (t = Zu(e, t, r, n, l));
            break e;
          } else
            for (
              ke = ht(t.stateNode.containerInfo.firstChild),
                xe = t,
                V = !0,
                Ie = null,
                n = Da(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((dn(), r === l)) {
            t = et(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ma(t),
        e === null && Ro(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Oo(r, l) ? (i = null) : o !== null && Oo(r, o) && (t.flags |= 32),
        lc(e, t),
        ce(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ro(t), null;
    case 13:
      return ic(e, t, n);
    case 4:
      return (
        Di(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = fn(t, null, r, n)) : ce(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Yu(e, t, r, l, n)
      );
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          U(nl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Fe(o.value, i)) {
            if (o.children === l.children && !ge.current) {
              t = et(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ze(-1, n & -n)), (s.tag = 2);
                      var d = o.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var y = d.pending;
                        y === null
                          ? (s.next = s)
                          : ((s.next = y.next), (y.next = s)),
                          (d.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      Uo(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  Uo(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ce(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        un(t, n),
        (l = Te(l)),
        (r = r(l)),
        (t.flags |= 1),
        ce(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = De(r, t.pendingProps)),
        (l = De(r.type, l)),
        Gu(e, t, r, l, n)
      );
    case 15:
      return nc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : De(r, l)),
        Ar(e, t),
        (t.tag = 1),
        ye(r) ? ((e = !0), br(t)) : (e = !1),
        un(t, n),
        Oa(t, r, l),
        Ao(t, r, l, n),
        Wo(null, t, r, !0, e, n)
      );
    case 19:
      return uc(e, t, n);
    case 22:
      return rc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Ec(e, t) {
  return Xs(e, t);
}
function np(e, t, n, r) {
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
function je(e, t, n, r) {
  return new np(e, t, n, r);
}
function Gi(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rp(e) {
  if (typeof e == "function") return Gi(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === pi)) return 11;
    if (e === mi) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = je(e.tag, t, e.key, e.mode)),
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
function Wr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Gi(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Qt:
        return Ot(n.children, l, o, t);
      case fi:
        (i = 8), (l |= 8);
        break;
      case so:
        return (
          (e = je(12, n, t, l | 2)), (e.elementType = so), (e.lanes = o), e
        );
      case ao:
        return (e = je(13, n, t, l)), (e.elementType = ao), (e.lanes = o), e;
      case co:
        return (e = je(19, n, t, l)), (e.elementType = co), (e.lanes = o), e;
      case Ls:
        return Nl(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ts:
              i = 10;
              break e;
            case Os:
              i = 9;
              break e;
            case pi:
              i = 11;
              break e;
            case mi:
              i = 14;
              break e;
            case ot:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = je(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Ot(e, t, n, r) {
  return (e = je(7, e, r, t)), (e.lanes = n), e;
}
function Nl(e, t, n, r) {
  return (
    (e = je(22, e, r, t)),
    (e.elementType = Ls),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ro(e, t, n) {
  return (e = je(6, e, null, t)), (e.lanes = n), e;
}
function lo(e, t, n) {
  return (
    (t = je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function lp(e, t, n, r, l) {
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
    (this.eventTimes = Fl(0)),
    (this.expirationTimes = Fl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Fl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Xi(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new lp(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = je(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Li(o),
    e
  );
}
function op(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ht,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Cc(e) {
  if (!e) return kt;
  e = e._reactInternals;
  e: {
    if (Ft(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return Ea(e, n, t);
  }
  return t;
}
function _c(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Xi(n, r, !0, e, l, o, i, u, s)),
    (e.context = Cc(null)),
    (n = e.current),
    (r = de()),
    (l = yt(n)),
    (o = Ze(r, l)),
    (o.callback = t ?? null),
    vt(n, o, l),
    (e.current.lanes = l),
    ar(e, l, r),
    we(e, r),
    e
  );
}
function jl(e, t, n, r) {
  var l = t.current,
    o = de(),
    i = yt(l);
  return (
    (n = Cc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ze(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = vt(l, t, i)),
    e !== null && (Ue(e, l, i, o), Rr(e, l, i)),
    i
  );
}
function fl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function is(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zi(e, t) {
  is(e, t), (e = e.alternate) && is(e, t);
}
function ip() {
  return null;
}
var Pc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ji(e) {
  this._internalRoot = e;
}
zl.prototype.render = Ji.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  jl(e, t, null, null);
};
zl.prototype.unmount = Ji.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rt(function () {
      jl(null, e, null, null);
    }),
      (t[qe] = null);
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = na();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
    ut.splice(n, 0, e), n === 0 && la(e);
  }
};
function qi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Tl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function us() {}
function up(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var d = fl(i);
        o.call(d);
      };
    }
    var i = _c(t, r, e, 0, null, !1, !1, "", us);
    return (
      (e._reactRootContainer = i),
      (e[qe] = i.current),
      bn(e.nodeType === 8 ? e.parentNode : e),
      Rt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var d = fl(s);
      u.call(d);
    };
  }
  var s = Xi(e, 0, !1, null, null, !1, !1, "", us);
  return (
    (e._reactRootContainer = s),
    (e[qe] = s.current),
    bn(e.nodeType === 8 ? e.parentNode : e),
    Rt(function () {
      jl(t, s, n, r);
    }),
    s
  );
}
function Ol(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = fl(i);
        u.call(s);
      };
    }
    jl(t, i, e, l);
  } else i = up(n, t, e, l, r);
  return fl(i);
}
ea = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 &&
          (gi(t, n | 1), we(t, G()), !(I & 6) && ((hn = G() + 500), Ct()));
      }
      break;
    case 13:
      Rt(function () {
        var r = be(e, 1);
        if (r !== null) {
          var l = de();
          Ue(r, e, 1, l);
        }
      }),
        Zi(e, 1);
  }
};
yi = function (e) {
  if (e.tag === 13) {
    var t = be(e, 134217728);
    if (t !== null) {
      var n = de();
      Ue(t, e, 134217728, n);
    }
    Zi(e, 134217728);
  }
};
ta = function (e) {
  if (e.tag === 13) {
    var t = yt(e),
      n = be(e, t);
    if (n !== null) {
      var r = de();
      Ue(n, e, t, r);
    }
    Zi(e, t);
  }
};
na = function () {
  return R;
};
ra = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
ko = function (e, t, n) {
  switch (t) {
    case "input":
      if ((mo(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var l = kl(r);
            if (!l) throw Error(k(90));
            Ms(r), mo(r, l);
          }
        }
      }
      break;
    case "textarea":
      Rs(e, n);
      break;
    case "select":
      (t = n.value), t != null && nn(e, !!n.multiple, t, !1);
  }
};
Bs = Qi;
Hs = Rt;
var sp = { usingClientEntryPoint: !1, Events: [dr, Xt, kl, Vs, Ws, Qi] },
  On = {
    findFiberByHostInstance: Nt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  ap = {
    bundleType: On.bundleType,
    version: On.version,
    rendererPackageName: On.rendererPackageName,
    rendererConfig: On.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ys(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: On.findFiberByHostInstance || ip,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tr.isDisabled && Tr.supportsFiber)
    try {
      (gl = Tr.inject(ap)), (We = Tr);
    } catch {}
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sp;
Ce.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qi(t)) throw Error(k(200));
  return op(e, t, null, n);
};
Ce.createRoot = function (e, t) {
  if (!qi(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = Pc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Xi(e, 1, !1, null, null, n, !1, r, l)),
    (e[qe] = t.current),
    bn(e.nodeType === 8 ? e.parentNode : e),
    new Ji(t)
  );
};
Ce.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = Ys(t)), (e = e === null ? null : e.stateNode), e;
};
Ce.flushSync = function (e) {
  return Rt(e);
};
Ce.hydrate = function (e, t, n) {
  if (!Tl(t)) throw Error(k(200));
  return Ol(null, e, t, !0, n);
};
Ce.hydrateRoot = function (e, t, n) {
  if (!qi(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Pc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = _c(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[qe] = t.current),
    bn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new zl(t);
};
Ce.render = function (e, t, n) {
  if (!Tl(t)) throw Error(k(200));
  return Ol(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function (e) {
  if (!Tl(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Rt(function () {
        Ol(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qe] = null);
        });
      }),
      !0)
    : !1;
};
Ce.unstable_batchedUpdates = Qi;
Ce.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Tl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ol(e, t, n, !1, r);
};
Ce.version = "18.2.0-next-9e3b772b8-20220608";
function Nc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nc);
    } catch (e) {
      console.error(e);
    }
}
Nc(), (_s.exports = Ce);
var cp = _s.exports,
  ss = cp;
(io.createRoot = ss.createRoot), (io.hydrateRoot = ss.hydrateRoot);
var jc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  as = dt.createContext && dt.createContext(jc),
  dp = ["attr", "size", "title"];
function fp(e, t) {
  if (e == null) return {};
  var n = pp(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (l = 0; l < o.length; l++)
      (r = o[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function pp(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function pl() {
  return (
    (pl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    pl.apply(this, arguments)
  );
}
function cs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function ml(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cs(Object(n), !0).forEach(function (r) {
          mp(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : cs(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function mp(e, t, n) {
  return (
    (t = hp(t)),
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
function hp(e) {
  var t = vp(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function vp(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zc(e) {
  return (
    e &&
    e.map((t, n) =>
      dt.createElement(t.tag, ml({ key: n }, t.attr), zc(t.child))
    )
  );
}
function At(e) {
  return (t) =>
    dt.createElement(gp, pl({ attr: ml({}, e.attr) }, t), zc(e.child));
}
function gp(e) {
  var t = (n) => {
    var { attr: r, size: l, title: o } = e,
      i = fp(e, dp),
      u = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      dt.createElement(
        "svg",
        pl(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          i,
          {
            className: s,
            style: ml(ml({ color: e.color || n.color }, n.style), e.style),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && dt.createElement("title", null, o),
        e.children
      )
    );
  };
  return as !== void 0
    ? dt.createElement(as.Consumer, null, (n) => t(n))
    : t(jc);
}
function yp(e) {
  return At({
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
function wp(e) {
  return At({
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
function Sp(e) {
  return At({
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
function kp(e) {
  return At({
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
function Tc(e) {
  return At({
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
function Oc(e) {
  return At({
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
function bi(e) {
  return At({
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
const xp = ({
    handleReturnToCam: e,
    handleSaveThumbnail: t,
    handleClearLines: n,
  }) =>
    S.jsxs("div", {
      className: "text-white text-center",
      children: [
        S.jsx("button", {
          className: "mx-2",
          title: "Back",
          onClick: e,
          children: S.jsx(yp, {
            className:
              "bg-violet-800 p-1.5 rounded-md hover:scale-125 w-6 h-6 my-1",
          }),
        }),
        S.jsx("button", {
          className: "mx-2",
          title: "Save",
          onClick: t,
          children: S.jsx(Tc, {
            className:
              "bg-violet-800 p-1.5 rounded-md hover:scale-125 w-6 h-6 my-1",
          }),
        }),
        S.jsx("button", {
          className: "mx-2",
          title: "Trash",
          onClick: n,
          children: S.jsx(bi, {
            className:
              "bg-violet-800 p-1.5 rounded-md hover:scale-125 w-6 h-6 my-1",
          }),
        }),
      ],
    }),
  Ep = ({
    thumbnailUrl: e = [],
    capturedArrowsSet: t,
    onDelete: n,
    onRenderImage: r,
    onShowDermatoscopicWebcam: l,
  }) => {
    const o = M.useRef(null),
      i = t;
    return (
      M.useEffect(() => {
        const u = o.current,
          s = u.getContext("2d");
        s.clearRect(0, 0, u.width, u.height);
        const d = new Image();
        (d.src = e),
          (d.onload = () => {
            s.drawImage(d, 0, 0, u.width, u.height),
              t.forEach((y) => {
                const { startPoint: v, endPoint: p } = y,
                  g = Math.atan2(p.y - v.y, p.x - v.x),
                  m = 5;
                s.beginPath(),
                  s.moveTo(v.x * (u.width / 120), v.y * (u.height / 100)),
                  s.lineTo(p.x * (u.width / 120), p.y * (u.height / 100)),
                  (s.strokeStyle = "red"),
                  s.stroke(),
                  s.save(),
                  s.translate(p.x * (u.width / 120), p.y * (u.height / 100)),
                  s.rotate(g),
                  s.beginPath(),
                  s.moveTo(-m, m / 2),
                  s.lineTo(0, 0),
                  s.lineTo(-m, -m / 2),
                  (s.fillStyle = "red"),
                  s.fill(),
                  s.restore();
              });
          });
      }, [e]),
      S.jsxs("div", {
        className: "text-white",
        children: [
          S.jsxs("div", {
            className: "my-1 mx-1",
            children: [
              S.jsx("button", {
                className: "mt-1 mx-1",
                onClick: () => r(e, i),
                children: S.jsx(Oc, {
                  title: "Search",
                  className:
                    " bg-blue-600 p-1.5 rounded-md hover:scale-125 w-6 h-6",
                }),
              }),
              S.jsx("button", {
                className: "mt-1 mx-1",
                onClick: n,
                children: S.jsx(bi, {
                  title: "Trash",
                  className:
                    "bg-blue-600 p-1.5 rounded-md hover:scale-125 w-6 h-6",
                }),
              }),
            ],
          }),
          S.jsx("canvas", {
            ref: o,
            width: 120,
            height: 100,
            style: { border: "2px solid #ccc" },
            className: "mx-auto",
          }),
          S.jsx("div", {
            className: "mt-2 mx-1",
            children: S.jsx("button", {
              onClick: () => {
                r(e, i), l(!0);
              },
              children: S.jsx(Sp, {
                className:
                  "bg-blue-600 p-1.5 rounded-md hover:scale-125 w-6 h-6",
              }),
            }),
          }),
        ],
      })
    );
  },
  Cp = ({
    capturedImages: e,
    capturedArrowsSet: t,
    onDeleteImage: n,
    onRenderImage: r,
    onShowDermatoscopicWebcam: l,
  }) =>
    S.jsxs("div", {
      className: "row mx-2 overflow-y-auto max-h-[500px] max-w-full",
      children: [
        S.jsx("h4", {
          className: "font-bold text-white text-center mt-4",
          children: "Clinical Photos",
        }),
        " ",
        e.map((o, i) =>
          S.jsx(
            "div",
            {
              className: "col col-sm-1 mt-2 text-center",
              children: S.jsx("div", {
                className: "bg-dark p-1",
                children: S.jsx(Ep, {
                  title: `Image ${i + 1}`,
                  thumbnailUrl: o,
                  capturedArrowsSet: t[i],
                  onDelete: () => n(i),
                  onRenderImage: r,
                  onShowDermatoscopicWebcam: l,
                }),
              }),
            },
            i
          )
        ),
      ],
    }),
  ds = (e) => {
    let t;
    const n = new Set(),
      r = (y, v) => {
        const p = typeof y == "function" ? y(t) : y;
        if (!Object.is(p, t)) {
          const g = t;
          (t =
            v ?? (typeof p != "object" || p === null)
              ? p
              : Object.assign({}, t, p)),
            n.forEach((m) => m(t, g));
        }
      },
      l = () => t,
      s = {
        setState: r,
        getState: l,
        getInitialState: () => d,
        subscribe: (y) => (n.add(y), () => n.delete(y)),
        destroy: () => {
          n.clear();
        },
      },
      d = (t = e(r, l, s));
    return s;
  },
  _p = (e) => (e ? ds(e) : ds);
var Lc = { exports: {} },
  Dc = {},
  Mc = { exports: {} },
  Ic = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vn = M;
function Pp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Np = typeof Object.is == "function" ? Object.is : Pp,
  jp = vn.useState,
  zp = vn.useEffect,
  Tp = vn.useLayoutEffect,
  Op = vn.useDebugValue;
function Lp(e, t) {
  var n = t(),
    r = jp({ inst: { value: n, getSnapshot: t } }),
    l = r[0].inst,
    o = r[1];
  return (
    Tp(
      function () {
        (l.value = n), (l.getSnapshot = t), oo(l) && o({ inst: l });
      },
      [e, n, t]
    ),
    zp(
      function () {
        return (
          oo(l) && o({ inst: l }),
          e(function () {
            oo(l) && o({ inst: l });
          })
        );
      },
      [e]
    ),
    Op(n),
    n
  );
}
function oo(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Np(e, n);
  } catch {
    return !0;
  }
}
function Dp(e, t) {
  return t();
}
var Mp =
  typeof window > "u" ||
  typeof window.document > "u" ||
  typeof window.document.createElement > "u"
    ? Dp
    : Lp;
Ic.useSyncExternalStore =
  vn.useSyncExternalStore !== void 0 ? vn.useSyncExternalStore : Mp;
Mc.exports = Ic;
var Ip = Mc.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ll = M,
  Rp = Ip;
function Up(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Fp = typeof Object.is == "function" ? Object.is : Up,
  Ap = Rp.useSyncExternalStore,
  $p = Ll.useRef,
  Vp = Ll.useEffect,
  Wp = Ll.useMemo,
  Bp = Ll.useDebugValue;
Dc.useSyncExternalStoreWithSelector = function (e, t, n, r, l) {
  var o = $p(null);
  if (o.current === null) {
    var i = { hasValue: !1, value: null };
    o.current = i;
  } else i = o.current;
  o = Wp(
    function () {
      function s(g) {
        if (!d) {
          if (((d = !0), (y = g), (g = r(g)), l !== void 0 && i.hasValue)) {
            var m = i.value;
            if (l(m, g)) return (v = m);
          }
          return (v = g);
        }
        if (((m = v), Fp(y, g))) return m;
        var h = r(g);
        return l !== void 0 && l(m, h) ? m : ((y = g), (v = h));
      }
      var d = !1,
        y,
        v,
        p = n === void 0 ? null : n;
      return [
        function () {
          return s(t());
        },
        p === null
          ? void 0
          : function () {
              return s(p());
            },
      ];
    },
    [t, n, r, l]
  );
  var u = Ap(e, o[0], o[1]);
  return (
    Vp(
      function () {
        (i.hasValue = !0), (i.value = u);
      },
      [u]
    ),
    Bp(u),
    u
  );
};
Lc.exports = Dc;
var Hp = Lc.exports;
const Qp = li(Hp),
  { useDebugValue: Kp } = dt,
  { useSyncExternalStoreWithSelector: Yp } = Qp;
const Gp = (e) => e;
function Xp(e, t = Gp, n) {
  const r = Yp(
    e.subscribe,
    e.getState,
    e.getServerState || e.getInitialState,
    t,
    n
  );
  return Kp(r), r;
}
const fs = (e) => {
    const t = typeof e == "function" ? _p(e) : e,
      n = (r, l) => Xp(t, r, l);
    return Object.assign(n, t), n;
  },
  Sn = (e) => (e ? fs(e) : fs),
  hl = Sn((e) => ({
    PatientData: {},
    addPatient: (t) => e((n) => ({ PatientData: { ...n.addPatient, ...t } })),
    getState: () => ({ PatientData: hl.getState().PatientData }),
  })),
  ps = () => {
    const [e, t] = M.useState();
    return (
      M.useEffect(() => {
        t(
          (() => {
            const { patient: r } = window;
            return (
              r &&
                (hl.getState().addPatient({ current: r }),
                console.log(hl.getState().PatientData)),
              r
            );
          })()
        );
      }, [window.patient]),
      S.jsx("div", {
        children: S.jsxs("div", {
          className: "bg-userdata",
          children: [
            S.jsx("div", {
              className: "font-bold text-center mt-2 mb-2",
              children: "Patient Data",
            }),
            S.jsx("div", { className: "", children: JSON.stringify(e) }),
          ],
        }),
      })
    );
  },
  Zp = ({ description: e, onDescriptionChange: t }) =>
    S.jsx("div", {
      children: S.jsx("div", {
        className: "text-black",
        children: S.jsx("input", {
          type: "text",
          className: "rounded-md px-2 w-44",
          placeholder: "Input a arrow description",
          value: e,
          onChange: (n) => t(n.target.value),
        }),
      }),
    }),
  Jp = ({
    lines: e,
    onArrowDescriptions: t,
    onDeleteArrow: n,
    onArrowHover: r,
    onArrowHoverOff: l,
  }) => {
    const [o, i] = M.useState(new Array(e.length).fill("")),
      u = (v) => {
        n(v);
        const p = [...o];
        p.splice(v, 1), i(p), t(o);
      },
      s = (v) => {
        r(v);
      },
      d = () => {
        l();
      },
      y = (v, p) => {
        const g = [...o];
        (g[v] = p), i(g), t(g);
      };
    return S.jsx("div", {
      className: "mt-2 overflow-y-scroll max-h-[500px] max-w-screen-md",
      children: S.jsxs("div", {
        className: "text-white text-center",
        children: [
          S.jsxs("div", {
            className: "mt-2",
            children: [
              " ",
              S.jsx("h4", {
                className: "font-bold",
                children: "Descriptions List",
              }),
              " ",
            ],
          }),
          S.jsx("ul", {
            className: "list-group list-group-flush bg-dark",
            children: e.map((v, p) =>
              S.jsx(
                "li",
                {
                  className: "list-group-item mx-2 bg-dark",
                  style: { cursor: "pointer" },
                  onMouseOver: () => {
                    s(p);
                  },
                  onMouseLeave: d,
                  children: S.jsxs("div", {
                    className: "input-group mb-3",
                    children: [
                      "Arrow ",
                      p + 1,
                      S.jsxs("div", {
                        className: "my-2",
                        children: [
                          S.jsx("button", {
                            className: "mx-2",
                            children: S.jsx(Oc, {
                              className:
                                "bg-teal-800 p-1.5 rounded-md hover:scale-125 w-6 h-6 bg-",
                              title: "Search",
                            }),
                          }),
                          S.jsx("button", {
                            className: "mx-2",
                            onClick: () => u(p),
                            children: S.jsx(bi, {
                              className:
                                "bg-teal-800 p-1.5 rounded-md hover:scale-125 w-6 h-6",
                              title: "Trash",
                            }),
                          }),
                        ],
                      }),
                      S.jsx(Zp, {
                        description: o[p],
                        onDescriptionChange: (g) => y(p, g),
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
  };
var Rc = { exports: {} };
(function (e, t) {
  (function (r, l) {
    e.exports = l(M);
  })(Fc, function (n) {
    return (function (r) {
      var l = {};
      function o(i) {
        if (l[i]) return l[i].exports;
        var u = (l[i] = { i, l: !1, exports: {} });
        return r[i].call(u.exports, u, u.exports, o), (u.l = !0), u.exports;
      }
      return (
        (o.m = r),
        (o.c = l),
        (o.d = function (i, u, s) {
          o.o(i, u) || Object.defineProperty(i, u, { enumerable: !0, get: s });
        }),
        (o.r = function (i) {
          typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(i, "__esModule", { value: !0 });
        }),
        (o.t = function (i, u) {
          if (
            (u & 1 && (i = o(i)),
            u & 8 || (u & 4 && typeof i == "object" && i && i.__esModule))
          )
            return i;
          var s = Object.create(null);
          if (
            (o.r(s),
            Object.defineProperty(s, "default", { enumerable: !0, value: i }),
            u & 2 && typeof i != "string")
          )
            for (var d in i)
              o.d(
                s,
                d,
                function (y) {
                  return i[y];
                }.bind(null, d)
              );
          return s;
        }),
        (o.n = function (i) {
          var u =
            i && i.__esModule
              ? function () {
                  return i.default;
                }
              : function () {
                  return i;
                };
          return o.d(u, "a", u), u;
        }),
        (o.o = function (i, u) {
          return Object.prototype.hasOwnProperty.call(i, u);
        }),
        (o.p = ""),
        o((o.s = "./src/react-webcam.tsx"))
      );
    })({
      "./src/react-webcam.tsx": function (r, l, o) {
        o.r(l);
        var i = o("react"),
          u = (function () {
            var p = function (g, m) {
              return (
                (p =
                  Object.setPrototypeOf ||
                  ({ __proto__: [] } instanceof Array &&
                    function (h, N) {
                      h.__proto__ = N;
                    }) ||
                  function (h, N) {
                    for (var c in N) N.hasOwnProperty(c) && (h[c] = N[c]);
                  }),
                p(g, m)
              );
            };
            return function (g, m) {
              p(g, m);
              function h() {
                this.constructor = g;
              }
              g.prototype =
                m === null
                  ? Object.create(m)
                  : ((h.prototype = m.prototype), new h());
            };
          })(),
          s = function () {
            return (
              (s =
                Object.assign ||
                function (p) {
                  for (var g, m = 1, h = arguments.length; m < h; m++) {
                    g = arguments[m];
                    for (var N in g)
                      Object.prototype.hasOwnProperty.call(g, N) &&
                        (p[N] = g[N]);
                  }
                  return p;
                }),
              s.apply(this, arguments)
            );
          },
          d = function (p, g) {
            var m = {};
            for (var h in p)
              Object.prototype.hasOwnProperty.call(p, h) &&
                g.indexOf(h) < 0 &&
                (m[h] = p[h]);
            if (p != null && typeof Object.getOwnPropertySymbols == "function")
              for (
                var N = 0, h = Object.getOwnPropertySymbols(p);
                N < h.length;
                N++
              )
                g.indexOf(h[N]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(p, h[N]) &&
                  (m[h[N]] = p[h[N]]);
            return m;
          };
        (function () {
          typeof window > "u" ||
            (navigator.mediaDevices === void 0 && (navigator.mediaDevices = {}),
            navigator.mediaDevices.getUserMedia === void 0 &&
              (navigator.mediaDevices.getUserMedia = function (g) {
                var m =
                  navigator.getUserMedia ||
                  navigator.webkitGetUserMedia ||
                  navigator.mozGetUserMedia ||
                  navigator.msGetUserMedia;
                return m
                  ? new Promise(function (h, N) {
                      m.call(navigator, g, h, N);
                    })
                  : Promise.reject(
                      new Error(
                        "getUserMedia is not implemented in this browser"
                      )
                    );
              }));
        })();
        function y() {
          return !!(
            navigator.mediaDevices && navigator.mediaDevices.getUserMedia
          );
        }
        var v = (function (p) {
          u(g, p);
          function g(m) {
            var h = p.call(this, m) || this;
            return (
              (h.canvas = null),
              (h.ctx = null),
              (h.requestUserMediaId = 0),
              (h.unmounted = !1),
              (h.state = { hasUserMedia: !1 }),
              h
            );
          }
          return (
            (g.prototype.componentDidMount = function () {
              var m = this,
                h = m.state,
                N = m.props;
              if (((this.unmounted = !1), !y())) {
                N.onUserMediaError("getUserMedia not supported");
                return;
              }
              h.hasUserMedia || this.requestUserMedia(),
                N.children &&
                  typeof N.children != "function" &&
                  console.warn("children must be a function");
            }),
            (g.prototype.componentDidUpdate = function (m) {
              var h = this.props;
              if (!y()) {
                h.onUserMediaError("getUserMedia not supported");
                return;
              }
              var N =
                  JSON.stringify(m.audioConstraints) !==
                  JSON.stringify(h.audioConstraints),
                c =
                  JSON.stringify(m.videoConstraints) !==
                  JSON.stringify(h.videoConstraints),
                a = m.minScreenshotWidth !== h.minScreenshotWidth,
                f = m.minScreenshotHeight !== h.minScreenshotHeight;
              (c || a || f) && ((this.canvas = null), (this.ctx = null)),
                (N || c) && (this.stopAndCleanup(), this.requestUserMedia());
            }),
            (g.prototype.componentWillUnmount = function () {
              (this.unmounted = !0), this.stopAndCleanup();
            }),
            (g.stopMediaStream = function (m) {
              m &&
                (m.getVideoTracks && m.getAudioTracks
                  ? (m.getVideoTracks().map(function (h) {
                      m.removeTrack(h), h.stop();
                    }),
                    m.getAudioTracks().map(function (h) {
                      m.removeTrack(h), h.stop();
                    }))
                  : m.stop());
            }),
            (g.prototype.stopAndCleanup = function () {
              var m = this.state;
              m.hasUserMedia &&
                (g.stopMediaStream(this.stream),
                m.src && window.URL.revokeObjectURL(m.src));
            }),
            (g.prototype.getScreenshot = function (m) {
              var h = this,
                N = h.state,
                c = h.props;
              if (!N.hasUserMedia) return null;
              var a = this.getCanvas(m);
              return a && a.toDataURL(c.screenshotFormat, c.screenshotQuality);
            }),
            (g.prototype.getCanvas = function (m) {
              var h = this,
                N = h.state,
                c = h.props;
              if (!this.video || !N.hasUserMedia || !this.video.videoHeight)
                return null;
              if (!this.ctx) {
                var a = this.video.videoWidth,
                  f = this.video.videoHeight;
                if (!this.props.forceScreenshotSourceSize) {
                  var w = a / f;
                  (a = c.minScreenshotWidth || this.video.clientWidth),
                    (f = a / w),
                    c.minScreenshotHeight &&
                      f < c.minScreenshotHeight &&
                      ((f = c.minScreenshotHeight), (a = f * w));
                }
                (this.canvas = document.createElement("canvas")),
                  (this.canvas.width = (m == null ? void 0 : m.width) || a),
                  (this.canvas.height = (m == null ? void 0 : m.height) || f),
                  (this.ctx = this.canvas.getContext("2d"));
              }
              var C = this,
                E = C.ctx,
                x = C.canvas;
              return (
                E &&
                  x &&
                  ((x.width = (m == null ? void 0 : m.width) || x.width),
                  (x.height = (m == null ? void 0 : m.height) || x.height),
                  c.mirrored && (E.translate(x.width, 0), E.scale(-1, 1)),
                  (E.imageSmoothingEnabled = c.imageSmoothing),
                  E.drawImage(
                    this.video,
                    0,
                    0,
                    (m == null ? void 0 : m.width) || x.width,
                    (m == null ? void 0 : m.height) || x.height
                  ),
                  c.mirrored && (E.scale(-1, 1), E.translate(-x.width, 0))),
                x
              );
            }),
            (g.prototype.requestUserMedia = function () {
              var m = this,
                h = this.props,
                N = function (f, w) {
                  var C = { video: typeof w < "u" ? w : !0 };
                  h.audio && (C.audio = typeof f < "u" ? f : !0),
                    m.requestUserMediaId++;
                  var E = m.requestUserMediaId;
                  navigator.mediaDevices
                    .getUserMedia(C)
                    .then(function (x) {
                      m.unmounted || E !== m.requestUserMediaId
                        ? g.stopMediaStream(x)
                        : m.handleUserMedia(null, x);
                    })
                    .catch(function (x) {
                      m.handleUserMedia(x);
                    });
                };
              if ("mediaDevices" in navigator)
                N(h.audioConstraints, h.videoConstraints);
              else {
                var c = function (f) {
                    return { optional: [{ sourceId: f }] };
                  },
                  a = function (f) {
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
                    C = null;
                  f.forEach(function (j) {
                    j.kind === "audio"
                      ? (w = j.id)
                      : j.kind === "video" && (C = j.id);
                  });
                  var E = a(h.audioConstraints);
                  E && (w = E);
                  var x = a(h.videoConstraints);
                  x && (C = x), N(c(w), c(C));
                });
              }
            }),
            (g.prototype.handleUserMedia = function (m, h) {
              var N = this.props;
              if (m || !h) {
                this.setState({ hasUserMedia: !1 }), N.onUserMediaError(m);
                return;
              }
              this.stream = h;
              try {
                this.video && (this.video.srcObject = h),
                  this.setState({ hasUserMedia: !0 });
              } catch {
                this.setState({
                  hasUserMedia: !0,
                  src: window.URL.createObjectURL(h),
                });
              }
              N.onUserMedia(h);
            }),
            (g.prototype.render = function () {
              var m = this,
                h = this,
                N = h.state,
                c = h.props,
                a = c.audio;
              c.forceScreenshotSourceSize;
              var f = c.disablePictureInPicture;
              c.onUserMedia,
                c.onUserMediaError,
                c.screenshotFormat,
                c.screenshotQuality,
                c.minScreenshotWidth,
                c.minScreenshotHeight,
                c.audioConstraints,
                c.videoConstraints,
                c.imageSmoothing;
              var w = c.mirrored,
                C = c.style,
                E = C === void 0 ? {} : C,
                x = c.children,
                j = d(c, [
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
                F = w
                  ? s(s({}, E), {
                      transform: (E.transform || "") + " scaleX(-1)",
                    })
                  : E,
                L = { getScreenshot: this.getScreenshot.bind(this) };
              return i.createElement(
                i.Fragment,
                null,
                i.createElement(
                  "video",
                  s(
                    {
                      autoPlay: !0,
                      disablePictureInPicture: f,
                      src: N.src,
                      muted: !a,
                      playsInline: !0,
                      ref: function (te) {
                        m.video = te;
                      },
                      style: F,
                    },
                    j
                  )
                ),
                x && x(L)
              );
            }),
            (g.defaultProps = {
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
            g
          );
        })(i.Component);
        l.default = v;
      },
      react: function (r, l) {
        r.exports = n;
      },
    }).default;
  });
})(Rc);
var qp = Rc.exports;
const bp = li(qp),
  em = () =>
    S.jsxs("div", {
      class: "flex flex-row gap-2 justify-center items-center",
      children: [
        S.jsx("div", {
          class: "w-4 h-4 rounded-full bg-blue-700 animate-bounce",
        }),
        S.jsx("div", {
          class:
            "w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]",
        }),
        S.jsx("div", {
          class:
            "w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.5s]",
        }),
      ],
    }),
  tm = ({ handleCapture: e, loading: t }) =>
    S.jsx("div", {
      children: S.jsx("button", {
        className: "text-white mt-2",
        onClick: e,
        disabled: t,
        children: S.jsx(wp, {
          className: "bg-red-900 p-2 rounded-md hover:scale-125 w-9 h-9 my-1",
          title: "Capture",
        }),
      }),
    }),
  nm = ({
    handleShowDermatoscopicWebcam: e,
    handleShowClinicalWebcam: t,
    handleCapture: n,
  }) => {
    const r = () => {
        n(), e(!1);
      },
      l = () => {
        t(!1);
      };
    return S.jsxs("div", {
      children: [
        S.jsx("button", {
          className: "text-white mt-2",
          children: S.jsx(Tc, {
            onClick: r,
            className: "bg-red-900 p-2 rounded-md hover:scale-125 w-9 h-9 my-1",
            title: "Save",
          }),
        }),
        S.jsx("button", {
          className: "text-white mt-2",
          children: S.jsx(kp, {
            onClick: l,
            className:
              "bg-red-900 p-2 rounded-md hover:scale-125 w-9 h-9 my-1 mx-2",
            title: "Back",
          }),
        }),
      ],
    });
  },
  ms = ({
    onShowDermatoscopicWebcam: e,
    handleShowClinicalWebcam: t,
    handleShowDermatoscopicWebcam: n,
    title: r = "Live View",
    onCapture: l,
    handleClearLines: o = () => {},
  }) => {
    const i = M.useRef(null),
      [u, s] = M.useState(!0),
      [d, y] = M.useState(null);
    M.useEffect(
      () => (
        (async () => {
          try {
            const g = await navigator.mediaDevices.getUserMedia({
              video: { width: 1220, height: 1024 },
            });
            (i.current.srcObject = g), s(!1);
          } catch (g) {
            console.error("Error accessing webcam:", g),
              y("Error accessing webcam");
          }
        })(),
        () => {
          var m;
          const g = (m = i.current) == null ? void 0 : m.srcObject;
          g && g.getTracks().forEach((N) => N.stop());
        }
      ),
      [i]
    );
    const v = () => {
      const p = i.current.getScreenshot("image/png");
      l(p), o();
    };
    return S.jsxs("div", {
      className: "card-body mt-1",
      children: [
        S.jsx("h2", { className: "text-white my-2 font-bold", children: r }),
        d && S.jsx("p", { children: d }),
        S.jsx(bp, {
          audio: !1,
          ref: i,
          mirrored: !0,
          style: { width: "100%", height: "auto" },
          screenshotFormat: "image/png",
          videoConstraints: { width: 1220, height: 1024 },
        }),
        S.jsx("div", {
          className: "row",
          children: S.jsx("div", {
            className: "col col-md-12 text-center",
            children: u
              ? !d && S.jsx(em, {})
              : e
              ? S.jsx(nm, {
                  handleShowDermatoscopicWebcam: n,
                  handleShowClinicalWebcam: t,
                  onShowDermatoscopicWebcam: e,
                  handleCapture: v,
                })
              : S.jsx(tm, { handleCapture: v, loading: u }),
          }),
        }),
      ],
    });
  };
const ei = Sn((e) => ({
    ArrowCoordinates: {},
    addArrowCoordinates: (t) =>
      e((n) => ({ ArrowCoordinates: { ...n.ArrowCoordinates, ...t } })),
    getState: () => ({ ArrowCoordinates: ei.getState().ArrowCoordinates }),
  })),
  ti = Sn((e) => ({
    ArrowDescriptions: {},
    addArrowDescriptions: (t) =>
      e((n) => ({ ArrowDescriptions: { ...n.addArrowDescriptions, ...t } })),
    getState: () => ({ ArrowDescriptions: ti.getState().ArrowDescriptions }),
  })),
  ni = Sn((e) => ({
    ClinicalImage: {},
    addClinicalImage: (t) =>
      e((n) => ({ ClinicalImage: { ...n.addClinicalImage, ...t } })),
    getState: () => ({ ClinicalImage: ni.getState().ClinicalImage }),
  })),
  ri = Sn((e) => ({
    DermatoscopicImage: {},
    addDermatoscopicImage: (t) =>
      e((n) => ({ DermatoscopicImage: { ...n.addDermatoscopicImage, ...t } })),
    getState: () => ({ DermatoscopicImage: ri.getState().DermatoscopicImage }),
  })),
  Uc = Sn((e) => ({
    StudyData: {},
    addStudy: (t) => e((n) => ({ study: { ...n.addStudy, ...t } })),
    getState: () => ({ StudyData: Uc.getState().StudyData }),
  })),
  rm = ({ arrowColor: e }) => {
    const t = M.useRef(null),
      n = M.useRef(null),
      r = M.useRef(null),
      l = M.useRef([]),
      o = M.useRef(!1),
      i = M.useRef(new Image()),
      [, u] = M.useState(!1),
      [s, d] = M.useState([]),
      [y, v] = M.useState([]),
      [p, g] = M.useState(null),
      [m, h] = M.useState(null),
      [N, c] = M.useState(null),
      [a, f] = M.useState([]),
      [w, C] = M.useState([]),
      [E, x] = M.useState(!1),
      [j, F] = M.useState(null),
      [L, te] = M.useState(!0);
    M.useEffect(() => {
      const z = n.current;
      if (z)
        return (
          (r.current = z.getContext("2d")),
          (i.current.src = m),
          (i.current.onload = () => {
            r.current.drawImage(i.current, 0, 0, z.width, z.height);
          }),
          z.addEventListener("mousedown", nt),
          z.addEventListener("mousemove", kn),
          z.addEventListener("mouseup", pr),
          () => {
            z.removeEventListener("mousedown", nt),
              z.removeEventListener("mousemove", kn),
              z.removeEventListener("mouseup", pr);
          }
        );
    }, [m, l, E]);
    const me = () => {
        r.current.clearRect(0, 0, n.current.width, n.current.height),
          r.current.drawImage(
            i.current,
            0,
            0,
            n.current.width,
            n.current.height
          ),
          l.current.forEach((z, K) => {
            const oe = Math.atan2(
              z.endPoint.y - z.startPoint.y,
              z.endPoint.x - z.startPoint.x
            );
            let rt = 10;
            r.current.beginPath(),
              r.current.moveTo(z.startPoint.x, z.startPoint.y),
              r.current.lineTo(z.endPoint.x, z.endPoint.y),
              K === p
                ? ((rt = 15), (r.current.lineWidth = 7))
                : ((rt = 10), (r.current.lineWidth = 2)),
              (r.current.strokeStyle = e || "black"),
              r.current.stroke(),
              (r.current.lineWidth = 2),
              r.current.save(),
              r.current.translate(z.endPoint.x, z.endPoint.y),
              r.current.rotate(oe),
              r.current.beginPath(),
              r.current.moveTo(-rt, rt / 2),
              r.current.lineTo(0, 0),
              r.current.lineTo(-rt, -rt / 2),
              (r.current.fillStyle = e || "black"),
              r.current.fill(),
              r.current.restore(),
              (r.current.fillStyle = e || "black"),
              (r.current.font = "10px Arial"),
              r.current.fillText(
                `${K + 1}`,
                z.endPoint.x + 5,
                z.endPoint.y - 5
              );
          });
      },
      nt = (z) => {
        const K = n.current.getBoundingClientRect(),
          oe = {
            x: (z.clientX - K.left) * (n.current.width / K.width),
            y: (z.clientY - K.top) * (n.current.height / K.height),
          };
        (o.current = !0),
          l.current.push({ startPoint: oe, endPoint: oe }),
          d([...l.current]);
      },
      kn = (z) => {
        if (!o.current) return;
        const K = n.current.getBoundingClientRect(),
          oe = {
            x: (z.clientX - K.left) * (n.current.width / K.width),
            y: (z.clientY - K.top) * (n.current.height / K.height),
          };
        (l.current[l.current.length - 1].endPoint = oe),
          me(),
          d([...l.current]);
      },
      pr = () => {
        o.current = !1;
      },
      xn = () => {
        h(t.current), (l.current = []), me(), u((z) => !z);
      },
      En = (z) => {
        l.current.splice(z, 1), me(), u((K) => !K);
      },
      _ = (z) => {
        g(z), me();
      },
      T = () => {
        g(null), me();
      },
      O = (z) => {
        (t.current = z), h(z), te(!1);
      },
      W = () => {
        (l.current = []), me(), u((z) => !z), te(!0);
      },
      X = () => {
        const z = n.current.toDataURL(),
          K = l.current.map((oe, rt) => ({
            arrowNumber: rt + 1,
            startPoint: { ...oe.startPoint },
            endPoint: { ...oe.endPoint },
          }));
        c(z),
          v(K),
          f([...a, z]),
          C([...w, K]),
          (l.current = []),
          me(),
          h(t.current),
          u((oe) => !oe);
      },
      $t = (z) => {
        const K = [...a],
          oe = [...w];
        K.splice(z, 1), oe.splice(z, 1), f(K), C(oe);
      },
      He = (z, K) => {
        h(z), (l.current = [...K]), me(), u((oe) => !oe), te(!1);
      },
      Vt = (z = !0) => {
        ni.getState().addClinicalImage({ current: i.current.src }),
          ei.getState().addArrowCoordinates(l),
          z ||
            (ri.getState().addDermatoscopicImage({ current: t.current }),
            (window.currentStudy = {
              PatientData: hl.getState().PatientData.current,
              StudyData: Uc.getState().StudyData.current,
              ArrowCoordinates: ei.getState().ArrowCoordinates.current,
              ArrowDescriptions: ti.getState().ArrowDescriptions.current,
              ClinicalImage: ni.getState().ClinicalImage.current,
              DermatoscopicImage: ri.getState().DermatoscopicImage.current,
              AppVisibiltyState: () => (
                (document.getElementById("root").hidden = !0), { status: !0 }
              ),
            })),
          x(z);
      },
      Qe = (z = !0) => x(z),
      Wt = (z) => {
        F({ descriptions: z }),
          ti.getState().addArrowDescriptions({ descriptions: z });
      };
    return S.jsx("div", {
      className: "flex mt-8",
      children: L
        ? S.jsxs("div", {
            className: "flex mx-auto justify-center",
            children: [
              S.jsx("div", {
                className:
                  "text-white w-1/4 p-2 text-center bg-canvas rounded-md my-2 mx-2",
                children: S.jsx(ps, {}),
              }),
              S.jsx("div", {
                className:
                  "w-2/3 text-center my-2 mx-2 p-2 rounded-md bg-canvas",
                children: S.jsx("div", {
                  className: "card card-body text-center bg-dark",
                  children: S.jsx(ms, { onCapture: O }),
                }),
              }),
            ],
          })
        : S.jsxs("div", {
            className: "flex justify-center",
            children: [
              S.jsx("div", {
                className:
                  "text-white w-1/6 p-2 text-center rounded-md my-2 mx-2 bg-canvas",
                children: S.jsx(ps, {}),
              }),
              !!E &&
                S.jsx("div", {
                  className: "flex mx-auto justify-center",
                  children: S.jsx("div", {
                    className:
                      "w-2/8  text-center my-2 mx-1 p-1 rounded-md bg-canvas",
                    children: S.jsx("div", {
                      className: "card card-body text-center bg-dark",
                      children: S.jsx(ms, {
                        capturedArrowsSet: w,
                        onArrowDescriptions: j,
                        onShowDermatoscopicWebcam: E,
                        handleShowClinicalWebcam: Qe,
                        handleShowDermatoscopicWebcam: Vt,
                        title: "Dermatoscopic Live View",
                        onCapture: O,
                      }),
                    }),
                  }),
                }),
              S.jsxs("div", {
                className: "flex justify-center",
                children: [
                  S.jsxs("div", {
                    className: `${
                      E ? "w-2/3" : "w-2/5"
                    }  my-2 mx-2 p-2 rounded-md bg-canvas`,
                    children: [
                      S.jsxs("div", {
                        className: "",
                        children: [
                          S.jsx("h2", {
                            className: "text-center text-white font-bold my-1",
                            children: "Captured Image",
                          }),
                          S.jsx("canvas", {
                            ref: n,
                            height: 1024,
                            width: 1220,
                            className: "canvas-container",
                          }),
                        ],
                      }),
                      !E &&
                        S.jsx(S.Fragment, {
                          children: S.jsx("div", {
                            className: "mt-2",
                            children: S.jsx(xp, {
                              handleReturnToCam: W,
                              handleSaveThumbnail: X,
                              handleClearLines: xn,
                            }),
                          }),
                        }),
                    ],
                  }),
                  !E &&
                    S.jsxs(S.Fragment, {
                      children: [
                        S.jsx("div", {
                          className: "w-1/6 p-2 my-2 mx-1 rounded-md bg-canvas",
                          children: S.jsx(Jp, {
                            lines: l.current,
                            onArrowDescriptions: Wt,
                            onDeleteArrow: En,
                            onArrowHover: _,
                            onArrowHoverOff: T,
                          }),
                        }),
                        S.jsx("div", {
                          className: "w-1/6 p-2 my-2 mx-1 rounded-md bg-canvas",
                          children: S.jsx(Cp, {
                            capturedImages: a,
                            capturedArrowsSet: w,
                            onDeleteImage: $t,
                            onRenderImage: He,
                            onShowDermatoscopicWebcam: Vt,
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
    });
  },
  lm = () => S.jsx("div", { children: S.jsx(rm, { arrowColor: "red" }) });
io.createRoot(document.getElementById("root")).render(S.jsx(lm, {}));
