var encode_n = "=",
    encode_h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var encode_t = function (r, t) {
        var e = encode_h.indexOf(r.charAt(t));
        if (-1 === e) throw "Cannot decode encrypt";
        return e
    },
    encode_e = function (r, t) {
        var e = r.charCodeAt(t);
        if (e > 255) throw "INVALID_CHARACTER_ERR: DOM Exception 5";
        return e
    },
    encode = function (r) {
        var t, a, c = [],
            o = (r = String(r)).length - r.length % 3;
        if (0 === r.length) return r;
        for (t = 0; t < o; t += 3) a = encode_e(r, t) << 16 | encode_e(r, t + 1) << 8 | encode_e(r, t + 2), c.push(encode_h.charAt(a >> 18)), c.push(encode_h.charAt(a >> 12 & 63)), c.push(encode_h.charAt(a >> 6 & 63)), c.push(encode_h.charAt(63 & a));
        switch (r.length - o) {
            case 1:
                a = encode_e(r, t) << 16, c.push(encode_h.charAt(a >> 18) + encode_h.charAt(a >> 12 & 63) + encode_n + encode_n);
                break;
            case 2:
                a = encode_e(r, t) << 16 | encode_e(r, t + 1) << 8, c.push(encode_h.charAt(a >> 18) + encode_h.charAt(a >> 12 & 63) + encode_h.charAt(a >> 6 & 63) + encode_n)
        }
        return c.join("")
    };