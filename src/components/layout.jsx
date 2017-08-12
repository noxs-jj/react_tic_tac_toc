import React, { Component } from 'react';
import Board from './board'

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      mode: null,
    }
  }

  render() {
    let board = null;

    if (this.state.mode !== null) {
      board = this.renderBoard();
    }

    return (
      <div className="container boardWidth">

        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {this.renderGameMenu()}
          </div>
        </div>

        <br />

        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            {board}
          </div>
        </div>
      </div>
    );
  }

  renderGameMenu() {
    let resetButton = null;

    if (this.state.mode !== null) {
      resetButton = this.renderResetButton();
    }

    return (
      <div>
        <button className="btn btn-default btn-lg btnPadding"
          onClick={() => this.setMode('VS')}>
          VS Player
        </button>
        <button className="btn btn-default btn-lg btnPadding"
        onClick={() => this.setMode('IA')}>
          IA Player
        </button>
        {resetButton}
      </div>
    );
  }

  renderResetButton() {
    return (
      <button className="btn btn-warning btn-lg btnPadding"
        onClick={() => this.board.resetCurrentGame(this.state.mode)}>
        Reset Game
      </button>
    );
  }

  renderBoard() {
    return (
      <Board
        ref={instance => { this.board = instance }}
        mode={this.state.mode}
        previousMode={this.state.previousMode}
      />
    );
  }

  setMode(mode) {
    this.setState({mode: mode});
  }
}

export default Layout;
