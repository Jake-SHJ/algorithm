// Maximum Score After Splitting a String

// Given a string s of zeros and ones, return the maximum score after splitting the string into two non-empty substrings (i.e. left substring and right substring).
// The score after splitting a string is the number of zeros in the left substring plus the number of ones in the right substring.

// Example:
// Input: s = "011101"
// Output: 5
// Explanation:
// All possible ways of splitting s into two non-empty substrings are:
// left = "0" and right = "11101", score = 1 + 4 = 5
// left = "01" and right = "1101", score = 1 + 3 = 4
// left = "011" and right = "101", score = 1 + 2 = 3
// left = "0111" and right = "01", score = 1 + 1 = 2
// left = "01110" and right = "1", score = 2 + 1 = 3

// 주어진 문자열을 둘로 나눴을 때, 왼쪽의 0의 개수와 오른쪽의 1의 개수의 합이 가장 클 때의 합을 반환하는 문제

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let result = 0;
  const arr = s.split("");

  for (let i = 0; i < s.length - 1; i++) {
    // 0의 개수
    const left = arr.slice(0, i + 1).filter((el) => el === "0").length;
    // 1의 개수
    const right = arr.slice(i + 1).filter((el) => el === "1").length;

    if (result < left + right) result = left + right;
  }

  return result;
};
