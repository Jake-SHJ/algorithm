// Third Maximum Number

// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example:
// Input: nums = [3,2,1]
// Output: 1
// Explanation:
// The first distinct maximum is 3.
// The second distinct maximum is 2.
// The third distinct maximum is 1.

// 주어진 배열에서 3번째로 가장 큰 수 혹은 3번째로 큰 수가 없는 경우 가장 큰 수를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const set = new Set(nums);
  // 요소가 3개면 가장 작은 수 반환
  if (set.size === 3) return Math.min(...set.values());
  // 3개보다 크면 1,2번째 큰 수 제거
  if (set.size > 3) {
    for (let i = 0; i < 2; i++) {
      set.delete(Math.max(...set.values()));
    }
  }
  // 3개보다 작으면 가장 큰 수 반환 + 1,2번째 제거한 set에서 3번째 큰 수 반환
  return Math.max(...set.values());
};
