const axios = require('axios');

class Common {
    constructor() {
        this.apiKey = global.resellerGlobalConfig.apiKey;
        this.userId = global.resellerGlobalConfig.userId;
        if (!this.apiKey || !this.userId) {
            throw new Error('API Key and User ID are required.');
        }
        if (global.resellerGlobalConfig.baseUrl.endsWith('/'))
            global.resellerGlobalConfig.baseUrl = global.resellerGlobalConfig.baseUrl.substring(0, global.resellerGlobalConfig.baseUrl.length - 1);
        this.BASE_URL = global.resellerGlobalConfig.baseUrl + '/products/';
    }
    async getCountryList() {
        const url = `https://test.httpapi.com/api/country/list.json?auth-userid=${this.userId}&api-key=${this.apiKey}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error('Error fetching country list: ' + error.message);
        }
    }
    async  getStateList(countryCode) {
        const url = `https://test.httpapi.com/api/country/state-list.json?auth-userid=${this.userId}&api-key=${this.apiKey}&country-code=${countryCode}`;
      
        try {
          const response = await axios.get(url);
          return response.data;
        } catch (error) {
          throw new Error('Error fetching state list: ' + error.message);
        }
      }
}

module.exports = { Common };
