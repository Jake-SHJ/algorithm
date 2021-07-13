// Maximum Product Difference Between Two Pairs

// The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).
// For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
// Given an integer array nums, choose four distinct indices w, x, y, and z
// such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.
// Return the maximum such product difference.

// Example:
// Input: nums = [5,6,2,7,4]
// Output: 34
// Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
// The product difference is (6 * 7) - (2 * 4) = 34.

// 주어진 배열에서 가장 큰 두 수의 곱과 가장 작은 두 수의 곱의 차를 반환하는 문제 (가장 큰 차를 구하는 문제)

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
  const sortedNums = nums.sort((a, b) => b - a);

  return (
    sortedNums[0] * sortedNums[1] -
    sortedNums[sortedNums.length - 1] * sortedNums[sortedNums.length - 2]
  );
};

// 큰 수 찾고, 작은 수 찾아서 계산하는 어려운 방법으로 갈뻔 했으나
// 문득 정렬하면 가장 쉽게 풀 수 있겠다고 생각하여 방향을 바꿨음
