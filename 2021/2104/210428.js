// Single Number III

// Given an integer array nums, in which exactly two elements appear only once and all the other elements appear exactly twice.
// Find the two elements that appear only once. You can return the answer in any order.
// Follow up: Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?

// Example:
// Input: nums = [1,2,1,3,2,5]
// Output: [3,5]
// Explanation:  [5, 3] is also a valid answer.

// 주어진 배열에서 중복된 수가 아닌 2개의 수를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const result = new Set();
  for (let i = 0; i < nums.length; i++) {
    result.has(nums[i]) ? result.delete(nums[i]) : result.add(nums[i]);
  }
  return Array.from(result);
};

// 풀면서도 뭔가 내가 생각못한 조건이 더 있을 것이다라고 풀었는데, 한번에 통과해서 황당한 문제
// 선형 시간 복잡도로 동작하도록 하라해서 그냥 1번 순회하도록 풀었음
