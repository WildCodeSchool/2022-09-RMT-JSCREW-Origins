const models = require("../models");

const browse = (req, res) => {
  models.display_by_id
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.display_by_id
    .find(req.params.id)
    .then(([videos]) => {
      if (videos[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(videos[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const sliderCategory = req.body;

  models.display_by_id
    .update(sliderCategory)
    .then(([result]) => {
      res
        .location(`/sliderCategory/${result.insertId}`)
        .status(201)
        .json({ ...sliderCategory });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  edit,
  browse,
  read,
};
