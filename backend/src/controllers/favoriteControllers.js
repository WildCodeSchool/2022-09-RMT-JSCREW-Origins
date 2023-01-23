const models = require("../models");

const browse = (req, res) => {
  models.favorite
    .findAllByUser(req.auth.id)
    .then(([rows]) => {
      res.status(200).json(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  if (req.auth) {
    models.favorite
      .insert(req.auth.id, req.body.id_video)
      .then(([result]) => {
        res.location(`/favorites/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

const destroy = (req, res) => {
  if (req.auth) {
    models.favorite
      .deleteByVideoId(req.params.id)
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
  } else {
    res.status(401).send("Unauthorized");
  }
};

module.exports = {
  browse,
  add,
  destroy,
};
