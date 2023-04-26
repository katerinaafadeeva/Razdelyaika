const router = require('express').Router();

// const { log } = require('console');
// const { log } = require('console');
const {
  Product,
  Event,
  ProductImg,
  eventPhoto,
  EventReview,
  Size,
  ProductSize,
  User,
  EcoPoint,
} = require('../db/models');

const path = require('path');

// all products get:

router.get('/shop', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        { model: ProductImg, attributes: ['productImg'] },
        // { model: ProductSize, include: { model: Size } },
      ],
      raw: true,
      order: [['id', 'ASC']],
    });
    const filteredProducts = [];
    products.filter((product) => {
      if (!filteredProducts.some((element) => element.id === product.id)) {
        filteredProducts.push(product);
      }
    });
    res.json(filteredProducts);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get('/events', async (req, res) => {
  try {
    const events = await Event.findAll({
      include: [{ model: eventPhoto }],
      raw: true,
    });
    console.log(events);
    res.json(events);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/shop', async (req, res) => {
  try {
    const { name, price, description, imgs } = req.body;

    const newProduct = await Product.create({
      productName: name,
      productPrice: price,
      productDescript: description,
    });
    if (newProduct) {
      if (Array.isArray(req.files.file)) {
        const imgsForDB = req.files.file.filter((file) => imgs.split(',').includes(file.name));
        const uploadPathes = imgsForDB.map((file) =>
          path.join(__dirname, '..', 'public', 'photos', `${file.name}`)
        );
        const pathesForDB = imgsForDB.map((file) => path.join('photos', `${file.name}`));
        await Promise.all(
          pathesForDB.map(async (patheForDB) => {
            await ProductImg.create({
              productImgId: newProduct.id,
              productImg: patheForDB,
            });
          })
        );
        // Use the mv() method to place the file somewhere on your server
        uploadPathes.forEach(async (uploadPath, index) => {
          await imgsForDB[index].mv(uploadPath, (err) => {
            if (err) {
              return res.status(500).send(err);
            }
          });
        });
        const product = await Product.findOne({
          where: { id: newProduct.id },
          include: [{ model: ProductImg, attributes: ['productImg'] }],
          raw: true,
          order: [['id', 'ASC']],
        });
        res.json(product);
      } else {
        // const imgForDB = req.files.file.filter((file) =>
        //   imgs.includes(file.name)
        // );
        const uploadPath = path.join(__dirname, '..', 'public', 'photos', `${req.files.file.name}`);
        const patheForDB = path.join('photos', `${req.files.file.name}`);
        await ProductImg.create({
          productImgId: newProduct.id,
          productImg: patheForDB,
        });
        await req.files.file.mv(uploadPath, (err) => {
          if (err) {
            return res.status(500).send(err);
          }
        });
        const product = await Product.findOne({
          where: { id: newProduct.id },
          raw: true,
          include: [{ model: ProductImg, attributes: ['productImg'] }],
        });
        res.json(product);
      }
    }
  } catch ({ message }) {
    res.json(message);
  }
});

// remove product route:

router.delete('/shop/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.destroy({ where: { id: Number(productId) } });
    if (product) {
      res.json(productId);
    }
    res.end();
  } catch ({ message }) {
    res.json(message);
  }
});

router.post('/events', async (req, res) => {
  // const { eventName, eventDescription, eventAddress, eventDate } = req.body;
  try {
    const { eventName, description, address, time } = req.body;
    const event = await Event.create({
      eventName,
      eventDescription: description,
      eventAddress: address,
      eventDate: time.replace('T', ' '),
      isActive: true,
    });
    await eventPhoto.create({
      eventId: event.id,
      file: path.join('photos', `${req.files.file.name}`),
    });
    const forSlider = await Event.findOne({
      where: { id: event.id },
      raw: true,
      include: [{ model: eventPhoto, attributes: ['file'] }],
    });
    res.json(forSlider);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/events/:eventId', async (req, res) => {
  const { eventId } = req.params;
  try {
    const delEvent = await Event.destroy({ where: { id: Number(eventId) } });
    if (delEvent > 0) {
      res.json(eventId);
    } else {
      res.json('Failed res');
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.put('/events/:eventId', async (req, res) => {
  try {
    const { eventId } = req.params;
    const { eventName, eventDescription, eventAddress, eventDate, isActive } = req.body;

    const eventEdit = await Event.findOne({ where: { id: eventId } });
    eventEdit.eventName = eventName;
    eventEdit.eventDescription = eventDescription;
    eventEdit.eventAddress = eventAddress;
    eventEdit.eventDate = eventDate;
    eventEdit.isActive = isActive;
    eventEdit.save();
    res.json(eventEdit);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// Comments

router.get('/comments', async (req, res) => {
  try {
    const comments = await EventReview.findAll({
      raw: true,
      include: [{ model: User, attributes: ['userName'] }],
      order: [['createdAt', 'DESC']],
    });

    if (comments) {
      res.json(comments);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/comments', async (req, res) => {
  const { eventId, eventRevText } = req.body;
  try {
    const comment = await EventReview.create({
      eventId,
      eventRevText,
      userId: req.session.userId,
    });
    if (comment) {
      res.json(comment);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete('/comments/:commentId', async (req, res) => {
  const { commentId } = req.params;
  try {
    const delComment = await EventReview.destroy({
      where: { id: Number(commentId) },
    });
    if (delComment > 0) {
      res.json(commentId);
    } else {
      res.json('Failed res');
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get('/ecoPoint', async (req, res) => {
  try {
    const ecoPoints = await EcoPoint.findAll({ raw: true });
    if (ecoPoints) {
      res.json(ecoPoints);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/ecoPoint', async (req, res) => {
  const { pointName, eventRevText } = req.body;
  try {
    const newEcoPoint = await EcoPoint.create({
      pointName,
      eventRevText,
    });
    if (newEcoPoint) {
      res.json(newEcoPoint);
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

// update products router:

router.put('/shop/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const { productName, productDescript, productPrice } = req.body;
    const product = await Product.findOne({ where: { id: productId } });
    product.productName = productName;
    product.productDescript = productDescript;
    product.productPrice = productPrice;
    product.save();

    res.json(product);
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = router;
