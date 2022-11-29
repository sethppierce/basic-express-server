'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3002;
const logger = require('./middleware/logger.js');
const notFound = require('./handlers/404');
const errorHandler = require('./handlers/500');
const validator = require('./middleware/validator');

// create a singleton / creates an instance of express
const app = express();

// middleware - functions that interact with the request / response objects
app.use(cors());
app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World!!!!');
});

app.get('/bad', (req, res, next) => {
  next('We have a problem');
});

app.get('/person', validator, (req,res,next) => {
  res.status(200).send(`"name": "${req.query.name}"`);
});

app.use('*', notFound);
app.use(errorHandler);


function start(){
  app.listen(PORT, () => console.log('listening on port' , PORT));
}

module.exports = { start, app };
