// Replace All Digits with Characters

// You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.
// There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.
// For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
// For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).
// Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

// Example:
// Input: s = "a1c1e1"
// Output: "abcdef"
// Explanation: The digits are replaced as follows:
// - s[1] -> shift('a',1) = 'b'
// - s[3] -> shift('c',1) = 'd'
// - s[5] -> shift('e',1) = 'f'

// 주어진 문자열에서 정해진 shift 규칙에 따라 문자열을 변환하여 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let result = "";

  for (let i = 0; i < s.length; i++) {
    i % 2 === 0
      ? (result += s[i])
      : (result += String.fromCharCode(s[i - 1].charCodeAt() + Number(s[i])));
  }

  return result;
};

// 문자열을 순회하면서 인덱스 기준 홀수번일 경우, shift 규칙을 적용하여 문자열을 완성시킴
