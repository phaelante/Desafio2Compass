'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      transactions.belongsTo(models.coins, { foreignKey: 'transactions_id'})
    }
   
  };
  transactions.init({
    value: DataTypes.DECIMAL,
    datetime: DataTypes.DATE,
    sendTo: DataTypes.STRING,
    currentContation: DataTypes.NUMERIC
  },  {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};