const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Você não passou o token" });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).json({ message: "O tipo di token é inváldo" });
  }

  const [scheme, token] = parts;

  if (scheme.indexOf("Bearer") !== 0) {
    return res.status(401).json({ message: "Token malformatado" });
  }

  jwt.verify(token, "kmdKw9ehknwDMn29w2whn2oewQWK", (err, decoded) => {
    if (err)
      return res.status(401).json({ message: "Token inválido ou expirado" });
    req.params.userId = decoded.id;
    return next();
  });
};

module.exports = protect;
