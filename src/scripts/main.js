const customersObject= require("./customers.json")
const customer = customersObject.customers
//if I wanted to remove the var customer, {} around the key value of the required line === const {customers} = require("./customers.json")
// From customers.js extract just the customers' email addresses and store them in a new array. You will need to use methods such as map(), forEach() and/or concat() to accomplish this.

const customerEmails = customer.map(function(currentCustomer) {
       return currentCustomer.contacts.email
})
console.log(customerEmails)