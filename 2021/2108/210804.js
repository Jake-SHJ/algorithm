// Number Of Rectangles That Can Form The Largest Square

// You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.
// You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi.
// For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.
// Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.
// Return the number of rectangles that can make a square with a side length of maxLen.

// Example:
// Input: rectangles = [[5,8],[3,9],[5,12],[16,5]]
// Output: 3
// Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].
// The largest possible square is of length 5, and you can get it out of 3 rectangles.

// 주어진 직사각형의 가로, 세로 길이의 배열에서 나올 수 있는 가장 큰 정사각형의 갯수를 구하는 문제

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
  let squares = [];

  for (const rect of rectangles) {
    const sqr = Math.min(...rect);
    if (!squares[0] || squares[0] < sqr) {
      squares = [sqr];
    } else if (squares[0] === sqr) {
      squares.push(sqr);
    } else {
      continue;
    }
  }

  return squares.length;
};

// 나올 수 있는 정사각형의 갯수가 아니라 가장 큰 정사각형의 갯수만 필요함
// 크거나 같은 경우만 고려, 기존 정사각형들보다 큰 경우 배열 큰 요소만 남기고 전부 제거
// 같은 경우, 배열에 추가 > 최종적으로 정사각형 배열의 길이를 반환
