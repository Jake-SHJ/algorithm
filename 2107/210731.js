// Minimum Time Visiting All Points

// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi].
// Return the minimum time in seconds to visit all the points in the order given by points.
// You can move according to these rules:
// In 1 second, you can either:
// move vertically by one unit,
// move horizontally by one unit, or
// move diagonally sqrt(2) units (in other words, move one unit vertically then one unit horizontally in 1 second).
// You have to visit the points in the same order as they appear in the array.
// You are allowed to pass through points that appear later in the order, but these do not count as visits.

// Example 1:
// Input: points = [[1,1],[3,4],[-1,0]]
// Output: 7
// Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]
// Time from [1,1] to [3,4] = 3 seconds
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds

// 주어진 지점간의 거리(거리 1 = 시간 1이므로)를 구하는 문제

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
  let time = 0;

  for (let i = 1; i < points.length; i++) {
    time += Math.max(
      Math.abs(points[i - 1][0] - points[i][0]),
      Math.abs(points[i - 1][1] - points[i][1])
    );
  }

  return time;
};

// 각 지점의 x, y의 차의 절대값 중 더 큰 수가 지점간 거리로 측정
