// Find Nearest Point That Has the Same X or Y Coordinate

// You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y).
// You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi).
// A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.
// Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location.
// If there are multiple, return the valid point with the smallest index.
// If there are no valid points, return -1.
// The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).

// Example:
// Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
// Output: 2
// Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid.
// Of the valid points, [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a distance of 1.
// [2,4] has the smallest index, so return 2.

// 주어진 좌표에서 허용된 가장 가까운 거리의 point의 index를 반환하는 문제

/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
  const validPointMap = new Map();
  for (let i = 0; i < points.length; i++) {
    // 조건에 만족하는 포인트
    if (points[i][0] === x || points[i][1] === y) {
      // 인덱스와 거리를 저장
      validPointMap.set(
        i,
        Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y)
      );
    }
  }
  // 이미 인덱스 순으로 저장되었으므로 그상태로 거리순으로 정렬
  const sortedMap = [...validPointMap].sort((a, b) => a[1] - b[1]);
  // 배열이 비어있으면 -1, 아니면 최선두 배열요소의 인덱스를 반환
  return sortedMap.length === 0 ? -1 : sortedMap[0][0];
};
