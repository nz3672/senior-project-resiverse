const express = require("express");
const router = express.Router();
const {
  getUsers,
  setUsers,
  updateUsers,
  deleteUsers,
} = require("../controllers/tenantController");

router.route("/").get(getUsers).post(setUsers);
router.route("/:id").put(updateUsers).delete(deleteUsers);

// router.get("/", getUsers);

// router.post("/", setUsers);

// router.put("/:id", updateUsers);

// router.delete("/:id", deleteUsers);

module.exports = router;
