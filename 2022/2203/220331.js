// Check If N and Its Double Exist

// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).
// More formally check if there exists two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// Example:
// Input: arr = [10,2,5,3]
// Output: true
// Explanation: N = 10 is the double of M = 5,that is, 10 = 2 * 5.

// 주어진 배열에서 요소에 2를 곱한 수가 존재하는지 여부를 반환하는 문제

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const set = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    // 나눠서 정수가 아니면 패스
    if (arr[i] % 2 !== 0) continue;
    // 나눈 수 저장
    const target = arr[i] / 2;
    // 0이면 나눠도 0이라서 다른 0이 있는 경우만 true
    if (target === 0 && arr.lastIndexOf(target) === i) continue;
    // 나눈 수가 배열에 존재하면 true
    if (set.has(target)) return true;
  }
  // 아니면 false
  return false;
};
