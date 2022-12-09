const express = require("express");

const router = express.Router();

const categoryControllers = require("./controllers/categoryControllers");
const seetingControllers = require("./controllers/seetingControllers");

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

router.get("/user", seetingControllers.browse);
router.get("/user/:id", seetingControllers.read);
router.put("/user/:id", seetingControllers.edit);
router.post("/user", seetingControllers.add);
router.delete("/user/:id", seetingControllers.destroy);

module.exports = router;
