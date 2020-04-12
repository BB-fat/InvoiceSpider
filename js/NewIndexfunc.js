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