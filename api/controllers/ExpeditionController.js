/**
 * ExpeditionController
 *
 * @description :: Server-side logic for managing expeditions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
/*	create: function(req, res) {
	  Expedition.create(req.body).then(function(expedition) {
	    var responseData = {
	      expedition: expedition
      }
      return ResponseService.json(200, res, "Expedition created successfully", responseData)
    }).catch(function (error) {
        if (error.invalidAttributes){
          return ResponseService.json(400, res, "Expedition could not be created", error.Errors)
        }
      }
    )
  } */

  getCurrent: function(req, res) {


    var id = req.param('userId');
    if (id === undefined || id === '') {
      return ResponseService.json(400, res, "Error(s) encountered", 'Parameter [userId] required..e.g. ../getCurrent?userId=1');
    }

    Expedition.query('SELECT * from expedition where "EndDate" is null and "user" = $1',[id], function(err, data) {
      if (err) {
        return ResponseService.json(400, res, "Error(s) encountered", err)
      }
      var responseData = {
        expedition : {}
      }

      if (data) {
        if (data.rows.length > 0) {
          responseData = {
            expedition: data.rows[0]
          }
        }
      }

      return res.status(200).json(responseData);
    });
  }
};

