module.exports = function(sequelize, DataTypes) {
  var playerImage = sequelize.define("playerImage", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    image: DataTypes.STRING,
    country: DataTypes.STRING
  });
  return playerImage;
};
