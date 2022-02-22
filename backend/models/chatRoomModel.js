const mongoose = require("mongoose");

const chatRoomSchema = mongoose.Schema({
  tn_id: {
    type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    ref: "Tenant",
  },
  ld_id: {
    type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    ref: "Landlord",
  },
});

module.exports = mongoose.model("Chatroom", chatRoomSchema);
