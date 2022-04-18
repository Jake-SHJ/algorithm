// Minimize Maximum Pair Sum in Array

// The pair sum of a pair (a,b) is equal to a + b.
// The maximum pair sum is the largest pair sum in a list of pairs.
// For example, if we have pairs (1,5), (2,3), and (4,4), the maximum pair sum would be max(1+5, 2+3, 4+4) = max(6, 5, 8) = 8.
// Given an array nums of even length n, pair up the elements of nums into n / 2 pairs such that:
// Each element of nums is in exactly one pair, and The maximum pair sum is minimized.
// Return the minimized maximum pair sum after optimally pairing up the elements.

// Example:
// Input: nums = [3,5,2,3]
// Output: 7
// Explanation: The elements can be paired up into pairs (3,3) and (5,2).
// The maximum pair sum is max(3+3, 5+2) = max(6, 7) = 7.

// 주어진 배열에서 숫자 씽의 합이 작도록 쌍을 지어주고, 그 중 가장 큰 합을 반환하는 문제

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  // 오름차순 정렬
  nums.sort((a, b) => a - b);
  const sums = [];
  // 숫자쌍 합 생성 (가장 작은 수 + 가장 큰 수 = 평균적으로 합이 작은 수가 생성)
  for (let i = 0; i < nums.length / 2; i++) {
    sums.push(nums[i] + nums[nums.length - 1 - i]);
  }
  return Math.max(...sums);
};
