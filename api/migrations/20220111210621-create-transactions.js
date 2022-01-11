'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.DECIMAL
      },
      datetime: {
        type: Sequelize.DATE
      },
      sendTo: {
        type: Sequelize.STRING
      },
      currentContation: {
        type: Sequelize.NUMERIC
      },

      transactions_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{ model: 'coins', key: 'id'}
      },



      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('transactions');
  }
};