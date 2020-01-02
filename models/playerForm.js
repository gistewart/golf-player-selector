module.exports = function(sequelize, DataTypes) {
  var playerForm = sequelize.define("playerForm", {
    rank: DataTypes.STRING,
    name: DataTypes.STRING,
    numEvents: DataTypes.INTEGER,
    totMoney: DataTypes.STRING
  });
  return playerForm;
};
