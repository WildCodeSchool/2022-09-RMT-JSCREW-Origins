const jwt = require("jsonwebtoken");
const models = require("../models");
const { hashPass, verifyHash } = require("../services/auth");

const validateUser = (req, res) => {
  models.user
    .findOne(req.body)
    .then(async ([user]) => {
      if (user[0]) {
        if (await verifyHash(user[0].hashedpassword, req.body.password)) {
          const myUser = { ...user[0] };
          delete myUser.hashedpassword;
          const token = jwt.sign(myUser, process.env.JWT_AUTH_SECRET, {
            expiresIn: "24h",
          });

          res
            .status(201)
            .cookie("access_token", token, {
              httpOnly: true,
            })
            .json(myUser);
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
    .find(req.auth.id)
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

const count = (req, res) => {
  models.user
    .count()
    .then((data) => {
      res.status(200).send(data[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = async (req, res) => {
  const hashedpassword = await hashPass(req.body.password);
  if (req.auth.id)
    models.user
      .update({ ...req.body, hashedpassword })
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
  else res.sendStatus(401);
};

const editRole = (req, res) => {
  if (req.auth.id)
    models.user
      .updateRole(req.body.isAdmin, req.params.id)
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
  else res.sendStatus(401);
};

const destroy = (req, res) => {
  if (req.auth.id)
    models.user
      .deleteUser(req.auth.id)
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
  else res.sendStatus(401);
};

const destroyRole = (req, res) => {
  if (req.params.id !== "1")
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
  else res.sendStatus(401);
};

module.exports = {
  browse,
  read,
  edit,
  editRole,
  add,
  destroy,
  destroyRole,
  validateUser,
  count,
};
