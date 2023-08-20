var schema = require('../schemas/todo');

// Using schema to build Mongoose models
const TODO = mongoose.model('TODO', schema);

module.exports = TODO;
