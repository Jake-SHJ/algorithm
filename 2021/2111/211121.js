// Transpose Matrix

// Given a 2D integer array matrix, return the transpose of matrix.
// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// Example:
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[1,4,7],[2,5,8],[3,6,9]]

// 주어진 2차원 배열의 행,열을 바꾼 2차원 배열을 반환하는 문제

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  let result = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result[j] ? result[j].push(matrix[i][j]) : (result[j] = [matrix[i][j]]);
    }
  }

  return result;
};
