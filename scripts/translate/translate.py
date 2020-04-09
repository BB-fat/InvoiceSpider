import re

def translate(ctx, func_name, old_file, new_file):
    '''
    逆向js文件
    ctx:        翻译函数的js对象
    func_name:  翻译函数名
    old_file:   目标文件路径
    new_file:   输出文件路径
    '''
    s = ""
    with open(old_file, "r") as f:
        s = f.read()
    r = re.compile(func_name + r'\(.*?\)')
    res = r.findall(s)
    for target in res:
        change = ctx.call(func_name, target.split("'")[1])
        s = re.sub(func_name + r'\(.*?\)', '"' + change + '"', s, count=1)
        print(target, change)
    with open(new_file, "w") as f:
        f.write(s)