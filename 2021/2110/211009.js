// Available Captures for Rook

// On an 8 x 8 chessboard, there is exactly one white rook 'R' and some number of white bishops 'B', black pawns 'p', and empty squares '.'.
// When the rook moves, it chooses one of four cardinal directions (north, east, south, or west),
// then moves in that direction until it chooses to stop, reaches the edge of the board, captures a black pawn,
// or is blocked by a white bishop. A rook is considered attacking a pawn if the rook can capture the pawn on the rook's turn.
// The number of available captures for the white rook is the number of pawns that the rook is attacking.
// Return the number of available captures for the white rook.

// Example:
// Input: board = [
//     [".",".",".",".",".",".",".","."],
//     [".",".",".","p",".",".",".","."],
//     [".",".",".","R",".",".",".","p"],
//     [".",".",".",".",".",".",".","."],
//     [".",".",".",".",".",".",".","."],
//     [".",".",".","p",".",".",".","."],
//     [".",".",".",".",".",".",".","."],
//     [".",".",".",".",".",".",".","."]
// ]
// Output: 3
// Explanation: In this example, the rook is attacking all the pawns.

// 주어진 이차원 배열에서 룩이 잡을 수 있는 폰의 개수를 반환하는 문제

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  const rook = [];
  let result = 0;

  // 룩 위치 확인
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === "R") {
        rook.push(i, j);
      }
    }
  }

  // 위, 아래, 왼쪽, 오른쪽 순으로 순회로 확인, 같은 팀 비숍이 있으면 바로 break
  for (let i = rook[0]; i > -1; i--) {
    if (board[i][rook[1]] === "B") break;
    if (board[i][rook[1]] === "p") {
      result++;
      break;
    }
  }

  for (let i = rook[0]; i < 8; i++) {
    if (board[i][rook[1]] === "B") break;
    if (board[i][rook[1]] === "p") {
      result++;
      break;
    }
  }

  for (let i = rook[1]; i > -1; i--) {
    if (board[rook[0]][i] === "B") break;
    if (board[rook[0]][i] === "p") {
      result++;
      break;
    }
  }

  for (let i = rook[1]; i < 8; i++) {
    if (board[rook[0]][i] === "B") break;
    if (board[rook[0]][i] === "p") {
      result++;
      break;
    }
  }

  return result;
};
