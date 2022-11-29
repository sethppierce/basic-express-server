'use strict';

// require('dotenv').config();
// const express = require('express');
// const cors = require('cors');
// const PORT = process.env.PORT || 3002;

// // create a singleton / creates an instance of express
// const app = express();

// // middleware - functions that interact with the request / response objects
// app.use(cors());

// app.get('/', (req, res, next) => {
//   res.status(200).send('Hello World!');
//   next('error');
// });

// app.listen(PORT, () => console.log('listening on port' , PORT));

// const server = require('./server.js');

// server.start();

const { start } = require('./src/server');

start();
