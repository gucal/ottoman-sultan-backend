const mongoose = require('mongoose');
require('dotenv').config();

module.exports = () => {
  mongoose.connect(`${process.env.DB_HOST}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('open', () => {
    console.log('MongoDB: Açık');
  });

  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });
};
