// Find Winner on a Tic Tac Toe Game

// Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:
// Players take turns placing characters into empty squares ' '.
// The first player A always places 'X' characters, while the second player B always places 'O' characters.
// 'X' and 'O' characters are always placed into empty squares, never on filled ones.
// The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
// The game also ends if all squares are non-empty.
// No more moves can be played if the game is over.
// Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli].
// return the winner of the game if it exists (A or B).
// In case the game ends in a draw return "Draw".
// If there are still movements to play return "Pending".
// You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.

// Example:
// Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
// Output: "A"
// Explanation: A wins, they always play first.

// 틱택토 게임의 경기 결과를 반환하는 문제

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const arr = new Array(9).fill(null);
  const cases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i];
    arr[move[0] * 3 + move[1]] = i % 2 ? "B" : "A";
  }

  for (let win of cases) {
    const user = arr[win[0]];
    if (user && user === arr[win[1]] && user === arr[win[2]] && user)
      return user;
  }

  return moves.length === 9 ? "Draw" : "Pending";
};
// 주어진 배열을 그대로 사용하려다가 길을 헤맴
// 결국 discuss 참조
// 각 위치를 인덱스 하나로 변경하고, 각 인덱스로 이긴 케이스를 분류하여 찾아내는 방식
