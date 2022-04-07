// Remove One Element to Make the Array Strictly Increasing

// Given a 0-indexed integer array nums, return true if it can be made strictly increasing after removing exactly one element, or false otherwise.
// If the array is already strictly increasing, return true.
// The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

// Example:
// Input: nums = [1,2,10,5,7]
// Output: true
// Explanation: By removing 10 at index 2 from nums, it becomes [1,2,5,7].
// [1,2,5,7] is strictly increasing, so return true.

// 주어진 배열에서 요소 하나만 제거했을 때, 오름차순인지 여부를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  // 2개일 때, 오름차순 상관없이 하나 제거하면 1개만 남으므로 무조건 true
  if (nums.length === 2) return true;

  const set = new Set(nums);
  // 같은 요소가 2개 이상 있으면 무조건 false
  if (set.size <= nums.length - 2) return false;

  for (let i = 1; i < nums.length - 1; i++) {
    // 뒷 요소 보다 클때
    if (nums[i] > nums[i + 1]) {
      // 앞뒤로 오름차순이면 i를 제거, 아니면 i + 1을 제거
      nums[i - 1] < nums[i + 1] ? nums.splice(i, 1) : nums.splice(i + 1, 1);
      break;
    }
    // 앞 요소보다 작을 때
    if (nums[i - 1] > nums[i]) {
      // 앞뒤로 오름차순이면 i를 제거, 아니면 i - 1을 제거
      nums[i + 1] > nums[i - 1] ? nums.splice(i, 1) : nums.splice(i - 1, 1);
      break;
    }
  }
  // 배열 깊은 복사 후 정렬
  const temp = nums.slice().sort((a, b) => a - b);
  const tempSet = new Set(temp);
  // 정렬된 값과 배열이 같고, 같은 수가 존재하지 않으면 true
  return (
    JSON.stringify(nums) === JSON.stringify(temp) &&
    temp.length === tempSet.size
  );
};
