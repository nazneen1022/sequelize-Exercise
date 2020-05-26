"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Users", "email", {
      allowNull: false,
      unique: true,
      primaryKey: false,
      type: Sequelize.STRING,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn("Users", "email", {
      type: Sequelize.STRING,
      unique: false,
      allowNull: false,
    });
  },
};
