//Passo #4 = Estabelecer as rotas Express para a comunicação
//Passo #5 = ./app/controller/customer.controller.js

module.exports = function(app) {
 
    const customers = require('../controller/customer.controller.js');
 
    // Create a new Customer
    app.post('/api/customer', customers.create);
 
    // Retrieve all Customer
    app.get('/api/customers', customers.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/customer/:customerId', customers.findById);
	
	// Retrieve Customers Age
    app.get('/api/customers/age/:age', customers.findByAge);
 
    // Update a Customer with Id
    app.put('/api/customer/:customerId', customers.update);
 
    // Delete a Customer with Id
    app.delete('/api/customer/:customerId', customers.delete);
}