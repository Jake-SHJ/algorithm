// Matrix Cells in Distance Order

// You are given four integers row, cols, rCenter, and cCenter.
// There is a rows x cols matrix and you are on the cell with the coordinates (rCenter, cCenter).
// Return the coordinates of all cells in the matrix, sorted by their distance from (rCenter, cCenter) from the smallest distance to the largest distance.
// You may return the answer in any order that satisfies this condition.
// The distance between two cells (r1, c1) and (r2, c2) is |r1 - r2| + |c1 - c2|.

// Example:
// Input: rows = 1, cols = 2, rCenter = 0, cCenter = 0
// Output: [[0,0],[0,1]]
// Explanation: The distances from (0, 0) to other cells are: [0,1]

// 주어진 값들을 통해 center 위치로부터 각 거리별로 정렬하여 위치들을 반환하는 문제

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  let temps = [];
  let result = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const distance = Math.abs(rCenter - i) + Math.abs(cCenter - j);
      if (temps[distance] === undefined) temps[distance] = [];
      // distance 별로 묶음으로 인해 정렬이 해결
      temps[distance].push([i, j]);
    }
  }

  for (const temp of temps) {
    result.push(...temp);
  }

  return result;
};
// 문제 이해가 더 어려움, 답안은 discuss 참조
// 왜 바로 result에 저장 안하는지 생각해보니 정렬을 위해서였음
