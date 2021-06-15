// designContoller.js will store all handler function for our design related routes
const Design = require('../models/designModel');


module.exports = {
    all: (request, response) => {
        Design.find({}, (error, allDesigns) => {
            if (error) {
                return error;
            } else {
                response.render('pages/index', {design: allDesigns})
            }
        })
    },
    design_detail: (request, response) => {
        const { id } = request.params;
        Design.findOne({_id: id}, (error, singleDesign) => {
            if (error) {
                return error;
            } else {
                response.render('pages/submission', {design: singleDesign})
            }
        })
    },
    design_create_get: (request, response) => {
        response.render('pages/index');
    },
    design_create_post: (request, response) => {
        const newDesign = new Design({
            base: request.body.base,
            flower: request.body.flower,
            greenery: request.body.greenery,
            accents: request.body.accents
        });
        newDesign.save();
        response.redirect(`/submission/${newDesign._id}`);
    },
    design_update_get: (request, response) => {
        const { id } = request.params;
        Design.findOne({_id: id}, (error, singleDesign) => {
          console.log(id);
          console.log(singleDesign.base);
          if(error) {
            return error;
          } else {
            response.render('pages/submission', { design: singleDesign });
          }
        });
    },
    design_update_put: (request, response) => {
            const { id } = request.params.id;
            Design.findByIdAndUpdate(id, {$set: {
                messageText: request.body.messageText,
                senderName: request.body.senderName,
                senderEmail: request.body.senderEmail,
                recipientName: request.body.recipientName,
                recipientEmail: request.body.recipientEmail
            }}, {new: true}, error => {
                if (error) {
                    return error;
                } else {
                    const message = {
                        senderName: request.body.senderName,
                        recipientName: request.body.recipientName,
                    }
                    response.render('pages/designMessageConfirmation', {message: message});
            }
        })
    }
};