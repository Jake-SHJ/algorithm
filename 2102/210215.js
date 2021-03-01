// Contains Duplicate

// Given an array of integers, find if the array contains any duplicates.
// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example:
// Input: [1,2,3,1]
// Output: true

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let result = false;
  const numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    const tmpNum = nums[0];
    nums.shift();
    if (nums.includes(tmpNum)) {
      return (result = true);
    } else if (!nums.includes(tmpNum) && nums.length === 0) {
      return (result = false);
    } else {
      result = false;
    }
  }
  return result;
};
// 내가 푼 답안
// 메모리 효율은 96%로 상위권이나, 연산 속도가 5%로 매우 느린 편...

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set(nums);
  return set.size < nums.length; // or set.size !== nums.length
};
// 연산 속도는 98%로 상위권, 메모리 효율은 55%로 중위권..
// Set으로 중복을 날리고 길이를 측정하는 방법이 있었다..
