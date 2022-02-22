const mongoose = require("mongoose");

const landlordSchema = mongoose.Schema({
  ld_username: {
    type: String,
    required: [true, "Please enter a username"],
  },
  ld_email: {
    type: String,
    required: [true, "Please enter a email"],
  },
  ld_name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  ld_bankactname: {
    type: String,
    required: [true, "Please enter a bank account name"],
  },
  ld_password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  ld_bankactid: {
    type: String,
    required: [true, "Please enter a bank account id"],
  },
  ld_surname: {
    type: String,
    required: [true, "Please enter a surname"],
  },
  ld_phonenum: {
    type: String,
    required: [true, "Please enter a phone number"],
  },
  ld_idcard: {
    type: String,
    required: [true, "Please enter a id card"],
  },
});

module.exports = mongoose.model("Landlord", landlordSchema);
