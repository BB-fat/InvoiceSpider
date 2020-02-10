from scripts.yzm import getYzmXx
from predictCaptcha.picProcess import get_aim_letters
from scripts.check import check

if __name__ == "__main__":
    yzm_keys, s = getYzmXx('V2.0.01_001', '011001900411', '61636940')
    yzm = get_aim_letters(yzm_keys)
    print(check(s, '011001900411', '61636940', "20190929", "712285", yzm, yzm_keys))
