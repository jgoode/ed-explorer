/**
 * StarSystem.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {type:'string', required: true, maxLength:150, columnName:'Name'},
    x: {type:'float', columnName:'X'},
    y: {type:'float', columnName:'Y'},
    z: {type:'float', columnName:'Z'},
    allegiance: {type:'string', maxLength:50, columnName:'Allegiance'},
    economy: {type:'string', maxLength:50, columnName:'Economy'},
    government: {type:'string', maxLength:50, columnName:'Government'},
    security: {type:'string', maxLength:50, columnName:'Security'},
    fuelUsed: {type:'float', columnName:'FuelUsed'},
    fuelLevel: {type:'float', columnName:'FuelLevel'},
    jumpDistance: {type:'float', columnName:'JumpDistance'},
    timeStamp: {type: 'date', columnName:'TimeStamp'},
    expedition : {
      model: 'expedition'
    },
    systemObjects: {
      collection: 'systemObject',
      via: 'starSystem'
    }
  }
};

