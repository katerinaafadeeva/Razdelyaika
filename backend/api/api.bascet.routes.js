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
        // { model: User },
      ],
    });
    const Prod = cards.filter(
      (el) => el['AddedProducts.Order.userId'] === req.session.userId,
    );
    res.json(Prod);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
