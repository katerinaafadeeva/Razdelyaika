const router = require('express').Router();
const {
  Product,
  Event,
  ProductImg,
  eventPhoto,
  EventReview,
  User,
} = require('../db/models');

const path = require('path');

// all products get:

router.get('/shop', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: ProductImg }],
      raw: true,
    });
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// роутер для добавления фото на backend
router.post('/photo', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  const sampleFiles = req.files.file;
  if (Array.isArray(sampleFiles)) {
    const uploadPathes = sampleFiles.map((sampleFile) =>
      path.join(__dirname, 'photos', `${sampleFile.name}`)
    );
    // Use the mv() method to place the file somewhere on your server
    uploadPathes.forEach(async (uploadPath, index) => {
      await sampleFiles[index].mv(uploadPath, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
        // res.end();
        // res.send(uploadPathes);
        // res.redirect('http://localhost:3000/shop');
        // res.send('File uploaded!');
      });
    });
    res.json(uploadPathes);
  } else {
    const uploadPath = path.join(__dirname, 'photos', `${sampleFiles.name}`);
    sampleFiles.mv(uploadPath, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send(uploadPath);
      res.end();
      // res.redirect('http://localhost:3000/shop');
      // res.send('File uploaded!');
    });
  }
});

router.get('/events', async (req, res) => {
  try {
    const events = await Event.findAll({
      include: [{ model: eventPhoto }],
      raw: true,
    });

    res.json(events);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/shop', async (req, res) => {
  try {
    const { productName, productPrice, productDescript, productImgs } =
      req.body;
    const newProduct = await Product.create({
      productName,
      productPrice,
      productDescript,
    });
    if (newProduct) {
      await Promise.all(
        Object.values(productImgs).map(async (productImg) => {
          await ProductImg.create({
            productImgId: newProduct.id,
            productImg: productImg.name,
          });
        })
      );
    }
    res.json(newProduct);
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
  const { eventName, eventDescription, eventAddress, eventDate } = req.body;
  try {
    const event = await Event.create({
      eventName,
      eventDescription,
      eventAddress,
      eventDate,
      isActive: true,
    });

    res.json(event);
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
      res.json('Ответ потерялся :{');
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.put('/events/:eventId', async (req, res) => {
  try {
    const { eventId } = req.params;
    const { eventName, eventDescription, eventAddress, eventDate, isActive } =
      req.body;

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
