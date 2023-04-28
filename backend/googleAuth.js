// const router = require('express').Router();
const { User } = require('./db/models');
const passport = require('passport');
// const { create } = require('ts-node');
const bcrypt = require('bcrypt');
const { json } = require('sequelize');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID:
        '771328175847-nhmni9vbaivu7uimeqqrfrtea7h2ggjd.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: '/google/callback',
    },
    async function (accessToken, refreshToken, profile, done) {
      const newUser = await User.create({
        userName: profile.displayName,
        email: profile._json.email,
        password: Math.random(123),
      });
      console.log(newUser, '>>>>>>>>>>>>>>>');
      // console.log(profile);
      json(newUser);
      done(null, profile);
    },
  ),
);

passport.serializeUser((user, done) => {
  // console.log('serializeUser===============');
  // console.log({ user });
  // console.log('serializeUser===============');

  done(null, user);
});

passport.deserializeUser((user, done) => {
  // console.log('deserializeUser===============');
  // console.log({ user });
  // console.log('deserializeUser===============');
  return done(null, user);
});
