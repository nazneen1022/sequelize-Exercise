"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "TodoListItems",
      [
        {
          task: "Pray for good health!!",
          createdAt: new Date(),
          updatedAt: new Date(),
          important: true,
          TodoListId: 1,
        },
        {
          task: "Help the people in need!!",
          createdAt: new Date(),
          updatedAt: new Date(),
          important: true,
          TodoListId: 2,
        },
        {
          task: "Learn back-end development",
          createdAt: new Date(),
          updatedAt: new Date(),
          important: false,
          TodoListId: 6,
        },
        {
          task: "Learn Horse-riding",
          createdAt: new Date(),
          updatedAt: new Date(),
          important: false,
          TodoListId: 5,
        },
        {
          task: "Play Piano",
          createdAt: new Date(),
          updatedAt: new Date(),
          important: false,
          TodoListId: 6,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TodoListItems", null, {});
  },
};
