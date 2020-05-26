"use strict";
module.exports = (sequelize, DataTypes) => {
  const ItemTag = sequelize.define(
    "ItemTag",
    {
      todoItemId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {}
  );
  ItemTag.associate = function (models) {
    // associations can be defined here
    ItemTag.belongsTo(models.TodoListItem);
    ItemTag.belongsTo(models.Tag);
  };
  return ItemTag;
};
