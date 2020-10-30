const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sultanSchema = new Schema({
  title: {
    type: String,
  },
  firstDate: {
    type: String,
  },
  lastDate: {
    type: String,
  },
  father: {
    type: String,
  },
  mother: {
    type: String,
  },
  avatar: {
    type: String,
  },
  desc: {
    type: Array,
  },
  period: {
    type: String,
  },
});

module.exports = mongoose.model('sultan', sultanSchema);
