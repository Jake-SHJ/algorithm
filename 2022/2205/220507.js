// Count Substrings That Differ by One Character

// Given two strings s and t, find the number of ways you can choose a non-empty substring of s
// and replace a single character by a different character such that the resulting substring is a substring of t.
// In other words, find the number of substrings in s that differ from some substring in t by exactly one character.
// For example, the underlined substrings in "computer" and "computation" only differ by the 'e'/'a', so this is a valid way.
// Return the number of substrings that satisfy the condition above.
// A substring is a contiguous sequence of characters within a string.

// Example:
// Input: s = "aba", t = "baba"
// Output: 6
// Explanation: The following are the pairs of substrings from s and t that differ by exactly 1 character:
// ("aba", "baba")
// ("aba", "baba")
// ("aba", "baba")
// ("aba", "baba")
// ("aba", "baba")
// ("aba", "baba")
// The underlined portions are the substrings that are chosen from s and t.

// 주어진 두 문자열의 substring이 한글자만 다른 모든 경우의 수를 반환하는 문제

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function (s, t) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      let diff = 0,
        x = i,
        y = j;
      while (x < s.length && y < t.length) {
        if (s[x] !== t[y]) diff++;
        if (diff === 1) result++;
        if (diff > 1) break;
        x++;
        y++;
      }
    }
  }
  return result;
};
// discuss 참조
