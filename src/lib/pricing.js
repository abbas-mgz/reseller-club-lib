const axios = require('axios');

class Products {
  constructor() {
    this.apiKey = global.resellerGlobalConfig.apiKey;
    this.userId = global.resellerGlobalConfig.userId;
    if (!this.apiKey || !this.userId) {
      throw new Error('API Key and User ID are required.');
    }
    if (global.resellerGlobalConfig.baseUrl.endsWith('/'))
      global.resellerGlobalConfig.baseUrl = global.resellerGlobalConfig.baseUrl.substring(0, global.resellerGlobalConfig.baseUrl.length - 1);
    this.BASE_URL = global.resellerGlobalConfig.baseUrl + '/products/';
    this.BASE_URL_TWO = global.resellerGlobalConfig.baseUrl + '/product/';
  }
  async getCustomerPrice() {
    const url = `${this.BASE_URL}customer-price.json?auth-userid=${this.userId}&api-key=${this.apiKey}`;
  
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching customer price: ' + error.message);
    }
  }
  async getBackorderList(customerId) {
    const url = `${this.BASE_URL_TWO}/backorderservice/list.json?auth-userid=${this.userId}&api-key=${this.apiKey}&no-of-records=5000&page-no=1&customer-id=${customerId}`;
  
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching backorder list: ' + error.message);
    }
  }
  

}

module.exports = { Products };
