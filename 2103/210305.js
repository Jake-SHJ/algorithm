// Max Increase to Keep City Skyline

// In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there.
// We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings).
// Height 0 is considered to be a building as well.

// At the end, the "skyline" when viewed from all four directions of the grid, i.e.
// top, bottom, left, and right, must be the same as the skyline of the original grid.
// A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance.
// See the following example.

// What is the maximum total sum that the height of the buildings can be increased?

// Example:
// Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
// Output: 35
// Explanation:
// The grid is:
// [ [3, 0, 8, 4],
//   [2, 4, 5, 7],
//   [9, 2, 6, 3],
//   [0, 3, 1, 0] ]

// The skyline viewed from top or bottom is: [9, 4, 8, 7]
// The skyline viewed from left or right is: [8, 7, 9, 3]

// The grid after increasing the height of buildings without affecting skylines is:

// gridNew = [ [8, 4, 8, 7],
//             [7, 4, 7, 7],
//             [9, 4, 8, 7],
//             [3, 3, 3, 3] ]

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let lr = [];
  let tb = [];

  for (let i = 0; i < grid.length; i++) {
    let arr = [];
    for (let j = 0; j < grid[0].length; j++) {
      arr.push(grid[i][j]);
    }
    lr.push(Math.max.apply(null, arr));
  }

  for (let j = 0; j < grid[0].length; j++) {
    let arr = [];
    for (let i = 0; i < grid.length; i++) {
      arr.push(grid[i][j]);
    }
    tb.push(Math.max.apply(null, arr));
  }
};

// 시도.. 위아래, 좌우에 대한 최대값 구하는 건 성공 했으나 각 최대값 구하는것에서 막힘

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let lr = [];
  let tb = [];

  for (let i = 0; i < grid.length; i++) {
    let arr = [];
    for (let j = 0; j < grid[0].length; j++) {
      arr.push(grid[i][j]);
    }
    lr.push(Math.max.apply(null, arr));
  }

  for (let j = 0; j < grid[0].length; j++) {
    let arr = [];
    for (let i = 0; i < grid.length; i++) {
      arr.push(grid[i][j]);
    }
    tb.push(Math.max.apply(null, arr));
  }

  let result = 0;
  for (let i = 0; i < lr.length; i++) {
    for (let j = 0; j < tb.length; j++) {
      result += Math.min(lr[i], tb[j]) - grid[i][j];
    }
  }
  return result;
};
// 다른 discuss를 참고하여 완성, 하지만 반복문이 많아서 속도나 메모리 효율이 좋지 않다.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  let colMax = [],
    rowMax = [],
    sum = 0;

  for (var i = 0; i < grid.length; i++) {
    rowMax.push(grid[i].reduce((val, curr) => Math.max(val, curr), 0));

    let clm = 0;
    for (var j = 0; j < grid[i].length; j++) {
      clm = Math.max(clm, grid[j][i]);
    }
    colMax.push(clm);
  }

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid.length; j++) {
      sum += Math.min(rowMax[i], colMax[j]) - grid[i][j];
    }
  }

  return sum;
};
// 다른 풀이, rowMax를 reduce로 빠르게 계산, result 도출은 동일, 하지만 메모리, 속도 면에서 확실히 좋아짐
