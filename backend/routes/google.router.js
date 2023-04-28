const router = require('express').Router();
const passport = require('passport');
const User = require('../db/models');
// console.log(123);
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

router.get(
  '/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/auth/signup',
    // successReturnToOrRedirect: '/',
  }),
  function (req, res) {
    res.redirect('http://localhost:3000/');
  },
  // router.post('http://localhost:4000/google', async (req, res) => {
  //   const newUser = await User.create({

  //   })
  // }),
);

module.exports = router;
