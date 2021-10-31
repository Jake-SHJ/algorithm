// Find the Middle Index in Array

// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).
// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].
// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.
// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.

// Example:
// Input: nums = [2,3,-1,8,4]
// Output: 3
// Explanation:
// The sum of the numbers before index 3 is: 2 + 3 + -1 = 4
// The sum of the numbers after index 3 is: 4 = 4

// 배열에서 요소의 좌우의 합이 같은 요소의 인덱스를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let leftNums = nums.slice(0, i).reduce((a, b) => a + b, 0);
    let rightNums = nums.slice(i + 1).reduce((a, b) => a + b, 0);
    if (leftNums === rightNums) {
      return i;
    }
  }
  return -1;
};
