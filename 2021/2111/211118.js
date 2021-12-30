// Convert 1D Array Into 2D Array

// You are given a 0-indexed 1-dimensional (1D) integer array original, and two integers, m and n.
// You are tasked with creating a 2-dimensional (2D) array with m rows and n columns using all the elements from original.
// The elements from indices 0 to n - 1 (inclusive) of original should form the first row of the constructed 2D array,
// the elements from indices n to 2 * n - 1 (inclusive) should form the second row of the constructed 2D array, and so on.
// Return an m x n 2D array constructed according to the above procedure, or an empty 2D array if it is impossible.

// Example:
// Input: original = [1,2,3,4], m = 2, n = 2
// Output: [[1,2],[3,4]]
// Explanation:
// The constructed 2D array should contain 2 rows and 2 columns.
// The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.
// The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.

// 주어진 배열을 m * n의 2차원 배열로 변환하여 반환하는 문제

/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (original.length !== m * n) return [];

  let result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      result[i]
        ? result[i].push(original.shift())
        : (result[i] = [original.shift()]);
    }
  }
  return result;
};
