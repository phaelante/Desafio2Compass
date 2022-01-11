

const { Router } = require('express')
const CoinController = require('../controllers/CoinController')

const router = Router()

 router.get('/coins', CoinController.pegaTodasAsCoins)
 
module.exports = router