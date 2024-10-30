// User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  role: { type: String, default: 'Client' },
});

module.exports = mongoose.model('User', UserSchema);
