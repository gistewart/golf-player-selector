var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

module.exports = function() {
  const resultsArray = [];

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

        resultsArray.push(result);
      });
      // console.log("--------resultsArray----------");
      // console.log(resultsArray);
      // db.playerRankings.bulkCreate(resultsArray);
    });
};
