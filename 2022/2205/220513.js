// Partition Array for Maximum Sum

// Given an integer array arr, partition the array into (contiguous) subarrays of length at most k.
// After partitioning, each subarray has their values changed to become the maximum value of that subarray.
// Return the largest sum of the given array after partitioning.
// Test cases are generated so that the answer fits in a 32-bit integer.

// Example:
// Input: arr = [1,15,7,9,2,5,10], k = 3
// Output: 84
// Explanation: arr becomes [15,15,15,9,10,10,10]

// 주어진 배열에서 k만큼 연속하도록 배열내 요소를 조합했을 때 최대 합을 반환하는 문제

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  const n = arr.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = arr[0];

  for (let i = 2; i <= n; i++) {
    // arr[1]부터 순회
    let maxVal = arr[i - 1];
    dp[i] = maxVal + dp[i - 1];
    // k번째만큼의 합을 계산했을 때 더 큰 쪽으로 변경
    for (let j = i - 1; j > 0 && i - j + 1 <= k; j--) {
      maxVal = Math.max(arr[j - 1], maxVal);
      const len = i - j + 1;
      dp[i] = Math.max(len * maxVal + dp[j - 1], dp[i]);
    }
  }

  return dp[n];
};
// discuss 참조, 처음에는 문제 의도를 잘못파악해서 그냥 큰 수만 k개 맞춰서 넣었으나 바로 wrong answer.
// 어떻게 배열을 쪼개느냐가 관건인데, 순회하면서 총합과 계속 비교해나가는 방식을 사용.
