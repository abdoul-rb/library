const { Schema } = require("mongoose");
const conn = require("../../lib/mongo");

const CovidStatSchema = new Schema({
  country: { type: String },
  day_death: Number,
  total_death: Number,
});

const CovidStat = conn.model("CovidStat", CovidStatSchema);

module.exports = CovidStat;
