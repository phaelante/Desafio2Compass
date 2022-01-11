
const database = require('../models')

class TransactionsController {

    static async pegaTodasAsTransactions(req, res) {
      try {
        const TodasAsTransactions = await database.Transactions.findAll()
        return res.status(200).json(TodasAsTransactions)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}
 
    module.exports = TransactionsController