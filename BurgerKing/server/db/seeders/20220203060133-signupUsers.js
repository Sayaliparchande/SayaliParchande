'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('signupUsers', [
      {
        fullname: 'Ankita',
        mobilenumber:'8764390651',
        address: 'mumbai',
        email: 'ankita@gmail.com',
        password:'12345678',
       createdAt: new Date(),
       updatedAt: new Date() 
             
     },
    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
