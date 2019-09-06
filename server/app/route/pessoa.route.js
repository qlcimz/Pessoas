//Passo #4 = Estabelecer as rotas Express para a comunicação
//Passo #5 = ./app/controller/pessoa.controller.js

module.exports = function(app) {
 
    const pessoa = require('../controller/pessoa.controller.js');
 
    // Criar uma pessoa 
    app.post('/api/pessoa', pessoa.create);
 
    // Encontrar todas as pessoas
    app.get('/api/pessoa', pessoa.findAll);
 
    // Encontrar as pessoas
    app.get('/api/pessoa/:pessoaId', pessoa.findById);
    app.get('/api/pessoa/nome/:nome', pessoa.findByNome);
 
    // Atualizar as pessoas com ID
   // app.put('/api/pessoa/:pessoaId', pessoa.update);
   app.put('/api/pessoa/:pessoaId', pessoa.update);
 
    // Deletar pessoas a partir do ID
    app.delete('/api/pessoa/:pessoaId', pessoa.delete);
}