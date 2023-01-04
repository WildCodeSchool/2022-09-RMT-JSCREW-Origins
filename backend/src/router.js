const express = require("express");

const router = express.Router();

const categoryControllers = require("./controllers/categoryControllers");
const videoControllers = require("./controllers/videoControllers");
const settingControllers = require("./controllers/settingControllers");
const sliderControllers = require("./controllers/sliderContollers");

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
router.get("/videos/:id", videoControllers.read);
router.put("/videos/:id", videoControllers.edit);
router.post("/videos", videoControllers.add);
router.delete("/videos/:id", videoControllers.destroy);

router.get("/user", settingControllers.browse);
router.get("/user/:id", settingControllers.read);
router.put("/user/:id", settingControllers.edit);
router.post("/user", settingControllers.add);
router.delete("/user/:id", settingControllers.destroy);

router.get("/slider", sliderControllers.browse);
router.post("/slider", sliderControllers.add);
router.delete("/slider/:Type", sliderControllers.destroy);
router.delete("/slider/:id", sliderControllers.destroyById);

module.exports = router;
