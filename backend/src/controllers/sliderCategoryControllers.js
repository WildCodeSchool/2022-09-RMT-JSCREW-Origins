const models = require("../models");

const browse = (req, res) => {
  models.display_by_id
    .findByCategory()
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
    .then(([slider]) => {
      if (slider[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(slider[0]);
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

const add = (req, res) => {
  const sliderCategory = req.body;

  models.display_by_id
    .insert(sliderCategory)
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
  add,
};
