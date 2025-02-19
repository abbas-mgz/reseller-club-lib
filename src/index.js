const axios = require('axios');

class ResellerClub {
  constructor(apiKey) {
    this.apiKey = apiKey || process.env.API_KEY_RESELLER_CLUB;
    if (!this.apiKey) {
      throw new Error('API Key is required. Set it in the constructor or in environment variables.');
    }
    this.BASE_URL = 'https://api.resellerclub.com/v1';
  }

  async buyDomain(domainName, registrantInfo, years = 1) {
    try {
      const response = await axios.post(`${this.BASE_URL}/purchase-domain`, {
        domain: domainName,
        registrant_info: registrantInfo,
        years,
        apiKey: this.apiKey
      });
      return response.data;
    } catch (error) {
      throw new Error('Error purchasing domain: ' + error.message);
    }
  }

  async checkDomainStatus(domainName) {
    try {
      const response = await axios.get(`${this.BASE_URL}/domain-status`, {
        params: { domain: domainName, apiKey: this.apiKey }
      });
      return response.data;
    } catch (error) {
      throw new Error('Error checking domain status: ' + error.message);
    }
  }

  async renewDomain(domainName, years = 1) {
    try {
      const response = await axios.post(`${this.BASE_URL}/renew-domain`, {
        domain: domainName,
        years,
        apiKey: this.apiKey
      });
      return response.data;
    } catch (error) {
      throw new Error('Error renewing domain: ' + error.message);
    }
  }

  async transferDomain(domainName, authCode) {
    try {
      const response = await axios.post(`${this.BASE_URL}/transfer-domain`, {
        domain: domainName,
        authCode,
        apiKey: this.apiKey
      });
      return response.data;
    } catch (error) {
      throw new Error('Error transferring domain: ' + error.message);
    }
  }

  async deleteDomain(domainName) {
    try {
      const response = await axios.post(`${this.BASE_URL}/delete-domain`, {
        domain: domainName,
        apiKey: this.apiKey
      });
      return response.data;
    } catch (error) {
      throw new Error('Error deleting domain: ' + error.message);
    }
  }

  async listDomains() {
    try {
      const response = await axios.get(`${this.BASE_URL}/domain-list`, {
        params: { apiKey: this.apiKey }
      });
      return response.data;
    } catch (error) {
      throw new Error('Error listing domains: ' + error.message);
    }
  }
}

module.exports = ResellerClub;
