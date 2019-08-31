import execjs

def encode(r):
    js=r'''
        var n = "=",
        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var t=function(r, t) {
        var e = h.indexOf(r.charAt(t));
        if (-1 === e) throw "Cannot decode encrypt";
        return e
    },
    e = function(r, t) {
        var e = r.charCodeAt(t);
        if (e > 255) throw "INVALID_CHARACTER_ERR: DOM Exception 5";
        return e
    },
    encode = function (r) {
        var t, a, c = [],
            o = (r = String(r)).length - r.length % 3;
        if (0 === r.length) return r;
        for (t = 0; t < o; t += 3) a = e(r, t) << 16 | e(r, t + 1) << 8 | e(r, t + 2), c.push(h.charAt(a >> 18)), c.push(h.charAt(a >> 12 & 63)), c.push(h.charAt(a >> 6 & 63)), c.push(h.charAt(63 & a));
        switch (r.length - o) {
            case 1:
                a = e(r, t) << 16, c.push(h.charAt(a >> 18) + h.charAt(a >> 12 & 63) + n + n);
                break;
            case 2:
                a = e(r, t) << 16 | e(r, t + 1) << 8, c.push(h.charAt(a >> 18) + h.charAt(a >> 12 & 63) + h.charAt(a >> 6 & 63) + n)
        }
        return c.join("")
    };
    '''
    ctx = execjs.compile(js)
    return ctx.call("encode",r)

if __name__=="__main__":
    print(encode("rhrewrchb"))