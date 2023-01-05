const models = require("../models");

const user1 = {
  email: "admin1@mail.com",
  password: "Password1234",
  role: 1,
};

const validateUser = (req, res) => {
  if (req.body.email === user1.email && req.body.password === user1.password) {
    res
      .status(201)
      .cookie("access_token", "connexion validated", {
        httpOnly: true,
      })
      .json({ role: user1.role, email: user1.email });
  } else {
    res.status(500).send("Wrongs credentials");
  }
};

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([users]) => {
      res.send(users);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([users]) => {
      if (users[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(users[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  user.id = parseInt(req.params.id, 10);

  models.user
    .update(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  models.user
    .insert(user)
    .then(([result]) => {
      res.location(`/user/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  validateUser,
};
