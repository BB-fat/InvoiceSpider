from scripts.yzm import getYzmXx
from predictCaptcha.picProcess import get_aim_letters
from scripts.check import check

import time


VERSION = 'V2.0.02_002'


def checkInvoice(fpdm: str, fphm: str, kprq: str, kjje: str):
    # res = None
    # while res is None or res.get("key1") != "001":
    yzm_keys, s = getYzmXx(VERSION, fpdm, fphm)
    yzm = get_aim_letters(yzm_keys)
    res = check(s, fpdm, fphm, kprq, kjje, yzm, yzm_keys)
    return res


if __name__ == "__main__":
    count = 0
    success = 0
    t0 = time.time()
    while True:
        count += 1
        res = checkInvoice('011001900411', '61636940', "20190929", "712285")
        if res["key1"] == "001" or res["key1"] == "002":
            success += 1
        print("序号:%d\t平均用时:%.2f\t识别率:%.2f" %
              (count, (time.time() - t0) / count, (float(success) / count) * 100))
