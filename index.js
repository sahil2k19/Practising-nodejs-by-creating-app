const express = require('express');
const app = express();

const port = 8000;

// use express router
// we can also write below :- './routes/index.js' :- but it by default pointing to index file
app.use('/', require('./routes'));





app.listen(port, (err) => {
    if (err) {
        console.log('error ');
        console.log(`Error in running in server :${port}`);
    }
    console.log(`server is running on port : ${port}`);
})

