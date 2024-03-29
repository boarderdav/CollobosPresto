(function() {
    "use strict"; var p = this,
       aa = function(a) {
        var b = typeof a;
        return "object" === b && null  !== a || "function" === b;
    }, 
       ba = function(a, b, c) {
        return a.call.apply(a.bind, arguments);
    },
       ca = function(a, b, c) {
        if (!a) 
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c);
            };
        }
        return function() {
            return a.apply(b, arguments);
        };
    },
       q = function(a, b, c) {
        q = Function.prototype.bind && -1 !== Function.prototype.bind.toString().indexOf("native code") ? 
        ba : ca;
        return q.apply(null , arguments);
    },
       da = function(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ja = b.prototype;
        a.prototype = new c();
        a.Ia = function(a, c, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++)
                {g[h - 2] = arguments[h];
            return b.prototype[c].apply(a, g);
                }
        };
    }
    ;
    var la = (new Date).getTime();
    var ma = String.prototype.trim ? function(a) {
        return a.trim();
    }
     : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    },
       na = /&/g,
       oa = /</g,
       pa = />/g,
       qa = /"/g,
       ra = /'/g,
       sa = /\x00/g,
       ta = {
        "\x00": "\\0",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\x0B",
        '"': '\\"',
        "\\": "\\\\"
    },
       ua = {
        "'": "\\'"
    },
       va = function(a, b) {
        return a < b ? -1 : a > b ? 1 : 0;
    }
    ;
    var wa = function(a) {
        for (var b = Math.random, c = a.length - 1; 0 < c; c--) {
            var d = Math.floor(b() * (c + 1)),
               e = a[c];
            a[c] = a[d];
            a[d] = e;
        }
    }
    ;
    var Ea = function(a, b) {
        this.width = a;
        this.height = b;
    }
    ;
    Ea.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this;
    }
    ;
    Ea.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this;
    }
    ;
    var r;
    a: {
        var Fa = p.navigator;
        if (Fa) {
            var Ga = Fa.userAgent;
            if (Ga) {
                r = Ga;
                break a;
            }
        }
        r = "";
    }
    var t = function(a) {
        return -1 !== r.indexOf(a);
    }
    ;
    var Ha = t("Opera") || t("OPR"),
       u = t("Trident") || t("MSIE"),
       Ia = t("Edge"),
       Ja = t("Gecko") && !(-1 !== r.toLowerCase().indexOf("webkit") && !t("Edge")) && !(t("Trident") || t("MSIE")) && !t("Edge"),
       Ka = -1 !== r.toLowerCase().indexOf("webkit") && !t("Edge"),
       La = function() {
        var a = r;
        if (Ja)
            return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (Ia)
            return /Edge\/([\d\.]+)/.exec(a);
        if (u)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Ka)
            return /WebKit\/(\S+)/.exec(a);
    },
       Ma = function() {
        var a = p.document;
        return a ? a.documentMode : void 0;
    },
       Na = function() {
        if (Ha && 
        p.opera) {
            var a;
            var b = p.opera.version;
            try {
                a = b();
            } catch (c) {
                a = b;
            }
            return a;
        }
        a = "";
        (b = La()) && (a = b ? b[1] : "");
        return u && (b = Ma(),
        b > parseFloat(a)) ? String(b) : a
    }
    ()
      , Oa = {}
      , Pa = function(a) {
        if (!Oa[a]) {
            for (var b = 0, c = ma(String(Na)).split("."), d = ma(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || ""
                  , h = d[f] || ""
                  , n = RegExp("(\\d*)(\\D*)", "g")
                  , l = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var k = n.exec(g) || ["", "", ""]
                      , m = l.exec(h) || ["", "", ""];
                    if (0 == k[0].length && 0 == m[0].length)
                        break;
                    b = va(0 == k[1].length ? 0 : parseInt(k[1], 
                    10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || va(0 == k[2].length, 0 == m[2].length) || va(k[2], m[2])
                } while (0 == b)
            }
            Oa[a] = 0 <= b
        }
    }
      , Qa = p.document
      , Ra = Qa && u ? Ma() || ("CSS1Compat" == Qa.compatMode ? parseInt(Na, 10) : 5) : void 0;
    var Sa;
    if (!(Sa = !Ja && !u)) {
        var Ta;
        if (Ta = u)
            Ta = 9 <= Ra;
        Sa = Ta
    }
    Sa || Ja && Pa("1.9.1");
    u && Pa("9");
    var v = function(a) {
        v[" "](a);
        return a;
    }
    
    ;
    v[" "] = function() {}
    ;
    var Ua = function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
    }
    ;
    var x = function(a) {
        try {
            var b;
            if (b = !!a && null  != a.location.href)
                a: {
                    try {
                        v(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch (c) {
            return !1
        }
    }
      , Va = function() {
        var a = window;
        return x(a.top) ? a.top : null 
    }
      , Wa = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null ) : a.currentStyle
    }
      , z = function(a, b) {
        if (!(1E-4 > Math.random())) {
            var c = Math.random();
            if (c < b)
                return c = Xa(window),
                a[Math.floor(c * a.length)]
        }
        return null 
    }
      , Xa = function(a) {
        try {
            var b = new Uint32Array(1);
            a.crypto.getRandomValues(b);
            return b[0] / 65536 / 65536
        } catch (c) {
            return Math.random()
        }
    }
      , 
    Ya = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }
      , Za = /^([0-9.]+)px$/
      , $a = /^(-?[0-9.]{1,30})$/
      , sb = function(a) {
        return $a.test(a) && (a = Number(a),
        !isNaN(a)) ? a : null 
    }
      , tb = function(a) {
        return (a = Za.exec(a)) ? +a[1] : null 
    }
    ;
    var wb = function(a, b, c, d, e, f) {
        try {
            if ((d ? a.ca : Math.random()) < (e || a.U)) {
                var g = a.T + b + ub(c)
                  , g = g.substring(0, 2E3);
                "undefined" === typeof f ? vb(g) : vb(g, f)
            }
        } catch (h) {}
    }
      , ub = function(a) {
        var b = "";
        Ya(a, function(a, d) {
            if (0 === a || a)
                b += "&" + d + "=" + encodeURIComponent(String(a))
        }
        );
        return b
    }
      , vb = function(a, b) {
        p.google_image_requests || (p.google_image_requests = []);
        var c = p.document.createElement("img");
        if (b) {
            var d = function(a) {
                b(a);
                a = d;
                c.removeEventListener ? c.removeEventListener("load", a, !1) : c.detachEvent && c.detachEvent("onload", 
                a);
                a = d;
                c.removeEventListener ? c.removeEventListener("error", a, !1) : c.detachEvent && c.detachEvent("onerror", a)
            }
            ;
            Ua(c, "load", d);
            Ua(c, "error", d)
        }
        c.src = a;
        p.google_image_requests.push(c)
    }
    ;
    var xb = function(a, b, c) {
        this.$ = a;
        this.W = b;
        this.P = c;
        this.J = null ;
        this.V = this.u;
        this.ia = !1
    }
      , yb = function(a, b, c) {
        this.message = a;
        this.fileName = b || "";
        this.lineNumber = c || -1
    }
      , Ab = function(a, b, c, d, e) {
        var f;
        try {
            f = c()
        } catch (n) {
            var g = a.P;
            try {
                var h = zb(n)
                  , g = (e || a.V).call(a, b, h, void 0, d)
            } catch (l) {
                a.u("pAR", l)
            }
            if (!g)
                throw n;
        } finally {}
        return f
    }
      , Bb = function(a, b) {
        var c = A;
        return function() {
            var d = arguments;
            return Ab(c, a, function() {
                return b.apply(void 0, d)
            }
            , void 0)
        }
    }
    ;
    xb.prototype.u = function(a, b, c, d, e) {
        var f = {};
        f.context = a;
        b instanceof yb || (b = zb(b));
        f.msg = b.message.substring(0, 512);
        b.fileName && (f.file = b.fileName);
        0 < b.lineNumber && (f.line = b.lineNumber.toString());
        a = p.document;
        f.url = a.URL.substring(0, 512);
        f.ref = a.referrer.substring(0, 512);
        Cb(this, f, d);
        wb(this.$, e || this.W, f, this.ia, c);
        return this.P
    }
    ;
    var Cb = function(a, b, c) {
        if (a.J)
            try {
                a.J(b)
            } catch (d) {}
        if (c)
            try {
                c(b)
            } catch (d) {}
    }
      , zb = function(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            var c = a.stack
              , d = b;
            try {
                -1 == c.indexOf(d) && (c = d + "\n" + c);
                for (var e; c != e; )
                    e = c,
                    c = c.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = c.replace(/\n */g, "\n")
            } catch (f) {
                b = d
            }
        }
        return new yb(b,a.fileName,a.lineNumber)
    }
    ;
    var Db = document
      , E = window;
    var F = function(a, b) {
        for (var c in a)
            Object.prototype.hasOwnProperty.call(a, c) && b.call(null , a[c], c, a)
    }
      , Eb = function(a) {
        return !!a && "function" == typeof a && !!a.call
    }
      , Fb = function(a, b) {
        if (!(2 > arguments.length))
            for (var c = 1, d = arguments.length; c < d; ++c)
                a.push(arguments[c])
    }
      , H = function(a, b) {
        if (a.indexOf) {
            var c = a.indexOf(b);
            return 0 < c || 0 === c
        }
        for (c = 0; c < a.length; c++)
            if (a[c] === b)
                return !0;
        return !1
    }
      , Gb = function(a) {
        Ua(Db, "DOMContentLoaded", a)
    }
      , Hb = function(a) {
        a.google_unique_id ? ++a.google_unique_id : a.google_unique_id = 
        1
    }
      , Ib = function(a) {
        a = a.google_unique_id;
        return "number" == typeof a ? a : 0
    }
      , Jb = function(a) {
        var b = a.length;
        if (0 == b)
            return 0;
        for (var c = 305419896, d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
      , Kb = !!window.google_async_iframe_id
      , Lb = /(^| )adsbygoogle($| )/;
    var Mb, A, Nb = "http" + ("http:" == E.location.protocol ? "" : "s") + "://pagead2.googlesyndication.com/pagead/gen_204?id=";
    Mb = new function() {
        this.T = Nb;
        this.U = .01;
        this.ca = Math.random()
    }
    ;
    A = new xb(Mb,"jserror",!0);
    var Ob = function(a, b, c, d) {
        Ab(A, a, c, d, b)
    }
      , Pb = A.u
      , Qb = function(a, b) {
        return Bb(a, b)
    }
      , Rb = function(a) {
        return Bb("aa:reactiveTag", a)
    }
    ;
    var Sb = null 
      , Tb = function() {
        if (!Sb) {
            for (var a = window, b = a, c = 0; a && a != a.parent; )
                if (a = a.parent,
                c++,
                x(a))
                    b = a;
                else
                    break;
            Sb = b
        }
        return Sb
    }
    ;
    var I = {
        ka: {
            j: "17415661",
            i: "17415662"
        },
        Ga: {
            j: "453848100",
            i: "453848101"
        },
        ta: {
            j: "828064124",
            i: "828064125"
        },
        sa: {
            j: "828064127",
            i: "828064128"
        },
        ua: {
            j: "828064170",
            i: "828064171"
        },
        ma: {
            j: "453848130",
            i: "453848131",
            Ea: "453848132",
            Fa: "453848133"
        },
        wa: {
            j: "24819308",
            i: "24819309",
            la: "24819320"
        },
        va: {
            j: "24819330",
            i: "24819331"
        },
        ya: {
            j: "828064162",
            i: "828064163"
        },
        xa: {
            j: "828064164",
            i: "828064165",
            oa: "828064166"
        },
        qa: {
            j: "86724438",
            i: "86724439"
        },
        ra: {
            j: "828064190",
            i: "828064191"
        },
        Aa: {
            j: "10573503",
            i: "10573504"
        },
        D: {
            j: "10573593",
            i: "10573594"
        },
        Da: {
            j: "10573511",
            i: "10573512"
        },
        v: {
            j: "10573581",
            i: "10573582"
        },
        Ba: {
            j: "10573531",
            i: "10573532"
        },
        F: {
            j: "10573561",
            i: "10573562"
        },
        Ca: {
            j: "10573551",
            i: "10573552"
        },
        za: {
            j: "312815000",
            i: "312815001"
        },
        C: {
            j: "312815100",
            i: "312815101"
        },
        na: {
            j: "26835101",
            i: "26835102"
        },
        pa: {
            j: "35923720",
            i: "35923721"
        },
        G: {
            j: "35923760",
            i: "35923761"
        },
        Ha: {
            j: "27415001",
            i: "27415002"
        },
        H: {
            j: "20040000",
            i: "20040001"
        }
    };
    var K = function(a) {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? 0 : a
    }
      , Ub = function(a, b) {
        var c = parseInt(a, 10);
        return isNaN(c) ? b : c
    }
      , Vb = function(a, b) {
        return /^true$/.test(a) ? !0 : /^false$/.test(a) ? !1 : b
    }
      , Wb = /^([\w-]+\.)*([\w-]{2,})(\:[0-9]+)?$/
      , Xb = function(a, b) {
        if (!a)
            return b;
        var c = a.match(Wb);
        return c ? c[0] : b
    }
    ;
    var Yb = K("0.15")
      , Zb = K("0.0")
      , $b = Ub("101", -1)
      , ac = Ub("10", 0)
      , bc = K("0.05")
      , cc = K("0.001")
      , dc = K("0.0")
      , ec = K("")
      , fc = K("0.001")
      , gc = K("0.2")
      , hc = Vb("true", 
    !0)
      , Ic = K("")
      , Jc = K("0.001")
      , Kc = K("")
      , Lc = K("0.01");
    var Mc = Vb("false", !1)
      , Nc = Vb("true", !1)
      , Oc = Nc || !Mc;
    var Pc = function() {}
      , Rc = function(a, b, c) {
        switch (typeof b) {
        case "string":
            Qc(b, c);
            break;
        case "number":
            c.push(isFinite(b) && !isNaN(b) ? b : "null");
            break;
        case "boolean":
            c.push(b);
            break;
        case "undefined":
            c.push("null");
            break;
        case "object":
            if (null  == b) {
                c.push("null");
                break
            }
            if (b instanceof Array || void 0 != b.length && b.splice) {
                var d = b.length;
                c.push("[");
                for (var e = "", f = 0; f < d; f++)
                    c.push(e),
                    Rc(a, b[f], c),
                    e = ",";
                c.push("]");
                break
            }
            c.push("{");
            d = "";
            for (e in b)
                b.hasOwnProperty(e) && (f = b[e],
                "function" != typeof f && (c.push(d),
                Qc(e, 
                c),
                c.push(":"),
                Rc(a, f, c),
                d = ","));
            c.push("}");
            break;
        case "function":
            break;
        default:
            throw Error("Unknown type: " + typeof b);
        }
    }
      , Sc = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , Tc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g
      , Qc = function(a, b) {
        b.push('"');
        b.push(a.replace(Tc, function(a) {
            if (a in Sc)
                return Sc[a];
            var b = a.charCodeAt(0)
              , e = "\\u";
            16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
            return Sc[a] = e + b.toString(16)
        }
        ));
        b.push('"')
    }
    ;
    var Uc = null 
      , Vc = Ja || Ka || Ha || "function" == typeof p.atob;
    var Wc = {
        google_ad_modifications: !0,
        google_analytics_domain_name: !0,
        google_analytics_uacct: !0
    }
      , Xc = function(a) {
        a.google_page_url && (a.google_page_url = String(a.google_page_url));
        var b = [];
        F(a, function(a, d) {
            if (null  != a) {
                var e;
                try {
                    var f = [];
                    Rc(new Pc, a, f);
                    e = f.join("")
                } catch (g) {}
                e && (e = e.replace(/\//g, "\\$&"),
                Fb(b, d, "=", e, ";"))
            }
        }
        );
        return b.join("")
    }
    ;
    var Yc = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4
    };
    var L = function(a) {
        a = a.document;
        return ("CSS1Compat" == a.compatMode ? a.documentElement : a.body) || {}
    }
    ;
    var Zc = function(a, b, c) {
        Ob("files::getSrc", Pb, function() {
            if ("https:" == E.location.protocol && "http" == c)
                throw c = "https",
                Error("Requested url " + a + b);
        }
        );
        return [c, "://", a, b].join("")
    }
      , $c = function(a, b, c) {
        c || (c = Oc ? "https" : "http");
        return Zc(a, b, c)
    }
    ;
    var M = function(a) {
        return (a = a.google_ad_modifications) ? a.loeids || [] : []
    }
      , ad = function(a, b, c) {
        if (!a)
            return null ;
        for (var d = 0; d < a.length; ++d)
            if ((a[d].ad_slot || b) == b && (a[d].ad_tag_origin || c) == c)
                return a[d];
        return null 
    }
    ;
    var bd = null ;
    var cd = function(a) {
        this.s = a;
        a.google_iframe_oncopy || (a.google_iframe_oncopy = {
            handlers: {},
            upd: q(this.ha, this)
        });
        this.ea = a.google_iframe_oncopy
    }
    , dd;
    var Q = "var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}";
    /[\x00&<>"']/.test(Q) && (-1 != Q.indexOf("&") && (Q = Q.replace(na, "&amp;")),
    -1 != Q.indexOf("<") && (Q = Q.replace(oa, "&lt;")),
    -1 != Q.indexOf(">") && (Q = Q.replace(pa, "&gt;")),
    -1 != Q.indexOf('"') && (Q = Q.replace(qa, "&quot;")),
    -1 != Q.indexOf("'") && (Q = Q.replace(ra, "&#39;")),
    -1 != Q.indexOf("\x00") && (Q = Q.replace(sa, "&#0;")));
    dd = Q;
    cd.prototype.set = function(a, b) {
        this.ea.handlers[a] = b;
        this.s.addEventListener && this.s.addEventListener("load", q(this.X, this, a), !1)
    }
    ;
    cd.prototype.X = function(a) {
        a = this.s.document.getElementById(a);
        try {
            var b = a.contentWindow.document;
            if (a.onload && b && (!b.body || !b.body.firstChild))
                a.onload()
        } catch (c) {}
    }
    ;
    cd.prototype.ha = function(a, b) {
        var c = ed("rx", a), d;
        a: {
            if (a && (d = a.match("dt=([^&]+)")) && 2 == d.length) {
                d = d[1];
                break a
            }
            d = ""
        }
        d = (new Date).getTime() - d;
        c = c.replace(/&dtd=(\d+|M)/, "&dtd=" + (1E4 > d ? d + "" : "M"));
        this.set(b, c);
        return c
    }
    ;
    var ed = function(a, b) {
        var c = new RegExp("\\b" + a + "=(\\d+)")
          , d = c.exec(b);
        d && (b = b.replace(c, a + "=" + (+d[1] + 1 || 1)));
        return b
    }
    ;
    var fd = function(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    }
    ;
    var gd = function() {
        var a;
        try {
            a = parseInt(E.localStorage.getItem("google_experiment_mod"), 10)
        } catch (b) {
            return null 
        }
        if (0 <= a && 1E3 > a)
            return a;
        a = Math.floor(1E3 * Xa(E));
        try {
            return E.localStorage.setItem("google_experiment_mod", "" + a),
            a
        } catch (b) {
            return null 
        }
    }
    ;
    var hd = new function() {
        this.aa = new fd(100,199)
    }
    ;
    var id = function(a, b, c) {
        return E.location && E.location.hash == "#google_plle_" + c ? c : z([b, c], a)
    }
      , jd = function(a, b, c, d) {
        a = a.google_active_plles = a.google_active_plles || [];
        return H(M(b), c) ? (a.push(c),
        c) : H(M(b), d) ? (a.push(d),
        d) : null 
    }
    ;
    var kd = !1
      , ld = function(a, b, c) {
        var d = ["<iframe"], e;
        for (e in a)
            a.hasOwnProperty(e) && Fb(d, e + "=" + a[e]);
        e = "left:0;position:absolute;top:0;";
        kd && (e = e + "width:" + b + "px;height:" + c + "px;");
        d.push('style="' + e + '"');
        d.push("></iframe>");
        a = a.id;
        b = "border:none;height:" + c + "px;margin:0;padding:0;position:relative;visibility:visible;width:" + b + "px;background-color:transparent";
        return ['<ins id="', a + "_expand", '" style="display:inline-table;', b, '"><ins id="', a + "_anchor", '" style="display:block;', b, '">', d.join(" "), "</ins></ins>"].join("")
    }
    ;
    var md = function(a) {
        if (!a)
            return "";
        (a = a.toLowerCase()) && "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    }
    ;
    var nd = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };
    var od = "google_ad_client google_ad_format google_ad_height google_ad_width google_city google_country google_encoding google_language google_page_url".split(" ")
      , pd = function(a) {
        try {
            var b = a.top.google_ads_params_store;
            if (b)
                return b;
            b = a.top.google_ads_params_store = {};
            if (b === a.top.google_ads_params_store)
                return b
        } catch (c) {}
        return null 
    }
    ;
    var qd, R = function(a) {
        this.B = [];
        this.s = a || window;
        this.o = 0;
        this.A = null ;
        this.S = 0
    }
    , rd = function(a, b) {
        this.Y = a;
        this.ja = b
    }
    ;
    R.prototype.enqueue = function(a, b) {
        0 != this.o || 0 != this.B.length || b && b != window ? this.K(a, b) : (this.o = 2,
        this.O(new rd(a,window)))
    }
    ;
    R.prototype.K = function(a, b) {
        this.B.push(new rd(a,b || this.s));
        sd(this)
    }
    ;
    R.prototype.Z = function(a) {
        this.o = 1;
        if (a) {
            var b = Qb("sjr::timeout", q(this.N, this, !0));
            this.A = this.s.setTimeout(b, a)
        }
    }
    ;
    R.prototype.N = function(a) {
        a && ++this.S;
        1 == this.o && (null  != this.A && (this.s.clearTimeout(this.A),
        this.A = null ),
        this.o = 0);
        sd(this)
    }
    ;
    R.prototype.da = function() {
        return !(!window || !Array)
    }
    ;
    R.prototype.fa = function() {
        return this.S
    }
    ;
    R.prototype.nq = R.prototype.enqueue;
    R.prototype.nqa = R.prototype.K;
    R.prototype.al = R.prototype.Z;
    R.prototype.rl = R.prototype.N;
    R.prototype.sz = R.prototype.da;
    R.prototype.tc = R.prototype.fa;
    var sd = function(a) {
        var b = Qb("sjr::tryrun", q(a.ga, a));
        a.s.setTimeout(b, 0)
    }
    ;
    R.prototype.ga = function() {
        if (0 == this.o && this.B.length) {
            var a = this.B.shift();
            this.o = 2;
            var b = Qb("sjr::run", q(this.O, this, a));
            a.ja.setTimeout(b, 0);
            sd(this)
        }
    }
    ;
    R.prototype.O = function(a) {
        this.o = 0;
        a.Y()
    }
    ;
    var td = function(a) {
        try {
            return a.sz()
        } catch (b) {
            return !1
        }
    }
      , ud = function(a) {
        return !!a && ("object" == typeof a || "function" == typeof a) && td(a) && Eb(a.nq) && Eb(a.nqa) && Eb(a.al) && Eb(a.rl)
    }
      , vd = function() {
        if (qd && td(qd))
            return qd;
        var a = Tb()
          , b = a.google_jobrunner;
        return ud(b) ? qd = b : a.google_jobrunner = qd = new R(a)
    }
      , wd = function(a, b) {
        vd().nq(a, b)
    }
      , xd = function(a, b) {
        vd().nqa(a, b)
    }
    ;
    var T = function(a) {
        this.name = "TagError";
        this.message = a || "";
        Error.captureStackTrace ? Error.captureStackTrace(this, T) : this.stack = Error().stack || ""
    }
    ;
    da(T, Error);
    var yd = Kb ? 1 == Ib(E) : !Ib(E)
      , zd = function() {
        var a = Nc ? "https" : "http", b = v("script"), c;
        c = Xb("", "pagead2.googlesyndication.com");
        return ["<", b, ' src="', $c(c, "/pagead/js/r20150929/r20150820/show_ads_impl.js", a), '"></', b, ">"].join("")
    }
      , Ad = function(a, b, c, d) {
        return function() {
            var e = !1;
            d && vd().al(3E4);
            var f = a.document.getElementById(b);
            f && !x(f.contentWindow) && 
            3 == a.google_top_js_status && (a.google_top_js_status = 6);
            try {
                var g = a.document.getElementById(b).contentWindow;
                if (x(g)) {
                    var h = a.document.getElementById(b).contentWindow
                      , n = h.document;
                    n.body && n.body.firstChild || (n.open(),
                    h.google_async_iframe_close = !0,
                    n.write(c))
                } else {
                    var l = a.document.getElementById(b).contentWindow, k;
                    f = c;
                    f = String(f);
                    if (f.quote)
                        k = f.quote();
                    else {
                        g = ['"'];
                        for (h = 0; h < f.length; h++) {
                            var m = f.charAt(h), S = m.charCodeAt(0), n = g, ea = h + 1, J;
                            if (!(J = ta[m])) {
                                var N;
                                if (31 < S && 127 > S)
                                    N = m;
                                else {
                                    var B = m;
                                    if (B in ua)
                                        N = 
                                        ua[B];
                                    else if (B in ta)
                                        N = ua[B] = ta[B];
                                    else {
                                        var w = B
                                          , C = B.charCodeAt(0);
                                        if (31 < C && 127 > C)
                                            w = B;
                                        else {
                                            if (256 > C) {
                                                if (w = "\\x",
                                                16 > C || 256 < C)
                                                    w += "0"
                                            } else
                                                w = "\\u",
                                                4096 > C && (w += "0");
                                            w += C.toString(16).toUpperCase()
                                        }
                                        N = ua[B] = w
                                    }
                                }
                                J = N
                            }
                            n[ea] = J
                        }
                        g.push('"');
                        k = g.join("")
                    }
                    l.location.replace("javascript:" + k)
                }
                e = !0
            } catch (xa) {
                l = Tb().google_jobrunner,
                ud(l) && l.rl()
            }
            e && (e = ed("google_async_rrc", c),
            (new cd(a)).set(b, Ad(a, b, e, !1)))
        }
    }
      , Bd = function(a) {
        var b = ["<iframe"];
        F(a, function(a, d) {
            null  != a && b.push(" " + d + '="' + a + '"')
        }
        );
        b.push("></iframe>");
        return b.join("")
    }
      , Dd = function(a, b, c) {
        Cd(a, b, c, function(a, b, f) {
            for (var g = a.document, h = b.id, n = 0; !h || g.getElementById(h); )
                h = "aswift_" + n++;
            b.id = h;
            b.name = h;
            var h = Number(f.google_ad_width)
              , n = Number(f.google_ad_height)
              , l = I.G;
            jd(f, a, l.j, l.i);
            kd = H(M(a), l.i);
            16 == f.google_reactive_ad_format ? (a = g.createElement("div"),
            a.innerHTML = ld(b, h, n),
            c.appendChild(a.firstChild)) : c.innerHTML = ld(b, h, n);
            return b.id
        }
        )
    }
      , Cd = function(a, b, c, d) {
        var e = v("script"), f, g;
        a: {
            try {
                var h = a.top.google_pubvars_reuse_experiment;
                if ("undefined" !== 
                typeof h) {
                    g = h;
                    break a
                }
                h = z(["C", "E"], Ic) || null ;
                a.top.google_pubvars_reuse_experiment = h;
                if (a.top.google_pubvars_reuse_experiment === h) {
                    g = h;
                    break a
                }
            } catch (fa) {}
            g = null 
        }
        if ("E" === g) {
            var n = null  != b.google_ad_client
              , l = null  != b.google_ad_width
              , k = null  != b.google_ad_height
              , m = pd(a);
            if (m) {
                for (var S = 0; S < od.length; S++) {
                    var ea = od[S];
                    null  != b[ea] && (m[ea] = b[ea])
                }
                var J = pd(a);
                if (J) {
                    var N = J.google_ad_width
                      , B = J.google_ad_height
                      , w = J.google_ad_format;
                    if (N && B && w) {
                        var C, xa = w && w.match(/(\d+)x(\d+)/);
                        C = xa ? {
                            width: xa[1],
                            height: xa[2]
                        } : 
                        null ;
                        !C || C.width == N && C.height == B || delete J.google_ad_format
                    }
                }
            }
            var ab = pd(a);
            if (ab)
                for (var bb = 0; bb < od.length; bb++) {
                    var ya = od[bb];
                    null  == b[ya] && null  != ab[ya] && (b[ya] = ab[ya])
                }
            var ce = null  != b.google_ad_client
              , de = null  != b.google_ad_width
              , ee = null  != b.google_ad_height;
            f = [n ? "c2" : ce ? "c1" : "c0", l ? "w2" : de ? "w1" : "w0", k ? "h2" : ee ? "h1" : "h0"].join()
        }
        var D = {}
          , fe = b.google_ad_height;
        D.width = '"' + b.google_ad_width + '"';
        D.height = '"' + fe + '"';
        D.frameborder = '"0"';
        D.marginwidth = '"0"';
        D.marginheight = '"0"';
        D.vspace = '"0"';
        D.hspace = '"0"';
        D.allowtransparency = '"true"';
        D.scrolling = '"no"';
        D.allowfullscreen = '"true"';
        D.onload = '"' + dd + '"';
        var cb = d(a, D, b), za;
        za = Ed(b) ? z(["c", "e"], gc) : null ;
        var ic = b.google_ad_output
          , G = b.google_ad_format;
        G || "html" != ic && null  != ic || (G = b.google_ad_width + "x" + b.google_ad_height,
        "e" == za && (G += "_as"),
        b.google_ad_format_suffix && (G += b.google_ad_format_suffix));
        var ge = !b.google_ad_slot || Ed(b)
          , G = G && ge ? G.toLowerCase() : "";
        b.google_ad_format = G;
        for (var jc = [b.google_ad_slot, b.google_ad_format, b.google_ad_type, b.google_ad_width, 
        b.google_ad_height], kc, lc = [], mc = 0, ga = c; ga && 25 > mc; ga = ga.parentNode,
        ++mc)
            lc.push(9 != ga.nodeType && ga.id || "");
        (kc = lc.join()) && jc.push(kc);
        b.google_ad_unit_key = Jb(jc.join(":")).toString();
        var nc = a.google_adk2_experiment = a.google_adk2_experiment || z(["C", "E"], fc) || "N";
        if ("E" == nc) {
            for (var y = c, oc = [], pc = 0; y && 25 > pc; ++pc) {
                var Aa = "", Aa = (Aa = 9 != y.nodeType && y.id) ? "/" + Aa : "", db;
                a: {
                    if (y && y.nodeName && y.parentElement)
                        for (var he = y.nodeName.toString().toLowerCase(), qc = y.parentElement.childNodes, rc = 0, eb = 0; eb < qc.length; ++eb) {
                            var fb = 
                            qc[eb];
                            if (fb.nodeName && fb.nodeName.toString().toLowerCase() == he) {
                                if (y == fb) {
                                    db = "." + rc;
                                    break a
                                }
                                ++rc
                            }
                        }
                    db = ""
                }
                oc.push((y.nodeName && y.nodeName.toString().toLowerCase()) + Aa + db);
                y = y.parentElement
            }
            var ie = oc.join() + ":"
              , V = a
              , sc = [];
            if (V)
                try {
                    for (var ha = V.parent, tc = 0; ha && ha != V && 25 > tc; ++tc) {
                        for (var uc = ha.frames, Ba = 0; Ba < uc.length; ++Ba)
                            if (V == uc[Ba]) {
                                sc.push(Ba);
                                break
                            }
                        V = ha;
                        ha = V.parent
                    }
                } catch (fa) {}
            b.google_ad_unit_key_2 = Jb(ie + sc.join()).toString()
        } else
            "C" == nc && (b.google_ad_unit_key_2 = "ctrl");
        var je = Xc(b)
          , W = null 
          , gb = z(["C", 
        "E"], Jc);
        if ("E" == gb) {
            a: {
                try {
                    if (window.JSON && window.JSON.stringify && window.encodeURIComponent) {
                        var hb = encodeURIComponent(window.JSON.stringify(b)), ib;
                        if (Vc)
                            ib = p.btoa(hb);
                        else {
                            for (var O = [], vc = 0, jb = 0; jb < hb.length; jb++) {
                                for (var ia = hb.charCodeAt(jb); 255 < ia; )
                                    O[vc++] = ia & 255,
                                    ia >>= 8;
                                O[vc++] = ia
                            }
                            if (!Uc) {
                                Uc = {};
                                for (var Ca = 0; 65 > Ca; Ca++)
                                    Uc[Ca] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(Ca)
                            }
                            for (var Da = Uc, wc = [], P = 0; P < O.length; P += 3) {
                                var xc = O[P]
                                  , yc = P + 1 < O.length
                                  , zc = yc ? O[P + 1] : 0
                                  , Ac = P + 2 < 
                                O.length
                                  , Bc = Ac ? O[P + 2] : 0
                                  , ke = xc >> 2
                                  , le = (xc & 3) << 4 | zc >> 4
                                  , Cc = (zc & 15) << 2 | Bc >> 6
                                  , Dc = Bc & 63;
                                Ac || (Dc = 64,
                                yc || (Cc = 64));
                                wc.push(Da[ke], Da[le], Da[Cc], Da[Dc])
                            }
                            ib = wc.join("")
                        }
                        W = ib;
                        break a
                    }
                    wb(Mb, "sblob", {
                        json: window.JSON ? 1 : 0,
                        eURI: window.encodeURIComponent ? 1 : 0
                    }, !0, void 0, void 0)
                } catch (fa) {
                    A.u("sblob", fa, void 0, void 0)
                }
                W = ""
            }
            W || (W = "{X}")
        } else
            "C" == gb && (W = "{C}");
        var kb;
        var me = b.google_ad_client, lb;
        if (lb = yd) {
            if (!bd)
                b: {
                    for (var mb = [E.top], nb = [], ne = 0, ja; ja = mb[ne++]; ) {
                        nb.push(ja);
                        try {
                            if (ja.frames)
                                for (var oe = ja.frames.length, 
                                ob = 0; ob < oe && 1024 > mb.length; ++ob)
                                    mb.push(ja.frames[ob])
                        } catch (fa) {}
                    }
                    for (var pb = 0; pb < nb.length; pb++)
                        try {
                            var Ec = nb[pb].frames.google_esf;
                            if (Ec) {
                                bd = Ec;
                                break b
                            }
                        } catch (fa) {}
                    bd = null 
                }
            lb = !bd
        }
        if (lb) {
            var ka = {
                style: "display:none"
            };
            ka["data-ad-client"] = md(me);
            ka.id = "google_esf";
            ka.name = "google_esf";
            ka.src = $c(Xb("", "googleads.g.doubleclick.net"), "/pagead/html/r20150929/r20150820/zrt_lookup.html");
            kb = Bd(ka)
        } else
            kb = 
            "";
        var qb = la
          , Fc = (new Date).getTime()
          , Gc = a.google_top_experiment
          , rb = a.google_async_for_oa_experiment;
        rb && (a.google_async_for_oa_experiment = void 0);
        var Hc = a.google_always_use_delayed_impressions_experiment
          , pe = ["<!doctype html><html><body>", kb, "<", e, ">", je, "google_show_ads_impl=true;google_unique_id=", a.google_unique_id, ';google_async_iframe_id="', cb, '";google_start_time=', qb, ";", gb ? 'google_pub_vars = "' + W + '";' : "", f ? 'google_pubvars_reuse_experiment_result = "' + f + '";' : "", Gc ? 'google_top_experiment="' + 
        Gc + '";' : "", rb ? 'google_async_for_oa_experiment="' + rb + '";' : "", Hc ? 'google_always_use_delayed_impressions_experiment="' + Hc + '";' : "", za ? 'google_append_as_for_format_override="' + za + '";' : "", "google_bpp=", Fc > qb ? Fc - qb : 1, ";google_async_rrc=0;</", e, ">", zd(), "</body></html>"].join("");
        (a.document.getElementById(cb) ? wd : xd)(Ad(a, cb, pe, !0))
    }
      , Fd = Math.floor(1E6 * Math.random())
      , Gd = function(a) {
        var b;
        try {
            b = {};
            for (var c = a.data.split("\n"), d = 0; d < c.length; d++) {
                var e = c[d].indexOf("=");
                -1 != e && (b[c[d].substr(0, e)] = c[d].substr(e + 
                1))
            }
        } catch (f) {}
        c = b[3];
        if (b[1] == Fd && (window.google_top_js_status = 4,
        a.source == top && 0 == c.indexOf(a.origin) && (window.google_top_values = b,
        window.google_top_js_status = 5),
        window.google_top_js_callbacks)) {
            for (a = 0; a < window.google_top_js_callbacks.length; a++)
                window.google_top_js_callbacks[a]();
            window.google_top_js_callbacks.length = 0
        }
    }
      , Ed = function(a) {
        return a.google_override_format || !nd[a.google_ad_width + "x" + a.google_ad_height] && "aa" == a.google_loader_used
    }
      , Hd = function(a, b) {
        var c = navigator;
        if (hc && a && b && c) {
            var d = 
            a.document
              , c = d.createElement("script")
              , e = md(b);
            c.async = !0;
            c.type = "text/javascript";
            c.src = $c("pagead2.googlesyndication.com", "/pub-config/" + e + ".js");
            d = d.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(c, d)
        }
    }
    ;
    var U = function(a, b) {
        this.M = a;
        this.L = b
    }
    ;
    U.prototype.minWidth = function() {
        return this.M
    }
    ;
    U.prototype.height = function() {
        return this.L
    }
    ;
    U.prototype.w = function(a) {
        return 300 < a && 300 < this.L ? this.M : 1200 < a ? 1200 : Math.round(a)
    }
    ;
    var Id = function(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }
      , Jd = function(a) {
        var b = Infinity;
        do {
            var c;
            a: {
                if (a && a.style && a.style.height && (c = /^(\d+)px$/.exec(a.style.height))) {
                    c = +c[1];
                    break a
                }
                c = null 
            }
            c && (b = Math.min(b, c))
        } while (a = a.parentNode);return b
    }
    ;
    var Kd = function() {
        return t("iPad") || t("Android") && !t("Mobile") || t("Silk")
    }
    ;
    var Ld = function(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f;
                f = tb(a[c[d]]);
                f = null  === f ? null  : Math.round(f);
                null  != f && (b[e] = f)
            }
        }
    }
      , Md = function(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect()
              , d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null 
        }
    }
    ;
    var Nd = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4,
        autorelaxed: 1
    }
      , X = function(a, b, c) {
        U.call(this, a, b);
        this.ba = c
    }
    ;
    da(X, U);
    var Od = function(a) {
        return function(b) {
            return !!(b.ba & a)
        }
    }
      , Pd = [new X(970,90,2), new X(728,90,2), new X(468,60,2), new X(336,280,1), new X(320,100,2), new X(320,50,2), new X(300,600,4), new X(300,250,1), new X(250,250,1), new X(234,60,2), new X(200,200,1), new X(180,150,1), new X(160,600,4), new X(125,125,1), new X(120,600,4), new X(120,240,4)];
    var Qd = [{
        l: [3, 0, 0],
        m: [6, 12, 14, 0, 1, 3, 2, 4, 13, 5, 7, 8, 9, 10, 11, 15]
    }, {
        l: [3, 0, 1],
        m: [6, 15, 0, 1, 2, 3, 4, 13, 5, 7, 8, 9, 10, 11, 12, 14]
    }, {
        l: [3, 0, 2],
        m: [6, 15, 0, 1, 2, 3, 4, 7, 8, 9, 10, 13, 5, 11, 12, 14]
    }, {
        l: [3, 1, 0],
        m: [6, 12, 15, 0, 1, 3, 4, 13, 2, 5, 7, 8, 9, 10, 11, 14]
    }, {
        l: [3, 1, 1],
        m: [6, 15, 0, 1, 7, 8, 11, 2, 3, 4, 5, 9, 10, 12, 13, 14]
    }, {
        l: [3, 1, 2],
        m: [6, 15, 0, 1, 2, 3, 4, 7, 9, 11, 5, 8, 10, 12, 13, 14]
    }, {
        l: [3, 2, 0],
        m: [0, 6, 12, 15, 1, 2, 3, 4, 13, 5, 7, 8, 9, 10, 11, 14]
    }, {
        l: [3, 2, 1],
        m: [0, 6, 12, 14, 1, 2, 3, 4, 13, 5, 7, 8, 9, 10, 11, 15]
    }, {
        l: [3, 2, 2],
        m: [0, 15, 1, 2, 3, 4, 13, 9, 5, 6, 7, 8, 10, 11, 12, 14]
    }, {
        l: [2, 0, 
        0],
        m: [6, 15, 0, 1, 3, 2, 7, 8, 10, 13, 9, 4, 5, 11, 12, 14]
    }, {
        l: [2, 0, 1],
        m: [6, 15, 0, 1, 2, 3, 7, 8, 4, 10, 9, 13, 5, 11, 12, 14]
    }, {
        l: [2, 0, 2],
        m: [0, 15, 1, 2, 3, 4, 7, 8, 13, 5, 6, 9, 10, 11, 12, 14]
    }, {
        l: [4, 0, 0],
        m: [6, 12, 14, 15, 0, 1, 7, 2, 8, 11, 9, 3, 4, 5, 10, 13]
    }, {
        l: [4, 0, 1],
        m: [6, 12, 14, 0, 1, 2, 3, 4, 7, 8, 11, 13, 5, 9, 10, 15]
    }, {
        l: [4, 0, 2],
        m: [6, 15, 0, 1, 2, 3, 5, 7, 8, 13, 9, 4, 10, 11, 12, 14]
    }]
      , Sd = function(a, b) {
        var c;
        a: {
            c = !Kd() && (t("iPod") || t("iPhone") || t("Android") || t("IEMobile")) ? 2 : Kd() ? 4 : 3;
            var d = Md(b, a);
            c = [c, d && 3 == c ? 83 > d.x ? 0 : 265 > d.x ? 1 : 2 : 0, Rd(c, d)];
            for (d = 0; d < Qd.length; ++d) {
                var e = 
                Qd[d], f;
                b: if (f = e.l,
                c && "number" == typeof c.length && f && "number" == typeof f.length && c.length == f.length) {
                    for (var g = c.length, h = 0; h < g; h++)
                        if (c[h] !== f[h]) {
                            f = !1;
                            break b
                        }
                    f = !0
                } else
                    f = !1;
                if (f) {
                    c = e.m;
                    break a
                }
            }
            throw Error("No format for " + c);
        }
        d = [];
        for (e = 0; e < c.length; ++e)
            d.push(Pd[c[e]]);
        return d
    }
      , Rd = function(a, b) {
        if (!b)
            return 0;
        var c = b.y;
        switch (a) {
        case 2:
            return 285 > c ? 0 : 1396 > c ? 1 : 2;
        case 4:
            return 275 > c ? 0 : 1057 > c ? 1 : 2;
        default:
            return 216 > c ? 0 : 838 > c ? 1 : 2
        }
    }
    ;
    var Td = function(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b))
                    return !1;
            return !0
        }
    }
      , Ud = function(a, b, c) {
        for (var d = a.length, e = null , f = 0; f < d; ++f) {
            var g = a[f];
            if (b(g)) {
                if (!c || c(g))
                    return g;
                null  === e && (e = g)
            }
        }
        return e
    }
    ;
    var Zd = function(a, b, c, d, e, f) {
        var g;
        g = Vd(c) ? Sd(c, d) : Pd.slice(0).sort(Wd);
        H(M(c), I.v.i) && wa(g);
        var h = 488 > L(c).clientWidth;
        c = [Id(a), Xd(h), Yd(h, c, d)];
        h = [];
        a = "adsbygoogle.push() error: No slot size for availableWidth=" + a;
        if (f) {
            var n = Jd(d);
            c.push(function(a) {
                return a.height() <= n
            }
            );
            a += " and availableHeight=" + n
        }
        (e ? h : c).push(Od(b));
        b = Ud(g, Td(c), Td(h));
        if (!b)
            throw new T(a);
        return b
    }
      , $d = function(a, b, c) {
        if ("auto" == c)
            return c = L(a).clientWidth,
            c = Math.min(1200, c),
            b /= c,
            Vd(a) && !(488 > L(a).clientWidth) && .6 < b ? 2 : .25 >= 
            b ? 4 : 3;
        a = 0;
        for (var d in Nd)
            -1 != c.indexOf(d) && (a |= Nd[d]);
        return a
    }
      , Wd = function(a, b) {
        return b.minWidth() - a.minWidth() || b.height() - a.height()
    }
      , Xd = function(a) {
        return function(b) {
            return !(320 == b.minWidth() && (a && 50 == b.height() || !a && 100 == b.height()))
        }
    }
      , Yd = function(a, b, c) {
        var d = a && ae(c, b);
        return function(a) {
            return !(d && 250 <= a.height())
        }
    }
      , ae = function(a, b) {
        var c = Math.min(L(b).clientHeight, 16 * L(b).clientWidth / 9)
          , d = Md(a, b);
        return (d ? d.y : 0) < c - 100
    }
      , Vd = function(a) {
        return H(M(a), I.D.i) || be(a)
    }
      , be = function(a) {
        var b = I.F;
        return "LE" == a.google_responsive_override_logs_experiment || H(M(a), b.i)
    }
    ;
    var Y = function(a, b) {
        U.call(this, a, b)
    }
    ;
    da(Y, U);
    Y.prototype.w = function(a) {
        return Math.min(1200, Math.round(a))
    }
    ;
    var qe = [new Y(301,300), new Y(120,600)]
      , re = [new Y(468,300), new Y(414,828), new Y(384,768), new Y(375,750), new Y(360,720), new Y(320,640), new Y(120,600)]
      , se = function(a, b) {
        var c = Ud(a, Id(b));
        if (!c)
            throw new T("adsbygoogle.push() error: No autorelaxed size for width=" + b + "px");
        return c
    }
    ;
    var Z = function(a, b) {
        U.call(this, a, b)
    }
    ;
    da(Z, U);
    Z.prototype.w = function() {
        return this.minWidth()
    }
    ;
    var te = [new Z(728,15), new Z(468,15), new Z(200,90), new Z(180,90), new Z(160,90), new Z(120,90)];
    var ue = function(a) {
        return Lb.test(a.className) && "done" != a.getAttribute("data-adsbygoogle-status")
    }
      , we = function(a, b) {
        var c = window;
        a.setAttribute("data-adsbygoogle-status", "done");
        ve(a, b, c)
    }
      , ve = function(a, b, c) {
        xe(a, b, c);
        if (!ye(a, b, c)) {
            if (b.google_reactive_ads_config) {
                if (ze)
                    throw new T("adsbygoogle.push() error: Only one 'enable_page_level_ads' allowed per page.");
                ze = !0
            }
            Hb(c);
            1 == Ib(c) && Hd(c, b.google_ad_client);
            F(Wc, function(a, d) {
                b[d] = b[d] || c[d]
            }
            );
            b.google_loader_used = "aa";
            var d = b.google_ad_output;
            if (d && 
            "html" != d)
                throw new T("adsbygoogle.push() error: No support for google_ad_output=" + d);
            Ob("aa::load", Pb, function() {
                Dd(c, b, a)
            }
            )
        }
    }
      , ye = function(a, b, c) {
        var d = b.google_reactive_ads_config;
        if (d)
            var e = d.page_level_pubvars
              , f = (aa(e) ? e : {}).google_tag_origin;
        var g = b.google_ad_slot
          , e = c.google_ad_modifications;
        !e || ad(e.ad_whitelist, g, f || b.google_tag_origin) ? e = null  : (f = e.space_collapsing || "none",
        e = (g = ad(e.ad_blacklist, g)) ? {
            I: !0,
            R: g.space_collapsing || f
        } : e.remove_ads_by_default ? {
            I: !0,
            R: f
        } : null );
        return e && e.I && "on" != 
        b.google_adtest ? ("slot" == e.R && (null  !== sb(a.getAttribute("width")) && a.setAttribute("width", 0),
        null  !== sb(a.getAttribute("height")) && a.setAttribute("height", 0),
        a.style.width = "0px",
        a.style.height = "0px"),
        !0) : !(e = Wa(a, c)) || "none" != e.display || "on" == b.google_adtest || 0 < b.google_reactive_ad_format || d ? !1 : (c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),
        !0)
    }
      , Ae = function(a, b) {
        var c;
        try {
            c = a.getBoundingClientRect()
        } catch (e) {}
        if (!c || 
        0 == c.left && 0 == c.right && 0 == c.width && 0 == c.height)
            return !1;
        var d = Wa(a, b);
        if (!d)
            return !1;
        c = tb(d.width);
        d = tb(d.height);
        return null  == c || null  == d || nd[c + "x" + d] ? !1 : !0
    }
      , xe = function(a, b, c) {
        for (var d = a.attributes, e = d.length, f = 0; f < e; f++) {
            var g = d[f];
            if (/data-/.test(g.name)) {
                var h = g.name.replace("data", "google").replace(/-/g, "_");
                if (!b.hasOwnProperty(h)) {
                    var g = g.value
                      , n = {
                        google_reactive_ad_format: Ub,
                        google_allow_expandable_ads: Vb
                    }
                      , g = n.hasOwnProperty(h) ? n[h](g, null ) : g;
                    null  === g || (b[h] = g)
                }
            }
        }
        if (b.google_enable_content_recommendations && 
        1 == b.google_reactive_ad_format)
            b.google_ad_width = L(c).clientWidth,
            b.google_ad_height = 50,
            a.style.display = "none";
        else if (1 == b.google_reactive_ad_format)
            b.google_ad_width = 320,
            b.google_ad_height = 50,
            a.style.display = "none";
        else if (8 == b.google_reactive_ad_format)
            b.google_ad_width = L(c).clientWidth || 0,
            b.google_ad_height = L(c).clientHeight || 0,
            a.style.display = "none";
        else if (9 == b.google_reactive_ad_format)
            b.google_ad_width = L(c).clientWidth || 0,
            b.google_ad_height = L(c).clientHeight || 0,
            a.style.display = "none";
        else {
            d = 
            b.google_ad_format;
            d = "autorelaxed" == d ? H(M(c), I.C.i) ? 3 : 2 : "auto" == d || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(d) ? 1 : "link" == d ? 4 : void 0;
            if (e = !d)
                Ae(a, c) ? (e = I.F,
                jd(b, c, e.j, e.i) !== e.i ? e = !1 : (b.google_ad_format = "auto",
                e = !0)) : e = !1;
            e && (d = 1);
            if (d) {
                var l = d
                  , k = I.D;
                jd(b, c, k.j, k.i);
                k = I.v;
                jd(b, c, k.j, k.i);
                "autorelaxed" == b.google_ad_format && (k = I.C,
                jd(b, c, k.j, k.i));
                k = a.offsetWidth;
                a: {
                    var m = b.google_ad_format;
                    switch (l) {
                    default:
                    case 1:
                        l = $d(c, k, m);
                        b && (b.google_responsive_formats = l);
                        c = Zd(k, l, c, a, be(c), Vd(c) || 
                        H(M(c), I.v.i));
                        break a;
                    case 2:
                        c = se(qe, k);
                        break a;
                    case 3:
                        c = se(re, k);
                        break a;
                    case 4:
                        c = Ud(te, Id(k));
                        if (!c)
                            throw new T("adsbygoogle.push() error: No link unit size for width=" + k + "px");
                        b.google_ad_format_suffix = "_0ads_al";
                        b.google_override_format = 1
                    }
                }
                b.google_ad_width = c.w(k);
                b.google_ad_height = c.height();
                a.style.height = c.height() + "px";
                b.google_ad_resizable = !0;
                delete b.google_ad_format;
                b.google_loader_features_used = 128
            } else {
                d = Ae(a, c) ? (d = z(["LC", "LE"], ec)) ? "LE" == (b.google_responsive_override_logs_experiment = 
                d) : !1 : !1;
                if (d)
                    try {
                        k = a.offsetWidth,
                        m = Zd(k, $d(c, k, "auto"), c, a, !0, !0),
                        l = new Ea(m.w(k),m.height()),
                        b.google_ember_w = l.width,
                        b.google_ember_h = l.height
                    } catch (S) {
                        b.google_ember_w = b.google_ember_h = "e"
                    }
                !$a.test(b.google_ad_width) && !Za.test(a.style.width) || !$a.test(b.google_ad_height) && !Za.test(a.style.height) ? (l = Wa(a, c),
                a.style.width = l.width,
                a.style.height = l.height,
                Ld(l, b),
                b.google_ad_width || (b.google_ad_width = a.offsetWidth),
                b.google_ad_height || (b.google_ad_height = a.offsetHeight),
                b.google_loader_features_used = 
                256) : (Ld(a.style, b),
                b.google_ad_output && "html" != b.google_ad_output || 300 != b.google_ad_width || 250 != b.google_ad_height || (l = a.style.width,
                a.style.width = "100%",
                k = a.offsetWidth,
                a.style.width = l,
                b.google_available_width = k));
                k = b.google_ad_width;
                l = b.google_ad_height;
                k && l && !nd[k + "x" + l] && (l = z("CD ED CA EA CW EW".split(" "), Zb)) && ("CD" == l ? b.google_overflowing_ads_experiment = l : ((k = /W$/.test(l) && 728 > k) || (k = /^E/.test(l),
                m = L(c),
                a && a.getBoundingClientRect && m && m.getBoundingClientRect ? (c = a.getBoundingClientRect(),
                m = 
                m.getBoundingClientRect(),
                c = Math.round(Math.max(0, Math.min(c.right, m.right) - Math.max(c.left, m.left)))) : c = 0,
                160 > c || 15 > b.google_ad_width - c ? a = !1 : (m = a.style.width || "",
                a.style.width = "100%",
                d = a.offsetWidth,
                160 > d || 0 > c - d ? (a.style.width = m,
                a = !1) : (k ? (b.google_ad_width = c,
                a.style.width = c + "px") : a.style.width = m,
                a = !0)),
                k = !a && "ED" != l),
                k || (b.google_overflowing_ads_experiment = l)))
            }
        }
    }
      , Be = function(a) {
        for (var b = document.getElementsByTagName("ins"), c = 0, d = b[c]; c < b.length; d = b[++c])
            if (ue(d) && (!a || d.id == a))
                return d;
        return null 
    }
      , 
    ze = !1
      , Ce = function(a, b) {
        var c = {};
        F(Yc, function(b, d) {
            a.hasOwnProperty(d) && (c[d] = a[d])
        }
        );
        aa(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = document.createElement("ins");
        d.className = "adsbygoogle";
        d.style.display = "none";
        b ? Db.body.appendChild(d) : Db.documentElement.appendChild(d);
        we(d, {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        })
    }
      , De = function(a) {
        if (!Va())
            throw new T("adsbygoogle.push() error: Page-level tag does not work inside iframes.");
        var b = H(M(E), 
        I.H.i)
          , c = !b;
        Db.body || b ? Ce(a, c) : Gb(Rb(function() {
            Ce(a, c)
        }
        ))
    }
      , Ee = function(a, b, c, d) {
        if (0 == b.message.indexOf("TagError")) {
            var e = {};
            Cb(A, e, d);
            e.context = a;
            e.msg = b.message.substring(0, 512);
            a = p.document;
            e.url = a.URL.substring(0, 512);
            e.ref = a.referrer.substring(0, 512);
            wb(Mb, "puberror", e, !0, c || .01);
            return !1
        }
        return A.u(a, b, c, d)
    }
      , Fe = function(a, b, c, d) {
        return 0 == b.message.indexOf("TagError") ? !1 : A.u(a, b, c, d)
    }
      , He = function(a) {
        var b = {};
        Ob("aa::hqe", Ee, function() {
            Ge(a, b)
        }
        , function(c) {
            c.client = c.client || b.google_ad_client || 
            a.google_ad_client;
            c.slotname = c.slotname || b.google_ad_slot;
            c.tag_origin = c.tag_origin || b.google_tag_origin
        }
        )
    }
      , Ge = function(a, b) {
        la = (new Date).getTime();
        var c;
        a: {
            if (a.enable_page_level_ads) {
                if ("string" == typeof a.google_ad_client) {
                    c = !0;
                    break a
                }
                throw new T("adsbygoogle.push() error: 'google_ad_client' is missing from the tag config.");
            }
            c = !1
        }
        if (c)
            De(a);
        else {
            c = a.element;
            var d = a.params;
            d && F(d, function(a, c) {
                b[c] = a
            }
            );
            if (c) {
                if (!ue(c) && (c = c.id ? Be(c.id) : null ,
                !c))
                    throw new T("adsbygoogle.push() error: 'element' has already been filled.");
                if (!("innerHTML" in c))
                    throw new T("adsbygoogle.push() error: 'element' is not a good DOM element.");
            } else if (c = Be(),
            !c)
                throw new T("adsbygoogle.push() error: All ins elements in the DOM with class=adsbygoogle already have ads in them.");
            we(c, b)
        }
    }
      , Je = function() {
        Ob("aa::main", Fe, Ie)
    }
      , Ie = function() {
        var a = E.google_ad_modifications = E.google_ad_modifications || {};
        if (!a.plle) {
            a.plle = !0;
            var a = a.loeids = a.loeids || []
              , b = I.D
              , c = b.i;
            if (E.location && E.location.hash == "#google_plle_" + c)
                b = c;
            else {
                var b = [b.j, c], c = new fd($b,
                $b + ac - 1), d;
                (d = 0 >= ac || ac % b.length) || (d = hd.aa,
                d = !(d.start <= c.start && d.end >= c.end));
                d ? b = null  : (d = gd(),
                b = null  !== d && c.start <= d && c.end >= d ? b[(d - $b) % b.length] : null )
            }
            b && a.push(b);
            b = I.C;
            (b = id(bc, b.j, b.i)) && a.push(b);
            b = I.v;
            (b = id(cc, b.j, b.i)) && a.push(b);
            b = I.F;
            (b = id(dc, b.j, b.i)) && a.push(b);
            b = I.G;
            (b = id(Kc, b.j, b.i)) && a.push(b);
            b = I.H;
            (b = id(Lc, b.j, b.i)) && a.push(b)
        }
        if (!window.google_top_experiment && !window.google_top_js_status)
            if (a = window,
            2 !== (a.top == a ? 0 : x(a.top) ? 1 : 2))
                window.google_top_js_status = 0;
            else if (top.postMessage) {
                var e;
                try {
                    e = E.top.frames.google_top_static_frame ? !0 : !1
                } catch (g) {
                    e = !1
                }
                if (e) {
                    if (window.google_top_experiment = z(["jp_c", "jp_zl", "jp_wfpmr", "jp_zlt", "jp_wnt"], Yb),
                    "jp_c" !== window.google_top_experiment) {
                        Ua(window, "message", Gd);
                        window.google_top_js_status = 3;
                        e = {
                            0: "google_loc_request",
                            1: Fd
                        };
                        var a = [], f;
                        for (f in e)
                            a.push(f + "=" + e[f]);
                        top.postMessage(a.join("\n"), "*")
                    }
                } else
                    window.google_top_js_status = 2
            } else
                window.google_top_js_status = 1;
        if ((f = window.adsbygoogle) && f.shift)
            for (a = 20; (e = f.shift()) && 0 < a--; )
                try {
                    He(e)
                } catch (g) {
                    throw window.setTimeout(Je, 
                    0),
                    g;
                }
        if (!f || !f.loaded) {
            window.adsbygoogle = {
                push: He,
                loaded: !0
            };
            f && Ke(f.onload);
            try {
                Object.defineProperty(window.adsbygoogle, "onload", {
                    set: Ke
                })
            } catch (g) {}
        }
    }
      , Ke = function(a) {
        Eb(a) && window.setTimeout(a, 0)
    }
    ;
    Je();
}
).call(this);
