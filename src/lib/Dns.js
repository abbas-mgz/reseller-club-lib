const axios = require("axios");

class Dns {
  constructor() {
    this.apiKey = global.resellerGlobalConfig.apiKey;
    this.userId = global.resellerGlobalConfig.userId;
    if (!this.apiKey || !this.userId) {
      throw new Error("API Key and User ID are required.");
    }
    if (global.resellerGlobalConfig.baseUrl.endsWith("/"))
      global.resellerGlobalConfig.baseUrl =
        global.resellerGlobalConfig.baseUrl.substring(
          0,
          global.resellerGlobalConfig.baseUrl.length - 1
        );
    this.BASE_URL = global.resellerGlobalConfig.baseUrl + "/dns/manage/";
  }
  _handleApiResponse(action, data) {
    if (!data || typeof data !== "object") {
      throw new Error(`API error while ${action}: unexpected response format`);
    }

    const statusRaw = data.status || data.Status || data.STATUS;
    const status = typeof statusRaw === "string" ? statusRaw.toLowerCase() : undefined;

    if (data.error) {
      const detail = typeof data.error === "string" ? data.error : JSON.stringify(data.error);
      throw new Error(`API error while ${action}: ${detail}`);
    }

    if (status && status !== "success") {
      const detail = data.msg || data.message || data.error || `status=${statusRaw}`;
      throw new Error(`API error while ${action}: ${detail}`);
    }

    return data;
  }
  async addCnameRecord(domain, value, host) {
    const url = `${this.BASE_URL}add-cname-record.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domain}&value=${value}&host=${host}`;
    try {
      const response = await axios.post(url);
      return this._handleApiResponse("adding CNAME record", response.data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async addTxtRecord(domain, value, host = null) {
    let url = `${this.BASE_URL}add-txt-record.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domain}&value=${value}`;

    if (host) url += `&host=${host}`;

    try {
      const response = await axios.post(url);
      return this._handleApiResponse("adding TXT record", response.data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async addIPv4Record(domain, ipAddress) {
    const url = `${this.BASE_URL}add-ipv4-record.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domain}&value=${ipAddress}`;

    try {
      const response = await axios.get(url);
      return this._handleApiResponse("adding IPv4 record", response.data);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async addMxRecord(domain, value, options = {}) {
    let url = `${this.BASE_URL}add-mx-record.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domain}&value=${value}`;

    const { host, ttl, priority } = options;
    if (host) url += `&host=${host}`;
    if (typeof ttl === "number") url += `&ttl=${ttl}`;
    if (typeof priority === "number") url += `&priority=${priority}`;

    try {
      const response = await axios.post(url);
      return this._handleApiResponse("adding MX record", response.data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async addNsRecord(domain, value, options = {}) {
    let url = `${this.BASE_URL}add-ns-record.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domain}&value=${value}`;

    const { host, ttl } = options;
    if (host) url += `&host=${host}`;
    if (typeof ttl === "number") url += `&ttl=${ttl}`;

    try {
      const response = await axios.post(url);
      return this._handleApiResponse("adding NS record", response.data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async deleteNsRecord(domain, value, host = '@') {
    const url = `${this.BASE_URL}delete-ns-record.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domain}&host=${host}&value=${value}`;

    try {
      const response = await axios.post(url);
      return this._handleApiResponse("deleting NS record", response.data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async addIPv6Record(domain, ipAddress) {
    const url = `${this.BASE_URL}add-ipv6-record.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domain}&value=${ipAddress}`;
    try {
      const response = await axios.get(url);
      return this._handleApiResponse("adding IPv6 record", response.data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async activateDNS(orderId) {
    const url = `https://test.httpapi.com/api/dns/activate.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}`;
    try {
      const response = await axios.get(url);
      return this._handleApiResponse("activating DNS", response.data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async searchRecords(domain, type, options = {}) {
    const { numberOfRecords = 10, pageNumber = 1 } = options;
    const url = `${this.BASE_URL}search-records.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domain}&type=${type}&no-of-records=${numberOfRecords}&page-no=${pageNumber}`;
    
    try {
      const response = await axios.get(url);
      return this._handleApiResponse("searching DNS records", response.data);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = { Dns };
