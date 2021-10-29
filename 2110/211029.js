// Special Positions in a Binary Matrix

// Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.
// A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

// Example:
// Input: mat = [[1,0,0],
//               [0,0,1],
//               [1,0,0]]
// Output: 1
// Explanation: (1,2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.

// 주어진 2차원 배열에서 x, y 축으로 겹치는 요소가 없는 요소의 갯수를 반환하는 문제

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
  var result = 0;
  const rowSum = Array(mat.length).fill(0);
  const colSum = Array(mat[0].length).fill(0);

  for (i = 0; i < mat.length; i++) {
    rowSum[i] = mat[i].reduce((a, b) => a + b, 0); // 행 전체의 합
    for (j = 0; j < mat[i].length; j++) {
      colSum[j] += mat[i][j]; // 열 전체 합
    }
  }

  for (i = 0; i < mat.length; i++) {
    for (j = 0; j < mat[i].length; j++) {
      // 해당 요소가  1이고 행,열의 각각의 합이 1인 경우
      if (mat[i][j] == 1 && rowSum[i] === 1 && colSum[j] === 1) {
        result++;
      }
    }
  }
  return result;
};

// discuss 참조
