const fs = require("fs");
const models = require("../models");

const browse = (req, res) => {
  models.video
    .findAll(req.query)
    .then(([videos]) => {
      res.send(videos);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.video
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

const readvideo = (req, res) => {
  models.video
    .findCategory(req.params.id)
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
  const video = req.body;

  // TODO validations (length, format...)

  video.id = parseInt(req.params.id, 10);

  models.video
    .update(video)
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

const add = (req, res) => {
  const { originalname, filename } = req.file;
  const originalNameArray = originalname.split(".");
  const ext = originalNameArray.pop();
  const finalName = `${originalNameArray.join("")}_${Date.now()}.${ext}`;
  fs.rename(
    `public/uploads/${filename}`,
    `public/uploads/${finalName}`,
    (err) => {
      if (err) throw err;
      req.video.screenshot = finalName;
      models.video
        .insert(req.video)
        .then(([result]) => {
          res
            .location(`/video/${result.insertId}`)
            .status(201)
            .json({ ...req.video, id: result.insertId });
        })
        .catch((error) => {
          console.error(error);
          res.sendStatus(500);
        });
    }
  );
};

const destroy = (req, res) => {
  models.video
    .delete(req.params.id)
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
  read,
  readvideo,
  edit,
  add,
  destroy,
};
