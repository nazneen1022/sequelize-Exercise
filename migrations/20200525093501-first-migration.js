"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "TodoListItems",
      "important",
      { type: Sequelize.BOOLEAN },
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("TodoListItems", "important", {});
  },
};
