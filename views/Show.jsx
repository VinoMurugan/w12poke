const React = require('react');

const myStyle = {
  color: '#000000',
  backgroundColor: '#ffffff',
};

class Show extends React.Component {
  render() {
    

    const { pokemons ,match } = this.props;
    const { id } = this.props.match.params; // Get the id parameter from the URL

    // Ensure the id is within a valid range
    if (id >= 0 && id < pokemons.length) {
      const pokemon = pokemons[id];
      const imageUrl = pokemon.img + '.jpg'; // Fix the image URL by adding '.jpg'

      return (
        <div style={myStyle}>
          <h1>Gotta Catch 'Em All</h1>
          <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
          <img src={imageUrl} alt={pokemon.name} />
          <a href="/pokemons">Back</a>
        </div>
      );
    } else {
      return (
        <div style={myStyle}>
          <h1>Gotta Catch 'Em All</h1>
          <p>Pokémons not found</p>
          <a href="/pokemons">Back</a>
        </div>
      );
    }
  }
}

module.exports = Show;
