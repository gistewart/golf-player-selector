const router = require("express").Router();
const playerRoutes = require("./players");
const authRoutes = require("./authentication");
const isAuthenticated = require("../../middleware/isAuthenticated");

// Auth routes
router.use("/", authRoutes);

// Player routes
router.use("/players", playerRoutes);

// !!!DELETE AFTER TESTING!!!
router.get("/protected", isAuthenticated, function(req, res) {
  res.json({
    message: "Super secret stuff. I mean really."
  });
});

router.get("/public", function(req, res) {
  res.json({
    message: "This is just boring, public data."
  });
});

module.exports = router;
