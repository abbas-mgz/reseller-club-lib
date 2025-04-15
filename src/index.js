import { Customer } from './lib/customer';
import { Domain } from './lib/domain';
import { Products } from './lib/pricing';
import { Common } from './lib/common';
import { Dns } from './lib/Dns';
const resellerClub = {
  Customer,
  Domain,
  Products,
  Common,
  Dns,
  setConfig: (config = {
    apiKey: '',
    userId: '',
    baseUrl: 'https://test.httpapi.com/api'
  }) => global.resellerGlobalConfig = config
};

resellerClub.setConfig();
module.exports = resellerClub;

