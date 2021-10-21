// Toeplitz Matrix

// Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.
// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.

// Example:
// Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
// Output: true
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.

// 주어진 2차원 배열이 Toeplitz가 맞는지 판별하여 반환하는 문제

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  const y = matrix.length - 1;
  const x = matrix[0].length - 1;

  let result = true;

  // 하나 고정해두고 +1, +1 한 값이 모두 동일한지 체크
  for (let i = x - 1; i > -1; i--) {
    const set = new Set();
    set.add(matrix[0][i]);
    let j = 1;
    while (j < y + 1 && j + i < x + 1) {
      set.add(matrix[j][j + i]);
      if (set.size !== 1) {
        return false;
      }
      j++;
    }
  }

  // 고정해두면 확인 불가능한 부분 체크
  for (let i = y - 1; i > 0; i--) {
    const set = new Set();
    set.add(matrix[i][0]);
    let j = 1;
    while (j + i < y + 1 && j < x + 1) {
      set.add(matrix[j + i][j]);
      if (set.size !== 1) {
        return false;
      }
      j++;
    }
  }

  return result;
};
