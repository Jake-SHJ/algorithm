// Valid Perfect Square

// Given a positive integer num, write a function which returns True if num is a perfect square else False.
// Follow up: Do not use any built-in library function such as sqrt.

// Example:
// Input: num = 16
// Output: true

// sqrt를 쓰지 않고 주어진 수가 완전 제곱수인지 판단하는 문제

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let sum = 0;

  // 1, 4, 9, 16...
  for (let i = 1; i <= num; i += 2) {
    sum += i;
    if (sum === num) return true;
  }

  return false;
};
