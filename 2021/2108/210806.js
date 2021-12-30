// Matrix Diagonal Sum

// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.

// Example:
// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.

// 주어진 이차원배열에서 대각선 요소들의 합을 구하는 문제

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const last = mat[0].length - 1;
  let result = 0;

  // 한개로만 구성된 경우 해당 요소를 바로 반환
  if (last === 0) return mat[0][0];

  for (let i = 0; i < mat.length; i++) {
    if (i !== last - i) {
      // 대각선상의 요소의 합
      result += mat[i][i] + mat[i][last - i];
      continue;
    } else {
      // 대각선 요소가 겹치는 경우 하나만 더함
      result += mat[i][i];
      continue;
    }
  }

  return result;
};
