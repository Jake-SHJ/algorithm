// Minimum Difference Between Highest and Lowest of K Scores

// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.
// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.
// Return the minimum possible difference.

// Example:
// Input: nums = [90], k = 1
// Output: 0
// Explanation: There is one way to pick score(s) of one student:
// - [90]. The difference between the highest and lowest score is 90 - 90 = 0.
// The minimum possible difference is 0.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
  if (k === 1) return 0;
  // 오름차순 정렬(내림차순도 상관없음)
  nums.sort((a, b) => a - b);

  let result = Infinity;
  // 정렬된 상태이므로 k범위안의 끝과 끝의 차만 구해서 비교
  for (let i = 0; i < nums.length - k + 1; i++) {
    const diff = nums[i + k - 1] - nums[i];
    if (diff === 0) return 0;
    if (result > diff) {
      result = diff;
      continue;
    }
  }

  return result;
};
