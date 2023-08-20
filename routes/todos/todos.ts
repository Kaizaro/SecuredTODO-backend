var express = require('express');
var todos = express.Router();
var paths = require('./todos.paths.ts');
var getTODOListFromDB = require('../../db/actions/getTODOList.js');
var postTODOAtDb = require('../../db/actions/postTODO.js');

todos.get(paths.GET_TODOS, async (request, response, next) => {
  console.log(request);
  try {
    const list = await getTODOListFromDB();
    response.send({items: list});
  } catch (error) {
    response.status(400).send(error);
  }
})

todos.post(paths.POST_TODO, async (request, response, next) => {
  console.log(request);
  const result = await postTODOAtDb(request);
  if (result) {
    response.send({status: 'OK', code: 200, data: {value: 'successfully loaded items'}});
  } else {
    response.send({status: 'Error', code: 400, data: {value: 'Error occured'}});
  }
})

module.exports = todos;
