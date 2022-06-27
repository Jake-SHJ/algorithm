// Path with Maximum Gold

// In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.
// Return the maximum amount of gold you can collect under the conditions:
// Every time you are located in a cell you will collect all the gold in that cell.
// From your position, you can walk one step to the left, right, up, or down.
// You can't visit the same cell more than once.
// Never visit a cell with 0 gold.
// You can start and stop collecting gold from any position in the grid that has some gold.

// Example:
// Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
// Output: 24
// Explanation:
// [[0,6,0],
//  [5,8,7],
//  [0,9,0]]
// Path to get the maximum gold, 9 -> 8 -> 7.

// 주어진 이차원 배열에서 0을 마주치지 않고 경로대로 움직여서 만들 수 있는 최대값을 반환하는 문제

/**
 * @param {number[][]} grid
 * @return {number}
 */
// 경계 조건
const outOfBound = (row, col, m, n) => {
  return row < 0 || col < 0 || row >= m || col >= n;
}

const backtrack = (grid, row, col, m, n) => {
  if (outOfBound(row, col, m, n) || grid[row][col] === 0) return 0;

  let sum = grid[row][col];
  // 이미 온 자리 체크
  grid[row][col] = 0;

  const top = backtrack(grid, row - 1, col, m, n);
  const right = backtrack(grid, row, col + 1, m, n);
  const bottom = backtrack(grid, row + 1, col, m, n);
  const left = backtrack(grid, row, col - 1, m, n);
  
  // 최종 위치에 최대값 저장
  grid[row][col] = sum;
  
  return sum + Math.max(top, right, bottom, left);
}

const getMaximumGold = (grid) => {
  const m = grid.length;
  const n = grid[0].length;
  let max = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] != 0) {
        // 백트래킹 시작
        const sum = backtrack(grid, i, j, m, n);
        // 최대값 도출
        max = Math.max(sum, max);
      }
    }
  }

  return max;
};
// discuss 참조, 이차원 배열 + 백트래킹을 사용
