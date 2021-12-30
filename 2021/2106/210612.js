// Rotate String

// We are given two strings, s and goal.
// A shift on s consists of taking string s and moving the leftmost character to the rightmost position.
// For example, if s = 'abcde', then it will be 'bcdea' after one shift on s.
// Return true if and only if s can become goal after some number of shifts on s.

// Example:
// Input: s = 'abcde', goal = 'cdeab'
// Output: true

// 주어진 문자열 goal이 s를 순회시키면 나올수 있는 문자열인지 반환하는 문제

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  const idx = goal.indexOf(s[0]);
  const reverseRotateString = goal.slice(idx) + goal.slice(0, idx);
  return s === reverseRotateString;
};

// 중복된 문자열이 나오는 경우 알 수 없음

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  return (goal + goal).indexOf(s) !== -1 && s.length === goal.length;
};

// 문자열의 순회를 물어볼 땐 동일한 문자열을 2개 이어 붙였을 때, 다른 하나의 문자열을 포함하고 있는지 확인하면 됨
