import { Customer } from './lib/customer';
import { Domain } from './lib/domain';

const resellerClub = {
  Customer,
  Domain,
  setConfig: (config = {
    apiKey: '',
    userId: '',
    baseUrl: 'https://test.httpapi.com/api'
  }) => global.resellerGlobalConfig = config
};

resellerClub.setConfig();
module.exports = resellerClub;

