// Flipping an Image

// Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.
// To flip an image horizontally means that each row of the image is reversed.
// For example, flipping [1,1,0] horizontally results in [0,1,1].
// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.
// For example, inverting [0,1,1] results in [1,0,0].

// Example:
// Input: image = [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// 주어진 2차 배열에서 각 row를 수평으로 뒤집은 후 반전시킨 값을 반환하는 문제

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  let result = [];

  for (const row of image) {
    result.push(
      row.reverse().map((el) => {
        return el === 0 ? 1 : 0;
      })
    );
  }

  return result;
};
// 문제에 대한 이해가 어렵고 풀이는 어렵지 않은 문제
// 각 row를 reverse로 뒤집은 뒤, map에서 0 이면 1, 1 이면 0으로 반전만 시켜주면 됨
