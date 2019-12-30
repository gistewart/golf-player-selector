const db = require("../models");

// Defining methods for the booksController
module.exports = function(app) {
  app.get("/api/players", function(req, res) {
    db.playerProfiles.findAll({}).then(function(dbPlayers) {
      res.json(dbPlayers);
    });
  });
};
