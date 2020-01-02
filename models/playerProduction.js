module.exports = function(sequelize, DataTypes) {
  var playerProduction = sequelize.define("playerProduction", {
    rank: DataTypes.STRING,
    name: DataTypes.STRING,
    numEvents: DataTypes.INTEGER,
    avgMoney: DataTypes.STRING,
    totMoney: DataTypes.STRING
  });
  return playerProduction;
};
