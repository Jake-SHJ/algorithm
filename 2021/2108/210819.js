// Count Negative Numbers in a Sorted Matrix

// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

// Example:
// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

// 주어진 2차 배열에서 음수의 갯수를 반환하는 문제

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  return grid.flat().filter((el) => el < 0).length;
};
// 한 줄로 빠르게 정리

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let result = 0;
  const flat = [].concat(...grid);
  for (let i = 0; i < flat.length; i++) {
    if (flat[i] < 0) {
      result += 1;
    } else {
      continue;
    }
  }
  return result;
};
// 성능 중시
