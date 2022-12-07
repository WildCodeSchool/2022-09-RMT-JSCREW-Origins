const express = require("express");

const router = express.Router();

const categoryControllers = require("./controllers/categoryControllers");

// ----------- EXEMPLE DES ROUTES ------------
// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);
// --------------------------------------------

router.get("/category", categoryControllers.browse);
router.get("/category/:id", categoryControllers.read);

module.exports = router;
