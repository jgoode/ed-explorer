'use strict';

/**
 * Created by johngoode on 12/17/16.
 */
var jwt = require('jsonwebtoken');
var jwtSecret = sails.config.secrets.jwtSecret;

module.exports = {
  issue: function issue(payload) {
    token = jwt.sign(payload, jwtSecret, { expiresIn: 720 * 60 });
    return token;
  },

  verify: function verify(token, callback) {
    return jwt.verify(token, jwtSecret, callback);
  }
};
//# sourceMappingURL=JwtService.js.map