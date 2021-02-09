// Sum of Unique Elements

// You are given an integer array nums.
// The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

// Example:
// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  // Set을 통해 unique 배열로 전환
  const numsSet = new Set(nums);

  // Set 합산
  let uniqueSum = [...numsSet].reduce((acc, num) => acc + num);

  // 중복된 수 추적하여 제거
  for (const num of [...numsSet]) {
    if (nums.filter((n) => n === num).length >= 2) {
      uniqueSum -= num;
    }
  }

  return uniqueSum;
};
