// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)
Product.belongsTo(Category, {
  foreignKey: 'id',
});
Category.hasMany(Product, {
  foreignKey: 'id',
});
Tag.hasMany(Product, {
  foreignKey: 'id',
});
Product.belongsTo(Tag, {
  foreignKey: 'id',
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
