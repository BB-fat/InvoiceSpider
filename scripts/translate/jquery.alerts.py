import re,execjs
from scripts.translate.translate import translate
js='''
var _0x2416 = ['6L2m5Lu35ZCI6K6h77ya', '6K+36L6T5YWl5LiN5ZCr56iO5Lu3', 'dGVzdA==', 'dGV4dA==', 'QWxlcnQ=', 'IiBpZD0icG9wdXBfY2FuY2VsIiBjbGFzcz0iYmx1ZWJ0biIvPjwvZGl2Pg==', 'I2tqamVqeQ==', 'YXBwZW5k', 'I3BvcHVwX3Byb21wdA==', 'a2V5Q29kZQ==', 'b3V0ZXJXaWR0aA==', 'cmVzaXpl', 'Jm5ic3A7', 'dW5iaW5k', 'I3BvcHVwX21lc3NhZ2U=', 'PGgxIGlkPSJwb3B1cF90aXRsZSI+PC9oMT4=', '5LiN5ZCr56iO5Lu377ya', 'X21haW50YWluUG9zaXRpb24=', '5ZCI6K6h6YeR6aKd77ya', 'I2tqamU=', '6K+36L6T5YWl5qCh6aqM56CBPGZvbnQgY29sb3I9InJlZCIgc2l6ZT0iNCI+5ZCO5YWt5L2NPC9mb250Pg==', 'Y2xpY2s=', 'IiBpZD0icG9wdXBfY2FuY2VsIiAvPjwvZGl2Pg==', '6K+36L6T5YWl5byA5YW36YeR6aKd', 'ZHJhZ2dhYmxl', 'YWZ0ZXI=', 'X3JlcG9zaXRpb24=', 'Zml4ZWQ=', 'Y2FuY2VsQnV0dG9u', 'MTAwJQ==', 'IzAwMA==', 'PGRpdiBpZD0icG9wdXBfY29udGVudCI+', 'PGJyIC8+', 'I3BvcHVwX2NvbnRhaW5lcg==', 'aGlkZQ==', 'I3BvcHVwX3RpdGxl', 'd2lkdGg=', 'PGJyIC8+PGlucHV0IHR5cGU9InRleHQiIHNpemU9IjMwIiBpZD0icG9wdXBfcHJvbXB0IiAvPg==', 'I2ZwZG1qeQ==', 'I3BvcHVwX2NvbnRlbnQ=', 'cHJvdG90eXBl', 'cmVtb3Zl', 'YXR0cg==', 'cmVtb3ZlQ2xhc3M=', 'Jm5ic3A75Y+W5raIJm5ic3A7', 'dHJpZ2dlcg==', 'cHJvbXB0', 'YWxlcnRz', 'PGRpdiBpZD0icG9wdXBfbWVzc2FnZSI+PC9kaXY+', 'I3BvcHVwX29rLCAjcG9wdXBfY2FuY2Vs', 'bGVuZ3Ro', 'YmluZA==', 'cmVwb3NpdGlvbk9uUmVzaXpl', 'dGlwX2NvbW1vbl9yaWdodA==', 'YWRkQ2xhc3M=', 'YWxlcnQ=', '5byA56Wo6YeR6aKd5pyJ6K+vIQ==', 'dmFs', 'Y29uZmlybQ==', '5ZCI6K6h6YeR6aKd5pyJ6K+vIQ==', '5qCh6aqM56CB77ya', 'Zm9udF9yZWQ=', 'PC9kaXY+', 'dmVydGljYWxPZmZzZXQ=', 'bW92ZQ==', 'bWF0Y2g=', 'cmVwbGFjZQ==', '6K+36L6T5YWl5ZCI6K6h6YeR6aKd', 'PGRpdiBpZD0icG9wdXBfcGFuZWwiPjxpbnB1dCB0eXBlPSJidXR0b24iIHZhbHVlPSI=', 'PGRpdiBpZD0icG9wdXBfb3ZlcmxheSI+PC9kaXY+', 'aGVpZ2h0', 'bWF4bGVuZ3Ro', '5Y+R56Wo5Luj56CB5pyJ6K+vIQ==', 'I3BvcHVwX29r', 'aG9yaXpvbnRhbE9mZnNldA==', 'Qk9EWQ==', 'I3BvcHVwX2NhbmNlbA==', 'IiBpZD0icG9wdXBfb2siIGNsYXNzPSJibHVlYnRuIi8+PC9kaXY+', 'Y2xhc3M=', '6K+36L6T5YWl6L2m5Lu35ZCI6K6h', 'aHRtbA==', 'X2hpZGU=', 'I3BvcHVwX292ZXJsYXk=', 'I3l6bV9pbWc=', 'a2V5cHJlc3M=', 'Y3Nz', 'Zm9jdXM=', '5byA5YW36YeR6aKdKOS4jeWQq+eojinvvJo=', 'X3Nob3c=', 'dHJpbQ==', 'c2hvdw==', 'ZGlhbG9nQ2xhc3M=', 'MHB4', 'PGRpdiBpZD0icG9wdXBfY29udGFpbmVyIj4=', '5LiN5ZCr56iO5Lu35pyJ6K+vIQ==', 'I2ZwaG0=', 'b3V0ZXJIZWlnaHQ=', 'Q29uZmlybQ==', 'I2NvbnRleHQ=', 'X292ZXJsYXk=', 'c2VsZWN0', 'IiBpZD0icG9wdXBfb2siIGNsYXNzPSJibHVlYnRuIi8+IDxpbnB1dCB0eXBlPSJidXR0b24iIHZhbHVlPSI=', 'b2tCdXR0b24=', 'dGlwX2NvbW1vbg==', 'IiBpZD0icG9wdXBfb2siIC8+IDxpbnB1dCB0eXBlPSJidXR0b24iIHZhbHVlPSI=', 'dGlwX2NvbW1vbl93cm9uZw==', 'I3BvcHVwX3Byb21wdCwgI3BvcHVwX29rLCAjcG9wdXBfY2FuY2Vs', 'b3ZlcmxheU9wYWNpdHk='];
(function (_0x271cbc, _0x2416cf) {
    var _0x422162 = function (_0x116ec2) {
        while (--_0x116ec2) {
            _0x271cbc['push'](_0x271cbc['shift']());
        }
    };
    _0x422162(++_0x2416cf);
}(_0x2416, 0x108));
var _0x4221 = function (_0x271cbc, _0x2416cf) {
    _0x271cbc = _0x271cbc - 0x0;
    var _0x422162 = _0x2416[_0x271cbc];
    if (_0x4221['NSqKYr'] === undefined) {
        (function () {
            var _0x39788b;
            try {
                var _0x34997e = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
                _0x39788b = _0x34997e();
            } catch (_0x900a39) {
                _0x39788b = window;
            }
            var _0x35cb66 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x39788b['atob'] || (_0x39788b['atob'] = function (_0x5cd6a8) {
                var _0x130d53 = String(_0x5cd6a8)['replace'](/=+$/, '');
                var _0x3e96d2 = '';
                for (var _0x20fffc = 0x0, _0x5a444b, _0x3d32f2, _0x17f45d = 0x0; _0x3d32f2 = _0x130d53['charAt'](_0x17f45d++); ~_0x3d32f2 && (_0x5a444b = _0x20fffc % 0x4 ? _0x5a444b * 0x40 + _0x3d32f2 : _0x3d32f2, _0x20fffc++ % 0x4) ? _0x3e96d2 += String['fromCharCode'](0xff & _0x5a444b >> (-0x2 * _0x20fffc & 0x6)) : 0x0) {
                    _0x3d32f2 = _0x35cb66['indexOf'](_0x3d32f2);
                }
                return _0x3e96d2;
            });
        }());
        _0x4221['gLOnqI'] = function (_0x5841b7) {
            var _0x23c442 = atob(_0x5841b7);
            var _0x252cf0 = [];
            for (var _0x540bed = 0x0, _0x1d63b5 = _0x23c442['length']; _0x540bed < _0x1d63b5; _0x540bed++) {
                _0x252cf0 += '%' + ('00' + _0x23c442['charCodeAt'](_0x540bed)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(_0x252cf0);
        };
        _0x4221['Zotkoi'] = {};
        _0x4221['NSqKYr'] = !![];
    }
    var _0x116ec2 = _0x4221['Zotkoi'][_0x271cbc];
    if (_0x116ec2 === undefined) {
        _0x422162 = _0x4221['gLOnqI'](_0x422162);
        _0x4221['Zotkoi'][_0x271cbc] = _0x422162;
    } else {
        _0x422162 = _0x116ec2;
    }
    return _0x422162;
};
'''

if __name__ == '__main__':
    translate(execjs.compile(js),"_0x4221","../../js/jquery.alerts.js","../../js/NewJquery.alerts.js")