// Spiral Matrix II

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Example:
// Input: n = 3
// Output: [[1,2,3],[8,9,4],[7,6,5]]

// n x n의 배열에서 spiral order 형식의 배열을 반환하는 문제

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let count = 0,
    size = n ** 2,
    left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;

  while (count < size) {
    for (let i = left; i <= right; i++) {
      count++;
      res[top][i] = count;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      count++;
      res[i][right] = count;
    }
    right--;

    for (let i = right; i >= left; i--) {
      count++;
      res[bottom][i] = count;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      count++;
      res[i][left] = count;
    }
    left++;
  }

  return res;
};
// discuss 참조
