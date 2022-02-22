const express = require("express");
const router = express.Router();
const {
  getRoom,
  setRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/roomController");

router.route("/").get(getRoom).post(setRoom);
router.route("/:id").put(updateRoom).delete(deleteRoom);

// router.get("/", getRoom);

// router.post("/", setRoom);

// router.put("/:id", updateRoom);

// router.delete("/:id", deleteRoom);

module.exports = router;
