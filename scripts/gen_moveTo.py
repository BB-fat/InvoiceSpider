import execjs
from scripts.encrypt import encrypt

js='''
var _0x330953 = {
    'SPNxM': function (_0x29e4fe) {
        return _0x29e4fe();
    },
    'yHNsB': function (_0x521907, _0x2e2aa4) {
        return _0x521907 == _0x2e2aa4;
    },
    'IUMNz': function (_0xf8bf15, _0x4e626f) {
        return _0xf8bf15 !== _0x4e626f;
    },
    'ZGbpC': "RCrwf",
    'WXWkV': "EeEPv",
    'mhJpo': function (_0x136734, _0x19b3fd) {
        return _0x136734 === _0x19b3fd;
    },
    'zlWBD': "eBFRD",
    'SIDfM': "GrixH",
    'QVZze': function (_0x48c4f6, _0xcf1739) {
        return _0x48c4f6 === _0xcf1739;
    },
    'GSfbO': "KAjQo",
    'sfoID': "VpzCJ",
    'KUlzv': function (_0x2f75ce, _0x5108c0) {
        return _0x2f75ce + _0x5108c0;
    },
    'Tiopg': "debu",
    'sBnqz': "gger",
    'ZcvRo': "stateObject",
    'YQjxr': "gcduC",
    'LeiYz': "function *\( *\)",
    'STPBu': "\+\+ *(?:_0x(?:[a-f0-9]){4,6}|(?:\b|\d)[a-z0-9]{1,4}(?:\b|\d))",
    'oXvIh': function (_0x2f0d87, _0x2ed3a7) {
        return _0x2f0d87(_0x2ed3a7);
    },
    'XRtdq': "init",
    'Lceuv': "chain",
    'hWZiT': "input",
    'iDOYc': "ZGGUF",
    'ieWlf': "uJoqX",
    'xOUKW': "DZtAI",
    'fkpDG': "BcvqM",
    'rvhup': function (_0x51632d) {
        return _0x51632d();
    },
    'rXSZg': "vUTnp",
    'MVeJG': "fZZkS",
    'eLdZO': function (_0x3e748e, _0x2cb278, _0x5c87eb) {
        return _0x3e748e(_0x2cb278, _0x5c87eb);
    },
    'ugrjc': "4|2|6|8|3|5|1|7|0",
    'ToOnq': function (_0x272469, _0x33df22) {
        return _0x272469 === _0x33df22;
    },
    'JsKfA': "AAdJS",
    'FaXIl': "zWkgy",
    'XbhSv': function (_0x58da36, _0xcd1f4b) {
        return _0x58da36 === _0xcd1f4b;
    },
    'oyeWf': "FnqDj",
    'ULRXH': "oTDfQ",
    'ltEgp': "XtRFz",
    'RXUmn': "iTAGH",
    'zoiiS': function (_0x457d5d, _0x433ffb) {
        return _0x457d5d(_0x433ffb);
    },
    'HvuXx': "pVjMF",
    'ykgcd': "KLzcq",
    'dFDMG': function (_0x63eb2f, _0x341ccd) {
        return _0x63eb2f === _0x341ccd;
    },
    'KKhBg': "ksgBO",
    'gUtgV': "pOfAn",
    'mQQxV': "6|5|8|7|3|4|0|1|2",
    'rMMUQ': function (_0x3b1101, _0x4cbf82) {
        return _0x3b1101 >= _0x4cbf82;
    },
    'JZtsq': function (_0x14a4d2, _0x4eefb7) {
        return _0x14a4d2 < _0x4eefb7;
    },
    'btxgj': function (_0x27de7e, _0x5d31df) {
        return _0x27de7e == _0x5d31df;
    },
    'IGHvF': "vjXeG",
    'PHxpB': function (_0x34dae7, _0x16222f) {
        return _0x34dae7 !== _0x16222f;
    },
    'qtwSx': "SnlSR",
    'WZlXz': function (_0xb680ac, _0x460951) {
        return _0xb680ac(_0x460951);
    },
    'QchaM': function (_0x5640d3, _0x2c6d12) {
        return _0x5640d3 + _0x2c6d12;
    },
    'LlUef': "return (function() ",
    'PiJIp': "{}.constructor('return this')( )",
    'UnpBP': "tXLsD",
    'Tuqoq': "irFtm",
    'JvxzD': "wqERU",
    'HyARU': "ZUIHP",
    'xwDVH': "tJWgy",
    'Upqgz': function (_0xfb9527, _0x43e0b6) {
        return _0xfb9527 !== _0x43e0b6;
    },
    'tUfgm': "PWbsu",
    'tFVpJ': "IosJT",
    'GhvIl': "6|0|3|5|2|1|4",
    'QwJZM': function (_0x488374, _0x3fdf57) {
        return _0x488374 == _0x3fdf57;
    },
    'ditjM': "CoMpY",
    'LSrnF': "load",
    'VmwyP': function (_0x4dc8f1, _0x1c3133) {
        return _0x4dc8f1 < _0x1c3133;
    },
    'HtYvK': "&nbsp;&nbsp;",
    'yfThG': function (_0xcbe1c5, _0x2dd1f6) {
        return _0xcbe1c5 !== _0x2dd1f6;
    },
    'cjWJC': "kjPfS",
    'FJHtX': "BKVTN",
    'ORFQa': function (_0x12b6fc, _0x4d678c) {
        return _0x12b6fc + _0x4d678c;
    },
    'SFCdM': "active",
    'YQvlv': "hover",
    'cdDsX': function (_0x2a7dfb, _0x5b5c06) {
        return _0x2a7dfb === _0x5b5c06;
    },
    'hrFWx': "IWGJB",
    'Hvvjl': "kMMWF",
    'ewvtK': "IvFxV",
    'yRUtr': function (_0x23e891, _0x471dd4) {
        return _0x23e891 === _0x471dd4;
    },
    'hqhff': "pTNiU",
    'FcJZF': "IwqrS",
    'OvwsV': "mouseover",
    'BWAgv': "MGOIS",
    'TjzdF': "mouseout",
    'QtCyF': "qTyti",
    'YwxUA': "OxtIh",
    'eXebY': "DZYIh",
    'UVOUe': "mousedown",
    'rPYwz': "ezzwl",
    'kGwuU': "jLdve",
    'AOmqV': "mouseup",
    'eqeBh': "OIORt",
    'fHCrg': "DVMZF",
    'ROfPi': function (_0x4d47a2, _0x21d306) {
        return _0x4d47a2 * _0x21d306;
    },
    'BWdaC': function (_0x1e4210, _0x375f7a) {
        return _0x1e4210 - _0x375f7a;
    },
    'ryHEJ': function (_0x1ee13e, _0x30046b) {
        return _0x1ee13e !== _0x30046b;
    },
    'JBlvj': "llQKB",
    'PvMFT': function (_0x49c9f0, _0x220533) {
        return _0x49c9f0 === _0x220533;
    },
    'lyfAV': "tWzPq",
    'TxeGb': "QICAg",
    'UCPak': function (_0x4869ac, _0x28b776) {
        return _0x4869ac(_0x28b776);
    },
    'hSEyi': function (_0x5f2151, _0x1ede5c) {
        return _0x5f2151 < _0x1ede5c;
    },
    'GDhUF': function (_0x5d4310, _0x2fc140) {
        return _0x5d4310 === _0x2fc140;
    },
    'OgbRM': "hLcHu",
    'DDnVS': "oiWHW",
    'vldbJ': function (_0x478860, _0x2b60c8, _0x4075b7) {
        return _0x478860(_0x2b60c8, _0x4075b7);
    },
    'dMjGB': "kHDqJ",
    'xiLvq': "sMScd",
    'CSoKc': function (_0x487bfb, _0x35d243) {
        return _0x487bfb <= _0x35d243;
    },
    'QtYfW': "NQXgr",
    'EYpYH': "awBog",
    'ICQEs': function (_0x2f6b46, _0x1c2a30) {
        return _0x2f6b46 + _0x1c2a30;
    },
    'Gharw': function (_0x1d179f, _0x2ac7e6) {
        return _0x1d179f >= _0x2ac7e6;
    },
    'Xihzd': function (_0x1ac25d, _0x214138) {
        return _0x1ac25d >= _0x214138;
    },
    'oQSlE': "rSZUV",
    'xNGoM': "EolqD",
    'oStgz': function (_0x15039a, _0x130b6c) {
        return _0x15039a + _0x130b6c;
    },
    'Trnuj': function (_0x441152, _0x312821) {
        return _0x441152 + _0x312821;
    },
    'fpCuE': "utVLt",
    'RRMUb': "gyUPv",
    'yRUhH': "rhlegdchb",
    'uKZvQ': function (_0x2ce228, _0x2df8cc) {
        return _0x2ce228 + _0x2df8cc;
    },
    'xCoUf': function (_0x31b387, _0x7f94e5) {
        return _0x31b387 < _0x7f94e5;
    },
    'Cvxzh': "nIhqW",
    'FATVC': "AiNfE",
    'fZrWV': function (_0x4cdd11, _0x1494ee) {
        return _0x4cdd11 & _0x1494ee;
    },
    'WwkLl': function (_0x2855e3, _0x4285e1) {
        return _0x2855e3 === _0x4285e1;
    },
    'XGJWX': "ndBSa",
    'dRZTa': function (_0x24f77a, _0x6b826e) {
        return _0x24f77a >> _0x6b826e;
    },
    'JfwGr': function (_0xb83a8a, _0x45a23c) {
        return _0xb83a8a << _0x45a23c;
    },
    'isYMm': function (_0x4ce307, _0x25fb20) {
        return _0x4ce307 === _0x25fb20;
    },
    'VDlMX': "JFdqa",
    'pZTBa': function (_0x3dad42, _0x14f1d2) {
        return _0x3dad42 | _0x14f1d2;
    },
    'Gnrmu': function (_0x3720d6, _0x172fa0) {
        return _0x3720d6 << _0x172fa0;
    },
    'maAPi': function (_0x1ffeb2, _0x4bf325) {
        return _0x1ffeb2 & _0x4bf325;
    },
    'GtHyF': function (_0x1438b5, _0x51ea16) {
        return _0x1438b5 << _0x51ea16;
    },
    'rBWzD': function (_0x4ad4c3, _0x3ac101) {
        return _0x4ad4c3 & _0x3ac101;
    },
    'IxLPh': function (_0x2e628e, _0x25bbd7) {
        return _0x2e628e & _0x25bbd7;
    },
    'kaMoe': function (_0x35b9cb, _0x5994cf) {
        return _0x35b9cb >> _0x5994cf;
    },
    'CJhgW': function (_0x194deb, _0x3873c1) {
        return _0x194deb | _0x3873c1;
    },
    'WurUS': function (_0x547c7a, _0x27324b) {
        return _0x547c7a << _0x27324b;
    },
    'AatBj': function (_0x1e97ca, _0x4b7113) {
        return _0x1e97ca | _0x4b7113;
    },
    'oJDFF': function (_0x2e2979, _0x2d4714) {
        return _0x2e2979 << _0x2d4714;
    },
    'lXdui': function (_0x50b2fb, _0x3faa0c) {
        return _0x50b2fb & _0x3faa0c;
    },
    'bYTQZ': function (_0x4f1c0f, _0x4a5901) {
        return _0x4f1c0f << _0x4a5901;
    },
    'KLTjl': function (_0xe9e9c8, _0x2ead78) {
        return _0xe9e9c8 & _0x2ead78;
    },
    'KBAli': function (_0x861ddb, _0x5374e1) {
        return _0x861ddb & _0x5374e1;
    },
    'gIggQ': function (_0x2bdcd6) {
        return _0x2bdcd6();
    },
    'kShNj': function (_0x341981, _0x2402d0) {
        return _0x341981 === _0x2402d0;
    },
    'fWjJg': "HhmuK",
    'FiEus': function (_0x48583e, _0xa757e6, _0x162342) {
        return _0x48583e(_0xa757e6, _0x162342);
    },
    'fRNRE': "0|6|5|3|4|2|1",
    'EpYLe': function (_0x193804, _0xe8dd3e) {
        return _0x193804 + _0xe8dd3e;
    },
    'fRnNs': function (_0x247ba6, _0x30b5c3) {
        return _0x247ba6 + _0x30b5c3;
    },
    'VkcvJ': function (_0x42ac4f, _0x9fb83f) {
        return _0x42ac4f + _0x9fb83f;
    },
    'opusY': function (_0x55dfdc, _0x38cfb8) {
        return _0x55dfdc + _0x38cfb8;
    },
    'OEvIr': function (_0x4def05, _0x64a248) {
        return _0x4def05 + _0x64a248;
    },
    'UzYDM': function (_0x2bbb24, _0x30c5cf) {
        return _0x2bbb24 + _0x30c5cf;
    },
    'lEIQq': function (_0x73a07, _0x2fbb95) {
        return _0x73a07 !== _0x2fbb95;
    },
    'Fmbmu': "ItUye",
    'pXSvA': function (_0x209c85, _0x589169) {
        return _0x209c85 + _0x589169;
    },
    'fRsZk': function (_0x43dbec, _0x30675b) {
        return _0x43dbec < _0x30675b;
    },
    'FASyA': "RZgDI",
    'ldDEe': function (_0x5c823e, _0x16a887) {
        return _0x5c823e + _0x16a887;
    },
    'egKlm': function (_0xf4e600, _0x56be3d) {
        return _0xf4e600 + _0x56be3d;
    },
    'lftpJ': function (_0x4b53e6, _0x2997c5) {
        return _0x4b53e6 + _0x2997c5;
    },
    'rnIom': function (_0xc6966d, _0x300a54) {
        return _0xc6966d + _0x300a54;
    },
    'QOgTP': function (_0x310cc5, _0x1a69b6) {
        return _0x310cc5 >= _0x1a69b6;
    },
    'htdHA': function (_0x5c1a40, _0x2f1e23) {
        return _0x5c1a40 >= _0x2f1e23;
    },
    'NnZdA': "UzgIe",
    'rdDIQ': "IlgUp",
    'NzGaQ': function (_0x1fead9, _0x1b7ad3) {
        return _0x1fead9 + _0x1b7ad3;
    },
    'IGTFr': function (_0x724655, _0x3a45bb) {
        return _0x724655 + _0x3a45bb;
    },
    'nGLhp': "ff8080815ed2f53b015f27c2b7b9783e",
    'ddLpx': "402880bd5c76166f015c9041698e5099",
    'uXLmK': "402880bd5c76101f015c903ee811504e",
    'stfel': "Gcccz",
    'iPvKn': "KTZhi",
    'ukCip': function (_0x155345, _0x3977c9) {
        return _0x155345 <= _0x3977c9;
    },
    'yptWd': "UNBAU",
    'nEJbN': function (_0x38377b, _0x4aa6d5) {
        return _0x38377b + _0x4aa6d5;
    },
    'BjQDw': function (_0x18664b, _0x35c64a) {
        return _0x18664b === _0x35c64a;
    },
    'qeiSO': "ZqSBf",
    'lTvob': "Monel",
    'euTLd': function (_0x1e0564, _0x242fb4) {
        return _0x1e0564 + _0x242fb4;
    },
    'eXdTu': function (_0x1fdb36, _0x53556d) {
        return _0x1fdb36 <= _0x53556d;
    },
    'cLvfj': function (_0x487b4b, _0x21c74c) {
        return _0x487b4b + _0x21c74c;
    },
    'klTQO': function (_0x3086ee, _0x436cb3) {
        return _0x3086ee >= _0x436cb3;
    },
    'GLFJd': function (_0x245a06, _0x2abbc9) {
        return _0x245a06 >= _0x2abbc9;
    },
    'Unybk': "rDEdu",
    'myZnS': "fAqjv",
    'SHfMk': function (_0x62a593, _0x11d802) {
        return _0x62a593 !== _0x11d802;
    },
    'RWLDq': "IjVPl",
    'xuCJW': function (_0x3fe2b6, _0x493fa5) {
        return _0x3fe2b6 + _0x493fa5;
    },
    'fZYzJ': function (_0x154455, _0x4ea8b1) {
        return _0x154455 + _0x4ea8b1;
    },
    'BEzdK': "nHhOb",
    'skYkW': "TrANl",
    'eepbn': "MYqCE",
    'cdeZu': function (_0x2c3035, _0x3bb50a) {
        return _0x2c3035 + _0x3bb50a;
    },
    'LoqVM': function (_0x30e068, _0x29bb28) {
        return _0x30e068 + _0x29bb28;
    },
    'HFFQk': function (_0x2c4a6a, _0x27c4aa) {
        return _0x2c4a6a + _0x27c4aa;
    },
    'duuQQ': function (_0x3f386a, _0x5d45a5) {
        return _0x3f386a + _0x5d45a5;
    },
    'RkTbM': function (_0x468de1, _0xdb472) {
        return _0x468de1 + _0xdb472;
    },
    'EYRQv': function (_0x1bf786, _0x5514ee) {
        return _0x1bf786 === _0x5514ee;
    },
    'aBHfW': "YBiFO",
    'BvRWI': function (_0x503bf1, _0x409090) {
        return _0x503bf1 + _0x409090;
    },
    'pnazg': function (_0x43ea4a, _0xadaa77) {
        return _0x43ea4a + _0xadaa77;
    },
    'DURlI': function (_0x127768, _0x87caa6) {
        return _0x127768 + _0x87caa6;
    },
    'aoVeq': "zqhtx",
    'Dfyxj': function (_0x151d33, _0x43300c) {
        return _0x151d33 + _0x43300c;
    },
    'JyNsk': function (_0x5426cb, _0x32f803) {
        return _0x5426cb + _0x32f803;
    },
    'PUneM': function (_0x468e6e, _0x51fae5) {
        return _0x468e6e + _0x51fae5;
    },
    'rYvpA': function (_0x4d2154, _0xdc2d4e) {
        return _0x4d2154 + _0xdc2d4e;
    },
    'xvYbB': function (_0x9393d3, _0x47ab3d) {
        return _0x9393d3 + _0x47ab3d;
    },
    'iwxze': function (_0x508b72, _0x3df569) {
        return _0x508b72 + _0x3df569;
    },
    'RbxIL': "rGBZG",
    'XWHNn': function (_0x2f0e03, _0x39b5ae) {
        return _0x2f0e03 + _0x39b5ae;
    },
    'kJzWJ': function (_0x5cc3db, _0x30626a) {
        return _0x5cc3db + _0x30626a;
    },
    'ESSlg': function (_0x45f4ed, _0x3c5874) {
        return _0x45f4ed + _0x3c5874;
    },
    'aNGFU': function (_0x457c6b, _0x4e83bc) {
        return _0x457c6b + _0x4e83bc;
    },
    'ouPrp': function (_0x3b93ec, _0x18cdbe) {
        return _0x3b93ec + _0x18cdbe;
    },
    'oJduf': function (_0x43fea6, _0x9e82e3) {
        return _0x43fea6 !== _0x9e82e3;
    },
    'FnYnf': "vJolS",
    'bSiRp': "ESArX",
    'AaXpw': function (_0x128ee1, _0x33b170) {
        return _0x128ee1 + _0x33b170;
    },
    'tBnoz': function (_0x568f72, _0x4eba87) {
        return _0x568f72 + _0x4eba87;
    },
    'ZiSpc': function (_0x5ae12e, _0x40184e) {
        return _0x5ae12e + _0x40184e;
    },
    'KeClQ': function (_0x52673f, _0xfb693e) {
        return _0x52673f + _0xfb693e;
    },
    'DMVKq': function (_0x4fa54c, _0x50403f) {
        return _0x4fa54c + _0x50403f;
    },
    'aWNPr': "QfrYm",
    'hAzBH': "5|3|2|0|6|4|1",
    'xRmqD': function (_0x4971c4, _0x342b23) {
        return _0x4971c4 + _0x342b23;
    },
    'KUWuT': function (_0x2b7e91, _0xcbd4a5) {
        return _0x2b7e91 + _0xcbd4a5;
    },
    'KEVBk': function (_0x1f9a7c, _0x35c832) {
        return _0x1f9a7c + _0x35c832;
    },
    'QNuXW': function (_0x3aefff, _0xa43a3) {
        return _0x3aefff + _0xa43a3;
    },
    'hWaEb': function (_0x4f9f35, _0x1520dc) {
        return _0x4f9f35 + _0x1520dc;
    },
    'ewGMb': "gQqCP",
    'VJKpR': "gPFli",
    'YHFMS': "0|1|4|2|5|6|3",
    'cNVIn': function (_0x22ba15, _0x3cce36) {
        return _0x22ba15 + _0x3cce36;
    },
    'HNobZ': function (_0x188d5d, _0x5d0cb1) {
        return _0x188d5d + _0x5d0cb1;
    },
    'WxSjp': function (_0x9ab6fe, _0x1d2f54) {
        return _0x9ab6fe + _0x1d2f54;
    },
    'BExxi': function (_0xeb756a, _0x7a0449) {
        return _0xeb756a + _0x7a0449;
    },
    'pmhZn': function (_0x4bebd4, _0x347959) {
        return _0x4bebd4 + _0x347959;
    },
    'YXULY': function (_0x4178eb, _0x25d1ab, _0x1bab8e) {
        return _0x4178eb(_0x25d1ab, _0x1bab8e);
    },
    'VptAX': function (_0x4af288) {
        return _0x4af288();
    }
};

var c = function (_0x46a113) {
    var _0x103ecd = {
        'HfGKp': _0x330953["LSrnF"], 'sHJOG': function (_0x1a7d98, _0x108cb5) {
            return _0x330953["ICQEs"](_0x1a7d98, _0x108cb5);
        }, 'SZHCC': function (_0x25ff45, _0x2c7289) {
            return _0x330953["oStgz"](_0x25ff45, _0x2c7289);
        }, 'oXlME': function (_0x2d189f, _0x88eab1) {
            return _0x330953["Trnuj"](_0x2d189f, _0x88eab1);
        }
    };
    var wzwschallenge = "5d60fac72ec4c898a9ab0317efc4bca4";
    var wzwschallengex = "cmhsZWdkY2hi";
    var encoderchars = "7c3db032ad9cb0e7d4155ddffcbdd09095f2095c5dc406750fb99d3557d4723b";
    var _0x431029, _0xd40040, _0x44a147;
    var _0xdc8282, _0x4b2495, _0x2379b4;
    var _0x532f30;
    _0x44a147 = _0x46a113["length"];
    _0xd40040 = 0x0;
    _0x431029 = '';
    while (_0xd40040 < _0x44a147) {
        _0xdc8282 = _0x330953["fZrWV"](_0x46a113["charCodeAt"](_0xd40040++), 0xff);
        if (_0x330953["QwJZM"](_0xd40040, _0x44a147)) {
            if (_0x330953["WwkLl"](_0x330953["XGJWX"], _0x330953["XGJWX"])) {
                _0x431029 += encoderchars["charAt"](_0x330953["dRZTa"](_0xdc8282, 0x2));
                _0x431029 += encoderchars["charAt"](_0x330953["JfwGr"](_0x330953["fZrWV"](_0xdc8282, 0x3), 0x4));
                _0x431029 += '==';
                break;
            } else {
                b = ds;
            }
        }
        _0x4b2495 = _0x46a113["charCodeAt"](_0xd40040++);
        if (_0x330953["QwJZM"](_0xd40040, _0x44a147)) {
            if (_0x330953["isYMm"](_0x330953["VDlMX"], _0x330953["VDlMX"])) {
                _0x431029 += encoderchars["charAt"](_0x330953["dRZTa"](_0xdc8282, 0x2));
                _0x431029 += encoderchars["charAt"](_0x330953["pZTBa"](_0x330953["Gnrmu"](_0x330953["maAPi"](_0xdc8282, 0x3), 0x4), _0x330953["dRZTa"](_0x330953["maAPi"](_0x4b2495, 0xf0), 0x4)));
                _0x431029 += encoderchars["charAt"](_0x330953["Gnrmu"](_0x330953["maAPi"](_0x4b2495, 0xf), 0x2));
                _0x431029 += '=';
                break;
            } else {
                self["receiveEvent"](_0x103ecd["HfGKp"], null);
            }
        }
        _0x2379b4 = _0x46a113["charCodeAt"](_0xd40040++);
        _0x431029 += encoderchars["charAt"](_0x330953["dRZTa"](_0xdc8282, 0x2));
        _0x532f30 = _0x330953["maAPi"](_0xdc8282, 0x3);
        _0x532f30 = _0x330953["GtHyF"](_0x330953["rBWzD"](_0xdc8282, 0x3), 0x4);
        _0x532f30 = _0x330953["IxLPh"](_0x4b2495, 0xf0);
        _0x532f30 = _0x330953["kaMoe"](_0x330953["IxLPh"](_0x4b2495, 0xf0), 0x4);
        _0x532f30 = _0x330953["CJhgW"](_0x330953["WurUS"](_0x330953["IxLPh"](_0xdc8282, 0x3), 0x4), _0x330953["kaMoe"](_0x330953["IxLPh"](_0x4b2495, 0xf0), 0x4));
        _0x431029 += encoderchars["charAt"](_0x330953["AatBj"](_0x330953["oJDFF"](_0x330953["lXdui"](_0xdc8282, 0x3), 0x4), _0x330953["kaMoe"](_0x330953["lXdui"](_0x4b2495, 0xf0), 0x4)));
        _0x431029 += encoderchars["charAt"](_0x330953["AatBj"](_0x330953["bYTQZ"](_0x330953["KLTjl"](_0x4b2495, 0xf), 0x2), _0x330953["kaMoe"](_0x330953["KBAli"](_0x2379b4, 0xc0), 0x6)));
        _0x431029 += encoderchars["charAt"](_0x330953["KBAli"](_0x2379b4, 0x3f));
    }
    var _0x38e488 = 0x0;

    return _0x330953["uKZvQ"](_0x431029, _0x38e488);
}

var moveTo=function(n){
    encrypt(c(n))
}
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
    print(moveTo("qwert"))