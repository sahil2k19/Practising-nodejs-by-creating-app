const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db = mongoose.connection;

//if error

db.on('error', console.error.bind(console, "error connecting to db"));

// if no error

db.once('open', () => {
    console.log('connected to databse');
})


//export 
module.exports = db;