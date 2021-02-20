// Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];
  nums.map((num, idx) => {
    let i = idx + 1;
    for (i; i < nums.length; i++) {
      if (num + nums[i] === target) {
        result.push(idx, i);
      }
    }
  });
  return result;
};
// 처음 접근법, 굳이 map을 쓸 필요가 있었을까?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];
  let i = 0;
  while (i < nums.length) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
      }
    }
    if (result.length === 2) break;
    i++;
  }
  return result;
};
// 두번째 접근법, 중간에 순회를 탈출할 수 있으면 더 빠르게 되지 않을까
// 속도면에서도 메모리면에서도 개선 확인
// 내부도 while로 바꿔봤지만 큰 개선은 되지 않음, 오히려 코드 가독성 악화

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j);
        return result;
      }
    }
  }
};
// 생각해보니 바로 result를 리턴하면 쉽게 될 문제였다.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};
// 다른 사람의 솔루션, 속도 개선은 이루어졌으나 메모리 측면에서는 내 솔루션과 차이가 없었다.
