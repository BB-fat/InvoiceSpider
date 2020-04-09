import execjs
import re

script = '''
var stringArray = ['aE9BaFc=', '5byA56Wo6YeR6aKd5pyJ6K+vIQ==', 'cm9Gc2k=', 'cmFuZG9t', 'I3l6bV9pbWc=', 'dG9VcHBlckNhc2U=', 'ZFVDSWs=', 'YXR0cg==', 'aGVpZ2h0', 'I2ZwaG1qeQ==', 'Y292ZXI=', 'cmVhZHk=', 'ek55ZUQ=', 'Y2hhbmdlRGF0ZQ==', 'Y2xhc3M=', 'YmZOeXQ=', 'emgtQ04=', 'Zm9udF9yZWQ=', '6K+36L6T5YWl6aqM6K+B56CB', 'I2ZwZG0=', 'Y2xpY2s=', 'UG5WSVI=', 'cGFyZW50', '54mI5pys5rWP6KeI5Zmo77yM5bu66K6u5L2/55So5YaF5qC45Li66LC35q2MIDU154mI5pys5rWP6KeI5Zmo44CC5ZCM5pe277yM6K+35Y+C54Wn5pON5L2c6K+05piO5a6J6KOF5qC56K+B5Lmm44CCPC9wPg==', 'RVVSZ28=', 'Y2hyb21l', 'a2V5dXA=', '5LiN5ZCr56iO5Lu35pyJ6K+vIQ==', 'YWRkQ2xhc3M=', 'YnJvd3Nlcg==', 'I2twcnE=', 'I3l6bWp5', '6L2m5Lu35ZCI6K6h5pyJ6K+vIQ==', 'RW1YaUM=', 'bG9hZA==', '5Y+R56Wo5Luj56CB5pyJ6K+vIQ==', 'eVFUbUI=', 'b2RPR0w=', 'ZWRvZ3E=', 'I2tqamVqeQ==', 'dGVzdA==', 'V0VKdXk=', 'dGlwX2NvbW1vbl93cm9uZw==', 'eXl5eW1tZGQ=', 'Jm5ic3A=', 'Ymx1cg==', 'd2lkdGg=', 'Ym9keQ==', 'I2ZwZG1qeQ==', '6K+36L6T5YWl5ZCI6K6h6YeR6aKd', 'aHRtbA==', 'I3BhZ2VzaG93', 'S2NLZ2g=', 'bWF4bGVuZ3Ro', 'U1RVQ0w=', 'IzU1NQ==', 'IzAwMDAwMA==', 'd21IVlc=', '6K+36L6T5YWl5byA5YW36YeR6aKd', 'dmFs', 'I2t0c21fdGlw', '54mI5pys5rWP6KeI5Zmo77yM5bu66K6u5L2/55SoNTDniYjmnKzjgILlkIzml7bvvIzor7flj4Lnhafmk43kvZzor7TmmI7lronoo4XmoLnor4HkuabjgII8L3A+', 'Y3pJS1Y=', '6K+36L6T5YWl5q2j56Gu5Y+R56Wo5Luj56CB5Y+K5Y+R56Wo5Y+356CBIQ==', '6K+36L6T5YWl6L2m5Lu35ZCI6K6h', 'cmhna0o=', 'Y2xpZW50V2lkdGg=', 'I2twcnFqeQ==', 'bGVuZ3Ro', 'X2Nocm9tZQ==', 'PHA+PGI+5o+Q56S677yaPC9iPuaCqOS9v+eUqOeahOaYrw==', 'I3l6bQ==', 'ZGF0ZXBpY2tlcg==', '5qCh6aqM56CB5pyJ6K+vIQ==', 'dGZRYno=', 'dG9wLmh0bWw/', 'aGlkZQ==', 'PHNwYW4gY2xhc3M9J2Nsb3NlX2t0c20nPjwvc3Bhbj4=', '6K+36L6T5YWl5Y+R56Wo5Y+356CB', 'aW5kZXhPZg==', 'PHA+PGI+5o+Q56S677yaPC9iPuaCqOS9v+eUqOeahOaYr+WGheaguOS4ug==', 'Y3Nz', 'aWU2', 'dmhwcGs=', 'dGlwX2NvbW1vbg==', 'ZWRnZQ==', 'ZmlyZWZveA==', 'Izk5OTk5OQ==', 'Zm9vdGVyLmh0bWw/', 'I3RvcA==', 'cWFVamQ=', 'I2ZwaG0=', 'dGlwX2NvbW1vbl9yaWdodA==', 'Z2V0RWxlbWVudEJ5SWQ=', 'Zm9jdXM=', 'c3Vic3RyaW5n', 'dHJpbQ==', 'YXJVc0o=', 'PHA+PGI+5o+Q56S677yaPC9iPuaCqOS9v+eUqOeahOaYr+eBq+eLkCA1MOeJiOacrOa1j+iniOWZqO+8jOivt+WPgueFp+aTjeS9nOivtOaYjuWuieijheagueivgeS5puWGjei/m+ihjOWPkeelqOafpemqjOaTjeS9nO+8gTwvcD4=', 'c2NyZWVu', '6K+35YWI6L6T5YWl5Y+R56Wo5Luj56CB5Y+K5Y+R56Wo5Y+356CBIQ==', 'ZWp1VHA=', 'Jm5ic3A7', 'c2hvdw==', '6K+36L6T5YWl5byA56Wo5pel5pyf', 'LmNsb3NlX2t0c20=', '5ZCI6K6h6YeR6aKd5pyJ6K+vIQ==', 'I3Jlc2V0', 'I2Zvb3Q=', 'bFRZb2o=', 'cmVtb3ZlQ2xhc3M=', 'WVlZWU1NREQ=', 'Y29sb3I=', 'ZU9aY0w=', 'I2tqamU=', 'aWU4', 'Y0lLTHk=', 'R0pXcWU=', 'b3RoZXJz'];
// b变量不影响结果
var transform = function (a) {
    a = a - 0x0;
    var _0x2e7e21 = stringArray[a];
    // 首次运行初始化
    if (transform['HHfepi'] === undefined) {

        (function () {
            var func;
            try {
                var _0x11e8f7 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                func = _0x11e8f7();
            } catch (e) {
                func = window;
            }
            var key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            func['atob'] || (func['atob'] = function (s1) {
                var s2 = String(s1).replace(/=+$/, '');
                var s3 = '';
                for (var a = 0x0, b, c, d = 0x0; c = s2.charAt(d++); ~c && (b = a % 0x4 ? b * 0x40 + c : c, a++ % 0x4) ? s3 += String.fromCharCode(0xff & b >> (-0x2 * a & 0x6)) : 0x0) {
                    c = key.indexOf(c);
                }
                return s3;
            });
        }());

        transform['AvvIXX'] = function (_0x5513fe) {
            var _0x4598a6 = atob(_0x5513fe);
            var _0xf8ae1a = [];
            for (var _0x36d654 = 0x0, _0x355204 = _0x4598a6['length']; _0x36d654 < _0x355204; _0x36d654++) {
                _0xf8ae1a += '%' + ('00' + _0x4598a6['charCodeAt'](_0x36d654)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0xf8ae1a);
        };
        transform['OzuuDx'] = {};
        transform['HHfepi'] = !![];
    }
    var _0x1bf410 = transform['OzuuDx'][a];
    if (_0x1bf410 === undefined) {
        _0x2e7e21 = transform['AvvIXX'](_0x2e7e21);
        transform['OzuuDx'][a] = _0x2e7e21;
    } else {
        _0x2e7e21 = _0x1bf410;
    }
    return _0x2e7e21;
};

'''
ctx = execjs.compile(script)