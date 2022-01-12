// Kth Missing Positive Number

// Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.
// Find the kth positive integer that is missing from this array.

// Example:
// Input: arr = [2,3,4,7,11], k = 5
// Output: 9
// Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

// 주어진 배열에서 1부터 순차적으로 세었을 때, k번째 없는 숫자를 반환하는 문제

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let i = 1;
  while (k >= 1) {
    // 배열에 있으면 i만 증가
    if (arr.includes(i)) {
      i++;
      continue;
    }
    // k가 1일 때, k번째 없는 숫자
    if (k === 1) return i;
    // 배열에 없으면 k 감소, i 증가
    k--;
    i++;
  }
};
