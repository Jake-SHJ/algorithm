// Longest Uncommon Subsequence I

// Given two strings a and b, return the length of the longest uncommon subsequence between a and b.
// If the longest uncommon subsequence does not exist, return -1.
// An uncommon subsequence between two strings is a string that is a subsequence of one but not the other.
// A subsequence of a string s is a string that can be obtained after deleting any number of characters from s.
// For example, "abc" is a subsequence of "aebdc" because you can delete the underlined characters in "aebdc" to get "abc".
// Other subsequences of "aebdc" include "aebdc", "aeb", and "" (empty string).

// Example:
// Input: a = "aba", b = "cdc"
// Output: 3
// Explanation: One longest uncommon subsequence is "aba" because "aba" is a subsequence of "aba" but not "cdc".
// Note that "cdc" is also a longest uncommon subsequence.

// 주어진 두 문자열에서 가장 긴 상대 문자열에 포함되지 않는 서브시퀀스를 반환하는 문제

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function (a, b) {
  // 같으면 -1
  if (a === b) return -1;
  // 다르면 가장 긴 문자열
  return Math.max(a.length, b.length);
};

// 왜 비추 폭탄인지 알것 같은 문제
