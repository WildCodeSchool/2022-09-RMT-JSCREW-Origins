const models = require("../models");

const browse = (req, res) => {
  models.play_by_id
    .browseSlider1()
    .then(([playbyid]) => {
      res.send(playbyid);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const read = (req, res) => {
  models.play_by_id
    .find(req.params.id)
    .then(([playbyid]) => {
      if (playbyid[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(playbyid[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const playbyid = req.body.videoToPost;

  models.play_by_id
    .insertBatch(playbyid)
    .then(([result]) => {
      res.location(`/slider/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroyByIdVideo = (req, res) => {
  models.play_by_id
    .deleteVideo(req.params.id)
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
  destroyByIdVideo,
  read,
};
