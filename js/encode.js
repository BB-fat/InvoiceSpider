jQuery.bs = function(r) {
    function t(r, t) {
        var e = h.indexOf(r.charAt(t));
        if (-1 === e)
            throw "Cannot decode encrypt";
        return e
    }
    function e(r, t) {
        var e = r.charCodeAt(t);
        if (e > 255)
            throw "INVALID_CHARACTER_ERR: DOM Exception 5";
        return e
    }
    var n = "="
      , h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    return {
        decode: function(r) {
            var e, h, a = 0, c = r.length, o = [];
            if (r = String(r),
            0 === c)
                return r;
            if (c % 4 != 0)
                throw "Cannot decode base";
            for (r.charAt(c - 1) === n && (a = 1,
            r.charAt(c - 2) === n && (a = 2),
            c -= 4),
            e = 0; e < c; e += 4)
                h = t(r, e) << 18 | t(r, e + 1) << 12 | t(r, e + 2) << 6 | t(r, e + 3),
                o.push(String.fromCharCode(h >> 16, h >> 8 & 255, 255 & h));
            switch (a) {
            case 1:
                h = t(r, e) << 18 | t(r, e + 1) << 12 | t(r, e + 2) << 6,
                o.push(String.fromCharCode(h >> 16, h >> 8 & 255));
                break;
            case 2:
                h = t(r, e) << 18 | t(r, e + 1) << 12,
                o.push(String.fromCharCode(h >> 16))
            }
            return o.join("")
        },
        encode: function(r) {
            if (1 !== arguments.length)
                throw "SyntaxError: exactly one argument required";
            var t, a, c = [], o = (r = String(r)).length - r.length % 3;
            if (0 === r.length)
                return r;
            for (t = 0; t < o; t += 3)
                a = e(r, t) << 16 | e(r, t + 1) << 8 | e(r, t + 2),
                c.push(h.charAt(a >> 18)),
                c.push(h.charAt(a >> 12 & 63)),
                c.push(h.charAt(a >> 6 & 63)),
                c.push(h.charAt(63 & a));
            switch (r.length - o) {
            case 1:
                a = e(r, t) << 16,
                c.push(h.charAt(a >> 18) + h.charAt(a >> 12 & 63) + n + n);
                break;
            case 2:
                a = e(r, t) << 16 | e(r, t + 1) << 8,
                c.push(h.charAt(a >> 18) + h.charAt(a >> 12 & 63) + h.charAt(a >> 6 & 63) + n)
            }
            return c.join("")
        },
        VERSION: "1.0"
    }
}(jQuery);
