const { request, response } = require("express");
const Contact = require('../models/contactModel');

module.exports = {
    contact_create_get: (request, response) => {
        response.render('pages/contact');
    },
    contact_create_post: (request, response) => {
        const newContact = new Contact({
            senderName: request.body.senderName,
            senderEmail: request.body.senderEmail,
            message: request.body.message
        });
        newContact.save();
        response.render('pages/contactConfirmation', {contact: newContact});
    }
}