// Concatenation of Array

// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// Example:
// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]

// 주어진 배열을 두 번 반복하는 배열을 반환

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
  return [...nums, ...nums];
};
// spread operator를 사용하면 쉽게 해결이 가능
