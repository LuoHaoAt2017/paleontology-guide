const jwt = require("jsonwebtoken");
const config = require("../config");

function createJwtToken() {
  return jwt.sign({
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // 1 hour
  }, config.secret);
}

function isTokenExpired() {

}

module.exports = {
  createJwtToken,
  isTokenExpired,
}