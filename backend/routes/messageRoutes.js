const express = require("express");
const router = express.Router();
const {
  getMessage,
  setMessage,
  updateMessage,
  deleteMessage,
} = require("../controllers/messageController");

router.route("/").get(getMessage).post(setMessage);
router.route("/:id").put(updateMessage).delete(deleteMessage);

// router.get("/", getMessage);

// router.post("/", setMessage);

// router.put("/:id", updateMessage);

// router.delete("/:id", deleteMessage);

module.exports = router;
