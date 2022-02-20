const asyncHandler = require("express-async-handler");

// @desc Get Landlord
// @router GET /api/landlords
// @access Private
const getLandlord = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Landlord" });
});

// @desc Set Landlord
// @router POST /api/landlords
// @access Private
const setLandlord = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text feild");
  }

  res.status(200).json({ message: "Set Landlord" });
});

// @desc Update Landlord
// @router PUT /api/landlords
// @access Private
const updateLandlord = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update user ${req.params.id}` });
});

// @desc Delete Landlord
// @router DELETE /api/landlords
// @access Private
const deleteLandlord = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete user ${req.params.id}` });
});

module.exports = {
  getLandlord,
  setLandlord,
  updateLandlord,
  deleteLandlord,
};
