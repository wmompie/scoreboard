import React, {Component} from 'react';

class Counter extends Component {

  render() {
    const {
      index,
      changeScore,
      score
    } = this.props;
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
        <span className="counter-score">{score}</span>
        <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
      </div>
    );
  }
}

export default Counter;