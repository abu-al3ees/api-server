'use strict';

const express = require('express');
const app = express();
const notFoundHandler = require('./handlers/404.js');
const errorHandler = require('./handlers/500.js');
const logger = require('./middleware/logger.js');

const routFood = require('./routes/food.js');

// Global Middleware
app.use(logger);
app.use(express.json());

// attaching our routes module to the app obj
app.use(routFood);

function listen(port) {
  app.listen(port, ()=>console.log(`Hello from ${port}`) );
}


app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  app,
  listen,
};