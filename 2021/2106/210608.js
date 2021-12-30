// Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none)
// of the characters without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// 주어진 문자열 s가 t의 subsequence인지에 대한 여부를 반환하는 문제

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;

  for (j; j < t.length; j++) {
    if (s[i] === t[j]) {
      i++;
    }
  }

  return i === s.length;
};

// 순회 연산에 while을 사용하던 for를 사용하던 크게 차이가 나지 않음
