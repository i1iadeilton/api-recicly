const express = require('express');
const router = express.Router();

const ReciclController = require('./controllers/ReciclController');

router.get('/recicl', ReciclController.buscarTodos);

router.get('/recicl/:codigo', ReciclController.buscarUm);

router.post('/recicl', ReciclController.inserir);

router.put('/recicl/:codigo', ReciclController.alterar);

router.delete('/recicl/:codigo', ReciclController.excluir);

module.exports = router;
