// Majority Element

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example:
// Input: nums = [3,2,3]
// Output: 3

// 주어진 배열에서 배열의 길이의 절반보다 많이 존재하는 요소를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const std = nums.length / 2;
  let map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
    if (map.get(num) > std) {
      // 문제에서 무조건 majority element는 존재한다고 했으므로 여기서 반환해도 문제없음
      return num;
    }
  }
};
