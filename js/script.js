jQuery(document).ready(function($){
	var count=0;
    var ele = document.getElementById("main_area");
    ele.setAttribute("style","margin-top:20%!important");
    $("#questions-wrapper").bind('click',function(){
		
        if(count !=2)
        {
            ele.setAttribute("style","margin-top:20%!important");
        }
        else{
            ele.setAttribute("style","margin-top:50%!important");
        }
		count++;
		if (count==1)
		{
			$("#circle1" ).css('display','flex');
		}else if (count==2)
		{
			$("#circle2" ).css('display','flex');
		}

    });
});


var qKeys = {};
var re = /[?&]([^=]+)(?:=([^&]*))?/g;
var matchInfo;
while (matchInfo = re.exec(location.search)) {
    qKeys[matchInfo[1]] = matchInfo[2];
}

var transQ = "Fråga ";
var transQ2 = ": ";
var epopready = 0,
    disablechat = 0,
    questionsWrapper = document.querySelector(
        "#questions-wrapper"),
    question = document.querySelector(
        "#question"),
    questionIdentifier = document.querySelector(
        "#question-identifier"),
    rules = document.querySelector(
        "#rules"),
    goButton = document.querySelector(
        "#go"),
    registrationFrame = document.querySelector(
        "#registration-frame"),
    maincontent = document.querySelector(
        "#main-content"),
    step1 = document.querySelector(
        "#step1"),
    step2 = document.querySelector(
        "#step2"),
    step3 = document.querySelector(
        "#step3"),
    step4 = document.querySelector(
        "#step4"),
    load1 = document.querySelector(
        "#load1"),
    load2 = document.querySelector(
        "#load2"),
    load3 = document.querySelector(
        "#load3"),
    mainh1 = document.querySelector(
        "#mainh1"),
    mainh2 = document.querySelector(
        "#mainh2"),
    leftimg = document.querySelector(
        "#left-img"),
    leftside = document.querySelector(
        "#left-side"),
    chatcheck = document.querySelector(
        "#chatcheckbox");
questionsWrapper.onclick = function() {
    currentQuestion += 1, 1 ==
        currentQuestion && (
            maincontent.style.display =
            "none", load1.style.display =
            "block",
            questionsWrapper.style.display =
            "none", setTimeout(
                function() {
                    questionsWrapper
                        .style.display =
                        "block",
                        load1.style
                        .display =
                        "none",
                        step1.style
                        .display =
                        "block",
                        questionIdentifier
                        .innerHTML =
                        transQ + (
                            currentQuestion +
                            1) +
                        transQ2,
                        question.innerHTML =
                        questionsArray[
                            currentQuestion
                        ]
                }, 1500)), 2 ==
        currentQuestion && (load2.style
            .display = "block",
            questionsWrapper.style.display =
            "none", setTimeout(
                function() {
                    questionsWrapper
                        .style.display =
                        "block",
                        load2.style
                        .display =
                        "none",
                        step2.style
                        .display =
                        "block",
                        questionIdentifier
                        .innerHTML =
                        transQ + (
                            currentQuestion +
                            1) +
                        transQ2,
                        question.innerHTML =
                        questionsArray[
                            currentQuestion
                        ]
                }, 2e3)), 3 ==
        currentQuestion && (load3.style
            .display = "block",
            step3.style.display =
            "none",
            questionsWrapper.style.display =
            "none", setTimeout(
                function() {
                    mainh1.style.display =
                        "none",
                        load3.style
                        .display =
                        "none",
                        step1.style
                        .display =
                        "none",
                        step2.style
                        .display =
                        "none",
                        questionsWrapper
                        .style.display =
                        "block",
                        mainh2.style
                        .display =
                        "block",
                        step3.style
                        .display =
                        "block",
                        questionIdentifier
                        .innerHTML =
                        transQ + (
                            currentQuestion +
                            1) +
                        transQ2,
                        question.innerHTML =
                        questionsArray[
                            currentQuestion
                        ]
                }, 2500)), 4 ==
        currentQuestion && (step3.style
            .display = "none",
            questionsWrapper.style.display =
            "none", step4.style.display =
            "block", document.getElementById(
                "email").focus(),
            disablechat = 1)
};

function nextQuestion() {}
if (1 == qKeys.ipop && alert(
        enterPopMessage), 1 == qKeys.epop) {
    var test = 1,
        minichatWrapper = document.querySelector(
            "#minichat-wrapper");
    window.onbeforeunload = function() {
        return 0 == disablechat &&
            1 == epopready ? (
                minichatWrapper.style
                .display = "block",
                minichatWrapper.style
                .zIndex = 1e4,
                minichatWrapper.style
                .height = "1400px",
                window.scrollTo(0,
                    0), disablechat =
                1, exitPopMessage) :
            void 0
    }
}

var widde;

function getWidth() {
    if (self.innerWidth) {
        return self.innerWidth;
    } else if (document.documentElement &&
        document.documentElement.clientHeight
    ) {
        return document.documentElement
            .clientWidth;
    } else if (document.body) {
        return document.body.clientWidth;
    }
    return 0;
}
widde = getWidth();
var righterwidde = widde * 0.5 - 280;

window.$ = window.jquip = function() {
    function U(a, b) {
        var c;
        for (var e = 0, g = V.length; e <
            g; e++)
            if (V[e].apply(this,
                    arguments))
                return this;
        return a ? bD(a) ? (h ?
                a() : f.push(a),
                this) : bE(a) ?
            this.make(a) : a.nodeType ||
            bG(a) ? this.make([
                a
            ]) : a == "body" &&
            !b && d.body ? (
                this.context =
                a.context, this[
                    0] = d.body,
                this.length = 1,
                this.selector =
                a, this) : a.selector !==
            undefined ? (this.context =
                a.context, this
                .selector = a.selector,
                this.make(a)) :
            (a = bB(a) && a.charAt(
                    0) === "<" ?
                (c = s.exec(a)) ?
                (a = [d.createElement(
                    c[1]
                )]) && bI(b) ?
                _.fn.attr.call(
                    a, b) && a :
                a : bM(a).childNodes :
                bi(a, b), this.make(
                    a)) : this
    }

    function _(a, b) {
        return new U(a, b)
    }

    function ba(a) {
        return !a || !a.parentNode ||
            a.parentNode.nodeType ==
            11
    }

    function bb(a, b, c) {
        b = b || 0;
        if (bD(b)) return bv(a,
            function(a,
                d) {
                return !
                    !b.call(
                        a,
                        d,
                        a
                    ) ===
                    c
            });
        if (b.nodeType) return
            bv(a, function(
                a) {
                return a ===
                    b ===
                    c
            });
        if (bB(b)) {
            var d = b.charAt(0) ==
                ":" && _.Expr[b
                    .substring(
                        1)];
            return bv(a,
                function(a) {
                    return d ?
                        d(a) :
                        a.parentNode &&
                        bq(
                            bi(
                                b,
                                a
                                .parentNode
                            ),
                            a
                        ) >=
                        0
                })
        }
        return bv(a, function(a) {
            return bq(b,
                    a) >=
                0 === c
        })
    }

    function bc(a, b, c) {
        var d = _.data(a, "_J");
        return typeof c ==
            "undefined" ? d &&
            Y[d] && Y[d][b] : (
                d || _.data(a,
                    "_J", d = ++
                    Y.id), (Y[d] ||
                    (Y[d] = {})
                )[b] = c)
    }

    function bd(a) {
        if (!Z[a]) {
            var b = _("<" + a +
                    ">").appendTo(
                    d.body),
                c = _.css && _.css(
                    b[0],
                    "display") ||
                b[0].style.display;
            b.remove(), Z[a] =
                c
        }
        return Z[a]
    }

    function be(a, b) {
        a.length = b && b.length ||
            0;
        if (a.length == 0)
            return a;
        for (var c = 0, d = b.length; c <
            d; c++) a[c] = b[c];
        return a
    }

    function bf(a, b) {
        var b = " " + b + " ";
        for (var c = 0, d = a.length; c <
            d; c++)
            if (bg(a[c], b))
                return !0;
        return !1
    }

    function bg(a, b) {
        return a.nodeType === 1 &&
            (" " + a.className +
                " ").replace(n,
                " ").indexOf(b) >
            -1
    }

    function bh(a, b, c) {
        b = b || d, c = c || [],
            b.nodeType == 1 &&
            a(b) && c.push(b);
        var e = b.childNodes;
        for (var f = 0, g = e.length; f <
            g; f++) {
            var h = e[f];
            h.nodeType == 1 &&
                bh(a, h, c)
        }
        return c
    }

    function bi(a, b, c) {
        if (a && bB(a)) {
            b instanceof _ && (
                    b = b[0]),
                b = b || d, c =
                c || _.query;
            var e = a.charAt(0),
                f = a.substring(
                    1),
                g = I.test(f),
                h;
            try {
                return g ? O.call(
                        c(a, b)
                    ) : g ? O.call(
                        c(a, b)
                    ) : e ==
                    "#" ? (h =
                        d.getElementById(
                            f)) ? [
                        h
                    ] : J : bL(
                        e ==
                        "." ? b
                        .getElementsByClassName ?
                        b.getElementsByClassName(
                            f) :
                        c(a, b) :
                        b.getElementsByTagName(
                            a))
            } catch (i) {
                bl(i)
            }
        }
        return a.nodeType == 1 ||
            a.nodeType == 9 ? [
                a
            ] : J
    }

    function bk(a, b, c) {
        var f = d.head || d.getElementsByTagName(
                "head")[0] || e,
            g = d.createElement(
                "script"),
            h;
        c && (g.async = "async"),
            g.onreadystatechange =
            function() {
                if (!(h = g.readyState) ||
                    h ==
                    "loaded" ||
                    h ==
                    "complete")
                    g.onload =
                    g.onreadystatechange =
                    null, f &&
                    g.parentNode &&
                    f.removeChild(
                        g), g =
                    undefined,
                    b && b()
            }, g.onload = b, g.src =
            a, f.insertBefore(g,
                f.firstChild)
    }

    function bl(b) {
        a.console && a.console.warn(
            arguments)
    }

    function bm(a, b, c) {
        if (a == null) return;
        if (R && a.forEach ===
            R) a.forEach(b, c);
        else if (a.length === +
            a.length) {
            for (var d = 0, e =
                    a.length; d <
                e; d++)
                if (d in a && b
                    .call(c, a[
                            d],
                        d, a) ===
                    K) return
        } else
            for (var f in a)
                if (N.call(a, f) &&
                    b.call(c, a[
                            f],
                        f, a) ===
                    K) return
    }

    function bn(a, b) {
        return a && a.nodeName ===
            "INPUT" && a.type ===
            "text" && b ===
            "value" ? a.value :
            a ? a.getAttribute(
                b) || (b in a ?
                a[b] :
                undefined) :
            null
    }

    function bp(a, b) {
        var c = [],
            d, e, f, g, h;
        for (d = 0, f = bo.length; d <
            f; d++)
            if (h = bo[d].exec(
                    a)) break;
        if (d < bo.length)
            for (e = 0; g = b[e]; e++)
                (d == 0 && h[1] ==
                    g.id || d ==
                    1 && bz(h[1],
                        g.tagName
                    ) || d == 2 &&
                    bg(g, h[1]) ||
                    d == 3 && h[
                        2] ==
                    bn(g, h[1])
                ) && c.push(g);
        else bl(a +
            " not supported"
        );
        return c
    }

    function bq(a, b) {
        if (a == null) return -
            1;
        var c, d;
        if (T && a.indexOf ===
            T) return a.indexOf(
            b);
        for (c = 0, d = a.length; c <
            d; c++)
            if (a[c] === b)
                return c;
        return -1
    }

    function br(a, b, c) {
        var d = [];
        return a == null ? d :
            S && a.filter === S ?
            a.filter(b, c) : (
                bm(a, function(
                    a, e, f
                ) {
                    b.call(
                            c,
                            a,
                            e,
                            f
                        ) &&
                        (d[
                                d
                                .length
                            ] =
                            a
                        )
                }), d)
    }

    function bs(a, b, c) {
        var d = [],
            e = a[b];
        while (e && e.nodeType !==
            9 && (c ===
                undefined || e.nodeType !==
                1 || !_(e).is(c)
            )) e.nodeType === 1 &&
            d.push(e), e = e[b];
        return d
    }

    function bt(a, b, c) {
        b = b || 1;
        var d = 0;
        for (; a; a = a[c])
            if (a.nodeType ===
                1 && ++d === b)
                break;
        return a
    }

    function bu(a, b) {
        var c = [];
        for (; a; a = a.nextSibling)
            a.nodeType === 1 &&
            a !== b && c.push(a);
        return c
    }

    function bv(a, b, c) {
        var d = [],
            e;
        c = !!c;
        for (var f = 0, g = a.length; f <
            g; f++) e = !!b(a[f],
                f), c !== e &&
            d.push(a[f]);
        return d
    }

    function bw(a, b, c) {
        var d, e, f = [],
            g = 0,
            h = a.length,
            i = a instanceof _ ||
            typeof h ==
            "number" && (h > 0 &&
                a[0] && a[h - 1] ||
                h === 0 || bE(a)
            );
        if (i)
            for (; g < h; g++) d =
                b(a[g], g, c),
                d != null && (f[
                    f.length
                ] = d);
        else
            for (e in a) d = b(
                    a[e], e, c),
                d != null && (f[
                    f.length
                ] = d);
        return f.concat.apply([],
            f)
    }

    function bx(a, b, c) {
        if (!a) return {};
        if (b && c) return a.setAttribute(
            b, c), null;
        var d = {};
        return bm(by(a),
                function(a, b) {
                    if (b.indexOf(
                            "data-"
                        ) !== 0 ||
                        !a)
                        return;
                    d[b.substr(
                        "data-"
                        .length
                    )] = a
                }), bB(b) ? d[b] :
            d
    }

    function by(a) {
        var b = {};
        for (var c = 0, d = a.attributes,
                e = d.length; c <
            e; c++) b[d.item(c)
            .nodeName] = d.item(
            c).nodeValue;
        return b
    }

    function bz(a, b) {
        return !a || !b ? a ==
            b : a.toLowerCase() ===
            b.toLowerCase()
    }

    function bA(a) {
        return a == null ?
            String(a) : E[D.call(
                a)] || "object"
    }

    function bB(a) {
        return typeof a ==
            "string"
    }

    function bC(a) {
        return typeof a ==
            "object"
    }

    function bD(a) {
        return typeof a ==
            "function" || bA(a) ===
            "function"
    }

    function bE(a) {
        return bA(a) ===
            "array"
    }

    function bF(a) {
        return !bB(a) && typeof a
            .length == "number"
    }

    function bG(a) {
        return a && typeof a ==
            "object" &&
            "setInterval" in a
    }

    function bH(a) {
        return a == null || !p.test(
            a) || isNaN(a)
    }

    function bI(a) {
        if (!a || bA(a) !==
            "object" || a.nodeType ||
            bG(a)) return !1;
        try {
            if (a.constructor &&
                !N.call(a,
                    "constructor"
                ) && !N.call(a.constructor
                    .prototype,
                    "isPrototypeOf"
                )) return !1
        } catch (b) {
            return !1
        }
        var c;
        for (c in a);
        return c === undefined ||
            N.call(a, c)
    }

    function bJ(a, b) {
        var c = a.length,
            d = 0;
        if (typeof b.length ==
            "number")
            for (var e = b.length; d <
                e; d++) a[c++] =
                b[d];
        else
            while (b[d] !==
                undefined) a[c++] =
                b[d++];
        return a.length = c, a
    }

    function bK() {
        var a, b, c, d, e, f, g =
            arguments,
            h = g[0] || {},
            i = 1,
            j = g.length,
            k = !1;
        typeof h == "boolean" &&
            (k = h, h = g[1] || {},
                i = 2), typeof h !=
            "object" && !bD(h) &&
            (h = {}), j === i &&
            (h = this, --i);
        for (; i < j; i++)
            if ((a = g[i]) !=
                null)
                for (b in a) {
                    c = h[b], d =
                        a[b];
                    if (h === d)
                        continue;
                    k && d && (
                            bI(
                                d
                            ) ||
                            (e =
                                bE(
                                    d
                                )
                            )) ?
                        (e ? (e = !
                                1,
                                f =
                                c &&
                                bE(
                                    c
                                ) ?
                                c : []
                            ) :
                            f =
                            c &&
                            bI(
                                c
                            ) ?
                            c : {},
                            h[b] =
                            bK(
                                k,
                                f,
                                d
                            )) :
                        d !==
                        undefined &&
                        (h[b] =
                            d)
                }
            return h
    }

    function bL(a, b) {
        var c = b || [];
        if (a != null) {
            var d = bA(a);
            a.length == null ||
                d == "string" ||
                d == "function" ||
                d === "regexp" ||
                bG(a) ? P.call(
                    c, a) : bJ(
                    c, a)
        }
        return c
    }

    function bM(a, b, c) {
        b = b || d || b.ownerDocument ||
            b[0] && b[0].ownerDocument ||
            d, c = c || b.createDocumentFragment();
        if (bF(a)) return bO(a,
            b, c) && c;
        var e = bN(a);
        while (e.firstChild) c.appendChild(
            e.firstChild);
        return c
    }

    function bN(a, b) {
        var c = (b || d).createElement(
                "div"),
            e = (m.exec(a) || [
                "", ""
            ])[1].toLowerCase(),
            f = H[e] || H._default,
            g = f[0];
        c.innerHTML = f[1] + a +
            f[2];
        while (g--) c = c.lastChild;
        return c
    }

    function bO(a, b, c) {
        var d = [],
            e, f;
        for (e = 0;
            (f = a[e]) != null; e++
        ) bB(f) && (f = bN(f, b)),
            f.nodeType ? d.push(
                f) : d = bJ(d,
                f);
        if (c)
            for (e = 0; e < d.length; e++)
                d[e].nodeType &&
                c.appendChild(d[
                    e]);
        return d
    }

    function bQ(a) {
        if (B) {
            F = G, a.sort(B);
            if (F)
                for (var b = 1; b <
                    a.length; b++
                ) a[b] === a[b -
                        1] && a
                    .splice(b--,
                        1)
        }
        return a
    }

    function bR() {
        if (!d.body) return null;
        var a = d.createElement(
            "div");
        d.body.appendChild(a),
            a.style.width =
            "20px", a.style.padding =
            "10px";
        var b = a.offsetWidth;
        return d.body.removeChild(
            a), b == 40
    }

    function bS(a, b) {
        g.push({
            url: a,
            cb: b
        })
    }

    function bT() {
        bm(f, function(a) {
            a()
        }), h = !0
    }
    var a = window,
        b =
        "http://cdnjs.cloudflare.com/ajax/libs/sizzle/1.4.4/sizzle.min.js",
        c = function() {
            return a.Sizzle || a.qwery
        },
        d = document,
        e = d.documentElement,
        f = [],
        g = [],
        h, i = /Until$/,
        j = /,/,
        k =
        /^(?:parents|prevUntil|prevAll)/,
        m = /<([\w:]+)/,
        n = /[\n\t\r]/g,
        o = /\s+/,
        p = /\d/,
        q = /\S/,
        r = /\r\n/g,
        s =
        /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        t = /\r?\n/g,
        u = /^(?:select|textarea)/i,
        v =
        /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        w = String.prototype.trim,
        x, y = /^\s+/,
        z = /\s+$/,
        A, B, C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        },
        D = Object.prototype.toString,
        E = {},
        F = !1,
        G = !0,
        H = {
            option: [1,
                "<select multiple='multiple'>",
                "</select>"
            ],
            legend: [1,
                "<fieldset>",
                "</fieldset>"
            ],
            thead: [1, "<table>",
                "</table>"
            ],
            tr: [2,
                "<table><tbody>",
                "</tbody></table>"
            ],
            td: [3,
                "<table><tbody><tr>",
                "</tr></tbody></table>"
            ],
            col: [2,
                "<table><tbody></tbody><colgroup>",
                "</colgroup></table>"
            ],
            area: [1, "<map>",
                "</map>"
            ],
            _default: [0, "", ""]
        },
        I = /[,\s.#\[>+]/,
        J = [],
        K = {},
        L = Array.prototype,
        M = Object.prototype,
        N = M.hasOwnProperty,
        O = L.slice,
        P = L.push,
        Q = L.indexOf,
        R = L.forEach,
        S = L.filter,
        T = L.indexOf;
    q.test(" ") && (y =
        /^[\s\xA0]+/, z =
        /[\s\xA0]+$/);
    var V = [],
        W = {},
        X = 0,
        Y = {
            _id: 0
        },
        Z = {},
        $;
    $ = U.prototype = _.prototype =
        _.fn = {
            constructor: _,
            selector: "",
            length: 0,
            dm: function(a, b, c) {
                var d = a[0],
                    e, f, g, h,
                    i;
                if (d && this[0]) {
                    if (!(f = d
                            .nodeType ===
                            3 &&
                            d)) {
                        e = d &&
                            d.parentNode,
                            f =
                            e &&
                            e.nodeType ===
                            11 &&
                            e.childNodes
                            .length ===
                            this
                            .length ?
                            e :
                            bM(
                                d
                            ),
                            g =
                            f.firstChild,
                            f.childNodes
                            .length ===
                            1 &&
                            (f =
                                g
                            );
                        if (!g)
                            return
                                this
                    }
                    for (i = 0,
                        h =
                        this.length; i <
                        h; i++)
                        c.call(
                            this[
                                i
                            ],
                            f)
                }
                return this
            },
            ps: function(a, b, c) {
                var d = this.constructor();
                return bE(a) ?
                    P.apply(d,
                        a) : bJ(
                        d, a),
                    d.prevObject =
                    this, d.context =
                    this.context,
                    b ===
                    "find" ? d.selector =
                    this.selector +
                    (this.selector ?
                        " " :
                        "") + c :
                    b && (d.selector =
                        this.selector +
                        "." + b +
                        "(" + c +
                        ")"), d
            }
        }, $.make = function(a) {
            return be(this, a),
                this
        }, $.toArray = function() {
            return O.call(this, 0)
        }, $.get = function(a) {
            return a == null ? this
                .toArray() : a < 0 ?
                this[this.length +
                    a] : this[a]
        }, $.add = function(a, b) {
            var c = typeof a ==
                "string" ? _(a, b) :
                bL(a && a.nodeType ? [
                    a
                ] : a),
                d = bJ(this.get(),
                    c);
            return this.ps(ba(c[0]) ||
                ba(d[0]) ? d :
                bQ(d))
        }, $.each = function(a) {
            if (!bD(a)) return this;
            for (var b = 0, c =
                    this.length; b <
                c; b++) a.call(this[
                b], b, this[
                b]);
            return this
        }, $.attr = function(a, b) {
            var c = this[0];
            return bB(a) && b ===
                undefined ? bn(c, a) :
                this.each(function(
                    c) {
                    var d =
                        this.nodeType;
                    if (d !== 3 &&
                        d !== 8 &&
                        d !== 2
                    )
                        if (bC(
                                a
                            ))
                            for (
                                var
                                    e in
                                    a
                            ) b ===
                                null ?
                                this
                                .removeAttribute(
                                    a
                                ) :
                                this
                                .setAttribute(
                                    e,
                                    a[
                                        e
                                    ]
                                );
                        else
                            this
                            .setAttribute(
                                a,
                                bD(
                                    b
                                ) ?
                                b
                                .call(
                                    this,
                                    c,
                                    this
                                    .getAttribute(
                                        a
                                    )
                                ) :
                                b
                            )
                })
        }, $.removeAttr = function(
            a) {
            return this.each(
                function() {
                    this.removeAttribute(
                        a)
                })
        }, $.data = function(a, b) {
            return bx(this[0], a, b)
        }, $.append = function() {
            return this.dm(
                arguments, !0,
                function(a) {
                    this.nodeType ===
                        1 &&
                        this.appendChild(
                            a)
                })
        }, $.prepend = function() {
            return this.dm(
                arguments, !0,
                function(a) {
                    this.nodeType ===
                        1 &&
                        this.insertBefore(
                            a,
                            this
                            .firstChild
                        )
                })
        }, $.before = function() {
            return this.dm(
                arguments, !1,
                function(a) {
                    this.parentNode
                        .insertBefore(
                            a,
                            this
                        )
                })
        }, $.after = function() {
            return this[0] && this[
                    0].parentNode ?
                this.dm(arguments, !
                    1,
                    function(a) {
                        this.parentNode
                            .insertBefore(
                                a,
                                this
                                .nextSibling
                            )
                    }) : this
        }, $.hide = function() {
            return this.each(
                function() {
                    bc(this,
                            "display",
                            this
                            .style
                            .display
                        ), this
                        .style.display =
                        "none"
                })
        }, $.show = function() {
            return this.each(
                function() {
                    this.style.display =
                        bc(this,
                            "display"
                        ) || bd(
                            this
                            .tagName
                        )
                })
        }, $.toggle = function() {
            return this.each(
                function() {
                    this.style.display =
                        _.Expr.hidden(
                            this
                        ) ? bc(
                            this,
                            "display"
                        ) || bd(
                            this
                            .tagName
                        ) : (bc(
                                this,
                                "display",
                                this
                                .style
                                .display
                            ),
                            "none"
                        )
                })
        }, $.eq = function(a) {
            return a === -1 ? this.slice(
                a) : this.slice(
                a, +a + 1)
        }, $.first = function() {
            return this.eq(0)
        }, $.last = function() {
            return this.eq(-1)
        }, $.slice = function() {
            return this.ps(O.apply(
                    this,
                    arguments),
                "slice", O.call(
                    arguments).join(
                    ","))
        }, $.map = function(a) {
            return this.ps(bw(this,
                function(b,
                    c) {
                    return a
                        .call(
                            b,
                            c,
                            b
                        )
                }))
        }, $.find = function(a) {
            var b = this,
                c, d;
            if (!bB(a)) return _(a)
                .filter(
                    function() {
                        for (c =
                            0,
                            d =
                            b.length; c <
                            d; c++
                        )
                            if (
                                A(
                                    b[
                                        c
                                    ],
                                    this
                                )
                            )
                                return
                                    !
                                    0
                    });
            var e = this.ps("",
                    "find", a),
                f, g, h;
            for (c = 0, d = this.length; c <
                d; c++) {
                f = e.length, bJ(e,
                    _(a, this[c])
                );
                if (c == 0)
                    for (g = f; g <
                        e.length; g++
                    )
                        for (h = 0; h <
                            f; h++)
                            if (e[h] ===
                                e[g]
                            ) {
                                e.splice(
                                    g--,
                                    1
                                );
                                break
                            }
            }
            return e
        }, $.not = function(a) {
            return this.ps(bb(this,
                    a, !1),
                "not", a)
        }, $.filter = function(a) {
            return this.ps(bb(this,
                    a, !0),
                "filter", a)
        }, $.indexOf = function(a) {
            return bq(this, a)
        }, $.is = function(a) {
            return this.length > 0 &&
                _(this[0]).filter(a)
                .length > 0
        }, $.remove = function() {
            for (var a = 0, b;
                (b = this[a]) !=
                null; a++) b.parentNode &&
                b.parentNode.removeChild(
                    b);
            return this
        }, $.closest = function(a,
            b) {
            var c = [],
                d;
            for (d = 0, l = this.length; d <
                l; d++) {
                cur = this[d];
                while (cur) {
                    if (bp(a, [cur])
                        .length > 0
                    ) {
                        c.push(cur);
                        break
                    }
                    cur = cur.parentNode;
                    if (!cur || !
                        cur.ownerDocument ||
                        cur === b ||
                        cur.nodeType ===
                        11) break
                }
            }
            return c = c.length > 1 ?
                bQ(c) : c, this.ps(
                    c, "closest", a
                )
        }, $.val = function(a) {
            return a == null ? this[
                    0] && this[0].value ||
                "" : this.each(
                    function() {
                        this.value =
                            a
                    })
        }, $.html = function(a) {
            return a == null ? this[
                    0] && this[0].innerHTML ||
                "" : this.each(
                    function() {
                        this.innerHTML =
                            a
                    })
        }, $.text = function(a) {
            var b = this[0],
                c;
            return typeof a ==
                "undefined" ? b &&
                (c = b.nodeType) ?
                c === 1 || c === 9 ?
                typeof b.textContent ==
                "string" ? b.textContent :
                b.innerText.replace(
                    r, "") : c ===
                3 || c === 4 ? b.nodeValue :
                null : null : this.empty()
                .append((b && b.ownerDocument ||
                    d).createTextNode(
                    a))
        }, $.empty = function() {
            for (var a = 0, b;
                (b = this[a]) !=
                null; a++)
                while (b.firstChild)
                    b.removeChild(b
                        .firstChild
                    );
            return this
        }, $.addClass = function(a) {
            var b, c, d, e, f, g, h;
            if (bD(a)) return this.each(
                function(b) {
                    _(this)
                        .addClass(
                            a
                            .call(
                                this,
                                b,
                                this
                                .className
                            )
                        )
                });
            if (a && bB(a)) {
                b = a.split(o);
                for (c = 0, d =
                    this.length; c <
                    d; c++) {
                    e = this[c];
                    if (e && e.nodeType ===
                        1)
                        if (!e.className &&
                            b.length ===
                            1) e.className =
                            a;
                        else {
                            f = " " +
                                e.className +
                                " ";
                            for (g =
                                0,
                                h =
                                b.length; g <
                                h; g++
                            ) ~f.indexOf(
                                    " " +
                                    b[
                                        g
                                    ] +
                                    " "
                                ) ||
                                (f +=
                                    b[
                                        g
                                    ] +
                                    " "
                                );
                            e.className =
                                x(f)
                        }
                }
            }
            return this
        }, $.removeClass = function(
            a) {
            var b, c, d, e, f, g, h;
            if (bD(a)) return this.each(
                function(b) {
                    _(this)
                        .removeClass(
                            a
                            .call(
                                this,
                                b,
                                this
                                .className
                            )
                        )
                });
            if (a && bB(a) || a ===
                undefined) {
                b = (a || "").split(
                    o);
                for (c = 0, d =
                    this.length; c <
                    d; c++) {
                    e = this[c];
                    if (e.nodeType ===
                        1 && e.className
                    )
                        if (a) {
                            f = (
                                " " +
                                e
                                .className +
                                " "
                            ).replace(
                                n,
                                " "
                            );
                            for (g =
                                0,
                                h =
                                b.length; g <
                                h; g++
                            ) f = f
                                .replace(
                                    " " +
                                    b[
                                        g
                                    ] +
                                    " ",
                                    " "
                                );
                            e.className =
                                x(f)
                        } else e.className =
                            ""
                }
            }
            return this
        }, $.hasClass = function(a) {
            return bf(this, a)
        }, $.fadeIn = function() {
            this.each(function() {
                _(this).show()
            })
        }, $.fadeOut = function() {
            this.each(function() {
                _(this).hide()
            })
        }, $.serializeArray =
        function() {
            return this.map(
                function() {
                    return this
                        .elements ?
                        bL(this
                            .elements
                        ) :
                        this
                }).filter(
                function() {
                    return this
                        .name &&
                        !this.disabled &&
                        (this.checked ||
                            u.test(
                                this
                                .nodeName
                            ) ||
                            v.test(
                                this
                                .type
                            ))
                }).map(function(
                a, b) {
                var c = _(
                    this
                ).val();
                return c ==
                    null ||
                    bE(c) ?
                    bw(c,
                        function(
                            a
                        ) {
                            return {
                                name: b
                                    .name,
                                value: a
                                    .replace(
                                        t,
                                        "\r\n"
                                    )
                            }
                        }) : {
                        name: b
                            .name,
                        value: c
                            .replace(
                                t,
                                "\r\n"
                            )
                    }
            }).get()
        }, _.Expr = {
            hidden: function(a) {
                return a.offsetWidth ===
                    0 || a.offsetHeight ==
                    0 || (_.css &&
                        _.css(a,
                            "display"
                        ) || a.style
                        .display
                    ) ===
                    "none"
            },
            visible: function(a) {
                return !_.Expr.hidden(
                    a)
            }
        }, _.hasClass = bf, _.walk =
        bh, _.$$ = bi, _.setQuery =
        function(a) {
            _.query = function(b, c) {
                return bi(b, c,
                    a ||
                    function(
                        a,
                        b) {
                        return
                            b
                            .querySelectorAll(
                                a
                            )
                    })
            }
        };
    var bj = c();
    _.setQuery(bj || function(a, b) {
            return d.querySelectorAll ?
                bL((b || d).querySelectorAll(
                    a)) : []
        }), _.loadScript = bk, _.each =
        function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = f === undefined ||
                bD(a);
            if (c) {
                if (g) {
                    for (d in a)
                        if (b.apply(
                                a[d],
                                c) ===
                            !1)
                            break
                } else
                    for (; e < f;)
                        if (b.apply(
                                a[e++],
                                c) ===
                            !1)
                            break
            } else if (g) {
                for (d in a)
                    if (b.call(a[d],
                            d, a[d]
                        ) === !1)
                        break
            } else
                for (; e < f;)
                    if (b.call(a[e],
                            e, a[e++]
                        ) === !1)
                        break; return
                a
        }, _._each = bm;
    var bo = [
        /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
        /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/
    ];
    _.filter = bp, _._indexOf = bq,
        _._defaults = function(a) {
            return bm(O.call(
                    arguments,
                    1),
                function(b) {
                    for (var c in
                            b) a[
                            c] ==
                        null &&
                        (a[c] =
                            b[c]
                        )
                }), a
        }, _._filter = br, _.proxy =
        function(a, b) {
            if (typeof b ==
                "string") {
                var c = a[b];
                b = a, a = c
            }
            if (bD(a)) {
                var d = O.call(
                        arguments,
                        2),
                    e = function() {
                        return a.apply(
                            b,
                            d.concat(
                                O
                                .call(
                                    arguments
                                )
                            ))
                    };
                return e.guid = a.guid =
                    a.guid || e.guid ||
                    X++, e
            }
        }, _.dir = bs, _.nth = bt,
        _.sibling = bu, _.grep = bv,
        _.map = bw, _.data = bx, _.attrs =
        by, _.eqSI = bz, _.trim = x =
        w ? function(a) {
            return a == null ? "" :
                w.call(a)
        } : function(a) {
            return a == null ? "" :
                a.toString().replace(
                    y, "").replace(
                    z, "")
        }, _.indexOf = _.inArray =
        function(a, b) {
            if (!b) return -1;
            if (Q) return Q.call(b,
                a);
            for (var c = 0, d = b.length; c <
                d; c++)
                if (b[c] === a)
                    return c;
            return -1
        }, bm(
            "Boolean Number String Function Array Date RegExp Object"
            .split(" "),
            function(a) {
                return E["[object " +
                        a + "]"] =
                    a.toLowerCase(),
                    this
            }), _.type = bA, _.isFunction =
        bD, _.isArray = Array.isArray ||
        bE, _.isWindow = bG, _.isNaN =
        bH, _.merge = bJ, _.extend =
        _.fn.extend = bK, _.makeArray =
        bL, _.htmlFrag = bM;
    var bP = function(a, b, c) {
        if (a === b) return c;
        var d = a.nextSibling;
        while (d) {
            if (d === b) return
                -1;
            d = d.nextSibling
        }
        return 1
    };
    return A = _.contains = e.contains ?
        function(a, b) {
            return a !== b && (a.contains ?
                a.contains(b) :
                !0)
        } : function() {
            return !1
        }, B = e.compareDocumentPosition ?
        (A = function(a, b) {
            return !!(a.compareDocumentPosition(
                b) & 16)
        }) && function(a, b) {
            return a === b ? (F = !
                    0, 0) : !a.compareDocumentPosition ||
                !b.compareDocumentPosition ?
                a.compareDocumentPosition ?
                -1 : 1 : a.compareDocumentPosition(
                    b) & 4 ? -1 : 1
        } : function(a, b) {
            if (a === b) return F = !
                0, 0;
            if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex -
                    b.sourceIndex;
            var c, d, e = [],
                f = [],
                g = a.parentNode,
                h = b.parentNode,
                i = g;
            if (g === h) return bP(
                a, b);
            if (!g) return -1;
            if (!h) return 1;
            while (i) e.unshift(i),
                i = i.parentNode;
            i = h;
            while (i) f.unshift(i),
                i = i.parentNode;
            c = e.length, d = f.length;
            for (var j = 0; j < c &&
                j < d; j++)
                if (e[j] !== f[j])
                    return bP(e[j],
                        f[j]);
            return j === c ? bP(a,
                f[j], -1) : bP(
                e[j], b, 1)
        }, _.unique = bQ, bm({
            parent: function(a) {
                var b = a.parentNode;
                return b &&
                    b.nodeType !==
                    11 ? b :
                    null
            },
            parents: function(a) {
                return bs(a,
                    "parentNode"
                )
            },
            parentsUntil: function(
                a, b, c) {
                return bs(a,
                    "parentNode",
                    c)
            },
            next: function(a) {
                return bt(a,
                    2,
                    "nextSibling"
                )
            },
            prev: function(a) {
                return bt(a,
                    2,
                    "previousSibling"
                )
            },
            nextAll: function(a) {
                return bs(a,
                    "nextSibling"
                )
            },
            prevAll: function(a) {
                return bs(a,
                    "previousSibling"
                )
            },
            nextUntil: function(
                a, b, c) {
                return bs(a,
                    "nextSibling",
                    c)
            },
            prevUntil: function(
                a, b, c) {
                return bs(a,
                    "previousSibling",
                    c)
            },
            siblings: function(
                a) {
                return bu(a
                    .parentNode
                    .firstChild,
                    a)
            },
            children: function(
                a) {
                return bu(a
                    .firstChild
                )
            },
            contents: function(
                a) {
                return a.nodeName ===
                    "iframe" ?
                    a.contentDocument ||
                    a.contentWindow[
                        "document "
                    ] : bL(
                        a.childNodes
                    )
            }
        }, function(a, b) {
            _.fn[b] = function(
                c, d) {
                var e = bw(
                        this,
                        a,
                        c),
                    f = O.call(
                        arguments
                    );
                return i.test(
                        b) ||
                    (d = c),
                    typeof d ==
                    "string" &&
                    (e = bp(
                        d,
                        e
                    )), e =
                    this.length >
                    1 && !C[
                        b] ?
                    bQ(e) :
                    e, (
                        this
                        .length >
                        1 ||
                        j.test(
                            d
                        )) &&
                    k.test(
                        b) &&
                    (e = e.reverse()),
                    this.ps(
                        e,
                        b,
                        f.join(
                            ","
                        ))
            }
        }), bm({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after"
        }, function(a, b) {
            _.fn[b] = function(
                c) {
                var d = [],
                    e = _(c),
                    f, g, h,
                    i =
                    this.length ===
                    1 &&
                    this[0]
                    .parentNode;
                if (i && i.nodeType ===
                    11 && i
                    .childNodes
                    .length ===
                    1 && e.length ===
                    1)
                    return e[
                            a
                        ](
                            this[
                                0
                            ]
                        ),
                        this;
                for (f = 0,
                    h = e.length; f <
                    h; f++)
                    g = (f >
                        0 ?
                        this
                        .clone(!
                            0
                        ) :
                        this
                    ).get(),
                    _(e[f])[
                        a](
                        g),
                    d = d.concat(
                        g);
                return this
                    .ps(d,
                        b,
                        e.selector
                    )
            }
        }),
        function() {
            var a = document.createElement(
                "div");
            a.style.display =
                "none", a.innerHTML =
                "   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
            var b = a.getElementsByTagName(
                "a")[0];
            _.support = {
                boxModel: null,
                opacity: /^0.55$/
                    .test(b.style
                        .opacity
                    ),
                cssFloat: !!b.style
                    .cssFloat
            };
            var c =
                /(webkit)[ \/]([\w.]+)/,
                d =
                /(opera)(?:.*version)?[ \/]([\w.]+)/,
                e =
                /(msie) ([\w.]+)/,
                f =
                /(mozilla)(?:.*? rv:([\w.]+))?/,
                g = navigator.userAgent
                .toLowerCase(),
                h = c.exec(g) || d.exec(
                    g) || e.exec(g) ||
                g.indexOf(
                    "compatible") <
                0 && f.exec(g) || [],
                i;
            i = _.browser = {
                    version: h[2] ||
                        "0"
                }, i[h[1] || ""] = !
                0
        }(), _.scriptsLoaded =
        function(a) {
            bD(a) && f.push(a)
        }, _.loadAsync = bS, !bj &&
        !d.querySelectorAll && bS(b,
            function() {
                _.setQuery(c())
            }), _.init = !1, _.onload =
        function() {
            if (!_.init) try {
                _.support.boxModel =
                    bR();
                var a = 0;
                bm(g, function(
                        b) {
                        a++,
                        bk(
                            b
                            .url,
                            function() {
                                try {
                                    b
                                        .cb &&
                                        b
                                        .cb()
                                } catch (
                                    c
                                ) {}--
                                a
                                    ||
                                    bT()
                            }
                        )
                    }), _.init = !
                    0, a || bT()
            } catch (b) {
                bl(b)
            }
        }, d.body && !_.init &&
        setTimeout(_.onload, 1), _.hook =
        function(a) {
            V.push(a)
        }, _.plug = function(a, b) {
            var c = bB(a) ? a : a.name;
            b = bD(a) ? a : b;
            if (!bD(b)) throw "Plugin fn required";
            c && b && (W[c] = b), b(
                _)
        }, _
}();
$.plug("events", function(a) {
    function e(a) {
        return a._jquid ||
            (a._jquid = d++)
    }

    function f(a, b, c) {
        a.addEventListener ?
            a.addEventListener(
                b, c, !1) :
            (a["e" + b + c] =
                c, a[b + c] =
                function() {
                    a["e" +
                        b +
                        c
                    ](
                        window
                        .event
                    )
                }, a.attachEvent(
                    "on" +
                    b, a[b +
                        c])
            )
    }

    function g(a, b, c) {
        a.removeEventListener ?
            a.removeEventListener(
                b, c, !1) :
            (a.detachEvent(
                    "on" +
                    b, a[b +
                        c]),
                a[b + c] =
                null)
    }

    function h(a) {
        var b = ("" + a).split(
            ".");
        return {
            e: b[0],
            ns: b.slice(1).sort()
                .join(" ")
        }
    }

    function i(a) {
        return new RegExp(
            "(?:^| )" +
            a.replace(
                " ",
                " .* ?"
            ) +
            "(?: |$)")
    }

    function j(b, d, f, g) {
        d = h(d);
        if (d.ns) var j = i(
            d.ns);
        return a._filter(c[
                e(b)] || [],
            function(a) {
                return a &&
                    (!d
                        .e ||
                        a
                        .e ==
                        d
                        .e
                    ) &&
                    (!d
                        .ns ||
                        j
                        .test(
                            a
                            .ns
                        )
                    ) &&
                    (!f ||
                        a
                        .fn ==
                        f
                    ) &&
                    (!g ||
                        a
                        .sel ==
                        g
                    )
            })
    }

    function k(b, d, g, i, j) {
        var k = e(b),
            l = c[k] || (c[
                k] = []);
        a._each(d.split(
                    /\s/),
                function(c) {
                    var d =
                        a.extend(
                            h(
                                c
                            ), {
                                fn: g,
                                sel: i,
                                del: j,
                                i: l
                                    .length
                            }
                        );
                    l.push(
                            d
                        ),
                        f(b,
                            d
                            .e,
                            j ||
                            g
                        )
                }), b =
            null
    }

    function l(b, d, f, h) {
        var i = e(b);
        a._each((d || "").split(
                /\s/),
            function(d) {
                a._each(
                    j(
                        b,
                        d,
                        f,
                        h
                    ),
                    function(
                        a
                    ) {
                        delete c
                            [
                                i
                            ]
                            [
                                a
                                .i
                            ],
                            g(
                                b,
                                a
                                .e,
                                a
                                .del ||
                                a
                                .fn
                            )
                    }
                )
            })
    }

    function n(b) {
        var c = a.extend({
            originalEvent: b
        }, b);
        return a._each(m,
            function(a) {
                c[a] =
                    function() {
                        return
                            b[
                                a
                            ]
                            .apply(
                                b,
                                arguments
                            )
                    }
            }), c
    }
    var b = document,
        c = {},
        d = 1;
    a.bind = f, a.unbind = g;
    var m = ["preventDefault",
            "stopImmediatePropagation",
            "stopPropagation"
        ],
        o = a.fn;
    a._each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error"
            .split(" "),
            function(a) {
                o[a] = function(
                    b, c) {
                    return
                        arguments
                        .length >
                        0 ?
                        this
                        .bind(
                            a,
                            b,
                            c
                        ) :
                        this
                        .trigger(
                            a
                        )
                }
            }), o.bind =
        function(a, b) {
            return this.each(
                function() {
                    k(this,
                        a,
                        b
                    )
                })
        }, o.unbind = function(
            a, b) {
            return this.each(
                function() {
                    l(this,
                        a,
                        b
                    )
                })
        }, o.one = function(a,
            b) {
            return this.each(
                function() {
                    var c =
                        this;
                    k(this,
                        a,
                        function() {
                            b
                                (),
                                l(
                                    c,
                                    a,
                                    arguments
                                    .callee
                                )
                        }
                    )
                })
        }, o.delegate =
        function(b, c, d) {
            return this.each(
                function(e,
                    f) {
                    k(f, c,
                        d,
                        b,
                        function(
                            c
                        ) {
                            var
                                e =
                                c
                                .target,
                                g =
                                a
                                .$$(
                                    b,
                                    f
                                );
                            while (
                                e &&
                                g
                                .indexOf(
                                    e
                                ) <
                                0
                            )
                                e =
                                e
                                .parentNode;
                            e
                                &&
                                e !==
                                f &&
                                e !==
                                document &&
                                d
                                .call(
                                    e,
                                    a
                                    .extend(
                                        n(
                                            c ||
                                            window
                                            .event
                                        ), {
                                            currentTarget: e,
                                            liveFired: f
                                        }
                                    )
                                )
                        }
                    )
                })
        }, o.undelegate =
        function(a, b, c) {
            return this.each(
                function() {
                    l(this,
                        b,
                        c,
                        a
                    )
                })
        }, o.live = function(c,
            d) {
            return a(b.body).delegate(
                this.selector,
                c, d), this
        }, o.die = function(c,
            d) {
            return a(b.body).undelegate(
                this.selector,
                c, d), this
        }, o.trigger = function(
            a) {
            return this.each(
                function() {
                    if (!(a !=
                            "click" &&
                            a !=
                            "blur" &&
                            a !=
                            "focus" ||
                            !
                            this[
                                a
                            ]
                        ))
                        return
                            this[
                                a
                            ]
                            ();
                    if (b.createEvent) {
                        var
                            c =
                            b
                            .createEvent(
                                "Events"
                            );
                        this
                            .dispatchEvent(
                                c,
                                c
                                .initEvent(
                                    a, !
                                    0, !
                                    0
                                )
                            )
                    } else if (
                        this
                        .fireEvent
                    ) try {
                        a
                            !==
                            "ready" &&
                            this
                            .fireEvent(
                                "on" +
                                a
                            )
                    } catch (
                        c
                    ) {}
                })
        }, a.init || a(window).bind(
            "load", a.onload)
});
$.plug("ajax", function($) {
    function _xhr() {
        if (_xhrf != null)
            return _xhrf();
        for (var a = 0, b =
                xhrs.length; a <
            b; a++) try {
            var c =
                xhrs[a],
                d = c();
            if (d !=
                null)
                return
                    _xhrf =
                    c,
                    d
        } catch (e) {}
        return function() {}
    }

    function _xhrResp(xhr,
        dataType) {
        return dataType = (
                dataType ||
                xhr.getResponseHeader(
                    "Content-Type"
                ).split(";")[
                    0]).toLowerCase(),
            dataType.indexOf(
                "json") >=
            0 ? window.JSON ?
            window.JSON.parse(
                xhr.responseText
            ) : eval(xhr.responseText) :
            dataType.indexOf(
                "script") >=
            0 ? eval(xhr.responseText) :
            dataType.indexOf(
                "xml") >= 0 ?
            xhr.responseXML :
            xhr.responseText
    }

    function ajax(a, b) {
        var c = _xhr(),
            d, e = 0;
        typeof a ==
            "object" ? b =
            a : b.url = a,
            b = $._defaults(
                b, {
                    userAgent: "XMLHttpRequest",
                    lang: "en",
                    type: "GET",
                    data: null,
                    contentType: "application/x-www-form-urlencoded",
                    dataType: null,
                    processData:
                        !0,
                    headers: {
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }), b.timeout &&
            (d = setTimeout(
                function() {
                    c.abort(),
                        b
                        .timeoutFn &&
                        b
                        .timeoutFn(
                            b
                            .url
                        )
                }, b.timeout
            ));
        var f = $(b.context ||
                document),
            g = f;
        c.onreadystatechange =
            function() {
                if (c.readyState ==
                    4) {
                    d &&
                        clearTimeout(
                            d
                        );
                    if (c.status <
                        300
                    ) {
                        var
                            a =
                            _xhrResp(
                                c,
                                b
                                .dataType
                            );
                        b.success &&
                            b
                            .success(
                                a
                            ),
                            g
                            .trigger(
                                "ajaxSuccess", [
                                    c,
                                    a,
                                    b
                                ]
                            )
                    } else b
                        .error &&
                        b.error(
                            c,
                            c
                            .status,
                            c
                            .statusText
                        ),
                        g.trigger(
                            f,
                            "ajaxError", [
                                c,
                                c
                                .statusText,
                                b
                            ]
                        );
                    b.complete &&
                        b.complete(
                            c,
                            c
                            .statusText
                        ),
                        g.trigger(
                            f,
                            "ajaxComplete", [
                                c,
                                b
                            ]
                        )
                } else b.progress &&
                    b.progress(++
                        e)
            };
        var a = b.url,
            h = null,
            i = b["type"] ==
            "POST" || b[
                "type"] ==
            "PUT";
        b.data && b.processData &&
            typeof b["data"] ==
            "object" && (h =
                $.formData(
                    b.data)
            ), !i && h && (
                a += "?" +
                h), c.open(
                b.type, a);
        try {
            for (var j in b
                    .headers)
                c.setRequestHeader(
                    j, b.headers[
                        j])
        } catch (k) {
            console.log(k)
        }
        i && c.setRequestHeader(
            "Content-Type",
            b.contentType
        ), c.send(h)
    }
    var xhrs = [function() {
            return new XMLHttpRequest
        }, function() {
            return new ActiveXObject(
                "Microsoft.XMLHTTP"
            )
        }, function() {
            return new ActiveXObject(
                "MSXML2.XMLHTTP.3.0"
            )
        }, function() {
            return new ActiveXObject(
                "MSXML2.XMLHTTP"
            )
        }],
        _xhrf = null;
    $.xhr = _xhr, $._xhrResp =
        _xhrResp, $.formData =
        function(a) {
            var b = [],
                c = /%20/g;
            for (var d in a) b.push(
                encodeURIComponent(
                    d).replace(
                    c, "+") +
                "=" +
                encodeURIComponent(
                    a[d].toString()
                ).replace(c,
                    "+"));
            return b.join("&")
        }, $.each(
            "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend"
            .split(" "),
            function(a, b) {
                $.fn[b] =
                    function(a) {
                        return
                            this
                            .bind(
                                b,
                                a
                            )
                    }
            }), $.ajax = ajax,
        $.getJSON = function(a,
            b, c, d) {
            $.isFunction(b) &&
                (d = c, c = b,
                    b = null),
                ajax({
                    url: a,
                    data: b,
                    success: c,
                    dataType: "json"
                })
        }, $.get = function(a,
            b, c, d) {
            $.isFunction(b) &&
                (d = c, c = b,
                    b = null),
                ajax({
                    url: a,
                    type: "GET",
                    data: b,
                    success: c,
                    dataType: d ||
                        "text/plain"
                })
        }, $.post = function(a,
            b, c, d) {
            $.isFunction(b) &&
                (d = c, c = b,
                    b = null),
                ajax({
                    url: a,
                    type: "POST",
                    data: b,
                    success: c,
                    dataType: d ||
                        "text/plain"
                })
        }, $.getScript =
        function(a, b) {
            return $.get(a,
                undefined,
                b, "script"
            )
        }, window.JSON || $.loadAsync(
            "http://ajax.cdnjs.com/ajax/libs/json2/20110223/json2.js"
        )
})

function validateEmail(a) {
    var b =
        /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return b.test(a) ? !0 : !1
}
var email, username, password;

var regstepdob = document.querySelector(
        "#regstep-dob"),
    regstepemail = document.querySelector(
        "#regstep-email"),
    regstepusername = document.querySelector(
        "#regstep-username"),
    regsteppassword = document.querySelector(
        "#regstep-password"),
    heart1 = document.querySelector(
        "#heart1"),
    heart2 = document.querySelector(
        "#heart2"),
    heart3 = document.querySelector(
        "#heart3"),
    invalidemail = 0;

function run_validator(address_text,
    options) {
    if (!address_text) {
        return
    }
    if (address_text.length > 512) {
        error_message =
            "Stream exceeds maxiumum allowable length of 512.";
        if (options && options.error) {
            options.error(
                error_message)
        } else {
            console.log(
                error_message)
        }
        return
    }
    if (options && options.in_progress) {
        options.in_progress()
    }
    if (options && options.api_key ==
        undefined) {
        console.log("apikey")
    }
    var success = false;
    $.ajax({
        type: "GET",
        url: "https://api.mailgun.net/v2/address/validate",
        data: {
            address: address_text,
            api_key: options
                .api_key
        },
        dataType: "jsonp",
        crossDomain: true,
        success: function(
            data,
            status_text
        ) {
            success =
                true;
            if (options &&
                options
                .success
            ) {
                options
                    .success(
                        data
                    )
            }
        },
        error: function(
            request,
            status_text,
            error) {
            success =
                true;
            error_message
                =
                "Error occurred, unable to validate address.";
            if (options &&
                options
                .error) {
                options
                    .error(
                        error_message
                    )
            } else {
                console
                    .log(
                        error_message
                    )
            }
        }
    });
    setTimeout(function() {
        error_message =
            "Error occurred, unable to validate address.";
        if (!success) {
            if (options &&
                options.error
            ) {
                options.error(
                    error_message
                )
            } else {
                console.log(
                    error_message
                )
            }
        }
    }, 30000)
};

var doubleemail = 0;
var mailgunresponse = {
    "is_valid": true
};
var lasttry;
var rawemail = $('[name=email]');

function validation_success(data) {
    mailgunresponse = data;
    lasttry = mailgunresponse.address;
    if (mailgunresponse.is_valid ==
        false) {
        doubleemail = 1;
        if (mailgunresponse.did_you_mean !=
            null) {
            rawemail.value =
                mailgunresponse.did_you_mean;
            document.getElementById(
                    'email').value =
                mailgunresponse.did_you_mean;
        }
    }
}

function emailAPI(ee) {
    run_validator(ee, {
        api_key: 'pubkey-78ujsrx21yu7wi4k1as4zfjqgm3drie2',
        success: validation_success,
    });
}



function dob() {
    var exoImg = document.createElement(
        'img');
    exoImg.setAttribute('src',
        'http:\/\/main.exoclick.com\/tag.php?goal=aeea738c3967e626f871de617d508'
    );
    exoImg.setAttribute('height',
        '1px');
    exoImg.setAttribute('width',
        '1px');
    document.body.appendChild(
        exoImg);
    email = document.getElementById(
        'email').value;
    if (validateEmail(email) &&
        email) {
        regstepemail.style.display =
            "none";
        regstepdob.style.display =
            "block";
        heart2.className =
            "heartred";
        emailAPI(email);
        document.getElementById(
            'dob-continue').focus();
    }
    if (!validateEmail(email)) {
        document.getElementById(
            'email').focus();
        alert(
            'Din email är felaktig.'
        );
        document.getElementById(
            'email').focus();
    }
    if (!email) {
        document.getElementById(
            'email').focus();
        alert(
            'Skriv din emailadress.'
        );
        document.getElementById(
            'email').focus();
    }
}

function usernameF() {
    regstepdob.style.display =
        "none", regstepusername.style
        .display = "block", heart3.className =
        "heartred", document.getElementById(
            "screenname").focus()
}

function passwordF() {
    username = document.getElementById(
        'screenname').value;
    if (username && username.length <=
        20) {
        regstepusername.style.display =
            "none";
        regsteppassword.style.display =
            "block";
        document.getElementById(
            'newPassword').focus();
    }
    if (!username) {
        alert(
            "Skriv ditt användarnamn."
        );
    }
}
$("#screenname").keypress(function(a) {
    13 == a.which && (a.preventDefault(),
        submitreg())
}), $("#email").keypress(function(a) {
    13 == a.which && (a.preventDefault(),
        dob(), emailAPI())
}), $("#newPassword").keypress(
    function(a) {
        13 == a.which && (a.preventDefault(),
            submitreg())
    });

function submitreg() {
    pwpw = document.getElementById(
        'newPassword').value;
    if (doubleemail == 1) {
        document.querySelector(
                "#emailh1").innerHTML =
            'Emailen du skrivit in (<font style="color:red"">' +
            mailgunresponse.address +
            '</font>) är ogiltig.<br>Se till att din emailaddress och klicka sen på "Gå vidare >>".';
        document.querySelector(
                "#emailcta").style.display =
            "none";
        $('#email').unbind(
            "keypress");
        $("#email").keypress(
            function(a) {
                13 == a.which &&
                    (a.preventDefault(),
                        submitreg(),
                        emailAPI()
                    )
            })
        document.querySelector(
                "#emailcta2").style
            .display = "block";
        mainh2.style.display =
            "none";
        regstepusername.style.display =
            "none";
        regsteppassword.style.display =
            "none";
        regstepemail.style.display =
            "block";
        document.getElementById(
            'email').focus();
        doubleemail = 0;
        return false;
    }
    email = document.getElementById(
        'email').value;
    if (mailgunresponse.is_valid ==
        false && email != lasttry) {
        document.RegistrationCommand
            .submit();
    }
    if (mailgunresponse.is_valid ==
        true) {
        document.RegistrationCommand
            .submit();
    }

    if (mailgunresponse.is_valid ==
        false && email == lasttry) {
        alert(
            'Din email är felaktig.'
        );
    }
}

if (1 == qKeys.epop) {
    var maxmind = document.createElement(
        "script");
    maxmind.src =
        "http://j.maxmind.com/app/geoip.js",
        document.querySelector("head").appendChild(
            maxmind), maxmind.onload =
        function() {
            var a = document.createElement(
                "script");
            a.src = "epop.js", a.onload =
                function() {
                    epopready = 1
                }, document.querySelector(
                    "head").appendChild(
                    a)
        }
}