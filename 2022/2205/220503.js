// Spiral Matrix III

// You start at the cell (rStart, cStart) of an rows x cols grid facing east.
// The northwest corner is at the first row and column in the grid, and the southeast corner is at the last row and column.
// You will walk in a clockwise spiral shape to visit every position in this grid.
// Whenever you move outside the grid's boundary, we continue our walk outside the grid (but may return to the grid boundary later.).
// Eventually, we reach all rows * cols spaces of the grid.
// Return an array of coordinates representing the positions of the grid in the order you visited them.

// Example:
// Input: rows = 5, cols = 6, rStart = 1, cStart = 4
// Output: [[1,4],[1,5],[2,5],[2,4],[2,3],[1,3],[0,3],[0,4],[0,5],[3,5],[3,4],[3,3],[3,2],[2,2],[1,2],[0,2],[4,5],[4,4],[4,3],[4,2],[4,1],[3,1],[2,1],[1,1],[0,1],[4,0],[3,0],[2,0],[1,0],[0,0]]

// 주어진 조건들로 나선형의 배열을 반환하는 문제

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  let r = rStart,
    c = cStart,
    results = [];
  results.push([r, c]);
  const walk = (steps, rStep, cStep) => {
    for (let i = 0; i < steps; i++) {
      (r += rStep), (c += cStep);
      if (r >= 0 && c >= 0 && r < rows && c < cols) results.push([r, c]);
    }
  };
  let distance = 1;
  let rDirection = 0,
    cDirection = 1;
  while (results.length < rows * cols) {
    walk(distance, rDirection, cDirection);
    [rDirection, cDirection] = [cDirection, rDirection];
    walk(distance, rDirection, cDirection);
    [rDirection, cDirection] = [-1 * cDirection, -1 * rDirection];
    distance++;
  }
  return results;
};
// discuss 참조, 이제 시간이 모자라기도 하고, 한번에 못푸는 문제가 갈수록 더 많아지는듯..
