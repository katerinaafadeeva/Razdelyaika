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
    console.log('aaa', products);
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// роутер для добавления фото на backend
router.post('/photo', async (req, res) => {
  // console.log('req', req.files);
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  const sampleFiles = req.files.file;
  const uploadPathes = sampleFiles.map((sampleFile) =>
    path.join(__dirname, 'photos', `${sampleFile.name}`)
  );
  // Use the mv() method to place the file somewhere on your server
  uploadPathes.forEach((uploadPath, index) => {
    sampleFiles[index].mv(uploadPath, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.redirect('http://localhost:3000/taxi');
      res.end();
      // res.send('File uploaded!');
    });
  });
});

router.get('/events', async (req, res) => {
  try {
    const events = await Event.findAll({
      include: [{ model: eventPhoto }],
      raw: true,
    });

    console.log(events, '-----------');
    res.json(events);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.post('/events', async (req, res) => {
  const { eventName, eventDescription, eventAddress, eventDate } = req.body;
  console.log(eventName, eventDescription, eventAddress, eventDate);
  try {
    const event = await Event.create({
      eventName,
      eventDescription,
      eventAddress,
      eventDate,
      isActive: true,
    });

    // console.log(event, '-----------');
    res.json(event);
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
