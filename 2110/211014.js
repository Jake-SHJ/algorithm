// Minimum Absolute Difference

// Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.
// Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
//   a, b are from arr
//   a < b
//   b - a equals to the minimum absolute difference of any two elements in arr

// Example:
// Input: arr = [4,2,1,3]
// Output: [[1,2],[2,3],[3,4]]
// Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

// 주어진 배열의 숫자 간의 차의 절대값이 가장 작은 경우의 숫자의 배열을 반환하는 문제

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let result = [],
    minNum = Number.MAX_SAFE_INTEGER;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    if (diff < minNum) {
      result = [[arr[i], arr[i + 1]]];
      minNum = diff;
    } else if (diff === minNum) {
      result.push([arr[i], arr[i + 1]]);
    }
  }

  return result;
};
// discuss 참고, 배열 정렬 후에 차가 가장 작은 경우만 결과에 쌓는 방식
