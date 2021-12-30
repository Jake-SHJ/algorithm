// Robot Return to Origin

// There is a robot starting at the position (0, 0), the origin, on a 2D plane.
// Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
// You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move.
// Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).
// Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.
// Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc.
// Also, assume that the magnitude of the robot's movement is the same for each move.

// Example:
// Input: moves = "UD"
// Output: true
// Explanation: The robot moves up once, and then down once.
// All moves have the same magnitude, so it ended up at the origin where it started.
// Therefore, we return true.

// 주어진 문자열에 따라 움직이는 로봇이 원점으로 돌아오는지 여부를 반환하는 문제

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let x = 0,
    y = 0;

  for (const move of moves) {
    switch (move) {
      case "U":
        y++;
        break;
      case "D":
        y--;
        break;
      case "R":
        x++;
        break;
      case "L":
        x--;
        break;
    }
  }

  return y === 0 && x === 0;
};
// 가로축과 세로축을 구분해서 저장할 것
