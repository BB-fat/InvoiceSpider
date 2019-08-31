$("#checkfp").click(function() {
    var fpdm = $("#fpdm").val().trim();
    var fphm = $("#fphm").val().trim();
    var kprq = $("#kprq").val().trim();
    var dmchek = getSwjg(fpdm, 1);
    var area = dmchek[2];
    if (dmchek.length > 0) {
        var DATE_FORMAT = /^[0-9]{4}[0-1]?[0-9]{1}[0-3]?[0-9]{1}$/;
        if (DATE_FORMAT.test(kprq)) {} else {
            jAlert("日期格式错误，为YYYYMMDD格式！", "提示");
            return
        }
        var kjje = $("#kjje").val().trim();
        if (aur()) {
            $('#checkfp').hide();
            $('#uncheckfp').show();
            var date = new Date();
            var yzm = $("#yzm").val().trim();
            var setText = "";
            var param = null;
            var url = "";
            if (avai(fplx)) {
                if (fplx == "01" || fplx == "02" || fplx == "03") {
                    var index = kjje.indexOf(".");
                    if (index > 0) {
                        var arr = kjje.split(".");
                        if (arr[1] == "00" || arr[1] == "0") {
                            kjje = arr[0]
                        } else if (arr[1].charAt(1) == "0") {
                            kjje = arr[0] + "." + arr[1].charAt(0)
                        }
                    }
                }
                var sjip = dmchek[1];
                url = sjip + "/vatQuery";
                param = {
                    'key1': fpdm,
                    'key2': fphm,
                    'key3': kprq,
                    'key4': kjje,
                    'fplx': fplx,
                    'yzm': yzm,
                    'yzmSj': yzmSj,
                    'index': jmmy,
                    'area': area,
                    'publickey': $.ck(fpdm, fphm, kprq, kjje, yzmSj, yzm)
                };
                if (oldweb == 1) {
                    url = sjip + "/invQuery";
                    param = {
                        'fpdm': fpdm,
                        'fphm': fphm,
                        'kprq': kprq,
                        'fpje': kjje,
                        'fplx': fplx,
                        'yzm': yzm,
                        'yzmSj': yzmSj,
                        'index': jmmy,
                        'area': area,
                        'publickey': $.ck(fpdm, fphm, kprq, kjje, yzmSj, yzm)
                    }
                }
                delayMessage = "发票查验请求失败!";
                showTime();
                $.ajax({
                    type: "post",
                    url: url,
                    dataType: "jsonp",
                    data: param,
                    jsonp: "callback",
                    success: function(jsonData) {
                        delayFlag = "1";
                        var cyjgdm = jsonData.key1;
                        if (cyjgdm == "1") {
                            show_yzm = "";
                            jAlert("该省尚未开通发票查验功能！", "提示")
                        } else if (cyjgdm == "001") {
                            show_yzm = "";
                            var key5 = jsonData.key5;
                            var hwxx = jsonData.key3;
                            var key2 = jsonData.key2;
                            var bz = jsonData.key4.trim();
                            if (key5 != "1") {
                                var signflag = $.vsign(fplx, fpdm, jsonData.key2, key5);
                                if (signflag) {
                                    key2 = $.endetail(fplx, fpdm, $.deinv(fplx, fpdm, jsonData.key2));
                                    hwxx = $.deinvkey(fplx, fpdm, jsonData.key3);
                                    bz = $.deinvrm(fplx, fpdm, bz)
                                } else {
                                    jAlert("系统异常，请重试！(07)", "系统错误");
                                    return
                                }
                            }
                            if (browser == "edge" || browser == "firefox") {
                                show_dialog(1100, 700, "cyjgedge" + fplx + ".html", fpdm + '≡' + fphm + '≡' + swjgmc + '≡' + key2 + '≡' + yzmSj + '≡≡≡HWXX≡≡≡' + hwxx + '≡≡≡HWXX≡≡≡' + bz)
                            } else if (browser == "ie8") {
                                sessionStorage["browser"] = "ie8";
                                var str = JSON.stringify(fpdm + '≡' + fphm + '≡' + swjgmc + '≡' + key2 + '≡' + yzmSj + '≡≡≡HWXX≡≡≡' + hwxx + '≡≡≡HWXX≡≡≡' + bz);
                                sessionStorage["result"] = str;
                                show_dialog(1100, 700, "cyjgedge" + fplx + ".html", fpdm + '≡' + fphm + '≡' + swjgmc + '≡' + key2 + '≡' + yzmSj + '≡≡≡HWXX≡≡≡' + hwxx + '≡≡≡HWXX≡≡≡' + bz)
                            } else {
                                window.showModalDialog('cyjg' + fplx + '.html', fpdm + '≡' + fphm + '≡' + swjgmc + '≡' + key2 + '≡' + yzmSj + '≡≡≡HWXX≡≡≡' + hwxx + '≡≡≡HWXX≡≡≡' + bz, "dialogTop:10px;dialogWidth:1100px;dialogHeight:700px;")
                            }
                        } else if (cyjgdm == "002") {
                            show_yzm = "";
                            jAlert("超过该张发票当日查验次数(请于次日再次查验)!", "提示")
                        } else if (cyjgdm == "003") {
                            show_yzm = "";
                            jAlert("发票查验请求太频繁，请稍后再试！", "提示")
                        } else if (cyjgdm == "004") {
                            show_yzm = "";
                            jAlert("超过服务器最大请求数，请稍后访问!", "提示")
                        } else if (cyjgdm == "005") {
                            show_yzm = "";
                            jAlert("请求不合法!", "提示")
                        } else if (cyjgdm == "020") {
                            show_yzm = "";
                            jAlert("由于查验行为异常，涉嫌违规，当前无法使用查验服务！", "提示")
                        } else if (cyjgdm == "006") {
                            var key2222 = jsonData.key2;
                            var key3333 = jsonData.key3;
                            show_yzm = "";
                            setText = "不一致";
                            param = {
                                'fplx': fplx,
                                'swjg': swjgmc,
                                'fpdm': fpdm,
                                'fphm': fphm,
                                'kprq': kprq,
                                'kjje': kjje,
                                'cysj': yzmSj,
                                'setText': setText,
                                'key2222': key2222,
                                'key3333': key3333
                            };
                            if (browser == "edge" || browser == "firefox") {
                                show_dialog(800, 400, "jgbyz.html", param)
                            } else {
                                window.showModalDialog('jgbyz.html', param, "dialogWidth:800px;dialogHeight:400px;center:yes;scroll:no")
                            }
                        } else if (cyjgdm == "007") {
                            show_yzm = "";
                            jAlert("验证码失效!", "提示")
                        } else if (cyjgdm == "008") {
                            show_yzm = "";
                            jAlert("验证码错误!", "提示")
                        } else if (cyjgdm == "009") {
                            var key2222 = jsonData.key2;
                            var key3333 = jsonData.key3;
                            show_yzm = "";
                            setText = "查无此票";
                            param = {
                                'fplx': fplx,
                                'swjg': swjgmc,
                                'fpdm': fpdm,
                                'fphm': fphm,
                                'kprq': kprq,
                                'kjje': kjje,
                                'cysj': yzmSj,
                                'setText': setText,
                                'key2222': key2222,
                                'key3333': key3333
                            };
                            if (browser == "edge" || browser == "firefox") {
                                show_dialog(800, 400, "jgbyz.html", param)
                            } else {
                                window.showModalDialog('jgbyz.html', param, "dialogWidth:800px;dialogHeight:400px;center:yes;scroll:no")
                            }
                        } else if (cyjgdm == "rqerr") {
                            show_yzm = "";
                            jAlert("当日开具发票可于次日进行查验！", "警告")
                        } else if (cyjgdm == "010") {
                            show_yzm = "";
                            var etype = jsonData.key2;
                            if (etype == 'inredis') {
                                etype = "(02)"
                            } else if (etype == 'weberr') {
                                etype = "(03)"
                            }
                            jAlert("系统异常，请重试！" + etype, "系统错误")
                        } else if (cyjgdm == "010_") {
                            show_yzm = "";
                            jAlert("系统异常，请重试！(05)", "系统错误")
                        } else if (key1 == "016") {
                            show_yzm = "";
                            jAlert("服务器接收的请求太频繁，请稍后再试！", "警告")
                        } else {
                            show_yzm = "";
                            jAlert("系统异常，请重试！(04)", "系统错误")
                        }
                        $('#uncheckfp').hide();
                        $('#checkfp').show()
                    },
                    timeout: 30000,
                    error: function(XMLHttpRequest, textStatus, errorThrown) {}
                })
            }
        }
    }
});
