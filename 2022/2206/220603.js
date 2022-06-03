// Count Sub Islands

// You are given two m x n binary matrices grid1 and grid2 containing only 0's (representing water) and 1's (representing land). 
// An island is a group of 1's connected 4-directionally (horizontal or vertical). 
// Any cells outside of the grid are considered water cells.
// An island in grid2 is considered a sub-island if there is an island in grid1 that contains all the cells that make up this island in grid2.
// Return the number of islands in grid2 that are considered sub-islands.

// Example:
// Input: grid1 = [[1,1,1,0,0],[0,1,1,1,1],[0,0,0,0,0],[1,0,0,0,0],[1,1,0,1,1]], 
//   grid2 = [[1,1,1,0,0],[0,0,1,1,1],[0,1,0,0,0],[1,0,1,1,0],[0,1,0,1,0]]
// Output: 3
// Explanation: In the picture above, the grid on the left is grid1 and the grid on the right is grid2.
// The 1s colored red in grid2 are those considered to be part of a sub-island. There are three sub-islands.

// 주어진 이차원 배열 2가지에서 grid2에 있는 섬이 온전히 grid1에 존재하는 경우를 반환하는 문제

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */


var countSubIslands = function(grid1, grid2) {
  let row = grid2.length, col = grid2[0].length, bool, count = 0;
  // 전체 섬의 존재 여부 확인을 위한 재귀 함수
  const island = (i, j) => {
    if (i < 0 || j < 0 || i === row || j === col || grid2[i][j] === 0) return;
    grid2[i][j] = 0;
    if (grid1[i][j] === 0) bool = false;
    island(i + 1, j);
    island(i - 1, j);
    island(i, j + 1);
    island(i, j - 1);
  }
  // grid2 전체를 순회
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid2[i][j] === 1) {
          bool = true;
          island(i, j);
          if (bool) count++;
      }
    }
  }
  return count;
};

// discuss 참조
