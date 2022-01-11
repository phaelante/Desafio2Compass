

const { Router } = require('express')
const TransactionsController = require('../controllers/TransactionsController')

const router = Router()

router.get('/transactions', TransactionsController.pegaTodasAsTurmas)
router.get('/transactions/:id', TransactionsController.pegaUmaTurma)
router.post('/transactions', TransactionsController.criaTurma)
router.put('/transactions/:id', TransactionsController.atualizaTurma)
router.delete('/transactions/:id', TransactionsController.apagaTurma)


module.exports = router