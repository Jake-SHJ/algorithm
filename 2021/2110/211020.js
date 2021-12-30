// Sign of the Product of an Array

// There is a function signFunc(x) that returns:
//   1 if x is positive.
//   -1 if x is negative.
//   0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.
// Return signFunc(product).

// Example:
// Input: nums = [-1,-2,-3,-4,3,2,1]
// Output: 1
// Explanation: The product of all values in the array is 144, and signFunc(144) = 1

// 주어진 배열의 요소들의 곱의 부호를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  if (nums.includes(0)) return 0;
  let negatives = 0;
  for (const num of nums) {
    num < 0 ? negatives++ : null;
  }
  return negatives % 2 === 0 ? 1 : -1;
};
