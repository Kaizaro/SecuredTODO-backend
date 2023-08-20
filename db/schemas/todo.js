const mongoose = require("mongoose");

const TODOSchema = new mongoose.Schema({
  text: String,
  uuid: String,
  updatedAt: String,
  timestamp: Number,
});

module.exports = TODOSchema;
