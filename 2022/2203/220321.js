// Set Mismatch

// You have a set of integers s, which originally contains all the numbers from 1 to n.
// Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set,
// which results in repetition of one number and loss of another number.
// You are given an integer array nums representing the data status of this set after the error.
// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example:
// Input: nums = [1,2,2,4]
// Output: [2,3]

// 주어진 배열에서 중복된 숫자와 빠진 숫자를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const set = new Array(nums.length).fill(null);
  let dupNum;

  for (let i = 0; i < nums.length; i++) {
    if (set.includes(nums[i])) {
      dupNum = nums[i];
    }

    set[nums[i] - 1] = nums[i];
  }

  return [dupNum, set.indexOf(null) + 1];
};
