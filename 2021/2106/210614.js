// Check if All the Integers in a Range Are Covered

// You are given a 2D integer array ranges and two integers left and right.
// Each ranges[i] = [starti, endi] represents an inclusive interval between starti and endi.
// Return true if each integer in the inclusive range [left, right] is covered by at least one interval in ranges.
// Return false otherwise.
// An integer x is covered by an interval ranges[i] = [starti, endi] if starti <= x <= endi.

// Example:
// Input: ranges = [[1,2],[3,4],[5,6]], left = 2, right = 5
// Output: true
// Explanation: Every integer between 2 and 5 is covered:
// - 2 is covered by the first range.
// - 3 and 4 are covered by the second range.
// - 5 is covered by the third range.

// 주어진 범위안에 left to right의 요소가 포함되는지 여부를 반환하는 문제

/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  const map = new Map();

  for (let i = left; i < right + 1; i++) {
    map.set(i, 0);
  }

  for (const r of ranges) {
    for (let i = r[0]; i < r[1] + 1; i++) {
      map.set(i, 1);
    }
  }

  for (let value of map.values()) {
    if (value === 0) return false;
  }

  return true;
};
