// Guess Number Higher or Lower

// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
// You call a pre-defined API int guess(int num), which returns three possible results:
//     -1: Your guess is higher than the number I picked (i.e. num > pick).
//     1: Your guess is lower than the number I picked (i.e. num < pick).
//     0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

// Example:
// Input: n = 10, pick = 6
// Output: 6

// 주어진 숫자 범위 내에서 guess 함수를 통해 pick된 숫자를 반환하는 문제

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  if (n === 1) return 1;
  let min = 1,
    max = n;
  const findNum = (num) => {
    const half = Math.floor(num / 2);
    const test = guess(half);
    if (test === 1) {
      min = half + 1;
      return findNum(min + max);
    } else if (test === -1) {
      max = half - 1;
      return findNum(min + max);
    } else {
      return half;
    }
  };
  return findNum(min + max);
};
