// Find Triangular Sum of an Array

// You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).
// The triangular sum of nums is the value of the only element present in nums after the following process terminates:
// Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
// For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
// Replace the array nums with newNums.
// Repeat the entire process starting from step 1.
// Return the triangular sum of nums.

// Example:
// Input: nums = [1,2,3,4,5]
// Output: 8
// Explanation:
// The above diagram depicts the process from which we obtain the triangular sum of the array.

// 주어진 배열의 숫자들을 역삼각형 형태로 더했을 때, 마지막으로 나온 숫자를 반환하는 문제 (더한 숫자는 10을 넘어서면 %10으로 10의 자리를 제거)

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
  const findSum = (arr) => {
    // 마지막 하나일 때 재귀 탈출
    if (arr.length === 1) return arr[0];
    const sums = [];
    // 각 요소의 합을 저장
    for (let i = 0; i < arr.length - 1; i++) {
      sums.push((arr[i] + arr[i + 1]) % 10);
    }
    return findSum(sums);
  };
  return findSum(nums);
};
