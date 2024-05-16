const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    googleId: String,
    facebookId: String,
    twitterId: String,
    githubId: String,
    photo: String,
    name: String,
    bio: String,
    phone: String,
    email: { type: String, unique: true },
    isAdmin: { type: Boolean, default: false },
    isPublic: { type: Boolean, default: true }
});

module.exports = mongoose.model('Users', userSchema);