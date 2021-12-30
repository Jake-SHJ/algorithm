// Split a String in Balanced Strings

// Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
// Given a balanced string s, split it in the maximum amount of balanced strings.
// Return the maximum amount of split balanced strings.

// Example:
// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

// 주어진 문자열에서 순서대로 같은 개수로 균형이 잡힌 문자열의 개수를 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let r = 0;
  let l = 0;
  let result = 0;

  for (const str of s) {
    if (str === "R") r += 1;
    if (str === "L") l += 1;

    if (r !== 0 && l !== 0 && r === l) {
      r = 0;
      l = 0;
      result += 1;
    }
  }

  return result;
};

var balancedStringSplit = function (s) {
  let balance = 0;
  let result = 0;

  for (const str of s) {
    if (str === "R") balance += 1;
    if (str === "L") balance -= 1;
    if (balance === 0) {
      result += 1;
    }
  }

  return result;
};

// 변수 개수를 줄였는데 오히려 느려지고, 메모리 소모량도 늘어남
// 리트 코드 문제인가..
