import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.results);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="panel">
          <h1 className="Header">React Wars</h1>

          <ul>
            {this.state.starwarsChars.map((char, key) => (
              <li className="listItem" key={key}>
                <a href="#" className="idLink">
                  <span id="name" className="idSpan">
                    {char.name}
                  </span>
                  <span id="bd" className="idSpan">
                    Born: {char.birth_year}
                  </span>
                  <span id="mf" className="idSpan">
                    {char.gender}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
