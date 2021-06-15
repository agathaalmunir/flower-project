const { response, request } = require('express');
const Message = require('../models/messageModel');
const Design = require('../models/designModel');

module.exports = {
    message_create_get: (request, response) => {
        const designId = request.params.idParams;
        console.log(designId);
        Design.findOne({_id: designId}, (error, foundDesign) => {
            // console.log(foundDesign);
            if (error) {
                return error;
            } else {
                response.render('pages/submission', {design: foundDesign})
            }
        })
    },
    message_create_post: (request, response) => {
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