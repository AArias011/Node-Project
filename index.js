var fetch = require('node-fetch');
var fs = require('fs');

const express = require('express');

const app = express();
const expbs = require('express-handlebars');
const path = require('path');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



app.engine('handlebars', expbs({ 
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views/mainLayout')
}));

app.set('view engine', 'handlebars');

//Routing
app.get('/', (req, res) => {
    
    res.render('index', { 
        title:'Home Page', 
        name : 'Anthony Arias',
    age: '5',
    isDisplayName: true,
    isAgeEnabled: true
});
});

app.get('/contact', (req, res) => {

fetch('https://reqres.in/api/users?page=2')
.then(response => response.json())
.then(data => {
    console.log(data)


    // app.use(express.static())
res.render('contact', {
        data: json.data
    });

});

    
})
app.get('/about', (req, res) => {


    res.render('about', { 
    title:'About Me',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium iusto eveniet nostrum commodi nobis consectetur velit non cupiditate itaque consequatur magni, quod deserunt hic dolor nam, saepe architecto sed nesciunt, eius labore. Non aut temporibus quae consequatur facilis, vitae deserunt sit iusto cum aliquam. Dignissimos nam ipsum, accusamus dolores sed veritatis natus soluta eius corporis, quae libero rerum cum necessitatibus, officia incidunt. Consectetur numquam assumenda ipsa? Quisquam repudiandae animi quidem asperiores totam illo dolorem in saepe, maiores maxime laboriosam reprehenderit. Omnis quod autem tempore nesciunt sunt ea ullam delectus.'
});
});

app.get('/dashboard', (req, res) =>{
    res.render('dashboard',{
        isListEnabled: false
    })
})

app.get('/lookup', (req, res) => {
    res.render('lookup', {
        user: {
            username: 'ntharias',
            age:18,
            phone:3453453453
        },
    });
})