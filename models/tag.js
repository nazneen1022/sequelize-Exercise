"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      title: DataTypes.STRING,
    },
    {}
  );
  Tag.associate = function (models) {
    // associations can be defined here
    Tag.belongsToMany(models.TodoListItem, {
      through: "ItemTags",
      foreignKey: "tagId",
    });
  };
  return Tag;
};
