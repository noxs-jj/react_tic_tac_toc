import vsPlayer from './vsPlayer'

class IaPlayer extends vsPlayer {
  static playTurn(board) {
    const empty_case = this.getListOfemptyCase(board);

    if (empty_case === null) {
      return null;
    }
    return empty_case[Math.floor(Math.random() * empty_case.length)];
  }

  static getListOfemptyCase(board) {
    let result = []

    for (var i = 0, len = board.length; i < len; i++) {
      if (board[i] === null) {
        result.push(i)
      }
    }
    return result;
  }
}

export default IaPlayer;
