var TODO = require('../models/todo');

const getTODOFromDB = async (data) => {
  const TODOList = await TODO.find({});

  if (TODOList) {
    return TODOList;
  }
}

module.exports = postTODOAtDB;
