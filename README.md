## 前言
这是一篇含金量很高的干货文章，笔者将手把手带领各位一步一步地实现爬取[国家税务总局全国增值税发票查验平台](https://inv-veri.chinatax.gov.cn/)（以下简称“查验平台”）。这个想法诞生在19年初，当时在做一款通过扫描二维码就可以查验发票的小程序。
![IMG0431.PNG](https://img.hacpai.com/file/2019/08/IMG0431-8d6498b5.PNG)
当时由于笔者学艺尚浅，没办法模拟请求爬取查验平台，所以最终采用的技术方案是通过web自动化测试工具**selenium**控制浏览器去模拟查验步骤，即使这样，开发过程也是困难重重，不过最后笔者和伙伴们成功实现了整套流程，最后开发出的产品**口袋发票**夺得了包括2019微信小程序开发大赛赛区三等奖在内的多个奖项。
但是产品是无法真正上线的，因为通过selenium爬虫的方式实在是太消耗性能了，测试结果表明：百度云4核8G的服务器职能同时服务10人以内。
笔者一直不甘心，暗自下定决心：一定要实现模拟请求爬取。
那么闲话少说，我们开始吧。

## 查一张发票
第一步肯定是分析查验平台整体的逻辑，所以我们首先来真实地查验一张发票。
这里笔者使用的是Chrome 76.0.3809.132，是本文发布时的最新版本。
![image.png](https://img.hacpai.com/file/2019/08/image-7c3163d0.png)
* 这里我找到了一张发票，首先输入发票号码
![image.png](https://img.hacpai.com/file/2019/08/image-823d5385.png)
我发现：当我的光标移动到发票号码输入框时发票代码右侧出现了一个对勾，这说明在发票代码失焦的时候会检测发票代码正确性，然后给用户一个反馈。
这是我在京东买书的发票，是在北京开具的，这里可以了解一下发票号码的含义：[百度百科](https://baike.baidu.com/item/%E5%8F%91%E7%A5%A8%E4%BB%A3%E7%A0%81)
* 接下来我们继续输入发票号码
![image.png](https://img.hacpai.com/file/2019/08/image-4cdd8698.png)
有趣的事情出现了，发票号码失焦之后下面突然出现了验证码，这里我们得出结论：**验证码请求的时机是在发票号码失焦之后**
* 继续输入开票日期和校验码后六位
![image.png](https://img.hacpai.com/file/2019/08/image-600aea49.png)
**此时查验按钮还不可点击**
* 输入验证码
![image.png](https://img.hacpai.com/file/2019/08/image-63c77f94.png)
此时我们了解到税务总局的验证码含有中文和英文，并且**需要根据颜色指示输入**，让我们多刷新几次验证码。
![image.png](https://img.hacpai.com/file/2019/08/image-5b0b9422.png)
![image.png](https://img.hacpai.com/file/2019/08/image-71297745.png)
![image.png](https://img.hacpai.com/file/2019/08/image-a8d6769f.png)
![image.png](https://img.hacpai.com/file/2019/08/image-32d9afc6.png)
我刷新了n次之后发现：验证码提示只有4种情况：输入全部、黄色、红色、蓝色
**查验按钮在所有信息填写完之后出现**
* 最后点击查验即可得到发票的真伪和详细信息

## 查看获取验证码的请求
* 我将网页刷新然后F12打开Chrome的调试工具，点击Network然后将列表清空。
![image.png](https://img.hacpai.com/file/2019/08/image-f15e2e57.png)
* 接下来我们重复刚才查验发票的操作，直到失焦发票号码输入框，然后观察验证码是怎么来的。
![image.png](https://img.hacpai.com/file/2019/08/image-e892db31.png)
此时我们发现了验证码的请求，看一下详细信息。
![image.png](https://img.hacpai.com/file/2019/08/image-e7ec9a9c.png)
这是一个jQuery发起的请求，笔者对jQuery了解的不深，不过我们继续看请求参数：

| 参数名 | 含义 |
| --- | --- |
| callback | 固定值 |
| fpdm | 发票代码 |
|fphm|发票号码|
|r|看起来像是个用来签名的随机数|
|v|应该是版本号 是个固定值|
| nowtime |请求发起时的时间|
| area |简单猜测和地区有关系|
|publickey|签名（我们需要破解的东西）|
|_|不知道这是什么|
那么现在我们的目标很明确了，找到publickey的计算方法。
让我们来利用Chrome调试工具的动作追踪功能，首先定位发票号码的输入框，然后打开这个项目
![image.png](https://img.hacpai.com/file/2019/08/image-cee55a58.png)
下面的blur指的就是失焦操作，我们看到有面有一个js文件，打开它，并点击左下角格式化。
这里有必要说明一下，这个文件叫做“VM54403”并不是说真的有这么一个文件，而是说这个文件是由其他的js代码解码而来的虚拟文件。
```
$('#fphm').blur(function() {
    var fphm = $("#fphm").val().trim();
    if (fphm.length != 0 && fphm.length < 8) {
        ahmch(fphm)
    }
    var fpdm = $("#fpdm").val().trim();
    afcdm(fpdm);
    acb(fplx)
});
```
这里有3个函数ahmch、afcdm、acb，我们不清楚它们的作用，那么我们来利用调试工具的断点来执行语句。
![image.png](https://img.hacpai.com/file/2019/08/image-b6eec17a.png)
加下来我们发现fpdm长度大于8，ahmch不执行，那我们就先不管。
afcdm函数是核心函数之一，它有打断篇幅在检测fpdm的合法性。
* 第13行：
```
var swjginfo = getSwjg(fpdm, 0);
```
这里出现了getSwjg函数，这是一个很重要的函数，我们来看看它是做什么的，定位断点到13行，然后F8执行到断点，我们得到了getSwjg函数的代码：
```
function getSwjg(fpdm, ckflag) {
    var flag = "";
    eval(function(p, a, c, k, e, d) {
        e = function(c) {
            return (c < a ? "" : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
        }
        ;
        if (!''.replace(/^/, String)) {
            while (c--)
                d[e(c)] = k[c] || e(c);
            k = [function(e) {
                return d[e]
            }
            ];
            e = function() {
                return '\\w+'
            }
            ;
            c = 1;
        }
        ;while (c--)
            if (k[c])
                p = p.replace(new RegExp('\\b' + e(c) + '\\b','g'), k[c]);
        return p;
    }('24 X=[{\'7\':\'12\',\'8\':\'13\',\'6\':\'0://3.G.4.2.1:5\',\'9\':\'0://3.G.4.2.1:5\'},{\'7\':\'14\',\'8\':\'Y\',\'6\':\'0://3.L.2.1:5\',\'9\':\'0://3.L.2.1:5\'},{\'7\':\'1j\',\'8\':\'1g\',\'6\':\'0://3.U.4.2.1\',\'9\':\'0://3.U.4.2.1\'},{\'7\':\'1k\',\'8\':\'1f\',\'6\':\'0://3.K.4.2.1:5\',\'9\':\'0://3.K.4.2.1:5\'},{\'7\':\'1a\',\'8\':\'18\',\'6\':\'0://3.R.4.2.1:5\',\'9\':\'0://3.R.4.2.1:5\'},{\'7\':\'1e\',\'8\':\'1h\',\'6\':\'0://3.m.4.2.1:5\',\'9\':\'0://3.m.4.2.1:5\'},{\'7\':\'1c\',\'8\':\'1b\',\'6\':\'0://3.q.2.1:5\',\'9\':\'0://3.q.2.1:5\'},{\'7\':\'1d\',\'8\':\'17\',\'6\':\'0://3.j.4.2.1:d\',\'9\':\'0://3.j.4.2.1:d\'},{\'7\':\'19\',\'8\':\'1l\',\'6\':\'0://3.f-n-
//省略部分乱码
)
    var dqdm = null;
    var swjginfo = new Array();
    if (fpdm.length == 12) {
        dqdm = fpdm.substring(1, 5)
    } else {
        dqdm = fpdm.substring(0, 4)
    }
    if (dqdm != "2102" && dqdm != "3302" && dqdm != "3502" && dqdm != "3702" && dqdm != "4403") {
        dqdm = dqdm.substring(0, 2) + "00"
    }
    for (var i = 0; i < citys.length; i++) {
        if (dqdm == citys[i].code) {
            swjginfo[0] = citys[i].sfmc;
            if (flag == 'debug') {} else {
                swjginfo[1] = citys[i].Ip + "/WebQuery";
                swjginfo[2] = dqdm
            }
            break
        }
    }
    return swjginfo;
}
```
观察这个函数，我们发现它的作用是根据fpdm查询信息。其中有一段加密混淆的js代码，我们利用一个工具网站解密。
[JavaScript Eval Encode/Decode](http://www.oicqzone.com/tool/eval/)
将eval函数和其中的代码拷贝进去，然后点击解密，我们得到一个js对象：
```
var citys = [{
    'code': '1100',
    'sfmc': '北京',
    'Ip': 'https://fpcy.beijing.chinatax.gov.cn:443',
    'address': 'https://fpcy.beijing.chinatax.gov.cn:443'
},
{
    'code': '1200',
    'sfmc': '天津',
    'Ip': 'https://fpcy.tjsat.gov.cn:443',
    'address': 'https://fpcy.tjsat.gov.cn:443'
},
{
    'code': '1300',
    'sfmc': '河北',
    'Ip': 'https://fpcy.hebei.chinatax.gov.cn',
    'address': 'https://fpcy.hebei.chinatax.gov.cn'
},
//省略后面的数据
```
这是我们需要的数据。
接下来我们回到afcdm函数，又发现了28行出现了关键的代码：
```
fplx = alxd(fpdm);
```
这里调用了一个alxd函数对发票类型进行处理。
```
function alxd(a) {
    var b;
    var c = "99";
    if (a.length == 12) {
        b = a.substring(7, 8);
        for (var i = 0; i < code.length; i++) {
            if (a == code[i]) {
                c = "10";
                break
            }
        }
        if (c == "99") {
            if (a.charAt(0) == '0' && a.substring(10, 12) == '11') {
                c = "10"
            }
            if (a.charAt(0) == '0' && (a.substring(10, 12) == '04' || a.substring(10, 12) == '05')) {
                c = "04"
            }
            if (a.charAt(0) == '0' && (a.substring(10, 12) == '06' || a.substring(10, 12) == '07')) {
                c = "11"
            }
            if (a.charAt(0) == '0' && a.substring(10, 12) == '12') {
                c = "14"
            }
        }
        if (c == "99") {
            if (a.substring(10, 12) == '17' && a.charAt(0) == '0') {
                c = "15"
            }
            if (c == "99" && b == 2 && a.charAt(0) != '0') {
                c = "03"
            }
        }
    } else if (a.length == 10) {
        b = a.substring(7, 8);
        if (b == 1 || b == 5) {
            c = "01"
        } else if (b == 6 || b == 3) {
            c = "04"
        } else if (b == 7 || b == 2) {
            c = "02"
        }
    }
    return c
}
```
我们得到了根据fpdm计算fplx的函数。
继续观察afcdm函数，103行出现了请求验证码的函数：getYzmXx
这个文件都是控制验证码请求的，所以我们将它保存下来。
```
function getYzmXx() {
    show_yzm = "1";
    var fpdm = $("#fpdm").val().trim
    var swjginfo = getSwjg(fpdm, 0);
    var url = swjginfo[1] + "/yzmQuery";
    var nowtime = showTime().toString();
    var fpdmyzm = $("#fpdm").val().trim();
    var fphmyzm = $("#fphm").val().trim();
    var kjje = $("#kjje").val().trim();
    var rad = Math.random();
    var area = swjginfo[2];
    var param = {
        'fpdm': fpdmyzm,
        'fphm': fphmyzm,
        'r': rad,
        'v': VVV,
        'nowtime': nowtime,
        'area': area,
        'publickey': $.ckcode(fpdmyzm, nowtime)
    };
    $.ajaxSetup({
        cache: false
    });
    yzmFlag = 1;
    $.ajax({
        type: "post",
        url: url,
        data: param,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(jsonData) {
            //处理返回代码省略
        },
        timeout: 5000,
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            if (retrycount == 9) {
                jAlert("系统繁忙，请稍后重试!", "提示")
            } else {
                retrycount = retrycount + 1;
                getYzmXx()
            }
        }
    });
    yzmWait = 2;
    yzmTime($('#yzm_img'))
}
```
这部分代码很好懂，我们来删减一下：
```
function getYzmXx() {
    var fpdm = $("#fpdm").val().trim();
    var swjginfo = getSwjg(fpdm, 0);
    var url = swjginfo[1] + "/yzmQuery";
    var nowtime = showTime().toString();
    var fpdmyzm = $("#fpdm").val().trim();
    var fphmyzm = $("#fphm").val().trim();
    var rad = Math.random();
    var area = swjginfo[2];
    var param = {
        'fpdm': fpdmyzm,
        'fphm': fphmyzm,
        'r': rad,
        'v': VVV,
        'nowtime': nowtime,
        'area': area,
        'publickey': $.ckcode(fpdmyzm, nowtime)
    };
    $.ajax({
        type: "post",
        url: url,
        data: param,
        dataType: "jsonp",
        jsonp: "callback",
        success: function(jsonData) {
	//处理成功返回省略
        }
    });
}
function showTime() {
    var myDate = new Date();
    var time = myDate.getTime();
    return time
}
```
## 模拟验证码请求
### getYzmXx
```
def getYzmXx(VVV, fpdm, fphmyzm):
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
        'fpdm': fpdm,
        'fphm': fphmyzm,
        'r': rad,
        'v': VVV,
        'nowtime': nowtime,
        'area': area,
        'publickey': ckcode(fpdm, nowtime)
    }
    s=requests.session()
    s.headers['user-agent']="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"
    resp=s.post(url,data=param)
    res=json.loads(resp.text)
    return res,s
```
由于查验平台使用cookie，所以我们使用了requests库中的session来自动维持会话。
### getSwjg
接下来我们需要实现那个查询信息的函数：getSwjg
```
def getSwjg(fpdm, ckflag):
    citys = [
        {
            'code': '1100',
            'sfmc': '北京',
            'Ip': 'https://fpcy.beijing.chinatax.gov.cn:443',
            'address': 'https://fpcy.beijing.chinatax.gov.cn:443'
        },
        {
            'code': '1200',
            'sfmc': '天津',
            'Ip': 'https://fpcy.tjsat.gov.cn:443',
            'address': 'https://fpcy.tjsat.gov.cn:443'
        },
	//省略部分数据
    ]
    swjginfo = []
    if len(fpdm) == 12:
        dqdm = fpdm[1:5]
    else:
        dqdm = fpdm[0:4]
    if dqdm != "2102" and dqdm != "3302" and dqdm != "3502" and dqdm != "3702" and dqdm != "4403":
        dqdm = dqdm[0:2]+"00"
    for city in citys:
        if dqdm == city["code"]:
            swjginfo.append(city["sfmc"])
            swjginfo.append(city["Ip"] + "/WebQuery")
            swjginfo.append(dqdm)
            break
    return swjginfo
```
这个很简单，照搬js就可以了。
 ### 分析签名
这是第一堵高墙，我们模拟请求中的签名算法ckcode，继续使用调试工具找到ckcode的代码。
```
!function(n) {
    var e, r = function(n, r) {
        return e = "402880bd5c76166f015c903ee811504e",
        n << r | n >>> 32 - r
    }, c = function(n, r, c) {
        return e = "402880bd5c76166",
        n & c | r & ~c
    };
    n.extend({
        ck: function(e, t, p, u, y, o) {
            var d, i = c(t, e, p), f = n.encrypt(e), g = n.encrypt(u + y), a = r(e, t);
            i = 2147483648 & e,
            i += 2147483648 & t,
            i += d,
            i += d = 1073741824 & I,
            a = i = n.encrypt(e) + n.bs.encode(n.encrypt(t)) + p;
            var b = n.gen(i, a)
              , v = n.encrypt(f) + g
              , j = n.gen(b + n.gen(e, a) + v, g);
            return n.prijm(e, t, p, u, y, o, j)
        },
        ckcode: function(e, r) {
            var c = n.encrypt(e + r)
              , t = n.encrypt(e) + n.bs.encode(n.encrypt(r))
              , p = n.gen(t, c)
              , u = n.encrypt(c)
              , y = n.gen(p + n.gen(e, t) + u, t);
            return n.pricd(e, r, y)
        }
    })
}(jQuery);
```
我们得到了这样一个文件，接下来我们要实现两个算法ck（后面一定用的到）和ckcode，但是我们遇到了阻碍，ck和ckcode包含了另外5个函数：encrypt、encode、gen、prijm、pricd

## 破解加密算法
### encrypt
通过调试工具找到源码，通过观察我们发现encrypt函数加密过程中所有的字函数都在这份文件中，那么我们直接通过python执行js就可以了，这个函数很好解决。
首先确保安装了PyExecJS
```
pip3 install PyExecJS
```
编写脚本：
```
def encrypt(n):
    js=r'''
     var r = function (n, r) {
            return n << r | n >>> 32 - r
        },
        t = function (n, r) {
            var t, e, u, o, I;
            return u = 2147483648 & n, o = 2147483648 & r, t = 1073741824 & n, e = 1073741824 & r, i = (1073741823 & n) + (1073741823 & r), t & e ? 2147483648 ^ i ^ u ^ o : t | e ? 1073741824 & i ? 3221225472 ^ i ^ u ^ o : 1073741824 ^ i ^ u ^ o : i ^ u ^ o
        },
        e = function (n, r, t) {
            return n & r | ~n & t
        },
        u = function (n, r, t) {
            return n & t | r & ~t
        },
        o = function (n, r, t) {
            return n ^ r ^ t
        },
 
//部分js代码省略

            return (l(s) + l(d) + l(v) + l(S)).toLowerCase()
        };
    '''
    ctx = execjs.compile(js)
    return ctx.call("encrypt",n)
```
在Chorme的控制台调用一下原版的函数，核对一下算法有没有问题：
```
$.encrypt("qwer")
"962012d09b8170d912f0669f6d7d9d07"
```
然后执行python脚本：
```
MacBook-Pro-2:py bbfat$ python3 encrypt.Pyt
962012d09b8170d912f0669f6d7d9d07
```
OK!

### encode
和encrypt基本一样。
```
def encode(r):
    js=r'''
        var n = "=",
        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var t=function(r, t) {
        var e = h.indexOf(r.charAt(t));
        if (-1 === e) throw "Cannot decode encrypt";
        return e
    },
    e = function(r, t) {
        var e = r.charCodeAt(t);
        if (e > 255) throw "INVALID_CHARACTER_ERR: DOM Exception 5";
        return e
    },
    encode = function (r) {
        var t, a, c = [],
            o = (r = String(r)).length - r.length % 3;
        if (0 === r.length) return r;
        for (t = 0; t < o; t += 3) a = e(r, t) << 16 | e(r, t + 1) << 8 | e(r, t + 2), c.push(h.charAt(a >> 18)), c.push(h.charAt(a >> 12 & 63)), c.push(h.charAt(a >> 6 & 63)), c.push(h.charAt(63 & a));
        switch (r.length - o) {
            case 1:
                a = e(r, t) << 16, c.push(h.charAt(a >> 18) + h.charAt(a >> 12 & 63) + n + n);
                break;
            case 2:
                a = e(r, t) << 16 | e(r, t + 1) << 8, c.push(h.charAt(a >> 18) + h.charAt(a >> 12 & 63) + h.charAt(a >> 6 & 63) + n)
        }
        return c.join("")
    };
    '''
    ctx = execjs.compile(js)
    return ctx.call("encode",r)
```
### gen
拿到源码之后分析一下，gen这个算法稍微有点麻烦。
首先是n函数
```
var n = function() {
        var e = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
          , n = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        if (e * n <= 12e4)
            return !0;
        var c = window.screenX
          , r = window.screenY;
        return c + e <= 0 || r + n <= 0 || c >= window.screen.width || r >= window.screen.height
}
```
它写了个奇怪的逻辑，不过我发现它不接受参数，那就意味着它很可能只是一个定值，在console中运行一下。
这里有一个小技巧我们直接在函数前加一个!它就会被当作表达式执行。
![image.png](https://img.hacpai.com/file/2019/08/image-76cbfecc.png)
可以看到它的值的确是定值false。
***
接下来是c函数，它麻烦的地方在于它调用了几次encrypt函数，不过通过观察我们看到它的几个运算结果也是固定的，所以我们直接手动将数据算出来即可。**这里一定要仔细，笔者最后一个bug就是这里的一个值算错了**
```
        c = function (c) {
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
            return n() || (w = r(wzwschallenge, wzwschallengex)), t + w
        },
```
***
r函数很简单，直接复制。然后是gen函数。
这里也有一个坑，gen函数最后有一个3元运算，结果可能有两种情况，笔者没有摸透这个判断条件，索性直接写了两个版本的gen：gen和gen_s，后面准备通过调试选择该用哪一个。
```
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
```
***
最后是moveTo函数：
```
def moveTo(n):
    return encrypt(ctx.call("c", n))
```
至此gen函数解决了。

### prijm和pricd
这两个函数非常相似，都是对地区代码进行运算，我们直接用python翻译js就行了，这俩函数会用到之前的函数。
有一点需要注意，js中出现了很多这样的代码：
```
m = e.encrypt(r + e.moveTo(m)).toUpperCase(),
"0" == swjgmcft && (m = e.encrypt(r + e.moveTo(m) + r).toUpperCase());
```
我们需要理解m是怎么计算出来的，第一行很好理解，第二行的“"0" == swjgmcft”通过在console里运行我们发现，这个是真值，所以后面的语句会执行，m会再运算赋值一次。
翻译成python是这样子：
```
m = encrypt(r + moveTo(m)).upper()
m = encrypt(r + moveTo(m) + r).upper()
```
那么现在我们已经把5个加密函数都搞定了，可以开始请求了！

## 请求验证码
我们将getYzmXx的python版本补全然后运行，得到了验证码的json数据包：
```
{
    "key1": //省略验证码图片的base64,
    "key2": "2019-08-30 09:42:55",
    "key3": "d19b533f223d9b04fdeee8511ed485f6",
    "key4": "01",
    "key5": "2"
}
```
接下来我们稍微加工一下getYzmXx函数，分析原版的getYzmXx函数，我们可以知道key4指明了验证码的颜色，所以我们添加几行代码：
```
    res["key1"] = "data:image/png;base64,"+res["key1"]
    if res['key4'] == "00":
        res['key4'] = ""
    elif res['key4'] == "01":
        res['key4'] = "红色"
    elif res['key4'] == "02":
        res['key4'] = "黄色"
    elif res['key4'] == "03":
        res['key4'] = "蓝色"
```
这样函数返回的数据包可以直接显示颜色。

## 模拟查验请求
下面我们就来进行最关键的一步：模拟查验请求。
还是老办法，先看js，我们找到请求参数：
```
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
```
简单分析可以得出：yzmSj是验证码时间（在验证码数据包里有），index是验证码数据包中的key3，最后又是一个签名，好在我们已经搞定了。
```
def check(session,fpdm,fphm,kprq,kjje,yzm,yzm_keys):
    '''
    session:会话对象
    fpdm:发票代码
    fphm:发票号码
    kprq:开票日期
    kjje:开票金额或校验码后六位
    yzm:验证码
    yzm_keys:验证码数据包
    '''
    dmchek = getSwjg(fpdm, 1)
    area = dmchek[2]
    fplx=alxd(fpdm)
    if fplx == "01" or fplx == "02" or fplx == "03":
        index = kjje.index(".");
        if index > 0:
            arr = kjje.split(".");
            if arr[1] == "00" or arr[1] == "0":
                kjje = arr[0]
            elif arr[1][1]== "0":
                kjje = arr[0] + "." + arr[1][0]
    sjip = dmchek[1]
    url = sjip + "/vatQuery"
    param = {
        "callback":"jQuery110207235993437777108_1567158341877",
        'key1': fpdm,
        'key2': fphm,
        'key3': kprq,
        'key4': kjje,
        'fplx': fplx,
        'yzm': yzm,
        'yzmSj':yzm_keys["key2"],
        'index': yzm_keys["key3"],
        'area': area,
        'publickey': ck(fpdm, fphm, kprq, kjje,"", yzm)
    }
    resp=requests.post(url,data=param).text
    tmp=resp.split("(")[1]
    return json.loads(tmp[:-1])
```

## 测试
接下来我们写一个脚本，调用所有函数进行一次测试：
```
from yzm import *
from check import *

yzm_keys,s=getYzmXx('V1.0.07_001','011001900311','42558341')
print(yzm_keys["key1"]+'\n'+yzm_keys['key4'])
yzm=input("输入验证码:")
print(check(s,"011001900311","42558341","20190829","643785",yzm,yzm_keys))
```
![image.png](https://img.hacpai.com/file/2019/08/image-4584fc3b.png)
# 大功告成！
当然到这里还不够完美，我还没有写解析结果数据的部分，并且这个版本验证码是需要手动输入的，接下来我会尝试通过orc的方式识别验证码。