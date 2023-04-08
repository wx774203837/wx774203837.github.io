import {
  B,
  T
} from "./chunk-ZBFL4OS2.js";
import {
  Fe,
  Ka,
  La,
  Mn,
  Na,
  Qa,
  an,
  bt,
  gt,
  he,
  le,
  qa,
  xn,
  z
} from "./chunk-DZVDESUM.js";
import {
  Ce,
  Fr,
  I,
  R,
  Ti,
  Tr,
  U,
  _o,
  ei,
  oo,
  we
} from "./chunk-BHKXDXK7.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.0.2/node_modules/mermaid/dist/layout-d6d8be39.js
var Yr = "[object Symbol]";
function M(n) {
  return typeof n == "symbol" || he(n) && Tr(n) == Yr;
}
function Y(n, e) {
  for (var r = -1, t = n == null ? 0 : n.length, i = Array(t); ++r < t; )
    i[r] = e(n[r], r, n);
  return i;
}
var Hr = 1 / 0;
var oe = ei ? ei.prototype : void 0;
var ue = oe ? oe.toString : void 0;
function He(n) {
  if (typeof n == "string")
    return n;
  if (Ka(n))
    return Y(n, He) + "";
  if (M(n))
    return ue ? ue.call(n) : "";
  var e = n + "";
  return e == "0" && 1 / n == -Hr ? "-0" : e;
}
var kr = /\s/;
function qr(n) {
  for (var e = n.length; e-- && kr.test(n.charAt(e)); )
    ;
  return e;
}
var Kr = /^\s+/;
function Wr(n) {
  return n && n.slice(0, qr(n) + 1).replace(Kr, "");
}
var se = 0 / 0;
var Xr = /^[-+]0x[0-9a-f]+$/i;
var Zr = /^0b[01]+$/i;
var Vr = /^0o[0-7]+$/i;
var zr = parseInt;
function Jr(n) {
  if (typeof n == "number")
    return n;
  if (M(n))
    return se;
  if (we(n)) {
    var e = typeof n.valueOf == "function" ? n.valueOf() : n;
    n = we(e) ? e + "" : e;
  }
  if (typeof n != "string")
    return n === 0 ? n : +n;
  n = Wr(n);
  var r = Zr.test(n);
  return r || Vr.test(n) ? zr(n.slice(2), r ? 2 : 8) : Xr.test(n) ? se : +n;
}
var fe = 1 / 0;
var Qr = 17976931348623157e292;
function fn(n) {
  if (!n)
    return n === 0 ? n : 0;
  if (n = Jr(n), n === fe || n === -fe) {
    var e = n < 0 ? -1 : 1;
    return e * Qr;
  }
  return n === n ? n : 0;
}
function jr(n) {
  var e = fn(n), r = e % 1;
  return e === e ? r ? e - r : e : 0;
}
function D(n) {
  return n;
}
var de = Object.create;
var nt = function() {
  function n() {
  }
  return function(e) {
    if (!we(e))
      return {};
    if (de)
      return de(e);
    n.prototype = e;
    var r = new n();
    return n.prototype = void 0, r;
  };
}();
var et = nt;
function rt(n, e, r) {
  switch (r.length) {
    case 0:
      return n.call(e);
    case 1:
      return n.call(e, r[0]);
    case 2:
      return n.call(e, r[0], r[1]);
    case 3:
      return n.call(e, r[0], r[1], r[2]);
  }
  return n.apply(e, r);
}
function tt() {
}
function ke(n, e) {
  var r = -1, t = n.length;
  for (e || (e = Array(t)); ++r < t; )
    e[r] = n[r];
  return e;
}
var it = 800;
var at = 16;
var ot = Date.now;
function ut(n) {
  var e = 0, r = 0;
  return function() {
    var t = ot(), i = at - (t - r);
    if (r = t, i > 0) {
      if (++e >= it)
        return arguments[0];
    } else
      e = 0;
    return n.apply(void 0, arguments);
  };
}
function U2(n) {
  return function() {
    return n;
  };
}
var st = function() {
  try {
    var n = Ce(Object, "defineProperty");
    return n({}, "", {}), n;
  } catch {
  }
}();
var ln = st;
var ft = ln ? function(n, e) {
  return ln(n, "toString", {
    configurable: true,
    enumerable: false,
    value: U2(e),
    writable: true
  });
} : D;
var dt = ft;
var ct = ut(dt);
var qe = ct;
function Ke(n, e) {
  for (var r = -1, t = n == null ? 0 : n.length; ++r < t && e(n[r], r, n) !== false; )
    ;
  return n;
}
function We(n, e, r, t) {
  for (var i = n.length, a = r + (t ? 1 : -1); t ? a-- : ++a < i; )
    if (e(n[a], a, n))
      return a;
  return -1;
}
function lt(n) {
  return n !== n;
}
function ht(n, e, r) {
  for (var t = r - 1, i = n.length; ++t < i; )
    if (n[t] === e)
      return t;
  return -1;
}
function vt(n, e, r) {
  return e === e ? ht(n, e, r) : We(n, lt, r);
}
function gt2(n, e) {
  var r = n == null ? 0 : n.length;
  return !!r && vt(n, e, 0) > -1;
}
var pt = 9007199254740991;
var wt = /^(?:0|[1-9]\d*)$/;
function pn(n, e) {
  var r = typeof n;
  return e = e ?? pt, !!e && (r == "number" || r != "symbol" && wt.test(n)) && n > -1 && n % 1 == 0 && n < e;
}
function wn(n, e, r) {
  e == "__proto__" && ln ? ln(n, e, {
    configurable: true,
    enumerable: true,
    value: r,
    writable: true
  }) : n[e] = r;
}
var bt2 = Object.prototype;
var mt = bt2.hasOwnProperty;
function bn(n, e, r) {
  var t = n[e];
  (!(mt.call(n, e) && oo(t, r)) || r === void 0 && !(e in n)) && wn(n, e, r);
}
function en(n, e, r, t) {
  var i = !r;
  r || (r = {});
  for (var a = -1, o = e.length; ++a < o; ) {
    var u = e[a], s = t ? t(r[u], n[u], u, r, n) : void 0;
    s === void 0 && (s = n[u]), i ? wn(r, u, s) : bn(r, u, s);
  }
  return r;
}
var ce = Math.max;
function Xe(n, e, r) {
  return e = ce(e === void 0 ? n.length - 1 : e, 0), function() {
    for (var t = arguments, i = -1, a = ce(t.length - e, 0), o = Array(a); ++i < a; )
      o[i] = t[e + i];
    i = -1;
    for (var u = Array(e + 1); ++i < e; )
      u[i] = t[i];
    return u[e] = r(o), rt(n, this, u);
  };
}
function mn(n, e) {
  return qe(Xe(n, e, D), n + "");
}
function z2(n, e, r) {
  if (!we(r))
    return false;
  var t = typeof e;
  return (t == "number" ? Qa(r) && pn(e, r.length) : t == "string" && e in r) ? oo(r[e], n) : false;
}
function _t(n) {
  return mn(function(e, r) {
    var t = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, o = i > 2 ? r[2] : void 0;
    for (a = n.length > 3 && typeof a == "function" ? (i--, a) : void 0, o && z2(r[0], r[1], o) && (a = i < 3 ? void 0 : a, i = 1), e = Object(e); ++t < i; ) {
      var u = r[t];
      u && n(e, u, t, a);
    }
    return e;
  });
}
function Et(n, e) {
  for (var r = -1, t = Array(n); ++r < n; )
    t[r] = e(r);
  return t;
}
var yt = Object.prototype;
var xt = yt.hasOwnProperty;
function Ze(n, e) {
  var r = Ka(n), t = !r && qa(n), i = !r && !t && an(n), a = !r && !t && !i && xn(n), o = r || t || i || a, u = o ? Et(n.length, String) : [], s = u.length;
  for (var f in n)
    (e || xt.call(n, f)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    pn(f, s))) && u.push(f);
  return u;
}
function T2(n) {
  return Qa(n) ? Ze(n) : La(n);
}
function Tt(n) {
  var e = [];
  if (n != null)
    for (var r in Object(n))
      e.push(r);
  return e;
}
var Ot = Object.prototype;
var Lt = Ot.hasOwnProperty;
function At(n) {
  if (!we(n))
    return Tt(n);
  var e = gt(n), r = [];
  for (var t in n)
    t == "constructor" && (e || !Lt.call(n, t)) || r.push(t);
  return r;
}
function G(n) {
  return Qa(n) ? Ze(n, true) : At(n);
}
var Nt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var Pt = /^\w*$/;
function qn(n, e) {
  if (Ka(n))
    return false;
  var r = typeof n;
  return r == "number" || r == "symbol" || r == "boolean" || n == null || M(n) ? true : Pt.test(n) || !Nt.test(n) || e != null && n in Object(e);
}
var Ct = 500;
function $t(n) {
  var e = U(n, function(t) {
    return r.size === Ct && r.clear(), t;
  }), r = e.cache;
  return e;
}
var It = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var St = /\\(\\)?/g;
var Mt = $t(function(n) {
  var e = [];
  return n.charCodeAt(0) === 46 && e.push(""), n.replace(It, function(r, t, i, a) {
    e.push(i ? a.replace(St, "$1") : t || r);
  }), e;
});
var Rt = Mt;
function Ve(n) {
  return n == null ? "" : He(n);
}
function _n(n, e) {
  return Ka(n) ? n : qn(n, e) ? [n] : Rt(Ve(n));
}
var Ft = 1 / 0;
function rn(n) {
  if (typeof n == "string" || M(n))
    return n;
  var e = n + "";
  return e == "0" && 1 / n == -Ft ? "-0" : e;
}
function En(n, e) {
  e = _n(e, n);
  for (var r = 0, t = e.length; n != null && r < t; )
    n = n[rn(e[r++])];
  return r && r == t ? n : void 0;
}
function Dt(n, e, r) {
  var t = n == null ? void 0 : En(n, e);
  return t === void 0 ? r : t;
}
function Kn(n, e) {
  for (var r = -1, t = e.length, i = n.length; ++r < t; )
    n[i + r] = e[r];
  return n;
}
var le2 = ei ? ei.isConcatSpreadable : void 0;
function Gt(n) {
  return Ka(n) || qa(n) || !!(le2 && n && n[le2]);
}
function yn(n, e, r, t, i) {
  var a = -1, o = n.length;
  for (r || (r = Gt), i || (i = []); ++a < o; ) {
    var u = n[a];
    e > 0 && r(u) ? e > 1 ? yn(u, e - 1, r, t, i) : Kn(i, u) : t || (i[i.length] = u);
  }
  return i;
}
function q(n) {
  var e = n == null ? 0 : n.length;
  return e ? yn(n, 1) : [];
}
function Bt(n) {
  return qe(Xe(n, void 0, q), n + "");
}
function Ut(n, e, r, t) {
  var i = -1, a = n == null ? 0 : n.length;
  for (t && a && (r = n[++i]); ++i < a; )
    r = e(r, n[i], i, n);
  return r;
}
function Yt() {
  this.__data__ = new R(), this.size = 0;
}
function Ht(n) {
  var e = this.__data__, r = e.delete(n);
  return this.size = e.size, r;
}
function kt(n) {
  return this.__data__.get(n);
}
function qt(n) {
  return this.__data__.has(n);
}
var Kt = 200;
function Wt(n, e) {
  var r = this.__data__;
  if (r instanceof R) {
    var t = r.__data__;
    if (!_o || t.length < Kt - 1)
      return t.push([n, e]), this.size = ++r.size, this;
    r = this.__data__ = new I(t);
  }
  return r.set(n, e), this.size = r.size, this;
}
function O(n) {
  var e = this.__data__ = new R(n);
  this.size = e.size;
}
O.prototype.clear = Yt;
O.prototype.delete = Ht;
O.prototype.get = kt;
O.prototype.has = qt;
O.prototype.set = Wt;
function Xt(n, e) {
  return n && en(e, T2(e), n);
}
function Zt(n, e) {
  return n && en(e, G(e), n);
}
var ze = typeof exports == "object" && exports && !exports.nodeType && exports;
var he2 = ze && typeof module == "object" && module && !module.nodeType && module;
var Vt = he2 && he2.exports === ze;
var ve = Vt ? Ti.Buffer : void 0;
var ge = ve ? ve.allocUnsafe : void 0;
function Je(n, e) {
  if (e)
    return n.slice();
  var r = n.length, t = ge ? ge(r) : new n.constructor(r);
  return n.copy(t), t;
}
function Qe(n, e) {
  for (var r = -1, t = n == null ? 0 : n.length, i = 0, a = []; ++r < t; ) {
    var o = n[r];
    e(o, r, n) && (a[i++] = o);
  }
  return a;
}
function je() {
  return [];
}
var zt = Object.prototype;
var Jt = zt.propertyIsEnumerable;
var pe = Object.getOwnPropertySymbols;
var Qt = pe ? function(n) {
  return n == null ? [] : (n = Object(n), Qe(pe(n), function(e) {
    return Jt.call(n, e);
  }));
} : je;
var Wn = Qt;
function jt(n, e) {
  return en(n, Wn(n), e);
}
var ni = Object.getOwnPropertySymbols;
var ei2 = ni ? function(n) {
  for (var e = []; n; )
    Kn(e, Wn(n)), n = T(n);
  return e;
} : je;
var nr = ei2;
function ri(n, e) {
  return en(n, nr(n), e);
}
function er(n, e, r) {
  var t = e(n);
  return Ka(n) ? t : Kn(t, r(n));
}
function Rn(n) {
  return er(n, T2, Wn);
}
function ti(n) {
  return er(n, G, nr);
}
var ii = Object.prototype;
var ai = ii.hasOwnProperty;
function oi(n) {
  var e = n.length, r = new n.constructor(e);
  return e && typeof n[0] == "string" && ai.call(n, "index") && (r.index = n.index, r.input = n.input), r;
}
var ui = Ti.Uint8Array;
var hn = ui;
function Xn(n) {
  var e = new n.constructor(n.byteLength);
  return new hn(e).set(new hn(n)), e;
}
function si(n, e) {
  var r = e ? Xn(n.buffer) : n.buffer;
  return new n.constructor(r, n.byteOffset, n.byteLength);
}
var fi = /\w*$/;
function di(n) {
  var e = new n.constructor(n.source, fi.exec(n));
  return e.lastIndex = n.lastIndex, e;
}
var we2 = ei ? ei.prototype : void 0;
var be = we2 ? we2.valueOf : void 0;
function ci(n) {
  return be ? Object(be.call(n)) : {};
}
function rr(n, e) {
  var r = e ? Xn(n.buffer) : n.buffer;
  return new n.constructor(r, n.byteOffset, n.length);
}
var li = "[object Boolean]";
var hi = "[object Date]";
var vi = "[object Map]";
var gi = "[object Number]";
var pi = "[object RegExp]";
var wi = "[object Set]";
var bi = "[object String]";
var mi = "[object Symbol]";
var _i = "[object ArrayBuffer]";
var Ei = "[object DataView]";
var yi = "[object Float32Array]";
var xi = "[object Float64Array]";
var Ti2 = "[object Int8Array]";
var Oi = "[object Int16Array]";
var Li = "[object Int32Array]";
var Ai = "[object Uint8Array]";
var Ni = "[object Uint8ClampedArray]";
var Pi = "[object Uint16Array]";
var Ci = "[object Uint32Array]";
function $i(n, e, r) {
  var t = n.constructor;
  switch (e) {
    case _i:
      return Xn(n);
    case li:
    case hi:
      return new t(+n);
    case Ei:
      return si(n, r);
    case yi:
    case xi:
    case Ti2:
    case Oi:
    case Li:
    case Ai:
    case Ni:
    case Pi:
    case Ci:
      return rr(n, r);
    case vi:
      return new t();
    case gi:
    case bi:
      return new t(n);
    case pi:
      return di(n);
    case wi:
      return new t();
    case mi:
      return ci(n);
  }
}
function tr(n) {
  return typeof n.constructor == "function" && !gt(n) ? et(T(n)) : {};
}
var Ii = "[object Map]";
function Si(n) {
  return he(n) && Na(n) == Ii;
}
var me = Fe && Fe.isMap;
var Mi = me ? Mn(me) : Si;
var Ri = Mi;
var Fi = "[object Set]";
function Di(n) {
  return he(n) && Na(n) == Fi;
}
var _e = Fe && Fe.isSet;
var Gi = _e ? Mn(_e) : Di;
var Bi = Gi;
var Ui = 1;
var Yi = 2;
var Hi = 4;
var ir = "[object Arguments]";
var ki = "[object Array]";
var qi = "[object Boolean]";
var Ki = "[object Date]";
var Wi = "[object Error]";
var ar = "[object Function]";
var Xi = "[object GeneratorFunction]";
var Zi = "[object Map]";
var Vi = "[object Number]";
var or = "[object Object]";
var zi = "[object RegExp]";
var Ji = "[object Set]";
var Qi = "[object String]";
var ji = "[object Symbol]";
var na = "[object WeakMap]";
var ea = "[object ArrayBuffer]";
var ra = "[object DataView]";
var ta = "[object Float32Array]";
var ia = "[object Float64Array]";
var aa = "[object Int8Array]";
var oa = "[object Int16Array]";
var ua = "[object Int32Array]";
var sa = "[object Uint8Array]";
var fa = "[object Uint8ClampedArray]";
var da = "[object Uint16Array]";
var ca = "[object Uint32Array]";
var b = {};
b[ir] = b[ki] = b[ea] = b[ra] = b[qi] = b[Ki] = b[ta] = b[ia] = b[aa] = b[oa] = b[ua] = b[Zi] = b[Vi] = b[or] = b[zi] = b[Ji] = b[Qi] = b[ji] = b[sa] = b[fa] = b[da] = b[ca] = true;
b[Wi] = b[ar] = b[na] = false;
function dn(n, e, r, t, i, a) {
  var o, u = e & Ui, s = e & Yi, f = e & Hi;
  if (r && (o = i ? r(n, t, i, a) : r(n)), o !== void 0)
    return o;
  if (!we(n))
    return n;
  var d = Ka(n);
  if (d) {
    if (o = oi(n), !u)
      return ke(n, o);
  } else {
    var l = Na(n), h = l == ar || l == Xi;
    if (an(n))
      return Je(n, u);
    if (l == or || l == ir || h && !i) {
      if (o = s || h ? {} : tr(n), !u)
        return s ? ri(n, Zt(o, n)) : jt(n, Xt(o, n));
    } else {
      if (!b[l])
        return i ? n : {};
      o = $i(n, l, u);
    }
  }
  a || (a = new O());
  var g = a.get(n);
  if (g)
    return g;
  a.set(n, o), Bi(n) ? n.forEach(function(m) {
    o.add(dn(m, e, r, m, n, a));
  }) : Ri(n) && n.forEach(function(m, E) {
    o.set(E, dn(m, e, r, E, n, a));
  });
  var v = f ? s ? ti : Rn : s ? G : T2, p = d ? void 0 : v(n);
  return Ke(p || n, function(m, E) {
    p && (E = m, m = n[E]), bn(o, E, dn(m, e, r, E, n, a));
  }), o;
}
var la = 1;
var ha = 4;
function va(n) {
  return dn(n, la | ha);
}
var ga = "__lodash_hash_undefined__";
function pa(n) {
  return this.__data__.set(n, ga), this;
}
function wa(n) {
  return this.__data__.has(n);
}
function J(n) {
  var e = -1, r = n == null ? 0 : n.length;
  for (this.__data__ = new I(); ++e < r; )
    this.add(n[e]);
}
J.prototype.add = J.prototype.push = pa;
J.prototype.has = wa;
function ba(n, e) {
  for (var r = -1, t = n == null ? 0 : n.length; ++r < t; )
    if (e(n[r], r, n))
      return true;
  return false;
}
function ur(n, e) {
  return n.has(e);
}
var ma = 1;
var _a = 2;
function sr(n, e, r, t, i, a) {
  var o = r & ma, u = n.length, s = e.length;
  if (u != s && !(o && s > u))
    return false;
  var f = a.get(n), d = a.get(e);
  if (f && d)
    return f == e && d == n;
  var l = -1, h = true, g = r & _a ? new J() : void 0;
  for (a.set(n, e), a.set(e, n); ++l < u; ) {
    var v = n[l], p = e[l];
    if (t)
      var m = o ? t(p, v, l, e, n, a) : t(v, p, l, n, e, a);
    if (m !== void 0) {
      if (m)
        continue;
      h = false;
      break;
    }
    if (g) {
      if (!ba(e, function(E, I2) {
        if (!ur(g, I2) && (v === E || i(v, E, r, t, a)))
          return g.push(I2);
      })) {
        h = false;
        break;
      }
    } else if (!(v === p || i(v, p, r, t, a))) {
      h = false;
      break;
    }
  }
  return a.delete(n), a.delete(e), h;
}
function Ea(n) {
  var e = -1, r = Array(n.size);
  return n.forEach(function(t, i) {
    r[++e] = [i, t];
  }), r;
}
function Zn(n) {
  var e = -1, r = Array(n.size);
  return n.forEach(function(t) {
    r[++e] = t;
  }), r;
}
var ya = 1;
var xa = 2;
var Ta = "[object Boolean]";
var Oa = "[object Date]";
var La2 = "[object Error]";
var Aa = "[object Map]";
var Na2 = "[object Number]";
var Pa = "[object RegExp]";
var Ca = "[object Set]";
var $a = "[object String]";
var Ia = "[object Symbol]";
var Sa = "[object ArrayBuffer]";
var Ma = "[object DataView]";
var Ee = ei ? ei.prototype : void 0;
var An = Ee ? Ee.valueOf : void 0;
function Ra(n, e, r, t, i, a, o) {
  switch (r) {
    case Ma:
      if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
        return false;
      n = n.buffer, e = e.buffer;
    case Sa:
      return !(n.byteLength != e.byteLength || !a(new hn(n), new hn(e)));
    case Ta:
    case Oa:
    case Na2:
      return oo(+n, +e);
    case La2:
      return n.name == e.name && n.message == e.message;
    case Pa:
    case $a:
      return n == e + "";
    case Aa:
      var u = Ea;
    case Ca:
      var s = t & ya;
      if (u || (u = Zn), n.size != e.size && !s)
        return false;
      var f = o.get(n);
      if (f)
        return f == e;
      t |= xa, o.set(n, e);
      var d = sr(u(n), u(e), t, i, a, o);
      return o.delete(n), d;
    case Ia:
      if (An)
        return An.call(n) == An.call(e);
  }
  return false;
}
var Fa = 1;
var Da = Object.prototype;
var Ga = Da.hasOwnProperty;
function Ba(n, e, r, t, i, a) {
  var o = r & Fa, u = Rn(n), s = u.length, f = Rn(e), d = f.length;
  if (s != d && !o)
    return false;
  for (var l = s; l--; ) {
    var h = u[l];
    if (!(o ? h in e : Ga.call(e, h)))
      return false;
  }
  var g = a.get(n), v = a.get(e);
  if (g && v)
    return g == e && v == n;
  var p = true;
  a.set(n, e), a.set(e, n);
  for (var m = o; ++l < s; ) {
    h = u[l];
    var E = n[h], I2 = e[h];
    if (t)
      var ie = o ? t(I2, E, h, e, n, a) : t(E, I2, h, n, e, a);
    if (!(ie === void 0 ? E === I2 || i(E, I2, r, t, a) : ie)) {
      p = false;
      break;
    }
    m || (m = h == "constructor");
  }
  if (p && !m) {
    var on = n.constructor, un = e.constructor;
    on != un && "constructor" in n && "constructor" in e && !(typeof on == "function" && on instanceof on && typeof un == "function" && un instanceof un) && (p = false);
  }
  return a.delete(n), a.delete(e), p;
}
var Ua = 1;
var ye = "[object Arguments]";
var xe = "[object Array]";
var sn = "[object Object]";
var Ya = Object.prototype;
var Te = Ya.hasOwnProperty;
function Ha(n, e, r, t, i, a) {
  var o = Ka(n), u = Ka(e), s = o ? xe : Na(n), f = u ? xe : Na(e);
  s = s == ye ? sn : s, f = f == ye ? sn : f;
  var d = s == sn, l = f == sn, h = s == f;
  if (h && an(n)) {
    if (!an(e))
      return false;
    o = true, d = false;
  }
  if (h && !d)
    return a || (a = new O()), o || xn(n) ? sr(n, e, r, t, i, a) : Ra(n, e, s, r, t, i, a);
  if (!(r & Ua)) {
    var g = d && Te.call(n, "__wrapped__"), v = l && Te.call(e, "__wrapped__");
    if (g || v) {
      var p = g ? n.value() : n, m = v ? e.value() : e;
      return a || (a = new O()), i(p, m, r, t, a);
    }
  }
  return h ? (a || (a = new O()), Ba(n, e, r, t, i, a)) : false;
}
function Vn(n, e, r, t, i) {
  return n === e ? true : n == null || e == null || !he(n) && !he(e) ? n !== n && e !== e : Ha(n, e, r, t, Vn, i);
}
var ka = 1;
var qa2 = 2;
function Ka2(n, e, r, t) {
  var i = r.length, a = i, o = !t;
  if (n == null)
    return !a;
  for (n = Object(n); i--; ) {
    var u = r[i];
    if (o && u[2] ? u[1] !== n[u[0]] : !(u[0] in n))
      return false;
  }
  for (; ++i < a; ) {
    u = r[i];
    var s = u[0], f = n[s], d = u[1];
    if (o && u[2]) {
      if (f === void 0 && !(s in n))
        return false;
    } else {
      var l = new O();
      if (t)
        var h = t(f, d, s, n, e, l);
      if (!(h === void 0 ? Vn(d, f, ka | qa2, t, l) : h))
        return false;
    }
  }
  return true;
}
function fr(n) {
  return n === n && !we(n);
}
function Wa(n) {
  for (var e = T2(n), r = e.length; r--; ) {
    var t = e[r], i = n[t];
    e[r] = [t, i, fr(i)];
  }
  return e;
}
function dr(n, e) {
  return function(r) {
    return r == null ? false : r[n] === e && (e !== void 0 || n in Object(r));
  };
}
function Xa(n) {
  var e = Wa(n);
  return e.length == 1 && e[0][2] ? dr(e[0][0], e[0][1]) : function(r) {
    return r === n || Ka2(r, n, e);
  };
}
function Za(n, e) {
  return n != null && e in Object(n);
}
function cr(n, e, r) {
  e = _n(e, n);
  for (var t = -1, i = e.length, a = false; ++t < i; ) {
    var o = rn(e[t]);
    if (!(a = n != null && r(n, o)))
      break;
    n = n[o];
  }
  return a || ++t != i ? a : (i = n == null ? 0 : n.length, !!i && bt(i) && pn(o, i) && (Ka(n) || qa(n)));
}
function lr(n, e) {
  return n != null && cr(n, e, Za);
}
var Va = 1;
var za = 2;
function Ja(n, e) {
  return qn(n) && fr(e) ? dr(rn(n), e) : function(r) {
    var t = Dt(r, n);
    return t === void 0 && t === e ? lr(r, n) : Vn(e, t, Va | za);
  };
}
function Qa2(n) {
  return function(e) {
    return e == null ? void 0 : e[n];
  };
}
function ja(n) {
  return function(e) {
    return En(e, n);
  };
}
function no(n) {
  return qn(n) ? Qa2(rn(n)) : ja(n);
}
function $(n) {
  return typeof n == "function" ? n : n == null ? D : typeof n == "object" ? Ka(n) ? Ja(n[0], n[1]) : Xa(n) : no(n);
}
function eo(n) {
  return function(e, r, t) {
    for (var i = -1, a = Object(e), o = t(e), u = o.length; u--; ) {
      var s = o[n ? u : ++i];
      if (r(a[s], s, a) === false)
        break;
    }
    return e;
  };
}
var ro = eo();
var zn = ro;
function hr(n, e) {
  return n && zn(n, e, T2);
}
function to(n, e) {
  return function(r, t) {
    if (r == null)
      return r;
    if (!Qa(r))
      return n(r, t);
    for (var i = r.length, a = e ? i : -1, o = Object(r); (e ? a-- : ++a < i) && t(o[a], a, o) !== false; )
      ;
    return r;
  };
}
var io = to(hr);
var xn2 = io;
var ao = function() {
  return Ti.Date.now();
};
var Oe = ao;
var vr = Object.prototype;
var oo2 = vr.hasOwnProperty;
var uo = mn(function(n, e) {
  n = Object(n);
  var r = -1, t = e.length, i = t > 2 ? e[2] : void 0;
  for (i && z2(e[0], e[1], i) && (t = 1); ++r < t; )
    for (var a = e[r], o = G(a), u = -1, s = o.length; ++u < s; ) {
      var f = o[u], d = n[f];
      (d === void 0 || oo(d, vr[f]) && !oo2.call(n, f)) && (n[f] = a[f]);
    }
  return n;
});
var so = uo;
function Fn(n, e, r) {
  (r !== void 0 && !oo(n[e], r) || r === void 0 && !(e in n)) && wn(n, e, r);
}
function gr(n) {
  return he(n) && Qa(n);
}
function Dn(n, e) {
  if (!(e === "constructor" && typeof n[e] == "function") && e != "__proto__")
    return n[e];
}
function fo(n) {
  return en(n, G(n));
}
function co(n, e, r, t, i, a, o) {
  var u = Dn(n, r), s = Dn(e, r), f = o.get(s);
  if (f) {
    Fn(n, r, f);
    return;
  }
  var d = a ? a(u, s, r + "", n, e, o) : void 0, l = d === void 0;
  if (l) {
    var h = Ka(s), g = !h && an(s), v = !h && !g && xn(s);
    d = s, h || g || v ? Ka(u) ? d = u : gr(u) ? d = ke(u) : g ? (l = false, d = Je(s, true)) : v ? (l = false, d = rr(s, true)) : d = [] : B(s) || qa(s) ? (d = u, qa(u) ? d = fo(u) : (!we(u) || Fr(u)) && (d = tr(s))) : l = false;
  }
  l && (o.set(s, d), i(d, s, t, a, o), o.delete(s)), Fn(n, r, d);
}
function pr(n, e, r, t, i) {
  n !== e && zn(e, function(a, o) {
    if (i || (i = new O()), we(a))
      co(n, e, o, r, pr, t, i);
    else {
      var u = t ? t(Dn(n, o), a, o + "", n, e, i) : void 0;
      u === void 0 && (u = a), Fn(n, o, u);
    }
  }, G);
}
function lo(n, e, r) {
  for (var t = -1, i = n == null ? 0 : n.length; ++t < i; )
    if (r(e, n[t]))
      return true;
  return false;
}
function vn(n) {
  var e = n == null ? 0 : n.length;
  return e ? n[e - 1] : void 0;
}
function wr(n) {
  return typeof n == "function" ? n : D;
}
function c(n, e) {
  var r = Ka(n) ? Ke : xn2;
  return r(n, wr(e));
}
function ho(n, e) {
  var r = [];
  return xn2(n, function(t, i, a) {
    e(t, i, a) && r.push(t);
  }), r;
}
function N(n, e) {
  var r = Ka(n) ? Qe : ho;
  return r(n, $(e));
}
function vo(n) {
  return function(e, r, t) {
    var i = Object(e);
    if (!Qa(e)) {
      var a = $(r);
      e = T2(e), r = function(u) {
        return a(i[u], u, i);
      };
    }
    var o = n(e, r, t);
    return o > -1 ? i[a ? e[o] : o] : void 0;
  };
}
var go = Math.max;
function po(n, e, r) {
  var t = n == null ? 0 : n.length;
  if (!t)
    return -1;
  var i = r == null ? 0 : jr(r);
  return i < 0 && (i = go(t + i, 0)), We(n, $(e), i);
}
var wo = vo(po);
var Jn = wo;
function br(n, e) {
  var r = -1, t = Qa(n) ? Array(n.length) : [];
  return xn2(n, function(i, a, o) {
    t[++r] = e(i, a, o);
  }), t;
}
function y(n, e) {
  var r = Ka(n) ? Y : br;
  return r(n, $(e));
}
function bo(n, e) {
  return n == null ? n : zn(n, wr(e), G);
}
function mo(n, e) {
  return n > e;
}
var _o2 = Object.prototype;
var Eo = _o2.hasOwnProperty;
function yo(n, e) {
  return n != null && Eo.call(n, e);
}
function w(n, e) {
  return n != null && cr(n, e, yo);
}
function xo(n, e) {
  return Y(e, function(r) {
    return n[r];
  });
}
function P(n) {
  return n == null ? [] : xo(n, T2(n));
}
function x(n) {
  return n === void 0;
}
function mr(n, e) {
  return n < e;
}
function Tn(n, e) {
  var r = {};
  return e = $(e), hr(n, function(t, i, a) {
    wn(r, i, e(t, i, a));
  }), r;
}
function Qn(n, e, r) {
  for (var t = -1, i = n.length; ++t < i; ) {
    var a = n[t], o = e(a);
    if (o != null && (u === void 0 ? o === o && !M(o) : r(o, u)))
      var u = o, s = a;
  }
  return s;
}
function R2(n) {
  return n && n.length ? Qn(n, D, mo) : void 0;
}
var To = _t(function(n, e, r) {
  pr(n, e, r);
});
var Gn = To;
function Q(n) {
  return n && n.length ? Qn(n, D, mr) : void 0;
}
function jn(n, e) {
  return n && n.length ? Qn(n, $(e), mr) : void 0;
}
function Oo(n, e, r, t) {
  if (!we(n))
    return n;
  e = _n(e, n);
  for (var i = -1, a = e.length, o = a - 1, u = n; u != null && ++i < a; ) {
    var s = rn(e[i]), f = r;
    if (s === "__proto__" || s === "constructor" || s === "prototype")
      return n;
    if (i != o) {
      var d = u[s];
      f = t ? t(d, s, u) : void 0, f === void 0 && (f = we(d) ? d : pn(e[i + 1]) ? [] : {});
    }
    bn(u, s, f), u = u[s];
  }
  return n;
}
function Lo(n, e, r) {
  for (var t = -1, i = e.length, a = {}; ++t < i; ) {
    var o = e[t], u = En(n, o);
    r(u, o) && Oo(a, _n(o, n), u);
  }
  return a;
}
function Ao(n, e) {
  var r = n.length;
  for (n.sort(e); r--; )
    n[r] = n[r].value;
  return n;
}
function No(n, e) {
  if (n !== e) {
    var r = n !== void 0, t = n === null, i = n === n, a = M(n), o = e !== void 0, u = e === null, s = e === e, f = M(e);
    if (!u && !f && !a && n > e || a && o && s && !u && !f || t && o && s || !r && s || !i)
      return 1;
    if (!t && !a && !f && n < e || f && r && i && !t && !a || u && r && i || !o && i || !s)
      return -1;
  }
  return 0;
}
function Po(n, e, r) {
  for (var t = -1, i = n.criteria, a = e.criteria, o = i.length, u = r.length; ++t < o; ) {
    var s = No(i[t], a[t]);
    if (s) {
      if (t >= u)
        return s;
      var f = r[t];
      return s * (f == "desc" ? -1 : 1);
    }
  }
  return n.index - e.index;
}
function Co(n, e, r) {
  e.length ? e = Y(e, function(a) {
    return Ka(a) ? function(o) {
      return En(o, a.length === 1 ? a[0] : a);
    } : a;
  }) : e = [D];
  var t = -1;
  e = Y(e, Mn($));
  var i = br(n, function(a, o, u) {
    var s = Y(e, function(f) {
      return f(a);
    });
    return { criteria: s, index: ++t, value: a };
  });
  return Ao(i, function(a, o) {
    return Po(a, o, r);
  });
}
function $o(n, e) {
  return Lo(n, e, function(r, t) {
    return lr(n, t);
  });
}
var Io = Bt(function(n, e) {
  return n == null ? {} : $o(n, e);
});
var gn = Io;
var So = Math.ceil;
var Mo = Math.max;
function Ro(n, e, r, t) {
  for (var i = -1, a = Mo(So((e - n) / (r || 1)), 0), o = Array(a); a--; )
    o[t ? a : ++i] = n, n += r;
  return o;
}
function Fo(n) {
  return function(e, r, t) {
    return t && typeof t != "number" && z2(e, r, t) && (r = t = void 0), e = fn(e), r === void 0 ? (r = e, e = 0) : r = fn(r), t = t === void 0 ? e < r ? 1 : -1 : fn(t), Ro(e, r, t, n);
  };
}
var Do = Fo();
var k = Do;
function Go(n, e, r, t, i) {
  return i(n, function(a, o, u) {
    r = t ? (t = false, a) : e(r, a, o, u);
  }), r;
}
function tn(n, e, r) {
  var t = Ka(n) ? Ut : Go, i = arguments.length < 3;
  return t(n, $(e), r, i, xn2);
}
var Bo = mn(function(n, e) {
  if (n == null)
    return [];
  var r = e.length;
  return r > 1 && z2(n, e[0], e[1]) ? e = [] : r > 2 && z2(e[0], e[1], e[2]) && (e = [e[0]]), Co(n, yn(e, 1), []);
});
var an2 = Bo;
var Uo = 1 / 0;
var Yo = le && 1 / Zn(new le([, -0]))[1] == Uo ? function(n) {
  return new le(n);
} : tt;
var Ho = Yo;
var ko = 200;
function qo(n, e, r) {
  var t = -1, i = gt2, a = n.length, o = true, u = [], s = u;
  if (r)
    o = false, i = lo;
  else if (a >= ko) {
    var f = e ? null : Ho(n);
    if (f)
      return Zn(f);
    o = false, i = ur, s = new J();
  } else
    s = e ? [] : u;
  n:
    for (; ++t < a; ) {
      var d = n[t], l = e ? e(d) : d;
      if (d = r || d !== 0 ? d : 0, o && l === l) {
        for (var h = s.length; h--; )
          if (s[h] === l)
            continue n;
        e && s.push(l), u.push(d);
      } else
        i(s, l, r) || (s !== u && s.push(l), u.push(d));
    }
  return u;
}
var Ko = mn(function(n) {
  return qo(yn(n, 1, gr, true));
});
var Wo = Ko;
var Xo = 0;
function ne(n) {
  var e = ++Xo;
  return Ve(n) + e;
}
function Zo(n, e, r) {
  for (var t = -1, i = n.length, a = e.length, o = {}; ++t < i; ) {
    var u = t < a ? e[t] : void 0;
    r(o, n[t], u);
  }
  return o;
}
function Vo(n, e) {
  return Zo(n || [], e || [], bn);
}
var zo = "\0";
var S = "\0";
var Le = "";
var A = class {
  constructor(e = {}) {
    this._isDirected = w(e, "directed") ? e.directed : true, this._isMultigraph = w(e, "multigraph") ? e.multigraph : false, this._isCompound = w(e, "compound") ? e.compound : false, this._label = void 0, this._defaultNodeLabelFn = U2(void 0), this._defaultEdgeLabelFn = U2(void 0), this._nodes = {}, this._isCompound && (this._parent = {}, this._children = {}, this._children[S] = {}), this._in = {}, this._preds = {}, this._out = {}, this._sucs = {}, this._edgeObjs = {}, this._edgeLabels = {};
  }
  /* === Graph functions ========= */
  isDirected() {
    return this._isDirected;
  }
  isMultigraph() {
    return this._isMultigraph;
  }
  isCompound() {
    return this._isCompound;
  }
  setGraph(e) {
    return this._label = e, this;
  }
  graph() {
    return this._label;
  }
  /* === Node functions ========== */
  setDefaultNodeLabel(e) {
    return Fr(e) || (e = U2(e)), this._defaultNodeLabelFn = e, this;
  }
  nodeCount() {
    return this._nodeCount;
  }
  nodes() {
    return T2(this._nodes);
  }
  sources() {
    var e = this;
    return N(this.nodes(), function(r) {
      return z(e._in[r]);
    });
  }
  sinks() {
    var e = this;
    return N(this.nodes(), function(r) {
      return z(e._out[r]);
    });
  }
  setNodes(e, r) {
    var t = arguments, i = this;
    return c(e, function(a) {
      t.length > 1 ? i.setNode(a, r) : i.setNode(a);
    }), this;
  }
  setNode(e, r) {
    return w(this._nodes, e) ? (arguments.length > 1 && (this._nodes[e] = r), this) : (this._nodes[e] = arguments.length > 1 ? r : this._defaultNodeLabelFn(e), this._isCompound && (this._parent[e] = S, this._children[e] = {}, this._children[S][e] = true), this._in[e] = {}, this._preds[e] = {}, this._out[e] = {}, this._sucs[e] = {}, ++this._nodeCount, this);
  }
  node(e) {
    return this._nodes[e];
  }
  hasNode(e) {
    return w(this._nodes, e);
  }
  removeNode(e) {
    var r = this;
    if (w(this._nodes, e)) {
      var t = function(i) {
        r.removeEdge(r._edgeObjs[i]);
      };
      delete this._nodes[e], this._isCompound && (this._removeFromParentsChildList(e), delete this._parent[e], c(this.children(e), function(i) {
        r.setParent(i);
      }), delete this._children[e]), c(T2(this._in[e]), t), delete this._in[e], delete this._preds[e], c(T2(this._out[e]), t), delete this._out[e], delete this._sucs[e], --this._nodeCount;
    }
    return this;
  }
  setParent(e, r) {
    if (!this._isCompound)
      throw new Error("Cannot set parent in a non-compound graph");
    if (x(r))
      r = S;
    else {
      r += "";
      for (var t = r; !x(t); t = this.parent(t))
        if (t === e)
          throw new Error("Setting " + r + " as parent of " + e + " would create a cycle");
      this.setNode(r);
    }
    return this.setNode(e), this._removeFromParentsChildList(e), this._parent[e] = r, this._children[r][e] = true, this;
  }
  _removeFromParentsChildList(e) {
    delete this._children[this._parent[e]][e];
  }
  parent(e) {
    if (this._isCompound) {
      var r = this._parent[e];
      if (r !== S)
        return r;
    }
  }
  children(e) {
    if (x(e) && (e = S), this._isCompound) {
      var r = this._children[e];
      if (r)
        return T2(r);
    } else {
      if (e === S)
        return this.nodes();
      if (this.hasNode(e))
        return [];
    }
  }
  predecessors(e) {
    var r = this._preds[e];
    if (r)
      return T2(r);
  }
  successors(e) {
    var r = this._sucs[e];
    if (r)
      return T2(r);
  }
  neighbors(e) {
    var r = this.predecessors(e);
    if (r)
      return Wo(r, this.successors(e));
  }
  isLeaf(e) {
    var r;
    return this.isDirected() ? r = this.successors(e) : r = this.neighbors(e), r.length === 0;
  }
  filterNodes(e) {
    var r = new this.constructor({
      directed: this._isDirected,
      multigraph: this._isMultigraph,
      compound: this._isCompound
    });
    r.setGraph(this.graph());
    var t = this;
    c(this._nodes, function(o, u) {
      e(u) && r.setNode(u, o);
    }), c(this._edgeObjs, function(o) {
      r.hasNode(o.v) && r.hasNode(o.w) && r.setEdge(o, t.edge(o));
    });
    var i = {};
    function a(o) {
      var u = t.parent(o);
      return u === void 0 || r.hasNode(u) ? (i[o] = u, u) : u in i ? i[u] : a(u);
    }
    return this._isCompound && c(r.nodes(), function(o) {
      r.setParent(o, a(o));
    }), r;
  }
  /* === Edge functions ========== */
  setDefaultEdgeLabel(e) {
    return Fr(e) || (e = U2(e)), this._defaultEdgeLabelFn = e, this;
  }
  edgeCount() {
    return this._edgeCount;
  }
  edges() {
    return P(this._edgeObjs);
  }
  setPath(e, r) {
    var t = this, i = arguments;
    return tn(e, function(a, o) {
      return i.length > 1 ? t.setEdge(a, o, r) : t.setEdge(a, o), o;
    }), this;
  }
  /*
   * setEdge(v, w, [value, [name]])
   * setEdge({ v, w, [name] }, [value])
   */
  setEdge() {
    var e, r, t, i, a = false, o = arguments[0];
    typeof o == "object" && o !== null && "v" in o ? (e = o.v, r = o.w, t = o.name, arguments.length === 2 && (i = arguments[1], a = true)) : (e = o, r = arguments[1], t = arguments[3], arguments.length > 2 && (i = arguments[2], a = true)), e = "" + e, r = "" + r, x(t) || (t = "" + t);
    var u = W(this._isDirected, e, r, t);
    if (w(this._edgeLabels, u))
      return a && (this._edgeLabels[u] = i), this;
    if (!x(t) && !this._isMultigraph)
      throw new Error("Cannot set a named edge when isMultigraph = false");
    this.setNode(e), this.setNode(r), this._edgeLabels[u] = a ? i : this._defaultEdgeLabelFn(e, r, t);
    var s = Jo(this._isDirected, e, r, t);
    return e = s.v, r = s.w, Object.freeze(s), this._edgeObjs[u] = s, Ae(this._preds[r], e), Ae(this._sucs[e], r), this._in[r][u] = s, this._out[e][u] = s, this._edgeCount++, this;
  }
  edge(e, r, t) {
    var i = arguments.length === 1 ? Nn(this._isDirected, arguments[0]) : W(this._isDirected, e, r, t);
    return this._edgeLabels[i];
  }
  hasEdge(e, r, t) {
    var i = arguments.length === 1 ? Nn(this._isDirected, arguments[0]) : W(this._isDirected, e, r, t);
    return w(this._edgeLabels, i);
  }
  removeEdge(e, r, t) {
    var i = arguments.length === 1 ? Nn(this._isDirected, arguments[0]) : W(this._isDirected, e, r, t), a = this._edgeObjs[i];
    return a && (e = a.v, r = a.w, delete this._edgeLabels[i], delete this._edgeObjs[i], Ne(this._preds[r], e), Ne(this._sucs[e], r), delete this._in[r][i], delete this._out[e][i], this._edgeCount--), this;
  }
  inEdges(e, r) {
    var t = this._in[e];
    if (t) {
      var i = P(t);
      return r ? N(i, function(a) {
        return a.v === r;
      }) : i;
    }
  }
  outEdges(e, r) {
    var t = this._out[e];
    if (t) {
      var i = P(t);
      return r ? N(i, function(a) {
        return a.w === r;
      }) : i;
    }
  }
  nodeEdges(e, r) {
    var t = this.inEdges(e, r);
    if (t)
      return t.concat(this.outEdges(e, r));
  }
};
A.prototype._nodeCount = 0;
A.prototype._edgeCount = 0;
function Ae(n, e) {
  n[e] ? n[e]++ : n[e] = 1;
}
function Ne(n, e) {
  --n[e] || delete n[e];
}
function W(n, e, r, t) {
  var i = "" + e, a = "" + r;
  if (!n && i > a) {
    var o = i;
    i = a, a = o;
  }
  return i + Le + a + Le + (x(t) ? zo : t);
}
function Jo(n, e, r, t) {
  var i = "" + e, a = "" + r;
  if (!n && i > a) {
    var o = i;
    i = a, a = o;
  }
  var u = { v: i, w: a };
  return t && (u.name = t), u;
}
function Nn(n, e) {
  return W(n, e.v, e.w, e.name);
}
var Qo = class {
  constructor() {
    var e = {};
    e._next = e._prev = e, this._sentinel = e;
  }
  dequeue() {
    var e = this._sentinel, r = e._prev;
    if (r !== e)
      return Pe(r), r;
  }
  enqueue(e) {
    var r = this._sentinel;
    e._prev && e._next && Pe(e), e._next = r._next, r._next._prev = e, r._next = e, e._prev = r;
  }
  toString() {
    for (var e = [], r = this._sentinel, t = r._prev; t !== r; )
      e.push(JSON.stringify(t, jo)), t = t._prev;
    return "[" + e.join(", ") + "]";
  }
};
function Pe(n) {
  n._prev._next = n._next, n._next._prev = n._prev, delete n._next, delete n._prev;
}
function jo(n, e) {
  if (n !== "_next" && n !== "_prev")
    return e;
}
var nu = U2(1);
function eu(n, e) {
  if (n.nodeCount() <= 1)
    return [];
  var r = tu(n, e || nu), t = ru(r.graph, r.buckets, r.zeroIdx);
  return q(
    y(t, function(i) {
      return n.outEdges(i.v, i.w);
    })
  );
}
function ru(n, e, r) {
  for (var t = [], i = e[e.length - 1], a = e[0], o; n.nodeCount(); ) {
    for (; o = a.dequeue(); )
      Pn(n, e, r, o);
    for (; o = i.dequeue(); )
      Pn(n, e, r, o);
    if (n.nodeCount()) {
      for (var u = e.length - 2; u > 0; --u)
        if (o = e[u].dequeue(), o) {
          t = t.concat(Pn(n, e, r, o, true));
          break;
        }
    }
  }
  return t;
}
function Pn(n, e, r, t, i) {
  var a = i ? [] : void 0;
  return c(n.inEdges(t.v), function(o) {
    var u = n.edge(o), s = n.node(o.v);
    i && a.push({ v: o.v, w: o.w }), s.out -= u, Bn(e, r, s);
  }), c(n.outEdges(t.v), function(o) {
    var u = n.edge(o), s = o.w, f = n.node(s);
    f.in -= u, Bn(e, r, f);
  }), n.removeNode(t.v), a;
}
function tu(n, e) {
  var r = new A(), t = 0, i = 0;
  c(n.nodes(), function(u) {
    r.setNode(u, { v: u, in: 0, out: 0 });
  }), c(n.edges(), function(u) {
    var s = r.edge(u.v, u.w) || 0, f = e(u), d = s + f;
    r.setEdge(u.v, u.w, d), i = Math.max(i, r.node(u.v).out += f), t = Math.max(t, r.node(u.w).in += f);
  });
  var a = k(i + t + 3).map(function() {
    return new Qo();
  }), o = t + 1;
  return c(r.nodes(), function(u) {
    Bn(a, o, r.node(u));
  }), { graph: r, buckets: a, zeroIdx: o };
}
function Bn(n, e, r) {
  r.out ? r.in ? n[r.out - r.in + e].enqueue(r) : n[n.length - 1].enqueue(r) : n[0].enqueue(r);
}
function iu(n) {
  var e = n.graph().acyclicer === "greedy" ? eu(n, r(n)) : au(n);
  c(e, function(t) {
    var i = n.edge(t);
    n.removeEdge(t), i.forwardName = t.name, i.reversed = true, n.setEdge(t.w, t.v, i, ne("rev"));
  });
  function r(t) {
    return function(i) {
      return t.edge(i).weight;
    };
  }
}
function au(n) {
  var e = [], r = {}, t = {};
  function i(a) {
    w(t, a) || (t[a] = true, r[a] = true, c(n.outEdges(a), function(o) {
      w(r, o.w) ? e.push(o) : i(o.w);
    }), delete r[a]);
  }
  return c(n.nodes(), i), e;
}
function ou(n) {
  c(n.edges(), function(e) {
    var r = n.edge(e);
    if (r.reversed) {
      n.removeEdge(e);
      var t = r.forwardName;
      delete r.reversed, delete r.forwardName, n.setEdge(e.w, e.v, r, t);
    }
  });
}
function K(n, e, r, t) {
  var i;
  do
    i = ne(t);
  while (n.hasNode(i));
  return r.dummy = e, n.setNode(i, r), i;
}
function uu(n) {
  var e = new A().setGraph(n.graph());
  return c(n.nodes(), function(r) {
    e.setNode(r, n.node(r));
  }), c(n.edges(), function(r) {
    var t = e.edge(r.v, r.w) || { weight: 0, minlen: 1 }, i = n.edge(r);
    e.setEdge(r.v, r.w, {
      weight: t.weight + i.weight,
      minlen: Math.max(t.minlen, i.minlen)
    });
  }), e;
}
function _r(n) {
  var e = new A({ multigraph: n.isMultigraph() }).setGraph(n.graph());
  return c(n.nodes(), function(r) {
    n.children(r).length || e.setNode(r, n.node(r));
  }), c(n.edges(), function(r) {
    e.setEdge(r, n.edge(r));
  }), e;
}
function Ce2(n, e) {
  var r = n.x, t = n.y, i = e.x - r, a = e.y - t, o = n.width / 2, u = n.height / 2;
  if (!i && !a)
    throw new Error("Not possible to find intersection inside of the rectangle");
  var s, f;
  return Math.abs(a) * o > Math.abs(i) * u ? (a < 0 && (u = -u), s = u * i / a, f = u) : (i < 0 && (o = -o), s = o, f = o * a / i), { x: r + s, y: t + f };
}
function On(n) {
  var e = y(k(Er(n) + 1), function() {
    return [];
  });
  return c(n.nodes(), function(r) {
    var t = n.node(r), i = t.rank;
    x(i) || (e[i][t.order] = r);
  }), e;
}
function su(n) {
  var e = Q(
    y(n.nodes(), function(r) {
      return n.node(r).rank;
    })
  );
  c(n.nodes(), function(r) {
    var t = n.node(r);
    w(t, "rank") && (t.rank -= e);
  });
}
function fu(n) {
  var e = Q(
    y(n.nodes(), function(a) {
      return n.node(a).rank;
    })
  ), r = [];
  c(n.nodes(), function(a) {
    var o = n.node(a).rank - e;
    r[o] || (r[o] = []), r[o].push(a);
  });
  var t = 0, i = n.graph().nodeRankFactor;
  c(r, function(a, o) {
    x(a) && o % i !== 0 ? --t : t && c(a, function(u) {
      n.node(u).rank += t;
    });
  });
}
function $e(n, e, r, t) {
  var i = {
    width: 0,
    height: 0
  };
  return arguments.length >= 4 && (i.rank = r, i.order = t), K(n, "border", i, e);
}
function Er(n) {
  return R2(
    y(n.nodes(), function(e) {
      var r = n.node(e).rank;
      if (!x(r))
        return r;
    })
  );
}
function du(n, e) {
  var r = { lhs: [], rhs: [] };
  return c(n, function(t) {
    e(t) ? r.lhs.push(t) : r.rhs.push(t);
  }), r;
}
function cu(n, e) {
  var r = Oe();
  try {
    return e();
  } finally {
    console.log(n + " time: " + (Oe() - r) + "ms");
  }
}
function lu(n, e) {
  return e();
}
function hu(n) {
  function e(r) {
    var t = n.children(r), i = n.node(r);
    if (t.length && c(t, e), w(i, "minRank")) {
      i.borderLeft = [], i.borderRight = [];
      for (var a = i.minRank, o = i.maxRank + 1; a < o; ++a)
        Ie(n, "borderLeft", "_bl", r, i, a), Ie(n, "borderRight", "_br", r, i, a);
    }
  }
  c(n.children(), e);
}
function Ie(n, e, r, t, i, a) {
  var o = { width: 0, height: 0, rank: a, borderType: e }, u = i[e][a - 1], s = K(n, "border", o, r);
  i[e][a] = s, n.setParent(s, t), u && n.setEdge(u, s, { weight: 1 });
}
function vu(n) {
  var e = n.graph().rankdir.toLowerCase();
  (e === "lr" || e === "rl") && yr(n);
}
function gu(n) {
  var e = n.graph().rankdir.toLowerCase();
  (e === "bt" || e === "rl") && pu(n), (e === "lr" || e === "rl") && (wu(n), yr(n));
}
function yr(n) {
  c(n.nodes(), function(e) {
    Se(n.node(e));
  }), c(n.edges(), function(e) {
    Se(n.edge(e));
  });
}
function Se(n) {
  var e = n.width;
  n.width = n.height, n.height = e;
}
function pu(n) {
  c(n.nodes(), function(e) {
    Cn(n.node(e));
  }), c(n.edges(), function(e) {
    var r = n.edge(e);
    c(r.points, Cn), w(r, "y") && Cn(r);
  });
}
function Cn(n) {
  n.y = -n.y;
}
function wu(n) {
  c(n.nodes(), function(e) {
    $n(n.node(e));
  }), c(n.edges(), function(e) {
    var r = n.edge(e);
    c(r.points, $n), w(r, "x") && $n(r);
  });
}
function $n(n) {
  var e = n.x;
  n.x = n.y, n.y = e;
}
function bu(n) {
  n.graph().dummyChains = [], c(n.edges(), function(e) {
    mu(n, e);
  });
}
function mu(n, e) {
  var r = e.v, t = n.node(r).rank, i = e.w, a = n.node(i).rank, o = e.name, u = n.edge(e), s = u.labelRank;
  if (a !== t + 1) {
    n.removeEdge(e);
    var f, d, l;
    for (l = 0, ++t; t < a; ++l, ++t)
      u.points = [], d = {
        width: 0,
        height: 0,
        edgeLabel: u,
        edgeObj: e,
        rank: t
      }, f = K(n, "edge", d, "_d"), t === s && (d.width = u.width, d.height = u.height, d.dummy = "edge-label", d.labelpos = u.labelpos), n.setEdge(r, f, { weight: u.weight }, o), l === 0 && n.graph().dummyChains.push(f), r = f;
    n.setEdge(r, i, { weight: u.weight }, o);
  }
}
function _u(n) {
  c(n.graph().dummyChains, function(e) {
    var r = n.node(e), t = r.edgeLabel, i;
    for (n.setEdge(r.edgeObj, t); r.dummy; )
      i = n.successors(e)[0], n.removeNode(e), t.points.push({ x: r.x, y: r.y }), r.dummy === "edge-label" && (t.x = r.x, t.y = r.y, t.width = r.width, t.height = r.height), e = i, r = n.node(e);
  });
}
function ee(n) {
  var e = {};
  function r(t) {
    var i = n.node(t);
    if (w(e, t))
      return i.rank;
    e[t] = true;
    var a = Q(
      y(n.outEdges(t), function(o) {
        return r(o.w) - n.edge(o).minlen;
      })
    );
    return (a === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
    a === void 0 || // return value of _.map([]) for Lodash 4
    a === null) && (a = 0), i.rank = a;
  }
  c(n.sources(), r);
}
function j(n, e) {
  return n.node(e.w).rank - n.node(e.v).rank - n.edge(e).minlen;
}
function xr(n) {
  var e = new A({ directed: false }), r = n.nodes()[0], t = n.nodeCount();
  e.setNode(r, {});
  for (var i, a; Eu(e, n) < t; )
    i = yu(e, n), a = e.hasNode(i.v) ? j(n, i) : -j(n, i), xu(e, n, a);
  return e;
}
function Eu(n, e) {
  function r(t) {
    c(e.nodeEdges(t), function(i) {
      var a = i.v, o = t === a ? i.w : a;
      !n.hasNode(o) && !j(e, i) && (n.setNode(o, {}), n.setEdge(t, o, {}), r(o));
    });
  }
  return c(n.nodes(), r), n.nodeCount();
}
function yu(n, e) {
  return jn(e.edges(), function(r) {
    if (n.hasNode(r.v) !== n.hasNode(r.w))
      return j(e, r);
  });
}
function xu(n, e, r) {
  c(n.nodes(), function(t) {
    e.node(t).rank += r;
  });
}
function Tu() {
}
Tu.prototype = new Error();
function Tr2(n, e, r) {
  Ka(e) || (e = [e]);
  var t = (n.isDirected() ? n.successors : n.neighbors).bind(n), i = [], a = {};
  return c(e, function(o) {
    if (!n.hasNode(o))
      throw new Error("Graph does not have node: " + o);
    Or(n, o, r === "post", a, t, i);
  }), i;
}
function Or(n, e, r, t, i, a) {
  w(t, e) || (t[e] = true, r || a.push(e), c(i(e), function(o) {
    Or(n, o, r, t, i, a);
  }), r && a.push(e));
}
function Ou(n, e) {
  return Tr2(n, e, "post");
}
function Lu(n, e) {
  return Tr2(n, e, "pre");
}
B2.initLowLimValues = te;
B2.initCutValues = re;
B2.calcCutValue = Lr;
B2.leaveEdge = Nr;
B2.enterEdge = Pr;
B2.exchangeEdges = Cr;
function B2(n) {
  n = uu(n), ee(n);
  var e = xr(n);
  te(e), re(e, n);
  for (var r, t; r = Nr(e); )
    t = Pr(e, n, r), Cr(e, n, r, t);
}
function re(n, e) {
  var r = Ou(n, n.nodes());
  r = r.slice(0, r.length - 1), c(r, function(t) {
    Au(n, e, t);
  });
}
function Au(n, e, r) {
  var t = n.node(r), i = t.parent;
  n.edge(r, i).cutvalue = Lr(n, e, r);
}
function Lr(n, e, r) {
  var t = n.node(r), i = t.parent, a = true, o = e.edge(r, i), u = 0;
  return o || (a = false, o = e.edge(i, r)), u = o.weight, c(e.nodeEdges(r), function(s) {
    var f = s.v === r, d = f ? s.w : s.v;
    if (d !== i) {
      var l = f === a, h = e.edge(s).weight;
      if (u += l ? h : -h, Pu(n, r, d)) {
        var g = n.edge(r, d).cutvalue;
        u += l ? -g : g;
      }
    }
  }), u;
}
function te(n, e) {
  arguments.length < 2 && (e = n.nodes()[0]), Ar(n, {}, 1, e);
}
function Ar(n, e, r, t, i) {
  var a = r, o = n.node(t);
  return e[t] = true, c(n.neighbors(t), function(u) {
    w(e, u) || (r = Ar(n, e, r, u, t));
  }), o.low = a, o.lim = r++, i ? o.parent = i : delete o.parent, r;
}
function Nr(n) {
  return Jn(n.edges(), function(e) {
    return n.edge(e).cutvalue < 0;
  });
}
function Pr(n, e, r) {
  var t = r.v, i = r.w;
  e.hasEdge(t, i) || (t = r.w, i = r.v);
  var a = n.node(t), o = n.node(i), u = a, s = false;
  a.lim > o.lim && (u = o, s = true);
  var f = N(e.edges(), function(d) {
    return s === Me(n, n.node(d.v), u) && s !== Me(n, n.node(d.w), u);
  });
  return jn(f, function(d) {
    return j(e, d);
  });
}
function Cr(n, e, r, t) {
  var i = r.v, a = r.w;
  n.removeEdge(i, a), n.setEdge(t.v, t.w, {}), te(n), re(n, e), Nu(n, e);
}
function Nu(n, e) {
  var r = Jn(n.nodes(), function(i) {
    return !e.node(i).parent;
  }), t = Lu(n, r);
  t = t.slice(1), c(t, function(i) {
    var a = n.node(i).parent, o = e.edge(i, a), u = false;
    o || (o = e.edge(a, i), u = true), e.node(i).rank = e.node(a).rank + (u ? o.minlen : -o.minlen);
  });
}
function Pu(n, e, r) {
  return n.hasEdge(e, r);
}
function Me(n, e, r) {
  return r.low <= e.lim && e.lim <= r.lim;
}
function Cu(n) {
  switch (n.graph().ranker) {
    case "network-simplex":
      Re(n);
      break;
    case "tight-tree":
      Iu(n);
      break;
    case "longest-path":
      $u(n);
      break;
    default:
      Re(n);
  }
}
var $u = ee;
function Iu(n) {
  ee(n), xr(n);
}
function Re(n) {
  B2(n);
}
function Su(n) {
  var e = K(n, "root", {}, "_root"), r = Mu(n), t = R2(P(r)) - 1, i = 2 * t + 1;
  n.graph().nestingRoot = e, c(n.edges(), function(o) {
    n.edge(o).minlen *= i;
  });
  var a = Ru(n) + 1;
  c(n.children(), function(o) {
    $r(n, e, i, a, t, r, o);
  }), n.graph().nodeRankFactor = i;
}
function $r(n, e, r, t, i, a, o) {
  var u = n.children(o);
  if (!u.length) {
    o !== e && n.setEdge(e, o, { weight: 0, minlen: r });
    return;
  }
  var s = $e(n, "_bt"), f = $e(n, "_bb"), d = n.node(o);
  n.setParent(s, o), d.borderTop = s, n.setParent(f, o), d.borderBottom = f, c(u, function(l) {
    $r(n, e, r, t, i, a, l);
    var h = n.node(l), g = h.borderTop ? h.borderTop : l, v = h.borderBottom ? h.borderBottom : l, p = h.borderTop ? t : 2 * t, m = g !== v ? 1 : i - a[o] + 1;
    n.setEdge(s, g, {
      weight: p,
      minlen: m,
      nestingEdge: true
    }), n.setEdge(v, f, {
      weight: p,
      minlen: m,
      nestingEdge: true
    });
  }), n.parent(o) || n.setEdge(e, s, { weight: 0, minlen: i + a[o] });
}
function Mu(n) {
  var e = {};
  function r(t, i) {
    var a = n.children(t);
    a && a.length && c(a, function(o) {
      r(o, i + 1);
    }), e[t] = i;
  }
  return c(n.children(), function(t) {
    r(t, 1);
  }), e;
}
function Ru(n) {
  return tn(
    n.edges(),
    function(e, r) {
      return e + n.edge(r).weight;
    },
    0
  );
}
function Fu(n) {
  var e = n.graph();
  n.removeNode(e.nestingRoot), delete e.nestingRoot, c(n.edges(), function(r) {
    var t = n.edge(r);
    t.nestingEdge && n.removeEdge(r);
  });
}
function Du(n, e, r) {
  var t = {}, i;
  c(r, function(a) {
    for (var o = n.parent(a), u, s; o; ) {
      if (u = n.parent(o), u ? (s = t[u], t[u] = o) : (s = i, i = o), s && s !== o) {
        e.setEdge(s, o);
        return;
      }
      o = u;
    }
  });
}
function Gu(n, e, r) {
  var t = Bu(n), i = new A({ compound: true }).setGraph({ root: t }).setDefaultNodeLabel(function(a) {
    return n.node(a);
  });
  return c(n.nodes(), function(a) {
    var o = n.node(a), u = n.parent(a);
    (o.rank === e || o.minRank <= e && e <= o.maxRank) && (i.setNode(a), i.setParent(a, u || t), c(n[r](a), function(s) {
      var f = s.v === a ? s.w : s.v, d = i.edge(f, a), l = x(d) ? 0 : d.weight;
      i.setEdge(f, a, { weight: n.edge(s).weight + l });
    }), w(o, "minRank") && i.setNode(a, {
      borderLeft: o.borderLeft[e],
      borderRight: o.borderRight[e]
    }));
  }), i;
}
function Bu(n) {
  for (var e; n.hasNode(e = ne("_root")); )
    ;
  return e;
}
function Uu(n, e) {
  for (var r = 0, t = 1; t < e.length; ++t)
    r += Yu(n, e[t - 1], e[t]);
  return r;
}
function Yu(n, e, r) {
  for (var t = Vo(
    r,
    y(r, function(f, d) {
      return d;
    })
  ), i = q(
    y(e, function(f) {
      return an2(
        y(n.outEdges(f), function(d) {
          return { pos: t[d.w], weight: n.edge(d).weight };
        }),
        "pos"
      );
    })
  ), a = 1; a < r.length; )
    a <<= 1;
  var o = 2 * a - 1;
  a -= 1;
  var u = y(new Array(o), function() {
    return 0;
  }), s = 0;
  return c(
    // @ts-expect-error
    i.forEach(function(f) {
      var d = f.pos + a;
      u[d] += f.weight;
      for (var l = 0; d > 0; )
        d % 2 && (l += u[d + 1]), d = d - 1 >> 1, u[d] += f.weight;
      s += f.weight * l;
    })
  ), s;
}
function Hu(n) {
  var e = {}, r = N(n.nodes(), function(u) {
    return !n.children(u).length;
  }), t = R2(
    y(r, function(u) {
      return n.node(u).rank;
    })
  ), i = y(k(t + 1), function() {
    return [];
  });
  function a(u) {
    if (!w(e, u)) {
      e[u] = true;
      var s = n.node(u);
      i[s.rank].push(u), c(n.successors(u), a);
    }
  }
  var o = an2(r, function(u) {
    return n.node(u).rank;
  });
  return c(o, a), i;
}
function ku(n, e) {
  return y(e, function(r) {
    var t = n.inEdges(r);
    if (t.length) {
      var i = tn(
        t,
        function(a, o) {
          var u = n.edge(o), s = n.node(o.v);
          return {
            sum: a.sum + u.weight * s.order,
            weight: a.weight + u.weight
          };
        },
        { sum: 0, weight: 0 }
      );
      return {
        v: r,
        barycenter: i.sum / i.weight,
        weight: i.weight
      };
    } else
      return { v: r };
  });
}
function qu(n, e) {
  var r = {};
  c(n, function(i, a) {
    var o = r[i.v] = {
      indegree: 0,
      in: [],
      out: [],
      vs: [i.v],
      i: a
    };
    x(i.barycenter) || (o.barycenter = i.barycenter, o.weight = i.weight);
  }), c(e.edges(), function(i) {
    var a = r[i.v], o = r[i.w];
    !x(a) && !x(o) && (o.indegree++, a.out.push(r[i.w]));
  });
  var t = N(r, function(i) {
    return !i.indegree;
  });
  return Ku(t);
}
function Ku(n) {
  var e = [];
  function r(a) {
    return function(o) {
      o.merged || (x(o.barycenter) || x(a.barycenter) || o.barycenter >= a.barycenter) && Wu(a, o);
    };
  }
  function t(a) {
    return function(o) {
      o.in.push(a), --o.indegree === 0 && n.push(o);
    };
  }
  for (; n.length; ) {
    var i = n.pop();
    e.push(i), c(i.in.reverse(), r(i)), c(i.out, t(i));
  }
  return y(
    N(e, function(a) {
      return !a.merged;
    }),
    function(a) {
      return gn(a, ["vs", "i", "barycenter", "weight"]);
    }
  );
}
function Wu(n, e) {
  var r = 0, t = 0;
  n.weight && (r += n.barycenter * n.weight, t += n.weight), e.weight && (r += e.barycenter * e.weight, t += e.weight), n.vs = e.vs.concat(n.vs), n.barycenter = r / t, n.weight = t, n.i = Math.min(e.i, n.i), e.merged = true;
}
function Xu(n, e) {
  var r = du(n, function(d) {
    return w(d, "barycenter");
  }), t = r.lhs, i = an2(r.rhs, function(d) {
    return -d.i;
  }), a = [], o = 0, u = 0, s = 0;
  t.sort(Zu(!!e)), s = Fe2(a, i, s), c(t, function(d) {
    s += d.vs.length, a.push(d.vs), o += d.barycenter * d.weight, u += d.weight, s = Fe2(a, i, s);
  });
  var f = { vs: q(a) };
  return u && (f.barycenter = o / u, f.weight = u), f;
}
function Fe2(n, e, r) {
  for (var t; e.length && (t = vn(e)).i <= r; )
    e.pop(), n.push(t.vs), r++;
  return r;
}
function Zu(n) {
  return function(e, r) {
    return e.barycenter < r.barycenter ? -1 : e.barycenter > r.barycenter ? 1 : n ? r.i - e.i : e.i - r.i;
  };
}
function Ir(n, e, r, t) {
  var i = n.children(e), a = n.node(e), o = a ? a.borderLeft : void 0, u = a ? a.borderRight : void 0, s = {};
  o && (i = N(i, function(v) {
    return v !== o && v !== u;
  }));
  var f = ku(n, i);
  c(f, function(v) {
    if (n.children(v.v).length) {
      var p = Ir(n, v.v, r, t);
      s[v.v] = p, w(p, "barycenter") && zu(v, p);
    }
  });
  var d = qu(f, r);
  Vu(d, s);
  var l = Xu(d, t);
  if (o && (l.vs = q([o, l.vs, u]), n.predecessors(o).length)) {
    var h = n.node(n.predecessors(o)[0]), g = n.node(n.predecessors(u)[0]);
    w(l, "barycenter") || (l.barycenter = 0, l.weight = 0), l.barycenter = (l.barycenter * l.weight + h.order + g.order) / (l.weight + 2), l.weight += 2;
  }
  return l;
}
function Vu(n, e) {
  c(n, function(r) {
    r.vs = q(
      r.vs.map(function(t) {
        return e[t] ? e[t].vs : t;
      })
    );
  });
}
function zu(n, e) {
  x(n.barycenter) ? (n.barycenter = e.barycenter, n.weight = e.weight) : (n.barycenter = (n.barycenter * n.weight + e.barycenter * e.weight) / (n.weight + e.weight), n.weight += e.weight);
}
function Ju(n) {
  var e = Er(n), r = De(n, k(1, e + 1), "inEdges"), t = De(n, k(e - 1, -1, -1), "outEdges"), i = Hu(n);
  Ge(n, i);
  for (var a = Number.POSITIVE_INFINITY, o, u = 0, s = 0; s < 4; ++u, ++s) {
    Qu(u % 2 ? r : t, u % 4 >= 2), i = On(n);
    var f = Uu(n, i);
    f < a && (s = 0, o = va(i), a = f);
  }
  Ge(n, o);
}
function De(n, e, r) {
  return y(e, function(t) {
    return Gu(n, t, r);
  });
}
function Qu(n, e) {
  var r = new A();
  c(n, function(t) {
    var i = t.graph().root, a = Ir(t, i, r, e);
    c(a.vs, function(o, u) {
      t.node(o).order = u;
    }), Du(t, r, a.vs);
  });
}
function Ge(n, e) {
  c(e, function(r) {
    c(r, function(t, i) {
      n.node(t).order = i;
    });
  });
}
function ju(n) {
  var e = es(n);
  c(n.graph().dummyChains, function(r) {
    for (var t = n.node(r), i = t.edgeObj, a = ns(n, e, i.v, i.w), o = a.path, u = a.lca, s = 0, f = o[s], d = true; r !== i.w; ) {
      if (t = n.node(r), d) {
        for (; (f = o[s]) !== u && n.node(f).maxRank < t.rank; )
          s++;
        f === u && (d = false);
      }
      if (!d) {
        for (; s < o.length - 1 && n.node(f = o[s + 1]).minRank <= t.rank; )
          s++;
        f = o[s];
      }
      n.setParent(r, f), r = n.successors(r)[0];
    }
  });
}
function ns(n, e, r, t) {
  var i = [], a = [], o = Math.min(e[r].low, e[t].low), u = Math.max(e[r].lim, e[t].lim), s, f;
  s = r;
  do
    s = n.parent(s), i.push(s);
  while (s && (e[s].low > o || u > e[s].lim));
  for (f = s, s = t; (s = n.parent(s)) !== f; )
    a.push(s);
  return { path: i.concat(a.reverse()), lca: f };
}
function es(n) {
  var e = {}, r = 0;
  function t(i) {
    var a = r;
    c(n.children(i), t), e[i] = { low: a, lim: r++ };
  }
  return c(n.children(), t), e;
}
function rs(n, e) {
  var r = {};
  function t(i, a) {
    var o = 0, u = 0, s = i.length, f = vn(a);
    return c(a, function(d, l) {
      var h = is(n, d), g = h ? n.node(h).order : s;
      (h || d === f) && (c(a.slice(u, l + 1), function(v) {
        c(n.predecessors(v), function(p) {
          var m = n.node(p), E = m.order;
          (E < o || g < E) && !(m.dummy && n.node(v).dummy) && Sr(r, p, v);
        });
      }), u = l + 1, o = g);
    }), a;
  }
  return tn(e, t), r;
}
function ts(n, e) {
  var r = {};
  function t(a, o, u, s, f) {
    var d;
    c(k(o, u), function(l) {
      d = a[l], n.node(d).dummy && c(n.predecessors(d), function(h) {
        var g = n.node(h);
        g.dummy && (g.order < s || g.order > f) && Sr(r, h, d);
      });
    });
  }
  function i(a, o) {
    var u = -1, s, f = 0;
    return c(o, function(d, l) {
      if (n.node(d).dummy === "border") {
        var h = n.predecessors(d);
        h.length && (s = n.node(h[0]).order, t(o, f, l, u, s), f = l, u = s);
      }
      t(o, f, o.length, s, a.length);
    }), o;
  }
  return tn(e, i), r;
}
function is(n, e) {
  if (n.node(e).dummy)
    return Jn(n.predecessors(e), function(r) {
      return n.node(r).dummy;
    });
}
function Sr(n, e, r) {
  if (e > r) {
    var t = e;
    e = r, r = t;
  }
  var i = n[e];
  i || (n[e] = i = {}), i[r] = true;
}
function as(n, e, r) {
  if (e > r) {
    var t = e;
    e = r, r = t;
  }
  return w(n[e], r);
}
function os(n, e, r, t) {
  var i = {}, a = {}, o = {};
  return c(e, function(u) {
    c(u, function(s, f) {
      i[s] = s, a[s] = s, o[s] = f;
    });
  }), c(e, function(u) {
    var s = -1;
    c(u, function(f) {
      var d = t(f);
      if (d.length) {
        d = an2(d, function(p) {
          return o[p];
        });
        for (var l = (d.length - 1) / 2, h = Math.floor(l), g = Math.ceil(l); h <= g; ++h) {
          var v = d[h];
          a[f] === f && s < o[v] && !as(r, f, v) && (a[v] = f, a[f] = i[f] = i[v], s = o[v]);
        }
      }
    });
  }), { root: i, align: a };
}
function us(n, e, r, t, i) {
  var a = {}, o = ss(n, e, r, i), u = i ? "borderLeft" : "borderRight";
  function s(l, h) {
    for (var g = o.nodes(), v = g.pop(), p = {}; v; )
      p[v] ? l(v) : (p[v] = true, g.push(v), g = g.concat(h(v))), v = g.pop();
  }
  function f(l) {
    a[l] = o.inEdges(l).reduce(function(h, g) {
      return Math.max(h, a[g.v] + o.edge(g));
    }, 0);
  }
  function d(l) {
    var h = o.outEdges(l).reduce(function(v, p) {
      return Math.min(v, a[p.w] - o.edge(p));
    }, Number.POSITIVE_INFINITY), g = n.node(l);
    h !== Number.POSITIVE_INFINITY && g.borderType !== u && (a[l] = Math.max(a[l], h));
  }
  return s(f, o.predecessors.bind(o)), s(d, o.successors.bind(o)), c(t, function(l) {
    a[l] = a[r[l]];
  }), a;
}
function ss(n, e, r, t) {
  var i = new A(), a = n.graph(), o = hs(a.nodesep, a.edgesep, t);
  return c(e, function(u) {
    var s;
    c(u, function(f) {
      var d = r[f];
      if (i.setNode(d), s) {
        var l = r[s], h = i.edge(l, d);
        i.setEdge(l, d, Math.max(o(n, f, s), h || 0));
      }
      s = f;
    });
  }), i;
}
function fs(n, e) {
  return jn(P(e), function(r) {
    var t = Number.NEGATIVE_INFINITY, i = Number.POSITIVE_INFINITY;
    return bo(r, function(a, o) {
      var u = vs(n, o) / 2;
      t = Math.max(a + u, t), i = Math.min(a - u, i);
    }), t - i;
  });
}
function ds(n, e) {
  var r = P(e), t = Q(r), i = R2(r);
  c(["u", "d"], function(a) {
    c(["l", "r"], function(o) {
      var u = a + o, s = n[u], f;
      if (s !== e) {
        var d = P(s);
        f = o === "l" ? t - Q(d) : i - R2(d), f && (n[u] = Tn(s, function(l) {
          return l + f;
        }));
      }
    });
  });
}
function cs(n, e) {
  return Tn(n.ul, function(r, t) {
    if (e)
      return n[e.toLowerCase()][t];
    var i = an2(y(n, t));
    return (i[1] + i[2]) / 2;
  });
}
function ls(n) {
  var e = On(n), r = Gn(rs(n, e), ts(n, e)), t = {}, i;
  c(["u", "d"], function(o) {
    i = o === "u" ? e : P(e).reverse(), c(["l", "r"], function(u) {
      u === "r" && (i = y(i, function(l) {
        return P(l).reverse();
      }));
      var s = (o === "u" ? n.predecessors : n.successors).bind(n), f = os(n, i, r, s), d = us(n, i, f.root, f.align, u === "r");
      u === "r" && (d = Tn(d, function(l) {
        return -l;
      })), t[o + u] = d;
    });
  });
  var a = fs(n, t);
  return ds(t, a), cs(t, n.graph().align);
}
function hs(n, e, r) {
  return function(t, i, a) {
    var o = t.node(i), u = t.node(a), s = 0, f;
    if (s += o.width / 2, w(o, "labelpos"))
      switch (o.labelpos.toLowerCase()) {
        case "l":
          f = -o.width / 2;
          break;
        case "r":
          f = o.width / 2;
          break;
      }
    if (f && (s += r ? f : -f), f = 0, s += (o.dummy ? e : n) / 2, s += (u.dummy ? e : n) / 2, s += u.width / 2, w(u, "labelpos"))
      switch (u.labelpos.toLowerCase()) {
        case "l":
          f = u.width / 2;
          break;
        case "r":
          f = -u.width / 2;
          break;
      }
    return f && (s += r ? f : -f), f = 0, s;
  };
}
function vs(n, e) {
  return n.node(e).width;
}
function gs(n) {
  n = _r(n), ps(n), c(ls(n), function(e, r) {
    n.node(r).x = e;
  });
}
function ps(n) {
  var e = On(n), r = n.graph().ranksep, t = 0;
  c(e, function(i) {
    var a = R2(
      y(i, function(o) {
        return n.node(o).height;
      })
    );
    c(i, function(o) {
      n.node(o).y = t + a / 2;
    }), t += a + r;
  });
}
function ks(n, e) {
  var r = e && e.debugTiming ? cu : lu;
  r("layout", function() {
    var t = r("  buildLayoutGraph", function() {
      return As(n);
    });
    r("  runLayout", function() {
      ws(t, r);
    }), r("  updateInputGraph", function() {
      bs(n, t);
    });
  });
}
function ws(n, e) {
  e("    makeSpaceForEdgeLabels", function() {
    Ns(n);
  }), e("    removeSelfEdges", function() {
    Ds(n);
  }), e("    acyclic", function() {
    iu(n);
  }), e("    nestingGraph.run", function() {
    Su(n);
  }), e("    rank", function() {
    Cu(_r(n));
  }), e("    injectEdgeLabelProxies", function() {
    Ps(n);
  }), e("    removeEmptyRanks", function() {
    fu(n);
  }), e("    nestingGraph.cleanup", function() {
    Fu(n);
  }), e("    normalizeRanks", function() {
    su(n);
  }), e("    assignRankMinMax", function() {
    Cs(n);
  }), e("    removeEdgeLabelProxies", function() {
    $s(n);
  }), e("    normalize.run", function() {
    bu(n);
  }), e("    parentDummyChains", function() {
    ju(n);
  }), e("    addBorderSegments", function() {
    hu(n);
  }), e("    order", function() {
    Ju(n);
  }), e("    insertSelfEdges", function() {
    Gs(n);
  }), e("    adjustCoordinateSystem", function() {
    vu(n);
  }), e("    position", function() {
    gs(n);
  }), e("    positionSelfEdges", function() {
    Bs(n);
  }), e("    removeBorderNodes", function() {
    Fs(n);
  }), e("    normalize.undo", function() {
    _u(n);
  }), e("    fixupEdgeLabelCoords", function() {
    Ms(n);
  }), e("    undoCoordinateSystem", function() {
    gu(n);
  }), e("    translateGraph", function() {
    Is(n);
  }), e("    assignNodeIntersects", function() {
    Ss(n);
  }), e("    reversePoints", function() {
    Rs(n);
  }), e("    acyclic.undo", function() {
    ou(n);
  });
}
function bs(n, e) {
  c(n.nodes(), function(r) {
    var t = n.node(r), i = e.node(r);
    t && (t.x = i.x, t.y = i.y, e.children(r).length && (t.width = i.width, t.height = i.height));
  }), c(n.edges(), function(r) {
    var t = n.edge(r), i = e.edge(r);
    t.points = i.points, w(i, "x") && (t.x = i.x, t.y = i.y);
  }), n.graph().width = e.graph().width, n.graph().height = e.graph().height;
}
var ms = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"];
var _s = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" };
var Es = ["acyclicer", "ranker", "rankdir", "align"];
var ys = ["width", "height"];
var xs = { width: 0, height: 0 };
var Ts = ["minlen", "weight", "width", "height", "labeloffset"];
var Os = {
  minlen: 1,
  weight: 1,
  width: 0,
  height: 0,
  labeloffset: 10,
  labelpos: "r"
};
var Ls = ["labelpos"];
function As(n) {
  var e = new A({ multigraph: true, compound: true }), r = Sn(n.graph());
  return e.setGraph(
    Gn({}, _s, In(r, ms), gn(r, Es))
  ), c(n.nodes(), function(t) {
    var i = Sn(n.node(t));
    e.setNode(t, so(In(i, ys), xs)), e.setParent(t, n.parent(t));
  }), c(n.edges(), function(t) {
    var i = Sn(n.edge(t));
    e.setEdge(
      t,
      Gn({}, Os, In(i, Ts), gn(i, Ls))
    );
  }), e;
}
function Ns(n) {
  var e = n.graph();
  e.ranksep /= 2, c(n.edges(), function(r) {
    var t = n.edge(r);
    t.minlen *= 2, t.labelpos.toLowerCase() !== "c" && (e.rankdir === "TB" || e.rankdir === "BT" ? t.width += t.labeloffset : t.height += t.labeloffset);
  });
}
function Ps(n) {
  c(n.edges(), function(e) {
    var r = n.edge(e);
    if (r.width && r.height) {
      var t = n.node(e.v), i = n.node(e.w), a = { rank: (i.rank - t.rank) / 2 + t.rank, e };
      K(n, "edge-proxy", a, "_ep");
    }
  });
}
function Cs(n) {
  var e = 0;
  c(n.nodes(), function(r) {
    var t = n.node(r);
    t.borderTop && (t.minRank = n.node(t.borderTop).rank, t.maxRank = n.node(t.borderBottom).rank, e = R2(e, t.maxRank));
  }), n.graph().maxRank = e;
}
function $s(n) {
  c(n.nodes(), function(e) {
    var r = n.node(e);
    r.dummy === "edge-proxy" && (n.edge(r.e).labelRank = r.rank, n.removeNode(e));
  });
}
function Is(n) {
  var e = Number.POSITIVE_INFINITY, r = 0, t = Number.POSITIVE_INFINITY, i = 0, a = n.graph(), o = a.marginx || 0, u = a.marginy || 0;
  function s(f) {
    var d = f.x, l = f.y, h = f.width, g = f.height;
    e = Math.min(e, d - h / 2), r = Math.max(r, d + h / 2), t = Math.min(t, l - g / 2), i = Math.max(i, l + g / 2);
  }
  c(n.nodes(), function(f) {
    s(n.node(f));
  }), c(n.edges(), function(f) {
    var d = n.edge(f);
    w(d, "x") && s(d);
  }), e -= o, t -= u, c(n.nodes(), function(f) {
    var d = n.node(f);
    d.x -= e, d.y -= t;
  }), c(n.edges(), function(f) {
    var d = n.edge(f);
    c(d.points, function(l) {
      l.x -= e, l.y -= t;
    }), w(d, "x") && (d.x -= e), w(d, "y") && (d.y -= t);
  }), a.width = r - e + o, a.height = i - t + u;
}
function Ss(n) {
  c(n.edges(), function(e) {
    var r = n.edge(e), t = n.node(e.v), i = n.node(e.w), a, o;
    r.points ? (a = r.points[0], o = r.points[r.points.length - 1]) : (r.points = [], a = i, o = t), r.points.unshift(Ce2(t, a)), r.points.push(Ce2(i, o));
  });
}
function Ms(n) {
  c(n.edges(), function(e) {
    var r = n.edge(e);
    if (w(r, "x"))
      switch ((r.labelpos === "l" || r.labelpos === "r") && (r.width -= r.labeloffset), r.labelpos) {
        case "l":
          r.x -= r.width / 2 + r.labeloffset;
          break;
        case "r":
          r.x += r.width / 2 + r.labeloffset;
          break;
      }
  });
}
function Rs(n) {
  c(n.edges(), function(e) {
    var r = n.edge(e);
    r.reversed && r.points.reverse();
  });
}
function Fs(n) {
  c(n.nodes(), function(e) {
    if (n.children(e).length) {
      var r = n.node(e), t = n.node(r.borderTop), i = n.node(r.borderBottom), a = n.node(vn(r.borderLeft)), o = n.node(vn(r.borderRight));
      r.width = Math.abs(o.x - a.x), r.height = Math.abs(i.y - t.y), r.x = a.x + r.width / 2, r.y = t.y + r.height / 2;
    }
  }), c(n.nodes(), function(e) {
    n.node(e).dummy === "border" && n.removeNode(e);
  });
}
function Ds(n) {
  c(n.edges(), function(e) {
    if (e.v === e.w) {
      var r = n.node(e.v);
      r.selfEdges || (r.selfEdges = []), r.selfEdges.push({ e, label: n.edge(e) }), n.removeEdge(e);
    }
  });
}
function Gs(n) {
  var e = On(n);
  c(e, function(r) {
    var t = 0;
    c(r, function(i, a) {
      var o = n.node(i);
      o.order = a + t, c(o.selfEdges, function(u) {
        K(
          n,
          "selfedge",
          {
            width: u.label.width,
            height: u.label.height,
            rank: o.rank,
            order: a + ++t,
            e: u.e,
            label: u.label
          },
          "_se"
        );
      }), delete o.selfEdges;
    });
  });
}
function Bs(n) {
  c(n.nodes(), function(e) {
    var r = n.node(e);
    if (r.dummy === "selfedge") {
      var t = n.node(r.e.v), i = t.x + t.width / 2, a = t.y, o = r.x - i, u = t.height / 2;
      n.setEdge(r.e, r.label), n.removeNode(e), r.label.points = [
        { x: i + 2 * o / 3, y: a - u },
        { x: i + 5 * o / 6, y: a - u },
        { x: i + o, y: a },
        { x: i + 5 * o / 6, y: a + u },
        { x: i + 2 * o / 3, y: a + u }
      ], r.label.x = r.x, r.label.y = r.y;
    }
  });
}
function In(n, e) {
  return Tn(gn(n, e), Number);
}
function Sn(n) {
  var e = {};
  return c(n, function(r, t) {
    e[t.toLowerCase()] = r;
  }), e;
}

export {
  dn,
  so,
  c,
  y,
  w,
  x,
  gn,
  k,
  ne,
  A,
  ks
};
//# sourceMappingURL=chunk-4YVXMPIA.js.map
