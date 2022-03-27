// Valid Boomerang

// Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.
// A boomerang is a set of three points that are all distinct and not in a straight line.

// Example:
// Input: points = [[1,1],[2,3],[3,2]]
// Output: true

// 주어진 배열에서 각 지점의 기울기가 일직선이 안되는지의 여부를 반환하는 문제 (일직선이 안될 때 true)

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  const [[x1, y1], [x2, y2], [x3, y3]] = points;

  if (
    // 동일한 점이 찍혀있으면 false
    (x1 === x2 && y1 === y2) ||
    (x2 === x3 && y2 === y3) ||
    (x1 === x3 && y1 === y3) ||
    // x나 y가 모두 동일하면 일직선이므로 false
    (x1 === x2 && x1 === x3) ||
    (y1 === y2 && y2 === y3)
  )
    return false;
  // 두 점 사이의 기울기
  const inclination1 = (y2 - y1) / (x2 - x1);
  const inclination2 = (y3 - y2) / (x3 - x2);
  // 기울기가 다르면 true
  return inclination1 !== inclination2;
};
