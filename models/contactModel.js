const mongoose = require('mongoose');

const {Schema} = mongoose;
const contactSchema = new Schema({
    senderName: {
        type: String,
        required: [ true, 'A name is required'],
        minlength: [1, "The miniumun length for name is 1 character"]
    },
    senderEmail: {
        type: String,
        trim: true,
        required: [ true, 'An email is required'],
        minlength: [5, "The miniumun length for the sender email is 5 characters"],
    },
    message: {
        type: String,
        required: [true, 'A message is required'],
        maxlength: [300, "The maximum length for the message is 300 characters"]
    }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;