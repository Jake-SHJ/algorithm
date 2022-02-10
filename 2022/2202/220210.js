// Second Largest Digit in a String

// Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
// An alphanumeric string is a string consisting of lowercase English letters and digits.

// Example:
// Input: s = "dfa12321afd"
// Output: 2
// Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

// 주어진 문자열에 있는 숫자 중 2번째로 큰 숫자를 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  const set = new Set();
  // 숫자만 골라서 set에 넣음
  for (const char of s) {
    const num = Number(char);
    if (!isNaN(num)) {
      set.add(num);
    }
  }
  // 없거나 1개만 있으면 -1 반환
  if (set.size === 0 || set.size === 1) return -1;
  // 있으면 2번째로 큰 수 반환
  return Array.from(set).sort((a, b) => b - a)[1];
};
