// Build Array from Permutation

// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.
// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

// Example:
// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]
// Explanation: The array ans is built as follows:
// ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]
//     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]
//     = [0,1,2,4,5,3]

// 주어진 배열에서 각 요소를 인덱스로 하여 재구성한 배열을 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let result = [];

  for (const num of nums) {
    result.push(nums[num]);
  }

  return result;
};
// 순회를 통해 각 요소(nums)을 인덱스로하여 배열을 재구성

var buildArray = function (nums) {
  return nums.map((num) => nums[num]);
};
// map을 통해 더 쉽고 간단하게 구현이 가능
