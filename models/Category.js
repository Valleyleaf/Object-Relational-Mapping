const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allownull: false,
  }
  
  },
  {
    category_name: {
      type:DataTypes.STRING,
      allownull: false,
  }
  },
  {
    product: {
      id: Category.id,
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allownull: false,
  }
  },
  {
    product_name: {
      type:DataTypes.STRING,
      allownull: false,
  }
  },
  {
    price: {
      type:DataTypes.DECIMAL,
      allownull: false,
      validate: {
        isDecimal: true,
      },
  }
  },
  {
    stock: {
      type:DataTypes.INTEGER,
      allownull: false,
      default: 10,
      validate: {
        isInt: true,
      }
  }
  },
  {
    category_id: {
      type:DataTypes.INTEGER,
      //Need to reference category ID. Figure out how.
      }
  },
  {
    Tag: {
      id: Category.id,
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allownull: false,
      //Not sure if Category.id is the correct way here.
  }
  },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
