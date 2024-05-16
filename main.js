const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const db = require('./src/mongoDB/db');
const routes = require('./src/routes');
const port = process.env.PORT || 4000;

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/v1/', routes);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: false,
    message: err.message,
  });
});

app.listen(port, () => {
  db();
  console.log(`server on at port number ${port}`);
});
