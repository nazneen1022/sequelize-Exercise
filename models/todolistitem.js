"use strict";
module.exports = (sequelize, DataTypes) => {
  const TodoListItem = sequelize.define(
    "TodoListItem",
    {
      task: DataTypes.STRING,
      deadline: DataTypes.DATE,
      important: DataTypes.BOOLEAN,
    },
    {}
  );
  TodoListItem.associate = function (models) {
    // associations can be defined here
    TodoListItem.belongsTo(models.TodoList);
    TodoListItem.belongsToMany(models.Tag, {
      through: "ItemTags",
      foreignKey: "todoItemId",
    });
  };
  return TodoListItem;
};
