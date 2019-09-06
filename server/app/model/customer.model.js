//Passo #3 = Estabelecer o modelo do objeto a ser enviado
//Passo #4 = ./app/route/customer.route.js

module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
	  name: {
		type: Sequelize.STRING
	  },
	  age: {
		  type: Sequelize.INTEGER
	  },
	  active: {
		type: Sequelize.BOOLEAN, defaultValue: false
	  },
	});
	
	return Customer;
}