var express = require('express');
var todos = express.Router();
var paths = require('./todos.paths.ts');
var getTODOListFromDB = require('../../db/actions/getTODOList.js');
var postTODOAtDb = require('../../db/actions/postTODO.js');
var deleteTODOFromDb = require('../../db/actions/deleteTODO.js');

todos.get(paths.GET_TODOS, async (request, response, next) => {
  console.log(request);
  try {
    const list = await getTODOListFromDB();
    response.send({items: list});
  } catch (error) {
    response.status(400).send(error);
  }
})

todos.post(paths.POST_TODO, async (request, response) => {
  console.log('@POST_TODO_REQ => ', request.body);
  const result = await postTODOAtDb(request.body.todoItem);
  if (result) {
    response.send({success: 'ok'});
  } else {
    response.send({success: 'Error', code: 400, data: {value: 'Error occurred'}});
  }
})

todos.delete(paths.DELETE_TODO, async (request, response) => {
  console.log('@POST_TODO_REQ => ', request);
  console.log('@POST_TODO_REQ => ', request.body);
  const result = await deleteTODOFromDb(request.body.todoItemUuid);
  if (result) {
    response.send({success: 'ok'});
  } else {
    response.send({status: 'Error', code: 400, data: {value: 'Error occurred'}});
  }
})

module.exports = todos;
