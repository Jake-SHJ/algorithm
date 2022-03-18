// Ugly Number

// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.

// Example:
// Input: n = 6
// Output: true
// Explanation: 6 = 2 × 3

// 주어진 숫자가 2, 3, 5로 소인수분해가 되는지 여부를 반환하는 문제

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n === 1) return true;
  if (n === 0) return false;

  const helper = (num) => {
    // 나누어 떨어지는 경우
    if (num % 2 === 0) return helper(num / 2);
    if (num % 3 === 0) return helper(num / 3);
    if (num % 5 === 0) return helper(num / 5);
    // 끝까지 나누어 떨어지면 1이므로 true;
    if (num === 1) return true;
    // 그 외는 false;
    return false;
  };
  // 재귀 호출 및 반환
  return helper(n);
};
