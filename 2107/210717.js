// Number of Steps to Reduce a Number to Zero

// Given a non-negative integer num, return the number of steps to reduce it to zero.
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

// Example:
// Input: num = 14
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.

// 주어진 수를 0까지 만드는 단계수를 반환하는 문제

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let result = 0;

  while (num > 0) {
    num % 2 === 0 ? (num /= 2) : (num -= 1);
    result += 1;
  }

  return result;
};
