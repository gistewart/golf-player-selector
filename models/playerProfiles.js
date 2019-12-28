module.exports = function(sequelize, DataTypes) {
  var playerProfiles = sequelize.define("playerProfiles", {
    playerID: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    debut: DataTypes.INTEGER,
    birthDate: DataTypes.DATE,
    photoURL: DataTypes.STRING,
    dkName: DataTypes.STRING
  });
  return playerProfiles;
};
