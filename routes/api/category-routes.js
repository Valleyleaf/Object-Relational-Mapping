const router = require('express').Router();
const { Category, Product} = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const Categories = await Category.findall({include: Product,});
    res.json(Categories);
    }catch (error) {
      console.error(error)
      res.status(500).json();
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId, {
      include: Product,
    });

    if (!category) {
      return res.status(404).json({ error: 'ERROR: Category not found' });
    }

    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ERROR: Server' });
  }  
  // find one category by its `id` value
  // be sure to include its associated Products
});



router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
    console.log('category data is: ', categoryData)
  } catch (err) {
    res.status(400).json(err);
    
  }
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
