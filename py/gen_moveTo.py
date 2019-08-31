import execjs
from encode import encode
from encrypt import encrypt

js = r'''
     var c = function (c) {
            wzwschallenge = "bba95d42cb1f78da172b87b909af0b3c", wzwschallengex = "cmhyZXdyY2hi", encoderchars = "8c7ff3d6144ced934021f6c1268bbe65315206d77ee9621c7e3aaa1df14c96fe";
            var t, h, o, d, i, a;
            for (o = c.length, h = 0, t = ""; h < o;) {
                if (d = 255 & c.charCodeAt(h++), h == o) {
                    t += encoderchars.charAt(d >> 2), t += encoderchars.charAt((3 & d) << 4), t += "==";
                    break
                }
                if (i = c.charCodeAt(h++), h == o) {
                    t += encoderchars.charAt(d >> 2), t += encoderchars.charAt((3 & d) << 4 | (240 & i) >> 4), t += encoderchars.charAt((15 & i) << 2), t += "=";
                    break
                }
                a = c.charCodeAt(h++), t += encoderchars.charAt(d >> 2), 3 & d, (3 & d) << 4, 240 & i, (240 & i) >> 4, (3 & d) << 4 | (240 & i) >> 4, t += encoderchars.charAt((3 & d) << 4 | (240 & i) >> 4), t += encoderchars.charAt((15 & i) << 2 | (192 & a) >> 6), t += encoderchars.charAt(63 & a)
            }
            var w = 0;
            return false || (w = r(wzwschallenge, wzwschallengex)), t + w
        },
        r = function (e, n) {
            var c = e + n,
                r = 0,
                t = 0;
            for (t = 0; t < c.length; t++) r += c.charCodeAt(t);
            return r *= 245, r += 963863
        };
    '''
ctx = execjs.compile(js)


def gen(n, c):
    d = encrypt(n)
    i = encrypt(n)+c
    h = "402880bd5c76166f015c903ee811504e"
    return encrypt(d+i+h).upper()
    

def gen_s(n, c):
    o = str(len(n))
    d = encrypt(n)
    i = encrypt(n)+c
    h = "402880bd5c76166f015c903ee811504e"
    return encrypt(d + i + h + o).upper()


def moveTo(n):
    return encrypt(ctx.call("c", n))


if __name__ == "__main__":
    print(moveTo("05EEA095BA29535C6CEDC47059A771F7"))
