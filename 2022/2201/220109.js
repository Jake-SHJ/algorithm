// Degree of an Array

// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

// Example:
// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation:
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.

// 주어진 배열에서 가장 높은 빈도수를 가진 숫자를 포함한 subarray 중에서 가장 짧은 길이를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const map = new Map();
  let degree = 0;
  let result = Infinity;
  // 각 숫자의 인데스와 가장 높은 빈도수를 저장
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], map.get(nums[i]) ? [...map.get(nums[i]), i] : [i]);
    if (map.get(nums[i]).length > degree) degree = map.get(nums[i]).length;
  }
  // 가장 높은 빈도수를 가진 숫자들의 가장 작은 인덱스와 가장 큰 인덱스 사이의 길이 중 가장 작은 길이를 반환
  for (const [key, val] of map) {
    if (val.length === degree) {
      const length = val[val.length - 1] - val[0] + 1;
      if (length < result) result = length;
    }
  }
  return result;
};
