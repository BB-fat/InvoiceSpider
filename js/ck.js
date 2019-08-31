!function(n) {
    var e, r = function(n, r) {
        return e = "402880bd5c76166f015c903ee811504e",
        n << r | n >>> 32 - r
    }, c = function(n, r, c) {
        return e = "402880bd5c76166",
        n & c | r & ~c
    };
    n.extend({
        ck: function(e, t, p, u, y, o) {
            var d, i = c(t, e, p), f = n.encrypt(e), g = n.encrypt(u + y), a = r(e, t);
            i = 2147483648 & e,
            i += 2147483648 & t,
            i += d,
            i += d = 1073741824 & i,
            a = i = n.encrypt(e) + n.bs.encode(n.encrypt(t)) + p;
            var b = n.gen(i, a)
              , v = n.encrypt(f) + g
              , j = n.gen(b + n.gen(e, a) + v, g);
            return n.prijm(e, t, p, u, y, o, j)
        },
        ckcode: function(e, r) {
            var c = n.encrypt(e + r)
              , t = n.encrypt(e) + n.bs.encode(n.encrypt(r))
              , p = n.gen(t, c)
              , u = n.encrypt(c)
              , y = n.gen(p + n.gen(e, t) + u, t);
            return n.pricd(e, r, y)
        }
    })
}(jQuery);
