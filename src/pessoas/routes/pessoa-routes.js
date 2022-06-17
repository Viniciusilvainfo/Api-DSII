const { Router } = require('express');
const {PessoaController} = require('../controllers/pessoa-controller');

const pessoaController = new PessoaController();

const routes = Router();

routes.post('/', pessoaController.buscarPessoa);

module.exports = routes;