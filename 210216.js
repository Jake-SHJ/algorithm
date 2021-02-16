// Duplicate Zeros

// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written.
// Do the above modifications to the input array in place, do not return anything from your function.

// Example:
// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.pop();
      arr.splice(i, 0, 0);
      i++;
    }
  }
};
// 반복문에서 추가된 항목 다음으로 건너뛰는 법에서 헤맴..
