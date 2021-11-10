// Find Lucky Integer in an Array

// Given an array of integers arr, a lucky integer is an integer which has a frequency in the array equal to its value.
// Return a lucky integer in the array. If there are multiple lucky integers return the largest of them.
// If there is no lucky integer return -1.

// Example:
// Input: arr = [2,2,3,4]
// Output: 2
// Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

// 주어진 배열에서 값이 갯수와 같은 경우, 그 중 가장 큰 수를 반환하는 문제

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  const map = new Map();
  let result = -1;

  for (const num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const [key, value] of map) {
    if (key === value && value > result) result = value;
  }

  return result;
};
