const TODOSchema = new mongoose.Schema({
  text: String,
  updatedAt: String,
  timestamp: Number,
});

module.exports = TODOSchema;
