const express = require("express");
const router = express.Router();
const {
  getTransList,
  setTransList,
  updateTransList,
  deleteTransList,
} = require("../controllers/transListController");

router.route("/").get(getTransList).post(setTransList);
router.route("/:id").put(updateTransList).delete(deleteTransList);

// router.get("/", getTransList);

// router.post("/", setTransList);

// router.put("/:id", updateTransList);

// router.delete("/:id", deleteTransList);

module.exports = router;
