const mongoose = require('mongoose');

const Schema = mongoose.Schema

// Define collection and schema
const User = new Schema({
   email: String,
   password: String
})

module.exports = mongoose.model('user', User, 'users')