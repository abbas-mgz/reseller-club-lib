const axios = require('axios');

class Customer {
  constructor() {
    this.apiKey = global.resellerGlobalConfig.apiKey;
    this.userId = global.resellerGlobalConfig.userId;
    if (!this.apiKey || !this.userId) {
      throw new Error('API Key and User ID are required.');
    }
    if (global.resellerGlobalConfig.baseUrl.endsWith('/'))
      global.resellerGlobalConfig.baseUrl = global.resellerGlobalConfig.baseUrl.substring(0, global.resellerGlobalConfig.baseUrl.length - 1);
    this.BASE_URL = global.resellerGlobalConfig.baseUrl + '/customers/';
  }

  async signupCustomer(customerInfo) {
    const { username, passwd, name, company, addressLine1, city, state, country, zipcode, phoneCC, phone, langPref } = customerInfo;

    const url = `${this.BASE_URL}signup.json?auth-userid=${this.userId}&api-key=${this.apiKey}&username=${username}&passwd=${passwd}&name=${name}&company=${company}&address-line-1=${addressLine1}&city=${city}&state=${state}&country=${country}&zipcode=${zipcode}&phone-cc=${phoneCC}&phone=${phone}&lang-pref=${langPref}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error during signup: ' + error.message);
    }
  }
  async modifyCustomer(customerInfo) {
    const { customerId, username, name, company, langPref, addressLine1, city, state, country, zipcode, phoneCC, phone } = customerInfo;

    const url = `${this.BASE_URL}modify.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customer-id=${customerId}&username=${username}&name=${name}&company=${company}&lang-pref=${langPref}&address-line-1=${addressLine1}&city=${city}&state=${state}&country=${country}&zipcode=${zipcode}&phone-cc=${phoneCC}&phone=${phone}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error modifying customer: ' + error.message);
    }
  }

  async changePasswordCustomer(customerId, newPassword) {
    const url = `${this.BASE_URL}change-password.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customer-id=${customerId}&new-passwd=${newPassword}`;
    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error changing password: ' + error.message);
    }
  }
  async generateTokenCustomer(username, password, ip) {
    const url = `${this.BASE_URL}generate-token.json?auth-userid=${this.userId}&api-key=${this.apiKey}&username=${username}&passwd=${password}&ip=${ip}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error generating token: ' + error.message);
    }
  }
  async authenticateTokenCustomer(token) {
    const url = `${this.BASE_URL}authenticate-token.json?auth-userid=${this.userId}&api-key=${this.apiKey}&token=${token}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error authenticating token: ' + error.message);
    }
  }
  async getCustomerDetails(username) {
    const url = `${this.BASE_URL}details.json?auth-userid=${this.userId}&api-key=${this.apiKey}&username=${username}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching customer details: ' + error.message);
    }
  }
  async deleteCustomer(customerId) {
    const url = `${this.BASE_URL}delete.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customer-id=${customerId}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting customer: ' + error.message);
    }
  }
  async getCustomerDetailsById(customerId) {
    const url = `${this.BASE_URL}details-by-id.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customer-id=${customerId}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching customer details: ' + error.message);
    }
  }
  async searchCustomers(noOfRecords = 10, pageNo = 1) {
    const url = `${this.BASE_URL}search.json?auth-userid=${this.userId}&api-key=${this.apiKey}&no-of-records=${noOfRecords}&page-no=${pageNo}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error searching customers: ' + error.message);
    }
  }
  async authenticateTokenWithoutHistory(token) {
    const url = `${this.BASE_URL}authenticate-token-without-history.json?auth-userid=${this.userId}&api-key=${this.apiKey}&token=${token}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error authenticating token without history: ' + error.message);
    }
  }
  async forgotPassword(username) {
    const url = `${this.BASE_URL}forgot-password.json?auth-userid=${this.userId}&api-key=${this.apiKey}&username=${username}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error requesting password reset: ' + error.message);
    }
  }
  async authenticate(username, password) {
    const url = `${this.BASE_URL}authenticate.json?auth-userid=${this.userId}&api-key=${this.apiKey}&username=${username}&passwd=${password}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error authenticating user: ' + error.message);
    }
  }
  async generateOTP(customerId) {
    const url = `${this.BASE_URL}authenticate/generate-otp.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customerid=${customerId}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error generating OTP: ' + error.message);
    }
  }
  async verifyOTP(customerId, otp) {
    const url = `${this.BASE_URL}authenticate/verify-otp.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customerid=${customerId}&otp=${otp}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error verifying OTP: ' + error.message);
    }
  }
  async autoLogin(role = 'customer') {
    const url = `${this.BASE_URL}/AutoLoginServlet?userLoginId=${this.userLoginId}&role=${role}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error during AutoLogin: ' + error.message);
    }
  }
  async suspendCustomer(customerId, reason) {
    const url = `${this.BASE_URL}suspend.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customer-id=${customerId}&reason=${reason}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error suspending customer: ' + error.message);
    }
  }
  async unsuspendCustomer(customerId, reason) {
    const url = `${this.BASE_URL}unsuspend.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customer-id=${customerId}&reason=${reason}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error unsuspending customer: ' + error.message);
    }
  }


}

module.exports = { Customer };
