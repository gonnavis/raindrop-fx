(() => {
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };

  // ../../dist/index.js
  var require_dist = __commonJS((exports, module) => {
    var Qa = Object.create;
    var tr = Object.defineProperty;
    var $a = Object.getPrototypeOf;
    var Za = Object.prototype.hasOwnProperty;
    var Ja = Object.getOwnPropertyNames;
    var Yi = Object.getOwnPropertyDescriptor;
    var Ka = (e) => tr(e, "__esModule", {value: true});
    var B = (e, t) => () => (t || (t = {exports: {}}, e(t.exports, t)), t.exports);
    var eo = (e, t, r) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of Ja(t))
          !Za.call(e, i) && i !== "default" && tr(e, i, {get: () => t[i], enumerable: !(r = Yi(t, i)) || r.enumerable});
      return e;
    };
    var $t = (e) => e && e.__esModule ? e : eo(Ka(tr(e != null ? Qa($a(e)) : {}, "default", {value: e, enumerable: true})), e);
    var ie = (e, t, r, i) => {
      for (var n = i > 1 ? void 0 : i ? Yi(t, r) : t, s = e.length - 1, a; s >= 0; s--)
        (a = e[s]) && (n = (i ? a(t, r, n) : a(n)) || n);
      return i && n && tr(t, r, n), n;
    };
    var Wi = (() => {
      for (var e = new Uint8Array(128), t = 0; t < 64; t++)
        e[t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t * 4 - 205] = t;
      return (r) => {
        for (var i = r.length, n = new Uint8Array((i - (r[i - 1] == "=") - (r[i - 2] == "=")) * 3 / 4 | 0), s = 0, a = 0; s < i; ) {
          var o = e[r.charCodeAt(s++)], l = e[r.charCodeAt(s++)], c = e[r.charCodeAt(s++)], h = e[r.charCodeAt(s++)];
          n[a++] = o << 2 | l >> 4, n[a++] = l << 4 | c >> 2, n[a++] = c << 6 | h;
        }
        return n;
      };
    })();
    var Ye = B((Ge) => {
      "use strict";
      Object.defineProperty(Ge, "__esModule", {value: true});
      Ge.setMatrixArrayType = to;
      Ge.toRadian = ro;
      Ge.equals = io;
      Ge.RANDOM = Ge.ARRAY_TYPE = Ge.EPSILON = void 0;
      var ki = 1e-6;
      Ge.EPSILON = ki;
      var Hi = typeof Float32Array != "undefined" ? Float32Array : Array;
      Ge.ARRAY_TYPE = Hi;
      var no = Math.random;
      Ge.RANDOM = no;
      function to(e) {
        Ge.ARRAY_TYPE = Hi = e;
      }
      var so = Math.PI / 180;
      function ro(e) {
        return e * so;
      }
      function io(e, t) {
        return Math.abs(e - t) <= ki * Math.max(1, Math.abs(e), Math.abs(t));
      }
      Math.hypot || (Math.hypot = function() {
        for (var e = 0, t = arguments.length; t--; )
          e += arguments[t] * arguments[t];
        return Math.sqrt(e);
      });
    });
    var $i = B((j) => {
      "use strict";
      function rr(e) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? rr = function(r) {
          return typeof r;
        } : rr = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, rr(e);
      }
      Object.defineProperty(j, "__esModule", {value: true});
      j.create = ao;
      j.clone = oo;
      j.copy = lo;
      j.identity = co;
      j.fromValues = ho;
      j.set = uo;
      j.transpose = fo;
      j.invert = vo;
      j.adjoint = po;
      j.determinant = mo;
      j.multiply = ji;
      j.rotate = yo;
      j.scale = go;
      j.fromRotation = Mo;
      j.fromScaling = xo;
      j.str = _o;
      j.frob = bo;
      j.LDU = Ro;
      j.add = wo;
      j.subtract = Xi;
      j.exactEquals = To;
      j.equals = Ao;
      j.multiplyScalar = Po;
      j.multiplyScalarAndAdd = Eo;
      j.sub = j.mul = void 0;
      var lt = So(Ye());
      function Qi() {
        if (typeof WeakMap != "function")
          return null;
        var e = new WeakMap();
        return Qi = function() {
          return e;
        }, e;
      }
      function So(e) {
        if (e && e.__esModule)
          return e;
        if (e === null || rr(e) !== "object" && typeof e != "function")
          return {default: e};
        var t = Qi();
        if (t && t.has(e))
          return t.get(e);
        var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
            s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n];
          }
        return r.default = e, t && t.set(e, r), r;
      }
      function ao() {
        var e = new lt.ARRAY_TYPE(4);
        return lt.ARRAY_TYPE != Float32Array && (e[1] = 0, e[2] = 0), e[0] = 1, e[3] = 1, e;
      }
      function oo(e) {
        var t = new lt.ARRAY_TYPE(4);
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
      }
      function lo(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
      }
      function co(e) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e;
      }
      function ho(e, t, r, i) {
        var n = new lt.ARRAY_TYPE(4);
        return n[0] = e, n[1] = t, n[2] = r, n[3] = i, n;
      }
      function uo(e, t, r, i, n) {
        return e[0] = t, e[1] = r, e[2] = i, e[3] = n, e;
      }
      function fo(e, t) {
        if (e === t) {
          var r = t[1];
          e[1] = t[2], e[2] = r;
        } else
          e[0] = t[0], e[1] = t[2], e[2] = t[1], e[3] = t[3];
        return e;
      }
      function vo(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[3], a = r * s - n * i;
        return a ? (a = 1 / a, e[0] = s * a, e[1] = -i * a, e[2] = -n * a, e[3] = r * a, e) : null;
      }
      function po(e, t) {
        var r = t[0];
        return e[0] = t[3], e[1] = -t[1], e[2] = -t[2], e[3] = r, e;
      }
      function mo(e) {
        return e[0] * e[3] - e[2] * e[1];
      }
      function ji(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = r[0], l = r[1], c = r[2], h = r[3];
        return e[0] = i * o + s * l, e[1] = n * o + a * l, e[2] = i * c + s * h, e[3] = n * c + a * h, e;
      }
      function yo(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = Math.sin(r), l = Math.cos(r);
        return e[0] = i * l + s * o, e[1] = n * l + a * o, e[2] = i * -o + s * l, e[3] = n * -o + a * l, e;
      }
      function go(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = r[0], l = r[1];
        return e[0] = i * o, e[1] = n * o, e[2] = s * l, e[3] = a * l, e;
      }
      function Mo(e, t) {
        var r = Math.sin(t), i = Math.cos(t);
        return e[0] = i, e[1] = r, e[2] = -r, e[3] = i, e;
      }
      function xo(e, t) {
        return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e;
      }
      function _o(e) {
        return "mat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
      }
      function bo(e) {
        return Math.hypot(e[0], e[1], e[2], e[3]);
      }
      function Ro(e, t, r, i) {
        return e[2] = i[2] / i[0], r[0] = i[0], r[1] = i[1], r[3] = i[3] - e[2] * r[1], [e, t, r];
      }
      function wo(e, t, r) {
        return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e;
      }
      function Xi(e, t, r) {
        return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e;
      }
      function To(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
      }
      function Ao(e, t) {
        var r = e[0], i = e[1], n = e[2], s = e[3], a = t[0], o = t[1], l = t[2], c = t[3];
        return Math.abs(r - a) <= lt.EPSILON * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(i - o) <= lt.EPSILON * Math.max(1, Math.abs(i), Math.abs(o)) && Math.abs(n - l) <= lt.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(s - c) <= lt.EPSILON * Math.max(1, Math.abs(s), Math.abs(c));
      }
      function Po(e, t, r) {
        return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e;
      }
      function Eo(e, t, r, i) {
        return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e[2] = t[2] + r[2] * i, e[3] = t[3] + r[3] * i, e;
      }
      var Oo = ji;
      j.mul = Oo;
      var Do = Xi;
      j.sub = Do;
    });
    var en = B(($) => {
      "use strict";
      function ir(e) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ir = function(r) {
          return typeof r;
        } : ir = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, ir(e);
      }
      Object.defineProperty($, "__esModule", {value: true});
      $.create = Bo;
      $.clone = Io;
      $.copy = Co;
      $.identity = Lo;
      $.fromValues = zo;
      $.set = qo;
      $.invert = Go;
      $.determinant = Uo;
      $.multiply = Zi;
      $.rotate = No;
      $.scale = Fo;
      $.translate = Vo;
      $.fromRotation = Yo;
      $.fromScaling = Wo;
      $.fromTranslation = ko;
      $.str = Ho;
      $.frob = jo;
      $.add = Xo;
      $.subtract = Ji;
      $.multiplyScalar = Qo;
      $.multiplyScalarAndAdd = $o;
      $.exactEquals = Zo;
      $.equals = Jo;
      $.sub = $.mul = void 0;
      var He = Ko(Ye());
      function Ki() {
        if (typeof WeakMap != "function")
          return null;
        var e = new WeakMap();
        return Ki = function() {
          return e;
        }, e;
      }
      function Ko(e) {
        if (e && e.__esModule)
          return e;
        if (e === null || ir(e) !== "object" && typeof e != "function")
          return {default: e};
        var t = Ki();
        if (t && t.has(e))
          return t.get(e);
        var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
            s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n];
          }
        return r.default = e, t && t.set(e, r), r;
      }
      function Bo() {
        var e = new He.ARRAY_TYPE(6);
        return He.ARRAY_TYPE != Float32Array && (e[1] = 0, e[2] = 0, e[4] = 0, e[5] = 0), e[0] = 1, e[3] = 1, e;
      }
      function Io(e) {
        var t = new He.ARRAY_TYPE(6);
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t;
      }
      function Co(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e;
      }
      function Lo(e) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e;
      }
      function zo(e, t, r, i, n, s) {
        var a = new He.ARRAY_TYPE(6);
        return a[0] = e, a[1] = t, a[2] = r, a[3] = i, a[4] = n, a[5] = s, a;
      }
      function qo(e, t, r, i, n, s, a) {
        return e[0] = t, e[1] = r, e[2] = i, e[3] = n, e[4] = s, e[5] = a, e;
      }
      function Go(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[3], a = t[4], o = t[5], l = r * s - i * n;
        return l ? (l = 1 / l, e[0] = s * l, e[1] = -i * l, e[2] = -n * l, e[3] = r * l, e[4] = (n * o - s * a) * l, e[5] = (i * a - r * o) * l, e) : null;
      }
      function Uo(e) {
        return e[0] * e[3] - e[1] * e[2];
      }
      function Zi(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = t[4], l = t[5], c = r[0], h = r[1], u = r[2], d = r[3], f = r[4], m = r[5];
        return e[0] = i * c + s * h, e[1] = n * c + a * h, e[2] = i * u + s * d, e[3] = n * u + a * d, e[4] = i * f + s * m + o, e[5] = n * f + a * m + l, e;
      }
      function No(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = t[4], l = t[5], c = Math.sin(r), h = Math.cos(r);
        return e[0] = i * h + s * c, e[1] = n * h + a * c, e[2] = i * -c + s * h, e[3] = n * -c + a * h, e[4] = o, e[5] = l, e;
      }
      function Fo(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = t[4], l = t[5], c = r[0], h = r[1];
        return e[0] = i * c, e[1] = n * c, e[2] = s * h, e[3] = a * h, e[4] = o, e[5] = l, e;
      }
      function Vo(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = t[4], l = t[5], c = r[0], h = r[1];
        return e[0] = i, e[1] = n, e[2] = s, e[3] = a, e[4] = i * c + s * h + o, e[5] = n * c + a * h + l, e;
      }
      function Yo(e, t) {
        var r = Math.sin(t), i = Math.cos(t);
        return e[0] = i, e[1] = r, e[2] = -r, e[3] = i, e[4] = 0, e[5] = 0, e;
      }
      function Wo(e, t) {
        return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = t[1], e[4] = 0, e[5] = 0, e;
      }
      function ko(e, t) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = t[0], e[5] = t[1], e;
      }
      function Ho(e) {
        return "mat2d(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ")";
      }
      function jo(e) {
        return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], 1);
      }
      function Xo(e, t, r) {
        return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e[4] = t[4] + r[4], e[5] = t[5] + r[5], e;
      }
      function Ji(e, t, r) {
        return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e[4] = t[4] - r[4], e[5] = t[5] - r[5], e;
      }
      function Qo(e, t, r) {
        return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * r, e[5] = t[5] * r, e;
      }
      function $o(e, t, r, i) {
        return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e[2] = t[2] + r[2] * i, e[3] = t[3] + r[3] * i, e[4] = t[4] + r[4] * i, e[5] = t[5] + r[5] * i, e;
      }
      function Zo(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5];
      }
      function Jo(e, t) {
        var r = e[0], i = e[1], n = e[2], s = e[3], a = e[4], o = e[5], l = t[0], c = t[1], h = t[2], u = t[3], d = t[4], f = t[5];
        return Math.abs(r - l) <= He.EPSILON * Math.max(1, Math.abs(r), Math.abs(l)) && Math.abs(i - c) <= He.EPSILON * Math.max(1, Math.abs(i), Math.abs(c)) && Math.abs(n - h) <= He.EPSILON * Math.max(1, Math.abs(n), Math.abs(h)) && Math.abs(s - u) <= He.EPSILON * Math.max(1, Math.abs(s), Math.abs(u)) && Math.abs(a - d) <= He.EPSILON * Math.max(1, Math.abs(a), Math.abs(d)) && Math.abs(o - f) <= He.EPSILON * Math.max(1, Math.abs(o), Math.abs(f));
      }
      var el = Zi;
      $.mul = el;
      var tl = Ji;
      $.sub = tl;
    });
    var Qr = B((F) => {
      "use strict";
      function nr(e) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? nr = function(r) {
          return typeof r;
        } : nr = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, nr(e);
      }
      Object.defineProperty(F, "__esModule", {value: true});
      F.create = rl;
      F.fromMat4 = il;
      F.clone = nl;
      F.copy = sl;
      F.fromValues = al;
      F.set = ol;
      F.identity = ll;
      F.transpose = cl;
      F.invert = hl;
      F.adjoint = ul;
      F.determinant = fl;
      F.multiply = tn;
      F.translate = dl;
      F.rotate = vl;
      F.scale = pl;
      F.fromTranslation = ml;
      F.fromRotation = yl;
      F.fromScaling = gl;
      F.fromMat2d = Ml;
      F.fromQuat = xl;
      F.normalFromMat4 = _l;
      F.projection = bl;
      F.str = Rl;
      F.frob = wl;
      F.add = Tl;
      F.subtract = rn;
      F.multiplyScalar = Al;
      F.multiplyScalarAndAdd = Pl;
      F.exactEquals = El;
      F.equals = Sl;
      F.sub = F.mul = void 0;
      var Be = Ol(Ye());
      function nn() {
        if (typeof WeakMap != "function")
          return null;
        var e = new WeakMap();
        return nn = function() {
          return e;
        }, e;
      }
      function Ol(e) {
        if (e && e.__esModule)
          return e;
        if (e === null || nr(e) !== "object" && typeof e != "function")
          return {default: e};
        var t = nn();
        if (t && t.has(e))
          return t.get(e);
        var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
            s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n];
          }
        return r.default = e, t && t.set(e, r), r;
      }
      function rl() {
        var e = new Be.ARRAY_TYPE(9);
        return Be.ARRAY_TYPE != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[0] = 1, e[4] = 1, e[8] = 1, e;
      }
      function il(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10], e;
      }
      function nl(e) {
        var t = new Be.ARRAY_TYPE(9);
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t;
      }
      function sl(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
      }
      function al(e, t, r, i, n, s, a, o, l) {
        var c = new Be.ARRAY_TYPE(9);
        return c[0] = e, c[1] = t, c[2] = r, c[3] = i, c[4] = n, c[5] = s, c[6] = a, c[7] = o, c[8] = l, c;
      }
      function ol(e, t, r, i, n, s, a, o, l, c) {
        return e[0] = t, e[1] = r, e[2] = i, e[3] = n, e[4] = s, e[5] = a, e[6] = o, e[7] = l, e[8] = c, e;
      }
      function ll(e) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e;
      }
      function cl(e, t) {
        if (e === t) {
          var r = t[1], i = t[2], n = t[5];
          e[1] = t[3], e[2] = t[6], e[3] = r, e[5] = t[7], e[6] = i, e[7] = n;
        } else
          e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8];
        return e;
      }
      function hl(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], u = h * a - o * c, d = -h * s + o * l, f = c * s - a * l, m = r * u + i * d + n * f;
        return m ? (m = 1 / m, e[0] = u * m, e[1] = (-h * i + n * c) * m, e[2] = (o * i - n * a) * m, e[3] = d * m, e[4] = (h * r - n * l) * m, e[5] = (-o * r + n * s) * m, e[6] = f * m, e[7] = (-c * r + i * l) * m, e[8] = (a * r - i * s) * m, e) : null;
      }
      function ul(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8];
        return e[0] = a * h - o * c, e[1] = n * c - i * h, e[2] = i * o - n * a, e[3] = o * l - s * h, e[4] = r * h - n * l, e[5] = n * s - r * o, e[6] = s * c - a * l, e[7] = i * l - r * c, e[8] = r * a - i * s, e;
      }
      function fl(e) {
        var t = e[0], r = e[1], i = e[2], n = e[3], s = e[4], a = e[5], o = e[6], l = e[7], c = e[8];
        return t * (c * s - a * l) + r * (-c * n + a * o) + i * (l * n - s * o);
      }
      function tn(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = t[4], l = t[5], c = t[6], h = t[7], u = t[8], d = r[0], f = r[1], m = r[2], g = r[3], v = r[4], x = r[5], A = r[6], w = r[7], P = r[8];
        return e[0] = d * i + f * a + m * c, e[1] = d * n + f * o + m * h, e[2] = d * s + f * l + m * u, e[3] = g * i + v * a + x * c, e[4] = g * n + v * o + x * h, e[5] = g * s + v * l + x * u, e[6] = A * i + w * a + P * c, e[7] = A * n + w * o + P * h, e[8] = A * s + w * l + P * u, e;
      }
      function dl(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = t[4], l = t[5], c = t[6], h = t[7], u = t[8], d = r[0], f = r[1];
        return e[0] = i, e[1] = n, e[2] = s, e[3] = a, e[4] = o, e[5] = l, e[6] = d * i + f * a + c, e[7] = d * n + f * o + h, e[8] = d * s + f * l + u, e;
      }
      function vl(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = t[4], l = t[5], c = t[6], h = t[7], u = t[8], d = Math.sin(r), f = Math.cos(r);
        return e[0] = f * i + d * a, e[1] = f * n + d * o, e[2] = f * s + d * l, e[3] = f * a - d * i, e[4] = f * o - d * n, e[5] = f * l - d * s, e[6] = c, e[7] = h, e[8] = u, e;
      }
      function pl(e, t, r) {
        var i = r[0], n = r[1];
        return e[0] = i * t[0], e[1] = i * t[1], e[2] = i * t[2], e[3] = n * t[3], e[4] = n * t[4], e[5] = n * t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e;
      }
      function ml(e, t) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 1, e[5] = 0, e[6] = t[0], e[7] = t[1], e[8] = 1, e;
      }
      function yl(e, t) {
        var r = Math.sin(t), i = Math.cos(t);
        return e[0] = i, e[1] = r, e[2] = 0, e[3] = -r, e[4] = i, e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e;
      }
      function gl(e, t) {
        return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = t[1], e[5] = 0, e[6] = 0, e[7] = 0, e[8] = 1, e;
      }
      function Ml(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = 0, e[3] = t[2], e[4] = t[3], e[5] = 0, e[6] = t[4], e[7] = t[5], e[8] = 1, e;
      }
      function xl(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[3], a = r + r, o = i + i, l = n + n, c = r * a, h = i * a, u = i * o, d = n * a, f = n * o, m = n * l, g = s * a, v = s * o, x = s * l;
        return e[0] = 1 - u - m, e[3] = h - x, e[6] = d + v, e[1] = h + x, e[4] = 1 - c - m, e[7] = f - g, e[2] = d - v, e[5] = f + g, e[8] = 1 - c - u, e;
      }
      function _l(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], u = t[9], d = t[10], f = t[11], m = t[12], g = t[13], v = t[14], x = t[15], A = r * o - i * a, w = r * l - n * a, P = r * c - s * a, D = i * l - n * o, O = i * c - s * o, ee = n * c - s * l, Z = h * g - u * m, J = h * v - d * m, Q = h * x - f * m, re = u * v - d * g, H = u * x - f * g, te = d * x - f * v, q = A * te - w * H + P * re + D * Q - O * J + ee * Z;
        return q ? (q = 1 / q, e[0] = (o * te - l * H + c * re) * q, e[1] = (l * Q - a * te - c * J) * q, e[2] = (a * H - o * Q + c * Z) * q, e[3] = (n * H - i * te - s * re) * q, e[4] = (r * te - n * Q + s * J) * q, e[5] = (i * Q - r * H - s * Z) * q, e[6] = (g * ee - v * O + x * D) * q, e[7] = (v * P - m * ee - x * w) * q, e[8] = (m * O - g * P + x * A) * q, e) : null;
      }
      function bl(e, t, r) {
        return e[0] = 2 / t, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = -2 / r, e[5] = 0, e[6] = -1, e[7] = 1, e[8] = 1, e;
      }
      function Rl(e) {
        return "mat3(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ")";
      }
      function wl(e) {
        return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]);
      }
      function Tl(e, t, r) {
        return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e[4] = t[4] + r[4], e[5] = t[5] + r[5], e[6] = t[6] + r[6], e[7] = t[7] + r[7], e[8] = t[8] + r[8], e;
      }
      function rn(e, t, r) {
        return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e[4] = t[4] - r[4], e[5] = t[5] - r[5], e[6] = t[6] - r[6], e[7] = t[7] - r[7], e[8] = t[8] - r[8], e;
      }
      function Al(e, t, r) {
        return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * r, e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * r, e;
      }
      function Pl(e, t, r, i) {
        return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e[2] = t[2] + r[2] * i, e[3] = t[3] + r[3] * i, e[4] = t[4] + r[4] * i, e[5] = t[5] + r[5] * i, e[6] = t[6] + r[6] * i, e[7] = t[7] + r[7] * i, e[8] = t[8] + r[8] * i, e;
      }
      function El(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8];
      }
      function Sl(e, t) {
        var r = e[0], i = e[1], n = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = t[0], d = t[1], f = t[2], m = t[3], g = t[4], v = t[5], x = t[6], A = t[7], w = t[8];
        return Math.abs(r - u) <= Be.EPSILON * Math.max(1, Math.abs(r), Math.abs(u)) && Math.abs(i - d) <= Be.EPSILON * Math.max(1, Math.abs(i), Math.abs(d)) && Math.abs(n - f) <= Be.EPSILON * Math.max(1, Math.abs(n), Math.abs(f)) && Math.abs(s - m) <= Be.EPSILON * Math.max(1, Math.abs(s), Math.abs(m)) && Math.abs(a - g) <= Be.EPSILON * Math.max(1, Math.abs(a), Math.abs(g)) && Math.abs(o - v) <= Be.EPSILON * Math.max(1, Math.abs(o), Math.abs(v)) && Math.abs(l - x) <= Be.EPSILON * Math.max(1, Math.abs(l), Math.abs(x)) && Math.abs(c - A) <= Be.EPSILON * Math.max(1, Math.abs(c), Math.abs(A)) && Math.abs(h - w) <= Be.EPSILON * Math.max(1, Math.abs(h), Math.abs(w));
      }
      var Dl = tn;
      F.mul = Dl;
      var Bl = rn;
      F.sub = Bl;
    });
    var $r = B((I) => {
      "use strict";
      function sr(e) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? sr = function(r) {
          return typeof r;
        } : sr = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, sr(e);
      }
      Object.defineProperty(I, "__esModule", {value: true});
      I.create = Il;
      I.clone = Cl;
      I.copy = Ll;
      I.fromValues = zl;
      I.set = ql;
      I.identity = sn;
      I.transpose = Gl;
      I.invert = Ul;
      I.adjoint = Nl;
      I.determinant = Fl;
      I.multiply = an;
      I.translate = Vl;
      I.scale = Yl;
      I.rotate = Wl;
      I.rotateX = kl;
      I.rotateY = Hl;
      I.rotateZ = jl;
      I.fromTranslation = Xl;
      I.fromScaling = Ql;
      I.fromRotation = $l;
      I.fromXRotation = Zl;
      I.fromYRotation = Jl;
      I.fromZRotation = Kl;
      I.fromRotationTranslation = on;
      I.fromQuat2 = ec;
      I.getTranslation = tc;
      I.getScaling = ln;
      I.getRotation = rc;
      I.fromRotationTranslationScale = ic;
      I.fromRotationTranslationScaleOrigin = nc;
      I.fromQuat = sc;
      I.frustum = ac;
      I.perspective = oc;
      I.perspectiveFromFieldOfView = lc;
      I.ortho = cc;
      I.lookAt = hc;
      I.targetTo = uc;
      I.str = fc;
      I.frob = dc;
      I.add = vc;
      I.subtract = cn;
      I.multiplyScalar = pc;
      I.multiplyScalarAndAdd = mc;
      I.exactEquals = yc;
      I.equals = gc;
      I.sub = I.mul = void 0;
      var K = Mc(Ye());
      function hn() {
        if (typeof WeakMap != "function")
          return null;
        var e = new WeakMap();
        return hn = function() {
          return e;
        }, e;
      }
      function Mc(e) {
        if (e && e.__esModule)
          return e;
        if (e === null || sr(e) !== "object" && typeof e != "function")
          return {default: e};
        var t = hn();
        if (t && t.has(e))
          return t.get(e);
        var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
            s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n];
          }
        return r.default = e, t && t.set(e, r), r;
      }
      function Il() {
        var e = new K.ARRAY_TYPE(16);
        return K.ARRAY_TYPE != Float32Array && (e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0), e[0] = 1, e[5] = 1, e[10] = 1, e[15] = 1, e;
      }
      function Cl(e) {
        var t = new K.ARRAY_TYPE(16);
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t[9] = e[9], t[10] = e[10], t[11] = e[11], t[12] = e[12], t[13] = e[13], t[14] = e[14], t[15] = e[15], t;
      }
      function Ll(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
      }
      function zl(e, t, r, i, n, s, a, o, l, c, h, u, d, f, m, g) {
        var v = new K.ARRAY_TYPE(16);
        return v[0] = e, v[1] = t, v[2] = r, v[3] = i, v[4] = n, v[5] = s, v[6] = a, v[7] = o, v[8] = l, v[9] = c, v[10] = h, v[11] = u, v[12] = d, v[13] = f, v[14] = m, v[15] = g, v;
      }
      function ql(e, t, r, i, n, s, a, o, l, c, h, u, d, f, m, g, v) {
        return e[0] = t, e[1] = r, e[2] = i, e[3] = n, e[4] = s, e[5] = a, e[6] = o, e[7] = l, e[8] = c, e[9] = h, e[10] = u, e[11] = d, e[12] = f, e[13] = m, e[14] = g, e[15] = v, e;
      }
      function sn(e) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
      }
      function Gl(e, t) {
        if (e === t) {
          var r = t[1], i = t[2], n = t[3], s = t[6], a = t[7], o = t[11];
          e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = r, e[6] = t[9], e[7] = t[13], e[8] = i, e[9] = s, e[11] = t[14], e[12] = n, e[13] = a, e[14] = o;
        } else
          e[0] = t[0], e[1] = t[4], e[2] = t[8], e[3] = t[12], e[4] = t[1], e[5] = t[5], e[6] = t[9], e[7] = t[13], e[8] = t[2], e[9] = t[6], e[10] = t[10], e[11] = t[14], e[12] = t[3], e[13] = t[7], e[14] = t[11], e[15] = t[15];
        return e;
      }
      function Ul(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], u = t[9], d = t[10], f = t[11], m = t[12], g = t[13], v = t[14], x = t[15], A = r * o - i * a, w = r * l - n * a, P = r * c - s * a, D = i * l - n * o, O = i * c - s * o, ee = n * c - s * l, Z = h * g - u * m, J = h * v - d * m, Q = h * x - f * m, re = u * v - d * g, H = u * x - f * g, te = d * x - f * v, q = A * te - w * H + P * re + D * Q - O * J + ee * Z;
        return q ? (q = 1 / q, e[0] = (o * te - l * H + c * re) * q, e[1] = (n * H - i * te - s * re) * q, e[2] = (g * ee - v * O + x * D) * q, e[3] = (d * O - u * ee - f * D) * q, e[4] = (l * Q - a * te - c * J) * q, e[5] = (r * te - n * Q + s * J) * q, e[6] = (v * P - m * ee - x * w) * q, e[7] = (h * ee - d * P + f * w) * q, e[8] = (a * H - o * Q + c * Z) * q, e[9] = (i * Q - r * H - s * Z) * q, e[10] = (m * O - g * P + x * A) * q, e[11] = (u * P - h * O - f * A) * q, e[12] = (o * J - a * re - l * Z) * q, e[13] = (r * re - i * J + n * Z) * q, e[14] = (g * w - m * D - v * A) * q, e[15] = (h * D - u * w + d * A) * q, e) : null;
      }
      function Nl(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[3], a = t[4], o = t[5], l = t[6], c = t[7], h = t[8], u = t[9], d = t[10], f = t[11], m = t[12], g = t[13], v = t[14], x = t[15];
        return e[0] = o * (d * x - f * v) - u * (l * x - c * v) + g * (l * f - c * d), e[1] = -(i * (d * x - f * v) - u * (n * x - s * v) + g * (n * f - s * d)), e[2] = i * (l * x - c * v) - o * (n * x - s * v) + g * (n * c - s * l), e[3] = -(i * (l * f - c * d) - o * (n * f - s * d) + u * (n * c - s * l)), e[4] = -(a * (d * x - f * v) - h * (l * x - c * v) + m * (l * f - c * d)), e[5] = r * (d * x - f * v) - h * (n * x - s * v) + m * (n * f - s * d), e[6] = -(r * (l * x - c * v) - a * (n * x - s * v) + m * (n * c - s * l)), e[7] = r * (l * f - c * d) - a * (n * f - s * d) + h * (n * c - s * l), e[8] = a * (u * x - f * g) - h * (o * x - c * g) + m * (o * f - c * u), e[9] = -(r * (u * x - f * g) - h * (i * x - s * g) + m * (i * f - s * u)), e[10] = r * (o * x - c * g) - a * (i * x - s * g) + m * (i * c - s * o), e[11] = -(r * (o * f - c * u) - a * (i * f - s * u) + h * (i * c - s * o)), e[12] = -(a * (u * v - d * g) - h * (o * v - l * g) + m * (o * d - l * u)), e[13] = r * (u * v - d * g) - h * (i * v - n * g) + m * (i * d - n * u), e[14] = -(r * (o * v - l * g) - a * (i * v - n * g) + m * (i * l - n * o)), e[15] = r * (o * d - l * u) - a * (i * d - n * u) + h * (i * l - n * o), e;
      }
      function Fl(e) {
        var t = e[0], r = e[1], i = e[2], n = e[3], s = e[4], a = e[5], o = e[6], l = e[7], c = e[8], h = e[9], u = e[10], d = e[11], f = e[12], m = e[13], g = e[14], v = e[15], x = t * a - r * s, A = t * o - i * s, w = t * l - n * s, P = r * o - i * a, D = r * l - n * a, O = i * l - n * o, ee = c * m - h * f, Z = c * g - u * f, J = c * v - d * f, Q = h * g - u * m, re = h * v - d * m, H = u * v - d * g;
        return x * H - A * re + w * Q + P * J - D * Z + O * ee;
      }
      function an(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = t[4], l = t[5], c = t[6], h = t[7], u = t[8], d = t[9], f = t[10], m = t[11], g = t[12], v = t[13], x = t[14], A = t[15], w = r[0], P = r[1], D = r[2], O = r[3];
        return e[0] = w * i + P * o + D * u + O * g, e[1] = w * n + P * l + D * d + O * v, e[2] = w * s + P * c + D * f + O * x, e[3] = w * a + P * h + D * m + O * A, w = r[4], P = r[5], D = r[6], O = r[7], e[4] = w * i + P * o + D * u + O * g, e[5] = w * n + P * l + D * d + O * v, e[6] = w * s + P * c + D * f + O * x, e[7] = w * a + P * h + D * m + O * A, w = r[8], P = r[9], D = r[10], O = r[11], e[8] = w * i + P * o + D * u + O * g, e[9] = w * n + P * l + D * d + O * v, e[10] = w * s + P * c + D * f + O * x, e[11] = w * a + P * h + D * m + O * A, w = r[12], P = r[13], D = r[14], O = r[15], e[12] = w * i + P * o + D * u + O * g, e[13] = w * n + P * l + D * d + O * v, e[14] = w * s + P * c + D * f + O * x, e[15] = w * a + P * h + D * m + O * A, e;
      }
      function Vl(e, t, r) {
        var i = r[0], n = r[1], s = r[2], a, o, l, c, h, u, d, f, m, g, v, x;
        return t === e ? (e[12] = t[0] * i + t[4] * n + t[8] * s + t[12], e[13] = t[1] * i + t[5] * n + t[9] * s + t[13], e[14] = t[2] * i + t[6] * n + t[10] * s + t[14], e[15] = t[3] * i + t[7] * n + t[11] * s + t[15]) : (a = t[0], o = t[1], l = t[2], c = t[3], h = t[4], u = t[5], d = t[6], f = t[7], m = t[8], g = t[9], v = t[10], x = t[11], e[0] = a, e[1] = o, e[2] = l, e[3] = c, e[4] = h, e[5] = u, e[6] = d, e[7] = f, e[8] = m, e[9] = g, e[10] = v, e[11] = x, e[12] = a * i + h * n + m * s + t[12], e[13] = o * i + u * n + g * s + t[13], e[14] = l * i + d * n + v * s + t[14], e[15] = c * i + f * n + x * s + t[15]), e;
      }
      function Yl(e, t, r) {
        var i = r[0], n = r[1], s = r[2];
        return e[0] = t[0] * i, e[1] = t[1] * i, e[2] = t[2] * i, e[3] = t[3] * i, e[4] = t[4] * n, e[5] = t[5] * n, e[6] = t[6] * n, e[7] = t[7] * n, e[8] = t[8] * s, e[9] = t[9] * s, e[10] = t[10] * s, e[11] = t[11] * s, e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e;
      }
      function Wl(e, t, r, i) {
        var n = i[0], s = i[1], a = i[2], o = Math.hypot(n, s, a), l, c, h, u, d, f, m, g, v, x, A, w, P, D, O, ee, Z, J, Q, re, H, te, q, Ae;
        return o < K.EPSILON ? null : (o = 1 / o, n *= o, s *= o, a *= o, l = Math.sin(r), c = Math.cos(r), h = 1 - c, u = t[0], d = t[1], f = t[2], m = t[3], g = t[4], v = t[5], x = t[6], A = t[7], w = t[8], P = t[9], D = t[10], O = t[11], ee = n * n * h + c, Z = s * n * h + a * l, J = a * n * h - s * l, Q = n * s * h - a * l, re = s * s * h + c, H = a * s * h + n * l, te = n * a * h + s * l, q = s * a * h - n * l, Ae = a * a * h + c, e[0] = u * ee + g * Z + w * J, e[1] = d * ee + v * Z + P * J, e[2] = f * ee + x * Z + D * J, e[3] = m * ee + A * Z + O * J, e[4] = u * Q + g * re + w * H, e[5] = d * Q + v * re + P * H, e[6] = f * Q + x * re + D * H, e[7] = m * Q + A * re + O * H, e[8] = u * te + g * q + w * Ae, e[9] = d * te + v * q + P * Ae, e[10] = f * te + x * q + D * Ae, e[11] = m * te + A * q + O * Ae, t !== e && (e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e);
      }
      function kl(e, t, r) {
        var i = Math.sin(r), n = Math.cos(r), s = t[4], a = t[5], o = t[6], l = t[7], c = t[8], h = t[9], u = t[10], d = t[11];
        return t !== e && (e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[4] = s * n + c * i, e[5] = a * n + h * i, e[6] = o * n + u * i, e[7] = l * n + d * i, e[8] = c * n - s * i, e[9] = h * n - a * i, e[10] = u * n - o * i, e[11] = d * n - l * i, e;
      }
      function Hl(e, t, r) {
        var i = Math.sin(r), n = Math.cos(r), s = t[0], a = t[1], o = t[2], l = t[3], c = t[8], h = t[9], u = t[10], d = t[11];
        return t !== e && (e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = s * n - c * i, e[1] = a * n - h * i, e[2] = o * n - u * i, e[3] = l * n - d * i, e[8] = s * i + c * n, e[9] = a * i + h * n, e[10] = o * i + u * n, e[11] = l * i + d * n, e;
      }
      function jl(e, t, r) {
        var i = Math.sin(r), n = Math.cos(r), s = t[0], a = t[1], o = t[2], l = t[3], c = t[4], h = t[5], u = t[6], d = t[7];
        return t !== e && (e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15]), e[0] = s * n + c * i, e[1] = a * n + h * i, e[2] = o * n + u * i, e[3] = l * n + d * i, e[4] = c * n - s * i, e[5] = h * n - a * i, e[6] = u * n - o * i, e[7] = d * n - l * i, e;
      }
      function Xl(e, t) {
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = t[0], e[13] = t[1], e[14] = t[2], e[15] = 1, e;
      }
      function Ql(e, t) {
        return e[0] = t[0], e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = t[1], e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = t[2], e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
      }
      function $l(e, t, r) {
        var i = r[0], n = r[1], s = r[2], a = Math.hypot(i, n, s), o, l, c;
        return a < K.EPSILON ? null : (a = 1 / a, i *= a, n *= a, s *= a, o = Math.sin(t), l = Math.cos(t), c = 1 - l, e[0] = i * i * c + l, e[1] = n * i * c + s * o, e[2] = s * i * c - n * o, e[3] = 0, e[4] = i * n * c - s * o, e[5] = n * n * c + l, e[6] = s * n * c + i * o, e[7] = 0, e[8] = i * s * c + n * o, e[9] = n * s * c - i * o, e[10] = s * s * c + l, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e);
      }
      function Zl(e, t) {
        var r = Math.sin(t), i = Math.cos(t);
        return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = i, e[6] = r, e[7] = 0, e[8] = 0, e[9] = -r, e[10] = i, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
      }
      function Jl(e, t) {
        var r = Math.sin(t), i = Math.cos(t);
        return e[0] = i, e[1] = 0, e[2] = -r, e[3] = 0, e[4] = 0, e[5] = 1, e[6] = 0, e[7] = 0, e[8] = r, e[9] = 0, e[10] = i, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
      }
      function Kl(e, t) {
        var r = Math.sin(t), i = Math.cos(t);
        return e[0] = i, e[1] = r, e[2] = 0, e[3] = 0, e[4] = -r, e[5] = i, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 1, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
      }
      function on(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = i + i, l = n + n, c = s + s, h = i * o, u = i * l, d = i * c, f = n * l, m = n * c, g = s * c, v = a * o, x = a * l, A = a * c;
        return e[0] = 1 - (f + g), e[1] = u + A, e[2] = d - x, e[3] = 0, e[4] = u - A, e[5] = 1 - (h + g), e[6] = m + v, e[7] = 0, e[8] = d + x, e[9] = m - v, e[10] = 1 - (h + f), e[11] = 0, e[12] = r[0], e[13] = r[1], e[14] = r[2], e[15] = 1, e;
      }
      function ec(e, t) {
        var r = new K.ARRAY_TYPE(3), i = -t[0], n = -t[1], s = -t[2], a = t[3], o = t[4], l = t[5], c = t[6], h = t[7], u = i * i + n * n + s * s + a * a;
        return u > 0 ? (r[0] = (o * a + h * i + l * s - c * n) * 2 / u, r[1] = (l * a + h * n + c * i - o * s) * 2 / u, r[2] = (c * a + h * s + o * n - l * i) * 2 / u) : (r[0] = (o * a + h * i + l * s - c * n) * 2, r[1] = (l * a + h * n + c * i - o * s) * 2, r[2] = (c * a + h * s + o * n - l * i) * 2), on(e, t, r), e;
      }
      function tc(e, t) {
        return e[0] = t[12], e[1] = t[13], e[2] = t[14], e;
      }
      function ln(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[4], a = t[5], o = t[6], l = t[8], c = t[9], h = t[10];
        return e[0] = Math.hypot(r, i, n), e[1] = Math.hypot(s, a, o), e[2] = Math.hypot(l, c, h), e;
      }
      function rc(e, t) {
        var r = new K.ARRAY_TYPE(3);
        ln(r, t);
        var i = 1 / r[0], n = 1 / r[1], s = 1 / r[2], a = t[0] * i, o = t[1] * n, l = t[2] * s, c = t[4] * i, h = t[5] * n, u = t[6] * s, d = t[8] * i, f = t[9] * n, m = t[10] * s, g = a + h + m, v = 0;
        return g > 0 ? (v = Math.sqrt(g + 1) * 2, e[3] = 0.25 * v, e[0] = (u - f) / v, e[1] = (d - l) / v, e[2] = (o - c) / v) : a > h && a > m ? (v = Math.sqrt(1 + a - h - m) * 2, e[3] = (u - f) / v, e[0] = 0.25 * v, e[1] = (o + c) / v, e[2] = (d + l) / v) : h > m ? (v = Math.sqrt(1 + h - a - m) * 2, e[3] = (d - l) / v, e[0] = (o + c) / v, e[1] = 0.25 * v, e[2] = (u + f) / v) : (v = Math.sqrt(1 + m - a - h) * 2, e[3] = (o - c) / v, e[0] = (d + l) / v, e[1] = (u + f) / v, e[2] = 0.25 * v), e;
      }
      function ic(e, t, r, i) {
        var n = t[0], s = t[1], a = t[2], o = t[3], l = n + n, c = s + s, h = a + a, u = n * l, d = n * c, f = n * h, m = s * c, g = s * h, v = a * h, x = o * l, A = o * c, w = o * h, P = i[0], D = i[1], O = i[2];
        return e[0] = (1 - (m + v)) * P, e[1] = (d + w) * P, e[2] = (f - A) * P, e[3] = 0, e[4] = (d - w) * D, e[5] = (1 - (u + v)) * D, e[6] = (g + x) * D, e[7] = 0, e[8] = (f + A) * O, e[9] = (g - x) * O, e[10] = (1 - (u + m)) * O, e[11] = 0, e[12] = r[0], e[13] = r[1], e[14] = r[2], e[15] = 1, e;
      }
      function nc(e, t, r, i, n) {
        var s = t[0], a = t[1], o = t[2], l = t[3], c = s + s, h = a + a, u = o + o, d = s * c, f = s * h, m = s * u, g = a * h, v = a * u, x = o * u, A = l * c, w = l * h, P = l * u, D = i[0], O = i[1], ee = i[2], Z = n[0], J = n[1], Q = n[2], re = (1 - (g + x)) * D, H = (f + P) * D, te = (m - w) * D, q = (f - P) * O, Ae = (1 - (d + x)) * O, st = (v + A) * O, at = (m + w) * ee, Xt = (v - A) * ee, Qt = (1 - (d + g)) * ee;
        return e[0] = re, e[1] = H, e[2] = te, e[3] = 0, e[4] = q, e[5] = Ae, e[6] = st, e[7] = 0, e[8] = at, e[9] = Xt, e[10] = Qt, e[11] = 0, e[12] = r[0] + Z - (re * Z + q * J + at * Q), e[13] = r[1] + J - (H * Z + Ae * J + Xt * Q), e[14] = r[2] + Q - (te * Z + st * J + Qt * Q), e[15] = 1, e;
      }
      function sc(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[3], a = r + r, o = i + i, l = n + n, c = r * a, h = i * a, u = i * o, d = n * a, f = n * o, m = n * l, g = s * a, v = s * o, x = s * l;
        return e[0] = 1 - u - m, e[1] = h + x, e[2] = d - v, e[3] = 0, e[4] = h - x, e[5] = 1 - c - m, e[6] = f + g, e[7] = 0, e[8] = d + v, e[9] = f - g, e[10] = 1 - c - u, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, e;
      }
      function ac(e, t, r, i, n, s, a) {
        var o = 1 / (r - t), l = 1 / (n - i), c = 1 / (s - a);
        return e[0] = s * 2 * o, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = s * 2 * l, e[6] = 0, e[7] = 0, e[8] = (r + t) * o, e[9] = (n + i) * l, e[10] = (a + s) * c, e[11] = -1, e[12] = 0, e[13] = 0, e[14] = a * s * 2 * c, e[15] = 0, e;
      }
      function oc(e, t, r, i, n) {
        var s = 1 / Math.tan(t / 2), a;
        return e[0] = s / r, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = s, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[11] = -1, e[12] = 0, e[13] = 0, e[15] = 0, n != null && n !== Infinity ? (a = 1 / (i - n), e[10] = (n + i) * a, e[14] = 2 * n * i * a) : (e[10] = -1, e[14] = -2 * i), e;
      }
      function lc(e, t, r, i) {
        var n = Math.tan(t.upDegrees * Math.PI / 180), s = Math.tan(t.downDegrees * Math.PI / 180), a = Math.tan(t.leftDegrees * Math.PI / 180), o = Math.tan(t.rightDegrees * Math.PI / 180), l = 2 / (a + o), c = 2 / (n + s);
        return e[0] = l, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = c, e[6] = 0, e[7] = 0, e[8] = -((a - o) * l * 0.5), e[9] = (n - s) * c * 0.5, e[10] = i / (r - i), e[11] = -1, e[12] = 0, e[13] = 0, e[14] = i * r / (r - i), e[15] = 0, e;
      }
      function cc(e, t, r, i, n, s, a) {
        var o = 1 / (t - r), l = 1 / (i - n), c = 1 / (s - a);
        return e[0] = -2 * o, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e[5] = -2 * l, e[6] = 0, e[7] = 0, e[8] = 0, e[9] = 0, e[10] = 2 * c, e[11] = 0, e[12] = (t + r) * o, e[13] = (n + i) * l, e[14] = (a + s) * c, e[15] = 1, e;
      }
      function hc(e, t, r, i) {
        var n, s, a, o, l, c, h, u, d, f, m = t[0], g = t[1], v = t[2], x = i[0], A = i[1], w = i[2], P = r[0], D = r[1], O = r[2];
        return Math.abs(m - P) < K.EPSILON && Math.abs(g - D) < K.EPSILON && Math.abs(v - O) < K.EPSILON ? sn(e) : (h = m - P, u = g - D, d = v - O, f = 1 / Math.hypot(h, u, d), h *= f, u *= f, d *= f, n = A * d - w * u, s = w * h - x * d, a = x * u - A * h, f = Math.hypot(n, s, a), f ? (f = 1 / f, n *= f, s *= f, a *= f) : (n = 0, s = 0, a = 0), o = u * a - d * s, l = d * n - h * a, c = h * s - u * n, f = Math.hypot(o, l, c), f ? (f = 1 / f, o *= f, l *= f, c *= f) : (o = 0, l = 0, c = 0), e[0] = n, e[1] = o, e[2] = h, e[3] = 0, e[4] = s, e[5] = l, e[6] = u, e[7] = 0, e[8] = a, e[9] = c, e[10] = d, e[11] = 0, e[12] = -(n * m + s * g + a * v), e[13] = -(o * m + l * g + c * v), e[14] = -(h * m + u * g + d * v), e[15] = 1, e);
      }
      function uc(e, t, r, i) {
        var n = t[0], s = t[1], a = t[2], o = i[0], l = i[1], c = i[2], h = n - r[0], u = s - r[1], d = a - r[2], f = h * h + u * u + d * d;
        f > 0 && (f = 1 / Math.sqrt(f), h *= f, u *= f, d *= f);
        var m = l * d - c * u, g = c * h - o * d, v = o * u - l * h;
        return f = m * m + g * g + v * v, f > 0 && (f = 1 / Math.sqrt(f), m *= f, g *= f, v *= f), e[0] = m, e[1] = g, e[2] = v, e[3] = 0, e[4] = u * v - d * g, e[5] = d * m - h * v, e[6] = h * g - u * m, e[7] = 0, e[8] = h, e[9] = u, e[10] = d, e[11] = 0, e[12] = n, e[13] = s, e[14] = a, e[15] = 1, e;
      }
      function fc(e) {
        return "mat4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ", " + e[8] + ", " + e[9] + ", " + e[10] + ", " + e[11] + ", " + e[12] + ", " + e[13] + ", " + e[14] + ", " + e[15] + ")";
      }
      function dc(e) {
        return Math.hypot(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]);
      }
      function vc(e, t, r) {
        return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e[4] = t[4] + r[4], e[5] = t[5] + r[5], e[6] = t[6] + r[6], e[7] = t[7] + r[7], e[8] = t[8] + r[8], e[9] = t[9] + r[9], e[10] = t[10] + r[10], e[11] = t[11] + r[11], e[12] = t[12] + r[12], e[13] = t[13] + r[13], e[14] = t[14] + r[14], e[15] = t[15] + r[15], e;
      }
      function cn(e, t, r) {
        return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e[4] = t[4] - r[4], e[5] = t[5] - r[5], e[6] = t[6] - r[6], e[7] = t[7] - r[7], e[8] = t[8] - r[8], e[9] = t[9] - r[9], e[10] = t[10] - r[10], e[11] = t[11] - r[11], e[12] = t[12] - r[12], e[13] = t[13] - r[13], e[14] = t[14] - r[14], e[15] = t[15] - r[15], e;
      }
      function pc(e, t, r) {
        return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * r, e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e[8] = t[8] * r, e[9] = t[9] * r, e[10] = t[10] * r, e[11] = t[11] * r, e[12] = t[12] * r, e[13] = t[13] * r, e[14] = t[14] * r, e[15] = t[15] * r, e;
      }
      function mc(e, t, r, i) {
        return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e[2] = t[2] + r[2] * i, e[3] = t[3] + r[3] * i, e[4] = t[4] + r[4] * i, e[5] = t[5] + r[5] * i, e[6] = t[6] + r[6] * i, e[7] = t[7] + r[7] * i, e[8] = t[8] + r[8] * i, e[9] = t[9] + r[9] * i, e[10] = t[10] + r[10] * i, e[11] = t[11] + r[11] * i, e[12] = t[12] + r[12] * i, e[13] = t[13] + r[13] * i, e[14] = t[14] + r[14] * i, e[15] = t[15] + r[15] * i, e;
      }
      function yc(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7] && e[8] === t[8] && e[9] === t[9] && e[10] === t[10] && e[11] === t[11] && e[12] === t[12] && e[13] === t[13] && e[14] === t[14] && e[15] === t[15];
      }
      function gc(e, t) {
        var r = e[0], i = e[1], n = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], f = e[11], m = e[12], g = e[13], v = e[14], x = e[15], A = t[0], w = t[1], P = t[2], D = t[3], O = t[4], ee = t[5], Z = t[6], J = t[7], Q = t[8], re = t[9], H = t[10], te = t[11], q = t[12], Ae = t[13], st = t[14], at = t[15];
        return Math.abs(r - A) <= K.EPSILON * Math.max(1, Math.abs(r), Math.abs(A)) && Math.abs(i - w) <= K.EPSILON * Math.max(1, Math.abs(i), Math.abs(w)) && Math.abs(n - P) <= K.EPSILON * Math.max(1, Math.abs(n), Math.abs(P)) && Math.abs(s - D) <= K.EPSILON * Math.max(1, Math.abs(s), Math.abs(D)) && Math.abs(a - O) <= K.EPSILON * Math.max(1, Math.abs(a), Math.abs(O)) && Math.abs(o - ee) <= K.EPSILON * Math.max(1, Math.abs(o), Math.abs(ee)) && Math.abs(l - Z) <= K.EPSILON * Math.max(1, Math.abs(l), Math.abs(Z)) && Math.abs(c - J) <= K.EPSILON * Math.max(1, Math.abs(c), Math.abs(J)) && Math.abs(h - Q) <= K.EPSILON * Math.max(1, Math.abs(h), Math.abs(Q)) && Math.abs(u - re) <= K.EPSILON * Math.max(1, Math.abs(u), Math.abs(re)) && Math.abs(d - H) <= K.EPSILON * Math.max(1, Math.abs(d), Math.abs(H)) && Math.abs(f - te) <= K.EPSILON * Math.max(1, Math.abs(f), Math.abs(te)) && Math.abs(m - q) <= K.EPSILON * Math.max(1, Math.abs(m), Math.abs(q)) && Math.abs(g - Ae) <= K.EPSILON * Math.max(1, Math.abs(g), Math.abs(Ae)) && Math.abs(v - st) <= K.EPSILON * Math.max(1, Math.abs(v), Math.abs(st)) && Math.abs(x - at) <= K.EPSILON * Math.max(1, Math.abs(x), Math.abs(at));
      }
      var xc = an;
      I.mul = xc;
      var _c = cn;
      I.sub = _c;
    });
    var Zr = B((T) => {
      "use strict";
      function ar(e) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ar = function(r) {
          return typeof r;
        } : ar = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, ar(e);
      }
      Object.defineProperty(T, "__esModule", {value: true});
      T.create = un;
      T.clone = bc;
      T.length = fn;
      T.fromValues = Rc;
      T.copy = wc;
      T.set = Tc;
      T.add = Ac;
      T.subtract = dn;
      T.multiply = vn;
      T.divide = pn;
      T.ceil = Pc;
      T.floor = Ec;
      T.min = Sc;
      T.max = Oc;
      T.round = Dc;
      T.scale = Bc;
      T.scaleAndAdd = Ic;
      T.distance = mn;
      T.squaredDistance = yn;
      T.squaredLength = gn;
      T.negate = Cc;
      T.inverse = Lc;
      T.normalize = zc;
      T.dot = Mn;
      T.cross = qc;
      T.lerp = Gc;
      T.hermite = Uc;
      T.bezier = Nc;
      T.random = Fc;
      T.transformMat4 = Vc;
      T.transformMat3 = Yc;
      T.transformQuat = Wc;
      T.rotateX = kc;
      T.rotateY = Hc;
      T.rotateZ = jc;
      T.angle = Xc;
      T.zero = Qc;
      T.str = $c;
      T.exactEquals = Zc;
      T.equals = Jc;
      T.forEach = T.sqrLen = T.len = T.sqrDist = T.dist = T.div = T.mul = T.sub = void 0;
      var Ze = Kc(Ye());
      function xn() {
        if (typeof WeakMap != "function")
          return null;
        var e = new WeakMap();
        return xn = function() {
          return e;
        }, e;
      }
      function Kc(e) {
        if (e && e.__esModule)
          return e;
        if (e === null || ar(e) !== "object" && typeof e != "function")
          return {default: e};
        var t = xn();
        if (t && t.has(e))
          return t.get(e);
        var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
            s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n];
          }
        return r.default = e, t && t.set(e, r), r;
      }
      function un() {
        var e = new Ze.ARRAY_TYPE(3);
        return Ze.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e;
      }
      function bc(e) {
        var t = new Ze.ARRAY_TYPE(3);
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t;
      }
      function fn(e) {
        var t = e[0], r = e[1], i = e[2];
        return Math.hypot(t, r, i);
      }
      function Rc(e, t, r) {
        var i = new Ze.ARRAY_TYPE(3);
        return i[0] = e, i[1] = t, i[2] = r, i;
      }
      function wc(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e;
      }
      function Tc(e, t, r, i) {
        return e[0] = t, e[1] = r, e[2] = i, e;
      }
      function Ac(e, t, r) {
        return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e;
      }
      function dn(e, t, r) {
        return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e;
      }
      function vn(e, t, r) {
        return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e[2] = t[2] * r[2], e;
      }
      function pn(e, t, r) {
        return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e[2] = t[2] / r[2], e;
      }
      function Pc(e, t) {
        return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e;
      }
      function Ec(e, t) {
        return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e;
      }
      function Sc(e, t, r) {
        return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e[2] = Math.min(t[2], r[2]), e;
      }
      function Oc(e, t, r) {
        return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e[2] = Math.max(t[2], r[2]), e;
      }
      function Dc(e, t) {
        return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e;
      }
      function Bc(e, t, r) {
        return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e;
      }
      function Ic(e, t, r, i) {
        return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e[2] = t[2] + r[2] * i, e;
      }
      function mn(e, t) {
        var r = t[0] - e[0], i = t[1] - e[1], n = t[2] - e[2];
        return Math.hypot(r, i, n);
      }
      function yn(e, t) {
        var r = t[0] - e[0], i = t[1] - e[1], n = t[2] - e[2];
        return r * r + i * i + n * n;
      }
      function gn(e) {
        var t = e[0], r = e[1], i = e[2];
        return t * t + r * r + i * i;
      }
      function Cc(e, t) {
        return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e;
      }
      function Lc(e, t) {
        return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e;
      }
      function zc(e, t) {
        var r = t[0], i = t[1], n = t[2], s = r * r + i * i + n * n;
        return s > 0 && (s = 1 / Math.sqrt(s)), e[0] = t[0] * s, e[1] = t[1] * s, e[2] = t[2] * s, e;
      }
      function Mn(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
      }
      function qc(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = r[0], o = r[1], l = r[2];
        return e[0] = n * l - s * o, e[1] = s * a - i * l, e[2] = i * o - n * a, e;
      }
      function Gc(e, t, r, i) {
        var n = t[0], s = t[1], a = t[2];
        return e[0] = n + i * (r[0] - n), e[1] = s + i * (r[1] - s), e[2] = a + i * (r[2] - a), e;
      }
      function Uc(e, t, r, i, n, s) {
        var a = s * s, o = a * (2 * s - 3) + 1, l = a * (s - 2) + s, c = a * (s - 1), h = a * (3 - 2 * s);
        return e[0] = t[0] * o + r[0] * l + i[0] * c + n[0] * h, e[1] = t[1] * o + r[1] * l + i[1] * c + n[1] * h, e[2] = t[2] * o + r[2] * l + i[2] * c + n[2] * h, e;
      }
      function Nc(e, t, r, i, n, s) {
        var a = 1 - s, o = a * a, l = s * s, c = o * a, h = 3 * s * o, u = 3 * l * a, d = l * s;
        return e[0] = t[0] * c + r[0] * h + i[0] * u + n[0] * d, e[1] = t[1] * c + r[1] * h + i[1] * u + n[1] * d, e[2] = t[2] * c + r[2] * h + i[2] * u + n[2] * d, e;
      }
      function Fc(e, t) {
        t = t || 1;
        var r = Ze.RANDOM() * 2 * Math.PI, i = Ze.RANDOM() * 2 - 1, n = Math.sqrt(1 - i * i) * t;
        return e[0] = Math.cos(r) * n, e[1] = Math.sin(r) * n, e[2] = i * t, e;
      }
      function Vc(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = r[3] * i + r[7] * n + r[11] * s + r[15];
        return a = a || 1, e[0] = (r[0] * i + r[4] * n + r[8] * s + r[12]) / a, e[1] = (r[1] * i + r[5] * n + r[9] * s + r[13]) / a, e[2] = (r[2] * i + r[6] * n + r[10] * s + r[14]) / a, e;
      }
      function Yc(e, t, r) {
        var i = t[0], n = t[1], s = t[2];
        return e[0] = i * r[0] + n * r[3] + s * r[6], e[1] = i * r[1] + n * r[4] + s * r[7], e[2] = i * r[2] + n * r[5] + s * r[8], e;
      }
      function Wc(e, t, r) {
        var i = r[0], n = r[1], s = r[2], a = r[3], o = t[0], l = t[1], c = t[2], h = n * c - s * l, u = s * o - i * c, d = i * l - n * o, f = n * d - s * u, m = s * h - i * d, g = i * u - n * h, v = a * 2;
        return h *= v, u *= v, d *= v, f *= 2, m *= 2, g *= 2, e[0] = o + h + f, e[1] = l + u + m, e[2] = c + d + g, e;
      }
      function kc(e, t, r, i) {
        var n = [], s = [];
        return n[0] = t[0] - r[0], n[1] = t[1] - r[1], n[2] = t[2] - r[2], s[0] = n[0], s[1] = n[1] * Math.cos(i) - n[2] * Math.sin(i), s[2] = n[1] * Math.sin(i) + n[2] * Math.cos(i), e[0] = s[0] + r[0], e[1] = s[1] + r[1], e[2] = s[2] + r[2], e;
      }
      function Hc(e, t, r, i) {
        var n = [], s = [];
        return n[0] = t[0] - r[0], n[1] = t[1] - r[1], n[2] = t[2] - r[2], s[0] = n[2] * Math.sin(i) + n[0] * Math.cos(i), s[1] = n[1], s[2] = n[2] * Math.cos(i) - n[0] * Math.sin(i), e[0] = s[0] + r[0], e[1] = s[1] + r[1], e[2] = s[2] + r[2], e;
      }
      function jc(e, t, r, i) {
        var n = [], s = [];
        return n[0] = t[0] - r[0], n[1] = t[1] - r[1], n[2] = t[2] - r[2], s[0] = n[0] * Math.cos(i) - n[1] * Math.sin(i), s[1] = n[0] * Math.sin(i) + n[1] * Math.cos(i), s[2] = n[2], e[0] = s[0] + r[0], e[1] = s[1] + r[1], e[2] = s[2] + r[2], e;
      }
      function Xc(e, t) {
        var r = e[0], i = e[1], n = e[2], s = t[0], a = t[1], o = t[2], l = Math.sqrt(r * r + i * i + n * n), c = Math.sqrt(s * s + a * a + o * o), h = l * c, u = h && Mn(e, t) / h;
        return Math.acos(Math.min(Math.max(u, -1), 1));
      }
      function Qc(e) {
        return e[0] = 0, e[1] = 0, e[2] = 0, e;
      }
      function $c(e) {
        return "vec3(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
      }
      function Zc(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
      }
      function Jc(e, t) {
        var r = e[0], i = e[1], n = e[2], s = t[0], a = t[1], o = t[2];
        return Math.abs(r - s) <= Ze.EPSILON * Math.max(1, Math.abs(r), Math.abs(s)) && Math.abs(i - a) <= Ze.EPSILON * Math.max(1, Math.abs(i), Math.abs(a)) && Math.abs(n - o) <= Ze.EPSILON * Math.max(1, Math.abs(n), Math.abs(o));
      }
      var eh = dn;
      T.sub = eh;
      var th = vn;
      T.mul = th;
      var rh = pn;
      T.div = rh;
      var ih = mn;
      T.dist = ih;
      var nh = yn;
      T.sqrDist = nh;
      var sh = fn;
      T.len = sh;
      var ah = gn;
      T.sqrLen = ah;
      var oh = function() {
        var e = un();
        return function(t, r, i, n, s, a) {
          var o, l;
          for (r || (r = 3), i || (i = 0), n ? l = Math.min(n * r + i, t.length) : l = t.length, o = i; o < l; o += r)
            e[0] = t[o], e[1] = t[o + 1], e[2] = t[o + 2], s(e, e, a), t[o] = e[0], t[o + 1] = e[1], t[o + 2] = e[2];
          return t;
        };
      }();
      T.forEach = oh;
    });
    var Jr = B((C) => {
      "use strict";
      function or(e) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? or = function(r) {
          return typeof r;
        } : or = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, or(e);
      }
      Object.defineProperty(C, "__esModule", {value: true});
      C.create = _n;
      C.clone = lh;
      C.fromValues = ch;
      C.copy = hh;
      C.set = uh;
      C.add = fh;
      C.subtract = bn;
      C.multiply = Rn;
      C.divide = wn;
      C.ceil = dh;
      C.floor = vh;
      C.min = ph;
      C.max = mh;
      C.round = yh;
      C.scale = gh;
      C.scaleAndAdd = Mh;
      C.distance = Tn;
      C.squaredDistance = An;
      C.length = Pn;
      C.squaredLength = En;
      C.negate = xh;
      C.inverse = _h;
      C.normalize = bh;
      C.dot = Rh;
      C.cross = wh;
      C.lerp = Th;
      C.random = Ah;
      C.transformMat4 = Ph;
      C.transformQuat = Eh;
      C.zero = Sh;
      C.str = Oh;
      C.exactEquals = Dh;
      C.equals = Bh;
      C.forEach = C.sqrLen = C.len = C.sqrDist = C.dist = C.div = C.mul = C.sub = void 0;
      var Ue = Ih(Ye());
      function Sn() {
        if (typeof WeakMap != "function")
          return null;
        var e = new WeakMap();
        return Sn = function() {
          return e;
        }, e;
      }
      function Ih(e) {
        if (e && e.__esModule)
          return e;
        if (e === null || or(e) !== "object" && typeof e != "function")
          return {default: e};
        var t = Sn();
        if (t && t.has(e))
          return t.get(e);
        var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
            s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n];
          }
        return r.default = e, t && t.set(e, r), r;
      }
      function _n() {
        var e = new Ue.ARRAY_TYPE(4);
        return Ue.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0), e;
      }
      function lh(e) {
        var t = new Ue.ARRAY_TYPE(4);
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
      }
      function ch(e, t, r, i) {
        var n = new Ue.ARRAY_TYPE(4);
        return n[0] = e, n[1] = t, n[2] = r, n[3] = i, n;
      }
      function hh(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
      }
      function uh(e, t, r, i, n) {
        return e[0] = t, e[1] = r, e[2] = i, e[3] = n, e;
      }
      function fh(e, t, r) {
        return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e;
      }
      function bn(e, t, r) {
        return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e[2] = t[2] - r[2], e[3] = t[3] - r[3], e;
      }
      function Rn(e, t, r) {
        return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e[2] = t[2] * r[2], e[3] = t[3] * r[3], e;
      }
      function wn(e, t, r) {
        return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e[2] = t[2] / r[2], e[3] = t[3] / r[3], e;
      }
      function dh(e, t) {
        return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e[2] = Math.ceil(t[2]), e[3] = Math.ceil(t[3]), e;
      }
      function vh(e, t) {
        return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e[2] = Math.floor(t[2]), e[3] = Math.floor(t[3]), e;
      }
      function ph(e, t, r) {
        return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e[2] = Math.min(t[2], r[2]), e[3] = Math.min(t[3], r[3]), e;
      }
      function mh(e, t, r) {
        return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e[2] = Math.max(t[2], r[2]), e[3] = Math.max(t[3], r[3]), e;
      }
      function yh(e, t) {
        return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e[2] = Math.round(t[2]), e[3] = Math.round(t[3]), e;
      }
      function gh(e, t, r) {
        return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e;
      }
      function Mh(e, t, r, i) {
        return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e[2] = t[2] + r[2] * i, e[3] = t[3] + r[3] * i, e;
      }
      function Tn(e, t) {
        var r = t[0] - e[0], i = t[1] - e[1], n = t[2] - e[2], s = t[3] - e[3];
        return Math.hypot(r, i, n, s);
      }
      function An(e, t) {
        var r = t[0] - e[0], i = t[1] - e[1], n = t[2] - e[2], s = t[3] - e[3];
        return r * r + i * i + n * n + s * s;
      }
      function Pn(e) {
        var t = e[0], r = e[1], i = e[2], n = e[3];
        return Math.hypot(t, r, i, n);
      }
      function En(e) {
        var t = e[0], r = e[1], i = e[2], n = e[3];
        return t * t + r * r + i * i + n * n;
      }
      function xh(e, t) {
        return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = -t[3], e;
      }
      function _h(e, t) {
        return e[0] = 1 / t[0], e[1] = 1 / t[1], e[2] = 1 / t[2], e[3] = 1 / t[3], e;
      }
      function bh(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[3], a = r * r + i * i + n * n + s * s;
        return a > 0 && (a = 1 / Math.sqrt(a)), e[0] = r * a, e[1] = i * a, e[2] = n * a, e[3] = s * a, e;
      }
      function Rh(e, t) {
        return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
      }
      function wh(e, t, r, i) {
        var n = r[0] * i[1] - r[1] * i[0], s = r[0] * i[2] - r[2] * i[0], a = r[0] * i[3] - r[3] * i[0], o = r[1] * i[2] - r[2] * i[1], l = r[1] * i[3] - r[3] * i[1], c = r[2] * i[3] - r[3] * i[2], h = t[0], u = t[1], d = t[2], f = t[3];
        return e[0] = u * c - d * l + f * o, e[1] = -(h * c) + d * a - f * s, e[2] = h * l - u * a + f * n, e[3] = -(h * o) + u * s - d * n, e;
      }
      function Th(e, t, r, i) {
        var n = t[0], s = t[1], a = t[2], o = t[3];
        return e[0] = n + i * (r[0] - n), e[1] = s + i * (r[1] - s), e[2] = a + i * (r[2] - a), e[3] = o + i * (r[3] - o), e;
      }
      function Ah(e, t) {
        t = t || 1;
        var r, i, n, s, a, o;
        do
          r = Ue.RANDOM() * 2 - 1, i = Ue.RANDOM() * 2 - 1, a = r * r + i * i;
        while (a >= 1);
        do
          n = Ue.RANDOM() * 2 - 1, s = Ue.RANDOM() * 2 - 1, o = n * n + s * s;
        while (o >= 1);
        var l = Math.sqrt((1 - a) / o);
        return e[0] = t * r, e[1] = t * i, e[2] = t * n * l, e[3] = t * s * l, e;
      }
      function Ph(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3];
        return e[0] = r[0] * i + r[4] * n + r[8] * s + r[12] * a, e[1] = r[1] * i + r[5] * n + r[9] * s + r[13] * a, e[2] = r[2] * i + r[6] * n + r[10] * s + r[14] * a, e[3] = r[3] * i + r[7] * n + r[11] * s + r[15] * a, e;
      }
      function Eh(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = r[0], o = r[1], l = r[2], c = r[3], h = c * i + o * s - l * n, u = c * n + l * i - a * s, d = c * s + a * n - o * i, f = -a * i - o * n - l * s;
        return e[0] = h * c + f * -a + u * -l - d * -o, e[1] = u * c + f * -o + d * -a - h * -l, e[2] = d * c + f * -l + h * -o - u * -a, e[3] = t[3], e;
      }
      function Sh(e) {
        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e;
      }
      function Oh(e) {
        return "vec4(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
      }
      function Dh(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3];
      }
      function Bh(e, t) {
        var r = e[0], i = e[1], n = e[2], s = e[3], a = t[0], o = t[1], l = t[2], c = t[3];
        return Math.abs(r - a) <= Ue.EPSILON * Math.max(1, Math.abs(r), Math.abs(a)) && Math.abs(i - o) <= Ue.EPSILON * Math.max(1, Math.abs(i), Math.abs(o)) && Math.abs(n - l) <= Ue.EPSILON * Math.max(1, Math.abs(n), Math.abs(l)) && Math.abs(s - c) <= Ue.EPSILON * Math.max(1, Math.abs(s), Math.abs(c));
      }
      var Ch = bn;
      C.sub = Ch;
      var Lh = Rn;
      C.mul = Lh;
      var zh = wn;
      C.div = zh;
      var qh = Tn;
      C.dist = qh;
      var Gh = An;
      C.sqrDist = Gh;
      var Uh = Pn;
      C.len = Uh;
      var Nh = En;
      C.sqrLen = Nh;
      var Fh = function() {
        var e = _n();
        return function(t, r, i, n, s, a) {
          var o, l;
          for (r || (r = 4), i || (i = 0), n ? l = Math.min(n * r + i, t.length) : l = t.length, o = i; o < l; o += r)
            e[0] = t[o], e[1] = t[o + 1], e[2] = t[o + 2], e[3] = t[o + 3], s(e, e, a), t[o] = e[0], t[o + 1] = e[1], t[o + 2] = e[2], t[o + 3] = e[3];
          return t;
        };
      }();
      C.forEach = Fh;
    });
    var ti = B((R) => {
      "use strict";
      function lr(e) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? lr = function(r) {
          return typeof r;
        } : lr = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, lr(e);
      }
      Object.defineProperty(R, "__esModule", {value: true});
      R.create = Kr;
      R.identity = Vh;
      R.setAxisAngle = On;
      R.getAxisAngle = Yh;
      R.getAngle = Wh;
      R.multiply = Dn;
      R.rotateX = kh;
      R.rotateY = Hh;
      R.rotateZ = jh;
      R.calculateW = Xh;
      R.exp = Bn;
      R.ln = In;
      R.pow = Qh;
      R.slerp = cr;
      R.random = $h;
      R.invert = Zh;
      R.conjugate = Jh;
      R.fromMat3 = Cn;
      R.fromEuler = Kh;
      R.str = eu;
      R.setAxes = R.sqlerp = R.rotationTo = R.equals = R.exactEquals = R.normalize = R.sqrLen = R.squaredLength = R.len = R.length = R.lerp = R.dot = R.scale = R.mul = R.add = R.set = R.copy = R.fromValues = R.clone = void 0;
      var yt = hr(Ye()), tu = hr(Qr()), Je = hr(Zr()), Ie = hr(Jr());
      function Ln() {
        if (typeof WeakMap != "function")
          return null;
        var e = new WeakMap();
        return Ln = function() {
          return e;
        }, e;
      }
      function hr(e) {
        if (e && e.__esModule)
          return e;
        if (e === null || lr(e) !== "object" && typeof e != "function")
          return {default: e};
        var t = Ln();
        if (t && t.has(e))
          return t.get(e);
        var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
            s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n];
          }
        return r.default = e, t && t.set(e, r), r;
      }
      function Kr() {
        var e = new yt.ARRAY_TYPE(4);
        return yt.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e[3] = 1, e;
      }
      function Vh(e) {
        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e;
      }
      function On(e, t, r) {
        r = r * 0.5;
        var i = Math.sin(r);
        return e[0] = i * t[0], e[1] = i * t[1], e[2] = i * t[2], e[3] = Math.cos(r), e;
      }
      function Yh(e, t) {
        var r = Math.acos(t[3]) * 2, i = Math.sin(r / 2);
        return i > yt.EPSILON ? (e[0] = t[0] / i, e[1] = t[1] / i, e[2] = t[2] / i) : (e[0] = 1, e[1] = 0, e[2] = 0), r;
      }
      function Wh(e, t) {
        var r = zn(e, t);
        return Math.acos(2 * r * r - 1);
      }
      function Dn(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = r[0], l = r[1], c = r[2], h = r[3];
        return e[0] = i * h + a * o + n * c - s * l, e[1] = n * h + a * l + s * o - i * c, e[2] = s * h + a * c + i * l - n * o, e[3] = a * h - i * o - n * l - s * c, e;
      }
      function kh(e, t, r) {
        r *= 0.5;
        var i = t[0], n = t[1], s = t[2], a = t[3], o = Math.sin(r), l = Math.cos(r);
        return e[0] = i * l + a * o, e[1] = n * l + s * o, e[2] = s * l - n * o, e[3] = a * l - i * o, e;
      }
      function Hh(e, t, r) {
        r *= 0.5;
        var i = t[0], n = t[1], s = t[2], a = t[3], o = Math.sin(r), l = Math.cos(r);
        return e[0] = i * l - s * o, e[1] = n * l + a * o, e[2] = s * l + i * o, e[3] = a * l - n * o, e;
      }
      function jh(e, t, r) {
        r *= 0.5;
        var i = t[0], n = t[1], s = t[2], a = t[3], o = Math.sin(r), l = Math.cos(r);
        return e[0] = i * l + n * o, e[1] = n * l - i * o, e[2] = s * l + a * o, e[3] = a * l - s * o, e;
      }
      function Xh(e, t) {
        var r = t[0], i = t[1], n = t[2];
        return e[0] = r, e[1] = i, e[2] = n, e[3] = Math.sqrt(Math.abs(1 - r * r - i * i - n * n)), e;
      }
      function Bn(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[3], a = Math.sqrt(r * r + i * i + n * n), o = Math.exp(s), l = a > 0 ? o * Math.sin(a) / a : 0;
        return e[0] = r * l, e[1] = i * l, e[2] = n * l, e[3] = o * Math.cos(a), e;
      }
      function In(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[3], a = Math.sqrt(r * r + i * i + n * n), o = a > 0 ? Math.atan2(a, s) / a : 0;
        return e[0] = r * o, e[1] = i * o, e[2] = n * o, e[3] = 0.5 * Math.log(r * r + i * i + n * n + s * s), e;
      }
      function Qh(e, t, r) {
        return In(e, t), qn(e, e, r), Bn(e, e), e;
      }
      function cr(e, t, r, i) {
        var n = t[0], s = t[1], a = t[2], o = t[3], l = r[0], c = r[1], h = r[2], u = r[3], d, f, m, g, v;
        return f = n * l + s * c + a * h + o * u, f < 0 && (f = -f, l = -l, c = -c, h = -h, u = -u), 1 - f > yt.EPSILON ? (d = Math.acos(f), m = Math.sin(d), g = Math.sin((1 - i) * d) / m, v = Math.sin(i * d) / m) : (g = 1 - i, v = i), e[0] = g * n + v * l, e[1] = g * s + v * c, e[2] = g * a + v * h, e[3] = g * o + v * u, e;
      }
      function $h(e) {
        var t = yt.RANDOM(), r = yt.RANDOM(), i = yt.RANDOM(), n = Math.sqrt(1 - t), s = Math.sqrt(t);
        return e[0] = n * Math.sin(2 * Math.PI * r), e[1] = n * Math.cos(2 * Math.PI * r), e[2] = s * Math.sin(2 * Math.PI * i), e[3] = s * Math.cos(2 * Math.PI * i), e;
      }
      function Zh(e, t) {
        var r = t[0], i = t[1], n = t[2], s = t[3], a = r * r + i * i + n * n + s * s, o = a ? 1 / a : 0;
        return e[0] = -r * o, e[1] = -i * o, e[2] = -n * o, e[3] = s * o, e;
      }
      function Jh(e, t) {
        return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e;
      }
      function Cn(e, t) {
        var r = t[0] + t[4] + t[8], i;
        if (r > 0)
          i = Math.sqrt(r + 1), e[3] = 0.5 * i, i = 0.5 / i, e[0] = (t[5] - t[7]) * i, e[1] = (t[6] - t[2]) * i, e[2] = (t[1] - t[3]) * i;
        else {
          var n = 0;
          t[4] > t[0] && (n = 1), t[8] > t[n * 3 + n] && (n = 2);
          var s = (n + 1) % 3, a = (n + 2) % 3;
          i = Math.sqrt(t[n * 3 + n] - t[s * 3 + s] - t[a * 3 + a] + 1), e[n] = 0.5 * i, i = 0.5 / i, e[3] = (t[s * 3 + a] - t[a * 3 + s]) * i, e[s] = (t[s * 3 + n] + t[n * 3 + s]) * i, e[a] = (t[a * 3 + n] + t[n * 3 + a]) * i;
        }
        return e;
      }
      function Kh(e, t, r, i) {
        var n = 0.5 * Math.PI / 180;
        t *= n, r *= n, i *= n;
        var s = Math.sin(t), a = Math.cos(t), o = Math.sin(r), l = Math.cos(r), c = Math.sin(i), h = Math.cos(i);
        return e[0] = s * l * h - a * o * c, e[1] = a * o * h + s * l * c, e[2] = a * l * c - s * o * h, e[3] = a * l * h + s * o * c, e;
      }
      function eu(e) {
        return "quat(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
      }
      var ru = Ie.clone;
      R.clone = ru;
      var iu = Ie.fromValues;
      R.fromValues = iu;
      var nu = Ie.copy;
      R.copy = nu;
      var su = Ie.set;
      R.set = su;
      var au = Ie.add;
      R.add = au;
      var ou = Dn;
      R.mul = ou;
      var qn = Ie.scale;
      R.scale = qn;
      var zn = Ie.dot;
      R.dot = zn;
      var lu = Ie.lerp;
      R.lerp = lu;
      var Gn = Ie.length;
      R.length = Gn;
      var cu = Gn;
      R.len = cu;
      var Un = Ie.squaredLength;
      R.squaredLength = Un;
      var hu = Un;
      R.sqrLen = hu;
      var ei = Ie.normalize;
      R.normalize = ei;
      var uu = Ie.exactEquals;
      R.exactEquals = uu;
      var fu = Ie.equals;
      R.equals = fu;
      var du = function() {
        var e = Je.create(), t = Je.fromValues(1, 0, 0), r = Je.fromValues(0, 1, 0);
        return function(i, n, s) {
          var a = Je.dot(n, s);
          return a < -0.999999 ? (Je.cross(e, t, n), Je.len(e) < 1e-6 && Je.cross(e, r, n), Je.normalize(e, e), On(i, e, Math.PI), i) : a > 0.999999 ? (i[0] = 0, i[1] = 0, i[2] = 0, i[3] = 1, i) : (Je.cross(e, n, s), i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = 1 + a, ei(i, i));
        };
      }();
      R.rotationTo = du;
      var vu = function() {
        var e = Kr(), t = Kr();
        return function(r, i, n, s, a, o) {
          return cr(e, i, a, o), cr(t, n, s, o), cr(r, e, t, 2 * o * (1 - o)), r;
        };
      }();
      R.sqlerp = vu;
      var pu = function() {
        var e = tu.create();
        return function(t, r, i, n) {
          return e[0] = i[0], e[3] = i[1], e[6] = i[2], e[1] = n[0], e[4] = n[1], e[7] = n[2], e[2] = -r[0], e[5] = -r[1], e[8] = -r[2], ei(t, Cn(t, e));
        };
      }();
      R.setAxes = pu;
    });
    var jn = B((z) => {
      "use strict";
      function ur(e) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ur = function(r) {
          return typeof r;
        } : ur = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, ur(e);
      }
      Object.defineProperty(z, "__esModule", {value: true});
      z.create = mu;
      z.clone = yu;
      z.fromValues = gu;
      z.fromRotationTranslationValues = Mu;
      z.fromRotationTranslation = Nn;
      z.fromTranslation = xu;
      z.fromRotation = _u;
      z.fromMat4 = bu;
      z.copy = Fn;
      z.identity = Ru;
      z.set = wu;
      z.getDual = Tu;
      z.setDual = Au;
      z.getTranslation = Pu;
      z.translate = Eu;
      z.rotateX = Su;
      z.rotateY = Ou;
      z.rotateZ = Du;
      z.rotateByQuatAppend = Bu;
      z.rotateByQuatPrepend = Iu;
      z.rotateAroundAxis = Cu;
      z.add = Lu;
      z.multiply = Vn;
      z.scale = zu;
      z.lerp = qu;
      z.invert = Gu;
      z.conjugate = Uu;
      z.normalize = Nu;
      z.str = Fu;
      z.exactEquals = Vu;
      z.equals = Yu;
      z.sqrLen = z.squaredLength = z.len = z.length = z.dot = z.mul = z.setReal = z.getReal = void 0;
      var _e = ri(Ye()), Ke = ri(ti()), Yn = ri($r());
      function Wn() {
        if (typeof WeakMap != "function")
          return null;
        var e = new WeakMap();
        return Wn = function() {
          return e;
        }, e;
      }
      function ri(e) {
        if (e && e.__esModule)
          return e;
        if (e === null || ur(e) !== "object" && typeof e != "function")
          return {default: e};
        var t = Wn();
        if (t && t.has(e))
          return t.get(e);
        var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
            s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n];
          }
        return r.default = e, t && t.set(e, r), r;
      }
      function mu() {
        var e = new _e.ARRAY_TYPE(8);
        return _e.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0), e[3] = 1, e;
      }
      function yu(e) {
        var t = new _e.ARRAY_TYPE(8);
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t[6] = e[6], t[7] = e[7], t;
      }
      function gu(e, t, r, i, n, s, a, o) {
        var l = new _e.ARRAY_TYPE(8);
        return l[0] = e, l[1] = t, l[2] = r, l[3] = i, l[4] = n, l[5] = s, l[6] = a, l[7] = o, l;
      }
      function Mu(e, t, r, i, n, s, a) {
        var o = new _e.ARRAY_TYPE(8);
        o[0] = e, o[1] = t, o[2] = r, o[3] = i;
        var l = n * 0.5, c = s * 0.5, h = a * 0.5;
        return o[4] = l * i + c * r - h * t, o[5] = c * i + h * e - l * r, o[6] = h * i + l * t - c * e, o[7] = -l * e - c * t - h * r, o;
      }
      function Nn(e, t, r) {
        var i = r[0] * 0.5, n = r[1] * 0.5, s = r[2] * 0.5, a = t[0], o = t[1], l = t[2], c = t[3];
        return e[0] = a, e[1] = o, e[2] = l, e[3] = c, e[4] = i * c + n * l - s * o, e[5] = n * c + s * a - i * l, e[6] = s * c + i * o - n * a, e[7] = -i * a - n * o - s * l, e;
      }
      function xu(e, t) {
        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = t[0] * 0.5, e[5] = t[1] * 0.5, e[6] = t[2] * 0.5, e[7] = 0, e;
      }
      function _u(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0, e;
      }
      function bu(e, t) {
        var r = Ke.create();
        Yn.getRotation(r, t);
        var i = new _e.ARRAY_TYPE(3);
        return Yn.getTranslation(i, t), Nn(e, r, i), e;
      }
      function Fn(e, t) {
        return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e;
      }
      function Ru(e) {
        return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e[6] = 0, e[7] = 0, e;
      }
      function wu(e, t, r, i, n, s, a, o, l) {
        return e[0] = t, e[1] = r, e[2] = i, e[3] = n, e[4] = s, e[5] = a, e[6] = o, e[7] = l, e;
      }
      var Wu = Ke.copy;
      z.getReal = Wu;
      function Tu(e, t) {
        return e[0] = t[4], e[1] = t[5], e[2] = t[6], e[3] = t[7], e;
      }
      var ku = Ke.copy;
      z.setReal = ku;
      function Au(e, t) {
        return e[4] = t[0], e[5] = t[1], e[6] = t[2], e[7] = t[3], e;
      }
      function Pu(e, t) {
        var r = t[4], i = t[5], n = t[6], s = t[7], a = -t[0], o = -t[1], l = -t[2], c = t[3];
        return e[0] = (r * c + s * a + i * l - n * o) * 2, e[1] = (i * c + s * o + n * a - r * l) * 2, e[2] = (n * c + s * l + r * o - i * a) * 2, e;
      }
      function Eu(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = r[0] * 0.5, l = r[1] * 0.5, c = r[2] * 0.5, h = t[4], u = t[5], d = t[6], f = t[7];
        return e[0] = i, e[1] = n, e[2] = s, e[3] = a, e[4] = a * o + n * c - s * l + h, e[5] = a * l + s * o - i * c + u, e[6] = a * c + i * l - n * o + d, e[7] = -i * o - n * l - s * c + f, e;
      }
      function Su(e, t, r) {
        var i = -t[0], n = -t[1], s = -t[2], a = t[3], o = t[4], l = t[5], c = t[6], h = t[7], u = o * a + h * i + l * s - c * n, d = l * a + h * n + c * i - o * s, f = c * a + h * s + o * n - l * i, m = h * a - o * i - l * n - c * s;
        return Ke.rotateX(e, t, r), i = e[0], n = e[1], s = e[2], a = e[3], e[4] = u * a + m * i + d * s - f * n, e[5] = d * a + m * n + f * i - u * s, e[6] = f * a + m * s + u * n - d * i, e[7] = m * a - u * i - d * n - f * s, e;
      }
      function Ou(e, t, r) {
        var i = -t[0], n = -t[1], s = -t[2], a = t[3], o = t[4], l = t[5], c = t[6], h = t[7], u = o * a + h * i + l * s - c * n, d = l * a + h * n + c * i - o * s, f = c * a + h * s + o * n - l * i, m = h * a - o * i - l * n - c * s;
        return Ke.rotateY(e, t, r), i = e[0], n = e[1], s = e[2], a = e[3], e[4] = u * a + m * i + d * s - f * n, e[5] = d * a + m * n + f * i - u * s, e[6] = f * a + m * s + u * n - d * i, e[7] = m * a - u * i - d * n - f * s, e;
      }
      function Du(e, t, r) {
        var i = -t[0], n = -t[1], s = -t[2], a = t[3], o = t[4], l = t[5], c = t[6], h = t[7], u = o * a + h * i + l * s - c * n, d = l * a + h * n + c * i - o * s, f = c * a + h * s + o * n - l * i, m = h * a - o * i - l * n - c * s;
        return Ke.rotateZ(e, t, r), i = e[0], n = e[1], s = e[2], a = e[3], e[4] = u * a + m * i + d * s - f * n, e[5] = d * a + m * n + f * i - u * s, e[6] = f * a + m * s + u * n - d * i, e[7] = m * a - u * i - d * n - f * s, e;
      }
      function Bu(e, t, r) {
        var i = r[0], n = r[1], s = r[2], a = r[3], o = t[0], l = t[1], c = t[2], h = t[3];
        return e[0] = o * a + h * i + l * s - c * n, e[1] = l * a + h * n + c * i - o * s, e[2] = c * a + h * s + o * n - l * i, e[3] = h * a - o * i - l * n - c * s, o = t[4], l = t[5], c = t[6], h = t[7], e[4] = o * a + h * i + l * s - c * n, e[5] = l * a + h * n + c * i - o * s, e[6] = c * a + h * s + o * n - l * i, e[7] = h * a - o * i - l * n - c * s, e;
      }
      function Iu(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = r[0], l = r[1], c = r[2], h = r[3];
        return e[0] = i * h + a * o + n * c - s * l, e[1] = n * h + a * l + s * o - i * c, e[2] = s * h + a * c + i * l - n * o, e[3] = a * h - i * o - n * l - s * c, o = r[4], l = r[5], c = r[6], h = r[7], e[4] = i * h + a * o + n * c - s * l, e[5] = n * h + a * l + s * o - i * c, e[6] = s * h + a * c + i * l - n * o, e[7] = a * h - i * o - n * l - s * c, e;
      }
      function Cu(e, t, r, i) {
        if (Math.abs(i) < _e.EPSILON)
          return Fn(e, t);
        var n = Math.hypot(r[0], r[1], r[2]);
        i = i * 0.5;
        var s = Math.sin(i), a = s * r[0] / n, o = s * r[1] / n, l = s * r[2] / n, c = Math.cos(i), h = t[0], u = t[1], d = t[2], f = t[3];
        e[0] = h * c + f * a + u * l - d * o, e[1] = u * c + f * o + d * a - h * l, e[2] = d * c + f * l + h * o - u * a, e[3] = f * c - h * a - u * o - d * l;
        var m = t[4], g = t[5], v = t[6], x = t[7];
        return e[4] = m * c + x * a + g * l - v * o, e[5] = g * c + x * o + v * a - m * l, e[6] = v * c + x * l + m * o - g * a, e[7] = x * c - m * a - g * o - v * l, e;
      }
      function Lu(e, t, r) {
        return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e[2] = t[2] + r[2], e[3] = t[3] + r[3], e[4] = t[4] + r[4], e[5] = t[5] + r[5], e[6] = t[6] + r[6], e[7] = t[7] + r[7], e;
      }
      function Vn(e, t, r) {
        var i = t[0], n = t[1], s = t[2], a = t[3], o = r[4], l = r[5], c = r[6], h = r[7], u = t[4], d = t[5], f = t[6], m = t[7], g = r[0], v = r[1], x = r[2], A = r[3];
        return e[0] = i * A + a * g + n * x - s * v, e[1] = n * A + a * v + s * g - i * x, e[2] = s * A + a * x + i * v - n * g, e[3] = a * A - i * g - n * v - s * x, e[4] = i * h + a * o + n * c - s * l + u * A + m * g + d * x - f * v, e[5] = n * h + a * l + s * o - i * c + d * A + m * v + f * g - u * x, e[6] = s * h + a * c + i * l - n * o + f * A + m * x + u * v - d * g, e[7] = a * h - i * o - n * l - s * c + m * A - u * g - d * v - f * x, e;
      }
      var Hu = Vn;
      z.mul = Hu;
      function zu(e, t, r) {
        return e[0] = t[0] * r, e[1] = t[1] * r, e[2] = t[2] * r, e[3] = t[3] * r, e[4] = t[4] * r, e[5] = t[5] * r, e[6] = t[6] * r, e[7] = t[7] * r, e;
      }
      var kn = Ke.dot;
      z.dot = kn;
      function qu(e, t, r, i) {
        var n = 1 - i;
        return kn(t, r) < 0 && (i = -i), e[0] = t[0] * n + r[0] * i, e[1] = t[1] * n + r[1] * i, e[2] = t[2] * n + r[2] * i, e[3] = t[3] * n + r[3] * i, e[4] = t[4] * n + r[4] * i, e[5] = t[5] * n + r[5] * i, e[6] = t[6] * n + r[6] * i, e[7] = t[7] * n + r[7] * i, e;
      }
      function Gu(e, t) {
        var r = fr(t);
        return e[0] = -t[0] / r, e[1] = -t[1] / r, e[2] = -t[2] / r, e[3] = t[3] / r, e[4] = -t[4] / r, e[5] = -t[5] / r, e[6] = -t[6] / r, e[7] = t[7] / r, e;
      }
      function Uu(e, t) {
        return e[0] = -t[0], e[1] = -t[1], e[2] = -t[2], e[3] = t[3], e[4] = -t[4], e[5] = -t[5], e[6] = -t[6], e[7] = t[7], e;
      }
      var Hn = Ke.length;
      z.length = Hn;
      var ju = Hn;
      z.len = ju;
      var fr = Ke.squaredLength;
      z.squaredLength = fr;
      var Xu = fr;
      z.sqrLen = Xu;
      function Nu(e, t) {
        var r = fr(t);
        if (r > 0) {
          r = Math.sqrt(r);
          var i = t[0] / r, n = t[1] / r, s = t[2] / r, a = t[3] / r, o = t[4], l = t[5], c = t[6], h = t[7], u = i * o + n * l + s * c + a * h;
          e[0] = i, e[1] = n, e[2] = s, e[3] = a, e[4] = (o - i * u) / r, e[5] = (l - n * u) / r, e[6] = (c - s * u) / r, e[7] = (h - a * u) / r;
        }
        return e;
      }
      function Fu(e) {
        return "quat2(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ", " + e[4] + ", " + e[5] + ", " + e[6] + ", " + e[7] + ")";
      }
      function Vu(e, t) {
        return e[0] === t[0] && e[1] === t[1] && e[2] === t[2] && e[3] === t[3] && e[4] === t[4] && e[5] === t[5] && e[6] === t[6] && e[7] === t[7];
      }
      function Yu(e, t) {
        var r = e[0], i = e[1], n = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = t[0], u = t[1], d = t[2], f = t[3], m = t[4], g = t[5], v = t[6], x = t[7];
        return Math.abs(r - h) <= _e.EPSILON * Math.max(1, Math.abs(r), Math.abs(h)) && Math.abs(i - u) <= _e.EPSILON * Math.max(1, Math.abs(i), Math.abs(u)) && Math.abs(n - d) <= _e.EPSILON * Math.max(1, Math.abs(n), Math.abs(d)) && Math.abs(s - f) <= _e.EPSILON * Math.max(1, Math.abs(s), Math.abs(f)) && Math.abs(a - m) <= _e.EPSILON * Math.max(1, Math.abs(a), Math.abs(m)) && Math.abs(o - g) <= _e.EPSILON * Math.max(1, Math.abs(o), Math.abs(g)) && Math.abs(l - v) <= _e.EPSILON * Math.max(1, Math.abs(l), Math.abs(v)) && Math.abs(c - x) <= _e.EPSILON * Math.max(1, Math.abs(c), Math.abs(x));
      }
    });
    var is = B((E) => {
      "use strict";
      function dr(e) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? dr = function(r) {
          return typeof r;
        } : dr = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, dr(e);
      }
      Object.defineProperty(E, "__esModule", {value: true});
      E.create = Xn;
      E.clone = Qu;
      E.fromValues = $u;
      E.copy = Zu;
      E.set = Ju;
      E.add = Ku;
      E.subtract = Qn;
      E.multiply = $n;
      E.divide = Zn;
      E.ceil = ef;
      E.floor = tf;
      E.min = rf;
      E.max = nf;
      E.round = sf;
      E.scale = af;
      E.scaleAndAdd = of;
      E.distance = Jn;
      E.squaredDistance = Kn;
      E.length = es;
      E.squaredLength = ts;
      E.negate = lf;
      E.inverse = cf;
      E.normalize = hf;
      E.dot = uf;
      E.cross = ff;
      E.lerp = df;
      E.random = vf;
      E.transformMat2 = pf;
      E.transformMat2d = mf;
      E.transformMat3 = yf;
      E.transformMat4 = gf;
      E.rotate = Mf;
      E.angle = xf;
      E.zero = _f;
      E.str = bf;
      E.exactEquals = Rf;
      E.equals = wf;
      E.forEach = E.sqrLen = E.sqrDist = E.dist = E.div = E.mul = E.sub = E.len = void 0;
      var gt = Tf(Ye());
      function rs() {
        if (typeof WeakMap != "function")
          return null;
        var e = new WeakMap();
        return rs = function() {
          return e;
        }, e;
      }
      function Tf(e) {
        if (e && e.__esModule)
          return e;
        if (e === null || dr(e) !== "object" && typeof e != "function")
          return {default: e};
        var t = rs();
        if (t && t.has(e))
          return t.get(e);
        var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
            s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n];
          }
        return r.default = e, t && t.set(e, r), r;
      }
      function Xn() {
        var e = new gt.ARRAY_TYPE(2);
        return gt.ARRAY_TYPE != Float32Array && (e[0] = 0, e[1] = 0), e;
      }
      function Qu(e) {
        var t = new gt.ARRAY_TYPE(2);
        return t[0] = e[0], t[1] = e[1], t;
      }
      function $u(e, t) {
        var r = new gt.ARRAY_TYPE(2);
        return r[0] = e, r[1] = t, r;
      }
      function Zu(e, t) {
        return e[0] = t[0], e[1] = t[1], e;
      }
      function Ju(e, t, r) {
        return e[0] = t, e[1] = r, e;
      }
      function Ku(e, t, r) {
        return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e;
      }
      function Qn(e, t, r) {
        return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e;
      }
      function $n(e, t, r) {
        return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e;
      }
      function Zn(e, t, r) {
        return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e;
      }
      function ef(e, t) {
        return e[0] = Math.ceil(t[0]), e[1] = Math.ceil(t[1]), e;
      }
      function tf(e, t) {
        return e[0] = Math.floor(t[0]), e[1] = Math.floor(t[1]), e;
      }
      function rf(e, t, r) {
        return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e;
      }
      function nf(e, t, r) {
        return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e;
      }
      function sf(e, t) {
        return e[0] = Math.round(t[0]), e[1] = Math.round(t[1]), e;
      }
      function af(e, t, r) {
        return e[0] = t[0] * r, e[1] = t[1] * r, e;
      }
      function of(e, t, r, i) {
        return e[0] = t[0] + r[0] * i, e[1] = t[1] + r[1] * i, e;
      }
      function Jn(e, t) {
        var r = t[0] - e[0], i = t[1] - e[1];
        return Math.hypot(r, i);
      }
      function Kn(e, t) {
        var r = t[0] - e[0], i = t[1] - e[1];
        return r * r + i * i;
      }
      function es(e) {
        var t = e[0], r = e[1];
        return Math.hypot(t, r);
      }
      function ts(e) {
        var t = e[0], r = e[1];
        return t * t + r * r;
      }
      function lf(e, t) {
        return e[0] = -t[0], e[1] = -t[1], e;
      }
      function cf(e, t) {
        return e[0] = 1 / t[0], e[1] = 1 / t[1], e;
      }
      function hf(e, t) {
        var r = t[0], i = t[1], n = r * r + i * i;
        return n > 0 && (n = 1 / Math.sqrt(n)), e[0] = t[0] * n, e[1] = t[1] * n, e;
      }
      function uf(e, t) {
        return e[0] * t[0] + e[1] * t[1];
      }
      function ff(e, t, r) {
        var i = t[0] * r[1] - t[1] * r[0];
        return e[0] = e[1] = 0, e[2] = i, e;
      }
      function df(e, t, r, i) {
        var n = t[0], s = t[1];
        return e[0] = n + i * (r[0] - n), e[1] = s + i * (r[1] - s), e;
      }
      function vf(e, t) {
        t = t || 1;
        var r = gt.RANDOM() * 2 * Math.PI;
        return e[0] = Math.cos(r) * t, e[1] = Math.sin(r) * t, e;
      }
      function pf(e, t, r) {
        var i = t[0], n = t[1];
        return e[0] = r[0] * i + r[2] * n, e[1] = r[1] * i + r[3] * n, e;
      }
      function mf(e, t, r) {
        var i = t[0], n = t[1];
        return e[0] = r[0] * i + r[2] * n + r[4], e[1] = r[1] * i + r[3] * n + r[5], e;
      }
      function yf(e, t, r) {
        var i = t[0], n = t[1];
        return e[0] = r[0] * i + r[3] * n + r[6], e[1] = r[1] * i + r[4] * n + r[7], e;
      }
      function gf(e, t, r) {
        var i = t[0], n = t[1];
        return e[0] = r[0] * i + r[4] * n + r[12], e[1] = r[1] * i + r[5] * n + r[13], e;
      }
      function Mf(e, t, r, i) {
        var n = t[0] - r[0], s = t[1] - r[1], a = Math.sin(i), o = Math.cos(i);
        return e[0] = n * o - s * a + r[0], e[1] = n * a + s * o + r[1], e;
      }
      function xf(e, t) {
        var r = e[0], i = e[1], n = t[0], s = t[1], a = Math.sqrt(r * r + i * i) * Math.sqrt(n * n + s * s), o = a && (r * n + i * s) / a;
        return Math.acos(Math.min(Math.max(o, -1), 1));
      }
      function _f(e) {
        return e[0] = 0, e[1] = 0, e;
      }
      function bf(e) {
        return "vec2(" + e[0] + ", " + e[1] + ")";
      }
      function Rf(e, t) {
        return e[0] === t[0] && e[1] === t[1];
      }
      function wf(e, t) {
        var r = e[0], i = e[1], n = t[0], s = t[1];
        return Math.abs(r - n) <= gt.EPSILON * Math.max(1, Math.abs(r), Math.abs(n)) && Math.abs(i - s) <= gt.EPSILON * Math.max(1, Math.abs(i), Math.abs(s));
      }
      var Af = es;
      E.len = Af;
      var Pf = Qn;
      E.sub = Pf;
      var Ef = $n;
      E.mul = Ef;
      var Sf = Zn;
      E.div = Sf;
      var Of = Jn;
      E.dist = Of;
      var Df = Kn;
      E.sqrDist = Df;
      var Bf = ts;
      E.sqrLen = Bf;
      var If = function() {
        var e = Xn();
        return function(t, r, i, n, s, a) {
          var o, l;
          for (r || (r = 2), i || (i = 0), n ? l = Math.min(n * r + i, t.length) : l = t.length, o = i; o < l; o += r)
            e[0] = t[o], e[1] = t[o + 1], s(e, e, a), t[o] = e[0], t[o + 1] = e[1];
          return t;
        };
      }();
      E.forEach = If;
    });
    var pr = B((ne) => {
      "use strict";
      function vr(e) {
        return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? vr = function(r) {
          return typeof r;
        } : vr = function(r) {
          return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
        }, vr(e);
      }
      Object.defineProperty(ne, "__esModule", {value: true});
      ne.vec4 = ne.vec3 = ne.vec2 = ne.quat2 = ne.quat = ne.mat4 = ne.mat3 = ne.mat2d = ne.mat2 = ne.glMatrix = void 0;
      var Cf = je(Ye());
      ne.glMatrix = Cf;
      var Lf = je($i());
      ne.mat2 = Lf;
      var zf = je(en());
      ne.mat2d = zf;
      var qf = je(Qr());
      ne.mat3 = qf;
      var Gf = je($r());
      ne.mat4 = Gf;
      var Uf = je(ti());
      ne.quat = Uf;
      var Nf = je(jn());
      ne.quat2 = Nf;
      var Ff = je(is());
      ne.vec2 = Ff;
      var Vf = je(Zr());
      ne.vec3 = Vf;
      var Yf = je(Jr());
      ne.vec4 = Yf;
      function ns() {
        if (typeof WeakMap != "function")
          return null;
        var e = new WeakMap();
        return ns = function() {
          return e;
        }, e;
      }
      function je(e) {
        if (e && e.__esModule)
          return e;
        if (e === null || vr(e) !== "object" && typeof e != "function")
          return {default: e};
        var t = ns();
        if (t && t.has(e))
          return t.get(e);
        var r = {}, i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var s = i ? Object.getOwnPropertyDescriptor(e, n) : null;
            s && (s.get || s.set) ? Object.defineProperty(r, n, s) : r[n] = e[n];
          }
        return r.default = e, t && t.set(e, r), r;
      }
    });
    var et = B((zt) => {
      "use strict";
      Object.defineProperty(zt, "__esModule", {value: true});
      zt.vec3 = zt.Vector3 = void 0;
      var ss = Mt(), ii = Ce(), Wf = Array, ct = class extends Wf {
        get x() {
          return this[0];
        }
        set x(t) {
          this[0] = t;
        }
        get y() {
          return this[1];
        }
        set y(t) {
          this[1] = t;
        }
        get z() {
          return this[2];
        }
        set z(t) {
          this[2] = t;
        }
        get magnitude() {
          return Math.hypot(...this);
        }
        get normalized() {
          let t = this.magnitude;
          return t == 0 ? Le.zero() : this.clone().div(Le(t, t, t));
        }
        get negative() {
          return this.clone().negate();
        }
        get inversed() {
          return this.clone().inverse();
        }
        constructor(t, r, i) {
          super(t, r, i);
        }
        static zero() {
          return new ct(0, 0, 0);
        }
        static one() {
          return new ct(1, 1, 1);
        }
        plus(t) {
          return this[0] += t[0], this[1] += t[1], this[2] += t[2], this;
        }
        minus(t) {
          return this[0] -= t[0], this[1] -= t[1], this[2] -= t[2], this;
        }
        mul(t) {
          return this[0] *= t[0], this[1] *= t[1], this[2] *= t[2], this;
        }
        div(t) {
          return this[0] /= t[0], this[1] /= t[1], this[2] /= t[2], this;
        }
        dot(t) {
          return this[0] * t[0] + this[1] * t[1] + this[2] * t[2];
        }
        normalize() {
          let t = this.magnitude;
          return t == 0 ? Le.zero() : this.clone().div(Le(t, t, t));
        }
        inverse() {
          return this[0] = 1 / this[0], this[1] = 1 / this[1], this[2] = 1 / this[2], this;
        }
        negate() {
          return this[0] = -this[0], this[1] = -this[1], this[2] = -this[2], this;
        }
        cross(t) {
          return Le(this.y * t.z - this.z * t.y, this.z * t.x - this.x * t.z, this.x * t.y - this.y * t.x);
        }
        clone() {
          return Le(this[0], this[1], this[2]);
        }
        toVec2() {
          return ii.vec2(this[0], this[1]);
        }
        equals(t) {
          return t === void 0 ? false : t[0] === this[0] && t[1] === this[1] && t[2] === this[2];
        }
        __to(t) {
          switch (t) {
            case ss.Vector4:
              return ss.vec4(this[0], this[1], this[2], 0);
            case ii.Vector2:
              return ii.vec2(this[0], this[1]);
          }
          return this.clone();
        }
      };
      zt.Vector3 = ct;
      function Le(e, t = e, r = e) {
        return new ct(e, t, r);
      }
      zt.vec3 = Le;
      Le.from = (e) => {
        let [t = 0, r = 0, i = 0] = e;
        return Le(t, r, i);
      };
      Le.floor = (e) => Le(Math.floor(e.x), Math.floor(e.y), Math.floor(e.z));
      Le.zero = ct.zero;
      Le.one = ct.one;
    });
    var Mt = B((qt) => {
      "use strict";
      Object.defineProperty(qt, "__esModule", {value: true});
      qt.vec4 = qt.Vector4 = void 0;
      var as = et(), os = Ce(), kf = Array, tt = class extends kf {
        get x() {
          return this[0];
        }
        set x(t) {
          this[0] = t;
        }
        get y() {
          return this[1];
        }
        set y(t) {
          this[1] = t;
        }
        get z() {
          return this[2];
        }
        set z(t) {
          this[2] = t;
        }
        get w() {
          return this[3];
        }
        set w(t) {
          this[3] = t;
        }
        get magnitude() {
          return Math.hypot(...this);
        }
        get normalized() {
          let t = this.magnitude;
          return t == 0 ? Ne.zero() : this.clone().div(Ne(t, t, t, t));
        }
        get negative() {
          return this.clone().negate();
        }
        get inversed() {
          return this.clone().inverse();
        }
        constructor(t, r, i = 0, n = 0) {
          super(t, r, i || 0, n || 0);
        }
        static zero() {
          return new tt(0, 0, 0, 0);
        }
        static one() {
          return new tt(1, 1, 1, 1);
        }
        plus(t) {
          return this[0] += t[0], this[1] += t[1], this[2] += t[2], this[3] += t[3], this;
        }
        minus(t) {
          return this[0] -= t[0], this[1] -= t[1], this[2] -= t[2], this[3] -= t[3], this;
        }
        mul(t) {
          return this[0] *= t[0], this[1] *= t[1], this[2] *= t[2], this[3] *= t[3], this;
        }
        div(t) {
          return this[0] /= t[0], this[1] /= t[1], this[2] /= t[2], this[3] /= t[3], this;
        }
        dot(t) {
          return this[0] * t[0] + this[1] * t[1] + this[2] * t[2] + this[3] * t[3];
        }
        normalize() {
          let t = this.magnitude;
          return t == 0 ? Ne.zero() : this.clone().div(Ne(t, t, t, t));
        }
        inverse() {
          return this[0] = 1 / this[0], this[1] = 1 / this[1], this[2] = 1 / this[2], this[3] = 1 / this[3], this;
        }
        negate() {
          return this[0] = -this[0], this[1] = -this[1], this[2] = -this[2], this[3] = -this[3], this;
        }
        clone() {
          return Ne(this[0], this[1], this[2], this[3]);
        }
        equals(t) {
          return t === void 0 ? false : t[0] === this[0] && t[1] === this[1] && t[2] === this[2] && t[3] === this[3];
        }
        __to(t) {
          switch (t) {
            case tt:
              return this.clone();
            case as.Vector3:
              return as.vec3(this[0], this[1], this[2]);
            case os.Vector2:
              return os.vec2(this[0], this[1]);
          }
          return this.clone();
        }
      };
      qt.Vector4 = tt;
      function Ne(e, t = e, r = e, i = e) {
        return new tt(e, t, r, i);
      }
      qt.vec4 = Ne;
      Ne.from = (e) => {
        let [t = 0, r = 0, i = 0, n = 0] = e;
        return Ne(t, r, i, n);
      };
      Ne.floor = (e) => Ne(Math.floor(e.x), Math.floor(e.y), Math.floor(e.z), Math.floor(e.w));
      Ne.zero = tt.zero;
      Ne.one = tt.one;
    });
    var Ce = B((Gt) => {
      "use strict";
      Object.defineProperty(Gt, "__esModule", {value: true});
      Gt.vec2 = Gt.Vector2 = void 0;
      var ls = Mt(), ni = et(), Hf = Array, pe = class extends Hf {
        get x() {
          return this[0];
        }
        set x(t) {
          this[0] = t;
        }
        get y() {
          return this[1];
        }
        set y(t) {
          this[1] = t;
        }
        get magnitude() {
          return Math.hypot(...this);
        }
        get normalized() {
          let t = this.magnitude;
          return t == 0 ? me.zero() : this.clone().div(me(t, t));
        }
        get negative() {
          return this.clone().negate();
        }
        get inversed() {
          return this.clone().inverse();
        }
        constructor(t, r) {
          super(t, r);
        }
        static zero() {
          return new pe(0, 0);
        }
        static one() {
          return new pe(1, 1);
        }
        static up() {
          return new pe(0, 1);
        }
        static down() {
          return new pe(0, -1);
        }
        static left() {
          return new pe(-1, 0);
        }
        static right() {
          return new pe(1, 0);
        }
        static distance(t, r) {
          return Math.sqrt((t.x - r.x) * (t.x - r.x) + (t.y - r.y) * (t.y - r.y));
        }
        static distanceSquared(t, r) {
          return (t.x - r.x) * (t.x - r.x) + (t.y - r.y) * (t.y - r.y);
        }
        plus(t) {
          return this[0] += t[0], this[1] += t[1], this;
        }
        minus(t) {
          return this[0] -= t[0], this[1] -= t[1], this;
        }
        mul(t) {
          return this[0] *= t[0], this[1] *= t[1], this;
        }
        div(t) {
          return this[0] /= t[0], this[1] /= t[1], this;
        }
        dot(t) {
          return this[0] * t[0] + this[1] * t[1];
        }
        normalize() {
          let t = this.magnitude;
          return t == 0 ? me.zero() : this.clone().div(me(t, t));
        }
        inverse() {
          return this[0] = 1 / this[0], this[1] = 1 / this[1], this;
        }
        negate() {
          return this[0] = -this[0], this[1] = -this[1], this;
        }
        cross(t) {
          return this.x * t.y - this.y * t.x;
        }
        clone() {
          return me(this[0], this[1]);
        }
        toVec3(t = 0) {
          return ni.vec3(this[0], this[1], t);
        }
        __to(t) {
          switch (t) {
            case ls.Vector4:
              return ls.vec4(this[0], this[1], 0, 0);
            case ni.Vector3:
              return ni.vec3(this[0], this[1], 0);
          }
          return this.clone();
        }
        equals(t) {
          return t === void 0 ? false : t[0] === this[0] && t[1] === this[1];
        }
      };
      Gt.Vector2 = pe;
      function me(e, t = e) {
        return new pe(e, t);
      }
      Gt.vec2 = me;
      me.from = (e) => {
        let [t = 0, r = 0] = e;
        return me(t, r);
      };
      me.floor = (e) => me(Math.floor(e.x), Math.floor(e.y));
      me.zero = pe.zero;
      me.one = pe.one;
      me.left = pe.left;
      me.right = pe.right;
      me.down = pe.down;
      me.up = pe.up;
    });
    var xt = B((ht) => {
      "use strict";
      Object.defineProperty(ht, "__esModule", {value: true});
      ht.rgb = ht.rgba = ht.Color = void 0;
      var jf = Mt(), ye = class extends jf.Vector4 {
        get r() {
          return this[0];
        }
        set r(t) {
          this[0] = t;
        }
        get g() {
          return this[1];
        }
        set g(t) {
          this[1] = t;
        }
        get b() {
          return this[2];
        }
        set b(t) {
          this[2] = t;
        }
        get a() {
          return this[3];
        }
        set a(t) {
          this[3] = t;
        }
        constructor(t, r, i, n = 1) {
          super(t, r, i, n);
        }
        static get white() {
          return new ye(1, 1, 1);
        }
        static get transparent() {
          return new ye(1, 1, 1, 0);
        }
        static get black() {
          return new ye(0, 0, 0);
        }
        static get red() {
          return new ye(1, 0, 0);
        }
        static get green() {
          return new ye(0, 1, 0);
        }
        static get blue() {
          return new ye(0, 0, 1);
        }
        static get cyan() {
          return new ye(0, 1, 1);
        }
        static get yellow() {
          return new ye(1, 1, 0);
        }
        static get magenta() {
          return new ye(1, 0, 1);
        }
        static get gray() {
          return new ye(0.5, 0.5, 0.5);
        }
        transparent() {
          return new ye(this.r, this.g, this.b, 0);
        }
      };
      ht.Color = ye;
      var Xf = (e, t, r, i = 1) => new ye(e, t, r, i);
      ht.rgba = Xf;
      var Qf = (e, t, r) => new ye(e, t, r, 1);
      ht.rgb = Qf;
    });
    var Ut = B((ae) => {
      "use strict";
      Object.defineProperty(ae, "__esModule", {value: true});
      ae.Rad2Deg = ae.Deg2Rad = ae.distance = ae.cross = ae.dot = ae.div = ae.mul = ae.minus = ae.plus = void 0;
      var cs = et(), hs = Mt(), us = Ce();
      Number.prototype.__to = function(e) {
        switch (e) {
          case hs.Vector4:
            return hs.vec4(this.valueOf(), this.valueOf(), this.valueOf(), this.valueOf());
          case cs.Vector3:
            return cs.vec3(this.valueOf(), this.valueOf(), this.valueOf());
          case us.Vector2:
            return us.vec2(this.valueOf(), this.valueOf());
        }
        return this.valueOf();
      };
      function mr(e, t) {
        return typeof e == "number" ? [t, e, true] : typeof t == "number" ? [e, t, false] : t.length > e.length ? [t, e, true] : [e, t, false];
      }
      function $f(e, t) {
        let [r, i] = mr(e, t);
        return i.__to(r.constructor).plus(r);
      }
      ae.plus = $f;
      function fs(e, t) {
        let [r, i, n] = mr(e, t);
        return n ? i.__to(r.constructor).minus(r) : i.__to(r.constructor).minus(r).negate();
      }
      ae.minus = fs;
      function Zf(e, t) {
        let [r, i] = mr(e, t);
        return i.__to(r.constructor).mul(r);
      }
      ae.mul = Zf;
      function Jf(e, t) {
        let [r, i, n] = mr(e, t);
        return n ? i.__to(r.constructor).div(r) : i.__to(r.constructor).div(r).inversed;
      }
      ae.div = Jf;
      function Kf(e, t) {
        return e.dot(t);
      }
      ae.dot = Kf;
      function ed(e, t) {
        return e.cross(t);
      }
      ae.cross = ed;
      function td(e, t) {
        return fs(t, e).magnitude;
      }
      ae.distance = td;
      ae.Deg2Rad = Math.PI / 180;
      ae.Rad2Deg = 180 / Math.PI;
    });
    var si = B((ut) => {
      "use strict";
      Object.defineProperty(ut, "__esModule", {value: true});
      ut.mat4 = ut.Matrix4x4 = void 0;
      var V = pr(), yr = et(), Zt = Mt();
      function se(e) {
        return V.mat4.clone(e);
      }
      ut.Matrix4x4 = se;
      se.identity = () => {
        let e = V.mat4.create();
        return V.mat4.identity(e);
      };
      se.rts = (e, t, r) => {
        let i = ut.mat4.identity();
        return V.mat4.fromRotationTranslationScale(i, e, t, r), i;
      };
      se.translate = (e) => {
        let t = ut.mat4.identity();
        return V.mat4.translate(t, V.mat4.identity(t), e);
      };
      se.invert = (e) => {
        let t = V.mat4.create();
        return V.mat4.invert(t, e), t;
      };
      se.getTranslation = (e) => {
        let t = yr.vec3(0, 0, 0);
        return V.mat4.getTranslation(t, e), t;
      };
      se.getRotation = (e) => {
        let t = V.quat.create();
        return V.mat4.getRotation(t, e), t;
      };
      se.getScaling = (e) => {
        let t = yr.vec3(0, 0, 0);
        return V.mat4.getScaling(t, e), t;
      };
      se.mulPoint = (e, t) => {
        let r = Zt.vec4(t.x, t.y, t.z, 1), i = Zt.vec4.zero();
        return V.vec4.transformMat4(i, r, e), yr.vec3(i.x, i.y, i.z);
      };
      se.mulVector = (e, t) => {
        let r = Zt.vec4(t.x, t.y, t.z, 0), i = Zt.vec4.zero();
        return V.vec4.transformMat4(i, r, e), yr.vec3(i.x, i.y, i.z);
      };
      se.mulVec4 = (e, t) => {
        let r = Zt.vec4.zero();
        return V.vec4.transformMat4(r, t, e), r;
      };
      se.perspective = (e, t, r, i) => {
        let n = V.mat4.create();
        return V.mat4.perspective(n, e, t, r, i);
      };
      se.transpose = (e) => V.mat4.transpose(V.mat4.create(), e);
      function rd(e, t, r, i) {
        let n = V.mat4.create();
        return V.mat4.ortho(n, -t * e, t * e, -e, e, r, i), n;
      }
      function id(...e) {
        if (e.length === 4)
          return rd(...e);
        let t = V.mat4.create();
        return V.mat4.ortho(t, ...e), t;
      }
      se.ortho = id;
      se.rotate = (e, t, r) => V.mat4.rotate(V.mat4.create(), e, r, t);
      se.scale = (e, t) => V.mat4.scale(V.mat4.create(), e, t);
      se.fromRotation = (e, t) => V.mat4.fromRotation(V.mat4.create(), t, e);
      se.fromScaling = (e) => V.mat4.fromScaling(V.mat4.create(), e);
      se.equal = (e, t) => e === void 0 || t === void 0 || !(e instanceof Array || e instanceof Float32Array) || !(t instanceof Array || t instanceof Float32Array) ? false : V.mat4.exactEquals(e, t);
      se.mul = (e, t, r) => (r || (r = t, t = e, e = V.mat4.create()), V.mat4.mul(e, t, r));
      ut.mat4 = se;
    });
    var vs = B((_t) => {
      "use strict";
      Object.defineProperty(_t, "__esModule", {value: true});
      _t.quat = _t.Quaternion = void 0;
      var be = pr(), ds = et(), ai = Ut();
      function Fe() {
        return be.quat.create();
      }
      _t.Quaternion = Fe;
      Fe.identity = () => {
        let e = be.quat.create();
        return be.quat.identity(e), e;
      };
      Fe.axis = (e, t) => be.quat.setAxisAngle(be.quat.create(), e, t);
      Fe.mul = (e, t) => {
        let r = be.quat.create();
        return be.quat.mul(r, e, t);
      };
      Fe.invert = (e) => {
        let t = be.quat.create();
        return be.quat.invert(t, e);
      };
      Fe.normalize = (e) => be.quat.normalize(be.quat.create(), e);
      Fe.euler = (e) => ds.vec3(Math.atan2(2 * (e[3] * e[0] + e[1] * e[2]), 1 - 2 * (e[0] ** 2 + e[1] ** 2)) * ai.Rad2Deg, Math.asin(2 * (e[3] * e[1] - e[2] * e[0])) * ai.Rad2Deg, Math.atan2(2 * (e[3] * e[2] + e[0] * e[1]), 1 - 2 * (e[1] ** 2, e[2] ** 2)) * ai.Rad2Deg);
      Fe.fromEuler = (e) => be.quat.fromEuler(be.quat.create(), e[0], e[1], e[2]);
      Fe.rotate = (e, t) => be.vec3.transformQuat(ds.vec3(0, 0, 0), t, e);
      Fe.equals = (e, t) => be.quat.exactEquals(e, t);
      _t.quat = Fe;
      _t.quat.identity = Fe.identity;
    });
    var ps = B((gr) => {
      "use strict";
      Object.defineProperty(gr, "__esModule", {value: true});
      gr.ray = void 0;
      function nd(e, t) {
        return {origin: e, direction: t.normalized};
      }
      gr.ray = nd;
    });
    var xr = B((Mr) => {
      "use strict";
      Object.defineProperty(Mr, "__esModule", {value: true});
      Mr.Rect = void 0;
      var bt = Ut(), Rt = Ce(), Nt = class {
        constructor(t, r) {
          this.min = t, this.max = bt.plus(t, r);
        }
        get xMin() {
          return this.min.x;
        }
        get yMin() {
          return this.min.y;
        }
        get xMax() {
          return this.max.x;
        }
        get yMax() {
          return this.max.y;
        }
        get size() {
          return bt.minus(this.max, this.min);
        }
        get center() {
          return bt.plus(this.min, this.max).mul(Rt.vec2(0.5));
        }
        shrink(t) {
          let r = bt.plus(this.min, Rt.vec2(t)), i = bt.minus(this.max, Rt.vec2(t));
          return r.x > i.x && (r.x = i.x = (r.x + i.x) / 2), r.y > i.y && (r.y = i.y = (r.y + i.y) / 2), new Nt(r, i.minus(r));
        }
        expand(t) {
          return new Nt(bt.minus(this.min, Rt.vec2(t)), bt.plus(this.size, Rt.vec2(2 * t)));
        }
        static box01() {
          return new Nt(Rt.vec2.zero(), Rt.vec2.one());
        }
      };
      Mr.Rect = Nt;
    });
    var oi = B((Re) => {
      "use strict";
      var sd = Re && Re.__createBinding || (Object.create ? function(e, t, r, i) {
        i === void 0 && (i = r), Object.defineProperty(e, i, {enumerable: true, get: function() {
          return t[r];
        }});
      } : function(e, t, r, i) {
        i === void 0 && (i = r), e[i] = t[r];
      }), rt = Re && Re.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && sd(t, e, r);
      };
      Object.defineProperty(Re, "__esModule", {value: true});
      var ad = pr();
      ad.glMatrix.setMatrixArrayType(Array);
      rt(Ce(), Re);
      rt(et(), Re);
      rt(Mt(), Re);
      rt(xt(), Re);
      rt(Ut(), Re);
      rt(si(), Re);
      rt(vs(), Re);
      rt(ps(), Re);
      rt(xr(), Re);
    });
    var _r = B(() => {
      var ms;
      (function(e) {
        (function(t) {
          var r = typeof global == "object" ? global : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), i = n(e);
          typeof r.Reflect == "undefined" ? r.Reflect = e : i = n(r.Reflect, i), t(i);
          function n(s, a) {
            return function(o, l) {
              typeof s[o] != "function" && Object.defineProperty(s, o, {configurable: true, writable: true, value: l}), a && a(o, l);
            };
          }
        })(function(t) {
          var r = Object.prototype.hasOwnProperty, i = typeof Symbol == "function", n = i && typeof Symbol.toPrimitive != "undefined" ? Symbol.toPrimitive : "@@toPrimitive", s = i && typeof Symbol.iterator != "undefined" ? Symbol.iterator : "@@iterator", a = typeof Object.create == "function", o = {__proto__: []} instanceof Array, l = !a && !o, c = {create: a ? function() {
            return Xr(Object.create(null));
          } : o ? function() {
            return Xr({__proto__: null});
          } : function() {
            return Xr({});
          }, has: l ? function(p, M) {
            return r.call(p, M);
          } : function(p, M) {
            return M in p;
          }, get: l ? function(p, M) {
            return r.call(p, M) ? p[M] : void 0;
          } : function(p, M) {
            return p[M];
          }}, h = Object.getPrototypeOf(Function), u = typeof process == "object" && process.env && process.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true", d = !u && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ha(), f = !u && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ja(), m = !u && typeof WeakMap == "function" ? WeakMap : Xa(), g = new m();
          function v(p, M, _, b) {
            if (ce(_)) {
              if (!Ui(p))
                throw new TypeError();
              if (!Ni(M))
                throw new TypeError();
              return Q(p, M);
            } else {
              if (!Ui(p))
                throw new TypeError();
              if (!fe(M))
                throw new TypeError();
              if (!fe(b) && !ce(b) && !Ct(b))
                throw new TypeError();
              return Ct(b) && (b = void 0), _ = $e(_), re(p, M, _, b);
            }
          }
          t("decorate", v);
          function x(p, M) {
            function _(b, S) {
              if (!fe(b))
                throw new TypeError();
              if (!ce(S) && !Fa(S))
                throw new TypeError();
              at(p, M, b, S);
            }
            return _;
          }
          t("metadata", x);
          function A(p, M, _, b) {
            if (!fe(_))
              throw new TypeError();
            return ce(b) || (b = $e(b)), at(p, M, _, b);
          }
          t("defineMetadata", A);
          function w(p, M, _) {
            if (!fe(M))
              throw new TypeError();
            return ce(_) || (_ = $e(_)), te(p, M, _);
          }
          t("hasMetadata", w);
          function P(p, M, _) {
            if (!fe(M))
              throw new TypeError();
            return ce(_) || (_ = $e(_)), q(p, M, _);
          }
          t("hasOwnMetadata", P);
          function D(p, M, _) {
            if (!fe(M))
              throw new TypeError();
            return ce(_) || (_ = $e(_)), Ae(p, M, _);
          }
          t("getMetadata", D);
          function O(p, M, _) {
            if (!fe(M))
              throw new TypeError();
            return ce(_) || (_ = $e(_)), st(p, M, _);
          }
          t("getOwnMetadata", O);
          function ee(p, M) {
            if (!fe(p))
              throw new TypeError();
            return ce(M) || (M = $e(M)), Xt(p, M);
          }
          t("getMetadataKeys", ee);
          function Z(p, M) {
            if (!fe(p))
              throw new TypeError();
            return ce(M) || (M = $e(M)), Qt(p, M);
          }
          t("getOwnMetadataKeys", Z);
          function J(p, M, _) {
            if (!fe(M))
              throw new TypeError();
            ce(_) || (_ = $e(_));
            var b = H(M, _, false);
            if (ce(b) || !b.delete(p))
              return false;
            if (b.size > 0)
              return true;
            var S = g.get(M);
            return S.delete(_), S.size > 0 || g.delete(M), true;
          }
          t("deleteMetadata", J);
          function Q(p, M) {
            for (var _ = p.length - 1; _ >= 0; --_) {
              var b = p[_], S = b(M);
              if (!ce(S) && !Ct(S)) {
                if (!Ni(S))
                  throw new TypeError();
                M = S;
              }
            }
            return M;
          }
          function re(p, M, _, b) {
            for (var S = p.length - 1; S >= 0; --S) {
              var ve = p[S], G = ve(M, _, b);
              if (!ce(G) && !Ct(G)) {
                if (!fe(G))
                  throw new TypeError();
                b = G;
              }
            }
            return b;
          }
          function H(p, M, _) {
            var b = g.get(p);
            if (ce(b)) {
              if (!_)
                return;
              b = new d(), g.set(p, b);
            }
            var S = b.get(M);
            if (ce(S)) {
              if (!_)
                return;
              S = new d(), b.set(M, S);
            }
            return S;
          }
          function te(p, M, _) {
            var b = q(p, M, _);
            if (b)
              return true;
            var S = jr(M);
            return Ct(S) ? false : te(p, S, _);
          }
          function q(p, M, _) {
            var b = H(M, _, false);
            return ce(b) ? false : Ua(b.has(p));
          }
          function Ae(p, M, _) {
            var b = q(p, M, _);
            if (b)
              return st(p, M, _);
            var S = jr(M);
            if (!Ct(S))
              return Ae(p, S, _);
          }
          function st(p, M, _) {
            var b = H(M, _, false);
            if (!ce(b))
              return b.get(p);
          }
          function at(p, M, _, b) {
            var S = H(_, b, true);
            S.set(p, M);
          }
          function Xt(p, M) {
            var _ = Qt(p, M), b = jr(p);
            if (b === null)
              return _;
            var S = Xt(b, M);
            if (S.length <= 0)
              return _;
            if (_.length <= 0)
              return S;
            for (var ve = new f(), G = [], N = 0, L = _; N < L.length; N++) {
              var Y = L[N], W = ve.has(Y);
              W || (ve.add(Y), G.push(Y));
            }
            for (var ot = 0, Vi = S; ot < Vi.length; ot++) {
              var Y = Vi[ot], W = ve.has(Y);
              W || (ve.add(Y), G.push(Y));
            }
            return G;
          }
          function Qt(p, M) {
            var _ = [], b = H(p, M, false);
            if (ce(b))
              return _;
            for (var S = b.keys(), ve = Va(S), G = 0; ; ) {
              var N = Wa(ve);
              if (!N)
                return _.length = G, _;
              var L = Ya(N);
              try {
                _[G] = L;
              } catch (Y) {
                try {
                  ka(ve);
                } finally {
                  throw Y;
                }
              }
              G++;
            }
          }
          function Gi(p) {
            if (p === null)
              return 1;
            switch (typeof p) {
              case "undefined":
                return 0;
              case "boolean":
                return 2;
              case "string":
                return 3;
              case "symbol":
                return 4;
              case "number":
                return 5;
              case "object":
                return p === null ? 1 : 6;
              default:
                return 6;
            }
          }
          function ce(p) {
            return p === void 0;
          }
          function Ct(p) {
            return p === null;
          }
          function za(p) {
            return typeof p == "symbol";
          }
          function fe(p) {
            return typeof p == "object" ? p !== null : typeof p == "function";
          }
          function qa(p, M) {
            switch (Gi(p)) {
              case 0:
                return p;
              case 1:
                return p;
              case 2:
                return p;
              case 3:
                return p;
              case 4:
                return p;
              case 5:
                return p;
            }
            var _ = M === 3 ? "string" : M === 5 ? "number" : "default", b = Fi(p, n);
            if (b !== void 0) {
              var S = b.call(p, _);
              if (fe(S))
                throw new TypeError();
              return S;
            }
            return Ga(p, _ === "default" ? "number" : _);
          }
          function Ga(p, M) {
            if (M === "string") {
              var _ = p.toString;
              if (Lt(_)) {
                var b = _.call(p);
                if (!fe(b))
                  return b;
              }
              var S = p.valueOf;
              if (Lt(S)) {
                var b = S.call(p);
                if (!fe(b))
                  return b;
              }
            } else {
              var S = p.valueOf;
              if (Lt(S)) {
                var b = S.call(p);
                if (!fe(b))
                  return b;
              }
              var ve = p.toString;
              if (Lt(ve)) {
                var b = ve.call(p);
                if (!fe(b))
                  return b;
              }
            }
            throw new TypeError();
          }
          function Ua(p) {
            return !!p;
          }
          function Na(p) {
            return "" + p;
          }
          function $e(p) {
            var M = qa(p, 3);
            return za(M) ? M : Na(M);
          }
          function Ui(p) {
            return Array.isArray ? Array.isArray(p) : p instanceof Object ? p instanceof Array : Object.prototype.toString.call(p) === "[object Array]";
          }
          function Lt(p) {
            return typeof p == "function";
          }
          function Ni(p) {
            return typeof p == "function";
          }
          function Fa(p) {
            switch (Gi(p)) {
              case 3:
                return true;
              case 4:
                return true;
              default:
                return false;
            }
          }
          function Fi(p, M) {
            var _ = p[M];
            if (_ != null) {
              if (!Lt(_))
                throw new TypeError();
              return _;
            }
          }
          function Va(p) {
            var M = Fi(p, s);
            if (!Lt(M))
              throw new TypeError();
            var _ = M.call(p);
            if (!fe(_))
              throw new TypeError();
            return _;
          }
          function Ya(p) {
            return p.value;
          }
          function Wa(p) {
            var M = p.next();
            return M.done ? false : M;
          }
          function ka(p) {
            var M = p.return;
            M && M.call(p);
          }
          function jr(p) {
            var M = Object.getPrototypeOf(p);
            if (typeof p != "function" || p === h || M !== h)
              return M;
            var _ = p.prototype, b = _ && Object.getPrototypeOf(_);
            if (b == null || b === Object.prototype)
              return M;
            var S = b.constructor;
            return typeof S != "function" || S === p ? M : S;
          }
          function Ha() {
            var p = {}, M = [], _ = function() {
              function G(N, L, Y) {
                this._index = 0, this._keys = N, this._values = L, this._selector = Y;
              }
              return G.prototype["@@iterator"] = function() {
                return this;
              }, G.prototype[s] = function() {
                return this;
              }, G.prototype.next = function() {
                var N = this._index;
                if (N >= 0 && N < this._keys.length) {
                  var L = this._selector(this._keys[N], this._values[N]);
                  return N + 1 >= this._keys.length ? (this._index = -1, this._keys = M, this._values = M) : this._index++, {value: L, done: false};
                }
                return {value: void 0, done: true};
              }, G.prototype.throw = function(N) {
                throw this._index >= 0 && (this._index = -1, this._keys = M, this._values = M), N;
              }, G.prototype.return = function(N) {
                return this._index >= 0 && (this._index = -1, this._keys = M, this._values = M), {value: N, done: true};
              }, G;
            }();
            return function() {
              function G() {
                this._keys = [], this._values = [], this._cacheKey = p, this._cacheIndex = -2;
              }
              return Object.defineProperty(G.prototype, "size", {get: function() {
                return this._keys.length;
              }, enumerable: true, configurable: true}), G.prototype.has = function(N) {
                return this._find(N, false) >= 0;
              }, G.prototype.get = function(N) {
                var L = this._find(N, false);
                return L >= 0 ? this._values[L] : void 0;
              }, G.prototype.set = function(N, L) {
                var Y = this._find(N, true);
                return this._values[Y] = L, this;
              }, G.prototype.delete = function(N) {
                var L = this._find(N, false);
                if (L >= 0) {
                  for (var Y = this._keys.length, W = L + 1; W < Y; W++)
                    this._keys[W - 1] = this._keys[W], this._values[W - 1] = this._values[W];
                  return this._keys.length--, this._values.length--, N === this._cacheKey && (this._cacheKey = p, this._cacheIndex = -2), true;
                }
                return false;
              }, G.prototype.clear = function() {
                this._keys.length = 0, this._values.length = 0, this._cacheKey = p, this._cacheIndex = -2;
              }, G.prototype.keys = function() {
                return new _(this._keys, this._values, b);
              }, G.prototype.values = function() {
                return new _(this._keys, this._values, S);
              }, G.prototype.entries = function() {
                return new _(this._keys, this._values, ve);
              }, G.prototype["@@iterator"] = function() {
                return this.entries();
              }, G.prototype[s] = function() {
                return this.entries();
              }, G.prototype._find = function(N, L) {
                return this._cacheKey !== N && (this._cacheIndex = this._keys.indexOf(this._cacheKey = N)), this._cacheIndex < 0 && L && (this._cacheIndex = this._keys.length, this._keys.push(N), this._values.push(void 0)), this._cacheIndex;
              }, G;
            }();
            function b(G, N) {
              return G;
            }
            function S(G, N) {
              return N;
            }
            function ve(G, N) {
              return [G, N];
            }
          }
          function ja() {
            return function() {
              function p() {
                this._map = new d();
              }
              return Object.defineProperty(p.prototype, "size", {get: function() {
                return this._map.size;
              }, enumerable: true, configurable: true}), p.prototype.has = function(M) {
                return this._map.has(M);
              }, p.prototype.add = function(M) {
                return this._map.set(M, M), this;
              }, p.prototype.delete = function(M) {
                return this._map.delete(M);
              }, p.prototype.clear = function() {
                this._map.clear();
              }, p.prototype.keys = function() {
                return this._map.keys();
              }, p.prototype.values = function() {
                return this._map.values();
              }, p.prototype.entries = function() {
                return this._map.entries();
              }, p.prototype["@@iterator"] = function() {
                return this.keys();
              }, p.prototype[s] = function() {
                return this.keys();
              }, p;
            }();
          }
          function Xa() {
            var p = 16, M = c.create(), _ = b();
            return function() {
              function L() {
                this._key = b();
              }
              return L.prototype.has = function(Y) {
                var W = S(Y, false);
                return W !== void 0 ? c.has(W, this._key) : false;
              }, L.prototype.get = function(Y) {
                var W = S(Y, false);
                return W !== void 0 ? c.get(W, this._key) : void 0;
              }, L.prototype.set = function(Y, W) {
                var ot = S(Y, true);
                return ot[this._key] = W, this;
              }, L.prototype.delete = function(Y) {
                var W = S(Y, false);
                return W !== void 0 ? delete W[this._key] : false;
              }, L.prototype.clear = function() {
                this._key = b();
              }, L;
            }();
            function b() {
              var L;
              do
                L = "@@WeakMap@@" + N();
              while (c.has(M, L));
              return M[L] = true, L;
            }
            function S(L, Y) {
              if (!r.call(L, _)) {
                if (!Y)
                  return;
                Object.defineProperty(L, _, {value: c.create()});
              }
              return L[_];
            }
            function ve(L, Y) {
              for (var W = 0; W < Y; ++W)
                L[W] = Math.random() * 255 | 0;
              return L;
            }
            function G(L) {
              return typeof Uint8Array == "function" ? typeof crypto != "undefined" ? crypto.getRandomValues(new Uint8Array(L)) : typeof msCrypto != "undefined" ? msCrypto.getRandomValues(new Uint8Array(L)) : ve(new Uint8Array(L), L) : ve(new Array(L), L);
            }
            function N() {
              var L = G(p);
              L[6] = L[6] & 79 | 64, L[8] = L[8] & 191 | 128;
              for (var Y = "", W = 0; W < p; ++W) {
                var ot = L[W];
                (W === 4 || W === 6 || W === 8) && (Y += "-"), ot < 16 && (Y += "0"), Y += ot.toString(16).toLowerCase();
              }
              return Y;
            }
          }
          function Xr(p) {
            return p.__ = void 0, delete p.__, p;
          }
        });
      })(ms || (ms = {}));
    });
    var Pe = B((it) => {
      "use strict";
      Object.defineProperty(it, "__esModule", {value: true});
      it.GL = it.GlobalContext = it.setGlobalContext = void 0;
      var ys, od = (e) => ys = e;
      it.setGlobalContext = od;
      var ld = () => ys;
      it.GlobalContext = ld;
      var cd = () => {
        var e;
        return (e = it.GlobalContext()) === null || e === void 0 ? void 0 : e.gl;
      };
      it.GL = cd;
    });
    var Jt = B((wt) => {
      "use strict";
      Object.defineProperty(wt, "__esModule", {value: true});
      wt.mapGLFormat = wt.TextureFormat = void 0;
      var k;
      (function(e) {
        e[e.RGB = 1] = "RGB", e[e.RGBA = 2] = "RGBA", e[e.LUMINANCE_ALPHA = 3] = "LUMINANCE_ALPHA", e[e.LUMINANCE = 4] = "LUMINANCE", e[e.ALPHA = 5] = "ALPHA", e[e.R8 = 6] = "R8", e[e.R16F = 7] = "R16F", e[e.R32F = 8] = "R32F", e[e.R8UI = 9] = "R8UI", e[e.RG8 = 10] = "RG8", e[e.RG16F = 11] = "RG16F", e[e.RG32F = 12] = "RG32F", e[e.RG8UI = 13] = "RG8UI", e[e.RGB8 = 14] = "RGB8", e[e.SRGB8 = 15] = "SRGB8", e[e.RGB565 = 16] = "RGB565", e[e.R11F_G11F_B10F = 17] = "R11F_G11F_B10F", e[e.RGB9_E5 = 18] = "RGB9_E5", e[e.RGB16F = 19] = "RGB16F", e[e.RGB32F = 20] = "RGB32F", e[e.RGB8UI = 21] = "RGB8UI", e[e.RGBA8 = 22] = "RGBA8", e[e.SRGB8_ALPHA8 = 23] = "SRGB8_ALPHA8", e[e.RGB5_A1 = 24] = "RGB5_A1", e[e.RGB10_A2 = 25] = "RGB10_A2", e[e.RGBA4 = 26] = "RGBA4", e[e.RGBA16F = 27] = "RGBA16F", e[e.RGBA32F = 28] = "RGBA32F", e[e.RGBA8UI = 29] = "RGBA8UI", e[e.DEPTH_COMPONENT = 30] = "DEPTH_COMPONENT", e[e.DEPTH_STENCIL = 31] = "DEPTH_STENCIL";
      })(k = wt.TextureFormat || (wt.TextureFormat = {}));
      function hd(e, t) {
        return {[k.RGB]: [e.RGB, e.RGB, e.UNSIGNED_BYTE], [k.RGBA]: [e.RGBA, e.RGBA, e.UNSIGNED_BYTE], [k.LUMINANCE_ALPHA]: [e.LUMINANCE_ALPHA, e.LUMINANCE_ALPHA, e.UNSIGNED_BYTE], [k.LUMINANCE]: [e.LUMINANCE, e.LUMINANCE, e.UNSIGNED_BYTE], [k.ALPHA]: [e.ALPHA, e.ALPHA, e.UNSIGNED_BYTE], [k.R8]: [e.R8, e.RED, e.UNSIGNED_BYTE], [k.R16F]: [e.R16F, e.RED, e.HALF_FLOAT], [k.R32F]: [e.R32F, e.RED, e.FLOAT], [k.R8UI]: [e.R8UI, e.RED_INTEGER, e.UNSIGNED_BYTE], [k.RG8]: [e.RG8, e.RG, e.UNSIGNED_BYTE], [k.RG16F]: [e.RG16F, e.RG, e.HALF_FLOAT], [k.RG32F]: [e.RG32F, e.RG, e.FLOAT], [k.RG8UI]: [e.RG8UI, e.RG_INTEGER, e.UNSIGNED_BYTE], [k.RGB8]: [e.RGB8, e.RGB, e.UNSIGNED_BYTE], [k.SRGB8]: [e.SRGB8, e.RGB, e.UNSIGNED_BYTE], [k.RGB565]: [e.RGB565, e.RGB, e.UNSIGNED_BYTE], [k.R11F_G11F_B10F]: [e.R11F_G11F_B10F, e.RGB, e.UNSIGNED_INT_10F_11F_11F_REV], [k.RGB9_E5]: [e.RGB9_E5, e.RGB, e.HALF_FLOAT], [k.RGB16F]: [e.RGB16F, e.RGB, e.HALF_FLOAT], [k.RGB32F]: [e.RGB32F, e.RGB, e.FLOAT], [k.RGB8UI]: [e.RGB8UI, e.RGB_INTEGER, e.UNSIGNED_BYTE], [k.RGBA8]: [e.RGBA8, e.RGBA, e.UNSIGNED_BYTE], [k.SRGB8_ALPHA8]: [e.SRGB8_ALPHA8, e.RGBA, e.UNSIGNED_BYTE], [k.RGB5_A1]: [e.RGB5_A1, e.RGBA, e.UNSIGNED_BYTE], [k.RGB10_A2]: [e.RGB10_A2, e.RGBA, e.UNSIGNED_INT_2_10_10_10_REV], [k.RGBA4]: [e.RGBA4, e.RGBA, e.UNSIGNED_BYTE], [k.RGBA16F]: [e.RGBA16F, e.RGBA, e.HALF_FLOAT], [k.RGBA32F]: [e.RGBA32F, e.RGBA, e.FLOAT], [k.RGBA8UI]: [e.RGBA8UI, e.RGBA_INTEGER, e.UNSIGNED_BYTE], [k.DEPTH_COMPONENT]: [e.DEPTH_COMPONENT, e.DEPTH_COMPONENT, e.UNSIGNED_INT], [k.DEPTH_STENCIL]: [e.DEPTH_STENCIL, e.DEPTH_COMPONENT, e.UNSIGNED_INT]}[t];
      }
      wt.mapGLFormat = hd;
    });
    var We = B((de) => {
      "use strict";
      Object.defineProperty(de, "__esModule", {value: true});
      de.setImmediate = de.DoubleBuffer = de.fillArray = de.getUniformsLocation = de.decorator = de.warn = de.panic = de.panicNull = void 0;
      _r();
      function ud(e, t) {
        if (e === null)
          throw new Error(t);
        return e;
      }
      de.panicNull = ud;
      function fd(e) {
        throw new Error(e);
      }
      de.panic = fd;
      function dd(e) {
        return console.warn(e), null;
      }
      de.warn = dd;
      function vd(e, t = void 0, r = (i) => i) {
        let i = Symbol(e);
        return [(n) => (n === void 0 && (n = t), Reflect.metadata(i, r(n))), (n, s) => s === void 0 ? Reflect.getMetadata(i, n) : Reflect.getMetadata(i, n, s)];
      }
      de.decorator = vd;
      function pd(e, t, r) {
        let i = {};
        for (let n in r)
          i[n] = e.getUniformLocation(t, r[n]);
        return i;
      }
      de.getUniformsLocation = pd;
      function md(e, t) {
        let r = new Array(t);
        for (let i = 0; i < t; i++)
          r[i] = typeof e == "function" ? e(i) : e;
        return r;
      }
      de.fillArray = md;
      var gs = class {
        constructor(t) {
          this.currentIdx = 0, this.buffers = [t(), t()];
        }
        get current() {
          return this.buffers[this.currentIdx % 2];
        }
        set current(t) {
          this.buffers[this.currentIdx % 2] = t;
        }
        get back() {
          return this.buffers[(this.currentIdx + 1) % 2];
        }
        set back(t) {
          this.buffers[(this.currentIdx + 1) % 2] = t;
        }
        update() {
          this.currentIdx++;
        }
      };
      de.DoubleBuffer = gs;
      function yd(e) {
        setTimeout(e, 0);
      }
      de.setImmediate = yd;
    });
    var li = B((br) => {
      "use strict";
      Object.defineProperty(br, "__esModule", {value: true});
      br.EventEmitter = void 0;
      var Ms = class {
        constructor() {
          this.listeners = new Map();
        }
        on(t, r) {
          var i;
          this.listeners.has(t) || this.listeners.set(t, []), (i = this.listeners.get(t)) === null || i === void 0 || i.push(r);
        }
        off(t, r) {
          var i, n;
          this.listeners.has(t) && this.listeners.set(t, (n = (i = this.listeners.get(t)) === null || i === void 0 ? void 0 : i.filter((s) => s !== r)) !== null && n !== void 0 ? n : []);
        }
        emit(t, ...r) {
          var i;
          (i = this.listeners.get(t)) === null || i === void 0 || i.forEach((n) => n(...r));
        }
      };
      br.EventEmitter = Ms;
    });
    var Tt = B((Xe) => {
      "use strict";
      Object.defineProperty(Xe, "__esModule", {value: true});
      Xe.AssetManager = Xe.LazyInitAsset = Xe.Asset = void 0;
      var xs = We(), gd = li(), _s = Pe(), ci = class {
        constructor(t) {
          this.destroyed = false, this.assetID = Xe.AssetManager.newAssetID(this), this.name = t || `Asset_${this.assetID}`;
        }
        destroy() {
          this.destroyed = true, Xe.AssetManager.destroy(this.assetID);
        }
      };
      Xe.Asset = ci;
      var bs = class extends ci {
        constructor(t = _s.GlobalContext()) {
          super();
          this.initialzed = false, this.ctx = t;
        }
        tryInit(t = false) {
          if (this.initialzed)
            return true;
          let r = this.ctx || _s.GlobalContext();
          if (!r) {
            if (t)
              throw new Error("Failed to initialize GPU resource withou a global GL context.");
            return false;
          }
          if (this.ctx = r, this.init())
            return this.initialzed = true, true;
          if (t)
            throw new Error("Failed to initialize required GPU resource.");
          return false;
        }
      };
      Xe.LazyInitAsset = bs;
      var Rs = class {
        constructor() {
          this.assetsMap = new Map(), this.id = 1, this.eventEmitter = new gd.EventEmitter();
        }
        newAssetID(t) {
          let r = ++this.id;
          return this.assetsMap.set(r, t), xs.setImmediate(() => this.eventEmitter.emit("asset-created", t)), t.assetID = r;
        }
        find(t) {
          if (typeof t == "number")
            return this.assetsMap.get(t);
          if (typeof t == "string") {
            for (let r of this.assetsMap.values())
              if (r.name === t)
                return r;
          }
        }
        destroy(t) {
          let r = this.assetsMap.get(t);
          !r || (this.assetsMap.delete(t), xs.setImmediate(() => this.eventEmitter.emit("asset-destroyed", r)));
        }
        findAssetsOfType(t) {
          return Array.from(this.assetsMap.values()).filter((r) => r instanceof t);
        }
        on(t, r) {
          return this.eventEmitter.on(t, r);
        }
        off(t, r) {
          return this.eventEmitter.off(t, r);
        }
      };
      Xe.AssetManager = new Rs();
    });
    var fi = B((ge) => {
      "use strict";
      Object.defineProperty(ge, "__esModule", {value: true});
      ge.Shader = ge.DefaultShaderAttributeNames = ge.Culling = ge.Blending = ge.DepthTest = void 0;
      var Rr = We(), ws = Pe(), Md = Ft(), xd = We(), _d = Tt(), hi;
      (function(e) {
        e[e.Disable = -1] = "Disable", e[e.Always = WebGL2RenderingContext.ALWAYS] = "Always", e[e.Never = WebGL2RenderingContext.NEVER] = "Never", e[e.Less = WebGL2RenderingContext.LESS] = "Less", e[e.Equal = WebGL2RenderingContext.EQUAL] = "Equal", e[e.LEqual = WebGL2RenderingContext.LEQUAL] = "LEqual", e[e.Greater = WebGL2RenderingContext.GREATER] = "Greater", e[e.NotEqual = WebGL2RenderingContext.NOTEQUAL] = "NotEqual", e[e.GEqual = WebGL2RenderingContext.GEQUAL] = "GEqual";
      })(hi = ge.DepthTest || (ge.DepthTest = {}));
      var ft;
      (function(e) {
        e[e.Disable = -1] = "Disable", e[e.Zero = WebGL2RenderingContext.ZERO] = "Zero", e[e.One = WebGL2RenderingContext.ONE] = "One", e[e.SrcColor = WebGL2RenderingContext.SRC_COLOR] = "SrcColor", e[e.OneMinusSrcColor = WebGL2RenderingContext.ONE_MINUS_SRC_COLOR] = "OneMinusSrcColor", e[e.DstColor = WebGL2RenderingContext.DST_COLOR] = "DstColor", e[e.OneMinusDstColor = WebGL2RenderingContext.ONE_MINUS_DST_COLOR] = "OneMinusDstColor", e[e.SrcAlpha = WebGL2RenderingContext.SRC_ALPHA] = "SrcAlpha", e[e.OneMinusSrcAlpha = WebGL2RenderingContext.ONE_MINUS_SRC_ALPHA] = "OneMinusSrcAlpha", e[e.DstAlpha = WebGL2RenderingContext.DST_ALPHA] = "DstAlpha", e[e.OneMinusDstAlpha = WebGL2RenderingContext.ONE_MINUS_DST_ALPHA] = "OneMinusDstAlpha";
      })(ft = ge.Blending || (ge.Blending = {}));
      var ui;
      (function(e) {
        e[e.Disable = -1] = "Disable", e[e.Back = WebGL2RenderingContext.BACK] = "Back", e[e.Front = WebGL2RenderingContext.FRONT] = "Front", e[e.Both = WebGL2RenderingContext.FRONT_AND_BACK] = "Both";
      })(ui = ge.Culling || (ge.Culling = {}));
      ge.DefaultShaderAttributeNames = {vert: "aPos", color: "aColor", uv: "aUV", uv2: "aUV2", normal: "aNormal"};
      var Ts = class extends _d.Asset {
        constructor(t, r, i = {}, n = ws.GL()) {
          super(i.name);
          this.attributes = null, this.initialized = false, this.gl = null, this.program = null, this.vertexShader = null, this.fragmentShader = null, this.pipelineStates = null, this.builtinUniformLocations = null, this._compiled = false, i.name || (this.name = `Shader_${this.assetID}`), this.vertexShaderSource = t, this.fragmentShaderSouce = r, this.options = i, this.gl = n, this.tryInit();
        }
        get compiled() {
          return this._compiled;
        }
        uniformLocation(t) {
          return this.tryInit(true), this.gl.getUniformLocation(this.program, t);
        }
        use() {
          this.tryInit(true), this.gl.useProgram(this.program);
        }
        setupPipelineStates() {
          let t = this.gl;
          if (this.pipelineStates.depth === hi.Disable ? t.disable(t.DEPTH_TEST) : (t.enable(t.DEPTH_TEST), t.depthMask(this.pipelineStates.zWrite), t.depthFunc(this.pipelineStates.depth)), !this.pipelineStates.blend)
            t.disable(t.BLEND);
          else {
            let [r, i] = this.pipelineStates.blendRGB, [n, s] = this.pipelineStates.blendAlpha;
            t.enable(t.BLEND), t.blendFuncSeparate(r, i, n, s);
          }
          this.pipelineStates.cull === ui.Disable ? t.disable(t.CULL_FACE) : (t.enable(t.CULL_FACE), t.cullFace(this.pipelineStates.cull), t.frontFace(t.CCW));
        }
        setupBuiltinUniform(t) {
          this.tryInit(true);
          let r = this.gl;
          this.builtinUniformLocations.matM && r.uniformMatrix4fv(this.builtinUniformLocations.matM, false, t.matM), this.builtinUniformLocations.matVP && r.uniformMatrix4fv(this.builtinUniformLocations.matVP, false, t.matVP), this.builtinUniformLocations.matMVP && r.uniformMatrix4fv(this.builtinUniformLocations.matMVP, false, t.matMVP), this.builtinUniformLocations.matM_IT && r.uniformMatrix4fv(this.builtinUniformLocations.matM_IT, false, t.matM_IT), this.builtinUniformLocations.matMV_IT && r.uniformMatrix4fv(this.builtinUniformLocations.matMV_IT, false, t.matMV_IT);
        }
        setPipelineStates(t) {
          this.options = Object.assign(Object.assign({}, this.options), t), this.initialized && this.setPipelineStateInternal(t);
        }
        setPipelineStateInternal(t) {
          let r = false, i = [ft.One, ft.Zero], n = [ft.One, ft.OneMinusSrcAlpha];
          typeof t.blend == "number" && t.blend !== ft.Disable ? (r = true, i = [t.blend, t.blend], n = [t.blend, t.blend]) : t.blend instanceof Array && (r = true, i = t.blend), t.blendRGB && (r = t.blend !== false && t.blend !== ft.Disable, i = t.blendRGB), t.blendAlpha && (r = t.blend !== false && t.blend !== ft.Disable, n = t.blendAlpha), this.pipelineStates = {depth: t.depth || hi.Less, blend: r, blendRGB: i, blendAlpha: n, zWrite: t.zWrite !== false, cull: t.cull || ui.Back};
        }
        _internal() {
          return this.tryInit(true), {attributes: this.attributes, options: this.options};
        }
        tryInit(t = false) {
          if (this.initialized)
            return true;
          let r = this.gl || ws.GL();
          if (!r)
            return t ? Rr.panic("Failed to init shader without a global GL context") : false;
          this.gl = r, this.program = Rr.panicNull(r.createProgram(), "Failed to create shader program"), this.vertexShader = Rr.panicNull(r.createShader(r.VERTEX_SHADER), "Failed to create vertex shader"), this.fragmentShader = Rr.panicNull(r.createShader(r.FRAGMENT_SHADER), "Failed to create fragment shader"), this.compile(), r.useProgram(this.program);
          let i = Object.assign(Object.assign({}, ge.DefaultShaderAttributeNames), this.options.attributes);
          this.attributes = {};
          for (let n in i)
            this.attributes[n] = r.getAttribLocation(this.program, i[n]);
          return this.setPipelineStateInternal(this.options), this.builtinUniformLocations = xd.getUniformsLocation(r, this.program, Md.BuiltinUniformNames), this.initialized = true, true;
        }
        compile() {
          if (this.gl.shaderSource(this.vertexShader, this.vertexShaderSource), this.gl.compileShader(this.vertexShader), !this.gl.getShaderParameter(this.vertexShader, this.gl.COMPILE_STATUS))
            throw new Error(`Failed to compile vertex shader:\r
` + this.gl.getShaderInfoLog(this.vertexShader));
          if (this.gl.shaderSource(this.fragmentShader, this.fragmentShaderSouce), this.gl.compileShader(this.fragmentShader), !this.gl.getShaderParameter(this.fragmentShader, this.gl.COMPILE_STATUS))
            throw new Error(`Failed to compile fragment shader:\r
` + this.gl.getShaderInfoLog(this.fragmentShader));
          if (this.gl.attachShader(this.program, this.vertexShader), this.gl.attachShader(this.program, this.fragmentShader), this.gl.linkProgram(this.program), !this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS))
            throw new Error(`Failed to link shader program:\r
` + this.gl.getProgramInfoLog(this.program));
        }
      };
      ge.Shader = Ts;
    });
    var Ft = B((Ee) => {
      "use strict";
      Object.defineProperty(Ee, "__esModule", {value: true});
      Ee.compileBuiltinShaders = Ee.BuiltinUniformNames = Ee.BuiltinShaderSources = void 0;
      var Qe = fi(), As = `#version 300 es
precision mediump float;

in vec3 aPos;
in vec4 aColor;
in vec2 aUV;
in vec3 aNormal;

uniform mat4 uTransformM;
uniform mat4 uTransformVP;
uniform mat4 uTransformMVP;

out vec4 vColor;
out vec4 vPos;
out vec2 vUV;
out vec3 vNormal;

void main()
{
    gl_Position = uTransformMVP * vec4(aPos, 1);
    vColor = aColor;
    vUV = aUV;
    vNormal = aNormal;
}
`, bd = `#version 300 es
precision mediump float;

in vec4 vColor;
in vec4 vPos;
in vec2 vUV;

uniform sampler2D uMainTex;
uniform vec4 uColor;

out vec4 fragColor;

void main()
{
    vec4 color = texture(uMainTex, vUV.xy).rgba;
    color = color * vColor * uColor;
    fragColor = color;
}
`, Rd = `#version 300 es
precision mediump float;

in vec4 vColor;
in vec4 vPos;
in vec2 vUV;
in vec3 vNormal;

uniform sampler2D uMainTex;

out vec4 fragColor;

void main()
{
    fragColor = texture(uMainTex, vUV).rgba;
}
`, wd = `#version 300 es
precision mediump float;

in vec3 aPos;
in vec2 aUV;

out vec2 vUV;

void main()
{
    gl_Position = vec4(aPos, 1);
    vUV = vec2(aUV.x, vec2(1) - aUV.y);
}`, Td = `#version 300 es
precision mediump float;

in vec3 aPos;
in vec4 aColor;

uniform mat4 uTransformM;
uniform mat4 uTransformVP;
uniform mat4 uTransformMVP;

out vec4 vColor;
out vec4 vPos;

void main()
{
    gl_Position = uTransformMVP * vec4(aPos, 1);
    vColor = aColor;
}
`, Ad = `#version 300 es
precision mediump float;

in vec4 vColor;
in vec4 vPos;

out vec4 fragColor;

void main()
{
    fragColor = vColor;
}
`, Pd = `#version 300 es
precision mediump float;

in vec4 vPos;
in vec2 vUV;

uniform sampler2D uMainTex;

out vec4 fragColor;

void main()
{
    fragColor = texture(uMainTex, vUV).rgba;
}
`;
      Ee.BuiltinShaderSources = {DefaultVert: As, DefaultFrag: bd, BlitCopyFrag: Rd, FlipTexVert: wd};
      Ee.BuiltinUniformNames = {matM: "uTransformM", matM_IT: "uTransformM_IT", matMInv: "uTransformMInv", matVP: "uTransformVP", matMVP: "uTransformMVP", matMV_IT: "uTransformMV_IT", flipUV: "uFlipUV", mainTex: "uMainTex", color: "uColor"};
      function Ed(e) {
        return {DefaultShader: new Qe.Shader(Ee.BuiltinShaderSources.DefaultVert, Ee.BuiltinShaderSources.DefaultFrag, {name: "DefaultShader"}, e), BlitCopy: new Qe.Shader(Ee.BuiltinShaderSources.DefaultVert, Ee.BuiltinShaderSources.BlitCopyFrag, {name: "BlitCopy", depth: Qe.DepthTest.Always, blend: Qe.Blending.Disable, zWrite: false}, e), FlipTexture: new Qe.Shader(Ee.BuiltinShaderSources.FlipTexVert, Ee.BuiltinShaderSources.BlitCopyFrag, {}, e), ColoredLine: new Qe.Shader(Td, Ad, {blend: [Qe.Blending.SrcAlpha, Qe.Blending.OneMinusSrcAlpha], depth: Qe.DepthTest.Disable, zWrite: false}, e), ErrorShader: new Qe.Shader(As, Pd, {name: "Error"}, e)};
      }
      Ee.compileBuiltinShaders = Ed;
    });
    var di = B((At) => {
      "use strict";
      Object.defineProperty(At, "__esModule", {value: true});
      At.imageResize = At.ImageSizing = void 0;
      var Ps = xr(), Es = Ce(), we;
      (function(e) {
        e[e.Stretch = 1] = "Stretch", e[e.Cover = 2] = "Cover", e[e.Contain = 3] = "Contain", e[e.KeepLower = 4] = "KeepLower", e[e.KeepHigher = 5] = "KeepHigher", e[e.Center = 6] = "Center";
      })(we = At.ImageSizing || (At.ImageSizing = {}));
      function Sd(e, t, r) {
        let i = new Ps.Rect(Es.vec2.zero(), e), n = new Ps.Rect(Es.vec2.zero(), t);
        if (r === we.Contain) {
          let s = e.x / e.y, a = t.x / t.y;
          if (s > a) {
            let o = t.y - e.y * (t.x / e.x);
            n.min.y += o / 2, n.max.y -= o / 2;
          } else {
            let o = t.x - e.x * (t.y / e.y);
            n.min.x += o / 2, n.max.x -= o / 2;
          }
        } else if (r === we.Cover) {
          let s = e.x / e.y, a = t.x / t.y;
          if (s > a) {
            let o = e.x - t.x * (e.y / t.y);
            i.min.x += o / 2, i.max.x -= o / 2;
          } else {
            let o = e.y - t.y * (e.x / t.x);
            i.min.y += o / 2, i.max.y -= o / 2;
          }
        } else {
          if (e.x < t.x)
            switch (r) {
              case we.Center:
                let s = t.x - e.x;
                n.min.x += s / 2, n.max.x -= s / 2;
                break;
              case we.KeepHigher:
                n.min.x = t.x - e.x;
                break;
              case we.KeepLower:
                n.max.x = e.x;
                break;
            }
          else if (e.x > t.x)
            switch (r) {
              case we.Center:
                let s = e.x - t.x;
                i.min.x += s / 2, i.max.x -= s / 2;
                break;
              case we.KeepHigher:
                i.min.x = e.x - t.x;
                break;
              case we.KeepLower:
                i.max.x = t.x;
                break;
            }
          if (e.y < t.y)
            switch (r) {
              case we.Center:
                let s = t.y - e.y;
                n.min.y += s / 2, n.max.y -= s / 2;
                break;
              case we.KeepHigher:
                n.min.y = t.y - e.y;
                break;
              case we.KeepLower:
                n.max.y = e.y;
                break;
            }
          else if (e.y > t.y)
            switch (r) {
              case we.Center:
                let s = e.y - t.y;
                i.min.y += s / 2, i.max.y -= s / 2;
                break;
              case we.KeepHigher:
                i.min.y = e.y - t.y;
                break;
              case we.KeepLower:
                i.max.y = t.y;
                break;
            }
        }
        return [i, n];
      }
      At.imageResize = Sd;
    });
    var Kt = B((he) => {
      "use strict";
      Object.defineProperty(he, "__esModule", {value: true});
      he.RenderTexture = he.DepthTexture = he.Texture2D = he.TextureResizing = he.Texture = he.WrapMode = he.FilterMode = void 0;
      var Vt = Pe(), Pt = Jt(), vi = We(), Ss = Tt(), Od = Ft(), Dd = Ce(), Bd = di(), Yt;
      (function(e) {
        e[e.Linear = WebGL2RenderingContext.LINEAR] = "Linear", e[e.Nearest = WebGL2RenderingContext.NEAREST] = "Nearest";
      })(Yt = he.FilterMode || (he.FilterMode = {}));
      var Os;
      (function(e) {
        e[e.Repeat = WebGL2RenderingContext.REPEAT] = "Repeat", e[e.Clamp = WebGL2RenderingContext.CLAMP_TO_EDGE] = "Clamp", e[e.Mirror = WebGL2RenderingContext.MIRRORED_REPEAT] = "Mirror";
      })(Os = he.WrapMode || (he.WrapMode = {}));
      var Ds = class extends Ss.Asset {
      };
      he.Texture = Ds;
      var pi;
      (function(e) {
        e[e.Discard = 0] = "Discard", e[e.Stretch = 1] = "Stretch", e[e.Cover = 2] = "Cover", e[e.Contain = 3] = "Contain", e[e.KeepLower = 4] = "KeepLower", e[e.KeepHigher = 5] = "KeepHigher", e[e.Center = 6] = "Center";
      })(pi = he.TextureResizing || (he.TextureResizing = {}));
      var Et = class extends Ss.Asset {
        constructor(t, r, i = Pt.TextureFormat.RGBA, n = Yt.Linear, s = Vt.GlobalContext()) {
          super();
          this.autoMipmap = true, this.wrapMode = Os.Repeat, this._glTex = null, this.initialized = false, this.created = false, this.name = `Texture_${this.assetID}`, this.ctx = s, this.format = i, this.width = t, this.height = r, this.filterMode = n, this.tryInit(false);
        }
        get size() {
          return Dd.vec2(this.width, this.height);
        }
        glTex() {
          return this.create(), this._glTex;
        }
        bind(t) {
          this.create();
          let r = this.ctx.gl;
          r.activeTexture(r.TEXTURE0 + t), r.bindTexture(r.TEXTURE_2D, this._glTex);
        }
        unbind(t) {
          this.create();
          let r = this.ctx.gl;
          r.activeTexture(r.TEXTURE0 + t), r.bindTexture(r.TEXTURE_2D, null);
        }
        destroy() {
          if (!this.initialized || this.destroyed)
            return;
          this.ctx.gl.deleteTexture(this._glTex), super.destroy();
        }
        resize(t, r, i = pi.Discard) {
          this.tryInit(true);
          let n = this.ctx.gl, s = Et.wrapGlTex(this._glTex, this.width, this.height, this.format, this.filterMode, this.ctx), a = new wr(t, r, false, this.format, this.filterMode, this.ctx);
          a.wrapMode = this.wrapMode, a.autoMipmap = this.autoMipmap, a.create(), a.updateParameters();
          let o = this.size;
          switch (this.width = t, this.height = r, i) {
            case pi.Discard:
              break;
            default:
              let [l, c] = Bd.imageResize(o, a.size, i);
              this.ctx.renderer.blit(s, a, this.ctx.assets.materials.blitCopy, l, c);
              break;
          }
          this.autoMipmap && a.generateMipmap(), this._glTex = a._glTex, n.deleteTexture(s._glTex);
        }
        generateMipmap() {
          this.create();
          let t = this.ctx.gl;
          t.bindTexture(t.TEXTURE_2D, this._glTex), t.generateMipmap(t.TEXTURE_2D);
        }
        updateParameters() {
          this.create();
          let t = this.ctx.gl;
          t.bindTexture(t.TEXTURE_2D, this._glTex), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, this.filterMode), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, this.filterMode), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, this.wrapMode), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, this.wrapMode);
        }
        create() {
          if (this.created)
            return;
          this.tryInit(true);
          let t = this.ctx.gl;
          t.bindTexture(t.TEXTURE_2D, this._glTex);
          let [r, i, n] = Pt.mapGLFormat(t, this.format);
          t.texImage2D(t.TEXTURE_2D, 0, r, this.width, this.height, 0, i, n, null), this.created = true, this.updateParameters();
        }
        setData(t) {
          this.create();
          let r = this.ctx.gl;
          r.bindTexture(r.TEXTURE_2D, this._glTex), Id(this.ctx, this._glTex, t, this.width, this.height, this.format, this.filterMode, this.wrapMode, 0);
        }
        tryInit(t = false) {
          var r;
          if (this.initialized)
            return true;
          let i = this.ctx || Vt.GlobalContext();
          if (!i) {
            if (t)
              throw new Error("Failed to initialize texture without a global GL context");
            return false;
          }
          let n = i.gl;
          return this._glTex = (r = n.createTexture()) !== null && r !== void 0 ? r : vi.panic("Failed to create texture."), this.initialized = true, true;
        }
        static wrapGlTex(t, r, i, n = Pt.TextureFormat.RGBA, s = Yt.Linear, a = Vt.GlobalContext()) {
          var o = new Et(r, i, n, s, a);
          return o._glTex = t, o.initialized = true, o.created = true, o;
        }
      }, Tr = class extends Et {
        constructor(t = 0, r = 0, i = Pt.TextureFormat.RGBA, n = Yt.Linear, s = Vt.GlobalContext()) {
          super(t, r, i, n, s);
        }
        setData(t) {
          t.width !== void 0 && t.height !== void 0 && (t = t, this.width = t.width, this.height = t.height), super.setData(t);
        }
        clone() {
          this.created || this.create();
          let t = new wr(this.width, this.height, false, this.format, this.filterMode, this.ctx);
          this.ctx.renderer.blit(this, t);
          let r = new Tr(this.width, this.height, this.format, this.filterMode, this.ctx);
          return r._glTex = t.glTex(), r.initialized = true, r.created = true, r;
        }
      };
      he.Texture2D = Tr;
      var mi = class extends Et {
        constructor(t, r, i = Vt.GlobalContext()) {
          super(t, r, Pt.TextureFormat.DEPTH_COMPONENT, Yt.Nearest, i);
        }
        create() {
          super.create();
        }
      };
      he.DepthTexture = mi;
      var wr = class extends Et {
        constructor(t, r, i = false, n = Pt.TextureFormat.RGBA, s = Yt.Linear, a = Vt.GlobalContext()) {
          super(t, r, n, s, a);
          this.depthTexture = null, i && (this.depthTexture = new mi(t, r, a));
        }
        setData(t) {
          super.setData(t);
        }
        destroy() {
          var t;
          !this.initialized || this.destroyed || ((t = this.depthTexture) === null || t === void 0 || t.destroy(), super.destroy());
        }
      };
      he.RenderTexture = wr;
      function Id(e, t, r, i, n, s, a, o, l) {
        var c, h;
        let u = e.gl, d = e.renderer, f = (c = u.createTexture()) !== null && c !== void 0 ? c : vi.panic("Failed to create texture."), [m, g, v] = Pt.mapGLFormat(u, s);
        u.bindTexture(u.TEXTURE_2D, f), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, u.NEAREST), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, u.NEAREST), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_S, o), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_WRAP_T, o), r.width !== void 0 && r.height !== void 0 ? (r = r, u.texImage2D(u.TEXTURE_2D, l, m, g, v, r)) : (r = r, u.texImage2D(u.TEXTURE_2D, l, m, i, n, 0, g, v, r));
        let x = (h = u.createFramebuffer()) !== null && h !== void 0 ? h : vi.panic("Failed to create frame buffer");
        u.bindFramebuffer(u.FRAMEBUFFER, x), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, t, 0), u.viewport(0, 0, i, n), u.drawBuffers([u.COLOR_ATTACHMENT0]);
        let A = e.assets.shaders.FlipTexture;
        A.use(), u.activeTexture(u.TEXTURE0), u.bindTexture(u.TEXTURE_2D, f), u.uniform1i(A.uniformLocation(Od.BuiltinUniformNames.mainTex), 0);
        let w = e.assets.meshes.screenQuad;
        w.bind(A), u.drawElements(u.TRIANGLE_STRIP, w.triangles.length, u.UNSIGNED_INT, 0), u.activeTexture(u.TEXTURE0), u.bindTexture(u.TEXTURE_2D, null), u.deleteFramebuffer(x), u.bindFramebuffer(u.FRAMEBUFFER, null), u.deleteTexture(f);
      }
    });
    var Pr = B((Se) => {
      "use strict";
      var Bs = Se && Se.__decorate || function(e, t, r, i) {
        var n = arguments.length, s = n < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, r) : i, a;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          s = Reflect.decorate(e, t, r, i);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (a = e[o]) && (s = (n < 3 ? a(s) : n > 3 ? a(t, r, s) : a(t, r)) || s);
        return n > 3 && s && Object.defineProperty(t, r, s), s;
      };
      Object.defineProperty(Se, "__esModule", {value: true});
      Se.materialDefine = Se.SimpleTexturedMaterial = Se.MaterialFromShader = Se.shaderProp = Se.Material = void 0;
      var Cd = xt();
      _r();
      var Ar = Pe();
      _r();
      var Ld = Kt(), zd = Tt(), Is = Ft(), Cs;
      (function(e) {
        e[e.Field = 0] = "Field", e[e.Dynamic = 1] = "Dynamic";
      })(Cs || (Cs = {}));
      var yi = class extends zd.Asset {
        constructor(t, r = Ar.GL()) {
          super();
          this.properties = {}, this.textureCount = 0, this.initialized = false, this.name = `Material_${this.assetID}`, this.gl = r, this._shader = t;
        }
        get shader() {
          return this._shader;
        }
        upload(t) {
          this.tryInit(true);
          for (let r in this.properties) {
            let i = this.properties[r], n = i.key ? this[i.key] : i.value;
            n !== void 0 && this.uploadUniform(i, n);
          }
        }
        setProp(t, r, i) {
          this.tryInit(true);
          let n = this.getOrCreatePropInfo(t, r);
          if (r !== n.type) {
            console.warn("Uniform type missmatch");
            return;
          }
          n.key ? this[n.key] = i : n.value = i;
        }
        unbindRenderTextures() {
          this.tryInit(true);
          let t = this.gl;
          for (let r in this.properties) {
            let i = this.properties[r];
            i.uploaded instanceof Ld.RenderTexture && (i.uploaded.unbind(i.textureUnit), i.uploaded = null);
          }
        }
        tryInit(t = false) {
          if (this.initialized)
            return true;
          let r = this.gl || Ar.GL();
          if (!r) {
            if (t)
              throw new Error("Failed to intialize material without global GL context");
            return false;
          }
          this.gl = r;
          for (let i in this) {
            let n = qd(this, i);
            if (!n)
              continue;
            let s = this.getOrCreatePropInfo(n.name, n.type);
            s.key = i;
          }
          return this.initialized = true, true;
        }
        setUniformDirectly(t, r, i) {
          if (i === void 0)
            throw new Error("");
          this.tryInit(true);
          let n = this.getOrCreatePropInfo(t, r);
          !n.location || this.uploadUniform(n, i);
        }
        getOrCreatePropInfo(t, r) {
          let i = this.properties[t];
          if (i)
            return i;
          switch (r) {
            case "tex2d":
              i = {type: r, uploaded: void 0, location: this.shader.uniformLocation(t), textureUnit: this.textureCount++};
              break;
            default:
              i = {type: r, location: this.shader.uniformLocation(t), uploaded: void 0};
          }
          return this.properties[t] = i, i;
        }
        uploadUniform(t, r) {
          let i = this.gl, n = Ar.GlobalContext();
          if (!t.location)
            return false;
          let s = false;
          if (t.uploaded === null && r === null && t.type !== "tex2d")
            return false;
          switch (t.type) {
            case "float":
              i.uniform1f(t.location, r);
              break;
            case "vec2":
              i.uniform2fv(t.location, r);
              break;
            case "vec3":
              i.uniform3fv(t.location, r);
              break;
            case "vec4":
              i.uniform4fv(t.location, r);
              break;
            case "color":
              i.uniform4fv(t.location, r);
              break;
            case "mat4":
              i.uniformMatrix4fv(t.location, false, r);
              break;
            case "tex2d":
              r = r || n.renderer.assets.textures.default, r.bind(t.textureUnit), t.uniformSet || (i.uniform1i(t.location, t.textureUnit), t.uniformSet = true);
              break;
          }
          t.uploaded = r;
        }
      };
      Se.Material = yi;
      var Ls = Symbol("shaderProp");
      function gi(e, t) {
        return Reflect.metadata(Ls, {name: e, type: t});
      }
      Se.shaderProp = gi;
      function qd(e, t) {
        return Reflect.getMetadata(Ls, e, t);
      }
      function zs(e) {
        return class extends yi {
          constructor(r = Ar.GL()) {
            super(e, r);
          }
        };
      }
      Se.MaterialFromShader = zs;
      function Gd(e) {
        class t extends zs(e) {
          constructor() {
            super(...arguments);
            this.texture = null, this.color = new Cd.Color(1, 1, 1, 1);
          }
        }
        return Bs([gi(Is.BuiltinUniformNames.mainTex, "tex2d")], t.prototype, "texture", void 0), Bs([gi(Is.BuiltinUniformNames.color, "color")], t.prototype, "color", void 0), t;
      }
      Se.SimpleTexturedMaterial = Gd;
      function Ud(e) {
        return class extends e {
          constructor(...t) {
            super(...t);
          }
        };
      }
      Se.materialDefine = Ud;
    });
    var Mi = B((qs) => {
      "use strict";
      Object.defineProperty(qs, "__esModule", {value: true});
      var c1 = Pr();
    });
    var Sr = B((Er) => {
      "use strict";
      Object.defineProperty(Er, "__esModule", {value: true});
      Er.Mesh = void 0;
      var Gs = et(), Us = Ce(), Nd = xt(), Ns = Pe(), St = We(), xi = Ut(), Fd = Tt(), Fs = 14, Vs = class extends Fd.Asset {
        constructor(t = Ns.GL()) {
          super();
          this._verts = [], this._triangles = [], this._uvs = [], this._uv2 = [], this._colors = [], this._normals = [], this.dirty = true, this.uploaded = false, this.vertices = new Float32Array(0), this.indices = new Uint32Array(0), this.VBO = null, this.EBO = null, this.initialized = false, this.name = `Mesh_${this.assetID}`, this.gl = t, this.tryInit(false);
        }
        get verts() {
          return this._verts;
        }
        set verts(t) {
          this._verts = t, this.dirty = true;
        }
        get triangles() {
          return this._triangles;
        }
        set triangles(t) {
          this._triangles = t, this.dirty = true;
        }
        get uvs() {
          return this._uvs;
        }
        set uvs(t) {
          this._uvs = t, this.dirty = true;
        }
        get uv2() {
          return this._uv2;
        }
        set uv2(t) {
          this._uv2 = t, this.dirty = true;
        }
        get colors() {
          return this._colors;
        }
        set colors(t) {
          this._colors = t, this.dirty = true;
        }
        get normals() {
          return this._normals;
        }
        set normals(t) {
          this._normals = t, this.dirty = true;
        }
        clear() {
          this.verts = [], this.uvs = [], this.triangles = [], this.colors = [], this.normals = [];
        }
        calculateNormals(t = 0) {
          if (this.triangles.length % 3 != 0)
            throw new Error("Invalid triangles.");
          this.normals = St.fillArray(() => Gs.vec3(0, 0, 0), this.verts.length);
          for (let r = 0; r < this.triangles.length; r += 3) {
            let i = this.verts[this.triangles[r]], n = this.verts[this.triangles[r + 1]], s = this.verts[this.triangles[r + 2]], a = xi.minus(n, i), o = xi.minus(s, i), l = xi.cross(a, o).normalize();
            this.normals[this.triangles[r + 0]].plus(l), this.normals[this.triangles[r + 1]].plus(l), this.normals[this.triangles[r + 2]].plus(l);
          }
          for (let r = 0; r < this.normals.length; r++)
            this.normals[r] = this.normals[r].normalize();
        }
        update() {
          if (this.dirty) {
            if (this.triangles.length % 3 != 0)
              throw new Error("Invalid triangles.");
            if (this.colors.length !== this.verts.length && (this.colors = [...this.colors, ...St.fillArray(Nd.Color.white, this.verts.length - this.colors.length)]), this.uvs.length !== this.verts.length && (this.uvs = [...this.uvs, ...St.fillArray(Us.vec2(0, 0), this.verts.length - this.uvs.length)]), this.uv2.length !== this.verts.length && (this.uv2 = [...this.uv2, ...St.fillArray(Us.vec2(0, 0), this.verts.length - this.uv2.length)]), this.normals.length !== this.verts.length && (this.normals = [...this.normals, ...St.fillArray(Gs.vec3(0, 0, 0), this.verts.length - this.normals.length)]), this.vertices = new Float32Array(this.verts.flatMap((t, r) => [...t, ...this.colors[r], ...this.uvs[r], ...this.uv2[r], ...this.normals[r]])), this.vertices.length != this.verts.length * Fs)
              throw new Error("Buffer with invalid length.");
            this.indices = new Uint32Array(this.triangles.flat()), this.dirty = false, this.uploaded = false;
          }
        }
        setup() {
          this.update(), this.tryInit(true);
          let t = this.gl;
          return this.uploaded || (t.bindBuffer(t.ARRAY_BUFFER, this.VBO), t.bufferData(t.ARRAY_BUFFER, this.vertices, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.EBO), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), this.uploaded = true), [this.VBO, this.EBO];
        }
        bind(t) {
          this.setup();
          let r = this.gl, i = t._internal().attributes, n = Fs * 4;
          r.bindBuffer(r.ARRAY_BUFFER, this.VBO), i.vert >= 0 && (r.vertexAttribPointer(i.vert, 3, r.FLOAT, false, n, 0), r.enableVertexAttribArray(i.vert)), i.color >= 0 && (r.vertexAttribPointer(i.color, 4, r.FLOAT, false, n, 3 * 4), r.enableVertexAttribArray(i.color)), i.uv >= 0 && (r.vertexAttribPointer(i.uv, 2, r.FLOAT, false, n, 7 * 4), r.enableVertexAttribArray(i.uv)), i.uv2 >= 0 && (r.vertexAttribPointer(i.uv2, 2, r.FLOAT, false, n, 9 * 4), r.enableVertexAttribArray(i.uv2)), i.uv && i.normal >= 0 && (r.vertexAttribPointer(i.normal, 3, r.FLOAT, true, n, 11 * 4), r.enableVertexAttribArray(i.normal)), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, this.EBO);
        }
        destroy() {
          !this.initialized || this.destroyed || (this.gl.deleteBuffer(this.VBO), this.gl.deleteBuffer(this.EBO), super.destroy());
        }
        tryInit(t = false) {
          var r, i;
          if (this.initialized)
            return true;
          let n = this.gl || Ns.GL();
          if (!n) {
            if (t)
              throw new Error("Failed to init mesh without global GL context");
            return false;
          }
          return this.gl = n, this.VBO = (r = n.createBuffer()) !== null && r !== void 0 ? r : St.panic("Failed to create vertex buffer."), this.EBO = (i = n.createBuffer()) !== null && i !== void 0 ? i : St.panic("Failed to create element buffer."), this.initialized = true, true;
        }
      };
      Er.Mesh = Vs;
    });
    var bi = B((Or) => {
      "use strict";
      Object.defineProperty(Or, "__esModule", {value: true});
      Or.RenderTarget = void 0;
      var Ot = Pe(), Vd = We(), Yd = Ce(), Ys = {canvasOutput: {tex: null, attachPoint: WebGL2RenderingContext.BACK}, fromRenderTexture: (e) => ({tex: e.glTex()})}, Ws = class {
        get width() {
          return Ot.GlobalContext().width;
        }
        get height() {
          return Ot.GlobalContext().height;
        }
        get size() {
          return Ot.GlobalContext().renderer.canvasSize;
        }
        bind() {
          let t = Ot.GlobalContext().gl;
          t.bindFramebuffer(t.FRAMEBUFFER, null), t.viewport(0, 0, this.width, this.height);
        }
        release() {
        }
      }, _i = class {
        constructor(t = 0, r = 0, i = Ot.GlobalContext()) {
          var n;
          this.colorAttachments = [], this.depthAttachment = Ys.canvasOutput, this.isCanvasTarget = false, this.width = t, this.height = r, i ? this.frameBuffer = (n = i.gl.createFramebuffer()) !== null && n !== void 0 ? n : Vd.panic("Failed to create frame buffer") : this.frameBuffer = null;
        }
        get size() {
          return Yd.vec2(this.width, this.height);
        }
        addColorAttachment(t) {
          if (t !== null) {
            if (this.width == 0 && this.height == 0 && (this.width = t.width, this.height = t.height), this.width != t.width || this.height != t.height)
              throw new Error("Framebuffer attachments must in same resolution.");
            this.colorAttachments.push(Ys.fromRenderTexture(t));
          }
        }
        setDepthAttachment(t) {
          var r;
          if (this.width == 0 && this.height == 0 && (this.width = t.width, this.height = t.height), this.width != t.width || this.height != t.height)
            throw new Error("Framebuffer attachments must in same resolution.");
          this.depthAttachment = {tex: (r = t == null ? void 0 : t.glTex) !== null && r !== void 0 ? r : null, attachPoint: WebGL2RenderingContext.DEPTH_ATTACHMENT};
        }
        bind(t = Ot.GlobalContext()) {
          let r = t.gl;
          if (this.isCanvasTarget)
            r.bindFramebuffer(r.FRAMEBUFFER, null), r.viewport(0, 0, t.width, t.height);
          else {
            r.bindFramebuffer(r.FRAMEBUFFER, this.frameBuffer);
            let i = 0;
            for (let s = 0; s < this.colorAttachments.length; s++)
              this.colorAttachments[s].tex && (this.colorAttachments[s].attachPoint = r.COLOR_ATTACHMENT0 + i++, r.framebufferTexture2D(r.FRAMEBUFFER, this.colorAttachments[s].attachPoint, r.TEXTURE_2D, this.colorAttachments[s].tex, 0));
            r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, this.depthAttachment.tex, 0), r.viewport(0, 0, this.width, this.height);
            let n = this.colorAttachments.map((s) => s.attachPoint);
            r.drawBuffers(n);
          }
        }
        release(t = Ot.GlobalContext()) {
          if (this.isCanvasTarget)
            return;
          t.gl.deleteFramebuffer(this.frameBuffer);
        }
      };
      Or.RenderTarget = _i;
      _i.CanvasTarget = Object.freeze(new Ws());
    });
    var ks = B((dt) => {
      "use strict";
      var Te = dt && dt.__decorate || function(e, t, r, i) {
        var n = arguments.length, s = n < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, r) : i, a;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          s = Reflect.decorate(e, t, r, i);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (a = e[o]) && (s = (n < 3 ? a(s) : n > 3 ? a(t, r, s) : a(t, r)) || s);
        return n > 3 && s && Object.defineProperty(t, r, s), s;
      };
      Object.defineProperty(dt, "__esModule", {value: true});
      dt.createBuiltinMaterialTypes = dt.createBuiltinMaterial = void 0;
      var oe = Pr(), Dr = xt(), d1 = Mi(), Wd = Ce();
      function kd(e, t, r, i) {
        let n = new oe.Material(r.ErrorShader, e);
        return n.setProp("uMainTex", "tex2d", i.error), {error: n, default: new t.DefaultMaterial(e), blitCopy: new t.BlitCopy(e), ColoredLine: new oe.Material(r.ColoredLine, e)};
      }
      dt.createBuiltinMaterial = kd;
      function Hd(e, t, r) {
        let i = class extends oe.MaterialFromShader(r.DefaultShader) {
          constructor() {
            super(...arguments);
            this.color = Dr.Color.white, this.mainTexture = t.default;
          }
        };
        Te([oe.shaderProp("uColor", "color")], i.prototype, "color", void 0), Te([oe.shaderProp("uMainTex", "tex2d")], i.prototype, "mainTexture", void 0), i = Te([oe.materialDefine], i);
        let n = class extends oe.MaterialFromShader(r.BlitCopy) {
          constructor() {
            super(...arguments);
            this.source = null, this.flip = Wd.vec2(0, 0);
          }
        };
        Te([oe.shaderProp("uMainTex", "tex2d")], n.prototype, "source", void 0), Te([oe.shaderProp("uFlip", "vec2")], n.prototype, "flip", void 0), n = Te([oe.materialDefine], n);
        let s = class extends oe.MaterialFromShader(r.DefaultShader) {
          constructor() {
            super(...arguments);
            this.color = Dr.Color.white, this.mainTexture = t.default, this.normalTexture = t.defaultNormal, this.emission = Dr.Color.black, this.specular = Dr.Color.white, this.metiallic = 0.023, this.smoothness = 0.5, this.fresnel = 5;
          }
        };
        return Te([oe.shaderProp("uColor", "color")], s.prototype, "color", void 0), Te([oe.shaderProp("uMainTex", "tex2d")], s.prototype, "mainTexture", void 0), Te([oe.shaderProp("uNormalTex", "tex2d")], s.prototype, "normalTexture", void 0), Te([oe.shaderProp("uEmission", "color")], s.prototype, "emission", void 0), Te([oe.shaderProp("uSpecular", "color")], s.prototype, "specular", void 0), Te([oe.shaderProp("uMetallic", "float")], s.prototype, "metiallic", void 0), Te([oe.shaderProp("uSmoothness", "float")], s.prototype, "smoothness", void 0), Te([oe.shaderProp("uFresnel", "float")], s.prototype, "fresnel", void 0), s = Te([oe.materialDefine], s), {DefaultMaterial: i, BlitCopy: n, DefaultLit: s};
      }
      dt.createBuiltinMaterialTypes = Hd;
    });
    var Hs = B((Br) => {
      "use strict";
      Object.defineProperty(Br, "__esModule", {value: true});
      Br.createDefaultTextures = void 0;
      var jd = We(), Wt = Kt(), Ri = Jt();
      function Xd(e) {
        var t;
        let r = 64, i = document.createElement("canvas");
        i.width = i.height = r;
        let n = (t = i.getContext("2d")) !== null && t !== void 0 ? t : jd.panic("Failed to create default texture.");
        n.fillStyle = "black", n.fillRect(0, 0, r, r), n.fillStyle = "cyan", n.fillRect(0, 0, r / 2, r / 2), n.fillRect(r / 2, r / 2, r / 2, r / 2);
        let s = new Wt.Texture2D(r, r, Ri.TextureFormat.RGBA, Wt.FilterMode.Linear, e);
        s.setData(i), s.name = "Texture-Error", n.fillStyle = "blue", n.fillRect(0, 0, r, r);
        let a = new Wt.Texture2D(r, r, Ri.TextureFormat.RGBA, Wt.FilterMode.Linear, e);
        a.setData(i), a.name = "Default-Normal", n.fillStyle = "white", n.fillRect(0, 0, r, r);
        let o = new Wt.Texture2D(r, r, Ri.TextureFormat.RGBA, Wt.FilterMode.Linear, e);
        return o.setData(i), o.name = "Default-White", {default: o, defaultNormal: a, error: s};
      }
      Br.createDefaultTextures = Xd;
    });
    var Cr = B((Ir) => {
      "use strict";
      Object.defineProperty(Ir, "__esModule", {value: true});
      Ir.MeshBuilder = void 0;
      var X = oi(), Qd = Pe(), wi = Sr(), js = class {
        constructor(t = 0, r = Qd.GlobalContext().gl) {
          this.verts = [], this.triangles = [], this.uvs = [], this.colors = [], this.gl = r;
        }
        addPolygon(t, r) {
          let i = this.verts.length;
          for (let n = 0; n < t.length; n++)
            this.verts.push(t[n]), this.uvs.push(r[n]), this.colors.push(X.Color.white);
          for (let n = 2; n < t.length; n++)
            this.triangles.push(i + 0, i + n - 1, i + n);
        }
        addSubMesh(t, r, i = [X.Color.white], n = [X.vec2(0, 0)]) {
          let s = this.verts.length;
          if (r.length % 3 != 0)
            throw new Error("Invalid number of triangles.");
          for (let a = 0; a < t.length; a++)
            this.verts.push(t[a]), this.uvs.push(a >= n.length ? n[n.length - 1] : n[a]), this.colors.push(a >= i.length ? i[i.length - 1] : i[a]);
          for (let a = 0; a < r.length; a++)
            this.triangles.push(s + r[a]);
        }
        toMesh() {
          let t = new wi.Mesh(this.gl);
          return t.verts = this.verts, t.triangles = this.triangles, t.colors = this.colors, t.uvs = this.uvs, t.calculateNormals(), t;
        }
        static quad(t = X.vec2.zero(), r = X.vec2.one()) {
          let i = X.mul(r, X.vec2(0.5)), n = new wi.Mesh();
          return n.verts = [X.vec3(t.x - i.x, t.y - i.y, 0), X.vec3(t.x + i.x, t.y - i.y, 0), X.vec3(t.x + i.x, t.y + i.y, 0), X.vec3(t.x - i.x, t.y + i.y, 0)], n.triangles = [0, 1, 3, 1, 2, 3], n.uvs = [X.vec2(0, 0), X.vec2(1, 0), X.vec2(1, 1), X.vec2(0, 1)], n.normals = [X.vec3(0, 0, 1), X.vec3(0, 0, 1), X.vec3(0, 0, 1), X.vec3(0, 0, 1)], n.name = "mesh_quad", n;
        }
        static ndcQuad() {
          return this.quad(X.vec2.zero(), X.vec2(2, 2));
        }
        static ndcTriangle() {
          let t = new wi.Mesh();
          return t.verts = [X.vec3(-1, -1, 0), X.vec3(3, -1, 0), X.vec3(-1, 3, 0)], t.triangles = [0, 1, 2], t.uvs = [X.vec2(0, 0), X.vec2(2, 0), X.vec2(0, 2)], t.normals = [X.vec3(0, 0, 1), X.vec3(0, 0, 1), X.vec3(0, 0, 1)], t.name = "mesh_ndc_triangle", t;
        }
      };
      Ir.MeshBuilder = js;
    });
    var Qs = B((Lr) => {
      "use strict";
      Object.defineProperty(Lr, "__esModule", {value: true});
      Lr.createBuiltinMesh = void 0;
      var Xs = Sr(), Me = et(), Ve = Ce(), $d = Cr();
      function e0(e) {
        return {quad: Zd(e), screenQuad: Jd(e), cube: Kd(e)};
      }
      Lr.createBuiltinMesh = e0;
      function Zd(e) {
        let t = new Xs.Mesh(e);
        return t.verts = [Me.vec3(-0.5, -0.5, 0), Me.vec3(0.5, -0.5, 0), Me.vec3(0.5, 0.5, 0), Me.vec3(-0.5, 0.5, 0)], t.triangles = [0, 1, 3, 1, 2, 3], t.uvs = [Ve.vec2(0, 0), Ve.vec2(1, 0), Ve.vec2(1, 1), Ve.vec2(0, 1)], t.calculateNormals(), t.name = "mesh_quad", t;
      }
      function Jd(e) {
        let t = new Xs.Mesh(e);
        return t.verts = [Me.vec3(-1, -1, 0), Me.vec3(1, -1, 0), Me.vec3(1, 1, 0), Me.vec3(-1, 1, 0)], t.triangles = [0, 1, 3, 1, 2, 3], t.uvs = [Ve.vec2(0, 0), Ve.vec2(1, 0), Ve.vec2(1, 1), Ve.vec2(0, 1)], t.calculateNormals(), t.name = "mesh_screen_quad", t;
      }
      function Kd(e) {
        let t = [Me.vec3(-0.5, -0.5, -0.5), Me.vec3(0.5, -0.5, -0.5), Me.vec3(0.5, 0.5, -0.5), Me.vec3(-0.5, 0.5, -0.5), Me.vec3(-0.5, -0.5, 0.5), Me.vec3(0.5, -0.5, 0.5), Me.vec3(0.5, 0.5, 0.5), Me.vec3(-0.5, 0.5, 0.5)], r = [Ve.vec2(0, 0), Ve.vec2(1, 0), Ve.vec2(1, 1), Ve.vec2(0, 1)], i = new $d.MeshBuilder(24, e);
        i.addPolygon([t[1], t[0], t[3], t[2]], [r[0], r[1], r[2], r[3]]), i.addPolygon([t[5], t[1], t[2], t[6]], [r[0], r[1], r[2], r[3]]), i.addPolygon([t[4], t[5], t[6], t[7]], [r[0], r[1], r[2], r[3]]), i.addPolygon([t[0], t[4], t[7], t[3]], [r[0], r[1], r[2], r[3]]), i.addPolygon([t[7], t[6], t[2], t[3]], [r[0], r[1], r[2], r[3]]), i.addPolygon([t[0], t[1], t[5], t[4]], [r[0], r[1], r[2], r[3]]);
        let n = i.toMesh();
        return n.name = "mesh_cube", n;
      }
    });
    var Js = B((zr) => {
      "use strict";
      Object.defineProperty(zr, "__esModule", {value: true});
      zr.BuiltinAssets = void 0;
      var $s = ks(), Ti = Ft(), t0 = Hs(), r0 = Qs(), Zs = class {
        constructor(t) {
          let r = {assets: this, gl: t, width: 0, height: 0, renderer: null};
          this.gl = t, this.BuiltinUniforms = Ti.BuiltinUniformNames, this.shaderSources = Ti.BuiltinShaderSources, this.shaders = Ti.compileBuiltinShaders(t), this.meshes = r0.createBuiltinMesh(t), this.textures = t0.createDefaultTextures(r), this.types = $s.createBuiltinMaterialTypes(t, this.textures, this.shaders), this.materials = $s.createBuiltinMaterial(t, this.types, this.shaders, this.textures);
        }
      };
      zr.BuiltinAssets = Zs;
    });
    var na = B((qr) => {
      "use strict";
      Object.defineProperty(qr, "__esModule", {value: true});
      qr.ZograRenderer = void 0;
      var i0 = We(), Ks = Pe(), n0 = xt(), Oe = si(), vt = bi(), ea = Kt(), De = Ce(), s0 = Js(), Gr = xr(), ta = Cr(), ra = Ut(), a0 = Ft(), ia = class {
        constructor(t, r, i) {
          this.viewProjectionMatrix = Oe.mat4.identity(), this.viewMatrix = Oe.mat4.identity(), this.projectionMatrix = Oe.mat4.identity(), this.target = vt.RenderTarget.CanvasTarget, this.shader = null, this.globalUniforms = new Map(), this.globalTextures = new Map(), this.canvas = t, this.width = r === void 0 ? t.width : r, this.height = i === void 0 ? t.height : i, this.canvas.width = this.width, this.canvas.height = this.height, this.scissor = new Gr.Rect(De.vec2.zero(), De.vec2(this.width, this.height)), this.gl = i0.panicNull(this.canvas.getContext("webgl2"), "WebGL2 is not support on current device."), this.assets = new s0.BuiltinAssets(this.gl), this.ctx = {gl: this.gl, width: this.width, height: this.height, assets: this.assets, renderer: this}, Ks.GlobalContext() || this.use(), this.helperAssets = {clipBlitMesh: ta.MeshBuilder.ndcQuad(), blitMesh: ta.MeshBuilder.ndcTriangle()};
        }
        use() {
          Ks.setGlobalContext(this.ctx);
        }
        setSize(t, r) {
          this.canvas.width = t, this.canvas.height = r, this.width = t, this.height = r, this.ctx.width = t, this.ctx.height = r;
        }
        get canvasSize() {
          return De.vec2(this.width, this.height);
        }
        setViewProjection(t, r) {
          this.viewProjectionMatrix = Oe.mat4.mul(r, t);
        }
        setRenderTarget(t, r) {
          if (t === vt.RenderTarget.CanvasTarget)
            this.target !== t && this.target.release(), this.target = t;
          else if (t instanceof vt.RenderTarget)
            this.target !== t && this.target.release(), this.target = t, r && this.target.setDepthAttachment(r);
          else {
            let i;
            if (t instanceof Array) {
              this.target.release(), i = new vt.RenderTarget(t[0].width, t[0].height, this.ctx);
              for (let n = 0; n < t.length; n++)
                i.addColorAttachment(t[n]);
            } else if (t instanceof ea.RenderTexture)
              this.target.release(), i = new vt.RenderTarget(t.width, t.height, this.ctx), i.addColorAttachment(t);
            else
              throw new Error("Invalid render target");
            r && i.setDepthAttachment(r), this.target = i;
          }
          this.scissor = new Gr.Rect(De.vec2.zero(), this.target.size), this.target.bind();
        }
        clear(t = n0.Color.black, r = true) {
          this.gl.clearColor(t.r, t.g, t.b, t.a), this.gl.clear(this.gl.COLOR_BUFFER_BIT | (r ? this.gl.DEPTH_BUFFER_BIT : 0));
        }
        blit(t, r, i = this.assets.materials.blitCopy, n, s) {
          if (r instanceof ea.RenderTexture) {
            let h = new vt.RenderTarget(r.width, r.height, this.ctx);
            h.addColorAttachment(r), r = h;
          } else if (r instanceof Array) {
            let h = new vt.RenderTarget(0, 0, this.ctx);
            for (let u = 0; u < r.length; u++)
              h.addColorAttachment(r[u]);
            r = h;
          }
          let a = this.viewProjectionMatrix, o = this.target, l = this.helperAssets.blitMesh, c = r === vt.RenderTarget.CanvasTarget ? new Gr.Rect(De.vec2.zero(), this.canvasSize) : new Gr.Rect(De.vec2.zero(), r.size);
          if (t && (n || s) && (c = s || c, n)) {
            l = this.helperAssets.clipBlitMesh;
            let h = ra.div(n.min, t.size), u = ra.div(n.max, t.size);
            l.uvs = [De.vec2(h.x, h.y), De.vec2(u.x, h.y), De.vec2(u.x, u.y), De.vec2(h.x, u.y)], l.update();
          }
          this.target = r, this.scissor = c, this.viewProjectionMatrix = Oe.mat4.identity(), t && i.setProp(a0.BuiltinUniformNames.mainTex, "tex2d", t), this.drawMesh(l, Oe.mat4.identity(), i), this.setRenderTarget(o), this.viewProjectionMatrix = a;
        }
        useShader(t) {
          let r = this.gl;
          this.shader = t, t.use(), t.setupPipelineStates();
        }
        setupTransforms(t, r) {
          let i = this.gl, n = Oe.mat4.mul(this.viewProjectionMatrix, r), s = Oe.mat4.transpose(Oe.mat4.invert(r)), a = Oe.mat4.transpose(Oe.mat4.invert(Oe.mat4.mul(this.viewMatrix, r)));
          t.setupBuiltinUniform({matM: r, matVP: this.viewProjectionMatrix, matMVP: n, matM_IT: s, matMV_IT: a});
        }
        setupGlobalUniforms(t) {
          for (let r of this.globalUniforms.values())
            t.setUniformDirectly(r.name, r.type, r.value);
        }
        drawMeshInstance(t, r, i, n) {
          i || (i = this.assets.materials.error);
          let s = this.gl, a = {assets: this.assets, gl: s, nextTextureUnit: 0, size: De.vec2(this.width, this.height)};
          this.target.bind(), this.setupScissor(), this.useShader(i.shader), i.upload(a), this.setupTransforms(i.shader, Oe.mat4.identity()), t.bind(i.shader), r.bindInstanceDraw(i.shader), s.drawElementsInstanced(s.TRIANGLES, t.triangles.length, s.UNSIGNED_INT, 0, n), r.cleanupInstanceDraw(i.shader), i.unbindRenderTextures();
        }
        drawMeshProceduralInstance(t, r, i) {
          r || (r = this.assets.materials.error);
          let n = this.gl, s = {assets: this.assets, gl: n, nextTextureUnit: 0, size: De.vec2(this.width, this.height)};
          this.target.bind(), this.setupScissor(), this.useShader(r.shader), r.upload(s), this.setupTransforms(r.shader, Oe.mat4.identity()), t.bind(r.shader), n.drawElementsInstanced(n.TRIANGLES, t.triangles.length, n.UNSIGNED_INT, 0, i), r.unbindRenderTextures();
        }
        drawMesh(t, r, i) {
          i || (i = this.assets.materials.error);
          let n = this.gl, s = {assets: this.assets, gl: n, nextTextureUnit: 0, size: De.vec2(this.width, this.height)};
          this.target.bind(), this.setupScissor(), this.useShader(i.shader), i.upload(s), this.setupTransforms(i.shader, r), this.setupGlobalUniforms(i), t.bind(i.shader), n.drawElements(n.TRIANGLES, t.triangles.length, n.UNSIGNED_INT, 0), i.unbindRenderTextures();
        }
        drawLines(t, r, i) {
          let n = this.gl, s = {assets: this.assets, gl: n, nextTextureUnit: 0, size: De.vec2(this.width, this.height)};
          this.target.bind(), this.setupScissor(), this.useShader(i.shader), i.upload(s), this.setupTransforms(i.shader, r), t.bind(i.shader), n.drawElements(n.LINES, t.lines.length, n.UNSIGNED_INT, 0);
        }
        setGlobalUniform(t, r, i) {
          this.globalUniforms.set(t, {name: t, type: r, value: i});
        }
        unsetGlobalUniform(t) {
          this.globalUniforms.delete(t);
        }
        setupScissor() {
          this.gl.viewport(this.scissor.xMin, this.scissor.yMin, this.scissor.size.x, this.scissor.size.y);
        }
      };
      qr.ZograRenderer = ia;
    });
    var la = B((kt) => {
      "use strict";
      Object.defineProperty(kt, "__esModule", {value: true});
      kt.LineBuilder = kt.Lines = void 0;
      var sa = xt(), aa = Pe(), Ai = We(), o0 = Tt(), Pi = class extends o0.Asset {
        constructor(t = aa.GL()) {
          var r, i;
          super();
          this._verts = [], this._colors = [], this._lines = [], this.dirty = true, this.vertices = new Float32Array(0), this.indices = new Uint32Array(0), this.name = `Lines_${this.assetID}`, this.gl = t, this.VBO = (r = t.createBuffer()) !== null && r !== void 0 ? r : Ai.panic("Failed to create vertex buffer."), this.EBO = (i = t.createBuffer()) !== null && i !== void 0 ? i : Ai.panic("Failed to create element buffer.");
        }
        get verts() {
          return this._verts;
        }
        set verts(t) {
          this._verts = t, this.dirty = true;
        }
        get colors() {
          return this._colors;
        }
        set colors(t) {
          this._colors = t, this.dirty = true;
        }
        get lines() {
          return this._lines;
        }
        set lines(t) {
          this._lines = t, this.dirty = true;
        }
        clear() {
          this.verts = [], this.colors = [], this.lines = [];
        }
        update() {
          if (this.dirty) {
            let t = this.gl;
            if (this.lines.length % 2 != 0)
              throw new Error("Invalid lines.");
            if (this.colors.length !== this.verts.length && (this.colors = [...this.colors, ...Ai.fillArray(sa.Color.white, this.verts.length - this.colors.length)]), this.vertices = new Float32Array(this.verts.flatMap((r, i) => [...r, ...this.colors[i]])), this.vertices.length != this.verts.length * 7)
              throw new Error("Buffer with invalid length.");
            this.indices = new Uint32Array(this.lines.flat()), t.bindBuffer(t.ARRAY_BUFFER, this.VBO), t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.EBO), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.DYNAMIC_DRAW), this.dirty = false;
          }
        }
        bind(t) {
          let r = this.gl;
          this.update();
          let i = t._internal().attributes, n = 7 * 4;
          r.bindBuffer(r.ARRAY_BUFFER, this.VBO), i.vert >= 0 && (r.vertexAttribPointer(i.vert, 3, r.FLOAT, false, n, 0), r.enableVertexAttribArray(i.vert)), i.color >= 0 && (r.vertexAttribPointer(i.color, 4, r.FLOAT, false, n, 3 * 4), r.enableVertexAttribArray(i.color)), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, this.EBO);
        }
        destroy() {
          this.destroyed || (this.gl.deleteBuffer(this.VBO), this.gl.deleteBuffer(this.EBO), super.destroy());
        }
      };
      kt.Lines = Pi;
      var oa = class {
        constructor(t = 0, r = aa.GL()) {
          this.verts = [], this.colors = [], this.lines = [], this.gl = r;
        }
        addLine(t, r = sa.Color.white) {
          let i = this.verts.length, [n, s] = t;
          this.verts.push(n, s), this.colors.push(r, r), this.lines.push(i, i + 1);
        }
        toLines() {
          let t = new Pi(this.gl);
          return t.verts = this.verts, t.colors = this.colors, t.lines = this.lines, t.update(), t;
        }
      };
      kt.LineBuilder = oa;
    });
    var ua = B((Ur) => {
      "use strict";
      Object.defineProperty(Ur, "__esModule", {value: true});
      Ur.RenderBuffer = void 0;
      var l0 = We(), ca = Pe(), ha = class extends Array {
        constructor(t, r, i = ca.GlobalContext()) {
          super(r);
          this.static = false, this.dirty = false, this.initialized = false, this.glBuf = null, this.structure = t, this.ctx = i;
          let n = 0;
          for (let a in t)
            switch (t[a]) {
              case "float":
                n += 1;
                break;
              case "vec2":
                n += 2;
                break;
              case "vec3":
                n += 3;
                break;
              case "vec4":
                n += 4;
                break;
              case "mat4":
                n += 16;
                break;
            }
          let s = n * 4;
          this.buffer = null, this.byteSize = s * r, this.elementSize = n, this.elementByteSize = s, this.resize(r), this.tryInit(false);
        }
        tryInit(t = false) {
          var r;
          if (this.initialized)
            return true;
          let i = this.ctx || ca.GlobalContext();
          if (!i) {
            if (t)
              throw new Error("Failed to init render buffer without a global GL context.");
            return false;
          }
          this.ctx = i;
          let n = i.gl;
          return this.glBuf = (r = n.createBuffer()) !== null && r !== void 0 ? r : l0.panic("Failed to create render buffer"), n.bindBuffer(n.ARRAY_BUFFER, this.glBuf), n.bufferData(n.ARRAY_BUFFER, this.byteSize, this.static ? n.STATIC_DRAW : n.DYNAMIC_DRAW), this.initialized = true, true;
        }
        resize(t, r = true) {
          let i = this.buffer;
          this.buffer = new Float32Array(this.elementSize * t), r && i && this.buffer.set(i, 0), this.length = t;
          let n = this.elementByteSize;
          for (let s = 0; s < this.length; s++) {
            let a = {}, o = 0;
            for (let l in this.structure)
              switch (this.structure[l]) {
                case "float":
                  a[l] = new Float32Array(this.buffer.buffer, s * n + o * 4, 1), o += 1;
                  break;
                case "vec2":
                  a[l] = new Float32Array(this.buffer.buffer, s * n + o * 4, 2), o += 2;
                  break;
                case "vec3":
                  a[l] = new Float32Array(this.buffer.buffer, s * n + o * 4, 3), o += 3;
                  break;
                case "vec4":
                  a[l] = new Float32Array(this.buffer.buffer, s * n + o * 4, 4), o += 4;
                  break;
                case "mat4":
                  a[l] = new Float32Array(this.buffer.buffer, s * n + o * 4, 16), o += 16;
                  break;
              }
            this[s] = a;
          }
          this.dirty = true;
        }
        markDirty() {
          this.dirty = true;
        }
        upload(t = false) {
          if (this.tryInit(true), !this.dirty && !t && this.static)
            return false;
          let r = this.ctx.gl;
          return r.bindBuffer(r.ARRAY_BUFFER, this.glBuf), r.bufferData(r.ARRAY_BUFFER, this.buffer, this.static ? r.STATIC_DRAW : r.DYNAMIC_DRAW), this.dirty = false, true;
        }
        bindInstanceDraw(t) {
          this.tryInit(true);
          let r = this.ctx.gl;
          this.upload() || r.bindBuffer(r.ARRAY_BUFFER, this.glBuf);
          let i = t._internal().attributes, n = 0;
          for (let s in this.structure) {
            let a = i[s];
            switch (a >= 0 && r.enableVertexAttribArray(a), this.structure[s]) {
              case "float":
                a >= 0 && r.vertexAttribPointer(a, 1, r.FLOAT, false, this.elementByteSize, n * 4), n += 1;
                break;
              case "vec2":
                a >= 0 && r.vertexAttribPointer(a, 2, r.FLOAT, false, this.elementByteSize, n * 4), n += 2;
                break;
              case "vec3":
                a >= 0 && r.vertexAttribPointer(a, 3, r.FLOAT, false, this.elementByteSize, n * 4), n += 3;
                break;
              case "vec4":
                a >= 0 && r.vertexAttribPointer(a, 4, r.FLOAT, false, this.elementByteSize, n * 4), n += 4;
                break;
              case "mat4":
                a >= 0 && (r.enableVertexAttribArray(a + 0), r.enableVertexAttribArray(a + 1), r.enableVertexAttribArray(a + 2), r.enableVertexAttribArray(a + 3), r.vertexAttribPointer(a + 0, 4, r.FLOAT, false, this.elementByteSize, (n + 0) * 4), r.vertexAttribPointer(a + 1, 4, r.FLOAT, false, this.elementByteSize, (n + 4) * 4), r.vertexAttribPointer(a + 2, 4, r.FLOAT, false, this.elementByteSize, (n + 8) * 4), r.vertexAttribPointer(a + 3, 4, r.FLOAT, false, this.elementByteSize, (n + 12) * 4), r.vertexAttribDivisor(a + 0, 1), r.vertexAttribDivisor(a + 1, 1), r.vertexAttribDivisor(a + 2, 1), r.vertexAttribDivisor(a + 3, 1)), n += 16;
                break;
            }
            a >= 0 && r.vertexAttribDivisor(a, 1);
          }
        }
        cleanupInstanceDraw(t) {
          this.tryInit(true);
          let r = this.ctx.gl, i = t._internal().attributes;
          for (let n in this.structure) {
            let s = i[n];
            switch (this.structure[n]) {
              case "float":
              case "vec2":
              case "vec3":
              case "vec4":
                s >= 0 && r.vertexAttribDivisor(s, 0), s >= 0 && r.disableVertexAttribArray(s);
                break;
              case "mat4":
                s >= 0 && (r.vertexAttribDivisor(s + 0, 0), r.vertexAttribDivisor(s + 1, 0), r.vertexAttribDivisor(s + 2, 0), r.vertexAttribDivisor(s + 3, 0), r.disableVertexAttribArray(s + 0), r.disableVertexAttribArray(s + 1), r.disableVertexAttribArray(s + 2), r.disableVertexAttribArray(s + 3));
                break;
            }
          }
        }
      };
      Ur.RenderBuffer = ha;
    });
    var Ei = B((ue) => {
      "use strict";
      var c0 = ue && ue.__createBinding || (Object.create ? function(e, t, r, i) {
        i === void 0 && (i = r), Object.defineProperty(e, i, {enumerable: true, get: function() {
          return t[r];
        }});
      } : function(e, t, r, i) {
        i === void 0 && (i = r), e[i] = t[r];
      }), ke = ue && ue.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && c0(t, e, r);
      };
      Object.defineProperty(ue, "__esModule", {value: true});
      ue.TextureFormat = void 0;
      ke(Pr(), ue);
      ke(Mi(), ue);
      ke(Sr(), ue);
      ke(na(), ue);
      ke(fi(), ue);
      ke(Kt(), ue);
      ke(Tt(), ue);
      ke(la(), ue);
      ke(li(), ue);
      ke(ua(), ue);
      ke(bi(), ue);
      var h0 = Jt();
      Object.defineProperty(ue, "TextureFormat", {enumerable: true, get: function() {
        return h0.TextureFormat;
      }});
    });
    var da = B((Nr) => {
      "use strict";
      Object.defineProperty(Nr, "__esModule", {value: true});
      Nr.AssetsPack = void 0;
      var fa = class {
        constructor() {
          this.mainAsset = null, this.assets = new Map();
        }
        add(t, r) {
          r.name = t, this.assets.set(t, r);
        }
        setMain(t) {
          this.mainAsset = t;
        }
        get(t) {
          for (let [r, i] of this.assets)
            if (i instanceof t)
              return i;
          return null;
        }
        getAll(t) {
          return Array.from(this.assets.values()).filter((r) => r instanceof t);
        }
      };
      Nr.AssetsPack = fa;
    });
    var Oi = B((nt) => {
      "use strict";
      var u0 = nt && nt.__createBinding || (Object.create ? function(e, t, r, i) {
        i === void 0 && (i = r), Object.defineProperty(e, i, {enumerable: true, get: function() {
          return t[r];
        }});
      } : function(e, t, r, i) {
        i === void 0 && (i = r), e[i] = t[r];
      }), f0 = nt && nt.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && u0(t, e, r);
      };
      Object.defineProperty(nt, "__esModule", {value: true});
      nt.AssetsImporter = void 0;
      var Si = Pe();
      f0(da(), nt);
      var va = class {
        constructor(t) {
          this.importers = t;
        }
        async url(t, r = Si.GlobalContext()) {
          let i = await fetch(t).then((n) => n.arrayBuffer());
          return await this.buffer(i, r);
        }
        async blob(t, r = Si.GlobalContext()) {
          let i = await t.arrayBuffer();
          return await this.buffer(i, r);
        }
        async buffer(t, r = Si.GlobalContext()) {
          let i = {};
          for (let n in this.importers)
            i[n] = (s) => this.importers[n].import(t, s, r);
          return i;
        }
      };
      nt.AssetsImporter = va;
    });
    var pa = B((Fr) => {
      "use strict";
      Object.defineProperty(Fr, "__esModule", {value: true});
      Fr.TextureImporter = void 0;
      var Di = Ei(), d0 = Pe(), v0 = Jt(), p0 = Oi(), m0 = {import(e, t, r = d0.GlobalContext()) {
        return new Promise((i, n) => {
          let s = new Blob([e]), a = new Image();
          a.src = URL.createObjectURL(s);
          let o = () => {
            let l = {width: a.width, height: a.height, filterMode: Di.FilterMode.Linear, format: v0.TextureFormat.RGBA, mipmap: true, wrapMpde: Di.WrapMode.Repeat}, c = Object.assign(Object.assign({}, l), t), h = new Di.Texture2D(c.width, c.height, c.format, c.filterMode, r);
            h.autoMipmap = c.mipmap, h.wrapMode = c.wrapMpde, h.updateParameters(), h.setData(a), i(h);
          };
          a.complete ? o() : a.onload = o;
        });
      }}, y0 = {tex2d: m0};
      Fr.TextureImporter = new p0.AssetsImporter(y0);
    });
    var Bi = B((pt) => {
      "use strict";
      var g0 = pt && pt.__createBinding || (Object.create ? function(e, t, r, i) {
        i === void 0 && (i = r), Object.defineProperty(e, i, {enumerable: true, get: function() {
          return t[r];
        }});
      } : function(e, t, r, i) {
        i === void 0 && (i = r), e[i] = t[r];
      }), ma = pt && pt.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && g0(t, e, r);
      };
      Object.defineProperty(pt, "__esModule", {value: true});
      ma(Oi(), pt);
      ma(pa(), pt);
    });
    var ya = B((Dt) => {
      "use strict";
      var M0 = Dt && Dt.__createBinding || (Object.create ? function(e, t, r, i) {
        i === void 0 && (i = r), Object.defineProperty(e, i, {enumerable: true, get: function() {
          return t[r];
        }});
      } : function(e, t, r, i) {
        i === void 0 && (i = r), e[i] = t[r];
      }), x0 = Dt && Dt.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && M0(t, e, r);
      };
      Object.defineProperty(Dt, "__esModule", {value: true});
      x0(Cr(), Dt);
    });
    var ga = B((Bt) => {
      "use strict";
      var _0 = Bt && Bt.__createBinding || (Object.create ? function(e, t, r, i) {
        i === void 0 && (i = r), Object.defineProperty(e, i, {enumerable: true, get: function() {
          return t[r];
        }});
      } : function(e, t, r, i) {
        i === void 0 && (i = r), e[i] = t[r];
      }), b0 = Bt && Bt.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && _0(t, e, r);
      };
      Object.defineProperty(Bt, "__esModule", {value: true});
      b0(di(), Bt);
    });
    var Ht = B((le) => {
      "use strict";
      var Ma = le && le.__createBinding || (Object.create ? function(e, t, r, i) {
        i === void 0 && (i = r), Object.defineProperty(e, i, {enumerable: true, get: function() {
          return t[r];
        }});
      } : function(e, t, r, i) {
        i === void 0 && (i = r), e[i] = t[r];
      }), R0 = le && le.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {enumerable: true, value: t});
      } : function(e, t) {
        e.default = t;
      }), Vr = le && le.__exportStar || function(e, t) {
        for (var r in e)
          r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && Ma(t, e, r);
      }, xa = le && le.__importStar || function(e) {
        if (e && e.__esModule)
          return e;
        var t = {};
        if (e != null)
          for (var r in e)
            r !== "default" && Object.prototype.hasOwnProperty.call(e, r) && Ma(t, e, r);
        return R0(t, e), t;
      };
      Object.defineProperty(le, "__esModule", {value: true});
      le.Utils = le.GlobalContext = le.plugins = void 0;
      Vr(oi(), le);
      Vr(Ei(), le);
      var w0 = xa(Bi());
      le.plugins = w0;
      Vr(Bi(), le);
      Vr(ya(), le);
      var T0 = Pe();
      Object.defineProperty(le, "GlobalContext", {enumerable: true, get: function() {
        return T0.GlobalContext;
      }});
      var A0 = xa(ga());
      le.Utils = A0;
    });
    var mt = $t(Ht());
    var y = $t(Ht());
    var _a = Wi("iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QIZBzY36WJJGwAAABJ0RVh0RmlsZSBOYW1lAM60serM4i0xjMwnJwAAOd9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAyMS0wMi0yNVQxNTo1NDo1MyswODowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjEtMDItMjVUMTU6NTQ6NTMrMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDIxLTAyLTI1VDE1OjU0OjUzKzA4OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo4MjdmMjExZi1iNjczLWVlNDktYTc5NC05YTVjMWJmY2EzZmU8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxNTVhOWVmYy1kMmYwLTBkNDItYTcwYS02ZGY5M2UwNjljYWE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo2NjBiMDZmYi0xZjczLWFkNDQtYWQwMS1kNGU5ZDlhOTE4NDM8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NjYwYjA2ZmItMWY3My1hZDQ0LWFkMDEtZDRlOWQ5YTkxODQzPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIxLTAyLTI1VDE1OjU0OjUzKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo4MjdmMjExZi1iNjczLWVlNDktYTc5NC05YTVjMWJmY2EzZmU8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjEtMDItMjVUMTU6NTQ6NTMrMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjI1NjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yNTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PsD6WFoAAAAYdEVYdFNvZnR3YXJlAEFkb2JlIFBob3Rvc2hvcDTLjmcAAAAPdEVYdFdyaXRlcgBTdXBlclBOR8XEr90AACAASURBVHja7V3pduPMCgTZz32f/LO4P6KFpllb7YyTKOfMxIvseFEVRUHT+L//wf1z/9w/f/RnuT+C++f++bs/z/sj+DU/+M1/j+6P/CaA++d3gnvWa7pJ4iaA++eHA/0d7+cmhpsA7p9fCPjR930Twk0AN+B/KInQTQg3Adw/7wUn/tD3SDch3ARwg/4zwF59XnrT36SLz3OTwU0Avwr4+A/+5uznpgvPS4Ov6yaCmwD+FOi/W1nQxeemgceO/s2bDG4C+Hjg4xuO/WQFMEIKV8ngJoKbAD4K+DOBjG98nVdVAQ6SAk0mg5sIbgL4McDHN98/gxCo8Dw0AHYsksFNBDcBfCzwr4L+Hfd9x/unpArAAmFklAbdRHATwE8H/qzb300Eo8DHJCHQAHDxJoKb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");
    var U = $t(Ht());
    var It = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec4 aColor;\r
in vec2 aUV;\r
in vec3 aNormal;\r
\r
uniform mat4 uTransformM;\r
uniform mat4 uTransformVP;\r
uniform mat4 uTransformMVP;\r
uniform mat4 uTransformM_IT;\r
\r
out vec4 vColor;\r
out vec4 vPos;\r
out vec2 vUV;\r
out vec3 vNormal;\r
out vec3 vWorldPos;\r
\r
void main()\r
{\r
    gl_Position = uTransformMVP * vec4(aPos, 1);\r
    vPos = gl_Position;\r
    vColor = aColor;\r
    vUV = aUV;\r
    vNormal = (uTransformM_IT *  vec4(aNormal, 0)).xyz;\r
    vWorldPos = (uTransformM * vec4(aPos, 1)).xyz;\r
    \r
}`;
    var ba = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uTexSize; // (w, h, 1/w, 1/h)\r
uniform float uSampleOffset;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec2 delta = vec2(-uSampleOffset, uSampleOffset);\r
    vec4 color = \r
      texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.xx, vec2(0), vec2(1)))\r
    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.yx, vec2(0), vec2(1)))\r
    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.yy, vec2(0), vec2(1)))\r
    + texture(uMainTex, clamp(vUV.xy + uTexSize.zw * delta.xy, vec2(0), vec2(1)));\r
\r
    color /= vec4(4.0);\r
\r
    fragColor = color.rgba;\r
}`;
    var er = class extends U.MaterialFromShader(new U.Shader(It, ba)) {
      constructor() {
        super(...arguments);
        this.texture = null;
        this.textureSize = U.vec4.one();
        this.sampleOffset = 1;
      }
    };
    ie([U.shaderProp("uMainTex", "tex2d")], er.prototype, "texture", 2), ie([U.shaderProp("uTexSize", "vec4")], er.prototype, "textureSize", 2), ie([U.shaderProp("uSampleOffset", "float")], er.prototype, "sampleOffset", 2);
    var Ii = class {
      constructor(t) {
        this.steps = [];
        this.mateiralBlur = new er();
        this.renderer = t;
      }
      init(t) {
        this.steps[0] || (this.steps[0] = new U.RenderTexture(t.width, t.height, false, t.format, t.filterMode), this.steps[0].wrapMode = U.WrapMode.Clamp, this.steps[0].updateParameters()), (this.steps[0].width !== t.width || this.steps[0].height !== t.height) && this.steps[0].resize(t.width, t.height, U.TextureResizing.Discard);
      }
      blur(t, r = 4, i = this.steps[0]) {
        return this.steps[0] || (this.steps[0] = new U.RenderTexture(t.width, t.height, false, t.format, t.filterMode)), i = i || this.steps[0], (this.steps[0].width !== t.width || this.steps[0].height !== t.height) && this.steps[0].resize(t.width, t.height, U.TextureResizing.Discard), this.downSample(t, r), this.upSample(r, i);
      }
      downSample(t, r) {
        for (let i = 1; i <= r; i++) {
          let n = U.vec2.floor(U.div(t.size, U.vec2(2)));
          this.steps[i] || (this.steps[i] = new U.RenderTexture(n.x, n.y, false, U.TextureFormat.RGBA, U.FilterMode.Linear), this.steps[i].wrapMode = U.WrapMode.Clamp, this.steps[i].updateParameters());
          let s = this.steps[i];
          (s.width !== n.x || s.height !== n.y) && s.resize(n.x, n.y, U.TextureResizing.Discard), this.mateiralBlur.texture = t, this.mateiralBlur.textureSize = U.vec4(t.width, t.height, 1 / t.width, 1 / t.height), this.mateiralBlur.sampleOffset = 1, this.renderer.blit(t, s, this.mateiralBlur), t = s;
        }
      }
      upSample(t, r = this.steps[0]) {
        let i = this.steps[t];
        for (let n = t - 1; n >= 0; n--) {
          let s = U.mul(i.size, U.vec2(2));
          this.steps[n] || (this.steps[n] = new U.RenderTexture(s.x, s.y, false, U.TextureFormat.RGBA, U.FilterMode.Linear), this.steps[n].wrapMode = U.WrapMode.Clamp, this.steps[n].updateParameters());
          let a = n === 0 ? r : this.steps[n];
          this.mateiralBlur.texture = i, this.mateiralBlur.textureSize = U.vec4(i.width, i.height, 1 / i.width, 1 / i.height), this.mateiralBlur.sampleOffset = 1, this.renderer.blit(i, a, this.mateiralBlur), i = a;
        }
        return i;
      }
    };
    var Yr = $t(Ht());
    function Ra(e) {
      return Yr.vec2(Math.random(), Math.random()).mul(e.size).plus(e.min);
    }
    function wa() {
      return Math.random() * 2 - 1;
    }
    function ze(e, t) {
      return Math.random() * (t - e) + e;
    }
    var Ta = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uColor;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color.rgba = color * uColor;\r
    fragColor = color.rgba;\r
}`;
    var Aa = `#version 300 es\r
precision mediump float;\r
\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform sampler2D uMistTex;\r
uniform vec4 uMistColor;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color.rgb += vec3(uMistColor);\r
    color.a = texture(uMistTex, vUV.xy).r * uMistColor.a;\r
    fragColor = color.rgba;\r
}`;
    var Pa = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uBackgroundSize; // (x, y, 1/x, 1/y)\r
uniform sampler2D uRaindropTex;\r
uniform sampler2D uDropletTex;\r
uniform sampler2D uMistTex;\r
uniform vec4 uColor;\r
uniform vec2 uSmoothRaindrop;\r
uniform vec2 uRefractParams; // (refractBase, refractScale)\r
uniform vec4 uLightPos;\r
uniform vec4 uDiffuseColor; // (color.rgb, shadowOffset)\r
uniform vec4 uSpecularParams; // (color.rgb, exponent)\r
uniform float uBump;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    // vec3 lightPos = vec3(0.5, 1, 1);\r
\r
    vec4 raindrop = texture(uRaindropTex, vUV.xy).rgba;\r
    vec4 droplet = texture(uDropletTex, vUV.xy).rgba;\r
    float mist = texture(uMistTex, vUV.xy).r;\r
\r
    vec4 compose = vec4(raindrop.rgb + droplet.rgb - vec3(2.0) * raindrop.rgb * droplet.rgb, max(droplet.a, raindrop.a));\r
\r
    float mask = smoothstep(uSmoothRaindrop.x, uSmoothRaindrop.y, compose.a);\r
    \r
    vec2 uv = vUV.xy + -(compose.xy - vec2(0.5)) * vec2(compose.b * uRefractParams.y + uRefractParams.x);\r
    vec3 normal = normalize(vec3((compose.xy - vec2(0.5)) * vec2(2), 1.0));\r
\r
    // vec3 lightDir = lightPos - vec3(vUV, 0);\r
    vec3 lightDir = uLightPos.xyz - uLightPos.w * vec3(vUV.xy, 0.0);\r
    vec3 viewDir = vec3(0, 0, 1);\r
    vec3 halfDir = normalize(lightDir + viewDir);\r
    float lambertian = clamp(dot(normalize(lightDir), normal), 0.0, 1.0);\r
    float blinnPhon = pow(max(dot(normal, halfDir), 0.0), uSpecularParams.a);\r
\r
\r
    // offset = pow(offset, vec2(2));\r
    vec4 color = texture(uMainTex, uv.xy).rgba;\r
    vec3 diffuse = vec3((lambertian - uDiffuseColor.a) * uDiffuseColor.rgb);\r
\r
    color.rgb += vec3((lambertian - uDiffuseColor.a) * uDiffuseColor.rgb);\r
    color.rgb += vec3(blinnPhon) * uSpecularParams.rgb;\r
    \r
\r
    // fragColor = vec4(mask, mask, mask, 1);\r
    // color = color * vec3(uColor);\r
\r
    fragColor = vec4(color.rgb, mask);// vec4(color.rgb, mask);\r
}`;
    var Ea = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec2 aUV;\r
\r
uniform mat4 uTransformVP;\r
\r
uniform float uSeed;\r
uniform vec4 uSpawnRect; // (xmin, ymin, xsize, ysize)\r
uniform vec2 uSizeRange; \r
\r
out vec2 vUV;\r
\r
// Gold Noise \xA92015 dcerisano@standard3d.com\r
// - based on the Golden Ratio\r
// - uniform normalized distribution\r
// - fastest static noise generator function (also runs at low precision)\r
// Ref: https://www.shadertoy.com/view/ltB3zD\r
const float PHI = 1.61803398874989484820459; // \u03A6 = Golden Ratio \r
\r
float gold_noise(in vec2 xy, in float seed)\r
{\r
    return fract(tan(distance(xy*PHI, xy)*seed)*xy.x);\r
}\r
\r
vec2 lerp(vec2 a, vec2 b, vec2 t)\r
{\r
    return a + (b - a) * t;\r
}\r
\r
void main()\r
{\r
    int id = gl_InstanceID + 1;\r
    vec2 pos = uSpawnRect.xy + uSpawnRect.zw * vec2(\r
        gold_noise(vec2(1, id), uSeed + 1.0),\r
        gold_noise(vec2(id, 1), uSeed + 2.0));\r
\r
    vec2 size = vec2(\r
        gold_noise(vec2(1, id), uSeed + 3.0),\r
        gold_noise(vec2(id, 1), uSeed + 4.0));\r
    size = lerp(vec2(uSizeRange.x), vec2(uSizeRange.y), size);\r
    \r
    mat4 model = mat4(size.x, 0.0, 0.0, 0.0,  \r
                      0.0, size.x, 0.0, 0.0,  \r
                      0.0, 0.0, 1, 0.0,  \r
                      pos.x, pos.y, 0.0, 1.0); \r
    mat4 mvp = uTransformVP * model;\r
    gl_Position = mvp * vec4(aPos, 1);\r
    vUV = aUV;\r
}`;
    var Sa = `#version 300 es\r
precision mediump float;\r
\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uColor;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color.rgb *= color.a;\r
    fragColor = vec4(color.rg, 0.0, color.a);\r
}`;
    var Oa = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
\r
uniform sampler2D uMainTex;\r
uniform vec4 uColor;\r
uniform vec2 uEraserSmooth;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    color.a = smoothstep(uEraserSmooth.x, uEraserSmooth.y, color.a);\r
    fragColor = color.rgba;\r
}`;
    var Da = `#version 300 es\r
precision mediump float;\r
\r
in vec4 vColor;\r
in vec4 vPos;\r
in vec2 vUV;\r
in float vSize;\r
\r
uniform sampler2D uMainTex;\r
uniform float uSize;\r
\r
out vec4 fragColor;\r
\r
void main()\r
{\r
    vec4 color = texture(uMainTex, vUV.xy).rgba;\r
    \r
    fragColor = vec4(color.rg * color.a, vSize * color.a, color.a);\r
}`;
    var Ba = `#version 300 es\r
precision mediump float;\r
\r
in vec3 aPos;\r
in vec4 aColor;\r
in vec2 aUV;\r
in vec3 aNormal;\r
\r
in float aSize;\r
in mat4 aModelMatrix;\r
\r
uniform mat4 uTransformM;\r
uniform mat4 uTransformVP;\r
uniform mat4 uTransformMVP;\r
uniform mat4 uTransformM_IT;\r
\r
out vec4 vColor;\r
out vec4 vPos;\r
out vec2 vUV;\r
out vec3 vNormal;\r
out vec3 vWorldPos;\r
out float vSize;\r
\r
void main()\r
{\r
    mat4 mvp = uTransformVP * aModelMatrix;\r
    gl_Position = mvp * vec4(aPos, 1);\r
    vPos = gl_Position;\r
    vColor = aColor;\r
    vUV = aUV;\r
    vNormal = (uTransformM_IT *  vec4(aNormal, 0)).xyz;\r
    vWorldPos = (uTransformM * vec4(aPos, 1)).xyz;\r
    vSize = aSize;\r
}`;
    var Wr = class extends y.MaterialFromShader(new y.Shader(Ba, Da, {blendRGB: [y.Blending.OneMinusDstColor, y.Blending.OneMinusSrcColor], depth: y.DepthTest.Disable, zWrite: false, attributes: {size: "aSize", modelMatrix: "aModelMatrix"}})) {
      constructor() {
        super(...arguments);
        this.texture = null;
        this.size = 0;
      }
    };
    ie([y.shaderProp("uMainTex", "tex2d")], Wr.prototype, "texture", 2), ie([y.shaderProp("uSize", "float")], Wr.prototype, "size", 2);
    var jt = class extends y.MaterialFromShader(new y.Shader(Ea, Sa, {blendRGB: [y.Blending.OneMinusDstColor, y.Blending.OneMinusSrcColor], depth: y.DepthTest.Disable, zWrite: false, attributes: {size: "aSize", modelMatrix: "aModelMatrix"}})) {
      constructor() {
        super(...arguments);
        this.texture = null;
        this.spawnRect = y.vec4(0, 0, 1, 1);
        this.sizeRange = y.vec2(10, 20);
        this.seed = 1;
      }
    };
    ie([y.shaderProp("uMainTex", "tex2d")], jt.prototype, "texture", 2), ie([y.shaderProp("uSpawnRect", "vec4")], jt.prototype, "spawnRect", 2), ie([y.shaderProp("uSizeRange", "vec2")], jt.prototype, "sizeRange", 2), ie([y.shaderProp("uSeed", "float")], jt.prototype, "seed", 2);
    var qe = class extends y.MaterialFromShader(new y.Shader(It, Pa, {blend: [y.Blending.SrcAlpha, y.Blending.OneMinusSrcAlpha], depth: y.DepthTest.Disable, zWrite: false})) {
      constructor() {
        super(...arguments);
        this.background = null;
        this.backgroundSize = y.vec4.one();
        this.raindropTex = null;
        this.dropletTex = null;
        this.mistTex = null;
        this.smoothRaindrop = y.vec2(0.95, 1);
        this.refractParams = y.vec2(0.4, 0.6);
        this.lightPos = y.vec4(0.5, 0.5, 2, 1);
        this.diffuseLight = new y.Color(0.3, 0.3, 0.3, 0.8);
        this.specularParams = y.vec4(1, 1, 1, 32);
        this.bump = 1;
      }
    };
    ie([y.shaderProp("uMainTex", "tex2d")], qe.prototype, "background", 2), ie([y.shaderProp("uBackgroundSize", "vec4")], qe.prototype, "backgroundSize", 2), ie([y.shaderProp("uRaindropTex", "tex2d")], qe.prototype, "raindropTex", 2), ie([y.shaderProp("uDropletTex", "tex2d")], qe.prototype, "dropletTex", 2), ie([y.shaderProp("uMistTex", "tex2d")], qe.prototype, "mistTex", 2), ie([y.shaderProp("uSmoothRaindrop", "vec2")], qe.prototype, "smoothRaindrop", 2), ie([y.shaderProp("uRefractParams", "vec2")], qe.prototype, "refractParams", 2), ie([y.shaderProp("uLightPos", "vec4")], qe.prototype, "lightPos", 2), ie([y.shaderProp("uDiffuseColor", "color")], qe.prototype, "diffuseLight", 2), ie([y.shaderProp("uSpecularParams", "vec4")], qe.prototype, "specularParams", 2), ie([y.shaderProp("uBump", "float")], qe.prototype, "bump", 2);
    var Ci = class extends y.SimpleTexturedMaterial(new y.Shader(It, Oa, {blendRGB: [y.Blending.Zero, y.Blending.OneMinusSrcAlpha], blendAlpha: [y.Blending.Zero, y.Blending.OneMinusSrcAlpha]})) {
      constructor() {
        super(...arguments);
        this.eraserSize = y.vec2(0.93, 1);
      }
    };
    ie([y.shaderProp("uEraserSmooth", "vec2")], Ci.prototype, "eraserSize", 2);
    var P0 = y.SimpleTexturedMaterial(new y.Shader(It, Ta, {blend: [y.Blending.One, y.Blending.One]}));
    var kr = class extends y.SimpleTexturedMaterial(new y.Shader(It, Aa, {blend: [y.Blending.SrcAlpha, y.Blending.OneMinusSrcAlpha]})) {
      constructor() {
        super(...arguments);
        this.mistColor = new y.Color(0.01, 0.01, 0.01, 1);
        this.mistTex = null;
      }
    };
    ie([y.shaderProp("uMistColor", "color")], kr.prototype, "mistColor", 2), ie([y.shaderProp("uMistTex", "tex2d")], kr.prototype, "mistTex", 2);
    var Li = class {
      constructor(t) {
        this.raindropTex = null;
        this.originalBackground = null;
        this.matrlCompose = new qe();
        this.matrlRaindrop = new Wr();
        this.matrlDroplet = new jt();
        this.matrlErase = new Ci();
        this.matrlMist = new P0();
        this.matrlMistCompose = new kr();
        this.mesh = y.MeshBuilder.quad();
        this.raindropBuffer = new y.RenderBuffer({size: "float", modelMatrix: "mat4"}, 3e3);
        this.renderer = new y.ZograRenderer(t.canvas), this.renderer.gl.getExtension("EXT_color_buffer_float"), this.options = t, this.projectionMatrix = y.mat4.ortho(0, t.width, 0, t.height, 1, -1), this.raindropComposeTex = new y.RenderTexture(t.width, t.height, false), this.background = new y.RenderTexture(t.width, t.height, false), this.dropletTexture = new y.RenderTexture(t.width, t.height, false), this.blurryBackground = new y.RenderTexture(t.width, t.height, false), this.mistBackground = new y.RenderTexture(t.width, t.height, false), this.mistTexture = new y.RenderTexture(t.width, t.height, false, y.TextureFormat.R16F), this.blurRenderer = new Ii(this.renderer), this.renderer.setViewProjection(y.mat4.identity(), this.projectionMatrix);
      }
      async loadAssets() {
        this.raindropTex = await y.TextureImporter.buffer(_a).then((t) => t.tex2d()), this.matrlRaindrop.texture = this.raindropTex, this.matrlDroplet.texture = this.raindropTex, await this.reloadBackground();
      }
      async reloadBackground() {
        this.originalBackground?.destroy(), typeof this.options.background == "string" ? (this.originalBackground = await y.TextureImporter.url(this.options.background).then((i) => i.tex2d({wrapMpde: y.WrapMode.Clamp})), this.originalBackground.wrapMode = y.WrapMode.Clamp, this.originalBackground.updateParameters()) : (this.originalBackground = new y.Texture2D(), this.originalBackground.setData(this.options.background), this.originalBackground.updateParameters());
        let [t, r] = y.Utils.imageResize(this.originalBackground.size, this.background.size, y.Utils.ImageSizing.Cover);
        this.renderer.blit(this.originalBackground, this.background, this.renderer.assets.materials.blitCopy, t, r), this.background.generateMipmap(), this.blurBackground();
      }
      resize() {
        this.renderer.setSize(this.options.width, this.options.height), this.projectionMatrix = y.mat4.ortho(0, this.options.width, 0, this.options.height, 1, -1), this.renderer.setViewProjection(y.mat4.identity(), this.projectionMatrix), this.raindropComposeTex.resize(this.options.width, this.options.height), this.background.resize(this.options.width, this.options.height), this.dropletTexture.resize(this.options.width, this.options.height), this.blurryBackground.resize(this.options.width, this.options.height), this.mistBackground.resize(this.options.width, this.options.height), this.mistTexture.resize(this.options.width, this.options.height);
        let [t, r] = y.Utils.imageResize(this.originalBackground.size, this.background.size, y.Utils.ImageSizing.Cover);
        this.renderer.blit(this.originalBackground, this.background, this.renderer.assets.materials.blitCopy, t, r), this.background.generateMipmap(), this.blurBackground();
      }
      render(t, r) {
        this.drawDroplet(r), this.drawMist(r.dt), this.drawRaindrops(t), this.renderer.setRenderTarget(y.RenderTarget.CanvasTarget), this.renderer.clear(y.Color.black), this.drawBackground(), this.matrlCompose.background = this.blurryBackground, this.matrlCompose.backgroundSize = y.vec4(this.options.width, this.options.height, 1 / this.options.width, 1 / this.options.height), this.matrlCompose.raindropTex = this.raindropComposeTex, this.matrlCompose.dropletTex = this.dropletTexture, this.matrlCompose.mistTex = this.mistTexture, this.matrlCompose.smoothRaindrop = y.vec2(...this.options.smoothRaindrop), this.matrlCompose.refractParams = y.vec2(this.options.refractBase, this.options.refractScale), this.matrlCompose.lightPos = y.vec4(...this.options.raindropLightPos), this.matrlCompose.diffuseLight = new y.Color(...this.options.raindropDiffuseLight, this.options.raindropShadowOffset), this.matrlCompose.specularParams = y.vec4(...this.options.raindropSpecularLight, this.options.raindropSpecularShininess), this.matrlCompose.bump = this.options.raindropLightBump, this.renderer.blit(null, y.RenderTarget.CanvasTarget, this.matrlCompose);
      }
      blurBackground() {
        this.options.mist ? (this.blurRenderer.init(this.background), this.blurRenderer.downSample(this.background, Math.max(this.options.backgroundBlurSteps, this.options.mistBlurStep)), this.options.backgroundBlurSteps === this.options.mistBlurStep ? (this.blurRenderer.upSample(this.options.backgroundBlurSteps, this.blurryBackground), this.renderer.blit(this.blurryBackground, this.mistBackground)) : this.options.mistBlurStep > this.options.backgroundBlurSteps ? (this.blurRenderer.upSample(this.options.backgroundBlurSteps, this.blurryBackground), this.blurRenderer.upSample(this.options.mistBlurStep, this.mistBackground)) : (this.blurRenderer.upSample(this.options.mistBlurStep, this.mistBackground), this.blurRenderer.upSample(this.options.backgroundBlurSteps, this.blurryBackground))) : this.blurRenderer.blur(this.background, this.options.backgroundBlurSteps, this.blurryBackground);
      }
      drawMist(t) {
        !this.options.mist || (this.matrlMist.color.r = t / this.options.mistTime, this.renderer.blit(this.renderer.assets.textures.default, this.mistTexture, this.matrlMist));
      }
      drawBackground() {
        this.renderer.blit(this.blurryBackground, y.RenderTarget.CanvasTarget), this.options.mist && (this.matrlMistCompose.mistTex = this.mistTexture, this.matrlMistCompose.texture = this.mistBackground, this.matrlMistCompose.mistColor = new y.Color(...this.options.mistColor), this.renderer.blit(this.mistBackground, y.RenderTarget.CanvasTarget, this.matrlMistCompose));
      }
      drawRaindrops(t) {
        t.length > this.raindropBuffer.length && this.raindropBuffer.resize(this.raindropBuffer.length * 2), this.renderer.setRenderTarget(this.raindropComposeTex), this.renderer.clear(y.Color.black.transparent());
        for (let r = 0; r < t.length; r++) {
          let i = t[r], n = y.mat4.rts(y.quat.identity(), i.pos.toVec3(), i.size.toVec3(1));
          this.raindropBuffer[r].modelMatrix.set(n), this.raindropBuffer[r].size[0] = i.size.x / 100;
        }
        switch (this.options.raindropCompose) {
          case "smoother":
            this.matrlRaindrop.shader.setPipelineStates({blendRGB: [y.Blending.OneMinusDstColor, y.Blending.OneMinusSrcColor]}), this.matrlDroplet.shader.setPipelineStates({blendRGB: [y.Blending.OneMinusDstColor, y.Blending.OneMinusSrcColor]});
            break;
          case "harder":
            this.matrlRaindrop.shader.setPipelineStates({blendRGB: [y.Blending.One, y.Blending.OneMinusSrcAlpha]}), this.matrlDroplet.shader.setPipelineStates({blendRGB: [y.Blending.One, y.Blending.OneMinusSrcAlpha]});
            break;
        }
        this.renderer.drawMeshInstance(this.mesh, this.raindropBuffer, this.matrlRaindrop, t.length), this.matrlErase.eraserSize = y.vec2(...this.options.raindropEraserSize), this.renderer.blit(this.raindropComposeTex, this.dropletTexture, this.matrlErase), this.options.mist && this.renderer.blit(this.raindropComposeTex, this.mistTexture, this.matrlErase);
      }
      drawDroplet(t) {
        this.renderer.setRenderTarget(this.dropletTexture);
        let r = this.options.dropletsPerSeconds * t.dt;
        this.matrlDroplet.spawnRect = y.vec4(0, 0, this.options.width, this.options.height), this.matrlDroplet.sizeRange = y.vec2(...this.options.dropletSize), this.matrlDroplet.seed = ze(0, 133), this.renderer.drawMeshProceduralInstance(this.mesh, this.matrlDroplet, r);
      }
    };
    var xe = $t(Ht());
    function Ia(e, t, r) {
      return e + (t - e) * r;
    }
    var Hr = class {
      constructor(t, r, i, n = 1) {
        this.density = 1;
        this.velocity = xe.vec2.zero();
        this.destroied = false;
        this._mass = 0;
        this._size = xe.vec2.zero();
        this.resistance = 0;
        this.shifting = 0;
        this.nextRandomTime = 0;
        this.pos = r, this.simulator = t, this.density = n, this.lastTrailPos = r.clone(), this.nextTrailDistance = ze(...t.options.trailDistance), this.spread = xe.vec2(t.options.initialSpread), this.mass = (i * n) ** 2;
      }
      get mass() {
        return this._mass;
      }
      set mass(t) {
        this._mass = t;
        let r = Math.sqrt(t) / this.density;
        this._size.x = (this.spread.x + 1) * r, this._size.y = (this.spread.y + 1) * r;
      }
      get size() {
        return this._size;
      }
      get mergeDistance() {
        return this.size.x * (1 + this.spread.x) * 0.16 * this.simulator.options.colliderSize;
      }
      get options() {
        return this.simulator.options;
      }
      updateRaindrop(t) {
        this.nextRandomTime <= t.total && (this.nextRandomTime = t.total + ze(...this.simulator.options.motionInterval), this.randomMotion()), this.mass -= this.simulator.options.evaporate * t.dt;
        let i = (this.options.gravity * this.mass - this.resistance) / this.mass;
        this.velocity.y -= i * t.dt, this.velocity.y > 0 && (this.velocity.y = 0), this.velocity.x = Math.abs(this.velocity.y) * this.shifting, this.pos.x += this.velocity.x * t.dt, this.pos.y += this.velocity.y * t.dt;
        let n = this.simulator.options.velocitySpread * 2 * Math.atan(Math.abs(this.velocity.y * 5e-3)) / Math.PI;
        this.spread.y = Math.max(this.spread.y, n), this.spread.x *= Math.pow(this.simulator.options.shrinkRate, t.dt), this.spread.y *= Math.pow(this.simulator.options.shrinkRate, t.dt), xe.Vector2.distanceSquared(this.lastTrailPos, this.pos) > this.nextTrailDistance * this.nextTrailDistance && this.split();
      }
      split() {
        if (this.mass < 1e3)
          return;
        let t = this.size.x * ze(...this.simulator.options.trailDropSize), r = xe.plus(xe.vec2(ze(-5, 5), this.size.y / 4), this.pos), i = this.simulator.spawner.spawn(r.clone(), t, this.simulator.options.trailDropDensity);
        i.spread = xe.vec2(0.1, Math.abs(this.velocity.y) * 0.01 * this.options.trailSpread), i.parent = this, this.mass -= i.mass, this.simulator.add(i), this.lastTrailPos = this.pos.clone(), this.nextTrailDistance = ze(...this.simulator.options.trailDistance);
      }
      randomMotion() {
        let t = Ia(...this.simulator.options.spawnSize, 1 - this.simulator.options.slipRate) ** 2 * 4;
        this.resistance = ze(0, 1) * this.options.gravity * t, this.shifting = wa() * ze(...this.simulator.options.xShifting);
      }
      merge(t) {
        let r = xe.mul(this.velocity, this.mass), i = xe.mul(t.velocity, t.mass), n = xe.plus(r, i);
        this.mass += t.mass, this.velocity = xe.div(n, this.mass);
      }
    };
    var zi = class {
      constructor(t, r) {
        this.currentTime = 0;
        this.nextSpawn = 0;
        this.simulator = t;
      }
      get interval() {
        return this.simulator.options.spawnInterval;
      }
      get size() {
        return this.simulator.options.spawnSize;
      }
      get spawnRect() {
        return this.simulator.options.viewport;
      }
      update(t) {
        return this.currentTime += t, this;
      }
      *trySpawn() {
        for (; this.currentTime >= this.nextSpawn; ) {
          let t = ze(...this.size), r = Ra(this.spawnRect);
          this.nextSpawn += ze(...this.interval), yield new Hr(this.simulator, r, t);
        }
        this.currentTime >= this.nextSpawn;
      }
      spawn(t, r, i = 1) {
        return new Hr(this.simulator, t, r, i);
      }
    };
    var Ca = class extends Array {
      push(...t) {
        return super.push(...t);
      }
      add(t) {
        let r = super.push(t);
        t.gridIdx = r - 1, t.grid = this;
      }
      delete(t) {
        this[t.gridIdx] = this[this.length - 1], this[t.gridIdx].gridIdx = t.gridIdx, this.length--, t.gridIdx = -1, t.grid = void 0;
      }
    };
    var qi = class {
      constructor(t) {
        this.raindrops = [];
        this.grid = [];
        this.options = t, this.spawner = new zi(this, t), this.resize();
      }
      get gridSize() {
        return this.options.spawnSize[1] * 0.3;
      }
      resize() {
        let t = Math.ceil(this.options.viewport.size.x / this.gridSize), r = Math.ceil(this.options.viewport.size.y / this.gridSize), i = 0;
        this.grid.length < t * r && (i = this.grid.length, this.grid.length = t * r);
        for (let n = i; n < this.grid.length; n++)
          this.grid[n] = new Ca();
      }
      gridAt(t, r) {
        if (t < 0 || r < 0)
          return;
        let i = Math.ceil((this.options.viewport.xMax - this.options.viewport.xMin) / this.gridSize), n = r * i + t;
        if (!(n >= this.grid.length))
          return this.grid[n];
      }
      gridAtWorldPos(t, r) {
        return this.gridAt(...this.worldToGrid(t, r));
      }
      worldToGrid(t, r) {
        let i = Math.floor(t / this.gridSize), n = Math.floor(r / this.gridSize);
        return [i, n];
      }
      add(t) {
        this.raindrops.push(t);
        let r = this.gridAtWorldPos(t.pos.x, t.pos.y);
        r && (r.add(t), t.gridIdx = r.length - 1);
      }
      update(t) {
        if (this.raindrops.length <= this.options.spawnLimit)
          for (let r of this.spawner.update(t.dt).trySpawn())
            this.raindrops.push(r);
        this.raindropUpdate(t), this.collisionUpdate();
        for (let r = 0; r < this.raindrops.length; r++)
          this.raindrops[r].destroied && (this.raindrops[r].grid?.delete(this.raindrops[r]), this.raindrops[r] = this.raindrops[this.raindrops.length - 1], this.raindrops.length--);
      }
      raindropUpdate(t) {
        for (let r = 0; r < this.raindrops.length; r++) {
          let i = this.raindrops[r];
          if (i.destroied || (i.updateRaindrop(t), i.pos.y < -100 && (i.destroied = true), i.destroied))
            continue;
          let [n, s] = this.worldToGrid(i.pos.x, i.pos.y), a = this.gridAt(n, s);
          a !== i.grid && (i.grid?.delete(i), a?.add(i), i.grid = a);
        }
      }
      collisionUpdate() {
        for (let t = 0; t < this.raindrops.length; t++) {
          let r = this.raindrops[t];
          if (r.destroied)
            continue;
          let [i, n] = this.worldToGrid(r.pos.x, r.pos.y);
          for (let s = -1; s <= 1; s++)
            for (let a = -1; a <= 1; a++) {
              let o = this.gridAt(i + s, n + a);
              if (!!o)
                for (let l of o) {
                  let c = l === r, h = l.parent === r || r.parent === l, u = r.parent && r.parent === l.parent;
                  if (l.destroied || h || u || c)
                    continue;
                  let d = r.pos.x - l.pos.x, f = r.pos.y - l.pos.y;
                  Math.sqrt(d * d + f * f) - r.mergeDistance - l.mergeDistance < 0 && (r.mass >= l.mass ? (r.merge(l), l.destroied = true) : (l.merge(r), r.destroied = true));
                }
            }
        }
      }
    };
    var La = class {
      constructor(t) {
        this.animHandle = 0;
        let r = t.canvas, i = {spawnInterval: [0.1, 0.1], spawnSize: [60, 100], spawnLimit: 2e3, viewport: new mt.Rect(mt.vec2.zero(), mt.vec2(r.width, r.height)), canvas: r, width: r.width, height: r.height, background: "", gravity: 2400, slipRate: 0, motionInterval: [0.1, 0.4], colliderSize: 1, trailDropDensity: 0.2, trailDistance: [20, 30], trailDropSize: [0.3, 0.5], trailSpread: 0.6, initialSpread: 0.5, shrinkRate: 0.01, velocitySpread: 0.3, evaporate: 10, xShifting: [0, 0.1], backgroundBlurSteps: 3, mist: true, mistColor: [0.01, 0.01, 0.01, 1], mistBlurStep: 4, mistTime: 10, dropletsPerSeconds: 500, dropletSize: [10, 30], smoothRaindrop: [0.96, 0.99], refractBase: 0.4, refractScale: 0.6, raindropCompose: "smoother", raindropLightPos: [-1, 1, 2, 0], raindropDiffuseLight: [0.2, 0.2, 0.2], raindropShadowOffset: 0.8, raindropEraserSize: [0.93, 1], raindropSpecularLight: [0, 0, 0], raindropSpecularShininess: 256, raindropLightBump: 1};
        this.options = {...i, ...t}, this.simulator = new qi(this.options), this.renderer = new Li(this.options);
      }
      async start() {
        await this.renderer.loadAssets();
        let t = 0, r = (i) => {
          let n = (i - t) / 1e3;
          t = i;
          let s = {dt: 0.03, total: i / 1e3};
          this.update(s), this.animHandle = requestAnimationFrame(r);
        };
        this.animHandle = requestAnimationFrame(r);
      }
      stop() {
        cancelAnimationFrame(this.animHandle);
      }
      resize(t, r) {
        this.options.width = t, this.options.height = r, this.options.viewport = new mt.Rect(mt.vec2.zero(), mt.vec2(t, r)), this.renderer.resize();
      }
      async setBackground(t) {
        this.renderer.options.background = t, await this.renderer.reloadBackground();
      }
      update(t) {
        this.simulator.update(t), this.renderer.render(this.simulator.raindrops, t);
      }
    };
    module.exports = La;
    /*! *****************************************************************************
    Copyright (C) Microsoft. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
  });

  // src/index.js
  var RaindropFX = require_dist();
  var canvas = document.querySelector("#canvas");
  var rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
  var raindropFx = new RaindropFX({
    canvas,
    background: "../../assets/img/84765992_p0.jpg"
  });
  window.onresize = () => {
    const rect2 = canvas.getBoundingClientRect();
    raindropFx.resize(rect2.width, rect2.height);
  };
  raindropFx.start();
})();
