// Create Target Array in the Given Order

// Given two arrays of integers nums and index. Your task is to create target array under the following rules:
//  - Initially target array is empty.
//  - From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
//  - Repeat the previous step until there are no elements to read in nums and index.
// Return the target array.
// It is guaranteed that the insertion operations will be valid.

// Example:
// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]

// 주어진 nums의 순서를 index 배열을 기준으로 하는 배열을 반환하는 문제

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
  let result = [];

  for (let i = 0; i < index.length; i++) {
    result.splice(index[i], 0, nums[i]);
  }

  return result;
};
// splice 메서드를 통해 배열에 특정 index에 요소를 추가하는 방법을 활용
