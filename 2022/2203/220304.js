// Find Subsequence of Length K With the Largest Sum

// You are given an integer array nums and an integer k.
// You want to find a subsequence of nums of length k that has the largest sum.
// Return any such subsequence as an integer array of length k.
// A subsequence is an array that can be derived from another array by deleting some
// or no elements without changing the order of the remaining elements.

// Example:
// Input: nums = [2,1,3,3], k = 2
// Output: [3,3]
// Explanation:
// The subsequence has the largest sum of 3 + 3 = 6.

// 주어진 배열에서 k 개수만큼 큰 수를 배열로 반환하는 문제, 단, nums를 훼손하지 않고 nums의 순서와 동일할 것

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function (nums, k) {
  const res = [];
  // Math.max로 빠르게 찾는 법이 있지만, nums를 훼손해야하고 순서도 바뀔 수 있음
  // 따라서, 순차적으로 순회하여 값을 바꿔나가는 방식으로 해결
  for (let i = 0; i < nums.length; i++) {
    // k만큼 배열 채우기
    if (res.length < k) {
      res.push(nums[i]);
      continue;
    }
    // 배열 내 가장 작은 수보다 크면, 그 수를 제거하고 큰 수를 push
    const min = Math.min(...res);
    if (min < nums[i]) {
      res.splice(res.indexOf(min), 1);
      res.push(nums[i]);
    }
  }
  return res;
};
