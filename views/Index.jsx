const React = require('react');
const DefaultLayout = require('./layout/Default.jsx');
const myStyle = {
  color: '#000000',
  backgroundColor: '#ffffff',
};

class Index extends React.Component {
  render() {
    const { pokemons } = this.props;

    return (
      <DefaultLayout title={"Pokemon Index Page"}>
      <nav>
        <a href="/pokemons/new">Create a New Pokemon</a>
      </nav>
      <ul>
      {this.props.pokemons.map((pokemon,i) => {
                  return <li key={i}>
                      <a href={`/pokemons/${pokemon.id}`}>{pokemon.name}</a>
                       is { pokemon.readytoCatch? <span>It is ready to catch</span>: <span> It is not ready to catch </span>}
                      {/* Your Delete Form Goes Here  It's incomplete we will fix below*/}
                      <form action={`/pokemons/${pokemon._id}?_method=DELETE`} method="POST">
                          <input type="submit" value="DELETE"/>
                      </form>
                      <a href={`/pokemons/${pokemon._id}/edit`}>Edit This pokemon</a>
                  </li>
              })}
        </ul>
      </DefaultLayout>
    )
  }
}

module.exports = Index;