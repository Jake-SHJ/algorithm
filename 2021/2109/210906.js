// Make Two Arrays Equal by Reversing Sub-arrays

// Given two integer arrays of equal length target and arr.
// In one step, you can select any non-empty sub-array of arr and reverse it.
// You are allowed to make any number of steps.
// Return True if you can make arr equal to target, or False otherwise.

// Example:
// Input: target = [1,2,3,4], arr = [2,4,1,3]
// Output: true
// Explanation: You can follow the next steps to convert arr to target:
// 1- Reverse sub-array [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse sub-array [4,2], arr becomes [1,2,4,3]
// 3- Reverse sub-array [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to do so.

// 주어진 두 배열을 사용하여 subarray를 반전시켰을때 해당 순서로 만들수 있는지에 대한 여부를 반환하는 문제

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  let result = true;

  for (let i = 0; i < target.length; i++) {
    if (arr.includes(target[i])) {
      const idx = arr.findIndex((el) => el === target[i]);
      arr.splice(idx, 1);
    } else {
      return (result = false);
    }
  }

  return result;
};
// 사실 subarray를 다 떠나서, 해당 요소들이 전부 있는지 확인하면 문제 없음
