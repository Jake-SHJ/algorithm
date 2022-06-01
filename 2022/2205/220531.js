// Minimum Falling Path Sum

// Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.
// A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. 
// Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

// Example:
// Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
// Output: 13
// Explanation: There are two falling paths with a minimum sum as shown.

// 주어진 이차원 배열에서 떨어지는 경로의 숫자의 합이 가장 작은 경우를 반환하는 문제

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (j === 0) {
        matrix[i][j] = matrix[i][j] + Math.min(matrix[i - 1][j], matrix[i - 1][j  + 1]);
      } else if (j === matrix.length - 1) {
        matrix[i][j] = matrix[i][j] + Math.min(matrix[i - 1][j], matrix[i - 1][j - 1]);
      } else {
        matrix[i][j] = matrix[i][j] + Math.min(matrix[i - 1][j], matrix[i - 1][j - 1], matrix[i - 1][j  + 1]);
      }
    }
  }

  return Math.min(...matrix[matrix.length - 1]);
};
// discuss 참조, 위에서부터 더한 모든 값을 찾고 그 중 작은 값을 찾으려 했으나 잘 안됨
// 밑에서 위 row 값 중 작은 값을 찾는 방식으로 풀어내었음
