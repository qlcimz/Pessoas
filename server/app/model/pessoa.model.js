//Passo #3 = Estabelecer o modelo do objeto a ser enviado
//Passo #4 = ./app/route/pessoa.route.js

module.exports = (sequelize, Sequelize) => {
	const Pessoa = sequelize.define('pessoa', {
	  nome: {
		type: Sequelize.STRING
	  },
	  endereco: {
		  type: Sequelize.STRING
	  },
	  email:{
		  type: Sequelize.STRING
	  },
	  sexo:{
		  type:Sequelize.STRING
	  },
	  ativo: {
		type: Sequelize.BOOLEAN, defaultValue: false
	  },
	});
	
	return Pessoa;
}