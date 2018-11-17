import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

class Header extends Component {
  render() {
    const {
      players,
      title
    } = this.props;
    return (
      <div>
        <header>
          <Stats players={players}/>
          <h1>{title}</h1>
          <Stopwatch />
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
};

export default Header;