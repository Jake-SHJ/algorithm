// Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example:
// Input: nums = [2,2,1]
// Output: 1

// 주어진 배열에서 한번만 등장하는 수를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let map = new Map();

  for (const num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.delete(num);
    }
  }

  return [...map.keys()][0];
};
