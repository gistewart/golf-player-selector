const db = require("../models");
// Defining methods for the playersController
module.exports = {
  findAll: function(req, res) {
    db.sequelize
      .query("SELECT * FROM playerRankingsAdj_tbl", {
        type: db.Sequelize.QueryTypes.SELECT
      })
      .then(function(dbPlayers) {
        res.json(dbPlayers);
      });
  },
  someOtherMethod: function(req, res) {}
};
