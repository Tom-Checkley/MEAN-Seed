//////////////////////////////////////////////////
// 
// PUBLIC ROUTES FOR NON AUTHORIZED REQUESTS
// 
//////////////////////////////////////////////////

const User = require('../models/user');
// const Testimonial = require('../models/testimonials');
// const Blog = require('../models/blog');
const config = require('../config/database');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;

module.exports = (router) => {


  return router;
};