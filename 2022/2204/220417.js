// Rearrange Array Elements by Sign

// You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.
// You should rearrange the elements of nums such that the modified array follows the given conditions:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.
// Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

// Example:
// Input: nums = [3,1,-2,-5,2,-4]
// Output: [3,-2,1,-5,2,-4]
// Explanation:
// The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
// The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
// Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.

// 주어진 배열을 양수, 음수 순으로 재배열하여 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let result = new Array(nums.length).fill(null);
  let posIdx = 0,
    negIdx = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result[posIdx] = nums[i];
      posIdx += 2;
      continue;
    }

    if (nums[i] < 0) {
      result[negIdx] = nums[i];
      negIdx += 2;
      continue;
    }
  }

  return result;
};
