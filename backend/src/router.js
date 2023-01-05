const express = require("express");

const router = express.Router();

const categoryControllers = require("./controllers/categoryControllers");
const videoControllers = require("./controllers/videoControllers");
const settingControllers = require("./controllers/settingControllers");

const validators = require("../services/validators");

// ----------- EXEMPLE DES ROUTES ------------
// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);
// --------------------------------------------

router.get("/categories", categoryControllers.browse);
router.get("/categories/:id", categoryControllers.read);
router.post(
  "/categories",
  validators.validateCategory,
  categoryControllers.add
);
router.put(
  "/categories/:id",
  validators.validateCategory,
  categoryControllers.edit
);
router.delete("/categories/:id", categoryControllers.destroy);

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.readvideo);
router.put("/videos/:id", validators.validateVideo, videoControllers.edit);
router.post("/videos", validators.validateVideo, videoControllers.add);
router.delete("/videos/:id", videoControllers.destroy);

router.get("/user", settingControllers.browse);
router.get("/user/:id", settingControllers.read);
router.put("/user/:id", settingControllers.edit);
router.post("/user", settingControllers.add);
router.delete("/user/:id", settingControllers.destroy);

module.exports = router;
