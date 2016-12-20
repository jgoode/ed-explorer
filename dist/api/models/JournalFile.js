'use strict';

/**
 * JournalFile.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fileName: { type: 'string', required: true, columnName: 'FileName' },
    user: {
      model: 'user'
    }
  }
};
//# sourceMappingURL=JournalFile.js.map