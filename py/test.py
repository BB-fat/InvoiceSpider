from yzm import *
from check import *

if __name__=="__main__":
    yzm_keys,s=getYzmXx('V1.0.07_001','011001900311','42558341')
    print(yzm_keys["key1"]+'\n'+yzm_keys['key4'])
    yzm=input("输入验证码:")
    print(check(s,"011001900311","42558341","20190829","643785",yzm,yzm_keys))