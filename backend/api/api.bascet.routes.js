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
  //   console.log(Number(req.session.userId), '>>>>>>>>>>>>>>');
  //   console.log(123);
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
      //   where: { userId: req.session.userId },

      where: { productName: 500 },
    });
    // console.log(req.session.userId);
    console.log(cards);
    res.json(cards);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
