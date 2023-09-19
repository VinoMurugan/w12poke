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