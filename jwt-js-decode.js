!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports, require("crypto"))
    : "function" == typeof define && define.amd
    ? define(["exports", "crypto"], e)
    : e((t.jwtJsDecode = {}), null);
})(this, function (t, a) {
  "use strict";
  function f(a, s, o, h) {
    return new (o || (o = Promise))(function (t, e) {
      function r(t) {
        try {
          i(h.next(t));
        } catch (t) {
          e(t);
        }
      }
      function n(t) {
        try {
          i(h.throw(t));
        } catch (t) {
          e(t);
        }
      }
      function i(e) {
        e.done
          ? t(e.value)
          : new o(function (t) {
              t(e.value);
            }).then(r, n);
      }
      i((h = h.apply(a, s || [])).next());
    });
  }
  function d(r, n) {
    var i,
      a,
      s,
      t,
      o = {
        label: 0,
        sent: function () {
          if (1 & s[0]) throw s[1];
          return s[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (t = { next: e(0), throw: e(1), return: e(2) }),
      "function" == typeof Symbol &&
        (t[Symbol.iterator] = function () {
          return this;
        }),
      t
    );
    function e(e) {
      return function (t) {
        return (function (e) {
          if (i) throw new TypeError("Generator is already executing.");
          for (; o; )
            try {
              if (
                ((i = 1),
                a &&
                  (s =
                    2 & e[0]
                      ? a.return
                      : e[0]
                      ? a.throw || ((s = a.return) && s.call(a), 0)
                      : a.next) &&
                  !(s = s.call(a, e[1])).done)
              )
                return s;
              switch (((a = 0), s && (e = [2 & e[0], s.value]), e[0])) {
                case 0:
                case 1:
                  s = e;
                  break;
                case 4:
                  return o.label++, { value: e[1], done: !1 };
                case 5:
                  o.label++, (a = e[1]), (e = [0]);
                  continue;
                case 7:
                  (e = o.ops.pop()), o.trys.pop();
                  continue;
                default:
                  if (
                    !(s = 0 < (s = o.trys).length && s[s.length - 1]) &&
                    (6 === e[0] || 2 === e[0])
                  ) {
                    o = 0;
                    continue;
                  }
                  if (3 === e[0] && (!s || (e[1] > s[0] && e[1] < s[3]))) {
                    o.label = e[1];
                    break;
                  }
                  if (6 === e[0] && o.label < s[1]) {
                    (o.label = s[1]), (s = e);
                    break;
                  }
                  if (s && o.label < s[2]) {
                    (o.label = s[2]), o.ops.push(e);
                    break;
                  }
                  s[2] && o.ops.pop(), o.trys.pop();
                  continue;
              }
              e = n.call(r, o);
            } catch (t) {
              (e = [6, t]), (a = 0);
            } finally {
              i = s = 0;
            }
          if (5 & e[0]) throw e[1];
          return { value: e[0] ? e[1] : void 0, done: !0 };
        })([e, t]);
      };
    }
  }
  a = a && a.hasOwnProperty("default") ? a.default : a;
  var e,
    T =
      ((function (t, e) {
        var r =
          "undefined" != typeof Uint8Array &&
          "undefined" != typeof Uint16Array &&
          "undefined" != typeof Int32Array;
        (e.assign = function (t) {
          for (
            var e, r, n = Array.prototype.slice.call(arguments, 1);
            n.length;

          ) {
            var i = n.shift();
            if (i) {
              if ("object" != typeof i)
                throw new TypeError(i + "must be non-object");
              for (var a in i)
                (e = i),
                  (r = a),
                  Object.prototype.hasOwnProperty.call(e, r) && (t[a] = i[a]);
            }
          }
          return t;
        }),
          (e.shrinkBuf = function (t, e) {
            return t.length === e
              ? t
              : t.subarray
              ? t.subarray(0, e)
              : ((t.length = e), t);
          });
        var n = {
            arraySet: function (t, e, r, n, i) {
              if (e.subarray && t.subarray) t.set(e.subarray(r, r + n), i);
              else for (var a = 0; a < n; a++) t[i + a] = e[r + a];
            },
            flattenChunks: function (t) {
              var e, r, n, i, a, s;
              for (e = n = 0, r = t.length; e < r; e++) n += t[e].length;
              for (s = new Uint8Array(n), e = i = 0, r = t.length; e < r; e++)
                (a = t[e]), s.set(a, i), (i += a.length);
              return s;
            },
          },
          i = {
            arraySet: function (t, e, r, n, i) {
              for (var a = 0; a < n; a++) t[i + a] = e[r + a];
            },
            flattenChunks: function (t) {
              return [].concat.apply([], t);
            },
          };
        (e.setTyped = function (t) {
          t
            ? ((e.Buf8 = Uint8Array),
              (e.Buf16 = Uint16Array),
              (e.Buf32 = Int32Array),
              e.assign(e, n))
            : ((e.Buf8 = Array),
              (e.Buf16 = Array),
              (e.Buf32 = Array),
              e.assign(e, i));
        }),
          e.setTyped(r);
      })((e = { exports: {} }), e.exports),
      e.exports),
    o = (T.assign, T.shrinkBuf, T.setTyped, T.Buf8, T.Buf16, T.Buf32, 0),
    h = 1;
  function r(t) {
    for (var e = t.length; 0 <= --e; ) t[e] = 0;
  }
  var u = 0,
    s = 29,
    l = 256,
    c = l + 1 + s,
    _ = 30,
    g = 19,
    p = 2 * c + 1,
    w = 15,
    n = 16,
    b = 7,
    m = 256,
    v = 16,
    y = 17,
    k = 18,
    S = [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1,
      1,
      2,
      2,
      2,
      2,
      3,
      3,
      3,
      3,
      4,
      4,
      4,
      4,
      5,
      5,
      5,
      5,
      0,
    ],
    x = [
      0,
      0,
      0,
      0,
      1,
      1,
      2,
      2,
      3,
      3,
      4,
      4,
      5,
      5,
      6,
      6,
      7,
      7,
      8,
      8,
      9,
      9,
      10,
      10,
      11,
      11,
      12,
      12,
      13,
      13,
    ],
    E = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
    z = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    A = new Array(2 * (c + 2));
  r(A);
  var B = new Array(2 * _);
  r(B);
  var C = new Array(512);
  r(C);
  var N = new Array(256);
  r(N);
  var I = new Array(s);
  r(I);
  var R,
    O,
    U,
    Z = new Array(_);
  function D(t, e, r, n, i) {
    (this.static_tree = t),
      (this.extra_bits = e),
      (this.extra_base = r),
      (this.elems = n),
      (this.max_length = i),
      (this.has_stree = t && t.length);
  }
  function i(t, e) {
    (this.dyn_tree = t), (this.max_code = 0), (this.stat_desc = e);
  }
  function H(t) {
    return t < 256 ? C[t] : C[256 + (t >>> 7)];
  }
  function j(t, e) {
    (t.pending_buf[t.pending++] = 255 & e),
      (t.pending_buf[t.pending++] = (e >>> 8) & 255);
  }
  function L(t, e, r) {
    t.bi_valid > n - r
      ? ((t.bi_buf |= (e << t.bi_valid) & 65535),
        j(t, t.bi_buf),
        (t.bi_buf = e >> (n - t.bi_valid)),
        (t.bi_valid += r - n))
      : ((t.bi_buf |= (e << t.bi_valid) & 65535), (t.bi_valid += r));
  }
  function P(t, e, r) {
    L(t, r[2 * e], r[2 * e + 1]);
  }
  function F(t, e) {
    for (var r = 0; (r |= 1 & t), (t >>>= 1), (r <<= 1), 0 < --e; );
    return r >>> 1;
  }
  function M(t, e, r) {
    var n,
      i,
      a = new Array(w + 1),
      s = 0;
    for (n = 1; n <= w; n++) a[n] = s = (s + r[n - 1]) << 1;
    for (i = 0; i <= e; i++) {
      var o = t[2 * i + 1];
      0 !== o && (t[2 * i] = F(a[o]++, o));
    }
  }
  function K(t) {
    var e;
    for (e = 0; e < c; e++) t.dyn_ltree[2 * e] = 0;
    for (e = 0; e < _; e++) t.dyn_dtree[2 * e] = 0;
    for (e = 0; e < g; e++) t.bl_tree[2 * e] = 0;
    (t.dyn_ltree[2 * m] = 1),
      (t.opt_len = t.static_len = 0),
      (t.last_lit = t.matches = 0);
  }
  function G(t) {
    8 < t.bi_valid
      ? j(t, t.bi_buf)
      : 0 < t.bi_valid && (t.pending_buf[t.pending++] = t.bi_buf),
      (t.bi_buf = 0),
      (t.bi_valid = 0);
  }
  function J(t, e, r, n) {
    var i = 2 * e,
      a = 2 * r;
    return t[i] < t[a] || (t[i] === t[a] && n[e] <= n[r]);
  }
  function Y(t, e, r) {
    for (
      var n = t.heap[r], i = r << 1;
      i <= t.heap_len &&
      (i < t.heap_len && J(e, t.heap[i + 1], t.heap[i], t.depth) && i++,
      !J(e, n, t.heap[i], t.depth));

    )
      (t.heap[r] = t.heap[i]), (r = i), (i <<= 1);
    t.heap[r] = n;
  }
  function V(t, e, r) {
    var n,
      i,
      a,
      s,
      o = 0;
    if (0 !== t.last_lit)
      for (
        ;
        (n =
          (t.pending_buf[t.d_buf + 2 * o] << 8) |
          t.pending_buf[t.d_buf + 2 * o + 1]),
          (i = t.pending_buf[t.l_buf + o]),
          o++,
          0 === n
            ? P(t, i, e)
            : (P(t, (a = N[i]) + l + 1, e),
              0 !== (s = S[a]) && L(t, (i -= I[a]), s),
              P(t, (a = H(--n)), r),
              0 !== (s = x[a]) && L(t, (n -= Z[a]), s)),
          o < t.last_lit;

      );
    P(t, m, e);
  }
  function q(t, e) {
    var r,
      n,
      i,
      a = e.dyn_tree,
      s = e.stat_desc.static_tree,
      o = e.stat_desc.has_stree,
      h = e.stat_desc.elems,
      u = -1;
    for (t.heap_len = 0, t.heap_max = p, r = 0; r < h; r++)
      0 !== a[2 * r]
        ? ((t.heap[++t.heap_len] = u = r), (t.depth[r] = 0))
        : (a[2 * r + 1] = 0);
    for (; t.heap_len < 2; )
      (a[2 * (i = t.heap[++t.heap_len] = u < 2 ? ++u : 0)] = 1),
        (t.depth[i] = 0),
        t.opt_len--,
        o && (t.static_len -= s[2 * i + 1]);
    for (e.max_code = u, r = t.heap_len >> 1; 1 <= r; r--) Y(t, a, r);
    for (
      i = h;
      (r = t.heap[1]),
        (t.heap[1] = t.heap[t.heap_len--]),
        Y(t, a, 1),
        (n = t.heap[1]),
        (t.heap[--t.heap_max] = r),
        (t.heap[--t.heap_max] = n),
        (a[2 * i] = a[2 * r] + a[2 * n]),
        (t.depth[i] = (t.depth[r] >= t.depth[n] ? t.depth[r] : t.depth[n]) + 1),
        (a[2 * r + 1] = a[2 * n + 1] = i),
        (t.heap[1] = i++),
        Y(t, a, 1),
        2 <= t.heap_len;

    );
    (t.heap[--t.heap_max] = t.heap[1]),
      (function (t, e) {
        var r,
          n,
          i,
          a,
          s,
          o,
          h = e.dyn_tree,
          u = e.max_code,
          l = e.stat_desc.static_tree,
          f = e.stat_desc.has_stree,
          d = e.stat_desc.extra_bits,
          c = e.stat_desc.extra_base,
          _ = e.stat_desc.max_length,
          g = 0;
        for (a = 0; a <= w; a++) t.bl_count[a] = 0;
        for (h[2 * t.heap[t.heap_max] + 1] = 0, r = t.heap_max + 1; r < p; r++)
          _ < (a = h[2 * h[2 * (n = t.heap[r]) + 1] + 1] + 1) && ((a = _), g++),
            (h[2 * n + 1] = a),
            u < n ||
              (t.bl_count[a]++,
              (s = 0),
              c <= n && (s = d[n - c]),
              (o = h[2 * n]),
              (t.opt_len += o * (a + s)),
              f && (t.static_len += o * (l[2 * n + 1] + s)));
        if (0 !== g) {
          do {
            for (a = _ - 1; 0 === t.bl_count[a]; ) a--;
            t.bl_count[a]--,
              (t.bl_count[a + 1] += 2),
              t.bl_count[_]--,
              (g -= 2);
          } while (0 < g);
          for (a = _; 0 !== a; a--)
            for (n = t.bl_count[a]; 0 !== n; )
              u < (i = t.heap[--r]) ||
                (h[2 * i + 1] !== a &&
                  ((t.opt_len += (a - h[2 * i + 1]) * h[2 * i]),
                  (h[2 * i + 1] = a)),
                n--);
        }
      })(t, e),
      M(a, u, t.bl_count);
  }
  function X(t, e, r) {
    var n,
      i,
      a = -1,
      s = e[1],
      o = 0,
      h = 7,
      u = 4;
    for (
      0 === s && ((h = 138), (u = 3)), e[2 * (r + 1) + 1] = 65535, n = 0;
      n <= r;
      n++
    )
      (i = s),
        (s = e[2 * (n + 1) + 1]),
        (++o < h && i === s) ||
          (o < u
            ? (t.bl_tree[2 * i] += o)
            : 0 !== i
            ? (i !== a && t.bl_tree[2 * i]++, t.bl_tree[2 * v]++)
            : o <= 10
            ? t.bl_tree[2 * y]++
            : t.bl_tree[2 * k]++,
          (a = i),
          (o = 0) === s
            ? ((h = 138), (u = 3))
            : i === s
            ? ((h = 6), (u = 3))
            : ((h = 7), (u = 4)));
  }
  function W(t, e, r) {
    var n,
      i,
      a = -1,
      s = e[1],
      o = 0,
      h = 7,
      u = 4;
    for (0 === s && ((h = 138), (u = 3)), n = 0; n <= r; n++)
      if (((i = s), (s = e[2 * (n + 1) + 1]), !(++o < h && i === s))) {
        if (o < u) for (; P(t, i, t.bl_tree), 0 != --o; );
        else
          0 !== i
            ? (i !== a && (P(t, i, t.bl_tree), o--),
              P(t, v, t.bl_tree),
              L(t, o - 3, 2))
            : o <= 10
            ? (P(t, y, t.bl_tree), L(t, o - 3, 3))
            : (P(t, k, t.bl_tree), L(t, o - 11, 7));
        (a = i),
          (o = 0) === s
            ? ((h = 138), (u = 3))
            : i === s
            ? ((h = 6), (u = 3))
            : ((h = 7), (u = 4));
      }
  }
  r(Z);
  var $ = !1;
  function Q(t, e, r, n) {
    var i, a, s, o;
    L(t, (u << 1) + (n ? 1 : 0), 3),
      (a = e),
      (s = r),
      (o = !0),
      G((i = t)),
      o && (j(i, s), j(i, ~s)),
      T.arraySet(i.pending_buf, i.window, a, s, i.pending),
      (i.pending += s);
  }
  var tt = {
    _tr_init: function (t) {
      $ ||
        ((function () {
          var t,
            e,
            r,
            n,
            i,
            a = new Array(w + 1);
          for (n = r = 0; n < s - 1; n++)
            for (I[n] = r, t = 0; t < 1 << S[n]; t++) N[r++] = n;
          for (N[r - 1] = n, n = i = 0; n < 16; n++)
            for (Z[n] = i, t = 0; t < 1 << x[n]; t++) C[i++] = n;
          for (i >>= 7; n < _; n++)
            for (Z[n] = i << 7, t = 0; t < 1 << (x[n] - 7); t++)
              C[256 + i++] = n;
          for (e = 0; e <= w; e++) a[e] = 0;
          for (t = 0; t <= 143; ) (A[2 * t + 1] = 8), t++, a[8]++;
          for (; t <= 255; ) (A[2 * t + 1] = 9), t++, a[9]++;
          for (; t <= 279; ) (A[2 * t + 1] = 7), t++, a[7]++;
          for (; t <= 287; ) (A[2 * t + 1] = 8), t++, a[8]++;
          for (M(A, c + 1, a), t = 0; t < _; t++)
            (B[2 * t + 1] = 5), (B[2 * t] = F(t, 5));
          (R = new D(A, S, l + 1, c, w)),
            (O = new D(B, x, 0, _, w)),
            (U = new D(new Array(0), E, 0, g, b));
        })(),
        ($ = !0)),
        (t.l_desc = new i(t.dyn_ltree, R)),
        (t.d_desc = new i(t.dyn_dtree, O)),
        (t.bl_desc = new i(t.bl_tree, U)),
        (t.bi_buf = 0),
        (t.bi_valid = 0),
        K(t);
    },
    _tr_stored_block: Q,
    _tr_flush_block: function (t, e, r, n) {
      var i,
        a,
        s = 0;
      0 < t.level
        ? (2 === t.strm.data_type &&
            (t.strm.data_type = (function (t) {
              var e,
                r = 4093624447;
              for (e = 0; e <= 31; e++, r >>>= 1)
                if (1 & r && 0 !== t.dyn_ltree[2 * e]) return o;
              if (
                0 !== t.dyn_ltree[18] ||
                0 !== t.dyn_ltree[20] ||
                0 !== t.dyn_ltree[26]
              )
                return h;
              for (e = 32; e < l; e++) if (0 !== t.dyn_ltree[2 * e]) return h;
              return o;
            })(t)),
          q(t, t.l_desc),
          q(t, t.d_desc),
          (s = (function (t) {
            var e;
            for (
              X(t, t.dyn_ltree, t.l_desc.max_code),
                X(t, t.dyn_dtree, t.d_desc.max_code),
                q(t, t.bl_desc),
                e = g - 1;
              3 <= e && 0 === t.bl_tree[2 * z[e] + 1];
              e--
            );
            return (t.opt_len += 3 * (e + 1) + 5 + 5 + 4), e;
          })(t)),
          (i = (t.opt_len + 3 + 7) >>> 3),
          (a = (t.static_len + 3 + 7) >>> 3) <= i && (i = a))
        : (i = a = r + 5),
        r + 4 <= i && -1 !== e
          ? Q(t, e, r, n)
          : 4 === t.strategy || a === i
          ? (L(t, 2 + (n ? 1 : 0), 3), V(t, A, B))
          : (L(t, 4 + (n ? 1 : 0), 3),
            (function (t, e, r, n) {
              var i;
              for (
                L(t, e - 257, 5), L(t, r - 1, 5), L(t, n - 4, 4), i = 0;
                i < n;
                i++
              )
                L(t, t.bl_tree[2 * z[i] + 1], 3);
              W(t, t.dyn_ltree, e - 1), W(t, t.dyn_dtree, r - 1);
            })(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, s + 1),
            V(t, t.dyn_ltree, t.dyn_dtree)),
        K(t),
        n && G(t);
    },
    _tr_tally: function (t, e, r) {
      return (
        (t.pending_buf[t.d_buf + 2 * t.last_lit] = (e >>> 8) & 255),
        (t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e),
        (t.pending_buf[t.l_buf + t.last_lit] = 255 & r),
        t.last_lit++,
        0 === e
          ? t.dyn_ltree[2 * r]++
          : (t.matches++,
            e--,
            t.dyn_ltree[2 * (N[r] + l + 1)]++,
            t.dyn_dtree[2 * H(e)]++),
        t.last_lit === t.lit_bufsize - 1
      );
    },
    _tr_align: function (t) {
      var e;
      L(t, 2, 3),
        P(t, m, A),
        16 === (e = t).bi_valid
          ? (j(e, e.bi_buf), (e.bi_buf = 0), (e.bi_valid = 0))
          : 8 <= e.bi_valid &&
            ((e.pending_buf[e.pending++] = 255 & e.bi_buf),
            (e.bi_buf >>= 8),
            (e.bi_valid -= 8));
    },
  };
  var et = function (t, e, r, n) {
    for (
      var i = (65535 & t) | 0, a = ((t >>> 16) & 65535) | 0, s = 0;
      0 !== r;

    ) {
      for (
        r -= s = 2e3 < r ? 2e3 : r;
        (a = (a + (i = (i + e[n++]) | 0)) | 0), --s;

      );
      (i %= 65521), (a %= 65521);
    }
    return i | (a << 16) | 0;
  };
  var rt = (function () {
    for (var t, e = [], r = 0; r < 256; r++) {
      t = r;
      for (var n = 0; n < 8; n++) t = 1 & t ? 3988292384 ^ (t >>> 1) : t >>> 1;
      e[r] = t;
    }
    return e;
  })();
  var nt,
    it = function (t, e, r, n) {
      var i = rt,
        a = n + r;
      t ^= -1;
      for (var s = n; s < a; s++) t = (t >>> 8) ^ i[255 & (t ^ e[s])];
      return -1 ^ t;
    },
    at = {
      2: "need dictionary",
      1: "stream end",
      0: "",
      "-1": "file error",
      "-2": "stream error",
      "-3": "data error",
      "-4": "insufficient memory",
      "-5": "buffer error",
      "-6": "incompatible version",
    },
    st = 0,
    ot = 4,
    ht = 0,
    ut = -2,
    lt = -1,
    ft = 4,
    dt = 2,
    ct = 8,
    _t = 9,
    gt = 286,
    pt = 30,
    wt = 19,
    bt = 2 * gt + 1,
    mt = 15,
    vt = 3,
    yt = 258,
    kt = yt + vt + 1,
    St = 42,
    xt = 113,
    Et = 1,
    zt = 2,
    At = 3,
    Bt = 4;
  function Ct(t, e) {
    return (t.msg = at[e]), e;
  }
  function Nt(t) {
    return (t << 1) - (4 < t ? 9 : 0);
  }
  function It(t) {
    for (var e = t.length; 0 <= --e; ) t[e] = 0;
  }
  function Rt(t) {
    var e = t.state,
      r = e.pending;
    r > t.avail_out && (r = t.avail_out),
      0 !== r &&
        (T.arraySet(t.output, e.pending_buf, e.pending_out, r, t.next_out),
        (t.next_out += r),
        (e.pending_out += r),
        (t.total_out += r),
        (t.avail_out -= r),
        (e.pending -= r),
        0 === e.pending && (e.pending_out = 0));
  }
  function Ot(t, e) {
    tt._tr_flush_block(
      t,
      0 <= t.block_start ? t.block_start : -1,
      t.strstart - t.block_start,
      e
    ),
      (t.block_start = t.strstart),
      Rt(t.strm);
  }
  function Tt(t, e) {
    t.pending_buf[t.pending++] = e;
  }
  function Ut(t, e) {
    (t.pending_buf[t.pending++] = (e >>> 8) & 255),
      (t.pending_buf[t.pending++] = 255 & e);
  }
  function Zt(t, e) {
    var r,
      n,
      i = t.max_chain_length,
      a = t.strstart,
      s = t.prev_length,
      o = t.nice_match,
      h = t.strstart > t.w_size - kt ? t.strstart - (t.w_size - kt) : 0,
      u = t.window,
      l = t.w_mask,
      f = t.prev,
      d = t.strstart + yt,
      c = u[a + s - 1],
      _ = u[a + s];
    t.prev_length >= t.good_match && (i >>= 2),
      o > t.lookahead && (o = t.lookahead);
    do {
      if (
        u[(r = e) + s] === _ &&
        u[r + s - 1] === c &&
        u[r] === u[a] &&
        u[++r] === u[a + 1]
      ) {
        (a += 2), r++;
        do {} while (
          u[++a] === u[++r] &&
          u[++a] === u[++r] &&
          u[++a] === u[++r] &&
          u[++a] === u[++r] &&
          u[++a] === u[++r] &&
          u[++a] === u[++r] &&
          u[++a] === u[++r] &&
          u[++a] === u[++r] &&
          a < d
        );
        if (((n = yt - (d - a)), (a = d - yt), s < n)) {
          if (((t.match_start = e), o <= (s = n))) break;
          (c = u[a + s - 1]), (_ = u[a + s]);
        }
      }
    } while ((e = f[e & l]) > h && 0 != --i);
    return s <= t.lookahead ? s : t.lookahead;
  }
  function Dt(t) {
    var e,
      r,
      n,
      i,
      a,
      s,
      o,
      h,
      u,
      l,
      f = t.w_size;
    do {
      if (
        ((i = t.window_size - t.lookahead - t.strstart),
        t.strstart >= f + (f - kt))
      ) {
        for (
          T.arraySet(t.window, t.window, f, f, 0),
            t.match_start -= f,
            t.strstart -= f,
            t.block_start -= f,
            e = r = t.hash_size;
          (n = t.head[--e]), (t.head[e] = f <= n ? n - f : 0), --r;

        );
        for (
          e = r = f;
          (n = t.prev[--e]), (t.prev[e] = f <= n ? n - f : 0), --r;

        );
        i += f;
      }
      if (0 === t.strm.avail_in) break;
      if (
        ((s = t.strm),
        (o = t.window),
        (h = t.strstart + t.lookahead),
        (u = i),
        (l = void 0),
        (l = s.avail_in),
        u < l && (l = u),
        (r =
          0 === l
            ? 0
            : ((s.avail_in -= l),
              T.arraySet(o, s.input, s.next_in, l, h),
              1 === s.state.wrap
                ? (s.adler = et(s.adler, o, l, h))
                : 2 === s.state.wrap && (s.adler = it(s.adler, o, l, h)),
              (s.next_in += l),
              (s.total_in += l),
              l)),
        (t.lookahead += r),
        t.lookahead + t.insert >= vt)
      )
        for (
          a = t.strstart - t.insert,
            t.ins_h = t.window[a],
            t.ins_h =
              ((t.ins_h << t.hash_shift) ^ t.window[a + 1]) & t.hash_mask;
          t.insert &&
          ((t.ins_h =
            ((t.ins_h << t.hash_shift) ^ t.window[a + vt - 1]) & t.hash_mask),
          (t.prev[a & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = a),
          a++,
          t.insert--,
          !(t.lookahead + t.insert < vt));

        );
    } while (t.lookahead < kt && 0 !== t.strm.avail_in);
  }
  function Ht(t, e) {
    for (var r, n; ; ) {
      if (t.lookahead < kt) {
        if ((Dt(t), t.lookahead < kt && e === st)) return Et;
        if (0 === t.lookahead) break;
      }
      if (
        ((r = 0),
        t.lookahead >= vt &&
          ((t.ins_h =
            ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + vt - 1]) &
            t.hash_mask),
          (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = t.strstart)),
        0 !== r &&
          t.strstart - r <= t.w_size - kt &&
          (t.match_length = Zt(t, r)),
        t.match_length >= vt)
      )
        if (
          ((n = tt._tr_tally(
            t,
            t.strstart - t.match_start,
            t.match_length - vt
          )),
          (t.lookahead -= t.match_length),
          t.match_length <= t.max_lazy_match && t.lookahead >= vt)
        ) {
          for (
            t.match_length--;
            t.strstart++,
              (t.ins_h =
                ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + vt - 1]) &
                t.hash_mask),
              (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
              (t.head[t.ins_h] = t.strstart),
              0 != --t.match_length;

          );
          t.strstart++;
        } else
          (t.strstart += t.match_length),
            (t.match_length = 0),
            (t.ins_h = t.window[t.strstart]),
            (t.ins_h =
              ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + 1]) &
              t.hash_mask);
      else
        (n = tt._tr_tally(t, 0, t.window[t.strstart])),
          t.lookahead--,
          t.strstart++;
      if (n && (Ot(t, !1), 0 === t.strm.avail_out)) return Et;
    }
    return (
      (t.insert = t.strstart < vt - 1 ? t.strstart : vt - 1),
      e === ot
        ? (Ot(t, !0), 0 === t.strm.avail_out ? At : Bt)
        : t.last_lit && (Ot(t, !1), 0 === t.strm.avail_out)
        ? Et
        : zt
    );
  }
  function jt(t, e) {
    for (var r, n, i; ; ) {
      if (t.lookahead < kt) {
        if ((Dt(t), t.lookahead < kt && e === st)) return Et;
        if (0 === t.lookahead) break;
      }
      if (
        ((r = 0),
        t.lookahead >= vt &&
          ((t.ins_h =
            ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + vt - 1]) &
            t.hash_mask),
          (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
          (t.head[t.ins_h] = t.strstart)),
        (t.prev_length = t.match_length),
        (t.prev_match = t.match_start),
        (t.match_length = vt - 1),
        0 !== r &&
          t.prev_length < t.max_lazy_match &&
          t.strstart - r <= t.w_size - kt &&
          ((t.match_length = Zt(t, r)),
          t.match_length <= 5 &&
            (1 === t.strategy ||
              (t.match_length === vt && 4096 < t.strstart - t.match_start)) &&
            (t.match_length = vt - 1)),
        t.prev_length >= vt && t.match_length <= t.prev_length)
      ) {
        for (
          i = t.strstart + t.lookahead - vt,
            n = tt._tr_tally(
              t,
              t.strstart - 1 - t.prev_match,
              t.prev_length - vt
            ),
            t.lookahead -= t.prev_length - 1,
            t.prev_length -= 2;
          ++t.strstart <= i &&
            ((t.ins_h =
              ((t.ins_h << t.hash_shift) ^ t.window[t.strstart + vt - 1]) &
              t.hash_mask),
            (r = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h]),
            (t.head[t.ins_h] = t.strstart)),
            0 != --t.prev_length;

        );
        if (
          ((t.match_available = 0),
          (t.match_length = vt - 1),
          t.strstart++,
          n && (Ot(t, !1), 0 === t.strm.avail_out))
        )
          return Et;
      } else if (t.match_available) {
        if (
          ((n = tt._tr_tally(t, 0, t.window[t.strstart - 1])) && Ot(t, !1),
          t.strstart++,
          t.lookahead--,
          0 === t.strm.avail_out)
        )
          return Et;
      } else (t.match_available = 1), t.strstart++, t.lookahead--;
    }
    return (
      t.match_available &&
        ((n = tt._tr_tally(t, 0, t.window[t.strstart - 1])),
        (t.match_available = 0)),
      (t.insert = t.strstart < vt - 1 ? t.strstart : vt - 1),
      e === ot
        ? (Ot(t, !0), 0 === t.strm.avail_out ? At : Bt)
        : t.last_lit && (Ot(t, !1), 0 === t.strm.avail_out)
        ? Et
        : zt
    );
  }
  function Lt(t, e, r, n, i) {
    (this.good_length = t),
      (this.max_lazy = e),
      (this.nice_length = r),
      (this.max_chain = n),
      (this.func = i);
  }
  function Pt() {
    (this.strm = null),
      (this.status = 0),
      (this.pending_buf = null),
      (this.pending_buf_size = 0),
      (this.pending_out = 0),
      (this.pending = 0),
      (this.wrap = 0),
      (this.gzhead = null),
      (this.gzindex = 0),
      (this.method = ct),
      (this.last_flush = -1),
      (this.w_size = 0),
      (this.w_bits = 0),
      (this.w_mask = 0),
      (this.window = null),
      (this.window_size = 0),
      (this.prev = null),
      (this.head = null),
      (this.ins_h = 0),
      (this.hash_size = 0),
      (this.hash_bits = 0),
      (this.hash_mask = 0),
      (this.hash_shift = 0),
      (this.block_start = 0),
      (this.match_length = 0),
      (this.prev_match = 0),
      (this.match_available = 0),
      (this.strstart = 0),
      (this.match_start = 0),
      (this.lookahead = 0),
      (this.prev_length = 0),
      (this.max_chain_length = 0),
      (this.max_lazy_match = 0),
      (this.level = 0),
      (this.strategy = 0),
      (this.good_match = 0),
      (this.nice_match = 0),
      (this.dyn_ltree = new T.Buf16(2 * bt)),
      (this.dyn_dtree = new T.Buf16(2 * (2 * pt + 1))),
      (this.bl_tree = new T.Buf16(2 * (2 * wt + 1))),
      It(this.dyn_ltree),
      It(this.dyn_dtree),
      It(this.bl_tree),
      (this.l_desc = null),
      (this.d_desc = null),
      (this.bl_desc = null),
      (this.bl_count = new T.Buf16(mt + 1)),
      (this.heap = new T.Buf16(2 * gt + 1)),
      It(this.heap),
      (this.heap_len = 0),
      (this.heap_max = 0),
      (this.depth = new T.Buf16(2 * gt + 1)),
      It(this.depth),
      (this.l_buf = 0),
      (this.lit_bufsize = 0),
      (this.last_lit = 0),
      (this.d_buf = 0),
      (this.opt_len = 0),
      (this.static_len = 0),
      (this.matches = 0),
      (this.insert = 0),
      (this.bi_buf = 0),
      (this.bi_valid = 0);
  }
  function Ft(t) {
    var e;
    return t && t.state
      ? ((t.total_in = t.total_out = 0),
        (t.data_type = dt),
        ((e = t.state).pending = 0),
        (e.pending_out = 0),
        e.wrap < 0 && (e.wrap = -e.wrap),
        (e.status = e.wrap ? St : xt),
        (t.adler = 2 === e.wrap ? 0 : 1),
        (e.last_flush = st),
        tt._tr_init(e),
        ht)
      : Ct(t, ut);
  }
  function Mt(t) {
    var e,
      r = Ft(t);
    return (
      r === ht &&
        (((e = t.state).window_size = 2 * e.w_size),
        It(e.head),
        (e.max_lazy_match = nt[e.level].max_lazy),
        (e.good_match = nt[e.level].good_length),
        (e.nice_match = nt[e.level].nice_length),
        (e.max_chain_length = nt[e.level].max_chain),
        (e.strstart = 0),
        (e.block_start = 0),
        (e.lookahead = 0),
        (e.insert = 0),
        (e.match_length = e.prev_length = vt - 1),
        (e.match_available = 0),
        (e.ins_h = 0)),
      r
    );
  }
  function Kt(t, e, r, n, i, a) {
    if (!t) return ut;
    var s = 1;
    if (
      (e === lt && (e = 6),
      n < 0 ? ((s = 0), (n = -n)) : 15 < n && ((s = 2), (n -= 16)),
      i < 1 ||
        _t < i ||
        r !== ct ||
        n < 8 ||
        15 < n ||
        e < 0 ||
        9 < e ||
        a < 0 ||
        ft < a)
    )
      return Ct(t, ut);
    8 === n && (n = 9);
    var o = new Pt();
    return (
      ((t.state = o).strm = t),
      (o.wrap = s),
      (o.gzhead = null),
      (o.w_bits = n),
      (o.w_size = 1 << o.w_bits),
      (o.w_mask = o.w_size - 1),
      (o.hash_bits = i + 7),
      (o.hash_size = 1 << o.hash_bits),
      (o.hash_mask = o.hash_size - 1),
      (o.hash_shift = ~~((o.hash_bits + vt - 1) / vt)),
      (o.window = new T.Buf8(2 * o.w_size)),
      (o.head = new T.Buf16(o.hash_size)),
      (o.prev = new T.Buf16(o.w_size)),
      (o.lit_bufsize = 1 << (i + 6)),
      (o.pending_buf_size = 4 * o.lit_bufsize),
      (o.pending_buf = new T.Buf8(o.pending_buf_size)),
      (o.d_buf = 1 * o.lit_bufsize),
      (o.l_buf = 3 * o.lit_bufsize),
      (o.level = e),
      (o.strategy = a),
      (o.method = r),
      Mt(t)
    );
  }
  nt = [
    new Lt(0, 0, 0, 0, function (t, e) {
      var r = 65535;
      for (r > t.pending_buf_size - 5 && (r = t.pending_buf_size - 5); ; ) {
        if (t.lookahead <= 1) {
          if ((Dt(t), 0 === t.lookahead && e === st)) return Et;
          if (0 === t.lookahead) break;
        }
        (t.strstart += t.lookahead), (t.lookahead = 0);
        var n = t.block_start + r;
        if (
          (0 === t.strstart || t.strstart >= n) &&
          ((t.lookahead = t.strstart - n),
          (t.strstart = n),
          Ot(t, !1),
          0 === t.strm.avail_out)
        )
          return Et;
        if (
          t.strstart - t.block_start >= t.w_size - kt &&
          (Ot(t, !1), 0 === t.strm.avail_out)
        )
          return Et;
      }
      return (
        (t.insert = 0),
        e === ot
          ? (Ot(t, !0), 0 === t.strm.avail_out ? At : Bt)
          : (t.strstart > t.block_start && (Ot(t, !1), t.strm.avail_out), Et)
      );
    }),
    new Lt(4, 4, 8, 4, Ht),
    new Lt(4, 5, 16, 8, Ht),
    new Lt(4, 6, 32, 32, Ht),
    new Lt(4, 4, 16, 16, jt),
    new Lt(8, 16, 32, 32, jt),
    new Lt(8, 16, 128, 128, jt),
    new Lt(8, 32, 128, 256, jt),
    new Lt(32, 128, 258, 1024, jt),
    new Lt(32, 258, 258, 4096, jt),
  ];
  var Gt = {
      deflateInit: function (t, e) {
        return Kt(t, e, ct, 15, 8, 0);
      },
      deflateInit2: Kt,
      deflateReset: Mt,
      deflateResetKeep: Ft,
      deflateSetHeader: function (t, e) {
        return t && t.state
          ? 2 !== t.state.wrap
            ? ut
            : ((t.state.gzhead = e), ht)
          : ut;
      },
      deflate: function (t, e) {
        var r, n, i, a;
        if (!t || !t.state || 5 < e || e < 0) return t ? Ct(t, ut) : ut;
        if (
          ((n = t.state),
          !t.output ||
            (!t.input && 0 !== t.avail_in) ||
            (666 === n.status && e !== ot))
        )
          return Ct(t, 0 === t.avail_out ? -5 : ut);
        if (
          ((n.strm = t),
          (r = n.last_flush),
          (n.last_flush = e),
          n.status === St)
        )
          if (2 === n.wrap)
            (t.adler = 0),
              Tt(n, 31),
              Tt(n, 139),
              Tt(n, 8),
              n.gzhead
                ? (Tt(
                    n,
                    (n.gzhead.text ? 1 : 0) +
                      (n.gzhead.hcrc ? 2 : 0) +
                      (n.gzhead.extra ? 4 : 0) +
                      (n.gzhead.name ? 8 : 0) +
                      (n.gzhead.comment ? 16 : 0)
                  ),
                  Tt(n, 255 & n.gzhead.time),
                  Tt(n, (n.gzhead.time >> 8) & 255),
                  Tt(n, (n.gzhead.time >> 16) & 255),
                  Tt(n, (n.gzhead.time >> 24) & 255),
                  Tt(
                    n,
                    9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0
                  ),
                  Tt(n, 255 & n.gzhead.os),
                  n.gzhead.extra &&
                    n.gzhead.extra.length &&
                    (Tt(n, 255 & n.gzhead.extra.length),
                    Tt(n, (n.gzhead.extra.length >> 8) & 255)),
                  n.gzhead.hcrc &&
                    (t.adler = it(t.adler, n.pending_buf, n.pending, 0)),
                  (n.gzindex = 0),
                  (n.status = 69))
                : (Tt(n, 0),
                  Tt(n, 0),
                  Tt(n, 0),
                  Tt(n, 0),
                  Tt(n, 0),
                  Tt(
                    n,
                    9 === n.level ? 2 : 2 <= n.strategy || n.level < 2 ? 4 : 0
                  ),
                  Tt(n, 3),
                  (n.status = xt));
          else {
            var s = (ct + ((n.w_bits - 8) << 4)) << 8;
            (s |=
              (2 <= n.strategy || n.level < 2
                ? 0
                : n.level < 6
                ? 1
                : 6 === n.level
                ? 2
                : 3) << 6),
              0 !== n.strstart && (s |= 32),
              (s += 31 - (s % 31)),
              (n.status = xt),
              Ut(n, s),
              0 !== n.strstart &&
                (Ut(n, t.adler >>> 16), Ut(n, 65535 & t.adler)),
              (t.adler = 1);
          }
        if (69 === n.status)
          if (n.gzhead.extra) {
            for (
              i = n.pending;
              n.gzindex < (65535 & n.gzhead.extra.length) &&
              (n.pending !== n.pending_buf_size ||
                (n.gzhead.hcrc &&
                  n.pending > i &&
                  (t.adler = it(t.adler, n.pending_buf, n.pending - i, i)),
                Rt(t),
                (i = n.pending),
                n.pending !== n.pending_buf_size));

            )
              Tt(n, 255 & n.gzhead.extra[n.gzindex]), n.gzindex++;
            n.gzhead.hcrc &&
              n.pending > i &&
              (t.adler = it(t.adler, n.pending_buf, n.pending - i, i)),
              n.gzindex === n.gzhead.extra.length &&
                ((n.gzindex = 0), (n.status = 73));
          } else n.status = 73;
        if (73 === n.status)
          if (n.gzhead.name) {
            i = n.pending;
            do {
              if (
                n.pending === n.pending_buf_size &&
                (n.gzhead.hcrc &&
                  n.pending > i &&
                  (t.adler = it(t.adler, n.pending_buf, n.pending - i, i)),
                Rt(t),
                (i = n.pending),
                n.pending === n.pending_buf_size)
              ) {
                a = 1;
                break;
              }
              Tt(
                n,
                (a =
                  n.gzindex < n.gzhead.name.length
                    ? 255 & n.gzhead.name.charCodeAt(n.gzindex++)
                    : 0)
              );
            } while (0 !== a);
            n.gzhead.hcrc &&
              n.pending > i &&
              (t.adler = it(t.adler, n.pending_buf, n.pending - i, i)),
              0 === a && ((n.gzindex = 0), (n.status = 91));
          } else n.status = 91;
        if (91 === n.status)
          if (n.gzhead.comment) {
            i = n.pending;
            do {
              if (
                n.pending === n.pending_buf_size &&
                (n.gzhead.hcrc &&
                  n.pending > i &&
                  (t.adler = it(t.adler, n.pending_buf, n.pending - i, i)),
                Rt(t),
                (i = n.pending),
                n.pending === n.pending_buf_size)
              ) {
                a = 1;
                break;
              }
              Tt(
                n,
                (a =
                  n.gzindex < n.gzhead.comment.length
                    ? 255 & n.gzhead.comment.charCodeAt(n.gzindex++)
                    : 0)
              );
            } while (0 !== a);
            n.gzhead.hcrc &&
              n.pending > i &&
              (t.adler = it(t.adler, n.pending_buf, n.pending - i, i)),
              0 === a && (n.status = 103);
          } else n.status = 103;
        if (
          (103 === n.status &&
            (n.gzhead.hcrc
              ? (n.pending + 2 > n.pending_buf_size && Rt(t),
                n.pending + 2 <= n.pending_buf_size &&
                  (Tt(n, 255 & t.adler),
                  Tt(n, (t.adler >> 8) & 255),
                  (t.adler = 0),
                  (n.status = xt)))
              : (n.status = xt)),
          0 !== n.pending)
        ) {
          if ((Rt(t), 0 === t.avail_out)) return (n.last_flush = -1), ht;
        } else if (0 === t.avail_in && Nt(e) <= Nt(r) && e !== ot)
          return Ct(t, -5);
        if (666 === n.status && 0 !== t.avail_in) return Ct(t, -5);
        if (
          0 !== t.avail_in ||
          0 !== n.lookahead ||
          (e !== st && 666 !== n.status)
        ) {
          var o =
            2 === n.strategy
              ? (function (t, e) {
                  for (var r; ; ) {
                    if (0 === t.lookahead && (Dt(t), 0 === t.lookahead)) {
                      if (e === st) return Et;
                      break;
                    }
                    if (
                      ((t.match_length = 0),
                      (r = tt._tr_tally(t, 0, t.window[t.strstart])),
                      t.lookahead--,
                      t.strstart++,
                      r && (Ot(t, !1), 0 === t.strm.avail_out))
                    )
                      return Et;
                  }
                  return (
                    (t.insert = 0),
                    e === ot
                      ? (Ot(t, !0), 0 === t.strm.avail_out ? At : Bt)
                      : t.last_lit && (Ot(t, !1), 0 === t.strm.avail_out)
                      ? Et
                      : zt
                  );
                })(n, e)
              : 3 === n.strategy
              ? (function (t, e) {
                  for (var r, n, i, a, s = t.window; ; ) {
                    if (t.lookahead <= yt) {
                      if ((Dt(t), t.lookahead <= yt && e === st)) return Et;
                      if (0 === t.lookahead) break;
                    }
                    if (
                      ((t.match_length = 0),
                      t.lookahead >= vt &&
                        0 < t.strstart &&
                        (n = s[(i = t.strstart - 1)]) === s[++i] &&
                        n === s[++i] &&
                        n === s[++i])
                    ) {
                      a = t.strstart + yt;
                      do {} while (
                        n === s[++i] &&
                        n === s[++i] &&
                        n === s[++i] &&
                        n === s[++i] &&
                        n === s[++i] &&
                        n === s[++i] &&
                        n === s[++i] &&
                        n === s[++i] &&
                        i < a
                      );
                      (t.match_length = yt - (a - i)),
                        t.match_length > t.lookahead &&
                          (t.match_length = t.lookahead);
                    }
                    if (
                      (t.match_length >= vt
                        ? ((r = tt._tr_tally(t, 1, t.match_length - vt)),
                          (t.lookahead -= t.match_length),
                          (t.strstart += t.match_length),
                          (t.match_length = 0))
                        : ((r = tt._tr_tally(t, 0, t.window[t.strstart])),
                          t.lookahead--,
                          t.strstart++),
                      r && (Ot(t, !1), 0 === t.strm.avail_out))
                    )
                      return Et;
                  }
                  return (
                    (t.insert = 0),
                    e === ot
                      ? (Ot(t, !0), 0 === t.strm.avail_out ? At : Bt)
                      : t.last_lit && (Ot(t, !1), 0 === t.strm.avail_out)
                      ? Et
                      : zt
                  );
                })(n, e)
              : nt[n.level].func(n, e);
          if (
            ((o !== At && o !== Bt) || (n.status = 666), o === Et || o === At)
          )
            return 0 === t.avail_out && (n.last_flush = -1), ht;
          if (
            o === zt &&
            (1 === e
              ? tt._tr_align(n)
              : 5 !== e &&
                (tt._tr_stored_block(n, 0, 0, !1),
                3 === e &&
                  (It(n.head),
                  0 === n.lookahead &&
                    ((n.strstart = 0), (n.block_start = 0), (n.insert = 0)))),
            Rt(t),
            0 === t.avail_out)
          )
            return (n.last_flush = -1), ht;
        }
        return e !== ot
          ? ht
          : n.wrap <= 0
          ? 1
          : (2 === n.wrap
              ? (Tt(n, 255 & t.adler),
                Tt(n, (t.adler >> 8) & 255),
                Tt(n, (t.adler >> 16) & 255),
                Tt(n, (t.adler >> 24) & 255),
                Tt(n, 255 & t.total_in),
                Tt(n, (t.total_in >> 8) & 255),
                Tt(n, (t.total_in >> 16) & 255),
                Tt(n, (t.total_in >> 24) & 255))
              : (Ut(n, t.adler >>> 16), Ut(n, 65535 & t.adler)),
            Rt(t),
            0 < n.wrap && (n.wrap = -n.wrap),
            0 !== n.pending ? ht : 1);
      },
      deflateEnd: function (t) {
        var e;
        return t && t.state
          ? (e = t.state.status) !== St &&
            69 !== e &&
            73 !== e &&
            91 !== e &&
            103 !== e &&
            e !== xt &&
            666 !== e
            ? Ct(t, ut)
            : ((t.state = null), e === xt ? Ct(t, -3) : ht)
          : ut;
      },
      deflateSetDictionary: function (t, e) {
        var r,
          n,
          i,
          a,
          s,
          o,
          h,
          u,
          l = e.length;
        if (!t || !t.state) return ut;
        if (
          2 === (a = (r = t.state).wrap) ||
          (1 === a && r.status !== St) ||
          r.lookahead
        )
          return ut;
        for (
          1 === a && (t.adler = et(t.adler, e, l, 0)),
            r.wrap = 0,
            l >= r.w_size &&
              (0 === a &&
                (It(r.head),
                (r.strstart = 0),
                (r.block_start = 0),
                (r.insert = 0)),
              (u = new T.Buf8(r.w_size)),
              T.arraySet(u, e, l - r.w_size, r.w_size, 0),
              (e = u),
              (l = r.w_size)),
            s = t.avail_in,
            o = t.next_in,
            h = t.input,
            t.avail_in = l,
            t.next_in = 0,
            t.input = e,
            Dt(r);
          r.lookahead >= vt;

        ) {
          for (
            n = r.strstart, i = r.lookahead - (vt - 1);
            (r.ins_h =
              ((r.ins_h << r.hash_shift) ^ r.window[n + vt - 1]) & r.hash_mask),
              (r.prev[n & r.w_mask] = r.head[r.ins_h]),
              (r.head[r.ins_h] = n),
              n++,
              --i;

          );
          (r.strstart = n), (r.lookahead = vt - 1), Dt(r);
        }
        return (
          (r.strstart += r.lookahead),
          (r.block_start = r.strstart),
          (r.insert = r.lookahead),
          (r.lookahead = 0),
          (r.match_length = r.prev_length = vt - 1),
          (r.match_available = 0),
          (t.next_in = o),
          (t.input = h),
          (t.avail_in = s),
          (r.wrap = a),
          ht
        );
      },
      deflateInfo: "pako deflate (from Nodeca project)",
    },
    Jt = !0,
    Yt = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (t) {
    Jt = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (t) {
    Yt = !1;
  }
  for (var Vt = new T.Buf8(256), qt = 0; qt < 256; qt++)
    Vt[qt] =
      252 <= qt
        ? 6
        : 248 <= qt
        ? 5
        : 240 <= qt
        ? 4
        : 224 <= qt
        ? 3
        : 192 <= qt
        ? 2
        : 1;
  Vt[254] = Vt[254] = 1;
  function Xt(t, e) {
    if (e < 65537 && ((t.subarray && Yt) || (!t.subarray && Jt)))
      return String.fromCharCode.apply(null, T.shrinkBuf(t, e));
    for (var r = "", n = 0; n < e; n++) r += String.fromCharCode(t[n]);
    return r;
  }
  var Wt = {
    string2buf: function (t) {
      var e,
        r,
        n,
        i,
        a,
        s = t.length,
        o = 0;
      for (i = 0; i < s; i++)
        55296 == (64512 & (r = t.charCodeAt(i))) &&
          i + 1 < s &&
          56320 == (64512 & (n = t.charCodeAt(i + 1))) &&
          ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), i++),
          (o += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
      for (e = new T.Buf8(o), i = a = 0; a < o; i++)
        55296 == (64512 & (r = t.charCodeAt(i))) &&
          i + 1 < s &&
          56320 == (64512 & (n = t.charCodeAt(i + 1))) &&
          ((r = 65536 + ((r - 55296) << 10) + (n - 56320)), i++),
          r < 128
            ? (e[a++] = r)
            : (r < 2048
                ? (e[a++] = 192 | (r >>> 6))
                : (r < 65536
                    ? (e[a++] = 224 | (r >>> 12))
                    : ((e[a++] = 240 | (r >>> 18)),
                      (e[a++] = 128 | ((r >>> 12) & 63))),
                  (e[a++] = 128 | ((r >>> 6) & 63))),
              (e[a++] = 128 | (63 & r)));
      return e;
    },
    buf2binstring: function (t) {
      return Xt(t, t.length);
    },
    binstring2buf: function (t) {
      for (var e = new T.Buf8(t.length), r = 0, n = e.length; r < n; r++)
        e[r] = t.charCodeAt(r);
      return e;
    },
    buf2string: function (t, e) {
      var r,
        n,
        i,
        a,
        s = e || t.length,
        o = new Array(2 * s);
      for (r = n = 0; r < s; )
        if ((i = t[r++]) < 128) o[n++] = i;
        else if (4 < (a = Vt[i])) (o[n++] = 65533), (r += a - 1);
        else {
          for (i &= 2 === a ? 31 : 3 === a ? 15 : 7; 1 < a && r < s; )
            (i = (i << 6) | (63 & t[r++])), a--;
          1 < a
            ? (o[n++] = 65533)
            : i < 65536
            ? (o[n++] = i)
            : ((i -= 65536),
              (o[n++] = 55296 | ((i >> 10) & 1023)),
              (o[n++] = 56320 | (1023 & i)));
        }
      return Xt(o, n);
    },
    utf8border: function (t, e) {
      var r;
      for (
        (e = e || t.length) > t.length && (e = t.length), r = e - 1;
        0 <= r && 128 == (192 & t[r]);

      )
        r--;
      return r < 0 ? e : 0 === r ? e : r + Vt[t[r]] > e ? r : e;
    },
  };
  var $t = function () {
      (this.input = null),
        (this.next_in = 0),
        (this.avail_in = 0),
        (this.total_in = 0),
        (this.output = null),
        (this.next_out = 0),
        (this.avail_out = 0),
        (this.total_out = 0),
        (this.msg = ""),
        (this.state = null),
        (this.data_type = 2),
        (this.adler = 0);
    },
    Qt = Object.prototype.toString,
    te = 0,
    ee = -1,
    re = 0,
    ne = 8;
  function ie(t) {
    if (!(this instanceof ie)) return new ie(t);
    this.options = T.assign(
      {
        level: ee,
        method: ne,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: re,
        to: "",
      },
      t || {}
    );
    var e = this.options;
    e.raw && 0 < e.windowBits
      ? (e.windowBits = -e.windowBits)
      : e.gzip && 0 < e.windowBits && e.windowBits < 16 && (e.windowBits += 16),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new $t()),
      (this.strm.avail_out = 0);
    var r = Gt.deflateInit2(
      this.strm,
      e.level,
      e.method,
      e.windowBits,
      e.memLevel,
      e.strategy
    );
    if (r !== te) throw new Error(at[r]);
    if ((e.header && Gt.deflateSetHeader(this.strm, e.header), e.dictionary)) {
      var n;
      if (
        ((n =
          "string" == typeof e.dictionary
            ? Wt.string2buf(e.dictionary)
            : "[object ArrayBuffer]" === Qt.call(e.dictionary)
            ? new Uint8Array(e.dictionary)
            : e.dictionary),
        (r = Gt.deflateSetDictionary(this.strm, n)) !== te)
      )
        throw new Error(at[r]);
      this._dict_set = !0;
    }
  }
  function ae(t, e) {
    var r = new ie(e);
    if ((r.push(t, !0), r.err)) throw r.msg || at[r.err];
    return r.result;
  }
  (ie.prototype.push = function (t, e) {
    var r,
      n,
      i = this.strm,
      a = this.options.chunkSize;
    if (this.ended) return !1;
    (n = e === ~~e ? e : !0 === e ? 4 : 0),
      "string" == typeof t
        ? (i.input = Wt.string2buf(t))
        : "[object ArrayBuffer]" === Qt.call(t)
        ? (i.input = new Uint8Array(t))
        : (i.input = t),
      (i.next_in = 0),
      (i.avail_in = i.input.length);
    do {
      if (
        (0 === i.avail_out &&
          ((i.output = new T.Buf8(a)), (i.next_out = 0), (i.avail_out = a)),
        1 !== (r = Gt.deflate(i, n)) && r !== te)
      )
        return this.onEnd(r), !(this.ended = !0);
      (0 !== i.avail_out && (0 !== i.avail_in || (4 !== n && 2 !== n))) ||
        ("string" === this.options.to
          ? this.onData(Wt.buf2binstring(T.shrinkBuf(i.output, i.next_out)))
          : this.onData(T.shrinkBuf(i.output, i.next_out)));
    } while ((0 < i.avail_in || 0 === i.avail_out) && 1 !== r);
    return 4 === n
      ? ((r = Gt.deflateEnd(this.strm)),
        this.onEnd(r),
        (this.ended = !0),
        r === te)
      : 2 !== n || (this.onEnd(te), !(i.avail_out = 0));
  }),
    (ie.prototype.onData = function (t) {
      this.chunks.push(t);
    }),
    (ie.prototype.onEnd = function (t) {
      t === te &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = T.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = t),
        (this.msg = this.strm.msg);
    });
  var se = {
      Deflate: ie,
      deflate: ae,
      deflateRaw: function (t, e) {
        return ((e = e || {}).raw = !0), ae(t, e);
      },
      gzip: function (t, e) {
        return ((e = e || {}).gzip = !0), ae(t, e);
      },
    },
    oe = function (t, e) {
      var r,
        n,
        i,
        a,
        s,
        o,
        h,
        u,
        l,
        f,
        d,
        c,
        _,
        g,
        p,
        w,
        b,
        m,
        v,
        y,
        k,
        S,
        x,
        E,
        z;
      (r = t.state),
        (n = t.next_in),
        (E = t.input),
        (i = n + (t.avail_in - 5)),
        (a = t.next_out),
        (z = t.output),
        (s = a - (e - t.avail_out)),
        (o = a + (t.avail_out - 257)),
        (h = r.dmax),
        (u = r.wsize),
        (l = r.whave),
        (f = r.wnext),
        (d = r.window),
        (c = r.hold),
        (_ = r.bits),
        (g = r.lencode),
        (p = r.distcode),
        (w = (1 << r.lenbits) - 1),
        (b = (1 << r.distbits) - 1);
      t: do {
        _ < 15 && ((c += E[n++] << _), (_ += 8), (c += E[n++] << _), (_ += 8)),
          (m = g[c & w]);
        e: for (;;) {
          if (((c >>>= v = m >>> 24), (_ -= v), 0 === (v = (m >>> 16) & 255)))
            z[a++] = 65535 & m;
          else {
            if (!(16 & v)) {
              if (0 == (64 & v)) {
                m = g[(65535 & m) + (c & ((1 << v) - 1))];
                continue e;
              }
              if (32 & v) {
                r.mode = 12;
                break t;
              }
              (t.msg = "invalid literal/length code"), (r.mode = 30);
              break t;
            }
            (y = 65535 & m),
              (v &= 15) &&
                (_ < v && ((c += E[n++] << _), (_ += 8)),
                (y += c & ((1 << v) - 1)),
                (c >>>= v),
                (_ -= v)),
              _ < 15 &&
                ((c += E[n++] << _), (_ += 8), (c += E[n++] << _), (_ += 8)),
              (m = p[c & b]);
            r: for (;;) {
              if (
                ((c >>>= v = m >>> 24),
                (_ -= v),
                !(16 & (v = (m >>> 16) & 255)))
              ) {
                if (0 == (64 & v)) {
                  m = p[(65535 & m) + (c & ((1 << v) - 1))];
                  continue r;
                }
                (t.msg = "invalid distance code"), (r.mode = 30);
                break t;
              }
              if (
                ((k = 65535 & m),
                _ < (v &= 15) &&
                  ((c += E[n++] << _),
                  (_ += 8) < v && ((c += E[n++] << _), (_ += 8))),
                h < (k += c & ((1 << v) - 1)))
              ) {
                (t.msg = "invalid distance too far back"), (r.mode = 30);
                break t;
              }
              if (((c >>>= v), (_ -= v), (v = a - s) < k)) {
                if (l < (v = k - v) && r.sane) {
                  (t.msg = "invalid distance too far back"), (r.mode = 30);
                  break t;
                }
                if (((x = d), (S = 0) === f)) {
                  if (((S += u - v), v < y)) {
                    for (y -= v; (z[a++] = d[S++]), --v; );
                    (S = a - k), (x = z);
                  }
                } else if (f < v) {
                  if (((S += u + f - v), (v -= f) < y)) {
                    for (y -= v; (z[a++] = d[S++]), --v; );
                    if (((S = 0), f < y)) {
                      for (y -= v = f; (z[a++] = d[S++]), --v; );
                      (S = a - k), (x = z);
                    }
                  }
                } else if (((S += f - v), v < y)) {
                  for (y -= v; (z[a++] = d[S++]), --v; );
                  (S = a - k), (x = z);
                }
                for (; 2 < y; )
                  (z[a++] = x[S++]),
                    (z[a++] = x[S++]),
                    (z[a++] = x[S++]),
                    (y -= 3);
                y && ((z[a++] = x[S++]), 1 < y && (z[a++] = x[S++]));
              } else {
                for (
                  S = a - k;
                  (z[a++] = z[S++]),
                    (z[a++] = z[S++]),
                    (z[a++] = z[S++]),
                    2 < (y -= 3);

                );
                y && ((z[a++] = z[S++]), 1 < y && (z[a++] = z[S++]));
              }
              break;
            }
          }
          break;
        }
      } while (n < i && a < o);
      (n -= y = _ >> 3),
        (c &= (1 << (_ -= y << 3)) - 1),
        (t.next_in = n),
        (t.next_out = a),
        (t.avail_in = n < i ? i - n + 5 : 5 - (n - i)),
        (t.avail_out = a < o ? o - a + 257 : 257 - (a - o)),
        (r.hold = c),
        (r.bits = _);
    },
    he = [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      0,
      0,
    ],
    ue = [
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      17,
      17,
      17,
      17,
      18,
      18,
      18,
      18,
      19,
      19,
      19,
      19,
      20,
      20,
      20,
      20,
      21,
      21,
      21,
      21,
      16,
      72,
      78,
    ],
    le = [
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      13,
      17,
      25,
      33,
      49,
      65,
      97,
      129,
      193,
      257,
      385,
      513,
      769,
      1025,
      1537,
      2049,
      3073,
      4097,
      6145,
      8193,
      12289,
      16385,
      24577,
      0,
      0,
    ],
    fe = [
      16,
      16,
      16,
      16,
      17,
      17,
      18,
      18,
      19,
      19,
      20,
      20,
      21,
      21,
      22,
      22,
      23,
      23,
      24,
      24,
      25,
      25,
      26,
      26,
      27,
      27,
      28,
      28,
      29,
      29,
      64,
      64,
    ],
    de = function (t, e, r, n, i, a, s, o) {
      var h,
        u,
        l,
        f,
        d,
        c,
        _,
        g,
        p,
        w = o.bits,
        b = 0,
        m = 0,
        v = 0,
        y = 0,
        k = 0,
        S = 0,
        x = 0,
        E = 0,
        z = 0,
        A = 0,
        B = null,
        C = 0,
        N = new T.Buf16(16),
        I = new T.Buf16(16),
        R = null,
        O = 0;
      for (b = 0; b <= 15; b++) N[b] = 0;
      for (m = 0; m < n; m++) N[e[r + m]]++;
      for (k = w, y = 15; 1 <= y && 0 === N[y]; y--);
      if ((y < k && (k = y), 0 === y))
        return (i[a++] = 20971520), (i[a++] = 20971520), (o.bits = 1), 0;
      for (v = 1; v < y && 0 === N[v]; v++);
      for (k < v && (k = v), b = E = 1; b <= 15; b++)
        if (((E <<= 1), (E -= N[b]) < 0)) return -1;
      if (0 < E && (0 === t || 1 !== y)) return -1;
      for (I[1] = 0, b = 1; b < 15; b++) I[b + 1] = I[b] + N[b];
      for (m = 0; m < n; m++) 0 !== e[r + m] && (s[I[e[r + m]]++] = m);
      if (
        (0 === t
          ? ((B = R = s), (c = 19))
          : 1 === t
          ? ((B = he), (C -= 257), (R = ue), (O -= 257), (c = 256))
          : ((B = le), (R = fe), (c = -1)),
        (b = v),
        (d = a),
        (x = m = A = 0),
        (l = -1),
        (f = (z = 1 << (S = k)) - 1),
        (1 === t && 852 < z) || (2 === t && 592 < z))
      )
        return 1;
      for (;;) {
        for (
          _ = b - x,
            s[m] < c
              ? ((g = 0), (p = s[m]))
              : s[m] > c
              ? ((g = R[O + s[m]]), (p = B[C + s[m]]))
              : ((g = 96), (p = 0)),
            h = 1 << (b - x),
            v = u = 1 << S;
          (i[d + (A >> x) + (u -= h)] = (_ << 24) | (g << 16) | p | 0), 0 !== u;

        );
        for (h = 1 << (b - 1); A & h; ) h >>= 1;
        if ((0 !== h ? ((A &= h - 1), (A += h)) : (A = 0), m++, 0 == --N[b])) {
          if (b === y) break;
          b = e[r + s[m]];
        }
        if (k < b && (A & f) !== l) {
          for (
            0 === x && (x = k), d += v, E = 1 << (S = b - x);
            S + x < y && !((E -= N[S + x]) <= 0);

          )
            S++, (E <<= 1);
          if (((z += 1 << S), (1 === t && 852 < z) || (2 === t && 592 < z)))
            return 1;
          i[(l = A & f)] = (k << 24) | (S << 16) | (d - a) | 0;
        }
      }
      return (
        0 !== A && (i[d + A] = ((b - x) << 24) | (64 << 16) | 0),
        (o.bits = k),
        0
      );
    },
    ce = 1,
    _e = 2,
    ge = 0,
    pe = -2,
    we = 1,
    be = 852,
    me = 592;
  function ve(t) {
    return (
      ((t >>> 24) & 255) +
      ((t >>> 8) & 65280) +
      ((65280 & t) << 8) +
      ((255 & t) << 24)
    );
  }
  function ye() {
    (this.mode = 0),
      (this.last = !1),
      (this.wrap = 0),
      (this.havedict = !1),
      (this.flags = 0),
      (this.dmax = 0),
      (this.check = 0),
      (this.total = 0),
      (this.head = null),
      (this.wbits = 0),
      (this.wsize = 0),
      (this.whave = 0),
      (this.wnext = 0),
      (this.window = null),
      (this.hold = 0),
      (this.bits = 0),
      (this.length = 0),
      (this.offset = 0),
      (this.extra = 0),
      (this.lencode = null),
      (this.distcode = null),
      (this.lenbits = 0),
      (this.distbits = 0),
      (this.ncode = 0),
      (this.nlen = 0),
      (this.ndist = 0),
      (this.have = 0),
      (this.next = null),
      (this.lens = new T.Buf16(320)),
      (this.work = new T.Buf16(288)),
      (this.lendyn = null),
      (this.distdyn = null),
      (this.sane = 0),
      (this.back = 0),
      (this.was = 0);
  }
  function ke(t) {
    var e;
    return t && t.state
      ? ((e = t.state),
        (t.total_in = t.total_out = e.total = 0),
        (t.msg = ""),
        e.wrap && (t.adler = 1 & e.wrap),
        (e.mode = we),
        (e.last = 0),
        (e.havedict = 0),
        (e.dmax = 32768),
        (e.head = null),
        (e.hold = 0),
        (e.bits = 0),
        (e.lencode = e.lendyn = new T.Buf32(be)),
        (e.distcode = e.distdyn = new T.Buf32(me)),
        (e.sane = 1),
        (e.back = -1),
        ge)
      : pe;
  }
  function Se(t) {
    var e;
    return t && t.state
      ? (((e = t.state).wsize = 0), (e.whave = 0), (e.wnext = 0), ke(t))
      : pe;
  }
  function xe(t, e) {
    var r, n;
    return t && t.state
      ? ((n = t.state),
        e < 0 ? ((r = 0), (e = -e)) : ((r = 1 + (e >> 4)), e < 48 && (e &= 15)),
        e && (e < 8 || 15 < e)
          ? pe
          : (null !== n.window && n.wbits !== e && (n.window = null),
            (n.wrap = r),
            (n.wbits = e),
            Se(t)))
      : pe;
  }
  function Ee(t, e) {
    var r, n;
    return t
      ? ((n = new ye()),
        ((t.state = n).window = null),
        (r = xe(t, e)) !== ge && (t.state = null),
        r)
      : pe;
  }
  var ze,
    Ae,
    Be = !0;
  function Ce(t) {
    if (Be) {
      var e;
      for (ze = new T.Buf32(512), Ae = new T.Buf32(32), e = 0; e < 144; )
        t.lens[e++] = 8;
      for (; e < 256; ) t.lens[e++] = 9;
      for (; e < 280; ) t.lens[e++] = 7;
      for (; e < 288; ) t.lens[e++] = 8;
      for (de(ce, t.lens, 0, 288, ze, 0, t.work, { bits: 9 }), e = 0; e < 32; )
        t.lens[e++] = 5;
      de(_e, t.lens, 0, 32, Ae, 0, t.work, { bits: 5 }), (Be = !1);
    }
    (t.lencode = ze), (t.lenbits = 9), (t.distcode = Ae), (t.distbits = 5);
  }
  function Ne(t, e, r, n) {
    var i,
      a = t.state;
    return (
      null === a.window &&
        ((a.wsize = 1 << a.wbits),
        (a.wnext = 0),
        (a.whave = 0),
        (a.window = new T.Buf8(a.wsize))),
      n >= a.wsize
        ? (T.arraySet(a.window, e, r - a.wsize, a.wsize, 0),
          (a.wnext = 0),
          (a.whave = a.wsize))
        : (n < (i = a.wsize - a.wnext) && (i = n),
          T.arraySet(a.window, e, r - n, i, a.wnext),
          (n -= i)
            ? (T.arraySet(a.window, e, r - n, n, 0),
              (a.wnext = n),
              (a.whave = a.wsize))
            : ((a.wnext += i),
              a.wnext === a.wsize && (a.wnext = 0),
              a.whave < a.wsize && (a.whave += i))),
      0
    );
  }
  var Ie = {
      inflateReset: Se,
      inflateReset2: xe,
      inflateResetKeep: ke,
      inflateInit: function (t) {
        return Ee(t, 15);
      },
      inflateInit2: Ee,
      inflate: function (t, e) {
        var r,
          n,
          i,
          a,
          s,
          o,
          h,
          u,
          l,
          f,
          d,
          c,
          _,
          g,
          p,
          w,
          b,
          m,
          v,
          y,
          k,
          S,
          x,
          E,
          z = 0,
          A = new T.Buf8(4),
          B = [
            16,
            17,
            18,
            0,
            8,
            7,
            9,
            6,
            10,
            5,
            11,
            4,
            12,
            3,
            13,
            2,
            14,
            1,
            15,
          ];
        if (!t || !t.state || !t.output || (!t.input && 0 !== t.avail_in))
          return pe;
        12 === (r = t.state).mode && (r.mode = 13),
          (s = t.next_out),
          (i = t.output),
          (h = t.avail_out),
          (a = t.next_in),
          (n = t.input),
          (o = t.avail_in),
          (u = r.hold),
          (l = r.bits),
          (f = o),
          (d = h),
          (S = ge);
        t: for (;;)
          switch (r.mode) {
            case we:
              if (0 === r.wrap) {
                r.mode = 13;
                break;
              }
              for (; l < 16; ) {
                if (0 === o) break t;
                o--, (u += n[a++] << l), (l += 8);
              }
              if (2 & r.wrap && 35615 === u) {
                (A[(r.check = 0)] = 255 & u),
                  (A[1] = (u >>> 8) & 255),
                  (r.check = it(r.check, A, 2, 0)),
                  (l = u = 0),
                  (r.mode = 2);
                break;
              }
              if (
                ((r.flags = 0),
                r.head && (r.head.done = !1),
                !(1 & r.wrap) || (((255 & u) << 8) + (u >> 8)) % 31)
              ) {
                (t.msg = "incorrect header check"), (r.mode = 30);
                break;
              }
              if (8 != (15 & u)) {
                (t.msg = "unknown compression method"), (r.mode = 30);
                break;
              }
              if (((l -= 4), (k = 8 + (15 & (u >>>= 4))), 0 === r.wbits))
                r.wbits = k;
              else if (k > r.wbits) {
                (t.msg = "invalid window size"), (r.mode = 30);
                break;
              }
              (r.dmax = 1 << k),
                (t.adler = r.check = 1),
                (r.mode = 512 & u ? 10 : 12),
                (l = u = 0);
              break;
            case 2:
              for (; l < 16; ) {
                if (0 === o) break t;
                o--, (u += n[a++] << l), (l += 8);
              }
              if (((r.flags = u), 8 != (255 & r.flags))) {
                (t.msg = "unknown compression method"), (r.mode = 30);
                break;
              }
              if (57344 & r.flags) {
                (t.msg = "unknown header flags set"), (r.mode = 30);
                break;
              }
              r.head && (r.head.text = (u >> 8) & 1),
                512 & r.flags &&
                  ((A[0] = 255 & u),
                  (A[1] = (u >>> 8) & 255),
                  (r.check = it(r.check, A, 2, 0))),
                (l = u = 0),
                (r.mode = 3);
            case 3:
              for (; l < 32; ) {
                if (0 === o) break t;
                o--, (u += n[a++] << l), (l += 8);
              }
              r.head && (r.head.time = u),
                512 & r.flags &&
                  ((A[0] = 255 & u),
                  (A[1] = (u >>> 8) & 255),
                  (A[2] = (u >>> 16) & 255),
                  (A[3] = (u >>> 24) & 255),
                  (r.check = it(r.check, A, 4, 0))),
                (l = u = 0),
                (r.mode = 4);
            case 4:
              for (; l < 16; ) {
                if (0 === o) break t;
                o--, (u += n[a++] << l), (l += 8);
              }
              r.head && ((r.head.xflags = 255 & u), (r.head.os = u >> 8)),
                512 & r.flags &&
                  ((A[0] = 255 & u),
                  (A[1] = (u >>> 8) & 255),
                  (r.check = it(r.check, A, 2, 0))),
                (l = u = 0),
                (r.mode = 5);
            case 5:
              if (1024 & r.flags) {
                for (; l < 16; ) {
                  if (0 === o) break t;
                  o--, (u += n[a++] << l), (l += 8);
                }
                (r.length = u),
                  r.head && (r.head.extra_len = u),
                  512 & r.flags &&
                    ((A[0] = 255 & u),
                    (A[1] = (u >>> 8) & 255),
                    (r.check = it(r.check, A, 2, 0))),
                  (l = u = 0);
              } else r.head && (r.head.extra = null);
              r.mode = 6;
            case 6:
              if (
                1024 & r.flags &&
                (o < (c = r.length) && (c = o),
                c &&
                  (r.head &&
                    ((k = r.head.extra_len - r.length),
                    r.head.extra ||
                      (r.head.extra = new Array(r.head.extra_len)),
                    T.arraySet(r.head.extra, n, a, c, k)),
                  512 & r.flags && (r.check = it(r.check, n, c, a)),
                  (o -= c),
                  (a += c),
                  (r.length -= c)),
                r.length)
              )
                break t;
              (r.length = 0), (r.mode = 7);
            case 7:
              if (2048 & r.flags) {
                if (0 === o) break t;
                for (
                  c = 0;
                  (k = n[a + c++]),
                    r.head &&
                      k &&
                      r.length < 65536 &&
                      (r.head.name += String.fromCharCode(k)),
                    k && c < o;

                );
                if (
                  (512 & r.flags && (r.check = it(r.check, n, c, a)),
                  (o -= c),
                  (a += c),
                  k)
                )
                  break t;
              } else r.head && (r.head.name = null);
              (r.length = 0), (r.mode = 8);
            case 8:
              if (4096 & r.flags) {
                if (0 === o) break t;
                for (
                  c = 0;
                  (k = n[a + c++]),
                    r.head &&
                      k &&
                      r.length < 65536 &&
                      (r.head.comment += String.fromCharCode(k)),
                    k && c < o;

                );
                if (
                  (512 & r.flags && (r.check = it(r.check, n, c, a)),
                  (o -= c),
                  (a += c),
                  k)
                )
                  break t;
              } else r.head && (r.head.comment = null);
              r.mode = 9;
            case 9:
              if (512 & r.flags) {
                for (; l < 16; ) {
                  if (0 === o) break t;
                  o--, (u += n[a++] << l), (l += 8);
                }
                if (u !== (65535 & r.check)) {
                  (t.msg = "header crc mismatch"), (r.mode = 30);
                  break;
                }
                l = u = 0;
              }
              r.head &&
                ((r.head.hcrc = (r.flags >> 9) & 1), (r.head.done = !0)),
                (t.adler = r.check = 0),
                (r.mode = 12);
              break;
            case 10:
              for (; l < 32; ) {
                if (0 === o) break t;
                o--, (u += n[a++] << l), (l += 8);
              }
              (t.adler = r.check = ve(u)), (l = u = 0), (r.mode = 11);
            case 11:
              if (0 === r.havedict)
                return (
                  (t.next_out = s),
                  (t.avail_out = h),
                  (t.next_in = a),
                  (t.avail_in = o),
                  (r.hold = u),
                  (r.bits = l),
                  2
                );
              (t.adler = r.check = 1), (r.mode = 12);
            case 12:
              if (5 === e || 6 === e) break t;
            case 13:
              if (r.last) {
                (u >>>= 7 & l), (l -= 7 & l), (r.mode = 27);
                break;
              }
              for (; l < 3; ) {
                if (0 === o) break t;
                o--, (u += n[a++] << l), (l += 8);
              }
              switch (((r.last = 1 & u), (l -= 1), 3 & (u >>>= 1))) {
                case 0:
                  r.mode = 14;
                  break;
                case 1:
                  if ((Ce(r), (r.mode = 20), 6 === e)) {
                    (u >>>= 2), (l -= 2);
                    break t;
                  }
                  break;
                case 2:
                  r.mode = 17;
                  break;
                case 3:
                  (t.msg = "invalid block type"), (r.mode = 30);
              }
              (u >>>= 2), (l -= 2);
              break;
            case 14:
              for (u >>>= 7 & l, l -= 7 & l; l < 32; ) {
                if (0 === o) break t;
                o--, (u += n[a++] << l), (l += 8);
              }
              if ((65535 & u) != ((u >>> 16) ^ 65535)) {
                (t.msg = "invalid stored block lengths"), (r.mode = 30);
                break;
              }
              if (((r.length = 65535 & u), (l = u = 0), (r.mode = 15), 6 === e))
                break t;
            case 15:
              r.mode = 16;
            case 16:
              if ((c = r.length)) {
                if ((o < c && (c = o), h < c && (c = h), 0 === c)) break t;
                T.arraySet(i, n, a, c, s),
                  (o -= c),
                  (a += c),
                  (h -= c),
                  (s += c),
                  (r.length -= c);
                break;
              }
              r.mode = 12;
              break;
            case 17:
              for (; l < 14; ) {
                if (0 === o) break t;
                o--, (u += n[a++] << l), (l += 8);
              }
              if (
                ((r.nlen = 257 + (31 & u)),
                (u >>>= 5),
                (l -= 5),
                (r.ndist = 1 + (31 & u)),
                (u >>>= 5),
                (l -= 5),
                (r.ncode = 4 + (15 & u)),
                (u >>>= 4),
                (l -= 4),
                286 < r.nlen || 30 < r.ndist)
              ) {
                (t.msg = "too many length or distance symbols"), (r.mode = 30);
                break;
              }
              (r.have = 0), (r.mode = 18);
            case 18:
              for (; r.have < r.ncode; ) {
                for (; l < 3; ) {
                  if (0 === o) break t;
                  o--, (u += n[a++] << l), (l += 8);
                }
                (r.lens[B[r.have++]] = 7 & u), (u >>>= 3), (l -= 3);
              }
              for (; r.have < 19; ) r.lens[B[r.have++]] = 0;
              if (
                ((r.lencode = r.lendyn),
                (r.lenbits = 7),
                (x = { bits: r.lenbits }),
                (S = de(0, r.lens, 0, 19, r.lencode, 0, r.work, x)),
                (r.lenbits = x.bits),
                S)
              ) {
                (t.msg = "invalid code lengths set"), (r.mode = 30);
                break;
              }
              (r.have = 0), (r.mode = 19);
            case 19:
              for (; r.have < r.nlen + r.ndist; ) {
                for (
                  ;
                  (w =
                    ((z = r.lencode[u & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                    (b = 65535 & z),
                    !((p = z >>> 24) <= l);

                ) {
                  if (0 === o) break t;
                  o--, (u += n[a++] << l), (l += 8);
                }
                if (b < 16) (u >>>= p), (l -= p), (r.lens[r.have++] = b);
                else {
                  if (16 === b) {
                    for (E = p + 2; l < E; ) {
                      if (0 === o) break t;
                      o--, (u += n[a++] << l), (l += 8);
                    }
                    if (((u >>>= p), (l -= p), 0 === r.have)) {
                      (t.msg = "invalid bit length repeat"), (r.mode = 30);
                      break;
                    }
                    (k = r.lens[r.have - 1]),
                      (c = 3 + (3 & u)),
                      (u >>>= 2),
                      (l -= 2);
                  } else if (17 === b) {
                    for (E = p + 3; l < E; ) {
                      if (0 === o) break t;
                      o--, (u += n[a++] << l), (l += 8);
                    }
                    (l -= p),
                      (k = 0),
                      (c = 3 + (7 & (u >>>= p))),
                      (u >>>= 3),
                      (l -= 3);
                  } else {
                    for (E = p + 7; l < E; ) {
                      if (0 === o) break t;
                      o--, (u += n[a++] << l), (l += 8);
                    }
                    (l -= p),
                      (k = 0),
                      (c = 11 + (127 & (u >>>= p))),
                      (u >>>= 7),
                      (l -= 7);
                  }
                  if (r.have + c > r.nlen + r.ndist) {
                    (t.msg = "invalid bit length repeat"), (r.mode = 30);
                    break;
                  }
                  for (; c--; ) r.lens[r.have++] = k;
                }
              }
              if (30 === r.mode) break;
              if (0 === r.lens[256]) {
                (t.msg = "invalid code -- missing end-of-block"), (r.mode = 30);
                break;
              }
              if (
                ((r.lenbits = 9),
                (x = { bits: r.lenbits }),
                (S = de(ce, r.lens, 0, r.nlen, r.lencode, 0, r.work, x)),
                (r.lenbits = x.bits),
                S)
              ) {
                (t.msg = "invalid literal/lengths set"), (r.mode = 30);
                break;
              }
              if (
                ((r.distbits = 6),
                (r.distcode = r.distdyn),
                (x = { bits: r.distbits }),
                (S = de(_e, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, x)),
                (r.distbits = x.bits),
                S)
              ) {
                (t.msg = "invalid distances set"), (r.mode = 30);
                break;
              }
              if (((r.mode = 20), 6 === e)) break t;
            case 20:
              r.mode = 21;
            case 21:
              if (6 <= o && 258 <= h) {
                (t.next_out = s),
                  (t.avail_out = h),
                  (t.next_in = a),
                  (t.avail_in = o),
                  (r.hold = u),
                  (r.bits = l),
                  oe(t, d),
                  (s = t.next_out),
                  (i = t.output),
                  (h = t.avail_out),
                  (a = t.next_in),
                  (n = t.input),
                  (o = t.avail_in),
                  (u = r.hold),
                  (l = r.bits),
                  12 === r.mode && (r.back = -1);
                break;
              }
              for (
                r.back = 0;
                (w =
                  ((z = r.lencode[u & ((1 << r.lenbits) - 1)]) >>> 16) & 255),
                  (b = 65535 & z),
                  !((p = z >>> 24) <= l);

              ) {
                if (0 === o) break t;
                o--, (u += n[a++] << l), (l += 8);
              }
              if (w && 0 == (240 & w)) {
                for (
                  m = p, v = w, y = b;
                  (w =
                    ((z = r.lencode[y + ((u & ((1 << (m + v)) - 1)) >> m)]) >>>
                      16) &
                    255),
                    (b = 65535 & z),
                    !(m + (p = z >>> 24) <= l);

                ) {
                  if (0 === o) break t;
                  o--, (u += n[a++] << l), (l += 8);
                }
                (u >>>= m), (l -= m), (r.back += m);
              }
              if (
                ((u >>>= p), (l -= p), (r.back += p), (r.length = b), 0 === w)
              ) {
                r.mode = 26;
                break;
              }
              if (32 & w) {
                (r.back = -1), (r.mode = 12);
                break;
              }
              if (64 & w) {
                (t.msg = "invalid literal/length code"), (r.mode = 30);
                break;
              }
              (r.extra = 15 & w), (r.mode = 22);
            case 22:
              if (r.extra) {
                for (E = r.extra; l < E; ) {
                  if (0 === o) break t;
                  o--, (u += n[a++] << l), (l += 8);
                }
                (r.length += u & ((1 << r.extra) - 1)),
                  (u >>>= r.extra),
                  (l -= r.extra),
                  (r.back += r.extra);
              }
              (r.was = r.length), (r.mode = 23);
            case 23:
              for (
                ;
                (w =
                  ((z = r.distcode[u & ((1 << r.distbits) - 1)]) >>> 16) & 255),
                  (b = 65535 & z),
                  !((p = z >>> 24) <= l);

              ) {
                if (0 === o) break t;
                o--, (u += n[a++] << l), (l += 8);
              }
              if (0 == (240 & w)) {
                for (
                  m = p, v = w, y = b;
                  (w =
                    ((z = r.distcode[y + ((u & ((1 << (m + v)) - 1)) >> m)]) >>>
                      16) &
                    255),
                    (b = 65535 & z),
                    !(m + (p = z >>> 24) <= l);

                ) {
                  if (0 === o) break t;
                  o--, (u += n[a++] << l), (l += 8);
                }
                (u >>>= m), (l -= m), (r.back += m);
              }
              if (((u >>>= p), (l -= p), (r.back += p), 64 & w)) {
                (t.msg = "invalid distance code"), (r.mode = 30);
                break;
              }
              (r.offset = b), (r.extra = 15 & w), (r.mode = 24);
            case 24:
              if (r.extra) {
                for (E = r.extra; l < E; ) {
                  if (0 === o) break t;
                  o--, (u += n[a++] << l), (l += 8);
                }
                (r.offset += u & ((1 << r.extra) - 1)),
                  (u >>>= r.extra),
                  (l -= r.extra),
                  (r.back += r.extra);
              }
              if (r.offset > r.dmax) {
                (t.msg = "invalid distance too far back"), (r.mode = 30);
                break;
              }
              r.mode = 25;
            case 25:
              if (0 === h) break t;
              if (((c = d - h), r.offset > c)) {
                if ((c = r.offset - c) > r.whave && r.sane) {
                  (t.msg = "invalid distance too far back"), (r.mode = 30);
                  break;
                }
                c > r.wnext
                  ? ((c -= r.wnext), (_ = r.wsize - c))
                  : (_ = r.wnext - c),
                  c > r.length && (c = r.length),
                  (g = r.window);
              } else (g = i), (_ = s - r.offset), (c = r.length);
              for (
                h < c && (c = h), h -= c, r.length -= c;
                (i[s++] = g[_++]), --c;

              );
              0 === r.length && (r.mode = 21);
              break;
            case 26:
              if (0 === h) break t;
              (i[s++] = r.length), h--, (r.mode = 21);
              break;
            case 27:
              if (r.wrap) {
                for (; l < 32; ) {
                  if (0 === o) break t;
                  o--, (u |= n[a++] << l), (l += 8);
                }
                if (
                  ((d -= h),
                  (t.total_out += d),
                  (r.total += d),
                  d &&
                    (t.adler = r.check = r.flags
                      ? it(r.check, i, d, s - d)
                      : et(r.check, i, d, s - d)),
                  (d = h),
                  (r.flags ? u : ve(u)) !== r.check)
                ) {
                  (t.msg = "incorrect data check"), (r.mode = 30);
                  break;
                }
                l = u = 0;
              }
              r.mode = 28;
            case 28:
              if (r.wrap && r.flags) {
                for (; l < 32; ) {
                  if (0 === o) break t;
                  o--, (u += n[a++] << l), (l += 8);
                }
                if (u !== (4294967295 & r.total)) {
                  (t.msg = "incorrect length check"), (r.mode = 30);
                  break;
                }
                l = u = 0;
              }
              r.mode = 29;
            case 29:
              S = 1;
              break t;
            case 30:
              S = -3;
              break t;
            case 31:
              return -4;
            case 32:
            default:
              return pe;
          }
        return (
          (t.next_out = s),
          (t.avail_out = h),
          (t.next_in = a),
          (t.avail_in = o),
          (r.hold = u),
          (r.bits = l),
          (r.wsize ||
            (d !== t.avail_out && r.mode < 30 && (r.mode < 27 || 4 !== e))) &&
          Ne(t, t.output, t.next_out, d - t.avail_out)
            ? ((r.mode = 31), -4)
            : ((f -= t.avail_in),
              (d -= t.avail_out),
              (t.total_in += f),
              (t.total_out += d),
              (r.total += d),
              r.wrap &&
                d &&
                (t.adler = r.check = r.flags
                  ? it(r.check, i, d, t.next_out - d)
                  : et(r.check, i, d, t.next_out - d)),
              (t.data_type =
                r.bits +
                (r.last ? 64 : 0) +
                (12 === r.mode ? 128 : 0) +
                (20 === r.mode || 15 === r.mode ? 256 : 0)),
              ((0 === f && 0 === d) || 4 === e) && S === ge && (S = -5),
              S)
        );
      },
      inflateEnd: function (t) {
        if (!t || !t.state) return pe;
        var e = t.state;
        return e.window && (e.window = null), (t.state = null), ge;
      },
      inflateGetHeader: function (t, e) {
        var r;
        return t && t.state
          ? 0 == (2 & (r = t.state).wrap)
            ? pe
            : (((r.head = e).done = !1), ge)
          : pe;
      },
      inflateSetDictionary: function (t, e) {
        var r,
          n = e.length;
        return t && t.state
          ? 0 !== (r = t.state).wrap && 11 !== r.mode
            ? pe
            : 11 === r.mode && et(1, e, n, 0) !== r.check
            ? -3
            : Ne(t, e, n, n)
            ? ((r.mode = 31), -4)
            : ((r.havedict = 1), ge)
          : pe;
      },
      inflateInfo: "pako inflate (from Nodeca project)",
    },
    Re = {
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      Z_BUF_ERROR: -5,
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      Z_BINARY: 0,
      Z_TEXT: 1,
      Z_UNKNOWN: 2,
      Z_DEFLATED: 8,
    };
  var Oe = function () {
      (this.text = 0),
        (this.time = 0),
        (this.xflags = 0),
        (this.os = 0),
        (this.extra = null),
        (this.extra_len = 0),
        (this.name = ""),
        (this.comment = ""),
        (this.hcrc = 0),
        (this.done = !1);
    },
    Te = Object.prototype.toString;
  function Ue(t) {
    if (!(this instanceof Ue)) return new Ue(t);
    this.options = T.assign(
      { chunkSize: 16384, windowBits: 0, to: "" },
      t || {}
    );
    var e = this.options;
    e.raw &&
      0 <= e.windowBits &&
      e.windowBits < 16 &&
      ((e.windowBits = -e.windowBits),
      0 === e.windowBits && (e.windowBits = -15)),
      !(0 <= e.windowBits && e.windowBits < 16) ||
        (t && t.windowBits) ||
        (e.windowBits += 32),
      15 < e.windowBits &&
        e.windowBits < 48 &&
        0 == (15 & e.windowBits) &&
        (e.windowBits |= 15),
      (this.err = 0),
      (this.msg = ""),
      (this.ended = !1),
      (this.chunks = []),
      (this.strm = new $t()),
      (this.strm.avail_out = 0);
    var r = Ie.inflateInit2(this.strm, e.windowBits);
    if (r !== Re.Z_OK) throw new Error(at[r]);
    (this.header = new Oe()), Ie.inflateGetHeader(this.strm, this.header);
  }
  function Ze(t, e) {
    var r = new Ue(e);
    if ((r.push(t, !0), r.err)) throw r.msg || at[r.err];
    return r.result;
  }
  (Ue.prototype.push = function (t, e) {
    var r,
      n,
      i,
      a,
      s,
      o,
      h = this.strm,
      u = this.options.chunkSize,
      l = this.options.dictionary,
      f = !1;
    if (this.ended) return !1;
    (n = e === ~~e ? e : !0 === e ? Re.Z_FINISH : Re.Z_NO_FLUSH),
      "string" == typeof t
        ? (h.input = Wt.binstring2buf(t))
        : "[object ArrayBuffer]" === Te.call(t)
        ? (h.input = new Uint8Array(t))
        : (h.input = t),
      (h.next_in = 0),
      (h.avail_in = h.input.length);
    do {
      if (
        (0 === h.avail_out &&
          ((h.output = new T.Buf8(u)), (h.next_out = 0), (h.avail_out = u)),
        (r = Ie.inflate(h, Re.Z_NO_FLUSH)) === Re.Z_NEED_DICT &&
          l &&
          ((o =
            "string" == typeof l
              ? Wt.string2buf(l)
              : "[object ArrayBuffer]" === Te.call(l)
              ? new Uint8Array(l)
              : l),
          (r = Ie.inflateSetDictionary(this.strm, o))),
        r === Re.Z_BUF_ERROR && !0 === f && ((r = Re.Z_OK), (f = !1)),
        r !== Re.Z_STREAM_END && r !== Re.Z_OK)
      )
        return this.onEnd(r), !(this.ended = !0);
      h.next_out &&
        ((0 !== h.avail_out &&
          r !== Re.Z_STREAM_END &&
          (0 !== h.avail_in || (n !== Re.Z_FINISH && n !== Re.Z_SYNC_FLUSH))) ||
          ("string" === this.options.to
            ? ((i = Wt.utf8border(h.output, h.next_out)),
              (a = h.next_out - i),
              (s = Wt.buf2string(h.output, i)),
              (h.next_out = a),
              (h.avail_out = u - a),
              a && T.arraySet(h.output, h.output, i, a, 0),
              this.onData(s))
            : this.onData(T.shrinkBuf(h.output, h.next_out)))),
        0 === h.avail_in && 0 === h.avail_out && (f = !0);
    } while ((0 < h.avail_in || 0 === h.avail_out) && r !== Re.Z_STREAM_END);
    return (
      r === Re.Z_STREAM_END && (n = Re.Z_FINISH),
      n === Re.Z_FINISH
        ? ((r = Ie.inflateEnd(this.strm)),
          this.onEnd(r),
          (this.ended = !0),
          r === Re.Z_OK)
        : n !== Re.Z_SYNC_FLUSH || (this.onEnd(Re.Z_OK), !(h.avail_out = 0))
    );
  }),
    (Ue.prototype.onData = function (t) {
      this.chunks.push(t);
    }),
    (Ue.prototype.onEnd = function (t) {
      t === Re.Z_OK &&
        ("string" === this.options.to
          ? (this.result = this.chunks.join(""))
          : (this.result = T.flattenChunks(this.chunks))),
        (this.chunks = []),
        (this.err = t),
        (this.msg = this.strm.msg);
    });
  var De = {
      Inflate: Ue,
      inflate: Ze,
      inflateRaw: function (t, e) {
        return ((e = e || {}).raw = !0), Ze(t, e);
      },
      ungzip: Ze,
    },
    He = {};
  (0, T.assign)(He, se, De, Re);
  var je = He,
    Le = 1e13,
    Pe = (function () {
      function t(t) {
        this.buf = [+t || 0];
      }
      return (
        (t.prototype.mulAdd = function (t, e) {
          var r,
            n,
            i = this.buf,
            a = i.length;
          for (r = 0; r < a; ++r)
            (n = i[r] * t + e) < Le ? (e = 0) : (n -= (e = 0 | (n / Le)) * Le),
              (i[r] = n);
          0 < e && (i[r] = e);
        }),
        (t.prototype.sub = function (t) {
          var e,
            r,
            n = this.buf,
            i = n.length;
          for (e = 0; e < i; ++e)
            (r = n[e] - t) < 0 ? ((r += Le), (t = 1)) : (t = 0), (n[e] = r);
          for (; 0 === n[n.length - 1]; ) n.pop();
        }),
        (t.prototype.toString = function (t) {
          if (10 != (t || 10)) throw "only base 10 is supported";
          for (
            var e = this.buf, r = e[e.length - 1].toString(), n = e.length - 2;
            0 <= n;
            --n
          )
            r += (Le + e[n]).toString().substring(1);
          return r;
        }),
        (t.prototype.valueOf = function () {
          for (var t = this.buf, e = 0, r = t.length - 1; 0 <= r; --r)
            e = e * Le + t[r];
          return e;
        }),
        (t.prototype.simplify = function () {
          var t = this.buf;
          return 1 == t.length ? t[0] : this;
        }),
        t
      );
    })(),
    Fe =
      'Unsupported algorithm name specified! Supported algorithms: "HS256", "HS384", "HS512", "RS256", "RS384", "RS512" and "none".',
    Me = "Illegal argument specified!";
  function Ke(t) {
    if (!t) throw new Error(Me);
    var e = t.match(/[0-9A-F]{2}/gi);
    if (!e) throw new Error(Me);
    return new Uint8Array(
      e.map(function (t) {
        return parseInt(t, 16);
      })
    );
  }
  var Ge = "…",
    Je = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
    Ye = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
  function Ve(t, e) {
    return t.length > e && (t = t.substring(0, e) + Ge), t;
  }
  var qe = (function () {
      function r(t, e) {
        void 0 === e && (e = 0),
          (this.hexDigits = "0123456789ABCDEF"),
          t instanceof r
            ? ((this.enc = t.enc), (this.pos = t.pos))
            : ((this.enc = t), (this.pos = e));
      }
      return (
        (r.prototype.get = function (t) {
          if ((void 0 === t && (t = this.pos++), t >= this.enc.length))
            throw (
              "Requesting byte offset " +
              t +
              " on a stream of length " +
              this.enc.length
            );
          return "string" == typeof this.enc
            ? this.enc.charCodeAt(t)
            : this.enc[t];
        }),
        (r.prototype.hexByte = function (t) {
          return (
            this.hexDigits.charAt((t >> 4) & 15) + this.hexDigits.charAt(15 & t)
          );
        }),
        (r.prototype.hexDump = function (t, e, r) {
          for (var n = "", i = t; i < e; ++i)
            if (((n += this.hexByte(this.get(i))), !0 !== r))
              switch (15 & i) {
                case 7:
                  n += "  ";
                  break;
                case 15:
                  n += "\n";
                  break;
                default:
                  n += " ";
              }
          return n;
        }),
        (r.prototype.isASCII = function (t, e) {
          for (var r = t; r < e; ++r) {
            var n = this.get(r);
            if (n < 32 || 176 < n) return !1;
          }
          return !0;
        }),
        (r.prototype.parseStringISO = function (t, e) {
          for (var r = "", n = t; n < e; ++n)
            r += String.fromCharCode(this.get(n));
          return r;
        }),
        (r.prototype.parseStringUTF = function (t, e) {
          for (var r = "", n = t; n < e; ) {
            var i = this.get(n++);
            r +=
              i < 128
                ? String.fromCharCode(i)
                : 191 < i && i < 224
                ? String.fromCharCode(((31 & i) << 6) | (63 & this.get(n++)))
                : String.fromCharCode(
                    ((15 & i) << 12) |
                      ((63 & this.get(n++)) << 6) |
                      (63 & this.get(n++))
                  );
          }
          return r;
        }),
        (r.prototype.parseStringBMP = function (t, e) {
          for (var r, n, i = "", a = t; a < e; )
            (r = this.get(a++)),
              (n = this.get(a++)),
              (i += String.fromCharCode((r << 8) | n));
          return i;
        }),
        (r.prototype.parseTime = function (t, e, r) {
          var n = this.parseStringISO(t, e),
            i = (r ? Je : Ye).exec(n);
          if (!i) return "Unrecognized time: " + n;
          if (r) {
            var a = +i[1] < 70 ? 2e3 : 1900;
            i[1] = a + "";
          }
          return (
            (n = i[1] + "-" + i[2] + "-" + i[3] + " " + i[4]),
            i[5] &&
              ((n += ":" + i[5]),
              i[6] && ((n += ":" + i[6]), i[7] && (n += "." + i[7]))),
            i[8] &&
              ((n += " UTC"),
              "Z" != i[8] && ((n += i[8]), i[9] && (n += ":" + i[9]))),
            n
          );
        }),
        (r.prototype.parseInteger = function (t, e) {
          for (
            var r, n = this.get(t), i = 127 < n, a = i ? 255 : 0, s = "";
            n == a && ++t < e;

          )
            n = this.get(t);
          if (0 === (r = e - t)) return i ? -1 : 0;
          if (4 < r) {
            var o = +n;
            for (r <<= 3; 0 == (128 & (o ^ a)); ) (o <<= 1), --r;
            s = "(" + r + " bit)\n";
          }
          i && (n -= 256);
          for (var h = new Pe(n), u = t + 1; u < e; ++u)
            h.mulAdd(256, this.get(u));
          return s + h.toString();
        }),
        (r.prototype.parseBitString = function (t, e, r) {
          for (
            var n = this.get(t),
              i = "(" + (((e - t - 1) << 3) - n) + " bit)\n",
              a = "",
              s = t + 1;
            s < e;
            ++s
          ) {
            for (
              var o = this.get(s), h = s == e - 1 ? n : 0, u = 7;
              h <= u;
              --u
            )
              a += (o >> u) & 1 ? "1" : "0";
            if (a.length > r) return i + Ve(a, r);
          }
          return i + a;
        }),
        (r.prototype.parseOctetString = function (t, e, r) {
          if (this.isASCII(t, e)) return Ve(this.parseStringISO(t, e), r);
          var n = e - t,
            i = "(" + n + " byte)\n";
          (r /= 2) < n && (e = t + r);
          for (var a = t; a < e; ++a) i += this.hexByte(this.get(a));
          return r < n && (i += Ge), i;
        }),
        (r.prototype.parseOID = function (t, e, r) {
          for (var n = "", i = new Pe(), a = 0, s = t; s < e; ++s) {
            var o = this.get(s);
            if ((i.mulAdd(128, 127 & o), (a += 7), !(128 & o))) {
              if ("" === n)
                if ((i = i.simplify()) instanceof Pe)
                  i.sub(80), (n = "2." + i.toString());
                else {
                  var h = i < 80 ? (i < 40 ? 0 : 1) : 2;
                  n = h + "." + (i - 40 * h);
                }
              else n += "." + i.toString();
              if (n.length > r) return Ve(n, r);
              (i = new Pe()), (a = 0);
            }
          }
          return 0 < a && (n += ".incomplete"), n;
        }),
        r
      );
    })(),
    Xe = (function () {
      function u(t, e, r, n, i) {
        if (!(n instanceof We)) throw "Invalid tag value.";
        (this.stream = t),
          (this.header = e),
          (this.length = r),
          (this.tag = n),
          (this.sub = i);
      }
      return (
        (u.prototype.typeName = function () {
          switch (this.tag.tagClass) {
            case 0:
              switch (this.tag.tagNumber) {
                case 0:
                  return "EOC";
                case 1:
                  return "BOOLEAN";
                case 2:
                  return "INTEGER";
                case 3:
                  return "BIT_STRING";
                case 4:
                  return "OCTET_STRING";
                case 5:
                  return "NULL";
                case 6:
                  return "OBJECT_IDENTIFIER";
                case 7:
                  return "ObjectDescriptor";
                case 8:
                  return "EXTERNAL";
                case 9:
                  return "REAL";
                case 10:
                  return "ENUMERATED";
                case 11:
                  return "EMBEDDED_PDV";
                case 12:
                  return "UTF8String";
                case 16:
                  return "SEQUENCE";
                case 17:
                  return "SET";
                case 18:
                  return "NumericString";
                case 19:
                  return "PrintableString";
                case 20:
                  return "TeletexString";
                case 21:
                  return "VideotexString";
                case 22:
                  return "IA5String";
                case 23:
                  return "UTCTime";
                case 24:
                  return "GeneralizedTime";
                case 25:
                  return "GraphicString";
                case 26:
                  return "VisibleString";
                case 27:
                  return "GeneralString";
                case 28:
                  return "UniversalString";
                case 30:
                  return "BMPString";
              }
              return "Universal_" + this.tag.tagNumber.toString();
            case 1:
              return "Application_" + this.tag.tagNumber.toString();
            case 2:
              return "[" + this.tag.tagNumber.toString() + "]";
            case 3:
              return "Private_" + this.tag.tagNumber.toString();
          }
        }),
        (u.prototype.content = function (t) {
          if (void 0 === this.tag) return null;
          void 0 === t && (t = 1 / 0);
          var e = this.posContent(),
            r = Math.abs(this.length);
          if (!this.tag.isUniversal())
            return null !== this.sub
              ? "(" + this.sub.length + " elem)"
              : this.stream.parseOctetString(e, e + r, t);
          switch (this.tag.tagNumber) {
            case 1:
              return 0 === this.stream.get(e) ? "false" : "true";
            case 2:
              return this.stream.parseInteger(e, e + r);
            case 3:
              return this.sub
                ? "(" + this.sub.length + " elem)"
                : this.stream.parseBitString(e, e + r, t);
            case 4:
              return this.sub
                ? "(" + this.sub.length + " elem)"
                : this.stream.parseOctetString(e, e + r, t);
            case 6:
              return this.stream.parseOID(e, e + r, t);
            case 16:
            case 17:
              return null !== this.sub
                ? "(" + this.sub.length + " elem)"
                : "(no elem)";
            case 12:
              return Ve(this.stream.parseStringUTF(e, e + r), t);
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 26:
              return Ve(this.stream.parseStringISO(e, e + r), t);
            case 30:
              return Ve(this.stream.parseStringBMP(e, e + r), t);
            case 23:
            case 24:
              return this.stream.parseTime(e, e + r, 23 == this.tag.tagNumber);
          }
          return null;
        }),
        (u.prototype.toString = function () {
          return (
            this.typeName() +
            "@" +
            this.stream.pos +
            "[header:" +
            this.header +
            ",length:" +
            this.length +
            ",sub:" +
            (null === this.sub ? "null" : this.sub.length) +
            "]"
          );
        }),
        (u.prototype.posStart = function () {
          return this.stream.pos;
        }),
        (u.prototype.posContent = function () {
          return this.stream.pos + this.header;
        }),
        (u.prototype.posEnd = function () {
          return this.stream.pos + this.header + Math.abs(this.length);
        }),
        (u.prototype.toHexString = function (t) {
          return this.stream.hexDump(this.posStart(), this.posEnd(), !0);
        }),
        (u.prototype.getHex = function () {
          return this.stream.hexDump(this.posContent(), this.posEnd(), !0);
        }),
        (u.prototype.getAB = function (t) {
          return (
            void 0 === t && (t = !0),
            t
              ? (function t(e) {
                  return 0 === e[0] ? t(e.slice(1)) : e;
                })(Ke(this.getHex()))
              : Ke(this.getHex())
          );
        }),
        (u.decodeLength = function (t) {
          var e = t.get(),
            r = 127 & e;
          if (r == e) return r;
          if (6 < r)
            throw (
              "Length over 48 bits not supported at position " + (t.pos - 1)
            );
          if (0 === r) return null;
          for (var n = (e = 0); n < r; ++n) e = 256 * e + t.get();
          return e;
        }),
        (u.decode = function (r) {
          r instanceof qe || (r = new qe(r, 0));
          var t = new qe(r),
            e = new We(r),
            n = u.decodeLength(r),
            i = null,
            a = r.pos,
            s = a - t.pos,
            o = function () {
              if (((i = []), null !== n)) {
                for (var t = a + n; r.pos < t; ) i[i.length] = u.decode(r);
                if (r.pos != t)
                  throw (
                    "Content size is not correct for container starting at offset " +
                    a
                  );
              } else
                try {
                  for (;;) {
                    var e = u.decode(r);
                    if (e.tag.isEOC()) break;
                    i[i.length] = e;
                  }
                  n = a - r.pos;
                } catch (t) {
                  throw (
                    "Exception while decoding undefined length content: " + t
                  );
                }
            };
          if (e.tagConstructed) o();
          else if (e.isUniversal() && (3 == e.tagNumber || 4 == e.tagNumber))
            try {
              if (3 == e.tagNumber && 0 != r.get())
                throw "BIT STRINGs with unused bits cannot encapsulate.";
              o();
              for (var h = 0; h < i.length; ++h)
                if (i[h].tag.isEOC())
                  throw "EOC is not supposed to be actual content.";
            } catch (t) {
              i = null;
            }
          if (null === i) {
            if (null === n)
              throw (
                "We can't skip over an invalid tag with undefined length at offset " +
                a
              );
            r.pos = a + Math.abs(n);
          }
          return new u(t, s, n, e, i);
        }),
        u
      );
    })(),
    We = (function () {
      function t(t) {
        var e = t.get();
        if (
          ((this.tagClass = e >> 6),
          (this.tagConstructed = 0 != (32 & e)),
          (this.tagNumber = 31 & e),
          31 == this.tagNumber)
        ) {
          for (
            var r = new Pe();
            (e = t.get()), r.mulAdd(128, 127 & e), 128 & e;

          );
          this.tagNumber = r.simplify();
        }
      }
      return (
        (t.prototype.isUniversal = function () {
          return 0 === this.tagClass;
        }),
        (t.prototype.isEOC = function () {
          return 0 === this.tagClass && 0 === this.tagNumber;
        }),
        t
      );
    })(),
    $e = "object" == typeof window && (window.crypto || window.msCrypto),
    Qe = $e && ($e.subtle || $e.webkitSubtle || $e.Subtle),
    tr = (function () {
      function t(t) {
        if ("string" != typeof t) throw new Error(Me);
        var e = t.split(".");
        if (3 !== e.length) throw new Error(Me);
        var r = e[0],
          n = e[1],
          i = e[2];
        (this.header = r), (this.payload = n), (this.signature = i);
      }
      return (
        (t.prototype.toString = function () {
          return this.header + "." + this.payload + "." + this.signature;
        }),
        t
      );
    })(),
    er = (function () {
      function t(t) {
        if (
          ((this.header = {}),
          (this.payload = {}),
          (this.signature = ""),
          "string" != typeof t)
        )
          throw new Error(Me);
        var e = fr(t);
        e &&
          ((this.header = e.header ? nr(hr(e.header)) : {}),
          (this.payload = e.payload
            ? ur(this.header)
              ? nr(wr(e.payload))
              : nr(hr(e.payload))
            : {}),
          (this.signature = e.signature || ""));
      }
      return (
        (t.prototype.toString = function () {
          return (
            _r(ir(this.header)) +
            "." +
            (ur(this.header) ? gr(ir(this.payload)) : _r(ir(this.payload))) +
            "." +
            this.signature
          );
        }),
        t
      );
    })();
  function rr(t) {
    try {
      return Promise.resolve(t());
    } catch (t) {
      return Promise.reject(t);
    }
  }
  function nr(t) {
    try {
      return JSON.parse(t);
    } catch (t) {
      throw new Error(t.message);
    }
  }
  function ir(t) {
    try {
      return JSON.stringify(t);
    } catch (t) {
      throw new Error(t.message);
    }
  }
  function ar(t) {
    try {
      if ("object" == typeof window && "function" == typeof window.atob)
        return window.atob(t);
      if ("undefined" != typeof Buffer)
        return Buffer.from(t, "base64").toString("binary");
      throw new Error(Me);
    } catch (t) {
      throw new Error(t);
    }
  }
  function sr(t) {
    if ("string" != typeof t || t.length % 4 != 0) throw new Error(Me);
    return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  }
  function or(t) {
    if ("string" != typeof t || t.length % 4 == 1) throw new Error(Me);
    for (; t.length % 4 != 0; ) t += "=";
    return t.replace(/\-/g, "+").replace(/_/g, "/");
  }
  function hr(t) {
    return ar(or(t));
  }
  function ur(t) {
    return (
      "object" == typeof t &&
      "string" == typeof t.zip &&
      "GZIP" === t.zip.toUpperCase()
    );
  }
  function lr(t) {
    return new er(t);
  }
  function fr(t) {
    return new tr(t);
  }
  var dr = fr;
  function cr(t) {
    try {
      if ("object" == typeof window && "function" == typeof window.atob)
        return window.btoa(t);
      if ("undefined" != typeof Buffer)
        return Buffer.from(t).toString("base64");
      throw new Error(Me);
    } catch (t) {
      throw new Error(t);
    }
  }
  function _r(t) {
    return sr(cr(t));
  }
  function gr(t) {
    return _r(br(t));
  }
  function pr(t) {
    if ("string" != typeof t) throw new Error(Me);
    return je.inflate(t, { raw: !1, from: "string", to: "string" });
  }
  function wr(t) {
    return pr(hr(t));
  }
  function br(t) {
    if ("string" != typeof t) throw new Error(Me);
    return je.deflate(t, { raw: !1, from: "string", to: "string" });
  }
  function mr(t) {
    for (var e = new Uint8Array(t.length), r = 0; r < t.length; r++)
      e[r] = t.charCodeAt(r);
    return e;
  }
  function vr(t) {
    return (
      t instanceof ArrayBuffer && (t = new Uint8Array(t)),
      String.fromCharCode.apply(String, t)
    );
  }
  function yr(r, n) {
    return f(this, void 0, void 0, function () {
      var e;
      return d(this, function (t) {
        switch (t.label) {
          case 0:
            return Qe
              ? ((e = mr(n)),
                [
                  4,
                  Qe.importKey(
                    "raw",
                    e,
                    { name: "HMAC", hash: { name: r } },
                    !0,
                    ["sign"]
                  ).then(function (r) {
                    return {
                      update: function (e) {
                        return f(this, void 0, void 0, function () {
                          return d(this, function (t) {
                            switch (t.label) {
                              case 0:
                                return [4, Qe.sign("HMAC", r, mr(e))];
                              case 1:
                                return [2, t.sent()];
                            }
                          });
                        });
                      },
                    };
                  }),
                ])
              : [3, 2];
          case 1:
            return [2, t.sent()];
          case 2:
            return [
              2,
              a && a.createHmac
                ? Promise.resolve(a.createHmac(r.replace("SHA-", "sha"), n))
                : Promise.reject($e),
            ];
        }
      });
    });
  }
  function kr(l) {
    return function (h, u) {
      return f(this, void 0, void 0, function () {
        var e, r, n, i, a, s, o;
        return d(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, yr("SHA-" + l, u)];
            case 1:
              return (
                (e = t.sent()),
                (n = (r = Promise).resolve),
                Qe
                  ? ((a = _r), (s = vr), (o = e) ? [4, e.update(h)] : [3, 3])
                  : [3, 4]
              );
            case 2:
              (o = t.sent()), (t.label = 3);
            case 3:
              return (i = a.apply(void 0, [s.apply(void 0, [o])])), [3, 5];
            case 4:
              (i = sr(e && e.update(h).digest("base64"))), (t.label = 5);
            case 5:
              return [2, n.apply(r, [i])];
          }
        });
      });
    };
  }
  function Sr(i) {
    return function (e, r, n) {
      return f(this, void 0, void 0, function () {
        return d(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, kr(i)(e, n)];
            case 1:
              return [2, t.sent() === r];
          }
        });
      });
    };
  }
  function xr(t) {
    if ("string" != typeof t) throw new Error(Me);
    var r = "public";
    var e = t.split("\n"),
      n = ["-BEGIN RSA PRIVATE KEY-", "-END RSA PRIVATE KEY-"],
      i = [
        "-BEGIN RSA PUBLIC KEY-",
        "-BEGIN PUBLIC KEY-",
        "-END PUBLIC KEY-",
        "-END RSA PUBLIC KEY-",
      ],
      a = e
        .map(function (t) {
          return t.trim();
        })
        .filter(function (t) {
          return (
            t.length &&
            ((e = t),
            n.some(function (t) {
              return -1 < e.toUpperCase().indexOf(t);
            })
              ? !(r = "private")
              : !i.some(function (t) {
                  return -1 < e.toUpperCase().indexOf(t);
                }))
          );
          var e;
        })
        .join("");
    if (a.length) return { body: mr(ar(or(a))), type: r };
    throw new Error(Me);
  }
  var Er = function (t) {
    (this.tagClass = 0), (this.tagConstructed = !1), (this.tagNumber = 0);
    var e = t.read();
    (this.tagClass = e >> 6),
      (this.tagConstructed = 0 != (32 & e)),
      (this.tagNumber = 31 & e);
  };
  function zr(t) {
    if (!t) throw new Error(Me);
    t instanceof ArrayBuffer && (t = new Uint8Array(t));
    var e = Xe.decode(t),
      r = {};
    if (
      (3 === e.sub.length && (e = e.sub[2].sub[0]),
      9 === e.sub.length
        ? ((r.modulus = e.sub[1].getAB()),
          (r.publicExponent = parseInt(e.sub[2].getHex(), 16)),
          (r.privateExponent = e.sub[3].getAB()),
          (r.prime1 = e.sub[4].getAB()),
          (r.prime2 = e.sub[5].getAB()),
          (r.exponent1 = e.sub[6].getAB()),
          (r.exponent2 = e.sub[7].getAB()),
          (r.coefficient = e.sub[8].getAB()))
        : 2 === e.sub.length &&
          ((e = e.sub[1].sub[0]),
          (r.modulus = e.sub[0].getAB()),
          (r.publicExponent = parseInt(e.sub[1].getHex(), 16))),
      (r.bits =
        8 * (r.modulus.length - 1) +
        Math.ceil(Math.log(r.modulus[0] + 1) / Math.log(2))),
      !r.bits)
    )
      throw new Error(Me);
    return r;
  }
  function Ar(t, e, r) {
    if (!t) throw new Error(Me);
    if (
      "private" ===
        (e =
          ("string" == typeof e && e.toLowerCase()) ||
          ["public", "private"][t.privateExponent ? 1 : 0]) &&
      !t.privateExponent
    )
      throw new Error(Me);
    var n = t.publicExponent,
      i = Math.ceil(Math.log(n) / Math.log(256)),
      a = new Uint8Array(i)
        .map(function (t) {
          return (t = n % 256), (n = Math.floor(n / 256)), t;
        })
        .reverse(),
      s = Object.assign({ kty: "RSA" }, r, {
        n: _r(vr(t.modulus)),
        e: _r(vr(a)),
      });
    return (
      "private" === e &&
        Object.assign(s, {
          d: _r(vr(t.privateExponent)),
          p: _r(vr(t.prime1)),
          q: _r(vr(t.prime2)),
          dp: _r(vr(t.exponent1)),
          dq: _r(vr(t.exponent2)),
          qi: _r(vr(t.coefficient)),
        }),
      s
    );
  }
  function Br(t, e, r) {
    return rr(function () {
      return Ar(zr(xr(t).body), e, r);
    });
  }
  function Cr(i) {
    if (Qe)
      return {
        update: function (n) {
          return {
            sign: function (e, t) {
              return f(this, void 0, void 0, function () {
                var r = this;
                return d(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        Br(e, "private", {
                          key_ops: ["sign"],
                          alg: i.replace("SHA-", "RS"),
                        }).then(function (e) {
                          return f(r, void 0, void 0, function () {
                            var r = this;
                            return d(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return [
                                    4,
                                    Qe.importKey(
                                      "jwk",
                                      e,
                                      {
                                        name: "RSASSA-PKCS1-v1_5",
                                        hash: { name: i },
                                      },
                                      !0,
                                      ["sign"]
                                    ).then(function (e) {
                                      return f(r, void 0, void 0, function () {
                                        return d(this, function (t) {
                                          switch (t.label) {
                                            case 0:
                                              return [
                                                4,
                                                Qe.sign(
                                                  {
                                                    name: "RSASSA-PKCS1-v1_5",
                                                    hash: { name: i },
                                                  },
                                                  e,
                                                  mr(n)
                                                )
                                                  .then(vr)
                                                  .then(cr),
                                              ];
                                            case 1:
                                              return [2, t.sent()];
                                          }
                                        });
                                      });
                                    }),
                                  ];
                                case 1:
                                  return [2, t.sent()];
                              }
                            });
                          });
                        }),
                      ];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            },
          };
        },
      };
    if (a && a.createSign) return a.createSign(i.replace("SHA-", "RSA-SHA"));
    throw new Error(Me);
  }
  function Nr(s) {
    return function (i, a) {
      return f(this, void 0, void 0, function () {
        var e, r, n;
        return d(this, function (t) {
          switch (t.label) {
            case 0:
              return t.trys.push([0, 3, , 4]), [4, Cr("SHA-" + s)];
            case 1:
              return (
                (e = t.sent()), (r = sr), [4, e.update(i).sign(a, "base64")]
              );
            case 2:
              return [2, r.apply(void 0, [t.sent()])];
            case 3:
              return (n = t.sent()), [2, Promise.reject(new Error(n.message))];
            case 4:
              return [2];
          }
        });
      });
    };
  }
  function Ir(o) {
    if (Qe)
      return {
        update: function (s) {
          return {
            verify: function (e, a, t) {
              return f(this, void 0, void 0, function () {
                var r = this;
                return d(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        Br(e, "public", {
                          key_ops: ["verify"],
                          alg: o.replace("SHA-", "RS"),
                        }).then(function (t) {
                          var e = t.kty,
                            n = t.n,
                            i = t.e;
                          return f(r, void 0, void 0, function () {
                            var r = this;
                            return d(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return [
                                    4,
                                    Qe.importKey(
                                      "jwk",
                                      { kty: e, n: n, e: i },
                                      {
                                        name: "RSASSA-PKCS1-v1_5",
                                        hash: { name: o },
                                      },
                                      !1,
                                      ["verify"]
                                    ).then(function (e) {
                                      return f(r, void 0, void 0, function () {
                                        return d(this, function (t) {
                                          switch (t.label) {
                                            case 0:
                                              return [
                                                4,
                                                Qe.verify(
                                                  "RSASSA-PKCS1-v1_5",
                                                  e,
                                                  mr(hr(a)),
                                                  mr(s)
                                                ),
                                              ];
                                            case 1:
                                              return [2, t.sent()];
                                          }
                                        });
                                      });
                                    }),
                                  ];
                                case 1:
                                  return [2, t.sent()];
                              }
                            });
                          });
                        }),
                      ];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            },
          };
        },
      };
    if (a && a.createVerify)
      return a.createVerify(o.replace("SHA-", "RSA-SHA"));
    throw new Error(Me);
  }
  function Rr(a) {
    return function (r, n, i) {
      return f(this, void 0, void 0, function () {
        var e;
        return d(this, function (t) {
          switch (t.label) {
            case 0:
              return t.trys.push([0, 3, , 4]), (n = or(n)), [4, Ir("SHA-" + a)];
            case 1:
              return [4, t.sent().update(r).verify(i, n, "base64")];
            case 2:
              return [2, t.sent()];
            case 3:
              return (e = t.sent()), [2, Promise.reject(new Error(e.message))];
            case 4:
              return [2];
          }
        });
      });
    };
  }
  function Or(i, a, s, o) {
    return f(this, void 0, void 0, function () {
      var e, r, n;
      return d(this, function (t) {
        switch (t.label) {
          case 0:
            if ("string" != typeof i || i.length < 4) throw new Error(Fe);
            if ("none" === (e = i.toLowerCase())) return [2, "" === s];
            if (
              ((r = e.slice(0, 2)),
              (n = parseInt(e.slice(2))),
              isNaN(n) || [256, 384, 512].indexOf(n) < 0)
            )
              throw new Error(Fe);
            switch (r) {
              case "rs":
                return [3, 1];
              case "hs":
                return [3, 3];
            }
            return [3, 5];
          case 1:
            return [4, Rr(n)(a, s, o)];
          case 2:
            return [2, t.sent()];
          case 3:
            return [4, Sr(n)(a, s, o)];
          case 4:
            return [2, t.sent()];
          case 5:
            throw new Error(Fe);
        }
      });
    });
  }
  function Tr(i, a, s) {
    return f(this, void 0, void 0, function () {
      var e, r, n;
      return d(this, function (t) {
        switch (t.label) {
          case 0:
            if ("string" != typeof i || i.length < 4) throw new Error(Fe);
            if ("none" === (e = i.toLowerCase())) return [2, ""];
            if (
              ((r = e.slice(0, 2)),
              (n = parseInt(e.slice(2))),
              isNaN(n) || [256, 384, 512].indexOf(n) < 0)
            )
              throw new Error(Fe);
            switch (r) {
              case "rs":
                return [3, 1];
              case "hs":
                return [3, 3];
            }
            return [3, 5];
          case 1:
            return [4, Nr(n)(a, s)];
          case 2:
            return [2, t.sent()];
          case 3:
            return [4, kr(n)(a, s)];
          case 4:
            return [2, t.sent()];
          case 5:
            throw new Error(Fe);
        }
      });
    });
  }
  function Ur(i, a) {
    return f(this, void 0, void 0, function () {
      var e, r, n;
      return d(this, function (t) {
        return (
          (e = fr(i)),
          (r = nr(hr(e.header))),
          (n = e.header + "." + e.payload),
          [
            2,
            rr(function () {
              return Or(r.alg, n, e.signature, a);
            }),
          ]
        );
      });
    });
  }
  var Zr = Ur;
  function Dr(t, e) {
    var r = this,
      n = fr(t),
      i = nr(hr(n.header)),
      a = n.header + "." + n.payload;
    return rr(function () {
      return f(r, void 0, void 0, function () {
        return d(this, function (t) {
          switch (t.label) {
            case 0:
              return [4, Tr(i.alg, a, e)];
            case 1:
              return [2, t.sent()];
          }
        });
      });
    });
  }
  var Hr = Dr;
  function jr(n, i, a) {
    return f(this, void 0, void 0, function () {
      var e, r;
      return d(this, function (t) {
        switch (t.label) {
          case 0:
            return (
              (e = lr(n)),
              a && (e.header.alg = a),
              [4, Dr((r = e).toString(), i)]
            );
          case 1:
            return (r.signature = t.sent()), [2, e.toString()];
        }
      });
    });
  }
  var Lr = jr;
  (t.webCrypto = $e),
    (t.webCryptoSubtle = Qe),
    (t.JwtSplit = tr),
    (t.JwtDecode = er),
    (t.tryPromise = rr),
    (t.s2J = nr),
    (t.J2s = ir),
    (t.b2s = ar),
    (t.b2bu = sr),
    (t.bu2b = or),
    (t.bu2s = hr),
    (t.isGzip = ur),
    (t.jwtDecode = lr),
    (t.jwtSplit = fr),
    (t.splitJwt = dr),
    (t.s2b = cr),
    (t.s2bu = _r),
    (t.s2zbu = gr),
    (t.unzip = pr),
    (t.zbu2s = wr),
    (t.zip = br),
    (t.s2AB = mr),
    (t.AB2s = vr),
    (t.createHmac = yr),
    (t.algHSsign = kr),
    (t.algHSverify = Sr),
    (t.s2pem = xr),
    (t.Asn1Tag = Er),
    (t.pem2asn1 = zr),
    (t.asn12jwk = Ar),
    (t.pem2jwk = Br),
    (t.createSign = Cr),
    (t.algRSsign = Nr),
    (t.createVerify = Ir),
    (t.algRSverify = Rr),
    (t.algVerify = Or),
    (t.algSign = Tr),
    (t.jwtVerify = Ur),
    (t.verifyJwt = Zr),
    (t.jwtSign = Dr),
    (t.signJwt = Hr),
    (t.jwtResign = jr),
    (t.resignJwt = Lr),
    (t.cryptoType = function () {
      return a ? a.type || "crypto-node" : "undefined";
    }),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
