'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Clientes.hasMany(models.coins, { foreignKey: 'coins_id'})
    }
  };
  Clientes.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.NUMERIC,
    birthdate: DataTypes.DATEONLY,
    address: DataTypes.STRING 
  }, {
    sequelize,
    modelName: 'clientes',
  });
  return Clientes;
};