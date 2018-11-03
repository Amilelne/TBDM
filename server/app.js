const { configure } = require('./config');
const express = require('express');
const app = express();
const mongoose = require('./mongoose');
const mongoUriBuilder = require('mongo-uri-builder');
const itemRoutes = require('./api/routes/item.route');
const juRoutes = require('./api/routes/ju.route');

const connectionString = mongoUriBuilder({
  username: encodeURIComponent(mongoose.get('username')),
  password: encodeURIComponent(mongoose.get('password')),
  host: mongoose.get('host'),
  port: mongoose.get('port'),
  database: mongoose.get('database')
});

const { server } = configure;
for (const key of Object.keys(server)) {
  app.set(key, server[key]);
}

mongoose.connect(
  connectionString,
  { useNewUrlParser: true }
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/items', itemRoutes);
app.use('/api/jus', juRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
