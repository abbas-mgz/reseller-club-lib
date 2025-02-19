# Domain Management API Library

This is a Node.js library that interacts with the ResellerClub API to manage domains. It allows you to perform domain-related actions such as purchasing, checking availability, renewing, transferring, and retrieving domain information.

## Features

- **Purchase a Domain**: Easily purchase a new domain.
- **Check Domain Availability**: Check if a domain is available for registration.
- **Get Domain Info**: Retrieve detailed information about a domain.
- **Renew a Domain**: Renew a domain for a specified number of years.
- **Transfer a Domain**: Transfer a domain to another registrar.

## Installation

To install this library, you can use npm (Node Package Manager). In your project directory, run the following command:

```bash
npm install domain-management-api

## Usage Example

Here is a sample usage of the library:

const ResellerClub = require('reseller-club-lib');

const reseller = new ResellerClub(process.env.API_KEY_RESELLER_CLUB, process.env.AUTH_USER_ID);

const customerInfo = {
  username: 'email@email.com',
  passwd: 'password9',
  name: 'name',
  company: 'company',
  addressLine1: 'address-line-1',
  city: 'city',
  state: 'state',
  country: 'US',
  zipcode: '0000',
  phoneCC: '0',
  phone: '000000',
  langPref: 'en'
};

reseller.signup(customerInfo)
  .then(data => console.log(data))
  .catch(err => console.error('Error: ', err));