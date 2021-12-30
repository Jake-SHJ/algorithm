// Array Partition I

// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn)
// such that the sum of min(ai, bi) for all i is maximized.
// Return the maximized sum.

// Example:
// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.

// 주어진 배열을 2개의 요소를 가진 배열로 파편화시켰을 때, 둘 중 작은 숫자의 합이 가장 큰 경우의 수를 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < sortedNums.length; i++) {
    if (i % 2 === 0) {
      result += sortedNums[i];
    } else {
      continue;
    }
  }

  return result;
};

// 배열을 오름차순으로 정렬하고, 짝수 인덱스의 있는 수의 합이 가장 큰 수가 나옴
