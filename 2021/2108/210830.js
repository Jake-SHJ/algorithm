// Replace Elements with Greatest Element on Right Side

// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
// After doing so, return the array.

// Example:
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation:
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.

// 주어진 배열에서 해당 요소의 오른쪽에서 가장 큰 값을 요소로 대체한 배열을 반환하는 문제

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  const len = arr.length;

  return arr.map((el, idx) => {
    if (idx === len - 1) return -1;
    return Math.max(...arr.slice(idx + 1, len));
  });
};
// 어렵지 않게 짧게 끝낼수 있지만 이렇게 하면 시간, 메모리 측면에서 문제가 많음

var replaceElements = function (arr) {
  let max = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = max;
    max = Math.max(max, temp);
  }

  return arr;
};
// discuss 참고, 시간, 메모리에서 약 8배의 증가 추세를 보임
