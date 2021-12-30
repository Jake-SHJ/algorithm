// Substrings of Size Three with Distinct Characters

// A string is good if there are no repeated characters.
// Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.
// Note that if there are multiple occurrences of the same substring, every occurrence should be counted.
// A substring is a contiguous sequence of characters in a string.

// Example:
// Input: s = "xyzzaz"
// Output: 1
// Explanation: There are 4 substrings of size 3: "xyz", "yzz", "zza", and "zaz".
// The only good substring of length 3 is "xyz".

// 주어진 문자열의 3가지 연속하는 문자가 서로 같지 않은 경우의 총 개수를 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
  if (!s) return 0;
  let result = 0;
  for (let i = 0; i < s.length - 2; i++) {
    const set = new Set([s[i], s[i + 1], s[i + 2]]);
    if (set.size === 3) result++;
    continue;
  }
  return result;
};
// set에 밀어넣고 길이를 구하면 동등여부를 쉽게 알수있음
