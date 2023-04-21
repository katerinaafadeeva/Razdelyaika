const router = require('express').Router();
const { Product } = require('../db/models');

// product get:

router.get('/shop', async (req, res) => {
  try {
    const products = await Product.findAll({ raw: true });
    // console.log(products, '----------');
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
