// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)
Category.hasMany(Product, {
  foreignKey: 'category_id',
});
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Tag belong to many products 
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreigngKey: 'product_id',
});
//This products have many tag so we need productTag
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'tag_id', 
});
//This should work but I am getting an error? 

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
