!function(e) {
    var o = function(e) {
        return 12 == e.length ? dqdm = e.substring(1, 5) : dqdm = e.substring(0, 4),
        "2102" != dqdm && "3302" != dqdm && "3502" != dqdm && "3702" != dqdm && "4403" != dqdm && (dqdm = dqdm.substring(0, 2) + "00"),
        dqdm
    }
      , r = function(e) {
        return e.length >= 12 ? e.substring(0, 10) : e.substring(0, 2)
    }
      , p = function(e) {
        return e.length + 5 * e.length
    };
    e.extend({
        prijm: function(r, p, a, t, s, c, m) {
            var n = o(r);
            switch (n) {
            case "1100":
                m = e.encrypt(r + e.moveTo(m)).toUpperCase(),
                "0" == swjgmcft && (m = e.encrypt(r + e.moveTo(m) + r).toUpperCase());
                break;
            case "1200":
                m = e.encrypt(r + e.moveTo(m) + p).toUpperCase();
                break;
            case "1300":
                m = e.encrypt(a + e.moveTo(m) + e.moveTo(r)).toUpperCase();
                break;
            case "1400":
                m = e.encrypt(e.moveTo(m) + s).toUpperCase(),
                "0" == swjgmcft && (m = e.encrypt(e.moveTo(m) + s + m).toUpperCase());
                break;
            case "1500":
                m = e.encrypt(e.moveTo(m) + e.moveTo(r) + p).toUpperCase();
                break;
            case "2100":
                m = e.encrypt(r + p + m).toUpperCase();
                break;
            case "2102":
                m = e.encrypt(r + e.moveTo(p) + m).toUpperCase();
                break;
            case "2200":
                m = e.encrypt(r + m + e.moveTo(m)).toUpperCase();
                break;
            case "2300":
                m = e.encrypt(s + m).toUpperCase();
                break;
            case "3100":
                m = e.encrypt(e.moveTo(m)).toUpperCase(),
                "0" == swjgmcft && (m = e.encrypt(e.moveTo(m) + p).toUpperCase());
                break;
            case "3200":
                m = e.encrypt(r + m).toUpperCase();
                break;
            case "3300":
                m = e.encrypt(p + m).toUpperCase();
                break;
            case "3302":
                m = e.encrypt(e.moveTo(p) + m).toUpperCase();
                break;
            case "3400":
                m = e.encrypt(r + e.moveTo(a) + m).toUpperCase();
                break;
            case "3500":
                m = e.encrypt(n + e.moveTo(a) + m).toUpperCase();
                break;
            case "3502":
                m = e.encrypt(n + e.moveTo(m) + r).toUpperCase();
                break;
            case "3600":
                m = e.encrypt(e.encrypt(m) + p + a).toUpperCase();
                break;
            case "3700":
                m = e.encrypt(m + e.moveTo(n) + r).toUpperCase(),
                "0" == swjgmcft && (m = e.encrypt(e.moveTo(m) + n).toUpperCase());
                break;
            case "3702":
                m = e.encrypt(e.encrypt(p) + e.moveTo(m) + r).toUpperCase();
                break;
            case "4100":
                m = e.encrypt(e.moveTo(m) + e.moveTo(r) + m).toUpperCase();
                break;
            case "4200":
                m = e.encrypt(a + e.moveTo(a) + m).toUpperCase();
                break;
            case "4300":
                m = e.encrypt(e.moveTo(a) + m + p).toUpperCase();
                break;
            case "4400":
                m = e.encrypt(e.moveTo(r) + e.moveTo(s) + m).toUpperCase();
                break;
            case "4403":
                m = e.encrypt(n + e.moveTo(m) + m).toUpperCase();
                break;
            case "4500":
                m = e.encrypt(n + e.moveTo(r) + m + a).toUpperCase();
                break;
            case "4600":
                m = e.encrypt(p + e.moveTo(r) + m + a).toUpperCase();
                break;
            case "5000":
                m = e.encrypt(r + e.moveTo(r) + r + m).toUpperCase();
                break;
            case "5100":
                m = e.encrypt(a + e.moveTo(r) + p + m).toUpperCase();
                break;
            case "5200":
                m = e.encrypt(t + e.moveTo(r) + m).toUpperCase();
                break;
            case "5300":
                m = e.encrypt(a + e.moveTo(r) + m).toUpperCase(),
                "0" == swjgmcft && (m = e.encrypt(e.moveTo(m) + r).toUpperCase());
                break;
            case "5400":
                m = e.encrypt(n + e.moveTo(r) + m).toUpperCase();
                break;
            case "6100":
                m = e.encrypt(n + m + e.moveTo(p) + e.moveTo(r)).toUpperCase();
                break;
            case "6200":
                m = e.encrypt(a + e.moveTo(p) + m).toUpperCase();
                break;
            case "6300":
                m = e.encrypt(r + e.moveTo(n) + m).toUpperCase();
                break;
            case "6400":
                m = e.encrypt(p + e.moveTo(s) + m).toUpperCase();
                break;
            case "6500":
                m = e.encrypt(t + e.moveTo(m) + m).toUpperCase()
            }
            return m
        },
        pricd: function(a, t, s) {
            var c = o(a);
            switch (c) {
            case "1100":
                s = e.encrypt(a + e.moveTo(t) + s).toUpperCase(),
                "0" == swjgmcft && (s = e.encrypt(e.moveTo(s) + a).toUpperCase());
                break;
            case "1200":
                s = e.encrypt(a + e.moveTo(a + t) + s).toUpperCase();
                break;
            case "1300":
                s = e.encrypt(a + e.moveTo(a.substring(2, 3) + t) + s).toUpperCase(),
                "0" == swjgmcft && (s = e.encrypt(e.moveTo(s) + a + t).toUpperCase());
                break;
            case "1400":
                s = e.encrypt(a + e.moveTo(t) + s).toUpperCase();
                break;
            case "1500":
                s = e.encrypt(t + e.moveTo(t + s) + s.length).toUpperCase();
                break;
            case "2100":
                s = e.encrypt(s + e.moveTo(c) + s.toLowerCase()).toUpperCase();
                break;
            case "2102":
                s = e.encrypt(e.moveTo(a + t) + e.moveTo(a) + s).toUpperCase();
                break;
            case "2200":
                s = e.encrypt(a.length + t.length + e.moveTo(s) + s).toUpperCase();
                break;
            case "2300":
                s = e.encrypt(e.encrypt(a) + e.moveTo(c) + e.moveTo(s.substring(10, 15))).toUpperCase(),
                "0" == swjgmcft && (s = e.encrypt(e.moveTo(s) + t + c).toUpperCase());
                break;
            case "3100":
                s = e.encrypt(t + e.moveTo(a) + s + a).toUpperCase();
                break;
            case "3200":
                s = e.encrypt(e.moveTo(c) + e.moveTo(c) + s).toUpperCase();
                break;
            case "3300":
                s = e.encrypt(r(a) + e.moveTo(c) + s).toUpperCase();
                break;
            case "3302":
                s = e.encrypt(e.moveTo(a) + e.moveTo(r(c)) + s).toUpperCase();
                break;
            case "3400":
                s = e.encrypt(a + r(e.moveTo(c)) + r(s)).toUpperCase(),
                "0" == swjgmcft && (s = e.encrypt(e.moveTo(s) + t + r(s)).toUpperCase());
                break;
            case "3500":
                s = e.encrypt(r(a) + e.moveTo(c) + s).toUpperCase();
                break;
            case "3502":
                s = e.encrypt(r(a + e.moveTo(c)) + e.moveTo(s)).toUpperCase();
                break;
            case "3600":
                s = e.encrypt(p(a) + e.moveTo(s) + p(s)).toUpperCase();
                break;
            case "3700":
                s = e.encrypt(p(a) + e.moveTo(c) + r(s + a)).toUpperCase();
                break;
            case "3702":
                s = e.encrypt(e.moveTo(a + e.moveTo(c)) + s).toUpperCase();
                break;
            case "4100":
                s = e.encrypt(a + e.moveTo(e.moveTo(c) + s) + p(t)).toUpperCase();
                break;
            case "4200":
                s = e.encrypt(t + e.moveTo(e.moveTo(r(s)) + s) + r(t)).toUpperCase();
                break;
            case "4300":
                s = e.encrypt(e.moveTo(a) + e.moveTo(c) + s + p(s)).toUpperCase();
                break;
            case "4400":
                s = e.encrypt(e.encrypt(a + e.moveTo(c)) + e.moveTo(s)).toUpperCase();
                break;
            case "4403":
                s = e.encrypt(e.moveTo(a + e.moveTo(s)) + e.encrypt(s)).toUpperCase();
                break;
            case "4500":
                s = e.encrypt(e.moveTo(e.moveTo(a) + e.moveTo(c) + s)).toUpperCase(),
                "0" == swjgmcft && (s = e.encrypt(e.moveTo(s) + t + e.moveTo(c)).toUpperCase());
                break;
            case "4600":
                s = e.encrypt(e.moveTo(r(a) + p(t)) + e.moveTo(a) + s).toUpperCase();
                break;
            case "5000":
                s = e.encrypt(e.moveTo(a) + p(a) + e.moveTo(t) + s).toUpperCase();
                break;
            case "5100":
                s = e.encrypt(p(a) + e.moveTo(s + a) + r(s)).toUpperCase();
                break;
            case "5200":
                s = e.encrypt(e.moveTo(s) + e.moveTo(s + t) + s).toUpperCase();
                break;
            case "5300":
                s = e.encrypt(e.moveTo(a + e.moveTo(t)) + s).toUpperCase();
                break;
            case "5400":
                s = e.encrypt(p(e.moveTo(a)) + e.moveTo(c) + s).toUpperCase();
                break;
            case "6100":
                s = e.encrypt(r(a + e.moveTo(c)) + e.moveTo(s) + r(a + t)).toUpperCase();
                break;
            case "6200":
                s = e.encrypt(e.moveTo(a + e.moveTo(a + t + s)) + s).toUpperCase();
                break;
            case "6300":
                s = e.encrypt(e.moveTo(e.moveTo(r(a) + c)) + a + p(a + t)).toUpperCase(),
                "0" == swjgmcft && (s = e.encrypt(e.moveTo(s) + t + a + p(a + t)).toUpperCase());
                break;
            case "6400":
                s = e.encrypt(e.moveTo(a) + s + e.moveTo(c + p(a)) + s).toUpperCase();
                break;
            case "6500":
                s = e.encrypt(e.moveTo(t) + e.moveTo(e.moveTo(a + s)) + s).toUpperCase()
            }
            return s
        }
    })
}(jQuery);
