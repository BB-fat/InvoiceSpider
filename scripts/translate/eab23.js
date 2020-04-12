// 在平台环境下将body换成eab23.js的代码然后运行这个脚本
// node运行eab23.js会爆内存还不知道为什么

var s = $("body").text()
var translate = function () {
    while (1) {
        var res = /_0x31c3\(.*?\)/.exec(s)
        if (res == null) {
            break
        }
        var words = res[0].split("'")
        console.log(words[1], words[3])
        s = s.replace(/_0x31c3\(.*?\)/, '"' + _0x31c3(words[1], words[3]) + '"')
    }
}