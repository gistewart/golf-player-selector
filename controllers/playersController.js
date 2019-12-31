const db = require("../models");
// Defining methods for the booksController
module.exports = {
  findAll = function (req, res) {
    db.playerProfiles.findAll({}).then(function(dbPlayers) {
      res.json(dbPlayers);
    });
  },
  someOtherMethod = function (req, res) {}
};
