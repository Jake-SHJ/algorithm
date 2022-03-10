// Rectangle Overlap

// An axis-aligned rectangle is represented as a list [x1, y1, x2, y2],
// where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner.
// Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.
// Two rectangles overlap if the area of their intersection is positive.
// To be clear, two rectangles that only touch at the corner or edges do not overlap.
// Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.

// Example:
// Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
// Output: true

// 주어진 두 배열의 좌표가 서로 겹치는지 여부를 반환하는 문제

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  const [ax1, ay1, ax2, ay2] = rec1;
  const [bx1, by1, bx2, by2] = rec2;

  return ax1 < bx2 && ax2 > bx1 && ay1 < by2 && ay2 > by1;
};
// discuss 참조
