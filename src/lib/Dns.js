const axios = require('axios');

class Dns {
    constructor() {
        this.apiKey = global.resellerGlobalConfig.apiKey;
        this.userId = global.resellerGlobalConfig.userId;
        if (!this.apiKey || !this.userId) {
            throw new Error('API Key and User ID are required.');
        }
        if (global.resellerGlobalConfig.baseUrl.endsWith('/'))
            global.resellerGlobalConfig.baseUrl = global.resellerGlobalConfig.baseUrl.substring(0, global.resellerGlobalConfig.baseUrl.length - 1);
        this.BASE_URL = global.resellerGlobalConfig.baseUrl + '/dns/manage/';
    }
    async addCnameRecord(domain, value, host) {
        const url = `${this.BASE_URL}add-cname-record.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domain}&value=${value}&host=${host}`;
        try {
            const response = await axios.post(url);
            return response.data;
        } catch (error) {
            throw new Error('Error adding TXT record: ' + error.message);
        }
    }
    async addTxtRecord(domain, value, host) {
        const url = `${this.BASE_URL}add-txt-record.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domain}&value=${value}&host=${host}`;

        try {
            const response = await axios.post(url);
            return response.data;
        } catch (error) {
            throw new Error('Error adding TXT record: ' + error.message);
        }
    }
    async addIPv4Record(domain, ipAddress) {
        const url = `${this.BASE_URL}add-ipv4-record.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domain}&value=${ipAddress}`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error('Error adding IPv4 record: ' + error.message);
        }
    }
    async addIPv6Record(domain, ipAddress) {
        const url = `${this.BASE_URL}add-ipv6-record.json?auth-userid=${this.userId}&api-key=${this.apiKey}&domain-name=${domain}&value=${ipAddress}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            throw new Error('Error adding IPv6 record: ' + error.message);
        }
    }
}

module.exports = { Dns };
