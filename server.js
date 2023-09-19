const express = require('express');
const app = express();
const jsxEngine = require
('jsx-view-engine')

// Require the 'database' (pokemon array)
const pokemons = require('./models/pokemons.js');
// const Index = require('./views/Index');

// Define the port variable
// const port = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use(express.static('images'));



app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});



// Define a GET route for /pokemon that sends the 'pokemon' array as JSON
app.get('/pokemons', (req, res) => {
    try{
    res.render('Index', { pokemons: pokemons });
}catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } 
});

//   app.get('/pokemons/:indexOfPokemonsArray', (req, res) => {
//     // res.send(fruits[req.params.indexOfFruitsArray]);
//     res.render('show',{
//         pokemon: pokemons[req.params.indexOfPokemonsArray]
//     })//render the info using the 
// });


//new - get the form to add a new fruit
app.get('/pokemons/new', (req, res) => {
    res.render('New');
});


//DELETE


//UPDATE


//CREATE
app.post('/pokemons', (req, res) => {
    // Handle the POST request to create a new "pokee" here
    // You can access form data from req.body
    const name = req.body.name;
    const color = req.body.color;
    const isitPokeFound = req.body['Gotta Catch Em All'];
    const img = req.body.img;
    pokemons.push(req.body);
    console.log(pokemons);
    res.send('data received');
});






app.get('/pokemons/:indexOfPokemonsArray', (req, res) => {
    const indexOfPokemonsArray = req.params.indexOfPokemonsArray;
    res.render('show', {
      pokemons: pokemons,
      match: { params: { id: indexOfPokemonsArray } }, // Pass the match object with id parameter
    });
  });

// Start the server and listen on the specified port
app.listen(3000, () => {
//   console.log(`Server is running on port ${port}`);
console.log('listening');
});