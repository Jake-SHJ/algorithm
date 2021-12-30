// Minimum Operations to Make the Array Increasing

// You are given an integer array nums (0-indexed).
// In one operation, you can choose an element of the array and increment it by 1.
// For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].
// Return the minimum number of operations needed to make nums strictly increasing.
// An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1.
// An array of length 1 is trivially strictly increasing.

// Example:
// Input: nums = [1,1,1]
// Output: 3
// Explanation: You can do the following operations:
// 1) Increment nums[2], so nums becomes [1,1,2].
// 2) Increment nums[1], so nums becomes [1,2,2].
// 3) Increment nums[2], so nums becomes [1,2,3].

// 주어진 배열이 다음 요소가 이전 요소보다 무조건 큰 수가 되는 최소한의 덧셈 횟수를 구하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let result = 0;

  // 요소가 1개면 볼필요 없음
  if (nums.length === 1) return 0;

  for (let i = 1; i < nums.length; i++) {
    // 이전요소보다 작으면 해당 요소보다 1이 크도록 만들어줌
    if (nums[i] <= nums[i - 1]) {
      result += nums[i - 1] - nums[i] + 1;
      nums[i] = nums[i - 1] + 1;
    }
  }

  return result;
};
