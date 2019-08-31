function alxd(a) {
    var b;
    var c = "99";
    if (a.length == 12) {
        b = a.substring(7, 8);
        for (var i = 0; i < code.length; i++) {
            if (a == code[i]) {
                c = "10";
                break
            }
        }
        if (c == "99") {
            if (a.charAt(0) == '0' && a.substring(10, 12) == '11') {
                c = "10"
            }
            if (a.charAt(0) == '0' && (a.substring(10, 12) == '04' || a.substring(10, 12) == '05')) {
                c = "04"
            }
            if (a.charAt(0) == '0' && (a.substring(10, 12) == '06' || a.substring(10, 12) == '07')) {
                c = "11"
            }
            if (a.charAt(0) == '0' && a.substring(10, 12) == '12') {
                c = "14"
            }
        }
        if (c == "99") {
            if (a.substring(10, 12) == '17' && a.charAt(0) == '0') {
                c = "15"
            }
            if (c == "99" && b == 2 && a.charAt(0) != '0') {
                c = "03"
            }
        }
    } else if (a.length == 10) {
        b = a.substring(7, 8);
        if (b == 1 || b == 5) {
            c = "01"
        } else if (b == 6 || b == 3) {
            c = "04"
        } else if (b == 7 || b == 2) {
            c = "02"
        }
    }
    return c
}

