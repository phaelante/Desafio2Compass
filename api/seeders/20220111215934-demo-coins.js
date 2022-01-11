'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('coins', [
      {
      
        coin: 'BTC',
        fullname: 'BITCOIN',
        amount: '$42,688.70',
        createdAt: new Date(),
        updatedAt: new Date(),
        
       },
       {
      
        coin: 'ETH',
        fullname: 'ETHERIUM',
        amount: '$180.12 5.89',
        createdAt: new Date(),
        updatedAt: new Date(),
        
       },
      
      
  ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('coin', null, {});
    
  }
};
