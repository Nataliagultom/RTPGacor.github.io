;
(self.AMP = self.AMP || []).push({
    m: 0,
    v: "2211302304001",
    n: "amp-analytics",
    ev: "0.1",
    l: !0,
    f: function(t, n) {
        ! function() {
            function n(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var i = 0, r = new Array(n); i < n; i++) r[i] = t[i];
                return r
            }

            function i(t, i) {
                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (r) return (r = r.call(t)).next.bind(r);
                if (Array.isArray(t) || (r = function(t, i) {
                        if (t) {
                            if ("string" == typeof t) return n(t, i);
                            var r = Object.prototype.toString.call(t).slice(8, -1);
                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, i) : void 0
                        }
                    }(t)) || i && t && "number" == typeof t.length) {
                    r && (t = r);
                    var e = 0;
                    return function() {
                        return e >= t.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: t[e++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r;

            function e() {
                return r || (r = Promise.resolve(void 0))
            }
            var u = function() {
                var t = this;
                this.promise = new Promise((function(n, i) {
                    t.resolve = n, t.reject = i
                }))
            };

            function s(t) {
                return new Promise((function(n) {
                    n(t())
                }))
            }

            function o(t, n) {
                return (o = Object.setPrototypeOf || function(t, n) {
                    return t.__proto__ = n, t
                })(t, n)
            }

            function a(t, n) {
                if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), n && o(t, n)
            }

            function h(t) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function f(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function l(t, n) {
                if (n && ("object" === c(n) || "function" == typeof n)) return n;
                if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                return f(t)
            }

            function v(t) {
                var n = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var i, r = h(t);
                    if (n) {
                        var e = h(this).constructor;
                        i = Reflect.construct(r, arguments, e)
                    } else i = r.apply(this, arguments);
                    return l(this, i)
                }
            }
            var d = Array.isArray;

            function m(t, n) {
                for (var i = 0; i < t.length; i++)
                    if (n(t[i], i, t)) return i;
                return -1
            }

            function p(t, n) {
                var i = t.length - n.length;
                return i >= 0 && t.indexOf(n, i) == i
            }

            function b(t, n, i) {
                for (var r = i || 1, e = function(i) {
                        var r = 0;
                        if (t = t.replace(/\${([^{}]*)}/g, (function(t, i) {
                                return r++, n(i)
                            })), !r) return "break"
                    }, u = 0; u < r && "break" !== e(); u++);
                return t
            }
            var E, T = Object.prototype,
                g = T.hasOwnProperty,
                y = T.toString;

            function w(t) {
                return "[object Object]" === y.call(t)
            }

            function S(t) {
                var n = Object.create(null);
                return t && Object.assign(n, t), n
            }

            function A(t, n) {
                return g.call(t, n)
            }

            function O(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    r = [],
                    e = [];
                for (e.push({
                        t: t,
                        s: n,
                        d: 0
                    }); e.length > 0;) {
                    var u = e.shift(),
                        s = u.d,
                        o = u.s,
                        a = u.t;
                    if (r.includes(o)) throw new Error("Source object has a circular reference.");
                    if (r.push(o), a !== o)
                        if (s > i) Object.assign(a, o);
                        else
                            for (var h = 0, c = Object.keys(o); h < c.length; h++) {
                                var f = c[h],
                                    l = o[f];
                                if (A(a, f)) {
                                    var v = a[f];
                                    if (w(l) && w(v)) {
                                        e.push({
                                            t: v,
                                            s: l,
                                            d: s + 1
                                        });
                                        continue
                                    }
                                }
                                a[f] = l
                            }
                }
                return t
            }

            function N(t) {
                return "number" == typeof t && isFinite(t)
            }

            function I(t, n, i, r, e, u, s, o, a, h, c) {
                return t
            }

            function _(t) {
                return JSON.parse(t)
            }

            function R(t, n) {
                try {
                    return _(t)
                } catch (t) {
                    return null == n || n(t), null
                }
            }

            function P(t) {
                return (t.ownerDocument || t).defaultView
            }

            function C(t) {
                return void 0 !== E ? E : E = function(t) {
                    try {
                        var n = t.ownerDocument,
                            i = n.createElement("div"),
                            r = n.createElement("div");
                        return i.appendChild(r), i.querySelector(":scope div") === r
                    } catch (t) {
                        return !1
                    }
                }(t)
            }

            function M(t, n) {
                return t.replace(/^|,/g, "$&".concat(n, " "))
            }

            function D(t, n) {
                var i = t.classList,
                    r = "i-amphtml-scoped";
                i.add(r);
                var e = M(n, ".".concat(r)),
                    u = t.querySelectorAll(e);
                return i.remove(r), u
            }

            function L(t, n) {
                if (C(t)) return t.querySelector(M(n, ":scope"));
                var i = D(t, n)[0];
                return void 0 === i ? null : i
            }

            function k(t, n) {
                var i = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector || t.oMatchesSelector;
                return !!i && i.call(t, n)
            }

            function x(t, n) {
                return t.closest ? t.closest(n) : function(t, n, i) {
                    var r;
                    for (r = t; r && void 0 !== r; r = r.parentElement)
                        if (n(r)) return r;
                    return null
                }(t, (function(t) {
                    return k(t, n)
                }))
            }

            function U(t, n, i) {
                return function(t, n) {
                    for (var i in n) t.setAttribute(i, n[i]);
                    return t
                }(t.createElement(n), i)
            }

            function j(t, n, i) {
                var r = n || function(t) {
                        return t
                    },
                    e = t.dataset,
                    u = {},
                    s = i || /^param(.+)/;
                for (var o in e) {
                    var a = o.match(s);
                    a && (u[r(a[1][0].toLowerCase() + a[1].substr(1))] = e[o])
                }
                return u
            }

            function H(t) {
                return t.parent && t.parent != t
            }

            function F(t) {
                var n = Object.getOwnPropertyDescriptor(t, "message");
                if (null != n && n.writable) return t;
                var i = t.message,
                    r = t.stack,
                    e = new Error(i);
                for (var u in t) e[u] = t[u];
                return e.stack = r, e
            }

            function V(t) {
                for (var n, r = null, e = "", u = i(arguments, !0); !(n = u()).done;) {
                    var s = n.value;
                    s instanceof Error && !r ? r = F(s) : (e && (e += " "), e += s)
                }
                return r ? e && (r.message = e + ": " + r.message) : r = new Error(e), r
            }

            function q(t) {
                var n, i;
                null === (n = (i = self).__AMP_REPORT_ERROR) || void 0 === n || n.call(i, t)
            }

            function G(t) {
                var n = V.apply(null, arguments);
                setTimeout((function() {
                    throw q(n), n
                }))
            }
            var B = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

            function W(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                try {
                    return decodeURIComponent(t)
                } catch (t) {
                    return n
                }
            }

            function $(t) {
                var n, i = S();
                if (!t) return i;
                for (; n = B.exec(t);) {
                    var r = W(n[1], n[1]),
                        e = n[2] ? W(n[2].replace(/\+/g, " "), n[2]) : "";
                    i[r] = e
                }
                return i
            }

            function Y(t) {
                var n = (t || self).location;
                return $(n.originalHash || n.hash)
            }
            var z = "";

            function K(t) {
                var n = t || self;
                return n.__AMP_MODE ? n.__AMP_MODE : n.__AMP_MODE = function(t) {
                    return {
                        localDev: !1,
                        development: X(t, Y(t)),
                        esm: !1,
                        test: !1,
                        rtvVersion: J(t),
                        ssrReady: !1
                    }
                }(n)
            }

            function J(t) {
                var n;
                return z || (z = (null === (n = t.AMP_CONFIG) || void 0 === n ? void 0 : n.v) || "01".concat("2211302304001")), z
            }

            function X(t, n) {
                var i = n || Y(t);
                return ["1", "actions", "amp", "amp4ads", "amp4email"].includes(i.development) || !!t.AMP_DEV_MODE
            }
            var Z = function() {
                return self.AMP.config.urls
            }();

            function Q(t, n, i) {
                return n in t ? Object.defineProperty(t, n, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = i, t
            }
            self.__AMP_LOG = self.__AMP_LOG || {
                user: null,
                dev: null,
                userForEmbed: null
            };
            var tt = self.__AMP_LOG;

            function nt(t, n) {
                throw new Error("failed to call initLogConstructor")
            }

            function it(t) {
                return tt.user || (tt.user = rt()),
                    function(t, n) {
                        return n && n.ownerDocument.defaultView != t
                    }(tt.user.win, t) ? tt.userForEmbed || (tt.userForEmbed = rt()) : tt.user
            }

            function rt(t) {
                return nt()
            }

            function et() {
                return tt.dev || (tt.dev = nt())
            }

            function ut(t, n, i, r, e, u, s, o, a, h, c) {
                return t
            }

            function st(t, n, i, r, e, u, s, o, a, h, c) {
                return it().assert(t, n, i, r, e, u, s, o, a, h, c)
            }

            function ot(t, n) {
                return pt(t = lt(t), n)
            }

            function at(t, n) {
                return pt(mt(dt(t)), n)
            }

            function ht(t, n) {
                var i = mt(dt(t));
                return gt(i, n) ? pt(i, n) : null
            }

            function ct(t, n) {
                return function(t, n) {
                    var i = Et(t, n);
                    if (i) return i;
                    var r, e, s, o, a = Tt(t);
                    return a[n] = (e = (r = new u).promise, s = r.reject, o = r.resolve, e.catch((function() {})), {
                        obj: null,
                        promise: e,
                        resolve: o,
                        reject: s,
                        context: null,
                        ctor: null
                    }), a[n].promise
                }(mt(t), n)
            }

            function ft(t, n) {
                return Et(mt(t), n)
            }

            function lt(t) {
                return t.__AMP_TOP || (t.__AMP_TOP = t)
            }

            function vt(t, n) {
                var i = (t.ownerDocument || t).defaultView,
                    r = n || lt(i);
                if (i && i != r && lt(i) == r) try {
                    return i.frameElement
                } catch (t) {}
                return null
            }

            function dt(t) {
                return t.nodeType ? (n = P(t), ot(n, "ampdoc")).getAmpDoc(t) : t;
                var n
            }

            function mt(t) {
                var n = dt(t);
                return n.isSingleDoc() ? n.win : n
            }

            function pt(t, n) {
                ut(gt(t, n));
                var i = Tt(t)[n];
                return i.obj || (ut(i.ctor), ut(i.context), i.obj = new i.ctor(i.context), ut(i.obj), i.context = null, i.resolve && i.resolve(i.obj)), i.obj
            }

            function bt(t, n, i, r, e, u) {
                var s = Tt(t),
                    o = s[i];
                o || (o = s[i] = {
                    obj: null,
                    promise: null,
                    resolve: null,
                    reject: null,
                    context: null,
                    ctor: null,
                    sharedInstance: u || !1
                }), !e && o.ctor || (o.ctor = r, o.context = n, o.sharedInstance = u || !1, o.resolve && pt(t, i))
            }

            function Et(t, n) {
                var i = Tt(t)[n];
                return i ? i.promise ? i.promise : (pt(t, n), i.promise = Promise.resolve(i.obj)) : null
            }

            function Tt(t) {
                var n = t.__AMP_SERVICES;
                return n || (n = t.__AMP_SERVICES = {}), n
            }

            function gt(t, n) {
                var i = t.__AMP_SERVICES && t.__AMP_SERVICES[n];
                return !(!i || !i.ctor)
            }

            function yt(t, n, i, r) {
                var e = ft(t, n);
                if (e) return e;
                var u = dt(t);
                return u.whenExtensionsKnown().then((function() {
                    var t = u.getExtensionVersion(i);
                    return t ? ot(u.win, "extensions").waitForExtension(i, t) : null
                })).then((function(i) {
                    return i ? r ? ft(t, n) : ct(t, n) : null
                }))
            }
            var wt, St = function(t) {
                    return dt(t)
                },
                At = function(t) {
                    return ot(t, "crypto")
                },
                Ot = function(t) {
                    return ot(t, "performance")
                },
                Nt = function(t) {
                    return ot(t, "preconnect")
                },
                It = function(t) {
                    return pt(t, "timer")
                },
                _t = function(t) {
                    return ht(t, "url-replace")
                },
                Rt = function(t) {
                    return yt(t, "consentPolicyManager", "amp-consent")
                },
                Pt = function(t) {
                    return ht(t, "url")
                },
                Ct = function(t) {
                    return at(t, "viewport")
                },
                Mt = function(t) {
                    return ot(t, "xhr")
                };

            function Dt(t, n, i, r) {
                var e = t,
                    u = i,
                    s = function(t) {
                        try {
                            return u(t)
                        } catch (t) {
                            var n, i;
                            throw null === (n = (i = self).__AMP_REPORT_ERROR) || void 0 === n || n.call(i, t), t
                        }
                    },
                    o = function() {
                        if (void 0 !== wt) return wt;
                        wt = !1;
                        try {
                            var t = {
                                get capture() {
                                    return wt = !0, !1
                                }
                            };
                            self.addEventListener("test-options", null, t), self.removeEventListener("test-options", null, t)
                        } catch (t) {}
                        return wt
                    }(),
                    a = !(null == r || !r.capture);
                return e.addEventListener(n, s, o ? r : a),
                    function() {
                        null == e || e.removeEventListener(n, s, o ? r : a), u = null, e = null, s = null
                    }
            }

            function Lt(t, n, i, r) {
                return Dt(t, n, i, r)
            }

            function kt(t) {
                return t.data
            }

            function xt(t, n, i, r) {
                var e = i,
                    u = Dt(t, n, (function(t) {
                        try {
                            e(t)
                        } finally {
                            e = null, u()
                        }
                    }), r);
                return u
            }

            function Ut(t) {
                return "AUDIO" === t.tagName || "VIDEO" === t.tagName
            }
            var jt = "active";

            function Ht(t, n) {
                var i = 0;
                return t.type === jt && (i = 5), Math.min(n - t.time, i)
            }
            var Ft = function() {
                    function t() {
                        this.OEt = 0, this.NEt = void 0
                    }
                    var n = t.prototype;
                    return n.push = function(t) {
                        this.NEt && this.NEt.time < t.time && (this.OEt += Ht(this.NEt, t.time)), this.NEt = t
                    }, n.getTotalEngagedTime = function(t) {
                        var n = 0;
                        return void 0 !== this.NEt && (n = this.OEt + Ht(this.NEt, t)), n
                    }, t
                }(),
                Vt = ["mousedown", "mouseup", "mousemove", "keydown", "keyup"],
                qt = ["mouseleave"],
                Gt = function() {
                    function t(t) {
                        this.ampdoc = t, this.IEt = this.CEt.bind(this), this.MEt = this.DEt.bind(this), this.LEt = this.xEt.bind(this), this.UEt = this.jEt.bind(this), this.HEt = {}, this.FEt = [], this.VEt = !1, this.qEt = !1, this.GEt = new Ft, this.Pu = Ct(this.ampdoc), this.ampdoc.whenFirstVisible().then(this.Ha.bind(this))
                    }
                    var n = t.prototype;
                    return n.Ha = function() {
                        this.oc = Date.now(), this.DEt(), this.BEt()
                    }, n.WEt = function() {
                        var t = Date.now() - this.oc;
                        return t > 0 ? t : 0
                    }, n.CEt = function() {
                        this.VEt = !1, this.qEt = !1
                    }, n.BEt = function() {
                        this.$Et(this.ampdoc.getRootNode(), Vt, this.MEt), this.$Et(this.ampdoc.getRootNode(), qt, this.LEt), this.FEt.push(this.ampdoc.onVisibilityChanged(this.UEt)), this.Pu.onScroll(this.MEt)
                    }, n.$Et = function(t, n, i) {
                        for (var r = 0; r < n.length; r++) this.FEt.push(Lt(t, n[r], i))
                    }, n.DEt = function() {
                        this.VEt || (this.VEt = !0, this.qEt = !1, this.YEt(jt))
                    }, n.xEt = function() {
                        this.qEt || (this.qEt = !0, this.VEt = !1, this.YEt("inactive"))
                    }, n.YEt = function(t) {
                        var n = this.WEt(),
                            i = Math.floor(n / 1e3),
                            r = 1e3 - n % 1e3;
                        setTimeout(this.IEt, r), this.GEt.push({
                            type: t,
                            time: i
                        })
                    }, n.jEt = function() {
                        this.ampdoc.isVisible() ? this.DEt() : this.xEt()
                    }, n.dO = function() {
                        for (var t = 0; t < this.FEt.length; t++) {
                            var n = this.FEt[t];
                            "function" == typeof n && n()
                        }
                        this.FEt = []
                    }, n.An = function() {
                        this.dO()
                    }, n.getTotalEngagedTime = function() {
                        var t = Math.floor(this.WEt() / 1e3);
                        return this.GEt.getTotalEngagedTime(t)
                    }, n.getIncrementalEngagedTime = function(t) {
                        var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (!A(this.HEt, t)) return n && (this.HEt[t] = this.getTotalEngagedTime()), this.getTotalEngagedTime();
                        var i = this.HEt[t];
                        return !1 === n ? this.getTotalEngagedTime() - i : (this.HEt[t] = this.getTotalEngagedTime(), this.HEt[t] - i)
                    }, t
                }();

            function Bt(t, n) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable
                    }))), i.push.apply(i, r)
                }
                return i
            }

            function Wt(t) {
                for (var n = 1; n < arguments.length; n++) {
                    var i = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? Bt(Object(i), !0).forEach((function(n) {
                        Q(t, n, i[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Bt(Object(i)).forEach((function(n) {
                        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(i, n))
                    }))
                }
                return t
            }
            var $t = "__AMP__EXPERIMENT_TOGGLES",
                Yt = JSON.parse('{"transport":{"beacon":true,"xhrpost":true,"image":true},"vars":{"accessReaderId":"ACCESS_READER_ID","ampGeo":"AMP_GEO","ampState":"AMP_STATE","ampVersion":"AMP_VERSION","ampdocHost":"AMPDOC_HOST","ampdocHostname":"AMPDOC_HOSTNAME","ampdocMeta":"AMPDOC_META","ampdocUrl":"AMPDOC_URL","authdata":"AUTHDATA","availableScreenHeight":"AVAILABLE_SCREEN_HEIGHT","availableScreenWidth":"AVAILABLE_SCREEN_WIDTH","backgroundState":"BACKGROUND_STATE","browserLanguage":"BROWSER_LANGUAGE","canonicalHost":"CANONICAL_HOST","canonicalHostname":"CANONICAL_HOSTNAME","canonicalPath":"CANONICAL_PATH","canonicalUrl":"CANONICAL_URL","clientId":"CLIENT_ID","consentState":"CONSENT_STATE","consentString":"CONSENT_STRING","contentLoadTime":"CONTENT_LOAD_TIME","cookie":"COOKIE","counter":"COUNTER","cumulativeLayoutShift":"CUMULATIVE_LAYOUT_SHIFT","documentCharset":"DOCUMENT_CHARSET","documentReferrer":"DOCUMENT_REFERRER","domInteractiveTime":"DOM_INTERACTIVE_TIME","domainLookupTime":"DOMAIN_LOOKUP_TIME","experimentBranches":"EXPERIMENT_BRANCHES","externalReferrer":"EXTERNAL_REFERRER","firstContentfulPaint":"FIRST_CONTENTFUL_PAINT","firstInputDelay":"FIRST_INPUT_DELAY","firstViewportReady":"FIRST_VIEWPORT_READY","fragmentParam":"FRAGMENT_PARAM","htmlAttr":"HTML_ATTR","incrementalEngagedTime":"INCREMENTAL_ENGAGED_TIME","largestContentfulPaint":"LARGEST_CONTENTFUL_PAINT","makeBodyVisible":"MAKE_BODY_VISIBLE","navRedirectCount":"NAV_REDIRECT_COUNT","navTiming":"NAV_TIMING","navType":"NAV_TYPE","pageDownloadTime":"PAGE_DOWNLOAD_TIME","pageLoadTime":"PAGE_LOAD_TIME","pageViewId":"PAGE_VIEW_ID","pageViewId64":"PAGE_VIEW_ID_64","queryParam":"QUERY_PARAM","random":"RANDOM","redirectTime":"REDIRECT_TIME","resourceTiming":"RESOURCE_TIMING","screenColorDepth":"SCREEN_COLOR_DEPTH","screenHeight":"SCREEN_HEIGHT","screenWidth":"SCREEN_WIDTH","scrollHeight":"SCROLL_HEIGHT","scrollLeft":"SCROLL_LEFT","scrollTop":"SCROLL_TOP","scrollWidth":"SCROLL_WIDTH","sessionId":"SESSION_ID","sessionCount":"SESSION_COUNT","sessionEngaged":"SESSION_ENGAGED","sessionEventTimestamp":"SESSION_EVENT_TIMESTAMP","sessionTimestamp":"SESSION_TIMESTAMP","serverResponseTime":"SERVER_RESPONSE_TIME","sourceHost":"SOURCE_HOST","sourceHostname":"SOURCE_HOSTNAME","sourcePath":"SOURCE_PATH","sourceUrl":"SOURCE_URL","tcpConnectTime":"TCP_CONNECT_TIME","timestamp":"TIMESTAMP","timezone":"TIMEZONE","timezoneCode":"TIMEZONE_CODE","title":"TITLE","totalEngagedTime":"TOTAL_ENGAGED_TIME","uach":"UACH","userAgent":"USER_AGENT","viewer":"VIEWER","viewportHeight":"VIEWPORT_HEIGHT","viewportWidth":"VIEWPORT_WIDTH"}}');

            function zt(t) {
                return "undefined" != typeof TextEncoder ? (new TextEncoder).encode(t) : Kt(unescape(encodeURIComponent(t)))
            }

            function Kt(t) {
                for (var n = new Uint8Array(t.length), i = 0; i < t.length; i++) {
                    var r = t.charCodeAt(i);
                    I(r <= 255), n[i] = r
                }
                return n
            }

            function Jt(t) {
                for (var n = new Array(t.length), i = 0; i < t.length; i++) n[i] = String.fromCharCode(t[i]);
                return n.join("")
            }
            var Xt = {
                    "-": "+",
                    "_": "/",
                    ".": "="
                },
                Zt = {
                    "+": "-",
                    "/": "_",
                    "=": "."
                };

            function Qt(t) {
                return function(t) {
                    var n = Jt(t);
                    return btoa(n).replace(/[+/=]/g, (function(t) {
                        return Zt[t]
                    }))
                }(zt(t))
            }
            var tn, nn, rn = function() {
                    function t(t) {
                        this.Lt = t, this.Ht = 0, this.Ft = 0, this.Gt = S()
                    }
                    var n = t.prototype;
                    return n.has = function(t) {
                        return !!this.Gt[t]
                    }, n.get = function(t) {
                        var n = this.Gt[t];
                        if (n) return n.access = ++this.Ft, n.payload
                    }, n.put = function(t, n) {
                        this.has(t) || this.Ht++, this.Gt[t] = {
                            payload: n,
                            access: this.Ft
                        }, this.zt()
                    }, n.zt = function() {
                        if (!(this.Ht <= this.Lt)) {
                            var t, n = this.Gt,
                                i = this.Ft + 1;
                            for (var r in n) {
                                var e = n[r].access;
                                e < i && (i = e, t = r)
                            }
                            void 0 !== t && (delete n[t], this.Ht--)
                        }
                    }, t
                }(),
                en = function() {
                    return self.AMP.config.urls
                }(),
                un = new Set(["c", "v", "a", "ad"]),
                sn = function(t) {
                    return "string" == typeof t ? on(t) : t
                };

            function on(t, n) {
                return tn || (tn = self.document.createElement("a"), nn = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new rn(100))),
                    function(t, n, i) {
                        if (i && i.has(n)) return i.get(n);
                        t.href = n, t.protocol || (t.href = t.href);
                        var r, e = {
                            href: t.href,
                            protocol: t.protocol,
                            host: t.host,
                            hostname: t.hostname,
                            port: "0" == t.port ? "" : t.port,
                            pathname: t.pathname,
                            search: t.search,
                            hash: t.hash,
                            origin: null
                        };
                        "/" !== e.pathname[0] && (e.pathname = "/" + e.pathname), ("http:" == e.protocol && 80 == e.port || "https:" == e.protocol && 443 == e.port) && (e.port = "", e.host = e.hostname), r = t.origin && "null" != t.origin ? t.origin : "data:" != e.protocol && e.host ? e.protocol + "//" + e.host : e.href, e.origin = r;
                        var u = e;
                        return i && i.put(n, u), u
                    }(tn, t, n ? null : nn)
            }

            function an(t, n, i) {
                if (!n) return t;
                var r = t.split("#", 2),
                    e = r[0].split("?", 2);
                return e[0] + (e[1] ? i ? "?".concat(n, "&").concat(e[1]) : "?".concat(e[1], "&").concat(n) : "?".concat(n)) + (r[1] ? "#".concat(r[1]) : "")
            }

            function hn(t, n) {
                return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(n))
            }

            function cn(t) {
                var n, i = [];
                for (var r in t) {
                    var e = t[r];
                    if (null != e) {
                        e = d(n = e) ? n : [n];
                        for (var u = 0; u < e.length; u++) i.push(hn(r, e[u]))
                    }
                }
                return i.join("&")
            }

            function fn(t) {
                return "https:" == (t = sn(t)).protocol || "localhost" == t.hostname || "127.0.0.1" == t.hostname || p(t.hostname, ".localhost")
            }

            function ln(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "source";
                return st(null != t, "%s %s must be available", n, i), st(fn(t) || /^\/\//.test(t), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', n, i, t), t
            }

            function vn(t) {
                return en.cdnProxyRegex.test(sn(t).origin)
            }

            function dn(t, n) {
                if (!t || "?" == t) return "";
                var i = new RegExp("[?&]".concat(n, "\\b[^&]*"), "g"),
                    r = t.replace(i, "").replace(/^[?&]/, "");
                return r ? "?" + r : ""
            }
            var mn, pn = function() {
                    return self.AMP.config.urls
                }(),
                bn = "-test-amp-cookie-tmp",
                En = "None";

            function Tn(t, n) {
                var i = function(t) {
                    try {
                        return t.document.cookie
                    } catch (t) {
                        return ""
                    }
                }(t);
                if (!i) return null;
                for (var r = i.split(";"), e = 0; e < r.length; e++) {
                    var u = r[e].trim(),
                        s = u.indexOf("=");
                    if (-1 != s && W(u.substring(0, s).trim()) == n) {
                        var o = u.substring(s + 1).trim();
                        return W(o, o)
                    }
                }
                return null
            }

            function gn(t) {
                var n = t.document.head && t.document.head.querySelector("meta[name='amp-cookie-scope']");
                if (n) {
                    var i = n.getAttribute("content") || "",
                        r = on(function(t) {
                            if (!vn(t = sn(t))) return t.href;
                            var n = t.pathname.split("/"),
                                i = n[1];
                            st(un.has(i), "Unknown path prefix in url %s", t.href);
                            var r = n[2],
                                e = "s" == r ? "https://" + decodeURIComponent(n[3]) : "http://" + decodeURIComponent(r);
                            return st(e.indexOf(".") > 0, "Expected a . in origin %s", e), n.splice(1, "s" == r ? 3 : 2), e + n.join("/") + dn(t.search, "(amp_(js[^&=]*|gsa|r|kit)|usqp)") + (t.hash || "")
                        }(t.location.href)).origin;
                    return p(r, "." + i) ? i : r.split("://")[1]
                }
                if (!vn(t.location.href))
                    for (var e = t.location.hostname.split("."), u = e[e.length - 1], s = function(t) {
                            for (var n = bn; Tn(t, n);) n = bn + 0;
                            return n
                        }(t), o = e.length - 2; o >= 0; o--)
                        if (u = e[o] + "." + u, yn(t, s, "delete", Date.now() + 1e3, u), "delete" == Tn(t, s)) return yn(t, s, "delete", Date.now() - 1e3, u), u;
                return null
            }

            function yn(t, n, i, r, e, u, s) {
                "ampproject.org" == e && (i = "delete", r = 0);
                var o = encodeURIComponent(n) + "=" + encodeURIComponent(i) + "; path=/" + (e ? "; domain=" + e : "") + "; expires=" + new Date(r).toUTCString() + function(t, n) {
                    return n ? "; SameSite=".concat(n) : ""
                }(0, u) + (s ? "; Secure" : "");
                try {
                    t.document.cookie = o
                } catch (t) {}
            }

            function wn(t, n, i) {
                if (n.allowOnProxyOrigin) st(!n.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
                else {
                    st(!vn(t.location.href), "Should never attempt to set cookie on proxy origin: ".concat(i));
                    var r = on(t.location.href).hostname.toLowerCase(),
                        e = on(pn.cdn).hostname.toLowerCase();
                    st(!(r == e || p(r, "." + e)), "Should never attempt to set cookie on proxy origin. (in depth check): " + i)
                }
            }

            function Sn(t) {
                return "string" == typeof t && t.startsWith("amp-") && -1 != t.indexOf("{")
            }
            var An = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"],
                On = {
                    "getPropertyPriority": function() {
                        return ""
                    },
                    "getPropertyValue": function() {
                        return ""
                    }
                };

            function Nn(t, n, i) {
                if (n.startsWith("--")) return n;
                mn || (mn = S());
                var r = mn[n];
                if (!r || i) {
                    if (r = n, void 0 === t[n]) {
                        var e = function(t) {
                                return t.charAt(0).toUpperCase() + t.slice(1)
                            }(n),
                            u = function(t, n) {
                                for (var i = 0; i < An.length; i++) {
                                    var r = An[i] + n;
                                    if (void 0 !== t[r]) return r
                                }
                                return ""
                            }(t, e);
                        void 0 !== t[u] && (r = u)
                    }
                    i || (mn[n] = r)
                }
                return r
            }

            function In(t, n, i, r, e) {
                var u = Nn(t.style, n, e);
                if (u) {
                    var s, o = r ? i + r : i;
                    t.style.setProperty((s = u.replace(/[A-Z]/g, (function(t) {
                        return "-" + t.toLowerCase()
                    })), An.some((function(t) {
                        return s.startsWith(t + "-")
                    })) ? "-".concat(s) : s), o)
                }
            }

            function _n(t, n) {
                void 0 === n && (n = t.hasAttribute("hidden")), n ? t.removeAttribute("hidden") : t.setAttribute("hidden", "")
            }
            var Rn = "unlisten";

            function Pn(t, n, i) {
                var r = function(t, n) {
                    var i = t.listeningFors;
                    return !i && n && (i = t.listeningFors = Object.create(null)), i || null
                }(t, i);
                if (!r) return r;
                var e = r[n];
                return !e && i && (e = r[n] = []), e || null
            }

            function Cn(t, n) {
                for (var i = n; i && i != i.parent; i = i.parent)
                    if (i == t) return !0;
                return !1
            }

            function Mn(t) {
                for (var n = {
                        "sentinel": Rn
                    }, i = t.length - 1; i >= 0; i--) {
                    var r = t[i];
                    if (!r.frame.contentWindow) {
                        t.splice(i, 1);
                        var e = r.events;
                        for (var u in e) e[u].splice(0, 1 / 0).forEach((function(t) {
                            t(n)
                        }))
                    }
                }
            }

            function Dn(t, n) {
                return n ? t.getAttribute("data-amp-3p-sentinel") : "amp"
            }
            var Ln = function() {
                function t(t, n, i, r) {
                    var e = this;
                    this.Ob = t, this.hO = i, this.mO = [], this.dO = function(t, n, i, r, e, u) {
                        ut(t.src), ut(!t.parentNode), ut(i);
                        var s = t.ownerDocument.defaultView;
                        ! function(t) {
                            t.listeningFors || t.addEventListener("message", (function(n) {
                                if (kt(n)) {
                                    var i = function(t) {
                                        return "string" == typeof t && (t = "{" == t.charAt(0) ? R(t, (function(t) {
                                            et().warn("IFRAME-HELPER", "Postmessage could not be parsed. Is it in a valid JSON format?", t)
                                        })) || null : Sn(t) ? function(t) {
                                            if (!Sn(t)) return null;
                                            var n = t.indexOf("{");
                                            return I(-1 != n), R(t.substr(n), (function(n) {
                                                G(new Error("MESSAGING: Failed to parse message: ".concat(t, "\n").concat(n.message)))
                                            }))
                                        }(t) : null), t
                                    }(kt(n));
                                    if (i && i.sentinel) {
                                        var r = function(t, n, i, r) {
                                            var e, u = Pn(t, n);
                                            if (!u) return u;
                                            for (var s = 0; s < u.length; s++) {
                                                var o = u[s],
                                                    a = o.frame.contentWindow;
                                                if (a) {
                                                    if (r == a || Cn(a, r)) {
                                                        e = o;
                                                        break
                                                    }
                                                } else setTimeout(Mn, 0, u)
                                            }
                                            return e ? e.events : null
                                        }(t, i.sentinel, n.origin, n.source);
                                        if (r) {
                                            var e = r[i.type];
                                            if (e) {
                                                e = e.slice();
                                                for (var u = 0; u < e.length; u++)(0, e[u])(i, n.source, n.origin, n)
                                            }
                                        }
                                    }
                                }
                            }))
                        }(s);
                        var o, a = function(t, n, i) {
                                for (var r, e = Pn(t, Dn(n, i), !0), u = 0; u < e.length; u++) {
                                    var s = e[u];
                                    if (s.frame === n) {
                                        r = s;
                                        break
                                    }
                                }
                                return r || (r = {
                                    frame: n,
                                    events: Object.create(null)
                                }, e.push(r)), r.events
                            }(s, t, r),
                            h = on(t.src).origin,
                            c = a[n] || (a[n] = []),
                            f = function(n, r, s, a) {
                                if ("amp" == n.sentinel) {
                                    if (r != t.contentWindow) return;
                                    if (h != s && ("null" != s || !u)) return
                                }(e || r == t.contentWindow) && (n.sentinel != Rn ? i(n, r, s, a) : o())
                            };
                        return c.push(f), o = function() {
                            if (f) {
                                var t = c.indexOf(f);
                                t > -1 && c.splice(t, 1), f = null, c = null, i = null
                            }
                        }
                    }(this.Ob, n, (function(t, n, i) {
                        e.mO.some((function(t) {
                            return t.win == n
                        })) || e.mO.push({
                            win: n,
                            origin: i
                        }), r(t, n, i)
                    }), this.hO, this.hO)
                }
                var n = t.prototype;
                return n.send = function(t, n) {
                    (function(t, n) {
                        for (var i = [], r = 0, e = 0; e < t.length; e++) {
                            var u = t[e];
                            u.win.parent ? (r < e && (t[r] = u), r++) : i.push(u)
                        }
                        r < t.length && (t.length = r)
                    })(this.mO),
                    function(t, n, i, r, e) {
                        if (t.contentWindow) {
                            r.type = i, r.sentinel = Dn(t, e);
                            var u = r;
                            e && (u = "amp-" + JSON.stringify(r));
                            for (var s = 0; s < n.length; s++) {
                                var o = n[s];
                                o.win.postMessage(u, o.origin)
                            }
                        }
                    }(this.Ob, this.mO, t, n, this.hO)
                }, n.destroy = function() {
                    this.dO(), this.mO.length = 0
                }, t
            }();

            function kn(t) {
                return t.__AMP_EMBED__
            }

            function xn(t) {
                return t.classList.contains("i-amphtml-fie") || !!x(t, ".i-amphtml-fie")
            }

            function Un(t, n) {
                return !(xn(n) || vn(t.location) || "inabox" == K(t).runtime)
            }
            var jn = function() {
                    function t() {}
                    return t.getTop = function(t) {
                        return t.top
                    }, t.getLocation = function(t) {
                        return t.location
                    }, t.getDocumentReferrer = function(t) {
                        return t.document.referrer
                    }, t.getHostname = function(t) {
                        return t.location.hostname
                    }, t.getUserAgent = function(t) {
                        return t.navigator.userAgent
                    }, t.getUserLanguage = function(t) {
                        return t.navigator.userLanguage || t.navigator.language
                    }, t.getDevicePixelRatio = function() {
                        return self.devicePixelRatio || 1
                    }, t.getSendBeacon = function(t) {
                        if (t.navigator.sendBeacon) return t.navigator.sendBeacon.bind(t.navigator)
                    }, t.getXMLHttpRequest = function(t) {
                        return t.XMLHttpRequest
                    }, t.getImage = function(t) {
                        return t.Image
                    }, t
                }(),
                Hn = null,
                Fn = "*",
                Vn = /^[a-zA-Z0-9\-_.]+$/,
                qn = "amp-analytics/linker";

            function Gn(t, n) {
                var i, r = (i = n) ? Object.keys(i).filter((function(t) {
                    var n = Vn.test(t);
                    return n || it().error(qn, "Invalid linker key: " + t), n
                })).map((function(t) {
                    return t + Fn + (n = i[t], Qt(String(n)));
                    var n
                })).join(Fn) : "";
                return "" === r ? "" : [t, Bn(r), r].join(Fn)
            }

            function Bn(t, n) {
                var i, r, e = n || 0;
                return function(t) {
                    Hn || (Hn = function() {
                        for (var t = new Array(256), n = 0; n < 256; n++) {
                            for (var i = n, r = 0; r < 8; r++) 1 & i ? i = i >>> 1 ^ 3988292384 : i >>>= 1;
                            t[n] = i
                        }
                        return t
                    }());
                    for (var n = zt(t), i = -1 >>> 0, r = 0; r < n.length; r++) {
                        var e = 255 & (i ^ n[r]);
                        i = i >>> 8 ^ Hn[e]
                    }
                    return (-1 ^ i) >>> 0
                }([(i = (new Date).getTimezoneOffset(), r = jn.getUserLanguage(window), [jn.getUserAgent(window), i, r].join(Fn)), Math.floor(Date.now() / 6e4) - e, t].join(Fn)).toString(36)
            }

            function Wn(t) {
                return function(t) {
                    if ("undefined" != typeof TextDecoder) return new TextDecoder("utf-8").decode(t);
                    var n = Jt(new Uint8Array(t.buffer || t));
                    return decodeURIComponent(escape(n))
                }(function(t) {
                    return Kt(atob(t.replace(/[-_.]/g, (function(t) {
                        return Xt[t]
                    }))))
                }(String(t)))
            }
            var $n = function() {
                    function t(t) {
                        this.t = t, this.mQ = {}
                    }
                    var n = t.prototype;
                    return n.get = function(t, n) {
                        return t && n ? (A(this.mQ, t) || (this.mQ[t] = this.zEt(t)), this.mQ[t] && this.mQ[t][n] ? this.mQ[t][n] : null) : (it().error("amp-analytics/linker-reader", "LINKER_PARAM requires two params, name and id"), null)
                    }, n.zEt = function(t) {
                        var n = $(this.t.location.search);
                        if (!A(n, t)) return null;
                        var i = n[t];
                        return this.KEt(this.t.location, t),
                            function(t) {
                                var n = function(t) {
                                    var n = t.split(Fn),
                                        i = n.length % 2 == 0;
                                    if (n.length < 4 || !i) return it().error(qn, "Invalid linker_param value ".concat(t)), null;
                                    var r = Number(n.shift());
                                    return 1 !== r ? (it().error(qn, "Invalid version number ".concat(r)), null) : {
                                        checksum: n.shift(),
                                        serializedIds: n.join(Fn)
                                    }
                                }(t);
                                if (!n) return null;
                                var i = n.checksum,
                                    r = n.serializedIds;
                                return function(t, n) {
                                    for (var i = 0; i <= 1; i++)
                                        if (Bn(t, i) == n) return !0;
                                    return !1
                                }(r, i) ? function(t) {
                                    for (var n = {}, i = t.split(Fn), r = 0; r < i.length; r += 2) {
                                        var e = i[r];
                                        if (Vn.test(e)) {
                                            var u = Wn(i[r + 1]);
                                            n[e] = u
                                        } else it().error(qn, "Invalid linker key ".concat(e, ", value ignored"))
                                    }
                                    return n
                                }(r) : (it().error(qn, "LINKER_PARAM value checksum not valid"), null)
                            }(i)
                    }, n.KEt = function(t, n) {
                        if (this.t.history.replaceState) {
                            var i = dn(t.search, n),
                                r = t.origin + t.pathname + i + (t.hash || "");
                            this.t.history.replaceState(null, "", r)
                        }
                    }, t
                }(),
                Yn = "visible",
                zn = "amp-analytics/session-manager",
                Kn = "sessionId",
                Jn = "creationTimestamp",
                Xn = "accessTimestamp",
                Zn = "engaged",
                Qn = "eventTimestamp",
                ti = "count",
                ni = function() {
                    function t(t) {
                        this.pK = ct(t, "storage"), this.JEt = S(), this.qi = t, this.t = t.win, this.$y = [], this.XEt = null, this.Ee = null, this.ZEt = !0, this.zo()
                    }
                    var n = t.prototype;
                    return n.zo = function() {
                        var t = this;
                        this.QEt(), this.$y.push(Lt(this.t, "focus", (function() {
                            t.XEt = !0, t.tTt()
                        })), Lt(this.t, "blur", (function() {
                            t.XEt = !1, t.tTt()
                        })), Lt(this.t, "pageshow", (function() {
                            t.ZEt = !0, t.tTt()
                        })), Lt(this.t, "pagehide", (function() {
                            t.ZEt = !1, t.tTt()
                        })), this.qi.onVisibilityChanged((function() {
                            t.Ee = t.qi.isVisible(), t.tTt()
                        })))
                    }, n.QEt = function() {
                        this.XEt = this.t.document.hasFocus(), this.Ee = !(function(t) {
                            var n = t[Nn(t, "visibilityState", !0)];
                            if (n) return n;
                            var i = Nn(t, "hidden", !0);
                            return i in t && t[i] ? "hidden" : Yn
                        }(this.t.document) != Yn)
                    }, n.tTt = function() {
                        var t = this;
                        Object.keys(this.JEt).forEach((function(n) {
                            var i = t.JEt[n];
                            i.engaged = t.nTt(), t.iTt(n, i)
                        }))
                    }, n.dispose = function() {
                        this.$y.forEach((function(t) {
                            t()
                        })), this.$y.length = 0
                    }, n.getSessionValue = function(t, n) {
                        return this.get(t).then((function(t) {
                            return null == t ? void 0 : t[n]
                        }))
                    }, n.updateEvent = function(t) {
                        return this.get(t, (function(t) {
                            t.eventTimestamp = Date.now()
                        }))
                    }, n.get = function(t, n) {
                        return t ? A(this.JEt, t) && !ii(this.JEt[t]) ? (this.JEt[t] = this.rTt(this.JEt[t]), null == n || n(this.JEt[t]), this.iTt(t, this.JEt[t]), Promise.resolve(this.JEt[t])) : this.eTt(t, n) : (it().error(zn, "Sessions can only be accessed with a vendor type."), Promise.resolve(null))
                    }, n.eTt = function(t, n) {
                        var i = this;
                        return this.pK.then((function(n) {
                            var i = ei(t);
                            return n.get(i)
                        })).then((function(t) {
                            return t ? i.rTt(w(n = t) ? (Q(e = {}, Kn, n.sessionId), Q(e, Jn, n.creationTimestamp), Q(e, ti, n.count), Q(e, Xn, n.accessTimestamp), Q(e, Qn, n.eventTimestamp), Q(e, Zn, null === (r = n.engaged) || void 0 === r || r), e) : (et().error(zn, "Invalid stored session value"), ui()), !0) : ui(i.nTt());
                            var n, r, e
                        })).then((function(r) {
                            return t in i.JEt && !ii(i.JEt[t]) || (null == n || n(r), i.iTt(t, r), i.JEt[t] = r), i.JEt[t]
                        }))
                    }, n.rTt = function(t, n) {
                        var i = t.count,
                            r = Date.now();
                        if (ii(t)) {
                            var e = (null != i ? i : 0) + 1;
                            t = ui(this.nTt(), e)
                        } else {
                            var u = n && t.engaged;
                            t.engaged = u || this.nTt(), u && (this.XEt = !0, this.ZEt = !0, this.Ee = !0)
                        }
                        return t.accessTimestamp = r, t
                    }, n.nTt = function() {
                        return this.ZEt && this.Ee && this.XEt
                    }, n.iTt = function(t, n) {
                        return this.pK.then((function(i) {
                            var r = ei(t);
                            i.setNonBoolean(r, n)
                        }))
                    }, t
                }();

            function ii(t) {
                return t.accessTimestamp + 18e5 < Date.now()
            }

            function ri() {
                return Math.round(1e4 * Math.random())
            }

            function ei(t) {
                return "amp-session:" + t
            }

            function ui(t) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return Q(n = {}, Kn, ri()), Q(n, Jn, Date.now()), Q(n, Xn, Date.now()), Q(n, ti, i), Q(n, Qn, void 0), Q(n, Zn, t), n
            }

            function si(t) {
                return ct(t, "amp-analytics-session")
            }

            function oi(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                return Rt(t).then((function(t) {
                    return t ? t.getConsentStringInfo(n) : null
                }))
            }
            var ai = "amp-analytics/variables",
                hi = /^(?:([^\s]*)(\([^)]*\))|[^]+)$/,
                ci = {
                    1: "sufficient",
                    2: "insufficient",
                    3: "not_required",
                    4: "unknown"
                },
                fi = function() {
                    function t(t, n, i) {
                        this.vars = t, this.iterations = void 0 === n ? 2 : n, this.noEncode = !!i, this.freezeVars = {}
                    }
                    var n = t.prototype;
                    return n.freezeVar = function(t) {
                        this.freezeVars[t] = !0
                    }, n.getVar = function(t) {
                        var n = this.vars[t];
                        return null == n && (n = ""), n
                    }, t
                }();

            function li(t, n, i) {
                var r = Number(n),
                    e = t.length;
                return st(N(r), "Start index " + r + "in substr macro should be a number"), i && st(N(e = Number(i)), "Length " + e + " in substr macro should be a number"), t.substr(r, e)
            }

            function vi(t, n) {
                return t && t.length ? t : n
            }

            function di(t, n, i) {
                n || it().warn(ai, "REPLACE macro must have two or more arguments"), i || (i = "");
                var r = new RegExp(n, "g");
                return t.replace(r, i)
            }

            function mi(t, n, i) {
                n || it().warn(ai, "MATCH macro must have two or more arguments");
                var r = 0;
                i && (0 != (r = parseInt(i, 10)) && !r || r < 0) && (it().error(ai, "Third argument in MATCH macro must be a number >= 0"), r = 0);
                var e = new RegExp(n),
                    u = t.match(e);
                return u && u[r] ? u[r] : ""
            }

            function pi(t, n, i, r) {
                var e = Number(t),
                    u = Number(n);
                st(!isNaN(e), "CALC macro - left operand must be a number"), st(!isNaN(u), "CALC macro - right operand must be a number");
                var s = 0;
                switch (i) {
                    case "add":
                        s = e + u;
                        break;
                    case "subtract":
                        s = e - u;
                        break;
                    case "multiply":
                        s = e * u;
                        break;
                    case "divide":
                        st(u, "CALC macro - cannot divide by 0"), s = e / u;
                        break;
                    default:
                        it().error(ai, "CALC macro - Invalid operation")
                }
                return Si(r) ? Math.round(s) : s
            }
            var bi = function() {
                function t(t) {
                    var n = this;
                    this.qi = t, this.VU = {}, this.bQ = ot(this.qi.win, "amp-analytics-linker-reader"), this.uTt = si(this.qi), this.$F("$DEFAULT", vi), this.$F("$SUBSTR", li), this.$F("$TRIM", (function(t) {
                        return t.trim()
                    })), this.$F("$TOLOWERCASE", (function(t) {
                        return t.toLowerCase()
                    })), this.$F("$TOUPPERCASE", (function(t) {
                        return t.toUpperCase()
                    })), this.$F("$NOT", (function(t) {
                        return String(!t)
                    })), this.$F("$BASE64", (function(t) {
                        return Qt(t)
                    })), this.$F("$HASH", this.sTt.bind(this)), this.$F("$IF", (function(t, n, i) {
                        return Si(t) ? n : i
                    })), this.$F("$REPLACE", di), this.$F("$MATCH", mi), this.$F("$CALC", pi), this.$F("$EQUALS", (function(t, n) {
                        return t === n
                    })), this.$F("LINKER_PARAM", (function(t, i) {
                        return n.bQ.get(t, i)
                    })), this.$F("TIMEZONE_CODE", (function() {
                        var t = "";
                        return "Intl" in n.qi.win && "DateTimeFormat" in n.qi.win.Intl && (t = (new n.qi.win.Intl.DateTimeFormat).resolvedOptions().timeZone), t
                    })), this.$F("SCROLL_TOP", (function() {
                        return Math.round(Ct(n.qi).getScrollTop())
                    })), this.$F("SCROLL_LEFT", (function() {
                        return Math.round(Ct(n.qi).getScrollLeft())
                    })), this.$F("EXPERIMENT_BRANCHES", (function(t) {
                        return function(t, n) {
                            if (n) return function(t, n) {
                                return t.__AMP_EXPERIMENT_BRANCHES ? t.__AMP_EXPERIMENT_BRANCHES[n] : null
                            }(t, n) || "";
                            var i = function(t) {
                                var n = lt(t);
                                return n.__AMP_EXPERIMENT_BRANCHES || (n.__AMP_EXPERIMENT_BRANCHES = {}), Wt({}, n.__AMP_EXPERIMENT_BRANCHES)
                            }(t);
                            return Object.keys(i).map((function(t) {
                                return "".concat(t, ":").concat(i[t])
                            })).join(",")
                        }(n.qi.win, t)
                    })), this.$F("AMPDOC_META", (function(t) {
                        var i, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        return null !== (i = n.qi.getMetaByName(t)) && void 0 !== i ? i : r
                    }))
                }
                var n = t.prototype;
                return n.getMacros = function(t) {
                    var n = this,
                        i = t.getAttribute("type"),
                        r = {
                            "COOKIE": function(i) {
                                return function(t, n, i) {
                                    return Un(t, n) ? Tn(t, i) : null
                                }(n.qi.win, t, i)
                            },
                            "CONSENT_STATE": wi(t),
                            "CONSENT_STRING": oi(t),
                            "CONSENT_METADATA": function(n) {
                                return function(t, n) {
                                    return function(t) {
                                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                                        return Rt(t).then((function(t) {
                                            return t ? t.getConsentMetadataInfo(n) : null
                                        }))
                                    }(t).then((function(t) {
                                        return t ? t[n] : null
                                    }))
                                }(t, st(n, "CONSENT_METADATA macro must contain a key"))
                            },
                            "SESSION_ID": function() {
                                return n.oTt(i, Kn)
                            },
                            "SESSION_TIMESTAMP": function() {
                                return n.oTt(i, Jn)
                            },
                            "SESSION_COUNT": function() {
                                return n.oTt(i, ti)
                            },
                            "SESSION_EVENT_TIMESTAMP": function() {
                                return n.oTt(i, Qn)
                            },
                            "SESSION_ENGAGED": function() {
                                return n.oTt(i, Zn)
                            }
                        },
                        e = xn(t) ? {} : {
                            "FIRST_CONTENTFUL_PAINT": function() {
                                return Ot(n.qi.win).getMetric("fcpv")
                            },
                            "FIRST_VIEWPORT_READY": function() {
                                return Ot(n.qi.win).getMetric("pc")
                            },
                            "MAKE_BODY_VISIBLE": function() {
                                return Ot(n.qi.win).getMetric("mbv")
                            },
                            "LARGEST_CONTENTFUL_PAINT": function() {
                                return Ot(n.qi.win).getMetric("lcpv")
                            },
                            "FIRST_INPUT_DELAY": function() {
                                return Ot(n.qi.win).getMetric("fid")
                            },
                            "CUMULATIVE_LAYOUT_SHIFT": function() {
                                return Ot(n.qi.win).getMetric("cls")
                            }
                        };
                    return Wt(Wt(Wt({}, this.VU), r), e)
                }, n.oTt = function(t, n) {
                    return this.uTt.then((function(i) {
                        return i.getSessionValue(t, n)
                    }))
                }, n.$F = function(t, n) {
                    ut(!this.VU[t]), this.VU[t] = n
                }, n.expandTemplate = function(t, n, i, r, e) {
                    var u, s, o, a, h, c = this;
                    return s = /\${([^{}]*)}/g, o = function(t, u) {
                        if (n.iterations < 0) return it().error(ai, "Maximum depth reached while expanding variables. Please ensure that the variables are not recursive."), t;
                        if (!u) return "";
                        var s = Ti(u),
                            o = s.argList,
                            a = s.name;
                        if (n.freezeVars[a]) return t;
                        var h = n.getVar(a),
                            f = _t(i);
                        if ("string" == typeof h) h = c.aTt(h, n, i, f, r, e, o);
                        else if (d(h)) {
                            for (var l = 0; l < h.length; l++) h[l] = "string" == typeof h[l] ? c.aTt(h[l], n, i, f, r, e) : h[l];
                            h = Promise.all(h)
                        }
                        return Promise.resolve(h).then((function(t) {
                            return n.noEncode ? t : Ei(t)
                        }))
                    }, a = [], h = 0, (u = t).replace(s, (function(t) {
                        var n = arguments[arguments.length - 2];
                        a.push(u.slice(h, n)), h = n + t.length;
                        var i = o.apply(null, arguments);
                        return a.push(i), ""
                    })), a.push(u.slice(h)), Promise.all(a).then((function(t) {
                        return t.join("")
                    }))
                }, n.aTt = function(t, n, i, r, e, u, s) {
                    var o = this;
                    return this.expandTemplate(t, new fi(n.vars, n.iterations - 1, !0), i, e, u).then((function(t) {
                        return r.expandStringAsync(s ? t + s : t, e || o.getMacros(i), u)
                    }))
                }, n.sTt = function(t) {
                    return At(this.qi.win).sha384Base64(t)
                }, t
            }();

            function Ei(t) {
                if (null == t) return "";
                if (d(t)) return t.map(Ei).join(",");
                var n = Ti(String(t)),
                    i = n.argList,
                    r = n.name;
                return encodeURIComponent(r) + i
            }

            function Ti(t) {
                if (!t) return {
                    name: "",
                    argList: ""
                };
                var n = t.match(hi);
                return st(n, "Variable with invalid format found: " + t), {
                    name: n[1] || n[0],
                    argList: n[2] || ""
                }
            }

            function gi(t) {
                return at(t, "amp-analytics-variables")
            }

            function yi(t) {
                return ct(t, "amp-analytics-variables")
            }

            function wi(t) {
                return function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                    return Rt(t).then((function(t) {
                        return t ? t.whenPolicyResolved(n) : null
                    }))
                }(t).then((function(t) {
                    return t ? ci[t] : null
                }))
            }

            function Si(t) {
                return "false" !== t && "" !== t && "0" !== t && "null" !== t && "NaN" !== t && "undefined" !== t
            }
            var Ai = "amp-analytics/config",
                Oi = function() {
                    function t(t) {
                        this.En = t, this.t = null, this.hTt = Yt || {}, this.Cgt = {}, this.YC = {}, this.cTt = {}, this.fTt = !1, this.cA = gi(t)
                    }
                    var n = t.prototype;
                    return n.loadConfig = function() {
                        var t = this;
                        return this.t = this.En.ownerDocument.defaultView, this.fTt = this.En.hasAttribute("sandbox"), Promise.all([this.lTt(), this.vTt()]).then(this.dTt.bind(this)).then(this.mTt.bind(this)).then((function() {
                            return t.YC
                        }))
                    }, n.pTt = function(t) {
                        var n, i = (this.t.location, Z.cdn),
                            r = "bg" === t && null !== (n = self.AMP_CONFIG) && void 0 !== n && n.canary ? ".canary" : "";
                        return "".concat(i, "/rtv/").concat(K().rtvVersion, "/v0/analytics-vendors/").concat(t).concat(r, ".json")
                    }, n.vTt = function() {
                        var t = this,
                            n = this.En.getAttribute("type");
                        if (!n) return e();
                        var i = this.pTt(n),
                            r = this.ye();
                        return et().fine(r, "Fetching vendor config", i), Mt(this.t).fetchJson(i, {
                            ampCors: !1
                        }).then((function(t) {
                            return t.json()
                        })).then((function(i) {
                            t.Cgt = i || {}, et().fine(r, "Vendor config loaded for " + n, i)
                        }), (function(t) {
                            it().error(r, "Error loading vendor config: ", i, t)
                        }))
                    }, n.lTt = function() {
                        var t = this,
                            n = this.En.getAttribute("config");
                        if (!n || this.fTt) return e();
                        ln(n, this.En);
                        var i = this.ye();
                        et().fine(i, "Fetching remote config", n);
                        var r = {};
                        return this.En.hasAttribute("data-credentials") && (r.credentials = this.En.getAttribute("data-credentials")), _t(this.En).expandUrlAsync(n, this.cA.getMacros(this.En)).then((function(i) {
                            return n = i, Mt(t.t).fetchJson(n, r)
                        })).then((function(t) {
                            return t.json()
                        })).then((function(r) {
                            t.cTt = r, et().fine(i, "Remote config loaded", n)
                        }), (function(t) {
                            it().error(i, "Error loading remote config: ", n, t)
                        }))
                    }, n.dTt = function() {
                        var t = this.bTt().url,
                            n = {},
                            i = this.CK();
                        return this.ETt(i), Ni(i, n), Ni(this.cTt, n), !t || this.fTt ? (this.YC = this.TTt(n), e()) : this.gTt(n, t)
                    }, n.gTt = function(t, n) {
                        var i = this;
                        ln(n, this.En);
                        var r = this.ye();
                        return et().fine(r, "Rewriting config", n), this.yTt(t).then((function() {
                            var e = {
                                method: "POST",
                                body: t
                            };
                            return i.En.hasAttribute("data-credentials") && (e.credentials = i.En.getAttribute("data-credentials")), _t(i.En).expandUrlAsync(n).then((function(t) {
                                return Mt(i.t).fetchJson(t, e)
                            })).then((function(t) {
                                return t.json()
                            })).then((function(t) {
                                i.YC = i.TTt(t), et().fine(r, "Configuration re-written", n)
                            }), (function(t) {
                                it().error(r, "Error rewriting configuration: ", n, t)
                            }))
                        }))
                    }, n.mTt = function() {
                        if (this.YC.warningMessage) {
                            var t = this.ye(),
                                n = this.En.getAttribute("type"),
                                i = this.En.getAttribute("config");
                            it().warn(t, "Warning from analytics vendor%s%s: %s", n ? " " + n : "", i ? " with remote config url " + i : "", String(this.YC.warningMessage)), delete this.YC.warningMessage
                        }
                    }, n.yTt = function(t) {
                        var n = this,
                            i = t.configRewriter,
                            r = i && i.varGroups,
                            u = this.bTt().varGroups;
                        if (!r && !u) return e();
                        if (r && !u) {
                            var s = this.ye();
                            return it().warn(s, "This analytics provider does not currently support varGroups"), e()
                        }
                        t.configRewriter = t.configRewriter || {};
                        var o = t.configRewriter;
                        o.vars = {};
                        var a = [],
                            h = r || {};
                        return O(h, u), Object.keys(h).forEach((function(t) {
                            var i = h[t];
                            if (i.enabled) {
                                var r = n.shallowExpandObject(n.En, i).then((function(t) {
                                    delete t.enabled, Object.assign(o.vars, t)
                                }));
                                a.push(r)
                            }
                        })), Promise.all(a).then((function() {
                            if (!Object.keys(o.vars).length) return delete t.configRewriter;
                            r && delete o.varGroups
                        }))
                    }, n.TTt = function(t) {
                        var n = {
                            "vars": {
                                "requestCount": 0
                            }
                        };
                        return Ni(Ii(this.hTt), n), Ni(Ii(this.Cgt), n, !0), Ni(Ii(t), n, !0), n
                    }, n.bTt = function() {
                        return this.Cgt.configRewriter || {}
                    }, n.CK = function() {
                        if (this.En.CONFIG) return this.En.CONFIG;
                        var t = {},
                            n = this.ye();
                        try {
                            var i = this.En.children;
                            1 == i.length ? t = function(t) {
                                var n, i, r, e = (n = t, I(/^[\w-]+$/.test("script")), i = n, r = "> ".concat("script"), C(i) ? i.querySelectorAll(M(r, ":scope")) : D(i, r)),
                                    u = e.length;
                                if (1 !== u) throw new Error("Found ".concat(u, " <script> children. Expected 1."));
                                var s = e[0];
                                if (! function(t) {
                                        var n;
                                        return "SCRIPT" == t.tagName && "APPLICATION/JSON" == (null === (n = t.getAttribute("type")) || void 0 === n ? void 0 : n.toUpperCase())
                                    }(s)) throw new Error('<script> child must have type="application/json"');
                                try {
                                    var o;
                                    return _(null !== (o = s.textContent) && void 0 !== o ? o : "")
                                } catch (t) {
                                    throw new Error("Failed to parse <script> contents. Is it valid JSON?")
                                }
                            }(this.En) : i.length > 1 && it().error(n, "The tag should contain only one <script> child.")
                        } catch (t) {
                            it().error(n, t.message)
                        }
                        return t
                    }, n.ETt = function(t) {
                        if (this.En.getAttribute("type") && (t.transport || this.cTt.transport)) {
                            var n = this.ye();
                            it().error(n, "Inline or remote config should not overwrite vendor transport settings")
                        }
                        t.transport && t.transport.iframe && (it().error(Ai, "Inline configs are not allowed to specify transport iframe"), t.transport.iframe = void 0), this.cTt.transport && this.cTt.transport.iframe && (it().error(Ai, "Remote configs are not allowed to specify transport iframe"), this.cTt.transport.iframe = void 0)
                    }, n.ye = function() {
                        return "AmpAnalytics " + (this.En.getAttribute("id") || "<unknown id>")
                    }, n.shallowExpandObject = function(t, n) {
                        var i = {},
                            r = [],
                            e = [],
                            u = _t(t),
                            s = gi(t).getMacros(t);
                        return Object.keys(n).forEach((function(t) {
                            r.push(t);
                            var i = u.expandStringAsync(n[t], s);
                            e.push(i)
                        })), Promise.all(e).then((function(t) {
                            return r.forEach((function(n, r) {
                                return i[n] = t[r]
                            })), i
                        }))
                    }, t
                }();

            function Ni(t, n, i) {
                for (var r in null == n && (n = {}), st(i || !t || !t.optout || "_gaUserPrefs.ioo" == t.optout || "__gaOptOutExtension" == t.optoutElementId, "optout property is only available to vendor config."), t) st(i || "iframePing" != r, "iframePing config is only available to vendor config."), A(t, r) && (d(t[r]) ? (d(n[r]) || (n[r] = []), n[r] = Ni(t[r], n[r], i)) : w(t[r]) ? (w(n[r]) || (n[r] = {}), n[r] = Ni(t[r], n[r], i)) : n[r] = t[r]);
                return n
            }

            function Ii(t) {
                if (!t.requests) return t;
                for (var n in t.requests) A(t.requests, n) && (t.requests[n] = w(i = t.requests[n]) ? i : {
                    "baseUrl": i
                });
                var i;
                return function(t) {
                    if (A(t, "requests") && A(t, "requestOrigin")) {
                        var n = t.requestOrigin;
                        for (var i in t.requests) A(t.requests[i], "origin") || (t.requests[i].origin = n)
                    }
                    return t
                }(t)
            }
            var _i = 31536e6;
            var Ri = function() {
                    function t() {
                        this.ve = []
                    }
                    var n, i = t.prototype;
                    return i.peek = function() {
                        var t = this.length;
                        return t ? this.ve[t - 1].item : null
                    }, i.enqueue = function(t, n) {
                        if (isNaN(n)) throw new Error("Priority must not be NaN.");
                        var i = this.de(n);
                        this.ve.splice(i, 0, {
                            item: t,
                            priority: n
                        })
                    }, i.de = function(t) {
                        for (var n = -1, i = 0, r = this.length; i <= r && (n = Math.floor((i + r) / 2)) !== this.length;)
                            if (this.ve[n].priority < t) i = n + 1;
                            else {
                                if (!(n > 0 && this.ve[n - 1].priority >= t)) break;
                                r = n - 1
                            }
                        return n
                    }, i.forEach = function(t) {
                        for (var n = this.length; n--;) t(this.ve[n].item)
                    }, i.dequeue = function() {
                        var t = this.ve.pop();
                        return t ? t.item : null
                    }, (n = [{
                        key: "length",
                        get: function() {
                            return this.ve.length
                        }
                    }]) && function(t, n) {
                        for (var i = 0; i < n.length; i++) {
                            var r = n[i];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }(t.prototype, n), t
                }(),
                Pi = !1,
                Ci = "CHUNK",
                Mi = /nochunking=1/.test(self.location.hash),
                Di = e();

            function Li(t, n, i) {
                Mi ? Di.then(n) : function(t) {
                    var n, i;
                    return "chunk", n = Hi, bt(mt(i = dt(t)), i, "chunk", n), at(t, "chunk")
                }(t).run(n, i)
            }
            var ki, xi = "not_run",
                Ui = function() {
                    function t(t) {
                        this.state = xi, this.pe = t
                    }
                    var n = t.prototype;
                    return n.be = function(t) {
                        if ("run" != this.state) {
                            this.state = "run";
                            try {
                                this.pe(t)
                            } catch (t) {
                                throw this.ge(t), t
                            }
                        }
                    }, n.ye = function() {
                        return this.pe.displayName || this.pe.name
                    }, n.ge = function(t) {}, n.we = function() {
                        return !1
                    }, n.Ae = function() {
                        return !1
                    }, t
                }(),
                ji = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t, i, r) {
                        var e;
                        return (e = n.call(this, t)).xe = r, e
                    }
                    var r = i.prototype;
                    return r.ge = function(t) {
                        var n;
                        ut((n = self.document).defaultView), Pi || (Pi = !0, function(t) {
                            ! function(t, n) {
                                for (var i in n) In(t, i, n[i])
                            }(t.body, {
                                opacity: 1,
                                visibility: "visible",
                                "animation": "none"
                            })
                        }(n))
                    }, r.we = function() {
                        return this.Ee()
                    }, r.Ae = function() {
                        return this.xe.Oe
                    }, r.Ee = function() {
                        return this.xe.ampdoc.isVisible()
                    }, i
                }(Ui),
                Hi = function() {
                    function t(t) {
                        var n, i = this;
                        this.ampdoc = t, this.t = t.win, this.Pe = new Ri, this.Te = this.Ie.bind(this), this.Me = 0, this.Se = !(!this.t.navigator.scheduling || !this.t.navigator.scheduling.isInputPending), this.ke = !1, this.me = this.t.document.documentElement.hasAttribute("i-amphtml-no-boilerplate"), this.t.addEventListener("message", (function(t) {
                            "amp-macro-task" == kt(t) && i.Ie(null)
                        })), this.Oe = !1, (n = t, ct(n, "viewer")).then((function() {
                            i.Oe = !0
                        })), t.onVisibilityChanged((function() {
                            t.isVisible() && i._e()
                        }))
                    }
                    var n = t.prototype;
                    return n.run = function(t, n) {
                        var i = new Ui(t);
                        this.Re(i, n)
                    }, n.runForStartup = function(t) {
                        var n = new ji(t, this.t, this);
                        this.Re(n, Number.POSITIVE_INFINITY)
                    }, n.Re = function(t, n) {
                        this.Pe.enqueue(t, n), this._e()
                    }, n.Ne = function(t) {
                        for (var n = this.Pe.peek(); n && n.state !== xi;) this.Pe.dequeue(), n = this.Pe.peek();
                        return n && t && this.Pe.dequeue(), n
                    }, n.Ie = function(t) {
                        var n, i = this,
                            r = this.Ne(!0);
                        if (!r) return this.ke = !1, this.Me = 0, !1;
                        try {
                            n = Date.now(), r.be(t)
                        } finally {
                            Di.then().then().then().then().then().then().then().then().then((function() {
                                i.ke = !1, i.Me += Date.now() - n, et().fine(Ci, r.ye(), "Chunk duration", Date.now() - n, i.Me), i._e()
                            }))
                        }
                        return !0
                    }, n.Ce = function(t) {
                        var n = this;
                        if (this.me && (this.Se ? this.t.navigator.scheduling.isInputPending() : this.Me > 5)) return this.Me = 0, void this.De();
                        Di.then((function() {
                            n.Te(t)
                        }))
                    }, n._e = function() {
                        if (!this.ke) {
                            var t = this.Ne();
                            if (t) return t.we() ? (this.ke = !0, void this.Ce(null)) : void(t.Ae() && this.t.requestIdleCallback ? (n = this.t, i = 2e3, r = this.Te, e = Date.now(), n.requestIdleCallback((function t(u) {
                                if (u.timeRemaining() < 15) {
                                    var s = i - (Date.now() - e);
                                    s <= 0 || u.didTimeout ? (et().fine(Ci, "Timed out", i, u.didTimeout), r(u)) : (et().fine(Ci, "Rescheduling with", s, u.timeRemaining()), n.requestIdleCallback(t, {
                                        timeout: s
                                    }))
                                } else et().fine(Ci, "Running idle callback with ", 15), r(u)
                            }), {
                                timeout: i
                            })) : this.De())
                        }
                        var n, i, r, e
                    }, n.De = function() {
                        this.t.postMessage("amp-macro-task", "*")
                    }, t
                }(),
                Fi = "amp-analytics/cookie-writer",
                Vi = {
                    "referrerDomains": !0,
                    "enabled": !0,
                    "cookiePath": !0,
                    "cookieMaxAge": !0,
                    "cookieSecure": !0,
                    "cookieDomain": !0,
                    "sameSite": !0,
                    "SameSite": !0,
                    "secure": !0
                },
                qi = function() {
                    function t(t, n, i) {
                        this.t = t, this.En = n, this.AC = _t(n), this.wTt = null, this.YC = i, this.cc = gi(n).getMacros(n)
                    }
                    var n = t.prototype;
                    return n.write = function() {
                        var t = this;
                        return this.wTt || (this.wTt = new u, Li(this.En, (function() {
                            t.wTt.resolve(t.zo())
                        }), 10)), this.wTt.promise
                    }, n.zo = function() {
                        if (!Un(this.t, this.En)) return e();
                        if (!A(this.YC, "cookies")) return e();
                        if (!w(this.YC.cookies)) return it().error(Fi, "cookies config must be an object"), e();
                        var t = this.YC.cookies;
                        if (!1 === t.enabled) return e();
                        for (var n = this.wQ(t), i = Object.keys(t), r = [], u = 0; u < i.length; u++) {
                            var s = i[u],
                                o = t[s],
                                a = this.STt(o.sameSite || o.SameSite || t.sameSite || t.SameSite);
                            this.IQ(s, o) && r.push(this.kQ(s, o.value, n, a))
                        }
                        return Promise.all(r)
                    }, n.wQ = function(t) {
                        if (!A(t, "cookieMaxAge")) return _i;
                        var n = Number(t.cookieMaxAge);
                        return n || 0 === n ? (n <= 0 && it().warn(Fi, "cookieMaxAge %s less than or equal to 0, cookie will immediately expire", t.cookieMaxAge), 1e3 * n) : (it().error(Fi, "invalid cookieMaxAge %s, falling back to default value (1 year)", t.cookieMaxAge), _i)
                    }, n.IQ = function(t, n) {
                        return !(Vi[t] || (w(n) ? !A(n, "value") && (it().error(Fi, "value is required in the cookieValue object"), 1) : (it().error(Fi, "cookieValue must be configured in an object"), 1)))
                    }, n.kQ = function(t, n, i, r) {
                        var e = this;
                        return this.AC.expandStringAsync(n, this.cc).then((function(n) {
                            if (n) {
                                var u = Date.now() + i,
                                    s = r === En;
                                ! function(t, n, i, r) {
                                    var e = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                                    wn(t, e, n);
                                    var u = void 0;
                                    e.domain ? u = e.domain : e.highestAvailableDomain && (u = gn(t)), yn(t, n, i, r, u, e.sameSite, e.secure)
                                }(e.t, t, n, u, {
                                    highestAvailableDomain: !0,
                                    sameSite: r,
                                    secure: s
                                })
                            }
                        })).catch((function(t) {
                            it().error(Fi, "Error expanding cookie string", t)
                        }))
                    }, n.STt = function(t) {
                        switch (t) {
                            case "Strict":
                                return "Strict";
                            case "Lax":
                                return "Lax";
                            case "None":
                                return En;
                            default:
                                return
                        }
                    }, t
                }(),
                Gi = function() {
                    function t() {
                        this.nr = null
                    }
                    var n = t.prototype;
                    return n.add = function(t) {
                        var n = this;
                        return this.nr || (this.nr = []), this.nr.push(t),
                            function() {
                                n.remove(t)
                            }
                    }, n.remove = function(t) {
                        var n, i, r;
                        this.nr && (i = t, -1 != (r = (n = this.nr).indexOf(i)) && n.splice(r, 1))
                    }, n.removeAll = function() {
                        this.nr && (this.nr.length = 0)
                    }, n.fire = function(t) {
                        if (this.nr)
                            for (var n, r = i(this.nr.slice(), !0); !(n = r()).done;)(0, n.value)(t)
                    }, n.getHandlerCount = function() {
                        var t, n;
                        return null !== (t = null === (n = this.nr) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0
                    }, t
                }(),
                Bi = "video-session-visible",
                Wi = "video-seconds-played",
                $i = ["video-ended", "video-pause", "video-play", "video-session", "video-session-visible", "video-seconds-played", "video-hosted-custom", "video-percentage-played", "video-ad-start", "video-ad-end"],
                Yi = /^vars(.+)/,
                zi = function() {},
                Ki = "amp-analytics/events",
                Ji = "click",
                Xi = "browser-event",
                Zi = "custom",
                Qi = "hidden",
                tr = "ini-load",
                nr = "render-start",
                ir = "scroll",
                rr = "story",
                er = "timer",
                ur = "video",
                sr = "visible",
                or = ["ampdoc", "embed"],
                ar = Object.freeze((Q(ki = {}, Ji, {
                    name: Ji,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new Er(t)
                    }
                }), Q(ki, Xi, {
                    name: Xi,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new mr(t)
                    }
                }), Q(ki, Zi, {
                    name: Zi,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new pr(t)
                    }
                }), Q(ki, Qi, {
                    name: sr,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new Or(t)
                    }
                }), Q(ki, tr, {
                    name: tr,
                    allowedFor: or.concat(["timer", "visible"]),
                    klass: function(t) {
                        return new yr(t)
                    }
                }), Q(ki, nr, {
                    name: nr,
                    allowedFor: or.concat(["timer", "visible"]),
                    klass: function(t) {
                        return new gr(t)
                    }
                }), Q(ki, ir, {
                    name: ir,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new Tr(t)
                    }
                }), Q(ki, rr, {
                    name: rr,
                    allowedFor: or,
                    klass: function(t) {
                        return new br(t)
                    }
                }), Q(ki, er, {
                    name: er,
                    allowedFor: or,
                    klass: function(t) {
                        return new Sr(t)
                    }
                }), Q(ki, ur, {
                    name: ur,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new Ar(t)
                    }
                }), Q(ki, sr, {
                    name: sr,
                    allowedFor: or.concat(["timer"]),
                    klass: function(t) {
                        return new Or(t)
                    }
                }), ki));

            function hr(t) {
                st(!d(t) || new Set(t).size === t.length, "Cannot have duplicate selectors in selectors list: %s", t)
            }

            function cr(t) {
                return t.startsWith("video") ? ur : "blur" === (n = t) || "change" === n ? Xi : t.startsWith("story") ? rr : function(t) {
                    return "click" === (n = t) || "browser-event" === n || "custom" === n || "hidden" === n || "ini-load" === n || "render-start" === n || "scroll" === n || "story" === n || "timer" === n || "video" === n || "visible" === n;
                    var n
                }(t) ? A(ar, t) ? ar[t].name : t : Zi;
                var n
            }

            function fr(t) {
                var n = {};
                return Object.keys(ar).forEach((function(i) {
                    A(ar, i) && -1 != ar[i].allowedFor.indexOf(t) && (n[i] = ar[i].klass)
                })), n
            }

            function lr(t, n) {
                var i = j(t, void 0, Yi);
                return O(i, n, 0), i
            }
            var vr = function(t, n) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    this.target = t, this.type = n, this.vars = r ? lr(t, i) : i
                },
                dr = function() {
                    function t(t) {
                        this.root = t
                    }
                    var n = t.prototype;
                    return n.dispose = function() {}, n.add = function(t, n, i, r) {}, t
                }(),
                mr = function(t) {
                    a(r, t);
                    var n = v(r);

                    function r(t) {
                        var i;
                        return (i = n.call(this, t)).ATt = new Gi, i.OTt = {}, i.NTt = i.ATt.fire.bind(i.ATt), i.ITt = function(t, n, i) {
                            var r = 0,
                                e = 0,
                                u = null;

                            function s() {
                                r = 0;
                                var i, o = 500 - (t.Date.now() - e);
                                o > 0 ? r = t.setTimeout(s, o) : (i = u, u = null, n.apply(null, i))
                            }
                            return function() {
                                e = t.Date.now();
                                for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++) i[o] = arguments[o];
                                u = i, r || (r = t.setTimeout(s, 500))
                            }
                        }(i.root.ampdoc.win, i.NTt), i
                    }
                    var e = r.prototype;
                    return e.dispose = function() {
                        var t = this,
                            n = this.root.getRoot();
                        Object.keys(this.OTt).forEach((function(i) {
                            n.removeEventListener(i, t.ITt)
                        })), this.NTt = null, this.ATt = null
                    }, e.add = function(t, n, r, e) {
                        var u;
                        st(("analytics-browser-events", u = function(t) {
                            var n, r, e, u, s;
                            if (t[$t]) return t[$t];
                            t[$t] = S();
                            var o = t[$t];
                            I(o);
                            var a = Wt(Wt({}, null !== (n = t.AMP_CONFIG) && void 0 !== n ? n : {}), null !== (r = t.AMP_EXP) && void 0 !== r ? r : _((null === (e = t.__AMP_EXP) || void 0 === e ? void 0 : e.textContent) || "{}"));
                            for (var h in a) {
                                var c = a[h];
                                "number" == typeof c && c >= 0 && c <= 1 && (o[h] = Math.random() < c)
                            }
                            var f = null === (u = t.AMP_CONFIG) || void 0 === u ? void 0 : u["allow-doc-opt-in"];
                            if (d(f) && f.length) {
                                var l = t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
                                if (l)
                                    for (var v, m, p = i((null === (v = l.getAttribute("content")) || void 0 === v ? void 0 : v.split(",")) || [], !0); !(m = p()).done;) {
                                        var b = m.value;
                                        f.includes(b) && (o[b] = !0)
                                    }
                            }
                            Object.assign(o, function(t) {
                                var n, r = "";
                                try {
                                    var e;
                                    "localStorage" in t && (r = null !== (e = t.localStorage.getItem("amp-experiment-toggles")) && void 0 !== e ? e : "")
                                } catch (t) {
                                    et().warn("EXPERIMENTS", "Failed to retrieve experiments from localStorage.")
                                }
                                for (var u, s = (null === (n = r) || void 0 === n ? void 0 : n.split(/\s*,\s*/g)) || [], o = S(), a = i(s, !0); !(u = a()).done;) {
                                    var h = u.value;
                                    h && ("-" == h[0] ? o[h.substr(1)] = !1 : o[h] = !0)
                                }
                                return o
                            }(t));
                            var E = null === (s = t.AMP_CONFIG) || void 0 === s ? void 0 : s["allow-url-opt-in"];
                            if (d(E) && E.length)
                                for (var T, g = $(t.location.originalHash || t.location.hash), y = i(E, !0); !(T = y()).done;) {
                                    var w = T.value,
                                        A = g["e-".concat(w)];
                                    "1" == A && (o[w] = !0), "0" == A && (o[w] = !1)
                                }
                            return o
                        }(this.root.ampdoc.win), !!u["analytics-browser-events"]), 'expected global "analytics-browser-events" experiment to be enabled');
                        var s = r.on,
                            o = r.selectionMethod,
                            a = void 0 === o ? null : o,
                            h = r.selector;
                        st(null == h ? void 0 : h.length, "Missing required selector on browser event trigger"), hr(h);
                        var c = this.root.getElements(t, h, a, !1);
                        return this.OTt[s] || (this.root.getRootElement().addEventListener(s, this.ITt, !0), this.OTt[s] = !0), this.ATt.add((function(t) {
                            t.type === s && c.then((function(n) {
                                n.forEach((function(n) {
                                    var i = t.target;
                                    n.contains(i) && e(new vr(n, s, {}))
                                }))
                            }))
                        }))
                    }, r
                }(dr),
                pr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).ATt = {}, i._Tt = {}, i.RTt = {}, setTimeout((function() {
                            i._Tt = void 0
                        }), 1e4), i
                    }
                    var r = i.prototype;
                    return r.dispose = function() {
                        for (var t in this._Tt = void 0, this.RTt = void 0, this.ATt) this.ATt[t].removeAll()
                    }, r.add = function(t, n, i, r) {
                        var e = this,
                            u = i.selector;
                        u || (u = ":root");
                        var s = i.selectionMethod || null,
                            o = this.root.getElement(t, u, s),
                            a = n.startsWith("sandbox-"),
                            h = a ? this.RTt && this.RTt[n] : this._Tt && this._Tt[n];
                        if (h) {
                            var c = h.length;
                            o.then((function(t) {
                                setTimeout((function() {
                                    for (var i = 0; i < c; i++) {
                                        var u = h[i];
                                        t.contains(u.target) && r(u)
                                    }
                                    a && (e.RTt[n] = void 0)
                                }), 1)
                            }))
                        }
                        var f = this.ATt[n];
                        return f || (f = new Gi, this.ATt[n] = f), this.ATt[n].add((function(t) {
                            o.then((function(n) {
                                n.contains(t.target) && r(t)
                            }))
                        }))
                    }, r.trigger = function(t) {
                        var n = t.type,
                            i = n.startsWith("sandbox-"),
                            r = this.ATt[n];
                        r && (r.fire(t), i) || (i ? (this.RTt[n] = this.RTt[n] || [], this.RTt[n].push(t)) : this._Tt && (this._Tt[n] = this._Tt[n] || [], this._Tt[n].push(t)))
                    }, i
                }(dr),
                br = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        return n.call(this, t)
                    }
                    var r = i.prototype;
                    return r.add = function(t, n, i, r) {
                        var e = this,
                            u = this.root.getRootElement(),
                            s = this._Tt && this._Tt[n];
                        if (s)
                            for (var o = s.length, a = 0; a < o; a++) {
                                var h = s[a];
                                this.PTt(h, u, i, r)
                            }
                        var c = this.ATt[n];
                        return c || (c = new Gi, this.ATt[n] = c), this.ATt[n].add((function(t) {
                            e.PTt(t, u, i, r)
                        }))
                    }, r.PTt = function(t, n, i, r) {
                        var e = t.type,
                            u = t.vars,
                            s = i.storySpec || {},
                            o = void 0 === s.repeat || s.repeat,
                            a = u.eventDetails,
                            h = i.tagName;
                        h && a.tagName && h.toLowerCase() !== a.tagName || !1 === o && a.repeated || r(new vr(n, e, u))
                    }, r.trigger = function(t) {
                        var n = t.type,
                            i = this.ATt[n];
                        i && i.fire(t), this._Tt && (this._Tt[n] = this._Tt[n] || [], this._Tt[n].push(t))
                    }, i
                }(pr),
                Er = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).CTt = new Gi, i.MTt = i.CTt.fire.bind(i.CTt), i.root.getRoot().addEventListener("click", i.MTt), i
                    }
                    var r = i.prototype;
                    return r.dispose = function() {
                        this.root.getRoot().removeEventListener("click", this.MTt), this.CTt.removeAll()
                    }, r.add = function(t, n, i, r) {
                        var e = st(i.selector, "Missing required selector on click trigger"),
                            u = i.selectionMethod || null;
                        return this.CTt.add(this.root.createSelectiveListener(this.Ju.bind(this, r), t.parentElement || t, e, u))
                    }, r.Ju = function(t, n, i) {
                        t(new vr(n, "click"))
                    }, i
                }(dr),
                Tr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).Vs = t, i.DTt = null, i
                    }
                    var r = i.prototype;
                    return r.dispose = function() {
                        null !== this.DTt && (this.Vs.getScrollManager().removeScrollHandler(this.DTt), this.DTt = null)
                    }, r.add = function(t, n, i, r) {
                        if (!i.scrollSpec) return it().error(Ki, "Missing scrollSpec on scroll trigger."), zi;
                        if (!Array.isArray(i.scrollSpec.verticalBoundaries) && !Array.isArray(i.scrollSpec.horizontalBoundaries)) return it().error(Ki, "Boundaries are required for the scroll trigger to work."), zi;
                        var e = this.LTt(i.scrollSpec.verticalBoundaries),
                            u = this.LTt(i.scrollSpec.horizontalBoundaries),
                            s = !!i.scrollSpec.useInitialPageSize;
                        return this.DTt = this.om.bind(this, u, e, s, r), this.Vs.getScrollManager().addScrollHandler(this.DTt)
                    }, r.om = function(t, n, i, r, e) {
                        var u = i ? e.initialSize : e,
                            s = u.scrollHeight,
                            o = u.scrollWidth;
                        this.kTt(n, 100 * (e.top + e.height) / s, "verticalScrollBoundary", r), this.kTt(t, 100 * (e.left + e.width) / o, "horizontalScrollBoundary", r)
                    }, r.LTt = function(t) {
                        var n = {};
                        if (!t || !Array.isArray(t)) return n;
                        for (var i = 0; i < t.length; i++) {
                            var r = t[i];
                            if ("number" != typeof r || !isFinite(r)) return it().error(Ki, "Scroll trigger boundaries must be finite."), n;
                            n[r = Math.min(5 * Math.round(r / 5), 100)] = !1
                        }
                        return n
                    }, r.kTt = function(t, n, i, r) {
                        if (n)
                            for (var e in t)
                                if (A(t, e)) {
                                    var u = parseInt(e, 10);
                                    if (!(u > n || t[u])) {
                                        t[u] = !0;
                                        var s = {};
                                        s[i] = e, r(new vr(this.Vs.getRootElement(), ir, s, !1))
                                    }
                                }
                    }, i
                }(dr),
                gr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        return n.call(this, t)
                    }
                    var r = i.prototype;
                    return r.dispose = function() {}, r.add = function(t, n, i, r) {
                        var e, u, s = this,
                            o = i.selector || ":root";
                        if (":root" == o || ":host" == o) e = this.root.getRootElement(), u = this.getRootSignal(n);
                        else {
                            var a = i.selectionMethod;
                            u = this.root.getAmpElement(t.parentElement || t, o, a).then((function(t) {
                                return e = t, s.getElementSignal(n, e)
                            }))
                        }
                        return u.then((function() {
                            r(new vr(e, n))
                        })), zi
                    }, r.getRootSignal = function(t) {
                        return this.root.signals().whenSignal(t)
                    }, r.getElementSignal = function(t, n) {
                        return "function" != typeof n.signals ? e() : n.signals().whenSignal(t)
                    }, i
                }(dr),
                yr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        return n.call(this, t)
                    }
                    var r = i.prototype;
                    return r.dispose = function() {}, r.add = function(t, n, i, r) {
                        var e, u, s = this,
                            o = i.selector || ":root";
                        if (":root" == o || ":host" == o) e = this.root.getRootElement(), u = this.getRootSignal();
                        else {
                            var a = i.selectionMethod;
                            u = this.root.getAmpElement(t.parentElement || t, o, a).then((function(t) {
                                return e = t, s.getElementSignal("ini-load", e)
                            }))
                        }
                        return u.then((function() {
                            r(new vr(e, n))
                        })), zi
                    }, r.getRootSignal = function() {
                        return this.root.whenIniLoaded()
                    }, r.getElementSignal = function(t, n) {
                        if ("function" != typeof n.signals) return e();
                        var i = n.signals();
                        return Promise.race([i.whenSignal("ini-load"), i.whenSignal("load-end")])
                    }, i
                }(dr),
                wr = function() {
                    function t(t, n, i) {
                        this.xTt = void 0, st("interval" in t, "Timer interval specification required"), this.UTt = Number(t.interval) || 0, st(this.UTt >= .5, "Bad timer interval specification"), this.jTt = "maxTimerLength" in t ? Number(t.maxTimerLength) : 7200, st(this.jTt > 0, "Bad maxTimerLength specification"), this.HTt = "maxTimerLength" in t, this.FTt = !("immediate" in t) || Boolean(t.immediate), this.VTt = null, this.qTt = null, this.GTt = null, this.BTt = n || null, this.WTt = i || null, this.oc = void 0, this.$Tt = void 0
                    }
                    var n = t.prototype;
                    return n.init = function(t) {
                        this.BTt ? this.YTt() : t()
                    }, n.dispose = function() {
                        this.zTt(), this.KTt()
                    }, n.YTt = function() {
                        this.BTt && (this.qTt = this.BTt())
                    }, n.KTt = function() {
                        this.qTt && (this.qTt(), this.qTt = null)
                    }, n.JTt = function() {
                        if (this.WTt) try {
                            this.GTt = this.WTt()
                        } catch (t) {
                            throw this.dispose(), t
                        }
                    }, n.zTt = function() {
                        this.GTt && (this.GTt(), this.GTt = null)
                    }, n.isRunning = function() {
                        return !!this.xTt
                    }, n.startIntervalInWindow = function(t, n, i) {
                        this.isRunning() || (this.oc = Date.now(), this.$Tt = void 0, this.VTt = n, this.xTt = t.setInterval((function() {
                            n()
                        }), 1e3 * this.UTt), (!this.WTt || this.WTt && this.HTt) && t.setTimeout((function() {
                            i()
                        }), 1e3 * this.jTt), this.KTt(), this.FTt && n(), this.JTt())
                    }, n.XTt = function(t) {
                        this.isRunning() && (this.VTt(), this.VTt = null, t.clearInterval(this.xTt), this.xTt = void 0, this.$Tt = void 0, this.zTt(), this.YTt())
                    }, n.ZTt = function() {
                        return this.oc ? Date.now() - (this.$Tt || this.oc) : 0
                    }, n.getTimerVars = function() {
                        var t = 0;
                        return this.isRunning() && (t = this.ZTt(), this.$Tt = Date.now()), {
                            "timerDuration": t,
                            "timerStart": this.oc || 0
                        }
                    }, t
                }(),
                Sr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).QTt = {}, i.tSt = 1, i
                    }
                    var r = i.prototype;
                    return r.getTrackedTimerKeys = function() {
                        return Object.keys(this.QTt)
                    }, r.dispose = function() {
                        var t = this;
                        this.getTrackedTimerKeys().forEach((function(n) {
                            t.nSt(n)
                        }))
                    }, r.add = function(t, n, i, r) {
                        var e = this,
                            u = i.timerSpec;
                        st(u && "object" == c(u), "Bad timer specification");
                        var s = "startSpec" in u ? u.startSpec : null;
                        st(!s || "object" == c(s), "Bad timer start specification");
                        var o = "stopSpec" in u ? u.stopSpec : null;
                        st(!s && !o || "object" == c(o), "Bad timer stop specification");
                        var a, h, f = this.iSt();
                        if (s) {
                            var l = this.rSt(s);
                            st(l, "Cannot track timer start"), a = l.add.bind(l, t, s.on, s, this.eSt.bind(this, f, n, r))
                        }
                        if (o) {
                            var v = this.rSt(o);
                            st(v, "Cannot track timer stop"), h = v.add.bind(v, t, o.on, o, this.eSt.bind(this, f, n, r))
                        }
                        var d = new wr(u, a, h);
                        return this.QTt[f] = d, d.init(this.uSt.bind(this, f, n, r)),
                            function() {
                                e.nSt(f)
                            }
                    }, r.iSt = function() {
                        return ++this.tSt
                    }, r.rSt = function(t) {
                        var n = cr(it().assertString(t.on));
                        return this.root.getTrackerForAllowlist(n, fr("timer"))
                    }, r.eSt = function(t, n, i) {
                        var r = this.QTt[t];
                        r && (r.isRunning() ? this.XTt(t) : this.uSt(t, n, i))
                    }, r.uSt = function(t, n, i) {
                        var r = this;
                        this.QTt[t].startIntervalInWindow(this.root.ampdoc.win, (function() {
                            i(r.sSt(t, n))
                        }), this.nSt.bind(this, t))
                    }, r.XTt = function(t) {
                        this.QTt[t].XTt(this.root.ampdoc.win)
                    }, r.sSt = function(t, n) {
                        return new vr(this.root.getRootElement(), n, this.QTt[t].getTimerVars(), !1)
                    }, r.nSt = function(t) {
                        this.QTt[t] && (this.XTt(t), this.QTt[t].dispose(), delete this.QTt[t])
                    }, i
                }(dr),
                Ar = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).oSt = new Gi, i.NTt = i.oSt.fire.bind(i.oSt), $i.forEach((function(t) {
                            i.root.getRoot().addEventListener(t, i.NTt)
                        })), i
                    }
                    var r = i.prototype;
                    return r.dispose = function() {
                        var t = this,
                            n = this.root.getRoot();
                        $i.forEach((function(i) {
                            n.removeEventListener(i, t.NTt)
                        })), this.NTt = null, this.oSt = null
                    }, r.add = function(t, n, i, r) {
                        var e = i.videoSpec || {},
                            u = st(i.selector || e.selector, "Missing required selector on video trigger");
                        st(u.length, "Missing required selector on video trigger"), hr(u);
                        var s = i.selectionMethod || null,
                            o = this.root.getElements(t, u, s, !1),
                            a = e["end-session-when-invisible"],
                            h = e["exclude-autoplay"],
                            c = e.interval,
                            f = e.percentages,
                            l = i.on,
                            v = 0,
                            d = 0;
                        return this.oSt.add((function(t) {
                            var n = t.type,
                                i = kt(t),
                                e = function(t, n) {
                                    return t == Bi ? "video-session" : "video-hosted-custom" == t ? n["__amp:eventType"] : t
                                }(n, i);
                            if (e === l)
                                if (e !== Wi || c) {
                                    if (e !== Wi || ++v % c == 0) {
                                        if ("video-percentage-played" === e) {
                                            if (!f) return void it().error(Ki, "video-percentage-played requires percentages spec.");
                                            for (var u = 0; u < f.length; u++) {
                                                var s = f[u];
                                                if (s <= 0 || s % 5 != 0) return void it().error(Ki, "Percentages must be set in increments of %s with non-zero values", 5)
                                            }
                                            var m = i.normalizedPercentage,
                                                p = parseInt(m, 10);
                                            if (ut(N(p)), ut(p % 5 == 0), d == p && f.length > 1) return;
                                            if (f.indexOf(p) < 0) return;
                                            d = p
                                        }
                                        if ((n !== Bi || a) && (!h || "playing_auto" !== i.state)) {
                                            var b = t.target;
                                            o.then((function(t) {
                                                t.forEach((function(t) {
                                                    if (t.contains(b)) {
                                                        var n = function(t) {
                                                            if (!t) return {};
                                                            var n = Wt({}, t);
                                                            return delete n["__amp:eventType"], n
                                                        }(i);
                                                        r(new vr(t, e, n))
                                                    }
                                                }))
                                            }))
                                        }
                                    }
                                } else it().error(Ki, "video-seconds-played requires interval spec with non-zero value")
                        }))
                    }, i
                }(dr),
                Or = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).aSt = {}, i
                    }
                    var r = i.prototype;
                    return r.dispose = function() {}, r.add = function(t, n, i, r) {
                        var e = this,
                            u = i.visibilitySpec || {},
                            s = i.selector || u.selector,
                            o = u.waitFor,
                            a = u.reportWhen,
                            h = null;
                        a && st(!u.repeat, "reportWhen and repeat are mutually exclusive."), n === Qi && (a && it().error(Ki, 'ReportWhen should not be defined when eventType is "hidden"'), a = "documentHidden");
                        var c = this.root.getVisibilityManager();
                        if ("documentHidden" == a ? h = this.hSt.bind(this) : "documentExit" == a ? h = this.cSt.bind(this) : st(!a, 'reportWhen value "%s" not supported.', a), !s || ":root" == s || ":host" == s) {
                            var f = o || (s ? "ini-load" : "none");
                            return c.listenRoot(u, this.getReadyPromise(f), h, this.fSt.bind(this, n, r, this.root.getRootElement()))
                        }
                        var l = i.selectionMethod || u.selectionMethod;
                        hr(s);
                        var v = this.root.getElements(t.parentElement || t, s, l).then((function(t) {
                            for (var i = [], s = 0; s < t.length; s++) i.push(c.listenElement(t[s], u, e.getReadyPromise(o, t[s]), h, e.fSt.bind(e, n, r, t[s])));
                            return i
                        }));
                        return function() {
                            v.then((function(t) {
                                for (var n = 0; n < t.length; n++) t[n]()
                            }))
                        }
                    }, r.hSt = function() {
                        var t = this.root.ampdoc;
                        return t.isVisible() ? new Promise((function(n) {
                            t.onVisibilityChanged((function() {
                                t.isVisible() || n()
                            }))
                        })) : e()
                    }, r.cSt = function() {
                        var t, n, i = new u,
                            r = this.root.ampdoc.win;
                        return this.lSt() || r.addEventListener("unload", t = function() {
                            r.removeEventListener("unload", t), i.resolve()
                        }), r.addEventListener("pagehide", n = function() {
                            r.removeEventListener("pagehide", n), i.resolve()
                        }), i.promise
                    }, r.lSt = function() {
                        return "onpagehide" in this.root.ampdoc.win
                    }, r.getReadyPromise = function(t, n) {
                        var i;
                        if (n && ((i = n.tagName).startsWith("AMP-") && "AMP-STICKY-AD-TOP-PADDING" != i && "AMP-BODY" != i ? t = t || "ini-load" : st(!t || "none" == t, "waitFor for non-AMP elements must be none or null. Found %s", t)), !t || "none" == t) return null;
                        var r = fr("visible");
                        st(void 0 !== r[t], "waitFor value %s not supported", t);
                        var e = this.aSt[t] || this.root.getTrackerForAllowlist(t, r);
                        return e ? (this.aSt[t] = e, n ? e.getElementSignal(t, n) : e.getRootSignal(t)) : null
                    }, r.fSt = function(t, n, i, r) {
                        var e = j(i, void 0, Yi);
                        for (var u in e) r[u] = e[u];
                        n(new vr(i, t, r, !1))
                    }, i
                }(dr),
                Nr = function() {
                    function t(t, n) {
                        this.Vs = t, this.vSt = n, this._r = [], this.dSt = 0, this.t = P(n)
                    }
                    var n = t.prototype;
                    return n.dispose = function() {
                        this._r.forEach((function(t) {
                            t()
                        }))
                    }, n.addTrigger = function(t, n) {
                        var i, r = this,
                            e = t.on,
                            s = cr(e),
                            o = fr(this.Vs.getType()),
                            a = this.Vs.getTrackerForAllowlist(s, o);
                        st(!!a, 'Trigger type "%s" is not allowed in the %s', e, this.Vs.getType());
                        var h = new u,
                            c = function() {
                                i = a.add(r.vSt, e, t, n), r._r.push(i), h.resolve()
                            };
                        if (this.dSt < 1 || "inabox" == K(this.t).runtime) c();
                        else {
                            var f = this.dSt < 3 ? 20 : 10;
                            Li(this.vSt, c, f)
                        }
                        return this.dSt++, h.promise
                    }, t
                }(),
                Ir = "inside";

            function _r(t, n, i, r) {
                return {
                    left: t,
                    top: n,
                    width: i,
                    height: r,
                    bottom: n + r,
                    right: t + i,
                    x: t,
                    y: n
                }
            }

            function Rr(t, n, i) {
                var r, e, u, s = (r = {
                    top: i,
                    bottom: i + n.getHeight(),
                    left: 0,
                    right: n.getWidth()
                }, _r(Number(r.left), Number(r.top), Number(r.width), Number(r.height)));
                return u = s, (e = t).top <= u.bottom && u.top <= e.bottom && e.left <= u.right && u.left <= e.right ? Ir : function(t, n) {
                    return t.top < n.top ? "top" : t.bottom > n.bottom ? "bottom" : Ir
                }(t, s)
            }
            var Pr = function() {
                function t(t) {
                    this.Pu = Ct(t.ampdoc), this.Aa = at(t.ampdoc, "mutator"), this.mSt = null, this.Sf = new Gi, this.Vs = t.getRootElement(), this.pSt = null
                }
                var n = t.prototype;
                return n.dispose = function() {
                    this.Sf.removeAll(), this.bSt()
                }, n.removeScrollHandler = function(t) {
                    this.Sf.remove(t), this.Sf.getHandlerCount() <= 0 && this.bSt()
                }, n.addScrollHandler = function(t) {
                    var n = this,
                        i = this.Pu.getSize();
                    return this.ESt().then((function(r) {
                        var e = r.height,
                            u = r.left,
                            s = r.top,
                            o = r.width,
                            a = {
                                top: n.Pu.getScrollTop() - s,
                                left: n.Pu.getScrollLeft() - u,
                                width: i.width,
                                height: i.height,
                                scrollHeight: e,
                                scrollWidth: o,
                                initialSize: {
                                    scrollHeight: e,
                                    scrollWidth: o
                                }
                            };
                        t(a)
                    })), 0 === this.Sf.getHandlerCount() && this.TSt(), this.Sf.add(t)
                }, n.NF = function(t) {
                    var n = this;
                    return Promise.all([this.ESt(), this.gSt()]).then((function(i) {
                        var r = i[0],
                            e = r.height,
                            u = r.width,
                            s = i[1],
                            o = s.height,
                            a = s.left,
                            h = s.top,
                            c = s.width,
                            f = {
                                top: t.top - h,
                                left: t.left - a,
                                width: t.width,
                                height: t.height,
                                scrollWidth: c,
                                scrollHeight: o,
                                initialSize: {
                                    scrollHeight: e,
                                    scrollWidth: u
                                }
                            };
                        n.Sf.fire(f)
                    }))
                }, n.bSt = function() {
                    this.mSt && (this.mSt(), this.mSt = null)
                }, n.TSt = function() {
                    this.mSt = this.Pu.onChanged(this.NF.bind(this))
                }, n.ESt = function() {
                    return ut(this.pSt || this.gSt())
                }, n.gSt = function() {
                    var t = this,
                        n = this.Aa.measureElement((function() {
                            return t.Pu.getLayoutRect(t.Vs)
                        }));
                    return this.pSt = this.pSt || n, n
                }, t
            }();

            function Cr(t) {
                var n = function(t) {
                    var n = [];
                    if (!t) return n;
                    var i, r = t;
                    n.push(r);
                    for (var e = 0; e < 50; e++)
                        if ((i = r.parentNode || r.parentElement) && 1 == i.nodeType) r = i, n.push(r);
                        else {
                            if (!i || 9 != i.nodeType) break;
                            if (!(i = r.ownerDocument.defaultView.frameElement) || 1 != i.nodeType) break;
                            r = i, n.push(r)
                        }
                    return n
                }(t.parentElement);
                n.push(t);
                for (var i, r = 1, e = 0; e < n.length; e++)
                    if ((i = Mr(n[e])) < r && (r = i), 0 === r) return r;
                return r
            }

            function Mr(t) {
                var n = window;
                if (!t) return 1;
                var i = function(t, n) {
                        return t.getComputedStyle(n) || On
                    }(n, t),
                    r = i.opacity;
                if ("hidden" === i.visibility) return 0;
                var e = "" === r ? 1 : parseFloat(r);
                return isNaN(e) ? 1 : e
            }
            var Dr = function() {
                function t(t, n) {
                    var i = this;
                    this.ySt = n, this.wSt = {
                        "visiblePercentageMin": Number(t.visiblePercentageMin) / 100 || 0,
                        "visiblePercentageMax": Number(t.visiblePercentageMax) / 100 || 1,
                        "totalTimeMin": Number(t.totalTimeMin) || 0,
                        "totalTimeMax": Number(t.totalTimeMax) || 1 / 0,
                        "continuousTimeMin": Number(t.continuousTimeMin) || 0,
                        "continuousTimeMax": Number(t.continuousTimeMax) || 1 / 0
                    }, "0" === String(t.visiblePercentageMax).trim() && (this.wSt.visiblePercentageMax = 0), this.SSt = void 0 !== t.reportWhen, this.ASt = !0 === t.repeat, this.OSt = new Gi;
                    var r = new u;
                    this.NSt = r.promise, this.ISt = r.resolve, this.NSt.then((function() {
                        i.OSt.fire()
                    })), this._St = [], this.RSt = Date.now(), this.wi = !0, this.PSt = !0, this.CSt = null, this.MSt = null, this.DSt = !1, this.LSt = !1, this.kSt = 0, this.xSt = 0, this.USt = 0, this.jSt = 0, this.HSt = 0, this.kh = 0, this.fi = 0, this.FSt = 0, this.VSt = 0, this.qSt = 0, this.GSt = 0, this.BSt = 0, this.WSt = !1, this.$St = !1, this.YSt = null
                }
                var n = t.prototype;
                return n.os = function() {
                    var t = this;
                    ut(!this.ISt);
                    var n = new u;
                    this.NSt = n.promise, this.ISt = n.resolve, this.NSt.then((function() {
                        t.OSt.fire()
                    })), this.YSt = null, this.LSt = !1, this.DSt = !1, this.kSt = 0, this.xSt = 0, this.USt = 0, this.kh = 0, this.jSt = 0, this.HSt = 0, this.fi = 0, this.VSt = 0, this.qSt = 0, this.GSt = 0, this.$St = !1
                }, n.maybeDispose = function() {
                    this.ASt || this.dispose()
                }, n.dispose = function() {
                    this.MSt && (clearTimeout(this.MSt), this.MSt = null), this.YSt && (clearTimeout(this.YSt), this.YSt = null), this._St.forEach((function(t) {
                        t()
                    })), this._St.length = 0, this.ISt = null, this.OSt && (this.OSt.removeAll(), this.OSt = null)
                }, n.unsubscribe = function(t) {
                    this._St.push(t)
                }, n.onTriggerEvent = function(t) {
                    this.OSt && this.OSt.add(t), this.NSt && !this.ISt && t()
                }, n.setReady = function(t) {
                    this.wi = t, this.update()
                }, n.setReportReady = function(t) {
                    this.PSt = !1, this.CSt = t
                }, n.zSt = function() {
                    return this.wi ? this.ySt() : 0
                }, n.update = function() {
                    this.Sn(this.zSt())
                }, n.getState = function(t) {
                    return {
                        "firstSeenTime": Lr(this.jSt, t),
                        "lastSeenTime": Lr(this.HSt, t),
                        "lastVisibleTime": Lr(this.fi, t),
                        "firstVisibleTime": Lr(this.kh, t),
                        "maxContinuousVisibleTime": this.xSt,
                        "totalVisibleTime": this.USt,
                        "loadTimeVisibility": 100 * this.FSt || 0,
                        "minVisiblePercentage": 100 * this.VSt,
                        "maxVisiblePercentage": 100 * this.qSt
                    }
                }, n.Sn = function(t) {
                    var n = this;
                    if (this.$St) this.KSt(t) || this.os();
                    else if (this.ISt)
                        if (this.JSt(t) || this.SSt) {
                            if (this.MSt && (clearTimeout(this.MSt), this.MSt = null), this.PSt) this.ISt(), this.ISt = null, this.ASt && (this.$St = !0, this.kSt = 0);
                            else if (this.CSt) {
                                var i = this.CSt();
                                this.CSt = null, i.then((function() {
                                    n.PSt = !0, n.update()
                                }))
                            }
                        } else if (this.DSt && !this.MSt) {
                        var r = this.XSt();
                        r > 0 && (this.MSt = setTimeout((function() {
                            n.MSt = null, n.update()
                        }), r))
                    } else !this.DSt && this.MSt && (clearTimeout(this.MSt), this.MSt = null)
                }, n.KSt = function(t) {
                    return ut(t >= 0 && t <= 1), 1 == this.wSt.visiblePercentageMin ? 1 == t : 0 == this.wSt.visiblePercentageMax ? 0 == t : t > this.wSt.visiblePercentageMin && t <= this.wSt.visiblePercentageMax
                }, n.JSt = function(t) {
                    ut(t >= 0 && t <= 1);
                    var n = Date.now();
                    t > 0 && (this.jSt = this.jSt || n, this.HSt = n, !this.FSt && n - this.RSt < 300 && (this.FSt = t));
                    var i = this.DSt,
                        r = this.GSt ? n - this.GSt : 0;
                    return this.DSt = this.KSt(t), this.DSt ? (this.LSt = !0, i ? (this.USt += r, this.kSt += r, this.xSt = Math.max(this.xSt, this.kSt)) : (ut(!this.GSt), this.kh = this.kh || n), this.GSt = n, this.VSt = this.VSt > 0 ? Math.min(this.VSt, t) : t, this.qSt = Math.max(this.qSt, t), this.fi = n) : i && (ut(this.GSt > 0), this.xSt = Math.max(this.xSt, this.kSt + r), this.GSt = 0, this.USt += r, this.kSt = 0, this.fi = n), this.LSt && this.USt >= this.wSt.totalTimeMin && this.USt <= this.wSt.totalTimeMax && this.xSt >= this.wSt.continuousTimeMin && this.xSt <= this.wSt.continuousTimeMax
                }, n.maybeSetInitialScrollDepth = function(t) {
                    this.WSt || (this.BSt = t, this.WSt = !0)
                }, n.getInitialScrollDepth = function() {
                    return this.BSt
                }, n.XSt = function() {
                    var t = Math.max(this.wSt.continuousTimeMin - this.kSt, 0),
                        n = Math.max(this.wSt.totalTimeMin - this.USt, 0),
                        i = Math.max(t, n);
                    return Math.min(i, t || 1 / 0, n || 1 / 0)
                }, t
            }();

            function Lr(t, n) {
                return t >= n ? t - n : 0
            }
            var kr = "amp-analytics/visibility-manager",
                xr = "__AMP_VIS",
                Ur = [0, .05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1],
                jr = 1;

            function Hr(t) {
                var n = t.__AMP_VIS_ID;
                return n || (n = ++jr, t.__AMP_VIS_ID = n), n
            }

            function Fr(t) {
                return t[xr] || (t[xr] = function(t) {
                    var n = St(t),
                        i = vt(t),
                        r = i && kn(i),
                        e = i && function(t) {
                            if (Node.prototype.getRootNode) return t.getRootNode();
                            var n, i;
                            for (n = t; n.parentNode && (!(i = n) || "I-AMPHTML-SHADOW-ROOT" != i.tagName && (11 != i.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(i))); n = n.parentNode);
                            return n
                        }(i);
                    return r && e ? new Gr(Fr(e), r) : new qr(n)
                }(t)), t[xr]
            }
            var Vr = function() {
                    function t(t, n) {
                        var i = this;
                        this.parent = t, this.ampdoc = n, this.ZSt = 0, this.QSt = [], this.xZ = null, this._St = [], this.tAt = 0, this.parent && this.parent.nAt(this);
                        var r = Ct(this.ampdoc);
                        r.onChanged((function() {
                            i.maybeUpdateMaxScrollDepth(r.getScrollTop())
                        }))
                    }
                    var n = t.prototype;
                    return n.nAt = function(t) {
                        this.xZ || (this.xZ = []), this.xZ.push(t)
                    }, n.iAt = function(t) {
                        if (this.xZ) {
                            var n = this.xZ.indexOf(t); - 1 != n && this.xZ.splice(n, 1)
                        }
                    }, n.dispose = function() {
                        this.setRootVisibility(0);
                        for (var t = this.QSt.length - 1; t >= 0; t--) this.QSt[t].dispose();
                        if (this._St.forEach((function(t) {
                                t()
                            })), this._St.length = 0, this.parent && this.parent.iAt(this), this.xZ)
                            for (var n = 0; n < this.xZ.length; n++) this.xZ[n].dispose()
                    }, n.unsubscribe = function(t) {
                        this._St.push(t)
                    }, n.getStartTime = function() {}, n.isBackgrounded = function() {}, n.isBackgroundedAtStart = function() {}, n.getRootMinOpacity = function() {}, n.getRootLayoutBox = function() {}, n.getRootVisibility = function() {
                        return this.parent ? this.parent.getRootVisibility() > 0 ? this.ZSt : 0 : this.ZSt
                    }, n.setRootVisibility = function(t) {
                        if (this.ZSt = t, this.rAt(), this.xZ)
                            for (var n = 0; n < this.xZ.length; n++) this.xZ[n].rAt()
                    }, n.maybeUpdateMaxScrollDepth = function(t) {
                        t > this.tAt && (this.tAt = t)
                    }, n.getMaxScrollDepth = function() {
                        return this.tAt
                    }, n.rAt = function() {
                        for (var t = 0; t < this.QSt.length; t++) this.QSt[t].update()
                    }, n.listenRoot = function(t, n, i, r) {
                        var e = this.getRootVisibility.bind(this);
                        return this.eAt(e, t, n, i, r)
                    }, n.listenElement = function(t, n, i, r, e) {
                        var u = this.getElementVisibility.bind(this, t);
                        return this.eAt(u, n, i, r, e, t)
                    }, n.eAt = function(t, n, i, r, e, u) {
                        if (n.visiblePercentageThresholds && null == n.visiblePercentageMin && null == n.visiblePercentageMax) {
                            var s = [],
                                o = n.visiblePercentageThresholds;
                            if (!o || !d(o)) return it().error(kr, "invalid visiblePercentageThresholds"),
                                function() {};
                            for (var a = 0; a < o.length; a++) {
                                var h = o[a];
                                if (d(h) && 2 == h.length)
                                    if (N(h[0]) && N(h[1])) {
                                        var c = Number(h[0]),
                                            f = Number(h[1]);
                                        if (c < 0 || f > 100 || c > f || c == f && 100 != c && 0 != f) it().error(kr, "visiblePercentageThresholds entry invalid min/max value");
                                        else {
                                            var l = n;
                                            l.visiblePercentageMin = c, l.visiblePercentageMax = f;
                                            var v = new Dr(l, t, Ct(this.ampdoc));
                                            s.push(this.NT(v, n, i, r, e, u))
                                        }
                                    } else it().error(kr, "visiblePercentageThresholds entry is not valid number");
                                else it().error(kr, "visiblePercentageThresholds entry length is not 2")
                            }
                            return function() {
                                s.forEach((function(t) {
                                    return t()
                                }))
                            }
                        }
                        var m = new Dr(n, t, Ct(this.ampdoc));
                        return this.NT(m, n, i, r, e, u)
                    }, n.NT = function(t, n, i, r, e, u) {
                        var s = this;
                        r && t.setReportReady(r);
                        var o = Ct(this.ampdoc),
                            a = o.getScrollTop();
                        return this.maybeUpdateMaxScrollDepth(a), i ? (t.setReady(!1), i.then((function() {
                                t.setReady(!0), t.maybeSetInitialScrollDepth(a)
                            }))) : t.maybeSetInitialScrollDepth(a), t.onTriggerEvent((function() {
                                var n, i = s.getStartTime(),
                                    r = t.getState(i);
                                if (r.backgrounded = s.isBackgrounded() ? 1 : 0, r.backgroundedAtStart = s.isBackgroundedAtStart() ? 1 : 0, r.totalTime = Date.now() - i, u) {
                                    r.elementId = u.id, r.opacity = Cr(u), n = o.getLayoutRect(u);
                                    var a = s.getElementVisibility(u),
                                        h = s.getElementIntersectionRect(u);
                                    Object.assign(r, {
                                        "intersectionRatio": a,
                                        "intersectionRect": JSON.stringify(h)
                                    })
                                } else r.opacity = s.getRootMinOpacity(), r.intersectionRatio = s.getRootVisibility(), n = s.getRootLayoutBox();
                                t.maybeDispose(), n && (Object.assign(r, {
                                    "elementX": n.left,
                                    "elementY": n.top,
                                    "elementWidth": n.width,
                                    "elementHeight": n.height
                                }), r.initialScrollDepth = Rr(n, o, t.getInitialScrollDepth()), r.maxScrollDepth = Rr(n, o, s.getMaxScrollDepth())), e(r)
                            })), this.QSt.push(t), t.unsubscribe((function() {
                                var n = s.QSt.indexOf(t); - 1 != n && s.QSt.splice(n, 1)
                            })), u && t.unsubscribe(this.observe(u, (function() {
                                return t.update()
                            }))), t.update(),
                            function() {
                                t.dispose()
                            }
                    }, n.observe = function(t, n) {}, n.getElementVisibility = function(t) {}, n.getElementIntersectionRect = function(t) {}, t
                }(),
                qr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        if ((i = n.call(this, null, t)).Pu = Ct(t), i.uAt = !t.isVisible(), i.sAt = i.isBackgrounded(), i.oAt = S(), i.gO = null, "inabox" == K(i.ampdoc.win).runtime) {
                            var r = i.ampdoc.getRootNode(),
                                e = r.documentElement || r.body || r;
                            i.unsubscribe(i.observe(e, i.setRootVisibility.bind(f(i))));
                            var u = function() {
                                var t = Hr(e),
                                    n = i.oAt[t];
                                n && (i.ampdoc.win.innerHeight < 1 || i.ampdoc.win.innerWidth < 1 ? n.isVisible = !1 : n.isVisible = !0, i.setRootVisibility(n.isVisible ? n.intersectionRatio : 0))
                            };
                            i.ampdoc.win.addEventListener("resize", u), i.unsubscribe((function() {
                                i.ampdoc.win.removeEventListener("resize", u)
                            }))
                        } else i.setRootVisibility(i.ampdoc.isVisible() ? 1 : 0), i.unsubscribe(i.ampdoc.onVisibilityChanged((function() {
                            var t = i.ampdoc.isVisible();
                            t || (i.uAt = !0), i.setRootVisibility(t ? 1 : 0)
                        })));
                        return i
                    }
                    var r = i.prototype;
                    return r.dispose = function() {
                        t.prototype.dispose.call(this), this.gO && (this.gO.disconnect(), this.gO = null)
                    }, r.getStartTime = function() {
                        return this.ampdoc.getFirstVisibleTime()
                    }, r.isBackgrounded = function() {
                        return this.uAt
                    }, r.isBackgroundedAtStart = function() {
                        return this.sAt
                    }, r.getRootMinOpacity = function() {
                        var t = this.ampdoc.getRootNode();
                        return Cr(t.documentElement || t.body || t)
                    }, r.getRootLayoutBox = function() {
                        var t = this.ampdoc.getRootNode(),
                            n = t.documentElement || t.body || t;
                        return this.Pu.getLayoutRect(n)
                    }, r.observe = function(t, n) {
                        var i = this,
                            r = Hr(t),
                            e = this.oAt[r];
                        return e ? e.intersectionRatio > 0 && e.isVisible && n(e.intersectionRatio) : (e = {
                                element: t,
                                intersectionRatio: 0,
                                intersectionRect: null,
                                isVisible: !1,
                                boundingClientRect: null,
                                listeners: []
                            }, this.oAt[r] = e), e.listeners.push(n), this.aAt().observe(t),
                            function() {
                                var e = i.oAt[r];
                                if (e) {
                                    var u = e.listeners.indexOf(n); - 1 != u && e.listeners.splice(u, 1), 0 == e.listeners.length && (i.gO.unobserve(t), delete i.oAt[r])
                                }
                            }
                    }, r.getElementVisibility = function(t) {
                        if (0 == this.getRootVisibility()) return 0;
                        var n = Hr(t),
                            i = this.oAt[n];
                        return i && i.isVisible && i.intersectionRatio || 0
                    }, r.getElementIntersectionRect = function(t) {
                        if (this.getElementVisibility(t) <= 0) return null;
                        var n = Hr(t),
                            i = this.oAt[n];
                        return i ? i.intersectionRect : null
                    }, r.aAt = function() {
                        if (!this.gO) {
                            var t = this.ampdoc.win;
                            this.gO = new t.IntersectionObserver(this.hAt.bind(this), {
                                threshold: Ur
                            })
                        }
                        return this.gO
                    }, r.hAt = function(t) {
                        var n = this;
                        t.forEach((function(t) {
                            var i = t.intersectionRect;
                            i = _r(Number(i.left), Number(i.top), Number(i.width), Number(i.height));
                            var r = t.boundingClientRect;
                            r = r && _r(Number(r.left), Number(r.top), Number(r.width), Number(r.height)), n.cAt(t.target, t.intersectionRatio, i, r)
                        }))
                    }, r.cAt = function(t, n, i, r) {
                        n = Math.min(Math.max(n, 0), 1);
                        var e = Hr(t),
                            u = this.oAt[e],
                            s = !0;
                        if ((r.width < 1 || r.height < 1) && (s = !1), u) {
                            u.isVisible = s, u.intersectionRatio = n, u.intersectionRect = i, u.boundingClientRect = r;
                            for (var o = 0; o < u.listeners.length; o++) u.listeners[o](u.isVisible ? n : 0)
                        }
                    }, i
                }(Vr),
                Gr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t, i) {
                        var r;
                        return (r = n.call(this, t, t.ampdoc)).embed = i, r.sAt = r.parent.isBackgrounded(), r.unsubscribe(r.parent.observe(i.host, r.setRootVisibility.bind(f(r)))), r
                    }
                    var r = i.prototype;
                    return r.getStartTime = function() {
                        return this.embed.getStartTime()
                    }, r.isBackgrounded = function() {
                        return this.parent.isBackgrounded()
                    }, r.isBackgroundedAtStart = function() {
                        return this.sAt
                    }, r.getRootMinOpacity = function() {
                        return Cr(this.embed.iframe)
                    }, r.getRootLayoutBox = function() {
                        var t = this.embed.iframe;
                        return Ct(this.ampdoc).getLayoutRect(t)
                    }, r.observe = function(t, n) {
                        return this.parent.observe(t, n)
                    }, r.getElementVisibility = function(t) {
                        return 0 == this.getRootVisibility() ? 0 : this.parent.getElementVisibility(t)
                    }, r.getElementIntersectionRect = function(t) {
                        return 0 == this.getRootVisibility() ? null : this.parent.getElementIntersectionRect(t)
                    }, i
                }(Vr),
                Br = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];
            var Wr = "amp-analytics/analytics-root",
                $r = /^vars(.+)/,
                Yr = function() {
                    function t(t) {
                        this.ampdoc = t, this.QTt = S(), this.fAt = null, this.lAt = null
                    }
                    var n = t.prototype;
                    return n.dispose = function() {
                        for (var t in this.QTt) this.QTt[t].dispose(), delete this.QTt[t];
                        this.fAt && this.fAt.dispose(), this.lAt && this.lAt.dispose()
                    }, n.getType = function() {}, n.getRoot = function() {}, n.getRootElement = function() {
                        var t = this.getRoot();
                        return t.host || t.documentElement || t.body || t
                    }, n.getHostElement = function() {}, n.signals = function() {}, n.contains = function(t) {
                        return this.getRoot().contains(t)
                    }, n.getElementById = function(t) {}, n.getTrackerForAllowlist = function(t, n) {
                        var i = n[t];
                        return i ? this.getTracker(t, i) : null
                    }, n.getTracker = function(t, n) {
                        var i = this.QTt[t];
                        return i || (i = new n(this), this.QTt[t] = i), i
                    }, n.getTrackerOptional = function(t) {
                        return this.QTt[t] || null
                    }, n.getElement = function(t, n) {
                        var i = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        return ":root" == n ? s((function() {
                            return i.getRootElement()
                        })) : ":host" == n ? new Promise((function(t) {
                            t(it().assertElement(i.getHostElement(), 'Element "'.concat(n, '" not found')))
                        })) : this.ampdoc.whenReady().then((function() {
                            var e, u = null;
                            try {
                                e = "scope" == r ? L(t, n) : "closest" == r ? x(t, n) : i.getRoot().querySelector(n)
                            } catch (t) {
                                st(!1, "Invalid query selector ".concat(n))
                            }
                            return e && i.contains(e) && (u = e), it().assertElement(u, 'Element "'.concat(n, '" not found'))
                        }))
                    }, n.vAt = function(t) {
                        var n = this,
                            i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        return this.ampdoc.whenReady().then((function() {
                            for (var r = [], e = 0; e < t.length; e++) {
                                var u = void 0,
                                    s = [],
                                    o = t[e];
                                try {
                                    u = n.getRoot().querySelectorAll(o)
                                } catch (t) {
                                    st(!1, "Invalid query selector ".concat(o))
                                }
                                for (var a = 0; a < u.length; a++) n.contains(u[a]) && s.push(u[a]);
                                st((s = i ? n.dAt(s, o) : s).length, 'Element "'.concat(o, '" not found')), r = r.concat(s)
                            }
                            return r.filter((function(t, n) {
                                return r.indexOf(t) === n
                            }))
                        }))
                    }, n.dAt = function(t, n) {
                        for (var i = 0, r = [], e = 0; e < t.length; e++) Object.keys(j(t[e], void 0, $r)).length ? r.push(t[e]) : i++;
                        return i && it().warn(Wr, '%s element(s) ommited from selector "%s" because no data-vars-* attribute was found.', i, n), r
                    }, n.getAmpElement = function(t, n, i) {
                        var r = this;
                        return this.getElement(t, n, i).then((function(t) {
                            return r.mAt([t], n), t
                        }))
                    }, n.getElements = function(t, n, i) {
                        var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                        return d(n) ? (st(!i, "Cannot have selectionMethod %s defined with an array selector.", i), this.vAt(n, r)) : this.getElement(t, n, i).then((function(t) {
                            return [t]
                        }))
                    }, n.mAt = function(t, n) {
                        for (var i = 0; i < t.length; i++) st(t[i].classList.contains("i-amphtml-element"), 'Element "%s" is required to be an AMP element', n)
                    }, n.createSelectiveListener = function(t, n, i) {
                        var r = this,
                            e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return function(u) {
                            if (":host" != i)
                                for (var s = r.getRootElement(), o = "*" == i, a = ":root" == i, h = u.target; h && r.contains(h) && ("scope" != e || a || n.contains(h));)
                                    if ("closest" != e || h.contains(n)) {
                                        if (o || a && h == s || Jr(h, i)) {
                                            t(h, u);
                                            break
                                        }
                                        h = h.parentElement
                                    } else h = h.parentElement
                        }
                    }, n.whenIniLoaded = function() {}, n.getVisibilityManager = function() {
                        return this.fAt || (this.fAt = Fr(this.getRoot())), this.fAt
                    }, n.getScrollManager = function() {
                        return this.lAt || (this.lAt = new Pr(this)), this.lAt
                    }, t
                }(),
                zr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        return n.call(this, t)
                    }
                    var r = i.prototype;
                    return r.getType = function() {
                        return "ampdoc"
                    }, r.getRoot = function() {
                        return this.ampdoc.getRootNode()
                    }, r.getHostElement = function() {
                        return null
                    }, r.signals = function() {
                        return this.ampdoc.signals()
                    }, r.getElementById = function(t) {
                        return this.ampdoc.getElementById(t)
                    }, r.whenIniLoaded = function() {
                        var t, n, i = Ct(this.ampdoc);
                        if ("inabox" == K(this.ampdoc.win).runtime) i.getLayoutRect(this.getRootElement());
                        else {
                            var r = i.getSize();
                            _r(0, 0, r.width, r.height)
                        }
                        return t = this.ampdoc, this.ampdoc.win,
                            function(t, n) {
                                var i = St(t);
                                return i.signals().whenSignal("ready-scan").then((function() {
                                    var t = function(t) {
                                        return at(t, "resources")
                                    }(i).get().filter((function(t) {
                                        return !(n && !t.prerenderAllowed() || Br.includes(t.element.tagName))
                                    })).map((function(t) {
                                        return t.element
                                    }));
                                    return 0 === t.length ? Promise.resolve([]) : new Promise((function(n) {
                                        for (var r = i.win, e = new r.IntersectionObserver((function(t) {
                                                e.disconnect();
                                                for (var i = [], r = 0; r < t.length; r++) {
                                                    var u = t[r],
                                                        s = u.isIntersecting,
                                                        o = u.target;
                                                    s && i.push(o)
                                                }
                                                n(i)
                                            }), {
                                                root: H(r) ? r.document : null,
                                                threshold: .01
                                            }), u = 0; u < Math.min(t.length, 100); u++) e.observe(t[u])
                                    })).then((function(t) {
                                        return Promise.all(t.map((function(t) {
                                            return t.whenLoaded()
                                        })))
                                    }))
                                }))
                            }(t, n)
                    }, i
                }(Yr),
                Kr = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t, i) {
                        var r;
                        return (r = n.call(this, t)).embed = i, r
                    }
                    var r = i.prototype;
                    return r.getType = function() {
                        return "embed"
                    }, r.getRoot = function() {
                        return this.embed.win.document
                    }, r.getHostElement = function() {
                        return this.embed.iframe
                    }, r.signals = function() {
                        return this.embed.signals()
                    }, r.getElementById = function(t) {
                        return this.embed.win.document.getElementById(t)
                    }, r.whenIniLoaded = function() {
                        return this.embed.whenIniLoaded()
                    }, i
                }(Yr);

            function Jr(t, n) {
                try {
                    return k(t, n)
                } catch (t) {
                    return it().error(Wr, "Bad query selector.", n, t), !1
                }
            }
            var Xr = "__AMP_AN_ROOT",
                Zr = function() {
                    function t(t) {
                        this.ampdoc = t, this.Vs = this.pAt(t.getRootNode())
                    }
                    var n = t.prototype;
                    return n.dispose = function() {
                        this.Vs.dispose()
                    }, n.getAnalyticsRoot = function(t) {
                        return this.pAt(t)
                    }, n.createAnalyticsGroup = function(t) {
                        var n = this.pAt(t);
                        return new Nr(n, t)
                    }, n.bAt = function(t) {
                        return t === rr ? br : pr
                    }, n.triggerEventForTarget = function(t, n) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            e = new vr(t, n, i, r),
                            u = this.pAt(t),
                            s = cr(n),
                            o = u.getTracker(s, this.bAt(s));
                        o.trigger(e)
                    }, n.pAt = function(t) {
                        var n = St(t),
                            i = vt(t),
                            r = i && kn(i);
                        return n == this.ampdoc && !r && this.Vs ? this.Vs : this.EAt(r || n, (function() {
                            return r ? new Kr(n, r) : new zr(n)
                        }))
                    }, n.EAt = function(t, n) {
                        var i = t[Xr];
                        return i || (i = n(), t[Xr] = i), i
                    }, t
                }(),
                Qr = "amp-analytics/linker-manager",
                te = function() {
                    function t(t, n, i, r) {
                        this.qi = t, this.YC = n.linkers, this.KL = n.vars || {}, this.WI = i, this.En = r, this.TAt = {}, this.fA = Pt(this.En), this.G8 = ct(t, "form-submit-service"), this.gAt = null, this.cA = gi(this.qi), this.yAt = null
                    }
                    var n = t.prototype;
                    return n.init = function() {
                        var t = this;
                        if (!w(this.YC)) return e();
                        this.yAt = gn(this.qi.win), this.YC = this.wAt(this.YC);
                        var n = Object.keys(this.YC).map((function(n) {
                            var i = t.YC[n].ids,
                                r = Object.keys(i),
                                e = r.map((function(n) {
                                    var r = new fi(t.KL, void 0, !0);
                                    return t.SAt(i[n], r)
                                }));
                            return Promise.all(e).then((function(i) {
                                var e = {};
                                return i.forEach((function(t, n) {
                                    t && (e[r[n]] = t)
                                })), t.TAt[n] = e, e
                            }))
                        }));
                        if (n.length) {
                            var i = at(this.qi, "navigation");
                            i.registerAnchorMutator((function(n, i) {
                                n.href && "click" === i.type && (n.href = t.AAt(n.href))
                            }), 2), i.registerNavigateToMutator((function(n) {
                                return t.AAt(n)
                            }), 2)
                        }
                        return this.OAt(), Promise.all(n)
                    }, n.dispose = function() {
                        this.gAt && this.gAt()
                    }, n.wAt = function(t) {
                        var n = {},
                            i = {
                                enabled: this.NAt() && this.IAt()
                            },
                            r = Object.keys(t).filter((function(n) {
                                var r = t[n],
                                    e = w(r);
                                return e || (i[n] = r), e
                            })),
                            e = jn.getLocation(this.qi.win),
                            u = this.fA.isProxyOrigin(e);
                        return r.forEach((function(r) {
                            var e = Wt(Wt({}, i), t[r]);
                            !0 === e.enabled ? (u || !1 === e.proxyOnly) && (e.ids ? n[r] = e : it().error(Qr, '"ids" is a required field for use of "linkers".')) : it().info(Qr, "linker config for %s is not enabled and will be ignored.", r)
                        })), n
                    }, n.SAt = function(t, n) {
                        var i = this,
                            r = this.cA.getMacros(this.En);
                        return this.cA.expandTemplate(t, n, this.En).then((function(t) {
                            return _t(i.En).expandUrlAsync(t, r)
                        }))
                    }, n.NAt = function() {
                        return "googleanalytics" === this.WI && "googleanalytics" === this.qi.getMetaByName("amp-google-client-id-api") && this.qi.registerSingleton(2)
                    }, n.IAt = function() {
                        var t = ot(this.qi.win, "platform");
                        return t.isSafari() && t.getMajorVersion() >= 12
                    }, n.AAt = function(t) {
                        var n = this.YC;
                        for (var i in n) this.TAt[i] && (t = this._At(t, i, n[i]));
                        return t
                    }, n._At = function(t, n, i) {
                        var r = this.fA.parse(t);
                        if (this.RAt(r, n, i) && this.PAt(r)) {
                            var e = Gn("1", this.TAt[n]);
                            if (e) {
                                var u = {};
                                return u[n] = e,
                                    function(t, n) {
                                        for (var i = $(on(t).search), r = {}, e = Object.keys(n), u = 0; u < e.length; u++) A(i, e[u]) || (r[e[u]] = n[e[u]]);
                                        return function(t, n) {
                                            return an(t, cn(n))
                                        }(t, r)
                                    }(t, u)
                            }
                        }
                        return t
                    }, n.RAt = function(t, n, i) {
                        var r = i.destinationDomains,
                            e = t.hostname,
                            u = jn.getHostname(this.qi.win),
                            s = i.sameDomainEnabled;
                        if (!Boolean(s) && u === e) return !1;
                        if (r && !Array.isArray(r)) return it().warn(Qr, "%s destinationDomains must be an array.", n), !1;
                        if (r) return this.CAt(r, e);
                        var o = at(this.qi, "documentInfo").get(),
                            a = o.canonicalUrl,
                            h = o.sourceUrl,
                            c = ne(this.fA.parse(a).hostname, e);
                        if (this.yAt) {
                            var f = [this.yAt, "*" + this.yAt];
                            return this.CAt(f, e) || c
                        }
                        return ne(this.fA.parse(h).hostname, e) || c
                    }, n.PAt = function(t) {
                        return "https:" === t.protocol || "http:" === t.protocol
                    }, n.CAt = function(t, n) {
                        for (var i = 0; i < t.length; i++) {
                            var r = t[i];
                            if (r === n) return !0;
                            if (-1 !== r.indexOf("*") && re(n, r)) return !0
                        }
                        return !1
                    }, n.OAt = function() {
                        var t = this;
                        this.gAt || this.G8.then((function(n) {
                            t.gAt = n.beforeSubmit(t.MAt.bind(t))
                        }))
                    }, n.MAt = function(t) {
                        var n = t.actionXhrMutator,
                            i = t.form;
                        for (var r in this.YC) {
                            var e = this.YC[r],
                                u = i.getAttribute("action-xhr") || i.getAttribute("action"),
                                s = this.fA.parse(u);
                            this.RAt(s, r, e) && this.DAt(i, n, r)
                        }
                    }, n.DAt = function(t, n, i) {
                        var r = this.TAt[i];
                        if (r) {
                            var e = Gn("1", r),
                                u = t.getAttribute("action-xhr");
                            if (u) return n(an(u, hn(i, e), void 0));
                            this.LAt(t, i, e)
                        }
                    }, n.LAt = function(t, n, i) {
                        var r = {
                                "type": "hidden",
                                "name": n,
                                "value": i
                            },
                            e = U(t.ownerDocument, "input", r);
                        t.appendChild(e)
                    }, t
                }();

            function ne(t, n) {
                return ie(t) === ie(n)
            }

            function ie(t) {
                return t.replace(/^(?:www\.|m\.|amp\.)+/, "")
            }

            function re(t, n) {
                var i = n.replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*");
                return new RegExp("^" + i + "$").test(t)
            }
            var ee = {
                    "AMPDOC_HOST": !0,
                    "AMPDOC_HOSTNAME": !0,
                    "AMPDOC_URL": !0,
                    "AMP_VERSION": !0,
                    "AVAILABLE_SCREEN_HEIGHT": !0,
                    "AVAILABLE_SCREEN_WIDTH": !0,
                    "BACKGROUND_STATE": !0,
                    "BROWSER_LANGUAGE": !0,
                    "CANONICAL_HOST": !0,
                    "CANONICAL_HOSTNAME": !0,
                    "CANONICAL_PATH": !0,
                    "CANONICAL_URL": !0,
                    "DOCUMENT_CHARSET": !0,
                    "FIRST_CONTENTFUL_PAINT": !0,
                    "FIRST_VIEWPORT_READY": !0,
                    "MAKE_BODY_VISIBLE": !0,
                    "RANDOM": !0,
                    "SCREEN_COLOR_DEPTH": !0,
                    "SCREEN_HEIGHT": !0,
                    "SCREEN_WIDTH": !0,
                    "SOURCE_HOST": !0,
                    "SOURCE_HOSTNAME": !0,
                    "SOURCE_PATH": !0,
                    "SOURCE_URL": !0,
                    "TIMESTAMP": !0,
                    "TIMEZONE": !0,
                    "TIMEZONE_CODE": !0,
                    "USER_AGENT": !0,
                    "VIEWPORT_HEIGHT": !0,
                    "VIEWPORT_WIDTH": !0
                },
                ue = "${extraUrlParams}",
                se = function() {
                    function t() {}
                    var n = t.prototype;
                    return n.generateRequest = function(t, n) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return i ? {
                            url: t.replace(ue, ""),
                            payload: JSON.stringify(n.extraUrlParams)
                        } : {
                            url: ae(t, [n])
                        }
                    }, n.generateBatchRequest = function(t, n) {
                        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return i ? {
                            url: t.replace(ue, ""),
                            payload: JSON.stringify(n.map((function(t) {
                                return t.extraUrlParams
                            })))
                        } : {
                            url: ae(t, n)
                        }
                    }, t
                }(),
                oe = {
                    "default": new se
                };

            function ae(t, n) {
                var i = n.map((function(t) {
                    return cn(t.extraUrlParams)
                })).filter(Boolean).join("&");
                return t.indexOf(ue) >= 0 ? t.replace(ue, i) : an(t, i)
            }
            var he = function() {
                function t(t, n, i, r, e) {
                    this.En = t, this.qi = t.getAmpDoc(), this.win = this.qi.win, this.kAt = n.origin, this.baseUrl = ut(n.baseUrl), this.xAt = n.batchInterval, this.UAt = Number(n.reportWindow) || null, this.jAt = null, this.cA = gi(t), this.AC = _t(t), this.fA = Pt(t), this.HAt = null, this.FAt = null, this.VAt = [], this.qAt = i, this.QN = r, this.Bs = e ? ee : void 0, this.GAt = null, this.BAt = null, this.WAt = !0, this.$At = null, this.tK = 0, this.oc = Date.now(), this.YAt(), this.zAt()
                }
                var n = t.prototype;
                return n.send = function(t, n, i) {
                    var r = !0 === n.important;
                    if (this.WAt || r) {
                        this.tK++, this.$At = n;
                        var e, u, s, o = this.cA.getMacros(this.En);
                        if (o.RESOURCE_TIMING = (e = this.En, u = n.resourceTimingSpec, s = this.oc, u && Date.now() < s + 6e4 ? function(t, n) {
                                var i, r = t.getAmpDoc().win;
                                if (n.done || !r.performance || !r.performance.now || !r.performance.getEntriesByType || !(w((i = n).resources) ? i.encoding && i.encoding.entry && i.encoding.delim ? i.encoding.base < 2 || i.encoding.base > 36 ? (it().warn("ANALYTICS", "resource timing variables only supports bases between 2 and 36"), 0) : null == i.responseAfter || "number" == typeof i.responseAfter || (it().warn("ANALYTICS", 'resourceTimingSpec["responseAfter"] must be a number'), 0) : (it().warn("ANALYTICS", "resourceTimingSpec is missing or has incomplete encoding options"), 0) : (it().warn("ANALYTICS", 'resourceTimingSpec missing "resources" field'), 0))) return n.done = !0, Promise.resolve("");
                                var e = function(t) {
                                    return t.performance.getEntriesByType("resource")
                                }(r);
                                e.length >= 150 && (n.done = !0);
                                var u, s = n.responseAfter || 0;
                                return n.responseAfter = Math.max(s, r.performance.now()), (e = e.filter((function(t) {
                                    return t.startTime + t.duration >= s
                                }))).length ? (u = function() {
                                    return function(t, n, i) {
                                        var r = n.resources,
                                            e = n.encoding,
                                            u = gi(i),
                                            s = function(t) {
                                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                                                return Math.round(t - n).toString(e.base || 10)
                                            },
                                            o = function(t, n) {
                                                var i = function(t) {
                                                        var n = {};
                                                        for (var i in t) {
                                                            var r = t[i].host || "",
                                                                e = t[i].path || "",
                                                                u = t[i].query || "",
                                                                s = {
                                                                    name: i,
                                                                    pathPattern: new RegExp(e),
                                                                    queryPattern: new RegExp(u)
                                                                };
                                                            n[r] ? n[r].resources.push(s) : n[r] = {
                                                                hostPattern: new RegExp(r),
                                                                resources: [s]
                                                            }
                                                        }
                                                        var o = [];
                                                        for (var a in n) o.push(n[a]);
                                                        return o
                                                    }(n),
                                                    r = [];
                                                return t.forEach((function(t) {
                                                    var n = function(t, n) {
                                                        for (var i = t.name, r = 0; r < n.length; ++r) {
                                                            var e = n[r],
                                                                u = e.hostPattern,
                                                                s = e.resources;
                                                            if (u.test(i.host)) {
                                                                var o = m(s, (function(t) {
                                                                    return t.pathPattern.test(i.pathname) && t.queryPattern.test(i.search)
                                                                }));
                                                                if (-1 != o) return s[o].name
                                                            }
                                                        }
                                                        return null
                                                    }(t, i);
                                                    n && r.push({
                                                        entry: t,
                                                        name: n
                                                    })
                                                })), r
                                            }(t, r).map((function(t) {
                                                return function(t, n, i) {
                                                    var r = {
                                                        "key": n,
                                                        "startTime": i(t.startTime),
                                                        "redirectTime": i(t.redirectEnd, t.redirectStart),
                                                        "domainLookupTime": i(t.domainLookupEnd, t.domainLookupStart),
                                                        "tcpConnectTime": i(t.connectEnd, t.connectStart),
                                                        "serverResponseTime": i(t.responseStart, t.requestStart),
                                                        "networkTransferTime": i(t.responseEnd, t.responseStart),
                                                        "transferSize": i(t.transferSize || 0),
                                                        "encodedBodySize": i(t.encodedBodySize || 0),
                                                        "decodedBodySize": i(t.decodedBodySize || 0),
                                                        "duration": i(t.duration),
                                                        "initiatorType": t.initiatorType
                                                    };
                                                    return new fi(r, 1)
                                                }(t.entry, t.name, s)
                                            })).map((function(t) {
                                                return u.expandTemplate(e.entry, t, i)
                                            }));
                                        return Promise.all(o).then((function(t) {
                                            return t.join(e.delim)
                                        }))
                                    }(e, n, t)
                                }, new Promise((function(t) {
                                    setTimeout((function() {
                                        return t(u())
                                    }))
                                }))) : Promise.resolve("")
                            }(e, u) : Promise.resolve("")), this.HAt || (i.freezeVar("extraUrlParams"), this.HAt = this.KAt(this.baseUrl, i, o)), !this.FAt && this.kAt) {
                            var a = new fi(i.vars, i.iterations, !0);
                            this.FAt = this.KAt(this.kAt, a, o)
                        }
                        var h = Wt(Wt({}, t), n.extraUrlParams),
                            c = this.win.Date.now(),
                            f = ce(this.cA, this.AC, h, i, o, this.En, this.Bs).then((function(t) {
                                return {
                                    "trigger": n.on,
                                    "timestamp": c,
                                    "extraUrlParams": t
                                }
                            }));
                        this.VAt.push(f), this.Ns(r || !this.xAt)
                    }
                }, n.dispose = function() {
                    this.os(), this.GAt && (this.win.clearTimeout(this.GAt), this.GAt = null), this.BAt && (this.win.clearTimeout(this.BAt), this.BAt = null)
                }, n.KAt = function(t, n, i) {
                    var r = this;
                    return this.cA.expandTemplate(t, n, this.En, i, this.Bs).then((function(t) {
                        return r.AC.expandUrlAsync(t, i, r.Bs).catch((function(n) {
                            return st(!1, 'Could not expand URL "'.concat(t, '": ').concat(n.message))
                        }))
                    }))
                }, n.Ns = function(t) {
                    0 != this.tK && t && this.JAt()
                }, n.JAt = function() {
                    var t = this,
                        n = this.HAt,
                        i = this.VAt,
                        r = this.FAt,
                        e = this.$At;
                    this.os(), (r || n).then((function(n) {
                        t.qAt.url(t.qi, n, !0)
                    })), Promise.all([n, Promise.all(i), r]).then((function(n) {
                        var i = t.XAt(n[0], n[2]),
                            r = n[1];
                        0 !== r.length && (e.iframePing ? (st(e.on == sr, "iframePing is only available on page view requests."), t.QN.sendRequestUsingIframe(i, r[0])) : t.QN.sendRequest(i, r, !!t.xAt))
                    }))
                }, n.os = function() {
                    this.tK = 0, this.HAt = null, this.VAt = [], this.$At = null
                }, n.zAt = function() {
                    if (this.xAt) {
                        this.xAt = d(this.xAt) ? this.xAt : [this.xAt];
                        for (var t = 0; t < this.xAt.length; t++) {
                            var n = this.xAt[t];
                            st(N(n), "Invalid batchInterval value: %s", this.xAt), st((n = 1e3 * Number(n)) >= 200, "Invalid batchInterval value: %s, interval value must be greater than %s ms.", this.xAt, 200), this.xAt[t] = n
                        }
                        this.jAt = 0, this.ZAt()
                    }
                }, n.YAt = function() {
                    var t = this;
                    this.UAt && (this.BAt = this.win.setTimeout((function() {
                        t.Ns(!0), t.WAt = !1, t.GAt && (t.win.clearTimeout(t.GAt), t.GAt = null)
                    }), 1e3 * this.UAt))
                }, n.ZAt = function() {
                    var t = this;
                    ut(null != this.jAt);
                    var n = this.jAt < this.xAt.length ? this.xAt[this.jAt++] : this.xAt[this.xAt.length - 1];
                    this.GAt = this.win.setTimeout((function() {
                        t.Ns(!0), t.ZAt()
                    }), n)
                }, n.XAt = function(t, n) {
                    return n ? this.fA.parse(n).origin + t : t
                }, t
            }();

            function ce(t, n, i, r, e, u, s) {
                for (var o = {}, a = [], h = new fi(r.vars, r.iterations, !0), c = function i(r, o, c) {
                        var f = r[o];
                        if ("string" == typeof f) {
                            c[o] = void 0;
                            var l = t.expandTemplate(f, h, u).then((function(t) {
                                return n.expandStringAsync(t, e, s)
                            })).then((function(t) {
                                c[o] = t
                            }));
                            a.push(l)
                        } else if (d(f)) {
                            c[o] = [];
                            for (var v = 0; v < f.length; v++) i(f, v, c[o])
                        } else if (w(f) && null !== f) {
                            c[o] = {};
                            for (var m = Object.keys(f), p = 0; p < m.length; p++) i(f, m[p], c[o])
                        } else c[o] = f
                    }, f = Object.keys(i), l = 0; l < f.length; l++) c(i, f[l], o);
                return Promise.all(a).then((function() {
                    return o
                }))
            }
            var fe = function() {
                    function t(t, n) {
                        var i = this;
                        this.mlt = n, this.r5 = !1, this.QAt = [], this.hdt = new Ln(this.mlt, "send-iframe-transport-events", !0, (function() {
                            i.setIsReady()
                        }))
                    }
                    var n = t.prototype;
                    return n.isReady = function() {
                        return this.r5
                    }, n.setIsReady = function() {
                        this.r5 = !0, this.tOt()
                    }, n.queueSize = function() {
                        return this.QAt.length
                    }, n.enqueue = function(t) {
                        ut(t && t.creativeId && t.message), this.QAt.push(t), this.queueSize() >= 100 && (et().warn("amp-analytics/iframe-transport-message-queue", "Exceeded maximum size of queue for: " + t.creativeId), this.QAt.shift()), this.tOt()
                    }, n.tOt = function() {
                        this.isReady() && this.queueSize() && (this.hdt.send("iframe-transport-events", {
                            events: this.QAt
                        }), this.QAt = [])
                    }, t
                }(),
                le = function() {
                    return self.AMP.config.urls
                }(),
                ve = function() {
                    function t(t, n, i, r) {
                        this.nOt = t, this.WI = n, this.iOt = r, ut(i && i.iframe), this.rOt = i.iframe, this.eOt = 0, this.processCrossDomainIframe()
                    }
                    var n = t.prototype;
                    return n.detach = function() {
                        t.markCrossDomainIframeAsDone(this.nOt.document, this.WI)
                    }, n.processCrossDomainIframe = function() {
                        var n;
                        t.hasCrossDomainIframe(this.WI) ? ++(n = t.getFrameData(this.WI)).usageCount : (n = this.createCrossDomainIframe(), this.nOt.document.body.appendChild(n.frame), this.Pp()), ut(n)
                    }, n.createCrossDomainIframe = function() {
                        var n = t.uOt(),
                            i = JSON.stringify({
                                scriptSrc: (this.nOt, le.thirdParty + "/".concat("2211302304001", "/iframe-transport-client-v0.js")),
                                sentinel: n,
                                type: this.WI
                            }),
                            r = U(this.nOt.document, "iframe", {
                                sandbox: "allow-scripts allow-same-origin",
                                name: i,
                                "data-amp-3p-sentinel": n
                            });
                        r.sentinel = n, _n(r, !1), r.src = this.rOt;
                        var e = {
                            frame: r,
                            usageCount: 1,
                            queue: new fe(this.nOt, r)
                        };
                        return t.sOt[this.WI] = e, e
                    }, n.Pp = function() {
                        var n, i = this;
                        (n = this.nOt).PerformanceObserver && n.TaskAttributionTiming && "containerName" in n.TaskAttributionTiming.prototype && (t.oOt[this.WI] = new this.nOt.PerformanceObserver((function(t) {
                            t && t.getEntries().forEach((function(t) {
                                t && "longtask" == t.entryType && "cross-origin-descendant" == t.name && t.attribution && t.attribution.forEach((function(t) {
                                    i.rOt == t.containerSrc && ++i.eOt % 5 == 0 && it().error("amp-analytics/iframe-transport", 'Long Task: Vendor: "'.concat(i.WI, '"'))
                                }))
                            }))
                        })), t.oOt[this.WI].observe({
                            entryTypes: ["longtask"]
                        }))
                    }, t.markCrossDomainIframeAsDone = function(n, i) {
                        var r = t.getFrameData(i);
                        ut(r && r.frame && r.usageCount), --r.usageCount || (n.body.removeChild(r.frame), delete t.sOt[i], t.oOt[i] && (t.oOt[i].disconnect(), t.oOt[i] = null))
                    }, t.hasCrossDomainIframe = function(n) {
                        return A(t.sOt, n)
                    }, t.uOt = function() {
                        return String(++t.aOt)
                    }, n.sendRequest = function(n) {
                        var i = t.getFrameData(this.WI);
                        ut(i), ut(i.queue), i.queue.enqueue({
                            creativeId: this.iOt,
                            message: n
                        })
                    }, t.getFrameData = function(n) {
                        return t.sOt[n]
                    }, t.resetCrossDomainIframes = function() {
                        t.sOt = {}
                    }, n.getCreativeId = function() {
                        return this.iOt
                    }, n.getType = function() {
                        return this.WI
                    }, t
                }();

            function de(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = jn.getImage(t),
                    e = new r;
                return i && (e.referrerPolicy = "no-referrer"), e.src = n, e
            }
            ve.sOt = {}, ve.aOt = 0, ve.oOt = {};
            var me, pe, be = "amp-analytics/transport",
                Ee = function() {
                    function t(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.qi = t, this.t = t.win, this._t = n, this.Rs = this._t.referrerPolicy, "no-referrer" === this.Rs && (this._t.beacon = !1, this._t.xhrpost = !1), this.hOt = !!this._t.useBody, this.cOt = null, this.fOt = "inabox" == K(this.t).runtime
                    }
                    var n = t.prototype;
                    return n.sendRequest = function(n, i, r) {
                        if (n && 0 !== i.length) {
                            var e, u, s = this.lOt(),
                                o = (e = function(t) {
                                    var e = r ? s.generateBatchRequest(n, i, t) : s.generateRequest(n, i[0], t);
                                    return e.url.startsWith("amp-script:") || (ln(e.url, "amp-analytics request"), function(t) {
                                        st(!("__amp_source_origin" in $(on(t).search)), "Source origin is not allowed in %s", t)
                                    }(e.url)), e
                                }, u = {}, function(t) {
                                    var n = String(t);
                                    return void 0 === u[n] && (u[n] = e(t)), u[n]
                                });
                            if (this._t.iframe) return this.cOt ? void this.cOt.sendRequest(o(!1).url) : void et().error(be, "iframe transport was inadvertently deleted");
                            if (this._t["amp-script"]) t.forwardRequestToAmpScript(this.qi, {
                                url: n,
                                payload: o(!0).payload
                            });
                            else if (!(this._t.beacon && t.sendRequestUsingBeacon(this.t, o(this.hOt)) || this._t.xhrpost && t.sendRequestUsingXhr(this.t, o(this.hOt)))) {
                                var a = this._t.image;
                                if (a) {
                                    var h = "object" == c(a) && a.suppressWarnings;
                                    t.sendRequestUsingImage(this.t, o(!1), h, this.Rs)
                                } else it().warn(be, "Failed to send request", n, this._t)
                            }
                        } else et().info(be, "Empty request not sent: ", n)
                    }, n.maybeInitIframeTransport = function(t) {
                        if (this._t.iframe && !this.cOt) {
                            var n = lt(P(t)),
                                i = t.getAttribute("type"),
                                r = this.fOt ? "1" : it().assertString(function(t, n) {
                                    try {
                                        var i = vt(t, n).parentElement;
                                        if ("AMP-AD" == i.nodeName) return String(i.getResourceId())
                                    } catch (t) {}
                                    return null
                                }(t, n), "No friendly amp-ad ancestor element was found for amp-analytics tag with iframe transport.");
                            this.cOt = new ve(n, i, this._t, r)
                        }
                    }, n.deleteIframeTransport = function() {
                        this.cOt && (this.cOt.detach(), this.cOt = null)
                    }, n.sendRequestUsingIframe = function(t, n) {
                        var i = this,
                            r = ae(t, [n]);
                        if (r) {
                            ln(r, "amp-analytics request"), st(on(r).origin != on(this.t.location.href).origin, "Origin of iframe request must not be equal to the document origin. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.");
                            var e = this.t.document.createElement("iframe");
                            _n(e, !1), e.onload = e.onerror = function() {
                                It(i.t).delay((function() {
                                    var t, n;
                                    null === (n = (t = e).parentElement) || void 0 === n || n.removeChild(t)
                                }), 5e3)
                            }, e.setAttribute("amp-analytics", ""), e.setAttribute("sandbox", "allow-scripts allow-same-origin"), e.src = r, this.t.document.body.appendChild(e)
                        } else it().error(be, "Request not sent. Contents empty.")
                    }, n.lOt = function() {
                        return oe.default
                    }, t.sendRequestUsingImage = function(t, n, i, r) {
                        t && function(t) {
                            var n, i;
                            if (function(t) {
                                    return !!(t.complete || "complete" == t.readyState || Ut(t) && t.readyState > 0 || t.document && "complete" == t.document.readyState)
                                }(t)) return Promise.resolve(t);
                            var r = Ut(t);
                            return r && t.__AMP_MEDIA_LOAD_FAILURE_SRC === t.currentSrc ? Promise.reject(t) : new Promise((function(e, u) {
                                if (n = r ? xt(t, "loadedmetadata", e, {
                                        capture: !0
                                    }) : xt(t, "load", e), t.tagName) {
                                    var s = t;
                                    if (r && !t.hasAttribute("src") && !(s = function(t, n) {
                                            for (var i = t.lastElementChild; i; i = i.previousElementSibling)
                                                if (n(i)) return i;
                                            return null
                                        }(t, (function(t) {
                                            return "SOURCE" === t.tagName
                                        })))) return u(new Error("Media has no source."));
                                    i = xt(s, "error", u)
                                }
                            })).then((function() {
                                return i && i(), t
                            }), (function() {
                                n && n(),
                                    function(t) {
                                        Ut(t) && (t.__AMP_MEDIA_LOAD_FAILURE_SRC = t.currentSrc || !0);
                                        var n = t;
                                        throw n && n.src && (n = n.src), it().createError("Failed to load:", n)
                                    }(t)
                            }))
                        }(function(t, n, i) {
                            return i && "no-referrer" !== i && it().error("pixel", "Unsupported referrerPolicy: %s", i), "no-referrer" === i ? function(t, n) {
                                if ("referrerPolicy" in Image.prototype) return de(t, n, !0);
                                var i = U(t.document, "iframe", {
                                    "src": "about:blank",
                                    "style": "display:none"
                                });
                                return i.onload = function() {
                                    de(i.contentWindow, n)
                                }, t.document.body.appendChild(i), i
                            }(t, n) : de(t, n)
                        }(t, n.url, r)).then((function() {
                            et().fine(be, "Sent image request", n.url)
                        })).catch((function() {
                            i || it().warn(be, "Response unparseable or failed to send image request", n.url)
                        }))
                    }, t.sendRequestUsingBeacon = function(t, n) {
                        var i = jn.getSendBeacon(t);
                        if (!i) return !1;
                        var r = i(n.url, n.payload || "");
                        return r && et().fine(be, "Sent beacon request", n), r
                    }, t.sendRequestUsingXhr = function(t, n) {
                        var i = jn.getXMLHttpRequest(t);
                        if (!i) return !1;
                        var r = new i;
                        return "withCredentials" in r && (r.open("POST", n.url, !0), r.withCredentials = !0, r.setRequestHeader("Content-Type", "text/plain"), r.onreadystatechange = function() {
                            4 == r.readyState && et().fine(be, "Sent XHR request", n.url)
                        }, r.send(n.payload || ""), !0)
                    }, t.forwardRequestToAmpScript = function(t, n) {
                        return (i = t, function(t, n, i) {
                            var r = ht(t, n);
                            return r ? Promise.resolve(r) : yt(t, n, "amp-script")
                        }(i, "amp-script")).then((function(t) {
                            st(t, "AMP-SCRIPT is not installed"), t.fetch(n.url, JSON.parse(n.payload))
                        }));
                        var i
                    }, t
                }(),
                Te = "amp-analytics",
                ge = [sr, Qi, tr, nr],
                ye = function(t) {
                    a(i, t);
                    var n = v(i);

                    function i(t) {
                        var i;
                        return (i = n.call(this, t)).vOt = e(), i.dOt = null, i.fTt = !1, i.FL = {}, i.YC = {}, i.mOt = null, i.pOt = null, i.cA = null, i.bOt = At(i.win), i.EOt = null, i.QN = null, i.WI = i.element.getAttribute("type"), i.fOt = "inabox" == K(i.win).runtime, i.TOt = null, i.gOt = null, i.yOt = null, i
                    }
                    var r = i.prototype;
                    return r.getLayoutPriority = function() {
                        return this.fOt ? 0 : 1
                    }, r.isAlwaysFixed = function() {
                        return !xn(this.element)
                    }, r.isLayoutSupported = function(t) {
                        return !0
                    }, r.buildCallback = function() {
                        var t, n = this;
                        this.fTt = this.element.hasAttribute("sandbox"), this.element.setAttribute("aria-hidden", "true"), this.dOt = this.element.getAttribute("data-consent-notification-id"), null != this.dOt && (this.vOt = (t = this.element, function(t, n, i, r) {
                            return yt(t, "userNotificationManager", i, void 0).then((function(t) {
                                return function(t, n, i) {
                                    return st(t, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", "userNotificationManager", i, i, i)
                                }(t, 0, i)
                            }))
                        }(t, 0, "amp-user-notification")).then((function(t) {
                            return t.get(n.dOt)
                        }))), "immediate" == this.element.getAttribute("trigger") && this.wOt()
                    }, r.layoutCallback = function() {
                        return this.wOt()
                    }, r.detachedCallback = function() {
                        for (var t in this.pOt && (this.pOt.dispose(), this.pOt = null), this.TOt && (this.TOt.dispose(), this.TOt = null), this.FL) this.FL[t].dispose(), delete this.FL[t]
                    }, r.resumeCallback = function() {
                        var t = this;
                        this.EOt && this.EOt.then((function() {
                            t.QN.maybeInitIframeTransport(t.element)
                        }))
                    }, r.unlayoutCallback = function() {
                        var n = this;
                        return !this.getAmpDoc().isVisible() && (this.EOt && this.EOt.then((function() {
                            n.QN.deleteIframeTransport()
                        })), t.prototype.unlayoutCallback.call(this))
                    }, r.wOt = function() {
                        var t = this;
                        if (this.EOt) return this.EOt;
                        var n = this.getAmpDoc();
                        return this.EOt = n.whenFirstVisible().then((function() {
                            return It(t.win).promise(1)
                        })).then((function() {
                            return t.vOt
                        })).then((function() {
                            return Promise.all([(t = n, ct(t, "amp-analytics-instrumentation")), yi(n)]);
                            var t
                        })).then((function(n) {
                            t.mOt = n[0], t.cA = n[1];
                            var i = new u,
                                r = function() {
                                    var n = new Oi(t.element).loadConfig();
                                    i.resolve(n)
                                };
                            return t.fOt ? r() : Li(t.element, r, 20), i.promise
                        })).then((function(n) {
                            return t.YC = n, new qi(t.win, t.element, t.YC).write()
                        })).then((function() {
                            t.QN = new Ee(t.getAmpDoc(), t.YC.transport || {})
                        })).then(this.SOt.bind(this)).then(this.AOt.bind(this)).then(this.OOt.bind(this)), this.EOt.then((function() {
                            t.collapse()
                        })), this.EOt
                    }, r.NOt = function() {
                        return !!this.fOt || (null == this.yOt && (this.yOt = xn(this.element)), this.yOt)
                    }, r.SOt = function() {
                        var t = this;
                        return this.YC.triggers && Object.values(this.YC.triggers).some((function(t) {
                            var n;
                            return null == t || null === (n = t.session) || void 0 === n ? void 0 : n.persistEvent
                        })) && this.WI ? si(this.getAmpDoc()).then((function(n) {
                            t.gOt = n
                        })) : e()
                    }, r.AOt = function() {
                        var t = this;
                        if (this.IOt()) {
                            var n = this.ye();
                            return it().fine(n, "User has opted out. No hits will be sent."), e()
                        }
                        if (this._Ot(), !this.YC.triggers) {
                            var i = this.ye();
                            return this.user().warn(i, "No triggers were found in the config. No analytics data will be sent."), e()
                        }
                        this.ROt(this.YC.extraUrlParams, this.YC.extraUrlParamsReplaceMap), this.pOt = this.mOt.createAnalyticsGroup(this.element), this.QN.maybeInitIframeTransport(this.element);
                        var r = [];
                        for (var u in this.YC.triggers) !A(this.YC.triggers, u) || function() {
                            var n = t.YC.triggers[u],
                                i = t.POt({}, n, void 0, !0),
                                e = t.ye();
                            if (!n) return t.user().error(e, "Trigger should be an object: ", u), "continue";
                            var s, o = n.request || n.parentPostMessage && t.NOt();
                            if (!n.on || !o) {
                                var a = t.NOt() ? '/"parentPostMessage"' : "";
                                return t.user().error(e, '"on" and "request"' + a + " attributes are required for data to be collected."), "continue"
                            }
                            if (t.fTt) {
                                var h = n.on;
                                if (!("click" !== (s = h) && "browser-event" !== s && "custom" !== s && "hidden" !== s && "ini-load" !== s && "render-start" !== s && "scroll" !== s && "story" !== s && "timer" !== s && "video" !== s && "visible" !== s || ge.includes(h))) return t.user().error(e, h + " is not supported for amp-analytics in scope"), "continue"
                            }
                            t.ROt(n.extraUrlParams, t.YC.extraUrlParamsReplaceMap), r.push(t.COt(n).then((function(r) {
                                if (r) {
                                    if (t.fTt) {
                                        if (!t.element.parentElement) return;
                                        return n.selector = t.element.parentElement.tagName, n.selectionMethod = "closest", t.MOt(n)
                                    }
                                    return n.selector && !d(n.selector) ? t.cA.expandTemplate(n.selector, i, t.element).then((function(i) {
                                        return n.selector = i, t.MOt(n)
                                    })) : t.MOt(n)
                                }
                            })))
                        }();
                        return Promise.all(r)
                    }, r.preload = function(t, n) {
                        Nt(this.win).preload(this.getAmpDoc(), t, n)
                    }, r.MOt = function(t) {
                        if (!this.pOt) return e();
                        try {
                            return this.pOt.addTrigger(t, this.Ik.bind(this, t))
                        } catch (n) {
                            return G(this.ye(), 'Failed to process trigger "' + t.on + '"', n), e()
                        }
                    }, r.ROt = function(t, n) {
                        if (t && n) {
                            var i = 0;
                            for (var r in n) {
                                if (++i > 16) {
                                    var e = this.ye();
                                    this.user().error(e, "More than 16 extraUrlParamsReplaceMap rules aren't allowed; Skipping the rest");
                                    break
                                }
                                for (var u in t) {
                                    var s = u.replace(r, n[r]);
                                    if (u != s) {
                                        var o = t[u];
                                        delete t[u], t[s] = o
                                    }
                                }
                            }
                        }
                    }, r.IOt = function() {
                        var t = this.YC.optoutElementId;
                        if (t && this.win.document.getElementById(t)) return !0;
                        if (!this.YC.optout) return !1;
                        for (var n = this.YC.optout.split("."), i = this.win, r = 0; r < n.length; r++) {
                            if (!i) return !1;
                            i = i[n[r]]
                        }
                        return i()
                    }, r._Ot = function() {
                        var t = this;
                        if (this.YC.requests) {
                            if (this.YC.requests) {
                                for (var n in this.YC.requests) A(this.YC.requests, n) && (this.YC.requests[n].baseUrl || (this.user().error(Te, "request must have a baseUrl"), delete this.YC.requests[n]));
                                for (var i in this.YC.requests) this.YC.requests[i].baseUrl = b(this.YC.requests[i].baseUrl, (function(n) {
                                    var i = t.YC.requests[n];
                                    return i && i.baseUrl || "${" + n + "}"
                                }), 5);
                                var r = {};
                                for (var e in this.YC.requests)
                                    if (A(this.YC.requests, e)) {
                                        var u = this.YC.requests[e];
                                        r[e] = new he(this.element, u, Nt(this.win), this.QN, this.fTt)
                                    }
                                this.FL = r
                            }
                        } else if (!this.NOt()) {
                            var s = this.ye();
                            this.user().warn(s, "No request strings defined. Analytics data will not be sent from this page.")
                        }
                    }, r.OOt = function() {
                        var t = this;
                        this.TOt = new te(this.getAmpDoc(), this.YC, this.WI, this.element);
                        var n = function() {
                            t.TOt.init()
                        };
                        this.fOt ? n() : Li(this.element, n, 10)
                    }, r.Ik = function(t, n) {
                        var i, r;
                        null === (i = t.session) || void 0 === i || !i.persistEvent || null === (r = this.gOt) || void 0 === r || r.updateEvent(this.WI);
                        for (var e = d(t.request) ? t.request : [t.request], u = 0; u < e.length; u++) {
                            var s = e[u];
                            this.DOt(s, t, n)
                        }
                    }, r.DOt = function(t, n, i) {
                        var r = this;
                        if (!this.element.ownerDocument.defaultView) {
                            var e = this.ye();
                            et().warn(e, "request against destroyed embed: ", n.on)
                        }
                        var u = this.FL[t],
                            s = this.NOt() && n.parentPostMessage;
                        if (null != t && !u) {
                            var o = this.ye();
                            if (this.user().error(o, "Ignoring request for event. Request string not found: ", n.request), !s) return
                        }
                        this.LOt(n, i).then((function(t) {
                            var e = r.element.ownerDocument && r.element.ownerDocument.defaultView;
                            t && e && (r.kOt(u, n, i), n.parentPostMessage && r.NOt() && H(r.win) && r.xOt(n, i))
                        }))
                    }, r.kOt = function(t, n, i) {
                        if (t) {
                            this.YC.vars.requestCount++;
                            var r = this.POt(i, n);
                            t.send(this.YC.extraUrlParams, n, r)
                        }
                    }, r.xOt = function(t, n) {
                        var i = this,
                            r = t.parentPostMessage,
                            e = this.POt(n, t);
                        (function(t, n, i, r, e, u) {
                            var s = gi(t),
                                o = _t(u),
                                a = s.getMacros(u);
                            e.freezeVar("extraUrlParams");
                            var h = s.expandTemplate(n, e, u).then((function(t) {
                                return o.expandStringAsync(t, a)
                            }));
                            return n.indexOf("${extraUrlParams}") < 0 ? h : h.then((function(t) {
                                var n = Wt(Wt({}, i), r.extraUrlParams);
                                return ce(s, o, n, e, a, u).then((function(n) {
                                    return ae(t, [{
                                        "extraUrlParams": n
                                    }])
                                }))
                            }))
                        })(this.getAmpDoc(), r, this.YC.extraUrlParams, t, e, this.element).then((function(t) {
                            i.win.parent.postMessage(t, "*")
                        }))
                    }, r.COt = function(t) {
                        var n = this,
                            i = t.sampleSpec,
                            r = this.ye();
                        if (!i) return Promise.resolve(!0);
                        var e = i.sampleOn;
                        if (!e) return this.user().error(r, "Invalid sampleOn value."), Promise.resolve(!0);
                        var s = parseFloat(i.threshold);
                        if (s >= 0 && s <= 100) {
                            var o = new u,
                                a = function() {
                                    var i = n.POt({}, t),
                                        r = n.SAt(e, i).then((function(t) {
                                            return n.bOt.uniform(t)
                                        })).then((function(t) {
                                            return 100 * t < s
                                        }));
                                    o.resolve(r)
                                };
                            return this.fOt ? a() : Li(this.element, a, 10), o.promise
                        }
                        return it().error(r, "Invalid threshold for sampling."), Promise.resolve(!0)
                    }, r.LOt = function(t, n) {
                        var i = this.POt(n, t),
                            r = this.UOt(this.YC.enabled, i),
                            e = this.UOt(t.enabled, i);
                        return Promise.all([r, e]).then((function(t) {
                            return ut(2 === t.length), t[0] && t[1]
                        }))
                    }, r.UOt = function(t, n) {
                        return void 0 === t ? Promise.resolve(!0) : "boolean" == typeof t ? Promise.resolve(t) : this.SAt(t, n).then((function(t) {
                            return Si(t)
                        }))
                    }, r.SAt = function(t, n) {
                        var i = this;
                        return this.cA.expandTemplate(t, n, this.element).then((function(t) {
                            return _t(i.element).expandUrlAsync(t, i.cA.getMacros(i.element))
                        }))
                    }, r.ye = function() {
                        return "AmpAnalytics " + (this.element.getAttribute("id") || "<unknown id>")
                    }, r.POt = function(t, n, i, r) {
                        var e = {};
                        return Ni(this.YC.vars, e), Ni(n.vars, e), Ni(t.vars, e), new fi(e, i, r)
                    }, i
                }(t.BaseElement);
            t.registerServiceForDoc("amp-analytics-instrumentation", Zr), t.registerServiceForDoc("activity", Gt), pe = $n, bt(me = lt(me = t.win), me, "amp-analytics-linker-reader", pe), t.registerServiceForDoc("amp-analytics-session", ni), t.registerServiceForDoc("amp-analytics-variables", bi), t.registerElement(Te, ye)
        }();
        /*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
    }
});
//# sourceMappingURL=amp-analytics-0.1.js.map