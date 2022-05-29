// Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold

// Given an array of integers arr and two integers k and threshold,
// return the number of sub-arrays of size k and average greater than or equal to threshold.

// Example:
// Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively.
// All other sub-arrays of size 3 have averages less than 4 (the threshold).

// 주어진 배열에서 k개만큼의 요소를 가진 subarray의 평균이 threshold보다 큰 경우의 개수를 반환하는 문제

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  const std = k * threshold;
  let res = 0;

  for (let i = 0; i < arr.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    if (sum >= std) res += 1;
  }

  return res;
};

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
  let length = arr.length;
  let count = 0;
  let sum = 0;
  for (let i = 0; i < length; i++) {
    sum += arr[i];
    if (i + 1 < k) continue;
    if (sum / k >= threshold) {
      count += 1;
    }
    sum -= arr[1 + i - k];
  }
  return count;
};
// discuss 참조, 순회를 한번만 하는 방법
