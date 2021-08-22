// N-Repeated Element in Size 2N Array

// You are given an integer array nums with the following properties:
//  - nums.length == 2 * n.
//  - nums contains n + 1 unique elements.
//  - Exactly one element of nums is repeated n times.
// Return the element that is repeated n times.

// Example:
// Input: nums = [1,2,3,3]
// Output: 3

// 주어진 규칙에 맞는 요소를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const map = new Map();
  const n = nums.length / 2;
  let result;

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  map.forEach((v, k) => {
    if (v === n) return (result = k);
  });

  return result;
};
// 규칙에 대해 조금 엄격하게 맞추다보니 어렵게 된 경우

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
  const set = new Set();

  for (const n of nums) {
    if (set.has(n)) return n;
    set.add(n);
  }

  return -1;
};
// 사실 unique 하지 않은 요소가 답임
