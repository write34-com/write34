export function decodeScenario(t) {
    "use strict";

    function mergeProperties(e, t) {
        for (var r in t)
            hasOwnProperty(t, r) && !hasOwnProperty(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            });
    }

    function hasOwnProperty(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    mergeProperties(t, {
        wk: function() {
            return Ee
        },
        SY: function() {
            return Q
        },
        Ev: function() {
            return Se
        }
    });
    var r, i, o, a = Buffer;
    try {
        r = new TextDecoder
    } catch (Oe) {}
    var s = 0;
    const c = [];
    var u, l, h, A, f, d = c, g = 0, p = {}, y = 0, m = 0, v = [], b = {
        useRecords: !1,
        mapsAsObjects: !0
    };
    class I {
    }
    const _ = new I;
    _.name = "MessagePack 0xC1";
    var w, E, B, C = !1, k = 2;
    try {
        new Function("")
    } catch (Oe) {
        k = 1 / 0
    }
    class Q {
        constructor(e) {
            e && (!1 === e.useRecords && void 0 === e.mapsAsObjects && (e.mapsAsObjects = !0),
            e.sequential && !1 !== e.trusted && (e.trusted = !0,
            e.structures || 0 == e.useRecords || (e.structures = [],
            e.maxSharedStructures || (e.maxSharedStructures = 0))),
                e.structures ? e.structures.sharedLength = e.structures.length : e.getStructures && ((e.structures = []).uninitialized = !0,
                    e.structures.sharedLength = 0),
            e.int64AsNumber && (e.int64AsType = "number")),
                Object.assign(this, e)
        }
        unpack(e, t) {
            if (i)
                return ne((()=>(re(),
                    this ? this.unpack(e, t) : Q.prototype.unpack.call(b, e, t))));
            e.buffer || e.constructor !== ArrayBuffer || (e = "undefined" !== typeof a ? a.from(e) : new Uint8Array(e)),
                "object" === typeof t ? (o = t.end || e.length,
                    s = t.start || 0) : (s = 0,
                    o = t > -1 ? t : e.length),
                g = 0,
                m = 0,
                l = null,
                d = c,
                h = null,
                i = e;
            try {
                f = e.dataView || (e.dataView = new DataView(e.buffer,e.byteOffset,e.byteLength))
            } catch (Oe) {
                if (i = null,
                e instanceof Uint8Array)
                    throw Oe;
                throw new Error("Source must be a Uint8Array or Buffer but was a " + (e && "object" == typeof e ? e.constructor.name : typeof e))
            }
            if (this instanceof Q) {
                if (p = this,
                    this.structures)
                    return u = this.structures,
                        S(t);
                (!u || u.length > 0) && (u = [])
            } else
                p = b,
                (!u || u.length > 0) && (u = []);
            return S(t)
        }
        unpackMultiple(e, t) {
            let n, r = 0;
            try {
                C = !0;
                let i = e.length
                    , o = this ? this.unpack(e, i) : oe.unpack(e, i);
                if (!t) {
                    for (n = [o]; s < i; )
                        r = s,
                            n.push(S());
                    return n
                }
                if (!1 === t(o, r, s))
                    return;
                for (; s < i; )
                    if (r = s,
                    !1 === t(S(), r, s))
                        return
            } catch (Oe) {
                throw Oe.lastPosition = r,
                    Oe.values = n,
                    Oe
            } finally {
                C = !1,
                    re()
            }
        }
        _mergeStructures(e, t) {
            E && (e = E.call(this, e)),
                e = e || [],
            Object.isFrozen(e) && (e = e.map((e=>e.slice(0))));
            for (let n = 0, r = e.length; n < r; n++) {
                let t = e[n];
                t && (t.isShared = !0,
                n >= 32 && (t.highByte = n - 32 >> 5))
            }
            e.sharedLength = e.length;
            for (let n in t || [])
                if (n >= 0) {
                    let r = e[n]
                        , i = t[n];
                    i && (r && ((e.restoreStructures || (e.restoreStructures = []))[n] = r),
                        e[n] = i)
                }
            return this.structures = e
        }
        decode(e, t) {
            return this.unpack(e, t)
        }
    }
    function S(e) {
        try {
            if (!p.trusted && !C) {
                let e = u.sharedLength || 0;
                e < u.length && (u.length = e)
            }
            let t;
            if (p.randomAccessStructure && i[s] < 64 && i[s] >= 32 && w ? (t = w(i, s, o, p),
                i = null,
            e && e.lazy || !t || (t = t.toJSON()),
                s = o) : t = D(),
            h && (s = h.postBundlePosition,
                h = null),
            C && (u.restoreStructures = null),
            s == o)
                u && u.restoreStructures && x(),
                    u = null,
                    i = null,
                A && (A = null);
            else {
                if (s > o)
                    throw new Error("Unexpected end of MessagePack data");
                if (!C) {
                    let e;
                    try {
                        e = JSON.stringify(t, ((e,t)=>"bigint" === typeof t ? `${t}n` : t)).slice(0, 100)
                    } catch (Oe) {
                        e = "(JSON view not available " + Oe + ")"
                    }
                    // throw new Error("Data read, but end of buffer not reached " + e)
                }
            }
            return t
        } catch (Oe) {
            throw u && u.restoreStructures && x(),
                re(),
            (Oe instanceof RangeError || Oe.message.startsWith("Unexpected end of buffer") || s > o) && (Oe.incomplete = !0),
                Oe
        }
    }
    function x() {
        for (let e in u.restoreStructures)
            u[e] = u.restoreStructures[e];
        u.restoreStructures = null
    }
    function D() {
        let e = i[s++];
        if (e < 160) {
            if (e < 128) {
                if (e < 64)
                    return e;
                {
                    let t = u[63 & e] || p.getStructures && N()[63 & e];
                    return t ? (t.read || (t.read = M(t, 63 & e)),
                        t.read()) : e
                }
            }
            if (e < 144) {
                if (e -= 128,
                    p.mapsAsObjects) {
                    let t = {};
                    for (let n = 0; n < e; n++) {
                        let e = W();
                        "__proto__" === e && (e = "__proto_"),
                            t[e] = D()
                    }
                    return t
                }
                {
                    let t = new Map;
                    for (let n = 0; n < e; n++)
                        t.set(D(), D());
                    return t
                }
            }
            {
                e -= 144;
                let t = new Array(e);
                for (let n = 0; n < e; n++)
                    t[n] = D();
                return p.freezeData ? Object.freeze(t) : t
            }
        }
        if (e < 192) {
            let t = e - 160;
            if (m >= s)
                return l.slice(s - y, (s += t) - y);
            if (0 == m && o < 140) {
                let e = t < 16 ? V(t) : Y(t);
                if (null != e)
                    return e
            }
            return R(t)
        }
        {
            let t;
            switch (e) {
                case 192:
                    return null;
                case 193:
                    return h ? (t = D(),
                        t > 0 ? h[1].slice(h.position1, h.position1 += t) : h[0].slice(h.position0, h.position0 -= t)) : _;
                case 194:
                    return !1;
                case 195:
                    return !0;
                case 196:
                    if (t = i[s++],
                    void 0 === t)
                        throw new Error("Unexpected end of buffer");
                    return K(t);
                case 197:
                    return t = f.getUint16(s),
                        s += 2,
                        K(t);
                case 198:
                    return t = f.getUint32(s),
                        s += 4,
                        K(t);
                case 199:
                    return z(i[s++]);
                case 200:
                    return t = f.getUint16(s),
                        s += 2,
                        z(t);
                case 201:
                    return t = f.getUint32(s),
                        s += 4,
                        z(t);
                case 202:
                    if (t = f.getFloat32(s),
                    p.useFloat32 > 2) {
                        let e = ie[(127 & i[s]) << 1 | i[s + 1] >> 7];
                        return s += 4,
                        (e * t + (t > 0 ? .5 : -.5) >> 0) / e
                    }
                    return s += 4,
                        t;
                case 203:
                    return t = f.getFloat64(s),
                        s += 8,
                        t;
                case 204:
                    return i[s++];
                case 205:
                    return t = f.getUint16(s),
                        s += 2,
                        t;
                case 206:
                    return t = f.getUint32(s),
                        s += 4,
                        t;
                case 207:
                    return "number" === p.int64AsType ? (t = 4294967296 * f.getUint32(s),
                        t += f.getUint32(s + 4)) : "string" === p.int64AsType ? t = f.getBigUint64(s).toString() : "auto" === p.int64AsType ? (t = f.getBigUint64(s),
                    t <= BigInt(2) << BigInt(52) && (t = Number(t))) : t = f.getBigUint64(s),
                        s += 8,
                        t;
                case 208:
                    return f.getInt8(s++);
                case 209:
                    return t = f.getInt16(s),
                        s += 2,
                        t;
                case 210:
                    return t = f.getInt32(s),
                        s += 4,
                        t;
                case 211:
                    return "number" === p.int64AsType ? (t = 4294967296 * f.getInt32(s),
                        t += f.getUint32(s + 4)) : "string" === p.int64AsType ? t = f.getBigInt64(s).toString() : "auto" === p.int64AsType ? (t = f.getBigInt64(s),
                    t >= BigInt(-2) << BigInt(52) && t <= BigInt(2) << BigInt(52) && (t = Number(t))) : t = f.getBigInt64(s),
                        s += 8,
                        t;
                case 212:
                    if (t = i[s++],
                    114 == t)
                        return Z(63 & i[s++]);
                {
                    let e = v[t];
                    if (e)
                        return e.read ? (s++,
                            e.read(D())) : e.noBuffer ? (s++,
                            e()) : e(i.subarray(s, ++s));
                    // throw new Error("Unknown extension " + t)
                }
                case 213:
                    return t = i[s],
                        114 == t ? (s++,
                            Z(63 & i[s++], i[s++])) : z(2);
                case 214:
                    return z(4);
                case 215:
                    return z(8);
                case 216:
                    return z(16);
                case 217:
                    return t = i[s++],
                        m >= s ? l.slice(s - y, (s += t) - y) : F(t);
                case 218:
                    return t = f.getUint16(s),
                        m >= (s += 2) ? l.slice(s - y, (s += t) - y) : U(t);
                case 219:
                    return t = f.getUint32(s),
                        m >= (s += 4) ? l.slice(s - y, (s += t) - y) : O(t);
                case 220:
                    return t = f.getUint16(s),
                        s += 2,
                        L(t);
                case 221:
                    return t = f.getUint32(s),
                        s += 4,
                        L(t);
                case 222:
                    return t = f.getUint16(s),
                        s += 2,
                        j(t);
                case 223:
                    return t = f.getUint32(s),
                        s += 4,
                        j(t);
                default:
                    if (e >= 224)
                        return e - 256;
                    if (void 0 === e) {
                        let e = new Error("Unexpected end of MessagePack data");
                        throw e.incomplete = !0,
                            e
                    }
                    throw new Error("Unknown MessagePack token " + e)
            }
        }
    }
    const T = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
    function M(e, t) {
        function n() {
            if (n.count++ > k) {
                let n = e.read = new Function("r","return function(){return " + (p.freezeData ? "Object.freeze" : "") + "({" + e.map((e=>"__proto__" === e ? "__proto_:r()" : T.test(e) ? e + ":r()" : "[" + JSON.stringify(e) + "]:r()")).join(",") + "})}")(D);
                return 0 === e.highByte && (e.read = P(t, e.read)),
                    n()
            }
            let r = {};
            for (let t = 0, n = e.length; t < n; t++) {
                let n = e[t];
                "__proto__" === n && (n = "__proto_"),
                    r[n] = D()
            }
            return p.freezeData ? Object.freeze(r) : r
        }
        return n.count = 0,
            0 === e.highByte ? P(t, n) : n
    }
    const P = (e,t)=>function() {
            let n = i[s++];
            if (0 === n)
                return t();
            let r = e < 32 ? -(e + (n << 5)) : e + (n << 5)
                , o = u[r] || N()[r];
            if (!o)
                throw new Error("Record id is not defined for " + r);
            return o.read || (o.read = M(o, e)),
                o.read()
        }
    ;
    function N() {
        let e = ne((()=>(i = null,
            p.getStructures())));
        return u = p._mergeStructures(e, u)
    }
    var R = G
        , F = G
        , U = G
        , O = G;
    function G(e) {
        let t;
        if (e < 16 && (t = V(e)))
            return t;
        if (e > 64 && r)
            return r.decode(i.subarray(s, s += e));
        const n = s + e
            , o = [];
        for (t = ""; s < n; ) {
            const e = i[s++];
            if (0 === (128 & e))
                o.push(e);
            else if (192 === (224 & e)) {
                const t = 63 & i[s++];
                o.push((31 & e) << 6 | t)
            } else if (224 === (240 & e)) {
                const t = 63 & i[s++]
                    , n = 63 & i[s++];
                o.push((31 & e) << 12 | t << 6 | n)
            } else if (240 === (248 & e)) {
                let t = (7 & e) << 18 | (63 & i[s++]) << 12 | (63 & i[s++]) << 6 | 63 & i[s++];
                t > 65535 && (t -= 65536,
                    o.push(t >>> 10 & 1023 | 55296),
                    t = 56320 | 1023 & t),
                    o.push(t)
            } else
                o.push(e);
            o.length >= 4096 && (t += H.apply(String, o),
                o.length = 0)
        }
        return o.length > 0 && (t += H.apply(String, o)),
            t
    }
    function L(e) {
        let t = new Array(e);
        for (let n = 0; n < e; n++)
            t[n] = D();
        return p.freezeData ? Object.freeze(t) : t
    }
    function j(e) {
        if (p.mapsAsObjects) {
            let t = {};
            for (let n = 0; n < e; n++) {
                let e = W();
                "__proto__" === e && (e = "__proto_"),
                    t[e] = D()
            }
            return t
        }
        {
            let t = new Map;
            for (let n = 0; n < e; n++)
                t.set(D(), D());
            return t
        }
    }
    var H = String.fromCharCode;
    function Y(e) {
        let t = s
            , n = new Array(e);
        for (let r = 0; r < e; r++) {
            const e = i[s++];
            if ((128 & e) > 0)
                return void (s = t);
            n[r] = e
        }
        return H.apply(String, n)
    }
    function V(e) {
        if (e < 4) {
            if (e < 2) {
                if (0 === e)
                    return "";
                {
                    let e = i[s++];
                    return (128 & e) > 1 ? void (s -= 1) : H(e)
                }
            }
            {
                let t = i[s++]
                    , n = i[s++];
                if ((128 & t) > 0 || (128 & n) > 0)
                    return void (s -= 2);
                if (e < 3)
                    return H(t, n);
                let r = i[s++];
                return (128 & r) > 0 ? void (s -= 3) : H(t, n, r)
            }
        }
        {
            let t = i[s++]
                , n = i[s++]
                , r = i[s++]
                , o = i[s++];
            if ((128 & t) > 0 || (128 & n) > 0 || (128 & r) > 0 || (128 & o) > 0)
                return void (s -= 4);
            if (e < 6) {
                if (4 === e)
                    return H(t, n, r, o);
                {
                    let e = i[s++];
                    return (128 & e) > 0 ? void (s -= 5) : H(t, n, r, o, e)
                }
            }
            if (e < 8) {
                let a = i[s++]
                    , c = i[s++];
                if ((128 & a) > 0 || (128 & c) > 0)
                    return void (s -= 6);
                if (e < 7)
                    return H(t, n, r, o, a, c);
                let u = i[s++];
                return (128 & u) > 0 ? void (s -= 7) : H(t, n, r, o, a, c, u)
            }
            {
                let a = i[s++]
                    , c = i[s++]
                    , u = i[s++]
                    , l = i[s++];
                if ((128 & a) > 0 || (128 & c) > 0 || (128 & u) > 0 || (128 & l) > 0)
                    return void (s -= 8);
                if (e < 10) {
                    if (8 === e)
                        return H(t, n, r, o, a, c, u, l);
                    {
                        let e = i[s++];
                        return (128 & e) > 0 ? void (s -= 9) : H(t, n, r, o, a, c, u, l, e)
                    }
                }
                if (e < 12) {
                    let h = i[s++]
                        , A = i[s++];
                    if ((128 & h) > 0 || (128 & A) > 0)
                        return void (s -= 10);
                    if (e < 11)
                        return H(t, n, r, o, a, c, u, l, h, A);
                    let f = i[s++];
                    return (128 & f) > 0 ? void (s -= 11) : H(t, n, r, o, a, c, u, l, h, A, f)
                }
                {
                    let h = i[s++]
                        , A = i[s++]
                        , f = i[s++]
                        , d = i[s++];
                    if ((128 & h) > 0 || (128 & A) > 0 || (128 & f) > 0 || (128 & d) > 0)
                        return void (s -= 12);
                    if (e < 14) {
                        if (12 === e)
                            return H(t, n, r, o, a, c, u, l, h, A, f, d);
                        {
                            let e = i[s++];
                            return (128 & e) > 0 ? void (s -= 13) : H(t, n, r, o, a, c, u, l, h, A, f, d, e)
                        }
                    }
                    {
                        let g = i[s++]
                            , p = i[s++];
                        if ((128 & g) > 0 || (128 & p) > 0)
                            return void (s -= 14);
                        if (e < 15)
                            return H(t, n, r, o, a, c, u, l, h, A, f, d, g, p);
                        let y = i[s++];
                        return (128 & y) > 0 ? void (s -= 15) : H(t, n, r, o, a, c, u, l, h, A, f, d, g, p, y)
                    }
                }
            }
        }
    }
    function J() {
        let e, t = i[s++];
        if (t < 192)
            e = t - 160;
        else
            switch (t) {
                case 217:
                    e = i[s++];
                    break;
                case 218:
                    e = f.getUint16(s),
                        s += 2;
                    break;
                case 219:
                    e = f.getUint32(s),
                        s += 4;
                    break;
                default:
                    throw new Error("Expected string")
            }
        return G(e)
    }
    function K(e) {
        return p.copyBuffers ? Uint8Array.prototype.slice.call(i, s, s += e) : i.subarray(s, s += e)
    }
    function z(e) {
        let t = i[s++];
        if (v[t]) {
            let n;
            return v[t](i.subarray(s, n = s += e), (e=>{
                    s = e;
                    try {
                        return D()
                    } finally {
                        s = n
                    }
                }
            ))
        }
        throw new Error("Unknown extension type " + t)
    }
    var q = new Array(4096);
    function W() {
        let e = i[s++];
        if (!(e >= 160 && e < 192))
            return s--,
                D().toString();
        if (e -= 160,
        m >= s)
            return l.slice(s - y, (s += e) - y);
        if (!(0 == m && o < 180))
            return R(e);
        let t, n = 4095 & (e << 5 ^ (e > 1 ? f.getUint16(s) : e > 0 ? i[s] : 0)), r = q[n], a = s, c = s + e - 3, u = 0;
        if (r && r.bytes == e) {
            for (; a < c; ) {
                if (t = f.getUint32(a),
                t != r[u++]) {
                    a = 1879048192;
                    break
                }
                a += 4
            }
            for (c += 3; a < c; )
                if (t = i[a++],
                t != r[u++]) {
                    a = 1879048192;
                    break
                }
            if (a === c)
                return s = a,
                    r.string;
            c -= 3,
                a = s
        }
        for (r = [],
                 q[n] = r,
                 r.bytes = e; a < c; )
            t = f.getUint32(a),
                r.push(t),
                a += 4;
        for (c += 3; a < c; )
            t = i[a++],
                r.push(t);
        let h = e < 16 ? V(e) : Y(e);
        return r.string = null != h ? h : R(e)
    }
    const Z = (e,t)=>{
            let n = D().map((e=>e.toString()))
                , r = e;
            void 0 !== t && (e = e < 32 ? -((t << 5) + e) : (t << 5) + e,
                n.highByte = t);
            let i = u[e];
            return i && (i.isShared || C) && ((u.restoreStructures || (u.restoreStructures = []))[e] = i),
                u[e] = n,
                n.read = M(n, r),
                n.read()
        }
    ;
    v[0] = ()=>{}
        ,
        v[0].noBuffer = !0;
    let X = {
        Error: Error,
        TypeError: TypeError,
        ReferenceError: ReferenceError
    };
    v[101] = ()=>{
        let e = D();
        return (X[e[0]] || Error)(e[1])
    }
        ,
        v[105] = e=>{
            let t = f.getUint32(s - 4);
            A || (A = new Map);
            let n, r = i[s];
            n = r >= 144 && r < 160 || 220 == r || 221 == r ? [] : {};
            let o = {
                target: n
            };
            A.set(t, o);
            let a = D();
            return o.used ? Object.assign(n, a) : (o.target = a,
                a)
        }
        ,
        v[112] = e=>{
            let t = f.getUint32(s - 4)
                , n = A.get(t);
            return n.used = !0,
                n.target
        }
        ,
        v[115] = ()=>new Set(D());
    const $ = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map((e=>e + "Array"));
    let ee = "object" === typeof globalThis ? globalThis : window;
    v[116] = e=>{
        let t = e[0]
            , n = $[t];
        if (!n)
            throw new Error("Could not find typed array for code " + t);
        return new ee[n](Uint8Array.prototype.slice.call(e, 1).buffer)
    }
        ,
        v[120] = ()=>{
            let e = D();
            return new RegExp(e[0],e[1])
        }
    ;
    const te = [];
    function ne(e) {
        B && B();
        let t = o
            , n = s
            , r = g
            , a = y
            , c = m
            , v = l
            , b = d
            , I = A
            , _ = h
            , w = new Uint8Array(i.slice(0, o))
            , E = u
            , k = u.slice(0, u.length)
            , Q = p
            , S = C
            , x = e();
        return o = t,
            s = n,
            g = r,
            y = a,
            m = c,
            l = v,
            d = b,
            A = I,
            h = _,
            i = w,
            C = S,
            (u = E).splice(0, u.length, ...k),
            p = Q,
            f = new DataView(i.buffer,i.byteOffset,i.byteLength),
            x
    }
    function re() {
        i = null,
            A = null,
            u = null
    }
    v[98] = e=>{
        let t = (e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3]
            , n = s;
        return s += t - e.length,
            h = te,
            (h = [J(), J()]).position0 = 0,
            h.position1 = 0,
            h.postBundlePosition = s,
            s = n,
            D()
    }
        ,
        v[255] = e=>4 == e.length ? new Date(1e3 * (16777216 * e[0] + (e[1] << 16) + (e[2] << 8) + e[3])) : 8 == e.length ? new Date(((e[0] << 22) + (e[1] << 14) + (e[2] << 6) + (e[3] >> 2)) / 1e6 + 1e3 * (4294967296 * (3 & e[3]) + 16777216 * e[4] + (e[5] << 16) + (e[6] << 8) + e[7])) : 12 == e.length ? new Date(((e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3]) / 1e6 + 1e3 * ((128 & e[4] ? -281474976710656 : 0) + 1099511627776 * e[6] + 4294967296 * e[7] + 16777216 * e[8] + (e[9] << 16) + (e[10] << 8) + e[11])) : new Date("invalid");
    const ie = new Array(147);
    for (let Ge = 0; Ge < 256; Ge++)
        ie[Ge] = +("1e" + Math.floor(45.15 - .30103 * Ge));
    var oe = new Q({
        useRecords: !1
    });
    oe.unpack,
        oe.unpackMultiple,
        oe.unpack;
    let ae = new Float32Array(1);
    new Uint8Array(ae.buffer,0,4);
    var se = Buffer;
    let ce, ue, le;
    try {
        ce = new TextEncoder
    } catch (Oe) {}
    const he = "undefined" !== typeof se
        , Ae = he ? function(e) {
            return se.allocUnsafeSlow(e)
        }
        : Uint8Array
        , fe = he ? se : Uint8Array
        , de = he ? 4294967296 : 2144337920;
    let ge, pe, ye, me, ve, be = 0, Ie = null;
    const _e = /[\u0080-\uFFFF]/
        , we = Symbol("record-id");
    class Ee extends Q {
        constructor(e) {
            let t, n, r, i;
            super(e),
                this.offset = 0;
            let o = fe.prototype.utf8Write ? function(e, t) {
                    return ge.utf8Write(e, t, 4294967295)
                }
                : !(!ce || !ce.encodeInto) && function(e, t) {
                return ce.encodeInto(e, ge.subarray(t)).written
            }
                , a = this;
            e || (e = {});
            let s = e && e.sequential
                , c = e.structures || e.saveStructures
                , u = e.maxSharedStructures;
            if (null == u && (u = c ? 32 : 0),
            u > 8160)
                throw new Error("Maximum maxSharedStructure is 8160");
            e.structuredClone && void 0 == e.moreTypes && (this.moreTypes = !0);
            let l = e.maxOwnStructures;
            null == l && (l = c ? 32 : 64),
            this.structures || 0 == e.useRecords || (this.structures = []);
            let h = u > 32 || l + u > 64
                , A = u + 64
                , f = u + l + 64;
            if (f > 8256)
                throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
            let d = []
                , g = 0
                , p = 0;
            this.pack = this.encode = function(e, o) {
                if (ge || (ge = new Ae(8192),
                    ye = ge.dataView || (ge.dataView = new DataView(ge.buffer,0,8192)),
                    be = 0),
                    me = ge.length - 10,
                    me - be < 2048 ? (ge = new Ae(ge.length),
                        ye = ge.dataView || (ge.dataView = new DataView(ge.buffer,0,ge.length)),
                        me = ge.length - 10,
                        be = 0) : be = be + 7 & 2147483640,
                    t = be,
                o & Ue && (be += 255 & o),
                    i = a.structuredClone ? new Map : null,
                    a.bundleStrings && "string" !== typeof e ? (Ie = [],
                        Ie.size = 1 / 0) : Ie = null,
                    r = a.structures,
                    r) {
                    r.uninitialized && (r = a._mergeStructures(a.getStructures()));
                    let e = r.sharedLength || 0;
                    if (e > u)
                        throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + r.sharedLength);
                    if (!r.transitions) {
                        r.transitions = Object.create(null);
                        for (let t = 0; t < e; t++) {
                            let e = r[t];
                            if (!e)
                                continue;
                            let n, i = r.transitions;
                            for (let t = 0, r = e.length; t < r; t++) {
                                let r = e[t];
                                n = i[r],
                                n || (n = i[r] = Object.create(null)),
                                    i = n
                            }
                            i[we] = t + 64
                        }
                        this.lastNamedStructuresLength = e
                    }
                    s || (r.nextId = e + 64)
                }
                n && (n = !1);
                try {
                    a.randomAccessStructure && e && e.constructor && e.constructor === Object ? k(e) : v(e);
                    let s = Ie;
                    if (Ie && Qe(t, v, 0),
                    i && i.idsToInsert) {
                        let e = i.idsToInsert.sort(((e,t)=>e.offset > t.offset ? 1 : -1))
                            , n = e.length
                            , r = -1;
                        for (; s && n > 0; ) {
                            let i = e[--n].offset + t;
                            i < s.stringsPosition + t && -1 === r && (r = 0),
                                i > s.position + t ? r >= 0 && (r += 6) : (r >= 0 && (ye.setUint32(s.position + t, ye.getUint32(s.position + t) + r),
                                    r = -1),
                                    s = s.previous,
                                    n++)
                        }
                        r >= 0 && s && ye.setUint32(s.position + t, ye.getUint32(s.position + t) + r),
                            be += 6 * e.length,
                        be > me && E(be),
                            a.offset = be;
                        let o = function(e, t) {
                            let n, r = 6 * t.length, i = e.length - r;
                            for (; n = t.pop(); ) {
                                let t = n.offset
                                    , o = n.id;
                                e.copyWithin(t + r, t, i),
                                    r -= 6;
                                let a = t + r;
                                e[a++] = 214,
                                    e[a++] = 105,
                                    e[a++] = o >> 24,
                                    e[a++] = o >> 16 & 255,
                                    e[a++] = o >> 8 & 255,
                                    e[a++] = 255 & o,
                                    i = t
                            }
                            return e
                        }(ge.subarray(t, be), e);
                        return i = null,
                            o
                    }
                    return a.offset = be,
                        o & Re ? (ge.start = t,
                            ge.end = be,
                            ge) : ge.subarray(t, be)
                } finally {
                    if (r && (y(),
                    n && a.saveStructures)) {
                        let n = r.sharedLength || 0
                            , i = ge.subarray(t, be)
                            , s = xe(r, a);
                        return !1 === a.saveStructures(s, s.isCompatible) ? a.pack(e, o) : (a.lastNamedStructuresLength = n,
                            i)
                    }
                    o & Fe && (be = t)
                }
            }
            ;
            const y = ()=>{
                p < 10 && p++;
                let e = r.sharedLength || 0;
                if (r.length > e && !s && (r.length = e),
                g > 1e4)
                    r.transitions = null,
                        p = 0,
                        g = 0,
                    d.length > 0 && (d = []);
                else if (d.length > 0 && !s) {
                    for (let e = 0, t = d.length; e < t; e++)
                        d[e][we] = 0;
                    d = []
                }
            }
                , m = e=>{
                var t = e.length;
                t < 16 ? ge[be++] = 144 | t : t < 65536 ? (ge[be++] = 220,
                    ge[be++] = t >> 8,
                    ge[be++] = 255 & t) : (ge[be++] = 221,
                    ye.setUint32(be, t),
                    be += 4);
                for (let n = 0; n < t; n++)
                    v(e[n])
            }
                , v = e=>{
                be > me && (ge = E(be));
                var n, r = typeof e;
                if ("string" === r) {
                    let r, i = e.length;
                    if (Ie && i >= 4 && i < 4096) {
                        if ((Ie.size += i) > 21760) {
                            let e, n, r = (Ie[0] ? 3 * Ie[0].length + Ie[1].length : 0) + 10;
                            be + r > me && (ge = E(be + r)),
                                Ie.position ? (n = Ie,
                                    ge[be] = 200,
                                    be += 3,
                                    ge[be++] = 98,
                                    e = be - t,
                                    be += 4,
                                    Qe(t, v, 0),
                                    ye.setUint16(e + t - 3, be - t - e)) : (ge[be++] = 214,
                                    ge[be++] = 98,
                                    e = be - t,
                                    be += 4),
                                Ie = ["", ""],
                                Ie.previous = n,
                                Ie.size = 0,
                                Ie.position = e
                        }
                        let n = _e.test(e);
                        return Ie[n ? 0 : 1] += e,
                            ge[be++] = 193,
                            void v(n ? -i : i)
                    }
                    r = i < 32 ? 1 : i < 256 ? 2 : i < 65536 ? 3 : 5;
                    let a = 3 * i;
                    if (be + a > me && (ge = E(be + a)),
                    i < 64 || !o) {
                        let t, o, a, s = be + r;
                        for (t = 0; t < i; t++)
                            o = e.charCodeAt(t),
                                o < 128 ? ge[s++] = o : o < 2048 ? (ge[s++] = o >> 6 | 192,
                                    ge[s++] = 63 & o | 128) : 55296 === (64512 & o) && 56320 === (64512 & (a = e.charCodeAt(t + 1))) ? (o = 65536 + ((1023 & o) << 10) + (1023 & a),
                                    t++,
                                    ge[s++] = o >> 18 | 240,
                                    ge[s++] = o >> 12 & 63 | 128,
                                    ge[s++] = o >> 6 & 63 | 128,
                                    ge[s++] = 63 & o | 128) : (ge[s++] = o >> 12 | 224,
                                    ge[s++] = o >> 6 & 63 | 128,
                                    ge[s++] = 63 & o | 128);
                        n = s - be - r
                    } else
                        n = o(e, be + r);
                    n < 32 ? ge[be++] = 160 | n : n < 256 ? (r < 2 && ge.copyWithin(be + 2, be + 1, be + 1 + n),
                        ge[be++] = 217,
                        ge[be++] = n) : n < 65536 ? (r < 3 && ge.copyWithin(be + 3, be + 2, be + 2 + n),
                        ge[be++] = 218,
                        ge[be++] = n >> 8,
                        ge[be++] = 255 & n) : (r < 5 && ge.copyWithin(be + 5, be + 3, be + 3 + n),
                        ge[be++] = 219,
                        ye.setUint32(be, n),
                        be += 4),
                        be += n
                } else if ("number" === r)
                    if (e >>> 0 === e)
                        e < 32 || e < 128 && !1 === this.useRecords || e < 64 && !this.randomAccessStructure ? ge[be++] = e : e < 256 ? (ge[be++] = 204,
                            ge[be++] = e) : e < 65536 ? (ge[be++] = 205,
                            ge[be++] = e >> 8,
                            ge[be++] = 255 & e) : (ge[be++] = 206,
                            ye.setUint32(be, e),
                            be += 4);
                    else if (e >> 0 === e)
                        e >= -32 ? ge[be++] = 256 + e : e >= -128 ? (ge[be++] = 208,
                            ge[be++] = e + 256) : e >= -32768 ? (ge[be++] = 209,
                            ye.setInt16(be, e),
                            be += 2) : (ge[be++] = 210,
                            ye.setInt32(be, e),
                            be += 4);
                    else {
                        let t;
                        if ((t = this.useFloat32) > 0 && e < 4294967296 && e >= -2147483648) {
                            let n;
                            if (ge[be++] = 202,
                                ye.setFloat32(be, e),
                            t < 4 || (n = e * ie[(127 & ge[be]) << 1 | ge[be + 1] >> 7]) >> 0 === n)
                                return void (be += 4);
                            be--
                        }
                        ge[be++] = 203,
                            ye.setFloat64(be, e),
                            be += 8
                    }
                else if ("object" === r || "function" === r)
                    if (e) {
                        if (i) {
                            let n = i.get(e);
                            if (n) {
                                if (!n.id) {
                                    let e = i.idsToInsert || (i.idsToInsert = []);
                                    n.id = e.push(n)
                                }
                                return ge[be++] = 214,
                                    ge[be++] = 112,
                                    ye.setUint32(be, n.id),
                                    void (be += 4)
                            }
                            i.set(e, {
                                offset: be - t
                            })
                        }
                        let o = e.constructor;
                        if (o === Object)
                            w(e, !0);
                        else if (o === Array)
                            m(e);
                        else if (o === Map)
                            if (this.mapAsEmptyObject)
                                ge[be++] = 128;
                            else {
                                (n = e.size) < 16 ? ge[be++] = 128 | n : n < 65536 ? (ge[be++] = 222,
                                    ge[be++] = n >> 8,
                                    ge[be++] = 255 & n) : (ge[be++] = 223,
                                    ye.setUint32(be, n),
                                    be += 4);
                                for (let[t,n] of e)
                                    v(t),
                                        v(n)
                            }
                        else {
                            for (let t = 0, n = ue.length; t < n; t++) {
                                if (e instanceof le[t]) {
                                    let n = ue[t];
                                    if (n.write) {
                                        n.type && (ge[be++] = 212,
                                            ge[be++] = n.type,
                                            ge[be++] = 0);
                                        let t = n.write.call(this, e);
                                        return void (t === e ? Array.isArray(e) ? m(e) : w(e) : v(t))
                                    }
                                    let r, i = ge, o = ye, a = be;
                                    ge = null;
                                    try {
                                        r = n.pack.call(this, e, (e=>(ge = i,
                                            i = null,
                                            be += e,
                                        be > me && E(be),
                                            {
                                                target: ge,
                                                targetView: ye,
                                                position: be - e
                                            })), v)
                                    } finally {
                                        i && (ge = i,
                                            ye = o,
                                            be = a,
                                            me = ge.length - 10)
                                    }
                                    return void (r && (r.length + be > me && E(r.length + be),
                                        be = ke(r, ge, be, n.type)))
                                }
                            }
                            if (Array.isArray(e))
                                m(e);
                            else {
                                if (e.toJSON) {
                                    const t = e.toJSON();
                                    if (t !== e)
                                        return v(t)
                                }
                                if ("function" === r)
                                    return v(this.writeFunction && this.writeFunction(e));
                                w(e, !e.hasOwnProperty)
                            }
                        }
                    } else
                        ge[be++] = 192;
                else if ("boolean" === r)
                    ge[be++] = e ? 195 : 194;
                else if ("bigint" === r) {
                    if (e < BigInt(1) << BigInt(63) && e >= -(BigInt(1) << BigInt(63)))
                        ge[be++] = 211,
                            ye.setBigInt64(be, e);
                    else if (e < BigInt(1) << BigInt(64) && e > 0)
                        ge[be++] = 207,
                            ye.setBigUint64(be, e);
                    else {
                        if (!this.largeBigIntToFloat)
                            throw new RangeError(e + " was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");
                        ge[be++] = 203,
                            ye.setFloat64(be, Number(e))
                    }
                    be += 8
                } else {
                    if ("undefined" !== r)
                        throw new Error("Unknown type: " + r);
                    this.encodeUndefinedAsNil ? ge[be++] = 192 : (ge[be++] = 212,
                        ge[be++] = 0,
                        ge[be++] = 0)
                }
            }
                , b = this.variableMapSize || this.coercibleKeyAsNumber ? e=>{
                    let t, n = Object.keys(e), r = n.length;
                    if (r < 16 ? ge[be++] = 128 | r : r < 65536 ? (ge[be++] = 222,
                        ge[be++] = r >> 8,
                        ge[be++] = 255 & r) : (ge[be++] = 223,
                        ye.setUint32(be, r),
                        be += 4),
                        this.coercibleKeyAsNumber)
                        for (let i = 0; i < r; i++) {
                            t = n[i];
                            let r = Number(t);
                            v(isNaN(r) ? t : r),
                                v(e[t])
                        }
                    else
                        for (let i = 0; i < r; i++)
                            v(t = n[i]),
                                v(e[t])
                }
                : (e,n)=>{
                    ge[be++] = 222;
                    let r = be - t;
                    be += 2;
                    let i = 0;
                    for (let t in e)
                        (n || e.hasOwnProperty(t)) && (v(t),
                            v(e[t]),
                            i++);
                    ge[r++ + t] = i >> 8,
                        ge[r + t] = 255 & i
                }
                , I = !1 === this.useRecords ? b : e.progressiveRecords && !h ? (e,n)=>{
                    let i, o, a = r.transitions || (r.transitions = Object.create(null)), s = be++ - t;
                    for (let c in e)
                        if (n || e.hasOwnProperty(c)) {
                            if (i = a[c],
                                i)
                                a = i;
                            else {
                                let n = Object.keys(e)
                                    , u = a;
                                a = r.transitions;
                                let l = 0;
                                for (let e = 0, t = n.length; e < t; e++) {
                                    let t = n[e];
                                    i = a[t],
                                    i || (i = a[t] = Object.create(null),
                                        l++),
                                        a = i
                                }
                                s + t + 1 == be ? (be--,
                                    B(a, n, l)) : C(a, n, s, l),
                                    o = !0,
                                    a = u[c]
                            }
                            v(e[c])
                        }
                    if (!o) {
                        let n = a[we];
                        n ? ge[s + t] = n : C(a, Object.keys(e), s, 0)
                    }
                }
                : (e,t)=>{
                    let n, i = r.transitions || (r.transitions = Object.create(null)), o = 0;
                    for (let r in e)
                        (t || e.hasOwnProperty(r)) && (n = i[r],
                        n || (n = i[r] = Object.create(null),
                            o++),
                            i = n);
                    let a = i[we];
                    a ? a >= 96 && h ? (ge[be++] = 96 + (31 & (a -= 96)),
                        ge[be++] = a >> 5) : ge[be++] = a : B(i, i.__keys__ || Object.keys(e), o);
                    for (let r in e)
                        (t || e.hasOwnProperty(r)) && v(e[r])
                }
                , _ = "function" == typeof this.useRecords && this.useRecords
                , w = _ ? (e,t)=>{
                    _(e) ? I(e, t) : b(e, t)
                }
                : I
                , E = e=>{
                let n;
                if (e > 16777216) {
                    if (e - t > de)
                        throw new Error("Packed buffer would be larger than maximum buffer size");
                    n = Math.min(de, 4096 * Math.round(Math.max((e - t) * (e > 67108864 ? 1.25 : 2), 4194304) / 4096))
                } else
                    n = 1 + (Math.max(e - t << 2, ge.length - 1) >> 12) << 12;
                let r = new Ae(n);
                return ye = r.dataView || (r.dataView = new DataView(r.buffer,0,n)),
                    e = Math.min(e, ge.length),
                    ge.copy ? ge.copy(r, 0, t, e) : r.set(ge.slice(t, e)),
                    be -= t,
                    t = 0,
                    me = r.length - 10,
                    ge = r
            }
                , B = (e,t,i)=>{
                let o = r.nextId;
                o || (o = 64),
                    o < A && this.shouldShareStructure && !this.shouldShareStructure(t) ? (o = r.nextOwnId,
                    o < f || (o = A),
                        r.nextOwnId = o + 1) : (o >= f && (o = A),
                        r.nextId = o + 1);
                let a = t.highByte = o >= 96 && h ? o - 96 >> 5 : -1;
                e[we] = o,
                    e.__keys__ = t,
                    r[o - 64] = t,
                    o < A ? (t.isShared = !0,
                        r.sharedLength = o - 63,
                        n = !0,
                        a >= 0 ? (ge[be++] = 96 + (31 & o),
                            ge[be++] = a) : ge[be++] = o) : (a >= 0 ? (ge[be++] = 213,
                        ge[be++] = 114,
                        ge[be++] = 96 + (31 & o),
                        ge[be++] = a) : (ge[be++] = 212,
                        ge[be++] = 114,
                        ge[be++] = o),
                    i && (g += p * i),
                    d.length >= l && (d.shift()[we] = 0),
                        d.push(e),
                        v(t))
            }
                , C = (e,n,r,i)=>{
                let o = ge
                    , a = be
                    , s = me
                    , c = t;
                ge = pe,
                    be = 0,
                    t = 0,
                ge || (pe = ge = new Ae(8192)),
                    me = ge.length - 10,
                    B(e, n, i),
                    pe = ge;
                let u = be;
                if (ge = o,
                    be = a,
                    me = s,
                    t = c,
                u > 1) {
                    let e = be + u - 1;
                    e > me && E(e);
                    let n = r + t;
                    ge.copyWithin(n + u, n + 1, be),
                        ge.set(pe.slice(0, u), n),
                        be = e
                } else
                    ge[r + t] = pe[0]
            }
                , k = (e,i)=>{
                let o = ve(e, ge, t, be, r, E, ((e,t,r)=>{
                        if (r)
                            return n = !0;
                        be = t;
                        let i = ge;
                        return v(e),
                            y(),
                            i !== ge ? {
                                position: be,
                                targetView: ye,
                                target: ge
                            } : be
                    }
                ), this);
                if (0 === o)
                    return w(e, !0);
                be = o
            }
        }
        useBuffer(e) {
            ge = e,
                ye = new DataView(ge.buffer,ge.byteOffset,ge.byteLength),
                be = 0
        }
        clearSharedData() {
            this.structures && (this.structures = []),
            this.typedStructs && (this.typedStructs = [])
        }
    }
    function Be(e, t, n, r) {
        let i = e.byteLength;
        if (i + 1 < 256) {
            var {target: o, position: a} = n(4 + i);
            o[a++] = 199,
                o[a++] = i + 1
        } else if (i + 1 < 65536) {
            var {target: o, position: a} = n(5 + i);
            o[a++] = 200,
                o[a++] = i + 1 >> 8,
                o[a++] = i + 1 & 255
        } else {
            var {target: o, position: a, targetView: s} = n(7 + i);
            o[a++] = 201,
                s.setUint32(a, i + 1),
                a += 4
        }
        o[a++] = 116,
            o[a++] = t,
            o.set(new Uint8Array(e.buffer,e.byteOffset,e.byteLength), a)
    }
    function Ce(e, t) {
        let n = e.byteLength;
        var r, i;
        if (n < 256) {
            var {target: r, position: i} = t(n + 2);
            r[i++] = 196,
                r[i++] = n
        } else if (n < 65536) {
            var {target: r, position: i} = t(n + 3);
            r[i++] = 197,
                r[i++] = n >> 8,
                r[i++] = 255 & n
        } else {
            var {target: r, position: i, targetView: o} = t(n + 5);
            r[i++] = 198,
                o.setUint32(i, n),
                i += 4
        }
        r.set(e, i)
    }
    function ke(e, t, n, r) {
        let i = e.length;
        switch (i) {
            case 1:
                t[n++] = 212;
                break;
            case 2:
                t[n++] = 213;
                break;
            case 4:
                t[n++] = 214;
                break;
            case 8:
                t[n++] = 215;
                break;
            case 16:
                t[n++] = 216;
                break;
            default:
                i < 256 ? (t[n++] = 199,
                    t[n++] = i) : i < 65536 ? (t[n++] = 200,
                    t[n++] = i >> 8,
                    t[n++] = 255 & i) : (t[n++] = 201,
                    t[n++] = i >> 24,
                    t[n++] = i >> 16 & 255,
                    t[n++] = i >> 8 & 255,
                    t[n++] = 255 & i)
        }
        return t[n++] = r,
            t.set(e, n),
            n += i
    }
    function Qe(e, t, n) {
        if (Ie.length > 0) {
            ye.setUint32(Ie.position + e, be + n - Ie.position - e),
                Ie.stringsPosition = be - e;
            let r = Ie;
            Ie = null,
                t(r[0]),
                t(r[1])
        }
    }
    function Se(e) {
        if (e.Class) {
            if (!e.pack && !e.write)
                throw new Error("Extension has no pack or write function");
            if (e.pack && !e.type)
                throw new Error("Extension has no type (numeric code to identify the extension)");
            le.unshift(e.Class),
                ue.unshift(e)
        }
        !function(e) {
            e.unpack ? v[e.type] = e.unpack : v[e.type] = e
        }(e)
    }
    function xe(e, t) {
        return e.isCompatible = e=>{
            let n = !e || (t.lastNamedStructuresLength || 0) === e.length;
            return n || t._mergeStructures(e),
                n
        }
            ,
            e
    }
    le = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, I],
        ue = [{
            pack(e, t, n) {
                let r = e.getTime() / 1e3;
                if ((this.useTimestamp32 || 0 === e.getMilliseconds()) && r >= 0 && r < 4294967296) {
                    let {target: e, targetView: n, position: i} = t(6);
                    e[i++] = 214,
                        e[i++] = 255,
                        n.setUint32(i, r)
                } else if (r > 0 && r < 4294967296) {
                    let {target: n, targetView: i, position: o} = t(10);
                    n[o++] = 215,
                        n[o++] = 255,
                        i.setUint32(o, 4e6 * e.getMilliseconds() + (r / 1e3 / 4294967296 >> 0)),
                        i.setUint32(o + 4, r)
                } else if (isNaN(r)) {
                    if (this.onInvalidDate)
                        return t(0),
                            n(this.onInvalidDate());
                    let {target: e, targetView: r, position: i} = t(3);
                    e[i++] = 212,
                        e[i++] = 255,
                        e[i++] = 255
                } else {
                    let {target: n, targetView: i, position: o} = t(15);
                    n[o++] = 199,
                        n[o++] = 12,
                        n[o++] = 255,
                        i.setUint32(o, 1e6 * e.getMilliseconds()),
                        i.setBigInt64(o + 4, BigInt(Math.floor(r)))
                }
            }
        }, {
            pack(e, t, n) {
                if (this.setAsEmptyObject)
                    return t(0),
                        n({});
                let r = Array.from(e)
                    , {target: i, position: o} = t(this.moreTypes ? 3 : 0);
                this.moreTypes && (i[o++] = 212,
                    i[o++] = 115,
                    i[o++] = 0),
                    n(r)
            }
        }, {
            pack(e, t, n) {
                let {target: r, position: i} = t(this.moreTypes ? 3 : 0);
                this.moreTypes && (r[i++] = 212,
                    r[i++] = 101,
                    r[i++] = 0),
                    n([e.name, e.message])
            }
        }, {
            pack(e, t, n) {
                let {target: r, position: i} = t(this.moreTypes ? 3 : 0);
                this.moreTypes && (r[i++] = 212,
                    r[i++] = 120,
                    r[i++] = 0),
                    n([e.source, e.flags])
            }
        }, {
            pack(e, t) {
                this.moreTypes ? Be(e, 16, t) : Ce(he ? se.from(e) : new Uint8Array(e), t)
            }
        }, {
            pack(e, t) {
                let n = e.constructor;
                n !== fe && this.moreTypes ? Be(e, $.indexOf(n.name), t) : Ce(e, t)
            }
        }, {
            pack(e, t) {
                let {target: n, position: r} = t(1);
                n[r] = 193
            }
        }];
    let De = new Ee({
        useRecords: !1
    });
    De.pack,
        De.pack;
    const {NEVER: Te, ALWAYS: Me, DECIMAL_ROUND: Pe, DECIMAL_FIT: Ne} = {
        NEVER: 0,
        ALWAYS: 1,
        DECIMAL_ROUND: 3,
        DECIMAL_FIT: 4
    }
        , Re = 512
        , Fe = 1024
        , Ue = 2048;
    // n(89456).Buffer
}