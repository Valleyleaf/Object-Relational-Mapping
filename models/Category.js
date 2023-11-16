const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Category extends Model {}

Category.init(
  {
    id: {
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allownull: false,
  },
    category_name: {
      type:DataTypes.STRING,
      allownull: false,
  },  
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