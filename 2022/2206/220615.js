// Sum of Absolute Differences in a Sorted Array

// You are given an integer array nums sorted in non-decreasing order.
// Build and return an integer array result with the same length as nums such that result[i] is equal to the summation of 
// absolute differences between nums[i] and all the other elements in the array.
// In other words, result[i] is equal to sum(|nums[i]-nums[j]|) where 0 <= j < nums.length and j != i (0-indexed).

// Example:
// Input: nums = [2,3,5]
// Output: [4,3,5]
// Explanation: Assuming the arrays are 0-indexed, then
// result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4,
// result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3,
// result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5.

// 주어진 배열에서 각 요소별로 차의 절댓값의 합을 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  let res = [], abs = [];

  for (const num of nums) {
    for (const num2 of nums) {
      abs.push(Math.abs(num - num2));
    }
    res.push(abs.reduce((acc, cur) => acc + cur));
    abs = [];
  }

  return res;
};
// 시도는 했지만 역시나 시간 초과

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSumAbsoluteDifferences = function(nums) {
  const res = [], len = nums.length;
  const sum = nums.reduce((acc, cur) => acc + cur);
  let sumL = 0, sumR = 0;
  for (let i = 0; i < len; i++) {
    const cur = nums[i];
    sumL += nums[i];
    sumR = sum - sumL;
    const n = i + 1, A = cur * n - sumL, B = sumR - cur * (len - n);
    res.push(A + B);
  }  
  return res;
};
// 절댓값의 전체합으로 계산하는 방식을 생각했지만 원하는 답이 나오지 않음
// 알고보니 요소보다 작은 값과, 요소보다 큰 값이 부호가 달라서 정답이 나오지 않음
// 해당 답안은 discuss 참조, 요소보다 작은 값의 합과 큰 값의 합을 따로 구분하여 연산 후 두 값을 합치는 방법으로 해결
