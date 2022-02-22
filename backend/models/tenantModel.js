const mongoose = require("mongoose");

const tenantSchema = mongoose.Schema({
  tn_username: {
    type: String,
    required: [true, "Please enter a username"],
  },
  tn_email: {
    type: String,
    required: [true, "Please enter a email"],
  },
  tn_name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  tn_bankactname: {
    type: String,
    required: [true, "Please enter a bank account name"],
  },
  tn_password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  tn_bankactid: {
    type: String,
    required: [true, "Please enter a bank account id"],
  },
  tn_surname: {
    type: String,
    required: [true, "Please enter a surname"],
  },
  tn_phonenum: {
    type: String,
    required: [true, "Please enter a phone number"],
  },
  tn_idcard: {
    type: String,
    required: [true, "Please enter a id card"],
  },
});

module.exports = mongoose.model("Tenant", tenantSchema);
