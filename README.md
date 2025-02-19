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

const { buyDomain, checkDomainStatus, renewDomain, transferDomain, deleteDomain, listDomains } = require('reseller-club-lib');

(async () => {
  try {
    // Purchase a domain
    const purchaseResult = await buyDomain('example.com', {
      name: 'John Doe',
      email: 'john.doe@example.com',
      address: '123 Main St'
    });
    console.log(purchaseResult);

    // Check domain status
    const domainStatus = await checkDomainStatus('example.com');
    console.log(domainStatus);

    // Renew domain
    const renewResult = await renewDomain('example.com');
    console.log(renewResult);

    // Transfer domain
    const transferResult = await transferDomain('example.com', 'auth-code-here');
    console.log(transferResult);

    // Delete domain
    const deleteResult = await deleteDomain('example.com');
    console.log(deleteResult);

    // List all domains
    const domains = await listDomains();
    console.log(domains);
  } catch (error) {
    console.error(error.message);
  }
})();
