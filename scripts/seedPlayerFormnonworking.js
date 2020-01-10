var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

module.exports = function() {
  const resultsArray = [];

  axios
    .get("https://www.pgatour.com/stats/stat.109.y2019.eoff.t030.html")
    .then(function(response) {
      var $ = cheerio.load(response.data);

      $("[id^=playerStatsRow]").each(function(i, element) {
        var result = {};

        result.rank = $(this)
          .children("td:nth-child(1)")
          .text()
          .trim();
        result.name = $(this)
          .children("td:nth-child(3)")
          .children("a")
          .text()
          .trim();
        result.numEvents = $(this)
          .children("td:nth-child(4)")
          .text()
          .trim();
        result.totMoney = $(this)
          .children("td:nth-child(5)")
          .text()
          .trim();

        console.log("-------------------------");
        console.log(result);

        resultsArray.push(result);
      });
      // console.log("--------resultsArray----------");
      // console.log(resultsArray);
      return db.playerForm.bulkCreate(resultsArray);
    });
};
