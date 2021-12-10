// Longer Contiguous Segments of Ones than Zeros

// Given a binary string s, return true if the longest contiguous segment of 1's is strictly
// longer than the longest contiguous segment of 0's in s, or return false otherwise.
// For example, in s = "110100010" the longest continuous segment of 1s has length 2,
// and the longest continuous segment of 0s has length 3.
// Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0.
// The same applies if there is no 1's.

// Example:
// Input: s = "1101"
// Output: true
// Explanation:
// The longest contiguous segment of 1s has length 2: "1101"
// The longest contiguous segment of 0s has length 1: "1101"
// The segment of 1s is longer, so return true.

// 주어진 숫자에서 가장 긴 연속된 1이 가장 긴 연속된 0보다 큰지 여부를 반환하는 문제

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  let longestZero = 0,
    longestOne = 0,
    temp = 0,
    prev = null;

  for (let i = 0; i < s.length; i++) {
    if (prev === s[i] || i === 0) {
      temp++;
      prev = s[i];
    } else {
      prev === "0" && temp > longestZero ? (longestZero = temp) : null;
      prev === "1" && temp > longestOne ? (longestOne = temp) : null;
      temp = 1;
      prev = s[i];
    }

    if (i === s.length - 1) {
      prev === "0" && temp > longestZero ? (longestZero = temp) : null;
      prev === "1" && temp > longestOne ? (longestOne = temp) : null;
    }
  }

  return longestOne > longestZero;
};
// 분기 처리가 좀 까다로웠음. 특히, 마지막 요소인 경우
