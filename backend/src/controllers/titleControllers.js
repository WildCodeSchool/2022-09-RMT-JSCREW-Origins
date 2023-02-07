const models = require("../models");

const edit = (req, res) => {
  models.title
    .update(req.body.slider_title, req.params.id)
    .then(([result]) => {
      res.location(`/slider/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  edit,
};
