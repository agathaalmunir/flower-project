const { response, request } = require('express');
const Message = require('../models/messageModel');
const Design = require('../models/designModel');

module.exports = {
    message_create_get: (request, response) => {
        const designId = request.params.idParams;
        console.log(designId);
        Design.findOne({_id: designId}, (error, foundDesign) => {
            if (error) {
                return error;
            } else {
              console.log(foundDesign.base)
                response.render('pages/submission', {design: foundDesign})
            }
        })
    }
};