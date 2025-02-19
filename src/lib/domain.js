const axios = require('axios');

class Domain {
  constructor(apiKey, userId) {
    this.apiKey = apiKey || process.env.API_KEY_RESELLER_CLUB;
    this.userId = userId || process.env.AUTH_USER_ID;
    if (!this.apiKey || !this.userId) {
      throw new Error('API Key and User ID are required.');
    }
    this.BASE_URL = 'https://test.httpapi.com/api';
  }

  async deleteDomain(orderId) {
    const url = `${this.BASE_URL}/domains/delete.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting domain: ' + error.message);
    }
  }
  async renewDomain(orderId, years, expDate, invoiceOption = 'NoInvoice') {
    const url = `${this.BASE_URL}/domains/renew.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&years=${years}&exp-date=${expDate}&invoice-option=${invoiceOption}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error renewing domain: ' + error.message);
    }
  }
  async extendDomainRegistration(orderId, years, expDate, invoiceOption = 'NoInvoice', purchasePrivacy = true) {
    const url = `${this.BASE_URL}/domains/renew.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&years=${years}&exp-date=${expDate}&invoice-option=${invoiceOption}&purchase-privacy=${purchasePrivacy}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error extending domain registration: ' + error.message);
    }
  }
  async extendPremiumDomainRegistration(orderId, years, expDate, invoiceOption = 'NoInvoice') {
    const url = `${this.BASE_URL}/domains/renew.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&years=${years}&exp-date=${expDate}&invoice-option=${invoiceOption}&attr-name1=premium&attr-value1=true`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error extending premium domain registration: ' + error.message);
    }
  }
  async registerDomain(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice') {
    const nsParams = nameServers.map((ns, index) => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}/domains/register.xml?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering domain: ' + error.message);
    }
  }
  async registerDomainWithPrivacy(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice', purchasePrivacy = true) {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}/domains/register.xml?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&purchase-privacy=${purchasePrivacy}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering domain with privacy: ' + error.message);
    }
  }
  async registerDomainWithAttributes(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice', attributes = {}) {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const attrParams = Object.entries(attributes)
      .map(([key, value], index) => `&attr-name${index + 1}=${key}&attr-value${index + 1}=${encodeURIComponent(value)}`)
      .join('');

    const url = `${this.BASE_URL}/domains/register.xml?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customerid=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}${attrParams}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering domain with attributes: ' + error.message);
    }
  }
  async registerAustralianDomain(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice', attributes = {}) {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const attrParams = Object.entries(attributes)
      .map(([key, value], index) => `&attr-name${index + 1}=${key}&attr-value${index + 1}=${encodeURIComponent(value)}`)
      .join('');

    const url = `${this.BASE_URL}/domains/register.xml?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}${attrParams}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering Australian domain: ' + error.message);
    }
  }
  async registerChineseDomain(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice', attributes = {}) {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const attrParams = Object.entries(attributes)
      .map(([key, value], index) => `&attr-name${index + 1}=${key}&attr-value${index + 1}=${encodeURIComponent(value)}`)
      .join('');

    const url = `${this.BASE_URL}/domains/register.xml?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}${attrParams}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering Chinese domain: ' + error.message);
    }
  }

  async registerIDNDomain(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice', attributes = {}) {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const attrParams = Object.entries(attributes)
      .map(([key, value], index) => `&attr-name${index + 1}=${key}&attr-value${index + 1}=${encodeURIComponent(value)}`)
      .join('');

    const url = `${this.BASE_URL}/domains/register.xml?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}${attrParams}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering IDN domain: ' + error.message);
    }
  }
  async registerPremiumDomain(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice') {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}/domains/register.xml?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&attr-name1=premium&attr-value1=true`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering premium domain: ' + error.message);
    }
  }
  async registerDomainInEAP(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice') {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}/domains/register.xml?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&attr-name1=eap&attr-value1=true`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering domain in EAP: ' + error.message);
    }
  }
  async registerPremiumDomainInEAP(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice') {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}/domains/register.xml?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&attr-name1=premium&attr-value1=true&attr-name2=eap&attr-value2=true`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering premium domain in EAP: ' + error.message);
    }
  }
  async transferDomainWithPrivacyProtection(domainName, authCode, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice') {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}/domains/transfer.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&auth-code=${authCode}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&purchase-privacy=true`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error transferring domain with privacy protection: ' + error.message);
    }
  }
  async transferASIA(domainName, authCode, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, cedContactId, invoiceOption = 'KeepInvoice') {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}/domains/transfer.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&auth-code=${authCode}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&attr-name1=cedcontactid&attr-value1=${cedContactId}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error transferring .ASIA domain: ' + error.message);
    }
  }
  async transferPremiumDomain(domainName, authCode, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice', purchasePrivacy = true) {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}/domains/transfer.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&auth-code=${authCode}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&purchase-privacy=${purchasePrivacy}&attr-name1=premium&attr-value1=true`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error transferring Premium domain: ' + error.message);
    }
  }
  async cancelDomainTransfer(orderId) {
    const url = `${this.BASE_URL}/domains/cancel-transfer.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error canceling domain transfer: ' + error.message);
    }
  }
  async restoreDomain(orderId) {
    const url = `${this.BASE_URL}/domains/restore.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&invoice-option=KeepInvoice`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error restoring domain: ' + error.message);
    }
  }
  async getDomainOrderId(domainName) {
    const url = `${this.BASE_URL}/domains/orderid.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching domain order ID: ' + error.message);
    }
  }
  async checkDomainsAvailability(domains, tlds) {
    const url = `${this.BASE_URL}/domains/available.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domains.join('&domain-name=')}&tlds=${tlds.join('&tlds=')}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error checking domain availability: ' + error.message);
    }
  }
  async getOrderDetails(orderId) {
    const url = `${this.BASE_URL}?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&options=OrderDetails`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching domain order details: ' + error.message);
    }
  }
  async searchDomains(noOfRecords = 10, pageNo = 1) {
    const url = `${this.BASE_URL}?auth-userid=${this.userId}&api-key=${this.apiKey}&no-of-records=${noOfRecords}&page-no=${pageNo}`;
    
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching domain registration orders: ' + error.message);
    }
  }
  // Modify WHOIS preferences
  async modifyWhoisPreferences(orderId, whoisType, publish) {
    const url = `${this.BASE_URL}/tel/modify-whois-pref.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&whois-type=${whoisType}&publish=${publish}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error modifying WHOIS preferences: ' + error.message);
    }
  }
  // Resend the RFA email for a domain order
  async resendRFA(orderId) {
    const url = `${this.BASE_URL}/resend-rfa.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error resending RFA: ' + error.message);
    }
  }
  
}

module.exports = {Domain};
