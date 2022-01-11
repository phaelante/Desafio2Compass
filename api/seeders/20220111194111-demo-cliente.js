'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('clientes', [
      {
      
        nome: 'Hemy Boaventura',
        cpf: '12614934437',
        
        address: '123e4asd7-e89b-12d3-a456-412321313133',
        createdAt: new Date(),
        updatedAt: new Date(),
        
       },
      {
      
      nome: 'Lucas Boaventura',
      cpf: '14814655585',
     
      address: '123e4567-e89b-12d3-a456-42661417401233',
      createdAt: new Date(),
      updatedAt: new Date(),
      
     },
     {
      
      nome: 'harabrtt',
      cpf: '14814621385',
      
      address: '123e1224-e89f-15d3-a456-42661417401233',
      createdAt: new Date(),
      updatedAt: new Date(),
      
     },
  ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkDelete('clientes', null, {});
    
  }
};
