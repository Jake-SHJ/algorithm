// Find the Winner of the Circular Game

// There are n friends that are playing a game.
// The friends are sitting in a circle and are numbered from 1 to n in clockwise order.
// More formally, moving clockwise from the ith friend brings you to the (i+1)th friend for 1 <= i < n,
// and moving clockwise from the nth friend brings you to the 1st friend.
// The rules of the game are as follows:
// Start at the 1st friend.
// Count the next k friends in the clockwise direction including the friend you started at.
// The counting wraps around the circle and may count some friends more than once.
// The last friend you counted leaves the circle and loses the game.
// If there is still more than one friend in the circle, go back to step 2 starting from the friend immediately clockwise of the friend who just lost and repeat.
// Else, the last friend in the circle wins the game.
// Given the number of friends, n, and an integer k, return the winner of the game.

// Example:
// Input: n = 5, k = 2
// Output: 3
// Explanation: Here are the steps of the game:
// 1) Start at friend 1.
// 2) Count 2 friends clockwise, which are friends 1 and 2.
// 3) Friend 2 leaves the circle. Next start is friend 3.
// 4) Count 2 friends clockwise, which are friends 3 and 4.
// 5) Friend 4 leaves the circle. Next start is friend 5.
// 6) Count 2 friends clockwise, which are friends 5 and 1.
// 7) Friend 1 leaves the circle. Next start is friend 3.
// 8) Count 2 friends clockwise, which are friends 3 and 5.
// 9) Friend 5 leaves the circle. Only friend 3 is left, so they are the winner.

// 규칙에 따라 게임을 진행하였을 때 최후에 남는 숫자를 반환하는 문제

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  // player 생성
  const arr = new Array(n).fill(null).map((el, idx) => (el = idx + 1));
  let pointer = 0;
  // 규칙에 따라 player 제거
  for (let i = 0; i < n - 1; i++) {
    pointer = (pointer + k - 1) % (n - i);
    arr.splice(pointer, 1);
  }
  return arr;
};
// discuss 참조
