"use strict";

var _customer = require("./lib/customer");
var _domain = require("./lib/domain");
var resellerClub = {
  Customer: _customer.Customer,
  Domain: _domain.Domain,
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