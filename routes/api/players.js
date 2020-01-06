const router = require("express").Router();
const playersController = require("../../controllers/playersController");

// Matches with "/api/players"
router.route("/").get(playersController.findAll);

module.exports = router;

//requires our db to access our golf model
// const db = require("../models");
