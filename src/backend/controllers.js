const bcrypt = require('bcryptjs');
const db = require('./model.js')

const Controller = {};

Controller.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  
}
