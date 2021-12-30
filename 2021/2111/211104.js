// Three Consecutive Odds

// Given an integer array arr, return true if there are three consecutive odd numbers in the array.
// Otherwise, return false.

// Example:
// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.

// 주어진 배열에서 연속하는 숫자 3개가 홀수인 경우 true를 반환하는 문제

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    const first = arr[i] % 2;
    const second = arr[i + 1] % 2;
    const third = arr[i + 2] % 2;

    if (first !== 0 && second !== 0 && third !== 0) {
      return true;
    }
    if (third == 0) {
      i += 2;
      continue;
    }
    if (second == 0) {
      i += 1;
      continue;
    }
    continue;
  }
  return false;
};
