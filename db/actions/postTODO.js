var TODO = require('../models/todo');

const postTODOAtDB = (data) => {
  const addTODO = new TODO({
    text: data,
    updatedAt: dayjs().format('YYYY/MM/DD HH:mm'),
    timestamp: dayjs().valueOf(),
  });
  
  addTODO.save()
  .then((response) => {
    console.log('Saved TODO Item at MongoDB', response);
    return true;
  })
  .catch((error) => {
    console.error(error);
    return false;
  });
}

module.exports = postTODOAtDB;
