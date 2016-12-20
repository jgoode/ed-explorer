'use strict';

/**
 * Created by johngoode on 12/17/16.
 */
module.exports = {
  json: function json(status, res, message, data, meta) {
    var response = {
      response: {
        message: message
      }
    };
    if (typeof data !== 'undefined') {
      response.response.data = data;
    }
    if (typeof meta !== 'undefined') {
      response.response.meta = meta;
    }
    return res.status(status).json(response);
  }
};
//# sourceMappingURL=ResponseService.js.map