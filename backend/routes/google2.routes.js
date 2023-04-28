const router = require('express').Router();
const User = require('../db/models');
const passport = require('passport');

router.post('/google', async (req, res) => {
  const obj = req.session.passport.user.name;
  console.log(obj.name, '<<<<<<<<<<<<<<<<<<<<<');
  //   console.log(user, 'user user user user');
  //   console.log(1233424234);
  //   console.log(
  //     req.session.passport.user.displayName,
  //     'wdjjqndjwqbdwqbdqhdbqj123',
  //   );
  //   const newUser = await User.create({
  //     userName: req.session.passport.user.displayName,
  //     email: req.session.passport.user._json.email,
  //     password: req.session.passport.user._json.picture,
  //     password2: req.session.passport.user._json.picture,
  //   });

  //   console.log('newUser', newUser);
  //   req.session.userId = newUser.id;
  //   console.log(req.user);
  //   console.log(req._passport);
  //   console.log(req.passport);
  //   console.log(req.session.user);
  //   console.log(req.session);
});

// router.get('/google', async (req, res) => {
//   const { user } = req;
//   console.log(user);
//   console.log(req.user);
//   console.log(req._passport);
//   console.log(req.passport);
//   console.log(req.session.user);
//   console.log(req.session);
// });
router.get('/', async (req, res) => {
  try {
    const userSession = req.session.passport.user.id;
    console.log(req.session.passport.user.id, 'qqqqqqqqqqqqqqqqqqqqq');

    if (userSession) {
      const user = await User.findOne({
        where: { id: userSession },
        attributes: { exclude: ['password'] },
      });
      res.status(201).json(user);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const userSession = req.session.userId || req.session.passport.user.id;
    console.log(req.session.passport.user.id);

    if (userSession) {
      const user = await User.findOne({
        where: { id: userSession },
        attributes: { exclude: ['password'] },
      });
      res.status(201).json(user);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
