const express = require("express");
const router = express.Router();
const {
  getBuilding,
  setBuilding,
  updateBuilding,
  deleteBuilding,
} = require("../controllers/buildingController");

router.route("/").get(getBuilding).post(setBuilding);
router.route("/:id").put(updateBuilding).delete(deleteBuilding);

// router.get("/", getBuilding);

// router.post("/", setBuilding);

// router.put("/:id", updateBuilding);

// router.delete("/:id", deleteBuilding);

module.exports = router;
