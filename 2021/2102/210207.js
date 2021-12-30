// Number of Good Pairs

// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.

// Example:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
  let pairCount = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) pairCount += 1;
    }
  }
  return pairCount;
};

// How Many Numbers Are Smaller Than the Current Number

// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.
// That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

// Example:
// Input: nums = [6,5,4,8]
// Output: [2,1,0,3]

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  const output = nums.map((num, idx) => {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (idx !== i && num > nums[i]) {
        count += 1;
      }
    }
    return count;
  });
  return output;
};
