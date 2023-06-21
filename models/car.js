const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "New Car",
  },
  make: {
    type: String,
  },
  model: {
    type: String,
  },
  year: {
    type: Number,
    min: 1950,
    max: 2023,
  },
  color: {
    type: String,
    enum: ["Red", "Blue", "Silver", "Black", "White"],
  },
});

module.exports = mongoose.model("Car", carSchema);
