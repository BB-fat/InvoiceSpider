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
        {
            'code': '1300',
            'sfmc': '河北',
            'Ip': 'https://fpcy.hebei.chinatax.gov.cn',
            'address': 'https://fpcy.hebei.chinatax.gov.cn'
        },
        {
            'code': '1400',
            'sfmc': '山西',
            'Ip': 'https://fpcy.shanxi.chinatax.gov.cn:443',
            'address': 'https://fpcy.shanxi.chinatax.gov.cn:443'
        },
        {
            'code': '1500',
            'sfmc': '内蒙古',
            'Ip': 'https://fpcy.neimenggu.chinatax.gov.cn:443',
            'address': 'https://fpcy.neimenggu.chinatax.gov.cn:443'
        },
        {
            'code': '2100',
            'sfmc': '辽宁',
            'Ip': 'https://fpcy.liaoning.chinatax.gov.cn:443',
            'address': 'https://fpcy.liaoning.chinatax.gov.cn:443'
        },
        {
            'code': '2102',
            'sfmc': '大连',
            'Ip': 'https://fpcy.dlntax.gov.cn:443',
            'address': 'https://fpcy.dlntax.gov.cn:443'
        },
        {
            'code': '2200',
            'sfmc': '吉林',
            'Ip': 'https://fpcy.jilin.chinatax.gov.cn:4432',
            'address': 'https://fpcy.jilin.chinatax.gov.cn:4432'
        },
        {
            'code': '2300',
            'sfmc': '黑龙江',
            'Ip': 'https://fpcy.hl-n-tax.gov.cn:443',
            'address': 'https://fpcy.hl-n-tax.gov.cn:443'
        },
        {
            'code': '3100',
            'sfmc': '上海',
            'Ip': 'https://fpcyweb.tax.sh.gov.cn:1001',
            'address': 'https://fpcyweb.tax.sh.gov.cn:1001'
        },
        {
            'code': '3200',
            'sfmc': '江苏',
            'Ip': 'https://fpcy.jiangsu.chinatax.gov.cn:80',
            'address': 'https://fpcy.jiangsu.chinatax.gov.cn:80'
        },
        {
            'code': '3300',
            'sfmc': '浙江',
            'Ip': 'https://fpcy.zhejiang.chinatax.gov.cn:443',
            'address': 'https://fpcy.zhejiang.chinatax.gov.cn:443'
        },
        {
            'code': '3302',
            'sfmc': '宁波',
            'Ip': 'https://fpcy.ningbo.chinatax.gov.cn:443',
            'address': 'https://fpcy.ningbo.chinatax.gov.cn:443'
        },
        {
            'code': '3400',
            'sfmc': '安徽',
            'Ip': 'https://fpcy.anhui.chinatax.gov.cn:443',
            'address': 'https://fpcy.anhui.chinatax.gov	.cn:443'
        },
        {
            'code': '3500',
            'sfmc': '福建',
            'Ip': 'https://fpcy.fujian.chinatax.gov.cn:443',
            'address': 'https://fpcy.fujian.chinatax.gov.cn:443'
        },
        {
            'code': '3502',
            'sfmc': '厦门',
            'Ip': 'https://fpcy.xiamen.chinatax.gov.cn',
            'address': 'https://fpcy.xiamen.chinatax.gov.cn'
        },
        {
            'code': '3600',
            'sfmc': '江西',
            'Ip': 'https://fpcy.jiangxi.chinatax.gov.cn:82',
            'address': 'https://fpcy.jiangxi.chinatax.gov.cn:82'
        },
        {
            'code': '3700',
            'sfmc': '山东',
            'Ip': 'https://fpcy.shandong.chinatax.gov.cn:443',
            'address': 'https://fpcy.shandong.chinatax.gov.cn:443'
        },
        {
            'code': '3702',
            'sfmc': '青岛',
            'Ip': 'https://fpcy.qingdao.chinatax.gov.cn:443',
            'address': 'https://fpcy.qingdao.chinatax.gov.cn:443'
        },
        {
            'code': '4100',
            'sfmc': '河南',
            'Ip': 'https://fpcy.henan.chinatax.gov.cn',
            'address': 'https://fpcy.henan.chinatax.g	ov.cn'
        },
        {
            'code': '4200',
            'sfmc': '湖北',
            'Ip': 'https://fpcy.hb-n-tax.gov.cn:443',
            'address': 'https://fpcy.hb-n-tax.gov.cn:443'
        },
        {
            'code': '4300',
            'sfmc': '湖南',
            'Ip': 'https://fpcy.hunan.chinatax.gov.cn:8083',
            'address': 'https://fpcy.hunan.chinatax.gov.cn:8083'
        },
        {
            'code': '4400',
            'sfmc': '广东',
            'Ip': 'https://fpcy.gd-n-tax.gov.cn:443',
            'address': 'https://fpcy.gd-n-tax.gov.cn:443'
        },
        {
            'code': '4403',
            'sfmc': '深圳',
            'Ip': 'https://fpcy.shenzhen.chinatax.gov.cn:443',
            'address': 'https://fpcy.shenzhen.chinatax.gov.cn:443'
        },
        {
            'code': '4500',
            'sfmc': '广西',
            'Ip': 'https://fpcy.guangxi.chinatax.gov.cn:8200',
            'address': 'https://fpcy.guangxi.chinatax.gov.cn:8200'
        },
        {
            'code': '4600',
            'sfmc': '海南',
            'Ip': 'https://fpcy.hainan.chinatax.gov.cn:443',
            'address': 'https://fpcy.hainan.chinatax.gov.cn:443'
        },
        {
            'code': '5000',
            'sfmc': '重庆',
            'Ip': 'https://fpcy.chongqing.chinatax.gov.cn:80',
            'address': 'https://fpcy.chongqing.chinatax.gov.cn:80'
        },
        {
            'code': '5100',
            'sfmc': '四川',
            'Ip': 'https://fpcy.sichuan.chinatax.gov.cn:443',
            'address': 'https://fpcy.sichuan.chinatax.gov.cn:443'
        },
        {
            'code': '5200',
            'sfmc': '贵州',
            'Ip': 'https://fpcy.gz-n-tax.gov.cn:80',
            'address': 'https://fpcy.gz-n-tax.gov.cn:80'
        },
        {
            'code': '5300',
            'sfmc': '云南',
            'Ip': 'https://fpcy.yngs.gov.cn:443',
            'address': 'https://fpcy.yngs.gov.cn:443'
        },
        {
            'code': '5400',
            'sfmc': '西藏',
            'Ip': 'https://fpcy.xztax.gov.cn:81',
            'address': 'https://fpcy.xztax.gov.cn:81'
        },
        {
            'code': '6100',
            'sfmc': '陕西',
            'Ip': 'https://fpcy.shaanxi.chinatax.gov.cn:443',
            'address': 'https://fpcy.shaanxi.chinatax.gov.cn:443'
        },
        {
            'code': '6200',
            'sfmc': '甘肃',
            'Ip': 'https://fpcy.gansu.chinatax.gov.cn:443',
            'address': 'https://fpcy.gansu.chinatax.gov.cn:443'
        },
        {
            'code': '6300',
            'sfmc': '青海',
            'Ip': 'https://fpcy.qinghai.chinatax.gov.cn:443',
            'address': 'https://fpcy.qinghai.chinatax.gov.cn:443'
        },
        {
            'code': '6400',
            'sfmc': '宁夏',
            'Ip': 'https://fpcy.ningxia.chinatax.gov.cn:443',
            'address': 'https://fpcy.ningxia.chinatax.gov.cn:443'
        },
        {
            'code': '6500',
            'sfmc': '新疆',
            'Ip': 'https://fpcy.xj-n-tax.gov.cn:443',
            'address': 'https://fpcy.xj-n-tax.gov.cn:443'
        }
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
            swjginfo.append(city["Ip"] + "/NWebQuery")
            swjginfo.append(dqdm)
            break
    return swjginfo
