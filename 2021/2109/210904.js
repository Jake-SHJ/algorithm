// Maximum Number of Balls in a Box

// You are working in a ball factory where you have n balls numbered from lowLimit up to highLimit inclusive (i.e., n == highLimit - lowLimit + 1),
// and an infinite number of boxes numbered from 1 to infinity.
// Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball's number.
// For example, the ball number 321 will be put in the box number 3 + 2 + 1 = 6 and the ball number 10 will be put in the box number 1 + 0 = 1.
// Given two integers lowLimit and highLimit, return the number of balls in the box with the most balls.

// Example:
// Input: lowLimit = 1, highLimit = 10
// Output: 2
// Explanation:
// Box Number:  1 2 3 4 5 6 7 8 9 10 11 ...
// Ball Count:  2 1 1 1 1 1 1 1 1 0  0  ...
// Box 1 has the most number of balls with 2 balls.

// 주어진 공의 범위에서 각 자리수의 합이 가장 많은 경우의 갯수를 반환하는 문제

/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
  const map = new Map();

  for (let i = lowLimit; i < highLimit + 1; i++) {
    if (i < 10) {
      map.set(i, (map.get(i) || 0) + 1);
    } else {
      const reducedBall = i
        .toString()
        .split("")
        .reduce((acc, cur) => Number(acc) + Number(cur));
      map.set(reducedBall, (map.get(reducedBall) || 0) + 1);
    }
  }

  return Math.max(...map.values());
};
