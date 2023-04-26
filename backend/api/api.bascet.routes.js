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
    const activeOrder = await Order.findOne({
      where: { userId: req.session.userId },
      status: 'активен',
      raw: true,
    });
    const addedProducts = await AddedProduct.findAll({
      where: { orderId: activeOrder.id },
      raw: true,
      include: [
        {
          model: Product,
          // include: { model: ProductSize, include: { model: Size } },
          // include: [{ model: ProductImgs, attributes: 'productImg' }],
        },
      ],
    });
    res.json(addedProducts);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/cart', async (req, res) => {
  try {
    const { productId } = req.body;
    const activeOrder = await Order.findOne({
      where: { userId: req.session.userId, status: 'активен' },
      raw: true,
    });
    const addedProduct = await AddedProduct.create({
      productId,
      orderId: activeOrder.id,
      count: 119,
    });
    if (addedProduct) {
      res.json(addedProduct);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/cart/:addedProdId', async (req, res) => {
  const { addedProdId } = req.params;
  try {
    const delAddProd = await AddedProduct.destroy({
      where: { productId: addedProdId },
    });
    if (delAddProd > 0) {
      res.json(addedProdId);
    } else {
      res.json('Failed res');
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
