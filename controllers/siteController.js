module.exports = {
  index: (request, response) => {
    response.redirect('/design');
},
  about: (request, response) => {
      response.render('pages/about')   
}
};