"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Afzal Pasha",
          gender: "male",
          email: "test1@gmail.com",
          phone: 4899167,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salma",
          gender: "female",
          email: "test2@gmail.com",
          phone: 8481916,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nazneen",
          gender: "female",
          email: "test3@gmail.com",
          phone: 6899167,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nowreen",
          gender: "female",
          email: "test4@gmail.com",
          phone: 8681916,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nowsheen",
          gender: "female",
          email: "test5@gmail.com",
          phone: 4899167,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sohail",
          gender: "male",
          email: "test6@gmail.com",
          phone: 8489916,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rahail",
          gender: "male",
          email: "test7@gmail.com",
          phone: 8887916,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
