// Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.

// Example:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// 주어진 배열에서 없는 숫자들을 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    if (nums.indexOf(i + 1) === -1) result.push(i + 1);
    continue;
  }

  return result;
};
// 중복된 순회로 (for 안에 indexOf) 매우 느리지만 통과는 했음

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i]);
    const idx = num - 1;
    nums[idx] = Math.abs(nums[idx]) * -1;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }

  return result;
};
// discuss 참고, 해당 인덱스의 숫자를 음수화 시켜서 찾아내는 방식
// 계속 절대값 처리를 하는 것은 이미 음수화 되어있더라도 다시 음수화 시키기 위함
