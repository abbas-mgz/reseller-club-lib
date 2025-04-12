"use strict";

var _customer = require("./lib/customer");
var _domain = require("./lib/domain");
var _pricing = require("./lib/pricing");
var _common = require("./lib/common");
var _Dns = require("./lib/Dns");
var resellerClub = {
  Customer: _customer.Customer,
  Domain: _domain.Domain,
  Products: _pricing.Products,
  Common: _common.Common,
  Dns: _Dns.Dns,
  setConfig: function setConfig() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      apiKey: '',
      userId: '',
      baseUrl: 'https://test.httpapi.com/api'
    };
    return global.resellerGlobalConfig = config;
  }
};
resellerClub.setConfig();
module.exports = resellerClub;