const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

const hbs = require('express-handlebars');

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/src/'}));
app.set('view engine', 'hbs');


//FETCH
const fetch = require('node-fetch');
var fs = require('fs');

fetch('https://reqres.in/api/users?page=2')
.then((res)=>{
    return res.json();
}).then((json)=>{
    console.log(json);
});



