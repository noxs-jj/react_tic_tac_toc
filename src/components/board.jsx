import React, { Component } from 'react';
import Square from './square'
import vsPlayer from '../services/vsPlayer'
import iaPlayer from '../services/iaPlayer'

class Board extends Component {
  constructor() {
    super();
    this.state = {
      board: Array(9).fill(null),
      nextPlayer: 'X',
      winner: null,
      currentMode: null,
    };
  }

  render() {
    const status = (this.state.winner !== null) ? ("Player: " + this.state.winner + " Win !!!") : ("Next Player: " + this.state.nextPlayer);

    if (this.state.currentMode !== this.props.mode ) {
      this.setState({
        board: Array(9).fill(null),
        nextPlayer: 'X',
        winner: null,
        currentMode: this.props.mode,
      });
    }

    if (this.state.winner !== null) {
        console.log(
            this.state
        );
        console.log("this.props.mode: " + this.props.mode);
        console.log("this.state.currentMode: " + this.state.currentMode);
    }
    return (
      <div className="center text-center">

        Mode: <b>{this.props.mode}</b>
        <br />
        {status}
        <br />
        <br />

        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>

        <div>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>

        <div>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

      </div>
    );
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.board[i]}
        actionOnClick={ () => this.manageClick(i) }
        isCasePlayable={ () => this.isCasePlayable(i) }
      />
    );
  };

  resetCurrentGame(mode) {
    this.setState({
      board: Array(9).fill(null),
      nextPlayer: 'X',
      winner: null,
      currentMode: mode,
    });
  }


  manageClick(caseId) {
    if (this.state.winner !== null) {
      return;
    }
    let newBoard = this.state.board.slice();

    newBoard[caseId] = this.state.nextPlayer;
    if (vsPlayer.isSignWin(newBoard, this.state.nextPlayer) === true ) {
      this.setState({winner: this.state.nextPlayer, board: newBoard});
    } else {
      this.setNextPlayer(this.state.nextPlayer);
      this.setState({board: newBoard});
      if (this.props.mode === 'IA') {
        this.iaPlay(newBoard.slice());
      }
    }
  }

  iaPlay(board) {
    const slotTolay = iaPlayer.playTurn(board);

    if (slotTolay !== null) {
      let iaNewBoard = board.slice();
      iaNewBoard[slotTolay] = 'O';
      this.setNextPlayer('O');
      if (vsPlayer.isSignWin(iaNewBoard, 'O') === true ) {
        this.setState({winner: 'O'});
      }
      this.setState({board: iaNewBoard});
    }
  }

  setNextPlayer(actualePlayer) {
    const next = (actualePlayer === 'X') ? 'O' : 'X';
    this.setState({nextPlayer: next});
  }

  isCasePlayable(caseId) {
    if (this.state.board[caseId] === null) {
      return true;
    }
    return false;
  }
}

export default Board;
