// Determine Whether Matrix Can Be Obtained By Rotation

// Given two n x n binary matrices mat and target,
// return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.

// Example:
// Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
// Output: true
// Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.

// 주어진 배열을 회전시켰을때 타겟의 형태가 존재하는지 여부를 반환하는 문제

/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function (mat, target) {
  let width = mat[0].length;
  let height = mat.length;

  let normal = true;
  let rightOneTime = true;
  let rightTwoTimes = true;
  let rightThreeTimes = true;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (mat[i][j] !== target[i][j]) {
        normal = false;
      }
      if (mat[i][j] !== target[j][width - 1 - i]) {
        rightOneTime = false;
      }
      if (mat[i][j] !== target[height - 1 - i][width - 1 - j]) {
        rightTwoTimes = false;
      }
      if (mat[i][j] !== target[height - 1 - j][i]) {
        rightThreeTimes = false;
      }
    }
  }
  return normal || rightOneTime || rightTwoTimes || rightThreeTimes;
};
// discuss 참조, 회전을 시키고 어떻게 비교할지 감도 안옴..
