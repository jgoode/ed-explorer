/**
 * Expedition.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    baseCredits: {type: 'float', columnName:'BaseCredits'},
    bonusCredits: {type: 'float', columnName:'BonusCredits'},
    distance: {type: 'float', columnName: 'Distance'},
    beginDate: {type: 'date', columnName:'BeginDate'},
    endDate: {type:'date', columnName: 'EndDate'},
    title: {type:'string', required: true, maxLength:100, columnName:'Title'},
    totalCredits: {type:'float', columnName:'TotalCredits'},
    user : {
      model: 'user'
    }
  }
};

