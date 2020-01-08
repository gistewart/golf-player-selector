const bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      defaultValue: "Please enter a username."
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Please enter a password."
    }
  });

  User.prototype.comparePassword = function(inputPass) {
    return bcrypt.compareSync(inputPass, this.password);
  };

  User.beforeSave(user => {
    user.password = bcrypt.hashSync(user.password, 5);
    return user;
  });

  return User;
};
