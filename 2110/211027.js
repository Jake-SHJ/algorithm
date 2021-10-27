// Maximum Ascending Subarray Sum

// Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.
// A subarray is defined as a contiguous sequence of numbers in an array.
// A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.

// Example:
// Input: nums = [10,20,30,5,10,50]
// Output: 65
// Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.

// 주어진 배열에서 연속으로 숫자가 커지는 subarray 중 합이 가장 큰 경우의 합을 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  const subArrs = [[nums[0]]];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      subArrs[subArrs.length - 1].push(nums[i]);
    } else {
      subArrs[subArrs.length] = [nums[i]];
    }
  }

  return Math.max(...subArrs.map((arr) => arr.reduce((acc, cur) => acc + cur)));
};
