// Maximum Subarray

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

// 주어진 배열에서 순서대로 더했을 때 나올 수 있는 가장 큰 수를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }

  return Math.max(...nums);
};

// discuss 참고
// 순서대로, 가장 큰 수에 초점을 맞추면 풀 수 있었음
// 더해 나가면서 큰 수를 계속 저장해 나가는 방식
