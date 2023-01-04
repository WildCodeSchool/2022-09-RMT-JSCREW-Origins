const models = require("../models");

const browse = (req, res) => {
  models.playbyid
    .browseSlider1()
    .then(([playbyid]) => {
      res.send(playbyid);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const playbyid = req.body.videoToPost;

  models.playbyid
    .insertBatch(playbyid)
    .then(([result]) => {
      res.location(`/slider/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.playbyid
    .delete(req.params.Type)
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
};
const destroyById = (req, res) => {
  models.playbyid
    .delete(req.params.Type)
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
};
module.exports = {
  browse,
  add,
  destroy,
  destroyById,
};
