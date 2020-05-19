// 这个脚本是通用的反逆向脚本
// 使用之前:
// 1.需要将调用参数改为相应文件的解密函数
// 2.需要先打开查验平台然后将body设置成待逆向的脚本代码
// 3.找到解密函数名然后替换_0x5a05

// 注意参数最后传递参数的个数！！！

var s = $("body").text()
var translate = function () {
    while (1) {
        var res = /_0x5a05\('.*?', '.*?'\)/.exec(s)
        if (res == null) {
            break
        }
        var words = res[0].split("'")
        console.log(words[1], words[3])
        s = s.replace(/_0x5a05\('.*?', '.*?'\)/, '"' + _0x5a05(words[1], words[3]) + '"')
    }
}
translate()