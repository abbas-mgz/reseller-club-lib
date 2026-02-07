"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var axios = require("axios");
var Dns = /*#__PURE__*/function () {
  function Dns() {
    _classCallCheck(this, Dns);
    this.apiKey = global.resellerGlobalConfig.apiKey;
    this.userId = global.resellerGlobalConfig.userId;
    if (!this.apiKey || !this.userId) {
      throw new Error("API Key and User ID are required.");
    }
    if (global.resellerGlobalConfig.baseUrl.endsWith("/")) global.resellerGlobalConfig.baseUrl = global.resellerGlobalConfig.baseUrl.substring(0, global.resellerGlobalConfig.baseUrl.length - 1);
    this.BASE_URL = global.resellerGlobalConfig.baseUrl + "/dns/manage/";
  }
  return _createClass(Dns, [{
    key: "_handleApiResponse",
    value: function _handleApiResponse(action, data) {
      if (!data || _typeof(data) !== "object") {
        throw new Error("API error while ".concat(action, ": unexpected response format"));
      }
      var statusRaw = data.status || data.Status || data.STATUS;
      var status = typeof statusRaw === "string" ? statusRaw.toLowerCase() : undefined;
      if (data.error) {
        var detail = typeof data.error === "string" ? data.error : JSON.stringify(data.error);
        throw new Error("API error while ".concat(action, ": ").concat(detail));
      }
      if (status && status !== "success") {
        var _detail = data.msg || data.message || data.error || "status=".concat(statusRaw);
        throw new Error("API error while ".concat(action, ": ").concat(_detail));
      }
      return data;
    }
  }, {
    key: "addCnameRecord",
    value: function () {
      var _addCnameRecord = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(domain, value, host) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = "".concat(this.BASE_URL, "add-cname-record.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domain, "&value=").concat(value, "&host=").concat(host);
              _context.prev = 1;
              _context.next = 4;
              return axios.post(url);
            case 4:
              response = _context.sent;
              return _context.abrupt("return", this._handleApiResponse("adding CNAME record", response.data));
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              throw new Error(_context.t0.message);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 8]]);
      }));
      function addCnameRecord(_x, _x2, _x3) {
        return _addCnameRecord.apply(this, arguments);
      }
      return addCnameRecord;
    }()
  }, {
    key: "addTxtRecord",
    value: function () {
      var _addTxtRecord = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(domain, value) {
        var host,
          url,
          response,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              host = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : null;
              url = "".concat(this.BASE_URL, "add-txt-record.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domain, "&value=").concat(value);
              if (host) url += "&host=".concat(host);
              _context2.prev = 3;
              _context2.next = 6;
              return axios.post(url);
            case 6:
              response = _context2.sent;
              return _context2.abrupt("return", this._handleApiResponse("adding TXT record", response.data));
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](3);
              throw new Error(_context2.t0.message);
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[3, 10]]);
      }));
      function addTxtRecord(_x4, _x5) {
        return _addTxtRecord.apply(this, arguments);
      }
      return addTxtRecord;
    }()
  }, {
    key: "addIPv4Record",
    value: function () {
      var _addIPv4Record = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(domain, ipAddress) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              url = "".concat(this.BASE_URL, "add-ipv4-record.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domain, "&value=").concat(ipAddress);
              _context3.prev = 1;
              _context3.next = 4;
              return axios.get(url);
            case 4:
              response = _context3.sent;
              return _context3.abrupt("return", this._handleApiResponse("adding IPv4 record", response.data));
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              throw new Error(_context3.t0.message);
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[1, 8]]);
      }));
      function addIPv4Record(_x6, _x7) {
        return _addIPv4Record.apply(this, arguments);
      }
      return addIPv4Record;
    }()
  }, {
    key: "addMxRecord",
    value: function () {
      var _addMxRecord = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(domain, value) {
        var options,
          url,
          host,
          ttl,
          priority,
          response,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
              url = "".concat(this.BASE_URL, "add-mx-record.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domain, "&value=").concat(value);
              host = options.host, ttl = options.ttl, priority = options.priority;
              if (host) url += "&host=".concat(host);
              if (typeof ttl === "number") url += "&ttl=".concat(ttl);
              if (typeof priority === "number") url += "&priority=".concat(priority);
              _context4.prev = 6;
              _context4.next = 9;
              return axios.post(url);
            case 9:
              response = _context4.sent;
              return _context4.abrupt("return", this._handleApiResponse("adding MX record", response.data));
            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](6);
              throw new Error(_context4.t0.message);
            case 16:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[6, 13]]);
      }));
      function addMxRecord(_x8, _x9) {
        return _addMxRecord.apply(this, arguments);
      }
      return addMxRecord;
    }()
  }, {
    key: "addNsRecord",
    value: function () {
      var _addNsRecord = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(domain, value) {
        var options,
          url,
          host,
          ttl,
          response,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              options = _args5.length > 2 && _args5[2] !== undefined ? _args5[2] : {};
              url = "".concat(this.BASE_URL, "add-ns-record.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domain, "&value=").concat(value);
              host = options.host, ttl = options.ttl;
              if (host) url += "&host=".concat(host);
              if (typeof ttl === "number") url += "&ttl=".concat(ttl);
              _context5.prev = 5;
              _context5.next = 8;
              return axios.post(url);
            case 8:
              response = _context5.sent;
              return _context5.abrupt("return", this._handleApiResponse("adding NS record", response.data));
            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5["catch"](5);
              throw new Error(_context5.t0.message);
            case 15:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[5, 12]]);
      }));
      function addNsRecord(_x10, _x11) {
        return _addNsRecord.apply(this, arguments);
      }
      return addNsRecord;
    }()
  }, {
    key: "deleteNsRecord",
    value: function () {
      var _deleteNsRecord = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(domain, value) {
        var host,
          url,
          response,
          _args6 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              host = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : '@';
              url = "".concat(this.BASE_URL, "delete-ns-record.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domain, "&host=").concat(host, "&value=").concat(value);
              _context6.prev = 2;
              _context6.next = 5;
              return axios.post(url);
            case 5:
              response = _context6.sent;
              return _context6.abrupt("return", this._handleApiResponse("deleting NS record", response.data));
            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6["catch"](2);
              throw new Error(_context6.t0.message);
            case 12:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[2, 9]]);
      }));
      function deleteNsRecord(_x12, _x13) {
        return _deleteNsRecord.apply(this, arguments);
      }
      return deleteNsRecord;
    }()
  }, {
    key: "addIPv6Record",
    value: function () {
      var _addIPv6Record = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(domain, ipAddress) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              url = "".concat(this.BASE_URL, "add-ipv6-record.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domain, "&value=").concat(ipAddress);
              _context7.prev = 1;
              _context7.next = 4;
              return axios.get(url);
            case 4:
              response = _context7.sent;
              return _context7.abrupt("return", this._handleApiResponse("adding IPv6 record", response.data));
            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](1);
              throw new Error(_context7.t0.message);
            case 11:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[1, 8]]);
      }));
      function addIPv6Record(_x14, _x15) {
        return _addIPv6Record.apply(this, arguments);
      }
      return addIPv6Record;
    }()
  }, {
    key: "activateDNS",
    value: function () {
      var _activateDNS = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(orderId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              url = "https://test.httpapi.com/api/dns/activate.json?auth-userid=".concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId);
              _context8.prev = 1;
              _context8.next = 4;
              return axios.get(url);
            case 4:
              response = _context8.sent;
              return _context8.abrupt("return", this._handleApiResponse("activating DNS", response.data));
            case 8:
              _context8.prev = 8;
              _context8.t0 = _context8["catch"](1);
              throw new Error(_context8.t0.message);
            case 11:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[1, 8]]);
      }));
      function activateDNS(_x16) {
        return _activateDNS.apply(this, arguments);
      }
      return activateDNS;
    }()
  }]);
}();
module.exports = {
  Dns: Dns
};