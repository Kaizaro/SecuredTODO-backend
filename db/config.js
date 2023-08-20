const dayjs = require("dayjs");
const mongoose = require("mongoose");

const server = 'localhost:27017'; 
const database = 'local'; 
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}

// Using schema to build Mongoose models
// const TODO = mongoose.model('TODO', TODOSchema);
// const addTODO = new TODO({
//   text: 'Test record',
//   updatedAt: dayjs().format('YYYY/MM/DD HH:mm'),
//   timestamp: dayjs().valueOf(),
// });

// addTODO.save()
// .then(() => {
//   console.log('Save TODO Item at MongoDB');
// })
// .catch((error) => {
//   console.error(error);
// });

module.exports = new Database();