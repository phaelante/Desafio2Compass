
const database = require('../models')

class CoinController {

    static async pegaTodasAsCoins(req, res) {
      try {
        const todasAsMoedas = await database.coins.findAll()
        return res.status(200).json(todasAsMoedas)
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }
}

module.exports = CoinController