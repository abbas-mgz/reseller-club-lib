# ResellerClub API Integration

This project provides an integration with the ResellerClub API, allowing users to manage domains and customers easily.

## Configuration

Before using the API, configure it with your credentials:

```javascript
resellerClub.setConfig({
    apiKey: 'mKEOHY9TXV0fwgxoCb46yLUjPa7KsO1n',
    userId: '1276883',
    baseUrl: 'https://test.httpapi.com/api' // Ensure it's correctly set
});
```

## Domain Management

To register a new domain, use the `Domain` class with the following parameters:

```javascript
const domainInstance = new resellerClub.Domain();
const domainData = {
    domainName: 'domain.com',
    years: 1,
    ns: ['ns1.domain.com', 'ns2.domain.com'],
    customerId: 0,
    regContactId: 0,
    adminContactId: 0,
    techContactId: 0,
    billingContactId: 0,
    invoiceOption: 'KeepInvoice'
};

const newDomain = await domainInstance.registerDomain(domainData);
```

## Customer Management

To create a new customer, use the following example:

```javascript
const customerInstance = new resellerClub.Customer();
const customerData = {
    username: 'john.doe123@example.com',
    passwd: 'SecurePass123',
    name: 'John Doe',
    company: 'Example Ltd',
    addressLine1: '123 Example Street',
    city: 'New York',
    state: 'NY',
    zipcode: '10001',
    country: 'US',
    phoneCC: 1,
    phone: '1234567890',
    langPref: 'en'
};

// Ensure `signupCustomer` is the correct function name
const newCustomer = await customerInstance.signupCustomer(customerData);
```

## API Documentation

For sending data and making API requests, please refer to the official ResellerClub API documentation.

## Support

If you find this project useful and would like to support my work, you can do so via the link below:

<a href="https://www.buymeacoffee.com/abbasmarghaei" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 180px !important;" >
</a>

