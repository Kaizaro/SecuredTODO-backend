const dayjs = require('dayjs');

var TODO = require('../models/todo');

const deleteTODOFromDB = async (data) => {
  console.log('@DATA => ', data);
  try {
    const result = await TODO.deleteOne({uuid: data.uuid});
    console.log('@DELETION => ', 'Item was deleted', result);
    return result
  } catch (error) {
    console.log('@DELETION => ', error);
  }
}

module.exports = deleteTODOFromDB;
