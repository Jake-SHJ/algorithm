// Shift 2D Grid

// Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.
// In one shift operation:
// Element at grid[i][j] moves to grid[i][j + 1].
// Element at grid[i][n - 1] moves to grid[i + 1][0].
// Element at grid[m - 1][n - 1] moves to grid[0][0].
// Return the 2D grid after applying shift operation k times.

// Example:
// Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
// Output: [[9,1,2],[3,4,5],[6,7,8]]

// 주어진 2차원 배열을 k만큼 요소를 이동시켰을 때의 배열을 반환하는 문제

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  let arr = grid.flat(),
    len = grid[0].length,
    result = [];

  while (k--) {
    arr.unshift(arr.pop());
  }

  while (arr.length) {
    result.push(arr.splice(0, len));
  }

  return result;
};
// discuss 참조, 2차원 배열을 그대로 유지하려고 해서 문제를 너무 어렵게 해결하려고 했음
// 발상의 전환이 필요..
