'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      coins.hasMany(models.transactions, { foreignKey: 'transactions_id'})
      coins.belongsTo(models.clientes, { foreignKey: 'coins_id'})
    }
    
  };
  coins.init({
    coin: DataTypes.STRING,
    fullname: DataTypes.STRING,
    amount: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'coins',
  });
  return coins;
};