import React, {Component} from 'react';
import Counter from './Counter';

class Player extends Component {
  render() {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={ () => this.props.removePlayer(this.props.id)}>✖</button>
          {this.props.name}
        </span>

        <Counter />
      </div>
    );
  }
}

export default Player;