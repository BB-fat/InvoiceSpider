import base64
import math
import uuid
from collections import Counter

from PIL import Image

from predictCaptcha.sdk import *


def Thresholding(picpath):
    '''
    二值化，取出想要的文字部分
    :param picpath: 验证码图片的文件路径
    :return img: 加载后图像
    '''

    img = Image.open(picpath)
    imgArray = img.load()

    x, y = img.size

    # 对于不同的验证码二值化不同的字符
    if 'red' in str(picpath):
        for i in range(y):
            for j in range(x):
                if (imgArray[j, i][0] > 200 and imgArray[j, i][1] < 110 and imgArray[j, i][2] < 100
                        and (imgArray[j, i][2] + imgArray[j, i][1]) < imgArray[j, i][0]):
                    img.putpixel((j, i), (0, 0, 0))
                else:
                    img.putpixel((j, i), (255, 255, 255))

    elif 'blue' in str(picpath):
        for i in range(y):
            for j in range(x):
                if (imgArray[j, i][0] < 100 and imgArray[j, i][1] < 100 and imgArray[j, i][2] > 200 or (
                        imgArray[j, i][0] + imgArray[j, i][1]) < imgArray[j, i][2]):
                    img.putpixel((j, i), (0, 0, 0))
                else:
                    img.putpixel((j, i), (255, 255, 255))

    elif 'yellow' in str(picpath):
        for i in range(y):
            for j in range(x):
                if (imgArray[j, i][0]
                        > 200 and imgArray[j, i][1] > 200 and imgArray[j, i][2] < 110):
                    img.putpixel((j, i), (0, 0, 0))
                else:
                    img.putpixel((j, i), (255, 255, 255))

    else:
        for i in range(y):
            for j in range(x):
                if (imgArray[j, i][0] < 125 and imgArray[j, i][1] < 125 and imgArray[j, i][2] < 125 and (
                        imgArray[j, i][0] * 0.21267 + imgArray[j, i][1] * 0.71516 + imgArray[j, i][2] * 0.067) < 125):
                    img.putpixel(
                        (j, i), (0, 0, 0))
                else:
                    img.putpixel((j, i), (255, 255, 255))

    return img


def Denoise(img):
    """
    去除噪点
    :param img:加载后图像
    :return img
    """
    imgArray = img.load()
    w, h = img.size
    for i in range(1, h - 1):
        for j in range(1, w - 1):
            count = 0
            if (imgArray[j, i - 1][0] == 255 and imgArray[j, i - 1][1] == 255 and imgArray[j, i - 1][2] == 255):
                count = count + 1
            if (imgArray[j, i + 1][0] == 255 and imgArray[j, i + 1][1] == 255 and imgArray[j, i + 1][2] == 255):
                count = count + 1
            if (imgArray[j - 1, i][0] == 255 and imgArray[j - 1, i][1] == 255 and imgArray[j - 1, i][2] == 255):
                count = count + 1
            if (imgArray[j + 1, i][0] == 255 and imgArray[j + 1, i][1] == 255 and imgArray[j + 1, i][2] == 255):
                count = count + 1
            if (imgArray[j + 1, i + 1][0] == 255 and imgArray[j + 1, i + 1][1] == 255 and imgArray[j + 1, i + 1][
                2] == 255):
                count = count + 1
            if (imgArray[j + 1, i - 1][0] == 255 and imgArray[j + 1, i - 1][1] == 255 and imgArray[j + 1, i - 1][
                2] == 255):
                count = count + 1
            if (imgArray[j - 1, i - 1][0] == 255 and imgArray[j - 1, i - 1][1] == 255 and imgArray[j - 1, i - 1][
                2] == 255):
                count = count + 1
            if (imgArray[j - 1, i + 1][0] == 255 and imgArray[j - 1, i + 1][1] == 255 and imgArray[j - 1, i + 1][
                2] == 255):
                count = count + 1

            if count > 6:
                # 如果一个点周围八个点有七个是空白，认为该点也应该是空白
                img.putpixel((j, i), (255, 255, 255))

    # 下面两个循环将图片最边缘一圈全部涂白
    for i in range(w):
        img.putpixel((i, 0), (255, 255, 255))
        img.putpixel((i, h - 1), (255, 255, 255))

    for i in range(h):
        img.putpixel((0, i), (255, 255, 255))
        img.putpixel((w - 1, i), (255, 255, 255))

    return img


def Cut(img):
    '''
    将图片按字符切开
    :param img:
    :return index: 所需字符在所有字符中的索引值
    '''
    index = []
    child_img_list = []
    w, h = img.size
    startEdge = []
    endEdge = []
    blackdotsEachColumn = []
    count0 = 0
    imgArray = img.load()
    for x in range(w):
        for y in range(h):
            if (imgArray[x, y] == (0, 0, 0)):
                count0 = count0 + 1
        # 变量blackDotsEachColumn记录下来每一列的黑点数量
        blackdotsEachColumn.append(count0)
        count0 = 0

    # 选定除了边框外的每一列，遍历查找字符的边缘列，每一个起始边缘都有一个对应的结束边缘
    for x in range(1, w - 1):
        # 从左到右，遍历查找起始边缘
        if (blackdotsEachColumn[x - 1] == 0 and blackdotsEachColumn[x] != 0):
            startEdge.append(x)
        # 从左到右，遍历查找结束边缘
        if (blackdotsEachColumn[x] != 0 and blackdotsEachColumn[x + 1] == 0):
            endEdge.append(x)

    # 归并本该在一起的部分
    for i in range(len(startEdge)):
        # 如果一个块太小，可以认为它属于前一个或后一个块
        if ((i < (len(startEdge) - 1)) and len(startEdge) >= 1):  # 如果只有一个起始边缘，就不需要归并了

            # 第一个块没有前一个块，所以如果横向纵向都太小的话，认为跟后一个块是一体的
            if (i == 0 and ((endEdge[i] - startEdge[i]) <= 3) and (blackdotsEachColumn[startEdge[i]] <= 2) and (
                    blackdotsEachColumn[endEdge[i]] <= 2)):
                startEdge.pop(i + 1)
                endEdge.pop(i)
                continue

            if (i != 0 and ((endEdge[i] - startEdge[i]) <= 3) and (blackdotsEachColumn[startEdge[i]] <= 2) and (
                    blackdotsEachColumn[endEdge[i]] <= 2)):

                # 可以认为这个小块是属于前面或者后面的一个块，根据前后距离判断是属于哪个
                if ((startEdge[i + 1] - endEdge[i]) < (startEdge[i] - endEdge[i - 1])):
                    startEdge.pop(i + 1)
                    endEdge.pop(i)
                    continue

                else:
                    startEdge.pop(i)
                    endEdge.pop(i - 1)
                    continue

    tmp1 = startEdge
    tmp2 = endEdge

    # 同样颜色的字符可能粘连，按平均宽度15切开
    for i in range(len(startEdge)):
        # 取每一个块的宽度
        blockWidth = endEdge[i] - startEdge[i]
        if (blockWidth > 15):
            p = math.ceil(blockWidth / 15)  # 向上取整
            for j in range(1, p):
                k = int(startEdge[i] + j * blockWidth / p)
                tmp1.append(k)
                tmp2.append(k)

    # 从小到大排序
    tmp1.sort()
    tmp2.sort()

    startEdge = tmp1
    endEdge = tmp2
    print(startEdge)
    print(endEdge)
    num = 0
    for i in range(len(startEdge)):
        if (startEdge[i] > 0 and startEdge[i] < 16) and (endEdge[i] > 13 and endEdge[i] < 30):
            if (num <= 0):
                index.append(0)
            else:
                index.append(num)

        elif (startEdge[i] > 13 and startEdge[i] < 22) and (endEdge[i] > 24 and endEdge[i] < 40):

            if (num <= 1):
                index.append(1)
            else:
                index.append(num)

        elif (startEdge[i] > 25 and startEdge[i] < 35) and (endEdge[i] > 35 and endEdge[i] < 50):
            if (num <= 2):
                index.append(2)
            else:
                index.append(num)

        elif (startEdge[i] > 40 and startEdge[i] < 48) and (endEdge[i] > 48 and endEdge[i] < 58):
            if (num <= 3):
                index.append(3)
            else:
                index.append(num)

        elif (startEdge[i] > 50 and startEdge[i] < 58) and (endEdge[i] > 60 and endEdge[i] < 70):
            if (num <= 4):
                index.append(4)
            else:
                index.append(num + 1)
        elif (startEdge[i] > 60 and startEdge[i] < 75) and (endEdge[i] > 70 and endEdge[i] < 90):
            if (num <= 5):
                index.append(5)
            else:
                index.append(num)
        else:
            index.append(num)
        num += 1
    return index


def change_image_channels(picpath):
    """
    调整图像通道数
    :param picpath 图片路径
    """
    image = Image.open(picpath)
    if image.mode == 'RGBA':
        r, g, b, a = image.split()
        image = Image.merge("RGB", (r, g, b))
        image.save(picpath)


def predict_all_letter(picpath):
    """
    预测图像所包含全部字符
    :param picpath: 图像路径
    :return 预测字符
    """
    sdk = SDK(r"predictCaptcha/model/Captcha-CNNX-NoRecurrent-H64-CrossEntropy-C3_model.yaml")

    with open(picpath, "rb") as f:
        pic = f.read()

    predict_condition = []
    for i in range(1000):
        predict_condition.append(sdk.predict(pic))
    return Counter(predict_condition).most_common(1)


def get_aim_letters(captcha_data):
    """
    获取目标条件字符
    :param captcha_json: json数据 ，包括图片base64、目标颜色
    :return aim_letter: 目标字符
    """

    captcha_base64 = captcha_data["key1"]
    captcha_type = captcha_data["key4"]
    picpath = "./temp/" + captcha_type + "_" + str(uuid.uuid1()) + ".png"

    captcha_base64 = base64.b64decode(captcha_base64)  # 去除前缀
    file = open(picpath, 'wb')
    file.write(captcha_base64)
    file.close()

    change_image_channels(picpath)
    all_letters = predict_all_letter(picpath)
    print("all:", all_letters[0])

    pic = Thresholding(picpath)
    pic = Denoise(pic)
    index_sequence = Cut(pic)
    print(index_sequence)

    aim_letter = ""
    for i in index_sequence:
        aim_letter += all_letters[0][0][i]
    print(aim_letter)
    return aim_letter


if __name__ == "__main__":
    get_aim_letters({
        "key1": "data:image/png;base64,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",
        "key2": "2020-02-09 20:09:59",
        "key3": "69cb152a398f594c190e91fd68c5a5f2",
        "key4": "yellow",
        "key5": "2"
    })
