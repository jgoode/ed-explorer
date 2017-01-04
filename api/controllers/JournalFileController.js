/**
 * JournalFileController
 *
 * @description :: Server-side logic for managing journalfiles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getLatest : function(req,res) {
    var id = req.param('userId');
    if (id === undefined || id === '') {
      return ResponseService.json(400, res, "Error(s) encountered", 'Parameter [userId] required..e.g. ../getCurrent?userId=1');
    }

    JournalFile.query('SELECT * from journalFile where "user" = $1 order by "id" desc limit 1', [id], function(err, data) {
      if (err) {
        return ResponseService.json(400, res, "Error(s) encountered", err)
      }
      var responseData = {
        journalFile : {}
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

