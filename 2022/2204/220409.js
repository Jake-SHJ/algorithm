// Queries on Number of Points Inside a Circle

// You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane.
// Multiple points can have the same coordinates.
// You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj.
// For each query queries[j], compute the number of points inside the jth circle.
// Points on the border of the circle are considered inside.
// Return an array answer, where answer[j] is the answer to the jth query.

// Example:
// Input: points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]
// Output: [3,2,2]
// Explanation: The points and circles are shown above.
// queries[0] is the green circle, queries[1] is the red circle, and queries[2] is the blue circle.

// 주어진 [x, y, r]의 원 중심 좌표와 반지름의 원에 points가 내부에 몇개 존재하는지 반환하는 문제

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  let result = [];
  for (const [x, y, r] of queries) {
    let count = 0;
    for (const [a, b] of points) {
      // (x - a) ^ 2 + (y - b) ^ 2 <= r ^ 2 이면 반지름 내에 존재
      count += (x - a) * (x - a) + (y - b) * (y - b) <= r * r ? 1 : 0;
    }
    result.push(count);
  }
  return result;
};
// discuss 참조
