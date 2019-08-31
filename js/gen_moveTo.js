!function(e) {
    var n = function() {
        var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
          , n = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        if (e * n <= 12e4)
            return !0;
        var c = window.screenX
          , r = window.screenY;
        return c + e <= 0 || r + n <= 0 || c >= window.screen.width || r >= window.screen.height
    }
      , c = function(c) {
        wzwschallenge = e.encrypt("rhrewrchb"),
        wzwschallengex = e.bs.encode("rhrewrchb"),
        encoderchars = e.encrypt(wzwschallenge) + e.encrypt(wzwschallengex);
        var t, h, o, d, i, a;
        for (o = c.length,
        h = 0,
        t = ""; h < o; ) {
            if (d = 255 & c.charCodeAt(h++),
            h == o) {
                t += encoderchars.charAt(d >> 2),
                t += encoderchars.charAt((3 & d) << 4),
                t += "==";
                break
            }
            if (i = c.charCodeAt(h++),
            h == o) {
                t += encoderchars.charAt(d >> 2),
                t += encoderchars.charAt((3 & d) << 4 | (240 & i) >> 4),
                t += encoderchars.charAt((15 & i) << 2),
                t += "=";
                break
            }
            a = c.charCodeAt(h++),
            t += encoderchars.charAt(d >> 2),
            3 & d,
            (3 & d) << 4,
            240 & i,
            (240 & i) >> 4,
            (3 & d) << 4 | (240 & i) >> 4,
            t += encoderchars.charAt((3 & d) << 4 | (240 & i) >> 4),
            t += encoderchars.charAt((15 & i) << 2 | (192 & a) >> 6),
            t += encoderchars.charAt(63 & a)
        }
        var w = 0;
        return n() || (w = r(wzwschallenge, wzwschallengex)),
        t + w
    }
      , r = function(e, n) {
        var c = e + n
          , r = 0
          , t = 0;
        for (t = 0; t < c.length; t++)
            r += c.charCodeAt(t);
        return r *= 245,
        r += 963863
    };
    e.extend({
        gen: function(n, c) {
            var r, t, h, o = (o = n += "").length, d = e.encrypt(n), i = e.encrypt(n) + c;
            for ((t = new Array)[0] = "ff8080815ed2f53b015f27c2b7b9783e",
            t[1] = "402880bd5c76166f015c9041698e5099",
            t[2] = "402880bd5c76166f015c903ee811504e",
            r = 0; r < t.length; ++r)
                h = t[r];
            var a = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
              , w = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            return a * w <= 12e4 ? e.encrypt(d + i + h).toUpperCase() : e.encrypt(d + i + h + o).toUpperCase()
        },
        moveTo: function(n) {
            return e.encrypt(c(n))
        },
    })
}(jQuery);
