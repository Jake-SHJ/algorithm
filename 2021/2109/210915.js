// Remove All Adjacent Duplicates In String

// You are given a string s consisting of lowercase English letters.
// A duplicate removal consists of choosing two adjacent and equal letters and removing them.
// We repeatedly make duplicate removals on s until we no longer can.
// Return the final string after all such duplicate removals have been made.
// It can be proven that the answer is unique.

// Example:
// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal,
// and this is the only possible move.
// The result of this move is that the string is "aaca",
// of which only "aa" is possible, so the final string is "ca".

// 주어진 문자열에서 인접한 문자가 같은 문자일 경우 해당 문자들을 제외한 나머지 문자를 반환하는 문제

/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (result[result.length - 1] === s[i]) {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }

  return result.join("");
};
// 문제를 잘 이해하고 풀것. (인접한 문자열)
