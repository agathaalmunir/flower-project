const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/flowerCode', {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    if (error) {
        console.log('Error with MongoDB connectivity');
    } else {
        console.log('Successful connection with MongoDB Server');
    }
});