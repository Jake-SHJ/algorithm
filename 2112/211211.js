// Element Appearing More Than 25% In Sorted Array

// Given an integer array sorted in non-decreasing order,
// there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

// Example:
// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6

// 주어진 배열에서 비중이 25%가 넘어가는 요소를 반환하는 문제

/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
  const ref = arr.length / 4;
  let temp = null,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (temp === arr[i]) {
      count++;
    } else {
      temp = arr[i];
      count = 1;
    }

    if (count > ref) return temp;
  }
};
