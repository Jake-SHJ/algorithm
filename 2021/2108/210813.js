// Check if All Characters Have Equal Number of Occurrences

// Given a string s, return true if s is a good string, or false otherwise.
// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Example:
// Input: s = "abacbc"
// Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

// 주어진 문자열에서 모든 문자열이 동일한 갯수로 존재하는지 여부를 반환하는 문제

/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {
  const map = new Map();

  //   for (const char of s) {
  //     if (map.has(char)) {
  //       map.set(char, map.get(char) + 1);
  //     } else {
  //       map.set(char, 1);
  //     }
  //   }
  // 위 로직을 아래와 같이 간소화 할 수 있음
  for (const char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  // Array.from(map.values())보다 spread operator 활용이 더 빠른 속도를 나타냄
  const values = [...map.values()];
  return values.every((val) => val === map.get(s[0]));
};
