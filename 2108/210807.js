// Sum of All Subset XOR Totals

// The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.
// For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
// Given an array nums, return the sum of all XOR totals for every subset of nums.
// Note: Subsets with the same elements should be counted multiple times.
// An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

// Example 1:
// Input: nums = [1,3]
// Output: 6
// Explanation: The 4 subsets of [1,3] are:
// - The empty subset has an XOR total of 0.
// - [1] has an XOR total of 1.
// - [3] has an XOR total of 3.
// - [1,3] has an XOR total of 1 XOR 3 = 2.
// 0 + 1 + 3 + 2 = 6

// 주어진 배열의 subset들의 배타적 논리합의 총합을 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let result = 0;

  const subsets = nums.reduce(
    (subset, value) => subset.concat(subset.map((set) => [value, ...set])),
    [[]]
  );

  for (const subset of subsets) {
    if (subset.length === 0) continue;
    result += subset.reduce((acc, rec) => acc ^ rec);
  }

  return result;
};
// subset을 구하는 부분에서 난항, 구글링을 통해 함수형으로 푸는 법을 찾았으나 메모리 효율이 그리 좋지 못함
// subset만 효율적으로 구해내면 배타적 논리합의 합을 구하는건 문제가 아님..
