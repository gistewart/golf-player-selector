module.exports = function(sequelize, DataTypes) {
  var playerRankings = sequelize.define("playerRankings", {
    ranking: DataTypes.INTEGER,
    name: DataTypes.STRING,
    money: DataTypes.STRING
  });
  return playerRankings;
};
