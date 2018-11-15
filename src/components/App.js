import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        <Header />

        {/* Players list */}
        <Player />
      </div>
    );
  }
}

export default App;
