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
  if (req.auth)
    models.favorite
      .insert(req.auth.id, req.body.id_video)
      .then(([result]) => {
        res.location(`/favorites/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
};

module.exports = {
  browse,
  add,
};
