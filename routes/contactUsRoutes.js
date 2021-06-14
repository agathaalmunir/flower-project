// stores all the contact us routes

// Display Contact Form
app.get('/contact', (request, response) => {
    response.render('pages/contact')
});

//Create New User Contact
app.post('/contact/new', (request, response) => {
    response.render('page/contact')
})