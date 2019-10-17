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


const get_data = async (url,templateNameString, res) => {
    try{
        const response = await fetch(url);
        const json = await response.json();

        /**
         *  1.lookup res.render() in express api docs
         *  2. how can we write this as a call back in our
         */
        res.render(templateNameString, {
            //Michael
            michaelIMG: json.data[0].avatar,
            firstNameM: json.data[0].first_name,
            lastNameM: json.data[0].last_name,
            emailM: json.data[0].email,
            idM: json.data[0].id,
            //Lindsay
           lindsayIMG: json.data[1].avatar,
            firstNameL: json.data[1].first_name,
            lastNameL: json.data[1].last_name,
            emailL: json.data[1].email,
            idL: json.data[1].id,
            //Tobias
            tobiasIMG: json.data[2].avatar,
            firstNameT: json.data[2].first_name,
            lastNameT: json.data[2].last_name,
            emailT: json.data[2].email,
            idT: json.data[2].id,
            //Byron
            byronIMG: json.data[3].avatar,
            firstNameB: json.data[3].first_name,
            lastNameB: json.data[3].last_name,
            emailB: json.data[3].email,
            idB: json.data[3].id,
            //George
            georgeIMG: json.data[4].avatar,
            firstNameG: json.data[4].first_name,
            lastNameG: json.data[4].last_name,
            emailG: json.data[4].email,
            idG: json.data[4].id,
            
            
        });

        // End expressJS code

        // console.timeEnd("Request time");
    } catch (error){
        console.log(error);
    }
};

app.get('/lindsay', (req, res) => {
    get_data("https://reqres.in/api/users?page=2", "lindsay", res)
});

app.get('/michael', (req, res) => {
    get_data("https://reqres.in/api/users?page=2", "michael" ,res)
})

app.get('/tobias', (req, res) => {
    get_data("https://reqres.in/api/users?page=2", "tobias", res)
})

app.get('/byron', (req, res) => {
    get_data("https://reqres.in/api/users?page=2", "byron", res)
})

app.get('/george', (req, res) => {
    get_data("https://reqres.in/api/users?page=2", "george", res)
})
//Routing
// app.get('/', (req, res) => {
    
//     res.render('index', { 
//         title:'Home Page', 
//         name : 'Anthony Arias',
//     age: '5',
//     isDisplayName: true,
//     isAgeEnabled: true
// });
// });

// app.get('/contact', (req, res) => {

// fetch('https://reqres.in/api/users?page=2')
// .then(response => response.json())
// .then(data => {
//     console.log(data)


//     // app.use(express.static())
// res.render('contact', {
//     });

// });

    
// })
// app.get('/about', (req, res) => {


//     res.render('about', { 
//     title:'About Me',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium iusto eveniet nostrum commodi nobis consectetur velit non cupiditate itaque consequatur magni, quod deserunt hic dolor nam, saepe architecto sed nesciunt, eius labore. Non aut temporibus quae consequatur facilis, vitae deserunt sit iusto cum aliquam. Dignissimos nam ipsum, accusamus dolores sed veritatis natus soluta eius corporis, quae libero rerum cum necessitatibus, officia incidunt. Consectetur numquam assumenda ipsa? Quisquam repudiandae animi quidem asperiores totam illo dolorem in saepe, maiores maxime laboriosam reprehenderit. Omnis quod autem tempore nesciunt sunt ea ullam delectus.'
// });
// });

// app.get('/dashboard', (req, res) =>{
//     res.render('dashboard',{
//         isListEnabled: false
//     })
// })

// app.get('/lookup', (req, res) => {
//     res.render('lookup', {
//         user: {
//             username: 'ntharias',
//             age:18,
//             phone:3453453453
//         },
//     });
// })