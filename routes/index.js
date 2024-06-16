const express = require("express");
const router = express.Router();
const staticRoute = require("./static");
const errorRoute = require("./errorRoute");
const buildController = require("../controllers/buildController");

router.get("/", buildController.Home);

router.use(staticRoute);
router.use(errorRoute);

module.exports = router;