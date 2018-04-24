const express = require('express');
let app = express();
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');


//Initially used: app.use(bodyParser.urlencoded( {extended: false } ))
//Advanced challenge required app.use(bodyParser.json()) instead.

app.use(bodyParser.json());

app.post('/contact-form', (req, res, next) => {
    console.log(req.body);
    let nameData = {
        firstName: req.body.firstname,
        lastName: req.body.lastname
    };
    fs.appendFile('name.json', `${JSON.stringify(nameData)}\n`);
    res.send('Thank you for your submission');
});



let pathToName = path.join(__dirname, '../name.json');

app.get('/formsubmissions', (req, res, next) => {
    fs.readFile(pathToName, function(err, data){
    if (err) console.log(err);
    console.log(data.toString());
    });
    res.send('Names logged to the console!')
});





// app.use((req, res, next) => {
//     console.log(req.url);
//     next();
// });



app.use(express.static(path.join(__dirname, '../public')));



// app.get('/', (req, res, next) => {
//     res.send('Hello from the web server side...');
// });

app.listen(3000, () => {
    console.log('listening to port 3000');
});