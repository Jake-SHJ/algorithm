// Battleships in a Board

// Given an m x n matrix board where each cell is a battleship 'X' or empty '.',
// return the number of the battleships on board.
// Battleships can only be placed horizontally or vertically on board.
// In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column),
// where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).

// Example:
// Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
// Output: 2

// 주어진 배열에서 전함이 총 몇 대 있는지 반환하는 문제

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let result = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        board[i][j] === "X" &&
        board[i][j - 1] !== "X" &&
        (!board[i - 1] || board[i - 1][j] !== "X")
      )
        result++;
    }
  }

  return result;
};
// discuss 참조, 전함을 어떻게 1대로 구분할까에서 고민했는데, 그냥 인접한걸 안세면 그만...
