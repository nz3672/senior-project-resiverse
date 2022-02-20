const express = require("express");
const router = express.Router();
const {
  getTenant,
  setTenant,
  updateTenant,
  deleteTenant,
} = require("../controllers/tenantController");

router.route("/").get(getTenant).post(setTenant);
router.route("/:id").put(updateTenant).delete(deleteTenant);

// router.get("/", getTenant);

// router.post("/", setTenant);

// router.put("/:id", updateTenant);

// router.delete("/:id", deleteTenant);

module.exports = router;
