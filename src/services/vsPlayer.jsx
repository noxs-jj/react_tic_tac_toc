class VsPlayer {
  static isSignWin(board, sign) {
    if (this.checkLines(board, sign) || this.checkColumns(board, sign) || this.checkDiag(board, sign)) {
      return true;
    }

    return false;
  }

  static checkDiag(board, sign) {
    if (board[0] === sign && board[4] === sign && board[8] === sign) {
      return true;
    } else if (board[2] === sign && board[4] === sign && board[6] === sign ) {
      return true;
    }
    return false;
  }

  static checkColumns(board, sign) {
    if (board[0] === sign && board[3] === sign && board[6] === sign) {
      return true;
    } else if (board[1] === sign && board[4] === sign && board[7] === sign) {
      return true;
    } else if (board[2] === sign && board[5] === sign && board[8] === sign) {
      return true;
    } else
    return false;
  }

  static checkLines(board, sign) {
    if (board[0] === sign && board[1] === sign && board[2] === sign) {
      return true;
    } if (board[3] === sign && board[4] === sign && board[5] === sign) {
      return true;
    } if (board[6] === sign && board[7] === sign && board[8] === sign) {
      return true;
    }
    return false;
  }
}

export default VsPlayer;
