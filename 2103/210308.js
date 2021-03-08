// Widest Vertical Area Between Two Points Containing No Points

// Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.
// A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.
// Note that points on the edge of a vertical area are not considered included in the area.

// Example:
// Input: points = [[8,7],[9,9],[7,4],[9,7]]
// Output: 1
// Explanation: Both the red and the blue area are optimal.

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let xPoints = [];
  let widths = [];
  points
    .sort((a, b) => a[0] - b[0])
    .map((arr) => {
      xPoints.push(arr[0]);
    });
  for (let i = 0; i < xPoints.length; i++) {
    if (xPoints[i + 1]) {
      widths.push(Math.abs(xPoints[i] - xPoints[i + 1]));
    }
  }
  return Math.max(...widths);
};

// 처음엔 문제를 이해를 못해서 해맸음
// 사실 문제는 각 포인트 사이의 거리가 가장 큰 거리를 도출하는 것, 즉 x point 사이의 거리 중 가장 큰 값을 구하는 것이다.
// 처음엔 xPoint를 따로 저장하고, 이후 다시 순회를 돌려서 각 xPoint 사이의 거리인 width를 구하고 그 중 가장 큰 값을 찾도록 접근

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let widths = [];
  points
    .sort((a, b) => a[0] - b[0])
    .map((point, idx, arr) => {
      if (idx !== points.length - 1) {
        widths.push(Math.abs(arr[idx][0] - arr[idx + 1][0]));
      }
    });
  return Math.max(...widths);
};

// 메모리 효율을 높이기 위해 xPoint를 따로 저장하지 않고 map으로 순회할 때 한번에 width를 구하도록 수정하였다.
// 속도나 메모리 측면에서 중간정도로 올라왔음

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  points.sort((a, b) => a[0] - b[0]);
  let max = points[1][0] - points[0][0];
  for (let i = 1; i < points.length - 1; i++) {
    max = Math.max(max, points[i + 1][0] - points[i][0]);
  }
  return max;
};
// discuss 참고, abs를 쓰지않고 뒤에서 앞을 빼는 방식으로 계산, 순회 안에서 max 값을 도출
