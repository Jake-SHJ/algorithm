// Flood Fill

// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
// You are also given three integers sr, sc, and newColor.
// You should perform a flood fill on the image starting from the pixel image[sr][sc].
// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel,
// plus any pixels connected 4-directionally to those pixels (also with the same color), and so on.
// Replace the color of all of the aforementioned pixels with newColor.
// Return the modified image after performing the flood fill.

// Example:
// Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel),
// all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

// 주어진 2차원 배열에서 image[sr][sc]와 같은 값을 가진 상하좌우 요소들을 newColor로 변환하여 반환하는 문제
// 이때 변환된 상하좌우 요소에서 또 상하좌우의 값을 확인하여 연쇄적으로 변환할 것

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const currColor = image[sr][sc];
  if (newColor === currColor) return image;

  function callDFS(img, row, col) {
    if (
      row >= img.length ||
      row < 0 ||
      col >= img[0].length ||
      col < 0 ||
      img[row][col] !== currColor
    )
      return;
    img[row][col] = newColor;
    callDFS(img, row - 1, col);
    callDFS(img, row + 1, col);
    callDFS(img, row, col + 1);
    callDFS(img, row, col - 1);
    return img;
  }
  return callDFS(image, sr, sc);
};

// discuss 참조, 문제 이해를 제대로 못해서 2번까지만 변환시켰다가 틀림.. 연쇄적으로 계속 변환 시켰어야 했음
// 재귀로 연쇄 변환을 구현한 방식
