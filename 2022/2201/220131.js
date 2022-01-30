// Maximize Sum Of Array After K Negations

// Given an integer array nums and an integer k, modify the array in the following way:
// choose an index i and replace nums[i] with -nums[i].
// You should apply this process exactly k times. You may choose the same index i multiple times.
// Return the largest possible sum of the array after modifying it in this way.

// Example:
// Input: nums = [4,2,3], k = 1
// Output: 5
// Explanation: Choose index 1 and nums becomes [4,-2,3].

// 주어진 배열에서 k만큼 수를 반전시켰을 때, 요소의 합이 가장 클 때의 합을 반환하는 문제

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  // 오름차순 정렬
  nums.sort((a, b) => a - b);
  // 음수 > 양수 반전
  for (let i = 0; i < nums.length; i++) {
    if (k === 0) break;

    if (nums[i] < 0) {
      nums[i] = -nums[i];
      k -= 1;
    }
  }
  // 짝수는 양수 > 음수 > 양수이므로 횟수 제외
  // 홀수는 1회 음수로 전환 필요
  if (k % 2 !== 0) {
    // 다시 오름차순 정렬
    nums.sort((a, b) => a - b);
    // 가장 작은 수 반전
    nums[0] = -nums[0];
    // 횟수 제거
    k = 0;
  }
  // 합 반환
  return nums.reduce((cur, acc) => cur + acc, 0);
};
