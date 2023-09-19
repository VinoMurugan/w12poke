const React = require('react');

const myStyle = {
  color: '#000000',
  backgroundColor: '#ffffff',
};

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;

    return (
        <div style={myStyle}>
          <h1>See All The Pokemons!</h1>
          <ul>
            {pokemons.map((pokemon, index) => (
              <li key={index}>
                <a href={`/pokemons/${index}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a>
                </li>
            ))}
          </ul>
          <nav>
                  <a href="/pokemons/new">Create a New pokee</a>
                  </nav>
        </div>
      );
    }
  }
  
  module.exports = Index;