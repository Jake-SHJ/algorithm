// Reshape the Matrix

// In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.
// You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.
// The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.
// If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Example:
// Input: mat = [[1,2],[3,4]], r = 1, c = 4
// Output: [[1,2,3,4]]

// 주어진 2차원 배열을 r과 c에 맞춰서 형태를 바꾼 2차원 배열을 반환하는 문제

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  let arr = mat.flat();
  if (arr.length !== r * c) return mat;

  let result = [];

  while (r--) {
    result.push(arr.splice(0, c));
  }

  return result;
};
// 어제 문제와 비슷한 유형이라서 쉽게 해결
