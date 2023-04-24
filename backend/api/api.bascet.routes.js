const router = require('express').Router();

const {
  Product,
  ProductSize,
  AddedProduct,
  Order,
  Size,
} = require('../db/models');

router.get('/cart', async (req, res) => {
  try {
    const cards = await Product.findAll({
      raw: true,
      include: [
        { model: AddedProduct, include: { model: Order } },
        { model: ProductSize, include: { model: Size } },
      ],
    });
    res.json(cards);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
