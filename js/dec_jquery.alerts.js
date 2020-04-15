String["prototype"]["trim"] = function () {
    return this["replace"](/(^\s*)|(\s*$)/g, '');
};
(function (_0x1e7c95) {
    _0x1e7c95["alerts"] = {
        'verticalOffset': -0x4b,
        'horizontalOffset': 0x0,
        'repositionOnResize': !![],
        'overlayOpacity': 0.7,
        'overlayColor': "#000",
        'draggable': ![],
        'okButton': '&nbsp;确定&nbsp;',
        'cancelButton': "&nbsp;取消&nbsp;",
        'dialogClass': null,
        'alert': function (_0x28b48a, _0x5287ef, _0x18f32b) {
            if (_0x5287ef == null) _0x5287ef = "Alert";
            _0x1e7c95["alerts"]['_show'](_0x5287ef, _0x28b48a, null, "alert", function (_0x3bb677) {
                if (_0x18f32b) _0x18f32b(_0x3bb677);
            });
        },
        'confirm': function (_0x991bf7, _0x29d730, _0x23aa6d) {
            if (_0x29d730 == null) _0x29d730 = "Confirm";
            _0x1e7c95['alerts']["_show"](_0x29d730, _0x991bf7, null, "confirm", function (_0x12deb8) {
                if (_0x23aa6d) _0x23aa6d(_0x12deb8);
            });
        },
        'prompt': function (_0x120b85, _0x508538, _0x3f8b15, _0x2bc424) {
            if (_0x3f8b15 == null) _0x3f8b15 = 'Prompt';
            _0x1e7c95["alerts"]['_show'](_0x3f8b15, _0x120b85, _0x508538, 'prompt', function (_0x485853) {
                if (_0x2bc424) _0x2bc424(_0x485853);
            });
        },
        '_show': function (_0x54c37b, _0xcb9724, _0x1102a9, _0x3e1dc7, _0x3f4a13) {
            _0x1e7c95["alerts"]["_hide"]();
            _0x1e7c95["alerts"]["_overlay"]("show");
            _0x1e7c95("BODY")["append"]("<div id='popup_container'>" + "<h1 id='popup_title'></h1>" + "<div id='popup_content'>" + "<div id='popup_message'></div>" + "</div>" + "</div>");
            if (_0x1e7c95["alerts"]['dialogClass']) _0x1e7c95("#popup_container")["addClass"](_0x1e7c95["alerts"]["dialogClass"]);
            var _0x1bab23 = "fixed";
            _0x1e7c95("#popup_container")['css']({
                'position': _0x1bab23,
                'zIndex': 0x1869f,
                'padding': 0x0,
                'margin': 0x0
            });
            _0x1e7c95("#popup_title")["text"](_0x54c37b);
            _0x1e7c95("#popup_content")['addClass'](_0x3e1dc7);
            _0x1e7c95("#popup_message")["text"](_0xcb9724);
            _0x1e7c95("#popup_message")["html"](_0x1e7c95('#popup_message')["text"]()["replace"](/\n/g, "<br />"));
            _0x1e7c95("#popup_container")["css"]({
                'minWidth': _0x1e7c95("#popup_container")["outerWidth"](),
                'maxWidth': _0x1e7c95("#popup_container")["outerWidth"]()
            });
            _0x1e7c95["alerts"]["_reposition"]();
            _0x1e7c95['alerts']["_maintainPosition"](!![]);
            switch (_0x3e1dc7) {
                case "alert":
                    _0x1e7c95("#popup_message")["after"]("<div id='popup_panel'><input type='button' value='' + _0x1e7c95['alerts']['okButton'] + '' id='popup_ok' class='bluebtn'/></div>");
                    _0x1e7c95("#popup_ok")["click"](function () {
                        _0x1e7c95["alerts"]['_hide']();
                        _0x3f4a13(!![]);
                    });
                    _0x1e7c95('#popup_ok')["focus"]()["keypress"](function (_0x20ba34) {
                        if (_0x20ba34["keyCode"] == 0xd || _0x20ba34["keyCode"] == 0x1b) _0x1e7c95("#popup_ok")["trigger"]('click');
                    });
                    break;
                case "confirm":
                    _0x1e7c95('#popup_message')["after"]("<div id='popup_panel'><input type='button' value='' + _0x1e7c95['alerts']['okButton'] + '' id='popup_ok' class='bluebtn'/> <input type='button' value='' + _0x1e7c95['alerts']['cancelButton'] + '' id='popup_cancel' class='bluebtn'/></div>");
                    _0x1e7c95("#popup_ok")["click"](function () {
                        _0x1e7c95["alerts"]['_hide']();
                        if (_0x3f4a13) _0x3f4a13(!![]);
                    });
                    _0x1e7c95("#popup_cancel")['click'](function () {
                        _0x1e7c95["alerts"]["_hide"]();
                        if (_0x3f4a13) _0x3f4a13(![]);
                    });
                    _0x1e7c95('#popup_ok')['focus']();
                    _0x1e7c95("#popup_ok, #popup_cancel")['keypress'](function (_0x40ce4a) {
                        if (_0x40ce4a["keyCode"] == 0xd) _0x1e7c95("#popup_ok")["trigger"]('click');
                        if (_0x40ce4a["keyCode"] == 0x1b) _0x1e7c95("#popup_cancel")["trigger"]('click');
                    });
                    break;
                case "prompt":
                    _0x1e7c95("#popup_message")["append"]("<br /><input type='text' size='30' id='popup_prompt' />')['after']('<div\x20id=\x22popup_panel\x22><input\x20type=\x22button\x22\x20value=\x22' + _0x1e7c95['alerts']['okButton'] + '' id='popup_ok' /> <input type='button' value='' + _0x1e7c95['alerts']['cancelButton'] + '' id='popup_cancel' /></div>");
                    _0x1e7c95("#popup_prompt")["width"](_0x1e7c95("#popup_message")["width"]());
                    _0x1e7c95("#popup_ok")["click"](function () {
                        var _0xf33486 = _0x1e7c95("#popup_prompt")["val"]();
                        _0x1e7c95['alerts']['_hide']();
                        if (_0x3f4a13) _0x3f4a13(_0xf33486);
                    });
                    _0x1e7c95("#popup_cancel")["click"](function () {
                        _0x1e7c95["alerts"]["_hide"]();
                        if (_0x3f4a13) _0x3f4a13(null);
                    });
                    _0x1e7c95("#popup_prompt, #popup_ok, #popup_cancel")['keypress'](function (_0x466772) {
                        if (_0x466772["keyCode"] == 0xd) _0x1e7c95("#popup_ok")["trigger"]("click");
                        if (_0x466772['keyCode'] == 0x1b) _0x1e7c95('#popup_cancel')["trigger"]("click");
                    });
                    if (_0x1102a9) _0x1e7c95("#popup_prompt")["val"](_0x1102a9);
                    _0x1e7c95("#popup_prompt")["focus"]()["select"]();
                    break;
            }
            if (_0x1e7c95['alerts']["draggable"]) {
                try {
                    _0x1e7c95("#popup_container")["draggable"]({'handle': _0x1e7c95('#popup_title')});
                    _0x1e7c95('#popup_title')["css"]({'cursor': "move"});
                } catch (_0x44473e) {
                }
            }
        },
        '_hide': function () {
            _0x1e7c95("#popup_container")["remove"]();
            _0x1e7c95['alerts']["_overlay"]("hide");
            _0x1e7c95["alerts"]["_maintainPosition"](![]);
        },
        '_overlay': function (_0x57d546) {
            switch (_0x57d546) {
                case "show":
                    _0x1e7c95["alerts"]["_overlay"]("hide");
                    _0x1e7c95("BODY")["append"]("<div id='popup_overlay'></div>");
                    _0x1e7c95("#popup_overlay")["css"]({
                        'position': 'absolute',
                        'zIndex': 0x1869e,
                        'top': "0px",
                        'left': "0px",
                        'width': "100%",
                        'height': _0x1e7c95(document)["height"](),
                        'background': _0x1e7c95["alerts"]['overlayColor'],
                        'opacity': _0x1e7c95["alerts"]["overlayOpacity"]
                    });
                    break;
                case "hide":
                    _0x1e7c95("#popup_overlay")["remove"]();
                    break;
            }
        },
        '_reposition': function () {
            var _0x29a8b9 = _0x1e7c95(window)["height"]() / 0x2 - _0x1e7c95("#popup_container")["outerHeight"]() / 0x2 + _0x1e7c95["alerts"]["verticalOffset"];
            var _0x22ed28 = _0x1e7c95(window)["width"]() / 0x2 - _0x1e7c95('#popup_container')["outerWidth"]() / 0x2 + _0x1e7c95["alerts"]["horizontalOffset"];
            if (_0x29a8b9 < 0x0) _0x29a8b9 = 0x0;
            if (_0x22ed28 < 0x0) _0x22ed28 = 0x0;
            _0x1e7c95('#popup_container')["css"]({'top': _0x29a8b9 + 'px', 'left': _0x22ed28 + 'px'});
            _0x1e7c95('#popup_overlay')["height"](_0x1e7c95(document)["height"]());
        },
        '_maintainPosition': function (_0x25ce47) {
            if (_0x1e7c95["alerts"]["repositionOnResize"]) {
                switch (_0x25ce47) {
                    case!![]:
                        _0x1e7c95(window)["bind"]("resize", _0x1e7c95["alerts"]['_reposition']);
                        break;
                    case![]:
                        _0x1e7c95(window)["unbind"]("resize", _0x1e7c95["alerts"]['_reposition']);
                        break;
                }
            }
        }
    };
    jAlert = function (_0x4e0504, _0xc67bea, _0x1cf495) {
        _0x1e7c95["alerts"]['alert'](_0x4e0504, _0xc67bea, _0x1cf495);
    };
    jConfirm = function (_0x2291e3, _0x44337e, _0x3f57ad) {
        _0x1e7c95['alerts']['confirm'](_0x2291e3, _0x44337e, _0x3f57ad);
    };
    jPrompt = function (_0x3ea78d, _0x1d7370, _0x370b14, _0x1371b8) {
        _0x1e7c95["alerts"]['prompt'](_0x3ea78d, _0x1d7370, _0x370b14, _0x1371b8);
    };
}(jQuery));

function checkPass(_0x4a8f16) {
    var _0x392377 = 0x0;
    if (_0x4a8f16["match"](/([a-z])+/)) {
        _0x392377++;
    }
    if (_0x4a8f16["match"](/([0-9])+/)) {
        _0x392377++;
    }
    if (_0x4a8f16["match"](/([A-Z])+/)) {
        _0x392377++;
    }
    if (_0x4a8f16["match"](/[^a-zA-Z0-9]+/)) {
        _0x392377++;
    }
    return _0x392377;
}

function afcdm(_0x39ea20) {
    swjgmcft = 0x1;
    if (_0x39ea20["length"] == 0xa || _0x39ea20["length"] == 0xc) {
        var _0x23de2a = /^[0-9]*$/;
        var _0x50cd12 = _0x23de2a["test"](_0x39ea20);
        if (_0x50cd12 == ![]) {
            $("#fpdmjy")["addClass"]("tip_common_wrong");
            $("#fpdmjy")["addClass"]('font_red');
            $("#fpdmjy")["html"]("发票代码有误!");
            return ![];
        } else {
            var _0x41efde = $("#fpdmjy")["attr"]("class");
            $("#fpdmjy")["removeClass"](_0x41efde);
            var _0x545d38 = getSwjg(_0x39ea20, 0x0);
            if (_0x545d38["length"] == 0x0) {
                $("#fpdmjy")['addClass']("tip_common_wrong");
                $("#fpdmjy")["addClass"]("font_red");
                $("#fpdmjy")["html"]("发票代码有误!");
                return ![];
            } else {
                if (!adm(_0x39ea20) || _0x545d38["length"] == 0x0) {
                    $("#fpdmjy")['addClass']("tip_common_wrong");
                    $("#fpdmjy")['addClass']('font_red');
                    $("#fpdmjy")["html"]("发票代码有误!");
                    return ![];
                } else {
                    $("#fpdmjy")["addClass"]("tip_common_right");
                    $("#fpdmjy")['html']('&nbsp;');
                    var _0x2668bf = $('#kjje')["val"]()["trim"]();
                    var _0x407962 = $('#kprq')["val"]()["trim"]();
                    fplx = alxd(_0x39ea20);
                    swjgmc = _0x545d38[0x0];
                    ip = _0x545d38[0x1];
                    if (fplx == '01' || fplx == '02' || fplx == '03' || fplx == '15' || fplx == '08') {
                        if (fplx == '02') {
                            $("#context")["text"]("合计金额：");
                            $("#kjjejy")["text"]("请输入合计金额");
                        } else if (fplx == '03') {
                            $("#context")["text"]('不含税价：');
                            $("#kjjejy")['text']("请输入不含税价");
                        } else if (fplx == '15') {
                            $("#context")['text']("车价合计：");
                            $("#kjjejy")["text"]("请输入车价合计");
                        } else {
                            $('#context')["text"]("开具金额(不含税)：");
                            $("#kjjejy")["text"]("请输入开具金额");
                        }
                        if (xsje != 0x1) {
                            $("#kjjejy")["removeClass"]();
                            $('#kjjejy')["addClass"]('tip_common');
                            if (fplx == '02') {
                                $("#context")["text"]("合计金额：");
                                $("#kjjejy")['text']("请输入合计金额");
                            } else if (fplx == '03') {
                                $("#context")["text"]("不含税价：");
                                $("#kjjejy")["text"]("请输入不含税价");
                            } else if (fplx == '15') {
                                $("#context")['text']("车价合计：");
                                $("#kjjejy")["text"]("请输入车价合计");
                            } else {
                                $("#context")["text"]("开具金额(不含税)：");
                                $("#kjjejy")["text"]("请输入开具金额");
                            }
                        } else {
                            if (_0x2668bf != '') {
                                if (!aje(_0x39ea20, _0x2668bf)) {
                                    $("#kjjejy")["addClass"]("tip_common_wrong");
                                    $("#kjjejy")["addClass"]("font_red");
                                    if (fplx == '02') {
                                        $('#kjjejy')["html"]("合计金额有误!");
                                    } else if (fplx == '03') {
                                        $("#kjjejy")["html"]("不含税价有误!");
                                    } else if (fplx == '15') {
                                        $("#kjjejy")["html"]('车价合计有误!');
                                    } else {
                                        $("#kjjejy")['html']("开票金额有误!");
                                    }
                                } else {
                                    $("#kjjejy")['addClass']("tip_common_right");
                                    $("#kjjejy")['html']("&nbsp;");
                                }
                            }
                        }
                        xsje = 0x1;
                        if (_0x407962 != '') {
                            kprqChange(_0x407962);
                        }
                    } else if (fplx == '04' || fplx == '10' || fplx == '11' || fplx == '14') {
                        if (xsje != 0x0) {
                            $('#kjjejy')['removeClass']();
                            $("#kjjejy")["addClass"]("tip_common");
                            $("#context")["text"]("校验码：");
                            $("#kjje")["attr"]("maxlength", '6');
                            $("#kjjejy")["html"]("请输入校验码<font color='red' size='4'>后六位</font>");
                            xsje = 0x0;
                        }
                        if (_0x407962 != '') {
                            kprqChange(_0x407962);
                        }
                    }
                    var _0x1959c0 = $("#fphm")["val"]()["trim"]();
                    if (_0x1959c0 != '' && ahm(_0x1959c0) && yzmSj == '' && show_yzm == '') {
                        $("#yzm_img")["show"]();
                        getYzmXx();
                    }
                }
            }
        }
    }
}