const { response, request } = require('express');
const Message = require('../models/messageModel');
const Design = require('../models/designModel');

module.exports = {
    message_create_get: (require, response) => {
        const designId = request.params.id;
        Design.findOne({_id: designId}, (error, foundDesign) => {
            if (error) {
                return error;
            } else {
                response.render('pages/submission', {design: foundDesign})
            }
        })
    },
    message_create_post: (require, response) => {
        const newMessage = new Message ({
            messageText: request.body.messageText,
            senderName:  request.body.senderName,
            senderEmail: request.body.senderEmail,
            recipientName:  request.body.recipientName,
            recipientEmail: request.body.recipientEmail
        });

    newMessage.save();

    response.redirect("pages/designMessageConfirmation")
    }
};