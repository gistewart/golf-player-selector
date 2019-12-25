const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Players collection and inserts the players below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/player-selector"
);

const playerSeed = [
  {
    player: "Brooks Koepka",
    earnings: "9684006",
    date: new Date(Date.now())
  },
  {
    player: "Rory McIlory",
    earnings: "7785286",
    date: new Date(Date.now())
  },
  {
    player: "Matt Kuchar",
    earnings: "6294690",
    date: new Date(Date.now())
  },
  {
    player: "Patrick Cantlay",
    earnings: "6121488",
    date: new Date(Date.now())
  }
];

db.Player.remove({})
  .then(() => db.Player.collection.insertMany(playerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
