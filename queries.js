const Users = require("./models").Users;
const TodoItem = require("./models").TodoListItem;
const Op = require("sequelize");

async function todoListItemQueries() {
  try {
    // const allUsers = await Users.findAll();
    // console.log(
    //   "AllUsers:",
    //   allUsers.map((user) => user.get({ plain: true }))
    // );

    // const allTodoItems = await TodoItem.findAll();
    // console.log(
    //   "All TodoItems:",
    //   allTodoItems.map((item) => item.get({ plain: true }))
    // );

    // const userByPk = await Users.findByPk(3);
    // console.log("Usr by Pk 3 :", userByPk.get({ plain: true }));

    // //const Op = sequelize.Op;
    // const onlyImportantItems = await TodoItem.findAll({
    //   where: { important: false },
    // });
    // console.log(
    //   "Important Items:",
    //   onlyImportantItems.map((impItem) => impItem.get({ plain: true }))
    // );

    // const newUser = await Users.create({
    //   name: "Nowsheen",
    //   email: "test5@gmail.com",
    //   phone: 23456,
    //   gender: "female",
    // });
    // console.log("New User:", newUser.get({ plain: true }));
    async function newUser({ name, email, phone, gender }) {
      const newUser = await Users.create({ name, email, phone, gender });
      return newUser.get({ plain: true });
    }

    //newUser().then((result) => console.log(result));
    newUser({
      name: "Sohail",
      gender: "male",
      email: "test6@gmail.com",
      phone: 99988877,
    }).then((result) => console.log(result));
  } catch (error) {
    console.error(error);
  }
}
todoListItemQueries();
