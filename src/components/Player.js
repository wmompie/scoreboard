import React, {Component} from 'react';
import Counter from './Counter'

class Player extends Component {
  render() {
    return (
      <div className="player">
        <span className="player-name">
          Will
        </span>

        <Counter />
      </div>
    );
  }
}

export default Player;