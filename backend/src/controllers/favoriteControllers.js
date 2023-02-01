const models = require("../models");

const browse = (req, res) => {
  if (req.auth) {
    models.favorite
      .findAllByUser(req.auth.id)
      .then(([rows]) => {
        res.status(200).json(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

const read = (req, res) => {
  if (req.auth) {
    models.favorite
      .findFavoriteByUser(req.params.id, req.auth.id)
      .then(([rows]) => {
        res.status(200).send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

const countFavorites = (req, res) => {
  models.favorite
    .countFavorites()
    .then((data) => {
      res.status(200).send(data[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  if (req.auth) {
    models.favorite
      .insert(req.auth.id, req.params.id_video)
      .then(([result]) => {
        res.location(`/favorites/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Video already in favorite");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

const destroy = (req, res) => {
  if (req.auth) {
    models.favorite
      .deleteByVideoId(req.params.id, req.auth.id)
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
  read,
  countFavorites,
};
