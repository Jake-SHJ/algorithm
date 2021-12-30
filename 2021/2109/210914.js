// Peak Index in a Mountain Array

// Let's call an array arr a mountain if the following properties hold:
//  - arr.length >= 3
//  - There exists some i with 0 < i < arr.length - 1 such that:
//     - arr[0] < arr[1] < ... arr[i-1] < arr[i]
//     - arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain,
// return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// Example:
// Input: arr = [0,1,0]
// Output: 1

// 주어진 배열에서 전후 요소보다 큰 peak 지점을 반환하는 문제

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return (result = i);
    } else {
      continue;
    }
  }
  return result;
};
// return arr.indexOf(Math.max(...arr)) 등 내장 함수들을 여럿 써봤지만
// Math.max를 찾는 것 + index를 찾는 것 의 순회를 두 번 돌게 되므로 문제가 있음
// for로 한번에 앞뒤로 체크하여 peak지점을 바로 찾고 해당 index를 반환하여 순회를 한번만 돌도록 함
