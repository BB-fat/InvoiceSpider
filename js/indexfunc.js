var dalog;
var dalog2;
var show_yzm = "";
var code = new Array('144031539110', '131001570151', '133011501118', '111001571071');
var code10 = new Array('1440315391', '1310015701', '1330115011', '1110015710');
var oldweb = 0;
var yzmSj = "";
var jmmy = "";
var fplx = "99";
var skxt = 0;
var xsje = 1;
var swjgmc = "";
var delayFlag = "";
var delayTime = 6;
var delayMessage = "";

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


$(document)['ready'](function () {
    $('#pageshow')['show']();
    browser = getBrowser();
    if (browser == 'ie6') {
        jAlert('您正在使用的浏览器版本过低，请升级至IE8及以上版本！', '警告');
    } else if (browser['indexOf']('others') != -0x1 || browser['indexOf']('ok') != -0x1) {
        if ('edogq' === 'edogq') {
            if (browser['indexOf']('_chrome') != -0x1) {
                if ('dUCIk' === 'dUCIk') {
                    browser = browser['substring'](browser['indexOf']('_') + 0x1);
                    browser = browser['toUpperCase']();
                    browser = '谷歌' + browser['substring'](browser['indexOf']('\x20'));
                    $('#ktsm_tip')['html']('<p><b>提示：</b>您使用的是内核为' + browser + '版本浏览器，建议使用内核为谷歌 55版本浏览器。同时，请参照操作说明安装根证书。</p>' + '<span class="close_ktsm"></span>');
                    $('#ktsm_tip')['show']();
                    browser = 'chrome';
                } else {
                    if (!ajy(kjje)) {
                        $('#kjjejy')['addClass']('tip_common_wrong');
                        $('#kjjejy')['addClass']('font_red');
                        $('#kjjejy')['html']('校验码有误!');
                    } else {
                        $('#kjjejy')['addClass']('tip_common_right');
                        $('#kjjejy')['html']('&nbsp;');
                    }
                }
            } else if (browser['indexOf']('_firefox') != -0x1) {
                browser = browser['substring'](browser['indexOf']('_') + 0x1);
                browser = browser['toUpperCase']();
                browser = '火狐' + browser['substring'](browser['indexOf']('\x20'));
                $('#ktsm_tip')['html']('<p><b>提示：</b>您使用的是' + browser + '版本浏览器，建议使用50版本。同时，请参照操作说明安装根证书。</p>' + '<span\x20class=\x27close_ktsm\x27></span>');
                $('#ktsm_tip')['show']();
                browser = 'firefox';
            } else if (browser['indexOf']('chrome') != -0x1) {
                if ('GJWqe' === 'qaUjd') {
                    sessionStorage['browser'] = 'edge';
                } else {
                    $('#ktsm_tip')['html']('<p><b>提示：</b>您使用的是谷歌\x2055版本浏览器，请参照操作说明安装根证书再进行发票查验操作！</p>' + '<span class="close_ktsm"></span>');
                    $('#ktsm_tip')['show']();
                    browser = 'chrome';
                }
            } else if (browser['indexOf']('firefox') != -0x1) {
                if ('odOGL' === 'roFsi') {
                    browser = browser['substring'](browser['indexOf']('_') + 0x1);
                    browser = browser['toUpperCase']();
                    browser = '火狐' + browser['substring'](browser['indexOf']('\x20'));
                    $('#ktsm_tip')['html']('<p><b>提示：</b>您使用的是' + browser + '版本浏览器，建议使用50版本。同时，请参照操作说明安装根证书。</p>' + '<span class="close_ktsm"></span>');
                    $('#ktsm_tip')['show']();
                    browser = 'firefox';
                } else {
                    $('#ktsm_tip')['html']('<p><b>提示：</b>您使用的是火狐 50版本浏览器，请参照操作说明安装根证书再进行发票查验操作！</p>' + '<span class="close_ktsm"></span>');
                    $('#ktsm_tip')['show']();
                    browser = 'firefox';
                }
            }
        } else {
            var yzm = $('#yzm')['val']()['trim']();
            var yzmjy = $('#yzmjy')['attr']('class');
            $('#yzmjy')['removeClass'](yzmjy);
            if (!avym(yzm)) {
                $('#yzmjy')['addClass']('tip_common_wrong');
                $('#yzmjy')['addClass']('font_red');
            } else {
                $('#yzmjy')['html']('&nbsp');
            }
            acb(fplx);
        }
    } else if (browser == 'others') {
        $('#ktsm_tip')['show']();
    }
});
$(document)['ready'](function () {
    cover_width = document['body']['clientWidth'];
    cover_height = window['screen']['height'];
    document['getElementById']('cover')['style']['width'] = cover_width + 'px';
    document['getElementById']('cover')['style']['height'] = cover_height + 'px';
    $('#top')['load']('top.html?' + Math['random']());
    $('#foot')['load']('footer.html?' + Math['random']());
    if (browser == 'ie8') {
        sessionStorage['browser'] = 'ie8';
    } else if (browser == 'edge' || browser == 'firefox') {
        sessionStorage['browser'] = 'edge';
    } else {
        sessionStorage['browser'] = '';
    }
    $('.close_ktsm')['click'](function () {
        $(this)['parent']()['hide']();
    });
    var _0x24af2e = new Date();
    $('#kprq')['datepicker']({
        'format': 'yyyymmdd',
        'autoclose': !![],
        'endDate': _0x24af2e,
        'language': 'zh-CN'
    })['on']('changeDate', function (_0x439259) {
        var _0x3990b8 = $('#kprq')['val']()['trim']();
        $('#kprq')['css']('color', '#555');
        acb(fplx);
    });
});
$('#fpdm')['keyup'](function () {
    acb(fplx);
});
$('#fpdm')['blur'](function () {
    var fpdm = $('#fpdm')['val']()['trim']();
    if (fpdm['length'] == 0xa || fpdm['length'] == 0xc) {
        afcdm(fpdm);
    } else {
        $('#fpdmjy')['addClass']('tip_common_wrong');
        $('#fpdmjy')['addClass']('font_red');
        $('#fpdmjy')['html']('发票代码有误!');
    }
    acb(fplx);
});
$('#fphm')['keyup'](function () {
    var fphm = $('#fphm')['val']()['trim']();
    if (fphm['length'] >= 0x8) {
        ahmch(fphm);
    } else {
        $('#fphmjy')['removeClass']();
        $('#fphmjy')['addClass']('tip_common');
        $('#fphmjy')['html']('请输入发票号码');
    }
    acb(fplx);
});
$('#fphm')['blur'](function () {
    var fphm = $('#fphm')['val']()['trim']();
    if (fphm['length'] != 0x0 && fphm['length'] < 0x8) {
        ahmch(fphm);
    }
    var fpdm = $('#fpdm')['val']()['trim']();
    afcdm(fpdm);
    acb(fplx);
});
$('#kjje')['keyup'](function () {
    var kjje = '';
    var fpdm = $('#fpdm')['val']()['trim']();
    var kjjejy = $('#kjjejy')['attr']('class');
    $('#kjjejy')['removeClass'](kjjejy);
    if (fpdm == '' || fplx == '01' || fplx == '02' || fplx == '03' || fplx == '15' || fplx == '99' || fplx == '08') {
        $('#kjje')['attr']('maxlength', '20');
        kjje = $('#kjje')['val']()['trim']();
        if (!aje(fpdm, kjje)) {
            $('#kjjejy')['addClass']('tip_common_wrong');
            $('#kjjejy')['addClass']('font_red');
            if (fplx == '02') {
                if ('PnVIR' !== 'PnVIR') {
                    kprqChange(kprq);
                } else {
                    $('#kjjejy')['html']('合计金额有误!');
                }
            } else if (fplx == '03') {
                $('#kjjejy')['html']('不含税价有误!');
            } else if (fplx == '15') {
                $('#kjjejy')['html']('车价合计有误!');
            } else {
                if ('STUCL' !== 'KcKgh') {
                    $('#kjjejy')['html']('开票金额有误!');
                } else {
                    var _0x2cfa9b = $('#kprq')['val']()['trim']();
                    if (_0x2cfa9b['length'] >= 0x8) {
                        kprqChange(_0x2cfa9b);
                    } else {
                        $('#kprqjy')['removeClass']();
                        $('#kprqjy')['addClass']('tip_common');
                        $('#kprqjy')['html']('请输入开票日期');
                    }
                    acb(fplx);
                }
            }
        } else {
            $('#kjjejy')['addClass']('tip_common_right');
            $('#kjjejy')['html']('&nbsp;');
        }
    } else if (fplx == '04' || fplx == '10' || fplx == '11' || fplx == '14') {
        if ('lTYoj' === 'vhppk') {
            return !![];
        } else {
            $('#kjje')['attr']('maxlength', '6');
            kjje = $('#kjje')['val']()['trim']();
            if (kjje['length'] >= 0x6) {
                if ('qKgNV' !== 'WEJuy') {
                    if (!ajy(kjje)) {
                        $('#kjjejy')['addClass']('tip_common_wrong');
                        $('#kjjejy')['addClass']('font_red');
                        $('#kjjejy')['html']('校验码有误!');
                    } else {
                        if ('EURgo' !== 'EURgo') {
                            $('#kjjejy')['html']('请输入开具金额');
                        } else {
                            $('#kjjejy')['addClass']('tip_common_right');
                            $('#kjjejy')['html']('&nbsp;');
                        }
                    }
                } else {
                    $('#kprqjy')['removeClass']();
                    $('#kprqjy')['addClass']('tip_common');
                    $('#kprqjy')['html']('请输入开票日期');
                }
            } else {
                if ('bfNyt' === 'tfQbz') {
                    $('#kjjejy')['addClass']('tip_common_right');
                    $('#kjjejy')['html']('&nbsp;');
                } else {
                    $('#kjjejy')['removeClass']();
                    $('#kjjejy')['addClass']('tip_common');
                    $('#kjjejy')['html']('请输入校验码<font\x20color=\x22red\x22\x20size=\x224\x22>后六位</font>');
                }
            }
        }
    }
    acb(fplx);
});
$('#kjje')['blur'](function () {
    var kjje = $('#kjje')['val']()['trim']();
    var fpdm = $('#fpdm')['val']()['trim']();
    var kjjejy = $('#kjjejy')['attr']('class');
    $('#kjjejy')['removeClass'](kjjejy);
    if (fpdm == '' || fplx == '01' || fplx == '02' || fplx == '03' || fplx == '15' || fplx == '99' || fplx == '08') {
        if ('LXPBu' === 'LXPBu') {
            if (kjje['length'] != 0x0) {
                if ('eOZcL' === 'eOZcL') {
                    if (!aje(fpdm, kjje)) {
                        $('#kjjejy')['addClass']('tip_common_wrong');
                        $('#kjjejy')['addClass']('font_red');
                        if (fplx == '02') {
                            $('#kjjejy')['html']('合计金额有误!');
                        } else if (fplx == '03') {
                            $('#kjjejy')['html']('不含税价有误!');
                        } else if (fplx == '15') {
                            if ('yQTmB' === 'wmHVW') {
                                $('#fphmjy')['removeClass']();
                                $('#fphmjy')['addClass']('tip_common');
                                $('#fphmjy')['html']('请输入发票号码');
                            } else {
                                $('#kjjejy')['html']('车价合计有误!');
                            }
                        } else {
                            $('#kjjejy')['html']('开票金额有误!');
                        }
                    } else {
                        $('#kjjejy')['addClass']('tip_common_right');
                        $('#kjjejy')['html']('&nbsp;');
                    }
                } else {
                    ahmch(fphm);
                }
            } else {
                $('#kjjejy')['removeClass']();
                $('#kjjejy')['addClass']('tip_common');
                if (fplx == '02') {
                    $('#kjjejy')['html']('请输入合计金额');
                } else if (fplx == '03') {
                    if ('EmXiC' === 'EmXiC') {
                        $('#kjjejy')['html']('请输入不含税价');
                    } else {
                        ahmch(fphm);
                    }
                } else if (fplx == '15') {
                    $('#kjjejy')['html']('请输入车价合计');
                } else {
                    $('#kjjejy')['html']('请输入开具金额');
                }
            }
        } else {
            $('#kjjejy')['html']('合计金额有误!');
        }
    } else if (fplx == '04' || fplx == '10' || fplx == '11' || fplx == '14') {
        if (kjje['length'] != 0x0) {
            if (!ajy(kjje)) {
                $('#kjjejy')['addClass']('tip_common_wrong');
                $('#kjjejy')['addClass']('font_red');
                $('#kjjejy')['html']('校验码有误!');
            } else {
                $('#kjjejy')['addClass']('tip_common_right');
                $('#kjjejy')['html']('&nbsp;');
            }
        } else {
            $('#kjjejy')['removeClass']();
            $('#kjjejy')['addClass']('tip_common');
            $('#kjjejy')['html']('请输入校验码<font\x20color=\x22red\x22\x20size=\x224\x22>后六位</font>');
        }
    }
    acb(fplx);
});
$('#kprq')['keyup'](function () {
    var kprq = $('#kprq')['val']()['trim']();
    if (kprq['length'] >= 0x8) {
        kprqChange(kprq);
    } else {
        if ('hOAhW' !== 'hOAhW') {
            return ![];
        } else {
            $('#kprqjy')['removeClass']();
            $('#kprqjy')['addClass']('tip_common');
            $('#kprqjy')['html']('请输入开票日期');
        }
    }
    acb(fplx);
});
$('#kprq')['blur'](function () {
    var kprq = $('#kprq')['val']()['trim']();
    if (kprq == '') {
        $('#kprq')['val']('YYYYMMDD');
        $('#kprq')['css']('color', '#999999');
    }
    if (kprq['length'] != 0x0) {
        kprqChange(kprq);
    } else {
        $('#kprqjy')['removeClass']();
        $('#kprqjy')['addClass']('tip_common');
        $('#kprqjy')['html']('请输入开票日期');
    }
    acb(fplx);
});
$('#yzm')['focus'](function () {
    var yzm = $('#yzm')['val']();
    var _0x40d2f3 = '请输入验证码';
    if (yzm == _0x40d2f3) {
        if ('czIKV' === 'czIKV') {
            $('#yzm')['val']('');
            $('#yzm')['css']('color', '#000000');
        } else {
            arw();
        }
    }
});
$('#yzm')['blur'](function () {
    var yzm = $('#yzm')['val']();
    if (yzm == '') {
        $('#yzm')['val']('请输入验证码');
        $('#yzm')['css']('color', '#999999');
    }
    acb(fplx);
});
$('#yzm')['keyup'](function () {
    var yzm = $('#yzm')['val']()['trim']();
    var yzmjy = $('#yzmjy')['attr']('class');
    $('#yzmjy')['removeClass'](yzmjy);
    if (!avym(yzm)) {
        $('#yzmjy')['addClass']('tip_common_wrong');
        $('#yzmjy')['addClass']('font_red');
    } else {
        $('#yzmjy')['html']('&nbsp');
    }
    acb(fplx);
});
$('#yzm_img')['click'](function () {
    var fpdm = $('#fpdm')['val']()['trim']();
    var fphm = $('#fphm')['val']()['trim']();
    if (fpdm == '' || fphm == '') {
        jAlert('请先输入发票代码及发票号码!', '提示');
    } else {
        if (ckdm(fpdm) && ahm(fphm)) {
            getYzmXx();
        } else {
            if ('rhgkJ' !== 'ejuTp') {
                jAlert('请输入正确发票代码及发票号码!', '提示');
            } else {
                var _0x26b2f1 = $('#kprq')['val']()['trim']();
                $('#kprq')['css']('color', '#555');
                acb(fplx);
            }
        }
    }
});
$('#reset')['click'](function () {
    arw();
});

function ckdm(_0x58408b) {
    if (_0x58408b['length'] == 0xa || _0x58408b['length'] == 0xc) {
        var _0x5cafd4 = /^[0-9]*$/;
        var _0x4c0af0 = _0x5cafd4['test'](_0x58408b);
        if (_0x4c0af0 == ![]) {
            if ('arUsJ' === 'arUsJ') {
                return ![];
            } else {
                $('#kjjejy')['html']('车价合计有误!');
            }
        } else {
            if ('zPRWf' === 'stysR') {
                $('#kjjejy')['html']('车价合计有误!');
            } else {
                var _0x92efe4 = getSwjg(_0x58408b, 0x0);
                if (_0x92efe4['length'] == 0x0) {
                    return ![];
                } else {
                    if ('siPjx' === 'cIKLy') {
                        var _0x162ac0 = $('#fpdm')['val']()['trim']();
                        if (_0x162ac0['length'] == 0xa || _0x162ac0['length'] == 0xc) {
                            afcdm(_0x162ac0);
                        } else {
                            $('#fpdmjy')['addClass']('tip_common_wrong');
                            $('#fpdmjy')['addClass']('font_red');
                            $('#fpdmjy')['html']('发票代码有误!');
                        }
                        acb(fplx);
                    } else {
                        if (!adm(_0x58408b) || _0x92efe4['length'] == 0x0) {
                            if ('zNyeD' !== 'zNyeD') {
                                if (!adm(_0x58408b) || _0x92efe4['length'] == 0x0) {
                                    return ![];
                                } else {
                                    return !![];
                                }
                            } else {
                                return ![];
                            }
                        } else {
                            return !![];
                        }
                    }
                }
            }
        }
    } else {
        return ![];
    }
}
String.prototype.replaceAll = function (s1, s2) {
    return this.replace(new RegExp(s1, "gm"), s2);
}

window.onerror = function (msg, file, line) {
    return true
};