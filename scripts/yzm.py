#!/usr/bin/env python
import time
import random
from scripts.getSwjg import *
from scripts.ck import *
import requests
import json
import execjs


def showTime():
    t = time.time()
    return str(int(t * 1000))


js = r'''
function getReversal(_0x15a2c8) {
    var _0x410f05 = {
        'RINJc': function (_0x1c89f7, _0xba0250) {
            return _0x1c89f7(_0xba0250);
        },
        'QzvPa': function (_0x4a2fab, _0x3a933f) {
            return _0x4a2fab >= _0x3a933f;
        },
        'lQVHd': function (_0x45a2ba, _0x9adbae) {
            return _0x45a2ba <= _0x9adbae;
        },
        'NHzrj': function (_0x2c5aae, _0x1e5381) {
            return _0x2c5aae <= _0x1e5381;
        },
        'sgDgO': 'blsPd',
        'azxgq': function (_0xa25115, _0xbbf048) {
            return _0xa25115 >= _0xbbf048;
        },
        'Rtjzd': 'KUYlA',
        'BGcwf': 'SqWoN',
        'Jsbtg': function (_0x330161, _0x379757) {
            return _0x330161 - _0x379757;
        },
        'BUcpi': function (_0x3454ab, _0x10a8e4) {
            return _0x3454ab + _0x10a8e4;
        },
        'oGZDs': function (_0x48a59b, _0xcd92cc) {
            return _0x48a59b - _0xcd92cc;
        },
        'ghmqF': function (_0x2c7d8f, _0x15a6c1) {
            return _0x2c7d8f - _0x15a6c1;
        }
    };
    var _0x3621c9 = _0x15a2c8['charCodeAt']();
    if (_0x410f05['QzvPa'](_0x3621c9, 0x41) && _0x410f05['lQVHd'](_0x3621c9, 0x5a) || _0x410f05['QzvPa'](_0x3621c9, 0x61) && _0x410f05['NHzrj'](_0x3621c9, 0x7a) || _0x410f05['QzvPa'](_0x3621c9, 0x30) && _0x410f05['NHzrj'](_0x3621c9, 0x39)) {
        if (_0x410f05['sgDgO'] === _0x410f05['sgDgO']) {
            if (_0x410f05['azxgq'](_0x3621c9, 0x41) && _0x410f05['NHzrj'](_0x3621c9, 0x5a)) {
                if (_0x410f05['Rtjzd'] === _0x410f05['BGcwf']) {
                    return _0x410f05['RINJc'](decode, this);
                } else {
                    _0x15a2c8 = String['fromCharCode'](_0x410f05['Jsbtg'](_0x410f05['BUcpi'](0x41, 0x5a), _0x3621c9));
                }
            } else if (_0x410f05['azxgq'](_0x3621c9, 0x61) && _0x410f05['NHzrj'](_0x3621c9, 0x7a)) {
                _0x15a2c8 = String['fromCharCode'](_0x410f05['oGZDs'](0x61 + 0x7a, _0x3621c9));
            } else {
                _0x15a2c8 = String['fromCharCode'](_0x410f05['ghmqF'](0x30 + 0x39, _0x3621c9));
            }
        } else {
            var _0x13f95a = fn['apply'](context, arguments);
            fn = null;
            return _0x13f95a;
        }
    }
    return _0x15a2c8;
}

function replaceStr(_0x3b7887, _0x323e16) {
    var _0x4a07d9 = {
        'Mlddy': function (_0x2b3285, _0x52f84d) {
            return _0x2b3285(_0x52f84d);
        },
        'zgHSX': function (_0x5c286c, _0x16f477) {
            return _0x5c286c(_0x16f477);
        },
        'fWAyx': function (_0x18112f, _0x2e0e45) {
            return _0x18112f === _0x2e0e45;
        },
        'ePhbo': '[object Uint8Array]',
        'NUEcf': 'base64',
        'QiosY': function (_0x8ebffe, _0x2fff1f) {
            return _0x8ebffe(_0x2fff1f);
        },
        'mxtNb': function (_0x68e80, _0x23224b) {
            return _0x68e80(_0x23224b);
        },
        'eDCiV': function (_0x1bf466, _0x239279) {
            return _0x1bf466 > _0x239279;
        },
        'Pjqvi': function (_0x47301c, _0x52aa99) {
            return _0x47301c + _0x52aa99;
        },
        'TkqbD': function (_0x59754a, _0xd2bf08) {
            return _0x59754a + _0xd2bf08;
        },
        'eGKuv': function (_0x59b927, _0x3bce91) {
            return _0x59b927 + _0x3bce91;
        },
        'GIFCQ': function (_0x1fa716, _0x5d1f81) {
            return _0x1fa716 + _0x5d1f81;
        },
        'nyCRP': function (_0x532ba4, _0x302757) {
            return _0x532ba4(_0x302757);
        },
        'EOLDF': function (_0x108676, _0x5417e6) {
            return _0x108676(_0x5417e6);
        },
        'zlvsv': function (_0x7d7f09, _0x35ac0e) {
            return _0x7d7f09 % _0x35ac0e;
        },
        'HwOpy': function (_0x271fc6, _0x1bbd95) {
            return _0x271fc6 !== _0x1bbd95;
        },
        'OiANM': 'qFQfS',
        'doheM': function (_0xe0ec2a, _0x36fefb) {
            return _0xe0ec2a == _0x36fefb;
        },
        'JtEYx': function (_0x14ba89, _0x3ea536) {
            return _0x14ba89 % _0x3ea536;
        },
        'BNutn': 'wOiUY'
    };
    var _0x3450d8 = 0x1;
    if (_0x4a07d9['eDCiV'](_0x323e16['length'], 0xd)) {
        _0x3450d8 = _0x4a07d9['Pjqvi'](_0x4a07d9['TkqbD'](_0x4a07d9['mxtNb'](Number, _0x323e16['charAt'](0x6)) + Number(_0x323e16['charAt'](0x9)), _0x4a07d9['mxtNb'](Number, _0x323e16['charAt'](0xc))), _0x4a07d9['mxtNb'](Number, _0x323e16['charAt'](0xf))) + Number(_0x323e16['charAt'](0x12));
    } else {
        _0x3450d8 = _0x4a07d9['eGKuv'](_0x4a07d9['eGKuv'](_0x4a07d9['GIFCQ'](_0x4a07d9['GIFCQ'](_0x4a07d9['nyCRP'](Number, _0x323e16['charAt'](0x1)), Number(_0x323e16['charAt'](0x4))), _0x4a07d9['EOLDF'](Number, _0x323e16['charAt'](0x5))), Number(_0x323e16['charAt'](0x8))), _0x4a07d9['EOLDF'](Number, _0x323e16['charAt'](0xa)));
    }
    _0x3450d8 = _0x4a07d9['zlvsv'](_0x3450d8, 0xa);
    switch (_0x3450d8) {
        case 0x0:
            _0x3450d8 = 0xa;
            break;
        case 0x1:
            _0x3450d8 = 0x9;
            break;
        case 0x2:
            _0x3450d8 = 0x8;
            break;
        case 0x3:
            _0x3450d8 = 0x7;
            break;
        case 0x4:
            _0x3450d8 = 0x6;
            break;
    }
    var _0xb7606b = _0x3b7887['split']('');
    var _0x541f97 = '';
    for (var _0x4f3ab4 = 0x0; _0x4f3ab4 < _0xb7606b['length']; _0x4f3ab4++) {
        if (_0x4a07d9['HwOpy'](_0x4a07d9['OiANM'], 'qFQfS')) {
            return _0x4a07d9['Mlddy'](btou, _0x4a07d9['zgHSX'](_atob, a));
        } else {
            if (_0x4a07d9['doheM'](_0x4a07d9['JtEYx'](_0x4f3ab4, _0x3450d8), 0x0)) {
                _0x541f97 += getReversal(_0xb7606b[_0x4f3ab4]);
            } else {
                if (_0x4a07d9['HwOpy']('wOiUY', _0x4a07d9['BNutn'])) {
                    var _0x30f2a3 = _0x4a07d9['fWAyx'](Object['prototype']['toString']['call'](u), _0x4a07d9['ePhbo']);
                    return _0x30f2a3 ? u['toString'](_0x4a07d9['NUEcf']) : _0x4a07d9['QiosY'](btoa, _0x4a07d9['mxtNb'](utob, _0x4a07d9['mxtNb'](String, u)));
                } else {
                    _0x541f97 += _0xb7606b[_0x4f3ab4];
                }
            }
        }
    }
    return _0x541f97;
}

function Base64() {

    // private property
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    // public method for encoding
    this.encode = function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = _utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output = output +
                _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +
                _keyStr.charAt(enc3) + _keyStr.charAt(enc4);
        }
        return output;
    }

    // public method for decoding
    this.decode = function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = _keyStr.indexOf(input.charAt(i++));
            enc2 = _keyStr.indexOf(input.charAt(i++));
            enc3 = _keyStr.indexOf(input.charAt(i++));
            enc4 = _keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = _utf8_decode(output);
        return output;
    }

    // private method for UTF-8 encoding
    _utf8_encode = function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }
        return utftext;
    }

    // private method for UTF-8 decoding
    _utf8_decode = function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;
        while (i < utftext.length) {
            c = utftext.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

function decryptData(data, nowtime) {
    var b = new Base64();
    data = replaceStr(data, nowtime);
    return b.decode(data);
}
'''


def getYzmXx(VVV: str, fpdm: str, fphmyzm: str):
    '''
    VVV:系统版本号
    fpdm：发票代码
    fphmyzm：发票号码
    '''
    swjginfo = getSwjg(fpdm, 0)
    url = swjginfo[1] + "/yzmQuery"
    nowtime = showTime()
    rad = random.random()
    area = swjginfo[2]
    param = {
        'callback': 'jQuery1102045870758052653293_1581247300793',
        'fpdm': fpdm,
        'fphm': fphmyzm,
        'r': rad,
        'v': VVV,
        'nowtime': nowtime,
        'area': area,
        'publickey': ckcode(fpdm, nowtime)
    }
    s = requests.session()
    s.headers[
        'user-agent'] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"
    resp = s.get(url, params=param, verify=False)
    tmp = resp.text[43:-1]  # 去掉jquery前缀
    res = json.loads(tmp)
    if res.get("data") != None:
        # 解密data数据
        ctx = execjs.compile(js)
        res = json.loads(ctx.call("decryptData", res["data"], nowtime))
    if res['key4'] == "00":
        res['key4'] = "black"
    elif res['key4'] == "01":
        res['key4'] = "red"
    elif res['key4'] == "02":
        res['key4'] = "yellow"
    elif res['key4'] == "03":
        res['key4'] = "blue"
    return res, s


if __name__ == "__main__":
    # print(getYzmXx('V2.0.02_002', '011001900411', '61636940'))
    # print(getYzmXx('V2.0.02_002', '012001900311', '44977519'))
    print(getYzmXx('V2.0.02_002', '3300193130', '32915412'))        # data加密的一张发票
    # print(getYzmXx('V2.0.02_002', '021002000111', '43465599'))
    # '3300193130', '32915412', '20200324', '6017.7'
