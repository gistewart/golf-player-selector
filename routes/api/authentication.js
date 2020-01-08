const router = require("express").Router();
const db = require("../../models");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const isAuthenticated = require("../../middleware/isAuthenticated");

router.route("/authenticate").post(function(req, res) {
  //   res.json("test");
  db.User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(function(dbUser) {
      if (!dbUser) {
        return res
          .status(401)
          .json({ message: "Sorry, your username was not found" });
      }
      if (dbUser.comparePassword(req.body.password)) {
        const token = jwt.sign(
          {
            data: dbUser.id
          },
          process.env.JWT_KEY
        );

        res.json({
          id: dbUser.id,
          username: dbUser.username,
          token: token
        });
      } else {
        return res
          .status(401)
          .json({ message: "Sorry, your password was not found" });
      }
    })
    .catch(function(err) {
      res.status(500).json({ message: err.message });
    });
});

router.route("/signup").post(function(req, res) {
  db.User.create(req.body)
    .then(function() {
      res.json({ message: "User created" });
    })
    .catch(function(err) {
      res.json({ message: err.message });
    });
});

router.route("/me", isAuthenticated, function(req, res) {
  db.User.findByPk(req.user.id).then(dbUser => {
    res.json(dbUser);
  });
});

module.exports = router;
