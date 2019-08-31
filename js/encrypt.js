!function(n) {
    var r = function(n, r) {
        return n << r | n >>> 32 - r
    }
      , t = function(n, r) {
        var t, e, u, o, i;
        return u = 2147483648 & n,
        o = 2147483648 & r,
        t = 1073741824 & n,
        e = 1073741824 & r,
        i = (1073741823 & n) + (1073741823 & r),
        t & e ? 2147483648 ^ i ^ u ^ o : t | e ? 1073741824 & i ? 3221225472 ^ i ^ u ^ o : 1073741824 ^ i ^ u ^ o : i ^ u ^ o
    }
      , e = function(n, r, t) {
        return n & r | ~n & t
    }
      , u = function(n, r, t) {
        return n & t | r & ~t
    }
      , o = function(n, r, t) {
        return n ^ r ^ t
    }
      , i = function(n, r, t) {
        return r ^ (n | ~t)
    }
      , f = function(n, u, o, i, f, c, g) {
        return n = t(n, t(t(e(u, o, i), f), g)),
        t(r(n, c), u)
    }
      , c = function(n, e, o, i, f, c, g) {
        return n = t(n, t(t(u(e, o, i), f), g)),
        t(r(n, c), e)
    }
      , g = function(n, e, u, i, f, c, g) {
        return n = t(n, t(t(o(e, u, i), f), g)),
        t(r(n, c), e)
    }
      , a = function(n, e, u, o, f, c, g) {
        return n = t(n, t(t(i(e, u, o), f), g)),
        t(r(n, c), e)
    }
      , h = function(n) {
        for (var r, t = n.length, e = t + 8, u = 16 * ((e - e % 64) / 64 + 1), o = Array(u - 1), i = 0, f = 0; f < t; )
            i = f % 4 * 8,
            o[r = (f - f % 4) / 4] = o[r] | n.charCodeAt(f) << i,
            f++;
        return r = (f - f % 4) / 4,
        i = f % 4 * 8,
        o[r] = o[r] | 128 << i,
        o[u - 2] = t << 3,
        o[u - 1] = t >>> 29,
        o
    }
      , l = function(n) {
        var r, t = "", e = "";
        for (r = 0; r <= 3; r++)
            t += (e = "0" + (n >>> 8 * r & 255).toString(16)).substr(e.length - 2, 2);
        return t
    }
      , C = function(n) {
        n = n.replace(/\x0d\x0a/g, "\n");
        for (var r = "", t = 0; t < n.length; t++) {
            var e = n.charCodeAt(t);
            e < 128 ? r += String.fromCharCode(e) : e > 127 && e < 2048 ? (r += String.fromCharCode(e >> 6 | 192),
            r += String.fromCharCode(63 & e | 128)) : (r += String.fromCharCode(e >> 12 | 224),
            r += String.fromCharCode(e >> 6 & 63 | 128),
            r += String.fromCharCode(63 & e | 128))
        }
        return r
    };
    jQuery.extend({
        xx: function(n) {
            return (n += "").length >= 12 ? n.substring(0, 10) : n.substring(0, 2)
        },
        yy: function(n) {
            return (n += "").length + 5 * n.length
        },
        cc: function(n) {
            return (n += "").length >= 20 ? n.substring(0, 12) : n.substring(0, 3)
        },
        ll: function(n) {
            return n.length + 3 * n.length
        },
        slave: function(n) {
            return n.length + 6 * n.length
        },
        encrypt: function(n) {
            var r, e, u, o, i, s, d, v, S, m = Array();
            for (n = C(n),
            m = h(n),
            s = 1732584193,
            d = 4023233417,
            v = 2562383102,
            S = 271733878,
            r = 0; r < m.length; r += 16)
                e = s,
                u = d,
                o = v,
                i = S,
                s = f(s, d, v, S, m[r + 0], 7, 3614090360),
                S = f(S, s, d, v, m[r + 1], 12, 3905402710),
                v = f(v, S, s, d, m[r + 2], 17, 606105819),
                d = f(d, v, S, s, m[r + 3], 22, 3250441966),
                s = f(s, d, v, S, m[r + 4], 7, 4118548399),
                S = f(S, s, d, v, m[r + 5], 12, 1200080426),
                v = f(v, S, s, d, m[r + 6], 17, 2821735955),
                d = f(d, v, S, s, m[r + 7], 22, 4249261313),
                s = f(s, d, v, S, m[r + 8], 7, 1770035416),
                S = f(S, s, d, v, m[r + 9], 12, 2336552879),
                v = f(v, S, s, d, m[r + 10], 17, 4294925233),
                d = f(d, v, S, s, m[r + 11], 22, 2304563134),
                s = f(s, d, v, S, m[r + 12], 7, 1804603682),
                S = f(S, s, d, v, m[r + 13], 12, 4254626195),
                v = f(v, S, s, d, m[r + 14], 17, 2792965006),
                d = f(d, v, S, s, m[r + 15], 22, 1236535329),
                s = c(s, d, v, S, m[r + 1], 5, 4129170786),
                S = c(S, s, d, v, m[r + 6], 9, 3225465664),
                v = c(v, S, s, d, m[r + 11], 14, 643717713),
                d = c(d, v, S, s, m[r + 0], 20, 3921069994),
                s = c(s, d, v, S, m[r + 5], 5, 3593408605),
                S = c(S, s, d, v, m[r + 10], 9, 38016083),
                v = c(v, S, s, d, m[r + 15], 14, 3634488961),
                d = c(d, v, S, s, m[r + 4], 20, 3889429448),
                s = c(s, d, v, S, m[r + 9], 5, 568446438),
                S = c(S, s, d, v, m[r + 14], 9, 3275163606),
                v = c(v, S, s, d, m[r + 3], 14, 4107603335),
                d = c(d, v, S, s, m[r + 8], 20, 1163531501),
                s = c(s, d, v, S, m[r + 13], 5, 2850285829),
                S = c(S, s, d, v, m[r + 2], 9, 4243563512),
                v = c(v, S, s, d, m[r + 7], 14, 1735328473),
                d = c(d, v, S, s, m[r + 12], 20, 2368359562),
                s = g(s, d, v, S, m[r + 5], 4, 4294588738),
                S = g(S, s, d, v, m[r + 8], 11, 2272392833),
                v = g(v, S, s, d, m[r + 11], 16, 1839030562),
                d = g(d, v, S, s, m[r + 14], 23, 4259657740),
                s = g(s, d, v, S, m[r + 1], 4, 2763975236),
                S = g(S, s, d, v, m[r + 4], 11, 1272893353),
                v = g(v, S, s, d, m[r + 7], 16, 4139469664),
                d = g(d, v, S, s, m[r + 10], 23, 3200236656),
                s = g(s, d, v, S, m[r + 13], 4, 681279174),
                S = g(S, s, d, v, m[r + 0], 11, 3936430074),
                v = g(v, S, s, d, m[r + 3], 16, 3572445317),
                d = g(d, v, S, s, m[r + 6], 23, 76029189),
                s = g(s, d, v, S, m[r + 9], 4, 3654602809),
                S = g(S, s, d, v, m[r + 12], 11, 3873151461),
                v = g(v, S, s, d, m[r + 15], 16, 530742520),
                d = g(d, v, S, s, m[r + 2], 23, 3299628645),
                s = a(s, d, v, S, m[r + 0], 6, 4096336452),
                S = a(S, s, d, v, m[r + 7], 10, 1126891415),
                v = a(v, S, s, d, m[r + 14], 15, 2878612391),
                d = a(d, v, S, s, m[r + 5], 21, 4237533241),
                s = a(s, d, v, S, m[r + 12], 6, 1700485571),
                S = a(S, s, d, v, m[r + 3], 10, 2399980690),
                v = a(v, S, s, d, m[r + 10], 15, 4293915773),
                d = a(d, v, S, s, m[r + 1], 21, 2240044497),
                s = a(s, d, v, S, m[r + 8], 6, 1873313359),
                S = a(S, s, d, v, m[r + 15], 10, 4264355552),
                v = a(v, S, s, d, m[r + 6], 15, 2734768916),
                d = a(d, v, S, s, m[r + 13], 21, 1309151649),
                s = a(s, d, v, S, m[r + 4], 6, 4149444226),
                S = a(S, s, d, v, m[r + 11], 10, 3174756917),
                v = a(v, S, s, d, m[r + 2], 15, 718787259),
                d = a(d, v, S, s, m[r + 9], 21, 3951481745),
                s = t(s, e),
                d = t(d, u),
                v = t(v, o),
                S = t(S, i);
            return (l(s) + l(d) + l(v) + l(S)).toLowerCase()
        }
    })
}();
