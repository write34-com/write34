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

  // Properties are exported because `t` is passed by reference
  mergeProperties(t, {
    MessagePackEncoder: function () {
      return MessagePackEncoder;
    },
    MessageUnpacker: function () {
      // This gets called with these args:
      /*
      {
          bundleStrings: !0,
          moreTypes: !0,
          structuredClone: !1
      }
       */
      // Code to deserialize the document:
      /*
      if (e) {
        var t = new a.SY({
            bundleStrings: !0,
            moreTypes: !0,
            structuredClone: !1
        });
        try {
            // I is most likely "Buffer"
            return t.unpack(I.from(e, "base64"))
        } catch (n) {
            throw (0,
            f.H)(n, !0, "failed deserializing document"),
            n
        }
    }
       */
      return MessageUnpacker;
    },
    addSerializationHandler: function () {
      return addSerializationHandler;
    }
  });

  var maybeTextDecoder;
  var i;
  var o;
  // var a = n(89456).Buffer;
  const bufferConstructor = Buffer;
  try {
    maybeTextDecoder = new TextDecoder();
  } catch (Oe) {}
  var s = 0;
  const c = [];
  var structures;
  var l;
  var h;
  var A;
  var f;
  var d = c;
  var g = 0;
  var p = {};
  var y = 0;
  var m = 0;
  var v = [];
  var maybeMessagePackUnpackArgs = {
    useRecords: false,
    mapsAsObjects: true
  };
  class I {}
  const _ = new I();
  _.name = "MessagePack 0xC1";
  var w;
  var E;
  var B;
  var C = false;
  var k = 2;
  try {
    new Function("");
  } catch (Oe) {
    k = Infinity;
  }
  class MessageUnpacker {
    constructor(constructorArgs) {
      if (constructorArgs) {
        if (constructorArgs.useRecords === false && constructorArgs.mapsAsObjects === undefined) {
          constructorArgs.mapsAsObjects = true;
        }
        if (constructorArgs.sequential && constructorArgs.trusted !== false) {
          constructorArgs.trusted = true;
          if (!constructorArgs.structures && constructorArgs.useRecords != 0) {
            constructorArgs.structures = [];
            constructorArgs.maxSharedStructures ||= 0;
          }
        }
        if (constructorArgs.structures) {
          constructorArgs.structures.sharedLength = constructorArgs.structures.length;
        } else if (constructorArgs.getStructures) {
          (constructorArgs.structures = []).uninitialized = true;
          constructorArgs.structures.sharedLength = 0;
        }
        if (constructorArgs.int64AsNumber) {
          constructorArgs.int64AsType = "number";
        }
      }
      Object.assign(this, constructorArgs);
    }
    unpack(uintArrayOrBuffer, t) {
      if (i) {
        return preserveStateAndExecute(() => {
          re();
          if (this) {
            return this.unpack(uintArrayOrBuffer, t);
          } else {
            return MessageUnpacker.prototype.unpack.call(maybeMessagePackUnpackArgs, uintArrayOrBuffer, t);
          }
        });
      }
      if (!uintArrayOrBuffer.buffer && uintArrayOrBuffer.constructor === ArrayBuffer) {
        uintArrayOrBuffer = typeof bufferConstructor !== "undefined" ? bufferConstructor.from(uintArrayOrBuffer) : new Uint8Array(uintArrayOrBuffer);
      }
      if (typeof t === "object") {
        o = t.end || uintArrayOrBuffer.length;
        s = t.start || 0;
      } else {
        s = 0;
        o = t > -1 ? t : uintArrayOrBuffer.length;
      }
      g = 0;
      m = 0;
      l = null;
      d = c;
      h = null;
      i = uintArrayOrBuffer;
      try {
        f = uintArrayOrBuffer.dataView ||= new DataView(uintArrayOrBuffer.buffer, uintArrayOrBuffer.byteOffset, uintArrayOrBuffer.byteLength);
      } catch (Oe) {
        i = null;
        if (uintArrayOrBuffer instanceof Uint8Array) {
          throw Oe;
        }
        throw new Error("Source must be a Uint8Array or Buffer but was a " + (uintArrayOrBuffer && typeof uintArrayOrBuffer == "object" ? uintArrayOrBuffer.constructor.name : typeof uintArrayOrBuffer));
      }
      if (this instanceof MessageUnpacker) {
        p = this;
        if (this.structures) {
          structures = this.structures;
          return decodeAndValidateData(t);
        }
        if (!structures || structures.length > 0) {
          structures = [];
        }
      } else {
        p = maybeMessagePackUnpackArgs;
        if (!structures || structures.length > 0) {
          structures = [];
        }
      }
      return decodeAndValidateData(t);
    }
    unpackMultiple(e, t) {
      let n;
      let r = 0;
      try {
        C = true;
        let i = e.length;
        let o = this ? this.unpack(e, i) : messageUnpackerInst.unpack(e, i);
        if (!t) {
          for (n = [o]; s < i;) {
            r = s;
            n.push(decodeAndValidateData());
          }
          return n;
        }
        if (t(o, r, s) === false) {
          return;
        }
        while (s < i) {
          r = s;
          if (t(decodeAndValidateData(), r, s) === false) {
            return;
          }
        }
      } catch (Oe) {
        Oe.lastPosition = r;
        Oe.values = n;
        throw Oe;
      } finally {
        C = false;
        re();
      }
    }
    _mergeStructures(e, t) {
      if (E) {
        e = E.call(this, e);
      }
      e = e || [];
      if (Object.isFrozen(e)) {
        e = e.map(e => e.slice(0));
      }
      for (let n = 0, r = e.length; n < r; n++) {
        let t = e[n];
        if (t) {
          t.isShared = true;
          if (n >= 32) {
            t.highByte = n - 32 >> 5;
          }
        }
      }
      e.sharedLength = e.length;
      for (let n in t || []) {
        if (n >= 0) {
          let r = e[n];
          let i = t[n];
          if (i) {
            if (r) {
              (e.restoreStructures ||= [])[n] = r;
            }
            e[n] = i;
          }
        }
      }
      return this.structures = e;
    }
    decode(e, t) {
      return this.unpack(e, t);
    }
  }
  function decodeAndValidateData(e) {
    try {
      if (!p.trusted && !C) {
        let e = structures.sharedLength || 0;
        if (e < structures.length) {
          structures.length = e;
        }
      }
      let t;
      if (p.randomAccessStructure && i[s] < 64 && i[s] >= 32 && w) {
        t = w(i, s, o, p);
        i = null;
        if ((!e || !e.lazy) && !!t) {
          t = t.toJSON();
        }
        s = o;
      } else {
        t = decodeMessagePack();
      }
      if (h) {
        s = h.postBundlePosition;
        h = null;
      }
      if (C) {
        structures.restoreStructures = null;
      }
      if (s == o) {
        if (structures && structures.restoreStructures) {
          restoreAllStructures();
        }
        structures = null;
        i = null;
        A &&= null;
      } else {
        if (s > o) {
          throw new Error("Unexpected end of MessagePack data");
        }
        if (!C) {
          let e;
          try {
            e = JSON.stringify(t, (e, t) => typeof t === "bigint" ? `${t}n` : t).slice(0, 100);
          } catch (Oe) {
            e = "(JSON view not available " + Oe + ")";
          }
          throw new Error("Data read, but end of buffer not reached " + e);
        }
      }
      return t;
    } catch (Oe) {
      if (structures && structures.restoreStructures) {
        restoreAllStructures();
      }
      re();
      if (Oe instanceof RangeError || Oe.message.startsWith("Unexpected end of buffer") || s > o) {
        Oe.incomplete = true;
      }
      throw Oe;
    }
  }
  function restoreAllStructures() {
    for (let e in structures.restoreStructures) {
      structures[e] = structures.restoreStructures[e];
    }
    structures.restoreStructures = null;
  }
  function decodeMessagePack() {
    let e = i[s++];
    if (e < 160) {
      if (e < 128) {
        if (e < 64) {
          return e;
        }
        {
          let t = structures[e & 63] || p.getStructures && retrieveAndMergeStructures()[e & 63];
          if (t) {
            t.read ||= generateObjectReader(t, e & 63);
            return t.read();
          } else {
            return e;
          }
        }
      }
      if (e < 144) {
        e -= 128;
        if (p.mapsAsObjects) {
          let t = {};
          for (let n = 0; n < e; n++) {
            let e = processSerializedString();
            if (e === "__proto__") {
              e = "__proto_";
            }
            t[e] = decodeMessagePack();
          }
          return t;
        }
        {
          let t = new Map();
          for (let n = 0; n < e; n++) {
            t.set(decodeMessagePack(), decodeMessagePack());
          }
          return t;
        }
      }
      {
        e -= 144;
        let t = new Array(e);
        for (let n = 0; n < e; n++) {
          t[n] = decodeMessagePack();
        }
        if (p.freezeData) {
          return Object.freeze(t);
        } else {
          return t;
        }
      }
    }
    if (e < 192) {
      let t = e - 160;
      if (m >= s) {
        return l.slice(s - y, (s += t) - y);
      }
      if (m == 0 && o < 140) {
        let e = t < 16 ? readStringFromBuffer(t) : constructStringFromCharCodeArray(t);
        if (e != null) {
          return e;
        }
      }
      return convertEncodedBytesToString(t);
    }
    {
      let t;
      switch (e) {
        case 192:
          return null;
        case 193:
          if (h) {
            t = decodeMessagePack();
            if (t > 0) {
              return h[1].slice(h.position1, h.position1 += t);
            } else {
              return h[0].slice(h.position0, h.position0 -= t);
            }
          } else {
            return _;
          }
        case 194:
          return false;
        case 195:
          return true;
        case 196:
          t = i[s++];
          if (t === undefined) {
            throw new Error("Unexpected end of buffer");
          }
          return getBufferSegment(t);
        case 197:
          t = f.getUint16(s);
          s += 2;
          return getBufferSegment(t);
        case 198:
          t = f.getUint32(s);
          s += 4;
          return getBufferSegment(t);
        case 199:
          return processExtensionType(i[s++]);
        case 200:
          t = f.getUint16(s);
          s += 2;
          return processExtensionType(t);
        case 201:
          t = f.getUint32(s);
          s += 4;
          return processExtensionType(t);
        case 202:
          t = f.getFloat32(s);
          if (p.useFloat32 > 2) {
            let e = ie[(i[s] & 127) << 1 | i[s + 1] >> 7];
            s += 4;
            return (e * t + (t > 0 ? 0.5 : -0.5) >> 0) / e;
          }
          s += 4;
          return t;
        case 203:
          t = f.getFloat64(s);
          s += 8;
          return t;
        case 204:
          return i[s++];
        case 205:
          t = f.getUint16(s);
          s += 2;
          return t;
        case 206:
          t = f.getUint32(s);
          s += 4;
          return t;
        case 207:
          if (p.int64AsType === "number") {
            t = f.getUint32(s) * 4294967296;
            t += f.getUint32(s + 4);
          } else if (p.int64AsType === "string") {
            t = f.getBigUint64(s).toString();
          } else if (p.int64AsType === "auto") {
            t = f.getBigUint64(s);
            if (t <= BigInt(2) << BigInt(52)) {
              t = Number(t);
            }
          } else {
            t = f.getBigUint64(s);
          }
          s += 8;
          return t;
        case 208:
          return f.getInt8(s++);
        case 209:
          t = f.getInt16(s);
          s += 2;
          return t;
        case 210:
          t = f.getInt32(s);
          s += 4;
          return t;
        case 211:
          if (p.int64AsType === "number") {
            t = f.getInt32(s) * 4294967296;
            t += f.getUint32(s + 4);
          } else if (p.int64AsType === "string") {
            t = f.getBigInt64(s).toString();
          } else if (p.int64AsType === "auto") {
            t = f.getBigInt64(s);
            if (t >= BigInt(-2) << BigInt(52) && t <= BigInt(2) << BigInt(52)) {
              t = Number(t);
            }
          } else {
            t = f.getBigInt64(s);
          }
          s += 8;
          return t;
        case 212:
          t = i[s++];
          if (t == 114) {
            return createAndReadStructure(i[s++] & 63);
          }
        {
          let e = v[t];
          if (e) {
            if (e.read) {
              s++;
              return e.read(decodeMessagePack());
            } else if (e.noBuffer) {
              s++;
              return e();
            } else {
              return e(i.subarray(s, ++s));
            }
          }
          throw new Error("Unknown extension " + t);
        }
        case 213:
          t = i[s];
          if (t == 114) {
            s++;
            return createAndReadStructure(i[s++] & 63, i[s++]);
          } else {
            return processExtensionType(2);
          }
        case 214:
          return processExtensionType(4);
        case 215:
          return processExtensionType(8);
        case 216:
          return processExtensionType(16);
        case 217:
          t = i[s++];
          if (m >= s) {
            return l.slice(s - y, (s += t) - y);
          } else {
            return convertEncodedBytesToString(t);
          }
        case 218:
          t = f.getUint16(s);
          if (m >= (s += 2)) {
            return l.slice(s - y, (s += t) - y);
          } else {
            return convertEncodedBytesToString(t);
          }
        case 219:
          t = f.getUint32(s);
          if (m >= (s += 4)) {
            return l.slice(s - y, (s += t) - y);
          } else {
            return convertEncodedBytesToString(t);
          }
        case 220:
          t = f.getUint16(s);
          s += 2;
          return deserializeToArray(t);
        case 221:
          t = f.getUint32(s);
          s += 4;
          return deserializeToArray(t);
        case 222:
          t = f.getUint16(s);
          s += 2;
          return deserializeToObjectOrMap(t);
        case 223:
          t = f.getUint32(s);
          s += 4;
          return deserializeToObjectOrMap(t);
        default:
          if (e >= 224) {
            return e - 256;
          }
          if (e === undefined) {
            let e = new Error("Unexpected end of MessagePack data");
            e.incomplete = true;
            throw e;
          }
          throw new Error("Unknown MessagePack token " + e);
      }
    }
  }
  const jsIdentifierPattern = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
  function generateObjectReader(e, t) {
    function n() {
      if (n.count++ > k) {
        let n = e.read = new Function("r", "return function(){return " + (p.freezeData ? "Object.freeze" : "") + "({" + e.map(e => e === "__proto__" ? "__proto_:r()" : jsIdentifierPattern.test(e) ? e + ":r()" : "[" + JSON.stringify(e) + "]:r()").join(",") + "})}")(decodeMessagePack);
        if (e.highByte === 0) {
          e.read = generateReadFunction(t, e.read);
        }
        return n();
      }
      let r = {};
      for (let t = 0, n = e.length; t < n; t++) {
        let n = e[t];
        if (n === "__proto__") {
          n = "__proto_";
        }
        r[n] = decodeMessagePack();
      }
      if (p.freezeData) {
        return Object.freeze(r);
      } else {
        return r;
      }
    }
    n.count = 0;
    if (e.highByte === 0) {
      return generateReadFunction(t, n);
    } else {
      return n;
    }
  }
  const generateReadFunction = (e, t) => function () {
    let n = i[s++];
    if (n === 0) {
      return t();
    }
    let r = e < 32 ? -(e + (n << 5)) : e + (n << 5);
    let o = structures[r] || retrieveAndMergeStructures()[r];
    if (!o) {
      throw new Error("Record id is not defined for " + r);
    }
    o.read ||= generateObjectReader(o, e);
    return o.read();
  };
  function retrieveAndMergeStructures() {
    let e = preserveStateAndExecute(() => {
      i = null;
      return p.getStructures();
    });
    return structures = p._mergeStructures(e, structures);
  }
  function convertEncodedBytesToString(e) {
    let t;
    if (e < 16 && (t = readStringFromBuffer(e))) {
      return t;
    }
    if (e > 64 && maybeTextDecoder) {
      return maybeTextDecoder.decode(i.subarray(s, s += e));
    }
    const n = s + e;
    const o = [];
    for (t = ""; s < n;) {
      const e = i[s++];
      if ((e & 128) === 0) {
        o.push(e);
      } else if ((e & 224) === 192) {
        const t = i[s++] & 63;
        o.push((e & 31) << 6 | t);
      } else if ((e & 240) === 224) {
        const t = i[s++] & 63;
        const n = i[s++] & 63;
        o.push((e & 31) << 12 | t << 6 | n);
      } else if ((e & 248) === 240) {
        let t = (e & 7) << 18 | (i[s++] & 63) << 12 | (i[s++] & 63) << 6 | i[s++] & 63;
        if (t > 65535) {
          t -= 65536;
          o.push(t >>> 10 & 1023 | 55296);
          t = t & 1023 | 56320;
        }
        o.push(t);
      } else {
        o.push(e);
      }
      if (o.length >= 4096) {
        t += String.fromCharCode.apply(String, o);
        o.length = 0;
      }
    }
    if (o.length > 0) {
      t += String.fromCharCode.apply(String, o);
    }
    return t;
  }
  function deserializeToArray(e) {
    let t = new Array(e);
    for (let n = 0; n < e; n++) {
      t[n] = decodeMessagePack();
    }
    if (p.freezeData) {
      return Object.freeze(t);
    } else {
      return t;
    }
  }
  function deserializeToObjectOrMap(e) {
    if (p.mapsAsObjects) {
      let t = {};
      for (let n = 0; n < e; n++) {
        let e = processSerializedString();
        if (e === "__proto__") {
          e = "__proto_";
        }
        t[e] = decodeMessagePack();
      }
      return t;
    }
    {
      let t = new Map();
      for (let n = 0; n < e; n++) {
        t.set(decodeMessagePack(), decodeMessagePack());
      }
      return t;
    }
  }
  function constructStringFromCharCodeArray(e) {
    let t = s;
    let n = new Array(e);
    for (let r = 0; r < e; r++) {
      const e = i[s++];
      if ((e & 128) > 0) {
        s = t;
        return;
      }
      n[r] = e;
    }
    return String.fromCharCode.apply(String, n);
  }
  function readStringFromBuffer(e) {
    if (e < 4) {
      if (e < 2) {
        if (e === 0) {
          return "";
        }
        {
          let e = i[s++];
          if ((e & 128) > 1) {
            s -= 1;
            return;
          } else {
            return String.fromCharCode(e);
          }
        }
      }
      {
        let t = i[s++];
        let n = i[s++];
        if ((t & 128) > 0 || (n & 128) > 0) {
          s -= 2;
          return;
        }
        if (e < 3) {
          return String.fromCharCode(t, n);
        }
        let r = i[s++];
        if ((r & 128) > 0) {
          s -= 3;
          return;
        } else {
          return String.fromCharCode(t, n, r);
        }
      }
    }
    {
      let t = i[s++];
      let n = i[s++];
      let r = i[s++];
      let o = i[s++];
      if ((t & 128) > 0 || (n & 128) > 0 || (r & 128) > 0 || (o & 128) > 0) {
        s -= 4;
        return;
      }
      if (e < 6) {
        if (e === 4) {
          return String.fromCharCode(t, n, r, o);
        }
        {
          let e = i[s++];
          if ((e & 128) > 0) {
            s -= 5;
            return;
          } else {
            return String.fromCharCode(t, n, r, o, e);
          }
        }
      }
      if (e < 8) {
        let a = i[s++];
        let c = i[s++];
        if ((a & 128) > 0 || (c & 128) > 0) {
          s -= 6;
          return;
        }
        if (e < 7) {
          return String.fromCharCode(t, n, r, o, a, c);
        }
        let u = i[s++];
        if ((u & 128) > 0) {
          s -= 7;
          return;
        } else {
          return String.fromCharCode(t, n, r, o, a, c, u);
        }
      }
      {
        let a = i[s++];
        let c = i[s++];
        let u = i[s++];
        let l = i[s++];
        if ((a & 128) > 0 || (c & 128) > 0 || (u & 128) > 0 || (l & 128) > 0) {
          s -= 8;
          return;
        }
        if (e < 10) {
          if (e === 8) {
            return String.fromCharCode(t, n, r, o, a, c, u, l);
          }
          {
            let e = i[s++];
            if ((e & 128) > 0) {
              s -= 9;
              return;
            } else {
              return String.fromCharCode(t, n, r, o, a, c, u, l, e);
            }
          }
        }
        if (e < 12) {
          let h = i[s++];
          let A = i[s++];
          if ((h & 128) > 0 || (A & 128) > 0) {
            s -= 10;
            return;
          }
          if (e < 11) {
            return String.fromCharCode(t, n, r, o, a, c, u, l, h, A);
          }
          let f = i[s++];
          if ((f & 128) > 0) {
            s -= 11;
            return;
          } else {
            return String.fromCharCode(t, n, r, o, a, c, u, l, h, A, f);
          }
        }
        {
          let h = i[s++];
          let A = i[s++];
          let f = i[s++];
          let d = i[s++];
          if ((h & 128) > 0 || (A & 128) > 0 || (f & 128) > 0 || (d & 128) > 0) {
            s -= 12;
            return;
          }
          if (e < 14) {
            if (e === 12) {
              return String.fromCharCode(t, n, r, o, a, c, u, l, h, A, f, d);
            }
            {
              let e = i[s++];
              if ((e & 128) > 0) {
                s -= 13;
                return;
              } else {
                return String.fromCharCode(t, n, r, o, a, c, u, l, h, A, f, d, e);
              }
            }
          }
          {
            let g = i[s++];
            let p = i[s++];
            if ((g & 128) > 0 || (p & 128) > 0) {
              s -= 14;
              return;
            }
            if (e < 15) {
              return String.fromCharCode(t, n, r, o, a, c, u, l, h, A, f, d, g, p);
            }
            let y = i[s++];
            if ((y & 128) > 0) {
              s -= 15;
              return;
            } else {
              return String.fromCharCode(t, n, r, o, a, c, u, l, h, A, f, d, g, p, y);
            }
          }
        }
      }
    }
  }
  function decodeStringHeader() {
    let e;
    let t = i[s++];
    if (t < 192) {
      e = t - 160;
    } else {
      switch (t) {
        case 217:
          e = i[s++];
          break;
        case 218:
          e = f.getUint16(s);
          s += 2;
          break;
        case 219:
          e = f.getUint32(s);
          s += 4;
          break;
        default:
          throw new Error("Expected string");
      }
    }
    return convertEncodedBytesToString(e);
  }
  function getBufferSegment(e) {
    if (p.copyBuffers) {
      return Uint8Array.prototype.slice.call(i, s, s += e);
    } else {
      return i.subarray(s, s += e);
    }
  }
  function processExtensionType(e) {
    let t = i[s++];
    if (v[t]) {
      let n;
      return v[t](i.subarray(s, n = s += e), e => {
        s = e;
        try {
          return decodeMessagePack();
        } finally {
          s = n;
        }
      });
    }
    throw new Error("Unknown extension type " + t);
  }
  var q = new Array(4096);
  function processSerializedString() {
    let e = i[s++];
    if (e < 160 || e >= 192) {
      s--;
      return decodeMessagePack().toString();
    }
    e -= 160;
    if (m >= s) {
      return l.slice(s - y, (s += e) - y);
    }
    if (m != 0 || o >= 180) {
      return convertEncodedBytesToString(e);
    }
    let t;
    let n = (e << 5 ^ (e > 1 ? f.getUint16(s) : e > 0 ? i[s] : 0)) & 4095;
    let r = q[n];
    let a = s;
    let c = s + e - 3;
    let u = 0;
    if (r && r.bytes == e) {
      while (a < c) {
        t = f.getUint32(a);
        if (t != r[u++]) {
          a = 1879048192;
          break;
        }
        a += 4;
      }
      for (c += 3; a < c;) {
        t = i[a++];
        if (t != r[u++]) {
          a = 1879048192;
          break;
        }
      }
      if (a === c) {
        s = a;
        return r.string;
      }
      c -= 3;
      a = s;
    }
    r = [];
    q[n] = r;
    r.bytes = e;
    while (a < c) {
      t = f.getUint32(a);
      r.push(t);
      a += 4;
    }
    for (c += 3; a < c;) {
      t = i[a++];
      r.push(t);
    }
    let h = e < 16 ? readStringFromBuffer(e) : constructStringFromCharCodeArray(e);
    return r.string = h ?? convertEncodedBytesToString(e);
  }
  const createAndReadStructure = (e, t) => {
    let n = decodeMessagePack().map(e => e.toString());
    let r = e;
    if (t !== undefined) {
      e = e < 32 ? -((t << 5) + e) : (t << 5) + e;
      n.highByte = t;
    }
    let i = structures[e];
    if (i && (i.isShared || C)) {
      (structures.restoreStructures ||= [])[e] = i;
    }
    structures[e] = n;
    n.read = generateObjectReader(n, r);
    return n.read();
  };
  v[0] = () => {};
  v[0].noBuffer = true;
  let X = {
    Error: Error,
    TypeError: TypeError,
    ReferenceError: ReferenceError
  };
  v[101] = () => {
    let e = decodeMessagePack();
    return (X[e[0]] || Error)(e[1]);
  };
  v[105] = e => {
    let t = f.getUint32(s - 4);
    A ||= new Map();
    let n;
    let r = i[s];
    n = r >= 144 && r < 160 || r == 220 || r == 221 ? [] : {};
    let o = {
      target: n
    };
    A.set(t, o);
    let a = decodeMessagePack();
    if (o.used) {
      return Object.assign(n, a);
    } else {
      o.target = a;
      return a;
    }
  };
  v[112] = e => {
    let t = f.getUint32(s - 4);
    let n = A.get(t);
    n.used = true;
    return n.target;
  };
  v[115] = () => new Set(decodeMessagePack());
  const $ = ["Int8", "Uint8", "Uint8Clamped", "Int16", "Uint16", "Int32", "Uint32", "Float32", "Float64", "BigInt64", "BigUint64"].map(e => e + "Array");
  let ee = typeof globalThis === "object" ? globalThis : window;
  v[116] = e => {
    let t = e[0];
    let n = $[t];
    if (!n) {
      throw new Error("Could not find typed array for code " + t);
    }
    return new ee[n](Uint8Array.prototype.slice.call(e, 1).buffer);
  };
  v[120] = () => {
    let e = decodeMessagePack();
    return new RegExp(e[0], e[1]);
  };
  const te = [];
  function preserveStateAndExecute(e) {
    if (B) {
      B();
    }
    let t = o;
    let n = s;
    let r = g;
    let a = y;
    let c = m;
    let v = l;
    let b = d;
    let I = A;
    let _ = h;
    let w = new Uint8Array(i.slice(0, o));
    let E = structures;
    let k = structures.slice(0, structures.length);
    let Q = p;
    let S = C;
    let x = e();
    o = t;
    s = n;
    g = r;
    y = a;
    m = c;
    l = v;
    d = b;
    A = I;
    h = _;
    i = w;
    C = S;
    (structures = E).splice(0, structures.length, ...k);
    p = Q;
    f = new DataView(i.buffer, i.byteOffset, i.byteLength);
    return x;
  }
  function re() {
    i = null;
    A = null;
    structures = null;
  }
  v[98] = e => {
    let t = (e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3];
    let n = s;
    s += t - e.length;
    h = te;
    (h = [decodeStringHeader(), decodeStringHeader()]).position0 = 0;
    h.position1 = 0;
    h.postBundlePosition = s;
    s = n;
    return decodeMessagePack();
  };
  v[255] = e => e.length == 4 ? new Date((e[0] * 16777216 + (e[1] << 16) + (e[2] << 8) + e[3]) * 1000) : e.length == 8 ? new Date(((e[0] << 22) + (e[1] << 14) + (e[2] << 6) + (e[3] >> 2)) / 1000000 + ((e[3] & 3) * 4294967296 + e[4] * 16777216 + (e[5] << 16) + (e[6] << 8) + e[7]) * 1000) : e.length == 12 ? new Date(((e[0] << 24) + (e[1] << 16) + (e[2] << 8) + e[3]) / 1000000 + ((e[4] & 128 ? -281474976710656 : 0) + e[6] * 1099511627776 + e[7] * 4294967296 + e[8] * 16777216 + (e[9] << 16) + (e[10] << 8) + e[11]) * 1000) : new Date("invalid");
  const ie = new Array(147);
  for (let Ge = 0; Ge < 256; Ge++) {
    ie[Ge] = +("1e" + Math.floor(45.15 - Ge * 0.30103));
  }
  var messageUnpackerInst = new MessageUnpacker({
    useRecords: false
  });
  messageUnpackerInst.unpack;
  messageUnpackerInst.unpackMultiple;
  messageUnpackerInst.unpack;
  let ae = new Float32Array(1);
  new Uint8Array(ae.buffer, 0, 4);
  let ce;
  let ue;
  let typeOfObjectArray;
  try {
    ce = new TextEncoder();
  } catch (Oe) {}
  const isBufferAvailable = typeof Buffer !== "undefined";
  const Ae = isBufferAvailable ? function (e) {
    return Buffer.allocUnsafeSlow(e);
  } : Uint8Array;
  const fe = isBufferAvailable ? Buffer : Uint8Array;
  const someBufferRelatedValue = isBufferAvailable ? 4294967296 : 2144337920;
  let ge;
  let pe;
  let ye;
  let me;
  let ve;
  let be = 0;
  let Ie = null;
  const nonAsciiCharRegex = /[\u0080-\uFFFF]/;
  const recordIdSymbol = Symbol("record-id");
  class MessagePackEncoder extends MessageUnpacker {
    constructor(constructorArgs) {
      let t;
      let n;
      let r;
      let i;
      super(constructorArgs);
      this.offset = 0;
      let maybeUtfWriter = fe.prototype.utf8Write ? function (e, t) {
        return ge.utf8Write(e, t, 4294967295);
      } : !!ce && !!ce.encodeInto && function (e, t) {
        return ce.encodeInto(e, ge.subarray(t)).written;
      };
      let messagePackEncoderInst = this;
      constructorArgs ||= {};
      let maybeSequentialBool = constructorArgs && constructorArgs.sequential;
      let someStructures = constructorArgs.structures || constructorArgs.saveStructures;
      let maxSharedStructures = constructorArgs.maxSharedStructures;
      if (maxSharedStructures == null) {
        maxSharedStructures = someStructures ? 32 : 0;
      }
      if (maxSharedStructures > 8160) {
        throw new Error("Maximum maxSharedStructure is 8160");
      }
      if (constructorArgs.structuredClone && constructorArgs.moreTypes == undefined) {
        this.moreTypes = true;
      }
      let maxOwnStructuresLimit = constructorArgs.maxOwnStructures;
      if (maxOwnStructuresLimit == null) {
        maxOwnStructuresLimit = someStructures ? 32 : 64;
      }
      if (!this.structures && constructorArgs.useRecords != 0) {
        this.structures = [];
      }
      let someMaxSharedStructuresLimitBool = maxSharedStructures > 32 || maxOwnStructuresLimit + maxSharedStructures > 64;
      let maxSharedStructuresPlus64 = maxSharedStructures + 64;
      let f = maxSharedStructures + maxOwnStructuresLimit + 64;
      if (f > 8256) {
        throw new Error("Maximum maxSharedStructure + maxOwnStructure is 8192");
      }
      let d = [];
      let g = 0;
      let p = 0;
      this.pack = this.encode = function (e, o) {
        if (!ge) {
          ge = new Ae(8192);
          ye = ge.dataView ||= new DataView(ge.buffer, 0, 8192);
          be = 0;
        }
        me = ge.length - 10;
        if (me - be < 2048) {
          ge = new Ae(ge.length);
          ye = ge.dataView ||= new DataView(ge.buffer, 0, ge.length);
          me = ge.length - 10;
          be = 0;
        } else {
          be = be + 7 & 2147483640;
        }
        t = be;
        if (o & Ue) {
          be += o & 255;
        }
        i = messagePackEncoderInst.structuredClone ? new Map() : null;
        if (messagePackEncoderInst.bundleStrings && typeof e !== "string") {
          Ie = [];
          Ie.size = Infinity;
        } else {
          Ie = null;
        }
        r = messagePackEncoderInst.structures;
        if (r) {
          if (r.uninitialized) {
            r = messagePackEncoderInst._mergeStructures(messagePackEncoderInst.getStructures());
          }
          let e = r.sharedLength || 0;
          if (e > maxSharedStructures) {
            throw new Error("Shared structures is larger than maximum shared structures, try increasing maxSharedStructures to " + r.sharedLength);
          }
          if (!r.transitions) {
            r.transitions = Object.create(null);
            for (let t = 0; t < e; t++) {
              let e = r[t];
              if (!e) {
                continue;
              }
              let n;
              let i = r.transitions;
              for (let t = 0, r = e.length; t < r; t++) {
                let r = e[t];
                n = i[r];
                n ||= i[r] = Object.create(null);
                i = n;
              }
              i[recordIdSymbol] = t + 64;
            }
            this.lastNamedStructuresLength = e;
          }
          if (!maybeSequentialBool) {
            r.nextId = e + 64;
          }
        }
        n &&= false;
        try {
          if (messagePackEncoderInst.randomAccessStructure && e && e.constructor && e.constructor === Object) {
            k(e);
          } else {
            v(e);
          }
          let s = Ie;
          if (Ie) {
            processBufferElements(t, v, 0);
          }
          if (i && i.idsToInsert) {
            let e = i.idsToInsert.sort((e, t) => e.offset > t.offset ? 1 : -1);
            let n = e.length;
            let r = -1;
            while (s && n > 0) {
              let i = e[--n].offset + t;
              if (i < s.stringsPosition + t && r === -1) {
                r = 0;
              }
              if (i > s.position + t) {
                if (r >= 0) {
                  r += 6;
                }
              } else {
                if (r >= 0) {
                  ye.setUint32(s.position + t, ye.getUint32(s.position + t) + r);
                  r = -1;
                }
                s = s.previous;
                n++;
              }
            }
            if (r >= 0 && s) {
              ye.setUint32(s.position + t, ye.getUint32(s.position + t) + r);
            }
            be += e.length * 6;
            if (be > me) {
              E(be);
            }
            messagePackEncoderInst.offset = be;
            let o = function (e, t) {
              let n;
              let r = t.length * 6;
              let i = e.length - r;
              while (n = t.pop()) {
                let t = n.offset;
                let o = n.id;
                e.copyWithin(t + r, t, i);
                r -= 6;
                let a = t + r;
                e[a++] = 214;
                e[a++] = 105;
                e[a++] = o >> 24;
                e[a++] = o >> 16 & 255;
                e[a++] = o >> 8 & 255;
                e[a++] = o & 255;
                i = t;
              }
              return e;
            }(ge.subarray(t, be), e);
            i = null;
            return o;
          }
          messagePackEncoderInst.offset = be;
          if (o & Re) {
            ge.start = t;
            ge.end = be;
            return ge;
          } else {
            return ge.subarray(t, be);
          }
        } finally {
          if (r && (cleanupSerializationState(), n && messagePackEncoderInst.saveStructures)) {
            let n = r.sharedLength || 0;
            let i = ge.subarray(t, be);
            let s = xe(r, messagePackEncoderInst);
            if (messagePackEncoderInst.saveStructures(s, s.isCompatible) === false) {
              return messagePackEncoderInst.pack(e, o);
            } else {
              messagePackEncoderInst.lastNamedStructuresLength = n;
              return i;
            }
          }
          if (o & Fe) {
            be = t;
          }
        }
      };
      const cleanupSerializationState = () => {
        if (p < 10) {
          p++;
        }
        let e = r.sharedLength || 0;
        if (r.length > e && !maybeSequentialBool) {
          r.length = e;
        }
        if (g > 10000) {
          r.transitions = null;
          p = 0;
          g = 0;
          if (d.length > 0) {
            d = [];
          }
        } else if (d.length > 0 && !maybeSequentialBool) {
          for (let e = 0, t = d.length; e < t; e++) {
            d[e][recordIdSymbol] = 0;
          }
          d = [];
        }
      };
      const m = e => {
        var t = e.length;
        if (t < 16) {
          ge[be++] = t | 144;
        } else if (t < 65536) {
          ge[be++] = 220;
          ge[be++] = t >> 8;
          ge[be++] = t & 255;
        } else {
          ge[be++] = 221;
          ye.setUint32(be, t);
          be += 4;
        }
        for (let n = 0; n < t; n++) {
          v(e[n]);
        }
      };
      const v = e => {
        if (be > me) {
          ge = E(be);
        }
        var n;
        var r = typeof e;
        if (r === "string") {
          let r;
          let i = e.length;
          if (Ie && i >= 4 && i < 4096) {
            if ((Ie.size += i) > 21760) {
              let e;
              let n;
              let r = (Ie[0] ? Ie[0].length * 3 + Ie[1].length : 0) + 10;
              if (be + r > me) {
                ge = E(be + r);
              }
              if (Ie.position) {
                n = Ie;
                ge[be] = 200;
                be += 3;
                ge[be++] = 98;
                e = be - t;
                be += 4;
                processBufferElements(t, v, 0);
                ye.setUint16(e + t - 3, be - t - e);
              } else {
                ge[be++] = 214;
                ge[be++] = 98;
                e = be - t;
                be += 4;
              }
              Ie = ["", ""];
              Ie.previous = n;
              Ie.size = 0;
              Ie.position = e;
            }
            let n = nonAsciiCharRegex.test(e);
            Ie[n ? 0 : 1] += e;
            ge[be++] = 193;
            v(n ? -i : i);
            return;
          }
          r = i < 32 ? 1 : i < 256 ? 2 : i < 65536 ? 3 : 5;
          let a = i * 3;
          if (be + a > me) {
            ge = E(be + a);
          }
          if (i < 64 || !maybeUtfWriter) {
            let t;
            let o;
            let a;
            let s = be + r;
            for (t = 0; t < i; t++) {
              o = e.charCodeAt(t);
              if (o < 128) {
                ge[s++] = o;
              } else if (o < 2048) {
                ge[s++] = o >> 6 | 192;
                ge[s++] = o & 63 | 128;
              } else if ((o & 64512) === 55296 && ((a = e.charCodeAt(t + 1)) & 64512) === 56320) {
                o = 65536 + ((o & 1023) << 10) + (a & 1023);
                t++;
                ge[s++] = o >> 18 | 240;
                ge[s++] = o >> 12 & 63 | 128;
                ge[s++] = o >> 6 & 63 | 128;
                ge[s++] = o & 63 | 128;
              } else {
                ge[s++] = o >> 12 | 224;
                ge[s++] = o >> 6 & 63 | 128;
                ge[s++] = o & 63 | 128;
              }
            }
            n = s - be - r;
          } else {
            n = maybeUtfWriter(e, be + r);
          }
          if (n < 32) {
            ge[be++] = n | 160;
          } else if (n < 256) {
            if (r < 2) {
              ge.copyWithin(be + 2, be + 1, be + 1 + n);
            }
            ge[be++] = 217;
            ge[be++] = n;
          } else if (n < 65536) {
            if (r < 3) {
              ge.copyWithin(be + 3, be + 2, be + 2 + n);
            }
            ge[be++] = 218;
            ge[be++] = n >> 8;
            ge[be++] = n & 255;
          } else {
            if (r < 5) {
              ge.copyWithin(be + 5, be + 3, be + 3 + n);
            }
            ge[be++] = 219;
            ye.setUint32(be, n);
            be += 4;
          }
          be += n;
        } else if (r === "number") {
          if (e >>> 0 === e) {
            if (e < 32 || e < 128 && this.useRecords === false || e < 64 && !this.randomAccessStructure) {
              ge[be++] = e;
            } else if (e < 256) {
              ge[be++] = 204;
              ge[be++] = e;
            } else if (e < 65536) {
              ge[be++] = 205;
              ge[be++] = e >> 8;
              ge[be++] = e & 255;
            } else {
              ge[be++] = 206;
              ye.setUint32(be, e);
              be += 4;
            }
          } else if (e >> 0 === e) {
            if (e >= -32) {
              ge[be++] = 256 + e;
            } else if (e >= -128) {
              ge[be++] = 208;
              ge[be++] = e + 256;
            } else if (e >= -32768) {
              ge[be++] = 209;
              ye.setInt16(be, e);
              be += 2;
            } else {
              ge[be++] = 210;
              ye.setInt32(be, e);
              be += 4;
            }
          } else {
            let t;
            if ((t = this.useFloat32) > 0 && e < 4294967296 && e >= -2147483648) {
              let n;
              ge[be++] = 202;
              ye.setFloat32(be, e);
              if (t < 4 || (n = e * ie[(ge[be] & 127) << 1 | ge[be + 1] >> 7]) >> 0 === n) {
                be += 4;
                return;
              }
              be--;
            }
            ge[be++] = 203;
            ye.setFloat64(be, e);
            be += 8;
          }
        } else if (r === "object" || r === "function") {
          if (e) {
            if (i) {
              let n = i.get(e);
              if (n) {
                if (!n.id) {
                  let e = i.idsToInsert ||= [];
                  n.id = e.push(n);
                }
                ge[be++] = 214;
                ge[be++] = 112;
                ye.setUint32(be, n.id);
                be += 4;
                return;
              }
              i.set(e, {
                offset: be - t
              });
            }
            let o = e.constructor;
            if (o === Object) {
              w(e, true);
            } else if (o === Array) {
              m(e);
            } else if (o === Map) {
              if (this.mapAsEmptyObject) {
                ge[be++] = 128;
              } else {
                if ((n = e.size) < 16) {
                  ge[be++] = n | 128;
                } else if (n < 65536) {
                  ge[be++] = 222;
                  ge[be++] = n >> 8;
                  ge[be++] = n & 255;
                } else {
                  ge[be++] = 223;
                  ye.setUint32(be, n);
                  be += 4;
                }
                for (let [t, n] of e) {
                  v(t);
                  v(n);
                }
              }
            } else {
              for (let t = 0, n = ue.length; t < n; t++) {
                if (e instanceof typeOfObjectArray[t]) {
                  let n = ue[t];
                  if (n.write) {
                    if (n.type) {
                      ge[be++] = 212;
                      ge[be++] = n.type;
                      ge[be++] = 0;
                    }
                    let t = n.write.call(this, e);
                    if (t === e) {
                      if (Array.isArray(e)) {
                        m(e);
                      } else {
                        w(e);
                      }
                    } else {
                      v(t);
                    }
                    return;
                  }
                  let r;
                  let i = ge;
                  let o = ye;
                  let a = be;
                  ge = null;
                  try {
                    r = n.pack.call(this, e, e => {
                      ge = i;
                      i = null;
                      be += e;
                      if (be > me) {
                        E(be);
                      }
                      return {
                        target: ge,
                        targetView: ye,
                        position: be - e
                      };
                    }, v);
                  } finally {
                    if (i) {
                      ge = i;
                      ye = o;
                      be = a;
                      me = ge.length - 10;
                    }
                  }
                  if (r) {
                    if (r.length + be > me) {
                      E(r.length + be);
                    }
                    be = writeBinaryData(r, ge, be, n.type);
                  }
                  return;
                }
              }
              if (Array.isArray(e)) {
                m(e);
              } else {
                if (e.toJSON) {
                  const t = e.toJSON();
                  if (t !== e) {
                    return v(t);
                  }
                }
                if (r === "function") {
                  return v(this.writeFunction && this.writeFunction(e));
                }
                w(e, !e.hasOwnProperty);
              }
            }
          } else {
            ge[be++] = 192;
          }
        } else if (r === "boolean") {
          ge[be++] = e ? 195 : 194;
        } else if (r === "bigint") {
          if (e < BigInt(1) << BigInt(63) && e >= -(BigInt(1) << BigInt(63))) {
            ge[be++] = 211;
            ye.setBigInt64(be, e);
          } else if (e < BigInt(1) << BigInt(64) && e > 0) {
            ge[be++] = 207;
            ye.setBigUint64(be, e);
          } else {
            if (!this.largeBigIntToFloat) {
              throw new RangeError(e + " was too large to fit in MessagePack 64-bit integer format, set largeBigIntToFloat to convert to float-64");
            }
            ge[be++] = 203;
            ye.setFloat64(be, Number(e));
          }
          be += 8;
        } else {
          if (r !== "undefined") {
            throw new Error("Unknown type: " + r);
          }
          if (this.encodeUndefinedAsNil) {
            ge[be++] = 192;
          } else {
            ge[be++] = 212;
            ge[be++] = 0;
            ge[be++] = 0;
          }
        }
      };
      const b = this.variableMapSize || this.coercibleKeyAsNumber ? e => {
        let t;
        let n = Object.keys(e);
        let r = n.length;
        if (r < 16) {
          ge[be++] = r | 128;
        } else if (r < 65536) {
          ge[be++] = 222;
          ge[be++] = r >> 8;
          ge[be++] = r & 255;
        } else {
          ge[be++] = 223;
          ye.setUint32(be, r);
          be += 4;
        }
        if (this.coercibleKeyAsNumber) {
          for (let i = 0; i < r; i++) {
            t = n[i];
            let r = Number(t);
            v(isNaN(r) ? t : r);
            v(e[t]);
          }
        } else {
          for (let i = 0; i < r; i++) {
            v(t = n[i]);
            v(e[t]);
          }
        }
      } : (e, n) => {
        ge[be++] = 222;
        let r = be - t;
        be += 2;
        let i = 0;
        for (let t in e) {
          if (n || e.hasOwnProperty(t)) {
            v(t);
            v(e[t]);
            i++;
          }
        }
        ge[r++ + t] = i >> 8;
        ge[r + t] = i & 255;
      };
      const I = this.useRecords === false ? b : constructorArgs.progressiveRecords && !someMaxSharedStructuresLimitBool ? (e, n) => {
        let i;
        let o;
        let a = r.transitions ||= Object.create(null);
        let s = be++ - t;
        for (let c in e) {
          if (n || e.hasOwnProperty(c)) {
            i = a[c];
            if (i) {
              a = i;
            } else {
              let n = Object.keys(e);
              let u = a;
              a = r.transitions;
              let l = 0;
              for (let e = 0, t = n.length; e < t; e++) {
                let t = n[e];
                i = a[t];
                if (!i) {
                  i = a[t] = Object.create(null);
                  l++;
                }
                a = i;
              }
              if (s + t + 1 == be) {
                be--;
                B(a, n, l);
              } else {
                C(a, n, s, l);
              }
              o = true;
              a = u[c];
            }
            v(e[c]);
          }
        }
        if (!o) {
          let n = a[recordIdSymbol];
          if (n) {
            ge[s + t] = n;
          } else {
            C(a, Object.keys(e), s, 0);
          }
        }
      } : (e, t) => {
        let n;
        let i = r.transitions ||= Object.create(null);
        let o = 0;
        for (let r in e) {
          if (t || e.hasOwnProperty(r)) {
            n = i[r];
            if (!n) {
              n = i[r] = Object.create(null);
              o++;
            }
            i = n;
          }
        }
        let a = i[recordIdSymbol];
        if (a) {
          if (a >= 96 && someMaxSharedStructuresLimitBool) {
            ge[be++] = 96 + ((a -= 96) & 31);
            ge[be++] = a >> 5;
          } else {
            ge[be++] = a;
          }
        } else {
          B(i, i.__keys__ || Object.keys(e), o);
        }
        for (let r in e) {
          if (t || e.hasOwnProperty(r)) {
            v(e[r]);
          }
        }
      };
      const _ = typeof this.useRecords == "function" && this.useRecords;
      const w = _ ? (e, t) => {
        if (_(e)) {
          I(e, t);
        } else {
          b(e, t);
        }
      } : I;
      const E = e => {
        let n;
        if (e > 16777216) {
          if (e - t > someBufferRelatedValue) {
            throw new Error("Packed buffer would be larger than maximum buffer size");
          }
          n = Math.min(someBufferRelatedValue, Math.round(Math.max((e - t) * (e > 67108864 ? 1.25 : 2), 4194304) / 4096) * 4096);
        } else {
          n = 1 + (Math.max(e - t << 2, ge.length - 1) >> 12) << 12;
        }
        let r = new Ae(n);
        ye = r.dataView ||= new DataView(r.buffer, 0, n);
        e = Math.min(e, ge.length);
        if (ge.copy) {
          ge.copy(r, 0, t, e);
        } else {
          r.set(ge.slice(t, e));
        }
        be -= t;
        t = 0;
        me = r.length - 10;
        return ge = r;
      };
      const B = (e, t, i) => {
        let o = r.nextId;
        o ||= 64;
        if (o < maxSharedStructuresPlus64 && this.shouldShareStructure && !this.shouldShareStructure(t)) {
          o = r.nextOwnId;
          if (o >= f) {
            o = maxSharedStructuresPlus64;
          }
          r.nextOwnId = o + 1;
        } else {
          if (o >= f) {
            o = maxSharedStructuresPlus64;
          }
          r.nextId = o + 1;
        }
        let a = t.highByte = o >= 96 && someMaxSharedStructuresLimitBool ? o - 96 >> 5 : -1;
        e[recordIdSymbol] = o;
        e.__keys__ = t;
        r[o - 64] = t;
        if (o < maxSharedStructuresPlus64) {
          t.isShared = true;
          r.sharedLength = o - 63;
          n = true;
          if (a >= 0) {
            ge[be++] = 96 + (o & 31);
            ge[be++] = a;
          } else {
            ge[be++] = o;
          }
        } else {
          if (a >= 0) {
            ge[be++] = 213;
            ge[be++] = 114;
            ge[be++] = 96 + (o & 31);
            ge[be++] = a;
          } else {
            ge[be++] = 212;
            ge[be++] = 114;
            ge[be++] = o;
          }
          if (i) {
            g += p * i;
          }
          if (d.length >= maxOwnStructuresLimit) {
            d.shift()[recordIdSymbol] = 0;
          }
          d.push(e);
          v(t);
        }
      };
      const C = (e, n, r, i) => {
        let o = ge;
        let a = be;
        let s = me;
        let c = t;
        ge = pe;
        be = 0;
        t = 0;
        if (!ge) {
          pe = ge = new Ae(8192);
        }
        me = ge.length - 10;
        B(e, n, i);
        pe = ge;
        let u = be;
        ge = o;
        be = a;
        me = s;
        t = c;
        if (u > 1) {
          let e = be + u - 1;
          if (e > me) {
            E(e);
          }
          let n = r + t;
          ge.copyWithin(n + u, n + 1, be);
          ge.set(pe.slice(0, u), n);
          be = e;
        } else {
          ge[r + t] = pe[0];
        }
      };
      const k = (e, i) => {
        let o = ve(e, ge, t, be, r, E, (e, t, r) => {
          if (r) {
            return n = true;
          }
          be = t;
          let i = ge;
          v(e);
          cleanupSerializationState();
          if (i !== ge) {
            return {
              position: be,
              targetView: ye,
              target: ge
            };
          } else {
            return be;
          }
        }, this);
        if (o === 0) {
          return w(e, true);
        }
        be = o;
      };
    }
    useBuffer(e) {
      ge = e;
      ye = new DataView(ge.buffer, ge.byteOffset, ge.byteLength);
      be = 0;
    }
    clearSharedData() {
      this.structures &&= [];
      this.typedStructs &&= [];
    }
  }
  function packDataWithType(e, t, n, r) {
    let i = e.byteLength;
    if (i + 1 < 256) {
      var {
        target: o,
        position: a
      } = n(4 + i);
      o[a++] = 199;
      o[a++] = i + 1;
    } else if (i + 1 < 65536) {
      var {
        target: o,
        position: a
      } = n(5 + i);
      o[a++] = 200;
      o[a++] = i + 1 >> 8;
      o[a++] = i + 1 & 255;
    } else {
      var {
        target: o,
        position: a,
        targetView: s
      } = n(7 + i);
      o[a++] = 201;
      s.setUint32(a, i + 1);
      a += 4;
    }
    o[a++] = 116;
    o[a++] = t;
    o.set(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), a);
  }
  function writeBinaryHeader(e, t) {
    let n = e.byteLength;
    var r;
    var i;
    if (n < 256) {
      var {
        target: r,
        position: i
      } = t(n + 2);
      r[i++] = 196;
      r[i++] = n;
    } else if (n < 65536) {
      var {
        target: r,
        position: i
      } = t(n + 3);
      r[i++] = 197;
      r[i++] = n >> 8;
      r[i++] = n & 255;
    } else {
      var {
        target: r,
        position: i,
        targetView: o
      } = t(n + 5);
      r[i++] = 198;
      o.setUint32(i, n);
      i += 4;
    }
    r.set(e, i);
  }
  function writeBinaryData(e, t, n, r) {
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
        if (i < 256) {
          t[n++] = 199;
          t[n++] = i;
        } else if (i < 65536) {
          t[n++] = 200;
          t[n++] = i >> 8;
          t[n++] = i & 255;
        } else {
          t[n++] = 201;
          t[n++] = i >> 24;
          t[n++] = i >> 16 & 255;
          t[n++] = i >> 8 & 255;
          t[n++] = i & 255;
        }
    }
    t[n++] = r;
    t.set(e, n);
    return n += i;
  }
  function processBufferElements(e, t, n) {
    if (Ie.length > 0) {
      ye.setUint32(Ie.position + e, be + n - Ie.position - e);
      Ie.stringsPosition = be - e;
      let r = Ie;
      Ie = null;
      t(r[0]);
      t(r[1]);
    }
  }
  function addSerializationHandler(e) {
    if (e.Class) {
      if (!e.pack && !e.write) {
        throw new Error("Extension has no pack or write function");
      }
      if (e.pack && !e.type) {
        throw new Error("Extension has no type (numeric code to identify the extension)");
      }
      typeOfObjectArray.unshift(e.Class);
      ue.unshift(e);
    }
    (function (e) {
      if (e.unpack) {
        v[e.type] = e.unpack;
      } else {
        v[e.type] = e;
      }
    })(e);
  }
  function xe(e, t) {
    e.isCompatible = e => {
      let n = !e || (t.lastNamedStructuresLength || 0) === e.length;
      if (!n) {
        t._mergeStructures(e);
      }
      return n;
    };
    return e;
  }
  typeOfObjectArray = [Date, Set, Error, RegExp, ArrayBuffer, Object.getPrototypeOf(Uint8Array.prototype).constructor, I];
  ue = [{
    pack(e, t, n) {
      let r = e.getTime() / 1000;
      if ((this.useTimestamp32 || e.getMilliseconds() === 0) && r >= 0 && r < 4294967296) {
        let {
          target: e,
          targetView: n,
          position: i
        } = t(6);
        e[i++] = 214;
        e[i++] = 255;
        n.setUint32(i, r);
      } else if (r > 0 && r < 4294967296) {
        let {
          target: n,
          targetView: i,
          position: o
        } = t(10);
        n[o++] = 215;
        n[o++] = 255;
        i.setUint32(o, e.getMilliseconds() * 4000000 + (r / 1000 / 4294967296 >> 0));
        i.setUint32(o + 4, r);
      } else if (isNaN(r)) {
        if (this.onInvalidDate) {
          t(0);
          return n(this.onInvalidDate());
        }
        let {
          target: e,
          targetView: r,
          position: i
        } = t(3);
        e[i++] = 212;
        e[i++] = 255;
        e[i++] = 255;
      } else {
        let {
          target: n,
          targetView: i,
          position: o
        } = t(15);
        n[o++] = 199;
        n[o++] = 12;
        n[o++] = 255;
        i.setUint32(o, e.getMilliseconds() * 1000000);
        i.setBigInt64(o + 4, BigInt(Math.floor(r)));
      }
    }
  }, {
    pack(e, t, n) {
      if (this.setAsEmptyObject) {
        t(0);
        return n({});
      }
      let r = Array.from(e);
      let {
        target: i,
        position: o
      } = t(this.moreTypes ? 3 : 0);
      if (this.moreTypes) {
        i[o++] = 212;
        i[o++] = 115;
        i[o++] = 0;
      }
      n(r);
    }
  }, {
    pack(e, t, n) {
      let {
        target: r,
        position: i
      } = t(this.moreTypes ? 3 : 0);
      if (this.moreTypes) {
        r[i++] = 212;
        r[i++] = 101;
        r[i++] = 0;
      }
      n([e.name, e.message]);
    }
  }, {
    pack(e, t, n) {
      let {
        target: r,
        position: i
      } = t(this.moreTypes ? 3 : 0);
      if (this.moreTypes) {
        r[i++] = 212;
        r[i++] = 120;
        r[i++] = 0;
      }
      n([e.source, e.flags]);
    }
  }, {
    pack(e, t) {
      if (this.moreTypes) {
        packDataWithType(e, 16, t);
      } else {
        writeBinaryHeader(isBufferAvailable ? Buffer.from(e) : new Uint8Array(e), t);
      }
    }
  }, {
    pack(e, t) {
      let n = e.constructor;
      if (n !== fe && this.moreTypes) {
        packDataWithType(e, $.indexOf(n.name), t);
      } else {
        writeBinaryHeader(e, t);
      }
    }
  }, {
    pack(e, t) {
      let {
        target: n,
        position: r
      } = t(1);
      n[r] = 193;
    }
  }];
  let De = new MessagePackEncoder({
    useRecords: false
  });
  De.pack;
  De.pack;
  const {
    NEVER: Te,
    ALWAYS: Me,
    DECIMAL_ROUND: Pe,
    DECIMAL_FIT: Ne
  } = {
    NEVER: 0,
    ALWAYS: 1,
    DECIMAL_ROUND: 3,
    DECIMAL_FIT: 4
  };
  const Re = 512;
  const Fe = 1024;
  const Ue = 2048;
  // n(89456).Buffer;
}