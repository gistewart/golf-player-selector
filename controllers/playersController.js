const db = require("../models");

// Defining methods for the playersController
module.exports = {
  findAll: function(req, res) {
    db.Player.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
