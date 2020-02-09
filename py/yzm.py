#!/usr/bin/env python
import time
import random
from getSwjg import *
from encrypt import encrypt
from encode import encode
from gen_moveTo import gen
from pricd_prijm import pricd
from ck import *
import requests
import json


def showTime():
    t = time.time()
    return str(int(t*1000))


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
        'callback': 'jQuery1102045870758052653293_1581247300793',
        'fpdm': fpdm,
        'fphm': fphmyzm,
        'r': rad,
        'v': VVV,
        'nowtime': nowtime,
        'area': area,
        'publickey': ckcode(fpdm, nowtime)
    }
    s = requests.session()
    s.headers['user-agent'] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"
    resp = s.get(url, params=param)

    print(resp.text)

    res = json.loads(resp.text)
    res["key1"] = "data:image/png;base64,"+res["key1"]
    if res['key4'] == "00":
        res['key4'] = ""
    elif res['key4'] == "01":
        res['key4'] = "红色"
    elif res['key4'] == "02":
        res['key4'] = "黄色"
    elif res['key4'] == "03":
        res['key4'] = "蓝色"
    return res, s


if __name__ == "__main__":
    print(getYzmXx('V2.0.01_001', '011001900411', '61636940'))
