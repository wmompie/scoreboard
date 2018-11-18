import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
// import Icon from './Icon';

class Player extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func,
    isHighScore: PropTypes.bool
  };

  render() {
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore,
      // isHighScore
    } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          {/* <Icon isHighScore={isHighScore} /> */}
          {name}
        </span>

        <Counter
          score={score}
          index={index}
          changeScore={changeScore}  
        />
      </div>
    );
  }
}

export default Player;