// Maximum Difference Between Increasing Elements

// Given a 0-indexed integer array nums of size n, find the maximum difference between nums[i] and nums[j] (i.e., nums[j] - nums[i]),
// such that 0 <= i < j < n and nums[i] < nums[j].
// Return the maximum difference. If no such i and j exists, return -1.

// Example:
// Input: nums = [7,1,5,4]
// Output: 4
// Explanation:
// The maximum difference occurs with i = 1 and j = 2, nums[j] - nums[i] = 5 - 1 = 4.
// Note that with i = 1 and j = 0, the difference nums[j] - nums[i] = 7 - 1 = 6, but i > j, so it is not valid.

// 주어진 배열에서 인덱스가 오름차순이고, 뒷 숫자가 앞 숫자보다 더 클 떄의 가장 큰 차를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let result = -1;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const diff = nums[j] - nums[i];
      if (diff <= 0) continue;
      if (diff > result) result = diff;
    }
  }

  return result;
};
