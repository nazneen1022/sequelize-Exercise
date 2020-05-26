const { TodoList, TodoListItem, User, Tag } = require("./models");
const { Op } = require("sequelize");
// const models = require("./models");
// console.log("models:", Object.keys(models));

async function listsWithUsers() {
  const lists = await TodoList.findAll({
    include: [{ model: User, attributes: ["name"] }],
  });

  return lists.map((list) => list.get({ plain: true }));
}
//listsWithUsers().then((lists) => console.log(lists));

async function getUsers() {
  const allUsers = await User.findAll({
    include: { model: TodoList, attributes: ["name"] },
  });
  return allUsers.map((User) => User.get({ plain: true }));
}

//getUsers().then((Users) => console.log(Users));

// get Ine User by Id with his lists
async function getUsersWithListId(id) {
  const allUsers = await User.findByPk(id, {
    include: { model: TodoList, attributes: ["name"] },
  });
  return allUsers.get({ plain: true });
}

//getUsersWithListId(2).then((Users) => console.log(Users));
//Get important TodoItems with the name of the list they belong to.
async function getImportantTodoItemsWithName() {
  const todoItemsWithName = await TodoListItem.findAll({
    where: { important: true },
    include: { model: TodoList, attributes: ["name"] },
  });
  return todoItemsWithName.map((item) => item.get({ plain: true }));
}
//getImportantTodoItemsWithName().then((result) => console.log(result));
//Get one user by id with his lists, which also contain their belonging TodoItem's task attribute.

async function getOneUserWithListItems(id) {
  const user = User.findByPk(id, {
    include: [
      {
        model: TodoList,
        include: [{ model: TodoListItem, attributes: ["task"] }],
      },
    ],
  });
  return user;
}
//getOneUserWithListItems(2).then((result) => console.log(result.dataValues));

//finds all todoItems with their corresponding tags.
async function getTag() {
  const tags = await TodoListItem.findAll({ include: [{ model: Tag }] });

  return tags.map((tag) => tag.get({ plain: true }));
}
getTag().then((result) => console.log(result));
