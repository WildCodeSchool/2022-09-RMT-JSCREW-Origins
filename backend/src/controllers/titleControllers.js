const models = require("../models");

const read = (req, res) => {
  models.title
    .find(req.params.id)
    .then(([title]) => {
      if (title[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(title[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

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
  read,
};
