const axios = require('axios');

class Domain {
  constructor() {
    this.apiKey = global.resellerGlobalConfig.apiKey;
    this.userId = global.resellerGlobalConfig.userId;
    if (!this.apiKey || !this.userId) {
      throw new Error('API Key and User ID are required.');
    }
    if (global.resellerGlobalConfig.baseUrl.endsWith('/'))
      global.resellerGlobalConfig.baseUrl = global.resellerGlobalConfig.baseUrl.substring(0, global.resellerGlobalConfig.baseUrl.length - 1);
    this.BASE_URL = global.resellerGlobalConfig.baseUrl + '/domains/';
  }

  async deleteDomain(orderId) {
    const url = `${this.BASE_URL}delete.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting domain: ' + error.message);
    }
  }
  async renewDomain(orderId, years, expDate, invoiceOption = 'NoInvoice') {
    const url = `${this.BASE_URL}renew.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&years=${years}&exp-date=${expDate}&invoice-option=${invoiceOption}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error renewing domain: ' + error.message);
    }
  }
  async extendDomainRegistration(orderId, years, expDate, invoiceOption = 'NoInvoice', purchasePrivacy = true) {
    const url = `${this.BASE_URL}renew.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&years=${years}&exp-date=${expDate}&invoice-option=${invoiceOption}&purchase-privacy=${purchasePrivacy}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error extending domain registration: ' + error.message);
    }
  }
  async extendPremiumDomainRegistration(orderId, years, expDate, invoiceOption = 'NoInvoice') {
    const url = `${this.BASE_URL}renew.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&years=${years}&exp-date=${expDate}&invoice-option=${invoiceOption}&attr-name1=premium&attr-value1=true`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error extending premium domain registration: ' + error.message);
    }
  }
  async registerDomain(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice') {
    const nsParams = nameServers.map((ns, index) => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}register.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering domain: ' + error.message);
    }
  }
  async registerDomainWithPrivacy(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice', purchasePrivacy = true) {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}register.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&purchase-privacy=${purchasePrivacy}`;

    try {
      const response = await axios.post(url);
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

    const url = `${this.BASE_URL}register.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customerid=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}${attrParams}`;

    try {
      const response = await axios.post(url);
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

    const url = `${this.BASE_URL}register.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}${attrParams}`;

    try {
      const response = await axios.post(url);
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

    const url = `${this.BASE_URL}register.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}${attrParams}`;

    try {
      const response = await axios.post(url);
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

    const url = `${this.BASE_URL}register.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}${attrParams}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering IDN domain: ' + error.message);
    }
  }
  async registerPremiumDomain(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice') {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}register.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&attr-name1=premium&attr-value1=true`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering premium domain: ' + error.message);
    }
  }
  async registerDomainInEAP(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice') {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}register.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&attr-name1=eap&attr-value1=true`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering domain in EAP: ' + error.message);
    }
  }
  async registerPremiumDomainInEAP(domainName, years, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice') {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}register.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&years=${years}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&attr-name1=premium&attr-value1=true&attr-name2=eap&attr-value2=true`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error registering premium domain in EAP: ' + error.message);
    }
  }
  async transferDomainWithPrivacyProtection(domainName, authCode, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice') {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}transfer.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&auth-code=${authCode}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&purchase-privacy=true`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error transferring domain with privacy protection: ' + error.message);
    }
  }
  async transferASIA(domainName, authCode, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, cedContactId, invoiceOption = 'KeepInvoice') {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}transfer.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&auth-code=${authCode}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&attr-name1=cedcontactid&attr-value1=${cedContactId}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error transferring .ASIA domain: ' + error.message);
    }
  }
  async transferPremiumDomain(domainName, authCode, nameServers, customerId, regContactId, adminContactId, techContactId, billingContactId, invoiceOption = 'KeepInvoice', purchasePrivacy = true) {
    const nsParams = nameServers.map(ns => `&ns=${ns}`).join('');
    const url = `${this.BASE_URL}transfer.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&auth-code=${authCode}${nsParams}&customer-id=${customerId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&invoice-option=${invoiceOption}&purchase-privacy=${purchasePrivacy}&attr-name1=premium&attr-value1=true`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error transferring Premium domain: ' + error.message);
    }
  }
  async cancelDomainTransfer(orderId) {
    const url = `${this.BASE_URL}cancel-transfer.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error canceling domain transfer: ' + error.message);
    }
  }
  async restoreDomain(orderId) {
    const url = `${this.BASE_URL}restore.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&invoice-option=KeepInvoice`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error restoring domain: ' + error.message);
    }
  }
  async getDomainOrderId(domainName) {
    const url = `${this.BASE_URL}orderid.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching domain order ID: ' + error.message);
    }
  }
  async checkDomainsAvailability(domains, tlds) {
    const url = `https://domaincheck.httpapi.com/api/domains/available.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domains.join('&domain-name=')}&tlds=${tlds.join('&tlds=')}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error checking domain availability: ' + error.message);
    }
  }

  async getOrderDetails(orderId) {
    const url = `${this.BASE_URL}details.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&options=OrderDetails`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching domain order details: ' + error.message);
    }
  }
  async searchDomains(noOfRecords = 10, pageNo = 1, customerId) {
    const url = `${this.BASE_URL}search.json?auth-userid=${this.userId}&api-key=${this.apiKey}&no-of-records=${noOfRecords}&page-no=${pageNo}&customer-id=${customerId}`;

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
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error modifying WHOIS preferences: ' + error.message);
    }
  }
  // Resend the RFA email for a domain order
  async resendRFA(orderId) {
    const url = `${this.BASE_URL}/resend-rfa.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}`;
    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error resending RFA: ' + error.message);
    }
  }

  // Modify Name Servers (NS) for a domain
  async modifyNameServers(orderId, ns1, ns2) {
    const url = `${this.BASE_URL}/modify-ns.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&ns=${ns1}&ns=${ns2}`;
    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error modifying name servers: ' + error.message);
    }
  }
  // Modify Contact Details for a domain
  async modifyContact(orderId, regContactId, adminContactId, techContactId, billingContactId) {
    const url = `${this.BASE_URL}/modify-contact.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}`;
    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error modifying contact details: ' + error.message);
    }
  }
  // Modify Contact Details and opt-out of 60-day lock
  async modifyContactAndOptOut(orderId, regContactId, adminContactId, techContactId, billingContactId) {
    const url = `${this.BASE_URL}/modify-contact.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&sixty-day-lock-optout=true`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error opting out of 60-day lock: ' + error.message);
    }
  }
  // Modify Contact Details and apply Designated Agent
  async modifyContactAndApplyAgent(orderId, regContactId, adminContactId, techContactId, billingContactId) {
    const url = `${this.BASE_URL}/modify-contact.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&reg-contact-id=${regContactId}&admin-contact-id=${adminContactId}&tech-contact-id=${techContactId}&billing-contact-id=${billingContactId}&designated-agent=true`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error applying designated agent: ' + error.message);
    }
  }
  // Modify Privacy Protection for the domain
  async modifyPrivacyProtection(orderId, protectPrivacy = true, reason) {
    const url = `${this.BASE_URL}/modify-privacy-protection.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&protect-privacy=${protectPrivacy}&reason=${reason}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error modifying privacy protection: ' + error.message);
    }
  }
  // Modify Authentication Code
  async modifyAuthCode(orderId, authCode) {
    const url = `${this.BASE_URL}/modify-auth-code.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&auth-code=${authCode}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error modifying authentication code: ' + error.message);
    }
  }
  // Add Custom Name Servers (CNS)
  async addCustomNameServers(orderId, cns, ips) {
    const url = `${this.BASE_URL}/add-cns.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&cns=${cns}&ip=${ips.join('&ip=')}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error adding custom name servers: ' + error.message);
    }
  }
  // Modify Custom Name Servers (CNS)
  async modifyCustomNameServers(orderId, oldCns, newCns) {
    const url = `${this.BASE_URL}/modify-cns-name.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&old-cns=${oldCns}&new-cns=${newCns}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error modifying custom name servers: ' + error.message);
    }
  }

  // Modify CNS IP Address
  async modifyCnsIp(orderId, cns, oldIp, newIp) {
    const url = `${this.BASE_URL}/modify-cns-ip.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&cns=${cns}&old-ip=${oldIp}&new-ip=${newIp}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error modifying CNS IP address: ' + error.message);
    }
  }
  // Release .UK Domain to a new registrar tag
  async releaseUkDomain(orderId, newTag) {
    const url = `${this.BASE_URL}/uk/release.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&new-tag=${newTag}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error releasing .UK domain: ' + error.message);
    }
  }
  // Fetch Customer Default Nameservers
  async getCustomerDefaultNameservers(customerId) {
    const url = `${this.BASE_URL}customer-default-ns.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customer-id=${customerId}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching default nameservers: ' + error.message);
    }
  }
  // Get lock status for a specific domain
  async getDomainLockStatus(orderId) {
    const url = `${this.BASE_URL}locks.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching domain lock status: ' + error.message);
    }
  }
  // Enable theft protection for a specific domain
  async enableTheftProtection(orderId) {
    const url = `${this.BASE_URL}enable-theft-protection.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error enabling theft protection: ' + error.message);
    }
  }
  // Disable theft protection for a specific domain
  async disableTheftProtection(orderId) {
    const url = `${this.BASE_URL}disable-theft-protection.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error disabling theft protection: ' + error.message);
    }
  }
  // Delete CNS IP for a specific domain
  async deleteCnsIp(orderId, cns, ip) {
    const url = `${this.BASE_URL}delete-cns-ip.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&cns=${cns}&ip=${ip}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting CNS IP: ' + error.message);
    }
  }
  // Suggest domain names based on a keyword
  async suggestDomainNames(keyword, exactMatch) {
    const url = `${this.BASE_URL}v5/suggest-names.json?auth-userid=${this.userId}&api-key=${this.apiKey}&keyword=${keyword}&exact-match=${exactMatch}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error suggesting domain names: ' + error.message);
    }
  }
  // Recheck name servers for a given domain
  async recheckNameServers(orderId) {
    const url = `${this.BASE_URL}recheck-ns.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error rechecking name servers: ' + error.message);
    }
  }
  // Validate domain transfer
  async validateTransfer(domainName) {
    const url = `${this.BASE_URL}validate-transfer.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error validating domain transfer: ' + error.message);
    }
  }
  // Fetch association details for a domain
  async getAssociationDetails(orderId, associationId) {
    const url = `${this.BASE_URL}association-details.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&association-id=${associationId}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching association details: ' + error.message);
    }
  }
  // Check IDN domain availability
  async checkIDNAvailability(domainNames, tld = 'com', languageCode = 'aze') {
    const domainParams = domainNames.map(domain => `domain-name=${domain}`).join('&');
    const url = `https://domaincheck.httpapi.com/api/domains/idn-available.json?auth-userid=${this.userId}&api-key=${this.apiKey}&${domainParams}&tld=${tld}&idnLanguageCode=${languageCode}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error checking IDN domain availability: ' + error.message);
    }
  }
  // Fetch domain details by domain name
  async getDomainDetails(domainName) {
    const url = `${this.BASE_URL}/details-by-name.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&options=OrderDetails`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching domain details: ' + error.message);
    }
  }
  async addDsRc(domainName) {
    const url = `${this.BASE_URL}add-dnssec.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainName}&options=OrderDetails`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching domain details: ' + error.message);
    }
  }
  // Delete DNSSEC from a domain
  async deleteDnssec(orderId, keytag, algorithm, digestType, digest) {
    const url = `${this.BASE_URL}del-dnssec.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&attr-name1=keytag&attr-value1=${keytag}&attr-name2=algorithm&attr-value2=${algorithm}&attr-name3=digesttype&attr-value3=${digestType}&attr-name4=digest&attr-value4=${digest}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting DNSSEC: ' + error.message);
    }
  }
  // Check premium domain availability
  async checkPremiumDomains(keyword, tlds = ['com', 'net', 'org'], priceHigh = 10000, noOfResults = 10) {
    const tldsParam = tlds.map(tld => `&tlds=${tld}`).join('');
    const url = `https://domaincheck.httpapi.com/api/domains/premium/available.json?auth-userid=${this.userId}&api-key=${this.apiKey}&key-word=${encodeURIComponent(keyword)}${tldsParam}&price-high=${priceHigh}&no-of-results=${noOfResults}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching premium domain availability: ' + error.message);
    }
  }
  // Preorder a domain
  async preOrderDomain(customerId, domain) {
    const url = `${this.BASE_URL}preordering/add.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customerid=${customerId}&domain=${encodeURIComponent(domain)}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error preordering the domain: ' + error.message);
    }
  }
  // Delete a preordered domain
  async deletePreorderedDomain(customerId, domain) {
    const url = `${this.BASE_URL}preordering/delete.json?auth-userid=${this.userId}&api-key=${this.apiKey}&customerid=${customerId}&domain=${encodeURIComponent(domain)}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error deleting the preordered domain: ' + error.message);
    }
  }
  // Fetch preordered domains
  async fetchPreorderedDomains(noOfRecords = 10, pageNo = 1) {
    const url = `${this.BASE_URL}preordering/fetch.json?auth-userid=${this.userId}&api-key=${this.apiKey}&no-of-records=${noOfRecords}&page-no=${pageNo}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching preordered domains: ' + error.message);
    }
  }
  // Fetch available TLD list for preordering
  async fetchTLDList(category = 'services') {
    const url = `${this.BASE_URL}preordering/fetchtldlist.json?auth-userid=${this.userId}&api-key=${this.apiKey}&category=${category}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching TLD list for preordering: ' + error.message);
    }
  }
  // Check domain availability during the sunrise period
  async checkSunriseAvailability(domainName, tld, smd = '') {
    const url = `https://domaincheck.httpapi.com/api/domains/available-sunrise.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domainname=${domainName}&tld=${tld}&smd=${smd}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error checking sunrise availability: ' + error.message);
    }
  }
  // Fetch Trademark Notice for a given lookup key
  async getTrademarkNotice(lookupKey) {
    const url = `${this.BASE_URL}get-tm-notice.json?auth-userid=${this.userId}&api-key=${this.apiKey}&lookup-key=${lookupKey}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching trademark notice: ' + error.message);
    }
  }
  // Fetch TLDs that are in a specific phase (e.g., "sunrise")
  async getTLDsInPhase(phase) {
    const url = `${this.BASE_URL}tlds-in-phase.json?auth-userid=${this.userId}&api-key=${this.apiKey}&phase=${phase}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching TLDs in phase: ' + error.message);
    }
  }
  // Purchase privacy for a domain with an option for invoice
  async purchasePrivacy(orderId, invoiceOption = 'NoInvoice') {
    const url = `${this.BASE_URL}purchase-privacy.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&invoice-option=${encodeURIComponent(invoiceOption)}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error purchasing domain privacy: ' + error.message);
    }
  }
  // Check if a UK domain is available
  async checkDomainAvailabilityUK(domainName, name, company, email, address, city, state, country, zipcode) {
    const url = `https://domaincheck.httpapi.com/api/domains/uk/available.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${encodeURIComponent(domainName)}&name=${encodeURIComponent(name)}&company=${encodeURIComponent(company)}&email=${encodeURIComponent(email)}&address-line-1=${encodeURIComponent(address)}&city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}&country=${encodeURIComponent(country)}&zipcode=${encodeURIComponent(zipcode)}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error checking domain availability: ' + error.message);
    }
  }
  // Submit the domain transfer authorization code
  async submitAuthCode(orderId, authCode) {
    const url = `${this.BASE_URL}transfer/submit-auth-code.json?auth-userid=${this.userId}&api-key=${this.apiKey}&order-id=${orderId}&auth-code=${encodeURIComponent(authCode)}`;

    try {
      const response = await axios.post(url);
      return response.data;
    } catch (error) {
      throw new Error('Error submitting the transfer authorization code: ' + error.message);
    }
  }
  // Fetch TLD info
  async fetchTldInfo() {
    const url = `${this.BASE_URL}tld-info.json?auth-userid=${this.userId}&api-key=${this.apiKey}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching TLD info: ' + error.message);
    }
  }
  // Check the availability of third-level domains
  async checkThirdLevelDomainAvailability(domainNames, tlds) {
    const domainNamesParam = domainNames.join('&domain-name=');
    const tldsParam = tlds.join('&tlds=');

    const url = `https://domaincheck.httpapi.com/api/domains?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domainNamesParam}&${tldsParam}`;

    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw new Error('Error checking domain availability: ' + error.message);
    }
  }
}

module.exports = { Domain };
