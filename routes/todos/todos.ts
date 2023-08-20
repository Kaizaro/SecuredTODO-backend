import {TODOS_PATHS} from "./todos.paths";

var express = require('express');
var todos = express.Router();

todos.get(TODOS_PATHS.GET_TODOS, (request, response, next) => {
  console.log(request);
  response.send({status: 'OK', code: 200, data: {value: 'successfully loaded items'}});
})

module.exports = todos;
