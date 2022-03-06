// Detect Pattern of Length M Repeated K or More Times

// Given an array of positive integers arr, find a pattern of length m that is repeated k or more times.
// A pattern is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times consecutively without overlapping.
// A pattern is defined by its length and the number of repetitions.
// Return true if there exists a pattern of length m that is repeated k or more times, otherwise return false.

// Example:
// Input: arr = [1,2,4,4,4,4], m = 1, k = 3
// Output: true
// Explanation: The pattern (4) of length 1 is repeated 4 consecutive times. Notice that pattern can be repeated k or more times but not less.

// 주어진 배열에서 m 길이의 패턴이 k번 이상 연속으로 존재하는지 여부를 반환하는 문제

/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function (arr, m, k) {
  for (let i = m, cnt = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - m]) cnt = 0;
    else if (++cnt === m * (k - 1)) return true;
  }

  return false;
};
// discuss 참조, 5번 시도 했으나 할때마다 예외가 늘어나버려서 문제의 접근이 잘못되버림
