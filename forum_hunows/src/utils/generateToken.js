const jwt = require("jsonwebtoken");

const generateToken = (user = {}) => {
  return jwt.sign({
    id: user.id
  },
    "kmdKw9ehknwDMn29w2whn2oewQWK", {
    expiresIn: 14400,
  });
};

module.exports = generateToken;