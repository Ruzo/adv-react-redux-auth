// require('babel-register');
// require('babel-polyfill');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const router = require('./router');

//setup DB
const dbUrl = process.env.MONGODB_URI || 'mongodb://localhost:auth/auth';
mongoose.connect(dbUrl);

// setup app
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
router(app);

// setup server
let port = process.env.PORT || 3090;
let server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);
