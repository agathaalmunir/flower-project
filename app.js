// const { response } = require('express');
require('dotenv').config();
const express = require ('express');
const { request } = require('http');
const morgan = require ('morgan');
const path =require('path');
const { redirect } = require('statuses');
const routes = require('./routes/index');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;

app.set ('view engine', 'ejs');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// Call all of our routes
app.use(routes);
 
// Display the About Page
app.get('/about', (request, response) => {
    response.render('pages/about')
});

app.get('/', (request, response) => {
    response.redirect('/design');
});

require('./config/connection');
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});