require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');
const fileUpload = require('express-fileupload');

const app = express();

const PORT = process.env.PORT || 4000;

// const apiRouter = require('./api/api.routes');
const authRouter = require('./routes/auth.routes');
const apiRouter = require('./api/api.routes');
const bascetRouter = require('./api/api.bascet.routes');

serverConfig(app);

app.use(fileUpload());
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/', bascetRouter);

app.listen(PORT, () => {
  console.log(`Шуршим на ${PORT} порту`);
});
