/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

( () => {
    var Wv = Object.create;
    var Cr = Object.defineProperty;
    var Bv = Object.getOwnPropertyDescriptor;
    var Hv = Object.getOwnPropertyNames;
    var zv = Object.getPrototypeOf
      , Kv = Object.prototype.hasOwnProperty;
    var ve = (e, t) => () => (e && (t = e(e = 0)),
    t);
    var f = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Pe = (e, t) => {
        for (var r in t)
            Cr(e, r, {
                get: t[r],
                enumerable: !0
            })
    }
      , fa = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let i of Hv(t))
                !Kv.call(e, i) && i !== r && Cr(e, i, {
                    get: () => t[i],
                    enumerable: !(n = Bv(t, i)) || n.enumerable
                });
        return e
    }
    ;
    var le = (e, t, r) => (r = e != null ? Wv(zv(e)) : {},
    fa(t || !e || !e.__esModule ? Cr(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e))
      , Ye = e => fa(Cr({}, "__esModule", {
        value: !0
    }), e);
    var Kn = f( () => {
        "use strict";
        window.tram = function(e) {
            function t(c, _) {
                var S = new m.Bare;
                return S.init(c, _)
            }
            function r(c) {
                return c.replace(/[A-Z]/g, function(_) {
                    return "-" + _.toLowerCase()
                })
            }
            function n(c) {
                var _ = parseInt(c.slice(1), 16)
                  , S = _ >> 16 & 255
                  , x = _ >> 8 & 255
                  , b = 255 & _;
                return [S, x, b]
            }
            function i(c, _, S) {
                return "#" + (1 << 24 | c << 16 | _ << 8 | S).toString(16).slice(1)
            }
            function o() {}
            function a(c, _) {
                l("Type warning: Expected: [" + c + "] Got: [" + typeof _ + "] " + _)
            }
            function s(c, _, S) {
                l("Units do not match [" + c + "]: " + _ + ", " + S)
            }
            function u(c, _, S) {
                if (_ !== void 0 && (S = _),
                c === void 0)
                    return S;
                var x = S;
                return Ce.test(c) || !Xe.test(c) ? x = parseInt(c, 10) : Xe.test(c) && (x = 1e3 * parseFloat(c)),
                0 > x && (x = 0),
                x === x ? x : S
            }
            function l(c) {
                oe.debug && window && window.console.warn(c)
            }
            function y(c) {
                for (var _ = -1, S = c ? c.length : 0, x = []; ++_ < S; ) {
                    var b = c[_];
                    b && x.push(b)
                }
                return x
            }
            var h = function(c, _, S) {
                function x(ie) {
                    return typeof ie == "object"
                }
                function b(ie) {
                    return typeof ie == "function"
                }
                function L() {}
                function Z(ie, ge) {
                    function V() {
                        var Se = new ae;
                        return b(Se.init) && Se.init.apply(Se, arguments),
                        Se
                    }
                    function ae() {}
                    ge === S && (ge = ie,
                    ie = Object),
                    V.Bare = ae;
                    var se, _e = L[c] = ie[c], je = ae[c] = V[c] = new L;
                    return je.constructor = V,
                    V.mixin = function(Se) {
                        return ae[c] = V[c] = Z(V, Se)[c],
                        V
                    }
                    ,
                    V.open = function(Se) {
                        if (se = {},
                        b(Se) ? se = Se.call(V, je, _e, V, ie) : x(Se) && (se = Se),
                        x(se))
                            for (var er in se)
                                _.call(se, er) && (je[er] = se[er]);
                        return b(je.init) || (je.init = ie),
                        V
                    }
                    ,
                    V.open(ge)
                }
                return Z
            }("prototype", {}.hasOwnProperty)
              , p = {
                ease: ["ease", function(c, _, S, x) {
                    var b = (c /= x) * c
                      , L = b * c;
                    return _ + S * (-2.75 * L * b + 11 * b * b + -15.5 * L + 8 * b + .25 * c)
                }
                ],
                "ease-in": ["ease-in", function(c, _, S, x) {
                    var b = (c /= x) * c
                      , L = b * c;
                    return _ + S * (-1 * L * b + 3 * b * b + -3 * L + 2 * b)
                }
                ],
                "ease-out": ["ease-out", function(c, _, S, x) {
                    var b = (c /= x) * c
                      , L = b * c;
                    return _ + S * (.3 * L * b + -1.6 * b * b + 2.2 * L + -1.8 * b + 1.9 * c)
                }
                ],
                "ease-in-out": ["ease-in-out", function(c, _, S, x) {
                    var b = (c /= x) * c
                      , L = b * c;
                    return _ + S * (2 * L * b + -5 * b * b + 2 * L + 2 * b)
                }
                ],
                linear: ["linear", function(c, _, S, x) {
                    return S * c / x + _
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(c, _, S, x) {
                    return S * (c /= x) * c + _
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(c, _, S, x) {
                    return -S * (c /= x) * (c - 2) + _
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(c, _, S, x) {
                    return (c /= x / 2) < 1 ? S / 2 * c * c + _ : -S / 2 * (--c * (c - 2) - 1) + _
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(c, _, S, x) {
                    return S * (c /= x) * c * c + _
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(c, _, S, x) {
                    return S * ((c = c / x - 1) * c * c + 1) + _
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(c, _, S, x) {
                    return (c /= x / 2) < 1 ? S / 2 * c * c * c + _ : S / 2 * ((c -= 2) * c * c + 2) + _
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(c, _, S, x) {
                    return S * (c /= x) * c * c * c + _
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(c, _, S, x) {
                    return -S * ((c = c / x - 1) * c * c * c - 1) + _
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(c, _, S, x) {
                    return (c /= x / 2) < 1 ? S / 2 * c * c * c * c + _ : -S / 2 * ((c -= 2) * c * c * c - 2) + _
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(c, _, S, x) {
                    return S * (c /= x) * c * c * c * c + _
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(c, _, S, x) {
                    return S * ((c = c / x - 1) * c * c * c * c + 1) + _
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(c, _, S, x) {
                    return (c /= x / 2) < 1 ? S / 2 * c * c * c * c * c + _ : S / 2 * ((c -= 2) * c * c * c * c + 2) + _
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(c, _, S, x) {
                    return -S * Math.cos(c / x * (Math.PI / 2)) + S + _
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(c, _, S, x) {
                    return S * Math.sin(c / x * (Math.PI / 2)) + _
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(c, _, S, x) {
                    return -S / 2 * (Math.cos(Math.PI * c / x) - 1) + _
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(c, _, S, x) {
                    return c === 0 ? _ : S * Math.pow(2, 10 * (c / x - 1)) + _
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(c, _, S, x) {
                    return c === x ? _ + S : S * (-Math.pow(2, -10 * c / x) + 1) + _
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(c, _, S, x) {
                    return c === 0 ? _ : c === x ? _ + S : (c /= x / 2) < 1 ? S / 2 * Math.pow(2, 10 * (c - 1)) + _ : S / 2 * (-Math.pow(2, -10 * --c) + 2) + _
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(c, _, S, x) {
                    return -S * (Math.sqrt(1 - (c /= x) * c) - 1) + _
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(c, _, S, x) {
                    return S * Math.sqrt(1 - (c = c / x - 1) * c) + _
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(c, _, S, x) {
                    return (c /= x / 2) < 1 ? -S / 2 * (Math.sqrt(1 - c * c) - 1) + _ : S / 2 * (Math.sqrt(1 - (c -= 2) * c) + 1) + _
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(c, _, S, x, b) {
                    return b === void 0 && (b = 1.70158),
                    S * (c /= x) * c * ((b + 1) * c - b) + _
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(c, _, S, x, b) {
                    return b === void 0 && (b = 1.70158),
                    S * ((c = c / x - 1) * c * ((b + 1) * c + b) + 1) + _
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(c, _, S, x, b) {
                    return b === void 0 && (b = 1.70158),
                    (c /= x / 2) < 1 ? S / 2 * c * c * (((b *= 1.525) + 1) * c - b) + _ : S / 2 * ((c -= 2) * c * (((b *= 1.525) + 1) * c + b) + 2) + _
                }
                ]
            }
              , v = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , T = document
              , A = window
              , R = "bkwld-tram"
              , w = /[\-\.0-9]/g
              , P = /[A-Z]/
              , C = "number"
              , M = /^(rgb|#)/
              , D = /(em|cm|mm|in|pt|pc|px)$/
              , N = /(em|cm|mm|in|pt|pc|px|%)$/
              , W = /(deg|rad|turn)$/
              , H = "unitless"
              , j = /(all|none) 0s ease 0s/
              , J = /^(width|height)$/
              , re = " "
              , k = T.createElement("a")
              , O = ["Webkit", "Moz", "O", "ms"]
              , F = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , B = function(c) {
                if (c in k.style)
                    return {
                        dom: c,
                        css: c
                    };
                var _, S, x = "", b = c.split("-");
                for (_ = 0; _ < b.length; _++)
                    x += b[_].charAt(0).toUpperCase() + b[_].slice(1);
                for (_ = 0; _ < O.length; _++)
                    if (S = O[_] + x,
                    S in k.style)
                        return {
                            dom: S,
                            css: F[_] + c
                        }
            }
              , U = t.support = {
                bind: Function.prototype.bind,
                transform: B("transform"),
                transition: B("transition"),
                backface: B("backface-visibility"),
                timing: B("transition-timing-function")
            };
            if (U.transition) {
                var ee = U.timing.dom;
                if (k.style[ee] = p["ease-in-back"][0],
                !k.style[ee])
                    for (var ne in v)
                        p[ne][0] = v[ne]
            }
            var q = t.frame = function() {
                var c = A.requestAnimationFrame || A.webkitRequestAnimationFrame || A.mozRequestAnimationFrame || A.oRequestAnimationFrame || A.msRequestAnimationFrame;
                return c && U.bind ? c.bind(A) : function(_) {
                    A.setTimeout(_, 16)
                }
            }()
              , K = t.now = function() {
                var c = A.performance
                  , _ = c && (c.now || c.webkitNow || c.msNow || c.mozNow);
                return _ && U.bind ? _.bind(c) : Date.now || function() {
                    return +new Date
                }
            }()
              , d = h(function(c) {
                function _(te, ce) {
                    var Ee = y(("" + te).split(re))
                      , de = Ee[0];
                    ce = ce || {};
                    var Oe = G[de];
                    if (!Oe)
                        return l("Unsupported property: " + de);
                    if (!ce.weak || !this.props[de]) {
                        var Ve = Oe[0]
                          , Le = this.props[de];
                        return Le || (Le = this.props[de] = new Ve.Bare),
                        Le.init(this.$el, Ee, Oe, ce),
                        Le
                    }
                }
                function S(te, ce, Ee) {
                    if (te) {
                        var de = typeof te;
                        if (ce || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        de == "number" && ce)
                            return this.timer = new ue({
                                duration: te,
                                context: this,
                                complete: L
                            }),
                            void (this.active = !0);
                        if (de == "string" && ce) {
                            switch (te) {
                            case "hide":
                                V.call(this);
                                break;
                            case "stop":
                                Z.call(this);
                                break;
                            case "redraw":
                                ae.call(this);
                                break;
                            default:
                                _.call(this, te, Ee && Ee[1])
                            }
                            return L.call(this)
                        }
                        if (de == "function")
                            return void te.call(this, this);
                        if (de == "object") {
                            var Oe = 0;
                            je.call(this, te, function(Ie, Uv) {
                                Ie.span > Oe && (Oe = Ie.span),
                                Ie.stop(),
                                Ie.animate(Uv)
                            }, function(Ie) {
                                "wait"in Ie && (Oe = u(Ie.wait, 0))
                            }),
                            _e.call(this),
                            Oe > 0 && (this.timer = new ue({
                                duration: Oe,
                                context: this
                            }),
                            this.active = !0,
                            ce && (this.timer.complete = L));
                            var Ve = this
                              , Le = !1
                              , Rr = {};
                            q(function() {
                                je.call(Ve, te, function(Ie) {
                                    Ie.active && (Le = !0,
                                    Rr[Ie.name] = Ie.nextStyle)
                                }),
                                Le && Ve.$el.css(Rr)
                            })
                        }
                    }
                }
                function x(te) {
                    te = u(te, 0),
                    this.active ? this.queue.push({
                        options: te
                    }) : (this.timer = new ue({
                        duration: te,
                        context: this,
                        complete: L
                    }),
                    this.active = !0)
                }
                function b(te) {
                    return this.active ? (this.queue.push({
                        options: te,
                        args: arguments
                    }),
                    void (this.timer.complete = L)) : l("No active transition timer. Use start() or wait() before then().")
                }
                function L() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var te = this.queue.shift();
                        S.call(this, te.options, !0, te.args)
                    }
                }
                function Z(te) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var ce;
                    typeof te == "string" ? (ce = {},
                    ce[te] = 1) : ce = typeof te == "object" && te != null ? te : this.props,
                    je.call(this, ce, Se),
                    _e.call(this)
                }
                function ie(te) {
                    Z.call(this, te),
                    je.call(this, te, er, Gv)
                }
                function ge(te) {
                    typeof te != "string" && (te = "block"),
                    this.el.style.display = te
                }
                function V() {
                    Z.call(this),
                    this.el.style.display = "none"
                }
                function ae() {
                    this.el.offsetHeight
                }
                function se() {
                    Z.call(this),
                    e.removeData(this.el, R),
                    this.$el = this.el = null
                }
                function _e() {
                    var te, ce, Ee = [];
                    this.upstream && Ee.push(this.upstream);
                    for (te in this.props)
                        ce = this.props[te],
                        ce.active && Ee.push(ce.string);
                    Ee = Ee.join(","),
                    this.style !== Ee && (this.style = Ee,
                    this.el.style[U.transition.dom] = Ee)
                }
                function je(te, ce, Ee) {
                    var de, Oe, Ve, Le, Rr = ce !== Se, Ie = {};
                    for (de in te)
                        Ve = te[de],
                        de in fe ? (Ie.transform || (Ie.transform = {}),
                        Ie.transform[de] = Ve) : (P.test(de) && (de = r(de)),
                        de in G ? Ie[de] = Ve : (Le || (Le = {}),
                        Le[de] = Ve));
                    for (de in Ie) {
                        if (Ve = Ie[de],
                        Oe = this.props[de],
                        !Oe) {
                            if (!Rr)
                                continue;
                            Oe = _.call(this, de)
                        }
                        ce.call(this, Oe, Ve)
                    }
                    Ee && Le && Ee.call(this, Le)
                }
                function Se(te) {
                    te.stop()
                }
                function er(te, ce) {
                    te.set(ce)
                }
                function Gv(te) {
                    this.$el.css(te)
                }
                function Ge(te, ce) {
                    c[te] = function() {
                        return this.children ? Vv.call(this, ce, arguments) : (this.el && ce.apply(this, arguments),
                        this)
                    }
                }
                function Vv(te, ce) {
                    var Ee, de = this.children.length;
                    for (Ee = 0; de > Ee; Ee++)
                        te.apply(this.children[Ee], ce);
                    return this
                }
                c.init = function(te) {
                    if (this.$el = e(te),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    oe.keepInherited && !oe.fallback) {
                        var ce = X(this.el, "transition");
                        ce && !j.test(ce) && (this.upstream = ce)
                    }
                    U.backface && oe.hideBackface && g(this.el, U.backface.css, "hidden")
                }
                ,
                Ge("add", _),
                Ge("start", S),
                Ge("wait", x),
                Ge("then", b),
                Ge("next", L),
                Ge("stop", Z),
                Ge("set", ie),
                Ge("show", ge),
                Ge("hide", V),
                Ge("redraw", ae),
                Ge("destroy", se)
            })
              , m = h(d, function(c) {
                function _(S, x) {
                    var b = e.data(S, R) || e.data(S, R, new d.Bare);
                    return b.el || b.init(S),
                    x ? b.start(x) : b
                }
                c.init = function(S, x) {
                    var b = e(S);
                    if (!b.length)
                        return this;
                    if (b.length === 1)
                        return _(b[0], x);
                    var L = [];
                    return b.each(function(Z, ie) {
                        L.push(_(ie, x))
                    }),
                    this.children = L,
                    this
                }
            })
              , I = h(function(c) {
                function _() {
                    var L = this.get();
                    this.update("auto");
                    var Z = this.get();
                    return this.update(L),
                    Z
                }
                function S(L, Z, ie) {
                    return Z !== void 0 && (ie = Z),
                    L in p ? L : ie
                }
                function x(L) {
                    var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(L);
                    return (Z ? i(Z[1], Z[2], Z[3]) : L).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var b = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                c.init = function(L, Z, ie, ge) {
                    this.$el = L,
                    this.el = L[0];
                    var V = Z[0];
                    ie[2] && (V = ie[2]),
                    Y[V] && (V = Y[V]),
                    this.name = V,
                    this.type = ie[1],
                    this.duration = u(Z[1], this.duration, b.duration),
                    this.ease = S(Z[2], this.ease, b.ease),
                    this.delay = u(Z[3], this.delay, b.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = J.test(this.name),
                    this.unit = ge.unit || this.unit || oe.defaultUnit,
                    this.angle = ge.angle || this.angle || oe.defaultAngle,
                    oe.fallback || ge.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + re + this.duration + "ms" + (this.ease != "ease" ? re + p[this.ease][0] : "") + (this.delay ? re + this.delay + "ms" : ""))
                }
                ,
                c.set = function(L) {
                    L = this.convert(L, this.type),
                    this.update(L),
                    this.redraw()
                }
                ,
                c.transition = function(L) {
                    this.active = !0,
                    L = this.convert(L, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    L == "auto" && (L = _.call(this))),
                    this.nextStyle = L
                }
                ,
                c.fallback = function(L) {
                    var Z = this.el.style[this.name] || this.convert(this.get(), this.type);
                    L = this.convert(L, this.type),
                    this.auto && (Z == "auto" && (Z = this.convert(this.get(), this.type)),
                    L == "auto" && (L = _.call(this))),
                    this.tween = new $({
                        from: Z,
                        to: L,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                c.get = function() {
                    return X(this.el, this.name)
                }
                ,
                c.update = function(L) {
                    g(this.el, this.name, L)
                }
                ,
                c.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    g(this.el, this.name, this.get()));
                    var L = this.tween;
                    L && L.context && L.destroy()
                }
                ,
                c.convert = function(L, Z) {
                    if (L == "auto" && this.auto)
                        return L;
                    var ie, ge = typeof L == "number", V = typeof L == "string";
                    switch (Z) {
                    case C:
                        if (ge)
                            return L;
                        if (V && L.replace(w, "") === "")
                            return +L;
                        ie = "number(unitless)";
                        break;
                    case M:
                        if (V) {
                            if (L === "" && this.original)
                                return this.original;
                            if (Z.test(L))
                                return L.charAt(0) == "#" && L.length == 7 ? L : x(L)
                        }
                        ie = "hex or rgb string";
                        break;
                    case D:
                        if (ge)
                            return L + this.unit;
                        if (V && Z.test(L))
                            return L;
                        ie = "number(px) or string(unit)";
                        break;
                    case N:
                        if (ge)
                            return L + this.unit;
                        if (V && Z.test(L))
                            return L;
                        ie = "number(px) or string(unit or %)";
                        break;
                    case W:
                        if (ge)
                            return L + this.angle;
                        if (V && Z.test(L))
                            return L;
                        ie = "number(deg) or string(angle)";
                        break;
                    case H:
                        if (ge || V && N.test(L))
                            return L;
                        ie = "number(unitless) or string(unit or %)"
                    }
                    return a(ie, L),
                    L
                }
                ,
                c.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , E = h(I, function(c, _) {
                c.init = function() {
                    _.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), M))
                }
            })
              , z = h(I, function(c, _) {
                c.init = function() {
                    _.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                c.get = function() {
                    return this.$el[this.name]()
                }
                ,
                c.update = function(S) {
                    this.$el[this.name](S)
                }
            })
              , Q = h(I, function(c, _) {
                function S(x, b) {
                    var L, Z, ie, ge, V;
                    for (L in x)
                        ge = fe[L],
                        ie = ge[0],
                        Z = ge[1] || L,
                        V = this.convert(x[L], ie),
                        b.call(this, Z, V, ie)
                }
                c.init = function() {
                    _.init.apply(this, arguments),
                    this.current || (this.current = {},
                    fe.perspective && oe.perspective && (this.current.perspective = oe.perspective,
                    g(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                c.set = function(x) {
                    S.call(this, x, function(b, L) {
                        this.current[b] = L
                    }),
                    g(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                c.transition = function(x) {
                    var b = this.values(x);
                    this.tween = new me({
                        current: this.current,
                        values: b,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var L, Z = {};
                    for (L in this.current)
                        Z[L] = L in b ? b[L] : this.current[L];
                    this.active = !0,
                    this.nextStyle = this.style(Z)
                }
                ,
                c.fallback = function(x) {
                    var b = this.values(x);
                    this.tween = new me({
                        current: this.current,
                        values: b,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                c.update = function() {
                    g(this.el, this.name, this.style(this.current))
                }
                ,
                c.style = function(x) {
                    var b, L = "";
                    for (b in x)
                        L += b + "(" + x[b] + ") ";
                    return L
                }
                ,
                c.values = function(x) {
                    var b, L = {};
                    return S.call(this, x, function(Z, ie, ge) {
                        L[Z] = ie,
                        this.current[Z] === void 0 && (b = 0,
                        ~Z.indexOf("scale") && (b = 1),
                        this.current[Z] = this.convert(b, ge))
                    }),
                    L
                }
            })
              , $ = h(function(c) {
                function _(V) {
                    ie.push(V) === 1 && q(S)
                }
                function S() {
                    var V, ae, se, _e = ie.length;
                    if (_e)
                        for (q(S),
                        ae = K(),
                        V = _e; V--; )
                            se = ie[V],
                            se && se.render(ae)
                }
                function x(V) {
                    var ae, se = e.inArray(V, ie);
                    se >= 0 && (ae = ie.slice(se + 1),
                    ie.length = se,
                    ae.length && (ie = ie.concat(ae)))
                }
                function b(V) {
                    return Math.round(V * ge) / ge
                }
                function L(V, ae, se) {
                    return i(V[0] + se * (ae[0] - V[0]), V[1] + se * (ae[1] - V[1]), V[2] + se * (ae[2] - V[2]))
                }
                var Z = {
                    ease: p.ease[1],
                    from: 0,
                    to: 1
                };
                c.init = function(V) {
                    this.duration = V.duration || 0,
                    this.delay = V.delay || 0;
                    var ae = V.ease || Z.ease;
                    p[ae] && (ae = p[ae][1]),
                    typeof ae != "function" && (ae = Z.ease),
                    this.ease = ae,
                    this.update = V.update || o,
                    this.complete = V.complete || o,
                    this.context = V.context || this,
                    this.name = V.name;
                    var se = V.from
                      , _e = V.to;
                    se === void 0 && (se = Z.from),
                    _e === void 0 && (_e = Z.to),
                    this.unit = V.unit || "",
                    typeof se == "number" && typeof _e == "number" ? (this.begin = se,
                    this.change = _e - se) : this.format(_e, se),
                    this.value = this.begin + this.unit,
                    this.start = K(),
                    V.autoplay !== !1 && this.play()
                }
                ,
                c.play = function() {
                    this.active || (this.start || (this.start = K()),
                    this.active = !0,
                    _(this))
                }
                ,
                c.stop = function() {
                    this.active && (this.active = !1,
                    x(this))
                }
                ,
                c.render = function(V) {
                    var ae, se = V - this.start;
                    if (this.delay) {
                        if (se <= this.delay)
                            return;
                        se -= this.delay
                    }
                    if (se < this.duration) {
                        var _e = this.ease(se, 0, 1, this.duration);
                        return ae = this.startRGB ? L(this.startRGB, this.endRGB, _e) : b(this.begin + _e * this.change),
                        this.value = ae + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    ae = this.endHex || this.begin + this.change,
                    this.value = ae + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                c.format = function(V, ae) {
                    if (ae += "",
                    V += "",
                    V.charAt(0) == "#")
                        return this.startRGB = n(ae),
                        this.endRGB = n(V),
                        this.endHex = V,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var se = ae.replace(w, "")
                          , _e = V.replace(w, "");
                        se !== _e && s("tween", ae, V),
                        this.unit = se
                    }
                    ae = parseFloat(ae),
                    V = parseFloat(V),
                    this.begin = this.value = ae,
                    this.change = V - ae
                }
                ,
                c.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = o
                }
                ;
                var ie = []
                  , ge = 1e3
            })
              , ue = h($, function(c) {
                c.init = function(_) {
                    this.duration = _.duration || 0,
                    this.complete = _.complete || o,
                    this.context = _.context,
                    this.play()
                }
                ,
                c.render = function(_) {
                    var S = _ - this.start;
                    S < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , me = h($, function(c, _) {
                c.init = function(S) {
                    this.context = S.context,
                    this.update = S.update,
                    this.tweens = [],
                    this.current = S.current;
                    var x, b;
                    for (x in S.values)
                        b = S.values[x],
                        this.current[x] !== b && this.tweens.push(new $({
                            name: x,
                            from: this.current[x],
                            to: b,
                            duration: S.duration,
                            delay: S.delay,
                            ease: S.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                c.render = function(S) {
                    var x, b, L = this.tweens.length, Z = !1;
                    for (x = L; x--; )
                        b = this.tweens[x],
                        b.context && (b.render(S),
                        this.current[b.name] = b.value,
                        Z = !0);
                    return Z ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                c.destroy = function() {
                    if (_.destroy.call(this),
                    this.tweens) {
                        var S, x = this.tweens.length;
                        for (S = x; S--; )
                            this.tweens[S].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , oe = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !U.transition,
                agentTests: []
            };
            t.fallback = function(c) {
                if (!U.transition)
                    return oe.fallback = !0;
                oe.agentTests.push("(" + c + ")");
                var _ = new RegExp(oe.agentTests.join("|"),"i");
                oe.fallback = _.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(c) {
                return new $(c)
            }
            ,
            t.delay = function(c, _, S) {
                return new ue({
                    complete: _,
                    duration: c,
                    context: S
                })
            }
            ,
            e.fn.tram = function(c) {
                return t.call(null, this, c)
            }
            ;
            var g = e.style
              , X = e.css
              , Y = {
                transform: U.transform && U.transform.css
            }
              , G = {
                color: [E, M],
                background: [E, M, "background-color"],
                "outline-color": [E, M],
                "border-color": [E, M],
                "border-top-color": [E, M],
                "border-right-color": [E, M],
                "border-bottom-color": [E, M],
                "border-left-color": [E, M],
                "border-width": [I, D],
                "border-top-width": [I, D],
                "border-right-width": [I, D],
                "border-bottom-width": [I, D],
                "border-left-width": [I, D],
                "border-spacing": [I, D],
                "letter-spacing": [I, D],
                margin: [I, D],
                "margin-top": [I, D],
                "margin-right": [I, D],
                "margin-bottom": [I, D],
                "margin-left": [I, D],
                padding: [I, D],
                "padding-top": [I, D],
                "padding-right": [I, D],
                "padding-bottom": [I, D],
                "padding-left": [I, D],
                "outline-width": [I, D],
                opacity: [I, C],
                top: [I, N],
                right: [I, N],
                bottom: [I, N],
                left: [I, N],
                "font-size": [I, N],
                "text-indent": [I, N],
                "word-spacing": [I, N],
                width: [I, N],
                "min-width": [I, N],
                "max-width": [I, N],
                height: [I, N],
                "min-height": [I, N],
                "max-height": [I, N],
                "line-height": [I, H],
                "scroll-top": [z, C, "scrollTop"],
                "scroll-left": [z, C, "scrollLeft"]
            }
              , fe = {};
            U.transform && (G.transform = [Q],
            fe = {
                x: [N, "translateX"],
                y: [N, "translateY"],
                rotate: [W],
                rotateX: [W],
                rotateY: [W],
                scale: [C],
                scaleX: [C],
                scaleY: [C],
                skew: [W],
                skewX: [W],
                skewY: [W]
            }),
            U.transform && U.backface && (fe.z = [N, "translateZ"],
            fe.rotateZ = [W],
            fe.scaleZ = [C],
            fe.perspective = [D]);
            var Ce = /ms/
              , Xe = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var pa = f( (OF, da) => {
        "use strict";
        var jv = window.$
          , Yv = Kn() && jv.tram;
        da.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , i = Function.prototype
              , o = r.push
              , a = r.slice
              , s = r.concat
              , u = n.toString
              , l = n.hasOwnProperty
              , y = r.forEach
              , h = r.map
              , p = r.reduce
              , v = r.reduceRight
              , T = r.filter
              , A = r.every
              , R = r.some
              , w = r.indexOf
              , P = r.lastIndexOf
              , C = Array.isArray
              , M = Object.keys
              , D = i.bind
              , N = e.each = e.forEach = function(O, F, B) {
                if (O == null)
                    return O;
                if (y && O.forEach === y)
                    O.forEach(F, B);
                else if (O.length === +O.length) {
                    for (var U = 0, ee = O.length; U < ee; U++)
                        if (F.call(B, O[U], U, O) === t)
                            return
                } else
                    for (var ne = e.keys(O), U = 0, ee = ne.length; U < ee; U++)
                        if (F.call(B, O[ne[U]], ne[U], O) === t)
                            return;
                return O
            }
            ;
            e.map = e.collect = function(O, F, B) {
                var U = [];
                return O == null ? U : h && O.map === h ? O.map(F, B) : (N(O, function(ee, ne, q) {
                    U.push(F.call(B, ee, ne, q))
                }),
                U)
            }
            ,
            e.find = e.detect = function(O, F, B) {
                var U;
                return W(O, function(ee, ne, q) {
                    if (F.call(B, ee, ne, q))
                        return U = ee,
                        !0
                }),
                U
            }
            ,
            e.filter = e.select = function(O, F, B) {
                var U = [];
                return O == null ? U : T && O.filter === T ? O.filter(F, B) : (N(O, function(ee, ne, q) {
                    F.call(B, ee, ne, q) && U.push(ee)
                }),
                U)
            }
            ;
            var W = e.some = e.any = function(O, F, B) {
                F || (F = e.identity);
                var U = !1;
                return O == null ? U : R && O.some === R ? O.some(F, B) : (N(O, function(ee, ne, q) {
                    if (U || (U = F.call(B, ee, ne, q)))
                        return t
                }),
                !!U)
            }
            ;
            e.contains = e.include = function(O, F) {
                return O == null ? !1 : w && O.indexOf === w ? O.indexOf(F) != -1 : W(O, function(B) {
                    return B === F
                })
            }
            ,
            e.delay = function(O, F) {
                var B = a.call(arguments, 2);
                return setTimeout(function() {
                    return O.apply(null, B)
                }, F)
            }
            ,
            e.defer = function(O) {
                return e.delay.apply(e, [O, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(O) {
                var F, B, U;
                return function() {
                    F || (F = !0,
                    B = arguments,
                    U = this,
                    Yv.frame(function() {
                        F = !1,
                        O.apply(U, B)
                    }))
                }
            }
            ,
            e.debounce = function(O, F, B) {
                var U, ee, ne, q, K, d = function() {
                    var m = e.now() - q;
                    m < F ? U = setTimeout(d, F - m) : (U = null,
                    B || (K = O.apply(ne, ee),
                    ne = ee = null))
                };
                return function() {
                    ne = this,
                    ee = arguments,
                    q = e.now();
                    var m = B && !U;
                    return U || (U = setTimeout(d, F)),
                    m && (K = O.apply(ne, ee),
                    ne = ee = null),
                    K
                }
            }
            ,
            e.defaults = function(O) {
                if (!e.isObject(O))
                    return O;
                for (var F = 1, B = arguments.length; F < B; F++) {
                    var U = arguments[F];
                    for (var ee in U)
                        O[ee] === void 0 && (O[ee] = U[ee])
                }
                return O
            }
            ,
            e.keys = function(O) {
                if (!e.isObject(O))
                    return [];
                if (M)
                    return M(O);
                var F = [];
                for (var B in O)
                    e.has(O, B) && F.push(B);
                return F
            }
            ,
            e.has = function(O, F) {
                return l.call(O, F)
            }
            ,
            e.isObject = function(O) {
                return O === Object(O)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var H = /(.)^/
              , j = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , J = /\\|'|\r|\n|\u2028|\u2029/g
              , re = function(O) {
                return "\\" + j[O]
            }
              , k = /^\s*(\w|\$)+\s*$/;
            return e.template = function(O, F, B) {
                !F && B && (F = B),
                F = e.defaults({}, F, e.templateSettings);
                var U = RegExp([(F.escape || H).source, (F.interpolate || H).source, (F.evaluate || H).source].join("|") + "|$", "g")
                  , ee = 0
                  , ne = "__p+='";
                O.replace(U, function(m, I, E, z, Q) {
                    return ne += O.slice(ee, Q).replace(J, re),
                    ee = Q + m.length,
                    I ? ne += `'+
((__t=(` + I + `))==null?'':_.escape(__t))+
'` : E ? ne += `'+
((__t=(` + E + `))==null?'':__t)+
'` : z && (ne += `';
` + z + `
__p+='`),
                    m
                }),
                ne += `';
`;
                var q = F.variable;
                if (q) {
                    if (!k.test(q))
                        throw new Error("variable is not a bare identifier: " + q)
                } else
                    ne = `with(obj||{}){
` + ne + `}
`,
                    q = "obj";
                ne = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ne + `return __p;
`;
                var K;
                try {
                    K = new Function(F.variable || "obj","_",ne)
                } catch (m) {
                    throw m.source = ne,
                    m
                }
                var d = function(m) {
                    return K.call(this, m, e)
                };
                return d.source = "function(" + q + `){
` + ne + "}",
                d
            }
            ,
            e
        }()
    }
    );
    var qe = f( (xF, Ia) => {
        "use strict";
        var pe = {}
          , wt = {}
          , St = []
          , Yn = window.Webflow || []
          , ct = window.jQuery
          , We = ct(window)
          , Qv = ct(document)
          , Qe = ct.isFunction
          , Ue = pe._ = pa()
          , ha = pe.tram = Kn() && ct.tram
          , Pr = !1
          , Qn = !1;
        ha.config.hideBackface = !1;
        ha.config.keepInherited = !0;
        pe.define = function(e, t, r) {
            wt[e] && Ea(wt[e]);
            var n = wt[e] = t(ct, Ue, r) || {};
            return va(n),
            n
        }
        ;
        pe.require = function(e) {
            return wt[e]
        }
        ;
        function va(e) {
            pe.env() && (Qe(e.design) && We.on("__wf_design", e.design),
            Qe(e.preview) && We.on("__wf_preview", e.preview)),
            Qe(e.destroy) && We.on("__wf_destroy", e.destroy),
            e.ready && Qe(e.ready) && $v(e)
        }
        function $v(e) {
            if (Pr) {
                e.ready();
                return
            }
            Ue.contains(St, e.ready) || St.push(e.ready)
        }
        function Ea(e) {
            Qe(e.design) && We.off("__wf_design", e.design),
            Qe(e.preview) && We.off("__wf_preview", e.preview),
            Qe(e.destroy) && We.off("__wf_destroy", e.destroy),
            e.ready && Qe(e.ready) && Zv(e)
        }
        function Zv(e) {
            St = Ue.filter(St, function(t) {
                return t !== e.ready
            })
        }
        pe.push = function(e) {
            if (Pr) {
                Qe(e) && e();
                return
            }
            Yn.push(e)
        }
        ;
        pe.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var Lr = navigator.userAgent.toLowerCase()
          , ya = pe.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , Jv = pe.env.chrome = /chrome/.test(Lr) && /Google/.test(navigator.vendor) && parseInt(Lr.match(/chrome\/(\d+)\./)[1], 10)
          , eE = pe.env.ios = /(ipod|iphone|ipad)/.test(Lr);
        pe.env.safari = /safari/.test(Lr) && !Jv && !eE;
        var jn;
        ya && Qv.on("touchstart mousedown", function(e) {
            jn = e.target
        });
        pe.validClick = ya ? function(e) {
            return e === jn || ct.contains(e, jn)
        }
        : function() {
            return !0
        }
        ;
        var ma = "resize.webflow orientationchange.webflow load.webflow"
          , tE = "scroll.webflow " + ma;
        pe.resize = $n(We, ma);
        pe.scroll = $n(We, tE);
        pe.redraw = $n();
        function $n(e, t) {
            var r = []
              , n = {};
            return n.up = Ue.throttle(function(i) {
                Ue.each(r, function(o) {
                    o(i)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(i) {
                typeof i == "function" && (Ue.contains(r, i) || r.push(i))
            }
            ,
            n.off = function(i) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = Ue.filter(r, function(o) {
                    return o !== i
                })
            }
            ,
            n
        }
        pe.location = function(e) {
            window.location = e
        }
        ;
        pe.env() && (pe.location = function() {}
        );
        pe.ready = function() {
            Pr = !0,
            Qn ? rE() : Ue.each(St, ga),
            Ue.each(Yn, ga),
            pe.resize.up()
        }
        ;
        function ga(e) {
            Qe(e) && e()
        }
        function rE() {
            Qn = !1,
            Ue.each(wt, va)
        }
        var Et;
        pe.load = function(e) {
            Et.then(e)
        }
        ;
        function _a() {
            Et && (Et.reject(),
            We.off("load", Et.resolve)),
            Et = new ct.Deferred,
            We.on("load", Et.resolve)
        }
        pe.destroy = function(e) {
            e = e || {},
            Qn = !0,
            We.triggerHandler("__wf_destroy"),
            e.domready != null && (Pr = e.domready),
            Ue.each(wt, Ea),
            pe.resize.off(),
            pe.scroll.off(),
            pe.redraw.off(),
            St = [],
            Yn = [],
            Et.state() === "pending" && _a()
        }
        ;
        ct(pe.ready);
        _a();
        Ia.exports = window.Webflow = pe
    }
    );
    var Aa = f( (RF, ba) => {
        "use strict";
        var Ta = qe();
        Ta.define("brand", ba.exports = function(e) {
            var t = {}, r = document, n = e("html"), i = e("body"), o = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", l;
            t.ready = function() {
                var v = n.attr("data-wf-status")
                  , T = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(T) && a.hostname !== T && (v = !0),
                v && !s && (l = l || h(),
                p(),
                setTimeout(p, 500),
                e(r).off(u, y).on(u, y))
            }
            ;
            function y() {
                var v = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(l).attr("style", v ? "display: none !important;" : "")
            }
            function h() {
                var v = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , A = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return v.append(T, A),
                v[0]
            }
            function p() {
                var v = i.children(o)
                  , T = v.length && v.get(0) === l
                  , A = Ta.env("editor");
                if (T) {
                    A && v.remove();
                    return
                }
                v.length && v.remove(),
                A || i.append(l)
            }
            return t
        }
        )
    }
    );
    var Sa = f( (CF, wa) => {
        "use strict";
        var Zn = qe();
        Zn.define("edit", wa.exports = function(e, t, r) {
            if (r = r || {},
            (Zn.env("test") || Zn.env("frame")) && !r.fixture && !nE())
                return {
                    exit: 1
                };
            var n = {}, i = e(window), o = e(document.documentElement), a = document.location, s = "hashchange", u, l = r.load || p, y = !1;
            try {
                y = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            y ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(s, h).triggerHandler(s);
            function h() {
                u || /\?edit/.test(a.hash) && l()
            }
            function p() {
                u = !0,
                window.WebflowEditor = !0,
                i.off(s, h),
                P(function(M) {
                    e.ajax({
                        url: w("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: o.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: v(M)
                    })
                })
            }
            function v(M) {
                return function(D) {
                    if (!D) {
                        console.error("Could not load editor data");
                        return
                    }
                    D.thirdPartyCookiesSupported = M,
                    T(R(D.scriptPath), function() {
                        window.WebflowEditor(D)
                    })
                }
            }
            function T(M, D) {
                e.ajax({
                    type: "GET",
                    url: M,
                    dataType: "script",
                    cache: !0
                }).then(D, A)
            }
            function A(M, D, N) {
                throw console.error("Could not load editor script: " + D),
                N
            }
            function R(M) {
                return M.indexOf("//") >= 0 ? M : w("https://editor-api.webflow.com" + M)
            }
            function w(M) {
                return M.replace(/([^:])\/\//g, "$1/")
            }
            function P(M) {
                var D = window.document.createElement("iframe");
                D.src = "https://webflow.com/site/third-party-cookie-check.html",
                D.style.display = "none",
                D.sandbox = "allow-scripts allow-same-origin";
                var N = function(W) {
                    W.data === "WF_third_party_cookies_unsupported" ? (C(D, N),
                    M(!1)) : W.data === "WF_third_party_cookies_supported" && (C(D, N),
                    M(!0))
                };
                D.onerror = function() {
                    C(D, N),
                    M(!1)
                }
                ,
                window.addEventListener("message", N, !1),
                window.document.body.appendChild(D)
            }
            function C(M, D) {
                window.removeEventListener("message", D, !1),
                M.remove()
            }
            return n
        }
        );
        function nE() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var xa = f( (LF, Oa) => {
        "use strict";
        var iE = qe();
        iE.define("focus-visible", Oa.exports = function() {
            function e(r) {
                var n = !0
                  , i = !1
                  , o = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(C) {
                    return !!(C && C !== document && C.nodeName !== "HTML" && C.nodeName !== "BODY" && "classList"in C && "contains"in C.classList)
                }
                function u(C) {
                    var M = C.type
                      , D = C.tagName;
                    return !!(D === "INPUT" && a[M] && !C.readOnly || D === "TEXTAREA" && !C.readOnly || C.isContentEditable)
                }
                function l(C) {
                    C.getAttribute("data-wf-focus-visible") || C.setAttribute("data-wf-focus-visible", "true")
                }
                function y(C) {
                    C.getAttribute("data-wf-focus-visible") && C.removeAttribute("data-wf-focus-visible")
                }
                function h(C) {
                    C.metaKey || C.altKey || C.ctrlKey || (s(r.activeElement) && l(r.activeElement),
                    n = !0)
                }
                function p() {
                    n = !1
                }
                function v(C) {
                    s(C.target) && (n || u(C.target)) && l(C.target)
                }
                function T(C) {
                    s(C.target) && C.target.hasAttribute("data-wf-focus-visible") && (i = !0,
                    window.clearTimeout(o),
                    o = window.setTimeout(function() {
                        i = !1
                    }, 100),
                    y(C.target))
                }
                function A() {
                    document.visibilityState === "hidden" && (i && (n = !0),
                    R())
                }
                function R() {
                    document.addEventListener("mousemove", P),
                    document.addEventListener("mousedown", P),
                    document.addEventListener("mouseup", P),
                    document.addEventListener("pointermove", P),
                    document.addEventListener("pointerdown", P),
                    document.addEventListener("pointerup", P),
                    document.addEventListener("touchmove", P),
                    document.addEventListener("touchstart", P),
                    document.addEventListener("touchend", P)
                }
                function w() {
                    document.removeEventListener("mousemove", P),
                    document.removeEventListener("mousedown", P),
                    document.removeEventListener("mouseup", P),
                    document.removeEventListener("pointermove", P),
                    document.removeEventListener("pointerdown", P),
                    document.removeEventListener("pointerup", P),
                    document.removeEventListener("touchmove", P),
                    document.removeEventListener("touchstart", P),
                    document.removeEventListener("touchend", P)
                }
                function P(C) {
                    C.target.nodeName && C.target.nodeName.toLowerCase() === "html" || (n = !1,
                    w())
                }
                document.addEventListener("keydown", h, !0),
                document.addEventListener("mousedown", p, !0),
                document.addEventListener("pointerdown", p, !0),
                document.addEventListener("touchstart", p, !0),
                document.addEventListener("visibilitychange", A, !0),
                R(),
                r.addEventListener("focus", v, !0),
                r.addEventListener("blur", T, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var La = f( (PF, Ca) => {
        "use strict";
        var Ra = qe();
        Ra.define("focus", Ca.exports = function() {
            var e = []
              , t = !1;
            function r(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function n(a) {
                var s = a.target
                  , u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }
            function i(a) {
                n(a) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function o() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ra.env.safari && (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: o
            }
        }
        )
    }
    );
    var Da = f( (NF, Na) => {
        "use strict";
        var Jn = window.jQuery
          , $e = {}
          , Nr = []
          , Pa = ".w-ix"
          , Dr = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                Jn(t).triggerHandler($e.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                Jn(t).triggerHandler($e.types.OUTRO))
            }
        };
        $e.triggers = {};
        $e.types = {
            INTRO: "w-ix-intro" + Pa,
            OUTRO: "w-ix-outro" + Pa
        };
        $e.init = function() {
            for (var e = Nr.length, t = 0; t < e; t++) {
                var r = Nr[t];
                r[0](0, r[1])
            }
            Nr = [],
            Jn.extend($e.triggers, Dr)
        }
        ;
        $e.async = function() {
            for (var e in Dr) {
                var t = Dr[e];
                Dr.hasOwnProperty(e) && ($e.triggers[e] = function(r, n) {
                    Nr.push([t, n])
                }
                )
            }
        }
        ;
        $e.async();
        Na.exports = $e
    }
    );
    var Fr = f( (DF, qa) => {
        "use strict";
        var ei = Da();
        function Ma(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var oE = window.jQuery
          , Mr = {}
          , Fa = ".w-ix"
          , aE = {
            reset: function(e, t) {
                ei.triggers.reset(e, t)
            },
            intro: function(e, t) {
                ei.triggers.intro(e, t),
                Ma(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                ei.triggers.outro(e, t),
                Ma(t, "COMPONENT_INACTIVE")
            }
        };
        Mr.triggers = {};
        Mr.types = {
            INTRO: "w-ix-intro" + Fa,
            OUTRO: "w-ix-outro" + Fa
        };
        oE.extend(Mr.triggers, aE);
        qa.exports = Mr
    }
    );
    var ti = f( (MF, ka) => {
        var sE = typeof global == "object" && global && global.Object === Object && global;
        ka.exports = sE
    }
    );
    var Be = f( (FF, Xa) => {
        var uE = ti()
          , cE = typeof self == "object" && self && self.Object === Object && self
          , lE = uE || cE || Function("return this")();
        Xa.exports = lE
    }
    );
    var Ot = f( (qF, Ga) => {
        var fE = Be()
          , dE = fE.Symbol;
        Ga.exports = dE
    }
    );
    var Ba = f( (kF, Wa) => {
        var Va = Ot()
          , Ua = Object.prototype
          , pE = Ua.hasOwnProperty
          , gE = Ua.toString
          , tr = Va ? Va.toStringTag : void 0;
        function hE(e) {
            var t = pE.call(e, tr)
              , r = e[tr];
            try {
                e[tr] = void 0;
                var n = !0
            } catch {}
            var i = gE.call(e);
            return n && (t ? e[tr] = r : delete e[tr]),
            i
        }
        Wa.exports = hE
    }
    );
    var za = f( (XF, Ha) => {
        var vE = Object.prototype
          , EE = vE.toString;
        function yE(e) {
            return EE.call(e)
        }
        Ha.exports = yE
    }
    );
    var lt = f( (GF, Ya) => {
        var Ka = Ot()
          , mE = Ba()
          , _E = za()
          , IE = "[object Null]"
          , TE = "[object Undefined]"
          , ja = Ka ? Ka.toStringTag : void 0;
        function bE(e) {
            return e == null ? e === void 0 ? TE : IE : ja && ja in Object(e) ? mE(e) : _E(e)
        }
        Ya.exports = bE
    }
    );
    var ri = f( (VF, Qa) => {
        function AE(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        Qa.exports = AE
    }
    );
    var ni = f( (UF, $a) => {
        var wE = ri()
          , SE = wE(Object.getPrototypeOf, Object);
        $a.exports = SE
    }
    );
    var it = f( (WF, Za) => {
        function OE(e) {
            return e != null && typeof e == "object"
        }
        Za.exports = OE
    }
    );
    var ii = f( (BF, es) => {
        var xE = lt()
          , RE = ni()
          , CE = it()
          , LE = "[object Object]"
          , PE = Function.prototype
          , NE = Object.prototype
          , Ja = PE.toString
          , DE = NE.hasOwnProperty
          , ME = Ja.call(Object);
        function FE(e) {
            if (!CE(e) || xE(e) != LE)
                return !1;
            var t = RE(e);
            if (t === null)
                return !0;
            var r = DE.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && Ja.call(r) == ME
        }
        es.exports = FE
    }
    );
    var ts = f(oi => {
        "use strict";
        Object.defineProperty(oi, "__esModule", {
            value: !0
        });
        oi.default = qE;
        function qE(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var rs = f( (si, ai) => {
        "use strict";
        Object.defineProperty(si, "__esModule", {
            value: !0
        });
        var kE = ts()
          , XE = GE(kE);
        function GE(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var xt;
        typeof self < "u" ? xt = self : typeof window < "u" ? xt = window : typeof global < "u" ? xt = global : typeof ai < "u" ? xt = ai : xt = Function("return this")();
        var VE = (0,
        XE.default)(xt);
        si.default = VE
    }
    );
    var ui = f(rr => {
        "use strict";
        rr.__esModule = !0;
        rr.ActionTypes = void 0;
        rr.default = as;
        var UE = ii()
          , WE = os(UE)
          , BE = rs()
          , ns = os(BE);
        function os(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var is = rr.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function as(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(as)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var i = e
              , o = t
              , a = []
              , s = a
              , u = !1;
            function l() {
                s === a && (s = a.slice())
            }
            function y() {
                return o
            }
            function h(A) {
                if (typeof A != "function")
                    throw new Error("Expected listener to be a function.");
                var R = !0;
                return l(),
                s.push(A),
                function() {
                    if (R) {
                        R = !1,
                        l();
                        var P = s.indexOf(A);
                        s.splice(P, 1)
                    }
                }
            }
            function p(A) {
                if (!(0,
                WE.default)(A))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof A.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0,
                    o = i(o, A)
                } finally {
                    u = !1
                }
                for (var R = a = s, w = 0; w < R.length; w++)
                    R[w]();
                return A
            }
            function v(A) {
                if (typeof A != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                i = A,
                p({
                    type: is.INIT
                })
            }
            function T() {
                var A, R = h;
                return A = {
                    subscribe: function(P) {
                        if (typeof P != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function C() {
                            P.next && P.next(y())
                        }
                        C();
                        var M = R(C);
                        return {
                            unsubscribe: M
                        }
                    }
                },
                A[ns.default] = function() {
                    return this
                }
                ,
                A
            }
            return p({
                type: is.INIT
            }),
            n = {
                dispatch: p,
                subscribe: h,
                getState: y,
                replaceReducer: v
            },
            n[ns.default] = T,
            n
        }
    }
    );
    var li = f(ci => {
        "use strict";
        ci.__esModule = !0;
        ci.default = HE;
        function HE(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var cs = f(fi => {
        "use strict";
        fi.__esModule = !0;
        fi.default = QE;
        var ss = ui()
          , zE = ii()
          , jF = us(zE)
          , KE = li()
          , YF = us(KE);
        function us(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function jE(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function YE(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: ss.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: i
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + ss.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function QE(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                typeof e[i] == "function" && (r[i] = e[i])
            }
            var o = Object.keys(r);
            if (!1)
                var a;
            var s;
            try {
                YE(r)
            } catch (u) {
                s = u
            }
            return function() {
                var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , y = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var h;
                for (var p = !1, v = {}, T = 0; T < o.length; T++) {
                    var A = o[T]
                      , R = r[A]
                      , w = l[A]
                      , P = R(w, y);
                    if (typeof P > "u") {
                        var C = jE(A, y);
                        throw new Error(C)
                    }
                    v[A] = P,
                    p = p || P !== w
                }
                return p ? v : l
            }
        }
    }
    );
    var fs = f(di => {
        "use strict";
        di.__esModule = !0;
        di.default = $E;
        function ls(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function $E(e, t) {
            if (typeof e == "function")
                return ls(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
                var o = r[i]
                  , a = e[o];
                typeof a == "function" && (n[o] = ls(a, t))
            }
            return n
        }
    }
    );
    var gi = f(pi => {
        "use strict";
        pi.__esModule = !0;
        pi.default = ZE;
        function ZE() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(o) {
                    return o
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , i = t.slice(0, -1);
            return function() {
                return i.reduceRight(function(o, a) {
                    return a(o)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var ds = f(hi => {
        "use strict";
        hi.__esModule = !0;
        var JE = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        hi.default = ny;
        var ey = gi()
          , ty = ry(ey);
        function ry(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function ny() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(i, o, a) {
                    var s = n(i, o, a)
                      , u = s.dispatch
                      , l = []
                      , y = {
                        getState: s.getState,
                        dispatch: function(p) {
                            return u(p)
                        }
                    };
                    return l = t.map(function(h) {
                        return h(y)
                    }),
                    u = ty.default.apply(void 0, l)(s.dispatch),
                    JE({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    }
    );
    var vi = f(ke => {
        "use strict";
        ke.__esModule = !0;
        ke.compose = ke.applyMiddleware = ke.bindActionCreators = ke.combineReducers = ke.createStore = void 0;
        var iy = ui()
          , oy = Rt(iy)
          , ay = cs()
          , sy = Rt(ay)
          , uy = fs()
          , cy = Rt(uy)
          , ly = ds()
          , fy = Rt(ly)
          , dy = gi()
          , py = Rt(dy)
          , gy = li()
          , e1 = Rt(gy);
        function Rt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ke.createStore = oy.default;
        ke.combineReducers = sy.default;
        ke.bindActionCreators = cy.default;
        ke.applyMiddleware = fy.default;
        ke.compose = py.default
    }
    );
    var He, Ei, Ze, hy, vy, qr, Ey, yi = ve( () => {
        "use strict";
        He = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        Ei = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        Ze = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        hy = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        vy = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        qr = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        Ey = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var Ne, yy, kr = ve( () => {
        "use strict";
        Ne = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_RIVE: "PLUGIN_RIVE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        yy = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var my, ps = ve( () => {
        "use strict";
        my = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var _y, Iy, Ty, by, Ay, wy, Sy, mi, gs = ve( () => {
        "use strict";
        kr();
        ({TRANSFORM_MOVE: _y, TRANSFORM_SCALE: Iy, TRANSFORM_ROTATE: Ty, TRANSFORM_SKEW: by, STYLE_SIZE: Ay, STYLE_FILTER: wy, STYLE_FONT_VARIATION: Sy} = Ne),
        mi = {
            [_y]: !0,
            [Iy]: !0,
            [Ty]: !0,
            [by]: !0,
            [Ay]: !0,
            [wy]: !0,
            [Sy]: !0
        }
    }
    );
    var Te = {};
    Pe(Te, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => Wy,
        IX2_ANIMATION_FRAME_CHANGED: () => qy,
        IX2_CLEAR_REQUESTED: () => Dy,
        IX2_ELEMENT_STATE_CHANGED: () => Uy,
        IX2_EVENT_LISTENER_ADDED: () => My,
        IX2_EVENT_STATE_CHANGED: () => Fy,
        IX2_INSTANCE_ADDED: () => Xy,
        IX2_INSTANCE_REMOVED: () => Vy,
        IX2_INSTANCE_STARTED: () => Gy,
        IX2_MEDIA_QUERIES_DEFINED: () => Hy,
        IX2_PARAMETER_CHANGED: () => ky,
        IX2_PLAYBACK_REQUESTED: () => Py,
        IX2_PREVIEW_REQUESTED: () => Ly,
        IX2_RAW_DATA_IMPORTED: () => Oy,
        IX2_SESSION_INITIALIZED: () => xy,
        IX2_SESSION_STARTED: () => Ry,
        IX2_SESSION_STOPPED: () => Cy,
        IX2_STOP_REQUESTED: () => Ny,
        IX2_TEST_FRAME_RENDERED: () => zy,
        IX2_VIEWPORT_WIDTH_CHANGED: () => By
    });
    var Oy, xy, Ry, Cy, Ly, Py, Ny, Dy, My, Fy, qy, ky, Xy, Gy, Vy, Uy, Wy, By, Hy, zy, hs = ve( () => {
        "use strict";
        Oy = "IX2_RAW_DATA_IMPORTED",
        xy = "IX2_SESSION_INITIALIZED",
        Ry = "IX2_SESSION_STARTED",
        Cy = "IX2_SESSION_STOPPED",
        Ly = "IX2_PREVIEW_REQUESTED",
        Py = "IX2_PLAYBACK_REQUESTED",
        Ny = "IX2_STOP_REQUESTED",
        Dy = "IX2_CLEAR_REQUESTED",
        My = "IX2_EVENT_LISTENER_ADDED",
        Fy = "IX2_EVENT_STATE_CHANGED",
        qy = "IX2_ANIMATION_FRAME_CHANGED",
        ky = "IX2_PARAMETER_CHANGED",
        Xy = "IX2_INSTANCE_ADDED",
        Gy = "IX2_INSTANCE_STARTED",
        Vy = "IX2_INSTANCE_REMOVED",
        Uy = "IX2_ELEMENT_STATE_CHANGED",
        Wy = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        By = "IX2_VIEWPORT_WIDTH_CHANGED",
        Hy = "IX2_MEDIA_QUERIES_DEFINED",
        zy = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var we = {};
    Pe(we, {
        ABSTRACT_NODE: () => Bm,
        AUTO: () => Nm,
        BACKGROUND: () => Om,
        BACKGROUND_COLOR: () => Sm,
        BAR_DELIMITER: () => Fm,
        BORDER_COLOR: () => xm,
        BOUNDARY_SELECTOR: () => $y,
        CHILDREN: () => qm,
        COLON_DELIMITER: () => Mm,
        COLOR: () => Rm,
        COMMA_DELIMITER: () => Dm,
        CONFIG_UNIT: () => om,
        CONFIG_VALUE: () => tm,
        CONFIG_X_UNIT: () => rm,
        CONFIG_X_VALUE: () => Zy,
        CONFIG_Y_UNIT: () => nm,
        CONFIG_Y_VALUE: () => Jy,
        CONFIG_Z_UNIT: () => im,
        CONFIG_Z_VALUE: () => em,
        DISPLAY: () => Cm,
        FILTER: () => Tm,
        FLEX: () => Lm,
        FONT_VARIATION_SETTINGS: () => bm,
        HEIGHT: () => wm,
        HTML_ELEMENT: () => Um,
        IMMEDIATE_CHILDREN: () => km,
        IX2_ID_DELIMITER: () => Ky,
        OPACITY: () => Im,
        PARENT: () => Gm,
        PLAIN_OBJECT: () => Wm,
        PRESERVE_3D: () => Vm,
        RENDER_GENERAL: () => zm,
        RENDER_PLUGIN: () => jm,
        RENDER_STYLE: () => Km,
        RENDER_TRANSFORM: () => Hm,
        ROTATE_X: () => hm,
        ROTATE_Y: () => vm,
        ROTATE_Z: () => Em,
        SCALE_3D: () => gm,
        SCALE_X: () => fm,
        SCALE_Y: () => dm,
        SCALE_Z: () => pm,
        SIBLINGS: () => Xm,
        SKEW: () => ym,
        SKEW_X: () => mm,
        SKEW_Y: () => _m,
        TRANSFORM: () => am,
        TRANSLATE_3D: () => lm,
        TRANSLATE_X: () => sm,
        TRANSLATE_Y: () => um,
        TRANSLATE_Z: () => cm,
        WF_PAGE: () => jy,
        WIDTH: () => Am,
        WILL_CHANGE: () => Pm,
        W_MOD_IX: () => Qy,
        W_MOD_JS: () => Yy
    });
    var Ky, jy, Yy, Qy, $y, Zy, Jy, em, tm, rm, nm, im, om, am, sm, um, cm, lm, fm, dm, pm, gm, hm, vm, Em, ym, mm, _m, Im, Tm, bm, Am, wm, Sm, Om, xm, Rm, Cm, Lm, Pm, Nm, Dm, Mm, Fm, qm, km, Xm, Gm, Vm, Um, Wm, Bm, Hm, zm, Km, jm, vs = ve( () => {
        "use strict";
        Ky = "|",
        jy = "data-wf-page",
        Yy = "w-mod-js",
        Qy = "w-mod-ix",
        $y = ".w-dyn-item",
        Zy = "xValue",
        Jy = "yValue",
        em = "zValue",
        tm = "value",
        rm = "xUnit",
        nm = "yUnit",
        im = "zUnit",
        om = "unit",
        am = "transform",
        sm = "translateX",
        um = "translateY",
        cm = "translateZ",
        lm = "translate3d",
        fm = "scaleX",
        dm = "scaleY",
        pm = "scaleZ",
        gm = "scale3d",
        hm = "rotateX",
        vm = "rotateY",
        Em = "rotateZ",
        ym = "skew",
        mm = "skewX",
        _m = "skewY",
        Im = "opacity",
        Tm = "filter",
        bm = "font-variation-settings",
        Am = "width",
        wm = "height",
        Sm = "backgroundColor",
        Om = "background",
        xm = "borderColor",
        Rm = "color",
        Cm = "display",
        Lm = "flex",
        Pm = "willChange",
        Nm = "AUTO",
        Dm = ",",
        Mm = ":",
        Fm = "|",
        qm = "CHILDREN",
        km = "IMMEDIATE_CHILDREN",
        Xm = "SIBLINGS",
        Gm = "PARENT",
        Vm = "preserve-3d",
        Um = "HTML_ELEMENT",
        Wm = "PLAIN_OBJECT",
        Bm = "ABSTRACT_NODE",
        Hm = "RENDER_TRANSFORM",
        zm = "RENDER_GENERAL",
        Km = "RENDER_STYLE",
        jm = "RENDER_PLUGIN"
    }
    );
    var Es = {};
    Pe(Es, {
        ActionAppliesTo: () => yy,
        ActionTypeConsts: () => Ne,
        EventAppliesTo: () => Ei,
        EventBasedOn: () => Ze,
        EventContinuousMouseAxes: () => hy,
        EventLimitAffectedElements: () => vy,
        EventTypeConsts: () => He,
        IX2EngineActionTypes: () => Te,
        IX2EngineConstants: () => we,
        InteractionTypeConsts: () => my,
        QuickEffectDirectionConsts: () => Ey,
        QuickEffectIds: () => qr,
        ReducedMotionTypes: () => mi
    });
    var De = ve( () => {
        "use strict";
        yi();
        kr();
        ps();
        gs();
        hs();
        vs();
        kr();
        yi()
    }
    );
    var Ym, ys, ms = ve( () => {
        "use strict";
        De();
        ({IX2_RAW_DATA_IMPORTED: Ym} = Te),
        ys = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case Ym:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var Ct = f(ye => {
        "use strict";
        Object.defineProperty(ye, "__esModule", {
            value: !0
        });
        var Qm = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        ye.clone = Gr;
        ye.addLast = Ts;
        ye.addFirst = bs;
        ye.removeLast = As;
        ye.removeFirst = ws;
        ye.insert = Ss;
        ye.removeAt = Os;
        ye.replaceAt = xs;
        ye.getIn = Vr;
        ye.set = Ur;
        ye.setIn = Wr;
        ye.update = Cs;
        ye.updateIn = Ls;
        ye.merge = Ps;
        ye.mergeDeep = Ns;
        ye.mergeIn = Ds;
        ye.omit = Ms;
        ye.addDefaults = Fs;
        var _s = "INVALID_ARGS";
        function Is(e) {
            throw new Error(e)
        }
        function _i(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var $m = {}.hasOwnProperty;
        function Gr(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = _i(e), r = {}, n = 0; n < t.length; n++) {
                var i = t[n];
                r[i] = e[i]
            }
            return r
        }
        function Me(e, t, r) {
            var n = r;
            n == null && Is(_s);
            for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++)
                a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var l = a[u];
                if (l != null) {
                    var y = _i(l);
                    if (y.length)
                        for (var h = 0; h <= y.length; h++) {
                            var p = y[h];
                            if (!(e && n[p] !== void 0)) {
                                var v = l[p];
                                t && Xr(n[p]) && Xr(v) && (v = Me(e, t, n[p], v)),
                                !(v === void 0 || v === n[p]) && (i || (i = !0,
                                n = Gr(n)),
                                n[p] = v)
                            }
                        }
                }
            }
            return n
        }
        function Xr(e) {
            var t = typeof e > "u" ? "undefined" : Qm(e);
            return e != null && (t === "object" || t === "function")
        }
        function Ts(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function bs(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function As(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function ws(e) {
            return e.length ? e.slice(1) : e
        }
        function Ss(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function Os(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function xs(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, i = Array(n), o = 0; o < n; o++)
                i[o] = e[o];
            return i[t] = r,
            i
        }
        function Vr(e, t) {
            if (!Array.isArray(t) && Is(_s),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (r = r?.[i],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function Ur(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , i = e ?? n;
            if (i[t] === r)
                return i;
            var o = Gr(i);
            return o[t] = r,
            o
        }
        function Rs(e, t, r, n) {
            var i = void 0
              , o = t[n];
            if (n === t.length - 1)
                i = r;
            else {
                var a = Xr(e) && Xr(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
                i = Rs(a, t, r, n + 1)
            }
            return Ur(e, o, i)
        }
        function Wr(e, t, r) {
            return t.length ? Rs(e, t, r, 0) : r
        }
        function Cs(e, t, r) {
            var n = e?.[t]
              , i = r(n);
            return Ur(e, t, i)
        }
        function Ls(e, t, r) {
            var n = Vr(e, t)
              , i = r(n);
            return Wr(e, t, i)
        }
        function Ps(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Me.call.apply(Me, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Me(!1, !1, e, t, r, n, i, o)
        }
        function Ns(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Me.call.apply(Me, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Me(!1, !0, e, t, r, n, i, o)
        }
        function Ds(e, t, r, n, i, o, a) {
            var s = Vr(e, t);
            s == null && (s = {});
            for (var u = void 0, l = arguments.length, y = Array(l > 7 ? l - 7 : 0), h = 7; h < l; h++)
                y[h - 7] = arguments[h];
            return y.length ? u = Me.call.apply(Me, [null, !1, !1, s, r, n, i, o, a].concat(y)) : u = Me(!1, !1, s, r, n, i, o, a),
            Wr(e, t, u)
        }
        function Ms(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
                if ($m.call(e, r[i])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var o = {}, a = _i(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (o[u] = e[u])
            }
            return o
        }
        function Fs(e, t, r, n, i, o) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Me.call.apply(Me, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Me(!0, !1, e, t, r, n, i, o)
        }
        var Zm = {
            clone: Gr,
            addLast: Ts,
            addFirst: bs,
            removeLast: As,
            removeFirst: ws,
            insert: Ss,
            removeAt: Os,
            replaceAt: xs,
            getIn: Vr,
            set: Ur,
            setIn: Wr,
            update: Cs,
            updateIn: Ls,
            merge: Ps,
            mergeDeep: Ns,
            mergeIn: Ds,
            omit: Ms,
            addDefaults: Fs
        };
        ye.default = Zm
    }
    );
    var ks, Jm, e_, t_, r_, n_, qs, Xs, Gs = ve( () => {
        "use strict";
        De();
        ks = le(Ct()),
        {IX2_PREVIEW_REQUESTED: Jm, IX2_PLAYBACK_REQUESTED: e_, IX2_STOP_REQUESTED: t_, IX2_CLEAR_REQUESTED: r_} = Te,
        n_ = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        qs = Object.create(null, {
            [Jm]: {
                value: "preview"
            },
            [e_]: {
                value: "playback"
            },
            [t_]: {
                value: "stop"
            },
            [r_]: {
                value: "clear"
            }
        }),
        Xs = (e=n_, t) => {
            if (t.type in qs) {
                let r = [qs[t.type]];
                return (0,
                ks.setIn)(e, [r], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var xe, i_, o_, a_, s_, u_, c_, l_, f_, d_, p_, Vs, g_, Us, Ws = ve( () => {
        "use strict";
        De();
        xe = le(Ct()),
        {IX2_SESSION_INITIALIZED: i_, IX2_SESSION_STARTED: o_, IX2_TEST_FRAME_RENDERED: a_, IX2_SESSION_STOPPED: s_, IX2_EVENT_LISTENER_ADDED: u_, IX2_EVENT_STATE_CHANGED: c_, IX2_ANIMATION_FRAME_CHANGED: l_, IX2_ACTION_LIST_PLAYBACK_CHANGED: f_, IX2_VIEWPORT_WIDTH_CHANGED: d_, IX2_MEDIA_QUERIES_DEFINED: p_} = Te,
        Vs = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        g_ = 20,
        Us = (e=Vs, t) => {
            switch (t.type) {
            case i_:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    xe.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case o_:
                return (0,
                xe.set)(e, "active", !0);
            case a_:
                {
                    let {payload: {step: r=g_}} = t;
                    return (0,
                    xe.set)(e, "tick", e.tick + r)
                }
            case s_:
                return Vs;
            case l_:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    xe.set)(e, "tick", r)
                }
            case u_:
                {
                    let r = (0,
                    xe.addLast)(e.eventListeners, t.payload);
                    return (0,
                    xe.set)(e, "eventListeners", r)
                }
            case c_:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    xe.setIn)(e, ["eventState", r], n)
                }
            case f_:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    xe.setIn)(e, ["playbackState", r], n)
                }
            case d_:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , i = n.length
                      , o = null;
                    for (let a = 0; a < i; a++) {
                        let {key: s, min: u, max: l} = n[a];
                        if (r >= u && r <= l) {
                            o = s;
                            break
                        }
                    }
                    return (0,
                    xe.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: o
                    })
                }
            case p_:
                return (0,
                xe.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var Hs = f( (_1, Bs) => {
        function h_() {
            this.__data__ = [],
            this.size = 0
        }
        Bs.exports = h_
    }
    );
    var Br = f( (I1, zs) => {
        function v_(e, t) {
            return e === t || e !== e && t !== t
        }
        zs.exports = v_
    }
    );
    var nr = f( (T1, Ks) => {
        var E_ = Br();
        function y_(e, t) {
            for (var r = e.length; r--; )
                if (E_(e[r][0], t))
                    return r;
            return -1
        }
        Ks.exports = y_
    }
    );
    var Ys = f( (b1, js) => {
        var m_ = nr()
          , __ = Array.prototype
          , I_ = __.splice;
        function T_(e) {
            var t = this.__data__
              , r = m_(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : I_.call(t, r, 1),
            --this.size,
            !0
        }
        js.exports = T_
    }
    );
    var $s = f( (A1, Qs) => {
        var b_ = nr();
        function A_(e) {
            var t = this.__data__
              , r = b_(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        Qs.exports = A_
    }
    );
    var Js = f( (w1, Zs) => {
        var w_ = nr();
        function S_(e) {
            return w_(this.__data__, e) > -1
        }
        Zs.exports = S_
    }
    );
    var tu = f( (S1, eu) => {
        var O_ = nr();
        function x_(e, t) {
            var r = this.__data__
              , n = O_(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        eu.exports = x_
    }
    );
    var ir = f( (O1, ru) => {
        var R_ = Hs()
          , C_ = Ys()
          , L_ = $s()
          , P_ = Js()
          , N_ = tu();
        function Lt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Lt.prototype.clear = R_;
        Lt.prototype.delete = C_;
        Lt.prototype.get = L_;
        Lt.prototype.has = P_;
        Lt.prototype.set = N_;
        ru.exports = Lt
    }
    );
    var iu = f( (x1, nu) => {
        var D_ = ir();
        function M_() {
            this.__data__ = new D_,
            this.size = 0
        }
        nu.exports = M_
    }
    );
    var au = f( (R1, ou) => {
        function F_(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        ou.exports = F_
    }
    );
    var uu = f( (C1, su) => {
        function q_(e) {
            return this.__data__.get(e)
        }
        su.exports = q_
    }
    );
    var lu = f( (L1, cu) => {
        function k_(e) {
            return this.__data__.has(e)
        }
        cu.exports = k_
    }
    );
    var Je = f( (P1, fu) => {
        function X_(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        fu.exports = X_
    }
    );
    var Ii = f( (N1, du) => {
        var G_ = lt()
          , V_ = Je()
          , U_ = "[object AsyncFunction]"
          , W_ = "[object Function]"
          , B_ = "[object GeneratorFunction]"
          , H_ = "[object Proxy]";
        function z_(e) {
            if (!V_(e))
                return !1;
            var t = G_(e);
            return t == W_ || t == B_ || t == U_ || t == H_
        }
        du.exports = z_
    }
    );
    var gu = f( (D1, pu) => {
        var K_ = Be()
          , j_ = K_["__core-js_shared__"];
        pu.exports = j_
    }
    );
    var Eu = f( (M1, vu) => {
        var Ti = gu()
          , hu = function() {
            var e = /[^.]+$/.exec(Ti && Ti.keys && Ti.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function Y_(e) {
            return !!hu && hu in e
        }
        vu.exports = Y_
    }
    );
    var bi = f( (F1, yu) => {
        var Q_ = Function.prototype
          , $_ = Q_.toString;
        function Z_(e) {
            if (e != null) {
                try {
                    return $_.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        yu.exports = Z_
    }
    );
    var _u = f( (q1, mu) => {
        var J_ = Ii()
          , eI = Eu()
          , tI = Je()
          , rI = bi()
          , nI = /[\\^$.*+?()[\]{}|]/g
          , iI = /^\[object .+?Constructor\]$/
          , oI = Function.prototype
          , aI = Object.prototype
          , sI = oI.toString
          , uI = aI.hasOwnProperty
          , cI = RegExp("^" + sI.call(uI).replace(nI, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function lI(e) {
            if (!tI(e) || eI(e))
                return !1;
            var t = J_(e) ? cI : iI;
            return t.test(rI(e))
        }
        mu.exports = lI
    }
    );
    var Tu = f( (k1, Iu) => {
        function fI(e, t) {
            return e?.[t]
        }
        Iu.exports = fI
    }
    );
    var ft = f( (X1, bu) => {
        var dI = _u()
          , pI = Tu();
        function gI(e, t) {
            var r = pI(e, t);
            return dI(r) ? r : void 0
        }
        bu.exports = gI
    }
    );
    var Hr = f( (G1, Au) => {
        var hI = ft()
          , vI = Be()
          , EI = hI(vI, "Map");
        Au.exports = EI
    }
    );
    var or = f( (V1, wu) => {
        var yI = ft()
          , mI = yI(Object, "create");
        wu.exports = mI
    }
    );
    var xu = f( (U1, Ou) => {
        var Su = or();
        function _I() {
            this.__data__ = Su ? Su(null) : {},
            this.size = 0
        }
        Ou.exports = _I
    }
    );
    var Cu = f( (W1, Ru) => {
        function II(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        Ru.exports = II
    }
    );
    var Pu = f( (B1, Lu) => {
        var TI = or()
          , bI = "__lodash_hash_undefined__"
          , AI = Object.prototype
          , wI = AI.hasOwnProperty;
        function SI(e) {
            var t = this.__data__;
            if (TI) {
                var r = t[e];
                return r === bI ? void 0 : r
            }
            return wI.call(t, e) ? t[e] : void 0
        }
        Lu.exports = SI
    }
    );
    var Du = f( (H1, Nu) => {
        var OI = or()
          , xI = Object.prototype
          , RI = xI.hasOwnProperty;
        function CI(e) {
            var t = this.__data__;
            return OI ? t[e] !== void 0 : RI.call(t, e)
        }
        Nu.exports = CI
    }
    );
    var Fu = f( (z1, Mu) => {
        var LI = or()
          , PI = "__lodash_hash_undefined__";
        function NI(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = LI && t === void 0 ? PI : t,
            this
        }
        Mu.exports = NI
    }
    );
    var ku = f( (K1, qu) => {
        var DI = xu()
          , MI = Cu()
          , FI = Pu()
          , qI = Du()
          , kI = Fu();
        function Pt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Pt.prototype.clear = DI;
        Pt.prototype.delete = MI;
        Pt.prototype.get = FI;
        Pt.prototype.has = qI;
        Pt.prototype.set = kI;
        qu.exports = Pt
    }
    );
    var Vu = f( (j1, Gu) => {
        var Xu = ku()
          , XI = ir()
          , GI = Hr();
        function VI() {
            this.size = 0,
            this.__data__ = {
                hash: new Xu,
                map: new (GI || XI),
                string: new Xu
            }
        }
        Gu.exports = VI
    }
    );
    var Wu = f( (Y1, Uu) => {
        function UI(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Uu.exports = UI
    }
    );
    var ar = f( (Q1, Bu) => {
        var WI = Wu();
        function BI(e, t) {
            var r = e.__data__;
            return WI(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Bu.exports = BI
    }
    );
    var zu = f( ($1, Hu) => {
        var HI = ar();
        function zI(e) {
            var t = HI(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        Hu.exports = zI
    }
    );
    var ju = f( (Z1, Ku) => {
        var KI = ar();
        function jI(e) {
            return KI(this, e).get(e)
        }
        Ku.exports = jI
    }
    );
    var Qu = f( (J1, Yu) => {
        var YI = ar();
        function QI(e) {
            return YI(this, e).has(e)
        }
        Yu.exports = QI
    }
    );
    var Zu = f( (e2, $u) => {
        var $I = ar();
        function ZI(e, t) {
            var r = $I(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        $u.exports = ZI
    }
    );
    var zr = f( (t2, Ju) => {
        var JI = Vu()
          , eT = zu()
          , tT = ju()
          , rT = Qu()
          , nT = Zu();
        function Nt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Nt.prototype.clear = JI;
        Nt.prototype.delete = eT;
        Nt.prototype.get = tT;
        Nt.prototype.has = rT;
        Nt.prototype.set = nT;
        Ju.exports = Nt
    }
    );
    var tc = f( (r2, ec) => {
        var iT = ir()
          , oT = Hr()
          , aT = zr()
          , sT = 200;
        function uT(e, t) {
            var r = this.__data__;
            if (r instanceof iT) {
                var n = r.__data__;
                if (!oT || n.length < sT - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new aT(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        ec.exports = uT
    }
    );
    var Ai = f( (n2, rc) => {
        var cT = ir()
          , lT = iu()
          , fT = au()
          , dT = uu()
          , pT = lu()
          , gT = tc();
        function Dt(e) {
            var t = this.__data__ = new cT(e);
            this.size = t.size
        }
        Dt.prototype.clear = lT;
        Dt.prototype.delete = fT;
        Dt.prototype.get = dT;
        Dt.prototype.has = pT;
        Dt.prototype.set = gT;
        rc.exports = Dt
    }
    );
    var ic = f( (i2, nc) => {
        var hT = "__lodash_hash_undefined__";
        function vT(e) {
            return this.__data__.set(e, hT),
            this
        }
        nc.exports = vT
    }
    );
    var ac = f( (o2, oc) => {
        function ET(e) {
            return this.__data__.has(e)
        }
        oc.exports = ET
    }
    );
    var uc = f( (a2, sc) => {
        var yT = zr()
          , mT = ic()
          , _T = ac();
        function Kr(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new yT; ++t < r; )
                this.add(e[t])
        }
        Kr.prototype.add = Kr.prototype.push = mT;
        Kr.prototype.has = _T;
        sc.exports = Kr
    }
    );
    var lc = f( (s2, cc) => {
        function IT(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        cc.exports = IT
    }
    );
    var dc = f( (u2, fc) => {
        function TT(e, t) {
            return e.has(t)
        }
        fc.exports = TT
    }
    );
    var wi = f( (c2, pc) => {
        var bT = uc()
          , AT = lc()
          , wT = dc()
          , ST = 1
          , OT = 2;
        function xT(e, t, r, n, i, o) {
            var a = r & ST
              , s = e.length
              , u = t.length;
            if (s != u && !(a && u > s))
                return !1;
            var l = o.get(e)
              , y = o.get(t);
            if (l && y)
                return l == t && y == e;
            var h = -1
              , p = !0
              , v = r & OT ? new bT : void 0;
            for (o.set(e, t),
            o.set(t, e); ++h < s; ) {
                var T = e[h]
                  , A = t[h];
                if (n)
                    var R = a ? n(A, T, h, t, e, o) : n(T, A, h, e, t, o);
                if (R !== void 0) {
                    if (R)
                        continue;
                    p = !1;
                    break
                }
                if (v) {
                    if (!AT(t, function(w, P) {
                        if (!wT(v, P) && (T === w || i(T, w, r, n, o)))
                            return v.push(P)
                    })) {
                        p = !1;
                        break
                    }
                } else if (!(T === A || i(T, A, r, n, o))) {
                    p = !1;
                    break
                }
            }
            return o.delete(e),
            o.delete(t),
            p
        }
        pc.exports = xT
    }
    );
    var hc = f( (l2, gc) => {
        var RT = Be()
          , CT = RT.Uint8Array;
        gc.exports = CT
    }
    );
    var Ec = f( (f2, vc) => {
        function LT(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, i) {
                r[++t] = [i, n]
            }),
            r
        }
        vc.exports = LT
    }
    );
    var mc = f( (d2, yc) => {
        function PT(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        yc.exports = PT
    }
    );
    var Ac = f( (p2, bc) => {
        var _c = Ot()
          , Ic = hc()
          , NT = Br()
          , DT = wi()
          , MT = Ec()
          , FT = mc()
          , qT = 1
          , kT = 2
          , XT = "[object Boolean]"
          , GT = "[object Date]"
          , VT = "[object Error]"
          , UT = "[object Map]"
          , WT = "[object Number]"
          , BT = "[object RegExp]"
          , HT = "[object Set]"
          , zT = "[object String]"
          , KT = "[object Symbol]"
          , jT = "[object ArrayBuffer]"
          , YT = "[object DataView]"
          , Tc = _c ? _c.prototype : void 0
          , Si = Tc ? Tc.valueOf : void 0;
        function QT(e, t, r, n, i, o, a) {
            switch (r) {
            case YT:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case jT:
                return !(e.byteLength != t.byteLength || !o(new Ic(e), new Ic(t)));
            case XT:
            case GT:
            case WT:
                return NT(+e, +t);
            case VT:
                return e.name == t.name && e.message == t.message;
            case BT:
            case zT:
                return e == t + "";
            case UT:
                var s = MT;
            case HT:
                var u = n & qT;
                if (s || (s = FT),
                e.size != t.size && !u)
                    return !1;
                var l = a.get(e);
                if (l)
                    return l == t;
                n |= kT,
                a.set(e, t);
                var y = DT(s(e), s(t), n, i, o, a);
                return a.delete(e),
                y;
            case KT:
                if (Si)
                    return Si.call(e) == Si.call(t)
            }
            return !1
        }
        bc.exports = QT
    }
    );
    var jr = f( (g2, wc) => {
        function $T(e, t) {
            for (var r = -1, n = t.length, i = e.length; ++r < n; )
                e[i + r] = t[r];
            return e
        }
        wc.exports = $T
    }
    );
    var be = f( (h2, Sc) => {
        var ZT = Array.isArray;
        Sc.exports = ZT
    }
    );
    var Oi = f( (v2, Oc) => {
        var JT = jr()
          , eb = be();
        function tb(e, t, r) {
            var n = t(e);
            return eb(e) ? n : JT(n, r(e))
        }
        Oc.exports = tb
    }
    );
    var Rc = f( (E2, xc) => {
        function rb(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (o[i++] = a)
            }
            return o
        }
        xc.exports = rb
    }
    );
    var xi = f( (y2, Cc) => {
        function nb() {
            return []
        }
        Cc.exports = nb
    }
    );
    var Ri = f( (m2, Pc) => {
        var ib = Rc()
          , ob = xi()
          , ab = Object.prototype
          , sb = ab.propertyIsEnumerable
          , Lc = Object.getOwnPropertySymbols
          , ub = Lc ? function(e) {
            return e == null ? [] : (e = Object(e),
            ib(Lc(e), function(t) {
                return sb.call(e, t)
            }))
        }
        : ob;
        Pc.exports = ub
    }
    );
    var Dc = f( (_2, Nc) => {
        function cb(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        Nc.exports = cb
    }
    );
    var Fc = f( (I2, Mc) => {
        var lb = lt()
          , fb = it()
          , db = "[object Arguments]";
        function pb(e) {
            return fb(e) && lb(e) == db
        }
        Mc.exports = pb
    }
    );
    var sr = f( (T2, Xc) => {
        var qc = Fc()
          , gb = it()
          , kc = Object.prototype
          , hb = kc.hasOwnProperty
          , vb = kc.propertyIsEnumerable
          , Eb = qc(function() {
            return arguments
        }()) ? qc : function(e) {
            return gb(e) && hb.call(e, "callee") && !vb.call(e, "callee")
        }
        ;
        Xc.exports = Eb
    }
    );
    var Vc = f( (b2, Gc) => {
        function yb() {
            return !1
        }
        Gc.exports = yb
    }
    );
    var Yr = f( (ur, Mt) => {
        var mb = Be()
          , _b = Vc()
          , Bc = typeof ur == "object" && ur && !ur.nodeType && ur
          , Uc = Bc && typeof Mt == "object" && Mt && !Mt.nodeType && Mt
          , Ib = Uc && Uc.exports === Bc
          , Wc = Ib ? mb.Buffer : void 0
          , Tb = Wc ? Wc.isBuffer : void 0
          , bb = Tb || _b;
        Mt.exports = bb
    }
    );
    var Qr = f( (A2, Hc) => {
        var Ab = 9007199254740991
          , wb = /^(?:0|[1-9]\d*)$/;
        function Sb(e, t) {
            var r = typeof e;
            return t = t ?? Ab,
            !!t && (r == "number" || r != "symbol" && wb.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        Hc.exports = Sb
    }
    );
    var $r = f( (w2, zc) => {
        var Ob = 9007199254740991;
        function xb(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ob
        }
        zc.exports = xb
    }
    );
    var jc = f( (S2, Kc) => {
        var Rb = lt()
          , Cb = $r()
          , Lb = it()
          , Pb = "[object Arguments]"
          , Nb = "[object Array]"
          , Db = "[object Boolean]"
          , Mb = "[object Date]"
          , Fb = "[object Error]"
          , qb = "[object Function]"
          , kb = "[object Map]"
          , Xb = "[object Number]"
          , Gb = "[object Object]"
          , Vb = "[object RegExp]"
          , Ub = "[object Set]"
          , Wb = "[object String]"
          , Bb = "[object WeakMap]"
          , Hb = "[object ArrayBuffer]"
          , zb = "[object DataView]"
          , Kb = "[object Float32Array]"
          , jb = "[object Float64Array]"
          , Yb = "[object Int8Array]"
          , Qb = "[object Int16Array]"
          , $b = "[object Int32Array]"
          , Zb = "[object Uint8Array]"
          , Jb = "[object Uint8ClampedArray]"
          , eA = "[object Uint16Array]"
          , tA = "[object Uint32Array]"
          , he = {};
        he[Kb] = he[jb] = he[Yb] = he[Qb] = he[$b] = he[Zb] = he[Jb] = he[eA] = he[tA] = !0;
        he[Pb] = he[Nb] = he[Hb] = he[Db] = he[zb] = he[Mb] = he[Fb] = he[qb] = he[kb] = he[Xb] = he[Gb] = he[Vb] = he[Ub] = he[Wb] = he[Bb] = !1;
        function rA(e) {
            return Lb(e) && Cb(e.length) && !!he[Rb(e)]
        }
        Kc.exports = rA
    }
    );
    var Qc = f( (O2, Yc) => {
        function nA(e) {
            return function(t) {
                return e(t)
            }
        }
        Yc.exports = nA
    }
    );
    var Zc = f( (cr, Ft) => {
        var iA = ti()
          , $c = typeof cr == "object" && cr && !cr.nodeType && cr
          , lr = $c && typeof Ft == "object" && Ft && !Ft.nodeType && Ft
          , oA = lr && lr.exports === $c
          , Ci = oA && iA.process
          , aA = function() {
            try {
                var e = lr && lr.require && lr.require("util").types;
                return e || Ci && Ci.binding && Ci.binding("util")
            } catch {}
        }();
        Ft.exports = aA
    }
    );
    var Zr = f( (x2, tl) => {
        var sA = jc()
          , uA = Qc()
          , Jc = Zc()
          , el = Jc && Jc.isTypedArray
          , cA = el ? uA(el) : sA;
        tl.exports = cA
    }
    );
    var Li = f( (R2, rl) => {
        var lA = Dc()
          , fA = sr()
          , dA = be()
          , pA = Yr()
          , gA = Qr()
          , hA = Zr()
          , vA = Object.prototype
          , EA = vA.hasOwnProperty;
        function yA(e, t) {
            var r = dA(e)
              , n = !r && fA(e)
              , i = !r && !n && pA(e)
              , o = !r && !n && !i && hA(e)
              , a = r || n || i || o
              , s = a ? lA(e.length, String) : []
              , u = s.length;
            for (var l in e)
                (t || EA.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || gA(l, u))) && s.push(l);
            return s
        }
        rl.exports = yA
    }
    );
    var Jr = f( (C2, nl) => {
        var mA = Object.prototype;
        function _A(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || mA;
            return e === r
        }
        nl.exports = _A
    }
    );
    var ol = f( (L2, il) => {
        var IA = ri()
          , TA = IA(Object.keys, Object);
        il.exports = TA
    }
    );
    var en = f( (P2, al) => {
        var bA = Jr()
          , AA = ol()
          , wA = Object.prototype
          , SA = wA.hasOwnProperty;
        function OA(e) {
            if (!bA(e))
                return AA(e);
            var t = [];
            for (var r in Object(e))
                SA.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        al.exports = OA
    }
    );
    var yt = f( (N2, sl) => {
        var xA = Ii()
          , RA = $r();
        function CA(e) {
            return e != null && RA(e.length) && !xA(e)
        }
        sl.exports = CA
    }
    );
    var fr = f( (D2, ul) => {
        var LA = Li()
          , PA = en()
          , NA = yt();
        function DA(e) {
            return NA(e) ? LA(e) : PA(e)
        }
        ul.exports = DA
    }
    );
    var ll = f( (M2, cl) => {
        var MA = Oi()
          , FA = Ri()
          , qA = fr();
        function kA(e) {
            return MA(e, qA, FA)
        }
        cl.exports = kA
    }
    );
    var pl = f( (F2, dl) => {
        var fl = ll()
          , XA = 1
          , GA = Object.prototype
          , VA = GA.hasOwnProperty;
        function UA(e, t, r, n, i, o) {
            var a = r & XA
              , s = fl(e)
              , u = s.length
              , l = fl(t)
              , y = l.length;
            if (u != y && !a)
                return !1;
            for (var h = u; h--; ) {
                var p = s[h];
                if (!(a ? p in t : VA.call(t, p)))
                    return !1
            }
            var v = o.get(e)
              , T = o.get(t);
            if (v && T)
                return v == t && T == e;
            var A = !0;
            o.set(e, t),
            o.set(t, e);
            for (var R = a; ++h < u; ) {
                p = s[h];
                var w = e[p]
                  , P = t[p];
                if (n)
                    var C = a ? n(P, w, p, t, e, o) : n(w, P, p, e, t, o);
                if (!(C === void 0 ? w === P || i(w, P, r, n, o) : C)) {
                    A = !1;
                    break
                }
                R || (R = p == "constructor")
            }
            if (A && !R) {
                var M = e.constructor
                  , D = t.constructor;
                M != D && "constructor"in e && "constructor"in t && !(typeof M == "function" && M instanceof M && typeof D == "function" && D instanceof D) && (A = !1)
            }
            return o.delete(e),
            o.delete(t),
            A
        }
        dl.exports = UA
    }
    );
    var hl = f( (q2, gl) => {
        var WA = ft()
          , BA = Be()
          , HA = WA(BA, "DataView");
        gl.exports = HA
    }
    );
    var El = f( (k2, vl) => {
        var zA = ft()
          , KA = Be()
          , jA = zA(KA, "Promise");
        vl.exports = jA
    }
    );
    var ml = f( (X2, yl) => {
        var YA = ft()
          , QA = Be()
          , $A = YA(QA, "Set");
        yl.exports = $A
    }
    );
    var Pi = f( (G2, _l) => {
        var ZA = ft()
          , JA = Be()
          , e0 = ZA(JA, "WeakMap");
        _l.exports = e0
    }
    );
    var tn = f( (V2, Ol) => {
        var Ni = hl()
          , Di = Hr()
          , Mi = El()
          , Fi = ml()
          , qi = Pi()
          , Sl = lt()
          , qt = bi()
          , Il = "[object Map]"
          , t0 = "[object Object]"
          , Tl = "[object Promise]"
          , bl = "[object Set]"
          , Al = "[object WeakMap]"
          , wl = "[object DataView]"
          , r0 = qt(Ni)
          , n0 = qt(Di)
          , i0 = qt(Mi)
          , o0 = qt(Fi)
          , a0 = qt(qi)
          , mt = Sl;
        (Ni && mt(new Ni(new ArrayBuffer(1))) != wl || Di && mt(new Di) != Il || Mi && mt(Mi.resolve()) != Tl || Fi && mt(new Fi) != bl || qi && mt(new qi) != Al) && (mt = function(e) {
            var t = Sl(e)
              , r = t == t0 ? e.constructor : void 0
              , n = r ? qt(r) : "";
            if (n)
                switch (n) {
                case r0:
                    return wl;
                case n0:
                    return Il;
                case i0:
                    return Tl;
                case o0:
                    return bl;
                case a0:
                    return Al
                }
            return t
        }
        );
        Ol.exports = mt
    }
    );
    var Ml = f( (U2, Dl) => {
        var ki = Ai()
          , s0 = wi()
          , u0 = Ac()
          , c0 = pl()
          , xl = tn()
          , Rl = be()
          , Cl = Yr()
          , l0 = Zr()
          , f0 = 1
          , Ll = "[object Arguments]"
          , Pl = "[object Array]"
          , rn = "[object Object]"
          , d0 = Object.prototype
          , Nl = d0.hasOwnProperty;
        function p0(e, t, r, n, i, o) {
            var a = Rl(e)
              , s = Rl(t)
              , u = a ? Pl : xl(e)
              , l = s ? Pl : xl(t);
            u = u == Ll ? rn : u,
            l = l == Ll ? rn : l;
            var y = u == rn
              , h = l == rn
              , p = u == l;
            if (p && Cl(e)) {
                if (!Cl(t))
                    return !1;
                a = !0,
                y = !1
            }
            if (p && !y)
                return o || (o = new ki),
                a || l0(e) ? s0(e, t, r, n, i, o) : u0(e, t, u, r, n, i, o);
            if (!(r & f0)) {
                var v = y && Nl.call(e, "__wrapped__")
                  , T = h && Nl.call(t, "__wrapped__");
                if (v || T) {
                    var A = v ? e.value() : e
                      , R = T ? t.value() : t;
                    return o || (o = new ki),
                    i(A, R, r, n, o)
                }
            }
            return p ? (o || (o = new ki),
            c0(e, t, r, n, i, o)) : !1
        }
        Dl.exports = p0
    }
    );
    var Xi = f( (W2, kl) => {
        var g0 = Ml()
          , Fl = it();
        function ql(e, t, r, n, i) {
            return e === t ? !0 : e == null || t == null || !Fl(e) && !Fl(t) ? e !== e && t !== t : g0(e, t, r, n, ql, i)
        }
        kl.exports = ql
    }
    );
    var Gl = f( (B2, Xl) => {
        var h0 = Ai()
          , v0 = Xi()
          , E0 = 1
          , y0 = 2;
        function m0(e, t, r, n) {
            var i = r.length
              , o = i
              , a = !n;
            if (e == null)
                return !o;
            for (e = Object(e); i--; ) {
                var s = r[i];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++i < o; ) {
                s = r[i];
                var u = s[0]
                  , l = e[u]
                  , y = s[1];
                if (a && s[2]) {
                    if (l === void 0 && !(u in e))
                        return !1
                } else {
                    var h = new h0;
                    if (n)
                        var p = n(l, y, u, e, t, h);
                    if (!(p === void 0 ? v0(y, l, E0 | y0, n, h) : p))
                        return !1
                }
            }
            return !0
        }
        Xl.exports = m0
    }
    );
    var Gi = f( (H2, Vl) => {
        var _0 = Je();
        function I0(e) {
            return e === e && !_0(e)
        }
        Vl.exports = I0
    }
    );
    var Wl = f( (z2, Ul) => {
        var T0 = Gi()
          , b0 = fr();
        function A0(e) {
            for (var t = b0(e), r = t.length; r--; ) {
                var n = t[r]
                  , i = e[n];
                t[r] = [n, i, T0(i)]
            }
            return t
        }
        Ul.exports = A0
    }
    );
    var Vi = f( (K2, Bl) => {
        function w0(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Bl.exports = w0
    }
    );
    var zl = f( (j2, Hl) => {
        var S0 = Gl()
          , O0 = Wl()
          , x0 = Vi();
        function R0(e) {
            var t = O0(e);
            return t.length == 1 && t[0][2] ? x0(t[0][0], t[0][1]) : function(r) {
                return r === e || S0(r, e, t)
            }
        }
        Hl.exports = R0
    }
    );
    var dr = f( (Y2, Kl) => {
        var C0 = lt()
          , L0 = it()
          , P0 = "[object Symbol]";
        function N0(e) {
            return typeof e == "symbol" || L0(e) && C0(e) == P0
        }
        Kl.exports = N0
    }
    );
    var nn = f( (Q2, jl) => {
        var D0 = be()
          , M0 = dr()
          , F0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , q0 = /^\w*$/;
        function k0(e, t) {
            if (D0(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || M0(e) ? !0 : q0.test(e) || !F0.test(e) || t != null && e in Object(t)
        }
        jl.exports = k0
    }
    );
    var $l = f( ($2, Ql) => {
        var Yl = zr()
          , X0 = "Expected a function";
        function Ui(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(X0);
            var r = function() {
                var n = arguments
                  , i = t ? t.apply(this, n) : n[0]
                  , o = r.cache;
                if (o.has(i))
                    return o.get(i);
                var a = e.apply(this, n);
                return r.cache = o.set(i, a) || o,
                a
            };
            return r.cache = new (Ui.Cache || Yl),
            r
        }
        Ui.Cache = Yl;
        Ql.exports = Ui
    }
    );
    var Jl = f( (Z2, Zl) => {
        var G0 = $l()
          , V0 = 500;
        function U0(e) {
            var t = G0(e, function(n) {
                return r.size === V0 && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        Zl.exports = U0
    }
    );
    var tf = f( (J2, ef) => {
        var W0 = Jl()
          , B0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , H0 = /\\(\\)?/g
          , z0 = W0(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(B0, function(r, n, i, o) {
                t.push(i ? o.replace(H0, "$1") : n || r)
            }),
            t
        });
        ef.exports = z0
    }
    );
    var Wi = f( (eq, rf) => {
        function K0(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
                i[r] = t(e[r], r, e);
            return i
        }
        rf.exports = K0
    }
    );
    var cf = f( (tq, uf) => {
        var nf = Ot()
          , j0 = Wi()
          , Y0 = be()
          , Q0 = dr()
          , $0 = 1 / 0
          , of = nf ? nf.prototype : void 0
          , af = of ? of.toString : void 0;
        function sf(e) {
            if (typeof e == "string")
                return e;
            if (Y0(e))
                return j0(e, sf) + "";
            if (Q0(e))
                return af ? af.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -$0 ? "-0" : t
        }
        uf.exports = sf
    }
    );
    var ff = f( (rq, lf) => {
        var Z0 = cf();
        function J0(e) {
            return e == null ? "" : Z0(e)
        }
        lf.exports = J0
    }
    );
    var pr = f( (nq, df) => {
        var ew = be()
          , tw = nn()
          , rw = tf()
          , nw = ff();
        function iw(e, t) {
            return ew(e) ? e : tw(e, t) ? [e] : rw(nw(e))
        }
        df.exports = iw
    }
    );
    var kt = f( (iq, pf) => {
        var ow = dr()
          , aw = 1 / 0;
        function sw(e) {
            if (typeof e == "string" || ow(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -aw ? "-0" : t
        }
        pf.exports = sw
    }
    );
    var on = f( (oq, gf) => {
        var uw = pr()
          , cw = kt();
        function lw(e, t) {
            t = uw(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[cw(t[r++])];
            return r && r == n ? e : void 0
        }
        gf.exports = lw
    }
    );
    var an = f( (aq, hf) => {
        var fw = on();
        function dw(e, t, r) {
            var n = e == null ? void 0 : fw(e, t);
            return n === void 0 ? r : n
        }
        hf.exports = dw
    }
    );
    var Ef = f( (sq, vf) => {
        function pw(e, t) {
            return e != null && t in Object(e)
        }
        vf.exports = pw
    }
    );
    var mf = f( (uq, yf) => {
        var gw = pr()
          , hw = sr()
          , vw = be()
          , Ew = Qr()
          , yw = $r()
          , mw = kt();
        function _w(e, t, r) {
            t = gw(t, e);
            for (var n = -1, i = t.length, o = !1; ++n < i; ) {
                var a = mw(t[n]);
                if (!(o = e != null && r(e, a)))
                    break;
                e = e[a]
            }
            return o || ++n != i ? o : (i = e == null ? 0 : e.length,
            !!i && yw(i) && Ew(a, i) && (vw(e) || hw(e)))
        }
        yf.exports = _w
    }
    );
    var If = f( (cq, _f) => {
        var Iw = Ef()
          , Tw = mf();
        function bw(e, t) {
            return e != null && Tw(e, t, Iw)
        }
        _f.exports = bw
    }
    );
    var bf = f( (lq, Tf) => {
        var Aw = Xi()
          , ww = an()
          , Sw = If()
          , Ow = nn()
          , xw = Gi()
          , Rw = Vi()
          , Cw = kt()
          , Lw = 1
          , Pw = 2;
        function Nw(e, t) {
            return Ow(e) && xw(t) ? Rw(Cw(e), t) : function(r) {
                var n = ww(r, e);
                return n === void 0 && n === t ? Sw(r, e) : Aw(t, n, Lw | Pw)
            }
        }
        Tf.exports = Nw
    }
    );
    var sn = f( (fq, Af) => {
        function Dw(e) {
            return e
        }
        Af.exports = Dw
    }
    );
    var Bi = f( (dq, wf) => {
        function Mw(e) {
            return function(t) {
                return t?.[e]
            }
        }
        wf.exports = Mw
    }
    );
    var Of = f( (pq, Sf) => {
        var Fw = on();
        function qw(e) {
            return function(t) {
                return Fw(t, e)
            }
        }
        Sf.exports = qw
    }
    );
    var Rf = f( (gq, xf) => {
        var kw = Bi()
          , Xw = Of()
          , Gw = nn()
          , Vw = kt();
        function Uw(e) {
            return Gw(e) ? kw(Vw(e)) : Xw(e)
        }
        xf.exports = Uw
    }
    );
    var dt = f( (hq, Cf) => {
        var Ww = zl()
          , Bw = bf()
          , Hw = sn()
          , zw = be()
          , Kw = Rf();
        function jw(e) {
            return typeof e == "function" ? e : e == null ? Hw : typeof e == "object" ? zw(e) ? Bw(e[0], e[1]) : Ww(e) : Kw(e)
        }
        Cf.exports = jw
    }
    );
    var Hi = f( (vq, Lf) => {
        var Yw = dt()
          , Qw = yt()
          , $w = fr();
        function Zw(e) {
            return function(t, r, n) {
                var i = Object(t);
                if (!Qw(t)) {
                    var o = Yw(r, 3);
                    t = $w(t),
                    r = function(s) {
                        return o(i[s], s, i)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? i[o ? t[a] : a] : void 0
            }
        }
        Lf.exports = Zw
    }
    );
    var zi = f( (Eq, Pf) => {
        function Jw(e, t, r, n) {
            for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
                if (t(e[o], o, e))
                    return o;
            return -1
        }
        Pf.exports = Jw
    }
    );
    var Df = f( (yq, Nf) => {
        var eS = /\s/;
        function tS(e) {
            for (var t = e.length; t-- && eS.test(e.charAt(t)); )
                ;
            return t
        }
        Nf.exports = tS
    }
    );
    var Ff = f( (mq, Mf) => {
        var rS = Df()
          , nS = /^\s+/;
        function iS(e) {
            return e && e.slice(0, rS(e) + 1).replace(nS, "")
        }
        Mf.exports = iS
    }
    );
    var un = f( (_q, Xf) => {
        var oS = Ff()
          , qf = Je()
          , aS = dr()
          , kf = 0 / 0
          , sS = /^[-+]0x[0-9a-f]+$/i
          , uS = /^0b[01]+$/i
          , cS = /^0o[0-7]+$/i
          , lS = parseInt;
        function fS(e) {
            if (typeof e == "number")
                return e;
            if (aS(e))
                return kf;
            if (qf(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = qf(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = oS(e);
            var r = uS.test(e);
            return r || cS.test(e) ? lS(e.slice(2), r ? 2 : 8) : sS.test(e) ? kf : +e
        }
        Xf.exports = fS
    }
    );
    var Uf = f( (Iq, Vf) => {
        var dS = un()
          , Gf = 1 / 0
          , pS = 17976931348623157e292;
        function gS(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = dS(e),
            e === Gf || e === -Gf) {
                var t = e < 0 ? -1 : 1;
                return t * pS
            }
            return e === e ? e : 0
        }
        Vf.exports = gS
    }
    );
    var Ki = f( (Tq, Wf) => {
        var hS = Uf();
        function vS(e) {
            var t = hS(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Wf.exports = vS
    }
    );
    var Hf = f( (bq, Bf) => {
        var ES = zi()
          , yS = dt()
          , mS = Ki()
          , _S = Math.max;
        function IS(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = r == null ? 0 : mS(r);
            return i < 0 && (i = _S(n + i, 0)),
            ES(e, yS(t, 3), i)
        }
        Bf.exports = IS
    }
    );
    var ji = f( (Aq, zf) => {
        var TS = Hi()
          , bS = Hf()
          , AS = TS(bS);
        zf.exports = AS
    }
    );
    var Yf = {};
    Pe(Yf, {
        ELEMENT_MATCHES: () => wS,
        FLEX_PREFIXED: () => Yi,
        IS_BROWSER_ENV: () => ze,
        TRANSFORM_PREFIXED: () => pt,
        TRANSFORM_STYLE_PREFIXED: () => ln,
        withBrowser: () => cn
    });
    var jf, ze, cn, wS, Yi, pt, Kf, ln, fn = ve( () => {
        "use strict";
        jf = le(ji()),
        ze = typeof window < "u",
        cn = (e, t) => ze ? e() : t,
        wS = cn( () => (0,
        jf.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
        Yi = cn( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i];
                    if (e.style.display = o,
                    e.style.display === o)
                        return o
                }
                return r
            } catch {
                return r
            }
        }
        , "flex"),
        pt = cn( () => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let i = 0; i < n; i++) {
                    let o = t[i] + r;
                    if (e.style[o] !== void 0)
                        return o
                }
            }
            return "transform"
        }
        , "transform"),
        Kf = pt.split("transform")[0],
        ln = Kf ? Kf + "TransformStyle" : "transformStyle"
    }
    );
    var Qi = f( (wq, ed) => {
        var SS = 4
          , OS = .001
          , xS = 1e-7
          , RS = 10
          , gr = 11
          , dn = 1 / (gr - 1)
          , CS = typeof Float32Array == "function";
        function Qf(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function $f(e, t) {
            return 3 * t - 6 * e
        }
        function Zf(e) {
            return 3 * e
        }
        function pn(e, t, r) {
            return ((Qf(t, r) * e + $f(t, r)) * e + Zf(t)) * e
        }
        function Jf(e, t, r) {
            return 3 * Qf(t, r) * e * e + 2 * $f(t, r) * e + Zf(t)
        }
        function LS(e, t, r, n, i) {
            var o, a, s = 0;
            do
                a = t + (r - t) / 2,
                o = pn(a, n, i) - e,
                o > 0 ? r = a : t = a;
            while (Math.abs(o) > xS && ++s < RS);
            return a
        }
        function PS(e, t, r, n) {
            for (var i = 0; i < SS; ++i) {
                var o = Jf(t, r, n);
                if (o === 0)
                    return t;
                var a = pn(t, r, n) - e;
                t -= a / o
            }
            return t
        }
        ed.exports = function(t, r, n, i) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var o = CS ? new Float32Array(gr) : new Array(gr);
            if (t !== r || n !== i)
                for (var a = 0; a < gr; ++a)
                    o[a] = pn(a * dn, t, n);
            function s(u) {
                for (var l = 0, y = 1, h = gr - 1; y !== h && o[y] <= u; ++y)
                    l += dn;
                --y;
                var p = (u - o[y]) / (o[y + 1] - o[y])
                  , v = l + p * dn
                  , T = Jf(v, t, n);
                return T >= OS ? PS(u, v, t, n) : T === 0 ? v : LS(u, l, l + dn, t, n)
            }
            return function(l) {
                return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : pn(s(l), r, i)
            }
        }
    }
    );
    var vr = {};
    Pe(vr, {
        bounce: () => gO,
        bouncePast: () => hO,
        ease: () => NS,
        easeIn: () => DS,
        easeInOut: () => FS,
        easeOut: () => MS,
        inBack: () => oO,
        inCirc: () => tO,
        inCubic: () => GS,
        inElastic: () => uO,
        inExpo: () => ZS,
        inOutBack: () => sO,
        inOutCirc: () => nO,
        inOutCubic: () => US,
        inOutElastic: () => lO,
        inOutExpo: () => eO,
        inOutQuad: () => XS,
        inOutQuart: () => HS,
        inOutQuint: () => jS,
        inOutSine: () => $S,
        inQuad: () => qS,
        inQuart: () => WS,
        inQuint: () => zS,
        inSine: () => YS,
        outBack: () => aO,
        outBounce: () => iO,
        outCirc: () => rO,
        outCubic: () => VS,
        outElastic: () => cO,
        outExpo: () => JS,
        outQuad: () => kS,
        outQuart: () => BS,
        outQuint: () => KS,
        outSine: () => QS,
        swingFrom: () => dO,
        swingFromTo: () => fO,
        swingTo: () => pO
    });
    function qS(e) {
        return Math.pow(e, 2)
    }
    function kS(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function XS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function GS(e) {
        return Math.pow(e, 3)
    }
    function VS(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function US(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function WS(e) {
        return Math.pow(e, 4)
    }
    function BS(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function HS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function zS(e) {
        return Math.pow(e, 5)
    }
    function KS(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function jS(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function YS(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function QS(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function $S(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function ZS(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function JS(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function eO(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function tO(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function rO(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function nO(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function iO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function oO(e) {
        let t = ot;
        return e * e * ((t + 1) * e - t)
    }
    function aO(e) {
        let t = ot;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function sO(e) {
        let t = ot;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function uO(e) {
        let t = ot
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }
    function cO(e) {
        let t = ot
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }
    function lO(e) {
        let t = ot
          , r = 0
          , n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }
    function fO(e) {
        let t = ot;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function dO(e) {
        let t = ot;
        return e * e * ((t + 1) * e - t)
    }
    function pO(e) {
        let t = ot;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function gO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function hO(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var hr, ot, NS, DS, MS, FS, $i = ve( () => {
        "use strict";
        hr = le(Qi()),
        ot = 1.70158,
        NS = (0,
        hr.default)(.25, .1, .25, 1),
        DS = (0,
        hr.default)(.42, 0, 1, 1),
        MS = (0,
        hr.default)(0, 0, .58, 1),
        FS = (0,
        hr.default)(.42, 0, .58, 1)
    }
    );
    var rd = {};
    Pe(rd, {
        applyEasing: () => EO,
        createBezierEasing: () => vO,
        optimizeFloat: () => Er
    });
    function Er(e, t=5, r=10) {
        let n = Math.pow(r, t)
          , i = Number(Math.round(e * n) / n);
        return Math.abs(i) > 1e-4 ? i : 0
    }
    function vO(e) {
        return (0,
        td.default)(...e)
    }
    function EO(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : Er(r ? t > 0 ? r(t) : t : t > 0 && e && vr[e] ? vr[e](t) : t)
    }
    var td, Zi = ve( () => {
        "use strict";
        $i();
        td = le(Qi())
    }
    );
    var od = {};
    Pe(od, {
        createElementState: () => id,
        ixElements: () => LO,
        mergeActionState: () => Ji
    });
    function id(e, t, r, n, i) {
        let o = r === yO ? (0,
        Xt.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0,
        Xt.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: o,
            refType: r
        })
    }
    function Ji(e, t, r, n, i) {
        let o = NO(i);
        return (0,
        Xt.mergeIn)(e, [t, CO, r], n, o)
    }
    function NO(e) {
        let {config: t} = e;
        return PO.reduce( (r, n) => {
            let i = n[0]
              , o = n[1]
              , a = t[i]
              , s = t[o];
            return a != null && s != null && (r[o] = s),
            r
        }
        , {})
    }
    var Xt, Oq, yO, xq, mO, _O, IO, TO, bO, AO, wO, SO, OO, xO, RO, nd, CO, LO, PO, ad = ve( () => {
        "use strict";
        Xt = le(Ct());
        De();
        ({HTML_ELEMENT: Oq, PLAIN_OBJECT: yO, ABSTRACT_NODE: xq, CONFIG_X_VALUE: mO, CONFIG_Y_VALUE: _O, CONFIG_Z_VALUE: IO, CONFIG_VALUE: TO, CONFIG_X_UNIT: bO, CONFIG_Y_UNIT: AO, CONFIG_Z_UNIT: wO, CONFIG_UNIT: SO} = we),
        {IX2_SESSION_STOPPED: OO, IX2_INSTANCE_ADDED: xO, IX2_ELEMENT_STATE_CHANGED: RO} = Te,
        nd = {},
        CO = "refState",
        LO = (e=nd, t={}) => {
            switch (t.type) {
            case OO:
                return nd;
            case xO:
                {
                    let {elementId: r, element: n, origin: i, actionItem: o, refType: a} = t.payload
                      , {actionTypeId: s} = o
                      , u = e;
                    return (0,
                    Xt.getIn)(u, [r, n]) !== n && (u = id(u, n, a, r, o)),
                    Ji(u, r, s, i, o)
                }
            case RO:
                {
                    let {elementId: r, actionTypeId: n, current: i, actionItem: o} = t.payload;
                    return Ji(e, r, n, i, o)
                }
            default:
                return e
            }
        }
        ;
        PO = [[mO, bO], [_O, AO], [IO, wO], [TO, SO]]
    }
    );
    var sd = f(eo => {
        "use strict";
        Object.defineProperty(eo, "__esModule", {
            value: !0
        });
        function DO(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        DO(eo, {
            clearPlugin: function() {
                return VO
            },
            createPluginInstance: function() {
                return XO
            },
            getPluginConfig: function() {
                return MO
            },
            getPluginDestination: function() {
                return kO
            },
            getPluginDuration: function() {
                return FO
            },
            getPluginOrigin: function() {
                return qO
            },
            renderPlugin: function() {
                return GO
            }
        });
        var MO = e => e.value
          , FO = (e, t) => {
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
          , qO = e => e || {
            value: 0
        }
          , kO = e => ({
            value: e.value
        })
          , XO = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
          , GO = (e, t, r) => {
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
          , VO = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
    }
    );
    var cd = f(to => {
        "use strict";
        Object.defineProperty(to, "__esModule", {
            value: !0
        });
        function UO(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        UO(to, {
            clearPlugin: function() {
                return ZO
            },
            createPluginInstance: function() {
                return QO
            },
            getPluginConfig: function() {
                return zO
            },
            getPluginDestination: function() {
                return YO
            },
            getPluginDuration: function() {
                return KO
            },
            getPluginOrigin: function() {
                return jO
            },
            renderPlugin: function() {
                return $O
            }
        });
        var WO = e => document.querySelector(`[data-w-id="${e}"]`)
          , BO = () => window.Webflow.require("spline")
          , HO = (e, t) => e.filter(r => !t.includes(r))
          , zO = (e, t) => e.value[t]
          , KO = () => null
          , ud = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , jO = (e, t) => {
            let r = t.config.value
              , n = Object.keys(r);
            if (e) {
                let o = Object.keys(e)
                  , a = HO(n, o);
                return a.length ? a.reduce( (u, l) => (u[l] = ud[l],
                u), e) : e
            }
            return n.reduce( (o, a) => (o[a] = ud[a],
            o), {})
        }
          , YO = e => e.value
          , QO = (e, t) => {
            let r = t?.config?.target?.pluginElement;
            return r ? WO(r) : null
        }
          , $O = (e, t, r) => {
            let n = BO()
              , i = n.getInstance(e)
              , o = r.config.target.objectId
              , a = s => {
                if (!s)
                    throw new Error("Invalid spline app passed to renderSpline");
                let u = o && s.findObjectById(o);
                if (!u)
                    return;
                let {PLUGIN_SPLINE: l} = t;
                l.positionX != null && (u.position.x = l.positionX),
                l.positionY != null && (u.position.y = l.positionY),
                l.positionZ != null && (u.position.z = l.positionZ),
                l.rotationX != null && (u.rotation.x = l.rotationX),
                l.rotationY != null && (u.rotation.y = l.rotationY),
                l.rotationZ != null && (u.rotation.z = l.rotationZ),
                l.scaleX != null && (u.scale.x = l.scaleX),
                l.scaleY != null && (u.scale.y = l.scaleY),
                l.scaleZ != null && (u.scale.z = l.scaleZ)
            }
            ;
            i ? a(i.spline) : n.setLoadHandler(e, a)
        }
          , ZO = () => null
    }
    );
    var ld = f(io => {
        "use strict";
        Object.defineProperty(io, "__esModule", {
            value: !0
        });
        function JO(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        JO(io, {
            clearPlugin: function() {
                return ux
            },
            createPluginInstance: function() {
                return ax
            },
            getPluginConfig: function() {
                return rx
            },
            getPluginDestination: function() {
                return ox
            },
            getPluginDuration: function() {
                return nx
            },
            getPluginOrigin: function() {
                return ix
            },
            renderPlugin: function() {
                return sx
            }
        });
        var ro = "--wf-rive-fit"
          , no = "--wf-rive-alignment"
          , ex = e => document.querySelector(`[data-w-id="${e}"]`)
          , tx = () => window.Webflow.require("rive")
          , rx = (e, t) => e.value.inputs[t]
          , nx = () => null
          , ix = (e, t) => {
            if (e)
                return e;
            let r = {}
              , {inputs: n={}} = t.config.value;
            for (let i in n)
                n[i] == null && (r[i] = 0);
            return r
        }
          , ox = e => e.value.inputs ?? {}
          , ax = (e, t) => {
            let r = t?.config?.target?.pluginElement;
            return r ? ex(r) : null
        }
          , sx = (e, {PLUGIN_RIVE: t}, r) => {
            let n = tx()
              , i = n.getInstance(e)
              , o = n.rive.StateMachineInputType
              , {name: a, inputs: s={}} = r.config.value || {};
            function u(l) {
                if (l.loaded)
                    y();
                else {
                    let h = () => {
                        y(),
                        l?.off("load", h)
                    }
                    ;
                    l?.on("load", h)
                }
                function y() {
                    let h = l.stateMachineInputs(a);
                    if (h != null) {
                        if (l.isPlaying || l.play(a, !1),
                        ro in s || no in s) {
                            let p = l.layout
                              , v = s[ro] ?? p.fit
                              , T = s[no] ?? p.alignment;
                            (v !== p.fit || T !== p.alignment) && (l.layout = p.copyWith({
                                fit: v,
                                alignment: T
                            }))
                        }
                        for (let p in s) {
                            if (p === ro || p === no)
                                continue;
                            let v = h.find(T => T.name === p);
                            if (v != null)
                                switch (v.type) {
                                case o.Boolean:
                                    {
                                        if (s[p] != null) {
                                            let T = !!s[p];
                                            v.value = T
                                        }
                                        break
                                    }
                                case o.Number:
                                    {
                                        let T = t[p];
                                        T != null && (v.value = T);
                                        break
                                    }
                                case o.Trigger:
                                    {
                                        s[p] && v.fire();
                                        break
                                    }
                                }
                        }
                    }
                }
            }
            i?.rive ? u(i.rive) : n.setLoadHandler(e, u)
        }
          , ux = (e, t) => null
    }
    );
    var ao = f(oo => {
        "use strict";
        Object.defineProperty(oo, "__esModule", {
            value: !0
        });
        Object.defineProperty(oo, "normalizeColor", {
            enumerable: !0,
            get: function() {
                return cx
            }
        });
        var fd = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aqua: "#00FFFF",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blue: "#0000FF",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            fuchsia: "#FF00FF",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#ADFF2F",
            grey: "#808080",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgray: "#D3D3D3",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            lime: "#00FF00",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            maroon: "#800000",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            navy: "#000080",
            oldlace: "#FDF5E6",
            olive: "#808000",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#FF0000",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            silver: "#C0C0C0",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            teal: "#008080",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            white: "#FFFFFF",
            whitesmoke: "#F5F5F5",
            yellow: "#FFFF00",
            yellowgreen: "#9ACD32"
        };
        function cx(e) {
            let t, r, n, i = 1, o = e.replace(/\s/g, "").toLowerCase(), s = (typeof fd[o] == "string" ? fd[o].toLowerCase() : null) || o;
            if (s.startsWith("#")) {
                let u = s.substring(1);
                u.length === 3 || u.length === 4 ? (t = parseInt(u[0] + u[0], 16),
                r = parseInt(u[1] + u[1], 16),
                n = parseInt(u[2] + u[2], 16),
                u.length === 4 && (i = parseInt(u[3] + u[3], 16) / 255)) : (u.length === 6 || u.length === 8) && (t = parseInt(u.substring(0, 2), 16),
                r = parseInt(u.substring(2, 4), 16),
                n = parseInt(u.substring(4, 6), 16),
                u.length === 8 && (i = parseInt(u.substring(6, 8), 16) / 255))
            } else if (s.startsWith("rgba")) {
                let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                r = parseInt(u[1], 10),
                n = parseInt(u[2], 10),
                i = parseFloat(u[3])
            } else if (s.startsWith("rgb")) {
                let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(u[0], 10),
                r = parseInt(u[1], 10),
                n = parseInt(u[2], 10)
            } else if (s.startsWith("hsla")) {
                let u = s.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , l = parseFloat(u[0])
                  , y = parseFloat(u[1].replace("%", "")) / 100
                  , h = parseFloat(u[2].replace("%", "")) / 100;
                i = parseFloat(u[3]);
                let p = (1 - Math.abs(2 * h - 1)) * y, v = p * (1 - Math.abs(l / 60 % 2 - 1)), T = h - p / 2, A, R, w;
                l >= 0 && l < 60 ? (A = p,
                R = v,
                w = 0) : l >= 60 && l < 120 ? (A = v,
                R = p,
                w = 0) : l >= 120 && l < 180 ? (A = 0,
                R = p,
                w = v) : l >= 180 && l < 240 ? (A = 0,
                R = v,
                w = p) : l >= 240 && l < 300 ? (A = v,
                R = 0,
                w = p) : (A = p,
                R = 0,
                w = v),
                t = Math.round((A + T) * 255),
                r = Math.round((R + T) * 255),
                n = Math.round((w + T) * 255)
            } else if (s.startsWith("hsl")) {
                let u = s.match(/hsl\(([^)]+)\)/)[1].split(","), l = parseFloat(u[0]), y = parseFloat(u[1].replace("%", "")) / 100, h = parseFloat(u[2].replace("%", "")) / 100, p = (1 - Math.abs(2 * h - 1)) * y, v = p * (1 - Math.abs(l / 60 % 2 - 1)), T = h - p / 2, A, R, w;
                l >= 0 && l < 60 ? (A = p,
                R = v,
                w = 0) : l >= 60 && l < 120 ? (A = v,
                R = p,
                w = 0) : l >= 120 && l < 180 ? (A = 0,
                R = p,
                w = v) : l >= 180 && l < 240 ? (A = 0,
                R = v,
                w = p) : l >= 240 && l < 300 ? (A = v,
                R = 0,
                w = p) : (A = p,
                R = 0,
                w = v),
                t = Math.round((A + T) * 255),
                r = Math.round((R + T) * 255),
                n = Math.round((w + T) * 255)
            }
            if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n))
                throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
            return {
                red: t,
                green: r,
                blue: n,
                alpha: i
            }
        }
    }
    );
    var dd = f(so => {
        "use strict";
        Object.defineProperty(so, "__esModule", {
            value: !0
        });
        function lx(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        lx(so, {
            clearPlugin: function() {
                return yx
            },
            createPluginInstance: function() {
                return vx
            },
            getPluginConfig: function() {
                return dx
            },
            getPluginDestination: function() {
                return hx
            },
            getPluginDuration: function() {
                return px
            },
            getPluginOrigin: function() {
                return gx
            },
            renderPlugin: function() {
                return Ex
            }
        });
        var fx = ao()
          , dx = (e, t) => e.value[t]
          , px = () => null
          , gx = (e, t) => {
            if (e)
                return e;
            let r = t.config.value
              , n = t.config.target.objectId
              , i = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null)
                return {
                    size: parseInt(i, 10)
                };
            if (r.red != null && r.green != null && r.blue != null)
                return (0,
                fx.normalizeColor)(i)
        }
          , hx = e => e.value
          , vx = () => null
          , Ex = (e, t, r) => {
            let n = r.config.target.objectId, i = r.config.value.unit, {PLUGIN_VARIABLE: o} = t, {size: a, red: s, green: u, blue: l, alpha: y} = o, h;
            a != null && (h = a + i),
            s != null && l != null && u != null && y != null && (h = `rgba(${s}, ${u}, ${l}, ${y})`),
            h != null && document.documentElement.style.setProperty(n, h)
        }
          , yx = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        }
    }
    );
    var gd = f(uo => {
        "use strict";
        Object.defineProperty(uo, "__esModule", {
            value: !0
        });
        Object.defineProperty(uo, "pluginMethodMap", {
            enumerable: !0,
            get: function() {
                return bx
            }
        });
        var gn = (De(),
        Ye(Es))
          , mx = hn(sd())
          , _x = hn(cd())
          , Ix = hn(ld())
          , Tx = hn(dd());
        function pd(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (pd = function(n) {
                return n ? r : t
            }
            )(e)
        }
        function hn(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = pd(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        var bx = new Map([[gn.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...mx
        }], [gn.ActionTypeConsts.PLUGIN_SPLINE, {
            ..._x
        }], [gn.ActionTypeConsts.PLUGIN_RIVE, {
            ...Ix
        }], [gn.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...Tx
        }]])
    }
    );
    var hd = {};
    Pe(hd, {
        clearPlugin: () => ho,
        createPluginInstance: () => wx,
        getPluginConfig: () => lo,
        getPluginDestination: () => po,
        getPluginDuration: () => Ax,
        getPluginOrigin: () => fo,
        isPluginType: () => _t,
        renderPlugin: () => go
    });
    function _t(e) {
        return co.pluginMethodMap.has(e)
    }
    var co, It, lo, fo, Ax, po, wx, go, ho, vo = ve( () => {
        "use strict";
        fn();
        co = le(gd());
        It = e => t => {
            if (!ze)
                return () => null;
            let r = co.pluginMethodMap.get(t);
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
        ,
        lo = It("getPluginConfig"),
        fo = It("getPluginOrigin"),
        Ax = It("getPluginDuration"),
        po = It("getPluginDestination"),
        wx = It("createPluginInstance"),
        go = It("renderPlugin"),
        ho = It("clearPlugin")
    }
    );
    var Ed = f( (Fq, vd) => {
        function Sx(e, t) {
            return e == null || e !== e ? t : e
        }
        vd.exports = Sx
    }
    );
    var md = f( (qq, yd) => {
        function Ox(e, t, r, n) {
            var i = -1
              , o = e == null ? 0 : e.length;
            for (n && o && (r = e[++i]); ++i < o; )
                r = t(r, e[i], i, e);
            return r
        }
        yd.exports = Ox
    }
    );
    var Id = f( (kq, _d) => {
        function xx(e) {
            return function(t, r, n) {
                for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
                    var u = a[e ? s : ++i];
                    if (r(o[u], u, o) === !1)
                        break
                }
                return t
            }
        }
        _d.exports = xx
    }
    );
    var bd = f( (Xq, Td) => {
        var Rx = Id()
          , Cx = Rx();
        Td.exports = Cx
    }
    );
    var Eo = f( (Gq, Ad) => {
        var Lx = bd()
          , Px = fr();
        function Nx(e, t) {
            return e && Lx(e, t, Px)
        }
        Ad.exports = Nx
    }
    );
    var Sd = f( (Vq, wd) => {
        var Dx = yt();
        function Mx(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!Dx(r))
                    return e(r, n);
                for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1; )
                    ;
                return r
            }
        }
        wd.exports = Mx
    }
    );
    var yo = f( (Uq, Od) => {
        var Fx = Eo()
          , qx = Sd()
          , kx = qx(Fx);
        Od.exports = kx
    }
    );
    var Rd = f( (Wq, xd) => {
        function Xx(e, t, r, n, i) {
            return i(e, function(o, a, s) {
                r = n ? (n = !1,
                o) : t(r, o, a, s)
            }),
            r
        }
        xd.exports = Xx
    }
    );
    var Ld = f( (Bq, Cd) => {
        var Gx = md()
          , Vx = yo()
          , Ux = dt()
          , Wx = Rd()
          , Bx = be();
        function Hx(e, t, r) {
            var n = Bx(e) ? Gx : Wx
              , i = arguments.length < 3;
            return n(e, Ux(t, 4), r, i, Vx)
        }
        Cd.exports = Hx
    }
    );
    var Nd = f( (Hq, Pd) => {
        var zx = zi()
          , Kx = dt()
          , jx = Ki()
          , Yx = Math.max
          , Qx = Math.min;
        function $x(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var i = n - 1;
            return r !== void 0 && (i = jx(r),
            i = r < 0 ? Yx(n + i, 0) : Qx(i, n - 1)),
            zx(e, Kx(t, 3), i, !0)
        }
        Pd.exports = $x
    }
    );
    var Md = f( (zq, Dd) => {
        var Zx = Hi()
          , Jx = Nd()
          , eR = Zx(Jx);
        Dd.exports = eR
    }
    );
    function Fd(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function tR(e, t) {
        if (Fd(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let r = Object.keys(e)
          , n = Object.keys(t);
        if (r.length !== n.length)
            return !1;
        for (let i = 0; i < r.length; i++)
            if (!Object.hasOwn(t, r[i]) || !Fd(e[r[i]], t[r[i]]))
                return !1;
        return !0
    }
    var mo, qd = ve( () => {
        "use strict";
        mo = tR
    }
    );
    var tp = {};
    Pe(tp, {
        cleanupHTMLElement: () => ZR,
        clearAllStyles: () => $R,
        clearObjectCache: () => yR,
        getActionListProgress: () => eC,
        getAffectedElements: () => Ao,
        getComputedStyle: () => SR,
        getDestinationValues: () => NR,
        getElementId: () => TR,
        getInstanceId: () => _R,
        getInstanceOrigin: () => RR,
        getItemConfigByKey: () => PR,
        getMaxDurationItemIndex: () => ep,
        getNamespacedParameterId: () => nC,
        getRenderType: () => $d,
        getStyleProp: () => DR,
        mediaQueriesEqual: () => oC,
        observeStore: () => wR,
        reduceListToGroup: () => tC,
        reifyState: () => bR,
        renderHTMLElement: () => MR,
        shallowEqual: () => mo,
        shouldAllowMediaQuery: () => iC,
        shouldNamespaceEventParameter: () => rC,
        stringifyTarget: () => aC
    });
    function yR() {
        vn.clear()
    }
    function _R() {
        return "i" + mR++
    }
    function TR(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t)
                return n.id
        }
        return "e" + IR++
    }
    function bR({events: e, actionLists: t, site: r}={}) {
        let n = (0,
        _n.default)(e, (a, s) => {
            let {eventTypeId: u} = s;
            return a[u] || (a[u] = {}),
            a[u][s.id] = s,
            a
        }
        , {})
          , i = r && r.mediaQueries
          , o = [];
        return i ? o = i.map(a => a.key) : (i = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: i,
                mediaQueryKeys: o
            }
        }
    }
    function wR({store: e, select: t, onChange: r, comparator: n=AR}) {
        let {getState: i, subscribe: o} = e
          , a = o(u)
          , s = t(i());
        function u() {
            let l = t(i());
            if (l == null) {
                a();
                return
            }
            n(l, s) || (s = l,
            r(s, e))
        }
        return a
    }
    function Gd(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: r, objectId: n, selector: i, selectorGuids: o, appliesTo: a, useEventTarget: s} = e;
            return {
                id: r,
                objectId: n,
                selector: i,
                selectorGuids: o,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }
    function Ao({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: i}) {
        if (!i)
            throw new Error("IX2 missing elementApi");
        let {targets: o} = e;
        if (Array.isArray(o) && o.length > 0)
            return o.reduce( (k, O) => k.concat(Ao({
                config: {
                    target: O
                },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: i
            })), []);
        let {getValidDocument: a, getQuerySelector: s, queryDocument: u, getChildElements: l, getSiblingElements: y, matchSelector: h, elementContains: p, isSiblingNode: v} = i
          , {target: T} = e;
        if (!T)
            return [];
        let {id: A, objectId: R, selector: w, selectorGuids: P, appliesTo: C, useEventTarget: M} = Gd(T);
        if (R)
            return [vn.has(R) ? vn.get(R) : vn.set(R, {}).get(R)];
        if (C === Ei.PAGE) {
            let k = a(A);
            return k ? [k] : []
        }
        let N = (t?.action?.config?.affectedElements ?? {})[A || w] || {}, W = !!(N.id || N.selector), H, j, J, re = t && s(Gd(t.target));
        if (W ? (H = N.limitAffectedElements,
        j = re,
        J = s(N)) : j = J = s({
            id: A,
            selector: w,
            selectorGuids: P
        }),
        t && M) {
            let k = r && (J || M === !0) ? [r] : u(re);
            if (J) {
                if (M === hR)
                    return u(J).filter(O => k.some(F => p(O, F)));
                if (M === kd)
                    return u(J).filter(O => k.some(F => p(F, O)));
                if (M === Xd)
                    return u(J).filter(O => k.some(F => v(F, O)))
            }
            return k
        }
        return j == null || J == null ? [] : ze && n ? u(J).filter(k => n.contains(k)) : H === kd ? u(j, J) : H === gR ? l(u(j)).filter(h(J)) : H === Xd ? y(u(j)).filter(h(J)) : u(J)
    }
    function SR({element: e, actionItem: t}) {
        if (!ze)
            return {};
        let {actionTypeId: r} = t;
        switch (r) {
        case Bt:
        case Ht:
        case zt:
        case Kt:
        case Tn:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function RR(e, t={}, r={}, n, i) {
        let {getStyle: o} = i
          , {actionTypeId: a} = n;
        if (_t(a))
            return fo(a)(t[a], n);
        switch (n.actionTypeId) {
        case Vt:
        case Ut:
        case Wt:
        case Ir:
            return t[n.actionTypeId] || wo[n.actionTypeId];
        case Tr:
            return OR(t[n.actionTypeId], n.config.filters);
        case br:
            return xR(t[n.actionTypeId], n.config.fontVariations);
        case jd:
            return {
                value: (0,
                at.default)(parseFloat(o(e, yn)), 1)
            };
        case Bt:
            {
                let s = o(e, et), u = o(e, tt), l, y;
                return n.config.widthUnit === gt ? l = Vd.test(s) ? parseFloat(s) : parseFloat(r.width) : l = (0,
                at.default)(parseFloat(s), parseFloat(r.width)),
                n.config.heightUnit === gt ? y = Vd.test(u) ? parseFloat(u) : parseFloat(r.height) : y = (0,
                at.default)(parseFloat(u), parseFloat(r.height)),
                {
                    widthValue: l,
                    heightValue: y
                }
            }
        case Ht:
        case zt:
        case Kt:
            return jR({
                element: e,
                actionTypeId: n.actionTypeId,
                computedStyle: r,
                getStyle: o
            });
        case Tn:
            return {
                value: (0,
                at.default)(o(e, mn), r.display)
            };
        case ER:
            return t[n.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function NR({element: e, actionItem: t, elementApi: r}) {
        if (_t(t.actionTypeId))
            return po(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case Vt:
        case Ut:
        case Wt:
        case Ir:
            {
                let {xValue: n, yValue: i, zValue: o} = t.config;
                return {
                    xValue: n,
                    yValue: i,
                    zValue: o
                }
            }
        case Bt:
            {
                let {getStyle: n, setStyle: i, getProperty: o} = r
                  , {widthUnit: a, heightUnit: s} = t.config
                  , {widthValue: u, heightValue: l} = t.config;
                if (!ze)
                    return {
                        widthValue: u,
                        heightValue: l
                    };
                if (a === gt) {
                    let y = n(e, et);
                    i(e, et, ""),
                    u = o(e, "offsetWidth"),
                    i(e, et, y)
                }
                if (s === gt) {
                    let y = n(e, tt);
                    i(e, tt, ""),
                    l = o(e, "offsetHeight"),
                    i(e, tt, y)
                }
                return {
                    widthValue: u,
                    heightValue: l
                }
            }
        case Ht:
        case zt:
        case Kt:
            {
                let {rValue: n, gValue: i, bValue: o, aValue: a, globalSwatchId: s} = t.config;
                if (s && s.startsWith("--")) {
                    let {getStyle: u} = r
                      , l = u(e, s)
                      , y = (0,
                    Bd.normalizeColor)(l);
                    return {
                        rValue: y.red,
                        gValue: y.green,
                        bValue: y.blue,
                        aValue: y.alpha
                    }
                }
                return {
                    rValue: n,
                    gValue: i,
                    bValue: o,
                    aValue: a
                }
            }
        case Tr:
            return t.config.filters.reduce(CR, {});
        case br:
            return t.config.fontVariations.reduce(LR, {});
        default:
            {
                let {value: n} = t.config;
                return {
                    value: n
                }
            }
        }
    }
    function $d(e) {
        if (/^TRANSFORM_/.test(e))
            return zd;
        if (/^STYLE_/.test(e))
            return To;
        if (/^GENERAL_/.test(e))
            return Io;
        if (/^PLUGIN_/.test(e))
            return Kd
    }
    function DR(e, t) {
        return e === To ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function MR(e, t, r, n, i, o, a, s, u) {
        switch (s) {
        case zd:
            return GR(e, t, r, i, a);
        case To:
            return YR(e, t, r, i, o, a);
        case Io:
            return QR(e, i, a);
        case Kd:
            {
                let {actionTypeId: l} = i;
                if (_t(l))
                    return go(l)(u, t, i)
            }
        }
    }
    function GR(e, t, r, n, i) {
        let o = XR.map(s => {
            let u = wo[s]
              , {xValue: l=u.xValue, yValue: y=u.yValue, zValue: h=u.zValue, xUnit: p="", yUnit: v="", zUnit: T=""} = t[s] || {};
            switch (s) {
            case Vt:
                return `${iR}(${l}${p}, ${y}${v}, ${h}${T})`;
            case Ut:
                return `${oR}(${l}${p}, ${y}${v}, ${h}${T})`;
            case Wt:
                return `${aR}(${l}${p}) ${sR}(${y}${v}) ${uR}(${h}${T})`;
            case Ir:
                return `${cR}(${l}${p}, ${y}${v})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: a} = i;
        Tt(e, pt, i),
        a(e, pt, o),
        WR(n, r) && a(e, ln, lR)
    }
    function VR(e, t, r, n) {
        let i = (0,
        _n.default)(t, (a, s, u) => `${a} ${u}(${s}${kR(u, r)})`, "")
          , {setStyle: o} = n;
        Tt(e, yr, n),
        o(e, yr, i)
    }
    function UR(e, t, r, n) {
        let i = (0,
        _n.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`),
        a), []).join(", ")
          , {setStyle: o} = n;
        Tt(e, mr, n),
        o(e, mr, i)
    }
    function WR({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
        return e === Vt && n !== void 0 || e === Ut && n !== void 0 || e === Wt && (t !== void 0 || r !== void 0)
    }
    function KR(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }
    function jR({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
        let i = bo[t]
          , o = n(e, i)
          , a = HR.test(o) ? o : r[i]
          , s = KR(zR, a).split(_r);
        return {
            rValue: (0,
            at.default)(parseInt(s[0], 10), 255),
            gValue: (0,
            at.default)(parseInt(s[1], 10), 255),
            bValue: (0,
            at.default)(parseInt(s[2], 10), 255),
            aValue: (0,
            at.default)(parseFloat(s[3]), 1)
        }
    }
    function YR(e, t, r, n, i, o) {
        let {setStyle: a} = o;
        switch (n.actionTypeId) {
        case Bt:
            {
                let {widthUnit: s="", heightUnit: u=""} = n.config
                  , {widthValue: l, heightValue: y} = r;
                l !== void 0 && (s === gt && (s = "px"),
                Tt(e, et, o),
                a(e, et, l + s)),
                y !== void 0 && (u === gt && (u = "px"),
                Tt(e, tt, o),
                a(e, tt, y + u));
                break
            }
        case Tr:
            {
                VR(e, r, n.config, o);
                break
            }
        case br:
            {
                UR(e, r, n.config, o);
                break
            }
        case Ht:
        case zt:
        case Kt:
            {
                let s = bo[n.actionTypeId]
                  , u = Math.round(r.rValue)
                  , l = Math.round(r.gValue)
                  , y = Math.round(r.bValue)
                  , h = r.aValue;
                Tt(e, s, o),
                a(e, s, h >= 1 ? `rgb(${u},${l},${y})` : `rgba(${u},${l},${y},${h})`);
                break
            }
        default:
            {
                let {unit: s=""} = n.config;
                Tt(e, i, o),
                a(e, i, r.value + s);
                break
            }
        }
    }
    function QR(e, t, r) {
        let {setStyle: n} = r;
        switch (t.actionTypeId) {
        case Tn:
            {
                let {value: i} = t.config;
                i === fR && ze ? n(e, mn, Yi) : n(e, mn, i);
                return
            }
        }
    }
    function Tt(e, t, r) {
        if (!ze)
            return;
        let n = Qd[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, Gt);
        if (!a) {
            o(e, Gt, n);
            return
        }
        let s = a.split(_r).map(Yd);
        s.indexOf(n) === -1 && o(e, Gt, s.concat(n).join(_r))
    }
    function Zd(e, t, r) {
        if (!ze)
            return;
        let n = Qd[t];
        if (!n)
            return;
        let {getStyle: i, setStyle: o} = r
          , a = i(e, Gt);
        !a || a.indexOf(n) === -1 || o(e, Gt, a.split(_r).map(Yd).filter(s => s !== n).join(_r))
    }
    function $R({store: e, elementApi: t}) {
        let {ixData: r} = e.getState()
          , {events: n={}, actionLists: i={}} = r;
        Object.keys(n).forEach(o => {
            let a = n[o]
              , {config: s} = a.action
              , {actionListId: u} = s
              , l = i[u];
            l && Ud({
                actionList: l,
                event: a,
                elementApi: t
            })
        }
        ),
        Object.keys(i).forEach(o => {
            Ud({
                actionList: i[o],
                elementApi: t
            })
        }
        )
    }
    function Ud({actionList: e={}, event: t, elementApi: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e;
        n && n.forEach(o => {
            Wd({
                actionGroup: o,
                event: t,
                elementApi: r
            })
        }
        ),
        i && i.forEach(o => {
            let {continuousActionGroups: a} = o;
            a.forEach(s => {
                Wd({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            }
            )
        }
        )
    }
    function Wd({actionGroup: e, event: t, elementApi: r}) {
        let {actionItems: n} = e;
        n.forEach(i => {
            let {actionTypeId: o, config: a} = i, s;
            _t(o) ? s = u => ho(o)(u, i) : s = Jd({
                effect: JR,
                actionTypeId: o,
                elementApi: r
            }),
            Ao({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        }
        )
    }
    function ZR(e, t, r) {
        let {setStyle: n, getStyle: i} = r
          , {actionTypeId: o} = t;
        if (o === Bt) {
            let {config: a} = t;
            a.widthUnit === gt && n(e, et, ""),
            a.heightUnit === gt && n(e, tt, "")
        }
        i(e, Gt) && Jd({
            effect: Zd,
            actionTypeId: o,
            elementApi: r
        })(e)
    }
    function JR(e, t, r) {
        let {setStyle: n} = r;
        Zd(e, t, r),
        n(e, t, ""),
        t === pt && n(e, ln, "")
    }
    function ep(e) {
        let t = 0
          , r = 0;
        return e.forEach( (n, i) => {
            let {config: o} = n
              , a = o.delay + o.duration;
            a >= t && (t = a,
            r = i)
        }
        ),
        r
    }
    function eC(e, t) {
        let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
          , {actionItem: i, verboseTimeElapsed: o=0} = t
          , a = 0
          , s = 0;
        return r.forEach( (u, l) => {
            if (n && l === 0)
                return;
            let {actionItems: y} = u
              , h = y[ep(y)]
              , {config: p, actionTypeId: v} = h;
            i.id === h.id && (s = a + o);
            let T = $d(v) === Io ? 0 : p.duration;
            a += p.delay + T
        }
        ),
        a > 0 ? Er(s / a) : 0
    }
    function tC({actionList: e, actionItemId: t, rawData: r}) {
        let {actionItemGroups: n, continuousParameterGroups: i} = e
          , o = []
          , a = s => (o.push((0,
        In.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })),
        s.id === t);
        return n && n.some( ({actionItems: s}) => s.some(a)),
        i && i.some(s => {
            let {continuousActionGroups: u} = s;
            return u.some( ({actionItems: l}) => l.some(a))
        }
        ),
        (0,
        In.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: o
                }]
            }
        })
    }
    function rC(e, {basedOn: t}) {
        return e === He.SCROLLING_IN_VIEW && (t === Ze.ELEMENT || t == null) || e === He.MOUSE_MOVE && t === Ze.ELEMENT
    }
    function nC(e, t) {
        return e + vR + t
    }
    function iC(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function oC(e, t) {
        return mo(e && e.sort(), t && t.sort())
    }
    function aC(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + _o + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: r="", useEventTarget: n=""} = e;
        return t + _o + r + _o + n
    }
    var at, _n, En, In, Bd, rR, nR, iR, oR, aR, sR, uR, cR, lR, fR, yn, yr, mr, et, tt, Hd, dR, pR, kd, gR, Xd, hR, mn, Gt, gt, _r, vR, _o, zd, Io, To, Kd, Vt, Ut, Wt, Ir, jd, Tr, br, Bt, Ht, zt, Kt, Tn, ER, Yd, bo, Qd, vn, mR, IR, AR, Vd, OR, xR, CR, LR, PR, wo, FR, qR, kR, XR, BR, HR, zR, Jd, rp = ve( () => {
        "use strict";
        at = le(Ed()),
        _n = le(Ld()),
        En = le(Md()),
        In = le(Ct());
        De();
        qd();
        Zi();
        Bd = le(ao());
        vo();
        fn();
        ({BACKGROUND: rR, TRANSFORM: nR, TRANSLATE_3D: iR, SCALE_3D: oR, ROTATE_X: aR, ROTATE_Y: sR, ROTATE_Z: uR, SKEW: cR, PRESERVE_3D: lR, FLEX: fR, OPACITY: yn, FILTER: yr, FONT_VARIATION_SETTINGS: mr, WIDTH: et, HEIGHT: tt, BACKGROUND_COLOR: Hd, BORDER_COLOR: dR, COLOR: pR, CHILDREN: kd, IMMEDIATE_CHILDREN: gR, SIBLINGS: Xd, PARENT: hR, DISPLAY: mn, WILL_CHANGE: Gt, AUTO: gt, COMMA_DELIMITER: _r, COLON_DELIMITER: vR, BAR_DELIMITER: _o, RENDER_TRANSFORM: zd, RENDER_GENERAL: Io, RENDER_STYLE: To, RENDER_PLUGIN: Kd} = we),
        {TRANSFORM_MOVE: Vt, TRANSFORM_SCALE: Ut, TRANSFORM_ROTATE: Wt, TRANSFORM_SKEW: Ir, STYLE_OPACITY: jd, STYLE_FILTER: Tr, STYLE_FONT_VARIATION: br, STYLE_SIZE: Bt, STYLE_BACKGROUND_COLOR: Ht, STYLE_BORDER: zt, STYLE_TEXT_COLOR: Kt, GENERAL_DISPLAY: Tn, OBJECT_VALUE: ER} = Ne,
        Yd = e => e.trim(),
        bo = Object.freeze({
            [Ht]: Hd,
            [zt]: dR,
            [Kt]: pR
        }),
        Qd = Object.freeze({
            [pt]: nR,
            [Hd]: rR,
            [yn]: yn,
            [yr]: yr,
            [et]: et,
            [tt]: tt,
            [mr]: mr
        }),
        vn = new Map;
        mR = 1;
        IR = 1;
        AR = (e, t) => e === t;
        Vd = /px/,
        OR = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = FR[n.type]),
        r), e || {}),
        xR = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = qR[n.type] || n.defaultValue || 0),
        r), e || {});
        CR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        LR = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        PR = (e, t, r) => {
            if (_t(e))
                return lo(e)(r, t);
            switch (e) {
            case Tr:
                {
                    let n = (0,
                    En.default)(r.filters, ({type: i}) => i === t);
                    return n ? n.value : 0
                }
            case br:
                {
                    let n = (0,
                    En.default)(r.fontVariations, ({type: i}) => i === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        wo = {
            [Vt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Ut]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [Wt]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Ir]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        FR = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        qR = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        kR = (e, t) => {
            let r = (0,
            En.default)(t.filters, ({type: n}) => n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        XR = Object.keys(wo);
        BR = "\\(([^)]+)\\)",
        HR = /^rgb/,
        zR = RegExp(`rgba?${BR}`);
        Jd = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
            switch (t) {
            case Vt:
            case Ut:
            case Wt:
            case Ir:
                e(n, pt, r);
                break;
            case Tr:
                e(n, yr, r);
                break;
            case br:
                e(n, mr, r);
                break;
            case jd:
                e(n, yn, r);
                break;
            case Bt:
                e(n, et, r),
                e(n, tt, r);
                break;
            case Ht:
            case zt:
            case Kt:
                e(n, bo[t], r);
                break;
            case Tn:
                e(n, mn, r);
                break
            }
        }
    }
    );
    var bt = f(So => {
        "use strict";
        Object.defineProperty(So, "__esModule", {
            value: !0
        });
        function sC(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        sC(So, {
            IX2BrowserSupport: function() {
                return uC
            },
            IX2EasingUtils: function() {
                return lC
            },
            IX2Easings: function() {
                return cC
            },
            IX2ElementsReducer: function() {
                return fC
            },
            IX2VanillaPlugins: function() {
                return dC
            },
            IX2VanillaUtils: function() {
                return pC
            }
        });
        var uC = jt((fn(),
        Ye(Yf)))
          , cC = jt(($i(),
        Ye(vr)))
          , lC = jt((Zi(),
        Ye(rd)))
          , fC = jt((ad(),
        Ye(od)))
          , dC = jt((vo(),
        Ye(hd)))
          , pC = jt((rp(),
        Ye(tp)));
        function np(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (np = function(n) {
                return n ? r : t
            }
            )(e)
        }
        function jt(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = np(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
    }
    );
    var An, st, gC, hC, vC, EC, yC, mC, bn, ip, _C, IC, Oo, TC, bC, AC, wC, op, ap = ve( () => {
        "use strict";
        De();
        An = le(bt()),
        st = le(Ct()),
        {IX2_RAW_DATA_IMPORTED: gC, IX2_SESSION_STOPPED: hC, IX2_INSTANCE_ADDED: vC, IX2_INSTANCE_STARTED: EC, IX2_INSTANCE_REMOVED: yC, IX2_ANIMATION_FRAME_CHANGED: mC} = Te,
        {optimizeFloat: bn, applyEasing: ip, createBezierEasing: _C} = An.IX2EasingUtils,
        {RENDER_GENERAL: IC} = we,
        {getItemConfigByKey: Oo, getRenderType: TC, getStyleProp: bC} = An.IX2VanillaUtils,
        AC = (e, t) => {
            let {position: r, parameterId: n, actionGroups: i, destinationKeys: o, smoothing: a, restingValue: s, actionTypeId: u, customEasingFn: l, skipMotion: y, skipToValue: h} = e
              , {parameters: p} = t.payload
              , v = Math.max(1 - a, .01)
              , T = p[n];
            T == null && (v = 1,
            T = s);
            let A = Math.max(T, 0) || 0
              , R = bn(A - r)
              , w = y ? h : bn(r + R * v)
              , P = w * 100;
            if (w === r && e.current)
                return e;
            let C, M, D, N;
            for (let H = 0, {length: j} = i; H < j; H++) {
                let {keyframe: J, actionItems: re} = i[H];
                if (H === 0 && (C = re[0]),
                P >= J) {
                    C = re[0];
                    let k = i[H + 1]
                      , O = k && P !== J;
                    M = O ? k.actionItems[0] : null,
                    O && (D = J / 100,
                    N = (k.keyframe - J) / 100)
                }
            }
            let W = {};
            if (C && !M)
                for (let H = 0, {length: j} = o; H < j; H++) {
                    let J = o[H];
                    W[J] = Oo(u, J, C.config)
                }
            else if (C && M && D !== void 0 && N !== void 0) {
                let H = (w - D) / N
                  , j = C.config.easing
                  , J = ip(j, H, l);
                for (let re = 0, {length: k} = o; re < k; re++) {
                    let O = o[re]
                      , F = Oo(u, O, C.config)
                      , ee = (Oo(u, O, M.config) - F) * J + F;
                    W[O] = ee
                }
            }
            return (0,
            st.merge)(e, {
                position: w,
                current: W
            })
        }
        ,
        wC = (e, t) => {
            let {active: r, origin: n, start: i, immediate: o, renderType: a, verbose: s, actionItem: u, destination: l, destinationKeys: y, pluginDuration: h, instanceDelay: p, customEasingFn: v, skipMotion: T} = e
              , A = u.config.easing
              , {duration: R, delay: w} = u.config;
            h != null && (R = h),
            w = p ?? w,
            a === IC ? R = 0 : (o || T) && (R = w = 0);
            let {now: P} = t.payload;
            if (r && n) {
                let C = P - (i + w);
                if (s) {
                    let H = P - i
                      , j = R + w
                      , J = bn(Math.min(Math.max(0, H / j), 1));
                    e = (0,
                    st.set)(e, "verboseTimeElapsed", j * J)
                }
                if (C < 0)
                    return e;
                let M = bn(Math.min(Math.max(0, C / R), 1))
                  , D = ip(A, M, v)
                  , N = {}
                  , W = null;
                return y.length && (W = y.reduce( (H, j) => {
                    let J = l[j]
                      , re = parseFloat(n[j]) || 0
                      , O = (parseFloat(J) - re) * D + re;
                    return H[j] = O,
                    H
                }
                , {})),
                N.current = W,
                N.position = M,
                M === 1 && (N.active = !1,
                N.complete = !0),
                (0,
                st.merge)(e, N)
            }
            return e
        }
        ,
        op = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case gC:
                return t.payload.ixInstances || Object.freeze({});
            case hC:
                return Object.freeze({});
            case vC:
                {
                    let {instanceId: r, elementId: n, actionItem: i, eventId: o, eventTarget: a, eventStateKey: s, actionListId: u, groupIndex: l, isCarrier: y, origin: h, destination: p, immediate: v, verbose: T, continuous: A, parameterId: R, actionGroups: w, smoothing: P, restingValue: C, pluginInstance: M, pluginDuration: D, instanceDelay: N, skipMotion: W, skipToValue: H} = t.payload
                      , {actionTypeId: j} = i
                      , J = TC(j)
                      , re = bC(J, j)
                      , k = Object.keys(p).filter(F => p[F] != null && typeof p[F] != "string")
                      , {easing: O} = i.config;
                    return (0,
                    st.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: h,
                        destination: p,
                        destinationKeys: k,
                        immediate: v,
                        verbose: T,
                        current: null,
                        actionItem: i,
                        actionTypeId: j,
                        eventId: o,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: l,
                        renderType: J,
                        isCarrier: y,
                        styleProp: re,
                        continuous: A,
                        parameterId: R,
                        actionGroups: w,
                        smoothing: P,
                        restingValue: C,
                        pluginInstance: M,
                        pluginDuration: D,
                        instanceDelay: N,
                        skipMotion: W,
                        skipToValue: H,
                        customEasingFn: Array.isArray(O) && O.length === 4 ? _C(O) : void 0
                    })
                }
            case EC:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    st.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case yC:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , i = Object.keys(e)
                      , {length: o} = i;
                    for (let a = 0; a < o; a++) {
                        let s = i[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
            case mC:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: i} = n;
                    for (let o = 0; o < i; o++) {
                        let a = n[o]
                          , s = e[a]
                          , u = s.continuous ? AC : wC;
                        r = (0,
                        st.set)(r, a, u(s, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
    }
    );
    var SC, OC, xC, sp, up = ve( () => {
        "use strict";
        De();
        ({IX2_RAW_DATA_IMPORTED: SC, IX2_SESSION_STOPPED: OC, IX2_PARAMETER_CHANGED: xC} = Te),
        sp = (e={}, t) => {
            switch (t.type) {
            case SC:
                return t.payload.ixParameters || {};
            case OC:
                return {};
            case xC:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var fp = {};
    Pe(fp, {
        default: () => CC
    });
    var cp, lp, RC, CC, dp = ve( () => {
        "use strict";
        cp = le(vi());
        ms();
        Gs();
        Ws();
        lp = le(bt());
        ap();
        up();
        ({ixElements: RC} = lp.IX2ElementsReducer),
        CC = (0,
        cp.combineReducers)({
            ixData: ys,
            ixRequest: Xs,
            ixSession: Us,
            ixElements: RC,
            ixInstances: op,
            ixParameters: sp
        })
    }
    );
    var gp = f( (lk, pp) => {
        var LC = lt()
          , PC = be()
          , NC = it()
          , DC = "[object String]";
        function MC(e) {
            return typeof e == "string" || !PC(e) && NC(e) && LC(e) == DC
        }
        pp.exports = MC
    }
    );
    var vp = f( (fk, hp) => {
        var FC = Bi()
          , qC = FC("length");
        hp.exports = qC
    }
    );
    var yp = f( (dk, Ep) => {
        var kC = "\\ud800-\\udfff"
          , XC = "\\u0300-\\u036f"
          , GC = "\\ufe20-\\ufe2f"
          , VC = "\\u20d0-\\u20ff"
          , UC = XC + GC + VC
          , WC = "\\ufe0e\\ufe0f"
          , BC = "\\u200d"
          , HC = RegExp("[" + BC + kC + UC + WC + "]");
        function zC(e) {
            return HC.test(e)
        }
        Ep.exports = zC
    }
    );
    var Op = f( (pk, Sp) => {
        var _p = "\\ud800-\\udfff"
          , KC = "\\u0300-\\u036f"
          , jC = "\\ufe20-\\ufe2f"
          , YC = "\\u20d0-\\u20ff"
          , QC = KC + jC + YC
          , $C = "\\ufe0e\\ufe0f"
          , ZC = "[" + _p + "]"
          , xo = "[" + QC + "]"
          , Ro = "\\ud83c[\\udffb-\\udfff]"
          , JC = "(?:" + xo + "|" + Ro + ")"
          , Ip = "[^" + _p + "]"
          , Tp = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , bp = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , eL = "\\u200d"
          , Ap = JC + "?"
          , wp = "[" + $C + "]?"
          , tL = "(?:" + eL + "(?:" + [Ip, Tp, bp].join("|") + ")" + wp + Ap + ")*"
          , rL = wp + Ap + tL
          , nL = "(?:" + [Ip + xo + "?", xo, Tp, bp, ZC].join("|") + ")"
          , mp = RegExp(Ro + "(?=" + Ro + ")|" + nL + rL, "g");
        function iL(e) {
            for (var t = mp.lastIndex = 0; mp.test(e); )
                ++t;
            return t
        }
        Sp.exports = iL
    }
    );
    var Rp = f( (gk, xp) => {
        var oL = vp()
          , aL = yp()
          , sL = Op();
        function uL(e) {
            return aL(e) ? sL(e) : oL(e)
        }
        xp.exports = uL
    }
    );
    var Lp = f( (hk, Cp) => {
        var cL = en()
          , lL = tn()
          , fL = yt()
          , dL = gp()
          , pL = Rp()
          , gL = "[object Map]"
          , hL = "[object Set]";
        function vL(e) {
            if (e == null)
                return 0;
            if (fL(e))
                return dL(e) ? pL(e) : e.length;
            var t = lL(e);
            return t == gL || t == hL ? e.size : cL(e).length
        }
        Cp.exports = vL
    }
    );
    var Np = f( (vk, Pp) => {
        var EL = "Expected a function";
        function yL(e) {
            if (typeof e != "function")
                throw new TypeError(EL);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Pp.exports = yL
    }
    );
    var Co = f( (Ek, Dp) => {
        var mL = ft()
          , _L = function() {
            try {
                var e = mL(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        Dp.exports = _L
    }
    );
    var Lo = f( (yk, Fp) => {
        var Mp = Co();
        function IL(e, t, r) {
            t == "__proto__" && Mp ? Mp(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        Fp.exports = IL
    }
    );
    var kp = f( (mk, qp) => {
        var TL = Lo()
          , bL = Br()
          , AL = Object.prototype
          , wL = AL.hasOwnProperty;
        function SL(e, t, r) {
            var n = e[t];
            (!(wL.call(e, t) && bL(n, r)) || r === void 0 && !(t in e)) && TL(e, t, r)
        }
        qp.exports = SL
    }
    );
    var Vp = f( (_k, Gp) => {
        var OL = kp()
          , xL = pr()
          , RL = Qr()
          , Xp = Je()
          , CL = kt();
        function LL(e, t, r, n) {
            if (!Xp(e))
                return e;
            t = xL(t, e);
            for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
                var u = CL(t[i])
                  , l = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype")
                    return e;
                if (i != a) {
                    var y = s[u];
                    l = n ? n(y, u, s) : void 0,
                    l === void 0 && (l = Xp(y) ? y : RL(t[i + 1]) ? [] : {})
                }
                OL(s, u, l),
                s = s[u]
            }
            return e
        }
        Gp.exports = LL
    }
    );
    var Wp = f( (Ik, Up) => {
        var PL = on()
          , NL = Vp()
          , DL = pr();
        function ML(e, t, r) {
            for (var n = -1, i = t.length, o = {}; ++n < i; ) {
                var a = t[n]
                  , s = PL(e, a);
                r(s, a) && NL(o, DL(a, e), s)
            }
            return o
        }
        Up.exports = ML
    }
    );
    var Hp = f( (Tk, Bp) => {
        var FL = jr()
          , qL = ni()
          , kL = Ri()
          , XL = xi()
          , GL = Object.getOwnPropertySymbols
          , VL = GL ? function(e) {
            for (var t = []; e; )
                FL(t, kL(e)),
                e = qL(e);
            return t
        }
        : XL;
        Bp.exports = VL
    }
    );
    var Kp = f( (bk, zp) => {
        function UL(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        zp.exports = UL
    }
    );
    var Yp = f( (Ak, jp) => {
        var WL = Je()
          , BL = Jr()
          , HL = Kp()
          , zL = Object.prototype
          , KL = zL.hasOwnProperty;
        function jL(e) {
            if (!WL(e))
                return HL(e);
            var t = BL(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !KL.call(e, n)) || r.push(n);
            return r
        }
        jp.exports = jL
    }
    );
    var $p = f( (wk, Qp) => {
        var YL = Li()
          , QL = Yp()
          , $L = yt();
        function ZL(e) {
            return $L(e) ? YL(e, !0) : QL(e)
        }
        Qp.exports = ZL
    }
    );
    var Jp = f( (Sk, Zp) => {
        var JL = Oi()
          , eP = Hp()
          , tP = $p();
        function rP(e) {
            return JL(e, tP, eP)
        }
        Zp.exports = rP
    }
    );
    var tg = f( (Ok, eg) => {
        var nP = Wi()
          , iP = dt()
          , oP = Wp()
          , aP = Jp();
        function sP(e, t) {
            if (e == null)
                return {};
            var r = nP(aP(e), function(n) {
                return [n]
            });
            return t = iP(t),
            oP(e, r, function(n, i) {
                return t(n, i[0])
            })
        }
        eg.exports = sP
    }
    );
    var ng = f( (xk, rg) => {
        var uP = dt()
          , cP = Np()
          , lP = tg();
        function fP(e, t) {
            return lP(e, cP(uP(t)))
        }
        rg.exports = fP
    }
    );
    var og = f( (Rk, ig) => {
        var dP = en()
          , pP = tn()
          , gP = sr()
          , hP = be()
          , vP = yt()
          , EP = Yr()
          , yP = Jr()
          , mP = Zr()
          , _P = "[object Map]"
          , IP = "[object Set]"
          , TP = Object.prototype
          , bP = TP.hasOwnProperty;
        function AP(e) {
            if (e == null)
                return !0;
            if (vP(e) && (hP(e) || typeof e == "string" || typeof e.splice == "function" || EP(e) || mP(e) || gP(e)))
                return !e.length;
            var t = pP(e);
            if (t == _P || t == IP)
                return !e.size;
            if (yP(e))
                return !dP(e).length;
            for (var r in e)
                if (bP.call(e, r))
                    return !1;
            return !0
        }
        ig.exports = AP
    }
    );
    var sg = f( (Ck, ag) => {
        var wP = Lo()
          , SP = Eo()
          , OP = dt();
        function xP(e, t) {
            var r = {};
            return t = OP(t, 3),
            SP(e, function(n, i, o) {
                wP(r, i, t(n, i, o))
            }),
            r
        }
        ag.exports = xP
    }
    );
    var cg = f( (Lk, ug) => {
        function RP(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        ug.exports = RP
    }
    );
    var fg = f( (Pk, lg) => {
        var CP = sn();
        function LP(e) {
            return typeof e == "function" ? e : CP
        }
        lg.exports = LP
    }
    );
    var pg = f( (Nk, dg) => {
        var PP = cg()
          , NP = yo()
          , DP = fg()
          , MP = be();
        function FP(e, t) {
            var r = MP(e) ? PP : NP;
            return r(e, DP(t))
        }
        dg.exports = FP
    }
    );
    var hg = f( (Dk, gg) => {
        var qP = Be()
          , kP = function() {
            return qP.Date.now()
        };
        gg.exports = kP
    }
    );
    var yg = f( (Mk, Eg) => {
        var XP = Je()
          , Po = hg()
          , vg = un()
          , GP = "Expected a function"
          , VP = Math.max
          , UP = Math.min;
        function WP(e, t, r) {
            var n, i, o, a, s, u, l = 0, y = !1, h = !1, p = !0;
            if (typeof e != "function")
                throw new TypeError(GP);
            t = vg(t) || 0,
            XP(r) && (y = !!r.leading,
            h = "maxWait"in r,
            o = h ? VP(vg(r.maxWait) || 0, t) : o,
            p = "trailing"in r ? !!r.trailing : p);
            function v(N) {
                var W = n
                  , H = i;
                return n = i = void 0,
                l = N,
                a = e.apply(H, W),
                a
            }
            function T(N) {
                return l = N,
                s = setTimeout(w, t),
                y ? v(N) : a
            }
            function A(N) {
                var W = N - u
                  , H = N - l
                  , j = t - W;
                return h ? UP(j, o - H) : j
            }
            function R(N) {
                var W = N - u
                  , H = N - l;
                return u === void 0 || W >= t || W < 0 || h && H >= o
            }
            function w() {
                var N = Po();
                if (R(N))
                    return P(N);
                s = setTimeout(w, A(N))
            }
            function P(N) {
                return s = void 0,
                p && n ? v(N) : (n = i = void 0,
                a)
            }
            function C() {
                s !== void 0 && clearTimeout(s),
                l = 0,
                n = u = i = s = void 0
            }
            function M() {
                return s === void 0 ? a : P(Po())
            }
            function D() {
                var N = Po()
                  , W = R(N);
                if (n = arguments,
                i = this,
                u = N,
                W) {
                    if (s === void 0)
                        return T(u);
                    if (h)
                        return clearTimeout(s),
                        s = setTimeout(w, t),
                        v(u)
                }
                return s === void 0 && (s = setTimeout(w, t)),
                a
            }
            return D.cancel = C,
            D.flush = M,
            D
        }
        Eg.exports = WP
    }
    );
    var _g = f( (Fk, mg) => {
        var BP = yg()
          , HP = Je()
          , zP = "Expected a function";
        function KP(e, t, r) {
            var n = !0
              , i = !0;
            if (typeof e != "function")
                throw new TypeError(zP);
            return HP(r) && (n = "leading"in r ? !!r.leading : n,
            i = "trailing"in r ? !!r.trailing : i),
            BP(e, t, {
                leading: n,
                maxWait: t,
                trailing: i
            })
        }
        mg.exports = KP
    }
    );
    var Tg = {};
    Pe(Tg, {
        actionListPlaybackChanged: () => Qt,
        animationFrameChanged: () => Sn,
        clearRequested: () => yN,
        elementStateChanged: () => Go,
        eventListenerAdded: () => wn,
        eventStateChanged: () => qo,
        instanceAdded: () => ko,
        instanceRemoved: () => Xo,
        instanceStarted: () => On,
        mediaQueriesDefined: () => Uo,
        parameterChanged: () => Yt,
        playbackRequested: () => vN,
        previewRequested: () => hN,
        rawDataImported: () => No,
        sessionInitialized: () => Do,
        sessionStarted: () => Mo,
        sessionStopped: () => Fo,
        stopRequested: () => EN,
        testFrameRendered: () => mN,
        viewportWidthChanged: () => Vo
    });
    var Ig, jP, YP, QP, $P, ZP, JP, eN, tN, rN, nN, iN, oN, aN, sN, uN, cN, lN, fN, dN, pN, gN, No, Do, Mo, Fo, hN, vN, EN, yN, wn, mN, qo, Sn, Yt, ko, On, Xo, Go, Qt, Vo, Uo, xn = ve( () => {
        "use strict";
        De();
        Ig = le(bt()),
        {IX2_RAW_DATA_IMPORTED: jP, IX2_SESSION_INITIALIZED: YP, IX2_SESSION_STARTED: QP, IX2_SESSION_STOPPED: $P, IX2_PREVIEW_REQUESTED: ZP, IX2_PLAYBACK_REQUESTED: JP, IX2_STOP_REQUESTED: eN, IX2_CLEAR_REQUESTED: tN, IX2_EVENT_LISTENER_ADDED: rN, IX2_TEST_FRAME_RENDERED: nN, IX2_EVENT_STATE_CHANGED: iN, IX2_ANIMATION_FRAME_CHANGED: oN, IX2_PARAMETER_CHANGED: aN, IX2_INSTANCE_ADDED: sN, IX2_INSTANCE_STARTED: uN, IX2_INSTANCE_REMOVED: cN, IX2_ELEMENT_STATE_CHANGED: lN, IX2_ACTION_LIST_PLAYBACK_CHANGED: fN, IX2_VIEWPORT_WIDTH_CHANGED: dN, IX2_MEDIA_QUERIES_DEFINED: pN} = Te,
        {reifyState: gN} = Ig.IX2VanillaUtils,
        No = e => ({
            type: jP,
            payload: {
                ...gN(e)
            }
        }),
        Do = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: YP,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        Mo = () => ({
            type: QP
        }),
        Fo = () => ({
            type: $P
        }),
        hN = ({rawData: e, defer: t}) => ({
            type: ZP,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        vN = ({actionTypeId: e=Ne.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: i, immediate: o, testManual: a, verbose: s, rawData: u}) => ({
            type: JP,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: i,
                immediate: o,
                verbose: s,
                rawData: u
            }
        }),
        EN = e => ({
            type: eN,
            payload: {
                actionListId: e
            }
        }),
        yN = () => ({
            type: tN
        }),
        wn = (e, t) => ({
            type: rN,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        mN = (e=1) => ({
            type: nN,
            payload: {
                step: e
            }
        }),
        qo = (e, t) => ({
            type: iN,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        Sn = (e, t) => ({
            type: oN,
            payload: {
                now: e,
                parameters: t
            }
        }),
        Yt = (e, t) => ({
            type: aN,
            payload: {
                key: e,
                value: t
            }
        }),
        ko = e => ({
            type: sN,
            payload: {
                ...e
            }
        }),
        On = (e, t) => ({
            type: uN,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        Xo = e => ({
            type: cN,
            payload: {
                instanceId: e
            }
        }),
        Go = (e, t, r, n) => ({
            type: lN,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }),
        Qt = ({actionListId: e, isPlaying: t}) => ({
            type: fN,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        Vo = ({width: e, mediaQueries: t}) => ({
            type: dN,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        Uo = () => ({
            type: pN
        })
    }
    );
    var Re = {};
    Pe(Re, {
        elementContains: () => Ho,
        getChildElements: () => RN,
        getClosestElement: () => Ar,
        getProperty: () => AN,
        getQuerySelector: () => Bo,
        getRefType: () => zo,
        getSiblingElements: () => CN,
        getStyle: () => bN,
        getValidDocument: () => SN,
        isSiblingNode: () => xN,
        matchSelector: () => wN,
        queryDocument: () => ON,
        setStyle: () => TN
    });
    function TN(e, t, r) {
        e.style[t] = r
    }
    function bN(e, t) {
        return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t]
    }
    function AN(e, t) {
        return e[t]
    }
    function wN(e) {
        return t => t[Wo](e)
    }
    function Bo({id: e, selector: t}) {
        if (e) {
            let r = e;
            if (e.indexOf(bg) !== -1) {
                let n = e.split(bg)
                  , i = n[0];
                if (r = n[1],
                i !== document.documentElement.getAttribute(wg))
                    return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }
    function SN(e) {
        return e == null || e === document.documentElement.getAttribute(wg) ? document : null
    }
    function ON(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function Ho(e, t) {
        return e.contains(t)
    }
    function xN(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function RN(e) {
        let t = [];
        for (let r = 0, {length: n} = e || []; r < n; r++) {
            let {children: i} = e[r]
              , {length: o} = i;
            if (o)
                for (let a = 0; a < o; a++)
                    t.push(i[a])
        }
        return t
    }
    function CN(e=[]) {
        let t = []
          , r = [];
        for (let n = 0, {length: i} = e; n < i; n++) {
            let {parentNode: o} = e[n];
            if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
                continue;
            r.push(o);
            let a = o.firstElementChild;
            for (; a != null; )
                e.indexOf(a) === -1 && t.push(a),
                a = a.nextElementSibling
        }
        return t
    }
    function zo(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? _N : IN : null
    }
    var Ag, Wo, bg, _N, IN, wg, Ar, Sg = ve( () => {
        "use strict";
        Ag = le(bt());
        De();
        ({ELEMENT_MATCHES: Wo} = Ag.IX2BrowserSupport),
        {IX2_ID_DELIMITER: bg, HTML_ELEMENT: _N, PLAIN_OBJECT: IN, WF_PAGE: wg} = we;
        Ar = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[Wo] && r[Wo](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    }
    );
    var Ko = f( (Xk, xg) => {
        var LN = Je()
          , Og = Object.create
          , PN = function() {
            function e() {}
            return function(t) {
                if (!LN(t))
                    return {};
                if (Og)
                    return Og(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        xg.exports = PN
    }
    );
    var Rn = f( (Gk, Rg) => {
        function NN() {}
        Rg.exports = NN
    }
    );
    var Ln = f( (Vk, Cg) => {
        var DN = Ko()
          , MN = Rn();
        function Cn(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        Cn.prototype = DN(MN.prototype);
        Cn.prototype.constructor = Cn;
        Cg.exports = Cn
    }
    );
    var Dg = f( (Uk, Ng) => {
        var Lg = Ot()
          , FN = sr()
          , qN = be()
          , Pg = Lg ? Lg.isConcatSpreadable : void 0;
        function kN(e) {
            return qN(e) || FN(e) || !!(Pg && e && e[Pg])
        }
        Ng.exports = kN
    }
    );
    var qg = f( (Wk, Fg) => {
        var XN = jr()
          , GN = Dg();
        function Mg(e, t, r, n, i) {
            var o = -1
              , a = e.length;
            for (r || (r = GN),
            i || (i = []); ++o < a; ) {
                var s = e[o];
                t > 0 && r(s) ? t > 1 ? Mg(s, t - 1, r, n, i) : XN(i, s) : n || (i[i.length] = s)
            }
            return i
        }
        Fg.exports = Mg
    }
    );
    var Xg = f( (Bk, kg) => {
        var VN = qg();
        function UN(e) {
            var t = e == null ? 0 : e.length;
            return t ? VN(e, 1) : []
        }
        kg.exports = UN
    }
    );
    var Vg = f( (Hk, Gg) => {
        function WN(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        Gg.exports = WN
    }
    );
    var Bg = f( (zk, Wg) => {
        var BN = Vg()
          , Ug = Math.max;
        function HN(e, t, r) {
            return t = Ug(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, i = -1, o = Ug(n.length - t, 0), a = Array(o); ++i < o; )
                    a[i] = n[t + i];
                i = -1;
                for (var s = Array(t + 1); ++i < t; )
                    s[i] = n[i];
                return s[t] = r(a),
                BN(e, this, s)
            }
        }
        Wg.exports = HN
    }
    );
    var zg = f( (Kk, Hg) => {
        function zN(e) {
            return function() {
                return e
            }
        }
        Hg.exports = zN
    }
    );
    var Yg = f( (jk, jg) => {
        var KN = zg()
          , Kg = Co()
          , jN = sn()
          , YN = Kg ? function(e, t) {
            return Kg(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: KN(t),
                writable: !0
            })
        }
        : jN;
        jg.exports = YN
    }
    );
    var $g = f( (Yk, Qg) => {
        var QN = 800
          , $N = 16
          , ZN = Date.now;
        function JN(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = ZN()
                  , i = $N - (n - r);
                if (r = n,
                i > 0) {
                    if (++t >= QN)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        Qg.exports = JN
    }
    );
    var Jg = f( (Qk, Zg) => {
        var eD = Yg()
          , tD = $g()
          , rD = tD(eD);
        Zg.exports = rD
    }
    );
    var th = f( ($k, eh) => {
        var nD = Xg()
          , iD = Bg()
          , oD = Jg();
        function aD(e) {
            return oD(iD(e, void 0, nD), e + "")
        }
        eh.exports = aD
    }
    );
    var ih = f( (Zk, nh) => {
        var rh = Pi()
          , sD = rh && new rh;
        nh.exports = sD
    }
    );
    var ah = f( (Jk, oh) => {
        function uD() {}
        oh.exports = uD
    }
    );
    var jo = f( (eX, uh) => {
        var sh = ih()
          , cD = ah()
          , lD = sh ? function(e) {
            return sh.get(e)
        }
        : cD;
        uh.exports = lD
    }
    );
    var lh = f( (tX, ch) => {
        var fD = {};
        ch.exports = fD
    }
    );
    var Yo = f( (rX, dh) => {
        var fh = lh()
          , dD = Object.prototype
          , pD = dD.hasOwnProperty;
        function gD(e) {
            for (var t = e.name + "", r = fh[t], n = pD.call(fh, t) ? r.length : 0; n--; ) {
                var i = r[n]
                  , o = i.func;
                if (o == null || o == e)
                    return i.name
            }
            return t
        }
        dh.exports = gD
    }
    );
    var Nn = f( (nX, ph) => {
        var hD = Ko()
          , vD = Rn()
          , ED = 4294967295;
        function Pn(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = ED,
            this.__views__ = []
        }
        Pn.prototype = hD(vD.prototype);
        Pn.prototype.constructor = Pn;
        ph.exports = Pn
    }
    );
    var hh = f( (iX, gh) => {
        function yD(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        gh.exports = yD
    }
    );
    var Eh = f( (oX, vh) => {
        var mD = Nn()
          , _D = Ln()
          , ID = hh();
        function TD(e) {
            if (e instanceof mD)
                return e.clone();
            var t = new _D(e.__wrapped__,e.__chain__);
            return t.__actions__ = ID(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        vh.exports = TD
    }
    );
    var _h = f( (aX, mh) => {
        var bD = Nn()
          , yh = Ln()
          , AD = Rn()
          , wD = be()
          , SD = it()
          , OD = Eh()
          , xD = Object.prototype
          , RD = xD.hasOwnProperty;
        function Dn(e) {
            if (SD(e) && !wD(e) && !(e instanceof bD)) {
                if (e instanceof yh)
                    return e;
                if (RD.call(e, "__wrapped__"))
                    return OD(e)
            }
            return new yh(e)
        }
        Dn.prototype = AD.prototype;
        Dn.prototype.constructor = Dn;
        mh.exports = Dn
    }
    );
    var Th = f( (sX, Ih) => {
        var CD = Nn()
          , LD = jo()
          , PD = Yo()
          , ND = _h();
        function DD(e) {
            var t = PD(e)
              , r = ND[t];
            if (typeof r != "function" || !(t in CD.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = LD(r);
            return !!n && e === n[0]
        }
        Ih.exports = DD
    }
    );
    var Sh = f( (uX, wh) => {
        var bh = Ln()
          , MD = th()
          , FD = jo()
          , Qo = Yo()
          , qD = be()
          , Ah = Th()
          , kD = "Expected a function"
          , XD = 8
          , GD = 32
          , VD = 128
          , UD = 256;
        function WD(e) {
            return MD(function(t) {
                var r = t.length
                  , n = r
                  , i = bh.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var o = t[n];
                    if (typeof o != "function")
                        throw new TypeError(kD);
                    if (i && !a && Qo(o) == "wrapper")
                        var a = new bh([],!0)
                }
                for (n = a ? n : r; ++n < r; ) {
                    o = t[n];
                    var s = Qo(o)
                      , u = s == "wrapper" ? FD(o) : void 0;
                    u && Ah(u[0]) && u[1] == (VD | XD | GD | UD) && !u[4].length && u[9] == 1 ? a = a[Qo(u[0])].apply(a, u[3]) : a = o.length == 1 && Ah(o) ? a[s]() : a.thru(o)
                }
                return function() {
                    var l = arguments
                      , y = l[0];
                    if (a && l.length == 1 && qD(y))
                        return a.plant(y).value();
                    for (var h = 0, p = r ? t[h].apply(this, l) : y; ++h < r; )
                        p = t[h].call(this, p);
                    return p
                }
            })
        }
        wh.exports = WD
    }
    );
    var xh = f( (cX, Oh) => {
        var BD = Sh()
          , HD = BD();
        Oh.exports = HD
    }
    );
    var Ch = f( (lX, Rh) => {
        function zD(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        Rh.exports = zD
    }
    );
    var Ph = f( (fX, Lh) => {
        var KD = Ch()
          , $o = un();
        function jD(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = $o(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = $o(t),
            t = t === t ? t : 0),
            KD($o(e), t, r)
        }
        Lh.exports = jD
    }
    );
    var Vh, Uh, Wh, Bh, YD, QD, $D, ZD, JD, eM, tM, rM, nM, iM, oM, aM, sM, uM, cM, Hh, zh, lM, fM, dM, Kh, pM, gM, jh, hM, Zo, Yh, Nh, Dh, Qh, Sr, vM, rt, $h, EM, Fe, Ke, Or, Zh, Jo, Mh, ea, yM, wr, mM, _M, IM, Jh, Fh, TM, qh, bM, AM, wM, kh, Mn, Fn, Xh, Gh, ev, tv = ve( () => {
        "use strict";
        Vh = le(xh()),
        Uh = le(an()),
        Wh = le(Ph());
        De();
        ta();
        xn();
        Bh = le(bt()),
        {MOUSE_CLICK: YD, MOUSE_SECOND_CLICK: QD, MOUSE_DOWN: $D, MOUSE_UP: ZD, MOUSE_OVER: JD, MOUSE_OUT: eM, DROPDOWN_CLOSE: tM, DROPDOWN_OPEN: rM, SLIDER_ACTIVE: nM, SLIDER_INACTIVE: iM, TAB_ACTIVE: oM, TAB_INACTIVE: aM, NAVBAR_CLOSE: sM, NAVBAR_OPEN: uM, MOUSE_MOVE: cM, PAGE_SCROLL_DOWN: Hh, SCROLL_INTO_VIEW: zh, SCROLL_OUT_OF_VIEW: lM, PAGE_SCROLL_UP: fM, SCROLLING_IN_VIEW: dM, PAGE_FINISH: Kh, ECOMMERCE_CART_CLOSE: pM, ECOMMERCE_CART_OPEN: gM, PAGE_START: jh, PAGE_SCROLL: hM} = He,
        Zo = "COMPONENT_ACTIVE",
        Yh = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: Nh} = we,
        {getNamespacedParameterId: Dh} = Bh.IX2VanillaUtils,
        Qh = e => t => typeof t == "object" && e(t) ? !0 : t,
        Sr = Qh( ({element: e, nativeEvent: t}) => e === t.target),
        vM = Qh( ({element: e, nativeEvent: t}) => e.contains(t.target)),
        rt = (0,
        Vh.default)([Sr, vM]),
        $h = (e, t) => {
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , i = n[t];
                if (i && !yM[i.eventTypeId])
                    return i
            }
            return null
        }
        ,
        EM = ({store: e, event: t}) => {
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!$h(e, n)
        }
        ,
        Fe = ({store: e, event: t, element: r, eventStateKey: n}, i) => {
            let {action: o, id: a} = t
              , {actionListId: s, autoStopEventId: u} = o.config
              , l = $h(e, u);
            return l && $t({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Nh + n.split(Nh)[1],
                actionListId: (0,
                Uh.default)(l, "action.config.actionListId")
            }),
            $t({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            xr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            i
        }
        ,
        Ke = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
        Or = {
            handler: Ke(rt, Fe)
        },
        Zh = {
            ...Or,
            types: [Zo, Yh].join(" ")
        },
        Jo = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        Mh = "mouseover mouseout",
        ea = {
            types: Jo
        },
        yM = {
            PAGE_START: jh,
            PAGE_FINISH: Kh
        },
        wr = ( () => {
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                Wh.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        mM = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        _M = ({element: e, nativeEvent: t}) => {
            let {type: r, target: n, relatedTarget: i} = t
              , o = e.contains(n);
            if (r === "mouseover" && o)
                return !0;
            let a = e.contains(i);
            return !!(r === "mouseout" && o && a)
        }
        ,
        IM = e => {
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: i} = wr()
              , o = r.scrollOffsetValue
              , u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
            return mM(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: i - u
            })
        }
        ,
        Jh = e => (t, r) => {
            let {type: n} = t.nativeEvent
              , i = [Zo, Yh].indexOf(n) !== -1 ? n === Zo : r.isActive
              , o = {
                ...r,
                isActive: i
            };
            return (!r || o.isActive !== r.isActive) && e(t, o) || o
        }
        ,
        Fh = e => (t, r) => {
            let n = {
                elementHovered: _M(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
        ,
        TM = e => (t, r) => {
            let n = {
                ...r,
                elementVisible: IM(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
        ,
        qh = e => (t, r={}) => {
            let {stiffScrollTop: n, scrollHeight: i, innerHeight: o} = wr()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: u, scrollOffsetUnit: l} = a
              , y = l === "PX"
              , h = i - o
              , p = Number((n / h).toFixed(2));
            if (r && r.percentTop === p)
                return r;
            let v = (y ? u : o * (u || 0) / 100) / h, T, A, R = 0;
            r && (T = p > r.percentTop,
            A = r.scrollingDown !== T,
            R = A ? p : r.anchorTop);
            let w = s === Hh ? p >= R + v : p <= R - v
              , P = {
                ...r,
                percentTop: p,
                inBounds: w,
                anchorTop: R,
                scrollingDown: T
            };
            return r && w && (A || P.inBounds !== r.inBounds) && e(t, P) || P
        }
        ,
        bM = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        AM = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
        ,
        wM = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
        ,
        kh = e => (t, r={
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
        ,
        Mn = (e=!0) => ({
            ...Zh,
            handler: Ke(e ? rt : Sr, Jh( (t, r) => r.isActive ? Or.handler(t, r) : r))
        }),
        Fn = (e=!0) => ({
            ...Zh,
            handler: Ke(e ? rt : Sr, Jh( (t, r) => r.isActive ? r : Or.handler(t, r)))
        }),
        Xh = {
            ...ea,
            handler: TM( (e, t) => {
                let {elementVisible: r} = t
                  , {event: n, store: i} = e
                  , {ixData: o} = i.getState()
                  , {events: a} = o;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === zh === r ? (Fe(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        Gh = .05,
        ev = {
            [nM]: Mn(),
            [iM]: Fn(),
            [rM]: Mn(),
            [tM]: Fn(),
            [uM]: Mn(!1),
            [sM]: Fn(!1),
            [oM]: Mn(),
            [aM]: Fn(),
            [gM]: {
                types: "ecommerce-cart-open",
                handler: Ke(rt, Fe)
            },
            [pM]: {
                types: "ecommerce-cart-close",
                handler: Ke(rt, Fe)
            },
            [YD]: {
                types: "click",
                handler: Ke(rt, kh( (e, {clickCount: t}) => {
                    EM(e) ? t === 1 && Fe(e) : Fe(e)
                }
                ))
            },
            [QD]: {
                types: "click",
                handler: Ke(rt, kh( (e, {clickCount: t}) => {
                    t === 2 && Fe(e)
                }
                ))
            },
            [$D]: {
                ...Or,
                types: "mousedown"
            },
            [ZD]: {
                ...Or,
                types: "mouseup"
            },
            [JD]: {
                types: Mh,
                handler: Ke(rt, Fh( (e, t) => {
                    t.elementHovered && Fe(e)
                }
                ))
            },
            [eM]: {
                types: Mh,
                handler: Ke(rt, Fh( (e, t) => {
                    t.elementHovered || Fe(e)
                }
                ))
            },
            [cM]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: i}, o={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: u, reverse: l, restingState: y=0} = r
                      , {clientX: h=o.clientX, clientY: p=o.clientY, pageX: v=o.pageX, pageY: T=o.pageY} = n
                      , A = s === "X_AXIS"
                      , R = n.type === "mouseout"
                      , w = y / 100
                      , P = u
                      , C = !1;
                    switch (a) {
                    case Ze.VIEWPORT:
                        {
                            w = A ? Math.min(h, window.innerWidth) / window.innerWidth : Math.min(p, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case Ze.PAGE:
                        {
                            let {scrollLeft: M, scrollTop: D, scrollWidth: N, scrollHeight: W} = wr();
                            w = A ? Math.min(M + v, N) / N : Math.min(D + T, W) / W;
                            break
                        }
                    case Ze.ELEMENT:
                    default:
                        {
                            P = Dh(i, u);
                            let M = n.type.indexOf("mouse") === 0;
                            if (M && rt({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let D = t.getBoundingClientRect()
                              , {left: N, top: W, width: H, height: j} = D;
                            if (!M && !bM({
                                left: h,
                                top: p
                            }, D))
                                break;
                            C = !0,
                            w = A ? (h - N) / H : (p - W) / j;
                            break
                        }
                    }
                    return R && (w > 1 - Gh || w < Gh) && (w = Math.round(w)),
                    (a !== Ze.ELEMENT || C || C !== o.elementHovered) && (w = l ? 1 - w : w,
                    e.dispatch(Yt(P, w))),
                    {
                        elementHovered: C,
                        clientX: h,
                        clientY: p,
                        pageX: v,
                        pageY: T
                    }
                }
            },
            [hM]: {
                types: Jo,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: i, scrollHeight: o, clientHeight: a} = wr()
                      , s = i / (o - a);
                    s = n ? 1 - s : s,
                    e.dispatch(Yt(r, s))
                }
            },
            [dM]: {
                types: Jo,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, i={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: o, scrollTop: a, scrollWidth: s, scrollHeight: u, clientHeight: l} = wr()
                      , {basedOn: y, selectedAxis: h, continuousParameterGroupId: p, startsEntering: v, startsExiting: T, addEndOffset: A, addStartOffset: R, addOffsetValue: w=0, endOffsetValue: P=0} = r
                      , C = h === "X_AXIS";
                    if (y === Ze.VIEWPORT) {
                        let M = C ? o / s : a / u;
                        return M !== i.scrollPercent && t.dispatch(Yt(p, M)),
                        {
                            scrollPercent: M
                        }
                    } else {
                        let M = Dh(n, p)
                          , D = e.getBoundingClientRect()
                          , N = (R ? w : 0) / 100
                          , W = (A ? P : 0) / 100;
                        N = v ? N : 1 - N,
                        W = T ? W : 1 - W;
                        let H = D.top + Math.min(D.height * N, l)
                          , J = D.top + D.height * W - H
                          , re = Math.min(l + J, u)
                          , O = Math.min(Math.max(0, l - H), re) / re;
                        return O !== i.scrollPercent && t.dispatch(Yt(M, O)),
                        {
                            scrollPercent: O
                        }
                    }
                }
            },
            [zh]: Xh,
            [lM]: Xh,
            [Hh]: {
                ...ea,
                handler: qh( (e, t) => {
                    t.scrollingDown && Fe(e)
                }
                )
            },
            [fM]: {
                ...ea,
                handler: qh( (e, t) => {
                    t.scrollingDown || Fe(e)
                }
                )
            },
            [Kh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Sr, AM(Fe))
            },
            [jh]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: Ke(Sr, wM(Fe))
            }
        }
    }
    );
    var yv = {};
    Pe(yv, {
        observeRequests: () => HM,
        startActionGroup: () => xr,
        startEngine: () => Un,
        stopActionGroup: () => $t,
        stopAllActionGroups: () => hv,
        stopEngine: () => Wn
    });
    function HM(e) {
        At({
            store: e,
            select: ({ixRequest: t}) => t.preview,
            onChange: jM
        }),
        At({
            store: e,
            select: ({ixRequest: t}) => t.playback,
            onChange: YM
        }),
        At({
            store: e,
            select: ({ixRequest: t}) => t.stop,
            onChange: QM
        }),
        At({
            store: e,
            select: ({ixRequest: t}) => t.clear,
            onChange: $M
        })
    }
    function zM(e) {
        At({
            store: e,
            select: ({ixSession: t}) => t.mediaQueryKey,
            onChange: () => {
                Wn(e),
                fv({
                    store: e,
                    elementApi: Re
                }),
                Un({
                    store: e,
                    allowEvents: !0
                }),
                dv()
            }
        })
    }
    function KM(e, t) {
        let r = At({
            store: e,
            select: ({ixSession: n}) => n.tick,
            onChange: n => {
                t(n),
                r()
            }
        })
    }
    function jM({rawData: e, defer: t}, r) {
        let n = () => {
            Un({
                store: r,
                rawData: e,
                allowEvents: !0
            }),
            dv()
        }
        ;
        t ? setTimeout(n, 0) : n()
    }
    function dv() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function YM(e, t) {
        let {actionTypeId: r, actionListId: n, actionItemId: i, eventId: o, allowEvents: a, immediate: s, testManual: u, verbose: l=!0} = e
          , {rawData: y} = e;
        if (n && i && y && s) {
            let h = y.actionLists[n];
            h && (y = DM({
                actionList: h,
                actionItemId: i,
                rawData: y
            }))
        }
        if (Un({
            store: t,
            rawData: y,
            allowEvents: a,
            testManual: u
        }),
        n && r === Ne.GENERAL_START_ACTION || ra(r)) {
            $t({
                store: t,
                actionListId: n
            }),
            gv({
                store: t,
                actionListId: n,
                eventId: o
            });
            let h = xr({
                store: t,
                eventId: o,
                actionListId: n,
                immediate: s,
                verbose: l
            });
            l && h && t.dispatch(Qt({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }
    function QM({actionListId: e}, t) {
        e ? $t({
            store: t,
            actionListId: e
        }) : hv({
            store: t
        }),
        Wn(t)
    }
    function $M(e, t) {
        Wn(t),
        fv({
            store: t,
            elementApi: Re
        })
    }
    function Un({store: e, rawData: t, allowEvents: r, testManual: n}) {
        let {ixSession: i} = e.getState();
        t && e.dispatch(No(t)),
        i.active || (e.dispatch(Do({
            hasBoundaryNodes: !!document.querySelector(kn),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        r && (nF(e),
        ZM(),
        e.getState().ixSession.hasDefinedMediaQueries && zM(e)),
        e.dispatch(Mo()),
        JM(e, n))
    }
    function ZM() {
        let {documentElement: e} = document;
        e.className.indexOf(rv) === -1 && (e.className += ` ${rv}`)
    }
    function JM(e, t) {
        let r = n => {
            let {ixSession: i, ixParameters: o} = e.getState();
            i.active && (e.dispatch(Sn(n, o)),
            t ? KM(e, r) : requestAnimationFrame(r))
        }
        ;
        r(window.performance.now())
    }
    function Wn(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: r} = t;
            r.forEach(eF),
            kM(),
            e.dispatch(Fo())
        }
    }
    function eF({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function tF({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: i, actionListId: o, parameterGroup: a, smoothing: s, restingValue: u}) {
        let {ixData: l, ixSession: y} = e.getState()
          , {events: h} = l
          , p = h[n]
          , {eventTypeId: v} = p
          , T = {}
          , A = {}
          , R = []
          , {continuousActionGroups: w} = a
          , {id: P} = a;
        MM(v, i) && (P = FM(t, P));
        let C = y.hasBoundaryNodes && r ? Ar(r, kn) : null;
        w.forEach(M => {
            let {keyframe: D, actionItems: N} = M;
            N.forEach(W => {
                let {actionTypeId: H} = W
                  , {target: j} = W.config;
                if (!j)
                    return;
                let J = j.boundaryMode ? C : null
                  , re = XM(j) + na + H;
                if (A[re] = rF(A[re], D, W),
                !T[re]) {
                    T[re] = !0;
                    let {config: k} = W;
                    Xn({
                        config: k,
                        event: p,
                        eventTarget: r,
                        elementRoot: J,
                        elementApi: Re
                    }).forEach(O => {
                        R.push({
                            element: O,
                            key: re
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        R.forEach( ({element: M, key: D}) => {
            let N = A[D]
              , W = (0,
            ut.default)(N, "[0].actionItems[0]", {})
              , {actionTypeId: H} = W
              , j = Vn(H) ? oa(H)(M, W) : null
              , J = ia({
                element: M,
                actionItem: W,
                elementApi: Re
            }, j);
            aa({
                store: e,
                element: M,
                eventId: n,
                actionListId: o,
                actionItem: W,
                destination: J,
                continuous: !0,
                parameterId: P,
                actionGroups: N,
                smoothing: s,
                restingValue: u,
                pluginInstance: j
            })
        }
        )
    }
    function rF(e=[], t, r) {
        let n = [...e], i;
        return n.some( (o, a) => o.keyframe === t ? (i = a,
        !0) : !1),
        i == null && (i = n.length,
        n.push({
            keyframe: t,
            actionItems: []
        })),
        n[i].actionItems.push(r),
        n
    }
    function nF(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: r} = t;
        pv(e),
        (0,
        Zt.default)(r, (i, o) => {
            let a = ev[o];
            if (!a) {
                console.warn(`IX2 event type not configured: ${o}`);
                return
            }
            cF({
                logic: a,
                store: e,
                events: i
            })
        }
        );
        let {ixSession: n} = e.getState();
        n.eventListeners.length && oF(e)
    }
    function oF(e) {
        let t = () => {
            pv(e)
        }
        ;
        iF.forEach(r => {
            window.addEventListener(r, t),
            e.dispatch(wn(window, [r, t]))
        }
        ),
        t()
    }
    function pv(e) {
        let {ixSession: t, ixData: r} = e.getState()
          , n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {mediaQueries: i} = r;
            e.dispatch(Vo({
                width: n,
                mediaQueries: i
            }))
        }
    }
    function cF({logic: e, store: t, events: r}) {
        lF(r);
        let {types: n, handler: i} = e
          , {ixData: o} = t.getState()
          , {actionLists: a} = o
          , s = aF(r, uF);
        if (!(0,
        ov.default)(s))
            return;
        (0,
        Zt.default)(s, (h, p) => {
            let v = r[p]
              , {action: T, id: A, mediaQueries: R=o.mediaQueryKeys} = v
              , {actionListId: w} = T.config;
            GM(R, o.mediaQueryKeys) || t.dispatch(Uo()),
            T.actionTypeId === Ne.GENERAL_CONTINUOUS_ACTION && (Array.isArray(v.config) ? v.config : [v.config]).forEach(C => {
                let {continuousParameterGroupId: M} = C
                  , D = (0,
                ut.default)(a, `${w}.continuousParameterGroups`, [])
                  , N = (0,
                iv.default)(D, ({id: j}) => j === M)
                  , W = (C.smoothing || 0) / 100
                  , H = (C.restingState || 0) / 100;
                N && h.forEach( (j, J) => {
                    let re = A + na + J;
                    tF({
                        store: t,
                        eventStateKey: re,
                        eventTarget: j,
                        eventId: A,
                        eventConfig: C,
                        actionListId: w,
                        parameterGroup: N,
                        smoothing: W,
                        restingValue: H
                    })
                }
                )
            }
            ),
            (T.actionTypeId === Ne.GENERAL_START_ACTION || ra(T.actionTypeId)) && gv({
                store: t,
                actionListId: w,
                eventId: A
            })
        }
        );
        let u = h => {
            let {ixSession: p} = t.getState();
            sF(s, (v, T, A) => {
                let R = r[T]
                  , w = p.eventState[A]
                  , {action: P, mediaQueries: C=o.mediaQueryKeys} = R;
                if (!Gn(C, p.mediaQueryKey))
                    return;
                let M = (D={}) => {
                    let N = i({
                        store: t,
                        element: v,
                        event: R,
                        eventConfig: D,
                        nativeEvent: h,
                        eventStateKey: A
                    }, w);
                    VM(N, w) || t.dispatch(qo(A, N))
                }
                ;
                P.actionTypeId === Ne.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(R.config) ? R.config : [R.config]).forEach(M) : M()
            }
            )
        }
          , l = (0,
        cv.default)(u, BM)
          , y = ({target: h=document, types: p, throttle: v}) => {
            p.split(" ").filter(Boolean).forEach(T => {
                let A = v ? l : u;
                h.addEventListener(T, A),
                t.dispatch(wn(h, [T, A]))
            }
            )
        }
        ;
        Array.isArray(n) ? n.forEach(y) : typeof n == "string" && y(e)
    }
    function lF(e) {
        if (!WM)
            return;
        let t = {}
          , r = "";
        for (let n in e) {
            let {eventTypeId: i, target: o} = e[n]
              , a = Bo(o);
            t[a] || (i === He.MOUSE_CLICK || i === He.MOUSE_SECOND_CLICK) && (t[a] = !0,
            r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r,
            document.body.appendChild(n)
        }
    }
    function gv({store: e, actionListId: t, eventId: r}) {
        let {ixData: n, ixSession: i} = e.getState()
          , {actionLists: o, events: a} = n
          , s = a[r]
          , u = o[t];
        if (u && u.useFirstGroupAsInitialState) {
            let l = (0,
            ut.default)(u, "actionItemGroups[0].actionItems", [])
              , y = (0,
            ut.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!Gn(y, i.mediaQueryKey))
                return;
            l.forEach(h => {
                let {config: p, actionTypeId: v} = h
                  , T = p?.target?.useEventTarget === !0 && p?.target?.objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : p
                  , A = Xn({
                    config: T,
                    event: s,
                    elementApi: Re
                })
                  , R = Vn(v);
                A.forEach(w => {
                    let P = R ? oa(v)(w, h) : null;
                    aa({
                        destination: ia({
                            element: w,
                            actionItem: h,
                            elementApi: Re
                        }, P),
                        immediate: !0,
                        store: e,
                        element: w,
                        eventId: r,
                        actionItem: h,
                        actionListId: t,
                        pluginInstance: P
                    })
                }
                )
            }
            )
        }
    }
    function hv({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        Zt.default)(t, r => {
            if (!r.continuous) {
                let {actionListId: n, verbose: i} = r;
                sa(r, e),
                i && e.dispatch(Qt({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function $t({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i}) {
        let {ixInstances: o, ixSession: a} = e.getState()
          , s = a.hasBoundaryNodes && r ? Ar(r, kn) : null;
        (0,
        Zt.default)(o, u => {
            let l = (0,
            ut.default)(u, "actionItem.config.target.boundaryMode")
              , y = n ? u.eventStateKey === n : !0;
            if (u.actionListId === i && u.eventId === t && y) {
                if (s && l && !Ho(s, u.element))
                    return;
                sa(u, e),
                u.verbose && e.dispatch(Qt({
                    actionListId: i,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function xr({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: i, groupIndex: o=0, immediate: a, verbose: s}) {
        let {ixData: u, ixSession: l} = e.getState()
          , {events: y} = u
          , h = y[t] || {}
          , {mediaQueries: p=u.mediaQueryKeys} = h
          , v = (0,
        ut.default)(u, `actionLists.${i}`, {})
          , {actionItemGroups: T, useFirstGroupAsInitialState: A} = v;
        if (!T || !T.length)
            return !1;
        o >= T.length && (0,
        ut.default)(h, "config.loop") && (o = 0),
        o === 0 && A && o++;
        let w = (o === 0 || o === 1 && A) && ra(h.action?.actionTypeId) ? h.config.delay : void 0
          , P = (0,
        ut.default)(T, [o, "actionItems"], []);
        if (!P.length || !Gn(p, l.mediaQueryKey))
            return !1;
        let C = l.hasBoundaryNodes && r ? Ar(r, kn) : null
          , M = LM(P)
          , D = !1;
        return P.forEach( (N, W) => {
            let {config: H, actionTypeId: j} = N
              , J = Vn(j)
              , {target: re} = H;
            if (!re)
                return;
            let k = re.boundaryMode ? C : null;
            Xn({
                config: H,
                event: h,
                eventTarget: r,
                elementRoot: k,
                elementApi: Re
            }).forEach( (F, B) => {
                let U = J ? oa(j)(F, N) : null
                  , ee = J ? UM(j)(F, N) : null;
                D = !0;
                let ne = M === W && B === 0
                  , q = PM({
                    element: F,
                    actionItem: N
                })
                  , K = ia({
                    element: F,
                    actionItem: N,
                    elementApi: Re
                }, U);
                aa({
                    store: e,
                    element: F,
                    actionItem: N,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: i,
                    groupIndex: o,
                    isCarrier: ne,
                    computedStyle: q,
                    destination: K,
                    immediate: a,
                    verbose: s,
                    pluginInstance: U,
                    pluginDuration: ee,
                    instanceDelay: w
                })
            }
            )
        }
        ),
        D
    }
    function aa(e) {
        let {store: t, computedStyle: r, ...n} = e, {element: i, actionItem: o, immediate: a, pluginInstance: s, continuous: u, restingValue: l, eventId: y} = n, h = !u, p = RM(), {ixElements: v, ixSession: T, ixData: A} = t.getState(), R = xM(v, i), {refState: w} = v[R] || {}, P = zo(i), C = T.reducedMotion && mi[o.actionTypeId], M;
        if (C && u)
            switch (A.events[y]?.eventTypeId) {
            case He.MOUSE_MOVE:
            case He.MOUSE_MOVE_IN_VIEWPORT:
                M = l;
                break;
            default:
                M = .5;
                break
            }
        let D = NM(i, w, r, o, Re, s);
        if (t.dispatch(ko({
            instanceId: p,
            elementId: R,
            origin: D,
            refType: P,
            skipMotion: C,
            skipToValue: M,
            ...n
        })),
        vv(document.body, "ix2-animation-started", p),
        a) {
            fF(t, p);
            return
        }
        At({
            store: t,
            select: ({ixInstances: N}) => N[p],
            onChange: Ev
        }),
        h && t.dispatch(On(p, T.tick))
    }
    function sa(e, t) {
        vv(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: r, actionItem: n} = e
          , {ixElements: i} = t.getState()
          , {ref: o, refType: a} = i[r] || {};
        a === lv && qM(o, n, Re),
        t.dispatch(Xo(e.id))
    }
    function vv(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r),
        e.dispatchEvent(n)
    }
    function fF(e, t) {
        let {ixParameters: r} = e.getState();
        e.dispatch(On(t, 0)),
        e.dispatch(Sn(performance.now(), r));
        let {ixInstances: n} = e.getState();
        Ev(n[t], e)
    }
    function Ev(e, t) {
        let {active: r, continuous: n, complete: i, elementId: o, actionItem: a, actionTypeId: s, renderType: u, current: l, groupIndex: y, eventId: h, eventTarget: p, eventStateKey: v, actionListId: T, isCarrier: A, styleProp: R, verbose: w, pluginInstance: P} = e
          , {ixData: C, ixSession: M} = t.getState()
          , {events: D} = C
          , N = D && D[h] ? D[h] : {}
          , {mediaQueries: W=C.mediaQueryKeys} = N;
        if (Gn(W, M.mediaQueryKey) && (n || r || i)) {
            if (l || u === OM && i) {
                t.dispatch(Go(o, s, l, a));
                let {ixElements: H} = t.getState()
                  , {ref: j, refType: J, refState: re} = H[o] || {}
                  , k = re && re[s];
                (J === lv || Vn(s)) && CM(j, re, k, h, a, R, Re, u, P)
            }
            if (i) {
                if (A) {
                    let H = xr({
                        store: t,
                        eventId: h,
                        eventTarget: p,
                        eventStateKey: v,
                        actionListId: T,
                        groupIndex: y + 1,
                        verbose: w
                    });
                    w && !H && t.dispatch(Qt({
                        actionListId: T,
                        isPlaying: !1
                    }))
                }
                sa(e, t)
            }
        }
    }
    var iv, ut, ov, av, sv, uv, Zt, cv, qn, SM, ra, na, kn, lv, OM, rv, Xn, xM, ia, At, RM, CM, fv, LM, PM, NM, DM, MM, FM, Gn, qM, kM, XM, GM, VM, Vn, oa, UM, nv, WM, BM, iF, aF, sF, uF, ta = ve( () => {
        "use strict";
        iv = le(ji()),
        ut = le(an()),
        ov = le(Lp()),
        av = le(ng()),
        sv = le(og()),
        uv = le(sg()),
        Zt = le(pg()),
        cv = le(_g());
        De();
        qn = le(bt());
        xn();
        Sg();
        tv();
        SM = Object.keys(qr),
        ra = e => SM.includes(e),
        {COLON_DELIMITER: na, BOUNDARY_SELECTOR: kn, HTML_ELEMENT: lv, RENDER_GENERAL: OM, W_MOD_IX: rv} = we,
        {getAffectedElements: Xn, getElementId: xM, getDestinationValues: ia, observeStore: At, getInstanceId: RM, renderHTMLElement: CM, clearAllStyles: fv, getMaxDurationItemIndex: LM, getComputedStyle: PM, getInstanceOrigin: NM, reduceListToGroup: DM, shouldNamespaceEventParameter: MM, getNamespacedParameterId: FM, shouldAllowMediaQuery: Gn, cleanupHTMLElement: qM, clearObjectCache: kM, stringifyTarget: XM, mediaQueriesEqual: GM, shallowEqual: VM} = qn.IX2VanillaUtils,
        {isPluginType: Vn, createPluginInstance: oa, getPluginDuration: UM} = qn.IX2VanillaPlugins,
        nv = navigator.userAgent,
        WM = nv.match(/iPad/i) || nv.match(/iPhone/),
        BM = 12;
        iF = ["resize", "orientationchange"];
        aF = (e, t) => (0,
        av.default)((0,
        uv.default)(e, t), sv.default),
        sF = (e, t) => {
            (0,
            Zt.default)(e, (r, n) => {
                r.forEach( (i, o) => {
                    let a = n + na + o;
                    t(i, n, a)
                }
                )
            }
            )
        }
        ,
        uF = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return Xn({
                config: t,
                elementApi: Re
            })
        }
    }
    );
    var Iv = f(ca => {
        "use strict";
        Object.defineProperty(ca, "__esModule", {
            value: !0
        });
        function dF(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }
        dF(ca, {
            actions: function() {
                return hF
            },
            destroy: function() {
                return _v
            },
            init: function() {
                return mF
            },
            setEnv: function() {
                return yF
            },
            store: function() {
                return Bn
            }
        });
        var pF = vi()
          , gF = vF((dp(),
        Ye(fp)))
          , ua = (ta(),
        Ye(yv))
          , hF = EF((xn(),
        Ye(Tg)));
        function vF(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function mv(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (mv = function(n) {
                return n ? r : t
            }
            )(e)
        }
        function EF(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = mv(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {
                __proto__: null
            }
              , i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var o in e)
                if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
                    var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        var Bn = (0,
        pF.createStore)(gF.default);
        function yF(e) {
            e() && (0,
            ua.observeRequests)(Bn)
        }
        function mF(e) {
            _v(),
            (0,
            ua.startEngine)({
                store: Bn,
                rawData: e,
                allowEvents: !0
            })
        }
        function _v() {
            (0,
            ua.stopEngine)(Bn)
        }
    }
    );
    var wv = f( (IX, Av) => {
        "use strict";
        var Tv = qe()
          , bv = Iv();
        bv.setEnv(Tv.env);
        Tv.define("ix2", Av.exports = function() {
            return bv
        }
        )
    }
    );
    var Ov = f( (TX, Sv) => {
        "use strict";
        var Jt = qe();
        Jt.define("links", Sv.exports = function(e, t) {
            var r = {}, n = e(window), i, o = Jt.env(), a = window.location, s = document.createElement("a"), u = "w--current", l = /index\.(html|php)$/, y = /\/$/, h, p;
            r.ready = r.design = r.preview = v;
            function v() {
                i = o && Jt.env("design"),
                p = Jt.env("slug") || a.pathname || "",
                Jt.scroll.off(A),
                h = [];
                for (var w = document.links, P = 0; P < w.length; ++P)
                    T(w[P]);
                h.length && (Jt.scroll.on(A),
                A())
            }
            function T(w) {
                if (!w.getAttribute("hreflang")) {
                    var P = i && w.getAttribute("href-disabled") || w.getAttribute("href");
                    if (s.href = P,
                    !(P.indexOf(":") >= 0)) {
                        var C = e(w);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                                return;
                            var M = e(s.hash);
                            M.length && h.push({
                                link: C,
                                sec: M,
                                active: !1
                            });
                            return
                        }
                        if (!(P === "#" || P === "")) {
                            var D = s.href === a.href || P === p || l.test(P) && y.test(p);
                            R(C, u, D)
                        }
                    }
                }
            }
            function A() {
                var w = n.scrollTop()
                  , P = n.height();
                t.each(h, function(C) {
                    if (!C.link.attr("hreflang")) {
                        var M = C.link
                          , D = C.sec
                          , N = D.offset().top
                          , W = D.outerHeight()
                          , H = P * .5
                          , j = D.is(":visible") && N + W - H >= w && N + H <= w + P;
                        C.active !== j && (C.active = j,
                        R(M, u, j))
                    }
                })
            }
            function R(w, P, C) {
                var M = w.hasClass(P);
                C && M || !C && !M || (C ? w.addClass(P) : w.removeClass(P))
            }
            return r
        }
        )
    }
    );
    var Rv = f( (bX, xv) => {
        "use strict";
        var Hn = qe();
        Hn.define("scroll", xv.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = T() ? null : window.history
              , i = e(window)
              , o = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(k) {
                window.setTimeout(k, 15)
            }
              , u = Hn.env("editor") ? ".w-editor-body" : "body"
              , l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])"
              , y = 'a[href="#"]'
              , h = 'a[href*="#"]:not(.w-tab-link):not(' + y + ")"
              , p = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , v = document.createElement("style");
            v.appendChild(document.createTextNode(p));
            function T() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var A = /^#[a-zA-Z0-9][\w:.-]*$/;
            function R(k) {
                return A.test(k.hash) && k.host + k.pathname === r.host + r.pathname
            }
            let w = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function P() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || w.matches
            }
            function C(k, O) {
                var F;
                switch (O) {
                case "add":
                    F = k.attr("tabindex"),
                    F ? k.attr("data-wf-tabindex-swap", F) : k.attr("tabindex", "-1");
                    break;
                case "remove":
                    F = k.attr("data-wf-tabindex-swap"),
                    F ? (k.attr("tabindex", F),
                    k.removeAttr("data-wf-tabindex-swap")) : k.removeAttr("tabindex");
                    break
                }
                k.toggleClass("wf-force-outline-none", O === "add")
            }
            function M(k) {
                var O = k.currentTarget;
                if (!(Hn.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(O.className))) {
                    var F = R(O) ? O.hash : "";
                    if (F !== "") {
                        var B = e(F);
                        B.length && (k && (k.preventDefault(),
                        k.stopPropagation()),
                        D(F, k),
                        window.setTimeout(function() {
                            N(B, function() {
                                C(B, "add"),
                                B.get(0).focus({
                                    preventScroll: !0
                                }),
                                C(B, "remove")
                            })
                        }, k ? 0 : 300))
                    }
                }
            }
            function D(k) {
                if (r.hash !== k && n && n.pushState && !(Hn.env.chrome && r.protocol === "file:")) {
                    var O = n.state && n.state.hash;
                    O !== k && n.pushState({
                        hash: k
                    }, "", k)
                }
            }
            function N(k, O) {
                var F = i.scrollTop()
                  , B = W(k);
                if (F !== B) {
                    var U = H(k, F, B)
                      , ee = Date.now()
                      , ne = function() {
                        var q = Date.now() - ee;
                        window.scroll(0, j(F, B, q, U)),
                        q <= U ? s(ne) : typeof O == "function" && O()
                    };
                    s(ne)
                }
            }
            function W(k) {
                var O = e(l)
                  , F = O.css("position") === "fixed" ? O.outerHeight() : 0
                  , B = k.offset().top - F;
                if (k.data("scroll") === "mid") {
                    var U = i.height() - F
                      , ee = k.outerHeight();
                    ee < U && (B -= Math.round((U - ee) / 2))
                }
                return B
            }
            function H(k, O, F) {
                if (P())
                    return 0;
                var B = 1;
                return a.add(k).each(function(U, ee) {
                    var ne = parseFloat(ee.getAttribute("data-scroll-time"));
                    !isNaN(ne) && ne >= 0 && (B = ne)
                }),
                (472.143 * Math.log(Math.abs(O - F) + 125) - 2e3) * B
            }
            function j(k, O, F, B) {
                return F > B ? O : k + (O - k) * J(F / B)
            }
            function J(k) {
                return k < .5 ? 4 * k * k * k : (k - 1) * (2 * k - 2) * (2 * k - 2) + 1
            }
            function re() {
                var {WF_CLICK_EMPTY: k, WF_CLICK_SCROLL: O} = t;
                o.on(O, h, M),
                o.on(k, y, function(F) {
                    F.preventDefault()
                }),
                document.head.insertBefore(v, document.head.firstChild)
            }
            return {
                ready: re
            }
        }
        )
    }
    );
    var Lv = f( (AX, Cv) => {
        "use strict";
        var _F = qe();
        _F.define("touch", Cv.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(o) {
                return o = typeof o == "string" ? e(o).get(0) : o,
                o ? new n(o) : null
            }
            ;
            function n(o) {
                var a = !1, s = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), l, y;
                o.addEventListener("touchstart", h, !1),
                o.addEventListener("touchmove", p, !1),
                o.addEventListener("touchend", v, !1),
                o.addEventListener("touchcancel", T, !1),
                o.addEventListener("mousedown", h, !1),
                o.addEventListener("mousemove", p, !1),
                o.addEventListener("mouseup", v, !1),
                o.addEventListener("mouseout", T, !1);
                function h(R) {
                    var w = R.touches;
                    w && w.length > 1 || (a = !0,
                    w ? (s = !0,
                    l = w[0].clientX) : l = R.clientX,
                    y = l)
                }
                function p(R) {
                    if (a) {
                        if (s && R.type === "mousemove") {
                            R.preventDefault(),
                            R.stopPropagation();
                            return
                        }
                        var w = R.touches
                          , P = w ? w[0].clientX : R.clientX
                          , C = P - y;
                        y = P,
                        Math.abs(C) > u && r && String(r()) === "" && (i("swipe", R, {
                            direction: C > 0 ? "right" : "left"
                        }),
                        T())
                    }
                }
                function v(R) {
                    if (a && (a = !1,
                    s && R.type === "mouseup")) {
                        R.preventDefault(),
                        R.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function T() {
                    a = !1
                }
                function A() {
                    o.removeEventListener("touchstart", h, !1),
                    o.removeEventListener("touchmove", p, !1),
                    o.removeEventListener("touchend", v, !1),
                    o.removeEventListener("touchcancel", T, !1),
                    o.removeEventListener("mousedown", h, !1),
                    o.removeEventListener("mousemove", p, !1),
                    o.removeEventListener("mouseup", v, !1),
                    o.removeEventListener("mouseout", T, !1),
                    o = null
                }
                this.destroy = A
            }
            function i(o, a, s) {
                var u = e.Event(o, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var Pv = f(la => {
        "use strict";
        Object.defineProperty(la, "__esModule", {
            value: !0
        });
        Object.defineProperty(la, "default", {
            enumerable: !0,
            get: function() {
                return IF
            }
        });
        function IF(e, t, r, n, i, o, a, s, u, l, y, h, p) {
            return function(v) {
                e(v);
                var T = v.form
                  , A = {
                    name: T.attr("data-name") || T.attr("name") || "Untitled Form",
                    pageId: T.attr("data-wf-page-id") || "",
                    elementId: T.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(T.html()),
                    trackingCookies: n()
                };
                let R = T.attr("data-wf-flow");
                R && (A.wfFlow = R),
                i(v);
                var w = o(T, A.fields);
                if (w)
                    return a(w);
                if (A.fileUploads = s(T),
                u(v),
                !l) {
                    y(v);
                    return
                }
                h.ajax({
                    url: p,
                    type: "POST",
                    data: A,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(P) {
                    P && P.code === 200 && (v.success = !0),
                    y(v)
                }).fail(function() {
                    y(v)
                })
            }
        }
    }
    );
    var Dv = f( (SX, Nv) => {
        "use strict";
        var zn = qe();
        zn.define("forms", Nv.exports = function(e, t) {
            var r = {}, n = e(document), i, o = window.location, a = window.XDomainRequest && !window.atob, s = ".w-form", u, l = /e(-)?mail/i, y = /^\S+@\S+$/, h = window.alert, p = zn.env(), v, T, A, R = /list-manage[1-9]?.com/i, w = t.debounce(function() {
                h("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                P(),
                !p && !v && M()
            }
            ;
            function P() {
                u = e("html").attr("data-wf-site"),
                T = "https://webflow.com/api/v1/form/" + u,
                a && T.indexOf("https://webflow.com") >= 0 && (T = T.replace("https://webflow.com", "https://formdata.webflow.com")),
                A = `${T}/signFile`,
                i = e(s + " form"),
                i.length && i.each(C)
            }
            function C(q, K) {
                var d = e(K)
                  , m = e.data(K, s);
                m || (m = e.data(K, s, {
                    form: d
                })),
                D(m);
                var I = d.closest("div.w-form");
                m.done = I.find("> .w-form-done"),
                m.fail = I.find("> .w-form-fail"),
                m.fileUploads = I.find(".w-file-upload"),
                m.fileUploads.each(function(Q) {
                    U(Q, m)
                });
                var E = m.form.attr("aria-label") || m.form.attr("data-name") || "Form";
                m.done.attr("aria-label") || m.form.attr("aria-label", E),
                m.done.attr("tabindex", "-1"),
                m.done.attr("role", "region"),
                m.done.attr("aria-label") || m.done.attr("aria-label", E + " success"),
                m.fail.attr("tabindex", "-1"),
                m.fail.attr("role", "region"),
                m.fail.attr("aria-label") || m.fail.attr("aria-label", E + " failure");
                var z = m.action = d.attr("action");
                if (m.handler = null,
                m.redirect = d.attr("data-redirect"),
                R.test(z)) {
                    m.handler = O;
                    return
                }
                if (!z) {
                    if (u) {
                        m.handler = ( () => {
                            let Q = Pv().default;
                            return Q(D, o, zn, J, B, W, h, H, N, u, F, e, T)
                        }
                        )();
                        return
                    }
                    w()
                }
            }
            function M() {
                v = !0,
                n.on("submit", s + " form", function(Q) {
                    var $ = e.data(this, s);
                    $.handler && ($.evt = Q,
                    $.handler($))
                });
                let q = ".w-checkbox-input"
                  , K = ".w-radio-input"
                  , d = "w--redirected-checked"
                  , m = "w--redirected-focus"
                  , I = "w--redirected-focus-visible"
                  , E = ":focus-visible, [data-wf-focus-visible]"
                  , z = [["checkbox", q], ["radio", K]];
                n.on("change", s + ' form input[type="checkbox"]:not(' + q + ")", Q => {
                    e(Q.target).siblings(q).toggleClass(d)
                }
                ),
                n.on("change", s + ' form input[type="radio"]', Q => {
                    e(`input[name="${Q.target.name}"]:not(${q})`).map( (ue, me) => e(me).siblings(K).removeClass(d));
                    let $ = e(Q.target);
                    $.hasClass("w-radio-input") || $.siblings(K).addClass(d)
                }
                ),
                z.forEach( ([Q,$]) => {
                    n.on("focus", s + ` form input[type="${Q}"]:not(` + $ + ")", ue => {
                        e(ue.target).siblings($).addClass(m),
                        e(ue.target).filter(E).siblings($).addClass(I)
                    }
                    ),
                    n.on("blur", s + ` form input[type="${Q}"]:not(` + $ + ")", ue => {
                        e(ue.target).siblings($).removeClass(`${m} ${I}`)
                    }
                    )
                }
                )
            }
            function D(q) {
                var K = q.btn = q.form.find(':input[type="submit"]');
                q.wait = q.btn.attr("data-wait") || null,
                q.success = !1,
                K.prop("disabled", !1),
                q.label && K.val(q.label)
            }
            function N(q) {
                var K = q.btn
                  , d = q.wait;
                K.prop("disabled", !0),
                d && (q.label = K.val(),
                K.val(d))
            }
            function W(q, K) {
                var d = null;
                return K = K || {},
                q.find(':input:not([type="submit"]):not([type="file"])').each(function(m, I) {
                    var E = e(I)
                      , z = E.attr("type")
                      , Q = E.attr("data-name") || E.attr("name") || "Field " + (m + 1);
                    Q = encodeURIComponent(Q);
                    var $ = E.val();
                    if (z === "checkbox")
                        $ = E.is(":checked");
                    else if (z === "radio") {
                        if (K[Q] === null || typeof K[Q] == "string")
                            return;
                        $ = q.find('input[name="' + E.attr("name") + '"]:checked').val() || null
                    }
                    typeof $ == "string" && ($ = e.trim($)),
                    K[Q] = $,
                    d = d || re(E, z, Q, $)
                }),
                d
            }
            function H(q) {
                var K = {};
                return q.find(':input[type="file"]').each(function(d, m) {
                    var I = e(m)
                      , E = I.attr("data-name") || I.attr("name") || "File " + (d + 1)
                      , z = I.attr("data-value");
                    typeof z == "string" && (z = e.trim(z)),
                    K[E] = z
                }),
                K
            }
            let j = {
                _mkto_trk: "marketo"
            };
            function J() {
                return document.cookie.split("; ").reduce(function(K, d) {
                    let m = d.split("=")
                      , I = m[0];
                    if (I in j) {
                        let E = j[I]
                          , z = m.slice(1).join("=");
                        K[E] = z
                    }
                    return K
                }, {})
            }
            function re(q, K, d, m) {
                var I = null;
                return K === "password" ? I = "Passwords cannot be submitted." : q.attr("required") ? m ? l.test(q.attr("type")) && (y.test(m) || (I = "Please enter a valid email address for: " + d)) : I = "Please fill out the required field: " + d : d === "g-recaptcha-response" && !m && (I = "Please confirm you\u2019re not a robot."),
                I
            }
            function k(q) {
                B(q),
                F(q)
            }
            function O(q) {
                D(q);
                var K = q.form
                  , d = {};
                if (/^https/.test(o.href) && !/^https/.test(q.action)) {
                    K.attr("method", "post");
                    return
                }
                B(q);
                var m = W(K, d);
                if (m)
                    return h(m);
                N(q);
                var I;
                t.each(d, function($, ue) {
                    l.test(ue) && (d.EMAIL = $),
                    /^((full[ _-]?)?name)$/i.test(ue) && (I = $),
                    /^(first[ _-]?name)$/i.test(ue) && (d.FNAME = $),
                    /^(last[ _-]?name)$/i.test(ue) && (d.LNAME = $)
                }),
                I && !d.FNAME && (I = I.split(" "),
                d.FNAME = I[0],
                d.LNAME = d.LNAME || I[1]);
                var E = q.action.replace("/post?", "/post-json?") + "&c=?"
                  , z = E.indexOf("u=") + 2;
                z = E.substring(z, E.indexOf("&", z));
                var Q = E.indexOf("id=") + 3;
                Q = E.substring(Q, E.indexOf("&", Q)),
                d["b_" + z + "_" + Q] = "",
                e.ajax({
                    url: E,
                    data: d,
                    dataType: "jsonp"
                }).done(function($) {
                    q.success = $.result === "success" || /already/.test($.msg),
                    q.success || console.info("MailChimp error: " + $.msg),
                    F(q)
                }).fail(function() {
                    F(q)
                })
            }
            function F(q) {
                var K = q.form
                  , d = q.redirect
                  , m = q.success;
                if (m && d) {
                    zn.location(d);
                    return
                }
                q.done.toggle(m),
                q.fail.toggle(!m),
                m ? q.done.focus() : q.fail.focus(),
                K.toggle(!m),
                D(q)
            }
            function B(q) {
                q.evt && q.evt.preventDefault(),
                q.evt = null
            }
            function U(q, K) {
                if (!K.fileUploads || !K.fileUploads[q])
                    return;
                var d, m = e(K.fileUploads[q]), I = m.find("> .w-file-upload-default"), E = m.find("> .w-file-upload-uploading"), z = m.find("> .w-file-upload-success"), Q = m.find("> .w-file-upload-error"), $ = I.find(".w-file-upload-input"), ue = I.find(".w-file-upload-label"), me = ue.children(), oe = Q.find(".w-file-upload-error-msg"), g = z.find(".w-file-upload-file"), X = z.find(".w-file-remove-link"), Y = g.find(".w-file-upload-file-name"), G = oe.attr("data-w-size-error"), fe = oe.attr("data-w-type-error"), Ce = oe.attr("data-w-generic-error");
                if (p || ue.on("click keydown", function(b) {
                    b.type === "keydown" && b.which !== 13 && b.which !== 32 || (b.preventDefault(),
                    $.click())
                }),
                ue.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                X.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                p)
                    $.on("click", function(b) {
                        b.preventDefault()
                    }),
                    ue.on("click", function(b) {
                        b.preventDefault()
                    }),
                    me.on("click", function(b) {
                        b.preventDefault()
                    });
                else {
                    X.on("click keydown", function(b) {
                        if (b.type === "keydown") {
                            if (b.which !== 13 && b.which !== 32)
                                return;
                            b.preventDefault()
                        }
                        $.removeAttr("data-value"),
                        $.val(""),
                        Y.html(""),
                        I.toggle(!0),
                        z.toggle(!1),
                        ue.focus()
                    }),
                    $.on("change", function(b) {
                        d = b.target && b.target.files && b.target.files[0],
                        d && (I.toggle(!1),
                        Q.toggle(!1),
                        E.toggle(!0),
                        E.focus(),
                        Y.text(d.name),
                        x() || N(K),
                        K.fileUploads[q].uploading = !0,
                        ee(d, _))
                    });
                    var Xe = ue.outerHeight();
                    $.height(Xe),
                    $.width(1)
                }
                function c(b) {
                    var L = b.responseJSON && b.responseJSON.msg
                      , Z = Ce;
                    typeof L == "string" && L.indexOf("InvalidFileTypeError") === 0 ? Z = fe : typeof L == "string" && L.indexOf("MaxFileSizeError") === 0 && (Z = G),
                    oe.text(Z),
                    $.removeAttr("data-value"),
                    $.val(""),
                    E.toggle(!1),
                    I.toggle(!0),
                    Q.toggle(!0),
                    Q.focus(),
                    K.fileUploads[q].uploading = !1,
                    x() || D(K)
                }
                function _(b, L) {
                    if (b)
                        return c(b);
                    var Z = L.fileName
                      , ie = L.postData
                      , ge = L.fileId
                      , V = L.s3Url;
                    $.attr("data-value", ge),
                    ne(V, ie, d, Z, S)
                }
                function S(b) {
                    if (b)
                        return c(b);
                    E.toggle(!1),
                    z.css("display", "inline-block"),
                    z.focus(),
                    K.fileUploads[q].uploading = !1,
                    x() || D(K)
                }
                function x() {
                    var b = K.fileUploads && K.fileUploads.toArray() || [];
                    return b.some(function(L) {
                        return L.uploading
                    })
                }
            }
            function ee(q, K) {
                var d = new URLSearchParams({
                    name: q.name,
                    size: q.size
                });
                e.ajax({
                    type: "GET",
                    url: `${A}?${d}`,
                    crossDomain: !0
                }).done(function(m) {
                    K(null, m)
                }).fail(function(m) {
                    K(m)
                })
            }
            function ne(q, K, d, m, I) {
                var E = new FormData;
                for (var z in K)
                    E.append(z, K[z]);
                E.append("file", d, m),
                e.ajax({
                    type: "POST",
                    url: q,
                    data: E,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    I(null)
                }).fail(function(Q) {
                    I(Q)
                })
            }
            return r
        }
        )
    }
    );
    var Fv = f( (OX, Mv) => {
        "use strict";
        var ht = qe()
          , TF = Fr()
          , Ae = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        ht.define("navbar", Mv.exports = function(e, t) {
            var r = {}, n = e.tram, i = e(window), o = e(document), a = t.debounce, s, u, l, y, h = ht.env(), p = '<div class="w-nav-overlay" data-wf-ignore />', v = ".w-nav", T = "w--open", A = "w--nav-dropdown-open", R = "w--nav-dropdown-toggle-open", w = "w--nav-dropdown-list-open", P = "w--nav-link-open", C = TF.triggers, M = e();
            r.ready = r.design = r.preview = D,
            r.destroy = function() {
                M = e(),
                N(),
                u && u.length && u.each(J)
            }
            ;
            function D() {
                l = h && ht.env("design"),
                y = ht.env("editor"),
                s = e(document.body),
                u = o.find(v),
                u.length && (u.each(j),
                N(),
                W())
            }
            function N() {
                ht.resize.off(H)
            }
            function W() {
                ht.resize.on(H)
            }
            function H() {
                u.each(I)
            }
            function j(g, X) {
                var Y = e(X)
                  , G = e.data(X, v);
                G || (G = e.data(X, v, {
                    open: !1,
                    el: Y,
                    config: {},
                    selectedIdx: -1
                })),
                G.menu = Y.find(".w-nav-menu"),
                G.links = G.menu.find(".w-nav-link"),
                G.dropdowns = G.menu.find(".w-dropdown"),
                G.dropdownToggle = G.menu.find(".w-dropdown-toggle"),
                G.dropdownList = G.menu.find(".w-dropdown-list"),
                G.button = Y.find(".w-nav-button"),
                G.container = Y.find(".w-container"),
                G.overlayContainerId = "w-nav-overlay-" + g,
                G.outside = d(G);
                var fe = Y.find(".w-nav-brand");
                fe && fe.attr("href") === "/" && fe.attr("aria-label") == null && fe.attr("aria-label", "home"),
                G.button.attr("style", "-webkit-user-select: text;"),
                G.button.attr("aria-label") == null && G.button.attr("aria-label", "menu"),
                G.button.attr("role", "button"),
                G.button.attr("tabindex", "0"),
                G.button.attr("aria-controls", G.overlayContainerId),
                G.button.attr("aria-haspopup", "menu"),
                G.button.attr("aria-expanded", "false"),
                G.el.off(v),
                G.button.off(v),
                G.menu.off(v),
                O(G),
                l ? (re(G),
                G.el.on("setting" + v, F(G))) : (k(G),
                G.button.on("click" + v, q(G)),
                G.menu.on("click" + v, "a", K(G)),
                G.button.on("keydown" + v, B(G)),
                G.el.on("keydown" + v, U(G))),
                I(g, X)
            }
            function J(g, X) {
                var Y = e.data(X, v);
                Y && (re(Y),
                e.removeData(X, v))
            }
            function re(g) {
                g.overlay && (oe(g, !0),
                g.overlay.remove(),
                g.overlay = null)
            }
            function k(g) {
                g.overlay || (g.overlay = e(p).appendTo(g.el),
                g.overlay.attr("id", g.overlayContainerId),
                g.parent = g.menu.parent(),
                oe(g, !0))
            }
            function O(g) {
                var X = {}
                  , Y = g.config || {}
                  , G = X.animation = g.el.attr("data-animation") || "default";
                X.animOver = /^over/.test(G),
                X.animDirect = /left$/.test(G) ? -1 : 1,
                Y.animation !== G && g.open && t.defer(ne, g),
                X.easing = g.el.attr("data-easing") || "ease",
                X.easing2 = g.el.attr("data-easing2") || "ease";
                var fe = g.el.attr("data-duration");
                X.duration = fe != null ? Number(fe) : 400,
                X.docHeight = g.el.attr("data-doc-height"),
                g.config = X
            }
            function F(g) {
                return function(X, Y) {
                    Y = Y || {};
                    var G = i.width();
                    O(g),
                    Y.open === !0 && ue(g, !0),
                    Y.open === !1 && oe(g, !0),
                    g.open && t.defer(function() {
                        G !== i.width() && ne(g)
                    })
                }
            }
            function B(g) {
                return function(X) {
                    switch (X.keyCode) {
                    case Ae.SPACE:
                    case Ae.ENTER:
                        return q(g)(),
                        X.preventDefault(),
                        X.stopPropagation();
                    case Ae.ESCAPE:
                        return oe(g),
                        X.preventDefault(),
                        X.stopPropagation();
                    case Ae.ARROW_RIGHT:
                    case Ae.ARROW_DOWN:
                    case Ae.HOME:
                    case Ae.END:
                        return g.open ? (X.keyCode === Ae.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0,
                        ee(g),
                        X.preventDefault(),
                        X.stopPropagation()) : (X.preventDefault(),
                        X.stopPropagation())
                    }
                }
            }
            function U(g) {
                return function(X) {
                    if (g.open)
                        switch (g.selectedIdx = g.links.index(document.activeElement),
                        X.keyCode) {
                        case Ae.HOME:
                        case Ae.END:
                            return X.keyCode === Ae.END ? g.selectedIdx = g.links.length - 1 : g.selectedIdx = 0,
                            ee(g),
                            X.preventDefault(),
                            X.stopPropagation();
                        case Ae.ESCAPE:
                            return oe(g),
                            g.button.focus(),
                            X.preventDefault(),
                            X.stopPropagation();
                        case Ae.ARROW_LEFT:
                        case Ae.ARROW_UP:
                            return g.selectedIdx = Math.max(-1, g.selectedIdx - 1),
                            ee(g),
                            X.preventDefault(),
                            X.stopPropagation();
                        case Ae.ARROW_RIGHT:
                        case Ae.ARROW_DOWN:
                            return g.selectedIdx = Math.min(g.links.length - 1, g.selectedIdx + 1),
                            ee(g),
                            X.preventDefault(),
                            X.stopPropagation()
                        }
                }
            }
            function ee(g) {
                if (g.links[g.selectedIdx]) {
                    var X = g.links[g.selectedIdx];
                    X.focus(),
                    K(X)
                }
            }
            function ne(g) {
                g.open && (oe(g, !0),
                ue(g, !0))
            }
            function q(g) {
                return a(function() {
                    g.open ? oe(g) : ue(g)
                })
            }
            function K(g) {
                return function(X) {
                    var Y = e(this)
                      , G = Y.attr("href");
                    if (!ht.validClick(X.currentTarget)) {
                        X.preventDefault();
                        return
                    }
                    G && G.indexOf("#") === 0 && g.open && oe(g)
                }
            }
            function d(g) {
                return g.outside && o.off("click" + v, g.outside),
                function(X) {
                    var Y = e(X.target);
                    y && Y.closest(".w-editor-bem-EditorOverlay").length || m(g, Y)
                }
            }
            var m = a(function(g, X) {
                if (g.open) {
                    var Y = X.closest(".w-nav-menu");
                    g.menu.is(Y) || oe(g)
                }
            });
            function I(g, X) {
                var Y = e.data(X, v)
                  , G = Y.collapsed = Y.button.css("display") !== "none";
                if (Y.open && !G && !l && oe(Y, !0),
                Y.container.length) {
                    var fe = z(Y);
                    Y.links.each(fe),
                    Y.dropdowns.each(fe)
                }
                Y.open && me(Y)
            }
            var E = "max-width";
            function z(g) {
                var X = g.container.css(E);
                return X === "none" && (X = ""),
                function(Y, G) {
                    G = e(G),
                    G.css(E, ""),
                    G.css(E) === "none" && G.css(E, X)
                }
            }
            function Q(g, X) {
                X.setAttribute("data-nav-menu-open", "")
            }
            function $(g, X) {
                X.removeAttribute("data-nav-menu-open")
            }
            function ue(g, X) {
                if (g.open)
                    return;
                g.open = !0,
                g.menu.each(Q),
                g.links.addClass(P),
                g.dropdowns.addClass(A),
                g.dropdownToggle.addClass(R),
                g.dropdownList.addClass(w),
                g.button.addClass(T);
                var Y = g.config
                  , G = Y.animation;
                (G === "none" || !n.support.transform || Y.duration <= 0) && (X = !0);
                var fe = me(g)
                  , Ce = g.menu.outerHeight(!0)
                  , Xe = g.menu.outerWidth(!0)
                  , c = g.el.height()
                  , _ = g.el[0];
                if (I(0, _),
                C.intro(0, _),
                ht.redraw.up(),
                l || o.on("click" + v, g.outside),
                X) {
                    b();
                    return
                }
                var S = "transform " + Y.duration + "ms " + Y.easing;
                if (g.overlay && (M = g.menu.prev(),
                g.overlay.show().append(g.menu)),
                Y.animOver) {
                    n(g.menu).add(S).set({
                        x: Y.animDirect * Xe,
                        height: fe
                    }).start({
                        x: 0
                    }).then(b),
                    g.overlay && g.overlay.width(Xe);
                    return
                }
                var x = c + Ce;
                n(g.menu).add(S).set({
                    y: -x
                }).start({
                    y: 0
                }).then(b);
                function b() {
                    g.button.attr("aria-expanded", "true")
                }
            }
            function me(g) {
                var X = g.config
                  , Y = X.docHeight ? o.height() : s.height();
                return X.animOver ? g.menu.height(Y) : g.el.css("position") !== "fixed" && (Y -= g.el.outerHeight(!0)),
                g.overlay && g.overlay.height(Y),
                Y
            }
            function oe(g, X) {
                if (!g.open)
                    return;
                g.open = !1,
                g.button.removeClass(T);
                var Y = g.config;
                if ((Y.animation === "none" || !n.support.transform || Y.duration <= 0) && (X = !0),
                C.outro(0, g.el[0]),
                o.off("click" + v, g.outside),
                X) {
                    n(g.menu).stop(),
                    _();
                    return
                }
                var G = "transform " + Y.duration + "ms " + Y.easing2
                  , fe = g.menu.outerHeight(!0)
                  , Ce = g.menu.outerWidth(!0)
                  , Xe = g.el.height();
                if (Y.animOver) {
                    n(g.menu).add(G).start({
                        x: Ce * Y.animDirect
                    }).then(_);
                    return
                }
                var c = Xe + fe;
                n(g.menu).add(G).start({
                    y: -c
                }).then(_);
                function _() {
                    g.menu.height(""),
                    n(g.menu).set({
                        x: 0,
                        y: 0
                    }),
                    g.menu.each($),
                    g.links.removeClass(P),
                    g.dropdowns.removeClass(A),
                    g.dropdownToggle.removeClass(R),
                    g.dropdownList.removeClass(w),
                    g.overlay && g.overlay.children().length && (M.length ? g.menu.insertAfter(M) : g.menu.prependTo(g.parent),
                    g.overlay.attr("style", "").hide()),
                    g.el.triggerHandler("w-close"),
                    g.button.attr("aria-expanded", "false")
                }
            }
            return r
        }
        )
    }
    );
    var Xv = f( (xX, kv) => {
        "use strict";
        var vt = qe()
          , bF = Fr()
          , nt = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , qv = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        vt.define("slider", kv.exports = function(e, t) {
            var r = {}, n = e.tram, i = e(document), o, a, s = vt.env(), u = ".w-slider", l = '<div class="w-slider-dot" data-wf-ignore />', y = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', h = "w-slider-force-show", p = bF.triggers, v, T = !1;
            r.ready = function() {
                a = vt.env("design"),
                A()
            }
            ,
            r.design = function() {
                a = !0,
                setTimeout(A, 1e3)
            }
            ,
            r.preview = function() {
                a = !1,
                A()
            }
            ,
            r.redraw = function() {
                T = !0,
                A(),
                T = !1
            }
            ,
            r.destroy = R;
            function A() {
                o = i.find(u),
                o.length && (o.each(C),
                !v && (R(),
                w()))
            }
            function R() {
                vt.resize.off(P),
                vt.redraw.off(r.redraw)
            }
            function w() {
                vt.resize.on(P),
                vt.redraw.on(r.redraw)
            }
            function P() {
                o.filter(":visible").each(U)
            }
            function C(d, m) {
                var I = e(m)
                  , E = e.data(m, u);
                E || (E = e.data(m, u, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: I,
                    config: {}
                })),
                E.mask = I.children(".w-slider-mask"),
                E.left = I.children(".w-slider-arrow-left"),
                E.right = I.children(".w-slider-arrow-right"),
                E.nav = I.children(".w-slider-nav"),
                E.slides = E.mask.children(".w-slide"),
                E.slides.each(p.reset),
                T && (E.maskWidth = 0),
                I.attr("role") === void 0 && I.attr("role", "region"),
                I.attr("aria-label") === void 0 && I.attr("aria-label", "carousel");
                var z = E.mask.attr("id");
                if (z || (z = "w-slider-mask-" + d,
                E.mask.attr("id", z)),
                !a && !E.ariaLiveLabel && (E.ariaLiveLabel = e(y).appendTo(E.mask)),
                E.left.attr("role", "button"),
                E.left.attr("tabindex", "0"),
                E.left.attr("aria-controls", z),
                E.left.attr("aria-label") === void 0 && E.left.attr("aria-label", "previous slide"),
                E.right.attr("role", "button"),
                E.right.attr("tabindex", "0"),
                E.right.attr("aria-controls", z),
                E.right.attr("aria-label") === void 0 && E.right.attr("aria-label", "next slide"),
                !n.support.transform) {
                    E.left.hide(),
                    E.right.hide(),
                    E.nav.hide(),
                    v = !0;
                    return
                }
                E.el.off(u),
                E.left.off(u),
                E.right.off(u),
                E.nav.off(u),
                M(E),
                a ? (E.el.on("setting" + u, O(E)),
                k(E),
                E.hasTimer = !1) : (E.el.on("swipe" + u, O(E)),
                E.left.on("click" + u, H(E)),
                E.right.on("click" + u, j(E)),
                E.left.on("keydown" + u, W(E, H)),
                E.right.on("keydown" + u, W(E, j)),
                E.nav.on("keydown" + u, "> div", O(E)),
                E.config.autoplay && !E.hasTimer && (E.hasTimer = !0,
                E.timerCount = 1,
                re(E)),
                E.el.on("mouseenter" + u, N(E, !0, "mouse")),
                E.el.on("focusin" + u, N(E, !0, "keyboard")),
                E.el.on("mouseleave" + u, N(E, !1, "mouse")),
                E.el.on("focusout" + u, N(E, !1, "keyboard"))),
                E.nav.on("click" + u, "> div", O(E)),
                s || E.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var Q = I.filter(":hidden");
                Q.addClass(h);
                var $ = I.parents(":hidden");
                $.addClass(h),
                T || U(d, m),
                Q.removeClass(h),
                $.removeClass(h)
            }
            function M(d) {
                var m = {};
                m.crossOver = 0,
                m.animation = d.el.attr("data-animation") || "slide",
                m.animation === "outin" && (m.animation = "cross",
                m.crossOver = .5),
                m.easing = d.el.attr("data-easing") || "ease";
                var I = d.el.attr("data-duration");
                if (m.duration = I != null ? parseInt(I, 10) : 500,
                D(d.el.attr("data-infinite")) && (m.infinite = !0),
                D(d.el.attr("data-disable-swipe")) && (m.disableSwipe = !0),
                D(d.el.attr("data-hide-arrows")) ? m.hideArrows = !0 : d.config.hideArrows && (d.left.show(),
                d.right.show()),
                D(d.el.attr("data-autoplay"))) {
                    m.autoplay = !0,
                    m.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3,
                    m.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10);
                    var E = "mousedown" + u + " touchstart" + u;
                    a || d.el.off(E).one(E, function() {
                        k(d)
                    })
                }
                var z = d.right.width();
                m.edge = z ? z + 40 : 100,
                d.config = m
            }
            function D(d) {
                return d === "1" || d === "true"
            }
            function N(d, m, I) {
                return function(E) {
                    if (m)
                        d.hasFocus[I] = m;
                    else if (e.contains(d.el.get(0), E.relatedTarget) || (d.hasFocus[I] = m,
                    d.hasFocus.mouse && I === "keyboard" || d.hasFocus.keyboard && I === "mouse"))
                        return;
                    m ? (d.ariaLiveLabel.attr("aria-live", "polite"),
                    d.hasTimer && k(d)) : (d.ariaLiveLabel.attr("aria-live", "off"),
                    d.hasTimer && re(d))
                }
            }
            function W(d, m) {
                return function(I) {
                    switch (I.keyCode) {
                    case nt.SPACE:
                    case nt.ENTER:
                        return m(d)(),
                        I.preventDefault(),
                        I.stopPropagation()
                    }
                }
            }
            function H(d) {
                return function() {
                    B(d, {
                        index: d.index - 1,
                        vector: -1
                    })
                }
            }
            function j(d) {
                return function() {
                    B(d, {
                        index: d.index + 1,
                        vector: 1
                    })
                }
            }
            function J(d, m) {
                var I = null;
                m === d.slides.length && (A(),
                ee(d)),
                t.each(d.anchors, function(E, z) {
                    e(E.els).each(function(Q, $) {
                        e($).index() === m && (I = z)
                    })
                }),
                I != null && B(d, {
                    index: I,
                    immediate: !0
                })
            }
            function re(d) {
                k(d);
                var m = d.config
                  , I = m.timerMax;
                I && d.timerCount++ > I || (d.timerId = window.setTimeout(function() {
                    d.timerId == null || a || (j(d)(),
                    re(d))
                }, m.delay))
            }
            function k(d) {
                window.clearTimeout(d.timerId),
                d.timerId = null
            }
            function O(d) {
                return function(m, I) {
                    I = I || {};
                    var E = d.config;
                    if (a && m.type === "setting") {
                        if (I.select === "prev")
                            return H(d)();
                        if (I.select === "next")
                            return j(d)();
                        if (M(d),
                        ee(d),
                        I.select == null)
                            return;
                        J(d, I.select);
                        return
                    }
                    if (m.type === "swipe")
                        return E.disableSwipe || vt.env("editor") ? void 0 : I.direction === "left" ? j(d)() : I.direction === "right" ? H(d)() : void 0;
                    if (d.nav.has(m.target).length) {
                        var z = e(m.target).index();
                        if (m.type === "click" && B(d, {
                            index: z
                        }),
                        m.type === "keydown")
                            switch (m.keyCode) {
                            case nt.ENTER:
                            case nt.SPACE:
                                {
                                    B(d, {
                                        index: z
                                    }),
                                    m.preventDefault();
                                    break
                                }
                            case nt.ARROW_LEFT:
                            case nt.ARROW_UP:
                                {
                                    F(d.nav, Math.max(z - 1, 0)),
                                    m.preventDefault();
                                    break
                                }
                            case nt.ARROW_RIGHT:
                            case nt.ARROW_DOWN:
                                {
                                    F(d.nav, Math.min(z + 1, d.pages)),
                                    m.preventDefault();
                                    break
                                }
                            case nt.HOME:
                                {
                                    F(d.nav, 0),
                                    m.preventDefault();
                                    break
                                }
                            case nt.END:
                                {
                                    F(d.nav, d.pages),
                                    m.preventDefault();
                                    break
                                }
                            default:
                                return
                            }
                    }
                }
            }
            function F(d, m) {
                var I = d.children().eq(m).focus();
                d.children().not(I)
            }
            function B(d, m) {
                m = m || {};
                var I = d.config
                  , E = d.anchors;
                d.previous = d.index;
                var z = m.index
                  , Q = {};
                z < 0 ? (z = E.length - 1,
                I.infinite && (Q.x = -d.endX,
                Q.from = 0,
                Q.to = E[0].width)) : z >= E.length && (z = 0,
                I.infinite && (Q.x = E[E.length - 1].width,
                Q.from = -E[E.length - 1].x,
                Q.to = Q.from - Q.x)),
                d.index = z;
                var $ = d.nav.children().eq(z).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                d.nav.children().not($).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
                I.hideArrows && (d.index === E.length - 1 ? d.right.hide() : d.right.show(),
                d.index === 0 ? d.left.hide() : d.left.show());
                var ue = d.offsetX || 0
                  , me = d.offsetX = -E[d.index].x
                  , oe = {
                    x: me,
                    opacity: 1,
                    visibility: ""
                }
                  , g = e(E[d.index].els)
                  , X = e(E[d.previous] && E[d.previous].els)
                  , Y = d.slides.not(g)
                  , G = I.animation
                  , fe = I.easing
                  , Ce = Math.round(I.duration)
                  , Xe = m.vector || (d.index > d.previous ? 1 : -1)
                  , c = "opacity " + Ce + "ms " + fe
                  , _ = "transform " + Ce + "ms " + fe;
                if (g.find(qv).removeAttr("tabindex"),
                g.removeAttr("aria-hidden"),
                g.find("*").removeAttr("aria-hidden"),
                Y.find(qv).attr("tabindex", "-1"),
                Y.attr("aria-hidden", "true"),
                Y.find("*").attr("aria-hidden", "true"),
                a || (g.each(p.intro),
                Y.each(p.outro)),
                m.immediate && !T) {
                    n(g).set(oe),
                    b();
                    return
                }
                if (d.index === d.previous)
                    return;
                if (a || d.ariaLiveLabel.text(`Slide ${z + 1} of ${E.length}.`),
                G === "cross") {
                    var S = Math.round(Ce - Ce * I.crossOver)
                      , x = Math.round(Ce - S);
                    c = "opacity " + S + "ms " + fe,
                    n(X).set({
                        visibility: ""
                    }).add(c).start({
                        opacity: 0
                    }),
                    n(g).set({
                        visibility: "",
                        x: me,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(c).wait(x).then({
                        opacity: 1
                    }).then(b);
                    return
                }
                if (G === "fade") {
                    n(X).set({
                        visibility: ""
                    }).stop(),
                    n(g).set({
                        visibility: "",
                        x: me,
                        opacity: 0,
                        zIndex: d.depth++
                    }).add(c).start({
                        opacity: 1
                    }).then(b);
                    return
                }
                if (G === "over") {
                    oe = {
                        x: d.endX
                    },
                    n(X).set({
                        visibility: ""
                    }).stop(),
                    n(g).set({
                        visibility: "",
                        zIndex: d.depth++,
                        x: me + E[d.index].width * Xe
                    }).add(_).start({
                        x: me
                    }).then(b);
                    return
                }
                I.infinite && Q.x ? (n(d.slides.not(X)).set({
                    visibility: "",
                    x: Q.x
                }).add(_).start({
                    x: me
                }),
                n(X).set({
                    visibility: "",
                    x: Q.from
                }).add(_).start({
                    x: Q.to
                }),
                d.shifted = X) : (I.infinite && d.shifted && (n(d.shifted).set({
                    visibility: "",
                    x: ue
                }),
                d.shifted = null),
                n(d.slides).set({
                    visibility: ""
                }).add(_).start({
                    x: me
                }));
                function b() {
                    g = e(E[d.index].els),
                    Y = d.slides.not(g),
                    G !== "slide" && (oe.visibility = "hidden"),
                    n(Y).set(oe)
                }
            }
            function U(d, m) {
                var I = e.data(m, u);
                if (I) {
                    if (q(I))
                        return ee(I);
                    a && K(I) && ee(I)
                }
            }
            function ee(d) {
                var m = 1
                  , I = 0
                  , E = 0
                  , z = 0
                  , Q = d.maskWidth
                  , $ = Q - d.config.edge;
                $ < 0 && ($ = 0),
                d.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }],
                d.slides.each(function(me, oe) {
                    E - I > $ && (m++,
                    I += Q,
                    d.anchors[m - 1] = {
                        els: [],
                        x: E,
                        width: 0
                    }),
                    z = e(oe).outerWidth(!0),
                    E += z,
                    d.anchors[m - 1].width += z,
                    d.anchors[m - 1].els.push(oe);
                    var g = me + 1 + " of " + d.slides.length;
                    e(oe).attr("aria-label", g),
                    e(oe).attr("role", "group")
                }),
                d.endX = E,
                a && (d.pages = null),
                d.nav.length && d.pages !== m && (d.pages = m,
                ne(d));
                var ue = d.index;
                ue >= m && (ue = m - 1),
                B(d, {
                    immediate: !0,
                    index: ue
                })
            }
            function ne(d) {
                var m = [], I, E = d.el.attr("data-nav-spacing");
                E && (E = parseFloat(E) + "px");
                for (var z = 0, Q = d.pages; z < Q; z++)
                    I = e(l),
                    I.attr("aria-label", "Show slide " + (z + 1) + " of " + Q).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"),
                    d.nav.hasClass("w-num") && I.text(z + 1),
                    E != null && I.css({
                        "margin-left": E,
                        "margin-right": E
                    }),
                    m.push(I);
                d.nav.empty().append(m)
            }
            function q(d) {
                var m = d.mask.width();
                return d.maskWidth !== m ? (d.maskWidth = m,
                !0) : !1
            }
            function K(d) {
                var m = 0;
                return d.slides.each(function(I, E) {
                    m += e(E).outerWidth(!0)
                }),
                d.slidesWidth !== m ? (d.slidesWidth = m,
                !0) : !1
            }
            return r
        }
        )
    }
    );
    Aa();
    Sa();
    xa();
    La();
    Fr();
    wv();
    Ov();
    Rv();
    Lv();
    Dv();
    Fv();
    Xv();
}
)();
/*!
* tram.js v0.8.2-global
* Cross-browser CSS3 transitions in JavaScript
* https://github.com/bkwld/tram
* MIT License
*/
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6630945cca5f1b1c12c9e047|ffaf9d2f-91bc-abc6-a0af-ede532b80521",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6630945cca5f1b1c12c9e047|ffaf9d2f-91bc-abc6-a0af-ede532b80521",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714753753936
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6630945cca5f1b1c12c9e047|ffaf9d2f-91bc-abc6-a0af-ede532b80521",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6630945cca5f1b1c12c9e047|ffaf9d2f-91bc-abc6-a0af-ede532b80521",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1714753753937
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|e878dfa2-d611-30a4-18ea-39066675bb1c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|e878dfa2-d611-30a4-18ea-39066675bb1c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1715095165418
        },
        "e-8": {
            "id": "e-8",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-7"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|e878dfa2-d611-30a4-18ea-39066675bb1c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|e878dfa2-d611-30a4-18ea-39066675bb1c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1715095165418
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|39c95802-f1d6-e72c-bad9-043e77fd0b9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|39c95802-f1d6-e72c-bad9-043e77fd0b9f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1715785718800
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-16"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|14ac3177-c2ee-5b80-74a0-dd7647be7591",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|14ac3177-c2ee-5b80-74a0-dd7647be7591",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1715785918206
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-18"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|bb54bd6f-e19b-cdd0-874c-b2ffdb7b4990",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|bb54bd6f-e19b-cdd0-874c-b2ffdb7b4990",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1715786002260
        },
        "e-19": {
            "id": "e-19",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-20"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|d402d590-4e30-e074-c29f-cfb2b18bd0d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|d402d590-4e30-e074-c29f-cfb2b18bd0d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1715786067018
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|e56ce066-8024-ae1b-0345-a3ccf7b70bbb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|e56ce066-8024-ae1b-0345-a3ccf7b70bbb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1715786112598
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-26"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27462",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27462",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1715943886578
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|69b3bf6a-a4e5-ad8f-688a-1d2751ab297f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|69b3bf6a-a4e5-ad8f-688a-1d2751ab297f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1715944734162
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27465",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27465",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1715944807133
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d2745f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d2745f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1715949265223
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-40"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27459",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27459",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1715949362834
        },
        "e-41": {
            "id": "e-41",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|b35a1210-45e8-b633-3c00-d55f425daef0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|b35a1210-45e8-b633-3c00-d55f425daef0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1715949572457
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|662fcc7858c2fdee6b48e255",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|662fcc7858c2fdee6b48e255",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1716464724044
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|a4139be8-107d-85fc-3916-cdfabbf55e4f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|a4139be8-107d-85fc-3916-cdfabbf55e4f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-43-p",
                "smoothing": 52,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 90,
                "startsExiting": true,
                "addEndOffset": true,
                "endOffsetValue": 60
            }],
            "createdOn": 1716551160831
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|c72356c8-29ad-200a-95ad-5c8766ca8357",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|c72356c8-29ad-200a-95ad-5c8766ca8357",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-44-p",
                "smoothing": 51,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 90,
                "startsExiting": false,
                "addEndOffset": true,
                "endOffsetValue": 20
            }],
            "createdOn": 1716551673599
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|ab957404-0ce2-f8af-d138-520f1a1ac920",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|ab957404-0ce2-f8af-d138-520f1a1ac920",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-45-p",
                "smoothing": 50,
                "startsEntering": false,
                "addStartOffset": true,
                "addOffsetValue": 67,
                "startsExiting": true,
                "addEndOffset": true,
                "endOffsetValue": 67
            }],
            "createdOn": 1716552308040
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|d7718137-b192-d101-dfb9-f4968f2b70f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|d7718137-b192-d101-dfb9-f4968f2b70f5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-46-p",
                "smoothing": 66,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 67,
                "startsExiting": true,
                "addEndOffset": true,
                "endOffsetValue": 67
            }],
            "createdOn": 1716552689093
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6630945cca5f1b1c12c9e047|819e12b7-6f50-deb2-8b72-06d55ec9b7b2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6630945cca5f1b1c12c9e047|819e12b7-6f50-deb2-8b72-06d55ec9b7b2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718117512950
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-69"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6630945cca5f1b1c12c9e047|819e12b7-6f50-deb2-8b72-06d55ec9b7b2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6630945cca5f1b1c12c9e047|819e12b7-6f50-deb2-8b72-06d55ec9b7b2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718117512951
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|3e3eb59b-e6a5-4e10-c5d7-d6f5398f2fcb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|3e3eb59b-e6a5-4e10-c5d7-d6f5398f2fcb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718286834489
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|3e3eb59b-e6a5-4e10-c5d7-d6f5398f2fcb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|3e3eb59b-e6a5-4e10-c5d7-d6f5398f2fcb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718286834490
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|8bd62050-28d4-ae6c-53a1-e0d528023097",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|8bd62050-28d4-ae6c-53a1-e0d528023097",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718287044241
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|8bd62050-28d4-ae6c-53a1-e0d528023097",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|8bd62050-28d4-ae6c-53a1-e0d528023097",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718287044242
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|ba52f25d-0ccb-0efb-7bc4-6ca7f377a457",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|ba52f25d-0ccb-0efb-7bc4-6ca7f377a457",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718287121021
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|ba52f25d-0ccb-0efb-7bc4-6ca7f377a457",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|ba52f25d-0ccb-0efb-7bc4-6ca7f377a457",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718287121022
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-78"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "26d6574c-5e77-c36a-641a-c77e8a2c5ef7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "26d6574c-5e77-c36a-641a-c77e8a2c5ef7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718375344181
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-77"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "26d6574c-5e77-c36a-641a-c77e8a2c5ef7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "26d6574c-5e77-c36a-641a-c77e8a2c5ef7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718375344182
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "26d6574c-5e77-c36a-641a-c77e8a2c5ef7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "26d6574c-5e77-c36a-641a-c77e8a2c5ef7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718377645591
        },
        "e-80": {
            "id": "e-80",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-79"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "26d6574c-5e77-c36a-641a-c77e8a2c5ef7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "26d6574c-5e77-c36a-641a-c77e8a2c5ef7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718377645592
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-71",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|2ee830fb-2cca-44d8-a180-abb43a2bc0d2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|2ee830fb-2cca-44d8-a180-abb43a2bc0d2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718615166004
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-69",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|2ee830fb-2cca-44d8-a180-abb43a2bc0d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|2ee830fb-2cca-44d8-a180-abb43a2bc0d5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718615166004
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-102"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|2ee830fb-2cca-44d8-a180-abb43a2bc0d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|2ee830fb-2cca-44d8-a180-abb43a2bc0d8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718615166004
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-67",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-104"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|2f4a9a18-b5c8-fc0b-a987-6b6aac6a77b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|2f4a9a18-b5c8-fc0b-a987-6b6aac6a77b0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718615168909
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-68",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|2f4a9a18-b5c8-fc0b-a987-6b6aac6a77b3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|2f4a9a18-b5c8-fc0b-a987-6b6aac6a77b3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718615168909
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|2f4a9a18-b5c8-fc0b-a987-6b6aac6a77b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|2f4a9a18-b5c8-fc0b-a987-6b6aac6a77b6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718615168909
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|2ac4d542-d795-c94b-ebc8-a43812b9d6b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|2ac4d542-d795-c94b-ebc8-a43812b9d6b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718622308037
        },
        "e-110": {
            "id": "e-110",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-109"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|2ac4d542-d795-c94b-ebc8-a43812b9d6b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|2ac4d542-d795-c94b-ebc8-a43812b9d6b7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718622308039
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|5f1cdc89-ceaf-ed99-a1b4-894d8184a723",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|5f1cdc89-ceaf-ed99-a1b4-894d8184a723",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718622962586
        },
        "e-112": {
            "id": "e-112",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-111"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|5f1cdc89-ceaf-ed99-a1b4-894d8184a723",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|5f1cdc89-ceaf-ed99-a1b4-894d8184a723",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1718622962587
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|7c04ae1f-5c29-c982-3e51-1710e199fcc6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|7c04ae1f-5c29-c982-3e51-1710e199fcc6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-65-p",
                "smoothing": 52,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1718623735307
        },
        "e-128": {
            "id": "e-128",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-72",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-129"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c9697e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c9697e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719415683325
        },
        "e-130": {
            "id": "e-130",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-73",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-131"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c96981",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c96981",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719415793957
        },
        "e-132": {
            "id": "e-132",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-74",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-133"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c96984",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c96984",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719415840079
        },
        "e-136": {
            "id": "e-136",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-76",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-137"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|41f09ad2-305e-608f-96e1-4e097823b4c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|41f09ad2-305e-608f-96e1-4e097823b4c3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719416019546
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-77",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-141"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|01b59b35-c0de-0dea-97ae-13db6fa51129",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|01b59b35-c0de-0dea-97ae-13db6fa51129",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719416186059
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|c1922b6a-6e60-8050-be42-c9440f6e6e9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|c1922b6a-6e60-8050-be42-c9440f6e6e9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719416678377
        },
        "e-144": {
            "id": "e-144",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-79",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-145"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c9698a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c9698a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719416803224
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-80",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-147"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c9697b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c9697b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719416863116
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-81",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-146"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c9697b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c9697b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1719416863152
        },
        "e-148": {
            "id": "e-148",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-82",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|cb34efbc-2e7f-5137-5d36-353f0898db0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|cb34efbc-2e7f-5137-5d36-353f0898db0d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-82-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1719418546686
        },
        "e-161": {
            "id": "e-161",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66042999871aa7aa9b3fe93a|a3dbc284-f06c-4763-2110-0adde07b9768",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66042999871aa7aa9b3fe93a|a3dbc284-f06c-4763-2110-0adde07b9768",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-65-p",
                "smoothing": 52,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1719419145316
        },
        "e-162": {
            "id": "e-162",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-83",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809c0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809c0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-83-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1719582428349
        },
        "e-163": {
            "id": "e-163",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-84",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba88099f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba88099f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-84-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1719582544292
        },
        "e-165": {
            "id": "e-165",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-86",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6630945cca5f1b1c12c9e047|a3254166-e876-5c7b-8a36-a70af30d74b2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6630945cca5f1b1c12c9e047|a3254166-e876-5c7b-8a36-a70af30d74b2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-86-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1719582854189
        },
        "e-166": {
            "id": "e-166",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-85",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6630945cca5f1b1c12c9e047|a8fea9a1-3560-9c0e-df31-f7d516ffbfaa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6630945cca5f1b1c12c9e047|a8fea9a1-3560-9c0e-df31-f7d516ffbfaa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-85-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1719583247184
        },
        "e-167": {
            "id": "e-167",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-88",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|19c2b08f-87c2-8605-d371-db91c4720be0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|19c2b08f-87c2-8605-d371-db91c4720be0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-88-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1719839946869
        },
        "e-168": {
            "id": "e-168",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-89",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|7c04ae1f-5c29-c982-3e51-1710e199fcc6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|7c04ae1f-5c29-c982-3e51-1710e199fcc6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-89-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1719840034379
        },
        "e-169": {
            "id": "e-169",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-90",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|60fc2880-ed92-1094-b9f1-95f04fb91a54",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|60fc2880-ed92-1094-b9f1-95f04fb91a54",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-90-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1719840119610
        },
        "e-170": {
            "id": "e-170",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-91",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|9ed8aacb-7c5f-887f-dae7-c1575a3caf5b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|9ed8aacb-7c5f-887f-dae7-c1575a3caf5b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721219805634
        },
        "e-172": {
            "id": "e-172",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-92",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-173"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|38503709-b3c3-18a4-59c3-685f22bbc27e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|38503709-b3c3-18a4-59c3-685f22bbc27e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1721220238064
        },
        "e-174": {
            "id": "e-174",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-175"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|03694ab7-e3cb-8b6c-614c-ecc250e2d00e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|03694ab7-e3cb-8b6c-614c-ecc250e2d00e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722940749047
        },
        "e-176": {
            "id": "e-176",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-177"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|e386c540-62bb-0397-176e-6a5dfb4a676c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|e386c540-62bb-0397-176e-6a5dfb4a676c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722940801669
        },
        "e-184": {
            "id": "e-184",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-185"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".card-title",
                "originalId": "662e7e3e5f4c3853d16e40b5|05f88a65-6fb1-6456-e642-c2f654d201e0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|05f88a65-6fb1-6456-e642-c2f654d201e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722941066219
        },
        "e-185": {
            "id": "e-185",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-184"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".card-title",
                "originalId": "662e7e3e5f4c3853d16e40b5|05f88a65-6fb1-6456-e642-c2f654d201e0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|05f88a65-6fb1-6456-e642-c2f654d201e0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1722941066246
        },
        "e-200": {
            "id": "e-200",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-201"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722941245796
        },
        "e-201": {
            "id": "e-201",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809c6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1722941245825
        },
        "e-212": {
            "id": "e-212",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-213"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 20,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722941332741
        },
        "e-213": {
            "id": "e-213",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-212"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809a5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1722941332743
        },
        "e-214": {
            "id": "e-214",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-215"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|d7ba4062-e0b1-af63-b88a-72bf3a4df07a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|d7ba4062-e0b1-af63-b88a-72bf3a4df07a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722941347494
        },
        "e-216": {
            "id": "e-216",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-217"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|fccfac03-9395-db1a-c46e-0c1f6c893af0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|fccfac03-9395-db1a-c46e-0c1f6c893af0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722941358126
        },
        "e-218": {
            "id": "e-218",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-219"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|8ce0d5e9-e847-f522-3d91-c7da20d1c92d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|8ce0d5e9-e847-f522-3d91-c7da20d1c92d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722941370237
        },
        "e-220": {
            "id": "e-220",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-221"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|30c3a32c-bbae-77c2-e475-f57e3f70e79c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|30c3a32c-bbae-77c2-e475-f57e3f70e79c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 35,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722941379572
        },
        "e-228": {
            "id": "e-228",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-229"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4e06f516-0193-9f03-0ace-3c96c548b6f1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4e06f516-0193-9f03-0ace-3c96c548b6f1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722941470534
        },
        "e-229": {
            "id": "e-229",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInLeft",
                    "autoStopEventId": "e-228"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "4e06f516-0193-9f03-0ace-3c96c548b6f1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "4e06f516-0193-9f03-0ace-3c96c548b6f1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "LEFT",
                "effectIn": true
            },
            "createdOn": 1722941470562
        },
        "e-246": {
            "id": "e-246",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInTop",
                    "autoStopEventId": "e-247"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "26d6574c-5e77-c36a-641a-c77e8a2c5ef5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "26d6574c-5e77-c36a-641a-c77e8a2c5ef5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 114,
                "direction": "TOP",
                "effectIn": true
            },
            "createdOn": 1722942178004
        },
        "e-248": {
            "id": "e-248",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-249"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|646016c0-3582-642e-eb58-6937fd6be094",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|646016c0-3582-642e-eb58-6937fd6be094",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1722942358477
        },
        "e-250": {
            "id": "e-250",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-251"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|a33a188e-ef41-c6d0-4b78-be9fe8331542",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|a33a188e-ef41-c6d0-4b78-be9fe8331542",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723624735427
        },
        "e-252": {
            "id": "e-252",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SPIN_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "spinInClockwise",
                    "autoStopEventId": "e-253"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|ab957404-0ce2-f8af-d138-520f1a1ac91b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|ab957404-0ce2-f8af-d138-520f1a1ac91b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 50,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "CLOCKWISE",
                "effectIn": true
            },
            "createdOn": 1723625046723
        },
        "e-254": {
            "id": "e-254",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-255"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|a054707d-ff6c-5a63-5361-74f9b469e558",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|a054707d-ff6c-5a63-5361-74f9b469e558",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723651599985
        },
        "e-255": {
            "id": "e-255",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-254"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|a054707d-ff6c-5a63-5361-74f9b469e558",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|a054707d-ff6c-5a63-5361-74f9b469e558",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723651599987
        },
        "e-260": {
            "id": "e-260",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-261"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|9076f2f4-61b6-1461-cba6-ceb7de3d8e6d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|9076f2f4-61b6-1461-cba6-ceb7de3d8e6d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723652604662
        },
        "e-266": {
            "id": "e-266",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-267"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723653024186
        },
        "e-267": {
            "id": "e-267",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-266"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723653024188
        },
        "e-270": {
            "id": "e-270",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-271"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|d6d06597-9756-c04f-3ca9-a50a2c37e8d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|d6d06597-9756-c04f-3ca9-a50a2c37e8d9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723653322160
        },
        "e-272": {
            "id": "e-272",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-273"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|894db829-3822-6f0d-2c2b-21e483ad4e04",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|894db829-3822-6f0d-2c2b-21e483ad4e04",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723653387379
        },
        "e-274": {
            "id": "e-274",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-275"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|55792bf4-3933-04f5-5aa4-584cb5ed10ac",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "selector": ".floating-block.solution-block-header",
                "originalId": "663a171ee5cc9d73779a867c|55792bf4-3933-04f5-5aa4-584cb5ed10ac",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723653406518
        },
        "e-278": {
            "id": "e-278",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-279"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|7fb00c22-d09b-b66a-21ce-1b0d2da24010",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|7fb00c22-d09b-b66a-21ce-1b0d2da24010",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723653468472
        },
        "e-279": {
            "id": "e-279",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-278"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|7fb00c22-d09b-b66a-21ce-1b0d2da24010",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|7fb00c22-d09b-b66a-21ce-1b0d2da24010",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723653468473
        },
        "e-280": {
            "id": "e-280",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-281"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|8b0f4721-d324-3406-f6ab-ea403a551d9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|8b0f4721-d324-3406-f6ab-ea403a551d9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723653511860
        },
        "e-281": {
            "id": "e-281",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-280"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|8b0f4721-d324-3406-f6ab-ea403a551d9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|8b0f4721-d324-3406-f6ab-ea403a551d9b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723653511861
        },
        "e-282": {
            "id": "e-282",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-283"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|a08c0f10-585b-19cd-347c-b45c4909f2b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|a08c0f10-585b-19cd-347c-b45c4909f2b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 40,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723653540377
        },
        "e-283": {
            "id": "e-283",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-282"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|a08c0f10-585b-19cd-347c-b45c4909f2b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|a08c0f10-585b-19cd-347c-b45c4909f2b8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723653540416
        },
        "e-286": {
            "id": "e-286",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-287"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".heading-33",
                "originalId": "663a171ee5cc9d73779a867c|a381f742-6add-7337-e8ea-3e32cb6485a1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-33",
                "originalId": "663a171ee5cc9d73779a867c|a381f742-6add-7337-e8ea-3e32cb6485a1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723653593278
        },
        "e-287": {
            "id": "e-287",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-286"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".heading-33",
                "originalId": "663a171ee5cc9d73779a867c|a381f742-6add-7337-e8ea-3e32cb6485a1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".heading-33",
                "originalId": "663a171ee5cc9d73779a867c|a381f742-6add-7337-e8ea-3e32cb6485a1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723653593279
        },
        "e-290": {
            "id": "e-290",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-291"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|7c67a3bf-d006-157e-4aaf-689129171ef0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|7c67a3bf-d006-157e-4aaf-689129171ef0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723653664208
        },
        "e-296": {
            "id": "e-296",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-297"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|19c2b08f-87c2-8605-d371-db91c4720be6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|19c2b08f-87c2-8605-d371-db91c4720be6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723654035145
        },
        "e-297": {
            "id": "e-297",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-296"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|19c2b08f-87c2-8605-d371-db91c4720be6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|19c2b08f-87c2-8605-d371-db91c4720be6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723654035147
        },
        "e-300": {
            "id": "e-300",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-301"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|f528932b-06b0-0ee6-a4b5-51aab489336e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|f528932b-06b0-0ee6-a4b5-51aab489336e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723654087673
        },
        "e-301": {
            "id": "e-301",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-300"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|f528932b-06b0-0ee6-a4b5-51aab489336e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|f528932b-06b0-0ee6-a4b5-51aab489336e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723654087710
        },
        "e-302": {
            "id": "e-302",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-303"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|70bf0608-588c-6e84-3079-c1a0d73ac8ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|70bf0608-588c-6e84-3079-c1a0d73ac8ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 25,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723654108135
        },
        "e-303": {
            "id": "e-303",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-302"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|70bf0608-588c-6e84-3079-c1a0d73ac8ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|70bf0608-588c-6e84-3079-c1a0d73ac8ba",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723654108137
        },
        "e-304": {
            "id": "e-304",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-305"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|93eab23f-3533-df83-323c-77cfc0097fd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|93eab23f-3533-df83-323c-77cfc0097fd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723654125685
        },
        "e-305": {
            "id": "e-305",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-304"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|93eab23f-3533-df83-323c-77cfc0097fd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|93eab23f-3533-df83-323c-77cfc0097fd2",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723654125686
        },
        "e-306": {
            "id": "e-306",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-307"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|23b8065d-6042-1834-5cf2-6ddcc103842f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|23b8065d-6042-1834-5cf2-6ddcc103842f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 35,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723654148312
        },
        "e-307": {
            "id": "e-307",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-306"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662fcc7858c2fdee6b48e24b|23b8065d-6042-1834-5cf2-6ddcc103842f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662fcc7858c2fdee6b48e24b|23b8065d-6042-1834-5cf2-6ddcc103842f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723654148313
        },
        "e-322": {
            "id": "e-322",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-323"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".why-title",
                "originalId": "6630945cca5f1b1c12c9e047|70154259-f9bb-1db2-1206-c12685c3c51d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".why-title",
                "originalId": "6630945cca5f1b1c12c9e047|70154259-f9bb-1db2-1206-c12685c3c51d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723654477929
        },
        "e-323": {
            "id": "e-323",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-322"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".why-title",
                "originalId": "6630945cca5f1b1c12c9e047|70154259-f9bb-1db2-1206-c12685c3c51d",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".why-title",
                "originalId": "6630945cca5f1b1c12c9e047|70154259-f9bb-1db2-1206-c12685c3c51d",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723654477931
        },
        "e-324": {
            "id": "e-324",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-325"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6630945cca5f1b1c12c9e047|a8fea9a1-3560-9c0e-df31-f7d516ffbfaa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6630945cca5f1b1c12c9e047|a8fea9a1-3560-9c0e-df31-f7d516ffbfaa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723654521690
        },
        "e-325": {
            "id": "e-325",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-324"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6630945cca5f1b1c12c9e047|a8fea9a1-3560-9c0e-df31-f7d516ffbfaa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6630945cca5f1b1c12c9e047|a8fea9a1-3560-9c0e-df31-f7d516ffbfaa",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723654521729
        },
        "e-326": {
            "id": "e-326",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-327"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".floating-block.know-your-team",
                "originalId": "6630945cca5f1b1c12c9e047|f892cbd2-eb2e-37a3-5804-4f643e0f11cf",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".floating-block.know-your-team",
                "originalId": "6630945cca5f1b1c12c9e047|f892cbd2-eb2e-37a3-5804-4f643e0f11cf",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723654547097
        },
        "e-327": {
            "id": "e-327",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-326"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".floating-block.know-your-team",
                "originalId": "6630945cca5f1b1c12c9e047|f892cbd2-eb2e-37a3-5804-4f643e0f11cf",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".floating-block.know-your-team",
                "originalId": "6630945cca5f1b1c12c9e047|f892cbd2-eb2e-37a3-5804-4f643e0f11cf",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723654547099
        },
        "e-328": {
            "id": "e-328",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-329"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6630945cca5f1b1c12c9e047|25ab1b57-4bea-35dc-bc17-8fd1d8bac7fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6630945cca5f1b1c12c9e047|25ab1b57-4bea-35dc-bc17-8fd1d8bac7fe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723654573224
        },
        "e-334": {
            "id": "e-334",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-335"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".collection-item-5",
                "originalId": "663667e1ea163d9bb2c0dd8f|a1782cc9-7ccc-4642-c85f-c3f8bdd93971",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".collection-item-5",
                "originalId": "663667e1ea163d9bb2c0dd8f|a1782cc9-7ccc-4642-c85f-c3f8bdd93971",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723654716895
        },
        "e-338": {
            "id": "e-338",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-339"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".collection-item-6",
                "originalId": "663667e1ea163d9bb2c0dd8f|d986537a-5930-ddee-df48-124079c39519",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".collection-item-6",
                "originalId": "663667e1ea163d9bb2c0dd8f|d986537a-5930-ddee-df48-124079c39519",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723654774460
        },
        "e-340": {
            "id": "e-340",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-341"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".single-latest-entry",
                "originalId": "663667e1ea163d9bb2c0dd8f|7cd58045-b19c-0a52-dc7c-9ecda11dbaf2",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".single-latest-entry",
                "originalId": "663667e1ea163d9bb2c0dd8f|7cd58045-b19c-0a52-dc7c-9ecda11dbaf2",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723654894441
        },
        "e-342": {
            "id": "e-342",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-343"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663667e1ea163d9bb2c0dd8f|7cd58045-b19c-0a52-dc7c-9ecda11dbae9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663667e1ea163d9bb2c0dd8f|7cd58045-b19c-0a52-dc7c-9ecda11dbae9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723654976592
        },
        "e-346": {
            "id": "e-346",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-347"
                }
            },
            "mediaQueries": ["main", "medium", "tiny", "small"],
            "target": {
                "id": "663a170d38c83a29088ef839|3dfe9092-40fb-60fe-ee14-441b0d56d0ce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a170d38c83a29088ef839|3dfe9092-40fb-60fe-ee14-441b0d56d0ce",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655029987
        },
        "e-350": {
            "id": "e-350",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-351"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a170d38c83a29088ef839|47ed09dc-6bdb-8715-ab55-d134c4a2fea9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a170d38c83a29088ef839|47ed09dc-6bdb-8715-ab55-d134c4a2fea9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655088062
        },
        "e-356": {
            "id": "e-356",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-357"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66a0ea2de59e9a5fc80ea6cd|8a3d22cd-c882-0382-ff11-64d75ebf3d23",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66a0ea2de59e9a5fc80ea6cd|8a3d22cd-c882-0382-ff11-64d75ebf3d23",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655267531
        },
        "e-357": {
            "id": "e-357",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-356"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66a0ea2de59e9a5fc80ea6cd|8a3d22cd-c882-0382-ff11-64d75ebf3d23",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66a0ea2de59e9a5fc80ea6cd|8a3d22cd-c882-0382-ff11-64d75ebf3d23",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723655267532
        },
        "e-358": {
            "id": "e-358",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-359"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66a0ea2de59e9a5fc80ea6cd|64fa1002-6880-6817-84fe-6c26de62e151",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66a0ea2de59e9a5fc80ea6cd|64fa1002-6880-6817-84fe-6c26de62e151",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655309250
        },
        "e-359": {
            "id": "e-359",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-358"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66a0ea2de59e9a5fc80ea6cd|64fa1002-6880-6817-84fe-6c26de62e151",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66a0ea2de59e9a5fc80ea6cd|64fa1002-6880-6817-84fe-6c26de62e151",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723655309293
        },
        "e-360": {
            "id": "e-360",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-361"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66a0ea2de59e9a5fc80ea6cd|99b48232-9d23-c907-4f0b-3dec5139539b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66a0ea2de59e9a5fc80ea6cd|99b48232-9d23-c907-4f0b-3dec5139539b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655338469
        },
        "e-361": {
            "id": "e-361",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-360"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66a0ea2de59e9a5fc80ea6cd|99b48232-9d23-c907-4f0b-3dec5139539b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66a0ea2de59e9a5fc80ea6cd|99b48232-9d23-c907-4f0b-3dec5139539b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723655338509
        },
        "e-368": {
            "id": "e-368",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-369"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66042999871aa7aa9b3fe93a|d9989eec-7777-fce5-7af3-376719e9e211",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66042999871aa7aa9b3fe93a|d9989eec-7777-fce5-7af3-376719e9e211",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655482171
        },
        "e-370": {
            "id": "e-370",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-371"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "66366614c40e1c7544492f80|5ebcb280-2249-5ecd-ba87-f3a49d5792b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66366614c40e1c7544492f80|5ebcb280-2249-5ecd-ba87-f3a49d5792b9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655519013
        },
        "e-372": {
            "id": "e-372",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-373"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66366614c40e1c7544492f80|9748cb85-85e6-5446-46f8-5d34dafddbdf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66366614c40e1c7544492f80|9748cb85-85e6-5446-46f8-5d34dafddbdf",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655540424
        },
        "e-374": {
            "id": "e-374",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-375"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66366614c40e1c7544492f80|247cb231-4eac-91c6-7117-86980774bde9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66366614c40e1c7544492f80|247cb231-4eac-91c6-7117-86980774bde9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655559747
        },
        "e-376": {
            "id": "e-376",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-377"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66366614c40e1c7544492f80|9ea4c17c-b723-b9b3-e6a8-9ea8d8ddecec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66366614c40e1c7544492f80|9ea4c17c-b723-b9b3-e6a8-9ea8d8ddecec",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655590888
        },
        "e-378": {
            "id": "e-378",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-379"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66366614c40e1c7544492f80|3fbce182-b62f-b720-fce6-a56a5d26f40f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66366614c40e1c7544492f80|3fbce182-b62f-b720-fce6-a56a5d26f40f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655619163
        },
        "e-380": {
            "id": "e-380",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-381"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "66713deb986cb72c8419794b|05759458-bf3a-1e07-4b8a-e6b398599c6f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "66713deb986cb72c8419794b|05759458-bf3a-1e07-4b8a-e6b398599c6f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655663324
        },
        "e-382": {
            "id": "e-382",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-383"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|c79597c7-a223-9595-8bad-9de3818fdc7f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|c79597c7-a223-9595-8bad-9de3818fdc7f",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655749996
        },
        "e-384": {
            "id": "e-384",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-385"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".latest-news-single",
                "originalId": "65fc1876777e6eaf167fad4e|22698805-6ea5-9591-2df5-aeb604c9230c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".latest-news-single",
                "originalId": "65fc1876777e6eaf167fad4e|22698805-6ea5-9591-2df5-aeb604c9230c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655776590
        },
        "e-386": {
            "id": "e-386",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-387"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".hiring-single",
                "originalId": "65fc1876777e6eaf167fad4e|0bb151f5-a0f4-3e11-8a68-3f01e904c722",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".hiring-single",
                "originalId": "65fc1876777e6eaf167fad4e|0bb151f5-a0f4-3e11-8a68-3f01e904c722",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723655866822
        },
        "e-394": {
            "id": "e-394",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-395"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|f5771d09-1aaa-eff0-d7bb-edaf9c33d0d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|f5771d09-1aaa-eff0-d7bb-edaf9c33d0d3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723656196247
        },
        "e-396": {
            "id": "e-396",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-397"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|f5771d09-1aaa-eff0-d7bb-edaf9c33d0d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|f5771d09-1aaa-eff0-d7bb-edaf9c33d0d4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723656209111
        },
        "e-398": {
            "id": "e-398",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-399"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|0a08f14b-6c1a-7deb-a090-ae452e2aee95",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|0a08f14b-6c1a-7deb-a090-ae452e2aee95",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723656225830
        },
        "e-400": {
            "id": "e-400",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-401"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|8bd62050-28d4-ae6c-53a1-e0d528023098",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|8bd62050-28d4-ae6c-53a1-e0d528023098",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723656236830
        },
        "e-402": {
            "id": "e-402",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-403"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|4ad42184-faaa-c874-0d1f-2cf851ae482b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|4ad42184-faaa-c874-0d1f-2cf851ae482b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723656321077
        },
        "e-404": {
            "id": "e-404",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-405"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|827eb850-67b3-48a2-c869-08bfa1de6bc6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|827eb850-67b3-48a2-c869-08bfa1de6bc6",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723656359574
        },
        "e-406": {
            "id": "e-406",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-407"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|827eb850-67b3-48a2-c869-08bfa1de6bc7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|827eb850-67b3-48a2-c869-08bfa1de6bc7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723656378301
        },
        "e-408": {
            "id": "e-408",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-409"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|f5771d09-1aaa-eff0-d7bb-edaf9c33d0d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|f5771d09-1aaa-eff0-d7bb-edaf9c33d0d7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723656473855
        },
        "e-410": {
            "id": "e-410",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-411"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".careers-title",
                "originalId": "663a171ee5cc9d73779a867c|ab957404-0ce2-f8af-d138-520f1a1ac91a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".careers-title",
                "originalId": "663a171ee5cc9d73779a867c|ab957404-0ce2-f8af-d138-520f1a1ac91a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723657361190
        },
        "e-412": {
            "id": "e-412",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-413"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".tile-link-block",
                "originalId": "662e7e3e5f4c3853d16e40b5|1dbe74ae-9a7f-f02d-6d73-0ca8d76228e4",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".tile-link-block",
                "originalId": "662e7e3e5f4c3853d16e40b5|1dbe74ae-9a7f-f02d-6d73-0ca8d76228e4",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723657407032
        },
        "e-414": {
            "id": "e-414",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-415"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".stacking-link",
                "originalId": "662fcc7858c2fdee6b48e24b|d7e06f1f-da20-1a96-3ea0-e1b1a058a424",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".stacking-link",
                "originalId": "662fcc7858c2fdee6b48e24b|d7e06f1f-da20-1a96-3ea0-e1b1a058a424",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723657494324
        },
        "e-418": {
            "id": "e-418",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-419"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|44e8be01-00fa-c33c-b004-1d243dc0aac0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|44e8be01-00fa-c33c-b004-1d243dc0aac0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723658213610
        },
        "e-419": {
            "id": "e-419",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-418"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|44e8be01-00fa-c33c-b004-1d243dc0aac0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|44e8be01-00fa-c33c-b004-1d243dc0aac0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723658213611
        },
        "e-420": {
            "id": "e-420",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-421"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|44e8be01-00fa-c33c-b004-1d243dc0aabe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|44e8be01-00fa-c33c-b004-1d243dc0aabe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723658224640
        },
        "e-421": {
            "id": "e-421",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-420"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|44e8be01-00fa-c33c-b004-1d243dc0aabe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|44e8be01-00fa-c33c-b004-1d243dc0aabe",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723658224667
        },
        "e-422": {
            "id": "e-422",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-423"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|fd58182b-a3ed-2291-7662-d3c0859e7f28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|fd58182b-a3ed-2291-7662-d3c0859e7f28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723658253292
        },
        "e-423": {
            "id": "e-423",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-422"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|fd58182b-a3ed-2291-7662-d3c0859e7f28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|fd58182b-a3ed-2291-7662-d3c0859e7f28",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723658253294
        },
        "e-424": {
            "id": "e-424",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-425"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|fd58182b-a3ed-2291-7662-d3c0859e7f26",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|fd58182b-a3ed-2291-7662-d3c0859e7f26",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723658269574
        },
        "e-425": {
            "id": "e-425",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-424"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|fd58182b-a3ed-2291-7662-d3c0859e7f26",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|fd58182b-a3ed-2291-7662-d3c0859e7f26",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723658269575
        },
        "e-426": {
            "id": "e-426",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-427"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723658287985
        },
        "e-427": {
            "id": "e-427",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-426"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809fb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723658287989
        },
        "e-428": {
            "id": "e-428",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-429"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723658305524
        },
        "e-429": {
            "id": "e-429",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-428"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "662e7e3e5f4c3853d16e40b5|c0ac2c9e-7eee-8752-ce12-604eba8809f9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723658305525
        },
        "e-430": {
            "id": "e-430",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-431"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "8403e72f-e976-7533-f67f-8fd7aa1a4cb8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "8403e72f-e976-7533-f67f-8fd7aa1a4cb8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723658502895
        },
        "e-432": {
            "id": "e-432",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-433"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".quick-stack-2",
                "originalId": "8e913dbd-084f-928f-f996-e34233002883",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".quick-stack-2",
                "originalId": "8e913dbd-084f-928f-f996-e34233002883",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723708754956
        },
        "e-434": {
            "id": "e-434",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-435"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6630945cca5f1b1c12c9e047|a3254166-e876-5c7b-8a36-a70af30d74b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6630945cca5f1b1c12c9e047|a3254166-e876-5c7b-8a36-a70af30d74b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723709069968
        },
        "e-435": {
            "id": "e-435",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-434"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6630945cca5f1b1c12c9e047|a3254166-e876-5c7b-8a36-a70af30d74b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6630945cca5f1b1c12c9e047|a3254166-e876-5c7b-8a36-a70af30d74b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1723709069969
        },
        "e-436": {
            "id": "e-436",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-437"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a170d38c83a29088ef839|c9175bed-5ce3-60dd-5174-99030ce11e71",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a170d38c83a29088ef839|c9175bed-5ce3-60dd-5174-99030ce11e71",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 30,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1723709797678
        },
        "e-438": {
            "id": "e-438",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-439"
                }
            },
            "mediaQueries": ["tiny", "small", "medium"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|2b231835-a4a0-f5cb-0fab-5b194ff5cdb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|2b231835-a4a0-f5cb-0fab-5b194ff5cdb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725265719959
        },
        "e-439": {
            "id": "e-439",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideOutTop",
                    "autoStopEventId": "e-438"
                }
            },
            "mediaQueries": ["tiny", "small", "medium"],
            "target": {
                "id": "65fc1876777e6eaf167fad4e|2b231835-a4a0-f5cb-0fab-5b194ff5cdb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "65fc1876777e6eaf167fad4e|2b231835-a4a0-f5cb-0fab-5b194ff5cdb5",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "TOP",
                "effectIn": false
            },
            "createdOn": 1725265719959
        },
        "e-440": {
            "id": "e-440",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-89",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|be08339f-8bb5-28ee-9f4e-5ac010723972",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|be08339f-8bb5-28ee-9f4e-5ac010723972",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-89-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1725624748072
        },
        "e-441": {
            "id": "e-441",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "663a171ee5cc9d73779a867c|be08339f-8bb5-28ee-9f4e-5ac010723972",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "663a171ee5cc9d73779a867c|be08339f-8bb5-28ee-9f4e-5ac010723972",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-65-p",
                "smoothing": 52,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1725624748072
        },
        "e-442": {
            "id": "e-442",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-443"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".graph",
                "originalId": "663a171ee5cc9d73779a867c|d8cd241b-873b-d2a4-40eb-ab38eed563e0",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".graph",
                "originalId": "663a171ee5cc9d73779a867c|d8cd241b-873b-d2a4-40eb-ab38eed563e0",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 0,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1725955160097
        },
        "e-474": {
            "id": "e-474",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "SLIDE_EFFECT",
                "instant": false,
                "config": {
                    "actionListId": "slideInBottom",
                    "autoStopEventId": "e-475"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "6b92799a-5b03-c414-ea42-45bbb17d392c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "6b92799a-5b03-c414-ea42-45bbb17d392c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": 200,
                "direction": "BOTTOM",
                "effectIn": true
            },
            "createdOn": 1726048015350
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Display Details",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "boundaryMode": true,
                            "id": "6630945cca5f1b1c12c9e047|153dcabf-3bda-52e4-df67-20d18e1f022a"
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "boundaryMode": true,
                            "id": "6630945cca5f1b1c12c9e047|153dcabf-3bda-52e4-df67-20d18e1f022a"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "easeIn",
                        "duration": 100,
                        "target": {
                            "boundaryMode": true,
                            "id": "6630945cca5f1b1c12c9e047|053f886f-9239-a57d-9b49-f53e7e8b5214"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1712068670079
        },
        "a-2": {
            "id": "a-2",
            "title": "Hide Details",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "boundaryMode": true,
                            "id": "6630945cca5f1b1c12c9e047|153dcabf-3bda-52e4-df67-20d18e1f022a"
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-4",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "boundaryMode": true,
                            "id": "6630945cca5f1b1c12c9e047|053f886f-9239-a57d-9b49-f53e7e8b5214"
                        },
                        "globalSwatchId": "--superpeople-white",
                        "rValue": 235,
                        "bValue": 225,
                        "gValue": 235,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1714753862014
        },
        "a-7": {
            "id": "a-7",
            "title": "Display Details 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "boundaryMode": true,
                            "id": "663a171ee5cc9d73779a867c|fa933688-2dcc-c247-03ba-19cd69941591"
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "boundaryMode": true,
                            "id": "663a171ee5cc9d73779a867c|fa933688-2dcc-c247-03ba-19cd69941591"
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-6",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "boundaryMode": true,
                            "id": "663a171ee5cc9d73779a867c|e878dfa2-d611-30a4-18ea-39066675bb1c"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1712068670079
        },
        "a-8": {
            "id": "a-8",
            "title": "Hide Details 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "boundaryMode": true,
                            "id": "663a171ee5cc9d73779a867c|fa933688-2dcc-c247-03ba-19cd69941591"
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "boundaryMode": true,
                            "id": "663a171ee5cc9d73779a867c|e878dfa2-d611-30a4-18ea-39066675bb1c"
                        },
                        "globalSwatchId": "--superpeople-earth",
                        "rValue": 202,
                        "bValue": 187,
                        "gValue": 207,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1714753862014
        },
        "a-17": {
            "id": "a-17",
            "title": "Blog PW",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "663667e1ea163d9bb2c0dd8f|39c95802-f1d6-e72c-bad9-043e77fd0b9f"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-17-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all.non-yellow",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-17-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-17-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-17-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-17-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-17-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-17-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-17-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".awards",
                            "selectorGuids": ["d46f0f77-d7cf-110a-9f22-ea255ded4ee4"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-17-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715785723047
        },
        "a-18": {
            "id": "a-18",
            "title": "Blog Events",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "663667e1ea163d9bb2c0dd8f|39c95802-f1d6-e72c-bad9-043e77fd0b9f"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-18-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all.non-yellow",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-18-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-18-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-18-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-18-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-18-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-18-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-18-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".awards",
                            "selectorGuids": ["d46f0f77-d7cf-110a-9f22-ea255ded4ee4"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-18-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715785723047
        },
        "a-19": {
            "id": "a-19",
            "title": "Blog Team",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "663667e1ea163d9bb2c0dd8f|39c95802-f1d6-e72c-bad9-043e77fd0b9f"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-19-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all.non-yellow",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-19-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-19-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-19-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-19-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-19-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-19-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-19-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".awards",
                            "selectorGuids": ["d46f0f77-d7cf-110a-9f22-ea255ded4ee4"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-19-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715785723047
        },
        "a-20": {
            "id": "a-20",
            "title": "Blog General",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "663667e1ea163d9bb2c0dd8f|39c95802-f1d6-e72c-bad9-043e77fd0b9f"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-20-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all.non-yellow",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-20-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-20-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-20-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-20-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-20-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-20-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-20-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715785723047
        },
        "a-21": {
            "id": "a-21",
            "title": "Blog All",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "663667e1ea163d9bb2c0dd8f|39c95802-f1d6-e72c-bad9-043e77fd0b9f"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-21-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all.non-yellow",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-21-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-21-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-21-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-21-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-21-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-21-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".awards",
                            "selectorGuids": ["d46f0f77-d7cf-110a-9f22-ea255ded4ee4"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-21-n-10",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all.hide-tablet-down",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "95be699a-297f-50f4-7b61-a29e367cfbab"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-21-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715785723047
        },
        "a-24": {
            "id": "a-24",
            "title": "Management Dept",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".category-all.non-yellow.people",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3", "c98eaab3-3f91-01fb-0d84-3881b442955c"]
                        },
                        "globalSwatchId": "--superpeople-earth",
                        "rValue": 202,
                        "bValue": 187,
                        "gValue": 207,
                        "aValue": 1
                    }
                }, {
                    "id": "a-24-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27462"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-24-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": "--superpeople-earth",
                        "rValue": 202,
                        "bValue": 187,
                        "gValue": 207,
                        "aValue": 1
                    }
                }, {
                    "id": "a-24-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".people-all",
                            "selectorGuids": ["012e96fc-94b0-aa7a-33be-a42cfe323d19"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-24-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".management-dept",
                            "selectorGuids": ["a74f3e91-3e77-b467-58df-c25a38696fae"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-24-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".administration-dept",
                            "selectorGuids": ["9e6e2b49-a5e9-de01-6075-2f845afe8d83"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-24-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".technology-dept",
                            "selectorGuids": ["d1ac6d72-64f0-ae13-f13c-68889c4e2725"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-24-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".commercial-dept",
                            "selectorGuids": ["4e563246-6385-ba16-dd3c-e0835c6bb1eb"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-24-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".rd-dept",
                            "selectorGuids": ["01321139-0b9c-8e06-dca5-969f03a651cd"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715943896715
        },
        "a-27": {
            "id": "a-27",
            "title": "Tech Dept",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".category-all.non-yellow.people",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3", "c98eaab3-3f91-01fb-0d84-3881b442955c"]
                        },
                        "globalSwatchId": "--superpeople-earth",
                        "rValue": 202,
                        "bValue": 187,
                        "gValue": 207,
                        "aValue": 1
                    }
                }, {
                    "id": "a-27-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27462"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-27-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": "--superpeople-earth",
                        "rValue": 202,
                        "bValue": 187,
                        "gValue": 207,
                        "aValue": 1
                    }
                }, {
                    "id": "a-27-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".people-all",
                            "selectorGuids": ["012e96fc-94b0-aa7a-33be-a42cfe323d19"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-27-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".administration-dept",
                            "selectorGuids": ["9e6e2b49-a5e9-de01-6075-2f845afe8d83"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-27-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".rd-dept",
                            "selectorGuids": ["01321139-0b9c-8e06-dca5-969f03a651cd"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-27-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".management-dept",
                            "selectorGuids": ["a74f3e91-3e77-b467-58df-c25a38696fae"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-27-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".technology-dept",
                            "selectorGuids": ["d1ac6d72-64f0-ae13-f13c-68889c4e2725"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-27-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".commercial-dept",
                            "selectorGuids": ["4e563246-6385-ba16-dd3c-e0835c6bb1eb"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715943896715
        },
        "a-29": {
            "id": "a-29",
            "title": "All Dept",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".category-all.non-yellow.people",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3", "c98eaab3-3f91-01fb-0d84-3881b442955c"]
                        },
                        "globalSwatchId": "--superpeople-earth",
                        "rValue": 202,
                        "bValue": 187,
                        "gValue": 207,
                        "aValue": 1
                    }
                }, {
                    "id": "a-29-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27462"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-29-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".people-all",
                            "selectorGuids": ["012e96fc-94b0-aa7a-33be-a42cfe323d19"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-29-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".administration-dept",
                            "selectorGuids": ["9e6e2b49-a5e9-de01-6075-2f845afe8d83"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-29-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".rd-dept",
                            "selectorGuids": ["01321139-0b9c-8e06-dca5-969f03a651cd"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-29-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".management-dept",
                            "selectorGuids": ["a74f3e91-3e77-b467-58df-c25a38696fae"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-29-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".technology-dept",
                            "selectorGuids": ["d1ac6d72-64f0-ae13-f13c-68889c4e2725"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-29-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".commercial-dept",
                            "selectorGuids": ["4e563246-6385-ba16-dd3c-e0835c6bb1eb"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715943896715
        },
        "a-30": {
            "id": "a-30",
            "title": "RandD Dept",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".category-all.non-yellow.people",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3", "c98eaab3-3f91-01fb-0d84-3881b442955c"]
                        },
                        "globalSwatchId": "--superpeople-earth",
                        "rValue": 202,
                        "bValue": 187,
                        "gValue": 207,
                        "aValue": 1
                    }
                }, {
                    "id": "a-30-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27462"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-30-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": "--superpeople-earth",
                        "rValue": 202,
                        "bValue": 187,
                        "gValue": 207,
                        "aValue": 1
                    }
                }, {
                    "id": "a-30-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".people-all",
                            "selectorGuids": ["012e96fc-94b0-aa7a-33be-a42cfe323d19"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".administration-dept",
                            "selectorGuids": ["9e6e2b49-a5e9-de01-6075-2f845afe8d83"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".rd-dept",
                            "selectorGuids": ["01321139-0b9c-8e06-dca5-969f03a651cd"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-30-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".management-dept",
                            "selectorGuids": ["a74f3e91-3e77-b467-58df-c25a38696fae"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".technology-dept",
                            "selectorGuids": ["d1ac6d72-64f0-ae13-f13c-68889c4e2725"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-30-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".commercial-dept",
                            "selectorGuids": ["4e563246-6385-ba16-dd3c-e0835c6bb1eb"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715943896715
        },
        "a-31": {
            "id": "a-31",
            "title": "Administration Dept",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".category-all.non-yellow.people",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3", "c98eaab3-3f91-01fb-0d84-3881b442955c"]
                        },
                        "globalSwatchId": "--superpeople-earth",
                        "rValue": 202,
                        "bValue": 187,
                        "gValue": 207,
                        "aValue": 1
                    }
                }, {
                    "id": "a-31-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27462"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-31-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": "--superpeople-earth",
                        "rValue": 202,
                        "bValue": 187,
                        "gValue": 207,
                        "aValue": 1
                    }
                }, {
                    "id": "a-31-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".people-all",
                            "selectorGuids": ["012e96fc-94b0-aa7a-33be-a42cfe323d19"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-31-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".management-dept",
                            "selectorGuids": ["a74f3e91-3e77-b467-58df-c25a38696fae"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-31-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".administration-dept",
                            "selectorGuids": ["9e6e2b49-a5e9-de01-6075-2f845afe8d83"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-31-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".technology-dept",
                            "selectorGuids": ["d1ac6d72-64f0-ae13-f13c-68889c4e2725"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-31-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".commercial-dept",
                            "selectorGuids": ["4e563246-6385-ba16-dd3c-e0835c6bb1eb"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-31-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".rd-dept",
                            "selectorGuids": ["01321139-0b9c-8e06-dca5-969f03a651cd"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715943896715
        },
        "a-28": {
            "id": "a-28",
            "title": "Commercial Dept",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".category-all.non-yellow.people",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3", "c98eaab3-3f91-01fb-0d84-3881b442955c"]
                        },
                        "globalSwatchId": "--superpeople-earth",
                        "rValue": 202,
                        "bValue": 187,
                        "gValue": 207,
                        "aValue": 1
                    }
                }, {
                    "id": "a-28-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27462"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-28-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": "--superpeople-earth",
                        "rValue": 202,
                        "bValue": 187,
                        "gValue": 207,
                        "aValue": 1
                    }
                }, {
                    "id": "a-28-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".people-all",
                            "selectorGuids": ["012e96fc-94b0-aa7a-33be-a42cfe323d19"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-28-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".administration-dept",
                            "selectorGuids": ["9e6e2b49-a5e9-de01-6075-2f845afe8d83"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-28-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".rd-dept",
                            "selectorGuids": ["01321139-0b9c-8e06-dca5-969f03a651cd"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-28-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".management-dept",
                            "selectorGuids": ["a74f3e91-3e77-b467-58df-c25a38696fae"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-28-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".technology-dept",
                            "selectorGuids": ["d1ac6d72-64f0-ae13-f13c-68889c4e2725"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-28-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".commercial-dept",
                            "selectorGuids": ["4e563246-6385-ba16-dd3c-e0835c6bb1eb"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715943896715
        },
        "a-42": {
            "id": "a-42",
            "title": "People Popup Hide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-42-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dynamic-slider",
                            "selectorGuids": ["83fcb640-8c73-e551-cc15-7b06f3de3377"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-42-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".gradient",
                            "selectorGuids": ["fd02b6a7-9e90-fe5d-5922-0dfed2225313"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1716464728123
        },
        "a-43": {
            "id": "a-43",
            "title": "New Scroll Animation",
            "continuousParameterGroups": [{
                "id": "a-43-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-43-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.solution.plastic",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "7f41a29b-1bc1-09bf-6d2d-ba42fdcbd84c"]
                            },
                            "globalSwatchId": "--superpeople-sky",
                            "rValue": 217,
                            "bValue": 223,
                            "gValue": 223,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 4,
                    "actionItems": [{
                        "id": "a-43-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.solution.plastic",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "7f41a29b-1bc1-09bf-6d2d-ba42fdcbd84c"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 25,
                    "actionItems": [{
                        "id": "a-43-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.solution.plastic",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "7f41a29b-1bc1-09bf-6d2d-ba42fdcbd84c"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-43-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.solution.plastic",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "7f41a29b-1bc1-09bf-6d2d-ba42fdcbd84c"]
                            },
                            "globalSwatchId": "--superpeople-sky",
                            "rValue": 217,
                            "bValue": 223,
                            "gValue": 223,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1716551179371
        },
        "a-44": {
            "id": "a-44",
            "title": "Polyester Highlight",
            "continuousParameterGroups": [{
                "id": "a-44-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-44-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.solution.polyester",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "1413408e-964d-1e4e-e0b5-5d1d294b1b1b"]
                            },
                            "globalSwatchId": "--superpeople-sky",
                            "rValue": 217,
                            "bValue": 223,
                            "gValue": 223,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 6,
                    "actionItems": [{
                        "id": "a-44-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.solution.polyester",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "1413408e-964d-1e4e-e0b5-5d1d294b1b1b"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-44-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.solution.polyester",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "1413408e-964d-1e4e-e0b5-5d1d294b1b1b"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 87,
                    "actionItems": [{
                        "id": "a-44-n-5",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.solution.polyester",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "1413408e-964d-1e4e-e0b5-5d1d294b1b1b"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-44-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.solution.polyester",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "1413408e-964d-1e4e-e0b5-5d1d294b1b1b"]
                            },
                            "globalSwatchId": "--superpeople-sky",
                            "rValue": 217,
                            "bValue": 223,
                            "gValue": 223,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1716551693815
        },
        "a-45": {
            "id": "a-45",
            "title": "New Scroll Animation",
            "continuousParameterGroups": [{
                "id": "a-45-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-45-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".table-title.solution.discuss",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "bf6db3fe-577c-5a87-acca-b90cc75398b3"]
                            },
                            "globalSwatchId": "--superpeople-sky",
                            "rValue": 217,
                            "bValue": 223,
                            "gValue": 223,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 4,
                    "actionItems": [{
                        "id": "a-45-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".table-title.solution.discuss",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "bf6db3fe-577c-5a87-acca-b90cc75398b3"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 86,
                    "actionItems": [{
                        "id": "a-45-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".table-title.solution.discuss",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "bf6db3fe-577c-5a87-acca-b90cc75398b3"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-45-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".table-title.solution.discuss",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "bf6db3fe-577c-5a87-acca-b90cc75398b3"]
                            },
                            "globalSwatchId": "--superpeople-sky",
                            "rValue": 217,
                            "bValue": 223,
                            "gValue": 223,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1716552369885
        },
        "a-46": {
            "id": "a-46",
            "title": "New Scroll Animation",
            "continuousParameterGroups": [{
                "id": "a-46-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-46-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.solution.faq",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "5fa6b34d-7769-35b3-0969-67e8ea560d40"]
                            },
                            "globalSwatchId": "--superpeople-natural",
                            "rValue": 179,
                            "bValue": 164,
                            "gValue": 189,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 21,
                    "actionItems": [{
                        "id": "a-46-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.solution.faq",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "5fa6b34d-7769-35b3-0969-67e8ea560d40"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 96,
                    "actionItems": [{
                        "id": "a-46-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.solution.faq",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "5fa6b34d-7769-35b3-0969-67e8ea560d40"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-46-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.solution.faq",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "5d651139-188d-12ff-e1c6-d74ec0691510", "5fa6b34d-7769-35b3-0969-67e8ea560d40"]
                            },
                            "globalSwatchId": "--superpeople-natural",
                            "rValue": 179,
                            "bValue": 164,
                            "gValue": 189,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1716552719856
        },
        "a-47": {
            "id": "a-47",
            "title": "Arrow Hover On",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dot-block.careers-nav",
                            "selectorGuids": ["cea943e2-c4b8-77a4-27e3-64f299e863ef", "175d4539-6b6f-63b1-e089-4d602b4f63ca"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-47-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dot-block.careers-nav",
                            "selectorGuids": ["cea943e2-c4b8-77a4-27e3-64f299e863ef", "175d4539-6b6f-63b1-e089-4d602b4f63ca"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1718117518657
        },
        "a-48": {
            "id": "a-48",
            "title": "Arrow Hover Off",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".dot-block.careers-nav",
                            "selectorGuids": ["cea943e2-c4b8-77a4-27e3-64f299e863ef", "175d4539-6b6f-63b1-e089-4d602b4f63ca"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1718117595294
        },
        "a-49": {
            "id": "a-49",
            "title": "Link Arrow Right",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-49-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "65fc1876777e6eaf167fad4e|3e3eb59b-e6a5-4e10-c5d7-d6f5398f2fce"
                        },
                        "xValue": 10,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1718286839836
        },
        "a-50": {
            "id": "a-50",
            "title": "Link Arrow Left",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "boundaryMode": true,
                            "id": "65fc1876777e6eaf167fad4e|3e3eb59b-e6a5-4e10-c5d7-d6f5398f2fce"
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1718286897462
        },
        "a-51": {
            "id": "a-51",
            "title": "New Timed Animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "65fc1876777e6eaf167fad4e|8bd62050-28d4-ae6c-53a1-e0d52802309a"
                        },
                        "xValue": 10,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1718287057669
        },
        "a-52": {
            "id": "a-52",
            "title": "New Timed Animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-52-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "65fc1876777e6eaf167fad4e|8bd62050-28d4-ae6c-53a1-e0d52802309a"
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1718287089418
        },
        "a-53": {
            "id": "a-53",
            "title": "New Timed Animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-53-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "65fc1876777e6eaf167fad4e|87da6ec9-0d59-49ad-26bf-ebafc971794d"
                        },
                        "xValue": 10,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1718287126029
        },
        "a-54": {
            "id": "a-54",
            "title": "New Timed Animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "easeInOut",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-7",
                            "selectorGuids": ["e2b0fbcb-b450-19e6-de69-b86eb17d43d5"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1718287144713
        },
        "a-55": {
            "id": "a-55",
            "title": "Nav Hover Icon 1",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-55-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "052229b7-f31a-7a1e-1813-da00c4e877b9"
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-55-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "052229b7-f31a-7a1e-1813-da00c4e877b9"
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-55-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-17",
                            "selectorGuids": ["460b89a7-319e-fbff-dc82-0003c56cea67"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1718375349815
        },
        "a-56": {
            "id": "a-56",
            "title": "Nav icon 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-56-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "052229b7-f31a-7a1e-1813-da00c4e877b9"
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-56-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".image-17",
                            "selectorGuids": ["460b89a7-319e-fbff-dc82-0003c56cea67"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1718375612386
        },
        "a-71": {
            "id": "a-71",
            "title": "Tech Dept Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-71-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".category-all.non-yellow.people",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3", "c98eaab3-3f91-01fb-0d84-3881b442955c"]
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-71-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27462"
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-71-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-71-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".people-all",
                            "selectorGuids": ["012e96fc-94b0-aa7a-33be-a42cfe323d19"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-71-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".administration-dept",
                            "selectorGuids": ["9e6e2b49-a5e9-de01-6075-2f845afe8d83"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-71-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".rd-dept",
                            "selectorGuids": ["01321139-0b9c-8e06-dca5-969f03a651cd"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-71-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".management-dept",
                            "selectorGuids": ["a74f3e91-3e77-b467-58df-c25a38696fae"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-71-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".technology-dept",
                            "selectorGuids": ["d1ac6d72-64f0-ae13-f13c-68889c4e2725"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-71-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".commercial-dept",
                            "selectorGuids": ["4e563246-6385-ba16-dd3c-e0835c6bb1eb"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-71-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".dropup-list",
                            "selectorGuids": ["36666f18-22e7-7a8c-11b5-de429dba1485"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715943896715
        },
        "a-69": {
            "id": "a-69",
            "title": "RandD Dept Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-69-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".category-all.non-yellow.people",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3", "c98eaab3-3f91-01fb-0d84-3881b442955c"]
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-69-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27462"
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-69-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-69-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".people-all",
                            "selectorGuids": ["012e96fc-94b0-aa7a-33be-a42cfe323d19"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-69-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".administration-dept",
                            "selectorGuids": ["9e6e2b49-a5e9-de01-6075-2f845afe8d83"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-69-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".rd-dept",
                            "selectorGuids": ["01321139-0b9c-8e06-dca5-969f03a651cd"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-69-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".management-dept",
                            "selectorGuids": ["a74f3e91-3e77-b467-58df-c25a38696fae"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-69-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".technology-dept",
                            "selectorGuids": ["d1ac6d72-64f0-ae13-f13c-68889c4e2725"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-69-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".commercial-dept",
                            "selectorGuids": ["4e563246-6385-ba16-dd3c-e0835c6bb1eb"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-69-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".dropup-list",
                            "selectorGuids": ["36666f18-22e7-7a8c-11b5-de429dba1485"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715943896715
        },
        "a-70": {
            "id": "a-70",
            "title": "Administration Dept Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-70-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".category-all.non-yellow.people",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3", "c98eaab3-3f91-01fb-0d84-3881b442955c"]
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-70-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27462"
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-70-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-70-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".people-all",
                            "selectorGuids": ["012e96fc-94b0-aa7a-33be-a42cfe323d19"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-70-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".management-dept",
                            "selectorGuids": ["a74f3e91-3e77-b467-58df-c25a38696fae"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-70-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".administration-dept",
                            "selectorGuids": ["9e6e2b49-a5e9-de01-6075-2f845afe8d83"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-70-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".technology-dept",
                            "selectorGuids": ["d1ac6d72-64f0-ae13-f13c-68889c4e2725"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-70-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".commercial-dept",
                            "selectorGuids": ["4e563246-6385-ba16-dd3c-e0835c6bb1eb"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-70-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".rd-dept",
                            "selectorGuids": ["01321139-0b9c-8e06-dca5-969f03a651cd"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-70-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".dropup-list",
                            "selectorGuids": ["36666f18-22e7-7a8c-11b5-de429dba1485"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715943896715
        },
        "a-67": {
            "id": "a-67",
            "title": "Commercial Dept Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-67-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".category-all.non-yellow.people",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3", "c98eaab3-3f91-01fb-0d84-3881b442955c"]
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-67-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27462"
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-67-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-67-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".people-all",
                            "selectorGuids": ["012e96fc-94b0-aa7a-33be-a42cfe323d19"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-67-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".administration-dept",
                            "selectorGuids": ["9e6e2b49-a5e9-de01-6075-2f845afe8d83"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-67-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".rd-dept",
                            "selectorGuids": ["01321139-0b9c-8e06-dca5-969f03a651cd"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-67-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".management-dept",
                            "selectorGuids": ["a74f3e91-3e77-b467-58df-c25a38696fae"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-67-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".technology-dept",
                            "selectorGuids": ["d1ac6d72-64f0-ae13-f13c-68889c4e2725"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-67-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".commercial-dept",
                            "selectorGuids": ["4e563246-6385-ba16-dd3c-e0835c6bb1eb"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-67-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".dropup-list",
                            "selectorGuids": ["36666f18-22e7-7a8c-11b5-de429dba1485"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715943896715
        },
        "a-68": {
            "id": "a-68",
            "title": "Management Dept Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-68-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".category-all.non-yellow.people",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3", "c98eaab3-3f91-01fb-0d84-3881b442955c"]
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-68-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "662fcc7858c2fdee6b48e24b|abcc16cc-4b30-ec21-2291-5b8c56d27462"
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-68-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": ""
                    }
                }, {
                    "id": "a-68-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".people-all",
                            "selectorGuids": ["012e96fc-94b0-aa7a-33be-a42cfe323d19"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-68-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".management-dept",
                            "selectorGuids": ["a74f3e91-3e77-b467-58df-c25a38696fae"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-68-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".administration-dept",
                            "selectorGuids": ["9e6e2b49-a5e9-de01-6075-2f845afe8d83"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-68-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".technology-dept",
                            "selectorGuids": ["d1ac6d72-64f0-ae13-f13c-68889c4e2725"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-68-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".commercial-dept",
                            "selectorGuids": ["4e563246-6385-ba16-dd3c-e0835c6bb1eb"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-68-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".rd-dept",
                            "selectorGuids": ["01321139-0b9c-8e06-dca5-969f03a651cd"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-68-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".dropup-list",
                            "selectorGuids": ["36666f18-22e7-7a8c-11b5-de429dba1485"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715943896715
        },
        "a-66": {
            "id": "a-66",
            "title": "All Dept Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-66-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".category-all.non-yellow.people",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3", "c98eaab3-3f91-01fb-0d84-3881b442955c"]
                        },
                        "globalSwatchId": "--superpeople-earth",
                        "rValue": 202,
                        "bValue": 187,
                        "gValue": 207,
                        "aValue": 1
                    }
                }, {
                    "id": "a-66-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".people-all",
                            "selectorGuids": ["012e96fc-94b0-aa7a-33be-a42cfe323d19"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-66-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".administration-dept",
                            "selectorGuids": ["9e6e2b49-a5e9-de01-6075-2f845afe8d83"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-66-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".rd-dept",
                            "selectorGuids": ["01321139-0b9c-8e06-dca5-969f03a651cd"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-66-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".management-dept",
                            "selectorGuids": ["a74f3e91-3e77-b467-58df-c25a38696fae"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-66-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".technology-dept",
                            "selectorGuids": ["d1ac6d72-64f0-ae13-f13c-68889c4e2725"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-66-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".commercial-dept",
                            "selectorGuids": ["4e563246-6385-ba16-dd3c-e0835c6bb1eb"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-66-n-9",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all.non-yellow.people.mobile-filters",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3", "c98eaab3-3f91-01fb-0d84-3881b442955c", "46027692-1be0-8455-5beb-a3fe2df26380"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-66-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".dropup-list",
                            "selectorGuids": ["36666f18-22e7-7a8c-11b5-de429dba1485"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715943896715
        },
        "a-61": {
            "id": "a-61",
            "title": "Mobile Menu Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-61-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "id": "662fcc7858c2fdee6b48e24b|c2c08f3f-1708-a65f-5a15-01733677e0d7"
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-61-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "id": "662fcc7858c2fdee6b48e24b|c2c08f3f-1708-a65f-5a15-01733677e0d7"
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1718622312360
        },
        "a-62": {
            "id": "a-62",
            "title": "Mobile Menu Hide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-62-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "id": "662fcc7858c2fdee6b48e24b|c2c08f3f-1708-a65f-5a15-01733677e0d7"
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1718622380830
        },
        "a-63": {
            "id": "a-63",
            "title": "Show Filter",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-63-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".dropup-mobile",
                            "selectorGuids": ["7031bca5-0e90-fbd5-c953-e9dfd7db633e"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-63-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".dropup-mobile",
                            "selectorGuids": ["7031bca5-0e90-fbd5-c953-e9dfd7db633e"]
                        },
                        "value": "flex"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1718622967501
        },
        "a-64": {
            "id": "a-64",
            "title": "Hide Filter",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-64-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".dropup-mobile",
                            "selectorGuids": ["7031bca5-0e90-fbd5-c953-e9dfd7db633e"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1718623150753
        },
        "a-65": {
            "id": "a-65",
            "title": "Show Filters People",
            "continuousParameterGroups": [{
                "id": "a-65-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-65-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".dropup-mobile",
                                "selectorGuids": ["7031bca5-0e90-fbd5-c953-e9dfd7db633e"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 7,
                    "actionItems": [{
                        "id": "a-65-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".dropup-mobile",
                                "selectorGuids": ["7031bca5-0e90-fbd5-c953-e9dfd7db633e"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 96,
                    "actionItems": [{
                        "id": "a-65-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".dropup-mobile",
                                "selectorGuids": ["7031bca5-0e90-fbd5-c953-e9dfd7db633e"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 97,
                    "actionItems": [{
                        "id": "a-65-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".dropup-mobile",
                                "selectorGuids": ["7031bca5-0e90-fbd5-c953-e9dfd7db633e"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1718623761351
        },
        "a-72": {
            "id": "a-72",
            "title": "All Blog Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-72-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-72-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-72-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-72-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-72-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-72-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".awards",
                            "selectorGuids": ["d46f0f77-d7cf-110a-9f22-ea255ded4ee4"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-72-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1719415687267
        },
        "a-73": {
            "id": "a-73",
            "title": "Team Blog Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-73-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-73-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-73-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-73-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-73-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-73-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".awards",
                            "selectorGuids": ["d46f0f77-d7cf-110a-9f22-ea255ded4ee4"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-73-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1719415687267
        },
        "a-74": {
            "id": "a-74",
            "title": "Events Blog Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-74-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-74-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-74-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-74-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-74-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-74-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".awards",
                            "selectorGuids": ["d46f0f77-d7cf-110a-9f22-ea255ded4ee4"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-74-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1719415687267
        },
        "a-76": {
            "id": "a-76",
            "title": "Plastic World Blog Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-76-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-76-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-76-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-76-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-76-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-76-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".awards",
                            "selectorGuids": ["d46f0f77-d7cf-110a-9f22-ea255ded4ee4"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-76-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1719415687267
        },
        "a-77": {
            "id": "a-77",
            "title": "Blog Awards",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-77-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "663667e1ea163d9bb2c0dd8f|39c95802-f1d6-e72c-bad9-043e77fd0b9f"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-77-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all.non-yellow",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-77-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-77-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-77-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-77-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-77-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-77-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-77-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".awards",
                            "selectorGuids": ["d46f0f77-d7cf-110a-9f22-ea255ded4ee4"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-77-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715785723047
        },
        "a-78": {
            "id": "a-78",
            "title": "Awards Blog Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-78-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-78-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-78-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-78-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-78-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-78-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".awards",
                            "selectorGuids": ["d46f0f77-d7cf-110a-9f22-ea255ded4ee4"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-78-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1719415687267
        },
        "a-79": {
            "id": "a-79",
            "title": "General Blog Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-79-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-79-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-79-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-79-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-79-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-79-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".awards",
                            "selectorGuids": ["d46f0f77-d7cf-110a-9f22-ea255ded4ee4"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-79-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1719415687267
        },
        "a-80": {
            "id": "a-80",
            "title": "Blog Mobile Menu Open",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-80-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".dropup-list.news-dropup-list",
                            "selectorGuids": ["36666f18-22e7-7a8c-11b5-de429dba1485", "94da7c5e-cb05-4962-7679-383de522ff2f"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-80-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".dropup-list.news-dropup-list",
                            "selectorGuids": ["36666f18-22e7-7a8c-11b5-de429dba1485", "94da7c5e-cb05-4962-7679-383de522ff2f"]
                        },
                        "value": "flex"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1719416870285
        },
        "a-81": {
            "id": "a-81",
            "title": "Blog Mobile Menu Hide",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-81-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".dropup-list.news-dropup-list",
                            "selectorGuids": ["36666f18-22e7-7a8c-11b5-de429dba1485", "94da7c5e-cb05-4962-7679-383de522ff2f"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1719416931798
        },
        "a-82": {
            "id": "a-82",
            "title": "Show Mobile Filters Blog",
            "continuousParameterGroups": [{
                "id": "a-82-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-82-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c9697b"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 2,
                    "actionItems": [{
                        "id": "a-82-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c9697b"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 93,
                    "actionItems": [{
                        "id": "a-82-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c9697b"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 96,
                    "actionItems": [{
                        "id": "a-82-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "id": "663667e1ea163d9bb2c0dd8f|5ef93c04-b90a-559c-fbdf-37da99c9697b"
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1719417382890
        },
        "a-83": {
            "id": "a-83",
            "title": "Magic Happens Highlight",
            "continuousParameterGroups": [{
                "id": "a-83-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-83-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".hp-titile.stuck.no-up-line.stacking-tile.first-stack",
                                "selectorGuids": ["d47252df-4a2c-9d73-16ae-b463cb9be7c6", "81af5bdc-62da-9088-f4ff-ef820dd24c8e", "2fa3e9ea-ea9b-f84c-864d-a48414ae07f0", "a418f7ed-1d92-7016-2616-9001132e1ecc", "f21f1ea7-7551-b803-72c6-1f0425df3c6e"]
                            },
                            "globalSwatchId": "--superpeople-earth",
                            "rValue": 202,
                            "bValue": 187,
                            "gValue": 207,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 4,
                    "actionItems": [{
                        "id": "a-83-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".hp-titile.stuck.no-up-line.stacking-tile.first-stack",
                                "selectorGuids": ["d47252df-4a2c-9d73-16ae-b463cb9be7c6", "81af5bdc-62da-9088-f4ff-ef820dd24c8e", "2fa3e9ea-ea9b-f84c-864d-a48414ae07f0", "a418f7ed-1d92-7016-2616-9001132e1ecc", "f21f1ea7-7551-b803-72c6-1f0425df3c6e"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-83-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".hp-titile.stuck.no-up-line.stacking-tile.first-stack",
                                "selectorGuids": ["d47252df-4a2c-9d73-16ae-b463cb9be7c6", "81af5bdc-62da-9088-f4ff-ef820dd24c8e", "2fa3e9ea-ea9b-f84c-864d-a48414ae07f0", "a418f7ed-1d92-7016-2616-9001132e1ecc", "f21f1ea7-7551-b803-72c6-1f0425df3c6e"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-83-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".hp-titile.stuck.no-up-line.stacking-tile.first-stack",
                                "selectorGuids": ["d47252df-4a2c-9d73-16ae-b463cb9be7c6", "81af5bdc-62da-9088-f4ff-ef820dd24c8e", "2fa3e9ea-ea9b-f84c-864d-a48414ae07f0", "a418f7ed-1d92-7016-2616-9001132e1ecc", "f21f1ea7-7551-b803-72c6-1f0425df3c6e"]
                            },
                            "globalSwatchId": "--superpeople-earth",
                            "rValue": 202,
                            "bValue": 187,
                            "gValue": 207,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1719582434240
        },
        "a-84": {
            "id": "a-84",
            "title": "Value Chain Highlight",
            "continuousParameterGroups": [{
                "id": "a-84-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-84-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".hp-titile.stuck.no-up-line.stacking-tile.second-stack",
                                "selectorGuids": ["d47252df-4a2c-9d73-16ae-b463cb9be7c6", "81af5bdc-62da-9088-f4ff-ef820dd24c8e", "2fa3e9ea-ea9b-f84c-864d-a48414ae07f0", "a418f7ed-1d92-7016-2616-9001132e1ecc", "80b102b7-26d7-753d-c66c-7c9d930ab3c0"]
                            },
                            "globalSwatchId": "--superpeople-earth",
                            "rValue": 202,
                            "bValue": 187,
                            "gValue": 207,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 22,
                    "actionItems": [{
                        "id": "a-84-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".hp-titile.stuck.no-up-line.stacking-tile.second-stack",
                                "selectorGuids": ["d47252df-4a2c-9d73-16ae-b463cb9be7c6", "81af5bdc-62da-9088-f4ff-ef820dd24c8e", "2fa3e9ea-ea9b-f84c-864d-a48414ae07f0", "a418f7ed-1d92-7016-2616-9001132e1ecc", "80b102b7-26d7-753d-c66c-7c9d930ab3c0"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 96,
                    "actionItems": [{
                        "id": "a-84-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".hp-titile.stuck.no-up-line.stacking-tile.second-stack",
                                "selectorGuids": ["d47252df-4a2c-9d73-16ae-b463cb9be7c6", "81af5bdc-62da-9088-f4ff-ef820dd24c8e", "2fa3e9ea-ea9b-f84c-864d-a48414ae07f0", "a418f7ed-1d92-7016-2616-9001132e1ecc", "80b102b7-26d7-753d-c66c-7c9d930ab3c0"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-84-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".hp-titile.stuck.no-up-line.stacking-tile.second-stack",
                                "selectorGuids": ["d47252df-4a2c-9d73-16ae-b463cb9be7c6", "81af5bdc-62da-9088-f4ff-ef820dd24c8e", "2fa3e9ea-ea9b-f84c-864d-a48414ae07f0", "a418f7ed-1d92-7016-2616-9001132e1ecc", "80b102b7-26d7-753d-c66c-7c9d930ab3c0"]
                            },
                            "globalSwatchId": "--superpeople-earth",
                            "rValue": 202,
                            "bValue": 187,
                            "gValue": 207,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1719582548751
        },
        "a-86": {
            "id": "a-86",
            "title": "Open Positions Highlight",
            "continuousParameterGroups": [{
                "id": "a-86-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-86-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.careers-list",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "e3a62b16-eea9-55e5-8df3-55e9d2316dfb"]
                            },
                            "globalSwatchId": "--superpeople-natural",
                            "rValue": 179,
                            "bValue": 164,
                            "gValue": 189,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 32,
                    "actionItems": [{
                        "id": "a-86-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.careers-list",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "e3a62b16-eea9-55e5-8df3-55e9d2316dfb"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 51,
                    "actionItems": [{
                        "id": "a-86-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.careers-list",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "e3a62b16-eea9-55e5-8df3-55e9d2316dfb"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-86-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".table-title.careers-list",
                                "selectorGuids": ["d4f97f5a-5fbc-6ded-81e9-9b4db5f68cce", "e3a62b16-eea9-55e5-8df3-55e9d2316dfb"]
                            },
                            "globalSwatchId": "--superpeople-natural",
                            "rValue": 179,
                            "bValue": 164,
                            "gValue": 189,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1719582857928
        },
        "a-85": {
            "id": "a-85",
            "title": "Why Join Highlight",
            "continuousParameterGroups": [{
                "id": "a-85-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-85-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".why-title",
                                "selectorGuids": ["b91d7142-8964-d129-e51a-d970ac9f7903"]
                            },
                            "globalSwatchId": "--superpeople-beige",
                            "rValue": 217,
                            "bValue": 202,
                            "gValue": 218,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 21,
                    "actionItems": [{
                        "id": "a-85-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".why-title",
                                "selectorGuids": ["b91d7142-8964-d129-e51a-d970ac9f7903"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-85-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".why-title",
                                "selectorGuids": ["b91d7142-8964-d129-e51a-d970ac9f7903"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1719582777229
        },
        "a-88": {
            "id": "a-88",
            "title": "Who Is superpeople Highlight",
            "continuousParameterGroups": [{
                "id": "a-88-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-88-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".hp-titile.stuck.no-up-line.stacking-tile.first-stack",
                                "selectorGuids": ["d47252df-4a2c-9d73-16ae-b463cb9be7c6", "81af5bdc-62da-9088-f4ff-ef820dd24c8e", "2fa3e9ea-ea9b-f84c-864d-a48414ae07f0", "a418f7ed-1d92-7016-2616-9001132e1ecc", "f21f1ea7-7551-b803-72c6-1f0425df3c6e"]
                            },
                            "globalSwatchId": "--superpeople-beige",
                            "rValue": 217,
                            "bValue": 202,
                            "gValue": 218,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 5,
                    "actionItems": [{
                        "id": "a-88-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".hp-titile.stuck.no-up-line.stacking-tile.first-stack",
                                "selectorGuids": ["d47252df-4a2c-9d73-16ae-b463cb9be7c6", "81af5bdc-62da-9088-f4ff-ef820dd24c8e", "2fa3e9ea-ea9b-f84c-864d-a48414ae07f0", "a418f7ed-1d92-7016-2616-9001132e1ecc", "f21f1ea7-7551-b803-72c6-1f0425df3c6e"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 99,
                    "actionItems": [{
                        "id": "a-88-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".hp-titile.stuck.no-up-line.stacking-tile.first-stack",
                                "selectorGuids": ["d47252df-4a2c-9d73-16ae-b463cb9be7c6", "81af5bdc-62da-9088-f4ff-ef820dd24c8e", "2fa3e9ea-ea9b-f84c-864d-a48414ae07f0", "a418f7ed-1d92-7016-2616-9001132e1ecc", "f21f1ea7-7551-b803-72c6-1f0425df3c6e"]
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-88-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "selector": ".hp-titile.stuck.no-up-line.stacking-tile.first-stack",
                                "selectorGuids": ["d47252df-4a2c-9d73-16ae-b463cb9be7c6", "81af5bdc-62da-9088-f4ff-ef820dd24c8e", "2fa3e9ea-ea9b-f84c-864d-a48414ae07f0", "a418f7ed-1d92-7016-2616-9001132e1ecc", "f21f1ea7-7551-b803-72c6-1f0425df3c6e"]
                            },
                            "globalSwatchId": "--superpeople-beige",
                            "rValue": 217,
                            "bValue": 202,
                            "gValue": 218,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1719839954007
        },
        "a-89": {
            "id": "a-89",
            "title": "Our Team Highlight",
            "continuousParameterGroups": [{
                "id": "a-89-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-89-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "id": "662fcc7858c2fdee6b48e24b|8f561aa0-765a-074d-62a1-d6449130b4c2"
                            },
                            "globalSwatchId": "--superpeople-beige",
                            "rValue": 217,
                            "bValue": 202,
                            "gValue": 218,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-89-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "id": "662fcc7858c2fdee6b48e24b|8f561aa0-765a-074d-62a1-d6449130b4c2"
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 94,
                    "actionItems": [{
                        "id": "a-89-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "id": "662fcc7858c2fdee6b48e24b|8f561aa0-765a-074d-62a1-d6449130b4c2"
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-89-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "SIBLINGS",
                                "id": "662fcc7858c2fdee6b48e24b|8f561aa0-765a-074d-62a1-d6449130b4c2"
                            },
                            "globalSwatchId": "--superpeople-beige",
                            "rValue": 217,
                            "bValue": 202,
                            "gValue": 218,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1719840038816
        },
        "a-90": {
            "id": "a-90",
            "title": "Advisors Highlight",
            "continuousParameterGroups": [{
                "id": "a-90-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-90-n",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "662fcc7858c2fdee6b48e24b|60fc2880-ed92-1094-b9f1-95f04fb91a54"
                            },
                            "globalSwatchId": "--superpeople-stone",
                            "rValue": 170,
                            "bValue": 182,
                            "gValue": 182,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 26,
                    "actionItems": [{
                        "id": "a-90-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "662fcc7858c2fdee6b48e24b|60fc2880-ed92-1094-b9f1-95f04fb91a54"
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 96,
                    "actionItems": [{
                        "id": "a-90-n-4",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "662fcc7858c2fdee6b48e24b|60fc2880-ed92-1094-b9f1-95f04fb91a54"
                            },
                            "globalSwatchId": "--superpeople-greenish",
                            "rValue": 242,
                            "bValue": 188,
                            "gValue": 254,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-90-n-2",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "662fcc7858c2fdee6b48e24b|60fc2880-ed92-1094-b9f1-95f04fb91a54"
                            },
                            "globalSwatchId": "--superpeople-stone",
                            "rValue": 170,
                            "bValue": 182,
                            "gValue": 182,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1719840123334
        },
        "a-91": {
            "id": "a-91",
            "title": "Blog PR",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-91-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "663667e1ea163d9bb2c0dd8f|39c95802-f1d6-e72c-bad9-043e77fd0b9f"
                        },
                        "globalSwatchId": "--superpeople-greenish",
                        "rValue": 242,
                        "bValue": 188,
                        "gValue": 254,
                        "aValue": 1
                    }
                }, {
                    "id": "a-91-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all.non-yellow",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7", "72a3dc2e-af4a-226c-74e3-3e4a16b6b9e3"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-91-n-3",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".category-all",
                            "selectorGuids": ["e7a0af7e-e12e-8bfd-1d6d-fb6016d234f7"]
                        },
                        "globalSwatchId": "--superpeople-beige",
                        "rValue": 217,
                        "bValue": 202,
                        "gValue": 218,
                        "aValue": 1
                    }
                }, {
                    "id": "a-91-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-91-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-91-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-91-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-91-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-91-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1715785723047
        },
        "a-92": {
            "id": "a-92",
            "title": "PR Blog Mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-92-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".all",
                            "selectorGuids": ["f452059e-e52f-1409-8ab1-ae5925de707a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-92-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".general",
                            "selectorGuids": ["4310b20b-cf0e-b1e5-7f19-2fb7f7a81986"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-92-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".team",
                            "selectorGuids": ["a8241997-fa53-d1eb-14ee-d140afd97bf6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-92-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".events",
                            "selectorGuids": ["f3c403a3-435a-0a77-6555-e18406f23777"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-92-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".plastic-world",
                            "selectorGuids": ["24d24e53-721c-8ebd-b2a4-2384d822e825"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-92-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".awards",
                            "selectorGuids": ["d46f0f77-d7cf-110a-9f22-ea255ded4ee4"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-92-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".press-release",
                            "selectorGuids": ["7fa0120a-d1b8-3d80-6bd0-4b62ca5581c4"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1719415687267
        },
        "slideInBottom": {
            "id": "slideInBottom",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        },
        "slideOutTop": {
            "id": "slideOutTop",
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "inQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInLeft": {
            "id": "slideInLeft",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": -100,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "slideInTop": {
            "id": "slideInTop",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }, {
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }]
        },
        "spinInClockwise": {
            "id": "spinInClockwise",
            "useFirstGroupAsInitialState": true,
            "actionItemGroups": [{
                "actionItems": [{
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 0
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "duration": 0,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": -900,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "DEG"
                    }
                }, {
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 1000,
                        "target": {
                            "id": "N/A",
                            "appliesTo": "TRIGGER_ELEMENT",
                            "useEventTarget": true
                        },
                        "value": 1
                    }
                }]
            }]
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
