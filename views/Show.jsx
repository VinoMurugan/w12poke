const React = require('react');
const DefaultLayout = require('./layout/Default');
const myStyle = {
  color: '#000000',
  backgroundColor: '#ffffff',
};

class Show extends React.Component {
  render() {
    const { pokemons } = this.props;
    const { id } = this.props.match.params; // Get the id parameter from the URL

    // Ensure the id is within a valid range
    if (id >= 0 && id < pokemons.length) {
      const pokemon = pokemons[id];
      const imageUrl = pokemon.img ; // Fix the image URL by adding '.jpg'

      return (
        <DefaultLayout title={"Pokemons Show Page"}>
          <img src={imageUrl} alt={pokemon.name} /> {/* Display the image */}
          <p>
            The {pokemon.name} is {pokemon.color}.{" "}
            {pokemon.readyToCatch
              ? "It is ready to catch"
              : "It is not ready to catch... Cant touch this"}
          </p>
          <br />
          <a href='/pokemons'>Home</a>
        </DefaultLayout>
      );
    } else {
      return (
        <DefaultLayout title={"Pokemons Show Page"}>
          <p>Invalid Pokemon ID</p>
          <br />
          <a href='/pokemons'>Home</a>
        </DefaultLayout>
      );
    }
  }
}

module.exports = Show;













// const React = require('react');
// const DefaultLayout = require('./layout/Default');
// const myStyle = {
//   color: '#000000',
//   backgroundColor: '#ffffff',
// };

// class Show extends React.Component {
//   render() {
//     // const pokemon = this.props.pokemon
//     // console.log(pokemon)

//     const { pokemons } = this.props;
//     const { id } = this.props.match.params; // Get the id parameter from the URL

//     // // Ensure the id is within a valid range
//     if (id >= 0 && id < pokemons.length) {
//       const pokemon = pokemons[id];
//       const imageUrl = pokemon.img + '.jpg'; // Fix the image URL by adding '.jpg'
// return{
//       <DefaultLayout title={"Pokemons Show Page"}>
//       <img src={imageUrl} alt={pokemon.name} />
//       <p>
//         The {pokemon.name} is {pokemon.color}.{" "}
//         {pokemon.readyToCatch
//           ? "It is ready to catch"
//           : "It is not ready to catch... Cant touch this"}
//       </p>
//           <br/>
//       <a href='/pokemons'>Home</a>
//       </DefaultLayout>
//       );
//     } else {
//       return (
//         <DefaultLayout title={"Pokemons Show Page"}>
//           <p>Invalid Pokemon ID</p>
//           <br />
//           <a href='/pokemons'>Home</a>
//         </DefaultLayout>
//       );
//     }
//   }
// }

// module.exports = Show;
