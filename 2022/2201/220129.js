// Check if Every Row and Column Contains All Numbers

// An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).
// Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

// Example:
// Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
// Output: true
// Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
// Hence, we return true.

// 주어진 이차원 배열의 열과 행 내의 요소들이 서로 다른 숫자인지 판단하는 문제

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function (matrix) {
  const n = matrix.length;
  // row check
  for (let i = 0; i < n; i++) {
    const set = new Set(matrix[i]);
    // 중복 체크
    if (set.size !== n) {
      return false;
    }
  }
  // column check
  for (let i = 0; i < n; i++) {
    const col = [];
    for (let j = 0; j < n; j++) {
      col.push(matrix[j][i]);
    }
    const set = new Set(col);
    // 중복 체크
    if (set.size !== n) {
      return false;
    }
  }
  // 체크 통과 시 true 반환
  return true;
};
