const seedPlayerProfiles = require("./seedPlayerProfiles");
const seedPlayerInjuries = require("./seedPlayerInjuries");
// const seedPlayerRankings = require("./seedPlayerRankings");
const seedPlayerRankingsnonworking = require("./seedPlayerRankingsnonworking");
const seedPlayerProduction = require("./seedPlayerProduction");
const seedPlayerForm = require("./seedPlayerForm");
const seedPlayerImage = require("./seedPlayerImage");

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
    return seedPlayerRankingsnonworking();
  })
  .then(function() {
    return seedPlayerProduction();
  })
  .then(function() {
    return seedPlayerForm();
  })
  .then(function() {
    return seedPlayerImage();
  });
// })}
// .then(function() {
//   db.sequelize.close();
// });

// Run this file on heroku deployment
// heroku-postbuild in package.json
