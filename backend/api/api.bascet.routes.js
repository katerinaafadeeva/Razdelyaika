const router = require('express').Router();

const {
  Product,
  ProductSize,
  AddedProduct,
  Order,
  Size,
  User,
} = require('../db/models');

router.get('/cart', async (req, res) => {
  try {
    const cards = await Product.findAll({
      raw: true,
      include: [
        {
          model: AddedProduct,
          include: { model: Order, include: { model: User } },
        },
        { model: ProductSize, include: { model: Size } },
      ],
    });
    const Prod = cards.filter(
      (el) => el['AddedProducts.Order.userId'] === req.session.userId
    );
    res.json(Prod);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/cart', async (req, res) => {
  const { productId, productName, productDescript, productPrice } = req.body;
  try {
    const product = await Product.create({
      productId,
      productName,
      productDescript,
      productPrice,
    });
    if (product) {
      res.json(product);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = router;
