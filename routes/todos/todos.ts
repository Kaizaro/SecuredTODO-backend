var express = require('express');
var todos = express.Router();
var paths = require('./todos.paths.ts');

todos.get(paths.GET_TODOS, (request, response, next) => {
  console.log(request);
  response.send({status: 'OK', code: 200, data: {value: 'successfully loaded items'}});
})

todos.post(paths.POST_TODO, (request, response, next) => {
  console.log(request);
  response.send({status: 'OK', code: 200, data: {value: 'successfully loaded items'}});
})

module.exports = todos;
