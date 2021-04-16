const mongoose = require('mongoose');

async function connect() {
  await mongoose.connect('mongodb://localhost:27017/swfood', { useUnifiedTopology: true, useNewUrlParser: true });
  console.log('Data base connected ...');
}

module.exports = {
  connect
};
