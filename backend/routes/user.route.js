const express = require('express');
const app = express();
const userRoute = express.Router();

// Employee model
let User = require('../models/User');

// Add User
userRoute.route('/create').post((req, res, next) => {
    user.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });

// Get All Users
userRoute.route('/').get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


module.exports = userRoute;