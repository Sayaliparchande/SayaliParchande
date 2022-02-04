'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('productlists', [
      {
       productName: 'whopper',
       discription:'veg whopper',
       price: 150,
       quantity: 2,
       image:'../../assets/Burgers.jpg',
       createdAt: new Date(),
       updatedAt: new Date() 
             
     },
     {
      productName: 'burger',
      discription:'combo',
      price: 200,
      quantity: 2,
      image:'../../assets/Burgers.jpg',
      createdAt: new Date(),
      updatedAt: new Date() 
    },
    {
      productName: '2 burger combo',
      discription:'meal of 2 burger',
      price: 230,
      quantity: 2,
      image:'../../assets/Burgers.jpg',
      createdAt: new Date(),
      updatedAt: new Date()      
    }
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
