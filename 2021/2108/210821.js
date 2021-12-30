// Sum of Digits in Base K

// Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.
// After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.

// Example:
// Input: n = 34, k = 6
// Output: 9
// Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.

// 주어진 숫자를 k진수화 했을 때 각 자릿수의 합을 반환하는 문제

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  return n
    .toString(k)
    .split("")
    .reduce((acc, dig) => acc + Number(dig), 0);
};
// toString(k)를 통해 k진수화 처리 및 split을 용이하게 함
// split 이후 reduce를 통해 각 자리수의 합을 반환
