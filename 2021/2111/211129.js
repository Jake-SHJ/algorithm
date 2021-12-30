// Binary Number with Alternating Bits

// Given a positive integer, check whether it has alternating bits:
// namely, if two adjacent bits will always have different values.

// Example:
// Input: n = 5
// Output: true
// Explanation: The binary representation of 5 is: 101

// 주어진 수를 이진수로 변환하고 그 수가 1과 0이 교차되는 수인지 반환하는 문제

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  // 이진수 변환
  let binary = n.toString(2).split("");
  // 0,1 교차되는지 확인
  return binary.every((el, idx) => el !== binary[idx - 1]);
};
