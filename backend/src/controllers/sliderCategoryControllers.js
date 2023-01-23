const models = require("../models");

const read = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const limit = parseInt(req.query.limit, 10);
  models.display_by_id
    .findByCategory(id, limit)
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browse = (req, res) => {
  models.display_by_id
    .findAllByCategory()
    .then(([sliders]) => {
      res.send(sliders);
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
