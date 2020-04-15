![](https://tva1.sinaimg.cn/large/007S8ZIlly1gdr2bs0ur8j31kw08wqki.jpg)
InvoiceSpider是一个可以自动化模拟在[国家税务总局全国增值税发票查验平台](https://inv-veri.chinatax.gov.cn)查验发票的项目。
## 感谢
* [Siege Lion](https://github.com/Hanmengnan) 帮助训练发票识别模型
* Y先生 帮助训练发票识别模型
* czb 提供了发票解密思路

联系作者请发送邮件到bbfat.996@icloud.com

## 更新
* 2020-04-12 增加了对于验证码接口加密数据的解密

## 相关资料
* **推荐阅读**：[逆向工程Python爬虫——国税局发票查验平台](https://www.fatech.online/articles/2019/08/31/1567224350566.html)
* [【爬虫技术】破解js反调试](https://www.fatech.online/articles/2020/04/05/1586069632742.html)

## TODO
* 破解部分发票查验请求的特殊参数

  已经逆向了一部分，我整理出了几个相关函数，放在[sign.js](js/sign.js)中，特别复杂，还没有破解完，如果有感兴趣一起做的朋友请联系我bbfat.996@icloud.com

* 优化模型识别率