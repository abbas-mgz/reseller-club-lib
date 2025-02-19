const axios = require('axios');
require('dotenv').config();
const buyDomain = async (domainName, registrantInfo, years = 1) => {
  try {
    const response = await axios.post('https://api.resellerclub.com/v1/purchase-domain', {
      domain: domainName,
      registrant_info: registrantInfo,
      years: years,
      apiKey: process.env.API_KEY_RESSELER_CLUB
    });
    return response.data;
  } catch (error) {
    throw new Error('Error purchasing domain: ' + error.message);
  }
};
const checkDomainStatus = async domainName => {
  try {
    const response = await axios.get(`https://api.resellerclub.com/v1/domain-status?domain=${domainName}&apiKey=${process.env.API_KEY_RESSELER_CLUB}`);
    return response.data;
  } catch (error) {
    throw new Error('Error checking domain status: ' + error.message);
  }
};
const renewDomain = async (domainName, years = 1) => {
  try {
    const response = await axios.post('https://api.resellerclub.com/v1/renew-domain', {
      domain: domainName,
      years: years,
      apiKey: process.env.API_KEY_RESSELER_CLUB
    });
    return response.data;
  } catch (error) {
    throw new Error('Error renewing domain: ' + error.message);
  }
};
const transferDomain = async (domainName, authCode) => {
  try {
    const response = await axios.post('https://api.resellerclub.com/v1/transfer-domain', {
      domain: domainName,
      authCode: authCode,
      apiKey: process.env.API_KEY_RESSELER_CLUB
    });
    return response.data;
  } catch (error) {
    throw new Error('Error transferring domain: ' + error.message);
  }
};
const deleteDomain = async domainName => {
  try {
    const response = await axios.post('https://api.resellerclub.com/v1/delete-domain', {
      domain: domainName,
      apiKey: process.env.API_KEY_RESSELER_CLUB
    });
    return response.data;
  } catch (error) {
    throw new Error('Error deleting domain: ' + error.message);
  }
};
const listDomains = async () => {
  try {
    const response = await axios.get(`https://api.resellerclub.com/v1/domain-list?apiKey=${process.env.API_KEY_RESSELER_CLUB}`);
    return response.data;
  } catch (error) {
    throw new Error('Error listing domains: ' + error.message);
  }
};
module.exports = {
  buyDomain,
  checkDomainStatus,
  renewDomain,
  transferDomain,
  deleteDomain,
  listDomains
};