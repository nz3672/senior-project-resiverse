const express = require("express");
const router = express.Router();
const {
  getChatroom,
  setChatroom,
  updateChatroom,
  deleteChatroom,
} = require("../controllers/chatroomController");

router.route("/").get(getChatroom).post(setChatroom);
router.route("/:id").put(updateChatroom).delete(deleteChatroom);

// router.get("/", getChatroom);

// router.post("/", setChatroom);

// router.put("/:id", updateChatroom);

// router.delete("/:id", deleteChatroom);

module.exports = router;
