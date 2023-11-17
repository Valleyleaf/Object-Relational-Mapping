const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const Tag = await Tag.findall({include: Product,});
    res.json(Tag);
  }catch (error) {
    console.error(error)
    res.status(500).json();
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagid = req.params.id;
    const tag = await tag.findByPk(tagid, {
      include: Product,
    });
    if (!tag){
      return res.status(404).json({error: 'Tag not found'})
    }
    res.json(tag)
  } catch (error){
    console.error(error)
    res.status(500).json({error: 'Server Error'})
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
 try{
  const tagUpdateID = await Tag.update(req.body,{
    where: {
      id: req.params.id
    }
  })
  res.status(200).json(tagUpdateID)
 }catch(err){
  console.log(err);
  res.status(400).json(err)
 }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await tag.destroy({
      where: {id: req.params.id}
    });
    if (!tagData) {
      res.status(404).json({message: 'No tag matching ID found'})
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
