const express = require("express");
const multer = require("multer");

const router = express.Router();

const categoryControllers = require("./controllers/categoryControllers");
const videoControllers = require("./controllers/videoControllers");
const settingControllers = require("./controllers/settingControllers");
const sliderControllers = require("./controllers/sliderControllers");
const sendMailControllers = require("./controllers/sendMailControllers");
const sliderCategoryControllers = require("./controllers/sliderCategoryControllers");
const favoriteControllers = require("./controllers/favoriteControllers");

const validators = require("./services/validators");

const upload = multer({ dest: "public/uploads", limits: { fileSize: 500000 } });

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

router.get("/videoCount", videoControllers.countVideos);
router.get("/videos", videoControllers.browse);
router.get("/videos/:id", videoControllers.readvideo);

router.post("/user", settingControllers.add);
router.post("/login", validators.checkUser, settingControllers.validateUser);

router.post("/sendEmail", sendMailControllers.sendMail);

router.get("/sliders", sliderControllers.browse);
router.get("/sliders/:id", sliderControllers.read);

router.put(
  "/videos/:id",
  upload.single("screenshot"),
  validators.validateUpdateVideo,
  videoControllers.edit
);
router.post(
  "/videos",
  upload.single("screenshot"),
  validators.validateVideo,
  videoControllers.add
);

router.get("/slidersCategory", sliderCategoryControllers.browse);
router.get("/slidersCategory/:id", sliderCategoryControllers.read);

router.use(checkAuth);

router.get("/userCount", settingControllers.countUsers);
router.get("/user", settingControllers.read);
router.get("/users", settingControllers.browse);
router.put("/user", settingControllers.edit);
router.delete("/user", settingControllers.destroy);

router.put("/userRole/:id", settingControllers.editRole);
router.delete("/userRole/:id", settingControllers.destroyRole);

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
router.delete("/videos/:id", videoControllers.destroy);

router.post("/sliders", sliderControllers.add);
router.delete("/sliders/:id", sliderControllers.destroyByIdVideo);

router.put("/sliderCategory/:id", sliderCategoryControllers.edit);
router.post("/sliderCategory/:id", sliderCategoryControllers.add);

router.get("/favorites", favoriteControllers.browse);
router.get("/favorites/:id", favoriteControllers.read);
router.post("/favorites/:id_video", favoriteControllers.add);
router.delete("/favorites/:id", favoriteControllers.destroy);

module.exports = router;
