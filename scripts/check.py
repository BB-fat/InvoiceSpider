from scripts.yzm import *
from scripts.ck import ck
from scripts.fplx import *

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