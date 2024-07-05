const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {type:String, required: true},
  lastName: {type:String, required: true},
  username: { type: String, unique: true },
  password: String,
  followings: { type: Number, default: 0 },
  followers: { type: Number, default: 0 },
  followersList: [{ type: String, default: 0 }]
});

module.exports = mongoose.model('User', userSchema);