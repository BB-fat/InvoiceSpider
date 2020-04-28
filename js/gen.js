var gen = function (fphm, secret3_nowtime) {
    var fphm = fphm["trim"]();
    var _0x304a50 = encrypt(fphm);
    var _0x4a50c6 = encrypt(fphm) + secret3_nowtime;
    var i, _0x1a2173, _0x8911d9;
    _0x1a2173 = new Array();
    _0x1a2173[0x0] = "ff8080815ed2f53b015f27c2b7b9783e";
    _0x1a2173[0x1] = "402880bd5c76166f015c9041698e5099";
    _0x1a2173[0x2] = "402880bd5c76101f015c903ee811504e";
    for (i = 0x0; i < _0x1a2173["length"]; ++i) {
        _0x8911d9 = _0x1a2173[i];
    }
    return encrypt(_0x304a50 + _0x4a50c6 + _0x8911d9)["toUpperCase"]();
}