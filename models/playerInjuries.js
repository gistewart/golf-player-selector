module.exports = function(sequelize, DataTypes) {
  var playerInjuries = sequelize.define("playerInjuries", {
    injuryID: DataTypes.INTEGER,
    playerID: DataTypes.INTEGER,
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    startDate: DataTypes.DATEONLY,
    status: DataTypes.STRING,
    bodyPart: DataTypes.STRING,
    expectedReturn: DataTypes.STRING
  });
  return playerInjuries;
};
