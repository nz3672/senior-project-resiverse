const asyncHandler = require("express-async-handler");

// @desc Get Users
// @router GET /api/users
// @access Private
const getUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Users" });
});

// @desc Set Users
// @router POST /api/users
// @access Private
const setUsers = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text feild");
  }

  res.status(200).json({ message: "Set Users" });
});

// @desc Update Users
// @router PUT /api/users
// @access Private
const updateUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
});

// @desc Delete Users
// @router DELETE /api/users
// @access Private
const deleteUsers = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete user ${req.params.id}` });
});

module.exports = {
  getUsers,
  setUsers,
  updateUsers,
  deleteUsers,
};
