"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Tags",
      [
        {
          title: "Personal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Week day",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Weekend",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Goal",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tags", null, {});
  },
};
