//  Sum of Digits of String After Convert

// You are given a string s consisting of lowercase English letters, and an integer k.
// First, convert s into an integer by replacing each letter with its position in the alphabet (i.e., replace 'a' with 1, 'b' with 2, ..., 'z' with 26).
// Then, transform the integer by replacing it with the sum of its digits. Repeat the transform operation k times in total.
// For example, if s = "zbax" and k = 2, then the resulting integer would be 8 by the following operations:
// Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
// Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
// Transform #2: 17 ➝ 1 + 7 ➝ 8
// Return the resulting integer after performing the operations described above.

// Example:
// Input: s = "iiii", k = 1
// Output: 36
// Explanation: The operations are as follows:
// - Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
// - Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
// Thus the resulting integer is 36.

// 주어진 문자열을 숫자로 바꾸고 k만큼 자릿수를 더하는 것을 반복했을 때 최종으로 나오는 결과값을 반환하는 문제

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let nums = "";
  for (const char of s) {
    const code = char.charCodeAt() - 96;
    nums += code;
  }

  while (k--) {
    let temp = 0;
    for (const num of nums) {
      temp += Number(num);
    }
    nums = String(temp);
  }

  return Number(nums);
};
