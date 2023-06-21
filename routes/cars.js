var express = require('express');
var router = express.Router();
const carsCtrl = require("../controllers/cars")

router.get("/", carsCtrl.index)
router.get("/new", carsCtrl.new)
router.get("/:id/edit", carsCtrl.edit)
router.post("/", carsCtrl.create)
router.delete("/:id", carsCtrl.delete)
router.put("/:id", carsCtrl.update)


module.exports = router;
