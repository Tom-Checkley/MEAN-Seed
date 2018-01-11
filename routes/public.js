//////////////////////////////////////////////////
// 
// PUBLIC ROUTES FOR NON AUTHORIZED REQUESTS
// 
//////////////////////////////////////////////////

const User = require('../models/user');
const config = require('../config/database');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

module.exports = (router) => {


  return router;
};