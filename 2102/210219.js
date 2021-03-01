// Arranging Coins

// You have a total of n coins that you want to form in a staircase shape, where every k-th row must have exactly k coins.
// Given n, find the total number of full staircase rows that can be formed.
// n is a non-negative integer and fits within the range of a 32-bit signed integer.

// Example:
// n = 5
// The coins can form the following rows:
// ¤
// ¤ ¤
// ¤ ¤
// Because the 3rd row is incomplete, we return 2.

// 처음 접근
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  if (n === 0) return 0;
  let coinArr = [];
  let i = 0;
  while (n > 0) {
    if (n < i + 1) {
      break;
    } else {
      coinArr[i] = i + 1;
      n -= i + 1;
      i++;
    }
  }
  return coinArr[coinArr.length - 1];
};
// 배열에 저장함으로써 메모리 소모가 심함

// 재접근 - 굳이 배열이 아닌 마지막 수만 저장하면 됨
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let m = 0;
  while (m < n) {
    if (m < n) {
      m += 1;
      n -= m;
    } else {
      break;
    }
  }
  return m;
};
// 메모리 효율 상승, 속도는 다른 풀이에 비해 느린편.

// solution 참고 - 수학적 접근법
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  return parseInt(Math.sqrt(2 * n + 0.25) - 0.5);
};
// 속도, 메모리 면에서 우월, 하지만 내가 생각해낼수 있을지는 미지수
