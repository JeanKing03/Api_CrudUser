const { DataTypes } = require("sequelize");
const sequelize = require("../utils/connection");

const user = sequelize.define("user", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDay: {
    allowNull: false,
    type: DataTypes.DATEONLY,
  },
});

module.exports = user;
