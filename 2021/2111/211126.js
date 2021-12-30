// Special Array With X Elements Greater Than or Equal X

// You are given an array nums of non-negative integers.
// nums is considered special if there exists a number x such that there are exactly x numbers in nums that are greater than or equal to x.
// Notice that x does not have to be an element in nums.
// Return x if the array is special, otherwise, return -1. It can be proven that if nums is special, the value for x is unique.

// Example:
// Input: nums = [3,5]
// Output: 2
// Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.

// 주어진 배열에서 특정 수보다 크거나 같은 요소의 개수가 특정 수와 동일할 때, 해당 특정 수를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  // 특정 수는 nums의 요소의 개수를 초과할 수 없다
  for (let i = 0; i < nums.length + 1; i++) {
    // nums 요소 중 특정 수보다 크거나 같은 요소의 개수를 구하고, 같으면 반환
    if (nums.filter((el) => el >= i).length === i) return i;
  }
  // 아니면 -1 반환
  return -1;
};
