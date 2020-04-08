#!/usr/bin/env python
import time
import random
from scripts.getSwjg import *
from scripts.ck import *
import requests
import json


def showTime():
    t = time.time()
    return str(int(t * 1000))


def getYzmXx(VVV: str, fpdm: str, fphmyzm: str):
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
    s.headers[
        'user-agent'] = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"
    resp = s.get(url, params=param, verify=False)
    tmp = resp.text[43:-1]  # 去掉jquery前缀
    res = json.loads(tmp)
    if res['key4'] == "00":
        res['key4'] = "black"
    elif res['key4'] == "01":
        res['key4'] = "red"
    elif res['key4'] == "02":
        res['key4'] = "yellow"
    elif res['key4'] == "03":
        res['key4'] = "blue"
    return res, s


if __name__ == "__main__":
    # print(getYzmXx('V2.0.02_002', '011001900411', '61636940'))
    # print(getYzmXx('V2.0.02_002', '012001900311', '44977519'))
    # print(getYzmXx('V2.0.02_002', '3300193130', '32915412'))
    print(getYzmXx('V2.0.02_002', '021002000111', '43465599'))
    # '3300193130', '32915412', '20200324', '6017.7'
