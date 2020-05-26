const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const Op = require("sequelize").Op;
const User = require("./models").User;
const TodoList = require("./models").TodoList;
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.post("/echo", (req, res) => {
  res.json(req.body);
});

// Create a new user account
app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;

    if (!email || email === " ") {
      res.status(400).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

//get the user with id specified by client request
app.get("/users/:userId", async (request, response, next) => {
  try {
    const id = request.params.userId;
    const user = await User.findByPk(id);
    if (!user) {
      response.status(404).send(`User with id: ${id} doesnot exist`);
    } else {
      response.send(JSON.stringify(user, null, 2));
    }
  } catch (error) {
    next(error);
  }
});

//update the uer information by id
app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

//GET todolists
app.get("/todoLists", async (request, response, next) => {
  try {
    const todoList = await TodoList.findAll();
    response.send(todoList);
  } catch (error) {
    next(error);
  }
});

//create todoList for the user
app.post("/users/:userId/lists", async (request, response, next) => {
  try {
    const inputId = request.params.userId;
    const user = await User.findByPk(inputId);

    if (!user) {
      response.status(404).send(`User id ${id} not found`);
    } else {
      const newTodoList = await TodoList.create({
        ...request.body,
        UserId: inputId,
      });
      response.json(newTodoList);
    }
  } catch (error) {
    next(error);
  }
});

//read all lists of the given user
app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [TodoList],
    });
    if (user) {
      res.send(user.TodoLists);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});
// Update an existing list
app.put("/users/:userId/lists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const toUpdate = await TodoList.findOne({
      where: {
        [Op.and]: [{ UserId: parseInt(req.params.userId) }, { id: listId }],
      },
    });
    //console.log("my Test:", toUpdate.get({ plain: true }));
    if (!toUpdate) {
      res.status(404).send("List not found");
    } else {
      const updated = await toUpdate.update(req.body);
      res.json(updated);
    }
  } catch (e) {
    next(e);
  }
});

// Delete a user's list
app.delete("/users/:userId/lists/:listId", async (req, res, next) => {
  try {
    const toDeleteList = await TodoList.findByPk(parseInt(req.params.listId));
    if (!toDeleteList) {
      res.status(404).send(`list ${parseInt(req.params.listId)} not found`);
    } else {
      const deleted = await toDeleteList.destroy();
      res.json(deleted);
    }
  } catch (error) {
    next(error);
  }
});
// Delete all user's lists
app.delete("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, { include: [TodoList] });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      user.TodoLists.forEach(async (list) => await list.destroy());
      res.status(204).send();
    }
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log(`Listening on PORT:${PORT}`));
