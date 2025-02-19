const axios = require('axios');

class ResellerClub {
  constructor(apiKey, userId) {
    this.apiKey = apiKey || process.env.API_KEY_RESELLER_CLUB;
    this.userId = userId || process.env.AUTH_USER_ID;
    if (!this.apiKey || !this.userId) {
      throw new Error('API Key and User ID are required.');
    }
    this.BASE_URL = 'https://test.httpapi.com/api';
  }

  async signupCustomer(customerInfo) {
    const { username, passwd, name, company, addressLine1, city, state, country, zipcode, phoneCC, phone, langPref } = customerInfo;

    const url = `${this.BASE_URL}/customers/signup.xml?auth-userid=${this.userId}&api-key=${this.apiKey}&username=${username}&passwd=${passwd}&name=${name}&company=${company}&address-line-1=${addressLine1}&city=${city}&state=${state}&country=${country}&zipcode=${zipcode}&phone-cc=${phoneCC}&phone=${phone}&lang-pref=${langPref}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error during signup: ' + error.message);
    }
  }
  async modifyCustomer(customerInfo) {
    const { customerId, username, name, company, langPref, addressLine1, city, state, country, zipcode, phoneCC, phone } = customerInfo;

    const url = `${this.BASE_URL}/customers/modify.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customer-id=${customerId}&username=${username}&name=${name}&company=${company}&lang-pref=${langPref}&address-line-1=${addressLine1}&city=${city}&state=${state}&country=${country}&zipcode=${zipcode}&phone-cc=${phoneCC}&phone=${phone}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error modifying customer: ' + error.message);
    }
  }

  async changePasswordCustomer(customerId, newPassword) {
    const url = `${this.BASE_URL}/customers/change-password.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customer-id=${customerId}&new-passwd=${newPassword}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error changing password: ' + error.message);
    }
  }
  async generateTokenCustomer(username, password, ip) {
    const url = `${this.BASE_URL}/customers/generate-token.json?auth-userid=${this.userId}&api-key=${this.apiKey}&username=${username}&passwd=${password}&ip=${ip}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error generating token: ' + error.message);
    }
  }
  async authenticateTokenCustomer(token) {
    const url = `${this.BASE_URL}/customers/authenticate-token.json?auth-userid=${this.userId}&api-key=${this.apiKey}&token=${token}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error authenticating token: ' + error.message);
    }
  }
  async getCustomerDetails(username) {
    const url = `${this.BASE_URL}/customers/details.json?auth-userid=${this.userId}&api-key=${this.apiKey}&username=${username}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching customer details: ' + error.message);
    }
  }
  async deleteCustomer(customerId) {
    const url = `${this.BASE_URL}/customers/delete.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customer-id=${customerId}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting customer: ' + error.message);
    }
  }
  async getCustomerDetailsById(customerId) {
    const url = `${this.BASE_URL}/customers/details-by-id.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customer-id=${customerId}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching customer details: ' + error.message);
    }
  }
  async searchCustomers(noOfRecords = 10, pageNo = 1) {
    const url = `${this.BASE_URL}/customers/search.json?auth-userid=${this.userId}&api-key=${this.apiKey}&no-of-records=${noOfRecords}&page-no=${pageNo}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error searching customers: ' + error.message);
    }
  }
  async authenticateTokenWithoutHistory(token) {
    const url = `${this.BASE_URL}/customers/authenticate-token-without-history.json?auth-userid=${this.userId}&api-key=${this.apiKey}&token=${token}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error authenticating token without history: ' + error.message);
    }
  }
  async forgotPassword(username) {
    const url = `${this.BASE_URL}/customers/forgot-password.xml?auth-userid=${this.userId}&api-key=${this.apiKey}&username=${username}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error requesting password reset: ' + error.message);
    }
  }
  async authenticate(username, password) {
    const url = `${this.BASE_URL}/customers/authenticate.json?auth-userid=${this.userId}&api-key=${this.apiKey}&username=${username}&passwd=${password}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error authenticating user: ' + error.message);
    }
  }
  async generateOTP(customerId) {
    const url = `${this.BASE_URL}/customers/authenticate/generate-otp.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customerid=${customerId}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error generating OTP: ' + error.message);
    }
  }
  async verifyOTP(customerId, otp) {
    const url = `${this.BASE_URL}/customers/authenticate/verify-otp.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customerid=${customerId}&otp=${otp}`;

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
    const url = `${this.BASE_URL}/customers/suspend.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customer-id=${customerId}&reason=${reason}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error suspending customer: ' + error.message);
    }
  }
  async unsuspendCustomer(customerId, reason) {
    const url = `${this.BASE_URL}/customers/unsuspend.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customer-id=${customerId}&reason=${reason}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error unsuspending customer: ' + error.message);
    }
  }
}

module.exports = ResellerClub;
