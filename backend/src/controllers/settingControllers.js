const models = require("../models");

const { hashPass, verifyHash } = require("../../services/auth");

const validateUser = (req, res) => {
  models.user
    .findOne(req.body)
    .then(async ([user]) => {
      if (user[0]) {
        if (await verifyHash(user[0].hashedpassword, req.body.password)) {
          res.sendStatus(200);
        } else {
          res.sendStatus(401);
        }
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
  // if (req.body.email === user1.email && req.body.password === user1.password) {
  //   res
  //     .status(201)
  //     .cookie("access_token", "connexion validated", {
  //       httpOnly: true,
  //     })
  //     .json({ role: user1.role, email: user1.email });
  // } else {
  //   res.status(500).send("Wrongs credentials");
  // }
};

const add = async (req, res) => {
  const hashedpassword = await hashPass(req.body.password);
  // TODO validations (length, format...)
  delete req.body.password;
  models.user
    .insert({ ...req.body, hashedpassword })
    .then(([result]) => {
      res.location(`/user/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
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
