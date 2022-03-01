// Largest Number At Least Twice of Others

// You are given an integer array nums where the largest integer is unique.
// Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is,
// return the index of the largest element, or return -1 otherwise.

// Example:
// Input: nums = [3,6,1,0]
// Output: 1
// Explanation: 6 is the largest integer.
// For every other number in the array x, 6 is at least twice as big as x.
// The index of value 6 is 1, so we return 1.

// 주어진 배열에서 가장 큰 수가 다른 수들에 비해 2배 이상 큰 경우 그 수의 인덱스를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  // 1개면 무조건 통과
  if (nums.length === 1) return 0;
  const max = Math.max(...nums);
  const maxIdx = nums.indexOf(max);
  // 가장 큰 수 배열에서 제거
  nums.splice(maxIdx, 1);
  // 다음으로 큰 수
  const newMax = Math.max(...nums);
  // 가장 큰 수와 다음으로 큰 수 비교
  return max >= newMax * 2 ? maxIdx : -1;
};
