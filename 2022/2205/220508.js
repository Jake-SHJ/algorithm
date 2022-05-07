// Queens That Can Attack the King

// On an 8x8 chessboard, there can be multiple Black Queens and one White King.
// Given an array of integer coordinates queens that represents the positions of the Black Queens,
// and a pair of coordinates king that represent the position of the White King,
// return the coordinates of all the queens (in any order) that can attack the King.

// Example:
// Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
// Output: [[0,1],[1,0],[3,3]]
// Explanation:
// The queen at [0,1] can attack the king cause they're in the same row.
// The queen at [1,0] can attack the king cause they're in the same column.
// The queen at [3,3] can attack the king cause they're in the same diagnal.
// The queen at [0,4] can't attack the king cause it's blocked by the queen at [0,1].
// The queen at [4,0] can't attack the king cause it's blocked by the queen at [1,0].
// The queen at [2,4] can't attack the king cause it's not in the same row/column/diagnal as the king.

// 체스판 위에서 킹을 공격할 수 있는 퀸의 위치들을 반환하는 문제

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
  let result = [];

  const findAttackable = (currentX, currentY, x, y) => {
    if (currentX < 0 || currentY < 0 || currentX > 7 || currentY > 7)
      return null;

    for (let i = 0; i < queens.length; i++) {
      if (currentX === queens[i][0] && currentY === queens[i][1]) {
        result.push(queens[i]);
        return null;
      }
    }

    findAttackable(currentX + x, currentY + y, x, y);
  };

  findAttackable(king[0], king[1], -1, -1);
  findAttackable(king[0], king[1], -1, 0);
  findAttackable(king[0], king[1], -1, 1);
  findAttackable(king[0], king[1], 0, -1);
  findAttackable(king[0], king[1], 1, -1);
  findAttackable(king[0], king[1], 1, 1);
  findAttackable(king[0], king[1], 1, 0);
  findAttackable(king[0], king[1], 0, 1);

  return result;
};
// discuss 참조
