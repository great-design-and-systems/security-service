var mongoose = require('mongoose');

var SessionSchema = new mongoose.Schema({
    sessionId: {
        type: String,
        required: [true, 'SessionId is required.']
    },
    username: {
        type: String,
        required: [true, 'Username is required.']
    },
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('session', SessionSchema);