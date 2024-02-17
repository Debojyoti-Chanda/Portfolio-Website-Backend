const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    name: String,
    email: String,
    commentText : String
})

module.exports = mongoose.model('messages', messagesSchema);