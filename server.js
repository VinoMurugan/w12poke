//Add dotenv
require('dotenv').config()

// const port = process.env.PORT || 8000;
const express = require('express');
const app = express();
const jsxEngine = require('jsx-view-engine')

const methodOverride = require('method-override')
app.use(methodOverride('_method'));

const mongoose = require('mongoose')
// connect to Mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

// Require the 'database' (pokemon array)
const pokemons = require('./models/pokemons.js');
const Pokemon = require('./models/pokemon.js')
// const Index = require('./views/Index');

// Define the port variable
// const port = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//near the top, around other app.use() calls
app.use(express.urlencoded({extended:false}));

app.use(express.static('images'));



app.use((req, res, next) => {
    console.log('I run for all routes')
    next()
})

// app.use(express.static('images'));


// Define a GET route for /pokemon that sends the 'pokemon' array as JSON
app.get('/pokemons',async (req, res) => {
    try{
      const pokemons = await Pokemon.find();
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
app.delete('/pokemons/:id', async (req, res)=>{
  try {
      await Pokemon.findByIdAndRemove(req.params.id)
      res.redirect('/pokemons')//redirect back to fruits index
  } catch(error) {
      console.error(error);
    }
  })


//UPDATE

app.put("/pokemons/:id",  async (req, res) => {
  try {
    if (req.body.readyToCatch === "on") {
      //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToCatch = true //do some data correction
    } else {
      //if not checked, req.body.readyToEat is undefined
      req.body.readyToCatch = false //do some data correction
    }
    // fruits.push(req.body);
     await Pokemon.findByIdAndUpdate(req.params.id, req.body)

    res.redirect("/pokemons")

  } catch(error) {
    console.log(error)
  }
})

//CREATE
app.post("/pokemons",  async (req, res) => {
  try {
    if (req.body.readyToCatch === "on") {
      //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToCatch = true //do some data correction
    } else {
      //if not checked, req.body.readyToEat is undefined
      req.body.readyToCatch = false //do some data correction
    }
    // fruits.push(req.body);
     await Pokemon.create(req.body)
    res.redirect("/pokemons")

  } catch(error) {
    console.log(error)
  }
})

//EDIT
app.get('/pokemons/:id/edit', async (req, res) => {
  try {
    const foundPokemon = await Pokemon.findById(req.params.id);
    res.render('Edit', { pokemon: foundPokemon });
  } catch (error) {
    console.log(error);
  }
});




//show
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
