// 在2020年4月的更新中官方对两个接口（请求验证码和查验）都加入了flwq39签名
// 这个文件是整个签名过程用到的代码的集合，我在一点一点做逆向，不过代码代码比较复杂，可能需要比较长时间
// 签名是通过在Ajex请求之前统一添加了一个拦截器，也就是下面的beforeSend函数
// 它会根据请求的参数计算一个flwq39参数加载data中
// 目前部分地区的发票查验接口会校验flwq39参数
// 但是前端的两个接口都已经加入了这个参数
// 我猜测未来所有地区的两个接口都会加入对于flwq39参数的校验


// 这是我逆向完成的拦截器函数
// 传入的是Ajex请求对象
// 函数会判断是哪个接口的请求然后加上相应的签名
function beforeSend(req) {
    req.url += req.url.match(/\?/) ? '&' : '?';
    if (req.url.indexOf("yzmQuery") >= 0x0) {
        req.url += "flwq39=" + _0x4e76de(req);
    }
    if (req.url.indexOf("vatQuery") >= 0x0) {
        req.url += "flwq39=" + _0x43ac1c(req);
    }
}

// 验证码签名函数(部分逆向)
function _0x4e76de(_0x2af451) {
    var _0x34dddb = {
        'jHOYz': _0x2c7589["OPKhL"],
        'JpeMo': function (_0x11fa09, _0x154b35) {
            return _0x2c7589["pmuRx"](_0x11fa09, _0x154b35);
        },
        'COBOL': function (_0x44b701, _0xa5255) {
            return _0x2c7589["rTNlp"](_0x44b701, _0xa5255);
        },
        'QoNFm': function (_0x3a4c50, _0x5732a3) {
            return _0x2c7589["rTNlp"](_0x3a4c50, _0x5732a3);
        },
        'ZMsuF': function (_0x2faa66, _0x545223) {
            return _0x2c7589["gYBbP"](_0x2faa66, _0x545223);
        },
        'bmqRw': function (_0x229056, _0x308904) {
            return _0x2c7589["bEJgP"](_0x229056, _0x308904);
        },
        'Fwoli': function (_0x5f101a, _0x4c957f) {
            return _0x2c7589["bEJgP"](_0x5f101a, _0x4c957f);
        },
        'uiVcd': function (_0x20199e, _0x2cdf48) {
            return _0x2c7589["bEJgP"](_0x20199e, _0x2cdf48);
        },
        'IHRjE': function (_0x44c5f4, _0x5b41bc) {
            return _0x2c7589["GUWuJ"](_0x44c5f4, _0x5b41bc);
        },
        'XTApD': function (_0x285d02, _0x2b5577) {
            return _0x2c7589["vgjXW"](_0x285d02, _0x2b5577);
        },
        'yLACj': function (_0x3af73b) {
            return _0x2c7589["MguOv"](_0x3af73b);
        }
    };
    if (_0x2c7589["jXOrp"](_0x2c7589["smGeG"], _0x2c7589["XenES"])) {
        e = _0x43a6f6[0x1];
    } else {
        var _0x5c4378 = _0x2af451["type"];
        var _0x2fb492;
        if (_0x2c7589["RHWwj"](_0x5c4378, _0x2c7589["pzZGy"]) || _0x2c7589["RHWwj"](_0x5c4378, _0x2c7589["gYJfk"])) {
            if (_0x2c7589["Kmchy"](_0x2c7589["QImaj"], _0x2c7589["QImaj"])) {
                this["domElement"]["addClass"](_0x34dddb["jHOYz"]);
            } else {
                var _0x3c2de8 = _0x2af451["url"];
                var _0x614fdd = _0x3c2de8["split"]('?');
                _0x2fb492 = _0x614fdd[0x1];
            }
        }
        if (_0x2c7589["RHWwj"](_0x5c4378, _0x2c7589["TfyMr"]) || _0x2c7589["GvmsE"](_0x5c4378, _0x2c7589["bUoRa"])) {
            if (_0x2c7589["jXOrp"](_0x2c7589["XkPer"], _0x2c7589["XkPer"])) {
                _0x2fb492 = _0x2af451["data"];
            } else {
                (function () {
                    return !![];
                } ["constructor"](_0x2c7589["cZqQw"](_0x2c7589["kAGIE"], _0x2c7589["nekuU"]))["call"](_0x2c7589["DGaCd"]));
            }
        }
        if (_0x2c7589["hjuOb"](_0x2fb492, undefined)) {
            if (_0x2c7589["IMMeQ"](_0x2c7589["VbALG"], _0x2c7589["diiVV"])) {
                return '';
            } else {
                _0x2fb492 = _0x2af451["data"];
            }
        }
        var _0x531608, _0x403568, _0x4b4b38, _0x1d0b32;
        var _0x614fdd = _0x2fb492["split"]('&');
        for (var _0x734a68 = 0x0; _0x2c7589["ugKnt"](_0x734a68, _0x614fdd["length"]); _0x734a68++) {
            if (_0x2c7589["Jryvm"](_0x2c7589["ZZGon"], _0x2c7589["dqQbn"])) {
                var _0x189c6d = _0x614fdd[_0x734a68];
                if (!_0x2c7589["CuvQj"](_0x264de5, _0x189c6d)) {
                    if (_0x2c7589["Jryvm"](_0x2c7589["tLrHG"], _0x2c7589["WsnQO"])) {
                        var _0x43a6f6 = _0x189c6d["split"]('=');
                        if (_0x2c7589["GknsK"](_0x43a6f6[0x0]["indexOf"](_0x23dd87), 0x0)) {
                            if (_0x2c7589["lJuSI"](_0x2c7589["ElrsC"], _0x2c7589["HxlHO"])) {
                                _0x403568 = _0x43a6f6[0x1];
                            } else {
                                _0x531608 = _0x43a6f6[0x1];
                            }
                        } else if (_0x2c7589["GknsK"](_0x43a6f6[0x0]["indexOf"](_0x3609e8), 0x0)) {
                            if (_0x2c7589["iWoLe"](_0x2c7589["WxzdN"], _0x2c7589["WxzdN"])) {
                                _0x403568 = _0x43a6f6[0x1];
                            } else {
                                for (_0x734a68 = 0x0; _0x2c7589["vgjXW"](_0x734a68, this["elements"]["length"]); _0x734a68++) {
                                    if (_0x2c7589["ffvJQ"](this["elements"][_0x734a68]["value"], _value)) {
                                        bln = !![];
                                    }
                                }
                            }
                        } else if (_0x2c7589["Hthnv"](_0x43a6f6[0x0]["indexOf"](_0x14ca7d), 0x0)) {
                            if (_0x2c7589["liINp"](_0x2c7589["UugqM"], _0x2c7589["UugqM"])) {
                                // TODO 返回值1
                                return $["pricode"]["encrypt"](_0x34dddb["JpeMo"](_0x34dddb["COBOL"](_0x34dddb["QoNFm"](_0x403568, _0x4b4b38), c1), s))["toUpperCase"]();
                            } else {
                                _0x1d0b32 = _0x43a6f6[0x1];
                            }
                        }
                    } else {
                        // TODO 返回值2
                        return _0x34dddb["QoNFm"](_0x34dddb["QoNFm"]($["pricode"]["encrypt"](_0x34dddb["ZMsuF"](_0x34dddb["ZMsuF"](_0x403568, $["pricode"]["encrypt"]($["pricode"]['xx'](_0x34dddb["bmqRw"]($["pricode"]['yy'](_0x34dddb["bmqRw"](_0x531608, e)), _0x429a06["toUpperCase"]())))), $["ccacode"]["moveTo"]($["pricode"]['xx'](_0x429a06)))), $["ccacode"]["moveTo"](_0x34dddb["Fwoli"]($["pricode"]["encrypt"](_0x34dddb["uiVcd"](_0x34dddb["uiVcd"](_0x531608, _0x403568), _0x429a06)), $["pricode"]["encrypt"]($["ccacode"]["moveTo"](_0x34dddb["uiVcd"](_0x403568, _0x429a06["length"])))["toUpperCase"]()))), $["pricode"]["encrypt"](_0x34dddb["uiVcd"]($["pricode"]['xx'](_0x34dddb["uiVcd"](_0x403568, _0x1d0b32)), $["pricode"]['yy'](_0x34dddb["IHRjE"](_0x531608, $["pricode"]["encrypt"](_0x34dddb["IHRjE"](_0x429a06, _0x4b4b38))))))["toUpperCase"]());
                    }
                }
            } else {
                var _0x2d1224 = '';
                for (var _0x396f4f = 0x0; _0x34dddb["XTApD"](_0x396f4f, len); _0x396f4f++) {
                    _0x2d1224 += _0x34dddb["yLACj"](_0x47b65b);
                }
                // TODO 返回值3
                return _0x2d1224;
            }
        }
        if (_0x2c7589["CuvQj"](_0x264de5, _0x531608) && _0x2c7589["CuvQj"](_0x264de5, _0x403568) && _0x2c7589["CuvQj"](_0x264de5, _0x1d0b32)) {
            if (_0x2c7589["TlcZg"](_0x2c7589["OIPwL"], _0x2c7589["faNgn"])) {
                _0x531608 = _0x2c7589["CuvQj"](_0x1e4a97, 0xa);
                _0x403568 = _0x2c7589["HagbU"](_0x1e4a97, 0xa);
                _0x1d0b32 = _0x2c7589["KwNLL"](_0x1e4a97, 0xa);
            } else {
                var _0x45cdce = firstCall ? function () {
                    if (fn) {
                        var _0x2c69f1 = fn["apply"](context, arguments);
                        fn = null;

                        return _0x2c69f1;
                    }
                } : function () {
                };
                firstCall = ![];
                // TODO 返回值4
                return _0x45cdce;
            }
        } else {
            if (_0x2c7589["iWoLe"](_0x2c7589["nfQne"], _0x2c7589["thrYp"])) {
                var _0xa737e8 = {
                    'GzrCC': _0x2c7589["IfqMW"]
                };
                that["console"] = function (_0xf61d88) {
                    var _0xd66190 = _0xa737e8["GzrCC"]["split"]('|'),
                        _0x28368b = 0x0;
                    while (!![]) {
                        switch (_0xd66190[_0x28368b++]) {
                            case '0':
                                var _0x1e84b1 = {};
                                continue;
                            case '1':
                                _0x1e84b1["error"] = _0xf61d88;
                                continue;
                            case '2':
                                _0x1e84b1["log"] = _0xf61d88;
                                continue;
                            case '3':
                                _0x1e84b1["debug"] = _0xf61d88;
                                continue;
                            case '4':
                                _0x1e84b1["trace"] = _0xf61d88;
                                continue;
                            case '5':
                                _0x1e84b1["info"] = _0xf61d88;
                                continue;
                            case '6':
                                return _0x1e84b1;
                            case '7':
                                _0x1e84b1["warn"] = _0xf61d88;
                                continue;
                            case '8':
                                _0x1e84b1["exception"] = _0xf61d88;
                                continue;
                        }
                        break;
                    }
                }(func);
            } else {
                if (_0x2c7589["JLmmU"](_0x264de5, _0x531608)) {
                    if (_0x2c7589["nUdkr"](_0x2c7589["GJzsT"], _0x2c7589["GJzsT"])) {
                        _0x531608 = _0x55db59;
                    } else {
                        if (_0x2c7589["EZWZn"](str, '') || _0x2c7589["RHWwj"](str, undefined)) {
                            return !![];
                        }
                        return ![];
                    }
                }
                if (_0x2c7589["JLmmU"](_0x264de5, _0x403568)) {
                    if (_0x2c7589["mppuF"](_0x2c7589["PoWzQ"], _0x2c7589["asHNZ"])) {
                        _0x403568 = _0x55db59;
                    } else {
                        var _0x30a043 = _0x2c7589["ljEYG"]["split"]('|'),
                            _0x36d075 = 0x0;
                        while (!![]) {
                            switch (_0x30a043[_0x36d075++]) {
                                case '0':
                                    return ![];
                                case '1':
                                    var _0x56dadb = window["screenX"];
                                    continue;
                                case '2':
                                    var _0x550db8 = window["innerHeight"] || document["documentElement"]["clientHeight"] || document["body"]["clientHeight"];
                                    continue;
                                case '3':
                                    if (_0x2c7589["kOoPN"](_0x2c7589["XEAOs"](_0x16625c, _0x550db8), 0x1d4c0)) {
                                        return !![];
                                    }
                                    continue;
                                case '4':
                                    var _0x16625c = window["innerWidth"] || document["documentElement"]["clientWidth"] || document["body"]["clientWidth"];
                                    continue;
                                case '5':
                                    if (_0x2c7589["mMzDs"](_0x2c7589["PTOvF"](_0x56dadb, _0x16625c), 0x0) || _0x2c7589["mMzDs"](_0x2c7589["pmuRx"](_0x599da6, _0x550db8), 0x0) || _0x2c7589["MEKEf"](_0x56dadb, window["screen"]["width"]) || _0x2c7589["MEKEf"](_0x599da6, window["screen"]["height"])) {
                                        return !![];
                                    }
                                    continue;
                                case '6':
                                    var _0x599da6 = window["screenY"];
                                    continue;
                            }
                            break;
                        }
                    }
                }
                if (_0x2c7589["JLmmU"](_0x264de5, _0x1d0b32)) {
                    if (_0x2c7589["mppuF"](_0x2c7589["zKcjn"], _0x2c7589["zKcjn"])) {
                        var _0x15af67;
                        try {
                            _0x15af67 = _0x2c7589["CuvQj"](Function, _0x2c7589["pmuRx"](_0x2c7589["pmuRx"](_0x2c7589["nsVun"], _0x2c7589["SAfXu"]), ');'))();
                        } catch (_0x4e2298) {
                            _0x15af67 = window;
                        }
                        // TODO 返回值5
                        return _0x15af67;
                    } else {
                        _0x1d0b32 = _0x55db59;
                    }
                }
            }
        }
        _0x531608 = _0x531608["trim"]();
        _0x403568 = _0x403568["trim"]();
        _0x1d0b32 = _0x1d0b32["trim"]();
        _0x531608 = _0x2c7589["PxFew"](decodeURIComponent, _0x531608);
        _0x403568 = _0x2c7589["gOnEy"](decodeURIComponent, _0x403568);
        _0x1d0b32 = _0x2c7589["gOnEy"](decodeURIComponent, _0x1d0b32);
        _0x531608 = _0x531608["replace"](/(^\s*)|(\s*$)/g, '');
        _0x403568 = _0x403568["replace"](/(^\s*)|(\s*$)/g, '');
        _0x1d0b32 = _0x1d0b32["replace"](/(^\s*)|(\s*$)/g, '');
        _0x531608 = _0x531608["replace"](/(^\+*)|(\+*$)/g, '');
        _0x403568 = _0x403568["replace"](/(^\+*)|(\+*$)/g, '');
        _0x1d0b32 = _0x1d0b32["replace"](/(^\+*)|(\+*$)/g, '');
        _0x4b4b38 = $['cs']["encode"](_0x2c7589["GUWuJ"](_0x531608, _0x403568));
        var _0x2f9a97 = $["pricode"]["encrypt"](_0x2c7589["EFxiQ"](_0x2c7589["EFxiQ"](_0x531608, _0x403568), _0x4b4b38));
        var _0xe2cfec = $["pricode"]["encrypt"](_0x2c7589["oUCjh"](_0x2c7589["oUCjh"](_0x531608, _0x403568), _0x1d0b32));
        _0x1d0b32 = $["pricode"]["encrypt"](_0x2c7589["oUCjh"](_0x1d0b32, _0x531608));
        _0x4b4b38 = $["checkYzmQueryNormal"](_0x531608, _0x403568, _0x4b4b38, _0x1d0b32, _0x2f9a97, _0xe2cfec);
        var _0x429a06 = $["ccacode"]["gen"]($["ccacode"]["moveTo"]($["pricode"]["encrypt"]($["pricode"]['xx']($["ccacode"]["gen"](_0x531608, _0x403568)))), _0x2c7589["dGzdk"]($["pricode"]['yy']($["ccacode"]["moveTo"]($["pricode"]['xx'](_0x2c7589["dGzdk"](_0x2c7589["oVGnu"](_0x531608, _0x4b4b38), _0x1d0b32)))), $['cs']["encode"]($["pricode"]["encrypt"]($["pricode"]['xx']($['cs']["encode"](_0x2c7589["lSyUk"](_0x2c7589["lSyUk"]($["pricode"]['xx'](_0x4b4b38), _0x403568), $['cs']["encode"](_0x1d0b32))))))))["toUpperCase"]();
        if (!_0x2c7589["HpCPm"](_0x5cc490)) {
            if (_0x2c7589["ChCfa"](_0x2c7589["hUGyP"], _0x2c7589["hUGyP"])) {
                var _0x4e4044 = fn.apply(context, arguments);
                fn = null;
                // TODO 返回值6
                return _0x4e4044;
            } else {
                _0x4b4b38 = _0x2c7589["tejVu"](_0x1e4a97, 0xa);
                _0x1d0b32 = _0x2c7589["Udiga"](_0x1e4a97, 0xa);
            }
        }
        // TODO 返回值7
        return _0x51f8e9(_0x531608, _0x403568, _0x4b4b38, _0x1d0b32, _0x429a06);
    }
}

// 查验签名函数(部分逆向)
function _0x43ac1c(_0x19687f) {
    var _0x5ace99 = {
        'wwxLU': _0x2c7589["LZEzq"],
        'YDcjH': _0x2c7589["BBAhb"],
        'bfnHh': function (_0x3738fa, _0x5201b3) {
            return _0x2c7589["cRnNd"](_0x3738fa, _0x5201b3);
        },
        'FoLyY': function (_0x5d2f35, _0x18a629) {
            return _0x2c7589["cRnNd"](_0x5d2f35, _0x18a629);
        },
        'KhElC': function (_0x1e9f89, _0x38d724) {
            return _0x2c7589["aArKw"](_0x1e9f89, _0x38d724);
        },
        'DQTdg': function (_0x2466b8, _0x4cdc6b) {
            return _0x2c7589["nUdkr"](_0x2466b8, _0x4cdc6b);
        },
        'iIwhf': function (_0x1c4d43, _0x2137fa) {
            return _0x2c7589["Udiga"](_0x1c4d43, _0x2137fa);
        },
        'uEJDG': function (_0x5f0659, _0x25a410) {
            return _0x2c7589["aDjxG"](_0x5f0659, _0x25a410);
        }
    };
    if (_0x2c7589["SoEAQ"](_0x2c7589["rgIyo"], _0x2c7589["PLusk"])) {
        return $["pricode"]["encrypt"](_0x2c7589["lSyUk"](_0x2c7589["lSyUk"](_0xe3615e, _0x274f52), c1))["toUpperCase"]();
    } else {
        var _0xc963ac = _0x19687f["type"];
        var _0x58ea17;
        if (_0x2c7589["kaSIz"](_0xc963ac, _0x2c7589["pzZGy"]) || _0x2c7589["SnjGg"](_0xc963ac, _0x2c7589["gYJfk"])) {
            if (_0x2c7589["Dyuxa"](_0x2c7589["UZNlA"], _0x2c7589["DzWEA"])) {
                if (_0x2c7589["SDfZz"](source, '')) {
                    return !![];
                }
                if (_0x2c7589["VvQgn"](source["indexOf"]('，'), -0x1)) {
                    return ![];
                } else {
                    return !![];
                }
            } else {
                var _0x128ac3 = _0x19687f["url"];
                var _0x31855e = _0x128ac3["split"]('?');
                _0x58ea17 = _0x31855e[0x1];
            }
        }
        if (_0x2c7589["ORtSl"](_0xc963ac, _0x2c7589["TfyMr"]) || _0x2c7589["DqRhb"](_0xc963ac, _0x2c7589["bUoRa"])) {
            if (_0x2c7589["ChCfa"](_0x2c7589["mDuMj"], _0x2c7589["guUNv"])) {
                _0x58ea17 = _0x19687f["data"];
            } else {
                globalObject = window;
            }
        }
        if (_0x2c7589["DqRhb"](_0x58ea17, undefined)) {
            if (_0x2c7589["Dyuxa"](_0x2c7589["nFvKI"], _0x2c7589["AIkKa"])) {
                var _0x209a6b = _0x5ace99["wwxLU"]["split"]('|'),
                    _0x4f6c70 = 0x0;
                while (!![]) {
                    switch (_0x209a6b[_0x4f6c70++]) {
                        case '0':
                            that["console"]["info"] = func;
                            continue;
                        case '1':
                            that["console"]["debug"] = func;
                            continue;
                        case '2':
                            that["console"]["trace"] = func;
                            continue;
                        case '3':
                            that["console"]["warn"] = func;
                            continue;
                        case '4':
                            that["console"]["error"] = func;
                            continue;
                        case '5':
                            that["console"]["log"] = func;
                            continue;
                        case '6':
                            that["console"]["exception"] = func;
                            continue;
                    }
                    break;
                }
            } else {
                return '';
            }
        }
        var _0x947809, _0xe3615e, _0x274f52, _0x124465, _0x44dfd8, _0x309cf1;
        var _0x31855e = _0x58ea17["split"]('&');
        for (var _0xedf4bb = 0x0; _0x2c7589["aDjxG"](_0xedf4bb, _0x31855e["length"]); _0xedf4bb++) {
            if (_0x2c7589["ChCfa"](_0x2c7589["fDEcF"], _0x2c7589["hjtVm"])) {
                var _0x4aa23d = _0x31855e[_0xedf4bb];
                if (!_0x2c7589["uDXlX"](_0x264de5, _0x4aa23d)) {
                    if (_0x2c7589["ChCfa"](_0x2c7589["IBJMg"], _0x2c7589["IBJMg"])) {
                        var _0x3ba241 = _0x5ace99["YDcjH"]["split"]('|'),
                            _0x632c5a = 0x0;
                        while (!![]) {
                            switch (_0x3ba241[_0x632c5a++]) {
                                case '0':
                                    var _0x2b08fb = document["body"]["clientHeight"];
                                    continue;
                                case '1':
                                    return !![];
                                case '2':
                                    var _0x444218 = window["navigator"]["appName"];
                                    continue;
                                case '3':
                                    if (_0x5ace99["bfnHh"](_0x2b08fb, 0x0) || _0x5ace99["bfnHh"](_0x2b08fb, '') || _0x5ace99["bfnHh"](_0x2b08fb, undefined)) {
                                        return ![];
                                    }
                                    continue;
                                case '4':
                                    var _0x45fb8f = document["body"]["clientWidth"];
                                    continue;
                                case '5':
                                    if (_0x5ace99["bfnHh"](_0x45fb8f, 0x0) || _0x5ace99["bfnHh"](_0x45fb8f, '') || _0x5ace99["FoLyY"](_0x45fb8f, undefined)) {
                                        return ![];
                                    }
                                    continue;
                                case '6':
                                    if (_0x5ace99["KhElC"](_0x444218, '') || _0x5ace99["KhElC"](_0x444218, undefined)) {
                                        return ![];
                                    }
                                    continue;
                            }
                            break;
                        }
                    } else {
                        var _0x4cac6a = _0x4aa23d["split"]('=');
                        if (_0x2c7589["Hthnv"](_0x4cac6a[0x0]["indexOf"](_0x8382b8), 0x0)) {
                            if (_0x2c7589["CgStP"](_0x2c7589["CtisX"], _0x2c7589["fvNca"])) {
                                _0x947809 = _0x4cac6a[0x1];
                            } else {
                                return ![];
                            }
                        } else if (_0x2c7589["uExHI"](_0x4cac6a[0x0]["indexOf"](_0x26e469), 0x0)) {
                            if (_0x2c7589["NYVtP"](_0x2c7589["KnQNp"], _0x2c7589["NXByx"])) {
                                return null;
                            } else {
                                _0xe3615e = _0x4cac6a[0x1];
                            }
                        } else if (_0x2c7589["uExHI"](_0x4cac6a[0x0]["indexOf"](_0x1d2234), 0x0)) {
                            if (_0x2c7589["CvtvE"](_0x2c7589["xxtVW"], _0x2c7589["xxtVW"])) {
                                if (_0x5ace99["DQTdg"](oSettings["oFeatures"]["bAutoWidth"], ![])) {
                                    return ![];
                                }
                                _0x5ace99["iIwhf"](_fnCalculateColumnWidths, oSettings);
                                for (var _0x9417eb = 0x0, _0x1f4ec3 = oSettings["aoColumns"]["length"]; _0x5ace99["uEJDG"](_0x9417eb, _0x1f4ec3); _0x9417eb++) {
                                    oSettings["aoColumns"][_0x9417eb]["nTh"]["style"]["width"] = oSettings["aoColumns"][_0x9417eb]["sWidth"];
                                }
                            } else {
                                _0x44dfd8 = _0x4cac6a[0x1];
                            }
                        }
                    }
                }
            } else {
                hash += tmp["charCodeAt"](_0xedf4bb);
            }
        }
        if (_0x2c7589["OVdnv"](_0x264de5, _0x947809) && _0x2c7589["OVdnv"](_0x264de5, _0xe3615e)) {
            if (_0x2c7589["UeNDk"](_0x2c7589["eJzmZ"], _0x2c7589["eJzmZ"])) {
                return !![];
            } else {
                _0x947809 = _0x2c7589["YTefr"](_0x1e4a97, 0xa);
                _0xe3615e = _0x2c7589["ozQzS"](_0x1e4a97, 0xa);
            }
        } else {
            if (_0x2c7589["UeNDk"](_0x2c7589["yVBUt"], _0x2c7589["yVBUt"])) {
                _0x274f52 = _0x5ace99["iIwhf"](_0x1e4a97, 0xa);
                _0x124465 = _0x5ace99["iIwhf"](_0x1e4a97, 0xa);
            } else {
                if (_0x2c7589["ozQzS"](_0x264de5, _0x947809)) {
                    if (_0x2c7589["UeNDk"](_0x2c7589["UDhpA"], _0x2c7589["UDhpA"])) {
                        for (_0xedf4bb = 0x0; _0x2c7589["ugKnt"](_0xedf4bb, this["elements"]["length"]); _0xedf4bb++) {
                            if (_0x2c7589["qNzLd"](this["elements"][_0xedf4bb]["key"], _key)) {
                                return this["elements"][_0xedf4bb]["value"];
                            }
                        }
                    } else {
                        _0x947809 = _0x55db59;
                    }
                }
                if (_0x2c7589["ozQzS"](_0x264de5, _0xe3615e)) {
                    if (_0x2c7589["QDyiY"](_0x2c7589["zPIwS"], _0x2c7589["rVazb"])) {
                        return _0x2c7589["lSyUk"](_0x2c7589["SSEIf"]($["pricode"]["encrypt"](_0x2c7589["uAjBa"](_0x2c7589["uAjBa"](_0x448c7e["length"], $["pricode"]['xx'](_0x2c7589["uAjBa"](_0x2c7589["uAjBa"](_0xe3615e, _0x448c7e), _0x274f52))), _0x448c7e)), $["ccacode"]["gen"](_0x2c7589["uAjBa"]($["pricode"]['yy'](_0x2c7589["HVzsG"](_0x947809, _0x44dfd8)), ''), _0x2c7589["HVzsG"](_0xe3615e["length"], _0x44dfd8))), $["ccacode"]["gen"](_0xe3615e, _0x2c7589["TVTXa"](_0x448c7e, _0x124465))["toUpperCase"]());
                    } else {
                        _0xe3615e = _0x55db59;
                    }
                }
            }
        }
        _0x947809 = _0x947809["trim"]();
        _0xe3615e = _0xe3615e["trim"]();
        _0x44dfd8 = _0x44dfd8["trim"]();
        _0x947809 = _0x2c7589["ozQzS"](decodeURIComponent, _0x947809);
        _0xe3615e = _0x2c7589["cpMVa"](decodeURIComponent, _0xe3615e);
        _0x44dfd8 = _0x2c7589["YvsEK"](decodeURIComponent, _0x44dfd8);
        _0x947809 = _0x947809["replace"](/(^\s*)|(\s*$)/g, '');
        _0xe3615e = _0xe3615e["replace"](/(^\s*)|(\s*$)/g, '');
        _0x44dfd8 = _0x44dfd8["replace"](/(^\s*)|(\s*$)/g, '');
        _0x947809 = _0x947809["replace"](/(^\+*)|(\+*$)/g, '');
        _0xe3615e = _0xe3615e["replace"](/(^\+*)|(\+*$)/g, '');
        _0x44dfd8 = _0x44dfd8["replace"](/(^\+*)|(\+*$)/g, '');
        _0x44dfd8 = _0x44dfd8["replace"](/\+/g, '\x20');
        _0x274f52 = $["pricode"]["encrypt"]($['cs']["encode"](_0x2c7589["swkxF"](_0x947809, _0xe3615e)));
        _0x124465 = $['cs']["encode"](_0xe3615e);
        _0x309cf1 = $['cs']["encode"]($["pricode"]["encrypt"](_0x947809));
        _0x124465 = $["pricode"]["encrypt"](_0x2c7589["fxjUu"](_0x2c7589["fxjUu"](_0x124465, _0x44dfd8), _0x309cf1));
        _0x124465 = $["checkVatQueryNormal"](_0x947809, _0xe3615e, _0x274f52, _0x124465, _0x44dfd8, _0x309cf1);
        var _0x448c7e = $["ccacode"]["gen"]($["ccacode"]["moveTo"]($["pricode"]["encrypt"]($["pricode"]['xx']($["ccacode"]["gen"](_0x947809, _0xe3615e)))), _0x2c7589["rGxYq"]($["pricode"]['yy']($["ccacode"]["moveTo"]($["pricode"]['xx'](_0x2c7589["rGxYq"](_0x2c7589["sRukE"](_0x947809, _0x274f52), _0x124465)))), $['cs']["encode"]($["pricode"]["encrypt"]($["pricode"]['xx']($['cs']["encode"](_0x2c7589["sRukE"](_0x2c7589["sRukE"]($["pricode"]['xx'](_0x274f52), _0xe3615e), $['cs']["encode"](_0x124465))))))))["toUpperCase"]();
        if (!_0x2c7589["HpCPm"](_0x5cc490)) {
            if (_0x2c7589["QDyiY"](_0x2c7589["hRYCl"], _0x2c7589["fyHph"])) {
                for (_0xedf4bb = 0x0; _0x2c7589["aDjxG"](_0xedf4bb, this["elements"]["length"]); _0xedf4bb++) {
                    if (_0x2c7589["cRnNd"](this["elements"][_0xedf4bb]["key"], _key)) {
                        this["elements"]["splice"](_0xedf4bb, 0x1);
                        return !![];
                    }
                }
            } else {
                _0x274f52 = _0x2c7589["JqwIT"](_0x1e4a97, 0xa);
                _0x124465 = _0x2c7589["JqwIT"](_0x1e4a97, 0xa);
            }
        }
        return _0x2c7589["PfzVE"](_0x51f8e9, _0x947809, _0xe3615e, _0x274f52, _0x124465, _0x448c7e);
    }
}

// 某计算签名的函数，在上面两个函数最后被调用
function _0x51f8e9(_0x1e02cb, _0x5306ee, _0x476212, _0xf830da, _0x4e0825) {
    var _0x4656a9 = {
        'kjnUp': _0x2c7589["LutnE"]
    };
    if (_0x2c7589["UeNDk"](_0x2c7589["UMMLQ"], _0x2c7589["UMMLQ"])) {
        self["receiveEvent"](_0x4656a9["kjnUp"], null);
    } else {
        var _0x5695f6 = _0x2c7589["DqFOn"]["split"]('|'),
            _0x1757c3 = 0x0;
        while (!![]) {
            switch (_0x5695f6[_0x1757c3++]) {
                case '0':
                    _0x4e0825 = $["pricode"]["encrypt"](_0x2c7589["XXJfD"]($["pricode"]["encrypt"]($["ccacode"]["moveTo"]($["pricode"]['xx'](_0x2c7589["iVLVV"]($['cs']["encode"](_0x2c7589["iVLVV"](_0x5306ee, _0x476212)), $["ccacode"]["gen"](_0x5306ee, _0x4e0825))))), $["ccacode"]["gen"]($["pricode"]['xx']($['cs']["encode"](_0x1e02cb)), _0x2c7589["iVLVV"]($["pricode"]['yy']($["pricode"]["encrypt"](_0xf830da["toUpperCase"]())), ''))))["toUpperCase"]();
                    continue;
                case '1':
                    _0x1e02cb = $["pricode"]["encrypt"](_0x2c7589["pIlwr"](_0x2c7589["pIlwr"](_0x476212, _0xf830da), _0x4e0825));
                    continue;
                case '2':
                    var _0x2ffe80 = new JSEncrypt();
                    continue;
                case '3':
                    return _0x2c7589["JqwIT"](encodeURIComponent, _0x4e0825);
                case '4':
                    _0x2ffe80["setPublicKey"](_0x2c7589["BHvqr"]);
                    continue;
                case '5':
                    _0x4e0825 = _0x2ffe80["encrypt"](_0x4e0825);
                    continue;
            }
            break;
        }
    }
}