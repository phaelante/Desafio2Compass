const { Router } = require('express')
const ClienteController = require('../controllers/ClienteController')

const router = Router ()

router.get('/clientes',ClienteController.pegaTodosOsClientes)
router.get('/clientes/:id',ClienteController.pegaUmCliente)
router.post('/clientes', ClienteController.criacliente)
 router.put('/clientes/:id', ClienteController.atualizacliente)
 router.delete('/clientes/:id', ClienteController.apagacliente)


module.exports = router