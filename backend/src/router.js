const express = require("express");

const router = express.Router();

const categoryControllers = require("./controllers/categoryControllers");
const videoControllers = require("./controllers/videoControllers");
const settingControllers = require("./controllers/settingControllers");

const validators = require("../services/validators");

const checkAuth = require("./middleware/auth");

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
  checkAuth,
  validators.validateCategory,
  categoryControllers.add
);
router.put(
  "/categories/:id",
  checkAuth,
  validators.validateCategory,
  categoryControllers.edit
);

router.delete("/categories/:id", checkAuth, categoryControllers.destroy);

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.readvideo);
router.put("/videos/:id", checkAuth, videoControllers.edit);
router.post("/videos", checkAuth, videoControllers.add);
router.delete("/videos/:id", checkAuth, videoControllers.destroy);

router.get("/user", settingControllers.browse);
router.get("/user/:id", settingControllers.read);
router.put("/user/:id", settingControllers.edit);
router.delete("/user/:id", settingControllers.destroy);

router.post("/user", settingControllers.add);
router.post("/login", validators.checkUser, settingControllers.validateUser);

module.exports = router;
