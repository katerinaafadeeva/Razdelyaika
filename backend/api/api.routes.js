const router = require('express').Router();
const { Product, Event } = require('../db/models');

// product get:

router.get('/shop', async (req, res) => {
  try {
    console.log('----------');
    const products = await Product.findAll({ raw: true });
    res.json(products);
  } catch (error) {
    res.json({ message: error.message });
  }
});


// роутер для добавления фоточек
// router.post('/photo', async (req, res) => {
//   console.log(req.files.foo);
//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send('No files were uploaded.');
//   }

//   // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
//   const sampleFile = req.files.foo;
//   const uploadPath = `${__dirname}/photos/${sampleFile.name}`;
//   console.log(uploadPath);
//   // Use the mv() method to place the file somewhere on your server
//   sampleFile.mv(uploadPath, (err) => {
//     if (err) {
//       return res.status(500).send(err);
//     }
//     res.send('File uploaded!');
//   });
// });

router.get('/events', async (req, res) => {
  try {
    const events = await Event.findAll({ raw: true });
    // console.log(events, '----------');
    res.json(events);
  } catch (error) {
    res.json({ message: error.message });
  }
});


module.exports = router;
