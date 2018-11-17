import React, {Component} from 'react';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <Stats players={this.props.players}/>
          <h1>{this.props.title}</h1>
          <Stopwatch />
        </header>
      </div>
    );
  }
}

export default Header;