const asyncHandler = require("express-async-handler");

// @desc Get Tenant
// @router GET /api/tenants
// @access Private
const getTenant = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Tenant" });
});

// @desc Set Tenant
// @router POST /api/tenants
// @access Private
const setTenant = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text feild");
  }

  res.status(200).json({ message: "Set Tenant" });
});

// @desc Update Tenant
// @router PUT /api/tenants
// @access Private
const updateTenant = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
});

// @desc Delete Tenant
// @router DELETE /api/tenants
// @access Private
const deleteTenant = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete user ${req.params.id}` });
});

module.exports = {
  getTenant,
  setTenant,
  updateTenant,
  deleteTenant,
};
