// Number of Pairs of Strings With Concatenation Equal to Target

// Given an array of digit strings nums and a digit string target,
// return the number of pairs of indices (i, j) (where i != j)
// such that the concatenation of nums[i] + nums[j] equals target.

// Example:
// Input: nums = ["777","7","77","77"], target = "7777"
// Output: 4
// Explanation: Valid pairs are:
// - (0, 1): "777" + "7"
// - (1, 0): "7" + "777"
// - (2, 3): "77" + "77"
// - (3, 2): "77" + "77"

// 주어진 배열에서 문자열을 서로 연결했을때, target이 되는 쌍의 갯수를 반환하는 문제

/**
 * @param {string[]} nums
 * @param {string} target
 * @return {number}
 */
var numOfPairs = function (nums, target) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        count++;
      }
    }
  }

  return count;
};
