const axios = require('axios');

class Contact {
  constructor() {
    this.apiKey = global.resellerGlobalConfig.apiKey;
    this.userId = global.resellerGlobalConfig.userId;
    if (!this.apiKey || !this.userId) {
      throw new Error('API Key and User ID are required.');
    }
    if (global.resellerGlobalConfig.baseUrl.endsWith('/'))
      global.resellerGlobalConfig.baseUrl = global.resellerGlobalConfig.baseUrl.substring(0, global.resellerGlobalConfig.baseUrl.length - 1);
    this.BASE_URL = global.resellerGlobalConfig.baseUrl + '/contacts/';
  }



  async addContact(contactInfo) {
    const {
      name,
      company,
      email,
      addressLine1,
      city,
      country,
      zipcode,
      phoneCC,
      phone,
      customerId,
      type = 'Contact'
    } = contactInfo;

    const url = `${this.BASE_URL}add.json?auth-userid=${this.userId}&api-key=${this.apiKey}&name=${name}&company=${company}&email=${email}&address-line-1=${addressLine1}&city=${city}&country=${country}&zipcode=${zipcode}&phone-cc=${phoneCC}&phone=${phone}&customer-id=${customerId}&type=${type}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error adding contact: ' + error.message);
    }
  }
}

module.exports = { Contact };
