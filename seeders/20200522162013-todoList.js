const { User } = require("../models");
("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const afzalUser = await User.findOne({ where: { name: "Afzal Pasha" } });
    return queryInterface.bulkInsert(
      "TodoLists",
      [
        {
          name: "Afzal Pasha Personal List",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: afzalUser.id,
        },
        {
          name: "Salma Official List",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2,
        },
        {
          name: "Afzal Pasha Official List",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: afzalUser.id,
        },
        {
          name: "Salma Personal List",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 2,
        },
        {
          name: "Nowreen Personal List",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 4,
        },
        {
          name: "Rahail Official List",
          createdAt: new Date(),
          updatedAt: new Date(),
          UserId: 7,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TodoLists", null, {});
  },
};
