const router = require('express').Router();
const { Product, Event, ProductImg, eventPhoto } = require('../db/models');
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

//router.get('/events/:eventId', async (req, res) => {
//  const { eventId } = req.params;
//  try {
//    const event = await Event.findOne({ raw: true, where: { id: eventId } });

//    res.json(event);
//  } catch (error) {
//    res.json({ message: error.message });
//  }
//});

//router.get('/shop/:productId', async (req, res) => {
//  const { productId } = req.params;
//  try {
//    const product = await Product.findOne({
//      raw: true,
//      where: { id: productId },
//    });

//    res.json(product);
//  } catch (error) {
//    res.json({ message: error.message });
//  }
//});

// add product route:

router.post('/shop', async (req, res) => {
  try {
    const { productName, productPrice, productDescript } = req.body;
    const newProduct = await Product.create({
      productName,
      productPrice,
      productDescript,
    });
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
  //  console.log(eventName, eventDescription, eventAddress, eventDate);
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
  //  console.log(eventId);
  console.log(123);
  try {
    const delEvent = await Event.destroy({ where: { id: Number(eventId) } });
    console.log(delEvent, '----');
    if (delEvent > 0) {
      res.json(eventId);
    } else {
      res.json('yt elfktyj');
    }

    //  console.log(delEvent, '-----------');
    // res.json(delEvent);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// update products router:

// router.put('/shop/:productId', async (req, res) => {
//   try {
//     const { productId } = req.params;
//     const { productName, productPrice, productDescript } = req.body;
//     const product = await Product.findOne({ where: { id: productId } });

//     (product.productName = productName),
//       (product.productPrice = productPrice),
//       (product.productDescript = productDescript);
//     product.save();
//     res.json(product);
//   } catch ({ message }) {
//     res.json();
//   }
// });

router.put('/shop/:productId', async (req, res) => {
  try {
    const { productId } = req.params;
    const { productName, productDescript, productPrice } = req.body;
    const product = await Product.findOne({ where: { id: productId } });
    product.productName = productName;
    product.productDescript = productDescript;
    product.productPrice = productPrice;
    product.save();
    // const result = await Education.destroy({ where: { user_id: userId } });
    // const newEducation = await Education.create({
    //   user_id: userId,
    //   educationType_id: Number(education),
    // });
    res.json(product);
  } catch ({ message }) {
    res.json();
  }
});
module.exports = router;
