// Maximum Product of Two Elements in an Array

// Given the array of integers nums, you will choose two different indices i and j of that array.
// Return the maximum value of (nums[i]-1)*(nums[j]-1).

// Example:
// Input: nums = [3,4,5,2]
// Output: 12
// Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12.

// 주어진 배열에서 가장 큰 수 2개에 1을 뺀 숫자를 곱한 값을 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  return nums
    .sort((a, b) => b - a)
    .filter((num, idx) => idx <= 1)
    .reduce((acc, cur) => (acc - 1) * (cur - 1));
};
// 내림차순 정렬, 앞에서 큰 수 2개만 남기고, 두 수에 1을 뺀 값을 서로 곱함
