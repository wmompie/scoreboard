import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Scoreboard</h1>
          <span className="stats">Players: 1</span>
        </header>
      </div>
    );
  }
}

export default Header;