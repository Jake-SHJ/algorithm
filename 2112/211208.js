// Minimum Distance to the Target Element

// Given an integer array nums (0-indexed) and two integers target and start,
// find an index i such that nums[i] == target and abs(i - start) is minimized.
// Note that abs(x) is the absolute value of x.
// Return abs(i - start).
// It is guaranteed that target exists in nums.

// Example:
// Input: nums = [1,2,3,4,5], target = 5, start = 3
// Output: 1
// Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.

// 주어진 배열에서 start 지점에서 target까지의 최소한의 거리를 반환하는 문제

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function (nums, target, start) {
  let result = [];
  // 시작 지점부터 오른쪽 순회
  for (let i = start; i < nums.length; i++) {
    if (nums[i] === target) {
      result.push(i - start); // return 하면 이 값이 그대로 답으로 반환됨
      break; // break로 탈출
    }
    continue;
  }
  // 시작 지점부터 왼쪽 순회
  for (let i = start; i >= 0; i--) {
    if (nums[i] === target) {
      result.push(start - i);
      break;
    }
    continue;
  }
  // 그 중 작은 값 반환
  return Math.min(...result);
};
