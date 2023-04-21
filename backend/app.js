require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT || 5000;

// const apiRouter = require('./api/api.routes');
const authRouter = require('./routes/auth.routes');
const apiRouter = require('./api/api.routes');

serverConfig(app);

// app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Шуршим на ${PORT} порту`);
});
