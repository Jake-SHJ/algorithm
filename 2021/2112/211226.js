// Largest Odd Number in String

// You are given a string num, representing a large integer.
// Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
// A substring is a contiguous sequence of characters within a string.

// Example:
// Input: num = "52"
// Output: "5"
// Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

// 주어진 문자열로 만들수있는 substring 중 가장 큰 홀수를 반환하는 문제

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  // 뒤에서부터 끊으면 가장 큰 수를 빠르게 찾을 수 있음
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] % 2) return num.slice(0, i + 1);
  }
  // 홀수가 없으면 빈 스트링 빈환
  return "";
};
