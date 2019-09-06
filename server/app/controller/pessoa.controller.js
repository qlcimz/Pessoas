//Passo #5 = efetuar a coordenação de todos os res e req.
//Passo #6 = server.js
const db = require('../config/db.config.js');
const Pessoa = db.pessoa;
 
// Criar uma pessoa
exports.create = (req, res) => {	
	// Salvar na base MYSQL
	Pessoa.create({  
		nome: req.body.nome,
		endereco: req.body.endereco,
		email: req.body.email, 
		sexo: req.body.sexo,
		ativo: req.body.ativo
	}).then(pessoa => {		
		// Enviar pessoa para o cliente
		res.send(pessoa);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// Pegar as pessoas
exports.findAll = (req, res) => {
	Pessoa.findAll().then(pessoa => {
		// Enviar as pessoas para o cliente
		res.send(pessoa);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// Encontrar a pessoa pelo ID
exports.findById = (req, res) => {	
	Pessoa.findById(req.params.pessoaId).then(pessoa => {
		res.send(pessoa);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

// Encontrar uma pessoa pelo nome
exports.findByNome = (req, res) => {
	Pessoa.findAll({
		where: {
			nome: req.params.nome
		}
	}).then(
		pessoa => {
			res.send(pessoa)
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// Atualizar uma pessoa
exports.update = (req, res) => {
	var pessoa = req.body;
	const id = req.params.pessoaId;
	console.log(req.body)
	console.log(req.params.pessoaId)
	Pessoa.update( { 
		nome: req.body.nome, 
		endereco: req.body.endereco, 
		email: req.body.email, 
		sexo: req.body.sexo, 
		ativo: req.body.ativo }, 
		{ where: {id: req.params.pessoaId} }
				   ).then(() => {
						res.status(200).send(pessoa);
				   }).catch(err => {
						res.status(500).send("Error -> " + err);
				   })
};
 
// Deletar uma pessoa por ID
exports.delete = (req, res) => {
	const id = req.params.pessoaId;
	Pessoa.destroy({
	  where: { id: id }
	}).then(() => {
		res.status(200).send('Pessoa deletada!');
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
};