
const bodyParser = require('body-parser')

const clientes = require('./clientesRoute')

const coins = require('./coinsRoute')
const transactions = require('./transactionsroute')


module.exports = app => {
 app.use(
   bodyParser.json(),
   clientes,
   coins,
   transactions
   )
 }