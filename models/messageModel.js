const mongoose = require('mongoose');
const {Schema} = mongoose;

const messageSchema = new Schema({
    messageText: {
        type: String,
        required: [true, 'A message is required.'],
        minlength:[1,'The minimun length for the message is 1 character.']
    },
    senderName: {
        type: String,
        required: [ true, 'A sender name is required'],
        minlength: [1, "The miniumun length for the sender name is 1 character"]
    },
    senderEmail: {
        type: String,
        trim: true,
        required: [ true, 'A sender email is required'],
        minlength: [5, "The miniumun length for the sender email is 5 characters"]
    },
    recipientName: {
        type: String,
        required: [ true, 'A recipient name is required'],
        minlength: [1, "The miniumun length for the recipient name is 1 character"]
    },
    recipientEmail: {
        type: String,
        trim: true,
        required: [ true, 'A recipient email is required'],
        minlength: [5, "The miniumun length for the recipient email is 5 characters"]
    }
});

const Message = mongoose.model('Message', messageSchema);

// Sample Entry
// const messageSample = new Message({messageText:'Hi', senderName:'Agatha', senderEmail:'me@live.com', recipientName:'you',
// recipientEmail:'you@you.com'});

// messageSample.save();

module.exports = Message;