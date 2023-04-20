require('dotenv').config();
const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT || 4000;

// const apiRouter = require('./api/api.routes');
const authRouter = require('./routes/auth.routes');

serverConfig(app);

// app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Шуршим на ${PORT} порту`);
});
