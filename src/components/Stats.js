import React, {Component} from 'react';

class Stats extends Component {
  render() {

    const totalPlayers = this.props.players.length;
    const totalPoints = this.props.players.reduce( (total, player) => {
      return total + player.score;
    }, 0);

    return (
      <table className="stats">
        <tbody>
          <tr>
            <td>Players:</td>
            <td>{totalPlayers}</td>
          </tr>
          <tr>
            <td>Total Points:</td>
            <td>{totalPoints}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Stats;