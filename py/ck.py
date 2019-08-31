import execjs
from encode import encode
from encrypt import encrypt
from gen_moveTo import *
from pricd_prijm import *

js = '''
        var e, r = function (n, r) {
            return e = "402880bd5c76166f015c903ee811504e", n << r | n >>> 32 - r
        },
        c = function (n, r, c) {
            return e = "402880bd5c76166", n & c | r & ~c
        };
'''
ctx = execjs.compile(js)

def ck(e, t, p, u, y, o):
    f = encrypt(e)
    g = encrypt(u + y)
    a = i = encrypt(e) + encode(encrypt(t)) + p
    b = gen_s(i, a)
    v = encrypt(f) + g
    j = gen_s(b + gen_s(e, a) + v, g)
    return prijm(e, t, p, u, y, o, j)

def ckcode(e,r):
    c = encrypt(e + r)
    t = encrypt(e) + encode(encrypt(r))
    p = gen(t, c)
    u = encrypt(c)
    y = gen(p + gen(e, t) + u, t)
    return pricd(e, r, y)

if __name__ == "__main__":
    print(ck('011001900311','42558341','20190829','643785','2019-08-30 17:04:09','qrna'))
