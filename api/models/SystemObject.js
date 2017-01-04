/**
 * SystemObject.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name: {type:'string', required: true, maxLength:150, columnName:'Name'},
    distance: {type:'float', columnName:'Distance'},
    starType: {type:'string', maxLength:50, columnName:'StarType'},
    stellarMass: {type:'float', columnName:'StellarMass'},
    radius: {type:'float', columnName:'Radius'},
    absMagnitude: {type:'float', columnName:'AbsMagnitude'},
    rotationalPeriod: {type:'float', columnName:'RotationalPeriod'},
    ageMy: {type:'float', columnName:'AgeMy'},
    tidalLock: {type:'integer', columnName:'TidalLock'},
    terraformState: {type:'string', maxLength:50, columnName:'TerraformState'},
    planetClass: {type:'string', maxLength:50, columnName:'PlanetClass'},
    atmosphere: {type:'string', maxLength:50, columnName:'Atmosphere'},
    volcanism: {type:'string', maxLength:50, columnName:'Volcanism'},
    surfaceGravity: {type:'float', columnName:'SurfaceGravity'},
    surfaceTemp: {type:'float', columnName:'SurfaceTemp'},
    surfacePressure: {type:'float', columnName:'SurfacePressure'},
    landable: {type:'boolean', columnName:'Landable'},
    semiMajorAxis: {type:'float', columnName:'SemiMajorAxis'},
    eccentricity: {type:'float', columnName:'Eccentricity'},
    orbitalInclination: {type:'float', columnName:'OrbitalInclination'},
    periapsis: {type:'float', columnName:'Periapsis'},
    orbitalPeriod: {type:'float', columnName:'OrbitalPeriod'},
    timeStamp: {type: 'date', columnName:'TimeStamp'},
    starSystem : {
      model: 'starSystem'
    }
  }
};

