"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var axios = require('axios');
var Domain = /*#__PURE__*/function () {
  function Domain() {
    _classCallCheck(this, Domain);
    this.apiKey = global.resellerGlobalConfig.apiKey;
    this.userId = global.resellerGlobalConfig.userId;
    if (!this.apiKey || !this.userId) {
      throw new Error('API Key and User ID are required.');
    }
    if (global.resellerGlobalConfig.baseUrl.endsWith('/')) global.resellerGlobalConfig.baseUrl = global.resellerGlobalConfig.baseUrl.substring(0, global.resellerGlobalConfig.baseUrl.length - 1);
    this.BASE_URL = global.resellerGlobalConfig.baseUrl + '/domains/';
  }
  return _createClass(Domain, [{
    key: "deleteDomain",
    value: function () {
      var _deleteDomain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(orderId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = "".concat(this.BASE_URL, "delete.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId);
              _context.prev = 1;
              _context.next = 4;
              return axios.post(url);
            case 4:
              response = _context.sent;
              return _context.abrupt("return", response.data);
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              throw new Error('Error deleting domain: ' + _context.t0.message);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 8]]);
      }));
      function deleteDomain(_x) {
        return _deleteDomain.apply(this, arguments);
      }
      return deleteDomain;
    }()
  }, {
    key: "renewDomain",
    value: function () {
      var _renewDomain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(orderId, years, expDate) {
        var invoiceOption,
          url,
          response,
          _args2 = arguments;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              invoiceOption = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : 'NoInvoice';
              url = "".concat(this.BASE_URL, "renew.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&years=").concat(years, "&exp-date=").concat(expDate, "&invoice-option=").concat(invoiceOption);
              _context2.prev = 2;
              _context2.next = 5;
              return axios.post(url);
            case 5:
              response = _context2.sent;
              return _context2.abrupt("return", response.data);
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              throw new Error('Error renewing domain: ' + _context2.t0.message);
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[2, 9]]);
      }));
      function renewDomain(_x2, _x3, _x4) {
        return _renewDomain.apply(this, arguments);
      }
      return renewDomain;
    }()
  }, {
    key: "extendDomainRegistration",
    value: function () {
      var _extendDomainRegistration = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(orderId, years, expDate) {
        var invoiceOption,
          purchasePrivacy,
          url,
          response,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              invoiceOption = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : 'NoInvoice';
              purchasePrivacy = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : true;
              url = "".concat(this.BASE_URL, "renew.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&years=").concat(years, "&exp-date=").concat(expDate, "&invoice-option=").concat(invoiceOption, "&purchase-privacy=").concat(purchasePrivacy);
              _context3.prev = 3;
              _context3.next = 6;
              return axios.post(url);
            case 6:
              response = _context3.sent;
              return _context3.abrupt("return", response.data);
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](3);
              throw new Error('Error extending domain registration: ' + _context3.t0.message);
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[3, 10]]);
      }));
      function extendDomainRegistration(_x5, _x6, _x7) {
        return _extendDomainRegistration.apply(this, arguments);
      }
      return extendDomainRegistration;
    }()
  }, {
    key: "extendPremiumDomainRegistration",
    value: function () {
      var _extendPremiumDomainRegistration = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(orderId, years, expDate) {
        var invoiceOption,
          url,
          response,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              invoiceOption = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : 'NoInvoice';
              url = "".concat(this.BASE_URL, "renew.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&years=").concat(years, "&exp-date=").concat(expDate, "&invoice-option=").concat(invoiceOption, "&attr-name1=premium&attr-value1=true");
              _context4.prev = 2;
              _context4.next = 5;
              return axios.post(url);
            case 5:
              response = _context4.sent;
              return _context4.abrupt("return", response.data);
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](2);
              throw new Error('Error extending premium domain registration: ' + _context4.t0.message);
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[2, 9]]);
      }));
      function extendPremiumDomainRegistration(_x8, _x9, _x10) {
        return _extendPremiumDomainRegistration.apply(this, arguments);
      }
      return extendPremiumDomainRegistration;
    }()
  }, {
    key: "registerDomain",
    value: function () {
      var _registerDomain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId) {
        var invoiceOption,
          nsParams,
          url,
          response,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              invoiceOption = _args5.length > 8 && _args5[8] !== undefined ? _args5[8] : 'KeepInvoice';
              nsParams = nameServers.map(function (ns, index) {
                return "&ns=".concat(ns);
              }).join('');
              url = "".concat(this.BASE_URL, "register.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption);
              _context5.prev = 3;
              _context5.next = 6;
              return axios.post(url);
            case 6:
              response = _context5.sent;
              return _context5.abrupt("return", response.data);
            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](3);
              throw new Error('Error registering domain: ' + _context5.t0.message);
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[3, 10]]);
      }));
      function registerDomain(_x11, _x12, _x13, _x14, _x15, _x16, _x17, _x18) {
        return _registerDomain.apply(this, arguments);
      }
      return registerDomain;
    }()
  }, {
    key: "registerDomainWithPrivacy",
    value: function () {
      var _registerDomainWithPrivacy = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId) {
        var invoiceOption,
          purchasePrivacy,
          nsParams,
          url,
          response,
          _args6 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              invoiceOption = _args6.length > 8 && _args6[8] !== undefined ? _args6[8] : 'KeepInvoice';
              purchasePrivacy = _args6.length > 9 && _args6[9] !== undefined ? _args6[9] : true;
              nsParams = nameServers.map(function (ns) {
                return "&ns=".concat(ns);
              }).join('');
              url = "".concat(this.BASE_URL, "register.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&purchase-privacy=").concat(purchasePrivacy);
              _context6.prev = 4;
              _context6.next = 7;
              return axios.post(url);
            case 7:
              response = _context6.sent;
              return _context6.abrupt("return", response.data);
            case 11:
              _context6.prev = 11;
              _context6.t0 = _context6["catch"](4);
              throw new Error('Error registering domain with privacy: ' + _context6.t0.message);
            case 14:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[4, 11]]);
      }));
      function registerDomainWithPrivacy(_x19, _x20, _x21, _x22, _x23, _x24, _x25, _x26) {
        return _registerDomainWithPrivacy.apply(this, arguments);
      }
      return registerDomainWithPrivacy;
    }()
  }, {
    key: "registerDomainWithAttributes",
    value: function () {
      var _registerDomainWithAttributes = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId) {
        var invoiceOption,
          attributes,
          nsParams,
          attrParams,
          url,
          response,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              invoiceOption = _args7.length > 8 && _args7[8] !== undefined ? _args7[8] : 'KeepInvoice';
              attributes = _args7.length > 9 && _args7[9] !== undefined ? _args7[9] : {};
              nsParams = nameServers.map(function (ns) {
                return "&ns=".concat(ns);
              }).join('');
              attrParams = Object.entries(attributes).map(function (_ref, index) {
                var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];
                return "&attr-name".concat(index + 1, "=").concat(key, "&attr-value").concat(index + 1, "=").concat(encodeURIComponent(value));
              }).join('');
              url = "".concat(this.BASE_URL, "register.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customerid=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption).concat(attrParams);
              _context7.prev = 5;
              _context7.next = 8;
              return axios.post(url);
            case 8:
              response = _context7.sent;
              return _context7.abrupt("return", response.data);
            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](5);
              throw new Error('Error registering domain with attributes: ' + _context7.t0.message);
            case 15:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[5, 12]]);
      }));
      function registerDomainWithAttributes(_x27, _x28, _x29, _x30, _x31, _x32, _x33, _x34) {
        return _registerDomainWithAttributes.apply(this, arguments);
      }
      return registerDomainWithAttributes;
    }()
  }, {
    key: "registerAustralianDomain",
    value: function () {
      var _registerAustralianDomain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId) {
        var invoiceOption,
          attributes,
          nsParams,
          attrParams,
          url,
          response,
          _args8 = arguments;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              invoiceOption = _args8.length > 8 && _args8[8] !== undefined ? _args8[8] : 'KeepInvoice';
              attributes = _args8.length > 9 && _args8[9] !== undefined ? _args8[9] : {};
              nsParams = nameServers.map(function (ns) {
                return "&ns=".concat(ns);
              }).join('');
              attrParams = Object.entries(attributes).map(function (_ref3, index) {
                var _ref4 = _slicedToArray(_ref3, 2),
                  key = _ref4[0],
                  value = _ref4[1];
                return "&attr-name".concat(index + 1, "=").concat(key, "&attr-value").concat(index + 1, "=").concat(encodeURIComponent(value));
              }).join('');
              url = "".concat(this.BASE_URL, "register.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption).concat(attrParams);
              _context8.prev = 5;
              _context8.next = 8;
              return axios.post(url);
            case 8:
              response = _context8.sent;
              return _context8.abrupt("return", response.data);
            case 12:
              _context8.prev = 12;
              _context8.t0 = _context8["catch"](5);
              throw new Error('Error registering Australian domain: ' + _context8.t0.message);
            case 15:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[5, 12]]);
      }));
      function registerAustralianDomain(_x35, _x36, _x37, _x38, _x39, _x40, _x41, _x42) {
        return _registerAustralianDomain.apply(this, arguments);
      }
      return registerAustralianDomain;
    }()
  }, {
    key: "registerChineseDomain",
    value: function () {
      var _registerChineseDomain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId) {
        var invoiceOption,
          attributes,
          nsParams,
          attrParams,
          url,
          response,
          _args9 = arguments;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              invoiceOption = _args9.length > 8 && _args9[8] !== undefined ? _args9[8] : 'KeepInvoice';
              attributes = _args9.length > 9 && _args9[9] !== undefined ? _args9[9] : {};
              nsParams = nameServers.map(function (ns) {
                return "&ns=".concat(ns);
              }).join('');
              attrParams = Object.entries(attributes).map(function (_ref5, index) {
                var _ref6 = _slicedToArray(_ref5, 2),
                  key = _ref6[0],
                  value = _ref6[1];
                return "&attr-name".concat(index + 1, "=").concat(key, "&attr-value").concat(index + 1, "=").concat(encodeURIComponent(value));
              }).join('');
              url = "".concat(this.BASE_URL, "register.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption).concat(attrParams);
              _context9.prev = 5;
              _context9.next = 8;
              return axios.post(url);
            case 8:
              response = _context9.sent;
              return _context9.abrupt("return", response.data);
            case 12:
              _context9.prev = 12;
              _context9.t0 = _context9["catch"](5);
              throw new Error('Error registering Chinese domain: ' + _context9.t0.message);
            case 15:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[5, 12]]);
      }));
      function registerChineseDomain(_x43, _x44, _x45, _x46, _x47, _x48, _x49, _x50) {
        return _registerChineseDomain.apply(this, arguments);
      }
      return registerChineseDomain;
    }()
  }, {
    key: "registerIDNDomain",
    value: function () {
      var _registerIDNDomain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId) {
        var invoiceOption,
          attributes,
          nsParams,
          attrParams,
          url,
          response,
          _args10 = arguments;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              invoiceOption = _args10.length > 8 && _args10[8] !== undefined ? _args10[8] : 'KeepInvoice';
              attributes = _args10.length > 9 && _args10[9] !== undefined ? _args10[9] : {};
              nsParams = nameServers.map(function (ns) {
                return "&ns=".concat(ns);
              }).join('');
              attrParams = Object.entries(attributes).map(function (_ref7, index) {
                var _ref8 = _slicedToArray(_ref7, 2),
                  key = _ref8[0],
                  value = _ref8[1];
                return "&attr-name".concat(index + 1, "=").concat(key, "&attr-value").concat(index + 1, "=").concat(encodeURIComponent(value));
              }).join('');
              url = "".concat(this.BASE_URL, "register.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption).concat(attrParams);
              _context10.prev = 5;
              _context10.next = 8;
              return axios.post(url);
            case 8:
              response = _context10.sent;
              return _context10.abrupt("return", response.data);
            case 12:
              _context10.prev = 12;
              _context10.t0 = _context10["catch"](5);
              throw new Error('Error registering IDN domain: ' + _context10.t0.message);
            case 15:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[5, 12]]);
      }));
      function registerIDNDomain(_x51, _x52, _x53, _x54, _x55, _x56, _x57, _x58) {
        return _registerIDNDomain.apply(this, arguments);
      }
      return registerIDNDomain;
    }()
  }, {
    key: "registerPremiumDomain",
    value: function () {
      var _registerPremiumDomain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId) {
        var invoiceOption,
          nsParams,
          url,
          response,
          _args11 = arguments;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              invoiceOption = _args11.length > 8 && _args11[8] !== undefined ? _args11[8] : 'KeepInvoice';
              nsParams = nameServers.map(function (ns) {
                return "&ns=".concat(ns);
              }).join('');
              url = "".concat(this.BASE_URL, "register.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&attr-name1=premium&attr-value1=true");
              _context11.prev = 3;
              _context11.next = 6;
              return axios.post(url);
            case 6:
              response = _context11.sent;
              return _context11.abrupt("return", response.data);
            case 10:
              _context11.prev = 10;
              _context11.t0 = _context11["catch"](3);
              throw new Error('Error registering premium domain: ' + _context11.t0.message);
            case 13:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[3, 10]]);
      }));
      function registerPremiumDomain(_x59, _x60, _x61, _x62, _x63, _x64, _x65, _x66) {
        return _registerPremiumDomain.apply(this, arguments);
      }
      return registerPremiumDomain;
    }()
  }, {
    key: "registerDomainInEAP",
    value: function () {
      var _registerDomainInEAP = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId) {
        var invoiceOption,
          nsParams,
          url,
          response,
          _args12 = arguments;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              invoiceOption = _args12.length > 8 && _args12[8] !== undefined ? _args12[8] : 'KeepInvoice';
              nsParams = nameServers.map(function (ns) {
                return "&ns=".concat(ns);
              }).join('');
              url = "".concat(this.BASE_URL, "register.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&attr-name1=eap&attr-value1=true");
              _context12.prev = 3;
              _context12.next = 6;
              return axios.post(url);
            case 6:
              response = _context12.sent;
              return _context12.abrupt("return", response.data);
            case 10:
              _context12.prev = 10;
              _context12.t0 = _context12["catch"](3);
              throw new Error('Error registering domain in EAP: ' + _context12.t0.message);
            case 13:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[3, 10]]);
      }));
      function registerDomainInEAP(_x67, _x68, _x69, _x70, _x71, _x72, _x73, _x74) {
        return _registerDomainInEAP.apply(this, arguments);
      }
      return registerDomainInEAP;
    }()
  }, {
    key: "registerPremiumDomainInEAP",
    value: function () {
      var _registerPremiumDomainInEAP = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId) {
        var invoiceOption,
          nsParams,
          url,
          response,
          _args13 = arguments;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              invoiceOption = _args13.length > 8 && _args13[8] !== undefined ? _args13[8] : 'KeepInvoice';
              nsParams = nameServers.map(function (ns) {
                return "&ns=".concat(ns);
              }).join('');
              url = "".concat(this.BASE_URL, "register.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&attr-name1=premium&attr-value1=true&attr-name2=eap&attr-value2=true");
              _context13.prev = 3;
              _context13.next = 6;
              return axios.post(url);
            case 6:
              response = _context13.sent;
              return _context13.abrupt("return", response.data);
            case 10:
              _context13.prev = 10;
              _context13.t0 = _context13["catch"](3);
              throw new Error('Error registering premium domain in EAP: ' + _context13.t0.message);
            case 13:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this, [[3, 10]]);
      }));
      function registerPremiumDomainInEAP(_x75, _x76, _x77, _x78, _x79, _x80, _x81, _x82) {
        return _registerPremiumDomainInEAP.apply(this, arguments);
      }
      return registerPremiumDomainInEAP;
    }()
  }, {
    key: "transferDomainWithPrivacyProtection",
    value: function () {
      var _transferDomainWithPrivacyProtection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(domainName, authCode, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId) {
        var invoiceOption,
          nsParams,
          url,
          response,
          _args14 = arguments;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              invoiceOption = _args14.length > 8 && _args14[8] !== undefined ? _args14[8] : 'KeepInvoice';
              nsParams = nameServers.map(function (ns) {
                return "&ns=".concat(ns);
              }).join('');
              url = "".concat(this.BASE_URL, "transfer.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&auth-code=").concat(authCode).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&purchase-privacy=true");
              _context14.prev = 3;
              _context14.next = 6;
              return axios.post(url);
            case 6:
              response = _context14.sent;
              return _context14.abrupt("return", response.data);
            case 10:
              _context14.prev = 10;
              _context14.t0 = _context14["catch"](3);
              throw new Error('Error transferring domain with privacy protection: ' + _context14.t0.message);
            case 13:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this, [[3, 10]]);
      }));
      function transferDomainWithPrivacyProtection(_x83, _x84, _x85, _x86, _x87, _x88, _x89, _x90) {
        return _transferDomainWithPrivacyProtection.apply(this, arguments);
      }
      return transferDomainWithPrivacyProtection;
    }()
  }, {
    key: "transferASIA",
    value: function () {
      var _transferASIA = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(domainName, authCode, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, cedContactId) {
        var invoiceOption,
          nsParams,
          url,
          response,
          _args15 = arguments;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              invoiceOption = _args15.length > 9 && _args15[9] !== undefined ? _args15[9] : 'KeepInvoice';
              nsParams = nameServers.map(function (ns) {
                return "&ns=".concat(ns);
              }).join('');
              url = "".concat(this.BASE_URL, "transfer.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&auth-code=").concat(authCode).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&attr-name1=cedcontactid&attr-value1=").concat(cedContactId);
              _context15.prev = 3;
              _context15.next = 6;
              return axios.post(url);
            case 6:
              response = _context15.sent;
              return _context15.abrupt("return", response.data);
            case 10:
              _context15.prev = 10;
              _context15.t0 = _context15["catch"](3);
              throw new Error('Error transferring .ASIA domain: ' + _context15.t0.message);
            case 13:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this, [[3, 10]]);
      }));
      function transferASIA(_x91, _x92, _x93, _x94, _x95, _x96, _x97, _x98, _x99) {
        return _transferASIA.apply(this, arguments);
      }
      return transferASIA;
    }()
  }, {
    key: "transferPremiumDomain",
    value: function () {
      var _transferPremiumDomain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(domainName, authCode, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId) {
        var invoiceOption,
          purchasePrivacy,
          nsParams,
          url,
          response,
          _args16 = arguments;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              invoiceOption = _args16.length > 8 && _args16[8] !== undefined ? _args16[8] : 'KeepInvoice';
              purchasePrivacy = _args16.length > 9 && _args16[9] !== undefined ? _args16[9] : true;
              nsParams = nameServers.map(function (ns) {
                return "&ns=".concat(ns);
              }).join('');
              url = "".concat(this.BASE_URL, "transfer.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&auth-code=").concat(authCode).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&purchase-privacy=").concat(purchasePrivacy, "&attr-name1=premium&attr-value1=true");
              _context16.prev = 4;
              _context16.next = 7;
              return axios.post(url);
            case 7:
              response = _context16.sent;
              return _context16.abrupt("return", response.data);
            case 11:
              _context16.prev = 11;
              _context16.t0 = _context16["catch"](4);
              throw new Error('Error transferring Premium domain: ' + _context16.t0.message);
            case 14:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this, [[4, 11]]);
      }));
      function transferPremiumDomain(_x100, _x101, _x102, _x103, _x104, _x105, _x106, _x107) {
        return _transferPremiumDomain.apply(this, arguments);
      }
      return transferPremiumDomain;
    }()
  }, {
    key: "cancelDomainTransfer",
    value: function () {
      var _cancelDomainTransfer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(orderId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              url = "".concat(this.BASE_URL, "cancel-transfer.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId);
              _context17.prev = 1;
              _context17.next = 4;
              return axios.post(url);
            case 4:
              response = _context17.sent;
              return _context17.abrupt("return", response.data);
            case 8:
              _context17.prev = 8;
              _context17.t0 = _context17["catch"](1);
              throw new Error('Error canceling domain transfer: ' + _context17.t0.message);
            case 11:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this, [[1, 8]]);
      }));
      function cancelDomainTransfer(_x108) {
        return _cancelDomainTransfer.apply(this, arguments);
      }
      return cancelDomainTransfer;
    }()
  }, {
    key: "restoreDomain",
    value: function () {
      var _restoreDomain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(orderId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              url = "".concat(this.BASE_URL, "restore.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&invoice-option=KeepInvoice");
              _context18.prev = 1;
              _context18.next = 4;
              return axios.post(url);
            case 4:
              response = _context18.sent;
              return _context18.abrupt("return", response.data);
            case 8:
              _context18.prev = 8;
              _context18.t0 = _context18["catch"](1);
              throw new Error('Error restoring domain: ' + _context18.t0.message);
            case 11:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this, [[1, 8]]);
      }));
      function restoreDomain(_x109) {
        return _restoreDomain.apply(this, arguments);
      }
      return restoreDomain;
    }()
  }, {
    key: "getDomainOrderId",
    value: function () {
      var _getDomainOrderId = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(domainName) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              url = "".concat(this.BASE_URL, "orderid.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName);
              _context19.prev = 1;
              _context19.next = 4;
              return axios.get(url);
            case 4:
              response = _context19.sent;
              return _context19.abrupt("return", response.data);
            case 8:
              _context19.prev = 8;
              _context19.t0 = _context19["catch"](1);
              throw new Error('Error fetching domain order ID: ' + _context19.t0.message);
            case 11:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this, [[1, 8]]);
      }));
      function getDomainOrderId(_x110) {
        return _getDomainOrderId.apply(this, arguments);
      }
      return getDomainOrderId;
    }()
  }, {
    key: "checkDomainsAvailability",
    value: function () {
      var _checkDomainsAvailability = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(domains, tlds) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              url = "https://domaincheck.httpapi.com/api/domains/available.json?auth-userid=".concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domains.join('&domain-name='), "&tlds=").concat(tlds.join('&tlds='));
              _context20.prev = 1;
              _context20.next = 4;
              return axios.get(url);
            case 4:
              response = _context20.sent;
              return _context20.abrupt("return", response.data);
            case 8:
              _context20.prev = 8;
              _context20.t0 = _context20["catch"](1);
              throw new Error('Error checking domain availability: ' + _context20.t0.message);
            case 11:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this, [[1, 8]]);
      }));
      function checkDomainsAvailability(_x111, _x112) {
        return _checkDomainsAvailability.apply(this, arguments);
      }
      return checkDomainsAvailability;
    }()
  }, {
    key: "getOrderDetails",
    value: function () {
      var _getOrderDetails = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(orderId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              url = "".concat(this.BASE_URL, "details.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&options=OrderDetails");
              _context21.prev = 1;
              _context21.next = 4;
              return axios.get(url);
            case 4:
              response = _context21.sent;
              return _context21.abrupt("return", response.data);
            case 8:
              _context21.prev = 8;
              _context21.t0 = _context21["catch"](1);
              throw new Error('Error fetching domain order details: ' + _context21.t0.message);
            case 11:
            case "end":
              return _context21.stop();
          }
        }, _callee21, this, [[1, 8]]);
      }));
      function getOrderDetails(_x113) {
        return _getOrderDetails.apply(this, arguments);
      }
      return getOrderDetails;
    }()
  }, {
    key: "searchDomains",
    value: function () {
      var _searchDomains = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
        var noOfRecords,
          pageNo,
          url,
          response,
          _args22 = arguments;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              noOfRecords = _args22.length > 0 && _args22[0] !== undefined ? _args22[0] : 10;
              pageNo = _args22.length > 1 && _args22[1] !== undefined ? _args22[1] : 1;
              url = "".concat(this.BASE_URL, "search.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&no-of-records=").concat(noOfRecords, "&page-no=").concat(pageNo);
              _context22.prev = 3;
              _context22.next = 6;
              return axios.get(url);
            case 6:
              response = _context22.sent;
              return _context22.abrupt("return", response.data);
            case 10:
              _context22.prev = 10;
              _context22.t0 = _context22["catch"](3);
              throw new Error('Error fetching domain registration orders: ' + _context22.t0.message);
            case 13:
            case "end":
              return _context22.stop();
          }
        }, _callee22, this, [[3, 10]]);
      }));
      function searchDomains() {
        return _searchDomains.apply(this, arguments);
      }
      return searchDomains;
    }() // Modify WHOIS preferences
  }, {
    key: "modifyWhoisPreferences",
    value: function () {
      var _modifyWhoisPreferences = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(orderId, whoisType, publish) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              url = "".concat(this.BASE_URL, "/tel/modify-whois-pref.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&whois-type=").concat(whoisType, "&publish=").concat(publish);
              _context23.prev = 1;
              _context23.next = 4;
              return axios.post(url);
            case 4:
              response = _context23.sent;
              return _context23.abrupt("return", response.data);
            case 8:
              _context23.prev = 8;
              _context23.t0 = _context23["catch"](1);
              throw new Error('Error modifying WHOIS preferences: ' + _context23.t0.message);
            case 11:
            case "end":
              return _context23.stop();
          }
        }, _callee23, this, [[1, 8]]);
      }));
      function modifyWhoisPreferences(_x114, _x115, _x116) {
        return _modifyWhoisPreferences.apply(this, arguments);
      }
      return modifyWhoisPreferences;
    }() // Resend the RFA email for a domain order
  }, {
    key: "resendRFA",
    value: function () {
      var _resendRFA = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(orderId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              url = "".concat(this.BASE_URL, "/resend-rfa.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId);
              _context24.prev = 1;
              _context24.next = 4;
              return axios.post(url);
            case 4:
              response = _context24.sent;
              return _context24.abrupt("return", response.data);
            case 8:
              _context24.prev = 8;
              _context24.t0 = _context24["catch"](1);
              throw new Error('Error resending RFA: ' + _context24.t0.message);
            case 11:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this, [[1, 8]]);
      }));
      function resendRFA(_x117) {
        return _resendRFA.apply(this, arguments);
      }
      return resendRFA;
    }() // Modify Name Servers (NS) for a domain
  }, {
    key: "modifyNameServers",
    value: function () {
      var _modifyNameServers = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(orderId, ns1, ns2) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              url = "".concat(this.BASE_URL, "/modify-ns.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&ns=").concat(ns1, "&ns=").concat(ns2);
              _context25.prev = 1;
              _context25.next = 4;
              return axios.post(url);
            case 4:
              response = _context25.sent;
              return _context25.abrupt("return", response.data);
            case 8:
              _context25.prev = 8;
              _context25.t0 = _context25["catch"](1);
              throw new Error('Error modifying name servers: ' + _context25.t0.message);
            case 11:
            case "end":
              return _context25.stop();
          }
        }, _callee25, this, [[1, 8]]);
      }));
      function modifyNameServers(_x118, _x119, _x120) {
        return _modifyNameServers.apply(this, arguments);
      }
      return modifyNameServers;
    }() // Modify Contact Details for a domain
  }, {
    key: "modifyContact",
    value: function () {
      var _modifyContact = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(orderId, regContactId, adminContactId, techContactId, billingContactId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              url = "".concat(this.BASE_URL, "/modify-contact.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId);
              _context26.prev = 1;
              _context26.next = 4;
              return axios.post(url);
            case 4:
              response = _context26.sent;
              return _context26.abrupt("return", response.data);
            case 8:
              _context26.prev = 8;
              _context26.t0 = _context26["catch"](1);
              throw new Error('Error modifying contact details: ' + _context26.t0.message);
            case 11:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this, [[1, 8]]);
      }));
      function modifyContact(_x121, _x122, _x123, _x124, _x125) {
        return _modifyContact.apply(this, arguments);
      }
      return modifyContact;
    }() // Modify Contact Details and opt-out of 60-day lock
  }, {
    key: "modifyContactAndOptOut",
    value: function () {
      var _modifyContactAndOptOut = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(orderId, regContactId, adminContactId, techContactId, billingContactId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              url = "".concat(this.BASE_URL, "/modify-contact.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&sixty-day-lock-optout=true");
              _context27.prev = 1;
              _context27.next = 4;
              return axios.post(url);
            case 4:
              response = _context27.sent;
              return _context27.abrupt("return", response.data);
            case 8:
              _context27.prev = 8;
              _context27.t0 = _context27["catch"](1);
              throw new Error('Error opting out of 60-day lock: ' + _context27.t0.message);
            case 11:
            case "end":
              return _context27.stop();
          }
        }, _callee27, this, [[1, 8]]);
      }));
      function modifyContactAndOptOut(_x126, _x127, _x128, _x129, _x130) {
        return _modifyContactAndOptOut.apply(this, arguments);
      }
      return modifyContactAndOptOut;
    }() // Modify Contact Details and apply Designated Agent
  }, {
    key: "modifyContactAndApplyAgent",
    value: function () {
      var _modifyContactAndApplyAgent = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(orderId, regContactId, adminContactId, techContactId, billingContactId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              url = "".concat(this.BASE_URL, "/modify-contact.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&designated-agent=true");
              _context28.prev = 1;
              _context28.next = 4;
              return axios.post(url);
            case 4:
              response = _context28.sent;
              return _context28.abrupt("return", response.data);
            case 8:
              _context28.prev = 8;
              _context28.t0 = _context28["catch"](1);
              throw new Error('Error applying designated agent: ' + _context28.t0.message);
            case 11:
            case "end":
              return _context28.stop();
          }
        }, _callee28, this, [[1, 8]]);
      }));
      function modifyContactAndApplyAgent(_x131, _x132, _x133, _x134, _x135) {
        return _modifyContactAndApplyAgent.apply(this, arguments);
      }
      return modifyContactAndApplyAgent;
    }() // Modify Privacy Protection for the domain
  }, {
    key: "modifyPrivacyProtection",
    value: function () {
      var _modifyPrivacyProtection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(orderId) {
        var protectPrivacy,
          reason,
          url,
          response,
          _args29 = arguments;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              protectPrivacy = _args29.length > 1 && _args29[1] !== undefined ? _args29[1] : true;
              reason = _args29.length > 2 ? _args29[2] : undefined;
              url = "".concat(this.BASE_URL, "/modify-privacy-protection.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&protect-privacy=").concat(protectPrivacy, "&reason=").concat(reason);
              _context29.prev = 3;
              _context29.next = 6;
              return axios.post(url);
            case 6:
              response = _context29.sent;
              return _context29.abrupt("return", response.data);
            case 10:
              _context29.prev = 10;
              _context29.t0 = _context29["catch"](3);
              throw new Error('Error modifying privacy protection: ' + _context29.t0.message);
            case 13:
            case "end":
              return _context29.stop();
          }
        }, _callee29, this, [[3, 10]]);
      }));
      function modifyPrivacyProtection(_x136) {
        return _modifyPrivacyProtection.apply(this, arguments);
      }
      return modifyPrivacyProtection;
    }() // Modify Authentication Code
  }, {
    key: "modifyAuthCode",
    value: function () {
      var _modifyAuthCode = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(orderId, authCode) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              url = "".concat(this.BASE_URL, "/modify-auth-code.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&auth-code=").concat(authCode);
              _context30.prev = 1;
              _context30.next = 4;
              return axios.post(url);
            case 4:
              response = _context30.sent;
              return _context30.abrupt("return", response.data);
            case 8:
              _context30.prev = 8;
              _context30.t0 = _context30["catch"](1);
              throw new Error('Error modifying authentication code: ' + _context30.t0.message);
            case 11:
            case "end":
              return _context30.stop();
          }
        }, _callee30, this, [[1, 8]]);
      }));
      function modifyAuthCode(_x137, _x138) {
        return _modifyAuthCode.apply(this, arguments);
      }
      return modifyAuthCode;
    }() // Add Custom Name Servers (CNS)
  }, {
    key: "addCustomNameServers",
    value: function () {
      var _addCustomNameServers = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(orderId, cns, ips) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              url = "".concat(this.BASE_URL, "/add-cns.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&cns=").concat(cns, "&ip=").concat(ips.join('&ip='));
              _context31.prev = 1;
              _context31.next = 4;
              return axios.post(url);
            case 4:
              response = _context31.sent;
              return _context31.abrupt("return", response.data);
            case 8:
              _context31.prev = 8;
              _context31.t0 = _context31["catch"](1);
              throw new Error('Error adding custom name servers: ' + _context31.t0.message);
            case 11:
            case "end":
              return _context31.stop();
          }
        }, _callee31, this, [[1, 8]]);
      }));
      function addCustomNameServers(_x139, _x140, _x141) {
        return _addCustomNameServers.apply(this, arguments);
      }
      return addCustomNameServers;
    }() // Modify Custom Name Servers (CNS)
  }, {
    key: "modifyCustomNameServers",
    value: function () {
      var _modifyCustomNameServers = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(orderId, oldCns, newCns) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              url = "".concat(this.BASE_URL, "/modify-cns-name.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&old-cns=").concat(oldCns, "&new-cns=").concat(newCns);
              _context32.prev = 1;
              _context32.next = 4;
              return axios.post(url);
            case 4:
              response = _context32.sent;
              return _context32.abrupt("return", response.data);
            case 8:
              _context32.prev = 8;
              _context32.t0 = _context32["catch"](1);
              throw new Error('Error modifying custom name servers: ' + _context32.t0.message);
            case 11:
            case "end":
              return _context32.stop();
          }
        }, _callee32, this, [[1, 8]]);
      }));
      function modifyCustomNameServers(_x142, _x143, _x144) {
        return _modifyCustomNameServers.apply(this, arguments);
      }
      return modifyCustomNameServers;
    }() // Modify CNS IP Address
  }, {
    key: "modifyCnsIp",
    value: function () {
      var _modifyCnsIp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(orderId, cns, oldIp, newIp) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              url = "".concat(this.BASE_URL, "/modify-cns-ip.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&cns=").concat(cns, "&old-ip=").concat(oldIp, "&new-ip=").concat(newIp);
              _context33.prev = 1;
              _context33.next = 4;
              return axios.post(url);
            case 4:
              response = _context33.sent;
              return _context33.abrupt("return", response.data);
            case 8:
              _context33.prev = 8;
              _context33.t0 = _context33["catch"](1);
              throw new Error('Error modifying CNS IP address: ' + _context33.t0.message);
            case 11:
            case "end":
              return _context33.stop();
          }
        }, _callee33, this, [[1, 8]]);
      }));
      function modifyCnsIp(_x145, _x146, _x147, _x148) {
        return _modifyCnsIp.apply(this, arguments);
      }
      return modifyCnsIp;
    }() // Release .UK Domain to a new registrar tag
  }, {
    key: "releaseUkDomain",
    value: function () {
      var _releaseUkDomain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(orderId, newTag) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              url = "".concat(this.BASE_URL, "/uk/release.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&new-tag=").concat(newTag);
              _context34.prev = 1;
              _context34.next = 4;
              return axios.post(url);
            case 4:
              response = _context34.sent;
              return _context34.abrupt("return", response.data);
            case 8:
              _context34.prev = 8;
              _context34.t0 = _context34["catch"](1);
              throw new Error('Error releasing .UK domain: ' + _context34.t0.message);
            case 11:
            case "end":
              return _context34.stop();
          }
        }, _callee34, this, [[1, 8]]);
      }));
      function releaseUkDomain(_x149, _x150) {
        return _releaseUkDomain.apply(this, arguments);
      }
      return releaseUkDomain;
    }() // Fetch Customer Default Nameservers
  }, {
    key: "getCustomerDefaultNameservers",
    value: function () {
      var _getCustomerDefaultNameservers = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(customerId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              url = "".concat(this.BASE_URL, "customer-default-ns.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&customer-id=").concat(customerId);
              _context35.prev = 1;
              _context35.next = 4;
              return axios.get(url);
            case 4:
              response = _context35.sent;
              return _context35.abrupt("return", response.data);
            case 8:
              _context35.prev = 8;
              _context35.t0 = _context35["catch"](1);
              throw new Error('Error fetching default nameservers: ' + _context35.t0.message);
            case 11:
            case "end":
              return _context35.stop();
          }
        }, _callee35, this, [[1, 8]]);
      }));
      function getCustomerDefaultNameservers(_x151) {
        return _getCustomerDefaultNameservers.apply(this, arguments);
      }
      return getCustomerDefaultNameservers;
    }() // Get lock status for a specific domain
  }, {
    key: "getDomainLockStatus",
    value: function () {
      var _getDomainLockStatus = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36(orderId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) switch (_context36.prev = _context36.next) {
            case 0:
              url = "".concat(this.BASE_URL, "locks.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId);
              _context36.prev = 1;
              _context36.next = 4;
              return axios.get(url);
            case 4:
              response = _context36.sent;
              return _context36.abrupt("return", response.data);
            case 8:
              _context36.prev = 8;
              _context36.t0 = _context36["catch"](1);
              throw new Error('Error fetching domain lock status: ' + _context36.t0.message);
            case 11:
            case "end":
              return _context36.stop();
          }
        }, _callee36, this, [[1, 8]]);
      }));
      function getDomainLockStatus(_x152) {
        return _getDomainLockStatus.apply(this, arguments);
      }
      return getDomainLockStatus;
    }() // Enable theft protection for a specific domain
  }, {
    key: "enableTheftProtection",
    value: function () {
      var _enableTheftProtection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37(orderId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              url = "".concat(this.BASE_URL, "enable-theft-protection.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId);
              _context37.prev = 1;
              _context37.next = 4;
              return axios.post(url);
            case 4:
              response = _context37.sent;
              return _context37.abrupt("return", response.data);
            case 8:
              _context37.prev = 8;
              _context37.t0 = _context37["catch"](1);
              throw new Error('Error enabling theft protection: ' + _context37.t0.message);
            case 11:
            case "end":
              return _context37.stop();
          }
        }, _callee37, this, [[1, 8]]);
      }));
      function enableTheftProtection(_x153) {
        return _enableTheftProtection.apply(this, arguments);
      }
      return enableTheftProtection;
    }() // Disable theft protection for a specific domain
  }, {
    key: "disableTheftProtection",
    value: function () {
      var _disableTheftProtection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee38(orderId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee38$(_context38) {
          while (1) switch (_context38.prev = _context38.next) {
            case 0:
              url = "".concat(this.BASE_URL, "disable-theft-protection.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId);
              _context38.prev = 1;
              _context38.next = 4;
              return axios.post(url);
            case 4:
              response = _context38.sent;
              return _context38.abrupt("return", response.data);
            case 8:
              _context38.prev = 8;
              _context38.t0 = _context38["catch"](1);
              throw new Error('Error disabling theft protection: ' + _context38.t0.message);
            case 11:
            case "end":
              return _context38.stop();
          }
        }, _callee38, this, [[1, 8]]);
      }));
      function disableTheftProtection(_x154) {
        return _disableTheftProtection.apply(this, arguments);
      }
      return disableTheftProtection;
    }() // Delete CNS IP for a specific domain
  }, {
    key: "deleteCnsIp",
    value: function () {
      var _deleteCnsIp = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee39(orderId, cns, ip) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee39$(_context39) {
          while (1) switch (_context39.prev = _context39.next) {
            case 0:
              url = "".concat(this.BASE_URL, "delete-cns-ip.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&cns=").concat(cns, "&ip=").concat(ip);
              _context39.prev = 1;
              _context39.next = 4;
              return axios.post(url);
            case 4:
              response = _context39.sent;
              return _context39.abrupt("return", response.data);
            case 8:
              _context39.prev = 8;
              _context39.t0 = _context39["catch"](1);
              throw new Error('Error deleting CNS IP: ' + _context39.t0.message);
            case 11:
            case "end":
              return _context39.stop();
          }
        }, _callee39, this, [[1, 8]]);
      }));
      function deleteCnsIp(_x155, _x156, _x157) {
        return _deleteCnsIp.apply(this, arguments);
      }
      return deleteCnsIp;
    }() // Suggest domain names based on a keyword
  }, {
    key: "suggestDomainNames",
    value: function () {
      var _suggestDomainNames = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee40(keyword) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee40$(_context40) {
          while (1) switch (_context40.prev = _context40.next) {
            case 0:
              url = "".concat(this.BASE_URL, "suggest-names.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&keyword=").concat(keyword);
              _context40.prev = 1;
              _context40.next = 4;
              return axios.get(url);
            case 4:
              response = _context40.sent;
              return _context40.abrupt("return", response.data);
            case 8:
              _context40.prev = 8;
              _context40.t0 = _context40["catch"](1);
              throw new Error('Error suggesting domain names: ' + _context40.t0.message);
            case 11:
            case "end":
              return _context40.stop();
          }
        }, _callee40, this, [[1, 8]]);
      }));
      function suggestDomainNames(_x158) {
        return _suggestDomainNames.apply(this, arguments);
      }
      return suggestDomainNames;
    }() // Recheck name servers for a given domain
  }, {
    key: "recheckNameServers",
    value: function () {
      var _recheckNameServers = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee41(orderId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee41$(_context41) {
          while (1) switch (_context41.prev = _context41.next) {
            case 0:
              url = "".concat(this.BASE_URL, "recheck-ns.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId);
              _context41.prev = 1;
              _context41.next = 4;
              return axios.post(url);
            case 4:
              response = _context41.sent;
              return _context41.abrupt("return", response.data);
            case 8:
              _context41.prev = 8;
              _context41.t0 = _context41["catch"](1);
              throw new Error('Error rechecking name servers: ' + _context41.t0.message);
            case 11:
            case "end":
              return _context41.stop();
          }
        }, _callee41, this, [[1, 8]]);
      }));
      function recheckNameServers(_x159) {
        return _recheckNameServers.apply(this, arguments);
      }
      return recheckNameServers;
    }() // Validate domain transfer
  }, {
    key: "validateTransfer",
    value: function () {
      var _validateTransfer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee42(domainName) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee42$(_context42) {
          while (1) switch (_context42.prev = _context42.next) {
            case 0:
              url = "".concat(this.BASE_URL, "validate-transfer.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName);
              _context42.prev = 1;
              _context42.next = 4;
              return axios.get(url);
            case 4:
              response = _context42.sent;
              return _context42.abrupt("return", response.data);
            case 8:
              _context42.prev = 8;
              _context42.t0 = _context42["catch"](1);
              throw new Error('Error validating domain transfer: ' + _context42.t0.message);
            case 11:
            case "end":
              return _context42.stop();
          }
        }, _callee42, this, [[1, 8]]);
      }));
      function validateTransfer(_x160) {
        return _validateTransfer.apply(this, arguments);
      }
      return validateTransfer;
    }() // Fetch association details for a domain
  }, {
    key: "getAssociationDetails",
    value: function () {
      var _getAssociationDetails = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee43(orderId, associationId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee43$(_context43) {
          while (1) switch (_context43.prev = _context43.next) {
            case 0:
              url = "".concat(this.BASE_URL, "association-details.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&association-id=").concat(associationId);
              _context43.prev = 1;
              _context43.next = 4;
              return axios.get(url);
            case 4:
              response = _context43.sent;
              return _context43.abrupt("return", response.data);
            case 8:
              _context43.prev = 8;
              _context43.t0 = _context43["catch"](1);
              throw new Error('Error fetching association details: ' + _context43.t0.message);
            case 11:
            case "end":
              return _context43.stop();
          }
        }, _callee43, this, [[1, 8]]);
      }));
      function getAssociationDetails(_x161, _x162) {
        return _getAssociationDetails.apply(this, arguments);
      }
      return getAssociationDetails;
    }() // Check IDN domain availability
  }, {
    key: "checkIDNAvailability",
    value: function () {
      var _checkIDNAvailability = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee44(domainNames) {
        var tld,
          languageCode,
          domainParams,
          url,
          response,
          _args44 = arguments;
        return _regeneratorRuntime().wrap(function _callee44$(_context44) {
          while (1) switch (_context44.prev = _context44.next) {
            case 0:
              tld = _args44.length > 1 && _args44[1] !== undefined ? _args44[1] : 'com';
              languageCode = _args44.length > 2 && _args44[2] !== undefined ? _args44[2] : 'aze';
              domainParams = domainNames.map(function (domain) {
                return "domain-name=".concat(domain);
              }).join('&');
              url = "https://domaincheck.httpapi.com/api/domains/idn-available.json?auth-userid=".concat(this.userId, "&api-key=").concat(this.apiKey, "&").concat(domainParams, "&tld=").concat(tld, "&idnLanguageCode=").concat(languageCode);
              _context44.prev = 4;
              _context44.next = 7;
              return axios.get(url);
            case 7:
              response = _context44.sent;
              return _context44.abrupt("return", response.data);
            case 11:
              _context44.prev = 11;
              _context44.t0 = _context44["catch"](4);
              throw new Error('Error checking IDN domain availability: ' + _context44.t0.message);
            case 14:
            case "end":
              return _context44.stop();
          }
        }, _callee44, this, [[4, 11]]);
      }));
      function checkIDNAvailability(_x163) {
        return _checkIDNAvailability.apply(this, arguments);
      }
      return checkIDNAvailability;
    }() // Fetch domain details by domain name
  }, {
    key: "getDomainDetails",
    value: function () {
      var _getDomainDetails = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee45(domainName) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee45$(_context45) {
          while (1) switch (_context45.prev = _context45.next) {
            case 0:
              url = "".concat(this.BASE_URL, "/details-by-name.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&options=OrderDetails");
              _context45.prev = 1;
              _context45.next = 4;
              return axios.get(url);
            case 4:
              response = _context45.sent;
              return _context45.abrupt("return", response.data);
            case 8:
              _context45.prev = 8;
              _context45.t0 = _context45["catch"](1);
              throw new Error('Error fetching domain details: ' + _context45.t0.message);
            case 11:
            case "end":
              return _context45.stop();
          }
        }, _callee45, this, [[1, 8]]);
      }));
      function getDomainDetails(_x164) {
        return _getDomainDetails.apply(this, arguments);
      }
      return getDomainDetails;
    }()
  }, {
    key: "addDsRc",
    value: function () {
      var _addDsRc = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee46(domainName) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee46$(_context46) {
          while (1) switch (_context46.prev = _context46.next) {
            case 0:
              url = "".concat(this.BASE_URL, "add-dnssec.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&options=OrderDetails");
              _context46.prev = 1;
              _context46.next = 4;
              return axios.post(url);
            case 4:
              response = _context46.sent;
              return _context46.abrupt("return", response.data);
            case 8:
              _context46.prev = 8;
              _context46.t0 = _context46["catch"](1);
              throw new Error('Error fetching domain details: ' + _context46.t0.message);
            case 11:
            case "end":
              return _context46.stop();
          }
        }, _callee46, this, [[1, 8]]);
      }));
      function addDsRc(_x165) {
        return _addDsRc.apply(this, arguments);
      }
      return addDsRc;
    }() // Delete DNSSEC from a domain
  }, {
    key: "deleteDnssec",
    value: function () {
      var _deleteDnssec = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee47(orderId, keytag, algorithm, digestType, digest) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee47$(_context47) {
          while (1) switch (_context47.prev = _context47.next) {
            case 0:
              url = "".concat(this.BASE_URL, "del-dnssec.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&attr-name1=keytag&attr-value1=").concat(keytag, "&attr-name2=algorithm&attr-value2=").concat(algorithm, "&attr-name3=digesttype&attr-value3=").concat(digestType, "&attr-name4=digest&attr-value4=").concat(digest);
              _context47.prev = 1;
              _context47.next = 4;
              return axios.post(url);
            case 4:
              response = _context47.sent;
              return _context47.abrupt("return", response.data);
            case 8:
              _context47.prev = 8;
              _context47.t0 = _context47["catch"](1);
              throw new Error('Error deleting DNSSEC: ' + _context47.t0.message);
            case 11:
            case "end":
              return _context47.stop();
          }
        }, _callee47, this, [[1, 8]]);
      }));
      function deleteDnssec(_x166, _x167, _x168, _x169, _x170) {
        return _deleteDnssec.apply(this, arguments);
      }
      return deleteDnssec;
    }() // Check premium domain availability
  }, {
    key: "checkPremiumDomains",
    value: function () {
      var _checkPremiumDomains = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee48(keyword) {
        var tlds,
          priceHigh,
          noOfResults,
          tldsParam,
          url,
          response,
          _args48 = arguments;
        return _regeneratorRuntime().wrap(function _callee48$(_context48) {
          while (1) switch (_context48.prev = _context48.next) {
            case 0:
              tlds = _args48.length > 1 && _args48[1] !== undefined ? _args48[1] : ['com', 'net', 'org'];
              priceHigh = _args48.length > 2 && _args48[2] !== undefined ? _args48[2] : 10000;
              noOfResults = _args48.length > 3 && _args48[3] !== undefined ? _args48[3] : 10;
              tldsParam = tlds.map(function (tld) {
                return "&tlds=".concat(tld);
              }).join('');
              url = "https://domaincheck.httpapi.com/api/domains/premium/available.json?auth-userid=".concat(this.userId, "&api-key=").concat(this.apiKey, "&key-word=").concat(encodeURIComponent(keyword)).concat(tldsParam, "&price-high=").concat(priceHigh, "&no-of-results=").concat(noOfResults);
              _context48.prev = 5;
              _context48.next = 8;
              return axios.get(url);
            case 8:
              response = _context48.sent;
              return _context48.abrupt("return", response.data);
            case 12:
              _context48.prev = 12;
              _context48.t0 = _context48["catch"](5);
              throw new Error('Error fetching premium domain availability: ' + _context48.t0.message);
            case 15:
            case "end":
              return _context48.stop();
          }
        }, _callee48, this, [[5, 12]]);
      }));
      function checkPremiumDomains(_x171) {
        return _checkPremiumDomains.apply(this, arguments);
      }
      return checkPremiumDomains;
    }() // Preorder a domain
  }, {
    key: "preOrderDomain",
    value: function () {
      var _preOrderDomain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee49(customerId, domain) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee49$(_context49) {
          while (1) switch (_context49.prev = _context49.next) {
            case 0:
              url = "".concat(this.BASE_URL, "preordering/add.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&customerid=").concat(customerId, "&domain=").concat(encodeURIComponent(domain));
              _context49.prev = 1;
              _context49.next = 4;
              return axios.post(url);
            case 4:
              response = _context49.sent;
              return _context49.abrupt("return", response.data);
            case 8:
              _context49.prev = 8;
              _context49.t0 = _context49["catch"](1);
              throw new Error('Error preordering the domain: ' + _context49.t0.message);
            case 11:
            case "end":
              return _context49.stop();
          }
        }, _callee49, this, [[1, 8]]);
      }));
      function preOrderDomain(_x172, _x173) {
        return _preOrderDomain.apply(this, arguments);
      }
      return preOrderDomain;
    }() // Delete a preordered domain
  }, {
    key: "deletePreorderedDomain",
    value: function () {
      var _deletePreorderedDomain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee50(customerId, domain) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee50$(_context50) {
          while (1) switch (_context50.prev = _context50.next) {
            case 0:
              url = "".concat(this.BASE_URL, "preordering/delete.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&customerid=").concat(customerId, "&domain=").concat(encodeURIComponent(domain));
              _context50.prev = 1;
              _context50.next = 4;
              return axios.post(url);
            case 4:
              response = _context50.sent;
              return _context50.abrupt("return", response.data);
            case 8:
              _context50.prev = 8;
              _context50.t0 = _context50["catch"](1);
              throw new Error('Error deleting the preordered domain: ' + _context50.t0.message);
            case 11:
            case "end":
              return _context50.stop();
          }
        }, _callee50, this, [[1, 8]]);
      }));
      function deletePreorderedDomain(_x174, _x175) {
        return _deletePreorderedDomain.apply(this, arguments);
      }
      return deletePreorderedDomain;
    }() // Fetch preordered domains
  }, {
    key: "fetchPreorderedDomains",
    value: function () {
      var _fetchPreorderedDomains = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
        var noOfRecords,
          pageNo,
          url,
          response,
          _args51 = arguments;
        return _regeneratorRuntime().wrap(function _callee51$(_context51) {
          while (1) switch (_context51.prev = _context51.next) {
            case 0:
              noOfRecords = _args51.length > 0 && _args51[0] !== undefined ? _args51[0] : 10;
              pageNo = _args51.length > 1 && _args51[1] !== undefined ? _args51[1] : 1;
              url = "".concat(this.BASE_URL, "preordering/fetch.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&no-of-records=").concat(noOfRecords, "&page-no=").concat(pageNo);
              _context51.prev = 3;
              _context51.next = 6;
              return axios.get(url);
            case 6:
              response = _context51.sent;
              return _context51.abrupt("return", response.data);
            case 10:
              _context51.prev = 10;
              _context51.t0 = _context51["catch"](3);
              throw new Error('Error fetching preordered domains: ' + _context51.t0.message);
            case 13:
            case "end":
              return _context51.stop();
          }
        }, _callee51, this, [[3, 10]]);
      }));
      function fetchPreorderedDomains() {
        return _fetchPreorderedDomains.apply(this, arguments);
      }
      return fetchPreorderedDomains;
    }() // Fetch available TLD list for preordering
  }, {
    key: "fetchTLDList",
    value: function () {
      var _fetchTLDList = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
        var category,
          url,
          response,
          _args52 = arguments;
        return _regeneratorRuntime().wrap(function _callee52$(_context52) {
          while (1) switch (_context52.prev = _context52.next) {
            case 0:
              category = _args52.length > 0 && _args52[0] !== undefined ? _args52[0] : 'services';
              url = "".concat(this.BASE_URL, "preordering/fetchtldlist.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&category=").concat(category);
              _context52.prev = 2;
              _context52.next = 5;
              return axios.get(url);
            case 5:
              response = _context52.sent;
              return _context52.abrupt("return", response.data);
            case 9:
              _context52.prev = 9;
              _context52.t0 = _context52["catch"](2);
              throw new Error('Error fetching TLD list for preordering: ' + _context52.t0.message);
            case 12:
            case "end":
              return _context52.stop();
          }
        }, _callee52, this, [[2, 9]]);
      }));
      function fetchTLDList() {
        return _fetchTLDList.apply(this, arguments);
      }
      return fetchTLDList;
    }() // Check domain availability during the sunrise period
  }, {
    key: "checkSunriseAvailability",
    value: function () {
      var _checkSunriseAvailability = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee53(domainName, tld) {
        var smd,
          url,
          response,
          _args53 = arguments;
        return _regeneratorRuntime().wrap(function _callee53$(_context53) {
          while (1) switch (_context53.prev = _context53.next) {
            case 0:
              smd = _args53.length > 2 && _args53[2] !== undefined ? _args53[2] : '';
              url = "https://domaincheck.httpapi.com/api/domains/available-sunrise.json?auth-userid=".concat(this.userId, "&api-key=").concat(this.apiKey, "&domainname=").concat(domainName, "&tld=").concat(tld, "&smd=").concat(smd);
              _context53.prev = 2;
              _context53.next = 5;
              return axios.get(url);
            case 5:
              response = _context53.sent;
              return _context53.abrupt("return", response.data);
            case 9:
              _context53.prev = 9;
              _context53.t0 = _context53["catch"](2);
              throw new Error('Error checking sunrise availability: ' + _context53.t0.message);
            case 12:
            case "end":
              return _context53.stop();
          }
        }, _callee53, this, [[2, 9]]);
      }));
      function checkSunriseAvailability(_x176, _x177) {
        return _checkSunriseAvailability.apply(this, arguments);
      }
      return checkSunriseAvailability;
    }() // Fetch Trademark Notice for a given lookup key
  }, {
    key: "getTrademarkNotice",
    value: function () {
      var _getTrademarkNotice = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee54(lookupKey) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee54$(_context54) {
          while (1) switch (_context54.prev = _context54.next) {
            case 0:
              url = "".concat(this.BASE_URL, "get-tm-notice.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&lookup-key=").concat(lookupKey);
              _context54.prev = 1;
              _context54.next = 4;
              return axios.get(url);
            case 4:
              response = _context54.sent;
              return _context54.abrupt("return", response.data);
            case 8:
              _context54.prev = 8;
              _context54.t0 = _context54["catch"](1);
              throw new Error('Error fetching trademark notice: ' + _context54.t0.message);
            case 11:
            case "end":
              return _context54.stop();
          }
        }, _callee54, this, [[1, 8]]);
      }));
      function getTrademarkNotice(_x178) {
        return _getTrademarkNotice.apply(this, arguments);
      }
      return getTrademarkNotice;
    }() // Fetch TLDs that are in a specific phase (e.g., "sunrise")
  }, {
    key: "getTLDsInPhase",
    value: function () {
      var _getTLDsInPhase = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee55(phase) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee55$(_context55) {
          while (1) switch (_context55.prev = _context55.next) {
            case 0:
              url = "".concat(this.BASE_URL, "tlds-in-phase.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&phase=").concat(phase);
              _context55.prev = 1;
              _context55.next = 4;
              return axios.get(url);
            case 4:
              response = _context55.sent;
              return _context55.abrupt("return", response.data);
            case 8:
              _context55.prev = 8;
              _context55.t0 = _context55["catch"](1);
              throw new Error('Error fetching TLDs in phase: ' + _context55.t0.message);
            case 11:
            case "end":
              return _context55.stop();
          }
        }, _callee55, this, [[1, 8]]);
      }));
      function getTLDsInPhase(_x179) {
        return _getTLDsInPhase.apply(this, arguments);
      }
      return getTLDsInPhase;
    }() // Purchase privacy for a domain with an option for invoice
  }, {
    key: "purchasePrivacy",
    value: function () {
      var _purchasePrivacy = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee56(orderId) {
        var invoiceOption,
          url,
          response,
          _args56 = arguments;
        return _regeneratorRuntime().wrap(function _callee56$(_context56) {
          while (1) switch (_context56.prev = _context56.next) {
            case 0:
              invoiceOption = _args56.length > 1 && _args56[1] !== undefined ? _args56[1] : 'NoInvoice';
              url = "".concat(this.BASE_URL, "purchase-privacy.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&invoice-option=").concat(encodeURIComponent(invoiceOption));
              _context56.prev = 2;
              _context56.next = 5;
              return axios.post(url);
            case 5:
              response = _context56.sent;
              return _context56.abrupt("return", response.data);
            case 9:
              _context56.prev = 9;
              _context56.t0 = _context56["catch"](2);
              throw new Error('Error purchasing domain privacy: ' + _context56.t0.message);
            case 12:
            case "end":
              return _context56.stop();
          }
        }, _callee56, this, [[2, 9]]);
      }));
      function purchasePrivacy(_x180) {
        return _purchasePrivacy.apply(this, arguments);
      }
      return purchasePrivacy;
    }() // Check if a UK domain is available
  }, {
    key: "checkDomainAvailabilityUK",
    value: function () {
      var _checkDomainAvailabilityUK = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee57(domainName, name, company, email, address, city, state, country, zipcode) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee57$(_context57) {
          while (1) switch (_context57.prev = _context57.next) {
            case 0:
              url = "https://domaincheck.httpapi.com/api/domains/uk/available.json?auth-userid=".concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(encodeURIComponent(domainName), "&name=").concat(encodeURIComponent(name), "&company=").concat(encodeURIComponent(company), "&email=").concat(encodeURIComponent(email), "&address-line-1=").concat(encodeURIComponent(address), "&city=").concat(encodeURIComponent(city), "&state=").concat(encodeURIComponent(state), "&country=").concat(encodeURIComponent(country), "&zipcode=").concat(encodeURIComponent(zipcode));
              _context57.prev = 1;
              _context57.next = 4;
              return axios.get(url);
            case 4:
              response = _context57.sent;
              return _context57.abrupt("return", response.data);
            case 8:
              _context57.prev = 8;
              _context57.t0 = _context57["catch"](1);
              throw new Error('Error checking domain availability: ' + _context57.t0.message);
            case 11:
            case "end":
              return _context57.stop();
          }
        }, _callee57, this, [[1, 8]]);
      }));
      function checkDomainAvailabilityUK(_x181, _x182, _x183, _x184, _x185, _x186, _x187, _x188, _x189) {
        return _checkDomainAvailabilityUK.apply(this, arguments);
      }
      return checkDomainAvailabilityUK;
    }() // Submit the domain transfer authorization code
  }, {
    key: "submitAuthCode",
    value: function () {
      var _submitAuthCode = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee58(orderId, authCode) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee58$(_context58) {
          while (1) switch (_context58.prev = _context58.next) {
            case 0:
              url = "".concat(this.BASE_URL, "transfer/submit-auth-code.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&auth-code=").concat(encodeURIComponent(authCode));
              _context58.prev = 1;
              _context58.next = 4;
              return axios.post(url);
            case 4:
              response = _context58.sent;
              return _context58.abrupt("return", response.data);
            case 8:
              _context58.prev = 8;
              _context58.t0 = _context58["catch"](1);
              throw new Error('Error submitting the transfer authorization code: ' + _context58.t0.message);
            case 11:
            case "end":
              return _context58.stop();
          }
        }, _callee58, this, [[1, 8]]);
      }));
      function submitAuthCode(_x190, _x191) {
        return _submitAuthCode.apply(this, arguments);
      }
      return submitAuthCode;
    }() // Fetch TLD info
  }, {
    key: "fetchTldInfo",
    value: function () {
      var _fetchTldInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee59$(_context59) {
          while (1) switch (_context59.prev = _context59.next) {
            case 0:
              url = "".concat(this.BASE_URL, "tld-info.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey);
              _context59.prev = 1;
              _context59.next = 4;
              return axios.get(url);
            case 4:
              response = _context59.sent;
              return _context59.abrupt("return", response.data);
            case 8:
              _context59.prev = 8;
              _context59.t0 = _context59["catch"](1);
              throw new Error('Error fetching TLD info: ' + _context59.t0.message);
            case 11:
            case "end":
              return _context59.stop();
          }
        }, _callee59, this, [[1, 8]]);
      }));
      function fetchTldInfo() {
        return _fetchTldInfo.apply(this, arguments);
      }
      return fetchTldInfo;
    }() // Check the availability of third-level domains
  }, {
    key: "checkThirdLevelDomainAvailability",
    value: function () {
      var _checkThirdLevelDomainAvailability = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee60(domainNames, tlds) {
        var domainNamesParam, tldsParam, url, response;
        return _regeneratorRuntime().wrap(function _callee60$(_context60) {
          while (1) switch (_context60.prev = _context60.next) {
            case 0:
              domainNamesParam = domainNames.join('&domain-name=');
              tldsParam = tlds.join('&tlds=');
              url = "https://domaincheck.httpapi.com/api/domains?auth-userid=".concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainNamesParam, "&").concat(tldsParam);
              _context60.prev = 3;
              _context60.next = 6;
              return axios.get(url);
            case 6:
              response = _context60.sent;
              return _context60.abrupt("return", response.data);
            case 10:
              _context60.prev = 10;
              _context60.t0 = _context60["catch"](3);
              throw new Error('Error checking domain availability: ' + _context60.t0.message);
            case 13:
            case "end":
              return _context60.stop();
          }
        }, _callee60, this, [[3, 10]]);
      }));
      function checkThirdLevelDomainAvailability(_x192, _x193) {
        return _checkThirdLevelDomainAvailability.apply(this, arguments);
      }
      return checkThirdLevelDomainAvailability;
    }()
  }]);
}();
module.exports = {
  Domain: Domain
};