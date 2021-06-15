const mongoose = require('mongoose');

const {Schema} = mongoose;
const designSchema = new Schema({
    base: String,
    flower: String,
    greenery: String,
    accents: String,
    messageText: String,
    senderName: String,
    senderEmail: String,
    recipientName: String,
    recipientEmail: String,
});

const Design = mongoose.model('Design', designSchema)

// Sample entry
// const designSample = new Design({base:'pot', flower:'coneflower', greenery:'babys-breath', accents:'sparkles'});

// pushes the document to our collection
// designSample.save();

module.exports = Design;