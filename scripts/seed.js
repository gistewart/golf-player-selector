const seedPlayerProfiles = require("./seedPlayerProfiles");
const seedPlayerInjuries = require("./seedPlayerInjuries");
const seedPlayerRankings = require("./seedPlayerRankings");

require("dotenv").config();
var db = require("../models");

db.sequelize
  .sync({ force: true })
  .then(function() {
    return seedPlayerProfiles();
  })
  .then(function() {
    return seedPlayerInjuries();
  })
  .then(function() {
    return seedPlayerRankings();
  })
  .then(function() {
    db.sequelize.close();
  });

// Run this file on heroku deployment
// heroku-postbuild in package.json
