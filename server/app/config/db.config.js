//Passo #2 = Estabelecer comunicação com o banco utilizando sequelize
//Passo #3 = ./app/model/pessoa.model.js

const env = require('./env.js');
 
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.pessoa = require('../model/pessoa.model.js')(sequelize, Sequelize);
 
 
module.exports = db;