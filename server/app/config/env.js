//Passo #1 = comunicação com o banco de dados
//Passo #2 = ./app/config/db.config.js

const env = {
  database: 'teste2',
  username: 'root',
  password: '123456',
  host: 'localhost',
  dialect: 'mysql',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;
