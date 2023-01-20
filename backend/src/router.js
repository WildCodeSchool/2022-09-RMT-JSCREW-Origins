const express = require("express");

const router = express.Router();

const categoryControllers = require("./controllers/categoryControllers");
const videoControllers = require("./controllers/videoControllers");
const settingControllers = require("./controllers/settingControllers");
const sliderControllers = require("./controllers/sliderContollers");
const sendMailControllers = require("./controllers/sendMailControllers");
const sliderCategoryControllers = require("./controllers/sliderCategoryControllers");

const validators = require("./services/validators");

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

router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.readvideo);

router.post("/user", settingControllers.add);
router.post("/login", validators.checkUser, settingControllers.validateUser);

router.post("/sendEmail", sendMailControllers.sendMail);

router.use(checkAuth);

router.get("/user", settingControllers.read);
router.get("/users", settingControllers.browse);
router.put("/user", settingControllers.edit);
router.delete("/user", settingControllers.destroy);

router.put("/userRole", settingControllers.editRole);

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
router.put("/videos/:id", validators.validateVideo, videoControllers.edit);
router.post("/videos", validators.validateVideo, videoControllers.add);
router.delete("/videos/:id", videoControllers.destroy);

router.get("/slider", sliderControllers.browse);
router.get("/slider/:id", sliderControllers.read);
router.post("/slider", sliderControllers.add);
router.delete("/slider/:id", sliderControllers.destroyByIdVideo);

router.get("/sliderCategory", sliderCategoryControllers.browse);
router.put("/sliderCategory/:id", sliderCategoryControllers.edit);

module.exports = router;
