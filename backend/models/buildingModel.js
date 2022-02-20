const mongoose = require("mongoose");

const buildingSchema = mongoose.Schema({
  bd_state: {
    type: String,
    required: [true, "Please enter a state"],
  },
  bd_cert: {
    type: String,
  },
  bd_address: {
    type: String,
    required: [true, "Please enter a address"],
  },
  bd_type: {
    type: String,
    required: [true, "Please enter a type"],
  },
  bd_desc: {
    type: String,
    required: [true, "Please enter a description"],
  },
  tr_id: {
    type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    ref: "TransactionList",
  },
  ld_id: {
    type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    ref: "Landlord",
  },
});

module.exports = mongoose.model("Building", buildingSchema);
