import React, {Component} from 'react';

class Counter extends Component {

  state = {
    score: 0
  }

  decrementScore = () => {
    this.setState({
      score: this.state.score - 1
    });
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={this.incrementScore}> + </button>
      </div>
    );
  }
}

export default Counter;