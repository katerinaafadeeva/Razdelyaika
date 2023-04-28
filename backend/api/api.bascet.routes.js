const router = require('express').Router();

const {
  Product,
  ProductSize,
  AddedProduct,
  ProductImgs,
  Order,
  Size,
  User,
} = require('../db/models');

// router.get('/cart', async (req, res) => {
//   try {
//     const order = await Order.findOne({
//       where: { userId: req.session.userId, status: 'активен' },
//       raw: true,
//     });
//     // console.log('addedInOrder', order);
//     if (order) {
//       const prodInOrder = await Product.findAll({
//         raw: true,
//         include: [
//           {
//             model: AddedProduct,
//             where: { orderId: order.id },
//             include: {
//               model: Order,
//               where: { userId: order.id },
//               include: { model: User, attributes: ['id'] },
//             },
//           },
//           {
//             model: ProductSize,
//             include: { model: Size, attributes: ['sizeText'] },
//           },
//           { model: ProductImgs, attributes: ['productImg'] },
//         ],
//         order: [['id', 'ASC']],
//       });
//       console.log('prodInOrder', prodInOrder);
//       res.json(prodInOrder);
//     } else {
//       const newOrder = await Order.create({
//         userId: req.session.userId,
//         status: 'активен',
//       });
//       res.json(newOrder);
//     }
//   } catch (error) {
//     res.json({ message: error.message });
//   }
// });
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
    // console.log(cards);
    const Prod = cards.filter(
      (el) => el['AddedProducts.Order.userId'] === req.session.userId,
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
