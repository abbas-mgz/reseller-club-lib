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
  function Domain(apiKey, userId) {
    _classCallCheck(this, Domain);
    this.apiKey = apiKey || process.env.API_KEY_RESELLER_CLUB;
    this.userId = userId || process.env.AUTH_USER_ID;
    if (!this.apiKey || !this.userId) {
      throw new Error('API Key and User ID are required.');
    }
    this.BASE_URL = 'https://test.httpapi.com/api';
  }
  return _createClass(Domain, [{
    key: "deleteDomain",
    value: function () {
      var _deleteDomain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(orderId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              url = "".concat(this.BASE_URL, "/domains/delete.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId);
              _context.prev = 1;
              _context.next = 4;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/renew.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&years=").concat(years, "&exp-date=").concat(expDate, "&invoice-option=").concat(invoiceOption);
              _context2.prev = 2;
              _context2.next = 5;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/renew.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&years=").concat(years, "&exp-date=").concat(expDate, "&invoice-option=").concat(invoiceOption, "&purchase-privacy=").concat(purchasePrivacy);
              _context3.prev = 3;
              _context3.next = 6;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/renew.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&years=").concat(years, "&exp-date=").concat(expDate, "&invoice-option=").concat(invoiceOption, "&attr-name1=premium&attr-value1=true");
              _context4.prev = 2;
              _context4.next = 5;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/register.xml?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption);
              _context5.prev = 3;
              _context5.next = 6;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/register.xml?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&purchase-privacy=").concat(purchasePrivacy);
              _context6.prev = 4;
              _context6.next = 7;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/register.xml?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customerid=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption).concat(attrParams);
              _context7.prev = 5;
              _context7.next = 8;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/register.xml?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption).concat(attrParams);
              _context8.prev = 5;
              _context8.next = 8;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/register.xml?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption).concat(attrParams);
              _context9.prev = 5;
              _context9.next = 8;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/register.xml?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption).concat(attrParams);
              _context10.prev = 5;
              _context10.next = 8;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/register.xml?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&attr-name1=premium&attr-value1=true");
              _context11.prev = 3;
              _context11.next = 6;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/register.xml?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&attr-name1=eap&attr-value1=true");
              _context12.prev = 3;
              _context12.next = 6;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/register.xml?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&years=").concat(years).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&attr-name1=premium&attr-value1=true&attr-name2=eap&attr-value2=true");
              _context13.prev = 3;
              _context13.next = 6;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/transfer.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&auth-code=").concat(authCode).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&purchase-privacy=true");
              _context14.prev = 3;
              _context14.next = 6;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/transfer.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&auth-code=").concat(authCode).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&attr-name1=cedcontactid&attr-value1=").concat(cedContactId);
              _context15.prev = 3;
              _context15.next = 6;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/transfer.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName, "&auth-code=").concat(authCode).concat(nsParams, "&customer-id=").concat(customerId, "&reg-contact-id=").concat(regContactId, "&admin-contact-id=").concat(adminContactId, "&tech-contact-id=").concat(techContactId, "&billing-contact-id=").concat(billingContactId, "&invoice-option=").concat(invoiceOption, "&purchase-privacy=").concat(purchasePrivacy, "&attr-name1=premium&attr-value1=true");
              _context16.prev = 4;
              _context16.next = 7;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/cancel-transfer.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId);
              _context17.prev = 1;
              _context17.next = 4;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/restore.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&invoice-option=KeepInvoice");
              _context18.prev = 1;
              _context18.next = 4;
              return axios.get(url);
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
              url = "".concat(this.BASE_URL, "/domains/orderid.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domainName);
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
              url = "".concat(this.BASE_URL, "/domains/available.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&domain-name=").concat(domains.join('&domain-name='), "&tlds=").concat(tlds.join('&tlds='));
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
              url = "".concat(this.BASE_URL, "?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&order-id=").concat(orderId, "&options=OrderDetails");
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
              url = "".concat(this.BASE_URL, "?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&no-of-records=").concat(noOfRecords, "&page-no=").concat(pageNo);
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
              return axios.get(url);
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
              return axios.get(url);
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
    }()
  }]);
}();
module.exports = {
  Domain: Domain
};