const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user = {}) => {
  return jwt.sign({
    id: user.id
  },
    process.env.TOKEN, {
    expiresIn: process.env.EXPIRESIN,
  });
};

module.exports = generateToken;