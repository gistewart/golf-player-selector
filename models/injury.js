const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const injurySchema = new Schema({
  injuryID: { type: Number },
  playerID: { type: Number },
  name: { type: String },
  active: { type: Boolean },
  startDate: { type: Date },
  status: { type: String },
  bodyPart: { type: String },
  expectedReturn: { type: String },
  date: { type: Date, default: Date.now }
});

const Injury = mongoose.model("Injury", injurySchema);

module.exports = Injury;
