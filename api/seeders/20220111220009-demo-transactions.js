'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('transactions', [
      {
      
        value: '0.0123110',
        datetime: new Date(),
        sendTo: '123e4567-e89b-12d3-a456-42661417401233',
        currentContation: '0.0123',
        transactions_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        
       }, 
      
      
      
  ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('clientes', null, {});
    
  }
};
