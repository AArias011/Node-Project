const fetch = require('node-fetch');
const express = require('express')
const PORT = 8080;
const app = express();
// const URL = "https://reqres.in/api/users?page=2";

// const handlebars = require('express-handlebars')({
//     extname: '.handlebars',
// });
// app.engine('handlebars', handlebars);
// app.set('view engine', 'handlebars');

const get_data = async (url,templateNameString, res) => {
    try{
        const response = await fetch(url);
        const json = await response.json();

        /**
         *  1.lookup res.render() in express api docs
         *  2. how can we write this as a call back in our
         */
        res.render(templateNameString, {
            people: json.data
        });
        // End expressJS code

        console.timeEnd("Request time");
    } catch (error){
        console.log(error);
    }
};



app.get('/', (req, res) => {
    res.render('index', {
        exampleVariable: 'Hello World'
    });
});

app.get('/people', (req, res) => {
    get_data("https://reqres.in/api/users?page=2", "people", res)
});

app.get('/about', (req, res) => {
    res.render('about');
});
app.use(function(req, res, next){
    res.status(404);
    res.type('txt').send('Not found');
});

app.use(function(err, req, next){
    if (err) {
        res.status(err.status || 500)
        .type('txt')
        .send(err.message || 'SERVER ERROR');
    }
})

let listener = app.listen(PORT||process.env.PORT, () => {
    console.log('Your app is listening on port ' + listener.address().port);
});