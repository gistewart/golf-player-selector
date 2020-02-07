var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

const playerRankings = [];

module.exports = function() {
  axios
    .get("https://www.pgatour.com/content/pgatour/stats/stat.109.y2019.html")
    .then(function(response) {
      var $ = cheerio.load(response.data);

      $("#statsTable tbody tr").each(function(i, element) {
        var result = {};
        result.ranking = $(this)
          .children("td:nth-child(1)")
          .text()
          .trim();
        result.name = $(this)
          .children("td:nth-child(3)")
          .text()
          .trim();
        result.money = $(this)
          .children("td:nth-child(5)")
          .text()
          .trim();

        playerRankings.push(result);
      });
      // console.log("--------playerRankings----------");
      // console.log(playerRankings);
      return db.playerRankings.bulkCreate(playerRankings);
    });
};
