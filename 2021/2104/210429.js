// Max Area of Island

// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.)
// \You may assume all four edges of the grid are surrounded by water.
// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example:
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

// 주어진 2차원 배열에서 가장 넓은 영역의 1의 갯수를 구하는 문제(상하좌우만 고려한다)

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        let area = findArea(grid, i, j);
        result = Math.max(result, area);
      }
    }
  }
  return result;
};

const findArea = (grid, i, j) => {
  let area = 0;
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[0].length ||
    grid[i][j] === 0
  )
    return 0;
  grid[i][j] = 0;
  area =
    1 +
    findArea(grid, i - 1, j) +
    findArea(grid, i + 1, j) +
    findArea(grid, i, j - 1) +
    findArea(grid, i, j + 1);
  return area;
};

// 순회와 재귀까지는 도달했으나 area를 구하는 것 + result와의 비교 로직을 구현하지 못해서 discuss를 참고했다.
// 아무래도 너무 어렵게 생각한듯 하다.
// 재귀함수 내에 재귀 탈출 조건을 먼저 적고 다른 재귀함수 내에서 다시 이 영역을 호출하지 못하도록(무한 재귀에 빠질 수 있다) 해당 영역을 0으로 바꾸고
// 재귀를 통해 주변 영역의 크기를 더하게 한다.

var maxAreaOfIsland = function (grid) {
  let result = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        let area = findArea(grid, i, j);
        result = Math.max(result, area);
      } else {
        continue;
      }
    }
  }
  return result;
};

// 추가적으로 순회 내부의 if 문에서 else 문으로 continue 처리를 해주니 속도 향상이 되는 것을 확인하였다.
