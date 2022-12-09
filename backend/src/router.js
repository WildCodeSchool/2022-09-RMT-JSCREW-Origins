const express = require("express");

const router = express.Router();

const categoryControllers = require("./controllers/categoryControllers");
const VideoManager = require("./controllers/videoControllers");

// ----------- EXEMPLE DES ROUTES ------------
// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);
// --------------------------------------------

router.get("/categories", categoryControllers.browse);
router.get("/categories/:id", categoryControllers.read);
router.put("/categories/:id", categoryControllers.edit);
router.post("/categories", categoryControllers.add);
router.delete("/categories/:id", categoryControllers.destroy);

router.get("/videos", VideoManager.browse);
router.get("/videos/:id", VideoManager.read);
router.put("/videos/:id", VideoManager.edit);
router.post("/videos", VideoManager.add);
router.delete("/videos/:id", VideoManager.destroy);

module.exports = router;
