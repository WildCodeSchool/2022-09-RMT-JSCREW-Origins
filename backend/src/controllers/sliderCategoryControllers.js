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

const add = (req, res) => {
  const sliderCategory = req.body;

  models.display_by_id
    .insert(sliderCategory)
    .then(([result]) => {
      res
        .location(`/sliderCategory/${result.insertId}`)
        .status(201)
        .json({ ...sliderCategory, id: result.insertId });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
  browse,
};
