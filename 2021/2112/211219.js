// Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Example:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
// 2 is the missing number in the range since it does not appear in nums.

// 주어진 배열에서 순서 상 없는 숫자를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const result = new Array(nums.length + 1).fill(-1);

  for (const num of nums) {
    result[num] = num;
  }

  return result.indexOf(-1);
};
