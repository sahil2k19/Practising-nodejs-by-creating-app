const express = require('express');
const app = express();

//layouts
const port = 8000;

//databse

const db = require('./config/mongoose');

// importing express layouts
const expressLayouts = require('express-ejs-layouts');

//locating assets 
app.use(express.static('./assets'));

// using layouts
app.use(expressLayouts);

//extract style and scripts from sub pages into the layouts
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);




// use express router
// we can also write below :- './routes/index.js' :- but it by default pointing to index file
app.use('/', require('./routes'));

//defining ejs that we gonna use
app.set('view engine', 'ejs');

//locating views folder(where all our templates located)
app.set('views', './views');




app.listen(port, (err) => {
    if (err) {
        console.log('error ');
        console.log(`Error in running in server :${port}`);
    }
    console.log(`server is running on port : ${port}`);
})

