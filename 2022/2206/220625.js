// Maximum Score From Removing Stones

// You are playing a solitaire game with three piles of stones of sizes a​​​​​​, b,​​​​​​ and c​​​​​​ respectively.
// Each turn you choose two different non-empty piles, take one stone from each, and add 1 point to your score.
// The game stops when there are fewer than two non-empty piles (meaning there are no more available moves).
// Given three integers a​​​​​, b,​​​​​ and c​​​​​, return the maximum score you can get.

// Example:
// Input: a = 2, b = 4, c = 6
// Output: 6
// Explanation: The starting state is (2, 4, 6). One optimal set of moves is:
// - Take from 1st and 3rd piles, state is now (1, 4, 5)
// - Take from 1st and 3rd piles, state is now (0, 4, 4)
// - Take from 2nd and 3rd piles, state is now (0, 3, 3)
// - Take from 2nd and 3rd piles, state is now (0, 2, 2)
// - Take from 2nd and 3rd piles, state is now (0, 1, 1)
// - Take from 2nd and 3rd piles, state is now (0, 0, 0)
// There are fewer than two non-empty piles, so the game ends. Total: 6 points.

// 주어진 규칙에 맞춰 돌을 쌍으로 제거할 수 있는 최대 회수를 반환하는 문제

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  const arr = [a, b, c];
  arr.sort((a, b) => b - a);
  // 가장 많은 돌이 다른 두 합보다 큰 경우
  if (arr[0] >= arr[1] + arr[2]) {
    return arr[1] + arr[2];
  }
  // 가장 많은 돌이 다른 두 합보다 작은 경우
  if (arr[0] < arr[1] + arr[2]) {
    let count = Math.floor((arr[1] + arr[2] - arr[0]) / 2);
    return arr[0] + count;
  }
};
