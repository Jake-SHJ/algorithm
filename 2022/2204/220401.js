// Valid Mountain Array

// Given an array of integers arr, return true if and only if it is a valid mountain array.
// Recall that arr is a mountain array if and only if:
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Example:
// Input: arr = [2,1]
// Output: false

// 주어진 배열에서 요소가 순차적으로 커졌다가 다시 작아지는지 여부를 반환하는 문제

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  // 가장 큰 수 확인
  const highest = arr.indexOf(Math.max(...arr));
  // 가장 큰 수가 맨 앞이나 맨 뒤에 존재하면 조기 반환
  if (highest === 0 || highest === arr.length - 1) return false;
  // 가장 큰 수 기준으로 배열 분할
  const inc = arr.slice(0, highest + 1);
  const dec = arr.slice(highest);
  // 오르막 확인
  for (let i = 1; i < inc.length; i++) {
    if (inc[i] - inc[i - 1] <= 0) return false;
  }
  // 내리막 확인
  for (let i = 1; i < dec.length; i++) {
    if (dec[i] - dec[i - 1] >= 0) return false;
  }
  // 문제없으면 true 반환
  return true;
};
