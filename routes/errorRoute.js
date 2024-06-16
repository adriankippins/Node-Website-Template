const express = require("express");
const router = express.Router();
const buildController = require("../controllers/buildController");

// Route to trigger the error page
router.get("/", (req, res, next) => {
  const status = parseInt(req.query.status, 10);

  // Check if status is a valid HTTP error status code (400-599)
  if (status && status >= 400 && status < 600) {
    buildController.Error(req, res, next, status);
  } else {
    // If status is invalid or not provided, default to 404
    buildController.Error(req, res, next, 404);
  }
});

// Route for handling error pages at /xr
router.use("/xr", (req, res, next) => {
  const status = parseInt(req.query.status, 10);

  // Check if status is a valid HTTP error status code (400-599)
  if (status && status >= 400 && status < 600) {
    buildController.Error(req, res, next, status);
  } else {
    // If status is invalid or not provided, default to 404
    buildController.Error(req, res, next, 404);
  }
});

module.exports = router;