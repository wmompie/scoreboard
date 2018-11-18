import React, {Component} from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <Stats />
          <h1>Scoreboard</h1>
          <Stopwatch />
        </header>
      </div>
    );
  }
}

export default Header;