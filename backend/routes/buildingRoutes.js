const express = require("express");
const router = express.Router();
const {
  getBuilding,
  setBuilding,
  updateBuilding,
  deleteBuilding,
} = require("../controllers/buildingController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getBuilding).post(protect, setBuilding);
router
  .route("/:id")
  .put(protect, updateBuilding)
  .delete(protect, deleteBuilding);

// router.get("/", getBuilding);

// router.post("/", setBuilding);

// router.put("/:id", updateBuilding);

// router.delete("/:id", deleteBuilding);

module.exports = router;
