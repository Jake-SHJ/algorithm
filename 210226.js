// Length of Last Word

// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
// A word is a maximal substring consisting of non-space characters only.

// Example:
// Input: s = "Hello World"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const splitFilteredWords = s.split(" ").filter((word) => word !== "");
  if (splitFilteredWords.length === 0) return 0;
  return splitFilteredWords[splitFilteredWords.length - 1].length;
};

// 두 번만에 통과, " "가 input으로 오면 length에서 Runtime Error 발생, splitFilteredWords[-1]의 length는 존재하지 않기 때문
// splitFilteredWords의 길이가 0 인 경우 먼저 return 처리
