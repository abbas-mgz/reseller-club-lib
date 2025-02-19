"use strict";

var _customer = require("./lib/customer");
var _domain = require("./lib/domain");
var resellerClub = {
  Customer: _customer.Customer,
  Domain: _domain.Domain
};
module.exports = resellerClub;