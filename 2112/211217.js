// Monotonic Array

// An array is monotonic if it is either monotone increasing or monotone decreasing.
// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].
// An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].
// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example:
// Input: nums = [1,2,2,3]
// Output: true

// 주어진 배열이 커지기만 하거나 작아지기만 하는 경우를 판별하여 반환하는 문제

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  // 양, 음 저장
  let tmp;
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i - 1] - nums[i];
    // 차가 0이면 다음
    if (diff === 0) continue;
    // tmp가 정의되지 않은 경우
    if (diff !== 0 && tmp === undefined) {
      diff < 0 ? (tmp = "-") : (tmp = "+");
      continue;
    }
    // tmp와 차가 다를 경우 false
    if (tmp === "+" && diff < 0) return false;
    if (tmp === "-" && diff > 0) return false;
  }
  // 그 외엔 true
  return true;
};
