// Perfect Number

// A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself.
// A divisor of an integer x is an integer that can divide x evenly.
// Given an integer n, return true if n is a perfect number, otherwise return false.

// Example:
// Input: num = 28
// Output: true
// Explanation: 28 = 1 + 2 + 4 + 7 + 14
// 1, 2, 4, 7, and 14 are all divisors of 28.

// 주어진 수를 완전히 나눌 수 있는 수들의 합과 주어진 수가 같은지 여부를 반환하는 문제

/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num === 1) return false;

  const arr = [];
  // 나누는 수는 최대가 그 수의 절반 (num 자체는 제외이기 때문)
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) arr.push(i);
  }

  return arr.reduce((acc, cur) => acc + cur) === num;
};
