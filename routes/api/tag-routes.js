const router = require('express').Router();
const { Tag, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({include: Product,});
    res.json(tags);
  }catch (error) {
    console.error(error)
    res.status(500).json();
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagid = req.params.id;
    const tag = await Tag.findByPk(tagid, {
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

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
    console.log('tag data is: ', tagData)
  } catch (err) {
    res.status(400).json(err);
    
  }
});

router.put('/:id', async (req, res) => {
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
  try {
    const tagData = await Tag.destroy({
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
