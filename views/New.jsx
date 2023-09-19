const React = require('react');

class New extends React.Component {
  render() {
   

    return (
        <div>
            <h1>New pokee page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/pokemons" method="POST">
              Name: <input type="text" name="name" /><br/>
              Color: <input type="text" name="color" /><br/>
              Is it Poke Found: <input type="checkbox" name="Gotta Catch 'Em All" /><br/>
              Image URL: <input type="text" name="img" /><br/>
              <input type="submit" name="" value="Create pokee"/>
            </form>
        </div>);
    }
  }

module.exports = New;