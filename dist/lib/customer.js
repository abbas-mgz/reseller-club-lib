"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var axios = require('axios');
var Customer = /*#__PURE__*/function () {
  function Customer() {
    _classCallCheck(this, Customer);
    this.apiKey = global.resellerGlobalConfig.apiKey;
    this.userId = global.resellerGlobalConfig.userId;
    if (!this.apiKey || !this.userId) {
      throw new Error('API Key and User ID are required.');
    }
    if (global.resellerGlobalConfig.baseUrl.endsWith('/')) global.resellerGlobalConfig.baseUrl = global.resellerGlobalConfig.baseUrl.substring(0, global.resellerGlobalConfig.baseUrl.length - 1);
    this.BASE_URL = global.resellerGlobalConfig.baseUrl + '/customers/';
  }
  return _createClass(Customer, [{
    key: "signupCustomer",
    value: function () {
      var _signupCustomer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(customerInfo) {
        var username, passwd, name, company, addressLine1, city, state, country, zipcode, phoneCC, phone, langPref, vatId, url, response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              username = customerInfo.username, passwd = customerInfo.passwd, name = customerInfo.name, company = customerInfo.company, addressLine1 = customerInfo.addressLine1, city = customerInfo.city, state = customerInfo.state, country = customerInfo.country, zipcode = customerInfo.zipcode, phoneCC = customerInfo.phoneCC, phone = customerInfo.phone, langPref = customerInfo.langPref, vatId = customerInfo.vatId;
              url = "".concat(this.BASE_URL, "signup.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&username=").concat(username, "&vat-id=").concat(vatId, "&passwd=").concat(passwd, "&name=").concat(name, "&company=").concat(company, "&address-line-1=").concat(addressLine1, "&city=").concat(city, "&state=").concat(state, "&country=").concat(country, "&zipcode=").concat(zipcode, "&phone-cc=").concat(phoneCC, "&phone=").concat(phone, "&lang-pref=").concat(langPref);
              _context.prev = 2;
              _context.next = 5;
              return axios.post(url);
            case 5:
              response = _context.sent;
              return _context.abrupt("return", response.data);
            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              throw new Error('Error during signup: ' + _context.t0.message);
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 9]]);
      }));
      function signupCustomer(_x) {
        return _signupCustomer.apply(this, arguments);
      }
      return signupCustomer;
    }()
  }, {
    key: "modifyCustomer",
    value: function () {
      var _modifyCustomer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(customerInfo) {
        var customerId, username, name, company, langPref, addressLine1, city, state, country, zipcode, phoneCC, phone, url, response;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              customerId = customerInfo.customerId, username = customerInfo.username, name = customerInfo.name, company = customerInfo.company, langPref = customerInfo.langPref, addressLine1 = customerInfo.addressLine1, city = customerInfo.city, state = customerInfo.state, country = customerInfo.country, zipcode = customerInfo.zipcode, phoneCC = customerInfo.phoneCC, phone = customerInfo.phone;
              url = "".concat(this.BASE_URL, "modify.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&customer-id=").concat(customerId, "&username=").concat(username, "&name=").concat(name, "&company=").concat(company, "&lang-pref=").concat(langPref, "&address-line-1=").concat(addressLine1, "&city=").concat(city, "&state=").concat(state, "&country=").concat(country, "&zipcode=").concat(zipcode, "&phone-cc=").concat(phoneCC, "&phone=").concat(phone);
              _context2.prev = 2;
              _context2.next = 5;
              return axios.post(url);
            case 5:
              response = _context2.sent;
              return _context2.abrupt("return", response.data);
            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              throw new Error('Error modifying customer: ' + _context2.t0.message);
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[2, 9]]);
      }));
      function modifyCustomer(_x2) {
        return _modifyCustomer.apply(this, arguments);
      }
      return modifyCustomer;
    }()
  }, {
    key: "changePasswordCustomer",
    value: function () {
      var _changePasswordCustomer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(customerId, newPassword) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              url = "".concat(this.BASE_URL, "change-password.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&customer-id=").concat(customerId, "&new-passwd=").concat(newPassword);
              _context3.prev = 1;
              _context3.next = 4;
              return axios.post(url);
            case 4:
              response = _context3.sent;
              return _context3.abrupt("return", response.data);
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              throw new Error('Error changing password: ' + _context3.t0.message);
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[1, 8]]);
      }));
      function changePasswordCustomer(_x3, _x4) {
        return _changePasswordCustomer.apply(this, arguments);
      }
      return changePasswordCustomer;
    }()
  }, {
    key: "generateTokenCustomer",
    value: function () {
      var _generateTokenCustomer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(username, password, ip) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              url = "".concat(this.BASE_URL, "generate-token.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&username=").concat(username, "&passwd=").concat(password, "&ip=").concat(ip);
              _context4.prev = 1;
              _context4.next = 4;
              return axios.get(url);
            case 4:
              response = _context4.sent;
              return _context4.abrupt("return", response.data);
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](1);
              throw new Error('Error generating token: ' + _context4.t0.message);
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[1, 8]]);
      }));
      function generateTokenCustomer(_x5, _x6, _x7) {
        return _generateTokenCustomer.apply(this, arguments);
      }
      return generateTokenCustomer;
    }()
  }, {
    key: "authenticateTokenCustomer",
    value: function () {
      var _authenticateTokenCustomer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(token) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              url = "".concat(this.BASE_URL, "authenticate-token.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&token=").concat(token);
              _context5.prev = 1;
              _context5.next = 4;
              return axios.get(url);
            case 4:
              response = _context5.sent;
              return _context5.abrupt("return", response.data);
            case 8:
              _context5.prev = 8;
              _context5.t0 = _context5["catch"](1);
              throw new Error('Error authenticating token: ' + _context5.t0.message);
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[1, 8]]);
      }));
      function authenticateTokenCustomer(_x8) {
        return _authenticateTokenCustomer.apply(this, arguments);
      }
      return authenticateTokenCustomer;
    }()
  }, {
    key: "getCustomerDetails",
    value: function () {
      var _getCustomerDetails = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(username) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              url = "".concat(this.BASE_URL, "details.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&username=").concat(username);
              _context6.prev = 1;
              _context6.next = 4;
              return axios.get(url);
            case 4:
              response = _context6.sent;
              return _context6.abrupt("return", response.data);
            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](1);
              throw new Error('Error fetching customer details: ' + _context6.t0.message);
            case 11:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[1, 8]]);
      }));
      function getCustomerDetails(_x9) {
        return _getCustomerDetails.apply(this, arguments);
      }
      return getCustomerDetails;
    }()
  }, {
    key: "deleteCustomer",
    value: function () {
      var _deleteCustomer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(customerId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              url = "".concat(this.BASE_URL, "delete.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&customer-id=").concat(customerId);
              _context7.prev = 1;
              _context7.next = 4;
              return axios.post(url);
            case 4:
              response = _context7.sent;
              return _context7.abrupt("return", response.data);
            case 8:
              _context7.prev = 8;
              _context7.t0 = _context7["catch"](1);
              throw new Error('Error deleting customer: ' + _context7.t0.message);
            case 11:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[1, 8]]);
      }));
      function deleteCustomer(_x10) {
        return _deleteCustomer.apply(this, arguments);
      }
      return deleteCustomer;
    }()
  }, {
    key: "getCustomerDetailsById",
    value: function () {
      var _getCustomerDetailsById = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(customerId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              url = "".concat(this.BASE_URL, "details-by-id.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&customer-id=").concat(customerId);
              _context8.prev = 1;
              _context8.next = 4;
              return axios.get(url);
            case 4:
              response = _context8.sent;
              return _context8.abrupt("return", response.data);
            case 8:
              _context8.prev = 8;
              _context8.t0 = _context8["catch"](1);
              throw new Error('Error fetching customer details: ' + _context8.t0.message);
            case 11:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[1, 8]]);
      }));
      function getCustomerDetailsById(_x11) {
        return _getCustomerDetailsById.apply(this, arguments);
      }
      return getCustomerDetailsById;
    }()
  }, {
    key: "searchCustomers",
    value: function () {
      var _searchCustomers = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        var noOfRecords,
          pageNo,
          url,
          response,
          _args9 = arguments;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              noOfRecords = _args9.length > 0 && _args9[0] !== undefined ? _args9[0] : 10;
              pageNo = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : 1;
              url = "".concat(this.BASE_URL, "search.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&no-of-records=").concat(noOfRecords, "&page-no=").concat(pageNo);
              _context9.prev = 3;
              _context9.next = 6;
              return axios.get(url);
            case 6:
              response = _context9.sent;
              return _context9.abrupt("return", response.data);
            case 10:
              _context9.prev = 10;
              _context9.t0 = _context9["catch"](3);
              throw new Error('Error searching customers: ' + _context9.t0.message);
            case 13:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[3, 10]]);
      }));
      function searchCustomers() {
        return _searchCustomers.apply(this, arguments);
      }
      return searchCustomers;
    }()
  }, {
    key: "authenticateTokenWithoutHistory",
    value: function () {
      var _authenticateTokenWithoutHistory = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(token) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              url = "".concat(this.BASE_URL, "authenticate-token-without-history.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&token=").concat(token);
              _context10.prev = 1;
              _context10.next = 4;
              return axios.get(url);
            case 4:
              response = _context10.sent;
              return _context10.abrupt("return", response.data);
            case 8:
              _context10.prev = 8;
              _context10.t0 = _context10["catch"](1);
              throw new Error('Error authenticating token without history: ' + _context10.t0.message);
            case 11:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[1, 8]]);
      }));
      function authenticateTokenWithoutHistory(_x12) {
        return _authenticateTokenWithoutHistory.apply(this, arguments);
      }
      return authenticateTokenWithoutHistory;
    }()
  }, {
    key: "forgotPassword",
    value: function () {
      var _forgotPassword = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(username) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              url = "".concat(this.BASE_URL, "forgot-password.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&username=").concat(username);
              _context11.prev = 1;
              _context11.next = 4;
              return axios.post(url);
            case 4:
              response = _context11.sent;
              return _context11.abrupt("return", response.data);
            case 8:
              _context11.prev = 8;
              _context11.t0 = _context11["catch"](1);
              throw new Error('Error requesting password reset: ' + _context11.t0.message);
            case 11:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[1, 8]]);
      }));
      function forgotPassword(_x13) {
        return _forgotPassword.apply(this, arguments);
      }
      return forgotPassword;
    }()
  }, {
    key: "authenticate",
    value: function () {
      var _authenticate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(username, password) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              url = "".concat(this.BASE_URL, "authenticate.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&username=").concat(username, "&passwd=").concat(password);
              _context12.prev = 1;
              _context12.next = 4;
              return axios.get(url);
            case 4:
              response = _context12.sent;
              return _context12.abrupt("return", response.data);
            case 8:
              _context12.prev = 8;
              _context12.t0 = _context12["catch"](1);
              throw new Error('Error authenticating user: ' + _context12.t0.message);
            case 11:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[1, 8]]);
      }));
      function authenticate(_x14, _x15) {
        return _authenticate.apply(this, arguments);
      }
      return authenticate;
    }()
  }, {
    key: "generateOTP",
    value: function () {
      var _generateOTP = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(customerId) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              url = "".concat(this.BASE_URL, "authenticate/generate-otp.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&customerid=").concat(customerId);
              _context13.prev = 1;
              _context13.next = 4;
              return axios.get(url);
            case 4:
              response = _context13.sent;
              return _context13.abrupt("return", response.data);
            case 8:
              _context13.prev = 8;
              _context13.t0 = _context13["catch"](1);
              throw new Error('Error generating OTP: ' + _context13.t0.message);
            case 11:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this, [[1, 8]]);
      }));
      function generateOTP(_x16) {
        return _generateOTP.apply(this, arguments);
      }
      return generateOTP;
    }()
  }, {
    key: "verifyOTP",
    value: function () {
      var _verifyOTP = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(customerId, otp) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              url = "".concat(this.BASE_URL, "authenticate/verify-otp.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&customerid=").concat(customerId, "&otp=").concat(otp);
              _context14.prev = 1;
              _context14.next = 4;
              return axios.get(url);
            case 4:
              response = _context14.sent;
              return _context14.abrupt("return", response.data);
            case 8:
              _context14.prev = 8;
              _context14.t0 = _context14["catch"](1);
              throw new Error('Error verifying OTP: ' + _context14.t0.message);
            case 11:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this, [[1, 8]]);
      }));
      function verifyOTP(_x17, _x18) {
        return _verifyOTP.apply(this, arguments);
      }
      return verifyOTP;
    }()
  }, {
    key: "generateLoginToken",
    value: function () {
      var _generateLoginToken = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(customerId, ip) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              url = "".concat(this.BASE_URL, "generate-login-token.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&customer-id=").concat(customerId, "&ip=").concat(ip);
              _context15.prev = 1;
              _context15.next = 4;
              return axios.get(url);
            case 4:
              response = _context15.sent;
              return _context15.abrupt("return", response.data);
            case 8:
              _context15.prev = 8;
              _context15.t0 = _context15["catch"](1);
              throw new Error('Error generating login token: ' + _context15.t0.message);
            case 11:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this, [[1, 8]]);
      }));
      function generateLoginToken(_x19, _x20) {
        return _generateLoginToken.apply(this, arguments);
      }
      return generateLoginToken;
    }()
  }, {
    key: "suspendCustomer",
    value: function () {
      var _suspendCustomer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(customerId, reason) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              url = "".concat(this.BASE_URL, "suspend.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&customer-id=").concat(customerId, "&reason=").concat(reason);
              _context16.prev = 1;
              _context16.next = 4;
              return axios.post(url);
            case 4:
              response = _context16.sent;
              return _context16.abrupt("return", response.data);
            case 8:
              _context16.prev = 8;
              _context16.t0 = _context16["catch"](1);
              throw new Error('Error suspending customer: ' + _context16.t0.message);
            case 11:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this, [[1, 8]]);
      }));
      function suspendCustomer(_x21, _x22) {
        return _suspendCustomer.apply(this, arguments);
      }
      return suspendCustomer;
    }()
  }, {
    key: "unsuspendCustomer",
    value: function () {
      var _unsuspendCustomer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(customerId, reason) {
        var url, response;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              url = "".concat(this.BASE_URL, "unsuspend.json?auth-userid=").concat(this.userId, "&api-key=").concat(this.apiKey, "&customer-id=").concat(customerId, "&reason=").concat(reason);
              _context17.prev = 1;
              _context17.next = 4;
              return axios.post(url);
            case 4:
              response = _context17.sent;
              return _context17.abrupt("return", response.data);
            case 8:
              _context17.prev = 8;
              _context17.t0 = _context17["catch"](1);
              throw new Error('Error unsuspending customer: ' + _context17.t0.message);
            case 11:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this, [[1, 8]]);
      }));
      function unsuspendCustomer(_x23, _x24) {
        return _unsuspendCustomer.apply(this, arguments);
      }
      return unsuspendCustomer;
    }()
  }]);
}();
module.exports = {
  Customer: Customer
};