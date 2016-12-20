"use strict";

/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var bcrypt = require("bcrypt");
var Promise = require("bluebird");

module.exports = {

  attributes: {
    email: { type: 'string', required: true, unique: true },
    password: { type: 'string', minLength: 6, protected: true, required: true, columnName: "encryptedPassword" },
    commander: { type: 'string', required: true, unique: true },

    expeditions: {
      collection: 'expedition',
      via: 'user'
    },

    journalFiles: {
      collection: 'journalFile',
      via: 'user'
    },

    toJson: function toJson() {
      var obj = this.toObject();
      delete obj.password;
    }
  },

  beforeCreate: function beforeCreate(values, cb) {
    bcrypt.hash(values.password, 10, function (err, hash) {
      if (err) return cb(err);
      values.password = hash;
      cb();
    });
  },

  comparePassword: function comparePassword(password, user) {
    return new Promise(function (resolve, reject) {
      bcrypt.compare(password, user.password, function (err, match) {
        if (err) reject(err);
        if (match) {
          resolve(true);
        } else {
          reject(err);
        }
      });
    });
  }
};
//# sourceMappingURL=User.js.map