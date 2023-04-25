const router = require('express').Router();

const { log } = require('console');
// const { log } = require('console');
const {
  Product,
  Event,
  ProductImg,
  eventPhoto,
  EventReview,
  ProductSize,
  Size,
  User,
} = require('../db/models');

const path = require('path');

// all products get:

router.get('/shop', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        { model: ProductImg },
        { model: ProductSize, include: { model: Size } },
      ],
      raw: true,
    });
    // console.log(products[0].ProductSizes[0].Size.sizeText, '1231231231321');
    // console.log(products, '----products with sizes');
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
    // const { productName, productPrice, productDescript } = req.body;

    // uploader - не рабоатет!!
    const { name, price, description } = req.body;
    // console.log('files', req.files);
    // console.log('req.body', req.body);
    const newProduct = await Product.create({
      productName: name,
      productPrice: price,
      productDescript: description,
      // productImg: imgs,
    });
    if (newProduct) {
      if (Array.isArray(req.files.file)) {
        const uploadPathes = req.files.file.map((file) =>
          path.join(__dirname, 'photos', `${file.name}`)
        );
        await Promise.all(
          uploadPathes.map(async (uploadPath) => {
            await ProductImg.create({
              productImgId: newProduct.id,
              productImg: uploadPath,
            });
          })
        );
        // Use the mv() method to place the file somewhere on your server
        uploadPathes.forEach(async (uploadPath, index) => {
          // console.log('productImgs[index]', uploadPath);
          await req.files.file[index].mv(uploadPath, (err) => {
            if (err) {
              return res.status(500).send(err);
            }
          });
        });
      } else {
        const uploadPath = path.join(
          __dirname,
          'photos',
          `${req.files.file.name}`
        );
        await ProductImg.create({
          productImgId: newProduct.id,
          productImgs: uploadPath,
        });
        await req.files.file.mv(uploadPath, (err) => {
          if (err) {
            return res.status(500).send(err);
          }
        });
      }
    }
    res.json(newProduct);
  } catch ({ message }) {
    res.json(message);
  }
});

// роутер для добавления фото на backend (не работает для примера)
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
      res.json('Failed res');
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
