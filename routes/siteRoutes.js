// Display the About Page
app.get('/about', (request, response) => {
    response.render('pages/about')
});

app.get('/', (request, response) => {
    response.redirect('/design');
});
