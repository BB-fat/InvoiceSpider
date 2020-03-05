import execjs
from scripts.encrypt import encrypt
from scripts.gen_moveTo import moveTo

js = r'''
    var o = function (e) {
            return 12 == e.length ? dqdm = e.substring(1, 5) : dqdm = e.substring(0, 4), "2102" != dqdm && "3302" != dqdm && "3502" != dqdm && "3702" != dqdm && "4403" != dqdm && (dqdm = dqdm.substring(0, 2) + "00"), dqdm
        };
'''
ctx = execjs.compile(js)


def p(e):
    return len(e)+5*len(e)


def r(e):
    if len(e) >= 12:
        return e[0:10]
    else:
        return e[0:2]


def pricd(a, t, s):
    c = ctx.call("o", a)
    if c == "1100":
        s = encrypt(a + moveTo(t) + s).upper()
        s = encrypt(moveTo(s) + a).upper()

    elif c == "1200":
        s = encrypt(a + moveTo(a + t) + s).upper()

    elif c == "1300":
        s = encrypt(a + moveTo(a[2:3] + t) + s).upper()
        s = encrypt(moveTo(s) + a + t).upper()

    elif c == "1400":
        s = encrypt(a + moveTo(t) + s).upper()

    elif c == "1500":
        s = encrypt(t + moveTo(t + s) + len(s)).upper()

    elif c == "2100":
        s = encrypt(s + moveTo(c) + s.lower()).upper()

    elif c == "2102":
        s = encrypt(moveTo(a + t) + moveTo(a) + s).upper()

    elif c == "2200":
        s = encrypt(len(a) + len(t) + moveTo(s) + s).upper()

    elif c == "2300":
        s = encrypt(encrypt(a) + moveTo(c) + moveTo(s[10, 15])).upper()
        s = encrypt(moveTo(s) + t + c).upper()

    elif c == "3100":
        s = encrypt(t + moveTo(a) + s + a).upper()

    elif c == "3200":
        s = encrypt(moveTo(c) + moveTo(c) + s).upper()

    elif c == "3300":
        s = encrypt(r(a) + moveTo(c) + s).upper()

    elif c == "3302":
        s = encrypt(moveTo(a) + moveTo(r(c)) + s).upper()

    elif c == "3400":
        s = encrypt(a + r(moveTo(c)) + r(s)).upper()
        s = encrypt(moveTo(s) + t + r(s)).upper()

    elif c == "3500":
        s = encrypt(r(a) + moveTo(c) + s).upper()

    elif c == "3502":
        s = encrypt(r(a + moveTo(c)) + moveTo(s)).upper()

    elif c == "3600":
        s = encrypt(p(a) + moveTo(s) + p(s)).upper()

    elif c == "3700":
        s = encrypt(p(a) + moveTo(c) + r(s + a)).upper()

    elif c == "3702":
        s = encrypt(moveTo(a + moveTo(c)) + s).upper()

    elif c == "4100":
        s = encrypt(a + moveTo(moveTo(c) + s) + p(t)).upper()

    elif c == "4200":
        s = encrypt(
            t + moveTo(moveTo(r(s)) + s) + r(t)).upper()

    elif c == "4300":
        s = encrypt(moveTo(a) + moveTo(c) + s + p(s)).upper()

    elif c == "4400":
        s = encrypt(encrypt(a + moveTo(c)) + moveTo(s)).upper()

    elif c == "4403":
        s = encrypt(moveTo(a + moveTo(s)) + encrypt(s)).upper()

    elif c == "4500":
        s = encrypt(moveTo(moveTo(a) + moveTo(c) + s)).upper()
        s = encrypt(moveTo(s) + t + moveTo(c)).upper()

    elif c == "4600":
        s = encrypt(moveTo(r(a) + p(t)) + moveTo(a) + s).upper()

    elif c == "5000":
        s = encrypt(moveTo(a) + p(a) + moveTo(t) + s).upper()

    elif c == "5100":
        s = encrypt(p(a) + moveTo(s + a) + r(s)).upper()

    elif c == "5200":
        s = encrypt(moveTo(s) + moveTo(s + t) + s).upper()

    elif c == "5300":
        s = encrypt(moveTo(a + moveTo(t)) + s).upper()

    elif c == "5400":
        s = encrypt(p(moveTo(a)) + moveTo(c) + s).upper()

    elif c == "6100":
        s = encrypt(r(a + moveTo(c)) + moveTo(s) + r(a + t)).upper()

    elif c == "6200":
        s = encrypt(moveTo(a + moveTo(a + t + s)) + s).upper()

    elif c == "6300":
        s = encrypt(moveTo(moveTo(r(a) + c)) + a + p(a + t)).upper()
        s = encrypt(moveTo(s) + t + a + p(a + t)).upper()

    elif c == "6400":
        s = encrypt(moveTo(a) + s + moveTo(c + p(a)) + s).upper()

    elif c == "6500":
        s = encrypt(moveTo(t) + moveTo(moveTo(a + s)) + s).upper()
    return s


def prijm(r, p, a, t, s, c, m):
    n = ctx.call("o", r)
    if n == "1100":
        m = encrypt(r + moveTo(m)).upper()
        m = encrypt(r + moveTo(m) + r).upper()

    elif n == "1200":
        m = encrypt(r + moveTo(m) + p).upper()

    elif n == "1300":
        m = encrypt(a + moveTo(m) + moveTo(r)).upper()

    elif n == "1400":
        m = encrypt(moveTo(m) + s).upper()
        m = encrypt(moveTo(m) + s + m).upper()

    elif n == "1500":
        m = encrypt(moveTo(m) + moveTo(r) + p).upper()

    elif n == "2100":
        m = encrypt(r + p + m).upper()

    elif n == "2102":
        m = encrypt(r + moveTo(p) + m).upper()

    elif n == "2200":
        m = encrypt(r + m + moveTo(m)).upper()

    elif n == "2300":
        m = encrypt(s + m).upper()

    elif n == "3100":
        m = encrypt(moveTo(m)).upper()
        m = encrypt(moveTo(m) + p).upper()

    elif n == "3200":
        m = encrypt(r + m).upper()

    elif n == "3300":
        m = encrypt(p + m).upper()

    elif n == "3302":
        m = encrypt(moveTo(p) + m).upper()

    elif n == "3400":
        m = encrypt(r + moveTo(a) + m).upper()

    elif n == "3500":
        m = encrypt(n + moveTo(a) + m).upper()

    elif n == "3502":
        m = encrypt(n + moveTo(m) + r).upper()

    elif n == "3600":
        m = encrypt(encrypt(m) + p + a).upper()

    elif n == "3700":
        m = encrypt(m + moveTo(n) + r).upper()
        m = encrypt(moveTo(m) + n).upper()

    elif n == "3702":
        m = encrypt(encrypt(p) + moveTo(m) + r).upper()

    elif n == "4100":
        m = encrypt(moveTo(m) + moveTo(r) + m).upper()

    elif n == "4200":
        m = encrypt(a + moveTo(a) + m).upper()

    elif n == "4300":
        m = encrypt(moveTo(a) + m + p).upper()

    elif n == "4400":
        m = encrypt(moveTo(r) + moveTo(s) + m).upper()

    elif n == "4403":
        m = encrypt(n + moveTo(m) + m).upper()

    elif n == "4500":
        m = encrypt(n + moveTo(r) + m + a).upper()

    elif n == "4600":
        m = encrypt(p + moveTo(r) + m + a).upper()

    elif n == "5000":
        m = encrypt(r + moveTo(r) + r + m).upper()

    elif n == "5100":
        m = encrypt(a + moveTo(r) + p + m).upper()

    elif n == "5200":
        m = encrypt(t + moveTo(r) + m).upper()

    elif n == "5300":
        m = encrypt(a + moveTo(r) + m).upper()
        m = encrypt(moveTo(m) + r).upper()

    elif n == "5400":
        m = encrypt(n + moveTo(r) + m).upper()

    elif n == "6100":
        m = encrypt(n + m + moveTo(p) + moveTo(r)).upper()

    elif n == "6200":
        m = encrypt(a + moveTo(p) + m).upper()

    elif n == "6300":
        m = encrypt(r + moveTo(n) + m).upper()

    elif n == "6400":
        m = encrypt(p + moveTo(s) + m).upper()

    elif n == "6500":
        m = encrypt(t + moveTo(m) + m).upper()
    return m


if __name__ == "__main__":
    print(prijm("011001900311", "26540678", "20190708", "316342",
                "2019-08-30 14:29:48", "ek", "05EEA095BA29535C6CEDC47059A771F7"))
