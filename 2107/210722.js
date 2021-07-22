// Sum of All Odd Length Subarrays

// Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.
// A subarray is a contiguous subsequence of the array.
// Return the sum of all odd-length subarrays of arr.

// Example:
// Input: arr = [1,4,2,5,3]
// Output: 58
// Explanation: The odd-length subarrays of arr and their sums are:
// [1] = 1
// [4] = 4
// [2] = 2
// [5] = 5
// [3] = 3
// [1,4,2] = 7
// [4,2,5] = 11
// [2,5,3] = 10
// [1,4,2,5,3] = 15
// If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58

// 주어진 배열에서 홀수 개수의 subArray의 요소의 총합을 반환하는 문제

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= arr.length - i; j += 2) {
      result += arr.slice(i, i + j).reduce((acc, cur) => {
        return acc + cur;
      });
    }
  }

  return result;
};

// 전체 요소 순회 + 홀수 갯수만큼의 범위 순회후 각 요소부터 홀수 갯수만큼 배열에서 잘라온후
// 해당 요소의 합을 결과값에 더해나가도록 설계
