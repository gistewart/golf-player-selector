require("dotenv").config();
var fetch = require("node-fetch");
var db = require("../models");
var axios = require("axios");

module.exports = function() {
  return fetch(
    `https://api.sportsdata.io/golf/v2/json/Players?key=${process.env.API_KEY}`
  )
    .then(res => res.json())
    .then(players =>
      players.map(players => {
        const playersData = {
          playerID: players.PlayerID,
          firstName: players.FirstName,
          lastName: players.LastName,
          debut: players.PgaDebut,
          birthDate: players.BirthDate,
          photoURL: players.PhotoUrl,
          dkName: players.DraftKingsName
        };

        return playersData;
      })
    )
    .then(function(players) {
      // console.log(players);
      return db.playerProfiles.bulkCreate(players);
    });
};
