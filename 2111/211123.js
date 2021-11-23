// N-th Tribonacci Number

// The Tribonacci sequence Tn is defined as follows:
// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
// Given n, return the value of Tn.

// Example:
// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4

// 규칙에 따라 주어진 n번째의 숫자를 반환하는 문제

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n, t1 = 0, t2 = 1, t3 = 1) {
  // 조기 반환
  if (n === 0) return 0;
  if (n < 3) return 1;
  // 3이 되는 순간 n번째
  if (n === 3) return t1 + t2 + t3;
  // n이 3이 될때까지 재귀
  return tribonacci(n - 1, t2, t3, t1 + t2 + t3);
};
