const express = require("express");
const router = express.Router();
const {
  getLandlord,
  setLandlord,
  updateLandlord,
  deleteLandlord,
} = require("../controllers/landlordController");

router.route("/").get(getLandlord).post(setLandlord);
router.route("/:id").put(updateLandlord).delete(deleteLandlord);

// router.get("/", getLandlord);

// router.post("/", setLandlord);

// router.put("/:id", updateLandlord);

// router.delete("/:id", deleteLandlord);

module.exports = router;
