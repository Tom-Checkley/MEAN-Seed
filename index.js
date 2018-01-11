const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

const app = express();
const router = express.Router();

const public = require('./routes/public')(router);

mongoose.promise = global.Promise;

// Start Database
mongoose.connect(config.uri, { useMongoClient: true }, (err) => {
  if (err) {
    console.log('Could NOT connect to database: ' + err);
  } else {
    console.log('Connected to database: ' + config.db);
  }
});

// Set Port
const port = 8080;

// cors
app.use(cors({
  origin: 'http://localhost:4200'
}));
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json 
app.use(bodyParser.json());
// Set static directory for frontend
app.use(express.static(__dirname + '/dist/public'));

// Pull in public routes
app.use('/public', public);


// Catch all req's
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Start server
app.listen(port, () => {
  console.log('App listening on port ' + port);
});