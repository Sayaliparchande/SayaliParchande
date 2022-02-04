'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class productlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  productlist.init({
    productName: DataTypes.STRING,
    discription: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    quantity: DataTypes.NUMERIC,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'productlist',
  });
  return productlist;
};