require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');
const fileUpload = require('express-fileupload');
const passport = require('passport');
const RouterGoogle2 = require('./routes/google2.routes');

const app = express();

const PORT = process.env.PORT || 4000;

// const apiRouter = require('./api/api.routes');
const authRouter = require('./routes/auth.routes');
const apiRouter = require('./api/api.routes');
const bascetRouter = require('./api/api.bascet.routes');
const GoogleRouter = require('./routes/google.router');

serverConfig(app);
app.use(passport.initialize());
app.use(passport.session());
app.use(fileUpload());

require('./googleAuth');

app.use('/', RouterGoogle2);
app.use('/', GoogleRouter);
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/', bascetRouter);

app.get('/getUser', (req, res) => {
  res.send(req.user);
});

app.listen(PORT, () => {
  console.log(`Шуршим на ${PORT} порту`);
});
