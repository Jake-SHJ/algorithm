// Longest Harmonious Subsequence

// We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
// Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
// A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

// Example:
// Input: nums = [1,3,2,2,5,2,3,7]
// Output: 5
// Explanation: The longest harmonious subsequence is [3,2,2,2,3].

// 주어진 배열에서 가장 큰 수와 가장 작은 수의 차이가 1 나는 subsequence를 만들 때, 가장 긴 subsequence의 길이를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const map = new Map();
  // 차이가 1 이상 나는 숫자들밖에 없으면 0 반환
  let result = [0];
  // 숫자, 개수를 Map에 등록
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  // 단일 숫자면 만들수 없으므로 0
  if (map.size === 1) return 0;
  // 1 차이 나는 모든 길이에 대하여 결과값에 push
  for (const [key, value] of map) {
    if (map.has(key - 1)) {
      result.push(value + map.get(key - 1));
    }

    if (map.has(key + 1)) {
      result.push(value + map.get(key + 1));
    }
  }
  // 결과값 중 가장 큰 값 반환
  return Math.max(...result);
};
