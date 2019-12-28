require("dotenv").config();
var fetch = require("node-fetch");
var db = require("../models");

module.exports = function() {
  return (
    fetch(
      `https://api.sportsdata.io/golf/v2/json/Players?key=${process.env.API_KEY}`
    )
      // .then(res => res.json(data))
      .then(function(data) {
        console.log(data);
        db.playerProfiles.bulkCreate(data).then(function(results) {
          console.log(results);
        });
      })
  );
};
