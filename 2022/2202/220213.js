// Longest Continuous Increasing Subsequence

// Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray).
// The subsequence must be strictly increasing.
// A continuous increasing subsequence is defined by two indices l and r (l < r)
// such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].

// Example:
// Input: nums = [1,3,5,4,7]
// Output: 3
// Explanation: The longest continuous increasing subsequence is [1,3,5] with length 3.
// Even though [1,3,5,7] is an increasing subsequence, it is not continuous as elements 5 and 7 are separated by element 4.

// 주어진 배열에서 크기가 증가하는 수열로 정의된 subsequence의 최대 길이를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let result = 0,
    counter = 0;

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];

    if (diff <= 0) {
      result < counter ? (result = counter) : null;
      counter = 0;
      continue;
    }

    if (counter === 0) {
      counter = 2;
    } else {
      counter++;
    }
  }

  if (result < counter) return counter;

  return result ? result : 1;
};
