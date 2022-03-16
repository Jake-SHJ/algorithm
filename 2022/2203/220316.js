// Check If It Is a Straight Line

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point.
// Check if these points make a straight line in the XY plane.

// Example:
// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true

// 주어진 배열의 점들을 이었을 때, 직선인지 여부를 반환하는 문제

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  const x = new Set();
  const y = new Set();

  const inclination = new Set();

  for (let i = 0; i < coordinates.length - 1; i++) {
    const [a, b] = coordinates[i];
    const [c, d] = coordinates[i + 1];
    // x값만 set에 주입
    x.add(a).add(c);
    // y값만 set에 주입
    y.add(b).add(d);
    // 기울기를 set에 주입
    inclination.add((b - d) / (c - a));
  }
  // 기울기가 1 or 0 아니면 일정한 기울기인지 반환
  return x.size === 1 || y.size === 1 || inclination.size === 1;
};
