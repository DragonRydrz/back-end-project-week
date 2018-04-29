const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Note = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    maxlength: 32,
  },
  body: { type: String, default: 'Default Entry' },
  user: [{ type: ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Note', Note);